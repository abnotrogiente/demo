var ht=Object.defineProperty;var Oe=a=>{throw TypeError(a)};var mt=(a,i,n)=>i in a?ht(a,i,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[i]=n;var ie=(a,i,n)=>mt(a,typeof i!="symbol"?i+"":i,n),ut=(a,i,n)=>i.has(a)||Oe("Cannot "+n);var ve=(a,i,n)=>i.has(a)?Oe("Cannot add the same private member more than once"):i instanceof WeakSet?i.add(a):i.set(a,n);var Z=(a,i,n)=>(ut(a,i,"access private method"),n);import"./modulepreload-polyfill-B5Qt9EMX.js";import{g as ft}from"./lil-gui.module.min-Vka56b52.js";var p=function(){var a,i={create:function(r){r=r||{};var s=document.createElement("canvas");s.width=800,s.height=600,"alpha"in r||(r.alpha=!1);try{a=s.getContext("webgl2",r)}catch{}try{a=a||s.getContext("experimental-webgl",r)}catch{}if(!a)throw new Error("WebGL not supported");return a.HALF_FLOAT_OES=36193,n(),c(),u(),P(),a},keys:{},Matrix:w,Indexer:O,Buffer:B,Mesh:g,HitTest:N,Raytracer:G,Shader:D,Texture:I,Vector:E};function n(){a.MODELVIEW=L|1,a.PROJECTION=L|2;var r=new w,s=new w;a.modelviewMatrix=new w,a.projectionMatrix=new w;var e=[],o=[],l,d;a.matrixMode=function(h){switch(h){case a.MODELVIEW:l="modelviewMatrix",d=e;break;case a.PROJECTION:l="projectionMatrix",d=o;break;default:throw new Error("invalid matrix mode "+h)}},a.loadIdentity=function(){w.identity(a[l])},a.loadMatrix=function(h){for(var m=h.m,T=a[l].m,y=0;y<16;y++)T[y]=m[y]},a.multMatrix=function(h){a.loadMatrix(w.multiply(a[l],h,s))},a.perspective=function(h,m,T,y){a.multMatrix(w.perspective(h,m,T,y,r))},a.frustum=function(h,m,T,y,v,_){a.multMatrix(w.frustum(h,m,T,y,v,_,r))},a.ortho=function(h,m,T,y,v,_){a.multMatrix(w.ortho(h,m,T,y,v,_,r))},a.scale=function(h,m,T){a.multMatrix(w.scale(h,m,T,r))},a.translate=function(h,m,T){a.multMatrix(w.translate(h,m,T,r))},a.rotate=function(h,m,T,y){a.multMatrix(w.rotate(h,m,T,y,r))},a.lookAt=function(h,m,T,y,v,_,C,z,F){a.multMatrix(w.lookAt(h,m,T,y,v,_,C,z,F,r))},a.pushMatrix=function(){d.push(Array.prototype.slice.call(a[l].m))},a.popMatrix=function(){var h=d.pop();a[l].m=k?new Float32Array(h):h},a.project=function(h,m,T,y,v,_){y=y||a.modelviewMatrix,v=v||a.projectionMatrix,_=_||a.getParameter(a.VIEWPORT);var C=v.transformPoint(y.transformPoint(new E(h,m,T)));return new E(_[0]+_[2]*(C.x*.5+.5),_[1]+_[3]*(C.y*.5+.5),C.z*.5+.5)},a.unProject=function(h,m,T,y,v,_){y=y||a.modelviewMatrix,v=v||a.projectionMatrix,_=_||a.getParameter(a.VIEWPORT);var C=new E((h-_[0])/_[2]*2-1,(m-_[1])/_[3]*2-1,T*2-1);return w.inverse(w.multiply(v,y,r),s).transformPoint(C)},a.matrixMode(a.MODELVIEW)}function c(){var r={mesh:new g({coords:!0,colors:!0,triangles:!1}),mode:-1,coord:[0,0,0,0],color:[1,1,1,1],shader:new D("      uniform float pointSize;      out vec4 color;      out vec4 coord;      void main() {        color = gl_Color;        coord = gl_TexCoord;        gl_Position = gl_ModelViewProjectionMatrix * gl_Vertex;        gl_PointSize = pointSize;      }    ","      uniform sampler2D tex;      uniform float pointSize;      uniform bool useTexture;      in vec4 color;      in vec4 coord;      out vec4 fragColor;      void main() {        fragColor = color;        if (useTexture) fragColor *= texture(tex, coord.xy);      }    ")};a.pointSize=function(s){r.shader.uniforms({pointSize:s})},a.begin=function(s){if(r.mode!=-1)throw new Error("mismatched gl.begin() and gl.end() calls");r.mode=s,r.mesh.colors=[],r.mesh.coords=[],r.mesh.vertices=[]},a.color=function(s,e,o,l){r.color=arguments.length==1?s.toArray().concat(1):[s,e,o,l||1]},a.texCoord=function(s,e){r.coord=arguments.length==1?s.toArray(2):[s,e]},a.vertex=function(s,e,o){r.mesh.colors.push(r.color),r.mesh.coords.push(r.coord),r.mesh.vertices.push(arguments.length==1?s.toArray():[s,e,o])},a.end=function(){if(r.mode==-1)throw new Error("mismatched gl.begin() and gl.end() calls");r.mesh.compile(),r.shader.uniforms({useTexture:!!a.getParameter(a.TEXTURE_BINDING_2D)}).draw(r.mesh,r.mode),r.mode=-1}}function u(){var r=a,s=0,e=0,o={},l=!1,d=Object.prototype.hasOwnProperty;function h(){for(var z in o)if(d.call(o,z)&&o[z])return!0;return!1}function m(z){var F={};for(var X in z)typeof z[X]=="function"?F[X]=function(J){return function(){J.apply(z,arguments)}}(z[X]):F[X]=z[X];F.original=z,F.x=F.pageX,F.y=F.pageY;for(var W=a.canvas;W;W=W.offsetParent)F.x-=W.offsetLeft,F.y-=W.offsetTop;return l?(F.deltaX=F.x-s,F.deltaY=F.y-e):(F.deltaX=0,F.deltaY=0,l=!0),s=F.x,e=F.y,F.dragging=h(),F.preventDefault=function(){F.original.preventDefault()},F.stopPropagation=function(){F.original.stopPropagation()},F}function T(z){a=r,h()||(x(document,"mousemove",y),x(document,"mouseup",v),b(a.canvas,"mousemove",y),b(a.canvas,"mouseup",v)),o[z.which]=!0,z=m(z),a.onmousedown&&a.onmousedown(z),z.preventDefault()}function y(z){a=r,z=m(z),a.onmousemove&&a.onmousemove(z),z.preventDefault()}function v(z){a=r,o[z.which]=!1,h()||(b(document,"mousemove",y),b(document,"mouseup",v),x(a.canvas,"mousemove",y),x(a.canvas,"mouseup",v)),z=m(z),a.onmouseup&&a.onmouseup(z),z.preventDefault()}function _(){l=!1}function C(){o={},l=!1}x(a.canvas,"mousedown",T),x(a.canvas,"mousemove",y),x(a.canvas,"mouseup",v),x(a.canvas,"mouseover",_),x(a.canvas,"mouseout",_),x(document,"contextmenu",C)}function f(r){var s={8:"BACKSPACE",9:"TAB",13:"ENTER",16:"SHIFT",27:"ESCAPE",32:"SPACE",37:"LEFT",38:"UP",39:"RIGHT",40:"DOWN"};return s[r]||(r>=65&&r<=90?String.fromCharCode(r):null)}function x(r,s,e){r.addEventListener(s,e)}function b(r,s,e){r.removeEventListener(s,e)}x(document,"keydown",function(r){if(!r.altKey&&!r.ctrlKey&&!r.metaKey){var s=f(r.keyCode);s&&(i.keys[s]=!0),i.keys[r.keyCode]=!0}}),x(document,"keyup",function(r){if(!r.altKey&&!r.ctrlKey&&!r.metaKey){var s=f(r.keyCode);s&&(i.keys[s]=!1),i.keys[r.keyCode]=!1}});function P(){(function(r){a.makeCurrent=function(){a=r}})(a),a.animate=function(){var r=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(l){setTimeout(l,16.666666666666668)},s=new Date().getTime(),e=a;function o(){a=e;var l=new Date().getTime();a.onupdate&&a.onupdate((l-s)/1e3),a.ondraw&&a.ondraw(),r(o),s=l}o()},a.fullscreen=function(r){r=r||{};var s=r.paddingTop||0,e=r.paddingLeft||0,o=r.paddingRight||0,l=r.paddingBottom||0;if(!document.body)throw new Error("document.body doesn't exist yet (call gl.fullscreen() from window.onload() or from inside the <body> tag)");document.body.appendChild(a.canvas),document.body.style.overflow="hidden",a.canvas.style.position="absolute",a.canvas.style.left=e+"px",a.canvas.style.top=s+"px";function d(){a.canvas.width=window.innerWidth-e-o,a.canvas.height=window.innerHeight-s-l,a.viewport(0,0,a.canvas.width,a.canvas.height),(r.camera||!("camera"in r))&&(a.matrixMode(a.PROJECTION),a.loadIdentity(),a.perspective(r.fov||45,a.canvas.width/a.canvas.height,r.near||.1,r.far||1e3),a.matrixMode(a.MODELVIEW)),a.ondraw&&a.ondraw()}x(window,"resize",d),d()}}var L=305397760,k=typeof Float32Array<"u";function w(){var r=Array.prototype.concat.apply([],arguments);r.length||(r=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),this.m=k?new Float32Array(r):r}w.prototype={inverse:function(){return w.inverse(this,new w)},transpose:function(){return w.transpose(this,new w)},multiply:function(r){return w.multiply(this,r,new w)},transformPoint:function(r){var s=this.m;return new E(s[0]*r.x+s[1]*r.y+s[2]*r.z+s[3],s[4]*r.x+s[5]*r.y+s[6]*r.z+s[7],s[8]*r.x+s[9]*r.y+s[10]*r.z+s[11]).divide(s[12]*r.x+s[13]*r.y+s[14]*r.z+s[15])},transformVector:function(r){var s=this.m;return new E(s[0]*r.x+s[1]*r.y+s[2]*r.z,s[4]*r.x+s[5]*r.y+s[6]*r.z,s[8]*r.x+s[9]*r.y+s[10]*r.z)}},w.inverse=function(r,s){s=s||new w;var e=r.m,o=s.m;o[0]=e[5]*e[10]*e[15]-e[5]*e[14]*e[11]-e[6]*e[9]*e[15]+e[6]*e[13]*e[11]+e[7]*e[9]*e[14]-e[7]*e[13]*e[10],o[1]=-e[1]*e[10]*e[15]+e[1]*e[14]*e[11]+e[2]*e[9]*e[15]-e[2]*e[13]*e[11]-e[3]*e[9]*e[14]+e[3]*e[13]*e[10],o[2]=e[1]*e[6]*e[15]-e[1]*e[14]*e[7]-e[2]*e[5]*e[15]+e[2]*e[13]*e[7]+e[3]*e[5]*e[14]-e[3]*e[13]*e[6],o[3]=-e[1]*e[6]*e[11]+e[1]*e[10]*e[7]+e[2]*e[5]*e[11]-e[2]*e[9]*e[7]-e[3]*e[5]*e[10]+e[3]*e[9]*e[6],o[4]=-e[4]*e[10]*e[15]+e[4]*e[14]*e[11]+e[6]*e[8]*e[15]-e[6]*e[12]*e[11]-e[7]*e[8]*e[14]+e[7]*e[12]*e[10],o[5]=e[0]*e[10]*e[15]-e[0]*e[14]*e[11]-e[2]*e[8]*e[15]+e[2]*e[12]*e[11]+e[3]*e[8]*e[14]-e[3]*e[12]*e[10],o[6]=-e[0]*e[6]*e[15]+e[0]*e[14]*e[7]+e[2]*e[4]*e[15]-e[2]*e[12]*e[7]-e[3]*e[4]*e[14]+e[3]*e[12]*e[6],o[7]=e[0]*e[6]*e[11]-e[0]*e[10]*e[7]-e[2]*e[4]*e[11]+e[2]*e[8]*e[7]+e[3]*e[4]*e[10]-e[3]*e[8]*e[6],o[8]=e[4]*e[9]*e[15]-e[4]*e[13]*e[11]-e[5]*e[8]*e[15]+e[5]*e[12]*e[11]+e[7]*e[8]*e[13]-e[7]*e[12]*e[9],o[9]=-e[0]*e[9]*e[15]+e[0]*e[13]*e[11]+e[1]*e[8]*e[15]-e[1]*e[12]*e[11]-e[3]*e[8]*e[13]+e[3]*e[12]*e[9],o[10]=e[0]*e[5]*e[15]-e[0]*e[13]*e[7]-e[1]*e[4]*e[15]+e[1]*e[12]*e[7]+e[3]*e[4]*e[13]-e[3]*e[12]*e[5],o[11]=-e[0]*e[5]*e[11]+e[0]*e[9]*e[7]+e[1]*e[4]*e[11]-e[1]*e[8]*e[7]-e[3]*e[4]*e[9]+e[3]*e[8]*e[5],o[12]=-e[4]*e[9]*e[14]+e[4]*e[13]*e[10]+e[5]*e[8]*e[14]-e[5]*e[12]*e[10]-e[6]*e[8]*e[13]+e[6]*e[12]*e[9],o[13]=e[0]*e[9]*e[14]-e[0]*e[13]*e[10]-e[1]*e[8]*e[14]+e[1]*e[12]*e[10]+e[2]*e[8]*e[13]-e[2]*e[12]*e[9],o[14]=-e[0]*e[5]*e[14]+e[0]*e[13]*e[6]+e[1]*e[4]*e[14]-e[1]*e[12]*e[6]-e[2]*e[4]*e[13]+e[2]*e[12]*e[5],o[15]=e[0]*e[5]*e[10]-e[0]*e[9]*e[6]-e[1]*e[4]*e[10]+e[1]*e[8]*e[6]+e[2]*e[4]*e[9]-e[2]*e[8]*e[5];for(var l=e[0]*o[0]+e[1]*o[4]+e[2]*o[8]+e[3]*o[12],d=0;d<16;d++)o[d]/=l;return s},w.transpose=function(r,s){s=s||new w;var e=r.m,o=s.m;return o[0]=e[0],o[1]=e[4],o[2]=e[8],o[3]=e[12],o[4]=e[1],o[5]=e[5],o[6]=e[9],o[7]=e[13],o[8]=e[2],o[9]=e[6],o[10]=e[10],o[11]=e[14],o[12]=e[3],o[13]=e[7],o[14]=e[11],o[15]=e[15],s},w.multiply=function(r,s,e){e=e||new w;var o=r.m,l=s.m,d=e.m;return d[0]=o[0]*l[0]+o[1]*l[4]+o[2]*l[8]+o[3]*l[12],d[1]=o[0]*l[1]+o[1]*l[5]+o[2]*l[9]+o[3]*l[13],d[2]=o[0]*l[2]+o[1]*l[6]+o[2]*l[10]+o[3]*l[14],d[3]=o[0]*l[3]+o[1]*l[7]+o[2]*l[11]+o[3]*l[15],d[4]=o[4]*l[0]+o[5]*l[4]+o[6]*l[8]+o[7]*l[12],d[5]=o[4]*l[1]+o[5]*l[5]+o[6]*l[9]+o[7]*l[13],d[6]=o[4]*l[2]+o[5]*l[6]+o[6]*l[10]+o[7]*l[14],d[7]=o[4]*l[3]+o[5]*l[7]+o[6]*l[11]+o[7]*l[15],d[8]=o[8]*l[0]+o[9]*l[4]+o[10]*l[8]+o[11]*l[12],d[9]=o[8]*l[1]+o[9]*l[5]+o[10]*l[9]+o[11]*l[13],d[10]=o[8]*l[2]+o[9]*l[6]+o[10]*l[10]+o[11]*l[14],d[11]=o[8]*l[3]+o[9]*l[7]+o[10]*l[11]+o[11]*l[15],d[12]=o[12]*l[0]+o[13]*l[4]+o[14]*l[8]+o[15]*l[12],d[13]=o[12]*l[1]+o[13]*l[5]+o[14]*l[9]+o[15]*l[13],d[14]=o[12]*l[2]+o[13]*l[6]+o[14]*l[10]+o[15]*l[14],d[15]=o[12]*l[3]+o[13]*l[7]+o[14]*l[11]+o[15]*l[15],e},w.identity=function(r){r=r||new w;var s=r.m;return s[0]=s[5]=s[10]=s[15]=1,s[1]=s[2]=s[3]=s[4]=s[6]=s[7]=s[8]=s[9]=s[11]=s[12]=s[13]=s[14]=0,r},w.perspective=function(r,s,e,o,l){var d=Math.tan(r*Math.PI/360)*e,h=d*s;return w.frustum(-h,h,-d,d,e,o,l)},w.frustum=function(r,s,e,o,l,d,h){h=h||new w;var m=h.m;return m[0]=2*l/(s-r),m[1]=0,m[2]=(s+r)/(s-r),m[3]=0,m[4]=0,m[5]=2*l/(o-e),m[6]=(o+e)/(o-e),m[7]=0,m[8]=0,m[9]=0,m[10]=-(d+l)/(d-l),m[11]=-2*d*l/(d-l),m[12]=0,m[13]=0,m[14]=-1,m[15]=0,h},w.ortho=function(r,s,e,o,l,d,h){h=h||new w;var m=h.m;return m[0]=2/(s-r),m[1]=0,m[2]=0,m[3]=-(s+r)/(s-r),m[4]=0,m[5]=2/(o-e),m[6]=0,m[7]=-(o+e)/(o-e),m[8]=0,m[9]=0,m[10]=-2/(d-l),m[11]=-(d+l)/(d-l),m[12]=0,m[13]=0,m[14]=0,m[15]=1,h},w.scale=function(r,s,e,o){o=o||new w;var l=o.m;return l[0]=r,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=s,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=e,l[11]=0,l[12]=0,l[13]=0,l[14]=0,l[15]=1,o},w.translate=function(r,s,e,o){o=o||new w;var l=o.m;return l[0]=1,l[1]=0,l[2]=0,l[3]=r,l[4]=0,l[5]=1,l[6]=0,l[7]=s,l[8]=0,l[9]=0,l[10]=1,l[11]=e,l[12]=0,l[13]=0,l[14]=0,l[15]=1,o},w.rotate=function(r,s,e,o,l){if(!r||!s&&!e&&!o)return w.identity(l);l=l||new w;var d=l.m,h=Math.sqrt(s*s+e*e+o*o);r*=Math.PI/180,s/=h,e/=h,o/=h;var m=Math.cos(r),T=Math.sin(r),y=1-m;return d[0]=s*s*y+m,d[1]=s*e*y-o*T,d[2]=s*o*y+e*T,d[3]=0,d[4]=e*s*y+o*T,d[5]=e*e*y+m,d[6]=e*o*y-s*T,d[7]=0,d[8]=o*s*y-e*T,d[9]=o*e*y+s*T,d[10]=o*o*y+m,d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,l},w.lookAt=function(r,s,e,o,l,d,h,m,T,y){y=y||new w;var v=y.m,_=new E(r,s,e),C=new E(o,l,d),z=new E(h,m,T),F=_.subtract(C).unit(),X=z.cross(F).unit(),W=F.cross(X).unit();return v[0]=X.x,v[1]=X.y,v[2]=X.z,v[3]=-X.dot(_),v[4]=W.x,v[5]=W.y,v[6]=W.z,v[7]=-W.dot(_),v[8]=F.x,v[9]=F.y,v[10]=F.z,v[11]=-F.dot(_),v[12]=0,v[13]=0,v[14]=0,v[15]=1,y};function O(){this.unique=[],this.indices=[],this.map={}}O.prototype={add:function(r){var s=JSON.stringify(r);return s in this.map||(this.map[s]=this.unique.length,this.unique.push(r)),this.map[s]}};function B(r,s){this.buffer=null,this.target=r,this.type=s,this.data=[]}B.prototype={compile:function(r){for(var s=[],e=0,o=1e4;e<this.data.length;e+=o)s=Array.prototype.concat.apply(s,this.data.slice(e,e+o));var l=this.data.length?s.length/this.data.length:0;if(l!=Math.round(l))throw new Error("buffer elements not of consistent size, average size is "+l);this.buffer=this.buffer||a.createBuffer(),this.buffer.length=s.length,this.buffer.spacing=l,a.bindBuffer(this.target,this.buffer),a.bufferData(this.target,new this.type(s),r||a.STATIC_DRAW)}};function g(r){r=r||{},this.vertexBuffers={},this.indexBuffers={},this.addVertexBuffer("vertices","gl_Vertex"),r.coords&&this.addVertexBuffer("coords","gl_TexCoord"),r.normals&&this.addVertexBuffer("normals","gl_Normal"),r.colors&&this.addVertexBuffer("colors","gl_Color"),(!("triangles"in r)||r.triangles)&&this.addIndexBuffer("triangles"),r.lines&&this.addIndexBuffer("lines")}g.prototype={addVertexBuffer:function(r,s){var e=this.vertexBuffers[s]=new B(a.ARRAY_BUFFER,Float32Array);e.name=r,this[r]=[]},addIndexBuffer:function(r){this.indexBuffers[r]=new B(a.ELEMENT_ARRAY_BUFFER,Uint16Array),this[r]=[]},compile:function(){for(var r in this.vertexBuffers){var s=this.vertexBuffers[r];s.data=this[s.name],s.compile()}for(var e in this.indexBuffers){var s=this.indexBuffers[e];s.data=this[e],s.compile()}},transform:function(r){if(this.vertices=this.vertices.map(function(e){return r.transformPoint(E.fromArray(e)).toArray()}),this.normals){var s=r.inverse().transpose();this.normals=this.normals.map(function(e){return s.transformVector(E.fromArray(e)).unit().toArray()})}return this.compile(),this},computeNormals:function(){this.normals||this.addVertexBuffer("normals","gl_Normal");for(var r=0;r<this.vertices.length;r++)this.normals[r]=new E;for(var r=0;r<this.triangles.length;r++){var s=this.triangles[r],e=E.fromArray(this.vertices[s[0]]),o=E.fromArray(this.vertices[s[1]]),l=E.fromArray(this.vertices[s[2]]),d=o.subtract(e).cross(l.subtract(e)).unit();this.normals[s[0]]=this.normals[s[0]].add(d),this.normals[s[1]]=this.normals[s[1]].add(d),this.normals[s[2]]=this.normals[s[2]].add(d)}for(var r=0;r<this.vertices.length;r++)this.normals[r]=this.normals[r].unit().toArray();return this.compile(),this},computeWireframe:function(){for(var r=new O,s=0;s<this.triangles.length;s++)for(var e=this.triangles[s],o=0;o<e.length;o++){var l=e[o],d=e[(o+1)%e.length];r.add([Math.min(l,d),Math.max(l,d)])}return this.lines||this.addIndexBuffer("lines"),this.lines=r.unique,this.compile(),this},getAABB:function(){var r={min:new E(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)};r.max=r.min.negative();for(var s=0;s<this.vertices.length;s++){var e=E.fromArray(this.vertices[s]);r.min=E.min(r.min,e),r.max=E.max(r.max,e)}return r},getBoundingSphere:function(){for(var r=this.getAABB(),s={center:r.min.add(r.max).divide(2),radius:0},e=0;e<this.vertices.length;e++)s.radius=Math.max(s.radius,E.fromArray(this.vertices[e]).subtract(s.center).length());return s}},g.plane=function(r){r=r||{};for(var s=new g(r),e=r.detailX||r.detail||1,o=r.detailY||r.detail||1,l=r.width||2,d=r.height||2,h=0;h<=o;h++)for(var m=h/o,T=0;T<=e;T++){var y=T/e;if(s.vertices.push([(y-.5)*l,(m-.5)*d,0]),s.coords&&s.coords.push([y,m]),s.normals&&s.normals.push([0,0,1]),T<e&&h<o){var v=T+h*(e+1);s.triangles.push([v,v+1,v+e+1]),s.triangles.push([v+e+1,v+1,v+e+2])}}return s.compile(),s};var R=[[0,4,2,6,-1,0,0],[1,3,5,7,1,0,0],[0,1,4,5,0,-1,0],[2,6,3,7,0,1,0],[0,2,1,3,0,0,-1],[4,5,6,7,0,0,1]];function A(r){return new E((r&1)*2-1,(r&2)-1,(r&4)/2-1)}g.cube=function(r){for(var s=new g(r),e=r&&r.width||2,o=r&&r.height||2,l=r&&r.depth||2,d=0;d<R.length;d++){for(var h=R[d],m=d*4,T=0;T<4;T++){var y=h[T];const v=A(y).toArray();v[0]*=e/2,v[1]*=o/2,v[2]*=l/2,s.vertices.push(v),s.coords&&s.coords.push([T&1,(T&2)/2]),s.normals&&s.normals.push(h.slice(4,7))}s.triangles.push([m,m+1,m+2]),s.triangles.push([m+2,m+1,m+3])}return s.compile(),s},g.sphere=function(r){function s(W,J,oe){return T?[W,oe,J]:[W,J,oe]}function e(W){return W+(W-W*W)/2}r=r||{};for(var o=new g(r),l=new O,d=r.detail||6,h=0;h<8;h++)for(var m=A(h),T=m.x*m.y*m.z>0,y=[],v=0;v<=d;v++){for(var _=0;v+_<=d;_++){var C=v/d,z=_/d,F=(d-v-_)/d,X={vertex:new E(e(C),e(z),e(F)).unit().multiply(m).toArray()};o.coords&&(X.coord=m.y>0?[1-C,F]:[F,1-C]),y.push(l.add(X))}if(v>0)for(var _=0;v+_<=d;_++){var C=(v-1)*(d+1)+(v-1-(v-1)*(v-1))/2+_,z=v*(d+1)+(v-v*v)/2+_;o.triangles.push(s(y[C],y[C+1],y[z])),v+_<d&&o.triangles.push(s(y[z],y[C+1],y[z+1]))}}return o.vertices=l.unique.map(function(W){return W.vertex}),o.coords&&(o.coords=l.unique.map(function(W){return W.coord})),o.normals&&(o.normals=o.vertices),o.compile(),o},g.load=function(r,s){s=s||{},"coords"in s||(s.coords=!!r.coords),"normals"in s||(s.normals=!!r.normals),"colors"in s||(s.colors=!!r.colors),"triangles"in s||(s.triangles=!!r.triangles),"lines"in s||(s.lines=!!r.lines);var e=new g(s);return e.vertices=r.vertices,e.coords&&(e.coords=r.coords),e.normals&&(e.normals=r.normals),e.colors&&(e.colors=r.colors),e.triangles&&(e.triangles=r.triangles),e.lines&&(e.lines=r.lines),e.compile(),e};function N(r,s,e){this.t=arguments.length?r:Number.MAX_VALUE,this.hit=s,this.normal=e}N.prototype={mergeWith:function(r){r.t>0&&r.t<this.t&&(this.t=r.t,this.hit=r.hit,this.normal=r.normal)}};function G(){var r=a.getParameter(a.VIEWPORT),s=a.modelviewMatrix.m,e=new E(s[0],s[4],s[8]),o=new E(s[1],s[5],s[9]),l=new E(s[2],s[6],s[10]),d=new E(s[3],s[7],s[11]);this.eye=new E(-d.dot(e),-d.dot(o),-d.dot(l));var h=r[0],m=h+r[2],T=r[1],y=T+r[3];this.ray00=a.unProject(h,T,1).subtract(this.eye),this.ray10=a.unProject(m,T,1).subtract(this.eye),this.ray01=a.unProject(h,y,1).subtract(this.eye),this.ray11=a.unProject(m,y,1).subtract(this.eye),this.viewport=r}G.prototype={getRayForPixel:function(r,s){r=(r-this.viewport[0])/this.viewport[2],s=1-(s-this.viewport[1])/this.viewport[3];var e=E.lerp(this.ray00,this.ray10,r),o=E.lerp(this.ray01,this.ray11,r);return E.lerp(e,o,s).unit()}},G.hitTestBox=function(r,s,e,o){var l=e.subtract(r).divide(s),d=o.subtract(r).divide(s),h=E.min(l,d),m=E.max(l,d),T=h.max(),y=m.min();if(T>0&&T<y){var v=1e-6,_=r.add(s.multiply(T));return e=e.add(v),o=o.subtract(v),new N(T,_,new E((_.x>o.x)-(_.x<e.x),(_.y>o.y)-(_.y<e.y),(_.z>o.z)-(_.z<e.z)))}return null},G.hitTestSphere=function(r,s,e,o){var l=r.subtract(e),d=s.dot(s),h=2*s.dot(l),m=l.dot(l)-o*o,T=h*h-4*d*m;if(T>0){var y=(-h-Math.sqrt(T))/(2*d),v=r.add(s.multiply(y));return new N(y,v,v.subtract(e).divide(o))}return null},G.hitTestTriangle=function(r,s,e,o,l){var d=o.subtract(e),h=l.subtract(e),m=d.cross(h).unit(),T=m.dot(e.subtract(r))/m.dot(s);if(T>0){var y=r.add(s.multiply(T)),v=y.subtract(e),_=h.dot(h),C=h.dot(d),z=h.dot(v),F=d.dot(d),X=d.dot(v),W=_*F-C*C,J=(F*z-C*X)/W,oe=(_*X-C*z)/W;if(J>=0&&oe>=0&&J+oe<=1)return new N(T,y,m)}return null};function U(r,s,e){let o;for(;(o=r.exec(s))!=null;)e(o)}var M="LIGHTGL";function D(r,s){function e(_){var C=document.getElementById(_);return C?C.text:_}r=e(r),s=e(s);var o="    uniform mat3 gl_NormalMatrix;    uniform mat4 gl_ModelViewMatrix;    uniform mat4 gl_ProjectionMatrix;    uniform mat4 gl_ModelViewProjectionMatrix;    uniform mat4 gl_ModelViewMatrixInverse;    uniform mat4 gl_ProjectionMatrixInverse;    uniform mat4 gl_ModelViewProjectionMatrixInverse;  ",l=`#version 300 es
    `+o+"    in vec4 gl_Vertex;    in vec4 gl_TexCoord;    in vec3 gl_Normal;    in vec4 gl_Color;    vec4 ftransform() {      return gl_ModelViewProjectionMatrix * gl_Vertex;    }  ",d=`#version 300 es
    precision highp float;
  `+o,h=r+s,m={};U(/\b(gl_[^;]*)\b;/g,o,function(_){var C=_[1];if(h.indexOf(C)!=-1){var z=C.replace(/[a-z_]/g,"");m[z]=M+C}}),h.indexOf("ftransform")!=-1&&(m.MVPM=M+"gl_ModelViewProjectionMatrix"),this.usedMatrices=m;function T(_,C){var z={},F=/^((\s*\/\/.*\n|\s*#extension.*\n)+)[^]*$/.exec(C);return C=F?F[1]+_+C.substr(F[1].length):_+C,U(/\bgl_\w+\b/g,_,function(X){X in z||(C=C.replace(new RegExp("\\b"+X+"\\b","g"),M+X),z[X]=!0)}),C}r=T(l,r),s=T(d,s);function y(_,C){var z=a.createShader(_);if(a.shaderSource(z,C),a.compileShader(z),!a.getShaderParameter(z,a.COMPILE_STATUS))throw new Error("compile error: "+a.getShaderInfoLog(z));return z}if(this.program=a.createProgram(),a.attachShader(this.program,y(a.VERTEX_SHADER,r)),a.attachShader(this.program,y(a.FRAGMENT_SHADER,s)),a.linkProgram(this.program),!a.getProgramParameter(this.program,a.LINK_STATUS))throw new Error("link error: "+a.getProgramInfoLog(this.program));this.attributes={},this.uniformLocations={};var v={};U(/uniform\s+sampler(1D|2D|3D|Cube)\s+(\w+)\s*;/g,r+s,function(_){v[_[2]]=1}),this.isSampler=v}function j(r){var s=Object.prototype.toString.call(r);return s=="[object Array]"||s=="[object Float32Array]"}function te(r){var s=Object.prototype.toString.call(r);return s=="[object Number]"||s=="[object Boolean]"}new w,new w,D.prototype={uniforms:function(r){a.useProgram(this.program);for(var s in r){var e=this.uniformLocations[s]||a.getUniformLocation(this.program,s);if(e){this.uniformLocations[s]=e;var o=r[s];if(o instanceof E?o=[o.x,o.y,o.z]:o instanceof w&&(o=o.m),j(o))switch(o.length){case 1:a.uniform1fv(e,new Float32Array(o));break;case 2:a.uniform2fv(e,new Float32Array(o));break;case 3:a.uniform3fv(e,new Float32Array(o));break;case 4:a.uniform4fv(e,new Float32Array(o));break;case 9:a.uniformMatrix3fv(e,!1,new Float32Array([o[0],o[3],o[6],o[1],o[4],o[7],o[2],o[5],o[8]]));break;case 16:a.uniformMatrix4fv(e,!1,new Float32Array([o[0],o[4],o[8],o[12],o[1],o[5],o[9],o[13],o[2],o[6],o[10],o[14],o[3],o[7],o[11],o[15]]));break;default:throw new Error(`don't know how to load uniform "`+s+'" of length '+o.length)}else if(te(o))(this.isSampler[s]?a.uniform1i:a.uniform1f).call(a,e,o);else throw new Error('attempted to set uniform "'+s+'" to invalid value '+o)}}return this},draw:function(r,s){this.drawBuffers(r.vertexBuffers,r.indexBuffers[s==a.LINES?"lines":"triangles"],arguments.length<2?a.TRIANGLES:s)},drawBuffers:function(r,s,e){var o=this.usedMatrices,l=a.modelviewMatrix,d=a.projectionMatrix,h=o.MVMI||o.NM?l.inverse():null,m=o.PMI?d.inverse():null,T=o.MVPM||o.MVPMI?d.multiply(l):null,y={};if(o.MVM&&(y[o.MVM]=l),o.MVMI&&(y[o.MVMI]=h),o.PM&&(y[o.PM]=d),o.PMI&&(y[o.PMI]=m),o.MVPM&&(y[o.MVPM]=T),o.MVPMI&&(y[o.MVPMI]=T.inverse()),o.NM){var v=h.m;y[o.NM]=[v[0],v[4],v[8],v[1],v[5],v[9],v[2],v[6],v[10]]}this.uniforms(y);var _=0;for(var C in r){var z=r[C],F=this.attributes[C]||a.getAttribLocation(this.program,C.replace(/^(gl_.*)$/,M+"$1"));F==-1||!z.buffer||(this.attributes[C]=F,a.bindBuffer(a.ARRAY_BUFFER,z.buffer),a.enableVertexAttribArray(F),a.vertexAttribPointer(F,z.buffer.spacing,a.FLOAT,!1,0,0),_=z.buffer.length/z.buffer.spacing)}for(var C in this.attributes)C in r||a.disableVertexAttribArray(this.attributes[C]);return _&&(!s||s.buffer)&&(s?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,s.buffer),a.drawElements(e,s.buffer.length,a.UNSIGNED_SHORT,0)):a.drawArrays(e,0,_)),this}};function I(r,s,e){e=e||{},this.width=r,this.height=s,this.id=a.createTexture();let o=e.type||a.UNSIGNED_BYTE,l=e.format||a.RGBA,d=a.RGBA;const h=a.getExtension("EXT_color_buffer_float"),m=a.getExtension("EXT_color_buffer_half_float");o===a.FLOAT?(h?a instanceof WebGL2RenderingContext&&(l=a.RGBA32F):(console.warn("FLOAT textures not renderable, falling back to UNSIGNED_BYTE"),o=a.UNSIGNED_BYTE,l=a.RGBA8),d=a.RGBA):o===a.HALF_FLOAT_OES?(m?a instanceof WebGL2RenderingContext&&(l=a.RGBA16F):(console.warn("HALF_FLOAT textures not renderable, falling back to UNSIGNED_BYTE"),o=a.UNSIGNED_BYTE,l=a.RGBA8),d=a.RGBA):(o=a.UNSIGNED_BYTE,l=a.RGBA8,d=a.RGBA);const T=e.filter||e.magFilter||a.LINEAR,y=e.filter||e.minFilter||a.LINEAR;a.bindTexture(a.TEXTURE_2D,this.id),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,1),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER,T),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,y),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,e.wrap||e.wrapS||a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,e.wrap||e.wrapT||a.CLAMP_TO_EDGE),a instanceof WebGL2RenderingContext?a.texImage2D(a.TEXTURE_2D,0,l,r,s,0,d,o,null):a.texImage2D(a.TEXTURE_2D,0,d,r,s,0,d,o,null),a.bindTexture(a.TEXTURE_2D,null),this.format=d,this.type=o,this.internalFormat=l}var H,Y,K;I.prototype={bind:function(r){a.activeTexture(a.TEXTURE0+(r||0)),a.bindTexture(a.TEXTURE_2D,this.id)},unbind:function(r){a.activeTexture(a.TEXTURE0+(r||0)),a.bindTexture(a.TEXTURE_2D,null)},canDrawTo:function(){H=H||a.createFramebuffer(),a.bindFramebuffer(a.FRAMEBUFFER,H),a.framebufferTexture2D(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,this.id,0);var r=a.checkFramebufferStatus(a.FRAMEBUFFER)==a.FRAMEBUFFER_COMPLETE;return a.bindFramebuffer(a.FRAMEBUFFER,null),r},drawTo:function(r){a.getExtension("EXT_color_buffer_float")||console.warn("EXT_color_buffer_float not available!");var e=a.getParameter(a.VIEWPORT);if(H=H||a.createFramebuffer(),Y=Y||a.createRenderbuffer(),a.bindFramebuffer(a.FRAMEBUFFER,H),a.bindRenderbuffer(a.RENDERBUFFER,Y),(this.width!=Y.width||this.height!=Y.height)&&(Y.width=this.width,Y.height=this.height,a.renderbufferStorage(a.RENDERBUFFER,a.DEPTH_COMPONENT16,this.width,this.height)),a.framebufferTexture2D(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,this.id,0),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.RENDERBUFFER,Y),a.checkFramebufferStatus(a.FRAMEBUFFER)!=a.FRAMEBUFFER_COMPLETE)throw new Error("Rendering to this texture is not supported (incomplete framebuffer)");a.viewport(0,0,this.width,this.height),r(),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindRenderbuffer(a.RENDERBUFFER,null),a.viewport(e[0],e[1],e[2],e[3])},swapWith:function(r){var s;s=r.id,r.id=this.id,this.id=s,s=r.width,r.width=this.width,this.width=s,s=r.height,r.height=this.height,this.height=s}},I.fromImage=function(r,s){s=s||{};var e=new I(r.width,r.height,s);a.bindTexture(a.TEXTURE_2D,e.id);try{a.texImage2D(a.TEXTURE_2D,0,e.format,e.format,e.type,r)}catch{throw location.protocol=="file:"?new Error('image not loaded for security reasons (serve this page over "http://" instead)'):new Error("image not loaded for security reasons (image must originate from the same domain as this page or use Cross-Origin Resource Sharing)")}return s.minFilter&&s.minFilter!=a.NEAREST&&s.minFilter!=a.LINEAR&&a.generateMipmap(a.TEXTURE_2D),a.bindTexture(a.TEXTURE_2D,null),e},I.fromURL=function(r,s){K=K||function(){var d=document.createElement("canvas").getContext("2d");d.canvas.width=d.canvas.height=128;for(var h=0;h<d.canvas.height;h+=16)for(var m=0;m<d.canvas.width;m+=16)d.fillStyle=(m^h)&16?"#FFF":"#DDD",d.fillRect(m,h,16,16);return d.canvas}();var e=I.fromImage(K,s),o=new Image,l=a;return o.onload=function(){l.makeCurrent(),I.fromImage(o,s).swapWith(e)},o.src=r,e},I.canUseFloatingPointTextures=function(){return!!a.getExtension("OES_texture_float")},I.canUseFloatingPointLinearFiltering=function(){return!!a.getExtension("OES_texture_float_linear")},I.canUseHalfFloatingPointTextures=function(){return!!a.getExtension("OES_texture_half_float")},I.canUseHalfFloatingPointLinearFiltering=function(){return!!a.getExtension("OES_texture_half_float_linear")};function E(r,s,e){this.x=r||0,this.y=s||0,this.z=e||0}return E.prototype={negative:function(){return new E(-this.x,-this.y,-this.z)},add:function(r){return r instanceof E?new E(this.x+r.x,this.y+r.y,this.z+r.z):new E(this.x+r,this.y+r,this.z+r)},subtract:function(r){return r instanceof E?new E(this.x-r.x,this.y-r.y,this.z-r.z):new E(this.x-r,this.y-r,this.z-r)},multiply:function(r){return r instanceof E?new E(this.x*r.x,this.y*r.y,this.z*r.z):new E(this.x*r,this.y*r,this.z*r)},divide:function(r){return r instanceof E?new E(this.x/r.x,this.y/r.y,this.z/r.z):new E(this.x/r,this.y/r,this.z/r)},equals:function(r){return this.x==r.x&&this.y==r.y&&this.z==r.z},dot:function(r){return this.x*r.x+this.y*r.y+this.z*r.z},cross:function(r){return new E(this.y*r.z-this.z*r.y,this.z*r.x-this.x*r.z,this.x*r.y-this.y*r.x)},length:function(){return Math.sqrt(this.dot(this))},unit:function(){return this.divide(this.length())},min:function(){return Math.min(Math.min(this.x,this.y),this.z)},max:function(){return Math.max(Math.max(this.x,this.y),this.z)},toAngles:function(){return{theta:Math.atan2(this.z,this.x),phi:Math.asin(this.y/this.length())}},angleTo:function(r){return Math.acos(this.dot(r)/(this.length()*r.length()))},toArray:function(r){return[this.x,this.y,this.z].slice(0,r||3)},clone:function(){return new E(this.x,this.y,this.z)},init:function(r,s,e){return this.x=r,this.y=s,this.z=e,this}},E.negative=function(r,s){return s.x=-r.x,s.y=-r.y,s.z=-r.z,s},E.add=function(r,s,e){return s instanceof E?(e.x=r.x+s.x,e.y=r.y+s.y,e.z=r.z+s.z):(e.x=r.x+s,e.y=r.y+s,e.z=r.z+s),e},E.subtract=function(r,s,e){return s instanceof E?(e.x=r.x-s.x,e.y=r.y-s.y,e.z=r.z-s.z):(e.x=r.x-s,e.y=r.y-s,e.z=r.z-s),e},E.multiply=function(r,s,e){return s instanceof E?(e.x=r.x*s.x,e.y=r.y*s.y,e.z=r.z*s.z):(e.x=r.x*s,e.y=r.y*s,e.z=r.z*s),e},E.divide=function(r,s,e){return s instanceof E?(e.x=r.x/s.x,e.y=r.y/s.y,e.z=r.z/s.z):(e.x=r.x/s,e.y=r.y/s,e.z=r.z/s),e},E.cross=function(r,s,e){return e.x=r.y*s.z-r.z*s.y,e.y=r.z*s.x-r.x*s.z,e.z=r.x*s.y-r.y*s.x,e},E.unit=function(r,s){var e=r.length();return s.x=r.x/e,s.y=r.y/e,s.z=r.z/e,s},E.fromAngles=function(r,s){return new E(Math.cos(r)*Math.cos(s),Math.sin(s),Math.sin(r)*Math.cos(s))},E.randomDirection=function(){return E.fromAngles(Math.random()*Math.PI*2,Math.asin(Math.random()*2-1))},E.min=function(r,s){return new E(Math.min(r.x,s.x),Math.min(r.y,s.y),Math.min(r.z,s.z))},E.max=function(r,s){return new E(Math.max(r.x,s.x),Math.max(r.y,s.y),Math.max(r.z,s.z))},E.lerp=function(r,s,e){return s.subtract(r).multiply(e).add(r)},E.fromArray=function(r){return new E(r[0],r[1],r[2])},E.angleBetween=function(r,s){return r.angleTo(s)},i}();class Se{constructor({tx:i=0,ty:n=0,zoom:c=4,ax:u=-25,ay:f=-200,az:x=0,fov:b=45}){this.tx=i,this.ty=n,this.zoom=c,this.ax=u,this.ay=f,this.az=x,this.fov=b}}const De=.3,Ie=.15,Le=1,pt=10,je=Math.ceil(pt/4),Ke=10,Te=`
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
        duration = 5.;
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
`,Ze=200,vt=`
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

`;var _e,$e;class Re{constructor(i,n,c,u){ve(this,_e);if(this.gl=i,this.calibration=c,this.copyVideo=!1,this.show=!1,this.videoStartTime=u,i===null){alert("Unable to initialize WebGL. Your browser or machine may not support it.");return}i.clearColor(0,0,0,1),i.clear(i.COLOR_BUFFER_BIT),this.shader=new p.Shader(`
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
    uniform bool sparksEnabled;
    uniform vec3 poolSize;
    uniform bool thresholdBlending;
    uniform float blendingThreshold;
    uniform float opacity;
    uniform float distanceFixed;
    uniform bool hideObstructions;
    uniform float hideObstructionThreshold;

    `+vt+Te+`

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
`),this.mesh=p.Mesh.plane({width:2,height:2,coords:!0,normals:!0}),this.mesh.transform(p.Matrix.rotate(90,1,0,0)),this.mesh.transform(p.Matrix.translate(0,.1,0)),this.programInfo=null,this.texture=this.initTexture(),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!0),n!=""&&(this.video=this.setupVideo(n))}render(){const i=t.params.visualizations.sparks,n=t.params.simulation.poolSize;if(!t.params.video.show)return;this.copyVideo&&this.updateTexture(),(!this.mesh.vertexBuffers||!this.mesh.vertexBuffers.vertex)&&this.mesh.compile(),this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture);const u=16*this.gl.canvas.height/9,f=(this.gl.canvas.width-u)/2,x=this.gl.modelviewMatrix;this.gl.projectionMatrix.multiply(x).inverse(),V.swimmersAttributesTexture&&V.swimmersAttributesTexture.bind(1),this.shader.uniforms({ratio_screen:u/this.gl.canvas.width,dx_screen:f/this.gl.canvas.width,calib_MVPMI:t.MVPMI?t.MVPMI.m:new Float32Array(16),uSampler:0,swimmersHelperFunctions:1,screen:4,iTime:t.getRaceTime(),poolSize:[n.x,n.y,n.z],iResolution:[this.gl.canvas.width,this.gl.canvas.height],sparksEnabled:i.enabled,sparksGlow:i.glow,sparksGlowOffset:i.glowOffset,sparksStroke:i.stroke,sparksNumber:i.num,sparksLengthFactor:i.lengthFactor,sparksSizeFactor:i.sizeFactor,fov:i.fov,thresholdBlending:t.params.video.thresholdBlending,blendingThreshold:t.params.video.blendingThreshold,opacity:t.params.video.opacity,distanceFixed:t.distanceFixed,hideObstructions:t.params.video.hideObstructions,hideObstructionThreshold:t.params.video.hideObstructionThreshold}).draw(this.mesh),this.gl.disable(this.gl.BLEND),this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height)}setTime(i){this.copyVideo&&(this.video.currentTime=i)}initTexture(){const i=this.gl.createTexture();this.gl.bindTexture(this.gl.TEXTURE_2D,i);const n=0,c=this.gl.RGBA,u=1,f=1,x=0,b=this.gl.RGBA,P=this.gl.UNSIGNED_BYTE,L=new Uint8Array([0,0,255,255]);return this.gl.texImage2D(this.gl.TEXTURE_2D,n,c,u,f,x,b,P,L),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),i}updateTexture(){const n=this.gl.RGBA,c=this.gl.RGBA,u=this.gl.UNSIGNED_BYTE;this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture),this.gl.texImage2D(this.gl.TEXTURE_2D,0,n,c,u,this.video)}setupVideo(i){const n=document.createElement("video");let c=!1,u=!1;n.playsInline=!0,n.muted=!0,n.loop=!1,n.addEventListener("playing",()=>{c=!0,x()},!0),n.addEventListener("timeupdate",()=>{u=!0,x()},!0),n.src=i,n.play();const f=this,x=()=>{c&&u&&(f.copyVideo=!0,n.paused||Z(this,_e,$e).call(this))};return n}}_e=new WeakSet,$e=function(){this.hasPausedFirstTime||(this.hasPausedFirstTime=!0,this.video.pause())};class ze{constructor(i,{poolSize:n=new GL.Vector(2,2),waterResolution:c=new GL.Vector(256,256),thresholdBlending:u=!1,numSwimmers:f=1,dataFolder:x=null}){this.title=i,this.videos=[],this.poolSize=n,this.waterResolution=c,this.numSwimmers=f,this.thresholdBlending=u,this.dataFolder=x}addVideo(i){this.videos.push(i)}async parseData(i){for(let n=0;n<i.length;n++)await i[n].parseData(this.dataFolder+n+".csv")}}const Ue=new p.Vector(0,-4,0);class fe{constructor(i,n,c=new p.Vector(1,1,1),u=null){this.initCenter=new p.Vector(i.x,i.y,i.z),this.center=new p.Vector(i.x,i.y,i.z),this.oldCenter=new p.Vector(i.x,i.y,i.z),this.radius=n,this.cinematic=!1,this.velocity=new p.Vector(0,0,0),this.acceleration=new p.Vector(0,0,0),this.mass=4/3*Math.PI*Math.pow(n,3)*1e3,this.invMass=1/this.mass,this.radiusSquared=n*n,this.mesh=p.Mesh.sphere({detail:10}),this.followTarget=!1,this.showStreak=!1,this.buoyancyFactor=u,this.color=c}spawnSplashes(i){if(!t.params.simulation.splashes.enabled&&!t.params.visualizations.showStreaks)return;const n=this.center.subtract(this.oldCenter).multiply(1/i),c=n.z>0?-Math.PI/2:Math.PI/2,u=n.dot(n);let f=this.center.subtract(this.velocity.unit());t.isSceneSynchronizedSwimming()&&(f=this.center.clone()),f.y=.15,!t.isSceneSynchronizedSwimming()&&t.params.simulation.splashes.enabled&&this.center.x<100&&Math.abs(this.center.y)<=this.radius&&t.splashParticles.spawnSplash(f,c,Math.sqrt(u),t.params.simulation.splashes.strengthThreshold,{});let x=(this.velocity.length()-1.6)/.9;const b={fixed:!0};if(t.isSceneSynchronizedSwimming())b.shrinking=.02;else{const P=new p.Vector(x,0,1-x);P.multiply(1/P.max()),b.color=P}b.shrinking=.2,t.params.visualizations.showStreaks&&this.showStreak&&this.velocity.length()>.01&&t.splashParticles.spawnSplash(this.center,0,x,0,b)}update(i){if(this.moved||(this.oldCenter=new p.Vector(this.center.x,this.center.y,this.center.z)),this.moved=!1,this.cinematic){if(this.followTarget||(this.velocity=new p.Vector(0,0,0)),!this.targetPos||!this.followTarget)return;let n=i/this.targetTime;n=Math.min(Math.max(n,0),1),this.center=this.center.multiply(1-n).add(this.targetPos.multiply(n)),this.velocity=this.center.subtract(this.oldCenter).multiply(1/i),this.targetTime-=i,this.targetTime<0&&(this.targetPos=null)}else{const n=Math.max(0,Math.min(1,(this.radius-this.center.y)/(2*this.radius))),c=this.buoyancyFactor?this.buoyancyFactor:t.params.simulation.buoyancyFactor,u=Ue.multiply(-c*this.mass*n),f=this.velocity.unit().multiply(-1e3*this.radiusSquared*n*this.velocity.dot(this.velocity));this.addForce(f),this.addForce(u),this.addForce(Ue.multiply(this.mass)),this.velocity=this.velocity.add(this.acceleration.multiply(i)),this.acceleration=new p.Vector(0,0,0),this.center=this.center.add(this.velocity.multiply(i)),this.center.y<this.radius-t.params.simulation.poolSize.y&&(this.center.y=this.radius-1,this.velocity.y=Math.abs(this.velocity.y)*.7)}}setTarget(i,n){this.targetPos=i,this.targetTime=n}addForce(i){this.cinematic?console.warn("Trying to add force to a cinematic sphere."):this.acceleration=this.acceleration.add(i.multiply(this.invMass))}move(i){this.moved=!0,this.oldCenter=new p.Vector(this.center.x,this.center.y,this.center.z),this.center=new p.Vector(i.x,i.y,i.z),this.cinematic||console.warn("Moving a non cinematic sphere.")}}class gt{constructor(){this.mesh=new p.Mesh.plane({width:2,height:2,coords:!0,normals:!0}),this.waterTexture=null,this.shader=new p.Shader(`
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
        `)}updateFoam(i){if(!this.waterTexture){console.log("NO WATER TO UPDATE FOAM");return}this.foamTexNext.swapWith(this.foamTexPrev),this.foamTexNext.drawTo(()=>{this.foamTexPrev.bind(0),t.water.textureA.bind(1),this.shader.uniforms({foamTexPrev:0,water:1,dt:i,seed:t.time,poolSize:[t.params.simulation.poolSize.x,t.params.simulation.poolSize.y,t.params.simulation.poolSize.z],timeVariation:t.params.simulation.foam.timeVariation,spaceVariation:t.params.simulation.foam.spaceVariation,velThreshold:t.params.simulation.foam.velThreshold,velMax:t.params.simulation.foam.velMax,dispersion:t.params.simulation.foam.dispersion,attenuation:t.params.simulation.foam.attenuation}).draw(this.mesh)})}resetTextures(i,n,c){this.foamTexPrev=new p.Texture(i,n,{type:t.gl.FLOAT,filter:t.gl.LINEAR}),this.foamTexNext=new p.Texture(i,n,{type:t.gl.FLOAT,filter:t.gl.LINEAR}),this.waterTexture=c}}function ae(a,i=null){this.gl=a,this.visualizationWavesEnabled=!0,this.sqrt_2_PI=Math.sqrt(2*Math.PI),this.foam=new gt;var n=`
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
    `+Te+`
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

    `+Te+`

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
    `)}ae.prototype.resetTextures=function(){const a=this.gl;this.textureA&&a.deleteTexture(this.textureA.id),this.textureB&&a.deleteTexture(this.textureB.id),this.textureA=new p.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:i}),this.textureB=new p.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:i}),this.foam.resetTextures(this.W,this.H,this.textureA),this.areaConservationTexture=new p.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:i}),this.showAreaConservedGrid=!1,this.showProjectionGrid=!1,this.invPoolSize=new p.Vector(1/t.params.simulation.poolSize.x,1/t.params.simulation.poolSize.y,1/t.params.simulation.poolSize.z);var i=p.Texture.canUseFloatingPointLinearFiltering()?this.gl.LINEAR:this.gl.NEAREST;(!this.textureA.canDrawTo()||!this.textureB.canDrawTo())&&p.Texture.canUseHalfFloatingPointTextures()&&(console.log("No draw"),i=p.Texture.canUseHalfFloatingPointLinearFiltering()?this.gl.LINEAR:this.gl.NEAREST,this.textureA=new p.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:i}),this.textureB=new p.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:i}))};ae.prototype.reset=function(a=null){this.WR_position=1e5,this.prev_WR_position=0,a!==null?(console.log("resolution.y : "+a.y),this.W=Math.round(a.x),this.H=Math.round(a.y),console.log("Using custom resolution:",this.W,this.H)):(this.W=256,this.H=256),V.reset(new p.Vector(this.W,this.H)),this.plane=p.Mesh.plane({detail:255,width:t.params.simulation.poolSize.x,height:t.params.simulation.poolSize.z}),this.delta=new p.Vector(1/this.W,1/this.H),this.resetTextures()};ae.prototype.addDrop=function(a,i,n,c){var u=this;this.textureB.drawTo(function(){u.textureA.bind(),u.dropShader.uniforms({invPoolSizeVertex:[u.invPoolSize.x,u.invPoolSize.z],center:[a,i],radius:n,strength:c,poolSize:[t.params.simulation.poolSize.x,t.params.simulation.poolSize.y,t.params.simulation.poolSize.z]}).draw(u.plane)}),this.textureB.swapWith(this.textureA)};ae.prototype.addOrRemoveVisualizationWaves=function(a){if(this.prev_WR_position=this.WR_position,this.WR_position=t.getRaceTime()*2.155,this.WR_position>t.params.simulation.poolSize.z&&(this.WR_position=2*t.params.simulation.poolSize.z-this.WR_position),!(!this.visualizationWavesEnabled||!V.raceHasStarted)){var n=this;this.textureB.drawTo(function(){n.textureA.bind();const c=V.getAttributesTexture();c&&c.bind(1),n.visualizationWavesShader.uniforms({swimmersAttributesTexture:1,showDivingDistance:t.params.visualizations.showDivingDistance,showWR:t.params.visualizations.showWR,invPoolSizeVertex:[n.invPoolSize.x,n.invPoolSize.z],poolSize:[t.params.simulation.poolSize.x,t.params.simulation.poolSize.y,t.params.simulation.poolSize.z],wr:n.WR_position,sqrt_2_PI:n.sqrt_2_PI,add:a,swimmersNumber:t.swimmers.length,time:t.getRaceTime(),t:t.time,amplitudeFactor:t.params.quiver.amplitudeFactor,frequencyFactor:t.params.quiver.frequencyFactor,amplitude:t.params.quiver.amplitude,omega0:t.params.quiver.omega,waveLength0:t.params.quiver.waveLength}).draw(n.plane)}),this.textureB.swapWith(this.textureA)}};ae.prototype.updateSpheres=function(a){if(t.params.simulation.optimized)V.attributes.draw(),this.textureB.drawTo(()=>{this.textureA.bind(),V.bindDisplacementTexture(1),V.bindOldDisplacementTexture(2),this.sphereShader.uniforms({oldDisplacementTexture:2,displacementTexture:1,invPoolSizeVertex:[this.invPoolSize.x,this.invPoolSize.z],poolSize:[t.params.simulation.poolSize.x,t.params.simulation.poolSize.y,t.params.simulation.poolSize.z],optimized:!0}).draw(this.plane),this.textureB.swapWith(this.textureA),V.attributes.draw()});else{const i=[];t.swimmers.forEach(n=>n.spheres.forEach(c=>i.push(c)));for(let n=0;n<i.length;n++){const c=i[n];this.moveSphere(c.oldCenter,c.center,c.radius)}}};ae.prototype.moveSphere=function(a,i,n){var c=this;this.textureB.drawTo(function(){c.textureA.bind(),c.sphereShader.uniforms({invPoolSizeVertex:[c.invPoolSize.x,c.invPoolSize.z],oldCenter:a,newCenter:i,radius:n,poolSize:[t.params.simulation.poolSize.x,t.params.simulation.poolSize.y,t.params.simulation.poolSize.z],optimized:!1}).draw(c.plane)}),this.textureB.swapWith(this.textureA)};ae.prototype.stepSimulation=function(a){var i=this;this.textureB.drawTo(function(){i.textureA.bind();const n=V.getAttributesTexture();n&&n.bind(2),i.updateShader.uniforms({swimmersAttributesTexture:2,swimmersNumber:t.swimmers.length,invPoolSizeVertex:[i.invPoolSize.x,i.invPoolSize.z],delta:[i.delta.x,i.delta.y],time:t.time,wr:i.WR_position,prev_wr:i.prev_WR_position,poolSize:[t.params.simulation.poolSize.x,t.params.simulation.poolSize.y,t.params.simulation.poolSize.z],sqrt_2_PI:i.sqrt_2_PI,damping:t.params.simulation.waterDamping}).draw(i.plane)}),this.textureB.swapWith(this.textureA),t.params.simulation.foam.enabled&&this.foam.updateFoam(a),this.updateAreaConservation()};ae.prototype.updateNormals=function(){var a=this;this.textureB.drawTo(function(){a.textureA.bind(),a.normalShader.uniforms({invPoolSizeVertex:[a.invPoolSize.x,a.invPoolSize.z],delta:[a.delta.x,a.delta.y]}).draw(a.plane)}),this.textureB.swapWith(this.textureA)};ae.prototype.updateAreaConservation=function(){if(!t.params.visualizations.areaConservationEnabled)return;var a,i,n;if(this.textureA.type===this.gl.FLOAT)a=this.gl.FLOAT,i=Float32Array,n="EXT_color_buffer_float";else if(this.textureA.type===this.gl.HALF_FLOAT_OES)a=this.gl.HALF_FLOAT_OES,i=Uint16Array,n="EXT_color_buffer_half_float";else{console.warn("Unsupported texture type for reading");return}if(!this.gl.getExtension(n)){console.warn(n+" not available; cannot read pixels");return}this.fb||(this.fb=this.gl.createFramebuffer()),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.fb),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,this.textureA.id,0);const c=this.gl.checkFramebufferStatus(this.gl.FRAMEBUFFER);if(c!==this.gl.FRAMEBUFFER_COMPLETE){console.error("Framebuffer incomplete: "+c+" for texture type "+this.textureA.type),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null);return}this.gl.pixelStorei(this.gl.PACK_ALIGNMENT,1);const u=new i(this.W*this.H*4),f=new Float32Array(this.W*this.H*4);this.gl.readPixels(0,0,this.W,this.H,this.gl.RGBA,a,u);for(let k=0;k<this.W;k++)f[k*4+1]=1;const x=t.params.simulation.poolSize.x/this.W,b=t.params.simulation.poolSize.z/this.H,P=x*x,L=b*b;if(this.textureA.type===this.gl.FLOAT){for(let k=0;k<this.H;k+=1)for(let w=0;w<this.W;w+=1){const O=(k*this.W+w)*4,B=((this.H-1-k)*this.W+w)*4,g=f[B],R=f[B+1];if(w+1<this.W){const A=u[O]-u[O+4],N=Math.sqrt(A*A+P);f[B+4]=g+N}if(k+1<this.H){const A=u[O]-u[O+this.W*4],N=Math.sqrt(A*A+L);f[B-4*this.W+1]=R+N}}this.gl.bindTexture(this.gl.TEXTURE_2D,this.areaConservationTexture.id),this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT,1),this.gl.texSubImage2D(this.gl.TEXTURE_2D,0,0,0,this.W,this.H,this.gl.RGBA,this.gl.FLOAT,f)}this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.bindTexture(this.gl.TEXTURE_2D,null)};const xt=`#version 300 es
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

`,wt=`#version 300 es
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

`,yt=-9.8,Ge=.01;class We{constructor(i,n,c,u,{shrinking:f=1,size:x=null}){this.pos=i,this.vel=n,this.fixed=c,this.color=u,this.life=1,this.size=x||Math.random()*.05+.02,this.shrinking=f}update(i){if(this.fixed){this.life-=i*.15*this.shrinking;return}this.life-=i*1.5*this.shrinking,this.vel.y+=yt*i,this.pos=this.pos.add(this.vel.multiply(i)),this.vel=this.vel.multiply(1-Ge),this.size*=1-Ge*this.shrinking}}class Tt{constructor(i){this.gl=i,this.particles=[],this.particleBuffer=this.gl.createBuffer(),this.initPrograms()}spawnSplash(i,n,c,u,{fixed:f=!1,color:x=new p.Vector(1,1,1),speed0:b=1,maxParticles:P=15,shrinking:L=null,size:k=null}){let w=L!==null?L:1;if(f){const B=new p.Vector(0,0,0),g=x||new p.Vector(c,0,1-c);x===null&&g.multiply(1/g.max());const R=k||.1,A=new We(i,B,f,g,{shrinking:w,size:R});A.life+=w*.1,this.particles.push(A);return}const O=Math.min(P,c*20);for(let B=0;B<O;B++){const g=(Math.random()-.5)*Math.PI,R=Math.random()*2*Math.PI,A=b*(.5+Math.random()),N=new p.Vector(Math.sin(g)*Math.cos(R)*A,Math.cos(g)*A,Math.sin(g)*Math.sin(R)*A);this.particles.push(new We(i,N,f,x,{shrinking:w}))}}update(i){this.particles.forEach((n,c)=>{n.update(i),n.life<=0&&this.particles.splice(c,1)})}buildShader(i,n){const c=this.gl.createShader(n);return this.gl.shaderSource(c,i),this.gl.compileShader(c),c}createProgram(i){const n=this.gl.createProgram();return i.forEach(c=>{this.gl.attachShader(n,c)}),this.gl.linkProgram(n),n}checkShaders(i,n,c){this.gl.getShaderParameter(i,this.gl.COMPILE_STATUS)||console.error(this.gl.getShaderInfoLog(i)),this.gl.getShaderParameter(n,this.gl.COMPILE_STATUS)||console.error(this.gl.getShaderInfoLog(n)),this.gl.getProgramParameter(c,this.gl.LINK_STATUS)||console.error(this.gl.getProgramInfoLog(c))}buildProgram(i,n){const c=this.buildShader(i,this.gl.VERTEX_SHADER),u=this.buildShader(n,this.gl.FRAGMENT_SHADER),f=this.createProgram([c,u]);return this.checkShaders(c,u,f),f}initPrograms(){this.program=this.buildProgram(xt,wt)}draw({showStreaks:i=!0,showSplashes:n=!0}){const c=this.gl;c.enable(c.BLEND),c.blendFunc(c.SRC_ALPHA,c.ONE_MINUS_SRC_ALPHA);const u=[];this.particles.forEach(D=>{const j=D.pos;u.push(j.x,j.y,j.z,D.life,D.size,D.color.x,D.color.y,D.color.z,D.fixed)}),c.bindBuffer(c.ARRAY_BUFFER,this.particleBuffer),c.bufferData(c.ARRAY_BUFFER,new Float32Array(u),c.DYNAMIC_DRAW),c.useProgram(this.program);const f=c.getUniformLocation(this.program,"MVM"),x=new Float32Array(c.modelviewMatrix.m);c.uniformMatrix4fv(f,!0,x);const b=c.getUniformLocation(this.program,"projection"),P=new Float32Array(c.projectionMatrix.m);c.uniformMatrix4fv(b,!0,P);const L=c.getUniformLocation(this.program,"showStreaks");c.uniform1i(L,i);const k=c.getUniformLocation(this.program,"showSplashes");c.uniform1i(k,n);const w=c.getAttribLocation(this.program,"pos"),O=c.getAttribLocation(this.program,"life"),B=c.getAttribLocation(this.program,"size"),g=c.getAttribLocation(this.program,"color"),R=c.getAttribLocation(this.program,"isFixed"),A=c.FLOAT,N=!1,G=4,U=9*G;let M=0;c.bindBuffer(c.ARRAY_BUFFER,this.particleBuffer),c.vertexAttribPointer(w,3,A,N,U,M),c.enableVertexAttribArray(w),M=3*G,c.vertexAttribPointer(O,1,A,N,U,M),c.enableVertexAttribArray(O),M=4*G,c.vertexAttribPointer(B,1,A,N,U,M),c.enableVertexAttribArray(B),M=5*G,c.vertexAttribPointer(g,3,A,N,U,M),c.enableVertexAttribArray(g),M=8*G,c.vertexAttribPointer(R,1,A,N,U,M),c.enableVertexAttribArray(R),c.drawArrays(c.POINTS,0,this.particles.length),c.disable(c.BLEND)}}function Xe(a){const i={};for(let n=0;n<a.length;n++)i[a[n]]=n;return i}const re=new p.Vector(1e3,0,-1e3),He=["none","only medals","all"],qe=["neighbours","per swimmer"],Et=["none","cycle frequency","speed","acceleration"],_t={none:{value:0,name:"PARAMETER_NONE"},"cycle frequency":{value:1,name:"PARAMETER_CYCLES"},speed:{value:2,name:"PARAMETER_SPEED"},acceleration:{value:3,name:"PARAMETER_ACCELERATION"}},bt=["realistic","height field","lambert","toon"],St={realistic:{value:0,name:"RENDERING_REALISTIC"},"height field":{value:1,name:"RENDERING_HEIGHT_FIELD"},lambert:{value:2,name:"RENDERING_LAMBERT"},toon:{value:3,name:"RENDERING_TOON"}};var Q,Je,Qe,et,ke,tt;class Rt{constructor(){ve(this,Q);this.params={numSteps:2,fov:45,visualizations:{enabled:!0,showFlags:!1,showWR:!1,showSpeed:!1,showDivingDistance:!0,showFinishTimes:!1,showStreaks:!1,customWaterPerturbation:"none",waterColorParameter:"none",customParametersList:Et,customParametersDict:_t,PARAMETER_NONE:"none",PARAMETER_CYCLES:"cycle frequency",PARAMETER_SPEED:"speed",PARAMETER_ACCELERATION:"acceleration",showSwimmersLines:"none",swimmersLinesList:He,showSwimmersLinesDict:Xe(He),swimmersLinesMode:"neighbours",swimmersLinesModeList:qe,swimmersLinesModeDict:Xe(qe),medalsModeBeforeFinish:"none",medalsModesDict:{none:0,stars:1,bright:2,lanes:3},medalsModeAfterFinish:"none",areaConservationEnabled:!0,rendering:"realistic",renderingList:bt,renderingDict:St,transitionBeginTime:null,shadow:{enabled:!0,shadowRadius:.5,shadowPower:.5,showCircle:!0,circleRadius:.6,circleStroke:.15},sparks:{enabled:!1,glow:5,glowOffset:.5,lengthFactor:1,stroke:.01,num:40,sizeFactor:50,fov:Math.PI/4}},swimmers:{showSpheres:!0,useTracking:!1},video:{thresholdBlending:!1,blendingThreshold:.41,show:!1,opacity:1,hideObstructions:!1,hideObstructionThreshold:.2},simulation:{heightLimit:.04,showFloaters:!1,optimized:!1,waterDamping:.02,poolSize:new p.Vector(4,1,4),buoyancyFactor:1.1,foam:{enabled:!0,velThreshold:.35,velMax:3.5,dispersion:.015,timeVariation:2.5,spaceVariation:25,attenuation:.015},splashes:{enabled:!0,strengthThreshold:2}},quiver:{amplitudeFactor:.78,frequencyFactor:1.2,amplitude:.1,omega:2,waveLength:1},cornerView:{show:!0},chronoPhotography:{available:!1}},this.resolution=new p.Vector(256,256),this.gl=p.create({preserveDrawingBuffer:!0}),this.gl.canvas.tabIndex=0,this.originalVisParams=JSON.parse(JSON.stringify(this.params.visualizations)),delete this.originalVisParams.shadow,delete this.originalVisParams.sparks,this.useConfigFile=!1,this.time=0,this.swimmers=[],this.translateX=0,this.translateY=0,this.zoomDistance=4,this.angleX=-25,this.angleY=-200.5,this.angleZ=0,this.water=null;const i=new ze("—",{poolSize:new p.Vector(2,1,2),waterResolution:new p.Vector(256,256),numSwimmers:1}),n=new Se({});i.addVideo(new Re(this.gl,"",n));const c=new ze("100m freestyle",{poolSize:new p.Vector(25,2,50),waterResolution:new p.Vector(1024,2048),numSwimmers:10,thresholdBlending:!0,dataFolder:"./assets/race-data/"}),u=new Se({tx:-.53,ty:1.25,zoom:47.86,ax:-29,ay:-260.5,az:-5,fov:39.98});c.addVideo(new Re(this.gl,"swimming-race.mp4",u,16.5)),this.currentVideo=c.videos[0];const f=new ze("synchronized swimming",{poolSize:new p.Vector(25,2,30),waterResolution:new p.Vector(1024,2048),numSwimmers:2,dataFolder:"./assets/synchronized-swimming-data/"}),x=new Se({tx:-1.32,ty:.4,zoom:32.41,ax:-18,ay:-291.5,az:1,fov:42.8});f.addVideo(new Re(this.gl,"synchronized-swimming.mp4",x,0)),this.scenesList=[i,c,f],this.scenes={},this.scenesList.forEach(b=>this.scenes[b.title]=b),this.currentScene=i,this.paused=!1,this.configPlayButton(),this.transitions={},this.playingDemo=!1,this.renderWater=!0,this.renderCube=!0,this.spheresRadiusCoeff=1,this.distanceFixed=0,this.chronoFrameBuffer=this.gl.createFramebuffer(),this.drawingFrameBuffer=null,this.drawingTexture=this.gl.createTexture(),this.resetDrawingTexture(),this.cornerView=!1,this.splashParticles=new Tt(this.gl),this.floaters=[],this.showTimeline=!0,this.MVPMI=null,this.bubbleSpheres=[]}hideEditorPanel(i){const n=document.getElementById("event-editor");n&&(n.style.display=i?"block":"none")}resetDrawingTexture(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.chronoFrameBuffer),this.gl.bindTexture(this.gl.TEXTURE_2D,this.drawingTexture);const i=this.gl.canvas.width,n=this.gl.canvas.height;this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,i,n,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,null),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,this.drawingTexture,0);const c=this.gl.createRenderbuffer();this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,c),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,this.gl.DEPTH_COMPONENT16,i,n),this.gl.framebufferRenderbuffer(this.gl.FRAMEBUFFER,this.gl.DEPTH_ATTACHMENT,this.gl.RENDERBUFFER,c),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null)}configStopButton(){this.stopButton=document.getElementById("stop-button"),this.stopButton.addEventListener("click",()=>{this.stopRace()})}configPlayButton(){this.configStopButton(),this.playButton=document.getElementById("play-button"),this.playButton.addEventListener("click",()=>{this.playButton.textContent=="pause"?this.pause():(V.raceHasStarted||this.startRace(),this.play())})}setCalibration(i){this.translateX=i.tx,this.translateY=i.ty,this.zoomDistance=i.zoom,this.angleX=i.ax,this.angleY=i.ay,this.angleZ=i.az,this.params.fov=i.fov,this.gl.matrixMode(this.gl.PROJECTION),this.gl.loadIdentity(),this.gl.perspective(this.params.fov,this.gl.canvas.width/this.gl.canvas.height,.01,100),this.gl.matrixMode(this.gl.MODELVIEW)}updateFloaters(i){}isSceneSynchronizedSwimming(){return this.currentScene.title=="synchronized swimming"}setMVPMI(){const i=this.gl.modelviewMatrix,c=this.gl.projectionMatrix.multiply(i);this.MVPMI=c.inverse(),console.log("MVPMI set")}async setScene(i){if(console.log("SET SCENE : "+i),this.currentScene=this.scenes[i],this.currentScene){Z(this,Q,Je).call(this,this.currentScene.poolSize),this.currentScene.title=="100m freestyle"?Z(this,Q,Qe).call(this):this.floaters=[];const n=document.getElementById("time-slider-container");this.currentVideo=this.currentScene.videos[0],this.params.video.show=!!this.currentVideo.video,this.params.swimmers.showSpheres=!this.currentVideo.video,n.hidden=!this.currentVideo.video,this.currentScene.title!="—"?this.params.simulation.waterDamping=.1:this.params.simulation.waterDamping=.02;const c=this.currentScene.numSwimmers;if(console.log("num swimmers : "+c),this.swimmers.length!=c){for(let u=this.swimmers.length;u<c;u++){const f=new V(new p.Vector(0,0,0));this.swimmers.push(f)}for(let u=this.swimmers.length;u>c;u--)this.swimmers=this.swimmers.slice(1);this.swimmers.forEach(u=>u.waterDamping=this.params.simulation.waterDamping)}this.params.swimmers.useTracking=!0,await this.currentScene.parseData(this.swimmers),this.swimmers.forEach(u=>u.update(0)),console.log("scene name : "+this.currentScene.title),this.setCalibration(this.currentVideo.calibration),this.resolution=this.currentScene.waterResolution,this.params.video.thresholdBlending=this.currentScene.thresholdBlending,this.currentScene.thresholdBlending?this.params.video.opacity=1:this.params.video.opacity=.5,this.params.visualizations.areaConservationEnabled=!1,this.stopRace(),this._reset(),this.params.simulation.optimized=!!this.currentVideo.video,this.useConfigFile=!this.isSceneSynchronizedSwimming(),this._setPannelMinimized(this.currentScene.title!="100m freestyle"),this.isSceneSynchronizedSwimming()&&(this.params.simulation.foam.velThreshold=0,this.params.simulation.foam.velMax=2.2,this.params.simulation.foam.dispersion=.0025,this.params.simulation.foam.timeVariation=2.5,this.params.simulation.foam.spaceVariation=10,this.params.simulation.foam.attenuation=2e-4)}}useGravity(i){V.useGravity=i;for(let n of t.swimmers)n.body.cinematic=!V.useGravity}isOneVisualizationEnabled(){return this.params.visualizations.showFlags||this.params.visualizations.medalsModeBeforeFinish!="none"||this.params.visualizations.medalsModeAfterFinish!="none"||this.params.visualizations.showWR||this.params.visualizations.showSpeed||this.params.visualizations.showDivingDistance}updateTime(i){this.time+=i,this._updateDistanceMarker&&this._updateDistanceMarker()}getRaceTime(){return V.raceHasStarted?this.time-this.currentVideo.videoStartTime:0}resetParams(){Object.entries(this.originalVisParams).forEach(i=>{const n=i[0],c=i[1];this.params.visualizations[n]=c}),this.params.visualizations.areaConservationEnabled=!1}updateEventIndex(){for(this.currentEventIndex=0;this.events[this.currentEventIndex]&&this.events[this.currentEventIndex].time<this.getRaceTime();)this.currentEventIndex++;this.currentEventIndex>0&&this.currentEventIndex--}setRaceTime(i){this.time=this.currentVideo.videoStartTime+i,this.currentVideo.video&&this.currentVideo.setTime(this.time),this.events&&(this.updateEventIndex(),this.resetParams())}showTexts(i){document.getElementById("h").hidden=!i,i?this.showCommands&&(document.getElementById("commands").hidden=!1):(this.showCommands=!document.getElementById("commands").hidden,document.getElementById("commands").hidden=!0)}startRace(){console.log("START RACE"),this.currentVideo.videoStartTime>=3?this.setRaceTime(-3):this.setRaceTime(0),this.currentVideo.video&&this.currentVideo.video.play(),this.swimmers.forEach(i=>i.startRace()),V.raceHasStarted=!0,V.useGravity=!0,this.water.resetTextures(),this.water.WR_position=0,this.stopButton.hidden=!1,this._clearChronoTexture(this.gl.canvas.width,this.gl.canvas.height,this.gl),this.showTexts(!1),console.log("show streaks : "+this.params.visualizations.showStreaks)}stopRace(){this.paused&&this.play(),this.setRaceTime(0),this.currentVideo.video&&this.currentVideo.video.pause(),this.swimmers.forEach(i=>i.swim(!1)),V.raceHasStarted=!1,this.water.resetTextures(),this.playButton.textContent="play",this.stopButton.hidden=!0,this.showTexts(!0)}pause(){this.paused=!0,this.pauseVideo(),this.playButton.textContent="play"}play(){this.paused=!1,V.raceHasStarted&&(this.playVideo(),this.playButton.textContent="pause")}pauseVideo(){this.currentVideo.video&&this.currentVideo.video.pause()}playVideo(){this.currentVideo.video&&(this.currentVideo.video.play(),this.currentVideo.video.currentTime=this.time)}renderVideo(){this.currentVideo.video&&this.currentVideo.render()}parseConfigFile(i){fetch(i).then(n=>n.text()).then(n=>{this.events=JSON.parse(n),this.currentEventIndex=0,this._renderTimeline&&this._renderTimeline()})}updateTransitions(){Object.entries(this.transitions).forEach(i=>{const n=i[0],c=i[1],u=this.getRaceTime()-c.beginTime;if(u>c.duration){delete this.transitions[n];return}c.show?c.opacity=u/c.duration:c.opacity=1-u/c.duration})}updateParams(){if(!V.raceHasStarted||!this.events||!this.useConfigFile)return;const i=this.events[this.currentEventIndex];if(!i)return;let n=i.rankSwimmerToggle;if(n||(n=1),i.distance&&this.swimmers[n-1].getDistanceTraveled()>=i.distance||i.time!==void 0&&this.getRaceTime()>=i.time){this.currentEventIndex++;const c=i.transition&&i.transition.type=="dissolve";Object.entries(i.params).forEach(u=>{const f=u[0],x=u[1];f!=="transition"&&(c&&(x===!0||x===!1)&&(this.transitions[f]={opacity:1-1*x,show:x,beginTime:this.getRaceTime(),duration:i.transition.duration}),this.params.visualizations[f]=x)})}}chronoPhotography({circle:i=!1}){console.log("shoot"),this.distanceFixed=this.swimmers[0].getDistanceTraveled(),console.log("distance fixed : "+this.distanceFixed),this._fixTexture(i)}recalibrate(){this.currentVideo&&this.setCalibration(this.currentVideo.calibration)}async launchDemo(){console.log("Launch demo"),await this.setScene("100m freestyle"),this.params.video.show=!1,this.params.swimmers.showSpheres=!0,this.spheresRadiusCoeff=1,this.demoTime=0,this.swimmers.forEach(i=>i.body.move(re)),this.swimmersShown=0,this.playingDemo=!0,this.useGravity(!0),this.params.simulation.buoyancyFactor=1.5,this.params.visualizations.shadow.enabled=!1,this.renderWater=!1,this.translateX=200,this._gui.hide(),document.getElementById("event-editor").hidden=!0,document.getElementById("time-slider-container").hidden=!0,document.getElementById("h").hidden=!0}stopDemo(){this.playingDemo=!1,this.setScene("—"),document.getElementById("event-editor").hidden=!1,document.getElementById("time-slider-container").hidden=!1,document.getElementById("h").hidden=!1,this.renderWater=!0,this.renderCube=!0,this.params.visualizations.shadow.enabled=!0,this._gui.show(),this.params.simulation.buoyancyFactor=1.1}updateDemo(i){if(!this.playingDemo)return;const n=this.demoTime;this.demoTime+=i;const c=2,u=1;if(n<=u){const g=Z(this,Q,ke).call(this,0,u,n);this.translateX=g*this.currentVideo.calibration.tx+(1-g)*200}else this.demoShowVideoTime||(this.angleY+=20*i);!this.renderCube&&n>.5&&(this.renderCube=!0);const f=1.5;if(!this.renderWater&&n>1.5&&(this.renderWater=!0),n>f&&n<f+.5)for(var x=0;x<10;x++)this.water.addDrop(Math.random()*2-1,Math.random()*2-1,.06,x&1?.6:-.6);Z(this,Q,et).call(this,n,c);const b=3,P=5;!V.raceHasStarted&&n>=b&&n<P&&(this.params.simulation.splashes.enabled=!1,this.swimmers.forEach(g=>{g.body.cinematic=!0;const R=new p.Vector(g.body.center.x,0,0),A=new p.Vector(g.body.center.x,1,-this.params.simulation.poolSize.z/2);g.body.move(Z(this,Q,tt).call(this,R,A,b,P,n))})),!V.raceHasStarted&&n>=P&&(this.params.simulation.buoyancyFactor=1.1,this.params.simulation.splashes.enabled=!0,this.params.visualizations.shadow.enabled=!0,this.startRace()),!this.demoShowVideoTime&&this.angleY>=this.currentVideo.calibration.ay+360&&(this.demoShowVideoTime=this.demoTime+1),!this.params.video.show&&this.demoShowVideoTime&&n>=this.demoShowVideoTime&&(this.params.video.show=!0,this.params.video.opacity=0);const L=2;this.params.video.show&&n<=this.demoShowVideoTime+L&&(this.params.video.opacity=(n-this.demoShowVideoTime)/L,console.log("opacity : "+this.params.video.opacity));const k=2;let w=null;this.demoShowVideoTime&&(w=this.demoShowVideoTime+L+k),this.params.video.show&&n>this.demoShowVideoTime+L&&n<w&&(this.spheresRadiusCoeff=1-(n-(this.demoShowVideoTime+L))/k);let O=null;w&&(O=w+.5);const B=2;O&&n>O&&n<O+B&&(this.params.video.hideObstructions=!0,this.params.video.hideObstructionThreshold=(n-O)/B*.5)}}Q=new WeakSet,Je=function(i){console.log("SET POOL SIZE : "+i.z),this.params.simulation.poolSize.x=i.x,this.params.simulation.poolSize.y=i.y,this.params.simulation.poolSize.z=i.z},Qe=function(){this.floaters=[];const i=.1,n=this.params.simulation.poolSize,c=n.x/10,u=n.z/(2*i),f=-n.z/2,x=-n.x/2,b=new p.Vector(0,1,0),P=new p.Vector(1,1,0),L=new p.Vector(0,.5,1),k=[b,L,L,P,P,P,L,L,b];for(let w=1;w<10;w++)for(let O=0;O<u;O++){const B=new p.Vector(x+w*c,0,f+i+O*2*i);let g=k[w-1];(Math.abs(B.z)>=20||Math.abs(B.z)<=.5||Math.abs(Math.abs(B.z)-10)<=.25)&&(g=new p.Vector(1,0,0)),this.floaters.push(new fe(B,i,g,2.5))}},et=function(i,n){const u=Math.floor((i-n)/.1);if(this.swimmersShown<10&&u>=this.swimmersShown){console.log("swimmers shown : "+this.swimmersShown),console.log("next index swimmer : "+u),console.log("num swimmers : "+this.swimmers.length);const f=this.params.simulation.poolSize.x,b=-f/2+f/20+u*f/10;this.swimmers[u].body.move(new p.Vector(b,.5,0)),this.swimmersShown++}},ke=function(i,n,c){if(c<i)return 0;if(c>n)return 1;const u=(c-i)/(n-i);return 1-(Math.cos(u*Math.PI)+1)/2},tt=function(i,n,c,u,f){const x=Z(this,Q,ke).call(this,c,u,f);console.log("t norm : "+x);const b=(P,L,k,w=1)=>Math.pow(k,w)*L+(1-Math.pow(k,w))*P;return new p.Vector(b(i.x,n.x,x),b(i.y,n.y,x,20),b(i.z,n.z,x,2))};const t=new Rt;t.parseConfigFile("./assets/vis-config.json");const zt=`#version 300 es
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

`,At=`#version 300 es
    precision highp float;
    in float fragCyclePhase;
    in float fragAltitude;
    const float PI = 3.141592;
    out vec4 fragColor;
    void main() {
        fragColor = vec4(fragAltitude, fragCyclePhase / (2. * PI), 1., 1.);
    }
`,Ct=`#version 300 es
    in vec2 iVertex;
    out vec2 fragCoord;
    void main() {
        fragCoord = iVertex * .5 + .5;
        gl_Position = vec4(iVertex.xy, 0., 1.);
    }
`,Ft=`#version 300 es
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
`,Pt=new Float32Array([-1,-1,1,-1,1,1,-1,1]),Mt=new Uint16Array([0,1,2,2,3,0]);var ee,it,pe,ot;class Dt{constructor(){ve(this,ee);this.numVecAttributes=je,this.maxNumSwimmer=Ke,this.gl=t.gl;const i=this.gl.NEAREST;this.texture=new p.Texture(this.numVecAttributes,this.maxNumSwimmer,{type:this.gl.FLOAT,filter:i}),this.initPrograms(),this.indexBuffer=this.gl.createBuffer(),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.indexBuffer),this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER,Mt,this.gl.STATIC_DRAW),this.vboPlane=this.gl.createBuffer(),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vboPlane),this.gl.bufferData(this.gl.ARRAY_BUFFER,Pt,this.gl.STATIC_DRAW),this.vboPoints=this.gl.createBuffer()}update(){this.numSwimmers=t.swimmers.length;const i=5;this.swimmersAttributes=new Float32Array(this.numVecAttributes*4*this.maxNumSwimmer*i);const n=Z(this,ee,it).call(this,t.swimmers);for(let c=0;c<t.swimmers.length;c++){const u=n[c];Z(this,ee,ot).call(this,c,u),Z(this,ee,pe).call(this,t.swimmers.length+c,u.leftArm),Z(this,ee,pe).call(this,2*t.swimmers.length+c,u.rightArm),Z(this,ee,pe).call(this,3*t.swimmers.length+c,u.leftFoot),Z(this,ee,pe).call(this,4*t.swimmers.length+c,u.rightFoot)}this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture.id),this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,!1),this.gl.texSubImage2D(this.gl.TEXTURE_2D,0,0,0,this.numVecAttributes,this.maxNumSwimmer,this.gl.RGBA,this.gl.FLOAT,this.swimmersAttributes),this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,!0),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vboPoints),this.gl.bufferData(this.gl.ARRAY_BUFFER,this.swimmersAttributes,this.gl.DYNAMIC_DRAW)}buildShader(i,n){const c=this.gl.createShader(n);return this.gl.shaderSource(c,i),this.gl.compileShader(c),c}createProgram(i){const n=this.gl.createProgram();return i.forEach(c=>{this.gl.attachShader(n,c)}),this.gl.linkProgram(n),n}checkShaders(i,n,c){this.gl.getShaderParameter(i,this.gl.COMPILE_STATUS)||console.error(this.gl.getShaderInfoLog(i)),this.gl.getShaderParameter(n,this.gl.COMPILE_STATUS)||console.error(this.gl.getShaderInfoLog(n)),this.gl.getProgramParameter(c,this.gl.LINK_STATUS)||console.error(this.gl.getProgramInfoLog(c))}createRenderingTexture(i,n){this.pointsTexture=new p.Texture(i,n,{type:this.gl.FLOAT,filter:this.gl.NEAREST}),this.pointsFrameBuffer=this.gl.createFramebuffer(),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.pointsFrameBuffer);const c=this.gl.COLOR_ATTACHMENT0;this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,c,this.gl.TEXTURE_2D,this.pointsTexture.id,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.horizontalPassTexture=new p.Texture(i,n,{type:this.gl.FLOAT,filter:this.gl.LINEAR}),this.horizontalPassFrameBuffer=this.gl.createFramebuffer(),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.horizontalPassFrameBuffer),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,c,this.gl.TEXTURE_2D,this.horizontalPassTexture.id,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null);const u=n/4,f=u,x=u;this.displacementTexture=new p.Texture(f,x,{type:this.gl.FLOAT,filter:this.gl.LINEAR}),this.displacementFrameBuffer=this.gl.createFramebuffer(),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.displacementFrameBuffer),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,c,this.gl.TEXTURE_2D,this.displacementTexture.id,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.oldDisplacementTexture=new p.Texture(f,x,{type:this.gl.FLOAT,filter:this.gl.LINEAR})}buildProgram(i,n){const c=this.buildShader(i,this.gl.VERTEX_SHADER),u=this.buildShader(n,this.gl.FRAGMENT_SHADER),f=this.createProgram([c,u]);return this.checkShaders(c,u,f),f}initPrograms(){this.programPoints=this.buildProgram(zt,At),this.programVolume=this.buildProgram(Ct,Ft),this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height)}volumePass(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.horizontalPassFrameBuffer),this.gl.useProgram(this.programVolume);const i=this.gl.getAttribLocation(this.programVolume,"iVertex"),n=this.gl.getUniformLocation(this.programVolume,"poolSize");this.gl.uniform2f(n,t.params.simulation.poolSize.x,t.params.simulation.poolSize.z);const c=this.gl.getUniformLocation(this.programVolume,"horizontal");this.gl.uniform1i(c,!0);const u=this.gl.getUniformLocation(this.programVolume,"show");this.gl.uniform1i(u,!1);const f=this.gl.getUniformLocation(this.programVolume,"swapColor");this.gl.uniform1i(f,!1);const x=2,b=this.gl.FLOAT,P=!1,L=0,k=0;this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vboPlane),this.gl.vertexAttribPointer(i,x,b,P,L,k),this.gl.enableVertexAttribArray(i),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.indexBuffer),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.pointsTexture.id),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this.gl.drawElements(this.gl.TRIANGLES,6,this.gl.UNSIGNED_SHORT,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.displacementFrameBuffer),this.gl.uniform1i(c,!1),this.gl.uniform1i(u,!1),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.horizontalPassTexture.id),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this.gl.viewport(0,0,this.displacementTexture.width,this.displacementTexture.height),this.gl.drawElements(this.gl.TRIANGLES,6,this.gl.UNSIGNED_SHORT,0),this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height)}pointPass(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.pointsFrameBuffer),this.gl.useProgram(this.programPoints);const i=this.gl.getAttribLocation(this.programPoints,"iData1"),n=this.gl.getAttribLocation(this.programPoints,"iData2"),c=this.gl.getAttribLocation(this.programPoints,"iData3"),u=this.gl.getUniformLocation(this.programPoints,"invPoolSize");this.gl.uniform2f(u,1/t.params.simulation.poolSize.x,1/t.params.simulation.poolSize.z);const f=4,x=this.gl.FLOAT,b=!1,P=4,L=12*P;let k=0;this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vboPoints),i>=0&&(this.gl.vertexAttribPointer(i,f,x,b,L,k),this.gl.enableVertexAttribArray(i)),k=4*P,n>=0&&(this.gl.vertexAttribPointer(n,f,x,b,L,k),this.gl.enableVertexAttribArray(n)),k=2*4*P,c>=0&&(this.gl.vertexAttribPointer(c,f,x,b,L,k),this.gl.enableVertexAttribArray(c)),this.gl.viewport(0,0,this.pointsTexture.width,this.pointsTexture.height),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this.gl.drawArrays(this.gl.POINTS,0,5*this.numSwimmers)}updateOldDisplacementTexture(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.displacementFrameBuffer),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.oldDisplacementTexture.id),this.gl.copyTexSubImage2D(this.gl.TEXTURE_2D,0,0,0,0,0,this.oldDisplacementTexture.width,this.oldDisplacementTexture.height)}draw(){this.updateOldDisplacementTexture(),this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this.pointPass(),this.volumePass(),this.gl.disable(this.gl.BLEND)}}ee=new WeakSet,it=function(i){const n=function(f,x){return x.getDistanceTraveled()-f.getDistanceTraveled()};let c=0;i.forEach(f=>{f.hasFinished()>.1&&c++});const u=i.slice(0,c).concat(i.slice(c).sort(n));for(let f=0;f<i.length;f++)i[f]=u[f];return i},pe=function(i,n){this.swimmersAttributes[this.numVecAttributes*4*i]=n.center.x,this.swimmersAttributes[this.numVecAttributes*4*i+1]=n.center.z,this.swimmersAttributes[this.numVecAttributes*4*i+7]=n.center.y},ot=function(i,n){Z(this,ee,pe).call(this,i,n.body),this.swimmersAttributes[this.numVecAttributes*4*i+2]=n.divingDistance,this.swimmersAttributes[this.numVecAttributes*4*i+3]=n.divingTime,this.swimmersAttributes[this.numVecAttributes*4*i+4]=n.reactionTime,this.swimmersAttributes[this.numVecAttributes*4*i+5]=n.body.velocity.z,this.swimmersAttributes[this.numVecAttributes*4*i+6]=n.nationality,this.swimmersAttributes[this.numVecAttributes*4*i+8]=n.breakoutDistance,this.swimmersAttributes[this.numVecAttributes*4*i+9]=n.breakoutTime,this.swimmersAttributes[this.numVecAttributes*4*i+10]=n.finishTime,this.swimmersAttributes[this.numVecAttributes*4*i+11]=n.waterDamping};function Ae(a=0,i=1){const n=1-Math.random(),c=Math.random();return Math.sqrt(-2*Math.log(n))*Math.cos(2*Math.PI*c)*i+a}const It=.5,Lt=2,de="Temps (s)",ge="event",ye="eventX",xe="eventY",kt="frequence (cylce/min)";var be,rt;const q=class q{constructor(i){ve(this,be);this.startingPoint=new p.Vector(i.x,i.y,i.z),this.center=new p.Vector(i.x,i.y,i.z),this.force=new p.Vector(0,0,190+Ae(0,20)),this.reactionTime=Math.max(.1,Ae(.15,.02));const n=.25,c=.15;this.body=new fe(i,n),this.body.showStreak=!0,this.leftArm=new fe(re,c),this.rightArm=new fe(re,c),this.leftFoot=new fe(re,c),this.rightFoot=new fe(re,c),this.body.cinematic=!q.useGravity,this.leftArm.cinematic=!0,this.rightArm.cinematic=!0,this.leftFoot.cinematic=!0,this.rightFoot.cinematic=!0,this.spheres=[this.body,this.leftArm,this.rightArm,this.leftFoot,this.rightFoot],this.divingDistance=0,this.divingTime=1e3,this.breakoutDistance=0,this.breakoutTime=1e3,this.nationality=Math.random()>.5?0:1,this.currendDataIndex=0,this.useTracking=!1,this.armPulsation=2*Math.PI*Lt,this.cycleTime=0,this.cyclePhase=0,this.finishTime=0,this.waterDamping=t.params.simulation.waterDamping}async parseData(i){await fetch(i).then(n=>{const c=n.headers.get("content-type");return!c||!c.includes("text/csv")?(console.log("no file found : "+i),null):n.text()}).then(n=>{if(!n)return;const c=n.split(`
`),u=c[0].split(/,|;/);this.data=c.slice(1).map(f=>{const x=f.split(/,|;/);return Object.fromEntries(u.map((b,P)=>[b,x[P]]))}),t.params.swimmers.useTracking&&(this.armPulsation=0)})}getDistanceTraveled(){const i=this.body.velocity.z,n=t.params.simulation.poolSize.z,c=this.body.center.z+n/2;return i>=0?c:2*n-c}startRace(){this.hasBrokeOut=!1,this.hasDove=!1,this.hasReacted=!1}jump(i=4.5){this.body.cinematic=!1,this.body.velocity=new p.Vector(0,0,i+Ae(0,1)),this.body.center=new p.Vector(this.startingPoint.x,1,-t.params.simulation.poolSize.z/2)}swim(i){this.hasReacted=i,this.isSwimming=i,this.finishTime=0,i||(this.body.followTarget=!1),i?(this.body.cinematic=!1,this.useGravity=!0,this.useTracking?this.moveToBeginning():this.body.center=new p.Vector(this.startingPoint.x,0,-t.params.simulation.poolSize.z/2)):(this.body.velocity=new p.Vector(0,0,0),this.body.center=new p.Vector(this.startingPoint.x,0,0))}moveToBeginning(){this.useTracking||console.warn("tried to use tracking on untracked swimmer");const i=this.data[0];this.body.center=Z(this,be,rt).call(this,i)}hasFinished(){return this.finishTime>.1}getArmOffset(i,n){n+=this.cyclePhase;const c=this.body.velocity.z>=0?this.armPulsation:-this.armPulsation;return new p.Vector(0,Math.cos(c*i+n),Math.sin(c*i+n)).multiply(It)}setCurrentDataIndex(){if(console.log("set current data index"),this.currendDataIndex=0,!!this.data){for(;this.data[this.currendDataIndex]&&this.data[this.currendDataIndex][de]<t.getRaceTime();)this.currendDataIndex++;if(this.currendDataIndex+1<this.data.length){if(this.currendDataIndex-1>=0){const i=parseFloat(this.data[this.currendDataIndex][ye]);let n=i;const c=t.params.simulation.poolSize.z;i>c&&(n=2*c-n),n-=c/2;const u=this.body.center;u.x,t.isSceneSynchronizedSwimming()&&parseFloat(this.data[this.currendDataIndex][xe])-t.params.simulation.poolSize.x/2,this.body.move(new p.Vector(u.x,u.y,n));const f=Math.sign(50-i)*.1;this.body.velocity=new p.Vector(0,0,f),console.log("vz : "+f)}this.body.setTarget(null),this.body.followTarget=!0,this.finishTime=0}}}findNextCycle(){let i=this.currendDataIndex+1;if(!this.data)return null;for(;this.data[i]&&this.data[i][ge]!="cycle";)i++;return this.data[i]?parseFloat(this.data[i][de]):null}setDamping(i){if(t.params.visualizations.customWaterPerturbation==t.params.visualizations.PARAMETER_CYCLES){const n=parseFloat(i[kt]);if(n<50)return;if(n>0){console.log("FREQ : "+n);const c=80,u=50;let f=(n-u)/(c-u);f=Math.max(Math.min(f,1),0);const x=.015,b=.25;this.waterDamping=x+(b-x)*(1-f)}}else this.waterDamping=t.params.simulation.waterDamping}handleTracking(i){if(this.hasReacted&&this.useTracking&&this.currendDataIndex<this.data.length&&this.data[this.currendDataIndex][de]<i){this.setDamping(this.data[this.currendDataIndex]);let n=null,c=this.startingPoint.x,u=i;const f=this.data[this.currendDataIndex+1];this.currendDataIndex+1<this.data.length&&(n=parseFloat(f[ye]),t.isSceneSynchronizedSwimming()&&(n=t.params.simulation.poolSize.z-n*30/25,f[xe]&&(c=parseFloat(f[xe])-t.params.simulation.poolSize.x/2)),u=parseFloat(f[de]));const x=t.params.simulation.poolSize.z;let b=-this.body.radius/2;const P=this.data[this.currendDataIndex][ge];if(P=="enter"||P=="turn"&&f[ge]!="under"){u=(i+u)/2,n=(this.body.center.z+x/2+n)/2;const k={[de]:u,[ye]:n,[ge]:"under"};this.data.splice(this.currendDataIndex+1,0,k),b=-1.5}f&&f[ge]=="under"&&(b=-1.5),n>x&&(n=2*x-n),n-=t.params.simulation.poolSize.z/2;const L=new p.Vector(c,b,n);if(this.currendDataIndex+1<this.data.length?this.body.setTarget(L,u-i):this.body.setTarget(null),P=="figure"&&(console.log("FIGURE"),t.splashParticles.spawnSplash(L,null,1e4,null,{speed0:4,maxParticles:400}),t.chronoPhotography({circle:!0})),P=="cycle"){const k=parseFloat(this.data[this.currendDataIndex][de]),w=this.findNextCycle();if(w){const B=1/(w-k);this.armPulsation=2*Math.PI*B,this.cycleTime=0,this.cyclePhase==0?this.cyclePhase=Math.PI:this.cyclePhase=0}}else P=="finish"&&(this.finishTime=this.data[this.currendDataIndex][de],this.body.followTarget=!1,this.isSwimming=!1);this.currendDataIndex++}}moveSpheresAway(){this.rightArm.move(re),this.leftArm.move(re),this.rightFoot.move(re),this.leftFoot.move(re)}moveSpheres(i){this.cycleTime+=i;const n=this.getArmOffset(.5*this.cycleTime,0),c=this.getArmOffset(.5*this.cycleTime,Math.PI),u=this.getArmOffset(.5*this.cycleTime*2,0),f=this.getArmOffset(.5*this.cycleTime*2,Math.PI);this.rightArm.move(this.body.center.add(n).add(new p.Vector(De,0,0))),this.leftArm.move(this.body.center.add(c).add(new p.Vector(-De,0,0)));const x=this.body.velocity.z>=0?-Le:Le;this.rightFoot.move(this.body.center.add(new p.Vector(Ie,u.y*.5,x))),this.leftFoot.move(this.body.center.add(new p.Vector(-Ie,f.y*.5,x)))}update(i){const n=t.getRaceTime();!q.raceHasStarted&&this.data&&(this.useTracking=t.params.swimmers.useTracking),!this.hasReacted&&q.raceHasStarted&&(this.useTracking||n>this.reactionTime&&!t.params.swimmers.useTracking?(this.swim(!0),this.waterDamping=t.params.simulation.waterDamping,this.useTracking||this.jump(),this.useTracking&&(this.body.cinematic=!0,this.body.followTarget=!0,this.body.setTarget(null))):(this.swim(!1),this.body.cinematic=!0,t.playingDemo?this.body.move(new p.Vector(this.body.center.x,1,-t.params.simulation.poolSize.z/2)):this.body.move(re)),this.currendDataIndex=0),this.isSwimming&&(this.useTracking||this.body.addForce(this.force),this.body.center.y>-this.body.radius&&!t.isSceneSynchronizedSwimming()?this.moveSpheres(i):this.moveSpheresAway()),this.handleTracking(n);for(let u of this.spheres)u.update(i),u.spawnSplashes(i);if(this.body.center.z>-t.params.simulation.poolSize.z/2+20||t.isSceneSynchronizedSwimming())return;q.raceHasStarted&&!this.hasDove&&this.body.center.y<0&&this.body.oldCenter.y>=0&&(this.divingDistance=this.body.center.z+t.params.simulation.poolSize.z/2,this.divingTime=n,this.hasDove=!0);const c=this.body.radius;q.raceHasStarted&&!this.hasBrokeOut&&this.body.center.y>-c&&this.body.oldCenter.y<=-c&&(this.breakoutDistance=this.body.center.z+t.params.simulation.poolSize.z/2,this.breakoutTime=n,this.hasBrokeOut=!0)}};be=new WeakSet,rt=function(i){let n=parseFloat(i[ye]),c=this.body.center.x;return t.isSceneSynchronizedSwimming()&&(n=t.params.simulation.poolSize.z-n*30/25,i[xe]&&(c=parseFloat(i[xe])-t.params.simulation.poolSize.x/2)),n-=t.params.simulation.poolSize.z/2,new p.Vector(c,1,n)},ie(q,"useGravity",!1),ie(q,"raceHasStarted",!1),ie(q,"swimming",!1),ie(q,"attributes"),ie(q,"initAttributes",()=>{q.attributes=new Dt}),ie(q,"updateAttributesTexture",()=>{q.attributes.update()}),ie(q,"getAttributesTexture",()=>q.attributes.texture),ie(q,"bindDisplacementTexture",i=>{q.attributes.displacementTexture.bind(i)}),ie(q,"bindOldDisplacementTexture",i=>{q.attributes.oldDisplacementTexture.bind(i)}),ie(q,"reset",i=>{q.attributes.createRenderingTexture(i.x,i.y)});let V=q;const Bt=`
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
`;function ce(a,i,n,c){this.water=i,this.gl=a,this.tileTexture=p.Texture.fromImage(document.getElementById("tiles"),{minFilter:this.gl.LINEAR_MIPMAP_LINEAR,wrap:this.gl.REPEAT,format:this.gl.RGB}),this.franceTexture=p.Texture.fromImage(document.getElementById("france"),{minFilter:this.gl.LINEAR_MIPMAP_LINEAR,wrap:this.gl.REPEAT,format:this.gl.RGBA}),this.chinaTexture=p.Texture.fromImage(document.getElementById("china"),{minFilter:this.gl.LINEAR_MIPMAP_LINEAR,wrap:this.gl.REPEAT,format:this.gl.RGBA}),this.lettersTexture=p.Texture.fromImage(document.getElementById("letters"),{minFilter:this.gl.LINEAR,magFilter:this.gl.LINEAR,wrap:this.gl.REPEAT,format:this.gl.RGBA}),this.flagSize=c,this.flagSize=[1.5,1],this.flagCenter=n,this.lightDir=new p.Vector(2,2,-1).unit(),this.causticTex=new p.Texture(1024,1024),this.waterShaders=[];let u="";Object.entries(t.params.visualizations.customParametersDict).forEach(b=>{const P=b[1].name,L=b[1].value;u+="#define "+P+" "+L+`
`}),Object.entries(t.params.visualizations.renderingDict).forEach(b=>{const P=b[1].name,L=b[1].value;u+="#define "+P+" "+L+`
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

      uniform float heightLimit;

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
      
      
      `+Te+Bt+`
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
        
        `+(f?`
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

          // if (info.r > heightLimit) fragColor = vec4(1., 0., 0., 1.);

          if(!foamEnabled) return;

          vec3 waterColor = abovewaterColor;
          vec4 foamColor = vec4(vec3(.9), fragColor.a);
          float foam = texture(foamTex, coord).r;
          fragColor = mix(fragColor, foamColor, foam);
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
    uniform vec3 color;
  void main() {
    fragColor = vec4(getSphereColor(position)*color, 1.0);
      vec4 info = texture(water, position.xz / poolSize.xz + 0.5);
    if (position.y < info.r && renderWater) {
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
  `),this.sphereCenter=new p.Vector,this.sphereRadius=0;var x=!!this.gl.getExtension("OES_standard_derivatives");this.causticsShader=new p.Shader(he+`
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
  `+he+`
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
  `)}ce.prototype.reset=function(){this.cubeMesh=p.Mesh.cube({width:t.params.simulation.poolSize.x,height:2,depth:t.params.simulation.poolSize.z}),this.cubeMesh.triangles.splice(4,2),this.cubeMesh.compile()};ce.prototype.updateCaustics=function(a){};ce.prototype.renderWater=function(a,i,n){if(!t.renderWater)return;var c=new p.Raytracer;a.textureA.bind(0),this.tileTexture.bind(1),i.bind(2),this.causticTex.bind(3),this.franceTexture.bind(4),this.chinaTexture.bind(8),t.water.foam.foamTexNext.bind(9),this.lettersTexture.bind(7),a.areaConservationTexture.bind(5);const u=V.getAttributesTexture();u&&u.bind(6),this.gl.enable(this.gl.CULL_FACE),t.updateTransitions();for(var f=0;f<2;f++)this.gl.cullFace(f?this.gl.BACK:this.gl.FRONT),this.waterShaders[f].uniforms({renderWater:!0,light:this.lightDir,water:0,tiles:1,sky:2,causticTex:3,france:4,china:8,foamTex:9,areaConservationTexture:5,swimmersAttributesTexture:6,iChannel0:7,areaConservation:t.params.visualizations.areaConservationEnabled,flagSize:[1.5,2],flagCenter:[this.flagCenter.x,this.flagCenter.y],poolSize:[t.params.simulation.poolSize.x,t.params.simulation.poolSize.y,t.params.simulation.poolSize.z],poolSizeVertexShader:[t.params.simulation.poolSize.x,t.params.simulation.poolSize.y,t.params.simulation.poolSize.z],eye:c.eye,sphereCenter:this.sphereCenter,sphereRadius:this.sphereRadius,showProjectionGrid:a.showProjectionGrid,showAreaConservedGrid:a.showAreaConservedGrid,wr:a.WR_position,swimmersNumber:t.swimmers.length,cornerView:t.cornerView,showFlags:t.transitions.showFlags?t.transitions.showFlags.opacity:t.params.visualizations.showFlags,showWR:t.params.visualizations.showWR,showSpeed:t.params.visualizations.showSpeed,showDivingDistance:t.params.visualizations.showDivingDistance,showFinishTimes:t.params.visualizations.showFinishTimes,time:t.getRaceTime(),seed:t.time,foamEnabled:t.params.simulation.foam.enabled,shadowEnabled:n.enabled,shadowRadius:n.shadowRadius,shadowPower:n.shadowPower,showCircle:n.showCircle,shadowCircleRadius:n.circleRadius,shadowCircleStroke:n.circleStroke,showSwimmersLines:Math.round(t.params.visualizations.showSwimmersLinesDict[t.params.visualizations.showSwimmersLines]),swimmersLinesMode:t.params.visualizations.swimmersLinesModeDict[t.params.visualizations.swimmersLinesMode],medalsModeBeforeFinish:Math.round(t.params.visualizations.medalsModesDict[t.params.visualizations.medalsModeBeforeFinish]),medalsModeAfterFinish:Math.round(t.params.visualizations.medalsModesDict[t.params.visualizations.medalsModeAfterFinish]),rendering:t.params.visualizations.renderingDict[t.params.visualizations.rendering].value,heightLimit:t.params.simulation.heightLimit,waterColorParameter:t.params.visualizations.customParametersDict[t.params.visualizations.waterColorParameter].value}).draw(a.plane);this.gl.disable(this.gl.CULL_FACE)};ce.prototype.renderSpheres=function(a){const i=[];t.params.swimmers.showSpheres&&t.swimmers.forEach(n=>n.spheres.forEach(c=>i.push(c))),t.params.simulation.showFloaters&&t.floaters.forEach(n=>i.push(n)),t.bubbleSpheres.forEach(n=>i.push(n));for(let n of i)this.renderSphere(a,n)};ce.prototype.renderSphere=function(a,i){a.textureA.bind(1),this.causticTex.bind(2),this.sphereShader.uniforms({light:this.lightDir,water:1,causticTex:2,sphereCenter:[i.center.x,i.center.y,i.center.z],sphereRadius:i.radius*t.spheresRadiusCoeff,poolSize:[t.params.simulation.poolSize.x,t.params.simulation.poolSize.y,t.params.simulation.poolSize.z],color:[i.color.x,i.color.y,i.color.z]}).draw(i.mesh)};ce.prototype.renderSphereOld=function(a){a.textureA.bind(0),this.causticTex.bind(1),this.sphereShader.uniforms({light:this.lightDir,water:0,causticTex:1,sphereCenter:this.sphereCenter,sphereRadius:this.sphereRadius,poolSize:[t.params.simulation.poolSize.x,t.params.simulation.poolSize.y,t.params.simulation.poolSize.z]}).draw(this.sphereMesh)};ce.prototype.renderCube=function(a){t.renderCube&&(this.gl.enable(this.gl.CULL_FACE),a.textureA.bind(0),this.tileTexture.bind(1),this.causticTex.bind(2),this.cubeShader.uniforms({light:this.lightDir,water:0,tiles:1,causticTex:2,sphereCenter:this.sphereCenter,sphereRadius:this.sphereRadius,poolSize:[t.params.simulation.poolSize.x,t.params.simulation.poolSize.y,t.params.simulation.poolSize.z],renderWater:t.renderWater}).draw(this.cubeMesh),this.gl.disable(this.gl.CULL_FACE))};function Ve(a,i){this.gl=i,this.id=i.createTexture(),i.bindTexture(i.TEXTURE_CUBE_MAP,this.id),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,1),i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAG_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),i.texImage2D(i.TEXTURE_CUBE_MAP_NEGATIVE_X,0,i.RGB,i.RGB,i.UNSIGNED_BYTE,a.xneg),i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X,0,i.RGB,i.RGB,i.UNSIGNED_BYTE,a.xpos),i.texImage2D(i.TEXTURE_CUBE_MAP_NEGATIVE_Y,0,i.RGB,i.RGB,i.UNSIGNED_BYTE,a.yneg),i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_Y,0,i.RGB,i.RGB,i.UNSIGNED_BYTE,a.ypos),i.texImage2D(i.TEXTURE_CUBE_MAP_NEGATIVE_Z,0,i.RGB,i.RGB,i.UNSIGNED_BYTE,a.zneg),i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_Z,0,i.RGB,i.RGB,i.UNSIGNED_BYTE,a.zpos)}Ve.prototype.bind=function(a){this.gl.activeTexture(this.gl.TEXTURE0+(a||0)),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,this.id)};Ve.prototype.unbind=function(a){this.gl.activeTexture(this.gl.TEXTURE0+(a||0)),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,null)};const se=new ft,Nt=function(a,i){const n=se.addFolder("visualizations");n.close(),n.add(t,"useConfigFile").name("use configuration file"),n.add(t,"showTimeline").name("show event timeline").listen().onChange(g=>{t.hideEditorPanel(g)}),n.add(t.params.visualizations,"showFlags").name("show flags").listen(),n.add(t.params.visualizations,"showStreaks").name("show streaks").listen(),n.add(t.params.visualizations,"showWR").name("show world record").listen(),n.add(t.params.visualizations,"showSwimmersLines",t.params.visualizations.swimmersLinesList).name("show neighbours lines").listen(),n.add(t.params.visualizations,"swimmersLinesMode",t.params.visualizations.swimmersLinesModeList).name("show neighbours lines").listen(),n.add(t.params.visualizations,"customWaterPerturbation",t.params.visualizations.customParametersList).name("custom water perturbation").listen(),n.add(t.params.visualizations,"waterColorParameter",t.params.visualizations.customParametersList).name("water color parameter").listen(),n.add(t.params.visualizations,"medalsModeBeforeFinish",["none","stars","bright","lanes"]).name("show potential medals").listen(),n.add(t.params.visualizations,"medalsModeAfterFinish",["none","stars","bright","lanes"]).name("show potential medals after finish").listen(),n.add(t.params.visualizations,"showSpeed").name("show speed").listen(),n.add(t.params.visualizations,"showDivingDistance").name("show diving distance").listen(),n.add(t.params.visualizations.shadow,"enabled").name("show shadow"),n.add(t.params.visualizations,"areaConservationEnabled","areaConservationEnabled").name("area conservation").listen(),n.add(t.params.visualizations,"rendering",t.params.visualizations.renderingList).name("rendering").listen().onChange(()=>{t.params.visualizations.rendering=="toon"&&(t.params.simulation.waterDamping=.35)});const c=se.addFolder("video");c.close(),c.add(t.params.video,"opacity").name("opacity").listen(),c.add(t.params.video,"thresholdBlending").name("threshold blending").listen(),c.add(t.params.video,"blendingThreshold",.1,1.5).name("blending threshold"),c.add(t.params.video,"show").name("show").listen(),c.add(t.params.video,"hideObstructions").name("hide obstructions"),c.add(t.params.video,"hideObstructionThreshold",0,.5).name("obstructions threshold");const u=n.addFolder("Sparks");u.close(),u.add(t.params.visualizations.sparks,"enabled").name("sparks enabled"),u.add(t.params.visualizations.sparks,"glow",1,30).name("sparks glow factor"),u.add(t.params.visualizations.sparks,"lengthFactor",.1,10).name("sparks length factor"),u.add(t.params.visualizations.sparks,"glowOffset",.1,3).name("sparks glow offset"),u.add(t.params.visualizations.sparks,"stroke",.001,.05).name("sparks stroke"),u.add(t.params.visualizations.sparks,"num",10,Ze).step(1).name("sparks number"),u.add(t.params.visualizations.sparks,"sizeFactor",10,100).name("size factor");const f=n.addFolder("Swimmers shadows");f.close(),f.add(t.params.visualizations.shadow,"shadowRadius",0,2).name("shadow radius"),f.add(t.params.visualizations.shadow,"shadowPower",.1,2).name("shadow power"),f.add(t.params.visualizations.shadow,"showCircle").name("circle"),f.add(t.params.visualizations.shadow,"circleRadius",.5,2).name("circle radius"),f.add(t.params.visualizations.shadow,"circleStroke",.1,.5).name("circle stroke");const x=se.addFolder("Simulation");x.close(),x.add(t.params.simulation,"showFloaters").name("show floaters").listen(),x.add(t.params.simulation,"optimized").name("optimized").listen(),x.add(t.params.simulation.poolSize,"x",1,25).name("pool width").onChange(function(g){i()}).listen(),x.add(t.params.simulation.poolSize,"z",1,50).name("pool height").onChange(function(g){i()}).listen(),x.add(t.params.simulation.poolSize,"y",1,3).name("pool depth").onChange(function(g){i()}).listen(),x.add(t.params.simulation,"waterDamping",.005,.4).name("water damping").listen();const b=x.addFolder("foam");b.close(),b.add(t.params.simulation.foam,"enabled").name("enabled"),b.add(t.params.simulation.foam,"velThreshold",0,15).name("velocity threshold"),b.add(t.params.simulation.foam,"velMax",0,20).name("max velocity"),b.add(t.params.simulation.foam,"dispersion",0,.1).name("dispersion"),b.add(t.params.simulation.foam,"timeVariation",0,10).name("time variation"),b.add(t.params.simulation.foam,"spaceVariation",0,100).name("space variation"),b.add(t.params.simulation.foam,"attenuation",0,.2).name("attenuation");const P=x.addFolder("splash");P.close(),P.add(t.params.simulation.splashes,"enabled").name("enabled"),P.add(t.params.simulation.splashes,"strengthThreshold",.1,10).name("strength threshold");const L=se.addFolder("swimmers");L.close(),L.add(t.params.swimmers,"showSpheres").name("show spheres").listen(),L.add(t.params.swimmers,"useTracking").name("use tracking data").listen();const k=se.addFolder("camera");k.close(),k.add(t.params,"fov",28,45).name("fov").listen().onChange(function(g){t.params.visualizations.sparks.fov=g*2*Math.PI/360,a.matrixMode(a.PROJECTION),a.loadIdentity(),a.perspective(t.params.fov,a.canvas.width/a.canvas.height,.01,100),a.matrixMode(a.MODELVIEW),console.log("perspective : "+t.params.fov)});const w=se.addFolder("quiver");w.close(),w.add(t.params.quiver,"amplitude",.01,1).name("amplitude"),w.add(t.params.quiver,"omega",.5,5).name("omega"),w.add(t.params.quiver,"amplitudeFactor",.5,.9).name("amplitude factor"),w.add(t.params.quiver,"frequencyFactor",1.1,2).name("frequency factor"),w.add(t.params.quiver,"waveLength",1,30).name("wave length");const O=se.addFolder("corner view");O.close(),O.add(t.params.cornerView,"show").name("show");const B=se.addFolder("chrono-photography");B.close(),B.add(t.params.chronoPhotography,"available").name("available").onChange(()=>{t.params.chronoPhotography.available?t.drawingFrameBuffer=t.chronoFrameBuffer:t.drawingFrameBuffer=null}),t._gui=se},Ce=150,le=100;function Vt(a){const i=document.createElement("div");if(document.body.appendChild(i),i.id="event-editor",i.style.position="fixed",i.display="block",i.style.bottom="60px",i.style.left="10px",i.style.right="10px",i.style.height="120px",i.style.zIndex="4",i.style.background="#222",i.style.color="#fff",i.style.overflow="auto",i.style.padding="4px",i.style.fontSize="12px",i.style.position=i.style.position||"relative",!i){console.warn(`event editor container "${a}" not found`);return}let n,c=!1;const u=[{name:"showFlags",type:"boolean"},{name:"showWR",type:"boolean"},{name:"showSpeed",type:"boolean"},{name:"showDivingDistance",type:"boolean"},{name:"showFinishTimes",type:"boolean"},{name:"showSwimmersLines",type:"select",options:t.params.visualizations.swimmersLinesList},{name:"swimmersLinesMode",type:"select",options:t.params.visualizations.swimmersLinesModeList},{name:"customWaterPerturbation",type:"select",options:t.params.visualizations.customParametersList},{name:"waterColorParameter",type:"select",options:t.params.visualizations.customParametersList},{name:"medalsModeBeforeFinish",type:"select",options:["none","stars","bright","lanes"]},{name:"medalsModeAfterFinish",type:"select",options:["none","stars","bright","lanes"]},{name:"rankSwimmerToggle",type:"number",min:1,max:10},{name:"showStreaks",type:"boolean"}];function f(g){const R=document.createElement("div");R.style.flex="1",R.style.padding="4px",R.style.background="#222",R.style.border="1px solid #555",R.style.borderRadius="4px",R.style.fontFamily="monospace",R.style.fontSize="12px",R.style.whiteSpace="pre-wrap",R.style.overflow="auto",R.style.maxHeight="100px";function A(){const N=g.params;if(Object.keys(N).length===0){R.textContent="(no params)";return}const G=Object.entries(N).map(([U,M])=>`${U}: ${JSON.stringify(M)}`);R.textContent=G.join(`
`)}return A(),{element:R,update:A}}function x(g,R){const A=document.createElement("div");A.style.display="flex",A.style.flexWrap="wrap",A.style.margin="4px 0",A.style.background="#333",A.style.padding="4px";function N(){R&&(R(),B())}u.forEach(D=>{const j=document.createElement("div");j.style.marginRight="8px",j.style.marginBottom="4px";const te=document.createElement("label");te.style.whiteSpace="nowrap",te.textContent=D.name+":",j.appendChild(te);let I;if(D.type==="boolean"){I=document.createElement("select"),[{value:"",label:"—"},{value:"true",label:"ON"},{value:"false",label:"OFF"}].forEach(K=>{const E=document.createElement("option");E.value=K.value,E.textContent=K.label,I.appendChild(E)});const Y=g.params[D.name];Y===void 0?I.value="":Y===!0?I.value="true":Y===!1&&(I.value="false"),I.addEventListener("change",()=>{I.value===""?delete g.params[D.name]:I.value==="true"?g.params[D.name]=!0:I.value==="false"&&(g.params[D.name]=!1),N()})}else if(D.type==="select"){I=document.createElement("select");const H=document.createElement("option");H.value="",H.textContent="—",I.appendChild(H),D.options.forEach(Y=>{const K=document.createElement("option");K.value=Y,K.textContent=Y,I.appendChild(K)}),I.value=g.params[D.name]||"",I.addEventListener("change",()=>{I.value===""?delete g.params[D.name]:g.params[D.name]=I.value,N()})}else D.type==="number"&&(I=document.createElement("input"),I.type="number",D.min!==void 0&&(I.min=D.min),D.max!==void 0&&(I.max=D.max),I.placeholder="—",I.style.width="50px",I.value=g.params[D.name]!==void 0?g.params[D.name]:"",I.addEventListener("change",()=>{if(I.value==="")delete g.params[D.name];else{const H=parseFloat(I.value);isNaN(H)||(g.params[D.name]=H)}N()}));I&&j.appendChild(I),A.appendChild(j)});const G=document.createElement("div");G.style.marginRight="8px",G.style.marginBottom="4px";const U=document.createElement("label");U.style.whiteSpace="nowrap",U.textContent="transition :",G.appendChild(U);const M=document.createElement("input");return M.type="number",M.min=0,M.placeholder="—",M.style.width="50px",M.value=g.transition!==void 0?g.transition.duration:"",M.addEventListener("change",()=>{if(M.value===""){delete g.transition;return}const D=parseFloat(M.value);isNaN(D)||(g.transition={type:"dissolve",duration:D},N())}),G.appendChild(M),A.appendChild(G),A}function b(){const g=document.createElement("div");g.style.marginTop="8px",g.style.padding="8px",g.style.background="#555",g.style.border="1px solid #777";const R=document.createElement("div");R.textContent="Add New Event",R.style.fontWeight="bold",R.style.marginBottom="4px",g.appendChild(R);const A=document.createElement("input");A.type="number",A.placeholder="Distance",A.style.width="auto",A.style.marginRight="8px",g.appendChild(A);const N={params:{}},G=x(N,null);G.style.margin="4px 0",g.appendChild(G);const U=document.createElement("button");U.textContent="OK",U.addEventListener("click",()=>{const D=parseFloat(A.value);if(isNaN(D)){alert("Please enter a valid distance");return}const j={distance:D,...N};t.events.push(j),B(),n.remove(),n=null}),g.appendChild(U);const M=document.createElement("button");return M.textContent="cancel",M.addEventListener("click",()=>{n.remove(),n=null}),g.appendChild(M),g}function P(g,R,{title:A="",id:N=null,color:G="#e74c3c"}){const U=g/R*100,M=document.createElement("div");return M.style.position="absolute",M.style.left=U+"%",M.style.transform="translateX(-50%)",M.style.width="4px",M.style.height="100%",M.style.background=G,M.style.cursor="pointer",M.title=A,N&&(M.id=N),M.addEventListener("click",()=>{O(idx)}),M}function L(){let g=document.getElementById("distance-marker");const R=t.swimmers[0].getDistanceTraveled();if(!g){if(c)return;const A=document.getElementById("timeline-track");g=P(R,le,{color:"blue",id:"distance-marker"}),A.appendChild(g)}g.style.left=R+"%"}function k(g){c=g,w()}function w(){i.innerHTML="";const g=document.createElement("button");if(g.textContent=c?"□":"—",g.style.position="absolute",g.style.top="0",g.style.right="0",g.style.width="20px",g.style.height="20px",g.style.zIndex="100001",g.addEventListener("click",()=>{c=!c,w()}),i.appendChild(g),c){i.style.height="20px";return}i.style.height="300px";const R=document.createElement("div");if(R.style.position="relative",R.style.top="0px",R.style.left="50%",R.style.transform="translateX(-50%)",R.style.width="80px",R.style.height="15px",R.style.background="grey",R.style.border="1px solid black",R.style.cursor="ns-resize",R.style.zIndex="100000",R.style.lineHeight="16px",R.style.textAlign="center",R.textContent="drag",i.appendChild(R),R.addEventListener("mousedown",o=>{o.preventDefault();const l=o.clientY,d=i.offsetHeight;function h(T){const y=d-(T.clientY-l);y>20&&(i.style.height=y+"px")}function m(){document.removeEventListener("mousemove",h),document.removeEventListener("mouseup",m)}document.addEventListener("mousemove",h),document.addEventListener("mouseup",m)}),!t.events){i.textContent="no events defined";return}const A=document.createElement("div");i.appendChild(A),A.style.marginRight="8px",A.style.marginBottom="4px";const N=document.createElement("label");N.style.whiteSpace="nowrap",N.textContent="select scene",N.style.margin="30px",A.appendChild(N);const G=document.createElement("select");G.style.width="auto",t.scenesList.forEach(o=>{const l=document.createElement("option");l.textContent=o.title,l.value=o.title,G.appendChild(l)}),G.addEventListener("change",()=>{t.setScene(G.value)}),A.appendChild(G);const U=t.events.slice().sort((o,l)=>{const d=o.distance!==void 0?o.distance:o.time!==void 0?o.time:0,h=l.distance!==void 0?l.distance:l.time!==void 0?l.time:0;return d-h}),M=new Set;U.forEach(o=>{o.params&&Object.keys(o.params).forEach(l=>M.add(l))});let D=u.map(o=>o.name).filter(o=>M.has(o));const j=["#4caf50","#2196f3","#ff9800","#9c27b0","#f44336","#009688","#e91e63","#3f51b5"],te={};D.forEach((o,l)=>{te[o]=j[l%j.length]});const I={},H={};D.forEach(o=>{H[o]=!1,I[o]=0});const Y=[];if(U.forEach(o=>{const l=o.distance!==void 0?o.distance:o.time!==void 0?o.time:0;o.params&&Object.keys(o.params).forEach(d=>{if(D.includes(d)){const h=!!o.params[d];h!==H[d]&&(H[d]&&Y.push({name:d,start:I[d],end:l}),H[d]=h,I[d]=l)}})}),D.forEach(o=>{H[o]&&Y.push({name:o,start:I[o],end:le})}),D.length>0){const o=document.createElement("div");o.style.position="relative";const l=20;o.style.height=D.length*l+"px",o.style.background="#222",o.style.marginBottom="4px",o.style.marginTop="10px",D.forEach((h,m)=>{const T=document.createElement("div");T.textContent=h,T.style.position="absolute",T.style.left="0",T.style.top=m*l+2+"px",T.style.width=Ce+"px",T.style.color="#aaa",T.style.fontSize="10px",T.style.pointerEvents="none",o.appendChild(T)});const d=document.createElement("div");d.style.position="absolute",d.style.left=Ce+"px",d.style.top="0",d.style.right="0",d.style.bottom="0",d.style.overflow="hidden",o.appendChild(d),Y.forEach(h=>{const m=document.createElement("div"),T=h.start/le*100,y=(h.end-h.start)/le*100;m.style.position="absolute",m.style.left=T+"%",m.style.top=D.indexOf(h.name)*l+2+"px",m.style.height=l-4+"px",m.style.width=y+"%",m.style.background=te[h.name]||"#4caf50",m.title=`${h.name}: ${h.start.toFixed(2)} → ${h.end.toFixed(2)}`;const v=document.createElement("span");if(v.textContent=`${h.name}: ${h.start.toFixed(2)} → ${h.end.toFixed(2)}`,v.style.position="absolute",v.style.top="0",v.style.left="2px",v.style.fontSize="10px",v.style.color="white",v.style.pointerEvents="none",v.style.whiteSpace="nowrap",v.style.overflow="hidden",v.style.textOverflow="ellipsis",m.appendChild(v),h.end<le){const _=document.createElement("div");_.style.position="absolute",_.style.right="0",_.style.top="0",_.style.width="5px",_.style.height="100%",_.style.background="rgba(255,255,255,0.5)",_.style.cursor="ew-resize",m.appendChild(_),_.addEventListener("mousedown",C=>{C.preventDefault(),C.stopPropagation();const z=C.clientX,F=m.offsetWidth;function X(J){const oe=J.clientX-z,ne=Math.max(1,F+oe),ue=ne/d.offsetWidth*100;m.style.width=ue+"%";const dt=h.start+ne/d.offsetWidth*le;v.textContent=`${h.name}: ${h.start.toFixed(2)} → ${dt.toFixed(2)}`}function W(){document.removeEventListener("mousemove",X),document.removeEventListener("mouseup",W);const J=m.offsetWidth,oe=h.start+J/d.offsetWidth*le,ne=U.find(ue=>(ue.distance!==void 0?ue.distance:ue.time!==void 0?ue.time:0)===h.end);ne&&(ne.distance!==void 0?ne.distance=oe:ne.time!==void 0&&(ne.time=oe)),B()}document.addEventListener("mousemove",X),document.addEventListener("mouseup",W)})}d.appendChild(m)}),i.appendChild(o)}const K=document.createElement("div");K.style.position="relative",K.style.height="40px",K.style.background="#222",K.style.marginBottom="4px",K.style.paddingLeft="80px";const E=document.createElement("div");E.id="timeline-track",E.style.position="absolute",E.style.background="#444",E.style.left=Ce+"px",E.style.top="0",E.style.right="0",E.style.bottom="0",K.appendChild(E),U.forEach((o,l)=>{const d=o.distance!==void 0?o.distance:o.time!==void 0?o.time:0,h=`event ${l}: ${JSON.stringify(o.params)}`,m=P(d,le,{title:h});E.appendChild(m)}),i.appendChild(K),U.forEach((o,l)=>{const d=document.createElement("div");d.style.display="flex",d.style.flexDirection="column",d.style.marginBottom="4px";const h=document.createElement("div");h.style.display="flex",h.style.alignItems="center";const m=document.createElement("input");m.type="number",m.style.width="60px",m.value=o.distance!==void 0?o.distance:o.time!==void 0?o.time:0,m.addEventListener("change",()=>{const C=parseFloat(m.value);isNaN(C)||(o.distance!==void 0?o.distance=C:o.time=C,B())}),h.appendChild(m);const T=f(o);h.appendChild(T.element);const y=document.createElement("button");y.textContent="⚙",y.style.marginLeft="4px",h.appendChild(y);const v=document.createElement("button");v.textContent="✖",v.style.marginLeft="4px",v.addEventListener("click",()=>{const C=t.events.indexOf(U[l]);C!==-1&&(t.events.splice(C,1),w())}),h.appendChild(v),d.appendChild(h);let _;y.addEventListener("click",()=>{_?(_.remove(),_=null):(_=x(o,T.update),d.appendChild(_))}),i.appendChild(d)});const r=document.createElement("button");r.textContent="+ add event",r.addEventListener("click",()=>{n?(n.remove(),n=null):(n=b(),i.appendChild(n),i.scrollTop=i.scrollHeight)}),i.appendChild(r);const s=document.createElement("button");s.textContent="export JSON",s.style.marginLeft="8px",s.addEventListener("click",()=>{const o=JSON.stringify(t.events,null,2),l=new Blob([o],{type:"application/json"}),d=URL.createObjectURL(l),h=document.createElement("a");h.href=d,h.download="vis-config.json",h.click(),URL.revokeObjectURL(d)}),i.appendChild(s);const e=document.createElement("input");e.type="file",e.accept=".json",e.style.marginLeft="8px",e.addEventListener("change",o=>{const l=o.target.files[0];if(l){const d=new FileReader;d.onload=h=>{try{const m=JSON.parse(h.target.result);t.events=m,B()}catch(m){alert("Invalid JSON: "+m.message)}},d.readAsText(l)}}),i.appendChild(e)}function O(g){const A=i.querySelectorAll("div")[1+g];A&&A.scrollIntoView({behavior:"smooth",block:"center"})}function B(){t.events.sort((g,R)=>{const A=g.distance!==void 0?g.distance:g.time!==void 0?g.time:0,N=R.distance!==void 0?R.distance:R.time!==void 0?R.time:0;return A-N}),w()}w(),t._renderTimeline=w,t._updateDistanceMarker=L,t._setPannelMinimized=k}const at=new p.Mesh.plane({width:2,height:2,coords:!0,normals:!0}),Ot=new p.Shader(`
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
`),Ut=new p.Shader(`
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
`);let we=new p.Texture,Be=new p.Texture,st=!1,Ye=null;const nt=(a,i,n)=>{st=!0,we=new p.Texture(a,i,{type:n.FLOAT,filter:n.NEAREST}),Be=new p.Texture(a,i,{type:n.FLOAT,filter:n.NEAREST}),Ye=n.createFramebuffer(),n.bindFramebuffer(n.FRAMEBUFFER,Ye);const c=n.COLOR_ATTACHMENT0;n.framebufferTexture2D(n.FRAMEBUFFER,c,n.TEXTURE_2D,we.id,0),n.bindFramebuffer(n.FRAMEBUFFER,null)};function Fe(a){a.x/=t.gl.canvas.width/2,a.x-=1,a.y/=t.gl.canvas.height/2,a.y-=1}const lt=a=>{console.log("take chrono photo : "+a),st||nt(t.gl.canvas.width,t.gl.canvas.height,t.gl);const i=t.params.simulation.poolSize,n=t.gl.project(i.x/2,0,t.distanceFixed+1-i.z/2),c=t.gl.project(-i.x/2,0,t.distanceFixed+1-i.z/2);Fe(n),Fe(c);const u=t.swimmers[0].body.center,f=t.gl.project(u.x,u.y,u.z);Fe(f),Be.drawTo(()=>{we.bind(0),t.gl.activeTexture(t.gl.TEXTURE1),t.gl.bindTexture(t.gl.TEXTURE_2D,t.drawingTexture),t.gl.activeTexture(t.gl.TEXTURE2),t.gl.bindTexture(t.gl.TEXTURE_2D,t.currentVideo.texture),Ot.uniforms({oldPicture:0,screen:1,videoTex:2,distanceFixed:t.distanceFixed,poolSize:[t.params.simulation.poolSize.x,t.params.simulation.poolSize.y,t.params.simulation.poolSize.z],linep1:[n.x,n.y],linep2:[c.x,c.y],center:[f.x,f.y],circleZone:a}).draw(at)}),we.swapWith(Be),t.gl.bindFramebuffer(t.gl.FRAMEBUFFER,t.drawingFrameBuffer)},Gt=()=>{t.chronoPhotoCircleTime&&t.time>=t.chronoPhotoCircleTime&&(t.chronoPhotoCircleTime=null,lt(!0)),t.gl.bindFramebuffer(t.gl.FRAMEBUFFER,null),we.bind(7),t.gl.activeTexture(t.gl.TEXTURE8),t.gl.bindTexture(t.gl.TEXTURE_2D,t.drawingTexture),Ut.uniforms({picture:7,screen:8}).draw(at)};t._fixTexture=lt;t._clearChronoTexture=nt;function Wt(a){return a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n/g,"<br>")}function Xt(a){var i=Wt(a);i=="WebGL not supported"&&(i='Your browser does not support WebGL.<br>Please see    <a href="http://www.khronos.org/webgl/wiki/Getting_a_WebGL_Implementation">    Getting a WebGL Implementation</a>.');var n=document.getElementById("loading");n.innerHTML=i,n.style.zIndex=1}window.onerror=Xt;var Pe,$;const Ht=10,S=t.gl;var Ee,Ne;V.initAttributes();function ct(){document.getElementById("warning").hidden=!(t.resolution.x*t.resolution.y>3e5&&t.water&&t.params.visualizations.areaConservationEnabled)}let Me=0;function qt(a){Me+=a,Me>=1&&(document.getElementById("fps").innerText=`${(1/a).toFixed(1)} FPS`,Me=0)}function me(){console.log("reset"),document.getElementById("resolution").innerText=`Resolution: ${t.resolution.x} x ${t.resolution.y}`,ct(),Ee=new p.Vector(0,-t.params.simulation.poolSize.z/2+1),t.water.reset(t.resolution),$.flagCenter=Ee,$.flagSize=Ne,$.reset();const a=t.params.simulation.poolSize.x/Ht;let i=t.params.simulation.poolSize.x/2-a/2;for(let n of t.swimmers)n.body.center.x=i,n.startingPoint.x=i,i-=a}function Yt(a){const i=parseFloat(a.target.value);isNaN(i)||(t.setRaceTime(i),t.swimmers.forEach(n=>n.setCurrentDataIndex()))}window.onload=function(){var a=window.devicePixelRatio||1,i=document.getElementById("help");function n(){var o=innerWidth,l=innerHeight;S.canvas.width=o*a,S.canvas.height=l*a,S.canvas.style.width=o+"px",S.canvas.style.height=l+"px",S.viewport(0,0,S.canvas.width,S.canvas.height),S.matrixMode(S.PROJECTION),S.loadIdentity(),S.perspective(t.params.fov,S.canvas.width/S.canvas.height,.01,100),S.matrixMode(S.MODELVIEW),t.resetDrawingTexture(),e()}document.body.appendChild(S.canvas),S.canvas.oncontextmenu=function(o){o.preventDefault()},S.clearColor(0,0,0,1),Ee=new p.Vector(0,-t.params.simulation.poolSize.z/2+1),Ne=.7;const c=document.getElementById("time-slider");c&&c.addEventListener("input",Yt);const u=document.getElementById("drop-zone");let f=0;document.addEventListener("dragenter",o=>{f++,u.style.display="flex"}),document.addEventListener("dragover",o=>{o.preventDefault(),o.dataTransfer.dropEffect="copy"}),document.addEventListener("dragleave",o=>{f--,f===0&&(u.style.display="none")}),Nt(S,me),t._reset=me,setTimeout(()=>{Vt("event-editor")},50),$=new ce(S,t.water,Ee,Ne),Pe=new Ve({xneg:document.getElementById("xneg"),xpos:document.getElementById("xpos"),yneg:document.getElementById("ypos"),ypos:document.getElementById("ypos"),zneg:document.getElementById("zneg"),zpos:document.getElementById("zpos")},S);const x=new V(new p.Vector(0,0,0));if(t.swimmers.push(x),t.water=new ae(t.gl),!t.water.textureA.canDrawTo()||!t.water.textureB.canDrawTo())throw new Error("Rendering to floating-point textures is required but not supported");me();for(var b=0;b<20;b++)t.water.addDrop(Math.random()*2-1,Math.random()*2-1,.06,b&1?.01:-.01);document.getElementById("loading").innerHTML="",n();var P=window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(o){setTimeout(o,0)},L=new Date().getTime();function k(){var o=new Date().getTime();t.paused||(r((o-L)/1e3),e()),L=o,P(k)}P(k),window.onresize=n;var w,O,B,g=-1,R=0,A=1,N=2;const G=3;var U,M;function D(o,l,d){if(U=o,M=l,!d||d.button===0){var h=new p.Raytracer,m=h.getRayForPixel(o*a,l*a),T=h.eye.add(m.multiply(-h.eye.y/m.y));for(let v of t.swimmers){var y=p.Raytracer.hitTestSphere(h.eye,m,v.body.center,v.body.radius);if(y){g=A,B=v,v.body.cinematic=!0,w=y.hit,O=h.getRayForPixel(S.canvas.width/2,S.canvas.height/2).negative();return}}Math.abs(T.x)<t.params.simulation.poolSize.x/2&&Math.abs(T.z)<t.params.simulation.poolSize.z/2&&(g=R,j(o,l))}else d.button===2?g=N:d.button===1&&(g=G)}function j(o,l,d){switch(g){case R:{var h=new p.Raytracer,m=h.getRayForPixel(o*a,l*a),T=h.eye.add(m.multiply(-h.eye.y/m.y));t.water.addDrop(T.x/t.params.simulation.poolSize.x*2,T.z/t.params.simulation.poolSize.z*2,.06,.03),t.paused&&(t.water.updateNormals(),$.updateCaustics(t.water));break}case A:{var h=new p.Raytracer,m=h.getRayForPixel(o*a,l*a),y=-O.dot(h.eye.subtract(w))/O.dot(m),v=h.eye.add(m.multiply(y));const z=B.body.center.add(v.subtract(w)),F=B.body.radius,X=Math.max(F-t.params.simulation.poolSize.x/2,Math.min(t.params.simulation.poolSize.x/2-F,z.x)),W=Math.max(F-t.params.simulation.poolSize.y,Math.min(10,z.y)),J=Math.max(F-t.params.simulation.poolSize.z/2,Math.min(t.params.simulation.poolSize.z/2-F,z.z));B.body.move(new p.Vector(X,W,J)),w=v,t.paused&&$.updateCaustics(t.water);break}case N:{if(d&&d.shiftKey){t.angleZ-=o-U,t.angleZ=Math.max(-89.999,Math.min(89.999,t.angleZ));break}t.angleY-=o-U,t.angleX-=l-M,t.angleX=Math.max(-89.999,Math.min(89.999,t.angleX));break}case G:{const _=.001*t.zoomDistance;t.translateX+=_*(o-U),t.translateY-=_*(l-M)}}U=o,M=l,t.paused&&e()}function te(){g=-1,B&&(B.body.cinematic=!V.useGravity)}function I(o){return o===i||o.parentNode&&I(o.parentNode)}function H(o){return o&&(o.id==="event-editor"||o.parentNode&&H(o.parentNode))}function Y(o){t.zoomDistance*=1-o*2e-4,t.zoomDistance=Math.max(2,Math.min(1e3,t.zoomDistance)),t.paused&&e()}addEventListener("wheel",function(o){if(!H(o.target)){var l=o.deltaY;Y(-l)}}),document.onmousedown=function(o){S.canvas.focus(),I(o.target)||D(o.pageX,o.pageY,o)},document.onmousemove=function(o){j(o.pageX,o.pageY,o)},document.onmouseup=function(){te()},document.ontouchstart=function(o){o.touches.length===1&&!I(o.target)&&(o.preventDefault(),D(o.touches[0].pageX,o.touches[0].pageY,!1))},document.ontouchmove=function(o){o.touches.length===1&&j(o.touches[0].pageX,o.touches[0].pageY)},document.ontouchend=function(o){o.touches.length==0&&te()};function K(){t.paused?t.play():t.pause()}const E=async function(o){if(o.which==32)K();else if(o.which==71)t.useGravity(!V.useGravity);else if(o.which==76&&t.paused)e();else if(o.which==74)t.swimmers.forEach(l=>l.jump(2));else if(o.which==67)t.params.visualizations.areaConservationEnabled=!t.params.visualizations.areaConservationEnabled,ct(),console.log("Area conservation "+(t.params.visualizations.areaConservationEnabled?"enabled.":"disabled."));else if(o.which==80)t.water.showProjectionGrid=!t.water.showProjectionGrid,console.log("Projection grid "+(t.water.showProjectionGrid?"enabled.":"disabled."));else if(o.which==65)t.water.showAreaConservedGrid=!t.water.showAreaConservedGrid,console.log("Area conserved grid "+(t.water.showAreaConservedGrid?"enabled.":"disabled."));else if(o.which==83){if(V.swimming=!V.swimming,V.swimming)for(let l of t.swimmers)l.swim(!0);else stopRace();console.log("Swimming "+(V.swimming?"enabled.":"disabled."))}else o.which==86?t.params.video.show=!t.params.video.show:o.which==72?(document.getElementById("commands").hidden=!document.getElementById("commands").hidden,document.getElementById("h").hidden=!document.getElementById("h").hidden):o.which==68?t.playingDemo?t.stopDemo():await t.launchDemo():o.which==81?t.chronoPhotography({}):o.which==82?(t.setScene("100m freestyle").then(()=>t.startRace()),t._setPannelMinimized(!0)):o.which==77?t.setMVPMI():o.which==75?t.recalibrate():o.which==40?(t.resolution.x>129&&(t.resolution.x=Math.round(t.resolution.x/2)),me(),console.log("decreasing x resolution")):o.which==38?(t.resolution.x<16384&&(t.resolution.x=Math.round(t.resolution.x*2)),me(),console.log("increasing x resolution")):o.which==37?(t.resolution.y>129&&(t.resolution.y=Math.round(t.resolution.y/2)),me(),console.log("decreasing y resolution")):o.which==39&&(t.resolution.y<16384&&(t.resolution.y=Math.round(t.resolution.y*2)),me(),console.log("increasing y resolution"))};S.canvas.addEventListener("keydown",E);function r(o){if(!(o>1)){if(g==A)for(let l of t.swimmers)l.body.velocity=new p.Vector(0,0,0);S.clearColor(0,0,0,1),S.bindFramebuffer(S.FRAMEBUFFER,null),S.clear(S.COLOR_BUFFER_BIT|S.DEPTH_BUFFER_BIT);for(let l of t.swimmers)l.update(o);t.updateFloaters(o),t.water.updateSpheres(o);for(let l=0;l<t.params.numSteps;l++)t.water.stepSimulation(o);$.updateCaustics(t.water),t.updateTime(o),t.updateParams(),c.value=t.getRaceTime(),qt(o),t.updateDemo(o),t.splashParticles.update(o),t.bubbleSpheres.forEach(l=>l.update(o))}}function s(){if(!V.raceHasStarted||!t.params.cornerView.show)return;t.cornerView=!0,S.loadIdentity(),S.translate(0,0,-35),S.rotate(90,1,0,0),S.rotate(-90,0,1,0),S.translate(0,.5,0);const o=S.canvas.height/3,l=16*o/9,d=0,h=S.canvas.height-o;S.viewport(d,h,l,o),$.renderWater(t.water,Pe,t.params.visualizations.shadow),t.isSceneSynchronizedSwimming()&&(t.params.visualizations.showStreaks||t.params.simulation.splashes.enabled)&&t.splashParticles.draw({}),$.renderSpheres(t.water),S.viewport(0,0,S.canvas.width,S.canvas.height),S.loadIdentity(),S.translate(t.translateX,t.translateY,-t.zoomDistance),S.rotate(-t.angleZ,0,0,1),S.rotate(-t.angleX,1,0,0),S.rotate(-t.angleY,0,1,0),S.translate(0,.5,0),t.cornerView=!1}function e(){p.keys.L&&($.lightDir=p.Vector.fromAngles((90-t.angleY)*Math.PI/180,-t.angleX*Math.PI/180),t.paused&&$.updateCaustics(t.water)),V.updateAttributesTexture(),t.water.addOrRemoveVisualizationWaves(!0),t.water.updateNormals(),S.clearColor(.1,.2,.5,1),S.bindFramebuffer(S.FRAMEBUFFER,t.drawingFrameBuffer),S.clear(S.COLOR_BUFFER_BIT|S.DEPTH_BUFFER_BIT),S.loadIdentity(),S.translate(t.translateX,t.translateY,-t.zoomDistance),S.rotate(-t.angleZ,0,0,1),S.rotate(-t.angleX,1,0,0),S.rotate(-t.angleY,0,1,0),S.translate(0,.5,0),S.enable(S.DEPTH_TEST),S.disable(S.BLEND),S.viewport(0,0,S.canvas.width,S.canvas.height),$.sphereCenter=t.swimmers[0].body.center,$.sphereRadius=t.swimmers[0].body.radius,$.renderCube(t.water),$.renderWater(t.water,Pe,t.params.visualizations.shadow),$.renderSpheres(t.water),S.disable(S.DEPTH_TEST);const o={};(t.params.visualizations.showStreaks||t.params.simulation.splashes.enabled)&&t.splashParticles.draw(o),t.renderVideo(),t.params.chronoPhotography.available&&Gt(),s(),t.water.addOrRemoveVisualizationWaves(!1)}};
//# sourceMappingURL=swimming-B3GDUqj_.js.map
