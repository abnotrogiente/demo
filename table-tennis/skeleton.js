import { Bone, Quaternion, Scene, Skeleton, SkeletonHelper, SkinnedMesh, Vector3, WebGLRenderer } from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";


// const trackingBone2MeshBone = 
const trackingBone2MeshBone = {
    root: "mixamorigHips",

    spine: "mixamorigSpine",
    thorax: "mixamorigSpine2",
    neck_base: "mixamorigNeck",
    head: "mixamorigHead",

    left_shoulder: "mixamorigLeftShoulder",
    left_elbow: "mixamorigLeftForeArm",
    left_wrist: "mixamorigLeftHand",

    right_shoulder: "mixamorigRightShoulder",
    right_elbow: "mixamorigRightForeArm",
    right_wrist: "mixamorigRightHand",

    left_hip: "mixamorigLeftUpLeg",
    left_knee: "mixamorigLeftLeg",
    left_foot: "mixamorigLeftFoot",

    right_hip: "mixamorigRightUpLeg",
    right_knee: "mixamorigRightLeg",
    right_foot: "mixamorigRightFoot",
};

/**
 * 
 * @param {SkinnedMesh} skinnedMesh 
 * @returns 
 */
function getBoneMap(skinnedMesh) {
    const bones = {};
    let i = 0;
    skinnedMesh.skeleton.bones.forEach(b => {
        console.log("bone name : " + b.name);
        bones[b.name] = b;
        i++;
        // b.position.copy(b.worldToLocal(new Vector3(2, 2, 2)))
    });
    console.log("num bones : " + i);
    return bones;

}

// Project a 3D position to 2D screen coordinates
export function worldToScreenPosition(pos, camera, renderer) {
    const vector = pos.clone().project(camera);
    const widthHalf = 0.5 * renderer.domElement.clientWidth;
    const heightHalf = 0.5 * renderer.domElement.clientHeight;
    return {
        x: (vector.x * widthHalf) + widthHalf,
        y: -(vector.y * heightHalf) + heightHalf
    };
}


// Utility: Load JSON file (async)
export async function loadPoseData(url) {
    const response = await fetch(url);
    return await response.json();
}





export class Players {
    /**
     * 
     * @param {Camera} camera 
     * @param {Scene} scene 
     * @param {WebGLRenderer} renderer 
     */
    constructor(camera, scene, renderer) {
        this.skeletons = [];
        this.frames = [];
        this.initialized = false;
        this.camera = camera;
        this.scene = scene;
        this.renderer = renderer;

    }


    async init() {
        this.data = await loadPoseData('assets/results_rally_3d.json');
        this.meta = this.data.meta_info;
        // Build one skeleton per player (assume 2 players per frame)
        this.skeletons = [this.#buildSkeleton(true), this.#buildSkeleton()];


        // Store all frames
        this.frames = this.data.instance_info;
        this.initialized = true;

        const loadData = () => {
            new GLTFLoader()
                .setPath('assets/')
                .load('Soldier.glb', gltfReader);
        }


        const gltfReader = (gltf) => {

            this.player = gltf.scene;

            if (this.player) {
                // this.scene.add(this.player);

                let skinnedMesh = null;

                this.player.traverse((obj) => {
                    if (obj.isSkinnedMesh && !skinnedMesh) {
                        skinnedMesh = obj;
                    }
                });

                if (!skinnedMesh) {
                    console.warn("No SkinnedMesh found in GLB");
                    return;
                }

                // Attach your skeleton root if needed
                // this.player.add(this.skeletons[0][0]);
                this.boneMap = getBoneMap(skinnedMesh);

                // Bind correctly
                // skinnedMesh.bind(new Skeleton(this.skeletons[0]));

            } else {
                console.log("Load FAILED.");
            }


        }

        loadData();
    }

    // applyPose() {
    //     if (!this.boneMap) return;
    //     for (const [id, name] of Object.entries(this.meta.keypoint_id2name)) {
    //         const mixamoName = trackingBone2MeshBone[name];
    //         if (!mixamoName) continue;

    //         /**@type {Bone} */
    //         const bone = this.boneMap[mixamoName];
    //         if (!bone) continue;

    //         const kp = this.skeletons[0][id].position;
    //         if (!kp) continue;

    //         // Example: set position (root only usually)
    //         if (name === "root") {
    //             bone.position.set(kp.x, kp.y, kp.z);
    //             bone.position.copy(bone.worldToLocal(new Vector3(kp.x, kp.y, kp.z)));
    //             console.log("MOVED");
    //         }
    //     }
    // }

    #alignBoneToDirection(bone, dir, strength = 1.0) {
        if (!bone) return;

        // ⚠️ IMPORTANT: Mixamo bones usually point along +Y
        const forward = new Vector3(0, 1, 0);

        const quat = new Quaternion().setFromUnitVectors(forward, dir);
        bone.quaternion.slerp(quat, strength);
    }


