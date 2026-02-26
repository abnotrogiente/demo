var je=Object.defineProperty;var Le=i=>{throw TypeError(i)};var Ke=(i,n,l)=>n in i?je(i,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):i[n]=l;var X=(i,n,l)=>Ke(i,typeof n!="symbol"?n+"":n,l),Ze=(i,n,l)=>n.has(i)||Le("Cannot "+l);var Be=(i,n,l)=>n.has(i)?Le("Cannot add the same private member more than once"):n instanceof WeakSet?n.add(i):n.set(i,l);var ce=(i,n,l)=>(Ze(i,n,"access private method"),l);import"./modulepreload-polyfill-B5Qt9EMX.js";import{g as Je}from"./lil-gui.module.min-Vka56b52.js";var g=function(){var i,n={create:function(t){t=t||{};var r=document.createElement("canvas");r.width=800,r.height=600,"alpha"in t||(t.alpha=!1);try{i=r.getContext("webgl2",t)}catch{}try{i=i||r.getContext("experimental-webgl",t)}catch{}if(!i)throw new Error("WebGL not supported");return i.HALF_FLOAT_OES=36193,l(),f(),x(),N(),i},keys:{},Matrix:w,Indexer:q,Buffer:Y,Mesh:U,HitTest:W,Raytracer:J,Shader:Z,Texture:O,Vector:v};function l(){i.MODELVIEW=G|1,i.PROJECTION=G|2;var t=new w,r=new w;i.modelviewMatrix=new w,i.projectionMatrix=new w;var e=[],o=[],a,c;i.matrixMode=function(m){switch(m){case i.MODELVIEW:a="modelviewMatrix",c=e;break;case i.PROJECTION:a="projectionMatrix",c=o;break;default:throw new Error("invalid matrix mode "+m)}},i.loadIdentity=function(){w.identity(i[a])},i.loadMatrix=function(m){for(var h=m.m,s=i[a].m,d=0;d<16;d++)s[d]=h[d]},i.multMatrix=function(m){i.loadMatrix(w.multiply(i[a],m,r))},i.perspective=function(m,h,s,d){i.multMatrix(w.perspective(m,h,s,d,t))},i.frustum=function(m,h,s,d,u,p){i.multMatrix(w.frustum(m,h,s,d,u,p,t))},i.ortho=function(m,h,s,d,u,p){i.multMatrix(w.ortho(m,h,s,d,u,p,t))},i.scale=function(m,h,s){i.multMatrix(w.scale(m,h,s,t))},i.translate=function(m,h,s){i.multMatrix(w.translate(m,h,s,t))},i.rotate=function(m,h,s,d){i.multMatrix(w.rotate(m,h,s,d,t))},i.lookAt=function(m,h,s,d,u,p,y,_,T){i.multMatrix(w.lookAt(m,h,s,d,u,p,y,_,T,t))},i.pushMatrix=function(){c.push(Array.prototype.slice.call(i[a].m))},i.popMatrix=function(){var m=c.pop();i[a].m=I?new Float32Array(m):m},i.project=function(m,h,s,d,u,p){d=d||i.modelviewMatrix,u=u||i.projectionMatrix,p=p||i.getParameter(i.VIEWPORT);var y=u.transformPoint(d.transformPoint(new v(m,h,s)));return new v(p[0]+p[2]*(y.x*.5+.5),p[1]+p[3]*(y.y*.5+.5),y.z*.5+.5)},i.unProject=function(m,h,s,d,u,p){d=d||i.modelviewMatrix,u=u||i.projectionMatrix,p=p||i.getParameter(i.VIEWPORT);var y=new v((m-p[0])/p[2]*2-1,(h-p[1])/p[3]*2-1,s*2-1);return w.inverse(w.multiply(u,d,t),r).transformPoint(y)},i.matrixMode(i.MODELVIEW)}function f(){var t={mesh:new U({coords:!0,colors:!0,triangles:!1}),mode:-1,coord:[0,0,0,0],color:[1,1,1,1],shader:new Z("      uniform float pointSize;      out vec4 color;      out vec4 coord;      void main() {        color = gl_Color;        coord = gl_TexCoord;        gl_Position = gl_ModelViewProjectionMatrix * gl_Vertex;        gl_PointSize = pointSize;      }    ","      uniform sampler2D tex;      uniform float pointSize;      uniform bool useTexture;      in vec4 color;      in vec4 coord;      out vec4 fragColor;      void main() {        fragColor = color;        if (useTexture) fragColor *= texture(tex, coord.xy);      }    ")};i.pointSize=function(r){t.shader.uniforms({pointSize:r})},i.begin=function(r){if(t.mode!=-1)throw new Error("mismatched gl.begin() and gl.end() calls");t.mode=r,t.mesh.colors=[],t.mesh.coords=[],t.mesh.vertices=[]},i.color=function(r,e,o,a){t.color=arguments.length==1?r.toArray().concat(1):[r,e,o,a||1]},i.texCoord=function(r,e){t.coord=arguments.length==1?r.toArray(2):[r,e]},i.vertex=function(r,e,o){t.mesh.colors.push(t.color),t.mesh.coords.push(t.coord),t.mesh.vertices.push(arguments.length==1?r.toArray():[r,e,o])},i.end=function(){if(t.mode==-1)throw new Error("mismatched gl.begin() and gl.end() calls");t.mesh.compile(),t.shader.uniforms({useTexture:!!i.getParameter(i.TEXTURE_BINDING_2D)}).draw(t.mesh,t.mode),t.mode=-1}}function x(){var t=i,r=0,e=0,o={},a=!1,c=Object.prototype.hasOwnProperty;function m(){for(var _ in o)if(c.call(o,_)&&o[_])return!0;return!1}function h(_){var T={};for(var F in _)typeof _[F]=="function"?T[F]=function(le){return function(){le.apply(_,arguments)}}(_[F]):T[F]=_[F];T.original=_,T.x=T.pageX,T.y=T.pageY;for(var C=i.canvas;C;C=C.offsetParent)T.x-=C.offsetLeft,T.y-=C.offsetTop;return a?(T.deltaX=T.x-r,T.deltaY=T.y-e):(T.deltaX=0,T.deltaY=0,a=!0),r=T.x,e=T.y,T.dragging=m(),T.preventDefault=function(){T.original.preventDefault()},T.stopPropagation=function(){T.original.stopPropagation()},T}function s(_){i=t,m()||(b(document,"mousemove",d),b(document,"mouseup",u),z(i.canvas,"mousemove",d),z(i.canvas,"mouseup",u)),o[_.which]=!0,_=h(_),i.onmousedown&&i.onmousedown(_),_.preventDefault()}function d(_){i=t,_=h(_),i.onmousemove&&i.onmousemove(_),_.preventDefault()}function u(_){i=t,o[_.which]=!1,m()||(z(document,"mousemove",d),z(document,"mouseup",u),b(i.canvas,"mousemove",d),b(i.canvas,"mouseup",u)),_=h(_),i.onmouseup&&i.onmouseup(_),_.preventDefault()}function p(){a=!1}function y(){o={},a=!1}b(i.canvas,"mousedown",s),b(i.canvas,"mousemove",d),b(i.canvas,"mouseup",u),b(i.canvas,"mouseover",p),b(i.canvas,"mouseout",p),b(document,"contextmenu",y)}function A(t){var r={8:"BACKSPACE",9:"TAB",13:"ENTER",16:"SHIFT",27:"ESCAPE",32:"SPACE",37:"LEFT",38:"UP",39:"RIGHT",40:"DOWN"};return r[t]||(t>=65&&t<=90?String.fromCharCode(t):null)}function b(t,r,e){t.addEventListener(r,e)}function z(t,r,e){t.removeEventListener(r,e)}b(document,"keydown",function(t){if(!t.altKey&&!t.ctrlKey&&!t.metaKey){var r=A(t.keyCode);r&&(n.keys[r]=!0),n.keys[t.keyCode]=!0}}),b(document,"keyup",function(t){if(!t.altKey&&!t.ctrlKey&&!t.metaKey){var r=A(t.keyCode);r&&(n.keys[r]=!1),n.keys[t.keyCode]=!1}});function N(){(function(t){i.makeCurrent=function(){i=t}})(i),i.animate=function(){var t=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(a){setTimeout(a,16.666666666666668)},r=new Date().getTime(),e=i;function o(){i=e;var a=new Date().getTime();i.onupdate&&i.onupdate((a-r)/1e3),i.ondraw&&i.ondraw(),t(o),r=a}o()},i.fullscreen=function(t){t=t||{};var r=t.paddingTop||0,e=t.paddingLeft||0,o=t.paddingRight||0,a=t.paddingBottom||0;if(!document.body)throw new Error("document.body doesn't exist yet (call gl.fullscreen() from window.onload() or from inside the <body> tag)");document.body.appendChild(i.canvas),document.body.style.overflow="hidden",i.canvas.style.position="absolute",i.canvas.style.left=e+"px",i.canvas.style.top=r+"px";function c(){i.canvas.width=window.innerWidth-e-o,i.canvas.height=window.innerHeight-r-a,i.viewport(0,0,i.canvas.width,i.canvas.height),(t.camera||!("camera"in t))&&(i.matrixMode(i.PROJECTION),i.loadIdentity(),i.perspective(t.fov||45,i.canvas.width/i.canvas.height,t.near||.1,t.far||1e3),i.matrixMode(i.MODELVIEW)),i.ondraw&&i.ondraw()}b(window,"resize",c),c()}}var G=305397760,I=typeof Float32Array<"u";function w(){var t=Array.prototype.concat.apply([],arguments);t.length||(t=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),this.m=I?new Float32Array(t):t}w.prototype={inverse:function(){return w.inverse(this,new w)},transpose:function(){return w.transpose(this,new w)},multiply:function(t){return w.multiply(this,t,new w)},transformPoint:function(t){var r=this.m;return new v(r[0]*t.x+r[1]*t.y+r[2]*t.z+r[3],r[4]*t.x+r[5]*t.y+r[6]*t.z+r[7],r[8]*t.x+r[9]*t.y+r[10]*t.z+r[11]).divide(r[12]*t.x+r[13]*t.y+r[14]*t.z+r[15])},transformVector:function(t){var r=this.m;return new v(r[0]*t.x+r[1]*t.y+r[2]*t.z,r[4]*t.x+r[5]*t.y+r[6]*t.z,r[8]*t.x+r[9]*t.y+r[10]*t.z)}},w.inverse=function(t,r){r=r||new w;var e=t.m,o=r.m;o[0]=e[5]*e[10]*e[15]-e[5]*e[14]*e[11]-e[6]*e[9]*e[15]+e[6]*e[13]*e[11]+e[7]*e[9]*e[14]-e[7]*e[13]*e[10],o[1]=-e[1]*e[10]*e[15]+e[1]*e[14]*e[11]+e[2]*e[9]*e[15]-e[2]*e[13]*e[11]-e[3]*e[9]*e[14]+e[3]*e[13]*e[10],o[2]=e[1]*e[6]*e[15]-e[1]*e[14]*e[7]-e[2]*e[5]*e[15]+e[2]*e[13]*e[7]+e[3]*e[5]*e[14]-e[3]*e[13]*e[6],o[3]=-e[1]*e[6]*e[11]+e[1]*e[10]*e[7]+e[2]*e[5]*e[11]-e[2]*e[9]*e[7]-e[3]*e[5]*e[10]+e[3]*e[9]*e[6],o[4]=-e[4]*e[10]*e[15]+e[4]*e[14]*e[11]+e[6]*e[8]*e[15]-e[6]*e[12]*e[11]-e[7]*e[8]*e[14]+e[7]*e[12]*e[10],o[5]=e[0]*e[10]*e[15]-e[0]*e[14]*e[11]-e[2]*e[8]*e[15]+e[2]*e[12]*e[11]+e[3]*e[8]*e[14]-e[3]*e[12]*e[10],o[6]=-e[0]*e[6]*e[15]+e[0]*e[14]*e[7]+e[2]*e[4]*e[15]-e[2]*e[12]*e[7]-e[3]*e[4]*e[14]+e[3]*e[12]*e[6],o[7]=e[0]*e[6]*e[11]-e[0]*e[10]*e[7]-e[2]*e[4]*e[11]+e[2]*e[8]*e[7]+e[3]*e[4]*e[10]-e[3]*e[8]*e[6],o[8]=e[4]*e[9]*e[15]-e[4]*e[13]*e[11]-e[5]*e[8]*e[15]+e[5]*e[12]*e[11]+e[7]*e[8]*e[13]-e[7]*e[12]*e[9],o[9]=-e[0]*e[9]*e[15]+e[0]*e[13]*e[11]+e[1]*e[8]*e[15]-e[1]*e[12]*e[11]-e[3]*e[8]*e[13]+e[3]*e[12]*e[9],o[10]=e[0]*e[5]*e[15]-e[0]*e[13]*e[7]-e[1]*e[4]*e[15]+e[1]*e[12]*e[7]+e[3]*e[4]*e[13]-e[3]*e[12]*e[5],o[11]=-e[0]*e[5]*e[11]+e[0]*e[9]*e[7]+e[1]*e[4]*e[11]-e[1]*e[8]*e[7]-e[3]*e[4]*e[9]+e[3]*e[8]*e[5],o[12]=-e[4]*e[9]*e[14]+e[4]*e[13]*e[10]+e[5]*e[8]*e[14]-e[5]*e[12]*e[10]-e[6]*e[8]*e[13]+e[6]*e[12]*e[9],o[13]=e[0]*e[9]*e[14]-e[0]*e[13]*e[10]-e[1]*e[8]*e[14]+e[1]*e[12]*e[10]+e[2]*e[8]*e[13]-e[2]*e[12]*e[9],o[14]=-e[0]*e[5]*e[14]+e[0]*e[13]*e[6]+e[1]*e[4]*e[14]-e[1]*e[12]*e[6]-e[2]*e[4]*e[13]+e[2]*e[12]*e[5],o[15]=e[0]*e[5]*e[10]-e[0]*e[9]*e[6]-e[1]*e[4]*e[10]+e[1]*e[8]*e[6]+e[2]*e[4]*e[9]-e[2]*e[8]*e[5];for(var a=e[0]*o[0]+e[1]*o[4]+e[2]*o[8]+e[3]*o[12],c=0;c<16;c++)o[c]/=a;return r},w.transpose=function(t,r){r=r||new w;var e=t.m,o=r.m;return o[0]=e[0],o[1]=e[4],o[2]=e[8],o[3]=e[12],o[4]=e[1],o[5]=e[5],o[6]=e[9],o[7]=e[13],o[8]=e[2],o[9]=e[6],o[10]=e[10],o[11]=e[14],o[12]=e[3],o[13]=e[7],o[14]=e[11],o[15]=e[15],r},w.multiply=function(t,r,e){e=e||new w;var o=t.m,a=r.m,c=e.m;return c[0]=o[0]*a[0]+o[1]*a[4]+o[2]*a[8]+o[3]*a[12],c[1]=o[0]*a[1]+o[1]*a[5]+o[2]*a[9]+o[3]*a[13],c[2]=o[0]*a[2]+o[1]*a[6]+o[2]*a[10]+o[3]*a[14],c[3]=o[0]*a[3]+o[1]*a[7]+o[2]*a[11]+o[3]*a[15],c[4]=o[4]*a[0]+o[5]*a[4]+o[6]*a[8]+o[7]*a[12],c[5]=o[4]*a[1]+o[5]*a[5]+o[6]*a[9]+o[7]*a[13],c[6]=o[4]*a[2]+o[5]*a[6]+o[6]*a[10]+o[7]*a[14],c[7]=o[4]*a[3]+o[5]*a[7]+o[6]*a[11]+o[7]*a[15],c[8]=o[8]*a[0]+o[9]*a[4]+o[10]*a[8]+o[11]*a[12],c[9]=o[8]*a[1]+o[9]*a[5]+o[10]*a[9]+o[11]*a[13],c[10]=o[8]*a[2]+o[9]*a[6]+o[10]*a[10]+o[11]*a[14],c[11]=o[8]*a[3]+o[9]*a[7]+o[10]*a[11]+o[11]*a[15],c[12]=o[12]*a[0]+o[13]*a[4]+o[14]*a[8]+o[15]*a[12],c[13]=o[12]*a[1]+o[13]*a[5]+o[14]*a[9]+o[15]*a[13],c[14]=o[12]*a[2]+o[13]*a[6]+o[14]*a[10]+o[15]*a[14],c[15]=o[12]*a[3]+o[13]*a[7]+o[14]*a[11]+o[15]*a[15],e},w.identity=function(t){t=t||new w;var r=t.m;return r[0]=r[5]=r[10]=r[15]=1,r[1]=r[2]=r[3]=r[4]=r[6]=r[7]=r[8]=r[9]=r[11]=r[12]=r[13]=r[14]=0,t},w.perspective=function(t,r,e,o,a){var c=Math.tan(t*Math.PI/360)*e,m=c*r;return w.frustum(-m,m,-c,c,e,o,a)},w.frustum=function(t,r,e,o,a,c,m){m=m||new w;var h=m.m;return h[0]=2*a/(r-t),h[1]=0,h[2]=(r+t)/(r-t),h[3]=0,h[4]=0,h[5]=2*a/(o-e),h[6]=(o+e)/(o-e),h[7]=0,h[8]=0,h[9]=0,h[10]=-(c+a)/(c-a),h[11]=-2*c*a/(c-a),h[12]=0,h[13]=0,h[14]=-1,h[15]=0,m},w.ortho=function(t,r,e,o,a,c,m){m=m||new w;var h=m.m;return h[0]=2/(r-t),h[1]=0,h[2]=0,h[3]=-(r+t)/(r-t),h[4]=0,h[5]=2/(o-e),h[6]=0,h[7]=-(o+e)/(o-e),h[8]=0,h[9]=0,h[10]=-2/(c-a),h[11]=-(c+a)/(c-a),h[12]=0,h[13]=0,h[14]=0,h[15]=1,m},w.scale=function(t,r,e,o){o=o||new w;var a=o.m;return a[0]=t,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=e,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,o},w.translate=function(t,r,e,o){o=o||new w;var a=o.m;return a[0]=1,a[1]=0,a[2]=0,a[3]=t,a[4]=0,a[5]=1,a[6]=0,a[7]=r,a[8]=0,a[9]=0,a[10]=1,a[11]=e,a[12]=0,a[13]=0,a[14]=0,a[15]=1,o},w.rotate=function(t,r,e,o,a){if(!t||!r&&!e&&!o)return w.identity(a);a=a||new w;var c=a.m,m=Math.sqrt(r*r+e*e+o*o);t*=Math.PI/180,r/=m,e/=m,o/=m;var h=Math.cos(t),s=Math.sin(t),d=1-h;return c[0]=r*r*d+h,c[1]=r*e*d-o*s,c[2]=r*o*d+e*s,c[3]=0,c[4]=e*r*d+o*s,c[5]=e*e*d+h,c[6]=e*o*d-r*s,c[7]=0,c[8]=o*r*d-e*s,c[9]=o*e*d+r*s,c[10]=o*o*d+h,c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,a},w.lookAt=function(t,r,e,o,a,c,m,h,s,d){d=d||new w;var u=d.m,p=new v(t,r,e),y=new v(o,a,c),_=new v(m,h,s),T=p.subtract(y).unit(),F=_.cross(T).unit(),C=T.cross(F).unit();return u[0]=F.x,u[1]=F.y,u[2]=F.z,u[3]=-F.dot(p),u[4]=C.x,u[5]=C.y,u[6]=C.z,u[7]=-C.dot(p),u[8]=T.x,u[9]=T.y,u[10]=T.z,u[11]=-T.dot(p),u[12]=0,u[13]=0,u[14]=0,u[15]=1,d};function q(){this.unique=[],this.indices=[],this.map={}}q.prototype={add:function(t){var r=JSON.stringify(t);return r in this.map||(this.map[r]=this.unique.length,this.unique.push(t)),this.map[r]}};function Y(t,r){this.buffer=null,this.target=t,this.type=r,this.data=[]}Y.prototype={compile:function(t){for(var r=[],e=0,o=1e4;e<this.data.length;e+=o)r=Array.prototype.concat.apply(r,this.data.slice(e,e+o));var a=this.data.length?r.length/this.data.length:0;if(a!=Math.round(a))throw new Error("buffer elements not of consistent size, average size is "+a);this.buffer=this.buffer||i.createBuffer(),this.buffer.length=r.length,this.buffer.spacing=a,i.bindBuffer(this.target,this.buffer),i.bufferData(this.target,new this.type(r),t||i.STATIC_DRAW)}};function U(t){t=t||{},this.vertexBuffers={},this.indexBuffers={},this.addVertexBuffer("vertices","gl_Vertex"),t.coords&&this.addVertexBuffer("coords","gl_TexCoord"),t.normals&&this.addVertexBuffer("normals","gl_Normal"),t.colors&&this.addVertexBuffer("colors","gl_Color"),(!("triangles"in t)||t.triangles)&&this.addIndexBuffer("triangles"),t.lines&&this.addIndexBuffer("lines")}U.prototype={addVertexBuffer:function(t,r){var e=this.vertexBuffers[r]=new Y(i.ARRAY_BUFFER,Float32Array);e.name=t,this[t]=[]},addIndexBuffer:function(t){this.indexBuffers[t]=new Y(i.ELEMENT_ARRAY_BUFFER,Uint16Array),this[t]=[]},compile:function(){for(var t in this.vertexBuffers){var r=this.vertexBuffers[t];r.data=this[r.name],r.compile()}for(var e in this.indexBuffers){var r=this.indexBuffers[e];r.data=this[e],r.compile()}},transform:function(t){if(this.vertices=this.vertices.map(function(e){return t.transformPoint(v.fromArray(e)).toArray()}),this.normals){var r=t.inverse().transpose();this.normals=this.normals.map(function(e){return r.transformVector(v.fromArray(e)).unit().toArray()})}return this.compile(),this},computeNormals:function(){this.normals||this.addVertexBuffer("normals","gl_Normal");for(var t=0;t<this.vertices.length;t++)this.normals[t]=new v;for(var t=0;t<this.triangles.length;t++){var r=this.triangles[t],e=v.fromArray(this.vertices[r[0]]),o=v.fromArray(this.vertices[r[1]]),a=v.fromArray(this.vertices[r[2]]),c=o.subtract(e).cross(a.subtract(e)).unit();this.normals[r[0]]=this.normals[r[0]].add(c),this.normals[r[1]]=this.normals[r[1]].add(c),this.normals[r[2]]=this.normals[r[2]].add(c)}for(var t=0;t<this.vertices.length;t++)this.normals[t]=this.normals[t].unit().toArray();return this.compile(),this},computeWireframe:function(){for(var t=new q,r=0;r<this.triangles.length;r++)for(var e=this.triangles[r],o=0;o<e.length;o++){var a=e[o],c=e[(o+1)%e.length];t.add([Math.min(a,c),Math.max(a,c)])}return this.lines||this.addIndexBuffer("lines"),this.lines=t.unique,this.compile(),this},getAABB:function(){var t={min:new v(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)};t.max=t.min.negative();for(var r=0;r<this.vertices.length;r++){var e=v.fromArray(this.vertices[r]);t.min=v.min(t.min,e),t.max=v.max(t.max,e)}return t},getBoundingSphere:function(){for(var t=this.getAABB(),r={center:t.min.add(t.max).divide(2),radius:0},e=0;e<this.vertices.length;e++)r.radius=Math.max(r.radius,v.fromArray(this.vertices[e]).subtract(r.center).length());return r}},U.plane=function(t){t=t||{};for(var r=new U(t),e=t.detailX||t.detail||1,o=t.detailY||t.detail||1,a=t.width||2,c=t.height||2,m=0;m<=o;m++)for(var h=m/o,s=0;s<=e;s++){var d=s/e;if(r.vertices.push([(d-.5)*a,(h-.5)*c,0]),r.coords&&r.coords.push([d,h]),r.normals&&r.normals.push([0,0,1]),s<e&&m<o){var u=s+m*(e+1);r.triangles.push([u,u+1,u+e+1]),r.triangles.push([u+e+1,u+1,u+e+2])}}return r.compile(),r};var ae=[[0,4,2,6,-1,0,0],[1,3,5,7,1,0,0],[0,1,4,5,0,-1,0],[2,6,3,7,0,1,0],[0,2,1,3,0,0,-1],[4,5,6,7,0,0,1]];function j(t){return new v((t&1)*2-1,(t&2)-1,(t&4)/2-1)}U.cube=function(t){for(var r=new U(t),e=t&&t.width||2,o=t&&t.height||2,a=t&&t.depth||2,c=0;c<ae.length;c++){for(var m=ae[c],h=c*4,s=0;s<4;s++){var d=m[s];const u=j(d).toArray();u[0]*=e/2,u[1]*=o/2,u[2]*=a/2,r.vertices.push(u),r.coords&&r.coords.push([s&1,(s&2)/2]),r.normals&&r.normals.push(m.slice(4,7))}r.triangles.push([h,h+1,h+2]),r.triangles.push([h+2,h+1,h+3])}return r.compile(),r},U.sphere=function(t){function r(C,le,ee){return s?[C,ee,le]:[C,le,ee]}function e(C){return C+(C-C*C)/2}t=t||{};for(var o=new U(t),a=new q,c=t.detail||6,m=0;m<8;m++)for(var h=j(m),s=h.x*h.y*h.z>0,d=[],u=0;u<=c;u++){for(var p=0;u+p<=c;p++){var y=u/c,_=p/c,T=(c-u-p)/c,F={vertex:new v(e(y),e(_),e(T)).unit().multiply(h).toArray()};o.coords&&(F.coord=h.y>0?[1-y,T]:[T,1-y]),d.push(a.add(F))}if(u>0)for(var p=0;u+p<=c;p++){var y=(u-1)*(c+1)+(u-1-(u-1)*(u-1))/2+p,_=u*(c+1)+(u-u*u)/2+p;o.triangles.push(r(d[y],d[y+1],d[_])),u+p<c&&o.triangles.push(r(d[_],d[y+1],d[_+1]))}}return o.vertices=a.unique.map(function(C){return C.vertex}),o.coords&&(o.coords=a.unique.map(function(C){return C.coord})),o.normals&&(o.normals=o.vertices),o.compile(),o},U.load=function(t,r){r=r||{},"coords"in r||(r.coords=!!t.coords),"normals"in r||(r.normals=!!t.normals),"colors"in r||(r.colors=!!t.colors),"triangles"in r||(r.triangles=!!t.triangles),"lines"in r||(r.lines=!!t.lines);var e=new U(r);return e.vertices=t.vertices,e.coords&&(e.coords=t.coords),e.normals&&(e.normals=t.normals),e.colors&&(e.colors=t.colors),e.triangles&&(e.triangles=t.triangles),e.lines&&(e.lines=t.lines),e.compile(),e};function W(t,r,e){this.t=arguments.length?t:Number.MAX_VALUE,this.hit=r,this.normal=e}W.prototype={mergeWith:function(t){t.t>0&&t.t<this.t&&(this.t=t.t,this.hit=t.hit,this.normal=t.normal)}};function J(){var t=i.getParameter(i.VIEWPORT),r=i.modelviewMatrix.m,e=new v(r[0],r[4],r[8]),o=new v(r[1],r[5],r[9]),a=new v(r[2],r[6],r[10]),c=new v(r[3],r[7],r[11]);this.eye=new v(-c.dot(e),-c.dot(o),-c.dot(a));var m=t[0],h=m+t[2],s=t[1],d=s+t[3];this.ray00=i.unProject(m,s,1).subtract(this.eye),this.ray10=i.unProject(h,s,1).subtract(this.eye),this.ray01=i.unProject(m,d,1).subtract(this.eye),this.ray11=i.unProject(h,d,1).subtract(this.eye),this.viewport=t}J.prototype={getRayForPixel:function(t,r){t=(t-this.viewport[0])/this.viewport[2],r=1-(r-this.viewport[1])/this.viewport[3];var e=v.lerp(this.ray00,this.ray10,t),o=v.lerp(this.ray01,this.ray11,t);return v.lerp(e,o,r).unit()}},J.hitTestBox=function(t,r,e,o){var a=e.subtract(t).divide(r),c=o.subtract(t).divide(r),m=v.min(a,c),h=v.max(a,c),s=m.max(),d=h.min();if(s>0&&s<d){var u=1e-6,p=t.add(r.multiply(s));return e=e.add(u),o=o.subtract(u),new W(s,p,new v((p.x>o.x)-(p.x<e.x),(p.y>o.y)-(p.y<e.y),(p.z>o.z)-(p.z<e.z)))}return null},J.hitTestSphere=function(t,r,e,o){var a=t.subtract(e),c=r.dot(r),m=2*r.dot(a),h=a.dot(a)-o*o,s=m*m-4*c*h;if(s>0){var d=(-m-Math.sqrt(s))/(2*c),u=t.add(r.multiply(d));return new W(d,u,u.subtract(e).divide(o))}return null},J.hitTestTriangle=function(t,r,e,o,a){var c=o.subtract(e),m=a.subtract(e),h=c.cross(m).unit(),s=h.dot(e.subtract(t))/h.dot(r);if(s>0){var d=t.add(r.multiply(s)),u=d.subtract(e),p=m.dot(m),y=m.dot(c),_=m.dot(u),T=c.dot(c),F=c.dot(u),C=p*T-y*y,le=(T*_-y*F)/C,ee=(p*F-y*_)/C;if(le>=0&&ee>=0&&le+ee<=1)return new W(s,d,h)}return null};function se(t,r,e){let o;for(;(o=t.exec(r))!=null;)e(o)}var K="LIGHTGL";function Z(t,r){function e(p){var y=document.getElementById(p);return y?y.text:p}t=e(t),r=e(r);var o="    uniform mat3 gl_NormalMatrix;    uniform mat4 gl_ModelViewMatrix;    uniform mat4 gl_ProjectionMatrix;    uniform mat4 gl_ModelViewProjectionMatrix;    uniform mat4 gl_ModelViewMatrixInverse;    uniform mat4 gl_ProjectionMatrixInverse;    uniform mat4 gl_ModelViewProjectionMatrixInverse;  ",a=`#version 300 es
    `+o+"    in vec4 gl_Vertex;    in vec4 gl_TexCoord;    in vec3 gl_Normal;    in vec4 gl_Color;    vec4 ftransform() {      return gl_ModelViewProjectionMatrix * gl_Vertex;    }  ",c=`#version 300 es
    precision highp float;
  `+o,m=t+r,h={};se(/\b(gl_[^;]*)\b;/g,o,function(p){var y=p[1];if(m.indexOf(y)!=-1){var _=y.replace(/[a-z_]/g,"");h[_]=K+y}}),m.indexOf("ftransform")!=-1&&(h.MVPM=K+"gl_ModelViewProjectionMatrix"),this.usedMatrices=h;function s(p,y){var _={},T=/^((\s*\/\/.*\n|\s*#extension.*\n)+)[^]*$/.exec(y);return y=T?T[1]+p+y.substr(T[1].length):p+y,se(/\bgl_\w+\b/g,p,function(F){F in _||(y=y.replace(new RegExp("\\b"+F+"\\b","g"),K+F),_[F]=!0)}),y}t=s(a,t),r=s(c,r);function d(p,y){var _=i.createShader(p);if(i.shaderSource(_,y),i.compileShader(_),!i.getShaderParameter(_,i.COMPILE_STATUS))throw new Error("compile error: "+i.getShaderInfoLog(_));return _}if(this.program=i.createProgram(),i.attachShader(this.program,d(i.VERTEX_SHADER,t)),i.attachShader(this.program,d(i.FRAGMENT_SHADER,r)),i.linkProgram(this.program),!i.getProgramParameter(this.program,i.LINK_STATUS))throw new Error("link error: "+i.getProgramInfoLog(this.program));this.attributes={},this.uniformLocations={};var u={};se(/uniform\s+sampler(1D|2D|3D|Cube)\s+(\w+)\s*;/g,t+r,function(p){u[p[2]]=1}),this.isSampler=u}function ye(t){var r=Object.prototype.toString.call(t);return r=="[object Array]"||r=="[object Float32Array]"}function pe(t){var r=Object.prototype.toString.call(t);return r=="[object Number]"||r=="[object Boolean]"}new w,new w,Z.prototype={uniforms:function(t){i.useProgram(this.program);for(var r in t){var e=this.uniformLocations[r]||i.getUniformLocation(this.program,r);if(e){this.uniformLocations[r]=e;var o=t[r];if(o instanceof v?o=[o.x,o.y,o.z]:o instanceof w&&(o=o.m),ye(o))switch(o.length){case 1:i.uniform1fv(e,new Float32Array(o));break;case 2:i.uniform2fv(e,new Float32Array(o));break;case 3:i.uniform3fv(e,new Float32Array(o));break;case 4:i.uniform4fv(e,new Float32Array(o));break;case 9:i.uniformMatrix3fv(e,!1,new Float32Array([o[0],o[3],o[6],o[1],o[4],o[7],o[2],o[5],o[8]]));break;case 16:i.uniformMatrix4fv(e,!1,new Float32Array([o[0],o[4],o[8],o[12],o[1],o[5],o[9],o[13],o[2],o[6],o[10],o[14],o[3],o[7],o[11],o[15]]));break;default:throw new Error(`don't know how to load uniform "`+r+'" of length '+o.length)}else if(pe(o))(this.isSampler[r]?i.uniform1i:i.uniform1f).call(i,e,o);else throw new Error('attempted to set uniform "'+r+'" to invalid value '+o)}}return this},draw:function(t,r){this.drawBuffers(t.vertexBuffers,t.indexBuffers[r==i.LINES?"lines":"triangles"],arguments.length<2?i.TRIANGLES:r)},drawBuffers:function(t,r,e){var o=this.usedMatrices,a=i.modelviewMatrix,c=i.projectionMatrix,m=o.MVMI||o.NM?a.inverse():null,h=o.PMI?c.inverse():null,s=o.MVPM||o.MVPMI?c.multiply(a):null,d={};if(o.MVM&&(d[o.MVM]=a),o.MVMI&&(d[o.MVMI]=m),o.PM&&(d[o.PM]=c),o.PMI&&(d[o.PMI]=h),o.MVPM&&(d[o.MVPM]=s),o.MVPMI&&(d[o.MVPMI]=s.inverse()),o.NM){var u=m.m;d[o.NM]=[u[0],u[4],u[8],u[1],u[5],u[9],u[2],u[6],u[10]]}this.uniforms(d);var p=0;for(var y in t){var _=t[y],T=this.attributes[y]||i.getAttribLocation(this.program,y.replace(/^(gl_.*)$/,K+"$1"));T==-1||!_.buffer||(this.attributes[y]=T,i.bindBuffer(i.ARRAY_BUFFER,_.buffer),i.enableVertexAttribArray(T),i.vertexAttribPointer(T,_.buffer.spacing,i.FLOAT,!1,0,0),p=_.buffer.length/_.buffer.spacing)}for(var y in this.attributes)y in t||i.disableVertexAttribArray(this.attributes[y]);return p&&(!r||r.buffer)&&(r?(i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,r.buffer),i.drawElements(e,r.buffer.length,i.UNSIGNED_SHORT,0)):i.drawArrays(e,0,p)),this}};function O(t,r,e){e=e||{},this.width=t,this.height=r,this.id=i.createTexture();let o=e.type||i.UNSIGNED_BYTE,a=e.format||i.RGBA,c=i.RGBA;const m=i.getExtension("EXT_color_buffer_float"),h=i.getExtension("EXT_color_buffer_half_float");o===i.FLOAT?(m?i instanceof WebGL2RenderingContext&&(a=i.RGBA32F):(console.warn("FLOAT textures not renderable, falling back to UNSIGNED_BYTE"),o=i.UNSIGNED_BYTE,a=i.RGBA8),c=i.RGBA):o===i.HALF_FLOAT_OES?(h?i instanceof WebGL2RenderingContext&&(a=i.RGBA16F):(console.warn("HALF_FLOAT textures not renderable, falling back to UNSIGNED_BYTE"),o=i.UNSIGNED_BYTE,a=i.RGBA8),c=i.RGBA):(o=i.UNSIGNED_BYTE,a=i.RGBA8,c=i.RGBA);const s=e.filter||e.magFilter||i.LINEAR,d=e.filter||e.minFilter||i.LINEAR;i.bindTexture(i.TEXTURE_2D,this.id),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,1),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,s),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,d),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,e.wrap||e.wrapS||i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,e.wrap||e.wrapT||i.CLAMP_TO_EDGE),i instanceof WebGL2RenderingContext?i.texImage2D(i.TEXTURE_2D,0,a,t,r,0,c,o,null):i.texImage2D(i.TEXTURE_2D,0,c,t,r,0,c,o,null),i.bindTexture(i.TEXTURE_2D,null),this.format=c,this.type=o,this.internalFormat=a}var $,k,re;O.prototype={bind:function(t){i.activeTexture(i.TEXTURE0+(t||0)),i.bindTexture(i.TEXTURE_2D,this.id)},unbind:function(t){i.activeTexture(i.TEXTURE0+(t||0)),i.bindTexture(i.TEXTURE_2D,null)},canDrawTo:function(){$=$||i.createFramebuffer(),i.bindFramebuffer(i.FRAMEBUFFER,$),i.framebufferTexture2D(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,this.id,0);var t=i.checkFramebufferStatus(i.FRAMEBUFFER)==i.FRAMEBUFFER_COMPLETE;return i.bindFramebuffer(i.FRAMEBUFFER,null),t},drawTo:function(t){i.getExtension("EXT_color_buffer_float")||console.warn("EXT_color_buffer_float not available!");var e=i.getParameter(i.VIEWPORT);if($=$||i.createFramebuffer(),k=k||i.createRenderbuffer(),i.bindFramebuffer(i.FRAMEBUFFER,$),i.bindRenderbuffer(i.RENDERBUFFER,k),(this.width!=k.width||this.height!=k.height)&&(k.width=this.width,k.height=this.height,i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_COMPONENT16,this.width,this.height)),i.framebufferTexture2D(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,this.id,0),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,k),i.checkFramebufferStatus(i.FRAMEBUFFER)!=i.FRAMEBUFFER_COMPLETE)throw new Error("Rendering to this texture is not supported (incomplete framebuffer)");i.viewport(0,0,this.width,this.height),t(),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindRenderbuffer(i.RENDERBUFFER,null),i.viewport(e[0],e[1],e[2],e[3])},swapWith:function(t){var r;r=t.id,t.id=this.id,this.id=r,r=t.width,t.width=this.width,this.width=r,r=t.height,t.height=this.height,this.height=r}},O.fromImage=function(t,r){r=r||{};var e=new O(t.width,t.height,r);i.bindTexture(i.TEXTURE_2D,e.id);try{i.texImage2D(i.TEXTURE_2D,0,e.format,e.format,e.type,t)}catch{throw location.protocol=="file:"?new Error('image not loaded for security reasons (serve this page over "http://" instead)'):new Error("image not loaded for security reasons (image must originate from the same domain as this page or use Cross-Origin Resource Sharing)")}return r.minFilter&&r.minFilter!=i.NEAREST&&r.minFilter!=i.LINEAR&&i.generateMipmap(i.TEXTURE_2D),i.bindTexture(i.TEXTURE_2D,null),e},O.fromURL=function(t,r){re=re||function(){var c=document.createElement("canvas").getContext("2d");c.canvas.width=c.canvas.height=128;for(var m=0;m<c.canvas.height;m+=16)for(var h=0;h<c.canvas.width;h+=16)c.fillStyle=(h^m)&16?"#FFF":"#DDD",c.fillRect(h,m,16,16);return c.canvas}();var e=O.fromImage(re,r),o=new Image,a=i;return o.onload=function(){a.makeCurrent(),O.fromImage(o,r).swapWith(e)},o.src=t,e},O.canUseFloatingPointTextures=function(){return!!i.getExtension("OES_texture_float")},O.canUseFloatingPointLinearFiltering=function(){return!!i.getExtension("OES_texture_float_linear")},O.canUseHalfFloatingPointTextures=function(){return!!i.getExtension("OES_texture_half_float")},O.canUseHalfFloatingPointLinearFiltering=function(){return!!i.getExtension("OES_texture_half_float_linear")};function v(t,r,e){this.x=t||0,this.y=r||0,this.z=e||0}return v.prototype={negative:function(){return new v(-this.x,-this.y,-this.z)},add:function(t){return t instanceof v?new v(this.x+t.x,this.y+t.y,this.z+t.z):new v(this.x+t,this.y+t,this.z+t)},subtract:function(t){return t instanceof v?new v(this.x-t.x,this.y-t.y,this.z-t.z):new v(this.x-t,this.y-t,this.z-t)},multiply:function(t){return t instanceof v?new v(this.x*t.x,this.y*t.y,this.z*t.z):new v(this.x*t,this.y*t,this.z*t)},divide:function(t){return t instanceof v?new v(this.x/t.x,this.y/t.y,this.z/t.z):new v(this.x/t,this.y/t,this.z/t)},equals:function(t){return this.x==t.x&&this.y==t.y&&this.z==t.z},dot:function(t){return this.x*t.x+this.y*t.y+this.z*t.z},cross:function(t){return new v(this.y*t.z-this.z*t.y,this.z*t.x-this.x*t.z,this.x*t.y-this.y*t.x)},length:function(){return Math.sqrt(this.dot(this))},unit:function(){return this.divide(this.length())},min:function(){return Math.min(Math.min(this.x,this.y),this.z)},max:function(){return Math.max(Math.max(this.x,this.y),this.z)},toAngles:function(){return{theta:Math.atan2(this.z,this.x),phi:Math.asin(this.y/this.length())}},angleTo:function(t){return Math.acos(this.dot(t)/(this.length()*t.length()))},toArray:function(t){return[this.x,this.y,this.z].slice(0,t||3)},clone:function(){return new v(this.x,this.y,this.z)},init:function(t,r,e){return this.x=t,this.y=r,this.z=e,this}},v.negative=function(t,r){return r.x=-t.x,r.y=-t.y,r.z=-t.z,r},v.add=function(t,r,e){return r instanceof v?(e.x=t.x+r.x,e.y=t.y+r.y,e.z=t.z+r.z):(e.x=t.x+r,e.y=t.y+r,e.z=t.z+r),e},v.subtract=function(t,r,e){return r instanceof v?(e.x=t.x-r.x,e.y=t.y-r.y,e.z=t.z-r.z):(e.x=t.x-r,e.y=t.y-r,e.z=t.z-r),e},v.multiply=function(t,r,e){return r instanceof v?(e.x=t.x*r.x,e.y=t.y*r.y,e.z=t.z*r.z):(e.x=t.x*r,e.y=t.y*r,e.z=t.z*r),e},v.divide=function(t,r,e){return r instanceof v?(e.x=t.x/r.x,e.y=t.y/r.y,e.z=t.z/r.z):(e.x=t.x/r,e.y=t.y/r,e.z=t.z/r),e},v.cross=function(t,r,e){return e.x=t.y*r.z-t.z*r.y,e.y=t.z*r.x-t.x*r.z,e.z=t.x*r.y-t.y*r.x,e},v.unit=function(t,r){var e=t.length();return r.x=t.x/e,r.y=t.y/e,r.z=t.z/e,r},v.fromAngles=function(t,r){return new v(Math.cos(t)*Math.cos(r),Math.sin(r),Math.sin(t)*Math.cos(r))},v.randomDirection=function(){return v.fromAngles(Math.random()*Math.PI*2,Math.asin(Math.random()*2-1))},v.min=function(t,r){return new v(Math.min(t.x,r.x),Math.min(t.y,r.y),Math.min(t.z,r.z))},v.max=function(t,r){return new v(Math.max(t.x,r.x),Math.max(t.y,r.y),Math.max(t.z,r.z))},v.lerp=function(t,r,e){return r.subtract(t).multiply(e).add(t)},v.fromArray=function(t){return new v(t[0],t[1],t[2])},v.angleBetween=function(t,r){return t.angleTo(r)},n}();const Ne=new g.Vector(0,-4,0);class xe{constructor(n,l){this.center=new g.Vector(n.x,n.y,n.z),this.oldCenter=new g.Vector(n.x,n.y,n.z),this.radius=l,this.cinematic=!1,this.velocity=new g.Vector(0,0,0),this.acceleration=new g.Vector(0,0,0),this.mass=4/3*Math.PI*Math.pow(l,3)*1e3,this.invMass=1/this.mass,this.radiusSquared=l*l,this.mesh=g.Mesh.sphere({detail:10})}update(n,l){if(this.cinematic)this.velocity=new g.Vector(0,0,0);else{this.oldCenter=new g.Vector(this.center.x,this.center.y,this.center.z);const f=Math.max(0,Math.min(1,(this.radius-this.center.y)/(2*this.radius))),x=Ne.multiply(-1.35*this.mass*f),A=this.velocity.unit().multiply(-1e3*this.radiusSquared*f*this.velocity.dot(this.velocity));this.addForce(A),this.addForce(x),this.addForce(Ne.multiply(this.mass)),this.velocity=this.velocity.add(this.acceleration.multiply(n)),this.acceleration=new g.Vector(0,0,0),this.center=this.center.add(this.velocity.multiply(n)),this.center.y<this.radius-l.y&&(this.center.y=this.radius-1,this.velocity.y=Math.abs(this.velocity.y)*.7)}}addForce(n){this.cinematic?console.warn("Trying to add force to a cinematic sphere."):this.acceleration=this.acceleration.add(n.multiply(this.invMass))}move(n){this.oldCenter=new g.Vector(this.center.x,this.center.y,this.center.z),this.center=new g.Vector(n.x,n.y,n.z),this.cinematic||console.warn("Moving a non cinematic sphere.")}}const ze=.3,Fe=.15,Ce=1,Qe=9,ke=Math.ceil(Qe/4),Ve=10,$e=`#version 300 es
    const float ARM_DELTA_X = float(`+ze+`);
    const float FOOT_DELTA_X = float( `+Fe+`);
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
`,rt=new Float32Array([-1,-1,1,-1,1,1,-1,1]),ot=new Uint16Array([0,1,2,2,3,0]);var Q,ge,Ge;class nt{constructor(n,l){Be(this,Q);this.numVecAttributes=ke,this.maxNumSwimmer=Ve,this.gl=n;const f=n.NEAREST;this.texture=new g.Texture(this.numVecAttributes,this.maxNumSwimmer,{type:n.FLOAT,filter:f}),this.poolSize=l,this.initPrograms(),this.indexBuffer=this.gl.createBuffer(),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.indexBuffer),this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER,ot,this.gl.STATIC_DRAW),this.vboPlane=this.gl.createBuffer(),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vboPlane),this.gl.bufferData(this.gl.ARRAY_BUFFER,rt,this.gl.STATIC_DRAW),this.vboPoints=this.gl.createBuffer()}update(n){this.numSwimmers=n.length;const l=5;this.swimmersAttributes=new Float32Array(this.numVecAttributes*4*this.maxNumSwimmer*l);for(let f=0;f<n.length;f++){const x=n[f];ce(this,Q,Ge).call(this,f,x),ce(this,Q,ge).call(this,n.length+f,x.leftArm),ce(this,Q,ge).call(this,2*n.length+f,x.rightArm),ce(this,Q,ge).call(this,3*n.length+f,x.leftFoot),ce(this,Q,ge).call(this,4*n.length+f,x.rightFoot)}this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture.id),this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,!1),this.gl.texSubImage2D(this.gl.TEXTURE_2D,0,0,0,this.numVecAttributes,this.maxNumSwimmer,this.gl.RGBA,this.gl.FLOAT,this.swimmersAttributes),this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,!0),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vboPoints),this.gl.bufferData(this.gl.ARRAY_BUFFER,this.swimmersAttributes,this.gl.DYNAMIC_DRAW)}buildShader(n,l){const f=this.gl.createShader(l);return this.gl.shaderSource(f,n),this.gl.compileShader(f),f}createProgram(n){const l=this.gl.createProgram();return n.forEach(f=>{this.gl.attachShader(l,f)}),this.gl.linkProgram(l),l}checkShaders(n,l,f){this.gl.getShaderParameter(n,this.gl.COMPILE_STATUS)||console.error(this.gl.getShaderInfoLog(n)),this.gl.getShaderParameter(l,this.gl.COMPILE_STATUS)||console.error(this.gl.getShaderInfoLog(l)),this.gl.getProgramParameter(f,this.gl.LINK_STATUS)||console.error(this.gl.getProgramInfoLog(f))}createRenderingTexture(n,l){this.pointsTexture=new g.Texture(n,l,{type:this.gl.FLOAT,filter:this.gl.NEAREST}),this.pointsFrameBuffer=this.gl.createFramebuffer(),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.pointsFrameBuffer);const f=this.gl.COLOR_ATTACHMENT0;this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,f,this.gl.TEXTURE_2D,this.pointsTexture.id,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.horizontalPassTexture=new g.Texture(n,l,{type:this.gl.FLOAT,filter:this.gl.LINEAR}),this.horizontalPassFrameBuffer=this.gl.createFramebuffer(),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.horizontalPassFrameBuffer),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,f,this.gl.TEXTURE_2D,this.horizontalPassTexture.id,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null);const x=l/4,A=x,b=x;this.displacementTexture=new g.Texture(A,b,{type:this.gl.FLOAT,filter:this.gl.LINEAR}),this.displacementFrameBuffer=this.gl.createFramebuffer(),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.displacementFrameBuffer),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,f,this.gl.TEXTURE_2D,this.displacementTexture.id,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.oldDisplacementTexture=new g.Texture(A,b,{type:this.gl.FLOAT,filter:this.gl.LINEAR})}buildProgram(n,l){const f=this.buildShader(n,this.gl.VERTEX_SHADER),x=this.buildShader(l,this.gl.FRAGMENT_SHADER),A=this.createProgram([f,x]);return this.checkShaders(f,x,A),A}initPrograms(){this.programPoints=this.buildProgram($e,et),this.programVolume=this.buildProgram(tt,it),this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height)}volumePass(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.horizontalPassFrameBuffer),this.gl.useProgram(this.programVolume);const n=this.gl.getAttribLocation(this.programVolume,"iVertex"),l=this.gl.getUniformLocation(this.programVolume,"poolSize");this.gl.uniform2f(l,this.poolSize.x,this.poolSize.y);const f=this.gl.getUniformLocation(this.programVolume,"horizontal");this.gl.uniform1i(f,!0);const x=this.gl.getUniformLocation(this.programVolume,"show");this.gl.uniform1i(x,!1);const A=this.gl.getUniformLocation(this.programVolume,"swapColor");this.gl.uniform1i(A,!1);const b=2,z=this.gl.FLOAT,N=!1,G=0,I=0;this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vboPlane),this.gl.vertexAttribPointer(n,b,z,N,G,I),this.gl.enableVertexAttribArray(n),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.indexBuffer),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.pointsTexture.id),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this.gl.drawElements(this.gl.TRIANGLES,6,this.gl.UNSIGNED_SHORT,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.displacementFrameBuffer),this.gl.uniform1i(f,!1),this.gl.uniform1i(x,!1),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.horizontalPassTexture.id),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this.gl.viewport(0,0,this.displacementTexture.width,this.displacementTexture.height),this.gl.drawElements(this.gl.TRIANGLES,6,this.gl.UNSIGNED_SHORT,0),this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height)}pointPass(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.pointsFrameBuffer),this.gl.useProgram(this.programPoints);const n=this.gl.getAttribLocation(this.programPoints,"iData1"),l=this.gl.getAttribLocation(this.programPoints,"iData2"),f=this.gl.getAttribLocation(this.programPoints,"iData3"),x=this.gl.getUniformLocation(this.programPoints,"invPoolSize");this.gl.uniform2f(x,1/this.poolSize.x,1/this.poolSize.y);const A=4,b=this.gl.FLOAT,z=!1,N=4,G=12*N;let I=0;this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vboPoints),n>=0&&(this.gl.vertexAttribPointer(n,A,b,z,G,I),this.gl.enableVertexAttribArray(n)),I=4*N,l>=0&&(this.gl.vertexAttribPointer(l,A,b,z,G,I),this.gl.enableVertexAttribArray(l)),I=2*4*N,f>=0&&(this.gl.vertexAttribPointer(f,A,b,z,G,I),this.gl.enableVertexAttribArray(f)),this.gl.viewport(0,0,this.pointsTexture.width,this.pointsTexture.height),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this.gl.drawArrays(this.gl.POINTS,0,5*this.numSwimmers)}updateOldDisplacementTexture(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.displacementFrameBuffer),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.oldDisplacementTexture.id),this.gl.copyTexSubImage2D(this.gl.TEXTURE_2D,0,0,0,0,0,this.oldDisplacementTexture.width,this.oldDisplacementTexture.height)}draw(){this.updateOldDisplacementTexture(),this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this.pointPass(),this.volumePass(),this.gl.disable(this.gl.BLEND)}}Q=new WeakSet,ge=function(n,l){this.swimmersAttributes[this.numVecAttributes*4*n]=l.center.x,this.swimmersAttributes[this.numVecAttributes*4*n+1]=l.center.z,this.swimmersAttributes[this.numVecAttributes*4*n+7]=l.center.y},Ge=function(n,l){ce(this,Q,ge).call(this,n,l.body),this.swimmersAttributes[this.numVecAttributes*4*n+2]=l.divingDistance,this.swimmersAttributes[this.numVecAttributes*4*n+3]=l.divingTime,this.swimmersAttributes[this.numVecAttributes*4*n+4]=l.reactionTime,this.swimmersAttributes[this.numVecAttributes*4*n+5]=l.body.velocity.z*3.6,this.swimmersAttributes[this.numVecAttributes*4*n+6]=l.nationality,this.swimmersAttributes[this.numVecAttributes*4*n+8]=l.cyclePhase};function Te(i=0,n=1){const l=1-Math.random(),f=Math.random();return Math.sqrt(-2*Math.log(l))*Math.cos(2*Math.PI*f)*n+i}const oe=new g.Vector(1e3,0,0),at=.5,st=1,be=2*Math.PI*st,D=class D{constructor(n){this.startingPoint=new g.Vector(n.x,n.y,n.z),this.center=new g.Vector(n.x,n.y,n.z),this.force=new g.Vector(0,0,190+Te(0,20)),this.reactionTime=Math.max(.1,Te(.15,.02));const l=.25,f=.15;this.body=new xe(n,l),this.leftArm=new xe(oe,f),this.rightArm=new xe(oe,f),this.leftFoot=new xe(oe,f),this.rightFoot=new xe(oe,f),this.body.cinematic=!D.useGravity,this.leftArm.cinematic=!0,this.rightArm.cinematic=!0,this.leftFoot.cinematic=!0,this.rightFoot.cinematic=!0,this.spheres=[this.body,this.leftArm,this.rightArm,this.leftFoot,this.rightFoot],this.divingDistance=0,this.divingTime=1e3,this.nationality=Math.random()>.5?0:1}jump(n){this.body.cinematic=!1,this.body.velocity=new g.Vector(0,0,4.5+Te(0,1)),this.body.center=new g.Vector(this.startingPoint.x,1,-n.z/2)}swim(n,l){this.started=n,n?(this.body.cinematic=!1,this.useGravity=!0,this.body.center=new g.Vector(this.startingPoint.x,0,-l.z/2)):(this.body.velocity=new g.Vector(0,0,0),this.body.center=new g.Vector(this.startingPoint.x,0,0))}getArmOffset(n,l){return new g.Vector(0,Math.cos(be*n+l),Math.sin(be*n+l)).multiply(at)}update(n,l,f){if(D.raceHasStarted||D.swimming){if(!this.started&&D.raceHasStarted)if(l>this.reactionTime)this.swim(!0,f),this.jump(f);else return;this.body.addForce(this.force),this.cyclePhase=be*l%2*Math.PI;const x=this.getArmOffset(l,0),A=this.getArmOffset(l,Math.PI),b=this.getArmOffset(l*2,0),z=this.getArmOffset(l*2,Math.PI);this.rightArm.move(this.body.center.add(x).add(new g.Vector(ze,0,0))),this.leftArm.move(this.body.center.add(A).add(new g.Vector(-ze,0,0))),this.rightFoot.move(this.body.center.add(new g.Vector(Fe,b.y*.5,-Ce))),this.leftFoot.move(this.body.center.add(new g.Vector(-Fe,z.y*.5,-Ce)))}else this.rightArm.move(oe),this.leftArm.move(oe),this.rightFoot.move(oe),this.leftFoot.move(oe);for(let x of this.spheres)x.update(n,f);!this.hasDove&&this.body.center.y<=0&&this.body.oldCenter.y>=0&&(this.divingDistance=this.body.center.z+f.z/2,this.divingTime=l,this.hasDove=!0)}};X(D,"useGravity",!1),X(D,"raceHasStarted",!1),X(D,"swimming",!1),X(D,"showFlags",!0),X(D,"attributes"),X(D,"initAttributes",n=>{D.attributes=new nt(n)}),X(D,"updateAttributesTexture",n=>{D.attributes.update(n)}),X(D,"getAttributesTexture",()=>D.attributes.texture),X(D,"bindDisplacementTexture",n=>{D.attributes.displacementTexture.bind(n)}),X(D,"bindOldDisplacementTexture",n=>{D.attributes.oldDisplacementTexture.bind(n)}),X(D,"reset",(n,l)=>{D.attributes.createRenderingTexture(l.x,l.y),D.attributes.poolSize=n});let S=D;const Ie=`
    uniform float wr;
    #define sqrt_2_PI 2.50662827
    #define PI 3.1415926536
    uniform sampler2D swimmersAttributesTexture;
    const int SWIMMERS_NUM_ATTRIBUTES = 4;
    const vec2 TEXTURE_SIZE = vec2(`+ke+", "+Ve+`);
    uniform float swimmersNumber;
    uniform float time;

    vec2 getAttributePosition(int i) {
        float i_float = float(i);
        vec2 pixel = vec2(0., i_float);
        vec4 attributes = texture(swimmersAttributesTexture, (pixel + .5) / TEXTURE_SIZE);
        return attributes.rg;
    }

    float getAttributeSpeed(int i) {
        float i_float = float(i);
        vec2 pixel = vec2(1., i_float);
        vec4 attributes = texture(swimmersAttributesTexture, (pixel + .5) / TEXTURE_SIZE);
        return attributes.g;
    }

    vec2 getAttributeDiving(int i) {
        float i_float = float(i);
        vec2 pixel = vec2(0., i_float);
        vec4 attributes = texture(swimmersAttributesTexture, (pixel + .5) / TEXTURE_SIZE);
        return attributes.ba;
    }

    float getAttributeReactionTime(int i ) {
        float i_float = float(i);
        vec2 pixel = vec2(1., i_float);
        vec4 attributes = texture(swimmersAttributesTexture, (pixel + .5) / TEXTURE_SIZE);
        return attributes.r;
    }

    float getNationality(int i ) {
        float i_float = float(i);
        vec2 pixel = vec2(1., i_float);
        vec4 attributes = texture(swimmersAttributesTexture, (pixel + .5) / TEXTURE_SIZE);
        return attributes.b;
    }

    float getAltitude(int i ) {
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

    vec3 getDivingWaves(vec2 coord) {
        vec3 res = vec3(0., 0., -1.);
        
        for (int i = 0; i < 10; i++) {
            float i_float = float(i);
            if (i_float > swimmersNumber - 0.1) break;
            vec2 swimmerPos = getAttributePosition(i);
            float swimmer_x = swimmerPos.x;
            float swimmer_z = swimmerPos.y;
            vec2 swimmerDiving = getAttributeDiving(i);
            float divingDistance = swimmerDiving.x;
            float divingTime = swimmerDiving.y;

            float timeSinceDiving = time - divingTime;
            const float rippleSpeed = .5;
            const float maxTime = 10.;
            const float lambda = 2. * PI / 0.6;
            float frequency = 2.;
            float omega = 2. * PI * frequency;
            vec2 center = vec2(swimmer_x, divingDistance - poolSize.z / 2.);
            vec2 pos = (coord - .5) * poolSize.xz;
            vec2 diff = pos - center;
            float d = sqrt(dot(diff, diff));
            d*=2.;
            
            float r_max_max = 0.5;
            float divingDistRange = 2.;
            float divingDistMin = 2.;
            float intensity = (divingDistance - divingDistMin) / divingDistRange;
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
        return res;
    }
`;let P={numSteps:2,focal:45,simulation:{optimized:!1},sparks:{enabled:!1,glow:5,glowOffset:.5,lengthFactor:1,stroke:.01,num:40,sizeFactor:50,fov:Math.PI/4},shadow:{enabled:!0,shadowRadius:.5,shadowPower:.5,showCircle:!0,circleRadius:1,circleStroke:.15}};function H(i,n,l=null){this.gl=i,this.damping=.02,this.areaConservationEnabled=!0,this.visualizationWavesEnabled=!0,this.sqrt_2_PI=Math.sqrt(2*Math.PI),this.spheres=[];var f=`
    out vec2 coord;
    uniform vec2 invPoolSizeVertex;
    void main() {
      coord = gl_Vertex.xy * invPoolSizeVertex + 0.5;
      gl_Position = vec4(gl_Vertex.xy * 2. * invPoolSizeVertex, 0., 1.0);
    }
  `;this.reset(n,l),g.Texture.canUseFloatingPointTextures(),this.dropShader=new g.Shader(f,`
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
  `),this.updateShader=new g.Shader(f,`
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
  `),this.normalShader=new g.Shader(f,`
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
  `),this.visualizationWavesShader=new g.Shader(f,`
    uniform sampler2D tex;
    uniform bool add;
    uniform vec3 poolSize;
    in vec2 coord;
    out vec4 fragColor;

    `+Ie+`

    void main() {
      vec4 info = texture(tex, coord);
      float w = getDivingWaves(coord).x + getRecordWave(coord);
      info.r += add ? w : -w;
      fragColor = info;
    }
    `)}H.prototype.reset=function(i,n=null){this.WR_position=1e5,this.prev_WR_position=0,n!==null?(console.log("resolution.y : "+n.y),this.W=Math.round(n.x),this.H=Math.round(n.y),console.log("Using custom resolution:",this.W,this.H)):(this.W=256,this.H=256),S.reset(new g.Vector(i.x,i.z),new g.Vector(this.W,this.H)),this.plane=g.Mesh.plane({detail:255,width:i.x,height:i.z}),this.delta=new g.Vector(1/this.W,1/this.H);const l=this.gl;this.textureA&&l.deleteTexture(this.textureA.id),this.textureB&&l.deleteTexture(this.textureB.id),this.textureA=new g.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:f}),this.textureB=new g.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:f}),this.areaConservationTexture=new g.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:f}),this.showAreaConservedGrid=!1,this.showProjectionGrid=!1,this.poolSize=i,this.invPoolSize=new g.Vector(1/i.x,1/i.y,1/i.z);var f=g.Texture.canUseFloatingPointLinearFiltering()?this.gl.LINEAR:this.gl.NEAREST;(!this.textureA.canDrawTo()||!this.textureB.canDrawTo())&&g.Texture.canUseHalfFloatingPointTextures()&&(console.log("No draw"),f=g.Texture.canUseHalfFloatingPointLinearFiltering()?this.gl.LINEAR:this.gl.NEAREST,this.textureA=new g.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:f}),this.textureB=new g.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:f}))};H.prototype.addDrop=function(i,n,l,f){var x=this;this.textureB.drawTo(function(){x.textureA.bind(),x.dropShader.uniforms({invPoolSizeVertex:[x.invPoolSize.x,x.invPoolSize.z],center:[i,n],radius:l,strength:f,poolSize:[x.poolSize.x,x.poolSize.y,x.poolSize.z]}).draw(x.plane)}),this.textureB.swapWith(this.textureA)};H.prototype.addOrRemoveVisualizationWaves=function(i,n,l){if(this.visualizationWavesEnabled){var f=this;this.textureB.drawTo(function(){f.textureA.bind();const x=S.getAttributesTexture();x&&x.bind(1),f.visualizationWavesShader.uniforms({swimmersAttributesTexture:1,invPoolSizeVertex:[f.invPoolSize.x,f.invPoolSize.z],poolSize:[f.poolSize.x,f.poolSize.y,f.poolSize.z],wr:f.WR_position,sqrt_2_PI:f.sqrt_2_PI,add:i,swimmersNumber:n.length,time:l}).draw(f.plane)}),this.textureB.swapWith(this.textureA)}};H.prototype.addSwimmer=function(i){for(let n of i.spheres)this.addSphere(n)};H.prototype.addSphere=function(i){this.spheres.push(i)};H.prototype.updateSpheres=function(i){if(this.prev_WR_position=this.WR_position,this.WR_position+=i*2.4,P.simulation.optimized)S.attributes.draw(),this.textureB.drawTo(()=>{this.textureA.bind(),S.bindDisplacementTexture(1),S.bindOldDisplacementTexture(2),this.sphereShader.uniforms({oldDisplacementTexture:2,displacementTexture:1,invPoolSizeVertex:[this.invPoolSize.x,this.invPoolSize.z],poolSize:[this.poolSize.x,this.poolSize.y,this.poolSize.z],optimized:!0}).draw(this.plane),this.textureB.swapWith(this.textureA),S.attributes.draw()});else for(let l=0;l<this.spheres.length;l++){const f=this.spheres[l];this.moveSphere(f.oldCenter,f.center,f.radius)}};H.prototype.moveSphere=function(i,n,l){var f=this;this.textureB.drawTo(function(){f.textureA.bind(),f.sphereShader.uniforms({invPoolSizeVertex:[f.invPoolSize.x,f.invPoolSize.z],oldCenter:i,newCenter:n,radius:l,poolSize:[f.poolSize.x,f.poolSize.y,f.poolSize.z],optimized:!1}).draw(f.plane)}),this.textureB.swapWith(this.textureA)};H.prototype.stepSimulation=function(){var i=this;this.textureB.drawTo(function(){i.textureA.bind(),i.updateShader.uniforms({invPoolSizeVertex:[i.invPoolSize.x,i.invPoolSize.z],delta:[i.delta.x,i.delta.y],wr:i.WR_position,prev_wr:i.prev_WR_position,poolSize:[i.poolSize.x,i.poolSize.y,i.poolSize.z],sqrt_2_PI:i.sqrt_2_PI,damping:i.damping}).draw(i.plane)}),this.textureB.swapWith(this.textureA),this.updateAreaConservation()};H.prototype.updateNormals=function(){var i=this;this.textureB.drawTo(function(){i.textureA.bind(),i.normalShader.uniforms({invPoolSizeVertex:[i.invPoolSize.x,i.invPoolSize.z],delta:[i.delta.x,i.delta.y]}).draw(i.plane)}),this.textureB.swapWith(this.textureA)};H.prototype.setAreaConservation=function(i){this.areaConservationEnabled=i};H.prototype.updateAreaConservation=function(){if(!this.areaConservationEnabled)return;var i,n,l;if(this.textureA.type===this.gl.FLOAT)i=this.gl.FLOAT,n=Float32Array,l="EXT_color_buffer_float";else if(this.textureA.type===this.gl.HALF_FLOAT_OES)i=this.gl.HALF_FLOAT_OES,n=Uint16Array,l="EXT_color_buffer_half_float";else{console.warn("Unsupported texture type for reading");return}if(!this.gl.getExtension(l)){console.warn(l+" not available; cannot read pixels");return}this.fb||(this.fb=this.gl.createFramebuffer()),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.fb),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,this.textureA.id,0);const f=this.gl.checkFramebufferStatus(this.gl.FRAMEBUFFER);if(f!==this.gl.FRAMEBUFFER_COMPLETE){console.error("Framebuffer incomplete: "+f+" for texture type "+this.textureA.type),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null);return}this.gl.pixelStorei(this.gl.PACK_ALIGNMENT,1);const x=new n(this.W*this.H*4),A=new Float32Array(this.W*this.H*4);this.gl.readPixels(0,0,this.W,this.H,this.gl.RGBA,i,x);for(let I=0;I<this.W;I++)A[I*4+1]=1;const b=this.poolSize.x/this.W,z=this.poolSize.z/this.H,N=b*b,G=z*z;if(this.textureA.type===this.gl.FLOAT){for(let I=0;I<this.H;I+=1)for(let w=0;w<this.W;w+=1){const q=(I*this.W+w)*4,Y=((this.H-1-I)*this.W+w)*4,U=A[Y],ae=A[Y+1];if(w+1<this.W){const j=x[q]-x[q+4],W=Math.sqrt(j*j+N);A[Y+4]=U+W}if(I+1<this.H){const j=x[q]-x[q+this.W*4],W=Math.sqrt(j*j+G);A[Y-4*this.W+1]=ae+W}}this.gl.bindTexture(this.gl.TEXTURE_2D,this.areaConservationTexture.id),this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT,1),this.gl.texSubImage2D(this.gl.TEXTURE_2D,0,0,0,this.W,this.H,this.gl.RGBA,this.gl.FLOAT,A)}this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.bindTexture(this.gl.TEXTURE_2D,null)};const lt=`
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
`;function ne(i,n,l,f){this.water=n,this.gl=i,this.tileTexture=g.Texture.fromImage(document.getElementById("tiles"),{minFilter:this.gl.LINEAR_MIPMAP_LINEAR,wrap:this.gl.REPEAT,format:this.gl.RGB}),this.franceTexture=g.Texture.fromImage(document.getElementById("france"),{minFilter:this.gl.LINEAR_MIPMAP_LINEAR,wrap:this.gl.REPEAT,format:this.gl.RGBA}),this.chinaTexture=g.Texture.fromImage(document.getElementById("china"),{minFilter:this.gl.LINEAR_MIPMAP_LINEAR,wrap:this.gl.REPEAT,format:this.gl.RGBA}),this.lettersTexture=g.Texture.fromImage(document.getElementById("letters"),{minFilter:this.gl.LINEAR,magFilter:this.gl.LINEAR,wrap:this.gl.REPEAT,format:this.gl.RGBA}),this.flagSize=f,this.flagSize=[1.5,1],this.flagCenter=l,this.lightDir=new g.Vector(2,2,-1).unit(),this.causticTex=new g.Texture(1024,1024),this.waterShaders=[];for(var x=0;x<2;x++)this.waterShaders[x]=new g.Shader(`
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
      
      
      `+Ie+lt+`
      makeStrF(printFrame) _num_ __ _k _m _DIV _h _endNum
      
      bool isOnConservedAreaGrid(vec2 pos, float size) {
        vec2 gridCoord = pos / size;
        return abs(fract(gridCoord.x) - 0.5) < 0.05 || abs(fract(gridCoord.y) - 0.5) < 0.05;
      }
      bool isInCircle(vec2 position, vec2 center, float R, float r) {
        vec2 diff = position - center;
        float dist_sq = dot(diff, diff);
        return dist_sq < R*R && dist_sq > r*r;
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
            color += vec3(pow(max(0.0, dot(light, ray)), 5000.0)) * vec3(10.0, 8.0, 6.0);
          }
        }
        if (ray.y < 0.0) {
          color *= waterColor;
          vec2 position = origin.xz;
          vec2 projectedPosition = position;
          if (!showFlags) return color;
          vec2 coord = position / poolSize.xz + .5;
          vec3 divingWave = getDivingWaves(coord);
          if (divingWave.z > 0.) {
            color = (1. - divingWave.y) * color + divingWave.y * vec3(0., 1., 0.);
          }
          for (int i = 0; i < 10; i++) {
            float i_float = float(i);
            if (i_float > swimmersNumber - 0.1) break;
            vec2 swimmerPos = getAttributePosition(i);
            float swimmer_x = swimmerPos.x;
            float swimmer_z = swimmerPos.y;
            vec2 flagCenterNew = vec2(swimmer_x, swimmer_z - 2.5);
            vec2 flagCorner = flagCenterNew - flagSize / 2.;
            if (showProjectionGrid && isOnConservedAreaGrid(position, 0.1)) color = vec3(1., 1., 0.); /* Debug conserved area grid */
            if (abs(origin.z + poolSize.z / 2. - wr) < .05) color = vec3(1., 1., 0.); 
            if (areaConservation) {
              vec2 coord = origin.xz / poolSize.xz + 0.5;
              position = texture(areaConservationTexture, coord).xy;
              flagCorner = texture(areaConservationTexture, flagCorner / poolSize.xz + 0.5).xy;
            }
            if (showAreaConservedGrid && isOnConservedAreaGrid(position, 0.1)) color = vec3(1., 0., 0.); /* Debug conserved area grid */
            vec2 posFlag = position - flagCorner - flagSize / 2.;/*Fixes the corner of the flag on the XZ plane*/
            vec2 flagCoord = posFlag / flagSize + 0.5;
            if (abs(posFlag.x) <= flagSize.x / 2. && abs(posFlag.y) <= flagSize.y / 2.) {
              vec3 flagColor;
              if(getNationality(i) < .5) flagColor = texture(france, vec2(1.-flagCoord.y,1.- flagCoord.x)).xyz;
              else flagColor = texture(china, vec2(1.-flagCoord.y,1.- flagCoord.x)).xyz;
              color = flagColor;              
            }
            vec3 letterColor = GREEN/.4 * printFrame(vec2(1. - flagCoord.y - 1.5, 1. - flagCoord.x) / 15., getAttributeSpeed(i), 2);
            float altitude = getAltitude(i);
            if (max(letterColor.r, max(letterColor.g, letterColor.b)) > .3) color = letterColor;
            if (!shadowEnabled || abs(altitude) < .15) continue;
            vec2 diff = (projectedPosition - swimmerPos);
            vec2 diffNormalized = diff/shadowRadius;
            float distSq = dot(diffNormalized, diffNormalized);
            float attenuation = min(1., pow(distSq, shadowPower));
            float altitudeAttenuation = min(1., abs(altitude));
            attenuation = 1.-(1.-attenuation)*altitudeAttenuation;
            color *= attenuation;
            if (!showCircle) continue;
            distSq = dot(diff, diff);
            color += max(0.,1.-abs((shadowCircleRadius - distSq)/shadowCircleStroke)) * vec3(1., 1., 0.) * altitudeAttenuation;
          }
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
    `);this.sphereMesh=g.Mesh.sphere({detail:10}),this.sphereShader=new g.Shader(fe+`
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
  `),this.reset(),this.cubeShader=new g.Shader(fe+`
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
  `),this.sphereCenter=new g.Vector,this.sphereRadius=0;var A=!!this.gl.getExtension("OES_standard_derivatives");this.causticsShader=new g.Shader(fe+`
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
  `,(A?`#extension GL_OES_standard_derivatives: enable
`:"")+`
  `+fe+`
    in vec3 oldPos;
    in vec3 newPos;
    in vec3 ray;
    out vec4 fragColor;

  void main() {
    `+(A?`
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
  `)}ne.prototype.reset=function(){this.cubeMesh=g.Mesh.cube({width:this.water.poolSize.x,height:2,depth:this.water.poolSize.z}),this.cubeMesh.triangles.splice(4,2),this.cubeMesh.compile()};ne.prototype.updateCaustics=function(i){};ne.prototype.renderWater=function(i,n,l,f,x){var A=new g.Raytracer;i.textureA.bind(0),this.tileTexture.bind(1),n.bind(2),this.causticTex.bind(3),this.franceTexture.bind(4),this.chinaTexture.bind(8),this.lettersTexture.bind(7),i.areaConservationTexture.bind(5);const b=S.getAttributesTexture();b&&b.bind(6),this.gl.enable(this.gl.CULL_FACE);for(var z=0;z<2;z++)this.gl.cullFace(z?this.gl.BACK:this.gl.FRONT),this.waterShaders[z].uniforms({light:this.lightDir,water:0,tiles:1,sky:2,causticTex:3,france:4,china:8,areaConservationTexture:5,swimmersAttributesTexture:6,iChannel0:7,areaConservation:i.areaConservationEnabled,flagSize:[.66,1],flagCenter:[this.flagCenter.x,this.flagCenter.y],poolSize:[i.poolSize.x,i.poolSize.y,i.poolSize.z],poolSizeVertexShader:[i.poolSize.x,i.poolSize.y,i.poolSize.z],eye:A.eye,sphereCenter:this.sphereCenter,sphereRadius:this.sphereRadius,showProjectionGrid:i.showProjectionGrid,showAreaConservedGrid:i.showAreaConservedGrid,wr:i.WR_position,swimmersNumber:l.length,showFlags:S.showFlags,time:f,shadowEnabled:x.enabled,shadowRadius:x.shadowRadius,shadowPower:x.shadowPower,showCircle:x.showCircle,shadowCircleRadius:x.circleRadius,shadowCircleStroke:x.circleStroke}).draw(i.plane);this.gl.disable(this.gl.CULL_FACE)};ne.prototype.renderSpheres=function(i){for(let n of i.spheres)this.renderSphere(i,n)};ne.prototype.renderSphere=function(i,n){i.textureA.bind(0),this.causticTex.bind(1),this.sphereShader.uniforms({light:this.lightDir,water:0,causticTex:1,sphereCenter:[n.center.x,n.center.y,n.center.z],sphereRadius:n.radius,poolSize:[i.poolSize.x,i.poolSize.y,i.poolSize.z]}).draw(n.mesh)};ne.prototype.renderSphereOld=function(i){i.textureA.bind(0),this.causticTex.bind(1),this.sphereShader.uniforms({light:this.lightDir,water:0,causticTex:1,sphereCenter:this.sphereCenter,sphereRadius:this.sphereRadius,poolSize:[i.poolSize.x,i.poolSize.y,i.poolSize.z]}).draw(this.sphereMesh)};ne.prototype.renderCube=function(i){this.gl.enable(this.gl.CULL_FACE),i.textureA.bind(0),this.tileTexture.bind(1),this.causticTex.bind(2),this.cubeShader.uniforms({light:this.lightDir,water:0,tiles:1,causticTex:2,sphereCenter:this.sphereCenter,sphereRadius:this.sphereRadius,poolSize:[i.poolSize.x,i.poolSize.y,i.poolSize.z]}).draw(this.cubeMesh),this.gl.disable(this.gl.CULL_FACE)};function De(i,n){this.gl=n,this.id=n.createTexture(),n.bindTexture(n.TEXTURE_CUBE_MAP,this.id),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,1),n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAG_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.texImage2D(n.TEXTURE_CUBE_MAP_NEGATIVE_X,0,n.RGB,n.RGB,n.UNSIGNED_BYTE,i.xneg),n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X,0,n.RGB,n.RGB,n.UNSIGNED_BYTE,i.xpos),n.texImage2D(n.TEXTURE_CUBE_MAP_NEGATIVE_Y,0,n.RGB,n.RGB,n.UNSIGNED_BYTE,i.yneg),n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_Y,0,n.RGB,n.RGB,n.UNSIGNED_BYTE,i.ypos),n.texImage2D(n.TEXTURE_CUBE_MAP_NEGATIVE_Z,0,n.RGB,n.RGB,n.UNSIGNED_BYTE,i.zneg),n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_Z,0,n.RGB,n.RGB,n.UNSIGNED_BYTE,i.zpos)}De.prototype.bind=function(i){this.gl.activeTexture(this.gl.TEXTURE0+(i||0)),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,this.id)};De.prototype.unbind=function(i){this.gl.activeTexture(this.gl.TEXTURE0+(i||0)),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,null)};const We=200,ct=`
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

`;class ft{constructor(n,l){if(this.gl=n,this.copyVideo=!1,this.show=!1,n===null){alert("Unable to initialize WebGL. Your browser or machine may not support it.");return}n.clearColor(0,0,0,1),n.clear(n.COLOR_BUFFER_BIT),this.shader=new g.Shader(`
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

    `+ct+Ie+`

    void main(void) {
        highp vec4 texelColor = texture(uSampler, vTextureCoord);
        fragColor = vec4(texelColor.rgb, 0.5);
        if (!sparksEnabled) return;
        vec3 spark1 = sparks(gl_FragCoord.xy, vec3(2., 1., -poolSize.z / 2.), .1);
        vec3 spark2 = sparks(gl_FragCoord.xy, vec3(-2., 1., -poolSize.z / 2.), .1);
        vec3 spark = vec3(0., 0., 0.);
        // spark = spark1 + spark2;
        for (int i = 0; i < 10; i++) {
            float i_float = float(i);
            vec3 sparkPos = vec3(25. / 2. - 25. / 10. / 2. - i_float * 25./10., 1., -25.);
            float reactionTime = getAttributeReactionTime(i);
            spark += sparks(gl_FragCoord.xy, sparkPos, reactionTime);
        }
        // fragColor = vec4(mix(fragColor.rgb, spark, .5), max(0.5, 2.*length(spark)));
        fragColor = vec4(mix(fragColor.rgb, spark, 2.*length(spark)), max(0.5, 2.*length(spark)));
        // fragColor = vec4(fragColor.rgb + spark, max(0.5, 2.*length(spark)));
        // float m = max(fragColor.r, max(fragColor.g, fragColor.b));
        // if (m > 1.) fragColor.rgb /= m;
        // fragColor = vec4(spark, 2.*length(spark));
        // fragColor = vec4(1, 0, 0, 1);
    }
`),this.mesh=g.Mesh.plane({width:2,height:2,coords:!0,normals:!0}),this.mesh.transform(g.Matrix.rotate(90,1,0,0)),this.mesh.transform(g.Matrix.translate(0,.1,0)),this.programInfo=null,this.texture=this.initTexture(),this.video=this.setupVideo(l),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!0)}render(n,l,f){this.show&&(this.copyVideo&&this.updateTexture(),(!this.mesh.vertexBuffers||!this.mesh.vertexBuffers.vertex)&&this.mesh.compile(),this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture),S.swimmersAttributesTexture&&S.swimmersAttributesTexture.bind(1),this.shader.uniforms({uSampler:0,swimmersHelperFunctions:1,iTime:n,poolSize:[f.x,f.y,f.z],iResolution:[this.gl.canvas.width,this.gl.canvas.height],sparksEnabled:l.enabled,sparksGlow:l.glow,sparksGlowOffset:l.glowOffset,sparksStroke:l.stroke,sparksNumber:l.num,sparksLengthFactor:l.lengthFactor,sparksSizeFactor:l.sizeFactor,fov:l.fov}).draw(this.mesh),this.gl.disable(this.gl.BLEND))}initTexture(){const n=this.gl.createTexture();this.gl.bindTexture(this.gl.TEXTURE_2D,n);const l=0,f=this.gl.RGBA,x=1,A=1,b=0,z=this.gl.RGBA,N=this.gl.UNSIGNED_BYTE,G=new Uint8Array([0,0,255,255]);return this.gl.texImage2D(this.gl.TEXTURE_2D,l,f,x,A,b,z,N,G),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),n}updateTexture(){const l=this.gl.RGBA,f=this.gl.RGBA,x=this.gl.UNSIGNED_BYTE;this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture),this.gl.texImage2D(this.gl.TEXTURE_2D,0,l,f,x,this.video)}setupVideo(n){const l=document.createElement("video");let f=!1,x=!1;l.playsInline=!0,l.muted=!0,l.loop=!0,l.addEventListener("playing",()=>{f=!0,b()},!0),l.addEventListener("timeupdate",()=>{x=!0,b()},!0),l.src=n,l.play();const A=this,b=()=>{f&&x&&(A.copyVideo=!0)};return l}}function dt(i){return i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n/g,"<br>")}function ht(i){var n=dt(i);n=="WebGL not supported"&&(n='Your browser does not support WebGL.<br>Please see    <a href="http://www.khronos.org/webgl/wiki/Getting_a_WebGL_Implementation">    Getting a WebGL Implementation</a>.');var l=document.getElementById("loading");l.innerHTML=n,l.style.zIndex=1}window.onerror=ht;var E=g.create(),R,Ue,V;const L=[],Pe=10;var de=-25,we=-200.5,_e=0;let Ae=0,Re=0;var he=4;const Oe=17;let ue=0,me=0;var te=!1,Ee,Me,M=new g.Vector(2,1,2);S.initAttributes(E,M);let B=new g.Vector(256,256);const ut=new Je;function Xe(){document.getElementById("warning").hidden=!(B.x*B.y>3e5&&R&&R.areaConservationEnabled)}let Se=0;function mt(i){Se+=i,Se>=1&&(document.getElementById("fps").innerText=`${(1/i).toFixed(1)} FPS`,Se=0)}function ie(){console.log("reset"),document.getElementById("resolution").innerText=`Resolution: ${B.x} x ${B.y}`,Xe(),Ee=new g.Vector(0,-M.z/2+1),R.reset(M,B),V.flagCenter=Ee,V.flagSize=Me,V.reset();const i=M.x/Pe;let n=-M.x/2+i/2;for(let l of L)l.body.center.x=n,l.startingPoint.x=n,n+=i}window.onload=function(){var i=window.devicePixelRatio||1,n=document.getElementById("help");function l(){var s=innerWidth,d=innerHeight;E.canvas.width=s*i,E.canvas.height=d*i,E.canvas.style.width=s+"px",E.canvas.style.height=d+"px",E.viewport(0,0,E.canvas.width,E.canvas.height),E.matrixMode(E.PROJECTION),E.loadIdentity(),E.perspective(P.focal,E.canvas.width/E.canvas.height,.01,100),E.matrixMode(E.MODELVIEW),h()}document.body.appendChild(E.canvas),E.canvas.oncontextmenu=function(s){s.preventDefault()},E.clearColor(0,0,0,1),Ee=new g.Vector(0,-M.z/2+1),Me=.7,R=new H(E,M);const f=new ft(E,"./video.mp4"),x=document.getElementById("drop-zone");let A=0;document.addEventListener("dragenter",s=>{A++,x.style.display="flex"}),document.addEventListener("dragover",s=>{s.preventDefault(),s.dataTransfer.dropEffect="copy"}),document.addEventListener("dragleave",s=>{A--,A===0&&(x.style.display="none")}),document.addEventListener("drop",s=>{s.preventDefault(),A=0,x.style.display="none";const d=s.dataTransfer.files;if(d.length>0&&(d[0].type.startsWith("video/")||d[0].name.endsWith(".mp4"))){const u=URL.createObjectURL(d[0]);f.video.src=u,f.video.play(),console.log("Loaded:",d[0].name)}});const b=ut.addFolder("variables");b.add(M,"x",1,25).name("pool width").onChange(function(s){ie()}).listen(),b.add(M,"z",1,50).name("pool height").onChange(function(s){ie()}).listen(),b.add(M,"y",1,3).name("pool depth").onChange(function(s){ie()}).listen(),b.add(R,"damping",.005,.15).name("water damping").listen(),b.add(R,"areaConservationEnabled","areaConservationEnabled").name("area conservation").listen(),b.add(S,"showFlags").name("show flags").listen(),b.add(P,"focal",28,45).name("focal").listen().onChange(function(s){P.sparks.fov=s*2*Math.PI/360,E.matrixMode(E.PROJECTION),E.loadIdentity(),E.perspective(P.focal,E.canvas.width/E.canvas.height,.01,100),E.matrixMode(E.MODELVIEW),console.log("perspective : "+P.focal)});const z=b.addFolder("Sparks");z.add(P.sparks,"enabled").name("sparks enabled"),z.add(P.sparks,"glow",1,30).name("sparks glow factor"),z.add(P.sparks,"lengthFactor",.1,10).name("sparks length factor"),z.add(P.sparks,"glowOffset",.1,3).name("sparks glow offset"),z.add(P.sparks,"stroke",.001,.05).name("sparks stroke"),z.add(P.sparks,"num",10,We).step(1).name("sparks number"),z.add(P.sparks,"sizeFactor",10,100).name("size factor");const N=b.addFolder("Swimmers shadows");if(N.add(P.shadow,"enabled").name("enable"),N.add(P.shadow,"shadowRadius",0,2).name("shadow radius"),N.add(P.shadow,"shadowPower",.1,2).name("shadow power"),N.add(P.shadow,"showCircle").name("circle"),N.add(P.shadow,"circleRadius",.5,2).name("circle radius"),N.add(P.shadow,"circleStroke",.1,.5).name("circle stroke"),b.addFolder("Simulation").add(P.simulation,"optimized").name("optimized"),V=new ne(E,R,Ee,Me),Ue=new De({xneg:document.getElementById("xneg"),xpos:document.getElementById("xpos"),yneg:document.getElementById("ypos"),ypos:document.getElementById("ypos"),zneg:document.getElementById("zneg"),zpos:document.getElementById("zpos")},E),!R.textureA.canDrawTo()||!R.textureB.canDrawTo())throw new Error("Rendering to floating-point textures is required but not supported");const I=new g.Vector(-.4,-.75,.2),w=new g.Vector(.4,-.75,.2),q=new S(I);new S(w);for(let s=0;s<1;s++)L.push(new S(I));const Y=q.body.radius;for(let s of L)R.addSwimmer(s);ie();for(var U=0;U<20;U++)R.addDrop(Math.random()*2-1,Math.random()*2-1,.06,U&1?.01:-.01);document.getElementById("loading").innerHTML="",l();var ae=window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(s){setTimeout(s,0)},j=new Date().getTime();function W(){var s=new Date().getTime();te||(m((s-j)/1e3),h()),j=s,ae(W)}ae(W),window.onresize=l;var J,se,K,Z=-1,ye=0,pe=1,O=2;const $=3;var k,re;function v(s,d,u){if(k=s,re=d,!u||u.button===0){var p=new g.Raytracer,y=p.getRayForPixel(s*i,d*i),_=p.eye.add(y.multiply(-p.eye.y/y.y));for(let F of L){var T=g.Raytracer.hitTestSphere(p.eye,y,F.body.center,F.body.radius);if(T){Z=pe,K=F,F.body.cinematic=!0,J=T.hit,se=p.getRayForPixel(E.canvas.width/2,E.canvas.height/2).negative();return}}Math.abs(_.x)<M.x/2&&Math.abs(_.z)<M.z/2&&(Z=ye,t(s,d))}else u.button===2?Z=O:u.button===1&&(Z=$)}function t(s,d,u){switch(Z){case ye:{var p=new g.Raytracer,y=p.getRayForPixel(s*i,d*i),_=p.eye.add(y.multiply(-p.eye.y/y.y));R.addDrop(_.x/M.x*2,_.z/M.z*2,.06,.03),te&&(R.updateNormals(),V.updateCaustics(R));break}case pe:{var p=new g.Raytracer,y=p.getRayForPixel(s*i,d*i),T=-se.dot(p.eye.subtract(J))/se.dot(y),F=p.eye.add(y.multiply(T));const ee=K.body.center.add(F.subtract(J)),ve=K.body.radius,He=Math.max(ve-M.x/2,Math.min(M.x/2-ve,ee.x)),qe=Math.max(ve-M.y,Math.min(10,ee.y)),Ye=Math.max(ve-M.z/2,Math.min(M.z/2-ve,ee.z));K.body.move(new g.Vector(He,qe,Ye)),J=F,te&&V.updateCaustics(R);break}case O:{if(u&&u.shiftKey){_e-=s-k,_e=Math.max(-89.999,Math.min(89.999,_e));break}we-=s-k,de-=d-re,de=Math.max(-89.999,Math.min(89.999,de));break}case $:{const C=.001*he;Ae+=C*(s-k),Re-=C*(d-re)}}k=s,re=d,te&&h()}function r(){Z=-1,K&&(K.body.cinematic=!S.useGravity)}function e(s){return s===n||s.parentNode&&e(s.parentNode)}function o(s){he*=1-s*4e-4,he=Math.max(2,Math.min(1e3,he)),te&&h()}addEventListener("wheel",function(s){var d=s.deltaY;o(-d)}),document.onmousedown=function(s){e(s.target)||(s.preventDefault(),v(s.pageX,s.pageY,s))},document.onmousemove=function(s){t(s.pageX,s.pageY,s)},document.onmouseup=function(){r()},document.ontouchstart=function(s){s.touches.length===1&&!e(s.target)&&(s.preventDefault(),v(s.touches[0].pageX,s.touches[0].pageY,!1))},document.ontouchmove=function(s){s.touches.length===1&&t(s.touches[0].pageX,s.touches[0].pageY)},document.ontouchend=function(s){s.touches.length==0&&r()};function a(){S.raceHasStarted=!0;for(let s of L)s.started=!1}function c(){S.raceHasStarted=!1;for(let s of L)s.swim(!1,M)}document.onkeydown=function(s){if(s.which==32)te=!te;else if(s.which==71){for(let d of L)d.body.cinematic=!d.body.cinematic;S.useGravity=!S.useGravity}else if(s.which==76&&te)h();else if(s.which==74)jump();else if(s.which==67)R.setAreaConservation(!R.areaConservationEnabled),Xe(),console.log("Area conservation "+(R.areaConservationEnabled?"enabled.":"disabled."));else if(s.which==80)R.showProjectionGrid=!R.showProjectionGrid,console.log("Projection grid "+(R.showProjectionGrid?"enabled.":"disabled."));else if(s.which==65)R.showAreaConservedGrid=!R.showAreaConservedGrid,console.log("Area conserved grid "+(R.showAreaConservedGrid?"enabled.":"disabled."));else if(s.which==83){if(S.swimming=!S.swimming,S.swimming)for(let d of L)d.swim(!0,M);else c();console.log("Swimming "+(S.swimming?"enabled.":"disabled."))}else if(s.which==86)f.show=!f.show;else if(s.which==79){if(M.x=25,M.y=2,M.z=50,B.x=1024,B.y=2048,R.setAreaConservation(!1),R.damping=.1,L.length!=Pe)for(let d=L.length;d<Pe;d++){const u=new S(I);L.push(u),R.addSwimmer(u)}ue=0,f.copyVideo&&(f.video.currentTime=ue),ie(),P.focal=31.75,P.sparks.fov=P.focal*2*Math.PI/360,E.matrixMode(E.PROJECTION),E.loadIdentity(),E.perspective(P.focal,E.canvas.width/E.canvas.height,.01,100),E.matrixMode(E.MODELVIEW),Ae=-.42,Re=1.18,he=52.5,de=-24,we=-261.5,_e=-4,console.log("Olympic mode enabled.")}else if(s.which==87){if(S.raceHasStarted){S.raceHasStarted=!1,c();return}R.WR_position=0,ue=Oe,f.copyVideo&&(f.video.currentTime=ue),a(),S.useGravity=!0;for(let d of L)d.hasDove=!1}else s.which==72?(document.getElementById("commands").hidden=!document.getElementById("commands").hidden,document.getElementById("h").hidden=!document.getElementById("h").hidden):s.which==40?(B.x>129&&(B.x=Math.round(B.x/2)),ie(),console.log("decreasing x resolution")):s.which==38?(B.x<16384&&(B.x=Math.round(B.x*2)),ie(),console.log("increasing x resolution")):s.which==37?(B.y>129&&(B.y=Math.round(B.y/2)),ie(),console.log("decreasing y resolution")):s.which==39&&(B.y<16384&&(B.y=Math.round(B.y*2)),ie(),console.log("increasing y resolution"))};function m(s,d){if(!(s>1)){if(Z==pe)for(let u of L)u.body.velocity=new g.Vector(0,0,0);me=ue-Oe;for(let u of L)u.update(s,me,M);R.updateSpheres(s);for(let u=0;u<P.numSteps;u++)R.stepSimulation();V.updateCaustics(R),ue+=s,mt(s)}}function h(s){g.keys.L&&(V.lightDir=g.Vector.fromAngles((90-we)*Math.PI/180,-de*Math.PI/180),te&&V.updateCaustics(R)),S.showFlags&&S.updateAttributesTexture(L),R.addOrRemoveVisualizationWaves(!0,L,me),R.updateNormals(),E.clear(E.COLOR_BUFFER_BIT|E.DEPTH_BUFFER_BIT),E.loadIdentity(),E.translate(Ae,Re,-he),E.rotate(-_e,0,0,1),E.rotate(-de,1,0,0),E.rotate(-we,0,1,0),E.translate(0,.5,0),E.enable(E.DEPTH_TEST),V.sphereCenter=L[0].body.center,V.sphereRadius=Y,V.renderCube(R),V.renderWater(R,Ue,L,me,P.shadow),V.renderSpheres(R),f.render(me,P.sparks,M),E.disable(E.DEPTH_TEST),R.addOrRemoveVisualizationWaves(!1,L,me)}};
//# sourceMappingURL=swimming-Bm2dCLd-.js.map
