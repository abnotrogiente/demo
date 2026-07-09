import { CylinderGeometry, Euler, Mesh, MeshBasicMaterial, Quaternion, Scene, Skeleton, SkinnedMesh, SphereGeometry, Vector3 } from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { Video } from "./video";
import { FilesetResolver, PoseLandmarker } from "@mediapipe/tasks-vision";
import { config } from "./config";

const MEDIAPIPE_JOINTS = [
    "nose",
    "left_eye_inner", "left_eye", "left_eye_outer",
    "right_eye_inner", "right_eye", "right_eye_outer",
    "left_ear", "right_ear",
    "mouth_left", "mouth_right",
    "left_shoulder", "right_shoulder",
    "left_elbow", "right_elbow",
    "left_wrist", "right_wrist",
    "left_pinky", "right_pinky",
    "left_index", "right_index",
    "left_thumb", "right_thumb",
    "left_hip", "right_hip",
    "left_knee", "right_knee",
    "left_ankle", "right_ankle",
    "left_heel", "right_heel",
    "left_foot_index", "right_foot_index"
];

const MEDIAPIPE_BONES = [
    ["left_shoulder", "right_shoulder"],
    ["left_shoulder", "left_elbow"],
    ["left_elbow", "left_wrist"],
    ["right_shoulder", "right_elbow"],
    ["right_elbow", "right_wrist"],
    ["left_shoulder", "left_hip"],
    ["right_shoulder", "right_hip"],
    ["left_hip", "right_hip"],
    ["left_hip", "left_knee"],
    ["left_knee", "left_ankle"],
    ["right_hip", "right_knee"],
    ["right_knee", "right_ankle"]
];

const pelvisBones = ["left_hip", "right_hip"];

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

    // console.log("x : " + rotation.x);
    // console.log("y : " + rotation.y);
    // console.log("z : " + rotation.z);
    // console.log("\n\n");
    const euler = new Euler(
        rotation.z * dampener, // GOOD
        rotation.x * dampener,
        rotation.y * dampener, // GOOD
        "YZX" // FINAL YZX // YXZ cht // ZYX en cvrt
    );

    const quat = new Quaternion().setFromEuler(euler);

    bone.quaternion.slerp(quat, lerpAmount);
}

class Player {
    constructor(scene, id) {

        this.mediapipe_joints = {}; // name -> mesh
        // const labels = {};

        const sphereGeo = new SphereGeometry(0.03, 16, 16);
        const mat = new MeshBasicMaterial({ color: 0xff4444 });

        MEDIAPIPE_JOINTS.forEach(name => {
            // Sphere
            const mesh = new Mesh(sphereGeo, mat);
            mesh.position.z = 10;
            scene.add(mesh);
            this.mediapipe_joints[name] = mesh;

            // // Label (sprite)
            // const canvas = document.createElement("canvas");
            // const ctx = canvas.getContext("2d");
            // ctx.font = "24px Arial";
            // ctx.fillStyle = "white";
            // ctx.fillText(name, 10, 30);

            // const texture = new THREE.CanvasTexture(canvas);
            // const spriteMat = new THREE.SpriteMaterial({ map: texture });
            // const sprite = new THREE.Sprite(spriteMat);

            // sprite.scale.set(0.3, 0.15, 1);
            // scene.add(sprite);

            // labels[name] = sprite;
        });

        this.mediapipe_bones = [];

        const cylGeo = new CylinderGeometry(0.015, 0.015, 1, 8);
        const cylMat = new MeshBasicMaterial({ color: 0x00ff88 });

        MEDIAPIPE_BONES.forEach(([a, b]) => {
            const mesh = new Mesh(cylGeo, cylMat);
            mesh.position.z = 10;
            scene.add(mesh);
            // if (JSON.stringify([a, b]) == JSON.stringify(pelvisBones)) mesh.name = "pelvis" + id;

            this.mediapipe_bones.push({ mesh, a, b });
        });

        this.pelvis = new Mesh(sphereGeo, cylMat);
        this.pelvis.name = "pelvis" + id;
        scene.add(this.pelvis);
        if (id == 2) this.pelvis.visible = false; // TODO faire en fonction du nombre de joueurs
    }

