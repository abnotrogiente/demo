import GL from "./lightgl";

const vertexShaderSource = /*glsl*/ `#version 300 es
    in vec3 pos;
    in float life;
    in float size;
    in float color;

    out float vLife;
    out float vColor;
    out float altitude;

    uniform mat4 MVM;
    uniform mat4 projection;

    void main() {
        vec4 posInView = MVM * vec4(pos, 1.);
        gl_Position = projection * posInView;
        // gl_Position = vec4(0., 0., 0., 1.);
        gl_PointSize = size * 5000. / -posInView.z;

        if (color > .01) gl_PointSize = 500. / -posInView.z;

        vLife = life;
        vColor = min(color, 1.);
        altitude = pos.y;
    }

`
const fragmentShaderSource = /*glsl*/ `#version 300 es
    precision mediump float;

    in float vLife;
    in float vColor;
    in float altitude;

    out vec4 fragColor;

    float max3(vec3 v) {
        return max(max(v.x, v.y), v.z);
    }

    void main() {
        vec3 col = vec3(1., 1., 1.);
        if (vColor > 0.01) {
            col = vec3(vColor, 0., 1. - vColor);
            col /= max3(col);
        }
        vec2 uv = gl_PointCoord - 0.5;

        float d = length(uv);

        // soft circle
        float alpha = smoothstep(0.5, 0.0, d);

        // fade with life
        alpha *= vLife;

        if (altitude < 0. && vColor > 0.01) alpha /= -altitude*10.;

        if (vColor < 0.01 && altitude < 0.) alpha /= (1.-altitude)*10.;

        if (vLife > 1.) alpha = 0.;
        fragColor = vec4(col, alpha);
    }

`


const GRAVITY = -9.8;
const DAMPING = .01;

class Particle {
    constructor(pos, vel, fixed, color = 0) {
        this.pos = pos;   // vec2 or vec3
        this.vel = vel;
        this.fixed = fixed;
        this.color = color;
        this.life = 1.0;
        this.size = Math.random() * 0.05 + 0.02;
    }

    update(dt) {

        if (this.fixed) {
            this.life -= dt * .15;
            return;
        }

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

    spawnSplash(pos, phi0, strength, strengthThreshold, fixed = false) {
        // console.log("spawn splashes : " + strength);
        // const basePos = gridToWorld(i, j);

        if (fixed) {
            const vel = new GL.Vector(0., 0., 0.);
            const p = new Particle(pos, vel, fixed, strength);
            p.life = 1.1;
            this.particles.push(p);
            return;
        }

        const count = Math.min(10, strength * 20);

        for (let k = 0; k < count; k++) {
            const theta = (Math.random() - .5) * Math.PI; // upward hemisphere
            const phi = Math.random() * 2 * Math.PI;

            // const thetaVariation = Math.PI / 6;
            // // const theta = Math.PI / 2 * (Math.exp(-strength / strengthThreshold)) + (Math.random() - .5) * thetaVariation;
            // const theta = (Math.random()) * Math.PI / 2;

            // const phiVariation = 2 * Math.PI;
            // const phi = phi0 + (Math.random() - 0.5) * phiVariation;

            const speed = (0.5 + Math.random());
            // const speed = strength * (0.5 + Math.random());

            const vel = new GL.Vector(
                Math.sin(theta) * Math.cos(phi) * speed,
                Math.cos(theta) * speed,
                Math.sin(theta) * Math.sin(phi) * speed
            );


            this.particles.push(new Particle(pos, vel, fixed));
        }
        // console.log("spawn splash : " + this.particles.length);
    }

    update(dt) {
        this.particles.forEach((particle, idx) => {
            particle.update(dt);
            if (particle.life <= 0.) this.particles.splice(idx, 1);
            // else if (particle.pos.y < 0.) this.particles.splice(idx, 1);
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

    draw(showStreaks) {
        const gl = this.gl;
        gl.enable(gl.BLEND);
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);



        const data = [];
        this.particles.forEach(particle => {
            const pos = particle.pos;
            data.push(pos.x, pos.y, pos.z, particle.life, particle.size, particle.color);
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

        const colorLocation = gl.getAttribLocation(this.program, "color");

        const type = gl.FLOAT;
        const normalize = false;

        const sizeof_float = 4;
        const stride = 6 * sizeof_float;
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

        offset = 5 * sizeof_float;
        gl.vertexAttribPointer(colorLocation, 1, type, normalize, stride, offset);
        gl.enableVertexAttribArray(colorLocation);

        gl.drawArrays(gl.POINTS, 0, this.particles.length);


        gl.disable(gl.BLEND);
    }
}

export { SplashParticles };