
// async function getOpenCv() {
//     /**@type {CV} */
//     let cv;
//     CV
//     if (cvModule instanceof Promise) {
//         cv = await cvModule;
//     } else {
//         if (cvModule.Mat) {
//             cv = cvModule;
//         } else {
//             await new Promise((resolve) => {
//                 cvModule.onRuntimeInitialized = () => resolve();
//             });
//             cv = cvModule;
//         }
//     }
//     return { cv };
// }

export class Video {
    /**
     * 
     * @param {Player} player 
     */
    constructor() {


    }

    async init(useMock = false) {
        if (this.webcamVideo) {
            this.webcamVideo.pause();
            this.webcamVideo.removeAttribute("src");
        }
        this.useMock = useMock;
        const stream = await this.getCameraStream(useMock);
        this.webcamVideo = document.createElement('video');
        this.webcamVideo.srcObject = stream;
        this.webcamVideo.playsInline = true;
        this.webcamVideo.muted = true;

        await this.webcamVideo.play();

    }


    async getCameraStream(useMock = false) {
        if (useMock) {
            const video = document.createElement('video');
            video.src = './assets/rally.mp4';
            // video.src = '../swimming/swimming-race.mp4';
            video.loop = true;
            video.muted = true;
            await video.play();
            return video.captureStream();
        }

        return navigator.mediaDevices.getUserMedia({ video: true });
    }



}