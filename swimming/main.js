/*
 * WebGL Water
 * http://madebyevan.com/webgl-water/
 *
 * Copyright 2011 Evan Wallace
 * Released under the MIT license
 */

import { Water } from './water.js';
import { Renderer } from './renderer.js';
import { Cubemap } from './cubemap.js';
import { Sphere } from './sphere.js';
import GL from './lightgl.js';
import GUI from 'three/examples/jsm/libs/lil-gui.module.min.js';
import { Video } from './video.js';


function text2html(text) {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '<br>');
}

function handleError(text) {
  var html = text2html(text);
  if (html == 'WebGL not supported') {
    html = 'Your browser does not support WebGL.<br>Please see\
    <a href="http://www.khronos.org/webgl/wiki/Getting_a_WebGL_Implementation">\
    Getting a WebGL Implementation</a>.';
  }
  var loading = document.getElementById('loading');
  loading.innerHTML = html;
  loading.style.zIndex = 1;
}

window.onerror = handleError
var gl = GL.create();
/**@type {Water} */
var water;
var cubemap;
/**@type {Renderer} */
var renderer;
/**@type {Sphere} */
let swimmerSphere;
var angleX = -25;
var angleY = -200.5;
var zoomDistance = 4.0;
let armAmplitude = 0.5;
const armFrequency = 1;
const armPulsation = 2 * Math.PI * armFrequency;
const armRadius = .15;
const AWAY = new GL.Vector(1000, 0, 0)

// Sphere physics info
let swimming = false;
var useGravity = false;
var paused = false;
var flagCenter;
var flagSize;
var poolSize = new GL.Vector(2.0, 1.0, 2.0);
let resolution = new GL.Vector(256, 256);
const gui = new GUI();
function reset() {
  console.log("reset");
  document.getElementById('resolution').innerText = `Resolution: ${resolution.x} x ${resolution.y}`;
  document.getElementById('warning').hidden = !(resolution.x * resolution.y > 300000 && (water && water.areaConservationEnabled));
  //water = new Water(gl, poolSize);
  flagCenter = new GL.Vector(0., -poolSize.z / 2. + 1.);
  // water = new Water(gl, poolSize, resolution);
  water.reset(poolSize, resolution);
  renderer.flagCenter = flagCenter;
  renderer.flagSize = flagSize;
  renderer.reset();
  // renderer = new Renderer(gl, water, flagCenter, flagSize);
}



