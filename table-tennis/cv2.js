import CV from "@techstark/opencv-js"
import { ArrowHelper, Matrix4, Mesh, Raycaster, Vector2, Vector3 } from "three";
import { Video } from "./video";

export const TRACKING_DISABLED = 0;
export const TRACKING_ORANGE = 1;
export const TRACKING_FROM_FILE = 2;


async function parseCsv(source) {
    const res = await fetch(source);
    const contentType = res.headers.get("content-type");
    if (!contentType || !contentType.includes("text/csv")) {
        console.log("no file found : " + source);
        return null;
    }
    const text = await res.text();

    if (!text) return;
    const rows = text.split('\n');
    const headers = rows[0].split(/,|;/);
    const data = rows.slice(1).map(row => {
        const values = row.split(/,|;/);
        return Object.fromEntries(
            headers.map((h, i) => [h, values[i]])
        );
    }
    );

    return data;
}

const calibration_fps = 25;
const calibrations = await parseCsv("./assets/cam_cal_filtered.csv");
const tracking_data = await parseCsv("./assets/ball_traj_3D.csv");
// console.log("calibrations : " + JSON.stringify(calibrations));


function updateCalibration(elapsedTime) {
    const calibIndex = Math.floor(elapsedTime * calibration_fps);

    const traj = tracking_data[calibIndex % 290];
    // console.log("z : " + traj["z\r"]);
    const z = parseFloat(traj["z\r"]);
    tracked_ball.position.set(traj["x"], z, traj["y"]);


    // console.log("calib index : " + calibIndex);
    const calib = calibrations[calibIndex];
    if (!calib || calib["f"] == 0) return;
    const t = new Vector3(parseFloat(calib["tvec_y"]), parseFloat(calib["tvec_z"]) + 6, parseFloat(calib["tvec_x"]));
    const r = new Vector3(parseFloat(calib["rvec_y"]), parseFloat(calib["rvec_z"]), parseFloat(calib["rvec_x"]));

    // console.log("ERROR : " + calib["error"]);
    // camera.position.copy(t);
    // camera.setRotationFromEuler(new Euler(r.x, r.y, r.z));

    // camera.setFocalLength(parseFloat(calib["f"]) / 100);
    return;
    cameraDebug.position.copy(t);
    cameraDebug.setRotationFromEuler(new Euler(r.x, r.y, r.z, "ZXY"));
    cameraDebug.fov = 2 * Math.atan(1280 / (2 * parseFloat(calib["f"]))) * 360 / (2 * Math.PI);
    cameraDebug.updateProjectionMatrix();
    cameraDebug.updateMatrixWorld();
    cameraDebug.updateProjectionMatrix();
    helper.update();



    // players.update(calibIndex);
}



