import { MathUtils, Matrix3, PerspectiveCamera, Spherical, Vector2, Vector3, Vector4, WebGLRenderer } from "three";
import { config } from "./config";

const theta_min = 0;
const theta_max = 2 * Math.PI;

const phi_min = Math.PI / 6;
const phi_max = 0.8 * Math.PI / 2;

const r_min = 4;
const r_max = 15;

const fov_min = 45;
const fov_max = 70;

function uniform(m, M) {
    const x = Math.random();
    return m + x * (M - m);
}


//the next two functions are from https://mika-s.github.io/javascript/random/normal-distributed/2019/05/15/generating-normally-distributed-random-numbers-in-javascript.html
function boxMullerTransform() {
    const u1 = Math.random();
    const u2 = Math.random();

    const z0 = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2);
    const z1 = Math.sqrt(-2.0 * Math.log(u1)) * Math.sin(2.0 * Math.PI * u2);

    return { z0, z1 };
}

function gaussian(mean, stddev) {
    const { z0, _ } = boxMullerTransform();

    return z0 * stddev + mean;
}

const origin = new Vector3();

class CameraCalibrationGenerator {

    constructor() {
        this.camera = null;
        this.renderer = new WebGLRenderer({ antialias: true });
        this.calibCsv = "image,p00,p01,p02,p03,p10,p11,p12,p13,p20,p21,p22,p23,"
        for (let player_label of ["player0", "player1"]) {
            for (let landmark_label = 0; landmark_label < 33; landmark_label++) {
                for (let axis_label of ['x', 'y']) {
                    this.calibCsv += player_label + "landmark" + landmark_label + axis_label + ",";
                }
            }
        }
        this.calibCsv += "\n";
        this.indexCalib = 0;
    }

    /**
     * 
     * @param {PerspectiveCamera} camera 
     */
    init(camera) {
        this.camera = camera;

    }

    getCalibCsv() {
        const blob = new Blob([this.calibCsv], { type: 'text/csv;charset=utf-8;' });
        const link2 = document.createElement("a");
        const url = URL.createObjectURL(blob);
        link2.setAttribute("href", url);
        link2.setAttribute("download", "calib.csv");
        document.body.appendChild(link2); // Required for FF

        link2.click(); // This will download the data file named "my_data.csv"
    }

    generate(download = true) {
        if (!this.camera) return;

        this.#generateSpherical();
        this.#generateFOV();

        this.camera.lookAt(origin);

        this.#generateMove();

        this.camera.updateProjectionMatrix();


        // Choose the desired output resolution
        const width = 1920;
        const height = Math.round(width / this.camera.aspect); // About 979

        // Set the drawing-buffer size without changing the CSS layout
        this.renderer.setPixelRatio(1);
        this.renderer.setSize(width, height, false);

        // Match the camera to the output image
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();

        const size = this.renderer.getSize(new Vector2());

        // Ensure we're rendering to the visible canvas
        this.renderer.setRenderTarget(null);

        // Disable partial rendering
        this.renderer.setScissorTest(false);
        this.renderer.setViewport(0, 0, size.x, size.y);
        this.renderer.render(config.scene, this.camera);
        // Capture immediately after rendering
        const dataURL = this.renderer.domElement.toDataURL("image/jpeg", 0.95);

        const link = document.createElement("a");
        link.href = dataURL;
        link.download = "view" + this.indexCalib + ".jpg";
        this.indexCalib++;
        link.click();


        // const encodedUri = encodeURI(this.#getCalibCsv());
        const P = threeCameraToOpenCV(this.camera, width, height);

        console.log(P.join(','));
        this.calibCsv += link.download + ",";
        // this.calibCsv += P.join(',') + ",\n";
        this.calibCsv += P.join(',') + "," + this.#getLandmarks2DFromCamera() + ",\n";
        // const csvString = this.#getCalibCsv();



    }

    #getLandmarks2DFromCamera() {
        let res = ""
        for (let player of config.players.players) {
            for (let landmark3D of player.landmarks3D) {
                console.log("landmark : " + JSON.stringify(landmark3D));
                const landmark2D = landmark3D.clone().project(this.camera);
                res += "" + landmark2D.x + "," + landmark2D.y + ",";
            }
        }
        return res;
    }


    #generateSpherical() {
        const theta = uniform(theta_min, theta_max);
        const phi = uniform(phi_min, phi_max);
        const r = uniform(r_min, r_max);
        this.r = r;

        this.camera.position.setFromSpherical(new Spherical(r, phi, theta));
    }

    #getFOVLaw() {
        const alpha = 400;
        const gamma = 45;
        return {
            mu: alpha / this.r,
            sigma: gamma / this.r
        };
    }

    #generateFOV() {
        const { mu, sigma } = this.#getFOVLaw();
        this.camera.fov = gaussian(mu, sigma);
        // this.camera.fov = uniform(fov_min, fov_max);
    }

    #generateMove() {
        //TODO, add slight rotation for
    }


}

export const cameraCalibrationGenerator = new CameraCalibrationGenerator();

function threeCameraToOpenCV(camera, width, height) {
    // --- Intrinsics ---
    const fovY = MathUtils.degToRad(camera.fov);

    const fy = (height / 2) / Math.tan(fovY / 2);
    const fx = fy * camera.aspect;

    const cx = width / 2;
    const cy = height / 2;

    // OpenCV intrinsic matrix
    const K = new Matrix3().set(
        fx, 0, cx,
        0, fy, cy,
        0, 0, 1
    );

    // Three.js: world -> camera
    const V = camera.matrixWorldInverse;

    // Extract R and t from Three.js view matrix.
    //
    // Three.js camera coordinates:
    //   +X right
    //   +Y up
    //   -Z forward
    //
    // OpenCV:
    //   +X right
    //   +Y down
    //   +Z forward
    //
    // Therefore:
    //   X_cv =  X_three
    //   Y_cv = -Y_three
    //   Z_cv = -Z_three

    const e = V.elements;

    const R = [
        e[0], e[4], e[8],
        -e[1], -e[5], -e[9],
        -e[2], -e[6], -e[10]
    ];

    const t = [
        e[12],
        -e[13],
        -e[14]
    ];

    // P = K [R | t]
    const P = [
        fx * R[0] + cx * R[6],
        fx * R[1] + cx * R[7],
        fx * R[2] + cx * R[8],
        fx * t[0] + cx * t[2],

        fy * R[3] + cy * R[6],
        fy * R[4] + cy * R[7],
        fy * R[5] + cy * R[8],
        fy * t[1] + cy * t[2],

        R[6],
        R[7],
        R[8],
        t[2]
    ];

    return P;
}