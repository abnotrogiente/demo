import GL from "./lightgl";

const videoStartTime = 16.5;

class Config {
    constructor() {
        this.params = {
            numSteps: 2, focal: 45,
            visualizations: {
                enabled: true, showFlags: true, showRanks: true, showWR: true, showSpeed: true, showDivingDistance: true,
                showNeighboursLines: "only medals", neighboursLinesModesDict: { "none": 0, "only medals": 1, "all": 2 },
                showMedals: "bright", medalsModesDict: { "none": 0, "stars": 1, "bright": 2 },
                areaConservationEnabled: true,
                shadow: { enabled: true, shadowRadius: .5, shadowPower: .5, showCircle: true, circleRadius: .6, circleStroke: .15 },
                sparks: { enabled: false, glow: 5., glowOffset: .5, lengthFactor: 1., stroke: .01, num: 40, sizeFactor: 50, fov: Math.PI / 4 }
            },
            swimmers: { showSpheres: true, useTracking: false },
            video: { thresholdBlending: true, blendingThreshold: .41, show: false },
            simulation: { optimized: false, waterDamping: .02, poolSize: new GL.Vector(2.0, 1.0, 2.0) }
        };
        this.time = 0;
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
    setRaceTime(t) {
        this.time = videoStartTime + t;
    }
    setTimeBeginRace() {
        this.time = videoStartTime;
    }
}

const config = new Config();


export { config };