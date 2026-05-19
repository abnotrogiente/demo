import { BufferAttribute, BufferGeometry, DataTexture, FloatType, InstancedBufferAttribute, LineSegments, Material, MathUtils, Mesh, Points, RGBAFormat, Scene, ShaderMaterial, Vector3 } from "three";
import { EffectComposer, Line2, LineGeometry, LineMaterial, RenderPass, ShaderPass } from "three/examples/jsm/Addons.js";


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
        // this.posArray = new Float32Array(MAX_LENGTH * 3);

        // this.widths = new Float32Array(MAX_LENGTH);

        // this.geometry = new BufferGeometry();
        // this.geometry = new LineGeometry();
        // this.geometry.setPositions(this.posArray);
        // // this.geometry.setColors(colors);
        // this.geometry.setAttribute("linewidth",
        //     new InstancedBufferAttribute(this.widths, 1)
        // );

        // this.geometry.setAttribute('position', new BufferAttribute(this.posArray, 3));

        // // source: https://discourse.threejs.org/t/how-to-change-line-width-in-shader/27658/3

        // const lineMaterial = new LineMaterial({
        //     color: 0xffffff,
        //     vertexColors: true,
        //     //resolution:  // to be set by renderer, eventually
        //     dashed: false,
        //     alphaToCoverage: true,
        //     onBeforeCompile: shader => {
        //         shader.vertexShader = `
        //         ${shader.vertexShader}
        //         `.replace(`uniform float linewidth;`, `attribute float linewidth;`);
        //         //console.log(shader.vertexShader)
        //     }

        // });

        // const line = new Line2(this.geometry, lineMaterial);
        // line.computeLineDistances();
        // line.scale.set(1, 1, 1);
        // scene.add(line);



        this.head = 0;


    }
    update(dt) {
        // this.effectsPass.uniforms.time.value = t;
        // return;

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
        // this.colorsArray[this.head * 3 + 0] = 1.;
        // this.colorsArray[this.head * 3 + 1] = 1.;
        // this.colorsArray[this.head * 3 + 2] = 1.;


        // for (let i = 0; i < MAX_LENGTH; i++) {

        //     const src = ((this.head + i) % MAX_LENGTH) * 3;
        //     const dst = i * 3;

        //     this.orderedPoints[dst + 0] = this.pointsArray[src + 0];
        //     this.orderedPoints[dst + 1] = this.pointsArray[src + 1];
        //     this.orderedPoints[dst + 2] = this.pointsArray[src + 2];
        // }
        // for (let i = -3; i < 0; i++) this.orderedPoints[MAX_LENGTH * 3 + i] = NaN;
        // for (let i = 0; i < 3; i++) this.orderedPoints[i] = NaN;

        // this.pointsArray.copyWithin(this.orderedPoints, 0, 3 * MAX_LENGTH);
        this.orderedPoints.set(this.pointsArray);

        // for (let i = -3; i < 3; i++) this.orderedPoints[(this.head * 3 + i) % (MAX_LENGTH * 3)] = NaN;

        for (let i = 0; i < MAX_LENGTH - 1; i++) this.widths[i] = 5;
        this.widths[this.head] = 0;




        // this.widths[this.head] = 2 + this.ball.position.y * 10;
        // this.posArray[this.head * 3 + 3] = 1.;

        // console.log("x : " + this.ball.position.x);

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
