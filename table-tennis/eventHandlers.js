/**
 * Event Handlers
 * Manages keyboard input, window resize, and other events
 */

import { config } from './config';

export function setupEventHandlers(camera, renderer, video) {
    // Keyboard event handler
    const onkeydown = async function (e) {
        if (e.which === ' '.charCodeAt(0)) {
            config.paused = !config.paused;
            if (config.paused) {
                config.sportClock.stop();
                if (video.useMock) {
                    video.webcamVideo.pause();
                }
            } else {
                config.sportClock.start();
                if (video.useMock) {
                    video.webcamVideo.play();
                }
            }
            console.log("PAUSING:", config.paused);
        }
    };

    window.addEventListener("keydown", onkeydown);

    // Window resize handler
    const onWindowResize = function () {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', onWindowResize, false);

    return {
        onkeydown,
        onWindowResize
    };
}
