import { Vector3 } from "three";
import { Selector, Sport, sportSpecificAssets, sportToAssets } from "./constants";
import { Physics } from "./physics";

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
export class Config {
    constructor() {
        this.params = {
            sport: Sport.TABLE_TENNIS,
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
     * @param {Physics} physics 
     */
    configureSelectors(physics) {
        configureSelector({
            selectorName: "Sport",
            variableParent: config.params,
            variableName: "sport",
            variableEnum: Sport,
            selectorType: Selector.SELECT,
            callback: (value) => {
                sportSpecificAssets.forEach(asset => physics.deleteBody(asset));
                sportSpecificAssets.splice(0, sportSpecificAssets.length);
                const sportAssets = sportToAssets[value];
                sportAssets.forEach(asset => {
                    let body;
                    switch (asset.collideShape) {
                        case "box":
                            body = physics.createBox({
                                position: asset.position,
                                // rotation: new Quaternion(0., 0., .02, 1.),
                                dimensions: new Vector3(asset.dimensions.width, asset.dimensions.height, asset.dimensions.depth),
                                restitution: asset.physicsConstants.restitution, // allows bounce
                                friction: asset.physicsConstants.friction,     // higher friction (grip)
                                model: asset.model,
                                modelOffset: asset.modelOffset
                            });
                            break;
                        case "sphere":
                            break;
                        default:
                            console.warn("tried to add sport specific asset with invalid shape");
                            break;

                    }
                    sportSpecificAssets.push(body);
                });
            }
        })
        // configureSelector("Bounce Mode", this.params.visualizations, "bounce", BounceModes, () => { return null });

    }


}


export const config = new Config();
