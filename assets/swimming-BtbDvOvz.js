var ot=Object.defineProperty;var Ne=r=>{throw TypeError(r)};var nt=(r,o,a)=>o in r?ot(r,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[o]=a;var te=(r,o,a)=>nt(r,typeof o!="symbol"?o+"":o,a),st=(r,o,a)=>o.has(r)||Ne("Cannot "+a);var xe=(r,o,a)=>o.has(r)?Ne("Cannot add the same private member more than once"):o instanceof WeakSet?o.add(r):o.set(r,a);var $=(r,o,a)=>(st(r,o,"access private method"),a);import"./modulepreload-polyfill-B5Qt9EMX.js";import{g as at}from"./lil-gui.module.min-Vka56b52.js";var p=function(){var r,o={create:function(i){i=i||{};var s=document.createElement("canvas");s.width=800,s.height=600,"alpha"in i||(i.alpha=!1);try{r=s.getContext("webgl2",i)}catch{}try{r=r||s.getContext("experimental-webgl",i)}catch{}if(!r)throw new Error("WebGL not supported");return r.HALF_FLOAT_OES=36193,a(),d(),u(),L(),r},keys:{},Matrix:T,Indexer:X,Buffer:V,Mesh:_,HitTest:k,Raytracer:G,Shader:D,Texture:F,Vector:w};function a(){r.MODELVIEW=B|1,r.PROJECTION=B|2;var i=new T,s=new T;r.modelviewMatrix=new T,r.projectionMatrix=new T;var e=[],t=[],l,c;r.matrixMode=function(h){switch(h){case r.MODELVIEW:l="modelviewMatrix",c=e;break;case r.PROJECTION:l="projectionMatrix",c=t;break;default:throw new Error("invalid matrix mode "+h)}},r.loadIdentity=function(){T.identity(r[l])},r.loadMatrix=function(h){for(var m=h.m,x=r[l].m,v=0;v<16;v++)x[v]=m[v]},r.multMatrix=function(h){r.loadMatrix(T.multiply(r[l],h,s))},r.perspective=function(h,m,x,v){r.multMatrix(T.perspective(h,m,x,v,i))},r.frustum=function(h,m,x,v,f,y){r.multMatrix(T.frustum(h,m,x,v,f,y,i))},r.ortho=function(h,m,x,v,f,y){r.multMatrix(T.ortho(h,m,x,v,f,y,i))},r.scale=function(h,m,x){r.multMatrix(T.scale(h,m,x,i))},r.translate=function(h,m,x){r.multMatrix(T.translate(h,m,x,i))},r.rotate=function(h,m,x,v){r.multMatrix(T.rotate(h,m,x,v,i))},r.lookAt=function(h,m,x,v,f,y,R,S,C){r.multMatrix(T.lookAt(h,m,x,v,f,y,R,S,C,i))},r.pushMatrix=function(){c.push(Array.prototype.slice.call(r[l].m))},r.popMatrix=function(){var h=c.pop();r[l].m=M?new Float32Array(h):h},r.project=function(h,m,x,v,f,y){v=v||r.modelviewMatrix,f=f||r.projectionMatrix,y=y||r.getParameter(r.VIEWPORT);var R=f.transformPoint(v.transformPoint(new w(h,m,x)));return new w(y[0]+y[2]*(R.x*.5+.5),y[1]+y[3]*(R.y*.5+.5),R.z*.5+.5)},r.unProject=function(h,m,x,v,f,y){v=v||r.modelviewMatrix,f=f||r.projectionMatrix,y=y||r.getParameter(r.VIEWPORT);var R=new w((h-y[0])/y[2]*2-1,(m-y[1])/y[3]*2-1,x*2-1);return T.inverse(T.multiply(f,v,i),s).transformPoint(R)},r.matrixMode(r.MODELVIEW)}function d(){var i={mesh:new _({coords:!0,colors:!0,triangles:!1}),mode:-1,coord:[0,0,0,0],color:[1,1,1,1],shader:new D("      uniform float pointSize;      out vec4 color;      out vec4 coord;      void main() {        color = gl_Color;        coord = gl_TexCoord;        gl_Position = gl_ModelViewProjectionMatrix * gl_Vertex;        gl_PointSize = pointSize;      }    ","      uniform sampler2D tex;      uniform float pointSize;      uniform bool useTexture;      in vec4 color;      in vec4 coord;      out vec4 fragColor;      void main() {        fragColor = color;        if (useTexture) fragColor *= texture(tex, coord.xy);      }    ")};r.pointSize=function(s){i.shader.uniforms({pointSize:s})},r.begin=function(s){if(i.mode!=-1)throw new Error("mismatched gl.begin() and gl.end() calls");i.mode=s,i.mesh.colors=[],i.mesh.coords=[],i.mesh.vertices=[]},r.color=function(s,e,t,l){i.color=arguments.length==1?s.toArray().concat(1):[s,e,t,l||1]},r.texCoord=function(s,e){i.coord=arguments.length==1?s.toArray(2):[s,e]},r.vertex=function(s,e,t){i.mesh.colors.push(i.color),i.mesh.coords.push(i.coord),i.mesh.vertices.push(arguments.length==1?s.toArray():[s,e,t])},r.end=function(){if(i.mode==-1)throw new Error("mismatched gl.begin() and gl.end() calls");i.mesh.compile(),i.shader.uniforms({useTexture:!!r.getParameter(r.TEXTURE_BINDING_2D)}).draw(i.mesh,i.mode),i.mode=-1}}function u(){var i=r,s=0,e=0,t={},l=!1,c=Object.prototype.hasOwnProperty;function h(){for(var S in t)if(c.call(t,S)&&t[S])return!0;return!1}function m(S){var C={};for(var W in S)typeof S[W]=="function"?C[W]=function(J){return function(){J.apply(S,arguments)}}(S[W]):C[W]=S[W];C.original=S,C.x=C.pageX,C.y=C.pageY;for(var O=r.canvas;O;O=O.offsetParent)C.x-=O.offsetLeft,C.y-=O.offsetTop;return l?(C.deltaX=C.x-s,C.deltaY=C.y-e):(C.deltaX=0,C.deltaY=0,l=!0),s=C.x,e=C.y,C.dragging=h(),C.preventDefault=function(){C.original.preventDefault()},C.stopPropagation=function(){C.original.stopPropagation()},C}function x(S){r=i,h()||(E(document,"mousemove",v),E(document,"mouseup",f),A(r.canvas,"mousemove",v),A(r.canvas,"mouseup",f)),t[S.which]=!0,S=m(S),r.onmousedown&&r.onmousedown(S),S.preventDefault()}function v(S){r=i,S=m(S),r.onmousemove&&r.onmousemove(S),S.preventDefault()}function f(S){r=i,t[S.which]=!1,h()||(A(document,"mousemove",v),A(document,"mouseup",f),E(r.canvas,"mousemove",v),E(r.canvas,"mouseup",f)),S=m(S),r.onmouseup&&r.onmouseup(S),S.preventDefault()}function y(){l=!1}function R(){t={},l=!1}E(r.canvas,"mousedown",x),E(r.canvas,"mousemove",v),E(r.canvas,"mouseup",f),E(r.canvas,"mouseover",y),E(r.canvas,"mouseout",y),E(document,"contextmenu",R)}function g(i){var s={8:"BACKSPACE",9:"TAB",13:"ENTER",16:"SHIFT",27:"ESCAPE",32:"SPACE",37:"LEFT",38:"UP",39:"RIGHT",40:"DOWN"};return s[i]||(i>=65&&i<=90?String.fromCharCode(i):null)}function E(i,s,e){i.addEventListener(s,e)}function A(i,s,e){i.removeEventListener(s,e)}E(document,"keydown",function(i){if(!i.altKey&&!i.ctrlKey&&!i.metaKey){var s=g(i.keyCode);s&&(o.keys[s]=!0),o.keys[i.keyCode]=!0}}),E(document,"keyup",function(i){if(!i.altKey&&!i.ctrlKey&&!i.metaKey){var s=g(i.keyCode);s&&(o.keys[s]=!1),o.keys[i.keyCode]=!1}});function L(){(function(i){r.makeCurrent=function(){r=i}})(r),r.animate=function(){var i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(l){setTimeout(l,16.666666666666668)},s=new Date().getTime(),e=r;function t(){r=e;var l=new Date().getTime();r.onupdate&&r.onupdate((l-s)/1e3),r.ondraw&&r.ondraw(),i(t),s=l}t()},r.fullscreen=function(i){i=i||{};var s=i.paddingTop||0,e=i.paddingLeft||0,t=i.paddingRight||0,l=i.paddingBottom||0;if(!document.body)throw new Error("document.body doesn't exist yet (call gl.fullscreen() from window.onload() or from inside the <body> tag)");document.body.appendChild(r.canvas),document.body.style.overflow="hidden",r.canvas.style.position="absolute",r.canvas.style.left=e+"px",r.canvas.style.top=s+"px";function c(){r.canvas.width=window.innerWidth-e-t,r.canvas.height=window.innerHeight-s-l,r.viewport(0,0,r.canvas.width,r.canvas.height),(i.camera||!("camera"in i))&&(r.matrixMode(r.PROJECTION),r.loadIdentity(),r.perspective(i.fov||45,r.canvas.width/r.canvas.height,i.near||.1,i.far||1e3),r.matrixMode(r.MODELVIEW)),r.ondraw&&r.ondraw()}E(window,"resize",c),c()}}var B=305397760,M=typeof Float32Array<"u";function T(){var i=Array.prototype.concat.apply([],arguments);i.length||(i=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),this.m=M?new Float32Array(i):i}T.prototype={inverse:function(){return T.inverse(this,new T)},transpose:function(){return T.transpose(this,new T)},multiply:function(i){return T.multiply(this,i,new T)},transformPoint:function(i){var s=this.m;return new w(s[0]*i.x+s[1]*i.y+s[2]*i.z+s[3],s[4]*i.x+s[5]*i.y+s[6]*i.z+s[7],s[8]*i.x+s[9]*i.y+s[10]*i.z+s[11]).divide(s[12]*i.x+s[13]*i.y+s[14]*i.z+s[15])},transformVector:function(i){var s=this.m;return new w(s[0]*i.x+s[1]*i.y+s[2]*i.z,s[4]*i.x+s[5]*i.y+s[6]*i.z,s[8]*i.x+s[9]*i.y+s[10]*i.z)}},T.inverse=function(i,s){s=s||new T;var e=i.m,t=s.m;t[0]=e[5]*e[10]*e[15]-e[5]*e[14]*e[11]-e[6]*e[9]*e[15]+e[6]*e[13]*e[11]+e[7]*e[9]*e[14]-e[7]*e[13]*e[10],t[1]=-e[1]*e[10]*e[15]+e[1]*e[14]*e[11]+e[2]*e[9]*e[15]-e[2]*e[13]*e[11]-e[3]*e[9]*e[14]+e[3]*e[13]*e[10],t[2]=e[1]*e[6]*e[15]-e[1]*e[14]*e[7]-e[2]*e[5]*e[15]+e[2]*e[13]*e[7]+e[3]*e[5]*e[14]-e[3]*e[13]*e[6],t[3]=-e[1]*e[6]*e[11]+e[1]*e[10]*e[7]+e[2]*e[5]*e[11]-e[2]*e[9]*e[7]-e[3]*e[5]*e[10]+e[3]*e[9]*e[6],t[4]=-e[4]*e[10]*e[15]+e[4]*e[14]*e[11]+e[6]*e[8]*e[15]-e[6]*e[12]*e[11]-e[7]*e[8]*e[14]+e[7]*e[12]*e[10],t[5]=e[0]*e[10]*e[15]-e[0]*e[14]*e[11]-e[2]*e[8]*e[15]+e[2]*e[12]*e[11]+e[3]*e[8]*e[14]-e[3]*e[12]*e[10],t[6]=-e[0]*e[6]*e[15]+e[0]*e[14]*e[7]+e[2]*e[4]*e[15]-e[2]*e[12]*e[7]-e[3]*e[4]*e[14]+e[3]*e[12]*e[6],t[7]=e[0]*e[6]*e[11]-e[0]*e[10]*e[7]-e[2]*e[4]*e[11]+e[2]*e[8]*e[7]+e[3]*e[4]*e[10]-e[3]*e[8]*e[6],t[8]=e[4]*e[9]*e[15]-e[4]*e[13]*e[11]-e[5]*e[8]*e[15]+e[5]*e[12]*e[11]+e[7]*e[8]*e[13]-e[7]*e[12]*e[9],t[9]=-e[0]*e[9]*e[15]+e[0]*e[13]*e[11]+e[1]*e[8]*e[15]-e[1]*e[12]*e[11]-e[3]*e[8]*e[13]+e[3]*e[12]*e[9],t[10]=e[0]*e[5]*e[15]-e[0]*e[13]*e[7]-e[1]*e[4]*e[15]+e[1]*e[12]*e[7]+e[3]*e[4]*e[13]-e[3]*e[12]*e[5],t[11]=-e[0]*e[5]*e[11]+e[0]*e[9]*e[7]+e[1]*e[4]*e[11]-e[1]*e[8]*e[7]-e[3]*e[4]*e[9]+e[3]*e[8]*e[5],t[12]=-e[4]*e[9]*e[14]+e[4]*e[13]*e[10]+e[5]*e[8]*e[14]-e[5]*e[12]*e[10]-e[6]*e[8]*e[13]+e[6]*e[12]*e[9],t[13]=e[0]*e[9]*e[14]-e[0]*e[13]*e[10]-e[1]*e[8]*e[14]+e[1]*e[12]*e[10]+e[2]*e[8]*e[13]-e[2]*e[12]*e[9],t[14]=-e[0]*e[5]*e[14]+e[0]*e[13]*e[6]+e[1]*e[4]*e[14]-e[1]*e[12]*e[6]-e[2]*e[4]*e[13]+e[2]*e[12]*e[5],t[15]=e[0]*e[5]*e[10]-e[0]*e[9]*e[6]-e[1]*e[4]*e[10]+e[1]*e[8]*e[6]+e[2]*e[4]*e[9]-e[2]*e[8]*e[5];for(var l=e[0]*t[0]+e[1]*t[4]+e[2]*t[8]+e[3]*t[12],c=0;c<16;c++)t[c]/=l;return s},T.transpose=function(i,s){s=s||new T;var e=i.m,t=s.m;return t[0]=e[0],t[1]=e[4],t[2]=e[8],t[3]=e[12],t[4]=e[1],t[5]=e[5],t[6]=e[9],t[7]=e[13],t[8]=e[2],t[9]=e[6],t[10]=e[10],t[11]=e[14],t[12]=e[3],t[13]=e[7],t[14]=e[11],t[15]=e[15],s},T.multiply=function(i,s,e){e=e||new T;var t=i.m,l=s.m,c=e.m;return c[0]=t[0]*l[0]+t[1]*l[4]+t[2]*l[8]+t[3]*l[12],c[1]=t[0]*l[1]+t[1]*l[5]+t[2]*l[9]+t[3]*l[13],c[2]=t[0]*l[2]+t[1]*l[6]+t[2]*l[10]+t[3]*l[14],c[3]=t[0]*l[3]+t[1]*l[7]+t[2]*l[11]+t[3]*l[15],c[4]=t[4]*l[0]+t[5]*l[4]+t[6]*l[8]+t[7]*l[12],c[5]=t[4]*l[1]+t[5]*l[5]+t[6]*l[9]+t[7]*l[13],c[6]=t[4]*l[2]+t[5]*l[6]+t[6]*l[10]+t[7]*l[14],c[7]=t[4]*l[3]+t[5]*l[7]+t[6]*l[11]+t[7]*l[15],c[8]=t[8]*l[0]+t[9]*l[4]+t[10]*l[8]+t[11]*l[12],c[9]=t[8]*l[1]+t[9]*l[5]+t[10]*l[9]+t[11]*l[13],c[10]=t[8]*l[2]+t[9]*l[6]+t[10]*l[10]+t[11]*l[14],c[11]=t[8]*l[3]+t[9]*l[7]+t[10]*l[11]+t[11]*l[15],c[12]=t[12]*l[0]+t[13]*l[4]+t[14]*l[8]+t[15]*l[12],c[13]=t[12]*l[1]+t[13]*l[5]+t[14]*l[9]+t[15]*l[13],c[14]=t[12]*l[2]+t[13]*l[6]+t[14]*l[10]+t[15]*l[14],c[15]=t[12]*l[3]+t[13]*l[7]+t[14]*l[11]+t[15]*l[15],e},T.identity=function(i){i=i||new T;var s=i.m;return s[0]=s[5]=s[10]=s[15]=1,s[1]=s[2]=s[3]=s[4]=s[6]=s[7]=s[8]=s[9]=s[11]=s[12]=s[13]=s[14]=0,i},T.perspective=function(i,s,e,t,l){var c=Math.tan(i*Math.PI/360)*e,h=c*s;return T.frustum(-h,h,-c,c,e,t,l)},T.frustum=function(i,s,e,t,l,c,h){h=h||new T;var m=h.m;return m[0]=2*l/(s-i),m[1]=0,m[2]=(s+i)/(s-i),m[3]=0,m[4]=0,m[5]=2*l/(t-e),m[6]=(t+e)/(t-e),m[7]=0,m[8]=0,m[9]=0,m[10]=-(c+l)/(c-l),m[11]=-2*c*l/(c-l),m[12]=0,m[13]=0,m[14]=-1,m[15]=0,h},T.ortho=function(i,s,e,t,l,c,h){h=h||new T;var m=h.m;return m[0]=2/(s-i),m[1]=0,m[2]=0,m[3]=-(s+i)/(s-i),m[4]=0,m[5]=2/(t-e),m[6]=0,m[7]=-(t+e)/(t-e),m[8]=0,m[9]=0,m[10]=-2/(c-l),m[11]=-(c+l)/(c-l),m[12]=0,m[13]=0,m[14]=0,m[15]=1,h},T.scale=function(i,s,e,t){t=t||new T;var l=t.m;return l[0]=i,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=s,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=e,l[11]=0,l[12]=0,l[13]=0,l[14]=0,l[15]=1,t},T.translate=function(i,s,e,t){t=t||new T;var l=t.m;return l[0]=1,l[1]=0,l[2]=0,l[3]=i,l[4]=0,l[5]=1,l[6]=0,l[7]=s,l[8]=0,l[9]=0,l[10]=1,l[11]=e,l[12]=0,l[13]=0,l[14]=0,l[15]=1,t},T.rotate=function(i,s,e,t,l){if(!i||!s&&!e&&!t)return T.identity(l);l=l||new T;var c=l.m,h=Math.sqrt(s*s+e*e+t*t);i*=Math.PI/180,s/=h,e/=h,t/=h;var m=Math.cos(i),x=Math.sin(i),v=1-m;return c[0]=s*s*v+m,c[1]=s*e*v-t*x,c[2]=s*t*v+e*x,c[3]=0,c[4]=e*s*v+t*x,c[5]=e*e*v+m,c[6]=e*t*v-s*x,c[7]=0,c[8]=t*s*v-e*x,c[9]=t*e*v+s*x,c[10]=t*t*v+m,c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l},T.lookAt=function(i,s,e,t,l,c,h,m,x,v){v=v||new T;var f=v.m,y=new w(i,s,e),R=new w(t,l,c),S=new w(h,m,x),C=y.subtract(R).unit(),W=S.cross(C).unit(),O=C.cross(W).unit();return f[0]=W.x,f[1]=W.y,f[2]=W.z,f[3]=-W.dot(y),f[4]=O.x,f[5]=O.y,f[6]=O.z,f[7]=-O.dot(y),f[8]=C.x,f[9]=C.y,f[10]=C.z,f[11]=-C.dot(y),f[12]=0,f[13]=0,f[14]=0,f[15]=1,v};function X(){this.unique=[],this.indices=[],this.map={}}X.prototype={add:function(i){var s=JSON.stringify(i);return s in this.map||(this.map[s]=this.unique.length,this.unique.push(i)),this.map[s]}};function V(i,s){this.buffer=null,this.target=i,this.type=s,this.data=[]}V.prototype={compile:function(i){for(var s=[],e=0,t=1e4;e<this.data.length;e+=t)s=Array.prototype.concat.apply(s,this.data.slice(e,e+t));var l=this.data.length?s.length/this.data.length:0;if(l!=Math.round(l))throw new Error("buffer elements not of consistent size, average size is "+l);this.buffer=this.buffer||r.createBuffer(),this.buffer.length=s.length,this.buffer.spacing=l,r.bindBuffer(this.target,this.buffer),r.bufferData(this.target,new this.type(s),i||r.STATIC_DRAW)}};function _(i){i=i||{},this.vertexBuffers={},this.indexBuffers={},this.addVertexBuffer("vertices","gl_Vertex"),i.coords&&this.addVertexBuffer("coords","gl_TexCoord"),i.normals&&this.addVertexBuffer("normals","gl_Normal"),i.colors&&this.addVertexBuffer("colors","gl_Color"),(!("triangles"in i)||i.triangles)&&this.addIndexBuffer("triangles"),i.lines&&this.addIndexBuffer("lines")}_.prototype={addVertexBuffer:function(i,s){var e=this.vertexBuffers[s]=new V(r.ARRAY_BUFFER,Float32Array);e.name=i,this[i]=[]},addIndexBuffer:function(i){this.indexBuffers[i]=new V(r.ELEMENT_ARRAY_BUFFER,Uint16Array),this[i]=[]},compile:function(){for(var i in this.vertexBuffers){var s=this.vertexBuffers[i];s.data=this[s.name],s.compile()}for(var e in this.indexBuffers){var s=this.indexBuffers[e];s.data=this[e],s.compile()}},transform:function(i){if(this.vertices=this.vertices.map(function(e){return i.transformPoint(w.fromArray(e)).toArray()}),this.normals){var s=i.inverse().transpose();this.normals=this.normals.map(function(e){return s.transformVector(w.fromArray(e)).unit().toArray()})}return this.compile(),this},computeNormals:function(){this.normals||this.addVertexBuffer("normals","gl_Normal");for(var i=0;i<this.vertices.length;i++)this.normals[i]=new w;for(var i=0;i<this.triangles.length;i++){var s=this.triangles[i],e=w.fromArray(this.vertices[s[0]]),t=w.fromArray(this.vertices[s[1]]),l=w.fromArray(this.vertices[s[2]]),c=t.subtract(e).cross(l.subtract(e)).unit();this.normals[s[0]]=this.normals[s[0]].add(c),this.normals[s[1]]=this.normals[s[1]].add(c),this.normals[s[2]]=this.normals[s[2]].add(c)}for(var i=0;i<this.vertices.length;i++)this.normals[i]=this.normals[i].unit().toArray();return this.compile(),this},computeWireframe:function(){for(var i=new X,s=0;s<this.triangles.length;s++)for(var e=this.triangles[s],t=0;t<e.length;t++){var l=e[t],c=e[(t+1)%e.length];i.add([Math.min(l,c),Math.max(l,c)])}return this.lines||this.addIndexBuffer("lines"),this.lines=i.unique,this.compile(),this},getAABB:function(){var i={min:new w(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)};i.max=i.min.negative();for(var s=0;s<this.vertices.length;s++){var e=w.fromArray(this.vertices[s]);i.min=w.min(i.min,e),i.max=w.max(i.max,e)}return i},getBoundingSphere:function(){for(var i=this.getAABB(),s={center:i.min.add(i.max).divide(2),radius:0},e=0;e<this.vertices.length;e++)s.radius=Math.max(s.radius,w.fromArray(this.vertices[e]).subtract(s.center).length());return s}},_.plane=function(i){i=i||{};for(var s=new _(i),e=i.detailX||i.detail||1,t=i.detailY||i.detail||1,l=i.width||2,c=i.height||2,h=0;h<=t;h++)for(var m=h/t,x=0;x<=e;x++){var v=x/e;if(s.vertices.push([(v-.5)*l,(m-.5)*c,0]),s.coords&&s.coords.push([v,m]),s.normals&&s.normals.push([0,0,1]),x<e&&h<t){var f=x+h*(e+1);s.triangles.push([f,f+1,f+e+1]),s.triangles.push([f+e+1,f+1,f+e+2])}}return s.compile(),s};var z=[[0,4,2,6,-1,0,0],[1,3,5,7,1,0,0],[0,1,4,5,0,-1,0],[2,6,3,7,0,1,0],[0,2,1,3,0,0,-1],[4,5,6,7,0,0,1]];function P(i){return new w((i&1)*2-1,(i&2)-1,(i&4)/2-1)}_.cube=function(i){for(var s=new _(i),e=i&&i.width||2,t=i&&i.height||2,l=i&&i.depth||2,c=0;c<z.length;c++){for(var h=z[c],m=c*4,x=0;x<4;x++){var v=h[x];const f=P(v).toArray();f[0]*=e/2,f[1]*=t/2,f[2]*=l/2,s.vertices.push(f),s.coords&&s.coords.push([x&1,(x&2)/2]),s.normals&&s.normals.push(h.slice(4,7))}s.triangles.push([m,m+1,m+2]),s.triangles.push([m+2,m+1,m+3])}return s.compile(),s},_.sphere=function(i){function s(O,J,re){return x?[O,re,J]:[O,J,re]}function e(O){return O+(O-O*O)/2}i=i||{};for(var t=new _(i),l=new X,c=i.detail||6,h=0;h<8;h++)for(var m=P(h),x=m.x*m.y*m.z>0,v=[],f=0;f<=c;f++){for(var y=0;f+y<=c;y++){var R=f/c,S=y/c,C=(c-f-y)/c,W={vertex:new w(e(R),e(S),e(C)).unit().multiply(m).toArray()};t.coords&&(W.coord=m.y>0?[1-R,C]:[C,1-R]),v.push(l.add(W))}if(f>0)for(var y=0;f+y<=c;y++){var R=(f-1)*(c+1)+(f-1-(f-1)*(f-1))/2+y,S=f*(c+1)+(f-f*f)/2+y;t.triangles.push(s(v[R],v[R+1],v[S])),f+y<c&&t.triangles.push(s(v[S],v[R+1],v[S+1]))}}return t.vertices=l.unique.map(function(O){return O.vertex}),t.coords&&(t.coords=l.unique.map(function(O){return O.coord})),t.normals&&(t.normals=t.vertices),t.compile(),t},_.load=function(i,s){s=s||{},"coords"in s||(s.coords=!!i.coords),"normals"in s||(s.normals=!!i.normals),"colors"in s||(s.colors=!!i.colors),"triangles"in s||(s.triangles=!!i.triangles),"lines"in s||(s.lines=!!i.lines);var e=new _(s);return e.vertices=i.vertices,e.coords&&(e.coords=i.coords),e.normals&&(e.normals=i.normals),e.colors&&(e.colors=i.colors),e.triangles&&(e.triangles=i.triangles),e.lines&&(e.lines=i.lines),e.compile(),e};function k(i,s,e){this.t=arguments.length?i:Number.MAX_VALUE,this.hit=s,this.normal=e}k.prototype={mergeWith:function(i){i.t>0&&i.t<this.t&&(this.t=i.t,this.hit=i.hit,this.normal=i.normal)}};function G(){var i=r.getParameter(r.VIEWPORT),s=r.modelviewMatrix.m,e=new w(s[0],s[4],s[8]),t=new w(s[1],s[5],s[9]),l=new w(s[2],s[6],s[10]),c=new w(s[3],s[7],s[11]);this.eye=new w(-c.dot(e),-c.dot(t),-c.dot(l));var h=i[0],m=h+i[2],x=i[1],v=x+i[3];this.ray00=r.unProject(h,x,1).subtract(this.eye),this.ray10=r.unProject(m,x,1).subtract(this.eye),this.ray01=r.unProject(h,v,1).subtract(this.eye),this.ray11=r.unProject(m,v,1).subtract(this.eye),this.viewport=i}G.prototype={getRayForPixel:function(i,s){i=(i-this.viewport[0])/this.viewport[2],s=1-(s-this.viewport[1])/this.viewport[3];var e=w.lerp(this.ray00,this.ray10,i),t=w.lerp(this.ray01,this.ray11,i);return w.lerp(e,t,s).unit()}},G.hitTestBox=function(i,s,e,t){var l=e.subtract(i).divide(s),c=t.subtract(i).divide(s),h=w.min(l,c),m=w.max(l,c),x=h.max(),v=m.min();if(x>0&&x<v){var f=1e-6,y=i.add(s.multiply(x));return e=e.add(f),t=t.subtract(f),new k(x,y,new w((y.x>t.x)-(y.x<e.x),(y.y>t.y)-(y.y<e.y),(y.z>t.z)-(y.z<e.z)))}return null},G.hitTestSphere=function(i,s,e,t){var l=i.subtract(e),c=s.dot(s),h=2*s.dot(l),m=l.dot(l)-t*t,x=h*h-4*c*m;if(x>0){var v=(-h-Math.sqrt(x))/(2*c),f=i.add(s.multiply(v));return new k(v,f,f.subtract(e).divide(t))}return null},G.hitTestTriangle=function(i,s,e,t,l){var c=t.subtract(e),h=l.subtract(e),m=c.cross(h).unit(),x=m.dot(e.subtract(i))/m.dot(s);if(x>0){var v=i.add(s.multiply(x)),f=v.subtract(e),y=h.dot(h),R=h.dot(c),S=h.dot(f),C=c.dot(c),W=c.dot(f),O=y*C-R*R,J=(C*S-R*W)/O,re=(y*W-R*S)/O;if(J>=0&&re>=0&&J+re<=1)return new k(x,v,m)}return null};function U(i,s,e){let t;for(;(t=i.exec(s))!=null;)e(t)}var I="LIGHTGL";function D(i,s){function e(y){var R=document.getElementById(y);return R?R.text:y}i=e(i),s=e(s);var t="    uniform mat3 gl_NormalMatrix;    uniform mat4 gl_ModelViewMatrix;    uniform mat4 gl_ProjectionMatrix;    uniform mat4 gl_ModelViewProjectionMatrix;    uniform mat4 gl_ModelViewMatrixInverse;    uniform mat4 gl_ProjectionMatrixInverse;    uniform mat4 gl_ModelViewProjectionMatrixInverse;  ",l=`#version 300 es
    `+t+"    in vec4 gl_Vertex;    in vec4 gl_TexCoord;    in vec3 gl_Normal;    in vec4 gl_Color;    vec4 ftransform() {      return gl_ModelViewProjectionMatrix * gl_Vertex;    }  ",c=`#version 300 es
    precision highp float;
  `+t,h=i+s,m={};U(/\b(gl_[^;]*)\b;/g,t,function(y){var R=y[1];if(h.indexOf(R)!=-1){var S=R.replace(/[a-z_]/g,"");m[S]=I+R}}),h.indexOf("ftransform")!=-1&&(m.MVPM=I+"gl_ModelViewProjectionMatrix"),this.usedMatrices=m;function x(y,R){var S={},C=/^((\s*\/\/.*\n|\s*#extension.*\n)+)[^]*$/.exec(R);return R=C?C[1]+y+R.substr(C[1].length):y+R,U(/\bgl_\w+\b/g,y,function(W){W in S||(R=R.replace(new RegExp("\\b"+W+"\\b","g"),I+W),S[W]=!0)}),R}i=x(l,i),s=x(c,s);function v(y,R){var S=r.createShader(y);if(r.shaderSource(S,R),r.compileShader(S),!r.getShaderParameter(S,r.COMPILE_STATUS))throw new Error("compile error: "+r.getShaderInfoLog(S));return S}if(this.program=r.createProgram(),r.attachShader(this.program,v(r.VERTEX_SHADER,i)),r.attachShader(this.program,v(r.FRAGMENT_SHADER,s)),r.linkProgram(this.program),!r.getProgramParameter(this.program,r.LINK_STATUS))throw new Error("link error: "+r.getProgramInfoLog(this.program));this.attributes={},this.uniformLocations={};var f={};U(/uniform\s+sampler(1D|2D|3D|Cube)\s+(\w+)\s*;/g,i+s,function(y){f[y[2]]=1}),this.isSampler=f}function K(i){var s=Object.prototype.toString.call(i);return s=="[object Array]"||s=="[object Float32Array]"}function ee(i){var s=Object.prototype.toString.call(i);return s=="[object Number]"||s=="[object Boolean]"}new T,new T,D.prototype={uniforms:function(i){r.useProgram(this.program);for(var s in i){var e=this.uniformLocations[s]||r.getUniformLocation(this.program,s);if(e){this.uniformLocations[s]=e;var t=i[s];if(t instanceof w?t=[t.x,t.y,t.z]:t instanceof T&&(t=t.m),K(t))switch(t.length){case 1:r.uniform1fv(e,new Float32Array(t));break;case 2:r.uniform2fv(e,new Float32Array(t));break;case 3:r.uniform3fv(e,new Float32Array(t));break;case 4:r.uniform4fv(e,new Float32Array(t));break;case 9:r.uniformMatrix3fv(e,!1,new Float32Array([t[0],t[3],t[6],t[1],t[4],t[7],t[2],t[5],t[8]]));break;case 16:r.uniformMatrix4fv(e,!1,new Float32Array([t[0],t[4],t[8],t[12],t[1],t[5],t[9],t[13],t[2],t[6],t[10],t[14],t[3],t[7],t[11],t[15]]));break;default:throw new Error(`don't know how to load uniform "`+s+'" of length '+t.length)}else if(ee(t))(this.isSampler[s]?r.uniform1i:r.uniform1f).call(r,e,t);else throw new Error('attempted to set uniform "'+s+'" to invalid value '+t)}}return this},draw:function(i,s){this.drawBuffers(i.vertexBuffers,i.indexBuffers[s==r.LINES?"lines":"triangles"],arguments.length<2?r.TRIANGLES:s)},drawBuffers:function(i,s,e){var t=this.usedMatrices,l=r.modelviewMatrix,c=r.projectionMatrix,h=t.MVMI||t.NM?l.inverse():null,m=t.PMI?c.inverse():null,x=t.MVPM||t.MVPMI?c.multiply(l):null,v={};if(t.MVM&&(v[t.MVM]=l),t.MVMI&&(v[t.MVMI]=h),t.PM&&(v[t.PM]=c),t.PMI&&(v[t.PMI]=m),t.MVPM&&(v[t.MVPM]=x),t.MVPMI&&(v[t.MVPMI]=x.inverse()),t.NM){var f=h.m;v[t.NM]=[f[0],f[4],f[8],f[1],f[5],f[9],f[2],f[6],f[10]]}this.uniforms(v);var y=0;for(var R in i){var S=i[R],C=this.attributes[R]||r.getAttribLocation(this.program,R.replace(/^(gl_.*)$/,I+"$1"));C==-1||!S.buffer||(this.attributes[R]=C,r.bindBuffer(r.ARRAY_BUFFER,S.buffer),r.enableVertexAttribArray(C),r.vertexAttribPointer(C,S.buffer.spacing,r.FLOAT,!1,0,0),y=S.buffer.length/S.buffer.spacing)}for(var R in this.attributes)R in i||r.disableVertexAttribArray(this.attributes[R]);return y&&(!s||s.buffer)&&(s?(r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,s.buffer),r.drawElements(e,s.buffer.length,r.UNSIGNED_SHORT,0)):r.drawArrays(e,0,y)),this}};function F(i,s,e){e=e||{},this.width=i,this.height=s,this.id=r.createTexture();let t=e.type||r.UNSIGNED_BYTE,l=e.format||r.RGBA,c=r.RGBA;const h=r.getExtension("EXT_color_buffer_float"),m=r.getExtension("EXT_color_buffer_half_float");t===r.FLOAT?(h?r instanceof WebGL2RenderingContext&&(l=r.RGBA32F):(console.warn("FLOAT textures not renderable, falling back to UNSIGNED_BYTE"),t=r.UNSIGNED_BYTE,l=r.RGBA8),c=r.RGBA):t===r.HALF_FLOAT_OES?(m?r instanceof WebGL2RenderingContext&&(l=r.RGBA16F):(console.warn("HALF_FLOAT textures not renderable, falling back to UNSIGNED_BYTE"),t=r.UNSIGNED_BYTE,l=r.RGBA8),c=r.RGBA):(t=r.UNSIGNED_BYTE,l=r.RGBA8,c=r.RGBA);const x=e.filter||e.magFilter||r.LINEAR,v=e.filter||e.minFilter||r.LINEAR;r.bindTexture(r.TEXTURE_2D,this.id),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,1),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,x),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,v),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,e.wrap||e.wrapS||r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,e.wrap||e.wrapT||r.CLAMP_TO_EDGE),r instanceof WebGL2RenderingContext?r.texImage2D(r.TEXTURE_2D,0,l,i,s,0,c,t,null):r.texImage2D(r.TEXTURE_2D,0,c,i,s,0,c,t,null),r.bindTexture(r.TEXTURE_2D,null),this.format=c,this.type=t,this.internalFormat=l}var H,Y,j;F.prototype={bind:function(i){r.activeTexture(r.TEXTURE0+(i||0)),r.bindTexture(r.TEXTURE_2D,this.id)},unbind:function(i){r.activeTexture(r.TEXTURE0+(i||0)),r.bindTexture(r.TEXTURE_2D,null)},canDrawTo:function(){H=H||r.createFramebuffer(),r.bindFramebuffer(r.FRAMEBUFFER,H),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,this.id,0);var i=r.checkFramebufferStatus(r.FRAMEBUFFER)==r.FRAMEBUFFER_COMPLETE;return r.bindFramebuffer(r.FRAMEBUFFER,null),i},drawTo:function(i){r.getExtension("EXT_color_buffer_float")||console.warn("EXT_color_buffer_float not available!");var e=r.getParameter(r.VIEWPORT);if(H=H||r.createFramebuffer(),Y=Y||r.createRenderbuffer(),r.bindFramebuffer(r.FRAMEBUFFER,H),r.bindRenderbuffer(r.RENDERBUFFER,Y),(this.width!=Y.width||this.height!=Y.height)&&(Y.width=this.width,Y.height=this.height,r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_COMPONENT16,this.width,this.height)),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,this.id,0),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,Y),r.checkFramebufferStatus(r.FRAMEBUFFER)!=r.FRAMEBUFFER_COMPLETE)throw new Error("Rendering to this texture is not supported (incomplete framebuffer)");r.viewport(0,0,this.width,this.height),i(),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindRenderbuffer(r.RENDERBUFFER,null),r.viewport(e[0],e[1],e[2],e[3])},swapWith:function(i){var s;s=i.id,i.id=this.id,this.id=s,s=i.width,i.width=this.width,this.width=s,s=i.height,i.height=this.height,this.height=s}},F.fromImage=function(i,s){s=s||{};var e=new F(i.width,i.height,s);r.bindTexture(r.TEXTURE_2D,e.id);try{r.texImage2D(r.TEXTURE_2D,0,e.format,e.format,e.type,i)}catch{throw location.protocol=="file:"?new Error('image not loaded for security reasons (serve this page over "http://" instead)'):new Error("image not loaded for security reasons (image must originate from the same domain as this page or use Cross-Origin Resource Sharing)")}return s.minFilter&&s.minFilter!=r.NEAREST&&s.minFilter!=r.LINEAR&&r.generateMipmap(r.TEXTURE_2D),r.bindTexture(r.TEXTURE_2D,null),e},F.fromURL=function(i,s){j=j||function(){var c=document.createElement("canvas").getContext("2d");c.canvas.width=c.canvas.height=128;for(var h=0;h<c.canvas.height;h+=16)for(var m=0;m<c.canvas.width;m+=16)c.fillStyle=(m^h)&16?"#FFF":"#DDD",c.fillRect(m,h,16,16);return c.canvas}();var e=F.fromImage(j,s),t=new Image,l=r;return t.onload=function(){l.makeCurrent(),F.fromImage(t,s).swapWith(e)},t.src=i,e},F.canUseFloatingPointTextures=function(){return!!r.getExtension("OES_texture_float")},F.canUseFloatingPointLinearFiltering=function(){return!!r.getExtension("OES_texture_float_linear")},F.canUseHalfFloatingPointTextures=function(){return!!r.getExtension("OES_texture_half_float")},F.canUseHalfFloatingPointLinearFiltering=function(){return!!r.getExtension("OES_texture_half_float_linear")};function w(i,s,e){this.x=i||0,this.y=s||0,this.z=e||0}return w.prototype={negative:function(){return new w(-this.x,-this.y,-this.z)},add:function(i){return i instanceof w?new w(this.x+i.x,this.y+i.y,this.z+i.z):new w(this.x+i,this.y+i,this.z+i)},subtract:function(i){return i instanceof w?new w(this.x-i.x,this.y-i.y,this.z-i.z):new w(this.x-i,this.y-i,this.z-i)},multiply:function(i){return i instanceof w?new w(this.x*i.x,this.y*i.y,this.z*i.z):new w(this.x*i,this.y*i,this.z*i)},divide:function(i){return i instanceof w?new w(this.x/i.x,this.y/i.y,this.z/i.z):new w(this.x/i,this.y/i,this.z/i)},equals:function(i){return this.x==i.x&&this.y==i.y&&this.z==i.z},dot:function(i){return this.x*i.x+this.y*i.y+this.z*i.z},cross:function(i){return new w(this.y*i.z-this.z*i.y,this.z*i.x-this.x*i.z,this.x*i.y-this.y*i.x)},length:function(){return Math.sqrt(this.dot(this))},unit:function(){return this.divide(this.length())},min:function(){return Math.min(Math.min(this.x,this.y),this.z)},max:function(){return Math.max(Math.max(this.x,this.y),this.z)},toAngles:function(){return{theta:Math.atan2(this.z,this.x),phi:Math.asin(this.y/this.length())}},angleTo:function(i){return Math.acos(this.dot(i)/(this.length()*i.length()))},toArray:function(i){return[this.x,this.y,this.z].slice(0,i||3)},clone:function(){return new w(this.x,this.y,this.z)},init:function(i,s,e){return this.x=i,this.y=s,this.z=e,this}},w.negative=function(i,s){return s.x=-i.x,s.y=-i.y,s.z=-i.z,s},w.add=function(i,s,e){return s instanceof w?(e.x=i.x+s.x,e.y=i.y+s.y,e.z=i.z+s.z):(e.x=i.x+s,e.y=i.y+s,e.z=i.z+s),e},w.subtract=function(i,s,e){return s instanceof w?(e.x=i.x-s.x,e.y=i.y-s.y,e.z=i.z-s.z):(e.x=i.x-s,e.y=i.y-s,e.z=i.z-s),e},w.multiply=function(i,s,e){return s instanceof w?(e.x=i.x*s.x,e.y=i.y*s.y,e.z=i.z*s.z):(e.x=i.x*s,e.y=i.y*s,e.z=i.z*s),e},w.divide=function(i,s,e){return s instanceof w?(e.x=i.x/s.x,e.y=i.y/s.y,e.z=i.z/s.z):(e.x=i.x/s,e.y=i.y/s,e.z=i.z/s),e},w.cross=function(i,s,e){return e.x=i.y*s.z-i.z*s.y,e.y=i.z*s.x-i.x*s.z,e.z=i.x*s.y-i.y*s.x,e},w.unit=function(i,s){var e=i.length();return s.x=i.x/e,s.y=i.y/e,s.z=i.z/e,s},w.fromAngles=function(i,s){return new w(Math.cos(i)*Math.cos(s),Math.sin(s),Math.sin(i)*Math.cos(s))},w.randomDirection=function(){return w.fromAngles(Math.random()*Math.PI*2,Math.asin(Math.random()*2-1))},w.min=function(i,s){return new w(Math.min(i.x,s.x),Math.min(i.y,s.y),Math.min(i.z,s.z))},w.max=function(i,s){return new w(Math.max(i.x,s.x),Math.max(i.y,s.y),Math.max(i.z,s.z))},w.lerp=function(i,s,e){return s.subtract(i).multiply(e).add(i)},w.fromArray=function(i){return new w(i[0],i[1],i[2])},w.angleBetween=function(i,s){return i.angleTo(s)},o}();class Te{constructor({tx:o=0,ty:a=0,zoom:d=4,ax:u=-25,ay:g=-200,az:E=0,fov:A=45}){this.tx=o,this.ty=a,this.zoom=d,this.ax=u,this.ay=g,this.az=E,this.fov=A}}const Fe=.3,Pe=.15,De=1,lt=10,Xe=Math.ceil(lt/4),He=10,we=`
    uniform float wr;
    #define sqrt_2_PI 2.50662827
    #define PI 3.1415926536
    uniform sampler2D swimmersAttributesTexture;
    const int SWIMMERS_NUM_ATTRIBUTES = 4;
    const vec2 TEXTURE_SIZE = vec2(`+Xe+", "+He+`);
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
`,qe=200,ct=`
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
#define MAX_SPARKS `+qe+`
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

`;var Ee,Ye;class _e{constructor(o,a,d,u){xe(this,Ee);if(this.gl=o,this.calibration=d,this.copyVideo=!1,this.show=!1,this.videoStartTime=u,o===null){alert("Unable to initialize WebGL. Your browser or machine may not support it.");return}o.clearColor(0,0,0,1),o.clear(o.COLOR_BUFFER_BIT),this.shader=new p.Shader(`
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
    uniform float opacity;
    uniform float distanceFixed;

    `+ct+we+`

    void main(void) {
        highp vec4 texelColor = texture(uSampler, vTextureCoord);
        vec3 waterColor = vec3(.294, .812, 1.);
        float r = opacity;
        if (thresholdBlending) {
            if (length(waterColor - texelColor.rgb) < blendingThreshold ||
             length(texelColor.rgb) > 1.5 && texelColor.b > .1 + (texelColor.r + texelColor.g) * .5) r = 0.3 * opacity;
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
`),this.mesh=p.Mesh.plane({width:2,height:2,coords:!0,normals:!0}),this.mesh.transform(p.Matrix.rotate(90,1,0,0)),this.mesh.transform(p.Matrix.translate(0,.1,0)),this.programInfo=null,this.texture=this.initTexture(),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!0),a!=""&&(this.video=this.setupVideo(a))}render(){const o=n.params.visualizations.sparks,a=n.params.simulation.poolSize;if(!n.params.video.show)return;this.copyVideo&&this.updateTexture(),(!this.mesh.vertexBuffers||!this.mesh.vertexBuffers.vertex)&&this.mesh.compile(),this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture);const d=this.gl.canvas.height,u=16*d/9,g=(this.gl.canvas.width-u)/2;this.gl.viewport(g,0,u,d),N.swimmersAttributesTexture&&N.swimmersAttributesTexture.bind(1),console.log("drawing video"),this.shader.uniforms({uSampler:0,swimmersHelperFunctions:1,iTime:n.getRaceTime(),poolSize:[a.x,a.y,a.z],iResolution:[this.gl.canvas.width,this.gl.canvas.height],sparksEnabled:o.enabled,sparksGlow:o.glow,sparksGlowOffset:o.glowOffset,sparksStroke:o.stroke,sparksNumber:o.num,sparksLengthFactor:o.lengthFactor,sparksSizeFactor:o.sizeFactor,fov:o.fov,thresholdBlending:n.params.video.thresholdBlending,blendingThreshold:n.params.video.blendingThreshold,opacity:n.params.video.opacity,distanceFixed:n.distanceFixed}).draw(this.mesh),this.gl.disable(this.gl.BLEND),this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height)}setTime(o){this.copyVideo&&(this.video.currentTime=o)}initTexture(){const o=this.gl.createTexture();this.gl.bindTexture(this.gl.TEXTURE_2D,o);const a=0,d=this.gl.RGBA,u=1,g=1,E=0,A=this.gl.RGBA,L=this.gl.UNSIGNED_BYTE,B=new Uint8Array([0,0,255,255]);return this.gl.texImage2D(this.gl.TEXTURE_2D,a,d,u,g,E,A,L,B),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),o}updateTexture(){const a=this.gl.RGBA,d=this.gl.RGBA,u=this.gl.UNSIGNED_BYTE;this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture),this.gl.texImage2D(this.gl.TEXTURE_2D,0,a,d,u,this.video)}setupVideo(o){const a=document.createElement("video");let d=!1,u=!1;a.playsInline=!0,a.muted=!0,a.loop=!1,a.addEventListener("playing",()=>{d=!0,E()},!0),a.addEventListener("timeupdate",()=>{u=!0,E()},!0),a.src=o,a.play();const g=this,E=()=>{d&&u&&(g.copyVideo=!0,a.paused||$(this,Ee,Ye).call(this))};return a}}Ee=new WeakSet,Ye=function(){this.hasPausedFirstTime||(this.hasPausedFirstTime=!0,this.video.pause())};class be{constructor(o,{poolSize:a=new GL.Vector(2,2),waterResolution:d=new GL.Vector(256,256),thresholdBlending:u=!1,numSwimmers:g=1,dataFolder:E=null}){this.title=o,this.videos=[],this.poolSize=a,this.waterResolution=d,this.numSwimmers=g,this.thresholdBlending=u,this.dataFolder=E}addVideo(o){this.videos.push(o)}async parseData(o){for(let a=0;a<o.length;a++)await o[a].parseData(this.dataFolder+a+".csv")}}const ke=new p.Vector(0,-4,0);class pe{constructor(o,a){this.initCenter=new p.Vector(o.x,o.y,o.z),this.center=new p.Vector(o.x,o.y,o.z),this.oldCenter=new p.Vector(o.x,o.y,o.z),this.radius=a,this.cinematic=!1,this.velocity=new p.Vector(0,0,0),this.acceleration=new p.Vector(0,0,0),this.mass=4/3*Math.PI*Math.pow(a,3)*1e3,this.invMass=1/this.mass,this.radiusSquared=a*a,this.mesh=p.Mesh.sphere({detail:10}),this.followTarget=!1}update(o){if(this.moved||(this.oldCenter=new p.Vector(this.center.x,this.center.y,this.center.z)),this.moved=!1,this.cinematic){if(this.followTarget||(this.velocity=new p.Vector(0,0,0)),!this.targetPos||!this.followTarget)return;let a=o/this.targetTime;a=Math.min(Math.max(a,0),1),this.center=this.center.multiply(1-a).add(this.targetPos.multiply(a)),this.velocity=this.center.subtract(this.oldCenter).multiply(1/o),this.targetTime-=o,this.targetTime<0&&(this.targetPos=null)}else{const a=Math.max(0,Math.min(1,(this.radius-this.center.y)/(2*this.radius))),d=ke.multiply(-n.params.simulation.buoyancyFactor*this.mass*a),u=this.velocity.unit().multiply(-1e3*this.radiusSquared*a*this.velocity.dot(this.velocity));this.addForce(u),this.addForce(d),this.addForce(ke.multiply(this.mass)),this.velocity=this.velocity.add(this.acceleration.multiply(o)),this.acceleration=new p.Vector(0,0,0),this.center=this.center.add(this.velocity.multiply(o)),this.center.y<this.radius-n.params.simulation.poolSize.y&&(this.center.y=this.radius-1,this.velocity.y=Math.abs(this.velocity.y)*.7)}}setTarget(o,a){this.targetPos=o,this.targetTime=a}addForce(o){this.cinematic?console.warn("Trying to add force to a cinematic sphere."):this.acceleration=this.acceleration.add(o.multiply(this.invMass))}move(o){this.moved=!0,this.oldCenter=new p.Vector(this.center.x,this.center.y,this.center.z),this.center=new p.Vector(o.x,o.y,o.z),this.cinematic||console.warn("Moving a non cinematic sphere.")}}function ne(r,o=null){this.gl=r,this.visualizationWavesEnabled=!0,this.sqrt_2_PI=Math.sqrt(2*Math.PI);var a=`
    out vec2 coord;
    uniform vec2 invPoolSizeVertex;
    void main() {
      coord = gl_Vertex.xy * invPoolSizeVertex + 0.5;
      gl_Position = vec4(gl_Vertex.xy * 2. * invPoolSizeVertex, 0., 1.0);
    }
  `;this.reset(o),p.Texture.canUseFloatingPointTextures(),this.dropShader=new p.Shader(a,`
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
  `),this.updateShader=new p.Shader(a,`
    uniform sampler2D tex;
    uniform vec2 delta;
    uniform float prev_wr;
    uniform float damping;
    uniform float sqrt_2_PI;
    uniform vec3 poolSize;
    `+we+`
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
  `),this.normalShader=new p.Shader(a,`
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
  `),this.visualizationWavesShader=new p.Shader(a,`
    uniform sampler2D tex;
    uniform bool add;
    uniform vec3 poolSize;
    uniform bool showWR;
    uniform bool showDivingDistance;
    in vec2 coord;
    out vec4 fragColor;
    uniform float t;

    `+we+`

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
    `)}ne.prototype.resetTextures=function(){const r=this.gl;this.textureA&&r.deleteTexture(this.textureA.id),this.textureB&&r.deleteTexture(this.textureB.id),this.textureA=new p.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:o}),this.textureB=new p.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:o}),this.areaConservationTexture=new p.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:o}),this.showAreaConservedGrid=!1,this.showProjectionGrid=!1,this.invPoolSize=new p.Vector(1/n.params.simulation.poolSize.x,1/n.params.simulation.poolSize.y,1/n.params.simulation.poolSize.z);var o=p.Texture.canUseFloatingPointLinearFiltering()?this.gl.LINEAR:this.gl.NEAREST;(!this.textureA.canDrawTo()||!this.textureB.canDrawTo())&&p.Texture.canUseHalfFloatingPointTextures()&&(console.log("No draw"),o=p.Texture.canUseHalfFloatingPointLinearFiltering()?this.gl.LINEAR:this.gl.NEAREST,this.textureA=new p.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:o}),this.textureB=new p.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:o}))};ne.prototype.reset=function(r=null){this.WR_position=1e5,this.prev_WR_position=0,r!==null?(console.log("resolution.y : "+r.y),this.W=Math.round(r.x),this.H=Math.round(r.y),console.log("Using custom resolution:",this.W,this.H)):(this.W=256,this.H=256),N.reset(new p.Vector(this.W,this.H)),this.plane=p.Mesh.plane({detail:255,width:n.params.simulation.poolSize.x,height:n.params.simulation.poolSize.z}),this.delta=new p.Vector(1/this.W,1/this.H),this.resetTextures()};ne.prototype.addDrop=function(r,o,a,d){var u=this;this.textureB.drawTo(function(){u.textureA.bind(),u.dropShader.uniforms({invPoolSizeVertex:[u.invPoolSize.x,u.invPoolSize.z],center:[r,o],radius:a,strength:d,poolSize:[n.params.simulation.poolSize.x,n.params.simulation.poolSize.y,n.params.simulation.poolSize.z]}).draw(u.plane)}),this.textureB.swapWith(this.textureA)};ne.prototype.addOrRemoveVisualizationWaves=function(r){if(!(!this.visualizationWavesEnabled||!N.raceHasStarted)){var o=this;this.textureB.drawTo(function(){o.textureA.bind();const a=N.getAttributesTexture();a&&a.bind(1),o.visualizationWavesShader.uniforms({swimmersAttributesTexture:1,showDivingDistance:n.params.visualizations.showDivingDistance,showWR:n.params.visualizations.showWR,invPoolSizeVertex:[o.invPoolSize.x,o.invPoolSize.z],poolSize:[n.params.simulation.poolSize.x,n.params.simulation.poolSize.y,n.params.simulation.poolSize.z],wr:o.WR_position,sqrt_2_PI:o.sqrt_2_PI,add:r,swimmersNumber:n.swimmers.length,time:n.getRaceTime(),t:n.time,amplitudeFactor:n.params.quiver.amplitudeFactor,frequencyFactor:n.params.quiver.frequencyFactor,amplitude:n.params.quiver.amplitude,omega0:n.params.quiver.omega,waveLength0:n.params.quiver.waveLength}).draw(o.plane)}),this.textureB.swapWith(this.textureA)}};ne.prototype.updateSpheres=function(r){if(this.prev_WR_position=this.WR_position,this.WR_position=n.getRaceTime()*2.155,this.WR_position>n.params.simulation.poolSize.z&&(this.WR_position=2*n.params.simulation.poolSize.z-this.WR_position),n.params.simulation.optimized)N.attributes.draw(),this.textureB.drawTo(()=>{this.textureA.bind(),N.bindDisplacementTexture(1),N.bindOldDisplacementTexture(2),this.sphereShader.uniforms({oldDisplacementTexture:2,displacementTexture:1,invPoolSizeVertex:[this.invPoolSize.x,this.invPoolSize.z],poolSize:[n.params.simulation.poolSize.x,n.params.simulation.poolSize.y,n.params.simulation.poolSize.z],optimized:!0}).draw(this.plane),this.textureB.swapWith(this.textureA),N.attributes.draw()});else{const a=[];n.swimmers.forEach(d=>d.spheres.forEach(u=>a.push(u)));for(let d=0;d<a.length;d++){const u=a[d];this.moveSphere(u.oldCenter,u.center,u.radius)}}};ne.prototype.moveSphere=function(r,o,a){var d=this;this.textureB.drawTo(function(){d.textureA.bind(),d.sphereShader.uniforms({invPoolSizeVertex:[d.invPoolSize.x,d.invPoolSize.z],oldCenter:r,newCenter:o,radius:a,poolSize:[n.params.simulation.poolSize.x,n.params.simulation.poolSize.y,n.params.simulation.poolSize.z],optimized:!1}).draw(d.plane)}),this.textureB.swapWith(this.textureA)};ne.prototype.stepSimulation=function(){var r=this;this.textureB.drawTo(function(){r.textureA.bind();const o=N.getAttributesTexture();o&&o.bind(2),r.updateShader.uniforms({swimmersAttributesTexture:2,swimmersNumber:n.swimmers.length,invPoolSizeVertex:[r.invPoolSize.x,r.invPoolSize.z],delta:[r.delta.x,r.delta.y],time:n.time,wr:r.WR_position,prev_wr:r.prev_WR_position,poolSize:[n.params.simulation.poolSize.x,n.params.simulation.poolSize.y,n.params.simulation.poolSize.z],sqrt_2_PI:r.sqrt_2_PI,damping:n.params.simulation.waterDamping}).draw(r.plane)}),this.textureB.swapWith(this.textureA),this.updateAreaConservation()};ne.prototype.updateNormals=function(){var r=this;this.textureB.drawTo(function(){r.textureA.bind(),r.normalShader.uniforms({invPoolSizeVertex:[r.invPoolSize.x,r.invPoolSize.z],delta:[r.delta.x,r.delta.y]}).draw(r.plane)}),this.textureB.swapWith(this.textureA)};ne.prototype.updateAreaConservation=function(){if(!n.params.visualizations.areaConservationEnabled)return;var r,o,a;if(this.textureA.type===this.gl.FLOAT)r=this.gl.FLOAT,o=Float32Array,a="EXT_color_buffer_float";else if(this.textureA.type===this.gl.HALF_FLOAT_OES)r=this.gl.HALF_FLOAT_OES,o=Uint16Array,a="EXT_color_buffer_half_float";else{console.warn("Unsupported texture type for reading");return}if(!this.gl.getExtension(a)){console.warn(a+" not available; cannot read pixels");return}this.fb||(this.fb=this.gl.createFramebuffer()),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.fb),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,this.textureA.id,0);const d=this.gl.checkFramebufferStatus(this.gl.FRAMEBUFFER);if(d!==this.gl.FRAMEBUFFER_COMPLETE){console.error("Framebuffer incomplete: "+d+" for texture type "+this.textureA.type),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null);return}this.gl.pixelStorei(this.gl.PACK_ALIGNMENT,1);const u=new o(this.W*this.H*4),g=new Float32Array(this.W*this.H*4);this.gl.readPixels(0,0,this.W,this.H,this.gl.RGBA,r,u);for(let M=0;M<this.W;M++)g[M*4+1]=1;const E=n.params.simulation.poolSize.x/this.W,A=n.params.simulation.poolSize.z/this.H,L=E*E,B=A*A;if(this.textureA.type===this.gl.FLOAT){for(let M=0;M<this.H;M+=1)for(let T=0;T<this.W;T+=1){const X=(M*this.W+T)*4,V=((this.H-1-M)*this.W+T)*4,_=g[V],z=g[V+1];if(T+1<this.W){const P=u[X]-u[X+4],k=Math.sqrt(P*P+L);g[V+4]=_+k}if(M+1<this.H){const P=u[X]-u[X+this.W*4],k=Math.sqrt(P*P+B);g[V-4*this.W+1]=z+k}}this.gl.bindTexture(this.gl.TEXTURE_2D,this.areaConservationTexture.id),this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT,1),this.gl.texSubImage2D(this.gl.TEXTURE_2D,0,0,0,this.W,this.H,this.gl.RGBA,this.gl.FLOAT,g)}this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.bindTexture(this.gl.TEXTURE_2D,null)};function Oe(r){const o={};for(let a=0;a<r.length;a++)o[r[a]]=a;return o}const oe=new p.Vector(1e3,0,-1e3),Ue=["none","only medals","all"],Ve=["neighbours","per swimmer"],dt=["none","cycle frequency","speed","acceleration"],ht={none:{value:0,name:"PARAMETER_NONE"},"cycle frequency":{value:1,name:"PARAMETER_CYCLES"},speed:{value:2,name:"PARAMETER_SPEED"},acceleration:{value:3,name:"PARAMETER_ACCELERATION"}},mt=["realistic","height field","lambert","toon"],ut={realistic:{value:0,name:"RENDERING_REALISTIC"},"height field":{value:1,name:"RENDERING_HEIGHT_FIELD"},lambert:{value:2,name:"RENDERING_LAMBERT"},toon:{value:3,name:"RENDERING_TOON"}};var ie,je,Ke,Me,Ze;class ft{constructor(){xe(this,ie);this.params={numSteps:2,fov:45,visualizations:{enabled:!0,showFlags:!0,showWR:!1,showSpeed:!1,showDivingDistance:!0,showFinishTimes:!1,customWaterPerturbation:"none",waterColorParameter:"none",customParametersList:dt,customParametersDict:ht,PARAMETER_NONE:"none",PARAMETER_CYCLES:"cycle frequency",PARAMETER_SPEED:"speed",PARAMETER_ACCELERATION:"acceleration",showSwimmersLines:"none",swimmersLinesList:Ue,showSwimmersLinesDict:Oe(Ue),swimmersLinesMode:"neighbours",swimmersLinesModeList:Ve,swimmersLinesModeDict:Oe(Ve),medalsModeBeforeFinish:"none",medalsModesDict:{none:0,stars:1,bright:2,lanes:3},medalsModeAfterFinish:"none",areaConservationEnabled:!0,rendering:"realistic",renderingList:mt,renderingDict:ut,transitionBeginTime:null,shadow:{enabled:!0,shadowRadius:.5,shadowPower:.5,showCircle:!0,circleRadius:.6,circleStroke:.15},sparks:{enabled:!1,glow:5,glowOffset:.5,lengthFactor:1,stroke:.01,num:40,sizeFactor:50,fov:Math.PI/4}},swimmers:{showSpheres:!0,useTracking:!1},video:{thresholdBlending:!1,blendingThreshold:.41,show:!1,opacity:1},simulation:{optimized:!1,waterDamping:.02,poolSize:new p.Vector(4,1,4),buoyancyFactor:1.1},quiver:{amplitudeFactor:.78,frequencyFactor:1.2,amplitude:.1,omega:2,waveLength:1},cornerView:{show:!0}},this.resolution=new p.Vector(256,256),this.gl=p.create({preserveDrawingBuffer:!0}),this.gl.canvas.tabIndex=0,this.originalVisParams=JSON.parse(JSON.stringify(this.params.visualizations)),delete this.originalVisParams.shadow,delete this.originalVisParams.sparks,this.useConfigFile=!0,this.time=0,this.swimmers=[],this.translateX=0,this.translateY=0,this.zoomDistance=4,this.angleX=-25,this.angleY=-200.5,this.angleZ=0,this.water=null;const o=new be("—",{poolSize:new p.Vector(2,1,2),waterResolution:new p.Vector(256,256),numSwimmers:1}),a=new Te({});o.addVideo(new _e(this.gl,"",a));const d=new be("100m freestyle",{poolSize:new p.Vector(25,2,50),waterResolution:new p.Vector(1024,2048),numSwimmers:10,thresholdBlending:!0,dataFolder:"./assets/race-data/"}),u=new Te({tx:-.53,ty:1.25,zoom:47.86,ax:-29,ay:-260.5,az:-5,fov:39.98});d.addVideo(new _e(this.gl,"swimming-race.mp4",u,16.5)),this.currentVideo=d.videos[0];const g=new be("synchronized swimming",{poolSize:new p.Vector(25,2,30),waterResolution:new p.Vector(1024,2048),numSwimmers:2,dataFolder:"./assets/synchronized-swimming-data/"}),E=new Te({tx:-1.32,ty:.4,zoom:32.41,ax:-18,ay:-291.5,az:1,fov:42.8});g.addVideo(new _e(this.gl,"synchronized-swimming.mp4",E,17.5)),this.scenesList=[o,d,g],this.scenes={},this.scenesList.forEach(A=>this.scenes[A.title]=A),this.currentScene=o,this.paused=!1,this.configPlayButton(),this.transitions={},this.playingDemo=!1,this.renderWater=!0,this.renderCube=!0,this.spheresRadiusCoeff=1,this.distanceFixed=0,this.drawingFrameBuffer=this.gl.createFramebuffer(),this.drawingTexture=this.gl.createTexture(),this.resetDrawingTexture(),this.cornerView=!1}resetDrawingTexture(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.drawingFrameBuffer),this.gl.bindTexture(this.gl.TEXTURE_2D,this.drawingTexture);const o=this.gl.canvas.width,a=this.gl.canvas.height;this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,o,a,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,null),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,this.drawingTexture,0);const d=this.gl.createRenderbuffer();this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,d),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,this.gl.DEPTH_COMPONENT16,o,a),this.gl.framebufferRenderbuffer(this.gl.FRAMEBUFFER,this.gl.DEPTH_ATTACHMENT,this.gl.RENDERBUFFER,d),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null)}configStopButton(){this.stopButton=document.getElementById("stop-button"),this.stopButton.addEventListener("click",()=>{this.stopRace()})}configPlayButton(){this.configStopButton(),this.playButton=document.getElementById("play-button"),this.playButton.addEventListener("click",()=>{this.playButton.textContent=="pause"?this.pause():(N.raceHasStarted||this.startRace(),this.play())})}setCalibration(o){this.translateX=o.tx,this.translateY=o.ty,this.zoomDistance=o.zoom,this.angleX=o.ax,this.angleY=o.ay,this.angleZ=o.az,this.params.fov=o.fov,this.gl.matrixMode(this.gl.PROJECTION),this.gl.loadIdentity(),this.gl.perspective(this.params.fov,this.gl.canvas.width/this.gl.canvas.height,.01,100),this.gl.matrixMode(this.gl.MODELVIEW)}async setScene(o){if(console.log("SET SCENE : "+o),this.currentScene=this.scenes[o],this.currentScene){const a=document.getElementById("time-slider-container");this.params.video.show=!!this.currentVideo.video,this.params.swimmers.showSpheres=!this.currentVideo.video,a.hidden=!this.currentVideo.video,this.currentScene.title!="—"?this.params.simulation.waterDamping=.1:this.params.simulation.waterDamping=.02;const d=this.currentScene.numSwimmers;if(console.log("num swimmers : "+d),this.swimmers.length!=d){for(let u=this.swimmers.length;u<d;u++){const g=new N(new p.Vector(0,0,0));this.swimmers.push(g)}for(let u=this.swimmers.length;u>d;u--)this.swimmers=this.swimmers.slice(1);this.swimmers.forEach(u=>u.waterDamping=this.params.simulation.waterDamping)}this.params.swimmers.useTracking=!0,await this.currentScene.parseData(this.swimmers),this.swimmers.forEach(u=>u.update(0)),console.log("scene name : "+this.currentScene.title),this.currentVideo=this.currentScene.videos[0],this.setCalibration(this.currentVideo.calibration),$(this,ie,je).call(this,this.currentScene.poolSize),this.resolution=this.currentScene.waterResolution,this.params.video.thresholdBlending=this.currentScene.thresholdBlending,this.currentScene.thresholdBlending?this.params.video.opacity=1:this.params.video.opacity=.5,this.params.visualizations.areaConservationEnabled=!1,this.stopRace(),this._reset(),this.params.simulation.optimized=!!this.currentVideo.video}}useGravity(o){N.useGravity=o;for(let a of n.swimmers)a.body.cinematic=!N.useGravity}isOneVisualizationEnabled(){return this.params.visualizations.showFlags||this.params.visualizations.medalsModeBeforeFinish!="none"||this.params.visualizations.medalsModeAfterFinish!="none"||this.params.visualizations.showWR||this.params.visualizations.showSpeed||this.params.visualizations.showDivingDistance}updateTime(o){this.time+=o,this._updateDistanceMarker&&this._updateDistanceMarker()}getRaceTime(){return N.raceHasStarted?this.time-this.currentVideo.videoStartTime:0}resetParams(){Object.entries(this.originalVisParams).forEach(o=>{const a=o[0],d=o[1];this.params.visualizations[a]=d}),this.params.visualizations.areaConservationEnabled=!1}updateEventIndex(){for(this.currentEventIndex=0;this.events[this.currentEventIndex]&&this.events[this.currentEventIndex].time<this.getRaceTime();)this.currentEventIndex++;this.currentEventIndex>0&&this.currentEventIndex--}setRaceTime(o){this.time=this.currentVideo.videoStartTime+o,this.currentVideo.video&&this.currentVideo.setTime(this.time),this.events&&(this.updateEventIndex(),this.resetParams())}showTexts(o){document.getElementById("h").hidden=!o,o?this.showCommands&&(document.getElementById("commands").hidden=!1):(this.showCommands=!document.getElementById("commands").hidden,document.getElementById("commands").hidden=!0)}startRace(){console.log("START RACE"),this.setRaceTime(-3),this.currentVideo.video&&this.currentVideo.video.play(),this.swimmers.forEach(o=>o.startRace()),N.raceHasStarted=!0,N.useGravity=!0,this.water.resetTextures(),this.water.WR_position=0,this.stopButton.hidden=!1,this._clearChronoTexture(this.gl.canvas.width,this.gl.canvas.height,this.gl),this.showTexts(!1)}stopRace(){this.paused&&this.play(),this.setRaceTime(0),this.currentVideo.video&&this.currentVideo.video.pause(),this.swimmers.forEach(o=>o.swim(!1)),N.raceHasStarted=!1,this.water.resetTextures(),this.playButton.textContent="play",this.stopButton.hidden=!0,this.showTexts(!0)}pause(){this.paused=!0,this.pauseVideo(),this.playButton.textContent="play"}play(){this.paused=!1,N.raceHasStarted&&(this.playVideo(),this.playButton.textContent="pause")}pauseVideo(){this.currentVideo.video&&this.currentVideo.video.pause()}playVideo(){this.currentVideo.video&&(this.currentVideo.video.play(),this.currentVideo.video.currentTime=this.time)}renderVideo(){this.currentVideo.video&&this.currentVideo.render()}parseConfigFile(o){fetch(o).then(a=>a.text()).then(a=>{this.events=JSON.parse(a),this.currentEventIndex=0,this._renderTimeline&&this._renderTimeline()})}updateTransitions(){Object.entries(this.transitions).forEach(o=>{const a=o[0],d=o[1],u=this.getRaceTime()-d.beginTime;if(u>d.duration){delete this.transitions[a];return}d.show?d.opacity=u/d.duration:d.opacity=1-u/d.duration})}updateParams(){if(!N.raceHasStarted||!this.events||!this.useConfigFile)return;const o=this.events[this.currentEventIndex];if(!o)return;let a=o.rankSwimmerToggle;if(a||(a=1),o.distance&&this.swimmers[a-1].getDistanceTraveled()>=o.distance||o.time!==void 0&&this.getRaceTime()>=o.time){this.currentEventIndex++;const d=o.transition&&o.transition.type=="dissolve";Object.entries(o.params).forEach(u=>{const g=u[0],E=u[1];g!=="transition"&&(d&&(E===!0||E===!1)&&(this.transitions[g]={opacity:1-1*E,show:E,beginTime:this.getRaceTime(),duration:o.transition.duration}),this.params.visualizations[g]=E)})}}chronoPhotography(){console.log("shoot"),this.distanceFixed=this.swimmers[0].getDistanceTraveled(),console.log("distance fixed : "+this.distanceFixed),this._fixTexture()}async launchDemo(){console.log("Launch demo"),await this.setScene("100m freestyle"),this.params.video.show=!1,this.params.swimmers.showSpheres=!0,this.demoTime=0,this.swimmers.forEach(o=>o.body.move(oe)),this.swimmersShown=0,this.playingDemo=!0,this.useGravity(!0),this.params.simulation.buoyancyFactor=1.5,this.params.visualizations.shadow.enabled=!1,this.renderWater=!1,this.translateX=200,this.parseConfigFile("./assets/vis-config-demo-2.json"),this._gui.hide(),document.getElementById("event-editor").hidden=!0,document.getElementById("time-slider-container").hidden=!0,document.getElementById("h").hidden=!0}stopDemo(){this.playingDemo=!1,this.setScene("—"),document.getElementById("event-editor").hidden=!1,document.getElementById("time-slider-container").hidden=!1,document.getElementById("h").hidden=!1,this.renderWater=!0,this.renderCube=!0,this.params.visualizations.shadow.enabled=!0,this._gui.show(),this.params.simulation.buoyancyFactor=1.1}updateDemo(o){if(!this.playingDemo)return;const a=this.demoTime;this.demoTime+=o;const d=2,u=1;if(a<=u){const T=$(this,ie,Me).call(this,0,u,a);this.translateX=T*this.currentVideo.calibration.tx+(1-T)*200}else this.demoShowVideoTime||(this.angleY+=.4);!this.renderCube&&a>.5&&(this.renderCube=!0);const g=1.5;if(!this.renderWater&&a>1.5&&(this.renderWater=!0),a>g&&a<g+.5)for(var E=0;E<10;E++)this.water.addDrop(Math.random()*2-1,Math.random()*2-1,.06,E&1?.6:-.6);$(this,ie,Ke).call(this,a,d);const A=3,L=5;!N.raceHasStarted&&a>=A&&a<L&&this.swimmers.forEach(T=>{const X=new p.Vector(T.body.center.x,0,0),V=new p.Vector(T.body.center.x,1,-this.params.simulation.poolSize.z/2);T.body.move($(this,ie,Ze).call(this,X,V,A,L,a))}),!N.raceHasStarted&&a>=L&&(this.params.simulation.buoyancyFactor=1.1,this.startRace()),!this.demoShowVideoTime&&this.angleY>=this.currentVideo.calibration.ay+360&&(this.demoShowVideoTime=this.demoTime+1),!this.params.video.show&&this.demoShowVideoTime&&a>=this.demoShowVideoTime&&(this.params.video.show=!0,this.params.video.opacity=0);const B=2;this.params.video.show&&a<=this.demoShowVideoTime+B&&(this.params.video.opacity=(a-this.demoShowVideoTime)/B,console.log("opacity : "+this.params.video.opacity));const M=2;this.params.video.show&&a>this.demoShowVideoTime+B&&a<this.demoShowVideoTime+B+M&&(this.spheresRadiusCoeff=1-(a-(this.demoShowVideoTime+B))/M)}}ie=new WeakSet,je=function(o){console.log("SET POOL SIZE : "+o.z),this.params.simulation.poolSize.x=o.x,this.params.simulation.poolSize.y=o.y,this.params.simulation.poolSize.z=o.z},Ke=function(o,a){const u=Math.floor((o-a)/.1);if(this.swimmersShown<10&&u>=this.swimmersShown){console.log("swimmers shown : "+this.swimmersShown),console.log("next index swimmer : "+u),console.log("num swimmers : "+this.swimmers.length);const g=this.params.simulation.poolSize.x,A=-g/2+g/20+u*g/10;this.swimmers[u].body.move(new p.Vector(A,.5,0)),this.swimmersShown++}},Me=function(o,a,d){if(d<o)return 0;if(d>a)return 1;const u=(d-o)/(a-o);return 1-(Math.cos(u*Math.PI)+1)/2},Ze=function(o,a,d,u,g){const E=$(this,ie,Me).call(this,d,u,g);console.log("t norm : "+E);const A=(L,B,M,T=1)=>Math.pow(M,T)*B+(1-Math.pow(M,T))*L;return new p.Vector(A(o.x,a.x,E),A(o.y,a.y,E,20),A(o.z,a.z,E,2))};const n=new ft;n.parseConfigFile("./assets/vis-config.json");const pt=`#version 300 es
    const float ARM_DELTA_X = float(`+Fe+`);
    const float FOOT_DELTA_X = float( `+Pe+`);
    const float FOOT_DELTA_Z = float( `+De+`);
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

`,gt=`#version 300 es
    precision highp float;
    in float fragCyclePhase;
    in float fragAltitude;
    const float PI = 3.141592;
    out vec4 fragColor;
    void main() {
        fragColor = vec4(fragAltitude, fragCyclePhase / (2. * PI), 1., 1.);
    }
`,vt=`#version 300 es
    in vec2 iVertex;
    out vec2 fragCoord;
    void main() {
        fragCoord = iVertex * .5 + .5;
        gl_Position = vec4(iVertex.xy, 0., 1.);
    }
`,xt=`#version 300 es
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
`,wt=new Float32Array([-1,-1,1,-1,1,1,-1,1]),yt=new Uint16Array([0,1,2,2,3,0]);var Q,$e,fe,Je;class Et{constructor(){xe(this,Q);this.numVecAttributes=Xe,this.maxNumSwimmer=He,this.gl=n.gl;const o=this.gl.NEAREST;this.texture=new p.Texture(this.numVecAttributes,this.maxNumSwimmer,{type:this.gl.FLOAT,filter:o}),this.initPrograms(),this.indexBuffer=this.gl.createBuffer(),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.indexBuffer),this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER,yt,this.gl.STATIC_DRAW),this.vboPlane=this.gl.createBuffer(),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vboPlane),this.gl.bufferData(this.gl.ARRAY_BUFFER,wt,this.gl.STATIC_DRAW),this.vboPoints=this.gl.createBuffer()}update(){this.numSwimmers=n.swimmers.length;const o=5;this.swimmersAttributes=new Float32Array(this.numVecAttributes*4*this.maxNumSwimmer*o);const a=$(this,Q,$e).call(this,n.swimmers);for(let d=0;d<n.swimmers.length;d++){const u=a[d];$(this,Q,Je).call(this,d,u),$(this,Q,fe).call(this,n.swimmers.length+d,u.leftArm),$(this,Q,fe).call(this,2*n.swimmers.length+d,u.rightArm),$(this,Q,fe).call(this,3*n.swimmers.length+d,u.leftFoot),$(this,Q,fe).call(this,4*n.swimmers.length+d,u.rightFoot)}this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture.id),this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,!1),this.gl.texSubImage2D(this.gl.TEXTURE_2D,0,0,0,this.numVecAttributes,this.maxNumSwimmer,this.gl.RGBA,this.gl.FLOAT,this.swimmersAttributes),this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,!0),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vboPoints),this.gl.bufferData(this.gl.ARRAY_BUFFER,this.swimmersAttributes,this.gl.DYNAMIC_DRAW)}buildShader(o,a){const d=this.gl.createShader(a);return this.gl.shaderSource(d,o),this.gl.compileShader(d),d}createProgram(o){const a=this.gl.createProgram();return o.forEach(d=>{this.gl.attachShader(a,d)}),this.gl.linkProgram(a),a}checkShaders(o,a,d){this.gl.getShaderParameter(o,this.gl.COMPILE_STATUS)||console.error(this.gl.getShaderInfoLog(o)),this.gl.getShaderParameter(a,this.gl.COMPILE_STATUS)||console.error(this.gl.getShaderInfoLog(a)),this.gl.getProgramParameter(d,this.gl.LINK_STATUS)||console.error(this.gl.getProgramInfoLog(d))}createRenderingTexture(o,a){this.pointsTexture=new p.Texture(o,a,{type:this.gl.FLOAT,filter:this.gl.NEAREST}),this.pointsFrameBuffer=this.gl.createFramebuffer(),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.pointsFrameBuffer);const d=this.gl.COLOR_ATTACHMENT0;this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,d,this.gl.TEXTURE_2D,this.pointsTexture.id,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.horizontalPassTexture=new p.Texture(o,a,{type:this.gl.FLOAT,filter:this.gl.LINEAR}),this.horizontalPassFrameBuffer=this.gl.createFramebuffer(),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.horizontalPassFrameBuffer),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,d,this.gl.TEXTURE_2D,this.horizontalPassTexture.id,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null);const u=a/4,g=u,E=u;this.displacementTexture=new p.Texture(g,E,{type:this.gl.FLOAT,filter:this.gl.LINEAR}),this.displacementFrameBuffer=this.gl.createFramebuffer(),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.displacementFrameBuffer),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,d,this.gl.TEXTURE_2D,this.displacementTexture.id,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.oldDisplacementTexture=new p.Texture(g,E,{type:this.gl.FLOAT,filter:this.gl.LINEAR})}buildProgram(o,a){const d=this.buildShader(o,this.gl.VERTEX_SHADER),u=this.buildShader(a,this.gl.FRAGMENT_SHADER),g=this.createProgram([d,u]);return this.checkShaders(d,u,g),g}initPrograms(){this.programPoints=this.buildProgram(pt,gt),this.programVolume=this.buildProgram(vt,xt),this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height)}volumePass(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.horizontalPassFrameBuffer),this.gl.useProgram(this.programVolume);const o=this.gl.getAttribLocation(this.programVolume,"iVertex"),a=this.gl.getUniformLocation(this.programVolume,"poolSize");this.gl.uniform2f(a,n.params.simulation.poolSize.x,n.params.simulation.poolSize.z);const d=this.gl.getUniformLocation(this.programVolume,"horizontal");this.gl.uniform1i(d,!0);const u=this.gl.getUniformLocation(this.programVolume,"show");this.gl.uniform1i(u,!1);const g=this.gl.getUniformLocation(this.programVolume,"swapColor");this.gl.uniform1i(g,!1);const E=2,A=this.gl.FLOAT,L=!1,B=0,M=0;this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vboPlane),this.gl.vertexAttribPointer(o,E,A,L,B,M),this.gl.enableVertexAttribArray(o),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.indexBuffer),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.pointsTexture.id),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this.gl.drawElements(this.gl.TRIANGLES,6,this.gl.UNSIGNED_SHORT,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.displacementFrameBuffer),this.gl.uniform1i(d,!1),this.gl.uniform1i(u,!1),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.horizontalPassTexture.id),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this.gl.viewport(0,0,this.displacementTexture.width,this.displacementTexture.height),this.gl.drawElements(this.gl.TRIANGLES,6,this.gl.UNSIGNED_SHORT,0),this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height)}pointPass(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.pointsFrameBuffer),this.gl.useProgram(this.programPoints);const o=this.gl.getAttribLocation(this.programPoints,"iData1"),a=this.gl.getAttribLocation(this.programPoints,"iData2"),d=this.gl.getAttribLocation(this.programPoints,"iData3"),u=this.gl.getUniformLocation(this.programPoints,"invPoolSize");this.gl.uniform2f(u,1/n.params.simulation.poolSize.x,1/n.params.simulation.poolSize.z);const g=4,E=this.gl.FLOAT,A=!1,L=4,B=12*L;let M=0;this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vboPoints),o>=0&&(this.gl.vertexAttribPointer(o,g,E,A,B,M),this.gl.enableVertexAttribArray(o)),M=4*L,a>=0&&(this.gl.vertexAttribPointer(a,g,E,A,B,M),this.gl.enableVertexAttribArray(a)),M=2*4*L,d>=0&&(this.gl.vertexAttribPointer(d,g,E,A,B,M),this.gl.enableVertexAttribArray(d)),this.gl.viewport(0,0,this.pointsTexture.width,this.pointsTexture.height),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this.gl.drawArrays(this.gl.POINTS,0,5*this.numSwimmers)}updateOldDisplacementTexture(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.displacementFrameBuffer),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.oldDisplacementTexture.id),this.gl.copyTexSubImage2D(this.gl.TEXTURE_2D,0,0,0,0,0,this.oldDisplacementTexture.width,this.oldDisplacementTexture.height)}draw(){this.updateOldDisplacementTexture(),this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this.pointPass(),this.volumePass(),this.gl.disable(this.gl.BLEND)}}Q=new WeakSet,$e=function(o){const a=function(g,E){return E.getDistanceTraveled()-g.getDistanceTraveled()};let d=0;o.forEach(g=>{g.hasFinished()>.1&&d++});const u=o.slice(0,d).concat(o.slice(d).sort(a));for(let g=0;g<o.length;g++)o[g]=u[g];return o},fe=function(o,a){this.swimmersAttributes[this.numVecAttributes*4*o]=a.center.x,this.swimmersAttributes[this.numVecAttributes*4*o+1]=a.center.z,this.swimmersAttributes[this.numVecAttributes*4*o+7]=a.center.y},Je=function(o,a){$(this,Q,fe).call(this,o,a.body),this.swimmersAttributes[this.numVecAttributes*4*o+2]=a.divingDistance,this.swimmersAttributes[this.numVecAttributes*4*o+3]=a.divingTime,this.swimmersAttributes[this.numVecAttributes*4*o+4]=a.reactionTime,this.swimmersAttributes[this.numVecAttributes*4*o+5]=a.body.velocity.z*3.6,this.swimmersAttributes[this.numVecAttributes*4*o+6]=a.nationality,this.swimmersAttributes[this.numVecAttributes*4*o+8]=a.breakoutDistance,this.swimmersAttributes[this.numVecAttributes*4*o+9]=a.breakoutTime,this.swimmersAttributes[this.numVecAttributes*4*o+10]=a.finishTime,this.swimmersAttributes[this.numVecAttributes*4*o+11]=a.waterDamping};function Se(r=0,o=1){const a=1-Math.random(),d=Math.random();return Math.sqrt(-2*Math.log(a))*Math.cos(2*Math.PI*d)*o+r}const Tt=.5,_t=2,de="Temps (s)",ge="event",Re="eventX",bt="frequence (cylce/min)",q=class q{constructor(o){this.startingPoint=new p.Vector(o.x,o.y,o.z),this.center=new p.Vector(o.x,o.y,o.z),this.force=new p.Vector(0,0,190+Se(0,20)),this.reactionTime=Math.max(.1,Se(.15,.02));const a=.25,d=.15;this.body=new pe(o,a),this.leftArm=new pe(oe,d),this.rightArm=new pe(oe,d),this.leftFoot=new pe(oe,d),this.rightFoot=new pe(oe,d),this.body.cinematic=!q.useGravity,this.leftArm.cinematic=!0,this.rightArm.cinematic=!0,this.leftFoot.cinematic=!0,this.rightFoot.cinematic=!0,this.spheres=[this.body,this.leftArm,this.rightArm,this.leftFoot,this.rightFoot],this.divingDistance=0,this.divingTime=1e3,this.breakoutDistance=0,this.breakoutTime=1e3,this.nationality=Math.random()>.5?0:1,this.currendDataIndex=0,this.useTracking=!1,this.armPulsation=2*Math.PI*_t,this.cycleTime=0,this.cyclePhase=0,this.finishTime=0,this.waterDamping=n.params.simulation.waterDamping}async parseData(o){await fetch(o).then(a=>{const d=a.headers.get("content-type");return!d||!d.includes("text/csv")?(console.log("no file found : "+o),null):a.text()}).then(a=>{if(!a)return;const d=a.split(`
`),u=d[0].split(/,|;/);this.data=d.slice(1).map(g=>{const E=g.split(/,|;/);return Object.fromEntries(u.map((A,L)=>[A,E[L]]))}),n.params.swimmers.useTracking&&(this.armPulsation=0)})}getDistanceTraveled(){const o=this.body.velocity.z,a=n.params.simulation.poolSize.z,d=this.body.center.z+a/2;return o>=0?d:2*a-d}startRace(){this.hasBrokeOut=!1,this.hasDove=!1,this.hasReacted=!1}jump(o=4.5){this.body.cinematic=!1,this.body.velocity=new p.Vector(0,0,o+Se(0,1)),this.body.center=new p.Vector(this.startingPoint.x,1,-n.params.simulation.poolSize.z/2)}swim(o){this.hasReacted=o,this.isSwimming=o,this.finishTime=0,o||(this.body.followTarget=!1),o?(this.body.cinematic=!1,this.useGravity=!0,this.body.center=new p.Vector(this.startingPoint.x,0,-n.params.simulation.poolSize.z/2)):(this.body.velocity=new p.Vector(0,0,0),this.body.center=new p.Vector(this.startingPoint.x,0,0))}hasFinished(){return this.finishTime>.1}getArmOffset(o,a){a+=this.cyclePhase;const d=this.body.velocity.z>=0?this.armPulsation:-this.armPulsation;return new p.Vector(0,Math.cos(d*o+a),Math.sin(d*o+a)).multiply(Tt)}setCurrentDataIndex(){if(this.currendDataIndex=0,!!this.data){for(;this.data[this.currendDataIndex]&&this.data[this.currendDataIndex][de]<n.getRaceTime();)this.currendDataIndex++;if(this.currendDataIndex+1<this.data.length){if(this.currendDataIndex-1>=0){const o=parseFloat(this.data[this.currendDataIndex][Re]);let a=o;const d=n.params.simulation.poolSize.z;o>d&&(a=2*d-a),a-=d/2;const u=this.body.center;this.body.move(new p.Vector(u.x,u.y,a));const g=Math.sign(50-o)*.1;this.body.velocity=new p.Vector(0,0,g),console.log("vz : "+g)}this.body.setTarget(null),this.body.followTarget=!0,this.finishTime=0}}}findNextCycle(){let o=this.currendDataIndex+1;if(!this.data)return null;for(;this.data[o]&&this.data[o][ge]!="cycle";)o++;return this.data[o]?parseFloat(this.data[o][de]):null}setDamping(o){if(n.params.visualizations.customWaterPerturbation==n.params.visualizations.PARAMETER_CYCLES){const a=parseFloat(o[bt]);if(a>0){console.log("FREQ : "+a);const d=80,u=35;let g=(a-u)/(d-u);g=Math.max(Math.min(g,1),0);const E=.03,A=.22;this.waterDamping=E+(A-E)*(1-g)}}else this.waterDamping=n.params.simulation.waterDamping}handleTracking(o){if(this.hasReacted&&this.useTracking&&this.currendDataIndex<this.data.length&&this.data[this.currendDataIndex][de]<o){console.log("enter handle tracking"),this.setDamping(this.data[this.currendDataIndex]);let a=null,d=o;const u=this.data[this.currendDataIndex+1];this.currendDataIndex+1<this.data.length&&(a=parseFloat(u[Re]),d=parseFloat(u[de]));const g=n.params.simulation.poolSize.z;let E=-this.body.radius/2;const A=this.data[this.currendDataIndex][ge];if(A=="enter"||A=="turn"&&u[ge]!="under"){d=(o+d)/2,a=(this.body.center.z+g/2+a)/2;const B={[de]:d,[Re]:a,[ge]:"under"};this.data.splice(this.currendDataIndex+1,0,B),E=-1.5}u&&u[ge]=="under"&&(E=-1.5),a>g&&(a=2*g-a),a-=n.params.simulation.poolSize.z/2;const L=new p.Vector(this.startingPoint.x,E,a);if(this.currendDataIndex+1<this.data.length?this.body.setTarget(L,d-o):this.body.setTarget(null),A=="cycle"){const B=parseFloat(this.data[this.currendDataIndex][de]),M=this.findNextCycle();if(M){const X=1/(M-B);this.armPulsation=2*Math.PI*X,this.cycleTime=0,this.cyclePhase==0?this.cyclePhase=Math.PI:this.cyclePhase=0}}else A=="finish"&&(this.finishTime=this.data[this.currendDataIndex][de],this.body.followTarget=!1,this.isSwimming=!1);this.currendDataIndex++}}moveSpheresAway(){this.rightArm.move(oe),this.leftArm.move(oe),this.rightFoot.move(oe),this.leftFoot.move(oe)}moveSpheres(o){this.cycleTime+=o;const a=this.getArmOffset(.5*this.cycleTime,0),d=this.getArmOffset(.5*this.cycleTime,Math.PI),u=this.getArmOffset(.5*this.cycleTime*2,0),g=this.getArmOffset(.5*this.cycleTime*2,Math.PI);this.rightArm.move(this.body.center.add(a).add(new p.Vector(Fe,0,0))),this.leftArm.move(this.body.center.add(d).add(new p.Vector(-Fe,0,0)));const E=this.body.velocity.z>=0?-De:De;this.rightFoot.move(this.body.center.add(new p.Vector(Pe,u.y*.5,E))),this.leftFoot.move(this.body.center.add(new p.Vector(-Pe,g.y*.5,E)))}update(o){const a=n.getRaceTime();!q.raceHasStarted&&this.data&&(this.useTracking=n.params.swimmers.useTracking),!this.hasReacted&&q.raceHasStarted&&(this.useTracking||a>this.reactionTime&&!n.params.swimmers.useTracking?(this.swim(!0),this.waterDamping=n.params.simulation.waterDamping,this.jump(),this.useTracking&&(this.body.cinematic=!0,this.body.followTarget=!0,this.body.setTarget(null))):(this.swim(!1),this.body.cinematic=!0,n.playingDemo?this.body.move(new p.Vector(this.body.center.x,1,-n.params.simulation.poolSize.z/2)):this.body.move(oe)),this.currendDataIndex=0),this.moveSpheresAway(),this.isSwimming&&(this.useTracking||this.body.addForce(this.force),this.body.center.y>-this.body.radius&&this.moveSpheres(o)),this.handleTracking(a);for(let u of this.spheres)u.update(o);q.raceHasStarted&&!this.hasDove&&this.body.center.y<0&&this.body.oldCenter.y>=0&&(this.divingDistance=this.body.center.z+n.params.simulation.poolSize.z/2,this.divingTime=a,this.hasDove=!0);const d=this.body.radius;q.raceHasStarted&&!this.hasBrokeOut&&this.body.center.y>-d&&this.body.oldCenter.y<=-d&&(this.breakoutDistance=this.body.center.z+n.params.simulation.poolSize.z/2,this.breakoutTime=a,this.hasBrokeOut=!0)}};te(q,"useGravity",!1),te(q,"raceHasStarted",!1),te(q,"swimming",!1),te(q,"attributes"),te(q,"initAttributes",()=>{q.attributes=new Et}),te(q,"updateAttributesTexture",()=>{q.attributes.update()}),te(q,"getAttributesTexture",()=>q.attributes.texture),te(q,"bindDisplacementTexture",o=>{q.attributes.displacementTexture.bind(o)}),te(q,"bindOldDisplacementTexture",o=>{q.attributes.oldDisplacementTexture.bind(o)}),te(q,"reset",o=>{q.attributes.createRenderingTexture(o.x,o.y)});let N=q;const St=`
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
`;function ce(r,o,a,d){this.water=o,this.gl=r,this.tileTexture=p.Texture.fromImage(document.getElementById("tiles"),{minFilter:this.gl.LINEAR_MIPMAP_LINEAR,wrap:this.gl.REPEAT,format:this.gl.RGB}),this.franceTexture=p.Texture.fromImage(document.getElementById("france"),{minFilter:this.gl.LINEAR_MIPMAP_LINEAR,wrap:this.gl.REPEAT,format:this.gl.RGBA}),this.chinaTexture=p.Texture.fromImage(document.getElementById("china"),{minFilter:this.gl.LINEAR_MIPMAP_LINEAR,wrap:this.gl.REPEAT,format:this.gl.RGBA}),this.lettersTexture=p.Texture.fromImage(document.getElementById("letters"),{minFilter:this.gl.LINEAR,magFilter:this.gl.LINEAR,wrap:this.gl.REPEAT,format:this.gl.RGBA}),this.flagSize=d,this.flagSize=[1.5,1],this.flagCenter=a,this.lightDir=new p.Vector(2,2,-1).unit(),this.causticTex=new p.Texture(1024,1024),this.waterShaders=[];let u="";Object.entries(n.params.visualizations.customParametersDict).forEach(A=>{const L=A[1].name,B=A[1].value;u+="#define "+L+" "+B+`
`}),Object.entries(n.params.visualizations.renderingDict).forEach(A=>{const L=A[1].name,B=A[1].value;u+="#define "+L+" "+B+`
`});for(var g=0;g<2;g++)this.waterShaders[g]=new p.Shader(`
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

      uniform float rendering;

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

      uniform float seed;

      uniform float waterColorParameter;

      `+u+`
      
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
      #define BLUE    vec3(.2,.8, 1)
      #define RAINBOW abs(cos(uv.x + vec3(5,6,1)))

      #define GOLD    vec3(1., 1., 0.)
      #define SILVER  vec3(.8, .8, .8)
      #define BRONZE  vec3(.75, .54, .44)

      const vec3[] colorRankDict = vec3[](GOLD, SILVER, BRONZE); 
      
      
      `+we+St+`
      makeStrF(printSpeed) _num_ __ _k _m _DIV _h _endNum
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
        if (abs(position.y + poolSize.z / 2. - wr) < .05) color = vec3(1., 1., 0.); 
      }

      void drawDivingRipples(in vec2 coord, inout vec3 color) {
        vec3 divingWave = getDivingWaves(coord);
        bool toDraw = divingWave.z > 0.;
        float blending = divingWave.y;
        if (toDraw) {
          color = (1. - blending) * color + blending * vec3(0., 1., 0.);
        }
      
      }

      void distort(inout vec2 pos, vec2 swimmerPos, in float intensity) {
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
        float reshowTime = 4.;
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
        color += max(0.,1.-abs((shadowCircleRadius - distSq)/shadowCircleStroke)) * vec3(1., 1., 0.) * altitudeAttenuation;
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


      vec3 getSurfaceRayColor(vec3 origin, vec3 ray, vec3 waterColor, vec3 normal) {
        vec3 color;
        if (int(rendering) == RENDERING_REALISTIC) color = realisticRendering(origin, ray, waterColor);
        else if (int(rendering) == RENDERING_HEIGHT_FIELD) color = heightFieldRendering(origin.y);
        else if (int(rendering) == RENDERING_LAMBERT) color = lambertRendering(normal);
        else if (int(rendering) == RENDERING_TOON) color = toonRendering(normal, ray);
        
        if (bool(showFlags) || showWR || int(medalsModeAfterFinish) != MEDALS_NONE || int(medalsModeBeforeFinish) != MEDALS_NONE || showSpeed || showDivingDistance) drawVisualizations(origin.xz, color);
          
          
        
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
        
        `+(g?`
          normal = -normal;
          vec3 reflectedRay = reflect(incomingRay, normal);
          vec3 refractedRay = refract(incomingRay, normal, IOR_WATER / IOR_AIR);
          float fresnel = mix(0.5, 1.0, pow(1.0 - dot(normal, -incomingRay), 3.0));
          
          vec3 reflectedColor = getSurfaceRayColor(position, reflectedRay, underwaterColor, normal);
          vec3 refractedColor = getSurfaceRayColor(position, refractedRay, vec3(1.0), normal) * vec3(0.8, 1.0, 1.1);
          
          fragColor = vec4(mix(reflectedColor, refractedColor, (1.0 - fresnel) * length(refractedRay)), 1.0);
        `:`
          vec3 reflectedRay = reflect(incomingRay, normal);
          vec3 refractedRay = refract(incomingRay, normal, IOR_AIR / IOR_WATER);
          float fresnel = mix(0.25, 1.0, pow(1.0 - dot(normal, -incomingRay), 3.0));
          
          vec3 reflectedColor = getSurfaceRayColor(position, reflectedRay, abovewaterColor, normal);
          vec3 refractedColor = getSurfaceRayColor(position, refractedRay, abovewaterColor, normal);
          
          fragColor = vec4(mix(refractedColor, reflectedColor, fresnel), 1.0);
        `)+`
      }
    `);this.sphereMesh=p.Mesh.sphere({detail:10}),this.sphereShader=new p.Shader(he+`
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
  `),this.reset(),this.cubeShader=new p.Shader(he+`
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
    if (renderWater && position.y < info.r) {
      fragColor.rgb *= underwaterColor * 1.2;
    }
  }
  `),this.sphereCenter=new p.Vector,this.sphereRadius=0;var E=!!this.gl.getExtension("OES_standard_derivatives");this.causticsShader=new p.Shader(he+`
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
  `,(E?`#extension GL_OES_standard_derivatives: enable
`:"")+`
  `+he+`
    in vec3 oldPos;
    in vec3 newPos;
    in vec3 ray;
    out vec4 fragColor;

  void main() {
    `+(E?`
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
  `)}ce.prototype.reset=function(){this.cubeMesh=p.Mesh.cube({width:n.params.simulation.poolSize.x,height:2,depth:n.params.simulation.poolSize.z}),this.cubeMesh.triangles.splice(4,2),this.cubeMesh.compile()};ce.prototype.updateCaustics=function(r){};ce.prototype.renderWater=function(r,o,a){if(!n.renderWater)return;var d=new p.Raytracer;r.textureA.bind(0),this.tileTexture.bind(1),o.bind(2),this.causticTex.bind(3),this.franceTexture.bind(4),this.chinaTexture.bind(8),this.lettersTexture.bind(7),r.areaConservationTexture.bind(5);const u=N.getAttributesTexture();u&&u.bind(6),this.gl.enable(this.gl.CULL_FACE),n.updateTransitions();for(var g=0;g<2;g++)this.gl.cullFace(g?this.gl.BACK:this.gl.FRONT),this.waterShaders[g].uniforms({renderWater:!0,light:this.lightDir,water:0,tiles:1,sky:2,causticTex:3,france:4,china:8,areaConservationTexture:5,swimmersAttributesTexture:6,iChannel0:7,areaConservation:n.params.visualizations.areaConservationEnabled,flagSize:[1.5,2],flagCenter:[this.flagCenter.x,this.flagCenter.y],poolSize:[n.params.simulation.poolSize.x,n.params.simulation.poolSize.y,n.params.simulation.poolSize.z],poolSizeVertexShader:[n.params.simulation.poolSize.x,n.params.simulation.poolSize.y,n.params.simulation.poolSize.z],eye:d.eye,sphereCenter:this.sphereCenter,sphereRadius:this.sphereRadius,showProjectionGrid:r.showProjectionGrid,showAreaConservedGrid:r.showAreaConservedGrid,wr:r.WR_position,swimmersNumber:n.swimmers.length,cornerView:n.cornerView,showFlags:n.transitions.showFlags?n.transitions.showFlags.opacity:n.params.visualizations.showFlags,showWR:n.params.visualizations.showWR,showSpeed:n.params.visualizations.showSpeed,showDivingDistance:n.params.visualizations.showDivingDistance,showFinishTimes:n.params.visualizations.showFinishTimes,time:n.getRaceTime(),seed:n.time,shadowEnabled:a.enabled,shadowRadius:a.shadowRadius,shadowPower:a.shadowPower,showCircle:a.showCircle,shadowCircleRadius:a.circleRadius,shadowCircleStroke:a.circleStroke,showSwimmersLines:Math.round(n.params.visualizations.showSwimmersLinesDict[n.params.visualizations.showSwimmersLines]),swimmersLinesMode:n.params.visualizations.swimmersLinesModeDict[n.params.visualizations.swimmersLinesMode],medalsModeBeforeFinish:Math.round(n.params.visualizations.medalsModesDict[n.params.visualizations.medalsModeBeforeFinish]),medalsModeAfterFinish:Math.round(n.params.visualizations.medalsModesDict[n.params.visualizations.medalsModeAfterFinish]),rendering:n.params.visualizations.renderingDict[n.params.visualizations.rendering].value,waterColorParameter:n.params.visualizations.customParametersDict[n.params.visualizations.waterColorParameter].value}).draw(r.plane);this.gl.disable(this.gl.CULL_FACE)};ce.prototype.renderSpheres=function(r){const o=[];n.swimmers.forEach(a=>a.spheres.forEach(d=>o.push(d)));for(let a of o)this.renderSphere(r,a)};ce.prototype.renderSphere=function(r,o){r.textureA.bind(1),this.causticTex.bind(2),this.sphereShader.uniforms({light:this.lightDir,water:1,causticTex:2,sphereCenter:[o.center.x,o.center.y,o.center.z],sphereRadius:o.radius*n.spheresRadiusCoeff,poolSize:[n.params.simulation.poolSize.x,n.params.simulation.poolSize.y,n.params.simulation.poolSize.z]}).draw(o.mesh)};ce.prototype.renderSphereOld=function(r){r.textureA.bind(0),this.causticTex.bind(1),this.sphereShader.uniforms({light:this.lightDir,water:0,causticTex:1,sphereCenter:this.sphereCenter,sphereRadius:this.sphereRadius,poolSize:[n.params.simulation.poolSize.x,n.params.simulation.poolSize.y,n.params.simulation.poolSize.z]}).draw(this.sphereMesh)};ce.prototype.renderCube=function(r){n.renderCube&&(this.gl.enable(this.gl.CULL_FACE),r.textureA.bind(0),this.tileTexture.bind(1),this.causticTex.bind(2),this.cubeShader.uniforms({light:this.lightDir,water:0,tiles:1,causticTex:2,sphereCenter:this.sphereCenter,sphereRadius:this.sphereRadius,poolSize:[n.params.simulation.poolSize.x,n.params.simulation.poolSize.y,n.params.simulation.poolSize.z],renderWater:n.renderWater}).draw(this.cubeMesh),this.gl.disable(this.gl.CULL_FACE))};function Be(r,o){this.gl=o,this.id=o.createTexture(),o.bindTexture(o.TEXTURE_CUBE_MAP,this.id),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,1),o.texParameteri(o.TEXTURE_CUBE_MAP,o.TEXTURE_MAG_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_CUBE_MAP,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_CUBE_MAP,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_CUBE_MAP,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),o.texImage2D(o.TEXTURE_CUBE_MAP_NEGATIVE_X,0,o.RGB,o.RGB,o.UNSIGNED_BYTE,r.xneg),o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X,0,o.RGB,o.RGB,o.UNSIGNED_BYTE,r.xpos),o.texImage2D(o.TEXTURE_CUBE_MAP_NEGATIVE_Y,0,o.RGB,o.RGB,o.UNSIGNED_BYTE,r.yneg),o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_Y,0,o.RGB,o.RGB,o.UNSIGNED_BYTE,r.ypos),o.texImage2D(o.TEXTURE_CUBE_MAP_NEGATIVE_Z,0,o.RGB,o.RGB,o.UNSIGNED_BYTE,r.zneg),o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_Z,0,o.RGB,o.RGB,o.UNSIGNED_BYTE,r.zpos)}Be.prototype.bind=function(r){this.gl.activeTexture(this.gl.TEXTURE0+(r||0)),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,this.id)};Be.prototype.unbind=function(r){this.gl.activeTexture(this.gl.TEXTURE0+(r||0)),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,null)};const ae=new at,Rt=function(r,o){const a=ae.addFolder("visualizations");a.close(),a.add(n,"useConfigFile").name("use configuration file");const d={showTimeline:!0};a.add(d,"showTimeline").name("show event timeline").onChange(X=>{const V=document.getElementById("event-editor");V&&(V.style.display=X?"block":"none")}),a.add(n.params.visualizations,"showFlags").name("show flags").listen(),a.add(n.params.visualizations,"showWR").name("show world record").listen(),a.add(n.params.visualizations,"showSwimmersLines",n.params.visualizations.swimmersLinesList).name("show neighbours lines").listen(),a.add(n.params.visualizations,"swimmersLinesMode",n.params.visualizations.swimmersLinesModeList).name("show neighbours lines").listen(),a.add(n.params.visualizations,"customWaterPerturbation",n.params.visualizations.customParametersList).name("custom water perturbation").listen(),a.add(n.params.visualizations,"waterColorParameter",n.params.visualizations.customParametersList).name("water color parameter").listen(),a.add(n.params.visualizations,"medalsModeBeforeFinish",["none","stars","bright","lanes"]).name("show potential medals").listen(),a.add(n.params.visualizations,"medalsModeAfterFinish",["none","stars","bright","lanes"]).name("show potential medals after finish").listen(),a.add(n.params.visualizations,"showSpeed").name("show speed").listen(),a.add(n.params.visualizations,"showDivingDistance").name("show diving distance").listen(),a.add(n.params.visualizations.shadow,"enabled").name("show shadow"),a.add(n.params.visualizations,"areaConservationEnabled","areaConservationEnabled").name("area conservation").listen(),a.add(n.params.visualizations,"rendering",n.params.visualizations.renderingList).name("rendering").listen().onChange(()=>{n.params.visualizations.rendering=="toon"&&(n.params.simulation.waterDamping=.35)});const u=ae.addFolder("video");u.close(),u.add(n.params.video,"thresholdBlending").name("threshold blending"),u.add(n.params.video,"blendingThreshold",.1,.5).name("blending threshold"),u.add(n.params.video,"show").name("show").listen();const g=a.addFolder("Sparks");g.close(),g.add(n.params.visualizations.sparks,"enabled").name("sparks enabled"),g.add(n.params.visualizations.sparks,"glow",1,30).name("sparks glow factor"),g.add(n.params.visualizations.sparks,"lengthFactor",.1,10).name("sparks length factor"),g.add(n.params.visualizations.sparks,"glowOffset",.1,3).name("sparks glow offset"),g.add(n.params.visualizations.sparks,"stroke",.001,.05).name("sparks stroke"),g.add(n.params.visualizations.sparks,"num",10,qe).step(1).name("sparks number"),g.add(n.params.visualizations.sparks,"sizeFactor",10,100).name("size factor");const E=a.addFolder("Swimmers shadows");E.close(),E.add(n.params.visualizations.shadow,"shadowRadius",0,2).name("shadow radius"),E.add(n.params.visualizations.shadow,"shadowPower",.1,2).name("shadow power"),E.add(n.params.visualizations.shadow,"showCircle").name("circle"),E.add(n.params.visualizations.shadow,"circleRadius",.5,2).name("circle radius"),E.add(n.params.visualizations.shadow,"circleStroke",.1,.5).name("circle stroke");const A=ae.addFolder("Simulation");A.close(),A.add(n.params.simulation,"optimized").name("optimized").listen(),A.add(n.params.simulation.poolSize,"x",1,25).name("pool width").onChange(function(X){o()}).listen(),A.add(n.params.simulation.poolSize,"z",1,50).name("pool height").onChange(function(X){o()}).listen(),A.add(n.params.simulation.poolSize,"y",1,3).name("pool depth").onChange(function(X){o()}).listen(),A.add(n.params.simulation,"waterDamping",.005,.4).name("water damping").listen();const L=ae.addFolder("swimmers");L.close(),L.add(n.params.swimmers,"showSpheres").name("show spheres").listen(),L.add(n.params.swimmers,"useTracking").name("use tracking data").listen();const B=ae.addFolder("camera");B.close(),B.add(n.params,"fov",28,45).name("fov").listen().onChange(function(X){n.params.visualizations.sparks.fov=X*2*Math.PI/360,r.matrixMode(r.PROJECTION),r.loadIdentity(),r.perspective(n.params.fov,r.canvas.width/r.canvas.height,.01,100),r.matrixMode(r.MODELVIEW),console.log("perspective : "+n.params.fov)});const M=ae.addFolder("quiver");M.close(),M.add(n.params.quiver,"amplitude",.01,1).name("amplitude"),M.add(n.params.quiver,"omega",.5,5).name("omega"),M.add(n.params.quiver,"amplitudeFactor",.5,.9).name("amplitude factor"),M.add(n.params.quiver,"frequencyFactor",1.1,2).name("frequency factor"),M.add(n.params.quiver,"waveLength",1,30).name("wave length");const T=ae.addFolder("corner view");T.close(),T.add(n.params.cornerView,"show").name("show"),n._gui=ae},Ae=150,le=100;function At(r){const o=document.createElement("div");if(document.body.appendChild(o),o.id="event-editor",o.style.position="fixed",o.display="block",o.style.bottom="60px",o.style.left="10px",o.style.right="10px",o.style.height="120px",o.style.zIndex="4",o.style.background="#222",o.style.color="#fff",o.style.overflow="auto",o.style.padding="4px",o.style.fontSize="12px",o.style.position=o.style.position||"relative",!o){console.warn(`event editor container "${r}" not found`);return}let a,d=!1;const u=[{name:"showFlags",type:"boolean"},{name:"showWR",type:"boolean"},{name:"showSpeed",type:"boolean"},{name:"showDivingDistance",type:"boolean"},{name:"showFinishTimes",type:"boolean"},{name:"showSwimmersLines",type:"select",options:n.params.visualizations.swimmersLinesList},{name:"swimmersLinesMode",type:"select",options:n.params.visualizations.swimmersLinesModeList},{name:"customWaterPerturbation",type:"select",options:n.params.visualizations.customParametersList},{name:"waterColorParameter",type:"select",options:n.params.visualizations.customParametersList},{name:"medalsModeBeforeFinish",type:"select",options:["none","stars","bright","lanes"]},{name:"medalsModeAfterFinish",type:"select",options:["none","stars","bright","lanes"]},{name:"rankSwimmerToggle",type:"number",min:1,max:10}];function g(_){const z=document.createElement("div");z.style.flex="1",z.style.padding="4px",z.style.background="#222",z.style.border="1px solid #555",z.style.borderRadius="4px",z.style.fontFamily="monospace",z.style.fontSize="12px",z.style.whiteSpace="pre-wrap",z.style.overflow="auto",z.style.maxHeight="100px";function P(){const k=_.params;if(Object.keys(k).length===0){z.textContent="(no params)";return}const G=Object.entries(k).map(([U,I])=>`${U}: ${JSON.stringify(I)}`);z.textContent=G.join(`
`)}return P(),{element:z,update:P}}function E(_,z){const P=document.createElement("div");P.style.display="flex",P.style.flexWrap="wrap",P.style.margin="4px 0",P.style.background="#333",P.style.padding="4px";function k(){z&&(z(),V())}u.forEach(D=>{const K=document.createElement("div");K.style.marginRight="8px",K.style.marginBottom="4px";const ee=document.createElement("label");ee.style.whiteSpace="nowrap",ee.textContent=D.name+":",K.appendChild(ee);let F;if(D.type==="boolean"){F=document.createElement("select"),[{value:"",label:"—"},{value:"true",label:"ON"},{value:"false",label:"OFF"}].forEach(j=>{const w=document.createElement("option");w.value=j.value,w.textContent=j.label,F.appendChild(w)});const Y=_.params[D.name];Y===void 0?F.value="":Y===!0?F.value="true":Y===!1&&(F.value="false"),F.addEventListener("change",()=>{F.value===""?delete _.params[D.name]:F.value==="true"?_.params[D.name]=!0:F.value==="false"&&(_.params[D.name]=!1),k()})}else if(D.type==="select"){F=document.createElement("select");const H=document.createElement("option");H.value="",H.textContent="—",F.appendChild(H),D.options.forEach(Y=>{const j=document.createElement("option");j.value=Y,j.textContent=Y,F.appendChild(j)}),F.value=_.params[D.name]||"",F.addEventListener("change",()=>{F.value===""?delete _.params[D.name]:_.params[D.name]=F.value,k()})}else D.type==="number"&&(F=document.createElement("input"),F.type="number",D.min!==void 0&&(F.min=D.min),D.max!==void 0&&(F.max=D.max),F.placeholder="—",F.style.width="50px",F.value=_.params[D.name]!==void 0?_.params[D.name]:"",F.addEventListener("change",()=>{if(F.value==="")delete _.params[D.name];else{const H=parseFloat(F.value);isNaN(H)||(_.params[D.name]=H)}k()}));F&&K.appendChild(F),P.appendChild(K)});const G=document.createElement("div");G.style.marginRight="8px",G.style.marginBottom="4px";const U=document.createElement("label");U.style.whiteSpace="nowrap",U.textContent="transition :",G.appendChild(U);const I=document.createElement("input");return I.type="number",I.min=0,I.placeholder="—",I.style.width="50px",I.value=_.transition!==void 0?_.transition.duration:"",I.addEventListener("change",()=>{if(I.value===""){delete _.transition;return}const D=parseFloat(I.value);isNaN(D)||(_.transition={type:"dissolve",duration:D},k())}),G.appendChild(I),P.appendChild(G),P}function A(){const _=document.createElement("div");_.style.marginTop="8px",_.style.padding="8px",_.style.background="#555",_.style.border="1px solid #777";const z=document.createElement("div");z.textContent="Add New Event",z.style.fontWeight="bold",z.style.marginBottom="4px",_.appendChild(z);const P=document.createElement("input");P.type="number",P.placeholder="Distance",P.style.width="auto",P.style.marginRight="8px",_.appendChild(P);const k={params:{}},G=E(k,null);G.style.margin="4px 0",_.appendChild(G);const U=document.createElement("button");U.textContent="OK",U.addEventListener("click",()=>{const D=parseFloat(P.value);if(isNaN(D)){alert("Please enter a valid distance");return}const K={distance:D,...k};n.events.push(K),V(),a.remove(),a=null}),_.appendChild(U);const I=document.createElement("button");return I.textContent="cancel",I.addEventListener("click",()=>{a.remove(),a=null}),_.appendChild(I),_}function L(_,z,{title:P="",id:k=null,color:G="#e74c3c"}){const U=_/z*100,I=document.createElement("div");return I.style.position="absolute",I.style.left=U+"%",I.style.transform="translateX(-50%)",I.style.width="4px",I.style.height="100%",I.style.background=G,I.style.cursor="pointer",I.title=P,k&&(I.id=k),I.addEventListener("click",()=>{X(idx)}),I}function B(){let _=document.getElementById("distance-marker");const z=n.swimmers[0].getDistanceTraveled();if(!_){if(d)return;const P=document.getElementById("timeline-track");_=L(z,le,{color:"blue",id:"distance-marker"}),P.appendChild(_)}_.style.left=z+"%"}function M(_){d=_,T()}function T(){o.innerHTML="";const _=document.createElement("button");if(_.textContent=d?"□":"—",_.style.position="absolute",_.style.top="0",_.style.right="0",_.style.width="20px",_.style.height="20px",_.style.zIndex="100001",_.addEventListener("click",()=>{d=!d,T()}),o.appendChild(_),d){o.style.height="20px";return}o.style.height="300px";const z=document.createElement("div");if(z.style.position="relative",z.style.top="0px",z.style.left="50%",z.style.transform="translateX(-50%)",z.style.width="80px",z.style.height="15px",z.style.background="grey",z.style.border="1px solid black",z.style.cursor="ns-resize",z.style.zIndex="100000",z.style.lineHeight="16px",z.style.textAlign="center",z.textContent="drag",o.appendChild(z),z.addEventListener("mousedown",t=>{t.preventDefault();const l=t.clientY,c=o.offsetHeight;function h(x){const v=c-(x.clientY-l);v>20&&(o.style.height=v+"px")}function m(){document.removeEventListener("mousemove",h),document.removeEventListener("mouseup",m)}document.addEventListener("mousemove",h),document.addEventListener("mouseup",m)}),!n.events){o.textContent="no events defined";return}const P=document.createElement("div");o.appendChild(P),P.style.marginRight="8px",P.style.marginBottom="4px";const k=document.createElement("label");k.style.whiteSpace="nowrap",k.textContent="select scene",k.style.margin="30px",P.appendChild(k);const G=document.createElement("select");G.style.width="auto",n.scenesList.forEach(t=>{const l=document.createElement("option");l.textContent=t.title,l.value=t.title,G.appendChild(l)}),G.addEventListener("change",()=>{n.setScene(G.value)}),P.appendChild(G);const U=n.events.slice().sort((t,l)=>{const c=t.distance!==void 0?t.distance:t.time!==void 0?t.time:0,h=l.distance!==void 0?l.distance:l.time!==void 0?l.time:0;return c-h}),I=new Set;U.forEach(t=>{t.params&&Object.keys(t.params).forEach(l=>I.add(l))});let D=u.map(t=>t.name).filter(t=>I.has(t));const K=["#4caf50","#2196f3","#ff9800","#9c27b0","#f44336","#009688","#e91e63","#3f51b5"],ee={};D.forEach((t,l)=>{ee[t]=K[l%K.length]});const F={},H={};D.forEach(t=>{H[t]=!1,F[t]=0});const Y=[];if(U.forEach(t=>{const l=t.distance!==void 0?t.distance:t.time!==void 0?t.time:0;t.params&&Object.keys(t.params).forEach(c=>{if(D.includes(c)){const h=!!t.params[c];h!==H[c]&&(H[c]&&Y.push({name:c,start:F[c],end:l}),H[c]=h,F[c]=l)}})}),D.forEach(t=>{H[t]&&Y.push({name:t,start:F[t],end:le})}),D.length>0){const t=document.createElement("div");t.style.position="relative";const l=20;t.style.height=D.length*l+"px",t.style.background="#222",t.style.marginBottom="4px",t.style.marginTop="10px",D.forEach((h,m)=>{const x=document.createElement("div");x.textContent=h,x.style.position="absolute",x.style.left="0",x.style.top=m*l+2+"px",x.style.width=Ae+"px",x.style.color="#aaa",x.style.fontSize="10px",x.style.pointerEvents="none",t.appendChild(x)});const c=document.createElement("div");c.style.position="absolute",c.style.left=Ae+"px",c.style.top="0",c.style.right="0",c.style.bottom="0",c.style.overflow="hidden",t.appendChild(c),Y.forEach(h=>{const m=document.createElement("div"),x=h.start/le*100,v=(h.end-h.start)/le*100;m.style.position="absolute",m.style.left=x+"%",m.style.top=D.indexOf(h.name)*l+2+"px",m.style.height=l-4+"px",m.style.width=v+"%",m.style.background=ee[h.name]||"#4caf50",m.title=`${h.name}: ${h.start.toFixed(2)} → ${h.end.toFixed(2)}`;const f=document.createElement("span");if(f.textContent=`${h.name}: ${h.start.toFixed(2)} → ${h.end.toFixed(2)}`,f.style.position="absolute",f.style.top="0",f.style.left="2px",f.style.fontSize="10px",f.style.color="white",f.style.pointerEvents="none",f.style.whiteSpace="nowrap",f.style.overflow="hidden",f.style.textOverflow="ellipsis",m.appendChild(f),h.end<le){const y=document.createElement("div");y.style.position="absolute",y.style.right="0",y.style.top="0",y.style.width="5px",y.style.height="100%",y.style.background="rgba(255,255,255,0.5)",y.style.cursor="ew-resize",m.appendChild(y),y.addEventListener("mousedown",R=>{R.preventDefault(),R.stopPropagation();const S=R.clientX,C=m.offsetWidth;function W(J){const re=J.clientX-S,se=Math.max(1,C+re),ue=se/c.offsetWidth*100;m.style.width=ue+"%";const rt=h.start+se/c.offsetWidth*le;f.textContent=`${h.name}: ${h.start.toFixed(2)} → ${rt.toFixed(2)}`}function O(){document.removeEventListener("mousemove",W),document.removeEventListener("mouseup",O);const J=m.offsetWidth,re=h.start+J/c.offsetWidth*le,se=U.find(ue=>(ue.distance!==void 0?ue.distance:ue.time!==void 0?ue.time:0)===h.end);se&&(se.distance!==void 0?se.distance=re:se.time!==void 0&&(se.time=re)),V()}document.addEventListener("mousemove",W),document.addEventListener("mouseup",O)})}c.appendChild(m)}),o.appendChild(t)}const j=document.createElement("div");j.style.position="relative",j.style.height="40px",j.style.background="#222",j.style.marginBottom="4px",j.style.paddingLeft="80px";const w=document.createElement("div");w.id="timeline-track",w.style.position="absolute",w.style.background="#444",w.style.left=Ae+"px",w.style.top="0",w.style.right="0",w.style.bottom="0",j.appendChild(w),U.forEach((t,l)=>{const c=t.distance!==void 0?t.distance:t.time!==void 0?t.time:0,h=`event ${l}: ${JSON.stringify(t.params)}`,m=L(c,le,{title:h});w.appendChild(m)}),o.appendChild(j),U.forEach((t,l)=>{const c=document.createElement("div");c.style.display="flex",c.style.flexDirection="column",c.style.marginBottom="4px";const h=document.createElement("div");h.style.display="flex",h.style.alignItems="center";const m=document.createElement("input");m.type="number",m.style.width="60px",m.value=t.distance!==void 0?t.distance:t.time!==void 0?t.time:0,m.addEventListener("change",()=>{const R=parseFloat(m.value);isNaN(R)||(t.distance!==void 0?t.distance=R:t.time=R,V())}),h.appendChild(m);const x=g(t);h.appendChild(x.element);const v=document.createElement("button");v.textContent="⚙",v.style.marginLeft="4px",h.appendChild(v);const f=document.createElement("button");f.textContent="✖",f.style.marginLeft="4px",f.addEventListener("click",()=>{const R=n.events.indexOf(U[l]);R!==-1&&(n.events.splice(R,1),T())}),h.appendChild(f),c.appendChild(h);let y;v.addEventListener("click",()=>{y?(y.remove(),y=null):(y=E(t,x.update),c.appendChild(y))}),o.appendChild(c)});const i=document.createElement("button");i.textContent="+ add event",i.addEventListener("click",()=>{a?(a.remove(),a=null):(a=A(),o.appendChild(a),o.scrollTop=o.scrollHeight)}),o.appendChild(i);const s=document.createElement("button");s.textContent="export JSON",s.style.marginLeft="8px",s.addEventListener("click",()=>{const t=JSON.stringify(n.events,null,2),l=new Blob([t],{type:"application/json"}),c=URL.createObjectURL(l),h=document.createElement("a");h.href=c,h.download="vis-config.json",h.click(),URL.revokeObjectURL(c)}),o.appendChild(s);const e=document.createElement("input");e.type="file",e.accept=".json",e.style.marginLeft="8px",e.addEventListener("change",t=>{const l=t.target.files[0];if(l){const c=new FileReader;c.onload=h=>{try{const m=JSON.parse(h.target.result);n.events=m,V()}catch(m){alert("Invalid JSON: "+m.message)}},c.readAsText(l)}}),o.appendChild(e)}function X(_){const P=o.querySelectorAll("div")[1+_];P&&P.scrollIntoView({behavior:"smooth",block:"center"})}function V(){n.events.sort((_,z)=>{const P=_.distance!==void 0?_.distance:_.time!==void 0?_.time:0,k=z.distance!==void 0?z.distance:z.time!==void 0?z.time:0;return P-k}),T()}T(),n._renderTimeline=T,n._updateDistanceMarker=B,n._setPannelMinimized=M}const Qe=new p.Mesh.plane({width:2,height:2,coords:!0,normals:!0}),zt=new p.Shader(`
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
    uniform sampler2D oldPicture;
    uniform vec2 linep1;
    uniform vec2 linep2;
    out vec4 fragColor;




    bool isInFixedPart(vec2 p) {
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

    void main() {
        vec4 oldPix = texture(oldPicture, vTextureCoord);
        if (oldPix.rgb != vec3(0)) {
            fragColor = oldPix;
            return;
        }
        if(isInFixedPart(vTextureCoord*2.-1.)) fragColor = texture(screen, vTextureCoord);
        if(isInFixedPart(vTextureCoord*2.-1.)) texture(screen, vTextureCoord);
        // if(isInFixedPart(pos)) fragColor = texture(screen, vTextureCoord);
        else fragColor = vec4(0., 0., 0., 0.);
    }
`),Ct=new p.Shader(`
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
`);let ve=new p.Texture,Ie=new p.Texture;new p.Texture;let et=!1,Ge=null;const tt=(r,o,a)=>{et=!0,ve=new p.Texture(r,o,{type:a.FLOAT,filter:a.NEAREST}),Ie=new p.Texture(r,o,{type:a.FLOAT,filter:a.NEAREST}),Ge=a.createFramebuffer(),a.bindFramebuffer(a.FRAMEBUFFER,Ge);const d=a.COLOR_ATTACHMENT0;a.framebufferTexture2D(a.FRAMEBUFFER,d,a.TEXTURE_2D,ve.id,0),a.bindFramebuffer(a.FRAMEBUFFER,null)};function We(r){r.x/=n.gl.canvas.width/2,r.x-=1,r.y/=n.gl.canvas.height/2,r.y-=1}const Ft=()=>{et||tt(n.gl.canvas.width,n.gl.canvas.height,n.gl);const r=n.params.simulation.poolSize,o=n.gl.project(r.x/2,0,n.distanceFixed+1-r.z/2),a=n.gl.project(-r.x/2,0,n.distanceFixed+1-r.z/2);We(o),We(a),Ie.drawTo(()=>{ve.bind(0),n.gl.activeTexture(n.gl.TEXTURE1),n.gl.bindTexture(n.gl.TEXTURE_2D,n.drawingTexture),zt.uniforms({oldPicture:0,screen:1,distanceFixed:n.distanceFixed,poolSize:[n.params.simulation.poolSize.x,n.params.simulation.poolSize.y,n.params.simulation.poolSize.z],linep1:[o.x,o.y],linep2:[a.x,a.y]}).draw(Qe)}),ve.swapWith(Ie),n.gl.bindFramebuffer(n.gl.FRAMEBUFFER,n.drawingFrameBuffer)},Pt=()=>{n.gl.bindFramebuffer(n.gl.FRAMEBUFFER,null),ve.bind(7),n.gl.activeTexture(n.gl.TEXTURE8),n.gl.bindTexture(n.gl.TEXTURE_2D,n.drawingTexture),Ct.uniforms({picture:7,screen:8}).draw(Qe)};n._fixTexture=Ft;n._clearChronoTexture=tt;function Dt(r){return r.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n/g,"<br>")}function Mt(r){var o=Dt(r);o=="WebGL not supported"&&(o='Your browser does not support WebGL.<br>Please see    <a href="http://www.khronos.org/webgl/wiki/Getting_a_WebGL_Implementation">    Getting a WebGL Implementation</a>.');var a=document.getElementById("loading");a.innerHTML=o,a.style.zIndex=1}window.onerror=Mt;var ze,Z;const It=10,b=n.gl;var ye,Le;N.initAttributes();function it(){document.getElementById("warning").hidden=!(n.resolution.x*n.resolution.y>3e5&&n.water&&n.params.visualizations.areaConservationEnabled)}let Ce=0;function Lt(r){Ce+=r,Ce>=1&&(document.getElementById("fps").innerText=`${(1/r).toFixed(1)} FPS`,Ce=0)}function me(){console.log("reset"),document.getElementById("resolution").innerText=`Resolution: ${n.resolution.x} x ${n.resolution.y}`,it(),ye=new p.Vector(0,-n.params.simulation.poolSize.z/2+1),n.water.reset(n.resolution),Z.flagCenter=ye,Z.flagSize=Le,Z.reset();const r=n.params.simulation.poolSize.x/It;let o=n.params.simulation.poolSize.x/2-r/2;for(let a of n.swimmers)a.body.center.x=o,a.startingPoint.x=o,o-=r}function Bt(r){const o=parseFloat(r.target.value);isNaN(o)||(n.setRaceTime(o),n.swimmers.forEach(a=>a.setCurrentDataIndex()))}window.onload=function(){var r=window.devicePixelRatio||1,o=document.getElementById("help");function a(){var t=innerWidth,l=innerHeight;b.canvas.width=t*r,b.canvas.height=l*r,b.canvas.style.width=t+"px",b.canvas.style.height=l+"px",b.viewport(0,0,b.canvas.width,b.canvas.height),b.matrixMode(b.PROJECTION),b.loadIdentity(),b.perspective(n.params.fov,b.canvas.width/b.canvas.height,.01,100),b.matrixMode(b.MODELVIEW),n.resetDrawingTexture(),e()}document.body.appendChild(b.canvas),b.canvas.oncontextmenu=function(t){t.preventDefault()},b.clearColor(0,0,0,1),ye=new p.Vector(0,-n.params.simulation.poolSize.z/2+1),Le=.7;const d=document.getElementById("time-slider");d&&d.addEventListener("input",Bt);const u=document.getElementById("drop-zone");let g=0;document.addEventListener("dragenter",t=>{g++,u.style.display="flex"}),document.addEventListener("dragover",t=>{t.preventDefault(),t.dataTransfer.dropEffect="copy"}),document.addEventListener("dragleave",t=>{g--,g===0&&(u.style.display="none")}),Rt(b,me),n._reset=me,setTimeout(()=>{At("event-editor")},50),Z=new ce(b,n.water,ye,Le),ze=new Be({xneg:document.getElementById("xneg"),xpos:document.getElementById("xpos"),yneg:document.getElementById("ypos"),ypos:document.getElementById("ypos"),zneg:document.getElementById("zneg"),zpos:document.getElementById("zpos")},b);const E=new N(new p.Vector(0,0,0));if(n.swimmers.push(E),n.water=new ne(n.gl),!n.water.textureA.canDrawTo()||!n.water.textureB.canDrawTo())throw new Error("Rendering to floating-point textures is required but not supported");me();for(var A=0;A<20;A++)n.water.addDrop(Math.random()*2-1,Math.random()*2-1,.06,A&1?.01:-.01);document.getElementById("loading").innerHTML="",a();var L=window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(t){setTimeout(t,0)},B=new Date().getTime();function M(){var t=new Date().getTime();n.paused||(i((t-B)/1e3),e()),B=t,L(M)}L(M),window.onresize=a;var T,X,V,_=-1,z=0,P=1,k=2;const G=3;var U,I;function D(t,l,c){if(U=t,I=l,!c||c.button===0){var h=new p.Raytracer,m=h.getRayForPixel(t*r,l*r),x=h.eye.add(m.multiply(-h.eye.y/m.y));for(let f of n.swimmers){var v=p.Raytracer.hitTestSphere(h.eye,m,f.body.center,f.body.radius);if(v){_=P,V=f,f.body.cinematic=!0,T=v.hit,X=h.getRayForPixel(b.canvas.width/2,b.canvas.height/2).negative();return}}Math.abs(x.x)<n.params.simulation.poolSize.x/2&&Math.abs(x.z)<n.params.simulation.poolSize.z/2&&(_=z,K(t,l))}else c.button===2?_=k:c.button===1&&(_=G)}function K(t,l,c){switch(_){case z:{var h=new p.Raytracer,m=h.getRayForPixel(t*r,l*r),x=h.eye.add(m.multiply(-h.eye.y/m.y));n.water.addDrop(x.x/n.params.simulation.poolSize.x*2,x.z/n.params.simulation.poolSize.z*2,.06,.03),n.paused&&(n.water.updateNormals(),Z.updateCaustics(n.water));break}case P:{var h=new p.Raytracer,m=h.getRayForPixel(t*r,l*r),v=-X.dot(h.eye.subtract(T))/X.dot(m),f=h.eye.add(m.multiply(v));const S=V.body.center.add(f.subtract(T)),C=V.body.radius,W=Math.max(C-n.params.simulation.poolSize.x/2,Math.min(n.params.simulation.poolSize.x/2-C,S.x)),O=Math.max(C-n.params.simulation.poolSize.y,Math.min(10,S.y)),J=Math.max(C-n.params.simulation.poolSize.z/2,Math.min(n.params.simulation.poolSize.z/2-C,S.z));V.body.move(new p.Vector(W,O,J)),T=f,n.paused&&Z.updateCaustics(n.water);break}case k:{if(c&&c.shiftKey){n.angleZ-=t-U,n.angleZ=Math.max(-89.999,Math.min(89.999,n.angleZ));break}n.angleY-=t-U,n.angleX-=l-I,n.angleX=Math.max(-89.999,Math.min(89.999,n.angleX));break}case G:{const y=.001*n.zoomDistance;n.translateX+=y*(t-U),n.translateY-=y*(l-I)}}U=t,I=l,n.paused&&e()}function ee(){_=-1,V&&(V.body.cinematic=!N.useGravity)}function F(t){return t===o||t.parentNode&&F(t.parentNode)}function H(t){return t&&(t.id==="event-editor"||t.parentNode&&H(t.parentNode))}function Y(t){n.zoomDistance*=1-t*2e-4,n.zoomDistance=Math.max(2,Math.min(1e3,n.zoomDistance)),n.paused&&e()}addEventListener("wheel",function(t){if(!H(t.target)){var l=t.deltaY;Y(-l)}}),document.onmousedown=function(t){b.canvas.focus(),F(t.target)||D(t.pageX,t.pageY,t)},document.onmousemove=function(t){K(t.pageX,t.pageY,t)},document.onmouseup=function(){ee()},document.ontouchstart=function(t){t.touches.length===1&&!F(t.target)&&(t.preventDefault(),D(t.touches[0].pageX,t.touches[0].pageY,!1))},document.ontouchmove=function(t){t.touches.length===1&&K(t.touches[0].pageX,t.touches[0].pageY)},document.ontouchend=function(t){t.touches.length==0&&ee()};function j(){n.paused?n.play():n.pause()}const w=async function(t){if(t.which==32)j();else if(t.which==71)n.useGravity(!N.useGravity);else if(t.which==76&&n.paused)e();else if(t.which==74)n.swimmers.forEach(l=>l.jump(2));else if(t.which==67)n.params.visualizations.areaConservationEnabled=!n.params.visualizations.areaConservationEnabled,it(),console.log("Area conservation "+(n.params.visualizations.areaConservationEnabled?"enabled.":"disabled."));else if(t.which==80)n.water.showProjectionGrid=!n.water.showProjectionGrid,console.log("Projection grid "+(n.water.showProjectionGrid?"enabled.":"disabled."));else if(t.which==65)n.water.showAreaConservedGrid=!n.water.showAreaConservedGrid,console.log("Area conserved grid "+(n.water.showAreaConservedGrid?"enabled.":"disabled."));else if(t.which==83){if(N.swimming=!N.swimming,N.swimming)for(let l of n.swimmers)l.swim(!0);else stopRace();console.log("Swimming "+(N.swimming?"enabled.":"disabled."))}else t.which==86?n.params.video.show=!n.params.video.show:t.which==72?(document.getElementById("commands").hidden=!document.getElementById("commands").hidden,document.getElementById("h").hidden=!document.getElementById("h").hidden):t.which==68?n.playingDemo?n.stopDemo():await n.launchDemo():t.which==81?n.chronoPhotography():t.which==82?(n.setScene("100m freestyle").then(()=>n.startRace()),n._setPannelMinimized(!0)):t.which==40?(n.resolution.x>129&&(n.resolution.x=Math.round(n.resolution.x/2)),me(),console.log("decreasing x resolution")):t.which==38?(n.resolution.x<16384&&(n.resolution.x=Math.round(n.resolution.x*2)),me(),console.log("increasing x resolution")):t.which==37?(n.resolution.y>129&&(n.resolution.y=Math.round(n.resolution.y/2)),me(),console.log("decreasing y resolution")):t.which==39&&(n.resolution.y<16384&&(n.resolution.y=Math.round(n.resolution.y*2)),me(),console.log("increasing y resolution"))};b.canvas.addEventListener("keydown",w);function i(t){if(!(t>1)){if(_==P)for(let l of n.swimmers)l.body.velocity=new p.Vector(0,0,0);b.clearColor(0,0,0,1),b.bindFramebuffer(b.FRAMEBUFFER,null),b.clear(b.COLOR_BUFFER_BIT|b.DEPTH_BUFFER_BIT);for(let l of n.swimmers)l.update(t);n.water.updateSpheres(t);for(let l=0;l<n.params.numSteps;l++)n.water.stepSimulation();Z.updateCaustics(n.water),n.updateTime(t),n.updateParams(),d.value=n.getRaceTime(),Lt(t),n.updateDemo(t)}}function s(){if(!N.raceHasStarted||!n.params.cornerView.show)return;n.cornerView=!0,b.loadIdentity(),b.translate(0,0,-35),b.rotate(90,1,0,0),b.rotate(-90,0,1,0),b.translate(0,.5,0);const t=b.canvas.height/3,l=16*t/9,c=0,h=b.canvas.height-t;b.viewport(c,h,l,t),Z.renderWater(n.water,ze,n.params.visualizations.shadow),Z.renderSpheres(n.water),b.viewport(0,0,b.canvas.width,b.canvas.height),b.loadIdentity(),b.translate(n.translateX,n.translateY,-n.zoomDistance),b.rotate(-n.angleZ,0,0,1),b.rotate(-n.angleX,1,0,0),b.rotate(-n.angleY,0,1,0),b.translate(0,.5,0),n.cornerView=!1}function e(){p.keys.L&&(Z.lightDir=p.Vector.fromAngles((90-n.angleY)*Math.PI/180,-n.angleX*Math.PI/180),n.paused&&Z.updateCaustics(n.water)),n.isOneVisualizationEnabled()&&N.updateAttributesTexture(),n.water.addOrRemoveVisualizationWaves(!0),n.water.updateNormals(),b.clearColor(.1,.2,.5,1),b.bindFramebuffer(b.FRAMEBUFFER,n.drawingFrameBuffer),b.clear(b.COLOR_BUFFER_BIT|b.DEPTH_BUFFER_BIT),b.loadIdentity(),b.translate(n.translateX,n.translateY,-n.zoomDistance),b.rotate(-n.angleZ,0,0,1),b.rotate(-n.angleX,1,0,0),b.rotate(-n.angleY,0,1,0),b.translate(0,.5,0),b.enable(b.DEPTH_TEST),b.disable(b.BLEND),b.viewport(0,0,b.canvas.width,b.canvas.height),Z.sphereCenter=n.swimmers[0].body.center,Z.sphereRadius=n.swimmers[0].body.radius,Z.renderCube(n.water),Z.renderWater(n.water,ze,n.params.visualizations.shadow),b.enable(b.DEPTH_TEST),n.params.swimmers.showSpheres&&Z.renderSpheres(n.water),n.renderVideo(),Pt(),b.disable(b.DEPTH_TEST),s(),n.water.addOrRemoveVisualizationWaves(!1)}};
//# sourceMappingURL=swimming-BtbDvOvz.js.map