    updateSkeletonFromLandmarks(landmarks, offset) {
        const scale = 1;

        MEDIAPIPE_JOINTS.forEach((name, i) => {
            const lm = landmarks[i];
            if (!lm) return;

            const x = lm.x * scale + offset.x;
            const y = -lm.y * scale + offset.y; // 1
            const z = -lm.z * scale + offset.z; // -3

            this.mediapipe_joints[name].position.set(x, y, z);
            // labels[name].position.set(x, y + 0.05, z);
        });

        this.mediapipe_bones.forEach(({ mesh, a, b }) => {
            const p1 = this.mediapipe_joints[a].position;
            const p2 = this.mediapipe_joints[b].position;

            if (JSON.stringify([a, b]) == JSON.stringify(pelvisBones)) {
                this.pelvis.position.addVectors(p1, p2).divideScalar(2);
            }

            // console.log(JSON.stringify([a, b]) == JSON.stringify(pelvisBones)

            const mid = new Vector3().addVectors(p1, p2).multiplyScalar(0.5);
            mesh.position.copy(mid);

            const dir = new Vector3().subVectors(p2, p1);
            const len = dir.length();

            mesh.scale.set(1, len, 1);

            mesh.quaternion.setFromUnitVectors(
                new Vector3(0, 1, 0),
                dir.clone().normalize()
            );
        });
    }




}

export class Players {
    /**
     * 
     * @param {Video} video 
     * @param {Scene} scene 
     */
    constructor(video, scene) {
        this.video = video;

        /**@type {SkinnedMesh} */
        this.skinnedMesh = null;

        /**@type {Skeleton} */
        this.skeleton = null


        this.player1 = new Player(scene, 1);
        this.player2 = new Player(scene, 2);

    }

    /**
     * 
     * @param {Scene} scene 
     */
    async init(scene) {

        this.vision = await FilesetResolver.forVisionTasks(
            "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision/wasm"
        );

        this.numPose = 1;
        await this.setNumPoseDetected(this.numPose);

        this.setVideo(this.video);

        ///////////////////////////////////////////////////////////////
        //LOAD MODEL/////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////


        const loader = new GLTFLoader().setPath('assets/');

        const gltf = await loader.loadAsync('caracter.glb');

        this.scene = gltf.scene;

        // scene.add(this.scene); // TODO add model and skin it (retarget mediapipe pose)

        this.scene.traverse((obj) => {
            if (obj.isSkinnedMesh && !this.skinnedMesh) {
                this.skinnedMesh = obj;
                this.skeleton = this.skinnedMesh.skeleton;
                this.#setModelBonesAndConnections(this.skinnedMesh);
                // console.log("LOADED");
            }
        });

        if (!this.skinnedMesh) {
            throw new Error("No SkinnedMesh found in GLB");
        }

    }

    async setNumPoseDetected(num) {
        if (num <= 0) {
            console.warn("Incorrect number of pose for detection");
            return;
        }
        this.poseLandmarker = await PoseLandmarker.createFromOptions(this.vision, {
            baseOptions: {
                modelAssetPath: "https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_full/float16/1/pose_landmarker_full.task",
                delegate: "GPU" // THIS enables GPU
            },
            runningMode: "VIDEO",
            numPoses: num
        });
    }

    setVideo(video) {
        if (this.canvas_2D) {
            document.body.removeChild(this.canvas_2D);
        }
        this.video = video;
        this.canvas_2D = document.createElement("canvas");
        this.ctx_2D = this.canvas_2D.getContext("2d");

        this.canvas_2D.width = this.video.webcamVideo.videoWidth / 2;
        this.canvas_2D.height = this.video.webcamVideo.videoHeight / 2;

        document.body.appendChild(this.canvas_2D);
        this.canvas_2D.style.position = "absolute";
        this.canvas_2D.style.top = "0";
        this.canvas_2D.style.left = "0";
        this.canvas_2D.style.zIndex = 9999;
    }


