import { Box3, Camera, Mesh, Raycaster, Scene, ShaderMaterial, Vector2, Vector3, WebGLRenderer } from "three";
import { config } from "./config";
import { sport } from "./sport";
import { createAuthoringToolbar } from "./selectionPanelUI";
import { referentMover } from "./manipulation";

export class ObjectSelector {
    constructor() {
        const near = 0;
        const far = 100;
        this.rayCaster = new Raycaster();
        this.rayCaster.layers.set(0);

        this.mouse = new Vector2(-5, -5);

        this.preSelectedMesh = null;
        this.selectedMesh = null;

        this.mouseDownCameraPos = new Vector3();

        this.v3tmp1 = new Vector3();
        this.v3tmp2 = new Vector3();
        this.v3tmp3 = new Vector3();
    }


    updateObjectShaders() {
        this.preSelectedMesh = null;
        this.selectedMesh = null;
        sport.actors.forEach(mesh => {
            if (!mesh.isMesh) return;
            // Create a uniforms object on the material to store custom uniforms
            if (!mesh.material.uniforms) {
                mesh.material.uniforms = {};
            }
            mesh.material.uniforms.isHighLighted ??= { value: false };

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
                    shader.uniforms.isHighLighted = mesh.material.uniforms.isHighLighted;
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
                                vec4 color = isSelected ? green : isPreSelected? yellow : yellow;
                                glowIntensity = isSelected || isHighLighted? .5 : cos(2.*PI*glowFrequency*uTime)*.15+.3;
                                gl_FragColor = (1. - glowIntensity)*gl_FragColor + glowIntensity*color;
                                gl_FragColor.a = 1.;
                            }
                        `);
                    this.shader = shader;
                    mesh.userData.shader = this.shader;
                    // console.log("userData : " + JSON.stringify(this.shader) + "\n\n");
                }
            mesh.material.customProgramCacheKey = () => "selectionEffects" + (mesh.material.userData.surfaceEffects ? " and surface effects" : "");
            mesh.material.needsUpdate = true;
        });

        config.renderer.compile(config.scene, config.camera)

        const onMouseMove = (event) => {
            if (!this.selectionRequest) return;
            const canvas = config.renderer.domElement;
            const box = canvas.getBoundingClientRect();
            const x = event.clientX - box.left;
            const y = event.clientY - box.top;
            this.mouse.x = (x / box.width) * 2 - 1;
            this.mouse.y = -(y / box.height) * 2 + 1;
            this.setHighlight(this.preSelectedMesh, 'isPreSelected', false);
            this.rayCaster.setFromCamera(this.mouse, config.camera);
            this.preSelectedMesh = null;
            let nearestDistance = Infinity;
            const eligible = actor => sport.isDisplayed(actor) && this.selectionRequest.eligible(actor);
            sport.actors.forEach(mesh => {
                if (!mesh.userData.useBoundingBox || !eligible(mesh)) return;
                const hitbox = mesh.userData.hitbox;
                if (hitbox && hitbox.delta) this.v3tmp2.copy(hitbox.delta);
                else this.v3tmp2.set(0, 0, 0);
                const bbox = hitbox ?
                    new Box3().setFromCenterAndSize(
                        mesh.getWorldPosition(this.v3tmp1).add(this.v3tmp2),
                        this.v3tmp3.set(hitbox.width, hitbox.height, hitbox.depth)) :
                    new Box3().setFromObject(mesh);

                const point = this.rayCaster.ray.intersectBox(bbox, this.v3tmp3);
                if (point) {
                    const distance = this.rayCaster.ray.origin.distanceTo(point);
                    if (distance < nearestDistance) {
                        nearestDistance = distance;
                        this.preSelectedMesh = mesh;
                    }
                }
            });
            const candidates = sport.actorsNoBoundingBox.filter(eligible);
            const candidateSet = new Set(candidates);
            for (const hit of this.rayCaster.intersectObjects(candidates, true)) {
                if (hit.distance >= nearestDistance) break;
                let actor = hit.object;
                while (actor && !candidateSet.has(actor)) actor = actor.parent;
                if (actor) {
                    this.preSelectedMesh = actor;
                    break;
                }
            }
            this.setHighlight(this.preSelectedMesh, 'isPreSelected', true);
        };

        const onMouseDown = (event) => {
            if (event.button === 0) {
                this.mouseDownCameraPos.copy(config.camera.position);
                // this.mouseDownTime = config.getTimeAbsolute();
            }
        }
        const onMouseUp = (event) => {
            if (!this.selectionRequest || referentMover.mesh !== undefined || event.button !== 0) return;
            if (this.mouseDownCameraPos.distanceToSquared(config.camera.position) >= 1e-2) return;
            onMouseMove(event);
            if (!this.preSelectedMesh) return;
            const actor = this.preSelectedMesh;
            const { onSelect } = this.selectionRequest;
            this.cancelSelection();
            onSelect(actor);
        }

        config.renderer.domElement.addEventListener("mousemove", onMouseMove);
        config.renderer.domElement.addEventListener("mousedown", onMouseDown);
        config.renderer.domElement.addEventListener("mouseup", onMouseUp);
        this.removeListeners = () => {
            config.renderer.domElement.removeEventListener("mousemove", onMouseMove);
            config.renderer.domElement.removeEventListener("mousedown", onMouseDown);
            config.renderer.domElement.removeEventListener("mouseup", onMouseUp);
        };
        this.toolbar = createAuthoringToolbar({ sport, selector: this, referentMover });
    }

    setHighlight(actor, name, value) {
        const uniform = actor?.material?.uniforms?.[name];
        if (uniform) uniform.value = value;
    }

    requestSelection(eligible, onSelect) {
        this.cancelSelection();
        this.selectionRequest = { eligible, onSelect };
    }

    cancelSelection() {
        this.setHighlight(this.preSelectedMesh, 'isPreSelected', false);
        this.preSelectedMesh = null;
        this.selectionRequest = null;
    }

    dispose() {
        this.cancelSelection();
        this.toolbar?.dispose();
        this.removeListeners?.();
        if (referentMover.mesh !== undefined) referentMover.end();
    }
}


