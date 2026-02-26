let params = {
    numSteps: 2, focal: 45,
    simulation: { optimized: false },
    sparks: { enabled: false, glow: 5., glowOffset: .5, lengthFactor: 1., stroke: .01, num: 40, sizeFactor: 50, fov: Math.PI / 4 },
    shadow: { enabled: true, shadowRadius: .5, shadowPower: .5, showCircle: true, circleRadius: .6, circleStroke: .15 }
};

export { params };