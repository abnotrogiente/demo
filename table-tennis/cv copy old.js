import { loadOpenCV } from "./loader";

// let this.cv = null;
// function loadOpenCV() {
//     return new Promise((resolve) => {
//         console.log("load opencv");
//         if (window.cv) {
//             resolve();
//             return;
//         }

//         console.log("1");

//         const script = document.createElement("script");
//         script.src = "./assets/opencv.js"; // path to your file
//         script.async = true;

//         script.onload = () => {
//             // if (window.cv.initiali)
//             console.log("ONLOAD");
//             window.cv.onRuntimeInitialized = () => {
//                 console.log("2");
//                 // if (cv) {
//                 //     console.log("4");
//                 //     resolve();
//                 //     console.log("5");
//                 //     return;
//                 // }
//                 resolve();
//                 cv = window.cv;
//                 console.log("3");
//             };
//         };

//         document.body.appendChild(script);
//     });
// }

function createObjectPoints() {
    const squareSize = 0.014; //cm
    const objp = [];

    for (let i = 0; i < patternSize.height; i++) {
        for (let j = 0; j < patternSize.width; j++) {
            objp.push(j * squareSize, i * squareSize, 0);
        }
    }

    return cv.matFromArray(patternSize.width * patternSize.height, 1, cv.CV_32FC3, objp);
}


export class CV_Helper {
    async init(video_src) {
        this.video_src = video_src


        this.cv = await cv({
            locateFile: () => "./assets/opencv_js.wasm"
        });

        console.log("OpenCV ready!");
        console.log(this.cv);
        // use cvModule instead of cv
        let mat = this.cv.Mat.eye(3, 3, this.cv.CV_8UC1);

        console.log(mat.rows);

        mat.delete();


        // await new Promise((resolve, reject) => {
        //     loadOpenCV(
        //         {
        //             wasm: "./assets/opencv_js.js"
        //         },
        //         () => {
        //             console.log("test");
        //             cv.onRuntimeInitialized = () => {
        //                 console.log("OpenCV ready!");
        //                 resolve();
        //             };
        //         }
        //     );
        // });

        // // SAFE TO USE cv HERE
        // console.log(cv);

        // let mat = cv.Mat.eye(3, 3, cv.CV_8UC1);
        // console.log(mat.rows);
        console.log(this.cv.getBuildInformation());
        console.log("findChessboardCorners" in this.cv);
        console.log("AA : " + Object.keys(this.cv).includes("findChessboardCorners"));
        // this.cv = (this.cv instanceof Promise) ? await this.cv : this.cv;
        console.log("CV initialized");
        const calibFuncs = Object.keys(this.cv).filter(key =>
            key.toLowerCase().includes('calib') ||
            key.toLowerCase().includes('chess') ||
            key.toLowerCase().includes('corner')
        );
        console.log("Available calib functions:", calibFuncs);
        const cap = new this.cv.VideoCapture(video_src);

        this.cvCanvas = document.createElement("canvas");
        document.body.appendChild(this.cvCanvas);
        // const ctx = this.cvCanvas.getContext("2d");

        const width = video_src.videoWidth;
        const height = video_src.videoHeight;
        video_src.height = height;
        video_src.width = width;


        this.cvCanvas.width = width / 2;
        this.cvCanvas.height = height / 2;

        this.cvCanvas.style.zIndex = 9998;

        const videoCanvas = document.createElement("canvas");
        videoCanvas.width = this.cvCanvas.width;
        videoCanvas.height = this.cvCanvas.height;

        this.ctx_video = videoCanvas.getContext("2d");


        this.src = new this.cv.Mat(this.cvCanvas.height, this.cvCanvas.width, this.cv.CV_8UC4);
        this.gray = new this.cv.Mat(this.cvCanvas.height, this.cvCanvas.width, this.cv.CV_8UC4);

        // let i = 0;
        // while (i < 50000) {
        //     i++;
        //     console.log("i : " + i);
        // }
        this.ctx_video.drawImage(this.video_src, 0, 0, this.cvCanvas.width, this.cvCanvas.height);

        let img = this.ctx_video.getImageData(0, 0, this.cvCanvas.width, this.cvCanvas.height);
        this.src.data.set(img.data);
        this.cv.cvtColor(this.src, this.gray, this.cv.COLOR_RGBA2GRAY);
        this.cv.imshow(this.cvCanvas, this.gray);
        console.log("end init");
    }

    processFrame() {
        try {

            this.ctx_video.drawImage(this.video_src, 0, 0, this.cvCanvas.width, this.cvCanvas.height);

            let img = this.ctx_video.getImageData(0, 0, this.cvCanvas.width, this.cvCanvas.height);
            this.src.data.set(img.data);
            this.cv.cvtColor(this.src, this.gray, this.cv.COLOR_RGBA2GRAY);
            this.cv.imshow(this.cvCanvas, this.gray);
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
        let objectPoints = [];
        let imagePoints = [];

        if (found) {
            objectPoints.push(createObjectPoints());
            imagePoints.push(corners.clone());
        }

        //CALIBRATE
        let cameraMatrix = this.cv.Mat.eye(3, 3, this.cv.CV_64F);
        let distCoeffs = new this.cv.Mat.zeros(8, 1, this.cv.CV_64F);

        let rvecs = new this.cv.MatVector();
        let tvecs = new this.cv.MatVector();

        this.cv.calibrateCamera(
            objectPoints,
            imagePoints,
            new this.cv.Size(width, height),
            cameraMatrix,
            distCoeffs,
            rvecs,
            tvecs
        );

        console.log("Camera Matrix:", cameraMatrix.data64F);
        console.log("Dist Coeffs:", distCoeffs.data64F);
    }

}

