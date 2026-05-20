import { BufferAttribute, BufferGeometry, DataTexture, FloatType, InstancedBufferAttribute, LineSegments, Material, MathUtils, Mesh, MeshNormalMaterial, PlaneGeometry, Points, RGBAFormat, Scene, ShaderMaterial, Vector2, Vector3 } from "three";
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
     */
    constructor(composer, ball, scene) {
        this.ball = ball;
        this.scene = scene;


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


        this.head = 0;

        this.#initDisplayPlane();


    }

    #initDisplayPlane() {
        this.displayPlane = new Mesh(
            new PlaneGeometry(tableDimensions.depth, tableDimensions.width).rotateX(-Math.PI / 2),
            new ShaderMaterial({
                transparent: true,
                uniforms: {
                    ballPosition: { value: new Vector2() }
                },
                vertexShader: /*glsl */ `
                    out vec3 vPos;
                    void main() {
                        vPos = position;
                        gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.);
                    }
                `,
                fragmentShader: /*glsl */ `
                    uniform vec2 ballPosition;
                    in vec3 vPos;
                    void main() {
                        // float c = length(vPos);
                        // gl_FragColor = vec4(1., 1., 1., c);
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

    update(dt) {
        // this.effectsPass.uniforms.time.value = t;
        // return;

        this.displayPlane.material.uniforms.ballPosition.value.x = this.ball.position.x;
        this.displayPlane.material.uniforms.ballPosition.value.y = this.ball.position.z;

        this.pointsArray[this.head * 3 + 0] = this.ball.position.x;
        this.pointsArray[this.head * 3 + 1] = this.ball.position.y;
        this.pointsArray[this.head * 3 + 2] = this.ball.position.z;

        const speed = this.ball.position.distanceTo(this.prevPos) / dt;
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

        this.prevPos.copy(this.ball.position);
    }
}
