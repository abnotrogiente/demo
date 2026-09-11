import { Mesh, Object3D, Quaternion, Vector3 } from "three";
import { config } from "./config";
import { TransformControls } from "three/examples/jsm/Addons.js";
import { sport } from "./sport";
import { ReferentsCharacteristics } from "./constants";

export class ReferentMover {
    constructor() {
        this.toolNames = ["rotate", "translate", "scale"];
    }


    init() {
        this.transformControls = new TransformControls(config.camera, config.renderer.domElement);
        this.transformControls.setSpace("local");
        config.scene.add(this.transformControls.getHelper());
        this.transformControls.addEventListener('dragging-changed', (event) => {
            config.controls.enabled = !event.value;
        });
        const tmpPosition = new Vector3();
        const tmpQuaternion = new Quaternion();
        this.transformControls.addEventListener('objectChange', () => {
            // Proxy position is in world space.
            if (!this.proxyAnchor) return;
            const worldPosition = this.proxyAnchor.position;

            if (this.mesh.parent) {
                this.mesh.parent.worldToLocal(tmpPosition.copy(worldPosition));
                this.mesh.position.copy(tmpPosition);
            } else {
                this.mesh.position.copy(worldPosition);
            }
        });
    }

    #updateProxyAnchorTransform() {
        this.mesh.getWorldPosition(this.proxyAnchor.position);
        config.camera.getWorldQuaternion(this.proxyAnchor.quaternion);
    }

    #setProxyAnchor() {
        this.proxyAnchor = new Object3D();
        config.scene.add(this.proxyAnchor);
        this.transformControls.attach(this.proxyAnchor);
        this.#updateProxyAnchorTransform();
    }
    update() {
        if (this.proxyAnchor) {
            this.#updateProxyAnchorTransform();
        }
    }
    /**
     * 
     * @param {Mesh} selectedMesh 
    */
    setControl(selectedMesh, toolName) {
        if (!this.transformControls) this.init();
        this.mesh = selectedMesh;
        this.screenSpace = sport.hasCharacteristic(selectedMesh, ReferentsCharacteristics.SCREEN_SPACE);

        if (this.screenSpace && toolName === "translate") this.#setProxyAnchor();
        else this.transformControls.attach(selectedMesh);
        this.transformControls.setMode(toolName);
        this.currentTool = toolName;
    }

    end() {
        this.transformControls.detach();
        this.mesh = undefined;
        this.currentTool = undefined;
        this.screenSpace = false;
        config.scene.remove(this.proxyAnchor);
        this.proxyAnchor = undefined;
    }

    isMeshAndTool(mesh, toolName) {
        return this.mesh === mesh && this.currentTool === toolName;
    }
}

export const referentMover = new ReferentMover();