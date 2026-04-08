var vt=Object.defineProperty;var Ve=a=>{throw TypeError(a)};var gt=(a,i,n)=>i in a?vt(a,i,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[i]=n;var ie=(a,i,n)=>gt(a,typeof i!="symbol"?i+"":i,n),xt=(a,i,n)=>i.has(a)||Ve("Cannot "+n);var xe=(a,i,n)=>i.has(a)?Ve("Cannot add the same private member more than once"):i instanceof WeakSet?i.add(a):i.set(a,n);var K=(a,i,n)=>(xt(a,i,"access private method"),n);import"./modulepreload-polyfill-B5Qt9EMX.js";import{g as wt}from"./lil-gui.module.min-Vka56b52.js";var p=function(){var a,i={create:function(o){o=o||{};var s=document.createElement("canvas");s.width=800,s.height=600,"alpha"in o||(o.alpha=!1);try{a=s.getContext("webgl2",o)}catch{}try{a=a||s.getContext("experimental-webgl",o)}catch{}if(!a)throw new Error("WebGL not supported");return a.HALF_FLOAT_OES=36193,n(),l(),m(),P(),a},keys:{},Matrix:y,Indexer:O,Buffer:k,Mesh:v,HitTest:N,Raytracer:W,Shader:D,Texture:I,Vector:T};function n(){a.MODELVIEW=L|1,a.PROJECTION=L|2;var o=new y,s=new y;a.modelviewMatrix=new y,a.projectionMatrix=new y;var e=[],r=[],c,d;a.matrixMode=function(h){switch(h){case a.MODELVIEW:c="modelviewMatrix",d=e;break;case a.PROJECTION:c="projectionMatrix",d=r;break;default:throw new Error("invalid matrix mode "+h)}},a.loadIdentity=function(){y.identity(a[c])},a.loadMatrix=function(h){for(var u=h.m,E=a[c].m,w=0;w<16;w++)E[w]=u[w]},a.multMatrix=function(h){a.loadMatrix(y.multiply(a[c],h,s))},a.perspective=function(h,u,E,w){a.multMatrix(y.perspective(h,u,E,w,o))},a.frustum=function(h,u,E,w,g,b){a.multMatrix(y.frustum(h,u,E,w,g,b,o))},a.ortho=function(h,u,E,w,g,b){a.multMatrix(y.ortho(h,u,E,w,g,b,o))},a.scale=function(h,u,E){a.multMatrix(y.scale(h,u,E,o))},a.translate=function(h,u,E){a.multMatrix(y.translate(h,u,E,o))},a.rotate=function(h,u,E,w){a.multMatrix(y.rotate(h,u,E,w,o))},a.lookAt=function(h,u,E,w,g,b,A,z,F){a.multMatrix(y.lookAt(h,u,E,w,g,b,A,z,F,o))},a.pushMatrix=function(){d.push(Array.prototype.slice.call(a[c].m))},a.popMatrix=function(){var h=d.pop();a[c].m=B?new Float32Array(h):h},a.project=function(h,u,E,w,g,b){w=w||a.modelviewMatrix,g=g||a.projectionMatrix,b=b||a.getParameter(a.VIEWPORT);var A=g.transformPoint(w.transformPoint(new T(h,u,E)));return new T(b[0]+b[2]*(A.x*.5+.5),b[1]+b[3]*(A.y*.5+.5),A.z*.5+.5)},a.unProject=function(h,u,E,w,g,b){w=w||a.modelviewMatrix,g=g||a.projectionMatrix,b=b||a.getParameter(a.VIEWPORT);var A=new T((h-b[0])/b[2]*2-1,(u-b[1])/b[3]*2-1,E*2-1);return y.inverse(y.multiply(g,w,o),s).transformPoint(A)},a.matrixMode(a.MODELVIEW)}function l(){var o={mesh:new v({coords:!0,colors:!0,triangles:!1}),mode:-1,coord:[0,0,0,0],color:[1,1,1,1],shader:new D("      uniform float pointSize;      out vec4 color;      out vec4 coord;      void main() {        color = gl_Color;        coord = gl_TexCoord;        gl_Position = gl_ModelViewProjectionMatrix * gl_Vertex;        gl_PointSize = pointSize;      }    ","      uniform sampler2D tex;      uniform float pointSize;      uniform bool useTexture;      in vec4 color;      in vec4 coord;      out vec4 fragColor;      void main() {        fragColor = color;        if (useTexture) fragColor *= texture(tex, coord.xy);      }    ")};a.pointSize=function(s){o.shader.uniforms({pointSize:s})},a.begin=function(s){if(o.mode!=-1)throw new Error("mismatched gl.begin() and gl.end() calls");o.mode=s,o.mesh.colors=[],o.mesh.coords=[],o.mesh.vertices=[]},a.color=function(s,e,r,c){o.color=arguments.length==1?s.toArray().concat(1):[s,e,r,c||1]},a.texCoord=function(s,e){o.coord=arguments.length==1?s.toArray(2):[s,e]},a.vertex=function(s,e,r){o.mesh.colors.push(o.color),o.mesh.coords.push(o.coord),o.mesh.vertices.push(arguments.length==1?s.toArray():[s,e,r])},a.end=function(){if(o.mode==-1)throw new Error("mismatched gl.begin() and gl.end() calls");o.mesh.compile(),o.shader.uniforms({useTexture:!!a.getParameter(a.TEXTURE_BINDING_2D)}).draw(o.mesh,o.mode),o.mode=-1}}function m(){var o=a,s=0,e=0,r={},c=!1,d=Object.prototype.hasOwnProperty;function h(){for(var z in r)if(d.call(r,z)&&r[z])return!0;return!1}function u(z){var F={};for(var X in z)typeof z[X]=="function"?F[X]=function(Q){return function(){Q.apply(z,arguments)}}(z[X]):F[X]=z[X];F.original=z,F.x=F.pageX,F.y=F.pageY;for(var G=a.canvas;G;G=G.offsetParent)F.x-=G.offsetLeft,F.y-=G.offsetTop;return c?(F.deltaX=F.x-s,F.deltaY=F.y-e):(F.deltaX=0,F.deltaY=0,c=!0),s=F.x,e=F.y,F.dragging=h(),F.preventDefault=function(){F.original.preventDefault()},F.stopPropagation=function(){F.original.stopPropagation()},F}function E(z){a=o,h()||(x(document,"mousemove",w),x(document,"mouseup",g),S(a.canvas,"mousemove",w),S(a.canvas,"mouseup",g)),r[z.which]=!0,z=u(z),a.onmousedown&&a.onmousedown(z),z.preventDefault()}function w(z){a=o,z=u(z),a.onmousemove&&a.onmousemove(z),z.preventDefault()}function g(z){a=o,r[z.which]=!1,h()||(S(document,"mousemove",w),S(document,"mouseup",g),x(a.canvas,"mousemove",w),x(a.canvas,"mouseup",g)),z=u(z),a.onmouseup&&a.onmouseup(z),z.preventDefault()}function b(){c=!1}function A(){r={},c=!1}x(a.canvas,"mousedown",E),x(a.canvas,"mousemove",w),x(a.canvas,"mouseup",g),x(a.canvas,"mouseover",b),x(a.canvas,"mouseout",b),x(document,"contextmenu",A)}function f(o){var s={8:"BACKSPACE",9:"TAB",13:"ENTER",16:"SHIFT",27:"ESCAPE",32:"SPACE",37:"LEFT",38:"UP",39:"RIGHT",40:"DOWN"};return s[o]||(o>=65&&o<=90?String.fromCharCode(o):null)}function x(o,s,e){o.addEventListener(s,e)}function S(o,s,e){o.removeEventListener(s,e)}x(document,"keydown",function(o){if(!o.altKey&&!o.ctrlKey&&!o.metaKey){var s=f(o.keyCode);s&&(i.keys[s]=!0),i.keys[o.keyCode]=!0}}),x(document,"keyup",function(o){if(!o.altKey&&!o.ctrlKey&&!o.metaKey){var s=f(o.keyCode);s&&(i.keys[s]=!1),i.keys[o.keyCode]=!1}});function P(){(function(o){a.makeCurrent=function(){a=o}})(a),a.animate=function(){var o=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(c){setTimeout(c,16.666666666666668)},s=new Date().getTime(),e=a;function r(){a=e;var c=new Date().getTime();a.onupdate&&a.onupdate((c-s)/1e3),a.ondraw&&a.ondraw(),o(r),s=c}r()},a.fullscreen=function(o){o=o||{};var s=o.paddingTop||0,e=o.paddingLeft||0,r=o.paddingRight||0,c=o.paddingBottom||0;if(!document.body)throw new Error("document.body doesn't exist yet (call gl.fullscreen() from window.onload() or from inside the <body> tag)");document.body.appendChild(a.canvas),document.body.style.overflow="hidden",a.canvas.style.position="absolute",a.canvas.style.left=e+"px",a.canvas.style.top=s+"px";function d(){a.canvas.width=window.innerWidth-e-r,a.canvas.height=window.innerHeight-s-c,a.viewport(0,0,a.canvas.width,a.canvas.height),(o.camera||!("camera"in o))&&(a.matrixMode(a.PROJECTION),a.loadIdentity(),a.perspective(o.fov||45,a.canvas.width/a.canvas.height,o.near||.1,o.far||1e3),a.matrixMode(a.MODELVIEW)),a.ondraw&&a.ondraw()}x(window,"resize",d),d()}}var L=305397760,B=typeof Float32Array<"u";function y(){var o=Array.prototype.concat.apply([],arguments);o.length||(o=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),this.m=B?new Float32Array(o):o}y.prototype={inverse:function(){return y.inverse(this,new y)},transpose:function(){return y.transpose(this,new y)},multiply:function(o){return y.multiply(this,o,new y)},transformPoint:function(o){var s=this.m;return new T(s[0]*o.x+s[1]*o.y+s[2]*o.z+s[3],s[4]*o.x+s[5]*o.y+s[6]*o.z+s[7],s[8]*o.x+s[9]*o.y+s[10]*o.z+s[11]).divide(s[12]*o.x+s[13]*o.y+s[14]*o.z+s[15])},transformVector:function(o){var s=this.m;return new T(s[0]*o.x+s[1]*o.y+s[2]*o.z,s[4]*o.x+s[5]*o.y+s[6]*o.z,s[8]*o.x+s[9]*o.y+s[10]*o.z)}},y.inverse=function(o,s){s=s||new y;var e=o.m,r=s.m;r[0]=e[5]*e[10]*e[15]-e[5]*e[14]*e[11]-e[6]*e[9]*e[15]+e[6]*e[13]*e[11]+e[7]*e[9]*e[14]-e[7]*e[13]*e[10],r[1]=-e[1]*e[10]*e[15]+e[1]*e[14]*e[11]+e[2]*e[9]*e[15]-e[2]*e[13]*e[11]-e[3]*e[9]*e[14]+e[3]*e[13]*e[10],r[2]=e[1]*e[6]*e[15]-e[1]*e[14]*e[7]-e[2]*e[5]*e[15]+e[2]*e[13]*e[7]+e[3]*e[5]*e[14]-e[3]*e[13]*e[6],r[3]=-e[1]*e[6]*e[11]+e[1]*e[10]*e[7]+e[2]*e[5]*e[11]-e[2]*e[9]*e[7]-e[3]*e[5]*e[10]+e[3]*e[9]*e[6],r[4]=-e[4]*e[10]*e[15]+e[4]*e[14]*e[11]+e[6]*e[8]*e[15]-e[6]*e[12]*e[11]-e[7]*e[8]*e[14]+e[7]*e[12]*e[10],r[5]=e[0]*e[10]*e[15]-e[0]*e[14]*e[11]-e[2]*e[8]*e[15]+e[2]*e[12]*e[11]+e[3]*e[8]*e[14]-e[3]*e[12]*e[10],r[6]=-e[0]*e[6]*e[15]+e[0]*e[14]*e[7]+e[2]*e[4]*e[15]-e[2]*e[12]*e[7]-e[3]*e[4]*e[14]+e[3]*e[12]*e[6],r[7]=e[0]*e[6]*e[11]-e[0]*e[10]*e[7]-e[2]*e[4]*e[11]+e[2]*e[8]*e[7]+e[3]*e[4]*e[10]-e[3]*e[8]*e[6],r[8]=e[4]*e[9]*e[15]-e[4]*e[13]*e[11]-e[5]*e[8]*e[15]+e[5]*e[12]*e[11]+e[7]*e[8]*e[13]-e[7]*e[12]*e[9],r[9]=-e[0]*e[9]*e[15]+e[0]*e[13]*e[11]+e[1]*e[8]*e[15]-e[1]*e[12]*e[11]-e[3]*e[8]*e[13]+e[3]*e[12]*e[9],r[10]=e[0]*e[5]*e[15]-e[0]*e[13]*e[7]-e[1]*e[4]*e[15]+e[1]*e[12]*e[7]+e[3]*e[4]*e[13]-e[3]*e[12]*e[5],r[11]=-e[0]*e[5]*e[11]+e[0]*e[9]*e[7]+e[1]*e[4]*e[11]-e[1]*e[8]*e[7]-e[3]*e[4]*e[9]+e[3]*e[8]*e[5],r[12]=-e[4]*e[9]*e[14]+e[4]*e[13]*e[10]+e[5]*e[8]*e[14]-e[5]*e[12]*e[10]-e[6]*e[8]*e[13]+e[6]*e[12]*e[9],r[13]=e[0]*e[9]*e[14]-e[0]*e[13]*e[10]-e[1]*e[8]*e[14]+e[1]*e[12]*e[10]+e[2]*e[8]*e[13]-e[2]*e[12]*e[9],r[14]=-e[0]*e[5]*e[14]+e[0]*e[13]*e[6]+e[1]*e[4]*e[14]-e[1]*e[12]*e[6]-e[2]*e[4]*e[13]+e[2]*e[12]*e[5],r[15]=e[0]*e[5]*e[10]-e[0]*e[9]*e[6]-e[1]*e[4]*e[10]+e[1]*e[8]*e[6]+e[2]*e[4]*e[9]-e[2]*e[8]*e[5];for(var c=e[0]*r[0]+e[1]*r[4]+e[2]*r[8]+e[3]*r[12],d=0;d<16;d++)r[d]/=c;return s},y.transpose=function(o,s){s=s||new y;var e=o.m,r=s.m;return r[0]=e[0],r[1]=e[4],r[2]=e[8],r[3]=e[12],r[4]=e[1],r[5]=e[5],r[6]=e[9],r[7]=e[13],r[8]=e[2],r[9]=e[6],r[10]=e[10],r[11]=e[14],r[12]=e[3],r[13]=e[7],r[14]=e[11],r[15]=e[15],s},y.multiply=function(o,s,e){e=e||new y;var r=o.m,c=s.m,d=e.m;return d[0]=r[0]*c[0]+r[1]*c[4]+r[2]*c[8]+r[3]*c[12],d[1]=r[0]*c[1]+r[1]*c[5]+r[2]*c[9]+r[3]*c[13],d[2]=r[0]*c[2]+r[1]*c[6]+r[2]*c[10]+r[3]*c[14],d[3]=r[0]*c[3]+r[1]*c[7]+r[2]*c[11]+r[3]*c[15],d[4]=r[4]*c[0]+r[5]*c[4]+r[6]*c[8]+r[7]*c[12],d[5]=r[4]*c[1]+r[5]*c[5]+r[6]*c[9]+r[7]*c[13],d[6]=r[4]*c[2]+r[5]*c[6]+r[6]*c[10]+r[7]*c[14],d[7]=r[4]*c[3]+r[5]*c[7]+r[6]*c[11]+r[7]*c[15],d[8]=r[8]*c[0]+r[9]*c[4]+r[10]*c[8]+r[11]*c[12],d[9]=r[8]*c[1]+r[9]*c[5]+r[10]*c[9]+r[11]*c[13],d[10]=r[8]*c[2]+r[9]*c[6]+r[10]*c[10]+r[11]*c[14],d[11]=r[8]*c[3]+r[9]*c[7]+r[10]*c[11]+r[11]*c[15],d[12]=r[12]*c[0]+r[13]*c[4]+r[14]*c[8]+r[15]*c[12],d[13]=r[12]*c[1]+r[13]*c[5]+r[14]*c[9]+r[15]*c[13],d[14]=r[12]*c[2]+r[13]*c[6]+r[14]*c[10]+r[15]*c[14],d[15]=r[12]*c[3]+r[13]*c[7]+r[14]*c[11]+r[15]*c[15],e},y.identity=function(o){o=o||new y;var s=o.m;return s[0]=s[5]=s[10]=s[15]=1,s[1]=s[2]=s[3]=s[4]=s[6]=s[7]=s[8]=s[9]=s[11]=s[12]=s[13]=s[14]=0,o},y.perspective=function(o,s,e,r,c){var d=Math.tan(o*Math.PI/360)*e,h=d*s;return y.frustum(-h,h,-d,d,e,r,c)},y.frustum=function(o,s,e,r,c,d,h){h=h||new y;var u=h.m;return u[0]=2*c/(s-o),u[1]=0,u[2]=(s+o)/(s-o),u[3]=0,u[4]=0,u[5]=2*c/(r-e),u[6]=(r+e)/(r-e),u[7]=0,u[8]=0,u[9]=0,u[10]=-(d+c)/(d-c),u[11]=-2*d*c/(d-c),u[12]=0,u[13]=0,u[14]=-1,u[15]=0,h},y.ortho=function(o,s,e,r,c,d,h){h=h||new y;var u=h.m;return u[0]=2/(s-o),u[1]=0,u[2]=0,u[3]=-(s+o)/(s-o),u[4]=0,u[5]=2/(r-e),u[6]=0,u[7]=-(r+e)/(r-e),u[8]=0,u[9]=0,u[10]=-2/(d-c),u[11]=-(d+c)/(d-c),u[12]=0,u[13]=0,u[14]=0,u[15]=1,h},y.scale=function(o,s,e,r){r=r||new y;var c=r.m;return c[0]=o,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=s,c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=e,c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,r},y.translate=function(o,s,e,r){r=r||new y;var c=r.m;return c[0]=1,c[1]=0,c[2]=0,c[3]=o,c[4]=0,c[5]=1,c[6]=0,c[7]=s,c[8]=0,c[9]=0,c[10]=1,c[11]=e,c[12]=0,c[13]=0,c[14]=0,c[15]=1,r},y.rotate=function(o,s,e,r,c){if(!o||!s&&!e&&!r)return y.identity(c);c=c||new y;var d=c.m,h=Math.sqrt(s*s+e*e+r*r);o*=Math.PI/180,s/=h,e/=h,r/=h;var u=Math.cos(o),E=Math.sin(o),w=1-u;return d[0]=s*s*w+u,d[1]=s*e*w-r*E,d[2]=s*r*w+e*E,d[3]=0,d[4]=e*s*w+r*E,d[5]=e*e*w+u,d[6]=e*r*w-s*E,d[7]=0,d[8]=r*s*w-e*E,d[9]=r*e*w+s*E,d[10]=r*r*w+u,d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,c},y.lookAt=function(o,s,e,r,c,d,h,u,E,w){w=w||new y;var g=w.m,b=new T(o,s,e),A=new T(r,c,d),z=new T(h,u,E),F=b.subtract(A).unit(),X=z.cross(F).unit(),G=F.cross(X).unit();return g[0]=X.x,g[1]=X.y,g[2]=X.z,g[3]=-X.dot(b),g[4]=G.x,g[5]=G.y,g[6]=G.z,g[7]=-G.dot(b),g[8]=F.x,g[9]=F.y,g[10]=F.z,g[11]=-F.dot(b),g[12]=0,g[13]=0,g[14]=0,g[15]=1,w};function O(){this.unique=[],this.indices=[],this.map={}}O.prototype={add:function(o){var s=JSON.stringify(o);return s in this.map||(this.map[s]=this.unique.length,this.unique.push(o)),this.map[s]}};function k(o,s){this.buffer=null,this.target=o,this.type=s,this.data=[]}k.prototype={compile:function(o){for(var s=[],e=0,r=1e4;e<this.data.length;e+=r)s=Array.prototype.concat.apply(s,this.data.slice(e,e+r));var c=this.data.length?s.length/this.data.length:0;if(c!=Math.round(c))throw new Error("buffer elements not of consistent size, average size is "+c);this.buffer=this.buffer||a.createBuffer(),this.buffer.length=s.length,this.buffer.spacing=c,a.bindBuffer(this.target,this.buffer),a.bufferData(this.target,new this.type(s),o||a.STATIC_DRAW)}};function v(o){o=o||{},this.vertexBuffers={},this.indexBuffers={},this.addVertexBuffer("vertices","gl_Vertex"),o.coords&&this.addVertexBuffer("coords","gl_TexCoord"),o.normals&&this.addVertexBuffer("normals","gl_Normal"),o.colors&&this.addVertexBuffer("colors","gl_Color"),(!("triangles"in o)||o.triangles)&&this.addIndexBuffer("triangles"),o.lines&&this.addIndexBuffer("lines")}v.prototype={addVertexBuffer:function(o,s){var e=this.vertexBuffers[s]=new k(a.ARRAY_BUFFER,Float32Array);e.name=o,this[o]=[]},addIndexBuffer:function(o){this.indexBuffers[o]=new k(a.ELEMENT_ARRAY_BUFFER,Uint16Array),this[o]=[]},compile:function(){for(var o in this.vertexBuffers){var s=this.vertexBuffers[o];s.data=this[s.name],s.compile()}for(var e in this.indexBuffers){var s=this.indexBuffers[e];s.data=this[e],s.compile()}},transform:function(o){if(this.vertices=this.vertices.map(function(e){return o.transformPoint(T.fromArray(e)).toArray()}),this.normals){var s=o.inverse().transpose();this.normals=this.normals.map(function(e){return s.transformVector(T.fromArray(e)).unit().toArray()})}return this.compile(),this},computeNormals:function(){this.normals||this.addVertexBuffer("normals","gl_Normal");for(var o=0;o<this.vertices.length;o++)this.normals[o]=new T;for(var o=0;o<this.triangles.length;o++){var s=this.triangles[o],e=T.fromArray(this.vertices[s[0]]),r=T.fromArray(this.vertices[s[1]]),c=T.fromArray(this.vertices[s[2]]),d=r.subtract(e).cross(c.subtract(e)).unit();this.normals[s[0]]=this.normals[s[0]].add(d),this.normals[s[1]]=this.normals[s[1]].add(d),this.normals[s[2]]=this.normals[s[2]].add(d)}for(var o=0;o<this.vertices.length;o++)this.normals[o]=this.normals[o].unit().toArray();return this.compile(),this},computeWireframe:function(){for(var o=new O,s=0;s<this.triangles.length;s++)for(var e=this.triangles[s],r=0;r<e.length;r++){var c=e[r],d=e[(r+1)%e.length];o.add([Math.min(c,d),Math.max(c,d)])}return this.lines||this.addIndexBuffer("lines"),this.lines=o.unique,this.compile(),this},getAABB:function(){var o={min:new T(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)};o.max=o.min.negative();for(var s=0;s<this.vertices.length;s++){var e=T.fromArray(this.vertices[s]);o.min=T.min(o.min,e),o.max=T.max(o.max,e)}return o},getBoundingSphere:function(){for(var o=this.getAABB(),s={center:o.min.add(o.max).divide(2),radius:0},e=0;e<this.vertices.length;e++)s.radius=Math.max(s.radius,T.fromArray(this.vertices[e]).subtract(s.center).length());return s}},v.plane=function(o){o=o||{};for(var s=new v(o),e=o.detailX||o.detail||1,r=o.detailY||o.detail||1,c=o.width||2,d=o.height||2,h=0;h<=r;h++)for(var u=h/r,E=0;E<=e;E++){var w=E/e;if(s.vertices.push([(w-.5)*c,(u-.5)*d,0]),s.coords&&s.coords.push([w,u]),s.normals&&s.normals.push([0,0,1]),E<e&&h<r){var g=E+h*(e+1);s.triangles.push([g,g+1,g+e+1]),s.triangles.push([g+e+1,g+1,g+e+2])}}return s.compile(),s};var _=[[0,4,2,6,-1,0,0],[1,3,5,7,1,0,0],[0,1,4,5,0,-1,0],[2,6,3,7,0,1,0],[0,2,1,3,0,0,-1],[4,5,6,7,0,0,1]];function C(o){return new T((o&1)*2-1,(o&2)-1,(o&4)/2-1)}v.cube=function(o){for(var s=new v(o),e=o&&o.width||2,r=o&&o.height||2,c=o&&o.depth||2,d=0;d<_.length;d++){for(var h=_[d],u=d*4,E=0;E<4;E++){var w=h[E];const g=C(w).toArray();g[0]*=e/2,g[1]*=r/2,g[2]*=c/2,s.vertices.push(g),s.coords&&s.coords.push([E&1,(E&2)/2]),s.normals&&s.normals.push(h.slice(4,7))}s.triangles.push([u,u+1,u+2]),s.triangles.push([u+2,u+1,u+3])}return s.compile(),s},v.sphere=function(o){function s(G,Q,re){return E?[G,re,Q]:[G,Q,re]}function e(G){return G+(G-G*G)/2}o=o||{};for(var r=new v(o),c=new O,d=o.detail||6,h=0;h<8;h++)for(var u=C(h),E=u.x*u.y*u.z>0,w=[],g=0;g<=d;g++){for(var b=0;g+b<=d;b++){var A=g/d,z=b/d,F=(d-g-b)/d,X={vertex:new T(e(A),e(z),e(F)).unit().multiply(u).toArray()};r.coords&&(X.coord=u.y>0?[1-A,F]:[F,1-A]),w.push(c.add(X))}if(g>0)for(var b=0;g+b<=d;b++){var A=(g-1)*(d+1)+(g-1-(g-1)*(g-1))/2+b,z=g*(d+1)+(g-g*g)/2+b;r.triangles.push(s(w[A],w[A+1],w[z])),g+b<d&&r.triangles.push(s(w[z],w[A+1],w[z+1]))}}return r.vertices=c.unique.map(function(G){return G.vertex}),r.coords&&(r.coords=c.unique.map(function(G){return G.coord})),r.normals&&(r.normals=r.vertices),r.compile(),r},v.load=function(o,s){s=s||{},"coords"in s||(s.coords=!!o.coords),"normals"in s||(s.normals=!!o.normals),"colors"in s||(s.colors=!!o.colors),"triangles"in s||(s.triangles=!!o.triangles),"lines"in s||(s.lines=!!o.lines);var e=new v(s);return e.vertices=o.vertices,e.coords&&(e.coords=o.coords),e.normals&&(e.normals=o.normals),e.colors&&(e.colors=o.colors),e.triangles&&(e.triangles=o.triangles),e.lines&&(e.lines=o.lines),e.compile(),e};function N(o,s,e){this.t=arguments.length?o:Number.MAX_VALUE,this.hit=s,this.normal=e}N.prototype={mergeWith:function(o){o.t>0&&o.t<this.t&&(this.t=o.t,this.hit=o.hit,this.normal=o.normal)}};function W(){var o=a.getParameter(a.VIEWPORT),s=a.modelviewMatrix.m,e=new T(s[0],s[4],s[8]),r=new T(s[1],s[5],s[9]),c=new T(s[2],s[6],s[10]),d=new T(s[3],s[7],s[11]);this.eye=new T(-d.dot(e),-d.dot(r),-d.dot(c));var h=o[0],u=h+o[2],E=o[1],w=E+o[3];this.ray00=a.unProject(h,E,1).subtract(this.eye),this.ray10=a.unProject(u,E,1).subtract(this.eye),this.ray01=a.unProject(h,w,1).subtract(this.eye),this.ray11=a.unProject(u,w,1).subtract(this.eye),this.viewport=o}W.prototype={getRayForPixel:function(o,s){o=(o-this.viewport[0])/this.viewport[2],s=1-(s-this.viewport[1])/this.viewport[3];var e=T.lerp(this.ray00,this.ray10,o),r=T.lerp(this.ray01,this.ray11,o);return T.lerp(e,r,s).unit()}},W.hitTestBox=function(o,s,e,r){var c=e.subtract(o).divide(s),d=r.subtract(o).divide(s),h=T.min(c,d),u=T.max(c,d),E=h.max(),w=u.min();if(E>0&&E<w){var g=1e-6,b=o.add(s.multiply(E));return e=e.add(g),r=r.subtract(g),new N(E,b,new T((b.x>r.x)-(b.x<e.x),(b.y>r.y)-(b.y<e.y),(b.z>r.z)-(b.z<e.z)))}return null},W.hitTestSphere=function(o,s,e,r){var c=o.subtract(e),d=s.dot(s),h=2*s.dot(c),u=c.dot(c)-r*r,E=h*h-4*d*u;if(E>0){var w=(-h-Math.sqrt(E))/(2*d),g=o.add(s.multiply(w));return new N(w,g,g.subtract(e).divide(r))}return null},W.hitTestTriangle=function(o,s,e,r,c){var d=r.subtract(e),h=c.subtract(e),u=d.cross(h).unit(),E=u.dot(e.subtract(o))/u.dot(s);if(E>0){var w=o.add(s.multiply(E)),g=w.subtract(e),b=h.dot(h),A=h.dot(d),z=h.dot(g),F=d.dot(d),X=d.dot(g),G=b*F-A*A,Q=(F*z-A*X)/G,re=(b*X-A*z)/G;if(Q>=0&&re>=0&&Q+re<=1)return new N(E,w,u)}return null};function U(o,s,e){let r;for(;(r=o.exec(s))!=null;)e(r)}var M="LIGHTGL";function D(o,s){function e(b){var A=document.getElementById(b);return A?A.text:b}o=e(o),s=e(s);var r="    uniform mat3 gl_NormalMatrix;    uniform mat4 gl_ModelViewMatrix;    uniform mat4 gl_ProjectionMatrix;    uniform mat4 gl_ModelViewProjectionMatrix;    uniform mat4 gl_ModelViewMatrixInverse;    uniform mat4 gl_ProjectionMatrixInverse;    uniform mat4 gl_ModelViewProjectionMatrixInverse;  ",c=`#version 300 es
    `+r+"    in vec4 gl_Vertex;    in vec4 gl_TexCoord;    in vec3 gl_Normal;    in vec4 gl_Color;    vec4 ftransform() {      return gl_ModelViewProjectionMatrix * gl_Vertex;    }  ",d=`#version 300 es
    precision highp float;
  `+r,h=o+s,u={};U(/\b(gl_[^;]*)\b;/g,r,function(b){var A=b[1];if(h.indexOf(A)!=-1){var z=A.replace(/[a-z_]/g,"");u[z]=M+A}}),h.indexOf("ftransform")!=-1&&(u.MVPM=M+"gl_ModelViewProjectionMatrix"),this.usedMatrices=u;function E(b,A){var z={},F=/^((\s*\/\/.*\n|\s*#extension.*\n)+)[^]*$/.exec(A);return A=F?F[1]+b+A.substr(F[1].length):b+A,U(/\bgl_\w+\b/g,b,function(X){X in z||(A=A.replace(new RegExp("\\b"+X+"\\b","g"),M+X),z[X]=!0)}),A}o=E(c,o),s=E(d,s);function w(b,A){var z=a.createShader(b);if(a.shaderSource(z,A),a.compileShader(z),!a.getShaderParameter(z,a.COMPILE_STATUS))throw new Error("compile error: "+a.getShaderInfoLog(z));return z}if(this.program=a.createProgram(),a.attachShader(this.program,w(a.VERTEX_SHADER,o)),a.attachShader(this.program,w(a.FRAGMENT_SHADER,s)),a.linkProgram(this.program),!a.getProgramParameter(this.program,a.LINK_STATUS))throw new Error("link error: "+a.getProgramInfoLog(this.program));this.attributes={},this.uniformLocations={};var g={};U(/uniform\s+sampler(1D|2D|3D|Cube)\s+(\w+)\s*;/g,o+s,function(b){g[b[2]]=1}),this.isSampler=g}function Z(o){var s=Object.prototype.toString.call(o);return s=="[object Array]"||s=="[object Float32Array]"}function te(o){var s=Object.prototype.toString.call(o);return s=="[object Number]"||s=="[object Boolean]"}new y,new y,D.prototype={uniforms:function(o){a.useProgram(this.program);for(var s in o){var e=this.uniformLocations[s]||a.getUniformLocation(this.program,s);if(e){this.uniformLocations[s]=e;var r=o[s];if(r instanceof T?r=[r.x,r.y,r.z]:r instanceof y&&(r=r.m),Z(r))switch(r.length){case 1:a.uniform1fv(e,new Float32Array(r));break;case 2:a.uniform2fv(e,new Float32Array(r));break;case 3:a.uniform3fv(e,new Float32Array(r));break;case 4:a.uniform4fv(e,new Float32Array(r));break;case 9:a.uniformMatrix3fv(e,!1,new Float32Array([r[0],r[3],r[6],r[1],r[4],r[7],r[2],r[5],r[8]]));break;case 16:a.uniformMatrix4fv(e,!1,new Float32Array([r[0],r[4],r[8],r[12],r[1],r[5],r[9],r[13],r[2],r[6],r[10],r[14],r[3],r[7],r[11],r[15]]));break;default:throw new Error(`don't know how to load uniform "`+s+'" of length '+r.length)}else if(te(r))(this.isSampler[s]?a.uniform1i:a.uniform1f).call(a,e,r);else throw new Error('attempted to set uniform "'+s+'" to invalid value '+r)}}return this},draw:function(o,s){this.drawBuffers(o.vertexBuffers,o.indexBuffers[s==a.LINES?"lines":"triangles"],arguments.length<2?a.TRIANGLES:s)},drawBuffers:function(o,s,e){var r=this.usedMatrices,c=a.modelviewMatrix,d=a.projectionMatrix,h=r.MVMI||r.NM?c.inverse():null,u=r.PMI?d.inverse():null,E=r.MVPM||r.MVPMI?d.multiply(c):null,w={};if(r.MVM&&(w[r.MVM]=c),r.MVMI&&(w[r.MVMI]=h),r.PM&&(w[r.PM]=d),r.PMI&&(w[r.PMI]=u),r.MVPM&&(w[r.MVPM]=E),r.MVPMI&&(w[r.MVPMI]=E.inverse()),r.NM){var g=h.m;w[r.NM]=[g[0],g[4],g[8],g[1],g[5],g[9],g[2],g[6],g[10]]}this.uniforms(w);var b=0;for(var A in o){var z=o[A],F=this.attributes[A]||a.getAttribLocation(this.program,A.replace(/^(gl_.*)$/,M+"$1"));F==-1||!z.buffer||(this.attributes[A]=F,a.bindBuffer(a.ARRAY_BUFFER,z.buffer),a.enableVertexAttribArray(F),a.vertexAttribPointer(F,z.buffer.spacing,a.FLOAT,!1,0,0),b=z.buffer.length/z.buffer.spacing)}for(var A in this.attributes)A in o||a.disableVertexAttribArray(this.attributes[A]);return b&&(!s||s.buffer)&&(s?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,s.buffer),a.drawElements(e,s.buffer.length,a.UNSIGNED_SHORT,0)):a.drawArrays(e,0,b)),this}};function I(o,s,e){e=e||{},this.width=o,this.height=s,this.id=a.createTexture();let r=e.type||a.UNSIGNED_BYTE,c=e.format||a.RGBA,d=a.RGBA;const h=a.getExtension("EXT_color_buffer_float"),u=a.getExtension("EXT_color_buffer_half_float");r===a.FLOAT?(h?a instanceof WebGL2RenderingContext&&(c=a.RGBA32F):(console.warn("FLOAT textures not renderable, falling back to UNSIGNED_BYTE"),r=a.UNSIGNED_BYTE,c=a.RGBA8),d=a.RGBA):r===a.HALF_FLOAT_OES?(u?a instanceof WebGL2RenderingContext&&(c=a.RGBA16F):(console.warn("HALF_FLOAT textures not renderable, falling back to UNSIGNED_BYTE"),r=a.UNSIGNED_BYTE,c=a.RGBA8),d=a.RGBA):(r=a.UNSIGNED_BYTE,c=a.RGBA8,d=a.RGBA);const E=e.filter||e.magFilter||a.LINEAR,w=e.filter||e.minFilter||a.LINEAR;a.bindTexture(a.TEXTURE_2D,this.id),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,1),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER,E),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,w),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,e.wrap||e.wrapS||a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,e.wrap||e.wrapT||a.CLAMP_TO_EDGE),a instanceof WebGL2RenderingContext?a.texImage2D(a.TEXTURE_2D,0,c,o,s,0,d,r,null):a.texImage2D(a.TEXTURE_2D,0,d,o,s,0,d,r,null),a.bindTexture(a.TEXTURE_2D,null),this.format=d,this.type=r,this.internalFormat=c}var H,j,$;I.prototype={bind:function(o){a.activeTexture(a.TEXTURE0+(o||0)),a.bindTexture(a.TEXTURE_2D,this.id)},unbind:function(o){a.activeTexture(a.TEXTURE0+(o||0)),a.bindTexture(a.TEXTURE_2D,null)},canDrawTo:function(){H=H||a.createFramebuffer(),a.bindFramebuffer(a.FRAMEBUFFER,H),a.framebufferTexture2D(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,this.id,0);var o=a.checkFramebufferStatus(a.FRAMEBUFFER)==a.FRAMEBUFFER_COMPLETE;return a.bindFramebuffer(a.FRAMEBUFFER,null),o},drawTo:function(o){a.getExtension("EXT_color_buffer_float")||console.warn("EXT_color_buffer_float not available!");var e=a.getParameter(a.VIEWPORT);if(H=H||a.createFramebuffer(),j=j||a.createRenderbuffer(),a.bindFramebuffer(a.FRAMEBUFFER,H),a.bindRenderbuffer(a.RENDERBUFFER,j),(this.width!=j.width||this.height!=j.height)&&(j.width=this.width,j.height=this.height,a.renderbufferStorage(a.RENDERBUFFER,a.DEPTH_COMPONENT16,this.width,this.height)),a.framebufferTexture2D(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,this.id,0),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.RENDERBUFFER,j),a.checkFramebufferStatus(a.FRAMEBUFFER)!=a.FRAMEBUFFER_COMPLETE)throw new Error("Rendering to this texture is not supported (incomplete framebuffer)");a.viewport(0,0,this.width,this.height),o(),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindRenderbuffer(a.RENDERBUFFER,null),a.viewport(e[0],e[1],e[2],e[3])},swapWith:function(o){var s;s=o.id,o.id=this.id,this.id=s,s=o.width,o.width=this.width,this.width=s,s=o.height,o.height=this.height,this.height=s}},I.fromImage=function(o,s){s=s||{};var e=new I(o.width,o.height,s);a.bindTexture(a.TEXTURE_2D,e.id);try{a.texImage2D(a.TEXTURE_2D,0,e.format,e.format,e.type,o)}catch{throw location.protocol=="file:"?new Error('image not loaded for security reasons (serve this page over "http://" instead)'):new Error("image not loaded for security reasons (image must originate from the same domain as this page or use Cross-Origin Resource Sharing)")}return s.minFilter&&s.minFilter!=a.NEAREST&&s.minFilter!=a.LINEAR&&a.generateMipmap(a.TEXTURE_2D),a.bindTexture(a.TEXTURE_2D,null),e},I.fromURL=function(o,s){$=$||function(){var d=document.createElement("canvas").getContext("2d");d.canvas.width=d.canvas.height=128;for(var h=0;h<d.canvas.height;h+=16)for(var u=0;u<d.canvas.width;u+=16)d.fillStyle=(u^h)&16?"#FFF":"#DDD",d.fillRect(u,h,16,16);return d.canvas}();var e=I.fromImage($,s),r=new Image,c=a;return r.onload=function(){c.makeCurrent(),I.fromImage(r,s).swapWith(e)},r.src=o,e},I.canUseFloatingPointTextures=function(){return!!a.getExtension("OES_texture_float")},I.canUseFloatingPointLinearFiltering=function(){return!!a.getExtension("OES_texture_float_linear")},I.canUseHalfFloatingPointTextures=function(){return!!a.getExtension("OES_texture_half_float")},I.canUseHalfFloatingPointLinearFiltering=function(){return!!a.getExtension("OES_texture_half_float_linear")};function T(o,s,e){this.x=o||0,this.y=s||0,this.z=e||0}return T.prototype={negative:function(){return new T(-this.x,-this.y,-this.z)},add:function(o){return o instanceof T?new T(this.x+o.x,this.y+o.y,this.z+o.z):new T(this.x+o,this.y+o,this.z+o)},subtract:function(o){return o instanceof T?new T(this.x-o.x,this.y-o.y,this.z-o.z):new T(this.x-o,this.y-o,this.z-o)},multiply:function(o){return o instanceof T?new T(this.x*o.x,this.y*o.y,this.z*o.z):new T(this.x*o,this.y*o,this.z*o)},divide:function(o){return o instanceof T?new T(this.x/o.x,this.y/o.y,this.z/o.z):new T(this.x/o,this.y/o,this.z/o)},equals:function(o){return this.x==o.x&&this.y==o.y&&this.z==o.z},dot:function(o){return this.x*o.x+this.y*o.y+this.z*o.z},cross:function(o){return new T(this.y*o.z-this.z*o.y,this.z*o.x-this.x*o.z,this.x*o.y-this.y*o.x)},length:function(){return Math.sqrt(this.dot(this))},unit:function(){return this.divide(this.length())},min:function(){return Math.min(Math.min(this.x,this.y),this.z)},max:function(){return Math.max(Math.max(this.x,this.y),this.z)},toAngles:function(){return{theta:Math.atan2(this.z,this.x),phi:Math.asin(this.y/this.length())}},angleTo:function(o){return Math.acos(this.dot(o)/(this.length()*o.length()))},toArray:function(o){return[this.x,this.y,this.z].slice(0,o||3)},clone:function(){return new T(this.x,this.y,this.z)},init:function(o,s,e){return this.x=o,this.y=s,this.z=e,this}},T.negative=function(o,s){return s.x=-o.x,s.y=-o.y,s.z=-o.z,s},T.add=function(o,s,e){return s instanceof T?(e.x=o.x+s.x,e.y=o.y+s.y,e.z=o.z+s.z):(e.x=o.x+s,e.y=o.y+s,e.z=o.z+s),e},T.subtract=function(o,s,e){return s instanceof T?(e.x=o.x-s.x,e.y=o.y-s.y,e.z=o.z-s.z):(e.x=o.x-s,e.y=o.y-s,e.z=o.z-s),e},T.multiply=function(o,s,e){return s instanceof T?(e.x=o.x*s.x,e.y=o.y*s.y,e.z=o.z*s.z):(e.x=o.x*s,e.y=o.y*s,e.z=o.z*s),e},T.divide=function(o,s,e){return s instanceof T?(e.x=o.x/s.x,e.y=o.y/s.y,e.z=o.z/s.z):(e.x=o.x/s,e.y=o.y/s,e.z=o.z/s),e},T.cross=function(o,s,e){return e.x=o.y*s.z-o.z*s.y,e.y=o.z*s.x-o.x*s.z,e.z=o.x*s.y-o.y*s.x,e},T.unit=function(o,s){var e=o.length();return s.x=o.x/e,s.y=o.y/e,s.z=o.z/e,s},T.fromAngles=function(o,s){return new T(Math.cos(o)*Math.cos(s),Math.sin(s),Math.sin(o)*Math.cos(s))},T.randomDirection=function(){return T.fromAngles(Math.random()*Math.PI*2,Math.asin(Math.random()*2-1))},T.min=function(o,s){return new T(Math.min(o.x,s.x),Math.min(o.y,s.y),Math.min(o.z,s.z))},T.max=function(o,s){return new T(Math.max(o.x,s.x),Math.max(o.y,s.y),Math.max(o.z,s.z))},T.lerp=function(o,s,e){return s.subtract(o).multiply(e).add(o)},T.fromArray=function(o){return new T(o[0],o[1],o[2])},T.angleBetween=function(o,s){return o.angleTo(s)},i}();class ne{constructor({tx:i=0,ty:n=0,zoom:l=4,ax:m=-25,ay:f=-200,az:x=0,fov:S=45}){this.tx=i,this.ty=n,this.zoom=l,this.ax=m,this.ay=f,this.az=x,this.fov=S}interpolate(i,n,l=1){const m=(f,x,S,P=1)=>Math.pow(S,P)*x+(1-Math.pow(S,P))*f;return new ne({tx:m(this.tx,i.tx,n,l),ty:m(this.ty,i.ty,n,l),zoom:m(this.zoom,i.zoom,n,l),ax:m(this.ax,i.ax,n,l),ay:m(this.ay,i.ay,n,l),az:m(this.az,i.az,n,l),fov:m(this.fov,i.fov,n,l)})}}const De=.3,Ie=.15,Le=1,yt=10,je=Math.ceil(yt/4),Ke=10,be=`
    uniform float wr;
    #define sqrt_2_PI 2.50662827
    #define PI 3.1415926536
    uniform sampler2D swimmersAttributesTexture;
    const int SWIMMERS_NUM_ATTRIBUTES = 4;
    const vec2 TEXTURE_SIZE = vec2(`+je+", "+Ke+`);
    uniform float swimmersNumber;
    uniform float time;

    vec2 getSwimmerPosition(int i) {
        float i_float = float(i);
        vec2 pixel = vec2(0., i_float);
        vec4 attributes = texture(swimmersAttributesTexture, (pixel + .5) / TEXTURE_SIZE);
        return attributes.rg;
    }

    float getSwimmerSpeed(int i) {
        float i_float = float(i);
        vec2 pixel = vec2(1., i_float);
        vec4 attributes = texture(swimmersAttributesTexture, (pixel + .5) / TEXTURE_SIZE);
        return attributes.g;
    }

    vec2 getSwimmerDivingInfo(int i) {
        float i_float = float(i);
        vec2 pixel = vec2(0., i_float);
        vec4 attributes = texture(swimmersAttributesTexture, (pixel + .5) / TEXTURE_SIZE);
        return attributes.ba;
    }

    vec2 getSwimmerBreakoutInfo(int i) {
        float i_float = float(i);
        vec2 pixel = vec2(2., i_float);
        vec4 attributes = texture(swimmersAttributesTexture, (pixel + .5) / TEXTURE_SIZE);
        return attributes.rg;
    }

    float getSwimmerFinishTime(int i) {
        float i_float = float(i);
        vec2 pixel = vec2(2., i_float);
        vec4 attributes = texture(swimmersAttributesTexture, (pixel + .5) / TEXTURE_SIZE);
        return attributes.b;
    }

    float getSwimmerReactionTime(int i ) {
        float i_float = float(i);
        vec2 pixel = vec2(1., i_float);
        vec4 attributes = texture(swimmersAttributesTexture, (pixel + .5) / TEXTURE_SIZE);
        return attributes.r;
    }

    float getSwimmerNationality(int i ) {
        float i_float = float(i);
        vec2 pixel = vec2(1., i_float);
        vec4 attributes = texture(swimmersAttributesTexture, (pixel + .5) / TEXTURE_SIZE);
        return attributes.b;
    }

    float getSwimmerAltitude(int i ) {
        float i_float = float(i);
        vec2 pixel = vec2(1., i_float);
        vec4 attributes = texture(swimmersAttributesTexture, (pixel + .5) / TEXTURE_SIZE);
        return attributes.a;
    }

    float getSwimmerWaterDamping(int i ) {
        float i_float = float(i);
        vec2 pixel = vec2(2., i_float);
        vec4 attributes = texture(swimmersAttributesTexture, (pixel + .5) / TEXTURE_SIZE);
        return attributes.a;
    }


    float gaussian(float x, float mean, float std) {
        return exp(-(x - mean) * (x - mean) / (2. * std * std)) / (std * sqrt_2_PI);
    }

    float getRecordWave(vec2 coord) {
        float z = poolSize.z * coord.y;
        if (true || abs(z - wr) < 1.) {
            float amplitude = .2;
            float g = amplitude * gaussian(z, wr, .25);
            float w = exp(g - amplitude) - exp(-amplitude);
            return w;
        }
        return 0.;
    }

    void ripples(in vec2 coord, in vec2 eventPosition, in float eventTime, float intensity, out vec4 res) {
        float timeSinceDiving = time - eventTime;
        const float rippleSpeed = .5;
        const float maxTime = 10.;
        const float lambda = 2. * PI / 0.6;
        float frequency = 2.;
        float omega = 2. * PI * frequency;
        vec2 center = eventPosition;
        vec2 pos = (coord - .5) * poolSize.xz;
        vec2 diff = pos - center;
        float d = sqrt(dot(diff, diff));
        d*=2.;
        
        float r_max_max = 0.65;
        
        float r_max = max(0.3, intensity * r_max_max);
        float attenuationDist = r_max;
        
        float duration = 1.5;
        duration = 5.;
        float c =  cos(lambda * d - omega * timeSinceDiving);
        float attenuation = exp(-d / attenuationDist - timeSinceDiving / duration);
        bool condition = timeSinceDiving > d / frequency;
        if (condition) res.x += .05 * attenuation * c;
        if (c > 0.8 && condition) {
            res.y = max(res.y, min(1., 15.*attenuation));
            res.z = 1.;
            res.w = intensity;
        }
    }

    void divingRipples(in vec2 coord, in vec2 swimmerPosition, in vec2 divingInfo, out vec4 res) {
        float swimmer_x = swimmerPosition.x;
        float divingDistance = divingInfo.x;
        float divingTime = divingInfo.y;

        vec2 divingLocation = vec2(swimmer_x, divingDistance - poolSize.z / 2.);

        float divingDistRange = .7;
        float divingDistMin = 3.3;
        float intensity = (divingDistance - divingDistMin) / divingDistRange;
        
        ripples(coord, divingLocation, divingTime, intensity, res);
    }

    void breakoutRipples(in vec2 coord, in vec2 swimmerPosition, in vec2 breakoutInfo, out vec4 res) {
        float swimmer_x = swimmerPosition.x;
        float breakoutDistance = breakoutInfo.x;
        float breakoutTime = breakoutInfo.y;

        vec2 breakoutLocation = vec2(swimmer_x, breakoutDistance - poolSize.z / 2.);

        float breakoutDistRange = 1.3;
        float breakoutDistMin = 10.7;
        float intensity = (breakoutDistance - breakoutDistMin) / breakoutDistRange;
        
        ripples(coord, breakoutLocation, breakoutTime, intensity, res);
    }



    vec4 getDivingWaves(vec2 coord) {
        vec4 res = vec4(0., 0., -1., 0.);
        
        for (int i = 0; i < 10; i++) {
            float i_float = float(i);
            if (i_float > swimmersNumber - 0.1) break;
            vec2 swimmerPos = getSwimmerPosition(i);
            vec2 divingInfo = getSwimmerDivingInfo(i);
            vec2 breakoutInfo = getSwimmerBreakoutInfo(i);
            
            divingRipples(coord, swimmerPos, divingInfo, res);
            breakoutRipples(coord, swimmerPos, breakoutInfo, res);
            
        }
        return res;
    }
`,Ze=200,Et=`
/// The amount of 'sparks' to use (spark count between about 73-206 is known to crash Win7/Chrome)
uniform float iTime;
uniform vec2 iResolution;
uniform float sparksGlow;
uniform float sparksLengthFactor;
uniform float sparksGlowOffset;
uniform float sparksStroke;
uniform float sparksNumber;
uniform float sparksSizeFactor;
uniform float fov;
#define MAX_SPARKS `+Ze+`
/// The amount of 'sparks' to use (spark count between about 73-206 is known to crash Win7/Chrome)
#define SPARKS 40    // Low-end
//#define SPARKS 100   // Low-mid
//#define SPARKS 210   // Mid-high (recommended)
//#define SPARKS 500   // High
//#define SPARKS 1000  // Really High
//#define SPARKS 2000  // Insane

/// Switch between defines to choose different sets of settings
//#define ORIGINAL_SPARKS
//#define WATER_SPOUT
#define FIRE_STREAM
//#define STAR_BOMB
//#define WATER_LINE

#define SIZE_FACTOR 50.

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
	return r * sparkDirection -sqrt(1.0 - u1) * waterNormal;
	return r * sparkDirection + vec3(0., -sqrt(1.0 - u1), 0.);
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
	return max(max(length(pos - dir * x) - sparksStroke, x), -x-len);
}

vec4 color(float age) {
	float f = 1.0 - age * 0.05;
	#ifdef BLUE
	return vec4(0.2*f*f, 0.5*f*f+0.05, 0.5*f+0.4, min(f*2.0, 1.0));
	#else
	return vec4(0.5*f+0.4, 0.5*f*f+0.05, 0.2*f*f, min(f*2.0, 1.0));
	#endif
}

vec3 trace(vec3 rpos, vec3 rdir, vec2 fragCoord, vec3 center, float reactionTime) {
    // center *= 0.;

	float sparkT = planeIntersection(rpos - center, rdir, sparkPlaneNormal);
	float floorT = planeIntersection(rpos - center, rdir, waterNormal);

	// float sparkT = planeIntersection(rpos - center, rdir, vec3(0.587785, 0.0, -0.809017));
	// float floorT = planeIntersection(rpos - center, rdir, vec3(0., 1., 0.));
	
	vec4 col = vec4(0.0, 0.0, 0.0, rdir.y < 0.0 ? 1.0 : 1.0);
	vec3 sparkCol = vec3(0.0, 0.0, 0.0);
	
	vec3 floorPos = rpos + rdir * floorT;
	vec3 sparkPos = rpos + rdir * sparkT;

    float maxSparksSubstraction = 3.*sparksNumber / 4.;

    float attenuation = min(.9, (reactionTime - .1) / .2);

    float sizeFactor =  sparksSizeFactor / (1. - attenuation);

    float sparksSubstraction = maxSparksSubstraction * attenuation;
	
	float time = iTime * SPEED_FACTOR;
    if (time < 0. || time > 2. ) return vec3(0., 0., 0.);
	for (int i = 0; i < MAX_SPARKS; i++)
	{
        float float_i = float(i);
        if (float_i >= sparksNumber - sparksSubstraction) break;
		// Calculate spark position and velocity
		float a = spread(vec2(i, 1.0))*SPREAD_FACTOR+MIN_ANGLE;
		float b = spread(vec2(i, 3.0))*RAND_FACTOR;
		float startTime = spread(vec2(i, 5.0)) * GROUP_FACTOR;
		vec3 dir = sampleAngle(a) * 10.0 * (1. - attenuation);
        vec3 gravity = -1.2 * 2. * waterNormal / sizeFactor;
	
		vec3 start = -dir * (1.35 + b * 0.3) / sizeFactor;
		vec3 force = start * 0.02 + gravity;

		float c = (time + startTime) * 20.0;
        if (c > 20.) break;
		vec3 offset = center + start * c + force * c * c * 0.5;
        bool visible = true;
        if (dot(offset - center, waterNormal) < 0.) {
            visible = false;
        }
		
		vec3 v = start + force * c;
		float vel = length(v) * sparksLengthFactor;
		vec3 vdir = normalize(v);
		vec4 sc = color(c);
				
		// Shade floor
		if (true || rdir.y < 0.0) {
			vec3 spos = floorPos - offset;
			float h = cylinder(spos, vdir, vel);
						
			float invRad = 10.0;
			float dist = h * 0.5;
			float atten = 1.0 / (1.0 + 2.0 * invRad * dist + invRad * invRad * dist * dist);
			if (floorT <= sparkT && sparkT > 0.0) {
				dist += 0.8;
				atten += 1.0 / (1.0 + 100.0*dist*dist*dist);
			}
            atten /= sizeFactor;
			col += vec4(sc.xyz * sc.w * atten, 0.0) * brightness;
		}
	
		// Shade sparks
		if (visible) {
			vec3 spos = sparkPos - offset;			
			float h = cylinder(spos, vdir, vel);
				
			if (h < 0.0) {
				sparkCol += vec3(sc.xyz * sc.w);
			} else {
				float dist = h * 0.05 * sizeFactor + sparksGlowOffset;
				float atten = 1.0 / (1.0 + 100.0 * pow(dist, sparksGlow));
				sparkCol += sc.xyz * sc.w * (atten);
				// sparkCol += sc.xyz * sc.w * (atten + clamp(1.0 - h * sparkT * 0.05, 0.0, 1.0));
			}
		}
	}
	
	vec3 final =  col.xyz + sparkCol * brightness;
	return final + vec3(rand(vec2(fragCoord.x * fragCoord.y, iTime))) * 0.000002;
	return final + vec3(rand(vec2(fragCoord.x * fragCoord.y, iTime))) * 0.00002;
	return final + vec3(rand(vec2(fragCoord.x * fragCoord.y, iTime))) * 0.002;
}

// Ray-generation
vec3 sparks(vec2 px, vec3 offset, float reactionTime) {
	vec2 rd = (px / iResolution.yy - vec2(iResolution.x/iResolution.y*0.5-0.5, 0.0)) * 2.0 - 1.0;
    rd *= -1.;
    float d = 1. / tan(fov / 2.); // TODO pre compute this before shader
	vec3 rdir = normalize(vec3(rd.x , rd.y, d));
    vec3 center = (gl_ModelViewMatrix * vec4(offset, 1.)).xyz;
	return pow(trace(vec3(0., 0., 0.), rdir, px, center, reactionTime), vec3(0.4545));
}

`;var ge,$e,Je;class Re{constructor(i,n,l,m){xe(this,ge);if(this.gl=i,this.calibration=l,this.copyVideo=!1,this.show=!1,this.videoStartTime=m,i===null){alert("Unable to initialize WebGL. Your browser or machine may not support it.");return}i.clearColor(0,0,0,1),i.clear(i.COLOR_BUFFER_BIT),this.shader=new p.Shader(`
    out highp vec2 vTextureCoord;
    out vec3 waterNormal;
    out vec3 sparkPlaneNormal;
    out vec3 sparkDirection;
    out vec2 posScreen;

    uniform float ratio_screen;
    uniform float dx_screen;
    uniform mat4 calib_MVPMI;

    void main(void) {
        // vec4 posAbsolute = calib_MVPMI * vec4(gl_Vertex.xz*1000., 0., 1.);
        // vec4 posAbsolute = gl_ModelViewProjectionMatrixInverse * vec4(gl_Vertex.xz, 0., 1.);
        // gl_Position = gl_ModelViewProjectionMatrix * posAbsolute;
        gl_Position = vec4(gl_Vertex.xz, 0., 1.);
        gl_Position.x *= ratio_screen;

        waterNormal = (gl_ModelViewMatrix * vec4(0., 1., 0., 0.)).xyz;
        sparkPlaneNormal = (gl_ModelViewMatrix * vec4(-1., 0., 0., 0.)).xyz;
        sparkDirection = (gl_ModelViewMatrix * vec4(0., 0., 1., 0.)).xyz;
        vTextureCoord = gl_TexCoord.st;
        posScreen = gl_Position.xy;
    }
`,`
    in highp vec2 vTextureCoord;
    in vec3 waterNormal;
    in vec3 sparkPlaneNormal;
    in vec3 sparkDirection;
    in vec2 posScreen;
    out vec4 fragColor;

    uniform sampler2D uSampler;
    uniform sampler2D screen;
    uniform bool screenAvailabe;
    uniform bool sparksEnabled;
    uniform vec3 poolSize;
    uniform bool thresholdBlending;
    uniform float blendingThreshold;
    uniform float opacity;
    uniform float distanceFixed;
    uniform bool hideObstructions;
    uniform float hideObstructionThreshold;

    `+Et+be+`

    float cross2D(vec2 a, vec2 b) {
        return a.x * b.y - a.y * b.x;
    }

    bool isOverPool(vec2 p) {
        vec4 A = vec4(-poolSize.x/2., 0., poolSize.z/2., 1.);
        vec4 B = vec4(-poolSize.x/2., 0., -poolSize.z/2., 1.);
        vec4 C = vec4(poolSize.x/2., 0., -poolSize.z/2., 1.);
        vec4 D = vec4(poolSize.x/2., 0., poolSize.z/2., 1.);

        vec4 a_hom = gl_ModelViewProjectionMatrix*A;
        vec4 b_hom = gl_ModelViewProjectionMatrix*B;
        vec4 c_hom = gl_ModelViewProjectionMatrix*C;
        vec4 d_hom = gl_ModelViewProjectionMatrix*D;

        vec2 a = a_hom.xy / a_hom.w;
        vec2 b = b_hom.xy / b_hom.w;
        vec2 c = c_hom.xy / c_hom.w;
        vec2 d = d_hom.xy / d_hom.w;


        float c1 = cross2D(b-a, p-a);
        float c2 = cross2D(c-b, p-b);
        float c3 = cross2D(d-c, p-c);
        float c4 = cross2D(a-d, p-d);

        
        return c1 <= 0. && c2 <= 0. && c3 <= 0. && c4 <= 0.;


    }

    void main(void) {
        highp vec4 texelColor = texture(uSampler, vTextureCoord);

        if (screenAvailabe) {
            vec4 screenColor = texture(screen, posScreen/2. + .5);
            float alpha = screenColor.a;
            if (alpha < .9) {
                fragColor = vec4(0., 0., 0., 0.);
                return;
                // fragColor.a = 0.;
            }
            else {
                fragColor = texelColor;
                return;
            }
        }
        // if (max(max(texelColor.r, texelColor.g), texelColor.b) < .2){
        //     fragColor = vec4(0., 0., 0., 0.);
        //     return;
        // }
        
        vec3 waterColor = vec3(.294, .812, 1.);

        vec3 waterColor1 = vec3(.39, .98, .9);
        vec3 waterColor2 = vec3(.08, .57, .59);

        float r = opacity;
        if (thresholdBlending) {
            if (length(waterColor - texelColor.rgb) < blendingThreshold ||
             length(texelColor.rgb) > 1.5 && texelColor.b > .1 + (texelColor.r + texelColor.g) * .5) r = 0.3 * opacity;
        }
        fragColor = vec4(texelColor.rgb, r);

        if (hideObstructions && isOverPool(posScreen)){
            if (max(max(texelColor.r, texelColor.g), texelColor.b) < hideObstructionThreshold) fragColor = vec4(0., 0., 0., 0.);
            // return;
        }

        

        // vec4 backgroundCol = texture(screen, (posScreen+1.)/2.);
        // if (backgroundCol.r > .6) {
        //     fragColor = vec4(0., 0., 0., 1.);
        // }
        //fragColor.a += 1. - r;
        if (!sparksEnabled) return;
        vec3 spark1 = sparks(gl_FragCoord.xy, vec3(2., 1., -poolSize.z / 2.), .1);
        vec3 spark2 = sparks(gl_FragCoord.xy, vec3(-2., 1., -poolSize.z / 2.), .1);
        vec3 spark = vec3(0., 0., 0.);
        // spark = spark1 + spark2;
        for (int i = 0; i < 10; i++) {
            float i_float = float(i);
            vec3 sparkPos = vec3(25. / 2. - 25. / 10. / 2. - i_float * 25./10., 1., -25.);
            float reactionTime = getSwimmerReactionTime(i);
            spark += sparks(gl_FragCoord.xy, sparkPos, reactionTime);
        }
        // fragColor = vec4(mix(fragColor.rgb, spark, .5), max(0.5, 2.*length(spark)));
        fragColor = vec4(mix(fragColor.rgb, spark, 2.*length(spark)), max(0.5, 2.*length(spark)));
        if (thresholdBlending) {
            fragColor.a = r;
        }
        // fragColor = vec4(fragColor.rgb + spark, max(0.5, 2.*length(spark)));
        // float m = max(fragColor.r, max(fragColor.g, fragColor.b));
        // if (m > 1.) fragColor.rgb /= m;
        // fragColor = vec4(spark, 2.*length(spark));
        // fragColor = vec4(1, 0, 0, 1);
    }
`),this.mesh=p.Mesh.plane({width:2,height:2,coords:!0,normals:!0}),this.mesh.transform(p.Matrix.rotate(90,1,0,0)),this.mesh.transform(p.Matrix.translate(0,.1,0)),this.programInfo=null,this.texture=this.initTexture(),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!0),n!=""&&(this.video=this.setupVideo(n))}render(){let i=!1;const n=t.params.visualizations.sparks,l=t.params.simulation.poolSize;if(!t.params.video.show)return;this.copyVideo&&this.updateTexture(),(!this.mesh.vertexBuffers||!this.mesh.vertexBuffers.vertex)&&this.mesh.compile(),this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture);const f=16*this.gl.canvas.height/9,x=(this.gl.canvas.width-f)/2,S=this.gl.modelviewMatrix;this.gl.projectionMatrix.multiply(S).inverse(),V.swimmersAttributesTexture&&V.swimmersAttributesTexture.bind(1),i=t.classicalOverlayEnabled&&t.drawingFameBuffer!==null,i&&(this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,t.drawingFameBufferB),t.gl.activeTexture(t.gl.TEXTURE15),t.gl.bindTexture(t.gl.TEXTURE_2D,t.drawingTexture)),this.shader.uniforms({ratio_screen:f/this.gl.canvas.width,dx_screen:x/this.gl.canvas.width,calib_MVPMI:t.MVPMI?t.MVPMI.m:new Float32Array(16),uSampler:0,swimmersHelperFunctions:1,screen:15,screenAvailabe:i,iTime:t.getRaceTime(),poolSize:[l.x,l.y,l.z],iResolution:[this.gl.canvas.width,this.gl.canvas.height],sparksEnabled:n.enabled,sparksGlow:n.glow,sparksGlowOffset:n.glowOffset,sparksStroke:n.stroke,sparksNumber:n.num,sparksLengthFactor:n.lengthFactor,sparksSizeFactor:n.sizeFactor,fov:n.fov,thresholdBlending:t.params.video.thresholdBlending,blendingThreshold:t.params.video.blendingThreshold,opacity:t.params.video.opacity,distanceFixed:t.distanceFixed,hideObstructions:t.params.video.hideObstructions,hideObstructionThreshold:t.params.video.hideObstructionThreshold}).draw(this.mesh),this.gl.disable(this.gl.BLEND),this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height),i&&K(this,ge,$e).call(this)}async setTime(i){if(!this.copyVideo||Math.abs(this.video.currentTime-i)<1e-6)return;const n=this.video;let l;const m=new Promise(f=>{l=f});if(n.currentTime=i,n.requestVideoFrameCallback)n.requestVideoFrameCallback(()=>l());else{const f=()=>{n.removeEventListener("seeked",f),l()};n.addEventListener("seeked",f,{once:!0})}await m}initTexture(){const i=this.gl.createTexture();this.gl.bindTexture(this.gl.TEXTURE_2D,i);const n=0,l=this.gl.RGBA,m=1,f=1,x=0,S=this.gl.RGBA,P=this.gl.UNSIGNED_BYTE,L=new Uint8Array([0,0,255,255]);return this.gl.texImage2D(this.gl.TEXTURE_2D,n,l,m,f,x,S,P,L),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),i}updateTexture(){const n=this.gl.RGBA,l=this.gl.RGBA,m=this.gl.UNSIGNED_BYTE;this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture),this.gl.texImage2D(this.gl.TEXTURE_2D,0,n,l,m,this.video)}setupVideo(i){const n=document.createElement("video");let l=!1,m=!1;n.playsInline=!0,n.muted=!0,n.loop=!1,n.addEventListener("playing",()=>{l=!0,x()},!0),n.addEventListener("timeupdate",()=>{m=!0,x()},!0),n.src=i,n.play();const f=this,x=()=>{l&&m&&(f.copyVideo=!0,n.paused||K(this,ge,Je).call(this))};return n}}ge=new WeakSet,$e=function(){const i=t.drawingTextureB;t.drawingTextureB=t.drawingTexture,t.drawingTexture=i,this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,t.drawingFameBufferB),this.gl.bindTexture(this.gl.TEXTURE_2D,t.drawingTextureB),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,t.drawingTextureB,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,t.drawingFrameBuffer),this.gl.bindTexture(this.gl.TEXTURE_2D,this.drawingTexture),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,t.drawingTexture,0)},Je=function(){this.hasPausedFirstTime||(this.hasPausedFirstTime=!0,this.video.pause())};class ze{constructor(i,{poolSize:n=new GL.Vector(2,2),waterResolution:l=new GL.Vector(256,256),thresholdBlending:m=!1,numSwimmers:f=1,dataFolder:x=null}){this.title=i,this.videos=[],this.poolSize=n,this.waterResolution=l,this.numSwimmers=f,this.thresholdBlending=m,this.dataFolder=x}addVideo(i){this.videos.push(i)}async parseData(i){for(let n=0;n<i.length;n++)await i[n].parseData(this.dataFolder+n+".csv")}}const Ue=new p.Vector(0,-4,0);class pe{constructor(i,n,l=new p.Vector(1,1,1),m=null){this.initCenter=new p.Vector(i.x,i.y,i.z),this.center=new p.Vector(i.x,i.y,i.z),this.oldCenter=new p.Vector(i.x,i.y,i.z),this.radius=n,this.cinematic=!1,this.velocity=new p.Vector(0,0,0),this.acceleration=new p.Vector(0,0,0),this.mass=4/3*Math.PI*Math.pow(n,3)*1e3,this.invMass=1/this.mass,this.radiusSquared=n*n,this.mesh=p.Mesh.sphere({detail:10}),this.followTarget=!1,this.showStreak=!1,this.buoyancyFactor=m,this.color=l}spawnSplashes(i){if(!t.params.simulation.splashes.enabled&&!t.params.visualizations.showStreaks)return;const n=this.center.subtract(this.oldCenter).multiply(1/i),l=n.z>0?-Math.PI/2:Math.PI/2,m=n.dot(n);let f=this.center.subtract(this.velocity.unit());t.isSceneSynchronizedSwimming()&&(f=this.center.clone()),f.y=.15,!t.isSceneSynchronizedSwimming()&&t.params.simulation.splashes.enabled&&this.center.x<100&&Math.abs(this.center.y)<=this.radius&&t.splashParticles.spawnSplash(f,l,Math.sqrt(m),t.params.simulation.splashes.strengthThreshold,{});let x=(this.velocity.length()-1.6)/.9;const S={fixed:!0};if(t.isSceneSynchronizedSwimming())S.shrinking=.02;else{const P=new p.Vector(x,0,1-x);P.multiply(1/P.max()),S.color=P}S.shrinking=.2,t.params.visualizations.showStreaks&&this.showStreak&&this.velocity.length()>.01&&t.splashParticles.spawnSplash(this.center,0,x,0,S)}update(i){if(this.moved||(this.oldCenter=new p.Vector(this.center.x,this.center.y,this.center.z)),this.moved=!1,this.cinematic){if(this.followTarget||(this.velocity=new p.Vector(0,0,0)),!this.targetPos||!this.followTarget)return;let n=i/this.targetTime;n=Math.min(Math.max(n,0),1),this.center=this.center.multiply(1-n).add(this.targetPos.multiply(n)),this.velocity=this.center.subtract(this.oldCenter).multiply(1/i),this.targetTime-=i,this.targetTime<0&&(this.targetPos=null)}else{const n=Math.max(0,Math.min(1,(this.radius-this.center.y)/(2*this.radius))),l=this.buoyancyFactor?this.buoyancyFactor:t.params.simulation.buoyancyFactor,m=Ue.multiply(-l*this.mass*n),f=this.velocity.unit().multiply(-1e3*this.radiusSquared*n*this.velocity.dot(this.velocity));this.addForce(f),this.addForce(m),this.addForce(Ue.multiply(this.mass)),this.velocity=this.velocity.add(this.acceleration.multiply(i)),this.acceleration=new p.Vector(0,0,0),this.center=this.center.add(this.velocity.multiply(i)),this.center.y<this.radius-t.params.simulation.poolSize.y&&(this.center.y=this.radius-1,this.velocity.y=Math.abs(this.velocity.y)*.7)}}setTarget(i,n){this.targetPos=i,this.targetTime=n}addForce(i){this.cinematic?console.warn("Trying to add force to a cinematic sphere."):this.acceleration=this.acceleration.add(i.multiply(this.invMass))}move(i){this.moved=!0,this.oldCenter=new p.Vector(this.center.x,this.center.y,this.center.z),this.center=new p.Vector(i.x,i.y,i.z),this.cinematic||console.warn("Moving a non cinematic sphere.")}}class Tt{constructor(){this.mesh=new p.Mesh.plane({width:2,height:2,coords:!0,normals:!0}),this.waterTexture=null,this.shader=new p.Shader(`
            out highp vec2 pos;
            out highp vec2 vTextureCoord;


            void main(void) {
                gl_Position = vec4(gl_Vertex.xy, 0., 1.);
                pos = gl_Vertex.xz;

                vTextureCoord = gl_TexCoord.st;
            }
        `,`
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
        `)}updateFoam(i){if(!this.waterTexture){console.log("NO WATER TO UPDATE FOAM");return}this.foamTexNext.swapWith(this.foamTexPrev),this.foamTexNext.drawTo(()=>{this.foamTexPrev.bind(0),t.water.textureA.bind(1),this.shader.uniforms({foamTexPrev:0,water:1,dt:i,seed:t.time,poolSize:[t.params.simulation.poolSize.x,t.params.simulation.poolSize.y,t.params.simulation.poolSize.z],timeVariation:t.params.simulation.foam.timeVariation,spaceVariation:t.params.simulation.foam.spaceVariation,velThreshold:t.params.simulation.foam.velThreshold,velMax:t.params.simulation.foam.velMax,dispersion:t.params.simulation.foam.dispersion,attenuation:t.params.simulation.foam.attenuation}).draw(this.mesh)})}resetTextures(i,n,l){this.foamTexPrev=new p.Texture(i,n,{type:t.gl.FLOAT,filter:t.gl.LINEAR}),this.foamTexNext=new p.Texture(i,n,{type:t.gl.FLOAT,filter:t.gl.LINEAR}),this.waterTexture=l}}function ae(a,i=null){this.gl=a,this.visualizationWavesEnabled=!0,this.sqrt_2_PI=Math.sqrt(2*Math.PI),this.foam=new Tt;var n=`
    out vec2 coord;
    uniform vec2 invPoolSizeVertex;
    void main() {
      coord = gl_Vertex.xy * invPoolSizeVertex + 0.5;
      gl_Position = vec4(gl_Vertex.xy * 2. * invPoolSizeVertex, 0., 1.0);
    }
  `;this.reset(i),p.Texture.canUseFloatingPointTextures(),this.dropShader=new p.Shader(n,`
    const float PI = 3.141592653589793;
    uniform sampler2D tex;
    uniform vec2 center;
    uniform vec3 poolSize;
    uniform float radius;
    uniform float strength;
    in vec2 coord;
    out vec4 fragColor;
    void main() {
      /* get vertex info */
      vec4 info = texture(tex, coord);
      
      /* add the drop to the height */
      float drop = max(0.0, 1.0 - length(center * 0.5 + 0.5 - coord) / (radius / poolSize.z));
      drop = 0.5 - cos(drop * PI) * 0.5;
      info.r += drop * strength;
      
      fragColor = info;
    }
  `),this.updateShader=new p.Shader(n,`
    uniform sampler2D tex;
    uniform vec2 delta;
    uniform float prev_wr;
    uniform float damping;
    uniform float sqrt_2_PI;
    uniform vec3 poolSize;
    `+be+`
    in vec2 coord;
    out vec4 fragColor;


    void main() {
      /* get vertex info */
      vec4 info = texture(tex, coord);

      /* calculate average neighbor height */
      vec2 dx = vec2(delta.x, 0.0);
      vec2 dy = vec2(0.0, delta.y);
      float average = (
      texture(tex, coord - dx).r +
      texture(tex, coord - dy).r +
      texture(tex, coord + dx).r +
      texture(tex, coord + dy).r
    ) * 0.25;

    /* change the velocity to move toward the average */
    info.g += (average - info.r) * 2.0;

    /* attenuate the velocity a little so waves do not last forever */
    float d = damping;
    vec2 pos = (coord - .5) * poolSize.xz;
    float halfLane = poolSize.x / 20.;
    for (int i = 0; i < 10; i++) {
    float i_float = float(i);
      if (i_float > swimmersNumber - 0.1) break;
      vec2 swimmerPos = getSwimmerPosition(i);
      if (abs(swimmerPos.x - pos.x) <= halfLane) {
        d = getSwimmerWaterDamping(i);
        break;
      }
    }
    info.g *= 1. - d;/*TODO parametriser ça*/

    /* move the vertex along the velocity */
    info.r += info.g;
      

    fragColor = info;
  }
  `),this.normalShader=new p.Shader(n,`
    uniform sampler2D tex;
    uniform vec2 delta;
    in vec2 coord;
    out vec4 fragColor;
  void main() {
      /* get vertex info */
      vec4 info = texture(tex, coord);

      /* update the normal */
      vec3 dx = vec3(delta.x, texture(tex, vec2(coord.x + delta.x, coord.y)).r - info.r, 0.0);
      vec3 dy = vec3(0.0, texture(tex, vec2(coord.x, coord.y + delta.y)).r - info.r, delta.y);
    info.ba = normalize(cross(dy, dx)).xz;

    fragColor = info;
  }
  `),this.sphereShader=new p.Shader(`
    out vec2 coord;
    uniform vec2 invPoolSizeVertex;
    void main() {
      coord = gl_Vertex.xy * invPoolSizeVertex + 0.5;
      // displacement = texture(displacementTexture, coord).r;
      // oldDisplacement = texture(oldDisplacementTexture, coord).r;

      gl_Position = vec4(gl_Vertex.xy * 2. * invPoolSizeVertex, 0., 1.0);
    }
  `,`
    uniform sampler2D tex;
    
    
    uniform vec3 poolSize;
    in vec2 coord;
    uniform sampler2D oldDisplacementTexture;
    uniform sampler2D displacementTexture;
    uniform bool optimized;
    uniform float radius;
    uniform vec3 newCenter;
    uniform vec3 oldCenter;

    out vec4 fragColor;
    
    float volumeInSphere(vec3 center) {
      vec3 toCenter = vec3((coord.x - 0.5) * poolSize.x, 0.0, (coord.y - 0.5) * poolSize.z) - center;
      float t = length(toCenter) / radius;
      float dy = exp(-pow(t * 1.5, 6.0));
      float ymin = min(0.0, center.y - dy);
      float ymax = min(max(0.0, center.y + dy), ymin + 2.0 * dy);
    return (ymax - ymin) * 0.1;
  }

  void main() {

  vec4 info = texture(tex, coord);
  
  if (optimized) {
      float displacement = texture(displacementTexture, coord).r;
      float oldDisplacement = texture(oldDisplacementTexture, coord).r;

      
      info.r += oldDisplacement - displacement;
      fragColor = info;
      return;
    }

    fragColor = info;

    // vec2 diff = oldCenter.xz - newCenter.xz;
    // float distSq = dot(diff, diff);
    // float eps = poolSize.x * .5;
    if (abs(newCenter.z) > 2.*poolSize.z) return;

    // /* add the old volume */
    info.r += volumeInSphere(oldCenter);

    // /* subtract the new volume */
    info.r -= volumeInSphere(newCenter);

    fragColor = info;
  }
  `),this.visualizationWavesShader=new p.Shader(n,`
    uniform sampler2D tex;
    uniform bool add;
    uniform vec3 poolSize;
    uniform bool showWR;
    uniform bool showDivingDistance;
    in vec2 coord;
    out vec4 fragColor;
    uniform float t;

    `+be+`

    const int order = 20;

    uniform float amplitudeFactor;
    uniform float frequencyFactor;
    uniform float amplitude;
    uniform float omega0;
    uniform float waveLength0;

    float rand(vec2 co){return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);}

    float waveFunctionExp(vec2 pos) {
      float y = 0.0;
      for (int i = 0; i < 20; i++) {
        float i_float = float(i); 
        float seed = i_float + .5;
        float kx = rand(vec2(seed, seed));
        float ky = rand(vec2(seed, -seed));
        float omega = rand(vec2(-seed, seed));
        vec2 k = normalize(vec2(kx, ky));
        k *= waveLength0 * pow(frequencyFactor, i_float);
        omega = omega0 * (omega - .5) * pow(frequencyFactor, i_float);
        float s = sin(dot(k, pos) + omega * t) * amplitude * pow(amplitudeFactor, i_float);
        y += exp(s - 1.0) - .37;
      }
      return y;
    }

    float interpIntensity(float intensity) {
      return 1. - sqrt(2.*intensity - intensity * intensity);
    }

    void main() {
      vec4 info = texture(tex, coord);
      float w = 0.;
      if(showDivingDistance) w += getDivingWaves(coord).x;
      if(showWR) w += getRecordWave(coord);
      info.r += add ? w : -w;
      float h = 0.;
      if (time < 0.) {
        float interval = 5.;
        float intensity = -time / interval;
        // intensity = .5;
        intensity = min(max(intensity, 0.), 1.);
        intensity = 1. - intensity;
        intensity = interpIntensity(intensity);
        h = waveFunctionExp(coord*poolSize.xz) * intensity;
      }
      info.r += add ? h : -h;
      fragColor = info;

    }
    `)}ae.prototype.resetTextures=function(){const a=this.gl;this.textureA&&a.deleteTexture(this.textureA.id),this.textureB&&a.deleteTexture(this.textureB.id),this.textureA=new p.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:i}),this.textureB=new p.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:i}),this.foam.resetTextures(this.W,this.H,this.textureA),this.areaConservationTexture=new p.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:i}),this.showAreaConservedGrid=!1,this.showProjectionGrid=!1,this.invPoolSize=new p.Vector(1/t.params.simulation.poolSize.x,1/t.params.simulation.poolSize.y,1/t.params.simulation.poolSize.z);var i=p.Texture.canUseFloatingPointLinearFiltering()?this.gl.LINEAR:this.gl.NEAREST;(!this.textureA.canDrawTo()||!this.textureB.canDrawTo())&&p.Texture.canUseHalfFloatingPointTextures()&&(console.log("No draw"),i=p.Texture.canUseHalfFloatingPointLinearFiltering()?this.gl.LINEAR:this.gl.NEAREST,this.textureA=new p.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:i}),this.textureB=new p.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:i}))};ae.prototype.reset=function(a=null){this.WR_position=1e5,this.prev_WR_position=0,a!==null?(console.log("resolution.y : "+a.y),this.W=Math.round(a.x),this.H=Math.round(a.y),console.log("Using custom resolution:",this.W,this.H)):(this.W=256,this.H=256),V.reset(new p.Vector(this.W,this.H)),this.plane=p.Mesh.plane({detail:255,width:t.params.simulation.poolSize.x,height:t.params.simulation.poolSize.z}),this.delta=new p.Vector(1/this.W,1/this.H),this.resetTextures()};ae.prototype.addDrop=function(a,i,n,l){var m=this;this.textureB.drawTo(function(){m.textureA.bind(),m.dropShader.uniforms({invPoolSizeVertex:[m.invPoolSize.x,m.invPoolSize.z],center:[a,i],radius:n,strength:l,poolSize:[t.params.simulation.poolSize.x,t.params.simulation.poolSize.y,t.params.simulation.poolSize.z]}).draw(m.plane)}),this.textureB.swapWith(this.textureA)};ae.prototype.addOrRemoveVisualizationWaves=function(a){if(t.classicalOverlayEnabled)return;const i=2.155;if(this.prev_WR_position=this.WR_position,this.WR_position=t.getRaceTime()*i,this.WR_position>t.params.simulation.poolSize.z&&(this.WR_position=2*t.params.simulation.poolSize.z-this.WR_position),!(!this.visualizationWavesEnabled||!V.raceHasStarted)){var n=this;this.textureB.drawTo(function(){n.textureA.bind();const l=V.getAttributesTexture();l&&l.bind(1),n.visualizationWavesShader.uniforms({swimmersAttributesTexture:1,showDivingDistance:t.params.visualizations.showDivingDistance,showWR:t.params.visualizations.showWR,invPoolSizeVertex:[n.invPoolSize.x,n.invPoolSize.z],poolSize:[t.params.simulation.poolSize.x,t.params.simulation.poolSize.y,t.params.simulation.poolSize.z],wr:n.WR_position,sqrt_2_PI:n.sqrt_2_PI,add:a,swimmersNumber:t.swimmers.length,time:t.getRaceTime(),t:t.time,amplitudeFactor:t.params.quiver.amplitudeFactor,frequencyFactor:t.params.quiver.frequencyFactor,amplitude:t.params.quiver.amplitude,omega0:t.params.quiver.omega,waveLength0:t.params.quiver.waveLength}).draw(n.plane)}),this.textureB.swapWith(this.textureA)}};ae.prototype.updateSpheres=function(a){if(t.params.simulation.optimized)V.attributes.draw(),this.textureB.drawTo(()=>{this.textureA.bind(),V.bindDisplacementTexture(1),V.bindOldDisplacementTexture(2),this.sphereShader.uniforms({oldDisplacementTexture:2,displacementTexture:1,invPoolSizeVertex:[this.invPoolSize.x,this.invPoolSize.z],poolSize:[t.params.simulation.poolSize.x,t.params.simulation.poolSize.y,t.params.simulation.poolSize.z],optimized:!0}).draw(this.plane),this.textureB.swapWith(this.textureA),V.attributes.draw()});else{const i=[];t.swimmers.forEach(n=>n.spheres.forEach(l=>i.push(l)));for(let n=0;n<i.length;n++){const l=i[n];this.moveSphere(l.oldCenter,l.center,l.radius)}}};ae.prototype.moveSphere=function(a,i,n){var l=this;this.textureB.drawTo(function(){l.textureA.bind(),l.sphereShader.uniforms({invPoolSizeVertex:[l.invPoolSize.x,l.invPoolSize.z],oldCenter:a,newCenter:i,radius:n,poolSize:[t.params.simulation.poolSize.x,t.params.simulation.poolSize.y,t.params.simulation.poolSize.z],optimized:!1}).draw(l.plane)}),this.textureB.swapWith(this.textureA)};ae.prototype.stepSimulation=function(a){var i=this;this.textureB.drawTo(function(){i.textureA.bind();const n=V.getAttributesTexture();n&&n.bind(2),i.updateShader.uniforms({swimmersAttributesTexture:2,swimmersNumber:t.swimmers.length,invPoolSizeVertex:[i.invPoolSize.x,i.invPoolSize.z],delta:[i.delta.x,i.delta.y],time:t.time,wr:i.WR_position,prev_wr:i.prev_WR_position,poolSize:[t.params.simulation.poolSize.x,t.params.simulation.poolSize.y,t.params.simulation.poolSize.z],sqrt_2_PI:i.sqrt_2_PI,damping:t.params.simulation.waterDamping}).draw(i.plane)}),this.textureB.swapWith(this.textureA),t.params.simulation.foam.enabled&&this.foam.updateFoam(a),this.updateAreaConservation()};ae.prototype.updateNormals=function(){var a=this;this.textureB.drawTo(function(){a.textureA.bind(),a.normalShader.uniforms({invPoolSizeVertex:[a.invPoolSize.x,a.invPoolSize.z],delta:[a.delta.x,a.delta.y]}).draw(a.plane)}),this.textureB.swapWith(this.textureA)};ae.prototype.updateAreaConservation=function(){if(!t.params.visualizations.areaConservationEnabled)return;var a,i,n;if(this.textureA.type===this.gl.FLOAT)a=this.gl.FLOAT,i=Float32Array,n="EXT_color_buffer_float";else if(this.textureA.type===this.gl.HALF_FLOAT_OES)a=this.gl.HALF_FLOAT_OES,i=Uint16Array,n="EXT_color_buffer_half_float";else{console.warn("Unsupported texture type for reading");return}if(!this.gl.getExtension(n)){console.warn(n+" not available; cannot read pixels");return}this.fb||(this.fb=this.gl.createFramebuffer()),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.fb),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,this.textureA.id,0);const l=this.gl.checkFramebufferStatus(this.gl.FRAMEBUFFER);if(l!==this.gl.FRAMEBUFFER_COMPLETE){console.error("Framebuffer incomplete: "+l+" for texture type "+this.textureA.type),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null);return}this.gl.pixelStorei(this.gl.PACK_ALIGNMENT,1);const m=new i(this.W*this.H*4),f=new Float32Array(this.W*this.H*4);this.gl.readPixels(0,0,this.W,this.H,this.gl.RGBA,a,m);for(let B=0;B<this.W;B++)f[B*4+1]=1;const x=t.params.simulation.poolSize.x/this.W,S=t.params.simulation.poolSize.z/this.H,P=x*x,L=S*S;if(this.textureA.type===this.gl.FLOAT){for(let B=0;B<this.H;B+=1)for(let y=0;y<this.W;y+=1){const O=(B*this.W+y)*4,k=((this.H-1-B)*this.W+y)*4,v=f[k],_=f[k+1];if(y+1<this.W){const C=m[O]-m[O+4],N=Math.sqrt(C*C+P);f[k+4]=v+N}if(B+1<this.H){const C=m[O]-m[O+this.W*4],N=Math.sqrt(C*C+L);f[k-4*this.W+1]=_+N}}this.gl.bindTexture(this.gl.TEXTURE_2D,this.areaConservationTexture.id),this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT,1),this.gl.texSubImage2D(this.gl.TEXTURE_2D,0,0,0,this.W,this.H,this.gl.RGBA,this.gl.FLOAT,f)}this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.bindTexture(this.gl.TEXTURE_2D,null)};const bt=`#version 300 es
    in vec3 pos;
    in float life;
    in float size;
    in vec3 color;
    in float isFixed;

    out float vLife;
    out vec3 vColor;
    out float altitude;
    out float vFixed;
    out float vSize;

    uniform mat4 MVM;
    uniform mat4 projection;
    uniform bool showStreaks;
    uniform bool showSplashes;


    void main() {
        vec4 posInView = MVM * vec4(pos, 1.);
        gl_Position = projection * posInView;
        // gl_Position = vec4(0., 0., 0., 1.);
        gl_PointSize = size * 5000. / -posInView.z;

        // if (isFixed > 0.) gl_PointSize = 500. / -posInView.z;

        if (isFixed > 0. && !showStreaks) gl_PointSize = 0.;
        if (isFixed == 0. && !showSplashes) gl_PointSize = 0.;

        vLife = life;
        vColor = min(color, 1.);
        altitude = pos.y;
        vFixed = isFixed;
        vSize = size;
    }

`,_t=`#version 300 es
    precision mediump float;

    in float vLife;
    in vec3 vColor;
    in float altitude;
    in float vFixed;
    in float vSize;

    out vec4 fragColor;

    float max3(vec3 v) {
        return max(max(v.x, v.y), v.z);
    }

    void main() {
        vec3 col = vColor;
        // if (isFixed) {
        //     col = vec3(vColor, 0., 1. - vColor);
        //     col /= max3(col);
        // }
        vec2 uv = gl_PointCoord - 0.5;

        float d = length(uv);

        // soft circle
        float alpha = smoothstep(0.5, 0.0, d);

        if (vSize >= .3) alpha *= 2.; 

        // fade with life
        if(vFixed < .1) alpha *= vLife;
        else alpha *= pow(vLife, 1.);

        if (altitude < 0. && vFixed >.1) alpha /= (1.-altitude)*2.;

        if (altitude < 0. && vFixed < .1) alpha /= (1.-altitude)*4.;

        if (vLife > 1.) alpha = 0.;
        fragColor = vec4(col, alpha);
    }

`,St=-9.8,We=.01;class Ge{constructor(i,n,l,m,{shrinking:f=1,size:x=null}){this.pos=i,this.vel=n,this.fixed=l,this.color=m,this.life=1,this.size=x||Math.random()*.05+.02,this.shrinking=f}update(i){if(this.fixed){this.life-=i*.15*this.shrinking;return}this.life-=i*1.5*this.shrinking,this.vel.y+=St*i,this.pos=this.pos.add(this.vel.multiply(i)),this.vel=this.vel.multiply(1-We),this.size*=1-We*this.shrinking}}class Rt{constructor(i){this.gl=i,this.particles=[],this.particleBuffer=this.gl.createBuffer(),this.initPrograms()}spawnSplash(i,n,l,m,{fixed:f=!1,color:x=new p.Vector(1,1,1),speed0:S=1,maxParticles:P=15,shrinking:L=null,size:B=null}){let y=L!==null?L:1;if(f){const k=new p.Vector(0,0,0),v=x||new p.Vector(l,0,1-l);x===null&&v.multiply(1/v.max());const _=B||.1,C=new Ge(i,k,f,v,{shrinking:y,size:_});C.life+=y*.1,this.particles.push(C);return}const O=Math.min(P,l*20);for(let k=0;k<O;k++){const v=(Math.random()-.5)*Math.PI,_=Math.random()*2*Math.PI,C=S*(.5+Math.random()),N=new p.Vector(Math.sin(v)*Math.cos(_)*C,Math.cos(v)*C,Math.sin(v)*Math.sin(_)*C);this.particles.push(new Ge(i,N,f,x,{shrinking:y}))}}update(i){this.particles.forEach((n,l)=>{n.update(i),n.life<=0&&this.particles.splice(l,1)})}buildShader(i,n){const l=this.gl.createShader(n);return this.gl.shaderSource(l,i),this.gl.compileShader(l),l}createProgram(i){const n=this.gl.createProgram();return i.forEach(l=>{this.gl.attachShader(n,l)}),this.gl.linkProgram(n),n}checkShaders(i,n,l){this.gl.getShaderParameter(i,this.gl.COMPILE_STATUS)||console.error(this.gl.getShaderInfoLog(i)),this.gl.getShaderParameter(n,this.gl.COMPILE_STATUS)||console.error(this.gl.getShaderInfoLog(n)),this.gl.getProgramParameter(l,this.gl.LINK_STATUS)||console.error(this.gl.getProgramInfoLog(l))}buildProgram(i,n){const l=this.buildShader(i,this.gl.VERTEX_SHADER),m=this.buildShader(n,this.gl.FRAGMENT_SHADER),f=this.createProgram([l,m]);return this.checkShaders(l,m,f),f}initPrograms(){this.program=this.buildProgram(bt,_t)}draw({showStreaks:i=!0,showSplashes:n=!0}){const l=this.gl;l.enable(l.BLEND),l.blendFunc(l.SRC_ALPHA,l.ONE_MINUS_SRC_ALPHA);const m=[];this.particles.forEach(D=>{const Z=D.pos;m.push(Z.x,Z.y,Z.z,D.life,D.size,D.color.x,D.color.y,D.color.z,D.fixed)}),l.bindBuffer(l.ARRAY_BUFFER,this.particleBuffer),l.bufferData(l.ARRAY_BUFFER,new Float32Array(m),l.DYNAMIC_DRAW),l.useProgram(this.program);const f=l.getUniformLocation(this.program,"MVM"),x=new Float32Array(l.modelviewMatrix.m);l.uniformMatrix4fv(f,!0,x);const S=l.getUniformLocation(this.program,"projection"),P=new Float32Array(l.projectionMatrix.m);l.uniformMatrix4fv(S,!0,P);const L=l.getUniformLocation(this.program,"showStreaks");l.uniform1i(L,i);const B=l.getUniformLocation(this.program,"showSplashes");l.uniform1i(B,n);const y=l.getAttribLocation(this.program,"pos"),O=l.getAttribLocation(this.program,"life"),k=l.getAttribLocation(this.program,"size"),v=l.getAttribLocation(this.program,"color"),_=l.getAttribLocation(this.program,"isFixed"),C=l.FLOAT,N=!1,W=4,U=9*W;let M=0;l.bindBuffer(l.ARRAY_BUFFER,this.particleBuffer),l.vertexAttribPointer(y,3,C,N,U,M),l.enableVertexAttribArray(y),M=3*W,l.vertexAttribPointer(O,1,C,N,U,M),l.enableVertexAttribArray(O),M=4*W,l.vertexAttribPointer(k,1,C,N,U,M),l.enableVertexAttribArray(k),M=5*W,l.vertexAttribPointer(v,3,C,N,U,M),l.enableVertexAttribArray(v),M=8*W,l.vertexAttribPointer(_,1,C,N,U,M),l.enableVertexAttribArray(_),l.drawArrays(l.POINTS,0,this.particles.length),l.disable(l.BLEND)}}function Xe(a){const i={};for(let n=0;n<a.length;n++)i[a[n]]=n;return i}const oe=new p.Vector(1e3,0,-1e3),He=["none","only medals","all"],qe=["neighbours","per swimmer"],zt=["none","cycle frequency","speed","acceleration"],Ct={none:{value:0,name:"PARAMETER_NONE"},"cycle frequency":{value:1,name:"PARAMETER_CYCLES"},speed:{value:2,name:"PARAMETER_SPEED"},acceleration:{value:3,name:"PARAMETER_ACCELERATION"}},At=["realistic","height field","lambert","toon"],Ft={realistic:{value:0,name:"RENDERING_REALISTIC"},"height field":{value:1,name:"RENDERING_HEIGHT_FIELD"},lambert:{value:2,name:"RENDERING_LAMBERT"},toon:{value:3,name:"RENDERING_TOON"}};var Y,Mt,Qe,et,tt,it,rt,ot,at,Be,st;class Pt{constructor(){xe(this,Y);this.params={numSteps:2,fov:45,visualizations:{enabled:!0,showFlags:!1,showWR:!1,showSpeed:!1,showDivingDistance:!0,showFinishTimes:!1,showStreaks:!1,customWaterPerturbation:"none",waterColorParameter:"none",customParametersList:zt,customParametersDict:Ct,PARAMETER_NONE:"none",PARAMETER_CYCLES:"cycle frequency",PARAMETER_SPEED:"speed",PARAMETER_ACCELERATION:"acceleration",showSwimmersLines:"none",swimmersLinesList:He,showSwimmersLinesDict:Xe(He),swimmersLinesMode:"neighbours",swimmersLinesModeList:qe,swimmersLinesModeDict:Xe(qe),medalsModeBeforeFinish:"none",medalsModesDict:{none:0,stars:1,bright:2,lanes:3},medalsModeAfterFinish:"none",areaConservationEnabled:!0,rendering:"realistic",renderingList:At,renderingDict:Ft,transitionBeginTime:null,shadow:{enabled:!0,shadowRadius:.5,shadowPower:.5,showCircle:!0,circleRadius:.6,circleStroke:.15},sparks:{enabled:!1,glow:5,glowOffset:.5,lengthFactor:1,stroke:.01,num:40,sizeFactor:50,fov:Math.PI/4}},swimmers:{showSpheres:!0,useTracking:!1},video:{thresholdBlending:!1,blendingThreshold:.41,show:!1,opacity:1,hideObstructions:!1,hideObstructionThreshold:.35},simulation:{heightLimit:.04,optimized:!1,waterDamping:.02,poolSize:new p.Vector(4,1,4),buoyancyFactor:1.1,foam:{enabled:!0,velThreshold:.35,velMax:3,dispersion:.015,timeVariation:2.5,spaceVariation:25,attenuation:.015},splashes:{enabled:!0,strengthThreshold:2}},quiver:{amplitudeFactor:.78,frequencyFactor:1.2,amplitude:.1,omega:2,waveLength:1},cornerView:{show:!0},chronoPhotography:{available:!1}},this.resolution=new p.Vector(256,256),this.gl=p.create({preserveDrawingBuffer:!0}),this.gl.canvas.tabIndex=0,this.originalVisParams=JSON.parse(JSON.stringify(this.params.visualizations)),delete this.originalVisParams.shadow,delete this.originalVisParams.sparks,this.useConfigFile=!1,this.time=0,this.swimmers=[],this.translateX=0,this.translateY=0,this.zoomDistance=4,this.angleX=-25,this.angleY=-200.5,this.angleZ=0,this.water=null;const i=new ze("—",{poolSize:new p.Vector(2,1,2),waterResolution:new p.Vector(256,256),numSwimmers:1}),n=new ne({});i.addVideo(new Re(this.gl,"",n));const l=new ze("100m freestyle",{poolSize:new p.Vector(25,2,50),waterResolution:new p.Vector(1024,2048),numSwimmers:10,thresholdBlending:!0,dataFolder:"./assets/race-data/"}),m=new ne({tx:-.53,ty:1.25,zoom:47.86,ax:-29,ay:-260.5,az:-5,fov:39.98});l.addVideo(new Re(this.gl,"swimming-race.mp4",m,16.5)),this.currentVideo=l.videos[0];const f=new ze("synchronized swimming",{poolSize:new p.Vector(25,2,30),waterResolution:new p.Vector(1024,2048),numSwimmers:2,dataFolder:"./assets/synchronized-swimming-data/"}),x=new ne({tx:-1.32,ty:.4,zoom:32.41,ax:-18,ay:-291.5,az:1,fov:42.8});f.addVideo(new Re(this.gl,"synchronized-swimming.mp4",x,0)),this.scenesList=[i,l,f],this.scenes={},this.scenesList.forEach(S=>this.scenes[S.title]=S),this.currentScene=i,this.paused=!1,this.configPlayButton(),this.transitions={},this.playingDemo=!1,this.renderWater=!0,this.renderCube=!0,this.spheresRadiusCoeff=1,this.distanceFixed=0,this.chronoFrameBuffer=this.gl.createFramebuffer(),this.drawingFrameBuffer=null,this.drawingFameBufferB=this.gl.createFramebuffer(),this.drawingTextureB=this.gl.createTexture(),this.drawingTexture=this.gl.createTexture(),this.resetDrawingTexture(),this.cornerView=!1,this.splashParticles=new Rt(this.gl),this.floaters=[],this.showTimeline=!0,this.MVPMI=null,this.bubbleSpheres=[],this.classicalOverlayEnabled=!1}hideEditorPanel(i){const n=document.getElementById("event-editor");n&&(n.style.display=i?"block":"none")}resetDrawingTexture(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.chronoFrameBuffer),this.gl.bindTexture(this.gl.TEXTURE_2D,this.drawingTexture);const i=this.gl.canvas.width,n=this.gl.canvas.height;this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,i,n,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,null),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,this.drawingTexture,0);const l=this.gl.createRenderbuffer();this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,l),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,this.gl.DEPTH_COMPONENT16,i,n),this.gl.framebufferRenderbuffer(this.gl.FRAMEBUFFER,this.gl.DEPTH_ATTACHMENT,this.gl.RENDERBUFFER,l),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.drawingFameBufferB),this.gl.bindTexture(this.gl.TEXTURE_2D,this.drawingTextureB),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,i,n,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,null),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,this.drawingTextureB,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null)}configStopButton(){this.stopButton=document.getElementById("stop-button"),this.stopButton.addEventListener("click",()=>{this.stopRace()})}configPlayButton(){this.configStopButton(),this.playButton=document.getElementById("play-button"),this.playButton.addEventListener("click",()=>{this.playButton.textContent=="pause"?this.pause():(V.raceHasStarted||this.startRace(),this.play())})}setCalibration(i){this.translateX=i.tx,this.translateY=i.ty,this.zoomDistance=i.zoom,this.angleX=i.ax,this.angleY=i.ay,this.angleZ=i.az,this.params.fov=i.fov,this.gl.matrixMode(this.gl.PROJECTION),this.gl.loadIdentity(),this.gl.perspective(this.params.fov,this.gl.canvas.width/this.gl.canvas.height,.01,100),this.gl.matrixMode(this.gl.MODELVIEW)}updateFloaters(i){}isSceneSynchronizedSwimming(){return this.currentScene.title=="synchronized swimming"}setMVPMI(){const i=this.gl.modelviewMatrix,l=this.gl.projectionMatrix.multiply(i);this.MVPMI=l.inverse(),console.log("MVPMI set")}async setScene(i){if(console.log("SET SCENE : "+i),this.currentScene=this.scenes[i],this.currentScene){K(this,Y,Qe).call(this,this.currentScene.poolSize),this.currentScene.title=="100m freestyle"?K(this,Y,et).call(this):this.floaters=[];const n=document.getElementById("time-slider-container");this.currentVideo=this.currentScene.videos[0],this.params.video.show=!!this.currentVideo.video,this.params.swimmers.showSpheres=!this.currentVideo.video,n.hidden=!this.currentVideo.video,this.currentScene.title!="—"?this.params.simulation.waterDamping=.1:this.params.simulation.waterDamping=.02;const l=this.currentScene.numSwimmers;if(console.log("num swimmers : "+l),this.swimmers.length!=l){for(let m=this.swimmers.length;m<l;m++){const f=new V(new p.Vector(0,0,0));this.swimmers.push(f)}for(let m=this.swimmers.length;m>l;m--)this.swimmers=this.swimmers.slice(1);this.swimmers.forEach(m=>m.waterDamping=this.params.simulation.waterDamping)}this.params.swimmers.useTracking=!0,await this.currentScene.parseData(this.swimmers),this.swimmers.forEach(m=>m.update(0)),console.log("scene name : "+this.currentScene.title),this.setCalibration(this.currentVideo.calibration),this.resolution=this.currentScene.waterResolution,this.params.video.thresholdBlending=this.currentScene.thresholdBlending,this.currentScene.thresholdBlending?this.params.video.opacity=1:this.params.video.opacity=.5,this.params.visualizations.areaConservationEnabled=!1,this.stopRace(),this._reset(),this.params.simulation.optimized=!!this.currentVideo.video,this.useConfigFile=!this.isSceneSynchronizedSwimming(),this._setPannelMinimized(this.currentScene.title!="100m freestyle"),this.isSceneSynchronizedSwimming()&&(this.params.simulation.foam.velThreshold=0,this.params.simulation.foam.velMax=2.2,this.params.simulation.foam.dispersion=.0025,this.params.simulation.foam.timeVariation=2.5,this.params.simulation.foam.spaceVariation=10,this.params.simulation.foam.attenuation=2e-4)}}useGravity(i){V.useGravity=i;for(let n of t.swimmers)n.body.cinematic=!V.useGravity}isOneVisualizationEnabled(){return this.params.visualizations.showFlags||this.params.visualizations.medalsModeBeforeFinish!="none"||this.params.visualizations.medalsModeAfterFinish!="none"||this.params.visualizations.showWR||this.params.visualizations.showSpeed||this.params.visualizations.showDivingDistance}updateTime(i){this.time+=i,this._updateDistanceMarker&&this._updateDistanceMarker()}getRaceTime(){return V.raceHasStarted?this.time-this.currentVideo.videoStartTime:0}resetParams(){Object.entries(this.originalVisParams).forEach(i=>{const n=i[0],l=i[1];this.params.visualizations[n]=l}),this.params.visualizations.areaConservationEnabled=!1}updateEventIndex(){for(this.currentEventIndex=0;this.events[this.currentEventIndex]&&this.events[this.currentEventIndex].time<this.getRaceTime();)this.currentEventIndex++;this.currentEventIndex>0&&this.currentEventIndex--}setRaceTime(i){const n=this.currentVideo.videoStartTime?this.currentVideo.videoStartTime:0;this.time=n+i,this.currentVideo.video&&this.currentVideo.setTime(this.time),this.events&&(this.updateEventIndex(),this.resetParams())}showTexts(i){document.getElementById("h").hidden=!i,i?this.showCommands&&(document.getElementById("commands").hidden=!1):(this.showCommands=!document.getElementById("commands").hidden,document.getElementById("commands").hidden=!0)}startRace(){this.currentVideo.videoStartTime>=3?this.setRaceTime(-3):this.setRaceTime(0),this.currentVideo.video&&this.currentVideo.video.play(),this.swimmers.forEach(i=>i.startRace()),V.raceHasStarted=!0,V.useGravity=!0,this.water.resetTextures(),this.water.WR_position=0,this.stopButton.hidden=!1,this._clearChronoTexture(this.gl.canvas.width,this.gl.canvas.height,this.gl),this.showTexts(!1)}stopRace(){this.paused&&this.play(),this.setRaceTime(0),this.currentVideo.video&&this.currentVideo.video.pause(),this.swimmers.forEach(i=>i.swim(!1)),V.raceHasStarted=!1,this.water.resetTextures(),this.playButton.textContent="play",this.stopButton.hidden=!0,this.showTexts(!0)}pause(){this.paused=!0,this.pauseVideo(),this.playButton.textContent="play"}play(){this.paused=!1,V.raceHasStarted&&(this.playVideo(),this.playButton.textContent="pause")}pauseVideo(){this.currentVideo.video&&this.currentVideo.video.pause()}playVideo(){this.currentVideo.video&&(this.currentVideo.video.play(),this.currentVideo.video.currentTime=this.time)}renderVideo(){this.currentVideo.video&&this.currentVideo.render()}parseConfigFile(i){fetch(i).then(n=>n.text()).then(n=>{this.events=JSON.parse(n),this.currentEventIndex=0,this._renderTimeline&&this._renderTimeline()})}updateTransitions(){Object.entries(this.transitions).forEach(i=>{const n=i[0],l=i[1],m=this.getRaceTime()-l.beginTime;if(m>l.duration){delete this.transitions[n];return}l.show?l.opacity=m/l.duration:l.opacity=1-m/l.duration})}updateParams(){if(!V.raceHasStarted||!this.events||!this.useConfigFile)return;const i=this.events[this.currentEventIndex];if(!i)return;let n=i.rankSwimmerToggle;if(n||(n=1),i.distance&&this.swimmers[n-1].getDistanceTraveled()>=i.distance||i.time!==void 0&&this.getRaceTime()>=i.time){this.currentEventIndex++;const l=i.transition&&i.transition.type=="dissolve";Object.entries(i.params).forEach(m=>{const f=m[0],x=m[1];f!=="transition"&&(l&&(x===!0||x===!1)&&(this.transitions[f]={opacity:1-1*x,show:x,beginTime:this.getRaceTime(),duration:i.transition.duration}),this.params.visualizations[f]=x)})}}chronoPhotography({circle:i=!1}){console.log("shoot"),this.distanceFixed=this.swimmers[0].getDistanceTraveled(),console.log("distance fixed : "+this.distanceFixed),this._fixTexture(i)}recalibrate(){this.currentVideo&&this.setCalibration(this.currentVideo.calibration)}async updateVideoForOfflineRendering(){if(this.currentVideo&&this.currentVideo.video){if(this.time<0||this.time>this.currentVideo.video.duration)return;await this.currentVideo.setTime(this.time)}}async launchDemo(){this.playingDemo=!0,this.parseConfigFile("./assets/vis-config-classical-overlay.json"),this.params.chronoPhotography.available=!0,this.drawingFrameBuffer=this.chronoFrameBuffer,console.log("Launch demo"),await this.setScene("100m freestyle").then(()=>{this.params.video.show=!1,this.translateX=200}),this._gui.hide(),document.getElementById("event-editor").hidden=!0,document.getElementById("time-slider-container").hidden=!0,document.getElementById("h").hidden=!0,this.demoTime=0,this.classicalOverlayEnabled=!0,this.startRace(),this.params.visualizations.showDivingDistance=!1,this.params.visualizations.shadow.enabled=!1,this.params.simulation.splashes.enabled=!1,this.demoEvents=[{time:0,text:`Situated Water-Based Visual Effects for Sports Video Augmentation 
 Submission to IEEE Vis 2026 #1528`,duration:4,pause:!0},{time:0,text:"Reproduction of the current TV approach",duration:2,action:()=>{this.params.video.show=!0,this.translateX=this.currentVideo.calibration.tx}},{time:8,text:"Currently they use an overlay projection plan.",duration:2,action:()=>this.showOverlayPlane=!0,pause:!1},{time:10,text:"Then the flags are drawn on the overlay.",duration:2,action:()=>this.params.visualizations.showFlags=!0,pause:!1},{time:12,text:"The overlay is transparent where nothing is drawn.",duration:3,action:()=>this.showOverlayPlane=!1,pause:!1},{time:16,text:"Our method",duration:3,action:()=>K(this,Y,tt).call(this),pause:!1},{time:4,text:"We use water-based visual effects to amplify swimming race data",duration:5,pause:!1},{time:15,text:"Method breakdown",duration:3,action:()=>K(this,Y,it).call(this),pause:!0},{time:.5,text:"Evan Wallace's WebGL water",duration:3.5,pause:!1},{time:4,text:"nothing",duration:0,action:()=>K(this,Y,rt).call(this),pause:!1},{time:0,text:"We adapted to swimming",duration:2,action:()=>this.showOverlayPlane=!1,pause:!0},{time:.5,text:"Pool",duration:1,pause:!1},{time:1.5,text:"Water",duration:1,pause:!1},{time:2.5,text:"Floaters",duration:1,action:()=>this.hideFloaters=!1,pause:!1},{time:3.5,text:"Spheres",duration:2,pause:!1},{time:6,text:"Let' start a swimming race",duration:1},{time:7.5,text:"Flag appear with water-based transition",duration:2.5,pause:!0,calib:new ne({tx:16.9,ty:6.9,zoom:20.5,ax:-37,ay:-126.5,az:-5,fov:39.98})},{time:11.5,text:"Diving points and swimmers' shadows",duration:2.5,pause:!0,calib:new ne({tx:9,ty:-10,zoom:3,ax:-30,ay:-15,az:0,fov:39.98})},{time:14.8,text:"Breakout points",duration:2,pause:!0,calib:new ne({tx:-3,ty:-7,zoom:12,ax:-30,ay:10,az:0,fov:39.98})},{time:15.7,text:"Speeds",duration:1.5,pause:!1},{time:17.2,text:"First swimmers lines",duration:1.5,pause:!1},{time:18.7,text:"Potential medals",duration:1.5,pause:!1},{time:20.2,text:"World record line",duration:1.5,pause:!1},{time:22.5,text:"Embedding in the original swimming race video",duration:2,pause:!1},{time:24.5,text:"Hiding spheres",duration:2.5,pause:!1},{time:27,text:"Hiding obstructions",duration:2,pause:!1},{time:28.5,text:"Corner view from above",duration:2,action:()=>this.params.cornerView.show=!0,pause:!1},{time:33.5,text:"Transferring to synchronized swimming",duration:20,action:()=>K(this,Y,ot).call(this),pause:!1},{time:27.5,text:"Artificially enhanced foam to draw the trajectory",duration:2,pause:!1},{time:30.1,text:"Splashes to emphasize an event",duration:2,pause:!0}],this.currentDemoEvent=this.demoEvents.shift()}stopDemo(){this.playingDemo=!1,this.setScene("—"),document.getElementById("event-editor").hidden=!1,document.getElementById("time-slider-container").hidden=!1,document.getElementById("h").hidden=!1,this.renderWater=!0,this.renderCube=!0,this.params.visualizations.shadow.enabled=!0,this._gui.show(),this.params.simulation.buoyancyFactor=1.1}updateDemo(i){if(!this.playingDemo)return;if(this.demoEventDisplayed){if(this.demoEventDuration+=i,this.currentDemoEvent.calib){const v=this.currentDemoEvent.duration;let _;this.demoEventDuration<v/6||this.demoEventDuration>5*v/6?_=0:this.demoEventDuration<=v/2?_=(this.demoEventDuration-v/6)/(v/3):_=1-(this.demoEventDuration-v/2)/(v/3),this.demoShowVideoTime||(this.demoSavedCalib.ay+=15*i),this.setCalibration(this.demoSavedCalib.interpolate(this.currentDemoEvent.calib,_,.33))}if(this.demoEventDuration>this.currentDemoEvent.duration)this.demoEventDisplayed=!1,this.play(),this.demoSavedCalib&&this.setCalibration(this.demoSavedCalib),this.demoSavedCalib=null,this.currentDemoEvent=this.demoEvents.shift(),document.getElementById("demo-text").innerText="";else if(this.currentDemoEvent.pause)return}this.demoTime+=i,!this.demoEventDisplayed&&this.currentDemoEvent&&this.demoTime>this.currentDemoEvent.time&&(this.demoEventDisplayed=!0,this.demoEventDuration=0,this.currentDemoEvent.pause&&this.pause(),document.getElementById("demo-text").innerText=this.currentDemoEvent.text,this.currentDemoEvent.action&&this.currentDemoEvent.action(),this.currentDemoEvent.calib&&(this.demoSavedCalib=new ne({tx:this.translateX,ty:this.translateY,zoom:this.zoomDistance,ax:this.angleX,ay:this.angleY,az:this.angleZ,fov:this.params.fov})));const n=this.demoTime;if(!this.demoPart3Started||this.demoPart5Started)return;const l=1.5,m=3.5,f=4.5,x=6.5,S=1;if(n<=S){const v=K(this,Y,Be).call(this,0,S,n);this.translateX=v*this.currentVideo.calibration.tx+(1-v)*200}if(this.demoPart4Started)this.demoShowVideoTime||(this.angleY+=15*i);else return;if(!this.renderWater&&n>l&&(this.renderWater=!0),n>l&&n<l+.5)for(var P=0;P<10;P++)this.water.addDrop(Math.random()*2-1,Math.random()*2-1,.06,P&1?.6:-.6);K(this,Y,at).call(this,n,m),!V.raceHasStarted&&n>=f&&n<x&&(this.params.simulation.splashes.enabled=!1,this.swimmers.forEach(v=>{v.body.cinematic=!0;const _=new p.Vector(v.body.center.x,0,0),C=new p.Vector(v.body.center.x,1,-this.params.simulation.poolSize.z/2);v.body.move(K(this,Y,st).call(this,_,C,f,x,n))})),!V.raceHasStarted&&n>=x&&(this.params.simulation.buoyancyFactor=1.1,this.params.simulation.splashes.enabled=!0,this.params.visualizations.shadow.enabled=!0,this.startRace()),!this.demoShowVideoTime&&this.angleY>=this.currentVideo.calibration.ay+360&&(this.demoShowVideoTime=22.5),!this.params.video.show&&this.demoShowVideoTime&&n>=this.demoShowVideoTime&&(this.params.video.show=!0,this.params.video.opacity=0);const L=2;this.params.video.show&&n<=this.demoShowVideoTime+L&&(this.params.video.opacity=(n-this.demoShowVideoTime)/L,console.log("opacity : "+this.params.video.opacity));const B=2;let y=null;this.demoShowVideoTime&&(y=this.demoShowVideoTime+L+B),this.params.video.show&&n>this.demoShowVideoTime+L&&n<y&&(this.spheresRadiusCoeff=1-(n-(this.demoShowVideoTime+L))/B);let O=null;y&&(O=y+.5);const k=2;O&&n>O&&n<O+k&&(this.params.video.hideObstructions=!0,this.params.video.hideObstructionThreshold=(n-O)/k*.5)}}Y=new WeakSet,Mt=function(){this.gl.matrixMode(this.gl.PROJECTION),this.gl.loadIdentity(),this.gl.perspective(this.params.fov,this.gl.canvas.width/this.gl.canvas.height,.01,100),this.gl.matrixMode(this.gl.MODELVIEW),this.gl.loadIdentity(),this.gl.translate(this.translateX,this.translateY,-this.zoomDistance),this.gl.rotate(-this.angleZ,0,0,1),this.gl.rotate(-this.angleX,1,0,0),this.gl.rotate(-this.angleY,0,1,0),this.gl.translate(0,.5,0)},Qe=function(i){console.log("SET POOL SIZE : "+i.z),this.params.simulation.poolSize.x=i.x,this.params.simulation.poolSize.y=i.y,this.params.simulation.poolSize.z=i.z},et=function(){this.floaters=[];const i=.1,n=this.params.simulation.poolSize,l=n.x/10,m=n.z/(2*i),f=-n.z/2,x=-n.x/2,S=new p.Vector(0,1/2,0),P=new p.Vector(1/2,1/2,0),L=new p.Vector(0,.5/2,1/2),B=new p.Vector(1/2,0,0),y=[S,L,L,P,P,P,L,L,S];for(let O=1;O<10;O++)for(let k=0;k<m;k++){const v=new p.Vector(x+O*l,0,f+i+k*2*i);let _=y[O-1];(Math.abs(v.z)>=20||Math.abs(v.z)<=.5||Math.abs(Math.abs(v.z)-10)<=.25)&&(_=B),this.floaters.push(new pe(v,i,_,2.5))}},tt=function(){this.classicalOverlayEnabled=!1,this.params.chronoPhotography.available=!1,this.drawingFrameBuffer=null,this.parseConfigFile("./assets/vis-config.json"),this.stopRace(),this.params.simulation.splashes.enabled=!0,this.params.visualizations.shadow.enabled=!0,this.startRace(),this.params.video.hideObstructions=!0,this.params.cornerView.show=!1,this.water.resetTextures(),this.demoTime=0,this.demoSecondPartStarted=!0},it=function(){this.stopRace(),this.params.video.hideObstructions=!1,this.demoTime=0,this.params.visualizations.shadow.enabled=!1,this.setScene("—").then(()=>{this.useGravity(!0),this.swimmers[0].body.center.y=.5,this.translateX=200,this.params.simulation.splashes.enabled=!1,this.pause()}),this.demoPart3Started=!0},rt=function(){this.params.cornerView.show=!1,this.params.simulation.splashes.enabled=!0,this.hideFloaters=!0,this.stopRace(),this.parseConfigFile("./assets/vis-config-demo-2.json"),this.setScene("100m freestyle").then(()=>{this.translateX=200,this.swimmers.forEach(i=>i.body.move(oe))}),this.classicalOverlayEnabled=!1,this.params.video.show=!1,this.params.swimmers.showSpheres=!0,this.spheresRadiusCoeff=1,this.swimmersShown=0,this.useGravity(!0),this.params.simulation.buoyancyFactor=1.5,this.params.visualizations.shadow.enabled=!1,this.renderWater=!1,this.hideFloaters=!0,this.demoTime=0,this.demoPart4Started=!0},ot=function(){this.stopRace(),this.parseConfigFile("./assets/vis-config-classical-overlay.json"),this.setScene("synchronized swimming").then(()=>{this.startRace(),this.params.video.hideObstructions=!1}),this.demoPart5Started=!0,this.demoTime=0},at=function(i,n){const m=Math.floor((i-n)/.1);if(this.swimmersShown<10&&m>=this.swimmersShown){console.log("swimmers shown : "+this.swimmersShown),console.log("next index swimmer : "+m),console.log("num swimmers : "+this.swimmers.length),this.params.simulation.poolSize.x;const f=this.swimmers[m];f.body.move(new p.Vector(f.body.initCenter.x,.5,0)),this.swimmersShown++}},Be=function(i,n,l){if(l<i)return 0;if(l>n)return 1;const m=(l-i)/(n-i);return 1-(Math.cos(m*Math.PI)+1)/2},st=function(i,n,l,m,f){const x=K(this,Y,Be).call(this,l,m,f);console.log("t norm : "+x);const S=(P,L,B,y=1)=>Math.pow(B,y)*L+(1-Math.pow(B,y))*P;return new p.Vector(S(i.x,n.x,x),S(i.y,n.y,x,20),S(i.z,n.z,x,2))};const t=new Pt;t.parseConfigFile("./assets/vis-config.json");const Dt=`#version 300 es
    const float ARM_DELTA_X = float(`+De+`);
    const float FOOT_DELTA_X = float( `+Ie+`);
    const float FOOT_DELTA_Z = float( `+Le+`);
    uniform vec2 invPoolSize;
    in vec4 iData1;
    in vec4 iData2;
    in vec4 iData3;
    out float fragAltitude;
    out float fragCyclePhase;
    void main() {
        fragCyclePhase = iData3.r;
        fragAltitude = iData2.a;
        vec2 center = iData1.rg;
        vec2 ips = vec2(.5, .5);
        gl_Position = vec4(center * 2. * invPoolSize, 0., 1.); // TODO SET ips TO invPoolSize
        gl_PointSize = 1.;
    }

`,It=`#version 300 es
    precision highp float;
    in float fragCyclePhase;
    in float fragAltitude;
    const float PI = 3.141592;
    out vec4 fragColor;
    void main() {
        fragColor = vec4(fragAltitude, fragCyclePhase / (2. * PI), 1., 1.);
    }
`,Lt=`#version 300 es
    in vec2 iVertex;
    out vec2 fragCoord;
    void main() {
        fragCoord = iVertex * .5 + .5;
        gl_Position = vec4(iVertex.xy, 0., 1.);
    }
`,Bt=`#version 300 es
    precision highp float;
    uniform sampler2D tex;
    uniform vec2 poolSize;
    uniform bool horizontal;
    uniform bool show;
    uniform bool swapColor;
    uniform bool blur;
    in vec2 fragCoord;
    out vec4 fragColor;

    float volumeInSphere(vec2 diff, float altitude, float cyclePhase) {
        vec3 toCenter = vec3(diff.x, -altitude, diff.y);
        const float radius = .25;
        float t = length(toCenter) / radius;
        float dy = exp(-pow(t * 1.5, 6.0));
        float ymin = min(0.0, altitude - dy);
        float ymax = min(max(0.0, altitude + dy), ymin + 2.0 * dy);
        return (ymax - ymin) * 0.1;
    }

    vec4 horizontalPass(float radius, vec2 delta, int rx) {
        float radiusSq = radius*radius;
        vec4 res = vec4(0., 0., 0., .5);
        int N = textureSize(tex, 0).x;
        // float dx_texel = fragCoord.x * float(N) - floor(fragCoord.x * float(N)) - .5;
        // dx_texel /= float(N);
        // dx_texel *= poolSize.x;
        for(int i = -rx; i < rx; i++) {
            float i_float = float(i);
            //TODO tester si vraiment dans kernel
            float j_float = 0.;
            float diff = i_float * delta.x;
            vec2 p = fragCoord + vec2(diff, 0.);
            vec4 info = texture(tex, p);
            if(info.b != 0.) {
                float X = diff * poolSize.x;
                float Y = sqrt(radiusSq - X*X);
                res.g = Y;
                res.r = X;
                //res.r += volumeInSphere(vec2(-X, 0.), info.r, info.g) * 5.;
                res.b = info.r;
            }
        }
        return res;
    }

    vec4 verticalPass(float radius, vec2 delta, int ry) {
        // vec4 info = texture(tex, fragCoord);
        // return info;
        float radiusSq = radius*radius;
        int M = textureSize(tex, 0).y;
        float dy_texel = fragCoord.y * float(M) - floor(fragCoord.y * float(M)) - .5;
        dy_texel /= float(M);

        
        
        int N = textureSize(tex, 0).x;
        float dx_texel = fragCoord.x * float(N) - floor(fragCoord.x * float(N)) - .5;
        dx_texel /= float(N);

        vec2 d_texel = vec2(dx_texel, dy_texel);

        float dy = dy_texel * poolSize.y;
        vec4 res = vec4(0., 0., 0., .5);
        for(int j = -ry; j < ry; j++) {
            float j_float = float(j);
            //TODO tester si vraiment dans kernel
            float diff = j_float * delta.y;
            vec2 p = fragCoord + vec2(0., diff);
            vec2 p_centered = p - d_texel;
            vec4 info_centered = texture(tex, p_centered);
            p -= vec2(0., dy_texel);
            vec4 info = texture(tex, p);
            // info = info_centered;
            float Y = diff * poolSize.y;
            Y -= dy;
            if(info_centered.rgb != vec3(0., 0., 0.) && abs(Y) <= info.g) {
                float X = info_centered.r;
                res.r = volumeInSphere(vec2(X, Y), 2.*info_centered.b, info.g) * 5.;
            }
        }
        return res;
    }

    void main() {

        if (show) {
            fragColor = vec4(texture(tex, fragCoord).rgb, .7);
            if (swapColor) fragColor = vec4(texture(tex, fragCoord).grb, .7);
            return;
        }

        ivec2 textureSizeInt = textureSize(tex, 0);
        vec2 textureSize = vec2(float(textureSizeInt.x), float(textureSizeInt.y));
        vec2 delta = vec2(1./textureSize.x, 1./textureSize.y);
        const float radius = .25;
        float radiusSq = radius*radius;
        int rx = int(radius * textureSize.x / poolSize.x);
        int ry = int(radius * textureSize.y / poolSize.y);

        if (horizontal) fragColor = horizontalPass(radius, delta, rx);
        else fragColor = verticalPass(radius, delta, ry);
    }
`,kt=new Float32Array([-1,-1,1,-1,1,1,-1,1]),Nt=new Uint16Array([0,1,2,2,3,0]);var ee,nt,ve,lt;class Ot{constructor(){xe(this,ee);this.numVecAttributes=je,this.maxNumSwimmer=Ke,this.gl=t.gl;const i=this.gl.NEAREST;this.texture=new p.Texture(this.numVecAttributes,this.maxNumSwimmer,{type:this.gl.FLOAT,filter:i}),this.initPrograms(),this.indexBuffer=this.gl.createBuffer(),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.indexBuffer),this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER,Nt,this.gl.STATIC_DRAW),this.vboPlane=this.gl.createBuffer(),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vboPlane),this.gl.bufferData(this.gl.ARRAY_BUFFER,kt,this.gl.STATIC_DRAW),this.vboPoints=this.gl.createBuffer()}update(){this.numSwimmers=t.swimmers.length;const i=5;this.swimmersAttributes=new Float32Array(this.numVecAttributes*4*this.maxNumSwimmer*i);const n=K(this,ee,nt).call(this,t.swimmers);for(let l=0;l<t.swimmers.length;l++){const m=n[l];K(this,ee,lt).call(this,l,m),K(this,ee,ve).call(this,t.swimmers.length+l,m.leftArm),K(this,ee,ve).call(this,2*t.swimmers.length+l,m.rightArm),K(this,ee,ve).call(this,3*t.swimmers.length+l,m.leftFoot),K(this,ee,ve).call(this,4*t.swimmers.length+l,m.rightFoot)}this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture.id),this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,!1),this.gl.texSubImage2D(this.gl.TEXTURE_2D,0,0,0,this.numVecAttributes,this.maxNumSwimmer,this.gl.RGBA,this.gl.FLOAT,this.swimmersAttributes),this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,!0),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vboPoints),this.gl.bufferData(this.gl.ARRAY_BUFFER,this.swimmersAttributes,this.gl.DYNAMIC_DRAW)}buildShader(i,n){const l=this.gl.createShader(n);return this.gl.shaderSource(l,i),this.gl.compileShader(l),l}createProgram(i){const n=this.gl.createProgram();return i.forEach(l=>{this.gl.attachShader(n,l)}),this.gl.linkProgram(n),n}checkShaders(i,n,l){this.gl.getShaderParameter(i,this.gl.COMPILE_STATUS)||console.error(this.gl.getShaderInfoLog(i)),this.gl.getShaderParameter(n,this.gl.COMPILE_STATUS)||console.error(this.gl.getShaderInfoLog(n)),this.gl.getProgramParameter(l,this.gl.LINK_STATUS)||console.error(this.gl.getProgramInfoLog(l))}createRenderingTexture(i,n){this.pointsTexture=new p.Texture(i,n,{type:this.gl.FLOAT,filter:this.gl.NEAREST}),this.pointsFrameBuffer=this.gl.createFramebuffer(),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.pointsFrameBuffer);const l=this.gl.COLOR_ATTACHMENT0;this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,l,this.gl.TEXTURE_2D,this.pointsTexture.id,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.horizontalPassTexture=new p.Texture(i,n,{type:this.gl.FLOAT,filter:this.gl.LINEAR}),this.horizontalPassFrameBuffer=this.gl.createFramebuffer(),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.horizontalPassFrameBuffer),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,l,this.gl.TEXTURE_2D,this.horizontalPassTexture.id,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null);const m=n/4,f=m,x=m;this.displacementTexture=new p.Texture(f,x,{type:this.gl.FLOAT,filter:this.gl.LINEAR}),this.displacementFrameBuffer=this.gl.createFramebuffer(),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.displacementFrameBuffer),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,l,this.gl.TEXTURE_2D,this.displacementTexture.id,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.oldDisplacementTexture=new p.Texture(f,x,{type:this.gl.FLOAT,filter:this.gl.LINEAR})}buildProgram(i,n){const l=this.buildShader(i,this.gl.VERTEX_SHADER),m=this.buildShader(n,this.gl.FRAGMENT_SHADER),f=this.createProgram([l,m]);return this.checkShaders(l,m,f),f}initPrograms(){this.programPoints=this.buildProgram(Dt,It),this.programVolume=this.buildProgram(Lt,Bt),this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height)}volumePass(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.horizontalPassFrameBuffer),this.gl.useProgram(this.programVolume);const i=this.gl.getAttribLocation(this.programVolume,"iVertex"),n=this.gl.getUniformLocation(this.programVolume,"poolSize");this.gl.uniform2f(n,t.params.simulation.poolSize.x,t.params.simulation.poolSize.z);const l=this.gl.getUniformLocation(this.programVolume,"horizontal");this.gl.uniform1i(l,!0);const m=this.gl.getUniformLocation(this.programVolume,"show");this.gl.uniform1i(m,!1);const f=this.gl.getUniformLocation(this.programVolume,"swapColor");this.gl.uniform1i(f,!1);const x=2,S=this.gl.FLOAT,P=!1,L=0,B=0;this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vboPlane),this.gl.vertexAttribPointer(i,x,S,P,L,B),this.gl.enableVertexAttribArray(i),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.indexBuffer),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.pointsTexture.id),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this.gl.drawElements(this.gl.TRIANGLES,6,this.gl.UNSIGNED_SHORT,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.displacementFrameBuffer),this.gl.uniform1i(l,!1),this.gl.uniform1i(m,!1),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.horizontalPassTexture.id),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this.gl.viewport(0,0,this.displacementTexture.width,this.displacementTexture.height),this.gl.drawElements(this.gl.TRIANGLES,6,this.gl.UNSIGNED_SHORT,0),this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height)}pointPass(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.pointsFrameBuffer),this.gl.useProgram(this.programPoints);const i=this.gl.getAttribLocation(this.programPoints,"iData1"),n=this.gl.getAttribLocation(this.programPoints,"iData2"),l=this.gl.getAttribLocation(this.programPoints,"iData3"),m=this.gl.getUniformLocation(this.programPoints,"invPoolSize");this.gl.uniform2f(m,1/t.params.simulation.poolSize.x,1/t.params.simulation.poolSize.z);const f=4,x=this.gl.FLOAT,S=!1,P=4,L=12*P;let B=0;this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vboPoints),i>=0&&(this.gl.vertexAttribPointer(i,f,x,S,L,B),this.gl.enableVertexAttribArray(i)),B=4*P,n>=0&&(this.gl.vertexAttribPointer(n,f,x,S,L,B),this.gl.enableVertexAttribArray(n)),B=2*4*P,l>=0&&(this.gl.vertexAttribPointer(l,f,x,S,L,B),this.gl.enableVertexAttribArray(l)),this.gl.viewport(0,0,this.pointsTexture.width,this.pointsTexture.height),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this.gl.drawArrays(this.gl.POINTS,0,5*this.numSwimmers)}updateOldDisplacementTexture(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.displacementFrameBuffer),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.oldDisplacementTexture.id),this.gl.copyTexSubImage2D(this.gl.TEXTURE_2D,0,0,0,0,0,this.oldDisplacementTexture.width,this.oldDisplacementTexture.height)}draw(){this.updateOldDisplacementTexture(),this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this.pointPass(),this.volumePass(),this.gl.disable(this.gl.BLEND)}}ee=new WeakSet,nt=function(i){const n=function(f,x){return x.getDistanceTraveled()-f.getDistanceTraveled()};let l=0;i.forEach(f=>{f.hasFinished()>.1&&l++});const m=i.slice(0,l).concat(i.slice(l).sort(n));for(let f=0;f<i.length;f++)i[f]=m[f];return i},ve=function(i,n){this.swimmersAttributes[this.numVecAttributes*4*i]=n.center.x,this.swimmersAttributes[this.numVecAttributes*4*i+1]=n.center.z,this.swimmersAttributes[this.numVecAttributes*4*i+7]=n.center.y},lt=function(i,n){K(this,ee,ve).call(this,i,n.body),this.swimmersAttributes[this.numVecAttributes*4*i+2]=n.divingDistance,this.swimmersAttributes[this.numVecAttributes*4*i+3]=n.divingTime,this.swimmersAttributes[this.numVecAttributes*4*i+4]=n.reactionTime,this.swimmersAttributes[this.numVecAttributes*4*i+5]=n.body.velocity.z,this.swimmersAttributes[this.numVecAttributes*4*i+6]=n.nationality,this.swimmersAttributes[this.numVecAttributes*4*i+8]=n.breakoutDistance,this.swimmersAttributes[this.numVecAttributes*4*i+9]=n.breakoutTime,this.swimmersAttributes[this.numVecAttributes*4*i+10]=n.finishTime,this.swimmersAttributes[this.numVecAttributes*4*i+11]=n.waterDamping};function Ce(a=0,i=1){const n=1-Math.random(),l=Math.random();return Math.sqrt(-2*Math.log(n))*Math.cos(2*Math.PI*l)*i+a}const Vt=.5,Ut=2,he="Temps (s)",we="event",Te="eventX",ye="eventY",Wt="frequence (cylce/min)";var Se,ct;const q=class q{constructor(i){xe(this,Se);this.startingPoint=new p.Vector(i.x,i.y,i.z),this.center=new p.Vector(i.x,i.y,i.z),this.force=new p.Vector(0,0,190+Ce(0,20)),this.reactionTime=Math.max(.1,Ce(.15,.02));const n=.25,l=.15;this.body=new pe(i,n),this.body.showStreak=!0,this.leftArm=new pe(oe,l),this.rightArm=new pe(oe,l),this.leftFoot=new pe(oe,l),this.rightFoot=new pe(oe,l),this.body.cinematic=!q.useGravity,this.leftArm.cinematic=!0,this.rightArm.cinematic=!0,this.leftFoot.cinematic=!0,this.rightFoot.cinematic=!0,this.spheres=[this.body,this.leftArm,this.rightArm,this.leftFoot,this.rightFoot],this.divingDistance=0,this.divingTime=1e3,this.breakoutDistance=0,this.breakoutTime=1e3,this.nationality=Math.random()>.5?0:1,this.currendDataIndex=0,this.useTracking=!1,this.armPulsation=2*Math.PI*Ut,this.cycleTime=0,this.cyclePhase=0,this.finishTime=0,this.waterDamping=t.params.simulation.waterDamping}async parseData(i){await fetch(i).then(n=>{const l=n.headers.get("content-type");return!l||!l.includes("text/csv")?(console.log("no file found : "+i),null):n.text()}).then(n=>{if(!n)return;const l=n.split(`
`),m=l[0].split(/,|;/);this.data=l.slice(1).map(f=>{const x=f.split(/,|;/);return Object.fromEntries(m.map((S,P)=>[S,x[P]]))}),t.params.swimmers.useTracking&&(this.armPulsation=0)})}getDistanceTraveled(){const i=this.body.velocity.z,n=t.params.simulation.poolSize.z,l=this.body.center.z+n/2;return i>=0?l:2*n-l}startRace(){this.hasBrokeOut=!1,this.hasDove=!1,this.hasReacted=!1}jump(i=4.5){this.body.cinematic=!1,this.body.velocity=new p.Vector(0,0,i+Ce(0,1)),this.body.center=new p.Vector(this.startingPoint.x,1,-t.params.simulation.poolSize.z/2)}swim(i){this.hasReacted=i,this.isSwimming=i,this.finishTime=0,i||(this.body.followTarget=!1),i?(this.body.cinematic=!1,this.useGravity=!0,this.useTracking?this.moveToBeginning():this.body.center=new p.Vector(this.startingPoint.x,0,-t.params.simulation.poolSize.z/2)):(this.moveSpheresAway(),this.body.velocity=new p.Vector(0,0,0),this.body.center=new p.Vector(this.startingPoint.x,0,0))}moveToBeginning(){this.useTracking||console.warn("tried to use tracking on untracked swimmer");const i=this.data[0];this.body.center=K(this,Se,ct).call(this,i)}hasFinished(){return this.finishTime>.1}getArmOffset(i,n){n+=this.cyclePhase;const l=this.body.velocity.z>=0?this.armPulsation:-this.armPulsation;return new p.Vector(0,Math.cos(l*i+n),Math.sin(l*i+n)).multiply(Vt)}setCurrentDataIndex(){if(console.log("set current data index"),this.currendDataIndex=0,!!this.data){for(;this.data[this.currendDataIndex]&&this.data[this.currendDataIndex][he]<t.getRaceTime();)this.currendDataIndex++;if(this.currendDataIndex+1<this.data.length){if(this.currendDataIndex-1>=0){const i=parseFloat(this.data[this.currendDataIndex][Te]);let n=i;const l=t.params.simulation.poolSize.z;i>l&&(n=2*l-n),n-=l/2;const m=this.body.center;m.x,t.isSceneSynchronizedSwimming()&&parseFloat(this.data[this.currendDataIndex][ye])-t.params.simulation.poolSize.x/2,this.body.move(new p.Vector(m.x,m.y,n));const f=Math.sign(50-i)*.1;this.body.velocity=new p.Vector(0,0,f),console.log("vz : "+f)}this.body.setTarget(null),this.body.followTarget=!0,this.finishTime=0}}}findNextCycle(){let i=this.currendDataIndex+1;if(!this.data)return null;for(;this.data[i]&&this.data[i][we]!="cycle";)i++;return this.data[i]?parseFloat(this.data[i][he]):null}setDamping(i){if(t.params.visualizations.customWaterPerturbation==t.params.visualizations.PARAMETER_CYCLES){const n=parseFloat(i[Wt]);if(n<50)return;if(n>0){console.log("FREQ : "+n);const l=80,m=50;let f=(n-m)/(l-m);f=Math.max(Math.min(f,1),0);const x=.015,S=.25;this.waterDamping=x+(S-x)*(1-f)}}else this.waterDamping=t.params.simulation.waterDamping}handleTracking(i){if(this.hasReacted&&this.useTracking&&this.currendDataIndex<this.data.length&&this.data[this.currendDataIndex][he]<i){this.setDamping(this.data[this.currendDataIndex]);let n=null,l=this.startingPoint.x,m=i;const f=this.data[this.currendDataIndex+1];this.currendDataIndex+1<this.data.length&&(n=parseFloat(f[Te]),t.isSceneSynchronizedSwimming()&&(n=t.params.simulation.poolSize.z-n*30/25,f[ye]&&(l=parseFloat(f[ye])-t.params.simulation.poolSize.x/2)),m=parseFloat(f[he]));const x=t.params.simulation.poolSize.z;let S=-this.body.radius/2;const P=this.data[this.currendDataIndex][we];if(P=="enter"||P=="turn"&&f[we]!="under"){m=(i+m)/2,n=(this.body.center.z+x/2+n)/2;const B={[he]:m,[Te]:n,[we]:"under"};this.data.splice(this.currendDataIndex+1,0,B),S=-1.5}f&&f[we]=="under"&&(S=-1.5),n>x&&(n=2*x-n),n-=t.params.simulation.poolSize.z/2;const L=new p.Vector(l,S,n);if(this.currendDataIndex+1<this.data.length?this.body.setTarget(L,m-i):this.body.setTarget(null),P=="figure"&&(console.log("FIGURE"),t.splashParticles.spawnSplash(L,null,1e4,null,{speed0:4,maxParticles:400}),t.chronoPhotography({circle:!0})),P=="cycle"){const B=parseFloat(this.data[this.currendDataIndex][he]),y=this.findNextCycle();if(y){const k=1/(y-B);this.armPulsation=2*Math.PI*k,this.cycleTime=0,this.cyclePhase==0?this.cyclePhase=Math.PI:this.cyclePhase=0}}else P=="finish"&&(this.finishTime=this.data[this.currendDataIndex][he],this.body.followTarget=!1,this.isSwimming=!1);this.currendDataIndex++}}moveSpheresAway(){this.rightArm.move(oe),this.leftArm.move(oe),this.rightFoot.move(oe),this.leftFoot.move(oe)}moveSpheres(i){if(this.body.center.z<=-t.params.simulation.poolSize.z/2+.1)return;this.cycleTime+=i;const n=this.getArmOffset(.5*this.cycleTime,0),l=this.getArmOffset(.5*this.cycleTime,Math.PI),m=this.getArmOffset(.5*this.cycleTime*2,0),f=this.getArmOffset(.5*this.cycleTime*2,Math.PI);this.rightArm.move(this.body.center.add(n).add(new p.Vector(De,0,0))),this.leftArm.move(this.body.center.add(l).add(new p.Vector(-De,0,0)));const x=this.body.velocity.z>=0?-Le:Le;this.rightFoot.move(this.body.center.add(new p.Vector(Ie,m.y*.5,x))),this.leftFoot.move(this.body.center.add(new p.Vector(-Ie,f.y*.5,x)))}update(i){const n=t.getRaceTime();!q.raceHasStarted&&this.data&&(this.useTracking=t.params.swimmers.useTracking),!this.hasReacted&&q.raceHasStarted&&(this.useTracking||n>this.reactionTime&&!t.params.swimmers.useTracking?(this.swim(!0),this.waterDamping=t.params.simulation.waterDamping,this.useTracking||this.jump(),this.useTracking&&(this.body.cinematic=!0,this.body.followTarget=!0,this.body.setTarget(null))):(this.swim(!1),this.body.cinematic=!0,t.playingDemo?this.body.move(new p.Vector(this.body.center.x,1,-t.params.simulation.poolSize.z/2)):this.body.move(oe)),this.currendDataIndex=0),this.isSwimming&&(this.useTracking||this.body.addForce(this.force),this.body.center.y>-this.body.radius&&!t.isSceneSynchronizedSwimming()?this.moveSpheres(i):this.moveSpheresAway()),this.handleTracking(n);for(let m of this.spheres)m.update(i),m.spawnSplashes(i);if(this.body.center.z>-t.params.simulation.poolSize.z/2+20||t.isSceneSynchronizedSwimming())return;q.raceHasStarted&&!this.hasDove&&this.body.center.y<0&&this.body.oldCenter.y>=0&&(this.divingDistance=this.body.center.z+t.params.simulation.poolSize.z/2,this.divingTime=n,this.hasDove=!0);const l=this.body.radius;q.raceHasStarted&&!this.hasBrokeOut&&this.body.center.y>-l&&this.body.oldCenter.y<=-l&&(this.breakoutDistance=this.body.center.z+t.params.simulation.poolSize.z/2,this.breakoutTime=n,this.hasBrokeOut=!0)}};Se=new WeakSet,ct=function(i){let n=parseFloat(i[Te]),l=this.body.center.x;return t.isSceneSynchronizedSwimming()&&(n=t.params.simulation.poolSize.z-n*30/25,i[ye]&&(l=parseFloat(i[ye])-t.params.simulation.poolSize.x/2)),n-=t.params.simulation.poolSize.z/2,new p.Vector(l,1,n)},ie(q,"useGravity",!1),ie(q,"raceHasStarted",!1),ie(q,"swimming",!1),ie(q,"attributes"),ie(q,"initAttributes",()=>{q.attributes=new Ot}),ie(q,"updateAttributesTexture",()=>{q.attributes.update()}),ie(q,"getAttributesTexture",()=>q.attributes.texture),ie(q,"bindDisplacementTexture",i=>{q.attributes.displacementTexture.bind(i)}),ie(q,"bindOldDisplacementTexture",i=>{q.attributes.oldDisplacementTexture.bind(i)}),ie(q,"reset",i=>{q.attributes.createRenderingTexture(i.x,i.y)});let V=q;const Gt=`
/*** Settings ***/

#define FONT_TEXTURE iChannel0 // Set to the iChannel containing the alphabet texture

#define FONT_SPACING 2.        // Horizontal character spacing [1 - 2.5]

uniform sampler2D iChannel0;


/* ### How to use this shader ? ###
   
   === Setup ===
   
   0. Copy the content of the "Common" tab inside your shader
   1. Make sure the FONT_TEXTURE #define is set to the iChannel 
      containing the alphabet texture
      
      Also make sure the texture filter type is set to "linear"  
      (not "mipmap", which creates horizontal lines between the characters)
   
   === Declare String ===
   
   2. Use makeStr to declare a new string (needs to be done outside any function)
   3. Write your text using _ before each char, and __ for spaces
   4. Finish your string with the _end keyword
   
       makeStr(printExample) _A _n _o _t _h _e _r __ _E _x _a _m _p _l _e    _end
          
   === Print String ===
   
   5. Call the new function by passing it your uvs. It returns a grayscale value.
   
       finalCol += printExample(uv);
   
   - Note that you are responsible for scaling/offsetting the uvs 
     to control the text placement before calling the function.
   
   - If you want to print float or integer variables, see below.
   
   
   ###### Printing variables ######
   
   In order to print int & float variables, you can call two other functions instead of makeStr:
   
     - makeStrI (for integers) & makeStrF (for floats).
     
   [ IMPORTANT ]: When using makeStrI or makeStrF, you MUST use _endNum instead of _end 
                  to terminate a string.
                  
                  If you're seeing many errors when trying to compile, it's probably
                  because you're using the wrong terminator for the current string type (_end/_endNum)
   
   === Declare Strings ===
   
   - In both cases, the variable will be displayed at the position of the _num_ keyword:
   
       makeStrI(print_my_int)   _M _y __ _I _n _t _e _g _e _r       _num_            _endNum
       makeStrF(print_my_float) _F _l _o _a _t  _num_  _A _d _d _i _t _i _o _n _a _l _endNum
   
    - print_my_int   will be (vec2 uv, int num)
    - print_my_float will be (vec2 uv, float num, int number_of_decimals)
      
   === Print Strings ===

       print_my_int(uv, 42);          // will print "My Integer 42"
       print_my_float(uv, 42.123, 2); // will print "Float 42.12 Additional"
       
    - A limitation of this version compared to the previous one is that you can only display
      one variable per string definition (so only one _num_ keyword is allowed per string).
   
   === Debug variables without makeStr ===
  
   A handy thing you can do in your Image tab is to create 
   the following debugInt & debugFloat helpers:
  
       makeStrF(debugFloat) _num_ _endNum
       makeStrI(debugInt) _num_ _endNum
       
   Defining these two helpers allow to quickly debug int/float variables, 
   without the need to create a full string definition every time using makeStr().
 
      color += debugInt(uv, 42);
      color += debugFloat(uv, 3.14, 2);
 
 
   ### Characters available ###
   
   uppercase: _A _B _C ...
   lowercase: _a _b _c ...
   digits   : _0 _1 _2 ...
   special  : _ADD _SUB _DOT ... (see "Special Characters" below)
   
   
   ### Javascript string generator helper ###
    
    Even if this framework allow for easier string editing, it can still be a bit tedious to create
    long strings with special characters, so I've also made a javascript function that you can run
    in your developer console to easily create strings:

    function createString(str) {
        const special_chars = {
            " ": "_", "!": "EX", """:"DBQ", "#": "NUM", "$": "DOL", "%": "PER",  "&": "AMP", 
            "'":"QT", "(": "LPR", ")": "RPR", "*": "MUL", "+": "ADD", ",": "COM", "-": "SUB", 
            ".": "DOT", "/": "DIV", ":": "COL", ";": "SEM", "<": "LES", "=": "EQ", ">": "GE", 
            "?": "QUE", "@": "AT", "[": "LBR", "\\": "ANTI", "]": "RBR",  "_": "UN", 
        };
        const num = str.indexOf('_num_');
        const end = num == -1 ? ' _end' : ' _endNum';
        str = str.replace('_num_', '').split('').map(e =>  '_' + (special_chars[e] || e));
        if (num != -1) str = str.slice(0, num).concat( '_num_', str.slice(num));
        return str.join(' ') + end;
    }

    Usage (static): 
        > createString("Hello World!") 
        '_H _e _l _l _o __ _W _o _r _l _d _EX _end'
           
    Usage (variable): 
        > createString("My Number is _num_!")
        '_M _y __ _N _u _m _b _e _r __ _i _s __ _num_ _EX _endNum'
*/

// Special characters
#define _STAR 28,
#define __    32,
#define _EX   33, // " ! "
#define _DBQ  34, // " " "
#define _NUM  35, // " # "
#define _DOL  36, // " $ "
#define _PER  37, // " % "
#define _AMP  38, // " & "
#define _QT   39, // " ' "
#define _LPR  40, // " ( "
#define _RPR  41, // " ) "
#define _MUL  42, // " * "
#define _ADD  43, // " + "
#define _COM  44, // " , "
#define _SUB  45, // " - "
#define _DOT  46, // " . "
#define _DIV  47, // " / "
#define _COL  58, // " : "
#define _SEM  59, // " ; "
#define _LES  60, // " < "
#define _EQ   61, // " = "
#define _GE   62, // " > "
#define _QUE  63, // " ? "
#define _AT   64, // " @ "
#define _LBR  91, // " [ "
#define _ANTI 92, // "  "
#define _RBR  93, // " ] "
#define _UN   95, // " _ "

// Digits
#define _0 48,
#define _1 49,
#define _2 50,
#define _3 51,
#define _4 52,
#define _5 53,
#define _6 54,
#define _7 55,
#define _8 56,
#define _9 57,
// Uppercase
#define _A 65,
#define _B 66,
#define _C 67,
#define _D 68,
#define _E 69,
#define _F 70,
#define _G 71,
#define _H 72,
#define _I 73,
#define _J 74,
#define _K 75,
#define _L 76,
#define _M 77,
#define _N 78,
#define _O 79,
#define _P 80,
#define _Q 81,
#define _R 82,
#define _S 83,
#define _T 84,
#define _U 85,
#define _V 86,
#define _W 87,
#define _X 88,
#define _Y 89,
#define _Z 90,
// Lowercase
#define _a 97,
#define _b 98,
#define _c 99,
#define _d 100,
#define _e 101,
#define _f 102,
#define _g 103,
#define _h 104,
#define _i 105,
#define _j 106,
#define _k 107,
#define _l 108,
#define _m 109,
#define _n 110,
#define _o 111,
#define _p 112,
#define _q 113,
#define _r 114,
#define _s 115,
#define _t 116,
#define _u 117,
#define _v 118,
#define _w 119,
#define _x 120,
#define _y 121,
#define _z 122,

// ======  utils  ======

#define print_char(i)     texture(FONT_TEXTURE, u + vec2(float(i)-float(x)/FONT_SPACING + FONT_SPACING/8., 15-(i)/16) / 16.).r

// ======  makeStr()  ======

// Function start
#define makeStr(func_name)                                   float func_name(vec2 u) {                                    if (u.x < 0. || abs(u.y - .03) > .03) return 0.;         const int[] str = int[](                         
// Function end
#define _end  0);                                            int x = int(u.x * 16. * FONT_SPACING);                   if (x >= str.length()-1) return 0.;                      return print_char(str[x]);                           }


// -------------------------------------------------------------------
//    If you only plan to display static characters (no variables) 
//    you don't need to include anything below this disclaimer
// -------------------------------------------------------------------

// ======  makeStrFloat() & makeStrInt() ======

#define log10(x) int(ceil(.4342944819 * log(x + x*1e-5)))
#define _num_ 0); const int[] str2 = int[]( 

// makeStrFloat() start
#define makeStrF(func_name)                                  float func_name(vec2 u, float num, int dec) {                if (u.x < 0. || abs(u.y - .03) > .03) return 0.;         const int[] str1 = int[](

// makeStrInt() start
#define makeStrI(func_name)                                  float func_name(vec2 u, int num_i) {                         if (u.x < 0. || abs(u.y - .03) > .03) return 0.;         float num = float(num_i);                                const int dec = -1;                                      const int[] str1 = int[](

// makeStrFloat & makeStrInt end
#define _endNum  0);                                const int l1 = str1.length() - 1;               int x = int(u.x * 16. * FONT_SPACING);          if (x < l1) return print_char(str1[x]);         int neg = 0;                                    if (num < 0.) {                                     if (x == l1) return print_char(45);             num = abs(num);                                 neg = 1;                                    }                                               int pre = neg + max(1, log10(num));             int s2 = l1 + pre + dec + 1;                    if (x >= s2) {                                      if (x >= s2+str2.length()-1) return 0.;         int n2 = str2[x - s2];                          return print_char(n2);                      }                                               float d = float(l1 + pre - x);                  if (d == 0.) return print_char(46);             d = pow(10., d < 0.  ? ++d : d);                int n = 48 + int(10.*fract(num/.999999/d));     return print_char(n);                       }

/* === Curious about how makeStrI() and makeStrF() work ? ===

Here is a broken-down and commented version of the following syntax:

    makeStrF(print_string_with_float) _H _e _l _l _o _num_ _W _o _r _l _d _endNum
    
This will translate exactly to the following code:

float print_string_with_float(vec2 u, float num, int decimals) 
{
    if (u.x < 0. || abs(u.y - .03) > .03) return 0.;
    
    // The number (num) will be displayed between these two strings.
    // The separation is handled by the #define "_num_"
    const int[] str1 = int[]( _H _e _l _l _o  0);
    const int[] str2 = int[]( _W _o _r _l _d  0);
    
    const int str1_length = str1.length() - 1;
    
    int x = int(u.x * 16. * SPACING);
    
    // Print char from 1st string (before number)
    if (x < str1_length) {
        int n1 = str1[x];
        return print_char(n1);
    }
    
    // Handle negative numbers
    int is_negative = 0;
    if (num < 0.) {        
        // Print a minus sign
        if (x == str1_length) return print_char(45);
        
        num = abs(num);
        is_negative = 1;
    }
        
    int digit_count = is_negative + max(1, log10(num)); // Number of characters before decimal point
    int num_length  = digit_count + decimals + 1;       // Total number of characters for the number
    int str2_start  = str1_length + num_length;
    
    // Print char from 2nd string (after number)
    if (x >= str2_start) {
        const int str2_length = str2.length() - 1;
        int n2 = str2[x - str2_start];
        if (x >= str2_start + str2_length) return 0.; // right bound
        return print_char(n2);
    }
        
    // Print the decmial separator (dot)
    if (x == str1_length + digit_count) {
        return print_char(46);
    }
    
    // Get current digit
    int digit_index = x - str1_length;
    if (digit_index > digit_count) {
        // Offset by 1 for digits located after the decimal point
        digit_index--;
    }
    float exponent = float(digit_count - digit_index);
    int n = 48 + int(10.*fract(num/.999999/pow(10., exponent)));
        
    // Print digit
    return print_char(n);
}
*/
`;var me=`
  const float IOR_AIR = 1.0;
  const float IOR_WATER = 1.333;
  const vec3 abovewaterColor = vec3(0.25, 1.0, 1.25);
  const vec3 skyColor = vec3(.4, .8, 1.);
  const vec3 underwaterColor = vec3(0.4, 0.9, 1.0);
  uniform vec3 light;
  uniform vec3 sphereCenter;
  uniform float sphereRadius;
  uniform sampler2D tiles;
  uniform sampler2D causticTex;
  uniform sampler2D water;
  uniform sampler2D areaConservationTexture;
  uniform bool areaConservation;
  uniform vec2 flagCenter;
  uniform vec3 poolSize;
  uniform bool renderWater;
  uniform bool cornerView;
  
  vec2 intersectCube(vec3 origin, vec3 ray, vec3 cubeMin, vec3 cubeMax) {
    vec3 tMin = (cubeMin - origin) / ray;
    vec3 tMax = (cubeMax - origin) / ray;
    vec3 t1 = min(tMin, tMax);
    vec3 t2 = max(tMin, tMax);
    float tNear = max(max(t1.x, t1.y), t1.z);
    float tFar = min(min(t2.x, t2.y), t2.z);
    return vec2(tNear, tFar);
  }
  
  float intersectSphere(vec3 origin, vec3 ray, vec3 sphereCenter, float sphereRadius) {
    vec3 toSphere = origin - sphereCenter;
    float a = dot(ray, ray);
    float b = 2.0 * dot(toSphere, ray);
    float c = dot(toSphere, toSphere) - sphereRadius * sphereRadius;
    float discriminant = b*b - 4.0*a*c;
    if (discriminant > 0.0) {
      float t = (-b - sqrt(discriminant)) / (2.0 * a);
      if (t > 0.0) return t;
    }
    return 1.0e6;
  }
  
  vec3 getSphereColor(vec3 point) {
    vec3 color = vec3(0.5);
    
    /* ambient occlusion with walls */
    color *= 1.0 - 0.9 / pow((1.0 + sphereRadius - abs(point.x) / (0.5*poolSize.x)) / sphereRadius, 3.0);
    color *= 1.0 - 0.9 / pow((1.0 + sphereRadius - abs(point.z) / (0.5*poolSize.z)) / sphereRadius, 3.0);
    color *= 1.0 - 0.9 / pow((point.y + 1.0 + sphereRadius) / sphereRadius, 3.0);
    
    /* caustics */
    vec3 sphereNormal = (point - sphereCenter) / sphereRadius;
    vec3 refractedLight = refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);
    float diffuse = max(0.0, dot(-refractedLight, sphereNormal)) * 0.5;
    vec2 coord = point.xz / poolSize.xz + 0.5;
    vec4 info = texture(water, coord);
    if (point.y < info.r && renderWater) {
      vec4 caustic = texture(causticTex, 0.75 * (point.xz - point.y * refractedLight.xz / refractedLight.y) / poolSize.xz + 0.5);
      diffuse *= caustic.r * 4.0;
    }
    color += diffuse;
    
    return color;
  }
  
  vec3 getWallColor(vec3 point) {
    float scale = 0.5;
    
    vec3 wallColor;
    vec3 normal;
    if (abs(point.x) > poolSize.x * 0.5 - 0.01) {
      wallColor = texture(tiles, point.yz * 0.5 + vec2(1.0, 0.5)).rgb;
      normal = vec3(-point.x, 0.0, 0.0);
    } else if (abs(point.z) > poolSize.z * 0.5 - 0.01) {
      wallColor = texture(tiles, point.yx * 0.5 + vec2(1.0, 0.5)).rgb;
      normal = vec3(0.0, 0.0, -point.z);
    } else {
      wallColor = texture(tiles, point.xz * 0.5 + 0.5).rgb;
      normal = vec3(0.0, 1.0, 0.0);
    }
    
    /*scale /= length(point) * 10;*/ /* pool ambient occlusion */
    scale *= 1.0 - 0.9 / pow(length(point - sphereCenter) / sphereRadius, 4.0); /* sphere ambient occlusion */
    
    /* caustics */
    vec3 refractedLight = -refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);
    float diffuse = max(0.0, dot(refractedLight, normal));
    vec4 info = texture(water, point.xz / poolSize.xz + 0.5);
    if (renderWater && point.y < info.r) {
      vec4 caustic = texture(causticTex, 0.75 * (point.xz - point.y * refractedLight.xz / refractedLight.y) / poolSize.xz + 0.5);
      scale += diffuse * caustic.r * 2.0 * caustic.g;
    } else {
      /* shadow for the rim of the pool */
      vec2 t = intersectCube(point, refractedLight, vec3(-poolSize.x / 2., -poolSize.y, -poolSize.z / 2.), vec3(poolSize.x / 2., poolSize.y, poolSize.z / 2.));
      diffuse *= 1.0 / (1.0 + exp(-200.0 / (1.0 + 10.0 * (t.y - t.x)) * (point.y + refractedLight.y * t.y - 2.0 / 12.0)));
      
      scale += diffuse * 0.5;
      scale = min(1., scale);
    }
    
    return wallColor * scale;
  }
`;function de(a,i,n,l){this.water=i,this.gl=a,this.tileTexture=p.Texture.fromImage(document.getElementById("tiles"),{minFilter:this.gl.LINEAR_MIPMAP_LINEAR,wrap:this.gl.REPEAT,format:this.gl.RGB}),this.franceTexture=p.Texture.fromImage(document.getElementById("france"),{minFilter:this.gl.LINEAR_MIPMAP_LINEAR,wrap:this.gl.REPEAT,format:this.gl.RGBA}),this.chinaTexture=p.Texture.fromImage(document.getElementById("china"),{minFilter:this.gl.LINEAR_MIPMAP_LINEAR,wrap:this.gl.REPEAT,format:this.gl.RGBA}),this.lettersTexture=p.Texture.fromImage(document.getElementById("letters"),{minFilter:this.gl.LINEAR,magFilter:this.gl.LINEAR,wrap:this.gl.REPEAT,format:this.gl.RGBA}),this.flagSize=l,this.flagSize=[1.5,1],this.flagCenter=n,this.lightDir=new p.Vector(2,2,-1).unit(),this.causticTex=new p.Texture(1024,1024),this.waterShaders=[];let m="";Object.entries(t.params.visualizations.customParametersDict).forEach(S=>{const P=S[1].name,L=S[1].value;m+="#define "+P+" "+L+`
`}),Object.entries(t.params.visualizations.renderingDict).forEach(S=>{const P=S[1].name,L=S[1].value;m+="#define "+P+" "+L+`
`});for(var f=0;f<2;f++)this.waterShaders[f]=new p.Shader(`
      uniform sampler2D water;
      uniform vec3 poolSizeVertexShader;
      out vec3 position;
      void main() {
        vec4 info = texture(water, gl_Vertex.xy / poolSizeVertexShader.xz + 0.5);
        position = gl_Vertex.xzy;
        position.y += info.r;
        gl_Position = gl_ModelViewProjectionMatrix * vec4(position, 1.0);
      }
    `,me+`
      uniform vec3 eye;
      in vec3 position;
      out vec4 fragColor;
      uniform float showFlags;
      uniform bool showWR;
      uniform bool showSpeed;
      uniform bool showFinishTimes;
      uniform bool showDivingDistance;
      uniform samplerCube sky;
      uniform bool showProjectionGrid;
      uniform bool showAreaConservedGrid;
      uniform sampler2D france;
      uniform sampler2D china;
      uniform vec2 flagSize;

      uniform sampler2D foamTex;

      uniform float rendering;

      uniform bool foamEnabled;
      uniform bool shadowEnabled;
      uniform float shadowRadius;
      uniform float shadowPower;
      uniform bool showCircle;
      uniform float shadowCircleRadius;
      uniform float shadowCircleStroke;
      uniform float showSwimmersLines;
      uniform float swimmersLinesMode;
      uniform float medalsModeBeforeFinish;
      uniform float medalsModeAfterFinish;

      uniform bool classicalOverlayEnabled;
      uniform float showOverlayPlane;

      uniform float heightLimit;

      uniform float seed;

      uniform float waterColorParameter;

      `+m+`
      
      // Show lines
      #define LINES_NONE 0
      #define LINES_ONLY_MEDALS 1
      #define LINES_ALL 2

      // Lines modes
      #define LINES_MODE_NEIGHBOURS 0
      #define LINES_MODE_PER_SWIMMER 1

      // Show medals modes
      #define MEDALS_NONE 0
      #define MEDALS_STARS 1
      #define MEDALS_BRIGHT 2
      #define MEDALS_LANES 3
      
      // Color declarations
      #define RED     vec3( 1,.3,.4)
      #define GREEN   vec3(.2, 1,.4)
      // #define BLUE    vec3(.2,.8, 1)
      #define RAINBOW abs(cos(uv.x + vec3(5,6,1)))

      #define GOLD    vec3(1., 1., 0.)
      #define SILVER  vec3(.8, .8, .8)
      #define BRONZE  vec3(.75, .54, .44)

      #define PINK (vec3(241., 171., 201.) / 255.)
      #define BLUE (vec3(35., 147., 205.) / 255.)
      #define YELLOW (vec3(217., 196., 122.) / 255.)

      const vec3[] colorRankDict = vec3[](GOLD, SILVER, BRONZE); 
      
      
      `+be+Gt+`
      makeStrF(printSpeed) _num_ __ _m _DIV _s _endNum
      makeStrF(printTime) _num_ __ _s _endNum


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

      makeStr(printStar) _STAR _end
      
      bool isOnConservedAreaGrid(vec2 pos, float size) {
        vec2 gridCoord = pos / size;
        return abs(fract(gridCoord.x) - 0.5) < 0.05 || abs(fract(gridCoord.y) - 0.5) < 0.05;
      }
      bool isInCircle(vec2 position, vec2 center, float R, float r) {
        vec2 diff = position - center;
        float dist_sq = dot(diff, diff);
        return dist_sq < R*R && dist_sq > r*r;
      }


      void drawWorldRecordLine(in vec2 position, inout vec3 color) {
        if (abs(position.y + poolSize.z / 2. - wr) < .05) color = YELLOW; 
      }

      void maximiseColor(out vec3 c) {
        float m = max(c.r, max(c.g, c.b));
        c /= m;
      }

      void drawDivingRipples(in vec2 coord, inout vec3 color) {
        vec4 divingWave = getDivingWaves(coord);
        bool toDraw = divingWave.z > 0.;
        float blending = divingWave.y;

        float intensity = divingWave.w;
        vec3 rippleColor = intensity * PINK + (1. - intensity) * BLUE;
        maximiseColor(rippleColor);

        if (toDraw) {
          color = (1. - blending) * color + blending * rippleColor;
        }
      
      }

      void distort(inout vec2 pos, vec2 swimmerPos, in float intensity) {
        if (classicalOverlayEnabled) return;
        float distFactor = intensity / 2.;
        // pos.x += perlin(pos.xy + swimmerPos, 3., seed*.0000005) * distFactor;
        // pos.y += perlin(pos.yx + swimmerPos, 3., seed*.0000005) * distFactor;
        pos.x += perlin(pos.xy + swimmerPos + vec2(seed * 2., 0.), 3., 0.) * distFactor;
        pos.y += perlin(pos.yx + swimmerPos + vec2(seed * 2., 0.), 3., 0.) * distFactor; 
      }

      void distort(inout vec2 pos, vec2 swimmerPos, in float beginTime, in float endTime, in bool appearing) {
        if (time < beginTime || time > endTime) return;
        float intensity = (time - beginTime) / (endTime - beginTime);
        intensity = pow(intensity, 2.);
        if (!appearing) intensity = 1. - intensity;
        distort(pos, swimmerPos, intensity);
      }

      void drawFlags(in vec2 position, in vec2 swimmerPos, in float swimmerAltitude, in float nationality, bool rightSide, inout vec3 color) {
        float swimmer_x = swimmerPos.x;
        float swimmer_z = swimmerPos.y;
        float dz = rightSide ? -2.5 : 2.5;
        float staticFlag_z = flagSize.y / 2. - poolSize.z / 2. + 2.;
        float flag_z = swimmerAltitude <= 0. ? max(staticFlag_z, swimmer_z + dz) : staticFlag_z;
        vec2 flagCenterNew = vec2(swimmer_x, flag_z);
        // TODO nettoyer
        vec2 flagCorner = flagCenterNew - flagSize / 2.;
        
        if (areaConservation) {
          //vec2 coord = position / poolSize.xz + 0.5;
          //position = texture(areaConservationTexture, coord).xy;
          flagCorner = texture(areaConservationTexture, flagCorner / poolSize.xz + 0.5).xy;
        }
        if (showAreaConservedGrid && isOnConservedAreaGrid(position, 0.1)) color = vec3(1., 0., 0.); /* Debug conserved area grid */
        vec2 posFlag = position - flagCorner - flagSize / 2.;/*Fixes the corner of the flag on the XZ plane*/
        float distFactor = 0.;
        float startDissipationTime = 0.5;
        float stopDissipationTime = 1.5;
        float reshowTime = 5.;
        float reshowAppearDuration = 2.;
        float opacity = showFlags;
        if (time >= stopDissipationTime && time <= reshowTime) opacity = 0.;
        else if (time >= reshowTime && time <= reshowTime + reshowAppearDuration) opacity *= (time - reshowTime) / reshowAppearDuration;
        else if (time >= startDissipationTime && time <= stopDissipationTime ) opacity *= 1. - (time - startDissipationTime) / (stopDissipationTime - startDissipationTime);
        if (opacity < .99) distort(posFlag, swimmerPos, pow(1. - opacity, 2.));
        else distort(posFlag, swimmerPos, startDissipationTime, stopDissipationTime, true);
        // distort(posFlag, swimmerPos, .75);
        vec2 flagCoord = posFlag / flagSize + 0.5;
        if (bool(showFlags) && abs(posFlag.x) <= flagSize.x / 2. && abs(posFlag.y) <= flagSize.y / 2.) {
          vec3 flagColor;
          if(nationality < .5) flagColor = texture(france, vec2(1.-flagCoord.y,1.- flagCoord.x)).xyz;
          else flagColor = texture(china, vec2(1.-flagCoord.y,1.- flagCoord.x)).xyz;
          
          color = opacity * flagColor + (1. - opacity) * color;
          float delta = .1;
          vec2 delta_tex = vec2(delta, delta) / flagSize;
          if (min(flagCoord.y, 1.- flagCoord.y) <= delta_tex.y 
            || min(flagCoord.x, 1. - flagCoord.x) <= delta_tex.x) color = opacity * vec3(1., 1., 1.) + (1. - opacity) * color;
        }
      }

      vec2 toTextCoord(vec2 position, float textSize) {
        position = position.yx;
        position.y += textSize / 2.;
        return position / (20. * textSize);
      }

      void drawNumbers(in vec2 position, in vec2 swimmerPosition, in int index, in bool rightSide, inout vec3 color) {
        float speed = getSwimmerSpeed(index);
        float finishTime = getSwimmerFinishTime(index);
        float visSize = flagSize.x / 2.;
        float delta = bool(showFlags)? 5. : 2.;
        float dz = rightSide? delta : -delta - 9. * visSize * .75 ;
        vec2 visPosition = swimmerPosition - position - vec2(0., dz);
        vec2 visCoord = toTextCoord(visPosition, visSize);
        

        if (showSpeed) {
          vec3 visColor = GREEN/.4 * printSpeed(visCoord, abs(speed), 2);
          if (max(visColor.r, max(visColor.g, visColor.b)) > .3) color = visColor;
        }
        if (showFinishTimes && finishTime > .1) {
          vec3 visColor = GREEN/.4 * printTime(visCoord, finishTime, 2);
          if (max(visColor.r, max(visColor.g, visColor.b)) > .3) color = visColor;
        }
      }

      void drawFinishTime(in vec2 position, in vec2 swimmerPosition, in float finishTime, inout vec3 color) {
      }

      void drawRanks(in vec2 position, in vec2 swimmerPosition, in int rank, in bool rightSide, inout vec3 color) {
        int showMode = int(medalsModeBeforeFinish);
        if (getSwimmerFinishTime(rank) > .1) showMode = int(medalsModeAfterFinish);
        if (showMode == MEDALS_NONE) return;

        vec3 medalColor = vec3(0);
        if (rank == 0) medalColor = GOLD;
        else if (rank == 1) medalColor = SILVER;
        else if (rank == 2) medalColor = BRONZE;
        else return;
        if (showMode == MEDALS_LANES) {
          if (abs(position.x - swimmerPosition.x) <= poolSize.x/20.) color = medalColor; 
        }
        float visSize = flagSize.x / 2.;
        float dz = rightSide? 2. : -2.;
        vec2 visPosition = swimmerPosition - position + vec2(0., dz);
        vec2 visCoord = toTextCoord(visPosition, visSize);

        
        
        vec3 visColor = vec3(1., 1., 1.)*printStar(visCoord);
        //if (max(visColor.r, max(visColor.g, visColor.b)) <= .3) return;
        // visColor *= pow(length(visPosition), 1.0);
        
        
        if (showMode == MEDALS_STARS && max(visColor.r, max(visColor.g, visColor.b)) > .3) color = visColor * medalColor;
        else if (showMode == MEDALS_BRIGHT) color += 0.2/pow(length(visPosition), 1.) * medalColor;
      }

      void drawShadows(in vec2 projectedPosition, in vec2 swimmerPosition, in float altitude, inout vec3 color) {
        if (!cornerView && (!shadowEnabled || abs(altitude - (-.06)) < .18)) return;
        vec2 diff = (projectedPosition - swimmerPosition);
        vec2 diffNormalized = diff/shadowRadius;
        float distSq = dot(diffNormalized, diffNormalized);
        float attenuation = min(1., pow(distSq, shadowPower));
        float altitudeAttenuation = min(1., abs(altitude));
        attenuation = 1.-(1.-attenuation)*altitudeAttenuation;
        color *= attenuation;
        if (!showCircle && !cornerView) return;
        if(cornerView) altitudeAttenuation = 1.;
        distSq = dot(diff, diff);
        float intensity = max(0.,1.-abs((shadowCircleRadius - distSq)/shadowCircleStroke)) * altitudeAttenuation;
        color = intensity * YELLOW + (1. - intensity) * color;
      }

      void drawLine(in vec2 projectedPosition, in vec2 swimmerPosition, in int swimmerRank, in vec3 lineColor, inout vec3 color) {
        int showLinesMode = int(showSwimmersLines);
        int linesMode = int(swimmersLinesMode);
        if (showLinesMode == LINES_ONLY_MEDALS && swimmerRank > 2) return;
        float lineThickness = .1;
        if (swimmerRank > 2) lineThickness = .03;
        float lineLength = 2.*poolSize.x;
        if (linesMode == LINES_MODE_NEIGHBOURS) {
          lineLength = poolSize.x / 30.;
        }
        float line_z = getSwimmerPosition(swimmerRank).y;
        if (abs(projectedPosition.y - line_z) <= lineThickness && 
            abs(projectedPosition.x - swimmerPosition.x) <= lineLength) color = lineColor;
      }

      void drawSwimmerLines(in vec2 projectedPosition, in vec2 swimmerPosition, in int swimmerRank, inout vec3 color) {
        int showLinesMode = int(showSwimmersLines);
        int linesMode = int(swimmersLinesMode);
        if (showLinesMode == LINES_NONE) return;
        float colorAttenuation = .7;
        if (linesMode == LINES_MODE_PER_SWIMMER) {
          vec3 lineColor = vec3(1., 0., 0.) * colorAttenuation;
          if (swimmerRank <= 2) lineColor = colorRankDict[swimmerRank] * colorAttenuation;
          drawLine(projectedPosition, swimmerPosition, swimmerRank, lineColor, color);

        }
        else if (linesMode == LINES_MODE_NEIGHBOURS) {
          vec3 aheadColor = vec3(0., 1., 0.) * colorAttenuation;
          vec3 behindColor = vec3(1., 0., 0.) * colorAttenuation;

          

          if (swimmerRank == 0) behindColor = SILVER;
          else if (swimmerRank == 1) {
            aheadColor = GOLD * 5.;
            behindColor = BRONZE;
          }
          else if (swimmerRank == 2) aheadColor = SILVER;
          else if (swimmerRank == 3) aheadColor = BRONZE;

          if (swimmerRank != 0) drawLine(projectedPosition, swimmerPosition, swimmerRank-1, aheadColor, color);
          if (float(swimmerRank) < swimmersNumber - 1.) drawLine(projectedPosition, swimmerPosition, swimmerRank+1, behindColor, color);
        }
      }

      void colorWater(in vec2 projectedPosition, in vec2 swimmerPosition, in float value, inout vec3 color) {
        vec3 minColor = vec3(1., 1., 1.)*0.;
        minColor = color;
        vec3 maxColor = vec3(1., 0., 0.);
        vec3 localColor = value * maxColor + (1. - value) * minColor;
        float maxDist = .5 + value;
        vec2 diff = projectedPosition - swimmerPosition;
        vec2 diffDistorted = vec2(diff.x, .33*diff.y);
        float distSq = dot(diffDistorted, diffDistorted);
        float coeff = pow(max(0., (maxDist - sqrt(distSq))/maxDist), 2.);
        color = coeff * localColor + (1. - coeff) * color;
        
      }

      float getColorValue(float speed) {
      float res;
        if (int(waterColorParameter) == PARAMETER_SPEED) {
          float minSpeed = 5.;
          float maxSpeed = 8.;
          res = (abs(speed) - minSpeed) / (maxSpeed - minSpeed);
          res = min(max(res, 0.), 1.);
          } 
          return res;
      }

      void drawVisualizations(in vec2 position, inout vec3 color) {
        vec2 projectedPosition = position;
        vec2 coord = position / poolSize.xz + .5;
        if (classicalOverlayEnabled && showOverlayPlane > 0.01){
          vec3 overlayColor  = vec3(1.);
          if (min(fract(position.y), fract(position.x)) <= .1) overlayColor *= 0.;
          color = showOverlayPlane * overlayColor + (1. - showOverlayPlane) * color;
        }
        bool hasFirstFinished = getSwimmerFinishTime(0) > 0.1;
        if (showDivingDistance) drawDivingRipples(coord, color);
        for (int i = 0; i < 10; i++) {
          float i_float = float(i);
          if (i_float > swimmersNumber - 0.1) break;
          vec2 swimmerPos = getSwimmerPosition(i);
          float swimmerAltitude = getSwimmerAltitude(i);
          if (showProjectionGrid && isOnConservedAreaGrid(position, 0.1)) color = vec3(1., 1., 0.); /* Debug conserved area grid */
          if (showWR) drawWorldRecordLine(position, color); 
          if (areaConservation) {
            vec2 coord = position / poolSize.xz + 0.5;
            position = texture(areaConservationTexture, coord).xy;
          }

          float speed = getSwimmerSpeed(i);
          bool rightSide = hasFirstFinished ? false : speed >= 0.;
          
          drawSwimmerLines(projectedPosition, swimmerPos, i, color);
          drawRanks(projectedPosition, swimmerPos, i, rightSide, color);
          if (shadowEnabled) drawShadows(projectedPosition, swimmerPos, swimmerAltitude, color);
          // if (cornerView) continue;
          
          drawFlags(position, swimmerPos, swimmerAltitude, getSwimmerNationality(i), rightSide, color);
          if (showSpeed || showFinishTimes) drawNumbers(position, swimmerPos, i, rightSide, color);
          colorWater(projectedPosition, swimmerPos, getColorValue(speed), color);
        }
      }

      vec3 toonRendering(vec3 normal, vec3 ray) {
        // Calculate diffuse lighting
        float diffuse = max(0., dot(light, normal));
        
        // Quantize to 4 levels for toon effect
        float levels = 5.0;
        float quantized = floor(diffuse * levels) / levels;
        
        // Create toon colors - tropical paradisiac water tones
        vec3 toonColors[6];
        toonColors[0] = vec3(0.0, 0.2, 0.4); // Deep tropical blue
        toonColors[1] = vec3(0.0, 0.4, 0.7); // Rich turquoise
        toonColors[2] = vec3(0.2, 0.6, 0.9); // Bright turquoise
        toonColors[3] = vec3(0.4, 0.8, 1.0); // Light turquoise
        toonColors[4] = vec3(0.7, 0.95, 1.0); // Crystal clear tropical
        toonColors[5] = vec3(1., 1., 1.0); // white
        
        // Get the color based on quantized level
        int level = int(quantized * levels);
        vec3 color = toonColors[level];
        
        // Add a small specular highlight for toon effect
        vec3 reflectDir = reflect(-light, normal);
        float spec = pow(max(0., dot(ray, reflectDir)), 32.0);
        // if (spec > 0.5) {
        //   color += vec3(1.0, 1.0, 0.8) * 0.3;
        // }
        
        return color;
      }

      vec3 lambertRendering(vec3 normal) {
        vec3 color = vec3(.3);
        float diffuse = max(0., dot(light, normal)) * .3;
        color += diffuse;
        return color;
      }

      vec3 heightFieldRendering(float height) {
        float interval = .1;
        float value = abs(height) / interval;
        value = min(max(value, 0.), 1.);
        vec3 lowColor = vec3(0., 0., 1.);
        vec3 highColor = vec3(1., 0., 0.);
        vec3 color = height > 0. ? highColor : lowColor;
        return value * color;
      }

      vec3 realisticRendering(vec3 origin, vec3 ray, vec3 waterColor) {
        vec3 color;
        float q = intersectSphere(origin, ray, sphereCenter, sphereRadius);
        if (q < 1.0e6) {
          color = getSphereColor(origin + ray * q);
        } else if (ray.y < 0.0) {
          vec2 t = intersectCube(origin, ray, vec3(-poolSize.x / 2., -poolSize.y, -poolSize.z / 2.), vec3(poolSize.x / 2., poolSize.y, poolSize.z / 2.));
          color = getWallColor(origin + ray * t.y);
        } else {
          vec2 t = intersectCube(origin, ray, vec3(-poolSize.x / 2., -poolSize.y, -poolSize.z / 2.), vec3(poolSize.x / 2., poolSize.y, poolSize.z / 2.));
          vec3 hit = origin + ray * t.y;
          if (hit.y < 2.0 / 12.0) {
            color = getWallColor(hit);
          } else {
            color = texture(sky, ray).rgb;
            color = skyColor;
            color += vec3(pow(max(0.0, dot(light, ray)), 5000.0)) * vec3(10.0, 8.0, 6.0);
          }
        }
        if (ray.y < 0.0) {
          color *= waterColor;
        }
        return color;
      }


      vec4 getSurfaceRayColor(vec3 origin, vec3 ray, vec3 waterColor, vec3 normal) {
        vec3 color;
        if (int(rendering) == RENDERING_REALISTIC) color = realisticRendering(origin, ray, waterColor);
        else if (int(rendering) == RENDERING_HEIGHT_FIELD) color = heightFieldRendering(origin.y);
        else if (int(rendering) == RENDERING_LAMBERT) color = lambertRendering(normal);
        else if (int(rendering) == RENDERING_TOON) color = toonRendering(normal, ray);
        
        vec3 colorBefore = color;
        if (bool(showOverlayPlane) || bool(showFlags) || showWR || int(medalsModeAfterFinish) != MEDALS_NONE || int(medalsModeBeforeFinish) != MEDALS_NONE || showSpeed || showDivingDistance) drawVisualizations(origin.xz, color);
        float alpha = 1.;
        if (length(color - colorBefore) >= .04) {
          alpha = 0.;
        }
          
        
        return vec4(color, alpha);
      }
      
      void main() {
        vec2 coord = position.xz / poolSize.xz + 0.5;
        vec4 info = texture(water, coord);
        /* make water look more "peaked" */
        /*for (int i = 0; i < 5; i++) {
          coord += info.ba * 0.005;
          info = texture(water, coord);
        }*/
        // if (int(rendering) == RENDERING_HEIGHT_FIELD) {
        //   float interval = .1;
        //   float value = abs(info.r) / interval;
        //   value = min(max(value, 0.), 1.);
        //   vec4 lowColor = vec4(0., 0., 1., 1.);
        //   vec4 highColor = vec4(1., 0., 0., 1.);
        //   vec4 color = info.r > 0. ? highColor : lowColor;
        //   fragColor = value * color;
        //   return;
        // }
        
        vec3 normal = vec3(info.b, sqrt(1.0 - dot(info.ba, info.ba)), info.a);
        vec3 incomingRay = normalize(position - eye);
        
        `+(f?`
          normal = -normal;
          vec3 reflectedRay = reflect(incomingRay, normal);
          vec3 refractedRay = refract(incomingRay, normal, IOR_WATER / IOR_AIR);
          float fresnel = mix(0.5, 1.0, pow(1.0 - dot(normal, -incomingRay), 3.0));
          
          vec4 reflectedColor = getSurfaceRayColor(position, reflectedRay, underwaterColor, normal);
          vec4 refractedColor = getSurfaceRayColor(position, refractedRay, vec3(1.0), normal) * vec4(0.8, 1.0, 1.1, 1.);
          
          fragColor = mix(reflectedColor, refractedColor, (1.0 - fresnel) * length(refractedRay));
        `:`
          vec3 reflectedRay = reflect(incomingRay, normal);
          vec3 refractedRay = refract(incomingRay, normal, IOR_AIR / IOR_WATER);
          float fresnel = mix(0.25, 1.0, pow(1.0 - dot(normal, -incomingRay), 3.0));
          
          vec4 reflectedColor = getSurfaceRayColor(position, reflectedRay, abovewaterColor, normal);
          vec4 refractedColor = getSurfaceRayColor(position, refractedRay, abovewaterColor, normal);
          
          fragColor = mix(refractedColor, reflectedColor, fresnel);

          if (reflectedColor.a <.1) fragColor.a = 0.;
          // return;

          // if (info.r > heightLimit) fragColor = vec4(1., 0., 0., 1.);

          if(!foamEnabled) return;

          vec3 waterColor = abovewaterColor;
          vec4 foamColor = vec4(vec3(.9), fragColor.a);
          float foam = texture(foamTex, coord).r;
          fragColor = mix(fragColor, foamColor, foam);
        `)+`
      }
    `);this.sphereMesh=p.Mesh.sphere({detail:10}),this.sphereShader=new p.Shader(me+`
    out vec3 position;
  void main() {
    position = sphereCenter + gl_Vertex.xyz * sphereRadius;
    gl_Position = gl_ModelViewProjectionMatrix * vec4(position, 1.0);
  }
  `,me+`
    in vec3 position;
    out vec4 fragColor;
    uniform vec3 color;
  void main() {
    fragColor = vec4(getSphereColor(position)*color, 1.0);
      vec4 info = texture(water, position.xz / poolSize.xz + 0.5);
    if (position.y < info.r && renderWater) {
      fragColor.rgb *= underwaterColor * 1.2;
    }
  }
  `),this.reset(),this.cubeShader=new p.Shader(me+`
    out vec3 position;
  void main() {
    position = gl_Vertex.xyz;
    position.y = ((1.0 - position.y) * (7.0 / 12.0) - 1.0) * poolSize.y;
    gl_Position = gl_ModelViewProjectionMatrix * vec4(position, 1.0);
  }
  `,me+`
    in vec3 position;
    out vec4 fragColor;
  void main() {
    fragColor = vec4(getWallColor(position), 1.0);
      vec4 info = texture(water, position.xz / poolSize.xz + 0.5);
    if (renderWater && position.y < info.r) {
      fragColor.rgb *= underwaterColor * 1.2;
    }
  }
  `),this.sphereCenter=new p.Vector,this.sphereRadius=0;var x=!!this.gl.getExtension("OES_standard_derivatives");this.causticsShader=new p.Shader(me+`
    out vec3 oldPos;
    out vec3 newPos;
    out vec3 ray;

    /* project the ray onto the plane */
    vec3 project(vec3 origin, vec3 ray, vec3 refractedLight) {
      vec2 tcube = intersectCube(origin, ray, vec3(-poolSize.x / 2., -poolSize.y, -poolSize.z / 2.), vec3(poolSize.x / 2., poolSize.y, poolSize.z / 2.));
    origin += ray * tcube.y;
      float tplane = (-origin.y - 1.0) / refractedLight.y;
    return origin + refractedLight * tplane;
  }

  void main() {
      vec2 coord = gl_Vertex.xy / poolSize.xz + 0.5;
      vec4 info = texture(water, coord);
    info.ba *= 0.5;
      vec3 normal = vec3(info.b, sqrt(1.0 - dot(info.ba, info.ba)), info.a);

      /* project the vertices along the refracted vertex ray */
      vec3 refractedLight = refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);
    ray = refract(-light, normal, IOR_AIR / IOR_WATER);
    oldPos = project(gl_Vertex.xzy, refractedLight, refractedLight);
    newPos = project(gl_Vertex.xzy + vec3(0.0, info.r, 0.0), ray, refractedLight);

    gl_Position = vec4(0.75 * (newPos.xz + refractedLight.xz / refractedLight.y), 0.0, 1.0);
  }
  `,(x?`#extension GL_OES_standard_derivatives: enable
`:"")+`
  `+me+`
    in vec3 oldPos;
    in vec3 newPos;
    in vec3 ray;
    out vec4 fragColor;

  void main() {
    `+(x?`
        /* if the triangle gets smaller, it gets brighter, and vice versa */
        float oldArea = length(dFdx(oldPos)) * length(dFdy(oldPos));
        float newArea = length(dFdx(newPos)) * length(dFdy(newPos));
    fragColor = vec4(oldArea / newArea * 0.2, 1.0, 0.0, 0.0);
    `:`
    fragColor = vec4(0.2, 0.2, 0.0, 0.0);
    `)+`
      
      vec3 refractedLight = refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);

      /* compute a blob shadow and make sure we only draw a shadow if the player is blocking the light */
      vec3 dir = (sphereCenter - newPos) / sphereRadius;
      vec3 area = cross(dir, refractedLight);
      float shadow = dot(area, area);
      float dist = dot(dir, -refractedLight);
    shadow = 1.0 + (shadow - 1.0) / (0.05 + dist * 0.025);
    shadow = clamp(1.0 / (1.0 + exp(-shadow)), 0.0, 1.0);
    shadow = mix(1.0, shadow, clamp(dist * 2.0, 0.0, 1.0));
    fragColor.g = shadow;

      /* shadow for the rim of the pool */
      vec2 t = intersectCube(newPos, -refractedLight, vec3(-poolSize.x / 2., -poolSize.y, -poolSize.z / 2.), vec3(poolSize.x / 2., poolSize.y, poolSize.z / 2.));
    fragColor.r *= 1.0 / (1.0 + exp(-200.0 / (1.0 + 10.0 * (t.y - t.x)) * (newPos.y - refractedLight.y * t.y - 2.0 / 12.0)));
  }
  `)}de.prototype.reset=function(){this.cubeMesh=p.Mesh.cube({width:t.params.simulation.poolSize.x,height:2,depth:t.params.simulation.poolSize.z}),this.cubeMesh.triangles.splice(4,2),this.cubeMesh.compile()};de.prototype.updateCaustics=function(a){};de.prototype.renderWater=function(a,i,n){if(!t.renderWater)return;var l=new p.Raytracer;a.textureA.bind(0),this.tileTexture.bind(1),i.bind(2),this.causticTex.bind(3),this.franceTexture.bind(4),this.chinaTexture.bind(8),t.water.foam.foamTexNext.bind(9),this.lettersTexture.bind(7),a.areaConservationTexture.bind(5);const m=V.getAttributesTexture();m&&m.bind(6),this.gl.enable(this.gl.CULL_FACE),t.updateTransitions();for(var f=0;f<2;f++)this.gl.cullFace(f?this.gl.BACK:this.gl.FRONT),this.waterShaders[f].uniforms({renderWater:!0,light:this.lightDir,water:0,tiles:1,sky:2,causticTex:3,france:4,china:8,foamTex:9,areaConservationTexture:5,swimmersAttributesTexture:6,iChannel0:7,areaConservation:t.params.visualizations.areaConservationEnabled,flagSize:[1.5,2],flagCenter:[this.flagCenter.x,this.flagCenter.y],poolSize:[t.params.simulation.poolSize.x,t.params.simulation.poolSize.y,t.params.simulation.poolSize.z],poolSizeVertexShader:[t.params.simulation.poolSize.x,t.params.simulation.poolSize.y,t.params.simulation.poolSize.z],eye:l.eye,sphereCenter:this.sphereCenter,sphereRadius:this.sphereRadius,showProjectionGrid:a.showProjectionGrid,showAreaConservedGrid:a.showAreaConservedGrid,wr:a.WR_position,swimmersNumber:t.swimmers.length,cornerView:t.cornerView,showFlags:t.transitions.showFlags?t.transitions.showFlags.opacity:t.params.visualizations.showFlags,showWR:t.params.visualizations.showWR,showSpeed:t.params.visualizations.showSpeed,showDivingDistance:t.params.visualizations.showDivingDistance,showFinishTimes:t.params.visualizations.showFinishTimes,time:t.getRaceTime(),seed:t.time,foamEnabled:t.params.simulation.foam.enabled,shadowEnabled:n.enabled,shadowRadius:n.shadowRadius,shadowPower:n.shadowPower,showCircle:n.showCircle,shadowCircleRadius:n.circleRadius,shadowCircleStroke:n.circleStroke,showSwimmersLines:Math.round(t.params.visualizations.showSwimmersLinesDict[t.params.visualizations.showSwimmersLines]),swimmersLinesMode:t.params.visualizations.swimmersLinesModeDict[t.params.visualizations.swimmersLinesMode],medalsModeBeforeFinish:Math.round(t.params.visualizations.medalsModesDict[t.params.visualizations.medalsModeBeforeFinish]),medalsModeAfterFinish:Math.round(t.params.visualizations.medalsModesDict[t.params.visualizations.medalsModeAfterFinish]),rendering:t.params.visualizations.renderingDict[t.params.visualizations.rendering].value,heightLimit:t.params.simulation.heightLimit,waterColorParameter:t.params.visualizations.customParametersDict[t.params.visualizations.waterColorParameter].value,classicalOverlayEnabled:t.classicalOverlayEnabled,showOverlayPlane:t.showOverlayPlane?t.showOverlayPlane:0}).draw(a.plane);this.gl.disable(this.gl.CULL_FACE)};de.prototype.renderSpheres=function(a){const i=[];t.params.swimmers.showSpheres&&t.swimmers.forEach(n=>n.spheres.forEach(l=>i.push(l))),!t.params.video.show&&!t.hideFloaters&&t.floaters.forEach(n=>i.push(n)),t.bubbleSpheres.forEach(n=>i.push(n));for(let n of i)this.renderSphere(a,n)};de.prototype.renderSphere=function(a,i){a.textureA.bind(0),this.causticTex.bind(1),this.sphereShader.uniforms({light:this.lightDir,water:0,causticTex:1,sphereCenter:[i.center.x,i.center.y,i.center.z],sphereRadius:i.radius*t.spheresRadiusCoeff,poolSize:[t.params.simulation.poolSize.x,t.params.simulation.poolSize.y,t.params.simulation.poolSize.z],color:[i.color.x,i.color.y,i.color.z]}).draw(i.mesh)};de.prototype.renderSphereOld=function(a){a.textureA.bind(0),this.causticTex.bind(1),this.sphereShader.uniforms({light:this.lightDir,water:0,causticTex:1,sphereCenter:this.sphereCenter,sphereRadius:this.sphereRadius,poolSize:[t.params.simulation.poolSize.x,t.params.simulation.poolSize.y,t.params.simulation.poolSize.z]}).draw(this.sphereMesh)};de.prototype.renderCube=function(a){t.renderCube&&(this.gl.enable(this.gl.CULL_FACE),a.textureA.bind(0),this.tileTexture.bind(1),this.causticTex.bind(2),this.cubeShader.uniforms({light:this.lightDir,water:0,tiles:1,causticTex:2,sphereCenter:this.sphereCenter,sphereRadius:this.sphereRadius,poolSize:[t.params.simulation.poolSize.x,t.params.simulation.poolSize.y,t.params.simulation.poolSize.z],renderWater:t.renderWater}).draw(this.cubeMesh),this.gl.disable(this.gl.CULL_FACE))};function Oe(a,i){this.gl=i,this.id=i.createTexture(),i.bindTexture(i.TEXTURE_CUBE_MAP,this.id),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,1),i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAG_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),i.texImage2D(i.TEXTURE_CUBE_MAP_NEGATIVE_X,0,i.RGB,i.RGB,i.UNSIGNED_BYTE,a.xneg),i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X,0,i.RGB,i.RGB,i.UNSIGNED_BYTE,a.xpos),i.texImage2D(i.TEXTURE_CUBE_MAP_NEGATIVE_Y,0,i.RGB,i.RGB,i.UNSIGNED_BYTE,a.yneg),i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_Y,0,i.RGB,i.RGB,i.UNSIGNED_BYTE,a.ypos),i.texImage2D(i.TEXTURE_CUBE_MAP_NEGATIVE_Z,0,i.RGB,i.RGB,i.UNSIGNED_BYTE,a.zneg),i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_Z,0,i.RGB,i.RGB,i.UNSIGNED_BYTE,a.zpos)}Oe.prototype.bind=function(a){this.gl.activeTexture(this.gl.TEXTURE0+(a||0)),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,this.id)};Oe.prototype.unbind=function(a){this.gl.activeTexture(this.gl.TEXTURE0+(a||0)),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,null)};const se=new wt,Xt=function(a,i){const n=se.addFolder("visualizations");n.close(),n.add(t,"useConfigFile").name("use configuration file"),n.add(t,"showTimeline").name("show event timeline").listen().onChange(v=>{t.hideEditorPanel(v)}),n.add(t.params.visualizations,"showFlags").name("show flags").listen(),n.add(t.params.visualizations,"showStreaks").name("show streaks").listen(),n.add(t.params.visualizations,"showWR").name("show world record").listen(),n.add(t.params.visualizations,"showSwimmersLines",t.params.visualizations.swimmersLinesList).name("show neighbours lines").listen(),n.add(t.params.visualizations,"swimmersLinesMode",t.params.visualizations.swimmersLinesModeList).name("show neighbours lines").listen(),n.add(t.params.visualizations,"customWaterPerturbation",t.params.visualizations.customParametersList).name("custom water perturbation").listen(),n.add(t.params.visualizations,"waterColorParameter",t.params.visualizations.customParametersList).name("water color parameter").listen(),n.add(t.params.visualizations,"medalsModeBeforeFinish",["none","stars","bright","lanes"]).name("show potential medals").listen(),n.add(t.params.visualizations,"medalsModeAfterFinish",["none","stars","bright","lanes"]).name("show potential medals after finish").listen(),n.add(t.params.visualizations,"showSpeed").name("show speed").listen(),n.add(t.params.visualizations,"showDivingDistance").name("show diving distance").listen(),n.add(t.params.visualizations.shadow,"enabled").name("show shadow"),n.add(t.params.visualizations,"areaConservationEnabled","areaConservationEnabled").name("area conservation").listen(),n.add(t.params.visualizations,"rendering",t.params.visualizations.renderingList).name("rendering").listen().onChange(()=>{t.params.visualizations.rendering=="toon"&&(t.params.simulation.waterDamping=.35)});const l=se.addFolder("video");l.close(),l.add(t.params.video,"opacity").name("opacity").listen(),l.add(t.params.video,"thresholdBlending").name("threshold blending").listen(),l.add(t.params.video,"blendingThreshold",.1,1.5).name("blending threshold"),l.add(t.params.video,"show").name("show").listen(),l.add(t.params.video,"hideObstructions").name("hide obstructions"),l.add(t.params.video,"hideObstructionThreshold",0,.5).name("obstructions threshold");const m=n.addFolder("Sparks");m.close(),m.add(t.params.visualizations.sparks,"enabled").name("sparks enabled"),m.add(t.params.visualizations.sparks,"glow",1,30).name("sparks glow factor"),m.add(t.params.visualizations.sparks,"lengthFactor",.1,10).name("sparks length factor"),m.add(t.params.visualizations.sparks,"glowOffset",.1,3).name("sparks glow offset"),m.add(t.params.visualizations.sparks,"stroke",.001,.05).name("sparks stroke"),m.add(t.params.visualizations.sparks,"num",10,Ze).step(1).name("sparks number"),m.add(t.params.visualizations.sparks,"sizeFactor",10,100).name("size factor");const f=n.addFolder("Swimmers shadows");f.close(),f.add(t.params.visualizations.shadow,"shadowRadius",0,2).name("shadow radius"),f.add(t.params.visualizations.shadow,"shadowPower",.1,2).name("shadow power"),f.add(t.params.visualizations.shadow,"showCircle").name("circle"),f.add(t.params.visualizations.shadow,"circleRadius",.5,2).name("circle radius"),f.add(t.params.visualizations.shadow,"circleStroke",.1,.5).name("circle stroke");const x=se.addFolder("Simulation");x.close(),x.add(t.params.simulation,"optimized").name("optimized").listen(),x.add(t.params.simulation.poolSize,"x",1,25).name("pool width").onChange(function(v){i()}).listen(),x.add(t.params.simulation.poolSize,"z",1,50).name("pool height").onChange(function(v){i()}).listen(),x.add(t.params.simulation.poolSize,"y",1,3).name("pool depth").onChange(function(v){i()}).listen(),x.add(t.params.simulation,"waterDamping",.005,.4).name("water damping").listen();const S=x.addFolder("foam");S.close(),S.add(t.params.simulation.foam,"enabled").name("enabled").listen(),S.add(t.params.simulation.foam,"velThreshold",0,15).name("velocity threshold"),S.add(t.params.simulation.foam,"velMax",0,20).name("max velocity"),S.add(t.params.simulation.foam,"dispersion",0,.1).name("dispersion"),S.add(t.params.simulation.foam,"timeVariation",0,10).name("time variation"),S.add(t.params.simulation.foam,"spaceVariation",0,100).name("space variation"),S.add(t.params.simulation.foam,"attenuation",0,.2).name("attenuation");const P=x.addFolder("splash");P.close(),P.add(t.params.simulation.splashes,"enabled").name("enabled"),P.add(t.params.simulation.splashes,"strengthThreshold",.1,10).name("strength threshold");const L=se.addFolder("swimmers");L.close(),L.add(t.params.swimmers,"showSpheres").name("show spheres").listen(),L.add(t.params.swimmers,"useTracking").name("use tracking data").listen();const B=se.addFolder("camera");B.close(),B.add(t.params,"fov",28,45).name("fov").listen().onChange(function(v){t.params.visualizations.sparks.fov=v*2*Math.PI/360,a.matrixMode(a.PROJECTION),a.loadIdentity(),a.perspective(t.params.fov,a.canvas.width/a.canvas.height,.01,100),a.matrixMode(a.MODELVIEW),console.log("perspective : "+t.params.fov)});const y=se.addFolder("quiver");y.close(),y.add(t.params.quiver,"amplitude",.01,1).name("amplitude"),y.add(t.params.quiver,"omega",.5,5).name("omega"),y.add(t.params.quiver,"amplitudeFactor",.5,.9).name("amplitude factor"),y.add(t.params.quiver,"frequencyFactor",1.1,2).name("frequency factor"),y.add(t.params.quiver,"waveLength",1,30).name("wave length");const O=se.addFolder("corner view");O.close(),O.add(t.params.cornerView,"show").name("show");const k=se.addFolder("chrono-photography");k.close(),k.add(t.params.chronoPhotography,"available").name("available").onChange(()=>{t.params.chronoPhotography.available?t.drawingFrameBuffer=t.chronoFrameBuffer:t.drawingFrameBuffer=null}),t._gui=se},Ae=150,ce=100;function Ht(a){const i=document.createElement("div");if(document.body.appendChild(i),i.id="event-editor",i.style.position="fixed",i.display="block",i.style.bottom="60px",i.style.left="10px",i.style.right="10px",i.style.height="120px",i.style.zIndex="4",i.style.background="#222",i.style.color="#fff",i.style.overflow="auto",i.style.padding="4px",i.style.fontSize="12px",i.style.position=i.style.position||"relative",!i){console.warn(`event editor container "${a}" not found`);return}let n,l=!1;const m=[{name:"showFlags",type:"boolean"},{name:"showWR",type:"boolean"},{name:"showSpeed",type:"boolean"},{name:"showDivingDistance",type:"boolean"},{name:"showFinishTimes",type:"boolean"},{name:"showSwimmersLines",type:"select",options:t.params.visualizations.swimmersLinesList},{name:"swimmersLinesMode",type:"select",options:t.params.visualizations.swimmersLinesModeList},{name:"customWaterPerturbation",type:"select",options:t.params.visualizations.customParametersList},{name:"waterColorParameter",type:"select",options:t.params.visualizations.customParametersList},{name:"medalsModeBeforeFinish",type:"select",options:["none","stars","bright","lanes"]},{name:"medalsModeAfterFinish",type:"select",options:["none","stars","bright","lanes"]},{name:"rankSwimmerToggle",type:"number",min:1,max:10},{name:"showStreaks",type:"boolean"}];function f(v){const _=document.createElement("div");_.style.flex="1",_.style.padding="4px",_.style.background="#222",_.style.border="1px solid #555",_.style.borderRadius="4px",_.style.fontFamily="monospace",_.style.fontSize="12px",_.style.whiteSpace="pre-wrap",_.style.overflow="auto",_.style.maxHeight="100px";function C(){const N=v.params;if(Object.keys(N).length===0){_.textContent="(no params)";return}const W=Object.entries(N).map(([U,M])=>`${U}: ${JSON.stringify(M)}`);_.textContent=W.join(`
