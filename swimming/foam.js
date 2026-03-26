import { config } from "./params";
import GL from "./lightgl";

class Foam {
    constructor() {
        this.mesh = new GL.Mesh.plane({ width: 2., height: 2., coords: true, normals: true });
        this.waterTexture = null;
        this.shader = new GL.Shader(`
            out highp vec2 pos;
            out highp vec2 vTextureCoord;


            void main(void) {
                gl_Position = vec4(gl_Vertex.xy, 0., 1.);
                pos = gl_Vertex.xz;

                vTextureCoord = gl_TexCoord.st;
            }
        `, /*glsl*/`
            in highp vec2 pos;
            in highp vec2 vTextureCoord;

            uniform sampler2D foamTexPrev;
            uniform sampler2D water;
            uniform float velThreshold;
            uniform float velMax;
            uniform float dispersion;
            uniform float dt;
            uniform float seed;
            uniform float timeVariation;
            uniform float spaceVariation;
            uniform float attenuation;
            uniform vec3 poolSize;

            out vec4 fragColor;

            #define M_PI 3.14159265358979323846

            float rand(vec2 co){return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);}
            float rand (vec2 co, float l) {return rand(vec2(rand(co), l));}
            float rand (vec2 co, float l, float t) {return rand(vec2(rand(co, l), t));}

            float perlin(vec2 p, float dim, float time) {
                vec2 pos = floor(p * dim);
                vec2 posx = pos + vec2(1.0, 0.0);
                vec2 posy = pos + vec2(0.0, 1.0);
                vec2 posxy = pos + vec2(1.0);
                
                float c = rand(pos, dim, time);
                float cx = rand(posx, dim, time);
                float cy = rand(posy, dim, time);
                float cxy = rand(posxy, dim, time);
                
                vec2 d = fract(p * dim);
                d = -0.5 * cos(d * M_PI) + 0.5;
                
                float ccx = mix(c, cx, d.x);
                float cycxy = mix(cy, cxy, d.x);
                float center = mix(ccx, cycxy, d.y);
                
                return center * 2.0 - 1.0;
            }
            
            float computeFoam(vec2 uv) {
                vec4 info = texture(water, uv);
                float velocity = info.g / dt;

                // if (velocity > .01) return 1.;

                float foam = 0.0;

                // velocity-based foam
                foam += smoothstep(velThreshold, velMax, length(velocity));

                // // curvature-based foam (difference with neighbors)
                // foam += smoothstep(curvThreshold, curvMax, abs(height - avgNeighborHeight));

                // // collision boost (optional)
                // foam += collisionImpact * collisionFactor;

                //TODO î

                // clamp
                foam = clamp(foam, 0.0, 1.0);
                return foam;
            }

            vec2 getPrevUV(vec2 uv) {
                vec4 info = texture(water, uv);
                float velocity = info.g / dt;

                float factor = (.1*dispersion + velocity*.01);

                float perlinDim = 1.;

                vec2 res = uv;

                vec2 pos = uv*poolSize.xz;

                res.x += perlin(pos.xy*spaceVariation + vec2(seed*timeVariation, 0.), perlinDim, 0.) * factor;
                res.y += perlin(pos.yx*spaceVariation + vec2(seed*timeVariation, 0.), perlinDim, 0.) * factor;
                //TODO
                // vec2 vel = texture(velocityTex, res).xy;
                // vec2 prevUV = res - vel * dt;

                // float oldFoam = texture(foamTexPrev, prevUV).r;
                return res;
            }

            void main() {

                float oldFoam = texture(foamTexPrev, getPrevUV(vTextureCoord)).r;
                float newFoam = computeFoam(vTextureCoord); // your velocity/curvature logic

                float foam = oldFoam * (1.-attenuation) + newFoam * 0.2;

                // foam = 1.;

                fragColor = vec4(foam, 0.0, 0.0, 1.0);

            }
        `);
    }

    updateFoam(dt) {
        if (!this.waterTexture) {
            console.log("NO WATER TO UPDATE FOAM");
            return;
        }
        this.foamTexNext.swapWith(this.foamTexPrev);
        this.foamTexNext.drawTo(() => {
            this.foamTexPrev.bind(0);
            // this.waterTexture.bind(1);
            config.water.textureA.bind(1);

            this.shader.uniforms({
                foamTexPrev: 0,
                water: 1,
                dt: dt,
                seed: config.time,
                poolSize: [config.params.simulation.poolSize.x, config.params.simulation.poolSize.y, config.params.simulation.poolSize.z],
                timeVariation: config.params.simulation.foam.timeVariation,
                spaceVariation: config.params.simulation.foam.spaceVariation,
                velThreshold: config.params.simulation.foam.velThreshold,
                velMax: config.params.simulation.foam.velMax,
                dispersion: config.params.simulation.foam.dispersion,
                attenuation: config.params.simulation.foam.attenuation
            }).draw(this.mesh);
        });
    }

    resetTextures(w, h, water) {
        this.foamTexPrev = new GL.Texture(w, h, { type: config.gl.FLOAT, filter: config.gl.LINEAR });
        this.foamTexNext = new GL.Texture(w, h, { type: config.gl.FLOAT, filter: config.gl.LINEAR });
        this.waterTexture = water;
    }
}

export { Foam };