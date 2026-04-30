import { Scene, Skeleton, SkinnedMesh } from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

/**
 * 
 * @param {SkinnedMesh} skinnedMesh 
 * @returns 
 */
function getBoneMap(skinnedMesh) {
    const bones = {};
    let i = 0;
    let bonesstr = "";
    skinnedMesh.skeleton.bones.forEach(b => {
        // console.log("bone name : " + b.name);
        bones[b.name] = b;
        bonesstr += "bone: " + b.name + ", parent: " + b.parent.name + "\n";
        i++;
        // b.position.copy(b.worldToLocal(new Vector3(2, 2, 2)))
    });
    console.log(bonesstr);
    // console.log("num bones : " + i);
    return bones;

}

export class Player {
    constructor() {
        /**@type {SkinnedMesh} */
        this.skinnedMesh = null;

        /**@type {Skeleton} */
        this.skeleton = null
    }

    /**
     * 
     * @param {Scene} scene 
     */
    async init(scene) {
        const loader = new GLTFLoader().setPath('assets/');

        const gltf = await loader.loadAsync('caracter.glb'); // ✅ THIS is what you want

        this.scene = gltf.scene;

        scene.add(this.scene);

        this.scene.traverse((obj) => {
            if (obj.isSkinnedMesh && !this.skinnedMesh) {
                this.skinnedMesh = obj;
                this.skeleton = this.skinnedMesh.skeleton;
                console.log("LOADED");
            }
        });

        if (!this.skinnedMesh) {
            throw new Error("No SkinnedMesh found in GLB");
        }

        this.boneMap = getBoneMap(this.skinnedMesh);
    }
}