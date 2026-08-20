import { BackSide, BufferAttribute, Camera, ClampToEdgeWrapping, CustomBlending, DoubleSide, FloatType, GLSL3, LinearFilter, Material, MaxEquation, Mesh, NearestFilter, Object3D, OneFactor, RawShaderMaterial, RGBAFormat, Scene, ShaderMaterial, Vector2, WebGLRenderer, WebGLRenderTarget } from "three";
import { config, configureSelector } from "./config";
import { GPU_reduction } from "./gpu-reduction";
import { getMeshesScoresById, topK } from "./utils";
import { SelectorTypes } from "./constants";
import { SportActorInteraction } from "./sport";


export class ReferentScoring {

    /**
     * 
     * @param {Map<Mesh, Map<Mesh, Map<int,SportActorInteraction>>>} interactionsFromActors 
     * @param {Map<Mesh, Map<int, SportActorInteraction>} visPreferences 
     */
    constructor(interactionsFromActors, visPreferences) {

        this.interactionsFromActors = interactionsFromActors;
        this.visPreferences = visPreferences;
        this.bestId = new Vector2(-1, -1);
        /**@type {Mesh} */
        this.bestMesh = null;

        this.numProposition = 1;

        /**@type {Mesh[]} */
        this.bestMeshes = Array.from({ length: this.numProposition });

        /**@type {ShaderMaterial} */
        this.material = new RawShaderMaterial({
            glslVersion: GLSL3,
            transparent: true,
            blending: CustomBlending,

            blendEquation: MaxEquation,

            blendSrc: OneFactor,
            blendDst: OneFactor,

            depthTest: false,
            depthWrite: false,


            uniforms: {
                isBackFace: { value: false },
                resolution: { value: new Vector2() },
                bestId: { value: this.bestId },
                render: { value: false }
            },
            vertexShader: /*glsl */ `
                precision highp float;
                in vec3 position;
                in vec3 normal;

                uniform mat4 modelMatrix;
                uniform mat4 modelViewMatrix;
                uniform mat4 viewMatrix;
                uniform mat4 projectionMatrix;

                in float vertexId;
                in float meshId;
                out vec3 vNormal;
                out vec3 cameraForward;
                out float debug;
                out float depth;
                flat out float vVertexId;
                flat out float vMeshId;
                uniform bool isBackFace;
                void main() {
                    vVertexId = vertexId;
                    vMeshId = meshId;
                    vNormal = normalize(mat3(modelMatrix) * normal);
                    debug = 0.;
                    if (isBackFace) {
                        // debug = 1.;
                        // vNormal = vec3(0., 1., 0.);
                        vNormal = -vNormal; // optional: flip for consistent lighting
                    }
                    cameraForward = normalize(-vec3(
                        viewMatrix[0][2],
                        viewMatrix[1][2],
                        viewMatrix[2][2]
                    ));
                    vec4 viewPos =  modelViewMatrix * vec4(position, 1.);
                    gl_Position = projectionMatrix * viewPos;
                    depth = -viewPos.z;
                }
            `,
            fragmentShader: /*glsl */ `
                precision highp float;
                out vec4 fragColor;

                flat in float vVertexId;
                flat in float vMeshId;
                in vec3 vNormal;
                in vec3 cameraForward;
                in float debug;
                in float depth;
                uniform float normalFactor;
                uniform float posFactor;
                uniform float depthFactor;
                uniform vec2 resolution;
                uniform vec2 bestId;
                uniform bool render;

                void main() {
                    if (vMeshId < .5) {
                        fragColor = vec4(-10.);
                        return;
                    }
                    float scoreNormal = -dot(vNormal, cameraForward);
                    vec2 ndc = (gl_FragCoord.xy / resolution) * 2.0 - 1.0;
                    // float scorePos = length(clipPos.xy);
                    float scorePos = 1.-length(ndc);
                    float scoreDepth = max(1.-depth/5., 0.);
                    float score = .33*scoreNormal + .33*scorePos + .33*scoreDepth;
                    // score = scoreNormal;
                    // score = scoreDepth;
                    if (render) {
                        fragColor = vec4(vec3(score), 1.);
                        if (abs(bestId.x-vVertexId) <= 10. && abs(bestId.y - vMeshId) <= 10.) fragColor = vec4(1., 0., 0., 1.);
                        return;
                    }
                    fragColor = vec4(score, vMeshId, vVertexId, 1.);
                    // outId = vec4(vMeshId, vTriId,  0., 1.);
                    // outScore = vec4(score, vTriId, vMeshId, 1.);
                    // gl_FragColor = vec4(vNormal, 1.);
                    // if (debug != 0.) gl_FragColor = vec4(1., 0., 0., 1.);
                } //TODO faire les id par vertex, triangle ou bien par objet, puis trouver le max de la texture de score par réduction et associer l'id du max, ensuite colorier la surface correspondante et faire diminiuer son score tant qu'elle est séléctionnée mais pas trop rapidement parce qu'on ne veut pas changer directement
            `
        });

        this.renderTargets = new WebGLRenderTarget(window.innerWidth, window.innerHeight, {
            count: 2,
            type: FloatType,
            minFilter: NearestFilter,
            magFilter: NearestFilter,
            format: RGBAFormat
        });

        this.scoreRenderTarget = new WebGLRenderTarget(window.innerWidth, window.innerHeight, {
            type: FloatType,
            minFilter: NearestFilter,
            magFilter: NearestFilter,
            format: RGBAFormat,
            wrapS: ClampToEdgeWrapping,
            wrapT: ClampToEdgeWrapping,

            // depthBuffer: false
        });


        configureSelector({
            selectorName: "Proposition Number",
            variableParent: this,
            variableName: "numProposition",
            selectorType: SelectorTypes.NUMBER,
            min: 1,
            callback: (value) => {
                //TODO unhighlight proposed referents
                this.#cleanPrevBestMeshes();
                this.bestMeshes = Array.from({ length: this.numProposition });

            }
        });
    }

