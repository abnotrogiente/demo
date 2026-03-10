var je=Object.defineProperty;var De=i=>{throw TypeError(i)};var Ke=(i,n,s)=>n in i?je(i,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[n]=s;var ne=(i,n,s)=>Ke(i,typeof n!="symbol"?n+"":n,s),Ze=(i,n,s)=>n.has(i)||De("Cannot "+s);var Le=(i,n,s)=>n.has(i)?De("Cannot add the same private member more than once"):n instanceof WeakSet?n.add(i):n.set(i,s);var le=(i,n,s)=>(Ze(i,n,"access private method"),s);import"./modulepreload-polyfill-B5Qt9EMX.js";import{g as $e}from"./lil-gui.module.min-Vka56b52.js";var v=function(){var i,n={create:function(t){t=t||{};var r=document.createElement("canvas");r.width=800,r.height=600,"alpha"in t||(t.alpha=!1);try{i=r.getContext("webgl2",t)}catch{}try{i=i||r.getContext("experimental-webgl",t)}catch{}if(!i)throw new Error("WebGL not supported");return i.HALF_FLOAT_OES=36193,s(),h(),x(),G(),i},keys:{},Matrix:y,Indexer:S,Buffer:z,Mesh:F,HitTest:I,Raytracer:H,Shader:q,Texture:W,Vector:u};function s(){i.MODELVIEW=V|1,i.PROJECTION=V|2;var t=new y,r=new y;i.modelviewMatrix=new y,i.projectionMatrix=new y;var e=[],o=[],l,d;i.matrixMode=function(f){switch(f){case i.MODELVIEW:l="modelviewMatrix",d=e;break;case i.PROJECTION:l="projectionMatrix",d=o;break;default:throw new Error("invalid matrix mode "+f)}},i.loadIdentity=function(){y.identity(i[l])},i.loadMatrix=function(f){for(var a=f.m,m=i[l].m,g=0;g<16;g++)m[g]=a[g]},i.multMatrix=function(f){i.loadMatrix(y.multiply(i[l],f,r))},i.perspective=function(f,a,m,g){i.multMatrix(y.perspective(f,a,m,g,t))},i.frustum=function(f,a,m,g,p,w){i.multMatrix(y.frustum(f,a,m,g,p,w,t))},i.ortho=function(f,a,m,g,p,w){i.multMatrix(y.ortho(f,a,m,g,p,w,t))},i.scale=function(f,a,m){i.multMatrix(y.scale(f,a,m,t))},i.translate=function(f,a,m){i.multMatrix(y.translate(f,a,m,t))},i.rotate=function(f,a,m,g){i.multMatrix(y.rotate(f,a,m,g,t))},i.lookAt=function(f,a,m,g,p,w,R,T,b){i.multMatrix(y.lookAt(f,a,m,g,p,w,R,T,b,t))},i.pushMatrix=function(){d.push(Array.prototype.slice.call(i[l].m))},i.popMatrix=function(){var f=d.pop();i[l].m=k?new Float32Array(f):f},i.project=function(f,a,m,g,p,w){g=g||i.modelviewMatrix,p=p||i.projectionMatrix,w=w||i.getParameter(i.VIEWPORT);var R=p.transformPoint(g.transformPoint(new u(f,a,m)));return new u(w[0]+w[2]*(R.x*.5+.5),w[1]+w[3]*(R.y*.5+.5),R.z*.5+.5)},i.unProject=function(f,a,m,g,p,w){g=g||i.modelviewMatrix,p=p||i.projectionMatrix,w=w||i.getParameter(i.VIEWPORT);var R=new u((f-w[0])/w[2]*2-1,(a-w[1])/w[3]*2-1,m*2-1);return y.inverse(y.multiply(p,g,t),r).transformPoint(R)},i.matrixMode(i.MODELVIEW)}function h(){var t={mesh:new F({coords:!0,colors:!0,triangles:!1}),mode:-1,coord:[0,0,0,0],color:[1,1,1,1],shader:new q("      uniform float pointSize;      out vec4 color;      out vec4 coord;      void main() {        color = gl_Color;        coord = gl_TexCoord;        gl_Position = gl_ModelViewProjectionMatrix * gl_Vertex;        gl_PointSize = pointSize;      }    ","      uniform sampler2D tex;      uniform float pointSize;      uniform bool useTexture;      in vec4 color;      in vec4 coord;      out vec4 fragColor;      void main() {        fragColor = color;        if (useTexture) fragColor *= texture(tex, coord.xy);      }    ")};i.pointSize=function(r){t.shader.uniforms({pointSize:r})},i.begin=function(r){if(t.mode!=-1)throw new Error("mismatched gl.begin() and gl.end() calls");t.mode=r,t.mesh.colors=[],t.mesh.coords=[],t.mesh.vertices=[]},i.color=function(r,e,o,l){t.color=arguments.length==1?r.toArray().concat(1):[r,e,o,l||1]},i.texCoord=function(r,e){t.coord=arguments.length==1?r.toArray(2):[r,e]},i.vertex=function(r,e,o){t.mesh.colors.push(t.color),t.mesh.coords.push(t.coord),t.mesh.vertices.push(arguments.length==1?r.toArray():[r,e,o])},i.end=function(){if(t.mode==-1)throw new Error("mismatched gl.begin() and gl.end() calls");t.mesh.compile(),t.shader.uniforms({useTexture:!!i.getParameter(i.TEXTURE_BINDING_2D)}).draw(t.mesh,t.mode),t.mode=-1}}function x(){var t=i,r=0,e=0,o={},l=!1,d=Object.prototype.hasOwnProperty;function f(){for(var T in o)if(d.call(o,T)&&o[T])return!0;return!1}function a(T){var b={};for(var L in T)typeof T[L]=="function"?b[L]=function(ee){return function(){ee.apply(T,arguments)}}(T[L]):b[L]=T[L];b.original=T,b.x=b.pageX,b.y=b.pageY;for(var N=i.canvas;N;N=N.offsetParent)b.x-=N.offsetLeft,b.y-=N.offsetTop;return l?(b.deltaX=b.x-r,b.deltaY=b.y-e):(b.deltaX=0,b.deltaY=0,l=!0),r=b.x,e=b.y,b.dragging=f(),b.preventDefault=function(){b.original.preventDefault()},b.stopPropagation=function(){b.original.stopPropagation()},b}function m(T){i=t,f()||(A(document,"mousemove",g),A(document,"mouseup",p),D(i.canvas,"mousemove",g),D(i.canvas,"mouseup",p)),o[T.which]=!0,T=a(T),i.onmousedown&&i.onmousedown(T),T.preventDefault()}function g(T){i=t,T=a(T),i.onmousemove&&i.onmousemove(T),T.preventDefault()}function p(T){i=t,o[T.which]=!1,f()||(D(document,"mousemove",g),D(document,"mouseup",p),A(i.canvas,"mousemove",g),A(i.canvas,"mouseup",p)),T=a(T),i.onmouseup&&i.onmouseup(T),T.preventDefault()}function w(){l=!1}function R(){o={},l=!1}A(i.canvas,"mousedown",m),A(i.canvas,"mousemove",g),A(i.canvas,"mouseup",p),A(i.canvas,"mouseover",w),A(i.canvas,"mouseout",w),A(document,"contextmenu",R)}function _(t){var r={8:"BACKSPACE",9:"TAB",13:"ENTER",16:"SHIFT",27:"ESCAPE",32:"SPACE",37:"LEFT",38:"UP",39:"RIGHT",40:"DOWN"};return r[t]||(t>=65&&t<=90?String.fromCharCode(t):null)}function A(t,r,e){t.addEventListener(r,e)}function D(t,r,e){t.removeEventListener(r,e)}A(document,"keydown",function(t){if(!t.altKey&&!t.ctrlKey&&!t.metaKey){var r=_(t.keyCode);r&&(n.keys[r]=!0),n.keys[t.keyCode]=!0}}),A(document,"keyup",function(t){if(!t.altKey&&!t.ctrlKey&&!t.metaKey){var r=_(t.keyCode);r&&(n.keys[r]=!1),n.keys[t.keyCode]=!1}});function G(){(function(t){i.makeCurrent=function(){i=t}})(i),i.animate=function(){var t=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(l){setTimeout(l,16.666666666666668)},r=new Date().getTime(),e=i;function o(){i=e;var l=new Date().getTime();i.onupdate&&i.onupdate((l-r)/1e3),i.ondraw&&i.ondraw(),t(o),r=l}o()},i.fullscreen=function(t){t=t||{};var r=t.paddingTop||0,e=t.paddingLeft||0,o=t.paddingRight||0,l=t.paddingBottom||0;if(!document.body)throw new Error("document.body doesn't exist yet (call gl.fullscreen() from window.onload() or from inside the <body> tag)");document.body.appendChild(i.canvas),document.body.style.overflow="hidden",i.canvas.style.position="absolute",i.canvas.style.left=e+"px",i.canvas.style.top=r+"px";function d(){i.canvas.width=window.innerWidth-e-o,i.canvas.height=window.innerHeight-r-l,i.viewport(0,0,i.canvas.width,i.canvas.height),(t.camera||!("camera"in t))&&(i.matrixMode(i.PROJECTION),i.loadIdentity(),i.perspective(t.fov||45,i.canvas.width/i.canvas.height,t.near||.1,t.far||1e3),i.matrixMode(i.MODELVIEW)),i.ondraw&&i.ondraw()}A(window,"resize",d),d()}}var V=305397760,k=typeof Float32Array<"u";function y(){var t=Array.prototype.concat.apply([],arguments);t.length||(t=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),this.m=k?new Float32Array(t):t}y.prototype={inverse:function(){return y.inverse(this,new y)},transpose:function(){return y.transpose(this,new y)},multiply:function(t){return y.multiply(this,t,new y)},transformPoint:function(t){var r=this.m;return new u(r[0]*t.x+r[1]*t.y+r[2]*t.z+r[3],r[4]*t.x+r[5]*t.y+r[6]*t.z+r[7],r[8]*t.x+r[9]*t.y+r[10]*t.z+r[11]).divide(r[12]*t.x+r[13]*t.y+r[14]*t.z+r[15])},transformVector:function(t){var r=this.m;return new u(r[0]*t.x+r[1]*t.y+r[2]*t.z,r[4]*t.x+r[5]*t.y+r[6]*t.z,r[8]*t.x+r[9]*t.y+r[10]*t.z)}},y.inverse=function(t,r){r=r||new y;var e=t.m,o=r.m;o[0]=e[5]*e[10]*e[15]-e[5]*e[14]*e[11]-e[6]*e[9]*e[15]+e[6]*e[13]*e[11]+e[7]*e[9]*e[14]-e[7]*e[13]*e[10],o[1]=-e[1]*e[10]*e[15]+e[1]*e[14]*e[11]+e[2]*e[9]*e[15]-e[2]*e[13]*e[11]-e[3]*e[9]*e[14]+e[3]*e[13]*e[10],o[2]=e[1]*e[6]*e[15]-e[1]*e[14]*e[7]-e[2]*e[5]*e[15]+e[2]*e[13]*e[7]+e[3]*e[5]*e[14]-e[3]*e[13]*e[6],o[3]=-e[1]*e[6]*e[11]+e[1]*e[10]*e[7]+e[2]*e[5]*e[11]-e[2]*e[9]*e[7]-e[3]*e[5]*e[10]+e[3]*e[9]*e[6],o[4]=-e[4]*e[10]*e[15]+e[4]*e[14]*e[11]+e[6]*e[8]*e[15]-e[6]*e[12]*e[11]-e[7]*e[8]*e[14]+e[7]*e[12]*e[10],o[5]=e[0]*e[10]*e[15]-e[0]*e[14]*e[11]-e[2]*e[8]*e[15]+e[2]*e[12]*e[11]+e[3]*e[8]*e[14]-e[3]*e[12]*e[10],o[6]=-e[0]*e[6]*e[15]+e[0]*e[14]*e[7]+e[2]*e[4]*e[15]-e[2]*e[12]*e[7]-e[3]*e[4]*e[14]+e[3]*e[12]*e[6],o[7]=e[0]*e[6]*e[11]-e[0]*e[10]*e[7]-e[2]*e[4]*e[11]+e[2]*e[8]*e[7]+e[3]*e[4]*e[10]-e[3]*e[8]*e[6],o[8]=e[4]*e[9]*e[15]-e[4]*e[13]*e[11]-e[5]*e[8]*e[15]+e[5]*e[12]*e[11]+e[7]*e[8]*e[13]-e[7]*e[12]*e[9],o[9]=-e[0]*e[9]*e[15]+e[0]*e[13]*e[11]+e[1]*e[8]*e[15]-e[1]*e[12]*e[11]-e[3]*e[8]*e[13]+e[3]*e[12]*e[9],o[10]=e[0]*e[5]*e[15]-e[0]*e[13]*e[7]-e[1]*e[4]*e[15]+e[1]*e[12]*e[7]+e[3]*e[4]*e[13]-e[3]*e[12]*e[5],o[11]=-e[0]*e[5]*e[11]+e[0]*e[9]*e[7]+e[1]*e[4]*e[11]-e[1]*e[8]*e[7]-e[3]*e[4]*e[9]+e[3]*e[8]*e[5],o[12]=-e[4]*e[9]*e[14]+e[4]*e[13]*e[10]+e[5]*e[8]*e[14]-e[5]*e[12]*e[10]-e[6]*e[8]*e[13]+e[6]*e[12]*e[9],o[13]=e[0]*e[9]*e[14]-e[0]*e[13]*e[10]-e[1]*e[8]*e[14]+e[1]*e[12]*e[10]+e[2]*e[8]*e[13]-e[2]*e[12]*e[9],o[14]=-e[0]*e[5]*e[14]+e[0]*e[13]*e[6]+e[1]*e[4]*e[14]-e[1]*e[12]*e[6]-e[2]*e[4]*e[13]+e[2]*e[12]*e[5],o[15]=e[0]*e[5]*e[10]-e[0]*e[9]*e[6]-e[1]*e[4]*e[10]+e[1]*e[8]*e[6]+e[2]*e[4]*e[9]-e[2]*e[8]*e[5];for(var l=e[0]*o[0]+e[1]*o[4]+e[2]*o[8]+e[3]*o[12],d=0;d<16;d++)o[d]/=l;return r},y.transpose=function(t,r){r=r||new y;var e=t.m,o=r.m;return o[0]=e[0],o[1]=e[4],o[2]=e[8],o[3]=e[12],o[4]=e[1],o[5]=e[5],o[6]=e[9],o[7]=e[13],o[8]=e[2],o[9]=e[6],o[10]=e[10],o[11]=e[14],o[12]=e[3],o[13]=e[7],o[14]=e[11],o[15]=e[15],r},y.multiply=function(t,r,e){e=e||new y;var o=t.m,l=r.m,d=e.m;return d[0]=o[0]*l[0]+o[1]*l[4]+o[2]*l[8]+o[3]*l[12],d[1]=o[0]*l[1]+o[1]*l[5]+o[2]*l[9]+o[3]*l[13],d[2]=o[0]*l[2]+o[1]*l[6]+o[2]*l[10]+o[3]*l[14],d[3]=o[0]*l[3]+o[1]*l[7]+o[2]*l[11]+o[3]*l[15],d[4]=o[4]*l[0]+o[5]*l[4]+o[6]*l[8]+o[7]*l[12],d[5]=o[4]*l[1]+o[5]*l[5]+o[6]*l[9]+o[7]*l[13],d[6]=o[4]*l[2]+o[5]*l[6]+o[6]*l[10]+o[7]*l[14],d[7]=o[4]*l[3]+o[5]*l[7]+o[6]*l[11]+o[7]*l[15],d[8]=o[8]*l[0]+o[9]*l[4]+o[10]*l[8]+o[11]*l[12],d[9]=o[8]*l[1]+o[9]*l[5]+o[10]*l[9]+o[11]*l[13],d[10]=o[8]*l[2]+o[9]*l[6]+o[10]*l[10]+o[11]*l[14],d[11]=o[8]*l[3]+o[9]*l[7]+o[10]*l[11]+o[11]*l[15],d[12]=o[12]*l[0]+o[13]*l[4]+o[14]*l[8]+o[15]*l[12],d[13]=o[12]*l[1]+o[13]*l[5]+o[14]*l[9]+o[15]*l[13],d[14]=o[12]*l[2]+o[13]*l[6]+o[14]*l[10]+o[15]*l[14],d[15]=o[12]*l[3]+o[13]*l[7]+o[14]*l[11]+o[15]*l[15],e},y.identity=function(t){t=t||new y;var r=t.m;return r[0]=r[5]=r[10]=r[15]=1,r[1]=r[2]=r[3]=r[4]=r[6]=r[7]=r[8]=r[9]=r[11]=r[12]=r[13]=r[14]=0,t},y.perspective=function(t,r,e,o,l){var d=Math.tan(t*Math.PI/360)*e,f=d*r;return y.frustum(-f,f,-d,d,e,o,l)},y.frustum=function(t,r,e,o,l,d,f){f=f||new y;var a=f.m;return a[0]=2*l/(r-t),a[1]=0,a[2]=(r+t)/(r-t),a[3]=0,a[4]=0,a[5]=2*l/(o-e),a[6]=(o+e)/(o-e),a[7]=0,a[8]=0,a[9]=0,a[10]=-(d+l)/(d-l),a[11]=-2*d*l/(d-l),a[12]=0,a[13]=0,a[14]=-1,a[15]=0,f},y.ortho=function(t,r,e,o,l,d,f){f=f||new y;var a=f.m;return a[0]=2/(r-t),a[1]=0,a[2]=0,a[3]=-(r+t)/(r-t),a[4]=0,a[5]=2/(o-e),a[6]=0,a[7]=-(o+e)/(o-e),a[8]=0,a[9]=0,a[10]=-2/(d-l),a[11]=-(d+l)/(d-l),a[12]=0,a[13]=0,a[14]=0,a[15]=1,f},y.scale=function(t,r,e,o){o=o||new y;var l=o.m;return l[0]=t,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=r,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=e,l[11]=0,l[12]=0,l[13]=0,l[14]=0,l[15]=1,o},y.translate=function(t,r,e,o){o=o||new y;var l=o.m;return l[0]=1,l[1]=0,l[2]=0,l[3]=t,l[4]=0,l[5]=1,l[6]=0,l[7]=r,l[8]=0,l[9]=0,l[10]=1,l[11]=e,l[12]=0,l[13]=0,l[14]=0,l[15]=1,o},y.rotate=function(t,r,e,o,l){if(!t||!r&&!e&&!o)return y.identity(l);l=l||new y;var d=l.m,f=Math.sqrt(r*r+e*e+o*o);t*=Math.PI/180,r/=f,e/=f,o/=f;var a=Math.cos(t),m=Math.sin(t),g=1-a;return d[0]=r*r*g+a,d[1]=r*e*g-o*m,d[2]=r*o*g+e*m,d[3]=0,d[4]=e*r*g+o*m,d[5]=e*e*g+a,d[6]=e*o*g-r*m,d[7]=0,d[8]=o*r*g-e*m,d[9]=o*e*g+r*m,d[10]=o*o*g+a,d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,l},y.lookAt=function(t,r,e,o,l,d,f,a,m,g){g=g||new y;var p=g.m,w=new u(t,r,e),R=new u(o,l,d),T=new u(f,a,m),b=w.subtract(R).unit(),L=T.cross(b).unit(),N=b.cross(L).unit();return p[0]=L.x,p[1]=L.y,p[2]=L.z,p[3]=-L.dot(w),p[4]=N.x,p[5]=N.y,p[6]=N.z,p[7]=-N.dot(w),p[8]=b.x,p[9]=b.y,p[10]=b.z,p[11]=-b.dot(w),p[12]=0,p[13]=0,p[14]=0,p[15]=1,g};function S(){this.unique=[],this.indices=[],this.map={}}S.prototype={add:function(t){var r=JSON.stringify(t);return r in this.map||(this.map[r]=this.unique.length,this.unique.push(t)),this.map[r]}};function z(t,r){this.buffer=null,this.target=t,this.type=r,this.data=[]}z.prototype={compile:function(t){for(var r=[],e=0,o=1e4;e<this.data.length;e+=o)r=Array.prototype.concat.apply(r,this.data.slice(e,e+o));var l=this.data.length?r.length/this.data.length:0;if(l!=Math.round(l))throw new Error("buffer elements not of consistent size, average size is "+l);this.buffer=this.buffer||i.createBuffer(),this.buffer.length=r.length,this.buffer.spacing=l,i.bindBuffer(this.target,this.buffer),i.bufferData(this.target,new this.type(r),t||i.STATIC_DRAW)}};function F(t){t=t||{},this.vertexBuffers={},this.indexBuffers={},this.addVertexBuffer("vertices","gl_Vertex"),t.coords&&this.addVertexBuffer("coords","gl_TexCoord"),t.normals&&this.addVertexBuffer("normals","gl_Normal"),t.colors&&this.addVertexBuffer("colors","gl_Color"),(!("triangles"in t)||t.triangles)&&this.addIndexBuffer("triangles"),t.lines&&this.addIndexBuffer("lines")}F.prototype={addVertexBuffer:function(t,r){var e=this.vertexBuffers[r]=new z(i.ARRAY_BUFFER,Float32Array);e.name=t,this[t]=[]},addIndexBuffer:function(t){this.indexBuffers[t]=new z(i.ELEMENT_ARRAY_BUFFER,Uint16Array),this[t]=[]},compile:function(){for(var t in this.vertexBuffers){var r=this.vertexBuffers[t];r.data=this[r.name],r.compile()}for(var e in this.indexBuffers){var r=this.indexBuffers[e];r.data=this[e],r.compile()}},transform:function(t){if(this.vertices=this.vertices.map(function(e){return t.transformPoint(u.fromArray(e)).toArray()}),this.normals){var r=t.inverse().transpose();this.normals=this.normals.map(function(e){return r.transformVector(u.fromArray(e)).unit().toArray()})}return this.compile(),this},computeNormals:function(){this.normals||this.addVertexBuffer("normals","gl_Normal");for(var t=0;t<this.vertices.length;t++)this.normals[t]=new u;for(var t=0;t<this.triangles.length;t++){var r=this.triangles[t],e=u.fromArray(this.vertices[r[0]]),o=u.fromArray(this.vertices[r[1]]),l=u.fromArray(this.vertices[r[2]]),d=o.subtract(e).cross(l.subtract(e)).unit();this.normals[r[0]]=this.normals[r[0]].add(d),this.normals[r[1]]=this.normals[r[1]].add(d),this.normals[r[2]]=this.normals[r[2]].add(d)}for(var t=0;t<this.vertices.length;t++)this.normals[t]=this.normals[t].unit().toArray();return this.compile(),this},computeWireframe:function(){for(var t=new S,r=0;r<this.triangles.length;r++)for(var e=this.triangles[r],o=0;o<e.length;o++){var l=e[o],d=e[(o+1)%e.length];t.add([Math.min(l,d),Math.max(l,d)])}return this.lines||this.addIndexBuffer("lines"),this.lines=t.unique,this.compile(),this},getAABB:function(){var t={min:new u(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)};t.max=t.min.negative();for(var r=0;r<this.vertices.length;r++){var e=u.fromArray(this.vertices[r]);t.min=u.min(t.min,e),t.max=u.max(t.max,e)}return t},getBoundingSphere:function(){for(var t=this.getAABB(),r={center:t.min.add(t.max).divide(2),radius:0},e=0;e<this.vertices.length;e++)r.radius=Math.max(r.radius,u.fromArray(this.vertices[e]).subtract(r.center).length());return r}},F.plane=function(t){t=t||{};for(var r=new F(t),e=t.detailX||t.detail||1,o=t.detailY||t.detail||1,l=t.width||2,d=t.height||2,f=0;f<=o;f++)for(var a=f/o,m=0;m<=e;m++){var g=m/e;if(r.vertices.push([(g-.5)*l,(a-.5)*d,0]),r.coords&&r.coords.push([g,a]),r.normals&&r.normals.push([0,0,1]),m<e&&f<o){var p=m+f*(e+1);r.triangles.push([p,p+1,p+e+1]),r.triangles.push([p+e+1,p+1,p+e+2])}}return r.compile(),r};var B=[[0,4,2,6,-1,0,0],[1,3,5,7,1,0,0],[0,1,4,5,0,-1,0],[2,6,3,7,0,1,0],[0,2,1,3,0,0,-1],[4,5,6,7,0,0,1]];function P(t){return new u((t&1)*2-1,(t&2)-1,(t&4)/2-1)}F.cube=function(t){for(var r=new F(t),e=t&&t.width||2,o=t&&t.height||2,l=t&&t.depth||2,d=0;d<B.length;d++){for(var f=B[d],a=d*4,m=0;m<4;m++){var g=f[m];const p=P(g).toArray();p[0]*=e/2,p[1]*=o/2,p[2]*=l/2,r.vertices.push(p),r.coords&&r.coords.push([m&1,(m&2)/2]),r.normals&&r.normals.push(f.slice(4,7))}r.triangles.push([a,a+1,a+2]),r.triangles.push([a+2,a+1,a+3])}return r.compile(),r},F.sphere=function(t){function r(N,ee,oe){return m?[N,oe,ee]:[N,ee,oe]}function e(N){return N+(N-N*N)/2}t=t||{};for(var o=new F(t),l=new S,d=t.detail||6,f=0;f<8;f++)for(var a=P(f),m=a.x*a.y*a.z>0,g=[],p=0;p<=d;p++){for(var w=0;p+w<=d;w++){var R=p/d,T=w/d,b=(d-p-w)/d,L={vertex:new u(e(R),e(T),e(b)).unit().multiply(a).toArray()};o.coords&&(L.coord=a.y>0?[1-R,b]:[b,1-R]),g.push(l.add(L))}if(p>0)for(var w=0;p+w<=d;w++){var R=(p-1)*(d+1)+(p-1-(p-1)*(p-1))/2+w,T=p*(d+1)+(p-p*p)/2+w;o.triangles.push(r(g[R],g[R+1],g[T])),p+w<d&&o.triangles.push(r(g[T],g[R+1],g[T+1]))}}return o.vertices=l.unique.map(function(N){return N.vertex}),o.coords&&(o.coords=l.unique.map(function(N){return N.coord})),o.normals&&(o.normals=o.vertices),o.compile(),o},F.load=function(t,r){r=r||{},"coords"in r||(r.coords=!!t.coords),"normals"in r||(r.normals=!!t.normals),"colors"in r||(r.colors=!!t.colors),"triangles"in r||(r.triangles=!!t.triangles),"lines"in r||(r.lines=!!t.lines);var e=new F(r);return e.vertices=t.vertices,e.coords&&(e.coords=t.coords),e.normals&&(e.normals=t.normals),e.colors&&(e.colors=t.colors),e.triangles&&(e.triangles=t.triangles),e.lines&&(e.lines=t.lines),e.compile(),e};function I(t,r,e){this.t=arguments.length?t:Number.MAX_VALUE,this.hit=r,this.normal=e}I.prototype={mergeWith:function(t){t.t>0&&t.t<this.t&&(this.t=t.t,this.hit=t.hit,this.normal=t.normal)}};function H(){var t=i.getParameter(i.VIEWPORT),r=i.modelviewMatrix.m,e=new u(r[0],r[4],r[8]),o=new u(r[1],r[5],r[9]),l=new u(r[2],r[6],r[10]),d=new u(r[3],r[7],r[11]);this.eye=new u(-d.dot(e),-d.dot(o),-d.dot(l));var f=t[0],a=f+t[2],m=t[1],g=m+t[3];this.ray00=i.unProject(f,m,1).subtract(this.eye),this.ray10=i.unProject(a,m,1).subtract(this.eye),this.ray01=i.unProject(f,g,1).subtract(this.eye),this.ray11=i.unProject(a,g,1).subtract(this.eye),this.viewport=t}H.prototype={getRayForPixel:function(t,r){t=(t-this.viewport[0])/this.viewport[2],r=1-(r-this.viewport[1])/this.viewport[3];var e=u.lerp(this.ray00,this.ray10,t),o=u.lerp(this.ray01,this.ray11,t);return u.lerp(e,o,r).unit()}},H.hitTestBox=function(t,r,e,o){var l=e.subtract(t).divide(r),d=o.subtract(t).divide(r),f=u.min(l,d),a=u.max(l,d),m=f.max(),g=a.min();if(m>0&&m<g){var p=1e-6,w=t.add(r.multiply(m));return e=e.add(p),o=o.subtract(p),new I(m,w,new u((w.x>o.x)-(w.x<e.x),(w.y>o.y)-(w.y<e.y),(w.z>o.z)-(w.z<e.z)))}return null},H.hitTestSphere=function(t,r,e,o){var l=t.subtract(e),d=r.dot(r),f=2*r.dot(l),a=l.dot(l)-o*o,m=f*f-4*d*a;if(m>0){var g=(-f-Math.sqrt(m))/(2*d),p=t.add(r.multiply(g));return new I(g,p,p.subtract(e).divide(o))}return null},H.hitTestTriangle=function(t,r,e,o,l){var d=o.subtract(e),f=l.subtract(e),a=d.cross(f).unit(),m=a.dot(e.subtract(t))/a.dot(r);if(m>0){var g=t.add(r.multiply(m)),p=g.subtract(e),w=f.dot(f),R=f.dot(d),T=f.dot(p),b=d.dot(d),L=d.dot(p),N=w*b-R*R,ee=(b*T-R*L)/N,oe=(w*L-R*T)/N;if(ee>=0&&oe>=0&&ee+oe<=1)return new I(m,g,a)}return null};function M(t,r,e){let o;for(;(o=t.exec(r))!=null;)e(o)}var Y="LIGHTGL";function q(t,r){function e(w){var R=document.getElementById(w);return R?R.text:w}t=e(t),r=e(r);var o="    uniform mat3 gl_NormalMatrix;    uniform mat4 gl_ModelViewMatrix;    uniform mat4 gl_ProjectionMatrix;    uniform mat4 gl_ModelViewProjectionMatrix;    uniform mat4 gl_ModelViewMatrixInverse;    uniform mat4 gl_ProjectionMatrixInverse;    uniform mat4 gl_ModelViewProjectionMatrixInverse;  ",l=`#version 300 es
    `+o+"    in vec4 gl_Vertex;    in vec4 gl_TexCoord;    in vec3 gl_Normal;    in vec4 gl_Color;    vec4 ftransform() {      return gl_ModelViewProjectionMatrix * gl_Vertex;    }  ",d=`#version 300 es
    precision highp float;
  `+o,f=t+r,a={};M(/\b(gl_[^;]*)\b;/g,o,function(w){var R=w[1];if(f.indexOf(R)!=-1){var T=R.replace(/[a-z_]/g,"");a[T]=Y+R}}),f.indexOf("ftransform")!=-1&&(a.MVPM=Y+"gl_ModelViewProjectionMatrix"),this.usedMatrices=a;function m(w,R){var T={},b=/^((\s*\/\/.*\n|\s*#extension.*\n)+)[^]*$/.exec(R);return R=b?b[1]+w+R.substr(b[1].length):w+R,M(/\bgl_\w+\b/g,w,function(L){L in T||(R=R.replace(new RegExp("\\b"+L+"\\b","g"),Y+L),T[L]=!0)}),R}t=m(l,t),r=m(d,r);function g(w,R){var T=i.createShader(w);if(i.shaderSource(T,R),i.compileShader(T),!i.getShaderParameter(T,i.COMPILE_STATUS))throw new Error("compile error: "+i.getShaderInfoLog(T));return T}if(this.program=i.createProgram(),i.attachShader(this.program,g(i.VERTEX_SHADER,t)),i.attachShader(this.program,g(i.FRAGMENT_SHADER,r)),i.linkProgram(this.program),!i.getProgramParameter(this.program,i.LINK_STATUS))throw new Error("link error: "+i.getProgramInfoLog(this.program));this.attributes={},this.uniformLocations={};var p={};M(/uniform\s+sampler(1D|2D|3D|Cube)\s+(\w+)\s*;/g,t+r,function(w){p[w[2]]=1}),this.isSampler=p}function K(t){var r=Object.prototype.toString.call(t);return r=="[object Array]"||r=="[object Float32Array]"}function Z(t){var r=Object.prototype.toString.call(t);return r=="[object Number]"||r=="[object Boolean]"}new y,new y,q.prototype={uniforms:function(t){i.useProgram(this.program);for(var r in t){var e=this.uniformLocations[r]||i.getUniformLocation(this.program,r);if(e){this.uniformLocations[r]=e;var o=t[r];if(o instanceof u?o=[o.x,o.y,o.z]:o instanceof y&&(o=o.m),K(o))switch(o.length){case 1:i.uniform1fv(e,new Float32Array(o));break;case 2:i.uniform2fv(e,new Float32Array(o));break;case 3:i.uniform3fv(e,new Float32Array(o));break;case 4:i.uniform4fv(e,new Float32Array(o));break;case 9:i.uniformMatrix3fv(e,!1,new Float32Array([o[0],o[3],o[6],o[1],o[4],o[7],o[2],o[5],o[8]]));break;case 16:i.uniformMatrix4fv(e,!1,new Float32Array([o[0],o[4],o[8],o[12],o[1],o[5],o[9],o[13],o[2],o[6],o[10],o[14],o[3],o[7],o[11],o[15]]));break;default:throw new Error(`don't know how to load uniform "`+r+'" of length '+o.length)}else if(Z(o))(this.isSampler[r]?i.uniform1i:i.uniform1f).call(i,e,o);else throw new Error('attempted to set uniform "'+r+'" to invalid value '+o)}}return this},draw:function(t,r){this.drawBuffers(t.vertexBuffers,t.indexBuffers[r==i.LINES?"lines":"triangles"],arguments.length<2?i.TRIANGLES:r)},drawBuffers:function(t,r,e){var o=this.usedMatrices,l=i.modelviewMatrix,d=i.projectionMatrix,f=o.MVMI||o.NM?l.inverse():null,a=o.PMI?d.inverse():null,m=o.MVPM||o.MVPMI?d.multiply(l):null,g={};if(o.MVM&&(g[o.MVM]=l),o.MVMI&&(g[o.MVMI]=f),o.PM&&(g[o.PM]=d),o.PMI&&(g[o.PMI]=a),o.MVPM&&(g[o.MVPM]=m),o.MVPMI&&(g[o.MVPMI]=m.inverse()),o.NM){var p=f.m;g[o.NM]=[p[0],p[4],p[8],p[1],p[5],p[9],p[2],p[6],p[10]]}this.uniforms(g);var w=0;for(var R in t){var T=t[R],b=this.attributes[R]||i.getAttribLocation(this.program,R.replace(/^(gl_.*)$/,Y+"$1"));b==-1||!T.buffer||(this.attributes[R]=b,i.bindBuffer(i.ARRAY_BUFFER,T.buffer),i.enableVertexAttribArray(b),i.vertexAttribPointer(b,T.buffer.spacing,i.FLOAT,!1,0,0),w=T.buffer.length/T.buffer.spacing)}for(var R in this.attributes)R in t||i.disableVertexAttribArray(this.attributes[R]);return w&&(!r||r.buffer)&&(r?(i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,r.buffer),i.drawElements(e,r.buffer.length,i.UNSIGNED_SHORT,0)):i.drawArrays(e,0,w)),this}};function W(t,r,e){e=e||{},this.width=t,this.height=r,this.id=i.createTexture();let o=e.type||i.UNSIGNED_BYTE,l=e.format||i.RGBA,d=i.RGBA;const f=i.getExtension("EXT_color_buffer_float"),a=i.getExtension("EXT_color_buffer_half_float");o===i.FLOAT?(f?i instanceof WebGL2RenderingContext&&(l=i.RGBA32F):(console.warn("FLOAT textures not renderable, falling back to UNSIGNED_BYTE"),o=i.UNSIGNED_BYTE,l=i.RGBA8),d=i.RGBA):o===i.HALF_FLOAT_OES?(a?i instanceof WebGL2RenderingContext&&(l=i.RGBA16F):(console.warn("HALF_FLOAT textures not renderable, falling back to UNSIGNED_BYTE"),o=i.UNSIGNED_BYTE,l=i.RGBA8),d=i.RGBA):(o=i.UNSIGNED_BYTE,l=i.RGBA8,d=i.RGBA);const m=e.filter||e.magFilter||i.LINEAR,g=e.filter||e.minFilter||i.LINEAR;i.bindTexture(i.TEXTURE_2D,this.id),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,1),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,m),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,g),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,e.wrap||e.wrapS||i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,e.wrap||e.wrapT||i.CLAMP_TO_EDGE),i instanceof WebGL2RenderingContext?i.texImage2D(i.TEXTURE_2D,0,l,t,r,0,d,o,null):i.texImage2D(i.TEXTURE_2D,0,d,t,r,0,d,o,null),i.bindTexture(i.TEXTURE_2D,null),this.format=d,this.type=o,this.internalFormat=l}var J,$,E;W.prototype={bind:function(t){i.activeTexture(i.TEXTURE0+(t||0)),i.bindTexture(i.TEXTURE_2D,this.id)},unbind:function(t){i.activeTexture(i.TEXTURE0+(t||0)),i.bindTexture(i.TEXTURE_2D,null)},canDrawTo:function(){J=J||i.createFramebuffer(),i.bindFramebuffer(i.FRAMEBUFFER,J),i.framebufferTexture2D(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,this.id,0);var t=i.checkFramebufferStatus(i.FRAMEBUFFER)==i.FRAMEBUFFER_COMPLETE;return i.bindFramebuffer(i.FRAMEBUFFER,null),t},drawTo:function(t){i.getExtension("EXT_color_buffer_float")||console.warn("EXT_color_buffer_float not available!");var e=i.getParameter(i.VIEWPORT);if(J=J||i.createFramebuffer(),$=$||i.createRenderbuffer(),i.bindFramebuffer(i.FRAMEBUFFER,J),i.bindRenderbuffer(i.RENDERBUFFER,$),(this.width!=$.width||this.height!=$.height)&&($.width=this.width,$.height=this.height,i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_COMPONENT16,this.width,this.height)),i.framebufferTexture2D(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,this.id,0),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,$),i.checkFramebufferStatus(i.FRAMEBUFFER)!=i.FRAMEBUFFER_COMPLETE)throw new Error("Rendering to this texture is not supported (incomplete framebuffer)");i.viewport(0,0,this.width,this.height),t(),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindRenderbuffer(i.RENDERBUFFER,null),i.viewport(e[0],e[1],e[2],e[3])},swapWith:function(t){var r;r=t.id,t.id=this.id,this.id=r,r=t.width,t.width=this.width,this.width=r,r=t.height,t.height=this.height,this.height=r}},W.fromImage=function(t,r){r=r||{};var e=new W(t.width,t.height,r);i.bindTexture(i.TEXTURE_2D,e.id);try{i.texImage2D(i.TEXTURE_2D,0,e.format,e.format,e.type,t)}catch{throw location.protocol=="file:"?new Error('image not loaded for security reasons (serve this page over "http://" instead)'):new Error("image not loaded for security reasons (image must originate from the same domain as this page or use Cross-Origin Resource Sharing)")}return r.minFilter&&r.minFilter!=i.NEAREST&&r.minFilter!=i.LINEAR&&i.generateMipmap(i.TEXTURE_2D),i.bindTexture(i.TEXTURE_2D,null),e},W.fromURL=function(t,r){E=E||function(){var d=document.createElement("canvas").getContext("2d");d.canvas.width=d.canvas.height=128;for(var f=0;f<d.canvas.height;f+=16)for(var a=0;a<d.canvas.width;a+=16)d.fillStyle=(a^f)&16?"#FFF":"#DDD",d.fillRect(a,f,16,16);return d.canvas}();var e=W.fromImage(E,r),o=new Image,l=i;return o.onload=function(){l.makeCurrent(),W.fromImage(o,r).swapWith(e)},o.src=t,e},W.canUseFloatingPointTextures=function(){return!!i.getExtension("OES_texture_float")},W.canUseFloatingPointLinearFiltering=function(){return!!i.getExtension("OES_texture_float_linear")},W.canUseHalfFloatingPointTextures=function(){return!!i.getExtension("OES_texture_half_float")},W.canUseHalfFloatingPointLinearFiltering=function(){return!!i.getExtension("OES_texture_half_float_linear")};function u(t,r,e){this.x=t||0,this.y=r||0,this.z=e||0}return u.prototype={negative:function(){return new u(-this.x,-this.y,-this.z)},add:function(t){return t instanceof u?new u(this.x+t.x,this.y+t.y,this.z+t.z):new u(this.x+t,this.y+t,this.z+t)},subtract:function(t){return t instanceof u?new u(this.x-t.x,this.y-t.y,this.z-t.z):new u(this.x-t,this.y-t,this.z-t)},multiply:function(t){return t instanceof u?new u(this.x*t.x,this.y*t.y,this.z*t.z):new u(this.x*t,this.y*t,this.z*t)},divide:function(t){return t instanceof u?new u(this.x/t.x,this.y/t.y,this.z/t.z):new u(this.x/t,this.y/t,this.z/t)},equals:function(t){return this.x==t.x&&this.y==t.y&&this.z==t.z},dot:function(t){return this.x*t.x+this.y*t.y+this.z*t.z},cross:function(t){return new u(this.y*t.z-this.z*t.y,this.z*t.x-this.x*t.z,this.x*t.y-this.y*t.x)},length:function(){return Math.sqrt(this.dot(this))},unit:function(){return this.divide(this.length())},min:function(){return Math.min(Math.min(this.x,this.y),this.z)},max:function(){return Math.max(Math.max(this.x,this.y),this.z)},toAngles:function(){return{theta:Math.atan2(this.z,this.x),phi:Math.asin(this.y/this.length())}},angleTo:function(t){return Math.acos(this.dot(t)/(this.length()*t.length()))},toArray:function(t){return[this.x,this.y,this.z].slice(0,t||3)},clone:function(){return new u(this.x,this.y,this.z)},init:function(t,r,e){return this.x=t,this.y=r,this.z=e,this}},u.negative=function(t,r){return r.x=-t.x,r.y=-t.y,r.z=-t.z,r},u.add=function(t,r,e){return r instanceof u?(e.x=t.x+r.x,e.y=t.y+r.y,e.z=t.z+r.z):(e.x=t.x+r,e.y=t.y+r,e.z=t.z+r),e},u.subtract=function(t,r,e){return r instanceof u?(e.x=t.x-r.x,e.y=t.y-r.y,e.z=t.z-r.z):(e.x=t.x-r,e.y=t.y-r,e.z=t.z-r),e},u.multiply=function(t,r,e){return r instanceof u?(e.x=t.x*r.x,e.y=t.y*r.y,e.z=t.z*r.z):(e.x=t.x*r,e.y=t.y*r,e.z=t.z*r),e},u.divide=function(t,r,e){return r instanceof u?(e.x=t.x/r.x,e.y=t.y/r.y,e.z=t.z/r.z):(e.x=t.x/r,e.y=t.y/r,e.z=t.z/r),e},u.cross=function(t,r,e){return e.x=t.y*r.z-t.z*r.y,e.y=t.z*r.x-t.x*r.z,e.z=t.x*r.y-t.y*r.x,e},u.unit=function(t,r){var e=t.length();return r.x=t.x/e,r.y=t.y/e,r.z=t.z/e,r},u.fromAngles=function(t,r){return new u(Math.cos(t)*Math.cos(r),Math.sin(r),Math.sin(t)*Math.cos(r))},u.randomDirection=function(){return u.fromAngles(Math.random()*Math.PI*2,Math.asin(Math.random()*2-1))},u.min=function(t,r){return new u(Math.min(t.x,r.x),Math.min(t.y,r.y),Math.min(t.z,r.z))},u.max=function(t,r){return new u(Math.max(t.x,r.x),Math.max(t.y,r.y),Math.max(t.z,r.z))},u.lerp=function(t,r,e){return r.subtract(t).multiply(e).add(t)},u.fromArray=function(t){return new u(t[0],t[1],t[2])},u.angleBetween=function(t,r){return t.angleTo(r)},n}();const Ae=.3,ze=.15,Ce=1,Je=10,Oe=Math.ceil(Je/4),Ue=10,Qe=`#version 300 es
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
`,rt=new Float32Array([-1,-1,1,-1,1,1,-1,1]),ot=new Uint16Array([0,1,2,2,3,0]);var ie,Ve,pe,Ge;class nt{constructor(n){Le(this,ie);this.numVecAttributes=Oe,this.maxNumSwimmer=Ue,this.gl=n;const s=n.NEAREST;this.texture=new v.Texture(this.numVecAttributes,this.maxNumSwimmer,{type:n.FLOAT,filter:s}),this.initPrograms(),this.indexBuffer=this.gl.createBuffer(),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.indexBuffer),this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER,ot,this.gl.STATIC_DRAW),this.vboPlane=this.gl.createBuffer(),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vboPlane),this.gl.bufferData(this.gl.ARRAY_BUFFER,rt,this.gl.STATIC_DRAW),this.vboPoints=this.gl.createBuffer()}update(){this.numSwimmers=c.swimmers.length;const n=5;this.swimmersAttributes=new Float32Array(this.numVecAttributes*4*this.maxNumSwimmer*n);const s=le(this,ie,Ve).call(this,c.swimmers);for(let h=0;h<c.swimmers.length;h++){const x=s[h];le(this,ie,Ge).call(this,h,x),le(this,ie,pe).call(this,c.swimmers.length+h,x.leftArm),le(this,ie,pe).call(this,2*c.swimmers.length+h,x.rightArm),le(this,ie,pe).call(this,3*c.swimmers.length+h,x.leftFoot),le(this,ie,pe).call(this,4*c.swimmers.length+h,x.rightFoot)}this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture.id),this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,!1),this.gl.texSubImage2D(this.gl.TEXTURE_2D,0,0,0,this.numVecAttributes,this.maxNumSwimmer,this.gl.RGBA,this.gl.FLOAT,this.swimmersAttributes),this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,!0),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vboPoints),this.gl.bufferData(this.gl.ARRAY_BUFFER,this.swimmersAttributes,this.gl.DYNAMIC_DRAW)}buildShader(n,s){const h=this.gl.createShader(s);return this.gl.shaderSource(h,n),this.gl.compileShader(h),h}createProgram(n){const s=this.gl.createProgram();return n.forEach(h=>{this.gl.attachShader(s,h)}),this.gl.linkProgram(s),s}checkShaders(n,s,h){this.gl.getShaderParameter(n,this.gl.COMPILE_STATUS)||console.error(this.gl.getShaderInfoLog(n)),this.gl.getShaderParameter(s,this.gl.COMPILE_STATUS)||console.error(this.gl.getShaderInfoLog(s)),this.gl.getProgramParameter(h,this.gl.LINK_STATUS)||console.error(this.gl.getProgramInfoLog(h))}createRenderingTexture(n,s){this.pointsTexture=new v.Texture(n,s,{type:this.gl.FLOAT,filter:this.gl.NEAREST}),this.pointsFrameBuffer=this.gl.createFramebuffer(),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.pointsFrameBuffer);const h=this.gl.COLOR_ATTACHMENT0;this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,h,this.gl.TEXTURE_2D,this.pointsTexture.id,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.horizontalPassTexture=new v.Texture(n,s,{type:this.gl.FLOAT,filter:this.gl.LINEAR}),this.horizontalPassFrameBuffer=this.gl.createFramebuffer(),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.horizontalPassFrameBuffer),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,h,this.gl.TEXTURE_2D,this.horizontalPassTexture.id,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null);const x=s/4,_=x,A=x;this.displacementTexture=new v.Texture(_,A,{type:this.gl.FLOAT,filter:this.gl.LINEAR}),this.displacementFrameBuffer=this.gl.createFramebuffer(),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.displacementFrameBuffer),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,h,this.gl.TEXTURE_2D,this.displacementTexture.id,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.oldDisplacementTexture=new v.Texture(_,A,{type:this.gl.FLOAT,filter:this.gl.LINEAR})}buildProgram(n,s){const h=this.buildShader(n,this.gl.VERTEX_SHADER),x=this.buildShader(s,this.gl.FRAGMENT_SHADER),_=this.createProgram([h,x]);return this.checkShaders(h,x,_),_}initPrograms(){this.programPoints=this.buildProgram(Qe,et),this.programVolume=this.buildProgram(tt,it),this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height)}volumePass(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.horizontalPassFrameBuffer),this.gl.useProgram(this.programVolume);const n=this.gl.getAttribLocation(this.programVolume,"iVertex"),s=this.gl.getUniformLocation(this.programVolume,"poolSize");this.gl.uniform2f(s,c.params.simulation.poolSize.x,c.params.simulation.poolSize.z);const h=this.gl.getUniformLocation(this.programVolume,"horizontal");this.gl.uniform1i(h,!0);const x=this.gl.getUniformLocation(this.programVolume,"show");this.gl.uniform1i(x,!1);const _=this.gl.getUniformLocation(this.programVolume,"swapColor");this.gl.uniform1i(_,!1);const A=2,D=this.gl.FLOAT,G=!1,V=0,k=0;this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vboPlane),this.gl.vertexAttribPointer(n,A,D,G,V,k),this.gl.enableVertexAttribArray(n),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.indexBuffer),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.pointsTexture.id),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this.gl.drawElements(this.gl.TRIANGLES,6,this.gl.UNSIGNED_SHORT,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.displacementFrameBuffer),this.gl.uniform1i(h,!1),this.gl.uniform1i(x,!1),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.horizontalPassTexture.id),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this.gl.viewport(0,0,this.displacementTexture.width,this.displacementTexture.height),this.gl.drawElements(this.gl.TRIANGLES,6,this.gl.UNSIGNED_SHORT,0),this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height)}pointPass(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.pointsFrameBuffer),this.gl.useProgram(this.programPoints);const n=this.gl.getAttribLocation(this.programPoints,"iData1"),s=this.gl.getAttribLocation(this.programPoints,"iData2"),h=this.gl.getAttribLocation(this.programPoints,"iData3"),x=this.gl.getUniformLocation(this.programPoints,"invPoolSize");this.gl.uniform2f(x,1/c.params.simulation.poolSize.x,1/c.params.simulation.poolSize.z);const _=4,A=this.gl.FLOAT,D=!1,G=4,V=12*G;let k=0;this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vboPoints),n>=0&&(this.gl.vertexAttribPointer(n,_,A,D,V,k),this.gl.enableVertexAttribArray(n)),k=4*G,s>=0&&(this.gl.vertexAttribPointer(s,_,A,D,V,k),this.gl.enableVertexAttribArray(s)),k=2*4*G,h>=0&&(this.gl.vertexAttribPointer(h,_,A,D,V,k),this.gl.enableVertexAttribArray(h)),this.gl.viewport(0,0,this.pointsTexture.width,this.pointsTexture.height),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this.gl.drawArrays(this.gl.POINTS,0,5*this.numSwimmers)}updateOldDisplacementTexture(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.displacementFrameBuffer),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.oldDisplacementTexture.id),this.gl.copyTexSubImage2D(this.gl.TEXTURE_2D,0,0,0,0,0,this.oldDisplacementTexture.width,this.oldDisplacementTexture.height)}draw(){this.updateOldDisplacementTexture(),this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this.pointPass(),this.volumePass(),this.gl.disable(this.gl.BLEND)}}ie=new WeakSet,Ve=function(n){const s=function(_,A){return A.getDistanceTraveled()-_.getDistanceTraveled()};let h=0;n.forEach(_=>{_.hasFinished()>.1&&h++});const x=n.slice(0,h).concat(n.slice(h).sort(s));for(let _=0;_<n.length;_++)n[_]=x[_];return n},pe=function(n,s){this.swimmersAttributes[this.numVecAttributes*4*n]=s.center.x,this.swimmersAttributes[this.numVecAttributes*4*n+1]=s.center.z,this.swimmersAttributes[this.numVecAttributes*4*n+7]=s.center.y},Ge=function(n,s){le(this,ie,pe).call(this,n,s.body),this.swimmersAttributes[this.numVecAttributes*4*n+2]=s.divingDistance,this.swimmersAttributes[this.numVecAttributes*4*n+3]=s.divingTime,this.swimmersAttributes[this.numVecAttributes*4*n+4]=s.reactionTime,this.swimmersAttributes[this.numVecAttributes*4*n+5]=s.body.velocity.z*3.6,this.swimmersAttributes[this.numVecAttributes*4*n+6]=s.nationality,this.swimmersAttributes[this.numVecAttributes*4*n+8]=s.breakoutDistance,this.swimmersAttributes[this.numVecAttributes*4*n+9]=s.breakoutTime,this.swimmersAttributes[this.numVecAttributes*4*n+10]=s.finishTime};function Ee(i=0,n=1){const s=1-Math.random(),h=Math.random();return Math.sqrt(-2*Math.log(s))*Math.cos(2*Math.PI*h)*n+i}const ae=new v.Vector(1e3,0,-1e3),at=.5,st=2,de="Temps (s)",ge="event",Te="distance (m)",X=class X{constructor(n){this.startingPoint=new v.Vector(n.x,n.y,n.z),this.center=new v.Vector(n.x,n.y,n.z),this.force=new v.Vector(0,0,190+Ee(0,20)),this.reactionTime=Math.max(.1,Ee(.15,.02));const s=.25,h=.15;this.body=new ve(n,s),this.leftArm=new ve(ae,h),this.rightArm=new ve(ae,h),this.leftFoot=new ve(ae,h),this.rightFoot=new ve(ae,h),this.body.cinematic=!X.useGravity,this.leftArm.cinematic=!0,this.rightArm.cinematic=!0,this.leftFoot.cinematic=!0,this.rightFoot.cinematic=!0,this.spheres=[this.body,this.leftArm,this.rightArm,this.leftFoot,this.rightFoot],this.divingDistance=0,this.divingTime=1e3,this.breakoutDistance=0,this.breakoutTime=1e3,this.nationality=Math.random()>.5?0:1,this.currendDataIndex=0,this.useTracking=!1,this.armPulsation=2*Math.PI*st,this.cycleTime=0,this.cyclePhase=0,this.finishTime=0}async parseData(n){fetch(n).then(s=>{const h=s.headers.get("content-type");return!h||!h.includes("text/csv")?(console.log("no file found : "+n),null):s.text()}).then(s=>{if(!s)return;const h=s.split(`
`),x=h[0].split(",");this.data=h.slice(1).map(_=>{const A=_.split(",");return Object.fromEntries(x.map((D,G)=>[D,A[G]]))}),this.armPulsation=0})}getDistanceTraveled(){const n=this.body.velocity.z,s=c.params.simulation.poolSize.z,h=this.body.center.z+s/2;return n>=0?h:2*s-h}startRace(){this.hasBrokeOut=!1,this.hasDove=!1,this.hasReacted=!1}jump(n=4.5){this.body.cinematic=!1,this.body.velocity=new v.Vector(0,0,n+Ee(0,1)),this.body.center=new v.Vector(this.startingPoint.x,1,-c.params.simulation.poolSize.z/2)}swim(n){this.hasReacted=n,this.isSwimming=n,this.finishTime=0,n||(this.body.followTarget=!1),n?(this.body.cinematic=!1,this.useGravity=!0,this.body.center=new v.Vector(this.startingPoint.x,0,-c.params.simulation.poolSize.z/2)):(this.body.velocity=new v.Vector(0,0,0),this.body.center=new v.Vector(this.startingPoint.x,0,0))}hasFinished(){return this.finishTime>.1}getArmOffset(n,s){s+=this.cyclePhase;const h=this.body.velocity.z>=0?this.armPulsation:-this.armPulsation;return new v.Vector(0,Math.cos(h*n+s),Math.sin(h*n+s)).multiply(at)}setCurrentDataIndex(){if(this.currendDataIndex=0,!!this.data){for(;this.data[this.currendDataIndex]&&this.data[this.currendDataIndex][de]<c.getRaceTime();)this.currendDataIndex++;if(this.currendDataIndex+1<this.data.length){if(this.currendDataIndex-1>=0){const n=parseFloat(this.data[this.currendDataIndex][Te]);let s=n;const h=c.params.simulation.poolSize.z;n>h&&(s=2*h-s),s-=h/2;const x=this.body.center;this.body.move(new v.Vector(x.x,x.y,s));const _=Math.sign(50-n)*.1;this.body.velocity=new v.Vector(0,0,_),console.log("vz : "+_)}this.body.setTarget(null),this.body.followTarget=!0,this.finishTime=0}}}findNextCycle(){let n=this.currendDataIndex+1;if(!this.data)return null;for(;this.data[n]&&this.data[n][ge]!="cycle";)n++;return this.data[n]?parseFloat(this.data[n][de]):null}handleTracking(n){if(this.hasReacted&&this.useTracking&&this.currendDataIndex<this.data.length&&this.data[this.currendDataIndex][de]<n){let s=null,h=n;const x=this.data[this.currendDataIndex+1];this.currendDataIndex+1<this.data.length&&(s=parseFloat(x[Te]),h=parseFloat(x[de]));const _=c.params.simulation.poolSize.z;let A=0;const D=this.data[this.currendDataIndex][ge];if(D=="enter"||D=="turn"&&x[ge]!="under"){h=(n+h)/2,s=(this.body.center.z+_/2+s)/2;const V={[de]:h,[Te]:s,[ge]:"under"};this.data.splice(this.currendDataIndex+1,0,V),A=-1.5}x&&x[ge]=="under"&&(A=-1.5),s>_&&(s=2*_-s),s-=c.params.simulation.poolSize.z/2;const G=new v.Vector(this.startingPoint.x,A,s);if(this.currendDataIndex+1<this.data.length?this.body.setTarget(G,h-n):this.body.setTarget(null),D=="cycle"){const V=parseFloat(this.data[this.currendDataIndex][de]),k=this.findNextCycle();if(k){const S=1/(k-V);this.armPulsation=2*Math.PI*S,this.cycleTime=0,this.cyclePhase==0?this.cyclePhase=Math.PI:this.cyclePhase=0}}else D=="finish"&&(this.finishTime=this.data[this.currendDataIndex][de],this.body.followTarget=!1,this.isSwimming=!1);this.currendDataIndex++}}moveSpheresAway(){this.rightArm.move(ae),this.leftArm.move(ae),this.rightFoot.move(ae),this.leftFoot.move(ae)}moveSpheres(n){this.cycleTime+=n;const s=this.getArmOffset(.5*this.cycleTime,0),h=this.getArmOffset(.5*this.cycleTime,Math.PI),x=this.getArmOffset(.5*this.cycleTime*2,0),_=this.getArmOffset(.5*this.cycleTime*2,Math.PI);this.rightArm.move(this.body.center.add(s).add(new v.Vector(Ae,0,0))),this.leftArm.move(this.body.center.add(h).add(new v.Vector(-Ae,0,0)));const A=this.body.velocity.z>=0?-Ce:Ce;this.rightFoot.move(this.body.center.add(new v.Vector(ze,x.y*.5,A))),this.leftFoot.move(this.body.center.add(new v.Vector(-ze,_.y*.5,A)))}update(n){const s=c.getRaceTime();X.raceHasStarted||(this.useTracking=c.params.swimmers.useTracking&&this.data),!this.hasReacted&&X.raceHasStarted&&(this.useTracking||s>this.reactionTime&&!c.params.swimmers.useTracking?(this.swim(!0),this.jump(),this.useTracking&&(this.body.cinematic=!0,this.body.followTarget=!0,this.body.setTarget(null))):(this.swim(!1),this.body.cinematic=!0,this.body.move(ae)),this.currendDataIndex=0),this.moveSpheresAway(),this.isSwimming&&(this.useTracking||this.body.addForce(this.force),this.body.center.y>-this.body.radius&&this.moveSpheres(n)),this.handleTracking(s);for(let x of this.spheres)x.update(n);!this.hasDove&&this.body.center.y<0&&this.body.oldCenter.y>=0&&(this.divingDistance=this.body.center.z+c.params.simulation.poolSize.z/2,this.divingTime=s,this.hasDove=!0);const h=this.body.radius;!this.hasBrokeOut&&this.body.center.y>-h&&this.body.oldCenter.y<=-h&&(this.breakoutDistance=this.body.center.z+c.params.simulation.poolSize.z/2,this.breakoutTime=s,this.hasBrokeOut=!0)}};ne(X,"useGravity",!1),ne(X,"raceHasStarted",!1),ne(X,"swimming",!1),ne(X,"attributes"),ne(X,"initAttributes",n=>{X.attributes=new nt(n)}),ne(X,"updateAttributesTexture",()=>{X.attributes.update()}),ne(X,"getAttributesTexture",()=>X.attributes.texture),ne(X,"bindDisplacementTexture",n=>{X.attributes.displacementTexture.bind(n)}),ne(X,"bindOldDisplacementTexture",n=>{X.attributes.oldDisplacementTexture.bind(n)}),ne(X,"reset",n=>{X.attributes.createRenderingTexture(n.x,n.y)});let U=X;const Me=`
    uniform float wr;
    #define sqrt_2_PI 2.50662827
    #define PI 3.1415926536
    uniform sampler2D swimmersAttributesTexture;
    const int SWIMMERS_NUM_ATTRIBUTES = 4;
    const vec2 TEXTURE_SIZE = vec2(`+Oe+", "+Ue+`);
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
`,ke=16.5;class lt{constructor(){this.params={numSteps:2,focal:45,visualizations:{enabled:!0,showFlags:!1,showRanks:!0,showRanksIfFinished:!1,showWR:!1,showSpeed:!1,showDivingDistance:!0,showFinishTimes:!1,showNeighboursLines:"none",neighboursLinesModesDict:{none:0,"only medals":1,all:2},showMedals:"none",medalsModesDict:{none:0,stars:1,bright:2,lanes:3},areaConservationEnabled:!0,shadow:{enabled:!0,shadowRadius:.5,shadowPower:.5,showCircle:!0,circleRadius:.6,circleStroke:.15},sparks:{enabled:!1,glow:5,glowOffset:.5,lengthFactor:1,stroke:.01,num:40,sizeFactor:50,fov:Math.PI/4}},swimmers:{showSpheres:!0,useTracking:!0},video:{thresholdBlending:!0,blendingThreshold:.41,show:!1},simulation:{optimized:!1,waterDamping:.02,poolSize:new v.Vector(2,1,2)}},this.useConfigFile=!0,this.time=0,this.swimmers=[]}isOneVisualizationEnabled(){return this.params.visualizations.showFlags||this.params.visualizations.showRanks||this.params.visualizations.showWR||this.params.visualizations.showSpeed||this.params.visualizations.showDivingDistance}getRaceTime(){return this.time-ke}updateEventIndex(){for(this.currentEventIndex=0;this.events[this.currentEventIndex]&&this.events[this.currentEventIndex].time<this.getRaceTime();)this.currentEventIndex++;this.currentEventIndex>0&&this.currentEventIndex--}setRaceTime(n){this.time=ke+n,this.events&&this.updateEventIndex()}setTimeBeginRace(){this.setRaceTime(0)}parseConfigFile(n){fetch(n).then(s=>s.text()).then(s=>{this.events=JSON.parse(s),this.currentEventIndex=0,this._renderTimeline&&this._renderTimeline()})}updateParams(){if(!this.events||!this.useConfigFile)return;const n=this.events[this.currentEventIndex];if(!n)return;let s=n.rankSwimmerToggle;s||(s=1),(n.distance&&this.swimmers[s-1].getDistanceTraveled()>=n.distance||n.time!==void 0&&this.getRaceTime()>=n.time)&&(this.currentEventIndex++,Object.entries(n.params).forEach(h=>{const x=h[0],_=h[1];this.params.visualizations[x]=_}))}}const c=new lt;c.parseConfigFile("./assets/vis-config.json");const Ne=new v.Vector(0,-4,0);class ve{constructor(n,s){this.initCenter=new v.Vector(n.x,n.y,n.z),this.center=new v.Vector(n.x,n.y,n.z),this.oldCenter=new v.Vector(n.x,n.y,n.z),this.radius=s,this.cinematic=!1,this.velocity=new v.Vector(0,0,0),this.acceleration=new v.Vector(0,0,0),this.mass=4/3*Math.PI*Math.pow(s,3)*1e3,this.invMass=1/this.mass,this.radiusSquared=s*s,this.mesh=v.Mesh.sphere({detail:10}),this.followTarget=!1}update(n){if(this.moved||(this.oldCenter=new v.Vector(this.center.x,this.center.y,this.center.z)),this.moved=!1,this.cinematic){if(this.followTarget||(this.velocity=new v.Vector(0,0,0)),!this.targetPos||!this.followTarget)return;let s=n/this.targetTime;s=Math.min(Math.max(s,0),1),this.center=this.center.multiply(1-s).add(this.targetPos.multiply(s)),this.velocity=this.center.subtract(this.oldCenter).multiply(1/n),this.targetTime-=n,this.targetTime<0&&(this.targetPos=null)}else{const s=Math.max(0,Math.min(1,(this.radius-this.center.y)/(2*this.radius))),h=Ne.multiply(-1.1*this.mass*s),x=this.velocity.unit().multiply(-1e3*this.radiusSquared*s*this.velocity.dot(this.velocity));this.addForce(x),this.addForce(h),this.addForce(Ne.multiply(this.mass)),this.velocity=this.velocity.add(this.acceleration.multiply(n)),this.acceleration=new v.Vector(0,0,0),this.center=this.center.add(this.velocity.multiply(n)),this.center.y<this.radius-c.params.simulation.poolSize.y&&(this.center.y=this.radius-1,this.velocity.y=Math.abs(this.velocity.y)*.7)}}setTarget(n,s){this.targetPos=n,this.targetTime=s}addForce(n){this.cinematic?console.warn("Trying to add force to a cinematic sphere."):this.acceleration=this.acceleration.add(n.multiply(this.invMass))}move(n){this.moved=!0,this.oldCenter=new v.Vector(this.center.x,this.center.y,this.center.z),this.center=new v.Vector(n.x,n.y,n.z),this.cinematic||console.warn("Moving a non cinematic sphere.")}}function re(i,n=null){this.gl=i,this.visualizationWavesEnabled=!0,this.sqrt_2_PI=Math.sqrt(2*Math.PI),this.spheres=[];var s=`
    out vec2 coord;
    uniform vec2 invPoolSizeVertex;
    void main() {
      coord = gl_Vertex.xy * invPoolSizeVertex + 0.5;
      gl_Position = vec4(gl_Vertex.xy * 2. * invPoolSizeVertex, 0., 1.0);
    }
  `;this.reset(n),v.Texture.canUseFloatingPointTextures(),this.dropShader=new v.Shader(s,`
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
  `),this.updateShader=new v.Shader(s,`
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
  `),this.normalShader=new v.Shader(s,`
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
  `),this.sphereShader=new v.Shader(`
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
  `),this.visualizationWavesShader=new v.Shader(s,`
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
    `)}re.prototype.resetTextures=function(){const i=this.gl;this.textureA&&i.deleteTexture(this.textureA.id),this.textureB&&i.deleteTexture(this.textureB.id),this.textureA=new v.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:n}),this.textureB=new v.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:n}),this.areaConservationTexture=new v.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:n}),this.showAreaConservedGrid=!1,this.showProjectionGrid=!1,this.invPoolSize=new v.Vector(1/c.params.simulation.poolSize.x,1/c.params.simulation.poolSize.y,1/c.params.simulation.poolSize.z);var n=v.Texture.canUseFloatingPointLinearFiltering()?this.gl.LINEAR:this.gl.NEAREST;(!this.textureA.canDrawTo()||!this.textureB.canDrawTo())&&v.Texture.canUseHalfFloatingPointTextures()&&(console.log("No draw"),n=v.Texture.canUseHalfFloatingPointLinearFiltering()?this.gl.LINEAR:this.gl.NEAREST,this.textureA=new v.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:n}),this.textureB=new v.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:n}))};re.prototype.reset=function(i=null){this.WR_position=1e5,this.prev_WR_position=0,i!==null?(console.log("resolution.y : "+i.y),this.W=Math.round(i.x),this.H=Math.round(i.y),console.log("Using custom resolution:",this.W,this.H)):(this.W=256,this.H=256),U.reset(new v.Vector(this.W,this.H)),this.plane=v.Mesh.plane({detail:255,width:c.params.simulation.poolSize.x,height:c.params.simulation.poolSize.z}),this.delta=new v.Vector(1/this.W,1/this.H),this.resetTextures()};re.prototype.addDrop=function(i,n,s,h){var x=this;this.textureB.drawTo(function(){x.textureA.bind(),x.dropShader.uniforms({invPoolSizeVertex:[x.invPoolSize.x,x.invPoolSize.z],center:[i,n],radius:s,strength:h,poolSize:[c.params.simulation.poolSize.x,c.params.simulation.poolSize.y,c.params.simulation.poolSize.z]}).draw(x.plane)}),this.textureB.swapWith(this.textureA)};re.prototype.addOrRemoveVisualizationWaves=function(i){if(!(!this.visualizationWavesEnabled||!U.raceHasStarted)){var n=this;this.textureB.drawTo(function(){n.textureA.bind();const s=U.getAttributesTexture();s&&s.bind(1),n.visualizationWavesShader.uniforms({swimmersAttributesTexture:1,showDivingDistance:c.params.visualizations.showDivingDistance,showWR:c.params.visualizations.showWR,invPoolSizeVertex:[n.invPoolSize.x,n.invPoolSize.z],poolSize:[c.params.simulation.poolSize.x,c.params.simulation.poolSize.y,c.params.simulation.poolSize.z],wr:n.WR_position,sqrt_2_PI:n.sqrt_2_PI,add:i,swimmersNumber:c.swimmers.length,time:c.getRaceTime()}).draw(n.plane)}),this.textureB.swapWith(this.textureA)}};re.prototype.addSwimmer=function(i){for(let n of i.spheres)this.addSphere(n)};re.prototype.addSphere=function(i){this.spheres.push(i)};re.prototype.updateSpheres=function(i){if(this.prev_WR_position=this.WR_position,this.WR_position=c.getRaceTime()*2.155,this.WR_position>c.params.simulation.poolSize.z&&(this.WR_position=2*c.params.simulation.poolSize.z-this.WR_position),c.params.simulation.optimized)U.attributes.draw(),this.textureB.drawTo(()=>{this.textureA.bind(),U.bindDisplacementTexture(1),U.bindOldDisplacementTexture(2),this.sphereShader.uniforms({oldDisplacementTexture:2,displacementTexture:1,invPoolSizeVertex:[this.invPoolSize.x,this.invPoolSize.z],poolSize:[c.params.simulation.poolSize.x,c.params.simulation.poolSize.y,c.params.simulation.poolSize.z],optimized:!0}).draw(this.plane),this.textureB.swapWith(this.textureA),U.attributes.draw()});else for(let s=0;s<this.spheres.length;s++){const h=this.spheres[s];this.moveSphere(h.oldCenter,h.center,h.radius)}};re.prototype.moveSphere=function(i,n,s){var h=this;this.textureB.drawTo(function(){h.textureA.bind(),h.sphereShader.uniforms({invPoolSizeVertex:[h.invPoolSize.x,h.invPoolSize.z],oldCenter:i,newCenter:n,radius:s,poolSize:[c.params.simulation.poolSize.x,c.params.simulation.poolSize.y,c.params.simulation.poolSize.z],optimized:!1}).draw(h.plane)}),this.textureB.swapWith(this.textureA)};re.prototype.stepSimulation=function(){var i=this;this.textureB.drawTo(function(){i.textureA.bind(),i.updateShader.uniforms({invPoolSizeVertex:[i.invPoolSize.x,i.invPoolSize.z],delta:[i.delta.x,i.delta.y],wr:i.WR_position,prev_wr:i.prev_WR_position,poolSize:[c.params.simulation.poolSize.x,c.params.simulation.poolSize.y,c.params.simulation.poolSize.z],sqrt_2_PI:i.sqrt_2_PI,damping:c.params.simulation.waterDamping}).draw(i.plane)}),this.textureB.swapWith(this.textureA),this.updateAreaConservation()};re.prototype.updateNormals=function(){var i=this;this.textureB.drawTo(function(){i.textureA.bind(),i.normalShader.uniforms({invPoolSizeVertex:[i.invPoolSize.x,i.invPoolSize.z],delta:[i.delta.x,i.delta.y]}).draw(i.plane)}),this.textureB.swapWith(this.textureA)};re.prototype.updateAreaConservation=function(){if(!c.params.visualizations.areaConservationEnabled)return;var i,n,s;if(this.textureA.type===this.gl.FLOAT)i=this.gl.FLOAT,n=Float32Array,s="EXT_color_buffer_float";else if(this.textureA.type===this.gl.HALF_FLOAT_OES)i=this.gl.HALF_FLOAT_OES,n=Uint16Array,s="EXT_color_buffer_half_float";else{console.warn("Unsupported texture type for reading");return}if(!this.gl.getExtension(s)){console.warn(s+" not available; cannot read pixels");return}this.fb||(this.fb=this.gl.createFramebuffer()),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.fb),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,this.textureA.id,0);const h=this.gl.checkFramebufferStatus(this.gl.FRAMEBUFFER);if(h!==this.gl.FRAMEBUFFER_COMPLETE){console.error("Framebuffer incomplete: "+h+" for texture type "+this.textureA.type),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null);return}this.gl.pixelStorei(this.gl.PACK_ALIGNMENT,1);const x=new n(this.W*this.H*4),_=new Float32Array(this.W*this.H*4);this.gl.readPixels(0,0,this.W,this.H,this.gl.RGBA,i,x);for(let k=0;k<this.W;k++)_[k*4+1]=1;const A=c.params.simulation.poolSize.x/this.W,D=c.params.simulation.poolSize.z/this.H,G=A*A,V=D*D;if(this.textureA.type===this.gl.FLOAT){for(let k=0;k<this.H;k+=1)for(let y=0;y<this.W;y+=1){const S=(k*this.W+y)*4,z=((this.H-1-k)*this.W+y)*4,F=_[z],B=_[z+1];if(y+1<this.W){const P=x[S]-x[S+4],I=Math.sqrt(P*P+G);_[z+4]=F+I}if(k+1<this.H){const P=x[S]-x[S+this.W*4],I=Math.sqrt(P*P+V);_[z-4*this.W+1]=B+I}}this.gl.bindTexture(this.gl.TEXTURE_2D,this.areaConservationTexture.id),this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT,1),this.gl.texSubImage2D(this.gl.TEXTURE_2D,0,0,0,this.W,this.H,this.gl.RGBA,this.gl.FLOAT,_)}this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.bindTexture(this.gl.TEXTURE_2D,null)};const ct=`
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
`;var he=`
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
`;function ce(i,n,s,h){this.water=n,this.gl=i,this.tileTexture=v.Texture.fromImage(document.getElementById("tiles"),{minFilter:this.gl.LINEAR_MIPMAP_LINEAR,wrap:this.gl.REPEAT,format:this.gl.RGB}),this.franceTexture=v.Texture.fromImage(document.getElementById("france"),{minFilter:this.gl.LINEAR_MIPMAP_LINEAR,wrap:this.gl.REPEAT,format:this.gl.RGBA}),this.chinaTexture=v.Texture.fromImage(document.getElementById("china"),{minFilter:this.gl.LINEAR_MIPMAP_LINEAR,wrap:this.gl.REPEAT,format:this.gl.RGBA}),this.lettersTexture=v.Texture.fromImage(document.getElementById("letters"),{minFilter:this.gl.LINEAR,magFilter:this.gl.LINEAR,wrap:this.gl.REPEAT,format:this.gl.RGBA}),this.flagSize=h,this.flagSize=[1.5,1],this.flagCenter=s,this.lightDir=new v.Vector(2,2,-1).unit(),this.causticTex=new v.Texture(1024,1024),this.waterShaders=[];for(var x=0;x<2;x++)this.waterShaders[x]=new v.Shader(`
      uniform sampler2D water;
      uniform vec3 poolSizeVertexShader;
      out vec3 position;
      void main() {
        vec4 info = texture(water, gl_Vertex.xy / poolSizeVertexShader.xz + 0.5);
        position = gl_Vertex.xzy;
        position.y += info.r;
        gl_Position = gl_ModelViewProjectionMatrix * vec4(position, 1.0);
      }
    `,he+`
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
    `);this.sphereMesh=v.Mesh.sphere({detail:10}),this.sphereShader=new v.Shader(he+`
    out vec3 position;
  void main() {
    position = sphereCenter + gl_Vertex.xyz * sphereRadius;
    gl_Position = gl_ModelViewProjectionMatrix * vec4(position, 1.0);
  }
  `,he+`
    in vec3 position;
    out vec4 fragColor;
  void main() {
    fragColor = vec4(getSphereColor(position), 1.0);
      vec4 info = texture(water, position.xz / poolSize.xz + 0.5);
    if (position.y < info.r) {
      fragColor.rgb *= underwaterColor * 1.2;
    }
  }
  `),this.reset(),this.cubeShader=new v.Shader(he+`
    out vec3 position;
  void main() {
    position = gl_Vertex.xyz;
    position.y = ((1.0 - position.y) * (7.0 / 12.0) - 1.0) * poolSize.y;
    gl_Position = gl_ModelViewProjectionMatrix * vec4(position, 1.0);
  }
  `,he+`
    in vec3 position;
    out vec4 fragColor;
  void main() {
    fragColor = vec4(getWallColor(position), 1.0);
      vec4 info = texture(water, position.xz / poolSize.xz + 0.5);
    if (position.y < info.r) {
      fragColor.rgb *= underwaterColor * 1.2;
    }
  }
  `),this.sphereCenter=new v.Vector,this.sphereRadius=0;var _=!!this.gl.getExtension("OES_standard_derivatives");this.causticsShader=new v.Shader(he+`
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
  `+he+`
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
  `)}ce.prototype.reset=function(){this.cubeMesh=v.Mesh.cube({width:c.params.simulation.poolSize.x,height:2,depth:c.params.simulation.poolSize.z}),this.cubeMesh.triangles.splice(4,2),this.cubeMesh.compile()};ce.prototype.updateCaustics=function(i){};ce.prototype.renderWater=function(i,n,s){var h=new v.Raytracer;i.textureA.bind(0),this.tileTexture.bind(1),n.bind(2),this.causticTex.bind(3),this.franceTexture.bind(4),this.chinaTexture.bind(8),this.lettersTexture.bind(7),i.areaConservationTexture.bind(5);const x=U.getAttributesTexture();x&&x.bind(6),this.gl.enable(this.gl.CULL_FACE);for(var _=0;_<2;_++)this.gl.cullFace(_?this.gl.BACK:this.gl.FRONT),this.waterShaders[_].uniforms({light:this.lightDir,water:0,tiles:1,sky:2,causticTex:3,france:4,china:8,areaConservationTexture:5,swimmersAttributesTexture:6,iChannel0:7,areaConservation:c.params.visualizations.areaConservationEnabled,flagSize:[1.5,2],flagCenter:[this.flagCenter.x,this.flagCenter.y],poolSize:[c.params.simulation.poolSize.x,c.params.simulation.poolSize.y,c.params.simulation.poolSize.z],poolSizeVertexShader:[c.params.simulation.poolSize.x,c.params.simulation.poolSize.y,c.params.simulation.poolSize.z],eye:h.eye,sphereCenter:this.sphereCenter,sphereRadius:this.sphereRadius,showProjectionGrid:i.showProjectionGrid,showAreaConservedGrid:i.showAreaConservedGrid,wr:i.WR_position,swimmersNumber:c.swimmers.length,showFlags:c.params.visualizations.showFlags,showRanks:c.params.visualizations.showRanks,showRanksIfFinished:c.params.visualizations.showRanksIfFinished,showWR:c.params.visualizations.showWR,showSpeed:c.params.visualizations.showSpeed,showDivingDistance:c.params.visualizations.showDivingDistance,showFinishTimes:c.params.visualizations.showFinishTimes,time:c.getRaceTime(),shadowEnabled:s.enabled,shadowRadius:s.shadowRadius,shadowPower:s.shadowPower,showCircle:s.showCircle,shadowCircleRadius:s.circleRadius,shadowCircleStroke:s.circleStroke,showNeighboursLinesMode:Math.round(c.params.visualizations.neighboursLinesModesDict[c.params.visualizations.showNeighboursLines]),showMedalsMode:Math.round(c.params.visualizations.medalsModesDict[c.params.visualizations.showMedals])}).draw(i.plane);this.gl.disable(this.gl.CULL_FACE)};ce.prototype.renderSpheres=function(i){for(let n of i.spheres)this.renderSphere(i,n)};ce.prototype.renderSphere=function(i,n){i.textureA.bind(0),this.causticTex.bind(1),this.sphereShader.uniforms({light:this.lightDir,water:0,causticTex:1,sphereCenter:[n.center.x,n.center.y,n.center.z],sphereRadius:n.radius,poolSize:[c.params.simulation.poolSize.x,c.params.simulation.poolSize.y,c.params.simulation.poolSize.z]}).draw(n.mesh)};ce.prototype.renderSphereOld=function(i){i.textureA.bind(0),this.causticTex.bind(1),this.sphereShader.uniforms({light:this.lightDir,water:0,causticTex:1,sphereCenter:this.sphereCenter,sphereRadius:this.sphereRadius,poolSize:[c.params.simulation.poolSize.x,c.params.simulation.poolSize.y,c.params.simulation.poolSize.z]}).draw(this.sphereMesh)};ce.prototype.renderCube=function(i){this.gl.enable(this.gl.CULL_FACE),i.textureA.bind(0),this.tileTexture.bind(1),this.causticTex.bind(2),this.cubeShader.uniforms({light:this.lightDir,water:0,tiles:1,causticTex:2,sphereCenter:this.sphereCenter,sphereRadius:this.sphereRadius,poolSize:[c.params.simulation.poolSize.x,c.params.simulation.poolSize.y,c.params.simulation.poolSize.z]}).draw(this.cubeMesh),this.gl.disable(this.gl.CULL_FACE)};function Ie(i,n){this.gl=n,this.id=n.createTexture(),n.bindTexture(n.TEXTURE_CUBE_MAP,this.id),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,1),n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAG_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.texImage2D(n.TEXTURE_CUBE_MAP_NEGATIVE_X,0,n.RGB,n.RGB,n.UNSIGNED_BYTE,i.xneg),n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X,0,n.RGB,n.RGB,n.UNSIGNED_BYTE,i.xpos),n.texImage2D(n.TEXTURE_CUBE_MAP_NEGATIVE_Y,0,n.RGB,n.RGB,n.UNSIGNED_BYTE,i.yneg),n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_Y,0,n.RGB,n.RGB,n.UNSIGNED_BYTE,i.ypos),n.texImage2D(n.TEXTURE_CUBE_MAP_NEGATIVE_Z,0,n.RGB,n.RGB,n.UNSIGNED_BYTE,i.zneg),n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_Z,0,n.RGB,n.RGB,n.UNSIGNED_BYTE,i.zpos)}Ie.prototype.bind=function(i){this.gl.activeTexture(this.gl.TEXTURE0+(i||0)),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,this.id)};Ie.prototype.unbind=function(i){this.gl.activeTexture(this.gl.TEXTURE0+(i||0)),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,null)};const We=200,dt=`
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
#define MAX_SPARKS `+We+`
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

`;class ht{constructor(n,s){if(this.gl=n,this.copyVideo=!1,this.show=!1,n===null){alert("Unable to initialize WebGL. Your browser or machine may not support it.");return}n.clearColor(0,0,0,1),n.clear(n.COLOR_BUFFER_BIT),this.shader=new v.Shader(`
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
`),this.mesh=v.Mesh.plane({width:2,height:2,coords:!0,normals:!0}),this.mesh.transform(v.Matrix.rotate(90,1,0,0)),this.mesh.transform(v.Matrix.translate(0,.1,0)),this.programInfo=null,this.texture=this.initTexture(),this.video=this.setupVideo(s),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!0)}render(){const n=c.params.visualizations.sparks,s=c.params.simulation.poolSize;if(!c.params.video.show)return;this.copyVideo&&this.updateTexture(),(!this.mesh.vertexBuffers||!this.mesh.vertexBuffers.vertex)&&this.mesh.compile(),this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture);const h=this.gl.canvas.height,x=16*h/9,_=(this.gl.canvas.width-x)/2;this.gl.viewport(_,0,x,h),U.swimmersAttributesTexture&&U.swimmersAttributesTexture.bind(1),this.shader.uniforms({uSampler:0,swimmersHelperFunctions:1,iTime:c.getRaceTime(),poolSize:[s.x,s.y,s.z],iResolution:[this.gl.canvas.width,this.gl.canvas.height],sparksEnabled:n.enabled,sparksGlow:n.glow,sparksGlowOffset:n.glowOffset,sparksStroke:n.stroke,sparksNumber:n.num,sparksLengthFactor:n.lengthFactor,sparksSizeFactor:n.sizeFactor,fov:n.fov,thresholdBlending:c.params.video.thresholdBlending,blendingThreshold:c.params.video.blendingThreshold}).draw(this.mesh),this.gl.disable(this.gl.BLEND),this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height)}initTexture(){const n=this.gl.createTexture();this.gl.bindTexture(this.gl.TEXTURE_2D,n);const s=0,h=this.gl.RGBA,x=1,_=1,A=0,D=this.gl.RGBA,G=this.gl.UNSIGNED_BYTE,V=new Uint8Array([0,0,255,255]);return this.gl.texImage2D(this.gl.TEXTURE_2D,s,h,x,_,A,D,G,V),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),n}updateTexture(){const s=this.gl.RGBA,h=this.gl.RGBA,x=this.gl.UNSIGNED_BYTE;this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture),this.gl.texImage2D(this.gl.TEXTURE_2D,0,s,h,x,this.video)}setupVideo(n){const s=document.createElement("video");let h=!1,x=!1;s.playsInline=!0,s.muted=!0,s.loop=!0,s.addEventListener("playing",()=>{h=!0,A()},!0),s.addEventListener("timeupdate",()=>{x=!0,A()},!0),s.src=n,s.play();const _=this,A=()=>{h&&x&&(_.copyVideo=!0)};return s}}const xe=new $e,ft=function(i,n){const s=xe.addFolder("visualizations");s.close(),s.add(c,"useConfigFile").name("use configuration file");const h={showTimeline:!0};s.add(h,"showTimeline").name("show event timeline").onChange(y=>{const S=document.getElementById("event-editor");S&&(S.style.display=y?"block":"none")}),s.add(c.params.visualizations,"showFlags").name("show flags").listen(),s.add(c.params.visualizations,"showWR").name("show world record").listen(),s.add(c.params.visualizations,"showNeighboursLines",["none","only medals","all"]).name("show neighbours lines").listen(),s.add(c.params.visualizations,"showMedals",["none","stars","bright","lanes"]).name("show potential medals").listen(),s.add(c.params.visualizations,"showSpeed").name("show speed").listen(),s.add(c.params.visualizations,"showRanks").name("show ranks").listen(),s.addFolder("ranks").add(c.params.visualizations,"showRanksIfFinished").name("show ranks if finished").listen(),s.add(c.params.visualizations,"showDivingDistance").name("show diving distance").listen(),s.add(c.params.visualizations.shadow,"enabled").name("show shadow"),s.add(c.params.visualizations,"areaConservationEnabled","areaConservationEnabled").name("area conservation").listen();const _=xe.addFolder("video");_.close(),_.add(c.params.video,"thresholdBlending").name("threshold blending"),_.add(c.params.video,"blendingThreshold",.1,.5).name("blending threshold"),_.add(c.params.video,"show").name("show").listen();const A=s.addFolder("Sparks");A.close(),A.add(c.params.visualizations.sparks,"enabled").name("sparks enabled"),A.add(c.params.visualizations.sparks,"glow",1,30).name("sparks glow factor"),A.add(c.params.visualizations.sparks,"lengthFactor",.1,10).name("sparks length factor"),A.add(c.params.visualizations.sparks,"glowOffset",.1,3).name("sparks glow offset"),A.add(c.params.visualizations.sparks,"stroke",.001,.05).name("sparks stroke"),A.add(c.params.visualizations.sparks,"num",10,We).step(1).name("sparks number"),A.add(c.params.visualizations.sparks,"sizeFactor",10,100).name("size factor");const D=s.addFolder("Swimmers shadows");D.close(),D.add(c.params.visualizations.shadow,"shadowRadius",0,2).name("shadow radius"),D.add(c.params.visualizations.shadow,"shadowPower",.1,2).name("shadow power"),D.add(c.params.visualizations.shadow,"showCircle").name("circle"),D.add(c.params.visualizations.shadow,"circleRadius",.5,2).name("circle radius"),D.add(c.params.visualizations.shadow,"circleStroke",.1,.5).name("circle stroke");const G=xe.addFolder("Simulation");G.close(),G.add(c.params.simulation,"optimized").name("optimized").listen(),G.add(c.params.simulation.poolSize,"x",1,25).name("pool width").onChange(function(y){n()}).listen(),G.add(c.params.simulation.poolSize,"z",1,50).name("pool height").onChange(function(y){n()}).listen(),G.add(c.params.simulation.poolSize,"y",1,3).name("pool depth").onChange(function(y){n()}).listen(),G.add(c.params.simulation,"waterDamping",.005,.15).name("water damping").listen();const V=xe.addFolder("swimmers");V.close(),V.add(c.params.swimmers,"showSpheres").name("show spheres").listen(),V.add(c.params.swimmers,"useTracking").name("use tracking data").listen();const k=xe.addFolder("camera");k.close(),k.add(c.params,"focal",28,45).name("focal").listen().onChange(function(y){c.params.visualizations.sparks.fov=y*2*Math.PI/360,i.matrixMode(i.PROJECTION),i.loadIdentity(),i.perspective(c.params.focal,i.canvas.width/i.canvas.height,.01,100),i.matrixMode(i.MODELVIEW),console.log("perspective : "+c.params.focal)})};function ut(i,n){const s=document.getElementById(i);if(s.style.position=s.style.position||"relative",!s){console.warn(`event editor container "${i}" not found`);return}let h,x=!1;const _=[{name:"showFlags",type:"boolean"},{name:"showWR",type:"boolean"},{name:"showSpeed",type:"boolean"},{name:"showRanks",type:"boolean"},{name:"showRanksIfFinished",type:"boolean"},{name:"showDivingDistance",type:"boolean"},{name:"showFinishTimes",type:"boolean"},{name:"showNeighboursLines",type:"select",options:["none","only medals","all"]},{name:"showMedals",type:"select",options:["none","stars","bright","lanes"]},{name:"rankSwimmerToggle",type:"number",min:1,max:10}];function A(S){const z=document.createElement("div");z.style.flex="1",z.style.padding="4px",z.style.background="#222",z.style.border="1px solid #555",z.style.borderRadius="4px",z.style.fontFamily="monospace",z.style.fontSize="12px",z.style.whiteSpace="pre-wrap",z.style.overflow="auto",z.style.maxHeight="100px";function F(){const B=S.params;if(Object.keys(B).length===0){z.textContent="(no params)";return}const P=Object.entries(B).map(([I,H])=>`${I}: ${JSON.stringify(H)}`);z.textContent=P.join(`
`)}return F(),{element:z,update:F}}function D(S,z){const F=document.createElement("div");F.style.display="flex",F.style.flexWrap="wrap",F.style.margin="4px 0",F.style.background="#333",F.style.padding="4px";function B(){z&&(z(),y())}return _.forEach(P=>{const I=document.createElement("div");I.style.marginRight="8px",I.style.marginBottom="4px";const H=document.createElement("label");H.style.whiteSpace="nowrap",H.textContent=P.name+":",I.appendChild(H);let M;if(P.type==="boolean"){M=document.createElement("select"),[{value:"",label:"—"},{value:"true",label:"ON"},{value:"false",label:"OFF"}].forEach(K=>{const Z=document.createElement("option");Z.value=K.value,Z.textContent=K.label,M.appendChild(Z)});const q=S.params[P.name];q===void 0?M.value="":q===!0?M.value="true":q===!1&&(M.value="false"),M.addEventListener("change",()=>{M.value===""?delete S.params[P.name]:M.value==="true"?S.params[P.name]=!0:M.value==="false"&&(S.params[P.name]=!1),B()})}else if(P.type==="select"){M=document.createElement("select");const Y=document.createElement("option");Y.value="",Y.textContent="—",M.appendChild(Y),P.options.forEach(q=>{const K=document.createElement("option");K.value=q,K.textContent=q,M.appendChild(K)}),M.value=S.params[P.name]||"",M.addEventListener("change",()=>{M.value===""?delete S.params[P.name]:S.params[P.name]=M.value,B()})}else P.type==="number"&&(M=document.createElement("input"),M.type="number",P.min!==void 0&&(M.min=P.min),P.max!==void 0&&(M.max=P.max),M.placeholder="—",M.style.width="50px",M.value=S.params[P.name]!==void 0?S.params[P.name]:"",M.addEventListener("change",()=>{if(M.value==="")delete S.params[P.name];else{const Y=parseFloat(M.value);isNaN(Y)||(S.params[P.name]=Y)}B()}));M&&I.appendChild(M),F.appendChild(I)}),F}function G(){const S=document.createElement("div");S.style.marginTop="8px",S.style.padding="8px",S.style.background="#555",S.style.border="1px solid #777";const z=document.createElement("div");z.textContent="Add New Event",z.style.fontWeight="bold",z.style.marginBottom="4px",S.appendChild(z);const F=document.createElement("input");F.type="number",F.placeholder="Distance",F.style.width="auto",F.style.marginRight="8px",S.appendChild(F);const B={},P=D({params:B},null);P.style.margin="4px 0",S.appendChild(P);const I=document.createElement("button");return I.textContent="OK",I.addEventListener("click",()=>{const H=parseFloat(F.value);if(isNaN(H)){alert("Please enter a valid distance");return}const M={distance:H,params:{...B}};n.events.push(M),y(),h.remove(),h=null}),S.appendChild(I),S}function V(){s.innerHTML="";const S=document.createElement("button");if(S.textContent=x?"□":"—",S.style.position="absolute",S.style.top="0",S.style.right="0",S.style.width="20px",S.style.height="20px",S.style.zIndex="100001",S.addEventListener("click",()=>{x=!x,V()}),s.appendChild(S),x){s.style.height="20px";return}s.style.height="300px";const z=document.createElement("div");if(z.style.position="absolute",z.style.top="0px",z.style.left="50%",z.style.transform="translateX(-50%)",z.style.width="80px",z.style.height="15px",z.style.background="grey",z.style.border="1px solid black",z.style.cursor="ns-resize",z.style.zIndex="100000",z.style.lineHeight="16px",z.style.textAlign="center",z.textContent="drag",s.appendChild(z),z.addEventListener("mousedown",E=>{E.preventDefault();const u=E.clientY,t=s.offsetHeight;function r(o){const l=t-(o.clientY-u);l>20&&(s.style.height=l+"px")}function e(){document.removeEventListener("mousemove",r),document.removeEventListener("mouseup",e)}document.addEventListener("mousemove",r),document.addEventListener("mouseup",e)}),!n.events){s.textContent="no events defined";return}const F=n.events.slice().sort((E,u)=>{const t=E.distance!==void 0?E.distance:E.time!==void 0?E.time:0,r=u.distance!==void 0?u.distance:u.time!==void 0?u.time:0;return t-r}),B=F.reduce((E,u)=>{const t=u.distance!==void 0?u.distance:u.time!==void 0?u.time:0;return Math.max(E,t)},0),P=new Set;F.forEach(E=>{E.params&&Object.keys(E.params).forEach(u=>P.add(u))});let I=_.map(E=>E.name).filter(E=>P.has(E));const H=["#4caf50","#2196f3","#ff9800","#9c27b0","#f44336","#009688","#e91e63","#3f51b5"],M={};I.forEach((E,u)=>{M[E]=H[u%H.length]});const Y={},q={};I.forEach(E=>{q[E]=!1,Y[E]=0});const K=[];if(F.forEach(E=>{const u=E.distance!==void 0?E.distance:E.time!==void 0?E.time:0;E.params&&Object.keys(E.params).forEach(t=>{if(I.includes(t)){const r=!!E.params[t];r!==q[t]&&(q[t]&&K.push({name:t,start:Y[t],end:u}),q[t]=r,Y[t]=u)}})}),I.forEach(E=>{q[E]&&K.push({name:E,start:Y[E],end:B})}),I.length>0){const E=document.createElement("div");E.style.position="relative";const u=20,t=80;E.style.height=I.length*u+"px",E.style.background="#222",E.style.marginBottom="4px",E.style.marginTop="10px",I.forEach((e,o)=>{const l=document.createElement("div");l.textContent=e,l.style.position="absolute",l.style.left="0",l.style.top=o*u+2+"px",l.style.width=t+"px",l.style.color="#aaa",l.style.fontSize="10px",l.style.pointerEvents="none",E.appendChild(l)});const r=document.createElement("div");r.style.position="absolute",r.style.left=t+"px",r.style.top="0",r.style.right="0",r.style.bottom="0",r.style.overflow="hidden",E.appendChild(r),K.forEach(e=>{const o=document.createElement("div"),l=B>0?e.start/B*100:0,d=B>0?(e.end-e.start)/B*100:0;o.style.position="absolute",o.style.left=l+"%",o.style.top=I.indexOf(e.name)*u+2+"px",o.style.height=u-4+"px",o.style.width=d+"%",o.style.background=M[e.name]||"#4caf50",o.title=`${e.name}: ${e.start.toFixed(2)} → ${e.end.toFixed(2)}`;const f=document.createElement("span");if(f.textContent=`${e.name}: ${e.start.toFixed(2)} → ${e.end.toFixed(2)}`,f.style.position="absolute",f.style.top="0",f.style.left="2px",f.style.fontSize="10px",f.style.color="white",f.style.pointerEvents="none",f.style.whiteSpace="nowrap",f.style.overflow="hidden",f.style.textOverflow="ellipsis",o.appendChild(f),e.end<B){const a=document.createElement("div");a.style.position="absolute",a.style.right="0",a.style.top="0",a.style.width="5px",a.style.height="100%",a.style.background="rgba(255,255,255,0.5)",a.style.cursor="ew-resize",o.appendChild(a),a.addEventListener("mousedown",m=>{m.preventDefault(),m.stopPropagation();const g=m.clientX,p=o.offsetWidth;function w(T){const b=T.clientX-g,L=Math.max(1,p+b),N=L/r.offsetWidth*100;o.style.width=N+"%";const ee=e.start+L/r.offsetWidth*B;f.textContent=`${e.name}: ${e.start.toFixed(2)} → ${ee.toFixed(2)}`}function R(){document.removeEventListener("mousemove",w),document.removeEventListener("mouseup",R);const T=o.offsetWidth,b=e.start+T/r.offsetWidth*B,L=F.find(N=>(N.distance!==void 0?N.distance:N.time!==void 0?N.time:0)===e.end);L&&(L.distance!==void 0?L.distance=b:L.time!==void 0&&(L.time=b)),y()}document.addEventListener("mousemove",w),document.addEventListener("mouseup",R)})}r.appendChild(o)}),s.appendChild(E)}const Z=document.createElement("div");Z.style.position="relative",Z.style.height="40px",Z.style.background="#444",Z.style.marginBottom="4px",Z.style.paddingLeft="80px";const W=document.createElement("div");W.style.position="absolute",W.style.left="80px",W.style.top="0",W.style.right="0",W.style.bottom="0",Z.appendChild(W),F.forEach((E,u)=>{const t=E.distance!==void 0?E.distance:E.time!==void 0?E.time:0,r=B>0?t/B*100:0,e=document.createElement("div");e.style.position="absolute",e.style.left=r+"%",e.style.transform="translateX(-50%)",e.style.width="4px",e.style.height="100%",e.style.background="#e74c3c",e.style.cursor="pointer",e.title=`event ${u}: ${JSON.stringify(E.params)}`,e.addEventListener("click",()=>{k(u)}),W.appendChild(e)}),s.appendChild(Z),F.forEach((E,u)=>{const t=document.createElement("div");t.style.display="flex",t.style.flexDirection="column",t.style.marginBottom="4px";const r=document.createElement("div");r.style.display="flex",r.style.alignItems="center";const e=document.createElement("input");e.type="number",e.style.width="60px",e.value=E.distance!==void 0?E.distance:E.time!==void 0?E.time:0,e.addEventListener("change",()=>{const a=parseFloat(e.value);isNaN(a)||(E.distance!==void 0?E.distance=a:E.time=a,y())}),r.appendChild(e);const o=A(E);r.appendChild(o.element);const l=document.createElement("button");l.textContent="⚙",l.style.marginLeft="4px",r.appendChild(l);const d=document.createElement("button");d.textContent="✖",d.style.marginLeft="4px",d.addEventListener("click",()=>{const a=n.events.indexOf(F[u]);a!==-1&&(n.events.splice(a,1),V())}),r.appendChild(d),t.appendChild(r);let f;l.addEventListener("click",()=>{f?(f.remove(),f=null):(f=D(E,o.update),t.appendChild(f))}),s.appendChild(t)});const J=document.createElement("button");J.textContent="+ add event",J.addEventListener("click",()=>{h?(h.remove(),h=null):(h=G(),s.appendChild(h),s.scrollTop=s.scrollHeight)}),s.appendChild(J);const $=document.createElement("button");$.textContent="export JSON",$.style.marginLeft="8px",$.addEventListener("click",()=>{const E=JSON.stringify(n.events,null,2),u=window.open("","_blank");u?(u.document.write("<pre>"+E.replace(/</g,"&lt;")+"</pre>"),u.document.title="vis-config.json"):console.log(E)}),s.appendChild($)}function k(S){const F=s.querySelectorAll("div")[1+S];F&&F.scrollIntoView({behavior:"smooth",block:"center"})}function y(){n.events.sort((S,z)=>{const F=S.distance!==void 0?S.distance:S.time!==void 0?S.time:0,B=z.distance!==void 0?z.distance:z.time!==void 0?z.time:0;return F-B}),V()}V(),n._renderTimeline=V}function mt(i){return i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n/g,"<br>")}function pt(i){var n=mt(i);n=="WebGL not supported"&&(n='Your browser does not support WebGL.<br>Please see    <a href="http://www.khronos.org/webgl/wiki/Getting_a_WebGL_Implementation">    Getting a WebGL Implementation</a>.');var s=document.getElementById("loading");s.innerHTML=n,s.style.zIndex=1}window.onerror=pt;var C=v.create();C.canvas.tabIndex=0;var O,Be,Q;const Fe=10;var ue=-25,ye=-200.5,we=0;let be=0,Se=0;var me=4,se=!1,_e,Pe,te;U.initAttributes(C);let j=new v.Vector(256,256);function Xe(){document.getElementById("warning").hidden=!(j.x*j.y>3e5&&O&&c.params.visualizations.areaConservationEnabled)}let Re=0;function gt(i){Re+=i,Re>=1&&(document.getElementById("fps").innerText=`${(1/i).toFixed(1)} FPS`,Re=0)}function fe(){console.log("reset"),document.getElementById("resolution").innerText=`Resolution: ${j.x} x ${j.y}`,Xe(),_e=new v.Vector(0,-c.params.simulation.poolSize.z/2+1),O.reset(j),Q.flagCenter=_e,Q.flagSize=Pe,Q.reset();const i=c.params.simulation.poolSize.x/Fe;let n=c.params.simulation.poolSize.x/2-i/2,s=0;for(let h of c.swimmers)h.body.center.x=n,h.startingPoint.x=n,h.parseData("./assets/race-data/"+s+".csv"),s++,n-=i}function vt(i){const n=parseFloat(i.target.value);isNaN(n)||(c.setRaceTime(n),te&&te.video&&(te.video.currentTime=c.time),c.swimmers.forEach(s=>s.setCurrentDataIndex()))}window.onload=function(){var i=window.devicePixelRatio||1,n=document.getElementById("help");function s(){var a=innerWidth,m=innerHeight;C.canvas.width=a*i,C.canvas.height=m*i,C.canvas.style.width=a+"px",C.canvas.style.height=m+"px",C.viewport(0,0,C.canvas.width,C.canvas.height),C.matrixMode(C.PROJECTION),C.loadIdentity(),C.perspective(c.params.focal,C.canvas.width/C.canvas.height,.01,100),C.matrixMode(C.MODELVIEW),f()}document.body.appendChild(C.canvas),C.canvas.oncontextmenu=function(a){a.preventDefault()},C.clearColor(0,0,0,1),_e=new v.Vector(0,-c.params.simulation.poolSize.z/2+1),Pe=.7,O=new re(C),te=new ht(C,"./video.mp4");const h=document.getElementById("time-slider");h&&h.addEventListener("input",vt);const x=document.getElementById("drop-zone");let _=0;if(document.addEventListener("dragenter",a=>{_++,x.style.display="flex"}),document.addEventListener("dragover",a=>{a.preventDefault(),a.dataTransfer.dropEffect="copy"}),document.addEventListener("dragleave",a=>{_--,_===0&&(x.style.display="none")}),document.addEventListener("drop",a=>{a.preventDefault(),_=0,x.style.display="none";const m=a.dataTransfer.files;if(m.length>0&&(m[0].type.startsWith("video/")||m[0].name.endsWith(".mp4"))){const g=URL.createObjectURL(m[0]);te.video.src=g,te.video.play(),console.log("Loaded:",m[0].name)}}),ft(C,fe),setTimeout(()=>{ut("event-editor",c)},50),Q=new ce(C,O,_e,Pe),Be=new Ie({xneg:document.getElementById("xneg"),xpos:document.getElementById("xpos"),yneg:document.getElementById("ypos"),ypos:document.getElementById("ypos"),zneg:document.getElementById("zneg"),zpos:document.getElementById("zpos")},C),!O.textureA.canDrawTo()||!O.textureB.canDrawTo())throw new Error("Rendering to floating-point textures is required but not supported");const A=new v.Vector(-.4,-.75,.2),D=new v.Vector(.4,-.75,.2),G=new U(A);new U(D);for(let a=0;a<1;a++)c.swimmers.push(new U(A));const V=G.body.radius;for(let a of c.swimmers)O.addSwimmer(a);fe();for(var k=0;k<20;k++)O.addDrop(Math.random()*2-1,Math.random()*2-1,.06,k&1?.01:-.01);document.getElementById("loading").innerHTML="",s();var y=window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(a){setTimeout(a,0)},S=new Date().getTime();function z(){var a=new Date().getTime();se||(d((a-S)/1e3),f()),S=a,y(z)}y(z),window.onresize=s;var F,B,P,I=-1,H=0,M=1,Y=2;const q=3;var K,Z;function W(a,m,g){if(K=a,Z=m,!g||g.button===0){var p=new v.Raytracer,w=p.getRayForPixel(a*i,m*i),R=p.eye.add(w.multiply(-p.eye.y/w.y));for(let b of c.swimmers){var T=v.Raytracer.hitTestSphere(p.eye,w,b.body.center,b.body.radius);if(T){I=M,P=b,b.body.cinematic=!0,F=T.hit,B=p.getRayForPixel(C.canvas.width/2,C.canvas.height/2).negative();return}}Math.abs(R.x)<c.params.simulation.poolSize.x/2&&Math.abs(R.z)<c.params.simulation.poolSize.z/2&&(I=H,J(a,m))}else g.button===2?I=Y:g.button===1&&(I=q)}function J(a,m,g){switch(I){case H:{var p=new v.Raytracer,w=p.getRayForPixel(a*i,m*i),R=p.eye.add(w.multiply(-p.eye.y/w.y));O.addDrop(R.x/c.params.simulation.poolSize.x*2,R.z/c.params.simulation.poolSize.z*2,.06,.03),se&&(O.updateNormals(),Q.updateCaustics(O));break}case M:{var p=new v.Raytracer,w=p.getRayForPixel(a*i,m*i),T=-B.dot(p.eye.subtract(F))/B.dot(w),b=p.eye.add(w.multiply(T));const ee=P.body.center.add(b.subtract(F)),oe=P.body.radius,He=Math.max(oe-c.params.simulation.poolSize.x/2,Math.min(c.params.simulation.poolSize.x/2-oe,ee.x)),Ye=Math.max(oe-c.params.simulation.poolSize.y,Math.min(10,ee.y)),qe=Math.max(oe-c.params.simulation.poolSize.z/2,Math.min(c.params.simulation.poolSize.z/2-oe,ee.z));P.body.move(new v.Vector(He,Ye,qe)),F=b,se&&Q.updateCaustics(O);break}case Y:{if(g&&g.shiftKey){we-=a-K,we=Math.max(-89.999,Math.min(89.999,we));break}ye-=a-K,ue-=m-Z,ue=Math.max(-89.999,Math.min(89.999,ue));break}case q:{const L=.001*me;be+=L*(a-K),Se-=L*(m-Z)}}K=a,Z=m,se&&f()}function $(){I=-1,P&&(P.body.cinematic=!U.useGravity)}function E(a){return a===n||a.parentNode&&E(a.parentNode)}function u(a){return a&&(a.id==="event-editor"||a.parentNode&&u(a.parentNode))}function t(a){me*=1-a*2e-4,me=Math.max(2,Math.min(1e3,me)),se&&f()}addEventListener("wheel",function(a){if(!u(a.target)){var m=a.deltaY;t(-m)}}),document.onmousedown=function(a){C.canvas.focus(),E(a.target)||W(a.pageX,a.pageY,a)},document.onmousemove=function(a){J(a.pageX,a.pageY,a)},document.onmouseup=function(){$()},document.ontouchstart=function(a){a.touches.length===1&&!E(a.target)&&(a.preventDefault(),W(a.touches[0].pageX,a.touches[0].pageY,!1))},document.ontouchmove=function(a){a.touches.length===1&&J(a.touches[0].pageX,a.touches[0].pageY)},document.ontouchend=function(a){a.touches.length==0&&$()};function r(){U.useGravity=!0,O.WR_position=0,c.setTimeBeginRace(),te.copyVideo&&(te.video.currentTime=c.time),U.raceHasStarted=!0;for(let a of c.swimmers)a.startRace()}function e(){U.raceHasStarted=!1;for(let a of c.swimmers)a.swim(!1)}function o(){se=!se,te.video.currentTime=c.time}const l=function(a){if(a.which==32)o();else if(a.which==71){U.useGravity=!U.useGravity;for(let m of c.swimmers)m.body.cinematic=U.useGravity}else if(a.which==76&&se)f();else if(a.which==74)c.swimmers.forEach(m=>m.jump(2));else if(a.which==67)c.params.visualizations.areaConservationEnabled=!c.params.visualizations.areaConservationEnabled,Xe(),console.log("Area conservation "+(c.params.visualizations.areaConservationEnabled?"enabled.":"disabled."));else if(a.which==80)O.showProjectionGrid=!O.showProjectionGrid,console.log("Projection grid "+(O.showProjectionGrid?"enabled.":"disabled."));else if(a.which==65)O.showAreaConservedGrid=!O.showAreaConservedGrid,console.log("Area conserved grid "+(O.showAreaConservedGrid?"enabled.":"disabled."));else if(a.which==83){if(U.swimming=!U.swimming,U.swimming)for(let m of c.swimmers)m.swim(!0);else e();console.log("Swimming "+(U.swimming?"enabled.":"disabled."))}else if(a.which==86)c.params.video.show=!c.params.video.show;else if(a.which==79){if(c.params.simulation.optimized=!0,c.params.simulation.poolSize.x=25,c.params.simulation.poolSize.y=2,c.params.simulation.poolSize.z=50,j.x=1024,j.y=2048,c.params.visualizations.areaConservationEnabled=!1,c.params.simulation.waterDamping=.1,c.swimmers.length!=Fe)for(let m=c.swimmers.length;m<Fe;m++){const g=new U(A);c.swimmers.push(g),O.addSwimmer(g)}c.time=0,te.copyVideo&&(te.video.currentTime=c.time),fe(),c.params.focal=39.98,c.params.visualizations.sparks.fov=c.params.focal*2*Math.PI/360,C.matrixMode(C.PROJECTION),C.loadIdentity(),C.perspective(c.params.focal,C.canvas.width/C.canvas.height,.01,100),C.matrixMode(C.MODELVIEW),be=-.53,Se=1.25,me=47.86,ue=-29,ye=-260.5,we=-5,console.log("Olympic mode enabled.")}else if(a.which==87){if(O.resetTextures(),U.raceHasStarted){e();return}r()}else a.which==72?(document.getElementById("commands").hidden=!document.getElementById("commands").hidden,document.getElementById("h").hidden=!document.getElementById("h").hidden):a.which==40?(j.x>129&&(j.x=Math.round(j.x/2)),fe(),console.log("decreasing x resolution")):a.which==38?(j.x<16384&&(j.x=Math.round(j.x*2)),fe(),console.log("increasing x resolution")):a.which==37?(j.y>129&&(j.y=Math.round(j.y/2)),fe(),console.log("decreasing y resolution")):a.which==39&&(j.y<16384&&(j.y=Math.round(j.y*2)),fe(),console.log("increasing y resolution"))};C.canvas.addEventListener("keydown",l);function d(a){if(!(a>1)){if(I==M)for(let m of c.swimmers)m.body.velocity=new v.Vector(0,0,0);for(let m of c.swimmers)m.update(a);O.updateSpheres(a);for(let m=0;m<c.params.numSteps;m++)O.stepSimulation();Q.updateCaustics(O),U.raceHasStarted&&(c.time+=a),c.updateParams(),h.value=c.getRaceTime(),gt(a)}}function f(){v.keys.L&&(Q.lightDir=v.Vector.fromAngles((90-ye)*Math.PI/180,-ue*Math.PI/180),se&&Q.updateCaustics(O)),c.isOneVisualizationEnabled()&&U.updateAttributesTexture(),O.addOrRemoveVisualizationWaves(!0),O.updateNormals(),C.clear(C.COLOR_BUFFER_BIT|C.DEPTH_BUFFER_BIT),C.loadIdentity(),C.translate(be,Se,-me),C.rotate(-we,0,0,1),C.rotate(-ue,1,0,0),C.rotate(-ye,0,1,0),C.translate(0,.5,0),C.enable(C.DEPTH_TEST),Q.sphereCenter=c.swimmers[0].body.center,Q.sphereRadius=V,Q.renderCube(O),Q.renderWater(O,Be,c.params.visualizations.shadow),c.params.swimmers.showSpheres&&Q.renderSpheres(O),te.render(),C.disable(C.DEPTH_TEST),O.addOrRemoveVisualizationWaves(!1)}};
//# sourceMappingURL=swimming-WdSnPGuQ.js.map
