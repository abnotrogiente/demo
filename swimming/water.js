/*
 * WebGL Water
 * http://madebyevan.com/webgl-water/
 *
 * Copyright 2011 Evan Wallace
 * Released under the MIT license
 */

import GL from './lightgl.js';
import { Sphere } from './sphere.js';
import { Swimmer } from './swimmer.js';
import { swimmersHelperFunctions } from './swimmer.js';

// The data in the texture is (position.y, velocity.y, normal.x, normal.z)
function Water(gl, poolSize, resolution = null) {
  this.gl = gl;
  this.damping = 0.02;
  this.areaConservationEnabled = true;
  this.visualizationWavesEnabled = true;
  this.sqrt_2_PI = Math.sqrt(2 * Math.PI);
  /**@type {Sphere[]} */
  this.spheres = [];
  var vertexShader = `
    out vec2 coord;
    uniform vec2 invPoolSizeVertex;
    void main() {
      coord = gl_Vertex.xy * invPoolSizeVertex + 0.5;
      gl_Position = vec4(gl_Vertex.xy * 2. * invPoolSizeVertex, 0., 1.0);
    }
  `;

  this.reset(poolSize, resolution);
  if (!GL.Texture.canUseFloatingPointTextures()) {
    //throw new Error('This demo requires the OES_texture_float extension');
  }

  this.dropShader = new GL.Shader(vertexShader, `
    const float PI = 3.141592653589793;
    uniform sampler2D tex;
    uniform vec2 center;
    uniform vec3 poolSize;
    uniform float radius;
    uniform float strength;
    in vec2 coord;
    out vec4 fragColor;
    void main() {
      /* get vertex info */
      vec4 info = texture(tex, coord);
      
      /* add the drop to the height */
      float drop = max(0.0, 1.0 - length(center * 0.5 + 0.5 - coord) / (radius / poolSize.z));
      drop = 0.5 - cos(drop * PI) * 0.5;
      info.r += drop * strength;
      
      fragColor = info;
    }
  `);
  this.updateShader = new GL.Shader(vertexShader, `
    uniform sampler2D tex;
    uniform vec2 delta;
    uniform float wr;
    uniform float prev_wr;
    uniform float damping;
    uniform float sqrt_2_PI;
    uniform vec3 poolSize;
    in vec2 coord;
    out vec4 fragColor;
    float gaussian(float x, float mean, float std) {
    return exp(-(x - mean) * (x - mean) / (2. * std * std)) / (std * sqrt_2_PI);
  }
  void main() {
      /* get vertex info */
      vec4 info = texture(tex, coord);

      /* calculate average neighbor height */
      vec2 dx = vec2(delta.x, 0.0);
      vec2 dy = vec2(0.0, delta.y);
      float average = (
      texture(tex, coord - dx).r +
      texture(tex, coord - dy).r +
      texture(tex, coord + dx).r +
      texture(tex, coord + dy).r
    ) * 0.25;

    /* change the velocity to move toward the average */
    info.g += (average - info.r) * 2.0;

    /* attenuate the velocity a little so waves do not last forever */
    info.g *= 1. - damping;/*TODO parametriser ça*/

    /* move the vertex along the velocity */
    info.r += info.g;
      

    fragColor = info;
  }
  `);
  this.normalShader = new GL.Shader(vertexShader, `
    uniform sampler2D tex;
    uniform vec2 delta;
    in vec2 coord;
    out vec4 fragColor;
  void main() {
      /* get vertex info */
      vec4 info = texture(tex, coord);

      /* update the normal */
      vec3 dx = vec3(delta.x, texture(tex, vec2(coord.x + delta.x, coord.y)).r - info.r, 0.0);
      vec3 dy = vec3(0.0, texture(tex, vec2(coord.x, coord.y + delta.y)).r - info.r, delta.y);
    info.ba = normalize(cross(dy, dx)).xz;

    fragColor = info;
  }
  `);
  this.sphereShader = new GL.Shader(vertexShader, `
    uniform sampler2D tex;
    uniform vec3 oldCenter;
    uniform vec3 newCenter;
    uniform float radius;
    uniform vec3 poolSize;
    in vec2 coord;
    out vec4 fragColor;
    
    float volumeInSphere(vec3 center) {
      vec3 toCenter = vec3((coord.x - 0.5) * poolSize.x, 0.0, (coord.y - 0.5) * poolSize.z) - center;
      float t = length(toCenter) / radius;
      float dy = exp(-pow(t * 1.5, 6.0));
      float ymin = min(0.0, center.y - dy);
      float ymax = min(max(0.0, center.y + dy), ymin + 2.0 * dy);
    return (ymax - ymin) * 0.1;
  }

  void main() {
      /* get vertex info */
      vec4 info = texture(tex, coord);

    /* add the old volume */
    info.r += volumeInSphere(oldCenter);

    /* subtract the new volume */
    info.r -= volumeInSphere(newCenter);

    fragColor = info;
  }
  `);

  this.visualizationWavesShader = new GL.Shader(vertexShader, `
    uniform sampler2D tex;
    uniform bool add;
    uniform vec3 poolSize;
    in vec2 coord;
    out vec4 fragColor;

    ` + swimmersHelperFunctions + `

    void main() {
      vec4 info = texture(tex, coord);
      float w = getDivingWaves(coord).x + getRecordWave(coord);
      info.r += add ? w : -w;
      fragColor = info;
    }
    `);
}

