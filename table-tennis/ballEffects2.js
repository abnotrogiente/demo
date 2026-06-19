import { BufferAttribute, BufferGeometry, Camera, DataTexture, FloatType, InstancedBufferAttribute, LinearFilter, LineSegments, Material, MathUtils, Mesh, MeshNormalMaterial, PlaneGeometry, Points, RGBAFormat, Scene, ShaderMaterial, Vector2, Vector3, WebGLRenderer, WebGLRenderTarget } from "three";
import { EffectComposer, Line2, LineGeometry, LineMaterial, RenderPass, ShaderPass } from "three/examples/jsm/Addons.js";
import { tableDimensions } from "./constants";
import { config, Selector } from "./config";
import { BounceModes, configureSelector, getShaderConstantsFromEnum } from "./config";


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

        // this.#initDisplayPlane();

        configureSelector({
            selectorName: "Hawk Eye",
            variableParent: config.params.visualizations,
            variableName: "hawkEye",
            selectorType: Selector.CHECKBOX,
            callback: (value) => {
                line.visible = value;
            }
        })


    }



    update(dt) {
        if (!config.params.visualizations.hawkEye || config.paused) return;
        // this.effectsPass.uniforms.time.value = t;
        // return;

        // this.displayPlane.material.uniforms.ballPosition.value.x = this.ball.position.x;
        // this.displayPlane.material.uniforms.ballPosition.value.y = this.ball.position.z;

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
        // this.#texturePass();

        if (speed >= .1) this.prevSpeed.copy(this.speed);
        this.prevPos.copy(this.ball.position);

        // this.#texturePass();
    }
}
