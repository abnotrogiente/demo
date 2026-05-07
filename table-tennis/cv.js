import CV from "@techstark/opencv-js"


function waitForOpenCV() {
    return new Promise((resolve) => {
        // If already initialized, resolve immediately
        if (CV && CV.Mat) {
            resolve();
        } else {
            CV.onRuntimeInitialized = () => {
                resolve();
            };
        }
    });
}

function createObjectPoints() {
    const squareSize = 0.014; //cm
    const objp = [];

    for (let i = 0; i < patternSize.height; i++) {
        for (let j = 0; j < patternSize.width; j++) {
            objp.push(j * squareSize, i * squareSize, 0);
        }
    }

    return CV.matFromArray(patternSize.width * patternSize.height, 1, CV.CV_32FC3, objp);
}

export class CV_Helper {
    async init(video_src) {
        this.video_src = video_src
        await waitForOpenCV();
        console.log("CV initialized");
        const cap = new CV.VideoCapture(video_src);

        this.cvCanvas = document.createElement("canvas");
        document.body.appendChild(this.cvCanvas);
        // const ctx = this.cvCanvas.getContext("2d");

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
        this.src = new CV.Mat(this.height, this.width, CV.CV_8UC4);
        this.gray = new CV.Mat(this.height, this.width, CV.CV_8UC4);
        this.hsv = new CV.Mat(this.height, this.width, CV.CV_8UC3);
        this.mask = new CV.Mat(this.height, this.width, CV.CV_8UC4);
        this.dst = new CV.Mat(this.cvCanvas.height, this.cvCanvas.width, CV.CV_8UC4);

        this.lowerOrange = new CV.Scalar(5, 150, 150, 255);
        this.upperOrange = new CV.Scalar(25, 255, 255, 255);
        this.lowerOrange = new CV.Mat(this.height, this.width, CV.CV_8UC3, this.lowerOrange);
        this.upperOrange = new CV.Mat(this.height, this.width, CV.CV_8UC3, this.upperOrange);
        // this.lowerOrange = [5, 150, 150];
        // this.upperOrange = [25, 255, 255];
        this.kernel = CV.Mat.ones(3, 3, CV.CV_8U);

        this.cap = new CV.VideoCapture(video_src);

    }

    processFrame() {
        try {

            // this.ctx_video.drawImage(this.video_src, 0, 0, this.width, this.height);

            // let img = this.ctx_video.getImageData(0, 0, this.width, this.height);
            // this.src.data.set(img.data);
            // CV.cvtColor(this.src, this.gray, CV.COLOR_RGBA2GRAY);
            // // CV.imshow(this.cvCanvas, this.gray);
            this.cap.read(this.src);
            this.trackBall();


            // cap.read(src); // grab frame from video_src

            // console.log("empty:", src.empty?.());
            // console.log("size:", src.cols, src.rows);
            // console.log("sum:", CV.mean(src));

            // CV.cvtColor(src, gray, CV.COLOR_RGBA2GRAY);
            // CV.imshow(canvas, gray);

        } catch (err) {
            console.error(err);
        }

        // requestAnimationFrame(processFrame);
    }

