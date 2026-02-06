import { BackSide, Camera, Color, DoubleSide, Mesh, MeshStandardMaterial, Scene, ShaderMaterial, SphereGeometry, Vector3 } from "three";
import GUI from "three/examples/jsm/libs/lil-gui.module.min.js";

export class Sky {
    /**
     * 
     * @param {float} radius 
     * @param {Scene} scene 
     * @param {Camera} camera 
     * @param {GUI} gui 
     */
    constructor(scene, radius, camera, gui, sunAngleWrapper) {
        this.sunAngleWrapper = sunAngleWrapper;
        this.gui = gui;
        this.camera = camera;
        console.log("enter sky constructore")
        // const material = new MeshStandardMaterial({ color: 0x00ccff });
        this.initMaterial();

        this.material.side = DoubleSide;

        this.mesh = new Mesh(new SphereGeometry(radius), this.material);
        const skyFolder = this.gui.addFolder("sky");
        scene.add(this.mesh);
        skyFolder.add(this.mesh.material.uniforms['shininess'], 'value', 1, 500, 1).name('Sun shininess');
        console.log("sky added");
    }

    initMaterial() {
        const sunAngle = this.sunAngleWrapper.angle;
        const sinSunAngle = Math.sin(sunAngle);
        const lightDir = new Vector3(Math.cos(sunAngle), -sinSunAngle, 0);
        this.shininess = 200;
        const shaderUniforms = {
            'sunColor': { value: new Color(0xffff80) },
            'skyColor': { value: new Color(0x00ccff) },
            'shininess': { value: this.shininess },
            'sunDirection': { value: lightDir },
            'viewPos': { value: this.camera.position }
        };

        const vertexShader = document.getElementById('vertexShaderSky').textContent;
        const fragmentShader = document.getElementById('fragmentShaderSky').textContent;
        /**@type {ShaderMaterial} */
        this.material = new ShaderMaterial({
            uniforms: shaderUniforms,
            vertexShader: vertexShader,
            fragmentShader: fragmentShader
        });



    }

    update() {
        const sunAngle = this.sunAngleWrapper.angle;
        const sinSunAngle = Math.sin(sunAngle);
        const lightDir = new Vector3(Math.cos(sunAngle), -sinSunAngle, 0);
        this.mesh.material.uniforms['sunDirection'].value = lightDir;
        this.mesh.material.uniforms['sunColor'].value = this.sunAngleWrapper.color;
        // this.plane.material.uniforms['lightDirection'].value = lightDir;
    }
}