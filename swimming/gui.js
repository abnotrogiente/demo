import GUI from "three/examples/jsm/libs/lil-gui.module.min.js";
import { params } from "./params";
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
    visualizationsFolder.add(params.visualizations, "showFlags").name('show flags').listen();
    visualizationsFolder.add(params.visualizations, "showWR").name('show world record').listen();
    visualizationsFolder.add(params.visualizations, "showSpeed").name('show speed').listen();
    visualizationsFolder.add(params.visualizations, "showRanks").name('show ranks').listen();
    visualizationsFolder.add(params.visualizations, "showDivingDistance").name('show diving distance').listen();
    visualizationsFolder.add(params.visualizations.shadow, "enabled").name("show shadow");
    visualizationsFolder.add(params.visualizations, 'areaConservationEnabled', 'areaConservationEnabled').name('area conservation').listen();

    const videoFolder = visualizationsFolder.addFolder("video");
    videoFolder.close();
    videoFolder.add(params.visualizations.video, 'show').name("show").listen();

    // lengthFactor: 1.5, stroke: .004, num: 40 
    const sparksFolder = visualizationsFolder.addFolder("Sparks");
    sparksFolder.close();
    sparksFolder.add(params.visualizations.sparks, 'enabled').name("sparks enabled");
    sparksFolder.add(params.visualizations.sparks, 'glow', 1, 30).name("sparks glow factor");
    sparksFolder.add(params.visualizations.sparks, 'lengthFactor', 0.1, 10).name("sparks length factor");
    sparksFolder.add(params.visualizations.sparks, 'glowOffset', .1, 3).name("sparks glow offset");
    sparksFolder.add(params.visualizations.sparks, 'stroke', .001, .05).name("sparks stroke");
    sparksFolder.add(params.visualizations.sparks, 'num', 10, MAX_SPARKS).step(1).name("sparks number");
    sparksFolder.add(params.visualizations.sparks, 'sizeFactor', 10, 100).name("size factor");

    const shadowFolder = visualizationsFolder.addFolder("Swimmers shadows");
    shadowFolder.close();
    shadowFolder.add(params.visualizations.shadow, "shadowRadius", 0, 2).name("shadow radius");
    shadowFolder.add(params.visualizations.shadow, "shadowPower", 0.1, 2).name("shadow power");
    shadowFolder.add(params.visualizations.shadow, "showCircle").name("circle");
    shadowFolder.add(params.visualizations.shadow, "circleRadius", .5, 2).name("circle radius");
    shadowFolder.add(params.visualizations.shadow, "circleStroke", .1, .5).name("circle stroke");

    const simulationFolder = gui.addFolder("Simulation");
    simulationFolder.close();
    simulationFolder.add(params.simulation, "optimized").name("optimized");
    simulationFolder.add(params.simulation.poolSize, 'x', 1, 25).name('pool width').onChange(function (value) { reset(); }).listen();
    simulationFolder.add(params.simulation.poolSize, 'z', 1, 50).name('pool height').onChange(function (value) { reset(); }).listen();
    simulationFolder.add(params.simulation.poolSize, 'y', 1, 3).name('pool depth').onChange(function (value) { reset(); }).listen();
    simulationFolder.add(params.simulation, 'waterDamping', 0.005, 0.15).name('water damping').listen();

    const cameraFolder = gui.addFolder("camera");
    cameraFolder.close();
    cameraFolder.add(params, 'focal', 28, 45).name('focal').listen().onChange(function (value) {
        params.visualizations.sparks.fov = value * 2 * Math.PI / 360;
        gl.matrixMode(gl.PROJECTION);
        gl.loadIdentity();
        gl.perspective(params.focal, gl.canvas.width / gl.canvas.height, 0.01, 100);
        gl.matrixMode(gl.MODELVIEW);
        console.log("perspective : " + params.focal);
    });
}

export { createGUI };