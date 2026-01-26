/*
 * WebGL Water
 * http://madebyevan.com/webgl-water/
 *
 * Copyright 2011 Evan Wallace
 * Released under the MIT license
 */

import GL from './lightgl.js';

// The data in the texture is (position.y, velocity.y, normal.x, normal.z)
function Water(gl, poolSize) {
  this.gl = gl;
  var vertexShader = '\
    varying vec2 coord;\
    void main() {\
      coord = gl_Vertex.xy * 0.5 + 0.5;\
      gl_Position = vec4(gl_Vertex.xyz, 1.0);\
    }\
  ';
  this.plane = GL.Mesh.plane();
  if (!GL.Texture.canUseFloatingPointTextures()) {
    throw new Error('This demo requires the OES_texture_float extension');
  }
  var filter = GL.Texture.canUseFloatingPointLinearFiltering() ? gl.LINEAR : gl.NEAREST;
  this.W = 256;
  this.H = 256;
  this.textureA = new GL.Texture(this.W, this.H, { type: gl.FLOAT, filter: filter });
  this.textureB = new GL.Texture(this.W, this.H, { type: gl.FLOAT, filter: filter });
  this.areaConservationTexture = new GL.Texture(this.W, this.H, { type: gl.FLOAT, filter: filter });
  this.areaConservationEnabled = true;

  this.poolSize = poolSize;
  // this.poolSize = new GL.Vector(2., 2.);
  this.waterMesh = GL.Mesh.plane({ detail: 200, width: this.poolSize.x, height: this.poolSize.z });
  // this.waterMesh = GL.Mesh.plane({ detail: 200 });


  if ((!this.textureA.canDrawTo() || !this.textureB.canDrawTo()) && GL.Texture.canUseHalfFloatingPointTextures()) {
    filter = GL.Texture.canUseHalfFloatingPointLinearFiltering() ? gl.LINEAR : gl.NEAREST;
    this.textureA = new GL.Texture(this.W, this.H, { type: gl.HALF_FLOAT_OES, filter: filter });
    this.textureB = new GL.Texture(this.W, this.H, { type: gl.HALF_FLOAT_OES, filter: filter });
  }
  this.dropShader = new GL.Shader(vertexShader, '\
    const float PI = 3.141592653589793;\
    uniform sampler2D texture;\
    uniform vec2 center;\
    uniform float radius;\
    uniform float strength;\
    varying vec2 coord;\
    void main() {\
      /* get vertex info */\
      vec4 info = texture2D(texture, coord);\
      \
      /* add the drop to the height */\
      float drop = max(0.0, 1.0 - length(center * 0.5 + 0.5 - coord) / radius);\
      drop = 0.5 - cos(drop * PI) * 0.5;\
      info.r += drop * strength;\
      \
      gl_FragColor = info;\
    }\
  ');
  this.updateShader = new GL.Shader(vertexShader, '\
    uniform sampler2D texture;\
    uniform vec2 delta;\
    varying vec2 coord;\
    void main() {\
      /* get vertex info */\
      vec4 info = texture2D(texture, coord);\
      \
      /* calculate average neighbor height */\
      vec2 dx = vec2(delta.x, 0.0);\
      vec2 dy = vec2(0.0, delta.y);\
      float average = (\
        texture2D(texture, coord - dx).r +\
        texture2D(texture, coord - dy).r +\
        texture2D(texture, coord + dx).r +\
        texture2D(texture, coord + dy).r\
      ) * 0.25;\
      \
      /* change the velocity to move toward the average */\
      info.g += (average - info.r) * 2.0;\
      \
      /* attenuate the velocity a little so waves do not last forever */\
      info.g *= 0.995;\
      \
      /* move the vertex along the velocity */\
      info.r += info.g;\
      \
      gl_FragColor = info;\
    }\
  ');
  this.AreaConservationInitShader = new GL.Shader(vertexShader, '\
    varying vec2 coord;\
    void main() {\
      gl_FragColor = vec4(coord, 0.0, 0.0);\
    }\
  ');
  this.normalShader = new GL.Shader(vertexShader, '\
    uniform sampler2D texture;\
    uniform vec2 delta;\
    varying vec2 coord;\
    void main() {\
      /* get vertex info */\
      vec4 info = texture2D(texture, coord);\
      \
      /* update the normal */\
      vec3 dx = vec3(delta.x, texture2D(texture, vec2(coord.x + delta.x, coord.y)).r - info.r, 0.0);\
      vec3 dy = vec3(0.0, texture2D(texture, vec2(coord.x, coord.y + delta.y)).r - info.r, delta.y);\
      info.ba = normalize(cross(dy, dx)).xz;\
      \
      gl_FragColor = info;\
    }\
  ');
  this.sphereShader = new GL.Shader(vertexShader, '\
    uniform sampler2D texture;\
    uniform vec3 oldCenter;\
    uniform vec3 newCenter;\
    uniform float radius;\
    uniform vec3 poolSize;\
    varying vec2 coord;\
    \
    float volumeInSphere(vec3 center) {\
      vec3 toCenter = vec3(coord.x * 2.0 - 1.0, 0.0, coord.y * 2.0 - 1.0) - center;\
      toCenter = vec3((coord.x - 0.5) * poolSize.x, 0.0, (coord.y - 0.5) * poolSize.z) - center;\
      float t = length(toCenter) / radius;\
      float dy = exp(-pow(t * 1.5, 6.0));\
      float ymin = min(0.0, center.y - dy);\
      float ymax = min(max(0.0, center.y + dy), ymin + 2.0 * dy);\
      return (ymax - ymin) * 0.1;\
    }\
    \
    void main() {\
      /* get vertex info */\
      vec4 info = texture2D(texture, coord);\
      \
      /* add the old volume */\
      info.r += volumeInSphere(oldCenter);\
      \
      /* subtract the new volume */\
      info.r -= volumeInSphere(newCenter);\
      \
      gl_FragColor = info;\
    }\
  ');
}

