/**
 * Utility Functions
 * CSV parsing, calibration updates, and other helper functions
 */

import { Vector3, Euler } from 'three';

export async function parseCsv(source) {
    try {
        const res = await fetch(source);
        const contentType = res.headers.get("content-type");
        if (!contentType || !contentType.includes("text/csv")) {
            console.log("no file found : " + source);
            return null;
        }
        const text = await res.text();

        if (!text) return null;

        const rows = text.split('\n');
        const headers = rows[0].split(/,|;/);
        const data = rows.slice(1).map(row => {
            const values = row.split(/,|;/);
            return Object.fromEntries(
                headers.map((h, i) => [h, values[i]])
            );
        });

        return data;
    } catch (error) {
        console.error("Error parsing CSV:", error);
        return null;
    }
}

export function updateCalibration(elapsedTime, ball_positions, calibrations, tracked_ball, cameraDebug, helper) {
    const calibration_fps = 25;
    const calibIndex = Math.floor(elapsedTime * calibration_fps);

    if (!ball_positions || !calibrations) return;

    const traj = ball_positions[calibIndex % 290];
    if (!traj) return;

    const z = parseFloat(traj["z\r"]);
    tracked_ball.position.set(traj["x"], z, traj["y"]);

    const calib = calibrations[calibIndex];
    if (!calib || calib["f"] == 0) return;

    const t = new Vector3(
        parseFloat(calib["tvec_y"]),
        parseFloat(calib["tvec_z"]) + 6,
        parseFloat(calib["tvec_x"])
    );
    const r = new Vector3(
        parseFloat(calib["rvec_y"]),
        parseFloat(calib["rvec_z"]),
        parseFloat(calib["rvec_x"])
    );

    // Uncomment below to enable camera calibration updates
    // cameraDebug.position.copy(t);
    // cameraDebug.setRotationFromEuler(new Euler(r.x, r.y, r.z, "ZXY"));
    // cameraDebug.fov = 2 * Math.atan(1280 / (2 * parseFloat(calib["f"]))) * 360 / (2 * Math.PI);
    // cameraDebug.updateProjectionMatrix();
    // cameraDebug.updateMatrixWorld();
    // helper.update();
}

export function loadCalibrationData() {
    return {
        calibration_fps: 25,
        calibrations: parseCsv("./assets/cam_cal_filtered.csv"),
        ball_positions: parseCsv("./assets/ball_traj_3D.csv")
    };
}
