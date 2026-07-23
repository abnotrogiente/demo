import { AnimationMixer, Object3D, Quaternion, Vector3 } from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { config } from "./config";

const loader = new GLTFLoader().setPath('assets/');


export async function loadAsset({
    position = new Vector3(),
    rotation = new Quaternion(),
    dimensions = new Vector3(1, 1, 1),
    color = 0xffffff,
    model = null,
    modelOffset = new Vector3() }) {
    const mesh = new Object3D();
    mesh.position.copy(position);
    mesh.quaternion.copy(rotation);
    const gltf = await loader.loadAsync(model);
    gltf.scene;
    if (gltf.scene) {

        mesh.add(gltf.scene);
        // this.scene.add(gltf.scene);
        gltf.scene.position.copy(modelOffset);

        config.mixer = new AnimationMixer(gltf.scene);
        const clips = gltf.animations;
        console.log("animations : " + JSON.stringify(clips));
        clips.forEach(clip => {
            console.log("CLIP : " + clip.name);
            const action = config.mixer.clipAction(clip);
            action.play();
        });

        // gltf.scene.children.forEach(child => {
        //     gltf.scene.remove(child);
        //     mesh.add(child);
        //     console.log("ADDING : " + child.name);
        //     child.position.add(modelOffset);
        // });
    }
    else console.warn("LOADING FAILED");
    return mesh;
}