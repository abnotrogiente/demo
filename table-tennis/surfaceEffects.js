import { Camera, Color, FloatType, Float32BufferAttribute, LinearFilter, Mesh, MeshNormalMaterial, MeshPhongMaterial, MeshStandardMaterial, PlaneGeometry, Quaternion, RGBAFormat, ShaderMaterial, SphereGeometry, Vector2, Vector3, WebGLRenderer, WebGLRenderTarget, DoubleSide } from "three";
import { configureSelector, getShaderConstantsFromEnum } from "./config";
import { BounceModes, GlyphModes, MetaDataModes, MetaDataValueFromModeAndActor, SportActorInterationTypes } from "./constants";
import { Scene } from "three";
import { tableDimensions } from "./constants";
import { config } from "./config";
import { sport, SportActorInteraction } from "./sport";
import { CanvasTextTexture } from "./canvasTextTexture";


export class SurfaceEffects {
    /**
     * 
     * @param {Mesh} actor 
     * @param {(args: {prevPos: Vector3, pos: Vector3, prevSpeed: Vector3, speed: Vector3, surface: Mesh}) => bool} contactCondition 
     */
    constructor(actor, contactCondition) {
        /**@type {Mesh} */
        this.otherActor = null;

        this.canvasTextTexture = new CanvasTextTexture({
            width: 512,
            height: 512,
            font: "700 64px Inter",
            color: "#f00"
        });

        this.contactCondition = contactCondition;

        this.surface = sport.getSurfaceForEffects(actor);
        this.prevPos = new Vector3();
        this.speed = new Vector3();
        this.prevSpeed = new Vector3();
        this.tmpvec3 = new Vector3();
        // surface.material = new MeshStandardMaterial();
        let prevOnBeforeCompile = null;
        if (this.surface.material.onBeforeCompile) prevOnBeforeCompile = this.surface.material.onBeforeCompile;
        this.surface.material.onBeforeCompile = /**@param {ShaderMaterial} shader*/(shader) => {
            if (prevOnBeforeCompile) prevOnBeforeCompile(shader);
            // this.surface.material.onBeforeCompile2(shader);
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
            shader.uniforms.otherActorPosition = { value: new Vector3() };
            shader.uniforms.showShadow = { value: false };
            shader.uniforms.metaDataTexture = { value: this.canvasTextTexture.texture };
            // shader.uniforms.opacity = { value: 1. };
            shader.vertexShader = shader.vertexShader.replace(
                "#include <common>",
                /*glsl */ `
                #include <common>
                
                out vec3 vWorldPos;
                out vec2 vUv;
                out vec2 vScreenUv;
                // out vec3 vNormal;
                uniform vec2 tableDimensions;


                
                `
            );
            shader.vertexShader = shader.vertexShader.replace(
                "#include <worldpos_vertex>",
                /*glsl */ `
                #include <worldpos_vertex>
                
                // vWorldPos = worldPosition.xyz;
                vWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
                // vUv = vec2(vWorldPos.x, -vWorldPos.z) / tableDimensions + .5;
                // vNormal = normal;
                vUv = uv;
                vNormal = normalize(mat3(modelMatrix) * normal);
                
                `
            );

            shader.vertexShader = shader.vertexShader.replace(
                "#include <project_vertex>",
                /*glsl */ `
                #include <project_vertex>
                
                vScreenUv = gl_Position.xy / gl_Position.w;
                vScreenUv = vScreenUv * 0.5 + 0.5;
                
                `
            );

            shader.fragmentShader = shader.fragmentShader.replace(
                "#include <common>",
                /*glsl */ `
                #include <common>
                
                uniform sampler2D displayTexture;
                uniform sampler2D metaDataTexture;
                in vec3 vWorldPos;
                in vec2 vUv;
                in vec2 vScreenUv;
                // in vec3 vNormal;
                uniform int bounceMode;
                uniform vec3 otherActorPosition;
                uniform bool showShadow;
                // uniform float opacity;


                `+ getShaderConstantsFromEnum(BounceModes) + /*glsl */`


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

                mat3 rotationFromTo(vec3 v, vec3 e) {
                    float c = dot(v, e);

                    // Parallel vectors
                    if (c > 0.999999)
                        return mat3(1.0);

                    // Opposite vectors
                    if (c < -0.999999)
                    {
                        // Choose any perpendicular axis
                        vec3 axis = normalize(abs(v.x) < 0.9
                                            ? cross(v, vec3(1,0,0))
                                            : cross(v, vec3(0,1,0)));

                        float x = axis.x, y = axis.y, z = axis.z;

                        // 180° rotation: R = 2uu^T - I
                        return mat3(
                            2.*x*x-1., 2.*x*y,   2.*x*z,
                            2.*x*y,   2.*y*y-1., 2.*y*z,
                            2.*x*z,   2.*y*z,   2.*z*z-1.
                        );
                    }

                    vec3 vCross = cross(v, e);

                    mat3 K = mat3(
                        0.0,      vCross.z, -vCross.y,
                        -vCross.z, 0.0,       vCross.x,
                        vCross.y,-vCross.x,  0.0
                    );

                    return mat3(1.0) + K + K*K * (1.0 / (1.0 + c));
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

                    float amplitude0 = -info.a;
                    vec3 diff = info.rgb;
                    mat3 rotation = rotationFromTo(normal, vec3(0., 1., 0.));
                    mat3 inverseRotation = transpose(rotation);
                    diff = rotation * diff;


                    normal = getRippleNormal(diff.xz, speed, waveLength, uTime, amplitude0).xzy;
                    normal = inverseRotation * normal;
                }

                
                    `
            );
            shader.fragmentShader = shader.fragmentShader.replace(
                "#include <opaque_fragment>",
                /*glsl */ `
                #include <opaque_fragment>


                if (bounceMode != NONE || true) {
                

                    vec4 col = texture(displayTexture, vUv);

                    
                    if (col.a > 0.) {
                        gl_FragColor.rgb = col.a*col.rgb + (1.-col.a)*gl_FragColor.rgb;
                        // gl_FragColor = vec4(0., 1., 1., 1.);
                    }
                    // if (col.a > 0.) gl_FragColor.rgb = vec3(vUv, 0.);
                }
                
                if (bounceMode == RIPPLE) {
                    // gl_FragColor = col;
                }
                // gl_FragColor = vec4(vUv, 0., 1.);

                gl_FragColor.a = opacity;
                if (showShadow) {
                    vec3 fragToOther = otherActorPosition - vWorldPos;
                    vec3 normalizedVNormal = normalize(vNormal);
                    vec3 projection = otherActorPosition - dot(fragToOther, normalizedVNormal)*normalizedVNormal;
                    float l = length(projection - vWorldPos);
                    float shadowIntensity = pow(max(0.,1.-l),30.);
                    gl_FragColor = (1.-shadowIntensity)*gl_FragColor + shadowIntensity*vec4(0., 0., 0., 1.);
                    float shadowRadiusExt = .06;
                    float shadowRadiusIn = .04;
                    if (l <= shadowRadiusExt && l >= shadowRadiusIn ) gl_FragColor = vec4(1., 1., 0., 1.);
                }
                // gl_FragColor = vec4(1., 0., 0., 1.);

                vec4 metaDataColor = texture(metaDataTexture, vUv);
                if(metaDataColor.a > 0.1) gl_FragColor = metaDataColor;
                // gl_FragColor = vec4(1., 0., 0., 1.);

                    `
            );
            this.shader = shader;
            this.surface.material.userData.shader = shader;
        };


        this.surface.material.needsUpdate = true;

        this.#initTexturePass();
    }

