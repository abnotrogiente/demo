import { FloatType, Mesh, NearestFilter, OrthographicCamera, PlaneGeometry, RGBAFormat, Scene, ShaderMaterial, Vector2, WebGLRenderTarget } from "three";
import { config } from "./config";

const vertexShader = /*glsl */ `

    out vec2 vUv;

    void main() {

        vUv = uv;

        gl_Position = vec4(position.xy,0.0,1.0);

    }

`

const fragmentShader = /*glsl */ `

    precision highp float;

    uniform sampler2D inputTexture;
    uniform vec2 texelSize;

    in vec2 vUv;

    vec4 best(vec4 a, vec4 b)
    {
        return (a.r > b.r) ? a : b;
    }

    void main()
    {
        // vec2 uv = vUv;
        vec2 uv = vUv - texelSize * 0.5;

        vec4 s0 = texture(inputTexture, uv);
        vec4 s1 = texture(inputTexture, uv + vec2(texelSize.x, 0.0));
        vec4 s2 = texture(inputTexture, uv + vec2(0.0, texelSize.y));
        vec4 s3 = texture(inputTexture, uv + texelSize);

        vec4 m = best(s0,s1);
        m = best(m,s2);
        m = best(m,s3);

        gl_FragColor = m;
    }
`

const reductionMaterial = new ShaderMaterial({

    uniforms: {

        inputTexture: { value: null },
        texelSize: { value: new Vector2() }

    },

    vertexShader,
    fragmentShader

});

const quad = new Mesh(

    new PlaneGeometry(2, 2),

    reductionMaterial

);

const scene = new Scene();

scene.add(quad);

const camera = new OrthographicCamera(-1, 1, 1, -1, 0, 1);

/**
 * 
 * @param {WebGLRenderTarget} scoreTarget 
 */
export function GPU_reduction(scoreTarget) {

    const renderer = config.renderer;

    let w = scoreTarget.width;
    let h = scoreTarget.height;

    while (w > 1 || h > 1) {
        const newW = Math.max(1, Math.floor(w / 2));
        const newH = Math.max(1, Math.floor(h / 2));

        const output = new WebGLRenderTarget(newW, newH, {

            type: FloatType,

            format: RGBAFormat,

            minFilter: NearestFilter,

            magFilter: NearestFilter,

            depthBuffer: false

        });

        reductionMaterial.uniforms.inputTexture.value = scoreTarget.texture;

        reductionMaterial.uniforms.texelSize.value.set(
            1 / w,
            1 / h
        );

        renderer.setRenderTarget(output);

        renderer.render(scene, camera);

        renderer.setRenderTarget(null);

        scoreTarget = output;

        w = newW;
        h = newH;
    }

    const pixel = new Float32Array(4);

    renderer.readRenderTargetPixels(
        scoreTarget,
        0,
        0,
        1,
        1,
        pixel
    );

    // console.log(pixel);

    const bestScore = pixel[0];
    const meshId = pixel[1];
    const vertexId = pixel[2];

    return {
        bestScore,
        vertexId,
        meshId
    };


    // pixel[0] = best score
    // pixel[1] = vertex ID
    // pixel[2] = mesh ID
}
