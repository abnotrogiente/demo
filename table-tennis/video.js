import { FilesetResolver, PoseLandmarker } from "@mediapipe/tasks-vision";
import { Bone, Euler, Quaternion, Vector3 } from "three";
import { Player } from "./player";
import { Pose } from "kalidokit";

/**
 * Apply rigged rotation to bone with proper coordinate system transformation
 * @param {Bone} bone 
 * @param {*} rotation - Rotation object with x, y, z properties
 * @param {*} dampener - Dampening factor (0-1)
 * @param {*} lerpAmount - Interpolation amount (0-1)
 * @param {string} type - Joint type: 'arm', 'leg', 'spine', 'hip'
 * @returns 
 */
function rigRotation(bone, rotation, dampener = 1, lerpAmount = 0.7) {
    if (!bone || !rotation) return;

    console.log("x : " + rotation.x);
    console.log("y : " + rotation.y);
    console.log("z : " + rotation.z);
    console.log("\n\n");
    const euler = new Euler(
        rotation.z * dampener, // GOOD
        rotation.x * dampener,
        rotation.y * dampener, // GOOD
        "YZX" // YXZ cht // ZYX en cvrt
    );

    const quat = new Quaternion().setFromEuler(euler);

    bone.quaternion.slerp(quat, lerpAmount);
}

export class Video {
    /**
     * 
     * @param {Player} player 
     */
    constructor(player) {
        this.player = player;
        const skeleton = player.skeleton;
        this.bones = {
            hips: skeleton.getBoneByName("pelvis_01"),

            spine: skeleton.getBoneByName("spine_02"),
            chest: skeleton.getBoneByName("chest_03"),
            neck: skeleton.getBoneByName("neck_04"),
            head: skeleton.getBoneByName("head_05"),

            leftShoulder: skeleton.getBoneByName("shoulder_left_06"),
            leftUpperArm: skeleton.getBoneByName("upper_arm_left_07"),
            leftLowerArm: skeleton.getBoneByName("forearm_left_08"),
            leftHand: skeleton.getBoneByName("hand_left_09"),

            rightShoulder: skeleton.getBoneByName("shoulder_right_013"),
            rightUpperArm: skeleton.getBoneByName("upper_arm_right_014"),
            rightLowerArm: skeleton.getBoneByName("forearm_right_015"),
            rightHand: skeleton.getBoneByName("hand_right_016"),

            leftUpperLeg: skeleton.getBoneByName("thigh_left_020"),
            leftLowerLeg: skeleton.getBoneByName("shinL_021"),
            leftFoot: skeleton.getBoneByName("foot_left_022"),

            rightUpperLeg: skeleton.getBoneByName("thigh_right_023"),
            rightLowerLeg: skeleton.getBoneByName("shinR_024"),
            rightFoot: skeleton.getBoneByName("foot_right_025"),
        };
        this.connections = [
            [11, 13], [13, 15], // left arm
            [12, 14], [14, 16], // right arm
            [11, 12],           // shoulders
            [23, 24],           // hips
            [11, 23], [12, 24], // torso
            [23, 25], [25, 27], // left leg
            [24, 26], [26, 28], // right leg
        ];


    }

    async init() {
        const stream = await this.getCameraStream(false);
        this.webcamVideo = document.createElement('video');
        this.webcamVideo.srcObject = stream;
        this.webcamVideo.playsInline = true;
        this.webcamVideo.muted = true;

        await this.webcamVideo.play();

        const vision = await FilesetResolver.forVisionTasks(
            "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision/wasm"
        );

        this.poseLandmarker = await PoseLandmarker.createFromOptions(vision, {
            baseOptions: {
                modelAssetPath: "https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_full/float16/1/pose_landmarker_full.task",
                delegate: "GPU" // THIS enables GPU
            },
            runningMode: "VIDEO",
            numPoses: 1
        });

        this.canvas_2D = document.createElement("canvas");
        this.ctx_2D = this.canvas_2D.getContext("2d");

        this.canvas_2D.width = this.webcamVideo.videoWidth;
        this.canvas_2D.height = this.webcamVideo.videoHeight;

        document.body.appendChild(this.canvas_2D);
        this.canvas_2D.style.position = "absolute";
        this.canvas_2D.style.top = "0";
        this.canvas_2D.style.left = "0";


        // this.player.scene.rotation.y = Math.PI; // flip front direction
        // this.player.scene.rotation.x = Math.PI / 2;
        // this.player.scene.position.y += 1;
    }

