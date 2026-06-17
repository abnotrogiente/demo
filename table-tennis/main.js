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
    CameraHelper,
    DirectionalLightHelper
} from 'three';


import {
    OrbitControls
} from 'three/addons/controls/OrbitControls.js';


import { Physics } from './physics';
// import { Players } from './skeleton';
import { Players } from './players';
import { Video } from './video';
// import CV from "@techstark/opencv-js"
import { CV_Helper } from './cv2';
import { initUI } from './uiWindow';
import { EffectComposer, RenderPass } from 'three/examples/jsm/Addons.js';
import { BallEffects } from './ballEffects2';
import { sportSpecificAssets, tableDimensions } from './constants';
import { TableEffects } from './tableEffects';
import { SurfaceScore } from './surfaceScore';




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
cameraDebug.position.y = .2;
const helper = new CameraHelper(cameraDebug);
helper.material.linewidth = 10;
// scene.add(helper);

const light = new AmbientLight(0xffffff, 1.); // soft white light
scene.add(light);

const directionalLight = new DirectionalLight(0xffffff, 1.);
scene.add(directionalLight);

const renderer = new WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));


const controls = new OrbitControls(camera, renderer.domElement);
controls.listenToKeyEvents(window); // optional


//TODO Z should point to the score 

const table = await physics.createBox({
    position: new Vector3(0, 0, 0),
    // rotation: new Quaternion(0., 0., .02, 1.),
    dimensions: new Vector3(tableDimensions.depth, tableDimensions.height, tableDimensions.width),
    color: 0x0030FF,
    restitution: .9, // allows bounce
    friction: .6,     // higher friction (grip)
    model: "ping_pong_table.glb",
    modelOffset: new Vector3(0, -tableDimensions.altitude + tableDimensions.height + .015, 0)
});

console.log("Object in scene : " + scene.getObjectByName("Object_3"));


sportSpecificAssets.push(table);

// physics.deleteBody(table);
// physics.Ammo.destroy(table)

// const ground = physics.createBox({
//     dimensions: new Vector3(20, .2, 20),
// })

const roomGeometry = new BoxGeometry(20, 3, 20);
const roomMaterial = new MeshStandardMaterial({ side: BackSide });
const room = new Mesh(roomGeometry, roomMaterial);
room.position.y = 1.5 - tableDimensions.altitude;
scene.add(room);

const cubeGeometry = new BoxGeometry();
const cubeMaterial = new MeshStandardMaterial();
const cube = new Mesh(cubeGeometry, cubeMaterial);
// scene.add(cube);

const radius = 0.01381;
const ball = physics.createSphere({
    position: new Vector3(0, 2., 0),
    radius: radius,
    color: 0xfe9000,
    mass: 0.0027,
    restitution: .9, // very bouncy
    friction: .2     // low friction (slides easily)
});

const tracked_ball = new Mesh(
    new SphereGeometry(radius),
    new MeshStandardMaterial({ color: 0xfe9000 })
);
tracked_ball.position.y = 1.5;
scene.add(tracked_ball);

const tableEffects = new TableEffects(scene.getObjectByName("Object_3"), tracked_ball, renderer);
// const ballEffects = new BallEffects(composer, physics.bodyToMesh.get(ball), scene);
const ballEffects = new BallEffects(composer, tracked_ball, scene, renderer);
// const players = new Players(camera, scene, renderer);
// await players.init();

// await waitForOpenCV();
const video = new Video();
await video.init(true);

const players = new Players(video, scene);
console.log("before players init");
await players.init(scene);
console.log("after players init");


const cvHelper = new CV_Helper();
console.log("before cv init");
await cvHelper.init(video, tracked_ball);
scene.add(cvHelper.rayHelper);
console.log("after cv init");
cvHelper.camera = cameraDebug;
// await initCV(video.webcamVideo);


initUI(video, players, cvHelper, physics);



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
const ball_positions = await parseCsv("./assets/ball_traj_3D.csv");

const surfaceScore = new SurfaceScore(scene, renderer, camera);
// console.log("calibrations : " + JSON.stringify(calibrations));


function updateCalibration(elapsedTime) {
    const calibIndex = Math.floor(elapsedTime * calibration_fps);

    const traj = ball_positions[calibIndex % 290];
    // console.log("z : " + traj["z\r"]);
    const z = parseFloat(traj["z\r"]);
    tracked_ball.position.set(traj["x"], z, traj["y"]);


    // console.log("calib index : " + calibIndex);
    const calib = calibrations[calibIndex];
    if (!calib || calib["f"] == 0) return;
    const t = new Vector3(parseFloat(calib["tvec_y"]), parseFloat(calib["tvec_z"]) + 6, parseFloat(calib["tvec_x"]));
    const r = new Vector3(parseFloat(calib["rvec_y"]), parseFloat(calib["rvec_z"]), parseFloat(calib["rvec_x"]));

    // console.log("ERROR : " + calib["error"]);
    // camera.position.copy(t);
    // camera.setRotationFromEuler(new Euler(r.x, r.y, r.z));

    // camera.setFocalLength(parseFloat(calib["f"]) / 100);
    return;
    cameraDebug.position.copy(t);
    cameraDebug.setRotationFromEuler(new Euler(r.x, r.y, r.z, "ZXY"));
    cameraDebug.fov = 2 * Math.atan(1280 / (2 * parseFloat(calib["f"]))) * 360 / (2 * Math.PI);
    cameraDebug.updateProjectionMatrix();
    cameraDebug.updateMatrixWorld();
    cameraDebug.updateProjectionMatrix();
    helper.update();



    // players.update(calibIndex);
}

const onkeydown = async function (e) {
    if (e.which == ' '.charCodeAt(0)) {
        if (clock.running) clock.stop();
        else clock.start();
        console.log("PAUSING");
    };
}

// renderer.getContext().canvas.addEventListener("keydown", onkeydown);
window.addEventListener("keydown", onkeydown);


const clock = new Clock();

// Main loop
const animation = () => {
    // console.log("enter animation");

    renderer.setAnimationLoop(animation); // requestAnimationFrame() replacement, compatible with XR 

    const delta = clock.getDelta();
    const elapsed = clock.getElapsedTime();

    // updateCalibration(elapsed);
    players.detectFrame();
    cvHelper.processFrame();
    cameraDebug.updateProjectionMatrix();
    cameraDebug.updateMatrixWorld();
    cameraDebug.updateProjectionMatrix();
    helper.update();
    // cvHelper.calibrate();
    // processFrame();

    // can be used in shaders: uniforms.u_time.value = elapsed;

    // cube.rotation.x = elapsed / 2;
    // cube.rotation.y = elapsed / 1;
    // console.log("delta : " + delta);
    physics.stepSimulation(delta);
    // effectPass.uniforms.time.value = elapsed;
    ballEffects.update(delta);
    tableEffects.update(elapsed, delta);
    // renderer.render(scene, camera);
    composer.render();
    // surfaceScore.evaluate();

};

animation();

window.addEventListener('resize', onWindowResize, false);

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

}