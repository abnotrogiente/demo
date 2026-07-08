import { Box3, Camera, Mesh, Raycaster, Scene, ShaderMaterial, Vector2, Vector3, WebGLRenderer } from "three";
import { config, configureSelector } from "./config";
import { sport } from "./sport";
import { EnableModes, SelectorTypes } from "./constants";
import { createSelectionPanel, createRightPanel as createRightPanelUI, fitSelectionPanelToViewport as fitPanelToViewport } from "./selectionPanelUI";

export class ObjectSelector {
    constructor() {
        const near = 0;
        const far = 100;
        this.rayCaster = new Raycaster();
        this.rayCaster.layers.set(0);

        this.mouse = new Vector2(-5, -5);

        this.preSelectedMesh = null;
        this.selectedMesh = null;

        this.selectActorsMode = true;

        this.configureUI();
    }


    updateObjectShaders() {
        this.preSelectedMesh = null;
        this.selectedMesh = null;
        sport.actors.forEach(mesh => {
            // Create a uniforms object on the material to store custom uniforms
            if (!mesh.material.uniforms) {
                mesh.material.uniforms = {};
            }

            let prevOnBeforeCompile = null;
            if (mesh.material.onBeforeCompile) prevOnBeforeCompile = mesh.material.onBeforeCompile;

            mesh.material.onBeforeCompile =
                /**
                 * 
                 * @param {ShaderMaterial} shader 
                 */
                shader => {
                    if (prevOnBeforeCompile) prevOnBeforeCompile(shader);

                    shader.uniforms.isPreSelected = { value: false };
                    shader.uniforms.isSelected = { value: false };
                    shader.uniforms.isHighLighted = { value: false };
                    if (!shader.fragmentShader.includes("uTime")) {
                        shader.fragmentShader = shader.fragmentShader.replace(
                            "#include <common>",
                            /*glsl */ `
                            #include <common>
                            uniform float uTime;

                        `);
                    }
                    shader.uniforms.uTime ??= { value: 0 };
                    // Store reference on material for access in mousemove
                    mesh.material.uniforms.isPreSelected = shader.uniforms.isPreSelected;
                    mesh.material.uniforms.isSelected = shader.uniforms.isSelected;
                    mesh.material.uniforms.isHighLighted = shader.uniforms.isHighLighted;

                    shader.fragmentShader = shader.fragmentShader.replace(
                        "#include <common>",
                            /*glsl */ `
                            #include <common>
                            uniform bool isPreSelected;
                            uniform bool isSelected;
                            uniform bool isHighLighted;

                        `);
                    shader.fragmentShader = shader.fragmentShader.replace(
                        "#include <opaque_fragment>",
                            /*glsl */ `
                            #include <opaque_fragment>
                            if (isPreSelected || isSelected || isHighLighted) {
                                float glowIntensity = .3;
                                float glowFrequency = 1.;
                                vec4 yellow = vec4(1., 1., 0., 1.);
                                vec4 green = vec4(0., 1., 0., 1.);
                                vec4 red = vec4(1., 0., 0., 1.);
                                vec4 color = isSelected ? green : isPreSelected? yellow : red;
                                glowIntensity = isSelected? .5 : cos(2.*PI*glowFrequency*uTime)*.15+.3;
                                gl_FragColor = (1. - glowIntensity)*gl_FragColor + glowIntensity*color;
                                gl_FragColor.a = 1.;
                            }
                        `);
                    mesh.userData.shader = shader;
                }
            mesh.material.needsUpdate = true;
        });

        const onMouseMove = (event) => {
            if (!this.selectActorsMode || this.selectedMesh) return;
            const canvas = event.target;
            const box = canvas.getBoundingClientRect();
            const x = event.clientX - box.left;
            const y = event.clientY - box.top;
            this.mouse.x = (x / canvas.scrollWidth) * 2 - 1;
            this.mouse.y = - (y / canvas.scrollHeight) * 2 + 1;

            sport.actors.forEach(mesh => {
                if (mesh.material.uniforms && mesh.material.uniforms.isPreSelected) mesh.material.uniforms.isPreSelected.value = false;
            })


            this.rayCaster.setFromCamera(this.mouse, config.camera);
            let selected = false;
            this.preSelectedMesh = null;
            sport.actors.forEach(mesh => {
                if (mesh.material.uniforms && mesh.material.uniforms.isPreSelected) mesh.material.uniforms.isPreSelected.value = false;

                if (!mesh.userData.useBoundingBox) return;
                const bbox = new Box3().setFromObject(mesh);

                if (this.rayCaster.ray.intersectsBox(bbox)) {
                    console.log('hit');
                    if (mesh.material.uniforms) {
                        console.log("SELECT : " + mesh.name);

                        mesh.material.uniforms.isPreSelected.value = true;
                        this.preSelectedMesh = mesh;
                    }
                }
            });
            if (this.preSelectedMesh === null) {
                const intersects = this.rayCaster.intersectObjects(sport.actors, true);
                if (intersects.length > 0) {
                    const mesh = intersects[0].object;
                    // mesh.scale.set(2, 2, 2);
                    if (mesh.material.uniforms) {
                        // console.log("SELECT : " + mesh.name);

                        mesh.material.uniforms.isPreSelected.value = true;
                        this.preSelectedMesh = mesh;
                    }
                }
            }

            // console.log("Mouse Pos : " + JSON.stringify(this.mouse))
        }

        this.confirmSelection = () => {
            if (this.selectedMesh) this.selectedMesh.material.uniforms.isSelected.value = false;
            this.selectedMesh = this.preSelectedMesh;
            this.preSelectedMesh = null;
            if (this.selectedMesh) this.selectedMesh.material.uniforms.isSelected.value = true;
        }

        const onMouseClick = (event) => {
            if (event.which == 1) {
                this.confirmSelection();
            }

        }

        config.renderer.domElement.addEventListener("mousemove", onMouseMove);
        config.renderer.domElement.addEventListener("mousedown", onMouseClick);
    }