Water.prototype.reset = function (poolSize, resolution = null) {
  this.WR_position = 100000;
  this.prev_WR_position = 0;
  if (resolution !== null) {
    console.log("resolution.y : " + resolution.y);
    this.W = Math.round(resolution.x);
    this.H = Math.round(resolution.y);
    console.log("Using custom resolution:", this.W, this.H);
  } else {
    this.W = 256;
    this.H = 256;
  }
  Swimmer.reset(new GL.Vector(poolSize.x, poolSize.z), new GL.Vector(this.W, this.H));
  //Swimmer.attributes.createRenderingTexture(this.W, this.H);
  this.plane = GL.Mesh.plane({ detail: 255, width: poolSize.x, height: poolSize.z });
  this.delta = new GL.Vector(1 / this.W, 1 / this.H);
  /**@type {WebGLRenderingContext} */
  const g = this.gl;
  if (this.textureA) g.deleteTexture(this.textureA.id);
  if (this.textureB) g.deleteTexture(this.textureB.id);
  this.textureA = new GL.Texture(this.W, this.H, { type: this.gl.FLOAT, filter: filter });
  this.textureB = new GL.Texture(this.W, this.H, { type: this.gl.FLOAT, filter: filter });
  this.areaConservationTexture = new GL.Texture(this.W, this.H, { type: this.gl.FLOAT, filter: filter });
  this.showAreaConservedGrid = false;
  this.showProjectionGrid = false;

  this.poolSize = poolSize;
  this.invPoolSize = new GL.Vector(1 / poolSize.x, 1 / poolSize.y, 1 / poolSize.z);
  var filter = GL.Texture.canUseFloatingPointLinearFiltering() ? this.gl.LINEAR : this.gl.NEAREST;
  if ((!this.textureA.canDrawTo() || !this.textureB.canDrawTo()) && GL.Texture.canUseHalfFloatingPointTextures()) {
    console.log("No draw");
    filter = GL.Texture.canUseHalfFloatingPointLinearFiltering() ? this.gl.LINEAR : this.gl.NEAREST;
    this.textureA = new GL.Texture(this.W, this.H, { type: this.gl.FLOAT, filter: filter });
    this.textureB = new GL.Texture(this.W, this.H, { type: this.gl.FLOAT, filter: filter });
  }
};

