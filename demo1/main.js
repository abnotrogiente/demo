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
  DirectionalLight
} from 'three';

import {
  OrbitControls
} from 'three/addons/controls/OrbitControls.js';
import { Ground } from './ground';
import { Sky } from './sky';



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


  camera.position.x = 60;
  camera.position.y = 50;
  camera.lookAt(0, 0, 0);

  clock = new Clock();

  ground = new Ground(scene, camera, 0.2);
  console.log("before sky");
  const sky = new Sky(scene, 500);
  console.log("after sky");
}








const animation = () => {

  renderer.setAnimationLoop(animation);

  const delta = clock.getDelta();
  const elapsed = clock.getElapsedTime();

  ground.update(elapsed);

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
