import { Vector3 } from "three";
import { sportSpecificAssets, tableDimensions } from "./constants";
import { CV_Helper, TRACKING_DISABLED, TRACKING_FROM_FILE, TRACKING_ORANGE } from "./cv2";
import { Physics } from "./physics";
import { Players } from "./players";
import { Video } from "./video";
import { config } from "./config";

/**
 * 
 * @param {Players} players 
 * @param {Video} video 
 * @param {CV_Helper} cvHelper 
 * @param {Physics} physics 
 */
export function initUI(video, players, cvHelper, physics) {
    const windowEl = document.getElementById("uiWindow");
    const resizeHandle = document.getElementById("resizeHandle");
    const minimizeBtn = document.getElementById("minimizeBtn");

    let isResizing = false;
    let startY = 0;
    let startHeight = 0;

    // Vertical resize from TOP
    resizeHandle.addEventListener("mousedown", (e) => {
        if (windowEl.classList.contains("minimized")) return;

        isResizing = true;
        startY = e.clientY;
        startHeight = windowEl.offsetHeight;

        document.body.style.cursor = "ns-resize";
    });

    document.addEventListener("mousemove", (e) => {
        if (!isResizing) return;

        const delta = e.clientY - startY;
        const newHeight = startHeight - delta;

        if (newHeight >= 120) {
            windowEl.style.height = newHeight + "px";
        }
    });

    document.addEventListener("mouseup", () => {
        isResizing = false;
        document.body.style.cursor = "default";
    });

    // Minimize toggle
    minimizeBtn.addEventListener("click", () => {
        windowEl.classList.toggle("minimized");
    });

    const numPoseSelect = document.getElementById("num-pose-select");
    numPoseSelect.value = players.numPose === 1 ? "Single" : "Multi";
    numPoseSelect.addEventListener("change", () => {
        const value = numPoseSelect.value;
        const numPose = value === "None" ? 0 : value === "Single" ? 1 : 2;
        console.log("setting num pose to : " + numPose);
        players.setNumPoseDetected(numPose);
    });

    const videoSelect = document.getElementById("video-select");
    videoSelect.value = video.useMock ? "Video" : "WebCam";
    videoSelect.addEventListener("change", async () => {
        const value = videoSelect.value;
        const useMock = value === "Video";
        await video.init(useMock);
        players.setVideo(video);
        await cvHelper.init(video);
    });

    const trackingSelect = document.getElementById("tracking-select");
    trackingSelect.value = cvHelper.trackingMode == TRACKING_DISABLED ? "Disabled" :
        cvHelper.trackingMode == TRACKING_ORANGE ? "Simple Orange" :
            trackingSelect.options[2].text;
    trackingSelect.addEventListener("change", () => {
        const value = trackingSelect.value;
        console.log("VALUE : " + value);
        cvHelper.trackingMode = value === "Disabled" ? TRACKING_DISABLED :
            value === "Simple Orange" ? TRACKING_ORANGE :
                TRACKING_FROM_FILE;
        if (!cvHelper.trackingMode != TRACKING_ORANGE) cvHelper.clearCanvas();
    });

    const showVideoCheckbox = document.getElementById("show-video-checkbox");
    showVideoCheckbox.addEventListener("change", () => {
        console.log("show video : " + showVideoCheckbox.checked);
        config.params.showVideo = showVideoCheckbox.checked;
        if (!cvHelper.showVideo) cvHelper.clearCanvas();
    });

    const calibrationButton = document.getElementById("calibration-button");
    calibrationButton.addEventListener("click", () => {
        cvHelper.calibrate();
    });

    const calibrationSelect = document.getElementById("calibration-select");
    calibrationSelect.value = cvHelper.calibrationOnRepeat ? "On repeat" : "On demand";
    calibrationSelect.addEventListener("change", () => {
        const onRepeat = calibrationSelect.value === "On repeat";
        cvHelper.calibrationOnRepeat = onRepeat;
        calibrationButton.hidden = onRepeat;
    });

    // const sportSelect = document.getElementById("sport-select");
    // sportSelect.addEventListener("change", () => {
    //     sportSpecificAssets.forEach((asset) => physics.deleteBody(asset));
    //     sportSpecificAssets.splice(0, sportSpecificAssets.length);
    //     switch (sportSelect.value) {
    //         case "Boxing":
    //             const ring = physics.createBox({
    //                 position: new Vector3(0, 0, 0),
    //                 // rotation: new Quaternion(0., 0., .02, 1.),
    //                 dimensions: new Vector3(tableDimensions.depth, tableDimensions.height, tableDimensions.width),
    //                 color: 0x0030FF,
    //                 restitution: .9, // allows bounce
    //                 friction: .6,     // higher friction (grip)
    //                 model: "boxing_ring.glb",
    //                 modelOffset: new Vector3(0, -1.5, 0)
    //             });
    //             sportSpecificAssets.push(ring);
    //             break;
    //         case "Table Tennis":
    //             const table = physics.createBox({
    //                 position: new Vector3(0, 0, 0),
    //                 // rotation: new Quaternion(0., 0., .02, 1.),
    //                 dimensions: new Vector3(tableDimensions.depth, tableDimensions.height, tableDimensions.width),
    //                 color: 0x0030FF,
    //                 restitution: .9, // allows bounce
    //                 friction: .6,     // higher friction (grip)
    //                 model: "ping_pong_table.glb",
    //                 modelOffset: new Vector3(0, -tableDimensions.altitude + tableDimensions.height + .015, 0)
    //             });

    //             sportSpecificAssets.push(table);
    //             break;
    //     }
    // })
}