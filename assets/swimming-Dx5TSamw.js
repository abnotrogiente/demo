var Ze=Object.defineProperty;var ke=r=>{throw TypeError(r)};var $e=(r,n,c)=>n in r?Ze(r,n,{enumerable:!0,configurable:!0,writable:!0,value:c}):r[n]=c;var ne=(r,n,c)=>$e(r,typeof n!="symbol"?n+"":n,c),Je=(r,n,c)=>n.has(r)||ke("Cannot "+c);var Ne=(r,n,c)=>n.has(r)?ke("Cannot add the same private member more than once"):n instanceof WeakSet?n.add(r):n.set(r,c);var le=(r,n,c)=>(Je(r,n,"access private method"),c);import"./modulepreload-polyfill-B5Qt9EMX.js";import{g as Qe}from"./lil-gui.module.min-Vka56b52.js";var v=function(){var r,n={create:function(t){t=t||{};var i=document.createElement("canvas");i.width=800,i.height=600,"alpha"in t||(t.alpha=!1);try{r=i.getContext("webgl2",t)}catch{}try{r=r||i.getContext("experimental-webgl",t)}catch{}if(!r)throw new Error("WebGL not supported");return r.HALF_FLOAT_OES=36193,c(),f(),x(),G(),r},keys:{},Matrix:T,Indexer:Y,Buffer:S,Mesh:_,HitTest:z,Raytracer:V,Shader:q,Texture:U,Vector:d};function c(){r.MODELVIEW=W|1,r.PROJECTION=W|2;var t=new T,i=new T;r.modelviewMatrix=new T,r.projectionMatrix=new T;var e=[],o=[],s,h;r.matrixMode=function(u){switch(u){case r.MODELVIEW:s="modelviewMatrix",h=e;break;case r.PROJECTION:s="projectionMatrix",h=o;break;default:throw new Error("invalid matrix mode "+u)}},r.loadIdentity=function(){T.identity(r[s])},r.loadMatrix=function(u){for(var a=u.m,m=r[s].m,g=0;g<16;g++)m[g]=a[g]},r.multMatrix=function(u){r.loadMatrix(T.multiply(r[s],u,i))},r.perspective=function(u,a,m,g){r.multMatrix(T.perspective(u,a,m,g,t))},r.frustum=function(u,a,m,g,p,w){r.multMatrix(T.frustum(u,a,m,g,p,w,t))},r.ortho=function(u,a,m,g,p,w){r.multMatrix(T.ortho(u,a,m,g,p,w,t))},r.scale=function(u,a,m){r.multMatrix(T.scale(u,a,m,t))},r.translate=function(u,a,m){r.multMatrix(T.translate(u,a,m,t))},r.rotate=function(u,a,m,g){r.multMatrix(T.rotate(u,a,m,g,t))},r.lookAt=function(u,a,m,g,p,w,R,E,b){r.multMatrix(T.lookAt(u,a,m,g,p,w,R,E,b,t))},r.pushMatrix=function(){h.push(Array.prototype.slice.call(r[s].m))},r.popMatrix=function(){var u=h.pop();r[s].m=M?new Float32Array(u):u},r.project=function(u,a,m,g,p,w){g=g||r.modelviewMatrix,p=p||r.projectionMatrix,w=w||r.getParameter(r.VIEWPORT);var R=p.transformPoint(g.transformPoint(new d(u,a,m)));return new d(w[0]+w[2]*(R.x*.5+.5),w[1]+w[3]*(R.y*.5+.5),R.z*.5+.5)},r.unProject=function(u,a,m,g,p,w){g=g||r.modelviewMatrix,p=p||r.projectionMatrix,w=w||r.getParameter(r.VIEWPORT);var R=new d((u-w[0])/w[2]*2-1,(a-w[1])/w[3]*2-1,m*2-1);return T.inverse(T.multiply(p,g,t),i).transformPoint(R)},r.matrixMode(r.MODELVIEW)}function f(){var t={mesh:new _({coords:!0,colors:!0,triangles:!1}),mode:-1,coord:[0,0,0,0],color:[1,1,1,1],shader:new q("      uniform float pointSize;      out vec4 color;      out vec4 coord;      void main() {        color = gl_Color;        coord = gl_TexCoord;        gl_Position = gl_ModelViewProjectionMatrix * gl_Vertex;        gl_PointSize = pointSize;      }    ","      uniform sampler2D tex;      uniform float pointSize;      uniform bool useTexture;      in vec4 color;      in vec4 coord;      out vec4 fragColor;      void main() {        fragColor = color;        if (useTexture) fragColor *= texture(tex, coord.xy);      }    ")};r.pointSize=function(i){t.shader.uniforms({pointSize:i})},r.begin=function(i){if(t.mode!=-1)throw new Error("mismatched gl.begin() and gl.end() calls");t.mode=i,t.mesh.colors=[],t.mesh.coords=[],t.mesh.vertices=[]},r.color=function(i,e,o,s){t.color=arguments.length==1?i.toArray().concat(1):[i,e,o,s||1]},r.texCoord=function(i,e){t.coord=arguments.length==1?i.toArray(2):[i,e]},r.vertex=function(i,e,o){t.mesh.colors.push(t.color),t.mesh.coords.push(t.coord),t.mesh.vertices.push(arguments.length==1?i.toArray():[i,e,o])},r.end=function(){if(t.mode==-1)throw new Error("mismatched gl.begin() and gl.end() calls");t.mesh.compile(),t.shader.uniforms({useTexture:!!r.getParameter(r.TEXTURE_BINDING_2D)}).draw(t.mesh,t.mode),t.mode=-1}}function x(){var t=r,i=0,e=0,o={},s=!1,h=Object.prototype.hasOwnProperty;function u(){for(var E in o)if(h.call(o,E)&&o[E])return!0;return!1}function a(E){var b={};for(var D in E)typeof E[D]=="function"?b[D]=function(ee){return function(){ee.apply(E,arguments)}}(E[D]):b[D]=E[D];b.original=E,b.x=b.pageX,b.y=b.pageY;for(var k=r.canvas;k;k=k.offsetParent)b.x-=k.offsetLeft,b.y-=k.offsetTop;return s?(b.deltaX=b.x-i,b.deltaY=b.y-e):(b.deltaX=0,b.deltaY=0,s=!0),i=b.x,e=b.y,b.dragging=u(),b.preventDefault=function(){b.original.preventDefault()},b.stopPropagation=function(){b.original.stopPropagation()},b}function m(E){r=t,u()||(A(document,"mousemove",g),A(document,"mouseup",p),I(r.canvas,"mousemove",g),I(r.canvas,"mouseup",p)),o[E.which]=!0,E=a(E),r.onmousedown&&r.onmousedown(E),E.preventDefault()}function g(E){r=t,E=a(E),r.onmousemove&&r.onmousemove(E),E.preventDefault()}function p(E){r=t,o[E.which]=!1,u()||(I(document,"mousemove",g),I(document,"mouseup",p),A(r.canvas,"mousemove",g),A(r.canvas,"mouseup",p)),E=a(E),r.onmouseup&&r.onmouseup(E),E.preventDefault()}function w(){s=!1}function R(){o={},s=!1}A(r.canvas,"mousedown",m),A(r.canvas,"mousemove",g),A(r.canvas,"mouseup",p),A(r.canvas,"mouseover",w),A(r.canvas,"mouseout",w),A(document,"contextmenu",R)}function y(t){var i={8:"BACKSPACE",9:"TAB",13:"ENTER",16:"SHIFT",27:"ESCAPE",32:"SPACE",37:"LEFT",38:"UP",39:"RIGHT",40:"DOWN"};return i[t]||(t>=65&&t<=90?String.fromCharCode(t):null)}function A(t,i,e){t.addEventListener(i,e)}function I(t,i,e){t.removeEventListener(i,e)}A(document,"keydown",function(t){if(!t.altKey&&!t.ctrlKey&&!t.metaKey){var i=y(t.keyCode);i&&(n.keys[i]=!0),n.keys[t.keyCode]=!0}}),A(document,"keyup",function(t){if(!t.altKey&&!t.ctrlKey&&!t.metaKey){var i=y(t.keyCode);i&&(n.keys[i]=!1),n.keys[t.keyCode]=!1}});function G(){(function(t){r.makeCurrent=function(){r=t}})(r),r.animate=function(){var t=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(s){setTimeout(s,16.666666666666668)},i=new Date().getTime(),e=r;function o(){r=e;var s=new Date().getTime();r.onupdate&&r.onupdate((s-i)/1e3),r.ondraw&&r.ondraw(),t(o),i=s}o()},r.fullscreen=function(t){t=t||{};var i=t.paddingTop||0,e=t.paddingLeft||0,o=t.paddingRight||0,s=t.paddingBottom||0;if(!document.body)throw new Error("document.body doesn't exist yet (call gl.fullscreen() from window.onload() or from inside the <body> tag)");document.body.appendChild(r.canvas),document.body.style.overflow="hidden",r.canvas.style.position="absolute",r.canvas.style.left=e+"px",r.canvas.style.top=i+"px";function h(){r.canvas.width=window.innerWidth-e-o,r.canvas.height=window.innerHeight-i-s,r.viewport(0,0,r.canvas.width,r.canvas.height),(t.camera||!("camera"in t))&&(r.matrixMode(r.PROJECTION),r.loadIdentity(),r.perspective(t.fov||45,r.canvas.width/r.canvas.height,t.near||.1,t.far||1e3),r.matrixMode(r.MODELVIEW)),r.ondraw&&r.ondraw()}A(window,"resize",h),h()}}var W=305397760,M=typeof Float32Array<"u";function T(){var t=Array.prototype.concat.apply([],arguments);t.length||(t=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),this.m=M?new Float32Array(t):t}T.prototype={inverse:function(){return T.inverse(this,new T)},transpose:function(){return T.transpose(this,new T)},multiply:function(t){return T.multiply(this,t,new T)},transformPoint:function(t){var i=this.m;return new d(i[0]*t.x+i[1]*t.y+i[2]*t.z+i[3],i[4]*t.x+i[5]*t.y+i[6]*t.z+i[7],i[8]*t.x+i[9]*t.y+i[10]*t.z+i[11]).divide(i[12]*t.x+i[13]*t.y+i[14]*t.z+i[15])},transformVector:function(t){var i=this.m;return new d(i[0]*t.x+i[1]*t.y+i[2]*t.z,i[4]*t.x+i[5]*t.y+i[6]*t.z,i[8]*t.x+i[9]*t.y+i[10]*t.z)}},T.inverse=function(t,i){i=i||new T;var e=t.m,o=i.m;o[0]=e[5]*e[10]*e[15]-e[5]*e[14]*e[11]-e[6]*e[9]*e[15]+e[6]*e[13]*e[11]+e[7]*e[9]*e[14]-e[7]*e[13]*e[10],o[1]=-e[1]*e[10]*e[15]+e[1]*e[14]*e[11]+e[2]*e[9]*e[15]-e[2]*e[13]*e[11]-e[3]*e[9]*e[14]+e[3]*e[13]*e[10],o[2]=e[1]*e[6]*e[15]-e[1]*e[14]*e[7]-e[2]*e[5]*e[15]+e[2]*e[13]*e[7]+e[3]*e[5]*e[14]-e[3]*e[13]*e[6],o[3]=-e[1]*e[6]*e[11]+e[1]*e[10]*e[7]+e[2]*e[5]*e[11]-e[2]*e[9]*e[7]-e[3]*e[5]*e[10]+e[3]*e[9]*e[6],o[4]=-e[4]*e[10]*e[15]+e[4]*e[14]*e[11]+e[6]*e[8]*e[15]-e[6]*e[12]*e[11]-e[7]*e[8]*e[14]+e[7]*e[12]*e[10],o[5]=e[0]*e[10]*e[15]-e[0]*e[14]*e[11]-e[2]*e[8]*e[15]+e[2]*e[12]*e[11]+e[3]*e[8]*e[14]-e[3]*e[12]*e[10],o[6]=-e[0]*e[6]*e[15]+e[0]*e[14]*e[7]+e[2]*e[4]*e[15]-e[2]*e[12]*e[7]-e[3]*e[4]*e[14]+e[3]*e[12]*e[6],o[7]=e[0]*e[6]*e[11]-e[0]*e[10]*e[7]-e[2]*e[4]*e[11]+e[2]*e[8]*e[7]+e[3]*e[4]*e[10]-e[3]*e[8]*e[6],o[8]=e[4]*e[9]*e[15]-e[4]*e[13]*e[11]-e[5]*e[8]*e[15]+e[5]*e[12]*e[11]+e[7]*e[8]*e[13]-e[7]*e[12]*e[9],o[9]=-e[0]*e[9]*e[15]+e[0]*e[13]*e[11]+e[1]*e[8]*e[15]-e[1]*e[12]*e[11]-e[3]*e[8]*e[13]+e[3]*e[12]*e[9],o[10]=e[0]*e[5]*e[15]-e[0]*e[13]*e[7]-e[1]*e[4]*e[15]+e[1]*e[12]*e[7]+e[3]*e[4]*e[13]-e[3]*e[12]*e[5],o[11]=-e[0]*e[5]*e[11]+e[0]*e[9]*e[7]+e[1]*e[4]*e[11]-e[1]*e[8]*e[7]-e[3]*e[4]*e[9]+e[3]*e[8]*e[5],o[12]=-e[4]*e[9]*e[14]+e[4]*e[13]*e[10]+e[5]*e[8]*e[14]-e[5]*e[12]*e[10]-e[6]*e[8]*e[13]+e[6]*e[12]*e[9],o[13]=e[0]*e[9]*e[14]-e[0]*e[13]*e[10]-e[1]*e[8]*e[14]+e[1]*e[12]*e[10]+e[2]*e[8]*e[13]-e[2]*e[12]*e[9],o[14]=-e[0]*e[5]*e[14]+e[0]*e[13]*e[6]+e[1]*e[4]*e[14]-e[1]*e[12]*e[6]-e[2]*e[4]*e[13]+e[2]*e[12]*e[5],o[15]=e[0]*e[5]*e[10]-e[0]*e[9]*e[6]-e[1]*e[4]*e[10]+e[1]*e[8]*e[6]+e[2]*e[4]*e[9]-e[2]*e[8]*e[5];for(var s=e[0]*o[0]+e[1]*o[4]+e[2]*o[8]+e[3]*o[12],h=0;h<16;h++)o[h]/=s;return i},T.transpose=function(t,i){i=i||new T;var e=t.m,o=i.m;return o[0]=e[0],o[1]=e[4],o[2]=e[8],o[3]=e[12],o[4]=e[1],o[5]=e[5],o[6]=e[9],o[7]=e[13],o[8]=e[2],o[9]=e[6],o[10]=e[10],o[11]=e[14],o[12]=e[3],o[13]=e[7],o[14]=e[11],o[15]=e[15],i},T.multiply=function(t,i,e){e=e||new T;var o=t.m,s=i.m,h=e.m;return h[0]=o[0]*s[0]+o[1]*s[4]+o[2]*s[8]+o[3]*s[12],h[1]=o[0]*s[1]+o[1]*s[5]+o[2]*s[9]+o[3]*s[13],h[2]=o[0]*s[2]+o[1]*s[6]+o[2]*s[10]+o[3]*s[14],h[3]=o[0]*s[3]+o[1]*s[7]+o[2]*s[11]+o[3]*s[15],h[4]=o[4]*s[0]+o[5]*s[4]+o[6]*s[8]+o[7]*s[12],h[5]=o[4]*s[1]+o[5]*s[5]+o[6]*s[9]+o[7]*s[13],h[6]=o[4]*s[2]+o[5]*s[6]+o[6]*s[10]+o[7]*s[14],h[7]=o[4]*s[3]+o[5]*s[7]+o[6]*s[11]+o[7]*s[15],h[8]=o[8]*s[0]+o[9]*s[4]+o[10]*s[8]+o[11]*s[12],h[9]=o[8]*s[1]+o[9]*s[5]+o[10]*s[9]+o[11]*s[13],h[10]=o[8]*s[2]+o[9]*s[6]+o[10]*s[10]+o[11]*s[14],h[11]=o[8]*s[3]+o[9]*s[7]+o[10]*s[11]+o[11]*s[15],h[12]=o[12]*s[0]+o[13]*s[4]+o[14]*s[8]+o[15]*s[12],h[13]=o[12]*s[1]+o[13]*s[5]+o[14]*s[9]+o[15]*s[13],h[14]=o[12]*s[2]+o[13]*s[6]+o[14]*s[10]+o[15]*s[14],h[15]=o[12]*s[3]+o[13]*s[7]+o[14]*s[11]+o[15]*s[15],e},T.identity=function(t){t=t||new T;var i=t.m;return i[0]=i[5]=i[10]=i[15]=1,i[1]=i[2]=i[3]=i[4]=i[6]=i[7]=i[8]=i[9]=i[11]=i[12]=i[13]=i[14]=0,t},T.perspective=function(t,i,e,o,s){var h=Math.tan(t*Math.PI/360)*e,u=h*i;return T.frustum(-u,u,-h,h,e,o,s)},T.frustum=function(t,i,e,o,s,h,u){u=u||new T;var a=u.m;return a[0]=2*s/(i-t),a[1]=0,a[2]=(i+t)/(i-t),a[3]=0,a[4]=0,a[5]=2*s/(o-e),a[6]=(o+e)/(o-e),a[7]=0,a[8]=0,a[9]=0,a[10]=-(h+s)/(h-s),a[11]=-2*h*s/(h-s),a[12]=0,a[13]=0,a[14]=-1,a[15]=0,u},T.ortho=function(t,i,e,o,s,h,u){u=u||new T;var a=u.m;return a[0]=2/(i-t),a[1]=0,a[2]=0,a[3]=-(i+t)/(i-t),a[4]=0,a[5]=2/(o-e),a[6]=0,a[7]=-(o+e)/(o-e),a[8]=0,a[9]=0,a[10]=-2/(h-s),a[11]=-(h+s)/(h-s),a[12]=0,a[13]=0,a[14]=0,a[15]=1,u},T.scale=function(t,i,e,o){o=o||new T;var s=o.m;return s[0]=t,s[1]=0,s[2]=0,s[3]=0,s[4]=0,s[5]=i,s[6]=0,s[7]=0,s[8]=0,s[9]=0,s[10]=e,s[11]=0,s[12]=0,s[13]=0,s[14]=0,s[15]=1,o},T.translate=function(t,i,e,o){o=o||new T;var s=o.m;return s[0]=1,s[1]=0,s[2]=0,s[3]=t,s[4]=0,s[5]=1,s[6]=0,s[7]=i,s[8]=0,s[9]=0,s[10]=1,s[11]=e,s[12]=0,s[13]=0,s[14]=0,s[15]=1,o},T.rotate=function(t,i,e,o,s){if(!t||!i&&!e&&!o)return T.identity(s);s=s||new T;var h=s.m,u=Math.sqrt(i*i+e*e+o*o);t*=Math.PI/180,i/=u,e/=u,o/=u;var a=Math.cos(t),m=Math.sin(t),g=1-a;return h[0]=i*i*g+a,h[1]=i*e*g-o*m,h[2]=i*o*g+e*m,h[3]=0,h[4]=e*i*g+o*m,h[5]=e*e*g+a,h[6]=e*o*g-i*m,h[7]=0,h[8]=o*i*g-e*m,h[9]=o*e*g+i*m,h[10]=o*o*g+a,h[11]=0,h[12]=0,h[13]=0,h[14]=0,h[15]=1,s},T.lookAt=function(t,i,e,o,s,h,u,a,m,g){g=g||new T;var p=g.m,w=new d(t,i,e),R=new d(o,s,h),E=new d(u,a,m),b=w.subtract(R).unit(),D=E.cross(b).unit(),k=b.cross(D).unit();return p[0]=D.x,p[1]=D.y,p[2]=D.z,p[3]=-D.dot(w),p[4]=k.x,p[5]=k.y,p[6]=k.z,p[7]=-k.dot(w),p[8]=b.x,p[9]=b.y,p[10]=b.z,p[11]=-b.dot(w),p[12]=0,p[13]=0,p[14]=0,p[15]=1,g};function Y(){this.unique=[],this.indices=[],this.map={}}Y.prototype={add:function(t){var i=JSON.stringify(t);return i in this.map||(this.map[i]=this.unique.length,this.unique.push(t)),this.map[i]}};function S(t,i){this.buffer=null,this.target=t,this.type=i,this.data=[]}S.prototype={compile:function(t){for(var i=[],e=0,o=1e4;e<this.data.length;e+=o)i=Array.prototype.concat.apply(i,this.data.slice(e,e+o));var s=this.data.length?i.length/this.data.length:0;if(s!=Math.round(s))throw new Error("buffer elements not of consistent size, average size is "+s);this.buffer=this.buffer||r.createBuffer(),this.buffer.length=i.length,this.buffer.spacing=s,r.bindBuffer(this.target,this.buffer),r.bufferData(this.target,new this.type(i),t||r.STATIC_DRAW)}};function _(t){t=t||{},this.vertexBuffers={},this.indexBuffers={},this.addVertexBuffer("vertices","gl_Vertex"),t.coords&&this.addVertexBuffer("coords","gl_TexCoord"),t.normals&&this.addVertexBuffer("normals","gl_Normal"),t.colors&&this.addVertexBuffer("colors","gl_Color"),(!("triangles"in t)||t.triangles)&&this.addIndexBuffer("triangles"),t.lines&&this.addIndexBuffer("lines")}_.prototype={addVertexBuffer:function(t,i){var e=this.vertexBuffers[i]=new S(r.ARRAY_BUFFER,Float32Array);e.name=t,this[t]=[]},addIndexBuffer:function(t){this.indexBuffers[t]=new S(r.ELEMENT_ARRAY_BUFFER,Uint16Array),this[t]=[]},compile:function(){for(var t in this.vertexBuffers){var i=this.vertexBuffers[t];i.data=this[i.name],i.compile()}for(var e in this.indexBuffers){var i=this.indexBuffers[e];i.data=this[e],i.compile()}},transform:function(t){if(this.vertices=this.vertices.map(function(e){return t.transformPoint(d.fromArray(e)).toArray()}),this.normals){var i=t.inverse().transpose();this.normals=this.normals.map(function(e){return i.transformVector(d.fromArray(e)).unit().toArray()})}return this.compile(),this},computeNormals:function(){this.normals||this.addVertexBuffer("normals","gl_Normal");for(var t=0;t<this.vertices.length;t++)this.normals[t]=new d;for(var t=0;t<this.triangles.length;t++){var i=this.triangles[t],e=d.fromArray(this.vertices[i[0]]),o=d.fromArray(this.vertices[i[1]]),s=d.fromArray(this.vertices[i[2]]),h=o.subtract(e).cross(s.subtract(e)).unit();this.normals[i[0]]=this.normals[i[0]].add(h),this.normals[i[1]]=this.normals[i[1]].add(h),this.normals[i[2]]=this.normals[i[2]].add(h)}for(var t=0;t<this.vertices.length;t++)this.normals[t]=this.normals[t].unit().toArray();return this.compile(),this},computeWireframe:function(){for(var t=new Y,i=0;i<this.triangles.length;i++)for(var e=this.triangles[i],o=0;o<e.length;o++){var s=e[o],h=e[(o+1)%e.length];t.add([Math.min(s,h),Math.max(s,h)])}return this.lines||this.addIndexBuffer("lines"),this.lines=t.unique,this.compile(),this},getAABB:function(){var t={min:new d(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)};t.max=t.min.negative();for(var i=0;i<this.vertices.length;i++){var e=d.fromArray(this.vertices[i]);t.min=d.min(t.min,e),t.max=d.max(t.max,e)}return t},getBoundingSphere:function(){for(var t=this.getAABB(),i={center:t.min.add(t.max).divide(2),radius:0},e=0;e<this.vertices.length;e++)i.radius=Math.max(i.radius,d.fromArray(this.vertices[e]).subtract(i.center).length());return i}},_.plane=function(t){t=t||{};for(var i=new _(t),e=t.detailX||t.detail||1,o=t.detailY||t.detail||1,s=t.width||2,h=t.height||2,u=0;u<=o;u++)for(var a=u/o,m=0;m<=e;m++){var g=m/e;if(i.vertices.push([(g-.5)*s,(a-.5)*h,0]),i.coords&&i.coords.push([g,a]),i.normals&&i.normals.push([0,0,1]),m<e&&u<o){var p=m+u*(e+1);i.triangles.push([p,p+1,p+e+1]),i.triangles.push([p+e+1,p+1,p+e+2])}}return i.compile(),i};var P=[[0,4,2,6,-1,0,0],[1,3,5,7,1,0,0],[0,1,4,5,0,-1,0],[2,6,3,7,0,1,0],[0,2,1,3,0,0,-1],[4,5,6,7,0,0,1]];function L(t){return new d((t&1)*2-1,(t&2)-1,(t&4)/2-1)}_.cube=function(t){for(var i=new _(t),e=t&&t.width||2,o=t&&t.height||2,s=t&&t.depth||2,h=0;h<P.length;h++){for(var u=P[h],a=h*4,m=0;m<4;m++){var g=u[m];const p=L(g).toArray();p[0]*=e/2,p[1]*=o/2,p[2]*=s/2,i.vertices.push(p),i.coords&&i.coords.push([m&1,(m&2)/2]),i.normals&&i.normals.push(u.slice(4,7))}i.triangles.push([a,a+1,a+2]),i.triangles.push([a+2,a+1,a+3])}return i.compile(),i},_.sphere=function(t){function i(k,ee,oe){return m?[k,oe,ee]:[k,ee,oe]}function e(k){return k+(k-k*k)/2}t=t||{};for(var o=new _(t),s=new Y,h=t.detail||6,u=0;u<8;u++)for(var a=L(u),m=a.x*a.y*a.z>0,g=[],p=0;p<=h;p++){for(var w=0;p+w<=h;w++){var R=p/h,E=w/h,b=(h-p-w)/h,D={vertex:new d(e(R),e(E),e(b)).unit().multiply(a).toArray()};o.coords&&(D.coord=a.y>0?[1-R,b]:[b,1-R]),g.push(s.add(D))}if(p>0)for(var w=0;p+w<=h;w++){var R=(p-1)*(h+1)+(p-1-(p-1)*(p-1))/2+w,E=p*(h+1)+(p-p*p)/2+w;o.triangles.push(i(g[R],g[R+1],g[E])),p+w<h&&o.triangles.push(i(g[E],g[R+1],g[E+1]))}}return o.vertices=s.unique.map(function(k){return k.vertex}),o.coords&&(o.coords=s.unique.map(function(k){return k.coord})),o.normals&&(o.normals=o.vertices),o.compile(),o},_.load=function(t,i){i=i||{},"coords"in i||(i.coords=!!t.coords),"normals"in i||(i.normals=!!t.normals),"colors"in i||(i.colors=!!t.colors),"triangles"in i||(i.triangles=!!t.triangles),"lines"in i||(i.lines=!!t.lines);var e=new _(i);return e.vertices=t.vertices,e.coords&&(e.coords=t.coords),e.normals&&(e.normals=t.normals),e.colors&&(e.colors=t.colors),e.triangles&&(e.triangles=t.triangles),e.lines&&(e.lines=t.lines),e.compile(),e};function z(t,i,e){this.t=arguments.length?t:Number.MAX_VALUE,this.hit=i,this.normal=e}z.prototype={mergeWith:function(t){t.t>0&&t.t<this.t&&(this.t=t.t,this.hit=t.hit,this.normal=t.normal)}};function V(){var t=r.getParameter(r.VIEWPORT),i=r.modelviewMatrix.m,e=new d(i[0],i[4],i[8]),o=new d(i[1],i[5],i[9]),s=new d(i[2],i[6],i[10]),h=new d(i[3],i[7],i[11]);this.eye=new d(-h.dot(e),-h.dot(o),-h.dot(s));var u=t[0],a=u+t[2],m=t[1],g=m+t[3];this.ray00=r.unProject(u,m,1).subtract(this.eye),this.ray10=r.unProject(a,m,1).subtract(this.eye),this.ray01=r.unProject(u,g,1).subtract(this.eye),this.ray11=r.unProject(a,g,1).subtract(this.eye),this.viewport=t}V.prototype={getRayForPixel:function(t,i){t=(t-this.viewport[0])/this.viewport[2],i=1-(i-this.viewport[1])/this.viewport[3];var e=d.lerp(this.ray00,this.ray10,t),o=d.lerp(this.ray01,this.ray11,t);return d.lerp(e,o,i).unit()}},V.hitTestBox=function(t,i,e,o){var s=e.subtract(t).divide(i),h=o.subtract(t).divide(i),u=d.min(s,h),a=d.max(s,h),m=u.max(),g=a.min();if(m>0&&m<g){var p=1e-6,w=t.add(i.multiply(m));return e=e.add(p),o=o.subtract(p),new z(m,w,new d((w.x>o.x)-(w.x<e.x),(w.y>o.y)-(w.y<e.y),(w.z>o.z)-(w.z<e.z)))}return null},V.hitTestSphere=function(t,i,e,o){var s=t.subtract(e),h=i.dot(i),u=2*i.dot(s),a=s.dot(s)-o*o,m=u*u-4*h*a;if(m>0){var g=(-u-Math.sqrt(m))/(2*h),p=t.add(i.multiply(g));return new z(g,p,p.subtract(e).divide(o))}return null},V.hitTestTriangle=function(t,i,e,o,s){var h=o.subtract(e),u=s.subtract(e),a=h.cross(u).unit(),m=a.dot(e.subtract(t))/a.dot(i);if(m>0){var g=t.add(i.multiply(m)),p=g.subtract(e),w=u.dot(u),R=u.dot(h),E=u.dot(p),b=h.dot(h),D=h.dot(p),k=w*b-R*R,ee=(b*E-R*D)/k,oe=(w*D-R*E)/k;if(ee>=0&&oe>=0&&ee+oe<=1)return new z(m,g,a)}return null};function N(t,i,e){let o;for(;(o=t.exec(i))!=null;)e(o)}var F="LIGHTGL";function q(t,i){function e(w){var R=document.getElementById(w);return R?R.text:w}t=e(t),i=e(i);var o="    uniform mat3 gl_NormalMatrix;    uniform mat4 gl_ModelViewMatrix;    uniform mat4 gl_ProjectionMatrix;    uniform mat4 gl_ModelViewProjectionMatrix;    uniform mat4 gl_ModelViewMatrixInverse;    uniform mat4 gl_ProjectionMatrixInverse;    uniform mat4 gl_ModelViewProjectionMatrixInverse;  ",s=`#version 300 es
    `+o+"    in vec4 gl_Vertex;    in vec4 gl_TexCoord;    in vec3 gl_Normal;    in vec4 gl_Color;    vec4 ftransform() {      return gl_ModelViewProjectionMatrix * gl_Vertex;    }  ",h=`#version 300 es
    precision highp float;
  `+o,u=t+i,a={};N(/\b(gl_[^;]*)\b;/g,o,function(w){var R=w[1];if(u.indexOf(R)!=-1){var E=R.replace(/[a-z_]/g,"");a[E]=F+R}}),u.indexOf("ftransform")!=-1&&(a.MVPM=F+"gl_ModelViewProjectionMatrix"),this.usedMatrices=a;function m(w,R){var E={},b=/^((\s*\/\/.*\n|\s*#extension.*\n)+)[^]*$/.exec(R);return R=b?b[1]+w+R.substr(b[1].length):w+R,N(/\bgl_\w+\b/g,w,function(D){D in E||(R=R.replace(new RegExp("\\b"+D+"\\b","g"),F+D),E[D]=!0)}),R}t=m(s,t),i=m(h,i);function g(w,R){var E=r.createShader(w);if(r.shaderSource(E,R),r.compileShader(E),!r.getShaderParameter(E,r.COMPILE_STATUS))throw new Error("compile error: "+r.getShaderInfoLog(E));return E}if(this.program=r.createProgram(),r.attachShader(this.program,g(r.VERTEX_SHADER,t)),r.attachShader(this.program,g(r.FRAGMENT_SHADER,i)),r.linkProgram(this.program),!r.getProgramParameter(this.program,r.LINK_STATUS))throw new Error("link error: "+r.getProgramInfoLog(this.program));this.attributes={},this.uniformLocations={};var p={};N(/uniform\s+sampler(1D|2D|3D|Cube)\s+(\w+)\s*;/g,t+i,function(w){p[w[2]]=1}),this.isSampler=p}function K(t){var i=Object.prototype.toString.call(t);return i=="[object Array]"||i=="[object Float32Array]"}function X(t){var i=Object.prototype.toString.call(t);return i=="[object Number]"||i=="[object Boolean]"}new T,new T,q.prototype={uniforms:function(t){r.useProgram(this.program);for(var i in t){var e=this.uniformLocations[i]||r.getUniformLocation(this.program,i);if(e){this.uniformLocations[i]=e;var o=t[i];if(o instanceof d?o=[o.x,o.y,o.z]:o instanceof T&&(o=o.m),K(o))switch(o.length){case 1:r.uniform1fv(e,new Float32Array(o));break;case 2:r.uniform2fv(e,new Float32Array(o));break;case 3:r.uniform3fv(e,new Float32Array(o));break;case 4:r.uniform4fv(e,new Float32Array(o));break;case 9:r.uniformMatrix3fv(e,!1,new Float32Array([o[0],o[3],o[6],o[1],o[4],o[7],o[2],o[5],o[8]]));break;case 16:r.uniformMatrix4fv(e,!1,new Float32Array([o[0],o[4],o[8],o[12],o[1],o[5],o[9],o[13],o[2],o[6],o[10],o[14],o[3],o[7],o[11],o[15]]));break;default:throw new Error(`don't know how to load uniform "`+i+'" of length '+o.length)}else if(X(o))(this.isSampler[i]?r.uniform1i:r.uniform1f).call(r,e,o);else throw new Error('attempted to set uniform "'+i+'" to invalid value '+o)}}return this},draw:function(t,i){this.drawBuffers(t.vertexBuffers,t.indexBuffers[i==r.LINES?"lines":"triangles"],arguments.length<2?r.TRIANGLES:i)},drawBuffers:function(t,i,e){var o=this.usedMatrices,s=r.modelviewMatrix,h=r.projectionMatrix,u=o.MVMI||o.NM?s.inverse():null,a=o.PMI?h.inverse():null,m=o.MVPM||o.MVPMI?h.multiply(s):null,g={};if(o.MVM&&(g[o.MVM]=s),o.MVMI&&(g[o.MVMI]=u),o.PM&&(g[o.PM]=h),o.PMI&&(g[o.PMI]=a),o.MVPM&&(g[o.MVPM]=m),o.MVPMI&&(g[o.MVPMI]=m.inverse()),o.NM){var p=u.m;g[o.NM]=[p[0],p[4],p[8],p[1],p[5],p[9],p[2],p[6],p[10]]}this.uniforms(g);var w=0;for(var R in t){var E=t[R],b=this.attributes[R]||r.getAttribLocation(this.program,R.replace(/^(gl_.*)$/,F+"$1"));b==-1||!E.buffer||(this.attributes[R]=b,r.bindBuffer(r.ARRAY_BUFFER,E.buffer),r.enableVertexAttribArray(b),r.vertexAttribPointer(b,E.buffer.spacing,r.FLOAT,!1,0,0),w=E.buffer.length/E.buffer.spacing)}for(var R in this.attributes)R in t||r.disableVertexAttribArray(this.attributes[R]);return w&&(!i||i.buffer)&&(i?(r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,i.buffer),r.drawElements(e,i.buffer.length,r.UNSIGNED_SHORT,0)):r.drawArrays(e,0,w)),this}};function U(t,i,e){e=e||{},this.width=t,this.height=i,this.id=r.createTexture();let o=e.type||r.UNSIGNED_BYTE,s=e.format||r.RGBA,h=r.RGBA;const u=r.getExtension("EXT_color_buffer_float"),a=r.getExtension("EXT_color_buffer_half_float");o===r.FLOAT?(u?r instanceof WebGL2RenderingContext&&(s=r.RGBA32F):(console.warn("FLOAT textures not renderable, falling back to UNSIGNED_BYTE"),o=r.UNSIGNED_BYTE,s=r.RGBA8),h=r.RGBA):o===r.HALF_FLOAT_OES?(a?r instanceof WebGL2RenderingContext&&(s=r.RGBA16F):(console.warn("HALF_FLOAT textures not renderable, falling back to UNSIGNED_BYTE"),o=r.UNSIGNED_BYTE,s=r.RGBA8),h=r.RGBA):(o=r.UNSIGNED_BYTE,s=r.RGBA8,h=r.RGBA);const m=e.filter||e.magFilter||r.LINEAR,g=e.filter||e.minFilter||r.LINEAR;r.bindTexture(r.TEXTURE_2D,this.id),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,1),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,m),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,g),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,e.wrap||e.wrapS||r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,e.wrap||e.wrapT||r.CLAMP_TO_EDGE),r instanceof WebGL2RenderingContext?r.texImage2D(r.TEXTURE_2D,0,s,t,i,0,h,o,null):r.texImage2D(r.TEXTURE_2D,0,h,t,i,0,h,o,null),r.bindTexture(r.TEXTURE_2D,null),this.format=h,this.type=o,this.internalFormat=s}var $,Z,Q;U.prototype={bind:function(t){r.activeTexture(r.TEXTURE0+(t||0)),r.bindTexture(r.TEXTURE_2D,this.id)},unbind:function(t){r.activeTexture(r.TEXTURE0+(t||0)),r.bindTexture(r.TEXTURE_2D,null)},canDrawTo:function(){$=$||r.createFramebuffer(),r.bindFramebuffer(r.FRAMEBUFFER,$),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,this.id,0);var t=r.checkFramebufferStatus(r.FRAMEBUFFER)==r.FRAMEBUFFER_COMPLETE;return r.bindFramebuffer(r.FRAMEBUFFER,null),t},drawTo:function(t){r.getExtension("EXT_color_buffer_float")||console.warn("EXT_color_buffer_float not available!");var e=r.getParameter(r.VIEWPORT);if($=$||r.createFramebuffer(),Z=Z||r.createRenderbuffer(),r.bindFramebuffer(r.FRAMEBUFFER,$),r.bindRenderbuffer(r.RENDERBUFFER,Z),(this.width!=Z.width||this.height!=Z.height)&&(Z.width=this.width,Z.height=this.height,r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_COMPONENT16,this.width,this.height)),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,this.id,0),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,Z),r.checkFramebufferStatus(r.FRAMEBUFFER)!=r.FRAMEBUFFER_COMPLETE)throw new Error("Rendering to this texture is not supported (incomplete framebuffer)");r.viewport(0,0,this.width,this.height),t(),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindRenderbuffer(r.RENDERBUFFER,null),r.viewport(e[0],e[1],e[2],e[3])},swapWith:function(t){var i;i=t.id,t.id=this.id,this.id=i,i=t.width,t.width=this.width,this.width=i,i=t.height,t.height=this.height,this.height=i}},U.fromImage=function(t,i){i=i||{};var e=new U(t.width,t.height,i);r.bindTexture(r.TEXTURE_2D,e.id);try{r.texImage2D(r.TEXTURE_2D,0,e.format,e.format,e.type,t)}catch{throw location.protocol=="file:"?new Error('image not loaded for security reasons (serve this page over "http://" instead)'):new Error("image not loaded for security reasons (image must originate from the same domain as this page or use Cross-Origin Resource Sharing)")}return i.minFilter&&i.minFilter!=r.NEAREST&&i.minFilter!=r.LINEAR&&r.generateMipmap(r.TEXTURE_2D),r.bindTexture(r.TEXTURE_2D,null),e},U.fromURL=function(t,i){Q=Q||function(){var h=document.createElement("canvas").getContext("2d");h.canvas.width=h.canvas.height=128;for(var u=0;u<h.canvas.height;u+=16)for(var a=0;a<h.canvas.width;a+=16)h.fillStyle=(a^u)&16?"#FFF":"#DDD",h.fillRect(a,u,16,16);return h.canvas}();var e=U.fromImage(Q,i),o=new Image,s=r;return o.onload=function(){s.makeCurrent(),U.fromImage(o,i).swapWith(e)},o.src=t,e},U.canUseFloatingPointTextures=function(){return!!r.getExtension("OES_texture_float")},U.canUseFloatingPointLinearFiltering=function(){return!!r.getExtension("OES_texture_float_linear")},U.canUseHalfFloatingPointTextures=function(){return!!r.getExtension("OES_texture_half_float")},U.canUseHalfFloatingPointLinearFiltering=function(){return!!r.getExtension("OES_texture_half_float_linear")};function d(t,i,e){this.x=t||0,this.y=i||0,this.z=e||0}return d.prototype={negative:function(){return new d(-this.x,-this.y,-this.z)},add:function(t){return t instanceof d?new d(this.x+t.x,this.y+t.y,this.z+t.z):new d(this.x+t,this.y+t,this.z+t)},subtract:function(t){return t instanceof d?new d(this.x-t.x,this.y-t.y,this.z-t.z):new d(this.x-t,this.y-t,this.z-t)},multiply:function(t){return t instanceof d?new d(this.x*t.x,this.y*t.y,this.z*t.z):new d(this.x*t,this.y*t,this.z*t)},divide:function(t){return t instanceof d?new d(this.x/t.x,this.y/t.y,this.z/t.z):new d(this.x/t,this.y/t,this.z/t)},equals:function(t){return this.x==t.x&&this.y==t.y&&this.z==t.z},dot:function(t){return this.x*t.x+this.y*t.y+this.z*t.z},cross:function(t){return new d(this.y*t.z-this.z*t.y,this.z*t.x-this.x*t.z,this.x*t.y-this.y*t.x)},length:function(){return Math.sqrt(this.dot(this))},unit:function(){return this.divide(this.length())},min:function(){return Math.min(Math.min(this.x,this.y),this.z)},max:function(){return Math.max(Math.max(this.x,this.y),this.z)},toAngles:function(){return{theta:Math.atan2(this.z,this.x),phi:Math.asin(this.y/this.length())}},angleTo:function(t){return Math.acos(this.dot(t)/(this.length()*t.length()))},toArray:function(t){return[this.x,this.y,this.z].slice(0,t||3)},clone:function(){return new d(this.x,this.y,this.z)},init:function(t,i,e){return this.x=t,this.y=i,this.z=e,this}},d.negative=function(t,i){return i.x=-t.x,i.y=-t.y,i.z=-t.z,i},d.add=function(t,i,e){return i instanceof d?(e.x=t.x+i.x,e.y=t.y+i.y,e.z=t.z+i.z):(e.x=t.x+i,e.y=t.y+i,e.z=t.z+i),e},d.subtract=function(t,i,e){return i instanceof d?(e.x=t.x-i.x,e.y=t.y-i.y,e.z=t.z-i.z):(e.x=t.x-i,e.y=t.y-i,e.z=t.z-i),e},d.multiply=function(t,i,e){return i instanceof d?(e.x=t.x*i.x,e.y=t.y*i.y,e.z=t.z*i.z):(e.x=t.x*i,e.y=t.y*i,e.z=t.z*i),e},d.divide=function(t,i,e){return i instanceof d?(e.x=t.x/i.x,e.y=t.y/i.y,e.z=t.z/i.z):(e.x=t.x/i,e.y=t.y/i,e.z=t.z/i),e},d.cross=function(t,i,e){return e.x=t.y*i.z-t.z*i.y,e.y=t.z*i.x-t.x*i.z,e.z=t.x*i.y-t.y*i.x,e},d.unit=function(t,i){var e=t.length();return i.x=t.x/e,i.y=t.y/e,i.z=t.z/e,i},d.fromAngles=function(t,i){return new d(Math.cos(t)*Math.cos(i),Math.sin(i),Math.sin(t)*Math.cos(i))},d.randomDirection=function(){return d.fromAngles(Math.random()*Math.PI*2,Math.asin(Math.random()*2-1))},d.min=function(t,i){return new d(Math.min(t.x,i.x),Math.min(t.y,i.y),Math.min(t.z,i.z))},d.max=function(t,i){return new d(Math.max(t.x,i.x),Math.max(t.y,i.y),Math.max(t.z,i.z))},d.lerp=function(t,i,e){return i.subtract(t).multiply(e).add(t)},d.fromArray=function(t){return new d(t[0],t[1],t[2])},d.angleBetween=function(t,i){return t.angleTo(i)},n}();const Ce=.3,Fe=.15,Pe=1,et=10,Ve=Math.ceil(et/4),Ge=10,tt=`#version 300 es
    const float ARM_DELTA_X = float(`+Ce+`);
    const float FOOT_DELTA_X = float( `+Fe+`);
    const float FOOT_DELTA_Z = float( `+Pe+`);
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

`,it=`#version 300 es
    precision highp float;
    in float fragCyclePhase;
    in float fragAltitude;
    const float PI = 3.141592;
    out vec4 fragColor;
    void main() {
        fragColor = vec4(fragAltitude, fragCyclePhase / (2. * PI), 1., 1.);
    }
`,rt=`#version 300 es
    in vec2 iVertex;
    out vec2 fragCoord;
    void main() {
        fragCoord = iVertex * .5 + .5;
        gl_Position = vec4(iVertex.xy, 0., 1.);
    }
`,ot=`#version 300 es
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
`,nt=new Float32Array([-1,-1,1,-1,1,1,-1,1]),at=new Uint16Array([0,1,2,2,3,0]);var ie,We,ge,Xe;class st{constructor(n){Ne(this,ie);this.numVecAttributes=Ve,this.maxNumSwimmer=Ge,this.gl=n;const c=n.NEAREST;this.texture=new v.Texture(this.numVecAttributes,this.maxNumSwimmer,{type:n.FLOAT,filter:c}),this.initPrograms(),this.indexBuffer=this.gl.createBuffer(),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.indexBuffer),this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER,at,this.gl.STATIC_DRAW),this.vboPlane=this.gl.createBuffer(),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vboPlane),this.gl.bufferData(this.gl.ARRAY_BUFFER,nt,this.gl.STATIC_DRAW),this.vboPoints=this.gl.createBuffer()}update(){this.numSwimmers=l.swimmers.length;const n=5;this.swimmersAttributes=new Float32Array(this.numVecAttributes*4*this.maxNumSwimmer*n);const c=le(this,ie,We).call(this,l.swimmers);for(let f=0;f<l.swimmers.length;f++){const x=c[f];le(this,ie,Xe).call(this,f,x),le(this,ie,ge).call(this,l.swimmers.length+f,x.leftArm),le(this,ie,ge).call(this,2*l.swimmers.length+f,x.rightArm),le(this,ie,ge).call(this,3*l.swimmers.length+f,x.leftFoot),le(this,ie,ge).call(this,4*l.swimmers.length+f,x.rightFoot)}this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture.id),this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,!1),this.gl.texSubImage2D(this.gl.TEXTURE_2D,0,0,0,this.numVecAttributes,this.maxNumSwimmer,this.gl.RGBA,this.gl.FLOAT,this.swimmersAttributes),this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,!0),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vboPoints),this.gl.bufferData(this.gl.ARRAY_BUFFER,this.swimmersAttributes,this.gl.DYNAMIC_DRAW)}buildShader(n,c){const f=this.gl.createShader(c);return this.gl.shaderSource(f,n),this.gl.compileShader(f),f}createProgram(n){const c=this.gl.createProgram();return n.forEach(f=>{this.gl.attachShader(c,f)}),this.gl.linkProgram(c),c}checkShaders(n,c,f){this.gl.getShaderParameter(n,this.gl.COMPILE_STATUS)||console.error(this.gl.getShaderInfoLog(n)),this.gl.getShaderParameter(c,this.gl.COMPILE_STATUS)||console.error(this.gl.getShaderInfoLog(c)),this.gl.getProgramParameter(f,this.gl.LINK_STATUS)||console.error(this.gl.getProgramInfoLog(f))}createRenderingTexture(n,c){this.pointsTexture=new v.Texture(n,c,{type:this.gl.FLOAT,filter:this.gl.NEAREST}),this.pointsFrameBuffer=this.gl.createFramebuffer(),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.pointsFrameBuffer);const f=this.gl.COLOR_ATTACHMENT0;this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,f,this.gl.TEXTURE_2D,this.pointsTexture.id,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.horizontalPassTexture=new v.Texture(n,c,{type:this.gl.FLOAT,filter:this.gl.LINEAR}),this.horizontalPassFrameBuffer=this.gl.createFramebuffer(),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.horizontalPassFrameBuffer),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,f,this.gl.TEXTURE_2D,this.horizontalPassTexture.id,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null);const x=c/4,y=x,A=x;this.displacementTexture=new v.Texture(y,A,{type:this.gl.FLOAT,filter:this.gl.LINEAR}),this.displacementFrameBuffer=this.gl.createFramebuffer(),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.displacementFrameBuffer),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,f,this.gl.TEXTURE_2D,this.displacementTexture.id,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.oldDisplacementTexture=new v.Texture(y,A,{type:this.gl.FLOAT,filter:this.gl.LINEAR})}buildProgram(n,c){const f=this.buildShader(n,this.gl.VERTEX_SHADER),x=this.buildShader(c,this.gl.FRAGMENT_SHADER),y=this.createProgram([f,x]);return this.checkShaders(f,x,y),y}initPrograms(){this.programPoints=this.buildProgram(tt,it),this.programVolume=this.buildProgram(rt,ot),this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height)}volumePass(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.horizontalPassFrameBuffer),this.gl.useProgram(this.programVolume);const n=this.gl.getAttribLocation(this.programVolume,"iVertex"),c=this.gl.getUniformLocation(this.programVolume,"poolSize");this.gl.uniform2f(c,l.params.simulation.poolSize.x,l.params.simulation.poolSize.z);const f=this.gl.getUniformLocation(this.programVolume,"horizontal");this.gl.uniform1i(f,!0);const x=this.gl.getUniformLocation(this.programVolume,"show");this.gl.uniform1i(x,!1);const y=this.gl.getUniformLocation(this.programVolume,"swapColor");this.gl.uniform1i(y,!1);const A=2,I=this.gl.FLOAT,G=!1,W=0,M=0;this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vboPlane),this.gl.vertexAttribPointer(n,A,I,G,W,M),this.gl.enableVertexAttribArray(n),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.indexBuffer),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.pointsTexture.id),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this.gl.drawElements(this.gl.TRIANGLES,6,this.gl.UNSIGNED_SHORT,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.displacementFrameBuffer),this.gl.uniform1i(f,!1),this.gl.uniform1i(x,!1),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.horizontalPassTexture.id),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this.gl.viewport(0,0,this.displacementTexture.width,this.displacementTexture.height),this.gl.drawElements(this.gl.TRIANGLES,6,this.gl.UNSIGNED_SHORT,0),this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height)}pointPass(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.pointsFrameBuffer),this.gl.useProgram(this.programPoints);const n=this.gl.getAttribLocation(this.programPoints,"iData1"),c=this.gl.getAttribLocation(this.programPoints,"iData2"),f=this.gl.getAttribLocation(this.programPoints,"iData3"),x=this.gl.getUniformLocation(this.programPoints,"invPoolSize");this.gl.uniform2f(x,1/l.params.simulation.poolSize.x,1/l.params.simulation.poolSize.z);const y=4,A=this.gl.FLOAT,I=!1,G=4,W=12*G;let M=0;this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vboPoints),n>=0&&(this.gl.vertexAttribPointer(n,y,A,I,W,M),this.gl.enableVertexAttribArray(n)),M=4*G,c>=0&&(this.gl.vertexAttribPointer(c,y,A,I,W,M),this.gl.enableVertexAttribArray(c)),M=2*4*G,f>=0&&(this.gl.vertexAttribPointer(f,y,A,I,W,M),this.gl.enableVertexAttribArray(f)),this.gl.viewport(0,0,this.pointsTexture.width,this.pointsTexture.height),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this.gl.drawArrays(this.gl.POINTS,0,5*this.numSwimmers)}updateOldDisplacementTexture(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.displacementFrameBuffer),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.oldDisplacementTexture.id),this.gl.copyTexSubImage2D(this.gl.TEXTURE_2D,0,0,0,0,0,this.oldDisplacementTexture.width,this.oldDisplacementTexture.height)}draw(){this.updateOldDisplacementTexture(),this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this.pointPass(),this.volumePass(),this.gl.disable(this.gl.BLEND)}}ie=new WeakSet,We=function(n){const c=function(y,A){return A.getDistanceTraveled()-y.getDistanceTraveled()};let f=0;n.forEach(y=>{y.hasFinished()>.1&&f++});const x=n.slice(0,f).concat(n.slice(f).sort(c));for(let y=0;y<n.length;y++)n[y]=x[y];return n},ge=function(n,c){this.swimmersAttributes[this.numVecAttributes*4*n]=c.center.x,this.swimmersAttributes[this.numVecAttributes*4*n+1]=c.center.z,this.swimmersAttributes[this.numVecAttributes*4*n+7]=c.center.y},Xe=function(n,c){le(this,ie,ge).call(this,n,c.body),this.swimmersAttributes[this.numVecAttributes*4*n+2]=c.divingDistance,this.swimmersAttributes[this.numVecAttributes*4*n+3]=c.divingTime,this.swimmersAttributes[this.numVecAttributes*4*n+4]=c.reactionTime,this.swimmersAttributes[this.numVecAttributes*4*n+5]=c.body.velocity.z*3.6,this.swimmersAttributes[this.numVecAttributes*4*n+6]=c.nationality,this.swimmersAttributes[this.numVecAttributes*4*n+8]=c.breakoutDistance,this.swimmersAttributes[this.numVecAttributes*4*n+9]=c.breakoutTime,this.swimmersAttributes[this.numVecAttributes*4*n+10]=c.finishTime};function Te(r=0,n=1){const c=1-Math.random(),f=Math.random();return Math.sqrt(-2*Math.log(c))*Math.cos(2*Math.PI*f)*n+r}const ae=new v.Vector(1e3,0,-1e3),lt=.5,ct=2,he="Temps (s)",ve="event",be="distance (m)",H=class H{constructor(n){this.startingPoint=new v.Vector(n.x,n.y,n.z),this.center=new v.Vector(n.x,n.y,n.z),this.force=new v.Vector(0,0,190+Te(0,20)),this.reactionTime=Math.max(.1,Te(.15,.02));const c=.25,f=.15;this.body=new xe(n,c),this.leftArm=new xe(ae,f),this.rightArm=new xe(ae,f),this.leftFoot=new xe(ae,f),this.rightFoot=new xe(ae,f),this.body.cinematic=!H.useGravity,this.leftArm.cinematic=!0,this.rightArm.cinematic=!0,this.leftFoot.cinematic=!0,this.rightFoot.cinematic=!0,this.spheres=[this.body,this.leftArm,this.rightArm,this.leftFoot,this.rightFoot],this.divingDistance=0,this.divingTime=1e3,this.breakoutDistance=0,this.breakoutTime=1e3,this.nationality=Math.random()>.5?0:1,this.currendDataIndex=0,this.useTracking=!1,this.armPulsation=2*Math.PI*ct,this.cycleTime=0,this.cyclePhase=0,this.finishTime=0}async parseData(n){fetch(n).then(c=>{const f=c.headers.get("content-type");return!f||!f.includes("text/csv")?(console.log("no file found : "+n),null):c.text()}).then(c=>{if(!c)return;const f=c.split(`
`),x=f[0].split(",");this.data=f.slice(1).map(y=>{const A=y.split(",");return Object.fromEntries(x.map((I,G)=>[I,A[G]]))}),l.params.swimmers.useTracking&&(this.armPulsation=0)})}getDistanceTraveled(){const n=this.body.velocity.z,c=l.params.simulation.poolSize.z,f=this.body.center.z+c/2;return n>=0?f:2*c-f}startRace(){this.hasBrokeOut=!1,this.hasDove=!1,this.hasReacted=!1}jump(n=4.5){this.body.cinematic=!1,this.body.velocity=new v.Vector(0,0,n+Te(0,1)),this.body.center=new v.Vector(this.startingPoint.x,1,-l.params.simulation.poolSize.z/2)}swim(n){this.hasReacted=n,this.isSwimming=n,this.finishTime=0,n||(this.body.followTarget=!1),n?(this.body.cinematic=!1,this.useGravity=!0,this.body.center=new v.Vector(this.startingPoint.x,0,-l.params.simulation.poolSize.z/2)):(this.body.velocity=new v.Vector(0,0,0),this.body.center=new v.Vector(this.startingPoint.x,0,0))}hasFinished(){return this.finishTime>.1}getArmOffset(n,c){c+=this.cyclePhase;const f=this.body.velocity.z>=0?this.armPulsation:-this.armPulsation;return new v.Vector(0,Math.cos(f*n+c),Math.sin(f*n+c)).multiply(lt)}setCurrentDataIndex(){if(this.currendDataIndex=0,!!this.data){for(;this.data[this.currendDataIndex]&&this.data[this.currendDataIndex][he]<l.getRaceTime();)this.currendDataIndex++;if(this.currendDataIndex+1<this.data.length){if(this.currendDataIndex-1>=0){const n=parseFloat(this.data[this.currendDataIndex][be]);let c=n;const f=l.params.simulation.poolSize.z;n>f&&(c=2*f-c),c-=f/2;const x=this.body.center;this.body.move(new v.Vector(x.x,x.y,c));const y=Math.sign(50-n)*.1;this.body.velocity=new v.Vector(0,0,y),console.log("vz : "+y)}this.body.setTarget(null),this.body.followTarget=!0,this.finishTime=0}}}findNextCycle(){let n=this.currendDataIndex+1;if(!this.data)return null;for(;this.data[n]&&this.data[n][ve]!="cycle";)n++;return this.data[n]?parseFloat(this.data[n][he]):null}handleTracking(n){if(this.hasReacted&&this.useTracking&&this.currendDataIndex<this.data.length&&this.data[this.currendDataIndex][he]<n){let c=null,f=n;const x=this.data[this.currendDataIndex+1];this.currendDataIndex+1<this.data.length&&(c=parseFloat(x[be]),f=parseFloat(x[he]));const y=l.params.simulation.poolSize.z;let A=0;const I=this.data[this.currendDataIndex][ve];if(I=="enter"||I=="turn"&&x[ve]!="under"){f=(n+f)/2,c=(this.body.center.z+y/2+c)/2;const W={[he]:f,[be]:c,[ve]:"under"};this.data.splice(this.currendDataIndex+1,0,W),A=-1.5}x&&x[ve]=="under"&&(A=-1.5),c>y&&(c=2*y-c),c-=l.params.simulation.poolSize.z/2;const G=new v.Vector(this.startingPoint.x,A,c);if(this.currendDataIndex+1<this.data.length?this.body.setTarget(G,f-n):this.body.setTarget(null),I=="cycle"){const W=parseFloat(this.data[this.currendDataIndex][he]),M=this.findNextCycle();if(M){const Y=1/(M-W);this.armPulsation=2*Math.PI*Y,this.cycleTime=0,this.cyclePhase==0?this.cyclePhase=Math.PI:this.cyclePhase=0}}else I=="finish"&&(this.finishTime=this.data[this.currendDataIndex][he],this.body.followTarget=!1,this.isSwimming=!1);this.currendDataIndex++}}moveSpheresAway(){this.rightArm.move(ae),this.leftArm.move(ae),this.rightFoot.move(ae),this.leftFoot.move(ae)}moveSpheres(n){this.cycleTime+=n;const c=this.getArmOffset(.5*this.cycleTime,0),f=this.getArmOffset(.5*this.cycleTime,Math.PI),x=this.getArmOffset(.5*this.cycleTime*2,0),y=this.getArmOffset(.5*this.cycleTime*2,Math.PI);this.rightArm.move(this.body.center.add(c).add(new v.Vector(Ce,0,0))),this.leftArm.move(this.body.center.add(f).add(new v.Vector(-Ce,0,0)));const A=this.body.velocity.z>=0?-Pe:Pe;this.rightFoot.move(this.body.center.add(new v.Vector(Fe,x.y*.5,A))),this.leftFoot.move(this.body.center.add(new v.Vector(-Fe,y.y*.5,A)))}update(n){const c=l.getRaceTime();H.raceHasStarted||(this.useTracking=l.params.swimmers.useTracking&&this.data),!this.hasReacted&&H.raceHasStarted&&(this.useTracking||c>this.reactionTime&&!l.params.swimmers.useTracking?(this.swim(!0),this.jump(),this.useTracking&&(this.body.cinematic=!0,this.body.followTarget=!0,this.body.setTarget(null))):(this.swim(!1),this.body.cinematic=!0,this.body.move(ae)),this.currendDataIndex=0),this.moveSpheresAway(),this.isSwimming&&(this.useTracking||this.body.addForce(this.force),this.body.center.y>-this.body.radius&&this.moveSpheres(n)),this.handleTracking(c);for(let x of this.spheres)x.update(n);!this.hasDove&&this.body.center.y<0&&this.body.oldCenter.y>=0&&(this.divingDistance=this.body.center.z+l.params.simulation.poolSize.z/2,this.divingTime=c,this.hasDove=!0);const f=this.body.radius;!this.hasBrokeOut&&this.body.center.y>-f&&this.body.oldCenter.y<=-f&&(this.breakoutDistance=this.body.center.z+l.params.simulation.poolSize.z/2,this.breakoutTime=c,this.hasBrokeOut=!0)}};ne(H,"useGravity",!1),ne(H,"raceHasStarted",!1),ne(H,"swimming",!1),ne(H,"attributes"),ne(H,"initAttributes",n=>{H.attributes=new st(n)}),ne(H,"updateAttributesTexture",()=>{H.attributes.update()}),ne(H,"getAttributesTexture",()=>H.attributes.texture),ne(H,"bindDisplacementTexture",n=>{H.attributes.displacementTexture.bind(n)}),ne(H,"bindOldDisplacementTexture",n=>{H.attributes.oldDisplacementTexture.bind(n)}),ne(H,"reset",n=>{H.attributes.createRenderingTexture(n.x,n.y)});let O=H;const Ie=`
    uniform float wr;
    #define sqrt_2_PI 2.50662827
    #define PI 3.1415926536
    uniform sampler2D swimmersAttributesTexture;
    const int SWIMMERS_NUM_ATTRIBUTES = 4;
    const vec2 TEXTURE_SIZE = vec2(`+Ve+", "+Ge+`);
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
`,Be=16.5;class dt{constructor(){this.params={numSteps:2,focal:45,visualizations:{enabled:!0,showFlags:!1,showWR:!1,showSpeed:!1,showDivingDistance:!0,showFinishTimes:!1,showNeighboursLines:"none",neighboursLinesModesDict:{none:0,"only medals":1,all:2},medalsModeBeforeFinish:"none",medalsModesDict:{none:0,stars:1,bright:2,lanes:3},medalsModeAfterFinish:"none",areaConservationEnabled:!0,shadow:{enabled:!0,shadowRadius:.5,shadowPower:.5,showCircle:!0,circleRadius:.6,circleStroke:.15},sparks:{enabled:!1,glow:5,glowOffset:.5,lengthFactor:1,stroke:.01,num:40,sizeFactor:50,fov:Math.PI/4}},swimmers:{showSpheres:!0,useTracking:!1},video:{thresholdBlending:!0,blendingThreshold:.41,show:!1},simulation:{optimized:!1,waterDamping:.02,poolSize:new v.Vector(2,1,2)}},this.originalVisParams=JSON.parse(JSON.stringify(this.params.visualizations)),this.useConfigFile=!0,this.time=0,this.swimmers=[]}isOneVisualizationEnabled(){return this.params.visualizations.showFlags||this.params.visualizations.medalsModeBeforeFinish!="none"||this.params.visualizations.medalsModeAfterFinish!="none"||this.params.visualizations.showWR||this.params.visualizations.showSpeed||this.params.visualizations.showDivingDistance}updateTime(n){this.time+=n,this._updateDistanceMarker&&this._updateDistanceMarker()}getRaceTime(){return this.time-Be}resetParams(){this.params.visualizations=JSON.parse(JSON.stringify(this.originalVisParams)),this.params.visualizations.areaConservationEnabled=!1}updateEventIndex(){for(this.currentEventIndex=0;this.events[this.currentEventIndex]&&this.events[this.currentEventIndex].time<this.getRaceTime();)this.currentEventIndex++;this.currentEventIndex>0&&this.currentEventIndex--}setRaceTime(n){this.time=Be+n,this.events&&(this.updateEventIndex(),this.resetParams())}setTimeBeginRace(){this.setRaceTime(0)}parseConfigFile(n){fetch(n).then(c=>c.text()).then(c=>{this.events=JSON.parse(c),this.currentEventIndex=0,this._renderTimeline&&this._renderTimeline()})}updateParams(){if(!this.events||!this.useConfigFile)return;const n=this.events[this.currentEventIndex];if(!n)return;let c=n.rankSwimmerToggle;c||(c=1),(n.distance&&this.swimmers[c-1].getDistanceTraveled()>=n.distance||n.time!==void 0&&this.getRaceTime()>=n.time)&&(this.currentEventIndex++,Object.entries(n.params).forEach(f=>{const x=f[0],y=f[1];this.params.visualizations[x]=y}))}}const l=new dt;l.parseConfigFile("./assets/vis-config.json");const Oe=new v.Vector(0,-4,0);class xe{constructor(n,c){this.initCenter=new v.Vector(n.x,n.y,n.z),this.center=new v.Vector(n.x,n.y,n.z),this.oldCenter=new v.Vector(n.x,n.y,n.z),this.radius=c,this.cinematic=!1,this.velocity=new v.Vector(0,0,0),this.acceleration=new v.Vector(0,0,0),this.mass=4/3*Math.PI*Math.pow(c,3)*1e3,this.invMass=1/this.mass,this.radiusSquared=c*c,this.mesh=v.Mesh.sphere({detail:10}),this.followTarget=!1}update(n){if(this.moved||(this.oldCenter=new v.Vector(this.center.x,this.center.y,this.center.z)),this.moved=!1,this.cinematic){if(this.followTarget||(this.velocity=new v.Vector(0,0,0)),!this.targetPos||!this.followTarget)return;let c=n/this.targetTime;c=Math.min(Math.max(c,0),1),this.center=this.center.multiply(1-c).add(this.targetPos.multiply(c)),this.velocity=this.center.subtract(this.oldCenter).multiply(1/n),this.targetTime-=n,this.targetTime<0&&(this.targetPos=null)}else{const c=Math.max(0,Math.min(1,(this.radius-this.center.y)/(2*this.radius))),f=Oe.multiply(-1.1*this.mass*c),x=this.velocity.unit().multiply(-1e3*this.radiusSquared*c*this.velocity.dot(this.velocity));this.addForce(x),this.addForce(f),this.addForce(Oe.multiply(this.mass)),this.velocity=this.velocity.add(this.acceleration.multiply(n)),this.acceleration=new v.Vector(0,0,0),this.center=this.center.add(this.velocity.multiply(n)),this.center.y<this.radius-l.params.simulation.poolSize.y&&(this.center.y=this.radius-1,this.velocity.y=Math.abs(this.velocity.y)*.7)}}setTarget(n,c){this.targetPos=n,this.targetTime=c}addForce(n){this.cinematic?console.warn("Trying to add force to a cinematic sphere."):this.acceleration=this.acceleration.add(n.multiply(this.invMass))}move(n){this.moved=!0,this.oldCenter=new v.Vector(this.center.x,this.center.y,this.center.z),this.center=new v.Vector(n.x,n.y,n.z),this.cinematic||console.warn("Moving a non cinematic sphere.")}}function re(r,n=null){this.gl=r,this.visualizationWavesEnabled=!0,this.sqrt_2_PI=Math.sqrt(2*Math.PI),this.spheres=[];var c=`
    out vec2 coord;
    uniform vec2 invPoolSizeVertex;
    void main() {
      coord = gl_Vertex.xy * invPoolSizeVertex + 0.5;
      gl_Position = vec4(gl_Vertex.xy * 2. * invPoolSizeVertex, 0., 1.0);
    }
  `;this.reset(n),v.Texture.canUseFloatingPointTextures(),this.dropShader=new v.Shader(c,`
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
  `),this.updateShader=new v.Shader(c,`
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
  `),this.normalShader=new v.Shader(c,`
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
  `),this.visualizationWavesShader=new v.Shader(c,`
    uniform sampler2D tex;
    uniform bool add;
    uniform vec3 poolSize;
    uniform bool showWR;
    uniform bool showDivingDistance;
    in vec2 coord;
    out vec4 fragColor;

    `+Ie+`

    void main() {
      vec4 info = texture(tex, coord);
      float w = 0.;
      if(showDivingDistance) w += getDivingWaves(coord).x;
      if(showWR) w += getRecordWave(coord);
      info.r += add ? w : -w;
      fragColor = info;
    }
    `)}re.prototype.resetTextures=function(){const r=this.gl;this.textureA&&r.deleteTexture(this.textureA.id),this.textureB&&r.deleteTexture(this.textureB.id),this.textureA=new v.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:n}),this.textureB=new v.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:n}),this.areaConservationTexture=new v.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:n}),this.showAreaConservedGrid=!1,this.showProjectionGrid=!1,this.invPoolSize=new v.Vector(1/l.params.simulation.poolSize.x,1/l.params.simulation.poolSize.y,1/l.params.simulation.poolSize.z);var n=v.Texture.canUseFloatingPointLinearFiltering()?this.gl.LINEAR:this.gl.NEAREST;(!this.textureA.canDrawTo()||!this.textureB.canDrawTo())&&v.Texture.canUseHalfFloatingPointTextures()&&(console.log("No draw"),n=v.Texture.canUseHalfFloatingPointLinearFiltering()?this.gl.LINEAR:this.gl.NEAREST,this.textureA=new v.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:n}),this.textureB=new v.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:n}))};re.prototype.reset=function(r=null){this.WR_position=1e5,this.prev_WR_position=0,r!==null?(console.log("resolution.y : "+r.y),this.W=Math.round(r.x),this.H=Math.round(r.y),console.log("Using custom resolution:",this.W,this.H)):(this.W=256,this.H=256),O.reset(new v.Vector(this.W,this.H)),this.plane=v.Mesh.plane({detail:255,width:l.params.simulation.poolSize.x,height:l.params.simulation.poolSize.z}),this.delta=new v.Vector(1/this.W,1/this.H),this.resetTextures()};re.prototype.addDrop=function(r,n,c,f){var x=this;this.textureB.drawTo(function(){x.textureA.bind(),x.dropShader.uniforms({invPoolSizeVertex:[x.invPoolSize.x,x.invPoolSize.z],center:[r,n],radius:c,strength:f,poolSize:[l.params.simulation.poolSize.x,l.params.simulation.poolSize.y,l.params.simulation.poolSize.z]}).draw(x.plane)}),this.textureB.swapWith(this.textureA)};re.prototype.addOrRemoveVisualizationWaves=function(r){if(!(!this.visualizationWavesEnabled||!O.raceHasStarted)){var n=this;this.textureB.drawTo(function(){n.textureA.bind();const c=O.getAttributesTexture();c&&c.bind(1),n.visualizationWavesShader.uniforms({swimmersAttributesTexture:1,showDivingDistance:l.params.visualizations.showDivingDistance,showWR:l.params.visualizations.showWR,invPoolSizeVertex:[n.invPoolSize.x,n.invPoolSize.z],poolSize:[l.params.simulation.poolSize.x,l.params.simulation.poolSize.y,l.params.simulation.poolSize.z],wr:n.WR_position,sqrt_2_PI:n.sqrt_2_PI,add:r,swimmersNumber:l.swimmers.length,time:l.getRaceTime()}).draw(n.plane)}),this.textureB.swapWith(this.textureA)}};re.prototype.addSwimmer=function(r){for(let n of r.spheres)this.addSphere(n)};re.prototype.addSphere=function(r){this.spheres.push(r)};re.prototype.updateSpheres=function(r){if(this.prev_WR_position=this.WR_position,this.WR_position=l.getRaceTime()*2.155,this.WR_position>l.params.simulation.poolSize.z&&(this.WR_position=2*l.params.simulation.poolSize.z-this.WR_position),l.params.simulation.optimized)O.attributes.draw(),this.textureB.drawTo(()=>{this.textureA.bind(),O.bindDisplacementTexture(1),O.bindOldDisplacementTexture(2),this.sphereShader.uniforms({oldDisplacementTexture:2,displacementTexture:1,invPoolSizeVertex:[this.invPoolSize.x,this.invPoolSize.z],poolSize:[l.params.simulation.poolSize.x,l.params.simulation.poolSize.y,l.params.simulation.poolSize.z],optimized:!0}).draw(this.plane),this.textureB.swapWith(this.textureA),O.attributes.draw()});else for(let c=0;c<this.spheres.length;c++){const f=this.spheres[c];this.moveSphere(f.oldCenter,f.center,f.radius)}};re.prototype.moveSphere=function(r,n,c){var f=this;this.textureB.drawTo(function(){f.textureA.bind(),f.sphereShader.uniforms({invPoolSizeVertex:[f.invPoolSize.x,f.invPoolSize.z],oldCenter:r,newCenter:n,radius:c,poolSize:[l.params.simulation.poolSize.x,l.params.simulation.poolSize.y,l.params.simulation.poolSize.z],optimized:!1}).draw(f.plane)}),this.textureB.swapWith(this.textureA)};re.prototype.stepSimulation=function(){var r=this;this.textureB.drawTo(function(){r.textureA.bind(),r.updateShader.uniforms({invPoolSizeVertex:[r.invPoolSize.x,r.invPoolSize.z],delta:[r.delta.x,r.delta.y],wr:r.WR_position,prev_wr:r.prev_WR_position,poolSize:[l.params.simulation.poolSize.x,l.params.simulation.poolSize.y,l.params.simulation.poolSize.z],sqrt_2_PI:r.sqrt_2_PI,damping:l.params.simulation.waterDamping}).draw(r.plane)}),this.textureB.swapWith(this.textureA),this.updateAreaConservation()};re.prototype.updateNormals=function(){var r=this;this.textureB.drawTo(function(){r.textureA.bind(),r.normalShader.uniforms({invPoolSizeVertex:[r.invPoolSize.x,r.invPoolSize.z],delta:[r.delta.x,r.delta.y]}).draw(r.plane)}),this.textureB.swapWith(this.textureA)};re.prototype.updateAreaConservation=function(){if(!l.params.visualizations.areaConservationEnabled)return;var r,n,c;if(this.textureA.type===this.gl.FLOAT)r=this.gl.FLOAT,n=Float32Array,c="EXT_color_buffer_float";else if(this.textureA.type===this.gl.HALF_FLOAT_OES)r=this.gl.HALF_FLOAT_OES,n=Uint16Array,c="EXT_color_buffer_half_float";else{console.warn("Unsupported texture type for reading");return}if(!this.gl.getExtension(c)){console.warn(c+" not available; cannot read pixels");return}this.fb||(this.fb=this.gl.createFramebuffer()),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.fb),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,this.textureA.id,0);const f=this.gl.checkFramebufferStatus(this.gl.FRAMEBUFFER);if(f!==this.gl.FRAMEBUFFER_COMPLETE){console.error("Framebuffer incomplete: "+f+" for texture type "+this.textureA.type),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null);return}this.gl.pixelStorei(this.gl.PACK_ALIGNMENT,1);const x=new n(this.W*this.H*4),y=new Float32Array(this.W*this.H*4);this.gl.readPixels(0,0,this.W,this.H,this.gl.RGBA,r,x);for(let M=0;M<this.W;M++)y[M*4+1]=1;const A=l.params.simulation.poolSize.x/this.W,I=l.params.simulation.poolSize.z/this.H,G=A*A,W=I*I;if(this.textureA.type===this.gl.FLOAT){for(let M=0;M<this.H;M+=1)for(let T=0;T<this.W;T+=1){const Y=(M*this.W+T)*4,S=((this.H-1-M)*this.W+T)*4,_=y[S],P=y[S+1];if(T+1<this.W){const L=x[Y]-x[Y+4],z=Math.sqrt(L*L+G);y[S+4]=_+z}if(M+1<this.H){const L=x[Y]-x[Y+this.W*4],z=Math.sqrt(L*L+W);y[S-4*this.W+1]=P+z}}this.gl.bindTexture(this.gl.TEXTURE_2D,this.areaConservationTexture.id),this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT,1),this.gl.texSubImage2D(this.gl.TEXTURE_2D,0,0,0,this.W,this.H,this.gl.RGBA,this.gl.FLOAT,y)}this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.bindTexture(this.gl.TEXTURE_2D,null)};const ht=`
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
`;var fe=`
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
`;function de(r,n,c,f){this.water=n,this.gl=r,this.tileTexture=v.Texture.fromImage(document.getElementById("tiles"),{minFilter:this.gl.LINEAR_MIPMAP_LINEAR,wrap:this.gl.REPEAT,format:this.gl.RGB}),this.franceTexture=v.Texture.fromImage(document.getElementById("france"),{minFilter:this.gl.LINEAR_MIPMAP_LINEAR,wrap:this.gl.REPEAT,format:this.gl.RGBA}),this.chinaTexture=v.Texture.fromImage(document.getElementById("china"),{minFilter:this.gl.LINEAR_MIPMAP_LINEAR,wrap:this.gl.REPEAT,format:this.gl.RGBA}),this.lettersTexture=v.Texture.fromImage(document.getElementById("letters"),{minFilter:this.gl.LINEAR,magFilter:this.gl.LINEAR,wrap:this.gl.REPEAT,format:this.gl.RGBA}),this.flagSize=f,this.flagSize=[1.5,1],this.flagCenter=c,this.lightDir=new v.Vector(2,2,-1).unit(),this.causticTex=new v.Texture(1024,1024),this.waterShaders=[];for(var x=0;x<2;x++)this.waterShaders[x]=new v.Shader(`
      uniform sampler2D water;
      uniform vec3 poolSizeVertexShader;
      out vec3 position;
      void main() {
        vec4 info = texture(water, gl_Vertex.xy / poolSizeVertexShader.xz + 0.5);
        position = gl_Vertex.xzy;
        position.y += info.r;
        gl_Position = gl_ModelViewProjectionMatrix * vec4(position, 1.0);
      }
    `,fe+`
      uniform vec3 eye;
      in vec3 position;
      out vec4 fragColor;
      uniform bool showFlags;
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
      uniform float medalsModeBeforeFinish;
      uniform float medalsModeAfterFinish;

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
      
      
      `+Ie+ht+`
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

      void drawFlags(in vec2 position, in vec2 swimmerPos, in float nationality, bool rightSide, inout vec3 color) {
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

      void drawNumbers(in vec2 position, in vec2 swimmerPosition, in int index, in bool rightSide, inout vec3 color) {
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

      void drawLine(in vec2 projectedPosition, in vec2 swimmerPosition, in int swimmerRank, in vec3 lineColor, inout vec3 color) {
        int linesMode = int(showNeighboursLinesMode);  
        if (linesMode == LINES_ONLY_MEDALS && swimmerRank > 2) return;
        float lineThickness = .1;
        if (swimmerRank > 2) lineThickness = .03;
        float lineLength = poolSize.x / 30.;
        float line_z = getSwimmerPosition(swimmerRank).y;
        if (abs(projectedPosition.y - line_z) <= lineThickness && 
            abs(projectedPosition.x - swimmerPosition.x) <= lineLength) color = lineColor;
      }

      void drawSwimmerLines(in vec2 projectedPosition, in vec2 swimmerPosition, in int swimmerRank, inout vec3 color) {
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

      void drawVisualizations(in vec2 position, inout vec3 color) {
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
          
          drawRanks(projectedPosition, swimmerPos, i, rightSide, color);
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
          if (showFlags || showWR || int(medalsModeAfterFinish) != MEDALS_NONE || int(medalsModeBeforeFinish) != MEDALS_NONE || showSpeed || showDivingDistance) drawVisualizations(origin.xz, color);
          
          
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
    `);this.sphereMesh=v.Mesh.sphere({detail:10}),this.sphereShader=new v.Shader(fe+`
    out vec3 position;
  void main() {
    position = sphereCenter + gl_Vertex.xyz * sphereRadius;
    gl_Position = gl_ModelViewProjectionMatrix * vec4(position, 1.0);
  }
  `,fe+`
    in vec3 position;
    out vec4 fragColor;
  void main() {
    fragColor = vec4(getSphereColor(position), 1.0);
      vec4 info = texture(water, position.xz / poolSize.xz + 0.5);
    if (position.y < info.r) {
      fragColor.rgb *= underwaterColor * 1.2;
    }
  }
  `),this.reset(),this.cubeShader=new v.Shader(fe+`
    out vec3 position;
  void main() {
    position = gl_Vertex.xyz;
    position.y = ((1.0 - position.y) * (7.0 / 12.0) - 1.0) * poolSize.y;
    gl_Position = gl_ModelViewProjectionMatrix * vec4(position, 1.0);
  }
  `,fe+`
    in vec3 position;
    out vec4 fragColor;
  void main() {
    fragColor = vec4(getWallColor(position), 1.0);
      vec4 info = texture(water, position.xz / poolSize.xz + 0.5);
    if (position.y < info.r) {
      fragColor.rgb *= underwaterColor * 1.2;
    }
  }
  `),this.sphereCenter=new v.Vector,this.sphereRadius=0;var y=!!this.gl.getExtension("OES_standard_derivatives");this.causticsShader=new v.Shader(fe+`
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
  `+fe+`
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
  `)}de.prototype.reset=function(){this.cubeMesh=v.Mesh.cube({width:l.params.simulation.poolSize.x,height:2,depth:l.params.simulation.poolSize.z}),this.cubeMesh.triangles.splice(4,2),this.cubeMesh.compile()};de.prototype.updateCaustics=function(r){};de.prototype.renderWater=function(r,n,c){var f=new v.Raytracer;r.textureA.bind(0),this.tileTexture.bind(1),n.bind(2),this.causticTex.bind(3),this.franceTexture.bind(4),this.chinaTexture.bind(8),this.lettersTexture.bind(7),r.areaConservationTexture.bind(5);const x=O.getAttributesTexture();x&&x.bind(6),this.gl.enable(this.gl.CULL_FACE);for(var y=0;y<2;y++)this.gl.cullFace(y?this.gl.BACK:this.gl.FRONT),this.waterShaders[y].uniforms({light:this.lightDir,water:0,tiles:1,sky:2,causticTex:3,france:4,china:8,areaConservationTexture:5,swimmersAttributesTexture:6,iChannel0:7,areaConservation:l.params.visualizations.areaConservationEnabled,flagSize:[1.5,2],flagCenter:[this.flagCenter.x,this.flagCenter.y],poolSize:[l.params.simulation.poolSize.x,l.params.simulation.poolSize.y,l.params.simulation.poolSize.z],poolSizeVertexShader:[l.params.simulation.poolSize.x,l.params.simulation.poolSize.y,l.params.simulation.poolSize.z],eye:f.eye,sphereCenter:this.sphereCenter,sphereRadius:this.sphereRadius,showProjectionGrid:r.showProjectionGrid,showAreaConservedGrid:r.showAreaConservedGrid,wr:r.WR_position,swimmersNumber:l.swimmers.length,showFlags:l.params.visualizations.showFlags,showWR:l.params.visualizations.showWR,showSpeed:l.params.visualizations.showSpeed,showDivingDistance:l.params.visualizations.showDivingDistance,showFinishTimes:l.params.visualizations.showFinishTimes,time:l.getRaceTime(),shadowEnabled:c.enabled,shadowRadius:c.shadowRadius,shadowPower:c.shadowPower,showCircle:c.showCircle,shadowCircleRadius:c.circleRadius,shadowCircleStroke:c.circleStroke,showNeighboursLinesMode:Math.round(l.params.visualizations.neighboursLinesModesDict[l.params.visualizations.showNeighboursLines]),medalsModeBeforeFinish:Math.round(l.params.visualizations.medalsModesDict[l.params.visualizations.medalsModeBeforeFinish]),medalsModeAfterFinish:Math.round(l.params.visualizations.medalsModesDict[l.params.visualizations.medalsModeAfterFinish])}).draw(r.plane);this.gl.disable(this.gl.CULL_FACE)};de.prototype.renderSpheres=function(r){for(let n of r.spheres)this.renderSphere(r,n)};de.prototype.renderSphere=function(r,n){r.textureA.bind(0),this.causticTex.bind(1),this.sphereShader.uniforms({light:this.lightDir,water:0,causticTex:1,sphereCenter:[n.center.x,n.center.y,n.center.z],sphereRadius:n.radius,poolSize:[l.params.simulation.poolSize.x,l.params.simulation.poolSize.y,l.params.simulation.poolSize.z]}).draw(n.mesh)};de.prototype.renderSphereOld=function(r){r.textureA.bind(0),this.causticTex.bind(1),this.sphereShader.uniforms({light:this.lightDir,water:0,causticTex:1,sphereCenter:this.sphereCenter,sphereRadius:this.sphereRadius,poolSize:[l.params.simulation.poolSize.x,l.params.simulation.poolSize.y,l.params.simulation.poolSize.z]}).draw(this.sphereMesh)};de.prototype.renderCube=function(r){this.gl.enable(this.gl.CULL_FACE),r.textureA.bind(0),this.tileTexture.bind(1),this.causticTex.bind(2),this.cubeShader.uniforms({light:this.lightDir,water:0,tiles:1,causticTex:2,sphereCenter:this.sphereCenter,sphereRadius:this.sphereRadius,poolSize:[l.params.simulation.poolSize.x,l.params.simulation.poolSize.y,l.params.simulation.poolSize.z]}).draw(this.cubeMesh),this.gl.disable(this.gl.CULL_FACE)};function Le(r,n){this.gl=n,this.id=n.createTexture(),n.bindTexture(n.TEXTURE_CUBE_MAP,this.id),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,1),n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAG_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.texImage2D(n.TEXTURE_CUBE_MAP_NEGATIVE_X,0,n.RGB,n.RGB,n.UNSIGNED_BYTE,r.xneg),n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X,0,n.RGB,n.RGB,n.UNSIGNED_BYTE,r.xpos),n.texImage2D(n.TEXTURE_CUBE_MAP_NEGATIVE_Y,0,n.RGB,n.RGB,n.UNSIGNED_BYTE,r.yneg),n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_Y,0,n.RGB,n.RGB,n.UNSIGNED_BYTE,r.ypos),n.texImage2D(n.TEXTURE_CUBE_MAP_NEGATIVE_Z,0,n.RGB,n.RGB,n.UNSIGNED_BYTE,r.zneg),n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_Z,0,n.RGB,n.RGB,n.UNSIGNED_BYTE,r.zpos)}Le.prototype.bind=function(r){this.gl.activeTexture(this.gl.TEXTURE0+(r||0)),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,this.id)};Le.prototype.unbind=function(r){this.gl.activeTexture(this.gl.TEXTURE0+(r||0)),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,null)};const He=200,ft=`
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
#define MAX_SPARKS `+He+`
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

`;class ut{constructor(n,c){if(this.gl=n,this.copyVideo=!1,this.show=!1,n===null){alert("Unable to initialize WebGL. Your browser or machine may not support it.");return}n.clearColor(0,0,0,1),n.clear(n.COLOR_BUFFER_BIT),this.shader=new v.Shader(`
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

    `+ft+Ie+`

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
`),this.mesh=v.Mesh.plane({width:2,height:2,coords:!0,normals:!0}),this.mesh.transform(v.Matrix.rotate(90,1,0,0)),this.mesh.transform(v.Matrix.translate(0,.1,0)),this.programInfo=null,this.texture=this.initTexture(),this.video=this.setupVideo(c),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!0)}render(){const n=l.params.visualizations.sparks,c=l.params.simulation.poolSize;if(!l.params.video.show)return;this.copyVideo&&this.updateTexture(),(!this.mesh.vertexBuffers||!this.mesh.vertexBuffers.vertex)&&this.mesh.compile(),this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture);const f=this.gl.canvas.height,x=16*f/9,y=(this.gl.canvas.width-x)/2;this.gl.viewport(y,0,x,f),O.swimmersAttributesTexture&&O.swimmersAttributesTexture.bind(1),this.shader.uniforms({uSampler:0,swimmersHelperFunctions:1,iTime:l.getRaceTime(),poolSize:[c.x,c.y,c.z],iResolution:[this.gl.canvas.width,this.gl.canvas.height],sparksEnabled:n.enabled,sparksGlow:n.glow,sparksGlowOffset:n.glowOffset,sparksStroke:n.stroke,sparksNumber:n.num,sparksLengthFactor:n.lengthFactor,sparksSizeFactor:n.sizeFactor,fov:n.fov,thresholdBlending:l.params.video.thresholdBlending,blendingThreshold:l.params.video.blendingThreshold}).draw(this.mesh),this.gl.disable(this.gl.BLEND),this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height)}initTexture(){const n=this.gl.createTexture();this.gl.bindTexture(this.gl.TEXTURE_2D,n);const c=0,f=this.gl.RGBA,x=1,y=1,A=0,I=this.gl.RGBA,G=this.gl.UNSIGNED_BYTE,W=new Uint8Array([0,0,255,255]);return this.gl.texImage2D(this.gl.TEXTURE_2D,c,f,x,y,A,I,G,W),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),n}updateTexture(){const c=this.gl.RGBA,f=this.gl.RGBA,x=this.gl.UNSIGNED_BYTE;this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture),this.gl.texImage2D(this.gl.TEXTURE_2D,0,c,f,x,this.video)}setupVideo(n){const c=document.createElement("video");let f=!1,x=!1;c.playsInline=!0,c.muted=!0,c.loop=!0,c.addEventListener("playing",()=>{f=!0,A()},!0),c.addEventListener("timeupdate",()=>{x=!0,A()},!0),c.src=n,c.play();const y=this,A=()=>{f&&x&&(y.copyVideo=!0)};return c}}const we=new Qe,mt=function(r,n){const c=we.addFolder("visualizations");c.close(),c.add(l,"useConfigFile").name("use configuration file");const f={showTimeline:!0};c.add(f,"showTimeline").name("show event timeline").onChange(M=>{const T=document.getElementById("event-editor");T&&(T.style.display=M?"block":"none")}),c.add(l.params.visualizations,"showFlags").name("show flags").listen(),c.add(l.params.visualizations,"showWR").name("show world record").listen(),c.add(l.params.visualizations,"showNeighboursLines",["none","only medals","all"]).name("show neighbours lines").listen(),c.add(l.params.visualizations,"medalsModeBeforeFinish",["none","stars","bright","lanes"]).name("show potential medals").listen(),c.add(l.params.visualizations,"medalsModeAfterFinish",["none","stars","bright","lanes"]).name("show potential medals").listen(),c.add(l.params.visualizations,"showSpeed").name("show speed").listen(),c.addFolder("ranks"),c.add(l.params.visualizations,"showDivingDistance").name("show diving distance").listen(),c.add(l.params.visualizations.shadow,"enabled").name("show shadow"),c.add(l.params.visualizations,"areaConservationEnabled","areaConservationEnabled").name("area conservation").listen();const x=we.addFolder("video");x.close(),x.add(l.params.video,"thresholdBlending").name("threshold blending"),x.add(l.params.video,"blendingThreshold",.1,.5).name("blending threshold"),x.add(l.params.video,"show").name("show").listen();const y=c.addFolder("Sparks");y.close(),y.add(l.params.visualizations.sparks,"enabled").name("sparks enabled"),y.add(l.params.visualizations.sparks,"glow",1,30).name("sparks glow factor"),y.add(l.params.visualizations.sparks,"lengthFactor",.1,10).name("sparks length factor"),y.add(l.params.visualizations.sparks,"glowOffset",.1,3).name("sparks glow offset"),y.add(l.params.visualizations.sparks,"stroke",.001,.05).name("sparks stroke"),y.add(l.params.visualizations.sparks,"num",10,He).step(1).name("sparks number"),y.add(l.params.visualizations.sparks,"sizeFactor",10,100).name("size factor");const A=c.addFolder("Swimmers shadows");A.close(),A.add(l.params.visualizations.shadow,"shadowRadius",0,2).name("shadow radius"),A.add(l.params.visualizations.shadow,"shadowPower",.1,2).name("shadow power"),A.add(l.params.visualizations.shadow,"showCircle").name("circle"),A.add(l.params.visualizations.shadow,"circleRadius",.5,2).name("circle radius"),A.add(l.params.visualizations.shadow,"circleStroke",.1,.5).name("circle stroke");const I=we.addFolder("Simulation");I.close(),I.add(l.params.simulation,"optimized").name("optimized").listen(),I.add(l.params.simulation.poolSize,"x",1,25).name("pool width").onChange(function(M){n()}).listen(),I.add(l.params.simulation.poolSize,"z",1,50).name("pool height").onChange(function(M){n()}).listen(),I.add(l.params.simulation.poolSize,"y",1,3).name("pool depth").onChange(function(M){n()}).listen(),I.add(l.params.simulation,"waterDamping",.005,.15).name("water damping").listen();const G=we.addFolder("swimmers");G.close(),G.add(l.params.swimmers,"showSpheres").name("show spheres").listen(),G.add(l.params.swimmers,"useTracking").name("use tracking data").listen();const W=we.addFolder("camera");W.close(),W.add(l.params,"focal",28,45).name("focal").listen().onChange(function(M){l.params.visualizations.sparks.fov=M*2*Math.PI/360,r.matrixMode(r.PROJECTION),r.loadIdentity(),r.perspective(l.params.focal,r.canvas.width/r.canvas.height,.01,100),r.matrixMode(r.MODELVIEW),console.log("perspective : "+l.params.focal)})},Se=150,ce=100;function pt(r){const n=document.getElementById(r);if(n.style.position=n.style.position||"relative",!n){console.warn(`event editor container "${r}" not found`);return}let c,f=!1;const x=[{name:"showFlags",type:"boolean"},{name:"showWR",type:"boolean"},{name:"showSpeed",type:"boolean"},{name:"showDivingDistance",type:"boolean"},{name:"showFinishTimes",type:"boolean"},{name:"showNeighboursLines",type:"select",options:["none","only medals","all"]},{name:"medalsModeBeforeFinish",type:"select",options:["none","stars","bright","lanes"]},{name:"medalsModeAfterFinish",type:"select",options:["none","stars","bright","lanes"]},{name:"rankSwimmerToggle",type:"number",min:1,max:10}];function y(S){const _=document.createElement("div");_.style.flex="1",_.style.padding="4px",_.style.background="#222",_.style.border="1px solid #555",_.style.borderRadius="4px",_.style.fontFamily="monospace",_.style.fontSize="12px",_.style.whiteSpace="pre-wrap",_.style.overflow="auto",_.style.maxHeight="100px";function P(){const L=S.params;if(Object.keys(L).length===0){_.textContent="(no params)";return}const z=Object.entries(L).map(([V,N])=>`${V}: ${JSON.stringify(N)}`);_.textContent=z.join(`
`)}return P(),{element:_,update:P}}function A(S,_){const P=document.createElement("div");P.style.display="flex",P.style.flexWrap="wrap",P.style.margin="4px 0",P.style.background="#333",P.style.padding="4px";function L(){_&&(_(),Y())}return x.forEach(z=>{const V=document.createElement("div");V.style.marginRight="8px",V.style.marginBottom="4px";const N=document.createElement("label");N.style.whiteSpace="nowrap",N.textContent=z.name+":",V.appendChild(N);let F;if(z.type==="boolean"){F=document.createElement("select"),[{value:"",label:"—"},{value:"true",label:"ON"},{value:"false",label:"OFF"}].forEach(X=>{const U=document.createElement("option");U.value=X.value,U.textContent=X.label,F.appendChild(U)});const K=S.params[z.name];K===void 0?F.value="":K===!0?F.value="true":K===!1&&(F.value="false"),F.addEventListener("change",()=>{F.value===""?delete S.params[z.name]:F.value==="true"?S.params[z.name]=!0:F.value==="false"&&(S.params[z.name]=!1),L()})}else if(z.type==="select"){F=document.createElement("select");const q=document.createElement("option");q.value="",q.textContent="—",F.appendChild(q),z.options.forEach(K=>{const X=document.createElement("option");X.value=K,X.textContent=K,F.appendChild(X)}),F.value=S.params[z.name]||"",F.addEventListener("change",()=>{F.value===""?delete S.params[z.name]:S.params[z.name]=F.value,L()})}else z.type==="number"&&(F=document.createElement("input"),F.type="number",z.min!==void 0&&(F.min=z.min),z.max!==void 0&&(F.max=z.max),F.placeholder="—",F.style.width="50px",F.value=S.params[z.name]!==void 0?S.params[z.name]:"",F.addEventListener("change",()=>{if(F.value==="")delete S.params[z.name];else{const q=parseFloat(F.value);isNaN(q)||(S.params[z.name]=q)}L()}));F&&V.appendChild(F),P.appendChild(V)}),P}function I(){const S=document.createElement("div");S.style.marginTop="8px",S.style.padding="8px",S.style.background="#555",S.style.border="1px solid #777";const _=document.createElement("div");_.textContent="Add New Event",_.style.fontWeight="bold",_.style.marginBottom="4px",S.appendChild(_);const P=document.createElement("input");P.type="number",P.placeholder="Distance",P.style.width="auto",P.style.marginRight="8px",S.appendChild(P);const L={},z=A({params:L},null);z.style.margin="4px 0",S.appendChild(z);const V=document.createElement("button");return V.textContent="OK",V.addEventListener("click",()=>{const N=parseFloat(P.value);if(isNaN(N)){alert("Please enter a valid distance");return}const F={distance:N,params:{...L}};l.events.push(F),Y(),c.remove(),c=null}),S.appendChild(V),S}function G(S,_,{title:P="",id:L=null,color:z="#e74c3c"}){const V=S/_*100,N=document.createElement("div");return N.style.position="absolute",N.style.left=V+"%",N.style.transform="translateX(-50%)",N.style.width="4px",N.style.height="100%",N.style.background=z,N.style.cursor="pointer",N.title=P,L&&(N.id=L),N.addEventListener("click",()=>{T(idx)}),N}function W(){let S=document.getElementById("distance-marker");const _=l.swimmers[0].getDistanceTraveled();if(!S){const P=document.getElementById("timeline-track");S=G(_,ce,{color:"blue",id:"distance-marker"}),P.appendChild(S)}S.style.left=_+"%"}function M(){n.innerHTML="";const S=document.createElement("button");if(S.textContent=f?"□":"—",S.style.position="absolute",S.style.top="0",S.style.right="0",S.style.width="20px",S.style.height="20px",S.style.zIndex="100001",S.addEventListener("click",()=>{f=!f,M()}),n.appendChild(S),f){n.style.height="20px";return}n.style.height="300px";const _=document.createElement("div");if(_.style.position="absolute",_.style.top="0px",_.style.left="50%",_.style.transform="translateX(-50%)",_.style.width="80px",_.style.height="15px",_.style.background="grey",_.style.border="1px solid black",_.style.cursor="ns-resize",_.style.zIndex="100000",_.style.lineHeight="16px",_.style.textAlign="center",_.textContent="drag",n.appendChild(_),_.addEventListener("mousedown",d=>{d.preventDefault();const t=d.clientY,i=n.offsetHeight;function e(s){const h=i-(s.clientY-t);h>20&&(n.style.height=h+"px")}function o(){document.removeEventListener("mousemove",e),document.removeEventListener("mouseup",o)}document.addEventListener("mousemove",e),document.addEventListener("mouseup",o)}),!l.events){n.textContent="no events defined";return}const P=l.events.slice().sort((d,t)=>{const i=d.distance!==void 0?d.distance:d.time!==void 0?d.time:0,e=t.distance!==void 0?t.distance:t.time!==void 0?t.time:0;return i-e}),L=new Set;P.forEach(d=>{d.params&&Object.keys(d.params).forEach(t=>L.add(t))});let z=x.map(d=>d.name).filter(d=>L.has(d));const V=["#4caf50","#2196f3","#ff9800","#9c27b0","#f44336","#009688","#e91e63","#3f51b5"],N={};z.forEach((d,t)=>{N[d]=V[t%V.length]});const F={},q={};z.forEach(d=>{q[d]=!1,F[d]=0});const K=[];if(P.forEach(d=>{const t=d.distance!==void 0?d.distance:d.time!==void 0?d.time:0;d.params&&Object.keys(d.params).forEach(i=>{if(z.includes(i)){const e=!!d.params[i];e!==q[i]&&(q[i]&&K.push({name:i,start:F[i],end:t}),q[i]=e,F[i]=t)}})}),z.forEach(d=>{q[d]&&K.push({name:d,start:F[d],end:ce})}),z.length>0){const d=document.createElement("div");d.style.position="relative";const t=20;d.style.height=z.length*t+"px",d.style.background="#222",d.style.marginBottom="4px",d.style.marginTop="10px",z.forEach((e,o)=>{const s=document.createElement("div");s.textContent=e,s.style.position="absolute",s.style.left="0",s.style.top=o*t+2+"px",s.style.width=Se+"px",s.style.color="#aaa",s.style.fontSize="10px",s.style.pointerEvents="none",d.appendChild(s)});const i=document.createElement("div");i.style.position="absolute",i.style.left=Se+"px",i.style.top="0",i.style.right="0",i.style.bottom="0",i.style.overflow="hidden",d.appendChild(i),K.forEach(e=>{const o=document.createElement("div"),s=e.start/ce*100,h=(e.end-e.start)/ce*100;o.style.position="absolute",o.style.left=s+"%",o.style.top=z.indexOf(e.name)*t+2+"px",o.style.height=t-4+"px",o.style.width=h+"%",o.style.background=N[e.name]||"#4caf50",o.title=`${e.name}: ${e.start.toFixed(2)} → ${e.end.toFixed(2)}`;const u=document.createElement("span");if(u.textContent=`${e.name}: ${e.start.toFixed(2)} → ${e.end.toFixed(2)}`,u.style.position="absolute",u.style.top="0",u.style.left="2px",u.style.fontSize="10px",u.style.color="white",u.style.pointerEvents="none",u.style.whiteSpace="nowrap",u.style.overflow="hidden",u.style.textOverflow="ellipsis",o.appendChild(u),e.end<ce){const a=document.createElement("div");a.style.position="absolute",a.style.right="0",a.style.top="0",a.style.width="5px",a.style.height="100%",a.style.background="rgba(255,255,255,0.5)",a.style.cursor="ew-resize",o.appendChild(a),a.addEventListener("mousedown",m=>{m.preventDefault(),m.stopPropagation();const g=m.clientX,p=o.offsetWidth;function w(E){const b=E.clientX-g,D=Math.max(1,p+b),k=D/i.offsetWidth*100;o.style.width=k+"%";const ee=e.start+D/i.offsetWidth*ce;u.textContent=`${e.name}: ${e.start.toFixed(2)} → ${ee.toFixed(2)}`}function R(){document.removeEventListener("mousemove",w),document.removeEventListener("mouseup",R);const E=o.offsetWidth,b=e.start+E/i.offsetWidth*ce,D=P.find(k=>(k.distance!==void 0?k.distance:k.time!==void 0?k.time:0)===e.end);D&&(D.distance!==void 0?D.distance=b:D.time!==void 0&&(D.time=b)),Y()}document.addEventListener("mousemove",w),document.addEventListener("mouseup",R)})}i.appendChild(o)}),n.appendChild(d)}const X=document.createElement("div");X.style.position="relative",X.style.height="40px",X.style.background="#222",X.style.marginBottom="4px",X.style.paddingLeft="80px";const U=document.createElement("div");U.id="timeline-track",U.style.position="absolute",U.style.background="#444",U.style.left=Se+"px",U.style.top="0",U.style.right="0",U.style.bottom="0",X.appendChild(U),P.forEach((d,t)=>{const i=d.distance!==void 0?d.distance:d.time!==void 0?d.time:0,e=`event ${t}: ${JSON.stringify(d.params)}`,o=G(i,ce,{title:e});U.appendChild(o)}),n.appendChild(X),P.forEach((d,t)=>{const i=document.createElement("div");i.style.display="flex",i.style.flexDirection="column",i.style.marginBottom="4px";const e=document.createElement("div");e.style.display="flex",e.style.alignItems="center";const o=document.createElement("input");o.type="number",o.style.width="60px",o.value=d.distance!==void 0?d.distance:d.time!==void 0?d.time:0,o.addEventListener("change",()=>{const m=parseFloat(o.value);isNaN(m)||(d.distance!==void 0?d.distance=m:d.time=m,Y())}),e.appendChild(o);const s=y(d);e.appendChild(s.element);const h=document.createElement("button");h.textContent="⚙",h.style.marginLeft="4px",e.appendChild(h);const u=document.createElement("button");u.textContent="✖",u.style.marginLeft="4px",u.addEventListener("click",()=>{const m=l.events.indexOf(P[t]);m!==-1&&(l.events.splice(m,1),M())}),e.appendChild(u),i.appendChild(e);let a;h.addEventListener("click",()=>{a?(a.remove(),a=null):(a=A(d,s.update),i.appendChild(a))}),n.appendChild(i)});const $=document.createElement("button");$.textContent="+ add event",$.addEventListener("click",()=>{c?(c.remove(),c=null):(c=I(),n.appendChild(c),n.scrollTop=n.scrollHeight)}),n.appendChild($);const Z=document.createElement("button");Z.textContent="export JSON",Z.style.marginLeft="8px",Z.addEventListener("click",()=>{const d=JSON.stringify(l.events,null,2),t=new Blob([d],{type:"application/json"}),i=URL.createObjectURL(t),e=document.createElement("a");e.href=i,e.download="vis-config.json",e.click(),URL.revokeObjectURL(i)}),n.appendChild(Z);const Q=document.createElement("input");Q.type="file",Q.accept=".json",Q.style.marginLeft="8px",Q.addEventListener("change",d=>{const t=d.target.files[0];if(t){const i=new FileReader;i.onload=e=>{try{const o=JSON.parse(e.target.result);l.events=o,Y()}catch(o){alert("Invalid JSON: "+o.message)}},i.readAsText(t)}}),n.appendChild(Q)}function T(S){const P=n.querySelectorAll("div")[1+S];P&&P.scrollIntoView({behavior:"smooth",block:"center"})}function Y(){l.events.sort((S,_)=>{const P=S.distance!==void 0?S.distance:S.time!==void 0?S.time:0,L=_.distance!==void 0?_.distance:_.time!==void 0?_.time:0;return P-L}),M()}M(),l._renderTimeline=M,l._updateDistanceMarker=W}function gt(r){return r.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n/g,"<br>")}function vt(r){var n=gt(r);n=="WebGL not supported"&&(n='Your browser does not support WebGL.<br>Please see    <a href="http://www.khronos.org/webgl/wiki/Getting_a_WebGL_Implementation">    Getting a WebGL Implementation</a>.');var c=document.getElementById("loading");c.innerHTML=n,c.style.zIndex=1}window.onerror=vt;var C=v.create();C.canvas.tabIndex=0;var B,Ue,J;const Me=10;var me=-25,_e=-200.5,ye=0;let Re=0,Ae=0;var pe=4,se=!1,Ee,De,te;O.initAttributes(C);let j=new v.Vector(256,256);function Ye(){document.getElementById("warning").hidden=!(j.x*j.y>3e5&&B&&l.params.visualizations.areaConservationEnabled)}let ze=0;function xt(r){ze+=r,ze>=1&&(document.getElementById("fps").innerText=`${(1/r).toFixed(1)} FPS`,ze=0)}function ue(){console.log("reset"),document.getElementById("resolution").innerText=`Resolution: ${j.x} x ${j.y}`,Ye(),Ee=new v.Vector(0,-l.params.simulation.poolSize.z/2+1),B.reset(j),J.flagCenter=Ee,J.flagSize=De,J.reset();const r=l.params.simulation.poolSize.x/Me;let n=l.params.simulation.poolSize.x/2-r/2,c=0;for(let f of l.swimmers)f.body.center.x=n,f.startingPoint.x=n,f.parseData("./assets/race-data/"+c+".csv"),c++,n-=r}function wt(r){const n=parseFloat(r.target.value);isNaN(n)||(l.setRaceTime(n),te&&te.video&&(te.video.currentTime=l.time),l.swimmers.forEach(c=>c.setCurrentDataIndex()))}window.onload=function(){var r=window.devicePixelRatio||1,n=document.getElementById("help");function c(){var a=innerWidth,m=innerHeight;C.canvas.width=a*r,C.canvas.height=m*r,C.canvas.style.width=a+"px",C.canvas.style.height=m+"px",C.viewport(0,0,C.canvas.width,C.canvas.height),C.matrixMode(C.PROJECTION),C.loadIdentity(),C.perspective(l.params.focal,C.canvas.width/C.canvas.height,.01,100),C.matrixMode(C.MODELVIEW),u()}document.body.appendChild(C.canvas),C.canvas.oncontextmenu=function(a){a.preventDefault()},C.clearColor(0,0,0,1),Ee=new v.Vector(0,-l.params.simulation.poolSize.z/2+1),De=.7,B=new re(C),te=new ut(C,"./video.mp4");const f=document.getElementById("time-slider");f&&f.addEventListener("input",wt);const x=document.getElementById("drop-zone");let y=0;if(document.addEventListener("dragenter",a=>{y++,x.style.display="flex"}),document.addEventListener("dragover",a=>{a.preventDefault(),a.dataTransfer.dropEffect="copy"}),document.addEventListener("dragleave",a=>{y--,y===0&&(x.style.display="none")}),document.addEventListener("drop",a=>{a.preventDefault(),y=0,x.style.display="none";const m=a.dataTransfer.files;if(m.length>0&&(m[0].type.startsWith("video/")||m[0].name.endsWith(".mp4"))){const g=URL.createObjectURL(m[0]);te.video.src=g,te.video.play(),console.log("Loaded:",m[0].name)}}),mt(C,ue),setTimeout(()=>{pt("event-editor")},50),J=new de(C,B,Ee,De),Ue=new Le({xneg:document.getElementById("xneg"),xpos:document.getElementById("xpos"),yneg:document.getElementById("ypos"),ypos:document.getElementById("ypos"),zneg:document.getElementById("zneg"),zpos:document.getElementById("zpos")},C),!B.textureA.canDrawTo()||!B.textureB.canDrawTo())throw new Error("Rendering to floating-point textures is required but not supported");const A=new v.Vector(-.4,-.75,.2),I=new v.Vector(.4,-.75,.2),G=new O(A);new O(I);for(let a=0;a<1;a++)l.swimmers.push(new O(A));const W=G.body.radius;for(let a of l.swimmers)B.addSwimmer(a);ue();for(var M=0;M<20;M++)B.addDrop(Math.random()*2-1,Math.random()*2-1,.06,M&1?.01:-.01);document.getElementById("loading").innerHTML="",c();var T=window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(a){setTimeout(a,0)},Y=new Date().getTime();function S(){var a=new Date().getTime();se||(h((a-Y)/1e3),u()),Y=a,T(S)}T(S),window.onresize=c;var _,P,L,z=-1,V=0,N=1,F=2;const q=3;var K,X;function U(a,m,g){if(K=a,X=m,!g||g.button===0){var p=new v.Raytracer,w=p.getRayForPixel(a*r,m*r),R=p.eye.add(w.multiply(-p.eye.y/w.y));for(let b of l.swimmers){var E=v.Raytracer.hitTestSphere(p.eye,w,b.body.center,b.body.radius);if(E){z=N,L=b,b.body.cinematic=!0,_=E.hit,P=p.getRayForPixel(C.canvas.width/2,C.canvas.height/2).negative();return}}Math.abs(R.x)<l.params.simulation.poolSize.x/2&&Math.abs(R.z)<l.params.simulation.poolSize.z/2&&(z=V,$(a,m))}else g.button===2?z=F:g.button===1&&(z=q)}function $(a,m,g){switch(z){case V:{var p=new v.Raytracer,w=p.getRayForPixel(a*r,m*r),R=p.eye.add(w.multiply(-p.eye.y/w.y));B.addDrop(R.x/l.params.simulation.poolSize.x*2,R.z/l.params.simulation.poolSize.z*2,.06,.03),se&&(B.updateNormals(),J.updateCaustics(B));break}case N:{var p=new v.Raytracer,w=p.getRayForPixel(a*r,m*r),E=-P.dot(p.eye.subtract(_))/P.dot(w),b=p.eye.add(w.multiply(E));const ee=L.body.center.add(b.subtract(_)),oe=L.body.radius,qe=Math.max(oe-l.params.simulation.poolSize.x/2,Math.min(l.params.simulation.poolSize.x/2-oe,ee.x)),je=Math.max(oe-l.params.simulation.poolSize.y,Math.min(10,ee.y)),Ke=Math.max(oe-l.params.simulation.poolSize.z/2,Math.min(l.params.simulation.poolSize.z/2-oe,ee.z));L.body.move(new v.Vector(qe,je,Ke)),_=b,se&&J.updateCaustics(B);break}case F:{if(g&&g.shiftKey){ye-=a-K,ye=Math.max(-89.999,Math.min(89.999,ye));break}_e-=a-K,me-=m-X,me=Math.max(-89.999,Math.min(89.999,me));break}case q:{const D=.001*pe;Re+=D*(a-K),Ae-=D*(m-X)}}K=a,X=m,se&&u()}function Z(){z=-1,L&&(L.body.cinematic=!O.useGravity)}function Q(a){return a===n||a.parentNode&&Q(a.parentNode)}function d(a){return a&&(a.id==="event-editor"||a.parentNode&&d(a.parentNode))}function t(a){pe*=1-a*2e-4,pe=Math.max(2,Math.min(1e3,pe)),se&&u()}addEventListener("wheel",function(a){if(!d(a.target)){var m=a.deltaY;t(-m)}}),document.onmousedown=function(a){C.canvas.focus(),Q(a.target)||U(a.pageX,a.pageY,a)},document.onmousemove=function(a){$(a.pageX,a.pageY,a)},document.onmouseup=function(){Z()},document.ontouchstart=function(a){a.touches.length===1&&!Q(a.target)&&(a.preventDefault(),U(a.touches[0].pageX,a.touches[0].pageY,!1))},document.ontouchmove=function(a){a.touches.length===1&&$(a.touches[0].pageX,a.touches[0].pageY)},document.ontouchend=function(a){a.touches.length==0&&Z()};function i(){O.useGravity=!0,B.WR_position=0,l.setTimeBeginRace(),te.copyVideo&&(te.video.currentTime=l.time),O.raceHasStarted=!0;for(let a of l.swimmers)a.startRace()}function e(){O.raceHasStarted=!1;for(let a of l.swimmers)a.swim(!1)}function o(){se=!se,te.video.currentTime=l.time}const s=function(a){if(a.which==32)o();else if(a.which==71){O.useGravity=!O.useGravity;for(let m of l.swimmers)m.body.cinematic=O.useGravity}else if(a.which==76&&se)u();else if(a.which==74)l.swimmers.forEach(m=>m.jump(2));else if(a.which==67)l.params.visualizations.areaConservationEnabled=!l.params.visualizations.areaConservationEnabled,Ye(),console.log("Area conservation "+(l.params.visualizations.areaConservationEnabled?"enabled.":"disabled."));else if(a.which==80)B.showProjectionGrid=!B.showProjectionGrid,console.log("Projection grid "+(B.showProjectionGrid?"enabled.":"disabled."));else if(a.which==65)B.showAreaConservedGrid=!B.showAreaConservedGrid,console.log("Area conserved grid "+(B.showAreaConservedGrid?"enabled.":"disabled."));else if(a.which==83){if(O.swimming=!O.swimming,O.swimming)for(let m of l.swimmers)m.swim(!0);else e();console.log("Swimming "+(O.swimming?"enabled.":"disabled."))}else if(a.which==86)l.params.video.show=!l.params.video.show;else if(a.which==79){if(l.params.simulation.optimized=!0,l.params.simulation.poolSize.x=25,l.params.simulation.poolSize.y=2,l.params.simulation.poolSize.z=50,j.x=1024,j.y=2048,l.params.visualizations.areaConservationEnabled=!1,l.params.simulation.waterDamping=.1,l.swimmers.length!=Me)for(let m=l.swimmers.length;m<Me;m++){const g=new O(A);l.swimmers.push(g),B.addSwimmer(g)}l.time=0,te.copyVideo&&(te.video.currentTime=l.time),ue(),l.params.focal=39.98,l.params.visualizations.sparks.fov=l.params.focal*2*Math.PI/360,C.matrixMode(C.PROJECTION),C.loadIdentity(),C.perspective(l.params.focal,C.canvas.width/C.canvas.height,.01,100),C.matrixMode(C.MODELVIEW),Re=-.53,Ae=1.25,pe=47.86,me=-29,_e=-260.5,ye=-5,console.log("Olympic mode enabled.")}else if(a.which==87){if(B.resetTextures(),O.raceHasStarted){e();return}i()}else a.which==72?(document.getElementById("commands").hidden=!document.getElementById("commands").hidden,document.getElementById("h").hidden=!document.getElementById("h").hidden):a.which==40?(j.x>129&&(j.x=Math.round(j.x/2)),ue(),console.log("decreasing x resolution")):a.which==38?(j.x<16384&&(j.x=Math.round(j.x*2)),ue(),console.log("increasing x resolution")):a.which==37?(j.y>129&&(j.y=Math.round(j.y/2)),ue(),console.log("decreasing y resolution")):a.which==39&&(j.y<16384&&(j.y=Math.round(j.y*2)),ue(),console.log("increasing y resolution"))};C.canvas.addEventListener("keydown",s);function h(a){if(!(a>1)){if(z==N)for(let m of l.swimmers)m.body.velocity=new v.Vector(0,0,0);for(let m of l.swimmers)m.update(a);B.updateSpheres(a);for(let m=0;m<l.params.numSteps;m++)B.stepSimulation();J.updateCaustics(B),O.raceHasStarted&&l.updateTime(a),l.updateParams(),f.value=l.getRaceTime(),xt(a)}}function u(){v.keys.L&&(J.lightDir=v.Vector.fromAngles((90-_e)*Math.PI/180,-me*Math.PI/180),se&&J.updateCaustics(B)),l.isOneVisualizationEnabled()&&O.updateAttributesTexture(),B.addOrRemoveVisualizationWaves(!0),B.updateNormals(),C.clear(C.COLOR_BUFFER_BIT|C.DEPTH_BUFFER_BIT),C.loadIdentity(),C.translate(Re,Ae,-pe),C.rotate(-ye,0,0,1),C.rotate(-me,1,0,0),C.rotate(-_e,0,1,0),C.translate(0,.5,0),C.enable(C.DEPTH_TEST),J.sphereCenter=l.swimmers[0].body.center,J.sphereRadius=W,J.renderCube(B),J.renderWater(B,Ue,l.params.visualizations.shadow),l.params.swimmers.showSpheres&&J.renderSpheres(B),te.render(),C.disable(C.DEPTH_TEST),B.addOrRemoveVisualizationWaves(!1)}};
//# sourceMappingURL=swimming-Dx5TSamw.js.map
