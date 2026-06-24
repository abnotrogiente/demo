import { Camera, FloatType, LinearFilter, Mesh, MeshNormalMaterial, MeshStandardMaterial, PlaneGeometry, RGBAFormat, ShaderMaterial, Vector2, Vector3, WebGLRenderer, WebGLRenderTarget } from "three";
import { BounceModes, configureSelector, getShaderConstantsFromEnum } from "./config";
import { Selector } from "./constants";
import { Scene } from "three";
import { tableDimensions } from "./constants";
import { config } from "./config";


export class TableEffects {
    /**
     * 
     * @param {Mesh} surface 
     * @param {Mesh} ball 
     * @param {WebGLRenderer} renderer 
     */
    constructor(surface, ball, renderer) {
        this.surface = surface;
        this.ball = ball;
        this.renderer = renderer;
        this.prevPos = new Vector3();
        this.speed = new Vector3();
        this.prevSpeed = new Vector3();
        this.tmpvec2 = new Vector2();
        // surface.material = new MeshStandardMaterial();
        let prevOnBeforeCompile = null;
        if (surface.material.onBeforeCompile) prevOnBeforeCompile = surface.material.onBeforeCompile;
        surface.material.onBeforeCompile = /**@param {ShaderMaterial} shader*/(shader) => {
            if (prevOnBeforeCompile) prevOnBeforeCompile(shader);
            // surface.material.onBeforeCompile2(shader);
            if (!shader.fragmentShader.includes("uTime")) {
                shader.fragmentShader = shader.fragmentShader.replace(
                    "#include <common>",
                            /*glsl */ `
                            #include <common>
                            uniform float uTime;

                        `);
            }
            shader.uniforms.uTime ??= { value: 0 };
            shader.uniforms.displayTexture = { value: null };
            shader.uniforms.bounceMode = { value: config.params.visualizations.bounce };
            shader.uniforms.tableDimensions = { value: new Vector2(tableDimensions.depth, tableDimensions.width) };
            shader.uniforms.ballPosition = { value: new Vector2() };
            shader.uniforms.showShadow = { value: config.params.visualizations.showShadow };
            shader.vertexShader = shader.vertexShader.replace(
                "#include <common>",
                /*glsl */ `
                #include <common>
                
                out vec3 vWorldPos;
                out vec2 vUv;
                uniform vec2 tableDimensions;


                
                `
            );
            shader.vertexShader = shader.vertexShader.replace(
                "#include <worldpos_vertex>",
                /*glsl */ `
                #include <worldpos_vertex>
                
                // vWorldPos = worldPosition.xyz;
                vWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
                vUv = vec2(vWorldPos.x, -vWorldPos.z) / tableDimensions + .5;
                
                `
            );
            // shader.vertexShader = shader.vertexShader.replace(
            //     "#include <uv_vertex>",
            //     /*gglsl */`
            //     #include <uv_vertex>

            //     vUv = uv;
            //     `
            // );
            shader.fragmentShader = shader.fragmentShader.replace(
                "#include <common>",
                /*glsl */ `
                #include <common>
                
                uniform sampler2D displayTexture;
                in vec3 vWorldPos;
                in vec2 vUv;
                uniform int bounceMode;
                uniform vec2 ballPosition;
                uniform bool showShadow;


                `+ getShaderConstantsFromEnum(config.params.visualizations.BounceModes) + /*glsl */`


                float attenuation = 10.;
                // float PI = 3.141592654;

                // TODO pos n'a pas l'air bon faire un test en faisant une courbure simple sur toute la table (par exemple en forme de cuve)


                float rippleFunction(vec2 pos, vec2 center, float speed, float waveLength, float time) {
                    float dist = length(pos - center);
                    float amplitude = exp(-dist*attenuation);

                    float k = 2.*PI / waveLength;
                    float w = speed * k;

                    return amplitude * sin(dist*k + time*w);
                }

                vec3 getRippleNormal(vec2 diff, float speed, float waveLength, float time, float amplitude0) {

                    float r = length(diff);

                    // avoid singularity
                    r = max(r, 0.0001);

                    float a = attenuation;

                    float k = 2.0 * PI / waveLength;
                    float w = speed * k;

                    float phase = k * r - w * time;

                    float expTerm = amplitude0*exp(-a * r);

                    float dhdr = expTerm * (k * cos(phase) - a * sin(phase));

                    vec2 grad = (diff / r) * dhdr;

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

                if(bounceMode == RIPPLE) { 

                    vec2 center = vec2(-0.3, 0.4);
                    center = vec2(0., 0.);
                    float speed = .3;
                    float waveLength = .1;

                    vec4 info = texture(displayTexture, vUv);

                    vec2 diff = info.rg;
                    float amplitude0 = info.b;



                    normal = getRippleNormal(diff, speed, waveLength, uTime, amplitude0).xzy;
                }

                    `
            );
            shader.fragmentShader = shader.fragmentShader.replace(
                "#include <opaque_fragment>",
                /*glsl */ `
                #include <opaque_fragment>

                if (bounceMode != NONE) {
                

                    vec4 col = texture(displayTexture, vUv);

                    
                    if (col.a != 0.) gl_FragColor.rgb = col.a*col.rgb + (1.-col.a)*gl_FragColor.rgb;
                }
                
                if (bounceMode == RIPPLE) {
                    // gl_FragColor = col;
                }
                // gl_FragColor = vec4(vUv, 0., 1.);

                if (showShadow) {
                    float l = length(vWorldPos.xz - ballPosition);
                    float shadowIntensity = pow(max(0.,1.-l),30.);
                    gl_FragColor = (1.-shadowIntensity)*gl_FragColor + shadowIntensity*vec4(0., 0., 0., 1.);
                    float shadowRadiusExt = .06;
                    float shadowRadiusIn = .04;
                    if (l <= shadowRadiusExt && l >= shadowRadiusIn ) gl_FragColor = vec4(1., 1., 0., 1.);
                }
                    `
            );
            this.shader = shader;
        };


        surface.material.needsUpdate = true;

        this.#initTexturePass();
    }


