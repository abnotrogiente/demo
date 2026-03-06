var je=Object.defineProperty;var De=i=>{throw TypeError(i)};var Ke=(i,a,l)=>a in i?je(i,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):i[a]=l;var K=(i,a,l)=>Ke(i,typeof a!="symbol"?a+"":a,l),Ze=(i,a,l)=>a.has(i)||De("Cannot "+l);var Le=(i,a,l)=>a.has(i)?De("Cannot add the same private member more than once"):a instanceof WeakSet?a.add(i):a.set(i,l);var te=(i,a,l)=>(Ze(i,a,"access private method"),l);import"./modulepreload-polyfill-B5Qt9EMX.js";import{g as Je}from"./lil-gui.module.min-Vka56b52.js";var p=function(){var i,a={create:function(t){t=t||{};var r=document.createElement("canvas");r.width=800,r.height=600,"alpha"in t||(t.alpha=!1);try{i=r.getContext("webgl2",t)}catch{}try{i=i||r.getContext("experimental-webgl",t)}catch{}if(!i)throw new Error("WebGL not supported");return i.HALF_FLOAT_OES=36193,l(),f(),x(),I(),i},keys:{},Matrix:T,Indexer:W,Buffer:X,Mesh:N,HitTest:B,Raytracer:ee,Shader:de,Texture:U,Vector:v};function l(){i.MODELVIEW=L|1,i.PROJECTION=L|2;var t=new T,r=new T;i.modelviewMatrix=new T,i.projectionMatrix=new T;var e=[],o=[],n,h;i.matrixMode=function(c){switch(c){case i.MODELVIEW:n="modelviewMatrix",h=e;break;case i.PROJECTION:n="projectionMatrix",h=o;break;default:throw new Error("invalid matrix mode "+c)}},i.loadIdentity=function(){T.identity(i[n])},i.loadMatrix=function(c){for(var d=c.m,g=i[n].m,m=0;m<16;m++)g[m]=d[m]},i.multMatrix=function(c){i.loadMatrix(T.multiply(i[n],c,r))},i.perspective=function(c,d,g,m){i.multMatrix(T.perspective(c,d,g,m,t))},i.frustum=function(c,d,g,m,u,w){i.multMatrix(T.frustum(c,d,g,m,u,w,t))},i.ortho=function(c,d,g,m,u,w){i.multMatrix(T.ortho(c,d,g,m,u,w,t))},i.scale=function(c,d,g){i.multMatrix(T.scale(c,d,g,t))},i.translate=function(c,d,g){i.multMatrix(T.translate(c,d,g,t))},i.rotate=function(c,d,g,m){i.multMatrix(T.rotate(c,d,g,m,t))},i.lookAt=function(c,d,g,m,u,w,E,y,S){i.multMatrix(T.lookAt(c,d,g,m,u,w,E,y,S,t))},i.pushMatrix=function(){h.push(Array.prototype.slice.call(i[n].m))},i.popMatrix=function(){var c=h.pop();i[n].m=F?new Float32Array(c):c},i.project=function(c,d,g,m,u,w){m=m||i.modelviewMatrix,u=u||i.projectionMatrix,w=w||i.getParameter(i.VIEWPORT);var E=u.transformPoint(m.transformPoint(new v(c,d,g)));return new v(w[0]+w[2]*(E.x*.5+.5),w[1]+w[3]*(E.y*.5+.5),E.z*.5+.5)},i.unProject=function(c,d,g,m,u,w){m=m||i.modelviewMatrix,u=u||i.projectionMatrix,w=w||i.getParameter(i.VIEWPORT);var E=new v((c-w[0])/w[2]*2-1,(d-w[1])/w[3]*2-1,g*2-1);return T.inverse(T.multiply(u,m,t),r).transformPoint(E)},i.matrixMode(i.MODELVIEW)}function f(){var t={mesh:new N({coords:!0,colors:!0,triangles:!1}),mode:-1,coord:[0,0,0,0],color:[1,1,1,1],shader:new de("      uniform float pointSize;      out vec4 color;      out vec4 coord;      void main() {        color = gl_Color;        coord = gl_TexCoord;        gl_Position = gl_ModelViewProjectionMatrix * gl_Vertex;        gl_PointSize = pointSize;      }    ","      uniform sampler2D tex;      uniform float pointSize;      uniform bool useTexture;      in vec4 color;      in vec4 coord;      out vec4 fragColor;      void main() {        fragColor = color;        if (useTexture) fragColor *= texture(tex, coord.xy);      }    ")};i.pointSize=function(r){t.shader.uniforms({pointSize:r})},i.begin=function(r){if(t.mode!=-1)throw new Error("mismatched gl.begin() and gl.end() calls");t.mode=r,t.mesh.colors=[],t.mesh.coords=[],t.mesh.vertices=[]},i.color=function(r,e,o,n){t.color=arguments.length==1?r.toArray().concat(1):[r,e,o,n||1]},i.texCoord=function(r,e){t.coord=arguments.length==1?r.toArray(2):[r,e]},i.vertex=function(r,e,o){t.mesh.colors.push(t.color),t.mesh.coords.push(t.coord),t.mesh.vertices.push(arguments.length==1?r.toArray():[r,e,o])},i.end=function(){if(t.mode==-1)throw new Error("mismatched gl.begin() and gl.end() calls");t.mesh.compile(),t.shader.uniforms({useTexture:!!i.getParameter(i.TEXTURE_BINDING_2D)}).draw(t.mesh,t.mode),t.mode=-1}}function x(){var t=i,r=0,e=0,o={},n=!1,h=Object.prototype.hasOwnProperty;function c(){for(var y in o)if(h.call(o,y)&&o[y])return!0;return!1}function d(y){var S={};for(var M in y)typeof y[M]=="function"?S[M]=function(G){return function(){G.apply(y,arguments)}}(y[M]):S[M]=y[M];S.original=y,S.x=S.pageX,S.y=S.pageY;for(var P=i.canvas;P;P=P.offsetParent)S.x-=P.offsetLeft,S.y-=P.offsetTop;return n?(S.deltaX=S.x-r,S.deltaY=S.y-e):(S.deltaX=0,S.deltaY=0,n=!0),r=S.x,e=S.y,S.dragging=c(),S.preventDefault=function(){S.original.preventDefault()},S.stopPropagation=function(){S.original.stopPropagation()},S}function g(y){i=t,c()||(b(document,"mousemove",m),b(document,"mouseup",u),C(i.canvas,"mousemove",m),C(i.canvas,"mouseup",u)),o[y.which]=!0,y=d(y),i.onmousedown&&i.onmousedown(y),y.preventDefault()}function m(y){i=t,y=d(y),i.onmousemove&&i.onmousemove(y),y.preventDefault()}function u(y){i=t,o[y.which]=!1,c()||(C(document,"mousemove",m),C(document,"mouseup",u),b(i.canvas,"mousemove",m),b(i.canvas,"mouseup",u)),y=d(y),i.onmouseup&&i.onmouseup(y),y.preventDefault()}function w(){n=!1}function E(){o={},n=!1}b(i.canvas,"mousedown",g),b(i.canvas,"mousemove",m),b(i.canvas,"mouseup",u),b(i.canvas,"mouseover",w),b(i.canvas,"mouseout",w),b(document,"contextmenu",E)}function _(t){var r={8:"BACKSPACE",9:"TAB",13:"ENTER",16:"SHIFT",27:"ESCAPE",32:"SPACE",37:"LEFT",38:"UP",39:"RIGHT",40:"DOWN"};return r[t]||(t>=65&&t<=90?String.fromCharCode(t):null)}function b(t,r,e){t.addEventListener(r,e)}function C(t,r,e){t.removeEventListener(r,e)}b(document,"keydown",function(t){if(!t.altKey&&!t.ctrlKey&&!t.metaKey){var r=_(t.keyCode);r&&(a.keys[r]=!0),a.keys[t.keyCode]=!0}}),b(document,"keyup",function(t){if(!t.altKey&&!t.ctrlKey&&!t.metaKey){var r=_(t.keyCode);r&&(a.keys[r]=!1),a.keys[t.keyCode]=!1}});function I(){(function(t){i.makeCurrent=function(){i=t}})(i),i.animate=function(){var t=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(n){setTimeout(n,16.666666666666668)},r=new Date().getTime(),e=i;function o(){i=e;var n=new Date().getTime();i.onupdate&&i.onupdate((n-r)/1e3),i.ondraw&&i.ondraw(),t(o),r=n}o()},i.fullscreen=function(t){t=t||{};var r=t.paddingTop||0,e=t.paddingLeft||0,o=t.paddingRight||0,n=t.paddingBottom||0;if(!document.body)throw new Error("document.body doesn't exist yet (call gl.fullscreen() from window.onload() or from inside the <body> tag)");document.body.appendChild(i.canvas),document.body.style.overflow="hidden",i.canvas.style.position="absolute",i.canvas.style.left=e+"px",i.canvas.style.top=r+"px";function h(){i.canvas.width=window.innerWidth-e-o,i.canvas.height=window.innerHeight-r-n,i.viewport(0,0,i.canvas.width,i.canvas.height),(t.camera||!("camera"in t))&&(i.matrixMode(i.PROJECTION),i.loadIdentity(),i.perspective(t.fov||45,i.canvas.width/i.canvas.height,t.near||.1,t.far||1e3),i.matrixMode(i.MODELVIEW)),i.ondraw&&i.ondraw()}b(window,"resize",h),h()}}var L=305397760,F=typeof Float32Array<"u";function T(){var t=Array.prototype.concat.apply([],arguments);t.length||(t=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),this.m=F?new Float32Array(t):t}T.prototype={inverse:function(){return T.inverse(this,new T)},transpose:function(){return T.transpose(this,new T)},multiply:function(t){return T.multiply(this,t,new T)},transformPoint:function(t){var r=this.m;return new v(r[0]*t.x+r[1]*t.y+r[2]*t.z+r[3],r[4]*t.x+r[5]*t.y+r[6]*t.z+r[7],r[8]*t.x+r[9]*t.y+r[10]*t.z+r[11]).divide(r[12]*t.x+r[13]*t.y+r[14]*t.z+r[15])},transformVector:function(t){var r=this.m;return new v(r[0]*t.x+r[1]*t.y+r[2]*t.z,r[4]*t.x+r[5]*t.y+r[6]*t.z,r[8]*t.x+r[9]*t.y+r[10]*t.z)}},T.inverse=function(t,r){r=r||new T;var e=t.m,o=r.m;o[0]=e[5]*e[10]*e[15]-e[5]*e[14]*e[11]-e[6]*e[9]*e[15]+e[6]*e[13]*e[11]+e[7]*e[9]*e[14]-e[7]*e[13]*e[10],o[1]=-e[1]*e[10]*e[15]+e[1]*e[14]*e[11]+e[2]*e[9]*e[15]-e[2]*e[13]*e[11]-e[3]*e[9]*e[14]+e[3]*e[13]*e[10],o[2]=e[1]*e[6]*e[15]-e[1]*e[14]*e[7]-e[2]*e[5]*e[15]+e[2]*e[13]*e[7]+e[3]*e[5]*e[14]-e[3]*e[13]*e[6],o[3]=-e[1]*e[6]*e[11]+e[1]*e[10]*e[7]+e[2]*e[5]*e[11]-e[2]*e[9]*e[7]-e[3]*e[5]*e[10]+e[3]*e[9]*e[6],o[4]=-e[4]*e[10]*e[15]+e[4]*e[14]*e[11]+e[6]*e[8]*e[15]-e[6]*e[12]*e[11]-e[7]*e[8]*e[14]+e[7]*e[12]*e[10],o[5]=e[0]*e[10]*e[15]-e[0]*e[14]*e[11]-e[2]*e[8]*e[15]+e[2]*e[12]*e[11]+e[3]*e[8]*e[14]-e[3]*e[12]*e[10],o[6]=-e[0]*e[6]*e[15]+e[0]*e[14]*e[7]+e[2]*e[4]*e[15]-e[2]*e[12]*e[7]-e[3]*e[4]*e[14]+e[3]*e[12]*e[6],o[7]=e[0]*e[6]*e[11]-e[0]*e[10]*e[7]-e[2]*e[4]*e[11]+e[2]*e[8]*e[7]+e[3]*e[4]*e[10]-e[3]*e[8]*e[6],o[8]=e[4]*e[9]*e[15]-e[4]*e[13]*e[11]-e[5]*e[8]*e[15]+e[5]*e[12]*e[11]+e[7]*e[8]*e[13]-e[7]*e[12]*e[9],o[9]=-e[0]*e[9]*e[15]+e[0]*e[13]*e[11]+e[1]*e[8]*e[15]-e[1]*e[12]*e[11]-e[3]*e[8]*e[13]+e[3]*e[12]*e[9],o[10]=e[0]*e[5]*e[15]-e[0]*e[13]*e[7]-e[1]*e[4]*e[15]+e[1]*e[12]*e[7]+e[3]*e[4]*e[13]-e[3]*e[12]*e[5],o[11]=-e[0]*e[5]*e[11]+e[0]*e[9]*e[7]+e[1]*e[4]*e[11]-e[1]*e[8]*e[7]-e[3]*e[4]*e[9]+e[3]*e[8]*e[5],o[12]=-e[4]*e[9]*e[14]+e[4]*e[13]*e[10]+e[5]*e[8]*e[14]-e[5]*e[12]*e[10]-e[6]*e[8]*e[13]+e[6]*e[12]*e[9],o[13]=e[0]*e[9]*e[14]-e[0]*e[13]*e[10]-e[1]*e[8]*e[14]+e[1]*e[12]*e[10]+e[2]*e[8]*e[13]-e[2]*e[12]*e[9],o[14]=-e[0]*e[5]*e[14]+e[0]*e[13]*e[6]+e[1]*e[4]*e[14]-e[1]*e[12]*e[6]-e[2]*e[4]*e[13]+e[2]*e[12]*e[5],o[15]=e[0]*e[5]*e[10]-e[0]*e[9]*e[6]-e[1]*e[4]*e[10]+e[1]*e[8]*e[6]+e[2]*e[4]*e[9]-e[2]*e[8]*e[5];for(var n=e[0]*o[0]+e[1]*o[4]+e[2]*o[8]+e[3]*o[12],h=0;h<16;h++)o[h]/=n;return r},T.transpose=function(t,r){r=r||new T;var e=t.m,o=r.m;return o[0]=e[0],o[1]=e[4],o[2]=e[8],o[3]=e[12],o[4]=e[1],o[5]=e[5],o[6]=e[9],o[7]=e[13],o[8]=e[2],o[9]=e[6],o[10]=e[10],o[11]=e[14],o[12]=e[3],o[13]=e[7],o[14]=e[11],o[15]=e[15],r},T.multiply=function(t,r,e){e=e||new T;var o=t.m,n=r.m,h=e.m;return h[0]=o[0]*n[0]+o[1]*n[4]+o[2]*n[8]+o[3]*n[12],h[1]=o[0]*n[1]+o[1]*n[5]+o[2]*n[9]+o[3]*n[13],h[2]=o[0]*n[2]+o[1]*n[6]+o[2]*n[10]+o[3]*n[14],h[3]=o[0]*n[3]+o[1]*n[7]+o[2]*n[11]+o[3]*n[15],h[4]=o[4]*n[0]+o[5]*n[4]+o[6]*n[8]+o[7]*n[12],h[5]=o[4]*n[1]+o[5]*n[5]+o[6]*n[9]+o[7]*n[13],h[6]=o[4]*n[2]+o[5]*n[6]+o[6]*n[10]+o[7]*n[14],h[7]=o[4]*n[3]+o[5]*n[7]+o[6]*n[11]+o[7]*n[15],h[8]=o[8]*n[0]+o[9]*n[4]+o[10]*n[8]+o[11]*n[12],h[9]=o[8]*n[1]+o[9]*n[5]+o[10]*n[9]+o[11]*n[13],h[10]=o[8]*n[2]+o[9]*n[6]+o[10]*n[10]+o[11]*n[14],h[11]=o[8]*n[3]+o[9]*n[7]+o[10]*n[11]+o[11]*n[15],h[12]=o[12]*n[0]+o[13]*n[4]+o[14]*n[8]+o[15]*n[12],h[13]=o[12]*n[1]+o[13]*n[5]+o[14]*n[9]+o[15]*n[13],h[14]=o[12]*n[2]+o[13]*n[6]+o[14]*n[10]+o[15]*n[14],h[15]=o[12]*n[3]+o[13]*n[7]+o[14]*n[11]+o[15]*n[15],e},T.identity=function(t){t=t||new T;var r=t.m;return r[0]=r[5]=r[10]=r[15]=1,r[1]=r[2]=r[3]=r[4]=r[6]=r[7]=r[8]=r[9]=r[11]=r[12]=r[13]=r[14]=0,t},T.perspective=function(t,r,e,o,n){var h=Math.tan(t*Math.PI/360)*e,c=h*r;return T.frustum(-c,c,-h,h,e,o,n)},T.frustum=function(t,r,e,o,n,h,c){c=c||new T;var d=c.m;return d[0]=2*n/(r-t),d[1]=0,d[2]=(r+t)/(r-t),d[3]=0,d[4]=0,d[5]=2*n/(o-e),d[6]=(o+e)/(o-e),d[7]=0,d[8]=0,d[9]=0,d[10]=-(h+n)/(h-n),d[11]=-2*h*n/(h-n),d[12]=0,d[13]=0,d[14]=-1,d[15]=0,c},T.ortho=function(t,r,e,o,n,h,c){c=c||new T;var d=c.m;return d[0]=2/(r-t),d[1]=0,d[2]=0,d[3]=-(r+t)/(r-t),d[4]=0,d[5]=2/(o-e),d[6]=0,d[7]=-(o+e)/(o-e),d[8]=0,d[9]=0,d[10]=-2/(h-n),d[11]=-(h+n)/(h-n),d[12]=0,d[13]=0,d[14]=0,d[15]=1,c},T.scale=function(t,r,e,o){o=o||new T;var n=o.m;return n[0]=t,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=r,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=e,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,o},T.translate=function(t,r,e,o){o=o||new T;var n=o.m;return n[0]=1,n[1]=0,n[2]=0,n[3]=t,n[4]=0,n[5]=1,n[6]=0,n[7]=r,n[8]=0,n[9]=0,n[10]=1,n[11]=e,n[12]=0,n[13]=0,n[14]=0,n[15]=1,o},T.rotate=function(t,r,e,o,n){if(!t||!r&&!e&&!o)return T.identity(n);n=n||new T;var h=n.m,c=Math.sqrt(r*r+e*e+o*o);t*=Math.PI/180,r/=c,e/=c,o/=c;var d=Math.cos(t),g=Math.sin(t),m=1-d;return h[0]=r*r*m+d,h[1]=r*e*m-o*g,h[2]=r*o*m+e*g,h[3]=0,h[4]=e*r*m+o*g,h[5]=e*e*m+d,h[6]=e*o*m-r*g,h[7]=0,h[8]=o*r*m-e*g,h[9]=o*e*m+r*g,h[10]=o*o*m+d,h[11]=0,h[12]=0,h[13]=0,h[14]=0,h[15]=1,n},T.lookAt=function(t,r,e,o,n,h,c,d,g,m){m=m||new T;var u=m.m,w=new v(t,r,e),E=new v(o,n,h),y=new v(c,d,g),S=w.subtract(E).unit(),M=y.cross(S).unit(),P=S.cross(M).unit();return u[0]=M.x,u[1]=M.y,u[2]=M.z,u[3]=-M.dot(w),u[4]=P.x,u[5]=P.y,u[6]=P.z,u[7]=-P.dot(w),u[8]=S.x,u[9]=S.y,u[10]=S.z,u[11]=-S.dot(w),u[12]=0,u[13]=0,u[14]=0,u[15]=1,m};function W(){this.unique=[],this.indices=[],this.map={}}W.prototype={add:function(t){var r=JSON.stringify(t);return r in this.map||(this.map[r]=this.unique.length,this.unique.push(t)),this.map[r]}};function X(t,r){this.buffer=null,this.target=t,this.type=r,this.data=[]}X.prototype={compile:function(t){for(var r=[],e=0,o=1e4;e<this.data.length;e+=o)r=Array.prototype.concat.apply(r,this.data.slice(e,e+o));var n=this.data.length?r.length/this.data.length:0;if(n!=Math.round(n))throw new Error("buffer elements not of consistent size, average size is "+n);this.buffer=this.buffer||i.createBuffer(),this.buffer.length=r.length,this.buffer.spacing=n,i.bindBuffer(this.target,this.buffer),i.bufferData(this.target,new this.type(r),t||i.STATIC_DRAW)}};function N(t){t=t||{},this.vertexBuffers={},this.indexBuffers={},this.addVertexBuffer("vertices","gl_Vertex"),t.coords&&this.addVertexBuffer("coords","gl_TexCoord"),t.normals&&this.addVertexBuffer("normals","gl_Normal"),t.colors&&this.addVertexBuffer("colors","gl_Color"),(!("triangles"in t)||t.triangles)&&this.addIndexBuffer("triangles"),t.lines&&this.addIndexBuffer("lines")}N.prototype={addVertexBuffer:function(t,r){var e=this.vertexBuffers[r]=new X(i.ARRAY_BUFFER,Float32Array);e.name=t,this[t]=[]},addIndexBuffer:function(t){this.indexBuffers[t]=new X(i.ELEMENT_ARRAY_BUFFER,Uint16Array),this[t]=[]},compile:function(){for(var t in this.vertexBuffers){var r=this.vertexBuffers[t];r.data=this[r.name],r.compile()}for(var e in this.indexBuffers){var r=this.indexBuffers[e];r.data=this[e],r.compile()}},transform:function(t){if(this.vertices=this.vertices.map(function(e){return t.transformPoint(v.fromArray(e)).toArray()}),this.normals){var r=t.inverse().transpose();this.normals=this.normals.map(function(e){return r.transformVector(v.fromArray(e)).unit().toArray()})}return this.compile(),this},computeNormals:function(){this.normals||this.addVertexBuffer("normals","gl_Normal");for(var t=0;t<this.vertices.length;t++)this.normals[t]=new v;for(var t=0;t<this.triangles.length;t++){var r=this.triangles[t],e=v.fromArray(this.vertices[r[0]]),o=v.fromArray(this.vertices[r[1]]),n=v.fromArray(this.vertices[r[2]]),h=o.subtract(e).cross(n.subtract(e)).unit();this.normals[r[0]]=this.normals[r[0]].add(h),this.normals[r[1]]=this.normals[r[1]].add(h),this.normals[r[2]]=this.normals[r[2]].add(h)}for(var t=0;t<this.vertices.length;t++)this.normals[t]=this.normals[t].unit().toArray();return this.compile(),this},computeWireframe:function(){for(var t=new W,r=0;r<this.triangles.length;r++)for(var e=this.triangles[r],o=0;o<e.length;o++){var n=e[o],h=e[(o+1)%e.length];t.add([Math.min(n,h),Math.max(n,h)])}return this.lines||this.addIndexBuffer("lines"),this.lines=t.unique,this.compile(),this},getAABB:function(){var t={min:new v(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)};t.max=t.min.negative();for(var r=0;r<this.vertices.length;r++){var e=v.fromArray(this.vertices[r]);t.min=v.min(t.min,e),t.max=v.max(t.max,e)}return t},getBoundingSphere:function(){for(var t=this.getAABB(),r={center:t.min.add(t.max).divide(2),radius:0},e=0;e<this.vertices.length;e++)r.radius=Math.max(r.radius,v.fromArray(this.vertices[e]).subtract(r.center).length());return r}},N.plane=function(t){t=t||{};for(var r=new N(t),e=t.detailX||t.detail||1,o=t.detailY||t.detail||1,n=t.width||2,h=t.height||2,c=0;c<=o;c++)for(var d=c/o,g=0;g<=e;g++){var m=g/e;if(r.vertices.push([(m-.5)*n,(d-.5)*h,0]),r.coords&&r.coords.push([m,d]),r.normals&&r.normals.push([0,0,1]),g<e&&c<o){var u=g+c*(e+1);r.triangles.push([u,u+1,u+e+1]),r.triangles.push([u+e+1,u+1,u+e+2])}}return r.compile(),r};var $=[[0,4,2,6,-1,0,0],[1,3,5,7,1,0,0],[0,1,4,5,0,-1,0],[2,6,3,7,0,1,0],[0,2,1,3,0,0,-1],[4,5,6,7,0,0,1]];function O(t){return new v((t&1)*2-1,(t&2)-1,(t&4)/2-1)}N.cube=function(t){for(var r=new N(t),e=t&&t.width||2,o=t&&t.height||2,n=t&&t.depth||2,h=0;h<$.length;h++){for(var c=$[h],d=h*4,g=0;g<4;g++){var m=c[g];const u=O(m).toArray();u[0]*=e/2,u[1]*=o/2,u[2]*=n/2,r.vertices.push(u),r.coords&&r.coords.push([g&1,(g&2)/2]),r.normals&&r.normals.push(c.slice(4,7))}r.triangles.push([d,d+1,d+2]),r.triangles.push([d+2,d+1,d+3])}return r.compile(),r},N.sphere=function(t){function r(P,G,se){return g?[P,se,G]:[P,G,se]}function e(P){return P+(P-P*P)/2}t=t||{};for(var o=new N(t),n=new W,h=t.detail||6,c=0;c<8;c++)for(var d=O(c),g=d.x*d.y*d.z>0,m=[],u=0;u<=h;u++){for(var w=0;u+w<=h;w++){var E=u/h,y=w/h,S=(h-u-w)/h,M={vertex:new v(e(E),e(y),e(S)).unit().multiply(d).toArray()};o.coords&&(M.coord=d.y>0?[1-E,S]:[S,1-E]),m.push(n.add(M))}if(u>0)for(var w=0;u+w<=h;w++){var E=(u-1)*(h+1)+(u-1-(u-1)*(u-1))/2+w,y=u*(h+1)+(u-u*u)/2+w;o.triangles.push(r(m[E],m[E+1],m[y])),u+w<h&&o.triangles.push(r(m[y],m[E+1],m[y+1]))}}return o.vertices=n.unique.map(function(P){return P.vertex}),o.coords&&(o.coords=n.unique.map(function(P){return P.coord})),o.normals&&(o.normals=o.vertices),o.compile(),o},N.load=function(t,r){r=r||{},"coords"in r||(r.coords=!!t.coords),"normals"in r||(r.normals=!!t.normals),"colors"in r||(r.colors=!!t.colors),"triangles"in r||(r.triangles=!!t.triangles),"lines"in r||(r.lines=!!t.lines);var e=new N(r);return e.vertices=t.vertices,e.coords&&(e.coords=t.coords),e.normals&&(e.normals=t.normals),e.colors&&(e.colors=t.colors),e.triangles&&(e.triangles=t.triangles),e.lines&&(e.lines=t.lines),e.compile(),e};function B(t,r,e){this.t=arguments.length?t:Number.MAX_VALUE,this.hit=r,this.normal=e}B.prototype={mergeWith:function(t){t.t>0&&t.t<this.t&&(this.t=t.t,this.hit=t.hit,this.normal=t.normal)}};function ee(){var t=i.getParameter(i.VIEWPORT),r=i.modelviewMatrix.m,e=new v(r[0],r[4],r[8]),o=new v(r[1],r[5],r[9]),n=new v(r[2],r[6],r[10]),h=new v(r[3],r[7],r[11]);this.eye=new v(-h.dot(e),-h.dot(o),-h.dot(n));var c=t[0],d=c+t[2],g=t[1],m=g+t[3];this.ray00=i.unProject(c,g,1).subtract(this.eye),this.ray10=i.unProject(d,g,1).subtract(this.eye),this.ray01=i.unProject(c,m,1).subtract(this.eye),this.ray11=i.unProject(d,m,1).subtract(this.eye),this.viewport=t}ee.prototype={getRayForPixel:function(t,r){t=(t-this.viewport[0])/this.viewport[2],r=1-(r-this.viewport[1])/this.viewport[3];var e=v.lerp(this.ray00,this.ray10,t),o=v.lerp(this.ray01,this.ray11,t);return v.lerp(e,o,r).unit()}},ee.hitTestBox=function(t,r,e,o){var n=e.subtract(t).divide(r),h=o.subtract(t).divide(r),c=v.min(n,h),d=v.max(n,h),g=c.max(),m=d.min();if(g>0&&g<m){var u=1e-6,w=t.add(r.multiply(g));return e=e.add(u),o=o.subtract(u),new B(g,w,new v((w.x>o.x)-(w.x<e.x),(w.y>o.y)-(w.y<e.y),(w.z>o.z)-(w.z<e.z)))}return null},ee.hitTestSphere=function(t,r,e,o){var n=t.subtract(e),h=r.dot(r),c=2*r.dot(n),d=n.dot(n)-o*o,g=c*c-4*h*d;if(g>0){var m=(-c-Math.sqrt(g))/(2*h),u=t.add(r.multiply(m));return new B(m,u,u.subtract(e).divide(o))}return null},ee.hitTestTriangle=function(t,r,e,o,n){var h=o.subtract(e),c=n.subtract(e),d=h.cross(c).unit(),g=d.dot(e.subtract(t))/d.dot(r);if(g>0){var m=t.add(r.multiply(g)),u=m.subtract(e),w=c.dot(c),E=c.dot(h),y=c.dot(u),S=h.dot(h),M=h.dot(u),P=w*S-E*E,G=(S*y-E*M)/P,se=(w*M-E*y)/P;if(G>=0&&se>=0&&G+se<=1)return new B(g,m,d)}return null};function re(t,r,e){let o;for(;(o=t.exec(r))!=null;)e(o)}var oe="LIGHTGL";function de(t,r){function e(w){var E=document.getElementById(w);return E?E.text:w}t=e(t),r=e(r);var o="    uniform mat3 gl_NormalMatrix;    uniform mat4 gl_ModelViewMatrix;    uniform mat4 gl_ProjectionMatrix;    uniform mat4 gl_ModelViewProjectionMatrix;    uniform mat4 gl_ModelViewMatrixInverse;    uniform mat4 gl_ProjectionMatrixInverse;    uniform mat4 gl_ModelViewProjectionMatrixInverse;  ",n=`#version 300 es
    `+o+"    in vec4 gl_Vertex;    in vec4 gl_TexCoord;    in vec3 gl_Normal;    in vec4 gl_Color;    vec4 ftransform() {      return gl_ModelViewProjectionMatrix * gl_Vertex;    }  ",h=`#version 300 es
    precision highp float;
  `+o,c=t+r,d={};re(/\b(gl_[^;]*)\b;/g,o,function(w){var E=w[1];if(c.indexOf(E)!=-1){var y=E.replace(/[a-z_]/g,"");d[y]=oe+E}}),c.indexOf("ftransform")!=-1&&(d.MVPM=oe+"gl_ModelViewProjectionMatrix"),this.usedMatrices=d;function g(w,E){var y={},S=/^((\s*\/\/.*\n|\s*#extension.*\n)+)[^]*$/.exec(E);return E=S?S[1]+w+E.substr(S[1].length):w+E,re(/\bgl_\w+\b/g,w,function(M){M in y||(E=E.replace(new RegExp("\\b"+M+"\\b","g"),oe+M),y[M]=!0)}),E}t=g(n,t),r=g(h,r);function m(w,E){var y=i.createShader(w);if(i.shaderSource(y,E),i.compileShader(y),!i.getShaderParameter(y,i.COMPILE_STATUS))throw new Error("compile error: "+i.getShaderInfoLog(y));return y}if(this.program=i.createProgram(),i.attachShader(this.program,m(i.VERTEX_SHADER,t)),i.attachShader(this.program,m(i.FRAGMENT_SHADER,r)),i.linkProgram(this.program),!i.getProgramParameter(this.program,i.LINK_STATUS))throw new Error("link error: "+i.getProgramInfoLog(this.program));this.attributes={},this.uniformLocations={};var u={};re(/uniform\s+sampler(1D|2D|3D|Cube)\s+(\w+)\s*;/g,t+r,function(w){u[w[2]]=1}),this.isSampler=u}function ae(t){var r=Object.prototype.toString.call(t);return r=="[object Array]"||r=="[object Float32Array]"}function he(t){var r=Object.prototype.toString.call(t);return r=="[object Number]"||r=="[object Boolean]"}new T,new T,de.prototype={uniforms:function(t){i.useProgram(this.program);for(var r in t){var e=this.uniformLocations[r]||i.getUniformLocation(this.program,r);if(e){this.uniformLocations[r]=e;var o=t[r];if(o instanceof v?o=[o.x,o.y,o.z]:o instanceof T&&(o=o.m),ae(o))switch(o.length){case 1:i.uniform1fv(e,new Float32Array(o));break;case 2:i.uniform2fv(e,new Float32Array(o));break;case 3:i.uniform3fv(e,new Float32Array(o));break;case 4:i.uniform4fv(e,new Float32Array(o));break;case 9:i.uniformMatrix3fv(e,!1,new Float32Array([o[0],o[3],o[6],o[1],o[4],o[7],o[2],o[5],o[8]]));break;case 16:i.uniformMatrix4fv(e,!1,new Float32Array([o[0],o[4],o[8],o[12],o[1],o[5],o[9],o[13],o[2],o[6],o[10],o[14],o[3],o[7],o[11],o[15]]));break;default:throw new Error(`don't know how to load uniform "`+r+'" of length '+o.length)}else if(he(o))(this.isSampler[r]?i.uniform1i:i.uniform1f).call(i,e,o);else throw new Error('attempted to set uniform "'+r+'" to invalid value '+o)}}return this},draw:function(t,r){this.drawBuffers(t.vertexBuffers,t.indexBuffers[r==i.LINES?"lines":"triangles"],arguments.length<2?i.TRIANGLES:r)},drawBuffers:function(t,r,e){var o=this.usedMatrices,n=i.modelviewMatrix,h=i.projectionMatrix,c=o.MVMI||o.NM?n.inverse():null,d=o.PMI?h.inverse():null,g=o.MVPM||o.MVPMI?h.multiply(n):null,m={};if(o.MVM&&(m[o.MVM]=n),o.MVMI&&(m[o.MVMI]=c),o.PM&&(m[o.PM]=h),o.PMI&&(m[o.PMI]=d),o.MVPM&&(m[o.MVPM]=g),o.MVPMI&&(m[o.MVPMI]=g.inverse()),o.NM){var u=c.m;m[o.NM]=[u[0],u[4],u[8],u[1],u[5],u[9],u[2],u[6],u[10]]}this.uniforms(m);var w=0;for(var E in t){var y=t[E],S=this.attributes[E]||i.getAttribLocation(this.program,E.replace(/^(gl_.*)$/,oe+"$1"));S==-1||!y.buffer||(this.attributes[E]=S,i.bindBuffer(i.ARRAY_BUFFER,y.buffer),i.enableVertexAttribArray(S),i.vertexAttribPointer(S,y.buffer.spacing,i.FLOAT,!1,0,0),w=y.buffer.length/y.buffer.spacing)}for(var E in this.attributes)E in t||i.disableVertexAttribArray(this.attributes[E]);return w&&(!r||r.buffer)&&(r?(i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,r.buffer),i.drawElements(e,r.buffer.length,i.UNSIGNED_SHORT,0)):i.drawArrays(e,0,w)),this}};function U(t,r,e){e=e||{},this.width=t,this.height=r,this.id=i.createTexture();let o=e.type||i.UNSIGNED_BYTE,n=e.format||i.RGBA,h=i.RGBA;const c=i.getExtension("EXT_color_buffer_float"),d=i.getExtension("EXT_color_buffer_half_float");o===i.FLOAT?(c?i instanceof WebGL2RenderingContext&&(n=i.RGBA32F):(console.warn("FLOAT textures not renderable, falling back to UNSIGNED_BYTE"),o=i.UNSIGNED_BYTE,n=i.RGBA8),h=i.RGBA):o===i.HALF_FLOAT_OES?(d?i instanceof WebGL2RenderingContext&&(n=i.RGBA16F):(console.warn("HALF_FLOAT textures not renderable, falling back to UNSIGNED_BYTE"),o=i.UNSIGNED_BYTE,n=i.RGBA8),h=i.RGBA):(o=i.UNSIGNED_BYTE,n=i.RGBA8,h=i.RGBA);const g=e.filter||e.magFilter||i.LINEAR,m=e.filter||e.minFilter||i.LINEAR;i.bindTexture(i.TEXTURE_2D,this.id),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,1),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,g),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,m),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,e.wrap||e.wrapS||i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,e.wrap||e.wrapT||i.CLAMP_TO_EDGE),i instanceof WebGL2RenderingContext?i.texImage2D(i.TEXTURE_2D,0,n,t,r,0,h,o,null):i.texImage2D(i.TEXTURE_2D,0,h,t,r,0,h,o,null),i.bindTexture(i.TEXTURE_2D,null),this.format=h,this.type=o,this.internalFormat=n}var Z,j,ne;U.prototype={bind:function(t){i.activeTexture(i.TEXTURE0+(t||0)),i.bindTexture(i.TEXTURE_2D,this.id)},unbind:function(t){i.activeTexture(i.TEXTURE0+(t||0)),i.bindTexture(i.TEXTURE_2D,null)},canDrawTo:function(){Z=Z||i.createFramebuffer(),i.bindFramebuffer(i.FRAMEBUFFER,Z),i.framebufferTexture2D(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,this.id,0);var t=i.checkFramebufferStatus(i.FRAMEBUFFER)==i.FRAMEBUFFER_COMPLETE;return i.bindFramebuffer(i.FRAMEBUFFER,null),t},drawTo:function(t){i.getExtension("EXT_color_buffer_float")||console.warn("EXT_color_buffer_float not available!");var e=i.getParameter(i.VIEWPORT);if(Z=Z||i.createFramebuffer(),j=j||i.createRenderbuffer(),i.bindFramebuffer(i.FRAMEBUFFER,Z),i.bindRenderbuffer(i.RENDERBUFFER,j),(this.width!=j.width||this.height!=j.height)&&(j.width=this.width,j.height=this.height,i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_COMPONENT16,this.width,this.height)),i.framebufferTexture2D(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,this.id,0),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,j),i.checkFramebufferStatus(i.FRAMEBUFFER)!=i.FRAMEBUFFER_COMPLETE)throw new Error("Rendering to this texture is not supported (incomplete framebuffer)");i.viewport(0,0,this.width,this.height),t(),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindRenderbuffer(i.RENDERBUFFER,null),i.viewport(e[0],e[1],e[2],e[3])},swapWith:function(t){var r;r=t.id,t.id=this.id,this.id=r,r=t.width,t.width=this.width,this.width=r,r=t.height,t.height=this.height,this.height=r}},U.fromImage=function(t,r){r=r||{};var e=new U(t.width,t.height,r);i.bindTexture(i.TEXTURE_2D,e.id);try{i.texImage2D(i.TEXTURE_2D,0,e.format,e.format,e.type,t)}catch{throw location.protocol=="file:"?new Error('image not loaded for security reasons (serve this page over "http://" instead)'):new Error("image not loaded for security reasons (image must originate from the same domain as this page or use Cross-Origin Resource Sharing)")}return r.minFilter&&r.minFilter!=i.NEAREST&&r.minFilter!=i.LINEAR&&i.generateMipmap(i.TEXTURE_2D),i.bindTexture(i.TEXTURE_2D,null),e},U.fromURL=function(t,r){ne=ne||function(){var h=document.createElement("canvas").getContext("2d");h.canvas.width=h.canvas.height=128;for(var c=0;c<h.canvas.height;c+=16)for(var d=0;d<h.canvas.width;d+=16)h.fillStyle=(d^c)&16?"#FFF":"#DDD",h.fillRect(d,c,16,16);return h.canvas}();var e=U.fromImage(ne,r),o=new Image,n=i;return o.onload=function(){n.makeCurrent(),U.fromImage(o,r).swapWith(e)},o.src=t,e},U.canUseFloatingPointTextures=function(){return!!i.getExtension("OES_texture_float")},U.canUseFloatingPointLinearFiltering=function(){return!!i.getExtension("OES_texture_float_linear")},U.canUseHalfFloatingPointTextures=function(){return!!i.getExtension("OES_texture_half_float")},U.canUseHalfFloatingPointLinearFiltering=function(){return!!i.getExtension("OES_texture_half_float_linear")};function v(t,r,e){this.x=t||0,this.y=r||0,this.z=e||0}return v.prototype={negative:function(){return new v(-this.x,-this.y,-this.z)},add:function(t){return t instanceof v?new v(this.x+t.x,this.y+t.y,this.z+t.z):new v(this.x+t,this.y+t,this.z+t)},subtract:function(t){return t instanceof v?new v(this.x-t.x,this.y-t.y,this.z-t.z):new v(this.x-t,this.y-t,this.z-t)},multiply:function(t){return t instanceof v?new v(this.x*t.x,this.y*t.y,this.z*t.z):new v(this.x*t,this.y*t,this.z*t)},divide:function(t){return t instanceof v?new v(this.x/t.x,this.y/t.y,this.z/t.z):new v(this.x/t,this.y/t,this.z/t)},equals:function(t){return this.x==t.x&&this.y==t.y&&this.z==t.z},dot:function(t){return this.x*t.x+this.y*t.y+this.z*t.z},cross:function(t){return new v(this.y*t.z-this.z*t.y,this.z*t.x-this.x*t.z,this.x*t.y-this.y*t.x)},length:function(){return Math.sqrt(this.dot(this))},unit:function(){return this.divide(this.length())},min:function(){return Math.min(Math.min(this.x,this.y),this.z)},max:function(){return Math.max(Math.max(this.x,this.y),this.z)},toAngles:function(){return{theta:Math.atan2(this.z,this.x),phi:Math.asin(this.y/this.length())}},angleTo:function(t){return Math.acos(this.dot(t)/(this.length()*t.length()))},toArray:function(t){return[this.x,this.y,this.z].slice(0,t||3)},clone:function(){return new v(this.x,this.y,this.z)},init:function(t,r,e){return this.x=t,this.y=r,this.z=e,this}},v.negative=function(t,r){return r.x=-t.x,r.y=-t.y,r.z=-t.z,r},v.add=function(t,r,e){return r instanceof v?(e.x=t.x+r.x,e.y=t.y+r.y,e.z=t.z+r.z):(e.x=t.x+r,e.y=t.y+r,e.z=t.z+r),e},v.subtract=function(t,r,e){return r instanceof v?(e.x=t.x-r.x,e.y=t.y-r.y,e.z=t.z-r.z):(e.x=t.x-r,e.y=t.y-r,e.z=t.z-r),e},v.multiply=function(t,r,e){return r instanceof v?(e.x=t.x*r.x,e.y=t.y*r.y,e.z=t.z*r.z):(e.x=t.x*r,e.y=t.y*r,e.z=t.z*r),e},v.divide=function(t,r,e){return r instanceof v?(e.x=t.x/r.x,e.y=t.y/r.y,e.z=t.z/r.z):(e.x=t.x/r,e.y=t.y/r,e.z=t.z/r),e},v.cross=function(t,r,e){return e.x=t.y*r.z-t.z*r.y,e.y=t.z*r.x-t.x*r.z,e.z=t.x*r.y-t.y*r.x,e},v.unit=function(t,r){var e=t.length();return r.x=t.x/e,r.y=t.y/e,r.z=t.z/e,r},v.fromAngles=function(t,r){return new v(Math.cos(t)*Math.cos(r),Math.sin(r),Math.sin(t)*Math.cos(r))},v.randomDirection=function(){return v.fromAngles(Math.random()*Math.PI*2,Math.asin(Math.random()*2-1))},v.min=function(t,r){return new v(Math.min(t.x,r.x),Math.min(t.y,r.y),Math.min(t.z,r.z))},v.max=function(t,r){return new v(Math.max(t.x,r.x),Math.max(t.y,r.y),Math.max(t.z,r.z))},v.lerp=function(t,r,e){return r.subtract(t).multiply(e).add(t)},v.fromArray=function(t){return new v(t[0],t[1],t[2])},v.angleBetween=function(t,r){return t.angleTo(r)},a}();const Ae=.3,ze=.15,Ce=1,Qe=10,Ue=Math.ceil(Qe/4),Ve=10,$e=`#version 300 es
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

`,et=`#version 300 es
    precision highp float;
    in float fragCyclePhase;
    in float fragAltitude;
    const float PI = 3.141592;
    out vec4 fragColor;
    void main() {
        fragColor = vec4(fragAltitude, fragCyclePhase / (2. * PI), 1., 1.);
    }
`,tt=`#version 300 es
    in vec2 iVertex;
    out vec2 fragCoord;
    void main() {
        fragCoord = iVertex * .5 + .5;
        gl_Position = vec4(iVertex.xy, 0., 1.);
    }
`,it=`#version 300 es
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
`,rt=new Float32Array([-1,-1,1,-1,1,1,-1,1]),ot=new Uint16Array([0,1,2,2,3,0]);var Y,Ge,me,We;class at{constructor(a){Le(this,Y);this.numVecAttributes=Ue,this.maxNumSwimmer=Ve,this.gl=a;const l=a.NEAREST;this.texture=new p.Texture(this.numVecAttributes,this.maxNumSwimmer,{type:a.FLOAT,filter:l}),this.initPrograms(),this.indexBuffer=this.gl.createBuffer(),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.indexBuffer),this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER,ot,this.gl.STATIC_DRAW),this.vboPlane=this.gl.createBuffer(),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vboPlane),this.gl.bufferData(this.gl.ARRAY_BUFFER,rt,this.gl.STATIC_DRAW),this.vboPoints=this.gl.createBuffer()}update(){this.numSwimmers=s.swimmers.length;const a=5;this.swimmersAttributes=new Float32Array(this.numVecAttributes*4*this.maxNumSwimmer*a);const l=te(this,Y,Ge).call(this,s.swimmers);for(let f=0;f<s.swimmers.length;f++){const x=l[f];te(this,Y,We).call(this,f,x),te(this,Y,me).call(this,s.swimmers.length+f,x.leftArm),te(this,Y,me).call(this,2*s.swimmers.length+f,x.rightArm),te(this,Y,me).call(this,3*s.swimmers.length+f,x.leftFoot),te(this,Y,me).call(this,4*s.swimmers.length+f,x.rightFoot)}this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture.id),this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,!1),this.gl.texSubImage2D(this.gl.TEXTURE_2D,0,0,0,this.numVecAttributes,this.maxNumSwimmer,this.gl.RGBA,this.gl.FLOAT,this.swimmersAttributes),this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,!0),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vboPoints),this.gl.bufferData(this.gl.ARRAY_BUFFER,this.swimmersAttributes,this.gl.DYNAMIC_DRAW)}buildShader(a,l){const f=this.gl.createShader(l);return this.gl.shaderSource(f,a),this.gl.compileShader(f),f}createProgram(a){const l=this.gl.createProgram();return a.forEach(f=>{this.gl.attachShader(l,f)}),this.gl.linkProgram(l),l}checkShaders(a,l,f){this.gl.getShaderParameter(a,this.gl.COMPILE_STATUS)||console.error(this.gl.getShaderInfoLog(a)),this.gl.getShaderParameter(l,this.gl.COMPILE_STATUS)||console.error(this.gl.getShaderInfoLog(l)),this.gl.getProgramParameter(f,this.gl.LINK_STATUS)||console.error(this.gl.getProgramInfoLog(f))}createRenderingTexture(a,l){this.pointsTexture=new p.Texture(a,l,{type:this.gl.FLOAT,filter:this.gl.NEAREST}),this.pointsFrameBuffer=this.gl.createFramebuffer(),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.pointsFrameBuffer);const f=this.gl.COLOR_ATTACHMENT0;this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,f,this.gl.TEXTURE_2D,this.pointsTexture.id,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.horizontalPassTexture=new p.Texture(a,l,{type:this.gl.FLOAT,filter:this.gl.LINEAR}),this.horizontalPassFrameBuffer=this.gl.createFramebuffer(),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.horizontalPassFrameBuffer),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,f,this.gl.TEXTURE_2D,this.horizontalPassTexture.id,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null);const x=l/4,_=x,b=x;this.displacementTexture=new p.Texture(_,b,{type:this.gl.FLOAT,filter:this.gl.LINEAR}),this.displacementFrameBuffer=this.gl.createFramebuffer(),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.displacementFrameBuffer),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,f,this.gl.TEXTURE_2D,this.displacementTexture.id,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.oldDisplacementTexture=new p.Texture(_,b,{type:this.gl.FLOAT,filter:this.gl.LINEAR})}buildProgram(a,l){const f=this.buildShader(a,this.gl.VERTEX_SHADER),x=this.buildShader(l,this.gl.FRAGMENT_SHADER),_=this.createProgram([f,x]);return this.checkShaders(f,x,_),_}initPrograms(){this.programPoints=this.buildProgram($e,et),this.programVolume=this.buildProgram(tt,it),this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height)}volumePass(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.horizontalPassFrameBuffer),this.gl.useProgram(this.programVolume);const a=this.gl.getAttribLocation(this.programVolume,"iVertex"),l=this.gl.getUniformLocation(this.programVolume,"poolSize");this.gl.uniform2f(l,s.params.simulation.poolSize.x,s.params.simulation.poolSize.z);const f=this.gl.getUniformLocation(this.programVolume,"horizontal");this.gl.uniform1i(f,!0);const x=this.gl.getUniformLocation(this.programVolume,"show");this.gl.uniform1i(x,!1);const _=this.gl.getUniformLocation(this.programVolume,"swapColor");this.gl.uniform1i(_,!1);const b=2,C=this.gl.FLOAT,I=!1,L=0,F=0;this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vboPlane),this.gl.vertexAttribPointer(a,b,C,I,L,F),this.gl.enableVertexAttribArray(a),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.indexBuffer),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.pointsTexture.id),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this.gl.drawElements(this.gl.TRIANGLES,6,this.gl.UNSIGNED_SHORT,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.displacementFrameBuffer),this.gl.uniform1i(f,!1),this.gl.uniform1i(x,!1),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.horizontalPassTexture.id),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this.gl.viewport(0,0,this.displacementTexture.width,this.displacementTexture.height),this.gl.drawElements(this.gl.TRIANGLES,6,this.gl.UNSIGNED_SHORT,0),this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height)}pointPass(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.pointsFrameBuffer),this.gl.useProgram(this.programPoints);const a=this.gl.getAttribLocation(this.programPoints,"iData1"),l=this.gl.getAttribLocation(this.programPoints,"iData2"),f=this.gl.getAttribLocation(this.programPoints,"iData3"),x=this.gl.getUniformLocation(this.programPoints,"invPoolSize");this.gl.uniform2f(x,1/s.params.simulation.poolSize.x,1/s.params.simulation.poolSize.z);const _=4,b=this.gl.FLOAT,C=!1,I=4,L=12*I;let F=0;this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vboPoints),a>=0&&(this.gl.vertexAttribPointer(a,_,b,C,L,F),this.gl.enableVertexAttribArray(a)),F=4*I,l>=0&&(this.gl.vertexAttribPointer(l,_,b,C,L,F),this.gl.enableVertexAttribArray(l)),F=2*4*I,f>=0&&(this.gl.vertexAttribPointer(f,_,b,C,L,F),this.gl.enableVertexAttribArray(f)),this.gl.viewport(0,0,this.pointsTexture.width,this.pointsTexture.height),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this.gl.drawArrays(this.gl.POINTS,0,5*this.numSwimmers)}updateOldDisplacementTexture(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.displacementFrameBuffer),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.oldDisplacementTexture.id),this.gl.copyTexSubImage2D(this.gl.TEXTURE_2D,0,0,0,0,0,this.oldDisplacementTexture.width,this.oldDisplacementTexture.height)}draw(){this.updateOldDisplacementTexture(),this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this.pointPass(),this.volumePass(),this.gl.disable(this.gl.BLEND)}}Y=new WeakSet,Ge=function(a){const l=function(_,b){return b.getDistanceTraveled()-_.getDistanceTraveled()};let f=0;a.forEach(_=>{_.finishTime>.1&&f++});const x=a.slice(0,f).concat(a.slice(f).sort(l));for(let _=0;_<a.length;_++)a[_]=x[_];return a},me=function(a,l){this.swimmersAttributes[this.numVecAttributes*4*a]=l.center.x,this.swimmersAttributes[this.numVecAttributes*4*a+1]=l.center.z,this.swimmersAttributes[this.numVecAttributes*4*a+7]=l.center.y},We=function(a,l){te(this,Y,me).call(this,a,l.body),this.swimmersAttributes[this.numVecAttributes*4*a+2]=l.divingDistance,this.swimmersAttributes[this.numVecAttributes*4*a+3]=l.divingTime,this.swimmersAttributes[this.numVecAttributes*4*a+4]=l.reactionTime,this.swimmersAttributes[this.numVecAttributes*4*a+5]=l.body.velocity.z*3.6,this.swimmersAttributes[this.numVecAttributes*4*a+6]=l.nationality,this.swimmersAttributes[this.numVecAttributes*4*a+8]=l.breakoutDistance,this.swimmersAttributes[this.numVecAttributes*4*a+9]=l.breakoutTime,this.swimmersAttributes[this.numVecAttributes*4*a+10]=l.finishTime};function Te(i=0,a=1){const l=1-Math.random(),f=Math.random();return Math.sqrt(-2*Math.log(l))*Math.cos(2*Math.PI*f)*a+i}const J=new p.Vector(1e3,0,-1e3),nt=.5,st=1,Ee=2*Math.PI*st,pe="Temps (s)",we="event",ke="distance (m)",D=class D{constructor(a){this.startingPoint=new p.Vector(a.x,a.y,a.z),this.center=new p.Vector(a.x,a.y,a.z),this.force=new p.Vector(0,0,190+Te(0,20)),this.reactionTime=Math.max(.1,Te(.15,.02));const l=.25,f=.15;this.body=new ge(a,l),this.leftArm=new ge(J,f),this.rightArm=new ge(J,f),this.leftFoot=new ge(J,f),this.rightFoot=new ge(J,f),this.body.cinematic=!D.useGravity,this.leftArm.cinematic=!0,this.rightArm.cinematic=!0,this.leftFoot.cinematic=!0,this.rightFoot.cinematic=!0,this.spheres=[this.body,this.leftArm,this.rightArm,this.leftFoot,this.rightFoot],this.divingDistance=0,this.divingTime=1e3,this.breakoutDistance=0,this.breakoutTime=1e3,this.nationality=Math.random()>.5?0:1,this.currendDataIndex=0,this.useTracking=!1,this.finishTime=0}async parseData(a){fetch(a).then(l=>{const f=l.headers.get("content-type");return!f||!f.includes("text/csv")?(console.log("no file found : "+a),null):l.text()}).then(l=>{if(!l)return;const f=l.split(`
`),x=f[0].split(",");this.data=f.slice(1).map(_=>{const b=_.split(",");return Object.fromEntries(x.map((C,I)=>[C,b[I]]))})})}getDistanceTraveled(){const a=this.body.velocity.z,l=s.params.simulation.poolSize.z,f=this.body.center.z+l/2;return a>=0?f:2*l-f}startRace(){this.hasBrokeOut=!1,this.hasDove=!1,this.hasReacted=!1}jump(a=4.5){this.body.cinematic=!1,this.body.velocity=new p.Vector(0,0,a+Te(0,1)),this.body.center=new p.Vector(this.startingPoint.x,1,-s.params.simulation.poolSize.z/2)}swim(a){this.hasReacted=a,this.isSwimming=a,a||(this.body.followTarget=!1),a?(this.body.cinematic=!1,this.useGravity=!0,this.body.center=new p.Vector(this.startingPoint.x,0,-s.params.simulation.poolSize.z/2)):(this.body.velocity=new p.Vector(0,0,0),this.body.center=new p.Vector(this.startingPoint.x,0,0))}getArmOffset(a,l){const f=this.body.velocity.z>=0?Ee:-Ee;return new p.Vector(0,Math.cos(f*a+l),Math.sin(f*a+l)).multiply(nt)}setCurrentDataIndex(){if(this.currendDataIndex=0,!!this.data){for(;this.data[this.currendDataIndex]&&this.data[this.currendDataIndex][pe]<s.getRaceTime();)this.currendDataIndex++;this.currendDataIndex+1<this.data.length&&(this.body.followTarget=!0,this.finishTime=0)}}handleTracking(a){if(this.hasReacted&&this.useTracking&&this.currendDataIndex<this.data.length&&this.data[this.currendDataIndex][pe]<a){let l=null,f=a;const x=this.data[this.currendDataIndex+1];this.currendDataIndex+1<this.data.length&&(l=parseFloat(x[ke]),f=parseFloat(x[pe]));const _=s.params.simulation.poolSize.z;let b=0;const C=this.data[this.currendDataIndex][we];if(C=="enter"||C=="turn"&&x[we]!="under"){f=(a+f)/2,l=(this.body.center.z+_/2+l)/2;const L={[pe]:f,[ke]:l,[we]:"under"};this.data.splice(this.currendDataIndex+1,0,L),b=-1.5}x&&x[we]=="under"&&(b=-1.5),l>_&&(l=2*_-l),l-=s.params.simulation.poolSize.z/2;const I=new p.Vector(this.startingPoint.x,b,l);this.currendDataIndex+1<this.data.length?this.body.setTarget(I,f-a):this.body.setTarget(null),C=="finish"&&(this.finishTime=this.data[this.currendDataIndex][pe],this.body.followTarget=!1,this.isSwimming=!1),this.currendDataIndex++}}moveSpheresAway(){this.rightArm.move(J),this.leftArm.move(J),this.rightFoot.move(J),this.leftFoot.move(J)}moveSpheres(a){this.cyclePhase=Ee*a%2*Math.PI;const l=this.getArmOffset(a,0),f=this.getArmOffset(a,Math.PI),x=this.getArmOffset(a*2,0),_=this.getArmOffset(a*2,Math.PI);this.rightArm.move(this.body.center.add(l).add(new p.Vector(Ae,0,0))),this.leftArm.move(this.body.center.add(f).add(new p.Vector(-Ae,0,0)));const b=this.body.velocity.z>=0?-Ce:Ce;this.rightFoot.move(this.body.center.add(new p.Vector(ze,x.y*.5,b))),this.leftFoot.move(this.body.center.add(new p.Vector(-ze,_.y*.5,b)))}update(a){const l=s.getRaceTime();D.raceHasStarted||(this.useTracking=s.params.swimmers.useTracking&&this.data),!this.hasReacted&&D.raceHasStarted&&(this.useTracking||l>this.reactionTime&&!s.params.swimmers.useTracking?(this.swim(!0),this.jump(),this.useTracking&&(this.body.cinematic=!0,this.body.followTarget=!0,this.body.setTarget(null))):(this.swim(!1),this.body.cinematic=!0,this.body.move(J)),this.currendDataIndex=0),this.moveSpheresAway(),this.isSwimming&&(this.useTracking||this.body.addForce(this.force),this.body.center.y>-this.body.radius&&this.moveSpheres(l)),this.handleTracking(l);for(let x of this.spheres)x.update(a);!this.hasDove&&this.body.center.y<0&&this.body.oldCenter.y>=0&&(this.divingDistance=this.body.center.z+s.params.simulation.poolSize.z/2,this.divingTime=l,this.hasDove=!0);const f=this.body.radius;!this.hasBrokeOut&&this.body.center.y>-f&&this.body.oldCenter.y<=-f&&(this.breakoutDistance=this.body.center.z+s.params.simulation.poolSize.z/2,this.breakoutTime=l,this.hasBrokeOut=!0)}};K(D,"useGravity",!1),K(D,"raceHasStarted",!1),K(D,"swimming",!1),K(D,"attributes"),K(D,"initAttributes",a=>{D.attributes=new at(a)}),K(D,"updateAttributesTexture",()=>{D.attributes.update()}),K(D,"getAttributesTexture",()=>D.attributes.texture),K(D,"bindDisplacementTexture",a=>{D.attributes.displacementTexture.bind(a)}),K(D,"bindOldDisplacementTexture",a=>{D.attributes.oldDisplacementTexture.bind(a)}),K(D,"reset",a=>{D.attributes.createRenderingTexture(a.x,a.y)});let z=D;const Me=`
    uniform float wr;
    #define sqrt_2_PI 2.50662827
    #define PI 3.1415926536
    uniform sampler2D swimmersAttributesTexture;
    const int SWIMMERS_NUM_ATTRIBUTES = 4;
    const vec2 TEXTURE_SIZE = vec2(`+Ue+", "+Ve+`);
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

    void ripples(in vec2 coord, in vec2 eventPosition, in float eventTime, float intensity, out vec3 res) {
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
        
        float r_max_max = 0.5;
        
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

    void divingRipples(in vec2 coord, in vec2 swimmerPosition, in vec2 divingInfo, out vec3 res) {
        float swimmer_x = swimmerPosition.x;
        float divingDistance = divingInfo.x;
        float divingTime = divingInfo.y;

        vec2 divingLocation = vec2(swimmer_x, divingDistance - poolSize.z / 2.);

        float divingDistRange = 2.;
        float divingDistMin = 2.;
        float intensity = (divingDistance - divingDistMin) / divingDistRange;
        
        ripples(coord, divingLocation, divingTime, intensity, res);
    }

    void breakoutRipples(in vec2 coord, in vec2 swimmerPosition, in vec2 breakoutInfo, out vec3 res) {
        float swimmer_x = swimmerPosition.x;
        float breakoutDistance = breakoutInfo.x;
        float breakoutTime = breakoutInfo.y;

        vec2 breakoutLocation = vec2(swimmer_x, breakoutDistance - poolSize.z / 2.);

        float breakoutDistRange = 8.;
        float breakoutDistMin = 5.;
        float intensity = (breakoutDistance - breakoutDistMin) / breakoutDistRange;
        
        ripples(coord, breakoutLocation, breakoutTime, intensity, res);
    }



    vec3 getDivingWaves(vec2 coord) {
        vec3 res = vec3(0., 0., -1.);
        
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
`,Ne=16.5;class lt{constructor(){this.params={numSteps:2,focal:45,visualizations:{enabled:!0,showFlags:!0,showRanks:!0,showRanksIfFinished:!1,showWR:!0,showSpeed:!0,showDivingDistance:!0,showFinishTimes:!1,showNeighboursLines:"only medals",neighboursLinesModesDict:{none:0,"only medals":1,all:2},showMedals:"none",medalsModesDict:{none:0,stars:1,bright:2,lanes:3},areaConservationEnabled:!0,shadow:{enabled:!0,shadowRadius:.5,shadowPower:.5,showCircle:!0,circleRadius:.6,circleStroke:.15},sparks:{enabled:!1,glow:5,glowOffset:.5,lengthFactor:1,stroke:.01,num:40,sizeFactor:50,fov:Math.PI/4}},swimmers:{showSpheres:!0,useTracking:!1},video:{thresholdBlending:!0,blendingThreshold:.41,show:!1},simulation:{optimized:!1,waterDamping:.02,poolSize:new p.Vector(2,1,2)}},this.useConfigFile=!0,this.time=0,this.swimmers=[]}isOneVisualizationEnabled(){return this.params.visualizations.showFlags||this.params.visualizations.showRanks||this.params.visualizations.showWR||this.params.visualizations.showSpeed||this.params.visualizations.showDivingDistance}getRaceTime(){return this.time-Ne}setRaceTime(a){if(this.time=Ne+a,!!this.events){for(this.currentEventIndex=0;this.events[this.currentEventIndex]&&this.events[this.currentEventIndex].time<this.getRaceTime();)this.currentEventIndex++;this.currentEventIndex>0&&this.currentEventIndex--}}setTimeBeginRace(){this.setRaceTime(0)}parseConfigFile(a){fetch(a).then(l=>l.text()).then(l=>{this.events=JSON.parse(l),this.currentEventIndex=0,console.log("events : "+JSON.stringify(events)),console.log("event 0"+JSON.stringify(events[0]))})}updateParams(){if(!this.events||!this.useConfigFile)return;const a=this.events[this.currentEventIndex];if(!a)return;let l=a.rankSwimmerToggle;l||(l=1),(a.distance&&this.swimmers[l-1].getDistanceTraveled()>=a.distance||a.time!==void 0&&this.getRaceTime()>=a.time)&&(this.currentEventIndex++,Object.entries(a.params).forEach(f=>{const x=f[0],_=f[1];this.params.visualizations[x]=_}))}}const s=new lt;s.parseConfigFile("./assets/vis-config.json");const Be=new p.Vector(0,-4,0);class ge{constructor(a,l){this.initCenter=new p.Vector(a.x,a.y,a.z),this.center=new p.Vector(a.x,a.y,a.z),this.oldCenter=new p.Vector(a.x,a.y,a.z),this.radius=l,this.cinematic=!1,this.velocity=new p.Vector(0,0,0),this.acceleration=new p.Vector(0,0,0),this.mass=4/3*Math.PI*Math.pow(l,3)*1e3,this.invMass=1/this.mass,this.radiusSquared=l*l,this.mesh=p.Mesh.sphere({detail:10}),this.followTarget=!1}update(a){if(this.moved||(this.oldCenter=new p.Vector(this.center.x,this.center.y,this.center.z)),this.moved=!1,this.cinematic){if(this.velocity=new p.Vector(0,0,0),!this.targetPos||!this.followTarget)return;let l=a/this.targetTime;l=Math.min(Math.max(l,0),1),this.center=this.center.multiply(1-l).add(this.targetPos.multiply(l)),this.velocity=this.center.subtract(this.oldCenter).multiply(1/a),this.targetTime-=a,this.targetTime<0&&(this.targetPos=null)}else{const l=Math.max(0,Math.min(1,(this.radius-this.center.y)/(2*this.radius))),f=Be.multiply(-1.1*this.mass*l),x=this.velocity.unit().multiply(-1e3*this.radiusSquared*l*this.velocity.dot(this.velocity));this.addForce(x),this.addForce(f),this.addForce(Be.multiply(this.mass)),this.velocity=this.velocity.add(this.acceleration.multiply(a)),this.acceleration=new p.Vector(0,0,0),this.center=this.center.add(this.velocity.multiply(a)),this.center.y<this.radius-s.params.simulation.poolSize.y&&(this.center.y=this.radius-1,this.velocity.y=Math.abs(this.velocity.y)*.7)}}setTarget(a,l){this.targetPos=a,this.targetTime=l}addForce(a){this.cinematic?console.warn("Trying to add force to a cinematic sphere."):this.acceleration=this.acceleration.add(a.multiply(this.invMass))}move(a){this.moved=!0,this.oldCenter=new p.Vector(this.center.x,this.center.y,this.center.z),this.center=new p.Vector(a.x,a.y,a.z),this.cinematic||console.warn("Moving a non cinematic sphere.")}}function q(i,a=null){this.gl=i,this.visualizationWavesEnabled=!0,this.sqrt_2_PI=Math.sqrt(2*Math.PI),this.spheres=[];var l=`
    out vec2 coord;
    uniform vec2 invPoolSizeVertex;
    void main() {
      coord = gl_Vertex.xy * invPoolSizeVertex + 0.5;
      gl_Position = vec4(gl_Vertex.xy * 2. * invPoolSizeVertex, 0., 1.0);
    }
  `;this.reset(a),p.Texture.canUseFloatingPointTextures(),this.dropShader=new p.Shader(l,`
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
  `),this.updateShader=new p.Shader(l,`
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
  `),this.normalShader=new p.Shader(l,`
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
  `),this.visualizationWavesShader=new p.Shader(l,`
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
    `)}q.prototype.resetTextures=function(){const i=this.gl;this.textureA&&i.deleteTexture(this.textureA.id),this.textureB&&i.deleteTexture(this.textureB.id),this.textureA=new p.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:a}),this.textureB=new p.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:a}),this.areaConservationTexture=new p.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:a}),this.showAreaConservedGrid=!1,this.showProjectionGrid=!1,this.invPoolSize=new p.Vector(1/s.params.simulation.poolSize.x,1/s.params.simulation.poolSize.y,1/s.params.simulation.poolSize.z);var a=p.Texture.canUseFloatingPointLinearFiltering()?this.gl.LINEAR:this.gl.NEAREST;(!this.textureA.canDrawTo()||!this.textureB.canDrawTo())&&p.Texture.canUseHalfFloatingPointTextures()&&(console.log("No draw"),a=p.Texture.canUseHalfFloatingPointLinearFiltering()?this.gl.LINEAR:this.gl.NEAREST,this.textureA=new p.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:a}),this.textureB=new p.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:a}))};q.prototype.reset=function(i=null){this.WR_position=1e5,this.prev_WR_position=0,i!==null?(console.log("resolution.y : "+i.y),this.W=Math.round(i.x),this.H=Math.round(i.y),console.log("Using custom resolution:",this.W,this.H)):(this.W=256,this.H=256),z.reset(new p.Vector(this.W,this.H)),this.plane=p.Mesh.plane({detail:255,width:s.params.simulation.poolSize.x,height:s.params.simulation.poolSize.z}),this.delta=new p.Vector(1/this.W,1/this.H),this.resetTextures()};q.prototype.addDrop=function(i,a,l,f){var x=this;this.textureB.drawTo(function(){x.textureA.bind(),x.dropShader.uniforms({invPoolSizeVertex:[x.invPoolSize.x,x.invPoolSize.z],center:[i,a],radius:l,strength:f,poolSize:[s.params.simulation.poolSize.x,s.params.simulation.poolSize.y,s.params.simulation.poolSize.z]}).draw(x.plane)}),this.textureB.swapWith(this.textureA)};q.prototype.addOrRemoveVisualizationWaves=function(i){if(!(!this.visualizationWavesEnabled||!z.raceHasStarted)){var a=this;this.textureB.drawTo(function(){a.textureA.bind();const l=z.getAttributesTexture();l&&l.bind(1),a.visualizationWavesShader.uniforms({swimmersAttributesTexture:1,showDivingDistance:s.params.visualizations.showDivingDistance,showWR:s.params.visualizations.showWR,invPoolSizeVertex:[a.invPoolSize.x,a.invPoolSize.z],poolSize:[s.params.simulation.poolSize.x,s.params.simulation.poolSize.y,s.params.simulation.poolSize.z],wr:a.WR_position,sqrt_2_PI:a.sqrt_2_PI,add:i,swimmersNumber:s.swimmers.length,time:s.getRaceTime()}).draw(a.plane)}),this.textureB.swapWith(this.textureA)}};q.prototype.addSwimmer=function(i){for(let a of i.spheres)this.addSphere(a)};q.prototype.addSphere=function(i){this.spheres.push(i)};q.prototype.updateSpheres=function(i){if(this.prev_WR_position=this.WR_position,this.WR_position=s.getRaceTime()*2.155,this.WR_position>s.params.simulation.poolSize.z&&(this.WR_position=2*s.params.simulation.poolSize.z-this.WR_position),s.params.simulation.optimized)z.attributes.draw(),this.textureB.drawTo(()=>{this.textureA.bind(),z.bindDisplacementTexture(1),z.bindOldDisplacementTexture(2),this.sphereShader.uniforms({oldDisplacementTexture:2,displacementTexture:1,invPoolSizeVertex:[this.invPoolSize.x,this.invPoolSize.z],poolSize:[s.params.simulation.poolSize.x,s.params.simulation.poolSize.y,s.params.simulation.poolSize.z],optimized:!0}).draw(this.plane),this.textureB.swapWith(this.textureA),z.attributes.draw()});else for(let l=0;l<this.spheres.length;l++){const f=this.spheres[l];this.moveSphere(f.oldCenter,f.center,f.radius)}};q.prototype.moveSphere=function(i,a,l){var f=this;this.textureB.drawTo(function(){f.textureA.bind(),f.sphereShader.uniforms({invPoolSizeVertex:[f.invPoolSize.x,f.invPoolSize.z],oldCenter:i,newCenter:a,radius:l,poolSize:[s.params.simulation.poolSize.x,s.params.simulation.poolSize.y,s.params.simulation.poolSize.z],optimized:!1}).draw(f.plane)}),this.textureB.swapWith(this.textureA)};q.prototype.stepSimulation=function(){var i=this;this.textureB.drawTo(function(){i.textureA.bind(),i.updateShader.uniforms({invPoolSizeVertex:[i.invPoolSize.x,i.invPoolSize.z],delta:[i.delta.x,i.delta.y],wr:i.WR_position,prev_wr:i.prev_WR_position,poolSize:[s.params.simulation.poolSize.x,s.params.simulation.poolSize.y,s.params.simulation.poolSize.z],sqrt_2_PI:i.sqrt_2_PI,damping:s.params.simulation.waterDamping}).draw(i.plane)}),this.textureB.swapWith(this.textureA),this.updateAreaConservation()};q.prototype.updateNormals=function(){var i=this;this.textureB.drawTo(function(){i.textureA.bind(),i.normalShader.uniforms({invPoolSizeVertex:[i.invPoolSize.x,i.invPoolSize.z],delta:[i.delta.x,i.delta.y]}).draw(i.plane)}),this.textureB.swapWith(this.textureA)};q.prototype.updateAreaConservation=function(){if(!s.params.visualizations.areaConservationEnabled)return;var i,a,l;if(this.textureA.type===this.gl.FLOAT)i=this.gl.FLOAT,a=Float32Array,l="EXT_color_buffer_float";else if(this.textureA.type===this.gl.HALF_FLOAT_OES)i=this.gl.HALF_FLOAT_OES,a=Uint16Array,l="EXT_color_buffer_half_float";else{console.warn("Unsupported texture type for reading");return}if(!this.gl.getExtension(l)){console.warn(l+" not available; cannot read pixels");return}this.fb||(this.fb=this.gl.createFramebuffer()),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.fb),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,this.textureA.id,0);const f=this.gl.checkFramebufferStatus(this.gl.FRAMEBUFFER);if(f!==this.gl.FRAMEBUFFER_COMPLETE){console.error("Framebuffer incomplete: "+f+" for texture type "+this.textureA.type),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null);return}this.gl.pixelStorei(this.gl.PACK_ALIGNMENT,1);const x=new a(this.W*this.H*4),_=new Float32Array(this.W*this.H*4);this.gl.readPixels(0,0,this.W,this.H,this.gl.RGBA,i,x);for(let F=0;F<this.W;F++)_[F*4+1]=1;const b=s.params.simulation.poolSize.x/this.W,C=s.params.simulation.poolSize.z/this.H,I=b*b,L=C*C;if(this.textureA.type===this.gl.FLOAT){for(let F=0;F<this.H;F+=1)for(let T=0;T<this.W;T+=1){const W=(F*this.W+T)*4,X=((this.H-1-F)*this.W+T)*4,N=_[X],$=_[X+1];if(T+1<this.W){const O=x[W]-x[W+4],B=Math.sqrt(O*O+I);_[X+4]=N+B}if(F+1<this.H){const O=x[W]-x[W+this.W*4],B=Math.sqrt(O*O+L);_[X-4*this.W+1]=$+B}}this.gl.bindTexture(this.gl.TEXTURE_2D,this.areaConservationTexture.id),this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT,1),this.gl.texSubImage2D(this.gl.TEXTURE_2D,0,0,0,this.W,this.H,this.gl.RGBA,this.gl.FLOAT,_)}this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.bindTexture(this.gl.TEXTURE_2D,null)};const ct=`
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
`;function ie(i,a,l,f){this.water=a,this.gl=i,this.tileTexture=p.Texture.fromImage(document.getElementById("tiles"),{minFilter:this.gl.LINEAR_MIPMAP_LINEAR,wrap:this.gl.REPEAT,format:this.gl.RGB}),this.franceTexture=p.Texture.fromImage(document.getElementById("france"),{minFilter:this.gl.LINEAR_MIPMAP_LINEAR,wrap:this.gl.REPEAT,format:this.gl.RGBA}),this.chinaTexture=p.Texture.fromImage(document.getElementById("china"),{minFilter:this.gl.LINEAR_MIPMAP_LINEAR,wrap:this.gl.REPEAT,format:this.gl.RGBA}),this.lettersTexture=p.Texture.fromImage(document.getElementById("letters"),{minFilter:this.gl.LINEAR,magFilter:this.gl.LINEAR,wrap:this.gl.REPEAT,format:this.gl.RGBA}),this.flagSize=f,this.flagSize=[1.5,1],this.flagCenter=l,this.lightDir=new p.Vector(2,2,-1).unit(),this.causticTex=new p.Texture(1024,1024),this.waterShaders=[];for(var x=0;x<2;x++)this.waterShaders[x]=new p.Shader(`
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
      uniform bool showRanksIfFinished;
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

      uniform bool shadowEnabled;
      uniform float shadowRadius;
      uniform float shadowPower;
      uniform bool showCircle;
      uniform float shadowCircleRadius;
      uniform float shadowCircleStroke;
      uniform float showNeighboursLinesMode;
      uniform float showMedalsMode;

      // Show neighbours lines modes
      #define LINES_NONE 0
      #define LINES_ONLY_MEDALS 1
      #define LINES_ALL 2

      // Show medals modes
      #define MEDALS_NONE 0
      #define MEDALS_STARS 1
      #define MEDALS_BRIGHT 2
      #define MEDALS_LANES 3
      
      // Color declarations
      #define RED     vec3( 1,.3,.4)
      #define GREEN   vec3(.2, 1,.4)
      #define BLUE    vec3(.2,.8, 1)
      #define RAINBOW abs(cos(uv.x + vec3(5,6,1)))
      #define GOLD    vec3(1., 1., 0.)
      #define SILVER  vec3(.8, .8, .8)
      #define BRONZE  vec3(.75, .54, .44)
      
      
      `+Me+ct+`
      makeStrF(printSpeed) _num_ __ _k _m _DIV _h _endNum
      makeStrF(printTime) _num_ __ _s _endNum

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

      void drawFlags(in vec2 position, in vec2 swimmerPos, in float nationality, bool rightSide, out vec3 color) {
        float swimmer_x = swimmerPos.x;
        float swimmer_z = swimmerPos.y;
        float dz = rightSide ? -2.5 : 2.5;
        vec2 flagCenterNew = vec2(swimmer_x, swimmer_z + dz);
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

      void drawNumbers(in vec2 position, in vec2 swimmerPosition, in int index, in bool rightSide, out vec3 color) {
        float speed = getSwimmerSpeed(index);
        float finishTime = getSwimmerFinishTime(index);
        float visSize = flagSize.x / 2.;
        float delta = showFlags? 5. : 2.;
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

      void drawFinishTime(in vec2 position, in vec2 swimmerPosition, in float finishTime, out vec3 color) {
      }

      void drawRanks(in vec2 position, in vec2 swimmerPosition, in int rank, in bool rightSide, out vec3 color) {
        int showMode = int(showMedalsMode);
        if (showMode == MEDALS_NONE) return;
        if (showRanksIfFinished && getSwimmerFinishTime(rank) < .1) return;

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

      void drawLine(in vec2 projectedPosition, in vec2 swimmerPosition, in int swimmerRank, in vec3 lineColor, out vec3 color) {
        int linesMode = int(showNeighboursLinesMode);  
        if (linesMode == LINES_ONLY_MEDALS && swimmerRank > 2) return;
        float lineThickness = .1;
        if (swimmerRank > 2) lineThickness = .03;
        float lineLength = poolSize.x / 30.;
        float line_z = getSwimmerPosition(swimmerRank).y;
        if (abs(projectedPosition.y - line_z) <= lineThickness && 
            abs(projectedPosition.x - swimmerPosition.x) <= lineLength) color = lineColor;
      }

      void drawSwimmerLines(in vec2 projectedPosition, in vec2 swimmerPosition, in int swimmerRank, out vec3 color) {
        int linesMode = int(showNeighboursLinesMode);
        if (linesMode == LINES_NONE) return;
        float colorAttenuation = .7;
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

      void drawVisualizations(in vec2 position, out vec3 color) {
        vec2 projectedPosition = position;
        vec2 coord = position / poolSize.xz + .5;
        bool hasFirstFinished = getSwimmerFinishTime(0) > 0.1;
        if (showDivingDistance) drawDivingRipples(coord, color);
        for (int i = 0; i < 10; i++) {
          float i_float = float(i);
          if (i_float > swimmersNumber - 0.1) break;
          vec2 swimmerPos = getSwimmerPosition(i);
          if (showProjectionGrid && isOnConservedAreaGrid(position, 0.1)) color = vec3(1., 1., 0.); /* Debug conserved area grid */
          if (showWR) drawWorldRecordLine(position, color); 
          if (areaConservation) {
            vec2 coord = position / poolSize.xz + 0.5;
            position = texture(areaConservationTexture, coord).xy;
          }

          float speed = getSwimmerSpeed(i);
          bool rightSide = hasFirstFinished ? false : speed >= 0.;
          drawSwimmerLines(projectedPosition, swimmerPos, i, color);
          
          if (showRanks) drawRanks(projectedPosition, swimmerPos, i, rightSide, color);
          drawFlags(position, swimmerPos, getSwimmerNationality(i), rightSide, color);
          if (showSpeed || showFinishTimes) drawNumbers(position, swimmerPos, i, rightSide, color);
          if (shadowEnabled) drawShadows(projectedPosition, swimmerPos, getSwimmerAltitude(i), color);
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
            color = skyColor;
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
        
        `+(x?`
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
    `);this.sphereMesh=p.Mesh.sphere({detail:10}),this.sphereShader=new p.Shader(le+`
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
  `),this.reset(),this.cubeShader=new p.Shader(le+`
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
  `),this.sphereCenter=new p.Vector,this.sphereRadius=0;var _=!!this.gl.getExtension("OES_standard_derivatives");this.causticsShader=new p.Shader(le+`
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
  `,(_?`#extension GL_OES_standard_derivatives: enable
`:"")+`
  `+le+`
    in vec3 oldPos;
    in vec3 newPos;
    in vec3 ray;
    out vec4 fragColor;

  void main() {
    `+(_?`
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
  `)}ie.prototype.reset=function(){this.cubeMesh=p.Mesh.cube({width:s.params.simulation.poolSize.x,height:2,depth:s.params.simulation.poolSize.z}),this.cubeMesh.triangles.splice(4,2),this.cubeMesh.compile()};ie.prototype.updateCaustics=function(i){};ie.prototype.renderWater=function(i,a,l){var f=new p.Raytracer;i.textureA.bind(0),this.tileTexture.bind(1),a.bind(2),this.causticTex.bind(3),this.franceTexture.bind(4),this.chinaTexture.bind(8),this.lettersTexture.bind(7),i.areaConservationTexture.bind(5);const x=z.getAttributesTexture();x&&x.bind(6),this.gl.enable(this.gl.CULL_FACE);for(var _=0;_<2;_++)this.gl.cullFace(_?this.gl.BACK:this.gl.FRONT),this.waterShaders[_].uniforms({light:this.lightDir,water:0,tiles:1,sky:2,causticTex:3,france:4,china:8,areaConservationTexture:5,swimmersAttributesTexture:6,iChannel0:7,areaConservation:s.params.visualizations.areaConservationEnabled,flagSize:[1.5,2],flagCenter:[this.flagCenter.x,this.flagCenter.y],poolSize:[s.params.simulation.poolSize.x,s.params.simulation.poolSize.y,s.params.simulation.poolSize.z],poolSizeVertexShader:[s.params.simulation.poolSize.x,s.params.simulation.poolSize.y,s.params.simulation.poolSize.z],eye:f.eye,sphereCenter:this.sphereCenter,sphereRadius:this.sphereRadius,showProjectionGrid:i.showProjectionGrid,showAreaConservedGrid:i.showAreaConservedGrid,wr:i.WR_position,swimmersNumber:s.swimmers.length,showFlags:s.params.visualizations.showFlags,showRanks:s.params.visualizations.showRanks,showRanksIfFinished:s.params.visualizations.showRanksIfFinished,showWR:s.params.visualizations.showWR,showSpeed:s.params.visualizations.showSpeed,showDivingDistance:s.params.visualizations.showDivingDistance,showFinishTimes:s.params.visualizations.showFinishTimes,time:s.getRaceTime(),shadowEnabled:l.enabled,shadowRadius:l.shadowRadius,shadowPower:l.shadowPower,showCircle:l.showCircle,shadowCircleRadius:l.circleRadius,shadowCircleStroke:l.circleStroke,showNeighboursLinesMode:Math.round(s.params.visualizations.neighboursLinesModesDict[s.params.visualizations.showNeighboursLines]),showMedalsMode:Math.round(s.params.visualizations.medalsModesDict[s.params.visualizations.showMedals])}).draw(i.plane);this.gl.disable(this.gl.CULL_FACE)};ie.prototype.renderSpheres=function(i){for(let a of i.spheres)this.renderSphere(i,a)};ie.prototype.renderSphere=function(i,a){i.textureA.bind(0),this.causticTex.bind(1),this.sphereShader.uniforms({light:this.lightDir,water:0,causticTex:1,sphereCenter:[a.center.x,a.center.y,a.center.z],sphereRadius:a.radius,poolSize:[s.params.simulation.poolSize.x,s.params.simulation.poolSize.y,s.params.simulation.poolSize.z]}).draw(a.mesh)};ie.prototype.renderSphereOld=function(i){i.textureA.bind(0),this.causticTex.bind(1),this.sphereShader.uniforms({light:this.lightDir,water:0,causticTex:1,sphereCenter:this.sphereCenter,sphereRadius:this.sphereRadius,poolSize:[s.params.simulation.poolSize.x,s.params.simulation.poolSize.y,s.params.simulation.poolSize.z]}).draw(this.sphereMesh)};ie.prototype.renderCube=function(i){this.gl.enable(this.gl.CULL_FACE),i.textureA.bind(0),this.tileTexture.bind(1),this.causticTex.bind(2),this.cubeShader.uniforms({light:this.lightDir,water:0,tiles:1,causticTex:2,sphereCenter:this.sphereCenter,sphereRadius:this.sphereRadius,poolSize:[s.params.simulation.poolSize.x,s.params.simulation.poolSize.y,s.params.simulation.poolSize.z]}).draw(this.cubeMesh),this.gl.disable(this.gl.CULL_FACE)};function Ie(i,a){this.gl=a,this.id=a.createTexture(),a.bindTexture(a.TEXTURE_CUBE_MAP,this.id),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,1),a.texParameteri(a.TEXTURE_CUBE_MAP,a.TEXTURE_MAG_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_CUBE_MAP,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_CUBE_MAP,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_CUBE_MAP,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE),a.texImage2D(a.TEXTURE_CUBE_MAP_NEGATIVE_X,0,a.RGB,a.RGB,a.UNSIGNED_BYTE,i.xneg),a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X,0,a.RGB,a.RGB,a.UNSIGNED_BYTE,i.xpos),a.texImage2D(a.TEXTURE_CUBE_MAP_NEGATIVE_Y,0,a.RGB,a.RGB,a.UNSIGNED_BYTE,i.yneg),a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_Y,0,a.RGB,a.RGB,a.UNSIGNED_BYTE,i.ypos),a.texImage2D(a.TEXTURE_CUBE_MAP_NEGATIVE_Z,0,a.RGB,a.RGB,a.UNSIGNED_BYTE,i.zneg),a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_Z,0,a.RGB,a.RGB,a.UNSIGNED_BYTE,i.zpos)}Ie.prototype.bind=function(i){this.gl.activeTexture(this.gl.TEXTURE0+(i||0)),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,this.id)};Ie.prototype.unbind=function(i){this.gl.activeTexture(this.gl.TEXTURE0+(i||0)),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,null)};const Xe=200,dt=`
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

`;class ht{constructor(a,l){if(this.gl=a,this.copyVideo=!1,this.show=!1,a===null){alert("Unable to initialize WebGL. Your browser or machine may not support it.");return}a.clearColor(0,0,0,1),a.clear(a.COLOR_BUFFER_BIT),this.shader=new p.Shader(`
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
    uniform bool thresholdBlending;
    uniform float blendingThreshold;

    `+dt+Me+`

    void main(void) {
        highp vec4 texelColor = texture(uSampler, vTextureCoord);
        vec3 waterColor = vec3(.294, .812, 1.);
        float r = .5;
        if (thresholdBlending) {
            r = 1.;
            if (length(waterColor - texelColor.rgb) < blendingThreshold ||
             length(texelColor.rgb) > 1.5 && texelColor.b > .1 + (texelColor.r + texelColor.g) * .5) r = 0.3;
        }
        fragColor = vec4(texelColor.rgb, r);
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
`),this.mesh=p.Mesh.plane({width:2,height:2,coords:!0,normals:!0}),this.mesh.transform(p.Matrix.rotate(90,1,0,0)),this.mesh.transform(p.Matrix.translate(0,.1,0)),this.programInfo=null,this.texture=this.initTexture(),this.video=this.setupVideo(l),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!0)}render(){const a=s.params.visualizations.sparks,l=s.params.simulation.poolSize;s.params.video.show&&(this.copyVideo&&this.updateTexture(),(!this.mesh.vertexBuffers||!this.mesh.vertexBuffers.vertex)&&this.mesh.compile(),this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture),z.swimmersAttributesTexture&&z.swimmersAttributesTexture.bind(1),this.shader.uniforms({uSampler:0,swimmersHelperFunctions:1,iTime:s.getRaceTime(),poolSize:[l.x,l.y,l.z],iResolution:[this.gl.canvas.width,this.gl.canvas.height],sparksEnabled:a.enabled,sparksGlow:a.glow,sparksGlowOffset:a.glowOffset,sparksStroke:a.stroke,sparksNumber:a.num,sparksLengthFactor:a.lengthFactor,sparksSizeFactor:a.sizeFactor,fov:a.fov,thresholdBlending:s.params.video.thresholdBlending,blendingThreshold:s.params.video.blendingThreshold}).draw(this.mesh),this.gl.disable(this.gl.BLEND))}initTexture(){const a=this.gl.createTexture();this.gl.bindTexture(this.gl.TEXTURE_2D,a);const l=0,f=this.gl.RGBA,x=1,_=1,b=0,C=this.gl.RGBA,I=this.gl.UNSIGNED_BYTE,L=new Uint8Array([0,0,255,255]);return this.gl.texImage2D(this.gl.TEXTURE_2D,l,f,x,_,b,C,I,L),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),a}updateTexture(){const l=this.gl.RGBA,f=this.gl.RGBA,x=this.gl.UNSIGNED_BYTE;this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture),this.gl.texImage2D(this.gl.TEXTURE_2D,0,l,f,x,this.video)}setupVideo(a){const l=document.createElement("video");let f=!1,x=!1;l.playsInline=!0,l.muted=!0,l.loop=!0,l.addEventListener("playing",()=>{f=!0,b()},!0),l.addEventListener("timeupdate",()=>{x=!0,b()},!0),l.src=a,l.play();const _=this,b=()=>{f&&x&&(_.copyVideo=!0)};return l}}const ve=new Je,ft=function(i,a){const l=ve.addFolder("visualizations");l.close(),l.add(s,"useConfigFile").name("use configuration file"),l.add(s.params.visualizations,"showFlags").name("show flags").listen(),l.add(s.params.visualizations,"showWR").name("show world record").listen(),l.add(s.params.visualizations,"showNeighboursLines",["none","only medals","all"]).name("show neighbours lines").listen(),l.add(s.params.visualizations,"showMedals",["none","stars","bright","lanes"]).name("show potential medals").listen(),l.add(s.params.visualizations,"showSpeed").name("show speed").listen(),l.add(s.params.visualizations,"showRanks").name("show ranks").listen(),l.addFolder("ranks").add(s.params.visualizations,"showRanksIfFinished").name("show ranks if finished").listen(),l.add(s.params.visualizations,"showDivingDistance").name("show diving distance").listen(),l.add(s.params.visualizations.shadow,"enabled").name("show shadow"),l.add(s.params.visualizations,"areaConservationEnabled","areaConservationEnabled").name("area conservation").listen();const x=ve.addFolder("video");x.close(),x.add(s.params.video,"thresholdBlending").name("threshold blending"),x.add(s.params.video,"blendingThreshold",.1,.5).name("blending threshold"),x.add(s.params.video,"show").name("show").listen();const _=l.addFolder("Sparks");_.close(),_.add(s.params.visualizations.sparks,"enabled").name("sparks enabled"),_.add(s.params.visualizations.sparks,"glow",1,30).name("sparks glow factor"),_.add(s.params.visualizations.sparks,"lengthFactor",.1,10).name("sparks length factor"),_.add(s.params.visualizations.sparks,"glowOffset",.1,3).name("sparks glow offset"),_.add(s.params.visualizations.sparks,"stroke",.001,.05).name("sparks stroke"),_.add(s.params.visualizations.sparks,"num",10,Xe).step(1).name("sparks number"),_.add(s.params.visualizations.sparks,"sizeFactor",10,100).name("size factor");const b=l.addFolder("Swimmers shadows");b.close(),b.add(s.params.visualizations.shadow,"shadowRadius",0,2).name("shadow radius"),b.add(s.params.visualizations.shadow,"shadowPower",.1,2).name("shadow power"),b.add(s.params.visualizations.shadow,"showCircle").name("circle"),b.add(s.params.visualizations.shadow,"circleRadius",.5,2).name("circle radius"),b.add(s.params.visualizations.shadow,"circleStroke",.1,.5).name("circle stroke");const C=ve.addFolder("Simulation");C.close(),C.add(s.params.simulation,"optimized").name("optimized").listen(),C.add(s.params.simulation.poolSize,"x",1,25).name("pool width").onChange(function(F){a()}).listen(),C.add(s.params.simulation.poolSize,"z",1,50).name("pool height").onChange(function(F){a()}).listen(),C.add(s.params.simulation.poolSize,"y",1,3).name("pool depth").onChange(function(F){a()}).listen(),C.add(s.params.simulation,"waterDamping",.005,.15).name("water damping").listen();const I=ve.addFolder("swimmers");I.close(),I.add(s.params.swimmers,"showSpheres").name("show spheres").listen(),I.add(s.params.swimmers,"useTracking").name("use tracking data").listen();const L=ve.addFolder("camera");L.close(),L.add(s.params,"focal",28,45).name("focal").listen().onChange(function(F){s.params.visualizations.sparks.fov=F*2*Math.PI/360,i.matrixMode(i.PROJECTION),i.loadIdentity(),i.perspective(s.params.focal,i.canvas.width/i.canvas.height,.01,100),i.matrixMode(i.MODELVIEW),console.log("perspective : "+s.params.focal)})};function ut(i){return i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n/g,"<br>")}function mt(i){var a=ut(i);a=="WebGL not supported"&&(a='Your browser does not support WebGL.<br>Please see    <a href="http://www.khronos.org/webgl/wiki/Getting_a_WebGL_Implementation">    Getting a WebGL Implementation</a>.');var l=document.getElementById("loading");l.innerHTML=a,l.style.zIndex=1}window.onerror=mt;var R=p.create();R.canvas.tabIndex=0;var A,Oe,V;const Fe=10;var fe=-25,_e=-200.5,xe=0;let be=0,Se=0;var ue=4,Q=!1,ye,Pe,H;z.initAttributes(R);let k=new p.Vector(256,256);function He(){document.getElementById("warning").hidden=!(k.x*k.y>3e5&&A&&s.params.visualizations.areaConservationEnabled)}let Re=0;function pt(i){Re+=i,Re>=1&&(document.getElementById("fps").innerText=`${(1/i).toFixed(1)} FPS`,Re=0)}function ce(){console.log("reset"),document.getElementById("resolution").innerText=`Resolution: ${k.x} x ${k.y}`,He(),ye=new p.Vector(0,-s.params.simulation.poolSize.z/2+1),A.reset(k),V.flagCenter=ye,V.flagSize=Pe,V.reset();const i=s.params.simulation.poolSize.x/Fe;let a=s.params.simulation.poolSize.x/2-i/2,l=0;for(let f of s.swimmers)f.body.center.x=a,f.startingPoint.x=a,f.parseData("./assets/race-data/"+l+".csv"),l++,a-=i}function gt(i){const a=parseFloat(i.target.value);isNaN(a)||(s.setRaceTime(a),H&&H.video&&(H.video.currentTime=s.time),s.swimmers.forEach(l=>l.setCurrentDataIndex()))}window.onload=function(){var i=window.devicePixelRatio||1,a=document.getElementById("help");function l(){var c=innerWidth,d=innerHeight;R.canvas.width=c*i,R.canvas.height=d*i,R.canvas.style.width=c+"px",R.canvas.style.height=d+"px",R.viewport(0,0,R.canvas.width,R.canvas.height),R.matrixMode(R.PROJECTION),R.loadIdentity(),R.perspective(s.params.focal,R.canvas.width/R.canvas.height,.01,100),R.matrixMode(R.MODELVIEW),h()}document.body.appendChild(R.canvas),R.canvas.oncontextmenu=function(c){c.preventDefault()},R.clearColor(0,0,0,1),ye=new p.Vector(0,-s.params.simulation.poolSize.z/2+1),Pe=.7,A=new q(R),H=new ht(R,"./video.mp4");const f=document.getElementById("time-slider");f&&f.addEventListener("input",gt);const x=document.getElementById("drop-zone");let _=0;if(document.addEventListener("dragenter",c=>{_++,x.style.display="flex"}),document.addEventListener("dragover",c=>{c.preventDefault(),c.dataTransfer.dropEffect="copy"}),document.addEventListener("dragleave",c=>{_--,_===0&&(x.style.display="none")}),document.addEventListener("drop",c=>{c.preventDefault(),_=0,x.style.display="none";const d=c.dataTransfer.files;if(d.length>0&&(d[0].type.startsWith("video/")||d[0].name.endsWith(".mp4"))){const g=URL.createObjectURL(d[0]);H.video.src=g,H.video.play(),console.log("Loaded:",d[0].name)}}),ft(R,ce),V=new ie(R,A,ye,Pe),Oe=new Ie({xneg:document.getElementById("xneg"),xpos:document.getElementById("xpos"),yneg:document.getElementById("ypos"),ypos:document.getElementById("ypos"),zneg:document.getElementById("zneg"),zpos:document.getElementById("zpos")},R),!A.textureA.canDrawTo()||!A.textureB.canDrawTo())throw new Error("Rendering to floating-point textures is required but not supported");const b=new p.Vector(-.4,-.75,.2),C=new p.Vector(.4,-.75,.2),I=new z(b);new z(C);for(let c=0;c<1;c++)s.swimmers.push(new z(b));const L=I.body.radius;for(let c of s.swimmers)A.addSwimmer(c);ce();for(var F=0;F<20;F++)A.addDrop(Math.random()*2-1,Math.random()*2-1,.06,F&1?.01:-.01);document.getElementById("loading").innerHTML="",l();var T=window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(c){setTimeout(c,0)},W=new Date().getTime();function X(){var c=new Date().getTime();Q||(n((c-W)/1e3),h()),W=c,T(X)}T(X),window.onresize=l;var N,$,O,B=-1,ee=0,re=1,oe=2;const de=3;var ae,he;function U(c,d,g){if(ae=c,he=d,!g||g.button===0){var m=new p.Raytracer,u=m.getRayForPixel(c*i,d*i),w=m.eye.add(u.multiply(-m.eye.y/u.y));for(let y of s.swimmers){var E=p.Raytracer.hitTestSphere(m.eye,u,y.body.center,y.body.radius);if(E){B=re,O=y,y.body.cinematic=!0,N=E.hit,$=m.getRayForPixel(R.canvas.width/2,R.canvas.height/2).negative();return}}Math.abs(w.x)<s.params.simulation.poolSize.x/2&&Math.abs(w.z)<s.params.simulation.poolSize.z/2&&(B=ee,Z(c,d))}else g.button===2?B=oe:g.button===1&&(B=de)}function Z(c,d,g){switch(B){case ee:{var m=new p.Raytracer,u=m.getRayForPixel(c*i,d*i),w=m.eye.add(u.multiply(-m.eye.y/u.y));A.addDrop(w.x/s.params.simulation.poolSize.x*2,w.z/s.params.simulation.poolSize.z*2,.06,.03),Q&&(A.updateNormals(),V.updateCaustics(A));break}case re:{var m=new p.Raytracer,u=m.getRayForPixel(c*i,d*i),E=-$.dot(m.eye.subtract(N))/$.dot(u),y=m.eye.add(u.multiply(E));const P=O.body.center.add(y.subtract(N)),G=O.body.radius,se=Math.max(G-s.params.simulation.poolSize.x/2,Math.min(s.params.simulation.poolSize.x/2-G,P.x)),Ye=Math.max(G-s.params.simulation.poolSize.y,Math.min(10,P.y)),qe=Math.max(G-s.params.simulation.poolSize.z/2,Math.min(s.params.simulation.poolSize.z/2-G,P.z));O.body.move(new p.Vector(se,Ye,qe)),N=y,Q&&V.updateCaustics(A);break}case oe:{if(g&&g.shiftKey){xe-=c-ae,xe=Math.max(-89.999,Math.min(89.999,xe));break}_e-=c-ae,fe-=d-he,fe=Math.max(-89.999,Math.min(89.999,fe));break}case de:{const S=.001*ue;be+=S*(c-ae),Se-=S*(d-he)}}ae=c,he=d,Q&&h()}function j(){B=-1,O&&(O.body.cinematic=!z.useGravity)}function ne(c){return c===a||c.parentNode&&ne(c.parentNode)}function v(c){ue*=1-c*4e-4,ue=Math.max(2,Math.min(1e3,ue)),Q&&h()}addEventListener("wheel",function(c){var d=c.deltaY;v(-d)}),document.onmousedown=function(c){R.canvas.focus(),ne(c.target)||U(c.pageX,c.pageY,c)},document.onmousemove=function(c){Z(c.pageX,c.pageY,c)},document.onmouseup=function(){j()},document.ontouchstart=function(c){c.touches.length===1&&!ne(c.target)&&(c.preventDefault(),U(c.touches[0].pageX,c.touches[0].pageY,!1))},document.ontouchmove=function(c){c.touches.length===1&&Z(c.touches[0].pageX,c.touches[0].pageY)},document.ontouchend=function(c){c.touches.length==0&&j()};function t(){z.useGravity=!0,A.WR_position=0,s.setTimeBeginRace(),H.copyVideo&&(H.video.currentTime=s.time),z.raceHasStarted=!0;for(let c of s.swimmers)c.startRace()}function r(){z.raceHasStarted=!1;for(let c of s.swimmers)c.swim(!1)}function e(){Q=!Q,H.video.currentTime=s.time}const o=function(c){if(c.which==32)e();else if(c.which==71){z.useGravity=!z.useGravity;for(let d of s.swimmers)d.body.cinematic=z.useGravity}else if(c.which==76&&Q)h();else if(c.which==74)s.swimmers.forEach(d=>d.jump(2));else if(c.which==67)s.params.visualizations.areaConservationEnabled=!s.params.visualizations.areaConservationEnabled,He(),console.log("Area conservation "+(s.params.visualizations.areaConservationEnabled?"enabled.":"disabled."));else if(c.which==80)A.showProjectionGrid=!A.showProjectionGrid,console.log("Projection grid "+(A.showProjectionGrid?"enabled.":"disabled."));else if(c.which==65)A.showAreaConservedGrid=!A.showAreaConservedGrid,console.log("Area conserved grid "+(A.showAreaConservedGrid?"enabled.":"disabled."));else if(c.which==83){if(z.swimming=!z.swimming,z.swimming)for(let d of s.swimmers)d.swim(!0);else r();console.log("Swimming "+(z.swimming?"enabled.":"disabled."))}else if(c.which==86)s.params.video.show=!s.params.video.show;else if(c.which==79){if(s.params.simulation.optimized=!0,s.params.simulation.poolSize.x=25,s.params.simulation.poolSize.y=2,s.params.simulation.poolSize.z=50,k.x=1024,k.y=2048,s.params.visualizations.areaConservationEnabled=!1,s.params.simulation.waterDamping=.1,s.swimmers.length!=Fe)for(let d=s.swimmers.length;d<Fe;d++){const g=new z(b);s.swimmers.push(g),A.addSwimmer(g)}s.time=0,H.copyVideo&&(H.video.currentTime=s.time),ce(),s.params.focal=31.75,s.params.visualizations.sparks.fov=s.params.focal*2*Math.PI/360,R.matrixMode(R.PROJECTION),R.loadIdentity(),R.perspective(s.params.focal,R.canvas.width/R.canvas.height,.01,100),R.matrixMode(R.MODELVIEW),be=-.42,Se=1.18,ue=52.5,fe=-24,_e=-261.5,xe=-4,console.log("Olympic mode enabled.")}else if(c.which==87){if(A.resetTextures(),z.raceHasStarted){r();return}t()}else c.which==72?(document.getElementById("commands").hidden=!document.getElementById("commands").hidden,document.getElementById("h").hidden=!document.getElementById("h").hidden):c.which==40?(k.x>129&&(k.x=Math.round(k.x/2)),ce(),console.log("decreasing x resolution")):c.which==38?(k.x<16384&&(k.x=Math.round(k.x*2)),ce(),console.log("increasing x resolution")):c.which==37?(k.y>129&&(k.y=Math.round(k.y/2)),ce(),console.log("decreasing y resolution")):c.which==39&&(k.y<16384&&(k.y=Math.round(k.y*2)),ce(),console.log("increasing y resolution"))};R.canvas.addEventListener("keydown",o);function n(c){if(!(c>1)){if(B==re)for(let d of s.swimmers)d.body.velocity=new p.Vector(0,0,0);for(let d of s.swimmers)d.update(c);A.updateSpheres(c);for(let d=0;d<s.params.numSteps;d++)A.stepSimulation();V.updateCaustics(A),z.raceHasStarted&&(s.time+=c),s.updateParams(),f.value=s.getRaceTime(),pt(c)}}function h(){p.keys.L&&(V.lightDir=p.Vector.fromAngles((90-_e)*Math.PI/180,-fe*Math.PI/180),Q&&V.updateCaustics(A)),s.isOneVisualizationEnabled()&&z.updateAttributesTexture(),A.addOrRemoveVisualizationWaves(!0),A.updateNormals(),R.clear(R.COLOR_BUFFER_BIT|R.DEPTH_BUFFER_BIT),R.loadIdentity(),R.translate(be,Se,-ue),R.rotate(-xe,0,0,1),R.rotate(-fe,1,0,0),R.rotate(-_e,0,1,0),R.translate(0,.5,0),R.enable(R.DEPTH_TEST),V.sphereCenter=s.swimmers[0].body.center,V.sphereRadius=L,V.renderCube(A),V.renderWater(A,Oe,s.params.visualizations.shadow),s.params.swimmers.showSpheres&&V.renderSpheres(A),H.render(),R.disable(R.DEPTH_TEST),A.addOrRemoveVisualizationWaves(!1)}};
//# sourceMappingURL=swimming-3FFQElVj.js.map