    drawLandmarks(landmarks) {
        this.ctx_2D.clearRect(0, 0, this.canvas_2D.width, this.canvas_2D.height);

        // draw lines
        this.ctx_2D.strokeStyle = "lime";
        this.ctx_2D.lineWidth = 2;

        for (const [a, b] of this.connections) {
            const p1 = landmarks[a];
            const p2 = landmarks[b];

            if (!p1 || !p2) continue;

            this.ctx_2D.beginPath();
            this.ctx_2D.moveTo(p1.x * this.canvas_2D.width, p1.y * this.canvas_2D.height);
            this.ctx_2D.lineTo(p2.x * this.canvas_2D.width, p2.y * this.canvas_2D.height);
            this.ctx_2D.stroke();
        }

        // draw points
        for (const p of landmarks) {
            if (!p) continue;

            this.ctx_2D.beginPath();
            this.ctx_2D.arc(
                p.x * this.canvas_2D.width,
                p.y * this.canvas_2D.height,
                4,
                0,
                Math.PI * 2
            );
            this.ctx_2D.fillStyle = "red";
            this.ctx_2D.fill();
        }
    }

    async getCameraStream(useMock = false) {
        if (useMock) {
            const video = document.createElement('video');
            video.src = './assets/rally.mp4';
            video.loop = true;
            video.muted = true;
            await video.play();
            return video.captureStream();
        }

        return navigator.mediaDevices.getUserMedia({ video: true });
    }

    detectFrame() {
        if (this.webcamVideo.readyState < 2) return;
        const now = performance.now();
        const result = this.poseLandmarker.detectForVideo(this.webcamVideo, now);

        if (result.landmarks.length > 0) {
            const landmarks = result.landmarks[0];

            this.drawLandmarks(landmarks); // 2D overlay
            const landmarks3D = result.worldLandmarks[0];

            const riggedPose = Pose.solve(result.worldLandmarks[0], result.landmarks[0], {
                runtime: "mediapipe",
                video: HTMLVideoElement
            });

            const skeleton = this.player.skeleton;

            // --- APPLY ROTATIONS ---
            // console.log("riggedPose: \n" + JSON.stringify(riggedPose));

            // Spine rotations (apply to hierarchy from base to top)
            // rigRotation(this.bones.hips, riggedPose.Hips.rotation, 0.8, 0.3);
            // rigRotation(this.bones.spine, riggedPose.Spine, 0.9, 0.3);
            // rigRotation(this.bones.chest, riggedPose.Spine, 0.3, 0.3);

            // Left arm
            const leftArm = riggedPose.LeftUpperArm;
            const leftForeArm = riggedPose.LeftLowerArm;

            // rigRotation(this.bones.leftShoulder, leftArm, 0.8, 0.3, 'arm');
            // rigRotation(this.bones.leftUpperArm, leftArm, 0.9, 0.3, 'arm');
            // rigRotation(this.bones.leftLowerArm, leftForeArm, 1.0, 0.25, 'arm');

            // Right arm
            const rightArm = riggedPose.RightUpperArm;
            const rightForeArm = riggedPose.RightLowerArm;

            // rigRotation(this.bones.rightShoulder, rightArm, 0.8, 0.3, 'arm');
            rigRotation(this.bones.rightUpperArm, rightArm, 0.9, 0.3, 'arm');
            // rigRotation(this.bones.rightLowerArm, rightForeArm, 1.0, 0.25, 'arm');

            // Legs
            // rigRotation(this.bones.leftUpperLeg, riggedPose.LeftUpperLeg, 0.9, 0.2, 'leg');
            // rigRotation(this.bones.leftLowerLeg, riggedPose.LeftLowerLeg, 1.0, 0.2, 'leg');

            // rigRotation(this.bones.rightUpperLeg, riggedPose.RightUpperLeg, 0.9, 0.2, 'leg');
            // rigRotation(this.bones.rightLowerLeg, riggedPose.RightLowerLeg, 1.0, 0.2, 'leg');

            // Position (scaled!)
            const scale = 1.5; // tweak this

            //TODO enable hips movements in the future
            // this.bones.hips.position.lerp(
            //     new Vector3(
            //         riggedPose.Hips.position.x * scale,
            //         riggedPose.Hips.position.y * scale,
            //         -riggedPose.Hips.position.z * scale
            //     ),
            //     0.3
            // );

            // this.player.skinnedMesh.updateMatrixWorld(true);
            // this.player.skeleton.calculateInverses();

            // landmarks3D.forEach(point => {
            //     console.log(point.x, point.y, point.z); // 3D coordinates
            // });
        }
    }
}