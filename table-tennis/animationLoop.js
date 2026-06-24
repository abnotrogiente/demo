/**
 * Animation Loop
 * Main render loop and update logic
 */

export function startAnimationLoop(renderer, composer, physics, players, cvHelper, ballEffects, tableEffects, cameraDebug, helper, updateCalibrationFn) {
    const animation = () => {
        renderer.setAnimationLoop(animation);

        const delta = renderer.getContext().getParameter(renderer.getContext().TIME_ELAPSED) || 0.016;
        const elapsed = performance.now() / 1000;

        // Update calibration if data is available
        if (updateCalibrationFn) {
            updateCalibrationFn(elapsed);
        }

        // Update game systems
        players.detectFrame();
        cvHelper.processFrame();

        // Update debug camera
        cameraDebug.updateProjectionMatrix();
        cameraDebug.updateMatrixWorld();
        helper.update();

        // Physics update
        physics.stepSimulation(delta);

        // Effects update
        ballEffects.update(delta);
        tableEffects.update(elapsed, delta);

        // Render
        composer.render();
    };

    animation();
}

export function createUpdateCalibrationCallback(ball_positions, calibrations, tracked_ball, cameraDebug, helper) {
    return function (elapsedTime) {
        const calibration_fps = 25;
        const calibIndex = Math.floor(elapsedTime * calibration_fps);

        if (!ball_positions || !calibrations) return;

        const traj = ball_positions[calibIndex % 290];
        if (!traj) return;

        const z = parseFloat(traj["z\r"]);
        tracked_ball.position.set(traj["x"], z, traj["y"]);

        const calib = calibrations[calibIndex];
        if (!calib || calib["f"] == 0) return;

        // Calibration update logic (currently disabled)
        // Uncomment to enable camera position tracking
    };
}
