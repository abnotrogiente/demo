import { Box3, Camera, Mesh, Raycaster, Scene, ShaderMaterial, Vector2, Vector3, WebGLRenderer } from "three";
import { config, configureSelector } from "./config";
import { sport } from "./sport";
import { EnableModes, SelectorTypes } from "./constants";

export class ObjectSelector {
    constructor() {
        const near = 0;
        const far = 100;
        this.rayCaster = new Raycaster();

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
            if (!this.selectActorsMode) return;
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
        if (!container || !container.isConnected) return;

        const style = getComputedStyle(container);
        const parent = container.parentElement;
        const parentRect = style.position === 'fixed'
            ? { left: 0, top: 0 }
            : (parent?.getBoundingClientRect() || { left: 0, top: 0 });

        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        const rect = container.getBoundingClientRect();
        const padding = 8;

        const overflowsLeft = rect.left < padding;
        const overflowsRight = rect.right > viewportWidth - padding;
        const overflowsTop = rect.top < padding;
        const overflowsBottom = rect.bottom > viewportHeight - padding;

        if (!overflowsLeft && !overflowsRight && !overflowsTop && !overflowsBottom) return;

        let nextLeft = rect.left;
        let nextTop = rect.top;

        if (overflowsLeft) nextLeft = padding;
        if (overflowsRight) nextLeft = viewportWidth - rect.width - padding;
        if (overflowsTop) nextTop = padding;
        if (overflowsBottom) nextTop = viewportHeight - rect.height - padding;

        if (style.position === 'fixed') {
            container.style.left = `${nextLeft}px`;
            container.style.top = `${nextTop}px`;
        } else {
            container.style.left = `${nextLeft - parentRect.left}px`;
            container.style.top = `${nextTop - parentRect.top}px`;
        }
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
        const panel = document.createElement('div');
        panel.style.position = 'fixed';
        panel.style.minWidth = '240px';
        panel.style.maxWidth = '320px';
        panel.style.background = 'rgba(0,0,0,0.75)';
        panel.style.color = '#fff';
        panel.style.padding = '8px 10px';
        panel.style.borderRadius = '6px';
        panel.style.fontFamily = 'Arial, sans-serif';
        panel.style.fontSize = '13px';
        panel.style.zIndex = 1000;
        panel.style.maxHeight = 'calc(100vh - 16px)';
        panel.style.overflowY = 'auto';
        panel.style.boxSizing = 'border-box';
        panel.style.left = `${anchorRect.right + 8}px`;
        panel.style.top = `${Math.min(Math.max(cursorY, 8), window.innerHeight - 32)}px`;

        const title = document.createElement('div');
        title.style.fontWeight = '600';
        title.style.marginBottom = '6px';
        title.textContent = titleText;
        panel.appendChild(title);

        document.body.appendChild(panel);
        requestAnimationFrame(() => this.fitSelectionPanelToViewport(panel));
        return panel;
    }

