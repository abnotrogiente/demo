import { Mesh } from "three";
import { config } from "./config";
import { TransformControls } from "three/examples/jsm/Addons.js";

export class ReferentMover {
    constructor() {
        this.toolNames = ["rotate", "translate", "scale"];
    }


    init() {
        this.transformControls = new TransformControls(config.camera, config.renderer.domElement);
        config.scene.add(this.transformControls.getHelper());
        this.transformControls.addEventListener('dragging-changed', (event) => {
            config.controls.enabled = !event.value;
        });
    }
    /**
     * 
     * @param {Mesh} selectedMesh 
    */
    setControl(selectedMesh, toolName) {
        if (!this.transformControls) this.init();
        this.mesh = selectedMesh;

        this.transformControls.attach(selectedMesh);
        this.transformControls.setMode(toolName);
        this.currentTool = toolName;
    }

    end() {
        this.transformControls.detach();
        this.mesh = undefined;
        this.currentTool = undefined;
    }

    isMeshAndTool(mesh, toolName) {
        return this.mesh === mesh && this.currentTool === toolName;
    }
}

export const referentMover = new ReferentMover();