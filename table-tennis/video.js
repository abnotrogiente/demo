
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

import { Camera, Vector3 } from "three";

export class Video {
    /**
     * 
     * @param {Player} player 
     */
    constructor() {

        this.duration = Infinity;

        this.cameraPosition = new Vector3();
        this.cameraLookatPoint = new Vector3();
        this.cameraDirection = new Vector3();
        this.camera = new Camera();
    }

    async init(useMock = false) {
        if (this.webcamVideo) {
            this.webcamVideo.pause();
            this.webcamVideo.removeAttribute("src");
        }
        this.useMock = useMock;
        this.#setCameraParameters();
        const stream = await this.getCameraStream(useMock);
        this.webcamVideo = document.createElement('video');
        this.webcamVideo.srcObject = stream;
        this.webcamVideo.playsInline = true;
        this.webcamVideo.muted = true;

        await this.webcamVideo.play();

    }

    #setCameraParameters() {
        if (this.useMock) {
            this.cameraPosition.set(
                5,
                3.5,
                0
            );
            this.cameraLookatPoint.set(0, 0, 0);
        }
        else {
            this.cameraPosition.set(
                -1,
                0.7,
                0.6
            );
            this.cameraLookatPoint.set(0, 0.4, 1.3
            );
        }
        this.camera.position.copy(this.cameraPosition);
        this.camera.lookAt(this.cameraLookatPoint);
    }


    async getCameraStream(useMock = false) {
        if (useMock) {
            const video = document.createElement('video');
            video.src = './assets/rally.mp4';
            this.mock = video;
            // video.src = '../swimming/swimming-race.mp4';
            video.loop = true;
            video.muted = true;
            await video.play();
            this.duration = video.duration;
            return video.captureStream();
        }

        return navigator.mediaDevices.getUserMedia({ video: true });
    }



}