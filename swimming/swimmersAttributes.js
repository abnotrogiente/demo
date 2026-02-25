import GL from "./lightgl";
import { Swimmer } from "./swimmer";
import { ARM_DELTA_X, FOOT_DELTA_X, FOOT_DELTA_Z, MAX_NUM_SWIMMER, NUM_VEC_ATTRIBUTES } from "./swimmersConstants";

const pointVertexShaderSource = `#version 300 es
    const float ARM_DELTA_X = float(`+ ARM_DELTA_X + `);
    const float FOOT_DELTA_X = float( `+ FOOT_DELTA_X + `);
    const float FOOT_DELTA_Z = float( `+ FOOT_DELTA_Z + `);
    uniform vec2 invPoolSize;
    in vec4 iData1;
    in vec4 iData2;
    in vec4 iData3;
    out float fragAltitude;
    out float fragCyclePhase;
    void main() {
        fragCyclePhase = iData3.r;
        fragAltitude = iData2.a;
        vec2 center = iData1.rg;
        vec2 ips = vec2(.5, .5);
        gl_Position = vec4(center * 2. * invPoolSize, 0., 1.); // TODO SET ips TO invPoolSize
        gl_PointSize = 1.;
    }

`;

const pointFragmentShaderSource = `#version 300 es
    precision highp float;
    in float fragCyclePhase;
    in float fragAltitude;
    const float PI = 3.141592;
    out vec4 fragColor;
    void main() {
        fragColor = vec4(fragAltitude, fragCyclePhase / (2. * PI), 1., 1.);
    }
`;

const volumeVertexShaderSource = `#version 300 es
    in vec2 iVertex;
    out vec2 fragCoord;
    void main() {
        fragCoord = iVertex * .5 + .5;
        gl_Position = vec4(iVertex.xy, 0., 1.);
    }
`;

