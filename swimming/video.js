import { initBuffers } from "./init-buffers.js";
import { drawScene } from "./draw-scene.js";
import GL from "./lightgl.js";

let cubeRotation = 0.0;
// will set to true when video can be copied to texture



//
// start here
//
class Video {
    constructor(path, gl) {
        this.gl = gl
        this.copyVideo = false;
        this.deltaTime = 0;
        // Only continue if WebGL is available and working
        if (gl === null) {
            alert(
                "Unable to initialize WebGL. Your browser or machine may not support it."
            );
            return;
        }
        // Set clear color to black, fully opaque
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        // Clear the color buffer with specified clear color
        gl.clear(gl.COLOR_BUFFER_BIT);

        // Vertex shader program

        const vsSource = `
  attribute vec4 aVertexPosition;
  attribute vec3 aVertexNormal;
  attribute vec2 aTextureCoord;

  uniform mat4 uNormalMatrix;
  uniform mat4 uModelViewMatrix;
  uniform mat4 uProjectionMatrix;

  varying highp vec2 vTextureCoord;
  varying highp vec3 vLighting;

  void main(void) {
    gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
    vTextureCoord = aTextureCoord;

    // Apply lighting effect

    highp vec3 ambientLight = vec3(0.3, 0.3, 0.3);
    highp vec3 directionalLightColor = vec3(1, 1, 1);
    highp vec3 directionalVector = normalize(vec3(0.85, 0.8, 0.75));

    highp vec4 transformedNormal = uNormalMatrix * vec4(aVertexNormal, 1.0);

    highp float directional = max(dot(transformedNormal.xyz, directionalVector), 0.0);
    vLighting = ambientLight + (directionalLightColor * directional);
  }
`;

        // Fragment shader program

        const fsSource = `
  varying highp vec2 vTextureCoord;
  varying highp vec3 vLighting;

  uniform sampler2D uSampler;

  void main(void) {
    highp vec4 texelColor = texture2D(uSampler, vTextureCoord);

    gl_FragColor = vec4(texelColor.rgb * vLighting, texelColor.a);
  }
`;

        // Initialize a shader program; this is where all the lighting
        // for the vertices and so forth is established.
        const shaderProgram = this.initShaderProgram(vsSource, fsSource);

        // Collect all the info needed to use the shader program.
        // Look up which attributes our shader program is using
        // for aVertexPosition, aVertexColor and also
        // look up uniform locations.
        this.programInfo = {
            program: shaderProgram,
            attribLocations: {
                vertexPosition: gl.getAttribLocation(shaderProgram, "aVertexPosition"),
                vertexNormal: gl.getAttribLocation(shaderProgram, "aVertexNormal"),
                textureCoord: gl.getAttribLocation(shaderProgram, "aTextureCoord"),
            },
            uniformLocations: {
                projectionMatrix: gl.getUniformLocation(
                    shaderProgram,
                    "uProjectionMatrix"
                ),
                modelViewMatrix: gl.getUniformLocation(shaderProgram, "uModelViewMatrix"),
                normalMatrix: gl.getUniformLocation(shaderProgram, "uNormalMatrix"),
                uSampler: gl.getUniformLocation(shaderProgram, "uSampler"),
            },
        };

        // Here's where we call the routine that builds all the
        // objects we'll be drawing.
        this.buffers = initBuffers(gl);

        this.texture = this.initTexture();
        this.video = this.setupVideo(path);

        // Flip image pixels into the bottom-to-top order that WebGL expects.
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);

        this.then = 0;
    }

    render(now) {
        now *= 0.001; // convert to seconds
        this.deltaTime = now - this.then;
        this.then = now;

        if (this.copyVideo) {
            this.updateTexture();
        }

        drawScene(this.gl, this.programInfo, this.buffers, this.texture, cubeRotation);
        cubeRotation += this.deltaTime;
    }

    //
    // Initialize a shader program, so WebGL knows how to draw our data
    //
    initShaderProgram(vsSource, fsSource) {
        const vertexShader = this.loadShader(this.gl.VERTEX_SHADER, vsSource);
        const fragmentShader = this.loadShader(this.gl.FRAGMENT_SHADER, fsSource);

        // Create the shader program

        const shaderProgram = this.gl.createProgram();
        this.gl.attachShader(shaderProgram, vertexShader);
        this.gl.attachShader(shaderProgram, fragmentShader);
        this.gl.linkProgram(shaderProgram);

        // If creating the shader program failed, alert

        if (!this.gl.getProgramParameter(shaderProgram, this.gl.LINK_STATUS)) {
            alert(
                `Unable to initialize the shader program: ${this.gl.getProgramInfoLog(
                    shaderProgram
                )}`
            );
            return null;
        }

        return shaderProgram;
    }

    //
    // creates a shader of the given type, uploads the source and
    // compiles it.
    //
    loadShader(type, source) {
        const shader = this.gl.createShader(type);

        // Send the source to the shader object

        this.gl.shaderSource(shader, source);

        // Compile the shader program

        this.gl.compileShader(shader);

        // See if it compiled successfully

        if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
            alert(
                `An error occurred compiling the shaders: ${this.gl.getShaderInfoLog(shader)}`
            );
            this.gl.deleteShader(shader);
            return null;
        }

        return shader;
    }

    initTexture() {
        const texture = this.gl.createTexture();
        this.gl.bindTexture(this.gl.TEXTURE_2D, texture);

        // Because video has to be download over the internet
        // they might take a moment until it's ready so
        // put a single pixel in the texture so we can
        // use it immediately.
        const level = 0;
        const internalFormat = this.gl.RGBA;
        const width = 1;
        const height = 1;
        const border = 0;
        const srcFormat = this.gl.RGBA;
        const srcType = this.gl.UNSIGNED_BYTE;
        const pixel = new Uint8Array([0, 0, 255, 255]); // opaque blue
        this.gl.texImage2D(
            this.gl.TEXTURE_2D,
            level,
            internalFormat,
            width,
            height,
            border,
            srcFormat,
            srcType,
            pixel
        );

        // Turn off mips and set wrapping to clamp to edge so it
        // will work regardless of the dimensions of the video.
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR);

        return texture;
    }

    updateTexture() {
        const level = 0;
        const internalFormat = this.gl.RGBA;
        const srcFormat = this.gl.RGBA;
        const srcType = this.gl.UNSIGNED_BYTE;
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.texture);
        this.gl.texImage2D(
            this.gl.TEXTURE_2D,
            level,
            internalFormat,
            srcFormat,
            srcType,
            this.video
        );
    }

    setupVideo(url) {
        const video = document.createElement("video");

        let playing = false;
        let timeupdate = false;

        video.playsInline = true;
        video.muted = true;
        video.loop = true;

        // Waiting for these 2 events ensures
        // there is data in the video

        video.addEventListener(
            "playing",
            () => {
                playing = true;
                checkReady();
            },
            true
        );

        video.addEventListener(
            "timeupdate",
            () => {
                timeupdate = true;
                checkReady();
            },
            true
        );

        video.src = url;
        video.play();
        const this_ = this;
        const checkReady = () => {
            if (playing && timeupdate) {
                this_.copyVideo = true;
            }
        }

        return video;
    }
}

export { Video };