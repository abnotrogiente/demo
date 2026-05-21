import { BufferAttribute, BufferGeometry, Camera, DataTexture, FloatType, InstancedBufferAttribute, LinearFilter, LineSegments, Material, MathUtils, Mesh, MeshNormalMaterial, PlaneGeometry, Points, RGBAFormat, Scene, ShaderMaterial, Vector2, Vector3, WebGLRenderer, WebGLRenderTarget } from "three";
import { EffectComposer, Line2, LineGeometry, LineMaterial, RenderPass, ShaderPass } from "three/examples/jsm/Addons.js";
import { tableDimensions } from "./constants";


const MAX_LENGTH = 10;
const RED = new Vector3(1., 0., 0.);
const BLUE = new Vector3(0., 0., 1.);
export class BallEffects {
    /**
     * 
     * @param {Mesh} ball 
     * @param {Scene} scene 
     * @param {WebGLRenderer} renderer
     */
    constructor(composer, ball, scene, renderer) {
        this.ball = ball;
        this.scene = scene;
        this.renderer = renderer;

        this.pointsArray = new Float32Array(MAX_LENGTH * 3);
        this.colorsArray = new Float32Array(MAX_LENGTH * 3);
        this.widths = new Float32Array(MAX_LENGTH - 1);
        let pts = [];
        let clr = [];
        let wdth = [];
        let counter = MAX_LENGTH;
        for (let i = 0; i < counter; i++) {
            pts.push(
                MathUtils.randFloat(-5, 5),
                MathUtils.randFloat(-5, 5),
                MathUtils.randFloat(-5, 5)
            )
            clr.push(Math.random(), Math.random(), Math.random());
            if (i < counter - 1) wdth.push(MathUtils.randInt(2, 20));
        }
        console.log(pts.length, clr.length, wdth.length);
        this.pointsArray = new Float32Array(pts);
        this.orderedPoints = new Float32Array((MAX_LENGTH) * 3);


        this.geometry = new LineGeometry();
        this.geometry.setPositions(this.pointsArray);
        // this.geometry.setColors(clr);
        this.colorsArray = new Float32Array(clr)
        this.geometry.setColors(this.colorsArray);
        // this.widths = new Float32Array(wdth);
        // this.geometry.setAttribute("linewidth", new InstancedBufferAttribute(new Float32Array(wdth), 1));
        this.geometry.setAttribute("linewidth", new InstancedBufferAttribute(this.widths, 1));
        console.log(this.geometry);

        let matLine = new LineMaterial({

            color: 0xffffff,
            //linewidth: 5, // in pixels
            vertexColors: true,
            //resolution:  // to be set by renderer, eventually
            dashed: false,
            alphaToCoverage: true,
            onBeforeCompile: shader => {
                shader.vertexShader = `
      ${shader.vertexShader}
    `.replace(`uniform float linewidth;`, `attribute float linewidth;`);
                //console.log(shader.vertexShader)
            }

        });

        let line = new Line2(this.geometry, matLine);
        line.computeLineDistances();
        line.scale.set(1, 1, 1);
        scene.add(line);

        this.prevPos = new Vector3();
        this.tmp1 = new Vector3();
        this.tmp2 = new Vector3();

        this.tmpvec2 = new Vector2();

        this.speed = new Vector3();
        this.prevSpeed = new Vector3();

        this.head = 0;

        this.#initDisplayPlane();


    }

    #initDisplayPlane() {
        this.planeGeometry = new PlaneGeometry(tableDimensions.depth, tableDimensions.width).rotateX(-Math.PI / 2);
        this.#initTexturePass();