export class CV_Helper {
    constructor() {
        this.trackingMode = TRACKING_FROM_FILE;
    }
    /**
     * 
     * @param {Video} videoObj
     * @param {Mesh} ball 
     */
    async init(videoObj, ball) {
        const video_src = videoObj.webcamVideo;
        this.videoDuration = videoObj.duration;
        this.video_src = video_src;
        // await waitForOpenCV();
        /**@type {CV.CV} */
        if (!this.cv) this.cv = await cv({
            locateFile: () => "./assets/opencv_js.wasm"
        });
        console.log("CV initialized");
        console.log("find chessboard corners : " + this.cv.findChessboardCorners);
        const cap = new this.cv.VideoCapture(video_src);
        if (!this.cvCanvas) {
            this.cvCanvas = document.createElement("canvas");
            document.body.appendChild(this.cvCanvas);
            this.ctxt = this.cvCanvas.getContext("2d");
        }

        this.width = video_src.videoWidth;
        this.height = video_src.videoHeight;
        video_src.height = this.height;
        video_src.width = this.width;


        this.cvCanvas.width = this.width / 2;
        this.cvCanvas.height = this.height / 2;

        this.cvCanvas.style.zIndex = 9998;

        const videoCanvas = document.createElement("canvas");
        videoCanvas.width = this.cvCanvas.width;
        videoCanvas.height = this.cvCanvas.height;

        this.ctx_video = videoCanvas.getContext("2d");


        // this.width = this.cvCanvas.width;
        // this.height = this.cvCanvas.height;
        this.src = new this.cv.Mat(this.height, this.width, this.cv.CV_8UC4);
        this.gray = new this.cv.Mat(this.height, this.width, this.cv.CV_8UC4);
        this.hsv = new this.cv.Mat(this.height, this.width, this.cv.CV_8UC3);
        this.mask = new this.cv.Mat(this.height, this.width, this.cv.CV_8UC4);
        this.dst = new this.cv.Mat(this.cvCanvas.height, this.cvCanvas.width, this.cv.CV_8UC4);

        this.lowerOrange = new this.cv.Scalar(5, 150, 150, 255);
        this.upperOrange = new this.cv.Scalar(25, 255, 255, 255);
        this.lowerOrange = new this.cv.Mat(this.height, this.width, this.cv.CV_8UC3, this.lowerOrange);
        this.upperOrange = new this.cv.Mat(this.height, this.width, this.cv.CV_8UC3, this.upperOrange);
        // this.lowerOrange = [5, 150, 150];
        // this.upperOrange = [25, 255, 255];
        this.kernel = this.cv.Mat.ones(3, 3, this.cv.CV_8U);

        this.cap = new this.cv.VideoCapture(video_src);


        this.calibrationOnRepeat = false;
        this.showVideo = true;

        this.cvToThree = new Matrix4().set(
            1, 0, 0, 0,
            0, 0, 1, 0,
            0, -1, 0, 0,
            0, 0, 0, 1
        );

        this.fx = 1000.;
        // this.cvToThree = new Matrix4().set(
        //     1, 0, 0, 0,
        //     0, -1, 0, 0,
        //     0, 0, -1, 0,
        //     0, 0, 0, 1
        // );

        this.rot = new Matrix4();
        this.trans = new Matrix4();
        this.extrinsic = new Matrix4();
        this.corners = new this.cv.Mat();
        this.patternSize = new this.cv.Size(8, 5);

        this.objectPoints = new this.cv.MatVector();
        this.objectPoints.push_back(this.#createObjectPoints());
        this.imagePoints = new this.cv.MatVector();
        this.imagePoints.push_back(this.corners.clone());

        this.rvecs = new this.cv.MatVector();
        this.tvecs = new this.cv.MatVector();

        this.cameraMatrix = this.cv.Mat.eye(3, 3, this.cv.CV_64F);
        this.distCoeffs = new this.cv.Mat.zeros(8, 1, this.cv.CV_64F);

        this.raycaster = new Raycaster();
        this.rayHelper = new ArrowHelper();
        // this.rayHelper = new ArrowHelper(this.rayDirection, this.rayOrigin, 1);

        if (ball) this.ball = ball;

    }

    clearCanvas() {
        this.ctxt.clearRect(0, 0, this.cvCanvas.width, this.cvCanvas.height);

    }

    processFrame() {
        try {

            // this.ctx_video.drawImage(this.video_src, 0, 0, this.width / 2, this.height / 2);

            // let img = this.ctx_video.getImageData(0, 0, this.width / 2, this.height / 2);
            // this.src.data.set(img.data);
            // this.cv.imshow(this.cvCanvas, this.gray);

            this.cap.read(this.src);
            this.cv.cvtColor(this.src, this.gray, this.cv.COLOR_RGBA2GRAY);
            if (this.calibrationOnRepeat) this.calibrate();
            this.#drawCorners();
            // this.render();
            // return;
            if (this.trackingMode == TRACKING_ORANGE) this.trackBall();
            else if (this.trackingMode == TRACKING_FROM_FILE) {
                const tracking_data_index = Math.min(tracking_data.length, Math.round(tracking_data.length * (this.video_src.currentTime % this.videoDuration) / this.videoDuration));
                const traj = tracking_data[tracking_data_index % 290];
                // console.log("z : " + traj["z\r"]);
                const z = parseFloat(traj["z\r"]);
                this.ball.position.set(traj["x"], z, traj["y"]);
                console.log("ball position : " + JSON.stringify(this.ball.position));

            }
            if (!this.showVideo && this.trackingMode != TRACKING_ORANGE) return;
            else {
                this.render();
            }


            // cap.read(src); // grab frame from video_src

            // console.log("empty:", src.empty?.());
            // console.log("size:", src.cols, src.rows);
            // console.log("sum:", this.cv.mean(src));

            // this.cv.cvtColor(src, gray, this.cv.COLOR_RGBA2GRAY);
            // this.cv.imshow(canvas, gray);

        } catch (err) {
            console.error(err);
        }

        // requestAnimationFrame(processFrame);
    }

    trackBall() {
        // from https://github.com/centralelyon/leping/blob/main/raspberry/track_orange_ball.py
        this.cv.cvtColor(this.src, this.hsv, this.cv.COLOR_RGB2HSV);
        this.cv.inRange(this.hsv, this.lowerOrange, this.upperOrange, this.mask);

        this.cv.erode(this.mask,
            this.mask,
            this.kernel,
            new this.cv.Point(-1, -1),
            2,
            this.cv.BORDER_CONSTANT,
            this.cv.morphologyDefaultBorderValue()
        );

        this.cv.erode(this.mask,
            this.mask,
            this.kernel,
            new this.cv.Point(-1, -1),
            2,
            this.cv.BORDER_CONSTANT,
            this.cv.morphologyDefaultBorderValue()
        );

        // Find contours
        let contours = new this.cv.MatVector();
        let hierarchy = new this.cv.Mat();

        this.cv.findContours(
            this.mask,
            contours,
            hierarchy,
            this.cv.RETR_EXTERNAL,
            this.cv.CHAIN_APPROX_SIMPLE
        );

        let detected = false;

        if (contours.size() > 0) {

            // Find largest contour
            let largestContour = contours.get(0);
            let maxArea = this.cv.contourArea(largestContour);

            for (let i = 1; i < contours.size(); i++) {
                let cnt = contours.get(i);
                let area = this.cv.contourArea(cnt);

                if (area > maxArea) {
                    maxArea = area;
                    largestContour = cnt;
                }
            }

            // Ignore small contours
            if (maxArea > 0) {

                let circle = this.cv.minEnclosingCircle(largestContour);

                let center = circle.center;
                let radius = circle.radius;

                // // Minimum enclosing circle
                // let center = new this.cv.Point(0, 0);
                // let radius = { value: 0 };

                // this.cv.minEnclosingCircle(
                //     largestContour,
                //     center,
                //     radius
                // );

                // let center = circle.center;
                // let radius = circle.radius;

                // Moments for centroid
                let M = this.cv.moments(largestContour);

                if (M.m00 > 0) {

                    let centerX = Math.round(M.m10 / M.m00);
                    let centerY = Math.round(M.m01 / M.m00);

                    // Draw enclosing circle
                    this.cv.circle(
                        this.src,
                        new this.cv.Point(center.x, center.y),
                        Math.round(radius),
                        new this.cv.Scalar(0, 255, 0, 255),
                        2
                    );


                    this.#moveBall(center, radius);

                    // Draw center point
                    this.cv.circle(
                        this.src,
                        new this.cv.Point(centerX, centerY),
                        5,
                        new this.cv.Scalar(0, 0, 255, 255),
                        -1
                    );

                    detected = true;
                }
            }
        }

        // // Add this.src info overlay
        // this.cv.putText(
        //     this.src,
        //     `Frame: ${frameCount}/${totalFrames}`,
        //     new this.cv.Point(10, 30),
        //     this.cv.FONT_HERSHEY_SIMPLEX,
        //     0.7,
        //     new this.cv.Scalar(255, 255, 255, 255),
        //     2
        // );

        if (detected) {
            this.cv.putText(
                this.src,
                "Ball detected",
                new this.cv.Point(10, 10),
                this.cv.FONT_HERSHEY_SIMPLEX,
                0.7,
                new this.cv.Scalar(0, 255, 0, 255),
                2
            );
        }

        if (!this.showVideo) return;
        // Display result
        this.render();

    }

    #moveBall(centerScreen, radiusScreen) {
        // console.log("circle  : " + JSON.stringify(centerScreen));
        // console.log("width : " + this.width);
        const center_ndc = new Vector2(
            centerScreen.x / this.width * 2 - 1,
            -centerScreen.y / this.height * 2 + 1
        )

        this.raycaster.setFromCamera(center_ndc, this.camera);
        this.rayHelper.position.copy(this.raycaster.ray.origin);
        this.rayHelper.setDirection(this.raycaster.ray.direction.clone());

        if (this.fx) {
            const dist = this.fx * 0.01381 / radiusScreen;
            this.ball.position.copy(this.raycaster.ray.origin).add(this.raycaster.ray.direction.multiplyScalar(dist));
        }
    }