Water.prototype.addDrop = function (x, y, radius, strength) {
  var this_ = this;
  this.textureB.drawTo(function () {
    this_.textureA.bind();
    this_.dropShader.uniforms({
      center: [x, y],
      radius: radius,
      strength: strength
    }).draw(this_.plane);
  });
  this.textureB.swapWith(this.textureA);
};

Water.prototype.moveSphere = function (oldCenter, newCenter, radius) {
  var this_ = this;
  this.textureB.drawTo(function () {
    this_.textureA.bind();
    this_.sphereShader.uniforms({
      oldCenter: oldCenter,
      newCenter: newCenter,
      radius: radius,
      poolSize: [this_.poolSize.x, this_.poolSize.y, this_.poolSize.z]
    }).draw(this_.plane);
  });
  this.textureB.swapWith(this.textureA);
};

Water.prototype.initAreaConservation = function () {
  var this_ = this;
  this.areaConservationTexture.drawTo(function () {
    this_.AreaConservationInitShader.draw(this_.plane);
  });
};

Water.prototype.stepSimulation = function () {
  var this_ = this;
  this.textureB.drawTo(function () {
    this_.textureA.bind();
    this_.updateShader.uniforms({
      delta: [this_.poolSize.z / this_.poolSize.x / this_.textureA.width, this_.poolSize.z / this_.poolSize.z / this_.textureA.height]
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
      delta: [this_.poolSize.z / this_.poolSize.x / this_.textureA.width, this_.poolSize.z / this_.poolSize.z / this_.textureA.height]
    }).draw(this_.plane);
  });
  this.textureB.swapWith(this.textureA);
};

Water.prototype.setAreaConservation = function (enabled) {
  this.areaConservationEnabled = enabled;
}

Water.prototype.updateAreaConservation = function () {
  // return;
  var this_ = this;

  var readType, readArrayType, readExt;
  if (this.textureA.type === this.gl.FLOAT) {
    readType = this.gl.FLOAT;
    readArrayType = Float32Array;
    readExt = 'WEBGL_color_buffer_float';
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
          const dx = Math.sqrt(dy * dy + 1 / (this.W * this.W));
          writeBuf[indexAreaConservation + 4] = x + dx;
        }
        if (j + 1 < this.H) {
          const dy = readBuf[index] - readBuf[index + this.W * 4];
          const dz = Math.sqrt(dy * dy + 1 / (this.H * this.H));
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

