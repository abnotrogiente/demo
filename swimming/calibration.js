class Calibration {
    constructor({ tx = 0, ty = 0, zoom = 10, ax = 0, ay = 0, az = 0, fov = 45 }) {
        this.tx = tx;
        this.ty = ty;
        this.zoom = zoom;
        this.ax = ax;
        this.ay = ay;
        this.az = az;
        this.fov = fov;
    }

}

export { Calibration };