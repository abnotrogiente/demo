import GL from "./lightgl";

const vertexShaderSource = /*glsl*/ `#version 300 es
    in vec3 pos;
    in float life;
    in float size;

    out float vLife;

    uniform mat4 MVM;
    uniform mat4 projection;

    void main() {
        vec4 posInView = MVM * vec4(pos, 1.);
        gl_Position = projection * posInView;
        // gl_Position = vec4(0., 0., 0., 1.);
        gl_PointSize = size * 5000. / -posInView.z;

        vLife = life;
    }

`
const fragmentShaderSource = /*glsl*/ `#version 300 es
    precision mediump float;

    in float vLife;

    out vec4 fragColor;

    void main() {
        vec2 uv = gl_PointCoord - 0.5;

        float d = length(uv);

        // soft circle
        float alpha = smoothstep(0.5, 0.0, d);

        // fade with life
        alpha *= vLife;

        fragColor = vec4(1.0, 1.0, 1.0, alpha);
    }

`


const GRAVITY = -9.8;
const DAMPING = .01;

class Particle {
    constructor(pos, vel) {
        this.pos = pos;   // vec2 or vec3
        this.vel = vel;
        this.life = 1.0;
        this.size = Math.random() * 0.05 + 0.02;
    }

    update(dt) {
        this.life -= dt * 1.5;

        this.vel.y += GRAVITY * dt;
        this.pos = this.pos.add(this.vel.multiply(dt));

        this.vel = this.vel.multiply(1. - DAMPING);

        this.size *= (1. - DAMPING);

        // lifetime

        // // remove dead
        // if (this.life <= 0) {
        //     particles.splice(i, 1);
        // }
    }
}

class SplashParticles {
    /**
     * 
     * @param {WebGLRenderingContext} gl 
     */
    constructor(gl) {
        this.gl = gl;

        /**@type {Particle[]} */
        this.particles = [];

        this.particleBuffer = this.gl.createBuffer();

        this.initPrograms();
    }

    spawnSplash(pos, strength) {
        // console.log("spawn splashes : " + strength);
        // const basePos = gridToWorld(i, j);

        const count = Math.min(10, strength * 20);

        for (let k = 0; k < count; k++) {
            const theta = (Math.random() - .5) * Math.PI; // upward hemisphere
            const phi = Math.random() * 2 * Math.PI;

            const speed = strength * (0.5 + Math.random());

            const vel = new GL.Vector(
                Math.sin(theta) * Math.cos(phi) * speed * 0.5,
                Math.cos(theta) * speed,
                Math.sin(theta) * Math.sin(phi) * speed * 0.5
            );

            this.particles.push(new Particle(pos, vel));
        }
        // console.log("spawn splash : " + this.particles.length);
    }

    update(dt) {
        this.particles.forEach((particle, idx) => {
            particle.update(dt);
            if (particle.life <= 0.) this.particles.splice(idx, 1);
        });
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
    buildProgram(vertexSource, fragmentSource) {
        const vs = this.buildShader(vertexSource, this.gl.VERTEX_SHADER);
        const fs = this.buildShader(fragmentSource, this.gl.FRAGMENT_SHADER);

        const program = this.createProgram([vs, fs]);

        this.checkShaders(vs, fs, program);

        return program;
    }

    initPrograms() {
        this.program = this.buildProgram(vertexShaderSource, fragmentShaderSource);
    }

    draw() {
        const gl = this.gl;
        gl.enable(gl.BLEND);
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);



        const data = [];
        this.particles.forEach(particle => {
            const pos = particle.pos;
            data.push(pos.x, pos.y, pos.z, particle.life, particle.size);
        });
        gl.bindBuffer(gl.ARRAY_BUFFER, this.particleBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.DYNAMIC_DRAW);

        gl.useProgram(this.program);

        const MVM_location = gl.getUniformLocation(this.program, "MVM");
        const MVM = new Float32Array(gl.modelviewMatrix.m);
        gl.uniformMatrix4fv(MVM_location, true, MVM);



        const projection_location = gl.getUniformLocation(this.program, "projection");
        const PM = new Float32Array(gl.projectionMatrix.m);
        gl.uniformMatrix4fv(projection_location, true, PM);

        const posLocation = gl.getAttribLocation(this.program, "pos");

        const lifeLocation = gl.getAttribLocation(this.program, "life");

        const sizeLocation = gl.getAttribLocation(this.program, "size");

        const type = gl.FLOAT;
        const normalize = false;

        const sizeof_float = 4;
        const stride = 5 * sizeof_float;
        let offset = 0;

        gl.bindBuffer(gl.ARRAY_BUFFER, this.particleBuffer);

        gl.vertexAttribPointer(posLocation, 3, type, normalize, stride, offset);
        gl.enableVertexAttribArray(posLocation);

        offset = 3 * sizeof_float;
        gl.vertexAttribPointer(lifeLocation, 1, type, normalize, stride, offset);
        gl.enableVertexAttribArray(lifeLocation);

        offset = 4 * sizeof_float;
        gl.vertexAttribPointer(sizeLocation, 1, type, normalize, stride, offset);
        gl.enableVertexAttribArray(sizeLocation);

        gl.drawArrays(gl.POINTS, 0, this.particles.length);


        gl.disable(gl.BLEND);
    }
}

export { SplashParticles };