import { Mesh, MeshNormalMaterial, MeshStandardMaterial, ShaderMaterial } from "three";


export class TableEffects {
    /**
     * 
     * @param {Mesh} surface 
     */
    constructor(surface) {
        this.surface = surface;
        console.log("MATERIAL : " + surface.material);
        // surface.material = new MeshStandardMaterial();
        surface.material.onBeforeCompile = /**@param {ShaderMaterial} shader*/(shader) => {
            console.log("BEFORE COMPILE");
            shader.uniforms.uTime = { value: 0 };
            shader.vertexShader = shader.vertexShader.replace(
                "#include <common>",
                /*glsl */ `
                #include <common>
                
                out vec3 vWorldPos;
                
                `
            );
            shader.vertexShader = shader.vertexShader.replace(
                "#include <worldpos_vertex>",
                /*glsl */ `
                #include <worldpos_vertex>
                
                // vWorldPos = worldPosition.xyz;
                vWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
                
                `
            );
            shader.fragmentShader = shader.fragmentShader.replace(
                "#include <common>",
                /*glsl */ `
                #include <common>
                
                uniform float uTime;
                uniform sampler2D bounceTex;
                in vec3 vWorldPos;

                float attenuation = 7.;
                // float PI = 3.141592654;

                // TODO pos n'a pas l'air bon faire un test en faisant une courbure simple sur toute la table (par exemple en forme de cuve)


                float rippleFunction(vec2 pos, vec2 center, float speed, float waveLength, float time) {
                    float dist = length(pos - center);
                    float amplitude = exp(-dist*attenuation);

                    float k = 2.*PI / waveLength;
                    float w = speed * k;

                    return amplitude * sin(dist*k + time*w);
                }

                vec3 getRippleNormal(vec2 diff, float speed, float waveLength, float time) {

                    float r = length(diff);

                    // avoid singularity
                    r = max(r, 0.0001);

                    float a = attenuation;

                    float k = 2.0 * PI / waveLength;
                    float w = speed * k;

                    float phase = k * r - w * time;

                    float expTerm = .1*exp(-a * r);

                    float dhdr =
                        expTerm *
                        (
                            k * cos(phase)
                            - a * sin(phase)
                        );

                    vec2 grad =
                        (diff / r) * dhdr;

                    return normalize(vec3(
                        -grad.x,
                        1.0,
                        -grad.y
                    ));
                }
                
                `
            );
            shader.fragmentShader = shader.fragmentShader.replace(
                "#include <normal_fragment_maps>",
                /*glsl */ `
                #include <normal_fragment_maps>

                // vec3 perturb = vec3(
                //     sin(vViewPosition.x * 40.0 + uTime * 4.0) * .5,
                //     0.0,
                //     cos(vViewPosition.z * 40.0 + uTime * 4.0) * .5);
                //     normal = normalize(normal + perturb);
                //     // normal = normal ;

                vec2 center = vec2(-0.3, 0.4);
                center = vec2(0., 0.);
                float speed = .3;
                float waveLength = .15;

                normal = getRippleNormal(vWorldPos.xz-center, speed, waveLength, uTime).xzy;
                // normal = vec3(0., 0., 1.);

                // float height = rippleFunction(vWorldPos.xz, center, speed, waveLength, uTime);

                // // float height = sin(vWorldPos.x * 30.0 + uTime * 3.0)* 0.02;

                // vec3 perturb = vec3(
                //     cos(vWorldPos.x * 30.0 + uTime * 3.0),
                //     0.0,
                //     0.0
                // );

                // normal = normalize(normal + perturb * 0.5);

                    `
            );
            // shader.fragmentShader = shader.fragmentShader.replace(
            //     "#include <opaque_fragment>",
            //     /*glsl */ `
            //     #include <opaque_fragment>

            //     // vec3 perturb = vec3(
            //     //     sin(vViewPosition.x * 40.0 + uTime * 4.0) * .5,
            //     //     0.0,
            //     //     cos(vViewPosition.z * 40.0 + uTime * 4.0) * .5);
            //     //     normal = normalize(normal + perturb);
            //     //     // normal = normal ;

            //     // vec2 center = vec2(-0.3, 0.4);
            //     vec2 center = vec2(0.);
            //     float c = length(vWorldPos.xz - center);
            //     // gl_FragColor = vec4(c ,c ,c , 1.);
            //     // center = vec2(0., 0.);
            //     float speed = .3;
            //     float waveLength = .15;
            //     // gl_FragColor = vec4(vec3(rippleFunction(vWorldPos.xz, center, speed, waveLength, uTime)), 1.);

            //     gl_FragColor = vec4(getRippleNormal(vWorldPos.xz, center, speed, waveLength, uTime)/2.+1., 1.);
            //     // gl_FragColor = vec4(getRippleNormal(vWorldPos.xz, center, speed, waveLength, uTime), 1.);


            //         `
            // );
            this.shader = shader;
        };


        surface.material.needsUpdate = true;
    }

    update(t) {
        if (this.shader) this.shader.uniforms.uTime.value = t;
        else console.log("shader does not exist");
    }
}