    fitSelectionPanelToViewport(container) {
        fitPanelToViewport(container);
    }

    _removePanel(panel) {
        if (panel && panel.isConnected) {
            panel.remove();
        }
    }

    _closeModePanel() {
        this._removePanel(this.modePanelElement);
        this.modePanelElement = null;
    }

    _closeInteractionPanel() {
        this._closeModePanel();
        this._removePanel(this.interactionPanelElement);
        this.interactionPanelElement = null;
    }

    _closeSelectionPanel() {
        this._closeInteractionPanel();
        this._removePanel(this.selectionPannelElement);
        this.selectionPannelElement = null;
        this.selectionPannelDisplayed = false;
    }

    _createRightPanel(anchorRect, cursorY, titleText) {
        return createRightPanelUI(anchorRect, cursorY, titleText);
    }

    updateSelectionPannel() {
        const parent = config.renderer?.domElement?.parentElement || document.body;

        if (this.selectionPannelDisplayed && this.selectionPannelElement && this.selectedMesh) {
            const existingMeshId = this.selectionPannelElement.dataset?.meshUuid;
            if (existingMeshId !== this.selectedMesh.uuid) {
                this.selectionPannelElement.remove();
                this.selectionPannelElement = null;
                this.selectionPannelDisplayed = false;
            }
        }

        if (!this.selectionPannelDisplayed && this.selectedMesh != null) {
            this.selectionPannelDisplayed = true;
            this.selectionPannelElement = createSelectionPanel({
                selectedMesh: this.selectedMesh,
                mouse: this.mouse,
                parent,
                closeSelectionPanel: () => this._closeSelectionPanel(),
                closeInteractionPanel: () => this._closeInteractionPanel(),
                closeModePanel: () => this._closeModePanel(),
                createRightPanel: (anchorRect, cursorY, titleText) => this._createRightPanel(anchorRect, cursorY, titleText),
                onInteractionPanelCreated: (panel) => {
                    this.interactionPanelElement = panel;
                },
                onModePanelCreated: (panel) => {
                    this.modePanelElement = panel;
                },
            });
            this.selectionPannelElement.dataset.meshUuid = this.selectedMesh.uuid;
        } else if (this.selectionPannelDisplayed && this.selectedMesh === null) {
            this._closeSelectionPanel();
        }
    }

    configureUI() {
        configureSelector({
            selectorName: "Select Actors Mode",
            variableParent: this,
            variableName: "selectActorsMode",
            variableEnum: EnableModes,
            selectorType: SelectorTypes.SELECT,
            callback: (value) => {
                this.preSelectedMesh = null;
                this.confirmSelection();
            }
        });
    }
}


