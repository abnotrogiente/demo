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
    constructor(center) {
        this.startingPoint = new GL.Vector(center.x, center.y, center.z);
        this.center = new GL.Vector(center.x, center.y, center.z);
        this.force = new GL.Vector(0, 0, 190 + gaussianRandom(0, 20));

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

export { Swimmer };