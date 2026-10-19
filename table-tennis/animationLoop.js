/**
 * Animation Loop
 * Main render loop and update logic
 */

import { Euler, Vector3 } from "three";
import { config } from "./config";
import { ObjectSelector } from "./editor";
import { referentMover } from "./manipulation";
import { referentScoring } from "./referent-selection";
// import { testRetargeter } from "./retarget";
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
            // console.warn("LOW UPDATE FREQUENCY : " + 1 / delta);
            delta = 1 / 24;
        }
        const elapsed = config.getTimeAbsolute();

        // if (objectSelector) objectSelector.updateSelectionPannel();

        // Update calibration if data is available
        if (updateCalibrationFn) {
            updateCalibrationFn(config.videoObject.webcamVideo.currentTime % config.videoObject.duration);
        }

        sport.update(elapsed, delta);

        // Update game systems
        players.detectFrame(delta);
        cvHelper.processFrame();

        // Update debug camera
        cameraDebug.updateProjectionMatrix();
        cameraDebug.updateMatrixWorld();
        helper.update();

        // Physics update
        physics.stepSimulation(delta);

        referentMover.update();
        // retargeter.update(delta);
        // testRetargeter.update(delta);

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

export function createUpdateCalibrationCallback(calibrations, cameraDebug, helper) {
    return function (elapsedTime) {
        const calibration_fps = 25;
        const calibIndex = Math.floor(elapsedTime * calibration_fps);

        if (!calibrations) return;

        const calib = calibrations[calibIndex];
        if (!calib || calib["f"] == 0) return;
        // const t = new Vector3(parseFloat(calib["tvec_y"]), parseFloat(calib["tvec_z"]) + 6, parseFloat(calib["tvec_x"]));
        // const r = new Vector3(parseFloat(calib["rvec_y"]), parseFloat(calib["rvec_z"]), parseFloat(calib["rvec_x"]));
        const t = new Vector3(parseFloat(calib["tvec_x"]), parseFloat(calib["tvec_z"]), parseFloat(calib["tvec_y"]));
        const r = new Vector3(parseFloat(calib["rvec_x"]), parseFloat(calib["rvec_z"]), parseFloat(calib["rvec_y"]));

        console.log("ERROR : " + calib["error"]);
        // cameraDebug.position.copy(t);
        // cameraDebug.setRotationFromEuler(new Euler(r.x, r.y, r.z));

        // cameraDebug.setFocalLength(parseFloat(calib["f"]) / 100);

        ////////////////////////////////////////////:
        cameraDebug.position.copy(t);
        cameraDebug.setRotationFromEuler(new Euler(r.x, r.y, r.z, "ZXY"));
        cameraDebug.fov = 2 * Math.atan(1280 / (2 * parseFloat(calib["f"]))) * 360 / (2 * Math.PI);
        cameraDebug.updateProjectionMatrix();
        cameraDebug.updateMatrixWorld();
        cameraDebug.updateProjectionMatrix();
        helper.update();

        // Calibration update logic (currently disabled)
        // Uncomment to enable camera position tracking
    };
}
