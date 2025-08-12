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
  Camera
} from 'three';

import {
  OrbitControls
} from 'three/addons/controls/OrbitControls.js';
import { Ground } from './ground';



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



const init = () => {


  scene = new Scene();
  const aspect = window.innerWidth / window.innerHeight;
  camera = new PerspectiveCamera(75, aspect, 0.1, 1000);

  const light = new AmbientLight(0xffffff, 1.0);
  scene.add(light);

  renderer = new WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.listenToKeyEvents(window);

  const geometry = new BoxGeometry(1, 1, 1);
  const material = new MeshNormalMaterial();
  cube = new Mesh(geometry, material);


  scene.add(cube);


  camera.position.z = 2;
  camera.position.y = 2;
  camera.lookAt(0, 0, 0);

  clock = new Clock();

  const ground = new Ground(scene, 0.5);
}








const animation = () => {

  renderer.setAnimationLoop(animation);

  const delta = clock.getDelta();
  const elapsed = clock.getElapsedTime();


  cube.rotation.x = elapsed / 2;
  cube.rotation.y = elapsed / 1;

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