    /**
     * 
     * @param {Mesh[]} referents 
     */
    async evaluate(referents) {
        this.referents = referents;
        /**@type {Map<Mesh, Material>} */
        this.originalMaterials = new Map();
        let meshId = 0;
        /**@type {Map<int, Mesh>} */
        this.meshById = new Map();
        const materials = [];
        // this.scene.traverse(/**@param {Object3D} child*/child => {
        referents.forEach(mesh => {

            const side = mesh.material.side;
            this.originalMaterials.set(mesh, mesh.material);
            const mat = this.material.clone();
            mesh.material = mat;
            mat.uniforms.render.value = false;
            mesh.layers.set(0);
            mat.opacity = 1.;
            materials.push(mat);
            // if (mesh.userData.display === undefined) mesh.userData.display = false;
            // if (side == BackSide) {
            //     mesh.material.side = BackSide;
            //     mesh.material.uniforms.isBackFace.value = true;
            // }
            mesh.material.uniforms.bestId.value.copy(this.bestId);
            config.renderer.getSize(mesh.material.uniforms.resolution.value);
            this.#setMeshIds(mesh, meshId);
            meshId++;
            mat.needsUpdate = true;

        });
        config.renderer.setRenderTarget(this.scoreRenderTarget);
        // config.renderer.setRenderTarget(this.renderTargets);
        config.renderer.render(config.scene, config.camera);
        this.#findBests(this.numProposition);

        // materials.forEach(mat => mat.uniforms.render.value = true);
        materials.forEach(mat => mat.uniforms.bestId.value.copy(this.bestId));
        config.renderer.setRenderTarget(null);
        config.renderer.render(config.scene, config.camera);


        let numDisplayed = 0;
        referents.forEach(mesh => {
            mesh.material = this.originalMaterials.get(mesh);
            mesh.layers.set(mesh.userData.display ? 0 : 1);
            if (mesh.userData.display) numDisplayed++;

        });
        //TODO e

    }

    /**
     * 
     * @param {Mesh} mesh 
     * @param {*} meshId 
     */
    #setMeshIds(mesh, meshId) {
        this.meshById.set(meshId, mesh);

        const geometry = mesh.geometry;

        const vertexCount = geometry.attributes.position.count;

        const vertexIdArray = new Float32Array(vertexCount);
        const meshIdArray = new Float32Array(vertexCount);

        for (let i = 0; i < vertexCount; i++) {
            vertexIdArray[i] = i + 1;
            meshIdArray[i] = meshId;
        }

        geometry.setAttribute(
            'vertexId',
            new BufferAttribute(vertexIdArray, 1)
        );

