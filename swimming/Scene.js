import { Swimmer } from "./swimmer";
import { Video } from "./video";

class Scene {
    constructor(title, { poolSize = new GL.Vector(2, 2), waterResolution = new GL.Vector(256, 256), thresholdBlending = false, numSwimmers = 1, dataFolder = null }) {
        this.title = title;
        /**@type {Video[]} */
        this.videos = [];
        this.poolSize = poolSize;
        this.waterResolution = waterResolution;
        this.numSwimmers = numSwimmers;
        this.thresholdBlending = thresholdBlending;
        this.dataFolder = dataFolder;
    }

    /**
     * 
     * @param {Video} video 
     */
    addVideo(video) {
        this.videos.push(video);
    }

    /**
     * 
     * @param {Swimmer[]} swimmers 
     */
    parseData(swimmers) {
        for (let i = 0; i < swimmers.length; i++) {
            swimmers[i].parseData(this.dataFolder + i + ".csv");
        }
    }

}

export { Scene }