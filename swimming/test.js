import { Video } from "./video";
import GL from "./lightgl";

const gl = GL.create();
document.body.appendChild(gl.canvas);
const video = new Video("./assets/video.mp4", gl);

const draw = function (now) {
    video.render(now);
    requestAnimationFrame(draw);
}

requestAnimationFrame(draw);