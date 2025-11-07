"use strict";


import {
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
  BoxGeometry,
  Mesh,
  AmbientLight,
  DirectionalLight,
  MeshStandardMaterial,
  PlaneGeometry,
} from 'three';


import {
  OrbitControls
} from 'three/addons/controls/OrbitControls.js';




const scene = new Scene();
const aspect = window.innerWidth / window.innerHeight;
const camera = new PerspectiveCamera(75, aspect, 0.1, 1000);

const light = new AmbientLight(0xffffff, 1.0); // soft white light
scene.add(light);

const directionnalLight = new DirectionalLight(0xffffff, 0.8);
scene.add(directionnalLight);

const renderer = new WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.listenToKeyEvents(window); // optional

const cube = new Mesh(new BoxGeometry(), new MeshStandardMaterial());
scene.add(cube);
cube.position.x = 2;
cube.position.y = .5;

const ground = new Mesh(new PlaneGeometry(50, 50), new MeshStandardMaterial());
ground.rotateX(-Math.PI / 2);
scene.add(ground);

const geometry = new PlaneGeometry(1, 1);
const material = new MeshStandardMaterial({ color: 0xff0000 });
const square = new Mesh(geometry, material);
square.position.y = 0.5;
const sizeFactor = 0.2;

scene.add(square);


camera.position.z = 3;
camera.position.y = 1;


const animation = () => {

  renderer.setAnimationLoop(animation);

  updateSquare();

  renderer.render(scene, camera);
};

animation();

function updateSquare() {

  square.setRotationFromQuaternion(camera.quaternion);

  const dist = square.position.distanceTo(camera.position);
  const scale = dist * sizeFactor;
  square.scale.set(scale, scale, scale);
}

window.addEventListener('resize', onWindowResize, false);

function onWindowResize() {

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);

}