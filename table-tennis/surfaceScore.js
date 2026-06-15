import { BackSide, Camera, DoubleSide, FloatType, GLSL3, LinearFilter, Mesh, Object3D, RGBAFormat, Scene, ShaderMaterial, Vector2, WebGLRenderer, WebGLRenderTarget } from "three";



export class SurfaceScore {
    /**
     * 
     * @param {Scene} scene 
     * @param {WebGLRenderer} renderer 
     * @param {Camera} camera 
     */
    constructor(scene, renderer, camera) {
        this.scene = scene;
        this.renderer = renderer;
        this.camera = camera;
        /**@type {ShaderMaterial} */
        this.material = new ShaderMaterial({
            transparent: true,
            uniforms: {
                isBackFace: { value: false },
                resolution: { value: new Vector2() }
            },
            vertexShader: /*glsl */ `
                out vec3 vNormal;
                out vec3 cameraForward;
                out float debug;
                out float depth;
                uniform bool isBackFace;
                void main() {
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
                in vec3 vNormal;
                in vec3 cameraForward;
                in float debug;
                in float depth;
                uniform float normalFactor;
                uniform float posFactor;
                uniform float depthFactor;
                uniform vec2 resolution;
                void main() {
                    float scoreNormal = -dot(vNormal, cameraForward);
                    vec2 ndc = (gl_FragCoord.xy / resolution) * 2.0 - 1.0;
                    // float scorePos = length(clipPos.xy);
                    float scorePos = 1.-length(ndc);
                    float scoreDepth = max(1.-depth/5., 0.);
                    float score = .33*scoreNormal + .33*scorePos + .33*scoreDepth;
                    // score = scoreDepth;
                    gl_FragColor = vec4(vec3(score), 1.);
                    // gl_FragColor = vec4(vNormal, 1.);
                    if (debug != 0.) gl_FragColor = vec4(1., 0., 0., 1.);
                } //TODO faire les id par vertex, triangle ou bien par objet, puis trouver le max de la texture de score par réduction et associer l'id du max, ensuite colorier la surface correspondante et faire diminiuer son score tant qu'elle est séléctionnée mais pas trop rapidement parce qu'on ne veut pas changer directement
            `
        });

        this.scoreRenderTarget = new WebGLRenderTarget(window.innerWidth, window.innerHeight, {
            type: FloatType,
            minFilter: LinearFilter,
            magFilter: LinearFilter,
            format: RGBAFormat,
        });
    }

    evaluate() {
        const originalMaterials = {};
        this.scene.traverse(/**@param {Object3D} child*/child => {
            /**@type {Mesh} */
            let mesh;
            if (child.isMesh) {
                mesh = child;
                const side = mesh.material.side;
                originalMaterials[mesh] = mesh.material;
                mesh.material = this.material.clone();
                if (side == BackSide) {
                    mesh.material.side = BackSide;
                    mesh.material.uniforms.isBackFace.value = true;
                }
                this.renderer.getSize(mesh.material.uniforms.resolution.value);
                // mesh.material.side = side;
            }
            else;

        });
        // this.renderer.setRenderTarget(this.scoreRenderTarget);
        this.renderer.render(this.scene, this.camera);

        //TODO e

    }
}