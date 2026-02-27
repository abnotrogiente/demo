import GL from "./lightgl";

let params = {
    numSteps: 2, focal: 45,
    visualizations: {
        showFlags: true, areaConservationEnabled: true,
        video: { show: false },
        shadow: { enabled: true, shadowRadius: .5, shadowPower: .5, showCircle: true, circleRadius: .6, circleStroke: .15 },
        sparks: { enabled: false, glow: 5., glowOffset: .5, lengthFactor: 1., stroke: .01, num: 40, sizeFactor: 50, fov: Math.PI / 4 }
    },
    simulation: { optimized: false, waterDamping: .02, poolSize: new GL.Vector(2.0, 1.0, 2.0) }
};

export { params };