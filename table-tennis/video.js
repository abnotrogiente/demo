export class Video {
    /**
     * 
     * @param {Player} player 
     */
    constructor() {


    }

    async init() {
        const stream = await this.getCameraStream(true);
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
            video.loop = true;
            video.muted = true;
            await video.play();
            return video.captureStream();
        }

        return navigator.mediaDevices.getUserMedia({ video: true });
    }

}