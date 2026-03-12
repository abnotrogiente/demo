import { Calibration } from "./calibration";
import GL from "./lightgl";
import { Scene } from "./Scene";
import { Swimmer } from "./swimmer";
import { Water } from "./water";
import { Video } from "./video";

const videoStartTime = 16.5;

function listToDict(L) {
    const dict = {};
    for (let i = 0; i < L.length; i++) {
        dict[L[i]] = i;
    }
    return dict;
}

const swimmersLinesList = ["none", "only medals", "all"];
const swimmersLinesModeList = ["neighbours", "per swimmer"];

class Config {
    constructor() {
        this.params = {
            numSteps: 2, fov: 45,
            visualizations: {
                enabled: true, showFlags: false, showWR: false, showSpeed: false, showDivingDistance: true,
                showFinishTimes: false,
                showSwimmersLines: "none", swimmersLinesList: swimmersLinesList, showSwimmersLinesDict: listToDict(swimmersLinesList),
                swimmersLinesMode: "neighbours", swimmersLinesModeList: swimmersLinesModeList, swimmersLinesModeDict: listToDict(swimmersLinesModeList),
                medalsModeBeforeFinish: "none", medalsModesDict: { "none": 0, "stars": 1, "bright": 2, "lanes": 3 },
                medalsModeAfterFinish: "none",
                areaConservationEnabled: true,

                shadow: { enabled: true, shadowRadius: .5, shadowPower: .5, showCircle: true, circleRadius: .6, circleStroke: .15 },
                sparks: { enabled: false, glow: 5., glowOffset: .5, lengthFactor: 1., stroke: .01, num: 40, sizeFactor: 50, fov: Math.PI / 4 }
            },
            swimmers: { showSpheres: true, useTracking: false },
            video: { thresholdBlending: false, blendingThreshold: .41, show: false },
            simulation: { optimized: false, waterDamping: .02, poolSize: new GL.Vector(2.0, 1.0, 2.0) }
        };

        this.resolution = new GL.Vector(256, 256);

        /**@type {WebGLRenderingContext} */
        this.gl = GL.create();
        this.gl.canvas.tabIndex = 0;


        this.originalVisParams = JSON.parse(JSON.stringify(this.params.visualizations));
        delete this.originalVisParams.shadow;
        delete this.originalVisParams.sparks;
        this.useConfigFile = true;
        this.time = 0;
        /**@type {Swimmer[]} */
        this.swimmers = [];

        this.translateX = 0.;
        this.translateY = 0.;
        this.zoomDistance = 4.;
        this.angleX = -25;
        this.angleY = -200.5;
        this.angleZ = 0.;

        const raceScene = new Scene("100m freestyle");
        const calibration1 = new Calibration({ tx: -0.53, ty: 1.25, zoom: 47.86, ax: -29, ay: -260.5, az: -5, fov: 39.98 });
        raceScene.addVideo(new Video(this.gl, "swimming-race.mp4", calibration1,
            {
                poolSize: new GL.Vector(25, 2, 50),
                waterResolution: new GL.Vector(1024, 2048),
                numSwimmers: 10,
                thresholdBlending: true
            }));
        this.currentVideo = raceScene.videos[0];

        const synchronizedSwimmingScene = new Scene("synchronized swimming");
        const calibration2 = new Calibration({ tx: -1.32, ty: .4, zoom: 32.41, ax: -18, ay: -291.5, az: 1, fov: 42.8 });
        synchronizedSwimmingScene.addVideo(new Video(this.gl, "synchronized-swimming.mp4", calibration2,
            {
                poolSize: new GL.Vector(25, 2, 30),
                waterResolution: new GL.Vector(1024, 2048),
                numSwimmers: 2
            }
        ));


        /**@type {Scene[]} */
        this.scenesList = [raceScene, synchronizedSwimmingScene];
        this.scenes = {};
        this.scenesList.forEach(scene => this.scenes[scene.title] = scene);
        this.currentScene = null;
        /**@type {Scene} */
        this.currentScene = null;
    }

    /**
     * 
     * @param {Calibration} calibration 
     */
    setCalibration(calibration) {
        this.translateX = calibration.tx;
        this.translateY = calibration.ty;
        this.zoomDistance = calibration.zoom;
        this.angleX = calibration.ax;
        this.angleY = calibration.ay;
        this.angleZ = calibration.az;
        this.params.fov = calibration.fov;

        this.gl.matrixMode(this.gl.PROJECTION);
        this.gl.loadIdentity();
        this.gl.perspective(this.params.fov, this.gl.canvas.width / this.gl.canvas.height, 0.01, 100);
        this.gl.matrixMode(this.gl.MODELVIEW);
    }

