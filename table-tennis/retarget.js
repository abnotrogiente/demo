import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

import {
    retargetClipToObject,
} from "@three-ws/retarget";

import { config } from "./config";


class Retargeter {

    constructor() {
        this.mixer = null;
        this.model = null;
        this.clip = null;
    }


    async init() {

        const loader = new GLTFLoader();

        // ---------------------------------------------------------
        // Load Mixamo character
        // ---------------------------------------------------------

        const gltf = await loader.loadAsync("assets/bot.glb");

        this.model = gltf.scene;

        this.motionRoot = new THREE.Group();
        this.motionRoot.name = "GVHMRMotionRoot";

        this.motionRoot.add(this.model);

        config.scene.add(this.motionRoot);


        // ---------------------------------------------------------
        // Load GVHMR motion
        // ---------------------------------------------------------

        const response = await fetch("assets/motion.json");

        if (!response.ok) {
            throw new Error(
                `Failed to load motion.json: ${response.status} ${response.statusText}`
            );
        }

        const motion = await response.json();

        // console.log("GVHMR motion:", motion);
        // console.log("Frames:", motion.numFrames);
        // console.log("FPS:", motion.fps);


        // ---------------------------------------------------------
        // SMPL-X → three.ws canonical skeleton
        // ---------------------------------------------------------

        const SMPLX_TO_CANONICAL = {

            pelvis: "Hips",

            spine1: "Spine",
            spine2: "Spine1",
            spine3: "Spine2",

            neck: "Neck",
            head: "Head",

            left_shoulder: "LeftArm",
            left_elbow: "LeftForeArm",
            left_wrist: "LeftHand",

            right_shoulder: "RightArm",
            right_elbow: "RightForeArm",
            right_wrist: "RightHand",

            left_hip: "LeftUpLeg",
            left_knee: "LeftLeg",
            left_ankle: "LeftFoot",
            left_foot: "LeftToeBase",

            right_hip: "RightUpLeg",
            right_knee: "RightLeg",
            right_ankle: "RightFoot",
            right_foot: "RightToeBase",
        };


        // ---------------------------------------------------------
        // Build THREE.AnimationClip
        // ---------------------------------------------------------

        const tracks = [];

        const fps = motion.fps;
        const frames = motion.frames;


        for (const [sourceName, canonicalName]
            of Object.entries(SMPLX_TO_CANONICAL)) {

            const values = [];
            const times = [];

            for (let frameIndex = 0; frameIndex < frames.length; frameIndex++) {

                const frame = frames[frameIndex];

                const rotation = frame.rotations[sourceName];

                if (!rotation) {
                    continue;
                }

                times.push(frameIndex / fps);

                values.push(
                    rotation[0],
                    rotation[1],
                    rotation[2],
                    rotation[3]
                );
            }

            if (times.length === 0) {
                console.warn(
                    `No rotation data for ${sourceName}`
                );
                continue;
            }

            tracks.push(
                new THREE.QuaternionKeyframeTrack(
                    `${canonicalName}.quaternion`,
                    times,
                    values
                )
            );
        }





        // ---------------------------------------------------------
        // Create canonical animation
        // ---------------------------------------------------------

        const duration =
            frames.length > 1
                ? (frames.length - 1) / fps
                : 0;

        const clip = new THREE.AnimationClip(
            "GVHMR",
            duration,
            tracks
        );

        console.log("Created GVHMR canonical clip");
        console.log("Duration:", clip.duration);
        console.log("Tracks:", clip.tracks.length);

        console.log(
            clip.tracks.map(track => track.name)
        );


        // ---------------------------------------------------------
        // Retarget canonical animation → Mixamo
        // ---------------------------------------------------------

        const result = retargetClipToObject(
            clip,
            this.model
        );


        console.log("Retarget result:", result);

        console.log("coverage:", result.coverage);
        console.log("matched:", result.matched);
        console.log("total:", result.total);
        console.log("dropped:", result.dropped);
        console.log("hipScale:", result.hipScale);


        if (!result.clip) {

            console.error(
                "GVHMR retargeting failed:",
                result
            );

            return;
        }

        // ---------------------------------------------------------
        // Root translation
        // ---------------------------------------------------------

        const rootTimes = [];
        const rootValues = [];

        for (let frameIndex = 0; frameIndex < frames.length; frameIndex++) {

            const frame = frames[frameIndex];

            if (!frame.rootPosition) {
                continue;
            }

            rootTimes.push(frameIndex / fps);

            rootValues.push(
                frame.rootPosition[0],
                frame.rootPosition[1],
                frame.rootPosition[2]
            );
        }

        const rootPositionTrack =
            new THREE.VectorKeyframeTrack(
                ".position",
                rootTimes,
                rootValues
            );

        result.clip.tracks.push(
            rootPositionTrack
        );


        // ---------------------------------------------------------
        // Play animation
        // ---------------------------------------------------------

        this.clip = result.clip;

        this.mixer = new THREE.AnimationMixer(
            this.motionRoot
        );

        const action = this.mixer.clipAction(
            this.clip
        );

        action.reset();
        action.play();

        console.log(
            "GVHMR → Mixamo retarget successful!"
        );
    }


    update(delta) {

        if (this.mixer) {
            this.mixer.update(delta);
        }
    }

}


// export const testRetargeter = new Retargeter();