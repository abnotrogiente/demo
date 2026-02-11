import GL from "./lightgl.js";


const sparksHelper = `
/// The amount of 'sparks' to use (spark count between about 73-206 is known to crash Win7/Chrome)
uniform float iTime;
uniform vec2 iResolution;
/// The amount of 'sparks' to use (spark count between about 73-206 is known to crash Win7/Chrome)
#define SPARKS 40    // Low-end
//#define SPARKS 100   // Low-mid
//#define SPARKS 210   // Mid-high (recommended)
//#define SPARKS 500   // High
//#define SPARKS 1000  // Really High
//#define SPARKS 2000  // Insane

/// Switch between defines to choose different sets of settings
#define ORIGINAL_SPARKS
//#define WATER_SPOUT
//#define FIRE_STREAM
//#define STAR_BOMB
//#define WATER_LINE

#define BRIGHTNESS 1.0   /// 0.0 == auto-brightness

#ifdef ORIGINAL_SPARKS
	#define SPEED_FACTOR 1.5
	#define LENGTH_FACTOR 0.6
	#define GROUP_FACTOR 1.0
	#define SPREAD_FACTOR 0.3
	#define MIN_ANGLE 0.1
	#define RAND_FACTOR 1.0
#endif

#ifdef WATER_SPOUT
	#define SPEED_FACTOR 1.5
	#define LENGTH_FACTOR 1.5
	#define GROUP_FACTOR 0.5
	#define SPREAD_FACTOR 0.1
	#define MIN_ANGLE 0.1
	#define RAND_FACTOR 1.0
	#define BLUE
#endif

#ifdef FIRE_STREAM
	#define SPEED_FACTOR 1.5
	#define LENGTH_FACTOR 1.5
	#define GROUP_FACTOR 1.0
	#define SPREAD_FACTOR 0.1
	#define MIN_ANGLE 0.1
	#define RAND_FACTOR 0.0
#endif

#ifdef STAR_BOMB
	#define SPEED_FACTOR 0.5
	#define LENGTH_FACTOR 0.2
	#define GROUP_FACTOR 1.0
	#define SPREAD_FACTOR 0.2
	#define MIN_ANGLE 0.3
	#define RAND_FACTOR 0.0
	#define DOT_SPREAD
#endif

#ifdef WATER_LINE
	#define SPEED_FACTOR 1.5
	#define LENGTH_FACTOR 1.5
	#define GROUP_FACTOR 0.7
	#define SPREAD_FACTOR 0.1
	#define MIN_ANGLE 0.1
	#define RAND_FACTOR 1.0
	#define LINEAR_SPREAD
	#define BLUE
#endif

const float brightness = (float(BRIGHTNESS) == 0.0) ? 200.0 / (float(SPARKS) + 40.0) : float(BRIGHTNESS);

vec3 sampleAngle(float u1) {
	float r = sqrt(u1);
	// return r * sparkDirection - vec3(0., -sqrt(1. - u1), 0.);
	return vec3(-r * -0.809017, -sqrt(1.0 - u1), r * 0.587785);
}

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898,78.233))) * 43758.5453);
}

float spread(vec2 co) {
#ifdef LINEAR_SPREAD
	return fract(co.x * 0.618033988749895);
#else
	#ifdef DOT_SPREAD
		return fract(co.x * 1.0);
	#else
    	return fract(sin(dot(co.xy, vec2(12.9898,78.233))) * 43758.5453);
	#endif
#endif
}

float planeIntersection(vec3 rpos, vec3 rdir, vec3 n) {
	return -dot(n, rpos) / dot(rdir, n);
}

float cylinder(vec3 pos, vec3 dir, float len) {
	float x = dot(pos, dir);
	return max(max(length(pos - dir * x) - 0.2, x), -x-len);
}

vec4 color(float age) {
	float f = 1.0 - age * 0.05;
	#ifdef BLUE
	return vec4(0.2*f*f, 0.5*f*f+0.05, 0.5*f+0.4, min(f*2.0, 1.0));
	#else
	return vec4(0.5*f+0.4, 0.5*f*f+0.05, 0.2*f*f, min(f*2.0, 1.0));
	#endif
}

vec3 trace(vec3 rpos, vec3 rdir, vec2 fragCoord, vec3 center) {
	float sparkT = planeIntersection(rpos - center, rdir, vec3(0.587785, 0.0, -0.809017));
	// float sparkT = planeIntersection(rpos - center, rdir, sparkPlaneNormal);
	float floorT =  planeIntersection(rpos - center, rdir, waterNormal);
	// float floorT =  planeIntersection(rpos - center, rdir, vec3(0., 1., 0.));
	
	vec4 col = vec4(0.0, 0.0, 0.0, rdir.y < 0.0 ? 1.0 : 1.0);
	vec3 sparkCol = vec3(0.0, 0.0, 0.0);
	
	vec3 floorPos = rpos + rdir * floorT + center;
	vec3 sparkPos = rpos + rdir * sparkT + center;
	
	float time = iTime * SPEED_FACTOR;
	for (int i = 0; i < SPARKS; i++)
	{
		// Calculate spark position and velocity
		float a = spread(vec2(i, 1.0))*SPREAD_FACTOR+MIN_ANGLE;
		float b = spread(vec2(i, 3.0))*RAND_FACTOR;
		float startTime = spread(vec2(i, 5.0)) * GROUP_FACTOR;
		vec3 dir = sampleAngle(a) * 10.0;
		
		vec3 start = dir * (1.35 + b * 0.3);
		vec3 force = -start * 0.02 + vec3(0.0, 1.2, 0.0);
		float c = fract(time + startTime) * 20.0;
		vec3 offset = -center + start * c + force * c * c * 0.5;
		
		vec3 v = start + force * c;
		float vel = length(v) * LENGTH_FACTOR;
		vec3 vdir = normalize(-v);
		vec4 sc = color(c);
				
		// Shade floor
		if (true || rdir.y < 0.0) {
			vec3 spos = floorPos + offset - center;
			float h = cylinder(spos, vdir, vel);
						
			float invRad = 10.0;
			float dist = h * 0.05;
			float atten = 1.0 / (1.0 + 2.0 * invRad * dist + invRad * invRad * dist * dist);
			if (floorT <= sparkT && sparkT > 0.0) {
				dist += 0.8;
				atten += 1.0 / (1.0 + 100.0*dist*dist*dist);
			}
			col += vec4(sc.xyz * sc.w * atten, 0.0) * brightness;
		}
	
		// Shade sparks
		if (floorT > sparkT && sparkT > 0.0 || floorT < 0.0) {
			vec3 spos = sparkPos + offset - center;			
			float h = cylinder(spos, vdir, vel);
				
			if (h < 0.0) {
				sparkCol += vec3(sc.xyz * sc.w);
			} else {
				float dist = h * 0.05 + 0.8;
				float atten = 1.0 / (1.0 + 100.0 * dist * dist * dist);
				//sparkCol += sc.xyz * sc.w * (atten + clamp(1.0 - h * sparkT * 0.05, 0.0, 1.0));
			}
		}
	}
	

	vec3 final = col.xyz + sparkCol * brightness;
	return final + vec3(rand(vec2(fragCoord.x * fragCoord.y, iTime))) * 0.002;
}

// Ray-generation
vec3 sparks(vec2 px, vec3 center) {
    // px = 1. - px;
	vec2 rd = (px / iResolution.yy - vec2(iResolution.x/iResolution.y*0.5-0.5, 0.0)) * 2.0 - 1.0;
    rd *= -1.;
	vec3 rdir = normalize(vec3(rd.x*0.5, rd.y*0.5, 1.0));
    vec3 offset = (gl_ModelViewMatrix * vec4(center, 1.)).xyz;
    // offset *= 0.;
	return trace(vec3(0., 0., 0.), rdir, px, offset);
	return trace(vec3(-40.0, 20.0, -150), rdir, px, offset);
    // return trace(-offset, rdir, px);
	//return trace(vec3(-4.0, 2.0, -15) + offset, rdir, px);
}

`;

