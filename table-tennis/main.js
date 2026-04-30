"use strict";


import {
    PerspectiveCamera,
    Scene,
    WebGLRenderer,
    BoxGeometry,
    Mesh,
    AmbientLight,
    Clock,
    MeshBasicMaterial,
    MeshStandardMaterial,
    DirectionalLight,
    BackSide,
    SphereGeometry,
    Vector3,
    Quaternion,
    Euler,
    CameraHelper
} from 'three';


import {
    OrbitControls
} from 'three/addons/controls/OrbitControls.js';


import { Physics } from './physics';
import { Players } from './skeleton';
import { Player } from './player';
import { Video } from './video';



console.log("initialized in main");


const scene = new Scene();
const physics = new Physics(scene);
await physics.init();
const aspect = window.innerWidth / window.innerHeight;
const camera = new PerspectiveCamera(75, aspect, 0.1, 1000);
// camera.setFocalLength(14)
camera.position.z = 3;
camera.position.y = 1.8;

//DEBUG CAMERA
const cameraDebug = new PerspectiveCamera(75, aspect, .1, 1000);
const helper = new CameraHelper(cameraDebug);
helper.material.linewidth = 10;
scene.add(helper);

const light = new AmbientLight(0xffffff, .4); // soft white light
scene.add(light);

scene.add(new DirectionalLight(0xffffff, 1.).rotateX(.2));

const renderer = new WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.listenToKeyEvents(window); // optional

const tableDimensions = {
    width: 2.74,
    depth: 1.525,
    height: 0.04, // minimum
    altitude: 0.76,
    netHeight: 0.1525
};

const table = physics.createBox({
    position: new Vector3(0, tableDimensions.altitude, 0),
    // rotation: new Quaternion(0., 0., .02, 1.),
    dimensions: new Vector3(tableDimensions.depth, tableDimensions.height, tableDimensions.width),
    color: 0x0030FF,
    restitution: .9, // allows bounce
    friction: .6     // higher friction (grip)
});

// const ground = physics.createBox({
//     dimensions: new Vector3(20, .2, 20),
// })

const roomGeometry = new BoxGeometry(20, 3, 20);
const roomMaterial = new MeshStandardMaterial({ side: BackSide });
const room = new Mesh(roomGeometry, roomMaterial);
// room.position.y = 1.5;
scene.add(room);

const cubeGeometry = new BoxGeometry();
const cubeMaterial = new MeshStandardMaterial();
const cube = new Mesh(cubeGeometry, cubeMaterial);
// scene.add(cube);

const ball = physics.createSphere({
    position: new Vector3(0, 1.3, 0),
    radius: 0.01381,
    color: 0xfe7000,
    mass: 0.0027,
    restitution: .9, // very bouncy
    friction: .2     // low friction (slides easily)
});

// const players = new Players(camera, scene, renderer);
// await players.init();
const player = new Player();
await player.init(scene);

const video = new Video(player);
await video.init();

//TODO importer assets gltf


async function parseCsv(source) {
    const res = await fetch(source);
    const contentType = res.headers.get("content-type");
    if (!contentType || !contentType.includes("text/csv")) {
        console.log("no file found : " + source);
        return null;
    }
    const text = await res.text();

    if (!text) return;
    const rows = text.split('\n');
    const headers = rows[0].split(/,|;/);
    const data = rows.slice(1).map(row => {
        const values = row.split(/,|;/);
        return Object.fromEntries(
            headers.map((h, i) => [h, values[i]])
        );
    }
    );

    return data;
}

const calibration_fps = 25;
const calibrations = await parseCsv("./assets/cam_cal_filtered.csv");
// console.log("calibrations : " + JSON.stringify(calibrations));


function updateCalibration(elapsedTime) {
    const calibIndex = Math.floor(elapsedTime * calibration_fps);
    // console.log("calib index : " + calibIndex);
    const calib = calibrations[calibIndex];
    if (!calib || calib["f"] == 0) return;
    const t = new Vector3(parseFloat(calib["tvec_y"]), parseFloat(calib["tvec_z"]) + 6, parseFloat(calib["tvec_x"]));
    const r = new Vector3(parseFloat(calib["rvec_y"]), parseFloat(calib["rvec_z"]), parseFloat(calib["rvec_x"]));

    // console.log("ERROR : " + calib["error"]);
    // camera.position.copy(t);
    // camera.setRotationFromEuler(new Euler(r.x, r.y, r.z));

    // camera.setFocalLength(parseFloat(calib["f"]) / 100);
    cameraDebug.position.copy(t);
    cameraDebug.setRotationFromEuler(new Euler(r.x, r.y, r.z, "ZXY"));
    cameraDebug.fov = 2 * Math.atan(1280 / (2 * parseFloat(calib["f"]))) * 360 / (2 * Math.PI);
    cameraDebug.updateProjectionMatrix();
    cameraDebug.updateMatrixWorld();
    cameraDebug.updateProjectionMatrix();
    helper.update();

    // players.update(calibIndex);
}


const clock = new Clock();

// Main loop
const animation = () => {

    renderer.setAnimationLoop(animation); // requestAnimationFrame() replacement, compatible with XR 

    const delta = clock.getDelta();
    const elapsed = clock.getElapsedTime();

    updateCalibration(elapsed);
    video.detectFrame();

    // can be used in shaders: uniforms.u_time.value = elapsed;

    // cube.rotation.x = elapsed / 2;
    // cube.rotation.y = elapsed / 1;
    // console.log("delta : " + delta);
    physics.stepSimulation(delta);
    renderer.render(scene, camera);
};

animation();

window.addEventListener('resize', onWindowResize, false);

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

}