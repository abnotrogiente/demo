var Ye=Object.defineProperty;var De=i=>{throw TypeError(i)};var qe=(i,n,l)=>n in i?Ye(i,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):i[n]=l;var q=(i,n,l)=>qe(i,typeof n!="symbol"?n+"":n,l),je=(i,n,l)=>n.has(i)||De("Cannot "+l);var Le=(i,n,l)=>n.has(i)?De("Cannot add the same private member more than once"):n instanceof WeakSet?n.add(i):n.set(i,l);var ee=(i,n,l)=>(je(i,n,"access private method"),l);import"./modulepreload-polyfill-B5Qt9EMX.js";import{g as Ke}from"./lil-gui.module.min-Vka56b52.js";var v=function(){var i,n={create:function(t){t=t||{};var r=document.createElement("canvas");r.width=800,r.height=600,"alpha"in t||(t.alpha=!1);try{i=r.getContext("webgl2",t)}catch{}try{i=i||r.getContext("experimental-webgl",t)}catch{}if(!i)throw new Error("WebGL not supported");return i.HALF_FLOAT_OES=36193,l(),h(),p(),k(),i},keys:{},Matrix:y,Indexer:W,Buffer:X,Mesh:N,HitTest:B,Raytracer:$,Shader:de,Texture:V,Vector:x};function l(){i.MODELVIEW=U|1,i.PROJECTION=U|2;var t=new y,r=new y;i.modelviewMatrix=new y,i.projectionMatrix=new y;var e=[],o=[],s,a;i.matrixMode=function(d){switch(d){case i.MODELVIEW:s="modelviewMatrix",a=e;break;case i.PROJECTION:s="projectionMatrix",a=o;break;default:throw new Error("invalid matrix mode "+d)}},i.loadIdentity=function(){y.identity(i[s])},i.loadMatrix=function(d){for(var f=d.m,g=i[s].m,m=0;m<16;m++)g[m]=f[m]},i.multMatrix=function(d){i.loadMatrix(y.multiply(i[s],d,r))},i.perspective=function(d,f,g,m){i.multMatrix(y.perspective(d,f,g,m,t))},i.frustum=function(d,f,g,m,u,_){i.multMatrix(y.frustum(d,f,g,m,u,_,t))},i.ortho=function(d,f,g,m,u,_){i.multMatrix(y.ortho(d,f,g,m,u,_,t))},i.scale=function(d,f,g){i.multMatrix(y.scale(d,f,g,t))},i.translate=function(d,f,g){i.multMatrix(y.translate(d,f,g,t))},i.rotate=function(d,f,g,m){i.multMatrix(y.rotate(d,f,g,m,t))},i.lookAt=function(d,f,g,m,u,_,E,w,R){i.multMatrix(y.lookAt(d,f,g,m,u,_,E,w,R,t))},i.pushMatrix=function(){a.push(Array.prototype.slice.call(i[s].m))},i.popMatrix=function(){var d=a.pop();i[s].m=M?new Float32Array(d):d},i.project=function(d,f,g,m,u,_){m=m||i.modelviewMatrix,u=u||i.projectionMatrix,_=_||i.getParameter(i.VIEWPORT);var E=u.transformPoint(m.transformPoint(new x(d,f,g)));return new x(_[0]+_[2]*(E.x*.5+.5),_[1]+_[3]*(E.y*.5+.5),E.z*.5+.5)},i.unProject=function(d,f,g,m,u,_){m=m||i.modelviewMatrix,u=u||i.projectionMatrix,_=_||i.getParameter(i.VIEWPORT);var E=new x((d-_[0])/_[2]*2-1,(f-_[1])/_[3]*2-1,g*2-1);return y.inverse(y.multiply(u,m,t),r).transformPoint(E)},i.matrixMode(i.MODELVIEW)}function h(){var t={mesh:new N({coords:!0,colors:!0,triangles:!1}),mode:-1,coord:[0,0,0,0],color:[1,1,1,1],shader:new de("      uniform float pointSize;      out vec4 color;      out vec4 coord;      void main() {        color = gl_Color;        coord = gl_TexCoord;        gl_Position = gl_ModelViewProjectionMatrix * gl_Vertex;        gl_PointSize = pointSize;      }    ","      uniform sampler2D tex;      uniform float pointSize;      uniform bool useTexture;      in vec4 color;      in vec4 coord;      out vec4 fragColor;      void main() {        fragColor = color;        if (useTexture) fragColor *= texture(tex, coord.xy);      }    ")};i.pointSize=function(r){t.shader.uniforms({pointSize:r})},i.begin=function(r){if(t.mode!=-1)throw new Error("mismatched gl.begin() and gl.end() calls");t.mode=r,t.mesh.colors=[],t.mesh.coords=[],t.mesh.vertices=[]},i.color=function(r,e,o,s){t.color=arguments.length==1?r.toArray().concat(1):[r,e,o,s||1]},i.texCoord=function(r,e){t.coord=arguments.length==1?r.toArray(2):[r,e]},i.vertex=function(r,e,o){t.mesh.colors.push(t.color),t.mesh.coords.push(t.coord),t.mesh.vertices.push(arguments.length==1?r.toArray():[r,e,o])},i.end=function(){if(t.mode==-1)throw new Error("mismatched gl.begin() and gl.end() calls");t.mesh.compile(),t.shader.uniforms({useTexture:!!i.getParameter(i.TEXTURE_BINDING_2D)}).draw(t.mesh,t.mode),t.mode=-1}}function p(){var t=i,r=0,e=0,o={},s=!1,a=Object.prototype.hasOwnProperty;function d(){for(var w in o)if(a.call(o,w)&&o[w])return!0;return!1}function f(w){var R={};for(var P in w)typeof w[P]=="function"?R[P]=function(Z){return function(){Z.apply(w,arguments)}}(w[P]):R[P]=w[P];R.original=w,R.x=R.pageX,R.y=R.pageY;for(var A=i.canvas;A;A=A.offsetParent)R.x-=A.offsetLeft,R.y-=A.offsetTop;return s?(R.deltaX=R.x-r,R.deltaY=R.y-e):(R.deltaX=0,R.deltaY=0,s=!0),r=R.x,e=R.y,R.dragging=d(),R.preventDefault=function(){R.original.preventDefault()},R.stopPropagation=function(){R.original.stopPropagation()},R}function g(w){i=t,d()||(S(document,"mousemove",m),S(document,"mouseup",u),F(i.canvas,"mousemove",m),F(i.canvas,"mouseup",u)),o[w.which]=!0,w=f(w),i.onmousedown&&i.onmousedown(w),w.preventDefault()}function m(w){i=t,w=f(w),i.onmousemove&&i.onmousemove(w),w.preventDefault()}function u(w){i=t,o[w.which]=!1,d()||(F(document,"mousemove",m),F(document,"mouseup",u),S(i.canvas,"mousemove",m),S(i.canvas,"mouseup",u)),w=f(w),i.onmouseup&&i.onmouseup(w),w.preventDefault()}function _(){s=!1}function E(){o={},s=!1}S(i.canvas,"mousedown",g),S(i.canvas,"mousemove",m),S(i.canvas,"mouseup",u),S(i.canvas,"mouseover",_),S(i.canvas,"mouseout",_),S(document,"contextmenu",E)}function T(t){var r={8:"BACKSPACE",9:"TAB",13:"ENTER",16:"SHIFT",27:"ESCAPE",32:"SPACE",37:"LEFT",38:"UP",39:"RIGHT",40:"DOWN"};return r[t]||(t>=65&&t<=90?String.fromCharCode(t):null)}function S(t,r,e){t.addEventListener(r,e)}function F(t,r,e){t.removeEventListener(r,e)}S(document,"keydown",function(t){if(!t.altKey&&!t.ctrlKey&&!t.metaKey){var r=T(t.keyCode);r&&(n.keys[r]=!0),n.keys[t.keyCode]=!0}}),S(document,"keyup",function(t){if(!t.altKey&&!t.ctrlKey&&!t.metaKey){var r=T(t.keyCode);r&&(n.keys[r]=!1),n.keys[t.keyCode]=!1}});function k(){(function(t){i.makeCurrent=function(){i=t}})(i),i.animate=function(){var t=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(s){setTimeout(s,16.666666666666668)},r=new Date().getTime(),e=i;function o(){i=e;var s=new Date().getTime();i.onupdate&&i.onupdate((s-r)/1e3),i.ondraw&&i.ondraw(),t(o),r=s}o()},i.fullscreen=function(t){t=t||{};var r=t.paddingTop||0,e=t.paddingLeft||0,o=t.paddingRight||0,s=t.paddingBottom||0;if(!document.body)throw new Error("document.body doesn't exist yet (call gl.fullscreen() from window.onload() or from inside the <body> tag)");document.body.appendChild(i.canvas),document.body.style.overflow="hidden",i.canvas.style.position="absolute",i.canvas.style.left=e+"px",i.canvas.style.top=r+"px";function a(){i.canvas.width=window.innerWidth-e-o,i.canvas.height=window.innerHeight-r-s,i.viewport(0,0,i.canvas.width,i.canvas.height),(t.camera||!("camera"in t))&&(i.matrixMode(i.PROJECTION),i.loadIdentity(),i.perspective(t.fov||45,i.canvas.width/i.canvas.height,t.near||.1,t.far||1e3),i.matrixMode(i.MODELVIEW)),i.ondraw&&i.ondraw()}S(window,"resize",a),a()}}var U=305397760,M=typeof Float32Array<"u";function y(){var t=Array.prototype.concat.apply([],arguments);t.length||(t=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),this.m=M?new Float32Array(t):t}y.prototype={inverse:function(){return y.inverse(this,new y)},transpose:function(){return y.transpose(this,new y)},multiply:function(t){return y.multiply(this,t,new y)},transformPoint:function(t){var r=this.m;return new x(r[0]*t.x+r[1]*t.y+r[2]*t.z+r[3],r[4]*t.x+r[5]*t.y+r[6]*t.z+r[7],r[8]*t.x+r[9]*t.y+r[10]*t.z+r[11]).divide(r[12]*t.x+r[13]*t.y+r[14]*t.z+r[15])},transformVector:function(t){var r=this.m;return new x(r[0]*t.x+r[1]*t.y+r[2]*t.z,r[4]*t.x+r[5]*t.y+r[6]*t.z,r[8]*t.x+r[9]*t.y+r[10]*t.z)}},y.inverse=function(t,r){r=r||new y;var e=t.m,o=r.m;o[0]=e[5]*e[10]*e[15]-e[5]*e[14]*e[11]-e[6]*e[9]*e[15]+e[6]*e[13]*e[11]+e[7]*e[9]*e[14]-e[7]*e[13]*e[10],o[1]=-e[1]*e[10]*e[15]+e[1]*e[14]*e[11]+e[2]*e[9]*e[15]-e[2]*e[13]*e[11]-e[3]*e[9]*e[14]+e[3]*e[13]*e[10],o[2]=e[1]*e[6]*e[15]-e[1]*e[14]*e[7]-e[2]*e[5]*e[15]+e[2]*e[13]*e[7]+e[3]*e[5]*e[14]-e[3]*e[13]*e[6],o[3]=-e[1]*e[6]*e[11]+e[1]*e[10]*e[7]+e[2]*e[5]*e[11]-e[2]*e[9]*e[7]-e[3]*e[5]*e[10]+e[3]*e[9]*e[6],o[4]=-e[4]*e[10]*e[15]+e[4]*e[14]*e[11]+e[6]*e[8]*e[15]-e[6]*e[12]*e[11]-e[7]*e[8]*e[14]+e[7]*e[12]*e[10],o[5]=e[0]*e[10]*e[15]-e[0]*e[14]*e[11]-e[2]*e[8]*e[15]+e[2]*e[12]*e[11]+e[3]*e[8]*e[14]-e[3]*e[12]*e[10],o[6]=-e[0]*e[6]*e[15]+e[0]*e[14]*e[7]+e[2]*e[4]*e[15]-e[2]*e[12]*e[7]-e[3]*e[4]*e[14]+e[3]*e[12]*e[6],o[7]=e[0]*e[6]*e[11]-e[0]*e[10]*e[7]-e[2]*e[4]*e[11]+e[2]*e[8]*e[7]+e[3]*e[4]*e[10]-e[3]*e[8]*e[6],o[8]=e[4]*e[9]*e[15]-e[4]*e[13]*e[11]-e[5]*e[8]*e[15]+e[5]*e[12]*e[11]+e[7]*e[8]*e[13]-e[7]*e[12]*e[9],o[9]=-e[0]*e[9]*e[15]+e[0]*e[13]*e[11]+e[1]*e[8]*e[15]-e[1]*e[12]*e[11]-e[3]*e[8]*e[13]+e[3]*e[12]*e[9],o[10]=e[0]*e[5]*e[15]-e[0]*e[13]*e[7]-e[1]*e[4]*e[15]+e[1]*e[12]*e[7]+e[3]*e[4]*e[13]-e[3]*e[12]*e[5],o[11]=-e[0]*e[5]*e[11]+e[0]*e[9]*e[7]+e[1]*e[4]*e[11]-e[1]*e[8]*e[7]-e[3]*e[4]*e[9]+e[3]*e[8]*e[5],o[12]=-e[4]*e[9]*e[14]+e[4]*e[13]*e[10]+e[5]*e[8]*e[14]-e[5]*e[12]*e[10]-e[6]*e[8]*e[13]+e[6]*e[12]*e[9],o[13]=e[0]*e[9]*e[14]-e[0]*e[13]*e[10]-e[1]*e[8]*e[14]+e[1]*e[12]*e[10]+e[2]*e[8]*e[13]-e[2]*e[12]*e[9],o[14]=-e[0]*e[5]*e[14]+e[0]*e[13]*e[6]+e[1]*e[4]*e[14]-e[1]*e[12]*e[6]-e[2]*e[4]*e[13]+e[2]*e[12]*e[5],o[15]=e[0]*e[5]*e[10]-e[0]*e[9]*e[6]-e[1]*e[4]*e[10]+e[1]*e[8]*e[6]+e[2]*e[4]*e[9]-e[2]*e[8]*e[5];for(var s=e[0]*o[0]+e[1]*o[4]+e[2]*o[8]+e[3]*o[12],a=0;a<16;a++)o[a]/=s;return r},y.transpose=function(t,r){r=r||new y;var e=t.m,o=r.m;return o[0]=e[0],o[1]=e[4],o[2]=e[8],o[3]=e[12],o[4]=e[1],o[5]=e[5],o[6]=e[9],o[7]=e[13],o[8]=e[2],o[9]=e[6],o[10]=e[10],o[11]=e[14],o[12]=e[3],o[13]=e[7],o[14]=e[11],o[15]=e[15],r},y.multiply=function(t,r,e){e=e||new y;var o=t.m,s=r.m,a=e.m;return a[0]=o[0]*s[0]+o[1]*s[4]+o[2]*s[8]+o[3]*s[12],a[1]=o[0]*s[1]+o[1]*s[5]+o[2]*s[9]+o[3]*s[13],a[2]=o[0]*s[2]+o[1]*s[6]+o[2]*s[10]+o[3]*s[14],a[3]=o[0]*s[3]+o[1]*s[7]+o[2]*s[11]+o[3]*s[15],a[4]=o[4]*s[0]+o[5]*s[4]+o[6]*s[8]+o[7]*s[12],a[5]=o[4]*s[1]+o[5]*s[5]+o[6]*s[9]+o[7]*s[13],a[6]=o[4]*s[2]+o[5]*s[6]+o[6]*s[10]+o[7]*s[14],a[7]=o[4]*s[3]+o[5]*s[7]+o[6]*s[11]+o[7]*s[15],a[8]=o[8]*s[0]+o[9]*s[4]+o[10]*s[8]+o[11]*s[12],a[9]=o[8]*s[1]+o[9]*s[5]+o[10]*s[9]+o[11]*s[13],a[10]=o[8]*s[2]+o[9]*s[6]+o[10]*s[10]+o[11]*s[14],a[11]=o[8]*s[3]+o[9]*s[7]+o[10]*s[11]+o[11]*s[15],a[12]=o[12]*s[0]+o[13]*s[4]+o[14]*s[8]+o[15]*s[12],a[13]=o[12]*s[1]+o[13]*s[5]+o[14]*s[9]+o[15]*s[13],a[14]=o[12]*s[2]+o[13]*s[6]+o[14]*s[10]+o[15]*s[14],a[15]=o[12]*s[3]+o[13]*s[7]+o[14]*s[11]+o[15]*s[15],e},y.identity=function(t){t=t||new y;var r=t.m;return r[0]=r[5]=r[10]=r[15]=1,r[1]=r[2]=r[3]=r[4]=r[6]=r[7]=r[8]=r[9]=r[11]=r[12]=r[13]=r[14]=0,t},y.perspective=function(t,r,e,o,s){var a=Math.tan(t*Math.PI/360)*e,d=a*r;return y.frustum(-d,d,-a,a,e,o,s)},y.frustum=function(t,r,e,o,s,a,d){d=d||new y;var f=d.m;return f[0]=2*s/(r-t),f[1]=0,f[2]=(r+t)/(r-t),f[3]=0,f[4]=0,f[5]=2*s/(o-e),f[6]=(o+e)/(o-e),f[7]=0,f[8]=0,f[9]=0,f[10]=-(a+s)/(a-s),f[11]=-2*a*s/(a-s),f[12]=0,f[13]=0,f[14]=-1,f[15]=0,d},y.ortho=function(t,r,e,o,s,a,d){d=d||new y;var f=d.m;return f[0]=2/(r-t),f[1]=0,f[2]=0,f[3]=-(r+t)/(r-t),f[4]=0,f[5]=2/(o-e),f[6]=0,f[7]=-(o+e)/(o-e),f[8]=0,f[9]=0,f[10]=-2/(a-s),f[11]=-(a+s)/(a-s),f[12]=0,f[13]=0,f[14]=0,f[15]=1,d},y.scale=function(t,r,e,o){o=o||new y;var s=o.m;return s[0]=t,s[1]=0,s[2]=0,s[3]=0,s[4]=0,s[5]=r,s[6]=0,s[7]=0,s[8]=0,s[9]=0,s[10]=e,s[11]=0,s[12]=0,s[13]=0,s[14]=0,s[15]=1,o},y.translate=function(t,r,e,o){o=o||new y;var s=o.m;return s[0]=1,s[1]=0,s[2]=0,s[3]=t,s[4]=0,s[5]=1,s[6]=0,s[7]=r,s[8]=0,s[9]=0,s[10]=1,s[11]=e,s[12]=0,s[13]=0,s[14]=0,s[15]=1,o},y.rotate=function(t,r,e,o,s){if(!t||!r&&!e&&!o)return y.identity(s);s=s||new y;var a=s.m,d=Math.sqrt(r*r+e*e+o*o);t*=Math.PI/180,r/=d,e/=d,o/=d;var f=Math.cos(t),g=Math.sin(t),m=1-f;return a[0]=r*r*m+f,a[1]=r*e*m-o*g,a[2]=r*o*m+e*g,a[3]=0,a[4]=e*r*m+o*g,a[5]=e*e*m+f,a[6]=e*o*m-r*g,a[7]=0,a[8]=o*r*m-e*g,a[9]=o*e*m+r*g,a[10]=o*o*m+f,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,s},y.lookAt=function(t,r,e,o,s,a,d,f,g,m){m=m||new y;var u=m.m,_=new x(t,r,e),E=new x(o,s,a),w=new x(d,f,g),R=_.subtract(E).unit(),P=w.cross(R).unit(),A=R.cross(P).unit();return u[0]=P.x,u[1]=P.y,u[2]=P.z,u[3]=-P.dot(_),u[4]=A.x,u[5]=A.y,u[6]=A.z,u[7]=-A.dot(_),u[8]=R.x,u[9]=R.y,u[10]=R.z,u[11]=-R.dot(_),u[12]=0,u[13]=0,u[14]=0,u[15]=1,m};function W(){this.unique=[],this.indices=[],this.map={}}W.prototype={add:function(t){var r=JSON.stringify(t);return r in this.map||(this.map[r]=this.unique.length,this.unique.push(t)),this.map[r]}};function X(t,r){this.buffer=null,this.target=t,this.type=r,this.data=[]}X.prototype={compile:function(t){for(var r=[],e=0,o=1e4;e<this.data.length;e+=o)r=Array.prototype.concat.apply(r,this.data.slice(e,e+o));var s=this.data.length?r.length/this.data.length:0;if(s!=Math.round(s))throw new Error("buffer elements not of consistent size, average size is "+s);this.buffer=this.buffer||i.createBuffer(),this.buffer.length=r.length,this.buffer.spacing=s,i.bindBuffer(this.target,this.buffer),i.bufferData(this.target,new this.type(r),t||i.STATIC_DRAW)}};function N(t){t=t||{},this.vertexBuffers={},this.indexBuffers={},this.addVertexBuffer("vertices","gl_Vertex"),t.coords&&this.addVertexBuffer("coords","gl_TexCoord"),t.normals&&this.addVertexBuffer("normals","gl_Normal"),t.colors&&this.addVertexBuffer("colors","gl_Color"),(!("triangles"in t)||t.triangles)&&this.addIndexBuffer("triangles"),t.lines&&this.addIndexBuffer("lines")}N.prototype={addVertexBuffer:function(t,r){var e=this.vertexBuffers[r]=new X(i.ARRAY_BUFFER,Float32Array);e.name=t,this[t]=[]},addIndexBuffer:function(t){this.indexBuffers[t]=new X(i.ELEMENT_ARRAY_BUFFER,Uint16Array),this[t]=[]},compile:function(){for(var t in this.vertexBuffers){var r=this.vertexBuffers[t];r.data=this[r.name],r.compile()}for(var e in this.indexBuffers){var r=this.indexBuffers[e];r.data=this[e],r.compile()}},transform:function(t){if(this.vertices=this.vertices.map(function(e){return t.transformPoint(x.fromArray(e)).toArray()}),this.normals){var r=t.inverse().transpose();this.normals=this.normals.map(function(e){return r.transformVector(x.fromArray(e)).unit().toArray()})}return this.compile(),this},computeNormals:function(){this.normals||this.addVertexBuffer("normals","gl_Normal");for(var t=0;t<this.vertices.length;t++)this.normals[t]=new x;for(var t=0;t<this.triangles.length;t++){var r=this.triangles[t],e=x.fromArray(this.vertices[r[0]]),o=x.fromArray(this.vertices[r[1]]),s=x.fromArray(this.vertices[r[2]]),a=o.subtract(e).cross(s.subtract(e)).unit();this.normals[r[0]]=this.normals[r[0]].add(a),this.normals[r[1]]=this.normals[r[1]].add(a),this.normals[r[2]]=this.normals[r[2]].add(a)}for(var t=0;t<this.vertices.length;t++)this.normals[t]=this.normals[t].unit().toArray();return this.compile(),this},computeWireframe:function(){for(var t=new W,r=0;r<this.triangles.length;r++)for(var e=this.triangles[r],o=0;o<e.length;o++){var s=e[o],a=e[(o+1)%e.length];t.add([Math.min(s,a),Math.max(s,a)])}return this.lines||this.addIndexBuffer("lines"),this.lines=t.unique,this.compile(),this},getAABB:function(){var t={min:new x(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)};t.max=t.min.negative();for(var r=0;r<this.vertices.length;r++){var e=x.fromArray(this.vertices[r]);t.min=x.min(t.min,e),t.max=x.max(t.max,e)}return t},getBoundingSphere:function(){for(var t=this.getAABB(),r={center:t.min.add(t.max).divide(2),radius:0},e=0;e<this.vertices.length;e++)r.radius=Math.max(r.radius,x.fromArray(this.vertices[e]).subtract(r.center).length());return r}},N.plane=function(t){t=t||{};for(var r=new N(t),e=t.detailX||t.detail||1,o=t.detailY||t.detail||1,s=t.width||2,a=t.height||2,d=0;d<=o;d++)for(var f=d/o,g=0;g<=e;g++){var m=g/e;if(r.vertices.push([(m-.5)*s,(f-.5)*a,0]),r.coords&&r.coords.push([m,f]),r.normals&&r.normals.push([0,0,1]),g<e&&d<o){var u=g+d*(e+1);r.triangles.push([u,u+1,u+e+1]),r.triangles.push([u+e+1,u+1,u+e+2])}}return r.compile(),r};var Q=[[0,4,2,6,-1,0,0],[1,3,5,7,1,0,0],[0,1,4,5,0,-1,0],[2,6,3,7,0,1,0],[0,2,1,3,0,0,-1],[4,5,6,7,0,0,1]];function O(t){return new x((t&1)*2-1,(t&2)-1,(t&4)/2-1)}N.cube=function(t){for(var r=new N(t),e=t&&t.width||2,o=t&&t.height||2,s=t&&t.depth||2,a=0;a<Q.length;a++){for(var d=Q[a],f=a*4,g=0;g<4;g++){var m=d[g];const u=O(m).toArray();u[0]*=e/2,u[1]*=o/2,u[2]*=s/2,r.vertices.push(u),r.coords&&r.coords.push([g&1,(g&2)/2]),r.normals&&r.normals.push(d.slice(4,7))}r.triangles.push([f,f+1,f+2]),r.triangles.push([f+2,f+1,f+3])}return r.compile(),r},N.sphere=function(t){function r(A,Z,se){return g?[A,se,Z]:[A,Z,se]}function e(A){return A+(A-A*A)/2}t=t||{};for(var o=new N(t),s=new W,a=t.detail||6,d=0;d<8;d++)for(var f=O(d),g=f.x*f.y*f.z>0,m=[],u=0;u<=a;u++){for(var _=0;u+_<=a;_++){var E=u/a,w=_/a,R=(a-u-_)/a,P={vertex:new x(e(E),e(w),e(R)).unit().multiply(f).toArray()};o.coords&&(P.coord=f.y>0?[1-E,R]:[R,1-E]),m.push(s.add(P))}if(u>0)for(var _=0;u+_<=a;_++){var E=(u-1)*(a+1)+(u-1-(u-1)*(u-1))/2+_,w=u*(a+1)+(u-u*u)/2+_;o.triangles.push(r(m[E],m[E+1],m[w])),u+_<a&&o.triangles.push(r(m[w],m[E+1],m[w+1]))}}return o.vertices=s.unique.map(function(A){return A.vertex}),o.coords&&(o.coords=s.unique.map(function(A){return A.coord})),o.normals&&(o.normals=o.vertices),o.compile(),o},N.load=function(t,r){r=r||{},"coords"in r||(r.coords=!!t.coords),"normals"in r||(r.normals=!!t.normals),"colors"in r||(r.colors=!!t.colors),"triangles"in r||(r.triangles=!!t.triangles),"lines"in r||(r.lines=!!t.lines);var e=new N(r);return e.vertices=t.vertices,e.coords&&(e.coords=t.coords),e.normals&&(e.normals=t.normals),e.colors&&(e.colors=t.colors),e.triangles&&(e.triangles=t.triangles),e.lines&&(e.lines=t.lines),e.compile(),e};function B(t,r,e){this.t=arguments.length?t:Number.MAX_VALUE,this.hit=r,this.normal=e}B.prototype={mergeWith:function(t){t.t>0&&t.t<this.t&&(this.t=t.t,this.hit=t.hit,this.normal=t.normal)}};function $(){var t=i.getParameter(i.VIEWPORT),r=i.modelviewMatrix.m,e=new x(r[0],r[4],r[8]),o=new x(r[1],r[5],r[9]),s=new x(r[2],r[6],r[10]),a=new x(r[3],r[7],r[11]);this.eye=new x(-a.dot(e),-a.dot(o),-a.dot(s));var d=t[0],f=d+t[2],g=t[1],m=g+t[3];this.ray00=i.unProject(d,g,1).subtract(this.eye),this.ray10=i.unProject(f,g,1).subtract(this.eye),this.ray01=i.unProject(d,m,1).subtract(this.eye),this.ray11=i.unProject(f,m,1).subtract(this.eye),this.viewport=t}$.prototype={getRayForPixel:function(t,r){t=(t-this.viewport[0])/this.viewport[2],r=1-(r-this.viewport[1])/this.viewport[3];var e=x.lerp(this.ray00,this.ray10,t),o=x.lerp(this.ray01,this.ray11,t);return x.lerp(e,o,r).unit()}},$.hitTestBox=function(t,r,e,o){var s=e.subtract(t).divide(r),a=o.subtract(t).divide(r),d=x.min(s,a),f=x.max(s,a),g=d.max(),m=f.min();if(g>0&&g<m){var u=1e-6,_=t.add(r.multiply(g));return e=e.add(u),o=o.subtract(u),new B(g,_,new x((_.x>o.x)-(_.x<e.x),(_.y>o.y)-(_.y<e.y),(_.z>o.z)-(_.z<e.z)))}return null},$.hitTestSphere=function(t,r,e,o){var s=t.subtract(e),a=r.dot(r),d=2*r.dot(s),f=s.dot(s)-o*o,g=d*d-4*a*f;if(g>0){var m=(-d-Math.sqrt(g))/(2*a),u=t.add(r.multiply(m));return new B(m,u,u.subtract(e).divide(o))}return null},$.hitTestTriangle=function(t,r,e,o,s){var a=o.subtract(e),d=s.subtract(e),f=a.cross(d).unit(),g=f.dot(e.subtract(t))/f.dot(r);if(g>0){var m=t.add(r.multiply(g)),u=m.subtract(e),_=d.dot(d),E=d.dot(a),w=d.dot(u),R=a.dot(a),P=a.dot(u),A=_*R-E*E,Z=(R*w-E*P)/A,se=(_*P-E*w)/A;if(Z>=0&&se>=0&&Z+se<=1)return new B(g,m,f)}return null};function re(t,r,e){let o;for(;(o=t.exec(r))!=null;)e(o)}var oe="LIGHTGL";function de(t,r){function e(_){var E=document.getElementById(_);return E?E.text:_}t=e(t),r=e(r);var o="    uniform mat3 gl_NormalMatrix;    uniform mat4 gl_ModelViewMatrix;    uniform mat4 gl_ProjectionMatrix;    uniform mat4 gl_ModelViewProjectionMatrix;    uniform mat4 gl_ModelViewMatrixInverse;    uniform mat4 gl_ProjectionMatrixInverse;    uniform mat4 gl_ModelViewProjectionMatrixInverse;  ",s=`#version 300 es
    `+o+"    in vec4 gl_Vertex;    in vec4 gl_TexCoord;    in vec3 gl_Normal;    in vec4 gl_Color;    vec4 ftransform() {      return gl_ModelViewProjectionMatrix * gl_Vertex;    }  ",a=`#version 300 es
    precision highp float;
  `+o,d=t+r,f={};re(/\b(gl_[^;]*)\b;/g,o,function(_){var E=_[1];if(d.indexOf(E)!=-1){var w=E.replace(/[a-z_]/g,"");f[w]=oe+E}}),d.indexOf("ftransform")!=-1&&(f.MVPM=oe+"gl_ModelViewProjectionMatrix"),this.usedMatrices=f;function g(_,E){var w={},R=/^((\s*\/\/.*\n|\s*#extension.*\n)+)[^]*$/.exec(E);return E=R?R[1]+_+E.substr(R[1].length):_+E,re(/\bgl_\w+\b/g,_,function(P){P in w||(E=E.replace(new RegExp("\\b"+P+"\\b","g"),oe+P),w[P]=!0)}),E}t=g(s,t),r=g(a,r);function m(_,E){var w=i.createShader(_);if(i.shaderSource(w,E),i.compileShader(w),!i.getShaderParameter(w,i.COMPILE_STATUS))throw new Error("compile error: "+i.getShaderInfoLog(w));return w}if(this.program=i.createProgram(),i.attachShader(this.program,m(i.VERTEX_SHADER,t)),i.attachShader(this.program,m(i.FRAGMENT_SHADER,r)),i.linkProgram(this.program),!i.getProgramParameter(this.program,i.LINK_STATUS))throw new Error("link error: "+i.getProgramInfoLog(this.program));this.attributes={},this.uniformLocations={};var u={};re(/uniform\s+sampler(1D|2D|3D|Cube)\s+(\w+)\s*;/g,t+r,function(_){u[_[2]]=1}),this.isSampler=u}function ne(t){var r=Object.prototype.toString.call(t);return r=="[object Array]"||r=="[object Float32Array]"}function fe(t){var r=Object.prototype.toString.call(t);return r=="[object Number]"||r=="[object Boolean]"}new y,new y,de.prototype={uniforms:function(t){i.useProgram(this.program);for(var r in t){var e=this.uniformLocations[r]||i.getUniformLocation(this.program,r);if(e){this.uniformLocations[r]=e;var o=t[r];if(o instanceof x?o=[o.x,o.y,o.z]:o instanceof y&&(o=o.m),ne(o))switch(o.length){case 1:i.uniform1fv(e,new Float32Array(o));break;case 2:i.uniform2fv(e,new Float32Array(o));break;case 3:i.uniform3fv(e,new Float32Array(o));break;case 4:i.uniform4fv(e,new Float32Array(o));break;case 9:i.uniformMatrix3fv(e,!1,new Float32Array([o[0],o[3],o[6],o[1],o[4],o[7],o[2],o[5],o[8]]));break;case 16:i.uniformMatrix4fv(e,!1,new Float32Array([o[0],o[4],o[8],o[12],o[1],o[5],o[9],o[13],o[2],o[6],o[10],o[14],o[3],o[7],o[11],o[15]]));break;default:throw new Error(`don't know how to load uniform "`+r+'" of length '+o.length)}else if(fe(o))(this.isSampler[r]?i.uniform1i:i.uniform1f).call(i,e,o);else throw new Error('attempted to set uniform "'+r+'" to invalid value '+o)}}return this},draw:function(t,r){this.drawBuffers(t.vertexBuffers,t.indexBuffers[r==i.LINES?"lines":"triangles"],arguments.length<2?i.TRIANGLES:r)},drawBuffers:function(t,r,e){var o=this.usedMatrices,s=i.modelviewMatrix,a=i.projectionMatrix,d=o.MVMI||o.NM?s.inverse():null,f=o.PMI?a.inverse():null,g=o.MVPM||o.MVPMI?a.multiply(s):null,m={};if(o.MVM&&(m[o.MVM]=s),o.MVMI&&(m[o.MVMI]=d),o.PM&&(m[o.PM]=a),o.PMI&&(m[o.PMI]=f),o.MVPM&&(m[o.MVPM]=g),o.MVPMI&&(m[o.MVPMI]=g.inverse()),o.NM){var u=d.m;m[o.NM]=[u[0],u[4],u[8],u[1],u[5],u[9],u[2],u[6],u[10]]}this.uniforms(m);var _=0;for(var E in t){var w=t[E],R=this.attributes[E]||i.getAttribLocation(this.program,E.replace(/^(gl_.*)$/,oe+"$1"));R==-1||!w.buffer||(this.attributes[E]=R,i.bindBuffer(i.ARRAY_BUFFER,w.buffer),i.enableVertexAttribArray(R),i.vertexAttribPointer(R,w.buffer.spacing,i.FLOAT,!1,0,0),_=w.buffer.length/w.buffer.spacing)}for(var E in this.attributes)E in t||i.disableVertexAttribArray(this.attributes[E]);return _&&(!r||r.buffer)&&(r?(i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,r.buffer),i.drawElements(e,r.buffer.length,i.UNSIGNED_SHORT,0)):i.drawArrays(e,0,_)),this}};function V(t,r,e){e=e||{},this.width=t,this.height=r,this.id=i.createTexture();let o=e.type||i.UNSIGNED_BYTE,s=e.format||i.RGBA,a=i.RGBA;const d=i.getExtension("EXT_color_buffer_float"),f=i.getExtension("EXT_color_buffer_half_float");o===i.FLOAT?(d?i instanceof WebGL2RenderingContext&&(s=i.RGBA32F):(console.warn("FLOAT textures not renderable, falling back to UNSIGNED_BYTE"),o=i.UNSIGNED_BYTE,s=i.RGBA8),a=i.RGBA):o===i.HALF_FLOAT_OES?(f?i instanceof WebGL2RenderingContext&&(s=i.RGBA16F):(console.warn("HALF_FLOAT textures not renderable, falling back to UNSIGNED_BYTE"),o=i.UNSIGNED_BYTE,s=i.RGBA8),a=i.RGBA):(o=i.UNSIGNED_BYTE,s=i.RGBA8,a=i.RGBA);const g=e.filter||e.magFilter||i.LINEAR,m=e.filter||e.minFilter||i.LINEAR;i.bindTexture(i.TEXTURE_2D,this.id),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,1),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,g),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,m),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,e.wrap||e.wrapS||i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,e.wrap||e.wrapT||i.CLAMP_TO_EDGE),i instanceof WebGL2RenderingContext?i.texImage2D(i.TEXTURE_2D,0,s,t,r,0,a,o,null):i.texImage2D(i.TEXTURE_2D,0,a,t,r,0,a,o,null),i.bindTexture(i.TEXTURE_2D,null),this.format=a,this.type=o,this.internalFormat=s}var K,Y,ae;V.prototype={bind:function(t){i.activeTexture(i.TEXTURE0+(t||0)),i.bindTexture(i.TEXTURE_2D,this.id)},unbind:function(t){i.activeTexture(i.TEXTURE0+(t||0)),i.bindTexture(i.TEXTURE_2D,null)},canDrawTo:function(){K=K||i.createFramebuffer(),i.bindFramebuffer(i.FRAMEBUFFER,K),i.framebufferTexture2D(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,this.id,0);var t=i.checkFramebufferStatus(i.FRAMEBUFFER)==i.FRAMEBUFFER_COMPLETE;return i.bindFramebuffer(i.FRAMEBUFFER,null),t},drawTo:function(t){i.getExtension("EXT_color_buffer_float")||console.warn("EXT_color_buffer_float not available!");var e=i.getParameter(i.VIEWPORT);if(K=K||i.createFramebuffer(),Y=Y||i.createRenderbuffer(),i.bindFramebuffer(i.FRAMEBUFFER,K),i.bindRenderbuffer(i.RENDERBUFFER,Y),(this.width!=Y.width||this.height!=Y.height)&&(Y.width=this.width,Y.height=this.height,i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_COMPONENT16,this.width,this.height)),i.framebufferTexture2D(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,this.id,0),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,Y),i.checkFramebufferStatus(i.FRAMEBUFFER)!=i.FRAMEBUFFER_COMPLETE)throw new Error("Rendering to this texture is not supported (incomplete framebuffer)");i.viewport(0,0,this.width,this.height),t(),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindRenderbuffer(i.RENDERBUFFER,null),i.viewport(e[0],e[1],e[2],e[3])},swapWith:function(t){var r;r=t.id,t.id=this.id,this.id=r,r=t.width,t.width=this.width,this.width=r,r=t.height,t.height=this.height,this.height=r}},V.fromImage=function(t,r){r=r||{};var e=new V(t.width,t.height,r);i.bindTexture(i.TEXTURE_2D,e.id);try{i.texImage2D(i.TEXTURE_2D,0,e.format,e.format,e.type,t)}catch{throw location.protocol=="file:"?new Error('image not loaded for security reasons (serve this page over "http://" instead)'):new Error("image not loaded for security reasons (image must originate from the same domain as this page or use Cross-Origin Resource Sharing)")}return r.minFilter&&r.minFilter!=i.NEAREST&&r.minFilter!=i.LINEAR&&i.generateMipmap(i.TEXTURE_2D),i.bindTexture(i.TEXTURE_2D,null),e},V.fromURL=function(t,r){ae=ae||function(){var a=document.createElement("canvas").getContext("2d");a.canvas.width=a.canvas.height=128;for(var d=0;d<a.canvas.height;d+=16)for(var f=0;f<a.canvas.width;f+=16)a.fillStyle=(f^d)&16?"#FFF":"#DDD",a.fillRect(f,d,16,16);return a.canvas}();var e=V.fromImage(ae,r),o=new Image,s=i;return o.onload=function(){s.makeCurrent(),V.fromImage(o,r).swapWith(e)},o.src=t,e},V.canUseFloatingPointTextures=function(){return!!i.getExtension("OES_texture_float")},V.canUseFloatingPointLinearFiltering=function(){return!!i.getExtension("OES_texture_float_linear")},V.canUseHalfFloatingPointTextures=function(){return!!i.getExtension("OES_texture_half_float")},V.canUseHalfFloatingPointLinearFiltering=function(){return!!i.getExtension("OES_texture_half_float_linear")};function x(t,r,e){this.x=t||0,this.y=r||0,this.z=e||0}return x.prototype={negative:function(){return new x(-this.x,-this.y,-this.z)},add:function(t){return t instanceof x?new x(this.x+t.x,this.y+t.y,this.z+t.z):new x(this.x+t,this.y+t,this.z+t)},subtract:function(t){return t instanceof x?new x(this.x-t.x,this.y-t.y,this.z-t.z):new x(this.x-t,this.y-t,this.z-t)},multiply:function(t){return t instanceof x?new x(this.x*t.x,this.y*t.y,this.z*t.z):new x(this.x*t,this.y*t,this.z*t)},divide:function(t){return t instanceof x?new x(this.x/t.x,this.y/t.y,this.z/t.z):new x(this.x/t,this.y/t,this.z/t)},equals:function(t){return this.x==t.x&&this.y==t.y&&this.z==t.z},dot:function(t){return this.x*t.x+this.y*t.y+this.z*t.z},cross:function(t){return new x(this.y*t.z-this.z*t.y,this.z*t.x-this.x*t.z,this.x*t.y-this.y*t.x)},length:function(){return Math.sqrt(this.dot(this))},unit:function(){return this.divide(this.length())},min:function(){return Math.min(Math.min(this.x,this.y),this.z)},max:function(){return Math.max(Math.max(this.x,this.y),this.z)},toAngles:function(){return{theta:Math.atan2(this.z,this.x),phi:Math.asin(this.y/this.length())}},angleTo:function(t){return Math.acos(this.dot(t)/(this.length()*t.length()))},toArray:function(t){return[this.x,this.y,this.z].slice(0,t||3)},clone:function(){return new x(this.x,this.y,this.z)},init:function(t,r,e){return this.x=t,this.y=r,this.z=e,this}},x.negative=function(t,r){return r.x=-t.x,r.y=-t.y,r.z=-t.z,r},x.add=function(t,r,e){return r instanceof x?(e.x=t.x+r.x,e.y=t.y+r.y,e.z=t.z+r.z):(e.x=t.x+r,e.y=t.y+r,e.z=t.z+r),e},x.subtract=function(t,r,e){return r instanceof x?(e.x=t.x-r.x,e.y=t.y-r.y,e.z=t.z-r.z):(e.x=t.x-r,e.y=t.y-r,e.z=t.z-r),e},x.multiply=function(t,r,e){return r instanceof x?(e.x=t.x*r.x,e.y=t.y*r.y,e.z=t.z*r.z):(e.x=t.x*r,e.y=t.y*r,e.z=t.z*r),e},x.divide=function(t,r,e){return r instanceof x?(e.x=t.x/r.x,e.y=t.y/r.y,e.z=t.z/r.z):(e.x=t.x/r,e.y=t.y/r,e.z=t.z/r),e},x.cross=function(t,r,e){return e.x=t.y*r.z-t.z*r.y,e.y=t.z*r.x-t.x*r.z,e.z=t.x*r.y-t.y*r.x,e},x.unit=function(t,r){var e=t.length();return r.x=t.x/e,r.y=t.y/e,r.z=t.z/e,r},x.fromAngles=function(t,r){return new x(Math.cos(t)*Math.cos(r),Math.sin(r),Math.sin(t)*Math.cos(r))},x.randomDirection=function(){return x.fromAngles(Math.random()*Math.PI*2,Math.asin(Math.random()*2-1))},x.min=function(t,r){return new x(Math.min(t.x,r.x),Math.min(t.y,r.y),Math.min(t.z,r.z))},x.max=function(t,r){return new x(Math.max(t.x,r.x),Math.max(t.y,r.y),Math.max(t.z,r.z))},x.lerp=function(t,r,e){return r.subtract(t).multiply(e).add(t)},x.fromArray=function(t){return new x(t[0],t[1],t[2])},x.angleBetween=function(t,r){return t.angleTo(r)},n}();let c={numSteps:2,focal:45,visualizations:{enabled:!0,showFlags:!0,showRanks:!0,showWR:!0,showSpeed:!0,showDivingDistance:!0,showNeighboursLines:"only medals",neighboursLinesModesDict:{none:0,"only medals":1,all:2},areaConservationEnabled:!0,shadow:{enabled:!0,shadowRadius:.5,shadowPower:.5,showCircle:!0,circleRadius:.6,circleStroke:.15},sparks:{enabled:!1,glow:5,glowOffset:.5,lengthFactor:1,stroke:.01,num:40,sizeFactor:50,fov:Math.PI/4}},video:{thresholdBlending:!0,blendingThreshold:.41,show:!1},simulation:{optimized:!1,waterDamping:.02,poolSize:new v.Vector(2,1,2)},isOneVisualizationEnabled:()=>c.visualizations.showFlags||c.visualizations.showRanks||c.visualizations.showWR||c.visualizations.showSpeed||c.visualizations.showDivingDistance};const ke=new v.Vector(0,-4,0);class pe{constructor(n,l){this.center=new v.Vector(n.x,n.y,n.z),this.oldCenter=new v.Vector(n.x,n.y,n.z),this.radius=l,this.cinematic=!1,this.velocity=new v.Vector(0,0,0),this.acceleration=new v.Vector(0,0,0),this.mass=4/3*Math.PI*Math.pow(l,3)*1e3,this.invMass=1/this.mass,this.radiusSquared=l*l,this.mesh=v.Mesh.sphere({detail:10})}update(n){if(this.cinematic)this.velocity=new v.Vector(0,0,0);else{this.oldCenter=new v.Vector(this.center.x,this.center.y,this.center.z);const l=Math.max(0,Math.min(1,(this.radius-this.center.y)/(2*this.radius))),h=ke.multiply(-1.1*this.mass*l),p=this.velocity.unit().multiply(-1e3*this.radiusSquared*l*this.velocity.dot(this.velocity));this.addForce(p),this.addForce(h),this.addForce(ke.multiply(this.mass)),this.velocity=this.velocity.add(this.acceleration.multiply(n)),this.acceleration=new v.Vector(0,0,0),this.center=this.center.add(this.velocity.multiply(n)),this.center.y<this.radius-c.simulation.poolSize.y&&(this.center.y=this.radius-1,this.velocity.y=Math.abs(this.velocity.y)*.7)}}addForce(n){this.cinematic?console.warn("Trying to add force to a cinematic sphere."):this.acceleration=this.acceleration.add(n.multiply(this.invMass))}move(n){this.oldCenter=new v.Vector(this.center.x,this.center.y,this.center.z),this.center=new v.Vector(n.x,n.y,n.z),this.cinematic||console.warn("Moving a non cinematic sphere.")}}const Ae=.3,ze=.15,Ce=1,Ze=10,Oe=Math.ceil(Ze/4),Ue=10,Je=`#version 300 es
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
`,tt=new Float32Array([-1,-1,1,-1,1,1,-1,1]),it=new Uint16Array([0,1,2,2,3,0]);var H,Ve,ve,Ge;class rt{constructor(n){Le(this,H);this.numVecAttributes=Oe,this.maxNumSwimmer=Ue,this.gl=n;const l=n.NEAREST;this.texture=new v.Texture(this.numVecAttributes,this.maxNumSwimmer,{type:n.FLOAT,filter:l}),this.initPrograms(),this.indexBuffer=this.gl.createBuffer(),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.indexBuffer),this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER,it,this.gl.STATIC_DRAW),this.vboPlane=this.gl.createBuffer(),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vboPlane),this.gl.bufferData(this.gl.ARRAY_BUFFER,tt,this.gl.STATIC_DRAW),this.vboPoints=this.gl.createBuffer()}update(n){this.numSwimmers=n.length;const l=5;this.swimmersAttributes=new Float32Array(this.numVecAttributes*4*this.maxNumSwimmer*l);const h=ee(this,H,Ve).call(this,n);for(let p=0;p<n.length;p++){const T=h[p];ee(this,H,Ge).call(this,p,T),ee(this,H,ve).call(this,n.length+p,T.leftArm),ee(this,H,ve).call(this,2*n.length+p,T.rightArm),ee(this,H,ve).call(this,3*n.length+p,T.leftFoot),ee(this,H,ve).call(this,4*n.length+p,T.rightFoot)}this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture.id),this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,!1),this.gl.texSubImage2D(this.gl.TEXTURE_2D,0,0,0,this.numVecAttributes,this.maxNumSwimmer,this.gl.RGBA,this.gl.FLOAT,this.swimmersAttributes),this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,!0),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vboPoints),this.gl.bufferData(this.gl.ARRAY_BUFFER,this.swimmersAttributes,this.gl.DYNAMIC_DRAW)}buildShader(n,l){const h=this.gl.createShader(l);return this.gl.shaderSource(h,n),this.gl.compileShader(h),h}createProgram(n){const l=this.gl.createProgram();return n.forEach(h=>{this.gl.attachShader(l,h)}),this.gl.linkProgram(l),l}checkShaders(n,l,h){this.gl.getShaderParameter(n,this.gl.COMPILE_STATUS)||console.error(this.gl.getShaderInfoLog(n)),this.gl.getShaderParameter(l,this.gl.COMPILE_STATUS)||console.error(this.gl.getShaderInfoLog(l)),this.gl.getProgramParameter(h,this.gl.LINK_STATUS)||console.error(this.gl.getProgramInfoLog(h))}createRenderingTexture(n,l){this.pointsTexture=new v.Texture(n,l,{type:this.gl.FLOAT,filter:this.gl.NEAREST}),this.pointsFrameBuffer=this.gl.createFramebuffer(),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.pointsFrameBuffer);const h=this.gl.COLOR_ATTACHMENT0;this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,h,this.gl.TEXTURE_2D,this.pointsTexture.id,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.horizontalPassTexture=new v.Texture(n,l,{type:this.gl.FLOAT,filter:this.gl.LINEAR}),this.horizontalPassFrameBuffer=this.gl.createFramebuffer(),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.horizontalPassFrameBuffer),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,h,this.gl.TEXTURE_2D,this.horizontalPassTexture.id,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null);const p=l/4,T=p,S=p;this.displacementTexture=new v.Texture(T,S,{type:this.gl.FLOAT,filter:this.gl.LINEAR}),this.displacementFrameBuffer=this.gl.createFramebuffer(),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.displacementFrameBuffer),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,h,this.gl.TEXTURE_2D,this.displacementTexture.id,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.oldDisplacementTexture=new v.Texture(T,S,{type:this.gl.FLOAT,filter:this.gl.LINEAR})}buildProgram(n,l){const h=this.buildShader(n,this.gl.VERTEX_SHADER),p=this.buildShader(l,this.gl.FRAGMENT_SHADER),T=this.createProgram([h,p]);return this.checkShaders(h,p,T),T}initPrograms(){this.programPoints=this.buildProgram(Je,Qe),this.programVolume=this.buildProgram($e,et),this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height)}volumePass(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.horizontalPassFrameBuffer),this.gl.useProgram(this.programVolume);const n=this.gl.getAttribLocation(this.programVolume,"iVertex"),l=this.gl.getUniformLocation(this.programVolume,"poolSize");this.gl.uniform2f(l,c.simulation.poolSize.x,c.simulation.poolSize.z);const h=this.gl.getUniformLocation(this.programVolume,"horizontal");this.gl.uniform1i(h,!0);const p=this.gl.getUniformLocation(this.programVolume,"show");this.gl.uniform1i(p,!1);const T=this.gl.getUniformLocation(this.programVolume,"swapColor");this.gl.uniform1i(T,!1);const S=2,F=this.gl.FLOAT,k=!1,U=0,M=0;this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vboPlane),this.gl.vertexAttribPointer(n,S,F,k,U,M),this.gl.enableVertexAttribArray(n),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.indexBuffer),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.pointsTexture.id),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this.gl.drawElements(this.gl.TRIANGLES,6,this.gl.UNSIGNED_SHORT,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.displacementFrameBuffer),this.gl.uniform1i(h,!1),this.gl.uniform1i(p,!1),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.horizontalPassTexture.id),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this.gl.viewport(0,0,this.displacementTexture.width,this.displacementTexture.height),this.gl.drawElements(this.gl.TRIANGLES,6,this.gl.UNSIGNED_SHORT,0),this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height)}pointPass(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.pointsFrameBuffer),this.gl.useProgram(this.programPoints);const n=this.gl.getAttribLocation(this.programPoints,"iData1"),l=this.gl.getAttribLocation(this.programPoints,"iData2"),h=this.gl.getAttribLocation(this.programPoints,"iData3"),p=this.gl.getUniformLocation(this.programPoints,"invPoolSize");this.gl.uniform2f(p,1/c.simulation.poolSize.x,1/c.simulation.poolSize.z);const T=4,S=this.gl.FLOAT,F=!1,k=4,U=12*k;let M=0;this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vboPoints),n>=0&&(this.gl.vertexAttribPointer(n,T,S,F,U,M),this.gl.enableVertexAttribArray(n)),M=4*k,l>=0&&(this.gl.vertexAttribPointer(l,T,S,F,U,M),this.gl.enableVertexAttribArray(l)),M=2*4*k,h>=0&&(this.gl.vertexAttribPointer(h,T,S,F,U,M),this.gl.enableVertexAttribArray(h)),this.gl.viewport(0,0,this.pointsTexture.width,this.pointsTexture.height),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this.gl.drawArrays(this.gl.POINTS,0,5*this.numSwimmers)}updateOldDisplacementTexture(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.displacementFrameBuffer),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.oldDisplacementTexture.id),this.gl.copyTexSubImage2D(this.gl.TEXTURE_2D,0,0,0,0,0,this.oldDisplacementTexture.width,this.oldDisplacementTexture.height)}draw(){this.updateOldDisplacementTexture(),this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this.pointPass(),this.volumePass(),this.gl.disable(this.gl.BLEND)}}H=new WeakSet,Ve=function(n){const l=function(h,p){return p.body.center.z-h.body.center.z};return n.sort(l)},ve=function(n,l){this.swimmersAttributes[this.numVecAttributes*4*n]=l.center.x,this.swimmersAttributes[this.numVecAttributes*4*n+1]=l.center.z,this.swimmersAttributes[this.numVecAttributes*4*n+7]=l.center.y},Ge=function(n,l){ee(this,H,ve).call(this,n,l.body),this.swimmersAttributes[this.numVecAttributes*4*n+2]=l.divingDistance,this.swimmersAttributes[this.numVecAttributes*4*n+3]=l.divingTime,this.swimmersAttributes[this.numVecAttributes*4*n+4]=l.reactionTime,this.swimmersAttributes[this.numVecAttributes*4*n+5]=l.body.velocity.z*3.6,this.swimmersAttributes[this.numVecAttributes*4*n+6]=l.nationality,this.swimmersAttributes[this.numVecAttributes*4*n+8]=l.breakoutDistance,this.swimmersAttributes[this.numVecAttributes*4*n+9]=l.breakoutTime};function Ee(i=0,n=1){const l=1-Math.random(),h=Math.random();return Math.sqrt(-2*Math.log(l))*Math.cos(2*Math.PI*h)*n+i}const te=new v.Vector(1e3,0,0),ot=.5,nt=1,Te=2*Math.PI*nt,I=class I{constructor(n){this.startingPoint=new v.Vector(n.x,n.y,n.z),this.center=new v.Vector(n.x,n.y,n.z),this.force=new v.Vector(0,0,190+Ee(0,20)),this.reactionTime=Math.max(.1,Ee(.15,.02));const l=.25,h=.15;this.body=new pe(n,l),this.leftArm=new pe(te,h),this.rightArm=new pe(te,h),this.leftFoot=new pe(te,h),this.rightFoot=new pe(te,h),this.body.cinematic=!I.useGravity,this.leftArm.cinematic=!0,this.rightArm.cinematic=!0,this.leftFoot.cinematic=!0,this.rightFoot.cinematic=!0,this.spheres=[this.body,this.leftArm,this.rightArm,this.leftFoot,this.rightFoot],this.divingDistance=0,this.divingTime=1e3,this.breakoutDistance=0,this.breakoutTime=1e3,this.nationality=Math.random()>.5?0:1}jump(){this.body.cinematic=!1,this.body.velocity=new v.Vector(0,0,4.5+Ee(0,1)),this.body.center=new v.Vector(this.startingPoint.x,1,-c.simulation.poolSize.z/2)}swim(n){this.started=n,n?(this.body.cinematic=!1,this.useGravity=!0,this.body.center=new v.Vector(this.startingPoint.x,0,-c.simulation.poolSize.z/2)):(this.body.velocity=new v.Vector(0,0,0),this.body.center=new v.Vector(this.startingPoint.x,0,0))}getArmOffset(n,l){return new v.Vector(0,Math.cos(Te*n+l),Math.sin(Te*n+l)).multiply(ot)}update(n,l){if(I.raceHasStarted||I.swimming){if(!this.started&&I.raceHasStarted)if(l>this.reactionTime)this.swim(!0),this.jump();else return;if(this.body.addForce(this.force),this.hasBrokeOut){this.cyclePhase=Te*l%2*Math.PI;const p=this.getArmOffset(l,0),T=this.getArmOffset(l,Math.PI),S=this.getArmOffset(l*2,0),F=this.getArmOffset(l*2,Math.PI);this.rightArm.move(this.body.center.add(p).add(new v.Vector(Ae,0,0))),this.leftArm.move(this.body.center.add(T).add(new v.Vector(-Ae,0,0))),this.rightFoot.move(this.body.center.add(new v.Vector(ze,S.y*.5,-Ce))),this.leftFoot.move(this.body.center.add(new v.Vector(-ze,F.y*.5,-Ce)))}}else this.rightArm.move(te),this.leftArm.move(te),this.rightFoot.move(te),this.leftFoot.move(te);for(let p of this.spheres)p.update(n);!this.hasDove&&this.body.center.y<0&&this.body.oldCenter.y>=0&&(this.divingDistance=this.body.center.z+c.simulation.poolSize.z/2,this.divingTime=l,this.hasDove=!0);const h=this.body.radius;!this.hasBrokeOut&&this.body.center.y>-h&&this.body.oldCenter.y<=-h&&(this.breakoutDistance=this.body.center.z+c.simulation.poolSize.z/2,this.breakoutTime=l,this.hasBrokeOut=!0,console.log("BREAKOUT : "+this.breakoutDistance))}};q(I,"useGravity",!1),q(I,"raceHasStarted",!1),q(I,"swimming",!1),q(I,"attributes"),q(I,"initAttributes",n=>{I.attributes=new rt(n)}),q(I,"updateAttributesTexture",n=>{I.attributes.update(n)}),q(I,"getAttributesTexture",()=>I.attributes.texture),q(I,"bindDisplacementTexture",n=>{I.attributes.displacementTexture.bind(n)}),q(I,"bindOldDisplacementTexture",n=>{I.attributes.oldDisplacementTexture.bind(n)}),q(I,"reset",n=>{I.attributes.createRenderingTexture(n.x,n.y)});let C=I;const Me=`
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
`;function j(i,n=null){this.gl=i,this.visualizationWavesEnabled=!0,this.sqrt_2_PI=Math.sqrt(2*Math.PI),this.spheres=[];var l=`
    out vec2 coord;
    uniform vec2 invPoolSizeVertex;
    void main() {
      coord = gl_Vertex.xy * invPoolSizeVertex + 0.5;
      gl_Position = vec4(gl_Vertex.xy * 2. * invPoolSizeVertex, 0., 1.0);
    }
  `;this.reset(n),v.Texture.canUseFloatingPointTextures(),this.dropShader=new v.Shader(l,`
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
  `),this.updateShader=new v.Shader(l,`
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
  `),this.normalShader=new v.Shader(l,`
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

    // /* add the old volume */
    info.r += volumeInSphere(oldCenter);

    // /* subtract the new volume */
    info.r -= volumeInSphere(newCenter);

    fragColor = info;
  }
  `),this.visualizationWavesShader=new v.Shader(l,`
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
    `)}j.prototype.reset=function(i=null){this.WR_position=1e5,this.prev_WR_position=0,i!==null?(console.log("resolution.y : "+i.y),this.W=Math.round(i.x),this.H=Math.round(i.y),console.log("Using custom resolution:",this.W,this.H)):(this.W=256,this.H=256),C.reset(new v.Vector(this.W,this.H)),this.plane=v.Mesh.plane({detail:255,width:c.simulation.poolSize.x,height:c.simulation.poolSize.z}),this.delta=new v.Vector(1/this.W,1/this.H);const n=this.gl;this.textureA&&n.deleteTexture(this.textureA.id),this.textureB&&n.deleteTexture(this.textureB.id),this.textureA=new v.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:l}),this.textureB=new v.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:l}),this.areaConservationTexture=new v.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:l}),this.showAreaConservedGrid=!1,this.showProjectionGrid=!1,this.invPoolSize=new v.Vector(1/c.simulation.poolSize.x,1/c.simulation.poolSize.y,1/c.simulation.poolSize.z);var l=v.Texture.canUseFloatingPointLinearFiltering()?this.gl.LINEAR:this.gl.NEAREST;(!this.textureA.canDrawTo()||!this.textureB.canDrawTo())&&v.Texture.canUseHalfFloatingPointTextures()&&(console.log("No draw"),l=v.Texture.canUseHalfFloatingPointLinearFiltering()?this.gl.LINEAR:this.gl.NEAREST,this.textureA=new v.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:l}),this.textureB=new v.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:l}))};j.prototype.addDrop=function(i,n,l,h){var p=this;this.textureB.drawTo(function(){p.textureA.bind(),p.dropShader.uniforms({invPoolSizeVertex:[p.invPoolSize.x,p.invPoolSize.z],center:[i,n],radius:l,strength:h,poolSize:[c.simulation.poolSize.x,c.simulation.poolSize.y,c.simulation.poolSize.z]}).draw(p.plane)}),this.textureB.swapWith(this.textureA)};j.prototype.addOrRemoveVisualizationWaves=function(i,n,l){if(this.visualizationWavesEnabled){var h=this;this.textureB.drawTo(function(){h.textureA.bind();const p=C.getAttributesTexture();p&&p.bind(1),h.visualizationWavesShader.uniforms({swimmersAttributesTexture:1,showDivingDistance:c.visualizations.showDivingDistance,showWR:c.visualizations.showWR,invPoolSizeVertex:[h.invPoolSize.x,h.invPoolSize.z],poolSize:[c.simulation.poolSize.x,c.simulation.poolSize.y,c.simulation.poolSize.z],wr:h.WR_position,sqrt_2_PI:h.sqrt_2_PI,add:i,swimmersNumber:n.length,time:l}).draw(h.plane)}),this.textureB.swapWith(this.textureA)}};j.prototype.addSwimmer=function(i){for(let n of i.spheres)this.addSphere(n)};j.prototype.addSphere=function(i){this.spheres.push(i)};j.prototype.updateSpheres=function(i){if(this.prev_WR_position=this.WR_position,this.WR_position+=i*2.4,c.simulation.optimized)C.attributes.draw(),this.textureB.drawTo(()=>{this.textureA.bind(),C.bindDisplacementTexture(1),C.bindOldDisplacementTexture(2),this.sphereShader.uniforms({oldDisplacementTexture:2,displacementTexture:1,invPoolSizeVertex:[this.invPoolSize.x,this.invPoolSize.z],poolSize:[c.simulation.poolSize.x,c.simulation.poolSize.y,c.simulation.poolSize.z],optimized:!0}).draw(this.plane),this.textureB.swapWith(this.textureA),C.attributes.draw()});else for(let l=0;l<this.spheres.length;l++){const h=this.spheres[l];this.moveSphere(h.oldCenter,h.center,h.radius)}};j.prototype.moveSphere=function(i,n,l){var h=this;this.textureB.drawTo(function(){h.textureA.bind(),h.sphereShader.uniforms({invPoolSizeVertex:[h.invPoolSize.x,h.invPoolSize.z],oldCenter:i,newCenter:n,radius:l,poolSize:[c.simulation.poolSize.x,c.simulation.poolSize.y,c.simulation.poolSize.z],optimized:!1}).draw(h.plane)}),this.textureB.swapWith(this.textureA)};j.prototype.stepSimulation=function(){var i=this;this.textureB.drawTo(function(){i.textureA.bind(),i.updateShader.uniforms({invPoolSizeVertex:[i.invPoolSize.x,i.invPoolSize.z],delta:[i.delta.x,i.delta.y],wr:i.WR_position,prev_wr:i.prev_WR_position,poolSize:[c.simulation.poolSize.x,c.simulation.poolSize.y,c.simulation.poolSize.z],sqrt_2_PI:i.sqrt_2_PI,damping:c.simulation.waterDamping}).draw(i.plane)}),this.textureB.swapWith(this.textureA),this.updateAreaConservation()};j.prototype.updateNormals=function(){var i=this;this.textureB.drawTo(function(){i.textureA.bind(),i.normalShader.uniforms({invPoolSizeVertex:[i.invPoolSize.x,i.invPoolSize.z],delta:[i.delta.x,i.delta.y]}).draw(i.plane)}),this.textureB.swapWith(this.textureA)};j.prototype.updateAreaConservation=function(){if(!c.visualizations.areaConservationEnabled)return;var i,n,l;if(this.textureA.type===this.gl.FLOAT)i=this.gl.FLOAT,n=Float32Array,l="EXT_color_buffer_float";else if(this.textureA.type===this.gl.HALF_FLOAT_OES)i=this.gl.HALF_FLOAT_OES,n=Uint16Array,l="EXT_color_buffer_half_float";else{console.warn("Unsupported texture type for reading");return}if(!this.gl.getExtension(l)){console.warn(l+" not available; cannot read pixels");return}this.fb||(this.fb=this.gl.createFramebuffer()),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.fb),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,this.textureA.id,0);const h=this.gl.checkFramebufferStatus(this.gl.FRAMEBUFFER);if(h!==this.gl.FRAMEBUFFER_COMPLETE){console.error("Framebuffer incomplete: "+h+" for texture type "+this.textureA.type),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null);return}this.gl.pixelStorei(this.gl.PACK_ALIGNMENT,1);const p=new n(this.W*this.H*4),T=new Float32Array(this.W*this.H*4);this.gl.readPixels(0,0,this.W,this.H,this.gl.RGBA,i,p);for(let M=0;M<this.W;M++)T[M*4+1]=1;const S=c.simulation.poolSize.x/this.W,F=c.simulation.poolSize.z/this.H,k=S*S,U=F*F;if(this.textureA.type===this.gl.FLOAT){for(let M=0;M<this.H;M+=1)for(let y=0;y<this.W;y+=1){const W=(M*this.W+y)*4,X=((this.H-1-M)*this.W+y)*4,N=T[X],Q=T[X+1];if(y+1<this.W){const O=p[W]-p[W+4],B=Math.sqrt(O*O+k);T[X+4]=N+B}if(M+1<this.H){const O=p[W]-p[W+this.W*4],B=Math.sqrt(O*O+U);T[X-4*this.W+1]=Q+B}}this.gl.bindTexture(this.gl.TEXTURE_2D,this.areaConservationTexture.id),this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT,1),this.gl.texSubImage2D(this.gl.TEXTURE_2D,0,0,0,this.W,this.H,this.gl.RGBA,this.gl.FLOAT,T)}this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.bindTexture(this.gl.TEXTURE_2D,null)};const at=`
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
`;function ie(i,n,l,h){this.water=n,this.gl=i,this.tileTexture=v.Texture.fromImage(document.getElementById("tiles"),{minFilter:this.gl.LINEAR_MIPMAP_LINEAR,wrap:this.gl.REPEAT,format:this.gl.RGB}),this.franceTexture=v.Texture.fromImage(document.getElementById("france"),{minFilter:this.gl.LINEAR_MIPMAP_LINEAR,wrap:this.gl.REPEAT,format:this.gl.RGBA}),this.chinaTexture=v.Texture.fromImage(document.getElementById("china"),{minFilter:this.gl.LINEAR_MIPMAP_LINEAR,wrap:this.gl.REPEAT,format:this.gl.RGBA}),this.lettersTexture=v.Texture.fromImage(document.getElementById("letters"),{minFilter:this.gl.LINEAR,magFilter:this.gl.LINEAR,wrap:this.gl.REPEAT,format:this.gl.RGBA}),this.flagSize=h,this.flagSize=[1.5,1],this.flagCenter=l,this.lightDir=new v.Vector(2,2,-1).unit(),this.causticTex=new v.Texture(1024,1024),this.waterShaders=[];for(var p=0;p<2;p++)this.waterShaders[p]=new v.Shader(`
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
      uniform float showNeighboursLinesMode;

      // Show neighbours lines modes
      #define LINES_NONE 0
      #define LINES_ONLY_MEDALS 1
      #define LINES_ALL 2
      
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
        if (linesMode == 0) return;
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
          drawFlags(position, swimmerPos, getSwimmerNationality(i), color);
          drawSwimmerLines(projectedPosition, swimmerPos, i, color);

          if (showSpeed) drawSpeed(position, swimmerPos, getSwimmerSpeed(i), color);
          if (showRanks) drawRanks(projectedPosition, swimmerPos, i, color);
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
        
        `+(p?`
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
    `);this.sphereMesh=v.Mesh.sphere({detail:10}),this.sphereShader=new v.Shader(le+`
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
  `),this.reset(),this.cubeShader=new v.Shader(le+`
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
  `),this.sphereCenter=new v.Vector,this.sphereRadius=0;var T=!!this.gl.getExtension("OES_standard_derivatives");this.causticsShader=new v.Shader(le+`
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
  `,(T?`#extension GL_OES_standard_derivatives: enable
`:"")+`
  `+le+`
    in vec3 oldPos;
    in vec3 newPos;
    in vec3 ray;
    out vec4 fragColor;

  void main() {
    `+(T?`
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
  `)}ie.prototype.reset=function(){this.cubeMesh=v.Mesh.cube({width:c.simulation.poolSize.x,height:2,depth:c.simulation.poolSize.z}),this.cubeMesh.triangles.splice(4,2),this.cubeMesh.compile()};ie.prototype.updateCaustics=function(i){};ie.prototype.renderWater=function(i,n,l,h,p){var T=new v.Raytracer;i.textureA.bind(0),this.tileTexture.bind(1),n.bind(2),this.causticTex.bind(3),this.franceTexture.bind(4),this.chinaTexture.bind(8),this.lettersTexture.bind(7),i.areaConservationTexture.bind(5);const S=C.getAttributesTexture();S&&S.bind(6),this.gl.enable(this.gl.CULL_FACE);for(var F=0;F<2;F++)this.gl.cullFace(F?this.gl.BACK:this.gl.FRONT),this.waterShaders[F].uniforms({light:this.lightDir,water:0,tiles:1,sky:2,causticTex:3,france:4,china:8,areaConservationTexture:5,swimmersAttributesTexture:6,iChannel0:7,areaConservation:c.visualizations.areaConservationEnabled,flagSize:[1.5,2],flagCenter:[this.flagCenter.x,this.flagCenter.y],poolSize:[c.simulation.poolSize.x,c.simulation.poolSize.y,c.simulation.poolSize.z],poolSizeVertexShader:[c.simulation.poolSize.x,c.simulation.poolSize.y,c.simulation.poolSize.z],eye:T.eye,sphereCenter:this.sphereCenter,sphereRadius:this.sphereRadius,showProjectionGrid:i.showProjectionGrid,showAreaConservedGrid:i.showAreaConservedGrid,wr:i.WR_position,swimmersNumber:l.length,showFlags:c.visualizations.showFlags,showRanks:c.visualizations.showRanks,showWR:c.visualizations.showWR,showSpeed:c.visualizations.showSpeed,showDivingDistance:c.visualizations.showDivingDistance,time:h,shadowEnabled:p.enabled,shadowRadius:p.shadowRadius,shadowPower:p.shadowPower,showCircle:p.showCircle,shadowCircleRadius:p.circleRadius,shadowCircleStroke:p.circleStroke,showNeighboursLinesMode:Math.round(c.visualizations.neighboursLinesModesDict[c.visualizations.showNeighboursLines])}).draw(i.plane);this.gl.disable(this.gl.CULL_FACE)};ie.prototype.renderSpheres=function(i){for(let n of i.spheres)this.renderSphere(i,n)};ie.prototype.renderSphere=function(i,n){i.textureA.bind(0),this.causticTex.bind(1),this.sphereShader.uniforms({light:this.lightDir,water:0,causticTex:1,sphereCenter:[n.center.x,n.center.y,n.center.z],sphereRadius:n.radius,poolSize:[c.simulation.poolSize.x,c.simulation.poolSize.y,c.simulation.poolSize.z]}).draw(n.mesh)};ie.prototype.renderSphereOld=function(i){i.textureA.bind(0),this.causticTex.bind(1),this.sphereShader.uniforms({light:this.lightDir,water:0,causticTex:1,sphereCenter:this.sphereCenter,sphereRadius:this.sphereRadius,poolSize:[c.simulation.poolSize.x,c.simulation.poolSize.y,c.simulation.poolSize.z]}).draw(this.sphereMesh)};ie.prototype.renderCube=function(i){this.gl.enable(this.gl.CULL_FACE),i.textureA.bind(0),this.tileTexture.bind(1),this.causticTex.bind(2),this.cubeShader.uniforms({light:this.lightDir,water:0,tiles:1,causticTex:2,sphereCenter:this.sphereCenter,sphereRadius:this.sphereRadius,poolSize:[c.simulation.poolSize.x,c.simulation.poolSize.y,c.simulation.poolSize.z]}).draw(this.cubeMesh),this.gl.disable(this.gl.CULL_FACE)};function Ie(i,n){this.gl=n,this.id=n.createTexture(),n.bindTexture(n.TEXTURE_CUBE_MAP,this.id),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,1),n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAG_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.texImage2D(n.TEXTURE_CUBE_MAP_NEGATIVE_X,0,n.RGB,n.RGB,n.UNSIGNED_BYTE,i.xneg),n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X,0,n.RGB,n.RGB,n.UNSIGNED_BYTE,i.xpos),n.texImage2D(n.TEXTURE_CUBE_MAP_NEGATIVE_Y,0,n.RGB,n.RGB,n.UNSIGNED_BYTE,i.yneg),n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_Y,0,n.RGB,n.RGB,n.UNSIGNED_BYTE,i.ypos),n.texImage2D(n.TEXTURE_CUBE_MAP_NEGATIVE_Z,0,n.RGB,n.RGB,n.UNSIGNED_BYTE,i.zneg),n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_Z,0,n.RGB,n.RGB,n.UNSIGNED_BYTE,i.zpos)}Ie.prototype.bind=function(i){this.gl.activeTexture(this.gl.TEXTURE0+(i||0)),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,this.id)};Ie.prototype.unbind=function(i){this.gl.activeTexture(this.gl.TEXTURE0+(i||0)),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,null)};const We=200,st=`
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

`;class lt{constructor(n,l){if(this.gl=n,this.copyVideo=!1,this.show=!1,n===null){alert("Unable to initialize WebGL. Your browser or machine may not support it.");return}n.clearColor(0,0,0,1),n.clear(n.COLOR_BUFFER_BIT),this.shader=new v.Shader(`
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

    `+st+Me+`

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
`),this.mesh=v.Mesh.plane({width:2,height:2,coords:!0,normals:!0}),this.mesh.transform(v.Matrix.rotate(90,1,0,0)),this.mesh.transform(v.Matrix.translate(0,.1,0)),this.programInfo=null,this.texture=this.initTexture(),this.video=this.setupVideo(l),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!0)}render(n){const l=c.visualizations.sparks,h=c.simulation.poolSize;c.video.show&&(this.copyVideo&&this.updateTexture(),(!this.mesh.vertexBuffers||!this.mesh.vertexBuffers.vertex)&&this.mesh.compile(),this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture),C.swimmersAttributesTexture&&C.swimmersAttributesTexture.bind(1),this.shader.uniforms({uSampler:0,swimmersHelperFunctions:1,iTime:n,poolSize:[h.x,h.y,h.z],iResolution:[this.gl.canvas.width,this.gl.canvas.height],sparksEnabled:l.enabled,sparksGlow:l.glow,sparksGlowOffset:l.glowOffset,sparksStroke:l.stroke,sparksNumber:l.num,sparksLengthFactor:l.lengthFactor,sparksSizeFactor:l.sizeFactor,fov:l.fov,thresholdBlending:c.video.thresholdBlending,blendingThreshold:c.video.blendingThreshold}).draw(this.mesh),this.gl.disable(this.gl.BLEND))}initTexture(){const n=this.gl.createTexture();this.gl.bindTexture(this.gl.TEXTURE_2D,n);const l=0,h=this.gl.RGBA,p=1,T=1,S=0,F=this.gl.RGBA,k=this.gl.UNSIGNED_BYTE,U=new Uint8Array([0,0,255,255]);return this.gl.texImage2D(this.gl.TEXTURE_2D,l,h,p,T,S,F,k,U),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),n}updateTexture(){const l=this.gl.RGBA,h=this.gl.RGBA,p=this.gl.UNSIGNED_BYTE;this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture),this.gl.texImage2D(this.gl.TEXTURE_2D,0,l,h,p,this.video)}setupVideo(n){const l=document.createElement("video");let h=!1,p=!1;l.playsInline=!0,l.muted=!0,l.loop=!0,l.addEventListener("playing",()=>{h=!0,S()},!0),l.addEventListener("timeupdate",()=>{p=!0,S()},!0),l.src=n,l.play();const T=this,S=()=>{h&&p&&(T.copyVideo=!0)};return l}}const _e=new Ke,ct=function(i,n){const l=_e.addFolder("visualizations");l.close(),l.add(c.visualizations,"showFlags").name("show flags").listen(),l.add(c.visualizations,"showWR").name("show world record").listen(),l.add(c.visualizations,"showNeighboursLines",["none","only medals","all"]).name("show neighbours lines").listen(),l.add(c.visualizations,"showSpeed").name("show speed").listen(),l.add(c.visualizations,"showRanks").name("show ranks").listen(),l.add(c.visualizations,"showDivingDistance").name("show diving distance").listen(),l.add(c.visualizations.shadow,"enabled").name("show shadow"),l.add(c.visualizations,"areaConservationEnabled","areaConservationEnabled").name("area conservation").listen();const h=_e.addFolder("video");h.close(),h.add(c.video,"thresholdBlending").name("threshold blending"),h.add(c.video,"blendingThreshold",.1,.5).name("blending threshold"),h.add(c.video,"show").name("show").listen();const p=l.addFolder("Sparks");p.close(),p.add(c.visualizations.sparks,"enabled").name("sparks enabled"),p.add(c.visualizations.sparks,"glow",1,30).name("sparks glow factor"),p.add(c.visualizations.sparks,"lengthFactor",.1,10).name("sparks length factor"),p.add(c.visualizations.sparks,"glowOffset",.1,3).name("sparks glow offset"),p.add(c.visualizations.sparks,"stroke",.001,.05).name("sparks stroke"),p.add(c.visualizations.sparks,"num",10,We).step(1).name("sparks number"),p.add(c.visualizations.sparks,"sizeFactor",10,100).name("size factor");const T=l.addFolder("Swimmers shadows");T.close(),T.add(c.visualizations.shadow,"shadowRadius",0,2).name("shadow radius"),T.add(c.visualizations.shadow,"shadowPower",.1,2).name("shadow power"),T.add(c.visualizations.shadow,"showCircle").name("circle"),T.add(c.visualizations.shadow,"circleRadius",.5,2).name("circle radius"),T.add(c.visualizations.shadow,"circleStroke",.1,.5).name("circle stroke");const S=_e.addFolder("Simulation");S.close(),S.add(c.simulation,"optimized").name("optimized"),S.add(c.simulation.poolSize,"x",1,25).name("pool width").onChange(function(k){n()}).listen(),S.add(c.simulation.poolSize,"z",1,50).name("pool height").onChange(function(k){n()}).listen(),S.add(c.simulation.poolSize,"y",1,3).name("pool depth").onChange(function(k){n()}).listen(),S.add(c.simulation,"waterDamping",.005,.15).name("water damping").listen();const F=_e.addFolder("camera");F.close(),F.add(c,"focal",28,45).name("focal").listen().onChange(function(k){c.visualizations.sparks.fov=k*2*Math.PI/360,i.matrixMode(i.PROJECTION),i.loadIdentity(),i.perspective(c.focal,i.canvas.width/i.canvas.height,.01,100),i.matrixMode(i.MODELVIEW),console.log("perspective : "+c.focal)})};function dt(i){return i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n/g,"<br>")}function ft(i){var n=dt(i);n=="WebGL not supported"&&(n='Your browser does not support WebGL.<br>Please see    <a href="http://www.khronos.org/webgl/wiki/Getting_a_WebGL_Implementation">    Getting a WebGL Implementation</a>.');var l=document.getElementById("loading");l.innerHTML=n,l.style.zIndex=1}window.onerror=ft;var b=v.create();b.canvas.tabIndex=0;var z,Ne,G;const D=[],Fe=10;var ue=-25,we=-200.5,xe=0;let be=0,Re=0;var he=4;const Be=17;let me=0,ge=0;var J=!1,ye,Pe;C.initAttributes(b);let L=new v.Vector(256,256);function Xe(){document.getElementById("warning").hidden=!(L.x*L.y>3e5&&z&&c.visualizations.areaConservationEnabled)}let Se=0;function ut(i){Se+=i,Se>=1&&(document.getElementById("fps").innerText=`${(1/i).toFixed(1)} FPS`,Se=0)}function ce(){console.log("reset"),document.getElementById("resolution").innerText=`Resolution: ${L.x} x ${L.y}`,Xe(),ye=new v.Vector(0,-c.simulation.poolSize.z/2+1),z.reset(L),G.flagCenter=ye,G.flagSize=Pe,G.reset();const i=c.simulation.poolSize.x/Fe;let n=-c.simulation.poolSize.x/2+i/2;for(let l of D)l.body.center.x=n,l.startingPoint.x=n,n+=i}window.onload=function(){var i=window.devicePixelRatio||1,n=document.getElementById("help");function l(){var a=innerWidth,d=innerHeight;b.canvas.width=a*i,b.canvas.height=d*i,b.canvas.style.width=a+"px",b.canvas.style.height=d+"px",b.viewport(0,0,b.canvas.width,b.canvas.height),b.matrixMode(b.PROJECTION),b.loadIdentity(),b.perspective(c.focal,b.canvas.width/b.canvas.height,.01,100),b.matrixMode(b.MODELVIEW),s()}document.body.appendChild(b.canvas),b.canvas.oncontextmenu=function(a){a.preventDefault()},b.clearColor(0,0,0,1),ye=new v.Vector(0,-c.simulation.poolSize.z/2+1),Pe=.7,z=new j(b);const h=new lt(b,"./video.mp4"),p=document.getElementById("drop-zone");let T=0;if(document.addEventListener("dragenter",a=>{T++,p.style.display="flex"}),document.addEventListener("dragover",a=>{a.preventDefault(),a.dataTransfer.dropEffect="copy"}),document.addEventListener("dragleave",a=>{T--,T===0&&(p.style.display="none")}),document.addEventListener("drop",a=>{a.preventDefault(),T=0,p.style.display="none";const d=a.dataTransfer.files;if(d.length>0&&(d[0].type.startsWith("video/")||d[0].name.endsWith(".mp4"))){const f=URL.createObjectURL(d[0]);h.video.src=f,h.video.play(),console.log("Loaded:",d[0].name)}}),ct(b,ce),G=new ie(b,z,ye,Pe),Ne=new Ie({xneg:document.getElementById("xneg"),xpos:document.getElementById("xpos"),yneg:document.getElementById("ypos"),ypos:document.getElementById("ypos"),zneg:document.getElementById("zneg"),zpos:document.getElementById("zpos")},b),!z.textureA.canDrawTo()||!z.textureB.canDrawTo())throw new Error("Rendering to floating-point textures is required but not supported");const S=new v.Vector(-.4,-.75,.2),F=new v.Vector(.4,-.75,.2),k=new C(S);new C(F);for(let a=0;a<1;a++)D.push(new C(S));const U=k.body.radius;for(let a of D)z.addSwimmer(a);ce();for(var M=0;M<20;M++)z.addDrop(Math.random()*2-1,Math.random()*2-1,.06,M&1?.01:-.01);document.getElementById("loading").innerHTML="",l();var y=window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(a){setTimeout(a,0)},W=new Date().getTime();function X(){var a=new Date().getTime();J||(o((a-W)/1e3),s()),W=a,y(X)}y(X),window.onresize=l;var N,Q,O,B=-1,$=0,re=1,oe=2;const de=3;var ne,fe;function V(a,d,f){if(ne=a,fe=d,!f||f.button===0){var g=new v.Raytracer,m=g.getRayForPixel(a*i,d*i),u=g.eye.add(m.multiply(-g.eye.y/m.y));for(let E of D){var _=v.Raytracer.hitTestSphere(g.eye,m,E.body.center,E.body.radius);if(_){B=re,O=E,E.body.cinematic=!0,N=_.hit,Q=g.getRayForPixel(b.canvas.width/2,b.canvas.height/2).negative();return}}Math.abs(u.x)<c.simulation.poolSize.x/2&&Math.abs(u.z)<c.simulation.poolSize.z/2&&(B=$,K(a,d))}else f.button===2?B=oe:f.button===1&&(B=de)}function K(a,d,f){switch(B){case $:{var g=new v.Raytracer,m=g.getRayForPixel(a*i,d*i),u=g.eye.add(m.multiply(-g.eye.y/m.y));z.addDrop(u.x/c.simulation.poolSize.x*2,u.z/c.simulation.poolSize.z*2,.06,.03),J&&(z.updateNormals(),G.updateCaustics(z));break}case re:{var g=new v.Raytracer,m=g.getRayForPixel(a*i,d*i),_=-Q.dot(g.eye.subtract(N))/Q.dot(m),E=g.eye.add(m.multiply(_));const P=O.body.center.add(E.subtract(N)),A=O.body.radius,Z=Math.max(A-c.simulation.poolSize.x/2,Math.min(c.simulation.poolSize.x/2-A,P.x)),se=Math.max(A-c.simulation.poolSize.y,Math.min(10,P.y)),He=Math.max(A-c.simulation.poolSize.z/2,Math.min(c.simulation.poolSize.z/2-A,P.z));O.body.move(new v.Vector(Z,se,He)),N=E,J&&G.updateCaustics(z);break}case oe:{if(f&&f.shiftKey){xe-=a-ne,xe=Math.max(-89.999,Math.min(89.999,xe));break}we-=a-ne,ue-=d-fe,ue=Math.max(-89.999,Math.min(89.999,ue));break}case de:{const w=.001*he;be+=w*(a-ne),Re-=w*(d-fe)}}ne=a,fe=d,J&&s()}function Y(){B=-1,O&&(O.body.cinematic=!C.useGravity)}function ae(a){return a===n||a.parentNode&&ae(a.parentNode)}function x(a){he*=1-a*4e-4,he=Math.max(2,Math.min(1e3,he)),J&&s()}addEventListener("wheel",function(a){var d=a.deltaY;x(-d)}),document.onmousedown=function(a){b.canvas.focus(),ae(a.target)||V(a.pageX,a.pageY,a)},document.onmousemove=function(a){K(a.pageX,a.pageY,a)},document.onmouseup=function(){Y()},document.ontouchstart=function(a){a.touches.length===1&&!ae(a.target)&&(a.preventDefault(),V(a.touches[0].pageX,a.touches[0].pageY,!1))},document.ontouchmove=function(a){a.touches.length===1&&K(a.touches[0].pageX,a.touches[0].pageY)},document.ontouchend=function(a){a.touches.length==0&&Y()};function t(){C.raceHasStarted=!0;for(let a of D)a.started=!1}function r(){C.raceHasStarted=!1;for(let a of D)a.swim(!1)}const e=function(a){if(a.which==32)J=!J;else if(a.which==71){for(let d of D)d.body.cinematic=!d.body.cinematic;C.useGravity=!C.useGravity}else if(a.which==76&&J)s();else if(a.which==74)jump();else if(a.which==67)c.visualizations.areaConservationEnabled=!c.visualizations.areaConservationEnabled,Xe(),console.log("Area conservation "+(c.visualizations.areaConservationEnabled?"enabled.":"disabled."));else if(a.which==80)z.showProjectionGrid=!z.showProjectionGrid,console.log("Projection grid "+(z.showProjectionGrid?"enabled.":"disabled."));else if(a.which==65)z.showAreaConservedGrid=!z.showAreaConservedGrid,console.log("Area conserved grid "+(z.showAreaConservedGrid?"enabled.":"disabled."));else if(a.which==83){if(C.swimming=!C.swimming,C.swimming)for(let d of D)d.swim(!0);else r();console.log("Swimming "+(C.swimming?"enabled.":"disabled."))}else if(a.which==86)c.video.show=!c.video.show;else if(a.which==79){if(c.simulation.poolSize.x=25,c.simulation.poolSize.y=2,c.simulation.poolSize.z=50,L.x=1024,L.y=2048,c.visualizations.areaConservationEnabled=!1,c.simulation.waterDamping=.1,D.length!=Fe)for(let d=D.length;d<Fe;d++){const f=new C(S);D.push(f),z.addSwimmer(f)}me=0,h.copyVideo&&(h.video.currentTime=me),ce(),c.focal=31.75,c.visualizations.sparks.fov=c.focal*2*Math.PI/360,b.matrixMode(b.PROJECTION),b.loadIdentity(),b.perspective(c.focal,b.canvas.width/b.canvas.height,.01,100),b.matrixMode(b.MODELVIEW),be=-.42,Re=1.18,he=52.5,ue=-24,we=-261.5,xe=-4,console.log("Olympic mode enabled.")}else if(a.which==87){if(C.raceHasStarted){C.raceHasStarted=!1,r();return}z.WR_position=0,me=Be,h.copyVideo&&(h.video.currentTime=me),t(),C.useGravity=!0;for(let d of D)d.hasDove=!1,d.hasBrokeOut=!1}else a.which==72?(document.getElementById("commands").hidden=!document.getElementById("commands").hidden,document.getElementById("h").hidden=!document.getElementById("h").hidden):a.which==40?(L.x>129&&(L.x=Math.round(L.x/2)),ce(),console.log("decreasing x resolution")):a.which==38?(L.x<16384&&(L.x=Math.round(L.x*2)),ce(),console.log("increasing x resolution")):a.which==37?(L.y>129&&(L.y=Math.round(L.y/2)),ce(),console.log("decreasing y resolution")):a.which==39&&(L.y<16384&&(L.y=Math.round(L.y*2)),ce(),console.log("increasing y resolution"))};b.canvas.addEventListener("keydown",e);function o(a,d){if(!(a>1)){if(B==re)for(let f of D)f.body.velocity=new v.Vector(0,0,0);ge=me-Be;for(let f of D)f.update(a,ge);z.updateSpheres(a);for(let f=0;f<c.numSteps;f++)z.stepSimulation();G.updateCaustics(z),me+=a,ut(a)}}function s(a){v.keys.L&&(G.lightDir=v.Vector.fromAngles((90-we)*Math.PI/180,-ue*Math.PI/180),J&&G.updateCaustics(z)),c.isOneVisualizationEnabled()&&C.updateAttributesTexture(D),z.addOrRemoveVisualizationWaves(!0,D,ge),z.updateNormals(),b.clear(b.COLOR_BUFFER_BIT|b.DEPTH_BUFFER_BIT),b.loadIdentity(),b.translate(be,Re,-he),b.rotate(-xe,0,0,1),b.rotate(-ue,1,0,0),b.rotate(-we,0,1,0),b.translate(0,.5,0),b.enable(b.DEPTH_TEST),G.sphereCenter=D[0].body.center,G.sphereRadius=U,G.renderCube(z),G.renderWater(z,Ne,D,ge,c.visualizations.shadow),G.renderSpheres(z),h.render(ge),b.disable(b.DEPTH_TEST),z.addOrRemoveVisualizationWaves(!1,D,ge)}};
//# sourceMappingURL=swimming-a6gjjpha.js.map
