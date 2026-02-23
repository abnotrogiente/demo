import GL from "./lightgl";
import { TimeTable } from "./timeTable";


const MAX_WAVES_PARTICLES = 16000;
const BIRTH_X_INDEX = 0;
const BIRTH_Z_INDEX = 1;
const BRITH_TIME_INDEX = 2;
const DIRECTION_X_INDEX = 4;
const DIRECTION_Z_INDEX = 5;
const AMPLITUDE_INDEX = 6;
const RADIUS_INDEX = 7;
const NUM_VECTORS = 2;

const RADIUS = .1;
const VELOCITY = 1.;

const vertexShaderPointsSource = `#version 300 es
    uniform float time;
    in vec4 iData1;
    in vec4 iData2;
    out float amplitude;

    const float velocity = 1.;
    void main() {
        vec2 birthPosition = iData1.rg;
        float birthTime = iData1.b;
        vec2 direction = iData2.rg;
        amplitude = iData2.b;
        gl_Position = vec4(birthPosition + (time - birthTime) * velocity * direction, 0., 1.);
        gl_PointSize = 1.;
    }
`;

const fragmentShaderPointsSource = `#version 300 es
    precision highp float;
    out vec4 fragColor;
    in float amplitude;
    void main() {
        fragColor = vec4(amplitude, 0., 0., 1.);
    }
`;

const vertexShaderFilterSource = `#version 300 es
    in vec2 iVertex;
    out vec2 fragCoord;
    void main() {
        fragCoord = iVertex * .5 + .5;
        gl_Position = vec4(iVertex.xy, 0., 1.);
    }
`;

const fragmentShaderFilterSource = `#version 300 es
    precision highp float;
    uniform sampler2D tex;
    in vec2 fragCoord;
    out vec4 fragColor;
    const float radius = .1;
    const float PI = 3.14159265359;

    float deviation(vec2 diff, float amplitude) {
        float dist = length(diff);
        float invRadius = 1. / radius;

        return amplitude * .5 * (cos(PI * dist * invRadius) + 1.);// * rectangle(dist * .5 * invRadius);
    }
    void main() {
        //vec2 delta = 1. / textureSize(tex, 0);
        const vec2 textureSize = vec2(256., 256.);
        const vec2 poolSize = vec2(2., 2.);
        vec2 delta = vec2(1./textureSize.x, 1./textureSize.y);
        const int rx = int(radius * textureSize.x / poolSize.x);
        const int ry = int(radius *textureSize.y / poolSize.y);
        float res = 0.;
        for(int i = -rx; i < rx; i++) {
            float i_float = float(i);
            for(int j = -ry; j < ry; j++) {
                //TODO tester si vraiment dans kernel
                float j_float = float(j);
                vec2 diff = vec2(i_float, j_float) * delta;
                vec2 p = fragCoord + diff;
                vec4 info = texture(tex, p);
                if(info.r != 0.) res += deviation(diff*poolSize, info.r) * 5.;

                
            }
        }
        fragColor = vec4(res, 0., 0., .5);
        //if (texture(tex, fragCoord).r > 0.1) fragColor = vec4(1., 0., 0., .5);
        //if (length(fragCoord) < .5) fragColor = vec4(1., 0., 0., 1.);
    }
`;


const vertexBuffer = new Float32Array([
    -1, -1,
    1, -1,
    1, 1,
    -1, 1,
]);

const indices = new Uint16Array([
    0, 1, 2,
    2, 3, 0
])


class WaveParticles {

    /**
     * 
     * @param {WebGLRenderingContext} gl_ctx 
     */
    constructor(gl_ctx) {
        this.gl = gl_ctx;
        const filter = this.gl.NEAREST;
        this.texture = new GL.Texture(NUM_VECTORS, MAX_WAVES_PARTICLES, { type: this.gl.FLOAT, filter: filter });
        this.particlesArray = new Float32Array(MAX_WAVES_PARTICLES * NUM_VECTORS * 4);
        this.numParticles = 0;
        this.initPrograms();

        this.indexBuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
        this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, indices, this.gl.STATIC_DRAW);

