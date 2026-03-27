var ot=Object.defineProperty;var Ne=a=>{throw TypeError(a)};var at=(a,r,s)=>r in a?ot(a,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[r]=s;var te=(a,r,s)=>at(a,typeof r!="symbol"?r+"":r,s),nt=(a,r,s)=>r.has(a)||Ne("Cannot "+s);var xe=(a,r,s)=>r.has(a)?Ne("Cannot add the same private member more than once"):r instanceof WeakSet?r.add(a):r.set(a,s);var $=(a,r,s)=>(nt(a,r,"access private method"),s);import"./modulepreload-polyfill-B5Qt9EMX.js";import{g as st}from"./lil-gui.module.min-Vka56b52.js";var p=function(){var a,r={create:function(i){i=i||{};var n=document.createElement("canvas");n.width=800,n.height=600,"alpha"in i||(i.alpha=!1);try{a=n.getContext("webgl2",i)}catch{}try{a=a||n.getContext("experimental-webgl",i)}catch{}if(!a)throw new Error("WebGL not supported");return a.HALF_FLOAT_OES=36193,s(),d(),u(),M(),a},keys:{},Matrix:y,Indexer:q,Buffer:U,Mesh:T,HitTest:k,Raytracer:G,Shader:D,Texture:F,Vector:w};function s(){a.MODELVIEW=L|1,a.PROJECTION=L|2;var i=new y,n=new y;a.modelviewMatrix=new y,a.projectionMatrix=new y;var e=[],t=[],l,c;a.matrixMode=function(m){switch(m){case a.MODELVIEW:l="modelviewMatrix",c=e;break;case a.PROJECTION:l="projectionMatrix",c=t;break;default:throw new Error("invalid matrix mode "+m)}},a.loadIdentity=function(){y.identity(a[l])},a.loadMatrix=function(m){for(var h=m.m,x=a[l].m,g=0;g<16;g++)x[g]=h[g]},a.multMatrix=function(m){a.loadMatrix(y.multiply(a[l],m,n))},a.perspective=function(m,h,x,g){a.multMatrix(y.perspective(m,h,x,g,i))},a.frustum=function(m,h,x,g,f,E){a.multMatrix(y.frustum(m,h,x,g,f,E,i))},a.ortho=function(m,h,x,g,f,E){a.multMatrix(y.ortho(m,h,x,g,f,E,i))},a.scale=function(m,h,x){a.multMatrix(y.scale(m,h,x,i))},a.translate=function(m,h,x){a.multMatrix(y.translate(m,h,x,i))},a.rotate=function(m,h,x,g){a.multMatrix(y.rotate(m,h,x,g,i))},a.lookAt=function(m,h,x,g,f,E,R,S,C){a.multMatrix(y.lookAt(m,h,x,g,f,E,R,S,C,i))},a.pushMatrix=function(){c.push(Array.prototype.slice.call(a[l].m))},a.popMatrix=function(){var m=c.pop();a[l].m=B?new Float32Array(m):m},a.project=function(m,h,x,g,f,E){g=g||a.modelviewMatrix,f=f||a.projectionMatrix,E=E||a.getParameter(a.VIEWPORT);var R=f.transformPoint(g.transformPoint(new w(m,h,x)));return new w(E[0]+E[2]*(R.x*.5+.5),E[1]+E[3]*(R.y*.5+.5),R.z*.5+.5)},a.unProject=function(m,h,x,g,f,E){g=g||a.modelviewMatrix,f=f||a.projectionMatrix,E=E||a.getParameter(a.VIEWPORT);var R=new w((m-E[0])/E[2]*2-1,(h-E[1])/E[3]*2-1,x*2-1);return y.inverse(y.multiply(f,g,i),n).transformPoint(R)},a.matrixMode(a.MODELVIEW)}function d(){var i={mesh:new T({coords:!0,colors:!0,triangles:!1}),mode:-1,coord:[0,0,0,0],color:[1,1,1,1],shader:new D("      uniform float pointSize;      out vec4 color;      out vec4 coord;      void main() {        color = gl_Color;        coord = gl_TexCoord;        gl_Position = gl_ModelViewProjectionMatrix * gl_Vertex;        gl_PointSize = pointSize;      }    ","      uniform sampler2D tex;      uniform float pointSize;      uniform bool useTexture;      in vec4 color;      in vec4 coord;      out vec4 fragColor;      void main() {        fragColor = color;        if (useTexture) fragColor *= texture(tex, coord.xy);      }    ")};a.pointSize=function(n){i.shader.uniforms({pointSize:n})},a.begin=function(n){if(i.mode!=-1)throw new Error("mismatched gl.begin() and gl.end() calls");i.mode=n,i.mesh.colors=[],i.mesh.coords=[],i.mesh.vertices=[]},a.color=function(n,e,t,l){i.color=arguments.length==1?n.toArray().concat(1):[n,e,t,l||1]},a.texCoord=function(n,e){i.coord=arguments.length==1?n.toArray(2):[n,e]},a.vertex=function(n,e,t){i.mesh.colors.push(i.color),i.mesh.coords.push(i.coord),i.mesh.vertices.push(arguments.length==1?n.toArray():[n,e,t])},a.end=function(){if(i.mode==-1)throw new Error("mismatched gl.begin() and gl.end() calls");i.mesh.compile(),i.shader.uniforms({useTexture:!!a.getParameter(a.TEXTURE_BINDING_2D)}).draw(i.mesh,i.mode),i.mode=-1}}function u(){var i=a,n=0,e=0,t={},l=!1,c=Object.prototype.hasOwnProperty;function m(){for(var S in t)if(c.call(t,S)&&t[S])return!0;return!1}function h(S){var C={};for(var W in S)typeof S[W]=="function"?C[W]=function(J){return function(){J.apply(S,arguments)}}(S[W]):C[W]=S[W];C.original=S,C.x=C.pageX,C.y=C.pageY;for(var O=a.canvas;O;O=O.offsetParent)C.x-=O.offsetLeft,C.y-=O.offsetTop;return l?(C.deltaX=C.x-n,C.deltaY=C.y-e):(C.deltaX=0,C.deltaY=0,l=!0),n=C.x,e=C.y,C.dragging=m(),C.preventDefault=function(){C.original.preventDefault()},C.stopPropagation=function(){C.original.stopPropagation()},C}function x(S){a=i,m()||(_(document,"mousemove",g),_(document,"mouseup",f),A(a.canvas,"mousemove",g),A(a.canvas,"mouseup",f)),t[S.which]=!0,S=h(S),a.onmousedown&&a.onmousedown(S),S.preventDefault()}function g(S){a=i,S=h(S),a.onmousemove&&a.onmousemove(S),S.preventDefault()}function f(S){a=i,t[S.which]=!1,m()||(A(document,"mousemove",g),A(document,"mouseup",f),_(a.canvas,"mousemove",g),_(a.canvas,"mouseup",f)),S=h(S),a.onmouseup&&a.onmouseup(S),S.preventDefault()}function E(){l=!1}function R(){t={},l=!1}_(a.canvas,"mousedown",x),_(a.canvas,"mousemove",g),_(a.canvas,"mouseup",f),_(a.canvas,"mouseover",E),_(a.canvas,"mouseout",E),_(document,"contextmenu",R)}function v(i){var n={8:"BACKSPACE",9:"TAB",13:"ENTER",16:"SHIFT",27:"ESCAPE",32:"SPACE",37:"LEFT",38:"UP",39:"RIGHT",40:"DOWN"};return n[i]||(i>=65&&i<=90?String.fromCharCode(i):null)}function _(i,n,e){i.addEventListener(n,e)}function A(i,n,e){i.removeEventListener(n,e)}_(document,"keydown",function(i){if(!i.altKey&&!i.ctrlKey&&!i.metaKey){var n=v(i.keyCode);n&&(r.keys[n]=!0),r.keys[i.keyCode]=!0}}),_(document,"keyup",function(i){if(!i.altKey&&!i.ctrlKey&&!i.metaKey){var n=v(i.keyCode);n&&(r.keys[n]=!1),r.keys[i.keyCode]=!1}});function M(){(function(i){a.makeCurrent=function(){a=i}})(a),a.animate=function(){var i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(l){setTimeout(l,16.666666666666668)},n=new Date().getTime(),e=a;function t(){a=e;var l=new Date().getTime();a.onupdate&&a.onupdate((l-n)/1e3),a.ondraw&&a.ondraw(),i(t),n=l}t()},a.fullscreen=function(i){i=i||{};var n=i.paddingTop||0,e=i.paddingLeft||0,t=i.paddingRight||0,l=i.paddingBottom||0;if(!document.body)throw new Error("document.body doesn't exist yet (call gl.fullscreen() from window.onload() or from inside the <body> tag)");document.body.appendChild(a.canvas),document.body.style.overflow="hidden",a.canvas.style.position="absolute",a.canvas.style.left=e+"px",a.canvas.style.top=n+"px";function c(){a.canvas.width=window.innerWidth-e-t,a.canvas.height=window.innerHeight-n-l,a.viewport(0,0,a.canvas.width,a.canvas.height),(i.camera||!("camera"in i))&&(a.matrixMode(a.PROJECTION),a.loadIdentity(),a.perspective(i.fov||45,a.canvas.width/a.canvas.height,i.near||.1,i.far||1e3),a.matrixMode(a.MODELVIEW)),a.ondraw&&a.ondraw()}_(window,"resize",c),c()}}var L=305397760,B=typeof Float32Array<"u";function y(){var i=Array.prototype.concat.apply([],arguments);i.length||(i=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),this.m=B?new Float32Array(i):i}y.prototype={inverse:function(){return y.inverse(this,new y)},transpose:function(){return y.transpose(this,new y)},multiply:function(i){return y.multiply(this,i,new y)},transformPoint:function(i){var n=this.m;return new w(n[0]*i.x+n[1]*i.y+n[2]*i.z+n[3],n[4]*i.x+n[5]*i.y+n[6]*i.z+n[7],n[8]*i.x+n[9]*i.y+n[10]*i.z+n[11]).divide(n[12]*i.x+n[13]*i.y+n[14]*i.z+n[15])},transformVector:function(i){var n=this.m;return new w(n[0]*i.x+n[1]*i.y+n[2]*i.z,n[4]*i.x+n[5]*i.y+n[6]*i.z,n[8]*i.x+n[9]*i.y+n[10]*i.z)}},y.inverse=function(i,n){n=n||new y;var e=i.m,t=n.m;t[0]=e[5]*e[10]*e[15]-e[5]*e[14]*e[11]-e[6]*e[9]*e[15]+e[6]*e[13]*e[11]+e[7]*e[9]*e[14]-e[7]*e[13]*e[10],t[1]=-e[1]*e[10]*e[15]+e[1]*e[14]*e[11]+e[2]*e[9]*e[15]-e[2]*e[13]*e[11]-e[3]*e[9]*e[14]+e[3]*e[13]*e[10],t[2]=e[1]*e[6]*e[15]-e[1]*e[14]*e[7]-e[2]*e[5]*e[15]+e[2]*e[13]*e[7]+e[3]*e[5]*e[14]-e[3]*e[13]*e[6],t[3]=-e[1]*e[6]*e[11]+e[1]*e[10]*e[7]+e[2]*e[5]*e[11]-e[2]*e[9]*e[7]-e[3]*e[5]*e[10]+e[3]*e[9]*e[6],t[4]=-e[4]*e[10]*e[15]+e[4]*e[14]*e[11]+e[6]*e[8]*e[15]-e[6]*e[12]*e[11]-e[7]*e[8]*e[14]+e[7]*e[12]*e[10],t[5]=e[0]*e[10]*e[15]-e[0]*e[14]*e[11]-e[2]*e[8]*e[15]+e[2]*e[12]*e[11]+e[3]*e[8]*e[14]-e[3]*e[12]*e[10],t[6]=-e[0]*e[6]*e[15]+e[0]*e[14]*e[7]+e[2]*e[4]*e[15]-e[2]*e[12]*e[7]-e[3]*e[4]*e[14]+e[3]*e[12]*e[6],t[7]=e[0]*e[6]*e[11]-e[0]*e[10]*e[7]-e[2]*e[4]*e[11]+e[2]*e[8]*e[7]+e[3]*e[4]*e[10]-e[3]*e[8]*e[6],t[8]=e[4]*e[9]*e[15]-e[4]*e[13]*e[11]-e[5]*e[8]*e[15]+e[5]*e[12]*e[11]+e[7]*e[8]*e[13]-e[7]*e[12]*e[9],t[9]=-e[0]*e[9]*e[15]+e[0]*e[13]*e[11]+e[1]*e[8]*e[15]-e[1]*e[12]*e[11]-e[3]*e[8]*e[13]+e[3]*e[12]*e[9],t[10]=e[0]*e[5]*e[15]-e[0]*e[13]*e[7]-e[1]*e[4]*e[15]+e[1]*e[12]*e[7]+e[3]*e[4]*e[13]-e[3]*e[12]*e[5],t[11]=-e[0]*e[5]*e[11]+e[0]*e[9]*e[7]+e[1]*e[4]*e[11]-e[1]*e[8]*e[7]-e[3]*e[4]*e[9]+e[3]*e[8]*e[5],t[12]=-e[4]*e[9]*e[14]+e[4]*e[13]*e[10]+e[5]*e[8]*e[14]-e[5]*e[12]*e[10]-e[6]*e[8]*e[13]+e[6]*e[12]*e[9],t[13]=e[0]*e[9]*e[14]-e[0]*e[13]*e[10]-e[1]*e[8]*e[14]+e[1]*e[12]*e[10]+e[2]*e[8]*e[13]-e[2]*e[12]*e[9],t[14]=-e[0]*e[5]*e[14]+e[0]*e[13]*e[6]+e[1]*e[4]*e[14]-e[1]*e[12]*e[6]-e[2]*e[4]*e[13]+e[2]*e[12]*e[5],t[15]=e[0]*e[5]*e[10]-e[0]*e[9]*e[6]-e[1]*e[4]*e[10]+e[1]*e[8]*e[6]+e[2]*e[4]*e[9]-e[2]*e[8]*e[5];for(var l=e[0]*t[0]+e[1]*t[4]+e[2]*t[8]+e[3]*t[12],c=0;c<16;c++)t[c]/=l;return n},y.transpose=function(i,n){n=n||new y;var e=i.m,t=n.m;return t[0]=e[0],t[1]=e[4],t[2]=e[8],t[3]=e[12],t[4]=e[1],t[5]=e[5],t[6]=e[9],t[7]=e[13],t[8]=e[2],t[9]=e[6],t[10]=e[10],t[11]=e[14],t[12]=e[3],t[13]=e[7],t[14]=e[11],t[15]=e[15],n},y.multiply=function(i,n,e){e=e||new y;var t=i.m,l=n.m,c=e.m;return c[0]=t[0]*l[0]+t[1]*l[4]+t[2]*l[8]+t[3]*l[12],c[1]=t[0]*l[1]+t[1]*l[5]+t[2]*l[9]+t[3]*l[13],c[2]=t[0]*l[2]+t[1]*l[6]+t[2]*l[10]+t[3]*l[14],c[3]=t[0]*l[3]+t[1]*l[7]+t[2]*l[11]+t[3]*l[15],c[4]=t[4]*l[0]+t[5]*l[4]+t[6]*l[8]+t[7]*l[12],c[5]=t[4]*l[1]+t[5]*l[5]+t[6]*l[9]+t[7]*l[13],c[6]=t[4]*l[2]+t[5]*l[6]+t[6]*l[10]+t[7]*l[14],c[7]=t[4]*l[3]+t[5]*l[7]+t[6]*l[11]+t[7]*l[15],c[8]=t[8]*l[0]+t[9]*l[4]+t[10]*l[8]+t[11]*l[12],c[9]=t[8]*l[1]+t[9]*l[5]+t[10]*l[9]+t[11]*l[13],c[10]=t[8]*l[2]+t[9]*l[6]+t[10]*l[10]+t[11]*l[14],c[11]=t[8]*l[3]+t[9]*l[7]+t[10]*l[11]+t[11]*l[15],c[12]=t[12]*l[0]+t[13]*l[4]+t[14]*l[8]+t[15]*l[12],c[13]=t[12]*l[1]+t[13]*l[5]+t[14]*l[9]+t[15]*l[13],c[14]=t[12]*l[2]+t[13]*l[6]+t[14]*l[10]+t[15]*l[14],c[15]=t[12]*l[3]+t[13]*l[7]+t[14]*l[11]+t[15]*l[15],e},y.identity=function(i){i=i||new y;var n=i.m;return n[0]=n[5]=n[10]=n[15]=1,n[1]=n[2]=n[3]=n[4]=n[6]=n[7]=n[8]=n[9]=n[11]=n[12]=n[13]=n[14]=0,i},y.perspective=function(i,n,e,t,l){var c=Math.tan(i*Math.PI/360)*e,m=c*n;return y.frustum(-m,m,-c,c,e,t,l)},y.frustum=function(i,n,e,t,l,c,m){m=m||new y;var h=m.m;return h[0]=2*l/(n-i),h[1]=0,h[2]=(n+i)/(n-i),h[3]=0,h[4]=0,h[5]=2*l/(t-e),h[6]=(t+e)/(t-e),h[7]=0,h[8]=0,h[9]=0,h[10]=-(c+l)/(c-l),h[11]=-2*c*l/(c-l),h[12]=0,h[13]=0,h[14]=-1,h[15]=0,m},y.ortho=function(i,n,e,t,l,c,m){m=m||new y;var h=m.m;return h[0]=2/(n-i),h[1]=0,h[2]=0,h[3]=-(n+i)/(n-i),h[4]=0,h[5]=2/(t-e),h[6]=0,h[7]=-(t+e)/(t-e),h[8]=0,h[9]=0,h[10]=-2/(c-l),h[11]=-(c+l)/(c-l),h[12]=0,h[13]=0,h[14]=0,h[15]=1,m},y.scale=function(i,n,e,t){t=t||new y;var l=t.m;return l[0]=i,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=n,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=e,l[11]=0,l[12]=0,l[13]=0,l[14]=0,l[15]=1,t},y.translate=function(i,n,e,t){t=t||new y;var l=t.m;return l[0]=1,l[1]=0,l[2]=0,l[3]=i,l[4]=0,l[5]=1,l[6]=0,l[7]=n,l[8]=0,l[9]=0,l[10]=1,l[11]=e,l[12]=0,l[13]=0,l[14]=0,l[15]=1,t},y.rotate=function(i,n,e,t,l){if(!i||!n&&!e&&!t)return y.identity(l);l=l||new y;var c=l.m,m=Math.sqrt(n*n+e*e+t*t);i*=Math.PI/180,n/=m,e/=m,t/=m;var h=Math.cos(i),x=Math.sin(i),g=1-h;return c[0]=n*n*g+h,c[1]=n*e*g-t*x,c[2]=n*t*g+e*x,c[3]=0,c[4]=e*n*g+t*x,c[5]=e*e*g+h,c[6]=e*t*g-n*x,c[7]=0,c[8]=t*n*g-e*x,c[9]=t*e*g+n*x,c[10]=t*t*g+h,c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l},y.lookAt=function(i,n,e,t,l,c,m,h,x,g){g=g||new y;var f=g.m,E=new w(i,n,e),R=new w(t,l,c),S=new w(m,h,x),C=E.subtract(R).unit(),W=S.cross(C).unit(),O=C.cross(W).unit();return f[0]=W.x,f[1]=W.y,f[2]=W.z,f[3]=-W.dot(E),f[4]=O.x,f[5]=O.y,f[6]=O.z,f[7]=-O.dot(E),f[8]=C.x,f[9]=C.y,f[10]=C.z,f[11]=-C.dot(E),f[12]=0,f[13]=0,f[14]=0,f[15]=1,g};function q(){this.unique=[],this.indices=[],this.map={}}q.prototype={add:function(i){var n=JSON.stringify(i);return n in this.map||(this.map[n]=this.unique.length,this.unique.push(i)),this.map[n]}};function U(i,n){this.buffer=null,this.target=i,this.type=n,this.data=[]}U.prototype={compile:function(i){for(var n=[],e=0,t=1e4;e<this.data.length;e+=t)n=Array.prototype.concat.apply(n,this.data.slice(e,e+t));var l=this.data.length?n.length/this.data.length:0;if(l!=Math.round(l))throw new Error("buffer elements not of consistent size, average size is "+l);this.buffer=this.buffer||a.createBuffer(),this.buffer.length=n.length,this.buffer.spacing=l,a.bindBuffer(this.target,this.buffer),a.bufferData(this.target,new this.type(n),i||a.STATIC_DRAW)}};function T(i){i=i||{},this.vertexBuffers={},this.indexBuffers={},this.addVertexBuffer("vertices","gl_Vertex"),i.coords&&this.addVertexBuffer("coords","gl_TexCoord"),i.normals&&this.addVertexBuffer("normals","gl_Normal"),i.colors&&this.addVertexBuffer("colors","gl_Color"),(!("triangles"in i)||i.triangles)&&this.addIndexBuffer("triangles"),i.lines&&this.addIndexBuffer("lines")}T.prototype={addVertexBuffer:function(i,n){var e=this.vertexBuffers[n]=new U(a.ARRAY_BUFFER,Float32Array);e.name=i,this[i]=[]},addIndexBuffer:function(i){this.indexBuffers[i]=new U(a.ELEMENT_ARRAY_BUFFER,Uint16Array),this[i]=[]},compile:function(){for(var i in this.vertexBuffers){var n=this.vertexBuffers[i];n.data=this[n.name],n.compile()}for(var e in this.indexBuffers){var n=this.indexBuffers[e];n.data=this[e],n.compile()}},transform:function(i){if(this.vertices=this.vertices.map(function(e){return i.transformPoint(w.fromArray(e)).toArray()}),this.normals){var n=i.inverse().transpose();this.normals=this.normals.map(function(e){return n.transformVector(w.fromArray(e)).unit().toArray()})}return this.compile(),this},computeNormals:function(){this.normals||this.addVertexBuffer("normals","gl_Normal");for(var i=0;i<this.vertices.length;i++)this.normals[i]=new w;for(var i=0;i<this.triangles.length;i++){var n=this.triangles[i],e=w.fromArray(this.vertices[n[0]]),t=w.fromArray(this.vertices[n[1]]),l=w.fromArray(this.vertices[n[2]]),c=t.subtract(e).cross(l.subtract(e)).unit();this.normals[n[0]]=this.normals[n[0]].add(c),this.normals[n[1]]=this.normals[n[1]].add(c),this.normals[n[2]]=this.normals[n[2]].add(c)}for(var i=0;i<this.vertices.length;i++)this.normals[i]=this.normals[i].unit().toArray();return this.compile(),this},computeWireframe:function(){for(var i=new q,n=0;n<this.triangles.length;n++)for(var e=this.triangles[n],t=0;t<e.length;t++){var l=e[t],c=e[(t+1)%e.length];i.add([Math.min(l,c),Math.max(l,c)])}return this.lines||this.addIndexBuffer("lines"),this.lines=i.unique,this.compile(),this},getAABB:function(){var i={min:new w(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)};i.max=i.min.negative();for(var n=0;n<this.vertices.length;n++){var e=w.fromArray(this.vertices[n]);i.min=w.min(i.min,e),i.max=w.max(i.max,e)}return i},getBoundingSphere:function(){for(var i=this.getAABB(),n={center:i.min.add(i.max).divide(2),radius:0},e=0;e<this.vertices.length;e++)n.radius=Math.max(n.radius,w.fromArray(this.vertices[e]).subtract(n.center).length());return n}},T.plane=function(i){i=i||{};for(var n=new T(i),e=i.detailX||i.detail||1,t=i.detailY||i.detail||1,l=i.width||2,c=i.height||2,m=0;m<=t;m++)for(var h=m/t,x=0;x<=e;x++){var g=x/e;if(n.vertices.push([(g-.5)*l,(h-.5)*c,0]),n.coords&&n.coords.push([g,h]),n.normals&&n.normals.push([0,0,1]),x<e&&m<t){var f=x+m*(e+1);n.triangles.push([f,f+1,f+e+1]),n.triangles.push([f+e+1,f+1,f+e+2])}}return n.compile(),n};var z=[[0,4,2,6,-1,0,0],[1,3,5,7,1,0,0],[0,1,4,5,0,-1,0],[2,6,3,7,0,1,0],[0,2,1,3,0,0,-1],[4,5,6,7,0,0,1]];function P(i){return new w((i&1)*2-1,(i&2)-1,(i&4)/2-1)}T.cube=function(i){for(var n=new T(i),e=i&&i.width||2,t=i&&i.height||2,l=i&&i.depth||2,c=0;c<z.length;c++){for(var m=z[c],h=c*4,x=0;x<4;x++){var g=m[x];const f=P(g).toArray();f[0]*=e/2,f[1]*=t/2,f[2]*=l/2,n.vertices.push(f),n.coords&&n.coords.push([x&1,(x&2)/2]),n.normals&&n.normals.push(m.slice(4,7))}n.triangles.push([h,h+1,h+2]),n.triangles.push([h+2,h+1,h+3])}return n.compile(),n},T.sphere=function(i){function n(O,J,re){return x?[O,re,J]:[O,J,re]}function e(O){return O+(O-O*O)/2}i=i||{};for(var t=new T(i),l=new q,c=i.detail||6,m=0;m<8;m++)for(var h=P(m),x=h.x*h.y*h.z>0,g=[],f=0;f<=c;f++){for(var E=0;f+E<=c;E++){var R=f/c,S=E/c,C=(c-f-E)/c,W={vertex:new w(e(R),e(S),e(C)).unit().multiply(h).toArray()};t.coords&&(W.coord=h.y>0?[1-R,C]:[C,1-R]),g.push(l.add(W))}if(f>0)for(var E=0;f+E<=c;E++){var R=(f-1)*(c+1)+(f-1-(f-1)*(f-1))/2+E,S=f*(c+1)+(f-f*f)/2+E;t.triangles.push(n(g[R],g[R+1],g[S])),f+E<c&&t.triangles.push(n(g[S],g[R+1],g[S+1]))}}return t.vertices=l.unique.map(function(O){return O.vertex}),t.coords&&(t.coords=l.unique.map(function(O){return O.coord})),t.normals&&(t.normals=t.vertices),t.compile(),t},T.load=function(i,n){n=n||{},"coords"in n||(n.coords=!!i.coords),"normals"in n||(n.normals=!!i.normals),"colors"in n||(n.colors=!!i.colors),"triangles"in n||(n.triangles=!!i.triangles),"lines"in n||(n.lines=!!i.lines);var e=new T(n);return e.vertices=i.vertices,e.coords&&(e.coords=i.coords),e.normals&&(e.normals=i.normals),e.colors&&(e.colors=i.colors),e.triangles&&(e.triangles=i.triangles),e.lines&&(e.lines=i.lines),e.compile(),e};function k(i,n,e){this.t=arguments.length?i:Number.MAX_VALUE,this.hit=n,this.normal=e}k.prototype={mergeWith:function(i){i.t>0&&i.t<this.t&&(this.t=i.t,this.hit=i.hit,this.normal=i.normal)}};function G(){var i=a.getParameter(a.VIEWPORT),n=a.modelviewMatrix.m,e=new w(n[0],n[4],n[8]),t=new w(n[1],n[5],n[9]),l=new w(n[2],n[6],n[10]),c=new w(n[3],n[7],n[11]);this.eye=new w(-c.dot(e),-c.dot(t),-c.dot(l));var m=i[0],h=m+i[2],x=i[1],g=x+i[3];this.ray00=a.unProject(m,x,1).subtract(this.eye),this.ray10=a.unProject(h,x,1).subtract(this.eye),this.ray01=a.unProject(m,g,1).subtract(this.eye),this.ray11=a.unProject(h,g,1).subtract(this.eye),this.viewport=i}G.prototype={getRayForPixel:function(i,n){i=(i-this.viewport[0])/this.viewport[2],n=1-(n-this.viewport[1])/this.viewport[3];var e=w.lerp(this.ray00,this.ray10,i),t=w.lerp(this.ray01,this.ray11,i);return w.lerp(e,t,n).unit()}},G.hitTestBox=function(i,n,e,t){var l=e.subtract(i).divide(n),c=t.subtract(i).divide(n),m=w.min(l,c),h=w.max(l,c),x=m.max(),g=h.min();if(x>0&&x<g){var f=1e-6,E=i.add(n.multiply(x));return e=e.add(f),t=t.subtract(f),new k(x,E,new w((E.x>t.x)-(E.x<e.x),(E.y>t.y)-(E.y<e.y),(E.z>t.z)-(E.z<e.z)))}return null},G.hitTestSphere=function(i,n,e,t){var l=i.subtract(e),c=n.dot(n),m=2*n.dot(l),h=l.dot(l)-t*t,x=m*m-4*c*h;if(x>0){var g=(-m-Math.sqrt(x))/(2*c),f=i.add(n.multiply(g));return new k(g,f,f.subtract(e).divide(t))}return null},G.hitTestTriangle=function(i,n,e,t,l){var c=t.subtract(e),m=l.subtract(e),h=c.cross(m).unit(),x=h.dot(e.subtract(i))/h.dot(n);if(x>0){var g=i.add(n.multiply(x)),f=g.subtract(e),E=m.dot(m),R=m.dot(c),S=m.dot(f),C=c.dot(c),W=c.dot(f),O=E*C-R*R,J=(C*S-R*W)/O,re=(E*W-R*S)/O;if(J>=0&&re>=0&&J+re<=1)return new k(x,g,h)}return null};function V(i,n,e){let t;for(;(t=i.exec(n))!=null;)e(t)}var I="LIGHTGL";function D(i,n){function e(E){var R=document.getElementById(E);return R?R.text:E}i=e(i),n=e(n);var t="    uniform mat3 gl_NormalMatrix;    uniform mat4 gl_ModelViewMatrix;    uniform mat4 gl_ProjectionMatrix;    uniform mat4 gl_ModelViewProjectionMatrix;    uniform mat4 gl_ModelViewMatrixInverse;    uniform mat4 gl_ProjectionMatrixInverse;    uniform mat4 gl_ModelViewProjectionMatrixInverse;  ",l=`#version 300 es
    `+t+"    in vec4 gl_Vertex;    in vec4 gl_TexCoord;    in vec3 gl_Normal;    in vec4 gl_Color;    vec4 ftransform() {      return gl_ModelViewProjectionMatrix * gl_Vertex;    }  ",c=`#version 300 es
    precision highp float;
  `+t,m=i+n,h={};V(/\b(gl_[^;]*)\b;/g,t,function(E){var R=E[1];if(m.indexOf(R)!=-1){var S=R.replace(/[a-z_]/g,"");h[S]=I+R}}),m.indexOf("ftransform")!=-1&&(h.MVPM=I+"gl_ModelViewProjectionMatrix"),this.usedMatrices=h;function x(E,R){var S={},C=/^((\s*\/\/.*\n|\s*#extension.*\n)+)[^]*$/.exec(R);return R=C?C[1]+E+R.substr(C[1].length):E+R,V(/\bgl_\w+\b/g,E,function(W){W in S||(R=R.replace(new RegExp("\\b"+W+"\\b","g"),I+W),S[W]=!0)}),R}i=x(l,i),n=x(c,n);function g(E,R){var S=a.createShader(E);if(a.shaderSource(S,R),a.compileShader(S),!a.getShaderParameter(S,a.COMPILE_STATUS))throw new Error("compile error: "+a.getShaderInfoLog(S));return S}if(this.program=a.createProgram(),a.attachShader(this.program,g(a.VERTEX_SHADER,i)),a.attachShader(this.program,g(a.FRAGMENT_SHADER,n)),a.linkProgram(this.program),!a.getProgramParameter(this.program,a.LINK_STATUS))throw new Error("link error: "+a.getProgramInfoLog(this.program));this.attributes={},this.uniformLocations={};var f={};V(/uniform\s+sampler(1D|2D|3D|Cube)\s+(\w+)\s*;/g,i+n,function(E){f[E[2]]=1}),this.isSampler=f}function K(i){var n=Object.prototype.toString.call(i);return n=="[object Array]"||n=="[object Float32Array]"}function ee(i){var n=Object.prototype.toString.call(i);return n=="[object Number]"||n=="[object Boolean]"}new y,new y,D.prototype={uniforms:function(i){a.useProgram(this.program);for(var n in i){var e=this.uniformLocations[n]||a.getUniformLocation(this.program,n);if(e){this.uniformLocations[n]=e;var t=i[n];if(t instanceof w?t=[t.x,t.y,t.z]:t instanceof y&&(t=t.m),K(t))switch(t.length){case 1:a.uniform1fv(e,new Float32Array(t));break;case 2:a.uniform2fv(e,new Float32Array(t));break;case 3:a.uniform3fv(e,new Float32Array(t));break;case 4:a.uniform4fv(e,new Float32Array(t));break;case 9:a.uniformMatrix3fv(e,!1,new Float32Array([t[0],t[3],t[6],t[1],t[4],t[7],t[2],t[5],t[8]]));break;case 16:a.uniformMatrix4fv(e,!1,new Float32Array([t[0],t[4],t[8],t[12],t[1],t[5],t[9],t[13],t[2],t[6],t[10],t[14],t[3],t[7],t[11],t[15]]));break;default:throw new Error(`don't know how to load uniform "`+n+'" of length '+t.length)}else if(ee(t))(this.isSampler[n]?a.uniform1i:a.uniform1f).call(a,e,t);else throw new Error('attempted to set uniform "'+n+'" to invalid value '+t)}}return this},draw:function(i,n){this.drawBuffers(i.vertexBuffers,i.indexBuffers[n==a.LINES?"lines":"triangles"],arguments.length<2?a.TRIANGLES:n)},drawBuffers:function(i,n,e){var t=this.usedMatrices,l=a.modelviewMatrix,c=a.projectionMatrix,m=t.MVMI||t.NM?l.inverse():null,h=t.PMI?c.inverse():null,x=t.MVPM||t.MVPMI?c.multiply(l):null,g={};if(t.MVM&&(g[t.MVM]=l),t.MVMI&&(g[t.MVMI]=m),t.PM&&(g[t.PM]=c),t.PMI&&(g[t.PMI]=h),t.MVPM&&(g[t.MVPM]=x),t.MVPMI&&(g[t.MVPMI]=x.inverse()),t.NM){var f=m.m;g[t.NM]=[f[0],f[4],f[8],f[1],f[5],f[9],f[2],f[6],f[10]]}this.uniforms(g);var E=0;for(var R in i){var S=i[R],C=this.attributes[R]||a.getAttribLocation(this.program,R.replace(/^(gl_.*)$/,I+"$1"));C==-1||!S.buffer||(this.attributes[R]=C,a.bindBuffer(a.ARRAY_BUFFER,S.buffer),a.enableVertexAttribArray(C),a.vertexAttribPointer(C,S.buffer.spacing,a.FLOAT,!1,0,0),E=S.buffer.length/S.buffer.spacing)}for(var R in this.attributes)R in i||a.disableVertexAttribArray(this.attributes[R]);return E&&(!n||n.buffer)&&(n?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,n.buffer),a.drawElements(e,n.buffer.length,a.UNSIGNED_SHORT,0)):a.drawArrays(e,0,E)),this}};function F(i,n,e){e=e||{},this.width=i,this.height=n,this.id=a.createTexture();let t=e.type||a.UNSIGNED_BYTE,l=e.format||a.RGBA,c=a.RGBA;const m=a.getExtension("EXT_color_buffer_float"),h=a.getExtension("EXT_color_buffer_half_float");t===a.FLOAT?(m?a instanceof WebGL2RenderingContext&&(l=a.RGBA32F):(console.warn("FLOAT textures not renderable, falling back to UNSIGNED_BYTE"),t=a.UNSIGNED_BYTE,l=a.RGBA8),c=a.RGBA):t===a.HALF_FLOAT_OES?(h?a instanceof WebGL2RenderingContext&&(l=a.RGBA16F):(console.warn("HALF_FLOAT textures not renderable, falling back to UNSIGNED_BYTE"),t=a.UNSIGNED_BYTE,l=a.RGBA8),c=a.RGBA):(t=a.UNSIGNED_BYTE,l=a.RGBA8,c=a.RGBA);const x=e.filter||e.magFilter||a.LINEAR,g=e.filter||e.minFilter||a.LINEAR;a.bindTexture(a.TEXTURE_2D,this.id),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,1),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER,x),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,g),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,e.wrap||e.wrapS||a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,e.wrap||e.wrapT||a.CLAMP_TO_EDGE),a instanceof WebGL2RenderingContext?a.texImage2D(a.TEXTURE_2D,0,l,i,n,0,c,t,null):a.texImage2D(a.TEXTURE_2D,0,c,i,n,0,c,t,null),a.bindTexture(a.TEXTURE_2D,null),this.format=c,this.type=t,this.internalFormat=l}var X,Y,j;F.prototype={bind:function(i){a.activeTexture(a.TEXTURE0+(i||0)),a.bindTexture(a.TEXTURE_2D,this.id)},unbind:function(i){a.activeTexture(a.TEXTURE0+(i||0)),a.bindTexture(a.TEXTURE_2D,null)},canDrawTo:function(){X=X||a.createFramebuffer(),a.bindFramebuffer(a.FRAMEBUFFER,X),a.framebufferTexture2D(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,this.id,0);var i=a.checkFramebufferStatus(a.FRAMEBUFFER)==a.FRAMEBUFFER_COMPLETE;return a.bindFramebuffer(a.FRAMEBUFFER,null),i},drawTo:function(i){a.getExtension("EXT_color_buffer_float")||console.warn("EXT_color_buffer_float not available!");var e=a.getParameter(a.VIEWPORT);if(X=X||a.createFramebuffer(),Y=Y||a.createRenderbuffer(),a.bindFramebuffer(a.FRAMEBUFFER,X),a.bindRenderbuffer(a.RENDERBUFFER,Y),(this.width!=Y.width||this.height!=Y.height)&&(Y.width=this.width,Y.height=this.height,a.renderbufferStorage(a.RENDERBUFFER,a.DEPTH_COMPONENT16,this.width,this.height)),a.framebufferTexture2D(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,this.id,0),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.RENDERBUFFER,Y),a.checkFramebufferStatus(a.FRAMEBUFFER)!=a.FRAMEBUFFER_COMPLETE)throw new Error("Rendering to this texture is not supported (incomplete framebuffer)");a.viewport(0,0,this.width,this.height),i(),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindRenderbuffer(a.RENDERBUFFER,null),a.viewport(e[0],e[1],e[2],e[3])},swapWith:function(i){var n;n=i.id,i.id=this.id,this.id=n,n=i.width,i.width=this.width,this.width=n,n=i.height,i.height=this.height,this.height=n}},F.fromImage=function(i,n){n=n||{};var e=new F(i.width,i.height,n);a.bindTexture(a.TEXTURE_2D,e.id);try{a.texImage2D(a.TEXTURE_2D,0,e.format,e.format,e.type,i)}catch{throw location.protocol=="file:"?new Error('image not loaded for security reasons (serve this page over "http://" instead)'):new Error("image not loaded for security reasons (image must originate from the same domain as this page or use Cross-Origin Resource Sharing)")}return n.minFilter&&n.minFilter!=a.NEAREST&&n.minFilter!=a.LINEAR&&a.generateMipmap(a.TEXTURE_2D),a.bindTexture(a.TEXTURE_2D,null),e},F.fromURL=function(i,n){j=j||function(){var c=document.createElement("canvas").getContext("2d");c.canvas.width=c.canvas.height=128;for(var m=0;m<c.canvas.height;m+=16)for(var h=0;h<c.canvas.width;h+=16)c.fillStyle=(h^m)&16?"#FFF":"#DDD",c.fillRect(h,m,16,16);return c.canvas}();var e=F.fromImage(j,n),t=new Image,l=a;return t.onload=function(){l.makeCurrent(),F.fromImage(t,n).swapWith(e)},t.src=i,e},F.canUseFloatingPointTextures=function(){return!!a.getExtension("OES_texture_float")},F.canUseFloatingPointLinearFiltering=function(){return!!a.getExtension("OES_texture_float_linear")},F.canUseHalfFloatingPointTextures=function(){return!!a.getExtension("OES_texture_half_float")},F.canUseHalfFloatingPointLinearFiltering=function(){return!!a.getExtension("OES_texture_half_float_linear")};function w(i,n,e){this.x=i||0,this.y=n||0,this.z=e||0}return w.prototype={negative:function(){return new w(-this.x,-this.y,-this.z)},add:function(i){return i instanceof w?new w(this.x+i.x,this.y+i.y,this.z+i.z):new w(this.x+i,this.y+i,this.z+i)},subtract:function(i){return i instanceof w?new w(this.x-i.x,this.y-i.y,this.z-i.z):new w(this.x-i,this.y-i,this.z-i)},multiply:function(i){return i instanceof w?new w(this.x*i.x,this.y*i.y,this.z*i.z):new w(this.x*i,this.y*i,this.z*i)},divide:function(i){return i instanceof w?new w(this.x/i.x,this.y/i.y,this.z/i.z):new w(this.x/i,this.y/i,this.z/i)},equals:function(i){return this.x==i.x&&this.y==i.y&&this.z==i.z},dot:function(i){return this.x*i.x+this.y*i.y+this.z*i.z},cross:function(i){return new w(this.y*i.z-this.z*i.y,this.z*i.x-this.x*i.z,this.x*i.y-this.y*i.x)},length:function(){return Math.sqrt(this.dot(this))},unit:function(){return this.divide(this.length())},min:function(){return Math.min(Math.min(this.x,this.y),this.z)},max:function(){return Math.max(Math.max(this.x,this.y),this.z)},toAngles:function(){return{theta:Math.atan2(this.z,this.x),phi:Math.asin(this.y/this.length())}},angleTo:function(i){return Math.acos(this.dot(i)/(this.length()*i.length()))},toArray:function(i){return[this.x,this.y,this.z].slice(0,i||3)},clone:function(){return new w(this.x,this.y,this.z)},init:function(i,n,e){return this.x=i,this.y=n,this.z=e,this}},w.negative=function(i,n){return n.x=-i.x,n.y=-i.y,n.z=-i.z,n},w.add=function(i,n,e){return n instanceof w?(e.x=i.x+n.x,e.y=i.y+n.y,e.z=i.z+n.z):(e.x=i.x+n,e.y=i.y+n,e.z=i.z+n),e},w.subtract=function(i,n,e){return n instanceof w?(e.x=i.x-n.x,e.y=i.y-n.y,e.z=i.z-n.z):(e.x=i.x-n,e.y=i.y-n,e.z=i.z-n),e},w.multiply=function(i,n,e){return n instanceof w?(e.x=i.x*n.x,e.y=i.y*n.y,e.z=i.z*n.z):(e.x=i.x*n,e.y=i.y*n,e.z=i.z*n),e},w.divide=function(i,n,e){return n instanceof w?(e.x=i.x/n.x,e.y=i.y/n.y,e.z=i.z/n.z):(e.x=i.x/n,e.y=i.y/n,e.z=i.z/n),e},w.cross=function(i,n,e){return e.x=i.y*n.z-i.z*n.y,e.y=i.z*n.x-i.x*n.z,e.z=i.x*n.y-i.y*n.x,e},w.unit=function(i,n){var e=i.length();return n.x=i.x/e,n.y=i.y/e,n.z=i.z/e,n},w.fromAngles=function(i,n){return new w(Math.cos(i)*Math.cos(n),Math.sin(n),Math.sin(i)*Math.cos(n))},w.randomDirection=function(){return w.fromAngles(Math.random()*Math.PI*2,Math.asin(Math.random()*2-1))},w.min=function(i,n){return new w(Math.min(i.x,n.x),Math.min(i.y,n.y),Math.min(i.z,n.z))},w.max=function(i,n){return new w(Math.max(i.x,n.x),Math.max(i.y,n.y),Math.max(i.z,n.z))},w.lerp=function(i,n,e){return n.subtract(i).multiply(e).add(i)},w.fromArray=function(i){return new w(i[0],i[1],i[2])},w.angleBetween=function(i,n){return i.angleTo(n)},r}();class Te{constructor({tx:r=0,ty:s=0,zoom:d=4,ax:u=-25,ay:v=-200,az:_=0,fov:A=45}){this.tx=r,this.ty=s,this.zoom=d,this.ax=u,this.ay=v,this.az=_,this.fov=A}}const Fe=.3,Pe=.15,De=1,lt=10,Xe=Math.ceil(lt/4),He=10,we=`
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
            float amplitude = .2;
            float g = amplitude * gaussian(z, wr, .25);
            float w = exp(g - amplitude) - exp(-amplitude);
            return w;
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

`;var Ee,Ye;class _e{constructor(r,s,d,u){xe(this,Ee);if(this.gl=r,this.calibration=d,this.copyVideo=!1,this.show=!1,this.videoStartTime=u,r===null){alert("Unable to initialize WebGL. Your browser or machine may not support it.");return}r.clearColor(0,0,0,1),r.clear(r.COLOR_BUFFER_BIT),this.shader=new p.Shader(`
    out highp vec2 vTextureCoord;
    out vec3 waterNormal;
    out vec3 sparkPlaneNormal;
    out vec3 sparkDirection;
    out vec2 posScreen;

    uniform float ratio_screen;
    uniform float dx_screen;

    void main(void) {
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
    uniform bool sparksEnabled;
    uniform vec3 poolSize;
    uniform bool thresholdBlending;
    uniform float blendingThreshold;
    uniform float opacity;
    uniform float distanceFixed;
    uniform bool hideObstructions;
    uniform float hideObstructionThreshold;

    `+ct+we+`

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
        // if (max(max(texelColor.r, texelColor.g), texelColor.b) < .2){
        //     fragColor = vec4(0., 0., 0., 0.);
        //     return;
        // }
        
        vec3 waterColor = vec3(.294, .812, 1.);
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
`),this.mesh=p.Mesh.plane({width:2,height:2,coords:!0,normals:!0}),this.mesh.transform(p.Matrix.rotate(90,1,0,0)),this.mesh.transform(p.Matrix.translate(0,.1,0)),this.programInfo=null,this.texture=this.initTexture(),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!0),s!=""&&(this.video=this.setupVideo(s))}render(){const r=o.params.visualizations.sparks,s=o.params.simulation.poolSize;if(!o.params.video.show)return;this.copyVideo&&this.updateTexture(),(!this.mesh.vertexBuffers||!this.mesh.vertexBuffers.vertex)&&this.mesh.compile(),this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture);const u=16*this.gl.canvas.height/9,v=(this.gl.canvas.width-u)/2;N.swimmersAttributesTexture&&N.swimmersAttributesTexture.bind(1),this.shader.uniforms({ratio_screen:u/this.gl.canvas.width,dx_screen:v/this.gl.canvas.width,uSampler:0,swimmersHelperFunctions:1,screen:4,iTime:o.getRaceTime(),poolSize:[s.x,s.y,s.z],iResolution:[this.gl.canvas.width,this.gl.canvas.height],sparksEnabled:r.enabled,sparksGlow:r.glow,sparksGlowOffset:r.glowOffset,sparksStroke:r.stroke,sparksNumber:r.num,sparksLengthFactor:r.lengthFactor,sparksSizeFactor:r.sizeFactor,fov:r.fov,thresholdBlending:o.params.video.thresholdBlending,blendingThreshold:o.params.video.blendingThreshold,opacity:o.params.video.opacity,distanceFixed:o.distanceFixed,hideObstructions:o.params.video.hideObstructions,hideObstructionThreshold:o.params.video.hideObstructionThreshold}).draw(this.mesh),this.gl.disable(this.gl.BLEND),this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height)}setTime(r){this.copyVideo&&(this.video.currentTime=r)}initTexture(){const r=this.gl.createTexture();this.gl.bindTexture(this.gl.TEXTURE_2D,r);const s=0,d=this.gl.RGBA,u=1,v=1,_=0,A=this.gl.RGBA,M=this.gl.UNSIGNED_BYTE,L=new Uint8Array([0,0,255,255]);return this.gl.texImage2D(this.gl.TEXTURE_2D,s,d,u,v,_,A,M,L),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),r}updateTexture(){const s=this.gl.RGBA,d=this.gl.RGBA,u=this.gl.UNSIGNED_BYTE;this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture),this.gl.texImage2D(this.gl.TEXTURE_2D,0,s,d,u,this.video)}setupVideo(r){const s=document.createElement("video");let d=!1,u=!1;s.playsInline=!0,s.muted=!0,s.loop=!1,s.addEventListener("playing",()=>{d=!0,_()},!0),s.addEventListener("timeupdate",()=>{u=!0,_()},!0),s.src=r,s.play();const v=this,_=()=>{d&&u&&(v.copyVideo=!0,s.paused||$(this,Ee,Ye).call(this))};return s}}Ee=new WeakSet,Ye=function(){this.hasPausedFirstTime||(this.hasPausedFirstTime=!0,this.video.pause())};class be{constructor(r,{poolSize:s=new GL.Vector(2,2),waterResolution:d=new GL.Vector(256,256),thresholdBlending:u=!1,numSwimmers:v=1,dataFolder:_=null}){this.title=r,this.videos=[],this.poolSize=s,this.waterResolution=d,this.numSwimmers=v,this.thresholdBlending=u,this.dataFolder=_}addVideo(r){this.videos.push(r)}async parseData(r){for(let s=0;s<r.length;s++)await r[s].parseData(this.dataFolder+s+".csv")}}const ke=new p.Vector(0,-4,0);class pe{constructor(r,s){this.initCenter=new p.Vector(r.x,r.y,r.z),this.center=new p.Vector(r.x,r.y,r.z),this.oldCenter=new p.Vector(r.x,r.y,r.z),this.radius=s,this.cinematic=!1,this.velocity=new p.Vector(0,0,0),this.acceleration=new p.Vector(0,0,0),this.mass=4/3*Math.PI*Math.pow(s,3)*1e3,this.invMass=1/this.mass,this.radiusSquared=s*s,this.mesh=p.Mesh.sphere({detail:10}),this.followTarget=!1}update(r){if(this.moved||(this.oldCenter=new p.Vector(this.center.x,this.center.y,this.center.z)),this.moved=!1,this.cinematic){if(this.followTarget||(this.velocity=new p.Vector(0,0,0)),!this.targetPos||!this.followTarget)return;let s=r/this.targetTime;s=Math.min(Math.max(s,0),1),this.center=this.center.multiply(1-s).add(this.targetPos.multiply(s)),this.velocity=this.center.subtract(this.oldCenter).multiply(1/r),this.targetTime-=r,this.targetTime<0&&(this.targetPos=null)}else{const s=Math.max(0,Math.min(1,(this.radius-this.center.y)/(2*this.radius))),d=ke.multiply(-o.params.simulation.buoyancyFactor*this.mass*s),u=this.velocity.unit().multiply(-1e3*this.radiusSquared*s*this.velocity.dot(this.velocity));this.addForce(u),this.addForce(d),this.addForce(ke.multiply(this.mass)),this.velocity=this.velocity.add(this.acceleration.multiply(r)),this.acceleration=new p.Vector(0,0,0),this.center=this.center.add(this.velocity.multiply(r)),this.center.y<this.radius-o.params.simulation.poolSize.y&&(this.center.y=this.radius-1,this.velocity.y=Math.abs(this.velocity.y)*.7)}}setTarget(r,s){this.targetPos=r,this.targetTime=s}addForce(r){this.cinematic?console.warn("Trying to add force to a cinematic sphere."):this.acceleration=this.acceleration.add(r.multiply(this.invMass))}move(r){this.moved=!0,this.oldCenter=new p.Vector(this.center.x,this.center.y,this.center.z),this.center=new p.Vector(r.x,r.y,r.z),this.cinematic||console.warn("Moving a non cinematic sphere.")}}class dt{constructor(){this.mesh=new p.Mesh.plane({width:2,height:2,coords:!0,normals:!0}),this.waterTexture=null,this.shader=new p.Shader(`
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
        `)}updateFoam(r){if(!this.waterTexture){console.log("NO WATER TO UPDATE FOAM");return}this.foamTexNext.swapWith(this.foamTexPrev),this.foamTexNext.drawTo(()=>{this.foamTexPrev.bind(0),o.water.textureA.bind(1),this.shader.uniforms({foamTexPrev:0,water:1,dt:r,seed:o.time,poolSize:[o.params.simulation.poolSize.x,o.params.simulation.poolSize.y,o.params.simulation.poolSize.z],timeVariation:o.params.simulation.foam.timeVariation,spaceVariation:o.params.simulation.foam.spaceVariation,velThreshold:o.params.simulation.foam.velThreshold,velMax:o.params.simulation.foam.velMax,dispersion:o.params.simulation.foam.dispersion,attenuation:o.params.simulation.foam.attenuation}).draw(this.mesh)})}resetTextures(r,s,d){this.foamTexPrev=new p.Texture(r,s,{type:o.gl.FLOAT,filter:o.gl.LINEAR}),this.foamTexNext=new p.Texture(r,s,{type:o.gl.FLOAT,filter:o.gl.LINEAR}),this.waterTexture=d}}function ae(a,r=null){this.gl=a,this.visualizationWavesEnabled=!0,this.sqrt_2_PI=Math.sqrt(2*Math.PI),this.foam=new dt;var s=`
    out vec2 coord;
    uniform vec2 invPoolSizeVertex;
    void main() {
      coord = gl_Vertex.xy * invPoolSizeVertex + 0.5;
      gl_Position = vec4(gl_Vertex.xy * 2. * invPoolSizeVertex, 0., 1.0);
    }
  `;this.reset(r),p.Texture.canUseFloatingPointTextures(),this.dropShader=new p.Shader(s,`
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
  `),this.updateShader=new p.Shader(s,`
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
  `),this.normalShader=new p.Shader(s,`
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
  `),this.visualizationWavesShader=new p.Shader(s,`
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
    `)}ae.prototype.resetTextures=function(){const a=this.gl;this.textureA&&a.deleteTexture(this.textureA.id),this.textureB&&a.deleteTexture(this.textureB.id),this.textureA=new p.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:r}),this.textureB=new p.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:r}),this.foam.resetTextures(this.W,this.H,this.textureA),this.areaConservationTexture=new p.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:r}),this.showAreaConservedGrid=!1,this.showProjectionGrid=!1,this.invPoolSize=new p.Vector(1/o.params.simulation.poolSize.x,1/o.params.simulation.poolSize.y,1/o.params.simulation.poolSize.z);var r=p.Texture.canUseFloatingPointLinearFiltering()?this.gl.LINEAR:this.gl.NEAREST;(!this.textureA.canDrawTo()||!this.textureB.canDrawTo())&&p.Texture.canUseHalfFloatingPointTextures()&&(console.log("No draw"),r=p.Texture.canUseHalfFloatingPointLinearFiltering()?this.gl.LINEAR:this.gl.NEAREST,this.textureA=new p.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:r}),this.textureB=new p.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:r}))};ae.prototype.reset=function(a=null){this.WR_position=1e5,this.prev_WR_position=0,a!==null?(console.log("resolution.y : "+a.y),this.W=Math.round(a.x),this.H=Math.round(a.y),console.log("Using custom resolution:",this.W,this.H)):(this.W=256,this.H=256),N.reset(new p.Vector(this.W,this.H)),this.plane=p.Mesh.plane({detail:255,width:o.params.simulation.poolSize.x,height:o.params.simulation.poolSize.z}),this.delta=new p.Vector(1/this.W,1/this.H),this.resetTextures()};ae.prototype.addDrop=function(a,r,s,d){var u=this;this.textureB.drawTo(function(){u.textureA.bind(),u.dropShader.uniforms({invPoolSizeVertex:[u.invPoolSize.x,u.invPoolSize.z],center:[a,r],radius:s,strength:d,poolSize:[o.params.simulation.poolSize.x,o.params.simulation.poolSize.y,o.params.simulation.poolSize.z]}).draw(u.plane)}),this.textureB.swapWith(this.textureA)};ae.prototype.addOrRemoveVisualizationWaves=function(a){if(this.prev_WR_position=this.WR_position,this.WR_position=o.getRaceTime()*2.155,this.WR_position>o.params.simulation.poolSize.z&&(this.WR_position=2*o.params.simulation.poolSize.z-this.WR_position),!(!this.visualizationWavesEnabled||!N.raceHasStarted)){var s=this;this.textureB.drawTo(function(){s.textureA.bind();const d=N.getAttributesTexture();d&&d.bind(1),s.visualizationWavesShader.uniforms({swimmersAttributesTexture:1,showDivingDistance:o.params.visualizations.showDivingDistance,showWR:o.params.visualizations.showWR,invPoolSizeVertex:[s.invPoolSize.x,s.invPoolSize.z],poolSize:[o.params.simulation.poolSize.x,o.params.simulation.poolSize.y,o.params.simulation.poolSize.z],wr:s.WR_position,sqrt_2_PI:s.sqrt_2_PI,add:a,swimmersNumber:o.swimmers.length,time:o.getRaceTime(),t:o.time,amplitudeFactor:o.params.quiver.amplitudeFactor,frequencyFactor:o.params.quiver.frequencyFactor,amplitude:o.params.quiver.amplitude,omega0:o.params.quiver.omega,waveLength0:o.params.quiver.waveLength}).draw(s.plane)}),this.textureB.swapWith(this.textureA)}};ae.prototype.updateSpheres=function(a){if(o.params.simulation.optimized)N.attributes.draw(),this.textureB.drawTo(()=>{this.textureA.bind(),N.bindDisplacementTexture(1),N.bindOldDisplacementTexture(2),this.sphereShader.uniforms({oldDisplacementTexture:2,displacementTexture:1,invPoolSizeVertex:[this.invPoolSize.x,this.invPoolSize.z],poolSize:[o.params.simulation.poolSize.x,o.params.simulation.poolSize.y,o.params.simulation.poolSize.z],optimized:!0}).draw(this.plane),this.textureB.swapWith(this.textureA),N.attributes.draw()});else{const r=[];o.swimmers.forEach(s=>s.spheres.forEach(d=>r.push(d)));for(let s=0;s<r.length;s++){const d=r[s];this.moveSphere(d.oldCenter,d.center,d.radius)}}};ae.prototype.moveSphere=function(a,r,s){var d=this;this.textureB.drawTo(function(){d.textureA.bind(),d.sphereShader.uniforms({invPoolSizeVertex:[d.invPoolSize.x,d.invPoolSize.z],oldCenter:a,newCenter:r,radius:s,poolSize:[o.params.simulation.poolSize.x,o.params.simulation.poolSize.y,o.params.simulation.poolSize.z],optimized:!1}).draw(d.plane)}),this.textureB.swapWith(this.textureA)};ae.prototype.stepSimulation=function(a){var r=this;this.textureB.drawTo(function(){r.textureA.bind();const s=N.getAttributesTexture();s&&s.bind(2),r.updateShader.uniforms({swimmersAttributesTexture:2,swimmersNumber:o.swimmers.length,invPoolSizeVertex:[r.invPoolSize.x,r.invPoolSize.z],delta:[r.delta.x,r.delta.y],time:o.time,wr:r.WR_position,prev_wr:r.prev_WR_position,poolSize:[o.params.simulation.poolSize.x,o.params.simulation.poolSize.y,o.params.simulation.poolSize.z],sqrt_2_PI:r.sqrt_2_PI,damping:o.params.simulation.waterDamping}).draw(r.plane)}),this.textureB.swapWith(this.textureA),o.params.simulation.foam.enabled&&this.foam.updateFoam(a),this.updateAreaConservation()};ae.prototype.updateNormals=function(){var a=this;this.textureB.drawTo(function(){a.textureA.bind(),a.normalShader.uniforms({invPoolSizeVertex:[a.invPoolSize.x,a.invPoolSize.z],delta:[a.delta.x,a.delta.y]}).draw(a.plane)}),this.textureB.swapWith(this.textureA)};ae.prototype.updateAreaConservation=function(){if(!o.params.visualizations.areaConservationEnabled)return;var a,r,s;if(this.textureA.type===this.gl.FLOAT)a=this.gl.FLOAT,r=Float32Array,s="EXT_color_buffer_float";else if(this.textureA.type===this.gl.HALF_FLOAT_OES)a=this.gl.HALF_FLOAT_OES,r=Uint16Array,s="EXT_color_buffer_half_float";else{console.warn("Unsupported texture type for reading");return}if(!this.gl.getExtension(s)){console.warn(s+" not available; cannot read pixels");return}this.fb||(this.fb=this.gl.createFramebuffer()),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.fb),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,this.textureA.id,0);const d=this.gl.checkFramebufferStatus(this.gl.FRAMEBUFFER);if(d!==this.gl.FRAMEBUFFER_COMPLETE){console.error("Framebuffer incomplete: "+d+" for texture type "+this.textureA.type),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null);return}this.gl.pixelStorei(this.gl.PACK_ALIGNMENT,1);const u=new r(this.W*this.H*4),v=new Float32Array(this.W*this.H*4);this.gl.readPixels(0,0,this.W,this.H,this.gl.RGBA,a,u);for(let B=0;B<this.W;B++)v[B*4+1]=1;const _=o.params.simulation.poolSize.x/this.W,A=o.params.simulation.poolSize.z/this.H,M=_*_,L=A*A;if(this.textureA.type===this.gl.FLOAT){for(let B=0;B<this.H;B+=1)for(let y=0;y<this.W;y+=1){const q=(B*this.W+y)*4,U=((this.H-1-B)*this.W+y)*4,T=v[U],z=v[U+1];if(y+1<this.W){const P=u[q]-u[q+4],k=Math.sqrt(P*P+M);v[U+4]=T+k}if(B+1<this.H){const P=u[q]-u[q+this.W*4],k=Math.sqrt(P*P+L);v[U-4*this.W+1]=z+k}}this.gl.bindTexture(this.gl.TEXTURE_2D,this.areaConservationTexture.id),this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT,1),this.gl.texSubImage2D(this.gl.TEXTURE_2D,0,0,0,this.W,this.H,this.gl.RGBA,this.gl.FLOAT,v)}this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.bindTexture(this.gl.TEXTURE_2D,null)};function Oe(a){const r={};for(let s=0;s<a.length;s++)r[a[s]]=s;return r}const oe=new p.Vector(1e3,0,-1e3),Ve=["none","only medals","all"],Ue=["neighbours","per swimmer"],mt=["none","cycle frequency","speed","acceleration"],ht={none:{value:0,name:"PARAMETER_NONE"},"cycle frequency":{value:1,name:"PARAMETER_CYCLES"},speed:{value:2,name:"PARAMETER_SPEED"},acceleration:{value:3,name:"PARAMETER_ACCELERATION"}},ut=["realistic","height field","lambert","toon"],ft={realistic:{value:0,name:"RENDERING_REALISTIC"},"height field":{value:1,name:"RENDERING_HEIGHT_FIELD"},lambert:{value:2,name:"RENDERING_LAMBERT"},toon:{value:3,name:"RENDERING_TOON"}};var ie,je,Ke,Me,Ze;class pt{constructor(){xe(this,ie);this.params={numSteps:2,fov:45,visualizations:{enabled:!0,showFlags:!0,showWR:!1,showSpeed:!1,showDivingDistance:!0,showFinishTimes:!1,customWaterPerturbation:"none",waterColorParameter:"none",customParametersList:mt,customParametersDict:ht,PARAMETER_NONE:"none",PARAMETER_CYCLES:"cycle frequency",PARAMETER_SPEED:"speed",PARAMETER_ACCELERATION:"acceleration",showSwimmersLines:"none",swimmersLinesList:Ve,showSwimmersLinesDict:Oe(Ve),swimmersLinesMode:"neighbours",swimmersLinesModeList:Ue,swimmersLinesModeDict:Oe(Ue),medalsModeBeforeFinish:"none",medalsModesDict:{none:0,stars:1,bright:2,lanes:3},medalsModeAfterFinish:"none",areaConservationEnabled:!0,rendering:"realistic",renderingList:ut,renderingDict:ft,transitionBeginTime:null,shadow:{enabled:!0,shadowRadius:.5,shadowPower:.5,showCircle:!0,circleRadius:.6,circleStroke:.15},sparks:{enabled:!1,glow:5,glowOffset:.5,lengthFactor:1,stroke:.01,num:40,sizeFactor:50,fov:Math.PI/4}},swimmers:{showSpheres:!0,useTracking:!1},video:{thresholdBlending:!1,blendingThreshold:.41,show:!1,opacity:1,hideObstructions:!1,hideObstructionThreshold:.2},simulation:{optimized:!1,waterDamping:.02,poolSize:new p.Vector(4,1,4),buoyancyFactor:1.1,foam:{enabled:!0,velThreshold:.5,velMax:4,dispersion:.015,timeVariation:2.5,spaceVariation:8,attenuation:.015}},quiver:{amplitudeFactor:.78,frequencyFactor:1.2,amplitude:.1,omega:2,waveLength:1},cornerView:{show:!0},chronoPhotography:{available:!1}},this.resolution=new p.Vector(256,256),this.gl=p.create({preserveDrawingBuffer:!0}),this.gl.canvas.tabIndex=0,this.originalVisParams=JSON.parse(JSON.stringify(this.params.visualizations)),delete this.originalVisParams.shadow,delete this.originalVisParams.sparks,this.useConfigFile=!0,this.time=0,this.swimmers=[],this.translateX=0,this.translateY=0,this.zoomDistance=4,this.angleX=-25,this.angleY=-200.5,this.angleZ=0,this.water=null;const r=new be("—",{poolSize:new p.Vector(2,1,2),waterResolution:new p.Vector(256,256),numSwimmers:1}),s=new Te({});r.addVideo(new _e(this.gl,"",s));const d=new be("100m freestyle",{poolSize:new p.Vector(25,2,50),waterResolution:new p.Vector(1024,2048),numSwimmers:10,thresholdBlending:!0,dataFolder:"./assets/race-data/"}),u=new Te({tx:-.53,ty:1.25,zoom:47.86,ax:-29,ay:-260.5,az:-5,fov:39.98});d.addVideo(new _e(this.gl,"swimming-race.mp4",u,16.5)),this.currentVideo=d.videos[0];const v=new be("synchronized swimming",{poolSize:new p.Vector(25,2,30),waterResolution:new p.Vector(1024,2048),numSwimmers:2,dataFolder:"./assets/synchronized-swimming-data/"}),_=new Te({tx:-1.32,ty:.4,zoom:32.41,ax:-18,ay:-291.5,az:1,fov:42.8});v.addVideo(new _e(this.gl,"synchronized-swimming.mp4",_,17.5)),this.scenesList=[r,d,v],this.scenes={},this.scenesList.forEach(A=>this.scenes[A.title]=A),this.currentScene=r,this.paused=!1,this.configPlayButton(),this.transitions={},this.playingDemo=!1,this.renderWater=!0,this.renderCube=!0,this.spheresRadiusCoeff=1,this.distanceFixed=0,this.chronoFrameBuffer=this.gl.createFramebuffer(),this.drawingFrameBuffer=null,this.drawingTexture=this.gl.createTexture(),this.resetDrawingTexture(),this.cornerView=!1}resetDrawingTexture(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.chronoFrameBuffer),this.gl.bindTexture(this.gl.TEXTURE_2D,this.drawingTexture);const r=this.gl.canvas.width,s=this.gl.canvas.height;this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,r,s,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,null),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,this.drawingTexture,0);const d=this.gl.createRenderbuffer();this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,d),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,this.gl.DEPTH_COMPONENT16,r,s),this.gl.framebufferRenderbuffer(this.gl.FRAMEBUFFER,this.gl.DEPTH_ATTACHMENT,this.gl.RENDERBUFFER,d),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null)}configStopButton(){this.stopButton=document.getElementById("stop-button"),this.stopButton.addEventListener("click",()=>{this.stopRace()})}configPlayButton(){this.configStopButton(),this.playButton=document.getElementById("play-button"),this.playButton.addEventListener("click",()=>{this.playButton.textContent=="pause"?this.pause():(N.raceHasStarted||this.startRace(),this.play())})}setCalibration(r){this.translateX=r.tx,this.translateY=r.ty,this.zoomDistance=r.zoom,this.angleX=r.ax,this.angleY=r.ay,this.angleZ=r.az,this.params.fov=r.fov,this.gl.matrixMode(this.gl.PROJECTION),this.gl.loadIdentity(),this.gl.perspective(this.params.fov,this.gl.canvas.width/this.gl.canvas.height,.01,100),this.gl.matrixMode(this.gl.MODELVIEW)}async setScene(r){if(console.log("SET SCENE : "+r),this.currentScene=this.scenes[r],this.currentScene){const s=document.getElementById("time-slider-container");this.params.video.show=!!this.currentVideo.video,this.params.swimmers.showSpheres=!this.currentVideo.video,s.hidden=!this.currentVideo.video,this.currentScene.title!="—"?this.params.simulation.waterDamping=.1:this.params.simulation.waterDamping=.02;const d=this.currentScene.numSwimmers;if(console.log("num swimmers : "+d),this.swimmers.length!=d){for(let u=this.swimmers.length;u<d;u++){const v=new N(new p.Vector(0,0,0));this.swimmers.push(v)}for(let u=this.swimmers.length;u>d;u--)this.swimmers=this.swimmers.slice(1);this.swimmers.forEach(u=>u.waterDamping=this.params.simulation.waterDamping)}this.params.swimmers.useTracking=!0,await this.currentScene.parseData(this.swimmers),this.swimmers.forEach(u=>u.update(0)),console.log("scene name : "+this.currentScene.title),this.currentVideo=this.currentScene.videos[0],this.setCalibration(this.currentVideo.calibration),$(this,ie,je).call(this,this.currentScene.poolSize),this.resolution=this.currentScene.waterResolution,this.params.video.thresholdBlending=this.currentScene.thresholdBlending,this.currentScene.thresholdBlending?this.params.video.opacity=1:this.params.video.opacity=.5,this.params.visualizations.areaConservationEnabled=!1,this.stopRace(),this._reset(),this.params.simulation.optimized=!!this.currentVideo.video}}useGravity(r){N.useGravity=r;for(let s of o.swimmers)s.body.cinematic=!N.useGravity}isOneVisualizationEnabled(){return this.params.visualizations.showFlags||this.params.visualizations.medalsModeBeforeFinish!="none"||this.params.visualizations.medalsModeAfterFinish!="none"||this.params.visualizations.showWR||this.params.visualizations.showSpeed||this.params.visualizations.showDivingDistance}updateTime(r){this.time+=r,this._updateDistanceMarker&&this._updateDistanceMarker()}getRaceTime(){return N.raceHasStarted?this.time-this.currentVideo.videoStartTime:0}resetParams(){Object.entries(this.originalVisParams).forEach(r=>{const s=r[0],d=r[1];this.params.visualizations[s]=d}),this.params.visualizations.areaConservationEnabled=!1}updateEventIndex(){for(this.currentEventIndex=0;this.events[this.currentEventIndex]&&this.events[this.currentEventIndex].time<this.getRaceTime();)this.currentEventIndex++;this.currentEventIndex>0&&this.currentEventIndex--}setRaceTime(r){this.time=this.currentVideo.videoStartTime+r,this.currentVideo.video&&this.currentVideo.setTime(this.time),this.events&&(this.updateEventIndex(),this.resetParams())}showTexts(r){document.getElementById("h").hidden=!r,r?this.showCommands&&(document.getElementById("commands").hidden=!1):(this.showCommands=!document.getElementById("commands").hidden,document.getElementById("commands").hidden=!0)}startRace(){console.log("START RACE"),this.setRaceTime(-3),this.currentVideo.video&&this.currentVideo.video.play(),this.swimmers.forEach(r=>r.startRace()),N.raceHasStarted=!0,N.useGravity=!0,this.water.resetTextures(),this.water.WR_position=0,this.stopButton.hidden=!1,this._clearChronoTexture(this.gl.canvas.width,this.gl.canvas.height,this.gl),this.showTexts(!1)}stopRace(){this.paused&&this.play(),this.setRaceTime(0),this.currentVideo.video&&this.currentVideo.video.pause(),this.swimmers.forEach(r=>r.swim(!1)),N.raceHasStarted=!1,this.water.resetTextures(),this.playButton.textContent="play",this.stopButton.hidden=!0,this.showTexts(!0)}pause(){this.paused=!0,this.pauseVideo(),this.playButton.textContent="play"}play(){this.paused=!1,N.raceHasStarted&&(this.playVideo(),this.playButton.textContent="pause")}pauseVideo(){this.currentVideo.video&&this.currentVideo.video.pause()}playVideo(){this.currentVideo.video&&(this.currentVideo.video.play(),this.currentVideo.video.currentTime=this.time)}renderVideo(){this.currentVideo.video&&this.currentVideo.render()}parseConfigFile(r){fetch(r).then(s=>s.text()).then(s=>{this.events=JSON.parse(s),this.currentEventIndex=0,this._renderTimeline&&this._renderTimeline()})}updateTransitions(){Object.entries(this.transitions).forEach(r=>{const s=r[0],d=r[1],u=this.getRaceTime()-d.beginTime;if(u>d.duration){delete this.transitions[s];return}d.show?d.opacity=u/d.duration:d.opacity=1-u/d.duration})}updateParams(){if(!N.raceHasStarted||!this.events||!this.useConfigFile)return;const r=this.events[this.currentEventIndex];if(!r)return;let s=r.rankSwimmerToggle;if(s||(s=1),r.distance&&this.swimmers[s-1].getDistanceTraveled()>=r.distance||r.time!==void 0&&this.getRaceTime()>=r.time){this.currentEventIndex++;const d=r.transition&&r.transition.type=="dissolve";Object.entries(r.params).forEach(u=>{const v=u[0],_=u[1];v!=="transition"&&(d&&(_===!0||_===!1)&&(this.transitions[v]={opacity:1-1*_,show:_,beginTime:this.getRaceTime(),duration:r.transition.duration}),this.params.visualizations[v]=_)})}}chronoPhotography(){console.log("shoot"),this.distanceFixed=this.swimmers[0].getDistanceTraveled(),console.log("distance fixed : "+this.distanceFixed),this._fixTexture()}async launchDemo(){console.log("Launch demo"),await this.setScene("100m freestyle"),this.params.video.show=!1,this.params.swimmers.showSpheres=!0,this.demoTime=0,this.swimmers.forEach(r=>r.body.move(oe)),this.swimmersShown=0,this.playingDemo=!0,this.useGravity(!0),this.params.simulation.buoyancyFactor=1.5,this.params.visualizations.shadow.enabled=!1,this.renderWater=!1,this.translateX=200,this.parseConfigFile("./assets/vis-config-demo-2.json"),this._gui.hide(),document.getElementById("event-editor").hidden=!0,document.getElementById("time-slider-container").hidden=!0,document.getElementById("h").hidden=!0}stopDemo(){this.playingDemo=!1,this.setScene("—"),document.getElementById("event-editor").hidden=!1,document.getElementById("time-slider-container").hidden=!1,document.getElementById("h").hidden=!1,this.renderWater=!0,this.renderCube=!0,this.params.visualizations.shadow.enabled=!0,this._gui.show(),this.params.simulation.buoyancyFactor=1.1}updateDemo(r){if(!this.playingDemo)return;const s=this.demoTime;this.demoTime+=r;const d=2,u=1;if(s<=u){const y=$(this,ie,Me).call(this,0,u,s);this.translateX=y*this.currentVideo.calibration.tx+(1-y)*200}else this.demoShowVideoTime||(this.angleY+=.4);!this.renderCube&&s>.5&&(this.renderCube=!0);const v=1.5;if(!this.renderWater&&s>1.5&&(this.renderWater=!0),s>v&&s<v+.5)for(var _=0;_<10;_++)this.water.addDrop(Math.random()*2-1,Math.random()*2-1,.06,_&1?.6:-.6);$(this,ie,Ke).call(this,s,d);const A=3,M=5;!N.raceHasStarted&&s>=A&&s<M&&this.swimmers.forEach(y=>{const q=new p.Vector(y.body.center.x,0,0),U=new p.Vector(y.body.center.x,1,-this.params.simulation.poolSize.z/2);y.body.move($(this,ie,Ze).call(this,q,U,A,M,s))}),!N.raceHasStarted&&s>=M&&(this.params.simulation.buoyancyFactor=1.1,this.startRace()),!this.demoShowVideoTime&&this.angleY>=this.currentVideo.calibration.ay+360&&(this.demoShowVideoTime=this.demoTime+1),!this.params.video.show&&this.demoShowVideoTime&&s>=this.demoShowVideoTime&&(this.params.video.show=!0,this.params.video.opacity=0);const L=2;this.params.video.show&&s<=this.demoShowVideoTime+L&&(this.params.video.opacity=(s-this.demoShowVideoTime)/L,console.log("opacity : "+this.params.video.opacity));const B=2;this.params.video.show&&s>this.demoShowVideoTime+L&&s<this.demoShowVideoTime+L+B&&(this.spheresRadiusCoeff=1-(s-(this.demoShowVideoTime+L))/B)}}ie=new WeakSet,je=function(r){console.log("SET POOL SIZE : "+r.z),this.params.simulation.poolSize.x=r.x,this.params.simulation.poolSize.y=r.y,this.params.simulation.poolSize.z=r.z},Ke=function(r,s){const u=Math.floor((r-s)/.1);if(this.swimmersShown<10&&u>=this.swimmersShown){console.log("swimmers shown : "+this.swimmersShown),console.log("next index swimmer : "+u),console.log("num swimmers : "+this.swimmers.length);const v=this.params.simulation.poolSize.x,A=-v/2+v/20+u*v/10;this.swimmers[u].body.move(new p.Vector(A,.5,0)),this.swimmersShown++}},Me=function(r,s,d){if(d<r)return 0;if(d>s)return 1;const u=(d-r)/(s-r);return 1-(Math.cos(u*Math.PI)+1)/2},Ze=function(r,s,d,u,v){const _=$(this,ie,Me).call(this,d,u,v);console.log("t norm : "+_);const A=(M,L,B,y=1)=>Math.pow(B,y)*L+(1-Math.pow(B,y))*M;return new p.Vector(A(r.x,s.x,_),A(r.y,s.y,_,20),A(r.z,s.z,_,2))};const o=new pt;o.parseConfigFile("./assets/vis-config.json");const vt=`#version 300 es
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
`,xt=`#version 300 es
    in vec2 iVertex;
    out vec2 fragCoord;
    void main() {
        fragCoord = iVertex * .5 + .5;
        gl_Position = vec4(iVertex.xy, 0., 1.);
    }
`,wt=`#version 300 es
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
`,yt=new Float32Array([-1,-1,1,-1,1,1,-1,1]),Et=new Uint16Array([0,1,2,2,3,0]);var Q,$e,fe,Je;class Tt{constructor(){xe(this,Q);this.numVecAttributes=Xe,this.maxNumSwimmer=He,this.gl=o.gl;const r=this.gl.NEAREST;this.texture=new p.Texture(this.numVecAttributes,this.maxNumSwimmer,{type:this.gl.FLOAT,filter:r}),this.initPrograms(),this.indexBuffer=this.gl.createBuffer(),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.indexBuffer),this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER,Et,this.gl.STATIC_DRAW),this.vboPlane=this.gl.createBuffer(),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vboPlane),this.gl.bufferData(this.gl.ARRAY_BUFFER,yt,this.gl.STATIC_DRAW),this.vboPoints=this.gl.createBuffer()}update(){this.numSwimmers=o.swimmers.length;const r=5;this.swimmersAttributes=new Float32Array(this.numVecAttributes*4*this.maxNumSwimmer*r);const s=$(this,Q,$e).call(this,o.swimmers);for(let d=0;d<o.swimmers.length;d++){const u=s[d];$(this,Q,Je).call(this,d,u),$(this,Q,fe).call(this,o.swimmers.length+d,u.leftArm),$(this,Q,fe).call(this,2*o.swimmers.length+d,u.rightArm),$(this,Q,fe).call(this,3*o.swimmers.length+d,u.leftFoot),$(this,Q,fe).call(this,4*o.swimmers.length+d,u.rightFoot)}this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture.id),this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,!1),this.gl.texSubImage2D(this.gl.TEXTURE_2D,0,0,0,this.numVecAttributes,this.maxNumSwimmer,this.gl.RGBA,this.gl.FLOAT,this.swimmersAttributes),this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,!0),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vboPoints),this.gl.bufferData(this.gl.ARRAY_BUFFER,this.swimmersAttributes,this.gl.DYNAMIC_DRAW)}buildShader(r,s){const d=this.gl.createShader(s);return this.gl.shaderSource(d,r),this.gl.compileShader(d),d}createProgram(r){const s=this.gl.createProgram();return r.forEach(d=>{this.gl.attachShader(s,d)}),this.gl.linkProgram(s),s}checkShaders(r,s,d){this.gl.getShaderParameter(r,this.gl.COMPILE_STATUS)||console.error(this.gl.getShaderInfoLog(r)),this.gl.getShaderParameter(s,this.gl.COMPILE_STATUS)||console.error(this.gl.getShaderInfoLog(s)),this.gl.getProgramParameter(d,this.gl.LINK_STATUS)||console.error(this.gl.getProgramInfoLog(d))}createRenderingTexture(r,s){this.pointsTexture=new p.Texture(r,s,{type:this.gl.FLOAT,filter:this.gl.NEAREST}),this.pointsFrameBuffer=this.gl.createFramebuffer(),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.pointsFrameBuffer);const d=this.gl.COLOR_ATTACHMENT0;this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,d,this.gl.TEXTURE_2D,this.pointsTexture.id,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.horizontalPassTexture=new p.Texture(r,s,{type:this.gl.FLOAT,filter:this.gl.LINEAR}),this.horizontalPassFrameBuffer=this.gl.createFramebuffer(),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.horizontalPassFrameBuffer),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,d,this.gl.TEXTURE_2D,this.horizontalPassTexture.id,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null);const u=s/4,v=u,_=u;this.displacementTexture=new p.Texture(v,_,{type:this.gl.FLOAT,filter:this.gl.LINEAR}),this.displacementFrameBuffer=this.gl.createFramebuffer(),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.displacementFrameBuffer),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,d,this.gl.TEXTURE_2D,this.displacementTexture.id,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.oldDisplacementTexture=new p.Texture(v,_,{type:this.gl.FLOAT,filter:this.gl.LINEAR})}buildProgram(r,s){const d=this.buildShader(r,this.gl.VERTEX_SHADER),u=this.buildShader(s,this.gl.FRAGMENT_SHADER),v=this.createProgram([d,u]);return this.checkShaders(d,u,v),v}initPrograms(){this.programPoints=this.buildProgram(vt,gt),this.programVolume=this.buildProgram(xt,wt),this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height)}volumePass(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.horizontalPassFrameBuffer),this.gl.useProgram(this.programVolume);const r=this.gl.getAttribLocation(this.programVolume,"iVertex"),s=this.gl.getUniformLocation(this.programVolume,"poolSize");this.gl.uniform2f(s,o.params.simulation.poolSize.x,o.params.simulation.poolSize.z);const d=this.gl.getUniformLocation(this.programVolume,"horizontal");this.gl.uniform1i(d,!0);const u=this.gl.getUniformLocation(this.programVolume,"show");this.gl.uniform1i(u,!1);const v=this.gl.getUniformLocation(this.programVolume,"swapColor");this.gl.uniform1i(v,!1);const _=2,A=this.gl.FLOAT,M=!1,L=0,B=0;this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vboPlane),this.gl.vertexAttribPointer(r,_,A,M,L,B),this.gl.enableVertexAttribArray(r),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.indexBuffer),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.pointsTexture.id),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this.gl.drawElements(this.gl.TRIANGLES,6,this.gl.UNSIGNED_SHORT,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.displacementFrameBuffer),this.gl.uniform1i(d,!1),this.gl.uniform1i(u,!1),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.horizontalPassTexture.id),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this.gl.viewport(0,0,this.displacementTexture.width,this.displacementTexture.height),this.gl.drawElements(this.gl.TRIANGLES,6,this.gl.UNSIGNED_SHORT,0),this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height)}pointPass(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.pointsFrameBuffer),this.gl.useProgram(this.programPoints);const r=this.gl.getAttribLocation(this.programPoints,"iData1"),s=this.gl.getAttribLocation(this.programPoints,"iData2"),d=this.gl.getAttribLocation(this.programPoints,"iData3"),u=this.gl.getUniformLocation(this.programPoints,"invPoolSize");this.gl.uniform2f(u,1/o.params.simulation.poolSize.x,1/o.params.simulation.poolSize.z);const v=4,_=this.gl.FLOAT,A=!1,M=4,L=12*M;let B=0;this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vboPoints),r>=0&&(this.gl.vertexAttribPointer(r,v,_,A,L,B),this.gl.enableVertexAttribArray(r)),B=4*M,s>=0&&(this.gl.vertexAttribPointer(s,v,_,A,L,B),this.gl.enableVertexAttribArray(s)),B=2*4*M,d>=0&&(this.gl.vertexAttribPointer(d,v,_,A,L,B),this.gl.enableVertexAttribArray(d)),this.gl.viewport(0,0,this.pointsTexture.width,this.pointsTexture.height),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this.gl.drawArrays(this.gl.POINTS,0,5*this.numSwimmers)}updateOldDisplacementTexture(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.displacementFrameBuffer),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.oldDisplacementTexture.id),this.gl.copyTexSubImage2D(this.gl.TEXTURE_2D,0,0,0,0,0,this.oldDisplacementTexture.width,this.oldDisplacementTexture.height)}draw(){this.updateOldDisplacementTexture(),this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this.pointPass(),this.volumePass(),this.gl.disable(this.gl.BLEND)}}Q=new WeakSet,$e=function(r){const s=function(v,_){return _.getDistanceTraveled()-v.getDistanceTraveled()};let d=0;r.forEach(v=>{v.hasFinished()>.1&&d++});const u=r.slice(0,d).concat(r.slice(d).sort(s));for(let v=0;v<r.length;v++)r[v]=u[v];return r},fe=function(r,s){this.swimmersAttributes[this.numVecAttributes*4*r]=s.center.x,this.swimmersAttributes[this.numVecAttributes*4*r+1]=s.center.z,this.swimmersAttributes[this.numVecAttributes*4*r+7]=s.center.y},Je=function(r,s){$(this,Q,fe).call(this,r,s.body),this.swimmersAttributes[this.numVecAttributes*4*r+2]=s.divingDistance,this.swimmersAttributes[this.numVecAttributes*4*r+3]=s.divingTime,this.swimmersAttributes[this.numVecAttributes*4*r+4]=s.reactionTime,this.swimmersAttributes[this.numVecAttributes*4*r+5]=s.body.velocity.z*3.6,this.swimmersAttributes[this.numVecAttributes*4*r+6]=s.nationality,this.swimmersAttributes[this.numVecAttributes*4*r+8]=s.breakoutDistance,this.swimmersAttributes[this.numVecAttributes*4*r+9]=s.breakoutTime,this.swimmersAttributes[this.numVecAttributes*4*r+10]=s.finishTime,this.swimmersAttributes[this.numVecAttributes*4*r+11]=s.waterDamping};function Se(a=0,r=1){const s=1-Math.random(),d=Math.random();return Math.sqrt(-2*Math.log(s))*Math.cos(2*Math.PI*d)*r+a}const _t=.5,bt=2,de="Temps (s)",ve="event",Re="eventX",St="frequence (cylce/min)",H=class H{constructor(r){this.startingPoint=new p.Vector(r.x,r.y,r.z),this.center=new p.Vector(r.x,r.y,r.z),this.force=new p.Vector(0,0,190+Se(0,20)),this.reactionTime=Math.max(.1,Se(.15,.02));const s=.25,d=.15;this.body=new pe(r,s),this.leftArm=new pe(oe,d),this.rightArm=new pe(oe,d),this.leftFoot=new pe(oe,d),this.rightFoot=new pe(oe,d),this.body.cinematic=!H.useGravity,this.leftArm.cinematic=!0,this.rightArm.cinematic=!0,this.leftFoot.cinematic=!0,this.rightFoot.cinematic=!0,this.spheres=[this.body,this.leftArm,this.rightArm,this.leftFoot,this.rightFoot],this.divingDistance=0,this.divingTime=1e3,this.breakoutDistance=0,this.breakoutTime=1e3,this.nationality=Math.random()>.5?0:1,this.currendDataIndex=0,this.useTracking=!1,this.armPulsation=2*Math.PI*bt,this.cycleTime=0,this.cyclePhase=0,this.finishTime=0,this.waterDamping=o.params.simulation.waterDamping}async parseData(r){await fetch(r).then(s=>{const d=s.headers.get("content-type");return!d||!d.includes("text/csv")?(console.log("no file found : "+r),null):s.text()}).then(s=>{if(!s)return;const d=s.split(`
`),u=d[0].split(/,|;/);this.data=d.slice(1).map(v=>{const _=v.split(/,|;/);return Object.fromEntries(u.map((A,M)=>[A,_[M]]))}),o.params.swimmers.useTracking&&(this.armPulsation=0)})}getDistanceTraveled(){const r=this.body.velocity.z,s=o.params.simulation.poolSize.z,d=this.body.center.z+s/2;return r>=0?d:2*s-d}startRace(){this.hasBrokeOut=!1,this.hasDove=!1,this.hasReacted=!1}jump(r=4.5){this.body.cinematic=!1,this.body.velocity=new p.Vector(0,0,r+Se(0,1)),this.body.center=new p.Vector(this.startingPoint.x,1,-o.params.simulation.poolSize.z/2)}swim(r){this.hasReacted=r,this.isSwimming=r,this.finishTime=0,r||(this.body.followTarget=!1),r?(this.body.cinematic=!1,this.useGravity=!0,this.body.center=new p.Vector(this.startingPoint.x,0,-o.params.simulation.poolSize.z/2)):(this.body.velocity=new p.Vector(0,0,0),this.body.center=new p.Vector(this.startingPoint.x,0,0))}hasFinished(){return this.finishTime>.1}getArmOffset(r,s){s+=this.cyclePhase;const d=this.body.velocity.z>=0?this.armPulsation:-this.armPulsation;return new p.Vector(0,Math.cos(d*r+s),Math.sin(d*r+s)).multiply(_t)}setCurrentDataIndex(){if(this.currendDataIndex=0,!!this.data){for(;this.data[this.currendDataIndex]&&this.data[this.currendDataIndex][de]<o.getRaceTime();)this.currendDataIndex++;if(this.currendDataIndex+1<this.data.length){if(this.currendDataIndex-1>=0){const r=parseFloat(this.data[this.currendDataIndex][Re]);let s=r;const d=o.params.simulation.poolSize.z;r>d&&(s=2*d-s),s-=d/2;const u=this.body.center;this.body.move(new p.Vector(u.x,u.y,s));const v=Math.sign(50-r)*.1;this.body.velocity=new p.Vector(0,0,v),console.log("vz : "+v)}this.body.setTarget(null),this.body.followTarget=!0,this.finishTime=0}}}findNextCycle(){let r=this.currendDataIndex+1;if(!this.data)return null;for(;this.data[r]&&this.data[r][ve]!="cycle";)r++;return this.data[r]?parseFloat(this.data[r][de]):null}setDamping(r){if(o.params.visualizations.customWaterPerturbation==o.params.visualizations.PARAMETER_CYCLES){const s=parseFloat(r[St]);if(s>0){console.log("FREQ : "+s);const d=80,u=35;let v=(s-u)/(d-u);v=Math.max(Math.min(v,1),0);const _=.03,A=.22;this.waterDamping=_+(A-_)*(1-v)}}else this.waterDamping=o.params.simulation.waterDamping}handleTracking(r){if(this.hasReacted&&this.useTracking&&this.currendDataIndex<this.data.length&&this.data[this.currendDataIndex][de]<r){this.setDamping(this.data[this.currendDataIndex]);let s=null,d=r;const u=this.data[this.currendDataIndex+1];this.currendDataIndex+1<this.data.length&&(s=parseFloat(u[Re]),d=parseFloat(u[de]));const v=o.params.simulation.poolSize.z;let _=-this.body.radius/2;const A=this.data[this.currendDataIndex][ve];if(A=="enter"||A=="turn"&&u[ve]!="under"){d=(r+d)/2,s=(this.body.center.z+v/2+s)/2;const L={[de]:d,[Re]:s,[ve]:"under"};this.data.splice(this.currendDataIndex+1,0,L),_=-1.5}u&&u[ve]=="under"&&(_=-1.5),s>v&&(s=2*v-s),s-=o.params.simulation.poolSize.z/2;const M=new p.Vector(this.startingPoint.x,_,s);if(this.currendDataIndex+1<this.data.length?this.body.setTarget(M,d-r):this.body.setTarget(null),A=="cycle"){const L=parseFloat(this.data[this.currendDataIndex][de]),B=this.findNextCycle();if(B){const q=1/(B-L);this.armPulsation=2*Math.PI*q,this.cycleTime=0,this.cyclePhase==0?this.cyclePhase=Math.PI:this.cyclePhase=0}}else A=="finish"&&(this.finishTime=this.data[this.currendDataIndex][de],this.body.followTarget=!1,this.isSwimming=!1);this.currendDataIndex++}}moveSpheresAway(){this.rightArm.move(oe),this.leftArm.move(oe),this.rightFoot.move(oe),this.leftFoot.move(oe)}moveSpheres(r){this.cycleTime+=r;const s=this.getArmOffset(.5*this.cycleTime,0),d=this.getArmOffset(.5*this.cycleTime,Math.PI),u=this.getArmOffset(.5*this.cycleTime*2,0),v=this.getArmOffset(.5*this.cycleTime*2,Math.PI);this.rightArm.move(this.body.center.add(s).add(new p.Vector(Fe,0,0))),this.leftArm.move(this.body.center.add(d).add(new p.Vector(-Fe,0,0)));const _=this.body.velocity.z>=0?-De:De;this.rightFoot.move(this.body.center.add(new p.Vector(Pe,u.y*.5,_))),this.leftFoot.move(this.body.center.add(new p.Vector(-Pe,v.y*.5,_)))}update(r){const s=o.getRaceTime();!H.raceHasStarted&&this.data&&(this.useTracking=o.params.swimmers.useTracking),!this.hasReacted&&H.raceHasStarted&&(this.useTracking||s>this.reactionTime&&!o.params.swimmers.useTracking?(this.swim(!0),this.waterDamping=o.params.simulation.waterDamping,this.jump(),this.useTracking&&(this.body.cinematic=!0,this.body.followTarget=!0,this.body.setTarget(null))):(this.swim(!1),this.body.cinematic=!0,o.playingDemo?this.body.move(new p.Vector(this.body.center.x,1,-o.params.simulation.poolSize.z/2)):this.body.move(oe)),this.currendDataIndex=0),this.moveSpheresAway(),this.isSwimming&&(this.useTracking||this.body.addForce(this.force),this.body.center.y>-this.body.radius&&this.moveSpheres(r)),this.handleTracking(s);for(let u of this.spheres)u.update(r);H.raceHasStarted&&!this.hasDove&&this.body.center.y<0&&this.body.oldCenter.y>=0&&(this.divingDistance=this.body.center.z+o.params.simulation.poolSize.z/2,this.divingTime=s,this.hasDove=!0);const d=this.body.radius;H.raceHasStarted&&!this.hasBrokeOut&&this.body.center.y>-d&&this.body.oldCenter.y<=-d&&(this.breakoutDistance=this.body.center.z+o.params.simulation.poolSize.z/2,this.breakoutTime=s,this.hasBrokeOut=!0)}};te(H,"useGravity",!1),te(H,"raceHasStarted",!1),te(H,"swimming",!1),te(H,"attributes"),te(H,"initAttributes",()=>{H.attributes=new Tt}),te(H,"updateAttributesTexture",()=>{H.attributes.update()}),te(H,"getAttributesTexture",()=>H.attributes.texture),te(H,"bindDisplacementTexture",r=>{H.attributes.displacementTexture.bind(r)}),te(H,"bindOldDisplacementTexture",r=>{H.attributes.oldDisplacementTexture.bind(r)}),te(H,"reset",r=>{H.attributes.createRenderingTexture(r.x,r.y)});let N=H;const Rt=`
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
`;function ce(a,r,s,d){this.water=r,this.gl=a,this.tileTexture=p.Texture.fromImage(document.getElementById("tiles"),{minFilter:this.gl.LINEAR_MIPMAP_LINEAR,wrap:this.gl.REPEAT,format:this.gl.RGB}),this.franceTexture=p.Texture.fromImage(document.getElementById("france"),{minFilter:this.gl.LINEAR_MIPMAP_LINEAR,wrap:this.gl.REPEAT,format:this.gl.RGBA}),this.chinaTexture=p.Texture.fromImage(document.getElementById("china"),{minFilter:this.gl.LINEAR_MIPMAP_LINEAR,wrap:this.gl.REPEAT,format:this.gl.RGBA}),this.lettersTexture=p.Texture.fromImage(document.getElementById("letters"),{minFilter:this.gl.LINEAR,magFilter:this.gl.LINEAR,wrap:this.gl.REPEAT,format:this.gl.RGBA}),this.flagSize=d,this.flagSize=[1.5,1],this.flagCenter=s,this.lightDir=new p.Vector(2,2,-1).unit(),this.causticTex=new p.Texture(1024,1024),this.waterShaders=[];let u="";Object.entries(o.params.visualizations.customParametersDict).forEach(A=>{const M=A[1].name,L=A[1].value;u+="#define "+M+" "+L+`
`}),Object.entries(o.params.visualizations.renderingDict).forEach(A=>{const M=A[1].name,L=A[1].value;u+="#define "+M+" "+L+`
`});for(var v=0;v<2;v++)this.waterShaders[v]=new p.Shader(`
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
      
      
      `+we+Rt+`
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
        
        `+(v?`
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
  void main() {
    fragColor = vec4(getSphereColor(position), 1.0);
      vec4 info = texture(water, position.xz / poolSize.xz + 0.5);
    if (position.y < info.r) {
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
  `),this.sphereCenter=new p.Vector,this.sphereRadius=0;var _=!!this.gl.getExtension("OES_standard_derivatives");this.causticsShader=new p.Shader(me+`
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
  `+me+`
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
  `)}ce.prototype.reset=function(){this.cubeMesh=p.Mesh.cube({width:o.params.simulation.poolSize.x,height:2,depth:o.params.simulation.poolSize.z}),this.cubeMesh.triangles.splice(4,2),this.cubeMesh.compile()};ce.prototype.updateCaustics=function(a){};ce.prototype.renderWater=function(a,r,s){if(!o.renderWater)return;var d=new p.Raytracer;a.textureA.bind(0),this.tileTexture.bind(1),r.bind(2),this.causticTex.bind(3),this.franceTexture.bind(4),this.chinaTexture.bind(8),o.water.foam.foamTexNext.bind(9),this.lettersTexture.bind(7),a.areaConservationTexture.bind(5);const u=N.getAttributesTexture();u&&u.bind(6),this.gl.enable(this.gl.CULL_FACE),o.updateTransitions();for(var v=0;v<2;v++)this.gl.cullFace(v?this.gl.BACK:this.gl.FRONT),this.waterShaders[v].uniforms({renderWater:!0,light:this.lightDir,water:0,tiles:1,sky:2,causticTex:3,france:4,china:8,foamTex:9,areaConservationTexture:5,swimmersAttributesTexture:6,iChannel0:7,areaConservation:o.params.visualizations.areaConservationEnabled,flagSize:[1.5,2],flagCenter:[this.flagCenter.x,this.flagCenter.y],poolSize:[o.params.simulation.poolSize.x,o.params.simulation.poolSize.y,o.params.simulation.poolSize.z],poolSizeVertexShader:[o.params.simulation.poolSize.x,o.params.simulation.poolSize.y,o.params.simulation.poolSize.z],eye:d.eye,sphereCenter:this.sphereCenter,sphereRadius:this.sphereRadius,showProjectionGrid:a.showProjectionGrid,showAreaConservedGrid:a.showAreaConservedGrid,wr:a.WR_position,swimmersNumber:o.swimmers.length,cornerView:o.cornerView,showFlags:o.transitions.showFlags?o.transitions.showFlags.opacity:o.params.visualizations.showFlags,showWR:o.params.visualizations.showWR,showSpeed:o.params.visualizations.showSpeed,showDivingDistance:o.params.visualizations.showDivingDistance,showFinishTimes:o.params.visualizations.showFinishTimes,time:o.getRaceTime(),seed:o.time,foamEnabled:o.params.simulation.foam.enabled,shadowEnabled:s.enabled,shadowRadius:s.shadowRadius,shadowPower:s.shadowPower,showCircle:s.showCircle,shadowCircleRadius:s.circleRadius,shadowCircleStroke:s.circleStroke,showSwimmersLines:Math.round(o.params.visualizations.showSwimmersLinesDict[o.params.visualizations.showSwimmersLines]),swimmersLinesMode:o.params.visualizations.swimmersLinesModeDict[o.params.visualizations.swimmersLinesMode],medalsModeBeforeFinish:Math.round(o.params.visualizations.medalsModesDict[o.params.visualizations.medalsModeBeforeFinish]),medalsModeAfterFinish:Math.round(o.params.visualizations.medalsModesDict[o.params.visualizations.medalsModeAfterFinish]),rendering:o.params.visualizations.renderingDict[o.params.visualizations.rendering].value,waterColorParameter:o.params.visualizations.customParametersDict[o.params.visualizations.waterColorParameter].value}).draw(a.plane);this.gl.disable(this.gl.CULL_FACE)};ce.prototype.renderSpheres=function(a){const r=[];o.swimmers.forEach(s=>s.spheres.forEach(d=>r.push(d)));for(let s of r)this.renderSphere(a,s)};ce.prototype.renderSphere=function(a,r){a.textureA.bind(1),this.causticTex.bind(2),this.sphereShader.uniforms({light:this.lightDir,water:1,causticTex:2,sphereCenter:[r.center.x,r.center.y,r.center.z],sphereRadius:r.radius*o.spheresRadiusCoeff,poolSize:[o.params.simulation.poolSize.x,o.params.simulation.poolSize.y,o.params.simulation.poolSize.z]}).draw(r.mesh)};ce.prototype.renderSphereOld=function(a){a.textureA.bind(0),this.causticTex.bind(1),this.sphereShader.uniforms({light:this.lightDir,water:0,causticTex:1,sphereCenter:this.sphereCenter,sphereRadius:this.sphereRadius,poolSize:[o.params.simulation.poolSize.x,o.params.simulation.poolSize.y,o.params.simulation.poolSize.z]}).draw(this.sphereMesh)};ce.prototype.renderCube=function(a){o.renderCube&&(this.gl.enable(this.gl.CULL_FACE),a.textureA.bind(0),this.tileTexture.bind(1),this.causticTex.bind(2),this.cubeShader.uniforms({light:this.lightDir,water:0,tiles:1,causticTex:2,sphereCenter:this.sphereCenter,sphereRadius:this.sphereRadius,poolSize:[o.params.simulation.poolSize.x,o.params.simulation.poolSize.y,o.params.simulation.poolSize.z],renderWater:o.renderWater}).draw(this.cubeMesh),this.gl.disable(this.gl.CULL_FACE))};function Be(a,r){this.gl=r,this.id=r.createTexture(),r.bindTexture(r.TEXTURE_CUBE_MAP,this.id),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,1),r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MAG_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),r.texImage2D(r.TEXTURE_CUBE_MAP_NEGATIVE_X,0,r.RGB,r.RGB,r.UNSIGNED_BYTE,a.xneg),r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X,0,r.RGB,r.RGB,r.UNSIGNED_BYTE,a.xpos),r.texImage2D(r.TEXTURE_CUBE_MAP_NEGATIVE_Y,0,r.RGB,r.RGB,r.UNSIGNED_BYTE,a.yneg),r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_Y,0,r.RGB,r.RGB,r.UNSIGNED_BYTE,a.ypos),r.texImage2D(r.TEXTURE_CUBE_MAP_NEGATIVE_Z,0,r.RGB,r.RGB,r.UNSIGNED_BYTE,a.zneg),r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_Z,0,r.RGB,r.RGB,r.UNSIGNED_BYTE,a.zpos)}Be.prototype.bind=function(a){this.gl.activeTexture(this.gl.TEXTURE0+(a||0)),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,this.id)};Be.prototype.unbind=function(a){this.gl.activeTexture(this.gl.TEXTURE0+(a||0)),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,null)};const ne=new st,zt=function(a,r){const s=ne.addFolder("visualizations");s.close(),s.add(o,"useConfigFile").name("use configuration file");const d={showTimeline:!0};s.add(d,"showTimeline").name("show event timeline").onChange(T=>{const z=document.getElementById("event-editor");z&&(z.style.display=T?"block":"none")}),s.add(o.params.visualizations,"showFlags").name("show flags").listen(),s.add(o.params.visualizations,"showWR").name("show world record").listen(),s.add(o.params.visualizations,"showSwimmersLines",o.params.visualizations.swimmersLinesList).name("show neighbours lines").listen(),s.add(o.params.visualizations,"swimmersLinesMode",o.params.visualizations.swimmersLinesModeList).name("show neighbours lines").listen(),s.add(o.params.visualizations,"customWaterPerturbation",o.params.visualizations.customParametersList).name("custom water perturbation").listen(),s.add(o.params.visualizations,"waterColorParameter",o.params.visualizations.customParametersList).name("water color parameter").listen(),s.add(o.params.visualizations,"medalsModeBeforeFinish",["none","stars","bright","lanes"]).name("show potential medals").listen(),s.add(o.params.visualizations,"medalsModeAfterFinish",["none","stars","bright","lanes"]).name("show potential medals after finish").listen(),s.add(o.params.visualizations,"showSpeed").name("show speed").listen(),s.add(o.params.visualizations,"showDivingDistance").name("show diving distance").listen(),s.add(o.params.visualizations.shadow,"enabled").name("show shadow"),s.add(o.params.visualizations,"areaConservationEnabled","areaConservationEnabled").name("area conservation").listen(),s.add(o.params.visualizations,"rendering",o.params.visualizations.renderingList).name("rendering").listen().onChange(()=>{o.params.visualizations.rendering=="toon"&&(o.params.simulation.waterDamping=.35)});const u=ne.addFolder("video");u.close(),u.add(o.params.video,"thresholdBlending").name("threshold blending"),u.add(o.params.video,"blendingThreshold",.1,.5).name("blending threshold"),u.add(o.params.video,"show").name("show").listen(),u.add(o.params.video,"hideObstructions").name("hide obstructions"),u.add(o.params.video,"hideObstructionThreshold",0,.5).name("obstructions threshold");const v=s.addFolder("Sparks");v.close(),v.add(o.params.visualizations.sparks,"enabled").name("sparks enabled"),v.add(o.params.visualizations.sparks,"glow",1,30).name("sparks glow factor"),v.add(o.params.visualizations.sparks,"lengthFactor",.1,10).name("sparks length factor"),v.add(o.params.visualizations.sparks,"glowOffset",.1,3).name("sparks glow offset"),v.add(o.params.visualizations.sparks,"stroke",.001,.05).name("sparks stroke"),v.add(o.params.visualizations.sparks,"num",10,qe).step(1).name("sparks number"),v.add(o.params.visualizations.sparks,"sizeFactor",10,100).name("size factor");const _=s.addFolder("Swimmers shadows");_.close(),_.add(o.params.visualizations.shadow,"shadowRadius",0,2).name("shadow radius"),_.add(o.params.visualizations.shadow,"shadowPower",.1,2).name("shadow power"),_.add(o.params.visualizations.shadow,"showCircle").name("circle"),_.add(o.params.visualizations.shadow,"circleRadius",.5,2).name("circle radius"),_.add(o.params.visualizations.shadow,"circleStroke",.1,.5).name("circle stroke");const A=ne.addFolder("Simulation");A.close(),A.add(o.params.simulation,"optimized").name("optimized").listen(),A.add(o.params.simulation.poolSize,"x",1,25).name("pool width").onChange(function(T){r()}).listen(),A.add(o.params.simulation.poolSize,"z",1,50).name("pool height").onChange(function(T){r()}).listen(),A.add(o.params.simulation.poolSize,"y",1,3).name("pool depth").onChange(function(T){r()}).listen(),A.add(o.params.simulation,"waterDamping",.005,.4).name("water damping").listen();const M=A.addFolder("foam");M.close(),M.add(o.params.simulation.foam,"enabled").name("enabled"),M.add(o.params.simulation.foam,"velThreshold",0,15).name("velocity threshold"),M.add(o.params.simulation.foam,"velMax",0,20).name("max velocity"),M.add(o.params.simulation.foam,"dispersion",0,.1).name("dispersion"),M.add(o.params.simulation.foam,"timeVariation",0,10).name("time variation"),M.add(o.params.simulation.foam,"spaceVariation",0,100).name("space variation"),M.add(o.params.simulation.foam,"attenuation",0,.2).name("attenuation");const L=ne.addFolder("swimmers");L.close(),L.add(o.params.swimmers,"showSpheres").name("show spheres").listen(),L.add(o.params.swimmers,"useTracking").name("use tracking data").listen();const B=ne.addFolder("camera");B.close(),B.add(o.params,"fov",28,45).name("fov").listen().onChange(function(T){o.params.visualizations.sparks.fov=T*2*Math.PI/360,a.matrixMode(a.PROJECTION),a.loadIdentity(),a.perspective(o.params.fov,a.canvas.width/a.canvas.height,.01,100),a.matrixMode(a.MODELVIEW),console.log("perspective : "+o.params.fov)});const y=ne.addFolder("quiver");y.close(),y.add(o.params.quiver,"amplitude",.01,1).name("amplitude"),y.add(o.params.quiver,"omega",.5,5).name("omega"),y.add(o.params.quiver,"amplitudeFactor",.5,.9).name("amplitude factor"),y.add(o.params.quiver,"frequencyFactor",1.1,2).name("frequency factor"),y.add(o.params.quiver,"waveLength",1,30).name("wave length");const q=ne.addFolder("corner view");q.close(),q.add(o.params.cornerView,"show").name("show");const U=ne.addFolder("chrono-photography");U.close(),U.add(o.params.chronoPhotography,"available").name("available").onChange(()=>{o.params.chronoPhotography.available?o.drawingFrameBuffer=o.chronoFrameBuffer:o.drawingFrameBuffer=null}),o._gui=ne},ze=150,le=100;function At(a){const r=document.createElement("div");if(document.body.appendChild(r),r.id="event-editor",r.style.position="fixed",r.display="block",r.style.bottom="60px",r.style.left="10px",r.style.right="10px",r.style.height="120px",r.style.zIndex="4",r.style.background="#222",r.style.color="#fff",r.style.overflow="auto",r.style.padding="4px",r.style.fontSize="12px",r.style.position=r.style.position||"relative",!r){console.warn(`event editor container "${a}" not found`);return}let s,d=!1;const u=[{name:"showFlags",type:"boolean"},{name:"showWR",type:"boolean"},{name:"showSpeed",type:"boolean"},{name:"showDivingDistance",type:"boolean"},{name:"showFinishTimes",type:"boolean"},{name:"showSwimmersLines",type:"select",options:o.params.visualizations.swimmersLinesList},{name:"swimmersLinesMode",type:"select",options:o.params.visualizations.swimmersLinesModeList},{name:"customWaterPerturbation",type:"select",options:o.params.visualizations.customParametersList},{name:"waterColorParameter",type:"select",options:o.params.visualizations.customParametersList},{name:"medalsModeBeforeFinish",type:"select",options:["none","stars","bright","lanes"]},{name:"medalsModeAfterFinish",type:"select",options:["none","stars","bright","lanes"]},{name:"rankSwimmerToggle",type:"number",min:1,max:10}];function v(T){const z=document.createElement("div");z.style.flex="1",z.style.padding="4px",z.style.background="#222",z.style.border="1px solid #555",z.style.borderRadius="4px",z.style.fontFamily="monospace",z.style.fontSize="12px",z.style.whiteSpace="pre-wrap",z.style.overflow="auto",z.style.maxHeight="100px";function P(){const k=T.params;if(Object.keys(k).length===0){z.textContent="(no params)";return}const G=Object.entries(k).map(([V,I])=>`${V}: ${JSON.stringify(I)}`);z.textContent=G.join(`
`)}return P(),{element:z,update:P}}function _(T,z){const P=document.createElement("div");P.style.display="flex",P.style.flexWrap="wrap",P.style.margin="4px 0",P.style.background="#333",P.style.padding="4px";function k(){z&&(z(),U())}u.forEach(D=>{const K=document.createElement("div");K.style.marginRight="8px",K.style.marginBottom="4px";const ee=document.createElement("label");ee.style.whiteSpace="nowrap",ee.textContent=D.name+":",K.appendChild(ee);let F;if(D.type==="boolean"){F=document.createElement("select"),[{value:"",label:"—"},{value:"true",label:"ON"},{value:"false",label:"OFF"}].forEach(j=>{const w=document.createElement("option");w.value=j.value,w.textContent=j.label,F.appendChild(w)});const Y=T.params[D.name];Y===void 0?F.value="":Y===!0?F.value="true":Y===!1&&(F.value="false"),F.addEventListener("change",()=>{F.value===""?delete T.params[D.name]:F.value==="true"?T.params[D.name]=!0:F.value==="false"&&(T.params[D.name]=!1),k()})}else if(D.type==="select"){F=document.createElement("select");const X=document.createElement("option");X.value="",X.textContent="—",F.appendChild(X),D.options.forEach(Y=>{const j=document.createElement("option");j.value=Y,j.textContent=Y,F.appendChild(j)}),F.value=T.params[D.name]||"",F.addEventListener("change",()=>{F.value===""?delete T.params[D.name]:T.params[D.name]=F.value,k()})}else D.type==="number"&&(F=document.createElement("input"),F.type="number",D.min!==void 0&&(F.min=D.min),D.max!==void 0&&(F.max=D.max),F.placeholder="—",F.style.width="50px",F.value=T.params[D.name]!==void 0?T.params[D.name]:"",F.addEventListener("change",()=>{if(F.value==="")delete T.params[D.name];else{const X=parseFloat(F.value);isNaN(X)||(T.params[D.name]=X)}k()}));F&&K.appendChild(F),P.appendChild(K)});const G=document.createElement("div");G.style.marginRight="8px",G.style.marginBottom="4px";const V=document.createElement("label");V.style.whiteSpace="nowrap",V.textContent="transition :",G.appendChild(V);const I=document.createElement("input");return I.type="number",I.min=0,I.placeholder="—",I.style.width="50px",I.value=T.transition!==void 0?T.transition.duration:"",I.addEventListener("change",()=>{if(I.value===""){delete T.transition;return}const D=parseFloat(I.value);isNaN(D)||(T.transition={type:"dissolve",duration:D},k())}),G.appendChild(I),P.appendChild(G),P}function A(){const T=document.createElement("div");T.style.marginTop="8px",T.style.padding="8px",T.style.background="#555",T.style.border="1px solid #777";const z=document.createElement("div");z.textContent="Add New Event",z.style.fontWeight="bold",z.style.marginBottom="4px",T.appendChild(z);const P=document.createElement("input");P.type="number",P.placeholder="Distance",P.style.width="auto",P.style.marginRight="8px",T.appendChild(P);const k={params:{}},G=_(k,null);G.style.margin="4px 0",T.appendChild(G);const V=document.createElement("button");V.textContent="OK",V.addEventListener("click",()=>{const D=parseFloat(P.value);if(isNaN(D)){alert("Please enter a valid distance");return}const K={distance:D,...k};o.events.push(K),U(),s.remove(),s=null}),T.appendChild(V);const I=document.createElement("button");return I.textContent="cancel",I.addEventListener("click",()=>{s.remove(),s=null}),T.appendChild(I),T}function M(T,z,{title:P="",id:k=null,color:G="#e74c3c"}){const V=T/z*100,I=document.createElement("div");return I.style.position="absolute",I.style.left=V+"%",I.style.transform="translateX(-50%)",I.style.width="4px",I.style.height="100%",I.style.background=G,I.style.cursor="pointer",I.title=P,k&&(I.id=k),I.addEventListener("click",()=>{q(idx)}),I}function L(){let T=document.getElementById("distance-marker");const z=o.swimmers[0].getDistanceTraveled();if(!T){if(d)return;const P=document.getElementById("timeline-track");T=M(z,le,{color:"blue",id:"distance-marker"}),P.appendChild(T)}T.style.left=z+"%"}function B(T){d=T,y()}function y(){r.innerHTML="";const T=document.createElement("button");if(T.textContent=d?"□":"—",T.style.position="absolute",T.style.top="0",T.style.right="0",T.style.width="20px",T.style.height="20px",T.style.zIndex="100001",T.addEventListener("click",()=>{d=!d,y()}),r.appendChild(T),d){r.style.height="20px";return}r.style.height="300px";const z=document.createElement("div");if(z.style.position="relative",z.style.top="0px",z.style.left="50%",z.style.transform="translateX(-50%)",z.style.width="80px",z.style.height="15px",z.style.background="grey",z.style.border="1px solid black",z.style.cursor="ns-resize",z.style.zIndex="100000",z.style.lineHeight="16px",z.style.textAlign="center",z.textContent="drag",r.appendChild(z),z.addEventListener("mousedown",t=>{t.preventDefault();const l=t.clientY,c=r.offsetHeight;function m(x){const g=c-(x.clientY-l);g>20&&(r.style.height=g+"px")}function h(){document.removeEventListener("mousemove",m),document.removeEventListener("mouseup",h)}document.addEventListener("mousemove",m),document.addEventListener("mouseup",h)}),!o.events){r.textContent="no events defined";return}const P=document.createElement("div");r.appendChild(P),P.style.marginRight="8px",P.style.marginBottom="4px";const k=document.createElement("label");k.style.whiteSpace="nowrap",k.textContent="select scene",k.style.margin="30px",P.appendChild(k);const G=document.createElement("select");G.style.width="auto",o.scenesList.forEach(t=>{const l=document.createElement("option");l.textContent=t.title,l.value=t.title,G.appendChild(l)}),G.addEventListener("change",()=>{o.setScene(G.value)}),P.appendChild(G);const V=o.events.slice().sort((t,l)=>{const c=t.distance!==void 0?t.distance:t.time!==void 0?t.time:0,m=l.distance!==void 0?l.distance:l.time!==void 0?l.time:0;return c-m}),I=new Set;V.forEach(t=>{t.params&&Object.keys(t.params).forEach(l=>I.add(l))});let D=u.map(t=>t.name).filter(t=>I.has(t));const K=["#4caf50","#2196f3","#ff9800","#9c27b0","#f44336","#009688","#e91e63","#3f51b5"],ee={};D.forEach((t,l)=>{ee[t]=K[l%K.length]});const F={},X={};D.forEach(t=>{X[t]=!1,F[t]=0});const Y=[];if(V.forEach(t=>{const l=t.distance!==void 0?t.distance:t.time!==void 0?t.time:0;t.params&&Object.keys(t.params).forEach(c=>{if(D.includes(c)){const m=!!t.params[c];m!==X[c]&&(X[c]&&Y.push({name:c,start:F[c],end:l}),X[c]=m,F[c]=l)}})}),D.forEach(t=>{X[t]&&Y.push({name:t,start:F[t],end:le})}),D.length>0){const t=document.createElement("div");t.style.position="relative";const l=20;t.style.height=D.length*l+"px",t.style.background="#222",t.style.marginBottom="4px",t.style.marginTop="10px",D.forEach((m,h)=>{const x=document.createElement("div");x.textContent=m,x.style.position="absolute",x.style.left="0",x.style.top=h*l+2+"px",x.style.width=ze+"px",x.style.color="#aaa",x.style.fontSize="10px",x.style.pointerEvents="none",t.appendChild(x)});const c=document.createElement("div");c.style.position="absolute",c.style.left=ze+"px",c.style.top="0",c.style.right="0",c.style.bottom="0",c.style.overflow="hidden",t.appendChild(c),Y.forEach(m=>{const h=document.createElement("div"),x=m.start/le*100,g=(m.end-m.start)/le*100;h.style.position="absolute",h.style.left=x+"%",h.style.top=D.indexOf(m.name)*l+2+"px",h.style.height=l-4+"px",h.style.width=g+"%",h.style.background=ee[m.name]||"#4caf50",h.title=`${m.name}: ${m.start.toFixed(2)} → ${m.end.toFixed(2)}`;const f=document.createElement("span");if(f.textContent=`${m.name}: ${m.start.toFixed(2)} → ${m.end.toFixed(2)}`,f.style.position="absolute",f.style.top="0",f.style.left="2px",f.style.fontSize="10px",f.style.color="white",f.style.pointerEvents="none",f.style.whiteSpace="nowrap",f.style.overflow="hidden",f.style.textOverflow="ellipsis",h.appendChild(f),m.end<le){const E=document.createElement("div");E.style.position="absolute",E.style.right="0",E.style.top="0",E.style.width="5px",E.style.height="100%",E.style.background="rgba(255,255,255,0.5)",E.style.cursor="ew-resize",h.appendChild(E),E.addEventListener("mousedown",R=>{R.preventDefault(),R.stopPropagation();const S=R.clientX,C=h.offsetWidth;function W(J){const re=J.clientX-S,se=Math.max(1,C+re),ue=se/c.offsetWidth*100;h.style.width=ue+"%";const rt=m.start+se/c.offsetWidth*le;f.textContent=`${m.name}: ${m.start.toFixed(2)} → ${rt.toFixed(2)}`}function O(){document.removeEventListener("mousemove",W),document.removeEventListener("mouseup",O);const J=h.offsetWidth,re=m.start+J/c.offsetWidth*le,se=V.find(ue=>(ue.distance!==void 0?ue.distance:ue.time!==void 0?ue.time:0)===m.end);se&&(se.distance!==void 0?se.distance=re:se.time!==void 0&&(se.time=re)),U()}document.addEventListener("mousemove",W),document.addEventListener("mouseup",O)})}c.appendChild(h)}),r.appendChild(t)}const j=document.createElement("div");j.style.position="relative",j.style.height="40px",j.style.background="#222",j.style.marginBottom="4px",j.style.paddingLeft="80px";const w=document.createElement("div");w.id="timeline-track",w.style.position="absolute",w.style.background="#444",w.style.left=ze+"px",w.style.top="0",w.style.right="0",w.style.bottom="0",j.appendChild(w),V.forEach((t,l)=>{const c=t.distance!==void 0?t.distance:t.time!==void 0?t.time:0,m=`event ${l}: ${JSON.stringify(t.params)}`,h=M(c,le,{title:m});w.appendChild(h)}),r.appendChild(j),V.forEach((t,l)=>{const c=document.createElement("div");c.style.display="flex",c.style.flexDirection="column",c.style.marginBottom="4px";const m=document.createElement("div");m.style.display="flex",m.style.alignItems="center";const h=document.createElement("input");h.type="number",h.style.width="60px",h.value=t.distance!==void 0?t.distance:t.time!==void 0?t.time:0,h.addEventListener("change",()=>{const R=parseFloat(h.value);isNaN(R)||(t.distance!==void 0?t.distance=R:t.time=R,U())}),m.appendChild(h);const x=v(t);m.appendChild(x.element);const g=document.createElement("button");g.textContent="⚙",g.style.marginLeft="4px",m.appendChild(g);const f=document.createElement("button");f.textContent="✖",f.style.marginLeft="4px",f.addEventListener("click",()=>{const R=o.events.indexOf(V[l]);R!==-1&&(o.events.splice(R,1),y())}),m.appendChild(f),c.appendChild(m);let E;g.addEventListener("click",()=>{E?(E.remove(),E=null):(E=_(t,x.update),c.appendChild(E))}),r.appendChild(c)});const i=document.createElement("button");i.textContent="+ add event",i.addEventListener("click",()=>{s?(s.remove(),s=null):(s=A(),r.appendChild(s),r.scrollTop=r.scrollHeight)}),r.appendChild(i);const n=document.createElement("button");n.textContent="export JSON",n.style.marginLeft="8px",n.addEventListener("click",()=>{const t=JSON.stringify(o.events,null,2),l=new Blob([t],{type:"application/json"}),c=URL.createObjectURL(l),m=document.createElement("a");m.href=c,m.download="vis-config.json",m.click(),URL.revokeObjectURL(c)}),r.appendChild(n);const e=document.createElement("input");e.type="file",e.accept=".json",e.style.marginLeft="8px",e.addEventListener("change",t=>{const l=t.target.files[0];if(l){const c=new FileReader;c.onload=m=>{try{const h=JSON.parse(m.target.result);o.events=h,U()}catch(h){alert("Invalid JSON: "+h.message)}},c.readAsText(l)}}),r.appendChild(e)}function q(T){const P=r.querySelectorAll("div")[1+T];P&&P.scrollIntoView({behavior:"smooth",block:"center"})}function U(){o.events.sort((T,z)=>{const P=T.distance!==void 0?T.distance:T.time!==void 0?T.time:0,k=z.distance!==void 0?z.distance:z.time!==void 0?z.time:0;return P-k}),y()}y(),o._renderTimeline=y,o._updateDistanceMarker=L,o._setPannelMinimized=B}const Qe=new p.Mesh.plane({width:2,height:2,coords:!0,normals:!0}),Ct=new p.Shader(`
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
`),Ft=new p.Shader(`
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
`);let ge=new p.Texture,Ie=new p.Texture,et=!1,Ge=null;const tt=(a,r,s)=>{et=!0,ge=new p.Texture(a,r,{type:s.FLOAT,filter:s.NEAREST}),Ie=new p.Texture(a,r,{type:s.FLOAT,filter:s.NEAREST}),Ge=s.createFramebuffer(),s.bindFramebuffer(s.FRAMEBUFFER,Ge);const d=s.COLOR_ATTACHMENT0;s.framebufferTexture2D(s.FRAMEBUFFER,d,s.TEXTURE_2D,ge.id,0),s.bindFramebuffer(s.FRAMEBUFFER,null)};function We(a){a.x/=o.gl.canvas.width/2,a.x-=1,a.y/=o.gl.canvas.height/2,a.y-=1}const Pt=()=>{et||tt(o.gl.canvas.width,o.gl.canvas.height,o.gl);const a=o.params.simulation.poolSize,r=o.gl.project(a.x/2,0,o.distanceFixed+1-a.z/2),s=o.gl.project(-a.x/2,0,o.distanceFixed+1-a.z/2);We(r),We(s),Ie.drawTo(()=>{ge.bind(0),o.gl.activeTexture(o.gl.TEXTURE1),o.gl.bindTexture(o.gl.TEXTURE_2D,o.drawingTexture),Ct.uniforms({oldPicture:0,screen:1,distanceFixed:o.distanceFixed,poolSize:[o.params.simulation.poolSize.x,o.params.simulation.poolSize.y,o.params.simulation.poolSize.z],linep1:[r.x,r.y],linep2:[s.x,s.y]}).draw(Qe)}),ge.swapWith(Ie),o.gl.bindFramebuffer(o.gl.FRAMEBUFFER,o.drawingFrameBuffer)},Dt=()=>{o.gl.bindFramebuffer(o.gl.FRAMEBUFFER,null),ge.bind(7),o.gl.activeTexture(o.gl.TEXTURE8),o.gl.bindTexture(o.gl.TEXTURE_2D,o.drawingTexture),Ft.uniforms({picture:7,screen:8}).draw(Qe)};o._fixTexture=Pt;o._clearChronoTexture=tt;function Mt(a){return a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n/g,"<br>")}function It(a){var r=Mt(a);r=="WebGL not supported"&&(r='Your browser does not support WebGL.<br>Please see    <a href="http://www.khronos.org/webgl/wiki/Getting_a_WebGL_Implementation">    Getting a WebGL Implementation</a>.');var s=document.getElementById("loading");s.innerHTML=r,s.style.zIndex=1}window.onerror=It;var Ae,Z;const Lt=10,b=o.gl;var ye,Le;N.initAttributes();function it(){document.getElementById("warning").hidden=!(o.resolution.x*o.resolution.y>3e5&&o.water&&o.params.visualizations.areaConservationEnabled)}let Ce=0;function Bt(a){Ce+=a,Ce>=1&&(document.getElementById("fps").innerText=`${(1/a).toFixed(1)} FPS`,Ce=0)}function he(){console.log("reset"),document.getElementById("resolution").innerText=`Resolution: ${o.resolution.x} x ${o.resolution.y}`,it(),ye=new p.Vector(0,-o.params.simulation.poolSize.z/2+1),o.water.reset(o.resolution),Z.flagCenter=ye,Z.flagSize=Le,Z.reset();const a=o.params.simulation.poolSize.x/Lt;let r=o.params.simulation.poolSize.x/2-a/2;for(let s of o.swimmers)s.body.center.x=r,s.startingPoint.x=r,r-=a}function Nt(a){const r=parseFloat(a.target.value);isNaN(r)||(o.setRaceTime(r),o.swimmers.forEach(s=>s.setCurrentDataIndex()))}window.onload=function(){var a=window.devicePixelRatio||1,r=document.getElementById("help");function s(){var t=innerWidth,l=innerHeight;b.canvas.width=t*a,b.canvas.height=l*a,b.canvas.style.width=t+"px",b.canvas.style.height=l+"px",b.viewport(0,0,b.canvas.width,b.canvas.height),b.matrixMode(b.PROJECTION),b.loadIdentity(),b.perspective(o.params.fov,b.canvas.width/b.canvas.height,.01,100),b.matrixMode(b.MODELVIEW),o.resetDrawingTexture(),e()}document.body.appendChild(b.canvas),b.canvas.oncontextmenu=function(t){t.preventDefault()},b.clearColor(0,0,0,1),ye=new p.Vector(0,-o.params.simulation.poolSize.z/2+1),Le=.7;const d=document.getElementById("time-slider");d&&d.addEventListener("input",Nt);const u=document.getElementById("drop-zone");let v=0;document.addEventListener("dragenter",t=>{v++,u.style.display="flex"}),document.addEventListener("dragover",t=>{t.preventDefault(),t.dataTransfer.dropEffect="copy"}),document.addEventListener("dragleave",t=>{v--,v===0&&(u.style.display="none")}),zt(b,he),o._reset=he,setTimeout(()=>{At("event-editor")},50),Z=new ce(b,o.water,ye,Le),Ae=new Be({xneg:document.getElementById("xneg"),xpos:document.getElementById("xpos"),yneg:document.getElementById("ypos"),ypos:document.getElementById("ypos"),zneg:document.getElementById("zneg"),zpos:document.getElementById("zpos")},b);const _=new N(new p.Vector(0,0,0));if(o.swimmers.push(_),o.water=new ae(o.gl),!o.water.textureA.canDrawTo()||!o.water.textureB.canDrawTo())throw new Error("Rendering to floating-point textures is required but not supported");he();for(var A=0;A<20;A++)o.water.addDrop(Math.random()*2-1,Math.random()*2-1,.06,A&1?.01:-.01);document.getElementById("loading").innerHTML="",s();var M=window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(t){setTimeout(t,0)},L=new Date().getTime();function B(){var t=new Date().getTime();o.paused||(i((t-L)/1e3),e()),L=t,M(B)}M(B),window.onresize=s;var y,q,U,T=-1,z=0,P=1,k=2;const G=3;var V,I;function D(t,l,c){if(V=t,I=l,!c||c.button===0){var m=new p.Raytracer,h=m.getRayForPixel(t*a,l*a),x=m.eye.add(h.multiply(-m.eye.y/h.y));for(let f of o.swimmers){var g=p.Raytracer.hitTestSphere(m.eye,h,f.body.center,f.body.radius);if(g){T=P,U=f,f.body.cinematic=!0,y=g.hit,q=m.getRayForPixel(b.canvas.width/2,b.canvas.height/2).negative();return}}Math.abs(x.x)<o.params.simulation.poolSize.x/2&&Math.abs(x.z)<o.params.simulation.poolSize.z/2&&(T=z,K(t,l))}else c.button===2?T=k:c.button===1&&(T=G)}function K(t,l,c){switch(T){case z:{var m=new p.Raytracer,h=m.getRayForPixel(t*a,l*a),x=m.eye.add(h.multiply(-m.eye.y/h.y));o.water.addDrop(x.x/o.params.simulation.poolSize.x*2,x.z/o.params.simulation.poolSize.z*2,.06,.03),o.paused&&(o.water.updateNormals(),Z.updateCaustics(o.water));break}case P:{var m=new p.Raytracer,h=m.getRayForPixel(t*a,l*a),g=-q.dot(m.eye.subtract(y))/q.dot(h),f=m.eye.add(h.multiply(g));const S=U.body.center.add(f.subtract(y)),C=U.body.radius,W=Math.max(C-o.params.simulation.poolSize.x/2,Math.min(o.params.simulation.poolSize.x/2-C,S.x)),O=Math.max(C-o.params.simulation.poolSize.y,Math.min(10,S.y)),J=Math.max(C-o.params.simulation.poolSize.z/2,Math.min(o.params.simulation.poolSize.z/2-C,S.z));U.body.move(new p.Vector(W,O,J)),y=f,o.paused&&Z.updateCaustics(o.water);break}case k:{if(c&&c.shiftKey){o.angleZ-=t-V,o.angleZ=Math.max(-89.999,Math.min(89.999,o.angleZ));break}console.log("updated angleY"),o.angleY-=t-V,o.angleX-=l-I,o.angleX=Math.max(-89.999,Math.min(89.999,o.angleX));break}case G:{const E=.001*o.zoomDistance;o.translateX+=E*(t-V),o.translateY-=E*(l-I)}}V=t,I=l,o.paused&&e()}function ee(){T=-1,U&&(U.body.cinematic=!N.useGravity)}function F(t){return t===r||t.parentNode&&F(t.parentNode)}function X(t){return t&&(t.id==="event-editor"||t.parentNode&&X(t.parentNode))}function Y(t){o.zoomDistance*=1-t*2e-4,o.zoomDistance=Math.max(2,Math.min(1e3,o.zoomDistance)),o.paused&&e()}addEventListener("wheel",function(t){if(!X(t.target)){var l=t.deltaY;Y(-l)}}),document.onmousedown=function(t){b.canvas.focus(),F(t.target)||D(t.pageX,t.pageY,t)},document.onmousemove=function(t){K(t.pageX,t.pageY,t)},document.onmouseup=function(){ee()},document.ontouchstart=function(t){t.touches.length===1&&!F(t.target)&&(t.preventDefault(),D(t.touches[0].pageX,t.touches[0].pageY,!1))},document.ontouchmove=function(t){t.touches.length===1&&K(t.touches[0].pageX,t.touches[0].pageY)},document.ontouchend=function(t){t.touches.length==0&&ee()};function j(){o.paused?o.play():o.pause()}const w=async function(t){if(t.which==32)j();else if(t.which==71)o.useGravity(!N.useGravity);else if(t.which==76&&o.paused)e();else if(t.which==74)o.swimmers.forEach(l=>l.jump(2));else if(t.which==67)o.params.visualizations.areaConservationEnabled=!o.params.visualizations.areaConservationEnabled,it(),console.log("Area conservation "+(o.params.visualizations.areaConservationEnabled?"enabled.":"disabled."));else if(t.which==80)o.water.showProjectionGrid=!o.water.showProjectionGrid,console.log("Projection grid "+(o.water.showProjectionGrid?"enabled.":"disabled."));else if(t.which==65)o.water.showAreaConservedGrid=!o.water.showAreaConservedGrid,console.log("Area conserved grid "+(o.water.showAreaConservedGrid?"enabled.":"disabled."));else if(t.which==83){if(N.swimming=!N.swimming,N.swimming)for(let l of o.swimmers)l.swim(!0);else stopRace();console.log("Swimming "+(N.swimming?"enabled.":"disabled."))}else t.which==86?o.params.video.show=!o.params.video.show:t.which==72?(document.getElementById("commands").hidden=!document.getElementById("commands").hidden,document.getElementById("h").hidden=!document.getElementById("h").hidden):t.which==68?o.playingDemo?o.stopDemo():await o.launchDemo():t.which==81?o.chronoPhotography():t.which==82?(o.setScene("100m freestyle").then(()=>o.startRace()),o._setPannelMinimized(!0)):t.which==40?(o.resolution.x>129&&(o.resolution.x=Math.round(o.resolution.x/2)),he(),console.log("decreasing x resolution")):t.which==38?(o.resolution.x<16384&&(o.resolution.x=Math.round(o.resolution.x*2)),he(),console.log("increasing x resolution")):t.which==37?(o.resolution.y>129&&(o.resolution.y=Math.round(o.resolution.y/2)),he(),console.log("decreasing y resolution")):t.which==39&&(o.resolution.y<16384&&(o.resolution.y=Math.round(o.resolution.y*2)),he(),console.log("increasing y resolution"))};b.canvas.addEventListener("keydown",w);function i(t){if(!(t>1)){if(T==P)for(let l of o.swimmers)l.body.velocity=new p.Vector(0,0,0);b.clearColor(0,0,0,1),b.bindFramebuffer(b.FRAMEBUFFER,null),b.clear(b.COLOR_BUFFER_BIT|b.DEPTH_BUFFER_BIT);for(let l of o.swimmers)l.update(t);o.water.updateSpheres(t);for(let l=0;l<o.params.numSteps;l++)o.water.stepSimulation(t);Z.updateCaustics(o.water),o.updateTime(t),o.updateParams(),d.value=o.getRaceTime(),Bt(t),o.updateDemo(t)}}function n(){if(!N.raceHasStarted||!o.params.cornerView.show)return;o.cornerView=!0,b.loadIdentity(),b.translate(0,0,-35),b.rotate(90,1,0,0),b.rotate(-90,0,1,0),b.translate(0,.5,0);const t=b.canvas.height/3,l=16*t/9,c=0,m=b.canvas.height-t;b.viewport(c,m,l,t),Z.renderWater(o.water,Ae,o.params.visualizations.shadow),Z.renderSpheres(o.water),b.viewport(0,0,b.canvas.width,b.canvas.height),b.loadIdentity(),b.translate(o.translateX,o.translateY,-o.zoomDistance),b.rotate(-o.angleZ,0,0,1),b.rotate(-o.angleX,1,0,0),b.rotate(-o.angleY,0,1,0),b.translate(0,.5,0),o.cornerView=!1}function e(){p.keys.L&&(Z.lightDir=p.Vector.fromAngles((90-o.angleY)*Math.PI/180,-o.angleX*Math.PI/180),o.paused&&Z.updateCaustics(o.water)),o.isOneVisualizationEnabled()&&N.updateAttributesTexture(),o.water.addOrRemoveVisualizationWaves(!0),o.water.updateNormals(),b.clearColor(.1,.2,.5,1),b.bindFramebuffer(b.FRAMEBUFFER,o.drawingFrameBuffer),b.clear(b.COLOR_BUFFER_BIT|b.DEPTH_BUFFER_BIT),b.loadIdentity(),b.translate(o.translateX,o.translateY,-o.zoomDistance),b.rotate(-o.angleZ,0,0,1),b.rotate(-o.angleX,1,0,0),b.rotate(-o.angleY,0,1,0),b.translate(0,.5,0),b.enable(b.DEPTH_TEST),b.disable(b.BLEND),b.viewport(0,0,b.canvas.width,b.canvas.height),Z.sphereCenter=o.swimmers[0].body.center,Z.sphereRadius=o.swimmers[0].body.radius,Z.renderCube(o.water),Z.renderWater(o.water,Ae,o.params.visualizations.shadow),b.enable(b.DEPTH_TEST),o.params.swimmers.showSpheres&&Z.renderSpheres(o.water),o.renderVideo(),o.params.chronoPhotography.available&&Dt(),b.disable(b.DEPTH_TEST),n(),o.water.addOrRemoveVisualizationWaves(!1)}};
//# sourceMappingURL=swimming-DdHlvpmt.js.map
