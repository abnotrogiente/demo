/**
 * Utility Functions
 * CSV parsing, calibration updates, and other helper functions
 */

import { Vector3, Euler, Mesh } from 'three';

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

export function topK(arr, k, { delta = 4, offset }) {
    const values = new Float32Array(k);
    const indices = new Int32Array(k);
    let size = 0;

    const siftUp = (i) => {
        const value = values[i];
        const index = indices[i];

        while (i > 0) {
            const parent = (i - 1) >> 1;
            if (values[parent] <= value) break;

            values[i] = values[parent];
            indices[i] = indices[parent];
            i = parent;
        }

        values[i] = value;
        indices[i] = index;
    };

    const siftDown = (i) => {
        const value = values[i];
        const index = indices[i];

        while (true) {
            let child = i * 2 + 1;
            if (child >= size) break;

            if (child + 1 < size && values[child + 1] < values[child]) {
                child++;
            }

            if (values[child] >= value) break;

            values[i] = values[child];
            indices[i] = indices[child];
            i = child;
        }

        values[i] = value;
        indices[i] = index;
    };

    for (let i = offset; i < arr.length; i += delta) {
        const x = arr[i];

        if (size < k) {
            values[size] = x;
            indices[size] = i;
            size++;
            siftUp(size - 1);
        } else if (x > values[0]) {
            values[0] = x;
            indices[0] = Math.round((i - offset) / delta);
            siftDown(0);
        }
    }

    return { values, indices };
}

const maxScoreAggregation = 1000;
class ScoreResult {
    constructor() {
        this.numScoresUsed = 0;
        this.totalScore = 0;
    }

    add(score) {
        if (this.numScoresUsed >= maxScoreAggregation) return;
        this.totalScore += score;
        this.numScoresUsed++;

    }
}

export function getMeshesScoresById(arr, { delta = 4, offsetScore = 0, offsetId = 1 }) {

    /**@type {Map<int, ScoreResult>} */
    const scoresMap = new Map();

    for (let i = 0; i < arr.length; i += delta) {
        const id = arr[i + offsetId];
        if (!Number.isInteger(id)) continue;
        const score = arr[i + offsetScore];
        if (!scoresMap.has(id)) {
            scoresMap.set(id, new ScoreResult());
        }
        scoresMap.get(id).add(score);
    }
    const sortedScoresMap = new Map([...scoresMap].sort((a, b) => {
        return b[1].totalScore - a[1].totalScore
    }));
    // sortedScoresMap.forEach((val, key) => {
    //     console.log("VAL : " + val.totalScore);
    // });
    return sortedScoresMap;


}

export function minCostAssignment(cost) {
    const rows = cost.length;
    const cols = cost[0]?.length ?? 0;

    if (rows === 0 || cols === 0) {
        return Array(rows).fill(-1);
    }

    // The Hungarian algorithm requires rows <= columns.
    const transposed = rows > cols;

    const matrix = transposed
        ? Array.from({ length: cols }, (_, i) =>
            Array.from({ length: rows }, (_, j) => cost[j][i])
        )
        : cost;

    const n = matrix.length;
    const m = matrix[0].length;

    const u = Array(n + 1).fill(0);
    const v = Array(m + 1).fill(0);
    const p = Array(m + 1).fill(0);
    const way = Array(m + 1).fill(0);

    for (let i = 1; i <= n; i++) {
        p[0] = i;

        let j0 = 0;
        const minv = Array(m + 1).fill(Infinity);
        const used = Array(m + 1).fill(false);

        do {
            used[j0] = true;

            const i0 = p[j0];
            let delta = Infinity;
            let j1 = 0;

            for (let j = 1; j <= m; j++) {
                if (used[j]) continue;

                const cur =
                    matrix[i0 - 1][j - 1] -
                    u[i0] -
                    v[j];

                if (cur < minv[j]) {
                    minv[j] = cur;
                    way[j] = j0;
                }

                if (minv[j] < delta) {
                    delta = minv[j];
                    j1 = j;
                }
            }

            for (let j = 0; j <= m; j++) {
                if (used[j]) {
                    u[p[j]] += delta;
                    v[j] -= delta;
                } else {
                    minv[j] -= delta;
                }
            }

            j0 = j1;
        } while (p[j0] !== 0);

        do {
            const j1 = way[j0];
            p[j0] = p[j1];
            j0 = j1;
        } while (j0 !== 0);
    }

    // Maps each row to its assigned column.
    const rowToCol = Array(n).fill(-1);

    for (let j = 1; j <= m; j++) {
        if (p[j] !== 0) {
            rowToCol[p[j] - 1] = j - 1;
        }
    }

    if (!transposed) return rowToCol;

    // Convert back to player -> detection assignments.
    const assignment = Array(rows).fill(-1);

    for (let detectionIndex = 0; detectionIndex < rowToCol.length; detectionIndex++) {
        const playerIndex = rowToCol[detectionIndex];

        if (playerIndex !== -1) {
            assignment[playerIndex] = detectionIndex;
        }
    }

    return assignment;
}
