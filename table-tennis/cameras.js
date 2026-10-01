import { BufferGeometry, Camera, CameraHelper, Color, FloatType, Line, LineBasicMaterial, Matrix3, Matrix4, Mesh, NearestFilter, PerspectiveCamera, PlaneGeometry, Quaternion, RenderTarget, REVISION, RGBAFormat, Scene, ShaderMaterial, Vector2, Vector3, WebGLRenderTarget } from "three";
import { webSocketClient } from "./constants";
import { CameraFrustumMesh } from "./cameraFrustumMesh";
import { config } from "./config";
import { LineGeometry } from "three/examples/jsm/Addons.js";


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

                const position = helper.geometry.getAttribute('position');

                // Hide c -> t
                position.setXYZ(38, 0, 0, 0);
                position.setXYZ(39, 0, 0, 0);
                position.needsUpdate = true;

                // targetLine.visible = false;
                // helper.update();
                config.scene.add(helper)
                camera.add(frustum);
                // cameras[i].position.divideScalar(1000)
                console.log("CAM POS : " + JSON.stringify(this.cameras[i].position));
                // cameras[i].projectionMatrix.set(
                //     p[0][0], p[0][1], p[0][2], p[0][3],
                //     p[1][0], p[1][1], p[1][2], p[1][3],
                //     p[2][0], p[2][1], p[2][2], p[2][3],
                // );
            }
            this.#createCameraScreens(1);
        })
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

/**
 * 
 * @param {Camera} camera 
 * @param {*} P 
 * @param {*} width 
 * @param {*} height 
 * @param {*} near 
 * @param {*} far 
 */