Water.prototype.addDrop = function (x, y, radius, strength) {
  var this_ = this;
  this.textureB.drawTo(function () {
    this_.textureA.bind();
    this_.dropShader.uniforms({
      invPoolSizeVertex: [this_.invPoolSize.x, this_.invPoolSize.z],
      center: [x, y],
      radius: radius,
      strength: strength,
      poolSize: [this_.poolSize.x, this_.poolSize.y, this_.poolSize.z]
    }).draw(this_.plane);
  });
  this.textureB.swapWith(this.textureA);
};

/**
 * 
 * @param {boolean} add 
 * @param {Swimmer[]} swimmers 
 * @returns 
 */
Water.prototype.addOrRemoveVisualizationWaves = function (add, swimmers, raceTime) {
  if (!this.visualizationWavesEnabled) return;
  var this_ = this;

  this.textureB.drawTo(function () {
    this_.textureA.bind();
    const swimmersAttributesTexture = Swimmer.getAttributesTexture();
    if (swimmersAttributesTexture) swimmersAttributesTexture.bind(1);
    this_.visualizationWavesShader.uniforms({
      swimmersAttributesTexture: 1,
      invPoolSizeVertex: [this_.invPoolSize.x, this_.invPoolSize.z],
      poolSize: [this_.poolSize.x, this_.poolSize.y, this_.poolSize.z],
      wr: this_.WR_position,
      sqrt_2_PI: this_.sqrt_2_PI,
      add: add,
      swimmersNumber: swimmers.length,
      time: raceTime
    }).draw(this_.plane);
  });
  this.textureB.swapWith(this.textureA);

}

/**
 * 
 * @param {Swimmer} swimmer 
 */
Water.prototype.addSwimmer = function (swimmer) {
  for (let sphere of swimmer.spheres) this.addSphere(sphere);
}

Water.prototype.addSphere = function (sphere) {
  this.spheres.push(sphere);
};

Water.prototype.updateSpheres = function (dt) {
  const speed = 2.4;
  this.prev_WR_position = this.WR_position;
  this.WR_position += dt * speed;
  for (let i = 0; i < this.spheres.length; i++) {
    const sphere = this.spheres[i];
    //this.moveSphere(sphere.oldCenter, sphere.center, sphere.radius);
  }
};

Water.prototype.moveSphere = function (oldCenter, newCenter, radius) {
  var this_ = this;
  this.textureB.drawTo(function () {
    this_.textureA.bind();
    this_.sphereShader.uniforms({
      invPoolSizeVertex: [this_.invPoolSize.x, this_.invPoolSize.z],
      oldCenter: oldCenter,
      newCenter: newCenter,
      radius: radius,
      poolSize: [this_.poolSize.x, this_.poolSize.y, this_.poolSize.z]
    }).draw(this_.plane);
  });
  this.textureB.swapWith(this.textureA);
};

Water.prototype.stepSimulation = function () {
  var this_ = this;
  this.textureB.drawTo(function () {
    this_.textureA.bind();
    this_.updateShader.uniforms({
      invPoolSizeVertex: [this_.invPoolSize.x, this_.invPoolSize.z],
      delta: [this_.delta.x, this_.delta.y],
      wr: this_.WR_position,
      prev_wr: this_.prev_WR_position,
      poolSize: [this_.poolSize.x, this_.poolSize.y, this_.poolSize.z],
      sqrt_2_PI: this_.sqrt_2_PI,
      damping: this_.damping
    }).draw(this_.plane);
  });
  this.textureB.swapWith(this.textureA);

  this.updateAreaConservation();
};

Water.prototype.updateNormals = function () {
  var this_ = this;
  this.textureB.drawTo(function () {
    this_.textureA.bind();
    this_.normalShader.uniforms({
      invPoolSizeVertex: [this_.invPoolSize.x, this_.invPoolSize.z],
      delta: [this_.delta.x, this_.delta.y]
      // delta: [Math.max(this_.poolSize.x, this_.poolSize.z) / this_.poolSize.x / Math.max(this_.textureA.width, this_.textureA.height), Math.max(this_.poolSize.x, this_.poolSize.z) / this_.poolSize.z / Math.max(this_.textureA.width, this_.textureA.height)]
    }).draw(this_.plane);
  });
  this.textureB.swapWith(this.textureA);
};

