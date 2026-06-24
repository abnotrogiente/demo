import { Camera, Mesh, Raycaster, Scene, ShaderMaterial, Vector2, Vector3, WebGLRenderer } from "three";

class Selector {
    /**
     * 
     * @param {Camera} camera 
     * @param {WebGLRenderer} renderer 
     */
    constructor(camera, renderer) {
        this.camera = camera;
        this.renderer = renderer;
        const near = 0;
        const far = 100;
        const rayCaster = new Raycaster();

        this.mouse = new Vector2(-5, -5);

        const onMouseMove = (event) => {
            const canvas = event.target;
            const box = canvas.getBoundingClientRect(),
            const x = event.clientX - box.left,
            const y = event.clientY - box.top;
            this.mouse.x = (x / canvas.scrollWidth) * 2 - 1;
            this.mouse.y = - (y / canvas.scrollHeight) * 2 + 1;
            console.log("Mouse Pos : " + JSON.stringify(this.mouse))
        }

        renderer.domElement.addEventListener("mousemove", onMouseMove);
    }

    /**
     * 
     * @param {Scene} scene 
     */
    updateObjectShaders(scene) {
        scene.traverse(/**@param {Mesh} mesh*/mesh => {
            if (mesh.isMesh) {
                mesh.material.onBeforeCompile =
                    /**
                     * 
                     * @param {ShaderMaterial} shader 
                     */
                    shader => {
                        shader.uniforms.isSelected = { value: false };

                        shader.fragmentShader = shader.fragmentShader.replace(
                            "#include <common>",
                            /*glsl */ `
                            #include <common>
                            uniform bool isSelected;

                        `);
                        shader.fragmentShader.replace(
                            "#include <opaque_fragment>",
                            /*glsl */ `
                            #include <opaque_fragment>
                            if (isSelected) {
                                float glowIntensity = .5;
                                gl_FragColor = (1. - glowIntensity)*gl_FragColor + glowIntensity*vec4(1., 1., 0., 1.);
                            }
                        `);
                    }
            }
        })
    }
}


