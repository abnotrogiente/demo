import { Camera, Color, Mesh, MeshNormalMaterial, MeshPhongMaterial, MeshStandardMaterial, PlaneGeometry, Scene, ShaderMaterial, Sphere, SphereGeometry, Vector2, Vector3 } from "three";
import GUI from "three/examples/jsm/libs/lil-gui.module.min.js";
import { thickness } from "three/tsl";

const editMode = true;

const WIDTH = 300;
const HEIGHT = 300;

export class Ground {
    /**
     * 
     * @param {Scene} scene 
     * @param {Camera} camera
     * @param {GUI} gui
     */
    constructor(scene, camera, precision, gui, sunAngleWrapper) {
        console.log("enter ground constructor");
        this.gui = gui;
        this.camera = camera;
        this.width_px = Math.round(WIDTH / precision);
        this.height_px = Math.round(HEIGHT / precision);
        const geom = new PlaneGeometry(WIDTH, HEIGHT, this.width_px, this.height_px);
        // const geom = new SphereGeometry(50);
        geom.rotateX(-Math.PI / 2);
        this.sunAngleWrapper = sunAngleWrapper;
        const sunAngle = this.sunAngleWrapper.angle;
        const lightDir = new Vector3(Math.cos(sunAngle), -Math.sin(sunAngle), 0);
        lightDir.normalize();

        const f = 0.4;
        this.omega = 2 * Math.PI * f;
        this.amplitude = 1.0;
        this.order = 100;
        this.frequencyVariation = 0;
        this.pulsationFactor = 1.12;
        this.amplitudeFactor = 0.8;
        this.lambda0 = 40;
        this.amplitude0 = 1.5;
        this.initializeWaveParameters(this.order);
        const shaderUniforms = {
            'deepColor': { value: new Color(0x3580BB) },
            'shallowColor': { value: new Color(0x2255ff) },
            'lightDirection': { type: 'v3', value: lightDir },
            'lightColor': { value: new Color(0xffff55) },
            'viewPos': { type: 'v3', value: camera.position },
            'shininess': { value: 300 },
            'k_array': { value: this.k_array },
            'frag_k_array': { value: this.k_array },
            'omega_array': { value: this.omega_array },
            'frag_omega_array': { value: this.omega_array },
            'amplitude_factor': { value: this.amplitudeFactor },
            'frag_amplitude_factor': { value: this.amplitudeFactor },
            't': { value: 0.0 },
            'amplitude': { value: this.amplitude0 },
            'frag_amplitude': { value: this.amplitude0 }
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
        const sunFolder = this.gui.addFolder('sun');
        sunFolder.add(this.sunAngleWrapper, 'angle', 0, Math.PI).name('angle');

        const waterFolder = this.gui.addFolder('water');
        waterFolder.add(this.plane.material.uniforms['shininess'], 'value', 10, 500, 1).name('shininess');
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
            // this.omega_array.push(this.omega * Math.pow(this.amplitudeFactor, i))

        }
    }

    update(t) {

        this.plane.material.uniforms['t'].value = t;

        this.plane.material.uniforms['viewPos'].value = this.camera.position;
        const sunAngle = this.sunAngleWrapper.angle;
        const sinSunAngle = Math.sin(sunAngle);
        const lightDir = new Vector3(Math.cos(sunAngle), -sinSunAngle, 0);
        this.plane.material.uniforms['lightDirection'].value = lightDir;

        this.sunAngleWrapper.color = new Color().setFromVector3(new Vector3(1, 1, sinSunAngle + 0.1));
        this.plane.material.uniforms['lightColor'].value = this.sunAngleWrapper.color;


    }
}