import GL from "./lightgl";
import { Swimmer } from "./swimmer";

const videoStartTime = 16.5;

class Config {
    constructor() {
        this.params = {
            numSteps: 2, focal: 45,
            visualizations: {
                enabled: true, showFlags: false, showRanks: true, showRanksIfFinished: false, showWR: false, showSpeed: false, showDivingDistance: true,
                showFinishTimes: false,
                showNeighboursLines: "none", neighboursLinesModesDict: { "none": 0, "only medals": 1, "all": 2 },
                showMedals: "none", medalsModesDict: { "none": 0, "stars": 1, "bright": 2, "lanes": 3 },
                areaConservationEnabled: true,

                shadow: { enabled: true, shadowRadius: .5, shadowPower: .5, showCircle: true, circleRadius: .6, circleStroke: .15 },
                sparks: { enabled: false, glow: 5., glowOffset: .5, lengthFactor: 1., stroke: .01, num: 40, sizeFactor: 50, fov: Math.PI / 4 }
            },
            swimmers: { showSpheres: true, useTracking: true },
            video: { thresholdBlending: true, blendingThreshold: .41, show: false },
            simulation: { optimized: false, waterDamping: .02, poolSize: new GL.Vector(2.0, 1.0, 2.0) }
        };
        this.useConfigFile = true;
        this.time = 0;
        /**@type {Swimmer[]} */
        this.swimmers = [];
    }
    isOneVisualizationEnabled() {
        return this.params.visualizations.showFlags ||
            this.params.visualizations.showRanks ||
            this.params.visualizations.showWR ||
            this.params.visualizations.showSpeed ||
            this.params.visualizations.showDivingDistance;
    }
    getRaceTime() {
        return this.time - videoStartTime;
    }
    updateEventIndex() {
        this.currentEventIndex = 0;
        while (this.events[this.currentEventIndex] && this.events[this.currentEventIndex].time < this.getRaceTime()) this.currentEventIndex++;
        if (this.currentEventIndex > 0) this.currentEventIndex--;
    }
    setRaceTime(t) {
        this.time = videoStartTime + t;
        if (!this.events) return;
        this.updateEventIndex();
    }
    setTimeBeginRace() {
        this.setRaceTime(0);
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
}

const config = new Config();
config.parseConfigFile("./assets/vis-config.json");


export { config };