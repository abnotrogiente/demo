import { CV_Helper } from "./cv2";
import { Players } from "./players";
import { Video } from "./video";

/**
 * 
 * @param {Players} players 
 * @param {Video} video 
 * @param {CV_Helper} cvHelper 
 */
export function initUI(video, players, cvHelper) {
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
    numPoseSelect.value = players.numPose === 1 ? "Single" : "Mulit";
    numPoseSelect.addEventListener("change", () => {
        const value = numPoseSelect.value;
        const numPose = value === "Single" ? 1 : 2;
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
        await cvHelper.init(video.webcamVideo);
    });

    const trackingSelect = document.getElementById("tracking-select");
    trackingSelect.value = cvHelper.trackingEnabled ? "Simple Orange" : "Disabled";
    trackingSelect.addEventListener("change", () => {
        const value = trackingSelect.value;
        cvHelper.trackingEnabled = value === "Simple Orange";
        if (!cvHelper.trackingEnabled) cvHelper.clearCanvas();
    });

    const showVideoCheckbox = document.getElementById("show-video-checkbox");
    showVideoCheckbox.addEventListener("change", () => {
        console.log("show video : " + showVideoCheckbox.checked);
        cvHelper.showVideo = showVideoCheckbox.checked;
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
}