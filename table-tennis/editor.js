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

                    shader.fragmentShader = shader.fragmentShader.replace(
                        "#include <common>",
                            /*glsl */ `
                            #include <common>
                            uniform bool isPreSelected;
                            uniform bool isSelected;

                        `);
                    shader.fragmentShader = shader.fragmentShader.replace(
                        "#include <opaque_fragment>",
                            /*glsl */ `
                            #include <opaque_fragment>
                            if (isPreSelected || isSelected) {
                                float glowIntensity = .3;
                                float glowFrequency = 1.;
                                vec4 yellow = vec4(1., 1., 0., 1.);
                                vec4 green = vec4(0., 1., 0., 1.);
                                vec4 color = isSelected ? green : yellow;
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
            console.log("click : " + event.which);
            if (event.which == 1) {
                this.confirmSelection();
            }

        }

        config.renderer.domElement.addEventListener("mousemove", onMouseMove);
        config.renderer.domElement.addEventListener("mousedown", onMouseClick);
    }

    fitSelectionPanelToViewport(container) {
        if (!container || !container.isConnected) return;

        const parent = container.parentElement;
        if (!parent) return;

        const parentRect = parent.getBoundingClientRect();
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

        container.style.left = `${nextLeft - parentRect.left}px`;
        container.style.top = `${nextTop - parentRect.top}px`;
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
            container.style.position = 'absolute';
            container.style.left = 100 * (this.mouse.x / 2 + .5) + '%';
            container.style.top = 100 * (-this.mouse.y / 2 + .5) + '%';
            // container.style.top = '12px';
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

            const title = document.createElement('div');
            title.style.fontWeight = '600';
            title.style.marginBottom = '6px';
            title.textContent = `Selected: ${this.selectedMesh.name || 'object'}`;
            container.appendChild(title);

            // Actors list (buttons)
            const actorsContainer = document.createElement('div');
            actorsContainer.style.display = 'flex';
            actorsContainer.style.flexDirection = 'column';
            actorsContainer.style.gap = '6px';

            // Build map actor -> interactions
            // const actorMap = {};
            // if (Array.isArray(interactions)) {
            //     interactions.forEach((inter, idx) => {
            //         const actor = inter.otherActor || 'unknown';
            //         if (!actorMap[actor]) actorMap[actor] = [];
            //         const interactionTypes = inter.interactionTypes || [];
            //         console.log("inter : " + interactionTypes[0]);
            //         actorMap[actor] = interactionTypes;
            //     });
            // }
            // console.log("ACTOR MAP : " + JSON.stringify(actorMap));

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

                // area where interactions for chosen actor will be displayed
                const interactionsArea = document.createElement('div');
                interactionsArea.style.marginTop = '8px';

                interactionsMap.forEach((interactions, otherActorName) => {

                    const actorBtn = document.createElement('button');
                    actorBtn.textContent = otherActorName;
                    actorBtn.style.padding = '6px 8px';
                    actorBtn.style.border = 'none';
                    actorBtn.style.borderRadius = '4px';
                    actorBtn.style.cursor = 'pointer';
                    actorBtn.style.textAlign = 'left';
                    actorBtn.style.background = 'rgba(255,255,255,0.06)';
                    actorBtn.onclick = () => {
                        // Render interactions for this actor
                        interactionsArea.innerHTML = '';
                        const title = document.createElement('div');
                        title.textContent = `Interactions with ${otherActorName}`;
                        title.style.fontWeight = '600';
                        title.style.marginBottom = '6px';
                        interactionsArea.appendChild(title);

                        // Object.entries(interaction).forEach(([interactionType, interactionState]) => {
                        interactions.forEach(interaction => {
                            const interactionName = interaction.name;
                            // actorMap[actor].forEach((inter) => {
                            console.log("INTER : " + interactionName);
                            const interBtn = document.createElement('button');
                            // const types = Array.isArray(inter.interactionTypes) ? inter.interactionTypes.join(', ') : String(inter.interactionTypes || '');
                            // const hasModes = interactionState && (interactionState.modes || interactionState.mode !== undefined);
                            // const enabled = interactionState.enabled !== false; // default true

                            // helper to get mode name from modes object by value
                            const getModeName = (modesObj, value) => {
                                if (!modesObj) return String(value);
                                // if modesObj is an array
                                if (Array.isArray(modesObj)) {
                                    return String(value);
                                }
                                for (const [k, v] of Object.entries(modesObj)) {
                                    if (v === value) return k;
                                }
                                return String(value);
                            };

                            const paramEntries = Object.entries(interaction.params || {}).length > 0
                                ? Object.entries(interaction.params || {})
                                : (interaction.enum ? [["value", { value: interaction.value, enum: interaction.enum }]] : []);

                            interBtn.textContent = interactionName;

                            interBtn.style.display = 'block';
                            interBtn.style.width = '100%';
                            interBtn.style.padding = '6px 8px';
                            interBtn.style.marginBottom = '6px';
                            interBtn.style.border = 'none';
                            interBtn.style.borderRadius = '4px';
                            interBtn.style.cursor = 'pointer';
                            interBtn.style.textAlign = 'left';
                            // interBtn.style.background = enabled ? 'rgba(56, 161, 105, 0.12)' : 'rgba(255,255,255,0.04)';
                            interBtn.style.background = 'rgba(255,255,255,0.04)';

                            interBtn.onclick = () => {
                                let modeContainer = interBtn.nextElementSibling;
                                if (!modeContainer || !modeContainer.classList || !modeContainer.classList.contains('mode-container')) {
                                    modeContainer = document.createElement('div');
                                    modeContainer.classList.add('mode-container');
                                    modeContainer.style.display = 'none';
                                    modeContainer.style.flexDirection = 'column';
                                    modeContainer.style.gap = '6px';
                                    modeContainer.style.margin = '6px 0 10px 0';

                                    if (paramEntries.length === 0) {
                                        const emptyState = document.createElement('div');
                                        emptyState.textContent = 'No parameters';
                                        emptyState.style.opacity = '0.8';
                                        emptyState.style.fontSize = '12px';
                                        modeContainer.appendChild(emptyState);
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
                                            modeContainer.appendChild(paramRow);
                                        });
                                    }

                                    interBtn.after(modeContainer);
                                }
                                // toggle visibility
                                modeContainer.style.display = modeContainer.style.display === 'none' ? 'flex' : 'none';
                                requestAnimationFrame(() => this.fitSelectionPanelToViewport(container));

                            };

                            interactionsArea.appendChild(interBtn);
                        });

                        requestAnimationFrame(() => this.fitSelectionPanelToViewport(container));
                    };

                    actorsList.appendChild(actorBtn);
                });

                actorsContainer.appendChild(actorsList);
                actorsContainer.appendChild(interactionsArea);
                container.appendChild(actorsContainer);
            }

            requestAnimationFrame(() => this.fitSelectionPanelToViewport(container));

            const close = document.createElement('button');
            close.textContent = 'Close';
            close.style.marginTop = '8px';
            close.style.padding = '4px 8px';
            close.style.border = 'none';
            close.style.borderRadius = '4px';
            close.style.cursor = 'pointer';
            close.onclick = () => {
                container.remove();
                this.selectionPannelDisplayed = false;
                this.selectionPannelElement = null;
            };
            // container.appendChild(close);

            parent.appendChild(container);
            this.selectionPannelElement = container;
            requestAnimationFrame(() => this.fitSelectionPanelToViewport(container));
        } else if (this.selectionPannelDisplayed && this.selectedMesh === null) {
            this.selectionPannelElement.remove();
            this.selectionPannelElement = null;
            this.selectionPannelDisplayed = false;
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


