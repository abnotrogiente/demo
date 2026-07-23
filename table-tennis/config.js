import { AnimationMixer, Camera, Mesh, MeshStandardMaterial, Scene, SphereGeometry, Vector3, WebGLRenderer } from "three";
import { SelectorTypes, SportName } from "./constants";
import { Physics } from "./physics";
import { Video } from "./video";

const uiWindowContent = document.getElementById("window-content");



// export function configureSelector(selectorName, variableParent, variableName, variableEnum, callback) {
export function configureSelector({ selectorName = "selector", variableParent = config.params, variableName = "", variableEnum = {}, callback = () => { }, selectorType = SelectorTypes.CHECKBOX }) {
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
        default:
            break;
    }

    div.appendChild(selector);


    uiWindowContent.appendChild(div);

    selector.addEventListener("change", () => {
        switch (selectorType) {
            case SelectorTypes.SELECT:
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
    }

    /**
     * 
     * @param {Scene} scene 
     * @param {Camera} camera 
     * @param {WebGLRenderer} renderer 
     * @param {Video} video 
     * @param {Physics} physics 
     */
    init(scene, camera, renderer, video, physics) {
        this.scene = scene;
        this.camera = camera;
        this.renderer = renderer;
        this.videoObject = video;
        this.physics = physics;
    }


}


export const config = new Config();