`)}return C(),{element:_,update:C}}function x(v,_){const C=document.createElement("div");C.style.display="flex",C.style.flexWrap="wrap",C.style.margin="4px 0",C.style.background="#333",C.style.padding="4px";function N(){_&&(_(),k())}m.forEach(D=>{const Z=document.createElement("div");Z.style.marginRight="8px",Z.style.marginBottom="4px";const te=document.createElement("label");te.style.whiteSpace="nowrap",te.textContent=D.name+":",Z.appendChild(te);let I;if(D.type==="boolean"){I=document.createElement("select"),[{value:"",label:"—"},{value:"true",label:"ON"},{value:"false",label:"OFF"}].forEach($=>{const T=document.createElement("option");T.value=$.value,T.textContent=$.label,I.appendChild(T)});const j=v.params[D.name];j===void 0?I.value="":j===!0?I.value="true":j===!1&&(I.value="false"),I.addEventListener("change",()=>{I.value===""?delete v.params[D.name]:I.value==="true"?v.params[D.name]=!0:I.value==="false"&&(v.params[D.name]=!1),N()})}else if(D.type==="select"){I=document.createElement("select");const H=document.createElement("option");H.value="",H.textContent="—",I.appendChild(H),D.options.forEach(j=>{const $=document.createElement("option");$.value=j,$.textContent=j,I.appendChild($)}),I.value=v.params[D.name]||"",I.addEventListener("change",()=>{I.value===""?delete v.params[D.name]:v.params[D.name]=I.value,N()})}else D.type==="number"&&(I=document.createElement("input"),I.type="number",D.min!==void 0&&(I.min=D.min),D.max!==void 0&&(I.max=D.max),I.placeholder="—",I.style.width="50px",I.value=v.params[D.name]!==void 0?v.params[D.name]:"",I.addEventListener("change",()=>{if(I.value==="")delete v.params[D.name];else{const H=parseFloat(I.value);isNaN(H)||(v.params[D.name]=H)}N()}));I&&Z.appendChild(I),C.appendChild(Z)});const W=document.createElement("div");W.style.marginRight="8px",W.style.marginBottom="4px";const U=document.createElement("label");U.style.whiteSpace="nowrap",U.textContent="transition :",W.appendChild(U);const M=document.createElement("input");return M.type="number",M.min=0,M.placeholder="—",M.style.width="50px",M.value=v.transition!==void 0?v.transition.duration:"",M.addEventListener("change",()=>{if(M.value===""){delete v.transition;return}const D=parseFloat(M.value);isNaN(D)||(v.transition={type:"dissolve",duration:D},N())}),W.appendChild(M),C.appendChild(W),C}function S(){const v=document.createElement("div");v.style.marginTop="8px",v.style.padding="8px",v.style.background="#555",v.style.border="1px solid #777";const _=document.createElement("div");_.textContent="Add New Event",_.style.fontWeight="bold",_.style.marginBottom="4px",v.appendChild(_);const C=document.createElement("input");C.type="number",C.placeholder="Distance",C.style.width="auto",C.style.marginRight="8px",v.appendChild(C);const N={params:{}},W=x(N,null);W.style.margin="4px 0",v.appendChild(W);const U=document.createElement("button");U.textContent="OK",U.addEventListener("click",()=>{const D=parseFloat(C.value);if(isNaN(D)){alert("Please enter a valid distance");return}const Z={distance:D,...N};t.events.push(Z),k(),n.remove(),n=null}),v.appendChild(U);const M=document.createElement("button");return M.textContent="cancel",M.addEventListener("click",()=>{n.remove(),n=null}),v.appendChild(M),v}function P(v,_,{title:C="",id:N=null,color:W="#e74c3c"}){const U=v/_*100,M=document.createElement("div");return M.style.position="absolute",M.style.left=U+"%",M.style.transform="translateX(-50%)",M.style.width="4px",M.style.height="100%",M.style.background=W,M.style.cursor="pointer",M.title=C,N&&(M.id=N),M.addEventListener("click",()=>{O(idx)}),M}function L(){let v=document.getElementById("distance-marker");const _=t.swimmers[0].getDistanceTraveled();if(!v){if(l)return;const C=document.getElementById("timeline-track");v=P(_,ce,{color:"blue",id:"distance-marker"}),C.appendChild(v)}v.style.left=_+"%"}function B(v){l=v,y()}function y(){i.innerHTML="";const v=document.createElement("button");if(v.textContent=l?"□":"—",v.style.position="absolute",v.style.top="0",v.style.right="0",v.style.width="20px",v.style.height="20px",v.style.zIndex="100001",v.addEventListener("click",()=>{l=!l,y()}),i.appendChild(v),l){i.style.height="20px";return}i.style.height="300px";const _=document.createElement("div");if(_.style.position="relative",_.style.top="0px",_.style.left="50%",_.style.transform="translateX(-50%)",_.style.width="80px",_.style.height="15px",_.style.background="grey",_.style.border="1px solid black",_.style.cursor="ns-resize",_.style.zIndex="100000",_.style.lineHeight="16px",_.style.textAlign="center",_.textContent="drag",i.appendChild(_),_.addEventListener("mousedown",r=>{r.preventDefault();const c=r.clientY,d=i.offsetHeight;function h(E){const w=d-(E.clientY-c);w>20&&(i.style.height=w+"px")}function u(){document.removeEventListener("mousemove",h),document.removeEventListener("mouseup",u)}document.addEventListener("mousemove",h),document.addEventListener("mouseup",u)}),!t.events){i.textContent="no events defined";return}const C=document.createElement("div");i.appendChild(C),C.style.marginRight="8px",C.style.marginBottom="4px";const N=document.createElement("label");N.style.whiteSpace="nowrap",N.textContent="select scene",N.style.margin="30px",C.appendChild(N);const W=document.createElement("select");W.style.width="auto",t.scenesList.forEach(r=>{const c=document.createElement("option");c.textContent=r.title,c.value=r.title,W.appendChild(c)}),W.addEventListener("change",()=>{t.setScene(W.value)}),C.appendChild(W);const U=t.events.slice().sort((r,c)=>{const d=r.distance!==void 0?r.distance:r.time!==void 0?r.time:0,h=c.distance!==void 0?c.distance:c.time!==void 0?c.time:0;return d-h}),M=new Set;U.forEach(r=>{r.params&&Object.keys(r.params).forEach(c=>M.add(c))});let D=m.map(r=>r.name).filter(r=>M.has(r));const Z=["#4caf50","#2196f3","#ff9800","#9c27b0","#f44336","#009688","#e91e63","#3f51b5"],te={};D.forEach((r,c)=>{te[r]=Z[c%Z.length]});const I={},H={};D.forEach(r=>{H[r]=!1,I[r]=0});const j=[];if(U.forEach(r=>{const c=r.distance!==void 0?r.distance:r.time!==void 0?r.time:0;r.params&&Object.keys(r.params).forEach(d=>{if(D.includes(d)){const h=!!r.params[d];h!==H[d]&&(H[d]&&j.push({name:d,start:I[d],end:c}),H[d]=h,I[d]=c)}})}),D.forEach(r=>{H[r]&&j.push({name:r,start:I[r],end:ce})}),D.length>0){const r=document.createElement("div");r.style.position="relative";const c=20;r.style.height=D.length*c+"px",r.style.background="#222",r.style.marginBottom="4px",r.style.marginTop="10px",D.forEach((h,u)=>{const E=document.createElement("div");E.textContent=h,E.style.position="absolute",E.style.left="0",E.style.top=u*c+2+"px",E.style.width=Ae+"px",E.style.color="#aaa",E.style.fontSize="10px",E.style.pointerEvents="none",r.appendChild(E)});const d=document.createElement("div");d.style.position="absolute",d.style.left=Ae+"px",d.style.top="0",d.style.right="0",d.style.bottom="0",d.style.overflow="hidden",r.appendChild(d),j.forEach(h=>{const u=document.createElement("div"),E=h.start/ce*100,w=(h.end-h.start)/ce*100;u.style.position="absolute",u.style.left=E+"%",u.style.top=D.indexOf(h.name)*c+2+"px",u.style.height=c-4+"px",u.style.width=w+"%",u.style.background=te[h.name]||"#4caf50",u.title=`${h.name}: ${h.start.toFixed(2)} → ${h.end.toFixed(2)}`;const g=document.createElement("span");if(g.textContent=`${h.name}: ${h.start.toFixed(2)} → ${h.end.toFixed(2)}`,g.style.position="absolute",g.style.top="0",g.style.left="2px",g.style.fontSize="10px",g.style.color="white",g.style.pointerEvents="none",g.style.whiteSpace="nowrap",g.style.overflow="hidden",g.style.textOverflow="ellipsis",u.appendChild(g),h.end<ce){const b=document.createElement("div");b.style.position="absolute",b.style.right="0",b.style.top="0",b.style.width="5px",b.style.height="100%",b.style.background="rgba(255,255,255,0.5)",b.style.cursor="ew-resize",u.appendChild(b),b.addEventListener("mousedown",A=>{A.preventDefault(),A.stopPropagation();const z=A.clientX,F=u.offsetWidth;function X(Q){const re=Q.clientX-z,le=Math.max(1,F+re),fe=le/d.offsetWidth*100;u.style.width=fe+"%";const pt=h.start+le/d.offsetWidth*ce;g.textContent=`${h.name}: ${h.start.toFixed(2)} → ${pt.toFixed(2)}`}function G(){document.removeEventListener("mousemove",X),document.removeEventListener("mouseup",G);const Q=u.offsetWidth,re=h.start+Q/d.offsetWidth*ce,le=U.find(fe=>(fe.distance!==void 0?fe.distance:fe.time!==void 0?fe.time:0)===h.end);le&&(le.distance!==void 0?le.distance=re:le.time!==void 0&&(le.time=re)),k()}document.addEventListener("mousemove",X),document.addEventListener("mouseup",G)})}d.appendChild(u)}),i.appendChild(r)}const $=document.createElement("div");$.style.position="relative",$.style.height="40px",$.style.background="#222",$.style.marginBottom="4px",$.style.paddingLeft="80px";const T=document.createElement("div");T.id="timeline-track",T.style.position="absolute",T.style.background="#444",T.style.left=Ae+"px",T.style.top="0",T.style.right="0",T.style.bottom="0",$.appendChild(T),U.forEach((r,c)=>{const d=r.distance!==void 0?r.distance:r.time!==void 0?r.time:0,h=`event ${c}: ${JSON.stringify(r.params)}`,u=P(d,ce,{title:h});T.appendChild(u)}),i.appendChild($),U.forEach((r,c)=>{const d=document.createElement("div");d.style.display="flex",d.style.flexDirection="column",d.style.marginBottom="4px";const h=document.createElement("div");h.style.display="flex",h.style.alignItems="center";const u=document.createElement("input");u.type="number",u.style.width="60px",u.value=r.distance!==void 0?r.distance:r.time!==void 0?r.time:0,u.addEventListener("change",()=>{const A=parseFloat(u.value);isNaN(A)||(r.distance!==void 0?r.distance=A:r.time=A,k())}),h.appendChild(u);const E=f(r);h.appendChild(E.element);const w=document.createElement("button");w.textContent="⚙",w.style.marginLeft="4px",h.appendChild(w);const g=document.createElement("button");g.textContent="✖",g.style.marginLeft="4px",g.addEventListener("click",()=>{const A=t.events.indexOf(U[c]);A!==-1&&(t.events.splice(A,1),y())}),h.appendChild(g),d.appendChild(h);let b;w.addEventListener("click",()=>{b?(b.remove(),b=null):(b=x(r,E.update),d.appendChild(b))}),i.appendChild(d)});const o=document.createElement("button");o.textContent="+ add event",o.addEventListener("click",()=>{n?(n.remove(),n=null):(n=S(),i.appendChild(n),i.scrollTop=i.scrollHeight)}),i.appendChild(o);const s=document.createElement("button");s.textContent="export JSON",s.style.marginLeft="8px",s.addEventListener("click",()=>{const r=JSON.stringify(t.events,null,2),c=new Blob([r],{type:"application/json"}),d=URL.createObjectURL(c),h=document.createElement("a");h.href=d,h.download="vis-config.json",h.click(),URL.revokeObjectURL(d)}),i.appendChild(s);const e=document.createElement("input");e.type="file",e.accept=".json",e.style.marginLeft="8px",e.addEventListener("change",r=>{const c=r.target.files[0];if(c){const d=new FileReader;d.onload=h=>{try{const u=JSON.parse(h.target.result);t.events=u,k()}catch(u){alert("Invalid JSON: "+u.message)}},d.readAsText(c)}}),i.appendChild(e)}function O(v){const C=i.querySelectorAll("div")[1+v];C&&C.scrollIntoView({behavior:"smooth",block:"center"})}function k(){t.events.sort((v,_)=>{const C=v.distance!==void 0?v.distance:v.time!==void 0?v.time:0,N=_.distance!==void 0?_.distance:_.time!==void 0?_.time:0;return C-N}),y()}y(),t._renderTimeline=y,t._updateDistanceMarker=L,t._setPannelMinimized=B}const dt=new p.Mesh.plane({width:2,height:2,coords:!0,normals:!0}),qt=new p.Shader(`
    out highp vec2 pos;
    out highp vec2 vTextureCoord;


    void main(void) {
        gl_Position = vec4(gl_Vertex.xy, 0., 1.);
        pos = gl_Vertex.xy;

        vTextureCoord = gl_TexCoord.st;
    }
