var $e=Object.defineProperty;var Ie=i=>{throw TypeError(i)};var Je=(i,r,n)=>r in i?$e(i,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[r]=n;var te=(i,r,n)=>Je(i,typeof r!="symbol"?r+"":r,n),Qe=(i,r,n)=>r.has(i)||Ie("Cannot "+n);var ve=(i,r,n)=>r.has(i)?Ie("Cannot add the same private member more than once"):r instanceof WeakSet?r.add(i):r.set(i,n);var Z=(i,r,n)=>(Qe(i,r,"access private method"),n);import"./modulepreload-polyfill-B5Qt9EMX.js";import{g as et}from"./lil-gui.module.min-Vka56b52.js";var v=function(){var i,r={create:function(t){t=t||{};var s=document.createElement("canvas");s.width=800,s.height=600,"alpha"in t||(t.alpha=!1);try{i=s.getContext("webgl2",t)}catch{}try{i=i||s.getContext("experimental-webgl",t)}catch{}if(!i)throw new Error("WebGL not supported");return i.HALF_FLOAT_OES=36193,n(),d(),u(),L(),i},keys:{},Matrix:y,Indexer:q,Buffer:G,Mesh:T,HitTest:N,Raytracer:U,Shader:M,Texture:C,Vector:w};function n(){i.MODELVIEW=k|1,i.PROJECTION=k|2;var t=new y,s=new y;i.modelviewMatrix=new y,i.projectionMatrix=new y;var e=[],o=[],l,c;i.matrixMode=function(h){switch(h){case i.MODELVIEW:l="modelviewMatrix",c=e;break;case i.PROJECTION:l="projectionMatrix",c=o;break;default:throw new Error("invalid matrix mode "+h)}},i.loadIdentity=function(){y.identity(i[l])},i.loadMatrix=function(h){for(var m=h.m,x=i[l].m,p=0;p<16;p++)x[p]=m[p]},i.multMatrix=function(h){i.loadMatrix(y.multiply(i[l],h,s))},i.perspective=function(h,m,x,p){i.multMatrix(y.perspective(h,m,x,p,t))},i.frustum=function(h,m,x,p,f,_){i.multMatrix(y.frustum(h,m,x,p,f,_,t))},i.ortho=function(h,m,x,p,f,_){i.multMatrix(y.ortho(h,m,x,p,f,_,t))},i.scale=function(h,m,x){i.multMatrix(y.scale(h,m,x,t))},i.translate=function(h,m,x){i.multMatrix(y.translate(h,m,x,t))},i.rotate=function(h,m,x,p){i.multMatrix(y.rotate(h,m,x,p,t))},i.lookAt=function(h,m,x,p,f,_,S,b,z){i.multMatrix(y.lookAt(h,m,x,p,f,_,S,b,z,t))},i.pushMatrix=function(){c.push(Array.prototype.slice.call(i[l].m))},i.popMatrix=function(){var h=c.pop();i[l].m=D?new Float32Array(h):h},i.project=function(h,m,x,p,f,_){p=p||i.modelviewMatrix,f=f||i.projectionMatrix,_=_||i.getParameter(i.VIEWPORT);var S=f.transformPoint(p.transformPoint(new w(h,m,x)));return new w(_[0]+_[2]*(S.x*.5+.5),_[1]+_[3]*(S.y*.5+.5),S.z*.5+.5)},i.unProject=function(h,m,x,p,f,_){p=p||i.modelviewMatrix,f=f||i.projectionMatrix,_=_||i.getParameter(i.VIEWPORT);var S=new w((h-_[0])/_[2]*2-1,(m-_[1])/_[3]*2-1,x*2-1);return y.inverse(y.multiply(f,p,t),s).transformPoint(S)},i.matrixMode(i.MODELVIEW)}function d(){var t={mesh:new T({coords:!0,colors:!0,triangles:!1}),mode:-1,coord:[0,0,0,0],color:[1,1,1,1],shader:new M("      uniform float pointSize;      out vec4 color;      out vec4 coord;      void main() {        color = gl_Color;        coord = gl_TexCoord;        gl_Position = gl_ModelViewProjectionMatrix * gl_Vertex;        gl_PointSize = pointSize;      }    ","      uniform sampler2D tex;      uniform float pointSize;      uniform bool useTexture;      in vec4 color;      in vec4 coord;      out vec4 fragColor;      void main() {        fragColor = color;        if (useTexture) fragColor *= texture(tex, coord.xy);      }    ")};i.pointSize=function(s){t.shader.uniforms({pointSize:s})},i.begin=function(s){if(t.mode!=-1)throw new Error("mismatched gl.begin() and gl.end() calls");t.mode=s,t.mesh.colors=[],t.mesh.coords=[],t.mesh.vertices=[]},i.color=function(s,e,o,l){t.color=arguments.length==1?s.toArray().concat(1):[s,e,o,l||1]},i.texCoord=function(s,e){t.coord=arguments.length==1?s.toArray(2):[s,e]},i.vertex=function(s,e,o){t.mesh.colors.push(t.color),t.mesh.coords.push(t.coord),t.mesh.vertices.push(arguments.length==1?s.toArray():[s,e,o])},i.end=function(){if(t.mode==-1)throw new Error("mismatched gl.begin() and gl.end() calls");t.mesh.compile(),t.shader.uniforms({useTexture:!!i.getParameter(i.TEXTURE_BINDING_2D)}).draw(t.mesh,t.mode),t.mode=-1}}function u(){var t=i,s=0,e=0,o={},l=!1,c=Object.prototype.hasOwnProperty;function h(){for(var b in o)if(c.call(o,b)&&o[b])return!0;return!1}function m(b){var z={};for(var W in b)typeof b[W]=="function"?z[W]=function(ee){return function(){ee.apply(b,arguments)}}(b[W]):z[W]=b[W];z.original=b,z.x=z.pageX,z.y=z.pageY;for(var O=i.canvas;O;O=O.offsetParent)z.x-=O.offsetLeft,z.y-=O.offsetTop;return l?(z.deltaX=z.x-s,z.deltaY=z.y-e):(z.deltaX=0,z.deltaY=0,l=!0),s=z.x,e=z.y,z.dragging=h(),z.preventDefault=function(){z.original.preventDefault()},z.stopPropagation=function(){z.original.stopPropagation()},z}function x(b){i=t,h()||(E(document,"mousemove",p),E(document,"mouseup",f),A(i.canvas,"mousemove",p),A(i.canvas,"mouseup",f)),o[b.which]=!0,b=m(b),i.onmousedown&&i.onmousedown(b),b.preventDefault()}function p(b){i=t,b=m(b),i.onmousemove&&i.onmousemove(b),b.preventDefault()}function f(b){i=t,o[b.which]=!1,h()||(A(document,"mousemove",p),A(document,"mouseup",f),E(i.canvas,"mousemove",p),E(i.canvas,"mouseup",f)),b=m(b),i.onmouseup&&i.onmouseup(b),b.preventDefault()}function _(){l=!1}function S(){o={},l=!1}E(i.canvas,"mousedown",x),E(i.canvas,"mousemove",p),E(i.canvas,"mouseup",f),E(i.canvas,"mouseover",_),E(i.canvas,"mouseout",_),E(document,"contextmenu",S)}function g(t){var s={8:"BACKSPACE",9:"TAB",13:"ENTER",16:"SHIFT",27:"ESCAPE",32:"SPACE",37:"LEFT",38:"UP",39:"RIGHT",40:"DOWN"};return s[t]||(t>=65&&t<=90?String.fromCharCode(t):null)}function E(t,s,e){t.addEventListener(s,e)}function A(t,s,e){t.removeEventListener(s,e)}E(document,"keydown",function(t){if(!t.altKey&&!t.ctrlKey&&!t.metaKey){var s=g(t.keyCode);s&&(r.keys[s]=!0),r.keys[t.keyCode]=!0}}),E(document,"keyup",function(t){if(!t.altKey&&!t.ctrlKey&&!t.metaKey){var s=g(t.keyCode);s&&(r.keys[s]=!1),r.keys[t.keyCode]=!1}});function L(){(function(t){i.makeCurrent=function(){i=t}})(i),i.animate=function(){var t=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(l){setTimeout(l,16.666666666666668)},s=new Date().getTime(),e=i;function o(){i=e;var l=new Date().getTime();i.onupdate&&i.onupdate((l-s)/1e3),i.ondraw&&i.ondraw(),t(o),s=l}o()},i.fullscreen=function(t){t=t||{};var s=t.paddingTop||0,e=t.paddingLeft||0,o=t.paddingRight||0,l=t.paddingBottom||0;if(!document.body)throw new Error("document.body doesn't exist yet (call gl.fullscreen() from window.onload() or from inside the <body> tag)");document.body.appendChild(i.canvas),document.body.style.overflow="hidden",i.canvas.style.position="absolute",i.canvas.style.left=e+"px",i.canvas.style.top=s+"px";function c(){i.canvas.width=window.innerWidth-e-o,i.canvas.height=window.innerHeight-s-l,i.viewport(0,0,i.canvas.width,i.canvas.height),(t.camera||!("camera"in t))&&(i.matrixMode(i.PROJECTION),i.loadIdentity(),i.perspective(t.fov||45,i.canvas.width/i.canvas.height,t.near||.1,t.far||1e3),i.matrixMode(i.MODELVIEW)),i.ondraw&&i.ondraw()}E(window,"resize",c),c()}}var k=305397760,D=typeof Float32Array<"u";function y(){var t=Array.prototype.concat.apply([],arguments);t.length||(t=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),this.m=D?new Float32Array(t):t}y.prototype={inverse:function(){return y.inverse(this,new y)},transpose:function(){return y.transpose(this,new y)},multiply:function(t){return y.multiply(this,t,new y)},transformPoint:function(t){var s=this.m;return new w(s[0]*t.x+s[1]*t.y+s[2]*t.z+s[3],s[4]*t.x+s[5]*t.y+s[6]*t.z+s[7],s[8]*t.x+s[9]*t.y+s[10]*t.z+s[11]).divide(s[12]*t.x+s[13]*t.y+s[14]*t.z+s[15])},transformVector:function(t){var s=this.m;return new w(s[0]*t.x+s[1]*t.y+s[2]*t.z,s[4]*t.x+s[5]*t.y+s[6]*t.z,s[8]*t.x+s[9]*t.y+s[10]*t.z)}},y.inverse=function(t,s){s=s||new y;var e=t.m,o=s.m;o[0]=e[5]*e[10]*e[15]-e[5]*e[14]*e[11]-e[6]*e[9]*e[15]+e[6]*e[13]*e[11]+e[7]*e[9]*e[14]-e[7]*e[13]*e[10],o[1]=-e[1]*e[10]*e[15]+e[1]*e[14]*e[11]+e[2]*e[9]*e[15]-e[2]*e[13]*e[11]-e[3]*e[9]*e[14]+e[3]*e[13]*e[10],o[2]=e[1]*e[6]*e[15]-e[1]*e[14]*e[7]-e[2]*e[5]*e[15]+e[2]*e[13]*e[7]+e[3]*e[5]*e[14]-e[3]*e[13]*e[6],o[3]=-e[1]*e[6]*e[11]+e[1]*e[10]*e[7]+e[2]*e[5]*e[11]-e[2]*e[9]*e[7]-e[3]*e[5]*e[10]+e[3]*e[9]*e[6],o[4]=-e[4]*e[10]*e[15]+e[4]*e[14]*e[11]+e[6]*e[8]*e[15]-e[6]*e[12]*e[11]-e[7]*e[8]*e[14]+e[7]*e[12]*e[10],o[5]=e[0]*e[10]*e[15]-e[0]*e[14]*e[11]-e[2]*e[8]*e[15]+e[2]*e[12]*e[11]+e[3]*e[8]*e[14]-e[3]*e[12]*e[10],o[6]=-e[0]*e[6]*e[15]+e[0]*e[14]*e[7]+e[2]*e[4]*e[15]-e[2]*e[12]*e[7]-e[3]*e[4]*e[14]+e[3]*e[12]*e[6],o[7]=e[0]*e[6]*e[11]-e[0]*e[10]*e[7]-e[2]*e[4]*e[11]+e[2]*e[8]*e[7]+e[3]*e[4]*e[10]-e[3]*e[8]*e[6],o[8]=e[4]*e[9]*e[15]-e[4]*e[13]*e[11]-e[5]*e[8]*e[15]+e[5]*e[12]*e[11]+e[7]*e[8]*e[13]-e[7]*e[12]*e[9],o[9]=-e[0]*e[9]*e[15]+e[0]*e[13]*e[11]+e[1]*e[8]*e[15]-e[1]*e[12]*e[11]-e[3]*e[8]*e[13]+e[3]*e[12]*e[9],o[10]=e[0]*e[5]*e[15]-e[0]*e[13]*e[7]-e[1]*e[4]*e[15]+e[1]*e[12]*e[7]+e[3]*e[4]*e[13]-e[3]*e[12]*e[5],o[11]=-e[0]*e[5]*e[11]+e[0]*e[9]*e[7]+e[1]*e[4]*e[11]-e[1]*e[8]*e[7]-e[3]*e[4]*e[9]+e[3]*e[8]*e[5],o[12]=-e[4]*e[9]*e[14]+e[4]*e[13]*e[10]+e[5]*e[8]*e[14]-e[5]*e[12]*e[10]-e[6]*e[8]*e[13]+e[6]*e[12]*e[9],o[13]=e[0]*e[9]*e[14]-e[0]*e[13]*e[10]-e[1]*e[8]*e[14]+e[1]*e[12]*e[10]+e[2]*e[8]*e[13]-e[2]*e[12]*e[9],o[14]=-e[0]*e[5]*e[14]+e[0]*e[13]*e[6]+e[1]*e[4]*e[14]-e[1]*e[12]*e[6]-e[2]*e[4]*e[13]+e[2]*e[12]*e[5],o[15]=e[0]*e[5]*e[10]-e[0]*e[9]*e[6]-e[1]*e[4]*e[10]+e[1]*e[8]*e[6]+e[2]*e[4]*e[9]-e[2]*e[8]*e[5];for(var l=e[0]*o[0]+e[1]*o[4]+e[2]*o[8]+e[3]*o[12],c=0;c<16;c++)o[c]/=l;return s},y.transpose=function(t,s){s=s||new y;var e=t.m,o=s.m;return o[0]=e[0],o[1]=e[4],o[2]=e[8],o[3]=e[12],o[4]=e[1],o[5]=e[5],o[6]=e[9],o[7]=e[13],o[8]=e[2],o[9]=e[6],o[10]=e[10],o[11]=e[14],o[12]=e[3],o[13]=e[7],o[14]=e[11],o[15]=e[15],s},y.multiply=function(t,s,e){e=e||new y;var o=t.m,l=s.m,c=e.m;return c[0]=o[0]*l[0]+o[1]*l[4]+o[2]*l[8]+o[3]*l[12],c[1]=o[0]*l[1]+o[1]*l[5]+o[2]*l[9]+o[3]*l[13],c[2]=o[0]*l[2]+o[1]*l[6]+o[2]*l[10]+o[3]*l[14],c[3]=o[0]*l[3]+o[1]*l[7]+o[2]*l[11]+o[3]*l[15],c[4]=o[4]*l[0]+o[5]*l[4]+o[6]*l[8]+o[7]*l[12],c[5]=o[4]*l[1]+o[5]*l[5]+o[6]*l[9]+o[7]*l[13],c[6]=o[4]*l[2]+o[5]*l[6]+o[6]*l[10]+o[7]*l[14],c[7]=o[4]*l[3]+o[5]*l[7]+o[6]*l[11]+o[7]*l[15],c[8]=o[8]*l[0]+o[9]*l[4]+o[10]*l[8]+o[11]*l[12],c[9]=o[8]*l[1]+o[9]*l[5]+o[10]*l[9]+o[11]*l[13],c[10]=o[8]*l[2]+o[9]*l[6]+o[10]*l[10]+o[11]*l[14],c[11]=o[8]*l[3]+o[9]*l[7]+o[10]*l[11]+o[11]*l[15],c[12]=o[12]*l[0]+o[13]*l[4]+o[14]*l[8]+o[15]*l[12],c[13]=o[12]*l[1]+o[13]*l[5]+o[14]*l[9]+o[15]*l[13],c[14]=o[12]*l[2]+o[13]*l[6]+o[14]*l[10]+o[15]*l[14],c[15]=o[12]*l[3]+o[13]*l[7]+o[14]*l[11]+o[15]*l[15],e},y.identity=function(t){t=t||new y;var s=t.m;return s[0]=s[5]=s[10]=s[15]=1,s[1]=s[2]=s[3]=s[4]=s[6]=s[7]=s[8]=s[9]=s[11]=s[12]=s[13]=s[14]=0,t},y.perspective=function(t,s,e,o,l){var c=Math.tan(t*Math.PI/360)*e,h=c*s;return y.frustum(-h,h,-c,c,e,o,l)},y.frustum=function(t,s,e,o,l,c,h){h=h||new y;var m=h.m;return m[0]=2*l/(s-t),m[1]=0,m[2]=(s+t)/(s-t),m[3]=0,m[4]=0,m[5]=2*l/(o-e),m[6]=(o+e)/(o-e),m[7]=0,m[8]=0,m[9]=0,m[10]=-(c+l)/(c-l),m[11]=-2*c*l/(c-l),m[12]=0,m[13]=0,m[14]=-1,m[15]=0,h},y.ortho=function(t,s,e,o,l,c,h){h=h||new y;var m=h.m;return m[0]=2/(s-t),m[1]=0,m[2]=0,m[3]=-(s+t)/(s-t),m[4]=0,m[5]=2/(o-e),m[6]=0,m[7]=-(o+e)/(o-e),m[8]=0,m[9]=0,m[10]=-2/(c-l),m[11]=-(c+l)/(c-l),m[12]=0,m[13]=0,m[14]=0,m[15]=1,h},y.scale=function(t,s,e,o){o=o||new y;var l=o.m;return l[0]=t,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=s,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=e,l[11]=0,l[12]=0,l[13]=0,l[14]=0,l[15]=1,o},y.translate=function(t,s,e,o){o=o||new y;var l=o.m;return l[0]=1,l[1]=0,l[2]=0,l[3]=t,l[4]=0,l[5]=1,l[6]=0,l[7]=s,l[8]=0,l[9]=0,l[10]=1,l[11]=e,l[12]=0,l[13]=0,l[14]=0,l[15]=1,o},y.rotate=function(t,s,e,o,l){if(!t||!s&&!e&&!o)return y.identity(l);l=l||new y;var c=l.m,h=Math.sqrt(s*s+e*e+o*o);t*=Math.PI/180,s/=h,e/=h,o/=h;var m=Math.cos(t),x=Math.sin(t),p=1-m;return c[0]=s*s*p+m,c[1]=s*e*p-o*x,c[2]=s*o*p+e*x,c[3]=0,c[4]=e*s*p+o*x,c[5]=e*e*p+m,c[6]=e*o*p-s*x,c[7]=0,c[8]=o*s*p-e*x,c[9]=o*e*p+s*x,c[10]=o*o*p+m,c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l},y.lookAt=function(t,s,e,o,l,c,h,m,x,p){p=p||new y;var f=p.m,_=new w(t,s,e),S=new w(o,l,c),b=new w(h,m,x),z=_.subtract(S).unit(),W=b.cross(z).unit(),O=z.cross(W).unit();return f[0]=W.x,f[1]=W.y,f[2]=W.z,f[3]=-W.dot(_),f[4]=O.x,f[5]=O.y,f[6]=O.z,f[7]=-O.dot(_),f[8]=z.x,f[9]=z.y,f[10]=z.z,f[11]=-z.dot(_),f[12]=0,f[13]=0,f[14]=0,f[15]=1,p};function q(){this.unique=[],this.indices=[],this.map={}}q.prototype={add:function(t){var s=JSON.stringify(t);return s in this.map||(this.map[s]=this.unique.length,this.unique.push(t)),this.map[s]}};function G(t,s){this.buffer=null,this.target=t,this.type=s,this.data=[]}G.prototype={compile:function(t){for(var s=[],e=0,o=1e4;e<this.data.length;e+=o)s=Array.prototype.concat.apply(s,this.data.slice(e,e+o));var l=this.data.length?s.length/this.data.length:0;if(l!=Math.round(l))throw new Error("buffer elements not of consistent size, average size is "+l);this.buffer=this.buffer||i.createBuffer(),this.buffer.length=s.length,this.buffer.spacing=l,i.bindBuffer(this.target,this.buffer),i.bufferData(this.target,new this.type(s),t||i.STATIC_DRAW)}};function T(t){t=t||{},this.vertexBuffers={},this.indexBuffers={},this.addVertexBuffer("vertices","gl_Vertex"),t.coords&&this.addVertexBuffer("coords","gl_TexCoord"),t.normals&&this.addVertexBuffer("normals","gl_Normal"),t.colors&&this.addVertexBuffer("colors","gl_Color"),(!("triangles"in t)||t.triangles)&&this.addIndexBuffer("triangles"),t.lines&&this.addIndexBuffer("lines")}T.prototype={addVertexBuffer:function(t,s){var e=this.vertexBuffers[s]=new G(i.ARRAY_BUFFER,Float32Array);e.name=t,this[t]=[]},addIndexBuffer:function(t){this.indexBuffers[t]=new G(i.ELEMENT_ARRAY_BUFFER,Uint16Array),this[t]=[]},compile:function(){for(var t in this.vertexBuffers){var s=this.vertexBuffers[t];s.data=this[s.name],s.compile()}for(var e in this.indexBuffers){var s=this.indexBuffers[e];s.data=this[e],s.compile()}},transform:function(t){if(this.vertices=this.vertices.map(function(e){return t.transformPoint(w.fromArray(e)).toArray()}),this.normals){var s=t.inverse().transpose();this.normals=this.normals.map(function(e){return s.transformVector(w.fromArray(e)).unit().toArray()})}return this.compile(),this},computeNormals:function(){this.normals||this.addVertexBuffer("normals","gl_Normal");for(var t=0;t<this.vertices.length;t++)this.normals[t]=new w;for(var t=0;t<this.triangles.length;t++){var s=this.triangles[t],e=w.fromArray(this.vertices[s[0]]),o=w.fromArray(this.vertices[s[1]]),l=w.fromArray(this.vertices[s[2]]),c=o.subtract(e).cross(l.subtract(e)).unit();this.normals[s[0]]=this.normals[s[0]].add(c),this.normals[s[1]]=this.normals[s[1]].add(c),this.normals[s[2]]=this.normals[s[2]].add(c)}for(var t=0;t<this.vertices.length;t++)this.normals[t]=this.normals[t].unit().toArray();return this.compile(),this},computeWireframe:function(){for(var t=new q,s=0;s<this.triangles.length;s++)for(var e=this.triangles[s],o=0;o<e.length;o++){var l=e[o],c=e[(o+1)%e.length];t.add([Math.min(l,c),Math.max(l,c)])}return this.lines||this.addIndexBuffer("lines"),this.lines=t.unique,this.compile(),this},getAABB:function(){var t={min:new w(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)};t.max=t.min.negative();for(var s=0;s<this.vertices.length;s++){var e=w.fromArray(this.vertices[s]);t.min=w.min(t.min,e),t.max=w.max(t.max,e)}return t},getBoundingSphere:function(){for(var t=this.getAABB(),s={center:t.min.add(t.max).divide(2),radius:0},e=0;e<this.vertices.length;e++)s.radius=Math.max(s.radius,w.fromArray(this.vertices[e]).subtract(s.center).length());return s}},T.plane=function(t){t=t||{};for(var s=new T(t),e=t.detailX||t.detail||1,o=t.detailY||t.detail||1,l=t.width||2,c=t.height||2,h=0;h<=o;h++)for(var m=h/o,x=0;x<=e;x++){var p=x/e;if(s.vertices.push([(p-.5)*l,(m-.5)*c,0]),s.coords&&s.coords.push([p,m]),s.normals&&s.normals.push([0,0,1]),x<e&&h<o){var f=x+h*(e+1);s.triangles.push([f,f+1,f+e+1]),s.triangles.push([f+e+1,f+1,f+e+2])}}return s.compile(),s};var R=[[0,4,2,6,-1,0,0],[1,3,5,7,1,0,0],[0,1,4,5,0,-1,0],[2,6,3,7,0,1,0],[0,2,1,3,0,0,-1],[4,5,6,7,0,0,1]];function F(t){return new w((t&1)*2-1,(t&2)-1,(t&4)/2-1)}T.cube=function(t){for(var s=new T(t),e=t&&t.width||2,o=t&&t.height||2,l=t&&t.depth||2,c=0;c<R.length;c++){for(var h=R[c],m=c*4,x=0;x<4;x++){var p=h[x];const f=F(p).toArray();f[0]*=e/2,f[1]*=o/2,f[2]*=l/2,s.vertices.push(f),s.coords&&s.coords.push([x&1,(x&2)/2]),s.normals&&s.normals.push(h.slice(4,7))}s.triangles.push([m,m+1,m+2]),s.triangles.push([m+2,m+1,m+3])}return s.compile(),s},T.sphere=function(t){function s(O,ee,re){return x?[O,re,ee]:[O,ee,re]}function e(O){return O+(O-O*O)/2}t=t||{};for(var o=new T(t),l=new q,c=t.detail||6,h=0;h<8;h++)for(var m=F(h),x=m.x*m.y*m.z>0,p=[],f=0;f<=c;f++){for(var _=0;f+_<=c;_++){var S=f/c,b=_/c,z=(c-f-_)/c,W={vertex:new w(e(S),e(b),e(z)).unit().multiply(m).toArray()};o.coords&&(W.coord=m.y>0?[1-S,z]:[z,1-S]),p.push(l.add(W))}if(f>0)for(var _=0;f+_<=c;_++){var S=(f-1)*(c+1)+(f-1-(f-1)*(f-1))/2+_,b=f*(c+1)+(f-f*f)/2+_;o.triangles.push(s(p[S],p[S+1],p[b])),f+_<c&&o.triangles.push(s(p[b],p[S+1],p[b+1]))}}return o.vertices=l.unique.map(function(O){return O.vertex}),o.coords&&(o.coords=l.unique.map(function(O){return O.coord})),o.normals&&(o.normals=o.vertices),o.compile(),o},T.load=function(t,s){s=s||{},"coords"in s||(s.coords=!!t.coords),"normals"in s||(s.normals=!!t.normals),"colors"in s||(s.colors=!!t.colors),"triangles"in s||(s.triangles=!!t.triangles),"lines"in s||(s.lines=!!t.lines);var e=new T(s);return e.vertices=t.vertices,e.coords&&(e.coords=t.coords),e.normals&&(e.normals=t.normals),e.colors&&(e.colors=t.colors),e.triangles&&(e.triangles=t.triangles),e.lines&&(e.lines=t.lines),e.compile(),e};function N(t,s,e){this.t=arguments.length?t:Number.MAX_VALUE,this.hit=s,this.normal=e}N.prototype={mergeWith:function(t){t.t>0&&t.t<this.t&&(this.t=t.t,this.hit=t.hit,this.normal=t.normal)}};function U(){var t=i.getParameter(i.VIEWPORT),s=i.modelviewMatrix.m,e=new w(s[0],s[4],s[8]),o=new w(s[1],s[5],s[9]),l=new w(s[2],s[6],s[10]),c=new w(s[3],s[7],s[11]);this.eye=new w(-c.dot(e),-c.dot(o),-c.dot(l));var h=t[0],m=h+t[2],x=t[1],p=x+t[3];this.ray00=i.unProject(h,x,1).subtract(this.eye),this.ray10=i.unProject(m,x,1).subtract(this.eye),this.ray01=i.unProject(h,p,1).subtract(this.eye),this.ray11=i.unProject(m,p,1).subtract(this.eye),this.viewport=t}U.prototype={getRayForPixel:function(t,s){t=(t-this.viewport[0])/this.viewport[2],s=1-(s-this.viewport[1])/this.viewport[3];var e=w.lerp(this.ray00,this.ray10,t),o=w.lerp(this.ray01,this.ray11,t);return w.lerp(e,o,s).unit()}},U.hitTestBox=function(t,s,e,o){var l=e.subtract(t).divide(s),c=o.subtract(t).divide(s),h=w.min(l,c),m=w.max(l,c),x=h.max(),p=m.min();if(x>0&&x<p){var f=1e-6,_=t.add(s.multiply(x));return e=e.add(f),o=o.subtract(f),new N(x,_,new w((_.x>o.x)-(_.x<e.x),(_.y>o.y)-(_.y<e.y),(_.z>o.z)-(_.z<e.z)))}return null},U.hitTestSphere=function(t,s,e,o){var l=t.subtract(e),c=s.dot(s),h=2*s.dot(l),m=l.dot(l)-o*o,x=h*h-4*c*m;if(x>0){var p=(-h-Math.sqrt(x))/(2*c),f=t.add(s.multiply(p));return new N(p,f,f.subtract(e).divide(o))}return null},U.hitTestTriangle=function(t,s,e,o,l){var c=o.subtract(e),h=l.subtract(e),m=c.cross(h).unit(),x=m.dot(e.subtract(t))/m.dot(s);if(x>0){var p=t.add(s.multiply(x)),f=p.subtract(e),_=h.dot(h),S=h.dot(c),b=h.dot(f),z=c.dot(c),W=c.dot(f),O=_*z-S*S,ee=(z*b-S*W)/O,re=(_*W-S*b)/O;if(ee>=0&&re>=0&&ee+re<=1)return new N(x,p,m)}return null};function V(t,s,e){let o;for(;(o=t.exec(s))!=null;)e(o)}var I="LIGHTGL";function M(t,s){function e(_){var S=document.getElementById(_);return S?S.text:_}t=e(t),s=e(s);var o="    uniform mat3 gl_NormalMatrix;    uniform mat4 gl_ModelViewMatrix;    uniform mat4 gl_ProjectionMatrix;    uniform mat4 gl_ModelViewProjectionMatrix;    uniform mat4 gl_ModelViewMatrixInverse;    uniform mat4 gl_ProjectionMatrixInverse;    uniform mat4 gl_ModelViewProjectionMatrixInverse;  ",l=`#version 300 es
    `+o+"    in vec4 gl_Vertex;    in vec4 gl_TexCoord;    in vec3 gl_Normal;    in vec4 gl_Color;    vec4 ftransform() {      return gl_ModelViewProjectionMatrix * gl_Vertex;    }  ",c=`#version 300 es
    precision highp float;
  `+o,h=t+s,m={};V(/\b(gl_[^;]*)\b;/g,o,function(_){var S=_[1];if(h.indexOf(S)!=-1){var b=S.replace(/[a-z_]/g,"");m[b]=I+S}}),h.indexOf("ftransform")!=-1&&(m.MVPM=I+"gl_ModelViewProjectionMatrix"),this.usedMatrices=m;function x(_,S){var b={},z=/^((\s*\/\/.*\n|\s*#extension.*\n)+)[^]*$/.exec(S);return S=z?z[1]+_+S.substr(z[1].length):_+S,V(/\bgl_\w+\b/g,_,function(W){W in b||(S=S.replace(new RegExp("\\b"+W+"\\b","g"),I+W),b[W]=!0)}),S}t=x(l,t),s=x(c,s);function p(_,S){var b=i.createShader(_);if(i.shaderSource(b,S),i.compileShader(b),!i.getShaderParameter(b,i.COMPILE_STATUS))throw new Error("compile error: "+i.getShaderInfoLog(b));return b}if(this.program=i.createProgram(),i.attachShader(this.program,p(i.VERTEX_SHADER,t)),i.attachShader(this.program,p(i.FRAGMENT_SHADER,s)),i.linkProgram(this.program),!i.getProgramParameter(this.program,i.LINK_STATUS))throw new Error("link error: "+i.getProgramInfoLog(this.program));this.attributes={},this.uniformLocations={};var f={};V(/uniform\s+sampler(1D|2D|3D|Cube)\s+(\w+)\s*;/g,t+s,function(_){f[_[2]]=1}),this.isSampler=f}function K(t){var s=Object.prototype.toString.call(t);return s=="[object Array]"||s=="[object Float32Array]"}function Q(t){var s=Object.prototype.toString.call(t);return s=="[object Number]"||s=="[object Boolean]"}new y,new y,M.prototype={uniforms:function(t){i.useProgram(this.program);for(var s in t){var e=this.uniformLocations[s]||i.getUniformLocation(this.program,s);if(e){this.uniformLocations[s]=e;var o=t[s];if(o instanceof w?o=[o.x,o.y,o.z]:o instanceof y&&(o=o.m),K(o))switch(o.length){case 1:i.uniform1fv(e,new Float32Array(o));break;case 2:i.uniform2fv(e,new Float32Array(o));break;case 3:i.uniform3fv(e,new Float32Array(o));break;case 4:i.uniform4fv(e,new Float32Array(o));break;case 9:i.uniformMatrix3fv(e,!1,new Float32Array([o[0],o[3],o[6],o[1],o[4],o[7],o[2],o[5],o[8]]));break;case 16:i.uniformMatrix4fv(e,!1,new Float32Array([o[0],o[4],o[8],o[12],o[1],o[5],o[9],o[13],o[2],o[6],o[10],o[14],o[3],o[7],o[11],o[15]]));break;default:throw new Error(`don't know how to load uniform "`+s+'" of length '+o.length)}else if(Q(o))(this.isSampler[s]?i.uniform1i:i.uniform1f).call(i,e,o);else throw new Error('attempted to set uniform "'+s+'" to invalid value '+o)}}return this},draw:function(t,s){this.drawBuffers(t.vertexBuffers,t.indexBuffers[s==i.LINES?"lines":"triangles"],arguments.length<2?i.TRIANGLES:s)},drawBuffers:function(t,s,e){var o=this.usedMatrices,l=i.modelviewMatrix,c=i.projectionMatrix,h=o.MVMI||o.NM?l.inverse():null,m=o.PMI?c.inverse():null,x=o.MVPM||o.MVPMI?c.multiply(l):null,p={};if(o.MVM&&(p[o.MVM]=l),o.MVMI&&(p[o.MVMI]=h),o.PM&&(p[o.PM]=c),o.PMI&&(p[o.PMI]=m),o.MVPM&&(p[o.MVPM]=x),o.MVPMI&&(p[o.MVPMI]=x.inverse()),o.NM){var f=h.m;p[o.NM]=[f[0],f[4],f[8],f[1],f[5],f[9],f[2],f[6],f[10]]}this.uniforms(p);var _=0;for(var S in t){var b=t[S],z=this.attributes[S]||i.getAttribLocation(this.program,S.replace(/^(gl_.*)$/,I+"$1"));z==-1||!b.buffer||(this.attributes[S]=z,i.bindBuffer(i.ARRAY_BUFFER,b.buffer),i.enableVertexAttribArray(z),i.vertexAttribPointer(z,b.buffer.spacing,i.FLOAT,!1,0,0),_=b.buffer.length/b.buffer.spacing)}for(var S in this.attributes)S in t||i.disableVertexAttribArray(this.attributes[S]);return _&&(!s||s.buffer)&&(s?(i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,s.buffer),i.drawElements(e,s.buffer.length,i.UNSIGNED_SHORT,0)):i.drawArrays(e,0,_)),this}};function C(t,s,e){e=e||{},this.width=t,this.height=s,this.id=i.createTexture();let o=e.type||i.UNSIGNED_BYTE,l=e.format||i.RGBA,c=i.RGBA;const h=i.getExtension("EXT_color_buffer_float"),m=i.getExtension("EXT_color_buffer_half_float");o===i.FLOAT?(h?i instanceof WebGL2RenderingContext&&(l=i.RGBA32F):(console.warn("FLOAT textures not renderable, falling back to UNSIGNED_BYTE"),o=i.UNSIGNED_BYTE,l=i.RGBA8),c=i.RGBA):o===i.HALF_FLOAT_OES?(m?i instanceof WebGL2RenderingContext&&(l=i.RGBA16F):(console.warn("HALF_FLOAT textures not renderable, falling back to UNSIGNED_BYTE"),o=i.UNSIGNED_BYTE,l=i.RGBA8),c=i.RGBA):(o=i.UNSIGNED_BYTE,l=i.RGBA8,c=i.RGBA);const x=e.filter||e.magFilter||i.LINEAR,p=e.filter||e.minFilter||i.LINEAR;i.bindTexture(i.TEXTURE_2D,this.id),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,1),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,x),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,p),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,e.wrap||e.wrapS||i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,e.wrap||e.wrapT||i.CLAMP_TO_EDGE),i instanceof WebGL2RenderingContext?i.texImage2D(i.TEXTURE_2D,0,l,t,s,0,c,o,null):i.texImage2D(i.TEXTURE_2D,0,c,t,s,0,c,o,null),i.bindTexture(i.TEXTURE_2D,null),this.format=c,this.type=o,this.internalFormat=l}var X,Y,j;C.prototype={bind:function(t){i.activeTexture(i.TEXTURE0+(t||0)),i.bindTexture(i.TEXTURE_2D,this.id)},unbind:function(t){i.activeTexture(i.TEXTURE0+(t||0)),i.bindTexture(i.TEXTURE_2D,null)},canDrawTo:function(){X=X||i.createFramebuffer(),i.bindFramebuffer(i.FRAMEBUFFER,X),i.framebufferTexture2D(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,this.id,0);var t=i.checkFramebufferStatus(i.FRAMEBUFFER)==i.FRAMEBUFFER_COMPLETE;return i.bindFramebuffer(i.FRAMEBUFFER,null),t},drawTo:function(t){i.getExtension("EXT_color_buffer_float")||console.warn("EXT_color_buffer_float not available!");var e=i.getParameter(i.VIEWPORT);if(X=X||i.createFramebuffer(),Y=Y||i.createRenderbuffer(),i.bindFramebuffer(i.FRAMEBUFFER,X),i.bindRenderbuffer(i.RENDERBUFFER,Y),(this.width!=Y.width||this.height!=Y.height)&&(Y.width=this.width,Y.height=this.height,i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_COMPONENT16,this.width,this.height)),i.framebufferTexture2D(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,this.id,0),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,Y),i.checkFramebufferStatus(i.FRAMEBUFFER)!=i.FRAMEBUFFER_COMPLETE)throw new Error("Rendering to this texture is not supported (incomplete framebuffer)");i.viewport(0,0,this.width,this.height),t(),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindRenderbuffer(i.RENDERBUFFER,null),i.viewport(e[0],e[1],e[2],e[3])},swapWith:function(t){var s;s=t.id,t.id=this.id,this.id=s,s=t.width,t.width=this.width,this.width=s,s=t.height,t.height=this.height,this.height=s}},C.fromImage=function(t,s){s=s||{};var e=new C(t.width,t.height,s);i.bindTexture(i.TEXTURE_2D,e.id);try{i.texImage2D(i.TEXTURE_2D,0,e.format,e.format,e.type,t)}catch{throw location.protocol=="file:"?new Error('image not loaded for security reasons (serve this page over "http://" instead)'):new Error("image not loaded for security reasons (image must originate from the same domain as this page or use Cross-Origin Resource Sharing)")}return s.minFilter&&s.minFilter!=i.NEAREST&&s.minFilter!=i.LINEAR&&i.generateMipmap(i.TEXTURE_2D),i.bindTexture(i.TEXTURE_2D,null),e},C.fromURL=function(t,s){j=j||function(){var c=document.createElement("canvas").getContext("2d");c.canvas.width=c.canvas.height=128;for(var h=0;h<c.canvas.height;h+=16)for(var m=0;m<c.canvas.width;m+=16)c.fillStyle=(m^h)&16?"#FFF":"#DDD",c.fillRect(m,h,16,16);return c.canvas}();var e=C.fromImage(j,s),o=new Image,l=i;return o.onload=function(){l.makeCurrent(),C.fromImage(o,s).swapWith(e)},o.src=t,e},C.canUseFloatingPointTextures=function(){return!!i.getExtension("OES_texture_float")},C.canUseFloatingPointLinearFiltering=function(){return!!i.getExtension("OES_texture_float_linear")},C.canUseHalfFloatingPointTextures=function(){return!!i.getExtension("OES_texture_half_float")},C.canUseHalfFloatingPointLinearFiltering=function(){return!!i.getExtension("OES_texture_half_float_linear")};function w(t,s,e){this.x=t||0,this.y=s||0,this.z=e||0}return w.prototype={negative:function(){return new w(-this.x,-this.y,-this.z)},add:function(t){return t instanceof w?new w(this.x+t.x,this.y+t.y,this.z+t.z):new w(this.x+t,this.y+t,this.z+t)},subtract:function(t){return t instanceof w?new w(this.x-t.x,this.y-t.y,this.z-t.z):new w(this.x-t,this.y-t,this.z-t)},multiply:function(t){return t instanceof w?new w(this.x*t.x,this.y*t.y,this.z*t.z):new w(this.x*t,this.y*t,this.z*t)},divide:function(t){return t instanceof w?new w(this.x/t.x,this.y/t.y,this.z/t.z):new w(this.x/t,this.y/t,this.z/t)},equals:function(t){return this.x==t.x&&this.y==t.y&&this.z==t.z},dot:function(t){return this.x*t.x+this.y*t.y+this.z*t.z},cross:function(t){return new w(this.y*t.z-this.z*t.y,this.z*t.x-this.x*t.z,this.x*t.y-this.y*t.x)},length:function(){return Math.sqrt(this.dot(this))},unit:function(){return this.divide(this.length())},min:function(){return Math.min(Math.min(this.x,this.y),this.z)},max:function(){return Math.max(Math.max(this.x,this.y),this.z)},toAngles:function(){return{theta:Math.atan2(this.z,this.x),phi:Math.asin(this.y/this.length())}},angleTo:function(t){return Math.acos(this.dot(t)/(this.length()*t.length()))},toArray:function(t){return[this.x,this.y,this.z].slice(0,t||3)},clone:function(){return new w(this.x,this.y,this.z)},init:function(t,s,e){return this.x=t,this.y=s,this.z=e,this}},w.negative=function(t,s){return s.x=-t.x,s.y=-t.y,s.z=-t.z,s},w.add=function(t,s,e){return s instanceof w?(e.x=t.x+s.x,e.y=t.y+s.y,e.z=t.z+s.z):(e.x=t.x+s,e.y=t.y+s,e.z=t.z+s),e},w.subtract=function(t,s,e){return s instanceof w?(e.x=t.x-s.x,e.y=t.y-s.y,e.z=t.z-s.z):(e.x=t.x-s,e.y=t.y-s,e.z=t.z-s),e},w.multiply=function(t,s,e){return s instanceof w?(e.x=t.x*s.x,e.y=t.y*s.y,e.z=t.z*s.z):(e.x=t.x*s,e.y=t.y*s,e.z=t.z*s),e},w.divide=function(t,s,e){return s instanceof w?(e.x=t.x/s.x,e.y=t.y/s.y,e.z=t.z/s.z):(e.x=t.x/s,e.y=t.y/s,e.z=t.z/s),e},w.cross=function(t,s,e){return e.x=t.y*s.z-t.z*s.y,e.y=t.z*s.x-t.x*s.z,e.z=t.x*s.y-t.y*s.x,e},w.unit=function(t,s){var e=t.length();return s.x=t.x/e,s.y=t.y/e,s.z=t.z/e,s},w.fromAngles=function(t,s){return new w(Math.cos(t)*Math.cos(s),Math.sin(s),Math.sin(t)*Math.cos(s))},w.randomDirection=function(){return w.fromAngles(Math.random()*Math.PI*2,Math.asin(Math.random()*2-1))},w.min=function(t,s){return new w(Math.min(t.x,s.x),Math.min(t.y,s.y),Math.min(t.z,s.z))},w.max=function(t,s){return new w(Math.max(t.x,s.x),Math.max(t.y,s.y),Math.max(t.z,s.z))},w.lerp=function(t,s,e){return s.subtract(t).multiply(e).add(t)},w.fromArray=function(t){return new w(t[0],t[1],t[2])},w.angleBetween=function(t,s){return t.angleTo(s)},r}();class _e{constructor({tx:r=0,ty:n=0,zoom:d=4,ax:u=-25,ay:g=-200,az:E=0,fov:A=45}){this.tx=r,this.ty=n,this.zoom=d,this.ax=u,this.ay=g,this.az=E,this.fov=A}}const ze=.3,Ce=.15,Fe=1,tt=10,Ve=Math.ceil(tt/4),Ue=10,xe=`
    uniform float wr;
    #define sqrt_2_PI 2.50662827
    #define PI 3.1415926536
    uniform sampler2D swimmersAttributesTexture;
    const int SWIMMERS_NUM_ATTRIBUTES = 4;
    const vec2 TEXTURE_SIZE = vec2(`+Ve+", "+Ue+`);
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
`,We=200,it=`
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

`;var ye,Ge;class Ee{constructor(r,n,d,u){ve(this,ye);if(this.gl=r,this.calibration=d,this.copyVideo=!1,this.show=!1,this.videoStartTime=u,r===null){alert("Unable to initialize WebGL. Your browser or machine may not support it.");return}r.clearColor(0,0,0,1),r.clear(r.COLOR_BUFFER_BIT),this.shader=new v.Shader(`
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

    `+it+xe+`

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
`),this.mesh=v.Mesh.plane({width:2,height:2,coords:!0,normals:!0}),this.mesh.transform(v.Matrix.rotate(90,1,0,0)),this.mesh.transform(v.Matrix.translate(0,.1,0)),this.programInfo=null,this.texture=this.initTexture(),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!0),n!=""&&(this.video=this.setupVideo(n))}render(){const r=a.params.visualizations.sparks,n=a.params.simulation.poolSize;if(!a.params.video.show)return;this.copyVideo&&this.updateTexture(),(!this.mesh.vertexBuffers||!this.mesh.vertexBuffers.vertex)&&this.mesh.compile(),this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture);const d=this.gl.canvas.height,u=16*d/9,g=(this.gl.canvas.width-u)/2;this.gl.viewport(g,0,u,d),B.swimmersAttributesTexture&&B.swimmersAttributesTexture.bind(1),this.shader.uniforms({uSampler:0,swimmersHelperFunctions:1,iTime:a.getRaceTime(),poolSize:[n.x,n.y,n.z],iResolution:[this.gl.canvas.width,this.gl.canvas.height],sparksEnabled:r.enabled,sparksGlow:r.glow,sparksGlowOffset:r.glowOffset,sparksStroke:r.stroke,sparksNumber:r.num,sparksLengthFactor:r.lengthFactor,sparksSizeFactor:r.sizeFactor,fov:r.fov,thresholdBlending:a.params.video.thresholdBlending,blendingThreshold:a.params.video.blendingThreshold,opacity:a.params.video.opacity}).draw(this.mesh),this.gl.disable(this.gl.BLEND),this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height)}setTime(r){this.copyVideo&&(this.video.currentTime=r)}initTexture(){const r=this.gl.createTexture();this.gl.bindTexture(this.gl.TEXTURE_2D,r);const n=0,d=this.gl.RGBA,u=1,g=1,E=0,A=this.gl.RGBA,L=this.gl.UNSIGNED_BYTE,k=new Uint8Array([0,0,255,255]);return this.gl.texImage2D(this.gl.TEXTURE_2D,n,d,u,g,E,A,L,k),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),r}updateTexture(){const n=this.gl.RGBA,d=this.gl.RGBA,u=this.gl.UNSIGNED_BYTE;this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture),this.gl.texImage2D(this.gl.TEXTURE_2D,0,n,d,u,this.video)}setupVideo(r){const n=document.createElement("video");let d=!1,u=!1;n.playsInline=!0,n.muted=!0,n.loop=!1,n.addEventListener("playing",()=>{d=!0,E()},!0),n.addEventListener("timeupdate",()=>{u=!0,E()},!0),n.src=r,n.play();const g=this,E=()=>{d&&u&&(g.copyVideo=!0,n.paused||Z(this,ye,Ge).call(this))};return n}}ye=new WeakSet,Ge=function(){this.hasPausedFirstTime||(this.hasPausedFirstTime=!0,this.video.pause())};class Te{constructor(r,{poolSize:n=new GL.Vector(2,2),waterResolution:d=new GL.Vector(256,256),thresholdBlending:u=!1,numSwimmers:g=1,dataFolder:E=null}){this.title=r,this.videos=[],this.poolSize=n,this.waterResolution=d,this.numSwimmers=g,this.thresholdBlending=u,this.dataFolder=E}addVideo(r){this.videos.push(r)}async parseData(r){for(let n=0;n<r.length;n++)await r[n].parseData(this.dataFolder+n+".csv")}}const Le=new v.Vector(0,-4,0);class pe{constructor(r,n){this.initCenter=new v.Vector(r.x,r.y,r.z),this.center=new v.Vector(r.x,r.y,r.z),this.oldCenter=new v.Vector(r.x,r.y,r.z),this.radius=n,this.cinematic=!1,this.velocity=new v.Vector(0,0,0),this.acceleration=new v.Vector(0,0,0),this.mass=4/3*Math.PI*Math.pow(n,3)*1e3,this.invMass=1/this.mass,this.radiusSquared=n*n,this.mesh=v.Mesh.sphere({detail:10}),this.followTarget=!1}update(r){if(this.moved||(this.oldCenter=new v.Vector(this.center.x,this.center.y,this.center.z)),this.moved=!1,this.cinematic){if(this.followTarget||(this.velocity=new v.Vector(0,0,0)),!this.targetPos||!this.followTarget)return;let n=r/this.targetTime;n=Math.min(Math.max(n,0),1),this.center=this.center.multiply(1-n).add(this.targetPos.multiply(n)),this.velocity=this.center.subtract(this.oldCenter).multiply(1/r),this.targetTime-=r,this.targetTime<0&&(this.targetPos=null)}else{const n=Math.max(0,Math.min(1,(this.radius-this.center.y)/(2*this.radius))),d=Le.multiply(-a.params.simulation.buoyancyFactor*this.mass*n),u=this.velocity.unit().multiply(-1e3*this.radiusSquared*n*this.velocity.dot(this.velocity));this.addForce(u),this.addForce(d),this.addForce(Le.multiply(this.mass)),this.velocity=this.velocity.add(this.acceleration.multiply(r)),this.acceleration=new v.Vector(0,0,0),this.center=this.center.add(this.velocity.multiply(r)),this.center.y<this.radius-a.params.simulation.poolSize.y&&(this.center.y=this.radius-1,this.velocity.y=Math.abs(this.velocity.y)*.7)}}setTarget(r,n){this.targetPos=r,this.targetTime=n}addForce(r){this.cinematic?console.warn("Trying to add force to a cinematic sphere."):this.acceleration=this.acceleration.add(r.multiply(this.invMass))}move(r){this.moved=!0,this.oldCenter=new v.Vector(this.center.x,this.center.y,this.center.z),this.center=new v.Vector(r.x,r.y,r.z),this.cinematic||console.warn("Moving a non cinematic sphere.")}}function se(i,r=null){this.gl=i,this.visualizationWavesEnabled=!0,this.sqrt_2_PI=Math.sqrt(2*Math.PI);var n=`
    out vec2 coord;
    uniform vec2 invPoolSizeVertex;
    void main() {
      coord = gl_Vertex.xy * invPoolSizeVertex + 0.5;
      gl_Position = vec4(gl_Vertex.xy * 2. * invPoolSizeVertex, 0., 1.0);
    }
  `;this.reset(r),v.Texture.canUseFloatingPointTextures(),this.dropShader=new v.Shader(n,`
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
  `),this.updateShader=new v.Shader(n,`
    uniform sampler2D tex;
    uniform vec2 delta;
    uniform float prev_wr;
    uniform float damping;
    uniform float sqrt_2_PI;
    uniform vec3 poolSize;
    `+xe+`
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
  `),this.normalShader=new v.Shader(n,`
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
  `),this.visualizationWavesShader=new v.Shader(n,`
    uniform sampler2D tex;
    uniform bool add;
    uniform vec3 poolSize;
    uniform bool showWR;
    uniform bool showDivingDistance;
    in vec2 coord;
    out vec4 fragColor;
    uniform float t;

    `+xe+`

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
        intensity = min(max(intensity, 0.), 1.);
        intensity = 1. - intensity;
        intensity = interpIntensity(intensity);
        h = waveFunctionExp(coord*poolSize.xz) * intensity;
      }
      info.r += add ? h : -h;
      fragColor = info;

    }
    `)}se.prototype.resetTextures=function(){const i=this.gl;this.textureA&&i.deleteTexture(this.textureA.id),this.textureB&&i.deleteTexture(this.textureB.id),this.textureA=new v.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:r}),this.textureB=new v.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:r}),this.areaConservationTexture=new v.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:r}),this.showAreaConservedGrid=!1,this.showProjectionGrid=!1,this.invPoolSize=new v.Vector(1/a.params.simulation.poolSize.x,1/a.params.simulation.poolSize.y,1/a.params.simulation.poolSize.z);var r=v.Texture.canUseFloatingPointLinearFiltering()?this.gl.LINEAR:this.gl.NEAREST;(!this.textureA.canDrawTo()||!this.textureB.canDrawTo())&&v.Texture.canUseHalfFloatingPointTextures()&&(console.log("No draw"),r=v.Texture.canUseHalfFloatingPointLinearFiltering()?this.gl.LINEAR:this.gl.NEAREST,this.textureA=new v.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:r}),this.textureB=new v.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:r}))};se.prototype.reset=function(i=null){this.WR_position=1e5,this.prev_WR_position=0,i!==null?(console.log("resolution.y : "+i.y),this.W=Math.round(i.x),this.H=Math.round(i.y),console.log("Using custom resolution:",this.W,this.H)):(this.W=256,this.H=256),B.reset(new v.Vector(this.W,this.H)),this.plane=v.Mesh.plane({detail:255,width:a.params.simulation.poolSize.x,height:a.params.simulation.poolSize.z}),this.delta=new v.Vector(1/this.W,1/this.H),this.resetTextures()};se.prototype.addDrop=function(i,r,n,d){var u=this;this.textureB.drawTo(function(){u.textureA.bind(),u.dropShader.uniforms({invPoolSizeVertex:[u.invPoolSize.x,u.invPoolSize.z],center:[i,r],radius:n,strength:d,poolSize:[a.params.simulation.poolSize.x,a.params.simulation.poolSize.y,a.params.simulation.poolSize.z]}).draw(u.plane)}),this.textureB.swapWith(this.textureA)};se.prototype.addOrRemoveVisualizationWaves=function(i){if(!(!this.visualizationWavesEnabled||!B.raceHasStarted)){var r=this;this.textureB.drawTo(function(){r.textureA.bind();const n=B.getAttributesTexture();n&&n.bind(1),r.visualizationWavesShader.uniforms({swimmersAttributesTexture:1,showDivingDistance:a.params.visualizations.showDivingDistance,showWR:a.params.visualizations.showWR,invPoolSizeVertex:[r.invPoolSize.x,r.invPoolSize.z],poolSize:[a.params.simulation.poolSize.x,a.params.simulation.poolSize.y,a.params.simulation.poolSize.z],wr:r.WR_position,sqrt_2_PI:r.sqrt_2_PI,add:i,swimmersNumber:a.swimmers.length,time:a.getRaceTime(),t:a.time,amplitudeFactor:a.params.quiver.amplitudeFactor,frequencyFactor:a.params.quiver.frequencyFactor,amplitude:a.params.quiver.amplitude,omega0:a.params.quiver.omega,waveLength0:a.params.quiver.waveLength}).draw(r.plane)}),this.textureB.swapWith(this.textureA)}};se.prototype.updateSpheres=function(i){if(this.prev_WR_position=this.WR_position,this.WR_position=a.getRaceTime()*2.155,this.WR_position>a.params.simulation.poolSize.z&&(this.WR_position=2*a.params.simulation.poolSize.z-this.WR_position),a.params.simulation.optimized)B.attributes.draw(),this.textureB.drawTo(()=>{this.textureA.bind(),B.bindDisplacementTexture(1),B.bindOldDisplacementTexture(2),this.sphereShader.uniforms({oldDisplacementTexture:2,displacementTexture:1,invPoolSizeVertex:[this.invPoolSize.x,this.invPoolSize.z],poolSize:[a.params.simulation.poolSize.x,a.params.simulation.poolSize.y,a.params.simulation.poolSize.z],optimized:!0}).draw(this.plane),this.textureB.swapWith(this.textureA),B.attributes.draw()});else{const n=[];a.swimmers.forEach(d=>d.spheres.forEach(u=>n.push(u)));for(let d=0;d<n.length;d++){const u=n[d];this.moveSphere(u.oldCenter,u.center,u.radius)}}};se.prototype.moveSphere=function(i,r,n){var d=this;this.textureB.drawTo(function(){d.textureA.bind(),d.sphereShader.uniforms({invPoolSizeVertex:[d.invPoolSize.x,d.invPoolSize.z],oldCenter:i,newCenter:r,radius:n,poolSize:[a.params.simulation.poolSize.x,a.params.simulation.poolSize.y,a.params.simulation.poolSize.z],optimized:!1}).draw(d.plane)}),this.textureB.swapWith(this.textureA)};se.prototype.stepSimulation=function(){var i=this;this.textureB.drawTo(function(){i.textureA.bind();const r=B.getAttributesTexture();r&&r.bind(2),i.updateShader.uniforms({swimmersAttributesTexture:2,swimmersNumber:a.swimmers.length,invPoolSizeVertex:[i.invPoolSize.x,i.invPoolSize.z],delta:[i.delta.x,i.delta.y],time:a.time,wr:i.WR_position,prev_wr:i.prev_WR_position,poolSize:[a.params.simulation.poolSize.x,a.params.simulation.poolSize.y,a.params.simulation.poolSize.z],sqrt_2_PI:i.sqrt_2_PI,damping:a.params.simulation.waterDamping}).draw(i.plane)}),this.textureB.swapWith(this.textureA),this.updateAreaConservation()};se.prototype.updateNormals=function(){var i=this;this.textureB.drawTo(function(){i.textureA.bind(),i.normalShader.uniforms({invPoolSizeVertex:[i.invPoolSize.x,i.invPoolSize.z],delta:[i.delta.x,i.delta.y]}).draw(i.plane)}),this.textureB.swapWith(this.textureA)};se.prototype.updateAreaConservation=function(){if(!a.params.visualizations.areaConservationEnabled)return;var i,r,n;if(this.textureA.type===this.gl.FLOAT)i=this.gl.FLOAT,r=Float32Array,n="EXT_color_buffer_float";else if(this.textureA.type===this.gl.HALF_FLOAT_OES)i=this.gl.HALF_FLOAT_OES,r=Uint16Array,n="EXT_color_buffer_half_float";else{console.warn("Unsupported texture type for reading");return}if(!this.gl.getExtension(n)){console.warn(n+" not available; cannot read pixels");return}this.fb||(this.fb=this.gl.createFramebuffer()),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.fb),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,this.textureA.id,0);const d=this.gl.checkFramebufferStatus(this.gl.FRAMEBUFFER);if(d!==this.gl.FRAMEBUFFER_COMPLETE){console.error("Framebuffer incomplete: "+d+" for texture type "+this.textureA.type),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null);return}this.gl.pixelStorei(this.gl.PACK_ALIGNMENT,1);const u=new r(this.W*this.H*4),g=new Float32Array(this.W*this.H*4);this.gl.readPixels(0,0,this.W,this.H,this.gl.RGBA,i,u);for(let D=0;D<this.W;D++)g[D*4+1]=1;const E=a.params.simulation.poolSize.x/this.W,A=a.params.simulation.poolSize.z/this.H,L=E*E,k=A*A;if(this.textureA.type===this.gl.FLOAT){for(let D=0;D<this.H;D+=1)for(let y=0;y<this.W;y+=1){const q=(D*this.W+y)*4,G=((this.H-1-D)*this.W+y)*4,T=g[G],R=g[G+1];if(y+1<this.W){const F=u[q]-u[q+4],N=Math.sqrt(F*F+L);g[G+4]=T+N}if(D+1<this.H){const F=u[q]-u[q+this.W*4],N=Math.sqrt(F*F+k);g[G-4*this.W+1]=R+N}}this.gl.bindTexture(this.gl.TEXTURE_2D,this.areaConservationTexture.id),this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT,1),this.gl.texSubImage2D(this.gl.TEXTURE_2D,0,0,0,this.W,this.H,this.gl.RGBA,this.gl.FLOAT,g)}this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.bindTexture(this.gl.TEXTURE_2D,null)};function ke(i){const r={};for(let n=0;n<i.length;n++)r[i[n]]=n;return r}const oe=new v.Vector(1e3,0,-1e3),Be=["none","only medals","all"],Ne=["neighbours","per swimmer"],rt=["none","cycle frequency","speed","acceleration"],ot={none:{value:0,name:"PARAMETER_NONE"},"cycle frequency":{value:1,name:"PARAMETER_CYCLES"},speed:{value:2,name:"PARAMETER_SPEED"},acceleration:{value:3,name:"PARAMETER_ACCELERATION"}};var ie,Xe,He,Pe,qe;class st{constructor(){ve(this,ie);this.params={numSteps:2,fov:45,visualizations:{enabled:!0,showFlags:!1,showWR:!1,showSpeed:!1,showDivingDistance:!0,showFinishTimes:!1,customWaterPerturbation:"none",waterColorParameter:"none",customParametersList:rt,customParametersDict:ot,PARAMETER_NONE:"none",PARAMETER_CYCLES:"cycle frequency",PARAMETER_SPEED:"speed",PARAMETER_ACCELERATION:"acceleration",showSwimmersLines:"none",swimmersLinesList:Be,showSwimmersLinesDict:ke(Be),swimmersLinesMode:"neighbours",swimmersLinesModeList:Ne,swimmersLinesModeDict:ke(Ne),medalsModeBeforeFinish:"none",medalsModesDict:{none:0,stars:1,bright:2,lanes:3},medalsModeAfterFinish:"none",areaConservationEnabled:!0,heightFieldRendering:!1,transitionBeginTime:null,shadow:{enabled:!0,shadowRadius:.5,shadowPower:.5,showCircle:!0,circleRadius:.6,circleStroke:.15},sparks:{enabled:!1,glow:5,glowOffset:.5,lengthFactor:1,stroke:.01,num:40,sizeFactor:50,fov:Math.PI/4}},swimmers:{showSpheres:!0,useTracking:!1},video:{thresholdBlending:!1,blendingThreshold:.41,show:!1,opacity:1},simulation:{optimized:!1,waterDamping:.02,poolSize:new v.Vector(2,1,2),buoyancyFactor:1.1},quiver:{amplitudeFactor:.8,frequencyFactor:1.2,amplitude:.1,omega:2,waveLength:5}},this.resolution=new v.Vector(256,256),this.gl=v.create(),this.gl.canvas.tabIndex=0,this.originalVisParams=JSON.parse(JSON.stringify(this.params.visualizations)),delete this.originalVisParams.shadow,delete this.originalVisParams.sparks,this.useConfigFile=!0,this.time=0,this.swimmers=[],this.translateX=0,this.translateY=0,this.zoomDistance=4,this.angleX=-25,this.angleY=-200.5,this.angleZ=0,this.water=null;const r=new Te("—",{poolSize:new v.Vector(2,1,2),waterResolution:new v.Vector(256,256),numSwimmers:1}),n=new _e({});r.addVideo(new Ee(this.gl,"",n));const d=new Te("100m freestyle",{poolSize:new v.Vector(25,2,50),waterResolution:new v.Vector(1024,2048),numSwimmers:10,thresholdBlending:!0,dataFolder:"./assets/race-data/"}),u=new _e({tx:-.53,ty:1.25,zoom:47.86,ax:-29,ay:-260.5,az:-5,fov:39.98});d.addVideo(new Ee(this.gl,"swimming-race.mp4",u,16.5)),this.currentVideo=d.videos[0];const g=new Te("synchronized swimming",{poolSize:new v.Vector(25,2,30),waterResolution:new v.Vector(1024,2048),numSwimmers:2,dataFolder:"./assets/synchronized-swimming-data/"}),E=new _e({tx:-1.32,ty:.4,zoom:32.41,ax:-18,ay:-291.5,az:1,fov:42.8});g.addVideo(new Ee(this.gl,"synchronized-swimming.mp4",E,17.5)),this.scenesList=[r,d,g],this.scenes={},this.scenesList.forEach(A=>this.scenes[A.title]=A),this.currentScene=r,this.paused=!1,this.configPlayButton(),this.transitions={},this.playingDemo=!1,this.renderWater=!0,this.renderCube=!0,this.spheresRadiusCoeff=1}configStopButton(){this.stopButton=document.getElementById("stop-button"),this.stopButton.addEventListener("click",()=>{this.stopRace()})}configPlayButton(){this.configStopButton(),this.playButton=document.getElementById("play-button"),this.playButton.addEventListener("click",()=>{this.playButton.textContent=="pause"?this.pause():(B.raceHasStarted||this.startRace(),this.play())})}setCalibration(r){this.translateX=r.tx,this.translateY=r.ty,this.zoomDistance=r.zoom,this.angleX=r.ax,this.angleY=r.ay,this.angleZ=r.az,this.params.fov=r.fov,this.gl.matrixMode(this.gl.PROJECTION),this.gl.loadIdentity(),this.gl.perspective(this.params.fov,this.gl.canvas.width/this.gl.canvas.height,.01,100),this.gl.matrixMode(this.gl.MODELVIEW)}async setScene(r){if(console.log("SET SCENE : "+r),this.currentScene=this.scenes[r],this.currentScene){const n=document.getElementById("time-slider-container");this.params.video.show=!!this.currentVideo.video,this.params.swimmers.showSpheres=!this.currentVideo.video,n.hidden=!this.currentVideo.video,this.currentScene.title!="—"?this.params.simulation.waterDamping=.1:this.params.simulation.waterDamping=.02;const d=this.currentScene.numSwimmers;if(console.log("num swimmers : "+d),this.swimmers.length!=d){for(let u=this.swimmers.length;u<d;u++){const g=new B(new v.Vector(0,0,0));this.swimmers.push(g)}for(let u=this.swimmers.length;u>d;u--)this.swimmers=this.swimmers.slice(1);this.swimmers.forEach(u=>u.waterDamping=this.params.simulation.waterDamping)}this.params.swimmers.useTracking=!0,await this.currentScene.parseData(this.swimmers),this.swimmers.forEach(u=>u.update(0)),console.log("scene name : "+this.currentScene.title),this.currentVideo=this.currentScene.videos[0],this.setCalibration(this.currentVideo.calibration),Z(this,ie,Xe).call(this,this.currentScene.poolSize),this.resolution=this.currentScene.waterResolution,this.params.video.thresholdBlending=this.currentScene.thresholdBlending,this.params.visualizations.areaConservationEnabled=!1,this.stopRace(),this._reset(),this.params.simulation.optimized=!!this.currentVideo.video}}useGravity(r){B.useGravity=r;for(let n of a.swimmers)n.body.cinematic=!B.useGravity}isOneVisualizationEnabled(){return this.params.visualizations.showFlags||this.params.visualizations.medalsModeBeforeFinish!="none"||this.params.visualizations.medalsModeAfterFinish!="none"||this.params.visualizations.showWR||this.params.visualizations.showSpeed||this.params.visualizations.showDivingDistance}updateTime(r){this.time+=r,this._updateDistanceMarker&&this._updateDistanceMarker()}getRaceTime(){return B.raceHasStarted?this.time-this.currentVideo.videoStartTime:0}resetParams(){Object.entries(this.originalVisParams).forEach(r=>{const n=r[0],d=r[1];this.params.visualizations[n]=d}),this.params.visualizations.areaConservationEnabled=!1}updateEventIndex(){for(this.currentEventIndex=0;this.events[this.currentEventIndex]&&this.events[this.currentEventIndex].time<this.getRaceTime();)this.currentEventIndex++;this.currentEventIndex>0&&this.currentEventIndex--}setRaceTime(r){this.time=this.currentVideo.videoStartTime+r,this.currentVideo.video&&this.currentVideo.setTime(this.time),this.events&&(this.updateEventIndex(),this.resetParams())}startRace(){console.log("START RACE"),this.setRaceTime(-3),this.currentVideo.video&&this.currentVideo.video.play(),this.swimmers.forEach(r=>r.startRace()),B.raceHasStarted=!0,B.useGravity=!0,this.water.resetTextures(),this.water.WR_position=0,this.stopButton.hidden=!1}stopRace(){this.paused&&this.play(),this.setRaceTime(0),this.currentVideo.video&&this.currentVideo.video.pause(),this.swimmers.forEach(r=>r.swim(!1)),B.raceHasStarted=!1,this.water.resetTextures(),this.playButton.textContent="play",this.stopButton.hidden=!0}pause(){this.paused=!0,this.pauseVideo(),this.playButton.textContent="play"}play(){this.paused=!1,B.raceHasStarted&&(this.playVideo(),this.playButton.textContent="pause")}pauseVideo(){this.currentVideo.video&&this.currentVideo.video.pause()}playVideo(){this.currentVideo.video&&(this.currentVideo.video.play(),this.currentVideo.video.currentTime=this.time)}renderVideo(){this.currentVideo.video&&this.currentVideo.render()}parseConfigFile(r){fetch(r).then(n=>n.text()).then(n=>{this.events=JSON.parse(n),this.currentEventIndex=0,this._renderTimeline&&this._renderTimeline()})}updateTransitions(){Object.entries(this.transitions).forEach(r=>{const n=r[0],d=r[1],u=this.getRaceTime()-d.beginTime;if(u>d.duration){delete this.transitions[n];return}d.show?d.opacity=u/d.duration:d.opacity=1-u/d.duration})}updateParams(){if(!B.raceHasStarted||!this.events||!this.useConfigFile)return;const r=this.events[this.currentEventIndex];if(!r)return;let n=r.rankSwimmerToggle;if(n||(n=1),r.distance&&this.swimmers[n-1].getDistanceTraveled()>=r.distance||r.time!==void 0&&this.getRaceTime()>=r.time){this.currentEventIndex++;const d=r.transition&&r.transition.type=="dissolve";Object.entries(r.params).forEach(u=>{const g=u[0],E=u[1];g!=="transition"&&(d&&(E===!0||E===!1)&&(this.transitions[g]={opacity:1-1*E,show:E,beginTime:this.getRaceTime(),duration:r.transition.duration}),this.params.visualizations[g]=E)})}}async launchDemo(){console.log("Launch demo"),await this.setScene("100m freestyle"),this.params.video.show=!1,this.params.swimmers.showSpheres=!0,this.demoTime=0,this.swimmers.forEach(r=>r.body.move(oe)),this.swimmersShown=0,this.playingDemo=!0,this.useGravity(!0),this.params.simulation.buoyancyFactor=1.5,this.params.visualizations.shadow.enabled=!1,this.renderWater=!1,this.translateX=200,this.parseConfigFile("./assets/vis-config-demo-2.json"),this._gui.hide(),document.getElementById("event-editor").hidden=!0,document.getElementById("time-slider-container").hidden=!0,document.getElementById("h").hidden=!0}stopDemo(){this.playingDemo=!1,this.setScene("—"),document.getElementById("event-editor").hidden=!1,document.getElementById("time-slider-container").hidden=!1,document.getElementById("h").hidden=!1,this.renderWater=!0,this.renderCube=!0,this.params.visualizations.shadow.enabled=!0,this._gui.show(),this.params.simulation.buoyancyFactor=1.1}updateDemo(r){if(!this.playingDemo)return;const n=this.demoTime;this.demoTime+=r;const d=2,u=1;if(n<=u){const y=Z(this,ie,Pe).call(this,0,u,n);this.translateX=y*this.currentVideo.calibration.tx+(1-y)*200}else this.demoShowVideoTime||(this.angleY+=.4);!this.renderCube&&n>.5&&(this.renderCube=!0);const g=1.5;if(!this.renderWater&&n>1.5&&(this.renderWater=!0),n>g&&n<g+.5)for(var E=0;E<10;E++)this.water.addDrop(Math.random()*2-1,Math.random()*2-1,.06,E&1?.6:-.6);Z(this,ie,He).call(this,n,d);const A=3,L=5;!B.raceHasStarted&&n>=A&&n<L&&this.swimmers.forEach(y=>{const q=new v.Vector(y.body.center.x,0,0),G=new v.Vector(y.body.center.x,1,-this.params.simulation.poolSize.z/2);y.body.move(Z(this,ie,qe).call(this,q,G,A,L,n))}),!B.raceHasStarted&&n>=L&&(this.params.simulation.buoyancyFactor=1.1,this.startRace()),!this.demoShowVideoTime&&this.angleY>=this.currentVideo.calibration.ay+360&&(this.demoShowVideoTime=this.demoTime+1),!this.params.video.show&&this.demoShowVideoTime&&n>=this.demoShowVideoTime&&(this.params.video.show=!0,this.params.video.opacity=0);const k=2;this.params.video.show&&n<=this.demoShowVideoTime+k&&(this.params.video.opacity=(n-this.demoShowVideoTime)/k,console.log("opacity : "+this.params.video.opacity));const D=2;this.params.video.show&&n>this.demoShowVideoTime+k&&n<this.demoShowVideoTime+k+D&&(this.spheresRadiusCoeff=1-(n-(this.demoShowVideoTime+k))/D)}}ie=new WeakSet,Xe=function(r){console.log("SET POOL SIZE : "+r.z),this.params.simulation.poolSize.x=r.x,this.params.simulation.poolSize.y=r.y,this.params.simulation.poolSize.z=r.z},He=function(r,n){const u=Math.floor((r-n)/.1);if(this.swimmersShown<10&&u>=this.swimmersShown){console.log("swimmers shown : "+this.swimmersShown),console.log("next index swimmer : "+u),console.log("num swimmers : "+this.swimmers.length);const g=this.params.simulation.poolSize.x,A=-g/2+g/20+u*g/10;this.swimmers[u].body.move(new v.Vector(A,.5,0)),this.swimmersShown++}},Pe=function(r,n,d){if(d<r)return 0;if(d>n)return 1;const u=(d-r)/(n-r);return 1-(Math.cos(u*Math.PI)+1)/2},qe=function(r,n,d,u,g){const E=Z(this,ie,Pe).call(this,d,u,g);console.log("t norm : "+E);const A=(L,k,D,y=1)=>Math.pow(D,y)*k+(1-Math.pow(D,y))*L;return new v.Vector(A(r.x,n.x,E),A(r.y,n.y,E,20),A(r.z,n.z,E,2))};const a=new st;a.parseConfigFile("./assets/vis-config.json");const at=`#version 300 es
    const float ARM_DELTA_X = float(`+ze+`);
    const float FOOT_DELTA_X = float( `+Ce+`);
    const float FOOT_DELTA_Z = float( `+Fe+`);
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

`,nt=`#version 300 es
    precision highp float;
    in float fragCyclePhase;
    in float fragAltitude;
    const float PI = 3.141592;
    out vec4 fragColor;
    void main() {
        fragColor = vec4(fragAltitude, fragCyclePhase / (2. * PI), 1., 1.);
    }
`,lt=`#version 300 es
    in vec2 iVertex;
    out vec2 fragCoord;
    void main() {
        fragCoord = iVertex * .5 + .5;
        gl_Position = vec4(iVertex.xy, 0., 1.);
    }
`,ct=`#version 300 es
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
`,dt=new Float32Array([-1,-1,1,-1,1,1,-1,1]),ht=new Uint16Array([0,1,2,2,3,0]);var J,Ye,fe,je;class mt{constructor(){ve(this,J);this.numVecAttributes=Ve,this.maxNumSwimmer=Ue,this.gl=a.gl;const r=this.gl.NEAREST;this.texture=new v.Texture(this.numVecAttributes,this.maxNumSwimmer,{type:this.gl.FLOAT,filter:r}),this.initPrograms(),this.indexBuffer=this.gl.createBuffer(),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.indexBuffer),this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER,ht,this.gl.STATIC_DRAW),this.vboPlane=this.gl.createBuffer(),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vboPlane),this.gl.bufferData(this.gl.ARRAY_BUFFER,dt,this.gl.STATIC_DRAW),this.vboPoints=this.gl.createBuffer()}update(){this.numSwimmers=a.swimmers.length;const r=5;this.swimmersAttributes=new Float32Array(this.numVecAttributes*4*this.maxNumSwimmer*r);const n=Z(this,J,Ye).call(this,a.swimmers);for(let d=0;d<a.swimmers.length;d++){const u=n[d];Z(this,J,je).call(this,d,u),Z(this,J,fe).call(this,a.swimmers.length+d,u.leftArm),Z(this,J,fe).call(this,2*a.swimmers.length+d,u.rightArm),Z(this,J,fe).call(this,3*a.swimmers.length+d,u.leftFoot),Z(this,J,fe).call(this,4*a.swimmers.length+d,u.rightFoot)}this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture.id),this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,!1),this.gl.texSubImage2D(this.gl.TEXTURE_2D,0,0,0,this.numVecAttributes,this.maxNumSwimmer,this.gl.RGBA,this.gl.FLOAT,this.swimmersAttributes),this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,!0),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vboPoints),this.gl.bufferData(this.gl.ARRAY_BUFFER,this.swimmersAttributes,this.gl.DYNAMIC_DRAW)}buildShader(r,n){const d=this.gl.createShader(n);return this.gl.shaderSource(d,r),this.gl.compileShader(d),d}createProgram(r){const n=this.gl.createProgram();return r.forEach(d=>{this.gl.attachShader(n,d)}),this.gl.linkProgram(n),n}checkShaders(r,n,d){this.gl.getShaderParameter(r,this.gl.COMPILE_STATUS)||console.error(this.gl.getShaderInfoLog(r)),this.gl.getShaderParameter(n,this.gl.COMPILE_STATUS)||console.error(this.gl.getShaderInfoLog(n)),this.gl.getProgramParameter(d,this.gl.LINK_STATUS)||console.error(this.gl.getProgramInfoLog(d))}createRenderingTexture(r,n){this.pointsTexture=new v.Texture(r,n,{type:this.gl.FLOAT,filter:this.gl.NEAREST}),this.pointsFrameBuffer=this.gl.createFramebuffer(),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.pointsFrameBuffer);const d=this.gl.COLOR_ATTACHMENT0;this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,d,this.gl.TEXTURE_2D,this.pointsTexture.id,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.horizontalPassTexture=new v.Texture(r,n,{type:this.gl.FLOAT,filter:this.gl.LINEAR}),this.horizontalPassFrameBuffer=this.gl.createFramebuffer(),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.horizontalPassFrameBuffer),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,d,this.gl.TEXTURE_2D,this.horizontalPassTexture.id,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null);const u=n/4,g=u,E=u;this.displacementTexture=new v.Texture(g,E,{type:this.gl.FLOAT,filter:this.gl.LINEAR}),this.displacementFrameBuffer=this.gl.createFramebuffer(),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.displacementFrameBuffer),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,d,this.gl.TEXTURE_2D,this.displacementTexture.id,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.oldDisplacementTexture=new v.Texture(g,E,{type:this.gl.FLOAT,filter:this.gl.LINEAR})}buildProgram(r,n){const d=this.buildShader(r,this.gl.VERTEX_SHADER),u=this.buildShader(n,this.gl.FRAGMENT_SHADER),g=this.createProgram([d,u]);return this.checkShaders(d,u,g),g}initPrograms(){this.programPoints=this.buildProgram(at,nt),this.programVolume=this.buildProgram(lt,ct),this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height)}volumePass(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.horizontalPassFrameBuffer),this.gl.useProgram(this.programVolume);const r=this.gl.getAttribLocation(this.programVolume,"iVertex"),n=this.gl.getUniformLocation(this.programVolume,"poolSize");this.gl.uniform2f(n,a.params.simulation.poolSize.x,a.params.simulation.poolSize.z);const d=this.gl.getUniformLocation(this.programVolume,"horizontal");this.gl.uniform1i(d,!0);const u=this.gl.getUniformLocation(this.programVolume,"show");this.gl.uniform1i(u,!1);const g=this.gl.getUniformLocation(this.programVolume,"swapColor");this.gl.uniform1i(g,!1);const E=2,A=this.gl.FLOAT,L=!1,k=0,D=0;this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vboPlane),this.gl.vertexAttribPointer(r,E,A,L,k,D),this.gl.enableVertexAttribArray(r),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.indexBuffer),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.pointsTexture.id),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this.gl.drawElements(this.gl.TRIANGLES,6,this.gl.UNSIGNED_SHORT,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.displacementFrameBuffer),this.gl.uniform1i(d,!1),this.gl.uniform1i(u,!1),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.horizontalPassTexture.id),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this.gl.viewport(0,0,this.displacementTexture.width,this.displacementTexture.height),this.gl.drawElements(this.gl.TRIANGLES,6,this.gl.UNSIGNED_SHORT,0),this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height)}pointPass(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.pointsFrameBuffer),this.gl.useProgram(this.programPoints);const r=this.gl.getAttribLocation(this.programPoints,"iData1"),n=this.gl.getAttribLocation(this.programPoints,"iData2"),d=this.gl.getAttribLocation(this.programPoints,"iData3"),u=this.gl.getUniformLocation(this.programPoints,"invPoolSize");this.gl.uniform2f(u,1/a.params.simulation.poolSize.x,1/a.params.simulation.poolSize.z);const g=4,E=this.gl.FLOAT,A=!1,L=4,k=12*L;let D=0;this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vboPoints),r>=0&&(this.gl.vertexAttribPointer(r,g,E,A,k,D),this.gl.enableVertexAttribArray(r)),D=4*L,n>=0&&(this.gl.vertexAttribPointer(n,g,E,A,k,D),this.gl.enableVertexAttribArray(n)),D=2*4*L,d>=0&&(this.gl.vertexAttribPointer(d,g,E,A,k,D),this.gl.enableVertexAttribArray(d)),this.gl.viewport(0,0,this.pointsTexture.width,this.pointsTexture.height),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this.gl.drawArrays(this.gl.POINTS,0,5*this.numSwimmers)}updateOldDisplacementTexture(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.displacementFrameBuffer),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.oldDisplacementTexture.id),this.gl.copyTexSubImage2D(this.gl.TEXTURE_2D,0,0,0,0,0,this.oldDisplacementTexture.width,this.oldDisplacementTexture.height)}draw(){this.updateOldDisplacementTexture(),this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this.pointPass(),this.volumePass(),this.gl.disable(this.gl.BLEND)}}J=new WeakSet,Ye=function(r){const n=function(g,E){return E.getDistanceTraveled()-g.getDistanceTraveled()};let d=0;r.forEach(g=>{g.hasFinished()>.1&&d++});const u=r.slice(0,d).concat(r.slice(d).sort(n));for(let g=0;g<r.length;g++)r[g]=u[g];return r},fe=function(r,n){this.swimmersAttributes[this.numVecAttributes*4*r]=n.center.x,this.swimmersAttributes[this.numVecAttributes*4*r+1]=n.center.z,this.swimmersAttributes[this.numVecAttributes*4*r+7]=n.center.y},je=function(r,n){Z(this,J,fe).call(this,r,n.body),this.swimmersAttributes[this.numVecAttributes*4*r+2]=n.divingDistance,this.swimmersAttributes[this.numVecAttributes*4*r+3]=n.divingTime,this.swimmersAttributes[this.numVecAttributes*4*r+4]=n.reactionTime,this.swimmersAttributes[this.numVecAttributes*4*r+5]=n.body.velocity.z*3.6,this.swimmersAttributes[this.numVecAttributes*4*r+6]=n.nationality,this.swimmersAttributes[this.numVecAttributes*4*r+8]=n.breakoutDistance,this.swimmersAttributes[this.numVecAttributes*4*r+9]=n.breakoutTime,this.swimmersAttributes[this.numVecAttributes*4*r+10]=n.finishTime,this.swimmersAttributes[this.numVecAttributes*4*r+11]=n.waterDamping};function Se(i=0,r=1){const n=1-Math.random(),d=Math.random();return Math.sqrt(-2*Math.log(n))*Math.cos(2*Math.PI*d)*r+i}const ut=.5,ft=2,ce="Temps (s)",ge="event",be="eventX",pt="frequence (cylce/min)",H=class H{constructor(r){this.startingPoint=new v.Vector(r.x,r.y,r.z),this.center=new v.Vector(r.x,r.y,r.z),this.force=new v.Vector(0,0,190+Se(0,20)),this.reactionTime=Math.max(.1,Se(.15,.02));const n=.25,d=.15;this.body=new pe(r,n),this.leftArm=new pe(oe,d),this.rightArm=new pe(oe,d),this.leftFoot=new pe(oe,d),this.rightFoot=new pe(oe,d),this.body.cinematic=!H.useGravity,this.leftArm.cinematic=!0,this.rightArm.cinematic=!0,this.leftFoot.cinematic=!0,this.rightFoot.cinematic=!0,this.spheres=[this.body,this.leftArm,this.rightArm,this.leftFoot,this.rightFoot],this.divingDistance=0,this.divingTime=1e3,this.breakoutDistance=0,this.breakoutTime=1e3,this.nationality=Math.random()>.5?0:1,this.currendDataIndex=0,this.useTracking=!1,this.armPulsation=2*Math.PI*ft,this.cycleTime=0,this.cyclePhase=0,this.finishTime=0,this.waterDamping=a.params.simulation.waterDamping}async parseData(r){await fetch(r).then(n=>{const d=n.headers.get("content-type");return!d||!d.includes("text/csv")?(console.log("no file found : "+r),null):n.text()}).then(n=>{if(!n)return;const d=n.split(`
`),u=d[0].split(/,|;/);this.data=d.slice(1).map(g=>{const E=g.split(/,|;/);return Object.fromEntries(u.map((A,L)=>[A,E[L]]))}),a.params.swimmers.useTracking&&(this.armPulsation=0)})}getDistanceTraveled(){const r=this.body.velocity.z,n=a.params.simulation.poolSize.z,d=this.body.center.z+n/2;return r>=0?d:2*n-d}startRace(){this.hasBrokeOut=!1,this.hasDove=!1,this.hasReacted=!1}jump(r=4.5){this.body.cinematic=!1,this.body.velocity=new v.Vector(0,0,r+Se(0,1)),this.body.center=new v.Vector(this.startingPoint.x,1,-a.params.simulation.poolSize.z/2)}swim(r){this.hasReacted=r,this.isSwimming=r,this.finishTime=0,r||(this.body.followTarget=!1),r?(this.body.cinematic=!1,this.useGravity=!0,this.body.center=new v.Vector(this.startingPoint.x,0,-a.params.simulation.poolSize.z/2)):(this.body.velocity=new v.Vector(0,0,0),this.body.center=new v.Vector(this.startingPoint.x,0,0))}hasFinished(){return this.finishTime>.1}getArmOffset(r,n){n+=this.cyclePhase;const d=this.body.velocity.z>=0?this.armPulsation:-this.armPulsation;return new v.Vector(0,Math.cos(d*r+n),Math.sin(d*r+n)).multiply(ut)}setCurrentDataIndex(){if(this.currendDataIndex=0,!!this.data){for(;this.data[this.currendDataIndex]&&this.data[this.currendDataIndex][ce]<a.getRaceTime();)this.currendDataIndex++;if(this.currendDataIndex+1<this.data.length){if(this.currendDataIndex-1>=0){const r=parseFloat(this.data[this.currendDataIndex][be]);let n=r;const d=a.params.simulation.poolSize.z;r>d&&(n=2*d-n),n-=d/2;const u=this.body.center;this.body.move(new v.Vector(u.x,u.y,n));const g=Math.sign(50-r)*.1;this.body.velocity=new v.Vector(0,0,g),console.log("vz : "+g)}this.body.setTarget(null),this.body.followTarget=!0,this.finishTime=0}}}findNextCycle(){let r=this.currendDataIndex+1;if(!this.data)return null;for(;this.data[r]&&this.data[r][ge]!="cycle";)r++;return this.data[r]?parseFloat(this.data[r][ce]):null}setDamping(r){if(a.params.visualizations.customWaterPerturbation==a.params.visualizations.PARAMETER_CYCLES){const n=parseFloat(r[pt]);if(n>0){console.log("FREQ : "+n);const d=80,u=35;let g=(n-u)/(d-u);g=Math.max(Math.min(g,1),0);const E=.03,A=.22;this.waterDamping=E+(A-E)*(1-g)}}else this.waterDamping=a.params.simulation.waterDamping}handleTracking(r){if(this.hasReacted&&this.useTracking&&this.currendDataIndex<this.data.length&&this.data[this.currendDataIndex][ce]<r){console.log("enter handle tracking"),this.setDamping(this.data[this.currendDataIndex]);let n=null,d=r;const u=this.data[this.currendDataIndex+1];this.currendDataIndex+1<this.data.length&&(n=parseFloat(u[be]),d=parseFloat(u[ce]));const g=a.params.simulation.poolSize.z;let E=-this.body.radius/2;const A=this.data[this.currendDataIndex][ge];if(A=="enter"||A=="turn"&&u[ge]!="under"){d=(r+d)/2,n=(this.body.center.z+g/2+n)/2;const k={[ce]:d,[be]:n,[ge]:"under"};this.data.splice(this.currendDataIndex+1,0,k),E=-1.5}u&&u[ge]=="under"&&(E=-1.5),n>g&&(n=2*g-n),n-=a.params.simulation.poolSize.z/2;const L=new v.Vector(this.startingPoint.x,E,n);if(this.currendDataIndex+1<this.data.length?this.body.setTarget(L,d-r):this.body.setTarget(null),A=="cycle"){const k=parseFloat(this.data[this.currendDataIndex][ce]),D=this.findNextCycle();if(D){const q=1/(D-k);this.armPulsation=2*Math.PI*q,this.cycleTime=0,this.cyclePhase==0?this.cyclePhase=Math.PI:this.cyclePhase=0}}else A=="finish"&&(this.finishTime=this.data[this.currendDataIndex][ce],this.body.followTarget=!1,this.isSwimming=!1);this.currendDataIndex++}}moveSpheresAway(){this.rightArm.move(oe),this.leftArm.move(oe),this.rightFoot.move(oe),this.leftFoot.move(oe)}moveSpheres(r){this.cycleTime+=r;const n=this.getArmOffset(.5*this.cycleTime,0),d=this.getArmOffset(.5*this.cycleTime,Math.PI),u=this.getArmOffset(.5*this.cycleTime*2,0),g=this.getArmOffset(.5*this.cycleTime*2,Math.PI);this.rightArm.move(this.body.center.add(n).add(new v.Vector(ze,0,0))),this.leftArm.move(this.body.center.add(d).add(new v.Vector(-ze,0,0)));const E=this.body.velocity.z>=0?-Fe:Fe;this.rightFoot.move(this.body.center.add(new v.Vector(Ce,u.y*.5,E))),this.leftFoot.move(this.body.center.add(new v.Vector(-Ce,g.y*.5,E)))}update(r){const n=a.getRaceTime();!H.raceHasStarted&&this.data&&(this.useTracking=a.params.swimmers.useTracking),!this.hasReacted&&H.raceHasStarted&&(this.useTracking||n>this.reactionTime&&!a.params.swimmers.useTracking?(this.swim(!0),this.waterDamping=a.params.simulation.waterDamping,this.jump(),this.useTracking&&(this.body.cinematic=!0,this.body.followTarget=!0,this.body.setTarget(null))):(this.swim(!1),this.body.cinematic=!0,a.playingDemo?this.body.move(new v.Vector(this.body.center.x,1,-a.params.simulation.poolSize.z/2)):this.body.move(oe)),this.currendDataIndex=0),this.moveSpheresAway(),this.isSwimming&&(this.useTracking||this.body.addForce(this.force),this.body.center.y>-this.body.radius&&this.moveSpheres(r)),this.handleTracking(n);for(let u of this.spheres)u.update(r);H.raceHasStarted&&!this.hasDove&&this.body.center.y<0&&this.body.oldCenter.y>=0&&(this.divingDistance=this.body.center.z+a.params.simulation.poolSize.z/2,this.divingTime=n,this.hasDove=!0);const d=this.body.radius;H.raceHasStarted&&!this.hasBrokeOut&&this.body.center.y>-d&&this.body.oldCenter.y<=-d&&(this.breakoutDistance=this.body.center.z+a.params.simulation.poolSize.z/2,this.breakoutTime=n,this.hasBrokeOut=!0)}};te(H,"useGravity",!1),te(H,"raceHasStarted",!1),te(H,"swimming",!1),te(H,"attributes"),te(H,"initAttributes",()=>{H.attributes=new mt}),te(H,"updateAttributesTexture",()=>{H.attributes.update()}),te(H,"getAttributesTexture",()=>H.attributes.texture),te(H,"bindDisplacementTexture",r=>{H.attributes.displacementTexture.bind(r)}),te(H,"bindOldDisplacementTexture",r=>{H.attributes.oldDisplacementTexture.bind(r)}),te(H,"reset",r=>{H.attributes.createRenderingTexture(r.x,r.y)});let B=H;const gt=`
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
`;var de=`
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
`;function le(i,r,n,d){this.water=r,this.gl=i,this.tileTexture=v.Texture.fromImage(document.getElementById("tiles"),{minFilter:this.gl.LINEAR_MIPMAP_LINEAR,wrap:this.gl.REPEAT,format:this.gl.RGB}),this.franceTexture=v.Texture.fromImage(document.getElementById("france"),{minFilter:this.gl.LINEAR_MIPMAP_LINEAR,wrap:this.gl.REPEAT,format:this.gl.RGBA}),this.chinaTexture=v.Texture.fromImage(document.getElementById("china"),{minFilter:this.gl.LINEAR_MIPMAP_LINEAR,wrap:this.gl.REPEAT,format:this.gl.RGBA}),this.lettersTexture=v.Texture.fromImage(document.getElementById("letters"),{minFilter:this.gl.LINEAR,magFilter:this.gl.LINEAR,wrap:this.gl.REPEAT,format:this.gl.RGBA}),this.flagSize=d,this.flagSize=[1.5,1],this.flagCenter=n,this.lightDir=new v.Vector(2,2,-1).unit(),this.causticTex=new v.Texture(1024,1024),this.waterShaders=[];let u="";Object.entries(a.params.visualizations.customParametersDict).forEach(A=>{const L=A[1].name,k=A[1].value;u+="#define "+L+" "+k+`
`});for(var g=0;g<2;g++)this.waterShaders[g]=new v.Shader(`
      uniform sampler2D water;
      uniform vec3 poolSizeVertexShader;
      out vec3 position;
      void main() {
        vec4 info = texture(water, gl_Vertex.xy / poolSizeVertexShader.xz + 0.5);
        position = gl_Vertex.xzy;
        position.y += info.r;
        gl_Position = gl_ModelViewProjectionMatrix * vec4(position, 1.0);
      }
    `,de+`
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

      uniform bool heightFieldRendering;

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
      
      
      `+xe+gt+`
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
        float startDissipationTime = -1.;
        float stopDissipationTime = 1.;
        float reshowTime = 4.;
        float reshowAppearDuration = 2.;
        if (time >= startDissipationTime && time <= stopDissipationTime) {
          distFactor =  (time - startDissipationTime) / (stopDissipationTime - startDissipationTime);
          // distFactor = log(1. - (time - startDissipationTime) / (stopDissipationTime - startDissipationTime));
          distFactor = pow(distFactor, 3.);
          distFactor /= 2.5;
        }
        posFlag.x += perlin(posFlag.xy, 5., time*.000001) * distFactor;
        posFlag.y += perlin(posFlag.yx, 5., time*.000001) * distFactor;
        vec2 flagCoord = posFlag / flagSize + 0.5;
        if (bool(showFlags) && abs(posFlag.x) <= flagSize.x / 2. && abs(posFlag.y) <= flagSize.y / 2.) {
          vec3 flagColor;
          if(nationality < .5) flagColor = texture(france, vec2(1.-flagCoord.y,1.- flagCoord.x)).xyz;
          else flagColor = texture(china, vec2(1.-flagCoord.y,1.- flagCoord.x)).xyz;
          float opacity = showFlags;
          if (time >= stopDissipationTime && time <= reshowTime) opacity = 0.;
          else if (time >= reshowTime && time <= reshowTime + reshowAppearDuration) opacity *= (time - reshowTime) / reshowAppearDuration;
          else if (time >= startDissipationTime && time <= stopDissipationTime ) opacity *= 1. - (time - startDissipationTime) / (stopDissipationTime - startDissipationTime);
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
        if (!shadowEnabled || abs(altitude - (-.06)) < .18) return;
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
          drawFlags(position, swimmerPos, swimmerAltitude, getSwimmerNationality(i), rightSide, color);
          if (showSpeed || showFinishTimes) drawNumbers(position, swimmerPos, i, rightSide, color);
          if (shadowEnabled) drawShadows(projectedPosition, swimmerPos, swimmerAltitude, color);
          colorWater(projectedPosition, swimmerPos, getColorValue(speed), color);
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
          if (bool(showFlags) || showWR || int(medalsModeAfterFinish) != MEDALS_NONE || int(medalsModeBeforeFinish) != MEDALS_NONE || showSpeed || showDivingDistance) drawVisualizations(origin.xz, color);
          
          
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
        if (heightFieldRendering) {
          float interval = .1;
          float value = abs(info.r) / interval;
          value = min(max(value, 0.), 1.);
          vec4 lowColor = vec4(0., 0., 1., 1.);
          vec4 highColor = vec4(1., 0., 0., 1.);
          vec4 color = info.r > 0. ? highColor : lowColor;
          fragColor = value * color;
          return;
        }
        
        vec3 normal = vec3(info.b, sqrt(1.0 - dot(info.ba, info.ba)), info.a);
        vec3 incomingRay = normalize(position - eye);
        
        `+(g?`
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
    `);this.sphereMesh=v.Mesh.sphere({detail:10}),this.sphereShader=new v.Shader(de+`
    out vec3 position;
  void main() {
    position = sphereCenter + gl_Vertex.xyz * sphereRadius;
    gl_Position = gl_ModelViewProjectionMatrix * vec4(position, 1.0);
  }
  `,de+`
    in vec3 position;
    out vec4 fragColor;
  void main() {
    fragColor = vec4(getSphereColor(position), 1.0);
      vec4 info = texture(water, position.xz / poolSize.xz + 0.5);
    if (position.y < info.r) {
      fragColor.rgb *= underwaterColor * 1.2;
    }
  }
  `),this.reset(),this.cubeShader=new v.Shader(de+`
    out vec3 position;
  void main() {
    position = gl_Vertex.xyz;
    position.y = ((1.0 - position.y) * (7.0 / 12.0) - 1.0) * poolSize.y;
    gl_Position = gl_ModelViewProjectionMatrix * vec4(position, 1.0);
  }
  `,de+`
    in vec3 position;
    out vec4 fragColor;
  void main() {
    fragColor = vec4(getWallColor(position), 1.0);
      vec4 info = texture(water, position.xz / poolSize.xz + 0.5);
    if (renderWater && position.y < info.r) {
      fragColor.rgb *= underwaterColor * 1.2;
    }
  }
  `),this.sphereCenter=new v.Vector,this.sphereRadius=0;var E=!!this.gl.getExtension("OES_standard_derivatives");this.causticsShader=new v.Shader(de+`
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
  `+de+`
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
  `)}le.prototype.reset=function(){this.cubeMesh=v.Mesh.cube({width:a.params.simulation.poolSize.x,height:2,depth:a.params.simulation.poolSize.z}),this.cubeMesh.triangles.splice(4,2),this.cubeMesh.compile()};le.prototype.updateCaustics=function(i){};le.prototype.renderWater=function(i,r,n){if(!a.renderWater)return;var d=new v.Raytracer;i.textureA.bind(0),this.tileTexture.bind(1),r.bind(2),this.causticTex.bind(3),this.franceTexture.bind(4),this.chinaTexture.bind(8),this.lettersTexture.bind(7),i.areaConservationTexture.bind(5);const u=B.getAttributesTexture();u&&u.bind(6),this.gl.enable(this.gl.CULL_FACE),a.updateTransitions();for(var g=0;g<2;g++)this.gl.cullFace(g?this.gl.BACK:this.gl.FRONT),this.waterShaders[g].uniforms({renderWater:!0,light:this.lightDir,water:0,tiles:1,sky:2,causticTex:3,france:4,china:8,areaConservationTexture:5,swimmersAttributesTexture:6,iChannel0:7,areaConservation:a.params.visualizations.areaConservationEnabled,flagSize:[1.5,2],flagCenter:[this.flagCenter.x,this.flagCenter.y],poolSize:[a.params.simulation.poolSize.x,a.params.simulation.poolSize.y,a.params.simulation.poolSize.z],poolSizeVertexShader:[a.params.simulation.poolSize.x,a.params.simulation.poolSize.y,a.params.simulation.poolSize.z],eye:d.eye,sphereCenter:this.sphereCenter,sphereRadius:this.sphereRadius,showProjectionGrid:i.showProjectionGrid,showAreaConservedGrid:i.showAreaConservedGrid,wr:i.WR_position,swimmersNumber:a.swimmers.length,showFlags:a.transitions.showFlags?a.transitions.showFlags.opacity:a.params.visualizations.showFlags,showWR:a.params.visualizations.showWR,showSpeed:a.params.visualizations.showSpeed,showDivingDistance:a.params.visualizations.showDivingDistance,showFinishTimes:a.params.visualizations.showFinishTimes,time:a.getRaceTime(),shadowEnabled:n.enabled,shadowRadius:n.shadowRadius,shadowPower:n.shadowPower,showCircle:n.showCircle,shadowCircleRadius:n.circleRadius,shadowCircleStroke:n.circleStroke,showSwimmersLines:Math.round(a.params.visualizations.showSwimmersLinesDict[a.params.visualizations.showSwimmersLines]),swimmersLinesMode:a.params.visualizations.swimmersLinesModeDict[a.params.visualizations.swimmersLinesMode],medalsModeBeforeFinish:Math.round(a.params.visualizations.medalsModesDict[a.params.visualizations.medalsModeBeforeFinish]),medalsModeAfterFinish:Math.round(a.params.visualizations.medalsModesDict[a.params.visualizations.medalsModeAfterFinish]),heightFieldRendering:a.params.visualizations.heightFieldRendering,waterColorParameter:a.params.visualizations.customParametersDict[a.params.visualizations.waterColorParameter].value}).draw(i.plane);this.gl.disable(this.gl.CULL_FACE)};le.prototype.renderSpheres=function(i){const r=[];a.swimmers.forEach(n=>n.spheres.forEach(d=>r.push(d)));for(let n of r)this.renderSphere(i,n)};le.prototype.renderSphere=function(i,r){i.textureA.bind(0),this.causticTex.bind(1),this.sphereShader.uniforms({light:this.lightDir,water:0,causticTex:1,sphereCenter:[r.center.x,r.center.y,r.center.z],sphereRadius:r.radius*a.spheresRadiusCoeff,poolSize:[a.params.simulation.poolSize.x,a.params.simulation.poolSize.y,a.params.simulation.poolSize.z]}).draw(r.mesh)};le.prototype.renderSphereOld=function(i){i.textureA.bind(0),this.causticTex.bind(1),this.sphereShader.uniforms({light:this.lightDir,water:0,causticTex:1,sphereCenter:this.sphereCenter,sphereRadius:this.sphereRadius,poolSize:[a.params.simulation.poolSize.x,a.params.simulation.poolSize.y,a.params.simulation.poolSize.z]}).draw(this.sphereMesh)};le.prototype.renderCube=function(i){a.renderCube&&(this.gl.enable(this.gl.CULL_FACE),i.textureA.bind(0),this.tileTexture.bind(1),this.causticTex.bind(2),this.cubeShader.uniforms({light:this.lightDir,water:0,tiles:1,causticTex:2,sphereCenter:this.sphereCenter,sphereRadius:this.sphereRadius,poolSize:[a.params.simulation.poolSize.x,a.params.simulation.poolSize.y,a.params.simulation.poolSize.z],renderWater:a.renderWater}).draw(this.cubeMesh),this.gl.disable(this.gl.CULL_FACE))};function De(i,r){this.gl=r,this.id=r.createTexture(),r.bindTexture(r.TEXTURE_CUBE_MAP,this.id),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,1),r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MAG_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),r.texImage2D(r.TEXTURE_CUBE_MAP_NEGATIVE_X,0,r.RGB,r.RGB,r.UNSIGNED_BYTE,i.xneg),r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X,0,r.RGB,r.RGB,r.UNSIGNED_BYTE,i.xpos),r.texImage2D(r.TEXTURE_CUBE_MAP_NEGATIVE_Y,0,r.RGB,r.RGB,r.UNSIGNED_BYTE,i.yneg),r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_Y,0,r.RGB,r.RGB,r.UNSIGNED_BYTE,i.ypos),r.texImage2D(r.TEXTURE_CUBE_MAP_NEGATIVE_Z,0,r.RGB,r.RGB,r.UNSIGNED_BYTE,i.zneg),r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_Z,0,r.RGB,r.RGB,r.UNSIGNED_BYTE,i.zpos)}De.prototype.bind=function(i){this.gl.activeTexture(this.gl.TEXTURE0+(i||0)),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,this.id)};De.prototype.unbind=function(i){this.gl.activeTexture(this.gl.TEXTURE0+(i||0)),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,null)};const he=new et,vt=function(i,r){const n=he.addFolder("visualizations");n.close(),n.add(a,"useConfigFile").name("use configuration file");const d={showTimeline:!0};n.add(d,"showTimeline").name("show event timeline").onChange(y=>{const q=document.getElementById("event-editor");q&&(q.style.display=y?"block":"none")}),n.add(a.params.visualizations,"showFlags").name("show flags").listen(),n.add(a.params.visualizations,"showWR").name("show world record").listen(),n.add(a.params.visualizations,"showSwimmersLines",a.params.visualizations.swimmersLinesList).name("show neighbours lines").listen(),n.add(a.params.visualizations,"swimmersLinesMode",a.params.visualizations.swimmersLinesModeList).name("show neighbours lines").listen(),n.add(a.params.visualizations,"customWaterPerturbation",a.params.visualizations.customParametersList).name("custom water perturbation").listen(),n.add(a.params.visualizations,"waterColorParameter",a.params.visualizations.customParametersList).name("water color parameter").listen(),n.add(a.params.visualizations,"medalsModeBeforeFinish",["none","stars","bright","lanes"]).name("show potential medals").listen(),n.add(a.params.visualizations,"medalsModeAfterFinish",["none","stars","bright","lanes"]).name("show potential medals after finish").listen(),n.add(a.params.visualizations,"showSpeed").name("show speed").listen(),n.addFolder("ranks"),n.add(a.params.visualizations,"showDivingDistance").name("show diving distance").listen(),n.add(a.params.visualizations.shadow,"enabled").name("show shadow"),n.add(a.params.visualizations,"areaConservationEnabled","areaConservationEnabled").name("area conservation").listen(),n.add(a.params.visualizations,"heightFieldRendering").name("height field rendering").listen();const u=he.addFolder("video");u.close(),u.add(a.params.video,"thresholdBlending").name("threshold blending"),u.add(a.params.video,"blendingThreshold",.1,.5).name("blending threshold"),u.add(a.params.video,"show").name("show").listen();const g=n.addFolder("Sparks");g.close(),g.add(a.params.visualizations.sparks,"enabled").name("sparks enabled"),g.add(a.params.visualizations.sparks,"glow",1,30).name("sparks glow factor"),g.add(a.params.visualizations.sparks,"lengthFactor",.1,10).name("sparks length factor"),g.add(a.params.visualizations.sparks,"glowOffset",.1,3).name("sparks glow offset"),g.add(a.params.visualizations.sparks,"stroke",.001,.05).name("sparks stroke"),g.add(a.params.visualizations.sparks,"num",10,We).step(1).name("sparks number"),g.add(a.params.visualizations.sparks,"sizeFactor",10,100).name("size factor");const E=n.addFolder("Swimmers shadows");E.close(),E.add(a.params.visualizations.shadow,"shadowRadius",0,2).name("shadow radius"),E.add(a.params.visualizations.shadow,"shadowPower",.1,2).name("shadow power"),E.add(a.params.visualizations.shadow,"showCircle").name("circle"),E.add(a.params.visualizations.shadow,"circleRadius",.5,2).name("circle radius"),E.add(a.params.visualizations.shadow,"circleStroke",.1,.5).name("circle stroke");const A=he.addFolder("Simulation");A.close(),A.add(a.params.simulation,"optimized").name("optimized").listen(),A.add(a.params.simulation.poolSize,"x",1,25).name("pool width").onChange(function(y){r()}).listen(),A.add(a.params.simulation.poolSize,"z",1,50).name("pool height").onChange(function(y){r()}).listen(),A.add(a.params.simulation.poolSize,"y",1,3).name("pool depth").onChange(function(y){r()}).listen(),A.add(a.params.simulation,"waterDamping",.005,.15).name("water damping").listen();const L=he.addFolder("swimmers");L.close(),L.add(a.params.swimmers,"showSpheres").name("show spheres").listen(),L.add(a.params.swimmers,"useTracking").name("use tracking data").listen();const k=he.addFolder("camera");k.close(),k.add(a.params,"fov",28,45).name("fov").listen().onChange(function(y){a.params.visualizations.sparks.fov=y*2*Math.PI/360,i.matrixMode(i.PROJECTION),i.loadIdentity(),i.perspective(a.params.fov,i.canvas.width/i.canvas.height,.01,100),i.matrixMode(i.MODELVIEW),console.log("perspective : "+a.params.fov)});const D=he.addFolder("quiver");D.close(),D.add(a.params.quiver,"amplitude",.01,1).name("amplitude"),D.add(a.params.quiver,"omega",.5,5).name("omega"),D.add(a.params.quiver,"amplitudeFactor",.5,.9).name("amplitude factor"),D.add(a.params.quiver,"frequencyFactor",1.1,2).name("frequency factor"),D.add(a.params.quiver,"waveLength",1,30).name("wave length"),a._gui=he},Re=150,ne=100;function xt(i){const r=document.createElement("div");if(document.body.appendChild(r),r.id="event-editor",r.style.position="fixed",r.display="block",r.style.bottom="60px",r.style.left="10px",r.style.right="10px",r.style.height="120px",r.style.zIndex="4",r.style.background="#222",r.style.color="#fff",r.style.overflow="auto",r.style.padding="4px",r.style.fontSize="12px",r.style.position=r.style.position||"relative",!r){console.warn(`event editor container "${i}" not found`);return}let n,d=!1;const u=[{name:"showFlags",type:"boolean"},{name:"showWR",type:"boolean"},{name:"showSpeed",type:"boolean"},{name:"showDivingDistance",type:"boolean"},{name:"showFinishTimes",type:"boolean"},{name:"showSwimmersLines",type:"select",options:a.params.visualizations.swimmersLinesList},{name:"swimmersLinesMode",type:"select",options:a.params.visualizations.swimmersLinesModeList},{name:"customWaterPerturbation",type:"select",options:a.params.visualizations.customParametersList},{name:"waterColorParameter",type:"select",options:a.params.visualizations.customParametersList},{name:"medalsModeBeforeFinish",type:"select",options:["none","stars","bright","lanes"]},{name:"medalsModeAfterFinish",type:"select",options:["none","stars","bright","lanes"]},{name:"rankSwimmerToggle",type:"number",min:1,max:10}];function g(T){const R=document.createElement("div");R.style.flex="1",R.style.padding="4px",R.style.background="#222",R.style.border="1px solid #555",R.style.borderRadius="4px",R.style.fontFamily="monospace",R.style.fontSize="12px",R.style.whiteSpace="pre-wrap",R.style.overflow="auto",R.style.maxHeight="100px";function F(){const N=T.params;if(Object.keys(N).length===0){R.textContent="(no params)";return}const U=Object.entries(N).map(([V,I])=>`${V}: ${JSON.stringify(I)}`);R.textContent=U.join(`
`)}return F(),{element:R,update:F}}function E(T,R){const F=document.createElement("div");F.style.display="flex",F.style.flexWrap="wrap",F.style.margin="4px 0",F.style.background="#333",F.style.padding="4px";function N(){R&&(R(),G())}u.forEach(M=>{const K=document.createElement("div");K.style.marginRight="8px",K.style.marginBottom="4px";const Q=document.createElement("label");Q.style.whiteSpace="nowrap",Q.textContent=M.name+":",K.appendChild(Q);let C;if(M.type==="boolean"){C=document.createElement("select"),[{value:"",label:"—"},{value:"true",label:"ON"},{value:"false",label:"OFF"}].forEach(j=>{const w=document.createElement("option");w.value=j.value,w.textContent=j.label,C.appendChild(w)});const Y=T.params[M.name];Y===void 0?C.value="":Y===!0?C.value="true":Y===!1&&(C.value="false"),C.addEventListener("change",()=>{C.value===""?delete T.params[M.name]:C.value==="true"?T.params[M.name]=!0:C.value==="false"&&(T.params[M.name]=!1),N()})}else if(M.type==="select"){C=document.createElement("select");const X=document.createElement("option");X.value="",X.textContent="—",C.appendChild(X),M.options.forEach(Y=>{const j=document.createElement("option");j.value=Y,j.textContent=Y,C.appendChild(j)}),C.value=T.params[M.name]||"",C.addEventListener("change",()=>{C.value===""?delete T.params[M.name]:T.params[M.name]=C.value,N()})}else M.type==="number"&&(C=document.createElement("input"),C.type="number",M.min!==void 0&&(C.min=M.min),M.max!==void 0&&(C.max=M.max),C.placeholder="—",C.style.width="50px",C.value=T.params[M.name]!==void 0?T.params[M.name]:"",C.addEventListener("change",()=>{if(C.value==="")delete T.params[M.name];else{const X=parseFloat(C.value);isNaN(X)||(T.params[M.name]=X)}N()}));C&&K.appendChild(C),F.appendChild(K)});const U=document.createElement("div");U.style.marginRight="8px",U.style.marginBottom="4px";const V=document.createElement("label");V.style.whiteSpace="nowrap",V.textContent="transition :",U.appendChild(V);const I=document.createElement("input");return I.type="number",I.min=0,I.placeholder="—",I.style.width="50px",I.value=T.transition!==void 0?T.transition.duration:"",I.addEventListener("change",()=>{if(I.value===""){delete T.transition;return}const M=parseFloat(I.value);isNaN(M)||(T.transition={type:"dissolve",duration:M},N())}),U.appendChild(I),F.appendChild(U),F}function A(){const T=document.createElement("div");T.style.marginTop="8px",T.style.padding="8px",T.style.background="#555",T.style.border="1px solid #777";const R=document.createElement("div");R.textContent="Add New Event",R.style.fontWeight="bold",R.style.marginBottom="4px",T.appendChild(R);const F=document.createElement("input");F.type="number",F.placeholder="Distance",F.style.width="auto",F.style.marginRight="8px",T.appendChild(F);const N={params:{}},U=E(N,null);U.style.margin="4px 0",T.appendChild(U);const V=document.createElement("button");V.textContent="OK",V.addEventListener("click",()=>{const M=parseFloat(F.value);if(isNaN(M)){alert("Please enter a valid distance");return}const K={distance:M,...N};a.events.push(K),G(),n.remove(),n=null}),T.appendChild(V);const I=document.createElement("button");return I.textContent="cancel",I.addEventListener("click",()=>{n.remove(),n=null}),T.appendChild(I),T}function L(T,R,{title:F="",id:N=null,color:U="#e74c3c"}){const V=T/R*100,I=document.createElement("div");return I.style.position="absolute",I.style.left=V+"%",I.style.transform="translateX(-50%)",I.style.width="4px",I.style.height="100%",I.style.background=U,I.style.cursor="pointer",I.title=F,N&&(I.id=N),I.addEventListener("click",()=>{q(idx)}),I}function k(){let T=document.getElementById("distance-marker");const R=a.swimmers[0].getDistanceTraveled();if(!T){if(d)return;const F=document.getElementById("timeline-track");T=L(R,ne,{color:"blue",id:"distance-marker"}),F.appendChild(T)}T.style.left=R+"%"}function D(T){d=T,y()}function y(){r.innerHTML="";const T=document.createElement("button");if(T.textContent=d?"□":"—",T.style.position="absolute",T.style.top="0",T.style.right="0",T.style.width="20px",T.style.height="20px",T.style.zIndex="100001",T.addEventListener("click",()=>{d=!d,y()}),r.appendChild(T),d){r.style.height="20px";return}r.style.height="300px";const R=document.createElement("div");if(R.style.position="relative",R.style.top="0px",R.style.left="50%",R.style.transform="translateX(-50%)",R.style.width="80px",R.style.height="15px",R.style.background="grey",R.style.border="1px solid black",R.style.cursor="ns-resize",R.style.zIndex="100000",R.style.lineHeight="16px",R.style.textAlign="center",R.textContent="drag",r.appendChild(R),R.addEventListener("mousedown",o=>{o.preventDefault();const l=o.clientY,c=r.offsetHeight;function h(x){const p=c-(x.clientY-l);p>20&&(r.style.height=p+"px")}function m(){document.removeEventListener("mousemove",h),document.removeEventListener("mouseup",m)}document.addEventListener("mousemove",h),document.addEventListener("mouseup",m)}),!a.events){r.textContent="no events defined";return}const F=document.createElement("div");r.appendChild(F),F.style.marginRight="8px",F.style.marginBottom="4px";const N=document.createElement("label");N.style.whiteSpace="nowrap",N.textContent="select scene",N.style.margin="30px",F.appendChild(N);const U=document.createElement("select");U.style.width="auto",a.scenesList.forEach(o=>{const l=document.createElement("option");l.textContent=o.title,l.value=o.title,U.appendChild(l)}),U.addEventListener("change",()=>{a.setScene(U.value)}),F.appendChild(U);const V=a.events.slice().sort((o,l)=>{const c=o.distance!==void 0?o.distance:o.time!==void 0?o.time:0,h=l.distance!==void 0?l.distance:l.time!==void 0?l.time:0;return c-h}),I=new Set;V.forEach(o=>{o.params&&Object.keys(o.params).forEach(l=>I.add(l))});let M=u.map(o=>o.name).filter(o=>I.has(o));const K=["#4caf50","#2196f3","#ff9800","#9c27b0","#f44336","#009688","#e91e63","#3f51b5"],Q={};M.forEach((o,l)=>{Q[o]=K[l%K.length]});const C={},X={};M.forEach(o=>{X[o]=!1,C[o]=0});const Y=[];if(V.forEach(o=>{const l=o.distance!==void 0?o.distance:o.time!==void 0?o.time:0;o.params&&Object.keys(o.params).forEach(c=>{if(M.includes(c)){const h=!!o.params[c];h!==X[c]&&(X[c]&&Y.push({name:c,start:C[c],end:l}),X[c]=h,C[c]=l)}})}),M.forEach(o=>{X[o]&&Y.push({name:o,start:C[o],end:ne})}),M.length>0){const o=document.createElement("div");o.style.position="relative";const l=20;o.style.height=M.length*l+"px",o.style.background="#222",o.style.marginBottom="4px",o.style.marginTop="10px",M.forEach((h,m)=>{const x=document.createElement("div");x.textContent=h,x.style.position="absolute",x.style.left="0",x.style.top=m*l+2+"px",x.style.width=Re+"px",x.style.color="#aaa",x.style.fontSize="10px",x.style.pointerEvents="none",o.appendChild(x)});const c=document.createElement("div");c.style.position="absolute",c.style.left=Re+"px",c.style.top="0",c.style.right="0",c.style.bottom="0",c.style.overflow="hidden",o.appendChild(c),Y.forEach(h=>{const m=document.createElement("div"),x=h.start/ne*100,p=(h.end-h.start)/ne*100;m.style.position="absolute",m.style.left=x+"%",m.style.top=M.indexOf(h.name)*l+2+"px",m.style.height=l-4+"px",m.style.width=p+"%",m.style.background=Q[h.name]||"#4caf50",m.title=`${h.name}: ${h.start.toFixed(2)} → ${h.end.toFixed(2)}`;const f=document.createElement("span");if(f.textContent=`${h.name}: ${h.start.toFixed(2)} → ${h.end.toFixed(2)}`,f.style.position="absolute",f.style.top="0",f.style.left="2px",f.style.fontSize="10px",f.style.color="white",f.style.pointerEvents="none",f.style.whiteSpace="nowrap",f.style.overflow="hidden",f.style.textOverflow="ellipsis",m.appendChild(f),h.end<ne){const _=document.createElement("div");_.style.position="absolute",_.style.right="0",_.style.top="0",_.style.width="5px",_.style.height="100%",_.style.background="rgba(255,255,255,0.5)",_.style.cursor="ew-resize",m.appendChild(_),_.addEventListener("mousedown",S=>{S.preventDefault(),S.stopPropagation();const b=S.clientX,z=m.offsetWidth;function W(ee){const re=ee.clientX-b,ae=Math.max(1,z+re),ue=ae/c.offsetWidth*100;m.style.width=ue+"%";const Ze=h.start+ae/c.offsetWidth*ne;f.textContent=`${h.name}: ${h.start.toFixed(2)} → ${Ze.toFixed(2)}`}function O(){document.removeEventListener("mousemove",W),document.removeEventListener("mouseup",O);const ee=m.offsetWidth,re=h.start+ee/c.offsetWidth*ne,ae=V.find(ue=>(ue.distance!==void 0?ue.distance:ue.time!==void 0?ue.time:0)===h.end);ae&&(ae.distance!==void 0?ae.distance=re:ae.time!==void 0&&(ae.time=re)),G()}document.addEventListener("mousemove",W),document.addEventListener("mouseup",O)})}c.appendChild(m)}),r.appendChild(o)}const j=document.createElement("div");j.style.position="relative",j.style.height="40px",j.style.background="#222",j.style.marginBottom="4px",j.style.paddingLeft="80px";const w=document.createElement("div");w.id="timeline-track",w.style.position="absolute",w.style.background="#444",w.style.left=Re+"px",w.style.top="0",w.style.right="0",w.style.bottom="0",j.appendChild(w),V.forEach((o,l)=>{const c=o.distance!==void 0?o.distance:o.time!==void 0?o.time:0,h=`event ${l}: ${JSON.stringify(o.params)}`,m=L(c,ne,{title:h});w.appendChild(m)}),r.appendChild(j),V.forEach((o,l)=>{const c=document.createElement("div");c.style.display="flex",c.style.flexDirection="column",c.style.marginBottom="4px";const h=document.createElement("div");h.style.display="flex",h.style.alignItems="center";const m=document.createElement("input");m.type="number",m.style.width="60px",m.value=o.distance!==void 0?o.distance:o.time!==void 0?o.time:0,m.addEventListener("change",()=>{const S=parseFloat(m.value);isNaN(S)||(o.distance!==void 0?o.distance=S:o.time=S,G())}),h.appendChild(m);const x=g(o);h.appendChild(x.element);const p=document.createElement("button");p.textContent="⚙",p.style.marginLeft="4px",h.appendChild(p);const f=document.createElement("button");f.textContent="✖",f.style.marginLeft="4px",f.addEventListener("click",()=>{const S=a.events.indexOf(V[l]);S!==-1&&(a.events.splice(S,1),y())}),h.appendChild(f),c.appendChild(h);let _;p.addEventListener("click",()=>{_?(_.remove(),_=null):(_=E(o,x.update),c.appendChild(_))}),r.appendChild(c)});const t=document.createElement("button");t.textContent="+ add event",t.addEventListener("click",()=>{n?(n.remove(),n=null):(n=A(),r.appendChild(n),r.scrollTop=r.scrollHeight)}),r.appendChild(t);const s=document.createElement("button");s.textContent="export JSON",s.style.marginLeft="8px",s.addEventListener("click",()=>{const o=JSON.stringify(a.events,null,2),l=new Blob([o],{type:"application/json"}),c=URL.createObjectURL(l),h=document.createElement("a");h.href=c,h.download="vis-config.json",h.click(),URL.revokeObjectURL(c)}),r.appendChild(s);const e=document.createElement("input");e.type="file",e.accept=".json",e.style.marginLeft="8px",e.addEventListener("change",o=>{const l=o.target.files[0];if(l){const c=new FileReader;c.onload=h=>{try{const m=JSON.parse(h.target.result);a.events=m,G()}catch(m){alert("Invalid JSON: "+m.message)}},c.readAsText(l)}}),r.appendChild(e)}function q(T){const F=r.querySelectorAll("div")[1+T];F&&F.scrollIntoView({behavior:"smooth",block:"center"})}function G(){a.events.sort((T,R)=>{const F=T.distance!==void 0?T.distance:T.time!==void 0?T.time:0,N=R.distance!==void 0?R.distance:R.time!==void 0?R.time:0;return F-N}),y()}y(),a._renderTimeline=y,a._updateDistanceMarker=k,a._setPannelMinimized=D}function wt(i){return i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n/g,"<br>")}function yt(i){var r=wt(i);r=="WebGL not supported"&&(r='Your browser does not support WebGL.<br>Please see    <a href="http://www.khronos.org/webgl/wiki/Getting_a_WebGL_Implementation">    Getting a WebGL Implementation</a>.');var n=document.getElementById("loading");n.innerHTML=r,n.style.zIndex=1}window.onerror=yt;var Oe,$;const _t=10,P=a.gl;var we,Me;B.initAttributes();function Ke(){document.getElementById("warning").hidden=!(a.resolution.x*a.resolution.y>3e5&&a.water&&a.params.visualizations.areaConservationEnabled)}let Ae=0;function Et(i){Ae+=i,Ae>=1&&(document.getElementById("fps").innerText=`${(1/i).toFixed(1)} FPS`,Ae=0)}function me(){console.log("reset"),document.getElementById("resolution").innerText=`Resolution: ${a.resolution.x} x ${a.resolution.y}`,Ke(),we=new v.Vector(0,-a.params.simulation.poolSize.z/2+1),a.water.reset(a.resolution),$.flagCenter=we,$.flagSize=Me,$.reset();const i=a.params.simulation.poolSize.x/_t;let r=a.params.simulation.poolSize.x/2-i/2;for(let n of a.swimmers)n.body.center.x=r,n.startingPoint.x=r,r-=i}function Tt(i){const r=parseFloat(i.target.value);isNaN(r)||(a.setRaceTime(r),a.swimmers.forEach(n=>n.setCurrentDataIndex()))}window.onload=function(){var i=window.devicePixelRatio||1,r=document.getElementById("help");function n(){var e=innerWidth,o=innerHeight;P.canvas.width=e*i,P.canvas.height=o*i,P.canvas.style.width=e+"px",P.canvas.style.height=o+"px",P.viewport(0,0,P.canvas.width,P.canvas.height),P.matrixMode(P.PROJECTION),P.loadIdentity(),P.perspective(a.params.fov,P.canvas.width/P.canvas.height,.01,100),P.matrixMode(P.MODELVIEW),s()}document.body.appendChild(P.canvas),P.canvas.oncontextmenu=function(e){e.preventDefault()},P.clearColor(0,0,0,1),we=new v.Vector(0,-a.params.simulation.poolSize.z/2+1),Me=.7;const d=document.getElementById("time-slider");d&&d.addEventListener("input",Tt);const u=document.getElementById("drop-zone");let g=0;document.addEventListener("dragenter",e=>{g++,u.style.display="flex"}),document.addEventListener("dragover",e=>{e.preventDefault(),e.dataTransfer.dropEffect="copy"}),document.addEventListener("dragleave",e=>{g--,g===0&&(u.style.display="none")}),vt(P,me),a._reset=me,setTimeout(()=>{xt("event-editor")},50),$=new le(P,a.water,we,Me),Oe=new De({xneg:document.getElementById("xneg"),xpos:document.getElementById("xpos"),yneg:document.getElementById("ypos"),ypos:document.getElementById("ypos"),zneg:document.getElementById("zneg"),zpos:document.getElementById("zpos")},P);const E=new B(new v.Vector(0,0,0));if(a.swimmers.push(E),a.water=new se(a.gl),!a.water.textureA.canDrawTo()||!a.water.textureB.canDrawTo())throw new Error("Rendering to floating-point textures is required but not supported");me();for(var A=0;A<20;A++)a.water.addDrop(Math.random()*2-1,Math.random()*2-1,.06,A&1?.01:-.01);document.getElementById("loading").innerHTML="",n();var L=window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(e){setTimeout(e,0)},k=new Date().getTime();function D(){var e=new Date().getTime();a.paused||(t((e-k)/1e3),s()),k=e,L(D)}L(D),window.onresize=n;var y,q,G,T=-1,R=0,F=1,N=2;const U=3;var V,I;function M(e,o,l){if(V=e,I=o,!l||l.button===0){var c=new v.Raytracer,h=c.getRayForPixel(e*i,o*i),m=c.eye.add(h.multiply(-c.eye.y/h.y));for(let p of a.swimmers){var x=v.Raytracer.hitTestSphere(c.eye,h,p.body.center,p.body.radius);if(x){T=F,G=p,p.body.cinematic=!0,y=x.hit,q=c.getRayForPixel(P.canvas.width/2,P.canvas.height/2).negative();return}}Math.abs(m.x)<a.params.simulation.poolSize.x/2&&Math.abs(m.z)<a.params.simulation.poolSize.z/2&&(T=R,K(e,o))}else l.button===2?T=N:l.button===1&&(T=U)}function K(e,o,l){switch(T){case R:{var c=new v.Raytracer,h=c.getRayForPixel(e*i,o*i),m=c.eye.add(h.multiply(-c.eye.y/h.y));a.water.addDrop(m.x/a.params.simulation.poolSize.x*2,m.z/a.params.simulation.poolSize.z*2,.06,.03),a.paused&&(a.water.updateNormals(),$.updateCaustics(a.water));break}case F:{var c=new v.Raytracer,h=c.getRayForPixel(e*i,o*i),x=-q.dot(c.eye.subtract(y))/q.dot(h),p=c.eye.add(h.multiply(x));const S=G.body.center.add(p.subtract(y)),b=G.body.radius,z=Math.max(b-a.params.simulation.poolSize.x/2,Math.min(a.params.simulation.poolSize.x/2-b,S.x)),W=Math.max(b-a.params.simulation.poolSize.y,Math.min(10,S.y)),O=Math.max(b-a.params.simulation.poolSize.z/2,Math.min(a.params.simulation.poolSize.z/2-b,S.z));G.body.move(new v.Vector(z,W,O)),y=p,a.paused&&$.updateCaustics(a.water);break}case N:{if(l&&l.shiftKey){a.angleZ-=e-V,a.angleZ=Math.max(-89.999,Math.min(89.999,a.angleZ));break}a.angleY-=e-V,a.angleX-=o-I,a.angleX=Math.max(-89.999,Math.min(89.999,a.angleX));break}case U:{const f=.001*a.zoomDistance;a.translateX+=f*(e-V),a.translateY-=f*(o-I)}}V=e,I=o,a.paused&&s()}function Q(){T=-1,G&&(G.body.cinematic=!B.useGravity)}function C(e){return e===r||e.parentNode&&C(e.parentNode)}function X(e){return e&&(e.id==="event-editor"||e.parentNode&&X(e.parentNode))}function Y(e){a.zoomDistance*=1-e*2e-4,a.zoomDistance=Math.max(2,Math.min(1e3,a.zoomDistance)),a.paused&&s()}addEventListener("wheel",function(e){if(!X(e.target)){var o=e.deltaY;Y(-o)}}),document.onmousedown=function(e){P.canvas.focus(),C(e.target)||M(e.pageX,e.pageY,e)},document.onmousemove=function(e){K(e.pageX,e.pageY,e)},document.onmouseup=function(){Q()},document.ontouchstart=function(e){e.touches.length===1&&!C(e.target)&&(e.preventDefault(),M(e.touches[0].pageX,e.touches[0].pageY,!1))},document.ontouchmove=function(e){e.touches.length===1&&K(e.touches[0].pageX,e.touches[0].pageY)},document.ontouchend=function(e){e.touches.length==0&&Q()};function j(){a.paused?a.play():a.pause()}const w=async function(e){if(e.which==32)j();else if(e.which==71)a.useGravity(!B.useGravity);else if(e.which==76&&a.paused)s();else if(e.which==74)a.swimmers.forEach(o=>o.jump(2));else if(e.which==67)a.params.visualizations.areaConservationEnabled=!a.params.visualizations.areaConservationEnabled,Ke(),console.log("Area conservation "+(a.params.visualizations.areaConservationEnabled?"enabled.":"disabled."));else if(e.which==80)a.water.showProjectionGrid=!a.water.showProjectionGrid,console.log("Projection grid "+(a.water.showProjectionGrid?"enabled.":"disabled."));else if(e.which==65)a.water.showAreaConservedGrid=!a.water.showAreaConservedGrid,console.log("Area conserved grid "+(a.water.showAreaConservedGrid?"enabled.":"disabled."));else if(e.which==83){if(B.swimming=!B.swimming,B.swimming)for(let o of a.swimmers)o.swim(!0);else stopRace();console.log("Swimming "+(B.swimming?"enabled.":"disabled."))}else e.which==86?a.params.video.show=!a.params.video.show:e.which==72?(document.getElementById("commands").hidden=!document.getElementById("commands").hidden,document.getElementById("h").hidden=!document.getElementById("h").hidden):e.which==68?a.playingDemo?a.stopDemo():await a.launchDemo():e.which==82?(a.setScene("100m freestyle").then(()=>a.startRace()),a._setPannelMinimized(!0)):e.which==40?(a.resolution.x>129&&(a.resolution.x=Math.round(a.resolution.x/2)),me(),console.log("decreasing x resolution")):e.which==38?(a.resolution.x<16384&&(a.resolution.x=Math.round(a.resolution.x*2)),me(),console.log("increasing x resolution")):e.which==37?(a.resolution.y>129&&(a.resolution.y=Math.round(a.resolution.y/2)),me(),console.log("decreasing y resolution")):e.which==39&&(a.resolution.y<16384&&(a.resolution.y=Math.round(a.resolution.y*2)),me(),console.log("increasing y resolution"))};P.canvas.addEventListener("keydown",w);function t(e){if(!(e>1)){if(T==F)for(let o of a.swimmers)o.body.velocity=new v.Vector(0,0,0);P.clearColor(0,0,0,1),P.clear(P.COLOR_BUFFER_BIT|P.DEPTH_BUFFER_BIT);for(let o of a.swimmers)o.update(e);a.water.updateSpheres(e);for(let o=0;o<a.params.numSteps;o++)a.water.stepSimulation();$.updateCaustics(a.water),a.updateTime(e),a.updateParams(),d.value=a.getRaceTime(),Et(e),a.updateDemo(e)}}function s(){v.keys.L&&($.lightDir=v.Vector.fromAngles((90-a.angleY)*Math.PI/180,-a.angleX*Math.PI/180),a.paused&&$.updateCaustics(a.water)),a.isOneVisualizationEnabled()&&B.updateAttributesTexture(),a.water.addOrRemoveVisualizationWaves(!0),a.water.updateNormals(),P.clearColor(.1,.2,.5,1),P.clear(P.COLOR_BUFFER_BIT|P.DEPTH_BUFFER_BIT),P.loadIdentity(),P.translate(a.translateX,a.translateY,-a.zoomDistance),P.rotate(-a.angleZ,0,0,1),P.rotate(-a.angleX,1,0,0),P.rotate(-a.angleY,0,1,0),P.translate(0,.5,0),P.enable(P.DEPTH_TEST),$.sphereCenter=a.swimmers[0].body.center,$.sphereRadius=a.swimmers[0].body.radius,$.renderCube(a.water),$.renderWater(a.water,Oe,a.params.visualizations.shadow),a.params.swimmers.showSpheres&&$.renderSpheres(a.water),a.renderVideo(),P.disable(P.DEPTH_TEST),a.water.addOrRemoveVisualizationWaves(!1)}};
//# sourceMappingURL=swimming-DZadTaLT.js.map
