import CV from "@techstark/opencv-js"



export class CV_Helper {
    async init(video_src) {
        if (this.cvCanvas) {
            document.body.remove(this.cvCanvas);
        }
        this.video_src = video_src
        // await waitForOpenCV();
        /**@type {CV.CV} */
        this.cv = await cv({
            locateFile: () => "./assets/opencv_js.wasm"
        });
        console.log("CV initialized");
        console.log("find chessboard corners : " + this.cv.findChessboardCorners);
        const cap = new this.cv.VideoCapture(video_src);
        this.cvCanvas = document.createElement("canvas");
        document.body.appendChild(this.cvCanvas);
        this.ctxt = this.cvCanvas.getContext("2d");

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

        this.trackingEnabled = true;
        this.calibrationOnRepeat = false;
        this.showVideo = true;

    }

    clearCanvas() {
        this.ctxt.clearRect(0, 0, this.cvCanvas.width, this.cvCanvas.height);

    }

    processFrame() {
        try {

            // this.ctx_video.drawImage(this.video_src, 0, 0, this.width / 2, this.height / 2);

            // let img = this.ctx_video.getImageData(0, 0, this.width / 2, this.height / 2);
            // this.src.data.set(img.data);
            // this.cv.cvtColor(this.src, this.gray, this.cv.COLOR_RGBA2GRAY);
            // this.cv.imshow(this.cvCanvas, this.gray);


            this.cap.read(this.src);
            if (this.calibrationOnRepeat) this.calibrate2();
            this.#drawCorners();
            // this.render();
            // return;
            if (!this.showVideo && !this.trackingEnabled) return;
            if (this.trackingEnabled) this.trackBall();
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

    render() {
        this.cv.resize(this.src, this.dst, this.dst.size(), 0, 0, this.cv.INTER_NEAREST);
        this.cv.imshow(this.cvCanvas, this.dst);
    }

    calibrate() {
        const patternSize = new this.cv.Size(22, 16);

        let corners = new this.cv.Mat();

        //DETECT CORNERS
        // this.cv.cvtColor();
        // if (!this.cv.findChessboardCorners) return;
        let found = this.cv.findChessboardCorners(
            this.gray,
            patternSize,
            corners,
            this.cv.CALIB_CB_ADAPTIVE_THRESH + this.cv.CALIB_CB_NORMALIZE_IMAGE
        );

        //REFINE CORNERS
        if (found) {
            this.cv.cornerSubPix(
                gray,
                corners,
                new this.cv.Size(11, 11),
                new this.cv.Size(-1, -1),
                new this.cv.TermCriteria(
                    this.cv.TermCriteria_EPS + this.cv.TermCriteria_MAX_ITER,
                    30,
                    0.001
                )
            );
        }

        // COLLECT POINTS
        if (!this.objectPoints) this.objectPoints = [];
        if (!this.imagePoints) this.imagePoints = [];

        if (found) {
            this.objectPoints.push(this.#createObjectPoints());
            this.imagePoints.push(corners.clone());
        }

        //CALIBRATE
        let cameraMatrix = this.cv.Mat.eye(3, 3, this.cv.CV_64F);
        let distCoeffs = new this.cv.Mat.zeros(8, 1, this.cv.CV_64F);

        let rvecs = new this.cv.MatVector();
        let tvecs = new this.cv.MatVector();

        this.cv.calibrateCamera(
            this.objectPoints,
            this.imagePoints,
            new this.cv.Size(width, height),
            cameraMatrix,
            distCoeffs,
            rvecs,
            tvecs
        );

        console.log("Camera Matrix:", cameraMatrix.data64F);
        console.log("Dist Coeffs:", distCoeffs.data64F);
    }

    calibrate2() {
        // const patternSize = new this.cv.Size(22, 16);
        const patternSize = new this.cv.Size(8, 5);

        this.corners = new this.cv.Mat();

        // Detect this.corners
        this.found = this.cv.findChessboardCorners(
            this.src,
            patternSize,
            this.corners,
            this.cv.CALIB_CB_ADAPTIVE_THRESH +
            this.cv.CALIB_CB_NORMALIZE_IMAGE
        );

        // Refine this.corners
        // if (this.found) {
        //     this.cv.cornerSubPix(
        //         this.src,
        //         this.corners,
        //         new this.cv.Size(11, 11),
        //         new this.cv.Size(-1, -1),
        //         new this.cv.TermCriteria(
        //             this.cv.TermCriteria_EPS +
        //             this.cv.TermCriteria_MAX_ITER,
        //             30,
        //             0.001
        //         )
        //     );
        // }

        // =========================
        // DRAW CORNERS
        // =========================

        // this.cv.drawChessboardCorners(
        //     this.src,
        //     patternSize,
        //     this.corners,
        //     this.found
        // );


        console.log((this.found ? "" : "not ") + "found");
        // show on canvas
        // this.render();

        return;

        // =========================
        // COLLECT POINTS
        // =========================

        let objectPoints = [];
        let imagePoints = [];

        if (this.found) {
            objectPoints.push(this.#createObjectPoints());
            imagePoints.push(this.corners.clone());
        }

        // =========================
        // CALIBRATE
        // =========================

        let cameraMatrix = this.cv.Mat.eye(3, 3, this.cv.CV_64F);
        let distCoeffs = new this.cv.Mat.zeros(8, 1, this.cv.CV_64F);

        let rvecs = new this.cv.MatVector();
        let tvecs = new this.cv.MatVector();

        this.cv.calibrateCamera(
            objectPoints,
            imagePoints,
            new this.cv.Size(this.width, this.height),
            cameraMatrix,
            distCoeffs,
            rvecs,
            tvecs
        );

        console.log("Camera Matrix:", cameraMatrix.data64F);
        console.log("Dist Coeffs:", distCoeffs.data64F);

        // cleanup
        // this.corners.delete();
        // display.delete();

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
        const squareSize = 0.014; //cm
        const objp = [];

        for (let i = 0; i < patternSize.height; i++) {
            for (let j = 0; j < patternSize.width; j++) {
                objp.push(j * squareSize, i * squareSize, 0);
            }
        }

        return this.cv.matFromArray(patternSize.width * patternSize.height, 1, CV.CV_32FC3, objp);
    }

}