    // --- MAIN RETARGET FUNCTION --------------------------------------------

    applyPose() {

        // 1. Move root (hips)
        const rootKP = this.skeletons[0][0];
        if (!this.boneMap) return;
        if (rootKP && this.boneMap["mixamorigHips"]) {

            /**@type {Bone} */
            const root = this.boneMap["mixamorigHips"];
            root.position.copy(root.worldToLocal(new Vector3(
                rootKP.x,
                rootKP.y,
                rootKP.z
            )));
        }

        // 2. Apply rotations from links
        this.meta.skeleton_links.forEach(([a, b]) => {

            const nameA = this.meta.keypoint_id2name[a];
            const nameB = this.meta.keypoint_id2name[b];

            const boneName = trackingBone2MeshBone[nameA];
            if (!boneName) return;

            const bone = this.boneMap[boneName];
            if (!bone) return;

            const kpA = this.skeletons[0][a];
            const kpB = this.skeletons[0][b];
            if (!kpA || !kpB) return;

            const posA = kpA.position;
            const posB = kpB.position;

            const dir = new Vector3().subVectors(posB, posA).normalize();

            this.#alignBoneToDirection(bone, dir, 0.7);
        });
    }


    /**
     * Update both skeletons to the given frame index
     * @param {number} frameIdx 
     */
    update(frameIdx = 0) {
        if (!this.initialized || !this.frames[frameIdx]) return;
        const instances = this.frames[frameIdx].instances;
        for (let i = 0; i < this.skeletons.length; i++) {
            if (instances[i]) {
                this.#updateSkeletonPose(this.skeletons[i], instances[i].keypoints);
            }
        }
        this.applyPose();
    }

    /**
     * 
     * @param {Bones[]} bones 
     * @param {*} keypoints 
     */
    #updateSkeletonPose(bones, keypoints) {
        for (let i = 0; i < bones.length; i++) {
            // this.#updateLael(bones[i]);
            const [x, y, z] = keypoints[i];
            if (i == 0) bones[i].position.set(x, z, y);
            else bones[i].position.copy(new Vector3(x, z, y).sub(bones[0].position));
            if (!(i == 0 || i == 3)) continue;
            // console.log("bone name : " + bones[i].name);
            // console.log("idx bone name : " + this.meta.keypoint_id2name[i + ""]);
            // console.log("z: " + z);
            // console.log("\n\n");

            // console.log("bone pos : " + x + ", " + y + ", " + z);
        }
    }

    /**
     * 
     * @param {Bone} bone 
     */
    #updateLabel(bone) {
        const label = bone.userData.label;
        if (!label) return;
        // Get world position of the bone
        const pos = new Vector3();
        bone.getWorldPosition(pos);
        const screen = worldToScreenPosition(pos, this.camera, this.renderer);
        label.style.left = `${screen.x}px`;
        label.style.top = `${screen.y}px`;
        label.style.position = 'absolute';
        label.style.pointerEvents = 'none';
    }


    #buildSkeleton(debug = false) {
        const bones = [];
        // Create all bones
        for (let i = 0; i < this.meta.num_keypoints; i++) {
            const bone = new Bone();
            this.scene.add(bone);
            bone.name = this.meta.keypoint_id2name[i.toString()];
            bones.push(bone);

            const div = document.createElement('div');
            div.className = 'label';
            div.textContent = bone.name;
            document.body.appendChild(div);

            if (debug) bone.userData.label = div;
        }
        // Connect bones according to skeleton_links
        this.meta.skeleton_links.forEach(([parentIdx, childIdx]) => {
            bones[parentIdx].add(bones[childIdx]);
        });

        const root = bones[0]
        const helper = new SkeletonHelper(root);
        if (debug) this.scene.add(helper);
        return bones;
    }
}

// Example usage (in your main app):
// (async () => {
//   const data = await loadPoseData('assets/results_rally_3d.json');
//   const this.meta = data.meta_info;
//   const skeletonRoots = buildSkeleton(meta);
//   // Add skeletonRoots[0] to your THREE.Scene
//   // For each frame:
//   //   updateSkeletonPose(skeletonRoots, frame.instances[0].keypoints);
// })();

// For mesh skinning: use the same bones array as the skeleton for THREE.SkinnedMesh