        geometry.setAttribute(
            'meshId',
            new BufferAttribute(meshIdArray, 1)
        );
    }

    #cleanPrevBestMeshes() {
        for (let k = 0; k < this.numProposition; k++) {
            const bestMesh_k = this.bestMeshes[k];
            // if (bestMesh_k && this.originalMaterials.get(bestMesh_k) && this.originalMaterials.get(bestMesh_k).uniforms && this.originalMaterials.get(bestMesh_k).uniforms.isHighLighted) this.originalMaterials.get(bestMesh_k).uniforms.isHighLighted.value = false;
            if (bestMesh_k && bestMesh_k.userData.formerDisplay !== undefined) bestMesh_k.userData.display = bestMesh_k.userData.formerDisplay;
            this.bestMeshes[k] = null;
            if (bestMesh_k) this.#updateVis(bestMesh_k);
        }
    }

    /**
     * 
     * @param {Mesh} referent 
     */
    #updateVis(referent) {

        this.interactionsFromActors.get(referent).forEach((interactions, otherActor) => {
            console.log("actor name : " + referent.name + "\n");
            if (!this.visPreferences.has(otherActor)) return;
            console.log("other actor name : " + otherActor.name);
            this.visPreferences.get(otherActor).forEach((preference, type) => {
                if (!interactions.has(type)) return;
                console.log("INTERACTION TYPE : " + type);
                console.log("PREFERENCE : " + JSON.stringify(preference.params));
                Object.entries(preference.params).forEach(([paramName, param]) => {
                    console.log("PARAM : " + JSON.stringify(param));
                    const value = referent.userData.display ? param.value : param.default;
                    console.log("VALUE : " + value);
                    interactions.get(type).params[paramName].value = value;

                });
                console.log("\n\n\n");
            });
        });
    }


    async #findBests(n) {
        if (n == 1) {
            // this.#findBest();
            return;
        }

        const size = new Vector2();
        config.renderer.getSize(size);
        const scores = new Float32Array(size.x * size.y * 4);
        // const ids = new Float32Array(size.x * size.y * 4);

        config.renderer.readRenderTargetPixels(
            this.scoreRenderTarget,
            0, 0, size.x, size.y,
            scores
        );

        const scoresMap = getMeshesScoresById(scores, { delta: 4, offsetId: 1, offsetScore: 0 });
        // const top = topK(scores, n, { delta: 4, offset: 0 });
        this.#cleanPrevBestMeshes();
        let k = 0;
        scoresMap.forEach((scoreResult, id) => {
            //TODO fix the preference for table proxy, it does not work currently. Why???
            if (k >= n) return;

            const mesh = this.meshById.get(id);
            this.bestMeshes[k] = mesh;

            if (mesh) {
                mesh.userData.formerDisplay = mesh.userData.display;
                mesh.userData.display = true;
            }
            // if (mesh && this.originalMaterials.get(mesh).uniforms && this.originalMaterials.get(mesh).uniforms.isHighLighted) this.originalMaterials.get(mesh).uniforms.isHighLighted.value = true;
            this.#updateVis(mesh);
            // mesh.userData.isProposed
            k++;

        });
        // for (let k = 0; k < Math.min(scoresMap.size, n); k++) {
        //     // let meshId;
        //     // let vertexId;

        //     const meshId = scores[top.indices[k] * 4 + 1];
        //     const vertexId = scores[top.indices[k] * 4 + 2];
        //     const mesh = this.meshById.get(meshId);
        //     this.bestMeshes[k] = mesh;

        //     if (mesh) {
        //         mesh.userData.formerDisplay = mesh.userData.display;
        //         mesh.userData.display = true;
        //     }
        //     if (mesh) console.log("best mesh : " + mesh.name);
        //     if (mesh && this.originalMaterials.get(mesh).uniforms && this.originalMaterials.get(mesh).uniforms.isHighLighted) this.originalMaterials.get(mesh).uniforms.isHighLighted.value = true;


        //     //TODO faire une fonction générique qui fait comme dans findbest, remplacer bestMesh par bestMeshes etc.
        // }



    }

    #findBest() {
        const { bestScore, vertexId, meshId } = GPU_reduction(this.scoreRenderTarget);
        this.bestId.set(vertexId, meshId);
        console.log("mesh id : " + meshId);
        if (this.bestMesh && this.originalMaterials.get(this.bestMesh) && this.originalMaterials.get(this.bestMesh).uniforms && this.originalMaterials.get(this.bestMesh).uniforms.isHighLighted) this.originalMaterials.get(this.bestMesh).uniforms.isHighLighted.value = false;
        if (this.bestMesh && this.bestMesh.userData.formerDisplay !== undefined) this.bestMesh.userData.display = this.bestMesh.userData.formerDisplay;
        this.bestMesh = this.meshById.get(Math.round(meshId));
        if (this.bestMesh) {
            this.bestMesh.userData.formerDisplay = this.bestMesh.userData.display;
            this.bestMesh.userData.display = true;
        }
        if (this.bestMesh) console.log("best mesh : " + this.bestMesh.name);
        if (this.bestMesh && this.originalMaterials.get(this.bestMesh).uniforms && this.originalMaterials.get(this.bestMesh).uniforms.isHighLighted) this.originalMaterials.get(this.bestMesh).uniforms.isHighLighted.value = true;
        // if (this.bestMesh) {
        //     console.log("name : " + this.bestMesh.name);
        //     console.log("uniforms : " + JSON.stringify(this.bestMesh.material.uniforms));
        //     this.bestMesh.material.uniforms.isHighLighted.value = true;
        // }
        return this.bestMesh;

    }

    stop() {
        //TODO adapt to multiple propositions
        if (this.bestMesh && this.bestMesh.userData.formerDisplay !== undefined) {
            this.bestMesh.userData.display = this.bestMesh.userData.formerDisplay;
            this.bestMesh.layers.set(this.bestMesh.userData.display ? 0 : 1);
        }
    }
}