import GL from "./lightgl";

let params = {
    numSteps: 2, focal: 45,
    visualizations: {
        enabled: true, showFlags: true, showRanks: true, showWR: true, showSpeed: true, showDivingDistance: true,
        areaConservationEnabled: true,
        video: { show: false },
        shadow: { enabled: true, shadowRadius: .5, shadowPower: .5, showCircle: true, circleRadius: .6, circleStroke: .15 },
        sparks: { enabled: false, glow: 5., glowOffset: .5, lengthFactor: 1., stroke: .01, num: 40, sizeFactor: 50, fov: Math.PI / 4 }
    },
    simulation: { optimized: false, waterDamping: .02, poolSize: new GL.Vector(2.0, 1.0, 2.0) },
    isOneVisualizationEnabled: () => {
        return params.visualizations.showFlags ||
            params.visualizations.showRanks ||
            params.visualizations.showWR ||
            params.visualizations.showSpeed ||
            params.visualizations.showDivingDistance;
    }
};


export { params };