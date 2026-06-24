/**
 * Game Systems Initialization
 * Initializes video, players, computer vision, UI, and other systems
 */

import { Players } from './players';
import { Video } from './video';
import { CV_Helper } from './cv2';
import { initUI } from './uiWindow';
import { SurfaceScore } from './surfaceScore';
import { config } from './config';

export async function initializeSystems(scene, renderer, camera, physics, cameraDebug, tracked_ball) {
    // Initialize Video
    const video = new Video();
    await video.init(true);

    // Initialize Players
    const players = new Players(video, scene);
    console.log("before players init");
    await players.init(scene);
    console.log("after players init");

    // Initialize Computer Vision Helper
    const cvHelper = new CV_Helper();
    console.log("before cv init");
    await cvHelper.init(video, tracked_ball);
    scene.add(cvHelper.rayHelper);
    console.log("after cv init");
    cvHelper.camera = cameraDebug;

    // Initialize UI
    initUI(video, players, cvHelper, physics);

    // Initialize Surface Score
    const surfaceScore = new SurfaceScore(scene, renderer, camera);

    return {
        video,
        players,
        cvHelper,
        surfaceScore
    };
}
