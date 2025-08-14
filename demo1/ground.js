import { Camera, Color, Mesh, MeshNormalMaterial, MeshPhongMaterial, MeshStandardMaterial, PlaneGeometry, Scene, ShaderMaterial, Sphere, SphereGeometry, Vector2, Vector3 } from "three";
import { thickness } from "three/tsl";

const WIDTH = 100;
const HEIGHT = 100;

export class Ground {
    /**
     * 
     * @param {Scene} scene 
     * @param {Camera} camera
     */
    constructor(scene, camera, precision) {
        this.camera = camera;
        this.width_px = Math.round(WIDTH / precision);
        this.height_px = Math.round(HEIGHT / precision);
        const geom = new PlaneGeometry(WIDTH, HEIGHT, this.width_px, this.height_px);
        // const geom = new SphereGeometry(50);
        geom.rotateX(-Math.PI / 2);
        const lightDir = new Vector3(2, -1, 0);
        lightDir.normalize();
        const shaderUniforms = {
            'deepColor': { value: new Color(0x0000aa) },
            'shallowColor': { value: new Color(0x2255ff) },
            'lightDirection': { type: 'v3', value: lightDir },
            'lightColor': { value: new Color(0xffffff) },
            'viewPos': { type: 'v3', value: camera.position }
        };
        const vertexShader = document.getElementById('vertexShader').textContent;
        const fragmentShader = document.getElementById('fragmentShader').textContent;
        const material = new ShaderMaterial({
            uniforms: shaderUniforms,
            vertexShader: vertexShader,
            fragmentShader: fragmentShader
        });

        // this.plane = new Mesh(geom, new MeshPhongMaterial({ color: 0x0050ff }));
        this.plane = new Mesh(geom, material);

        scene.add(this.plane);

        const f = 0.5;
        this.omega = 2 * Math.PI * f;
        this.amplitude = 1;
        this.order = 12;
        this.granularity = 2.5;
        this.lambda0 = 35;
        this.initializeWaveParameters(this.order);
    }

    initializeWaveParameters(order) {
        /**@type {ArrayLike<Vector2>} */
        this.k_array = [];
        for (let i = 0; i < order; i++) {
            const lambda = this.lambda0 / Math.pow(this.granularity, i);
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
            y += Math.sin(this.k_array[i].dot(xz) + this.omega * t) * this.amplitude / Math.pow(this.granularity, i);
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
        // this.plane.geometry.computeTangents();
        // this.plane.geometry.attributes.normal.needsUpdate = true;
        // this.plane.geometry.attributes.tangent.needsUpdate = true;
        this.plane.material.uniforms['viewPos'].value = this.camera.position;
    }
}