    render() {
        this.cv.resize(this.src, this.dst, this.dst.size(), 0, 0, this.cv.INTER_NEAREST);
        this.cv.imshow(this.cvCanvas, this.dst);
    }

    calibrate() {
        // const patternSize = new this.cv.Size(22, 16);



        // Detect this.corners
        this.found = this.cv.findChessboardCorners(
            this.src,
            this.patternSize,
            this.corners,
            this.cv.CALIB_CB_ADAPTIVE_THRESH +
            this.cv.CALIB_CB_NORMALIZE_IMAGE
        );

        // Refine this.corners
        if (this.found) {
            // console.log("cornersubpix : " + this.cv.TermCriteria);
            this.cv.cornerSubPix(
                this.gray,
                this.corners,
                new this.cv.Size(11, 11),
                new this.cv.Size(-1, -1),
                new this.cv.TermCriteria(
                    this.cv.TermCriteria_EPS +
                    this.cv.TermCriteria_MAX_ITER,
                    30,
                    0.001
                )
            );
        }



        // return;

        // =========================
        // COLLECT POINTS
        // =========================



        if (this.found) {
            // this.objectPoints.set(this.#createObjectPoints(this.patternSize));
            // this.imagePoints.pop();

            this.imagePoints.set(0, this.corners.clone());
            // this.imagePoints.push_back(this.corners.clone());
        }

        // =========================
        // CALIBRATE
        // =========================





        // return;
        // this.cv.calibrateCamera()
        this.cv.calibrateCamera(
            this.objectPoints,
            this.imagePoints,
            new this.cv.Size(this.width, this.height),
            this.cameraMatrix,
            this.distCoeffs,
            this.rvecs,
            this.tvecs,
        );

        this.#setCameraFromCalibration();


    }

