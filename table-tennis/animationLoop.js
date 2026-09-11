/**
 * Animation Loop
 * Main render loop and update logic
 */

import { config } from "./config";
import { ObjectSelector } from "./editor";
import { referentMover } from "./manipulation";
import { referentScoring } from "./referent-selection";
import { sport } from "./sport";

/**
 * 
 * @param {*} renderer 
 * @param {*} composer 
 * @param {*} physics 
 * @param {*} players 
 * @param {*} cvHelper 
 * @param {*} ballEffects 
 * @param {*} tableEffects 
 * @param {*} cameraDebug 
 * @param {*} helper 
 * @param {*} interactableMeshes 
 * @param {ObjectSelector} objectSelector 
 * @param {*} updateCalibrationFn 
 */
export function startAnimationLoop(renderer, composer, physics, players, cvHelper, cameraDebug, helper, updateCalibrationFn) {
    const animation = () => {
        renderer.setAnimationLoop(animation);

        let delta = config.clockAbsolute.getDelta();
        if (delta >= 1 / 24) {
            console.warn("LOW UPDATE FREQUENCY : " + 1 / delta);
            delta = 1 / 24;
        }
        const elapsed = config.getTimeAbsolute();

        // if (objectSelector) objectSelector.updateSelectionPannel();

        // Update calibration if data is available
        if (updateCalibrationFn) {
            updateCalibrationFn(elapsed);
        }

        sport.update(elapsed, delta);

        // Update game systems
        players.detectFrame();
        cvHelper.processFrame();

        // Update debug camera
        cameraDebug.updateProjectionMatrix();
        cameraDebug.updateMatrixWorld();
        helper.update();

        // Physics update
        physics.stepSimulation(delta);

        referentMover.update();

        // Effects update
        // ballEffects.update(delta);
        // tableEffects.update(elapsed, delta);


        if (config.mixer) config.mixer.update(delta);
        referentScoring.update();
        // Render
        if (!config.renderScore) composer.render();
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