const volumeFragmentShaderSource = `#version 300 es
    precision highp float;
    uniform sampler2D tex;
    //uniform vec2 poolSize;
    in vec2 fragCoord;
    out vec4 fragColor;

    float volumeInSphere(vec2 diff, float altitude, float cyclePhase) {
        const float radius = .25;
        float t = length(diff) / radius;
        float dy = exp(-pow(t * 1.5, 6.0));
        float ymin = min(0.0, altitude - dy);
        float ymax = min(max(0.0, altitude + dy), ymin + 2.0 * dy);
        return (ymax - ymin) * 0.1;
    }

    void main() {
        const vec2 textureSize = vec2(256, 256); // TODO Uniform
        const vec2 poolSize = vec2(2., 2.); // TODO uniform
        vec2 delta = vec2(1./textureSize.x, 1./textureSize.y);
        const float radius = .25;
        const int rx = int(radius / poolSize.x * textureSize.x / poolSize.x);
        const int ry = int(radius / poolSize.y *textureSize.y / poolSize.y);
        float res = 0.;
        for(int i = -rx; i < rx; i++) {
            float i_float = float(i);
            for(int j = -ry; j < ry; j++) {
                //TODO tester si vraiment dans kernel
                float j_float = float(j);
                vec2 diff = vec2(i_float, j_float) * delta;
                vec2 p = fragCoord + diff;
                vec4 info = texture(tex, p);
                if(info.b != 0.) res += volumeInSphere(-diff*poolSize, info.r, info.g) * 5.;
            }
        }
        fragColor = vec4(res, 0., 0., .4);
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
]);

class SwimmersAttributes {
    /**
     *
     * @param {WebGLRenderingContext} gl
     */
    constructor(gl, poolSize) {
        this.numVecAttributes = NUM_VEC_ATTRIBUTES;
        this.maxNumSwimmer = MAX_NUM_SWIMMER;
        this.gl = gl;
        const filter = gl.NEAREST;
        this.texture = new GL.Texture(this.numVecAttributes, this.maxNumSwimmer, { type: gl.FLOAT, filter: filter });
        this.poolSize = poolSize;

        this.initPrograms();

        this.indexBuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
        this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, indices, this.gl.STATIC_DRAW);

        this.vboPlane = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vboPlane);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, vertexBuffer, this.gl.STATIC_DRAW);


        this.vboPoints = this.gl.createBuffer();
    }

    /**
     *
     * @param {Swimmer[]} swimmers
     */
    update(swimmers) {
        this.numSwimmers = swimmers.length;
        this.swimmersAttributes = new Float32Array(this.numVecAttributes * 4 * this.maxNumSwimmer);
        for (let i = 0; i < swimmers.length; i++) {
            this.swimmersAttributes[this.numVecAttributes * 4 * i] = swimmers[i].body.center.x;
            this.swimmersAttributes[this.numVecAttributes * 4 * i + 1] = swimmers[i].body.center.z;
            this.swimmersAttributes[this.numVecAttributes * 4 * i + 2] = swimmers[i].divingDistance;
            this.swimmersAttributes[this.numVecAttributes * 4 * i + 3] = swimmers[i].divingTime;

            //Second row of attributes
            this.swimmersAttributes[this.numVecAttributes * 4 * i + 4] = swimmers[i].reactionTime;
            this.swimmersAttributes[this.numVecAttributes * 4 * i + 5] = swimmers[i].body.velocity.z * 3.6;
            this.swimmersAttributes[this.numVecAttributes * 4 * i + 6] = swimmers[i].nationality;
            this.swimmersAttributes[this.numVecAttributes * 4 * i + 7] = swimmers[i].body.center.y;

            this.swimmersAttributes[this.numVecAttributes * 4 * i + 8] = swimmers[i].cyclePhase;
            // this.swimmersAttributes[this.numVecAttributes * 4 * i + 9] = swimmers[i].rightArm.center.y;
            // this.swimmersAttributes[this.numVecAttributes * 4 * i + 10] = swimmers[i].leftFoot.center.y;
            // this.swimmersAttributes[this.numVecAttributes * 4 * i + 11] = swimmers[i].rightFoot.center.y;
        }
        // Write back to textureA
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.texture.id);
        this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, false);
        this.gl.texSubImage2D(this.gl.TEXTURE_2D, 0, 0, 0, this.numVecAttributes, this.maxNumSwimmer, this.gl.RGBA, this.gl.FLOAT, this.swimmersAttributes);
        this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, true);

        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vboPoints);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, this.swimmersAttributes, this.gl.DYNAMIC_DRAW);
    };

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

        this.displacementTexture = new GL.Texture(width, height, { type: this.gl.FLOAT, filter: this.gl.NEAREST }); // TODO try unsigned bytes here.
        this.displacementFrameBuffer = this.gl.createFramebuffer();
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.displacementFrameBuffer);
        //const attachmentPoint = this.gl.COLOR_ATTACHMENT0;
        this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, attachmentPoint, this.gl.TEXTURE_2D, this.displacementTexture.id, 0);
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
        this.programPoints = this.buildProgram(pointVertexShaderSource, pointFragmentShaderSource);
        this.programVolume = this.buildProgram(volumeVertexShaderSource, volumeFragmentShaderSource);

        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
    }

    volumePass() {
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
        this.gl.useProgram(this.programVolume);

        const vertexLocation = this.gl.getAttribLocation(this.programVolume, "iVertex");

        const sizeVertex = 2;
        const type = this.gl.FLOAT;
        const normalize = false;
        const sizeof_float = 4;
        const stride = 0;
        const offset = 0;
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vboPlane);
        this.gl.vertexAttribPointer(vertexLocation, sizeVertex, type, normalize, stride, offset);
        this.gl.enableVertexAttribArray(vertexLocation);

        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
        this.gl.activeTexture(this.gl.TEXTURE0);
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.pointsTexture.id);
        // this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.drawElements(this.gl.TRIANGLES, 6, this.gl.UNSIGNED_SHORT, 0);


    }

    pointPass() {
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.pointsFrameBuffer);
        this.gl.useProgram(this.programPoints);
        const data1Location = this.gl.getAttribLocation(this.programPoints, 'iData1');

        const data2Location = this.gl.getAttribLocation(this.programPoints, 'iData2');

        const data3Location = this.gl.getAttribLocation(this.programPoints, 'iData3');

        const invPoolSizeLocation = this.gl.getUniformLocation(this.programPoints, "invPoolSize");
        this.gl.uniform2f(invPoolSizeLocation, 1. / this.poolSize.x, 1. / this.poolSize.y);



        const size = 4;
        const type = this.gl.FLOAT;
        const normalize = false;

        const sizeof_float = 4;
        const stride = 12 * sizeof_float;
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

        offset = 2 * 4 * sizeof_float;
        if (data3Location >= 0) {
            this.gl.vertexAttribPointer(data3Location, size, type, normalize, stride, offset);
            this.gl.enableVertexAttribArray(data3Location);
        }

        this.gl.viewport(0, 0, this.pointsTexture.width, this.pointsTexture.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        this.gl.drawArrays(this.gl.POINTS, 0, this.numSwimmers);
    }

    draw() {
        this.gl.enable(this.gl.BLEND);
        this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);

        this.pointPass();
        this.volumePass();

        this.gl.disable(this.gl.BLEND);
    }
}

export { SwimmersAttributes };