window.onload = function () {
  var ratio = window.devicePixelRatio || 1;
  var help = document.getElementById('help');

  function onresize() {
    var width = innerWidth;
    var height = innerHeight;
    gl.canvas.width = width * ratio;
    gl.canvas.height = height * ratio;
    gl.canvas.style.width = width + 'px';
    gl.canvas.style.height = height + 'px';
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    gl.matrixMode(gl.PROJECTION);
    gl.loadIdentity();
    gl.perspective(45, gl.canvas.width / gl.canvas.height, 0.01, 100);
    gl.matrixMode(gl.MODELVIEW);
    draw();
  }

  document.body.appendChild(gl.canvas);
  gl.clearColor(0, 0, 0, 1);

  flagCenter = new GL.Vector(0., -poolSize.z / 2. + 1.);
  flagSize = 0.7;
  water = new Water(gl, poolSize);
  const video = new Video("", gl);  // Empty path - use drag-and-drop instead

  // Drop zone for MP4 files
  const dropZone = document.getElementById('drop-zone');
  let dragCounter = 0;

  document.addEventListener('dragenter', (e) => {
    dragCounter++;
    dropZone.style.display = 'flex';
  });

  document.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
  });

  document.addEventListener('dragleave', (e) => {
    dragCounter--;
    if (dragCounter === 0) {
      dropZone.style.display = 'none';
    }
  });

  document.addEventListener('drop', (e) => {
    e.preventDefault();
    dragCounter = 0;
    dropZone.style.display = 'none';
    const files = e.dataTransfer.files;
    if (files.length > 0 && (files[0].type.startsWith('video/') || files[0].name.endsWith('.mp4'))) {
      const url = URL.createObjectURL(files[0]);
      video.video.src = url;
      video.video.play();
      console.log('Loaded:', files[0].name);
    }
  });

  const folder = gui.addFolder('variables');
  folder.add(poolSize, 'x', 1, 25).name('pool width').onChange(function (value) { reset(); }).listen();
  folder.add(poolSize, 'z', 1, 50).name('pool height').onChange(function (value) { reset(); }).listen();
  folder.add(poolSize, 'y', 1, 3).name('pool depth').onChange(function (value) { reset(); }).listen();
  folder.add(water, 'waveVelocity', 0, 5).name('wave velocity').onChange(reset).listen();
  folder.add(water, 'areaConservationEnabled', 'areaConservationEnabled').name('area conservation').listen().onChange(reset);
  renderer = new Renderer(gl, water, flagCenter, flagSize);
  cubemap = new Cubemap({
    xneg: document.getElementById('xneg'),
    xpos: document.getElementById('xpos'),
    yneg: document.getElementById('ypos'),
    ypos: document.getElementById('ypos'),
    zneg: document.getElementById('zneg'),
    zpos: document.getElementById('zpos')
  }, gl);

  reset();

  if (!water.textureA.canDrawTo() || !water.textureB.canDrawTo()) {
    throw new Error('Rendering to floating-point textures is required but not supported');
  }

  const center = new GL.Vector(-0.4, -0.75, 0.2);
  const radius = 0.25;
  swimmerSphere = new Sphere(center, radius);
  swimmerSphere.cinematic = !useGravity;
  water.addSphere(swimmerSphere);
  const leftArm = new Sphere(AWAY, armRadius);
  const rightArm = new Sphere(AWAY, armRadius);
  leftArm.cinematic = true;
  rightArm.cinematic = true;
  water.addSphere(leftArm);
  water.addSphere(rightArm);

  for (var i = 0; i < 20; i++) {
    water.addDrop(Math.random() * 2 - 1, Math.random() * 2 - 1, 0.03, (i & 1) ? 0.01 : -0.01);
  }

  document.getElementById('loading').innerHTML = '';
  onresize();

  var requestAnimationFrame =
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    function (callback) { setTimeout(callback, 0); };

  var prevTime = new Date().getTime();
  function animate() {
    var nextTime = new Date().getTime();
    if (!paused) {
      update((nextTime - prevTime) / 1000, nextTime / 1000);
      draw(nextTime);
    }
    prevTime = nextTime;
    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);

  window.onresize = onresize;

  var prevHit;
  var planeNormal;
  var mode = -1;
  var MODE_ADD_DROPS = 0;
  var MODE_MOVE_SPHERE = 1;
  var MODE_ORBIT_CAMERA = 2;

  var oldX, oldY;

  function startDrag(x, y) {
    oldX = x;
    oldY = y;
    var tracer = new GL.Raytracer();
    var ray = tracer.getRayForPixel(x * ratio, y * ratio);
    var pointOnPlane = tracer.eye.add(ray.multiply(-tracer.eye.y / ray.y));
    var sphereHitTest = GL.Raytracer.hitTestSphere(tracer.eye, ray, swimmerSphere.center, swimmerSphere.radius);
    if (sphereHitTest) {
      mode = MODE_MOVE_SPHERE;
      swimmerSphere.cinematic = true;
      prevHit = sphereHitTest.hit;
      planeNormal = tracer.getRayForPixel(gl.canvas.width / 2, gl.canvas.height / 2).negative();
    } else if (Math.abs(pointOnPlane.x) < poolSize.x / 2 && Math.abs(pointOnPlane.z) < poolSize.z / 2) {
      mode = MODE_ADD_DROPS;
      duringDrag(x, y);
    } else {
      mode = MODE_ORBIT_CAMERA;
    }
  }

  function duringDrag(x, y) {
    switch (mode) {
      case MODE_ADD_DROPS: {
        var tracer = new GL.Raytracer();
        var ray = tracer.getRayForPixel(x * ratio, y * ratio);
        var pointOnPlane = tracer.eye.add(ray.multiply(-tracer.eye.y / ray.y));
        water.addDrop(pointOnPlane.x / poolSize.x * 2, pointOnPlane.z / poolSize.z * 2, 0.03, 0.03);
        if (paused) {
          water.updateNormals();
          renderer.updateCaustics(water);
        }
        break;
      }
      case MODE_MOVE_SPHERE: {
        var tracer = new GL.Raytracer();
        var ray = tracer.getRayForPixel(x * ratio, y * ratio);
        var t = -planeNormal.dot(tracer.eye.subtract(prevHit)) / planeNormal.dot(ray);
        var nextHit = tracer.eye.add(ray.multiply(t));
        const center = swimmerSphere.center.add(nextHit.subtract(prevHit));
        const x_sphere = Math.max(radius - poolSize.x / 2, Math.min(poolSize.x / 2 - radius, center.x));
        const y_sphere = Math.max(radius - poolSize.y, Math.min(10, center.y));
        const z_sphere = Math.max(radius - poolSize.z / 2, Math.min(poolSize.z / 2 - radius, center.z));
        swimmerSphere.move(new GL.Vector(x_sphere, y_sphere, z_sphere));
        prevHit = nextHit;
        if (paused) renderer.updateCaustics(water);
        break;
      }
      case MODE_ORBIT_CAMERA: {
        angleY -= x - oldX;
        angleX -= y - oldY;
        angleX = Math.max(-89.999, Math.min(89.999, angleX));
        break;
      }
    }
    oldX = x;
    oldY = y;
    if (paused) draw();
  }

  function stopDrag() {
    mode = -1;
    swimmerSphere.cinematic = !useGravity;
  }

  function isHelpElement(element) {
    return element === help || element.parentNode && isHelpElement(element.parentNode);
  }

  function zoom(delta) {
    zoomDistance *= 1 - delta * 0.001;
    zoomDistance = Math.max(2, Math.min(50, zoomDistance));
    if (paused) draw();
  };

  addEventListener('wheel', function (e) {
    var delta = e.deltaY;
    zoom(-delta);
  });

  document.onmousedown = function (e) {
    if (!isHelpElement(e.target)) {
      e.preventDefault();
      startDrag(e.pageX, e.pageY);
    }
  };

  document.onmousemove = function (e) {
    duringDrag(e.pageX, e.pageY);
  };

  document.onmouseup = function () {
    stopDrag();
  };

  document.ontouchstart = function (e) {
    if (e.touches.length === 1 && !isHelpElement(e.target)) {
      e.preventDefault();
      startDrag(e.touches[0].pageX, e.touches[0].pageY);
    }
  };

  document.ontouchmove = function (e) {
    if (e.touches.length === 1) {
      duringDrag(e.touches[0].pageX, e.touches[0].pageY);
    }
  };

  document.ontouchend = function (e) {
    if (e.touches.length == 0) {
      stopDrag();
    }
  };

  document.onkeydown = function (e) {
    if (e.which == ' '.charCodeAt(0)) paused = !paused;
    else if (e.which == 'G'.charCodeAt(0)) {
      swimmerSphere.cinematic = !swimmerSphere.cinematic;
      useGravity = !useGravity;
    }
    else if (e.which == 'L'.charCodeAt(0) && paused) draw();
    else if (e.which == 'J'.charCodeAt(0)) {
      useGravity = true;
      swimmerSphere.cinematic = false;
      swimmerSphere.velocity = new GL.Vector(0, 0, 1.5);
      swimmerSphere.center = new GL.Vector(0, 1, -poolSize.z / 2.);
    }
    else if (e.which == 'C'.charCodeAt(0)) {
      water.setAreaConservation(!water.areaConservationEnabled);
      console.log("Area conservation " + (water.areaConservationEnabled ? "enabled." : "disabled."));
    }
    else if (e.which == 'P'.charCodeAt(0)) {
      water.showProjectionGrid = !water.showProjectionGrid;
      console.log("Projection grid " + (water.showProjectionGrid ? "enabled." : "disabled."));
    }
    else if (e.which == 'A'.charCodeAt(0)) {
      water.showAreaConservedGrid = !water.showAreaConservedGrid;
      console.log("Area conserved grid " + (water.showAreaConservedGrid ? "enabled." : "disabled."));
    }
    else if (e.which == 'S'.charCodeAt(0)) {
      swimming = !swimming;
      if (swimming) {
        swimmerSphere.cinematic = false;
        useGravity = true;
        swimmerSphere.center = new GL.Vector(-poolSize.y / 2. + radius + 0.1, 0, -poolSize.z / 2.);
      }
      else {
        leftArm.move(AWAY);
        rightArm.move(AWAY);
        swimmerSphere.velocity = new GL.Vector(0, 0, 0);
        swimmerSphere.center = new GL.Vector(0, 0, 0);
      }
      console.log("Swimming " + (swimming ? "enabled." : "disabled."));
    }
    else if (e.which == 'V'.charCodeAt(0)) {
      video.show = !video.show;
    }
    else if (e.which == 'O'.charCodeAt(0)) {
      poolSize.x = 25;
      poolSize.y = 2;
      poolSize.z = 50;
      resolution = new GL.Vector(2048, 4096);
      water.setAreaConservation(false);
      water.waveVelocity = 2.5;
      reset();
      reset();
      console.log("Olympic mode enabled.");
    }
    else if (e.which == 40) { // down
      if (resolution.x > 129)
        resolution.x = Math.round(resolution.x / 2);
      reset();
      console.log("decreasing x resolution");
    }
    else if (e.which == 38) { // up
      if (resolution.x < 16384)
        resolution.x = Math.round(resolution.x * 2);
      reset();
      reset();
      console.log("increasing x resolution");
    }
    else if (e.which == 37) { // left
      if (resolution.y > 129)
        resolution.y = Math.round(resolution.y / 2);
      reset();
      console.log("decreasing y resolution");
    }
    else if (e.which == 39) { // right
      if (resolution.y < 16384)
        resolution.y = Math.round(resolution.y * 2);
      reset();
      console.log("increasing y resolution");
    }
  };


  function getArmOffset(time, phase) {
    return new GL.Vector(0., Math.cos(armPulsation * time + phase), Math.sin(armPulsation * time + phase)).multiply(armAmplitude);
  }

  var frame = 0;

  function update(dt, time) {
    if (dt > 1) return;
    frame += dt * 2;

    if (swimming) {
      swimmerSphere.addForce(new GL.Vector(0., 0., 150.5));
      rightArm.move(swimmerSphere.center.add(getArmOffset(time, 0)).add(new GL.Vector(.3, 0, 0)));
      leftArm.move(swimmerSphere.center.add(getArmOffset(time, Math.PI)).add(new GL.Vector(-.3, 0, 0)));
    }

    if (mode == MODE_MOVE_SPHERE) {
      // Start from rest when the player releases the mouse after moving the sphere
      swimmerSphere.velocity = new GL.Vector(0, 0, 0);
    }

    // Displace water around the sphere
    water.updateSpheres(dt);

    // Update the water simulation and graphics
    water.stepSimulation();
    water.stepSimulation();
    water.updateNormals();
    renderer.updateCaustics(water);

  }

  function draw(time) {
    // Change the light direction to the camera look vector when the L key is pressed
    if (GL.keys.L) {
      renderer.lightDir = GL.Vector.fromAngles((90 - angleY) * Math.PI / 180, -angleX * Math.PI / 180);
      if (paused) renderer.updateCaustics(water);
    }

    /**@type {WebGLRenderingContext} */
    const g = gl;
    // g.clearColor(1, 1, 1, 1);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    gl.loadIdentity();
    gl.translate(0, 0, -zoomDistance);
    gl.rotate(-angleX, 1, 0, 0);
    gl.rotate(-angleY, 0, 1, 0);
    gl.translate(0, 0.5, 0);

    gl.enable(gl.DEPTH_TEST);
    renderer.sphereCenter = swimmerSphere.center;
    renderer.sphereRadius = swimmerSphere.radius;
    renderer.renderCube(water);
    renderer.renderWater(water, cubemap);
    renderer.renderSpheres(water);
    video.render(time);
    gl.disable(gl.DEPTH_TEST);
  }
};