    setOtherActor(actor) {
        this.otherActor = actor;
        this.otherActor.userData.speed = this.speed;
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

        this.texturePassMaterial = new ShaderMaterial({
            // transparent: true,
            uniforms: {
                otherActorPosition: { value: new Vector3() },
                prevotherActorPosition: { value: new Vector3() },
                lineDirection: { value: new Vector3() },
                lineStroke: { value: .01 },
                bounced: { value: false },
                previousTexture: { value: null },
                bounceMode: { value: config.params.visualizations.bounce },
                showTrace: { value: false }
            },
            vertexShader: /*glsl */ `
                out vec3 vPos;
                out vec2 vUv;
                out vec3 vNormal;
                void main() {
                    vPos = (modelMatrix * vec4(position, 1.0)).xyz;
                    // vPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
                    vUv = uv;
                    vNormal = normalize(mat3(modelMatrix) * normal);
                    // vNormal = vec3(0., 0., 1.);
                    gl_Position = vec4(uv*2.-1., 0., 1.);
                    // gl_Position = vec4(uv*2.-1., 0., 1.);

                }
            `,
            fragmentShader: /*glsl */ `
                in vec3 vPos;
                in vec2 vUv;
                in vec3 vNormal;
                uniform vec3 otherActorPosition;
                uniform vec3 prevotherActorPosition;
                uniform vec3 lineDirection;
                uniform sampler2D previousTexture;
                uniform float lineStroke;
                uniform bool bounced;
                uniform int bounceMode;
                uniform bool showTrace;

                `+ getShaderConstantsFromEnum(BounceModes) + /*glsl */`

                vec3 project(vec3 X) {
                    // vec3 fragToOther = otherActorPosition - vWorldPos;
                    // vec3 normalizedVNormal = normalize(vNormal);
                    // vec3 projection = otherActorPosition - dot(fragToOther, normalizedVNormal)*normalizedVNormal;

                    vec3 fragToX = X - vPos;
                    vec3 normalizedVNormal = normalize(vNormal);
                    // normalizedVNormal = vec3(1., 0., 0.);
                    return X - dot(fragToX, normalizedVNormal)*normalizedVNormal;
                }
                void main() {
                    // gl_FragColor = vec4(vUv, 0., 1.);
                    // return;
                    vec3 projectionPrev = project(prevotherActorPosition);
                    vec3 projectionCurr = project(otherActorPosition);


                    // float l = length(vec3(otherActorPosition.x, 0., otherActorPosition.z) - vPos);
                    // float shadowIntensity = pow(max(0.,1.-l),30.);
                    // gl_FragColor = (1.-shadowIntensity)*gl_FragColor + shadowIntensity*vec4(0., 0., 0., 1.);
                    // float shadowRadiusExt = .06;
                    // float shadowRadiusIn = .04;
                    // if (l <= shadowRadiusExt && l >= shadowRadiusIn ) gl_FragColor = vec4(1., 1., 0., 1.);
                    // return;


                    vec3 line = projectionCurr - projectionPrev; //P1P2
                    float lineLengthSq = dot(line, line);
                    vec3 diffToPrev = vPos - projectionPrev; //P1X
                    float distToPrevSq = dot(diffToPrev, diffToPrev); // ||P1X||²
                    
                    bool isInLine = false;
                    
                    // DEBUG: show the projected positions and line length
                    // gl_FragColor = vec4(normalize(vNormal) * 0.5 + 0.5, 1.0); // Show surface normal
                    // gl_FragColor = vec4(vec3(lineLengthSq / 0.1), 1.0); // Show line length squared
                    
                    // Only check line intersection if line has meaningful length
                    if (lineLengthSq > 0.0001) {
                        vec3 lineDir = normalize(line);
                        float coordinateOnLine = dot(diffToPrev, lineDir); // P1X . d
                        float lengthProjOnLineSq = coordinateOnLine*coordinateOnLine; // (P1X . d)²
                        bool isAfterPrevotherActor = coordinateOnLine >= 0.; // P1X . d >= 0
                        bool isBeforeotherActor = lengthProjOnLineSq <= lineLengthSq; // (P1X . d)² <= ||P1P2||²
                        bool isInRadius = distToPrevSq - lengthProjOnLineSq <= lineStroke*lineStroke; // ||P1X||² - (P1X . d)² <= r²
                        isInLine = isAfterPrevotherActor && isBeforeotherActor && isInRadius;
                    }
                    
                    gl_FragColor = texture(previousTexture, vUv);
                    gl_FragColor.a *= .96;
                    // isInLine = length(vPos - vec3(0.75, 0.5, 0.5)) <= 1.5;
                    if (isInLine && showTrace) {
                        gl_FragColor = vec4(0., 1., 1., 1.);
                    }
                    if (bounced && bounceMode != NONE) {
                        vec3 diff = vPos - projectionCurr;
                        float diffSq = dot(diff, diff);
                        if (bounceMode == RIPPLE) {
                            if (diffSq <= .1) {
                                gl_FragColor = vec4(diff, -.1);
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


        // Use the same geometry as the surface for the texture-pass mesh.
        // Clone it so the surface and the texture-pass mesh do not share the same geometry instance.
        const texturePassGeometry = this.surface.geometry.clone();
        this.texturePassQuad = new Mesh(texturePassGeometry, this.texturePassMaterial);
        this.texturePassQuad.frustumCulled = false;
        this.texturePassQuad.material.side = DoubleSide;

        this.surface.getWorldPosition(this.texturePassQuad.position);
        this.surface.getWorldQuaternion(this.texturePassQuad.quaternion);

        this.texturePassScene = new Scene();
        this.texturePassScene.add(this.texturePassQuad);
        this.texturePassCamera = new Camera();
    }
    #texturePass(dt) {
        if (!this.shader) return;
        // return;
        this.speed.subVectors(this.otherActor.position, this.prevPos).divideScalar(dt);
        // this.texturePassQuad.material.uniforms.otherActorPosition.value.x = this.otherActor.position.x;
        // this.texturePassQuad.material.uniforms.otherActorPosition.value.z = this.otherActor.position.z;
        this.texturePassQuad.material.uniforms.otherActorPosition.value.copy(this.otherActor.position);
        // this.shader.uniforms.otherActorPosition.value.x = this.otherActor.position.x;
        // this.shader.uniforms.otherActorPosition.value.z = this.otherActor.position.z;
        this.shader.uniforms.otherActorPosition.value.copy(this.otherActor.position);
        // this.texturePassQuad.material.uniforms.prevotherActorPosition.value.x = this.prevPos.x;
        // this.texturePassQuad.material.uniforms.prevotherActorPosition.value.z = this.prevPos.z;
        this.texturePassQuad.material.uniforms.prevotherActorPosition.value.copy(this.prevPos);
        // this.tmp1.copy(this.otherActor.position).sub(this.prevPos).normalize();
        this.tmpvec3.copy(this.texturePassQuad.material.uniforms.otherActorPosition.value);
        this.tmpvec3.sub(this.texturePassQuad.material.uniforms.prevotherActorPosition.value);
        this.tmpvec3.normalize();
        this.texturePassQuad.material.uniforms.lineDirection.value.copy(this.tmpvec3);

        // this.texturePassQuad.material.uniforms.bounced.value = this.prevSpeed.y < 0 && this.speed.y > 0;
        this.texturePassQuad.material.uniforms.bounced.value = this.contactCondition({
            prevPos: this.prevPos,
            pos: this.otherActor.position,
            speed: this.speed,
            prevSpeed: this.prevSpeed,
            surface: this.surface
        });

        this.texturePassQuad.material.uniforms.previousTexture.value = this.previousRenderingTarget.texture;
        config.renderer.setRenderTarget(this.currentRenderingTarget);
        if (this.bounceMode != BounceModes.NONE ||
            this.projectionInteraction && this.projectionInteraction.params.trace.value
        ) {
            this.texturePassCamera.copy(config.camera);
            config.renderer.render(this.texturePassScene, config.camera);
        }
        // config.renderer.setRenderTarget(null);
        this.shader.uniforms.displayTexture.value = this.currentRenderingTarget.texture;
        [this.previousRenderingTarget, this.currentRenderingTarget] = [this.currentRenderingTarget, this.previousRenderingTarget];

        this.prevPos.copy(this.otherActor.position);
        if (this.speed.dot(this.speed) >= .01) this.prevSpeed.copy(this.speed);

    }

    #cleanTextures() {
        if (!config.renderer) return;

        const previousClearColor = new Color();
        config.renderer.getClearColor(previousClearColor);
        const previousClearAlpha = config.renderer.getClearAlpha();

        const clearTarget = (target) => {
            if (!target) return;
            config.renderer.setClearColor(0x000000, 0);
            config.renderer.setRenderTarget(target);
            config.renderer.clear(true, true, true);
            config.renderer.setRenderTarget(null);
        };

        clearTarget(this.currentRenderingTarget);
        clearTarget(this.previousRenderingTarget);

        config.renderer.setClearColor(previousClearColor, previousClearAlpha);

        // if (this.shader) {
        //     this.shader.uniforms.displayTexture.value = null;
        // }

        // if (this.texturePassQuad?.material?.uniforms) {
        //     this.texturePassQuad.material.uniforms.previousTexture.value = null;
        // }
    }

    update(t, dt) {
        if (config.paused) return;
        if (this.projectionInteraction) {
            if (this.shader) this.shader.uniforms.showShadow.value = this.projectionInteraction.params.instantaneous.value;
            const prevTraceValue = this.texturePassQuad.material.uniforms.showTrace.value;
            this.texturePassQuad.material.uniforms.showTrace.value = this.projectionInteraction.params.trace.value;
            if (this.texturePassQuad.material.uniforms.showTrace.value != prevTraceValue) this.#cleanTextures();
        }
        if (this.bounceInteraction) {
            const prevBounceMode = this.bounceMode;
            this.bounceMode = this.bounceInteraction.params.bounce.value;
            if (prevBounceMode != this.bounceMode) this.#cleanTextures();
            this.texturePassQuad.material.uniforms.bounceMode.value = this.bounceMode;
            if (this.shader) this.shader.uniforms.bounceMode.value = this.bounceMode;
        }
        if (this.metaDataInteraction) {
            this.#updateMetaDataInteraction();
        }
        this.#texturePass(dt);
        if (this.shader) this.shader.uniforms.uTime.value = t;
        // else console.log("shader does not exist");
    }

    #updateMetaDataInteraction() {
        let val = MetaDataValueFromModeAndActor.get(this.metaDataInteraction.params.metaData.value)(this.otherActor);
        switch (this.metaDataInteraction.params.glyph.value) {
            case GlyphModes.TEXT:
                if (val.isVector3) val = val.length();
                val = this.speed.length(); // TODO ça devrait degager, le haut devrait suffire, pourquoi le haut n'est pas bon ?
                this.canvasTextTexture.setText("" + val);
                console.log("setting texture text : " + this.canvasTextTexture.text);
                break;
            default:
                break;
        }
    }

    /**
     * 
     * @param {SportActorInteraction} interaction 
     */
    addInteraction(interaction) {
        switch (interaction.type) {
            case SportActorInterationTypes.PROJECTION:
                this.projectionInteraction = interaction;
                break;
            case SportActorInterationTypes.BOUNCE:
                this.bounceInteraction = interaction;
                break;
            case SportActorInterationTypes.METADATA:
                this.metaDataInteraction = interaction;
                break;
            default:
                break;

        }
    }
}