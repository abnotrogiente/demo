var Ne=Object.defineProperty;var Le=(r,s,u)=>s in r?Ne(r,s,{enumerable:!0,configurable:!0,writable:!0,value:u}):r[s]=u;var W=(r,s,u)=>Le(r,typeof s!="symbol"?s+"":s,u);import"./modulepreload-polyfill-B5Qt9EMX.js";import{g as Oe}from"./lil-gui.module.min-Vka56b52.js";var v=function(){var r,s={create:function(t){t=t||{};var i=document.createElement("canvas");i.width=800,i.height=600,"alpha"in t||(t.alpha=!1);try{r=i.getContext("webgl2",t)}catch{}try{r=r||i.getContext("experimental-webgl",t)}catch{}if(!r)throw new Error("WebGL not supported");return r.HALF_FLOAT_OES=36193,u(),m(),x(),Y(),r},keys:{},Matrix:y,Indexer:K,Buffer:G,Mesh:L,HitTest:k,Raytracer:ee,Shader:se,Texture:B,Vector:p};function u(){r.MODELVIEW=Q|1,r.PROJECTION=Q|2;var t=new y,i=new y;r.modelviewMatrix=new y,r.projectionMatrix=new y;var e=[],o=[],a,l;r.matrixMode=function(h){switch(h){case r.MODELVIEW:a="modelviewMatrix",l=e;break;case r.PROJECTION:a="projectionMatrix",l=o;break;default:throw new Error("invalid matrix mode "+h)}},r.loadIdentity=function(){y.identity(r[a])},r.loadMatrix=function(h){for(var n=h.m,d=r[a].m,c=0;c<16;c++)d[c]=n[c]},r.multMatrix=function(h){r.loadMatrix(y.multiply(r[a],h,i))},r.perspective=function(h,n,d,c){r.multMatrix(y.perspective(h,n,d,c,t))},r.frustum=function(h,n,d,c,f,g){r.multMatrix(y.frustum(h,n,d,c,f,g,t))},r.ortho=function(h,n,d,c,f,g){r.multMatrix(y.ortho(h,n,d,c,f,g,t))},r.scale=function(h,n,d){r.multMatrix(y.scale(h,n,d,t))},r.translate=function(h,n,d){r.multMatrix(y.translate(h,n,d,t))},r.rotate=function(h,n,d,c){r.multMatrix(y.rotate(h,n,d,c,t))},r.lookAt=function(h,n,d,c,f,g,E,_,w){r.multMatrix(y.lookAt(h,n,d,c,f,g,E,_,w,t))},r.pushMatrix=function(){l.push(Array.prototype.slice.call(r[a].m))},r.popMatrix=function(){var h=l.pop();r[a].m=O?new Float32Array(h):h},r.project=function(h,n,d,c,f,g){c=c||r.modelviewMatrix,f=f||r.projectionMatrix,g=g||r.getParameter(r.VIEWPORT);var E=f.transformPoint(c.transformPoint(new p(h,n,d)));return new p(g[0]+g[2]*(E.x*.5+.5),g[1]+g[3]*(E.y*.5+.5),E.z*.5+.5)},r.unProject=function(h,n,d,c,f,g){c=c||r.modelviewMatrix,f=f||r.projectionMatrix,g=g||r.getParameter(r.VIEWPORT);var E=new p((h-g[0])/g[2]*2-1,(n-g[1])/g[3]*2-1,d*2-1);return y.inverse(y.multiply(f,c,t),i).transformPoint(E)},r.matrixMode(r.MODELVIEW)}function m(){var t={mesh:new L({coords:!0,colors:!0,triangles:!1}),mode:-1,coord:[0,0,0,0],color:[1,1,1,1],shader:new se("      uniform float pointSize;      out vec4 color;      out vec4 coord;      void main() {        color = gl_Color;        coord = gl_TexCoord;        gl_Position = gl_ModelViewProjectionMatrix * gl_Vertex;        gl_PointSize = pointSize;      }    ","      uniform sampler2D tex;      uniform float pointSize;      uniform bool useTexture;      in vec4 color;      in vec4 coord;      out vec4 fragColor;      void main() {        fragColor = color;        if (useTexture) fragColor *= texture(tex, coord.xy);      }    ")};r.pointSize=function(i){t.shader.uniforms({pointSize:i})},r.begin=function(i){if(t.mode!=-1)throw new Error("mismatched gl.begin() and gl.end() calls");t.mode=i,t.mesh.colors=[],t.mesh.coords=[],t.mesh.vertices=[]},r.color=function(i,e,o,a){t.color=arguments.length==1?i.toArray().concat(1):[i,e,o,a||1]},r.texCoord=function(i,e){t.coord=arguments.length==1?i.toArray(2):[i,e]},r.vertex=function(i,e,o){t.mesh.colors.push(t.color),t.mesh.coords.push(t.coord),t.mesh.vertices.push(arguments.length==1?i.toArray():[i,e,o])},r.end=function(){if(t.mode==-1)throw new Error("mismatched gl.begin() and gl.end() calls");t.mesh.compile(),t.shader.uniforms({useTexture:!!r.getParameter(r.TEXTURE_BINDING_2D)}).draw(t.mesh,t.mode),t.mode=-1}}function x(){var t=r,i=0,e=0,o={},a=!1,l=Object.prototype.hasOwnProperty;function h(){for(var _ in o)if(l.call(o,_)&&o[_])return!0;return!1}function n(_){var w={};for(var z in _)typeof _[z]=="function"?w[z]=function(Z){return function(){Z.apply(_,arguments)}}(_[z]):w[z]=_[z];w.original=_,w.x=w.pageX,w.y=w.pageY;for(var M=r.canvas;M;M=M.offsetParent)w.x-=M.offsetLeft,w.y-=M.offsetTop;return a?(w.deltaX=w.x-i,w.deltaY=w.y-e):(w.deltaX=0,w.deltaY=0,a=!0),i=w.x,e=w.y,w.dragging=h(),w.preventDefault=function(){w.original.preventDefault()},w.stopPropagation=function(){w.original.stopPropagation()},w}function d(_){r=t,h()||(R(document,"mousemove",c),R(document,"mouseup",f),I(r.canvas,"mousemove",c),I(r.canvas,"mouseup",f)),o[_.which]=!0,_=n(_),r.onmousedown&&r.onmousedown(_),_.preventDefault()}function c(_){r=t,_=n(_),r.onmousemove&&r.onmousemove(_),_.preventDefault()}function f(_){r=t,o[_.which]=!1,h()||(I(document,"mousemove",c),I(document,"mouseup",f),R(r.canvas,"mousemove",c),R(r.canvas,"mouseup",f)),_=n(_),r.onmouseup&&r.onmouseup(_),_.preventDefault()}function g(){a=!1}function E(){o={},a=!1}R(r.canvas,"mousedown",d),R(r.canvas,"mousemove",c),R(r.canvas,"mouseup",f),R(r.canvas,"mouseover",g),R(r.canvas,"mouseout",g),R(document,"contextmenu",E)}function C(t){var i={8:"BACKSPACE",9:"TAB",13:"ENTER",16:"SHIFT",27:"ESCAPE",32:"SPACE",37:"LEFT",38:"UP",39:"RIGHT",40:"DOWN"};return i[t]||(t>=65&&t<=90?String.fromCharCode(t):null)}function R(t,i,e){t.addEventListener(i,e)}function I(t,i,e){t.removeEventListener(i,e)}R(document,"keydown",function(t){if(!t.altKey&&!t.ctrlKey&&!t.metaKey){var i=C(t.keyCode);i&&(s.keys[i]=!0),s.keys[t.keyCode]=!0}}),R(document,"keyup",function(t){if(!t.altKey&&!t.ctrlKey&&!t.metaKey){var i=C(t.keyCode);i&&(s.keys[i]=!1),s.keys[t.keyCode]=!1}});function Y(){(function(t){r.makeCurrent=function(){r=t}})(r),r.animate=function(){var t=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(a){setTimeout(a,16.666666666666668)},i=new Date().getTime(),e=r;function o(){r=e;var a=new Date().getTime();r.onupdate&&r.onupdate((a-i)/1e3),r.ondraw&&r.ondraw(),t(o),i=a}o()},r.fullscreen=function(t){t=t||{};var i=t.paddingTop||0,e=t.paddingLeft||0,o=t.paddingRight||0,a=t.paddingBottom||0;if(!document.body)throw new Error("document.body doesn't exist yet (call gl.fullscreen() from window.onload() or from inside the <body> tag)");document.body.appendChild(r.canvas),document.body.style.overflow="hidden",r.canvas.style.position="absolute",r.canvas.style.left=e+"px",r.canvas.style.top=i+"px";function l(){r.canvas.width=window.innerWidth-e-o,r.canvas.height=window.innerHeight-i-a,r.viewport(0,0,r.canvas.width,r.canvas.height),(t.camera||!("camera"in t))&&(r.matrixMode(r.PROJECTION),r.loadIdentity(),r.perspective(t.fov||45,r.canvas.width/r.canvas.height,t.near||.1,t.far||1e3),r.matrixMode(r.MODELVIEW)),r.ondraw&&r.ondraw()}R(window,"resize",l),l()}}var Q=305397760,O=typeof Float32Array<"u";function y(){var t=Array.prototype.concat.apply([],arguments);t.length||(t=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),this.m=O?new Float32Array(t):t}y.prototype={inverse:function(){return y.inverse(this,new y)},transpose:function(){return y.transpose(this,new y)},multiply:function(t){return y.multiply(this,t,new y)},transformPoint:function(t){var i=this.m;return new p(i[0]*t.x+i[1]*t.y+i[2]*t.z+i[3],i[4]*t.x+i[5]*t.y+i[6]*t.z+i[7],i[8]*t.x+i[9]*t.y+i[10]*t.z+i[11]).divide(i[12]*t.x+i[13]*t.y+i[14]*t.z+i[15])},transformVector:function(t){var i=this.m;return new p(i[0]*t.x+i[1]*t.y+i[2]*t.z,i[4]*t.x+i[5]*t.y+i[6]*t.z,i[8]*t.x+i[9]*t.y+i[10]*t.z)}},y.inverse=function(t,i){i=i||new y;var e=t.m,o=i.m;o[0]=e[5]*e[10]*e[15]-e[5]*e[14]*e[11]-e[6]*e[9]*e[15]+e[6]*e[13]*e[11]+e[7]*e[9]*e[14]-e[7]*e[13]*e[10],o[1]=-e[1]*e[10]*e[15]+e[1]*e[14]*e[11]+e[2]*e[9]*e[15]-e[2]*e[13]*e[11]-e[3]*e[9]*e[14]+e[3]*e[13]*e[10],o[2]=e[1]*e[6]*e[15]-e[1]*e[14]*e[7]-e[2]*e[5]*e[15]+e[2]*e[13]*e[7]+e[3]*e[5]*e[14]-e[3]*e[13]*e[6],o[3]=-e[1]*e[6]*e[11]+e[1]*e[10]*e[7]+e[2]*e[5]*e[11]-e[2]*e[9]*e[7]-e[3]*e[5]*e[10]+e[3]*e[9]*e[6],o[4]=-e[4]*e[10]*e[15]+e[4]*e[14]*e[11]+e[6]*e[8]*e[15]-e[6]*e[12]*e[11]-e[7]*e[8]*e[14]+e[7]*e[12]*e[10],o[5]=e[0]*e[10]*e[15]-e[0]*e[14]*e[11]-e[2]*e[8]*e[15]+e[2]*e[12]*e[11]+e[3]*e[8]*e[14]-e[3]*e[12]*e[10],o[6]=-e[0]*e[6]*e[15]+e[0]*e[14]*e[7]+e[2]*e[4]*e[15]-e[2]*e[12]*e[7]-e[3]*e[4]*e[14]+e[3]*e[12]*e[6],o[7]=e[0]*e[6]*e[11]-e[0]*e[10]*e[7]-e[2]*e[4]*e[11]+e[2]*e[8]*e[7]+e[3]*e[4]*e[10]-e[3]*e[8]*e[6],o[8]=e[4]*e[9]*e[15]-e[4]*e[13]*e[11]-e[5]*e[8]*e[15]+e[5]*e[12]*e[11]+e[7]*e[8]*e[13]-e[7]*e[12]*e[9],o[9]=-e[0]*e[9]*e[15]+e[0]*e[13]*e[11]+e[1]*e[8]*e[15]-e[1]*e[12]*e[11]-e[3]*e[8]*e[13]+e[3]*e[12]*e[9],o[10]=e[0]*e[5]*e[15]-e[0]*e[13]*e[7]-e[1]*e[4]*e[15]+e[1]*e[12]*e[7]+e[3]*e[4]*e[13]-e[3]*e[12]*e[5],o[11]=-e[0]*e[5]*e[11]+e[0]*e[9]*e[7]+e[1]*e[4]*e[11]-e[1]*e[8]*e[7]-e[3]*e[4]*e[9]+e[3]*e[8]*e[5],o[12]=-e[4]*e[9]*e[14]+e[4]*e[13]*e[10]+e[5]*e[8]*e[14]-e[5]*e[12]*e[10]-e[6]*e[8]*e[13]+e[6]*e[12]*e[9],o[13]=e[0]*e[9]*e[14]-e[0]*e[13]*e[10]-e[1]*e[8]*e[14]+e[1]*e[12]*e[10]+e[2]*e[8]*e[13]-e[2]*e[12]*e[9],o[14]=-e[0]*e[5]*e[14]+e[0]*e[13]*e[6]+e[1]*e[4]*e[14]-e[1]*e[12]*e[6]-e[2]*e[4]*e[13]+e[2]*e[12]*e[5],o[15]=e[0]*e[5]*e[10]-e[0]*e[9]*e[6]-e[1]*e[4]*e[10]+e[1]*e[8]*e[6]+e[2]*e[4]*e[9]-e[2]*e[8]*e[5];for(var a=e[0]*o[0]+e[1]*o[4]+e[2]*o[8]+e[3]*o[12],l=0;l<16;l++)o[l]/=a;return i},y.transpose=function(t,i){i=i||new y;var e=t.m,o=i.m;return o[0]=e[0],o[1]=e[4],o[2]=e[8],o[3]=e[12],o[4]=e[1],o[5]=e[5],o[6]=e[9],o[7]=e[13],o[8]=e[2],o[9]=e[6],o[10]=e[10],o[11]=e[14],o[12]=e[3],o[13]=e[7],o[14]=e[11],o[15]=e[15],i},y.multiply=function(t,i,e){e=e||new y;var o=t.m,a=i.m,l=e.m;return l[0]=o[0]*a[0]+o[1]*a[4]+o[2]*a[8]+o[3]*a[12],l[1]=o[0]*a[1]+o[1]*a[5]+o[2]*a[9]+o[3]*a[13],l[2]=o[0]*a[2]+o[1]*a[6]+o[2]*a[10]+o[3]*a[14],l[3]=o[0]*a[3]+o[1]*a[7]+o[2]*a[11]+o[3]*a[15],l[4]=o[4]*a[0]+o[5]*a[4]+o[6]*a[8]+o[7]*a[12],l[5]=o[4]*a[1]+o[5]*a[5]+o[6]*a[9]+o[7]*a[13],l[6]=o[4]*a[2]+o[5]*a[6]+o[6]*a[10]+o[7]*a[14],l[7]=o[4]*a[3]+o[5]*a[7]+o[6]*a[11]+o[7]*a[15],l[8]=o[8]*a[0]+o[9]*a[4]+o[10]*a[8]+o[11]*a[12],l[9]=o[8]*a[1]+o[9]*a[5]+o[10]*a[9]+o[11]*a[13],l[10]=o[8]*a[2]+o[9]*a[6]+o[10]*a[10]+o[11]*a[14],l[11]=o[8]*a[3]+o[9]*a[7]+o[10]*a[11]+o[11]*a[15],l[12]=o[12]*a[0]+o[13]*a[4]+o[14]*a[8]+o[15]*a[12],l[13]=o[12]*a[1]+o[13]*a[5]+o[14]*a[9]+o[15]*a[13],l[14]=o[12]*a[2]+o[13]*a[6]+o[14]*a[10]+o[15]*a[14],l[15]=o[12]*a[3]+o[13]*a[7]+o[14]*a[11]+o[15]*a[15],e},y.identity=function(t){t=t||new y;var i=t.m;return i[0]=i[5]=i[10]=i[15]=1,i[1]=i[2]=i[3]=i[4]=i[6]=i[7]=i[8]=i[9]=i[11]=i[12]=i[13]=i[14]=0,t},y.perspective=function(t,i,e,o,a){var l=Math.tan(t*Math.PI/360)*e,h=l*i;return y.frustum(-h,h,-l,l,e,o,a)},y.frustum=function(t,i,e,o,a,l,h){h=h||new y;var n=h.m;return n[0]=2*a/(i-t),n[1]=0,n[2]=(i+t)/(i-t),n[3]=0,n[4]=0,n[5]=2*a/(o-e),n[6]=(o+e)/(o-e),n[7]=0,n[8]=0,n[9]=0,n[10]=-(l+a)/(l-a),n[11]=-2*l*a/(l-a),n[12]=0,n[13]=0,n[14]=-1,n[15]=0,h},y.ortho=function(t,i,e,o,a,l,h){h=h||new y;var n=h.m;return n[0]=2/(i-t),n[1]=0,n[2]=0,n[3]=-(i+t)/(i-t),n[4]=0,n[5]=2/(o-e),n[6]=0,n[7]=-(o+e)/(o-e),n[8]=0,n[9]=0,n[10]=-2/(l-a),n[11]=-(l+a)/(l-a),n[12]=0,n[13]=0,n[14]=0,n[15]=1,h},y.scale=function(t,i,e,o){o=o||new y;var a=o.m;return a[0]=t,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=i,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=e,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,o},y.translate=function(t,i,e,o){o=o||new y;var a=o.m;return a[0]=1,a[1]=0,a[2]=0,a[3]=t,a[4]=0,a[5]=1,a[6]=0,a[7]=i,a[8]=0,a[9]=0,a[10]=1,a[11]=e,a[12]=0,a[13]=0,a[14]=0,a[15]=1,o},y.rotate=function(t,i,e,o,a){if(!t||!i&&!e&&!o)return y.identity(a);a=a||new y;var l=a.m,h=Math.sqrt(i*i+e*e+o*o);t*=Math.PI/180,i/=h,e/=h,o/=h;var n=Math.cos(t),d=Math.sin(t),c=1-n;return l[0]=i*i*c+n,l[1]=i*e*c-o*d,l[2]=i*o*c+e*d,l[3]=0,l[4]=e*i*c+o*d,l[5]=e*e*c+n,l[6]=e*o*c-i*d,l[7]=0,l[8]=o*i*c-e*d,l[9]=o*e*c+i*d,l[10]=o*o*c+n,l[11]=0,l[12]=0,l[13]=0,l[14]=0,l[15]=1,a},y.lookAt=function(t,i,e,o,a,l,h,n,d,c){c=c||new y;var f=c.m,g=new p(t,i,e),E=new p(o,a,l),_=new p(h,n,d),w=g.subtract(E).unit(),z=_.cross(w).unit(),M=w.cross(z).unit();return f[0]=z.x,f[1]=z.y,f[2]=z.z,f[3]=-z.dot(g),f[4]=M.x,f[5]=M.y,f[6]=M.z,f[7]=-M.dot(g),f[8]=w.x,f[9]=w.y,f[10]=w.z,f[11]=-w.dot(g),f[12]=0,f[13]=0,f[14]=0,f[15]=1,c};function K(){this.unique=[],this.indices=[],this.map={}}K.prototype={add:function(t){var i=JSON.stringify(t);return i in this.map||(this.map[i]=this.unique.length,this.unique.push(t)),this.map[i]}};function G(t,i){this.buffer=null,this.target=t,this.type=i,this.data=[]}G.prototype={compile:function(t){for(var i=[],e=0,o=1e4;e<this.data.length;e+=o)i=Array.prototype.concat.apply(i,this.data.slice(e,e+o));var a=this.data.length?i.length/this.data.length:0;if(a!=Math.round(a))throw new Error("buffer elements not of consistent size, average size is "+a);this.buffer=this.buffer||r.createBuffer(),this.buffer.length=i.length,this.buffer.spacing=a,r.bindBuffer(this.target,this.buffer),r.bufferData(this.target,new this.type(i),t||r.STATIC_DRAW)}};function L(t){t=t||{},this.vertexBuffers={},this.indexBuffers={},this.addVertexBuffer("vertices","gl_Vertex"),t.coords&&this.addVertexBuffer("coords","gl_TexCoord"),t.normals&&this.addVertexBuffer("normals","gl_Normal"),t.colors&&this.addVertexBuffer("colors","gl_Color"),(!("triangles"in t)||t.triangles)&&this.addIndexBuffer("triangles"),t.lines&&this.addIndexBuffer("lines")}L.prototype={addVertexBuffer:function(t,i){var e=this.vertexBuffers[i]=new G(r.ARRAY_BUFFER,Float32Array);e.name=t,this[t]=[]},addIndexBuffer:function(t){this.indexBuffers[t]=new G(r.ELEMENT_ARRAY_BUFFER,Uint16Array),this[t]=[]},compile:function(){for(var t in this.vertexBuffers){var i=this.vertexBuffers[t];i.data=this[i.name],i.compile()}for(var e in this.indexBuffers){var i=this.indexBuffers[e];i.data=this[e],i.compile()}},transform:function(t){if(this.vertices=this.vertices.map(function(e){return t.transformPoint(p.fromArray(e)).toArray()}),this.normals){var i=t.inverse().transpose();this.normals=this.normals.map(function(e){return i.transformVector(p.fromArray(e)).unit().toArray()})}return this.compile(),this},computeNormals:function(){this.normals||this.addVertexBuffer("normals","gl_Normal");for(var t=0;t<this.vertices.length;t++)this.normals[t]=new p;for(var t=0;t<this.triangles.length;t++){var i=this.triangles[t],e=p.fromArray(this.vertices[i[0]]),o=p.fromArray(this.vertices[i[1]]),a=p.fromArray(this.vertices[i[2]]),l=o.subtract(e).cross(a.subtract(e)).unit();this.normals[i[0]]=this.normals[i[0]].add(l),this.normals[i[1]]=this.normals[i[1]].add(l),this.normals[i[2]]=this.normals[i[2]].add(l)}for(var t=0;t<this.vertices.length;t++)this.normals[t]=this.normals[t].unit().toArray();return this.compile(),this},computeWireframe:function(){for(var t=new K,i=0;i<this.triangles.length;i++)for(var e=this.triangles[i],o=0;o<e.length;o++){var a=e[o],l=e[(o+1)%e.length];t.add([Math.min(a,l),Math.max(a,l)])}return this.lines||this.addIndexBuffer("lines"),this.lines=t.unique,this.compile(),this},getAABB:function(){var t={min:new p(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)};t.max=t.min.negative();for(var i=0;i<this.vertices.length;i++){var e=p.fromArray(this.vertices[i]);t.min=p.min(t.min,e),t.max=p.max(t.max,e)}return t},getBoundingSphere:function(){for(var t=this.getAABB(),i={center:t.min.add(t.max).divide(2),radius:0},e=0;e<this.vertices.length;e++)i.radius=Math.max(i.radius,p.fromArray(this.vertices[e]).subtract(i.center).length());return i}},L.plane=function(t){t=t||{};for(var i=new L(t),e=t.detailX||t.detail||1,o=t.detailY||t.detail||1,a=t.width||2,l=t.height||2,h=0;h<=o;h++)for(var n=h/o,d=0;d<=e;d++){var c=d/e;if(i.vertices.push([(c-.5)*a,(n-.5)*l,0]),i.coords&&i.coords.push([c,n]),i.normals&&i.normals.push([0,0,1]),d<e&&h<o){var f=d+h*(e+1);i.triangles.push([f,f+1,f+e+1]),i.triangles.push([f+e+1,f+1,f+e+2])}}return i.compile(),i};var ne=[[0,4,2,6,-1,0,0],[1,3,5,7,1,0,0],[0,1,4,5,0,-1,0],[2,6,3,7,0,1,0],[0,2,1,3,0,0,-1],[4,5,6,7,0,0,1]];function j(t){return new p((t&1)*2-1,(t&2)-1,(t&4)/2-1)}L.cube=function(t){for(var i=new L(t),e=t&&t.width||2,o=t&&t.height||2,a=t&&t.depth||2,l=0;l<ne.length;l++){for(var h=ne[l],n=l*4,d=0;d<4;d++){var c=h[d];const f=j(c).toArray();f[0]*=e/2,f[1]*=o/2,f[2]*=a/2,i.vertices.push(f),i.coords&&i.coords.push([d&1,(d&2)/2]),i.normals&&i.normals.push(h.slice(4,7))}i.triangles.push([n,n+1,n+2]),i.triangles.push([n+2,n+1,n+3])}return i.compile(),i},L.sphere=function(t){function i(M,Z,J){return d?[M,J,Z]:[M,Z,J]}function e(M){return M+(M-M*M)/2}t=t||{};for(var o=new L(t),a=new K,l=t.detail||6,h=0;h<8;h++)for(var n=j(h),d=n.x*n.y*n.z>0,c=[],f=0;f<=l;f++){for(var g=0;f+g<=l;g++){var E=f/l,_=g/l,w=(l-f-g)/l,z={vertex:new p(e(E),e(_),e(w)).unit().multiply(n).toArray()};o.coords&&(z.coord=n.y>0?[1-E,w]:[w,1-E]),c.push(a.add(z))}if(f>0)for(var g=0;f+g<=l;g++){var E=(f-1)*(l+1)+(f-1-(f-1)*(f-1))/2+g,_=f*(l+1)+(f-f*f)/2+g;o.triangles.push(i(c[E],c[E+1],c[_])),f+g<l&&o.triangles.push(i(c[_],c[E+1],c[_+1]))}}return o.vertices=a.unique.map(function(M){return M.vertex}),o.coords&&(o.coords=a.unique.map(function(M){return M.coord})),o.normals&&(o.normals=o.vertices),o.compile(),o},L.load=function(t,i){i=i||{},"coords"in i||(i.coords=!!t.coords),"normals"in i||(i.normals=!!t.normals),"colors"in i||(i.colors=!!t.colors),"triangles"in i||(i.triangles=!!t.triangles),"lines"in i||(i.lines=!!t.lines);var e=new L(i);return e.vertices=t.vertices,e.coords&&(e.coords=t.coords),e.normals&&(e.normals=t.normals),e.colors&&(e.colors=t.colors),e.triangles&&(e.triangles=t.triangles),e.lines&&(e.lines=t.lines),e.compile(),e};function k(t,i,e){this.t=arguments.length?t:Number.MAX_VALUE,this.hit=i,this.normal=e}k.prototype={mergeWith:function(t){t.t>0&&t.t<this.t&&(this.t=t.t,this.hit=t.hit,this.normal=t.normal)}};function ee(){var t=r.getParameter(r.VIEWPORT),i=r.modelviewMatrix.m,e=new p(i[0],i[4],i[8]),o=new p(i[1],i[5],i[9]),a=new p(i[2],i[6],i[10]),l=new p(i[3],i[7],i[11]);this.eye=new p(-l.dot(e),-l.dot(o),-l.dot(a));var h=t[0],n=h+t[2],d=t[1],c=d+t[3];this.ray00=r.unProject(h,d,1).subtract(this.eye),this.ray10=r.unProject(n,d,1).subtract(this.eye),this.ray01=r.unProject(h,c,1).subtract(this.eye),this.ray11=r.unProject(n,c,1).subtract(this.eye),this.viewport=t}ee.prototype={getRayForPixel:function(t,i){t=(t-this.viewport[0])/this.viewport[2],i=1-(i-this.viewport[1])/this.viewport[3];var e=p.lerp(this.ray00,this.ray10,t),o=p.lerp(this.ray01,this.ray11,t);return p.lerp(e,o,i).unit()}},ee.hitTestBox=function(t,i,e,o){var a=e.subtract(t).divide(i),l=o.subtract(t).divide(i),h=p.min(a,l),n=p.max(a,l),d=h.max(),c=n.min();if(d>0&&d<c){var f=1e-6,g=t.add(i.multiply(d));return e=e.add(f),o=o.subtract(f),new k(d,g,new p((g.x>o.x)-(g.x<e.x),(g.y>o.y)-(g.y<e.y),(g.z>o.z)-(g.z<e.z)))}return null},ee.hitTestSphere=function(t,i,e,o){var a=t.subtract(e),l=i.dot(i),h=2*i.dot(a),n=a.dot(a)-o*o,d=h*h-4*l*n;if(d>0){var c=(-h-Math.sqrt(d))/(2*l),f=t.add(i.multiply(c));return new k(c,f,f.subtract(e).divide(o))}return null},ee.hitTestTriangle=function(t,i,e,o,a){var l=o.subtract(e),h=a.subtract(e),n=l.cross(h).unit(),d=n.dot(e.subtract(t))/n.dot(i);if(d>0){var c=t.add(i.multiply(d)),f=c.subtract(e),g=h.dot(h),E=h.dot(l),_=h.dot(f),w=l.dot(l),z=l.dot(f),M=g*w-E*E,Z=(w*_-E*z)/M,J=(g*z-E*_)/M;if(Z>=0&&J>=0&&Z+J<=1)return new k(d,c,n)}return null};function $(t,i,e){let o;for(;(o=t.exec(i))!=null;)e(o)}var X="LIGHTGL";function se(t,i){function e(g){var E=document.getElementById(g);return E?E.text:g}t=e(t),i=e(i);var o="    uniform mat3 gl_NormalMatrix;    uniform mat4 gl_ModelViewMatrix;    uniform mat4 gl_ProjectionMatrix;    uniform mat4 gl_ModelViewProjectionMatrix;    uniform mat4 gl_ModelViewMatrixInverse;    uniform mat4 gl_ProjectionMatrixInverse;    uniform mat4 gl_ModelViewProjectionMatrixInverse;  ",a=`#version 300 es
    `+o+"    in vec4 gl_Vertex;    in vec4 gl_TexCoord;    in vec3 gl_Normal;    in vec4 gl_Color;    vec4 ftransform() {      return gl_ModelViewProjectionMatrix * gl_Vertex;    }  ",l=`#version 300 es
    precision highp float;
  `+o,h=t+i,n={};$(/\b(gl_[^;]*)\b;/g,o,function(g){var E=g[1];if(h.indexOf(E)!=-1){var _=E.replace(/[a-z_]/g,"");n[_]=X+E}}),h.indexOf("ftransform")!=-1&&(n.MVPM=X+"gl_ModelViewProjectionMatrix"),this.usedMatrices=n;function d(g,E){var _={},w=/^((\s*\/\/.*\n|\s*#extension.*\n)+)[^]*$/.exec(E);return E=w?w[1]+g+E.substr(w[1].length):g+E,$(/\bgl_\w+\b/g,g,function(z){z in _||(E=E.replace(new RegExp("\\b"+z+"\\b","g"),X+z),_[z]=!0)}),E}t=d(a,t),i=d(l,i);function c(g,E){var _=r.createShader(g);if(r.shaderSource(_,E),r.compileShader(_),!r.getShaderParameter(_,r.COMPILE_STATUS))throw new Error("compile error: "+r.getShaderInfoLog(_));return _}if(this.program=r.createProgram(),r.attachShader(this.program,c(r.VERTEX_SHADER,t)),r.attachShader(this.program,c(r.FRAGMENT_SHADER,i)),r.linkProgram(this.program),!r.getProgramParameter(this.program,r.LINK_STATUS))throw new Error("link error: "+r.getProgramInfoLog(this.program));this.attributes={},this.uniformLocations={};var f={};$(/uniform\s+sampler(1D|2D|3D|Cube)\s+(\w+)\s*;/g,t+i,function(g){f[g[2]]=1}),this.isSampler=f}function he(t){var i=Object.prototype.toString.call(t);return i=="[object Array]"||i=="[object Float32Array]"}function ve(t){var i=Object.prototype.toString.call(t);return i=="[object Number]"||i=="[object Boolean]"}new y,new y,se.prototype={uniforms:function(t){r.useProgram(this.program);for(var i in t){var e=this.uniformLocations[i]||r.getUniformLocation(this.program,i);if(e){this.uniformLocations[i]=e;var o=t[i];if(o instanceof p?o=[o.x,o.y,o.z]:o instanceof y&&(o=o.m),he(o))switch(o.length){case 1:r.uniform1fv(e,new Float32Array(o));break;case 2:r.uniform2fv(e,new Float32Array(o));break;case 3:r.uniform3fv(e,new Float32Array(o));break;case 4:r.uniform4fv(e,new Float32Array(o));break;case 9:r.uniformMatrix3fv(e,!1,new Float32Array([o[0],o[3],o[6],o[1],o[4],o[7],o[2],o[5],o[8]]));break;case 16:r.uniformMatrix4fv(e,!1,new Float32Array([o[0],o[4],o[8],o[12],o[1],o[5],o[9],o[13],o[2],o[6],o[10],o[14],o[3],o[7],o[11],o[15]]));break;default:throw new Error(`don't know how to load uniform "`+i+'" of length '+o.length)}else if(ve(o))(this.isSampler[i]?r.uniform1i:r.uniform1f).call(r,e,o);else throw new Error('attempted to set uniform "'+i+'" to invalid value '+o)}}return this},draw:function(t,i){this.drawBuffers(t.vertexBuffers,t.indexBuffers[i==r.LINES?"lines":"triangles"],arguments.length<2?r.TRIANGLES:i)},drawBuffers:function(t,i,e){var o=this.usedMatrices,a=r.modelviewMatrix,l=r.projectionMatrix,h=o.MVMI||o.NM?a.inverse():null,n=o.PMI?l.inverse():null,d=o.MVPM||o.MVPMI?l.multiply(a):null,c={};if(o.MVM&&(c[o.MVM]=a),o.MVMI&&(c[o.MVMI]=h),o.PM&&(c[o.PM]=l),o.PMI&&(c[o.PMI]=n),o.MVPM&&(c[o.MVPM]=d),o.MVPMI&&(c[o.MVPMI]=d.inverse()),o.NM){var f=h.m;c[o.NM]=[f[0],f[4],f[8],f[1],f[5],f[9],f[2],f[6],f[10]]}this.uniforms(c);var g=0;for(var E in t){var _=t[E],w=this.attributes[E]||r.getAttribLocation(this.program,E.replace(/^(gl_.*)$/,X+"$1"));w==-1||!_.buffer||(this.attributes[E]=w,r.bindBuffer(r.ARRAY_BUFFER,_.buffer),r.enableVertexAttribArray(w),r.vertexAttribPointer(w,_.buffer.spacing,r.FLOAT,!1,0,0),g=_.buffer.length/_.buffer.spacing)}for(var E in this.attributes)E in t||r.disableVertexAttribArray(this.attributes[E]);return g&&(!i||i.buffer)&&(i?(r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,i.buffer),r.drawElements(e,i.buffer.length,r.UNSIGNED_SHORT,0)):r.drawArrays(e,0,g)),this}};function B(t,i,e){e=e||{},this.width=t,this.height=i,this.id=r.createTexture();let o=e.type||r.UNSIGNED_BYTE,a=e.format||r.RGBA,l=r.RGBA;const h=r.getExtension("EXT_color_buffer_float"),n=r.getExtension("EXT_color_buffer_half_float");o===r.FLOAT?(h?r instanceof WebGL2RenderingContext&&(a=r.RGBA32F):(console.warn("FLOAT textures not renderable, falling back to UNSIGNED_BYTE"),o=r.UNSIGNED_BYTE,a=r.RGBA8),l=r.RGBA):o===r.HALF_FLOAT_OES?(n?r instanceof WebGL2RenderingContext&&(a=r.RGBA16F):(console.warn("HALF_FLOAT textures not renderable, falling back to UNSIGNED_BYTE"),o=r.UNSIGNED_BYTE,a=r.RGBA8),l=r.RGBA):(o=r.UNSIGNED_BYTE,a=r.RGBA8,l=r.RGBA);const d=e.filter||e.magFilter||r.LINEAR,c=e.filter||e.minFilter||r.LINEAR;r.bindTexture(r.TEXTURE_2D,this.id),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,1),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,d),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,c),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,e.wrap||e.wrapS||r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,e.wrap||e.wrapT||r.CLAMP_TO_EDGE),r instanceof WebGL2RenderingContext?r.texImage2D(r.TEXTURE_2D,0,a,t,i,0,l,o,null):r.texImage2D(r.TEXTURE_2D,0,l,t,i,0,l,o,null),r.bindTexture(r.TEXTURE_2D,null),this.format=l,this.type=o,this.internalFormat=a}var H,V,le;B.prototype={bind:function(t){r.activeTexture(r.TEXTURE0+(t||0)),r.bindTexture(r.TEXTURE_2D,this.id)},unbind:function(t){r.activeTexture(r.TEXTURE0+(t||0)),r.bindTexture(r.TEXTURE_2D,null)},canDrawTo:function(){H=H||r.createFramebuffer(),r.bindFramebuffer(r.FRAMEBUFFER,H),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,this.id,0);var t=r.checkFramebufferStatus(r.FRAMEBUFFER)==r.FRAMEBUFFER_COMPLETE;return r.bindFramebuffer(r.FRAMEBUFFER,null),t},drawTo:function(t){r.getExtension("EXT_color_buffer_float")||console.warn("EXT_color_buffer_float not available!");var e=r.getParameter(r.VIEWPORT);if(H=H||r.createFramebuffer(),V=V||r.createRenderbuffer(),r.bindFramebuffer(r.FRAMEBUFFER,H),r.bindRenderbuffer(r.RENDERBUFFER,V),(this.width!=V.width||this.height!=V.height)&&(V.width=this.width,V.height=this.height,r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_COMPONENT16,this.width,this.height)),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,this.id,0),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,V),r.checkFramebufferStatus(r.FRAMEBUFFER)!=r.FRAMEBUFFER_COMPLETE)throw new Error("Rendering to this texture is not supported (incomplete framebuffer)");r.viewport(0,0,this.width,this.height),t(),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindRenderbuffer(r.RENDERBUFFER,null),r.viewport(e[0],e[1],e[2],e[3])},swapWith:function(t){var i;i=t.id,t.id=this.id,this.id=i,i=t.width,t.width=this.width,this.width=i,i=t.height,t.height=this.height,this.height=i}},B.fromImage=function(t,i){i=i||{};var e=new B(t.width,t.height,i);r.bindTexture(r.TEXTURE_2D,e.id);try{r.texImage2D(r.TEXTURE_2D,0,e.format,e.format,e.type,t)}catch{throw location.protocol=="file:"?new Error('image not loaded for security reasons (serve this page over "http://" instead)'):new Error("image not loaded for security reasons (image must originate from the same domain as this page or use Cross-Origin Resource Sharing)")}return i.minFilter&&i.minFilter!=r.NEAREST&&i.minFilter!=r.LINEAR&&r.generateMipmap(r.TEXTURE_2D),r.bindTexture(r.TEXTURE_2D,null),e},B.fromURL=function(t,i){le=le||function(){var l=document.createElement("canvas").getContext("2d");l.canvas.width=l.canvas.height=128;for(var h=0;h<l.canvas.height;h+=16)for(var n=0;n<l.canvas.width;n+=16)l.fillStyle=(n^h)&16?"#FFF":"#DDD",l.fillRect(n,h,16,16);return l.canvas}();var e=B.fromImage(le,i),o=new Image,a=r;return o.onload=function(){a.makeCurrent(),B.fromImage(o,i).swapWith(e)},o.src=t,e},B.canUseFloatingPointTextures=function(){return!!r.getExtension("OES_texture_float")},B.canUseFloatingPointLinearFiltering=function(){return!!r.getExtension("OES_texture_float_linear")},B.canUseHalfFloatingPointTextures=function(){return!!r.getExtension("OES_texture_half_float")},B.canUseHalfFloatingPointLinearFiltering=function(){return!!r.getExtension("OES_texture_half_float_linear")};function p(t,i,e){this.x=t||0,this.y=i||0,this.z=e||0}return p.prototype={negative:function(){return new p(-this.x,-this.y,-this.z)},add:function(t){return t instanceof p?new p(this.x+t.x,this.y+t.y,this.z+t.z):new p(this.x+t,this.y+t,this.z+t)},subtract:function(t){return t instanceof p?new p(this.x-t.x,this.y-t.y,this.z-t.z):new p(this.x-t,this.y-t,this.z-t)},multiply:function(t){return t instanceof p?new p(this.x*t.x,this.y*t.y,this.z*t.z):new p(this.x*t,this.y*t,this.z*t)},divide:function(t){return t instanceof p?new p(this.x/t.x,this.y/t.y,this.z/t.z):new p(this.x/t,this.y/t,this.z/t)},equals:function(t){return this.x==t.x&&this.y==t.y&&this.z==t.z},dot:function(t){return this.x*t.x+this.y*t.y+this.z*t.z},cross:function(t){return new p(this.y*t.z-this.z*t.y,this.z*t.x-this.x*t.z,this.x*t.y-this.y*t.x)},length:function(){return Math.sqrt(this.dot(this))},unit:function(){return this.divide(this.length())},min:function(){return Math.min(Math.min(this.x,this.y),this.z)},max:function(){return Math.max(Math.max(this.x,this.y),this.z)},toAngles:function(){return{theta:Math.atan2(this.z,this.x),phi:Math.asin(this.y/this.length())}},angleTo:function(t){return Math.acos(this.dot(t)/(this.length()*t.length()))},toArray:function(t){return[this.x,this.y,this.z].slice(0,t||3)},clone:function(){return new p(this.x,this.y,this.z)},init:function(t,i,e){return this.x=t,this.y=i,this.z=e,this}},p.negative=function(t,i){return i.x=-t.x,i.y=-t.y,i.z=-t.z,i},p.add=function(t,i,e){return i instanceof p?(e.x=t.x+i.x,e.y=t.y+i.y,e.z=t.z+i.z):(e.x=t.x+i,e.y=t.y+i,e.z=t.z+i),e},p.subtract=function(t,i,e){return i instanceof p?(e.x=t.x-i.x,e.y=t.y-i.y,e.z=t.z-i.z):(e.x=t.x-i,e.y=t.y-i,e.z=t.z-i),e},p.multiply=function(t,i,e){return i instanceof p?(e.x=t.x*i.x,e.y=t.y*i.y,e.z=t.z*i.z):(e.x=t.x*i,e.y=t.y*i,e.z=t.z*i),e},p.divide=function(t,i,e){return i instanceof p?(e.x=t.x/i.x,e.y=t.y/i.y,e.z=t.z/i.z):(e.x=t.x/i,e.y=t.y/i,e.z=t.z/i),e},p.cross=function(t,i,e){return e.x=t.y*i.z-t.z*i.y,e.y=t.z*i.x-t.x*i.z,e.z=t.x*i.y-t.y*i.x,e},p.unit=function(t,i){var e=t.length();return i.x=t.x/e,i.y=t.y/e,i.z=t.z/e,i},p.fromAngles=function(t,i){return new p(Math.cos(t)*Math.cos(i),Math.sin(i),Math.sin(t)*Math.cos(i))},p.randomDirection=function(){return p.fromAngles(Math.random()*Math.PI*2,Math.asin(Math.random()*2-1))},p.min=function(t,i){return new p(Math.min(t.x,i.x),Math.min(t.y,i.y),Math.min(t.z,i.z))},p.max=function(t,i){return new p(Math.max(t.x,i.x),Math.max(t.y,i.y),Math.max(t.z,i.z))},p.lerp=function(t,i,e){return i.subtract(t).multiply(e).add(t)},p.fromArray=function(t){return new p(t[0],t[1],t[2])},p.angleBetween=function(t,i){return t.angleTo(i)},s}();const be=new v.Vector(0,-4,0);class me{constructor(s,u){this.center=new v.Vector(s.x,s.y,s.z),this.oldCenter=new v.Vector(s.x,s.y,s.z),this.radius=u,this.cinematic=!1,this.velocity=new v.Vector(0,0,0),this.acceleration=new v.Vector(0,0,0),this.mass=4/3*Math.PI*Math.pow(u,3)*1e3,this.invMass=1/this.mass,this.radiusSquared=u*u,this.mesh=v.Mesh.sphere({detail:10})}update(s,u){if(this.cinematic)this.velocity=new v.Vector(0,0,0);else{this.oldCenter=new v.Vector(this.center.x,this.center.y,this.center.z);const m=Math.max(0,Math.min(1,(this.radius-this.center.y)/(2*this.radius))),x=be.multiply(-1.35*this.mass*m),C=this.velocity.unit().multiply(-1e3*this.radiusSquared*m*this.velocity.dot(this.velocity));this.addForce(C),this.addForce(x),this.addForce(be.multiply(this.mass)),this.velocity=this.velocity.add(this.acceleration.multiply(s)),this.acceleration=new v.Vector(0,0,0),this.center=this.center.add(this.velocity.multiply(s)),this.center.y<this.radius-u.y&&(this.center.y=this.radius-1,this.velocity.y=Math.abs(this.velocity.y)*.7)}}addForce(s){this.cinematic?console.warn("Trying to add force to a cinematic sphere."):this.acceleration=this.acceleration.add(s.multiply(this.invMass))}move(s){this.oldCenter=new v.Vector(this.center.x,this.center.y,this.center.z),this.center=new v.Vector(s.x,s.y,s.z),this.cinematic||console.warn("Moving a non cinematic sphere.")}}function _e(r=0,s=1){const u=1-Math.random(),m=Math.random();return Math.sqrt(-2*Math.log(u))*Math.cos(2*Math.PI*m)*s+r}const ie=new v.Vector(1e3,0,0),ke=.5,Be=1,Se=2*Math.PI*Be,b=class b{constructor(s){this.startingPoint=new v.Vector(s.x,s.y,s.z),this.center=new v.Vector(s.x,s.y,s.z),this.force=new v.Vector(0,0,190+_e(0,20)),this.reactionTime=Math.max(.1,_e(.15,.02));const u=.25,m=.15;this.body=new me(s,u),this.leftArm=new me(ie,m),this.rightArm=new me(ie,m),this.leftFoot=new me(ie,m),this.rightFoot=new me(ie,m),this.body.cinematic=!b.useGravity,this.leftArm.cinematic=!0,this.rightArm.cinematic=!0,this.leftFoot.cinematic=!0,this.rightFoot.cinematic=!0,this.spheres=[this.body,this.leftArm,this.rightArm,this.leftFoot,this.rightFoot],this.divingDistance=0,this.divingTime=1e3,this.nationality=Math.random()>.5?0:1}jump(s){this.body.cinematic=!1,this.body.velocity=new v.Vector(0,0,4.5+_e(0,1)),this.body.center=new v.Vector(this.startingPoint.x,1,-s.z/2)}swim(s,u){this.started=s,s?(this.body.cinematic=!1,this.useGravity=!0,this.body.center=new v.Vector(this.startingPoint.x,0,-u.z/2)):(this.body.velocity=new v.Vector(0,0,0),this.body.center=new v.Vector(this.startingPoint.x,0,0))}getArmOffset(s,u){return new v.Vector(0,Math.cos(Se*s+u),Math.sin(Se*s+u)).multiply(ke)}update(s,u,m){if(b.raceHasStarted||b.swimming){if(!this.started&&b.raceHasStarted)if(console.log("go : "+u),u>this.reactionTime)this.swim(!0,m),this.jump(m);else return;this.body.addForce(this.force);const x=this.getArmOffset(u,0),C=this.getArmOffset(u,Math.PI),R=this.getArmOffset(u*2,0),I=this.getArmOffset(u*2,Math.PI);this.rightArm.move(this.body.center.add(x).add(new v.Vector(.3,0,0))),this.leftArm.move(this.body.center.add(C).add(new v.Vector(-.3,0,0))),this.rightFoot.move(this.body.center.add(new v.Vector(.15,R.y*.5,-1))),this.leftFoot.move(this.body.center.add(new v.Vector(-.15,I.y*.5,-1)))}else this.rightArm.move(ie),this.leftArm.move(ie),this.rightFoot.move(ie),this.leftFoot.move(ie);for(let x of this.spheres)x.update(s,m);!this.hasDove&&this.body.center.y<=0&&this.body.oldCenter.y>=0&&(this.divingDistance=this.body.center.z+m.z/2,this.divingTime=u,this.hasDove=!0,console.log("dived : "+this.divingDistance))}};W(b,"useGravity",!1),W(b,"raceHasStarted",!1),W(b,"swimming",!1),W(b,"showFlags",!0),W(b,"numAttributes",5),W(b,"numVecAttributes",Math.ceil(b.numAttributes/4)),W(b,"maxNumSwimmer",10),W(b,"swimmersAttributesTexture",null),W(b,"plane",null),W(b,"attributeShader",null),W(b,"initSwimmersAttributesTexture",s=>{const u=s.NEAREST;b.plane=v.Mesh.plane(),b.swimmersAttributesTexture=new v.Texture(b.maxNumSwimmer,b.numVecAttributes,{type:s.FLOAT,filter:u})}),W(b,"updateAttributesTexture",(s,u)=>{const m=new Float32Array(b.numVecAttributes*4*b.maxNumSwimmer);for(let x=0;x<u.length;x++)m[4*x]=u[x].body.center.x,m[4*x+1]=u[x].body.center.z,m[4*x+2]=u[x].divingDistance,m[4*x+3]=u[x].divingTime,m[b.maxNumSwimmer*4+4*x]=u[x].reactionTime,m[b.maxNumSwimmer*4+4*x+1]=u[x].body.velocity.z*3.6,m[b.maxNumSwimmer*4+4*x+2]=u[x].nationality,m[b.maxNumSwimmer*4+4*x+3]=u[x].body.center.y;s.bindTexture(s.TEXTURE_2D,b.swimmersAttributesTexture.id),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.texSubImage2D(s.TEXTURE_2D,0,0,0,b.maxNumSwimmer,b.numVecAttributes,s.RGBA,s.FLOAT,m),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!0)});let S=b;const Re=`
    uniform float wr;
    #define sqrt_2_PI 2.50662827
    #define PI 3.1415926536
    uniform sampler2D swimmersAttributesTexture;
    const int SWIMMERS_NUM_ATTRIBUTES = 4;
    const vec2 TEXTURE_SIZE = vec2(`+S.maxNumSwimmer+", "+S.numVecAttributes+`);
    uniform float swimmersNumber;
    uniform float time;

    vec2 getAttributePosition(int i) {
        float i_float = float(i);
        vec2 pixel = vec2(i_float, 0.);
        vec4 attributes = texture(swimmersAttributesTexture, (pixel + .5) / TEXTURE_SIZE);
        return attributes.rg;
    }

    float getAttributeSpeed(int i) {
        float i_float = float(i);
        vec2 pixel = vec2(i_float, 1.);
        vec4 attributes = texture(swimmersAttributesTexture, (pixel + .5) / TEXTURE_SIZE);
        return attributes.g;
    }

    vec2 getAttributeDiving(int i) {
        float i_float = float(i);
        vec2 pixel = vec2(i_float, 0.);
        vec4 attributes = texture(swimmersAttributesTexture, (pixel + .5) / TEXTURE_SIZE);
        return attributes.ba;
    }

    float getAttributeReactionTime(int i ) {
        float i_float = float(i);
        vec2 pixel = vec2(i_float, 1.);
        vec4 attributes = texture(swimmersAttributesTexture, (pixel + .5) / TEXTURE_SIZE);
        return attributes.r;
    }

    float getNationality(int i ) {
        float i_float = float(i);
        vec2 pixel = vec2(i_float, 1.);
        vec4 attributes = texture(swimmersAttributesTexture, (pixel + .5) / TEXTURE_SIZE);
        return attributes.b;
    }

    float getAltitude(int i ) {
        float i_float = float(i);
        vec2 pixel = vec2(i_float, 1.);
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
`;function q(r,s,u=null){this.gl=r,this.damping=.02,this.areaConservationEnabled=!0,this.visualizationWavesEnabled=!0,this.sqrt_2_PI=Math.sqrt(2*Math.PI),this.spheres=[];var m=`
    out vec2 coord;
    uniform vec2 invPoolSizeVertex;
    void main() {
      coord = gl_Vertex.xy * invPoolSizeVertex + 0.5;
      gl_Position = vec4(gl_Vertex.xy * 2. * invPoolSizeVertex, 0., 1.0);
    }
  `;this.reset(s,u),v.Texture.canUseFloatingPointTextures(),this.dropShader=new v.Shader(m,`
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
  `),this.updateShader=new v.Shader(m,`
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
  `),this.normalShader=new v.Shader(m,`
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
  `),this.sphereShader=new v.Shader(m,`
    uniform sampler2D tex;
    uniform vec3 oldCenter;
    uniform vec3 newCenter;
    uniform float radius;
    uniform vec3 poolSize;
    in vec2 coord;
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
      /* get vertex info */
      vec4 info = texture(tex, coord);

    /* add the old volume */
    info.r += volumeInSphere(oldCenter);

    /* subtract the new volume */
    info.r -= volumeInSphere(newCenter);

    fragColor = info;
  }
  `),this.visualizationWavesShader=new v.Shader(m,`
    uniform sampler2D tex;
    uniform bool add;
    uniform vec3 poolSize;
    in vec2 coord;
    out vec4 fragColor;

    `+Re+`

    void main() {
      vec4 info = texture(tex, coord);
      float w = getDivingWaves(coord).x + getRecordWave(coord);
      info.r += add ? w : -w;
      fragColor = info;
    }
    `)}q.prototype.reset=function(r,s=null){this.WR_position=1e5,this.prev_WR_position=0,s!==null?(console.log("resolution.y : "+s.y),this.W=Math.round(s.x),this.H=Math.round(s.y),console.log("Using custom resolution:",this.W,this.H)):(this.W=256,this.H=256),this.plane=v.Mesh.plane({detail:255,width:r.x,height:r.z}),this.delta=new v.Vector(1/this.W,1/this.H);const u=this.gl;this.textureA&&u.deleteTexture(this.textureA.id),this.textureB&&u.deleteTexture(this.textureB.id),this.textureA=new v.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:m}),this.textureB=new v.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:m}),this.areaConservationTexture=new v.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:m}),this.showAreaConservedGrid=!1,this.showProjectionGrid=!1,this.poolSize=r,this.invPoolSize=new v.Vector(1/r.x,1/r.y,1/r.z);var m=v.Texture.canUseFloatingPointLinearFiltering()?this.gl.LINEAR:this.gl.NEAREST;(!this.textureA.canDrawTo()||!this.textureB.canDrawTo())&&v.Texture.canUseHalfFloatingPointTextures()&&(console.log("No draw"),m=v.Texture.canUseHalfFloatingPointLinearFiltering()?this.gl.LINEAR:this.gl.NEAREST,this.textureA=new v.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:m}),this.textureB=new v.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:m}))};q.prototype.addDrop=function(r,s,u,m){var x=this;this.textureB.drawTo(function(){x.textureA.bind(),x.dropShader.uniforms({invPoolSizeVertex:[x.invPoolSize.x,x.invPoolSize.z],center:[r,s],radius:u,strength:m,poolSize:[x.poolSize.x,x.poolSize.y,x.poolSize.z]}).draw(x.plane)}),this.textureB.swapWith(this.textureA)};q.prototype.addOrRemoveVisualizationWaves=function(r,s,u){if(this.visualizationWavesEnabled){var m=this;this.textureB.drawTo(function(){m.textureA.bind(),S.swimmersAttributesTexture&&S.swimmersAttributesTexture.bind(1),m.visualizationWavesShader.uniforms({swimmersAttributesTexture:1,invPoolSizeVertex:[m.invPoolSize.x,m.invPoolSize.z],poolSize:[m.poolSize.x,m.poolSize.y,m.poolSize.z],wr:m.WR_position,sqrt_2_PI:m.sqrt_2_PI,add:r,swimmersNumber:s.length,time:u}).draw(m.plane)}),this.textureB.swapWith(this.textureA)}};q.prototype.addSwimmer=function(r){for(let s of r.spheres)this.addSphere(s)};q.prototype.addSphere=function(r){this.spheres.push(r)};q.prototype.updateSpheres=function(r){this.prev_WR_position=this.WR_position,this.WR_position+=r*2.4;for(let u=0;u<this.spheres.length;u++){const m=this.spheres[u];this.moveSphere(m.oldCenter,m.center,m.radius)}};q.prototype.moveSphere=function(r,s,u){var m=this;this.textureB.drawTo(function(){m.textureA.bind(),m.sphereShader.uniforms({invPoolSizeVertex:[m.invPoolSize.x,m.invPoolSize.z],oldCenter:r,newCenter:s,radius:u,poolSize:[m.poolSize.x,m.poolSize.y,m.poolSize.z]}).draw(m.plane)}),this.textureB.swapWith(this.textureA)};q.prototype.stepSimulation=function(){var r=this;this.textureB.drawTo(function(){r.textureA.bind(),r.updateShader.uniforms({invPoolSizeVertex:[r.invPoolSize.x,r.invPoolSize.z],delta:[r.delta.x,r.delta.y],wr:r.WR_position,prev_wr:r.prev_WR_position,poolSize:[r.poolSize.x,r.poolSize.y,r.poolSize.z],sqrt_2_PI:r.sqrt_2_PI,damping:r.damping}).draw(r.plane)}),this.textureB.swapWith(this.textureA),this.updateAreaConservation()};q.prototype.updateNormals=function(){var r=this;this.textureB.drawTo(function(){r.textureA.bind(),r.normalShader.uniforms({invPoolSizeVertex:[r.invPoolSize.x,r.invPoolSize.z],delta:[r.delta.x,r.delta.y]}).draw(r.plane)}),this.textureB.swapWith(this.textureA)};q.prototype.setAreaConservation=function(r){this.areaConservationEnabled=r};q.prototype.updateAreaConservation=function(){if(!this.areaConservationEnabled)return;var r,s,u;if(this.textureA.type===this.gl.FLOAT)r=this.gl.FLOAT,s=Float32Array,u="EXT_color_buffer_float";else if(this.textureA.type===this.gl.HALF_FLOAT_OES)r=this.gl.HALF_FLOAT_OES,s=Uint16Array,u="EXT_color_buffer_half_float";else{console.warn("Unsupported texture type for reading");return}if(!this.gl.getExtension(u)){console.warn(u+" not available; cannot read pixels");return}this.fb||(this.fb=this.gl.createFramebuffer()),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.fb),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,this.textureA.id,0);const m=this.gl.checkFramebufferStatus(this.gl.FRAMEBUFFER);if(m!==this.gl.FRAMEBUFFER_COMPLETE){console.error("Framebuffer incomplete: "+m+" for texture type "+this.textureA.type),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null);return}this.gl.pixelStorei(this.gl.PACK_ALIGNMENT,1);const x=new s(this.W*this.H*4),C=new Float32Array(this.W*this.H*4);this.gl.readPixels(0,0,this.W,this.H,this.gl.RGBA,r,x);for(let O=0;O<this.W;O++)C[O*4+1]=1;const R=this.poolSize.x/this.W,I=this.poolSize.z/this.H,Y=R*R,Q=I*I;if(this.textureA.type===this.gl.FLOAT){for(let O=0;O<this.H;O+=1)for(let y=0;y<this.W;y+=1){const K=(O*this.W+y)*4,G=((this.H-1-O)*this.W+y)*4,L=C[G],ne=C[G+1];if(y+1<this.W){const j=x[K]-x[K+4],k=Math.sqrt(j*j+Y);C[G+4]=L+k}if(O+1<this.H){const j=x[K]-x[K+this.W*4],k=Math.sqrt(j*j+Q);C[G-4*this.W+1]=ne+k}}this.gl.bindTexture(this.gl.TEXTURE_2D,this.areaConservationTexture.id),this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT,1),this.gl.texSubImage2D(this.gl.TEXTURE_2D,0,0,0,this.W,this.H,this.gl.RGBA,this.gl.FLOAT,C)}this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.bindTexture(this.gl.TEXTURE_2D,null)};const Ue=`
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
`;var ae=`
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
`;function oe(r,s,u,m){this.water=s,this.gl=r,this.tileTexture=v.Texture.fromImage(document.getElementById("tiles"),{minFilter:this.gl.LINEAR_MIPMAP_LINEAR,wrap:this.gl.REPEAT,format:this.gl.RGB}),this.franceTexture=v.Texture.fromImage(document.getElementById("france"),{minFilter:this.gl.LINEAR_MIPMAP_LINEAR,wrap:this.gl.REPEAT,format:this.gl.RGBA}),this.chinaTexture=v.Texture.fromImage(document.getElementById("china"),{minFilter:this.gl.LINEAR_MIPMAP_LINEAR,wrap:this.gl.REPEAT,format:this.gl.RGBA}),this.lettersTexture=v.Texture.fromImage(document.getElementById("letters"),{minFilter:this.gl.LINEAR,magFilter:this.gl.LINEAR,wrap:this.gl.REPEAT,format:this.gl.RGBA}),this.flagSize=m,this.flagSize=[1.5,1],this.flagCenter=u,this.lightDir=new v.Vector(2,2,-1).unit(),this.causticTex=new v.Texture(1024,1024),this.waterShaders=[];for(var x=0;x<2;x++)this.waterShaders[x]=new v.Shader(`
      uniform sampler2D water;
      uniform vec3 poolSizeVertexShader;
      out vec3 position;
      void main() {
        vec4 info = texture(water, gl_Vertex.xy / poolSizeVertexShader.xz + 0.5);
        position = gl_Vertex.xzy;
        position.y += info.r;
        gl_Position = gl_ModelViewProjectionMatrix * vec4(position, 1.0);
      }
    `,ae+`
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
      
      
      `+Re+Ue+`
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
            if (abs(altitude) < .15) continue;
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
    `);this.sphereMesh=v.Mesh.sphere({detail:10}),this.sphereShader=new v.Shader(ae+`
    out vec3 position;
  void main() {
    position = sphereCenter + gl_Vertex.xyz * sphereRadius;
    gl_Position = gl_ModelViewProjectionMatrix * vec4(position, 1.0);
  }
  `,ae+`
    in vec3 position;
    out vec4 fragColor;
  void main() {
    fragColor = vec4(getSphereColor(position), 1.0);
      vec4 info = texture(water, position.xz / poolSize.xz + 0.5);
    if (position.y < info.r) {
      fragColor.rgb *= underwaterColor * 1.2;
    }
  }
  `),this.reset(),this.cubeShader=new v.Shader(ae+`
    out vec3 position;
  void main() {
    position = gl_Vertex.xyz;
    position.y = ((1.0 - position.y) * (7.0 / 12.0) - 1.0) * poolSize.y;
    gl_Position = gl_ModelViewProjectionMatrix * vec4(position, 1.0);
  }
  `,ae+`
    in vec3 position;
    out vec4 fragColor;
  void main() {
    fragColor = vec4(getWallColor(position), 1.0);
      vec4 info = texture(water, position.xz / poolSize.xz + 0.5);
    if (position.y < info.r) {
      fragColor.rgb *= underwaterColor * 1.2;
    }
  }
  `),this.sphereCenter=new v.Vector,this.sphereRadius=0;var C=!!this.gl.getExtension("OES_standard_derivatives");this.causticsShader=new v.Shader(ae+`
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
  `,(C?`#extension GL_OES_standard_derivatives: enable
`:"")+`
  `+ae+`
    in vec3 oldPos;
    in vec3 newPos;
    in vec3 ray;
    out vec4 fragColor;

  void main() {
    `+(C?`
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
  `)}oe.prototype.reset=function(){this.cubeMesh=v.Mesh.cube({width:this.water.poolSize.x,height:2,depth:this.water.poolSize.z}),this.cubeMesh.triangles.splice(4,2),this.cubeMesh.compile()};oe.prototype.updateCaustics=function(r){};oe.prototype.renderWater=function(r,s,u,m,x){var C=new v.Raytracer;r.textureA.bind(0),this.tileTexture.bind(1),s.bind(2),this.causticTex.bind(3),this.franceTexture.bind(4),this.chinaTexture.bind(8),this.lettersTexture.bind(7),r.areaConservationTexture.bind(5),S.swimmersAttributesTexture&&S.swimmersAttributesTexture.bind(6),this.gl.enable(this.gl.CULL_FACE);for(var R=0;R<2;R++)this.gl.cullFace(R?this.gl.BACK:this.gl.FRONT),this.waterShaders[R].uniforms({light:this.lightDir,water:0,tiles:1,sky:2,causticTex:3,france:4,china:8,areaConservationTexture:5,swimmersAttributesTexture:6,iChannel0:7,areaConservation:r.areaConservationEnabled,flagSize:[.66,1],flagCenter:[this.flagCenter.x,this.flagCenter.y],poolSize:[r.poolSize.x,r.poolSize.y,r.poolSize.z],poolSizeVertexShader:[r.poolSize.x,r.poolSize.y,r.poolSize.z],eye:C.eye,sphereCenter:this.sphereCenter,sphereRadius:this.sphereRadius,showProjectionGrid:r.showProjectionGrid,showAreaConservedGrid:r.showAreaConservedGrid,wr:r.WR_position,swimmersNumber:u.length,showFlags:S.showFlags,time:m,shadowRadius:x.shadowRadius,shadowPower:x.shadowPower,showCircle:x.showCircle,shadowCircleRadius:x.circleRadius,shadowCircleStroke:x.circleStroke}).draw(r.plane);this.gl.disable(this.gl.CULL_FACE)};oe.prototype.renderSpheres=function(r){for(let s of r.spheres)this.renderSphere(r,s)};oe.prototype.renderSphere=function(r,s){r.textureA.bind(0),this.causticTex.bind(1),this.sphereShader.uniforms({light:this.lightDir,water:0,causticTex:1,sphereCenter:[s.center.x,s.center.y,s.center.z],sphereRadius:s.radius,poolSize:[r.poolSize.x,r.poolSize.y,r.poolSize.z]}).draw(s.mesh)};oe.prototype.renderSphereOld=function(r){r.textureA.bind(0),this.causticTex.bind(1),this.sphereShader.uniforms({light:this.lightDir,water:0,causticTex:1,sphereCenter:this.sphereCenter,sphereRadius:this.sphereRadius,poolSize:[r.poolSize.x,r.poolSize.y,r.poolSize.z]}).draw(this.sphereMesh)};oe.prototype.renderCube=function(r){this.gl.enable(this.gl.CULL_FACE),r.textureA.bind(0),this.tileTexture.bind(1),this.causticTex.bind(2),this.cubeShader.uniforms({light:this.lightDir,water:0,tiles:1,causticTex:2,sphereCenter:this.sphereCenter,sphereRadius:this.sphereRadius,poolSize:[r.poolSize.x,r.poolSize.y,r.poolSize.z]}).draw(this.cubeMesh),this.gl.disable(this.gl.CULL_FACE)};function Ae(r,s){this.gl=s,this.id=s.createTexture(),s.bindTexture(s.TEXTURE_CUBE_MAP,this.id),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,1),s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAG_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),s.texImage2D(s.TEXTURE_CUBE_MAP_NEGATIVE_X,0,s.RGB,s.RGB,s.UNSIGNED_BYTE,r.xneg),s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X,0,s.RGB,s.RGB,s.UNSIGNED_BYTE,r.xpos),s.texImage2D(s.TEXTURE_CUBE_MAP_NEGATIVE_Y,0,s.RGB,s.RGB,s.UNSIGNED_BYTE,r.yneg),s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_Y,0,s.RGB,s.RGB,s.UNSIGNED_BYTE,r.ypos),s.texImage2D(s.TEXTURE_CUBE_MAP_NEGATIVE_Z,0,s.RGB,s.RGB,s.UNSIGNED_BYTE,r.zneg),s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_Z,0,s.RGB,s.RGB,s.UNSIGNED_BYTE,r.zpos)}Ae.prototype.bind=function(r){this.gl.activeTexture(this.gl.TEXTURE0+(r||0)),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,this.id)};Ae.prototype.unbind=function(r){this.gl.activeTexture(this.gl.TEXTURE0+(r||0)),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,null)};const Me=200,Ge=`
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
#define MAX_SPARKS `+Me+`
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

`;class Ve{constructor(s,u){if(this.gl=s,this.copyVideo=!1,this.show=!1,s===null){alert("Unable to initialize WebGL. Your browser or machine may not support it.");return}s.clearColor(0,0,0,1),s.clear(s.COLOR_BUFFER_BIT),this.shader=new v.Shader(`
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

    `+Ge+Re+`

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
`),this.mesh=v.Mesh.plane({width:2,height:2,coords:!0,normals:!0}),this.mesh.transform(v.Matrix.rotate(90,1,0,0)),this.mesh.transform(v.Matrix.translate(0,.1,0)),this.programInfo=null,this.texture=this.initTexture(),this.video=this.setupVideo(u),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!0)}render(s,u,m){this.show&&(this.copyVideo&&this.updateTexture(),(!this.mesh.vertexBuffers||!this.mesh.vertexBuffers.vertex)&&this.mesh.compile(),this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture),S.swimmersAttributesTexture&&S.swimmersAttributesTexture.bind(1),this.shader.uniforms({uSampler:0,swimmersHelperFunctions:1,iTime:s,poolSize:[m.x,m.y,m.z],iResolution:[this.gl.canvas.width,this.gl.canvas.height],sparksEnabled:u.enabled,sparksGlow:u.glow,sparksGlowOffset:u.glowOffset,sparksStroke:u.stroke,sparksNumber:u.num,sparksLengthFactor:u.lengthFactor,sparksSizeFactor:u.sizeFactor,fov:u.fov}).draw(this.mesh),this.gl.disable(this.gl.BLEND))}initTexture(){const s=this.gl.createTexture();this.gl.bindTexture(this.gl.TEXTURE_2D,s);const u=0,m=this.gl.RGBA,x=1,C=1,R=0,I=this.gl.RGBA,Y=this.gl.UNSIGNED_BYTE,Q=new Uint8Array([0,0,255,255]);return this.gl.texImage2D(this.gl.TEXTURE_2D,u,m,x,C,R,I,Y,Q),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),s}updateTexture(){const u=this.gl.RGBA,m=this.gl.RGBA,x=this.gl.UNSIGNED_BYTE;this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture),this.gl.texImage2D(this.gl.TEXTURE_2D,0,u,m,x,this.video)}setupVideo(s){const u=document.createElement("video");let m=!1,x=!1;u.playsInline=!0,u.muted=!0,u.loop=!0,u.addEventListener("playing",()=>{m=!0,R()},!0),u.addEventListener("timeupdate",()=>{x=!0,R()},!0),u.src=s,u.play();const C=this,R=()=>{m&&x&&(C.copyVideo=!0)};return u}}function We(r){return r.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n/g,"<br>")}function Xe(r){var s=We(r);s=="WebGL not supported"&&(s='Your browser does not support WebGL.<br>Please see    <a href="http://www.khronos.org/webgl/wiki/Getting_a_WebGL_Implementation">    Getting a WebGL Implementation</a>.');var u=document.getElementById("loading");u.innerHTML=s,u.style.zIndex=1}window.onerror=Xe;var T=v.create(),A,Ce,U;const D=[],Ee=10;var ce=-25,ge=-200.5,pe=0;let ye=0,we=0;var fe=4;S.initSwimmersAttributesTexture(T);const ze=17;let de=0,ue=0;var te=!1,xe,Te,F=new v.Vector(2,1,2);let N=new v.Vector(256,256),P={numSteps:2,focal:45,sparks:{enabled:!1,glow:5,glowOffset:.5,lengthFactor:1,stroke:.01,num:40,sizeFactor:50,fov:Math.PI/4},shadow:{shadowRadius:.5,shadowPower:.5,showCircle:!0,circleRadius:1,circleStroke:.15}};const He=new Oe;function Fe(){document.getElementById("warning").hidden=!(N.x*N.y>3e5&&A&&A.areaConservationEnabled)}function re(){console.log("reset"),document.getElementById("resolution").innerText=`Resolution: ${N.x} x ${N.y}`,Fe(),xe=new v.Vector(0,-F.z/2+1),A.reset(F,N),U.flagCenter=xe,U.flagSize=Te,U.reset();const r=F.x/Ee;let s=-F.x/2+r/2;for(let u of D)u.body.center.x=s,u.startingPoint.x=s,s+=r}window.onload=function(){var r=window.devicePixelRatio||1,s=document.getElementById("help");function u(){var n=innerWidth,d=innerHeight;T.canvas.width=n*r,T.canvas.height=d*r,T.canvas.style.width=n+"px",T.canvas.style.height=d+"px",T.viewport(0,0,T.canvas.width,T.canvas.height),T.matrixMode(T.PROJECTION),T.loadIdentity(),T.perspective(P.focal,T.canvas.width/T.canvas.height,.01,100),T.matrixMode(T.MODELVIEW),h()}document.body.appendChild(T.canvas),T.canvas.oncontextmenu=function(n){n.preventDefault()},T.clearColor(0,0,0,1),xe=new v.Vector(0,-F.z/2+1),Te=.7,A=new q(T,F);const m=new Ve(T,"./video.mp4"),x=document.getElementById("drop-zone");let C=0;document.addEventListener("dragenter",n=>{C++,x.style.display="flex"}),document.addEventListener("dragover",n=>{n.preventDefault(),n.dataTransfer.dropEffect="copy"}),document.addEventListener("dragleave",n=>{C--,C===0&&(x.style.display="none")}),document.addEventListener("drop",n=>{n.preventDefault(),C=0,x.style.display="none";const d=n.dataTransfer.files;if(d.length>0&&(d[0].type.startsWith("video/")||d[0].name.endsWith(".mp4"))){const c=URL.createObjectURL(d[0]);m.video.src=c,m.video.play(),console.log("Loaded:",d[0].name)}});const R=He.addFolder("variables");R.add(F,"x",1,25).name("pool width").onChange(function(n){re()}).listen(),R.add(F,"z",1,50).name("pool height").onChange(function(n){re()}).listen(),R.add(F,"y",1,3).name("pool depth").onChange(function(n){re()}).listen(),R.add(A,"damping",.005,.15).name("water damping").listen(),R.add(A,"areaConservationEnabled","areaConservationEnabled").name("area conservation").listen(),R.add(S,"showFlags").name("show flags").listen(),R.add(P,"focal",28,45).name("focal").listen().onChange(function(n){P.sparks.fov=n*2*Math.PI/360,T.matrixMode(T.PROJECTION),T.loadIdentity(),T.perspective(P.focal,T.canvas.width/T.canvas.height,.01,100),T.matrixMode(T.MODELVIEW),console.log("perspective : "+P.focal)});const I=R.addFolder("Sparks");I.add(P.sparks,"enabled").name("sparks enabled"),I.add(P.sparks,"glow",1,30).name("sparks glow factor"),I.add(P.sparks,"lengthFactor",.1,10).name("sparks length factor"),I.add(P.sparks,"glowOffset",.1,3).name("sparks glow offset"),I.add(P.sparks,"stroke",.001,.05).name("sparks stroke"),I.add(P.sparks,"num",10,Me).step(1).name("sparks number"),I.add(P.sparks,"sizeFactor",10,100).name("size factor");const Y=R.addFolder("Swimmers shadows");if(Y.add(P.shadow,"shadowRadius",0,2).name("shadow radius"),Y.add(P.shadow,"shadowPower",.1,2).name("shadow power"),Y.add(P.shadow,"showCircle").name("circle"),Y.add(P.shadow,"circleRadius",.5,2).name("circle radius"),Y.add(P.shadow,"circleStroke",.1,.5).name("circle stroke"),U=new oe(T,A,xe,Te),Ce=new Ae({xneg:document.getElementById("xneg"),xpos:document.getElementById("xpos"),yneg:document.getElementById("ypos"),ypos:document.getElementById("ypos"),zneg:document.getElementById("zneg"),zpos:document.getElementById("zpos")},T),!A.textureA.canDrawTo()||!A.textureB.canDrawTo())throw new Error("Rendering to floating-point textures is required but not supported");const Q=new v.Vector(-.4,-.75,.2),O=new v.Vector(.4,-.75,.2),y=new S(Q);new S(O);for(let n=0;n<1;n++)D.push(new S(Q));const K=y.body.radius;for(let n of D)A.addSwimmer(n);re();for(var G=0;G<20;G++)A.addDrop(Math.random()*2-1,Math.random()*2-1,.06,G&1?.01:-.01);document.getElementById("loading").innerHTML="",u();var L=window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(n){setTimeout(n,0)},ne=new Date().getTime();function j(){var n=new Date().getTime();te||(l((n-ne)/1e3),h()),ne=n,L(j)}L(j),window.onresize=u;var k,ee,$,X=-1,se=0,he=1,ve=2;const B=3;var H,V;function le(n,d,c){if(H=n,V=d,!c||c.button===0){var f=new v.Raytracer,g=f.getRayForPixel(n*r,d*r),E=f.eye.add(g.multiply(-f.eye.y/g.y));for(let w of D){var _=v.Raytracer.hitTestSphere(f.eye,g,w.body.center,w.body.radius);if(_){X=he,$=w,w.body.cinematic=!0,k=_.hit,ee=f.getRayForPixel(T.canvas.width/2,T.canvas.height/2).negative();return}}Math.abs(E.x)<F.x/2&&Math.abs(E.z)<F.z/2&&(X=se,p(n,d))}else c.button===2?X=ve:c.button===1&&(X=B)}function p(n,d,c){switch(X){case se:{var f=new v.Raytracer,g=f.getRayForPixel(n*r,d*r),E=f.eye.add(g.multiply(-f.eye.y/g.y));A.addDrop(E.x/F.x*2,E.z/F.z*2,.06,.03),te&&(A.updateNormals(),U.updateCaustics(A));break}case he:{var f=new v.Raytracer,g=f.getRayForPixel(n*r,d*r),_=-ee.dot(f.eye.subtract(k))/ee.dot(g),w=f.eye.add(g.multiply(_));const Z=$.body.center.add(w.subtract(k)),J=$.body.radius,Pe=Math.max(J-F.x/2,Math.min(F.x/2-J,Z.x)),Ie=Math.max(J-F.y,Math.min(10,Z.y)),De=Math.max(J-F.z/2,Math.min(F.z/2-J,Z.z));$.body.move(new v.Vector(Pe,Ie,De)),k=w,te&&U.updateCaustics(A);break}case ve:{if(c&&c.shiftKey){pe-=n-H,pe=Math.max(-89.999,Math.min(89.999,pe));break}ge-=n-H,ce-=d-V,ce=Math.max(-89.999,Math.min(89.999,ce));break}case B:{const z=.001*fe;ye+=z*(n-H),we-=z*(d-V)}}H=n,V=d,te&&h()}function t(){X=-1,$&&($.body.cinematic=!S.useGravity)}function i(n){return n===s||n.parentNode&&i(n.parentNode)}function e(n){fe*=1-n*4e-4,fe=Math.max(2,Math.min(1e3,fe)),te&&h()}addEventListener("wheel",function(n){var d=n.deltaY;e(-d)}),document.onmousedown=function(n){i(n.target)||(n.preventDefault(),le(n.pageX,n.pageY,n))},document.onmousemove=function(n){p(n.pageX,n.pageY,n)},document.onmouseup=function(){t()},document.ontouchstart=function(n){n.touches.length===1&&!i(n.target)&&(n.preventDefault(),le(n.touches[0].pageX,n.touches[0].pageY,!1))},document.ontouchmove=function(n){n.touches.length===1&&p(n.touches[0].pageX,n.touches[0].pageY)},document.ontouchend=function(n){n.touches.length==0&&t()};function o(){S.raceHasStarted=!0;for(let n of D)n.started=!1}function a(){S.raceHasStarted=!1;for(let n of D)n.swim(!1,F)}document.onkeydown=function(n){if(n.which==32)te=!te;else if(n.which==71){for(let d of D)d.body.cinematic=!d.body.cinematic;S.useGravity=!S.useGravity}else if(n.which==76&&te)h();else if(n.which==74)jump();else if(n.which==67)A.setAreaConservation(!A.areaConservationEnabled),Fe(),console.log("Area conservation "+(A.areaConservationEnabled?"enabled.":"disabled."));else if(n.which==80)A.showProjectionGrid=!A.showProjectionGrid,console.log("Projection grid "+(A.showProjectionGrid?"enabled.":"disabled."));else if(n.which==65)A.showAreaConservedGrid=!A.showAreaConservedGrid,console.log("Area conserved grid "+(A.showAreaConservedGrid?"enabled.":"disabled."));else if(n.which==83){if(S.swimming=!S.swimming,S.swimming)for(let d of D)d.swim(!0,F);else a();console.log("Swimming "+(S.swimming?"enabled.":"disabled."))}else if(n.which==86)m.show=!m.show;else if(n.which==79){if(F.x=25,F.y=2,F.z=50,N.x=1024,N.y=2048,A.setAreaConservation(!1),A.damping=.1,D.length!=Ee)for(let d=D.length;d<Ee;d++){const c=new S(Q);D.push(c),A.addSwimmer(c)}de=0,m.copyVideo&&(m.video.currentTime=de),re(),P.focal=31.75,P.sparks.fov=P.focal*2*Math.PI/360,T.matrixMode(T.PROJECTION),T.loadIdentity(),T.perspective(P.focal,T.canvas.width/T.canvas.height,.01,100),T.matrixMode(T.MODELVIEW),ye=-.42,we=1.18,fe=52.5,ce=-24,ge=-261.5,pe=-4,console.log("Olympic mode enabled.")}else if(n.which==87){if(S.raceHasStarted){S.raceHasStarted=!1,a();return}A.WR_position=0,de=ze,m.copyVideo&&(m.video.currentTime=de),o(),S.useGravity=!0;for(let d of D)d.hasDove=!1}else n.which==72?(document.getElementById("commands").hidden=!document.getElementById("commands").hidden,document.getElementById("h").hidden=!document.getElementById("h").hidden):n.which==40?(N.x>129&&(N.x=Math.round(N.x/2)),re(),console.log("decreasing x resolution")):n.which==38?(N.x<16384&&(N.x=Math.round(N.x*2)),re(),console.log("increasing x resolution")):n.which==37?(N.y>129&&(N.y=Math.round(N.y/2)),re(),console.log("decreasing y resolution")):n.which==39&&(N.y<16384&&(N.y=Math.round(N.y*2)),re(),console.log("increasing y resolution"))};function l(n,d){if(!(n>1)){if(X==he)for(let c of D)c.body.velocity=new v.Vector(0,0,0);ue=de-ze;for(let c of D)c.update(n,ue,F);A.updateSpheres(n);for(let c=0;c<P.numSteps;c++)A.stepSimulation();U.updateCaustics(A),de+=n}}function h(n){v.keys.L&&(U.lightDir=v.Vector.fromAngles((90-ge)*Math.PI/180,-ce*Math.PI/180),te&&U.updateCaustics(A)),S.showFlags&&S.updateAttributesTexture(T,D),A.addOrRemoveVisualizationWaves(!0,D,ue),A.updateNormals(),T.clear(T.COLOR_BUFFER_BIT|T.DEPTH_BUFFER_BIT),T.loadIdentity(),T.translate(ye,we,-fe),T.rotate(-pe,0,0,1),T.rotate(-ce,1,0,0),T.rotate(-ge,0,1,0),T.translate(0,.5,0),T.enable(T.DEPTH_TEST),U.sphereCenter=D[0].body.center,U.sphereRadius=K,U.renderCube(A),U.renderWater(A,Ce,D,ue,P.shadow),U.renderSpheres(A),m.render(ue,P.sparks,F),T.disable(T.DEPTH_TEST),A.addOrRemoveVisualizationWaves(!1,D,ue)}};
//# sourceMappingURL=swimming-46NI1qqW.js.map