    #setPoolSize(poolSize) {
        console.log("SET POOL SIZE : " + poolSize.z);
        this.params.simulation.poolSize.x = poolSize.x;
        this.params.simulation.poolSize.y = poolSize.y;
        this.params.simulation.poolSize.z = poolSize.z;
    }


    setScene(sceneName) {
        console.log("SET SCENE : " + sceneName);
        this.currentScene = this.scenes[sceneName];
        if (this.currentScene) {
            this.currentVideo = this.currentScene.videos[0];
            this.params.video.show = true;
            this.setCalibration(this.currentVideo.calibration);
            this.#setPoolSize(this.currentVideo.poolSize);
            this.resolution = this.currentVideo.waterResolution;
            this.params.video.thresholdBlending = this.currentVideo.thresholdBlending;
            config.params.visualizations.areaConservationEnabled = false;
            config.params.simulation.optimized = true;
            config.params.simulation.waterDamping = 0.1;
            const numSwimmers = this.currentVideo.numSwimmers;
            if (this.swimmers.length != numSwimmers) {
                for (let i = this.swimmers.length; i < numSwimmers; i++) {
                    const s = new Swimmer(new GL.Vector(0, 0, 0));
                    this.swimmers.push(s);
                    this.water.addSwimmer(s);
                }
            }
            // this.params.swimmers.useTracking = true;
            // this.params.swimmers.showSpheres = false;
            this._reset();
        }
    }
    isOneVisualizationEnabled() {
        return this.params.visualizations.showFlags ||
            this.params.visualizations.medalsModeBeforeFinish != "none" ||
            this.params.visualizations.medalsModeAfterFinish != "none" ||
            this.params.visualizations.showWR ||
            this.params.visualizations.showSpeed ||
            this.params.visualizations.showDivingDistance;
    }
    updateTime(dt) {
        this.time += dt;
        if (this._updateDistanceMarker) this._updateDistanceMarker();
    }
    getRaceTime() {
        return this.time - videoStartTime;
    }
    resetParams() {
        // this.params.visualizations = JSON.parse(JSON.stringify(this.originalVisParams));
        Object.entries(this.originalVisParams).forEach(pair => {
            const key = pair[0];
            const value = pair[1];
            this.params.visualizations[key] = value;
        })
        this.params.visualizations.areaConservationEnabled = false;
    }
    updateEventIndex() {
        this.currentEventIndex = 0;
        while (this.events[this.currentEventIndex] && this.events[this.currentEventIndex].time < this.getRaceTime()) this.currentEventIndex++;
        if (this.currentEventIndex > 0) this.currentEventIndex--;
    }
    setRaceTime(t) {
        this.time = videoStartTime + t;
        if (this.currentVideo) this.currentVideo.setTime(this.time);
        if (!this.events) return;
        this.updateEventIndex();
        this.resetParams();
    }
    startRace() {
        this.setRaceTime(0);
        if (this.currentVideo) this.currentVideo.video.play();
        this.swimmers.forEach(swimmer => swimmer.startRace());
        Swimmer.raceHasStarted = true;
        Swimmer.useGravity = true;
        this.water.resetTextures();
    }
    stopRace() {
        this.setRaceTime(0);
        if (this.currentVideo) this.currentVideo.video.pause();
        this.swimmers.forEach(swimmer => swimmer.swim(false));
        Swimmer.raceHasStarted = false;
        this.water.resetTextures();
    }
    pauseVideo() {
        if (this.currentVideo) this.currentVideo.video.pause();
    }
    playVideo() {
        if (this.currentVideo) {
            this.currentVideo.video.play();
            this.currentVideo.video.currentTime = this.time;
        }
    }
    renderVideo() {
        if (this.currentVideo) this.currentVideo.render();
    }
    parseConfigFile(source) {
        fetch(source)
            .then(res => res.text())
            .then(text => {
                this.events = JSON.parse(text);
                this.currentEventIndex = 0;
                // refresh editor if one exists
                if (this._renderTimeline) this._renderTimeline();
            });
    }
    updateParams() {
        if (!this.events || !this.useConfigFile) return;
        const event = this.events[this.currentEventIndex];
        if (!event) return;
        let rankSwimmerToggle = event.rankSwimmerToggle;
        if (!rankSwimmerToggle) rankSwimmerToggle = 1;
        if (event.distance && this.swimmers[rankSwimmerToggle - 1].getDistanceTraveled() >= event.distance || event.time !== undefined && this.getRaceTime() >= event.time) {

            this.currentEventIndex++;
            Object.entries(event.params).forEach((pair) => {
                const key = pair[0];
                const value = pair[1];
                this.params.visualizations[key] = value;
                // console.log("key : " + key);
                // console.log("value : " + value);
                // console.log("value or false : " + (value || false));
                // console.log("show finish time : " + this.params.visualizations.showFinishTimes);
                // console.log("\n\n\n")
            });
        }
    }

    /**
     * 
     * @param {WebGLRenderingContext} gl 
     */
    setRaceCalibration(gl, calibration) {
        this.params.simulation.poolSize.x = 25;
        this.params.simulation.poolSize.y = 2;
        this.params.simulation.poolSize.z = 50;
        this.setCalibration(calibration);
        this.params.visualizations.sparks.fov = this.params.fov * 2 * Math.PI / 360;
        gl.matrixMode(gl.PROJECTION);
        gl.loadIdentity();
        gl.perspective(this.params.fov, gl.canvas.width / gl.canvas.height, 0.01, 100);
        gl.matrixMode(gl.MODELVIEW);



        // this.translateX = -0.53;
        // this.translateY = 1.25;
        // this.zoomDistance = 47.86;
        // this.angleX = -29;
        // this.angleY = -260.5;
        // this.angleZ = -5;
    }

    /**
     * 
     * @param {WebGLRenderingContext} gl 
     */
    setSynchroCalibration(gl) {
        this.params.simulation.poolSize.x = 25;
        this.params.simulation.poolSize.y = 2;
        this.params.simulation.poolSize.z = 30;
        this.params.fov = 42.8; // 31.75
        this.translateX = -1.32;
        this.translateY = 0.40;
        this.zoomDistance = 32.41;
        this.angleX = -18;
        this.angleY = -291.5;
        this.angleZ = 1;
        this.params.visualizations.sparks.fov = this.params.fov * 2 * Math.PI / 360;
        gl.matrixMode(gl.PROJECTION);
        gl.loadIdentity();
        gl.perspective(this.params.fov, gl.canvas.width / gl.canvas.height, 0.01, 100);
        gl.matrixMode(gl.MODELVIEW);


    }
}

const config = new Config();
config.parseConfigFile("./assets/vis-config.json");


export { config };