const uiWindowContent = document.getElementById("window-content");

export const Selector = Object.freeze({
    CHECKBOX: 0,
    SELECT: 1
});

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

export function configureCheckBox(checkBoxName, variableParent, vairableName, callback) {

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
            visualizations: {
                BounceModes: BounceModes,
                bounce: BounceModes.NONE,
                showShadow: true,
                hawkEye: true
            }
        }
        this.paused = false;
    }

    configureSelectors() {
        // configureSelector("Bounce Mode", this.params.visualizations, "bounce", BounceModes, () => { return null });

    }


}


export const config = new Config();

config.configureSelectors();