    trackBall() {
        // from https://github.com/centralelyon/leping/blob/main/raspberry/track_orange_ball.py
        CV.cvtColor(this.src, this.hsv, CV.COLOR_RGB2HSV);
        CV.inRange(this.hsv, this.lowerOrange, this.upperOrange, this.mask);

        CV.erode(this.mask,
            this.mask,
            this.kernel,
            new CV.Point(-1, -1),
            2,
            CV.BORDER_CONSTANT,
            CV.morphologyDefaultBorderValue()
        );

        CV.erode(this.mask,
            this.mask,
            this.kernel,
            new CV.Point(-1, -1),
            2,
            CV.BORDER_CONSTANT,
            CV.morphologyDefaultBorderValue()
        );

        // Find contours
        let contours = new CV.MatVector();
        let hierarchy = new CV.Mat();

        CV.findContours(
            this.mask,
            contours,
            hierarchy,
            CV.RETR_EXTERNAL,
            CV.CHAIN_APPROX_SIMPLE
        );

        let detected = false;

        if (contours.size() > 0) {

            // Find largest contour
            let largestContour = contours.get(0);
            let maxArea = CV.contourArea(largestContour);

            for (let i = 1; i < contours.size(); i++) {
                let cnt = contours.get(i);
                let area = CV.contourArea(cnt);

                if (area > maxArea) {
                    maxArea = area;
                    largestContour = cnt;
                }
            }

            // Ignore small contours
            if (maxArea > 0) {

                let circle = CV.minEnclosingCircle(largestContour);

                let center = circle.center;
                let radius = circle.radius;

                // // Minimum enclosing circle
                // let center = new CV.Point(0, 0);
                // let radius = { value: 0 };

                // CV.minEnclosingCircle(
                //     largestContour,
                //     center,
                //     radius
                // );

                // let center = circle.center;
                // let radius = circle.radius;

                // Moments for centroid
                let M = CV.moments(largestContour);

                if (M.m00 > 0) {

                    let centerX = Math.round(M.m10 / M.m00);
                    let centerY = Math.round(M.m01 / M.m00);

                    // Draw enclosing circle
                    CV.circle(
                        this.src,
                        new CV.Point(center.x, center.y),
                        Math.round(radius),
                        new CV.Scalar(0, 255, 0, 255),
                        2
                    );

                    // Draw center point
                    CV.circle(
                        this.src,
                        new CV.Point(centerX, centerY),
                        5,
                        new CV.Scalar(0, 0, 255, 255),
                        -1
                    );

                    detected = true;
                }
            }
        }

        // // Add this.src info overlay
        // CV.putText(
        //     this.src,
        //     `Frame: ${frameCount}/${totalFrames}`,
        //     new CV.Point(10, 30),
        //     CV.FONT_HERSHEY_SIMPLEX,
        //     0.7,
        //     new CV.Scalar(255, 255, 255, 255),
        //     2
        // );

        if (detected) {
            CV.putText(
                this.src,
                "Ball detected",
                new CV.Point(10, 10),
                CV.FONT_HERSHEY_SIMPLEX,
                0.7,
                new CV.Scalar(0, 255, 0, 255),
                2
            );
        }


        // Display result
        CV.resize(this.src, this.dst, this.dst.size(), 0, 0, CV.INTER_NEAREST);
        CV.imshow(this.cvCanvas, this.dst);

    }

    calibrate() {
        const patternSize = new CV.Size(22, 16);

        let corners = new CV.Mat();

        //DETECT CORNERS
        // CV.cvtColor();
        // if (!CV.findChessboardCorners) return;
        let found = CV.findChessboardCorners(
            this.gray,
            patternSize,
            corners,
            CV.CALIB_CB_ADAPTIVE_THRESH + CV.CALIB_CB_NORMALIZE_IMAGE
        );

        //REFINE CORNERS
        if (found) {
            CV.cornerSubPix(
                gray,
                corners,
                new CV.Size(11, 11),
                new CV.Size(-1, -1),
                new CV.TermCriteria(
                    CV.TermCriteria_EPS + CV.TermCriteria_MAX_ITER,
                    30,
                    0.001
                )
            );
        }

        // COLLECT POINTS
        let objectPoints = [];
        let imagePoints = [];

        if (found) {
            objectPoints.push(createObjectPoints());
            imagePoints.push(corners.clone());
        }

        //CALIBRATE
        let cameraMatrix = CV.Mat.eye(3, 3, CV.CV_64F);
        let distCoeffs = new CV.Mat.zeros(8, 1, CV.CV_64F);

        let rvecs = new CV.MatVector();
        let tvecs = new CV.MatVector();

        CV.calibrateCamera(
            objectPoints,
            imagePoints,
            new CV.Size(width, height),
            cameraMatrix,
            distCoeffs,
            rvecs,
            tvecs
        );

        console.log("Camera Matrix:", cameraMatrix.data64F);
        console.log("Dist Coeffs:", distCoeffs.data64F);
    }

}

