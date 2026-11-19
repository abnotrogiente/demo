import { BufferGeometry, Camera, CameraHelper, Color, FloatType, Line, LineBasicMaterial, Matrix3, Matrix4, Mesh, NearestFilter, PerspectiveCamera, PlaneGeometry, Quaternion, RenderTarget, REVISION, RGBAFormat, Scene, ShaderMaterial, Vector2, Vector3, WebGLRenderTarget } from "three";
import { webSocketClient } from "./constants";
import { CameraFrustumMesh } from "./cameraFrustumMesh";
import { config } from "./config";
import { applyOpenCVProjection } from "./utils";


export class TrackingCameras {
    constructor() {
        /**@type {PerspectiveCamera[]} */
        this.cameras = [];

        /**@type {Mesh[]} */
        this.screens = [];

        /**@type {Line[]} */
        this.detectionLines = [];

        /**@type {WebGLRenderTarget[]} */
        this.renderTargets = [];

        this.shown = false;
        webSocketClient.addEventCallback("calibration", (message) => {
            const projections = message.projections;

            this.#createCameras(projections.length)


            for (let i = 0; i < projections.length; i++) {
                const p = projections[i];
                const camera = this.cameras[i]
                applyOpenCVProjection(camera, p, 1280, 720);
                const frustum = new CameraFrustumMesh(camera, {
                    color: 0x555555,
                    opacity: 0.12
                });
                const helper = new CameraHelper(camera);
                camera.userData.helper = helper;
                camera.userData.frustum = frustum;

                this.#hideCameraHelperUpLine(helper);

                config.scene.add(helper)
                camera.add(frustum);

            }
            this.#createCameraScreens(1);
            this.show(this.shown);
        });
    }

    show(val) {
        for (let i = 0; i < this.cameras.length; i++) {
            this.cameras[i].userData.helper.visible = val;
            this.cameras[i].userData.frustum.visible = val;
            this.screens[i].visible = val;
            this.detectionLines[i].visible = val;

        }
        this.shown = val;
    }

    /**
     * 
     * @param {CameraHelper} helper 
     */
    #hideCameraHelperUpLine(helper) {
        const position = helper.geometry.getAttribute('position');

        // Hide c -> t
        position.setXYZ(38, 0, 0, 0);
        position.setXYZ(39, 0, 0, 0);
        position.needsUpdate = true;
    }

    setDetections(detections, position) {
        for (let i = 0; i < this.screens.length; i++) {
            const detection = detections[i];
            this.screens[i].material.uniforms.detection.value.set(detection[0] / 1280, 1 - detection[1] / 720);

            const line = this.detectionLines[i];
            const p1 = this.cameras[i].position;
            const p2 = position;
            const points = [p1, p2];
            line.geometry.setFromPoints(points);

            config.renderer.setRenderTarget(this.renderTargets[i]);
            config.renderer.render(config.scene, this.cameras[i]);
            this.screens[i].material.uniforms.cameraView.value = this.renderTargets[i].texture;

        }
        config.renderer.setRenderTarget(null);
    }


    #createCameras(n) {
        const scene = config.scene;
        for (let i = 0; i < n; i++) {
            const camera = new PerspectiveCamera();

            scene.add(camera);
            this.cameras.push(camera);

            const detectionLine = new Line(new BufferGeometry(), new LineBasicMaterial({ color: Color.NAMES.green }));
            scene.add(detectionLine);
            this.detectionLines.push(detectionLine);

            this.renderTargets.push(new WebGLRenderTarget(window.innerWidth, window.innerHeight, {
                type: FloatType,
                minFilter: NearestFilter,
                magFilter: NearestFilter,
                format: RGBAFormat,
            }));
        }
    }
    #createCameraScreens(distance) {
        for (let i = 0; i < this.cameras.length; i++) {
            const camera = this.cameras[i];
            const vertical_fov = 2 * Math.PI * camera.fov / 360
            const height = 2 * distance * Math.tan(vertical_fov / 2);
            const width = camera.aspect * height;
            const plane = new Mesh(new PlaneGeometry(width, height), screenShader.clone());
            plane.material.uniforms.aspectRatio.value = camera.aspect;
            plane.material.uniforms.cameraView = this.renderTargets[i].texture;
            camera.add(plane);
            plane.position.z -= distance;
            this.screens.push(plane);
        }
    }
}

export const trackingCameras = new TrackingCameras();


const screenShader = new ShaderMaterial({
    uniforms: {
        detection: { value: new Vector2() },
        aspectRatio: { value: 1 },
        cameraVue: { value: null }
    },
    vertexShader: /*glsl */ `
        out vec2 vUv;

        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,
    fragmentShader: /*glsl */ `
        in vec2 vUv;

        uniform vec2 detection;
        uniform float aspectRatio;
        uniform sampler2D cameraView;

        void main() {
            // gl_FragColor = vec4(0., 0., 0., 1.);
            gl_FragColor = texture(cameraView, vUv);
            vec2 diff = detection - vUv;
            diff.x*=aspectRatio;
            if(dot(detection, detection) < 0.00001) return;
            if(dot(diff, diff) <= 0.0001) {
                gl_FragColor.g = 1.;
            }
        }

    `
})