    #initTexturePass() {
        const planeGeometry = new PlaneGeometry(tableDimensions.depth, tableDimensions.width).rotateX(-Math.PI / 2);
        const rtA = new WebGLRenderTarget(window.innerWidth, window.innerHeight, {
            type: FloatType,
            minFilter: LinearFilter,
            magFilter: LinearFilter,
            format: RGBAFormat,
        });

        const rtB = new WebGLRenderTarget(window.innerWidth, window.innerHeight, {
            type: FloatType,
            minFilter: LinearFilter,
            magFilter: LinearFilter,
            format: RGBAFormat,
        });


        this.currentRenderingTarget = rtA;
        this.previousRenderingTarget = rtB;

        const texturePassMaterial = new ShaderMaterial({
            // transparent: true,
            uniforms: {
                ballPosition: { value: new Vector2() },
                prevBallPosition: { value: new Vector2() },
                lineDirection: { value: new Vector2() },
                lineStroke: { value: .01 },
                bounced: { value: false },
                previousTexture: { value: null },
                bounceMode: { value: config.params.visualizations.bounce },
            },
            vertexShader: /*glsl */ `
                out vec2 vPos;
                out vec2 vUv;
                void main() {
                    vPos = position.xz;
                    vUv = uv;
                    gl_Position = vec4(uv*2.-1., 0., 1.);
                }
            `,
            fragmentShader: /*glsl */ `
                in vec2 vPos;
                in vec2 vUv;
                uniform vec2 ballPosition;
                uniform vec2 prevBallPosition;
                uniform vec2 lineDirection;
                uniform sampler2D previousTexture;
                uniform float lineStroke;
                uniform bool bounced;
                uniform int bounceMode;

                `+ getShaderConstantsFromEnum(config.params.visualizations.BounceModes) + /*glsl */`
                void main() {
                    float c = length(vPos);
                    // gl_FragColor = vec4(c, c, c, 1.);
                    // return;
                    vec2 line = ballPosition - prevBallPosition; //P1P2
                    vec2 diffToPrev = vPos - prevBallPosition; //P1X
                    float distToPrevSq = dot(diffToPrev, diffToPrev); // ||P1X||²
                    float coordinateOnLine = dot(diffToPrev, lineDirection); // P1X . d
                    // float coordinateOnLine = dot(diffToPrev, normalize(line)); // P1X . d
                    float lengthProjOnLineSq = coordinateOnLine*coordinateOnLine; // (P1X . d)²
                    bool isAfterPrevBall = coordinateOnLine >= 0.; // P1X . d >= 0
                    bool isBeforeBall = lengthProjOnLineSq <= dot(line, line); // (P1X . d)² <= ||P1P2||²
                    bool isInRadius = distToPrevSq - lengthProjOnLineSq <= lineStroke*lineStroke; // ||P1X||² - (P1X . d)² <= r²
                    bool isInLine = isAfterPrevBall && isBeforeBall && isInRadius;
                    // bool isInLine =isBeforeBall;
                    gl_FragColor = texture(previousTexture, vUv);
                    gl_FragColor.a *= .96;
                    if (bounceMode == RIPPLE) gl_FragColor.b *= .96;
                    // gl_FragColor = vec4(1.);
                    // gl_FragColor.a = 0.;
                    if (isInLine) {
                        gl_FragColor = vec4(0., 1., 1., 1.);
                    }
                    if (bounced) {
                        vec2 diff = vPos - ballPosition;
                        float diffSq = dot(diff, diff);
                        if (bounceMode == RIPPLE) {
                            if (diffSq <= .1) {
                                gl_FragColor = vec4(diff, .1, 0.);
                            }
                            return;
                        }
                        // gl_FragColor = vec4(1.);
                        // return;
                        if (diffSq <= .05) gl_FragColor = vec4(1., 0., 1., 2.);
                    }
                    // gl_FragColor.a = 0.;
                }
            `
        });


