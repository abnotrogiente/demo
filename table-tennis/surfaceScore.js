import { BackSide, BufferAttribute, Camera, DoubleSide, FloatType, GLSL3, LinearFilter, Mesh, NearestFilter, Object3D, RawShaderMaterial, RGBAFormat, Scene, ShaderMaterial, Vector2, WebGLRenderer, WebGLRenderTarget } from "three";


export class SurfaceScore {
    /**
     * 
     * @param {Scene} scene 
     * @param {WebGLRenderer} renderer 
     * @param {Camera} camera 
     */
    constructor(scene, renderer, camera) {
        this.bestId = new Vector2(-1, -1);
        this.scene = scene;
        this.renderer = renderer;
        this.camera = camera;
        /**@type {ShaderMaterial} */
        this.material = new RawShaderMaterial({
            glslVersion: GLSL3,
            transparent: true,
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

                in float triId;
                in float meshId;
                out vec3 vNormal;
                out vec3 cameraForward;
                out float debug;
                out float depth;
                flat out float vTriId;
                flat out float vMeshId;
                uniform bool isBackFace;
                void main() {
                    vTriId = triId;
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

                flat in float vTriId;
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
                        if (abs(bestId.x-vTriId) <= 10. && abs(bestId.y - vMeshId) <= 10.) fragColor = vec4(1., 0., 0., 1.);
                        return;
                    }
                    fragColor = vec4(score, vMeshId, vTriId, 1.);
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
        });
    }

    evaluate() {
        const originalMaterials = {};
        let meshId = 0;
        this.meshById = new Map();
        const materials = [];
        this.scene.traverse(/**@param {Object3D} child*/child => {
            /**@type {Mesh} */
            let mesh;
            if (child.isMesh) {
                mesh = child;
                const side = mesh.material.side;
                originalMaterials[mesh] = mesh.material;
                const mat = this.material.clone();
                mesh.material = mat;
                mat.uniforms.render.value = false;
                materials.push(mat);
                if (side == BackSide) {
                    mesh.material.side = BackSide;
                    mesh.material.uniforms.isBackFace.value = true;
                }
                mesh.material.uniforms.bestId.value.copy(this.bestId);
                this.renderer.getSize(mesh.material.uniforms.resolution.value);
                this.#setMeshIds(mesh, meshId);
                meshId++;
            }
            else;

        });
        this.renderer.setRenderTarget(this.scoreRenderTarget);
        // this.renderer.setRenderTarget(this.renderTargets);
        this.renderer.render(this.scene, this.camera);
        this.#findBest();

        materials.forEach(mat => mat.uniforms.render.value = true);
        materials.forEach(mat => mat.uniforms.bestId.value.copy(this.bestId));
        this.renderer.setRenderTarget(null);
        this.renderer.render(this.scene, this.camera);


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
        const triCount = geometry.index.count / 3;

        const triIdArray = new Float32Array(geometry.index.count);
        const meshIdArray = new Float32Array(geometry.index.count);


        for (let i = 0; i < geometry.index.count; i += 3) {
            const id = i / 3;
            triIdArray[i] = id;
            triIdArray[i + 1] = id;
            triIdArray[i + 2] = id;

            meshIdArray[i] = meshId;
            meshIdArray[i + 1] = meshId;
            meshIdArray[i + 2] = meshId;
        }

        geometry.setAttribute('triId', new BufferAttribute(triIdArray, 1));
        geometry.setAttribute('meshId', new BufferAttribute(meshIdArray, 1));
    }

    #findBest() {
        const size = new Vector2();
        this.renderer.getSize(size);
        const scores = new Float32Array(size.x * size.y * 4);
        // const ids = new Float32Array(size.x * size.y * 4);

        this.renderer.readRenderTargetPixels(
            this.scoreRenderTarget,
            0, 0, size.x, size.y,
            scores
        );


        let bestScore = -Infinity;

        for (let i = 0; i < scores.length; i += 4) {
            const score = scores[i];

            if (score > bestScore) {
                bestScore = score;
                this.bestId.set(scores[i + 1], scores[i + 2]);
            }
        }
        // const mesh = this.meshById.get(bestId.x);
    }
}