        this.vboPlane = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vboPlane);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, vertexBuffer, this.gl.STATIC_DRAW);


        this.vboPoints = this.gl.createBuffer();

        this.timeTable = new TimeTable();
    }



    addWaveParticle(birthPosition, direction, time, amplitude) {
        if (this.numParticles == MAX_WAVES_PARTICLES) {
            console.warn("Maximum number of wave particles reached");
            return;
        }
        this.particlesArray[NUM_VECTORS * 4 * this.numParticles + BIRTH_X_INDEX] = birthPosition.x;
        this.particlesArray[NUM_VECTORS * 4 * this.numParticles + BIRTH_Z_INDEX] = birthPosition.y;
        this.particlesArray[NUM_VECTORS * 4 * this.numParticles + BRITH_TIME_INDEX] = time;
        this.particlesArray[NUM_VECTORS * 4 * this.numParticles + DIRECTION_X_INDEX] = direction.x;
        this.particlesArray[NUM_VECTORS * 4 * this.numParticles + DIRECTION_Z_INDEX] = direction.y;
        this.particlesArray[NUM_VECTORS * 4 * this.numParticles + AMPLITUDE_INDEX] = amplitude;
        this.particlesArray[NUM_VECTORS * 4 * this.numParticles + RADIUS_INDEX] = RADIUS;
        this.numParticles++;

        this.updateWavesParticlesTexture();

        const subdivisionTime = time + (RADIUS / 2) / Math.PI / VELOCITY;
        this.timeTable.add(subdivisionTime, this.numParticles);

    }

    updateWavesParticlesTexture() {
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.texture.id);
        this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, false);
        this.gl.texSubImage2D(this.gl.TEXTURE_2D, 0, 0, 0, NUM_VECTORS, MAX_WAVES_PARTICLES, this.gl.RGBA, this.gl.FLOAT, this.particlesArray);
        this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, true);

        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vboPoints);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, this.particlesArray, this.gl.DYNAMIC_DRAW);
    }

    subdivide(i) {

    }

    reset() {
        this.particlesArray.fill(0);
        this.numParticles = 0;
    }

    buildShader(shaderSource, shaderType) {
        const shader = this.gl.createShader(shaderType); // Create the shader object
        this.gl.shaderSource(shader, shaderSource); // Load the shader source
        this.gl.compileShader(shader); // Compile the shader
        return shader;
    }

    createProgram(shaders) {
        const program = this.gl.createProgram();
        shaders.forEach((shader) => {
            this.gl.attachShader(program, shader);
        });
        this.gl.linkProgram(program);
        return program;
    }
    checkShaders(vs, fs, program) {
        if (!this.gl.getShaderParameter(vs, this.gl.COMPILE_STATUS))
            console.error(this.gl.getShaderInfoLog(vs));

        if (!this.gl.getShaderParameter(fs, this.gl.COMPILE_STATUS))
            console.error(this.gl.getShaderInfoLog(fs));

        if (!this.gl.getProgramParameter(program, this.gl.LINK_STATUS))
            console.error(this.gl.getProgramInfoLog(program));
    }

    createRenderingTexture(width, height) {
        this.pointsTexture = new GL.Texture(width, height, { type: this.gl.FLOAT, filter: this.gl.NEAREST }); // TODO try unsigned bytes here.
        this.pointsFrameBuffer = this.gl.createFramebuffer();
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.pointsFrameBuffer);
        const attachmentPoint = this.gl.COLOR_ATTACHMENT0;
        this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, attachmentPoint, this.gl.TEXTURE_2D, this.pointsTexture.id, 0);
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);

        this.wavesTexture = new GL.Texture(width, height, { type: this.gl.FLOAT, filter: this.gl.NEAREST }); // TODO try unsigned bytes here.
        this.wavesFrameBuffer = this.gl.createFramebuffer();
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.wavesFrameBuffer);
        //const attachmentPoint = this.gl.COLOR_ATTACHMENT0;
        this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, attachmentPoint, this.gl.TEXTURE_2D, this.wavesTexture.id, 0);
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
    }

    buildProgram(vertexSource, fragmentSource) {
        const vs = this.buildShader(vertexSource, this.gl.VERTEX_SHADER);
        const fs = this.buildShader(fragmentSource, this.gl.FRAGMENT_SHADER);

        const program = this.createProgram([vs, fs]);

        this.checkShaders(vs, fs, program);

        return program;
    }

    initPrograms() {
        this.programPoints = this.buildProgram(vertexShaderPointsSource, fragmentShaderPointsSource);
        this.programFilter = this.buildProgram(vertexShaderFilterSource, fragmentShaderFilterSource);
    }

    filterPass() {
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.wavesFrameBuffer);

        this.gl.useProgram(this.programFilter);
        const data1Location = this.gl.getAttribLocation(this.programFilter, 'iVertex');


        const sizeVertex = 2;
        const type = this.gl.FLOAT;
        const normalize = false;

        const sizeof_float = 4;
        const stride = 0 * sizeof_float;
        let offset = 0;

        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vboPlane);
        //if (data1Location >= 0) {
        this.gl.vertexAttribPointer(data1Location, sizeVertex, type, normalize, stride, offset);
        this.gl.enableVertexAttribArray(data1Location);



        // bind index buffer and draw two triangles (quad) using the indices
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
        this.gl.activeTexture(this.gl.TEXTURE0);
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.pointsTexture.id);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        this.gl.drawElements(this.gl.TRIANGLES, 6, this.gl.UNSIGNED_SHORT, 0);
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
    }

    pointsPass(time) {
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.pointsFrameBuffer);
        this.gl.useProgram(this.programPoints);
        const data1Location = this.gl.getAttribLocation(this.programPoints, 'iData1');

        const data2Location = this.gl.getAttribLocation(this.programPoints, 'iData2');

        const timeLocation = this.gl.getUniformLocation(this.programPoints, "time");
        this.gl.uniform1f(timeLocation, time);



        const size = 4;
        const type = this.gl.FLOAT;
        const normalize = false;

        const sizeof_float = 4;
        const stride = 8 * sizeof_float;
        let offset = 0;

        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vboPoints);

        if (data1Location >= 0) {
            this.gl.vertexAttribPointer(data1Location, size, type, normalize, stride, offset);
            this.gl.enableVertexAttribArray(data1Location);
        }

        offset = 4 * sizeof_float;
        if (data2Location >= 0) {
            this.gl.vertexAttribPointer(data2Location, size, type, normalize, stride, offset);
            this.gl.enableVertexAttribArray(data2Location);
        }

        this.gl.viewport(0, 0, this.pointsTexture.width, this.pointsTexture.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        this.gl.drawArrays(this.gl.POINTS, 0, this.numParticles);
    }

    draw(time) {
        //this.iterateWaveParticles(time);

        this.gl.enable(this.gl.BLEND);
        this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
        this.pointsPass(time);
        this.filterPass();
        this.gl.disable(this.gl.BLEND);
    }

    getBirthPosition(i) {
        const x = this.particlesArray[NUM_VECTORS * 4 * i + BIRTH_X_INDEX];
        const y = this.particlesArray[NUM_VECTORS * 4 * i + BIRTH_Z_INDEX];
        return new GL.Vector(x, y);
    }

    getDirection(i) {
        const x = this.particlesArray[NUM_VECTORS * 4 * i + DIRECTION_X_INDEX];
        const y = this.particlesArray[NUM_VECTORS * 4 * i + DIRECTION_Z_INDEX];
        return new GL.Vector(x, y);
    }

    getBirthTime(i) {
        return this.particlesArray[NUM_VECTORS * 4 * i + BRITH_TIME_INDEX];
    }

    getAmplitude(i) {
        return this.particlesArray[NUM_VECTORS * 4 * i + AMPLITUDE_INDEX];
    }

    #rotate(v, angle) {
        const c = Math.cos(angle);
        const s = Math.sin(angle);
        const x = c * v.x + s * v.y;
        const y = -s * v.x + c * v.y;
        return new GL.Vector(x, y);
    }

    iterateWaveParticles(time) {
        const events = this.timeTable.getEvents(time);
        if (!events) return;
        for (let event of events) {
            const birthPosition = this.getBirthPosition(event.index);
            const birthTime = this.getBirthTime(event.index);
            const direction = this.getDirection(event.index);
            const dist = (time - birthTime) * VELOCITY;
            const angle = (RADIUS / 2) / dist;
            const direction1 = this.#rotate(direction, angle);
            const direction2 = this.#rotate(direction, -angle);
            const amplitude = this.getAmplitude(event.index);
            this.addWaveParticle(birthPosition, direction1, birthTime, amplitude);
            this.addWaveParticle(birthPosition, direction2, birthTime, amplitude);
        }
    }

}