        // configureSelector("Bounce Mode", config.params.visualizations, "bounce", BounceModes, (value) => {
        configureSelector({
            selectorName: "Bounce Mode",
            variableParent: config.params.visualizations,
            variableName: "bounce",
            variableEnum: BounceModes,
            selectorType: Selector.SELECT,
            callback: (value) => {
                this.shader.uniforms.bounceMode.value = value;
                texturePassMaterial.uniforms.bounceMode.value = value;
            }
        });

        configureSelector({
            selectorName: "Show Shadow",
            variableParent: config.params.visualizations,
            variableName: "showShadow",
            selectorType: Selector.CHECKBOX,
            callback: (value) => {
                this.shader.uniforms.showShadow.value = value;
            }
        });

        this.texturePassQuad = new Mesh(planeGeometry, texturePassMaterial);
        this.texturePassScene = new Scene();
        this.texturePassScene.add(this.texturePassQuad);
        this.texturePassCamera = new Camera();
    }
    #texturePass(dt) {
        if (!this.shader) return;
        this.speed.subVectors(this.ball.position, this.prevPos).divideScalar(dt);
        this.texturePassQuad.material.uniforms.ballPosition.value.x = this.ball.position.x;
        this.texturePassQuad.material.uniforms.ballPosition.value.y = this.ball.position.z;
        this.shader.uniforms.ballPosition.value.x = this.ball.position.x;
        this.shader.uniforms.ballPosition.value.y = this.ball.position.z;
        this.texturePassQuad.material.uniforms.prevBallPosition.value.x = this.prevPos.x;
        this.texturePassQuad.material.uniforms.prevBallPosition.value.y = this.prevPos.z;
        // this.tmp1.copy(this.ball.position).sub(this.prevPos).normalize();
        this.tmpvec2.copy(this.texturePassQuad.material.uniforms.ballPosition.value);
        this.tmpvec2.sub(this.texturePassQuad.material.uniforms.prevBallPosition.value);
        this.tmpvec2.normalize();
        this.texturePassQuad.material.uniforms.lineDirection.value.copy(this.tmpvec2);

        this.texturePassQuad.material.uniforms.bounced.value = this.prevSpeed.y < 0 && this.speed.y > 0;
        // console.log("speed: " + this.speed.y);
        // console.log("prev speed: " + this.prevSpeed.y);
        // console.log("\n\n");
        // this.texturePassQuad.material.uniforms.bounced.value = true;

        // this.texturePassQuad.material.uniforms.ballPosition.value.x = 0.;
        // this.texturePassQuad.material.uniforms.ballPosition.value.y = 1.;
        // this.texturePassQuad.material.uniforms.prevBallPosition.value.x = .5;
        // this.texturePassQuad.material.uniforms.prevBallPosition.value.y = 0.;
        // this.tmp1.copy(this.ball.position).sub(this.prevPos).normalize();
        // this.texturePassQuad.material.uniforms.lineDirection.value.set(-1., 0.);


        this.texturePassQuad.material.uniforms.previousTexture.value = this.previousRenderingTarget.texture;
        this.renderer.setRenderTarget(this.currentRenderingTarget);
        if (config.params.visualizations.bounce != BounceModes.NONE) this.renderer.render(this.texturePassScene, this.texturePassCamera);
        // this.renderer.setRenderTarget(null);
        this.shader.uniforms.displayTexture.value = this.currentRenderingTarget.texture;
        [this.previousRenderingTarget, this.currentRenderingTarget] = [this.currentRenderingTarget, this.previousRenderingTarget];

        this.prevPos.copy(this.ball.position);
        if (this.speed.dot(this.speed) >= .01) this.prevSpeed.copy(this.speed);

    }

    update(t, dt) {
        if (config.paused) return;
        this.#texturePass(dt);
        if (this.shader) this.shader.uniforms.uTime.value = t;
        else console.log("shader does not exist");
    }
}