import { Video } from "./video";

class Scene {
    constructor(title) {
        this.title = title;
        /**@type {Video[]} */
        this.videos = [];
    }

    /**
     * 
     * @param {Video} video 
     */
    addVideo(video) {
        this.videos.push(video);
    }

}

export { Scene }