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
import { Swimmer } from './swimmer.js';


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
/**@type {WebGLRenderingContext} */
var gl = GL.create();
/**@type {Water} */
var water;
var cubemap;
/**@type {Renderer} */
var renderer;
/**@type {Swimmer[]} */
const swimmers = [];
const numSwimmers = 8;
var angleX = -25;
var angleY = -200.5;
var angleZ = 0;
let translateX = 0;
let translateY = 0;
var zoomDistance = 4.0;

const videoStartTime = 17;
let videoTime = 0;
var paused = false;
var flagCenter;
var flagSize;
var poolSize = new GL.Vector(2.0, 1.0, 2.0);
let resolution = new GL.Vector(256, 256);
let params = { numSteps: 2, focal: 45 };
const gui = new GUI();
function updateResolutionWarning() {
  document.getElementById('warning').hidden = !(resolution.x * resolution.y > 300000 && (water && water.areaConservationEnabled));
}
function reset() {
  console.log("reset");
  document.getElementById('resolution').innerText = `Resolution: ${resolution.x} x ${resolution.y}`;
  updateResolutionWarning();
  flagCenter = new GL.Vector(0., -poolSize.z / 2. + 1.);
  water.reset(poolSize, resolution);
  renderer.flagCenter = flagCenter;
  renderer.flagSize = flagSize;
  renderer.reset();

  const dx = poolSize.x / numSwimmers;
  let x = -poolSize.x / 2 + dx / 2;
  for (let swimmer of swimmers) {
    swimmer.body.center.x = x;
    swimmer.startingPoint.x = x;
    x += dx;
  }
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
    gl.perspective(params.focal, gl.canvas.width / gl.canvas.height, 0.01, 100);
    gl.matrixMode(gl.MODELVIEW);
    draw();
  }

  document.body.appendChild(gl.canvas);
  gl.canvas.oncontextmenu = function (e) { e.preventDefault(); };
  gl.clearColor(0, 0, 0, 1);

  flagCenter = new GL.Vector(0., -poolSize.z / 2. + 1.);
  flagSize = 0.7;
  water = new Water(gl, poolSize);
  const video = new Video(gl, "./video.mp4");  // Empty path - use drag-and-drop instead
  // video.video.src = "./video.mp4";

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
  folder.add(water, 'damping', 0.005, 0.1).name('water damping').listen();
  folder.add(water, 'areaConservationEnabled', 'areaConservationEnabled').name('area conservation').listen();
  folder.add(Swimmer, "showFlags").name('show flags').listen();
  folder.add(params, 'focal', 28, 45).name('focal').listen().onChange(function (value) {
    gl.matrixMode(gl.PROJECTION);
    gl.loadIdentity();
    gl.perspective(params.focal, gl.canvas.width / gl.canvas.height, 0.01, 100);
    gl.matrixMode(gl.MODELVIEW);
    console.log("perspective : " + params.focal);
  });
  // folder.add(params, 'numSteps', 1, 10).step(1).name("number of simulation steps");
  renderer = new Renderer(gl, water, flagCenter, flagSize);
  cubemap = new Cubemap({
    xneg: document.getElementById('xneg'),
    xpos: document.getElementById('xpos'),
    yneg: document.getElementById('ypos'),
    ypos: document.getElementById('ypos'),
    zneg: document.getElementById('zneg'),
    zpos: document.getElementById('zpos')
  }, gl);


  if (!water.textureA.canDrawTo() || !water.textureB.canDrawTo()) {
    throw new Error('Rendering to floating-point textures is required but not supported');
  }

  const center = new GL.Vector(-0.4, -0.75, 0.2);
  const center2 = new GL.Vector(0.4, -0.75, 0.2);
  const s = new Swimmer(center);
  const s2 = new Swimmer(center2)
  for (let i = 0; i < 1; i++) swimmers.push(new Swimmer(center));
  const radius = s.body.radius;
  for (let swimmer of swimmers) water.addSwimmer(swimmer);
  reset();

  for (var i = 0; i < 20; i++) {
    water.addDrop(Math.random() * 2 - 1, Math.random() * 2 - 1, 0.06, (i & 1) ? 0.01 : -0.01);
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
  var swimmerSelected;
  var mode = -1;
  var MODE_ADD_DROPS = 0;
  var MODE_MOVE_SPHERE = 1;
  var MODE_ORBIT_CAMERA = 2;
  const MODE_TRANSLATE_CAMERA = 3;

  var oldX, oldY;

  function startDrag(x, y, event) {
    oldX = x;
    oldY = y;
    if (!event || event.button === 0) {
      var tracer = new GL.Raytracer();
      var ray = tracer.getRayForPixel(x * ratio, y * ratio);
      var pointOnPlane = tracer.eye.add(ray.multiply(-tracer.eye.y / ray.y));
      for (let swimmer of swimmers) {
        var sphereHitTest = GL.Raytracer.hitTestSphere(tracer.eye, ray, swimmer.body.center, swimmer.body.radius);
        if (sphereHitTest) {
          mode = MODE_MOVE_SPHERE;
          swimmerSelected = swimmer;
          swimmer.body.cinematic = true;
          prevHit = sphereHitTest.hit;
          planeNormal = tracer.getRayForPixel(gl.canvas.width / 2, gl.canvas.height / 2).negative();
          return;
        }
      }
      if (Math.abs(pointOnPlane.x) < poolSize.x / 2 && Math.abs(pointOnPlane.z) < poolSize.z / 2) {
        mode = MODE_ADD_DROPS;
        duringDrag(x, y);
      }
    } else if (event.button === 2) {
      mode = MODE_ORBIT_CAMERA;
    }
    else if (event.button === 1) {
      mode = MODE_TRANSLATE_CAMERA;
    }
  }

  function duringDrag(x, y, e) {
    switch (mode) {
      case MODE_ADD_DROPS: {
        var tracer = new GL.Raytracer();
        var ray = tracer.getRayForPixel(x * ratio, y * ratio);
        var pointOnPlane = tracer.eye.add(ray.multiply(-tracer.eye.y / ray.y));
        water.addDrop(pointOnPlane.x / poolSize.x * 2, pointOnPlane.z / poolSize.z * 2, 0.06, 0.03);
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
        const center = swimmerSelected.body.center.add(nextHit.subtract(prevHit));
        const radius = swimmerSelected.body.radius;
        const x_sphere = Math.max(radius - poolSize.x / 2, Math.min(poolSize.x / 2 - radius, center.x));
        const y_sphere = Math.max(radius - poolSize.y, Math.min(10, center.y));
        const z_sphere = Math.max(radius - poolSize.z / 2, Math.min(poolSize.z / 2 - radius, center.z));
        swimmerSelected.body.move(new GL.Vector(x_sphere, y_sphere, z_sphere));
        prevHit = nextHit;
        if (paused) renderer.updateCaustics(water);
        break;
      }
      case MODE_ORBIT_CAMERA: {
        if (e && e.shiftKey) {
          angleZ -= x - oldX;
          angleZ = Math.max(-89.999, Math.min(89.999, angleZ));
          break;
        }
        angleY -= x - oldX;
        angleX -= y - oldY;
        angleX = Math.max(-89.999, Math.min(89.999, angleX));
        break;
      }
      case MODE_TRANSLATE_CAMERA: {
        const factor = .001 * zoomDistance;
        translateX += factor * (x - oldX);
        translateY -= factor * (y - oldY);
      }
    }
    oldX = x;
    oldY = y;
    if (paused) draw();
  }

  function stopDrag() {
    mode = -1;
    if (swimmerSelected) swimmerSelected.body.cinematic = !Swimmer.useGravity;
  }

  function isHelpElement(element) {
    return element === help || element.parentNode && isHelpElement(element.parentNode);
  }

  function zoom(delta) {
    zoomDistance *= 1 - delta * 0.0004;
    zoomDistance = Math.max(2, Math.min(100, zoomDistance));
    if (paused) draw();
  };

  addEventListener('wheel', function (e) {
    var delta = e.deltaY;
    zoom(-delta);
  });

  document.onmousedown = function (e) {
    if (!isHelpElement(e.target)) {
      e.preventDefault();
      startDrag(e.pageX, e.pageY, e);
    }
  };

  document.onmousemove = function (e) {
    duringDrag(e.pageX, e.pageY, e);
  };

  document.onmouseup = function () {
    stopDrag();
  };

  document.ontouchstart = function (e) {
    if (e.touches.length === 1 && !isHelpElement(e.target)) {
      e.preventDefault();
      startDrag(e.touches[0].pageX, e.touches[0].pageY, false);
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

  function startSwimming() {
    Swimmer.swimming = true;
    for (let swimmer of swimmers) {
      swimmer.body.cinematic = false;
      Swimmer.useGravity = true;
      swimmer.body.center = new GL.Vector(swimmer.startingPoint.x, 0, -poolSize.z / 2.);
    }
  }

  function stopSwimming() {
    Swimmer.swimming = false;
    for (let swimmer of swimmers) {
      swimmer.body.velocity = new GL.Vector(0, 0, 0);
      swimmer.body.center = new GL.Vector(swimmer.startingPoint.x, 0, 0);
    }
  }

  function jump() {
    Swimmer.useGravity = true;
    for (let swimmer of swimmers) {
      swimmer.body.cinematic = false;
      swimmer.body.velocity = new GL.Vector(0, 0, 4.5);
      swimmer.body.center = new GL.Vector(swimmer.startingPoint.x, 1, -poolSize.z / 2.);
    }
  }

  document.onkeydown = function (e) {
    if (e.which == ' '.charCodeAt(0)) paused = !paused;
    else if (e.which == 'G'.charCodeAt(0)) {
      for (let swimmer of swimmers) swimmer.body.cinematic = !swimmer.body.cinematic;
      Swimmer.useGravity = !Swimmer.useGravity;
    }
    else if (e.which == 'L'.charCodeAt(0) && paused) draw();
    else if (e.which == 'J'.charCodeAt(0)) {
      jump();
    }
    else if (e.which == 'C'.charCodeAt(0)) {
      water.setAreaConservation(!water.areaConservationEnabled);
      updateResolutionWarning();
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
      if (!Swimmer.swimming) {
        startSwimming();
      }
      else {
        stopSwimming();
      }
      console.log("Swimming " + (Swimmer.swimming ? "enabled." : "disabled."));
    }
    else if (e.which == 'V'.charCodeAt(0)) {
      video.show = !video.show;
    }
    else if (e.which == 'O'.charCodeAt(0)) {
      poolSize.x = 25;
      poolSize.y = 2;
      poolSize.z = 50;
      // resolution = new GL.Vector(2048, 4096);
      resolution.x = 1024;
      resolution.y = 2048;
      water.setAreaConservation(false);
      water.waveVelocity = 2.5;

      if (swimmers.length != numSwimmers) {
        for (let i = swimmers.length; i < numSwimmers; i++) {
          const s = new Swimmer(center);
          swimmers.push(s);
          water.addSwimmer(s);
        }
      }

      reset();

      params.focal = 31.75;
      gl.matrixMode(gl.PROJECTION);
      gl.loadIdentity();
      gl.perspective(params.focal, gl.canvas.width / gl.canvas.height, 0.01, 100);
      gl.matrixMode(gl.MODELVIEW);
      translateX = -0.42;
      translateY = 1.18;
      zoomDistance = 52.5;
      angleX = -24;
      angleY = -261.5;
      angleZ = -4;
      console.log("Olympic mode enabled.");
    }
    else if (e.which == 'W'.charCodeAt(0)) {
      water.WR_position = 0;
      videoTime = videoStartTime;
      startSwimming();
      jump();
    }
    else if (e.which == 'H'.charCodeAt(0)) {
      document.getElementById("commands").hidden = !document.getElementById("commands").hidden;
      document.getElementById("h").hidden = !document.getElementById("h").hidden;
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

    if (mode == MODE_MOVE_SPHERE) {
      // Start from rest when the player releases the mouse after moving the sphere
      for (let swimmer of swimmers) swimmer.body.velocity = new GL.Vector(0, 0, 0);
    }

    // Update the water simulation and graphics
    for (let swimmer of swimmers) swimmer.update(dt, time, poolSize);
    water.updateSpheres(dt);
    for (let i = 0; i < params.numSteps; i++) {
      water.stepSimulation();
    }
    water.updateNormals();
    renderer.updateCaustics(water);
    videoTime += dt;
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
    gl.translate(translateX, translateY, -zoomDistance);
    gl.rotate(-angleZ, 0, 0, 1);
    gl.rotate(-angleX, 1, 0, 0);
    gl.rotate(-angleY, 0, 1, 0);
    gl.translate(0, 0.5, 0);

    gl.enable(gl.DEPTH_TEST);
    renderer.sphereCenter = swimmers[0].body.center;
    renderer.sphereRadius = radius;
    renderer.renderCube(water);
    renderer.renderWater(water, cubemap, swimmers);
    renderer.renderSpheres(water);
    if (video.copyVideo) video.video.currentTime = videoTime;
    video.render();
    gl.disable(gl.DEPTH_TEST);
  }
};
