import { Camera, Color, Mesh, MeshNormalMaterial, MeshPhongMaterial, MeshStandardMaterial, PlaneGeometry, Scene, ShaderMaterial, Sphere, SphereGeometry, Vector2, Vector3 } from "three";
import GUI from "three/examples/jsm/libs/lil-gui.module.min.js";
import { thickness } from "three/tsl";

const editMode = true;

const WIDTH = 400;
const HEIGHT = 400;

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
        this.sunAngleWrapper = {
            'val': Math.PI / 6
        }
        const sunAngle = this.sunAngleWrapper.val;
        const lightDir = new Vector3(Math.cos(sunAngle), -Math.sin(sunAngle), 0);
        lightDir.normalize();

        const f = 0.75;
        this.omega = 2 * Math.PI * f;
        this.amplitude = 1.0;
        this.order = 20;
        this.pulsationFactor = 1.25;
        this.amplitudeFactor = 0.68;
        this.lambda0 = 50;
        this.amplitude0 = 2;
        this.initializeWaveParameters(this.order);
        const shaderUniforms = {
            'deepColor': { value: new Color(0x0000aa) },
            'shallowColor': { value: new Color(0x2255ff) },
            'lightDirection': { type: 'v3', value: lightDir },
            'lightColor': { value: new Color(0xffff55) },
            'viewPos': { type: 'v3', value: camera.position },
            'shininess': { value: 100 },
            'k_array': { value: this.k_array },
            'omega_array': { value: this.omega_array },
            'amplitude_factor': { value: this.amplitudeFactor },
            't': { value: 0.0 },
            'amplitude': { value: this.amplitude0 }
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


        if (editMode) this.setupGui();
    }

    setupGui() {
        const gui = new GUI();

        const sunFolder = gui.addFolder('sun');
        sunFolder.add(this.sunAngleWrapper, 'val', 0, Math.PI).name('angle');
        sunFolder.add(this.plane.material.uniforms['shininess'], 'value', 10, 500, 1);
    }

    initializeWaveParameters(order) {
        /**@type {ArrayLike<Vector2>} */
        this.k_array = [];
        this.omega_array = [];
        for (let i = 0; i < order; i++) {
            const lambda = this.lambda0 / Math.pow(this.pulsationFactor, i);
            const pulse = 2 * Math.PI / lambda;
            const k = new Vector2(Math.random(), Math.random());
            k.normalize();
            k.multiplyScalar(pulse);
            this.k_array.push(k)

            const rand = ((2 * Math.random()) - 1) / 3;
            this.omega_array.push(this.omega + rand);
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
            y += Math.sin(this.k_array[i].dot(xz) + this.omega_array[i] * t) * this.amplitude * Math.pow(this.amplitudeFactor, i);
        }
        return y;
        //return Math.sin(this.k * x + this.omega * t);
    }

    update(t) {
        // const positions = this.plane.geometry.attributes.position;
        // for (let i = 0; i < positions.count; i++) {
        //     const x = positions.getX(i);
        //     const z = positions.getZ(i);
        //     const y = this.waveFunction(new Vector2(x, z), t);
        //     positions.setY(i, y);
        // }
        // positions.needsUpdate = true;
        // this.plane.geometry.computeVertexNormals();

        this.plane.material.uniforms['t'].value = t;


        // this.plane.geometry.computeTangents();
        // this.plane.geometry.attributes.normal.needsUpdate = true;
        // this.plane.geometry.attributes.tangent.needsUpdate = true;
        this.plane.material.uniforms['viewPos'].value = this.camera.position;
        const sunAngle = this.sunAngleWrapper.val;
        const lightDir = new Vector3(Math.cos(sunAngle), -Math.sin(sunAngle), 0);
        this.plane.material.uniforms['lightDirection'].value = lightDir;
    }
}