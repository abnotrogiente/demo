var He=Object.defineProperty;var De=i=>{throw TypeError(i)};var qe=(i,a,l)=>a in i?He(i,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):i[a]=l;var Y=(i,a,l)=>qe(i,typeof a!="symbol"?a+"":a,l),Ye=(i,a,l)=>a.has(i)||De("Cannot "+l);var Be=(i,a,l)=>a.has(i)?De("Cannot add the same private member more than once"):a instanceof WeakSet?a.add(i):a.set(i,l);var ee=(i,a,l)=>(Ye(i,a,"access private method"),l);import"./modulepreload-polyfill-B5Qt9EMX.js";import{g as je}from"./lil-gui.module.min-Vka56b52.js";var g=function(){var i,a={create:function(t){t=t||{};var r=document.createElement("canvas");r.width=800,r.height=600,"alpha"in t||(t.alpha=!1);try{i=r.getContext("webgl2",t)}catch{}try{i=i||r.getContext("experimental-webgl",t)}catch{}if(!i)throw new Error("WebGL not supported");return i.HALF_FLOAT_OES=36193,l(),h(),p(),L(),i},keys:{},Matrix:w,Indexer:W,Buffer:X,Mesh:k,HitTest:N,Raytracer:$,Shader:de,Texture:V,Vector:x};function l(){i.MODELVIEW=U|1,i.PROJECTION=U|2;var t=new w,r=new w;i.modelviewMatrix=new w,i.projectionMatrix=new w;var e=[],o=[],n,s;i.matrixMode=function(f){switch(f){case i.MODELVIEW:n="modelviewMatrix",s=e;break;case i.PROJECTION:n="projectionMatrix",s=o;break;default:throw new Error("invalid matrix mode "+f)}},i.loadIdentity=function(){w.identity(i[n])},i.loadMatrix=function(f){for(var d=f.m,v=i[n].m,m=0;m<16;m++)v[m]=d[m]},i.multMatrix=function(f){i.loadMatrix(w.multiply(i[n],f,r))},i.perspective=function(f,d,v,m){i.multMatrix(w.perspective(f,d,v,m,t))},i.frustum=function(f,d,v,m,u,_){i.multMatrix(w.frustum(f,d,v,m,u,_,t))},i.ortho=function(f,d,v,m,u,_){i.multMatrix(w.ortho(f,d,v,m,u,_,t))},i.scale=function(f,d,v){i.multMatrix(w.scale(f,d,v,t))},i.translate=function(f,d,v){i.multMatrix(w.translate(f,d,v,t))},i.rotate=function(f,d,v,m){i.multMatrix(w.rotate(f,d,v,m,t))},i.lookAt=function(f,d,v,m,u,_,T,y,E){i.multMatrix(w.lookAt(f,d,v,m,u,_,T,y,E,t))},i.pushMatrix=function(){s.push(Array.prototype.slice.call(i[n].m))},i.popMatrix=function(){var f=s.pop();i[n].m=M?new Float32Array(f):f},i.project=function(f,d,v,m,u,_){m=m||i.modelviewMatrix,u=u||i.projectionMatrix,_=_||i.getParameter(i.VIEWPORT);var T=u.transformPoint(m.transformPoint(new x(f,d,v)));return new x(_[0]+_[2]*(T.x*.5+.5),_[1]+_[3]*(T.y*.5+.5),T.z*.5+.5)},i.unProject=function(f,d,v,m,u,_){m=m||i.modelviewMatrix,u=u||i.projectionMatrix,_=_||i.getParameter(i.VIEWPORT);var T=new x((f-_[0])/_[2]*2-1,(d-_[1])/_[3]*2-1,v*2-1);return w.inverse(w.multiply(u,m,t),r).transformPoint(T)},i.matrixMode(i.MODELVIEW)}function h(){var t={mesh:new k({coords:!0,colors:!0,triangles:!1}),mode:-1,coord:[0,0,0,0],color:[1,1,1,1],shader:new de("      uniform float pointSize;      out vec4 color;      out vec4 coord;      void main() {        color = gl_Color;        coord = gl_TexCoord;        gl_Position = gl_ModelViewProjectionMatrix * gl_Vertex;        gl_PointSize = pointSize;      }    ","      uniform sampler2D tex;      uniform float pointSize;      uniform bool useTexture;      in vec4 color;      in vec4 coord;      out vec4 fragColor;      void main() {        fragColor = color;        if (useTexture) fragColor *= texture(tex, coord.xy);      }    ")};i.pointSize=function(r){t.shader.uniforms({pointSize:r})},i.begin=function(r){if(t.mode!=-1)throw new Error("mismatched gl.begin() and gl.end() calls");t.mode=r,t.mesh.colors=[],t.mesh.coords=[],t.mesh.vertices=[]},i.color=function(r,e,o,n){t.color=arguments.length==1?r.toArray().concat(1):[r,e,o,n||1]},i.texCoord=function(r,e){t.coord=arguments.length==1?r.toArray(2):[r,e]},i.vertex=function(r,e,o){t.mesh.colors.push(t.color),t.mesh.coords.push(t.coord),t.mesh.vertices.push(arguments.length==1?r.toArray():[r,e,o])},i.end=function(){if(t.mode==-1)throw new Error("mismatched gl.begin() and gl.end() calls");t.mesh.compile(),t.shader.uniforms({useTexture:!!i.getParameter(i.TEXTURE_BINDING_2D)}).draw(t.mesh,t.mode),t.mode=-1}}function p(){var t=i,r=0,e=0,o={},n=!1,s=Object.prototype.hasOwnProperty;function f(){for(var y in o)if(s.call(o,y)&&o[y])return!0;return!1}function d(y){var E={};for(var C in y)typeof y[C]=="function"?E[C]=function(Z){return function(){Z.apply(y,arguments)}}(y[C]):E[C]=y[C];E.original=y,E.x=E.pageX,E.y=E.pageY;for(var P=i.canvas;P;P=P.offsetParent)E.x-=P.offsetLeft,E.y-=P.offsetTop;return n?(E.deltaX=E.x-r,E.deltaY=E.y-e):(E.deltaX=0,E.deltaY=0,n=!0),r=E.x,e=E.y,E.dragging=f(),E.preventDefault=function(){E.original.preventDefault()},E.stopPropagation=function(){E.original.stopPropagation()},E}function v(y){i=t,f()||(R(document,"mousemove",m),R(document,"mouseup",u),F(i.canvas,"mousemove",m),F(i.canvas,"mouseup",u)),o[y.which]=!0,y=d(y),i.onmousedown&&i.onmousedown(y),y.preventDefault()}function m(y){i=t,y=d(y),i.onmousemove&&i.onmousemove(y),y.preventDefault()}function u(y){i=t,o[y.which]=!1,f()||(F(document,"mousemove",m),F(document,"mouseup",u),R(i.canvas,"mousemove",m),R(i.canvas,"mouseup",u)),y=d(y),i.onmouseup&&i.onmouseup(y),y.preventDefault()}function _(){n=!1}function T(){o={},n=!1}R(i.canvas,"mousedown",v),R(i.canvas,"mousemove",m),R(i.canvas,"mouseup",u),R(i.canvas,"mouseover",_),R(i.canvas,"mouseout",_),R(document,"contextmenu",T)}function b(t){var r={8:"BACKSPACE",9:"TAB",13:"ENTER",16:"SHIFT",27:"ESCAPE",32:"SPACE",37:"LEFT",38:"UP",39:"RIGHT",40:"DOWN"};return r[t]||(t>=65&&t<=90?String.fromCharCode(t):null)}function R(t,r,e){t.addEventListener(r,e)}function F(t,r,e){t.removeEventListener(r,e)}R(document,"keydown",function(t){if(!t.altKey&&!t.ctrlKey&&!t.metaKey){var r=b(t.keyCode);r&&(a.keys[r]=!0),a.keys[t.keyCode]=!0}}),R(document,"keyup",function(t){if(!t.altKey&&!t.ctrlKey&&!t.metaKey){var r=b(t.keyCode);r&&(a.keys[r]=!1),a.keys[t.keyCode]=!1}});function L(){(function(t){i.makeCurrent=function(){i=t}})(i),i.animate=function(){var t=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(n){setTimeout(n,16.666666666666668)},r=new Date().getTime(),e=i;function o(){i=e;var n=new Date().getTime();i.onupdate&&i.onupdate((n-r)/1e3),i.ondraw&&i.ondraw(),t(o),r=n}o()},i.fullscreen=function(t){t=t||{};var r=t.paddingTop||0,e=t.paddingLeft||0,o=t.paddingRight||0,n=t.paddingBottom||0;if(!document.body)throw new Error("document.body doesn't exist yet (call gl.fullscreen() from window.onload() or from inside the <body> tag)");document.body.appendChild(i.canvas),document.body.style.overflow="hidden",i.canvas.style.position="absolute",i.canvas.style.left=e+"px",i.canvas.style.top=r+"px";function s(){i.canvas.width=window.innerWidth-e-o,i.canvas.height=window.innerHeight-r-n,i.viewport(0,0,i.canvas.width,i.canvas.height),(t.camera||!("camera"in t))&&(i.matrixMode(i.PROJECTION),i.loadIdentity(),i.perspective(t.fov||45,i.canvas.width/i.canvas.height,t.near||.1,t.far||1e3),i.matrixMode(i.MODELVIEW)),i.ondraw&&i.ondraw()}R(window,"resize",s),s()}}var U=305397760,M=typeof Float32Array<"u";function w(){var t=Array.prototype.concat.apply([],arguments);t.length||(t=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),this.m=M?new Float32Array(t):t}w.prototype={inverse:function(){return w.inverse(this,new w)},transpose:function(){return w.transpose(this,new w)},multiply:function(t){return w.multiply(this,t,new w)},transformPoint:function(t){var r=this.m;return new x(r[0]*t.x+r[1]*t.y+r[2]*t.z+r[3],r[4]*t.x+r[5]*t.y+r[6]*t.z+r[7],r[8]*t.x+r[9]*t.y+r[10]*t.z+r[11]).divide(r[12]*t.x+r[13]*t.y+r[14]*t.z+r[15])},transformVector:function(t){var r=this.m;return new x(r[0]*t.x+r[1]*t.y+r[2]*t.z,r[4]*t.x+r[5]*t.y+r[6]*t.z,r[8]*t.x+r[9]*t.y+r[10]*t.z)}},w.inverse=function(t,r){r=r||new w;var e=t.m,o=r.m;o[0]=e[5]*e[10]*e[15]-e[5]*e[14]*e[11]-e[6]*e[9]*e[15]+e[6]*e[13]*e[11]+e[7]*e[9]*e[14]-e[7]*e[13]*e[10],o[1]=-e[1]*e[10]*e[15]+e[1]*e[14]*e[11]+e[2]*e[9]*e[15]-e[2]*e[13]*e[11]-e[3]*e[9]*e[14]+e[3]*e[13]*e[10],o[2]=e[1]*e[6]*e[15]-e[1]*e[14]*e[7]-e[2]*e[5]*e[15]+e[2]*e[13]*e[7]+e[3]*e[5]*e[14]-e[3]*e[13]*e[6],o[3]=-e[1]*e[6]*e[11]+e[1]*e[10]*e[7]+e[2]*e[5]*e[11]-e[2]*e[9]*e[7]-e[3]*e[5]*e[10]+e[3]*e[9]*e[6],o[4]=-e[4]*e[10]*e[15]+e[4]*e[14]*e[11]+e[6]*e[8]*e[15]-e[6]*e[12]*e[11]-e[7]*e[8]*e[14]+e[7]*e[12]*e[10],o[5]=e[0]*e[10]*e[15]-e[0]*e[14]*e[11]-e[2]*e[8]*e[15]+e[2]*e[12]*e[11]+e[3]*e[8]*e[14]-e[3]*e[12]*e[10],o[6]=-e[0]*e[6]*e[15]+e[0]*e[14]*e[7]+e[2]*e[4]*e[15]-e[2]*e[12]*e[7]-e[3]*e[4]*e[14]+e[3]*e[12]*e[6],o[7]=e[0]*e[6]*e[11]-e[0]*e[10]*e[7]-e[2]*e[4]*e[11]+e[2]*e[8]*e[7]+e[3]*e[4]*e[10]-e[3]*e[8]*e[6],o[8]=e[4]*e[9]*e[15]-e[4]*e[13]*e[11]-e[5]*e[8]*e[15]+e[5]*e[12]*e[11]+e[7]*e[8]*e[13]-e[7]*e[12]*e[9],o[9]=-e[0]*e[9]*e[15]+e[0]*e[13]*e[11]+e[1]*e[8]*e[15]-e[1]*e[12]*e[11]-e[3]*e[8]*e[13]+e[3]*e[12]*e[9],o[10]=e[0]*e[5]*e[15]-e[0]*e[13]*e[7]-e[1]*e[4]*e[15]+e[1]*e[12]*e[7]+e[3]*e[4]*e[13]-e[3]*e[12]*e[5],o[11]=-e[0]*e[5]*e[11]+e[0]*e[9]*e[7]+e[1]*e[4]*e[11]-e[1]*e[8]*e[7]-e[3]*e[4]*e[9]+e[3]*e[8]*e[5],o[12]=-e[4]*e[9]*e[14]+e[4]*e[13]*e[10]+e[5]*e[8]*e[14]-e[5]*e[12]*e[10]-e[6]*e[8]*e[13]+e[6]*e[12]*e[9],o[13]=e[0]*e[9]*e[14]-e[0]*e[13]*e[10]-e[1]*e[8]*e[14]+e[1]*e[12]*e[10]+e[2]*e[8]*e[13]-e[2]*e[12]*e[9],o[14]=-e[0]*e[5]*e[14]+e[0]*e[13]*e[6]+e[1]*e[4]*e[14]-e[1]*e[12]*e[6]-e[2]*e[4]*e[13]+e[2]*e[12]*e[5],o[15]=e[0]*e[5]*e[10]-e[0]*e[9]*e[6]-e[1]*e[4]*e[10]+e[1]*e[8]*e[6]+e[2]*e[4]*e[9]-e[2]*e[8]*e[5];for(var n=e[0]*o[0]+e[1]*o[4]+e[2]*o[8]+e[3]*o[12],s=0;s<16;s++)o[s]/=n;return r},w.transpose=function(t,r){r=r||new w;var e=t.m,o=r.m;return o[0]=e[0],o[1]=e[4],o[2]=e[8],o[3]=e[12],o[4]=e[1],o[5]=e[5],o[6]=e[9],o[7]=e[13],o[8]=e[2],o[9]=e[6],o[10]=e[10],o[11]=e[14],o[12]=e[3],o[13]=e[7],o[14]=e[11],o[15]=e[15],r},w.multiply=function(t,r,e){e=e||new w;var o=t.m,n=r.m,s=e.m;return s[0]=o[0]*n[0]+o[1]*n[4]+o[2]*n[8]+o[3]*n[12],s[1]=o[0]*n[1]+o[1]*n[5]+o[2]*n[9]+o[3]*n[13],s[2]=o[0]*n[2]+o[1]*n[6]+o[2]*n[10]+o[3]*n[14],s[3]=o[0]*n[3]+o[1]*n[7]+o[2]*n[11]+o[3]*n[15],s[4]=o[4]*n[0]+o[5]*n[4]+o[6]*n[8]+o[7]*n[12],s[5]=o[4]*n[1]+o[5]*n[5]+o[6]*n[9]+o[7]*n[13],s[6]=o[4]*n[2]+o[5]*n[6]+o[6]*n[10]+o[7]*n[14],s[7]=o[4]*n[3]+o[5]*n[7]+o[6]*n[11]+o[7]*n[15],s[8]=o[8]*n[0]+o[9]*n[4]+o[10]*n[8]+o[11]*n[12],s[9]=o[8]*n[1]+o[9]*n[5]+o[10]*n[9]+o[11]*n[13],s[10]=o[8]*n[2]+o[9]*n[6]+o[10]*n[10]+o[11]*n[14],s[11]=o[8]*n[3]+o[9]*n[7]+o[10]*n[11]+o[11]*n[15],s[12]=o[12]*n[0]+o[13]*n[4]+o[14]*n[8]+o[15]*n[12],s[13]=o[12]*n[1]+o[13]*n[5]+o[14]*n[9]+o[15]*n[13],s[14]=o[12]*n[2]+o[13]*n[6]+o[14]*n[10]+o[15]*n[14],s[15]=o[12]*n[3]+o[13]*n[7]+o[14]*n[11]+o[15]*n[15],e},w.identity=function(t){t=t||new w;var r=t.m;return r[0]=r[5]=r[10]=r[15]=1,r[1]=r[2]=r[3]=r[4]=r[6]=r[7]=r[8]=r[9]=r[11]=r[12]=r[13]=r[14]=0,t},w.perspective=function(t,r,e,o,n){var s=Math.tan(t*Math.PI/360)*e,f=s*r;return w.frustum(-f,f,-s,s,e,o,n)},w.frustum=function(t,r,e,o,n,s,f){f=f||new w;var d=f.m;return d[0]=2*n/(r-t),d[1]=0,d[2]=(r+t)/(r-t),d[3]=0,d[4]=0,d[5]=2*n/(o-e),d[6]=(o+e)/(o-e),d[7]=0,d[8]=0,d[9]=0,d[10]=-(s+n)/(s-n),d[11]=-2*s*n/(s-n),d[12]=0,d[13]=0,d[14]=-1,d[15]=0,f},w.ortho=function(t,r,e,o,n,s,f){f=f||new w;var d=f.m;return d[0]=2/(r-t),d[1]=0,d[2]=0,d[3]=-(r+t)/(r-t),d[4]=0,d[5]=2/(o-e),d[6]=0,d[7]=-(o+e)/(o-e),d[8]=0,d[9]=0,d[10]=-2/(s-n),d[11]=-(s+n)/(s-n),d[12]=0,d[13]=0,d[14]=0,d[15]=1,f},w.scale=function(t,r,e,o){o=o||new w;var n=o.m;return n[0]=t,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=r,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=e,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,o},w.translate=function(t,r,e,o){o=o||new w;var n=o.m;return n[0]=1,n[1]=0,n[2]=0,n[3]=t,n[4]=0,n[5]=1,n[6]=0,n[7]=r,n[8]=0,n[9]=0,n[10]=1,n[11]=e,n[12]=0,n[13]=0,n[14]=0,n[15]=1,o},w.rotate=function(t,r,e,o,n){if(!t||!r&&!e&&!o)return w.identity(n);n=n||new w;var s=n.m,f=Math.sqrt(r*r+e*e+o*o);t*=Math.PI/180,r/=f,e/=f,o/=f;var d=Math.cos(t),v=Math.sin(t),m=1-d;return s[0]=r*r*m+d,s[1]=r*e*m-o*v,s[2]=r*o*m+e*v,s[3]=0,s[4]=e*r*m+o*v,s[5]=e*e*m+d,s[6]=e*o*m-r*v,s[7]=0,s[8]=o*r*m-e*v,s[9]=o*e*m+r*v,s[10]=o*o*m+d,s[11]=0,s[12]=0,s[13]=0,s[14]=0,s[15]=1,n},w.lookAt=function(t,r,e,o,n,s,f,d,v,m){m=m||new w;var u=m.m,_=new x(t,r,e),T=new x(o,n,s),y=new x(f,d,v),E=_.subtract(T).unit(),C=y.cross(E).unit(),P=E.cross(C).unit();return u[0]=C.x,u[1]=C.y,u[2]=C.z,u[3]=-C.dot(_),u[4]=P.x,u[5]=P.y,u[6]=P.z,u[7]=-P.dot(_),u[8]=E.x,u[9]=E.y,u[10]=E.z,u[11]=-E.dot(_),u[12]=0,u[13]=0,u[14]=0,u[15]=1,m};function W(){this.unique=[],this.indices=[],this.map={}}W.prototype={add:function(t){var r=JSON.stringify(t);return r in this.map||(this.map[r]=this.unique.length,this.unique.push(t)),this.map[r]}};function X(t,r){this.buffer=null,this.target=t,this.type=r,this.data=[]}X.prototype={compile:function(t){for(var r=[],e=0,o=1e4;e<this.data.length;e+=o)r=Array.prototype.concat.apply(r,this.data.slice(e,e+o));var n=this.data.length?r.length/this.data.length:0;if(n!=Math.round(n))throw new Error("buffer elements not of consistent size, average size is "+n);this.buffer=this.buffer||i.createBuffer(),this.buffer.length=r.length,this.buffer.spacing=n,i.bindBuffer(this.target,this.buffer),i.bufferData(this.target,new this.type(r),t||i.STATIC_DRAW)}};function k(t){t=t||{},this.vertexBuffers={},this.indexBuffers={},this.addVertexBuffer("vertices","gl_Vertex"),t.coords&&this.addVertexBuffer("coords","gl_TexCoord"),t.normals&&this.addVertexBuffer("normals","gl_Normal"),t.colors&&this.addVertexBuffer("colors","gl_Color"),(!("triangles"in t)||t.triangles)&&this.addIndexBuffer("triangles"),t.lines&&this.addIndexBuffer("lines")}k.prototype={addVertexBuffer:function(t,r){var e=this.vertexBuffers[r]=new X(i.ARRAY_BUFFER,Float32Array);e.name=t,this[t]=[]},addIndexBuffer:function(t){this.indexBuffers[t]=new X(i.ELEMENT_ARRAY_BUFFER,Uint16Array),this[t]=[]},compile:function(){for(var t in this.vertexBuffers){var r=this.vertexBuffers[t];r.data=this[r.name],r.compile()}for(var e in this.indexBuffers){var r=this.indexBuffers[e];r.data=this[e],r.compile()}},transform:function(t){if(this.vertices=this.vertices.map(function(e){return t.transformPoint(x.fromArray(e)).toArray()}),this.normals){var r=t.inverse().transpose();this.normals=this.normals.map(function(e){return r.transformVector(x.fromArray(e)).unit().toArray()})}return this.compile(),this},computeNormals:function(){this.normals||this.addVertexBuffer("normals","gl_Normal");for(var t=0;t<this.vertices.length;t++)this.normals[t]=new x;for(var t=0;t<this.triangles.length;t++){var r=this.triangles[t],e=x.fromArray(this.vertices[r[0]]),o=x.fromArray(this.vertices[r[1]]),n=x.fromArray(this.vertices[r[2]]),s=o.subtract(e).cross(n.subtract(e)).unit();this.normals[r[0]]=this.normals[r[0]].add(s),this.normals[r[1]]=this.normals[r[1]].add(s),this.normals[r[2]]=this.normals[r[2]].add(s)}for(var t=0;t<this.vertices.length;t++)this.normals[t]=this.normals[t].unit().toArray();return this.compile(),this},computeWireframe:function(){for(var t=new W,r=0;r<this.triangles.length;r++)for(var e=this.triangles[r],o=0;o<e.length;o++){var n=e[o],s=e[(o+1)%e.length];t.add([Math.min(n,s),Math.max(n,s)])}return this.lines||this.addIndexBuffer("lines"),this.lines=t.unique,this.compile(),this},getAABB:function(){var t={min:new x(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)};t.max=t.min.negative();for(var r=0;r<this.vertices.length;r++){var e=x.fromArray(this.vertices[r]);t.min=x.min(t.min,e),t.max=x.max(t.max,e)}return t},getBoundingSphere:function(){for(var t=this.getAABB(),r={center:t.min.add(t.max).divide(2),radius:0},e=0;e<this.vertices.length;e++)r.radius=Math.max(r.radius,x.fromArray(this.vertices[e]).subtract(r.center).length());return r}},k.plane=function(t){t=t||{};for(var r=new k(t),e=t.detailX||t.detail||1,o=t.detailY||t.detail||1,n=t.width||2,s=t.height||2,f=0;f<=o;f++)for(var d=f/o,v=0;v<=e;v++){var m=v/e;if(r.vertices.push([(m-.5)*n,(d-.5)*s,0]),r.coords&&r.coords.push([m,d]),r.normals&&r.normals.push([0,0,1]),v<e&&f<o){var u=v+f*(e+1);r.triangles.push([u,u+1,u+e+1]),r.triangles.push([u+e+1,u+1,u+e+2])}}return r.compile(),r};var Q=[[0,4,2,6,-1,0,0],[1,3,5,7,1,0,0],[0,1,4,5,0,-1,0],[2,6,3,7,0,1,0],[0,2,1,3,0,0,-1],[4,5,6,7,0,0,1]];function O(t){return new x((t&1)*2-1,(t&2)-1,(t&4)/2-1)}k.cube=function(t){for(var r=new k(t),e=t&&t.width||2,o=t&&t.height||2,n=t&&t.depth||2,s=0;s<Q.length;s++){for(var f=Q[s],d=s*4,v=0;v<4;v++){var m=f[v];const u=O(m).toArray();u[0]*=e/2,u[1]*=o/2,u[2]*=n/2,r.vertices.push(u),r.coords&&r.coords.push([v&1,(v&2)/2]),r.normals&&r.normals.push(f.slice(4,7))}r.triangles.push([d,d+1,d+2]),r.triangles.push([d+2,d+1,d+3])}return r.compile(),r},k.sphere=function(t){function r(P,Z,se){return v?[P,se,Z]:[P,Z,se]}function e(P){return P+(P-P*P)/2}t=t||{};for(var o=new k(t),n=new W,s=t.detail||6,f=0;f<8;f++)for(var d=O(f),v=d.x*d.y*d.z>0,m=[],u=0;u<=s;u++){for(var _=0;u+_<=s;_++){var T=u/s,y=_/s,E=(s-u-_)/s,C={vertex:new x(e(T),e(y),e(E)).unit().multiply(d).toArray()};o.coords&&(C.coord=d.y>0?[1-T,E]:[E,1-T]),m.push(n.add(C))}if(u>0)for(var _=0;u+_<=s;_++){var T=(u-1)*(s+1)+(u-1-(u-1)*(u-1))/2+_,y=u*(s+1)+(u-u*u)/2+_;o.triangles.push(r(m[T],m[T+1],m[y])),u+_<s&&o.triangles.push(r(m[y],m[T+1],m[y+1]))}}return o.vertices=n.unique.map(function(P){return P.vertex}),o.coords&&(o.coords=n.unique.map(function(P){return P.coord})),o.normals&&(o.normals=o.vertices),o.compile(),o},k.load=function(t,r){r=r||{},"coords"in r||(r.coords=!!t.coords),"normals"in r||(r.normals=!!t.normals),"colors"in r||(r.colors=!!t.colors),"triangles"in r||(r.triangles=!!t.triangles),"lines"in r||(r.lines=!!t.lines);var e=new k(r);return e.vertices=t.vertices,e.coords&&(e.coords=t.coords),e.normals&&(e.normals=t.normals),e.colors&&(e.colors=t.colors),e.triangles&&(e.triangles=t.triangles),e.lines&&(e.lines=t.lines),e.compile(),e};function N(t,r,e){this.t=arguments.length?t:Number.MAX_VALUE,this.hit=r,this.normal=e}N.prototype={mergeWith:function(t){t.t>0&&t.t<this.t&&(this.t=t.t,this.hit=t.hit,this.normal=t.normal)}};function $(){var t=i.getParameter(i.VIEWPORT),r=i.modelviewMatrix.m,e=new x(r[0],r[4],r[8]),o=new x(r[1],r[5],r[9]),n=new x(r[2],r[6],r[10]),s=new x(r[3],r[7],r[11]);this.eye=new x(-s.dot(e),-s.dot(o),-s.dot(n));var f=t[0],d=f+t[2],v=t[1],m=v+t[3];this.ray00=i.unProject(f,v,1).subtract(this.eye),this.ray10=i.unProject(d,v,1).subtract(this.eye),this.ray01=i.unProject(f,m,1).subtract(this.eye),this.ray11=i.unProject(d,m,1).subtract(this.eye),this.viewport=t}$.prototype={getRayForPixel:function(t,r){t=(t-this.viewport[0])/this.viewport[2],r=1-(r-this.viewport[1])/this.viewport[3];var e=x.lerp(this.ray00,this.ray10,t),o=x.lerp(this.ray01,this.ray11,t);return x.lerp(e,o,r).unit()}},$.hitTestBox=function(t,r,e,o){var n=e.subtract(t).divide(r),s=o.subtract(t).divide(r),f=x.min(n,s),d=x.max(n,s),v=f.max(),m=d.min();if(v>0&&v<m){var u=1e-6,_=t.add(r.multiply(v));return e=e.add(u),o=o.subtract(u),new N(v,_,new x((_.x>o.x)-(_.x<e.x),(_.y>o.y)-(_.y<e.y),(_.z>o.z)-(_.z<e.z)))}return null},$.hitTestSphere=function(t,r,e,o){var n=t.subtract(e),s=r.dot(r),f=2*r.dot(n),d=n.dot(n)-o*o,v=f*f-4*s*d;if(v>0){var m=(-f-Math.sqrt(v))/(2*s),u=t.add(r.multiply(m));return new N(m,u,u.subtract(e).divide(o))}return null},$.hitTestTriangle=function(t,r,e,o,n){var s=o.subtract(e),f=n.subtract(e),d=s.cross(f).unit(),v=d.dot(e.subtract(t))/d.dot(r);if(v>0){var m=t.add(r.multiply(v)),u=m.subtract(e),_=f.dot(f),T=f.dot(s),y=f.dot(u),E=s.dot(s),C=s.dot(u),P=_*E-T*T,Z=(E*y-T*C)/P,se=(_*C-T*y)/P;if(Z>=0&&se>=0&&Z+se<=1)return new N(v,m,d)}return null};function re(t,r,e){let o;for(;(o=t.exec(r))!=null;)e(o)}var oe="LIGHTGL";function de(t,r){function e(_){var T=document.getElementById(_);return T?T.text:_}t=e(t),r=e(r);var o="    uniform mat3 gl_NormalMatrix;    uniform mat4 gl_ModelViewMatrix;    uniform mat4 gl_ProjectionMatrix;    uniform mat4 gl_ModelViewProjectionMatrix;    uniform mat4 gl_ModelViewMatrixInverse;    uniform mat4 gl_ProjectionMatrixInverse;    uniform mat4 gl_ModelViewProjectionMatrixInverse;  ",n=`#version 300 es
    `+o+"    in vec4 gl_Vertex;    in vec4 gl_TexCoord;    in vec3 gl_Normal;    in vec4 gl_Color;    vec4 ftransform() {      return gl_ModelViewProjectionMatrix * gl_Vertex;    }  ",s=`#version 300 es
    precision highp float;
  `+o,f=t+r,d={};re(/\b(gl_[^;]*)\b;/g,o,function(_){var T=_[1];if(f.indexOf(T)!=-1){var y=T.replace(/[a-z_]/g,"");d[y]=oe+T}}),f.indexOf("ftransform")!=-1&&(d.MVPM=oe+"gl_ModelViewProjectionMatrix"),this.usedMatrices=d;function v(_,T){var y={},E=/^((\s*\/\/.*\n|\s*#extension.*\n)+)[^]*$/.exec(T);return T=E?E[1]+_+T.substr(E[1].length):_+T,re(/\bgl_\w+\b/g,_,function(C){C in y||(T=T.replace(new RegExp("\\b"+C+"\\b","g"),oe+C),y[C]=!0)}),T}t=v(n,t),r=v(s,r);function m(_,T){var y=i.createShader(_);if(i.shaderSource(y,T),i.compileShader(y),!i.getShaderParameter(y,i.COMPILE_STATUS))throw new Error("compile error: "+i.getShaderInfoLog(y));return y}if(this.program=i.createProgram(),i.attachShader(this.program,m(i.VERTEX_SHADER,t)),i.attachShader(this.program,m(i.FRAGMENT_SHADER,r)),i.linkProgram(this.program),!i.getProgramParameter(this.program,i.LINK_STATUS))throw new Error("link error: "+i.getProgramInfoLog(this.program));this.attributes={},this.uniformLocations={};var u={};re(/uniform\s+sampler(1D|2D|3D|Cube)\s+(\w+)\s*;/g,t+r,function(_){u[_[2]]=1}),this.isSampler=u}function ne(t){var r=Object.prototype.toString.call(t);return r=="[object Array]"||r=="[object Float32Array]"}function fe(t){var r=Object.prototype.toString.call(t);return r=="[object Number]"||r=="[object Boolean]"}new w,new w,de.prototype={uniforms:function(t){i.useProgram(this.program);for(var r in t){var e=this.uniformLocations[r]||i.getUniformLocation(this.program,r);if(e){this.uniformLocations[r]=e;var o=t[r];if(o instanceof x?o=[o.x,o.y,o.z]:o instanceof w&&(o=o.m),ne(o))switch(o.length){case 1:i.uniform1fv(e,new Float32Array(o));break;case 2:i.uniform2fv(e,new Float32Array(o));break;case 3:i.uniform3fv(e,new Float32Array(o));break;case 4:i.uniform4fv(e,new Float32Array(o));break;case 9:i.uniformMatrix3fv(e,!1,new Float32Array([o[0],o[3],o[6],o[1],o[4],o[7],o[2],o[5],o[8]]));break;case 16:i.uniformMatrix4fv(e,!1,new Float32Array([o[0],o[4],o[8],o[12],o[1],o[5],o[9],o[13],o[2],o[6],o[10],o[14],o[3],o[7],o[11],o[15]]));break;default:throw new Error(`don't know how to load uniform "`+r+'" of length '+o.length)}else if(fe(o))(this.isSampler[r]?i.uniform1i:i.uniform1f).call(i,e,o);else throw new Error('attempted to set uniform "'+r+'" to invalid value '+o)}}return this},draw:function(t,r){this.drawBuffers(t.vertexBuffers,t.indexBuffers[r==i.LINES?"lines":"triangles"],arguments.length<2?i.TRIANGLES:r)},drawBuffers:function(t,r,e){var o=this.usedMatrices,n=i.modelviewMatrix,s=i.projectionMatrix,f=o.MVMI||o.NM?n.inverse():null,d=o.PMI?s.inverse():null,v=o.MVPM||o.MVPMI?s.multiply(n):null,m={};if(o.MVM&&(m[o.MVM]=n),o.MVMI&&(m[o.MVMI]=f),o.PM&&(m[o.PM]=s),o.PMI&&(m[o.PMI]=d),o.MVPM&&(m[o.MVPM]=v),o.MVPMI&&(m[o.MVPMI]=v.inverse()),o.NM){var u=f.m;m[o.NM]=[u[0],u[4],u[8],u[1],u[5],u[9],u[2],u[6],u[10]]}this.uniforms(m);var _=0;for(var T in t){var y=t[T],E=this.attributes[T]||i.getAttribLocation(this.program,T.replace(/^(gl_.*)$/,oe+"$1"));E==-1||!y.buffer||(this.attributes[T]=E,i.bindBuffer(i.ARRAY_BUFFER,y.buffer),i.enableVertexAttribArray(E),i.vertexAttribPointer(E,y.buffer.spacing,i.FLOAT,!1,0,0),_=y.buffer.length/y.buffer.spacing)}for(var T in this.attributes)T in t||i.disableVertexAttribArray(this.attributes[T]);return _&&(!r||r.buffer)&&(r?(i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,r.buffer),i.drawElements(e,r.buffer.length,i.UNSIGNED_SHORT,0)):i.drawArrays(e,0,_)),this}};function V(t,r,e){e=e||{},this.width=t,this.height=r,this.id=i.createTexture();let o=e.type||i.UNSIGNED_BYTE,n=e.format||i.RGBA,s=i.RGBA;const f=i.getExtension("EXT_color_buffer_float"),d=i.getExtension("EXT_color_buffer_half_float");o===i.FLOAT?(f?i instanceof WebGL2RenderingContext&&(n=i.RGBA32F):(console.warn("FLOAT textures not renderable, falling back to UNSIGNED_BYTE"),o=i.UNSIGNED_BYTE,n=i.RGBA8),s=i.RGBA):o===i.HALF_FLOAT_OES?(d?i instanceof WebGL2RenderingContext&&(n=i.RGBA16F):(console.warn("HALF_FLOAT textures not renderable, falling back to UNSIGNED_BYTE"),o=i.UNSIGNED_BYTE,n=i.RGBA8),s=i.RGBA):(o=i.UNSIGNED_BYTE,n=i.RGBA8,s=i.RGBA);const v=e.filter||e.magFilter||i.LINEAR,m=e.filter||e.minFilter||i.LINEAR;i.bindTexture(i.TEXTURE_2D,this.id),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,1),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,v),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,m),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,e.wrap||e.wrapS||i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,e.wrap||e.wrapT||i.CLAMP_TO_EDGE),i instanceof WebGL2RenderingContext?i.texImage2D(i.TEXTURE_2D,0,n,t,r,0,s,o,null):i.texImage2D(i.TEXTURE_2D,0,s,t,r,0,s,o,null),i.bindTexture(i.TEXTURE_2D,null),this.format=s,this.type=o,this.internalFormat=n}var K,q,ae;V.prototype={bind:function(t){i.activeTexture(i.TEXTURE0+(t||0)),i.bindTexture(i.TEXTURE_2D,this.id)},unbind:function(t){i.activeTexture(i.TEXTURE0+(t||0)),i.bindTexture(i.TEXTURE_2D,null)},canDrawTo:function(){K=K||i.createFramebuffer(),i.bindFramebuffer(i.FRAMEBUFFER,K),i.framebufferTexture2D(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,this.id,0);var t=i.checkFramebufferStatus(i.FRAMEBUFFER)==i.FRAMEBUFFER_COMPLETE;return i.bindFramebuffer(i.FRAMEBUFFER,null),t},drawTo:function(t){i.getExtension("EXT_color_buffer_float")||console.warn("EXT_color_buffer_float not available!");var e=i.getParameter(i.VIEWPORT);if(K=K||i.createFramebuffer(),q=q||i.createRenderbuffer(),i.bindFramebuffer(i.FRAMEBUFFER,K),i.bindRenderbuffer(i.RENDERBUFFER,q),(this.width!=q.width||this.height!=q.height)&&(q.width=this.width,q.height=this.height,i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_COMPONENT16,this.width,this.height)),i.framebufferTexture2D(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,this.id,0),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,q),i.checkFramebufferStatus(i.FRAMEBUFFER)!=i.FRAMEBUFFER_COMPLETE)throw new Error("Rendering to this texture is not supported (incomplete framebuffer)");i.viewport(0,0,this.width,this.height),t(),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindRenderbuffer(i.RENDERBUFFER,null),i.viewport(e[0],e[1],e[2],e[3])},swapWith:function(t){var r;r=t.id,t.id=this.id,this.id=r,r=t.width,t.width=this.width,this.width=r,r=t.height,t.height=this.height,this.height=r}},V.fromImage=function(t,r){r=r||{};var e=new V(t.width,t.height,r);i.bindTexture(i.TEXTURE_2D,e.id);try{i.texImage2D(i.TEXTURE_2D,0,e.format,e.format,e.type,t)}catch{throw location.protocol=="file:"?new Error('image not loaded for security reasons (serve this page over "http://" instead)'):new Error("image not loaded for security reasons (image must originate from the same domain as this page or use Cross-Origin Resource Sharing)")}return r.minFilter&&r.minFilter!=i.NEAREST&&r.minFilter!=i.LINEAR&&i.generateMipmap(i.TEXTURE_2D),i.bindTexture(i.TEXTURE_2D,null),e},V.fromURL=function(t,r){ae=ae||function(){var s=document.createElement("canvas").getContext("2d");s.canvas.width=s.canvas.height=128;for(var f=0;f<s.canvas.height;f+=16)for(var d=0;d<s.canvas.width;d+=16)s.fillStyle=(d^f)&16?"#FFF":"#DDD",s.fillRect(d,f,16,16);return s.canvas}();var e=V.fromImage(ae,r),o=new Image,n=i;return o.onload=function(){n.makeCurrent(),V.fromImage(o,r).swapWith(e)},o.src=t,e},V.canUseFloatingPointTextures=function(){return!!i.getExtension("OES_texture_float")},V.canUseFloatingPointLinearFiltering=function(){return!!i.getExtension("OES_texture_float_linear")},V.canUseHalfFloatingPointTextures=function(){return!!i.getExtension("OES_texture_half_float")},V.canUseHalfFloatingPointLinearFiltering=function(){return!!i.getExtension("OES_texture_half_float_linear")};function x(t,r,e){this.x=t||0,this.y=r||0,this.z=e||0}return x.prototype={negative:function(){return new x(-this.x,-this.y,-this.z)},add:function(t){return t instanceof x?new x(this.x+t.x,this.y+t.y,this.z+t.z):new x(this.x+t,this.y+t,this.z+t)},subtract:function(t){return t instanceof x?new x(this.x-t.x,this.y-t.y,this.z-t.z):new x(this.x-t,this.y-t,this.z-t)},multiply:function(t){return t instanceof x?new x(this.x*t.x,this.y*t.y,this.z*t.z):new x(this.x*t,this.y*t,this.z*t)},divide:function(t){return t instanceof x?new x(this.x/t.x,this.y/t.y,this.z/t.z):new x(this.x/t,this.y/t,this.z/t)},equals:function(t){return this.x==t.x&&this.y==t.y&&this.z==t.z},dot:function(t){return this.x*t.x+this.y*t.y+this.z*t.z},cross:function(t){return new x(this.y*t.z-this.z*t.y,this.z*t.x-this.x*t.z,this.x*t.y-this.y*t.x)},length:function(){return Math.sqrt(this.dot(this))},unit:function(){return this.divide(this.length())},min:function(){return Math.min(Math.min(this.x,this.y),this.z)},max:function(){return Math.max(Math.max(this.x,this.y),this.z)},toAngles:function(){return{theta:Math.atan2(this.z,this.x),phi:Math.asin(this.y/this.length())}},angleTo:function(t){return Math.acos(this.dot(t)/(this.length()*t.length()))},toArray:function(t){return[this.x,this.y,this.z].slice(0,t||3)},clone:function(){return new x(this.x,this.y,this.z)},init:function(t,r,e){return this.x=t,this.y=r,this.z=e,this}},x.negative=function(t,r){return r.x=-t.x,r.y=-t.y,r.z=-t.z,r},x.add=function(t,r,e){return r instanceof x?(e.x=t.x+r.x,e.y=t.y+r.y,e.z=t.z+r.z):(e.x=t.x+r,e.y=t.y+r,e.z=t.z+r),e},x.subtract=function(t,r,e){return r instanceof x?(e.x=t.x-r.x,e.y=t.y-r.y,e.z=t.z-r.z):(e.x=t.x-r,e.y=t.y-r,e.z=t.z-r),e},x.multiply=function(t,r,e){return r instanceof x?(e.x=t.x*r.x,e.y=t.y*r.y,e.z=t.z*r.z):(e.x=t.x*r,e.y=t.y*r,e.z=t.z*r),e},x.divide=function(t,r,e){return r instanceof x?(e.x=t.x/r.x,e.y=t.y/r.y,e.z=t.z/r.z):(e.x=t.x/r,e.y=t.y/r,e.z=t.z/r),e},x.cross=function(t,r,e){return e.x=t.y*r.z-t.z*r.y,e.y=t.z*r.x-t.x*r.z,e.z=t.x*r.y-t.y*r.x,e},x.unit=function(t,r){var e=t.length();return r.x=t.x/e,r.y=t.y/e,r.z=t.z/e,r},x.fromAngles=function(t,r){return new x(Math.cos(t)*Math.cos(r),Math.sin(r),Math.sin(t)*Math.cos(r))},x.randomDirection=function(){return x.fromAngles(Math.random()*Math.PI*2,Math.asin(Math.random()*2-1))},x.min=function(t,r){return new x(Math.min(t.x,r.x),Math.min(t.y,r.y),Math.min(t.z,r.z))},x.max=function(t,r){return new x(Math.max(t.x,r.x),Math.max(t.y,r.y),Math.max(t.z,r.z))},x.lerp=function(t,r,e){return r.subtract(t).multiply(e).add(t)},x.fromArray=function(t){return new x(t[0],t[1],t[2])},x.angleBetween=function(t,r){return t.angleTo(r)},a}();let c={numSteps:2,focal:45,visualizations:{enabled:!0,showFlags:!0,showRanks:!0,showWR:!0,showSpeed:!0,showDivingDistance:!0,areaConservationEnabled:!0,shadow:{enabled:!0,shadowRadius:.5,shadowPower:.5,showCircle:!0,circleRadius:.6,circleStroke:.15},sparks:{enabled:!1,glow:5,glowOffset:.5,lengthFactor:1,stroke:.01,num:40,sizeFactor:50,fov:Math.PI/4}},video:{thresholdBlending:!0,blendingThreshold:.41,show:!1},simulation:{optimized:!1,waterDamping:.02,poolSize:new g.Vector(2,1,2)},isOneVisualizationEnabled:()=>c.visualizations.showFlags||c.visualizations.showRanks||c.visualizations.showWR||c.visualizations.showSpeed||c.visualizations.showDivingDistance};const Le=new g.Vector(0,-4,0);class pe{constructor(a,l){this.center=new g.Vector(a.x,a.y,a.z),this.oldCenter=new g.Vector(a.x,a.y,a.z),this.radius=l,this.cinematic=!1,this.velocity=new g.Vector(0,0,0),this.acceleration=new g.Vector(0,0,0),this.mass=4/3*Math.PI*Math.pow(l,3)*1e3,this.invMass=1/this.mass,this.radiusSquared=l*l,this.mesh=g.Mesh.sphere({detail:10})}update(a){if(this.cinematic)this.velocity=new g.Vector(0,0,0);else{this.oldCenter=new g.Vector(this.center.x,this.center.y,this.center.z);const l=Math.max(0,Math.min(1,(this.radius-this.center.y)/(2*this.radius))),h=Le.multiply(-1.1*this.mass*l),p=this.velocity.unit().multiply(-1e3*this.radiusSquared*l*this.velocity.dot(this.velocity));this.addForce(p),this.addForce(h),this.addForce(Le.multiply(this.mass)),this.velocity=this.velocity.add(this.acceleration.multiply(a)),this.acceleration=new g.Vector(0,0,0),this.center=this.center.add(this.velocity.multiply(a)),this.center.y<this.radius-c.simulation.poolSize.y&&(this.center.y=this.radius-1,this.velocity.y=Math.abs(this.velocity.y)*.7)}}addForce(a){this.cinematic?console.warn("Trying to add force to a cinematic sphere."):this.acceleration=this.acceleration.add(a.multiply(this.invMass))}move(a){this.oldCenter=new g.Vector(this.center.x,this.center.y,this.center.z),this.center=new g.Vector(a.x,a.y,a.z),this.cinematic||console.warn("Moving a non cinematic sphere.")}}const Ae=.3,ze=.15,Ce=1,Ke=10,Oe=Math.ceil(Ke/4),Ue=10,Ze=`#version 300 es
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

`,Je=`#version 300 es
    precision highp float;
    in float fragCyclePhase;
    in float fragAltitude;
    const float PI = 3.141592;
    out vec4 fragColor;
    void main() {
        fragColor = vec4(fragAltitude, fragCyclePhase / (2. * PI), 1., 1.);
    }
`,Qe=`#version 300 es
    in vec2 iVertex;
    out vec2 fragCoord;
    void main() {
        fragCoord = iVertex * .5 + .5;
        gl_Position = vec4(iVertex.xy, 0., 1.);
    }
`,$e=`#version 300 es
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
`,et=new Float32Array([-1,-1,1,-1,1,1,-1,1]),tt=new Uint16Array([0,1,2,2,3,0]);var H,Ve,ve,Ge;class it{constructor(a){Be(this,H);this.numVecAttributes=Oe,this.maxNumSwimmer=Ue,this.gl=a;const l=a.NEAREST;this.texture=new g.Texture(this.numVecAttributes,this.maxNumSwimmer,{type:a.FLOAT,filter:l}),this.initPrograms(),this.indexBuffer=this.gl.createBuffer(),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.indexBuffer),this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER,tt,this.gl.STATIC_DRAW),this.vboPlane=this.gl.createBuffer(),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vboPlane),this.gl.bufferData(this.gl.ARRAY_BUFFER,et,this.gl.STATIC_DRAW),this.vboPoints=this.gl.createBuffer()}update(a){this.numSwimmers=a.length;const l=5;this.swimmersAttributes=new Float32Array(this.numVecAttributes*4*this.maxNumSwimmer*l);const h=ee(this,H,Ve).call(this,a);for(let p=0;p<a.length;p++){const b=h[p];ee(this,H,Ge).call(this,p,b),ee(this,H,ve).call(this,a.length+p,b.leftArm),ee(this,H,ve).call(this,2*a.length+p,b.rightArm),ee(this,H,ve).call(this,3*a.length+p,b.leftFoot),ee(this,H,ve).call(this,4*a.length+p,b.rightFoot)}this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture.id),this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,!1),this.gl.texSubImage2D(this.gl.TEXTURE_2D,0,0,0,this.numVecAttributes,this.maxNumSwimmer,this.gl.RGBA,this.gl.FLOAT,this.swimmersAttributes),this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,!0),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vboPoints),this.gl.bufferData(this.gl.ARRAY_BUFFER,this.swimmersAttributes,this.gl.DYNAMIC_DRAW)}buildShader(a,l){const h=this.gl.createShader(l);return this.gl.shaderSource(h,a),this.gl.compileShader(h),h}createProgram(a){const l=this.gl.createProgram();return a.forEach(h=>{this.gl.attachShader(l,h)}),this.gl.linkProgram(l),l}checkShaders(a,l,h){this.gl.getShaderParameter(a,this.gl.COMPILE_STATUS)||console.error(this.gl.getShaderInfoLog(a)),this.gl.getShaderParameter(l,this.gl.COMPILE_STATUS)||console.error(this.gl.getShaderInfoLog(l)),this.gl.getProgramParameter(h,this.gl.LINK_STATUS)||console.error(this.gl.getProgramInfoLog(h))}createRenderingTexture(a,l){this.pointsTexture=new g.Texture(a,l,{type:this.gl.FLOAT,filter:this.gl.NEAREST}),this.pointsFrameBuffer=this.gl.createFramebuffer(),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.pointsFrameBuffer);const h=this.gl.COLOR_ATTACHMENT0;this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,h,this.gl.TEXTURE_2D,this.pointsTexture.id,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.horizontalPassTexture=new g.Texture(a,l,{type:this.gl.FLOAT,filter:this.gl.LINEAR}),this.horizontalPassFrameBuffer=this.gl.createFramebuffer(),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.horizontalPassFrameBuffer),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,h,this.gl.TEXTURE_2D,this.horizontalPassTexture.id,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null);const p=l/4,b=p,R=p;this.displacementTexture=new g.Texture(b,R,{type:this.gl.FLOAT,filter:this.gl.LINEAR}),this.displacementFrameBuffer=this.gl.createFramebuffer(),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.displacementFrameBuffer),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,h,this.gl.TEXTURE_2D,this.displacementTexture.id,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.oldDisplacementTexture=new g.Texture(b,R,{type:this.gl.FLOAT,filter:this.gl.LINEAR})}buildProgram(a,l){const h=this.buildShader(a,this.gl.VERTEX_SHADER),p=this.buildShader(l,this.gl.FRAGMENT_SHADER),b=this.createProgram([h,p]);return this.checkShaders(h,p,b),b}initPrograms(){this.programPoints=this.buildProgram(Ze,Je),this.programVolume=this.buildProgram(Qe,$e),this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height)}volumePass(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.horizontalPassFrameBuffer),this.gl.useProgram(this.programVolume);const a=this.gl.getAttribLocation(this.programVolume,"iVertex"),l=this.gl.getUniformLocation(this.programVolume,"poolSize");this.gl.uniform2f(l,c.simulation.poolSize.x,c.simulation.poolSize.z);const h=this.gl.getUniformLocation(this.programVolume,"horizontal");this.gl.uniform1i(h,!0);const p=this.gl.getUniformLocation(this.programVolume,"show");this.gl.uniform1i(p,!1);const b=this.gl.getUniformLocation(this.programVolume,"swapColor");this.gl.uniform1i(b,!1);const R=2,F=this.gl.FLOAT,L=!1,U=0,M=0;this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vboPlane),this.gl.vertexAttribPointer(a,R,F,L,U,M),this.gl.enableVertexAttribArray(a),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.indexBuffer),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.pointsTexture.id),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this.gl.drawElements(this.gl.TRIANGLES,6,this.gl.UNSIGNED_SHORT,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.displacementFrameBuffer),this.gl.uniform1i(h,!1),this.gl.uniform1i(p,!1),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.horizontalPassTexture.id),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this.gl.viewport(0,0,this.displacementTexture.width,this.displacementTexture.height),this.gl.drawElements(this.gl.TRIANGLES,6,this.gl.UNSIGNED_SHORT,0),this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height)}pointPass(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.pointsFrameBuffer),this.gl.useProgram(this.programPoints);const a=this.gl.getAttribLocation(this.programPoints,"iData1"),l=this.gl.getAttribLocation(this.programPoints,"iData2"),h=this.gl.getAttribLocation(this.programPoints,"iData3"),p=this.gl.getUniformLocation(this.programPoints,"invPoolSize");this.gl.uniform2f(p,1/c.simulation.poolSize.x,1/c.simulation.poolSize.z);const b=4,R=this.gl.FLOAT,F=!1,L=4,U=12*L;let M=0;this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vboPoints),a>=0&&(this.gl.vertexAttribPointer(a,b,R,F,U,M),this.gl.enableVertexAttribArray(a)),M=4*L,l>=0&&(this.gl.vertexAttribPointer(l,b,R,F,U,M),this.gl.enableVertexAttribArray(l)),M=2*4*L,h>=0&&(this.gl.vertexAttribPointer(h,b,R,F,U,M),this.gl.enableVertexAttribArray(h)),this.gl.viewport(0,0,this.pointsTexture.width,this.pointsTexture.height),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this.gl.drawArrays(this.gl.POINTS,0,5*this.numSwimmers)}updateOldDisplacementTexture(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.displacementFrameBuffer),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.oldDisplacementTexture.id),this.gl.copyTexSubImage2D(this.gl.TEXTURE_2D,0,0,0,0,0,this.oldDisplacementTexture.width,this.oldDisplacementTexture.height)}draw(){this.updateOldDisplacementTexture(),this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this.pointPass(),this.volumePass(),this.gl.disable(this.gl.BLEND)}}H=new WeakSet,Ve=function(a){const l=function(h,p){return p.body.center.z-h.body.center.z};return a.sort(l)},ve=function(a,l){this.swimmersAttributes[this.numVecAttributes*4*a]=l.center.x,this.swimmersAttributes[this.numVecAttributes*4*a+1]=l.center.z,this.swimmersAttributes[this.numVecAttributes*4*a+7]=l.center.y},Ge=function(a,l){ee(this,H,ve).call(this,a,l.body),this.swimmersAttributes[this.numVecAttributes*4*a+2]=l.divingDistance,this.swimmersAttributes[this.numVecAttributes*4*a+3]=l.divingTime,this.swimmersAttributes[this.numVecAttributes*4*a+4]=l.reactionTime,this.swimmersAttributes[this.numVecAttributes*4*a+5]=l.body.velocity.z*3.6,this.swimmersAttributes[this.numVecAttributes*4*a+6]=l.nationality,this.swimmersAttributes[this.numVecAttributes*4*a+8]=l.breakoutDistance,this.swimmersAttributes[this.numVecAttributes*4*a+9]=l.breakoutTime};function Te(i=0,a=1){const l=1-Math.random(),h=Math.random();return Math.sqrt(-2*Math.log(l))*Math.cos(2*Math.PI*h)*a+i}const te=new g.Vector(1e3,0,0),rt=.5,ot=1,Ee=2*Math.PI*ot,I=class I{constructor(a){this.startingPoint=new g.Vector(a.x,a.y,a.z),this.center=new g.Vector(a.x,a.y,a.z),this.force=new g.Vector(0,0,190+Te(0,20)),this.reactionTime=Math.max(.1,Te(.15,.02));const l=.25,h=.15;this.body=new pe(a,l),this.leftArm=new pe(te,h),this.rightArm=new pe(te,h),this.leftFoot=new pe(te,h),this.rightFoot=new pe(te,h),this.body.cinematic=!I.useGravity,this.leftArm.cinematic=!0,this.rightArm.cinematic=!0,this.leftFoot.cinematic=!0,this.rightFoot.cinematic=!0,this.spheres=[this.body,this.leftArm,this.rightArm,this.leftFoot,this.rightFoot],this.divingDistance=0,this.divingTime=1e3,this.breakoutDistance=0,this.breakoutTime=1e3,this.nationality=Math.random()>.5?0:1}jump(){this.body.cinematic=!1,this.body.velocity=new g.Vector(0,0,4.5+Te(0,1)),this.body.center=new g.Vector(this.startingPoint.x,1,-c.simulation.poolSize.z/2)}swim(a){this.started=a,a?(this.body.cinematic=!1,this.useGravity=!0,this.body.center=new g.Vector(this.startingPoint.x,0,-c.simulation.poolSize.z/2)):(this.body.velocity=new g.Vector(0,0,0),this.body.center=new g.Vector(this.startingPoint.x,0,0))}getArmOffset(a,l){return new g.Vector(0,Math.cos(Ee*a+l),Math.sin(Ee*a+l)).multiply(rt)}update(a,l){if(I.raceHasStarted||I.swimming){if(!this.started&&I.raceHasStarted)if(l>this.reactionTime)this.swim(!0),this.jump();else return;if(this.body.addForce(this.force),this.hasBrokeOut){this.cyclePhase=Ee*l%2*Math.PI;const p=this.getArmOffset(l,0),b=this.getArmOffset(l,Math.PI),R=this.getArmOffset(l*2,0),F=this.getArmOffset(l*2,Math.PI);this.rightArm.move(this.body.center.add(p).add(new g.Vector(Ae,0,0))),this.leftArm.move(this.body.center.add(b).add(new g.Vector(-Ae,0,0))),this.rightFoot.move(this.body.center.add(new g.Vector(ze,R.y*.5,-Ce))),this.leftFoot.move(this.body.center.add(new g.Vector(-ze,F.y*.5,-Ce)))}}else this.rightArm.move(te),this.leftArm.move(te),this.rightFoot.move(te),this.leftFoot.move(te);for(let p of this.spheres)p.update(a);!this.hasDove&&this.body.center.y<0&&this.body.oldCenter.y>=0&&(this.divingDistance=this.body.center.z+c.simulation.poolSize.z/2,this.divingTime=l,this.hasDove=!0);const h=this.body.radius;!this.hasBrokeOut&&this.body.center.y>-h&&this.body.oldCenter.y<=-h&&(this.breakoutDistance=this.body.center.z+c.simulation.poolSize.z/2,this.breakoutTime=l,this.hasBrokeOut=!0,console.log("BREAKOUT : "+this.breakoutDistance))}};Y(I,"useGravity",!1),Y(I,"raceHasStarted",!1),Y(I,"swimming",!1),Y(I,"attributes"),Y(I,"initAttributes",a=>{I.attributes=new it(a)}),Y(I,"updateAttributesTexture",a=>{I.attributes.update(a)}),Y(I,"getAttributesTexture",()=>I.attributes.texture),Y(I,"bindDisplacementTexture",a=>{I.attributes.displacementTexture.bind(a)}),Y(I,"bindOldDisplacementTexture",a=>{I.attributes.oldDisplacementTexture.bind(a)}),Y(I,"reset",a=>{I.attributes.createRenderingTexture(a.x,a.y)});let z=I;const Me=`
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
    `)}j.prototype.reset=function(i=null){this.WR_position=1e5,this.prev_WR_position=0,i!==null?(console.log("resolution.y : "+i.y),this.W=Math.round(i.x),this.H=Math.round(i.y),console.log("Using custom resolution:",this.W,this.H)):(this.W=256,this.H=256),z.reset(new g.Vector(this.W,this.H)),this.plane=g.Mesh.plane({detail:255,width:c.simulation.poolSize.x,height:c.simulation.poolSize.z}),this.delta=new g.Vector(1/this.W,1/this.H);const a=this.gl;this.textureA&&a.deleteTexture(this.textureA.id),this.textureB&&a.deleteTexture(this.textureB.id),this.textureA=new g.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:l}),this.textureB=new g.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:l}),this.areaConservationTexture=new g.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:l}),this.showAreaConservedGrid=!1,this.showProjectionGrid=!1,this.invPoolSize=new g.Vector(1/c.simulation.poolSize.x,1/c.simulation.poolSize.y,1/c.simulation.poolSize.z);var l=g.Texture.canUseFloatingPointLinearFiltering()?this.gl.LINEAR:this.gl.NEAREST;(!this.textureA.canDrawTo()||!this.textureB.canDrawTo())&&g.Texture.canUseHalfFloatingPointTextures()&&(console.log("No draw"),l=g.Texture.canUseHalfFloatingPointLinearFiltering()?this.gl.LINEAR:this.gl.NEAREST,this.textureA=new g.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:l}),this.textureB=new g.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:l}))};j.prototype.addDrop=function(i,a,l,h){var p=this;this.textureB.drawTo(function(){p.textureA.bind(),p.dropShader.uniforms({invPoolSizeVertex:[p.invPoolSize.x,p.invPoolSize.z],center:[i,a],radius:l,strength:h,poolSize:[c.simulation.poolSize.x,c.simulation.poolSize.y,c.simulation.poolSize.z]}).draw(p.plane)}),this.textureB.swapWith(this.textureA)};j.prototype.addOrRemoveVisualizationWaves=function(i,a,l){if(this.visualizationWavesEnabled){var h=this;this.textureB.drawTo(function(){h.textureA.bind();const p=z.getAttributesTexture();p&&p.bind(1),h.visualizationWavesShader.uniforms({swimmersAttributesTexture:1,showDivingDistance:c.visualizations.showDivingDistance,showWR:c.visualizations.showWR,invPoolSizeVertex:[h.invPoolSize.x,h.invPoolSize.z],poolSize:[c.simulation.poolSize.x,c.simulation.poolSize.y,c.simulation.poolSize.z],wr:h.WR_position,sqrt_2_PI:h.sqrt_2_PI,add:i,swimmersNumber:a.length,time:l}).draw(h.plane)}),this.textureB.swapWith(this.textureA)}};j.prototype.addSwimmer=function(i){for(let a of i.spheres)this.addSphere(a)};j.prototype.addSphere=function(i){this.spheres.push(i)};j.prototype.updateSpheres=function(i){if(this.prev_WR_position=this.WR_position,this.WR_position+=i*2.4,c.simulation.optimized)z.attributes.draw(),this.textureB.drawTo(()=>{this.textureA.bind(),z.bindDisplacementTexture(1),z.bindOldDisplacementTexture(2),this.sphereShader.uniforms({oldDisplacementTexture:2,displacementTexture:1,invPoolSizeVertex:[this.invPoolSize.x,this.invPoolSize.z],poolSize:[c.simulation.poolSize.x,c.simulation.poolSize.y,c.simulation.poolSize.z],optimized:!0}).draw(this.plane),this.textureB.swapWith(this.textureA),z.attributes.draw()});else for(let l=0;l<this.spheres.length;l++){const h=this.spheres[l];this.moveSphere(h.oldCenter,h.center,h.radius)}};j.prototype.moveSphere=function(i,a,l){var h=this;this.textureB.drawTo(function(){h.textureA.bind(),h.sphereShader.uniforms({invPoolSizeVertex:[h.invPoolSize.x,h.invPoolSize.z],oldCenter:i,newCenter:a,radius:l,poolSize:[c.simulation.poolSize.x,c.simulation.poolSize.y,c.simulation.poolSize.z],optimized:!1}).draw(h.plane)}),this.textureB.swapWith(this.textureA)};j.prototype.stepSimulation=function(){var i=this;this.textureB.drawTo(function(){i.textureA.bind(),i.updateShader.uniforms({invPoolSizeVertex:[i.invPoolSize.x,i.invPoolSize.z],delta:[i.delta.x,i.delta.y],wr:i.WR_position,prev_wr:i.prev_WR_position,poolSize:[c.simulation.poolSize.x,c.simulation.poolSize.y,c.simulation.poolSize.z],sqrt_2_PI:i.sqrt_2_PI,damping:c.simulation.waterDamping}).draw(i.plane)}),this.textureB.swapWith(this.textureA),this.updateAreaConservation()};j.prototype.updateNormals=function(){var i=this;this.textureB.drawTo(function(){i.textureA.bind(),i.normalShader.uniforms({invPoolSizeVertex:[i.invPoolSize.x,i.invPoolSize.z],delta:[i.delta.x,i.delta.y]}).draw(i.plane)}),this.textureB.swapWith(this.textureA)};j.prototype.updateAreaConservation=function(){if(!c.visualizations.areaConservationEnabled)return;var i,a,l;if(this.textureA.type===this.gl.FLOAT)i=this.gl.FLOAT,a=Float32Array,l="EXT_color_buffer_float";else if(this.textureA.type===this.gl.HALF_FLOAT_OES)i=this.gl.HALF_FLOAT_OES,a=Uint16Array,l="EXT_color_buffer_half_float";else{console.warn("Unsupported texture type for reading");return}if(!this.gl.getExtension(l)){console.warn(l+" not available; cannot read pixels");return}this.fb||(this.fb=this.gl.createFramebuffer()),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.fb),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,this.textureA.id,0);const h=this.gl.checkFramebufferStatus(this.gl.FRAMEBUFFER);if(h!==this.gl.FRAMEBUFFER_COMPLETE){console.error("Framebuffer incomplete: "+h+" for texture type "+this.textureA.type),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null);return}this.gl.pixelStorei(this.gl.PACK_ALIGNMENT,1);const p=new a(this.W*this.H*4),b=new Float32Array(this.W*this.H*4);this.gl.readPixels(0,0,this.W,this.H,this.gl.RGBA,i,p);for(let M=0;M<this.W;M++)b[M*4+1]=1;const R=c.simulation.poolSize.x/this.W,F=c.simulation.poolSize.z/this.H,L=R*R,U=F*F;if(this.textureA.type===this.gl.FLOAT){for(let M=0;M<this.H;M+=1)for(let w=0;w<this.W;w+=1){const W=(M*this.W+w)*4,X=((this.H-1-M)*this.W+w)*4,k=b[X],Q=b[X+1];if(w+1<this.W){const O=p[W]-p[W+4],N=Math.sqrt(O*O+L);b[X+4]=k+N}if(M+1<this.H){const O=p[W]-p[W+this.W*4],N=Math.sqrt(O*O+U);b[X-4*this.W+1]=Q+N}}this.gl.bindTexture(this.gl.TEXTURE_2D,this.areaConservationTexture.id),this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT,1),this.gl.texSubImage2D(this.gl.TEXTURE_2D,0,0,0,this.W,this.H,this.gl.RGBA,this.gl.FLOAT,b)}this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.bindTexture(this.gl.TEXTURE_2D,null)};const nt=`
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
`;function ie(i,a,l,h){this.water=a,this.gl=i,this.tileTexture=g.Texture.fromImage(document.getElementById("tiles"),{minFilter:this.gl.LINEAR_MIPMAP_LINEAR,wrap:this.gl.REPEAT,format:this.gl.RGB}),this.franceTexture=g.Texture.fromImage(document.getElementById("france"),{minFilter:this.gl.LINEAR_MIPMAP_LINEAR,wrap:this.gl.REPEAT,format:this.gl.RGBA}),this.chinaTexture=g.Texture.fromImage(document.getElementById("china"),{minFilter:this.gl.LINEAR_MIPMAP_LINEAR,wrap:this.gl.REPEAT,format:this.gl.RGBA}),this.lettersTexture=g.Texture.fromImage(document.getElementById("letters"),{minFilter:this.gl.LINEAR,magFilter:this.gl.LINEAR,wrap:this.gl.REPEAT,format:this.gl.RGBA}),this.flagSize=h,this.flagSize=[1.5,1],this.flagCenter=l,this.lightDir=new g.Vector(2,2,-1).unit(),this.causticTex=new g.Texture(1024,1024),this.waterShaders=[];for(var p=0;p<2;p++)this.waterShaders[p]=new g.Shader(`
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
      
      
      `+Me+nt+`
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
          vec2 swimmerPos = getSwimmerPosition(i);
          if (showProjectionGrid && isOnConservedAreaGrid(position, 0.1)) color = vec3(1., 1., 0.); /* Debug conserved area grid */
          if (showWR) drawWorldRecordLine(position, color); 
          if (areaConservation) {
            vec2 coord = position / poolSize.xz + 0.5;
            position = texture(areaConservationTexture, coord).xy;
          }
          drawFlags(position, swimmerPos, getSwimmerNationality(i), color);

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
  `),this.sphereCenter=new g.Vector,this.sphereRadius=0;var b=!!this.gl.getExtension("OES_standard_derivatives");this.causticsShader=new g.Shader(le+`
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
  `,(b?`#extension GL_OES_standard_derivatives: enable
`:"")+`
  `+le+`
    in vec3 oldPos;
    in vec3 newPos;
    in vec3 ray;
    out vec4 fragColor;

  void main() {
    `+(b?`
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
  `)}ie.prototype.reset=function(){this.cubeMesh=g.Mesh.cube({width:c.simulation.poolSize.x,height:2,depth:c.simulation.poolSize.z}),this.cubeMesh.triangles.splice(4,2),this.cubeMesh.compile()};ie.prototype.updateCaustics=function(i){};ie.prototype.renderWater=function(i,a,l,h,p){var b=new g.Raytracer;i.textureA.bind(0),this.tileTexture.bind(1),a.bind(2),this.causticTex.bind(3),this.franceTexture.bind(4),this.chinaTexture.bind(8),this.lettersTexture.bind(7),i.areaConservationTexture.bind(5);const R=z.getAttributesTexture();R&&R.bind(6),this.gl.enable(this.gl.CULL_FACE);for(var F=0;F<2;F++)this.gl.cullFace(F?this.gl.BACK:this.gl.FRONT),this.waterShaders[F].uniforms({light:this.lightDir,water:0,tiles:1,sky:2,causticTex:3,france:4,china:8,areaConservationTexture:5,swimmersAttributesTexture:6,iChannel0:7,areaConservation:c.visualizations.areaConservationEnabled,flagSize:[1.5,2],flagCenter:[this.flagCenter.x,this.flagCenter.y],poolSize:[c.simulation.poolSize.x,c.simulation.poolSize.y,c.simulation.poolSize.z],poolSizeVertexShader:[c.simulation.poolSize.x,c.simulation.poolSize.y,c.simulation.poolSize.z],eye:b.eye,sphereCenter:this.sphereCenter,sphereRadius:this.sphereRadius,showProjectionGrid:i.showProjectionGrid,showAreaConservedGrid:i.showAreaConservedGrid,wr:i.WR_position,swimmersNumber:l.length,showFlags:c.visualizations.showFlags,showRanks:c.visualizations.showRanks,showWR:c.visualizations.showWR,showSpeed:c.visualizations.showSpeed,showDivingDistance:c.visualizations.showDivingDistance,time:h,shadowEnabled:p.enabled,shadowRadius:p.shadowRadius,shadowPower:p.shadowPower,showCircle:p.showCircle,shadowCircleRadius:p.circleRadius,shadowCircleStroke:p.circleStroke}).draw(i.plane);this.gl.disable(this.gl.CULL_FACE)};ie.prototype.renderSpheres=function(i){for(let a of i.spheres)this.renderSphere(i,a)};ie.prototype.renderSphere=function(i,a){i.textureA.bind(0),this.causticTex.bind(1),this.sphereShader.uniforms({light:this.lightDir,water:0,causticTex:1,sphereCenter:[a.center.x,a.center.y,a.center.z],sphereRadius:a.radius,poolSize:[c.simulation.poolSize.x,c.simulation.poolSize.y,c.simulation.poolSize.z]}).draw(a.mesh)};ie.prototype.renderSphereOld=function(i){i.textureA.bind(0),this.causticTex.bind(1),this.sphereShader.uniforms({light:this.lightDir,water:0,causticTex:1,sphereCenter:this.sphereCenter,sphereRadius:this.sphereRadius,poolSize:[c.simulation.poolSize.x,c.simulation.poolSize.y,c.simulation.poolSize.z]}).draw(this.sphereMesh)};ie.prototype.renderCube=function(i){this.gl.enable(this.gl.CULL_FACE),i.textureA.bind(0),this.tileTexture.bind(1),this.causticTex.bind(2),this.cubeShader.uniforms({light:this.lightDir,water:0,tiles:1,causticTex:2,sphereCenter:this.sphereCenter,sphereRadius:this.sphereRadius,poolSize:[c.simulation.poolSize.x,c.simulation.poolSize.y,c.simulation.poolSize.z]}).draw(this.cubeMesh),this.gl.disable(this.gl.CULL_FACE)};function Ie(i,a){this.gl=a,this.id=a.createTexture(),a.bindTexture(a.TEXTURE_CUBE_MAP,this.id),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,1),a.texParameteri(a.TEXTURE_CUBE_MAP,a.TEXTURE_MAG_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_CUBE_MAP,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_CUBE_MAP,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_CUBE_MAP,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE),a.texImage2D(a.TEXTURE_CUBE_MAP_NEGATIVE_X,0,a.RGB,a.RGB,a.UNSIGNED_BYTE,i.xneg),a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X,0,a.RGB,a.RGB,a.UNSIGNED_BYTE,i.xpos),a.texImage2D(a.TEXTURE_CUBE_MAP_NEGATIVE_Y,0,a.RGB,a.RGB,a.UNSIGNED_BYTE,i.yneg),a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_Y,0,a.RGB,a.RGB,a.UNSIGNED_BYTE,i.ypos),a.texImage2D(a.TEXTURE_CUBE_MAP_NEGATIVE_Z,0,a.RGB,a.RGB,a.UNSIGNED_BYTE,i.zneg),a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_Z,0,a.RGB,a.RGB,a.UNSIGNED_BYTE,i.zpos)}Ie.prototype.bind=function(i){this.gl.activeTexture(this.gl.TEXTURE0+(i||0)),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,this.id)};Ie.prototype.unbind=function(i){this.gl.activeTexture(this.gl.TEXTURE0+(i||0)),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,null)};const We=200,at=`
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

`;class st{constructor(a,l){if(this.gl=a,this.copyVideo=!1,this.show=!1,a===null){alert("Unable to initialize WebGL. Your browser or machine may not support it.");return}a.clearColor(0,0,0,1),a.clear(a.COLOR_BUFFER_BIT),this.shader=new g.Shader(`
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

    `+at+Me+`

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
`),this.mesh=g.Mesh.plane({width:2,height:2,coords:!0,normals:!0}),this.mesh.transform(g.Matrix.rotate(90,1,0,0)),this.mesh.transform(g.Matrix.translate(0,.1,0)),this.programInfo=null,this.texture=this.initTexture(),this.video=this.setupVideo(l),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!0)}render(a){const l=c.visualizations.sparks,h=c.simulation.poolSize;c.video.show&&(this.copyVideo&&this.updateTexture(),(!this.mesh.vertexBuffers||!this.mesh.vertexBuffers.vertex)&&this.mesh.compile(),this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture),z.swimmersAttributesTexture&&z.swimmersAttributesTexture.bind(1),this.shader.uniforms({uSampler:0,swimmersHelperFunctions:1,iTime:a,poolSize:[h.x,h.y,h.z],iResolution:[this.gl.canvas.width,this.gl.canvas.height],sparksEnabled:l.enabled,sparksGlow:l.glow,sparksGlowOffset:l.glowOffset,sparksStroke:l.stroke,sparksNumber:l.num,sparksLengthFactor:l.lengthFactor,sparksSizeFactor:l.sizeFactor,fov:l.fov,thresholdBlending:c.video.thresholdBlending,blendingThreshold:c.video.blendingThreshold}).draw(this.mesh),this.gl.disable(this.gl.BLEND))}initTexture(){const a=this.gl.createTexture();this.gl.bindTexture(this.gl.TEXTURE_2D,a);const l=0,h=this.gl.RGBA,p=1,b=1,R=0,F=this.gl.RGBA,L=this.gl.UNSIGNED_BYTE,U=new Uint8Array([0,0,255,255]);return this.gl.texImage2D(this.gl.TEXTURE_2D,l,h,p,b,R,F,L,U),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),a}updateTexture(){const l=this.gl.RGBA,h=this.gl.RGBA,p=this.gl.UNSIGNED_BYTE;this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture),this.gl.texImage2D(this.gl.TEXTURE_2D,0,l,h,p,this.video)}setupVideo(a){const l=document.createElement("video");let h=!1,p=!1;l.playsInline=!0,l.muted=!0,l.loop=!0,l.addEventListener("playing",()=>{h=!0,R()},!0),l.addEventListener("timeupdate",()=>{p=!0,R()},!0),l.src=a,l.play();const b=this,R=()=>{h&&p&&(b.copyVideo=!0)};return l}}const _e=new je,lt=function(i,a){const l=_e.addFolder("visualizations");l.close(),l.add(c.visualizations,"showFlags").name("show flags").listen(),l.add(c.visualizations,"showWR").name("show world record").listen(),l.add(c.visualizations,"showSpeed").name("show speed").listen(),l.add(c.visualizations,"showRanks").name("show ranks").listen(),l.add(c.visualizations,"showDivingDistance").name("show diving distance").listen(),l.add(c.visualizations.shadow,"enabled").name("show shadow"),l.add(c.visualizations,"areaConservationEnabled","areaConservationEnabled").name("area conservation").listen();const h=_e.addFolder("video");h.close(),h.add(c.video,"thresholdBlending").name("threshold blending"),h.add(c.video,"blendingThreshold",.1,.5).name("blending threshold"),h.add(c.video,"show").name("show").listen();const p=l.addFolder("Sparks");p.close(),p.add(c.visualizations.sparks,"enabled").name("sparks enabled"),p.add(c.visualizations.sparks,"glow",1,30).name("sparks glow factor"),p.add(c.visualizations.sparks,"lengthFactor",.1,10).name("sparks length factor"),p.add(c.visualizations.sparks,"glowOffset",.1,3).name("sparks glow offset"),p.add(c.visualizations.sparks,"stroke",.001,.05).name("sparks stroke"),p.add(c.visualizations.sparks,"num",10,We).step(1).name("sparks number"),p.add(c.visualizations.sparks,"sizeFactor",10,100).name("size factor");const b=l.addFolder("Swimmers shadows");b.close(),b.add(c.visualizations.shadow,"shadowRadius",0,2).name("shadow radius"),b.add(c.visualizations.shadow,"shadowPower",.1,2).name("shadow power"),b.add(c.visualizations.shadow,"showCircle").name("circle"),b.add(c.visualizations.shadow,"circleRadius",.5,2).name("circle radius"),b.add(c.visualizations.shadow,"circleStroke",.1,.5).name("circle stroke");const R=_e.addFolder("Simulation");R.close(),R.add(c.simulation,"optimized").name("optimized"),R.add(c.simulation.poolSize,"x",1,25).name("pool width").onChange(function(L){a()}).listen(),R.add(c.simulation.poolSize,"z",1,50).name("pool height").onChange(function(L){a()}).listen(),R.add(c.simulation.poolSize,"y",1,3).name("pool depth").onChange(function(L){a()}).listen(),R.add(c.simulation,"waterDamping",.005,.15).name("water damping").listen();const F=_e.addFolder("camera");F.close(),F.add(c,"focal",28,45).name("focal").listen().onChange(function(L){c.visualizations.sparks.fov=L*2*Math.PI/360,i.matrixMode(i.PROJECTION),i.loadIdentity(),i.perspective(c.focal,i.canvas.width/i.canvas.height,.01,100),i.matrixMode(i.MODELVIEW),console.log("perspective : "+c.focal)})};function ct(i){return i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n/g,"<br>")}function dt(i){var a=ct(i);a=="WebGL not supported"&&(a='Your browser does not support WebGL.<br>Please see    <a href="http://www.khronos.org/webgl/wiki/Getting_a_WebGL_Implementation">    Getting a WebGL Implementation</a>.');var l=document.getElementById("loading");l.innerHTML=a,l.style.zIndex=1}window.onerror=dt;var S=g.create(),A,ke,G;const D=[],Fe=10;var ue=-25,we=-200.5,xe=0;let be=0,Se=0;var he=4;const Ne=17;let me=0,ge=0;var J=!1,ye,Pe;z.initAttributes(S);let B=new g.Vector(256,256);function Xe(){document.getElementById("warning").hidden=!(B.x*B.y>3e5&&A&&c.visualizations.areaConservationEnabled)}let Re=0;function ft(i){Re+=i,Re>=1&&(document.getElementById("fps").innerText=`${(1/i).toFixed(1)} FPS`,Re=0)}function ce(){console.log("reset"),document.getElementById("resolution").innerText=`Resolution: ${B.x} x ${B.y}`,Xe(),ye=new g.Vector(0,-c.simulation.poolSize.z/2+1),A.reset(B),G.flagCenter=ye,G.flagSize=Pe,G.reset();const i=c.simulation.poolSize.x/Fe;let a=-c.simulation.poolSize.x/2+i/2;for(let l of D)l.body.center.x=a,l.startingPoint.x=a,a+=i}window.onload=function(){var i=window.devicePixelRatio||1,a=document.getElementById("help");function l(){var n=innerWidth,s=innerHeight;S.canvas.width=n*i,S.canvas.height=s*i,S.canvas.style.width=n+"px",S.canvas.style.height=s+"px",S.viewport(0,0,S.canvas.width,S.canvas.height),S.matrixMode(S.PROJECTION),S.loadIdentity(),S.perspective(c.focal,S.canvas.width/S.canvas.height,.01,100),S.matrixMode(S.MODELVIEW),o()}document.body.appendChild(S.canvas),S.canvas.oncontextmenu=function(n){n.preventDefault()},S.clearColor(0,0,0,1),ye=new g.Vector(0,-c.simulation.poolSize.z/2+1),Pe=.7,A=new j(S);const h=new st(S,"./video.mp4"),p=document.getElementById("drop-zone");let b=0;if(document.addEventListener("dragenter",n=>{b++,p.style.display="flex"}),document.addEventListener("dragover",n=>{n.preventDefault(),n.dataTransfer.dropEffect="copy"}),document.addEventListener("dragleave",n=>{b--,b===0&&(p.style.display="none")}),document.addEventListener("drop",n=>{n.preventDefault(),b=0,p.style.display="none";const s=n.dataTransfer.files;if(s.length>0&&(s[0].type.startsWith("video/")||s[0].name.endsWith(".mp4"))){const f=URL.createObjectURL(s[0]);h.video.src=f,h.video.play(),console.log("Loaded:",s[0].name)}}),lt(S,ce),G=new ie(S,A,ye,Pe),ke=new Ie({xneg:document.getElementById("xneg"),xpos:document.getElementById("xpos"),yneg:document.getElementById("ypos"),ypos:document.getElementById("ypos"),zneg:document.getElementById("zneg"),zpos:document.getElementById("zpos")},S),!A.textureA.canDrawTo()||!A.textureB.canDrawTo())throw new Error("Rendering to floating-point textures is required but not supported");const R=new g.Vector(-.4,-.75,.2),F=new g.Vector(.4,-.75,.2),L=new z(R);new z(F);for(let n=0;n<1;n++)D.push(new z(R));const U=L.body.radius;for(let n of D)A.addSwimmer(n);ce();for(var M=0;M<20;M++)A.addDrop(Math.random()*2-1,Math.random()*2-1,.06,M&1?.01:-.01);document.getElementById("loading").innerHTML="",l();var w=window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(n){setTimeout(n,0)},W=new Date().getTime();function X(){var n=new Date().getTime();J||(e((n-W)/1e3),o()),W=n,w(X)}w(X),window.onresize=l;var k,Q,O,N=-1,$=0,re=1,oe=2;const de=3;var ne,fe;function V(n,s,f){if(ne=n,fe=s,!f||f.button===0){var d=new g.Raytracer,v=d.getRayForPixel(n*i,s*i),m=d.eye.add(v.multiply(-d.eye.y/v.y));for(let _ of D){var u=g.Raytracer.hitTestSphere(d.eye,v,_.body.center,_.body.radius);if(u){N=re,O=_,_.body.cinematic=!0,k=u.hit,Q=d.getRayForPixel(S.canvas.width/2,S.canvas.height/2).negative();return}}Math.abs(m.x)<c.simulation.poolSize.x/2&&Math.abs(m.z)<c.simulation.poolSize.z/2&&(N=$,K(n,s))}else f.button===2?N=oe:f.button===1&&(N=de)}function K(n,s,f){switch(N){case $:{var d=new g.Raytracer,v=d.getRayForPixel(n*i,s*i),m=d.eye.add(v.multiply(-d.eye.y/v.y));A.addDrop(m.x/c.simulation.poolSize.x*2,m.z/c.simulation.poolSize.z*2,.06,.03),J&&(A.updateNormals(),G.updateCaustics(A));break}case re:{var d=new g.Raytracer,v=d.getRayForPixel(n*i,s*i),u=-Q.dot(d.eye.subtract(k))/Q.dot(v),_=d.eye.add(v.multiply(u));const E=O.body.center.add(_.subtract(k)),C=O.body.radius,P=Math.max(C-c.simulation.poolSize.x/2,Math.min(c.simulation.poolSize.x/2-C,E.x)),Z=Math.max(C-c.simulation.poolSize.y,Math.min(10,E.y)),se=Math.max(C-c.simulation.poolSize.z/2,Math.min(c.simulation.poolSize.z/2-C,E.z));O.body.move(new g.Vector(P,Z,se)),k=_,J&&G.updateCaustics(A);break}case oe:{if(f&&f.shiftKey){xe-=n-ne,xe=Math.max(-89.999,Math.min(89.999,xe));break}we-=n-ne,ue-=s-fe,ue=Math.max(-89.999,Math.min(89.999,ue));break}case de:{const T=.001*he;be+=T*(n-ne),Se-=T*(s-fe)}}ne=n,fe=s,J&&o()}function q(){N=-1,O&&(O.body.cinematic=!z.useGravity)}function ae(n){return n===a||n.parentNode&&ae(n.parentNode)}function x(n){he*=1-n*4e-4,he=Math.max(2,Math.min(1e3,he)),J&&o()}addEventListener("wheel",function(n){var s=n.deltaY;x(-s)}),document.onmousedown=function(n){ae(n.target)||(n.preventDefault(),V(n.pageX,n.pageY,n))},document.onmousemove=function(n){K(n.pageX,n.pageY,n)},document.onmouseup=function(){q()},document.ontouchstart=function(n){n.touches.length===1&&!ae(n.target)&&(n.preventDefault(),V(n.touches[0].pageX,n.touches[0].pageY,!1))},document.ontouchmove=function(n){n.touches.length===1&&K(n.touches[0].pageX,n.touches[0].pageY)},document.ontouchend=function(n){n.touches.length==0&&q()};function t(){z.raceHasStarted=!0;for(let n of D)n.started=!1}function r(){z.raceHasStarted=!1;for(let n of D)n.swim(!1)}document.onkeydown=function(n){if(n.which==32)J=!J;else if(n.which==71){for(let s of D)s.body.cinematic=!s.body.cinematic;z.useGravity=!z.useGravity}else if(n.which==76&&J)o();else if(n.which==74)jump();else if(n.which==67)c.visualizations.areaConservationEnabled=!c.visualizations.areaConservationEnabled,Xe(),console.log("Area conservation "+(c.visualizations.areaConservationEnabled?"enabled.":"disabled."));else if(n.which==80)A.showProjectionGrid=!A.showProjectionGrid,console.log("Projection grid "+(A.showProjectionGrid?"enabled.":"disabled."));else if(n.which==65)A.showAreaConservedGrid=!A.showAreaConservedGrid,console.log("Area conserved grid "+(A.showAreaConservedGrid?"enabled.":"disabled."));else if(n.which==83){if(z.swimming=!z.swimming,z.swimming)for(let s of D)s.swim(!0);else r();console.log("Swimming "+(z.swimming?"enabled.":"disabled."))}else if(n.which==86)c.video.show=!c.video.show;else if(n.which==79){if(c.simulation.poolSize.x=25,c.simulation.poolSize.y=2,c.simulation.poolSize.z=50,B.x=1024,B.y=2048,c.visualizations.areaConservationEnabled=!1,c.simulation.waterDamping=.1,D.length!=Fe)for(let s=D.length;s<Fe;s++){const f=new z(R);D.push(f),A.addSwimmer(f)}me=0,h.copyVideo&&(h.video.currentTime=me),ce(),c.focal=31.75,c.visualizations.sparks.fov=c.focal*2*Math.PI/360,S.matrixMode(S.PROJECTION),S.loadIdentity(),S.perspective(c.focal,S.canvas.width/S.canvas.height,.01,100),S.matrixMode(S.MODELVIEW),be=-.42,Se=1.18,he=52.5,ue=-24,we=-261.5,xe=-4,console.log("Olympic mode enabled.")}else if(n.which==87){if(z.raceHasStarted){z.raceHasStarted=!1,r();return}A.WR_position=0,me=Ne,h.copyVideo&&(h.video.currentTime=me),t(),z.useGravity=!0;for(let s of D)s.hasDove=!1,s.hasBrokeOut=!1}else n.which==72?(document.getElementById("commands").hidden=!document.getElementById("commands").hidden,document.getElementById("h").hidden=!document.getElementById("h").hidden):n.which==40?(B.x>129&&(B.x=Math.round(B.x/2)),ce(),console.log("decreasing x resolution")):n.which==38?(B.x<16384&&(B.x=Math.round(B.x*2)),ce(),console.log("increasing x resolution")):n.which==37?(B.y>129&&(B.y=Math.round(B.y/2)),ce(),console.log("decreasing y resolution")):n.which==39&&(B.y<16384&&(B.y=Math.round(B.y*2)),ce(),console.log("increasing y resolution"))};function e(n,s){if(!(n>1)){if(N==re)for(let f of D)f.body.velocity=new g.Vector(0,0,0);ge=me-Ne;for(let f of D)f.update(n,ge);A.updateSpheres(n);for(let f=0;f<c.numSteps;f++)A.stepSimulation();G.updateCaustics(A),me+=n,ft(n)}}function o(n){g.keys.L&&(G.lightDir=g.Vector.fromAngles((90-we)*Math.PI/180,-ue*Math.PI/180),J&&G.updateCaustics(A)),c.isOneVisualizationEnabled()&&z.updateAttributesTexture(D),A.addOrRemoveVisualizationWaves(!0,D,ge),A.updateNormals(),S.clear(S.COLOR_BUFFER_BIT|S.DEPTH_BUFFER_BIT),S.loadIdentity(),S.translate(be,Se,-he),S.rotate(-xe,0,0,1),S.rotate(-ue,1,0,0),S.rotate(-we,0,1,0),S.translate(0,.5,0),S.enable(S.DEPTH_TEST),G.sphereCenter=D[0].body.center,G.sphereRadius=U,G.renderCube(A),G.renderWater(A,ke,D,ge,c.visualizations.shadow),G.renderSpheres(A),h.render(ge),S.disable(S.DEPTH_TEST),A.addOrRemoveVisualizationWaves(!1,D,ge)}};
//# sourceMappingURL=swimming-FSjpua_a.js.map
