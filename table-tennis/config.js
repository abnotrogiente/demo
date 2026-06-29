import { Camera, Mesh, MeshStandardMaterial, Scene, SphereGeometry, Vector3, WebGLRenderer } from "three";
import { Selector, SportName } from "./constants";
import { Physics } from "./physics";
import { Video } from "./video";

const uiWindowContent = document.getElementById("window-content");



// export function configureSelector(selectorName, variableParent, variableName, variableEnum, callback) {
export function configureSelector({ selectorName = "selector", variableParent = config.params, variableName = "", variableEnum = {}, callback = () => { }, selectorType = Selector.CHECKBOX }) {
    const div = document.createElement("div");
    div.classList.add("control-group");
    const label = document.createElement("label");
    label.textContent = selectorName;
    div.appendChild(label);
    let selector = null;
    switch (selectorType) {
        case Selector.SELECT:
            selector = document.createElement("select");
            Object.entries(variableEnum).forEach(([key, value]) => {
                const option = document.createElement("option");
                option.value = value;
                option.textContent = key;
                selector.appendChild(option);
            });
            selector.value = variableParent[variableName];
            break;
        case Selector.CHECKBOX:
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
            case Selector.SELECT:
                variableParent[variableName] = selector.value;
                break;
            case Selector.CHECKBOX:
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

export const BounceModes = Object.freeze({
    NONE: 0,
    COLOR: 1,
    RIPPLE: 2
})

export const EnableModes = Object.freeze({
    ENABLED: true,
    DISABLED: false
});

export class Config {
    constructor() {
        this.params = {
            sport: SportName.TABLE_TENNIS,
            visualizations: {
                BounceModes: BounceModes,
                bounce: BounceModes.NONE,
                showShadow: true,
                hawkEye: true
            }
        }
        this.paused = false;
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

    // /**
    //  * 
    //  * @param {Physics} physics 
    // */
    // configureSelectors(physics) {
    //     configureSelector({
    //         selectorName: "Sport",
    //         variableParent: config.params,
    //         variableName: "sport",
    //         variableEnum: SportName,
    //         selectorType: Selector.SELECT,
    //         callback: async (value) => {
    //             this.sport = new Sport(sportTrees[value], this.renderer, this.scene, this.video);
    //             await this.sport.init(physics);
    //         }
    //     });
    //     // configureSelector("Bounce Mode", this.params.visualizations, "bounce", BounceModes, () => { return null });

    // }


}


export const config = new Config();