    updateSelectionPannel() {

        // console.log("UPDATE SELECTION PANNEL : " + this.selectionPannelElement);
        // Create panel when a mesh is selected, or recreate when selection changes
        const parent = config.renderer?.domElement?.parentElement || document.body;
        const interactionsMap = sport.interactionsFromActor.get(this.selectedMesh);
        // const interactions = this.selectedMesh?.userData?.interactions;

        // If there's a panel but the selected mesh changed, remove it to recreate
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

            const container = document.createElement('div');
            container.id = 'selection-pannel';
            container.dataset.meshUuid = this.selectedMesh.uuid;
            container.style.position = 'fixed';
            container.style.left = `${100 * (this.mouse.x / 2 + .5)}%`;
            container.style.top = `${100 * (-this.mouse.y / 2 + .5)}%`;
            container.style.background = 'rgba(0,0,0,0.75)';
            container.style.color = '#fff';
            container.style.padding = '8px 10px';
            container.style.borderRadius = '6px';
            container.style.fontFamily = 'Arial, sans-serif';
            container.style.fontSize = '13px';
            container.style.zIndex = 1000;
            container.style.maxHeight = 'calc(100vh - 16px)';
            container.style.overflowY = 'auto';
            container.style.boxSizing = 'border-box';
            container.style.minWidth = '220px';
            container.style.transform = 'translateX(0)';

            const title = document.createElement('div');
            title.style.fontWeight = '600';
            title.style.marginBottom = '6px';
            title.textContent = `Selected: ${this.selectedMesh.name || 'object'}`;
            container.appendChild(title);

            if (interactionsMap.size === 0) {
                const none = document.createElement('div');
                none.textContent = 'No interactions defined';
                none.style.opacity = '0.85';
                container.appendChild(none);
            } else {
                const actorsTitle = document.createElement('div');
                actorsTitle.style.fontWeight = '500';
                actorsTitle.style.marginBottom = '4px';
                actorsTitle.textContent = 'Actors:';
                container.appendChild(actorsTitle);

                const actorsList = document.createElement('div');
                actorsList.style.display = 'flex';
                actorsList.style.flexDirection = 'column';
                actorsList.style.gap = '6px';

                interactionsMap.forEach((interactions, otherActorName) => {
                    const actorBtn = document.createElement('button');
                    actorBtn.textContent = otherActorName;
                    actorBtn.style.padding = '6px 8px';
                    actorBtn.style.border = 'none';
                    actorBtn.style.borderRadius = '4px';
                    actorBtn.style.cursor = 'pointer';
                    actorBtn.style.textAlign = 'left';
                    actorBtn.style.background = 'rgba(255,255,255,0.06)';
                    actorBtn.style.width = '100%';

                    actorBtn.onmouseenter = (event) => {
                        const otherActor = sport.actorByName.get(otherActorName);
                        otherActor.material.uniforms.isHighLighted.value = true;
                    }

                    actorBtn.onmouseleave = (event) => {
                        const otherActor = sport.actorByName.get(otherActorName);
                        console.log("actors uniforms : " + JSON.stringify(otherActor.material.uniforms));
                        otherActor.material.uniforms.isHighLighted.value = false;
                    }

                    actorBtn.onclick = (event) => {
                        this._closeInteractionPanel();
                        this._closeModePanel();

                        const interactionPanel = this._createRightPanel(container.getBoundingClientRect(), event.clientY, `Interactions with ${otherActorName}`);
                        this.interactionPanelElement = interactionPanel;

                        if (!interactions || interactions.length === 0) {
                            const none = document.createElement('div');
                            none.textContent = 'No interactions available';
                            none.style.opacity = '0.85';
                            interactionPanel.appendChild(none);
                        } else {
                            interactions.forEach(interaction => {
                                const interactionName = interaction.name;
                                const interBtn = document.createElement('button');
                                interBtn.textContent = interactionName;
                                interBtn.style.display = 'block';
                                interBtn.style.width = '100%';
                                interBtn.style.padding = '6px 8px';
                                interBtn.style.marginBottom = '6px';
                                interBtn.style.border = 'none';
                                interBtn.style.borderRadius = '4px';
                                interBtn.style.cursor = 'pointer';
                                interBtn.style.textAlign = 'left';
                                interBtn.style.background = 'rgba(255,255,255,0.04)';

                                interBtn.onclick = (clickEvent) => {
                                    clickEvent.stopPropagation();
                                    this._closeModePanel();

                                    const modePanel = this._createRightPanel(interactionPanel.getBoundingClientRect(), clickEvent.clientY, interactionName);
                                    this.modePanelElement = modePanel;

                                    const getModeName = (modesObj, value) => {
                                        if (!modesObj) return String(value);
                                        if (Array.isArray(modesObj)) return String(value);
                                        for (const [k, v] of Object.entries(modesObj)) {
                                            if (v === value) return k;
                                        }
                                        return String(value);
                                    };

                                    const paramEntries = Object.entries(interaction.params || {}).length > 0
                                        ? Object.entries(interaction.params || {})
                                        : (interaction.enum ? [["value", { value: interaction.value, enum: interaction.enum }]] : []);

                                    if (paramEntries.length === 0) {
                                        const emptyState = document.createElement('div');
                                        emptyState.textContent = 'No parameters';
                                        emptyState.style.opacity = '0.8';
                                        emptyState.style.fontSize = '12px';
                                        modePanel.appendChild(emptyState);
                                    } else {
                                        paramEntries.forEach(([paramName, paramConfig]) => {
                                            const paramRow = document.createElement('div');
                                            paramRow.style.display = 'flex';
                                            paramRow.style.flexDirection = 'column';
                                            paramRow.style.gap = '4px';

                                            const paramLabel = document.createElement('div');
                                            paramLabel.textContent = `${paramName}: ${getModeName(paramConfig.enum, paramConfig.value)}`;
                                            paramLabel.style.fontSize = '12px';
                                            paramLabel.style.opacity = '0.9';

                                            const paramOptions = document.createElement('div');
                                            paramOptions.style.display = 'flex';
                                            paramOptions.style.flexDirection = 'column';
                                            paramOptions.style.gap = '4px';

                                            Object.entries(paramConfig.enum || {}).forEach(([modeKey, modeValue]) => {
                                                const modeBtn = document.createElement('button');
                                                modeBtn.textContent = modeKey;
                                                modeBtn.style.padding = '4px 6px';
                                                modeBtn.style.border = 'none';
                                                modeBtn.style.borderRadius = '4px';
                                                modeBtn.style.cursor = 'pointer';
                                                modeBtn.style.textAlign = 'left';
                                                modeBtn.style.background = (paramConfig.value === modeValue) ? 'rgba(56, 161, 105, 0.18)' : 'rgba(255,255,255,0.04)';

                                                modeBtn.onclick = (ev) => {
                                                    ev.stopPropagation();
                                                    paramConfig.value = modeValue;
                                                    paramLabel.textContent = `${paramName}: ${modeKey}`;
                                                    Array.from(paramOptions.children).forEach(child => child.style.background = 'rgba(255,255,255,0.04)');
                                                    modeBtn.style.background = 'rgba(56, 161, 105, 0.18)';
                                                };

                                                paramOptions.appendChild(modeBtn);
                                            });

                                            paramRow.appendChild(paramLabel);
                                            paramRow.appendChild(paramOptions);
                                            modePanel.appendChild(paramRow);
                                        });
                                    }
                                };

                                interactionPanel.appendChild(interBtn);
                            });
                        }
                    };

                    actorsList.appendChild(actorBtn);
                });

                container.appendChild(actorsList);
            }

            const close = document.createElement('button');
            close.textContent = 'Close';
            close.style.marginTop = '8px';
            close.style.padding = '4px 8px';
            close.style.border = 'none';
            close.style.borderRadius = '4px';
            close.style.cursor = 'pointer';
            close.onclick = () => this._closeSelectionPanel();
            // container.appendChild(close);

            parent.appendChild(container);
            this.selectionPannelElement = container;
            requestAnimationFrame(() => this.fitSelectionPanelToViewport(container));
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


