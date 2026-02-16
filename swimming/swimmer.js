import GL from "./lightgl";
import { Sphere } from "./sphere";

function gaussianRandom(mean = 0, stdev = 1) {
    const u = 1 - Math.random(); // Converting [0,1) to (0,1]
    const v = Math.random();
    const z = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
    // Transform to the desired mean and standard deviation:
    return z * stdev + mean;
}

const AWAY = new GL.Vector(1000, 0, 0);
const armAmplitude = 0.5;
const armFrequency = 1;
const armPulsation = 2 * Math.PI * armFrequency;


class Swimmer {
    static useGravity = false;
    static swimming = false;
    static showFlags = true;
    static numAttributes = 5;
    static numVecAttributes = Math.ceil(Swimmer.numAttributes / 4);
    static maxNumSwimmer = 10;
    static swimmersAttributesTexture = null;
    /**@type {GL.Mesh.plane} */
    static plane = null;
    /**@type {GL.Shader} */
    static attributeShader = null;
    /**
     * 
     * @param {WebGLRenderingContext} gl 
     */
    static initSwimmersAttributesTexture = (gl) => {
        const filter = gl.NEAREST;
        Swimmer.plane = GL.Mesh.plane();
        Swimmer.swimmersAttributesTexture = new GL.Texture(Swimmer.maxNumSwimmer, Swimmer.numVecAttributes, { type: gl.FLOAT, filter: filter });
    }

    /**
     * 
     * @param {WebGLRenderingContext} gl 
     * @param {Swimmer[]} swimmers
     */
    static updateAttributesTexture = (gl, swimmers) => {
        const swimmersAttributes = new Float32Array(Swimmer.numVecAttributes * 4 * Swimmer.maxNumSwimmer);
        for (let i = 0; i < swimmers.length; i++) {
            swimmersAttributes[4 * i] = swimmers[i].body.center.x;
            swimmersAttributes[4 * i + 1] = swimmers[i].body.center.z;
            swimmersAttributes[4 * i + 2] = swimmers[i].divingDistance;
            swimmersAttributes[4 * i + 3] = swimmers[i].divingTime;

            //Second row of attributes
            swimmersAttributes[Swimmer.maxNumSwimmer * 4 + 4 * i] = swimmers[i].reactionTime;
        }
        // Write back to textureA
        gl.bindTexture(gl.TEXTURE_2D, Swimmer.swimmersAttributesTexture.id);
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
        gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, Swimmer.maxNumSwimmer, Swimmer.numVecAttributes, gl.RGBA, gl.FLOAT, swimmersAttributes);
    };

    constructor(center) {
        this.startingPoint = new GL.Vector(center.x, center.y, center.z);
        this.center = new GL.Vector(center.x, center.y, center.z);
        this.force = new GL.Vector(0, 0, 190 + gaussianRandom(0, 20));

        this.reactionTime = Math.max(0.1, gaussianRandom(0.15, 0.02));

        const radius = .25;
        const armRadius = .15;

        this.body = new Sphere(center, radius);
        this.leftArm = new Sphere(AWAY, armRadius);
        this.rightArm = new Sphere(AWAY, armRadius);
        this.leftFoot = new Sphere(AWAY, armRadius);
        this.rightFoot = new Sphere(AWAY, armRadius);

        this.body.cinematic = !Swimmer.useGravity;
        this.leftArm.cinematic = true;
        this.rightArm.cinematic = true;
        this.leftFoot.cinematic = true;
        this.rightFoot.cinematic = true;

        /**@type {Sphere[]} */
        this.spheres = [this.body, this.leftArm, this.rightArm, this.leftFoot, this.rightFoot];

        this.divingDistance = 0;
        this.divingTime = 1000;
    }

    jump(poolSize) {
        this.body.cinematic = false;
        this.body.velocity = new GL.Vector(0, 0, 4.5 + gaussianRandom(0, 1));
        this.body.center = new GL.Vector(this.startingPoint.x, 1, -poolSize.z / 2.);
    }

    getArmOffset(time, phase) {
        return new GL.Vector(0., Math.cos(armPulsation * time + phase), Math.sin(armPulsation * time + phase)).multiply(armAmplitude);
    }

    update(dt, time, poolSize) {

        if (Swimmer.swimming) {
            this.body.addForce(this.force);
            const offset1 = this.getArmOffset(time, 0);
            const offset2 = this.getArmOffset(time, Math.PI);
            const offset3 = this.getArmOffset(time * 2, 0);
            const offset4 = this.getArmOffset(time * 2, Math.PI);
            this.rightArm.move(this.body.center.add(offset1).add(new GL.Vector(.3, 0, 0)));
            this.leftArm.move(this.body.center.add(offset2).add(new GL.Vector(-.3, 0, 0)));
            this.rightFoot.move(this.body.center.add(new GL.Vector(.15, offset3.y * 0.5, -1)));
            this.leftFoot.move(this.body.center.add(new GL.Vector(-.15, offset4.y * 0.5, -1)));
        }
        else {
            this.rightArm.move(AWAY);
            this.leftArm.move(AWAY);
            this.rightFoot.move(AWAY);
            this.leftFoot.move(AWAY);
        }

        for (let sphere of this.spheres) sphere.update(dt, poolSize);

        if (!this.hasDove && this.body.center.y <= 0 && this.body.oldCenter.y >= 0) {
            this.divingDistance = this.body.center.z + poolSize.z / 2;
            this.divingTime = time;
            this.hasDove = true;
            console.log("dived : " + this.divingDistance);
        }
    }
}

