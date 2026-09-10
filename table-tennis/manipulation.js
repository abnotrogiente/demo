import { Mesh, Vector2, Vector3 } from "three";
import { config } from "./config";
import { gizmo } from "three-gizmo";
import { ObjectSelector } from "./editor";
import { setColor } from "three-gizmo";
setColor("color1", 0xff0000)
setColor("color2", 0x00ff00)
setColor("color3", 0x0000ff)

export class ReferentMover {
    constructor() {
        this.tmpVec = new Vector3();
        this.toolNames = ["rotate", "move", "scale"];
        this.propertyFromToomName = new Map([
            ["rotate", "rotation"],
            ["scale", "scale"],
            ["move", "position"]
        ])
    }

    /**
     * 
     * @param {Mesh} selectedMesh 
     */
    init(selectedMesh, toolName) {
        this.mesh = selectedMesh;
        this.currentTool = toolName;
        if (!this.helper) this.helper = gizmo(config.camera, config.renderer);
        else this.helper.none();

        this.helper.on(toolName, value => {
            config.controls.enabled = false;
            if (!selectedMesh) return;
            const propertyName = this.propertyFromToomName.get(toolName);
            selectedMesh[propertyName].copy(value);

        });
        this.helper.on("end-" + toolName, angle => {
            config.controls.enabled = true;
            config.controls.update();
        });
        selectedMesh.getWorldPosition(this.tmpVec);
        this.helper.setOrigin(this.tmpVec);
        // this.helper.setScale(new Vector3(0.2, 0.2, 0.2));
        this.helper[toolName]();
    }

    end() {
        this.helper.none();
        this.mesh = null;
    }

    update() {
        if (!this.helper) return;
        const size = config.renderer.getSize(new Vector2());
        config.renderer.setRenderTarget(null);
        config.renderer.setViewport(0, 0, size.x, size.y);
        this.helper.render();
        // referentMover.update();
    }

    isMeshAndTool(mesh, toolName) {
        return this.mesh === mesh && this.currentTool === toolName;
    }
}

export const referentMover = new ReferentMover();