Water.prototype.setAreaConservation = function (enabled) {
  this.areaConservationEnabled = enabled;
}

Water.prototype.updateAreaConservation = function () {

  if (!this.areaConservationEnabled) {
    return;
  }
  var this_ = this;

  var readType, readArrayType, readExt;
  if (this.textureA.type === this.gl.FLOAT) {
    readType = this.gl.FLOAT;
    readArrayType = Float32Array;
    readExt = 'EXT_color_buffer_float';
  } else if (this.textureA.type === this.gl.HALF_FLOAT_OES) {
    readType = this.gl.HALF_FLOAT_OES;
    readArrayType = Uint16Array; // Assuming 4 components * 2 bytes each
    readExt = 'EXT_color_buffer_half_float';
  } else {
    console.warn('Unsupported texture type for reading');
    return;
  }

  if (!this.gl.getExtension(readExt)) {
    console.warn(readExt + ' not available; cannot read pixels');
    return;
  }

  // Create framebuffer if not exists
  if (!this.fb) {
    this.fb = this.gl.createFramebuffer();
  }

  // Attach textureA to framebuffer
  this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.fb);
  this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, this.gl.COLOR_ATTACHMENT0, this.gl.TEXTURE_2D, this.textureA.id, 0);

  // Check framebuffer
  const status = this.gl.checkFramebufferStatus(this.gl.FRAMEBUFFER);
  if (status !== this.gl.FRAMEBUFFER_COMPLETE) {
    console.error('Framebuffer incomplete: ' + status + ' for texture type ' + this.textureA.type);
    this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
    return;
  }

  // Read pixels
  this.gl.pixelStorei(this.gl.PACK_ALIGNMENT, 1);
  const readBuf = new readArrayType(this.W * this.H * 4);
  // const writeBuf = new readArrayType(this.W * this.H * 4);
  const writeBuf = new Float32Array(this.W * this.H * 4);
  this.gl.readPixels(0, 0, this.W, this.H, this.gl.RGBA, readType, readBuf);
  for (let i = 0; i < this.W; i++) {
    writeBuf[i * 4 + 1] = 1.0;
  }
  // Example: modify and write back (only for float)
  const dx_proj = this.poolSize.x / this.W;
  const dz_proj = this.poolSize.z / this.H;
  const dx_proj_sq = dx_proj * dx_proj;
  const dz_proj_sq = dz_proj * dz_proj;
  if (this.textureA.type === this.gl.FLOAT) {
    // Increase red channel
    for (let j = 0; j < this.H; j += 1) {
      for (let i = 0; i < this.W; i += 1) {
        const index = (j * this.W + i) * 4;
        const indexAreaConservation = ((this.H - 1 - j) * this.W + i) * 4;
        const x = writeBuf[indexAreaConservation];
        const z = writeBuf[indexAreaConservation + 1];
        if (i + 1 < this.W) {
          const dy = readBuf[index] - readBuf[index + 4];
          const dx = Math.sqrt(dy * dy + dx_proj_sq);
          writeBuf[indexAreaConservation + 4] = x + dx;
        }
        if (j + 1 < this.H) {
          const dy = readBuf[index] - readBuf[index + this.W * 4];
          const dz = Math.sqrt(dy * dy + dz_proj_sq);
          writeBuf[indexAreaConservation - 4 * this.W + 1] = z + dz;
        }
      }
    }


    // Write back to textureA
    this.gl.bindTexture(this.gl.TEXTURE_2D, this.areaConservationTexture.id);
    this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT, 1);
    this.gl.texSubImage2D(this.gl.TEXTURE_2D, 0, 0, 0, this.W, this.H, this.gl.RGBA, this.gl.FLOAT, writeBuf);
  }

  // Cleanup
  this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
  this.gl.bindTexture(this.gl.TEXTURE_2D, null);
};

export { Water };

