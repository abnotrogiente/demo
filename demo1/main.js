"use strict";

import {
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
  BoxGeometry,
  Mesh,
  MeshNormalMaterial,
  AmbientLight,
  Clock,
  Camera,
  DirectionalLight,
  Color
} from 'three';

import {
  OrbitControls
} from 'three/addons/controls/OrbitControls.js';
import { Ground } from './ground';
import { Sky } from './sky';
import GUI from 'three/examples/jsm/libs/lil-gui.module.min.js';



/**@type {Scene} */
let scene = null;

/**@type {Camera} */
let camera = null;

/**@type {WebGLRenderer} */
let renderer = null;

/**@type {Clock} */
let clock = null;

/**@type {Mesh} */
let cube = null;

/**@type {Ground} */
let ground = null;

/**@type {Sky} */
let sky = null;


const init = () => {


  scene = new Scene();
  const aspect = window.innerWidth / window.innerHeight;
  camera = new PerspectiveCamera(75, aspect, 0.1, 1000);

  const light = new AmbientLight(0xffffff, 0.6);
  scene.add(light);

  const directionnalLight = new DirectionalLight(0xffffff, 0.8);
  scene.add(directionnalLight);

  renderer = new WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.listenToKeyEvents(window);

  // scene.add(cube);


  camera.position.x = 100;
  camera.position.y = 30;
  camera.lookAt(0, 0, 0);

  const sunAngleWrapper = {
    'angle': Math.PI / 12,
    'color': new Color()
  };

  const gui = new GUI();


  clock = new Clock();

  ground = new Ground(scene, camera, 0.2, gui, sunAngleWrapper);
  console.log("before sky");
  sky = new Sky(scene, 500, camera, gui, sunAngleWrapper);
  console.log("after sky");
}








const animation = () => {

  renderer.setAnimationLoop(animation);

  const delta = clock.getDelta();
  const elapsed = clock.getElapsedTime();

  ground.update(elapsed);
  sky.update();

  renderer.render(scene, camera);
};

init();

animation();

window.addEventListener('resize', onWindowResize, false);

function onWindowResize() {

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);

}
