import { BackSide, Mesh, MeshStandardMaterial, Scene, SphereGeometry } from "three";

export class Sky {
    /**
     * 
     * @param {float} radius 
     * @param {Scene} scene 
     */
    constructor(scene, radius) {
        console.log("enter sky constructore")
        const material = new MeshStandardMaterial({ color: 0x00ccff });
        material.side = BackSide;

        const mesh = new Mesh(new SphereGeometry(radius), material);
        scene.add(mesh);
        console.log("sky added");
    }
}