        this.displayPlane = new Mesh(
            this.planeGeometry,
            new ShaderMaterial({
                transparent: true,
                uniforms: {
                    ballPosition: { value: new Vector2() },
                    tex: { value: this.currentRenderingTarget.texture }
                },
                vertexShader: /*glsl */ `
                    out vec3 vPos;
                    out vec2 vUv;
                    void main() {
                        vPos = position;
                        vUv = uv;
                        gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.);
                    }
                `,
                fragmentShader: /*glsl */ `
                    uniform vec2 ballPosition;
                    uniform sampler2D tex;
                    in vec3 vPos;
                    in vec2 vUv;
                    void main() {
                        // float c = length(vPos);
                        // gl_FragColor = vec4(1., 1., 1., c);
                        gl_FragColor = texture(tex, vUv);
                        return;
                        float shadowIntensity = length(vPos.xz - ballPosition);
                        gl_FragColor = vec4(0., 0., 0., pow(max(0.,1.-shadowIntensity),30.));

                    }
                `
            })
        );
        // plane.rotateX(-Math.PI / 2);
        this.displayPlane.translateY(tableDimensions.height / 2 + .004);
        this.scene.add(this.displayPlane);




    }

    #initTexturePass() {
        const rtA = new WebGLRenderTarget(window.innerWidth, window.innerHeight, {
            minFilter: LinearFilter,
            magFilter: LinearFilter,
            format: RGBAFormat,
        });

        const rtB = new WebGLRenderTarget(window.innerWidth, window.innerHeight, {
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
                previousTexture: { value: null }
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
                    // gl_FragColor = vec4(1.);
                    // gl_FragColor.a = 0.;
                    if (isInLine) {
                        gl_FragColor = vec4(1., 0., 0., 1.);
                    }
                    if (bounced) {
                        // gl_FragColor = vec4(1.);
                        // return;
                        vec2 diff = vPos - ballPosition;
                        float diffSq = dot(diff, diff);
                        if (diffSq <= .05) gl_FragColor = vec4(1., 0., 1., 2.);
                    }
                    // gl_FragColor.a = 0.;
                }
            `
        });

        this.texturePassQuad = new Mesh(this.planeGeometry, texturePassMaterial);
        this.texturePassScene = new Scene();
        this.texturePassScene.add(this.texturePassQuad);
        this.texturePassCamera = new Camera();
    }
    #texturePass() {
        this.texturePassQuad.material.uniforms.ballPosition.value.x = this.ball.position.x;
        this.texturePassQuad.material.uniforms.ballPosition.value.y = this.ball.position.z;
        this.texturePassQuad.material.uniforms.prevBallPosition.value.x = this.prevPos.x;
        this.texturePassQuad.material.uniforms.prevBallPosition.value.y = this.prevPos.z;
        // this.tmp1.copy(this.ball.position).sub(this.prevPos).normalize();
        this.tmpvec2.copy(this.texturePassQuad.material.uniforms.ballPosition.value);
        this.tmpvec2.sub(this.texturePassQuad.material.uniforms.prevBallPosition.value);
        this.tmpvec2.normalize();
        this.texturePassQuad.material.uniforms.lineDirection.value.copy(this.tmpvec2);

        this.texturePassQuad.material.uniforms.bounced.value = this.prevSpeed.y < 0 && this.speed.y > 0;
        console.log("speed: " + this.speed.y);
        console.log("prev speed: " + this.prevSpeed.y);
        console.log("\n\n");
        // this.texturePassQuad.material.uniforms.bounced.value = true;

        // this.texturePassQuad.material.uniforms.ballPosition.value.x = 0.;
        // this.texturePassQuad.material.uniforms.ballPosition.value.y = 1.;
        // this.texturePassQuad.material.uniforms.prevBallPosition.value.x = .5;
        // this.texturePassQuad.material.uniforms.prevBallPosition.value.y = 0.;
        // this.tmp1.copy(this.ball.position).sub(this.prevPos).normalize();
        // this.texturePassQuad.material.uniforms.lineDirection.value.set(-1., 0.);


        this.texturePassQuad.material.uniforms.previousTexture.value = this.previousRenderingTarget.texture;
        this.renderer.setRenderTarget(this.currentRenderingTarget);
        this.renderer.render(this.texturePassScene, this.texturePassCamera);
        // this.renderer.setRenderTarget(null);
        this.displayPlane.material.uniforms.tex.value = this.currentRenderingTarget.texture;
        [this.previousRenderingTarget, this.currentRenderingTarget] = [this.currentRenderingTarget, this.previousRenderingTarget];

    }

    update(dt) {
        // this.effectsPass.uniforms.time.value = t;
        // return;

        this.displayPlane.material.uniforms.ballPosition.value.x = this.ball.position.x;
        this.displayPlane.material.uniforms.ballPosition.value.y = this.ball.position.z;

        this.pointsArray[this.head * 3 + 0] = this.ball.position.x;
        this.pointsArray[this.head * 3 + 1] = this.ball.position.y;
        this.pointsArray[this.head * 3 + 2] = this.ball.position.z;

        this.speed.subVectors(this.ball.position, this.prevPos).divideScalar(dt);
        const speed = this.speed.length();
        const maxSpeed = 35;
        const minSpeed = 0;
        const coef = Math.min(1, (speed - minSpeed) / (maxSpeed - minSpeed));
        // const coef = 1.;
        // this.tmp1.copy(RED).multiplyScalar(coef).add(this.tmp2.set(BLUE).multiplyScalar(1 - coef));
        this.tmp1.copy(RED).multiplyScalar(coef).add(this.tmp2.copy(BLUE).multiplyScalar(1 - coef));
        this.colorsArray[this.head * 3 + 0] = this.tmp1.x;
        this.colorsArray[this.head * 3 + 1] = this.tmp1.y;
        this.colorsArray[this.head * 3 + 2] = this.tmp1.z;

        this.orderedPoints.set(this.pointsArray);

        for (let i = 0; i < MAX_LENGTH - 1; i++) this.widths[i] = 5;
        this.widths[this.head] = 0;


        this.head = (this.head + 1) % MAX_LENGTH;
        // this.posTextureLength++;

        const start = this.head;


        this.geometry.setPositions(this.orderedPoints);
        // this.geometry.setColors(this.colorsArray);
        this.geometry.setColors(this.colorsArray);
        this.geometry.attributes.position.needsUpdate = true;
        this.geometry.attributes.linewidth.needsUpdate = true;

        // this.posTexture.needsUpdate = true;
        // this.effectsPass.uniforms.posTextureHead.value = this.posTextureHead;
        this.#texturePass();

        if (speed >= .1) this.prevSpeed.copy(this.speed);
        this.prevPos.copy(this.ball.position);

        // this.#texturePass();
    }
}