//
// start here
//
class Video {
    constructor(gl, src) {
        /**@type {WebGLRenderingContext} */
        this.gl = gl
        this.copyVideo = false;
        this.show = false;
        // Only continue if WebGL is available and working
        if (gl === null) {
            alert(
                "Unable to initialize WebGL. Your browser or machine may not support it."
            );
            return;
        }
        // Set clear color to black, fully opaque
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        // Clear the color buffer with specified clear color
        gl.clear(gl.COLOR_BUFFER_BIT);

        // Vertex shader program

        this.shader = new GL.Shader(`
    varying highp vec2 vTextureCoord;
    varying vec3 waterNormal;
    varying vec3 sparkPlaneNormal;
    varying vec3 sparkDirection;

    void main(void) {
        gl_Position = vec4(gl_Vertex.xz, 0., 1.);
        waterNormal = (gl_ModelViewMatrix * vec4(0., 1., 0., 0.)).xyz;
        sparkPlaneNormal = (gl_ModelViewMatrix * vec4(-1., 0., 0., 0.)).xyz;
        sparkDirection = (gl_ModelViewMatrix * vec4(0., 0., -1., 0.)).xyz;
        vTextureCoord = gl_TexCoord.st;
    }
`, `
    varying highp vec2 vTextureCoord;
    varying vec3 waterNormal;
    varying vec3 sparkPlaneNormal;
        varying vec3 sparkDirection;


    uniform sampler2D uSampler;

    ` + sparksHelper + `

    void main(void) {
        highp vec4 texelColor = texture2D(uSampler, vTextureCoord);
        gl_FragColor = vec4(texelColor.rgb, 0.5);
        vec3 spark = pow(sparks(gl_FragCoord.xy, vec3(0., 0., 0.)), vec3(0.4545));
        gl_FragColor = vec4(mix(gl_FragColor.rgb, spark, .5), max(0.5, length(spark)));
        gl_FragColor = vec4(spark, 1.);
        // gl_FragColor = vec4(1, 0, 0, 1);
    }
`);

        this.mesh = GL.Mesh.plane({ width: 2., height: 2., coords: true, normals: true });
        this.mesh.transform(GL.Matrix.rotate(90, 1, 0, 0));
        this.mesh.transform(GL.Matrix.translate(0, .1, 0));
        // Using `this.shader` (lightgl) for rendering; skip manual
        // initShaderProgram/vsSource/fsSource which were undefined.
        this.programInfo = null;

        // Here's where we call the routine that builds all the
        // objects we'll be drawing.
        // this.buffers = initBuffers(gl);

        this.texture = this.initTexture();
        this.video = this.setupVideo(src);

        // Flip image pixels into the bottom-to-top order that WebGL expects.
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);

    }

    render(time) {
        if (!this.show) return;
        if (this.copyVideo) {
            this.updateTexture();
        }

        // Set up the mesh if not already compiled
        if (!this.mesh.vertexBuffers || !this.mesh.vertexBuffers.vertex) {
            this.mesh.compile();
        }

        // this.gl.enable(this.gl.CULL_FACE);
        this.gl.enable(this.gl.BLEND);
        this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
        this.gl.activeTexture(this.gl.TEXTURE0);
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.texture);
        this.shader.uniforms({
            uSampler: 0,
            iTime: time,
            iResolution: [this.gl.canvas.width, this.gl.canvas.height]
        }).draw(this.mesh);
        this.gl.disable(this.gl.BLEND);

    }


    initTexture() {
        const texture = this.gl.createTexture();
        this.gl.bindTexture(this.gl.TEXTURE_2D, texture);

        // Because video has to be download over the internet
        // they might take a moment until it's ready so
        // put a single pixel in the texture so we can
        // use it immediately.
        const level = 0;
        const internalFormat = this.gl.RGBA;
        const width = 1;
        const height = 1;
        const border = 0;
        const srcFormat = this.gl.RGBA;
        const srcType = this.gl.UNSIGNED_BYTE;
        const pixel = new Uint8Array([0, 0, 255, 255]); // opaque blue
        this.gl.texImage2D(
            this.gl.TEXTURE_2D,
            level,
            internalFormat,
            width,
            height,
            border,
            srcFormat,
            srcType,
            pixel
        );

        // Turn off mips and set wrapping to clamp to edge so it
        // will work regardless of the dimensions of the video.
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR);

        return texture;
    }

    updateTexture() {
        const level = 0;
        const internalFormat = this.gl.RGBA;
        const srcFormat = this.gl.RGBA;
        const srcType = this.gl.UNSIGNED_BYTE;
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.texture);
        this.gl.texImage2D(
            this.gl.TEXTURE_2D,
            level,
            internalFormat,
            srcFormat,
            srcType,
            this.video
        );
    }

    setupVideo(url) {
        const video = document.createElement("video");

        let playing = false;
        let timeupdate = false;

        video.playsInline = true;
        video.muted = true;
        video.loop = true;

        // Waiting for these 2 events ensures
        // there is data in the video

        video.addEventListener(
            "playing",
            () => {
                playing = true;
                checkReady();
            },
            true
        );

        video.addEventListener(
            "timeupdate",
            () => {
                timeupdate = true;
                checkReady();
            },
            true
        );

        video.src = url;
        video.play();
        const this_ = this;
        const checkReady = () => {
            if (playing && timeupdate) {
                this_.copyVideo = true;
            }
        }

        return video;
    }
}

export { Video };