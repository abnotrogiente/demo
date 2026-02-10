var Pe=Object.defineProperty;var De=(i,s,f)=>s in i?Pe(i,s,{enumerable:!0,configurable:!0,writable:!0,value:f}):i[s]=f;var ve=(i,s,f)=>De(i,typeof s!="symbol"?s+"":s,f);import"./modulepreload-polyfill-B5Qt9EMX.js";import{g as Be}from"./lil-gui.module.min-Vka56b52.js";var p=function(){var i,s={create:function(t){t=t||{};var r=document.createElement("canvas");r.width=800,r.height=600,"alpha"in t||(t.alpha=!1);try{i=r.getContext("webgl",t)}catch{}try{i=i||r.getContext("experimental-webgl",t)}catch{}if(!i)throw new Error("WebGL not supported");return i.HALF_FLOAT_OES=36193,f(),g(),T(),N(),i},keys:{},Matrix:y,Indexer:X,Buffer:H,Mesh:L,HitTest:U,Raytracer:W,Shader:se,Texture:I,Vector:m};function f(){i.MODELVIEW=F|1,i.PROJECTION=F|2;var t=new y,r=new y;i.modelviewMatrix=new y,i.projectionMatrix=new y;var e=[],o=[],a,c;i.matrixMode=function(n){switch(n){case i.MODELVIEW:a="modelviewMatrix",c=e;break;case i.PROJECTION:a="projectionMatrix",c=o;break;default:throw new Error("invalid matrix mode "+n)}},i.loadIdentity=function(){y.identity(i[a])},i.loadMatrix=function(n){for(var l=n.m,u=i[a].m,d=0;d<16;d++)u[d]=l[d]},i.multMatrix=function(n){i.loadMatrix(y.multiply(i[a],n,r))},i.perspective=function(n,l,u,d){i.multMatrix(y.perspective(n,l,u,d,t))},i.frustum=function(n,l,u,d,h,v){i.multMatrix(y.frustum(n,l,u,d,h,v,t))},i.ortho=function(n,l,u,d,h,v){i.multMatrix(y.ortho(n,l,u,d,h,v,t))},i.scale=function(n,l,u){i.multMatrix(y.scale(n,l,u,t))},i.translate=function(n,l,u){i.multMatrix(y.translate(n,l,u,t))},i.rotate=function(n,l,u,d){i.multMatrix(y.rotate(n,l,u,d,t))},i.lookAt=function(n,l,u,d,h,v,w,x,_){i.multMatrix(y.lookAt(n,l,u,d,h,v,w,x,_,t))},i.pushMatrix=function(){c.push(Array.prototype.slice.call(i[a].m))},i.popMatrix=function(){var n=c.pop();i[a].m=O?new Float32Array(n):n},i.project=function(n,l,u,d,h,v){d=d||i.modelviewMatrix,h=h||i.projectionMatrix,v=v||i.getParameter(i.VIEWPORT);var w=h.transformPoint(d.transformPoint(new m(n,l,u)));return new m(v[0]+v[2]*(w.x*.5+.5),v[1]+v[3]*(w.y*.5+.5),w.z*.5+.5)},i.unProject=function(n,l,u,d,h,v){d=d||i.modelviewMatrix,h=h||i.projectionMatrix,v=v||i.getParameter(i.VIEWPORT);var w=new m((n-v[0])/v[2]*2-1,(l-v[1])/v[3]*2-1,u*2-1);return y.inverse(y.multiply(h,d,t),r).transformPoint(w)},i.matrixMode(i.MODELVIEW)}function g(){var t={mesh:new L({coords:!0,colors:!0,triangles:!1}),mode:-1,coord:[0,0,0,0],color:[1,1,1,1],shader:new se("      uniform float pointSize;      varying vec4 color;      varying vec4 coord;      void main() {        color = gl_Color;        coord = gl_TexCoord;        gl_Position = gl_ModelViewProjectionMatrix * gl_Vertex;        gl_PointSize = pointSize;      }    ","      uniform sampler2D texture;      uniform float pointSize;      uniform bool useTexture;      varying vec4 color;      varying vec4 coord;      void main() {        gl_FragColor = color;        if (useTexture) gl_FragColor *= texture2D(texture, coord.xy);      }    ")};i.pointSize=function(r){t.shader.uniforms({pointSize:r})},i.begin=function(r){if(t.mode!=-1)throw new Error("mismatched gl.begin() and gl.end() calls");t.mode=r,t.mesh.colors=[],t.mesh.coords=[],t.mesh.vertices=[]},i.color=function(r,e,o,a){t.color=arguments.length==1?r.toArray().concat(1):[r,e,o,a||1]},i.texCoord=function(r,e){t.coord=arguments.length==1?r.toArray(2):[r,e]},i.vertex=function(r,e,o){t.mesh.colors.push(t.color),t.mesh.coords.push(t.coord),t.mesh.vertices.push(arguments.length==1?r.toArray():[r,e,o])},i.end=function(){if(t.mode==-1)throw new Error("mismatched gl.begin() and gl.end() calls");t.mesh.compile(),t.shader.uniforms({useTexture:!!i.getParameter(i.TEXTURE_BINDING_2D)}).draw(t.mesh,t.mode),t.mode=-1}}function T(){var t=i,r=0,e=0,o={},a=!1,c=Object.prototype.hasOwnProperty;function n(){for(var x in o)if(c.call(o,x)&&o[x])return!0;return!1}function l(x){var _={};for(var C in x)typeof x[C]=="function"?_[C]=function(G){return function(){G.apply(x,arguments)}}(x[C]):_[C]=x[C];_.original=x,_.x=_.pageX,_.y=_.pageY;for(var z=i.canvas;z;z=z.offsetParent)_.x-=z.offsetLeft,_.y-=z.offsetTop;return a?(_.deltaX=_.x-r,_.deltaY=_.y-e):(_.deltaX=0,_.deltaY=0,a=!0),r=_.x,e=_.y,_.dragging=n(),_.preventDefault=function(){_.original.preventDefault()},_.stopPropagation=function(){_.original.stopPropagation()},_}function u(x){i=t,n()||(M(document,"mousemove",d),M(document,"mouseup",h),b(i.canvas,"mousemove",d),b(i.canvas,"mouseup",h)),o[x.which]=!0,x=l(x),i.onmousedown&&i.onmousedown(x),x.preventDefault()}function d(x){i=t,x=l(x),i.onmousemove&&i.onmousemove(x),x.preventDefault()}function h(x){i=t,o[x.which]=!1,n()||(b(document,"mousemove",d),b(document,"mouseup",h),M(i.canvas,"mousemove",d),M(i.canvas,"mouseup",h)),x=l(x),i.onmouseup&&i.onmouseup(x),x.preventDefault()}function v(){a=!1}function w(){o={},a=!1}M(i.canvas,"mousedown",u),M(i.canvas,"mousemove",d),M(i.canvas,"mouseup",h),M(i.canvas,"mouseover",v),M(i.canvas,"mouseout",v),M(document,"contextmenu",w)}function A(t){var r={8:"BACKSPACE",9:"TAB",13:"ENTER",16:"SHIFT",27:"ESCAPE",32:"SPACE",37:"LEFT",38:"UP",39:"RIGHT",40:"DOWN"};return r[t]||(t>=65&&t<=90?String.fromCharCode(t):null)}function M(t,r,e){t.addEventListener(r,e)}function b(t,r,e){t.removeEventListener(r,e)}M(document,"keydown",function(t){if(!t.altKey&&!t.ctrlKey&&!t.metaKey){var r=A(t.keyCode);r&&(s.keys[r]=!0),s.keys[t.keyCode]=!0}}),M(document,"keyup",function(t){if(!t.altKey&&!t.ctrlKey&&!t.metaKey){var r=A(t.keyCode);r&&(s.keys[r]=!1),s.keys[t.keyCode]=!1}});function N(){(function(t){i.makeCurrent=function(){i=t}})(i),i.animate=function(){var t=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(a){setTimeout(a,16.666666666666668)},r=new Date().getTime(),e=i;function o(){i=e;var a=new Date().getTime();i.onupdate&&i.onupdate((a-r)/1e3),i.ondraw&&i.ondraw(),t(o),r=a}o()},i.fullscreen=function(t){t=t||{};var r=t.paddingTop||0,e=t.paddingLeft||0,o=t.paddingRight||0,a=t.paddingBottom||0;if(!document.body)throw new Error("document.body doesn't exist yet (call gl.fullscreen() from window.onload() or from inside the <body> tag)");document.body.appendChild(i.canvas),document.body.style.overflow="hidden",i.canvas.style.position="absolute",i.canvas.style.left=e+"px",i.canvas.style.top=r+"px";function c(){i.canvas.width=window.innerWidth-e-o,i.canvas.height=window.innerHeight-r-a,i.viewport(0,0,i.canvas.width,i.canvas.height),(t.camera||!("camera"in t))&&(i.matrixMode(i.PROJECTION),i.loadIdentity(),i.perspective(t.fov||45,i.canvas.width/i.canvas.height,t.near||.1,t.far||1e3),i.matrixMode(i.MODELVIEW)),i.ondraw&&i.ondraw()}M(window,"resize",c),c()}}var F=305397760,O=typeof Float32Array<"u";function y(){var t=Array.prototype.concat.apply([],arguments);t.length||(t=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),this.m=O?new Float32Array(t):t}y.prototype={inverse:function(){return y.inverse(this,new y)},transpose:function(){return y.transpose(this,new y)},multiply:function(t){return y.multiply(this,t,new y)},transformPoint:function(t){var r=this.m;return new m(r[0]*t.x+r[1]*t.y+r[2]*t.z+r[3],r[4]*t.x+r[5]*t.y+r[6]*t.z+r[7],r[8]*t.x+r[9]*t.y+r[10]*t.z+r[11]).divide(r[12]*t.x+r[13]*t.y+r[14]*t.z+r[15])},transformVector:function(t){var r=this.m;return new m(r[0]*t.x+r[1]*t.y+r[2]*t.z,r[4]*t.x+r[5]*t.y+r[6]*t.z,r[8]*t.x+r[9]*t.y+r[10]*t.z)}},y.inverse=function(t,r){r=r||new y;var e=t.m,o=r.m;o[0]=e[5]*e[10]*e[15]-e[5]*e[14]*e[11]-e[6]*e[9]*e[15]+e[6]*e[13]*e[11]+e[7]*e[9]*e[14]-e[7]*e[13]*e[10],o[1]=-e[1]*e[10]*e[15]+e[1]*e[14]*e[11]+e[2]*e[9]*e[15]-e[2]*e[13]*e[11]-e[3]*e[9]*e[14]+e[3]*e[13]*e[10],o[2]=e[1]*e[6]*e[15]-e[1]*e[14]*e[7]-e[2]*e[5]*e[15]+e[2]*e[13]*e[7]+e[3]*e[5]*e[14]-e[3]*e[13]*e[6],o[3]=-e[1]*e[6]*e[11]+e[1]*e[10]*e[7]+e[2]*e[5]*e[11]-e[2]*e[9]*e[7]-e[3]*e[5]*e[10]+e[3]*e[9]*e[6],o[4]=-e[4]*e[10]*e[15]+e[4]*e[14]*e[11]+e[6]*e[8]*e[15]-e[6]*e[12]*e[11]-e[7]*e[8]*e[14]+e[7]*e[12]*e[10],o[5]=e[0]*e[10]*e[15]-e[0]*e[14]*e[11]-e[2]*e[8]*e[15]+e[2]*e[12]*e[11]+e[3]*e[8]*e[14]-e[3]*e[12]*e[10],o[6]=-e[0]*e[6]*e[15]+e[0]*e[14]*e[7]+e[2]*e[4]*e[15]-e[2]*e[12]*e[7]-e[3]*e[4]*e[14]+e[3]*e[12]*e[6],o[7]=e[0]*e[6]*e[11]-e[0]*e[10]*e[7]-e[2]*e[4]*e[11]+e[2]*e[8]*e[7]+e[3]*e[4]*e[10]-e[3]*e[8]*e[6],o[8]=e[4]*e[9]*e[15]-e[4]*e[13]*e[11]-e[5]*e[8]*e[15]+e[5]*e[12]*e[11]+e[7]*e[8]*e[13]-e[7]*e[12]*e[9],o[9]=-e[0]*e[9]*e[15]+e[0]*e[13]*e[11]+e[1]*e[8]*e[15]-e[1]*e[12]*e[11]-e[3]*e[8]*e[13]+e[3]*e[12]*e[9],o[10]=e[0]*e[5]*e[15]-e[0]*e[13]*e[7]-e[1]*e[4]*e[15]+e[1]*e[12]*e[7]+e[3]*e[4]*e[13]-e[3]*e[12]*e[5],o[11]=-e[0]*e[5]*e[11]+e[0]*e[9]*e[7]+e[1]*e[4]*e[11]-e[1]*e[8]*e[7]-e[3]*e[4]*e[9]+e[3]*e[8]*e[5],o[12]=-e[4]*e[9]*e[14]+e[4]*e[13]*e[10]+e[5]*e[8]*e[14]-e[5]*e[12]*e[10]-e[6]*e[8]*e[13]+e[6]*e[12]*e[9],o[13]=e[0]*e[9]*e[14]-e[0]*e[13]*e[10]-e[1]*e[8]*e[14]+e[1]*e[12]*e[10]+e[2]*e[8]*e[13]-e[2]*e[12]*e[9],o[14]=-e[0]*e[5]*e[14]+e[0]*e[13]*e[6]+e[1]*e[4]*e[14]-e[1]*e[12]*e[6]-e[2]*e[4]*e[13]+e[2]*e[12]*e[5],o[15]=e[0]*e[5]*e[10]-e[0]*e[9]*e[6]-e[1]*e[4]*e[10]+e[1]*e[8]*e[6]+e[2]*e[4]*e[9]-e[2]*e[8]*e[5];for(var a=e[0]*o[0]+e[1]*o[4]+e[2]*o[8]+e[3]*o[12],c=0;c<16;c++)o[c]/=a;return r},y.transpose=function(t,r){r=r||new y;var e=t.m,o=r.m;return o[0]=e[0],o[1]=e[4],o[2]=e[8],o[3]=e[12],o[4]=e[1],o[5]=e[5],o[6]=e[9],o[7]=e[13],o[8]=e[2],o[9]=e[6],o[10]=e[10],o[11]=e[14],o[12]=e[3],o[13]=e[7],o[14]=e[11],o[15]=e[15],r},y.multiply=function(t,r,e){e=e||new y;var o=t.m,a=r.m,c=e.m;return c[0]=o[0]*a[0]+o[1]*a[4]+o[2]*a[8]+o[3]*a[12],c[1]=o[0]*a[1]+o[1]*a[5]+o[2]*a[9]+o[3]*a[13],c[2]=o[0]*a[2]+o[1]*a[6]+o[2]*a[10]+o[3]*a[14],c[3]=o[0]*a[3]+o[1]*a[7]+o[2]*a[11]+o[3]*a[15],c[4]=o[4]*a[0]+o[5]*a[4]+o[6]*a[8]+o[7]*a[12],c[5]=o[4]*a[1]+o[5]*a[5]+o[6]*a[9]+o[7]*a[13],c[6]=o[4]*a[2]+o[5]*a[6]+o[6]*a[10]+o[7]*a[14],c[7]=o[4]*a[3]+o[5]*a[7]+o[6]*a[11]+o[7]*a[15],c[8]=o[8]*a[0]+o[9]*a[4]+o[10]*a[8]+o[11]*a[12],c[9]=o[8]*a[1]+o[9]*a[5]+o[10]*a[9]+o[11]*a[13],c[10]=o[8]*a[2]+o[9]*a[6]+o[10]*a[10]+o[11]*a[14],c[11]=o[8]*a[3]+o[9]*a[7]+o[10]*a[11]+o[11]*a[15],c[12]=o[12]*a[0]+o[13]*a[4]+o[14]*a[8]+o[15]*a[12],c[13]=o[12]*a[1]+o[13]*a[5]+o[14]*a[9]+o[15]*a[13],c[14]=o[12]*a[2]+o[13]*a[6]+o[14]*a[10]+o[15]*a[14],c[15]=o[12]*a[3]+o[13]*a[7]+o[14]*a[11]+o[15]*a[15],e},y.identity=function(t){t=t||new y;var r=t.m;return r[0]=r[5]=r[10]=r[15]=1,r[1]=r[2]=r[3]=r[4]=r[6]=r[7]=r[8]=r[9]=r[11]=r[12]=r[13]=r[14]=0,t},y.perspective=function(t,r,e,o,a){var c=Math.tan(t*Math.PI/360)*e,n=c*r;return y.frustum(-n,n,-c,c,e,o,a)},y.frustum=function(t,r,e,o,a,c,n){n=n||new y;var l=n.m;return l[0]=2*a/(r-t),l[1]=0,l[2]=(r+t)/(r-t),l[3]=0,l[4]=0,l[5]=2*a/(o-e),l[6]=(o+e)/(o-e),l[7]=0,l[8]=0,l[9]=0,l[10]=-(c+a)/(c-a),l[11]=-2*c*a/(c-a),l[12]=0,l[13]=0,l[14]=-1,l[15]=0,n},y.ortho=function(t,r,e,o,a,c,n){n=n||new y;var l=n.m;return l[0]=2/(r-t),l[1]=0,l[2]=0,l[3]=-(r+t)/(r-t),l[4]=0,l[5]=2/(o-e),l[6]=0,l[7]=-(o+e)/(o-e),l[8]=0,l[9]=0,l[10]=-2/(c-a),l[11]=-(c+a)/(c-a),l[12]=0,l[13]=0,l[14]=0,l[15]=1,n},y.scale=function(t,r,e,o){o=o||new y;var a=o.m;return a[0]=t,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=e,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,o},y.translate=function(t,r,e,o){o=o||new y;var a=o.m;return a[0]=1,a[1]=0,a[2]=0,a[3]=t,a[4]=0,a[5]=1,a[6]=0,a[7]=r,a[8]=0,a[9]=0,a[10]=1,a[11]=e,a[12]=0,a[13]=0,a[14]=0,a[15]=1,o},y.rotate=function(t,r,e,o,a){if(!t||!r&&!e&&!o)return y.identity(a);a=a||new y;var c=a.m,n=Math.sqrt(r*r+e*e+o*o);t*=Math.PI/180,r/=n,e/=n,o/=n;var l=Math.cos(t),u=Math.sin(t),d=1-l;return c[0]=r*r*d+l,c[1]=r*e*d-o*u,c[2]=r*o*d+e*u,c[3]=0,c[4]=e*r*d+o*u,c[5]=e*e*d+l,c[6]=e*o*d-r*u,c[7]=0,c[8]=o*r*d-e*u,c[9]=o*e*d+r*u,c[10]=o*o*d+l,c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,a},y.lookAt=function(t,r,e,o,a,c,n,l,u,d){d=d||new y;var h=d.m,v=new m(t,r,e),w=new m(o,a,c),x=new m(n,l,u),_=v.subtract(w).unit(),C=x.cross(_).unit(),z=_.cross(C).unit();return h[0]=C.x,h[1]=C.y,h[2]=C.z,h[3]=-C.dot(v),h[4]=z.x,h[5]=z.y,h[6]=z.z,h[7]=-z.dot(v),h[8]=_.x,h[9]=_.y,h[10]=_.z,h[11]=-_.dot(v),h[12]=0,h[13]=0,h[14]=0,h[15]=1,d};function X(){this.unique=[],this.indices=[],this.map={}}X.prototype={add:function(t){var r=JSON.stringify(t);return r in this.map||(this.map[r]=this.unique.length,this.unique.push(t)),this.map[r]}};function H(t,r){this.buffer=null,this.target=t,this.type=r,this.data=[]}H.prototype={compile:function(t){for(var r=[],e=0,o=1e4;e<this.data.length;e+=o)r=Array.prototype.concat.apply(r,this.data.slice(e,e+o));var a=this.data.length?r.length/this.data.length:0;if(a!=Math.round(a))throw new Error("buffer elements not of consistent size, average size is "+a);this.buffer=this.buffer||i.createBuffer(),this.buffer.length=r.length,this.buffer.spacing=a,i.bindBuffer(this.target,this.buffer),i.bufferData(this.target,new this.type(r),t||i.STATIC_DRAW)}};function L(t){t=t||{},this.vertexBuffers={},this.indexBuffers={},this.addVertexBuffer("vertices","gl_Vertex"),t.coords&&this.addVertexBuffer("coords","gl_TexCoord"),t.normals&&this.addVertexBuffer("normals","gl_Normal"),t.colors&&this.addVertexBuffer("colors","gl_Color"),(!("triangles"in t)||t.triangles)&&this.addIndexBuffer("triangles"),t.lines&&this.addIndexBuffer("lines")}L.prototype={addVertexBuffer:function(t,r){var e=this.vertexBuffers[r]=new H(i.ARRAY_BUFFER,Float32Array);e.name=t,this[t]=[]},addIndexBuffer:function(t){this.indexBuffers[t]=new H(i.ELEMENT_ARRAY_BUFFER,Uint16Array),this[t]=[]},compile:function(){for(var t in this.vertexBuffers){var r=this.vertexBuffers[t];r.data=this[r.name],r.compile()}for(var e in this.indexBuffers){var r=this.indexBuffers[e];r.data=this[e],r.compile()}},transform:function(t){if(this.vertices=this.vertices.map(function(e){return t.transformPoint(m.fromArray(e)).toArray()}),this.normals){var r=t.inverse().transpose();this.normals=this.normals.map(function(e){return r.transformVector(m.fromArray(e)).unit().toArray()})}return this.compile(),this},computeNormals:function(){this.normals||this.addVertexBuffer("normals","gl_Normal");for(var t=0;t<this.vertices.length;t++)this.normals[t]=new m;for(var t=0;t<this.triangles.length;t++){var r=this.triangles[t],e=m.fromArray(this.vertices[r[0]]),o=m.fromArray(this.vertices[r[1]]),a=m.fromArray(this.vertices[r[2]]),c=o.subtract(e).cross(a.subtract(e)).unit();this.normals[r[0]]=this.normals[r[0]].add(c),this.normals[r[1]]=this.normals[r[1]].add(c),this.normals[r[2]]=this.normals[r[2]].add(c)}for(var t=0;t<this.vertices.length;t++)this.normals[t]=this.normals[t].unit().toArray();return this.compile(),this},computeWireframe:function(){for(var t=new X,r=0;r<this.triangles.length;r++)for(var e=this.triangles[r],o=0;o<e.length;o++){var a=e[o],c=e[(o+1)%e.length];t.add([Math.min(a,c),Math.max(a,c)])}return this.lines||this.addIndexBuffer("lines"),this.lines=t.unique,this.compile(),this},getAABB:function(){var t={min:new m(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)};t.max=t.min.negative();for(var r=0;r<this.vertices.length;r++){var e=m.fromArray(this.vertices[r]);t.min=m.min(t.min,e),t.max=m.max(t.max,e)}return t},getBoundingSphere:function(){for(var t=this.getAABB(),r={center:t.min.add(t.max).divide(2),radius:0},e=0;e<this.vertices.length;e++)r.radius=Math.max(r.radius,m.fromArray(this.vertices[e]).subtract(r.center).length());return r}},L.plane=function(t){t=t||{};for(var r=new L(t),e=t.detailX||t.detail||1,o=t.detailY||t.detail||1,a=t.width||2,c=t.height||2,n=0;n<=o;n++)for(var l=n/o,u=0;u<=e;u++){var d=u/e;if(r.vertices.push([(d-.5)*a,(l-.5)*c,0]),r.coords&&r.coords.push([d,l]),r.normals&&r.normals.push([0,0,1]),u<e&&n<o){var h=u+n*(e+1);r.triangles.push([h,h+1,h+e+1]),r.triangles.push([h+e+1,h+1,h+e+2])}}return r.compile(),r};var j=[[0,4,2,6,-1,0,0],[1,3,5,7,1,0,0],[0,1,4,5,0,-1,0],[2,6,3,7,0,1,0],[0,2,1,3,0,0,-1],[4,5,6,7,0,0,1]];function k(t){return new m((t&1)*2-1,(t&2)-1,(t&4)/2-1)}L.cube=function(t){for(var r=new L(t),e=t&&t.width||2,o=t&&t.height||2,a=t&&t.depth||2,c=0;c<j.length;c++){for(var n=j[c],l=c*4,u=0;u<4;u++){var d=n[u];const h=k(d).toArray();h[0]*=e/2,h[1]*=o/2,h[2]*=a/2,r.vertices.push(h),r.coords&&r.coords.push([u&1,(u&2)/2]),r.normals&&r.normals.push(n.slice(4,7))}r.triangles.push([l,l+1,l+2]),r.triangles.push([l+2,l+1,l+3])}return r.compile(),r},L.sphere=function(t){function r(z,G,re){return u?[z,re,G]:[z,G,re]}function e(z){return z+(z-z*z)/2}t=t||{};for(var o=new L(t),a=new X,c=t.detail||6,n=0;n<8;n++)for(var l=k(n),u=l.x*l.y*l.z>0,d=[],h=0;h<=c;h++){for(var v=0;h+v<=c;v++){var w=h/c,x=v/c,_=(c-h-v)/c,C={vertex:new m(e(w),e(x),e(_)).unit().multiply(l).toArray()};o.coords&&(C.coord=l.y>0?[1-w,_]:[_,1-w]),d.push(a.add(C))}if(h>0)for(var v=0;h+v<=c;v++){var w=(h-1)*(c+1)+(h-1-(h-1)*(h-1))/2+v,x=h*(c+1)+(h-h*h)/2+v;o.triangles.push(r(d[w],d[w+1],d[x])),h+v<c&&o.triangles.push(r(d[x],d[w+1],d[x+1]))}}return o.vertices=a.unique.map(function(z){return z.vertex}),o.coords&&(o.coords=a.unique.map(function(z){return z.coord})),o.normals&&(o.normals=o.vertices),o.compile(),o},L.load=function(t,r){r=r||{},"coords"in r||(r.coords=!!t.coords),"normals"in r||(r.normals=!!t.normals),"colors"in r||(r.colors=!!t.colors),"triangles"in r||(r.triangles=!!t.triangles),"lines"in r||(r.lines=!!t.lines);var e=new L(r);return e.vertices=t.vertices,e.coords&&(e.coords=t.coords),e.normals&&(e.normals=t.normals),e.colors&&(e.colors=t.colors),e.triangles&&(e.triangles=t.triangles),e.lines&&(e.lines=t.lines),e.compile(),e};function U(t,r,e){this.t=arguments.length?t:Number.MAX_VALUE,this.hit=r,this.normal=e}U.prototype={mergeWith:function(t){t.t>0&&t.t<this.t&&(this.t=t.t,this.hit=t.hit,this.normal=t.normal)}};function W(){var t=i.getParameter(i.VIEWPORT),r=i.modelviewMatrix.m,e=new m(r[0],r[4],r[8]),o=new m(r[1],r[5],r[9]),a=new m(r[2],r[6],r[10]),c=new m(r[3],r[7],r[11]);this.eye=new m(-c.dot(e),-c.dot(o),-c.dot(a));var n=t[0],l=n+t[2],u=t[1],d=u+t[3];this.ray00=i.unProject(n,u,1).subtract(this.eye),this.ray10=i.unProject(l,u,1).subtract(this.eye),this.ray01=i.unProject(n,d,1).subtract(this.eye),this.ray11=i.unProject(l,d,1).subtract(this.eye),this.viewport=t}W.prototype={getRayForPixel:function(t,r){t=(t-this.viewport[0])/this.viewport[2],r=1-(r-this.viewport[1])/this.viewport[3];var e=m.lerp(this.ray00,this.ray10,t),o=m.lerp(this.ray01,this.ray11,t);return m.lerp(e,o,r).unit()}},W.hitTestBox=function(t,r,e,o){var a=e.subtract(t).divide(r),c=o.subtract(t).divide(r),n=m.min(a,c),l=m.max(a,c),u=n.max(),d=l.min();if(u>0&&u<d){var h=1e-6,v=t.add(r.multiply(u));return e=e.add(h),o=o.subtract(h),new U(u,v,new m((v.x>o.x)-(v.x<e.x),(v.y>o.y)-(v.y<e.y),(v.z>o.z)-(v.z<e.z)))}return null},W.hitTestSphere=function(t,r,e,o){var a=t.subtract(e),c=r.dot(r),n=2*r.dot(a),l=a.dot(a)-o*o,u=n*n-4*c*l;if(u>0){var d=(-n-Math.sqrt(u))/(2*c),h=t.add(r.multiply(d));return new U(d,h,h.subtract(e).divide(o))}return null},W.hitTestTriangle=function(t,r,e,o,a){var c=o.subtract(e),n=a.subtract(e),l=c.cross(n).unit(),u=l.dot(e.subtract(t))/l.dot(r);if(u>0){var d=t.add(r.multiply(u)),h=d.subtract(e),v=n.dot(n),w=n.dot(c),x=n.dot(h),_=c.dot(c),C=c.dot(h),z=v*_-w*w,G=(_*x-w*C)/z,re=(v*C-w*x)/z;if(G>=0&&re>=0&&G+re<=1)return new U(u,d,l)}return null};function ae(t,r,e){let o;for(;(o=t.exec(r))!=null;)e(o)}var $="LIGHTGL";function se(t,r){function e(v){var w=document.getElementById(v);return w?w.text:v}t=e(t),r=e(r);var o="    uniform mat3 gl_NormalMatrix;    uniform mat4 gl_ModelViewMatrix;    uniform mat4 gl_ProjectionMatrix;    uniform mat4 gl_ModelViewProjectionMatrix;    uniform mat4 gl_ModelViewMatrixInverse;    uniform mat4 gl_ProjectionMatrixInverse;    uniform mat4 gl_ModelViewProjectionMatrixInverse;  ",a=o+"    attribute vec4 gl_Vertex;    attribute vec4 gl_TexCoord;    attribute vec3 gl_Normal;    attribute vec4 gl_Color;    vec4 ftransform() {      return gl_ModelViewProjectionMatrix * gl_Vertex;    }  ",c="    precision highp float;  "+o,n=t+r,l={};ae(/\b(gl_[^;]*)\b;/g,o,function(v){var w=v[1];if(n.indexOf(w)!=-1){var x=w.replace(/[a-z_]/g,"");l[x]=$+w}}),n.indexOf("ftransform")!=-1&&(l.MVPM=$+"gl_ModelViewProjectionMatrix"),this.usedMatrices=l;function u(v,w){var x={},_=/^((\s*\/\/.*\n|\s*#extension.*\n)+)[^]*$/.exec(w);return w=_?_[1]+v+w.substr(_[1].length):v+w,ae(/\bgl_\w+\b/g,v,function(C){C in x||(w=w.replace(new RegExp("\\b"+C+"\\b","g"),$+C),x[C]=!0)}),w}t=u(a,t),r=u(c,r);function d(v,w){var x=i.createShader(v);if(i.shaderSource(x,w),i.compileShader(x),!i.getShaderParameter(x,i.COMPILE_STATUS))throw new Error("compile error: "+i.getShaderInfoLog(x));return x}if(this.program=i.createProgram(),i.attachShader(this.program,d(i.VERTEX_SHADER,t)),i.attachShader(this.program,d(i.FRAGMENT_SHADER,r)),i.linkProgram(this.program),!i.getProgramParameter(this.program,i.LINK_STATUS))throw new Error("link error: "+i.getProgramInfoLog(this.program));this.attributes={},this.uniformLocations={};var h={};ae(/uniform\s+sampler(1D|2D|3D|Cube)\s+(\w+)\s*;/g,t+r,function(v){h[v[2]]=1}),this.isSampler=h}function ge(t){var r=Object.prototype.toString.call(t);return r=="[object Array]"||r=="[object Float32Array]"}function te(t){var r=Object.prototype.toString.call(t);return r=="[object Number]"||r=="[object Boolean]"}new y,new y,se.prototype={uniforms:function(t){i.useProgram(this.program);for(var r in t){var e=this.uniformLocations[r]||i.getUniformLocation(this.program,r);if(e){this.uniformLocations[r]=e;var o=t[r];if(o instanceof m?o=[o.x,o.y,o.z]:o instanceof y&&(o=o.m),ge(o))switch(o.length){case 1:i.uniform1fv(e,new Float32Array(o));break;case 2:i.uniform2fv(e,new Float32Array(o));break;case 3:i.uniform3fv(e,new Float32Array(o));break;case 4:i.uniform4fv(e,new Float32Array(o));break;case 9:i.uniformMatrix3fv(e,!1,new Float32Array([o[0],o[3],o[6],o[1],o[4],o[7],o[2],o[5],o[8]]));break;case 16:i.uniformMatrix4fv(e,!1,new Float32Array([o[0],o[4],o[8],o[12],o[1],o[5],o[9],o[13],o[2],o[6],o[10],o[14],o[3],o[7],o[11],o[15]]));break;default:throw new Error(`don't know how to load uniform "`+r+'" of length '+o.length)}else if(te(o))(this.isSampler[r]?i.uniform1i:i.uniform1f).call(i,e,o);else throw new Error('attempted to set uniform "'+r+'" to invalid value '+o)}}return this},draw:function(t,r){this.drawBuffers(t.vertexBuffers,t.indexBuffers[r==i.LINES?"lines":"triangles"],arguments.length<2?i.TRIANGLES:r)},drawBuffers:function(t,r,e){var o=this.usedMatrices,a=i.modelviewMatrix,c=i.projectionMatrix,n=o.MVMI||o.NM?a.inverse():null,l=o.PMI?c.inverse():null,u=o.MVPM||o.MVPMI?c.multiply(a):null,d={};if(o.MVM&&(d[o.MVM]=a),o.MVMI&&(d[o.MVMI]=n),o.PM&&(d[o.PM]=c),o.PMI&&(d[o.PMI]=l),o.MVPM&&(d[o.MVPM]=u),o.MVPMI&&(d[o.MVPMI]=u.inverse()),o.NM){var h=n.m;d[o.NM]=[h[0],h[4],h[8],h[1],h[5],h[9],h[2],h[6],h[10]]}this.uniforms(d);var v=0;for(var w in t){var x=t[w],_=this.attributes[w]||i.getAttribLocation(this.program,w.replace(/^(gl_.*)$/,$+"$1"));_==-1||!x.buffer||(this.attributes[w]=_,i.bindBuffer(i.ARRAY_BUFFER,x.buffer),i.enableVertexAttribArray(_),i.vertexAttribPointer(_,x.buffer.spacing,i.FLOAT,!1,0,0),v=x.buffer.length/x.buffer.spacing)}for(var w in this.attributes)w in t||i.disableVertexAttribArray(this.attributes[w]);return v&&(!r||r.buffer)&&(r?(i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,r.buffer),i.drawElements(e,r.buffer.length,i.UNSIGNED_SHORT,0)):i.drawArrays(e,0,v)),this}};function I(t,r,e){e=e||{},this.id=i.createTexture(),this.width=t,this.height=r,this.format=e.format||i.RGBA,this.type=e.type||i.UNSIGNED_BYTE;var o=e.filter||e.magFilter||i.LINEAR,a=e.filter||e.minFilter||i.LINEAR;if(this.type===i.FLOAT){if(!I.canUseFloatingPointTextures())throw new Error("OES_texture_float is required but not supported");if((a!==i.NEAREST||o!==i.NEAREST)&&!I.canUseFloatingPointLinearFiltering())throw new Error("OES_texture_float_linear is required but not supported")}else if(this.type===i.HALF_FLOAT_OES){if(!I.canUseHalfFloatingPointTextures())throw new Error("OES_texture_half_float is required but not supported");if((a!==i.NEAREST||o!==i.NEAREST)&&!I.canUseHalfFloatingPointLinearFiltering())throw new Error("OES_texture_half_float_linear is required but not supported")}i.bindTexture(i.TEXTURE_2D,this.id),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,1),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,o),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,a),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,e.wrap||e.wrapS||i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,e.wrap||e.wrapT||i.CLAMP_TO_EDGE),i.texImage2D(i.TEXTURE_2D,0,this.format,t,r,0,this.format,this.type,null)}var K,q,le;I.prototype={bind:function(t){i.activeTexture(i.TEXTURE0+(t||0)),i.bindTexture(i.TEXTURE_2D,this.id)},unbind:function(t){i.activeTexture(i.TEXTURE0+(t||0)),i.bindTexture(i.TEXTURE_2D,null)},canDrawTo:function(){K=K||i.createFramebuffer(),i.bindFramebuffer(i.FRAMEBUFFER,K),i.framebufferTexture2D(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,this.id,0);var t=i.checkFramebufferStatus(i.FRAMEBUFFER)==i.FRAMEBUFFER_COMPLETE;return i.bindFramebuffer(i.FRAMEBUFFER,null),t},drawTo:function(t){var r=i.getParameter(i.VIEWPORT);if(K=K||i.createFramebuffer(),q=q||i.createRenderbuffer(),i.bindFramebuffer(i.FRAMEBUFFER,K),i.bindRenderbuffer(i.RENDERBUFFER,q),(this.width!=q.width||this.height!=q.height)&&(q.width=this.width,q.height=this.height,i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_COMPONENT16,this.width,this.height)),i.framebufferTexture2D(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,this.id,0),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,q),i.checkFramebufferStatus(i.FRAMEBUFFER)!=i.FRAMEBUFFER_COMPLETE)throw new Error("Rendering to this texture is not supported (incomplete framebuffer)");i.viewport(0,0,this.width,this.height),t(),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindRenderbuffer(i.RENDERBUFFER,null),i.viewport(r[0],r[1],r[2],r[3])},swapWith:function(t){var r;r=t.id,t.id=this.id,this.id=r,r=t.width,t.width=this.width,this.width=r,r=t.height,t.height=this.height,this.height=r}},I.fromImage=function(t,r){r=r||{};var e=new I(t.width,t.height,r);try{i.texImage2D(i.TEXTURE_2D,0,e.format,e.format,e.type,t)}catch{throw location.protocol=="file:"?new Error('image not loaded for security reasons (serve this page over "http://" instead)'):new Error("image not loaded for security reasons (image must originate from the same domain as this page or use Cross-Origin Resource Sharing)")}return r.minFilter&&r.minFilter!=i.NEAREST&&r.minFilter!=i.LINEAR&&i.generateMipmap(i.TEXTURE_2D),e},I.fromURL=function(t,r){le=le||function(){var c=document.createElement("canvas").getContext("2d");c.canvas.width=c.canvas.height=128;for(var n=0;n<c.canvas.height;n+=16)for(var l=0;l<c.canvas.width;l+=16)c.fillStyle=(l^n)&16?"#FFF":"#DDD",c.fillRect(l,n,16,16);return c.canvas}();var e=I.fromImage(le,r),o=new Image,a=i;return o.onload=function(){a.makeCurrent(),I.fromImage(o,r).swapWith(e)},o.src=t,e},I.canUseFloatingPointTextures=function(){return!!i.getExtension("OES_texture_float")},I.canUseFloatingPointLinearFiltering=function(){return!!i.getExtension("OES_texture_float_linear")},I.canUseHalfFloatingPointTextures=function(){return!!i.getExtension("OES_texture_half_float")},I.canUseHalfFloatingPointLinearFiltering=function(){return!!i.getExtension("OES_texture_half_float_linear")};function m(t,r,e){this.x=t||0,this.y=r||0,this.z=e||0}return m.prototype={negative:function(){return new m(-this.x,-this.y,-this.z)},add:function(t){return t instanceof m?new m(this.x+t.x,this.y+t.y,this.z+t.z):new m(this.x+t,this.y+t,this.z+t)},subtract:function(t){return t instanceof m?new m(this.x-t.x,this.y-t.y,this.z-t.z):new m(this.x-t,this.y-t,this.z-t)},multiply:function(t){return t instanceof m?new m(this.x*t.x,this.y*t.y,this.z*t.z):new m(this.x*t,this.y*t,this.z*t)},divide:function(t){return t instanceof m?new m(this.x/t.x,this.y/t.y,this.z/t.z):new m(this.x/t,this.y/t,this.z/t)},equals:function(t){return this.x==t.x&&this.y==t.y&&this.z==t.z},dot:function(t){return this.x*t.x+this.y*t.y+this.z*t.z},cross:function(t){return new m(this.y*t.z-this.z*t.y,this.z*t.x-this.x*t.z,this.x*t.y-this.y*t.x)},length:function(){return Math.sqrt(this.dot(this))},unit:function(){return this.divide(this.length())},min:function(){return Math.min(Math.min(this.x,this.y),this.z)},max:function(){return Math.max(Math.max(this.x,this.y),this.z)},toAngles:function(){return{theta:Math.atan2(this.z,this.x),phi:Math.asin(this.y/this.length())}},angleTo:function(t){return Math.acos(this.dot(t)/(this.length()*t.length()))},toArray:function(t){return[this.x,this.y,this.z].slice(0,t||3)},clone:function(){return new m(this.x,this.y,this.z)},init:function(t,r,e){return this.x=t,this.y=r,this.z=e,this}},m.negative=function(t,r){return r.x=-t.x,r.y=-t.y,r.z=-t.z,r},m.add=function(t,r,e){return r instanceof m?(e.x=t.x+r.x,e.y=t.y+r.y,e.z=t.z+r.z):(e.x=t.x+r,e.y=t.y+r,e.z=t.z+r),e},m.subtract=function(t,r,e){return r instanceof m?(e.x=t.x-r.x,e.y=t.y-r.y,e.z=t.z-r.z):(e.x=t.x-r,e.y=t.y-r,e.z=t.z-r),e},m.multiply=function(t,r,e){return r instanceof m?(e.x=t.x*r.x,e.y=t.y*r.y,e.z=t.z*r.z):(e.x=t.x*r,e.y=t.y*r,e.z=t.z*r),e},m.divide=function(t,r,e){return r instanceof m?(e.x=t.x/r.x,e.y=t.y/r.y,e.z=t.z/r.z):(e.x=t.x/r,e.y=t.y/r,e.z=t.z/r),e},m.cross=function(t,r,e){return e.x=t.y*r.z-t.z*r.y,e.y=t.z*r.x-t.x*r.z,e.z=t.x*r.y-t.y*r.x,e},m.unit=function(t,r){var e=t.length();return r.x=t.x/e,r.y=t.y/e,r.z=t.z/e,r},m.fromAngles=function(t,r){return new m(Math.cos(t)*Math.cos(r),Math.sin(r),Math.sin(t)*Math.cos(r))},m.randomDirection=function(){return m.fromAngles(Math.random()*Math.PI*2,Math.asin(Math.random()*2-1))},m.min=function(t,r){return new m(Math.min(t.x,r.x),Math.min(t.y,r.y),Math.min(t.z,r.z))},m.max=function(t,r){return new m(Math.max(t.x,r.x),Math.max(t.y,r.y),Math.max(t.z,r.z))},m.lerp=function(t,r,e){return r.subtract(t).multiply(e).add(t)},m.fromArray=function(t){return new m(t[0],t[1],t[2])},m.angleBetween=function(t,r){return t.angleTo(r)},s}();const Re=new p.Vector(0,-4,0);class ue{constructor(s,f){this.center=new p.Vector(s.x,s.y,s.z),this.oldCenter=new p.Vector(s.x,s.y,s.z),this.radius=f,this.cinematic=!1,this.velocity=new p.Vector(0,0,0),this.acceleration=new p.Vector(0,0,0),this.mass=4/3*Math.PI*Math.pow(f,3)*1e3,this.invMass=1/this.mass,this.radiusSquared=f*f,this.mesh=p.Mesh.sphere({detail:10})}update(s,f){if(this.cinematic)this.velocity=new p.Vector(0,0,0);else{this.oldCenter=new p.Vector(this.center.x,this.center.y,this.center.z);const g=Math.max(0,Math.min(1,(this.radius-this.center.y)/(2*this.radius))),T=Re.multiply(-1.35*this.mass*g),A=this.velocity.unit().multiply(-1e3*this.radiusSquared*g*this.velocity.dot(this.velocity));this.addForce(A),this.addForce(T),this.addForce(Re.multiply(this.mass)),this.velocity=this.velocity.add(this.acceleration.multiply(s)),this.acceleration=new p.Vector(0,0,0),this.center=this.center.add(this.velocity.multiply(s)),this.center.y<this.radius-f.y&&(this.center.y=this.radius-1,this.velocity.y=Math.abs(this.velocity.y)*.7)}}addForce(s){this.cinematic?console.warn("Trying to add force to a cinematic sphere."):this.acceleration=this.acceleration.add(s.multiply(this.invMass))}move(s){this.oldCenter=new p.Vector(this.center.x,this.center.y,this.center.z),this.center=new p.Vector(s.x,s.y,s.z),this.cinematic||console.warn("Moving a non cinematic sphere.")}}function Ae(i=0,s=1){const f=1-Math.random(),g=Math.random();return Math.sqrt(-2*Math.log(f))*Math.cos(2*Math.PI*g)*s+i}const Q=new p.Vector(1e3,0,0),Le=.5,Ue=1,Me=2*Math.PI*Ue,ne=class ne{constructor(s){this.startingPoint=new p.Vector(s.x,s.y,s.z),this.center=new p.Vector(s.x,s.y,s.z),this.force=new p.Vector(0,0,190+Ae(0,20));const f=.25,g=.15;this.body=new ue(s,f),this.leftArm=new ue(Q,g),this.rightArm=new ue(Q,g),this.leftFoot=new ue(Q,g),this.rightFoot=new ue(Q,g),this.body.cinematic=!ne.useGravity,this.leftArm.cinematic=!0,this.rightArm.cinematic=!0,this.leftFoot.cinematic=!0,this.rightFoot.cinematic=!0,this.spheres=[this.body,this.leftArm,this.rightArm,this.leftFoot,this.rightFoot],this.divingDistance=0,this.divingTime=1e3}jump(s){this.body.cinematic=!1,this.body.velocity=new p.Vector(0,0,4.5+Ae(0,1)),this.body.center=new p.Vector(this.startingPoint.x,1,-s.z/2)}getArmOffset(s,f){return new p.Vector(0,Math.cos(Me*s+f),Math.sin(Me*s+f)).multiply(Le)}update(s,f,g){if(ne.swimming){this.body.addForce(this.force);const T=this.getArmOffset(f,0),A=this.getArmOffset(f,Math.PI),M=this.getArmOffset(f*2,0),b=this.getArmOffset(f*2,Math.PI);this.rightArm.move(this.body.center.add(T).add(new p.Vector(.3,0,0))),this.leftArm.move(this.body.center.add(A).add(new p.Vector(-.3,0,0))),this.rightFoot.move(this.body.center.add(new p.Vector(.15,M.y*.5,-1))),this.leftFoot.move(this.body.center.add(new p.Vector(-.15,b.y*.5,-1)))}else this.rightArm.move(Q),this.leftArm.move(Q),this.rightFoot.move(Q),this.leftFoot.move(Q);for(let T of this.spheres)T.update(s,g);!this.hasDove&&this.body.center.y<=0&&this.body.oldCenter.y>=0&&(this.divingDistance=this.body.center.z+g.z/2,this.divingTime=f,this.hasDove=!0,console.log("dived : "+this.divingDistance))}};ve(ne,"useGravity",!1),ve(ne,"swimming",!1),ve(ne,"showFlags",!0);let D=ne;const Se=`
    uniform float wr;
    #define sqrt_2_PI 2.50662827
    #define PI 3.1415926536
    const int SWIMMER_X_INDEX = 0;
    const int SWIMMER_Z_INDEX = 1;
    const int SWIMMER_DIVING_DISTANCE_INDEX = 2;
    const int SWIMMER_DIVING_TIME_INDEX = 3;
    const int SWIMMER_NUM_ATTRIBUTES = 4;
    uniform float swimmersAttributes[40];
    uniform float swimmersNumber;
    uniform float time;

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
            float swimmer_x = swimmersAttributes[SWIMMER_NUM_ATTRIBUTES*i + SWIMMER_X_INDEX];
            float swimmer_z = swimmersAttributes[SWIMMER_NUM_ATTRIBUTES*i + SWIMMER_Z_INDEX];
            float divingDistance = swimmersAttributes[SWIMMER_NUM_ATTRIBUTES * i + SWIMMER_DIVING_DISTANCE_INDEX];
            float divingTime = swimmersAttributes[SWIMMER_NUM_ATTRIBUTES * i + SWIMMER_DIVING_TIME_INDEX];
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
`;function Y(i,s,f=null){this.gl=i,this.damping=.02,this.areaConservationEnabled=!0,this.visualizationWavesEnabled=!0,this.sqrt_2_PI=Math.sqrt(2*Math.PI),this.spheres=[];var g=`
    varying vec2 coord;
    void main() {
      coord = gl_Vertex.xy * 0.5 + 0.5;
      gl_Position = vec4(gl_Vertex.xyz, 1.0);
    }
  `;if(this.reset(s,f),!p.Texture.canUseFloatingPointTextures())throw new Error("This demo requires the OES_texture_float extension");this.dropShader=new p.Shader(g,`
    const float PI = 3.141592653589793;
    uniform sampler2D texture;
    uniform vec2 center;
    uniform vec3 poolSize;
    uniform float radius;
    uniform float strength;
    varying vec2 coord;
    void main() {
      /* get vertex info */
      vec4 info = texture2D(texture, coord);
      
      /* add the drop to the height */
      float drop = max(0.0, 1.0 - length(center * 0.5 + 0.5 - coord) / (radius / poolSize.z));
      drop = 0.5 - cos(drop * PI) * 0.5;
      info.r += drop * strength;
      
      gl_FragColor = info;
    }
  `),this.updateShader=new p.Shader(g,`
    uniform sampler2D texture;
    uniform vec2 delta;
    uniform float wr;
    uniform float prev_wr;
    uniform float damping;
    uniform float sqrt_2_PI;
    uniform vec3 poolSize;
    varying vec2 coord;
    float gaussian(float x, float mean, float std) {
    return exp(-(x - mean) * (x - mean) / (2. * std * std)) / (std * sqrt_2_PI);
  }
  void main() {
      /* get vertex info */
      vec4 info = texture2D(texture, coord);

      /* calculate average neighbor height */
      vec2 dx = vec2(delta.x, 0.0);
      vec2 dy = vec2(0.0, delta.y);
      float average = (
      texture2D(texture, coord - dx).r +
      texture2D(texture, coord - dy).r +
      texture2D(texture, coord + dx).r +
      texture2D(texture, coord + dy).r
    ) * 0.25;

    /* change the velocity to move toward the average */
    info.g += (average - info.r) * 2.0;

    /* attenuate the velocity a little so waves do not last forever */
    info.g *= 1. - damping;/*TODO parametriser ça*/

    /* move the vertex along the velocity */
    info.r += info.g;
      

    gl_FragColor = info;
  }
  `),this.normalShader=new p.Shader(g,`
    uniform sampler2D texture;
    uniform vec2 delta;
    varying vec2 coord;
  void main() {
      /* get vertex info */
      vec4 info = texture2D(texture, coord);

      /* update the normal */
      vec3 dx = vec3(delta.x, texture2D(texture, vec2(coord.x + delta.x, coord.y)).r - info.r, 0.0);
      vec3 dy = vec3(0.0, texture2D(texture, vec2(coord.x, coord.y + delta.y)).r - info.r, delta.y);
    info.ba = normalize(cross(dy, dx)).xz;

    gl_FragColor = info;
  }
  `),this.sphereShader=new p.Shader(g,`
    uniform sampler2D texture;
    uniform vec3 oldCenter;
    uniform vec3 newCenter;
    uniform float radius;
    uniform vec3 poolSize;
    varying vec2 coord;
    
    float volumeInSphere(vec3 center) {
      vec3 toCenter = vec3(coord.x * 2.0 - 1.0, 0.0, coord.y * 2.0 - 1.0) - center;
    toCenter = vec3((coord.x - 0.5) * poolSize.x, 0.0, (coord.y - 0.5) * poolSize.z) - center;
      float t = length(toCenter) / radius;
      float dy = exp(-pow(t * 1.5, 6.0));
      float ymin = min(0.0, center.y - dy);
      float ymax = min(max(0.0, center.y + dy), ymin + 2.0 * dy);
    return (ymax - ymin) * 0.1;
  }

  void main() {
      /* get vertex info */
      vec4 info = texture2D(texture, coord);

    /* add the old volume */
    info.r += volumeInSphere(oldCenter);

    /* subtract the new volume */
    info.r -= volumeInSphere(newCenter);

    gl_FragColor = info;
  }
  `),this.visualizationWavesShader=new p.Shader(g,`
    uniform sampler2D texture;
    uniform bool add;
    uniform vec3 poolSize;
    varying vec2 coord;

    `+Se+`

    void main() {
      vec4 info = texture2D(texture, coord);
      float w = getDivingWaves(coord).x + getRecordWave(coord);
      info.r += add ? w : -w;
      gl_FragColor = info;
    }
    `)}Y.prototype.reset=function(i,s=null){this.WR_position=1e5,this.prev_WR_position=0,s!==null?(console.log("resolution.y : "+s.y),this.W=Math.round(s.x),this.H=Math.round(s.y),console.log("Using custom resolution:",this.W,this.H)):(this.W=256,this.H=256),this.plane=p.Mesh.plane({detail:255,width:i.x,height:i.z}),this.delta=new p.Vector(1/this.W,1/this.H);const f=this.gl;this.textureA&&f.deleteTexture(this.textureA.id),this.textureB&&f.deleteTexture(this.textureB.id),this.textureA=new p.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:g}),this.textureB=new p.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:g}),this.areaConservationTexture=new p.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:g}),this.showAreaConservedGrid=!1,this.showProjectionGrid=!1,this.poolSize=i;var g=p.Texture.canUseFloatingPointLinearFiltering()?this.gl.LINEAR:this.gl.NEAREST;(!this.textureA.canDrawTo()||!this.textureB.canDrawTo())&&p.Texture.canUseHalfFloatingPointTextures()&&(console.log("No draw"),g=p.Texture.canUseHalfFloatingPointLinearFiltering()?this.gl.LINEAR:this.gl.NEAREST,this.textureA=new p.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:g}),this.textureB=new p.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:g}))};Y.prototype.addDrop=function(i,s,f,g){var T=this;this.textureB.drawTo(function(){T.textureA.bind(),T.dropShader.uniforms({center:[i,s],radius:f,strength:g,poolSize:[T.poolSize.x,T.poolSize.y,T.poolSize.z]}).draw(T.plane)}),this.textureB.swapWith(this.textureA)};Y.prototype.addOrRemoveVisualizationWaves=function(i,s,f){if(!this.visualizationWavesEnabled)return;var g=this;console.log("add : "+i);const T=4,A=new Float32Array(T*s.length);for(let b=0;b<s.length;b++)A[T*b]=s[b].body.center.x,A[T*b+1]=s[b].body.center.z,A[T*b+2]=s[b].divingDistance,A[T*b+3]=s[b].divingTime;const M=this.gl;M.useProgram(this.visualizationWavesShader.program),M.uniform1fv(M.getUniformLocation(this.visualizationWavesShader.program,"swimmersAttributes"),A),this.textureB.drawTo(function(){g.textureA.bind(),g.visualizationWavesShader.uniforms({poolSize:[g.poolSize.x,g.poolSize.y,g.poolSize.z],wr:g.WR_position,sqrt_2_PI:g.sqrt_2_PI,add:i,swimmersNumber:s.length,time:f}).draw(g.plane)}),this.textureB.swapWith(this.textureA)};Y.prototype.addSwimmer=function(i){for(let s of i.spheres)this.addSphere(s)};Y.prototype.addSphere=function(i){this.spheres.push(i)};Y.prototype.updateSpheres=function(i){this.prev_WR_position=this.WR_position,this.WR_position+=i*2.4;for(let f=0;f<this.spheres.length;f++){const g=this.spheres[f];this.moveSphere(g.oldCenter,g.center,g.radius)}};Y.prototype.moveSphere=function(i,s,f){var g=this;this.textureB.drawTo(function(){g.textureA.bind(),g.sphereShader.uniforms({oldCenter:i,newCenter:s,radius:f,poolSize:[g.poolSize.x,g.poolSize.y,g.poolSize.z]}).draw(g.plane)}),this.textureB.swapWith(this.textureA)};Y.prototype.stepSimulation=function(){var i=this;this.textureB.drawTo(function(){i.textureA.bind(),i.updateShader.uniforms({delta:[i.delta.x,i.delta.y],wr:i.WR_position,prev_wr:i.prev_WR_position,poolSize:[i.poolSize.x,i.poolSize.y,i.poolSize.z],sqrt_2_PI:i.sqrt_2_PI,damping:i.damping}).draw(i.plane)}),this.textureB.swapWith(this.textureA),this.updateAreaConservation()};Y.prototype.updateNormals=function(){var i=this;this.textureB.drawTo(function(){i.textureA.bind(),i.normalShader.uniforms({delta:[i.delta.x,i.delta.y]}).draw(i.plane)}),this.textureB.swapWith(this.textureA)};Y.prototype.setAreaConservation=function(i){this.areaConservationEnabled=i};Y.prototype.updateAreaConservation=function(){if(!this.areaConservationEnabled)return;var i,s,f;if(this.textureA.type===this.gl.FLOAT)i=this.gl.FLOAT,s=Float32Array,f="WEBGL_color_buffer_float";else if(this.textureA.type===this.gl.HALF_FLOAT_OES)i=this.gl.HALF_FLOAT_OES,s=Uint16Array,f="EXT_color_buffer_half_float";else{console.warn("Unsupported texture type for reading");return}if(!this.gl.getExtension(f)){console.warn(f+" not available; cannot read pixels");return}this.fb||(this.fb=this.gl.createFramebuffer()),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.fb),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,this.textureA.id,0);const g=this.gl.checkFramebufferStatus(this.gl.FRAMEBUFFER);if(g!==this.gl.FRAMEBUFFER_COMPLETE){console.error("Framebuffer incomplete: "+g+" for texture type "+this.textureA.type),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null);return}this.gl.pixelStorei(this.gl.PACK_ALIGNMENT,1);const T=new s(this.W*this.H*4),A=new Float32Array(this.W*this.H*4);this.gl.readPixels(0,0,this.W,this.H,this.gl.RGBA,i,T);for(let O=0;O<this.W;O++)A[O*4+1]=1;const M=this.poolSize.x/this.W,b=this.poolSize.z/this.H,N=M*M,F=b*b;if(this.textureA.type===this.gl.FLOAT){for(let O=0;O<this.H;O+=1)for(let y=0;y<this.W;y+=1){const X=(O*this.W+y)*4,H=((this.H-1-O)*this.W+y)*4,L=A[H],j=A[H+1];if(y+1<this.W){const k=T[X]-T[X+4],U=Math.sqrt(k*k+N);A[H+4]=L+U}if(O+1<this.H){const k=T[X]-T[X+this.W*4],U=Math.sqrt(k*k+F);A[H-4*this.W+1]=j+U}}this.gl.bindTexture(this.gl.TEXTURE_2D,this.areaConservationTexture.id),this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT,1),this.gl.texSubImage2D(this.gl.TEXTURE_2D,0,0,0,this.W,this.H,this.gl.RGBA,this.gl.FLOAT,A)}this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.bindTexture(this.gl.TEXTURE_2D,null)};var ie=`
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
  uniform sampler2D flag;
  uniform sampler2D areaConservationTexture;
  uniform bool areaConservation;
  uniform vec2 flagCenter;
  uniform float flagSize;
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
    vec4 info = texture2D(water, coord);
    if (point.y < info.r) {
      vec4 caustic = texture2D(causticTex, 0.75 * (point.xz - point.y * refractedLight.xz / refractedLight.y) / poolSize.xz + 0.5);
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
      wallColor = texture2D(tiles, point.yz * 0.5 + vec2(1.0, 0.5)).rgb;
      normal = vec3(-point.x, 0.0, 0.0);
    } else if (abs(point.z) > poolSize.z * 0.5 - 0.01) {
      wallColor = texture2D(tiles, point.yx * 0.5 + vec2(1.0, 0.5)).rgb;
      normal = vec3(0.0, 0.0, -point.z);
    } else {
      wallColor = texture2D(tiles, point.xz * 0.5 + 0.5).rgb;
      normal = vec3(0.0, 1.0, 0.0);
    }
    
    /*scale /= length(point) * 10;*/ /* pool ambient occlusion */
    scale *= 1.0 - 0.9 / pow(length(point - sphereCenter) / sphereRadius, 4.0); /* sphere ambient occlusion */
    
    /* caustics */
    vec3 refractedLight = -refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);
    float diffuse = max(0.0, dot(refractedLight, normal));
    vec4 info = texture2D(water, point.xz / poolSize.xz + 0.5);
    if (point.y < info.r) {
      vec4 caustic = texture2D(causticTex, 0.75 * (point.xz - point.y * refractedLight.xz / refractedLight.y) / poolSize.xz + 0.5);
      scale += diffuse * caustic.r * 2.0 * caustic.g;
    } else {
      /* shadow for the rim of the pool */
      vec2 t = intersectCube(point, refractedLight, vec3(-poolSize.x / 2., -poolSize.y, -poolSize.z / 2.), vec3(poolSize.x / 2., poolSize.y, poolSize.z / 2.));
      diffuse *= 1.0 / (1.0 + exp(-200.0 / (1.0 + 10.0 * (t.y - t.x)) * (point.y + refractedLight.y * t.y - 2.0 / 12.0)));
      
      scale += diffuse * 0.5;
    }
    
    return wallColor * scale;
  }
`;function ee(i,s,f,g){this.water=s,this.gl=i,this.tileTexture=p.Texture.fromImage(document.getElementById("tiles"),{minFilter:this.gl.LINEAR_MIPMAP_LINEAR,wrap:this.gl.REPEAT,format:this.gl.RGB}),this.flagTexture=p.Texture.fromImage(document.getElementById("flag"),{minFilter:this.gl.LINEAR_MIPMAP_LINEAR,wrap:this.gl.REPEAT,format:this.gl.RGB}),this.flagSize=g,this.flagCenter=f,this.lightDir=new p.Vector(2,2,-1).unit(),this.causticTex=new p.Texture(1024,1024),this.waterShaders=[];for(var T=0;T<2;T++)this.waterShaders[T]=new p.Shader(`
      uniform sampler2D water;
      uniform vec3 poolSizeVertexShader;
      varying vec3 position;
      void main() {
        vec4 info = texture2D(water, gl_Vertex.xy / poolSizeVertexShader.xz + 0.5);
        position = gl_Vertex.xzy;
        position.y += info.r;
        gl_Position = gl_ModelViewProjectionMatrix * vec4(position, 1.0);
      }
    `,ie+`
      uniform vec3 eye;
      varying vec3 position;
      uniform bool showFlags;
      uniform samplerCube sky;
      uniform bool showProjectionGrid;
      uniform bool showAreaConservedGrid;

      `+Se+`
      
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
            color = textureCube(sky, ray).rgb;
            color += vec3(pow(max(0.0, dot(light, ray)), 5000.0)) * vec3(10.0, 8.0, 6.0);
          }
        }
        if (ray.y < 0.0) {
          color *= waterColor;
          vec2 position = origin.xz;
          if (!showFlags) return color;
          vec2 coord = position / poolSize.xz + .5;
          vec3 divingWave = getDivingWaves(coord);
          if (divingWave.z > 0.) {
            color = (1. - divingWave.y) * color + divingWave.y * vec3(0., 1., 0.);
          }
          for (int i = 0; i < 10; i++) {
            float i_float = float(i);
            if (i_float > swimmersNumber - 0.1) break;
            float swimmer_x = swimmersAttributes[SWIMMER_NUM_ATTRIBUTES*i + SWIMMER_X_INDEX];
            float swimmer_z = swimmersAttributes[SWIMMER_NUM_ATTRIBUTES*i + SWIMMER_Z_INDEX];
            vec2 flagCenterNew = vec2(swimmer_x, swimmer_z - 2.5);
            vec2 flagCorner = flagCenterNew - flagSize / 2.;
            if (showProjectionGrid && isOnConservedAreaGrid(position, 0.1)) color = vec3(1., 1., 0.); /* Debug conserved area grid */
            if (abs(origin.z + poolSize.z / 2. - wr) < .05) color = vec3(1., 1., 0.); 
            if (areaConservation) {
              vec2 coord = origin.xz / poolSize.xz + 0.5;
              position = texture2D(areaConservationTexture, coord).xy;
              flagCorner = texture2D(areaConservationTexture, flagCorner / poolSize.xz + 0.5).xy;
            }
            if (showAreaConservedGrid && isOnConservedAreaGrid(position, 0.1)) color = vec3(1., 0., 0.); /* Debug conserved area grid */
            vec2 posFlag = position - flagCorner - flagSize / 2.;/*Fixes the corner of the flag on the XZ plane*/
            if (abs(posFlag.x) <= flagSize / 2. && abs(posFlag.y) <= flagSize / 2.) {
              vec2 flagCoord = posFlag / flagSize + 0.5;
              vec3 flagColor = texture2D(flag, flagCoord).xyz;
              flagColor = flagCoord.x <= .33 ? vec3(1., 0., 0.) : flagCoord.x >= .66 ? vec3(0., 0., 1.) : vec3(1., 1., 1.);
              color += flagColor;
              color /= 2.;
            }
          }
        }
        return color;
      }
      
      void main() {
        vec2 coord = position.xz / poolSize.xz + 0.5;
        vec4 info = texture2D(water, coord);
        /* make water look more "peaked" */
        /*for (int i = 0; i < 5; i++) {
          coord += info.ba * 0.005;
          info = texture2D(water, coord);
        }*/
        
        vec3 normal = vec3(info.b, sqrt(1.0 - dot(info.ba, info.ba)), info.a);
        vec3 incomingRay = normalize(position - eye);
        
        `+(T?`
          normal = -normal;
          vec3 reflectedRay = reflect(incomingRay, normal);
          vec3 refractedRay = refract(incomingRay, normal, IOR_WATER / IOR_AIR);
          float fresnel = mix(0.5, 1.0, pow(1.0 - dot(normal, -incomingRay), 3.0));
          
          vec3 reflectedColor = getSurfaceRayColor(position, reflectedRay, underwaterColor);
          vec3 refractedColor = getSurfaceRayColor(position, refractedRay, vec3(1.0)) * vec3(0.8, 1.0, 1.1);
          
          gl_FragColor = vec4(mix(reflectedColor, refractedColor, (1.0 - fresnel) * length(refractedRay)), 1.0);
        `:`
          vec3 reflectedRay = reflect(incomingRay, normal);
          vec3 refractedRay = refract(incomingRay, normal, IOR_AIR / IOR_WATER);
          float fresnel = mix(0.25, 1.0, pow(1.0 - dot(normal, -incomingRay), 3.0));
          
          vec3 reflectedColor = getSurfaceRayColor(position, reflectedRay, abovewaterColor);
          vec3 refractedColor = getSurfaceRayColor(position, refractedRay, abovewaterColor);
          
          gl_FragColor = vec4(mix(refractedColor, reflectedColor, fresnel), 1.0);
        `)+`
      }
    `);this.sphereMesh=p.Mesh.sphere({detail:10}),this.sphereShader=new p.Shader(ie+`
    varying vec3 position;
  void main() {
    position = sphereCenter + gl_Vertex.xyz * sphereRadius;
    gl_Position = gl_ModelViewProjectionMatrix * vec4(position, 1.0);
  }
  `,ie+`
    varying vec3 position;
  void main() {
    gl_FragColor = vec4(getSphereColor(position), 1.0);
      vec4 info = texture2D(water, position.xz / poolSize.xz + 0.5);
    if (position.y < info.r) {
      gl_FragColor.rgb *= underwaterColor * 1.2;
    }
  }
  `),this.reset(),this.cubeShader=new p.Shader(ie+`
    varying vec3 position;
  void main() {
    position = gl_Vertex.xyz;
    position.y = ((1.0 - position.y) * (7.0 / 12.0) - 1.0) * poolSize.y;
    gl_Position = gl_ModelViewProjectionMatrix * vec4(position, 1.0);
  }
  `,ie+`
    varying vec3 position;
  void main() {
    gl_FragColor = vec4(getWallColor(position), 1.0);
      vec4 info = texture2D(water, position.xz / poolSize.xz + 0.5);
    if (position.y < info.r) {
      gl_FragColor.rgb *= underwaterColor * 1.2;
    }
  }
  `),this.sphereCenter=new p.Vector,this.sphereRadius=0;var A=!!this.gl.getExtension("OES_standard_derivatives");this.causticsShader=new p.Shader(ie+`
    varying vec3 oldPos;
    varying vec3 newPos;
    varying vec3 ray;

    /* project the ray onto the plane */
    vec3 project(vec3 origin, vec3 ray, vec3 refractedLight) {
      vec2 tcube = intersectCube(origin, ray, vec3(-poolSize.x / 2., -poolSize.y, -poolSize.z / 2.), vec3(poolSize.x / 2., poolSize.y, poolSize.z / 2.));
    origin += ray * tcube.y;
      float tplane = (-origin.y - 1.0) / refractedLight.y;
    return origin + refractedLight * tplane;
  }

  void main() {
      vec2 coord = gl_Vertex.xy / poolSize.xz + 0.5;
      vec4 info = texture2D(water, coord);
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
  `+ie+`
    varying vec3 oldPos;
    varying vec3 newPos;
    varying vec3 ray;

  void main() {
    `+(A?`
        /* if the triangle gets smaller, it gets brighter, and vice versa */
        float oldArea = length(dFdx(oldPos)) * length(dFdy(oldPos));
        float newArea = length(dFdx(newPos)) * length(dFdy(newPos));
    gl_FragColor = vec4(oldArea / newArea * 0.2, 1.0, 0.0, 0.0);
    `:`
    gl_FragColor = vec4(0.2, 0.2, 0.0, 0.0);
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
    gl_FragColor.g = shadow;

      /* shadow for the rim of the pool */
      vec2 t = intersectCube(newPos, -refractedLight, vec3(-poolSize.x / 2., -poolSize.y, -poolSize.z / 2.), vec3(poolSize.x / 2., poolSize.y, poolSize.z / 2.));
    gl_FragColor.r *= 1.0 / (1.0 + exp(-200.0 / (1.0 + 10.0 * (t.y - t.x)) * (newPos.y - refractedLight.y * t.y - 2.0 / 12.0)));
  }
  `)}ee.prototype.reset=function(){this.cubeMesh=p.Mesh.cube({width:this.water.poolSize.x,height:2,depth:this.water.poolSize.z}),this.cubeMesh.triangles.splice(4,2),this.cubeMesh.compile()};ee.prototype.updateCaustics=function(i){};ee.prototype.renderWater=function(i,s,f,g){var T=new p.Raytracer;if(i.textureA.bind(0),this.tileTexture.bind(1),s.bind(2),this.causticTex.bind(3),this.flagTexture.bind(4),i.areaConservationTexture.bind(5),this.gl.enable(this.gl.CULL_FACE),D.showFlags){const b=new Float32Array(4*f.length);for(let F=0;F<f.length;F++)b[4*F]=f[F].body.center.x,b[4*F+1]=f[F].body.center.z,b[4*F+2]=f[F].divingDistance,b[4*F+3]=f[F].divingTime;const N=this.gl;N.useProgram(this.waterShaders[0].program),N.uniform1fv(N.getUniformLocation(this.waterShaders[0].program,"swimmersAttributes"),b),N.useProgram(this.waterShaders[1].program),N.uniform1fv(N.getUniformLocation(this.waterShaders[1].program,"swimmersAttributes"),b)}for(var A=0;A<2;A++)this.gl.cullFace(A?this.gl.BACK:this.gl.FRONT),this.waterShaders[A].uniforms({light:this.lightDir,water:0,tiles:1,sky:2,causticTex:3,flag:4,areaConservationTexture:5,areaConservation:i.areaConservationEnabled,flagSize:this.flagSize,flagCenter:[this.flagCenter.x,this.flagCenter.y],poolSize:[i.poolSize.x,i.poolSize.y,i.poolSize.z],poolSizeVertexShader:[i.poolSize.x,i.poolSize.y,i.poolSize.z],eye:T.eye,sphereCenter:this.sphereCenter,sphereRadius:this.sphereRadius,showProjectionGrid:i.showProjectionGrid,showAreaConservedGrid:i.showAreaConservedGrid,wr:i.WR_position,swimmersNumber:f.length,showFlags:D.showFlags,time:g}).draw(i.plane);this.gl.disable(this.gl.CULL_FACE)};ee.prototype.renderSpheres=function(i){for(let s of i.spheres)this.renderSphere(i,s)};ee.prototype.renderSphere=function(i,s){i.textureA.bind(0),this.causticTex.bind(1),this.sphereShader.uniforms({light:this.lightDir,water:0,causticTex:1,sphereCenter:[s.center.x,s.center.y,s.center.z],sphereRadius:s.radius,poolSize:[i.poolSize.x,i.poolSize.y,i.poolSize.z]}).draw(s.mesh)};ee.prototype.renderSphereOld=function(i){i.textureA.bind(0),this.causticTex.bind(1),this.sphereShader.uniforms({light:this.lightDir,water:0,causticTex:1,sphereCenter:this.sphereCenter,sphereRadius:this.sphereRadius,poolSize:[i.poolSize.x,i.poolSize.y,i.poolSize.z]}).draw(this.sphereMesh)};ee.prototype.renderCube=function(i){this.gl.enable(this.gl.CULL_FACE),i.textureA.bind(0),this.tileTexture.bind(1),this.causticTex.bind(2),this.cubeShader.uniforms({light:this.lightDir,water:0,tiles:1,causticTex:2,sphereCenter:this.sphereCenter,sphereRadius:this.sphereRadius,poolSize:[i.poolSize.x,i.poolSize.y,i.poolSize.z]}).draw(this.cubeMesh),this.gl.disable(this.gl.CULL_FACE)};function Te(i,s){this.gl=s,this.id=s.createTexture(),s.bindTexture(s.TEXTURE_CUBE_MAP,this.id),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,1),s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAG_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),s.texImage2D(s.TEXTURE_CUBE_MAP_NEGATIVE_X,0,s.RGB,s.RGB,s.UNSIGNED_BYTE,i.xneg),s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X,0,s.RGB,s.RGB,s.UNSIGNED_BYTE,i.xpos),s.texImage2D(s.TEXTURE_CUBE_MAP_NEGATIVE_Y,0,s.RGB,s.RGB,s.UNSIGNED_BYTE,i.yneg),s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_Y,0,s.RGB,s.RGB,s.UNSIGNED_BYTE,i.ypos),s.texImage2D(s.TEXTURE_CUBE_MAP_NEGATIVE_Z,0,s.RGB,s.RGB,s.UNSIGNED_BYTE,i.zneg),s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_Z,0,s.RGB,s.RGB,s.UNSIGNED_BYTE,i.zpos)}Te.prototype.bind=function(i){this.gl.activeTexture(this.gl.TEXTURE0+(i||0)),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,this.id)};Te.prototype.unbind=function(i){this.gl.activeTexture(this.gl.TEXTURE0+(i||0)),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,null)};class Ne{constructor(s,f){if(this.gl=s,this.copyVideo=!1,this.show=!1,s===null){alert("Unable to initialize WebGL. Your browser or machine may not support it.");return}s.clearColor(0,0,0,1),s.clear(s.COLOR_BUFFER_BIT),this.shader=new p.Shader(`
    varying highp vec2 vTextureCoord;

    void main(void) {
        gl_Position = vec4(gl_Vertex.xz, 0., 1.);
        vTextureCoord = gl_TexCoord.st;
    }
`,`
    varying highp vec2 vTextureCoord;

    uniform sampler2D uSampler;

    void main(void) {
        highp vec4 texelColor = texture2D(uSampler, vTextureCoord);
        gl_FragColor = vec4(texelColor.rgb, 0.5);
        // gl_FragColor = vec4(1, 0, 0, 1);
    }
`),this.mesh=p.Mesh.plane({width:2,height:2,coords:!0,normals:!0}),this.mesh.transform(p.Matrix.rotate(90,1,0,0)),this.mesh.transform(p.Matrix.translate(0,.1,0)),this.programInfo=null,this.texture=this.initTexture(),this.video=this.setupVideo(f),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!0)}render(){this.show&&(this.copyVideo&&this.updateTexture(),(!this.mesh.vertexBuffers||!this.mesh.vertexBuffers.vertex)&&this.mesh.compile(),this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture),this.shader.uniforms({uSampler:0}).draw(this.mesh),this.gl.disable(this.gl.BLEND))}initTexture(){const s=this.gl.createTexture();this.gl.bindTexture(this.gl.TEXTURE_2D,s);const f=0,g=this.gl.RGBA,T=1,A=1,M=0,b=this.gl.RGBA,N=this.gl.UNSIGNED_BYTE,F=new Uint8Array([0,0,255,255]);return this.gl.texImage2D(this.gl.TEXTURE_2D,f,g,T,A,M,b,N,F),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),s}updateTexture(){const f=this.gl.RGBA,g=this.gl.RGBA,T=this.gl.UNSIGNED_BYTE;this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture),this.gl.texImage2D(this.gl.TEXTURE_2D,0,f,g,T,this.video)}setupVideo(s){const f=document.createElement("video");let g=!1,T=!1;f.playsInline=!0,f.muted=!0,f.loop=!0,f.addEventListener("playing",()=>{g=!0,M()},!0),f.addEventListener("timeupdate",()=>{T=!0,M()},!0),f.src=s,f.play();const A=this,M=()=>{g&&T&&(A.copyVideo=!0)};return f}}function Oe(i){return i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n/g,"<br>")}function Ve(i){var s=Oe(i);s=="WebGL not supported"&&(s='Your browser does not support WebGL.<br>Please see    <a href="http://www.khronos.org/webgl/wiki/Getting_a_WebGL_Implementation">    Getting a WebGL Implementation</a>.');var f=document.getElementById("loading");f.innerHTML=s,f.style.zIndex=1}window.onerror=Ve;var E=p.create(),R,be,V;const B=[],Ee=10;var ce=-25,pe=-200.5,fe=0;let ye=0,we=0;var he=4;const ze=17;let de=0,me=0;var Z=!1,xe,_e,S=new p.Vector(2,1,2);let P=new p.Vector(256,256),oe={numSteps:2,focal:45};const We=new Be;function Ce(){document.getElementById("warning").hidden=!(P.x*P.y>3e5&&R&&R.areaConservationEnabled)}function J(){console.log("reset"),document.getElementById("resolution").innerText=`Resolution: ${P.x} x ${P.y}`,Ce(),xe=new p.Vector(0,-S.z/2+1),R.reset(S,P),V.flagCenter=xe,V.flagSize=_e,V.reset();const i=S.x/Ee;let s=-S.x/2+i/2;for(let f of B)f.body.center.x=s,f.startingPoint.x=s,s+=i}window.onload=function(){var i=window.devicePixelRatio||1,s=document.getElementById("help");function f(){var n=innerWidth,l=innerHeight;E.canvas.width=n*i,E.canvas.height=l*i,E.canvas.style.width=n+"px",E.canvas.style.height=l+"px",E.viewport(0,0,E.canvas.width,E.canvas.height),E.matrixMode(E.PROJECTION),E.loadIdentity(),E.perspective(oe.focal,E.canvas.width/E.canvas.height,.01,100),E.matrixMode(E.MODELVIEW),c()}document.body.appendChild(E.canvas),E.canvas.oncontextmenu=function(n){n.preventDefault()},E.clearColor(0,0,0,1),xe=new p.Vector(0,-S.z/2+1),_e=.7,R=new Y(E,S);const g=new Ne(E,"./video.mp4"),T=document.getElementById("drop-zone");let A=0;document.addEventListener("dragenter",n=>{A++,T.style.display="flex"}),document.addEventListener("dragover",n=>{n.preventDefault(),n.dataTransfer.dropEffect="copy"}),document.addEventListener("dragleave",n=>{A--,A===0&&(T.style.display="none")}),document.addEventListener("drop",n=>{n.preventDefault(),A=0,T.style.display="none";const l=n.dataTransfer.files;if(l.length>0&&(l[0].type.startsWith("video/")||l[0].name.endsWith(".mp4"))){const u=URL.createObjectURL(l[0]);g.video.src=u,g.video.play(),console.log("Loaded:",l[0].name)}});const M=We.addFolder("variables");if(M.add(S,"x",1,25).name("pool width").onChange(function(n){J()}).listen(),M.add(S,"z",1,50).name("pool height").onChange(function(n){J()}).listen(),M.add(S,"y",1,3).name("pool depth").onChange(function(n){J()}).listen(),M.add(R,"damping",.005,.15).name("water damping").listen(),M.add(R,"areaConservationEnabled","areaConservationEnabled").name("area conservation").listen(),M.add(D,"showFlags").name("show flags").listen(),M.add(oe,"focal",28,45).name("focal").listen().onChange(function(n){E.matrixMode(E.PROJECTION),E.loadIdentity(),E.perspective(oe.focal,E.canvas.width/E.canvas.height,.01,100),E.matrixMode(E.MODELVIEW),console.log("perspective : "+oe.focal)}),V=new ee(E,R,xe,_e),be=new Te({xneg:document.getElementById("xneg"),xpos:document.getElementById("xpos"),yneg:document.getElementById("ypos"),ypos:document.getElementById("ypos"),zneg:document.getElementById("zneg"),zpos:document.getElementById("zpos")},E),!R.textureA.canDrawTo()||!R.textureB.canDrawTo())throw new Error("Rendering to floating-point textures is required but not supported");const b=new p.Vector(-.4,-.75,.2),N=new p.Vector(.4,-.75,.2),F=new D(b);new D(N);for(let n=0;n<1;n++)B.push(new D(b));const O=F.body.radius;for(let n of B)R.addSwimmer(n);J();for(var y=0;y<20;y++)R.addDrop(Math.random()*2-1,Math.random()*2-1,.06,y&1?.01:-.01);document.getElementById("loading").innerHTML="",f();var X=window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(n){setTimeout(n,0)},H=new Date().getTime();function L(){var n=new Date().getTime();Z||(a((n-H)/1e3),c()),H=n,X(L)}X(L),window.onresize=f;var j,k,U,W=-1,ae=0,$=1,se=2;const ge=3;var te,I;function K(n,l,u){if(te=n,I=l,!u||u.button===0){var d=new p.Raytracer,h=d.getRayForPixel(n*i,l*i),v=d.eye.add(h.multiply(-d.eye.y/h.y));for(let x of B){var w=p.Raytracer.hitTestSphere(d.eye,h,x.body.center,x.body.radius);if(w){W=$,U=x,x.body.cinematic=!0,j=w.hit,k=d.getRayForPixel(E.canvas.width/2,E.canvas.height/2).negative();return}}Math.abs(v.x)<S.x/2&&Math.abs(v.z)<S.z/2&&(W=ae,q(n,l))}else u.button===2?W=se:u.button===1&&(W=ge)}function q(n,l,u){switch(W){case ae:{var d=new p.Raytracer,h=d.getRayForPixel(n*i,l*i),v=d.eye.add(h.multiply(-d.eye.y/h.y));R.addDrop(v.x/S.x*2,v.z/S.z*2,.06,.03),Z&&(R.updateNormals(),V.updateCaustics(R));break}case $:{var d=new p.Raytracer,h=d.getRayForPixel(n*i,l*i),w=-k.dot(d.eye.subtract(j))/k.dot(h),x=d.eye.add(h.multiply(w));const z=U.body.center.add(x.subtract(j)),G=U.body.radius,re=Math.max(G-S.x/2,Math.min(S.x/2-G,z.x)),Ie=Math.max(G-S.y,Math.min(10,z.y)),Fe=Math.max(G-S.z/2,Math.min(S.z/2-G,z.z));U.body.move(new p.Vector(re,Ie,Fe)),j=x,Z&&V.updateCaustics(R);break}case se:{if(u&&u.shiftKey){fe-=n-te,fe=Math.max(-89.999,Math.min(89.999,fe));break}pe-=n-te,ce-=l-I,ce=Math.max(-89.999,Math.min(89.999,ce));break}case ge:{const _=.001*he;ye+=_*(n-te),we-=_*(l-I)}}te=n,I=l,Z&&c()}function le(){W=-1,U&&(U.body.cinematic=!D.useGravity)}function m(n){return n===s||n.parentNode&&m(n.parentNode)}function t(n){he*=1-n*4e-4,he=Math.max(2,Math.min(100,he)),Z&&c()}addEventListener("wheel",function(n){var l=n.deltaY;t(-l)}),document.onmousedown=function(n){m(n.target)||(n.preventDefault(),K(n.pageX,n.pageY,n))},document.onmousemove=function(n){q(n.pageX,n.pageY,n)},document.onmouseup=function(){le()},document.ontouchstart=function(n){n.touches.length===1&&!m(n.target)&&(n.preventDefault(),K(n.touches[0].pageX,n.touches[0].pageY,!1))},document.ontouchmove=function(n){n.touches.length===1&&q(n.touches[0].pageX,n.touches[0].pageY)},document.ontouchend=function(n){n.touches.length==0&&le()};function r(){D.swimming=!0;for(let n of B)n.body.cinematic=!1,D.useGravity=!0,n.body.center=new p.Vector(n.startingPoint.x,0,-S.z/2)}function e(){D.swimming=!1;for(let n of B)n.body.velocity=new p.Vector(0,0,0),n.body.center=new p.Vector(n.startingPoint.x,0,0)}function o(){D.useGravity=!0;for(let n of B)n.jump(S)}document.onkeydown=function(n){if(n.which==32)Z=!Z;else if(n.which==71){for(let l of B)l.body.cinematic=!l.body.cinematic;D.useGravity=!D.useGravity}else if(n.which==76&&Z)c();else if(n.which==74)o();else if(n.which==67)R.setAreaConservation(!R.areaConservationEnabled),Ce(),console.log("Area conservation "+(R.areaConservationEnabled?"enabled.":"disabled."));else if(n.which==80)R.showProjectionGrid=!R.showProjectionGrid,console.log("Projection grid "+(R.showProjectionGrid?"enabled.":"disabled."));else if(n.which==65)R.showAreaConservedGrid=!R.showAreaConservedGrid,console.log("Area conserved grid "+(R.showAreaConservedGrid?"enabled.":"disabled."));else if(n.which==83)D.swimming?e():r(),console.log("Swimming "+(D.swimming?"enabled.":"disabled."));else if(n.which==86)g.show=!g.show;else if(n.which==79){if(S.x=25,S.y=2,S.z=50,P.x=1024,P.y=2048,R.setAreaConservation(!1),R.damping=.1,B.length!=Ee)for(let l=B.length;l<Ee;l++){const u=new D(b);B.push(u),R.addSwimmer(u)}de=0,g.copyVideo&&(g.video.currentTime=de),J(),oe.focal=31.75,E.matrixMode(E.PROJECTION),E.loadIdentity(),E.perspective(oe.focal,E.canvas.width/E.canvas.height,.01,100),E.matrixMode(E.MODELVIEW),ye=-.42,we=1.18,he=52.5,ce=-24,pe=-261.5,fe=-4,console.log("Olympic mode enabled.")}else n.which==87?(R.WR_position=0,de=ze,g.copyVideo&&(g.video.currentTime=de),r(),o()):n.which==72?(document.getElementById("commands").hidden=!document.getElementById("commands").hidden,document.getElementById("h").hidden=!document.getElementById("h").hidden):n.which==40?(P.x>129&&(P.x=Math.round(P.x/2)),J(),console.log("decreasing x resolution")):n.which==38?(P.x<16384&&(P.x=Math.round(P.x*2)),J(),console.log("increasing x resolution")):n.which==37?(P.y>129&&(P.y=Math.round(P.y/2)),J(),console.log("decreasing y resolution")):n.which==39&&(P.y<16384&&(P.y=Math.round(P.y*2)),J(),console.log("increasing y resolution"))};function a(n,l){if(!(n>1)){if(W==$)for(let u of B)u.body.velocity=new p.Vector(0,0,0);for(let u of B)u.update(n,me,S);R.updateSpheres(n);for(let u=0;u<oe.numSteps;u++)R.stepSimulation();V.updateCaustics(R),de+=n,me=de-ze}}function c(n){p.keys.L&&(V.lightDir=p.Vector.fromAngles((90-pe)*Math.PI/180,-ce*Math.PI/180),Z&&V.updateCaustics(R)),R.addOrRemoveVisualizationWaves(!0,B,me),R.updateNormals(),E.clear(E.COLOR_BUFFER_BIT|E.DEPTH_BUFFER_BIT),E.loadIdentity(),E.translate(ye,we,-he),E.rotate(-fe,0,0,1),E.rotate(-ce,1,0,0),E.rotate(-pe,0,1,0),E.translate(0,.5,0),E.enable(E.DEPTH_TEST),V.sphereCenter=B[0].body.center,V.sphereRadius=O,V.renderCube(R),V.renderWater(R,be,B,me),V.renderSpheres(R),g.render(),E.disable(E.DEPTH_TEST),R.addOrRemoveVisualizationWaves(!1,B,me)}};
//# sourceMappingURL=swimming-DZ2SsQqQ.js.map
