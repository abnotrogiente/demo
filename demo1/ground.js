import { Camera, Color, Mesh, MeshNormalMaterial, MeshPhongMaterial, MeshStandardMaterial, PlaneGeometry, Scene, ShaderMaterial, Sphere, SphereGeometry, Vector2, Vector3 } from "three";
import GUI from "three/examples/jsm/libs/lil-gui.module.min.js";
import { thickness } from "three/tsl";

const editMode = true;

const WIDTH = 200;
const HEIGHT = 200;

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
            'val': Math.PI / 20
        }
        const sunAngle = this.sunAngleWrapper.val;
        const lightDir = new Vector3(Math.cos(sunAngle), -Math.sin(sunAngle), 0);
        lightDir.normalize();

        const f = 0.4;
        this.omega = 2 * Math.PI * f;
        this.amplitude = 1.0;
        this.order = 35;
        this.frequencyVariation = 1;
        this.pulsationFactor = 1.15;
        this.amplitudeFactor = 0.72;
        this.lambda0 = 30;
        this.amplitude0 = 1.5;
        this.initializeWaveParameters(this.order);
        const shaderUniforms = {
            'deepColor': { value: new Color(0x4477ff) },
            'shallowColor': { value: new Color(0x2255ff) },
            'lightDirection': { type: 'v3', value: lightDir },
            'lightColor': { value: new Color(0xffff55) },
            'viewPos': { type: 'v3', value: camera.position },
            'shininess': { value: 300 },
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

            const rand = ((2 * Math.random()) - 1) * this.frequencyVariation;
            this.omega_array.push(this.omega + rand);
        }
    }

    update(t) {

        this.plane.material.uniforms['t'].value = t;

        this.plane.material.uniforms['viewPos'].value = this.camera.position;
        const sunAngle = this.sunAngleWrapper.val;
        const lightDir = new Vector3(Math.cos(sunAngle), -Math.sin(sunAngle), 0);
        this.plane.material.uniforms['lightDirection'].value = lightDir;
    }
}