const swimmersHelperFunctions = `
    uniform float wr;
    #define sqrt_2_PI 2.50662827
    #define PI 3.1415926536
    uniform sampler2D swimmersAttributesTexture;
    const int SWIMMERS_NUM_ATTRIBUTES = 4;
    const vec2 TEXTURE_SIZE = vec2(`+ Swimmer.maxNumSwimmer + `, ` + Swimmer.numVecAttributes + `);
    uniform float swimmersNumber;
    uniform float time;

    vec2 getAttributePosition(int i) {
        float i_float = float(i);
        vec2 pixel = vec2(i_float, 0.);
        vec4 attributes = texture2D(swimmersAttributesTexture, (pixel + .5) / TEXTURE_SIZE);
        return attributes.rg;
    }

    vec2 getAttributeDiving(int i) {
        float i_float = float(i);
        vec2 pixel = vec2(i_float, 0.);
        vec4 attributes = texture2D(swimmersAttributesTexture, (pixel + .5) / TEXTURE_SIZE);
        return attributes.ba;
    }

    float getAttributeReactionTime(int i ) {
        float i_float = float(i);
        vec2 pixel = vec2(i_float, 1.);
        vec4 attributes = texture2D(swimmersAttributesTexture, (pixel + .5) / TEXTURE_SIZE);
        return attributes.r;
    }

    float gaussian(float x, float mean, float std) {
        return exp(-(x - mean) * (x - mean) / (2. * std * std)) / (std * sqrt_2_PI);
    }

    float getRecordWave(vec2 coord) {
        float z = poolSize.z * coord.y;
        if (true || abs(z - wr) < 1.) {
            return .2 * gaussian(z, wr, .4);
        }
        return 0.;
    }

    vec3 getDivingWaves(vec2 coord) {
        vec3 res = vec3(0., 0., -1.);
        
        for (int i = 0; i < 10; i++) {
            float i_float = float(i);
            if (i_float > swimmersNumber - 0.1) break;
            vec2 swimmerPos = getAttributePosition(i);
            float swimmer_x = swimmerPos.x;
            float swimmer_z = swimmerPos.y;
            vec2 swimmerDiving = getAttributeDiving(i);
            float divingDistance = swimmerDiving.x;
            float divingTime = swimmerDiving.y;

            float timeSinceDiving = time - divingTime;
            const float rippleSpeed = .5;
            const float maxTime = 10.;
            const float lambda = 2. * PI / 0.6;
            float frequency = 2.;
            float omega = 2. * PI * frequency;
            vec2 center = vec2(swimmer_x, divingDistance - poolSize.z / 2.);
            vec2 pos = (coord - .5) * poolSize.xz;
            vec2 diff = pos - center;
            float d = sqrt(dot(diff, diff));
            d*=2.;
            
            float r_max_max = 0.5;
            float divingDistRange = 2.;
            float divingDistMin = 2.;
            float intensity = (divingDistance - divingDistMin) / divingDistRange;
            float r_max = max(0.3, intensity * r_max_max);
            float attenuationDist = r_max;
            
            float duration = 1.5;
            float c =  cos(lambda * d - omega * timeSinceDiving);
            float attenuation = exp(-d / attenuationDist - timeSinceDiving / duration);
            bool condition = timeSinceDiving > d / frequency;
            if (condition) res.x += .05 * attenuation * c;
            if (c > 0.8 && condition) {
                res.y = max(res.y, min(1., 15.*attenuation));
                res.z = 1.;
            }
        }
        return res;
    }
`
export { swimmersHelperFunctions };
export { Swimmer };