const waveParticlesHelperFunctions = `

    uniform float time;
    uniform sampler2D waveParticlesTexture;
    uniform float numWaveParticles;

    const float WAVE_VELOCITY = 1.;
    const float PI = 3.1415926536;

    const int MAX_WAVES_PARTICLES = ` + MAX_WAVES_PARTICLES + `;

    const vec2 TEXTURE_SIZE = vec2(`+ NUM_VECTORS + `, ` + MAX_WAVES_PARTICLES + `);

    float rectangle(float x) {
        if (abs(x) < .5) return 1.;
        if (abs(x) == .5) return .5;
        return 0.;
    }

    void getWaveData(in float i, out vec2 birthPosition, out float birthTime, out vec2 direction, out float amplitude, out float radius) {
        vec2 pixel = vec2(0., i);
        vec4 attributes = texture(waveParticlesTexture, (pixel + .5) / TEXTURE_SIZE);
        birthPosition = attributes.rg;
        birthTime = attributes.b;
        
        pixel = vec2(1., i);
        attributes = texture(waveParticlesTexture, (pixel + .5) / TEXTURE_SIZE);
        direction = attributes.rg;
        amplitude = attributes.b;
        radius = attributes.a;
    }

    float deviationFunction(int i, vec2 position) {
     float i_float = float(i);
     vec2 birthPosition;
     float birthTime;
     vec2 direction;
     float amplitude;
     float radius;

     getWaveData(i_float, birthPosition, birthTime, direction, amplitude, radius);

     float invRadius = 1. / radius;

      vec2 wavePosition = birthPosition + (time - birthTime) * WAVE_VELOCITY * direction;
      float dist = length(position - wavePosition);
      return amplitude * .5 * (cos(PI * dist * invRadius) + 1.) * rectangle(dist * .5 * invRadius);
    }

    float getWaveDeviation(vec2 position) {
        float res = 0.;
        for (int i = 0; i < MAX_WAVES_PARTICLES; i++) {
            float i_float = float(i);
            if (i_float > numWaveParticles - .1) break;
            res += deviationFunction(i, position);
        }
        return res;
    }
`;

export { WaveParticles };
export { waveParticlesHelperFunctions };