    detectFrame() {
        if (this.video.webcamVideo.readyState < 2) return;
        const now = performance.now();
        const result = this.poseLandmarker.detectForVideo(this.video.webcamVideo, now);

        if (result.landmarks.length > 0) {

            this.ctx_2D.clearRect(0, 0, this.canvas_2D.width, this.canvas_2D.height);
            this.drawLandmarks2D(result.landmarks[0]);

            const landmarks3D1 = result.worldLandmarks[0];
            const skeletonOffset = new Vector3(0, 0, -3);
            this.player1.updateSkeletonFromLandmarks(landmarks3D1, skeletonOffset);
            const landmarks3D2 = result.worldLandmarks[1];
            // console.log("landmarks : " + JSON.stringify(result.worldLandmarks));
            if (landmarks3D2 !== undefined) {
                skeletonOffset.z = 3;
                this.player2.updateSkeletonFromLandmarks(landmarks3D2, skeletonOffset);
                this.drawLandmarks2D(result.landmarks[1]);

            }
            // this.#updateSkeletonFromLandmarks(landmarks3D);
            //this.#applyPose(result);


        }
    }



    drawLandmarks2D(landmarks) {
        // return;
        // draw lines
        if (!config.params.showVideo) return;
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

    /**
     * 
     * @param {SkinnedMesh} model 
     */
    #setModelBonesAndConnections(model) {
        const skeleton = model.skeleton;
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

    #applyPose(result) {
        const riggedPose = Pose.solve(result.worldLandmarks[0], result.landmarks[0], {
            runtime: "mediapipe",
            video: HTMLVideoElement
        });

        let x, y, z;
        const skeleton = this.player.skeleton;

        // --- APPLY ROTATIONS ---
        // console.log("riggedPose: \n" + JSON.stringify(riggedPose));

        // Spine rotations (apply to hierarchy from base to top)
        // rigRotation(this.bones.hips, riggedPose.Hips.rotation, 0.8, 0.3);
        // rigRotation(this.bones.spine, riggedPose.Spine, 0.9, 0.3);
        // rigRotation(this.bones.chest, riggedPose.Spine, 0.3, 0.3);

        // Left arm
        const leftArm = riggedPose.LeftUpperArm;
        leftArm.z = -leftArm.z;
        const leftForeArm = riggedPose.LeftLowerArm;
        leftForeArm.z = -leftForeArm.z;

        // rigRotation(this.bones.leftShoulder, leftArm, 0.8, 0.3, 'arm');
        rigRotation(this.bones.leftUpperArm, leftArm, 0.9, 0.3, 'arm');
        rigRotation(this.bones.leftLowerArm, leftForeArm, 1.0, 0.25, 'arm');

        // Right arm
        const rightArm = riggedPose.RightUpperArm;
        const rightForeArm = riggedPose.RightLowerArm;

        // rigRotation(this.bones.rightShoulder, rightArm, 0.8, 0.3, 'arm');
        rigRotation(this.bones.rightUpperArm, rightArm, 0.9, 0.3, 'arm');
        rigRotation(this.bones.rightLowerArm, rightForeArm, 1.0, 0.25, 'arm');

        // Legs
        const lul_w = riggedPose.LeftUpperLeg;
        x = lul_w.y * 0;
        y = -lul_w.z;
        z = -lul_w.x + 3.14;
        const lul = new Vector3(x, y, z);
        rigRotation(this.bones.leftUpperLeg, lul, 0.9, 0.2, 'leg');
        // rigRotation(this.bones.leftUpperLeg, riggedPose.LeftUpperLeg, 0.9, 0.2, 'leg');
        // rigRotation(this.bones.leftLowerLeg, riggedPose.LeftLowerLeg, 1.0, 0.2, 'leg');

        // rigRotation(this.bones.rightUpperLeg, riggedPose.RightUpperLeg, 0.9, 0.2, 'leg');
        // rigRotation(this.bones.rightLowerLeg, riggedPose.RightLowerLeg, 1.0, 0.2, 'leg');

        // Position (scaled!)
        const scale = 1.5; // tweak this

        //TODO enable hips movements in the future
        this.bones.hips.position.lerp(
            new Vector3(
                riggedPose.Hips.position.x * scale,
                riggedPose.Hips.position.z * scale + 3, // +3
                -riggedPose.Hips.position.y * scale + 1
            ),
            0.3
        );

        // this.player.skinnedMesh.updateMatrixWorld(true);
        // this.player.skeleton.calculateInverses();

        // landmarks3D.forEach(point => {
        //     console.log(point.x, point.y, point.z); // 3D coordinates
        // });
    }
}