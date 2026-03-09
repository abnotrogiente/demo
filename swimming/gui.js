import GUI from "three/examples/jsm/libs/lil-gui.module.min.js";
import { config } from "./params";
import { MAX_SPARKS } from "./video";

const gui = new GUI();

/**
 * 
 * @param {WebGLRenderingContext} gl 
 * @param {*} reset 
 */
const createGUI = function (gl, reset) {
    //const folder = gui.addFolder('variables');

    const visualizationsFolder = gui.addFolder("visualizations");
    visualizationsFolder.close();
    // visualizationsFolder.add(params.visualizations,"enabled").name('enabled').listen().onChange((value) => {
    //     params.visualizations.showFlags = value;
    //     params.visualizations.show
    // });
    visualizationsFolder.add(config, "useConfigFile").name('use configuration file');
    // toggle event editor (timeline) visibility
    const timelineToggle = { showTimeline: true };
    visualizationsFolder.add(timelineToggle, "showTimeline").name('show event timeline').onChange((v) => {
        const el = document.getElementById('event-editor');
        if (el) el.style.display = v ? 'block' : 'none';
    });
    visualizationsFolder.add(config.params.visualizations, "showFlags").name('show flags').listen();
    visualizationsFolder.add(config.params.visualizations, "showWR").name('show world record').listen();
    visualizationsFolder.add(config.params.visualizations, "showNeighboursLines", ["none", "only medals", "all"]).name('show neighbours lines').listen();
    visualizationsFolder.add(config.params.visualizations, "showMedals", ["none", "stars", "bright", "lanes"]).name('show potential medals').listen();
    visualizationsFolder.add(config.params.visualizations, "showSpeed").name('show speed').listen();
    visualizationsFolder.add(config.params.visualizations, "showRanks").name('show ranks').listen();
    const ranksFolder = visualizationsFolder.addFolder("ranks");
    ranksFolder.add(config.params.visualizations, "showRanksIfFinished").name("show ranks if finished").listen();
    visualizationsFolder.add(config.params.visualizations, "showDivingDistance").name('show diving distance').listen();
    visualizationsFolder.add(config.params.visualizations.shadow, "enabled").name("show shadow");
    visualizationsFolder.add(config.params.visualizations, 'areaConservationEnabled', 'areaConservationEnabled').name('area conservation').listen();

    const videoFolder = gui.addFolder("video");
    videoFolder.close();
    videoFolder.add(config.params.video, "thresholdBlending").name("threshold blending");
    videoFolder.add(config.params.video, "blendingThreshold", .1, .5).name("blending threshold");
    videoFolder.add(config.params.video, 'show').name("show").listen();

    // lengthFactor: 1.5, stroke: .004, num: 40 
    const sparksFolder = visualizationsFolder.addFolder("Sparks");
    sparksFolder.close();
    sparksFolder.add(config.params.visualizations.sparks, 'enabled').name("sparks enabled");
    sparksFolder.add(config.params.visualizations.sparks, 'glow', 1, 30).name("sparks glow factor");
    sparksFolder.add(config.params.visualizations.sparks, 'lengthFactor', 0.1, 10).name("sparks length factor");
    sparksFolder.add(config.params.visualizations.sparks, 'glowOffset', .1, 3).name("sparks glow offset");
    sparksFolder.add(config.params.visualizations.sparks, 'stroke', .001, .05).name("sparks stroke");
    sparksFolder.add(config.params.visualizations.sparks, 'num', 10, MAX_SPARKS).step(1).name("sparks number");
    sparksFolder.add(config.params.visualizations.sparks, 'sizeFactor', 10, 100).name("size factor");

    const shadowFolder = visualizationsFolder.addFolder("Swimmers shadows");
    shadowFolder.close();
    shadowFolder.add(config.params.visualizations.shadow, "shadowRadius", 0, 2).name("shadow radius");
    shadowFolder.add(config.params.visualizations.shadow, "shadowPower", 0.1, 2).name("shadow power");
    shadowFolder.add(config.params.visualizations.shadow, "showCircle").name("circle");
    shadowFolder.add(config.params.visualizations.shadow, "circleRadius", .5, 2).name("circle radius");
    shadowFolder.add(config.params.visualizations.shadow, "circleStroke", .1, .5).name("circle stroke");

    const simulationFolder = gui.addFolder("Simulation");
    simulationFolder.close();
    simulationFolder.add(config.params.simulation, "optimized").name("optimized").listen();
    simulationFolder.add(config.params.simulation.poolSize, 'x', 1, 25).name('pool width').onChange(function (value) { reset(); }).listen();
    simulationFolder.add(config.params.simulation.poolSize, 'z', 1, 50).name('pool height').onChange(function (value) { reset(); }).listen();
    simulationFolder.add(config.params.simulation.poolSize, 'y', 1, 3).name('pool depth').onChange(function (value) { reset(); }).listen();
    simulationFolder.add(config.params.simulation, 'waterDamping', 0.005, 0.15).name('water damping').listen();

    const swimmersFolder = gui.addFolder("swimmers");
    swimmersFolder.close();
    swimmersFolder.add(config.params.swimmers, "showSpheres").name('show spheres').listen();
    swimmersFolder.add(config.params.swimmers, "useTracking").name('use tracking data').listen();


    const cameraFolder = gui.addFolder("camera");
    cameraFolder.close();
    cameraFolder.add(config.params, 'focal', 28, 45).name('focal').listen().onChange(function (value) {
        config.params.visualizations.sparks.fov = value * 2 * Math.PI / 360;
        gl.matrixMode(gl.PROJECTION);
        gl.loadIdentity();
        gl.perspective(config.params.focal, gl.canvas.width / gl.canvas.height, 0.01, 100);
        gl.matrixMode(gl.MODELVIEW);
        console.log("perspective : " + config.params.focal);
    });
}

export { createGUI };