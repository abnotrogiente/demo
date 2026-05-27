

export function configureSelector(selectorName, variableParent, variableName, variableEnum, callback) {
    const div = document.createElement("div");
    div.classList.add("control-group");
    const label = document.createElement("label");
    label.textContent = selectorName;
    div.appendChild(label);
    const selector = document.createElement("select");
    div.appendChild(selector);

    Object.entries(variableEnum).forEach(([key, value]) => {
        const option = document.createElement("option");
        option.value = value;
        option.textContent = key;
        selector.appendChild(option);
    });

    uiWindowContent.appendChild(div);

    selector.addEventListener("change", () => {
        variableParent[variableName] = selector.value;
        // console.log("CHANGE : " + variableParent[variableName].toString());
        callback(variableParent[variableName]);
    });
}

const uiWindowContent = document.getElementById("window-content");

export function getShaderConstantsFromEnum(e) {
    let parametersstr = "";
    Object.entries(e).forEach(([key, value]) => {


        parametersstr += "#define " + key + " " + value + "\n";
    });
    return parametersstr;
}

export const BounceModes = Object.freeze({
    COLOR: 0,
    RIPPLE: 1
})
export class Config {
    constructor() {
        this.params = {
            visualizations: {
                BounceModes: BounceModes,
                bounce: BounceModes.COLOR,
            }
        }
    }

    configureSelectors() {
        // configureSelector("Bounce Mode", this.params.visualizations, "bounce", BounceModes, () => { return null });

    }


}



