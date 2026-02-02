import GL from './lightgl.js';

const GRAVITY = new GL.Vector(0, -4, 0);

class Sphere {
    /**
     * 
     * @param {GL.Vector} center 
     * @param {float} radius 
     */
    constructor(center, radius) {
        console.log("center : " + center.x + " , " + center.y + " , " + center.z);
        this.center = new GL.Vector(center.x, center.y, center.z);
        this.oldCenter = new GL.Vector(center.x, center.y, center.z);
        this.radius = radius;
        this.cinematic = false;
        this.velocity = new GL.Vector(0, 0, 0);
        this.acceleration = new GL.Vector(0, 0, 0);
        this.mass = (4 / 3) * Math.PI * Math.pow(radius, 3) * 1000;
        this.invMass = 1 / this.mass;
        this.radiusSquared = radius * radius;
        this.mesh = GL.Mesh.sphere({ detail: 10 });
    }

    /**
     * 
     * @param {float} dt 
     * @param {GL.Vector} poolSize 
     * @param {boolean} isSwimming 
     */
    update(dt, poolSize) {
        if (!this.cinematic) {
            this.oldCenter = new GL.Vector(this.center.x, this.center.y, this.center.z);
            const percentUnderWater = Math.max(0, Math.min(1, (this.radius - this.center.y) / (2 * this.radius)));
            const floatingForce = GRAVITY.multiply(-1.35 * this.mass * percentUnderWater); // 1.1 before // then 1.35
            const drag = this.velocity.unit().multiply(-1000 * this.radiusSquared * percentUnderWater * this.velocity.dot(this.velocity)); // 1000 before
            this.addForce(drag);
            this.addForce(floatingForce);
            this.addForce(GRAVITY.multiply(this.mass));
            this.velocity = this.velocity.add(this.acceleration.multiply(dt));
            this.acceleration = new GL.Vector(0, 0, 0);
            this.center = this.center.add(this.velocity.multiply(dt));

            // Bounce off the bottom
            if (this.center.y < this.radius - poolSize.y) {
                this.center.y = this.radius - 1;
                this.velocity.y = Math.abs(this.velocity.y) * 0.7;
            }
        }
        else this.velocity = new GL.Vector(0, 0, 0);
    }

    /**
     * 
     * @param {GL.Vector} force 
     */
    addForce(force) {
        if (!this.cinematic) {
            this.acceleration = this.acceleration.add(force.multiply(this.invMass));
        }
        else console.warn("Trying to add force to a cinematic sphere.");
    }

    /**
     * 
     * @param {GL.Vector} newCenter 
     */
    move(newCenter) {
        this.oldCenter = new GL.Vector(this.center.x, this.center.y, this.center.z);
        this.center = new GL.Vector(newCenter.x, newCenter.y, newCenter.z);
        if (!this.cinematic) console.warn("Moving a non cinematic sphere.");
    }
}

export { Sphere };