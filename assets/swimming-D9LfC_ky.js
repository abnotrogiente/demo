var qe=Object.defineProperty;var Ie=i=>{throw TypeError(i)};var Ye=(i,a,l)=>a in i?qe(i,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):i[a]=l;var Y=(i,a,l)=>Ye(i,typeof a!="symbol"?a+"":a,l),je=(i,a,l)=>a.has(i)||Ie("Cannot "+l);var Le=(i,a,l)=>a.has(i)?Ie("Cannot add the same private member more than once"):a instanceof WeakSet?a.add(i):a.set(i,l);var J=(i,a,l)=>(je(i,a,"access private method"),l);import"./modulepreload-polyfill-B5Qt9EMX.js";import{g as Ke}from"./lil-gui.module.min-Vka56b52.js";var g=function(){var i,a={create:function(t){t=t||{};var r=document.createElement("canvas");r.width=800,r.height=600,"alpha"in t||(t.alpha=!1);try{i=r.getContext("webgl2",t)}catch{}try{i=i||r.getContext("experimental-webgl",t)}catch{}if(!i)throw new Error("WebGL not supported");return i.HALF_FLOAT_OES=36193,l(),u(),_(),B(),i},keys:{},Matrix:w,Indexer:X,Buffer:H,Mesh:N,HitTest:O,Raytracer:ee,Shader:fe,Texture:V,Vector:p};function l(){i.MODELVIEW=k|1,i.PROJECTION=k|2;var t=new w,r=new w;i.modelviewMatrix=new w,i.projectionMatrix=new w;var e=[],o=[],n,s;i.matrixMode=function(d){switch(d){case i.MODELVIEW:n="modelviewMatrix",s=e;break;case i.PROJECTION:n="projectionMatrix",s=o;break;default:throw new Error("invalid matrix mode "+d)}},i.loadIdentity=function(){w.identity(i[n])},i.loadMatrix=function(d){for(var f=d.m,v=i[n].m,m=0;m<16;m++)v[m]=f[m]},i.multMatrix=function(d){i.loadMatrix(w.multiply(i[n],d,r))},i.perspective=function(d,f,v,m){i.multMatrix(w.perspective(d,f,v,m,t))},i.frustum=function(d,f,v,m,h,x){i.multMatrix(w.frustum(d,f,v,m,h,x,t))},i.ortho=function(d,f,v,m,h,x){i.multMatrix(w.ortho(d,f,v,m,h,x,t))},i.scale=function(d,f,v){i.multMatrix(w.scale(d,f,v,t))},i.translate=function(d,f,v){i.multMatrix(w.translate(d,f,v,t))},i.rotate=function(d,f,v,m){i.multMatrix(w.rotate(d,f,v,m,t))},i.lookAt=function(d,f,v,m,h,x,b,E,R){i.multMatrix(w.lookAt(d,f,v,m,h,x,b,E,R,t))},i.pushMatrix=function(){s.push(Array.prototype.slice.call(i[n].m))},i.popMatrix=function(){var d=s.pop();i[n].m=M?new Float32Array(d):d},i.project=function(d,f,v,m,h,x){m=m||i.modelviewMatrix,h=h||i.projectionMatrix,x=x||i.getParameter(i.VIEWPORT);var b=h.transformPoint(m.transformPoint(new p(d,f,v)));return new p(x[0]+x[2]*(b.x*.5+.5),x[1]+x[3]*(b.y*.5+.5),b.z*.5+.5)},i.unProject=function(d,f,v,m,h,x){m=m||i.modelviewMatrix,h=h||i.projectionMatrix,x=x||i.getParameter(i.VIEWPORT);var b=new p((d-x[0])/x[2]*2-1,(f-x[1])/x[3]*2-1,v*2-1);return w.inverse(w.multiply(h,m,t),r).transformPoint(b)},i.matrixMode(i.MODELVIEW)}function u(){var t={mesh:new N({coords:!0,colors:!0,triangles:!1}),mode:-1,coord:[0,0,0,0],color:[1,1,1,1],shader:new fe("      uniform float pointSize;      out vec4 color;      out vec4 coord;      void main() {        color = gl_Color;        coord = gl_TexCoord;        gl_Position = gl_ModelViewProjectionMatrix * gl_Vertex;        gl_PointSize = pointSize;      }    ","      uniform sampler2D tex;      uniform float pointSize;      uniform bool useTexture;      in vec4 color;      in vec4 coord;      out vec4 fragColor;      void main() {        fragColor = color;        if (useTexture) fragColor *= texture(tex, coord.xy);      }    ")};i.pointSize=function(r){t.shader.uniforms({pointSize:r})},i.begin=function(r){if(t.mode!=-1)throw new Error("mismatched gl.begin() and gl.end() calls");t.mode=r,t.mesh.colors=[],t.mesh.coords=[],t.mesh.vertices=[]},i.color=function(r,e,o,n){t.color=arguments.length==1?r.toArray().concat(1):[r,e,o,n||1]},i.texCoord=function(r,e){t.coord=arguments.length==1?r.toArray(2):[r,e]},i.vertex=function(r,e,o){t.mesh.colors.push(t.color),t.mesh.coords.push(t.coord),t.mesh.vertices.push(arguments.length==1?r.toArray():[r,e,o])},i.end=function(){if(t.mode==-1)throw new Error("mismatched gl.begin() and gl.end() calls");t.mesh.compile(),t.shader.uniforms({useTexture:!!i.getParameter(i.TEXTURE_BINDING_2D)}).draw(t.mesh,t.mode),t.mode=-1}}function _(){var t=i,r=0,e=0,o={},n=!1,s=Object.prototype.hasOwnProperty;function d(){for(var E in o)if(s.call(o,E)&&o[E])return!0;return!1}function f(E){var R={};for(var C in E)typeof E[C]=="function"?R[C]=function(Z){return function(){Z.apply(E,arguments)}}(E[C]):R[C]=E[C];R.original=E,R.x=R.pageX,R.y=R.pageY;for(var P=i.canvas;P;P=P.offsetParent)R.x-=P.offsetLeft,R.y-=P.offsetTop;return n?(R.deltaX=R.x-r,R.deltaY=R.y-e):(R.deltaX=0,R.deltaY=0,n=!0),r=R.x,e=R.y,R.dragging=d(),R.preventDefault=function(){R.original.preventDefault()},R.stopPropagation=function(){R.original.stopPropagation()},R}function v(E){i=t,d()||(T(document,"mousemove",m),T(document,"mouseup",h),F(i.canvas,"mousemove",m),F(i.canvas,"mouseup",h)),o[E.which]=!0,E=f(E),i.onmousedown&&i.onmousedown(E),E.preventDefault()}function m(E){i=t,E=f(E),i.onmousemove&&i.onmousemove(E),E.preventDefault()}function h(E){i=t,o[E.which]=!1,d()||(F(document,"mousemove",m),F(document,"mouseup",h),T(i.canvas,"mousemove",m),T(i.canvas,"mouseup",h)),E=f(E),i.onmouseup&&i.onmouseup(E),E.preventDefault()}function x(){n=!1}function b(){o={},n=!1}T(i.canvas,"mousedown",v),T(i.canvas,"mousemove",m),T(i.canvas,"mouseup",h),T(i.canvas,"mouseover",x),T(i.canvas,"mouseout",x),T(document,"contextmenu",b)}function y(t){var r={8:"BACKSPACE",9:"TAB",13:"ENTER",16:"SHIFT",27:"ESCAPE",32:"SPACE",37:"LEFT",38:"UP",39:"RIGHT",40:"DOWN"};return r[t]||(t>=65&&t<=90?String.fromCharCode(t):null)}function T(t,r,e){t.addEventListener(r,e)}function F(t,r,e){t.removeEventListener(r,e)}T(document,"keydown",function(t){if(!t.altKey&&!t.ctrlKey&&!t.metaKey){var r=y(t.keyCode);r&&(a.keys[r]=!0),a.keys[t.keyCode]=!0}}),T(document,"keyup",function(t){if(!t.altKey&&!t.ctrlKey&&!t.metaKey){var r=y(t.keyCode);r&&(a.keys[r]=!1),a.keys[t.keyCode]=!1}});function B(){(function(t){i.makeCurrent=function(){i=t}})(i),i.animate=function(){var t=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(n){setTimeout(n,16.666666666666668)},r=new Date().getTime(),e=i;function o(){i=e;var n=new Date().getTime();i.onupdate&&i.onupdate((n-r)/1e3),i.ondraw&&i.ondraw(),t(o),r=n}o()},i.fullscreen=function(t){t=t||{};var r=t.paddingTop||0,e=t.paddingLeft||0,o=t.paddingRight||0,n=t.paddingBottom||0;if(!document.body)throw new Error("document.body doesn't exist yet (call gl.fullscreen() from window.onload() or from inside the <body> tag)");document.body.appendChild(i.canvas),document.body.style.overflow="hidden",i.canvas.style.position="absolute",i.canvas.style.left=e+"px",i.canvas.style.top=r+"px";function s(){i.canvas.width=window.innerWidth-e-o,i.canvas.height=window.innerHeight-r-n,i.viewport(0,0,i.canvas.width,i.canvas.height),(t.camera||!("camera"in t))&&(i.matrixMode(i.PROJECTION),i.loadIdentity(),i.perspective(t.fov||45,i.canvas.width/i.canvas.height,t.near||.1,t.far||1e3),i.matrixMode(i.MODELVIEW)),i.ondraw&&i.ondraw()}T(window,"resize",s),s()}}var k=305397760,M=typeof Float32Array<"u";function w(){var t=Array.prototype.concat.apply([],arguments);t.length||(t=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),this.m=M?new Float32Array(t):t}w.prototype={inverse:function(){return w.inverse(this,new w)},transpose:function(){return w.transpose(this,new w)},multiply:function(t){return w.multiply(this,t,new w)},transformPoint:function(t){var r=this.m;return new p(r[0]*t.x+r[1]*t.y+r[2]*t.z+r[3],r[4]*t.x+r[5]*t.y+r[6]*t.z+r[7],r[8]*t.x+r[9]*t.y+r[10]*t.z+r[11]).divide(r[12]*t.x+r[13]*t.y+r[14]*t.z+r[15])},transformVector:function(t){var r=this.m;return new p(r[0]*t.x+r[1]*t.y+r[2]*t.z,r[4]*t.x+r[5]*t.y+r[6]*t.z,r[8]*t.x+r[9]*t.y+r[10]*t.z)}},w.inverse=function(t,r){r=r||new w;var e=t.m,o=r.m;o[0]=e[5]*e[10]*e[15]-e[5]*e[14]*e[11]-e[6]*e[9]*e[15]+e[6]*e[13]*e[11]+e[7]*e[9]*e[14]-e[7]*e[13]*e[10],o[1]=-e[1]*e[10]*e[15]+e[1]*e[14]*e[11]+e[2]*e[9]*e[15]-e[2]*e[13]*e[11]-e[3]*e[9]*e[14]+e[3]*e[13]*e[10],o[2]=e[1]*e[6]*e[15]-e[1]*e[14]*e[7]-e[2]*e[5]*e[15]+e[2]*e[13]*e[7]+e[3]*e[5]*e[14]-e[3]*e[13]*e[6],o[3]=-e[1]*e[6]*e[11]+e[1]*e[10]*e[7]+e[2]*e[5]*e[11]-e[2]*e[9]*e[7]-e[3]*e[5]*e[10]+e[3]*e[9]*e[6],o[4]=-e[4]*e[10]*e[15]+e[4]*e[14]*e[11]+e[6]*e[8]*e[15]-e[6]*e[12]*e[11]-e[7]*e[8]*e[14]+e[7]*e[12]*e[10],o[5]=e[0]*e[10]*e[15]-e[0]*e[14]*e[11]-e[2]*e[8]*e[15]+e[2]*e[12]*e[11]+e[3]*e[8]*e[14]-e[3]*e[12]*e[10],o[6]=-e[0]*e[6]*e[15]+e[0]*e[14]*e[7]+e[2]*e[4]*e[15]-e[2]*e[12]*e[7]-e[3]*e[4]*e[14]+e[3]*e[12]*e[6],o[7]=e[0]*e[6]*e[11]-e[0]*e[10]*e[7]-e[2]*e[4]*e[11]+e[2]*e[8]*e[7]+e[3]*e[4]*e[10]-e[3]*e[8]*e[6],o[8]=e[4]*e[9]*e[15]-e[4]*e[13]*e[11]-e[5]*e[8]*e[15]+e[5]*e[12]*e[11]+e[7]*e[8]*e[13]-e[7]*e[12]*e[9],o[9]=-e[0]*e[9]*e[15]+e[0]*e[13]*e[11]+e[1]*e[8]*e[15]-e[1]*e[12]*e[11]-e[3]*e[8]*e[13]+e[3]*e[12]*e[9],o[10]=e[0]*e[5]*e[15]-e[0]*e[13]*e[7]-e[1]*e[4]*e[15]+e[1]*e[12]*e[7]+e[3]*e[4]*e[13]-e[3]*e[12]*e[5],o[11]=-e[0]*e[5]*e[11]+e[0]*e[9]*e[7]+e[1]*e[4]*e[11]-e[1]*e[8]*e[7]-e[3]*e[4]*e[9]+e[3]*e[8]*e[5],o[12]=-e[4]*e[9]*e[14]+e[4]*e[13]*e[10]+e[5]*e[8]*e[14]-e[5]*e[12]*e[10]-e[6]*e[8]*e[13]+e[6]*e[12]*e[9],o[13]=e[0]*e[9]*e[14]-e[0]*e[13]*e[10]-e[1]*e[8]*e[14]+e[1]*e[12]*e[10]+e[2]*e[8]*e[13]-e[2]*e[12]*e[9],o[14]=-e[0]*e[5]*e[14]+e[0]*e[13]*e[6]+e[1]*e[4]*e[14]-e[1]*e[12]*e[6]-e[2]*e[4]*e[13]+e[2]*e[12]*e[5],o[15]=e[0]*e[5]*e[10]-e[0]*e[9]*e[6]-e[1]*e[4]*e[10]+e[1]*e[8]*e[6]+e[2]*e[4]*e[9]-e[2]*e[8]*e[5];for(var n=e[0]*o[0]+e[1]*o[4]+e[2]*o[8]+e[3]*o[12],s=0;s<16;s++)o[s]/=n;return r},w.transpose=function(t,r){r=r||new w;var e=t.m,o=r.m;return o[0]=e[0],o[1]=e[4],o[2]=e[8],o[3]=e[12],o[4]=e[1],o[5]=e[5],o[6]=e[9],o[7]=e[13],o[8]=e[2],o[9]=e[6],o[10]=e[10],o[11]=e[14],o[12]=e[3],o[13]=e[7],o[14]=e[11],o[15]=e[15],r},w.multiply=function(t,r,e){e=e||new w;var o=t.m,n=r.m,s=e.m;return s[0]=o[0]*n[0]+o[1]*n[4]+o[2]*n[8]+o[3]*n[12],s[1]=o[0]*n[1]+o[1]*n[5]+o[2]*n[9]+o[3]*n[13],s[2]=o[0]*n[2]+o[1]*n[6]+o[2]*n[10]+o[3]*n[14],s[3]=o[0]*n[3]+o[1]*n[7]+o[2]*n[11]+o[3]*n[15],s[4]=o[4]*n[0]+o[5]*n[4]+o[6]*n[8]+o[7]*n[12],s[5]=o[4]*n[1]+o[5]*n[5]+o[6]*n[9]+o[7]*n[13],s[6]=o[4]*n[2]+o[5]*n[6]+o[6]*n[10]+o[7]*n[14],s[7]=o[4]*n[3]+o[5]*n[7]+o[6]*n[11]+o[7]*n[15],s[8]=o[8]*n[0]+o[9]*n[4]+o[10]*n[8]+o[11]*n[12],s[9]=o[8]*n[1]+o[9]*n[5]+o[10]*n[9]+o[11]*n[13],s[10]=o[8]*n[2]+o[9]*n[6]+o[10]*n[10]+o[11]*n[14],s[11]=o[8]*n[3]+o[9]*n[7]+o[10]*n[11]+o[11]*n[15],s[12]=o[12]*n[0]+o[13]*n[4]+o[14]*n[8]+o[15]*n[12],s[13]=o[12]*n[1]+o[13]*n[5]+o[14]*n[9]+o[15]*n[13],s[14]=o[12]*n[2]+o[13]*n[6]+o[14]*n[10]+o[15]*n[14],s[15]=o[12]*n[3]+o[13]*n[7]+o[14]*n[11]+o[15]*n[15],e},w.identity=function(t){t=t||new w;var r=t.m;return r[0]=r[5]=r[10]=r[15]=1,r[1]=r[2]=r[3]=r[4]=r[6]=r[7]=r[8]=r[9]=r[11]=r[12]=r[13]=r[14]=0,t},w.perspective=function(t,r,e,o,n){var s=Math.tan(t*Math.PI/360)*e,d=s*r;return w.frustum(-d,d,-s,s,e,o,n)},w.frustum=function(t,r,e,o,n,s,d){d=d||new w;var f=d.m;return f[0]=2*n/(r-t),f[1]=0,f[2]=(r+t)/(r-t),f[3]=0,f[4]=0,f[5]=2*n/(o-e),f[6]=(o+e)/(o-e),f[7]=0,f[8]=0,f[9]=0,f[10]=-(s+n)/(s-n),f[11]=-2*s*n/(s-n),f[12]=0,f[13]=0,f[14]=-1,f[15]=0,d},w.ortho=function(t,r,e,o,n,s,d){d=d||new w;var f=d.m;return f[0]=2/(r-t),f[1]=0,f[2]=0,f[3]=-(r+t)/(r-t),f[4]=0,f[5]=2/(o-e),f[6]=0,f[7]=-(o+e)/(o-e),f[8]=0,f[9]=0,f[10]=-2/(s-n),f[11]=-(s+n)/(s-n),f[12]=0,f[13]=0,f[14]=0,f[15]=1,d},w.scale=function(t,r,e,o){o=o||new w;var n=o.m;return n[0]=t,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=r,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=e,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,o},w.translate=function(t,r,e,o){o=o||new w;var n=o.m;return n[0]=1,n[1]=0,n[2]=0,n[3]=t,n[4]=0,n[5]=1,n[6]=0,n[7]=r,n[8]=0,n[9]=0,n[10]=1,n[11]=e,n[12]=0,n[13]=0,n[14]=0,n[15]=1,o},w.rotate=function(t,r,e,o,n){if(!t||!r&&!e&&!o)return w.identity(n);n=n||new w;var s=n.m,d=Math.sqrt(r*r+e*e+o*o);t*=Math.PI/180,r/=d,e/=d,o/=d;var f=Math.cos(t),v=Math.sin(t),m=1-f;return s[0]=r*r*m+f,s[1]=r*e*m-o*v,s[2]=r*o*m+e*v,s[3]=0,s[4]=e*r*m+o*v,s[5]=e*e*m+f,s[6]=e*o*m-r*v,s[7]=0,s[8]=o*r*m-e*v,s[9]=o*e*m+r*v,s[10]=o*o*m+f,s[11]=0,s[12]=0,s[13]=0,s[14]=0,s[15]=1,n},w.lookAt=function(t,r,e,o,n,s,d,f,v,m){m=m||new w;var h=m.m,x=new p(t,r,e),b=new p(o,n,s),E=new p(d,f,v),R=x.subtract(b).unit(),C=E.cross(R).unit(),P=R.cross(C).unit();return h[0]=C.x,h[1]=C.y,h[2]=C.z,h[3]=-C.dot(x),h[4]=P.x,h[5]=P.y,h[6]=P.z,h[7]=-P.dot(x),h[8]=R.x,h[9]=R.y,h[10]=R.z,h[11]=-R.dot(x),h[12]=0,h[13]=0,h[14]=0,h[15]=1,m};function X(){this.unique=[],this.indices=[],this.map={}}X.prototype={add:function(t){var r=JSON.stringify(t);return r in this.map||(this.map[r]=this.unique.length,this.unique.push(t)),this.map[r]}};function H(t,r){this.buffer=null,this.target=t,this.type=r,this.data=[]}H.prototype={compile:function(t){for(var r=[],e=0,o=1e4;e<this.data.length;e+=o)r=Array.prototype.concat.apply(r,this.data.slice(e,e+o));var n=this.data.length?r.length/this.data.length:0;if(n!=Math.round(n))throw new Error("buffer elements not of consistent size, average size is "+n);this.buffer=this.buffer||i.createBuffer(),this.buffer.length=r.length,this.buffer.spacing=n,i.bindBuffer(this.target,this.buffer),i.bufferData(this.target,new this.type(r),t||i.STATIC_DRAW)}};function N(t){t=t||{},this.vertexBuffers={},this.indexBuffers={},this.addVertexBuffer("vertices","gl_Vertex"),t.coords&&this.addVertexBuffer("coords","gl_TexCoord"),t.normals&&this.addVertexBuffer("normals","gl_Normal"),t.colors&&this.addVertexBuffer("colors","gl_Color"),(!("triangles"in t)||t.triangles)&&this.addIndexBuffer("triangles"),t.lines&&this.addIndexBuffer("lines")}N.prototype={addVertexBuffer:function(t,r){var e=this.vertexBuffers[r]=new H(i.ARRAY_BUFFER,Float32Array);e.name=t,this[t]=[]},addIndexBuffer:function(t){this.indexBuffers[t]=new H(i.ELEMENT_ARRAY_BUFFER,Uint16Array),this[t]=[]},compile:function(){for(var t in this.vertexBuffers){var r=this.vertexBuffers[t];r.data=this[r.name],r.compile()}for(var e in this.indexBuffers){var r=this.indexBuffers[e];r.data=this[e],r.compile()}},transform:function(t){if(this.vertices=this.vertices.map(function(e){return t.transformPoint(p.fromArray(e)).toArray()}),this.normals){var r=t.inverse().transpose();this.normals=this.normals.map(function(e){return r.transformVector(p.fromArray(e)).unit().toArray()})}return this.compile(),this},computeNormals:function(){this.normals||this.addVertexBuffer("normals","gl_Normal");for(var t=0;t<this.vertices.length;t++)this.normals[t]=new p;for(var t=0;t<this.triangles.length;t++){var r=this.triangles[t],e=p.fromArray(this.vertices[r[0]]),o=p.fromArray(this.vertices[r[1]]),n=p.fromArray(this.vertices[r[2]]),s=o.subtract(e).cross(n.subtract(e)).unit();this.normals[r[0]]=this.normals[r[0]].add(s),this.normals[r[1]]=this.normals[r[1]].add(s),this.normals[r[2]]=this.normals[r[2]].add(s)}for(var t=0;t<this.vertices.length;t++)this.normals[t]=this.normals[t].unit().toArray();return this.compile(),this},computeWireframe:function(){for(var t=new X,r=0;r<this.triangles.length;r++)for(var e=this.triangles[r],o=0;o<e.length;o++){var n=e[o],s=e[(o+1)%e.length];t.add([Math.min(n,s),Math.max(n,s)])}return this.lines||this.addIndexBuffer("lines"),this.lines=t.unique,this.compile(),this},getAABB:function(){var t={min:new p(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)};t.max=t.min.negative();for(var r=0;r<this.vertices.length;r++){var e=p.fromArray(this.vertices[r]);t.min=p.min(t.min,e),t.max=p.max(t.max,e)}return t},getBoundingSphere:function(){for(var t=this.getAABB(),r={center:t.min.add(t.max).divide(2),radius:0},e=0;e<this.vertices.length;e++)r.radius=Math.max(r.radius,p.fromArray(this.vertices[e]).subtract(r.center).length());return r}},N.plane=function(t){t=t||{};for(var r=new N(t),e=t.detailX||t.detail||1,o=t.detailY||t.detail||1,n=t.width||2,s=t.height||2,d=0;d<=o;d++)for(var f=d/o,v=0;v<=e;v++){var m=v/e;if(r.vertices.push([(m-.5)*n,(f-.5)*s,0]),r.coords&&r.coords.push([m,f]),r.normals&&r.normals.push([0,0,1]),v<e&&d<o){var h=v+d*(e+1);r.triangles.push([h,h+1,h+e+1]),r.triangles.push([h+e+1,h+1,h+e+2])}}return r.compile(),r};var $=[[0,4,2,6,-1,0,0],[1,3,5,7,1,0,0],[0,1,4,5,0,-1,0],[2,6,3,7,0,1,0],[0,2,1,3,0,0,-1],[4,5,6,7,0,0,1]];function U(t){return new p((t&1)*2-1,(t&2)-1,(t&4)/2-1)}N.cube=function(t){for(var r=new N(t),e=t&&t.width||2,o=t&&t.height||2,n=t&&t.depth||2,s=0;s<$.length;s++){for(var d=$[s],f=s*4,v=0;v<4;v++){var m=d[v];const h=U(m).toArray();h[0]*=e/2,h[1]*=o/2,h[2]*=n/2,r.vertices.push(h),r.coords&&r.coords.push([v&1,(v&2)/2]),r.normals&&r.normals.push(d.slice(4,7))}r.triangles.push([f,f+1,f+2]),r.triangles.push([f+2,f+1,f+3])}return r.compile(),r},N.sphere=function(t){function r(P,Z,se){return v?[P,se,Z]:[P,Z,se]}function e(P){return P+(P-P*P)/2}t=t||{};for(var o=new N(t),n=new X,s=t.detail||6,d=0;d<8;d++)for(var f=U(d),v=f.x*f.y*f.z>0,m=[],h=0;h<=s;h++){for(var x=0;h+x<=s;x++){var b=h/s,E=x/s,R=(s-h-x)/s,C={vertex:new p(e(b),e(E),e(R)).unit().multiply(f).toArray()};o.coords&&(C.coord=f.y>0?[1-b,R]:[R,1-b]),m.push(n.add(C))}if(h>0)for(var x=0;h+x<=s;x++){var b=(h-1)*(s+1)+(h-1-(h-1)*(h-1))/2+x,E=h*(s+1)+(h-h*h)/2+x;o.triangles.push(r(m[b],m[b+1],m[E])),h+x<s&&o.triangles.push(r(m[E],m[b+1],m[E+1]))}}return o.vertices=n.unique.map(function(P){return P.vertex}),o.coords&&(o.coords=n.unique.map(function(P){return P.coord})),o.normals&&(o.normals=o.vertices),o.compile(),o},N.load=function(t,r){r=r||{},"coords"in r||(r.coords=!!t.coords),"normals"in r||(r.normals=!!t.normals),"colors"in r||(r.colors=!!t.colors),"triangles"in r||(r.triangles=!!t.triangles),"lines"in r||(r.lines=!!t.lines);var e=new N(r);return e.vertices=t.vertices,e.coords&&(e.coords=t.coords),e.normals&&(e.normals=t.normals),e.colors&&(e.colors=t.colors),e.triangles&&(e.triangles=t.triangles),e.lines&&(e.lines=t.lines),e.compile(),e};function O(t,r,e){this.t=arguments.length?t:Number.MAX_VALUE,this.hit=r,this.normal=e}O.prototype={mergeWith:function(t){t.t>0&&t.t<this.t&&(this.t=t.t,this.hit=t.hit,this.normal=t.normal)}};function ee(){var t=i.getParameter(i.VIEWPORT),r=i.modelviewMatrix.m,e=new p(r[0],r[4],r[8]),o=new p(r[1],r[5],r[9]),n=new p(r[2],r[6],r[10]),s=new p(r[3],r[7],r[11]);this.eye=new p(-s.dot(e),-s.dot(o),-s.dot(n));var d=t[0],f=d+t[2],v=t[1],m=v+t[3];this.ray00=i.unProject(d,v,1).subtract(this.eye),this.ray10=i.unProject(f,v,1).subtract(this.eye),this.ray01=i.unProject(d,m,1).subtract(this.eye),this.ray11=i.unProject(f,m,1).subtract(this.eye),this.viewport=t}ee.prototype={getRayForPixel:function(t,r){t=(t-this.viewport[0])/this.viewport[2],r=1-(r-this.viewport[1])/this.viewport[3];var e=p.lerp(this.ray00,this.ray10,t),o=p.lerp(this.ray01,this.ray11,t);return p.lerp(e,o,r).unit()}},ee.hitTestBox=function(t,r,e,o){var n=e.subtract(t).divide(r),s=o.subtract(t).divide(r),d=p.min(n,s),f=p.max(n,s),v=d.max(),m=f.min();if(v>0&&v<m){var h=1e-6,x=t.add(r.multiply(v));return e=e.add(h),o=o.subtract(h),new O(v,x,new p((x.x>o.x)-(x.x<e.x),(x.y>o.y)-(x.y<e.y),(x.z>o.z)-(x.z<e.z)))}return null},ee.hitTestSphere=function(t,r,e,o){var n=t.subtract(e),s=r.dot(r),d=2*r.dot(n),f=n.dot(n)-o*o,v=d*d-4*s*f;if(v>0){var m=(-d-Math.sqrt(v))/(2*s),h=t.add(r.multiply(m));return new O(m,h,h.subtract(e).divide(o))}return null},ee.hitTestTriangle=function(t,r,e,o,n){var s=o.subtract(e),d=n.subtract(e),f=s.cross(d).unit(),v=f.dot(e.subtract(t))/f.dot(r);if(v>0){var m=t.add(r.multiply(v)),h=m.subtract(e),x=d.dot(d),b=d.dot(s),E=d.dot(h),R=s.dot(s),C=s.dot(h),P=x*R-b*b,Z=(R*E-b*C)/P,se=(x*C-b*E)/P;if(Z>=0&&se>=0&&Z+se<=1)return new O(v,m,f)}return null};function re(t,r,e){let o;for(;(o=t.exec(r))!=null;)e(o)}var oe="LIGHTGL";function fe(t,r){function e(x){var b=document.getElementById(x);return b?b.text:x}t=e(t),r=e(r);var o="    uniform mat3 gl_NormalMatrix;    uniform mat4 gl_ModelViewMatrix;    uniform mat4 gl_ProjectionMatrix;    uniform mat4 gl_ModelViewProjectionMatrix;    uniform mat4 gl_ModelViewMatrixInverse;    uniform mat4 gl_ProjectionMatrixInverse;    uniform mat4 gl_ModelViewProjectionMatrixInverse;  ",n=`#version 300 es
    `+o+"    in vec4 gl_Vertex;    in vec4 gl_TexCoord;    in vec3 gl_Normal;    in vec4 gl_Color;    vec4 ftransform() {      return gl_ModelViewProjectionMatrix * gl_Vertex;    }  ",s=`#version 300 es
    precision highp float;
  `+o,d=t+r,f={};re(/\b(gl_[^;]*)\b;/g,o,function(x){var b=x[1];if(d.indexOf(b)!=-1){var E=b.replace(/[a-z_]/g,"");f[E]=oe+b}}),d.indexOf("ftransform")!=-1&&(f.MVPM=oe+"gl_ModelViewProjectionMatrix"),this.usedMatrices=f;function v(x,b){var E={},R=/^((\s*\/\/.*\n|\s*#extension.*\n)+)[^]*$/.exec(b);return b=R?R[1]+x+b.substr(R[1].length):x+b,re(/\bgl_\w+\b/g,x,function(C){C in E||(b=b.replace(new RegExp("\\b"+C+"\\b","g"),oe+C),E[C]=!0)}),b}t=v(n,t),r=v(s,r);function m(x,b){var E=i.createShader(x);if(i.shaderSource(E,b),i.compileShader(E),!i.getShaderParameter(E,i.COMPILE_STATUS))throw new Error("compile error: "+i.getShaderInfoLog(E));return E}if(this.program=i.createProgram(),i.attachShader(this.program,m(i.VERTEX_SHADER,t)),i.attachShader(this.program,m(i.FRAGMENT_SHADER,r)),i.linkProgram(this.program),!i.getProgramParameter(this.program,i.LINK_STATUS))throw new Error("link error: "+i.getProgramInfoLog(this.program));this.attributes={},this.uniformLocations={};var h={};re(/uniform\s+sampler(1D|2D|3D|Cube)\s+(\w+)\s*;/g,t+r,function(x){h[x[2]]=1}),this.isSampler=h}function ne(t){var r=Object.prototype.toString.call(t);return r=="[object Array]"||r=="[object Float32Array]"}function de(t){var r=Object.prototype.toString.call(t);return r=="[object Number]"||r=="[object Boolean]"}new w,new w,fe.prototype={uniforms:function(t){i.useProgram(this.program);for(var r in t){var e=this.uniformLocations[r]||i.getUniformLocation(this.program,r);if(e){this.uniformLocations[r]=e;var o=t[r];if(o instanceof p?o=[o.x,o.y,o.z]:o instanceof w&&(o=o.m),ne(o))switch(o.length){case 1:i.uniform1fv(e,new Float32Array(o));break;case 2:i.uniform2fv(e,new Float32Array(o));break;case 3:i.uniform3fv(e,new Float32Array(o));break;case 4:i.uniform4fv(e,new Float32Array(o));break;case 9:i.uniformMatrix3fv(e,!1,new Float32Array([o[0],o[3],o[6],o[1],o[4],o[7],o[2],o[5],o[8]]));break;case 16:i.uniformMatrix4fv(e,!1,new Float32Array([o[0],o[4],o[8],o[12],o[1],o[5],o[9],o[13],o[2],o[6],o[10],o[14],o[3],o[7],o[11],o[15]]));break;default:throw new Error(`don't know how to load uniform "`+r+'" of length '+o.length)}else if(de(o))(this.isSampler[r]?i.uniform1i:i.uniform1f).call(i,e,o);else throw new Error('attempted to set uniform "'+r+'" to invalid value '+o)}}return this},draw:function(t,r){this.drawBuffers(t.vertexBuffers,t.indexBuffers[r==i.LINES?"lines":"triangles"],arguments.length<2?i.TRIANGLES:r)},drawBuffers:function(t,r,e){var o=this.usedMatrices,n=i.modelviewMatrix,s=i.projectionMatrix,d=o.MVMI||o.NM?n.inverse():null,f=o.PMI?s.inverse():null,v=o.MVPM||o.MVPMI?s.multiply(n):null,m={};if(o.MVM&&(m[o.MVM]=n),o.MVMI&&(m[o.MVMI]=d),o.PM&&(m[o.PM]=s),o.PMI&&(m[o.PMI]=f),o.MVPM&&(m[o.MVPM]=v),o.MVPMI&&(m[o.MVPMI]=v.inverse()),o.NM){var h=d.m;m[o.NM]=[h[0],h[4],h[8],h[1],h[5],h[9],h[2],h[6],h[10]]}this.uniforms(m);var x=0;for(var b in t){var E=t[b],R=this.attributes[b]||i.getAttribLocation(this.program,b.replace(/^(gl_.*)$/,oe+"$1"));R==-1||!E.buffer||(this.attributes[b]=R,i.bindBuffer(i.ARRAY_BUFFER,E.buffer),i.enableVertexAttribArray(R),i.vertexAttribPointer(R,E.buffer.spacing,i.FLOAT,!1,0,0),x=E.buffer.length/E.buffer.spacing)}for(var b in this.attributes)b in t||i.disableVertexAttribArray(this.attributes[b]);return x&&(!r||r.buffer)&&(r?(i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,r.buffer),i.drawElements(e,r.buffer.length,i.UNSIGNED_SHORT,0)):i.drawArrays(e,0,x)),this}};function V(t,r,e){e=e||{},this.width=t,this.height=r,this.id=i.createTexture();let o=e.type||i.UNSIGNED_BYTE,n=e.format||i.RGBA,s=i.RGBA;const d=i.getExtension("EXT_color_buffer_float"),f=i.getExtension("EXT_color_buffer_half_float");o===i.FLOAT?(d?i instanceof WebGL2RenderingContext&&(n=i.RGBA32F):(console.warn("FLOAT textures not renderable, falling back to UNSIGNED_BYTE"),o=i.UNSIGNED_BYTE,n=i.RGBA8),s=i.RGBA):o===i.HALF_FLOAT_OES?(f?i instanceof WebGL2RenderingContext&&(n=i.RGBA16F):(console.warn("HALF_FLOAT textures not renderable, falling back to UNSIGNED_BYTE"),o=i.UNSIGNED_BYTE,n=i.RGBA8),s=i.RGBA):(o=i.UNSIGNED_BYTE,n=i.RGBA8,s=i.RGBA);const v=e.filter||e.magFilter||i.LINEAR,m=e.filter||e.minFilter||i.LINEAR;i.bindTexture(i.TEXTURE_2D,this.id),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,1),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,v),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,m),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,e.wrap||e.wrapS||i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,e.wrap||e.wrapT||i.CLAMP_TO_EDGE),i instanceof WebGL2RenderingContext?i.texImage2D(i.TEXTURE_2D,0,n,t,r,0,s,o,null):i.texImage2D(i.TEXTURE_2D,0,s,t,r,0,s,o,null),i.bindTexture(i.TEXTURE_2D,null),this.format=s,this.type=o,this.internalFormat=n}var K,q,ae;V.prototype={bind:function(t){i.activeTexture(i.TEXTURE0+(t||0)),i.bindTexture(i.TEXTURE_2D,this.id)},unbind:function(t){i.activeTexture(i.TEXTURE0+(t||0)),i.bindTexture(i.TEXTURE_2D,null)},canDrawTo:function(){K=K||i.createFramebuffer(),i.bindFramebuffer(i.FRAMEBUFFER,K),i.framebufferTexture2D(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,this.id,0);var t=i.checkFramebufferStatus(i.FRAMEBUFFER)==i.FRAMEBUFFER_COMPLETE;return i.bindFramebuffer(i.FRAMEBUFFER,null),t},drawTo:function(t){i.getExtension("EXT_color_buffer_float")||console.warn("EXT_color_buffer_float not available!");var e=i.getParameter(i.VIEWPORT);if(K=K||i.createFramebuffer(),q=q||i.createRenderbuffer(),i.bindFramebuffer(i.FRAMEBUFFER,K),i.bindRenderbuffer(i.RENDERBUFFER,q),(this.width!=q.width||this.height!=q.height)&&(q.width=this.width,q.height=this.height,i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_COMPONENT16,this.width,this.height)),i.framebufferTexture2D(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,this.id,0),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,q),i.checkFramebufferStatus(i.FRAMEBUFFER)!=i.FRAMEBUFFER_COMPLETE)throw new Error("Rendering to this texture is not supported (incomplete framebuffer)");i.viewport(0,0,this.width,this.height),t(),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindRenderbuffer(i.RENDERBUFFER,null),i.viewport(e[0],e[1],e[2],e[3])},swapWith:function(t){var r;r=t.id,t.id=this.id,this.id=r,r=t.width,t.width=this.width,this.width=r,r=t.height,t.height=this.height,this.height=r}},V.fromImage=function(t,r){r=r||{};var e=new V(t.width,t.height,r);i.bindTexture(i.TEXTURE_2D,e.id);try{i.texImage2D(i.TEXTURE_2D,0,e.format,e.format,e.type,t)}catch{throw location.protocol=="file:"?new Error('image not loaded for security reasons (serve this page over "http://" instead)'):new Error("image not loaded for security reasons (image must originate from the same domain as this page or use Cross-Origin Resource Sharing)")}return r.minFilter&&r.minFilter!=i.NEAREST&&r.minFilter!=i.LINEAR&&i.generateMipmap(i.TEXTURE_2D),i.bindTexture(i.TEXTURE_2D,null),e},V.fromURL=function(t,r){ae=ae||function(){var s=document.createElement("canvas").getContext("2d");s.canvas.width=s.canvas.height=128;for(var d=0;d<s.canvas.height;d+=16)for(var f=0;f<s.canvas.width;f+=16)s.fillStyle=(f^d)&16?"#FFF":"#DDD",s.fillRect(f,d,16,16);return s.canvas}();var e=V.fromImage(ae,r),o=new Image,n=i;return o.onload=function(){n.makeCurrent(),V.fromImage(o,r).swapWith(e)},o.src=t,e},V.canUseFloatingPointTextures=function(){return!!i.getExtension("OES_texture_float")},V.canUseFloatingPointLinearFiltering=function(){return!!i.getExtension("OES_texture_float_linear")},V.canUseHalfFloatingPointTextures=function(){return!!i.getExtension("OES_texture_half_float")},V.canUseHalfFloatingPointLinearFiltering=function(){return!!i.getExtension("OES_texture_half_float_linear")};function p(t,r,e){this.x=t||0,this.y=r||0,this.z=e||0}return p.prototype={negative:function(){return new p(-this.x,-this.y,-this.z)},add:function(t){return t instanceof p?new p(this.x+t.x,this.y+t.y,this.z+t.z):new p(this.x+t,this.y+t,this.z+t)},subtract:function(t){return t instanceof p?new p(this.x-t.x,this.y-t.y,this.z-t.z):new p(this.x-t,this.y-t,this.z-t)},multiply:function(t){return t instanceof p?new p(this.x*t.x,this.y*t.y,this.z*t.z):new p(this.x*t,this.y*t,this.z*t)},divide:function(t){return t instanceof p?new p(this.x/t.x,this.y/t.y,this.z/t.z):new p(this.x/t,this.y/t,this.z/t)},equals:function(t){return this.x==t.x&&this.y==t.y&&this.z==t.z},dot:function(t){return this.x*t.x+this.y*t.y+this.z*t.z},cross:function(t){return new p(this.y*t.z-this.z*t.y,this.z*t.x-this.x*t.z,this.x*t.y-this.y*t.x)},length:function(){return Math.sqrt(this.dot(this))},unit:function(){return this.divide(this.length())},min:function(){return Math.min(Math.min(this.x,this.y),this.z)},max:function(){return Math.max(Math.max(this.x,this.y),this.z)},toAngles:function(){return{theta:Math.atan2(this.z,this.x),phi:Math.asin(this.y/this.length())}},angleTo:function(t){return Math.acos(this.dot(t)/(this.length()*t.length()))},toArray:function(t){return[this.x,this.y,this.z].slice(0,t||3)},clone:function(){return new p(this.x,this.y,this.z)},init:function(t,r,e){return this.x=t,this.y=r,this.z=e,this}},p.negative=function(t,r){return r.x=-t.x,r.y=-t.y,r.z=-t.z,r},p.add=function(t,r,e){return r instanceof p?(e.x=t.x+r.x,e.y=t.y+r.y,e.z=t.z+r.z):(e.x=t.x+r,e.y=t.y+r,e.z=t.z+r),e},p.subtract=function(t,r,e){return r instanceof p?(e.x=t.x-r.x,e.y=t.y-r.y,e.z=t.z-r.z):(e.x=t.x-r,e.y=t.y-r,e.z=t.z-r),e},p.multiply=function(t,r,e){return r instanceof p?(e.x=t.x*r.x,e.y=t.y*r.y,e.z=t.z*r.z):(e.x=t.x*r,e.y=t.y*r,e.z=t.z*r),e},p.divide=function(t,r,e){return r instanceof p?(e.x=t.x/r.x,e.y=t.y/r.y,e.z=t.z/r.z):(e.x=t.x/r,e.y=t.y/r,e.z=t.z/r),e},p.cross=function(t,r,e){return e.x=t.y*r.z-t.z*r.y,e.y=t.z*r.x-t.x*r.z,e.z=t.x*r.y-t.y*r.x,e},p.unit=function(t,r){var e=t.length();return r.x=t.x/e,r.y=t.y/e,r.z=t.z/e,r},p.fromAngles=function(t,r){return new p(Math.cos(t)*Math.cos(r),Math.sin(r),Math.sin(t)*Math.cos(r))},p.randomDirection=function(){return p.fromAngles(Math.random()*Math.PI*2,Math.asin(Math.random()*2-1))},p.min=function(t,r){return new p(Math.min(t.x,r.x),Math.min(t.y,r.y),Math.min(t.z,r.z))},p.max=function(t,r){return new p(Math.max(t.x,r.x),Math.max(t.y,r.y),Math.max(t.z,r.z))},p.lerp=function(t,r,e){return r.subtract(t).multiply(e).add(t)},p.fromArray=function(t){return new p(t[0],t[1],t[2])},p.angleBetween=function(t,r){return t.angleTo(r)},a}();let c={numSteps:2,focal:45,visualizations:{enabled:!0,showFlags:!0,showRanks:!0,showWR:!0,showSpeed:!0,showDivingDistance:!0,areaConservationEnabled:!0,video:{show:!1},shadow:{enabled:!0,shadowRadius:.5,shadowPower:.5,showCircle:!0,circleRadius:.6,circleStroke:.15},sparks:{enabled:!1,glow:5,glowOffset:.5,lengthFactor:1,stroke:.01,num:40,sizeFactor:50,fov:Math.PI/4}},simulation:{optimized:!1,waterDamping:.02,poolSize:new g.Vector(2,1,2)},isOneVisualizationEnabled:()=>c.visualizations.showFlags||c.visualizations.showRanks||c.visualizations.showWR||c.visualizations.showSpeed||c.visualizations.showDivingDistance};const Be=new g.Vector(0,-4,0);class pe{constructor(a,l){this.center=new g.Vector(a.x,a.y,a.z),this.oldCenter=new g.Vector(a.x,a.y,a.z),this.radius=l,this.cinematic=!1,this.velocity=new g.Vector(0,0,0),this.acceleration=new g.Vector(0,0,0),this.mass=4/3*Math.PI*Math.pow(l,3)*1e3,this.invMass=1/this.mass,this.radiusSquared=l*l,this.mesh=g.Mesh.sphere({detail:10})}update(a){if(this.cinematic)this.velocity=new g.Vector(0,0,0);else{this.oldCenter=new g.Vector(this.center.x,this.center.y,this.center.z);const l=Math.max(0,Math.min(1,(this.radius-this.center.y)/(2*this.radius))),u=Be.multiply(-1.35*this.mass*l),_=this.velocity.unit().multiply(-1e3*this.radiusSquared*l*this.velocity.dot(this.velocity));this.addForce(_),this.addForce(u),this.addForce(Be.multiply(this.mass)),this.velocity=this.velocity.add(this.acceleration.multiply(a)),this.acceleration=new g.Vector(0,0,0),this.center=this.center.add(this.velocity.multiply(a)),this.center.y<this.radius-c.simulation.poolSize.y&&(this.center.y=this.radius-1,this.velocity.y=Math.abs(this.velocity.y)*.7)}}addForce(a){this.cinematic?console.warn("Trying to add force to a cinematic sphere."):this.acceleration=this.acceleration.add(a.multiply(this.invMass))}move(a){this.oldCenter=new g.Vector(this.center.x,this.center.y,this.center.z),this.center=new g.Vector(a.x,a.y,a.z),this.cinematic||console.warn("Moving a non cinematic sphere.")}}const Ae=.3,ze=.15,Ce=1,Ze=9,Ue=Math.ceil(Ze/4),ke=10,Je=`#version 300 es
    const float ARM_DELTA_X = float(`+Ae+`);
    const float FOOT_DELTA_X = float( `+ze+`);
    const float FOOT_DELTA_Z = float( `+Ce+`);
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

`,Qe=`#version 300 es
    precision highp float;
    in float fragCyclePhase;
    in float fragAltitude;
    const float PI = 3.141592;
    out vec4 fragColor;
    void main() {
        fragColor = vec4(fragAltitude, fragCyclePhase / (2. * PI), 1., 1.);
    }
`,$e=`#version 300 es
    in vec2 iVertex;
    out vec2 fragCoord;
    void main() {
        fragCoord = iVertex * .5 + .5;
        gl_Position = vec4(iVertex.xy, 0., 1.);
    }
`,et=`#version 300 es
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
`,tt=new Float32Array([-1,-1,1,-1,1,1,-1,1]),it=new Uint16Array([0,1,2,2,3,0]);var W,Ve,Ge,ve,We;class rt{constructor(a){Le(this,W);this.numVecAttributes=Ue,this.maxNumSwimmer=ke,this.gl=a;const l=a.NEAREST;this.texture=new g.Texture(this.numVecAttributes,this.maxNumSwimmer,{type:a.FLOAT,filter:l}),this.initPrograms(),this.indexBuffer=this.gl.createBuffer(),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.indexBuffer),this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER,it,this.gl.STATIC_DRAW),this.vboPlane=this.gl.createBuffer(),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vboPlane),this.gl.bufferData(this.gl.ARRAY_BUFFER,tt,this.gl.STATIC_DRAW),this.vboPoints=this.gl.createBuffer()}update(a){this.numSwimmers=a.length;const l=5,u=J(this,W,Ge).call(this,a);this.swimmersAttributes=new Float32Array(this.numVecAttributes*4*this.maxNumSwimmer*l);const _=J(this,W,Ve).call(this,a);for(let y=0;y<a.length;y++){const T=_[y],F=y==u;J(this,W,We).call(this,y,T,F),J(this,W,ve).call(this,a.length+y,T.leftArm),J(this,W,ve).call(this,2*a.length+y,T.rightArm),J(this,W,ve).call(this,3*a.length+y,T.leftFoot),J(this,W,ve).call(this,4*a.length+y,T.rightFoot)}this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture.id),this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,!1),this.gl.texSubImage2D(this.gl.TEXTURE_2D,0,0,0,this.numVecAttributes,this.maxNumSwimmer,this.gl.RGBA,this.gl.FLOAT,this.swimmersAttributes),this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,!0),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vboPoints),this.gl.bufferData(this.gl.ARRAY_BUFFER,this.swimmersAttributes,this.gl.DYNAMIC_DRAW)}buildShader(a,l){const u=this.gl.createShader(l);return this.gl.shaderSource(u,a),this.gl.compileShader(u),u}createProgram(a){const l=this.gl.createProgram();return a.forEach(u=>{this.gl.attachShader(l,u)}),this.gl.linkProgram(l),l}checkShaders(a,l,u){this.gl.getShaderParameter(a,this.gl.COMPILE_STATUS)||console.error(this.gl.getShaderInfoLog(a)),this.gl.getShaderParameter(l,this.gl.COMPILE_STATUS)||console.error(this.gl.getShaderInfoLog(l)),this.gl.getProgramParameter(u,this.gl.LINK_STATUS)||console.error(this.gl.getProgramInfoLog(u))}createRenderingTexture(a,l){this.pointsTexture=new g.Texture(a,l,{type:this.gl.FLOAT,filter:this.gl.NEAREST}),this.pointsFrameBuffer=this.gl.createFramebuffer(),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.pointsFrameBuffer);const u=this.gl.COLOR_ATTACHMENT0;this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,u,this.gl.TEXTURE_2D,this.pointsTexture.id,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.horizontalPassTexture=new g.Texture(a,l,{type:this.gl.FLOAT,filter:this.gl.LINEAR}),this.horizontalPassFrameBuffer=this.gl.createFramebuffer(),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.horizontalPassFrameBuffer),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,u,this.gl.TEXTURE_2D,this.horizontalPassTexture.id,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null);const _=l/4,y=_,T=_;this.displacementTexture=new g.Texture(y,T,{type:this.gl.FLOAT,filter:this.gl.LINEAR}),this.displacementFrameBuffer=this.gl.createFramebuffer(),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.displacementFrameBuffer),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,u,this.gl.TEXTURE_2D,this.displacementTexture.id,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.oldDisplacementTexture=new g.Texture(y,T,{type:this.gl.FLOAT,filter:this.gl.LINEAR})}buildProgram(a,l){const u=this.buildShader(a,this.gl.VERTEX_SHADER),_=this.buildShader(l,this.gl.FRAGMENT_SHADER),y=this.createProgram([u,_]);return this.checkShaders(u,_,y),y}initPrograms(){this.programPoints=this.buildProgram(Je,Qe),this.programVolume=this.buildProgram($e,et),this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height)}volumePass(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.horizontalPassFrameBuffer),this.gl.useProgram(this.programVolume);const a=this.gl.getAttribLocation(this.programVolume,"iVertex"),l=this.gl.getUniformLocation(this.programVolume,"poolSize");this.gl.uniform2f(l,c.simulation.poolSize.x,c.simulation.poolSize.z);const u=this.gl.getUniformLocation(this.programVolume,"horizontal");this.gl.uniform1i(u,!0);const _=this.gl.getUniformLocation(this.programVolume,"show");this.gl.uniform1i(_,!1);const y=this.gl.getUniformLocation(this.programVolume,"swapColor");this.gl.uniform1i(y,!1);const T=2,F=this.gl.FLOAT,B=!1,k=0,M=0;this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vboPlane),this.gl.vertexAttribPointer(a,T,F,B,k,M),this.gl.enableVertexAttribArray(a),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.indexBuffer),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.pointsTexture.id),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this.gl.drawElements(this.gl.TRIANGLES,6,this.gl.UNSIGNED_SHORT,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.displacementFrameBuffer),this.gl.uniform1i(u,!1),this.gl.uniform1i(_,!1),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.horizontalPassTexture.id),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this.gl.viewport(0,0,this.displacementTexture.width,this.displacementTexture.height),this.gl.drawElements(this.gl.TRIANGLES,6,this.gl.UNSIGNED_SHORT,0),this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height)}pointPass(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.pointsFrameBuffer),this.gl.useProgram(this.programPoints);const a=this.gl.getAttribLocation(this.programPoints,"iData1"),l=this.gl.getAttribLocation(this.programPoints,"iData2"),u=this.gl.getAttribLocation(this.programPoints,"iData3"),_=this.gl.getUniformLocation(this.programPoints,"invPoolSize");this.gl.uniform2f(_,1/c.simulation.poolSize.x,1/c.simulation.poolSize.z);const y=4,T=this.gl.FLOAT,F=!1,B=4,k=12*B;let M=0;this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vboPoints),a>=0&&(this.gl.vertexAttribPointer(a,y,T,F,k,M),this.gl.enableVertexAttribArray(a)),M=4*B,l>=0&&(this.gl.vertexAttribPointer(l,y,T,F,k,M),this.gl.enableVertexAttribArray(l)),M=2*4*B,u>=0&&(this.gl.vertexAttribPointer(u,y,T,F,k,M),this.gl.enableVertexAttribArray(u)),this.gl.viewport(0,0,this.pointsTexture.width,this.pointsTexture.height),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this.gl.drawArrays(this.gl.POINTS,0,5*this.numSwimmers)}updateOldDisplacementTexture(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.displacementFrameBuffer),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.oldDisplacementTexture.id),this.gl.copyTexSubImage2D(this.gl.TEXTURE_2D,0,0,0,0,0,this.oldDisplacementTexture.width,this.oldDisplacementTexture.height)}draw(){this.updateOldDisplacementTexture(),this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this.pointPass(),this.volumePass(),this.gl.disable(this.gl.BLEND)}}W=new WeakSet,Ve=function(a){const l=function(u,_){return _.body.center.z-u.body.center.z};return a.sort(l)},Ge=function(a){let l=-c.simulation.poolSize.z,u=-1;for(let _=0;_<a.length;_++){const y=a[_].body.center.z;y>l&&(l=y,u=_)}return u},ve=function(a,l){this.swimmersAttributes[this.numVecAttributes*4*a]=l.center.x,this.swimmersAttributes[this.numVecAttributes*4*a+1]=l.center.z,this.swimmersAttributes[this.numVecAttributes*4*a+7]=l.center.y},We=function(a,l,u=!1){J(this,W,ve).call(this,a,l.body),this.swimmersAttributes[this.numVecAttributes*4*a+2]=l.divingDistance,this.swimmersAttributes[this.numVecAttributes*4*a+3]=l.divingTime,this.swimmersAttributes[this.numVecAttributes*4*a+4]=l.reactionTime,this.swimmersAttributes[this.numVecAttributes*4*a+5]=l.body.velocity.z*3.6,this.swimmersAttributes[this.numVecAttributes*4*a+6]=l.nationality,this.swimmersAttributes[this.numVecAttributes*4*a+8]=u?1:0};function ye(i=0,a=1){const l=1-Math.random(),u=Math.random();return Math.sqrt(-2*Math.log(l))*Math.cos(2*Math.PI*u)*a+i}const te=new g.Vector(1e3,0,0),ot=.5,nt=1,Ee=2*Math.PI*nt,D=class D{constructor(a){this.startingPoint=new g.Vector(a.x,a.y,a.z),this.center=new g.Vector(a.x,a.y,a.z),this.force=new g.Vector(0,0,190+ye(0,20)),this.reactionTime=Math.max(.1,ye(.15,.02));const l=.25,u=.15;this.body=new pe(a,l),this.leftArm=new pe(te,u),this.rightArm=new pe(te,u),this.leftFoot=new pe(te,u),this.rightFoot=new pe(te,u),this.body.cinematic=!D.useGravity,this.leftArm.cinematic=!0,this.rightArm.cinematic=!0,this.leftFoot.cinematic=!0,this.rightFoot.cinematic=!0,this.spheres=[this.body,this.leftArm,this.rightArm,this.leftFoot,this.rightFoot],this.divingDistance=0,this.divingTime=1e3,this.nationality=Math.random()>.5?0:1}jump(){this.body.cinematic=!1,this.body.velocity=new g.Vector(0,0,4.5+ye(0,1)),this.body.center=new g.Vector(this.startingPoint.x,1,-c.simulation.poolSize.z/2)}swim(a){this.started=a,a?(this.body.cinematic=!1,this.useGravity=!0,this.body.center=new g.Vector(this.startingPoint.x,0,-c.simulation.poolSize.z/2)):(this.body.velocity=new g.Vector(0,0,0),this.body.center=new g.Vector(this.startingPoint.x,0,0))}getArmOffset(a,l){return new g.Vector(0,Math.cos(Ee*a+l),Math.sin(Ee*a+l)).multiply(ot)}update(a,l){if(D.raceHasStarted||D.swimming){if(!this.started&&D.raceHasStarted)if(l>this.reactionTime)this.swim(!0),this.jump();else return;this.body.addForce(this.force),this.cyclePhase=Ee*l%2*Math.PI;const u=this.getArmOffset(l,0),_=this.getArmOffset(l,Math.PI),y=this.getArmOffset(l*2,0),T=this.getArmOffset(l*2,Math.PI);this.rightArm.move(this.body.center.add(u).add(new g.Vector(Ae,0,0))),this.leftArm.move(this.body.center.add(_).add(new g.Vector(-Ae,0,0))),this.rightFoot.move(this.body.center.add(new g.Vector(ze,y.y*.5,-Ce))),this.leftFoot.move(this.body.center.add(new g.Vector(-ze,T.y*.5,-Ce)))}else this.rightArm.move(te),this.leftArm.move(te),this.rightFoot.move(te),this.leftFoot.move(te);for(let u of this.spheres)u.update(a);!this.hasDove&&this.body.center.y<=0&&this.body.oldCenter.y>=0&&(this.divingDistance=this.body.center.z+c.simulation.poolSize.z/2,this.divingTime=l,this.hasDove=!0)}};Y(D,"useGravity",!1),Y(D,"raceHasStarted",!1),Y(D,"swimming",!1),Y(D,"attributes"),Y(D,"initAttributes",a=>{D.attributes=new rt(a)}),Y(D,"updateAttributesTexture",a=>{D.attributes.update(a)}),Y(D,"getAttributesTexture",()=>D.attributes.texture),Y(D,"bindDisplacementTexture",a=>{D.attributes.displacementTexture.bind(a)}),Y(D,"bindOldDisplacementTexture",a=>{D.attributes.oldDisplacementTexture.bind(a)}),Y(D,"reset",a=>{D.attributes.createRenderingTexture(a.x,a.y)});let z=D;const Me=`
    uniform float wr;
    #define sqrt_2_PI 2.50662827
    #define PI 3.1415926536
    uniform sampler2D swimmersAttributesTexture;
    const int SWIMMERS_NUM_ATTRIBUTES = 4;
    const vec2 TEXTURE_SIZE = vec2(`+Ue+", "+ke+`);
    uniform float swimmersNumber;
    uniform float time;

    vec2 getAttributePosition(int i) {
        float i_float = float(i);
        vec2 pixel = vec2(0., i_float);
        vec4 attributes = texture(swimmersAttributesTexture, (pixel + .5) / TEXTURE_SIZE);
        return attributes.rg;
    }

    float getAttributeSpeed(int i) {
        float i_float = float(i);
        vec2 pixel = vec2(1., i_float);
        vec4 attributes = texture(swimmersAttributesTexture, (pixel + .5) / TEXTURE_SIZE);
        return attributes.g;
    }

    vec2 getAttributeDiving(int i) {
        float i_float = float(i);
        vec2 pixel = vec2(0., i_float);
        vec4 attributes = texture(swimmersAttributesTexture, (pixel + .5) / TEXTURE_SIZE);
        return attributes.ba;
    }

    float getAttributeReactionTime(int i ) {
        float i_float = float(i);
        vec2 pixel = vec2(1., i_float);
        vec4 attributes = texture(swimmersAttributesTexture, (pixel + .5) / TEXTURE_SIZE);
        return attributes.r;
    }

    float getNationality(int i ) {
        float i_float = float(i);
        vec2 pixel = vec2(1., i_float);
        vec4 attributes = texture(swimmersAttributesTexture, (pixel + .5) / TEXTURE_SIZE);
        return attributes.b;
    }

    float getAltitude(int i ) {
        float i_float = float(i);
        vec2 pixel = vec2(1., i_float);
        vec4 attributes = texture(swimmersAttributesTexture, (pixel + .5) / TEXTURE_SIZE);
        return attributes.a;
    }

    bool isFirst(int i) {
        float i_float = float(i);
        vec2 pixel = vec2(2., i_float);
        vec4 attributes = texture(swimmersAttributesTexture, (pixel + .5) / TEXTURE_SIZE);
        return attributes.r > .5;
    }


    float gaussian(float x, float mean, float std) {
        return exp(-(x - mean) * (x - mean) / (2. * std * std)) / (std * sqrt_2_PI);
    }

    float getRecordWave(vec2 coord) {
        float z = poolSize.z * coord.y;
        if (true || abs(z - wr) < 1.) {
            return .2 * gaussian(z, wr, .4);
        }
        return 0.;
    }

    vec3 getDivingWaves(vec2 coord) {
        vec3 res = vec3(0., 0., -1.);
        
        for (int i = 0; i < 10; i++) {
            float i_float = float(i);
            if (i_float > swimmersNumber - 0.1) break;
            vec2 swimmerPos = getAttributePosition(i);
            float swimmer_x = swimmerPos.x;
            float swimmer_z = swimmerPos.y;
            vec2 swimmerDiving = getAttributeDiving(i);
            float divingDistance = swimmerDiving.x;
            float divingTime = swimmerDiving.y;

            float timeSinceDiving = time - divingTime;
            const float rippleSpeed = .5;
            const float maxTime = 10.;
            const float lambda = 2. * PI / 0.6;
            float frequency = 2.;
            float omega = 2. * PI * frequency;
            vec2 center = vec2(swimmer_x, divingDistance - poolSize.z / 2.);
            vec2 pos = (coord - .5) * poolSize.xz;
            vec2 diff = pos - center;
            float d = sqrt(dot(diff, diff));
            d*=2.;
            
            float r_max_max = 0.5;
            float divingDistRange = 2.;
            float divingDistMin = 2.;
            float intensity = (divingDistance - divingDistMin) / divingDistRange;
            float r_max = max(0.3, intensity * r_max_max);
            float attenuationDist = r_max;
            
            float duration = 1.5;
            float c =  cos(lambda * d - omega * timeSinceDiving);
            float attenuation = exp(-d / attenuationDist - timeSinceDiving / duration);
            bool condition = timeSinceDiving > d / frequency;
            if (condition) res.x += .05 * attenuation * c;
            if (c > 0.8 && condition) {
                res.y = max(res.y, min(1., 15.*attenuation));
                res.z = 1.;
            }
        }
        return res;
    }
`;function j(i,a=null){this.gl=i,this.visualizationWavesEnabled=!0,this.sqrt_2_PI=Math.sqrt(2*Math.PI),this.spheres=[];var l=`
    out vec2 coord;
    uniform vec2 invPoolSizeVertex;
    void main() {
      coord = gl_Vertex.xy * invPoolSizeVertex + 0.5;
      gl_Position = vec4(gl_Vertex.xy * 2. * invPoolSizeVertex, 0., 1.0);
    }
  `;this.reset(a),g.Texture.canUseFloatingPointTextures(),this.dropShader=new g.Shader(l,`
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
  `),this.updateShader=new g.Shader(l,`
    uniform sampler2D tex;
    uniform vec2 delta;
    uniform float wr;
    uniform float prev_wr;
    uniform float damping;
    uniform float sqrt_2_PI;
    uniform vec3 poolSize;
    in vec2 coord;
    out vec4 fragColor;
    float gaussian(float x, float mean, float std) {
    return exp(-(x - mean) * (x - mean) / (2. * std * std)) / (std * sqrt_2_PI);
  }
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
    info.g *= 1. - damping;/*TODO parametriser ça*/

    /* move the vertex along the velocity */
    info.r += info.g;
      

    fragColor = info;
  }
  `),this.normalShader=new g.Shader(l,`
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
  `),this.sphereShader=new g.Shader(`
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

    // /* add the old volume */
    info.r += volumeInSphere(oldCenter);

    // /* subtract the new volume */
    info.r -= volumeInSphere(newCenter);

    fragColor = info;
  }
  `),this.visualizationWavesShader=new g.Shader(l,`
    uniform sampler2D tex;
    uniform bool add;
    uniform vec3 poolSize;
    uniform bool showWR;
    uniform bool showDivingDistance;
    in vec2 coord;
    out vec4 fragColor;

    `+Me+`

    void main() {
      vec4 info = texture(tex, coord);
      float w = 0.;
      if(showDivingDistance) w += getDivingWaves(coord).x;
      if(showWR) w += getRecordWave(coord);
      info.r += add ? w : -w;
      fragColor = info;
    }
    `)}j.prototype.reset=function(i=null){this.WR_position=1e5,this.prev_WR_position=0,i!==null?(console.log("resolution.y : "+i.y),this.W=Math.round(i.x),this.H=Math.round(i.y),console.log("Using custom resolution:",this.W,this.H)):(this.W=256,this.H=256),z.reset(new g.Vector(this.W,this.H)),this.plane=g.Mesh.plane({detail:255,width:c.simulation.poolSize.x,height:c.simulation.poolSize.z}),this.delta=new g.Vector(1/this.W,1/this.H);const a=this.gl;this.textureA&&a.deleteTexture(this.textureA.id),this.textureB&&a.deleteTexture(this.textureB.id),this.textureA=new g.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:l}),this.textureB=new g.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:l}),this.areaConservationTexture=new g.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:l}),this.showAreaConservedGrid=!1,this.showProjectionGrid=!1,this.invPoolSize=new g.Vector(1/c.simulation.poolSize.x,1/c.simulation.poolSize.y,1/c.simulation.poolSize.z);var l=g.Texture.canUseFloatingPointLinearFiltering()?this.gl.LINEAR:this.gl.NEAREST;(!this.textureA.canDrawTo()||!this.textureB.canDrawTo())&&g.Texture.canUseHalfFloatingPointTextures()&&(console.log("No draw"),l=g.Texture.canUseHalfFloatingPointLinearFiltering()?this.gl.LINEAR:this.gl.NEAREST,this.textureA=new g.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:l}),this.textureB=new g.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:l}))};j.prototype.addDrop=function(i,a,l,u){var _=this;this.textureB.drawTo(function(){_.textureA.bind(),_.dropShader.uniforms({invPoolSizeVertex:[_.invPoolSize.x,_.invPoolSize.z],center:[i,a],radius:l,strength:u,poolSize:[c.simulation.poolSize.x,c.simulation.poolSize.y,c.simulation.poolSize.z]}).draw(_.plane)}),this.textureB.swapWith(this.textureA)};j.prototype.addOrRemoveVisualizationWaves=function(i,a,l){if(this.visualizationWavesEnabled){var u=this;this.textureB.drawTo(function(){u.textureA.bind();const _=z.getAttributesTexture();_&&_.bind(1),u.visualizationWavesShader.uniforms({swimmersAttributesTexture:1,showDivingDistance:c.visualizations.showDivingDistance,showWR:c.visualizations.showWR,invPoolSizeVertex:[u.invPoolSize.x,u.invPoolSize.z],poolSize:[c.simulation.poolSize.x,c.simulation.poolSize.y,c.simulation.poolSize.z],wr:u.WR_position,sqrt_2_PI:u.sqrt_2_PI,add:i,swimmersNumber:a.length,time:l}).draw(u.plane)}),this.textureB.swapWith(this.textureA)}};j.prototype.addSwimmer=function(i){for(let a of i.spheres)this.addSphere(a)};j.prototype.addSphere=function(i){this.spheres.push(i)};j.prototype.updateSpheres=function(i){if(this.prev_WR_position=this.WR_position,this.WR_position+=i*2.4,c.simulation.optimized)z.attributes.draw(),this.textureB.drawTo(()=>{this.textureA.bind(),z.bindDisplacementTexture(1),z.bindOldDisplacementTexture(2),this.sphereShader.uniforms({oldDisplacementTexture:2,displacementTexture:1,invPoolSizeVertex:[this.invPoolSize.x,this.invPoolSize.z],poolSize:[c.simulation.poolSize.x,c.simulation.poolSize.y,c.simulation.poolSize.z],optimized:!0}).draw(this.plane),this.textureB.swapWith(this.textureA),z.attributes.draw()});else for(let l=0;l<this.spheres.length;l++){const u=this.spheres[l];this.moveSphere(u.oldCenter,u.center,u.radius)}};j.prototype.moveSphere=function(i,a,l){var u=this;this.textureB.drawTo(function(){u.textureA.bind(),u.sphereShader.uniforms({invPoolSizeVertex:[u.invPoolSize.x,u.invPoolSize.z],oldCenter:i,newCenter:a,radius:l,poolSize:[c.simulation.poolSize.x,c.simulation.poolSize.y,c.simulation.poolSize.z],optimized:!1}).draw(u.plane)}),this.textureB.swapWith(this.textureA)};j.prototype.stepSimulation=function(){var i=this;this.textureB.drawTo(function(){i.textureA.bind(),i.updateShader.uniforms({invPoolSizeVertex:[i.invPoolSize.x,i.invPoolSize.z],delta:[i.delta.x,i.delta.y],wr:i.WR_position,prev_wr:i.prev_WR_position,poolSize:[c.simulation.poolSize.x,c.simulation.poolSize.y,c.simulation.poolSize.z],sqrt_2_PI:i.sqrt_2_PI,damping:c.simulation.waterDamping}).draw(i.plane)}),this.textureB.swapWith(this.textureA),this.updateAreaConservation()};j.prototype.updateNormals=function(){var i=this;this.textureB.drawTo(function(){i.textureA.bind(),i.normalShader.uniforms({invPoolSizeVertex:[i.invPoolSize.x,i.invPoolSize.z],delta:[i.delta.x,i.delta.y]}).draw(i.plane)}),this.textureB.swapWith(this.textureA)};j.prototype.updateAreaConservation=function(){if(!c.visualizations.areaConservationEnabled)return;var i,a,l;if(this.textureA.type===this.gl.FLOAT)i=this.gl.FLOAT,a=Float32Array,l="EXT_color_buffer_float";else if(this.textureA.type===this.gl.HALF_FLOAT_OES)i=this.gl.HALF_FLOAT_OES,a=Uint16Array,l="EXT_color_buffer_half_float";else{console.warn("Unsupported texture type for reading");return}if(!this.gl.getExtension(l)){console.warn(l+" not available; cannot read pixels");return}this.fb||(this.fb=this.gl.createFramebuffer()),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.fb),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,this.textureA.id,0);const u=this.gl.checkFramebufferStatus(this.gl.FRAMEBUFFER);if(u!==this.gl.FRAMEBUFFER_COMPLETE){console.error("Framebuffer incomplete: "+u+" for texture type "+this.textureA.type),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null);return}this.gl.pixelStorei(this.gl.PACK_ALIGNMENT,1);const _=new a(this.W*this.H*4),y=new Float32Array(this.W*this.H*4);this.gl.readPixels(0,0,this.W,this.H,this.gl.RGBA,i,_);for(let M=0;M<this.W;M++)y[M*4+1]=1;const T=c.simulation.poolSize.x/this.W,F=c.simulation.poolSize.z/this.H,B=T*T,k=F*F;if(this.textureA.type===this.gl.FLOAT){for(let M=0;M<this.H;M+=1)for(let w=0;w<this.W;w+=1){const X=(M*this.W+w)*4,H=((this.H-1-M)*this.W+w)*4,N=y[H],$=y[H+1];if(w+1<this.W){const U=_[X]-_[X+4],O=Math.sqrt(U*U+B);y[H+4]=N+O}if(M+1<this.H){const U=_[X]-_[X+this.W*4],O=Math.sqrt(U*U+k);y[H-4*this.W+1]=$+O}}this.gl.bindTexture(this.gl.TEXTURE_2D,this.areaConservationTexture.id),this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT,1),this.gl.texSubImage2D(this.gl.TEXTURE_2D,0,0,0,this.W,this.H,this.gl.RGBA,this.gl.FLOAT,y)}this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.bindTexture(this.gl.TEXTURE_2D,null)};const at=`
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
`;var le=`
  const float IOR_AIR = 1.0;
  const float IOR_WATER = 1.333;
  const vec3 abovewaterColor = vec3(0.25, 1.0, 1.25);
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
    if (point.y < info.r) {
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
    if (point.y < info.r) {
      vec4 caustic = texture(causticTex, 0.75 * (point.xz - point.y * refractedLight.xz / refractedLight.y) / poolSize.xz + 0.5);
      scale += diffuse * caustic.r * 2.0 * caustic.g;
    } else {
      /* shadow for the rim of the pool */
      vec2 t = intersectCube(point, refractedLight, vec3(-poolSize.x / 2., -poolSize.y, -poolSize.z / 2.), vec3(poolSize.x / 2., poolSize.y, poolSize.z / 2.));
      diffuse *= 1.0 / (1.0 + exp(-200.0 / (1.0 + 10.0 * (t.y - t.x)) * (point.y + refractedLight.y * t.y - 2.0 / 12.0)));
      
      scale += diffuse * 0.5;
    }
    
    return wallColor * scale;
  }
`;function ie(i,a,l,u){this.water=a,this.gl=i,this.tileTexture=g.Texture.fromImage(document.getElementById("tiles"),{minFilter:this.gl.LINEAR_MIPMAP_LINEAR,wrap:this.gl.REPEAT,format:this.gl.RGB}),this.franceTexture=g.Texture.fromImage(document.getElementById("france"),{minFilter:this.gl.LINEAR_MIPMAP_LINEAR,wrap:this.gl.REPEAT,format:this.gl.RGBA}),this.chinaTexture=g.Texture.fromImage(document.getElementById("china"),{minFilter:this.gl.LINEAR_MIPMAP_LINEAR,wrap:this.gl.REPEAT,format:this.gl.RGBA}),this.lettersTexture=g.Texture.fromImage(document.getElementById("letters"),{minFilter:this.gl.LINEAR,magFilter:this.gl.LINEAR,wrap:this.gl.REPEAT,format:this.gl.RGBA}),this.flagSize=u,this.flagSize=[1.5,1],this.flagCenter=l,this.lightDir=new g.Vector(2,2,-1).unit(),this.causticTex=new g.Texture(1024,1024),this.waterShaders=[];for(var _=0;_<2;_++)this.waterShaders[_]=new g.Shader(`
      uniform sampler2D water;
      uniform vec3 poolSizeVertexShader;
      out vec3 position;
      void main() {
        vec4 info = texture(water, gl_Vertex.xy / poolSizeVertexShader.xz + 0.5);
        position = gl_Vertex.xzy;
        position.y += info.r;
        gl_Position = gl_ModelViewProjectionMatrix * vec4(position, 1.0);
      }
    `,le+`
      uniform vec3 eye;
      in vec3 position;
      out vec4 fragColor;
      uniform bool showFlags;
      uniform bool showRanks;
      uniform bool showWR;
      uniform bool showSpeed;
      uniform bool showDivingDistance;
      uniform samplerCube sky;
      uniform bool showProjectionGrid;
      uniform bool showAreaConservedGrid;
      uniform sampler2D france;
      uniform sampler2D china;
      uniform vec2 flagSize;

      uniform bool shadowEnabled;
      uniform float shadowRadius;
      uniform float shadowPower;
      uniform bool showCircle;
      uniform float shadowCircleRadius;
      uniform float shadowCircleStroke;
      
      // Color declarations
      #define RED     vec3( 1,.3,.4)
      #define GREEN   vec3(.2, 1,.4)
      #define BLUE    vec3(.2,.8, 1)
      #define RAINBOW abs(cos(uv.x + vec3(5,6,1)))
      #define GOLD    vec3(1., 1., 0.)
      #define SILVER  vec3(.8, .8, .8)
      #define BRONZE  vec3(.75, .54, .44)
      
      
      `+Me+at+`
      makeStrF(printFrame) _num_ __ _k _m _DIV _h _endNum

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


      void drawWorldRecordLine(in vec2 position, out vec3 color) {
        if (abs(position.y + poolSize.z / 2. - wr) < .05) color = vec3(1., 1., 0.); 
      }

      void drawDivingRipples(in vec2 coord, out vec3 color) {
        vec3 divingWave = getDivingWaves(coord);
        bool toDraw = divingWave.z > 0.;
        float blending = divingWave.y;
        if (toDraw) {
          color = (1. - blending) * color + blending * vec3(0., 1., 0.);
        }
      
      }

      void drawFlags(in vec2 position, in vec2 swimmerPos, in float nationality, out vec3 color) {
        float swimmer_x = swimmerPos.x;
        float swimmer_z = swimmerPos.y;
        vec2 flagCenterNew = vec2(swimmer_x, swimmer_z - 2.5);
        // TODO nettoyer
        vec2 flagCorner = flagCenterNew - flagSize / 2.;
        
        if (areaConservation) {
          //vec2 coord = position / poolSize.xz + 0.5;
          //position = texture(areaConservationTexture, coord).xy;
          flagCorner = texture(areaConservationTexture, flagCorner / poolSize.xz + 0.5).xy;
        }
        if (showAreaConservedGrid && isOnConservedAreaGrid(position, 0.1)) color = vec3(1., 0., 0.); /* Debug conserved area grid */
        vec2 posFlag = position - flagCorner - flagSize / 2.;/*Fixes the corner of the flag on the XZ plane*/
        vec2 flagCoord = posFlag / flagSize + 0.5;
        if (showFlags && abs(posFlag.x) <= flagSize.x / 2. && abs(posFlag.y) <= flagSize.y / 2.) {
          vec3 flagColor;
          if(nationality < .5) flagColor = texture(france, vec2(1.-flagCoord.y,1.- flagCoord.x)).xyz;
          else flagColor = texture(china, vec2(1.-flagCoord.y,1.- flagCoord.x)).xyz;
          color = flagColor;
          float delta = .1;
          vec2 delta_tex = vec2(delta, delta) / flagSize;
          if (min(flagCoord.y, 1.- flagCoord.y) <= delta_tex.y 
            || min(flagCoord.x, 1. - flagCoord.x) <= delta_tex.x) color = vec3(1., 1., 1.);
        }
      }

      vec2 toTextCoord(vec2 position, float textSize) {
        position = position.yx;
        position.y += textSize / 2.;
        return position / (20. * textSize);
      }

      void drawSpeed(in vec2 position, in vec2 swimmerPosition, in float speed, out vec3 color) {
        float visSize = flagSize.x / 2.;
        vec2 visPosition = swimmerPosition - position - vec2(0., 5.);
        vec2 visCoord = toTextCoord(visPosition, visSize);
        

        vec3 visColor = GREEN/.4 * printFrame(visCoord, speed, 2);
        if (max(visColor.r, max(visColor.g, visColor.b)) > .3) color = visColor;
      }

      void drawRanks(in vec2 position, in vec2 swimmerPosition, in int rank, out vec3 color) {
        float visSize = flagSize.x / 2.;
        vec2 visPosition = swimmerPosition - position + vec2(0., 2.);
        vec2 visCoord = toTextCoord(visPosition, visSize);
        

        vec3 visColor = vec3(1., 1., 1.)*printStar(visCoord);
        if (max(visColor.r, max(visColor.g, visColor.b)) <= .3) return;
        if (rank == 0) color = GOLD * visColor;
        else if (rank == 1) color = SILVER * visColor;
        else if (rank == 2) color = BRONZE * visColor;
      }

      void drawShadows(in vec2 projectedPosition, in vec2 swimmerPosition, in float altitude, out vec3 color) {
        if (!shadowEnabled || abs(altitude) < .15) return;
        vec2 diff = (projectedPosition - swimmerPosition);
        vec2 diffNormalized = diff/shadowRadius;
        float distSq = dot(diffNormalized, diffNormalized);
        float attenuation = min(1., pow(distSq, shadowPower));
        float altitudeAttenuation = min(1., abs(altitude));
        attenuation = 1.-(1.-attenuation)*altitudeAttenuation;
        color *= attenuation;
        if (!showCircle) return;
        distSq = dot(diff, diff);
        color += max(0.,1.-abs((shadowCircleRadius - distSq)/shadowCircleStroke)) * vec3(1., 1., 0.) * altitudeAttenuation;
      }

      void drawVisualizations(in vec2 position, out vec3 color) {
        vec2 projectedPosition = position;
        vec2 coord = position / poolSize.xz + .5;
        if (showDivingDistance) drawDivingRipples(coord, color);
        for (int i = 0; i < 10; i++) {
          float i_float = float(i);
          if (i_float > swimmersNumber - 0.1) break;
          vec2 swimmerPos = getAttributePosition(i);
          if (showProjectionGrid && isOnConservedAreaGrid(position, 0.1)) color = vec3(1., 1., 0.); /* Debug conserved area grid */
          if (showWR) drawWorldRecordLine(position, color); 
          if (areaConservation) {
            vec2 coord = position / poolSize.xz + 0.5;
            position = texture(areaConservationTexture, coord).xy;
          }
          drawFlags(position, swimmerPos, getNationality(i), color);

          if (showSpeed) drawSpeed(position, swimmerPos, getAttributeSpeed(i), color);
          if (showRanks) drawRanks(projectedPosition, swimmerPos, i, color);
          if (shadowEnabled) drawShadows(projectedPosition, swimmerPos, getAltitude(i), color);
        }
      
      }


      vec3 getSurfaceRayColor(vec3 origin, vec3 ray, vec3 waterColor) {
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
            color += vec3(pow(max(0.0, dot(light, ray)), 5000.0)) * vec3(10.0, 8.0, 6.0);
          }
        }
        if (ray.y < 0.0) {
          color *= waterColor;
          if (showFlags || showWR || showRanks || showSpeed || showDivingDistance) drawVisualizations(origin.xz, color);
          
          
        }
        return color;
      }
      
      void main() {
        vec2 coord = position.xz / poolSize.xz + 0.5;
        vec4 info = texture(water, coord);
        /* make water look more "peaked" */
        /*for (int i = 0; i < 5; i++) {
          coord += info.ba * 0.005;
          info = texture(water, coord);
        }*/
        
        vec3 normal = vec3(info.b, sqrt(1.0 - dot(info.ba, info.ba)), info.a);
        vec3 incomingRay = normalize(position - eye);
        
        `+(_?`
          normal = -normal;
          vec3 reflectedRay = reflect(incomingRay, normal);
          vec3 refractedRay = refract(incomingRay, normal, IOR_WATER / IOR_AIR);
          float fresnel = mix(0.5, 1.0, pow(1.0 - dot(normal, -incomingRay), 3.0));
          
          vec3 reflectedColor = getSurfaceRayColor(position, reflectedRay, underwaterColor);
          vec3 refractedColor = getSurfaceRayColor(position, refractedRay, vec3(1.0)) * vec3(0.8, 1.0, 1.1);
          
          fragColor = vec4(mix(reflectedColor, refractedColor, (1.0 - fresnel) * length(refractedRay)), 1.0);
        `:`
          vec3 reflectedRay = reflect(incomingRay, normal);
          vec3 refractedRay = refract(incomingRay, normal, IOR_AIR / IOR_WATER);
          float fresnel = mix(0.25, 1.0, pow(1.0 - dot(normal, -incomingRay), 3.0));
          
          vec3 reflectedColor = getSurfaceRayColor(position, reflectedRay, abovewaterColor);
          vec3 refractedColor = getSurfaceRayColor(position, refractedRay, abovewaterColor);
          
          fragColor = vec4(mix(refractedColor, reflectedColor, fresnel), 1.0);
        `)+`
      }
    `);this.sphereMesh=g.Mesh.sphere({detail:10}),this.sphereShader=new g.Shader(le+`
    out vec3 position;
  void main() {
    position = sphereCenter + gl_Vertex.xyz * sphereRadius;
    gl_Position = gl_ModelViewProjectionMatrix * vec4(position, 1.0);
  }
  `,le+`
    in vec3 position;
    out vec4 fragColor;
  void main() {
    fragColor = vec4(getSphereColor(position), 1.0);
      vec4 info = texture(water, position.xz / poolSize.xz + 0.5);
    if (position.y < info.r) {
      fragColor.rgb *= underwaterColor * 1.2;
    }
  }
  `),this.reset(),this.cubeShader=new g.Shader(le+`
    out vec3 position;
  void main() {
    position = gl_Vertex.xyz;
    position.y = ((1.0 - position.y) * (7.0 / 12.0) - 1.0) * poolSize.y;
    gl_Position = gl_ModelViewProjectionMatrix * vec4(position, 1.0);
  }
  `,le+`
    in vec3 position;
    out vec4 fragColor;
  void main() {
    fragColor = vec4(getWallColor(position), 1.0);
      vec4 info = texture(water, position.xz / poolSize.xz + 0.5);
    if (position.y < info.r) {
      fragColor.rgb *= underwaterColor * 1.2;
    }
  }
  `),this.sphereCenter=new g.Vector,this.sphereRadius=0;var y=!!this.gl.getExtension("OES_standard_derivatives");this.causticsShader=new g.Shader(le+`
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
  `,(y?`#extension GL_OES_standard_derivatives: enable
`:"")+`
  `+le+`
    in vec3 oldPos;
    in vec3 newPos;
    in vec3 ray;
    out vec4 fragColor;

  void main() {
    `+(y?`
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
  `)}ie.prototype.reset=function(){this.cubeMesh=g.Mesh.cube({width:c.simulation.poolSize.x,height:2,depth:c.simulation.poolSize.z}),this.cubeMesh.triangles.splice(4,2),this.cubeMesh.compile()};ie.prototype.updateCaustics=function(i){};ie.prototype.renderWater=function(i,a,l,u,_){var y=new g.Raytracer;i.textureA.bind(0),this.tileTexture.bind(1),a.bind(2),this.causticTex.bind(3),this.franceTexture.bind(4),this.chinaTexture.bind(8),this.lettersTexture.bind(7),i.areaConservationTexture.bind(5);const T=z.getAttributesTexture();T&&T.bind(6),this.gl.enable(this.gl.CULL_FACE);for(var F=0;F<2;F++)this.gl.cullFace(F?this.gl.BACK:this.gl.FRONT),this.waterShaders[F].uniforms({light:this.lightDir,water:0,tiles:1,sky:2,causticTex:3,france:4,china:8,areaConservationTexture:5,swimmersAttributesTexture:6,iChannel0:7,areaConservation:c.visualizations.areaConservationEnabled,flagSize:[1.5,2],flagCenter:[this.flagCenter.x,this.flagCenter.y],poolSize:[c.simulation.poolSize.x,c.simulation.poolSize.y,c.simulation.poolSize.z],poolSizeVertexShader:[c.simulation.poolSize.x,c.simulation.poolSize.y,c.simulation.poolSize.z],eye:y.eye,sphereCenter:this.sphereCenter,sphereRadius:this.sphereRadius,showProjectionGrid:i.showProjectionGrid,showAreaConservedGrid:i.showAreaConservedGrid,wr:i.WR_position,swimmersNumber:l.length,showFlags:c.visualizations.showFlags,showRanks:c.visualizations.showRanks,showWR:c.visualizations.showWR,showSpeed:c.visualizations.showSpeed,showDivingDistance:c.visualizations.showDivingDistance,time:u,shadowEnabled:_.enabled,shadowRadius:_.shadowRadius,shadowPower:_.shadowPower,showCircle:_.showCircle,shadowCircleRadius:_.circleRadius,shadowCircleStroke:_.circleStroke}).draw(i.plane);this.gl.disable(this.gl.CULL_FACE)};ie.prototype.renderSpheres=function(i){for(let a of i.spheres)this.renderSphere(i,a)};ie.prototype.renderSphere=function(i,a){i.textureA.bind(0),this.causticTex.bind(1),this.sphereShader.uniforms({light:this.lightDir,water:0,causticTex:1,sphereCenter:[a.center.x,a.center.y,a.center.z],sphereRadius:a.radius,poolSize:[c.simulation.poolSize.x,c.simulation.poolSize.y,c.simulation.poolSize.z]}).draw(a.mesh)};ie.prototype.renderSphereOld=function(i){i.textureA.bind(0),this.causticTex.bind(1),this.sphereShader.uniforms({light:this.lightDir,water:0,causticTex:1,sphereCenter:this.sphereCenter,sphereRadius:this.sphereRadius,poolSize:[c.simulation.poolSize.x,c.simulation.poolSize.y,c.simulation.poolSize.z]}).draw(this.sphereMesh)};ie.prototype.renderCube=function(i){this.gl.enable(this.gl.CULL_FACE),i.textureA.bind(0),this.tileTexture.bind(1),this.causticTex.bind(2),this.cubeShader.uniforms({light:this.lightDir,water:0,tiles:1,causticTex:2,sphereCenter:this.sphereCenter,sphereRadius:this.sphereRadius,poolSize:[c.simulation.poolSize.x,c.simulation.poolSize.y,c.simulation.poolSize.z]}).draw(this.cubeMesh),this.gl.disable(this.gl.CULL_FACE)};function De(i,a){this.gl=a,this.id=a.createTexture(),a.bindTexture(a.TEXTURE_CUBE_MAP,this.id),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,1),a.texParameteri(a.TEXTURE_CUBE_MAP,a.TEXTURE_MAG_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_CUBE_MAP,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_CUBE_MAP,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_CUBE_MAP,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE),a.texImage2D(a.TEXTURE_CUBE_MAP_NEGATIVE_X,0,a.RGB,a.RGB,a.UNSIGNED_BYTE,i.xneg),a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X,0,a.RGB,a.RGB,a.UNSIGNED_BYTE,i.xpos),a.texImage2D(a.TEXTURE_CUBE_MAP_NEGATIVE_Y,0,a.RGB,a.RGB,a.UNSIGNED_BYTE,i.yneg),a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_Y,0,a.RGB,a.RGB,a.UNSIGNED_BYTE,i.ypos),a.texImage2D(a.TEXTURE_CUBE_MAP_NEGATIVE_Z,0,a.RGB,a.RGB,a.UNSIGNED_BYTE,i.zneg),a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_Z,0,a.RGB,a.RGB,a.UNSIGNED_BYTE,i.zpos)}De.prototype.bind=function(i){this.gl.activeTexture(this.gl.TEXTURE0+(i||0)),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,this.id)};De.prototype.unbind=function(i){this.gl.activeTexture(this.gl.TEXTURE0+(i||0)),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,null)};const Xe=200,st=`
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
#define MAX_SPARKS `+Xe+`
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

`;class lt{constructor(a,l){if(this.gl=a,this.copyVideo=!1,this.show=!1,a===null){alert("Unable to initialize WebGL. Your browser or machine may not support it.");return}a.clearColor(0,0,0,1),a.clear(a.COLOR_BUFFER_BIT),this.shader=new g.Shader(`
    out highp vec2 vTextureCoord;
    out vec3 waterNormal;
    out vec3 sparkPlaneNormal;
    out vec3 sparkDirection;

    void main(void) {
        gl_Position = vec4(gl_Vertex.xz, 0., 1.);
        waterNormal = (gl_ModelViewMatrix * vec4(0., 1., 0., 0.)).xyz;
        sparkPlaneNormal = (gl_ModelViewMatrix * vec4(-1., 0., 0., 0.)).xyz;
        sparkDirection = (gl_ModelViewMatrix * vec4(0., 0., 1., 0.)).xyz;
        vTextureCoord = gl_TexCoord.st;
    }
`,`
    in highp vec2 vTextureCoord;
    in vec3 waterNormal;
    in vec3 sparkPlaneNormal;
    in vec3 sparkDirection;
    out vec4 fragColor;

    uniform sampler2D uSampler;
    uniform bool sparksEnabled;
    uniform vec3 poolSize;

    `+st+Me+`

    void main(void) {
        highp vec4 texelColor = texture(uSampler, vTextureCoord);
        fragColor = vec4(texelColor.rgb, 0.5);
        if (!sparksEnabled) return;
        vec3 spark1 = sparks(gl_FragCoord.xy, vec3(2., 1., -poolSize.z / 2.), .1);
        vec3 spark2 = sparks(gl_FragCoord.xy, vec3(-2., 1., -poolSize.z / 2.), .1);
        vec3 spark = vec3(0., 0., 0.);
        // spark = spark1 + spark2;
        for (int i = 0; i < 10; i++) {
            float i_float = float(i);
            vec3 sparkPos = vec3(25. / 2. - 25. / 10. / 2. - i_float * 25./10., 1., -25.);
            float reactionTime = getAttributeReactionTime(i);
            spark += sparks(gl_FragCoord.xy, sparkPos, reactionTime);
        }
        // fragColor = vec4(mix(fragColor.rgb, spark, .5), max(0.5, 2.*length(spark)));
        fragColor = vec4(mix(fragColor.rgb, spark, 2.*length(spark)), max(0.5, 2.*length(spark)));
        // fragColor = vec4(fragColor.rgb + spark, max(0.5, 2.*length(spark)));
        // float m = max(fragColor.r, max(fragColor.g, fragColor.b));
        // if (m > 1.) fragColor.rgb /= m;
        // fragColor = vec4(spark, 2.*length(spark));
        // fragColor = vec4(1, 0, 0, 1);
    }
`),this.mesh=g.Mesh.plane({width:2,height:2,coords:!0,normals:!0}),this.mesh.transform(g.Matrix.rotate(90,1,0,0)),this.mesh.transform(g.Matrix.translate(0,.1,0)),this.programInfo=null,this.texture=this.initTexture(),this.video=this.setupVideo(l),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!0)}render(a){const l=c.visualizations.sparks,u=c.simulation.poolSize;c.visualizations.video.show&&(this.copyVideo&&this.updateTexture(),(!this.mesh.vertexBuffers||!this.mesh.vertexBuffers.vertex)&&this.mesh.compile(),this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture),z.swimmersAttributesTexture&&z.swimmersAttributesTexture.bind(1),this.shader.uniforms({uSampler:0,swimmersHelperFunctions:1,iTime:a,poolSize:[u.x,u.y,u.z],iResolution:[this.gl.canvas.width,this.gl.canvas.height],sparksEnabled:l.enabled,sparksGlow:l.glow,sparksGlowOffset:l.glowOffset,sparksStroke:l.stroke,sparksNumber:l.num,sparksLengthFactor:l.lengthFactor,sparksSizeFactor:l.sizeFactor,fov:l.fov}).draw(this.mesh),this.gl.disable(this.gl.BLEND))}initTexture(){const a=this.gl.createTexture();this.gl.bindTexture(this.gl.TEXTURE_2D,a);const l=0,u=this.gl.RGBA,_=1,y=1,T=0,F=this.gl.RGBA,B=this.gl.UNSIGNED_BYTE,k=new Uint8Array([0,0,255,255]);return this.gl.texImage2D(this.gl.TEXTURE_2D,l,u,_,y,T,F,B,k),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),a}updateTexture(){const l=this.gl.RGBA,u=this.gl.RGBA,_=this.gl.UNSIGNED_BYTE;this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture),this.gl.texImage2D(this.gl.TEXTURE_2D,0,l,u,_,this.video)}setupVideo(a){const l=document.createElement("video");let u=!1,_=!1;l.playsInline=!0,l.muted=!0,l.loop=!0,l.addEventListener("playing",()=>{u=!0,T()},!0),l.addEventListener("timeupdate",()=>{_=!0,T()},!0),l.src=a,l.play();const y=this,T=()=>{u&&_&&(y.copyVideo=!0)};return l}}const Te=new Ke,ct=function(i,a){const l=Te.addFolder("visualizations");l.close(),l.add(c.visualizations,"showFlags").name("show flags").listen(),l.add(c.visualizations,"showWR").name("show world record").listen(),l.add(c.visualizations,"showSpeed").name("show speed").listen(),l.add(c.visualizations,"showRanks").name("show ranks").listen(),l.add(c.visualizations,"showDivingDistance").name("show diving distance").listen(),l.add(c.visualizations.shadow,"enabled").name("show shadow"),l.add(c.visualizations,"areaConservationEnabled","areaConservationEnabled").name("area conservation").listen();const u=l.addFolder("video");u.close(),u.add(c.visualizations.video,"show").name("show").listen();const _=l.addFolder("Sparks");_.close(),_.add(c.visualizations.sparks,"enabled").name("sparks enabled"),_.add(c.visualizations.sparks,"glow",1,30).name("sparks glow factor"),_.add(c.visualizations.sparks,"lengthFactor",.1,10).name("sparks length factor"),_.add(c.visualizations.sparks,"glowOffset",.1,3).name("sparks glow offset"),_.add(c.visualizations.sparks,"stroke",.001,.05).name("sparks stroke"),_.add(c.visualizations.sparks,"num",10,Xe).step(1).name("sparks number"),_.add(c.visualizations.sparks,"sizeFactor",10,100).name("size factor");const y=l.addFolder("Swimmers shadows");y.close(),y.add(c.visualizations.shadow,"shadowRadius",0,2).name("shadow radius"),y.add(c.visualizations.shadow,"shadowPower",.1,2).name("shadow power"),y.add(c.visualizations.shadow,"showCircle").name("circle"),y.add(c.visualizations.shadow,"circleRadius",.5,2).name("circle radius"),y.add(c.visualizations.shadow,"circleStroke",.1,.5).name("circle stroke");const T=Te.addFolder("Simulation");T.close(),T.add(c.simulation,"optimized").name("optimized"),T.add(c.simulation.poolSize,"x",1,25).name("pool width").onChange(function(B){a()}).listen(),T.add(c.simulation.poolSize,"z",1,50).name("pool height").onChange(function(B){a()}).listen(),T.add(c.simulation.poolSize,"y",1,3).name("pool depth").onChange(function(B){a()}).listen(),T.add(c.simulation,"waterDamping",.005,.15).name("water damping").listen();const F=Te.addFolder("camera");F.close(),F.add(c,"focal",28,45).name("focal").listen().onChange(function(B){c.visualizations.sparks.fov=B*2*Math.PI/360,i.matrixMode(i.PROJECTION),i.loadIdentity(),i.perspective(c.focal,i.canvas.width/i.canvas.height,.01,100),i.matrixMode(i.MODELVIEW),console.log("perspective : "+c.focal)})};function ft(i){return i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n/g,"<br>")}function dt(i){var a=ft(i);a=="WebGL not supported"&&(a='Your browser does not support WebGL.<br>Please see    <a href="http://www.khronos.org/webgl/wiki/Getting_a_WebGL_Implementation">    Getting a WebGL Implementation</a>.');var l=document.getElementById("loading");l.innerHTML=a,l.style.zIndex=1}window.onerror=dt;var S=g.create(),A,Ne,G;const I=[],Fe=10;var ue=-25,_e=-200.5,xe=0;let be=0,Re=0;var he=4;const Oe=17;let me=0,ge=0;var Q=!1,we,Pe;z.initAttributes(S);let L=new g.Vector(256,256);function He(){document.getElementById("warning").hidden=!(L.x*L.y>3e5&&A&&c.visualizations.areaConservationEnabled)}let Se=0;function ut(i){Se+=i,Se>=1&&(document.getElementById("fps").innerText=`${(1/i).toFixed(1)} FPS`,Se=0)}function ce(){console.log("reset"),document.getElementById("resolution").innerText=`Resolution: ${L.x} x ${L.y}`,He(),we=new g.Vector(0,-c.simulation.poolSize.z/2+1),A.reset(L),G.flagCenter=we,G.flagSize=Pe,G.reset();const i=c.simulation.poolSize.x/Fe;let a=-c.simulation.poolSize.x/2+i/2;for(let l of I)l.body.center.x=a,l.startingPoint.x=a,a+=i}window.onload=function(){var i=window.devicePixelRatio||1,a=document.getElementById("help");function l(){var n=innerWidth,s=innerHeight;S.canvas.width=n*i,S.canvas.height=s*i,S.canvas.style.width=n+"px",S.canvas.style.height=s+"px",S.viewport(0,0,S.canvas.width,S.canvas.height),S.matrixMode(S.PROJECTION),S.loadIdentity(),S.perspective(c.focal,S.canvas.width/S.canvas.height,.01,100),S.matrixMode(S.MODELVIEW),o()}document.body.appendChild(S.canvas),S.canvas.oncontextmenu=function(n){n.preventDefault()},S.clearColor(0,0,0,1),we=new g.Vector(0,-c.simulation.poolSize.z/2+1),Pe=.7,A=new j(S);const u=new lt(S,"./video.mp4"),_=document.getElementById("drop-zone");let y=0;if(document.addEventListener("dragenter",n=>{y++,_.style.display="flex"}),document.addEventListener("dragover",n=>{n.preventDefault(),n.dataTransfer.dropEffect="copy"}),document.addEventListener("dragleave",n=>{y--,y===0&&(_.style.display="none")}),document.addEventListener("drop",n=>{n.preventDefault(),y=0,_.style.display="none";const s=n.dataTransfer.files;if(s.length>0&&(s[0].type.startsWith("video/")||s[0].name.endsWith(".mp4"))){const d=URL.createObjectURL(s[0]);u.video.src=d,u.video.play(),console.log("Loaded:",s[0].name)}}),ct(S,ce),G=new ie(S,A,we,Pe),Ne=new De({xneg:document.getElementById("xneg"),xpos:document.getElementById("xpos"),yneg:document.getElementById("ypos"),ypos:document.getElementById("ypos"),zneg:document.getElementById("zneg"),zpos:document.getElementById("zpos")},S),!A.textureA.canDrawTo()||!A.textureB.canDrawTo())throw new Error("Rendering to floating-point textures is required but not supported");const T=new g.Vector(-.4,-.75,.2),F=new g.Vector(.4,-.75,.2),B=new z(T);new z(F);for(let n=0;n<1;n++)I.push(new z(T));const k=B.body.radius;for(let n of I)A.addSwimmer(n);ce();for(var M=0;M<20;M++)A.addDrop(Math.random()*2-1,Math.random()*2-1,.06,M&1?.01:-.01);document.getElementById("loading").innerHTML="",l();var w=window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(n){setTimeout(n,0)},X=new Date().getTime();function H(){var n=new Date().getTime();Q||(e((n-X)/1e3),o()),X=n,w(H)}w(H),window.onresize=l;var N,$,U,O=-1,ee=0,re=1,oe=2;const fe=3;var ne,de;function V(n,s,d){if(ne=n,de=s,!d||d.button===0){var f=new g.Raytracer,v=f.getRayForPixel(n*i,s*i),m=f.eye.add(v.multiply(-f.eye.y/v.y));for(let x of I){var h=g.Raytracer.hitTestSphere(f.eye,v,x.body.center,x.body.radius);if(h){O=re,U=x,x.body.cinematic=!0,N=h.hit,$=f.getRayForPixel(S.canvas.width/2,S.canvas.height/2).negative();return}}Math.abs(m.x)<c.simulation.poolSize.x/2&&Math.abs(m.z)<c.simulation.poolSize.z/2&&(O=ee,K(n,s))}else d.button===2?O=oe:d.button===1&&(O=fe)}function K(n,s,d){switch(O){case ee:{var f=new g.Raytracer,v=f.getRayForPixel(n*i,s*i),m=f.eye.add(v.multiply(-f.eye.y/v.y));A.addDrop(m.x/c.simulation.poolSize.x*2,m.z/c.simulation.poolSize.z*2,.06,.03),Q&&(A.updateNormals(),G.updateCaustics(A));break}case re:{var f=new g.Raytracer,v=f.getRayForPixel(n*i,s*i),h=-$.dot(f.eye.subtract(N))/$.dot(v),x=f.eye.add(v.multiply(h));const R=U.body.center.add(x.subtract(N)),C=U.body.radius,P=Math.max(C-c.simulation.poolSize.x/2,Math.min(c.simulation.poolSize.x/2-C,R.x)),Z=Math.max(C-c.simulation.poolSize.y,Math.min(10,R.y)),se=Math.max(C-c.simulation.poolSize.z/2,Math.min(c.simulation.poolSize.z/2-C,R.z));U.body.move(new g.Vector(P,Z,se)),N=x,Q&&G.updateCaustics(A);break}case oe:{if(d&&d.shiftKey){xe-=n-ne,xe=Math.max(-89.999,Math.min(89.999,xe));break}_e-=n-ne,ue-=s-de,ue=Math.max(-89.999,Math.min(89.999,ue));break}case fe:{const b=.001*he;be+=b*(n-ne),Re-=b*(s-de)}}ne=n,de=s,Q&&o()}function q(){O=-1,U&&(U.body.cinematic=!z.useGravity)}function ae(n){return n===a||n.parentNode&&ae(n.parentNode)}function p(n){he*=1-n*4e-4,he=Math.max(2,Math.min(1e3,he)),Q&&o()}addEventListener("wheel",function(n){var s=n.deltaY;p(-s)}),document.onmousedown=function(n){ae(n.target)||(n.preventDefault(),V(n.pageX,n.pageY,n))},document.onmousemove=function(n){K(n.pageX,n.pageY,n)},document.onmouseup=function(){q()},document.ontouchstart=function(n){n.touches.length===1&&!ae(n.target)&&(n.preventDefault(),V(n.touches[0].pageX,n.touches[0].pageY,!1))},document.ontouchmove=function(n){n.touches.length===1&&K(n.touches[0].pageX,n.touches[0].pageY)},document.ontouchend=function(n){n.touches.length==0&&q()};function t(){z.raceHasStarted=!0;for(let n of I)n.started=!1}function r(){z.raceHasStarted=!1;for(let n of I)n.swim(!1)}document.onkeydown=function(n){if(n.which==32)Q=!Q;else if(n.which==71){for(let s of I)s.body.cinematic=!s.body.cinematic;z.useGravity=!z.useGravity}else if(n.which==76&&Q)o();else if(n.which==74)jump();else if(n.which==67)c.visualizations.areaConservationEnabled=!c.visualizations.areaConservationEnabled,He(),console.log("Area conservation "+(c.visualizations.areaConservationEnabled?"enabled.":"disabled."));else if(n.which==80)A.showProjectionGrid=!A.showProjectionGrid,console.log("Projection grid "+(A.showProjectionGrid?"enabled.":"disabled."));else if(n.which==65)A.showAreaConservedGrid=!A.showAreaConservedGrid,console.log("Area conserved grid "+(A.showAreaConservedGrid?"enabled.":"disabled."));else if(n.which==83){if(z.swimming=!z.swimming,z.swimming)for(let s of I)s.swim(!0);else r();console.log("Swimming "+(z.swimming?"enabled.":"disabled."))}else if(n.which==86)c.visualizations.video.show=!c.visualizations.video.show;else if(n.which==79){if(c.simulation.poolSize.x=25,c.simulation.poolSize.y=2,c.simulation.poolSize.z=50,L.x=1024,L.y=2048,c.visualizations.areaConservationEnabled=!1,c.simulation.waterDamping=.1,I.length!=Fe)for(let s=I.length;s<Fe;s++){const d=new z(T);I.push(d),A.addSwimmer(d)}me=0,u.copyVideo&&(u.video.currentTime=me),ce(),c.focal=31.75,c.visualizations.sparks.fov=c.focal*2*Math.PI/360,S.matrixMode(S.PROJECTION),S.loadIdentity(),S.perspective(c.focal,S.canvas.width/S.canvas.height,.01,100),S.matrixMode(S.MODELVIEW),be=-.42,Re=1.18,he=52.5,ue=-24,_e=-261.5,xe=-4,console.log("Olympic mode enabled.")}else if(n.which==87){if(z.raceHasStarted){z.raceHasStarted=!1,r();return}A.WR_position=0,me=Oe,u.copyVideo&&(u.video.currentTime=me),t(),z.useGravity=!0;for(let s of I)s.hasDove=!1}else n.which==72?(document.getElementById("commands").hidden=!document.getElementById("commands").hidden,document.getElementById("h").hidden=!document.getElementById("h").hidden):n.which==40?(L.x>129&&(L.x=Math.round(L.x/2)),ce(),console.log("decreasing x resolution")):n.which==38?(L.x<16384&&(L.x=Math.round(L.x*2)),ce(),console.log("increasing x resolution")):n.which==37?(L.y>129&&(L.y=Math.round(L.y/2)),ce(),console.log("decreasing y resolution")):n.which==39&&(L.y<16384&&(L.y=Math.round(L.y*2)),ce(),console.log("increasing y resolution"))};function e(n,s){if(!(n>1)){if(O==re)for(let d of I)d.body.velocity=new g.Vector(0,0,0);ge=me-Oe;for(let d of I)d.update(n,ge);A.updateSpheres(n);for(let d=0;d<c.numSteps;d++)A.stepSimulation();G.updateCaustics(A),me+=n,ut(n)}}function o(n){g.keys.L&&(G.lightDir=g.Vector.fromAngles((90-_e)*Math.PI/180,-ue*Math.PI/180),Q&&G.updateCaustics(A)),c.isOneVisualizationEnabled()&&z.updateAttributesTexture(I),A.addOrRemoveVisualizationWaves(!0,I,ge),A.updateNormals(),S.clear(S.COLOR_BUFFER_BIT|S.DEPTH_BUFFER_BIT),S.loadIdentity(),S.translate(be,Re,-he),S.rotate(-xe,0,0,1),S.rotate(-ue,1,0,0),S.rotate(-_e,0,1,0),S.translate(0,.5,0),S.enable(S.DEPTH_TEST),G.sphereCenter=I[0].body.center,G.sphereRadius=k,G.renderCube(A),G.renderWater(A,Ne,I,ge,c.visualizations.shadow),G.renderSpheres(A),u.render(ge),S.disable(S.DEPTH_TEST),A.addOrRemoveVisualizationWaves(!1,I,ge)}};
//# sourceMappingURL=swimming-D9LfC_ky.js.map
