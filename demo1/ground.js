import { Mesh, MeshNormalMaterial, MeshPhongMaterial, MeshStandardMaterial, PlaneGeometry, Scene, SphereGeometry, Vector2, Vector3 } from "three";

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
        geom.rotateX(Math.PI / 2);
        this.plane = new Mesh(geom, new MeshPhongMaterial({ color: 0x0050ff}));

        scene.add(this.plane);

        const f      = 0.5;
        this.omega   = 2 * Math.PI * f;
        this.amplitude = 1;
        this.order = 10;
        this.initializeWaveParameters(this.order);
    }

    initializeWaveParameters(order) {
        /**@type {ArrayLike<Vector2>} */
        this.k_array = [];
        for (let i = 0; i < order; i++) {
            const lambda = 20 / Math.pow(2, i);
            const pulse = 2 * Math.PI / lambda;
            const k = new Vector2(Math.random(), Math.random());
            k.normalize();
            k.multiplyScalar(pulse);
            this.k_array.push(k)
        }
    }

    /**
     * 
     * @param {Vector2} xy 
     * @returns 
     */
    waveFunction(xz, t) {
        let y = 0;
        for (let i = 0; i < this.order; i++) {
            y += Math.sin(this.k_array[i].dot(xz) + this.omega * t) * this.amplitude / Math.pow(2, i);
        }
        return y;
        //return Math.sin(this.k * x + this.omega * t);
    }

    update(t) {
        const positions = this.plane.geometry.attributes.position;
        for (let i = 0; i < positions.count; i++) {
            const x = positions.getX(i);
            const z = positions.getZ(i);
            const y = this.waveFunction(new Vector2(x, z), t);
            positions.setY(i, y);
        }
        positions.needsUpdate = true;
        this.plane.geometry.computeVertexNormals();
    //     this.plane.geometry.computeTangents();
    //     this.plane.geometry.attributes.normal.needsUpdate = true;
    //     this.plane.geometry.attributes.tangent.needsUpdate = true;
    }
}