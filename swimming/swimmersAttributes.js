import GL from "./lightgl";
import { Swimmer } from "./swimmer";
import { ARM_DELTA_X, FOOT_DELTA_X, FOOT_DELTA_Z, MAX_NUM_SWIMMER, NUM_VEC_ATTRIBUTES } from "./swimmersConstants";

const vertexShaderSource = `#version 300 es
    const float ARM_DELTA_X = `+ ARM_DELTA_X + `;
    const float FOOT_DELTA_X = `+ FOOT_DELTA_X + `;
    const float FOOT_DELTA_Z = `+ FOOT_DELTA_Z + `;
    uniform vec2 invPoolSize;
    in vec2 iCenter;
    in float iAltitude;
    in float iCyclePhase;
    out float fragAltitude;
    out float fragCyclePhase;
    void main() {
        fragCyclePhase = inCyclePhase;
        fragAltitude = iAltitude;
        gl_Position = vec4(iCenter * 2. * invPoolSize, 0., 1.);
    }

`;

const fragmentShaderSource = `#version 300 es
    in float fragCyclePhase;
    in float fragAltitude;
    out vec4 fragColor;
    void main() {
        fragColor = vec4(fragAltitude, fragCyclePhase, 1., 1.);
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
    constructor(gl) {
        this.numVecAttributes = NUM_VEC_ATTRIBUTES;
        this.maxNumSwimmer = MAX_NUM_SWIMMER;
        this.gl = gl;
        const filter = gl.NEAREST;
        this.texture = new GL.Texture(this.numVecAttributes, this.maxNumSwimmer, { type: gl.FLOAT, filter: filter });
    }

    /**
     * 
     * @param {Swimmer[]} swimmers 
     */
    update(swimmers) {
        const swimmersAttributes = new Float32Array(this.numVecAttributes * 4 * this.maxNumSwimmer);
        console.log("num attributes : " + this.numVecAttributes);
        for (let i = 0; i < swimmers.length; i++) {
            swimmersAttributes[this.numVecAttributes * 4 * i] = swimmers[i].body.center.x;
            swimmersAttributes[this.numVecAttributes * 4 * i + 1] = swimmers[i].body.center.z;
            swimmersAttributes[this.numVecAttributes * 4 * i + 2] = swimmers[i].divingDistance;
            swimmersAttributes[this.numVecAttributes * 4 * i + 3] = swimmers[i].divingTime;

            //Second row of attributes
            swimmersAttributes[this.numVecAttributes * 4 * i + 4] = swimmers[i].reactionTime;
            swimmersAttributes[this.numVecAttributes * 4 * i + 5] = swimmers[i].body.velocity.z * 3.6;
            swimmersAttributes[this.numVecAttributes * 4 * i + 6] = swimmers[i].nationality;
            swimmersAttributes[this.numVecAttributes * 4 * i + 7] = swimmers[i].body.center.y;

            swimmersAttributes[this.numVecAttributes * 4 * i + 8] = swimmers[i].cyclePhase;
            // swimmersAttributes[this.numVecAttributes * 4 * i + 9] = swimmers[i].rightArm.center.y;
            // swimmersAttributes[this.numVecAttributes * 4 * i + 10] = swimmers[i].leftFoot.center.y;
            // swimmersAttributes[this.numVecAttributes * 4 * i + 11] = swimmers[i].rightFoot.center.y;

        }
        // Write back to textureA
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.texture.id);
        this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, false);
        this.gl.texSubImage2D(this.gl.TEXTURE_2D, 0, 0, 0, this.numVecAttributes, this.maxNumSwimmer, this.gl.RGBA, this.gl.FLOAT, swimmersAttributes);
        this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, true);
    };
}

export { SwimmersAttributes };