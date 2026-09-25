import { AnimationMixer, Camera, Clock, Mesh, MeshStandardMaterial, Scene, SphereGeometry, Vector3, WebGLRenderer } from "three";
import { SelectorTypes, SportName, TrackingModes, webSocketClient } from "./constants";
import { Physics } from "./physics";
import { Video } from "./video";
import { OrbitControls } from "three/examples/jsm/Addons.js";

const uiWindowContent = document.getElementById("window-content");



export function configureButton({ buttonName = "button", callback = () => { } }) {
    const div = document.createElement("div");
    div.classList.add("control-group");
    const label = document.createElement("label");
    label.textContent = buttonName;
    div.appendChild(label);
    const button = document.createElement("button");
    button.innerHTML = buttonName;
    button.onclick = callback;
    div.appendChild(button);
    uiWindowContent.appendChild(div);
}
// export function configureSelector(selectorName, variableParent, variableName, variableEnum, callback) {
export function configureSelector({ selectorName = "selector", variableParent = config.params, variableName = "", variableEnum = {}, callback = () => { }, selectorType = SelectorTypes.CHECKBOX, min = 0, max = 100 }) {
    const div = document.createElement("div");
    div.classList.add("control-group");
    const label = document.createElement("label");
    label.textContent = selectorName;
    div.appendChild(label);
    let selector = null;
    switch (selectorType) {
        case SelectorTypes.SELECT:
            selector = document.createElement("select");
            Object.entries(variableEnum).forEach(([key, value]) => {
                const option = document.createElement("option");
                option.value = value;
                option.textContent = key;
                selector.appendChild(option);
            });
            selector.value = variableParent[variableName];
            break;
        case SelectorTypes.CHECKBOX:
            selector = document.createElement("input");
            selector.type = "checkbox";
            selector.checked = variableParent[variableName];
            break;
        case SelectorTypes.NUMBER:
            selector = document.createElement("input");
            selector.type = "number";
            break;
        default:
            break;
    }

    div.appendChild(selector);


    uiWindowContent.appendChild(div);

    selector.addEventListener("change", () => {
        switch (selectorType) {
            case SelectorTypes.SELECT:
            case SelectorTypes.NUMBER:
                variableParent[variableName] = selector.value;
                break;
            case SelectorTypes.CHECKBOX:
                variableParent[variableName] = selector.checked;
                break;
            default:
                break;
        }
        // console.log("CHANGE : " + variableParent[variableName].toString());
        callback(variableParent[variableName]);
    });

}



export function getShaderConstantsFromEnum(e) {
    let parametersstr = "";
    Object.entries(e).forEach(([key, value]) => {


        parametersstr += "#define " + key + " " + value + "\n";
    });
    return parametersstr;
}

export class Config {
    constructor() {
        this.sportClock = new Clock();
        this.clockAbsolute = new Clock();
        this.clockAbsolute.start();
        this.params = {
            showVideo: true,
            sport: SportName.TABLE_TENNIS,
            visualizations: {
                hawkEye: true
            }
        }
        this.paused = false;
        /**@type {AnimationMixer} */
        this.mixer = null;

        this.renderScore = false;

        this.trackingMode = TrackingModes.OFFLINE_WEBSOCKET;

        this.replayTimer = new Clock();
        // this.replayTimer.stop();

        configureSelector({
            selectorName: "Tracking Mode",
            variableParent: this,
            variableName: "trackingMode",
            variableEnum: TrackingModes,
            selectorType: SelectorTypes.SELECT

        });
        this.trackingIndex = 0;

        configureButton({
            buttonName: "Start Replay",
            callback: () => {
                if (!this.trackingMode === TrackingModes.OFFLINE_WEBSOCKET) {
                    console.warn("Not in websocket offline tracking mode");
                    return;
                }
                if (!webSocketClient.receivedOfflineData()) {
                    console.warn("No websocket data received to replay");
                    return;
                }
                console.log("STARTING REPLAY");
                this.replayTimer.start();
                this.isReplaying = true;
                this.trackingIndex = 0;
            }
        })
    }

    /**
     * 
     * @param {Vector3} position 
     */
    getNextTrackingPosition(position) {
        //TODO ajouter un nom d'acteur en argument plus tard
        const trackingData = webSocketClient.lastMessage.positions;
        const elapsed = this.replayTimer.getElapsedTime();
        while (trackingData[this.trackingIndex] && trackingData[this.trackingIndex].timestamp < elapsed) this.trackingIndex++;
        if (!trackingData[this.trackingIndex]) {
            this.replayTimer.stop();
            this.replayTimer.start();
            this.trackingIndex = 0;
            return;
        }
        // console.log("data: " + trackingData[this.trackingIndex]);
        const posData = trackingData[this.trackingIndex].position;
        position.set(posData.x, -posData.y + 0.013, posData.z)
        if (elapsed <= .01) return;
        // console.log("OFFLINE TRACKED POSITION : " + JSON.stringify(position));
        // console.log("TIME : " + elapsed + "\n\n");

    }

    getTimeAbsolute() {
        return this.clockAbsolute.getElapsedTime();
    }

    /**
     * 
     * @param {Scene} scene 
     * @param {Camera} camera 
     * @param {WebGLRenderer} renderer 
     * @param {Video} video 
     * @param {Physics} physics 
     * @param {OrbitControls} controls 
     */
    init(scene, camera, renderer, video, physics, controls) {
        this.scene = scene;
        this.camera = camera;
        this.renderer = renderer;
        this.videoObject = video;
        this.physics = physics;
        this.controls = controls;
    }


}


export const config = new Config();
