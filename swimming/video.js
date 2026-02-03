import GL from "./lightgl.js";

let cubeRotation = 0.0;
// will set to true when video can be copied to texture



//
// start here
//
class Video {
    constructor(gl) {
        /**@type {WebGLRenderingContext} */
        this.gl = gl
        this.copyVideo = false;
        this.show = false;
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

        this.shader = new GL.Shader(`
    varying highp vec2 vTextureCoord;

    void main(void) {
        gl_Position = vec4(gl_Vertex.xz, 0., 1.);
        vTextureCoord = gl_TexCoord.st;
    }
`, `
    varying highp vec2 vTextureCoord;

    uniform sampler2D uSampler;

    void main(void) {
        highp vec4 texelColor = texture2D(uSampler, vTextureCoord);
        gl_FragColor = vec4(texelColor.rgb, 0.5);
        // gl_FragColor = vec4(1, 0, 0, 1);
    }
`);

        this.mesh = GL.Mesh.plane({ width: 2., height: 2., coords: true, normals: true });
        this.mesh.transform(GL.Matrix.rotate(90, 1, 0, 0));
        this.mesh.transform(GL.Matrix.translate(0, .1, 0));
        // Using `this.shader` (lightgl) for rendering; skip manual
        // initShaderProgram/vsSource/fsSource which were undefined.
        this.programInfo = null;

        // Here's where we call the routine that builds all the
        // objects we'll be drawing.
        // this.buffers = initBuffers(gl);

        this.texture = this.initTexture();
        this.video = this.setupVideo();

        // Flip image pixels into the bottom-to-top order that WebGL expects.
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);

    }

    render() {
        if (!this.show) return;
        if (this.copyVideo) {
            this.updateTexture();
        }

        // Set up the mesh if not already compiled
        if (!this.mesh.vertexBuffers || !this.mesh.vertexBuffers.vertex) {
            this.mesh.compile();
        }

        // this.gl.enable(this.gl.CULL_FACE);
        this.gl.enable(this.gl.BLEND);
        this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
        this.gl.activeTexture(this.gl.TEXTURE0);
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.texture);
        this.shader.uniforms({
            uSampler: 0
        }).draw(this.mesh);
        this.gl.disable(this.gl.BLEND);

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

    setupVideo() {
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

        //video.src = url;
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