`,`
    in highp vec2 pos;
    in highp vec2 vTextureCoord;
    uniform float distanceFixed;
    uniform vec3 poolSize;
    uniform vec3 clearColor;
    uniform sampler2D screen;
    uniform sampler2D videoTex;
    uniform sampler2D oldPicture;
    uniform vec2 linep1;
    uniform vec2 linep2;
    uniform vec2 center;
    uniform float circleZone;
    out vec4 fragColor;




    bool isInFixedPart(vec2 p) {
        if (circleZone > .1) {
            float deltaY = .3;
            p.y -= 2.*deltaY;
            vec3 waterColor1 = vec3(.39, .98, .9);
            vec3 waterColor2 = vec3(.08, .57, .59);
            vec3 skinColor1 = vec3(1., 1., .9);
            vec3 skinColor2 = vec3(.39, .3, .2);
            vec3 color = texture(videoTex, vTextureCoord - vec2(0., deltaY)).rgb;
            vec2 diff = p - center;
            diff.x *= 2.;
            float d1 = length(color - waterColor1);
            float d2 = length(color - waterColor2);
            float d3 = length(color - skinColor1);
            float d4 = length(color - skinColor2);
            // bool isSkin = d3 < d2 && d3 < d1 || d4 < d2 && d4 < d1 || d3 + d4 < d1 + d2;
            bool isSkin = color.r > color.b * 0.9;
            // isSkin = !(d1 < .4 || d2 < .4);
            return dot(diff, diff) <= .01;
            return dot(diff, diff) <= .02 && isSkin;
        }
        // vec4 P1 = vec4(poolSize.x/2., 0., distanceFixed - poolSize.z / 2., 1.);
        // vec4 P2 = vec4(-poolSize.x/2., 0., distanceFixed - poolSize.z / 2., 1.);
        // vec4 P1 = vec4(12.5, 0., distanceFixed - 12.52, 1.);
        // vec4 P2 = vec4(-12.5, 0., distanceFixed - 12.52, 1.);
        // vec2 p1 = (gl_ModelViewMatrix * P1).xy;
        // vec2 p2 = (gl_ModelViewMatrix * P2).xy;
        vec2 p1 = linep1;
        vec2 p2 = linep2;
        // p1 = vec2(-.4, -.8);
        // p2 = vec2(.2, .5);
        // p1 = vec2(-1., 0.);
        // p2 = vec2(1., 0.);
        vec2 d = p2 - p1;
        vec2 n = vec2(-d.y, d.x);
        // return dot(vec2(0.5, .5)-p1, n) <= 0.;
        return dot(p-p1, n) <= 0.;
    }

    bool isInPinPointLine(vec2 p) {
        vec2 diff = p - center;
        return abs(diff.x) <= .005 && diff.y >= 0. && diff.y <= 2.*.3;
    }

    void main() {
        vec4 oldPix = texture(oldPicture, vTextureCoord);
        if (oldPix.rgb != vec3(0)) {
            fragColor = oldPix;
            if (circleZone == 0.) return;
        }
        if (circleZone > .1 && isInPinPointLine(vTextureCoord*2.-1.)) fragColor = vec4(1.);
        if (isInFixedPart(vTextureCoord*2.-1.)) {
            if(circleZone > .01) fragColor = texture(videoTex, vTextureCoord - vec2(0., 0.3));
            else fragColor = texture(screen, vTextureCoord);
        }
        // if(circleZone && isInFixedPart(vTextureCoord*2.-1.)) fragColor = texture(videoTex, vTextureCoord);
        // if(isInFixedPart(vTextureCoord*2.-1.)) fragColor = vec4(1., 0., 0., 1.);
        // if(isInFixedPart(vTextureCoord*2.-1.)) texture(screen, vTextureCoord);
        // if(isInFixedPart(pos)) fragColor = texture(screen, vTextureCoord);
        // else fragColor = vec4(0., 0., 0., 0.);
    }