function applyOpenCVProjection(camera, P, width, height, near = 0.01, far = 1000) {
    // P is:
    //
    // [ p00 p01 p02 p03 ]
    // [ p10 p11 p12 p13 ]
    // [ p20 p21 p22 p23 ]
    //
    // OpenCV convention:
    // x_img ~ P * X_world

    const p = P.flat();

    // ------------------------------------------------------------------
    // 1. Extract the left 3x3 matrix and normalize it
    // ------------------------------------------------------------------

    const M = new Matrix3().set(
        p[0], p[1], p[2],
        p[4], p[5], p[6],
        p[8], p[9], p[10]
    );

    // RQ decomposition: M = K * R
    // Three.js doesn't provide RQ, so do it via QR decomposition
    // of reversed/transposed matrices.

    function rqDecomposition(A) {
        // Reverse rows and columns
        const J = new Matrix3().set(
            0, 0, 1,
            0, 1, 0,
            1, 0, 0
        );

        const At = A.clone().transpose();

        // B = J * A^T * J
        const B = J.clone().multiply(At).multiply(J);

        // QR decomposition of B
        const b = [
            B.elements[0], B.elements[1], B.elements[2],
            B.elements[3], B.elements[4], B.elements[5],
            B.elements[6], B.elements[7], B.elements[8]
        ];

        // Gram-Schmidt on columns
        const c0 = new Vector3(b[0], b[1], b[2]);
        const c1 = new Vector3(b[3], b[4], b[5]);
        const c2 = new Vector3(b[6], b[7], b[8]);

        const q0 = c0.clone().normalize();

        const r01 = q0.dot(c1);
        const u1 = c1.clone().sub(q0.clone().multiplyScalar(r01));
        const q1 = u1.clone().normalize();

        const r02 = q0.dot(c2);
        const r12 = q1.dot(c2);
        const u2 = c2.clone()
            .sub(q0.clone().multiplyScalar(r02))
            .sub(q1.clone().multiplyScalar(r12));

        const q2 = u2.clone().normalize();

        const Q = new Matrix3().set(
            q0.x, q1.x, q2.x,
            q0.y, q1.y, q2.y,
            q0.z, q1.z, q2.z
        );

        // R
        const Rqr = new Matrix3().set(
            q0.dot(c0), q0.dot(c1), q0.dot(c2),
            0, q1.dot(c1), q1.dot(c2),
            0, 0, q2.dot(c2)
        );

        // K = J * Rqr^T * J
        const K = J.clone()
            .multiply(Rqr.clone().transpose())
            .multiply(J);

        // R = J * Q^T * J
        const R = J.clone()
            .multiply(Q.clone().transpose())
            .multiply(J);

        return { K, R };
    }

    const { K, R } = rqDecomposition(M);

    // ------------------------------------------------------------------
    // 2. Fix signs so K has positive diagonal
    // ------------------------------------------------------------------

    const ke = K.elements;
    const re = R.elements;

    const D = new Matrix3().set(
        Math.sign(ke[0]) || 1, 0, 0,
        0, Math.sign(ke[4]) || 1, 0,
        0, 0, Math.sign(ke[8]) || 1
    );

    K.multiply(D);
    R.premultiply(D);

    // Normalize K
    const scale = K.elements[8];
    K.elements[0] /= scale;
    K.elements[1] /= scale;
    K.elements[2] /= scale;
    K.elements[3] /= scale;
    K.elements[4] /= scale;
    K.elements[5] /= scale;
    K.elements[6] /= scale;
    K.elements[7] /= scale;
    K.elements[8] = 1;

    // ------------------------------------------------------------------
    // 3. Camera intrinsics
    // ------------------------------------------------------------------

    const k = K.elements;

    const fx = k[0];
    const fy = k[4];
    console.log("FX : " + fx);
    console.log("FY : " + fy);
    const cx = k[6];
    const cy = k[7];

    // ------------------------------------------------------------------
    // 4. Build Three.js projection matrix from OpenCV K
    // ------------------------------------------------------------------

    camera.aspect = width / height;

    camera.projectionMatrix.set(
        2 * fx / width, 0, 2 * cx / width - 1, 0,
        0, -2 * fy / height, 1 - 2 * cy / height, 0,
        0, 0, -(far + near) / (far - near),
        -2 * far * near / (far - near),
        0, 0, -1, 0
    );

    camera.projectionMatrixInverse
        .copy(camera.projectionMatrix)
        .invert();

    // ------------------------------------------------------------------
    // 5. Extract translation correctly
    //
    // P = K [ R | t ]
    //
    // Therefore:
    //
    //     p4 = K * t
    //
    // and:
    //
    //     t = K^-1 * p4
    // ------------------------------------------------------------------

    const Rt = R.clone().transpose();

    const p4 = new Vector3(
        p[3],
        p[7],
        p[11]
    );

    // t = K^-1 * p4
    const Kinv = K.clone().invert();

    const t = p4.clone().applyMatrix3(Kinv);

    // Camera center in OpenCV camera/world coordinates:
    //
    //     C = -R^T t
    //
    const C = t.clone()
        .applyMatrix3(Rt)
        .multiplyScalar(-1);

    // ------------------------------------------------------------------
    // 6. OpenCV -> Three.js coordinate conversion
    //
    // OpenCV camera:
    //   +X right
    //   +Y down
    //   +Z forward
    //
    // Three.js camera:
    //   +X right
    //   +Y up
    //   -Z forward
    // ------------------------------------------------------------------

    camera.position.set(
        C.x,
        -C.y,
        -C.z
    );

    // Convert rotation.
    //
    // OpenCV camera-to-world rotation = R^T.
    // Convert coordinate system with diag(1,-1,-1).

    const cvToThree = new Matrix3().set(
        1, 0, 0,
        0, -1, 0,
        0, 0, -1
    );

    const RworldCV = R.clone().transpose();

    const RworldThree = cvToThree
        .clone()
        .multiply(RworldCV)
        .multiply(cvToThree);

    const rotationMatrix = new Matrix4().setFromMatrix3(RworldThree);

    camera.quaternion.setFromRotationMatrix(rotationMatrix);

    // camera.applyQuaternion(new Quaternion().setFromAxisAngle(new Vector3(1, 0, 0), Math.PI / 2));

    camera.updateMatrixWorld(true);
}