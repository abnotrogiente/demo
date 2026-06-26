"use strict";

import { Clock } from 'three';
import { Physics } from './physics';
import { config } from './config';

// Import modular components
import { initializeScene } from './sceneSetup.js';
import { createEntities } from './entities.js';
import { initializeSystems } from './initialization.js';
import { parseCsv, updateCalibration } from './utils.js';
import { setupEventHandlers } from './eventHandlers.js';
import { startAnimationLoop, createUpdateCalibrationCallback } from './animationLoop.js';


async function main() {
    // Initialize Scene and Renderer
    const {
        scene,
        camera,
        cameraDebug,
        helper,
        renderer,
        composer,
        controls
    } = await initializeScene();

    // Initialize Physics Engine
    const physics = new Physics(scene);
    await physics.init();
    config.configureSelectors(physics);

    // Create Game Entities
    const {
        table,
        room,
        ball,
        tracked_ball,
        tableEffects,
        ballEffects,
        objectSelector
    } = await createEntities(scene, camera, physics, renderer, composer);

    // Initialize Game Systems (pass tracked_ball to CV_Helper)
    const {
        video,
        players,
        cvHelper,
        surfaceScore
    } = await initializeSystems(scene, renderer, camera, physics, cameraDebug, tracked_ball);

    config.init(scene, renderer, video);


    // Load calibration data
    // const calibrations = await parseCsv("./assets/cam_cal_filtered.csv");
    // const ball_positions = await parseCsv("./assets/ball_traj_3D.csv");

    // Setup event handlers
    const clock = new Clock();
    setupEventHandlers(camera, renderer, video, clock);

    // Create calibration update callback
    // const updateCalibrationFn = createUpdateCalibrationCallback(
    //     ball_positions,
    //     calibrations,
    //     tracked_ball,
    //     cameraDebug,
    //     helper
    // );

    // Start animation loop
    startAnimationLoop(
        renderer,
        composer,
        physics,
        players,
        cvHelper,
        ballEffects,
        tableEffects,
        cameraDebug,
        helper,
        objectSelector,
        // updateCalibrationFn
    );
}

// Run the application
main().catch(error => console.error("Failed to initialize application:", error));