    #setCameraFromCalibration() {
        // console.log("Camera Matrix:", this.cameraMatrix.data64F);
        // console.log("Dist Coeffs:", this.distCoeffs.data64F);
        // console.log("rotv : " + this.tvecs.get(0).data64F);
        // console.log("R : " + R.data64F);
        const R = new this.cv.Mat();
        this.cv.Rodrigues(this.rvecs.get(0), R);
        const T = this.tvecs.get(0);

        const r = R.data64F;
        const t = T.data64F;
        // cleanup
        // this.corners.delete();
        // display.delete();

        // // OpenCV rotation matrix
        // this.rot.set(
        //     r[0], r[1], r[2], 0,
        //     r[3], r[4], r[5], 0,
        //     r[6], r[7], r[8], 0,
        //     0, 0, 0, 1
        // );

        // // translation
        // this.trans.makeTranslation(t[0], t[1], t[2]);

        // // world -> camera
        // this.extrinsic.multiplyMatrices(this.trans, this.rot);

        this.extrinsic.set(
            r[0], r[1], r[2], t[0],
            r[3], r[4], r[5], t[2] + .1,
            r[6], r[7], r[8], t[1],
            0, 0, 0, 1
        );

        // invert for Three.js camera pose
        this.extrinsic.premultiply(this.cvToThree);
        const cameraMatrixWorld = this.extrinsic.clone().invert();


        // cameraMatrixWorld.multiply(this.cvToThree);
        // cameraMatrixWorld.multiplyMatrices(
        //     this.cvToThree,
        //     cameraMatrixWorld
        // );


        // this.camera.matrixAutoUpdate = false;
        this.camera.matrix.copy(cameraMatrixWorld);
        this.camera.matrix.decompose(
            this.camera.position,
            this.camera.quaternion,
            this.camera.scale
        );

        const fx = this.cameraMatrix.data64F[0];
        this.fx = fx;
        const fy = this.cameraMatrix.data64F[4];

        const fov = 2 * Math.atan(this.width / (2 * fx)) * 180 / Math.PI;
        // cameraMatrixWorld.delete();
        this.camera.fov = fov;
        // this.camera.aspect = this.width / this.height;
        this.camera.updateProjectionMatrix();
    }

    #drawCorners() {
        if (this.found) {

            for (let i = 0; i < this.corners.rows; i++) {

                // this.corners is Nx1 with 2-channel float values
                let x = this.corners.data32F[i * 2];
                let y = this.corners.data32F[i * 2 + 1];

                this.cv.circle(
                    this.src,
                    new this.cv.Point(x, y),
                    5,                         // radius
                    new this.cv.Scalar(255, 0, 0, 255), // red
                    -1                         // filled circle
                );
            }
        }
    }

    #createObjectPoints() {
        // const squareSize = 0.014; //m
        const squareSize = 0.02525; //m
        const objp = [];

        for (let i = 0; i < this.patternSize.height; i++) {
            for (let j = 0; j < this.patternSize.width; j++) {
                objp.push(j * squareSize, i * squareSize, 0);
            }
        }

        return this.cv.matFromArray(this.patternSize.width * this.patternSize.height, 1, this.cv.CV_32FC3, objp);
    }

}

