class Video {
    constructor() {

    }

    async init() {
        const video = document.createElement('video');
        video.src = 'test-video.mp4';
        video.loop = true;
        await video.play();

        const stream = video.captureStream(); // key line
    }
}