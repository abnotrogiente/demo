import { Box3, Camera, Mesh, Raycaster, Scene, ShaderMaterial, Vector2, Vector3, WebGLRenderer } from "three";
import { config } from "./config";
import { sport } from "./sport";

export class ObjectSelector {
    constructor() {
        const near = 0;
        const far = 100;
        this.rayCaster = new Raycaster();

        this.mouse = new Vector2(-5, -5);
    }


    updateObjectShaders() {
        this.preSelectedMesh = null;
        this.selectedMesh = null;
        sport.actors.forEach(mesh => {
            console.log("MESH NAME : " + mesh.name);
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

        const onMouseClick = (event) => {
            if (this.selectedMesh) this.selectedMesh.material.uniforms.isSelected.value = false;
            this.selectedMesh = this.preSelectedMesh;
            if (this.selectedMesh) this.selectedMesh.material.uniforms.isSelected.value = true;
        }

        config.renderer.domElement.addEventListener("mousemove", onMouseMove);
        config.renderer.domElement.addEventListener("mousedown", onMouseClick);
    }

    updateSelectionPannel() {

        // console.log("UPDATE SELECTION PANNEL : " + this.selectionPannelElement);
        // Create panel when a mesh is selected, or recreate when selection changes
        const parent = config.renderer?.domElement?.parentElement || document.body;
        const interactionsMap = sport.interactionsFromActor.get(this.selectedMesh);
        console.log("interactionsMap : " + JSON.stringify(interactionsMap));
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
            container.style.right = '12px';
            container.style.top = '12px';
            container.style.background = 'rgba(0,0,0,0.75)';
            container.style.color = '#fff';
            container.style.padding = '8px 10px';
            container.style.borderRadius = '6px';
            container.style.fontFamily = 'Arial, sans-serif';
            container.style.fontSize = '13px';
            container.style.zIndex = 1000;

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

                            const currentMode = interaction.value;
                            interBtn.textContent = `${interactionName} (mode: ${getModeName(interaction.enum, currentMode)})`;

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
                                // show mode buttons for selection
                                // create container for mode buttons
                                let modeContainer = interBtn.nextElementSibling;
                                if (!modeContainer || !modeContainer.classList || !modeContainer.classList.contains('mode-container')) {
                                    modeContainer = document.createElement('div');
                                    modeContainer.classList.add('mode-container');
                                    modeContainer.style.display = 'none';
                                    modeContainer.style.flexDirection = 'column';
                                    modeContainer.style.gap = '4px';
                                    modeContainer.style.margin = '6px 0 10px 0';

                                    const modesObj = interaction.enum;
                                    Object.entries(modesObj).forEach(([modeKey, modeValue]) => {
                                        const modeBtn = document.createElement('button');
                                        modeBtn.textContent = modeKey;
                                        modeBtn.style.padding = '6px 8px';
                                        modeBtn.style.border = 'none';
                                        modeBtn.style.borderRadius = '4px';
                                        modeBtn.style.cursor = 'pointer';
                                        modeBtn.style.textAlign = 'left';
                                        modeBtn.style.background = (interaction.value === modeValue) ? 'rgba(56, 161, 105, 0.18)' : 'rgba(255,255,255,0.04)';

                                        modeBtn.onclick = (ev) => {
                                            ev.stopPropagation();
                                            interaction.value = modeValue;
                                            // update button text and styles
                                            interBtn.textContent = `${interactionName} (mode: ${modeKey})`;
                                            // update persisted userData
                                            // if (Array.isArray(this.selectedMesh.userData.interactions) && typeof idx === 'number') {
                                            //     interaction
                                            //     this.selectedMesh.userData.interactions[idx].interactionTypes[interactionName].mode = modeValue;
                                            // } // TODO VOIR ICI SI PROBLEME
                                            // refresh mode button highlights
                                            Array.from(modeContainer.children).forEach(child => child.style.background = 'rgba(255,255,255,0.04)');
                                            modeBtn.style.background = 'rgba(56, 161, 105, 0.18)';
                                        };

                                        modeContainer.appendChild(modeBtn);
                                    });

                                    interBtn.after(modeContainer);
                                }
                                // toggle visibility
                                modeContainer.style.display = modeContainer.style.display === 'none' ? 'flex' : 'none';

                            };

                            interactionsArea.appendChild(interBtn);
                        });
                    };

                    actorsList.appendChild(actorBtn);
                });

                actorsContainer.appendChild(actorsList);
                actorsContainer.appendChild(interactionsArea);
                container.appendChild(actorsContainer);
            }

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
        } else if (this.selectionPannelDisplayed && this.selectedMesh === null) {
            this.selectionPannelElement.remove();
            this.selectionPannelElement = null;
            this.selectionPannelDisplayed = false;
        }
    }
}


