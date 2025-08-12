import { Mesh, MeshPhongMaterial, MeshStandardMaterial, PlaneGeometry, Scene } from "three";

const WIDTH = 100;
const HEIGHT = 100;

export class Ground {
    /**
     * 
     * @param {Scene} scene 
     */
    constructor(scene, precision) {
        this.width_px = Math.round(WIDTH / precision);
        this.height_px = Math.round(HEIGHT / precision);
        const geom = new PlaneGeometry(WIDTH, HEIGHT, this.width_px, this.height_px);
        geom.rotateX(-Math.PI / 2);
        this.plane = new Mesh(geom, new MeshPhongMaterial({ color: 0xff0000, wireframe: true }));

        scene.add(this.plane);

        const zeroPlane = new Mesh(new PlaneGeometry(WIDTH, HEIGHT), new MeshStandardMaterial({ color: 0xffffff }));
        zeroPlane.geometry.rotateX(-Math.PI / 2);
        scene.add(zeroPlane);


        const positions = geom.attributes.position;
        // for (let i = 0; i < positions.count; i++) {
        //     positions.setY(i, i / 10000);
        // }

        for (let i = 0; i <= this.width_px; i++) {
            for (let j = 0; j <= this.height_px; j++) {
                const vertexIndex = this.getVertexIndex(i, j);
                positions.setY(vertexIndex, Math.sqrt((i - this.width_px / 2) * (i - this.width_px / 2) + (j - this.height_px / 2) * (j - this.height_px / 2)) / 10);
            }
        }
        // positions.setY(this.getVertexIndex(100, 0), 5);
        positions.needsUpdate = true;
    }

    getVertexIndex(i, j) {
        if (i < 0 || i >= this.width_px) console.log("i out of bounds");
        if (j < 0 || j >= this.height_px) console.log("j out of bounds");
        return i * (this.width_px + 1) + j;
    }
}