`),Yt=new p.Shader(`
    out highp vec2 pos;
    out highp vec2 vTextureCoord;


    void main(void) {
        gl_Position = vec4(gl_Vertex.xy, 0., 1.);
        pos = gl_Vertex.xz;

        vTextureCoord = gl_TexCoord.st;
    }
`,`
    in highp vec2 pos;
    in highp vec2 vTextureCoord;

    uniform vec3 poolSize;
    uniform sampler2D picture;
    uniform sampler2D screen;

    out vec4 fragColor;


    void main() {
        vec2 coord = (pos + 1.) / 2.;
        // vec4 pix = texture(screen, coord);
        vec4 pix = texture(screen, vTextureCoord);
        vec4 pixPicture = texture(picture, vTextureCoord);
        fragColor = pix;
        if(pixPicture.rgb != vec3(0)) fragColor = pixPicture;
        
    }
`);let Ee=new p.Texture,ke=new p.Texture,ht=!1,Ye=null;const mt=(a,i,n)=>{ht=!0,Ee=new p.Texture(a,i,{type:n.FLOAT,filter:n.NEAREST}),ke=new p.Texture(a,i,{type:n.FLOAT,filter:n.NEAREST}),Ye=n.createFramebuffer(),n.bindFramebuffer(n.FRAMEBUFFER,Ye);const l=n.COLOR_ATTACHMENT0;n.framebufferTexture2D(n.FRAMEBUFFER,l,n.TEXTURE_2D,Ee.id,0),n.bindFramebuffer(n.FRAMEBUFFER,null)};function Fe(a){a.x/=t.gl.canvas.width/2,a.x-=1,a.y/=t.gl.canvas.height/2,a.y-=1}const ut=a=>{console.log("take chrono photo : "+a),ht||mt(t.gl.canvas.width,t.gl.canvas.height,t.gl);const i=t.params.simulation.poolSize,n=t.gl.project(i.x/2,0,t.distanceFixed+1-i.z/2),l=t.gl.project(-i.x/2,0,t.distanceFixed+1-i.z/2);Fe(n),Fe(l);const m=t.swimmers[0].body.center,f=t.gl.project(m.x,m.y,m.z);Fe(f),ke.drawTo(()=>{Ee.bind(0),t.gl.activeTexture(t.gl.TEXTURE1),t.gl.bindTexture(t.gl.TEXTURE_2D,t.drawingTexture),t.gl.activeTexture(t.gl.TEXTURE2),t.gl.bindTexture(t.gl.TEXTURE_2D,t.currentVideo.texture),qt.uniforms({oldPicture:0,screen:1,videoTex:2,distanceFixed:t.distanceFixed,poolSize:[t.params.simulation.poolSize.x,t.params.simulation.poolSize.y,t.params.simulation.poolSize.z],linep1:[n.x,n.y],linep2:[l.x,l.y],center:[f.x,f.y],circleZone:a}).draw(dt)}),Ee.swapWith(ke),t.gl.bindFramebuffer(t.gl.FRAMEBUFFER,t.drawingFrameBuffer)},jt=()=>{t.chronoPhotoCircleTime&&t.time>=t.chronoPhotoCircleTime&&(t.chronoPhotoCircleTime=null,ut(!0)),t.gl.bindFramebuffer(t.gl.FRAMEBUFFER,null),Ee.bind(7),t.gl.activeTexture(t.gl.TEXTURE8),t.gl.bindTexture(t.gl.TEXTURE_2D,t.drawingTexture),Yt.uniforms({picture:7,screen:8}).draw(dt)};t._fixTexture=ut;t._clearChronoTexture=mt;new TextEncoder;function Kt(a){return a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n/g,"<br>")}function Zt(a){var i=Kt(a);i=="WebGL not supported"&&(i='Your browser does not support WebGL.<br>Please see    <a href="http://www.khronos.org/webgl/wiki/Getting_a_WebGL_Implementation">    Getting a WebGL Implementation</a>.');var n=document.getElementById("loading");n.innerHTML=i,n.style.zIndex=1}window.onerror=Zt;var Pe,J;const $t=10,R=t.gl;var _e,Ne;V.initAttributes();function ft(){document.getElementById("warning").hidden=!(t.resolution.x*t.resolution.y>3e5&&t.water&&t.params.visualizations.areaConservationEnabled)}let Me=0;function Jt(a){Me+=a,Me>=1&&(document.getElementById("fps").innerText=`${(1/a).toFixed(1)} FPS`,Me=0)}function ue(){console.log("reset"),document.getElementById("resolution").innerText=`Resolution: ${t.resolution.x} x ${t.resolution.y}`,ft(),_e=new p.Vector(0,-t.params.simulation.poolSize.z/2+1),t.water.reset(t.resolution),J.flagCenter=_e,J.flagSize=Ne,J.reset();const a=t.params.simulation.poolSize.x/$t;let i=-t.params.simulation.poolSize.x/2+a/2;for(let n of t.swimmers)n.body.center.x=i,n.body.initCenter=n.body.center.clone(),n.startingPoint.x=i,i+=a}function Qt(a){const i=parseFloat(a.target.value);isNaN(i)||(t.setRaceTime(i),t.swimmers.forEach(n=>n.setCurrentDataIndex()))}window.onload=function(){var a=window.devicePixelRatio||1,i=document.getElementById("help");function n(){var r=innerWidth,c=innerHeight;R.canvas.width=r*a,R.canvas.height=c*a,R.canvas.style.width=r+"px",R.canvas.style.height=c+"px",R.viewport(0,0,R.canvas.width,R.canvas.height),R.matrixMode(R.PROJECTION),R.loadIdentity(),R.perspective(t.params.fov,R.canvas.width/R.canvas.height,.01,100),R.matrixMode(R.MODELVIEW),t.resetDrawingTexture(),e()}document.body.appendChild(R.canvas),R.canvas.oncontextmenu=function(r){r.preventDefault()},R.clearColor(0,0,0,1),_e=new p.Vector(0,-t.params.simulation.poolSize.z/2+1),Ne=.7;const l=document.getElementById("time-slider");l&&l.addEventListener("input",Qt);const m=document.getElementById("drop-zone");let f=0;document.addEventListener("dragenter",r=>{f++,m.style.display="flex"}),document.addEventListener("dragover",r=>{r.preventDefault(),r.dataTransfer.dropEffect="copy"}),document.addEventListener("dragleave",r=>{f--,f===0&&(m.style.display="none")}),Xt(R,ue),t._reset=ue,setTimeout(()=>{Ht("event-editor")},50),J=new de(R,t.water,_e,Ne),Pe=new Oe({xneg:document.getElementById("xneg"),xpos:document.getElementById("xpos"),yneg:document.getElementById("ypos"),ypos:document.getElementById("ypos"),zneg:document.getElementById("zneg"),zpos:document.getElementById("zpos")},R);const x=new V(new p.Vector(0,0,0));if(t.swimmers.push(x),t.water=new ae(t.gl),!t.water.textureA.canDrawTo()||!t.water.textureB.canDrawTo())throw new Error("Rendering to floating-point textures is required but not supported");ue();for(var S=0;S<20;S++)t.water.addDrop(Math.random()*2-1,Math.random()*2-1,.06,S&1?.01:-.01);document.getElementById("loading").innerHTML="",n();var P=window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(r){setTimeout(r,0)},L=new Date().getTime();function B(){var r=new Date().getTime();o((r-L)/1e3),e(),L=r,P(B)}P(B),window.onresize=n;var y,O,k,v=-1,_=0,C=1,N=2;const W=3;var U,M;function D(r,c,d){if(U=r,M=c,!d||d.button===0){var h=new p.Raytracer,u=h.getRayForPixel(r*a,c*a),E=h.eye.add(u.multiply(-h.eye.y/u.y));for(let g of t.swimmers){var w=p.Raytracer.hitTestSphere(h.eye,u,g.body.center,g.body.radius);if(w){v=C,k=g,g.body.cinematic=!0,y=w.hit,O=h.getRayForPixel(R.canvas.width/2,R.canvas.height/2).negative();return}}Math.abs(E.x)<t.params.simulation.poolSize.x/2&&Math.abs(E.z)<t.params.simulation.poolSize.z/2&&(v=_,Z(r,c))}else d.button===2?v=N:d.button===1&&(v=W)}function Z(r,c,d){switch(v){case _:{var h=new p.Raytracer,u=h.getRayForPixel(r*a,c*a),E=h.eye.add(u.multiply(-h.eye.y/u.y));t.water.addDrop(E.x/t.params.simulation.poolSize.x*2,E.z/t.params.simulation.poolSize.z*2,.06,.03),t.paused&&(t.water.updateNormals(),J.updateCaustics(t.water));break}case C:{var h=new p.Raytracer,u=h.getRayForPixel(r*a,c*a),w=-O.dot(h.eye.subtract(y))/O.dot(u),g=h.eye.add(u.multiply(w));const z=k.body.center.add(g.subtract(y)),F=k.body.radius,X=Math.max(F-t.params.simulation.poolSize.x/2,Math.min(t.params.simulation.poolSize.x/2-F,z.x)),G=Math.max(F-t.params.simulation.poolSize.y,Math.min(10,z.y)),Q=Math.max(F-t.params.simulation.poolSize.z/2,Math.min(t.params.simulation.poolSize.z/2-F,z.z));k.body.move(new p.Vector(X,G,Q)),y=g,t.paused&&J.updateCaustics(t.water);break}case N:{if(d&&d.shiftKey){t.angleZ-=r-U,t.angleZ=Math.max(-89.999,Math.min(89.999,t.angleZ));break}t.angleY-=r-U,t.angleX-=c-M,t.angleX=Math.max(-89.999,Math.min(89.999,t.angleX));break}case W:{const b=.001*t.zoomDistance;t.translateX+=b*(r-U),t.translateY-=b*(c-M)}}U=r,M=c,t.paused&&e()}function te(){v=-1,k&&(k.body.cinematic=!V.useGravity)}function I(r){return r===i||r.parentNode&&I(r.parentNode)}function H(r){return r&&(r.id==="event-editor"||r.parentNode&&H(r.parentNode))}function j(r){t.zoomDistance*=1-r*2e-4,t.zoomDistance=Math.max(2,Math.min(1e3,t.zoomDistance)),t.paused&&e()}addEventListener("wheel",function(r){if(!H(r.target)){var c=r.deltaY;j(-c)}}),document.onmousedown=function(r){R.canvas.focus(),I(r.target)||D(r.pageX,r.pageY,r)},document.onmousemove=function(r){Z(r.pageX,r.pageY,r)},document.onmouseup=function(){te()},document.ontouchstart=function(r){r.touches.length===1&&!I(r.target)&&(r.preventDefault(),D(r.touches[0].pageX,r.touches[0].pageY,!1))},document.ontouchmove=function(r){r.touches.length===1&&Z(r.touches[0].pageX,r.touches[0].pageY)},document.ontouchend=function(r){r.touches.length==0&&te()};function $(){t.paused?t.play():t.pause()}const T=async function(r){if(r.which==32)$();else if(r.which==71)t.useGravity(!V.useGravity);else if(r.which==76&&t.paused)e();else if(r.which==74)t.swimmers.forEach(c=>c.jump(2));else if(r.which==67)t.params.visualizations.areaConservationEnabled=!t.params.visualizations.areaConservationEnabled,ft(),console.log("Area conservation "+(t.params.visualizations.areaConservationEnabled?"enabled.":"disabled."));else if(r.which==80)t.water.showProjectionGrid=!t.water.showProjectionGrid,console.log("Projection grid "+(t.water.showProjectionGrid?"enabled.":"disabled."));else if(r.which==65)t.water.showAreaConservedGrid=!t.water.showAreaConservedGrid,console.log("Area conserved grid "+(t.water.showAreaConservedGrid?"enabled.":"disabled."));else if(r.which==83){if(V.swimming=!V.swimming,V.swimming)for(let c of t.swimmers)c.swim(!0);else stopRace();console.log("Swimming "+(V.swimming?"enabled.":"disabled."))}else r.which==86?t.params.video.show=!t.params.video.show:r.which==72?(document.getElementById("commands").hidden=!document.getElementById("commands").hidden,document.getElementById("h").hidden=!document.getElementById("h").hidden):r.which==68?t.playingDemo?t.stopDemo():await t.launchDemo():r.which==81?t.chronoPhotography({}):r.which==82?(t.setScene("100m freestyle").then(()=>t.startRace()),t._setPannelMinimized(!0)):r.which==77?t.setMVPMI():r.which==75?t.recalibrate():r.which==40?(t.resolution.x>129&&(t.resolution.x=Math.round(t.resolution.x/2)),ue(),console.log("decreasing x resolution")):r.which==38?(t.resolution.x<16384&&(t.resolution.x=Math.round(t.resolution.x*2)),ue(),console.log("increasing x resolution")):r.which==37?(t.resolution.y>129&&(t.resolution.y=Math.round(t.resolution.y/2)),ue(),console.log("decreasing y resolution")):r.which==39&&(t.resolution.y<16384&&(t.resolution.y=Math.round(t.resolution.y*2)),ue(),console.log("increasing y resolution"))};R.canvas.addEventListener("keydown",T);function o(r){if(t.updateDemo(r),!t.paused&&!(r>1)){if(v==C)for(let c of t.swimmers)c.body.velocity=new p.Vector(0,0,0);R.clearColor(0,0,0,1),R.bindFramebuffer(R.FRAMEBUFFER,null),R.clear(R.COLOR_BUFFER_BIT|R.DEPTH_BUFFER_BIT);for(let c of t.swimmers)c.update(r);t.updateFloaters(r),t.classicalOverlayEnabled||t.water.updateSpheres(r);for(let c=0;c<t.params.numSteps;c++)t.classicalOverlayEnabled||t.water.stepSimulation(r);J.updateCaustics(t.water),t.updateTime(r),t.updateParams(),l.value=t.getRaceTime(),Jt(r),t.splashParticles.update(r),t.bubbleSpheres.forEach(c=>c.update(r))}}function s(){if(!V.raceHasStarted||!t.params.cornerView.show||t.classicalOverlayEnabled)return;t.cornerView=!0,R.loadIdentity(),R.translate(0,0,-35),R.rotate(90,1,0,0),R.rotate(-90,0,1,0),R.translate(0,.5,0);const r=R.canvas.height/4,c=16*r/9,d=0,h=R.canvas.height-r;R.viewport(d,h,c,r),J.renderWater(t.water,Pe,t.params.visualizations.shadow),t.isSceneSynchronizedSwimming()&&(t.params.visualizations.showStreaks||t.params.simulation.splashes.enabled)&&t.splashParticles.draw({}),J.renderSpheres(t.water),R.viewport(0,0,R.canvas.width,R.canvas.height),R.loadIdentity(),R.translate(t.translateX,t.translateY,-t.zoomDistance),R.rotate(-t.angleZ,0,0,1),R.rotate(-t.angleX,1,0,0),R.rotate(-t.angleY,0,1,0),R.translate(0,.5,0),t.cornerView=!1}function e(){p.keys.L&&(J.lightDir=p.Vector.fromAngles((90-t.angleY)*Math.PI/180,-t.angleX*Math.PI/180),t.paused&&J.updateCaustics(t.water)),V.updateAttributesTexture(),t.water.addOrRemoveVisualizationWaves(!0),t.water.updateNormals(),R.clearColor(.1,.2,.5,1),R.clearColor(.94/1.5,.92/1.5,.84/1.5,1),R.bindFramebuffer(R.FRAMEBUFFER,t.drawingFrameBuffer),R.clear(R.COLOR_BUFFER_BIT|R.DEPTH_BUFFER_BIT),R.loadIdentity(),R.translate(t.translateX,t.translateY,-t.zoomDistance),R.rotate(-t.angleZ,0,0,1),R.rotate(-t.angleX,1,0,0),R.rotate(-t.angleY,0,1,0),R.translate(0,.5,0),R.enable(R.DEPTH_TEST),R.disable(R.BLEND),R.viewport(0,0,R.canvas.width,R.canvas.height),J.sphereCenter=t.swimmers[0].body.center,J.sphereRadius=t.swimmers[0].body.radius,J.renderCube(t.water),J.renderWater(t.water,Pe,t.params.visualizations.shadow),J.renderSpheres(t.water),R.disable(R.DEPTH_TEST);const r={};!t.classicalOverlayEnabled&&(t.params.visualizations.showStreaks||t.params.simulation.splashes.enabled)&&t.splashParticles.draw(r),t.renderVideo(),t.drawingFrameBuffer!==null&&jt(),s(),t.water.addOrRemoveVisualizationWaves(!1)}};
//# sourceMappingURL=swimming-DuxZ-4hy.js.map
