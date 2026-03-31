var ht=Object.defineProperty;var Ve=a=>{throw TypeError(a)};var mt=(a,t,n)=>t in a?ht(a,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[t]=n;var ie=(a,t,n)=>mt(a,typeof t!="symbol"?t+"":t,n),ut=(a,t,n)=>t.has(a)||Ve("Cannot "+n);var ve=(a,t,n)=>t.has(a)?Ve("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(a):t.set(a,n);var Z=(a,t,n)=>(ut(a,t,"access private method"),n);import"./modulepreload-polyfill-B5Qt9EMX.js";import{g as ft}from"./lil-gui.module.min-Vka56b52.js";var p=function(){var a,t={create:function(o){o=o||{};var s=document.createElement("canvas");s.width=800,s.height=600,"alpha"in o||(o.alpha=!1);try{a=s.getContext("webgl2",o)}catch{}try{a=a||s.getContext("experimental-webgl",o)}catch{}if(!a)throw new Error("WebGL not supported");return a.HALF_FLOAT_OES=36193,n(),c(),u(),P(),a},keys:{},Matrix:w,Indexer:V,Buffer:B,Mesh:g,HitTest:N,Raytracer:G,Shader:D,Texture:I,Vector:E};function n(){a.MODELVIEW=L|1,a.PROJECTION=L|2;var o=new w,s=new w;a.modelviewMatrix=new w,a.projectionMatrix=new w;var e=[],r=[],l,d;a.matrixMode=function(h){switch(h){case a.MODELVIEW:l="modelviewMatrix",d=e;break;case a.PROJECTION:l="projectionMatrix",d=r;break;default:throw new Error("invalid matrix mode "+h)}},a.loadIdentity=function(){w.identity(a[l])},a.loadMatrix=function(h){for(var m=h.m,T=a[l].m,y=0;y<16;y++)T[y]=m[y]},a.multMatrix=function(h){a.loadMatrix(w.multiply(a[l],h,s))},a.perspective=function(h,m,T,y){a.multMatrix(w.perspective(h,m,T,y,o))},a.frustum=function(h,m,T,y,v,_){a.multMatrix(w.frustum(h,m,T,y,v,_,o))},a.ortho=function(h,m,T,y,v,_){a.multMatrix(w.ortho(h,m,T,y,v,_,o))},a.scale=function(h,m,T){a.multMatrix(w.scale(h,m,T,o))},a.translate=function(h,m,T){a.multMatrix(w.translate(h,m,T,o))},a.rotate=function(h,m,T,y){a.multMatrix(w.rotate(h,m,T,y,o))},a.lookAt=function(h,m,T,y,v,_,C,z,F){a.multMatrix(w.lookAt(h,m,T,y,v,_,C,z,F,o))},a.pushMatrix=function(){d.push(Array.prototype.slice.call(a[l].m))},a.popMatrix=function(){var h=d.pop();a[l].m=k?new Float32Array(h):h},a.project=function(h,m,T,y,v,_){y=y||a.modelviewMatrix,v=v||a.projectionMatrix,_=_||a.getParameter(a.VIEWPORT);var C=v.transformPoint(y.transformPoint(new E(h,m,T)));return new E(_[0]+_[2]*(C.x*.5+.5),_[1]+_[3]*(C.y*.5+.5),C.z*.5+.5)},a.unProject=function(h,m,T,y,v,_){y=y||a.modelviewMatrix,v=v||a.projectionMatrix,_=_||a.getParameter(a.VIEWPORT);var C=new E((h-_[0])/_[2]*2-1,(m-_[1])/_[3]*2-1,T*2-1);return w.inverse(w.multiply(v,y,o),s).transformPoint(C)},a.matrixMode(a.MODELVIEW)}function c(){var o={mesh:new g({coords:!0,colors:!0,triangles:!1}),mode:-1,coord:[0,0,0,0],color:[1,1,1,1],shader:new D("      uniform float pointSize;      out vec4 color;      out vec4 coord;      void main() {        color = gl_Color;        coord = gl_TexCoord;        gl_Position = gl_ModelViewProjectionMatrix * gl_Vertex;        gl_PointSize = pointSize;      }    ","      uniform sampler2D tex;      uniform float pointSize;      uniform bool useTexture;      in vec4 color;      in vec4 coord;      out vec4 fragColor;      void main() {        fragColor = color;        if (useTexture) fragColor *= texture(tex, coord.xy);      }    ")};a.pointSize=function(s){o.shader.uniforms({pointSize:s})},a.begin=function(s){if(o.mode!=-1)throw new Error("mismatched gl.begin() and gl.end() calls");o.mode=s,o.mesh.colors=[],o.mesh.coords=[],o.mesh.vertices=[]},a.color=function(s,e,r,l){o.color=arguments.length==1?s.toArray().concat(1):[s,e,r,l||1]},a.texCoord=function(s,e){o.coord=arguments.length==1?s.toArray(2):[s,e]},a.vertex=function(s,e,r){o.mesh.colors.push(o.color),o.mesh.coords.push(o.coord),o.mesh.vertices.push(arguments.length==1?s.toArray():[s,e,r])},a.end=function(){if(o.mode==-1)throw new Error("mismatched gl.begin() and gl.end() calls");o.mesh.compile(),o.shader.uniforms({useTexture:!!a.getParameter(a.TEXTURE_BINDING_2D)}).draw(o.mesh,o.mode),o.mode=-1}}function u(){var o=a,s=0,e=0,r={},l=!1,d=Object.prototype.hasOwnProperty;function h(){for(var z in r)if(d.call(r,z)&&r[z])return!0;return!1}function m(z){var F={};for(var X in z)typeof z[X]=="function"?F[X]=function(J){return function(){J.apply(z,arguments)}}(z[X]):F[X]=z[X];F.original=z,F.x=F.pageX,F.y=F.pageY;for(var W=a.canvas;W;W=W.offsetParent)F.x-=W.offsetLeft,F.y-=W.offsetTop;return l?(F.deltaX=F.x-s,F.deltaY=F.y-e):(F.deltaX=0,F.deltaY=0,l=!0),s=F.x,e=F.y,F.dragging=h(),F.preventDefault=function(){F.original.preventDefault()},F.stopPropagation=function(){F.original.stopPropagation()},F}function T(z){a=o,h()||(x(document,"mousemove",y),x(document,"mouseup",v),b(a.canvas,"mousemove",y),b(a.canvas,"mouseup",v)),r[z.which]=!0,z=m(z),a.onmousedown&&a.onmousedown(z),z.preventDefault()}function y(z){a=o,z=m(z),a.onmousemove&&a.onmousemove(z),z.preventDefault()}function v(z){a=o,r[z.which]=!1,h()||(b(document,"mousemove",y),b(document,"mouseup",v),x(a.canvas,"mousemove",y),x(a.canvas,"mouseup",v)),z=m(z),a.onmouseup&&a.onmouseup(z),z.preventDefault()}function _(){l=!1}function C(){r={},l=!1}x(a.canvas,"mousedown",T),x(a.canvas,"mousemove",y),x(a.canvas,"mouseup",v),x(a.canvas,"mouseover",_),x(a.canvas,"mouseout",_),x(document,"contextmenu",C)}function f(o){var s={8:"BACKSPACE",9:"TAB",13:"ENTER",16:"SHIFT",27:"ESCAPE",32:"SPACE",37:"LEFT",38:"UP",39:"RIGHT",40:"DOWN"};return s[o]||(o>=65&&o<=90?String.fromCharCode(o):null)}function x(o,s,e){o.addEventListener(s,e)}function b(o,s,e){o.removeEventListener(s,e)}x(document,"keydown",function(o){if(!o.altKey&&!o.ctrlKey&&!o.metaKey){var s=f(o.keyCode);s&&(t.keys[s]=!0),t.keys[o.keyCode]=!0}}),x(document,"keyup",function(o){if(!o.altKey&&!o.ctrlKey&&!o.metaKey){var s=f(o.keyCode);s&&(t.keys[s]=!1),t.keys[o.keyCode]=!1}});function P(){(function(o){a.makeCurrent=function(){a=o}})(a),a.animate=function(){var o=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(l){setTimeout(l,16.666666666666668)},s=new Date().getTime(),e=a;function r(){a=e;var l=new Date().getTime();a.onupdate&&a.onupdate((l-s)/1e3),a.ondraw&&a.ondraw(),o(r),s=l}r()},a.fullscreen=function(o){o=o||{};var s=o.paddingTop||0,e=o.paddingLeft||0,r=o.paddingRight||0,l=o.paddingBottom||0;if(!document.body)throw new Error("document.body doesn't exist yet (call gl.fullscreen() from window.onload() or from inside the <body> tag)");document.body.appendChild(a.canvas),document.body.style.overflow="hidden",a.canvas.style.position="absolute",a.canvas.style.left=e+"px",a.canvas.style.top=s+"px";function d(){a.canvas.width=window.innerWidth-e-r,a.canvas.height=window.innerHeight-s-l,a.viewport(0,0,a.canvas.width,a.canvas.height),(o.camera||!("camera"in o))&&(a.matrixMode(a.PROJECTION),a.loadIdentity(),a.perspective(o.fov||45,a.canvas.width/a.canvas.height,o.near||.1,o.far||1e3),a.matrixMode(a.MODELVIEW)),a.ondraw&&a.ondraw()}x(window,"resize",d),d()}}var L=305397760,k=typeof Float32Array<"u";function w(){var o=Array.prototype.concat.apply([],arguments);o.length||(o=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),this.m=k?new Float32Array(o):o}w.prototype={inverse:function(){return w.inverse(this,new w)},transpose:function(){return w.transpose(this,new w)},multiply:function(o){return w.multiply(this,o,new w)},transformPoint:function(o){var s=this.m;return new E(s[0]*o.x+s[1]*o.y+s[2]*o.z+s[3],s[4]*o.x+s[5]*o.y+s[6]*o.z+s[7],s[8]*o.x+s[9]*o.y+s[10]*o.z+s[11]).divide(s[12]*o.x+s[13]*o.y+s[14]*o.z+s[15])},transformVector:function(o){var s=this.m;return new E(s[0]*o.x+s[1]*o.y+s[2]*o.z,s[4]*o.x+s[5]*o.y+s[6]*o.z,s[8]*o.x+s[9]*o.y+s[10]*o.z)}},w.inverse=function(o,s){s=s||new w;var e=o.m,r=s.m;r[0]=e[5]*e[10]*e[15]-e[5]*e[14]*e[11]-e[6]*e[9]*e[15]+e[6]*e[13]*e[11]+e[7]*e[9]*e[14]-e[7]*e[13]*e[10],r[1]=-e[1]*e[10]*e[15]+e[1]*e[14]*e[11]+e[2]*e[9]*e[15]-e[2]*e[13]*e[11]-e[3]*e[9]*e[14]+e[3]*e[13]*e[10],r[2]=e[1]*e[6]*e[15]-e[1]*e[14]*e[7]-e[2]*e[5]*e[15]+e[2]*e[13]*e[7]+e[3]*e[5]*e[14]-e[3]*e[13]*e[6],r[3]=-e[1]*e[6]*e[11]+e[1]*e[10]*e[7]+e[2]*e[5]*e[11]-e[2]*e[9]*e[7]-e[3]*e[5]*e[10]+e[3]*e[9]*e[6],r[4]=-e[4]*e[10]*e[15]+e[4]*e[14]*e[11]+e[6]*e[8]*e[15]-e[6]*e[12]*e[11]-e[7]*e[8]*e[14]+e[7]*e[12]*e[10],r[5]=e[0]*e[10]*e[15]-e[0]*e[14]*e[11]-e[2]*e[8]*e[15]+e[2]*e[12]*e[11]+e[3]*e[8]*e[14]-e[3]*e[12]*e[10],r[6]=-e[0]*e[6]*e[15]+e[0]*e[14]*e[7]+e[2]*e[4]*e[15]-e[2]*e[12]*e[7]-e[3]*e[4]*e[14]+e[3]*e[12]*e[6],r[7]=e[0]*e[6]*e[11]-e[0]*e[10]*e[7]-e[2]*e[4]*e[11]+e[2]*e[8]*e[7]+e[3]*e[4]*e[10]-e[3]*e[8]*e[6],r[8]=e[4]*e[9]*e[15]-e[4]*e[13]*e[11]-e[5]*e[8]*e[15]+e[5]*e[12]*e[11]+e[7]*e[8]*e[13]-e[7]*e[12]*e[9],r[9]=-e[0]*e[9]*e[15]+e[0]*e[13]*e[11]+e[1]*e[8]*e[15]-e[1]*e[12]*e[11]-e[3]*e[8]*e[13]+e[3]*e[12]*e[9],r[10]=e[0]*e[5]*e[15]-e[0]*e[13]*e[7]-e[1]*e[4]*e[15]+e[1]*e[12]*e[7]+e[3]*e[4]*e[13]-e[3]*e[12]*e[5],r[11]=-e[0]*e[5]*e[11]+e[0]*e[9]*e[7]+e[1]*e[4]*e[11]-e[1]*e[8]*e[7]-e[3]*e[4]*e[9]+e[3]*e[8]*e[5],r[12]=-e[4]*e[9]*e[14]+e[4]*e[13]*e[10]+e[5]*e[8]*e[14]-e[5]*e[12]*e[10]-e[6]*e[8]*e[13]+e[6]*e[12]*e[9],r[13]=e[0]*e[9]*e[14]-e[0]*e[13]*e[10]-e[1]*e[8]*e[14]+e[1]*e[12]*e[10]+e[2]*e[8]*e[13]-e[2]*e[12]*e[9],r[14]=-e[0]*e[5]*e[14]+e[0]*e[13]*e[6]+e[1]*e[4]*e[14]-e[1]*e[12]*e[6]-e[2]*e[4]*e[13]+e[2]*e[12]*e[5],r[15]=e[0]*e[5]*e[10]-e[0]*e[9]*e[6]-e[1]*e[4]*e[10]+e[1]*e[8]*e[6]+e[2]*e[4]*e[9]-e[2]*e[8]*e[5];for(var l=e[0]*r[0]+e[1]*r[4]+e[2]*r[8]+e[3]*r[12],d=0;d<16;d++)r[d]/=l;return s},w.transpose=function(o,s){s=s||new w;var e=o.m,r=s.m;return r[0]=e[0],r[1]=e[4],r[2]=e[8],r[3]=e[12],r[4]=e[1],r[5]=e[5],r[6]=e[9],r[7]=e[13],r[8]=e[2],r[9]=e[6],r[10]=e[10],r[11]=e[14],r[12]=e[3],r[13]=e[7],r[14]=e[11],r[15]=e[15],s},w.multiply=function(o,s,e){e=e||new w;var r=o.m,l=s.m,d=e.m;return d[0]=r[0]*l[0]+r[1]*l[4]+r[2]*l[8]+r[3]*l[12],d[1]=r[0]*l[1]+r[1]*l[5]+r[2]*l[9]+r[3]*l[13],d[2]=r[0]*l[2]+r[1]*l[6]+r[2]*l[10]+r[3]*l[14],d[3]=r[0]*l[3]+r[1]*l[7]+r[2]*l[11]+r[3]*l[15],d[4]=r[4]*l[0]+r[5]*l[4]+r[6]*l[8]+r[7]*l[12],d[5]=r[4]*l[1]+r[5]*l[5]+r[6]*l[9]+r[7]*l[13],d[6]=r[4]*l[2]+r[5]*l[6]+r[6]*l[10]+r[7]*l[14],d[7]=r[4]*l[3]+r[5]*l[7]+r[6]*l[11]+r[7]*l[15],d[8]=r[8]*l[0]+r[9]*l[4]+r[10]*l[8]+r[11]*l[12],d[9]=r[8]*l[1]+r[9]*l[5]+r[10]*l[9]+r[11]*l[13],d[10]=r[8]*l[2]+r[9]*l[6]+r[10]*l[10]+r[11]*l[14],d[11]=r[8]*l[3]+r[9]*l[7]+r[10]*l[11]+r[11]*l[15],d[12]=r[12]*l[0]+r[13]*l[4]+r[14]*l[8]+r[15]*l[12],d[13]=r[12]*l[1]+r[13]*l[5]+r[14]*l[9]+r[15]*l[13],d[14]=r[12]*l[2]+r[13]*l[6]+r[14]*l[10]+r[15]*l[14],d[15]=r[12]*l[3]+r[13]*l[7]+r[14]*l[11]+r[15]*l[15],e},w.identity=function(o){o=o||new w;var s=o.m;return s[0]=s[5]=s[10]=s[15]=1,s[1]=s[2]=s[3]=s[4]=s[6]=s[7]=s[8]=s[9]=s[11]=s[12]=s[13]=s[14]=0,o},w.perspective=function(o,s,e,r,l){var d=Math.tan(o*Math.PI/360)*e,h=d*s;return w.frustum(-h,h,-d,d,e,r,l)},w.frustum=function(o,s,e,r,l,d,h){h=h||new w;var m=h.m;return m[0]=2*l/(s-o),m[1]=0,m[2]=(s+o)/(s-o),m[3]=0,m[4]=0,m[5]=2*l/(r-e),m[6]=(r+e)/(r-e),m[7]=0,m[8]=0,m[9]=0,m[10]=-(d+l)/(d-l),m[11]=-2*d*l/(d-l),m[12]=0,m[13]=0,m[14]=-1,m[15]=0,h},w.ortho=function(o,s,e,r,l,d,h){h=h||new w;var m=h.m;return m[0]=2/(s-o),m[1]=0,m[2]=0,m[3]=-(s+o)/(s-o),m[4]=0,m[5]=2/(r-e),m[6]=0,m[7]=-(r+e)/(r-e),m[8]=0,m[9]=0,m[10]=-2/(d-l),m[11]=-(d+l)/(d-l),m[12]=0,m[13]=0,m[14]=0,m[15]=1,h},w.scale=function(o,s,e,r){r=r||new w;var l=r.m;return l[0]=o,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=s,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=e,l[11]=0,l[12]=0,l[13]=0,l[14]=0,l[15]=1,r},w.translate=function(o,s,e,r){r=r||new w;var l=r.m;return l[0]=1,l[1]=0,l[2]=0,l[3]=o,l[4]=0,l[5]=1,l[6]=0,l[7]=s,l[8]=0,l[9]=0,l[10]=1,l[11]=e,l[12]=0,l[13]=0,l[14]=0,l[15]=1,r},w.rotate=function(o,s,e,r,l){if(!o||!s&&!e&&!r)return w.identity(l);l=l||new w;var d=l.m,h=Math.sqrt(s*s+e*e+r*r);o*=Math.PI/180,s/=h,e/=h,r/=h;var m=Math.cos(o),T=Math.sin(o),y=1-m;return d[0]=s*s*y+m,d[1]=s*e*y-r*T,d[2]=s*r*y+e*T,d[3]=0,d[4]=e*s*y+r*T,d[5]=e*e*y+m,d[6]=e*r*y-s*T,d[7]=0,d[8]=r*s*y-e*T,d[9]=r*e*y+s*T,d[10]=r*r*y+m,d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,l},w.lookAt=function(o,s,e,r,l,d,h,m,T,y){y=y||new w;var v=y.m,_=new E(o,s,e),C=new E(r,l,d),z=new E(h,m,T),F=_.subtract(C).unit(),X=z.cross(F).unit(),W=F.cross(X).unit();return v[0]=X.x,v[1]=X.y,v[2]=X.z,v[3]=-X.dot(_),v[4]=W.x,v[5]=W.y,v[6]=W.z,v[7]=-W.dot(_),v[8]=F.x,v[9]=F.y,v[10]=F.z,v[11]=-F.dot(_),v[12]=0,v[13]=0,v[14]=0,v[15]=1,y};function V(){this.unique=[],this.indices=[],this.map={}}V.prototype={add:function(o){var s=JSON.stringify(o);return s in this.map||(this.map[s]=this.unique.length,this.unique.push(o)),this.map[s]}};function B(o,s){this.buffer=null,this.target=o,this.type=s,this.data=[]}B.prototype={compile:function(o){for(var s=[],e=0,r=1e4;e<this.data.length;e+=r)s=Array.prototype.concat.apply(s,this.data.slice(e,e+r));var l=this.data.length?s.length/this.data.length:0;if(l!=Math.round(l))throw new Error("buffer elements not of consistent size, average size is "+l);this.buffer=this.buffer||a.createBuffer(),this.buffer.length=s.length,this.buffer.spacing=l,a.bindBuffer(this.target,this.buffer),a.bufferData(this.target,new this.type(s),o||a.STATIC_DRAW)}};function g(o){o=o||{},this.vertexBuffers={},this.indexBuffers={},this.addVertexBuffer("vertices","gl_Vertex"),o.coords&&this.addVertexBuffer("coords","gl_TexCoord"),o.normals&&this.addVertexBuffer("normals","gl_Normal"),o.colors&&this.addVertexBuffer("colors","gl_Color"),(!("triangles"in o)||o.triangles)&&this.addIndexBuffer("triangles"),o.lines&&this.addIndexBuffer("lines")}g.prototype={addVertexBuffer:function(o,s){var e=this.vertexBuffers[s]=new B(a.ARRAY_BUFFER,Float32Array);e.name=o,this[o]=[]},addIndexBuffer:function(o){this.indexBuffers[o]=new B(a.ELEMENT_ARRAY_BUFFER,Uint16Array),this[o]=[]},compile:function(){for(var o in this.vertexBuffers){var s=this.vertexBuffers[o];s.data=this[s.name],s.compile()}for(var e in this.indexBuffers){var s=this.indexBuffers[e];s.data=this[e],s.compile()}},transform:function(o){if(this.vertices=this.vertices.map(function(e){return o.transformPoint(E.fromArray(e)).toArray()}),this.normals){var s=o.inverse().transpose();this.normals=this.normals.map(function(e){return s.transformVector(E.fromArray(e)).unit().toArray()})}return this.compile(),this},computeNormals:function(){this.normals||this.addVertexBuffer("normals","gl_Normal");for(var o=0;o<this.vertices.length;o++)this.normals[o]=new E;for(var o=0;o<this.triangles.length;o++){var s=this.triangles[o],e=E.fromArray(this.vertices[s[0]]),r=E.fromArray(this.vertices[s[1]]),l=E.fromArray(this.vertices[s[2]]),d=r.subtract(e).cross(l.subtract(e)).unit();this.normals[s[0]]=this.normals[s[0]].add(d),this.normals[s[1]]=this.normals[s[1]].add(d),this.normals[s[2]]=this.normals[s[2]].add(d)}for(var o=0;o<this.vertices.length;o++)this.normals[o]=this.normals[o].unit().toArray();return this.compile(),this},computeWireframe:function(){for(var o=new V,s=0;s<this.triangles.length;s++)for(var e=this.triangles[s],r=0;r<e.length;r++){var l=e[r],d=e[(r+1)%e.length];o.add([Math.min(l,d),Math.max(l,d)])}return this.lines||this.addIndexBuffer("lines"),this.lines=o.unique,this.compile(),this},getAABB:function(){var o={min:new E(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)};o.max=o.min.negative();for(var s=0;s<this.vertices.length;s++){var e=E.fromArray(this.vertices[s]);o.min=E.min(o.min,e),o.max=E.max(o.max,e)}return o},getBoundingSphere:function(){for(var o=this.getAABB(),s={center:o.min.add(o.max).divide(2),radius:0},e=0;e<this.vertices.length;e++)s.radius=Math.max(s.radius,E.fromArray(this.vertices[e]).subtract(s.center).length());return s}},g.plane=function(o){o=o||{};for(var s=new g(o),e=o.detailX||o.detail||1,r=o.detailY||o.detail||1,l=o.width||2,d=o.height||2,h=0;h<=r;h++)for(var m=h/r,T=0;T<=e;T++){var y=T/e;if(s.vertices.push([(y-.5)*l,(m-.5)*d,0]),s.coords&&s.coords.push([y,m]),s.normals&&s.normals.push([0,0,1]),T<e&&h<r){var v=T+h*(e+1);s.triangles.push([v,v+1,v+e+1]),s.triangles.push([v+e+1,v+1,v+e+2])}}return s.compile(),s};var R=[[0,4,2,6,-1,0,0],[1,3,5,7,1,0,0],[0,1,4,5,0,-1,0],[2,6,3,7,0,1,0],[0,2,1,3,0,0,-1],[4,5,6,7,0,0,1]];function A(o){return new E((o&1)*2-1,(o&2)-1,(o&4)/2-1)}g.cube=function(o){for(var s=new g(o),e=o&&o.width||2,r=o&&o.height||2,l=o&&o.depth||2,d=0;d<R.length;d++){for(var h=R[d],m=d*4,T=0;T<4;T++){var y=h[T];const v=A(y).toArray();v[0]*=e/2,v[1]*=r/2,v[2]*=l/2,s.vertices.push(v),s.coords&&s.coords.push([T&1,(T&2)/2]),s.normals&&s.normals.push(h.slice(4,7))}s.triangles.push([m,m+1,m+2]),s.triangles.push([m+2,m+1,m+3])}return s.compile(),s},g.sphere=function(o){function s(W,J,re){return T?[W,re,J]:[W,J,re]}function e(W){return W+(W-W*W)/2}o=o||{};for(var r=new g(o),l=new V,d=o.detail||6,h=0;h<8;h++)for(var m=A(h),T=m.x*m.y*m.z>0,y=[],v=0;v<=d;v++){for(var _=0;v+_<=d;_++){var C=v/d,z=_/d,F=(d-v-_)/d,X={vertex:new E(e(C),e(z),e(F)).unit().multiply(m).toArray()};r.coords&&(X.coord=m.y>0?[1-C,F]:[F,1-C]),y.push(l.add(X))}if(v>0)for(var _=0;v+_<=d;_++){var C=(v-1)*(d+1)+(v-1-(v-1)*(v-1))/2+_,z=v*(d+1)+(v-v*v)/2+_;r.triangles.push(s(y[C],y[C+1],y[z])),v+_<d&&r.triangles.push(s(y[z],y[C+1],y[z+1]))}}return r.vertices=l.unique.map(function(W){return W.vertex}),r.coords&&(r.coords=l.unique.map(function(W){return W.coord})),r.normals&&(r.normals=r.vertices),r.compile(),r},g.load=function(o,s){s=s||{},"coords"in s||(s.coords=!!o.coords),"normals"in s||(s.normals=!!o.normals),"colors"in s||(s.colors=!!o.colors),"triangles"in s||(s.triangles=!!o.triangles),"lines"in s||(s.lines=!!o.lines);var e=new g(s);return e.vertices=o.vertices,e.coords&&(e.coords=o.coords),e.normals&&(e.normals=o.normals),e.colors&&(e.colors=o.colors),e.triangles&&(e.triangles=o.triangles),e.lines&&(e.lines=o.lines),e.compile(),e};function N(o,s,e){this.t=arguments.length?o:Number.MAX_VALUE,this.hit=s,this.normal=e}N.prototype={mergeWith:function(o){o.t>0&&o.t<this.t&&(this.t=o.t,this.hit=o.hit,this.normal=o.normal)}};function G(){var o=a.getParameter(a.VIEWPORT),s=a.modelviewMatrix.m,e=new E(s[0],s[4],s[8]),r=new E(s[1],s[5],s[9]),l=new E(s[2],s[6],s[10]),d=new E(s[3],s[7],s[11]);this.eye=new E(-d.dot(e),-d.dot(r),-d.dot(l));var h=o[0],m=h+o[2],T=o[1],y=T+o[3];this.ray00=a.unProject(h,T,1).subtract(this.eye),this.ray10=a.unProject(m,T,1).subtract(this.eye),this.ray01=a.unProject(h,y,1).subtract(this.eye),this.ray11=a.unProject(m,y,1).subtract(this.eye),this.viewport=o}G.prototype={getRayForPixel:function(o,s){o=(o-this.viewport[0])/this.viewport[2],s=1-(s-this.viewport[1])/this.viewport[3];var e=E.lerp(this.ray00,this.ray10,o),r=E.lerp(this.ray01,this.ray11,o);return E.lerp(e,r,s).unit()}},G.hitTestBox=function(o,s,e,r){var l=e.subtract(o).divide(s),d=r.subtract(o).divide(s),h=E.min(l,d),m=E.max(l,d),T=h.max(),y=m.min();if(T>0&&T<y){var v=1e-6,_=o.add(s.multiply(T));return e=e.add(v),r=r.subtract(v),new N(T,_,new E((_.x>r.x)-(_.x<e.x),(_.y>r.y)-(_.y<e.y),(_.z>r.z)-(_.z<e.z)))}return null},G.hitTestSphere=function(o,s,e,r){var l=o.subtract(e),d=s.dot(s),h=2*s.dot(l),m=l.dot(l)-r*r,T=h*h-4*d*m;if(T>0){var y=(-h-Math.sqrt(T))/(2*d),v=o.add(s.multiply(y));return new N(y,v,v.subtract(e).divide(r))}return null},G.hitTestTriangle=function(o,s,e,r,l){var d=r.subtract(e),h=l.subtract(e),m=d.cross(h).unit(),T=m.dot(e.subtract(o))/m.dot(s);if(T>0){var y=o.add(s.multiply(T)),v=y.subtract(e),_=h.dot(h),C=h.dot(d),z=h.dot(v),F=d.dot(d),X=d.dot(v),W=_*F-C*C,J=(F*z-C*X)/W,re=(_*X-C*z)/W;if(J>=0&&re>=0&&J+re<=1)return new N(T,y,m)}return null};function U(o,s,e){let r;for(;(r=o.exec(s))!=null;)e(r)}var M="LIGHTGL";function D(o,s){function e(_){var C=document.getElementById(_);return C?C.text:_}o=e(o),s=e(s);var r="    uniform mat3 gl_NormalMatrix;    uniform mat4 gl_ModelViewMatrix;    uniform mat4 gl_ProjectionMatrix;    uniform mat4 gl_ModelViewProjectionMatrix;    uniform mat4 gl_ModelViewMatrixInverse;    uniform mat4 gl_ProjectionMatrixInverse;    uniform mat4 gl_ModelViewProjectionMatrixInverse;  ",l=`#version 300 es
    `+r+"    in vec4 gl_Vertex;    in vec4 gl_TexCoord;    in vec3 gl_Normal;    in vec4 gl_Color;    vec4 ftransform() {      return gl_ModelViewProjectionMatrix * gl_Vertex;    }  ",d=`#version 300 es
    precision highp float;
  `+r,h=o+s,m={};U(/\b(gl_[^;]*)\b;/g,r,function(_){var C=_[1];if(h.indexOf(C)!=-1){var z=C.replace(/[a-z_]/g,"");m[z]=M+C}}),h.indexOf("ftransform")!=-1&&(m.MVPM=M+"gl_ModelViewProjectionMatrix"),this.usedMatrices=m;function T(_,C){var z={},F=/^((\s*\/\/.*\n|\s*#extension.*\n)+)[^]*$/.exec(C);return C=F?F[1]+_+C.substr(F[1].length):_+C,U(/\bgl_\w+\b/g,_,function(X){X in z||(C=C.replace(new RegExp("\\b"+X+"\\b","g"),M+X),z[X]=!0)}),C}o=T(l,o),s=T(d,s);function y(_,C){var z=a.createShader(_);if(a.shaderSource(z,C),a.compileShader(z),!a.getShaderParameter(z,a.COMPILE_STATUS))throw new Error("compile error: "+a.getShaderInfoLog(z));return z}if(this.program=a.createProgram(),a.attachShader(this.program,y(a.VERTEX_SHADER,o)),a.attachShader(this.program,y(a.FRAGMENT_SHADER,s)),a.linkProgram(this.program),!a.getProgramParameter(this.program,a.LINK_STATUS))throw new Error("link error: "+a.getProgramInfoLog(this.program));this.attributes={},this.uniformLocations={};var v={};U(/uniform\s+sampler(1D|2D|3D|Cube)\s+(\w+)\s*;/g,o+s,function(_){v[_[2]]=1}),this.isSampler=v}function j(o){var s=Object.prototype.toString.call(o);return s=="[object Array]"||s=="[object Float32Array]"}function te(o){var s=Object.prototype.toString.call(o);return s=="[object Number]"||s=="[object Boolean]"}new w,new w,D.prototype={uniforms:function(o){a.useProgram(this.program);for(var s in o){var e=this.uniformLocations[s]||a.getUniformLocation(this.program,s);if(e){this.uniformLocations[s]=e;var r=o[s];if(r instanceof E?r=[r.x,r.y,r.z]:r instanceof w&&(r=r.m),j(r))switch(r.length){case 1:a.uniform1fv(e,new Float32Array(r));break;case 2:a.uniform2fv(e,new Float32Array(r));break;case 3:a.uniform3fv(e,new Float32Array(r));break;case 4:a.uniform4fv(e,new Float32Array(r));break;case 9:a.uniformMatrix3fv(e,!1,new Float32Array([r[0],r[3],r[6],r[1],r[4],r[7],r[2],r[5],r[8]]));break;case 16:a.uniformMatrix4fv(e,!1,new Float32Array([r[0],r[4],r[8],r[12],r[1],r[5],r[9],r[13],r[2],r[6],r[10],r[14],r[3],r[7],r[11],r[15]]));break;default:throw new Error(`don't know how to load uniform "`+s+'" of length '+r.length)}else if(te(r))(this.isSampler[s]?a.uniform1i:a.uniform1f).call(a,e,r);else throw new Error('attempted to set uniform "'+s+'" to invalid value '+r)}}return this},draw:function(o,s){this.drawBuffers(o.vertexBuffers,o.indexBuffers[s==a.LINES?"lines":"triangles"],arguments.length<2?a.TRIANGLES:s)},drawBuffers:function(o,s,e){var r=this.usedMatrices,l=a.modelviewMatrix,d=a.projectionMatrix,h=r.MVMI||r.NM?l.inverse():null,m=r.PMI?d.inverse():null,T=r.MVPM||r.MVPMI?d.multiply(l):null,y={};if(r.MVM&&(y[r.MVM]=l),r.MVMI&&(y[r.MVMI]=h),r.PM&&(y[r.PM]=d),r.PMI&&(y[r.PMI]=m),r.MVPM&&(y[r.MVPM]=T),r.MVPMI&&(y[r.MVPMI]=T.inverse()),r.NM){var v=h.m;y[r.NM]=[v[0],v[4],v[8],v[1],v[5],v[9],v[2],v[6],v[10]]}this.uniforms(y);var _=0;for(var C in o){var z=o[C],F=this.attributes[C]||a.getAttribLocation(this.program,C.replace(/^(gl_.*)$/,M+"$1"));F==-1||!z.buffer||(this.attributes[C]=F,a.bindBuffer(a.ARRAY_BUFFER,z.buffer),a.enableVertexAttribArray(F),a.vertexAttribPointer(F,z.buffer.spacing,a.FLOAT,!1,0,0),_=z.buffer.length/z.buffer.spacing)}for(var C in this.attributes)C in o||a.disableVertexAttribArray(this.attributes[C]);return _&&(!s||s.buffer)&&(s?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,s.buffer),a.drawElements(e,s.buffer.length,a.UNSIGNED_SHORT,0)):a.drawArrays(e,0,_)),this}};function I(o,s,e){e=e||{},this.width=o,this.height=s,this.id=a.createTexture();let r=e.type||a.UNSIGNED_BYTE,l=e.format||a.RGBA,d=a.RGBA;const h=a.getExtension("EXT_color_buffer_float"),m=a.getExtension("EXT_color_buffer_half_float");r===a.FLOAT?(h?a instanceof WebGL2RenderingContext&&(l=a.RGBA32F):(console.warn("FLOAT textures not renderable, falling back to UNSIGNED_BYTE"),r=a.UNSIGNED_BYTE,l=a.RGBA8),d=a.RGBA):r===a.HALF_FLOAT_OES?(m?a instanceof WebGL2RenderingContext&&(l=a.RGBA16F):(console.warn("HALF_FLOAT textures not renderable, falling back to UNSIGNED_BYTE"),r=a.UNSIGNED_BYTE,l=a.RGBA8),d=a.RGBA):(r=a.UNSIGNED_BYTE,l=a.RGBA8,d=a.RGBA);const T=e.filter||e.magFilter||a.LINEAR,y=e.filter||e.minFilter||a.LINEAR;a.bindTexture(a.TEXTURE_2D,this.id),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,1),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER,T),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,y),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,e.wrap||e.wrapS||a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,e.wrap||e.wrapT||a.CLAMP_TO_EDGE),a instanceof WebGL2RenderingContext?a.texImage2D(a.TEXTURE_2D,0,l,o,s,0,d,r,null):a.texImage2D(a.TEXTURE_2D,0,d,o,s,0,d,r,null),a.bindTexture(a.TEXTURE_2D,null),this.format=d,this.type=r,this.internalFormat=l}var H,Y,K;I.prototype={bind:function(o){a.activeTexture(a.TEXTURE0+(o||0)),a.bindTexture(a.TEXTURE_2D,this.id)},unbind:function(o){a.activeTexture(a.TEXTURE0+(o||0)),a.bindTexture(a.TEXTURE_2D,null)},canDrawTo:function(){H=H||a.createFramebuffer(),a.bindFramebuffer(a.FRAMEBUFFER,H),a.framebufferTexture2D(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,this.id,0);var o=a.checkFramebufferStatus(a.FRAMEBUFFER)==a.FRAMEBUFFER_COMPLETE;return a.bindFramebuffer(a.FRAMEBUFFER,null),o},drawTo:function(o){a.getExtension("EXT_color_buffer_float")||console.warn("EXT_color_buffer_float not available!");var e=a.getParameter(a.VIEWPORT);if(H=H||a.createFramebuffer(),Y=Y||a.createRenderbuffer(),a.bindFramebuffer(a.FRAMEBUFFER,H),a.bindRenderbuffer(a.RENDERBUFFER,Y),(this.width!=Y.width||this.height!=Y.height)&&(Y.width=this.width,Y.height=this.height,a.renderbufferStorage(a.RENDERBUFFER,a.DEPTH_COMPONENT16,this.width,this.height)),a.framebufferTexture2D(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,this.id,0),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.RENDERBUFFER,Y),a.checkFramebufferStatus(a.FRAMEBUFFER)!=a.FRAMEBUFFER_COMPLETE)throw new Error("Rendering to this texture is not supported (incomplete framebuffer)");a.viewport(0,0,this.width,this.height),o(),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindRenderbuffer(a.RENDERBUFFER,null),a.viewport(e[0],e[1],e[2],e[3])},swapWith:function(o){var s;s=o.id,o.id=this.id,this.id=s,s=o.width,o.width=this.width,this.width=s,s=o.height,o.height=this.height,this.height=s}},I.fromImage=function(o,s){s=s||{};var e=new I(o.width,o.height,s);a.bindTexture(a.TEXTURE_2D,e.id);try{a.texImage2D(a.TEXTURE_2D,0,e.format,e.format,e.type,o)}catch{throw location.protocol=="file:"?new Error('image not loaded for security reasons (serve this page over "http://" instead)'):new Error("image not loaded for security reasons (image must originate from the same domain as this page or use Cross-Origin Resource Sharing)")}return s.minFilter&&s.minFilter!=a.NEAREST&&s.minFilter!=a.LINEAR&&a.generateMipmap(a.TEXTURE_2D),a.bindTexture(a.TEXTURE_2D,null),e},I.fromURL=function(o,s){K=K||function(){var d=document.createElement("canvas").getContext("2d");d.canvas.width=d.canvas.height=128;for(var h=0;h<d.canvas.height;h+=16)for(var m=0;m<d.canvas.width;m+=16)d.fillStyle=(m^h)&16?"#FFF":"#DDD",d.fillRect(m,h,16,16);return d.canvas}();var e=I.fromImage(K,s),r=new Image,l=a;return r.onload=function(){l.makeCurrent(),I.fromImage(r,s).swapWith(e)},r.src=o,e},I.canUseFloatingPointTextures=function(){return!!a.getExtension("OES_texture_float")},I.canUseFloatingPointLinearFiltering=function(){return!!a.getExtension("OES_texture_float_linear")},I.canUseHalfFloatingPointTextures=function(){return!!a.getExtension("OES_texture_half_float")},I.canUseHalfFloatingPointLinearFiltering=function(){return!!a.getExtension("OES_texture_half_float_linear")};function E(o,s,e){this.x=o||0,this.y=s||0,this.z=e||0}return E.prototype={negative:function(){return new E(-this.x,-this.y,-this.z)},add:function(o){return o instanceof E?new E(this.x+o.x,this.y+o.y,this.z+o.z):new E(this.x+o,this.y+o,this.z+o)},subtract:function(o){return o instanceof E?new E(this.x-o.x,this.y-o.y,this.z-o.z):new E(this.x-o,this.y-o,this.z-o)},multiply:function(o){return o instanceof E?new E(this.x*o.x,this.y*o.y,this.z*o.z):new E(this.x*o,this.y*o,this.z*o)},divide:function(o){return o instanceof E?new E(this.x/o.x,this.y/o.y,this.z/o.z):new E(this.x/o,this.y/o,this.z/o)},equals:function(o){return this.x==o.x&&this.y==o.y&&this.z==o.z},dot:function(o){return this.x*o.x+this.y*o.y+this.z*o.z},cross:function(o){return new E(this.y*o.z-this.z*o.y,this.z*o.x-this.x*o.z,this.x*o.y-this.y*o.x)},length:function(){return Math.sqrt(this.dot(this))},unit:function(){return this.divide(this.length())},min:function(){return Math.min(Math.min(this.x,this.y),this.z)},max:function(){return Math.max(Math.max(this.x,this.y),this.z)},toAngles:function(){return{theta:Math.atan2(this.z,this.x),phi:Math.asin(this.y/this.length())}},angleTo:function(o){return Math.acos(this.dot(o)/(this.length()*o.length()))},toArray:function(o){return[this.x,this.y,this.z].slice(0,o||3)},clone:function(){return new E(this.x,this.y,this.z)},init:function(o,s,e){return this.x=o,this.y=s,this.z=e,this}},E.negative=function(o,s){return s.x=-o.x,s.y=-o.y,s.z=-o.z,s},E.add=function(o,s,e){return s instanceof E?(e.x=o.x+s.x,e.y=o.y+s.y,e.z=o.z+s.z):(e.x=o.x+s,e.y=o.y+s,e.z=o.z+s),e},E.subtract=function(o,s,e){return s instanceof E?(e.x=o.x-s.x,e.y=o.y-s.y,e.z=o.z-s.z):(e.x=o.x-s,e.y=o.y-s,e.z=o.z-s),e},E.multiply=function(o,s,e){return s instanceof E?(e.x=o.x*s.x,e.y=o.y*s.y,e.z=o.z*s.z):(e.x=o.x*s,e.y=o.y*s,e.z=o.z*s),e},E.divide=function(o,s,e){return s instanceof E?(e.x=o.x/s.x,e.y=o.y/s.y,e.z=o.z/s.z):(e.x=o.x/s,e.y=o.y/s,e.z=o.z/s),e},E.cross=function(o,s,e){return e.x=o.y*s.z-o.z*s.y,e.y=o.z*s.x-o.x*s.z,e.z=o.x*s.y-o.y*s.x,e},E.unit=function(o,s){var e=o.length();return s.x=o.x/e,s.y=o.y/e,s.z=o.z/e,s},E.fromAngles=function(o,s){return new E(Math.cos(o)*Math.cos(s),Math.sin(s),Math.sin(o)*Math.cos(s))},E.randomDirection=function(){return E.fromAngles(Math.random()*Math.PI*2,Math.asin(Math.random()*2-1))},E.min=function(o,s){return new E(Math.min(o.x,s.x),Math.min(o.y,s.y),Math.min(o.z,s.z))},E.max=function(o,s){return new E(Math.max(o.x,s.x),Math.max(o.y,s.y),Math.max(o.z,s.z))},E.lerp=function(o,s,e){return s.subtract(o).multiply(e).add(o)},E.fromArray=function(o){return new E(o[0],o[1],o[2])},E.angleBetween=function(o,s){return o.angleTo(s)},t}();class Se{constructor({tx:t=0,ty:n=0,zoom:c=4,ax:u=-25,ay:f=-200,az:x=0,fov:b=45}){this.tx=t,this.ty=n,this.zoom=c,this.ax=u,this.ay=f,this.az=x,this.fov=b}}const De=.3,Ie=.15,Le=1,pt=10,je=Math.ceil(pt/4),Ke=10,Te=`
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

`;var _e,$e;class Re{constructor(t,n,c,u){ve(this,_e);if(this.gl=t,this.calibration=c,this.copyVideo=!1,this.show=!1,this.videoStartTime=u,t===null){alert("Unable to initialize WebGL. Your browser or machine may not support it.");return}t.clearColor(0,0,0,1),t.clear(t.COLOR_BUFFER_BIT),this.shader=new p.Shader(`
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
`),this.mesh=p.Mesh.plane({width:2,height:2,coords:!0,normals:!0}),this.mesh.transform(p.Matrix.rotate(90,1,0,0)),this.mesh.transform(p.Matrix.translate(0,.1,0)),this.programInfo=null,this.texture=this.initTexture(),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!0),n!=""&&(this.video=this.setupVideo(n))}render(){const t=i.params.visualizations.sparks,n=i.params.simulation.poolSize;if(!i.params.video.show)return;this.copyVideo&&this.updateTexture(),(!this.mesh.vertexBuffers||!this.mesh.vertexBuffers.vertex)&&this.mesh.compile(),this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture);const u=16*this.gl.canvas.height/9,f=(this.gl.canvas.width-u)/2;O.swimmersAttributesTexture&&O.swimmersAttributesTexture.bind(1),this.shader.uniforms({ratio_screen:u/this.gl.canvas.width,dx_screen:f/this.gl.canvas.width,uSampler:0,swimmersHelperFunctions:1,screen:4,iTime:i.getRaceTime(),poolSize:[n.x,n.y,n.z],iResolution:[this.gl.canvas.width,this.gl.canvas.height],sparksEnabled:t.enabled,sparksGlow:t.glow,sparksGlowOffset:t.glowOffset,sparksStroke:t.stroke,sparksNumber:t.num,sparksLengthFactor:t.lengthFactor,sparksSizeFactor:t.sizeFactor,fov:t.fov,thresholdBlending:i.params.video.thresholdBlending,blendingThreshold:i.params.video.blendingThreshold,opacity:i.params.video.opacity,distanceFixed:i.distanceFixed,hideObstructions:i.params.video.hideObstructions,hideObstructionThreshold:i.params.video.hideObstructionThreshold}).draw(this.mesh),this.gl.disable(this.gl.BLEND),this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height)}setTime(t){this.copyVideo&&(this.video.currentTime=t)}initTexture(){const t=this.gl.createTexture();this.gl.bindTexture(this.gl.TEXTURE_2D,t);const n=0,c=this.gl.RGBA,u=1,f=1,x=0,b=this.gl.RGBA,P=this.gl.UNSIGNED_BYTE,L=new Uint8Array([0,0,255,255]);return this.gl.texImage2D(this.gl.TEXTURE_2D,n,c,u,f,x,b,P,L),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),t}updateTexture(){const n=this.gl.RGBA,c=this.gl.RGBA,u=this.gl.UNSIGNED_BYTE;this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture),this.gl.texImage2D(this.gl.TEXTURE_2D,0,n,c,u,this.video)}setupVideo(t){const n=document.createElement("video");let c=!1,u=!1;n.playsInline=!0,n.muted=!0,n.loop=!1,n.addEventListener("playing",()=>{c=!0,x()},!0),n.addEventListener("timeupdate",()=>{u=!0,x()},!0),n.src=t,n.play();const f=this,x=()=>{c&&u&&(f.copyVideo=!0,n.paused||Z(this,_e,$e).call(this))};return n}}_e=new WeakSet,$e=function(){this.hasPausedFirstTime||(this.hasPausedFirstTime=!0,this.video.pause())};class ze{constructor(t,{poolSize:n=new GL.Vector(2,2),waterResolution:c=new GL.Vector(256,256),thresholdBlending:u=!1,numSwimmers:f=1,dataFolder:x=null}){this.title=t,this.videos=[],this.poolSize=n,this.waterResolution=c,this.numSwimmers=f,this.thresholdBlending=u,this.dataFolder=x}addVideo(t){this.videos.push(t)}async parseData(t){for(let n=0;n<t.length;n++)await t[n].parseData(this.dataFolder+n+".csv")}}const Ue=new p.Vector(0,-4,0);class fe{constructor(t,n,c=new p.Vector(1,1,1),u=null){this.initCenter=new p.Vector(t.x,t.y,t.z),this.center=new p.Vector(t.x,t.y,t.z),this.oldCenter=new p.Vector(t.x,t.y,t.z),this.radius=n,this.cinematic=!1,this.velocity=new p.Vector(0,0,0),this.acceleration=new p.Vector(0,0,0),this.mass=4/3*Math.PI*Math.pow(n,3)*1e3,this.invMass=1/this.mass,this.radiusSquared=n*n,this.mesh=p.Mesh.sphere({detail:10}),this.followTarget=!1,this.showStreak=!1,this.buoyancyFactor=u,this.color=c}spawnSplashes(t){if(!i.params.simulation.splashes.enabled&&!i.params.visualizations.showStreaks)return;const n=this.center.subtract(this.oldCenter).multiply(1/t),c=n.z>0?-Math.PI/2:Math.PI/2,u=n.dot(n);let f=this.center.subtract(this.velocity.unit());i.isSceneSynchronizedSwimming()&&(f=this.center.clone()),f.y=.15,!i.isSceneSynchronizedSwimming()&&i.params.simulation.splashes.enabled&&this.center.x<100&&Math.abs(this.center.y)<=this.radius&&i.splashParticles.spawnSplash(f,c,Math.sqrt(u),i.params.simulation.splashes.strengthThreshold,{});let x=(this.velocity.length()-1.6)/.9;const b={fixed:!0};if(i.isSceneSynchronizedSwimming())b.shrinking=.02;else{const P=new p.Vector(x,0,1-x);P.multiply(1/P.max()),b.color=P}i.params.visualizations.showStreaks&&this.showStreak&&this.velocity.length()>.01&&i.splashParticles.spawnSplash(this.center,0,x,0,b)}update(t){if(this.moved||(this.oldCenter=new p.Vector(this.center.x,this.center.y,this.center.z)),this.moved=!1,this.cinematic){if(this.followTarget||(this.velocity=new p.Vector(0,0,0)),!this.targetPos||!this.followTarget)return;let n=t/this.targetTime;n=Math.min(Math.max(n,0),1),this.center=this.center.multiply(1-n).add(this.targetPos.multiply(n)),this.velocity=this.center.subtract(this.oldCenter).multiply(1/t),this.targetTime-=t,this.targetTime<0&&(this.targetPos=null)}else{const n=Math.max(0,Math.min(1,(this.radius-this.center.y)/(2*this.radius))),c=this.buoyancyFactor?this.buoyancyFactor:i.params.simulation.buoyancyFactor,u=Ue.multiply(-c*this.mass*n),f=this.velocity.unit().multiply(-1e3*this.radiusSquared*n*this.velocity.dot(this.velocity));this.addForce(f),this.addForce(u),this.addForce(Ue.multiply(this.mass)),this.velocity=this.velocity.add(this.acceleration.multiply(t)),this.acceleration=new p.Vector(0,0,0),this.center=this.center.add(this.velocity.multiply(t)),this.center.y<this.radius-i.params.simulation.poolSize.y&&(this.center.y=this.radius-1,this.velocity.y=Math.abs(this.velocity.y)*.7)}}setTarget(t,n){this.targetPos=t,this.targetTime=n}addForce(t){this.cinematic?console.warn("Trying to add force to a cinematic sphere."):this.acceleration=this.acceleration.add(t.multiply(this.invMass))}move(t){this.moved=!0,this.oldCenter=new p.Vector(this.center.x,this.center.y,this.center.z),this.center=new p.Vector(t.x,t.y,t.z),this.cinematic||console.warn("Moving a non cinematic sphere.")}}class gt{constructor(){this.mesh=new p.Mesh.plane({width:2,height:2,coords:!0,normals:!0}),this.waterTexture=null,this.shader=new p.Shader(`
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
        `)}updateFoam(t){if(!this.waterTexture){console.log("NO WATER TO UPDATE FOAM");return}this.foamTexNext.swapWith(this.foamTexPrev),this.foamTexNext.drawTo(()=>{this.foamTexPrev.bind(0),i.water.textureA.bind(1),this.shader.uniforms({foamTexPrev:0,water:1,dt:t,seed:i.time,poolSize:[i.params.simulation.poolSize.x,i.params.simulation.poolSize.y,i.params.simulation.poolSize.z],timeVariation:i.params.simulation.foam.timeVariation,spaceVariation:i.params.simulation.foam.spaceVariation,velThreshold:i.params.simulation.foam.velThreshold,velMax:i.params.simulation.foam.velMax,dispersion:i.params.simulation.foam.dispersion,attenuation:i.params.simulation.foam.attenuation}).draw(this.mesh)})}resetTextures(t,n,c){this.foamTexPrev=new p.Texture(t,n,{type:i.gl.FLOAT,filter:i.gl.LINEAR}),this.foamTexNext=new p.Texture(t,n,{type:i.gl.FLOAT,filter:i.gl.LINEAR}),this.waterTexture=c}}function ae(a,t=null){this.gl=a,this.visualizationWavesEnabled=!0,this.sqrt_2_PI=Math.sqrt(2*Math.PI),this.foam=new gt;var n=`
    out vec2 coord;
    uniform vec2 invPoolSizeVertex;
    void main() {
      coord = gl_Vertex.xy * invPoolSizeVertex + 0.5;
      gl_Position = vec4(gl_Vertex.xy * 2. * invPoolSizeVertex, 0., 1.0);
    }
  `;this.reset(t),p.Texture.canUseFloatingPointTextures(),this.dropShader=new p.Shader(n,`
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
    `)}ae.prototype.resetTextures=function(){const a=this.gl;this.textureA&&a.deleteTexture(this.textureA.id),this.textureB&&a.deleteTexture(this.textureB.id),this.textureA=new p.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:t}),this.textureB=new p.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:t}),this.foam.resetTextures(this.W,this.H,this.textureA),this.areaConservationTexture=new p.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:t}),this.showAreaConservedGrid=!1,this.showProjectionGrid=!1,this.invPoolSize=new p.Vector(1/i.params.simulation.poolSize.x,1/i.params.simulation.poolSize.y,1/i.params.simulation.poolSize.z);var t=p.Texture.canUseFloatingPointLinearFiltering()?this.gl.LINEAR:this.gl.NEAREST;(!this.textureA.canDrawTo()||!this.textureB.canDrawTo())&&p.Texture.canUseHalfFloatingPointTextures()&&(console.log("No draw"),t=p.Texture.canUseHalfFloatingPointLinearFiltering()?this.gl.LINEAR:this.gl.NEAREST,this.textureA=new p.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:t}),this.textureB=new p.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:t}))};ae.prototype.reset=function(a=null){this.WR_position=1e5,this.prev_WR_position=0,a!==null?(console.log("resolution.y : "+a.y),this.W=Math.round(a.x),this.H=Math.round(a.y),console.log("Using custom resolution:",this.W,this.H)):(this.W=256,this.H=256),O.reset(new p.Vector(this.W,this.H)),this.plane=p.Mesh.plane({detail:255,width:i.params.simulation.poolSize.x,height:i.params.simulation.poolSize.z}),this.delta=new p.Vector(1/this.W,1/this.H),this.resetTextures()};ae.prototype.addDrop=function(a,t,n,c){var u=this;this.textureB.drawTo(function(){u.textureA.bind(),u.dropShader.uniforms({invPoolSizeVertex:[u.invPoolSize.x,u.invPoolSize.z],center:[a,t],radius:n,strength:c,poolSize:[i.params.simulation.poolSize.x,i.params.simulation.poolSize.y,i.params.simulation.poolSize.z]}).draw(u.plane)}),this.textureB.swapWith(this.textureA)};ae.prototype.addOrRemoveVisualizationWaves=function(a){if(this.prev_WR_position=this.WR_position,this.WR_position=i.getRaceTime()*2.155,this.WR_position>i.params.simulation.poolSize.z&&(this.WR_position=2*i.params.simulation.poolSize.z-this.WR_position),!(!this.visualizationWavesEnabled||!O.raceHasStarted)){var n=this;this.textureB.drawTo(function(){n.textureA.bind();const c=O.getAttributesTexture();c&&c.bind(1),n.visualizationWavesShader.uniforms({swimmersAttributesTexture:1,showDivingDistance:i.params.visualizations.showDivingDistance,showWR:i.params.visualizations.showWR,invPoolSizeVertex:[n.invPoolSize.x,n.invPoolSize.z],poolSize:[i.params.simulation.poolSize.x,i.params.simulation.poolSize.y,i.params.simulation.poolSize.z],wr:n.WR_position,sqrt_2_PI:n.sqrt_2_PI,add:a,swimmersNumber:i.swimmers.length,time:i.getRaceTime(),t:i.time,amplitudeFactor:i.params.quiver.amplitudeFactor,frequencyFactor:i.params.quiver.frequencyFactor,amplitude:i.params.quiver.amplitude,omega0:i.params.quiver.omega,waveLength0:i.params.quiver.waveLength}).draw(n.plane)}),this.textureB.swapWith(this.textureA)}};ae.prototype.updateSpheres=function(a){if(i.params.simulation.optimized)O.attributes.draw(),this.textureB.drawTo(()=>{this.textureA.bind(),O.bindDisplacementTexture(1),O.bindOldDisplacementTexture(2),this.sphereShader.uniforms({oldDisplacementTexture:2,displacementTexture:1,invPoolSizeVertex:[this.invPoolSize.x,this.invPoolSize.z],poolSize:[i.params.simulation.poolSize.x,i.params.simulation.poolSize.y,i.params.simulation.poolSize.z],optimized:!0}).draw(this.plane),this.textureB.swapWith(this.textureA),O.attributes.draw()});else{const t=[];i.swimmers.forEach(n=>n.spheres.forEach(c=>t.push(c)));for(let n=0;n<t.length;n++){const c=t[n];this.moveSphere(c.oldCenter,c.center,c.radius)}}};ae.prototype.moveSphere=function(a,t,n){var c=this;this.textureB.drawTo(function(){c.textureA.bind(),c.sphereShader.uniforms({invPoolSizeVertex:[c.invPoolSize.x,c.invPoolSize.z],oldCenter:a,newCenter:t,radius:n,poolSize:[i.params.simulation.poolSize.x,i.params.simulation.poolSize.y,i.params.simulation.poolSize.z],optimized:!1}).draw(c.plane)}),this.textureB.swapWith(this.textureA)};ae.prototype.stepSimulation=function(a){var t=this;this.textureB.drawTo(function(){t.textureA.bind();const n=O.getAttributesTexture();n&&n.bind(2),t.updateShader.uniforms({swimmersAttributesTexture:2,swimmersNumber:i.swimmers.length,invPoolSizeVertex:[t.invPoolSize.x,t.invPoolSize.z],delta:[t.delta.x,t.delta.y],time:i.time,wr:t.WR_position,prev_wr:t.prev_WR_position,poolSize:[i.params.simulation.poolSize.x,i.params.simulation.poolSize.y,i.params.simulation.poolSize.z],sqrt_2_PI:t.sqrt_2_PI,damping:i.params.simulation.waterDamping}).draw(t.plane)}),this.textureB.swapWith(this.textureA),i.params.simulation.foam.enabled&&this.foam.updateFoam(a),this.updateAreaConservation()};ae.prototype.updateNormals=function(){var a=this;this.textureB.drawTo(function(){a.textureA.bind(),a.normalShader.uniforms({invPoolSizeVertex:[a.invPoolSize.x,a.invPoolSize.z],delta:[a.delta.x,a.delta.y]}).draw(a.plane)}),this.textureB.swapWith(this.textureA)};ae.prototype.updateAreaConservation=function(){if(!i.params.visualizations.areaConservationEnabled)return;var a,t,n;if(this.textureA.type===this.gl.FLOAT)a=this.gl.FLOAT,t=Float32Array,n="EXT_color_buffer_float";else if(this.textureA.type===this.gl.HALF_FLOAT_OES)a=this.gl.HALF_FLOAT_OES,t=Uint16Array,n="EXT_color_buffer_half_float";else{console.warn("Unsupported texture type for reading");return}if(!this.gl.getExtension(n)){console.warn(n+" not available; cannot read pixels");return}this.fb||(this.fb=this.gl.createFramebuffer()),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.fb),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,this.textureA.id,0);const c=this.gl.checkFramebufferStatus(this.gl.FRAMEBUFFER);if(c!==this.gl.FRAMEBUFFER_COMPLETE){console.error("Framebuffer incomplete: "+c+" for texture type "+this.textureA.type),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null);return}this.gl.pixelStorei(this.gl.PACK_ALIGNMENT,1);const u=new t(this.W*this.H*4),f=new Float32Array(this.W*this.H*4);this.gl.readPixels(0,0,this.W,this.H,this.gl.RGBA,a,u);for(let k=0;k<this.W;k++)f[k*4+1]=1;const x=i.params.simulation.poolSize.x/this.W,b=i.params.simulation.poolSize.z/this.H,P=x*x,L=b*b;if(this.textureA.type===this.gl.FLOAT){for(let k=0;k<this.H;k+=1)for(let w=0;w<this.W;w+=1){const V=(k*this.W+w)*4,B=((this.H-1-k)*this.W+w)*4,g=f[B],R=f[B+1];if(w+1<this.W){const A=u[V]-u[V+4],N=Math.sqrt(A*A+P);f[B+4]=g+N}if(k+1<this.H){const A=u[V]-u[V+this.W*4],N=Math.sqrt(A*A+L);f[B-4*this.W+1]=R+N}}this.gl.bindTexture(this.gl.TEXTURE_2D,this.areaConservationTexture.id),this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT,1),this.gl.texSubImage2D(this.gl.TEXTURE_2D,0,0,0,this.W,this.H,this.gl.RGBA,this.gl.FLOAT,f)}this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.bindTexture(this.gl.TEXTURE_2D,null)};const xt=`#version 300 es
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
        else alpha *= pow(vLife, 10.);

        if (altitude < 0. && vFixed >.1) alpha /= (1.-altitude)*2.;

        if (altitude < 0. && vFixed < .1) alpha /= (1.-altitude)*4.;

        if (vLife > 1.) alpha = 0.;
        fragColor = vec4(col, alpha);
    }

`,yt=-9.8,Ge=.01;class We{constructor(t,n,c,u,{shrinking:f=1,size:x=null}){this.pos=t,this.vel=n,this.fixed=c,this.color=u,this.life=1,this.size=x||Math.random()*.05+.02,this.shrinking=f}update(t){if(this.fixed){this.life-=t*.15*this.shrinking;return}this.life-=t*1.5*this.shrinking,this.vel.y+=yt*t,this.pos=this.pos.add(this.vel.multiply(t)),this.vel=this.vel.multiply(1-Ge),this.size*=1-Ge*this.shrinking}}class Tt{constructor(t){this.gl=t,this.particles=[],this.particleBuffer=this.gl.createBuffer(),this.initPrograms()}spawnSplash(t,n,c,u,{fixed:f=!1,color:x=new p.Vector(1,1,1),speed0:b=1,maxParticles:P=10,shrinking:L=null,size:k=null}){let w=L!==null?L:1;if(f){const B=new p.Vector(0,0,0),g=x||new p.Vector(c,0,1-c);x===null&&g.multiply(1/g.max());const R=k||.1,A=new We(t,B,f,g,{shrinking:w,size:R});A.life+=w*.1,this.particles.push(A);return}const V=Math.min(P,c*20);for(let B=0;B<V;B++){const g=(Math.random()-.5)*Math.PI,R=Math.random()*2*Math.PI,A=b*(.5+Math.random()),N=new p.Vector(Math.sin(g)*Math.cos(R)*A,Math.cos(g)*A,Math.sin(g)*Math.sin(R)*A);this.particles.push(new We(t,N,f,x,{shrinking:w}))}}update(t){this.particles.forEach((n,c)=>{n.update(t),n.life<=0&&this.particles.splice(c,1)})}buildShader(t,n){const c=this.gl.createShader(n);return this.gl.shaderSource(c,t),this.gl.compileShader(c),c}createProgram(t){const n=this.gl.createProgram();return t.forEach(c=>{this.gl.attachShader(n,c)}),this.gl.linkProgram(n),n}checkShaders(t,n,c){this.gl.getShaderParameter(t,this.gl.COMPILE_STATUS)||console.error(this.gl.getShaderInfoLog(t)),this.gl.getShaderParameter(n,this.gl.COMPILE_STATUS)||console.error(this.gl.getShaderInfoLog(n)),this.gl.getProgramParameter(c,this.gl.LINK_STATUS)||console.error(this.gl.getProgramInfoLog(c))}buildProgram(t,n){const c=this.buildShader(t,this.gl.VERTEX_SHADER),u=this.buildShader(n,this.gl.FRAGMENT_SHADER),f=this.createProgram([c,u]);return this.checkShaders(c,u,f),f}initPrograms(){this.program=this.buildProgram(xt,wt)}draw({showStreaks:t=!0,showSplashes:n=!0}){const c=this.gl;c.enable(c.BLEND),c.blendFunc(c.SRC_ALPHA,c.ONE_MINUS_SRC_ALPHA);const u=[];this.particles.forEach(D=>{const j=D.pos;u.push(j.x,j.y,j.z,D.life,D.size,D.color.x,D.color.y,D.color.z,D.fixed)}),c.bindBuffer(c.ARRAY_BUFFER,this.particleBuffer),c.bufferData(c.ARRAY_BUFFER,new Float32Array(u),c.DYNAMIC_DRAW),c.useProgram(this.program);const f=c.getUniformLocation(this.program,"MVM"),x=new Float32Array(c.modelviewMatrix.m);c.uniformMatrix4fv(f,!0,x);const b=c.getUniformLocation(this.program,"projection"),P=new Float32Array(c.projectionMatrix.m);c.uniformMatrix4fv(b,!0,P);const L=c.getUniformLocation(this.program,"showStreaks");c.uniform1i(L,t);const k=c.getUniformLocation(this.program,"showSplashes");c.uniform1i(k,n);const w=c.getAttribLocation(this.program,"pos"),V=c.getAttribLocation(this.program,"life"),B=c.getAttribLocation(this.program,"size"),g=c.getAttribLocation(this.program,"color"),R=c.getAttribLocation(this.program,"isFixed"),A=c.FLOAT,N=!1,G=4,U=9*G;let M=0;c.bindBuffer(c.ARRAY_BUFFER,this.particleBuffer),c.vertexAttribPointer(w,3,A,N,U,M),c.enableVertexAttribArray(w),M=3*G,c.vertexAttribPointer(V,1,A,N,U,M),c.enableVertexAttribArray(V),M=4*G,c.vertexAttribPointer(B,1,A,N,U,M),c.enableVertexAttribArray(B),M=5*G,c.vertexAttribPointer(g,3,A,N,U,M),c.enableVertexAttribArray(g),M=8*G,c.vertexAttribPointer(R,1,A,N,U,M),c.enableVertexAttribArray(R),c.drawArrays(c.POINTS,0,this.particles.length),c.disable(c.BLEND)}}function Xe(a){const t={};for(let n=0;n<a.length;n++)t[a[n]]=n;return t}const oe=new p.Vector(1e3,0,-1e3),He=["none","only medals","all"],qe=["neighbours","per swimmer"],Et=["none","cycle frequency","speed","acceleration"],_t={none:{value:0,name:"PARAMETER_NONE"},"cycle frequency":{value:1,name:"PARAMETER_CYCLES"},speed:{value:2,name:"PARAMETER_SPEED"},acceleration:{value:3,name:"PARAMETER_ACCELERATION"}},bt=["realistic","height field","lambert","toon"],St={realistic:{value:0,name:"RENDERING_REALISTIC"},"height field":{value:1,name:"RENDERING_HEIGHT_FIELD"},lambert:{value:2,name:"RENDERING_LAMBERT"},toon:{value:3,name:"RENDERING_TOON"}};var Q,Je,Qe,et,ke,tt;class Rt{constructor(){ve(this,Q);this.params={numSteps:2,fov:45,visualizations:{enabled:!0,showFlags:!1,showWR:!1,showSpeed:!1,showDivingDistance:!1,showFinishTimes:!1,showStreaks:!1,customWaterPerturbation:"none",waterColorParameter:"none",customParametersList:Et,customParametersDict:_t,PARAMETER_NONE:"none",PARAMETER_CYCLES:"cycle frequency",PARAMETER_SPEED:"speed",PARAMETER_ACCELERATION:"acceleration",showSwimmersLines:"none",swimmersLinesList:He,showSwimmersLinesDict:Xe(He),swimmersLinesMode:"neighbours",swimmersLinesModeList:qe,swimmersLinesModeDict:Xe(qe),medalsModeBeforeFinish:"none",medalsModesDict:{none:0,stars:1,bright:2,lanes:3},medalsModeAfterFinish:"none",areaConservationEnabled:!0,rendering:"realistic",renderingList:bt,renderingDict:St,transitionBeginTime:null,shadow:{enabled:!0,shadowRadius:.5,shadowPower:.5,showCircle:!0,circleRadius:.6,circleStroke:.15},sparks:{enabled:!1,glow:5,glowOffset:.5,lengthFactor:1,stroke:.01,num:40,sizeFactor:50,fov:Math.PI/4}},swimmers:{showSpheres:!0,useTracking:!1},video:{thresholdBlending:!1,blendingThreshold:.41,show:!1,opacity:1,hideObstructions:!1,hideObstructionThreshold:.2},simulation:{showFloaters:!1,optimized:!1,waterDamping:.02,poolSize:new p.Vector(4,1,4),buoyancyFactor:1.1,foam:{enabled:!0,velThreshold:.35,velMax:3.5,dispersion:.015,timeVariation:2.5,spaceVariation:8,attenuation:.015},splashes:{enabled:!0,strengthThreshold:2}},quiver:{amplitudeFactor:.78,frequencyFactor:1.2,amplitude:.1,omega:2,waveLength:1},cornerView:{show:!0},chronoPhotography:{available:!1}},this.resolution=new p.Vector(256,256),this.gl=p.create({preserveDrawingBuffer:!0}),this.gl.canvas.tabIndex=0,this.originalVisParams=JSON.parse(JSON.stringify(this.params.visualizations)),delete this.originalVisParams.shadow,delete this.originalVisParams.sparks,this.useConfigFile=!1,this.time=0,this.swimmers=[],this.translateX=0,this.translateY=0,this.zoomDistance=4,this.angleX=-25,this.angleY=-200.5,this.angleZ=0,this.water=null;const t=new ze("—",{poolSize:new p.Vector(2,1,2),waterResolution:new p.Vector(256,256),numSwimmers:1}),n=new Se({});t.addVideo(new Re(this.gl,"",n));const c=new ze("100m freestyle",{poolSize:new p.Vector(25,2,50),waterResolution:new p.Vector(1024,2048),numSwimmers:10,thresholdBlending:!0,dataFolder:"./assets/race-data/"}),u=new Se({tx:-.53,ty:1.25,zoom:47.86,ax:-29,ay:-260.5,az:-5,fov:39.98});c.addVideo(new Re(this.gl,"swimming-race.mp4",u,16.5)),this.currentVideo=c.videos[0];const f=new ze("synchronized swimming",{poolSize:new p.Vector(25,2,30),waterResolution:new p.Vector(1024,2048),numSwimmers:2,dataFolder:"./assets/synchronized-swimming-data/"}),x=new Se({tx:-1.32,ty:.4,zoom:32.41,ax:-18,ay:-291.5,az:1,fov:42.8});f.addVideo(new Re(this.gl,"synchronized-swimming.mp4",x,0)),this.scenesList=[t,c,f],this.scenes={},this.scenesList.forEach(b=>this.scenes[b.title]=b),this.currentScene=t,this.paused=!1,this.configPlayButton(),this.transitions={},this.playingDemo=!1,this.renderWater=!0,this.renderCube=!0,this.spheresRadiusCoeff=1,this.distanceFixed=0,this.chronoFrameBuffer=this.gl.createFramebuffer(),this.drawingFrameBuffer=null,this.drawingTexture=this.gl.createTexture(),this.resetDrawingTexture(),this.cornerView=!1,this.splashParticles=new Tt(this.gl),this.floaters=[],this.showTimeline=!0}hideEditorPanel(t){const n=document.getElementById("event-editor");n&&(n.style.display=t?"block":"none")}resetDrawingTexture(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.chronoFrameBuffer),this.gl.bindTexture(this.gl.TEXTURE_2D,this.drawingTexture);const t=this.gl.canvas.width,n=this.gl.canvas.height;this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,t,n,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,null),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,this.drawingTexture,0);const c=this.gl.createRenderbuffer();this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,c),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,this.gl.DEPTH_COMPONENT16,t,n),this.gl.framebufferRenderbuffer(this.gl.FRAMEBUFFER,this.gl.DEPTH_ATTACHMENT,this.gl.RENDERBUFFER,c),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null)}configStopButton(){this.stopButton=document.getElementById("stop-button"),this.stopButton.addEventListener("click",()=>{this.stopRace()})}configPlayButton(){this.configStopButton(),this.playButton=document.getElementById("play-button"),this.playButton.addEventListener("click",()=>{this.playButton.textContent=="pause"?this.pause():(O.raceHasStarted||this.startRace(),this.play())})}setCalibration(t){this.translateX=t.tx,this.translateY=t.ty,this.zoomDistance=t.zoom,this.angleX=t.ax,this.angleY=t.ay,this.angleZ=t.az,this.params.fov=t.fov,this.gl.matrixMode(this.gl.PROJECTION),this.gl.loadIdentity(),this.gl.perspective(this.params.fov,this.gl.canvas.width/this.gl.canvas.height,.01,100),this.gl.matrixMode(this.gl.MODELVIEW)}updateFloaters(t){}isSceneSynchronizedSwimming(){return this.currentScene.title=="synchronized swimming"}async setScene(t){if(console.log("SET SCENE : "+t),this.currentScene=this.scenes[t],this.currentScene){Z(this,Q,Je).call(this,this.currentScene.poolSize),this.currentScene.title=="100m freestyle"?Z(this,Q,Qe).call(this):this.floaters=[];const n=document.getElementById("time-slider-container");this.currentVideo=this.currentScene.videos[0],this.params.video.show=!!this.currentVideo.video,this.params.swimmers.showSpheres=!this.currentVideo.video,n.hidden=!this.currentVideo.video,this.currentScene.title!="—"?this.params.simulation.waterDamping=.1:this.params.simulation.waterDamping=.02;const c=this.currentScene.numSwimmers;if(console.log("num swimmers : "+c),this.swimmers.length!=c){for(let u=this.swimmers.length;u<c;u++){const f=new O(new p.Vector(0,0,0));this.swimmers.push(f)}for(let u=this.swimmers.length;u>c;u--)this.swimmers=this.swimmers.slice(1);this.swimmers.forEach(u=>u.waterDamping=this.params.simulation.waterDamping)}this.params.swimmers.useTracking=!0,await this.currentScene.parseData(this.swimmers),this.swimmers.forEach(u=>u.update(0)),console.log("scene name : "+this.currentScene.title),this.setCalibration(this.currentVideo.calibration),this.resolution=this.currentScene.waterResolution,this.params.video.thresholdBlending=this.currentScene.thresholdBlending,this.currentScene.thresholdBlending?this.params.video.opacity=1:this.params.video.opacity=.5,this.params.visualizations.areaConservationEnabled=!1,this.stopRace(),this._reset(),this.params.simulation.optimized=!!this.currentVideo.video,this.useConfigFile=!this.isSceneSynchronizedSwimming(),this._setPannelMinimized(this.currentScene.title!="100m freestyle")}}useGravity(t){O.useGravity=t;for(let n of i.swimmers)n.body.cinematic=!O.useGravity}isOneVisualizationEnabled(){return this.params.visualizations.showFlags||this.params.visualizations.medalsModeBeforeFinish!="none"||this.params.visualizations.medalsModeAfterFinish!="none"||this.params.visualizations.showWR||this.params.visualizations.showSpeed||this.params.visualizations.showDivingDistance}updateTime(t){this.time+=t,this._updateDistanceMarker&&this._updateDistanceMarker()}getRaceTime(){return O.raceHasStarted?this.time-this.currentVideo.videoStartTime:0}resetParams(){Object.entries(this.originalVisParams).forEach(t=>{const n=t[0],c=t[1];this.params.visualizations[n]=c}),this.params.visualizations.areaConservationEnabled=!1}updateEventIndex(){for(this.currentEventIndex=0;this.events[this.currentEventIndex]&&this.events[this.currentEventIndex].time<this.getRaceTime();)this.currentEventIndex++;this.currentEventIndex>0&&this.currentEventIndex--}setRaceTime(t){this.time=this.currentVideo.videoStartTime+t,this.currentVideo.video&&this.currentVideo.setTime(this.time),this.events&&(this.updateEventIndex(),this.resetParams())}showTexts(t){document.getElementById("h").hidden=!t,t?this.showCommands&&(document.getElementById("commands").hidden=!1):(this.showCommands=!document.getElementById("commands").hidden,document.getElementById("commands").hidden=!0)}startRace(){console.log("START RACE"),this.currentVideo.videoStartTime>=3?this.setRaceTime(-3):this.setRaceTime(0),this.currentVideo.video&&this.currentVideo.video.play(),this.swimmers.forEach(t=>t.startRace()),O.raceHasStarted=!0,O.useGravity=!0,this.water.resetTextures(),this.water.WR_position=0,this.stopButton.hidden=!1,this._clearChronoTexture(this.gl.canvas.width,this.gl.canvas.height,this.gl),this.showTexts(!1),this.isSceneSynchronizedSwimming()&&(this.params.simulation.foam.velThreshold=0,this.params.simulation.foam.velMax=2.2,this.params.simulation.foam.dispersion=.0025,this.params.simulation.foam.timeVariation=.3,this.params.simulation.foam.spaceVariation=8,this.params.simulation.foam.attenuation=0),console.log("show streaks : "+this.params.visualizations.showStreaks)}stopRace(){this.paused&&this.play(),this.setRaceTime(0),this.currentVideo.video&&this.currentVideo.video.pause(),this.swimmers.forEach(t=>t.swim(!1)),O.raceHasStarted=!1,this.water.resetTextures(),this.playButton.textContent="play",this.stopButton.hidden=!0,this.showTexts(!0)}pause(){this.paused=!0,this.pauseVideo(),this.playButton.textContent="play"}play(){this.paused=!1,O.raceHasStarted&&(this.playVideo(),this.playButton.textContent="pause")}pauseVideo(){this.currentVideo.video&&this.currentVideo.video.pause()}playVideo(){this.currentVideo.video&&(this.currentVideo.video.play(),this.currentVideo.video.currentTime=this.time)}renderVideo(){this.currentVideo.video&&this.currentVideo.render()}parseConfigFile(t){fetch(t).then(n=>n.text()).then(n=>{this.events=JSON.parse(n),this.currentEventIndex=0,this._renderTimeline&&this._renderTimeline()})}updateTransitions(){Object.entries(this.transitions).forEach(t=>{const n=t[0],c=t[1],u=this.getRaceTime()-c.beginTime;if(u>c.duration){delete this.transitions[n];return}c.show?c.opacity=u/c.duration:c.opacity=1-u/c.duration})}updateParams(){if(!O.raceHasStarted||!this.events||!this.useConfigFile)return;const t=this.events[this.currentEventIndex];if(!t)return;let n=t.rankSwimmerToggle;if(n||(n=1),t.distance&&this.swimmers[n-1].getDistanceTraveled()>=t.distance||t.time!==void 0&&this.getRaceTime()>=t.time){this.currentEventIndex++;const c=t.transition&&t.transition.type=="dissolve";Object.entries(t.params).forEach(u=>{const f=u[0],x=u[1];f!=="transition"&&(c&&(x===!0||x===!1)&&(this.transitions[f]={opacity:1-1*x,show:x,beginTime:this.getRaceTime(),duration:t.transition.duration}),this.params.visualizations[f]=x)})}}chronoPhotography({circle:t=!1}){console.log("shoot"),this.distanceFixed=this.swimmers[0].getDistanceTraveled(),console.log("distance fixed : "+this.distanceFixed),this._fixTexture(t)}recalibrate(){this.currentVideo&&this.setCalibration(this.currentVideo.calibration)}async launchDemo(){console.log("Launch demo"),await this.setScene("100m freestyle"),this.params.video.show=!1,this.params.swimmers.showSpheres=!0,this.spheresRadiusCoeff=1,this.demoTime=0,this.swimmers.forEach(t=>t.body.move(oe)),this.swimmersShown=0,this.playingDemo=!0,this.useGravity(!0),this.params.simulation.buoyancyFactor=1.5,this.params.visualizations.shadow.enabled=!1,this.renderWater=!1,this.translateX=200,this._gui.hide(),document.getElementById("event-editor").hidden=!0,document.getElementById("time-slider-container").hidden=!0,document.getElementById("h").hidden=!0}stopDemo(){this.playingDemo=!1,this.setScene("—"),document.getElementById("event-editor").hidden=!1,document.getElementById("time-slider-container").hidden=!1,document.getElementById("h").hidden=!1,this.renderWater=!0,this.renderCube=!0,this.params.visualizations.shadow.enabled=!0,this._gui.show(),this.params.simulation.buoyancyFactor=1.1}updateDemo(t){if(!this.playingDemo)return;const n=this.demoTime;this.demoTime+=t;const c=2,u=1;if(n<=u){const g=Z(this,Q,ke).call(this,0,u,n);this.translateX=g*this.currentVideo.calibration.tx+(1-g)*200}else this.demoShowVideoTime||(this.angleY+=20*t);!this.renderCube&&n>.5&&(this.renderCube=!0);const f=1.5;if(!this.renderWater&&n>1.5&&(this.renderWater=!0),n>f&&n<f+.5)for(var x=0;x<10;x++)this.water.addDrop(Math.random()*2-1,Math.random()*2-1,.06,x&1?.6:-.6);Z(this,Q,et).call(this,n,c);const b=3,P=5;!O.raceHasStarted&&n>=b&&n<P&&(this.params.simulation.splashes.enabled=!1,this.swimmers.forEach(g=>{g.body.cinematic=!0;const R=new p.Vector(g.body.center.x,0,0),A=new p.Vector(g.body.center.x,1,-this.params.simulation.poolSize.z/2);g.body.move(Z(this,Q,tt).call(this,R,A,b,P,n))})),!O.raceHasStarted&&n>=P&&(this.params.simulation.buoyancyFactor=1.1,this.params.simulation.splashes.enabled=!0,this.params.visualizations.shadow.enabled=!0,this.startRace()),!this.demoShowVideoTime&&this.angleY>=this.currentVideo.calibration.ay+360&&(this.demoShowVideoTime=this.demoTime+1),!this.params.video.show&&this.demoShowVideoTime&&n>=this.demoShowVideoTime&&(this.params.video.show=!0,this.params.video.opacity=0);const L=2;this.params.video.show&&n<=this.demoShowVideoTime+L&&(this.params.video.opacity=(n-this.demoShowVideoTime)/L,console.log("opacity : "+this.params.video.opacity));const k=2;let w=null;this.demoShowVideoTime&&(w=this.demoShowVideoTime+L+k),this.params.video.show&&n>this.demoShowVideoTime+L&&n<w&&(this.spheresRadiusCoeff=1-(n-(this.demoShowVideoTime+L))/k);let V=null;w&&(V=w+.5);const B=2;V&&n>V&&n<V+B&&(this.params.video.hideObstructions=!0,this.params.video.hideObstructionThreshold=(n-V)/B*.5)}}Q=new WeakSet,Je=function(t){console.log("SET POOL SIZE : "+t.z),this.params.simulation.poolSize.x=t.x,this.params.simulation.poolSize.y=t.y,this.params.simulation.poolSize.z=t.z},Qe=function(){this.floaters=[];const t=.1,n=this.params.simulation.poolSize,c=n.x/10,u=n.z/(2*t),f=-n.z/2,x=-n.x/2,b=new p.Vector(0,1,0),P=new p.Vector(1,1,0),L=new p.Vector(0,.5,1),k=[b,L,L,P,P,P,L,L,b];for(let w=1;w<10;w++)for(let V=0;V<u;V++){const B=new p.Vector(x+w*c,0,f+t+V*2*t);let g=k[w-1];(Math.abs(B.z)>=20||Math.abs(B.z)<=.5||Math.abs(Math.abs(B.z)-10)<=.25)&&(g=new p.Vector(1,0,0)),this.floaters.push(new fe(B,t,g,2.5))}},et=function(t,n){const u=Math.floor((t-n)/.1);if(this.swimmersShown<10&&u>=this.swimmersShown){console.log("swimmers shown : "+this.swimmersShown),console.log("next index swimmer : "+u),console.log("num swimmers : "+this.swimmers.length);const f=this.params.simulation.poolSize.x,b=-f/2+f/20+u*f/10;this.swimmers[u].body.move(new p.Vector(b,.5,0)),this.swimmersShown++}},ke=function(t,n,c){if(c<t)return 0;if(c>n)return 1;const u=(c-t)/(n-t);return 1-(Math.cos(u*Math.PI)+1)/2},tt=function(t,n,c,u,f){const x=Z(this,Q,ke).call(this,c,u,f);console.log("t norm : "+x);const b=(P,L,k,w=1)=>Math.pow(k,w)*L+(1-Math.pow(k,w))*P;return new p.Vector(b(t.x,n.x,x),b(t.y,n.y,x,20),b(t.z,n.z,x,2))};const i=new Rt;i.parseConfigFile("./assets/vis-config.json");const zt=`#version 300 es
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
`,Pt=new Float32Array([-1,-1,1,-1,1,1,-1,1]),Mt=new Uint16Array([0,1,2,2,3,0]);var ee,it,pe,rt;class Dt{constructor(){ve(this,ee);this.numVecAttributes=je,this.maxNumSwimmer=Ke,this.gl=i.gl;const t=this.gl.NEAREST;this.texture=new p.Texture(this.numVecAttributes,this.maxNumSwimmer,{type:this.gl.FLOAT,filter:t}),this.initPrograms(),this.indexBuffer=this.gl.createBuffer(),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.indexBuffer),this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER,Mt,this.gl.STATIC_DRAW),this.vboPlane=this.gl.createBuffer(),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vboPlane),this.gl.bufferData(this.gl.ARRAY_BUFFER,Pt,this.gl.STATIC_DRAW),this.vboPoints=this.gl.createBuffer()}update(){this.numSwimmers=i.swimmers.length;const t=5;this.swimmersAttributes=new Float32Array(this.numVecAttributes*4*this.maxNumSwimmer*t);const n=Z(this,ee,it).call(this,i.swimmers);for(let c=0;c<i.swimmers.length;c++){const u=n[c];Z(this,ee,rt).call(this,c,u),Z(this,ee,pe).call(this,i.swimmers.length+c,u.leftArm),Z(this,ee,pe).call(this,2*i.swimmers.length+c,u.rightArm),Z(this,ee,pe).call(this,3*i.swimmers.length+c,u.leftFoot),Z(this,ee,pe).call(this,4*i.swimmers.length+c,u.rightFoot)}this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture.id),this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,!1),this.gl.texSubImage2D(this.gl.TEXTURE_2D,0,0,0,this.numVecAttributes,this.maxNumSwimmer,this.gl.RGBA,this.gl.FLOAT,this.swimmersAttributes),this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,!0),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vboPoints),this.gl.bufferData(this.gl.ARRAY_BUFFER,this.swimmersAttributes,this.gl.DYNAMIC_DRAW)}buildShader(t,n){const c=this.gl.createShader(n);return this.gl.shaderSource(c,t),this.gl.compileShader(c),c}createProgram(t){const n=this.gl.createProgram();return t.forEach(c=>{this.gl.attachShader(n,c)}),this.gl.linkProgram(n),n}checkShaders(t,n,c){this.gl.getShaderParameter(t,this.gl.COMPILE_STATUS)||console.error(this.gl.getShaderInfoLog(t)),this.gl.getShaderParameter(n,this.gl.COMPILE_STATUS)||console.error(this.gl.getShaderInfoLog(n)),this.gl.getProgramParameter(c,this.gl.LINK_STATUS)||console.error(this.gl.getProgramInfoLog(c))}createRenderingTexture(t,n){this.pointsTexture=new p.Texture(t,n,{type:this.gl.FLOAT,filter:this.gl.NEAREST}),this.pointsFrameBuffer=this.gl.createFramebuffer(),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.pointsFrameBuffer);const c=this.gl.COLOR_ATTACHMENT0;this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,c,this.gl.TEXTURE_2D,this.pointsTexture.id,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.horizontalPassTexture=new p.Texture(t,n,{type:this.gl.FLOAT,filter:this.gl.LINEAR}),this.horizontalPassFrameBuffer=this.gl.createFramebuffer(),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.horizontalPassFrameBuffer),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,c,this.gl.TEXTURE_2D,this.horizontalPassTexture.id,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null);const u=n/4,f=u,x=u;this.displacementTexture=new p.Texture(f,x,{type:this.gl.FLOAT,filter:this.gl.LINEAR}),this.displacementFrameBuffer=this.gl.createFramebuffer(),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.displacementFrameBuffer),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,c,this.gl.TEXTURE_2D,this.displacementTexture.id,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.oldDisplacementTexture=new p.Texture(f,x,{type:this.gl.FLOAT,filter:this.gl.LINEAR})}buildProgram(t,n){const c=this.buildShader(t,this.gl.VERTEX_SHADER),u=this.buildShader(n,this.gl.FRAGMENT_SHADER),f=this.createProgram([c,u]);return this.checkShaders(c,u,f),f}initPrograms(){this.programPoints=this.buildProgram(zt,At),this.programVolume=this.buildProgram(Ct,Ft),this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height)}volumePass(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.horizontalPassFrameBuffer),this.gl.useProgram(this.programVolume);const t=this.gl.getAttribLocation(this.programVolume,"iVertex"),n=this.gl.getUniformLocation(this.programVolume,"poolSize");this.gl.uniform2f(n,i.params.simulation.poolSize.x,i.params.simulation.poolSize.z);const c=this.gl.getUniformLocation(this.programVolume,"horizontal");this.gl.uniform1i(c,!0);const u=this.gl.getUniformLocation(this.programVolume,"show");this.gl.uniform1i(u,!1);const f=this.gl.getUniformLocation(this.programVolume,"swapColor");this.gl.uniform1i(f,!1);const x=2,b=this.gl.FLOAT,P=!1,L=0,k=0;this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vboPlane),this.gl.vertexAttribPointer(t,x,b,P,L,k),this.gl.enableVertexAttribArray(t),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.indexBuffer),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.pointsTexture.id),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this.gl.drawElements(this.gl.TRIANGLES,6,this.gl.UNSIGNED_SHORT,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.displacementFrameBuffer),this.gl.uniform1i(c,!1),this.gl.uniform1i(u,!1),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.horizontalPassTexture.id),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this.gl.viewport(0,0,this.displacementTexture.width,this.displacementTexture.height),this.gl.drawElements(this.gl.TRIANGLES,6,this.gl.UNSIGNED_SHORT,0),this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height)}pointPass(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.pointsFrameBuffer),this.gl.useProgram(this.programPoints);const t=this.gl.getAttribLocation(this.programPoints,"iData1"),n=this.gl.getAttribLocation(this.programPoints,"iData2"),c=this.gl.getAttribLocation(this.programPoints,"iData3"),u=this.gl.getUniformLocation(this.programPoints,"invPoolSize");this.gl.uniform2f(u,1/i.params.simulation.poolSize.x,1/i.params.simulation.poolSize.z);const f=4,x=this.gl.FLOAT,b=!1,P=4,L=12*P;let k=0;this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vboPoints),t>=0&&(this.gl.vertexAttribPointer(t,f,x,b,L,k),this.gl.enableVertexAttribArray(t)),k=4*P,n>=0&&(this.gl.vertexAttribPointer(n,f,x,b,L,k),this.gl.enableVertexAttribArray(n)),k=2*4*P,c>=0&&(this.gl.vertexAttribPointer(c,f,x,b,L,k),this.gl.enableVertexAttribArray(c)),this.gl.viewport(0,0,this.pointsTexture.width,this.pointsTexture.height),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this.gl.drawArrays(this.gl.POINTS,0,5*this.numSwimmers)}updateOldDisplacementTexture(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.displacementFrameBuffer),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.oldDisplacementTexture.id),this.gl.copyTexSubImage2D(this.gl.TEXTURE_2D,0,0,0,0,0,this.oldDisplacementTexture.width,this.oldDisplacementTexture.height)}draw(){this.updateOldDisplacementTexture(),this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this.pointPass(),this.volumePass(),this.gl.disable(this.gl.BLEND)}}ee=new WeakSet,it=function(t){const n=function(f,x){return x.getDistanceTraveled()-f.getDistanceTraveled()};let c=0;t.forEach(f=>{f.hasFinished()>.1&&c++});const u=t.slice(0,c).concat(t.slice(c).sort(n));for(let f=0;f<t.length;f++)t[f]=u[f];return t},pe=function(t,n){this.swimmersAttributes[this.numVecAttributes*4*t]=n.center.x,this.swimmersAttributes[this.numVecAttributes*4*t+1]=n.center.z,this.swimmersAttributes[this.numVecAttributes*4*t+7]=n.center.y},rt=function(t,n){Z(this,ee,pe).call(this,t,n.body),this.swimmersAttributes[this.numVecAttributes*4*t+2]=n.divingDistance,this.swimmersAttributes[this.numVecAttributes*4*t+3]=n.divingTime,this.swimmersAttributes[this.numVecAttributes*4*t+4]=n.reactionTime,this.swimmersAttributes[this.numVecAttributes*4*t+5]=n.body.velocity.z*3.6,this.swimmersAttributes[this.numVecAttributes*4*t+6]=n.nationality,this.swimmersAttributes[this.numVecAttributes*4*t+8]=n.breakoutDistance,this.swimmersAttributes[this.numVecAttributes*4*t+9]=n.breakoutTime,this.swimmersAttributes[this.numVecAttributes*4*t+10]=n.finishTime,this.swimmersAttributes[this.numVecAttributes*4*t+11]=n.waterDamping};function Ae(a=0,t=1){const n=1-Math.random(),c=Math.random();return Math.sqrt(-2*Math.log(n))*Math.cos(2*Math.PI*c)*t+a}const It=.5,Lt=2,de="Temps (s)",ge="event",ye="eventX",xe="eventY",kt="frequence (cylce/min)";var be,ot;const q=class q{constructor(t){ve(this,be);this.startingPoint=new p.Vector(t.x,t.y,t.z),this.center=new p.Vector(t.x,t.y,t.z),this.force=new p.Vector(0,0,190+Ae(0,20)),this.reactionTime=Math.max(.1,Ae(.15,.02));const n=.25,c=.15;this.body=new fe(t,n),this.body.showStreak=!0,this.leftArm=new fe(oe,c),this.rightArm=new fe(oe,c),this.leftFoot=new fe(oe,c),this.rightFoot=new fe(oe,c),this.body.cinematic=!q.useGravity,this.leftArm.cinematic=!0,this.rightArm.cinematic=!0,this.leftFoot.cinematic=!0,this.rightFoot.cinematic=!0,this.spheres=[this.body,this.leftArm,this.rightArm,this.leftFoot,this.rightFoot],this.divingDistance=0,this.divingTime=1e3,this.breakoutDistance=0,this.breakoutTime=1e3,this.nationality=Math.random()>.5?0:1,this.currendDataIndex=0,this.useTracking=!1,this.armPulsation=2*Math.PI*Lt,this.cycleTime=0,this.cyclePhase=0,this.finishTime=0,this.waterDamping=i.params.simulation.waterDamping}async parseData(t){await fetch(t).then(n=>{const c=n.headers.get("content-type");return!c||!c.includes("text/csv")?(console.log("no file found : "+t),null):n.text()}).then(n=>{if(!n)return;const c=n.split(`
`),u=c[0].split(/,|;/);this.data=c.slice(1).map(f=>{const x=f.split(/,|;/);return Object.fromEntries(u.map((b,P)=>[b,x[P]]))}),i.params.swimmers.useTracking&&(this.armPulsation=0)})}getDistanceTraveled(){const t=this.body.velocity.z,n=i.params.simulation.poolSize.z,c=this.body.center.z+n/2;return t>=0?c:2*n-c}startRace(){this.hasBrokeOut=!1,this.hasDove=!1,this.hasReacted=!1}jump(t=4.5){this.body.cinematic=!1,this.body.velocity=new p.Vector(0,0,t+Ae(0,1)),this.body.center=new p.Vector(this.startingPoint.x,1,-i.params.simulation.poolSize.z/2)}swim(t){this.hasReacted=t,this.isSwimming=t,this.finishTime=0,t||(this.body.followTarget=!1),t?(this.body.cinematic=!1,this.useGravity=!0,this.useTracking?this.moveToBeginning():this.body.center=new p.Vector(this.startingPoint.x,0,-i.params.simulation.poolSize.z/2)):(this.body.velocity=new p.Vector(0,0,0),this.body.center=new p.Vector(this.startingPoint.x,0,0))}moveToBeginning(){this.useTracking||console.warn("tried to use tracking on untracked swimmer");const t=this.data[0];this.body.center=Z(this,be,ot).call(this,t)}hasFinished(){return this.finishTime>.1}getArmOffset(t,n){n+=this.cyclePhase;const c=this.body.velocity.z>=0?this.armPulsation:-this.armPulsation;return new p.Vector(0,Math.cos(c*t+n),Math.sin(c*t+n)).multiply(It)}setCurrentDataIndex(){if(console.log("set current data index"),this.currendDataIndex=0,!!this.data){for(;this.data[this.currendDataIndex]&&this.data[this.currendDataIndex][de]<i.getRaceTime();)this.currendDataIndex++;if(this.currendDataIndex+1<this.data.length){if(this.currendDataIndex-1>=0){const t=parseFloat(this.data[this.currendDataIndex][ye]);let n=t;const c=i.params.simulation.poolSize.z;t>c&&(n=2*c-n),n-=c/2;const u=this.body.center;u.x,i.isSceneSynchronizedSwimming()&&parseFloat(this.data[this.currendDataIndex][xe])-i.params.simulation.poolSize.x/2,this.body.move(new p.Vector(u.x,u.y,n));const f=Math.sign(50-t)*.1;this.body.velocity=new p.Vector(0,0,f),console.log("vz : "+f)}this.body.setTarget(null),this.body.followTarget=!0,this.finishTime=0}}}findNextCycle(){let t=this.currendDataIndex+1;if(!this.data)return null;for(;this.data[t]&&this.data[t][ge]!="cycle";)t++;return this.data[t]?parseFloat(this.data[t][de]):null}setDamping(t){if(i.params.visualizations.customWaterPerturbation==i.params.visualizations.PARAMETER_CYCLES){const n=parseFloat(t[kt]);if(n<50)return;if(n>0){console.log("FREQ : "+n);const c=80,u=50;let f=(n-u)/(c-u);f=Math.max(Math.min(f,1),0);const x=.015,b=.25;this.waterDamping=x+(b-x)*(1-f)}}else this.waterDamping=i.params.simulation.waterDamping}handleTracking(t){if(this.hasReacted&&this.useTracking&&this.currendDataIndex<this.data.length&&this.data[this.currendDataIndex][de]<t){this.setDamping(this.data[this.currendDataIndex]);let n=null,c=this.startingPoint.x,u=t;const f=this.data[this.currendDataIndex+1];this.currendDataIndex+1<this.data.length&&(n=parseFloat(f[ye]),i.isSceneSynchronizedSwimming()&&(n=i.params.simulation.poolSize.z-n*30/25,f[xe]&&(c=parseFloat(f[xe])-i.params.simulation.poolSize.x/2)),u=parseFloat(f[de]));const x=i.params.simulation.poolSize.z;let b=-this.body.radius/2;const P=this.data[this.currendDataIndex][ge];if(P=="enter"||P=="turn"&&f[ge]!="under"){u=(t+u)/2,n=(this.body.center.z+x/2+n)/2;const k={[de]:u,[ye]:n,[ge]:"under"};this.data.splice(this.currendDataIndex+1,0,k),b=-1.5}f&&f[ge]=="under"&&(b=-1.5),n>x&&(n=2*x-n),n-=i.params.simulation.poolSize.z/2;const L=new p.Vector(c,b,n);if(this.currendDataIndex+1<this.data.length?this.body.setTarget(L,u-t):this.body.setTarget(null),P=="figure"&&(console.log("FIGURE"),i.splashParticles.spawnSplash(L,null,1e4,null,{speed0:4,maxParticles:400}),i.chronoPhotography({circle:!0})),P=="cycle"){const k=parseFloat(this.data[this.currendDataIndex][de]),w=this.findNextCycle();if(w){const B=1/(w-k);this.armPulsation=2*Math.PI*B,this.cycleTime=0,this.cyclePhase==0?this.cyclePhase=Math.PI:this.cyclePhase=0}}else P=="finish"&&(this.finishTime=this.data[this.currendDataIndex][de],this.body.followTarget=!1,this.isSwimming=!1);this.currendDataIndex++}}moveSpheresAway(){this.rightArm.move(oe),this.leftArm.move(oe),this.rightFoot.move(oe),this.leftFoot.move(oe)}moveSpheres(t){this.cycleTime+=t;const n=this.getArmOffset(.5*this.cycleTime,0),c=this.getArmOffset(.5*this.cycleTime,Math.PI),u=this.getArmOffset(.5*this.cycleTime*2,0),f=this.getArmOffset(.5*this.cycleTime*2,Math.PI);this.rightArm.move(this.body.center.add(n).add(new p.Vector(De,0,0))),this.leftArm.move(this.body.center.add(c).add(new p.Vector(-De,0,0)));const x=this.body.velocity.z>=0?-Le:Le;this.rightFoot.move(this.body.center.add(new p.Vector(Ie,u.y*.5,x))),this.leftFoot.move(this.body.center.add(new p.Vector(-Ie,f.y*.5,x)))}update(t){const n=i.getRaceTime();!q.raceHasStarted&&this.data&&(this.useTracking=i.params.swimmers.useTracking),!this.hasReacted&&q.raceHasStarted&&(this.useTracking||n>this.reactionTime&&!i.params.swimmers.useTracking?(this.swim(!0),this.waterDamping=i.params.simulation.waterDamping,this.useTracking||this.jump(),this.useTracking&&(this.body.cinematic=!0,this.body.followTarget=!0,this.body.setTarget(null))):(this.swim(!1),this.body.cinematic=!0,i.playingDemo?this.body.move(new p.Vector(this.body.center.x,1,-i.params.simulation.poolSize.z/2)):this.body.move(oe)),this.currendDataIndex=0),this.isSwimming&&(this.useTracking||this.body.addForce(this.force),this.body.center.y>-this.body.radius&&!i.isSceneSynchronizedSwimming()?this.moveSpheres(t):this.moveSpheresAway()),this.handleTracking(n);for(let u of this.spheres)u.update(t),u.spawnSplashes(t);if(this.body.center.z>-i.params.simulation.poolSize.z/2+20||i.isSceneSynchronizedSwimming())return;q.raceHasStarted&&!this.hasDove&&this.body.center.y<0&&this.body.oldCenter.y>=0&&(this.divingDistance=this.body.center.z+i.params.simulation.poolSize.z/2,this.divingTime=n,this.hasDove=!0);const c=this.body.radius;q.raceHasStarted&&!this.hasBrokeOut&&this.body.center.y>-c&&this.body.oldCenter.y<=-c&&(this.breakoutDistance=this.body.center.z+i.params.simulation.poolSize.z/2,this.breakoutTime=n,this.hasBrokeOut=!0)}};be=new WeakSet,ot=function(t){let n=parseFloat(t[ye]),c=this.body.center.x;return i.isSceneSynchronizedSwimming()&&(n=i.params.simulation.poolSize.z-n*30/25,t[xe]&&(c=parseFloat(t[xe])-i.params.simulation.poolSize.x/2)),n-=i.params.simulation.poolSize.z/2,new p.Vector(c,1,n)},ie(q,"useGravity",!1),ie(q,"raceHasStarted",!1),ie(q,"swimming",!1),ie(q,"attributes"),ie(q,"initAttributes",()=>{q.attributes=new Dt}),ie(q,"updateAttributesTexture",()=>{q.attributes.update()}),ie(q,"getAttributesTexture",()=>q.attributes.texture),ie(q,"bindDisplacementTexture",t=>{q.attributes.displacementTexture.bind(t)}),ie(q,"bindOldDisplacementTexture",t=>{q.attributes.oldDisplacementTexture.bind(t)}),ie(q,"reset",t=>{q.attributes.createRenderingTexture(t.x,t.y)});let O=q;const Bt=`
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
`;function ce(a,t,n,c){this.water=t,this.gl=a,this.tileTexture=p.Texture.fromImage(document.getElementById("tiles"),{minFilter:this.gl.LINEAR_MIPMAP_LINEAR,wrap:this.gl.REPEAT,format:this.gl.RGB}),this.franceTexture=p.Texture.fromImage(document.getElementById("france"),{minFilter:this.gl.LINEAR_MIPMAP_LINEAR,wrap:this.gl.REPEAT,format:this.gl.RGBA}),this.chinaTexture=p.Texture.fromImage(document.getElementById("china"),{minFilter:this.gl.LINEAR_MIPMAP_LINEAR,wrap:this.gl.REPEAT,format:this.gl.RGBA}),this.lettersTexture=p.Texture.fromImage(document.getElementById("letters"),{minFilter:this.gl.LINEAR,magFilter:this.gl.LINEAR,wrap:this.gl.REPEAT,format:this.gl.RGBA}),this.flagSize=c,this.flagSize=[1.5,1],this.flagCenter=n,this.lightDir=new p.Vector(2,2,-1).unit(),this.causticTex=new p.Texture(1024,1024),this.waterShaders=[];let u="";Object.entries(i.params.visualizations.customParametersDict).forEach(b=>{const P=b[1].name,L=b[1].value;u+="#define "+P+" "+L+`
`}),Object.entries(i.params.visualizations.renderingDict).forEach(b=>{const P=b[1].name,L=b[1].value;u+="#define "+P+" "+L+`
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
  `)}ce.prototype.reset=function(){this.cubeMesh=p.Mesh.cube({width:i.params.simulation.poolSize.x,height:2,depth:i.params.simulation.poolSize.z}),this.cubeMesh.triangles.splice(4,2),this.cubeMesh.compile()};ce.prototype.updateCaustics=function(a){};ce.prototype.renderWater=function(a,t,n){if(!i.renderWater)return;var c=new p.Raytracer;a.textureA.bind(0),this.tileTexture.bind(1),t.bind(2),this.causticTex.bind(3),this.franceTexture.bind(4),this.chinaTexture.bind(8),i.water.foam.foamTexNext.bind(9),this.lettersTexture.bind(7),a.areaConservationTexture.bind(5);const u=O.getAttributesTexture();u&&u.bind(6),this.gl.enable(this.gl.CULL_FACE),i.updateTransitions();for(var f=0;f<2;f++)this.gl.cullFace(f?this.gl.BACK:this.gl.FRONT),this.waterShaders[f].uniforms({renderWater:!0,light:this.lightDir,water:0,tiles:1,sky:2,causticTex:3,france:4,china:8,foamTex:9,areaConservationTexture:5,swimmersAttributesTexture:6,iChannel0:7,areaConservation:i.params.visualizations.areaConservationEnabled,flagSize:[1.5,2],flagCenter:[this.flagCenter.x,this.flagCenter.y],poolSize:[i.params.simulation.poolSize.x,i.params.simulation.poolSize.y,i.params.simulation.poolSize.z],poolSizeVertexShader:[i.params.simulation.poolSize.x,i.params.simulation.poolSize.y,i.params.simulation.poolSize.z],eye:c.eye,sphereCenter:this.sphereCenter,sphereRadius:this.sphereRadius,showProjectionGrid:a.showProjectionGrid,showAreaConservedGrid:a.showAreaConservedGrid,wr:a.WR_position,swimmersNumber:i.swimmers.length,cornerView:i.cornerView,showFlags:i.transitions.showFlags?i.transitions.showFlags.opacity:i.params.visualizations.showFlags,showWR:i.params.visualizations.showWR,showSpeed:i.params.visualizations.showSpeed,showDivingDistance:i.params.visualizations.showDivingDistance,showFinishTimes:i.params.visualizations.showFinishTimes,time:i.getRaceTime(),seed:i.time,foamEnabled:i.params.simulation.foam.enabled,shadowEnabled:n.enabled,shadowRadius:n.shadowRadius,shadowPower:n.shadowPower,showCircle:n.showCircle,shadowCircleRadius:n.circleRadius,shadowCircleStroke:n.circleStroke,showSwimmersLines:Math.round(i.params.visualizations.showSwimmersLinesDict[i.params.visualizations.showSwimmersLines]),swimmersLinesMode:i.params.visualizations.swimmersLinesModeDict[i.params.visualizations.swimmersLinesMode],medalsModeBeforeFinish:Math.round(i.params.visualizations.medalsModesDict[i.params.visualizations.medalsModeBeforeFinish]),medalsModeAfterFinish:Math.round(i.params.visualizations.medalsModesDict[i.params.visualizations.medalsModeAfterFinish]),rendering:i.params.visualizations.renderingDict[i.params.visualizations.rendering].value,waterColorParameter:i.params.visualizations.customParametersDict[i.params.visualizations.waterColorParameter].value}).draw(a.plane);this.gl.disable(this.gl.CULL_FACE)};ce.prototype.renderSpheres=function(a){const t=[];i.params.swimmers.showSpheres&&i.swimmers.forEach(n=>n.spheres.forEach(c=>t.push(c))),i.params.simulation.showFloaters&&i.floaters.forEach(n=>t.push(n));for(let n of t)this.renderSphere(a,n)};ce.prototype.renderSphere=function(a,t){a.textureA.bind(1),this.causticTex.bind(2),this.sphereShader.uniforms({light:this.lightDir,water:1,causticTex:2,sphereCenter:[t.center.x,t.center.y,t.center.z],sphereRadius:t.radius*i.spheresRadiusCoeff,poolSize:[i.params.simulation.poolSize.x,i.params.simulation.poolSize.y,i.params.simulation.poolSize.z],color:[t.color.x,t.color.y,t.color.z]}).draw(t.mesh)};ce.prototype.renderSphereOld=function(a){a.textureA.bind(0),this.causticTex.bind(1),this.sphereShader.uniforms({light:this.lightDir,water:0,causticTex:1,sphereCenter:this.sphereCenter,sphereRadius:this.sphereRadius,poolSize:[i.params.simulation.poolSize.x,i.params.simulation.poolSize.y,i.params.simulation.poolSize.z]}).draw(this.sphereMesh)};ce.prototype.renderCube=function(a){i.renderCube&&(this.gl.enable(this.gl.CULL_FACE),a.textureA.bind(0),this.tileTexture.bind(1),this.causticTex.bind(2),this.cubeShader.uniforms({light:this.lightDir,water:0,tiles:1,causticTex:2,sphereCenter:this.sphereCenter,sphereRadius:this.sphereRadius,poolSize:[i.params.simulation.poolSize.x,i.params.simulation.poolSize.y,i.params.simulation.poolSize.z],renderWater:i.renderWater}).draw(this.cubeMesh),this.gl.disable(this.gl.CULL_FACE))};function Oe(a,t){this.gl=t,this.id=t.createTexture(),t.bindTexture(t.TEXTURE_CUBE_MAP,this.id),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,1),t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texImage2D(t.TEXTURE_CUBE_MAP_NEGATIVE_X,0,t.RGB,t.RGB,t.UNSIGNED_BYTE,a.xneg),t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X,0,t.RGB,t.RGB,t.UNSIGNED_BYTE,a.xpos),t.texImage2D(t.TEXTURE_CUBE_MAP_NEGATIVE_Y,0,t.RGB,t.RGB,t.UNSIGNED_BYTE,a.yneg),t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_Y,0,t.RGB,t.RGB,t.UNSIGNED_BYTE,a.ypos),t.texImage2D(t.TEXTURE_CUBE_MAP_NEGATIVE_Z,0,t.RGB,t.RGB,t.UNSIGNED_BYTE,a.zneg),t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_Z,0,t.RGB,t.RGB,t.UNSIGNED_BYTE,a.zpos)}Oe.prototype.bind=function(a){this.gl.activeTexture(this.gl.TEXTURE0+(a||0)),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,this.id)};Oe.prototype.unbind=function(a){this.gl.activeTexture(this.gl.TEXTURE0+(a||0)),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,null)};const se=new ft,Nt=function(a,t){const n=se.addFolder("visualizations");n.close(),n.add(i,"useConfigFile").name("use configuration file"),n.add(i,"showTimeline").name("show event timeline").listen().onChange(g=>{i.hideEditorPanel(g)}),n.add(i.params.visualizations,"showFlags").name("show flags").listen(),n.add(i.params.visualizations,"showStreaks").name("show streaks").listen(),n.add(i.params.visualizations,"showWR").name("show world record").listen(),n.add(i.params.visualizations,"showSwimmersLines",i.params.visualizations.swimmersLinesList).name("show neighbours lines").listen(),n.add(i.params.visualizations,"swimmersLinesMode",i.params.visualizations.swimmersLinesModeList).name("show neighbours lines").listen(),n.add(i.params.visualizations,"customWaterPerturbation",i.params.visualizations.customParametersList).name("custom water perturbation").listen(),n.add(i.params.visualizations,"waterColorParameter",i.params.visualizations.customParametersList).name("water color parameter").listen(),n.add(i.params.visualizations,"medalsModeBeforeFinish",["none","stars","bright","lanes"]).name("show potential medals").listen(),n.add(i.params.visualizations,"medalsModeAfterFinish",["none","stars","bright","lanes"]).name("show potential medals after finish").listen(),n.add(i.params.visualizations,"showSpeed").name("show speed").listen(),n.add(i.params.visualizations,"showDivingDistance").name("show diving distance").listen(),n.add(i.params.visualizations.shadow,"enabled").name("show shadow"),n.add(i.params.visualizations,"areaConservationEnabled","areaConservationEnabled").name("area conservation").listen(),n.add(i.params.visualizations,"rendering",i.params.visualizations.renderingList).name("rendering").listen().onChange(()=>{i.params.visualizations.rendering=="toon"&&(i.params.simulation.waterDamping=.35)});const c=se.addFolder("video");c.close(),c.add(i.params.video,"opacity").name("opacity").listen(),c.add(i.params.video,"thresholdBlending").name("threshold blending").listen(),c.add(i.params.video,"blendingThreshold",.1,1.5).name("blending threshold"),c.add(i.params.video,"show").name("show").listen(),c.add(i.params.video,"hideObstructions").name("hide obstructions"),c.add(i.params.video,"hideObstructionThreshold",0,.5).name("obstructions threshold");const u=n.addFolder("Sparks");u.close(),u.add(i.params.visualizations.sparks,"enabled").name("sparks enabled"),u.add(i.params.visualizations.sparks,"glow",1,30).name("sparks glow factor"),u.add(i.params.visualizations.sparks,"lengthFactor",.1,10).name("sparks length factor"),u.add(i.params.visualizations.sparks,"glowOffset",.1,3).name("sparks glow offset"),u.add(i.params.visualizations.sparks,"stroke",.001,.05).name("sparks stroke"),u.add(i.params.visualizations.sparks,"num",10,Ze).step(1).name("sparks number"),u.add(i.params.visualizations.sparks,"sizeFactor",10,100).name("size factor");const f=n.addFolder("Swimmers shadows");f.close(),f.add(i.params.visualizations.shadow,"shadowRadius",0,2).name("shadow radius"),f.add(i.params.visualizations.shadow,"shadowPower",.1,2).name("shadow power"),f.add(i.params.visualizations.shadow,"showCircle").name("circle"),f.add(i.params.visualizations.shadow,"circleRadius",.5,2).name("circle radius"),f.add(i.params.visualizations.shadow,"circleStroke",.1,.5).name("circle stroke");const x=se.addFolder("Simulation");x.close(),x.add(i.params.simulation,"showFloaters").name("show floaters").listen(),x.add(i.params.simulation,"optimized").name("optimized").listen(),x.add(i.params.simulation.poolSize,"x",1,25).name("pool width").onChange(function(g){t()}).listen(),x.add(i.params.simulation.poolSize,"z",1,50).name("pool height").onChange(function(g){t()}).listen(),x.add(i.params.simulation.poolSize,"y",1,3).name("pool depth").onChange(function(g){t()}).listen(),x.add(i.params.simulation,"waterDamping",.005,.4).name("water damping").listen();const b=x.addFolder("foam");b.close(),b.add(i.params.simulation.foam,"enabled").name("enabled"),b.add(i.params.simulation.foam,"velThreshold",0,15).name("velocity threshold"),b.add(i.params.simulation.foam,"velMax",0,20).name("max velocity"),b.add(i.params.simulation.foam,"dispersion",0,.1).name("dispersion"),b.add(i.params.simulation.foam,"timeVariation",0,10).name("time variation"),b.add(i.params.simulation.foam,"spaceVariation",0,100).name("space variation"),b.add(i.params.simulation.foam,"attenuation",0,.2).name("attenuation");const P=x.addFolder("splash");P.close(),P.add(i.params.simulation.splashes,"enabled").name("enabled"),P.add(i.params.simulation.splashes,"strengthThreshold",.1,10).name("strength threshold");const L=se.addFolder("swimmers");L.close(),L.add(i.params.swimmers,"showSpheres").name("show spheres").listen(),L.add(i.params.swimmers,"useTracking").name("use tracking data").listen();const k=se.addFolder("camera");k.close(),k.add(i.params,"fov",28,45).name("fov").listen().onChange(function(g){i.params.visualizations.sparks.fov=g*2*Math.PI/360,a.matrixMode(a.PROJECTION),a.loadIdentity(),a.perspective(i.params.fov,a.canvas.width/a.canvas.height,.01,100),a.matrixMode(a.MODELVIEW),console.log("perspective : "+i.params.fov)});const w=se.addFolder("quiver");w.close(),w.add(i.params.quiver,"amplitude",.01,1).name("amplitude"),w.add(i.params.quiver,"omega",.5,5).name("omega"),w.add(i.params.quiver,"amplitudeFactor",.5,.9).name("amplitude factor"),w.add(i.params.quiver,"frequencyFactor",1.1,2).name("frequency factor"),w.add(i.params.quiver,"waveLength",1,30).name("wave length");const V=se.addFolder("corner view");V.close(),V.add(i.params.cornerView,"show").name("show");const B=se.addFolder("chrono-photography");B.close(),B.add(i.params.chronoPhotography,"available").name("available").onChange(()=>{i.params.chronoPhotography.available?i.drawingFrameBuffer=i.chronoFrameBuffer:i.drawingFrameBuffer=null}),i._gui=se},Ce=150,le=100;function Ot(a){const t=document.createElement("div");if(document.body.appendChild(t),t.id="event-editor",t.style.position="fixed",t.display="block",t.style.bottom="60px",t.style.left="10px",t.style.right="10px",t.style.height="120px",t.style.zIndex="4",t.style.background="#222",t.style.color="#fff",t.style.overflow="auto",t.style.padding="4px",t.style.fontSize="12px",t.style.position=t.style.position||"relative",!t){console.warn(`event editor container "${a}" not found`);return}let n,c=!1;const u=[{name:"showFlags",type:"boolean"},{name:"showWR",type:"boolean"},{name:"showSpeed",type:"boolean"},{name:"showDivingDistance",type:"boolean"},{name:"showFinishTimes",type:"boolean"},{name:"showSwimmersLines",type:"select",options:i.params.visualizations.swimmersLinesList},{name:"swimmersLinesMode",type:"select",options:i.params.visualizations.swimmersLinesModeList},{name:"customWaterPerturbation",type:"select",options:i.params.visualizations.customParametersList},{name:"waterColorParameter",type:"select",options:i.params.visualizations.customParametersList},{name:"medalsModeBeforeFinish",type:"select",options:["none","stars","bright","lanes"]},{name:"medalsModeAfterFinish",type:"select",options:["none","stars","bright","lanes"]},{name:"rankSwimmerToggle",type:"number",min:1,max:10},{name:"showStreaks",type:"boolean"}];function f(g){const R=document.createElement("div");R.style.flex="1",R.style.padding="4px",R.style.background="#222",R.style.border="1px solid #555",R.style.borderRadius="4px",R.style.fontFamily="monospace",R.style.fontSize="12px",R.style.whiteSpace="pre-wrap",R.style.overflow="auto",R.style.maxHeight="100px";function A(){const N=g.params;if(Object.keys(N).length===0){R.textContent="(no params)";return}const G=Object.entries(N).map(([U,M])=>`${U}: ${JSON.stringify(M)}`);R.textContent=G.join(`
`)}return A(),{element:R,update:A}}function x(g,R){const A=document.createElement("div");A.style.display="flex",A.style.flexWrap="wrap",A.style.margin="4px 0",A.style.background="#333",A.style.padding="4px";function N(){R&&(R(),B())}u.forEach(D=>{const j=document.createElement("div");j.style.marginRight="8px",j.style.marginBottom="4px";const te=document.createElement("label");te.style.whiteSpace="nowrap",te.textContent=D.name+":",j.appendChild(te);let I;if(D.type==="boolean"){I=document.createElement("select"),[{value:"",label:"—"},{value:"true",label:"ON"},{value:"false",label:"OFF"}].forEach(K=>{const E=document.createElement("option");E.value=K.value,E.textContent=K.label,I.appendChild(E)});const Y=g.params[D.name];Y===void 0?I.value="":Y===!0?I.value="true":Y===!1&&(I.value="false"),I.addEventListener("change",()=>{I.value===""?delete g.params[D.name]:I.value==="true"?g.params[D.name]=!0:I.value==="false"&&(g.params[D.name]=!1),N()})}else if(D.type==="select"){I=document.createElement("select");const H=document.createElement("option");H.value="",H.textContent="—",I.appendChild(H),D.options.forEach(Y=>{const K=document.createElement("option");K.value=Y,K.textContent=Y,I.appendChild(K)}),I.value=g.params[D.name]||"",I.addEventListener("change",()=>{I.value===""?delete g.params[D.name]:g.params[D.name]=I.value,N()})}else D.type==="number"&&(I=document.createElement("input"),I.type="number",D.min!==void 0&&(I.min=D.min),D.max!==void 0&&(I.max=D.max),I.placeholder="—",I.style.width="50px",I.value=g.params[D.name]!==void 0?g.params[D.name]:"",I.addEventListener("change",()=>{if(I.value==="")delete g.params[D.name];else{const H=parseFloat(I.value);isNaN(H)||(g.params[D.name]=H)}N()}));I&&j.appendChild(I),A.appendChild(j)});const G=document.createElement("div");G.style.marginRight="8px",G.style.marginBottom="4px";const U=document.createElement("label");U.style.whiteSpace="nowrap",U.textContent="transition :",G.appendChild(U);const M=document.createElement("input");return M.type="number",M.min=0,M.placeholder="—",M.style.width="50px",M.value=g.transition!==void 0?g.transition.duration:"",M.addEventListener("change",()=>{if(M.value===""){delete g.transition;return}const D=parseFloat(M.value);isNaN(D)||(g.transition={type:"dissolve",duration:D},N())}),G.appendChild(M),A.appendChild(G),A}function b(){const g=document.createElement("div");g.style.marginTop="8px",g.style.padding="8px",g.style.background="#555",g.style.border="1px solid #777";const R=document.createElement("div");R.textContent="Add New Event",R.style.fontWeight="bold",R.style.marginBottom="4px",g.appendChild(R);const A=document.createElement("input");A.type="number",A.placeholder="Distance",A.style.width="auto",A.style.marginRight="8px",g.appendChild(A);const N={params:{}},G=x(N,null);G.style.margin="4px 0",g.appendChild(G);const U=document.createElement("button");U.textContent="OK",U.addEventListener("click",()=>{const D=parseFloat(A.value);if(isNaN(D)){alert("Please enter a valid distance");return}const j={distance:D,...N};i.events.push(j),B(),n.remove(),n=null}),g.appendChild(U);const M=document.createElement("button");return M.textContent="cancel",M.addEventListener("click",()=>{n.remove(),n=null}),g.appendChild(M),g}function P(g,R,{title:A="",id:N=null,color:G="#e74c3c"}){const U=g/R*100,M=document.createElement("div");return M.style.position="absolute",M.style.left=U+"%",M.style.transform="translateX(-50%)",M.style.width="4px",M.style.height="100%",M.style.background=G,M.style.cursor="pointer",M.title=A,N&&(M.id=N),M.addEventListener("click",()=>{V(idx)}),M}function L(){let g=document.getElementById("distance-marker");const R=i.swimmers[0].getDistanceTraveled();if(!g){if(c)return;const A=document.getElementById("timeline-track");g=P(R,le,{color:"blue",id:"distance-marker"}),A.appendChild(g)}g.style.left=R+"%"}function k(g){c=g,w()}function w(){t.innerHTML="";const g=document.createElement("button");if(g.textContent=c?"□":"—",g.style.position="absolute",g.style.top="0",g.style.right="0",g.style.width="20px",g.style.height="20px",g.style.zIndex="100001",g.addEventListener("click",()=>{c=!c,w()}),t.appendChild(g),c){t.style.height="20px";return}t.style.height="300px";const R=document.createElement("div");if(R.style.position="relative",R.style.top="0px",R.style.left="50%",R.style.transform="translateX(-50%)",R.style.width="80px",R.style.height="15px",R.style.background="grey",R.style.border="1px solid black",R.style.cursor="ns-resize",R.style.zIndex="100000",R.style.lineHeight="16px",R.style.textAlign="center",R.textContent="drag",t.appendChild(R),R.addEventListener("mousedown",r=>{r.preventDefault();const l=r.clientY,d=t.offsetHeight;function h(T){const y=d-(T.clientY-l);y>20&&(t.style.height=y+"px")}function m(){document.removeEventListener("mousemove",h),document.removeEventListener("mouseup",m)}document.addEventListener("mousemove",h),document.addEventListener("mouseup",m)}),!i.events){t.textContent="no events defined";return}const A=document.createElement("div");t.appendChild(A),A.style.marginRight="8px",A.style.marginBottom="4px";const N=document.createElement("label");N.style.whiteSpace="nowrap",N.textContent="select scene",N.style.margin="30px",A.appendChild(N);const G=document.createElement("select");G.style.width="auto",i.scenesList.forEach(r=>{const l=document.createElement("option");l.textContent=r.title,l.value=r.title,G.appendChild(l)}),G.addEventListener("change",()=>{i.setScene(G.value)}),A.appendChild(G);const U=i.events.slice().sort((r,l)=>{const d=r.distance!==void 0?r.distance:r.time!==void 0?r.time:0,h=l.distance!==void 0?l.distance:l.time!==void 0?l.time:0;return d-h}),M=new Set;U.forEach(r=>{r.params&&Object.keys(r.params).forEach(l=>M.add(l))});let D=u.map(r=>r.name).filter(r=>M.has(r));const j=["#4caf50","#2196f3","#ff9800","#9c27b0","#f44336","#009688","#e91e63","#3f51b5"],te={};D.forEach((r,l)=>{te[r]=j[l%j.length]});const I={},H={};D.forEach(r=>{H[r]=!1,I[r]=0});const Y=[];if(U.forEach(r=>{const l=r.distance!==void 0?r.distance:r.time!==void 0?r.time:0;r.params&&Object.keys(r.params).forEach(d=>{if(D.includes(d)){const h=!!r.params[d];h!==H[d]&&(H[d]&&Y.push({name:d,start:I[d],end:l}),H[d]=h,I[d]=l)}})}),D.forEach(r=>{H[r]&&Y.push({name:r,start:I[r],end:le})}),D.length>0){const r=document.createElement("div");r.style.position="relative";const l=20;r.style.height=D.length*l+"px",r.style.background="#222",r.style.marginBottom="4px",r.style.marginTop="10px",D.forEach((h,m)=>{const T=document.createElement("div");T.textContent=h,T.style.position="absolute",T.style.left="0",T.style.top=m*l+2+"px",T.style.width=Ce+"px",T.style.color="#aaa",T.style.fontSize="10px",T.style.pointerEvents="none",r.appendChild(T)});const d=document.createElement("div");d.style.position="absolute",d.style.left=Ce+"px",d.style.top="0",d.style.right="0",d.style.bottom="0",d.style.overflow="hidden",r.appendChild(d),Y.forEach(h=>{const m=document.createElement("div"),T=h.start/le*100,y=(h.end-h.start)/le*100;m.style.position="absolute",m.style.left=T+"%",m.style.top=D.indexOf(h.name)*l+2+"px",m.style.height=l-4+"px",m.style.width=y+"%",m.style.background=te[h.name]||"#4caf50",m.title=`${h.name}: ${h.start.toFixed(2)} → ${h.end.toFixed(2)}`;const v=document.createElement("span");if(v.textContent=`${h.name}: ${h.start.toFixed(2)} → ${h.end.toFixed(2)}`,v.style.position="absolute",v.style.top="0",v.style.left="2px",v.style.fontSize="10px",v.style.color="white",v.style.pointerEvents="none",v.style.whiteSpace="nowrap",v.style.overflow="hidden",v.style.textOverflow="ellipsis",m.appendChild(v),h.end<le){const _=document.createElement("div");_.style.position="absolute",_.style.right="0",_.style.top="0",_.style.width="5px",_.style.height="100%",_.style.background="rgba(255,255,255,0.5)",_.style.cursor="ew-resize",m.appendChild(_),_.addEventListener("mousedown",C=>{C.preventDefault(),C.stopPropagation();const z=C.clientX,F=m.offsetWidth;function X(J){const re=J.clientX-z,ne=Math.max(1,F+re),ue=ne/d.offsetWidth*100;m.style.width=ue+"%";const dt=h.start+ne/d.offsetWidth*le;v.textContent=`${h.name}: ${h.start.toFixed(2)} → ${dt.toFixed(2)}`}function W(){document.removeEventListener("mousemove",X),document.removeEventListener("mouseup",W);const J=m.offsetWidth,re=h.start+J/d.offsetWidth*le,ne=U.find(ue=>(ue.distance!==void 0?ue.distance:ue.time!==void 0?ue.time:0)===h.end);ne&&(ne.distance!==void 0?ne.distance=re:ne.time!==void 0&&(ne.time=re)),B()}document.addEventListener("mousemove",X),document.addEventListener("mouseup",W)})}d.appendChild(m)}),t.appendChild(r)}const K=document.createElement("div");K.style.position="relative",K.style.height="40px",K.style.background="#222",K.style.marginBottom="4px",K.style.paddingLeft="80px";const E=document.createElement("div");E.id="timeline-track",E.style.position="absolute",E.style.background="#444",E.style.left=Ce+"px",E.style.top="0",E.style.right="0",E.style.bottom="0",K.appendChild(E),U.forEach((r,l)=>{const d=r.distance!==void 0?r.distance:r.time!==void 0?r.time:0,h=`event ${l}: ${JSON.stringify(r.params)}`,m=P(d,le,{title:h});E.appendChild(m)}),t.appendChild(K),U.forEach((r,l)=>{const d=document.createElement("div");d.style.display="flex",d.style.flexDirection="column",d.style.marginBottom="4px";const h=document.createElement("div");h.style.display="flex",h.style.alignItems="center";const m=document.createElement("input");m.type="number",m.style.width="60px",m.value=r.distance!==void 0?r.distance:r.time!==void 0?r.time:0,m.addEventListener("change",()=>{const C=parseFloat(m.value);isNaN(C)||(r.distance!==void 0?r.distance=C:r.time=C,B())}),h.appendChild(m);const T=f(r);h.appendChild(T.element);const y=document.createElement("button");y.textContent="⚙",y.style.marginLeft="4px",h.appendChild(y);const v=document.createElement("button");v.textContent="✖",v.style.marginLeft="4px",v.addEventListener("click",()=>{const C=i.events.indexOf(U[l]);C!==-1&&(i.events.splice(C,1),w())}),h.appendChild(v),d.appendChild(h);let _;y.addEventListener("click",()=>{_?(_.remove(),_=null):(_=x(r,T.update),d.appendChild(_))}),t.appendChild(d)});const o=document.createElement("button");o.textContent="+ add event",o.addEventListener("click",()=>{n?(n.remove(),n=null):(n=b(),t.appendChild(n),t.scrollTop=t.scrollHeight)}),t.appendChild(o);const s=document.createElement("button");s.textContent="export JSON",s.style.marginLeft="8px",s.addEventListener("click",()=>{const r=JSON.stringify(i.events,null,2),l=new Blob([r],{type:"application/json"}),d=URL.createObjectURL(l),h=document.createElement("a");h.href=d,h.download="vis-config.json",h.click(),URL.revokeObjectURL(d)}),t.appendChild(s);const e=document.createElement("input");e.type="file",e.accept=".json",e.style.marginLeft="8px",e.addEventListener("change",r=>{const l=r.target.files[0];if(l){const d=new FileReader;d.onload=h=>{try{const m=JSON.parse(h.target.result);i.events=m,B()}catch(m){alert("Invalid JSON: "+m.message)}},d.readAsText(l)}}),t.appendChild(e)}function V(g){const A=t.querySelectorAll("div")[1+g];A&&A.scrollIntoView({behavior:"smooth",block:"center"})}function B(){i.events.sort((g,R)=>{const A=g.distance!==void 0?g.distance:g.time!==void 0?g.time:0,N=R.distance!==void 0?R.distance:R.time!==void 0?R.time:0;return A-N}),w()}w(),i._renderTimeline=w,i._updateDistanceMarker=L,i._setPannelMinimized=k}const at=new p.Mesh.plane({width:2,height:2,coords:!0,normals:!0}),Vt=new p.Shader(`
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
`);let we=new p.Texture,Be=new p.Texture,st=!1,Ye=null;const nt=(a,t,n)=>{st=!0,we=new p.Texture(a,t,{type:n.FLOAT,filter:n.NEAREST}),Be=new p.Texture(a,t,{type:n.FLOAT,filter:n.NEAREST}),Ye=n.createFramebuffer(),n.bindFramebuffer(n.FRAMEBUFFER,Ye);const c=n.COLOR_ATTACHMENT0;n.framebufferTexture2D(n.FRAMEBUFFER,c,n.TEXTURE_2D,we.id,0),n.bindFramebuffer(n.FRAMEBUFFER,null)};function Fe(a){a.x/=i.gl.canvas.width/2,a.x-=1,a.y/=i.gl.canvas.height/2,a.y-=1}const lt=a=>{console.log("take chrono photo : "+a),st||nt(i.gl.canvas.width,i.gl.canvas.height,i.gl);const t=i.params.simulation.poolSize,n=i.gl.project(t.x/2,0,i.distanceFixed+1-t.z/2),c=i.gl.project(-t.x/2,0,i.distanceFixed+1-t.z/2);Fe(n),Fe(c);const u=i.swimmers[0].body.center,f=i.gl.project(u.x,u.y,u.z);Fe(f),Be.drawTo(()=>{we.bind(0),i.gl.activeTexture(i.gl.TEXTURE1),i.gl.bindTexture(i.gl.TEXTURE_2D,i.drawingTexture),i.gl.activeTexture(i.gl.TEXTURE2),i.gl.bindTexture(i.gl.TEXTURE_2D,i.currentVideo.texture),Vt.uniforms({oldPicture:0,screen:1,videoTex:2,distanceFixed:i.distanceFixed,poolSize:[i.params.simulation.poolSize.x,i.params.simulation.poolSize.y,i.params.simulation.poolSize.z],linep1:[n.x,n.y],linep2:[c.x,c.y],center:[f.x,f.y],circleZone:a}).draw(at)}),we.swapWith(Be),i.gl.bindFramebuffer(i.gl.FRAMEBUFFER,i.drawingFrameBuffer)},Gt=()=>{i.chronoPhotoCircleTime&&i.time>=i.chronoPhotoCircleTime&&(i.chronoPhotoCircleTime=null,lt(!0)),i.gl.bindFramebuffer(i.gl.FRAMEBUFFER,null),we.bind(7),i.gl.activeTexture(i.gl.TEXTURE8),i.gl.bindTexture(i.gl.TEXTURE_2D,i.drawingTexture),Ut.uniforms({picture:7,screen:8}).draw(at)};i._fixTexture=lt;i._clearChronoTexture=nt;function Wt(a){return a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n/g,"<br>")}function Xt(a){var t=Wt(a);t=="WebGL not supported"&&(t='Your browser does not support WebGL.<br>Please see    <a href="http://www.khronos.org/webgl/wiki/Getting_a_WebGL_Implementation">    Getting a WebGL Implementation</a>.');var n=document.getElementById("loading");n.innerHTML=t,n.style.zIndex=1}window.onerror=Xt;var Pe,$;const Ht=10,S=i.gl;var Ee,Ne;O.initAttributes();function ct(){document.getElementById("warning").hidden=!(i.resolution.x*i.resolution.y>3e5&&i.water&&i.params.visualizations.areaConservationEnabled)}let Me=0;function qt(a){Me+=a,Me>=1&&(document.getElementById("fps").innerText=`${(1/a).toFixed(1)} FPS`,Me=0)}function me(){console.log("reset"),document.getElementById("resolution").innerText=`Resolution: ${i.resolution.x} x ${i.resolution.y}`,ct(),Ee=new p.Vector(0,-i.params.simulation.poolSize.z/2+1),i.water.reset(i.resolution),$.flagCenter=Ee,$.flagSize=Ne,$.reset();const a=i.params.simulation.poolSize.x/Ht;let t=i.params.simulation.poolSize.x/2-a/2;for(let n of i.swimmers)n.body.center.x=t,n.startingPoint.x=t,t-=a}function Yt(a){const t=parseFloat(a.target.value);isNaN(t)||(i.setRaceTime(t),i.swimmers.forEach(n=>n.setCurrentDataIndex()))}window.onload=function(){var a=window.devicePixelRatio||1,t=document.getElementById("help");function n(){var r=innerWidth,l=innerHeight;S.canvas.width=r*a,S.canvas.height=l*a,S.canvas.style.width=r+"px",S.canvas.style.height=l+"px",S.viewport(0,0,S.canvas.width,S.canvas.height),S.matrixMode(S.PROJECTION),S.loadIdentity(),S.perspective(i.params.fov,S.canvas.width/S.canvas.height,.01,100),S.matrixMode(S.MODELVIEW),i.resetDrawingTexture(),e()}document.body.appendChild(S.canvas),S.canvas.oncontextmenu=function(r){r.preventDefault()},S.clearColor(0,0,0,1),Ee=new p.Vector(0,-i.params.simulation.poolSize.z/2+1),Ne=.7;const c=document.getElementById("time-slider");c&&c.addEventListener("input",Yt);const u=document.getElementById("drop-zone");let f=0;document.addEventListener("dragenter",r=>{f++,u.style.display="flex"}),document.addEventListener("dragover",r=>{r.preventDefault(),r.dataTransfer.dropEffect="copy"}),document.addEventListener("dragleave",r=>{f--,f===0&&(u.style.display="none")}),Nt(S,me),i._reset=me,setTimeout(()=>{Ot("event-editor")},50),$=new ce(S,i.water,Ee,Ne),Pe=new Oe({xneg:document.getElementById("xneg"),xpos:document.getElementById("xpos"),yneg:document.getElementById("ypos"),ypos:document.getElementById("ypos"),zneg:document.getElementById("zneg"),zpos:document.getElementById("zpos")},S);const x=new O(new p.Vector(0,0,0));if(i.swimmers.push(x),i.water=new ae(i.gl),!i.water.textureA.canDrawTo()||!i.water.textureB.canDrawTo())throw new Error("Rendering to floating-point textures is required but not supported");me();for(var b=0;b<20;b++)i.water.addDrop(Math.random()*2-1,Math.random()*2-1,.06,b&1?.01:-.01);document.getElementById("loading").innerHTML="",n();var P=window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(r){setTimeout(r,0)},L=new Date().getTime();function k(){var r=new Date().getTime();i.paused||(o((r-L)/1e3),e()),L=r,P(k)}P(k),window.onresize=n;var w,V,B,g=-1,R=0,A=1,N=2;const G=3;var U,M;function D(r,l,d){if(U=r,M=l,!d||d.button===0){var h=new p.Raytracer,m=h.getRayForPixel(r*a,l*a),T=h.eye.add(m.multiply(-h.eye.y/m.y));for(let v of i.swimmers){var y=p.Raytracer.hitTestSphere(h.eye,m,v.body.center,v.body.radius);if(y){g=A,B=v,v.body.cinematic=!0,w=y.hit,V=h.getRayForPixel(S.canvas.width/2,S.canvas.height/2).negative();return}}Math.abs(T.x)<i.params.simulation.poolSize.x/2&&Math.abs(T.z)<i.params.simulation.poolSize.z/2&&(g=R,j(r,l))}else d.button===2?g=N:d.button===1&&(g=G)}function j(r,l,d){switch(g){case R:{var h=new p.Raytracer,m=h.getRayForPixel(r*a,l*a),T=h.eye.add(m.multiply(-h.eye.y/m.y));i.water.addDrop(T.x/i.params.simulation.poolSize.x*2,T.z/i.params.simulation.poolSize.z*2,.06,.03),i.paused&&(i.water.updateNormals(),$.updateCaustics(i.water));break}case A:{var h=new p.Raytracer,m=h.getRayForPixel(r*a,l*a),y=-V.dot(h.eye.subtract(w))/V.dot(m),v=h.eye.add(m.multiply(y));const z=B.body.center.add(v.subtract(w)),F=B.body.radius,X=Math.max(F-i.params.simulation.poolSize.x/2,Math.min(i.params.simulation.poolSize.x/2-F,z.x)),W=Math.max(F-i.params.simulation.poolSize.y,Math.min(10,z.y)),J=Math.max(F-i.params.simulation.poolSize.z/2,Math.min(i.params.simulation.poolSize.z/2-F,z.z));B.body.move(new p.Vector(X,W,J)),w=v,i.paused&&$.updateCaustics(i.water);break}case N:{if(d&&d.shiftKey){i.angleZ-=r-U,i.angleZ=Math.max(-89.999,Math.min(89.999,i.angleZ));break}i.angleY-=r-U,i.angleX-=l-M,i.angleX=Math.max(-89.999,Math.min(89.999,i.angleX));break}case G:{const _=.001*i.zoomDistance;i.translateX+=_*(r-U),i.translateY-=_*(l-M)}}U=r,M=l,i.paused&&e()}function te(){g=-1,B&&(B.body.cinematic=!O.useGravity)}function I(r){return r===t||r.parentNode&&I(r.parentNode)}function H(r){return r&&(r.id==="event-editor"||r.parentNode&&H(r.parentNode))}function Y(r){i.zoomDistance*=1-r*2e-4,i.zoomDistance=Math.max(2,Math.min(1e3,i.zoomDistance)),i.paused&&e()}addEventListener("wheel",function(r){if(!H(r.target)){var l=r.deltaY;Y(-l)}}),document.onmousedown=function(r){S.canvas.focus(),I(r.target)||D(r.pageX,r.pageY,r)},document.onmousemove=function(r){j(r.pageX,r.pageY,r)},document.onmouseup=function(){te()},document.ontouchstart=function(r){r.touches.length===1&&!I(r.target)&&(r.preventDefault(),D(r.touches[0].pageX,r.touches[0].pageY,!1))},document.ontouchmove=function(r){r.touches.length===1&&j(r.touches[0].pageX,r.touches[0].pageY)},document.ontouchend=function(r){r.touches.length==0&&te()};function K(){i.paused?i.play():i.pause()}const E=async function(r){if(r.which==32)K();else if(r.which==71)i.useGravity(!O.useGravity);else if(r.which==76&&i.paused)e();else if(r.which==74)i.swimmers.forEach(l=>l.jump(2));else if(r.which==67)i.params.visualizations.areaConservationEnabled=!i.params.visualizations.areaConservationEnabled,ct(),console.log("Area conservation "+(i.params.visualizations.areaConservationEnabled?"enabled.":"disabled."));else if(r.which==80)i.water.showProjectionGrid=!i.water.showProjectionGrid,console.log("Projection grid "+(i.water.showProjectionGrid?"enabled.":"disabled."));else if(r.which==65)i.water.showAreaConservedGrid=!i.water.showAreaConservedGrid,console.log("Area conserved grid "+(i.water.showAreaConservedGrid?"enabled.":"disabled."));else if(r.which==83){if(O.swimming=!O.swimming,O.swimming)for(let l of i.swimmers)l.swim(!0);else stopRace();console.log("Swimming "+(O.swimming?"enabled.":"disabled."))}else r.which==86?i.params.video.show=!i.params.video.show:r.which==72?(document.getElementById("commands").hidden=!document.getElementById("commands").hidden,document.getElementById("h").hidden=!document.getElementById("h").hidden):r.which==68?i.playingDemo?i.stopDemo():await i.launchDemo():r.which==81?i.chronoPhotography({}):r.which==82?(i.setScene("100m freestyle").then(()=>i.startRace()),i._setPannelMinimized(!0)):r.which==75?i.recalibrate():r.which==40?(i.resolution.x>129&&(i.resolution.x=Math.round(i.resolution.x/2)),me(),console.log("decreasing x resolution")):r.which==38?(i.resolution.x<16384&&(i.resolution.x=Math.round(i.resolution.x*2)),me(),console.log("increasing x resolution")):r.which==37?(i.resolution.y>129&&(i.resolution.y=Math.round(i.resolution.y/2)),me(),console.log("decreasing y resolution")):r.which==39&&(i.resolution.y<16384&&(i.resolution.y=Math.round(i.resolution.y*2)),me(),console.log("increasing y resolution"))};S.canvas.addEventListener("keydown",E);function o(r){if(!(r>1)){if(g==A)for(let l of i.swimmers)l.body.velocity=new p.Vector(0,0,0);S.clearColor(0,0,0,1),S.bindFramebuffer(S.FRAMEBUFFER,null),S.clear(S.COLOR_BUFFER_BIT|S.DEPTH_BUFFER_BIT);for(let l of i.swimmers)l.update(r);i.updateFloaters(r),i.water.updateSpheres(r);for(let l=0;l<i.params.numSteps;l++)i.water.stepSimulation(r);$.updateCaustics(i.water),i.updateTime(r),i.updateParams(),c.value=i.getRaceTime(),qt(r),i.updateDemo(r),i.splashParticles.update(r)}}function s(){if(!O.raceHasStarted||!i.params.cornerView.show)return;i.cornerView=!0,S.loadIdentity(),S.translate(0,0,-35),S.rotate(90,1,0,0),S.rotate(-90,0,1,0),S.translate(0,.5,0);const r=S.canvas.height/3,l=16*r/9,d=0,h=S.canvas.height-r;S.viewport(d,h,l,r),$.renderWater(i.water,Pe,i.params.visualizations.shadow),i.isSceneSynchronizedSwimming()&&(i.params.visualizations.showStreaks||i.params.simulation.splashes.enabled)&&i.splashParticles.draw({}),$.renderSpheres(i.water),S.viewport(0,0,S.canvas.width,S.canvas.height),S.loadIdentity(),S.translate(i.translateX,i.translateY,-i.zoomDistance),S.rotate(-i.angleZ,0,0,1),S.rotate(-i.angleX,1,0,0),S.rotate(-i.angleY,0,1,0),S.translate(0,.5,0),i.cornerView=!1}function e(){p.keys.L&&($.lightDir=p.Vector.fromAngles((90-i.angleY)*Math.PI/180,-i.angleX*Math.PI/180),i.paused&&$.updateCaustics(i.water)),i.isOneVisualizationEnabled()&&O.updateAttributesTexture(),i.water.addOrRemoveVisualizationWaves(!0),i.water.updateNormals(),S.clearColor(.1,.2,.5,1),S.bindFramebuffer(S.FRAMEBUFFER,i.drawingFrameBuffer),S.clear(S.COLOR_BUFFER_BIT|S.DEPTH_BUFFER_BIT),S.loadIdentity(),S.translate(i.translateX,i.translateY,-i.zoomDistance),S.rotate(-i.angleZ,0,0,1),S.rotate(-i.angleX,1,0,0),S.rotate(-i.angleY,0,1,0),S.translate(0,.5,0),S.enable(S.DEPTH_TEST),S.disable(S.BLEND),S.viewport(0,0,S.canvas.width,S.canvas.height),$.sphereCenter=i.swimmers[0].body.center,$.sphereRadius=i.swimmers[0].body.radius,$.renderCube(i.water),$.renderWater(i.water,Pe,i.params.visualizations.shadow),$.renderSpheres(i.water),S.disable(S.DEPTH_TEST);const r={};(i.params.visualizations.showStreaks||i.params.simulation.splashes.enabled)&&i.splashParticles.draw(r),i.renderVideo(),i.params.chronoPhotography.available&&Gt(),s(),i.water.addOrRemoveVisualizationWaves(!1)}};
//# sourceMappingURL=swimming-CC5jXgcW.js.map
