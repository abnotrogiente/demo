var Ye=Object.defineProperty;var Me=i=>{throw TypeError(i)};var je=(i,o,l)=>o in i?Ye(i,o,{enumerable:!0,configurable:!0,writable:!0,value:l}):i[o]=l;var te=(i,o,l)=>je(i,typeof o!="symbol"?o+"":o,l),Ke=(i,o,l)=>o.has(i)||Me("Cannot "+l);var pe=(i,o,l)=>o.has(i)?Me("Cannot add the same private member more than once"):o instanceof WeakSet?o.add(i):o.set(i,l);var ie=(i,o,l)=>(Ke(i,o,"access private method"),l);import"./modulepreload-polyfill-B5Qt9EMX.js";import{g as Ze}from"./lil-gui.module.min-Vka56b52.js";var g=function(){var i,o={create:function(t){t=t||{};var r=document.createElement("canvas");r.width=800,r.height=600,"alpha"in t||(t.alpha=!1);try{i=r.getContext("webgl2",t)}catch{}try{i=i||r.getContext("experimental-webgl",t)}catch{}if(!i)throw new Error("WebGL not supported");return i.HALF_FLOAT_OES=36193,l(),d(),p(),U(),i},keys:{},Matrix:_,Indexer:W,Buffer:T,Mesh:E,HitTest:C,Raytracer:N,Shader:q,Texture:V,Vector:w};function l(){i.MODELVIEW=G|1,i.PROJECTION=G|2;var t=new _,r=new _;i.modelviewMatrix=new _,i.projectionMatrix=new _;var e=[],n=[],s,c;i.matrixMode=function(h){switch(h){case i.MODELVIEW:s="modelviewMatrix",c=e;break;case i.PROJECTION:s="projectionMatrix",c=n;break;default:throw new Error("invalid matrix mode "+h)}},i.loadIdentity=function(){_.identity(i[s])},i.loadMatrix=function(h){for(var u=h.m,x=i[s].m,m=0;m<16;m++)x[m]=u[m]},i.multMatrix=function(h){i.loadMatrix(_.multiply(i[s],h,r))},i.perspective=function(h,u,x,m){i.multMatrix(_.perspective(h,u,x,m,t))},i.frustum=function(h,u,x,m,f,y){i.multMatrix(_.frustum(h,u,x,m,f,y,t))},i.ortho=function(h,u,x,m,f,y){i.multMatrix(_.ortho(h,u,x,m,f,y,t))},i.scale=function(h,u,x){i.multMatrix(_.scale(h,u,x,t))},i.translate=function(h,u,x){i.multMatrix(_.translate(h,u,x,t))},i.rotate=function(h,u,x,m){i.multMatrix(_.rotate(h,u,x,m,t))},i.lookAt=function(h,u,x,m,f,y,R,b,z){i.multMatrix(_.lookAt(h,u,x,m,f,y,R,b,z,t))},i.pushMatrix=function(){c.push(Array.prototype.slice.call(i[s].m))},i.popMatrix=function(){var h=c.pop();i[s].m=D?new Float32Array(h):h},i.project=function(h,u,x,m,f,y){m=m||i.modelviewMatrix,f=f||i.projectionMatrix,y=y||i.getParameter(i.VIEWPORT);var R=f.transformPoint(m.transformPoint(new w(h,u,x)));return new w(y[0]+y[2]*(R.x*.5+.5),y[1]+y[3]*(R.y*.5+.5),R.z*.5+.5)},i.unProject=function(h,u,x,m,f,y){m=m||i.modelviewMatrix,f=f||i.projectionMatrix,y=y||i.getParameter(i.VIEWPORT);var R=new w((h-y[0])/y[2]*2-1,(u-y[1])/y[3]*2-1,x*2-1);return _.inverse(_.multiply(f,m,t),r).transformPoint(R)},i.matrixMode(i.MODELVIEW)}function d(){var t={mesh:new E({coords:!0,colors:!0,triangles:!1}),mode:-1,coord:[0,0,0,0],color:[1,1,1,1],shader:new q("      uniform float pointSize;      out vec4 color;      out vec4 coord;      void main() {        color = gl_Color;        coord = gl_TexCoord;        gl_Position = gl_ModelViewProjectionMatrix * gl_Vertex;        gl_PointSize = pointSize;      }    ","      uniform sampler2D tex;      uniform float pointSize;      uniform bool useTexture;      in vec4 color;      in vec4 coord;      out vec4 fragColor;      void main() {        fragColor = color;        if (useTexture) fragColor *= texture(tex, coord.xy);      }    ")};i.pointSize=function(r){t.shader.uniforms({pointSize:r})},i.begin=function(r){if(t.mode!=-1)throw new Error("mismatched gl.begin() and gl.end() calls");t.mode=r,t.mesh.colors=[],t.mesh.coords=[],t.mesh.vertices=[]},i.color=function(r,e,n,s){t.color=arguments.length==1?r.toArray().concat(1):[r,e,n,s||1]},i.texCoord=function(r,e){t.coord=arguments.length==1?r.toArray(2):[r,e]},i.vertex=function(r,e,n){t.mesh.colors.push(t.color),t.mesh.coords.push(t.coord),t.mesh.vertices.push(arguments.length==1?r.toArray():[r,e,n])},i.end=function(){if(t.mode==-1)throw new Error("mismatched gl.begin() and gl.end() calls");t.mesh.compile(),t.shader.uniforms({useTexture:!!i.getParameter(i.TEXTURE_BINDING_2D)}).draw(t.mesh,t.mode),t.mode=-1}}function p(){var t=i,r=0,e=0,n={},s=!1,c=Object.prototype.hasOwnProperty;function h(){for(var b in n)if(c.call(n,b)&&n[b])return!0;return!1}function u(b){var z={};for(var O in b)typeof b[O]=="function"?z[O]=function(Q){return function(){Q.apply(b,arguments)}}(b[O]):z[O]=b[O];z.original=b,z.x=z.pageX,z.y=z.pageY;for(var k=i.canvas;k;k=k.offsetParent)z.x-=k.offsetLeft,z.y-=k.offsetTop;return s?(z.deltaX=z.x-r,z.deltaY=z.y-e):(z.deltaX=0,z.deltaY=0,s=!0),r=z.x,e=z.y,z.dragging=h(),z.preventDefault=function(){z.original.preventDefault()},z.stopPropagation=function(){z.original.stopPropagation()},z}function x(b){i=t,h()||(S(document,"mousemove",m),S(document,"mouseup",f),P(i.canvas,"mousemove",m),P(i.canvas,"mouseup",f)),n[b.which]=!0,b=u(b),i.onmousedown&&i.onmousedown(b),b.preventDefault()}function m(b){i=t,b=u(b),i.onmousemove&&i.onmousemove(b),b.preventDefault()}function f(b){i=t,n[b.which]=!1,h()||(P(document,"mousemove",m),P(document,"mouseup",f),S(i.canvas,"mousemove",m),S(i.canvas,"mouseup",f)),b=u(b),i.onmouseup&&i.onmouseup(b),b.preventDefault()}function y(){s=!1}function R(){n={},s=!1}S(i.canvas,"mousedown",x),S(i.canvas,"mousemove",m),S(i.canvas,"mouseup",f),S(i.canvas,"mouseover",y),S(i.canvas,"mouseout",y),S(document,"contextmenu",R)}function v(t){var r={8:"BACKSPACE",9:"TAB",13:"ENTER",16:"SHIFT",27:"ESCAPE",32:"SPACE",37:"LEFT",38:"UP",39:"RIGHT",40:"DOWN"};return r[t]||(t>=65&&t<=90?String.fromCharCode(t):null)}function S(t,r,e){t.addEventListener(r,e)}function P(t,r,e){t.removeEventListener(r,e)}S(document,"keydown",function(t){if(!t.altKey&&!t.ctrlKey&&!t.metaKey){var r=v(t.keyCode);r&&(o.keys[r]=!0),o.keys[t.keyCode]=!0}}),S(document,"keyup",function(t){if(!t.altKey&&!t.ctrlKey&&!t.metaKey){var r=v(t.keyCode);r&&(o.keys[r]=!1),o.keys[t.keyCode]=!1}});function U(){(function(t){i.makeCurrent=function(){i=t}})(i),i.animate=function(){var t=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(s){setTimeout(s,16.666666666666668)},r=new Date().getTime(),e=i;function n(){i=e;var s=new Date().getTime();i.onupdate&&i.onupdate((s-r)/1e3),i.ondraw&&i.ondraw(),t(n),r=s}n()},i.fullscreen=function(t){t=t||{};var r=t.paddingTop||0,e=t.paddingLeft||0,n=t.paddingRight||0,s=t.paddingBottom||0;if(!document.body)throw new Error("document.body doesn't exist yet (call gl.fullscreen() from window.onload() or from inside the <body> tag)");document.body.appendChild(i.canvas),document.body.style.overflow="hidden",i.canvas.style.position="absolute",i.canvas.style.left=e+"px",i.canvas.style.top=r+"px";function c(){i.canvas.width=window.innerWidth-e-n,i.canvas.height=window.innerHeight-r-s,i.viewport(0,0,i.canvas.width,i.canvas.height),(t.camera||!("camera"in t))&&(i.matrixMode(i.PROJECTION),i.loadIdentity(),i.perspective(t.fov||45,i.canvas.width/i.canvas.height,t.near||.1,t.far||1e3),i.matrixMode(i.MODELVIEW)),i.ondraw&&i.ondraw()}S(window,"resize",c),c()}}var G=305397760,D=typeof Float32Array<"u";function _(){var t=Array.prototype.concat.apply([],arguments);t.length||(t=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),this.m=D?new Float32Array(t):t}_.prototype={inverse:function(){return _.inverse(this,new _)},transpose:function(){return _.transpose(this,new _)},multiply:function(t){return _.multiply(this,t,new _)},transformPoint:function(t){var r=this.m;return new w(r[0]*t.x+r[1]*t.y+r[2]*t.z+r[3],r[4]*t.x+r[5]*t.y+r[6]*t.z+r[7],r[8]*t.x+r[9]*t.y+r[10]*t.z+r[11]).divide(r[12]*t.x+r[13]*t.y+r[14]*t.z+r[15])},transformVector:function(t){var r=this.m;return new w(r[0]*t.x+r[1]*t.y+r[2]*t.z,r[4]*t.x+r[5]*t.y+r[6]*t.z,r[8]*t.x+r[9]*t.y+r[10]*t.z)}},_.inverse=function(t,r){r=r||new _;var e=t.m,n=r.m;n[0]=e[5]*e[10]*e[15]-e[5]*e[14]*e[11]-e[6]*e[9]*e[15]+e[6]*e[13]*e[11]+e[7]*e[9]*e[14]-e[7]*e[13]*e[10],n[1]=-e[1]*e[10]*e[15]+e[1]*e[14]*e[11]+e[2]*e[9]*e[15]-e[2]*e[13]*e[11]-e[3]*e[9]*e[14]+e[3]*e[13]*e[10],n[2]=e[1]*e[6]*e[15]-e[1]*e[14]*e[7]-e[2]*e[5]*e[15]+e[2]*e[13]*e[7]+e[3]*e[5]*e[14]-e[3]*e[13]*e[6],n[3]=-e[1]*e[6]*e[11]+e[1]*e[10]*e[7]+e[2]*e[5]*e[11]-e[2]*e[9]*e[7]-e[3]*e[5]*e[10]+e[3]*e[9]*e[6],n[4]=-e[4]*e[10]*e[15]+e[4]*e[14]*e[11]+e[6]*e[8]*e[15]-e[6]*e[12]*e[11]-e[7]*e[8]*e[14]+e[7]*e[12]*e[10],n[5]=e[0]*e[10]*e[15]-e[0]*e[14]*e[11]-e[2]*e[8]*e[15]+e[2]*e[12]*e[11]+e[3]*e[8]*e[14]-e[3]*e[12]*e[10],n[6]=-e[0]*e[6]*e[15]+e[0]*e[14]*e[7]+e[2]*e[4]*e[15]-e[2]*e[12]*e[7]-e[3]*e[4]*e[14]+e[3]*e[12]*e[6],n[7]=e[0]*e[6]*e[11]-e[0]*e[10]*e[7]-e[2]*e[4]*e[11]+e[2]*e[8]*e[7]+e[3]*e[4]*e[10]-e[3]*e[8]*e[6],n[8]=e[4]*e[9]*e[15]-e[4]*e[13]*e[11]-e[5]*e[8]*e[15]+e[5]*e[12]*e[11]+e[7]*e[8]*e[13]-e[7]*e[12]*e[9],n[9]=-e[0]*e[9]*e[15]+e[0]*e[13]*e[11]+e[1]*e[8]*e[15]-e[1]*e[12]*e[11]-e[3]*e[8]*e[13]+e[3]*e[12]*e[9],n[10]=e[0]*e[5]*e[15]-e[0]*e[13]*e[7]-e[1]*e[4]*e[15]+e[1]*e[12]*e[7]+e[3]*e[4]*e[13]-e[3]*e[12]*e[5],n[11]=-e[0]*e[5]*e[11]+e[0]*e[9]*e[7]+e[1]*e[4]*e[11]-e[1]*e[8]*e[7]-e[3]*e[4]*e[9]+e[3]*e[8]*e[5],n[12]=-e[4]*e[9]*e[14]+e[4]*e[13]*e[10]+e[5]*e[8]*e[14]-e[5]*e[12]*e[10]-e[6]*e[8]*e[13]+e[6]*e[12]*e[9],n[13]=e[0]*e[9]*e[14]-e[0]*e[13]*e[10]-e[1]*e[8]*e[14]+e[1]*e[12]*e[10]+e[2]*e[8]*e[13]-e[2]*e[12]*e[9],n[14]=-e[0]*e[5]*e[14]+e[0]*e[13]*e[6]+e[1]*e[4]*e[14]-e[1]*e[12]*e[6]-e[2]*e[4]*e[13]+e[2]*e[12]*e[5],n[15]=e[0]*e[5]*e[10]-e[0]*e[9]*e[6]-e[1]*e[4]*e[10]+e[1]*e[8]*e[6]+e[2]*e[4]*e[9]-e[2]*e[8]*e[5];for(var s=e[0]*n[0]+e[1]*n[4]+e[2]*n[8]+e[3]*n[12],c=0;c<16;c++)n[c]/=s;return r},_.transpose=function(t,r){r=r||new _;var e=t.m,n=r.m;return n[0]=e[0],n[1]=e[4],n[2]=e[8],n[3]=e[12],n[4]=e[1],n[5]=e[5],n[6]=e[9],n[7]=e[13],n[8]=e[2],n[9]=e[6],n[10]=e[10],n[11]=e[14],n[12]=e[3],n[13]=e[7],n[14]=e[11],n[15]=e[15],r},_.multiply=function(t,r,e){e=e||new _;var n=t.m,s=r.m,c=e.m;return c[0]=n[0]*s[0]+n[1]*s[4]+n[2]*s[8]+n[3]*s[12],c[1]=n[0]*s[1]+n[1]*s[5]+n[2]*s[9]+n[3]*s[13],c[2]=n[0]*s[2]+n[1]*s[6]+n[2]*s[10]+n[3]*s[14],c[3]=n[0]*s[3]+n[1]*s[7]+n[2]*s[11]+n[3]*s[15],c[4]=n[4]*s[0]+n[5]*s[4]+n[6]*s[8]+n[7]*s[12],c[5]=n[4]*s[1]+n[5]*s[5]+n[6]*s[9]+n[7]*s[13],c[6]=n[4]*s[2]+n[5]*s[6]+n[6]*s[10]+n[7]*s[14],c[7]=n[4]*s[3]+n[5]*s[7]+n[6]*s[11]+n[7]*s[15],c[8]=n[8]*s[0]+n[9]*s[4]+n[10]*s[8]+n[11]*s[12],c[9]=n[8]*s[1]+n[9]*s[5]+n[10]*s[9]+n[11]*s[13],c[10]=n[8]*s[2]+n[9]*s[6]+n[10]*s[10]+n[11]*s[14],c[11]=n[8]*s[3]+n[9]*s[7]+n[10]*s[11]+n[11]*s[15],c[12]=n[12]*s[0]+n[13]*s[4]+n[14]*s[8]+n[15]*s[12],c[13]=n[12]*s[1]+n[13]*s[5]+n[14]*s[9]+n[15]*s[13],c[14]=n[12]*s[2]+n[13]*s[6]+n[14]*s[10]+n[15]*s[14],c[15]=n[12]*s[3]+n[13]*s[7]+n[14]*s[11]+n[15]*s[15],e},_.identity=function(t){t=t||new _;var r=t.m;return r[0]=r[5]=r[10]=r[15]=1,r[1]=r[2]=r[3]=r[4]=r[6]=r[7]=r[8]=r[9]=r[11]=r[12]=r[13]=r[14]=0,t},_.perspective=function(t,r,e,n,s){var c=Math.tan(t*Math.PI/360)*e,h=c*r;return _.frustum(-h,h,-c,c,e,n,s)},_.frustum=function(t,r,e,n,s,c,h){h=h||new _;var u=h.m;return u[0]=2*s/(r-t),u[1]=0,u[2]=(r+t)/(r-t),u[3]=0,u[4]=0,u[5]=2*s/(n-e),u[6]=(n+e)/(n-e),u[7]=0,u[8]=0,u[9]=0,u[10]=-(c+s)/(c-s),u[11]=-2*c*s/(c-s),u[12]=0,u[13]=0,u[14]=-1,u[15]=0,h},_.ortho=function(t,r,e,n,s,c,h){h=h||new _;var u=h.m;return u[0]=2/(r-t),u[1]=0,u[2]=0,u[3]=-(r+t)/(r-t),u[4]=0,u[5]=2/(n-e),u[6]=0,u[7]=-(n+e)/(n-e),u[8]=0,u[9]=0,u[10]=-2/(c-s),u[11]=-(c+s)/(c-s),u[12]=0,u[13]=0,u[14]=0,u[15]=1,h},_.scale=function(t,r,e,n){n=n||new _;var s=n.m;return s[0]=t,s[1]=0,s[2]=0,s[3]=0,s[4]=0,s[5]=r,s[6]=0,s[7]=0,s[8]=0,s[9]=0,s[10]=e,s[11]=0,s[12]=0,s[13]=0,s[14]=0,s[15]=1,n},_.translate=function(t,r,e,n){n=n||new _;var s=n.m;return s[0]=1,s[1]=0,s[2]=0,s[3]=t,s[4]=0,s[5]=1,s[6]=0,s[7]=r,s[8]=0,s[9]=0,s[10]=1,s[11]=e,s[12]=0,s[13]=0,s[14]=0,s[15]=1,n},_.rotate=function(t,r,e,n,s){if(!t||!r&&!e&&!n)return _.identity(s);s=s||new _;var c=s.m,h=Math.sqrt(r*r+e*e+n*n);t*=Math.PI/180,r/=h,e/=h,n/=h;var u=Math.cos(t),x=Math.sin(t),m=1-u;return c[0]=r*r*m+u,c[1]=r*e*m-n*x,c[2]=r*n*m+e*x,c[3]=0,c[4]=e*r*m+n*x,c[5]=e*e*m+u,c[6]=e*n*m-r*x,c[7]=0,c[8]=n*r*m-e*x,c[9]=n*e*m+r*x,c[10]=n*n*m+u,c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,s},_.lookAt=function(t,r,e,n,s,c,h,u,x,m){m=m||new _;var f=m.m,y=new w(t,r,e),R=new w(n,s,c),b=new w(h,u,x),z=y.subtract(R).unit(),O=b.cross(z).unit(),k=z.cross(O).unit();return f[0]=O.x,f[1]=O.y,f[2]=O.z,f[3]=-O.dot(y),f[4]=k.x,f[5]=k.y,f[6]=k.z,f[7]=-k.dot(y),f[8]=z.x,f[9]=z.y,f[10]=z.z,f[11]=-z.dot(y),f[12]=0,f[13]=0,f[14]=0,f[15]=1,m};function W(){this.unique=[],this.indices=[],this.map={}}W.prototype={add:function(t){var r=JSON.stringify(t);return r in this.map||(this.map[r]=this.unique.length,this.unique.push(t)),this.map[r]}};function T(t,r){this.buffer=null,this.target=t,this.type=r,this.data=[]}T.prototype={compile:function(t){for(var r=[],e=0,n=1e4;e<this.data.length;e+=n)r=Array.prototype.concat.apply(r,this.data.slice(e,e+n));var s=this.data.length?r.length/this.data.length:0;if(s!=Math.round(s))throw new Error("buffer elements not of consistent size, average size is "+s);this.buffer=this.buffer||i.createBuffer(),this.buffer.length=r.length,this.buffer.spacing=s,i.bindBuffer(this.target,this.buffer),i.bufferData(this.target,new this.type(r),t||i.STATIC_DRAW)}};function E(t){t=t||{},this.vertexBuffers={},this.indexBuffers={},this.addVertexBuffer("vertices","gl_Vertex"),t.coords&&this.addVertexBuffer("coords","gl_TexCoord"),t.normals&&this.addVertexBuffer("normals","gl_Normal"),t.colors&&this.addVertexBuffer("colors","gl_Color"),(!("triangles"in t)||t.triangles)&&this.addIndexBuffer("triangles"),t.lines&&this.addIndexBuffer("lines")}E.prototype={addVertexBuffer:function(t,r){var e=this.vertexBuffers[r]=new T(i.ARRAY_BUFFER,Float32Array);e.name=t,this[t]=[]},addIndexBuffer:function(t){this.indexBuffers[t]=new T(i.ELEMENT_ARRAY_BUFFER,Uint16Array),this[t]=[]},compile:function(){for(var t in this.vertexBuffers){var r=this.vertexBuffers[t];r.data=this[r.name],r.compile()}for(var e in this.indexBuffers){var r=this.indexBuffers[e];r.data=this[e],r.compile()}},transform:function(t){if(this.vertices=this.vertices.map(function(e){return t.transformPoint(w.fromArray(e)).toArray()}),this.normals){var r=t.inverse().transpose();this.normals=this.normals.map(function(e){return r.transformVector(w.fromArray(e)).unit().toArray()})}return this.compile(),this},computeNormals:function(){this.normals||this.addVertexBuffer("normals","gl_Normal");for(var t=0;t<this.vertices.length;t++)this.normals[t]=new w;for(var t=0;t<this.triangles.length;t++){var r=this.triangles[t],e=w.fromArray(this.vertices[r[0]]),n=w.fromArray(this.vertices[r[1]]),s=w.fromArray(this.vertices[r[2]]),c=n.subtract(e).cross(s.subtract(e)).unit();this.normals[r[0]]=this.normals[r[0]].add(c),this.normals[r[1]]=this.normals[r[1]].add(c),this.normals[r[2]]=this.normals[r[2]].add(c)}for(var t=0;t<this.vertices.length;t++)this.normals[t]=this.normals[t].unit().toArray();return this.compile(),this},computeWireframe:function(){for(var t=new W,r=0;r<this.triangles.length;r++)for(var e=this.triangles[r],n=0;n<e.length;n++){var s=e[n],c=e[(n+1)%e.length];t.add([Math.min(s,c),Math.max(s,c)])}return this.lines||this.addIndexBuffer("lines"),this.lines=t.unique,this.compile(),this},getAABB:function(){var t={min:new w(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)};t.max=t.min.negative();for(var r=0;r<this.vertices.length;r++){var e=w.fromArray(this.vertices[r]);t.min=w.min(t.min,e),t.max=w.max(t.max,e)}return t},getBoundingSphere:function(){for(var t=this.getAABB(),r={center:t.min.add(t.max).divide(2),radius:0},e=0;e<this.vertices.length;e++)r.radius=Math.max(r.radius,w.fromArray(this.vertices[e]).subtract(r.center).length());return r}},E.plane=function(t){t=t||{};for(var r=new E(t),e=t.detailX||t.detail||1,n=t.detailY||t.detail||1,s=t.width||2,c=t.height||2,h=0;h<=n;h++)for(var u=h/n,x=0;x<=e;x++){var m=x/e;if(r.vertices.push([(m-.5)*s,(u-.5)*c,0]),r.coords&&r.coords.push([m,u]),r.normals&&r.normals.push([0,0,1]),x<e&&h<n){var f=x+h*(e+1);r.triangles.push([f,f+1,f+e+1]),r.triangles.push([f+e+1,f+1,f+e+2])}}return r.compile(),r};var M=[[0,4,2,6,-1,0,0],[1,3,5,7,1,0,0],[0,1,4,5,0,-1,0],[2,6,3,7,0,1,0],[0,2,1,3,0,0,-1],[4,5,6,7,0,0,1]];function L(t){return new w((t&1)*2-1,(t&2)-1,(t&4)/2-1)}E.cube=function(t){for(var r=new E(t),e=t&&t.width||2,n=t&&t.height||2,s=t&&t.depth||2,c=0;c<M.length;c++){for(var h=M[c],u=c*4,x=0;x<4;x++){var m=h[x];const f=L(m).toArray();f[0]*=e/2,f[1]*=n/2,f[2]*=s/2,r.vertices.push(f),r.coords&&r.coords.push([x&1,(x&2)/2]),r.normals&&r.normals.push(h.slice(4,7))}r.triangles.push([u,u+1,u+2]),r.triangles.push([u+2,u+1,u+3])}return r.compile(),r},E.sphere=function(t){function r(k,Q,Z){return x?[k,Z,Q]:[k,Q,Z]}function e(k){return k+(k-k*k)/2}t=t||{};for(var n=new E(t),s=new W,c=t.detail||6,h=0;h<8;h++)for(var u=L(h),x=u.x*u.y*u.z>0,m=[],f=0;f<=c;f++){for(var y=0;f+y<=c;y++){var R=f/c,b=y/c,z=(c-f-y)/c,O={vertex:new w(e(R),e(b),e(z)).unit().multiply(u).toArray()};n.coords&&(O.coord=u.y>0?[1-R,z]:[z,1-R]),m.push(s.add(O))}if(f>0)for(var y=0;f+y<=c;y++){var R=(f-1)*(c+1)+(f-1-(f-1)*(f-1))/2+y,b=f*(c+1)+(f-f*f)/2+y;n.triangles.push(r(m[R],m[R+1],m[b])),f+y<c&&n.triangles.push(r(m[b],m[R+1],m[b+1]))}}return n.vertices=s.unique.map(function(k){return k.vertex}),n.coords&&(n.coords=s.unique.map(function(k){return k.coord})),n.normals&&(n.normals=n.vertices),n.compile(),n},E.load=function(t,r){r=r||{},"coords"in r||(r.coords=!!t.coords),"normals"in r||(r.normals=!!t.normals),"colors"in r||(r.colors=!!t.colors),"triangles"in r||(r.triangles=!!t.triangles),"lines"in r||(r.lines=!!t.lines);var e=new E(r);return e.vertices=t.vertices,e.coords&&(e.coords=t.coords),e.normals&&(e.normals=t.normals),e.colors&&(e.colors=t.colors),e.triangles&&(e.triangles=t.triangles),e.lines&&(e.lines=t.lines),e.compile(),e};function C(t,r,e){this.t=arguments.length?t:Number.MAX_VALUE,this.hit=r,this.normal=e}C.prototype={mergeWith:function(t){t.t>0&&t.t<this.t&&(this.t=t.t,this.hit=t.hit,this.normal=t.normal)}};function N(){var t=i.getParameter(i.VIEWPORT),r=i.modelviewMatrix.m,e=new w(r[0],r[4],r[8]),n=new w(r[1],r[5],r[9]),s=new w(r[2],r[6],r[10]),c=new w(r[3],r[7],r[11]);this.eye=new w(-c.dot(e),-c.dot(n),-c.dot(s));var h=t[0],u=h+t[2],x=t[1],m=x+t[3];this.ray00=i.unProject(h,x,1).subtract(this.eye),this.ray10=i.unProject(u,x,1).subtract(this.eye),this.ray01=i.unProject(h,m,1).subtract(this.eye),this.ray11=i.unProject(u,m,1).subtract(this.eye),this.viewport=t}N.prototype={getRayForPixel:function(t,r){t=(t-this.viewport[0])/this.viewport[2],r=1-(r-this.viewport[1])/this.viewport[3];var e=w.lerp(this.ray00,this.ray10,t),n=w.lerp(this.ray01,this.ray11,t);return w.lerp(e,n,r).unit()}},N.hitTestBox=function(t,r,e,n){var s=e.subtract(t).divide(r),c=n.subtract(t).divide(r),h=w.min(s,c),u=w.max(s,c),x=h.max(),m=u.min();if(x>0&&x<m){var f=1e-6,y=t.add(r.multiply(x));return e=e.add(f),n=n.subtract(f),new C(x,y,new w((y.x>n.x)-(y.x<e.x),(y.y>n.y)-(y.y<e.y),(y.z>n.z)-(y.z<e.z)))}return null},N.hitTestSphere=function(t,r,e,n){var s=t.subtract(e),c=r.dot(r),h=2*r.dot(s),u=s.dot(s)-n*n,x=h*h-4*c*u;if(x>0){var m=(-h-Math.sqrt(x))/(2*c),f=t.add(r.multiply(m));return new C(m,f,f.subtract(e).divide(n))}return null},N.hitTestTriangle=function(t,r,e,n,s){var c=n.subtract(e),h=s.subtract(e),u=c.cross(h).unit(),x=u.dot(e.subtract(t))/u.dot(r);if(x>0){var m=t.add(r.multiply(x)),f=m.subtract(e),y=h.dot(h),R=h.dot(c),b=h.dot(f),z=c.dot(c),O=c.dot(f),k=y*z-R*R,Q=(z*b-R*O)/k,Z=(y*O-R*b)/k;if(Q>=0&&Z>=0&&Q+Z<=1)return new C(x,m,u)}return null};function I(t,r,e){let n;for(;(n=t.exec(r))!=null;)e(n)}var A="LIGHTGL";function q(t,r){function e(y){var R=document.getElementById(y);return R?R.text:y}t=e(t),r=e(r);var n="    uniform mat3 gl_NormalMatrix;    uniform mat4 gl_ModelViewMatrix;    uniform mat4 gl_ProjectionMatrix;    uniform mat4 gl_ModelViewProjectionMatrix;    uniform mat4 gl_ModelViewMatrixInverse;    uniform mat4 gl_ProjectionMatrixInverse;    uniform mat4 gl_ModelViewProjectionMatrixInverse;  ",s=`#version 300 es
    `+n+"    in vec4 gl_Vertex;    in vec4 gl_TexCoord;    in vec3 gl_Normal;    in vec4 gl_Color;    vec4 ftransform() {      return gl_ModelViewProjectionMatrix * gl_Vertex;    }  ",c=`#version 300 es
    precision highp float;
  `+n,h=t+r,u={};I(/\b(gl_[^;]*)\b;/g,n,function(y){var R=y[1];if(h.indexOf(R)!=-1){var b=R.replace(/[a-z_]/g,"");u[b]=A+R}}),h.indexOf("ftransform")!=-1&&(u.MVPM=A+"gl_ModelViewProjectionMatrix"),this.usedMatrices=u;function x(y,R){var b={},z=/^((\s*\/\/.*\n|\s*#extension.*\n)+)[^]*$/.exec(R);return R=z?z[1]+y+R.substr(z[1].length):y+R,I(/\bgl_\w+\b/g,y,function(O){O in b||(R=R.replace(new RegExp("\\b"+O+"\\b","g"),A+O),b[O]=!0)}),R}t=x(s,t),r=x(c,r);function m(y,R){var b=i.createShader(y);if(i.shaderSource(b,R),i.compileShader(b),!i.getShaderParameter(b,i.COMPILE_STATUS))throw new Error("compile error: "+i.getShaderInfoLog(b));return b}if(this.program=i.createProgram(),i.attachShader(this.program,m(i.VERTEX_SHADER,t)),i.attachShader(this.program,m(i.FRAGMENT_SHADER,r)),i.linkProgram(this.program),!i.getProgramParameter(this.program,i.LINK_STATUS))throw new Error("link error: "+i.getProgramInfoLog(this.program));this.attributes={},this.uniformLocations={};var f={};I(/uniform\s+sampler(1D|2D|3D|Cube)\s+(\w+)\s*;/g,t+r,function(y){f[y[2]]=1}),this.isSampler=f}function j(t){var r=Object.prototype.toString.call(t);return r=="[object Array]"||r=="[object Float32Array]"}function Y(t){var r=Object.prototype.toString.call(t);return r=="[object Number]"||r=="[object Boolean]"}new _,new _,q.prototype={uniforms:function(t){i.useProgram(this.program);for(var r in t){var e=this.uniformLocations[r]||i.getUniformLocation(this.program,r);if(e){this.uniformLocations[r]=e;var n=t[r];if(n instanceof w?n=[n.x,n.y,n.z]:n instanceof _&&(n=n.m),j(n))switch(n.length){case 1:i.uniform1fv(e,new Float32Array(n));break;case 2:i.uniform2fv(e,new Float32Array(n));break;case 3:i.uniform3fv(e,new Float32Array(n));break;case 4:i.uniform4fv(e,new Float32Array(n));break;case 9:i.uniformMatrix3fv(e,!1,new Float32Array([n[0],n[3],n[6],n[1],n[4],n[7],n[2],n[5],n[8]]));break;case 16:i.uniformMatrix4fv(e,!1,new Float32Array([n[0],n[4],n[8],n[12],n[1],n[5],n[9],n[13],n[2],n[6],n[10],n[14],n[3],n[7],n[11],n[15]]));break;default:throw new Error(`don't know how to load uniform "`+r+'" of length '+n.length)}else if(Y(n))(this.isSampler[r]?i.uniform1i:i.uniform1f).call(i,e,n);else throw new Error('attempted to set uniform "'+r+'" to invalid value '+n)}}return this},draw:function(t,r){this.drawBuffers(t.vertexBuffers,t.indexBuffers[r==i.LINES?"lines":"triangles"],arguments.length<2?i.TRIANGLES:r)},drawBuffers:function(t,r,e){var n=this.usedMatrices,s=i.modelviewMatrix,c=i.projectionMatrix,h=n.MVMI||n.NM?s.inverse():null,u=n.PMI?c.inverse():null,x=n.MVPM||n.MVPMI?c.multiply(s):null,m={};if(n.MVM&&(m[n.MVM]=s),n.MVMI&&(m[n.MVMI]=h),n.PM&&(m[n.PM]=c),n.PMI&&(m[n.PMI]=u),n.MVPM&&(m[n.MVPM]=x),n.MVPMI&&(m[n.MVPMI]=x.inverse()),n.NM){var f=h.m;m[n.NM]=[f[0],f[4],f[8],f[1],f[5],f[9],f[2],f[6],f[10]]}this.uniforms(m);var y=0;for(var R in t){var b=t[R],z=this.attributes[R]||i.getAttribLocation(this.program,R.replace(/^(gl_.*)$/,A+"$1"));z==-1||!b.buffer||(this.attributes[R]=z,i.bindBuffer(i.ARRAY_BUFFER,b.buffer),i.enableVertexAttribArray(z),i.vertexAttribPointer(z,b.buffer.spacing,i.FLOAT,!1,0,0),y=b.buffer.length/b.buffer.spacing)}for(var R in this.attributes)R in t||i.disableVertexAttribArray(this.attributes[R]);return y&&(!r||r.buffer)&&(r?(i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,r.buffer),i.drawElements(e,r.buffer.length,i.UNSIGNED_SHORT,0)):i.drawArrays(e,0,y)),this}};function V(t,r,e){e=e||{},this.width=t,this.height=r,this.id=i.createTexture();let n=e.type||i.UNSIGNED_BYTE,s=e.format||i.RGBA,c=i.RGBA;const h=i.getExtension("EXT_color_buffer_float"),u=i.getExtension("EXT_color_buffer_half_float");n===i.FLOAT?(h?i instanceof WebGL2RenderingContext&&(s=i.RGBA32F):(console.warn("FLOAT textures not renderable, falling back to UNSIGNED_BYTE"),n=i.UNSIGNED_BYTE,s=i.RGBA8),c=i.RGBA):n===i.HALF_FLOAT_OES?(u?i instanceof WebGL2RenderingContext&&(s=i.RGBA16F):(console.warn("HALF_FLOAT textures not renderable, falling back to UNSIGNED_BYTE"),n=i.UNSIGNED_BYTE,s=i.RGBA8),c=i.RGBA):(n=i.UNSIGNED_BYTE,s=i.RGBA8,c=i.RGBA);const x=e.filter||e.magFilter||i.LINEAR,m=e.filter||e.minFilter||i.LINEAR;i.bindTexture(i.TEXTURE_2D,this.id),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,1),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,x),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,m),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,e.wrap||e.wrapS||i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,e.wrap||e.wrapT||i.CLAMP_TO_EDGE),i instanceof WebGL2RenderingContext?i.texImage2D(i.TEXTURE_2D,0,s,t,r,0,c,n,null):i.texImage2D(i.TEXTURE_2D,0,c,t,r,0,c,n,null),i.bindTexture(i.TEXTURE_2D,null),this.format=c,this.type=n,this.internalFormat=s}var J,H,K;V.prototype={bind:function(t){i.activeTexture(i.TEXTURE0+(t||0)),i.bindTexture(i.TEXTURE_2D,this.id)},unbind:function(t){i.activeTexture(i.TEXTURE0+(t||0)),i.bindTexture(i.TEXTURE_2D,null)},canDrawTo:function(){J=J||i.createFramebuffer(),i.bindFramebuffer(i.FRAMEBUFFER,J),i.framebufferTexture2D(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,this.id,0);var t=i.checkFramebufferStatus(i.FRAMEBUFFER)==i.FRAMEBUFFER_COMPLETE;return i.bindFramebuffer(i.FRAMEBUFFER,null),t},drawTo:function(t){i.getExtension("EXT_color_buffer_float")||console.warn("EXT_color_buffer_float not available!");var e=i.getParameter(i.VIEWPORT);if(J=J||i.createFramebuffer(),H=H||i.createRenderbuffer(),i.bindFramebuffer(i.FRAMEBUFFER,J),i.bindRenderbuffer(i.RENDERBUFFER,H),(this.width!=H.width||this.height!=H.height)&&(H.width=this.width,H.height=this.height,i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_COMPONENT16,this.width,this.height)),i.framebufferTexture2D(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,this.id,0),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,H),i.checkFramebufferStatus(i.FRAMEBUFFER)!=i.FRAMEBUFFER_COMPLETE)throw new Error("Rendering to this texture is not supported (incomplete framebuffer)");i.viewport(0,0,this.width,this.height),t(),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindRenderbuffer(i.RENDERBUFFER,null),i.viewport(e[0],e[1],e[2],e[3])},swapWith:function(t){var r;r=t.id,t.id=this.id,this.id=r,r=t.width,t.width=this.width,this.width=r,r=t.height,t.height=this.height,this.height=r}},V.fromImage=function(t,r){r=r||{};var e=new V(t.width,t.height,r);i.bindTexture(i.TEXTURE_2D,e.id);try{i.texImage2D(i.TEXTURE_2D,0,e.format,e.format,e.type,t)}catch{throw location.protocol=="file:"?new Error('image not loaded for security reasons (serve this page over "http://" instead)'):new Error("image not loaded for security reasons (image must originate from the same domain as this page or use Cross-Origin Resource Sharing)")}return r.minFilter&&r.minFilter!=i.NEAREST&&r.minFilter!=i.LINEAR&&i.generateMipmap(i.TEXTURE_2D),i.bindTexture(i.TEXTURE_2D,null),e},V.fromURL=function(t,r){K=K||function(){var c=document.createElement("canvas").getContext("2d");c.canvas.width=c.canvas.height=128;for(var h=0;h<c.canvas.height;h+=16)for(var u=0;u<c.canvas.width;u+=16)c.fillStyle=(u^h)&16?"#FFF":"#DDD",c.fillRect(u,h,16,16);return c.canvas}();var e=V.fromImage(K,r),n=new Image,s=i;return n.onload=function(){s.makeCurrent(),V.fromImage(n,r).swapWith(e)},n.src=t,e},V.canUseFloatingPointTextures=function(){return!!i.getExtension("OES_texture_float")},V.canUseFloatingPointLinearFiltering=function(){return!!i.getExtension("OES_texture_float_linear")},V.canUseHalfFloatingPointTextures=function(){return!!i.getExtension("OES_texture_half_float")},V.canUseHalfFloatingPointLinearFiltering=function(){return!!i.getExtension("OES_texture_half_float_linear")};function w(t,r,e){this.x=t||0,this.y=r||0,this.z=e||0}return w.prototype={negative:function(){return new w(-this.x,-this.y,-this.z)},add:function(t){return t instanceof w?new w(this.x+t.x,this.y+t.y,this.z+t.z):new w(this.x+t,this.y+t,this.z+t)},subtract:function(t){return t instanceof w?new w(this.x-t.x,this.y-t.y,this.z-t.z):new w(this.x-t,this.y-t,this.z-t)},multiply:function(t){return t instanceof w?new w(this.x*t.x,this.y*t.y,this.z*t.z):new w(this.x*t,this.y*t,this.z*t)},divide:function(t){return t instanceof w?new w(this.x/t.x,this.y/t.y,this.z/t.z):new w(this.x/t,this.y/t,this.z/t)},equals:function(t){return this.x==t.x&&this.y==t.y&&this.z==t.z},dot:function(t){return this.x*t.x+this.y*t.y+this.z*t.z},cross:function(t){return new w(this.y*t.z-this.z*t.y,this.z*t.x-this.x*t.z,this.x*t.y-this.y*t.x)},length:function(){return Math.sqrt(this.dot(this))},unit:function(){return this.divide(this.length())},min:function(){return Math.min(Math.min(this.x,this.y),this.z)},max:function(){return Math.max(Math.max(this.x,this.y),this.z)},toAngles:function(){return{theta:Math.atan2(this.z,this.x),phi:Math.asin(this.y/this.length())}},angleTo:function(t){return Math.acos(this.dot(t)/(this.length()*t.length()))},toArray:function(t){return[this.x,this.y,this.z].slice(0,t||3)},clone:function(){return new w(this.x,this.y,this.z)},init:function(t,r,e){return this.x=t,this.y=r,this.z=e,this}},w.negative=function(t,r){return r.x=-t.x,r.y=-t.y,r.z=-t.z,r},w.add=function(t,r,e){return r instanceof w?(e.x=t.x+r.x,e.y=t.y+r.y,e.z=t.z+r.z):(e.x=t.x+r,e.y=t.y+r,e.z=t.z+r),e},w.subtract=function(t,r,e){return r instanceof w?(e.x=t.x-r.x,e.y=t.y-r.y,e.z=t.z-r.z):(e.x=t.x-r,e.y=t.y-r,e.z=t.z-r),e},w.multiply=function(t,r,e){return r instanceof w?(e.x=t.x*r.x,e.y=t.y*r.y,e.z=t.z*r.z):(e.x=t.x*r,e.y=t.y*r,e.z=t.z*r),e},w.divide=function(t,r,e){return r instanceof w?(e.x=t.x/r.x,e.y=t.y/r.y,e.z=t.z/r.z):(e.x=t.x/r,e.y=t.y/r,e.z=t.z/r),e},w.cross=function(t,r,e){return e.x=t.y*r.z-t.z*r.y,e.y=t.z*r.x-t.x*r.z,e.z=t.x*r.y-t.y*r.x,e},w.unit=function(t,r){var e=t.length();return r.x=t.x/e,r.y=t.y/e,r.z=t.z/e,r},w.fromAngles=function(t,r){return new w(Math.cos(t)*Math.cos(r),Math.sin(r),Math.sin(t)*Math.cos(r))},w.randomDirection=function(){return w.fromAngles(Math.random()*Math.PI*2,Math.asin(Math.random()*2-1))},w.min=function(t,r){return new w(Math.min(t.x,r.x),Math.min(t.y,r.y),Math.min(t.z,r.z))},w.max=function(t,r){return new w(Math.max(t.x,r.x),Math.max(t.y,r.y),Math.max(t.z,r.z))},w.lerp=function(t,r,e){return r.subtract(t).multiply(e).add(t)},w.fromArray=function(t){return new w(t[0],t[1],t[2])},w.angleBetween=function(t,r){return t.angleTo(r)},o}();class ye{constructor({tx:o=0,ty:l=0,zoom:d=4,ax:p=-25,ay:v=-200,az:S=0,fov:P=45}){this.tx=o,this.ty=l,this.zoom=d,this.ax=p,this.ay=v,this.az=S,this.fov=P}}const ze=.3,Ae=.15,Ce=1,$e=10,Ne=Math.ceil($e/4),Oe=10,ge=`
    uniform float wr;
    #define sqrt_2_PI 2.50662827
    #define PI 3.1415926536
    uniform sampler2D swimmersAttributesTexture;
    const int SWIMMERS_NUM_ATTRIBUTES = 4;
    const vec2 TEXTURE_SIZE = vec2(`+Ne+", "+Oe+`);
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
`,Ue=200,Je=`
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
#define MAX_SPARKS `+Ue+`
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

`;var xe,Ve;class _e{constructor(o,l,d,p){pe(this,xe);if(this.gl=o,this.calibration=d,this.copyVideo=!1,this.show=!1,this.videoStartTime=p,o===null){alert("Unable to initialize WebGL. Your browser or machine may not support it.");return}o.clearColor(0,0,0,1),o.clear(o.COLOR_BUFFER_BIT),this.shader=new g.Shader(`
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

    `+Je+ge+`

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
`),this.mesh=g.Mesh.plane({width:2,height:2,coords:!0,normals:!0}),this.mesh.transform(g.Matrix.rotate(90,1,0,0)),this.mesh.transform(g.Matrix.translate(0,.1,0)),this.programInfo=null,this.texture=this.initTexture(),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!0),l!=""&&(this.video=this.setupVideo(l))}render(){const o=a.params.visualizations.sparks,l=a.params.simulation.poolSize;if(!a.params.video.show)return;this.copyVideo&&this.updateTexture(),(!this.mesh.vertexBuffers||!this.mesh.vertexBuffers.vertex)&&this.mesh.compile(),this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture);const d=this.gl.canvas.height,p=16*d/9,v=(this.gl.canvas.width-p)/2;this.gl.viewport(v,0,p,d),B.swimmersAttributesTexture&&B.swimmersAttributesTexture.bind(1),this.shader.uniforms({uSampler:0,swimmersHelperFunctions:1,iTime:a.getRaceTime(),poolSize:[l.x,l.y,l.z],iResolution:[this.gl.canvas.width,this.gl.canvas.height],sparksEnabled:o.enabled,sparksGlow:o.glow,sparksGlowOffset:o.glowOffset,sparksStroke:o.stroke,sparksNumber:o.num,sparksLengthFactor:o.lengthFactor,sparksSizeFactor:o.sizeFactor,fov:o.fov,thresholdBlending:a.params.video.thresholdBlending,blendingThreshold:a.params.video.blendingThreshold}).draw(this.mesh),this.gl.disable(this.gl.BLEND),this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height)}setTime(o){this.copyVideo&&(this.video.currentTime=o)}initTexture(){const o=this.gl.createTexture();this.gl.bindTexture(this.gl.TEXTURE_2D,o);const l=0,d=this.gl.RGBA,p=1,v=1,S=0,P=this.gl.RGBA,U=this.gl.UNSIGNED_BYTE,G=new Uint8Array([0,0,255,255]);return this.gl.texImage2D(this.gl.TEXTURE_2D,l,d,p,v,S,P,U,G),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),o}updateTexture(){const l=this.gl.RGBA,d=this.gl.RGBA,p=this.gl.UNSIGNED_BYTE;this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture),this.gl.texImage2D(this.gl.TEXTURE_2D,0,l,d,p,this.video)}setupVideo(o){const l=document.createElement("video");let d=!1,p=!1;l.playsInline=!0,l.muted=!0,l.loop=!1,l.addEventListener("playing",()=>{d=!0,S()},!0),l.addEventListener("timeupdate",()=>{p=!0,S()},!0),l.src=o,l.play();const v=this,S=()=>{d&&p&&(v.copyVideo=!0,l.paused||ie(this,xe,Ve).call(this))};return l}}xe=new WeakSet,Ve=function(){this.hasPausedFirstTime||(this.hasPausedFirstTime=!0,this.video.pause())};class Ee{constructor(o,{poolSize:l=new GL.Vector(2,2),waterResolution:d=new GL.Vector(256,256),thresholdBlending:p=!1,numSwimmers:v=1,dataFolder:S=null}){this.title=o,this.videos=[],this.poolSize=l,this.waterResolution=d,this.numSwimmers=v,this.thresholdBlending=p,this.dataFolder=S}addVideo(o){this.videos.push(o)}parseData(o){for(let l=0;l<o.length;l++)o[l].parseData(this.dataFolder+l+".csv")}}const De=new g.Vector(0,-4,0);class me{constructor(o,l){this.initCenter=new g.Vector(o.x,o.y,o.z),this.center=new g.Vector(o.x,o.y,o.z),this.oldCenter=new g.Vector(o.x,o.y,o.z),this.radius=l,this.cinematic=!1,this.velocity=new g.Vector(0,0,0),this.acceleration=new g.Vector(0,0,0),this.mass=4/3*Math.PI*Math.pow(l,3)*1e3,this.invMass=1/this.mass,this.radiusSquared=l*l,this.mesh=g.Mesh.sphere({detail:10}),this.followTarget=!1}update(o){if(this.moved||(this.oldCenter=new g.Vector(this.center.x,this.center.y,this.center.z)),this.moved=!1,this.cinematic){if(this.followTarget||(this.velocity=new g.Vector(0,0,0)),!this.targetPos||!this.followTarget)return;let l=o/this.targetTime;l=Math.min(Math.max(l,0),1),this.center=this.center.multiply(1-l).add(this.targetPos.multiply(l)),this.velocity=this.center.subtract(this.oldCenter).multiply(1/o),this.targetTime-=o,this.targetTime<0&&(this.targetPos=null)}else{const l=Math.max(0,Math.min(1,(this.radius-this.center.y)/(2*this.radius))),d=De.multiply(-1.1*this.mass*l),p=this.velocity.unit().multiply(-1e3*this.radiusSquared*l*this.velocity.dot(this.velocity));this.addForce(p),this.addForce(d),this.addForce(De.multiply(this.mass)),this.velocity=this.velocity.add(this.acceleration.multiply(o)),this.acceleration=new g.Vector(0,0,0),this.center=this.center.add(this.velocity.multiply(o)),this.center.y<this.radius-a.params.simulation.poolSize.y&&(this.center.y=this.radius-1,this.velocity.y=Math.abs(this.velocity.y)*.7)}}setTarget(o,l){this.targetPos=o,this.targetTime=l}addForce(o){this.cinematic?console.warn("Trying to add force to a cinematic sphere."):this.acceleration=this.acceleration.add(o.multiply(this.invMass))}move(o){this.moved=!0,this.oldCenter=new g.Vector(this.center.x,this.center.y,this.center.z),this.center=new g.Vector(o.x,o.y,o.z),this.cinematic||console.warn("Moving a non cinematic sphere.")}}function re(i,o=null){this.gl=i,this.visualizationWavesEnabled=!0,this.sqrt_2_PI=Math.sqrt(2*Math.PI);var l=`
    out vec2 coord;
    uniform vec2 invPoolSizeVertex;
    void main() {
      coord = gl_Vertex.xy * invPoolSizeVertex + 0.5;
      gl_Position = vec4(gl_Vertex.xy * 2. * invPoolSizeVertex, 0., 1.0);
    }
  `;this.reset(o),g.Texture.canUseFloatingPointTextures(),this.dropShader=new g.Shader(l,`
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
    uniform float prev_wr;
    uniform float damping;
    uniform float sqrt_2_PI;
    uniform vec3 poolSize;
    `+ge+`
    in vec2 coord;
    out vec4 fragColor;

    // float rand(vec2 co){
    //   return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453);
    // }
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

    // float h = rand(coord + vec2(time,0.)) - .5;
    float h = perlin(coord, 200., 0. * time / 10000.);
    h *= .01;
    // info.r += h;
      

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
  `),this.visualizationWavesShader=new g.Shader(l,`
    uniform sampler2D tex;
    uniform bool add;
    uniform vec3 poolSize;
    uniform bool showWR;
    uniform bool showDivingDistance;
    in vec2 coord;
    out vec4 fragColor;
    uniform float t;

    `+ge+`

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
        // kx = 0.;
        float ky = rand(vec2(seed, -seed));
        float omega = rand(vec2(-seed, seed));
        vec2 k = normalize(vec2(kx, ky));
        k *= waveLength0 * pow(frequencyFactor, i_float);
        // k = vec2(1., 0.);
        omega = omega0 * (omega - .5) * pow(frequencyFactor, i_float);
        float s = sin(dot(k, pos) + omega * t) * amplitude * pow(amplitudeFactor, i_float);
        y += exp(s - 1.0) - .37;
        // y += s;
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
    `)}re.prototype.resetTextures=function(){const i=this.gl;this.textureA&&i.deleteTexture(this.textureA.id),this.textureB&&i.deleteTexture(this.textureB.id),this.textureA=new g.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:o}),this.textureB=new g.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:o}),this.areaConservationTexture=new g.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:o}),this.showAreaConservedGrid=!1,this.showProjectionGrid=!1,this.invPoolSize=new g.Vector(1/a.params.simulation.poolSize.x,1/a.params.simulation.poolSize.y,1/a.params.simulation.poolSize.z);var o=g.Texture.canUseFloatingPointLinearFiltering()?this.gl.LINEAR:this.gl.NEAREST;(!this.textureA.canDrawTo()||!this.textureB.canDrawTo())&&g.Texture.canUseHalfFloatingPointTextures()&&(console.log("No draw"),o=g.Texture.canUseHalfFloatingPointLinearFiltering()?this.gl.LINEAR:this.gl.NEAREST,this.textureA=new g.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:o}),this.textureB=new g.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:o}))};re.prototype.reset=function(i=null){this.WR_position=1e5,this.prev_WR_position=0,i!==null?(console.log("resolution.y : "+i.y),this.W=Math.round(i.x),this.H=Math.round(i.y),console.log("Using custom resolution:",this.W,this.H)):(this.W=256,this.H=256),B.reset(new g.Vector(this.W,this.H)),this.plane=g.Mesh.plane({detail:255,width:a.params.simulation.poolSize.x,height:a.params.simulation.poolSize.z}),this.delta=new g.Vector(1/this.W,1/this.H),this.resetTextures()};re.prototype.addDrop=function(i,o,l,d){var p=this;this.textureB.drawTo(function(){p.textureA.bind(),p.dropShader.uniforms({invPoolSizeVertex:[p.invPoolSize.x,p.invPoolSize.z],center:[i,o],radius:l,strength:d,poolSize:[a.params.simulation.poolSize.x,a.params.simulation.poolSize.y,a.params.simulation.poolSize.z]}).draw(p.plane)}),this.textureB.swapWith(this.textureA)};re.prototype.addOrRemoveVisualizationWaves=function(i){if(!(!this.visualizationWavesEnabled||!B.raceHasStarted)){var o=this;this.textureB.drawTo(function(){o.textureA.bind();const l=B.getAttributesTexture();l&&l.bind(1),o.visualizationWavesShader.uniforms({swimmersAttributesTexture:1,showDivingDistance:a.params.visualizations.showDivingDistance,showWR:a.params.visualizations.showWR,invPoolSizeVertex:[o.invPoolSize.x,o.invPoolSize.z],poolSize:[a.params.simulation.poolSize.x,a.params.simulation.poolSize.y,a.params.simulation.poolSize.z],wr:o.WR_position,sqrt_2_PI:o.sqrt_2_PI,add:i,swimmersNumber:a.swimmers.length,time:a.getRaceTime(),t:a.time,amplitudeFactor:a.params.quiver.amplitudeFactor,frequencyFactor:a.params.quiver.frequencyFactor,amplitude:a.params.quiver.amplitude,omega0:a.params.quiver.omega,waveLength0:a.params.quiver.waveLength}).draw(o.plane)}),this.textureB.swapWith(this.textureA)}};re.prototype.updateSpheres=function(i){if(this.prev_WR_position=this.WR_position,this.WR_position=a.getRaceTime()*2.155,this.WR_position>a.params.simulation.poolSize.z&&(this.WR_position=2*a.params.simulation.poolSize.z-this.WR_position),a.params.simulation.optimized)B.attributes.draw(),this.textureB.drawTo(()=>{this.textureA.bind(),B.bindDisplacementTexture(1),B.bindOldDisplacementTexture(2),this.sphereShader.uniforms({oldDisplacementTexture:2,displacementTexture:1,invPoolSizeVertex:[this.invPoolSize.x,this.invPoolSize.z],poolSize:[a.params.simulation.poolSize.x,a.params.simulation.poolSize.y,a.params.simulation.poolSize.z],optimized:!0}).draw(this.plane),this.textureB.swapWith(this.textureA),B.attributes.draw()});else{const l=[];a.swimmers.forEach(d=>d.spheres.forEach(p=>l.push(p)));for(let d=0;d<l.length;d++){const p=l[d];this.moveSphere(p.oldCenter,p.center,p.radius)}}};re.prototype.moveSphere=function(i,o,l){var d=this;this.textureB.drawTo(function(){d.textureA.bind(),d.sphereShader.uniforms({invPoolSizeVertex:[d.invPoolSize.x,d.invPoolSize.z],oldCenter:i,newCenter:o,radius:l,poolSize:[a.params.simulation.poolSize.x,a.params.simulation.poolSize.y,a.params.simulation.poolSize.z],optimized:!1}).draw(d.plane)}),this.textureB.swapWith(this.textureA)};re.prototype.stepSimulation=function(){var i=this;this.textureB.drawTo(function(){i.textureA.bind();const o=B.getAttributesTexture();o&&o.bind(2),i.updateShader.uniforms({swimmersAttributesTexture:2,swimmersNumber:a.swimmers.length,invPoolSizeVertex:[i.invPoolSize.x,i.invPoolSize.z],delta:[i.delta.x,i.delta.y],time:a.time,wr:i.WR_position,prev_wr:i.prev_WR_position,poolSize:[a.params.simulation.poolSize.x,a.params.simulation.poolSize.y,a.params.simulation.poolSize.z],sqrt_2_PI:i.sqrt_2_PI,damping:a.params.simulation.waterDamping}).draw(i.plane)}),this.textureB.swapWith(this.textureA),this.updateAreaConservation()};re.prototype.updateNormals=function(){var i=this;this.textureB.drawTo(function(){i.textureA.bind(),i.normalShader.uniforms({invPoolSizeVertex:[i.invPoolSize.x,i.invPoolSize.z],delta:[i.delta.x,i.delta.y]}).draw(i.plane)}),this.textureB.swapWith(this.textureA)};re.prototype.updateAreaConservation=function(){if(!a.params.visualizations.areaConservationEnabled)return;var i,o,l;if(this.textureA.type===this.gl.FLOAT)i=this.gl.FLOAT,o=Float32Array,l="EXT_color_buffer_float";else if(this.textureA.type===this.gl.HALF_FLOAT_OES)i=this.gl.HALF_FLOAT_OES,o=Uint16Array,l="EXT_color_buffer_half_float";else{console.warn("Unsupported texture type for reading");return}if(!this.gl.getExtension(l)){console.warn(l+" not available; cannot read pixels");return}this.fb||(this.fb=this.gl.createFramebuffer()),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.fb),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,this.textureA.id,0);const d=this.gl.checkFramebufferStatus(this.gl.FRAMEBUFFER);if(d!==this.gl.FRAMEBUFFER_COMPLETE){console.error("Framebuffer incomplete: "+d+" for texture type "+this.textureA.type),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null);return}this.gl.pixelStorei(this.gl.PACK_ALIGNMENT,1);const p=new o(this.W*this.H*4),v=new Float32Array(this.W*this.H*4);this.gl.readPixels(0,0,this.W,this.H,this.gl.RGBA,i,p);for(let D=0;D<this.W;D++)v[D*4+1]=1;const S=a.params.simulation.poolSize.x/this.W,P=a.params.simulation.poolSize.z/this.H,U=S*S,G=P*P;if(this.textureA.type===this.gl.FLOAT){for(let D=0;D<this.H;D+=1)for(let _=0;_<this.W;_+=1){const W=(D*this.W+_)*4,T=((this.H-1-D)*this.W+_)*4,E=v[T],M=v[T+1];if(_+1<this.W){const L=p[W]-p[W+4],C=Math.sqrt(L*L+U);v[T+4]=E+C}if(D+1<this.H){const L=p[W]-p[W+this.W*4],C=Math.sqrt(L*L+G);v[T-4*this.W+1]=M+C}}this.gl.bindTexture(this.gl.TEXTURE_2D,this.areaConservationTexture.id),this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT,1),this.gl.texSubImage2D(this.gl.TEXTURE_2D,0,0,0,this.W,this.H,this.gl.RGBA,this.gl.FLOAT,v)}this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.bindTexture(this.gl.TEXTURE_2D,null)};function Ie(i){const o={};for(let l=0;l<i.length;l++)o[i[l]]=l;return o}const Le=["none","only medals","all"],ke=["neighbours","per swimmer"],Qe=["none","cycle frequency"];var we,Ge;class et{constructor(){pe(this,we);this.params={numSteps:2,fov:45,visualizations:{enabled:!0,showFlags:!1,showWR:!1,showSpeed:!1,showDivingDistance:!0,showFinishTimes:!1,customWaterPerturbation:"none",waterPerturbatorsList:Qe,WATER_PERTURBATOR_NONE:"none",WATER_PERTURBATOR_CYCLES:"cycle frequency",showSwimmersLines:"none",swimmersLinesList:Le,showSwimmersLinesDict:Ie(Le),swimmersLinesMode:"neighbours",swimmersLinesModeList:ke,swimmersLinesModeDict:Ie(ke),medalsModeBeforeFinish:"none",medalsModesDict:{none:0,stars:1,bright:2,lanes:3},medalsModeAfterFinish:"none",areaConservationEnabled:!0,heightFieldRendering:!1,shadow:{enabled:!0,shadowRadius:.5,shadowPower:.5,showCircle:!0,circleRadius:.6,circleStroke:.15},sparks:{enabled:!1,glow:5,glowOffset:.5,lengthFactor:1,stroke:.01,num:40,sizeFactor:50,fov:Math.PI/4}},swimmers:{showSpheres:!0,useTracking:!1},video:{thresholdBlending:!1,blendingThreshold:.41,show:!1},simulation:{optimized:!1,waterDamping:.02,poolSize:new g.Vector(2,1,2)},quiver:{amplitudeFactor:.8,frequencyFactor:1.2,amplitude:.1,omega:2,waveLength:5}},this.resolution=new g.Vector(256,256),this.gl=g.create(),this.gl.canvas.tabIndex=0,this.originalVisParams=JSON.parse(JSON.stringify(this.params.visualizations)),delete this.originalVisParams.shadow,delete this.originalVisParams.sparks,this.useConfigFile=!0,this.time=0,this.swimmers=[],this.translateX=0,this.translateY=0,this.zoomDistance=4,this.angleX=-25,this.angleY=-200.5,this.angleZ=0,this.water=null;const o=new Ee("—",{poolSize:new g.Vector(2,1,2),waterResolution:new g.Vector(256,256),numSwimmers:1}),l=new ye({});o.addVideo(new _e(this.gl,"",l));const d=new Ee("100m freestyle",{poolSize:new g.Vector(25,2,50),waterResolution:new g.Vector(1024,2048),numSwimmers:10,thresholdBlending:!0,dataFolder:"./assets/race-data/"}),p=new ye({tx:-.53,ty:1.25,zoom:47.86,ax:-29,ay:-260.5,az:-5,fov:39.98});d.addVideo(new _e(this.gl,"swimming-race.mp4",p,16.5)),this.currentVideo=d.videos[0];const v=new Ee("synchronized swimming",{poolSize:new g.Vector(25,2,30),waterResolution:new g.Vector(1024,2048),numSwimmers:2,dataFolder:"./assets/synchronized-swimming-data/"}),S=new ye({tx:-1.32,ty:.4,zoom:32.41,ax:-18,ay:-291.5,az:1,fov:42.8});v.addVideo(new _e(this.gl,"synchronized-swimming.mp4",S,17.5)),this.scenesList=[o,d,v],this.scenes={},this.scenesList.forEach(P=>this.scenes[P.title]=P),this.currentScene=o,this.paused=!1,this.configPlayButton()}configStopButton(){this.stopButton=document.getElementById("stop-button"),this.stopButton.addEventListener("click",()=>{this.stopRace()})}configPlayButton(){this.configStopButton(),this.playButton=document.getElementById("play-button"),this.playButton.addEventListener("click",()=>{this.playButton.textContent=="pause"?this.pause():(B.raceHasStarted||this.startRace(),this.play())})}setCalibration(o){this.translateX=o.tx,this.translateY=o.ty,this.zoomDistance=o.zoom,this.angleX=o.ax,this.angleY=o.ay,this.angleZ=o.az,this.params.fov=o.fov,this.gl.matrixMode(this.gl.PROJECTION),this.gl.loadIdentity(),this.gl.perspective(this.params.fov,this.gl.canvas.width/this.gl.canvas.height,.01,100),this.gl.matrixMode(this.gl.MODELVIEW)}setScene(o){if(console.log("SET SCENE : "+o),this.currentScene=this.scenes[o],this.currentScene){console.log("scene name : "+this.currentScene.title),this.currentVideo=this.currentScene.videos[0],this.setCalibration(this.currentVideo.calibration),ie(this,we,Ge).call(this,this.currentScene.poolSize),this.resolution=this.currentScene.waterResolution,this.params.video.thresholdBlending=this.currentScene.thresholdBlending,this.params.visualizations.areaConservationEnabled=!1,this.params.simulation.waterDamping=.1;const l=this.currentScene.numSwimmers;if(console.log("num swimmers : "+l),this.swimmers.length!=l){for(let p=this.swimmers.length;p<l;p++){const v=new B(new g.Vector(0,0,0));this.swimmers.push(v)}for(let p=this.swimmers.length;p>l;p--)this.swimmers=this.swimmers.slice(1)}this.currentScene.parseData(this.swimmers);const d=document.getElementById("time-slider-container");this.params.video.show=!!this.currentVideo.video,this.params.swimmers.useTracking=!0,this.params.swimmers.showSpheres=!this.currentVideo.video,d.hidden=!this.currentVideo.video,this.stopRace(),this._reset(),this.params.simulation.optimized=!!this.currentVideo.video}}isOneVisualizationEnabled(){return this.params.visualizations.showFlags||this.params.visualizations.medalsModeBeforeFinish!="none"||this.params.visualizations.medalsModeAfterFinish!="none"||this.params.visualizations.showWR||this.params.visualizations.showSpeed||this.params.visualizations.showDivingDistance}updateTime(o){this.time+=o,this._updateDistanceMarker&&this._updateDistanceMarker()}getRaceTime(){return B.raceHasStarted?this.time-this.currentVideo.videoStartTime:0}resetParams(){Object.entries(this.originalVisParams).forEach(o=>{const l=o[0],d=o[1];this.params.visualizations[l]=d}),this.params.visualizations.areaConservationEnabled=!1}updateEventIndex(){for(this.currentEventIndex=0;this.events[this.currentEventIndex]&&this.events[this.currentEventIndex].time<this.getRaceTime();)this.currentEventIndex++;this.currentEventIndex>0&&this.currentEventIndex--}setRaceTime(o){this.time=this.currentVideo.videoStartTime+o,this.currentVideo.video&&this.currentVideo.setTime(this.time),this.events&&(this.updateEventIndex(),this.resetParams())}startRace(){this.setRaceTime(-3),this.currentVideo.video&&this.currentVideo.video.play(),this.swimmers.forEach(o=>o.startRace()),B.raceHasStarted=!0,B.useGravity=!0,this.water.resetTextures(),this.water.WR_position=0,this.stopButton.hidden=!1}stopRace(){this.paused&&this.play(),this.setRaceTime(0),this.currentVideo.video&&this.currentVideo.video.pause(),this.swimmers.forEach(o=>o.swim(!1)),B.raceHasStarted=!1,this.water.resetTextures(),this.playButton.textContent="play",this.stopButton.hidden=!0}pause(){this.paused=!0,this.pauseVideo(),this.playButton.textContent="play"}play(){this.paused=!1,B.raceHasStarted&&(this.playVideo(),this.playButton.textContent="pause")}pauseVideo(){this.currentVideo.video&&this.currentVideo.video.pause()}playVideo(){this.currentVideo.video&&(this.currentVideo.video.play(),this.currentVideo.video.currentTime=this.time)}renderVideo(){this.currentVideo.video&&this.currentVideo.render()}parseConfigFile(o){fetch(o).then(l=>l.text()).then(l=>{this.events=JSON.parse(l),this.currentEventIndex=0,this._renderTimeline&&this._renderTimeline()})}updateParams(){if(!this.events||!this.useConfigFile)return;const o=this.events[this.currentEventIndex];if(!o)return;let l=o.rankSwimmerToggle;l||(l=1),(o.distance&&this.swimmers[l-1].getDistanceTraveled()>=o.distance||o.time!==void 0&&this.getRaceTime()>=o.time)&&(this.currentEventIndex++,Object.entries(o.params).forEach(d=>{const p=d[0],v=d[1];this.params.visualizations[p]=v}))}}we=new WeakSet,Ge=function(o){console.log("SET POOL SIZE : "+o.z),this.params.simulation.poolSize.x=o.x,this.params.simulation.poolSize.y=o.y,this.params.simulation.poolSize.z=o.z};const a=new et;a.parseConfigFile("./assets/vis-config.json");const tt=`#version 300 es
    const float ARM_DELTA_X = float(`+ze+`);
    const float FOOT_DELTA_X = float( `+Ae+`);
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
`,nt=new Float32Array([-1,-1,1,-1,1,1,-1,1]),at=new Uint16Array([0,1,2,2,3,0]);var ee,We,ue,Xe;class st{constructor(){pe(this,ee);this.numVecAttributes=Ne,this.maxNumSwimmer=Oe,this.gl=a.gl;const o=this.gl.NEAREST;this.texture=new g.Texture(this.numVecAttributes,this.maxNumSwimmer,{type:this.gl.FLOAT,filter:o}),this.initPrograms(),this.indexBuffer=this.gl.createBuffer(),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.indexBuffer),this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER,at,this.gl.STATIC_DRAW),this.vboPlane=this.gl.createBuffer(),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vboPlane),this.gl.bufferData(this.gl.ARRAY_BUFFER,nt,this.gl.STATIC_DRAW),this.vboPoints=this.gl.createBuffer()}update(){this.numSwimmers=a.swimmers.length;const o=5;this.swimmersAttributes=new Float32Array(this.numVecAttributes*4*this.maxNumSwimmer*o);const l=ie(this,ee,We).call(this,a.swimmers);for(let d=0;d<a.swimmers.length;d++){const p=l[d];ie(this,ee,Xe).call(this,d,p),ie(this,ee,ue).call(this,a.swimmers.length+d,p.leftArm),ie(this,ee,ue).call(this,2*a.swimmers.length+d,p.rightArm),ie(this,ee,ue).call(this,3*a.swimmers.length+d,p.leftFoot),ie(this,ee,ue).call(this,4*a.swimmers.length+d,p.rightFoot)}this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture.id),this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,!1),this.gl.texSubImage2D(this.gl.TEXTURE_2D,0,0,0,this.numVecAttributes,this.maxNumSwimmer,this.gl.RGBA,this.gl.FLOAT,this.swimmersAttributes),this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,!0),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vboPoints),this.gl.bufferData(this.gl.ARRAY_BUFFER,this.swimmersAttributes,this.gl.DYNAMIC_DRAW)}buildShader(o,l){const d=this.gl.createShader(l);return this.gl.shaderSource(d,o),this.gl.compileShader(d),d}createProgram(o){const l=this.gl.createProgram();return o.forEach(d=>{this.gl.attachShader(l,d)}),this.gl.linkProgram(l),l}checkShaders(o,l,d){this.gl.getShaderParameter(o,this.gl.COMPILE_STATUS)||console.error(this.gl.getShaderInfoLog(o)),this.gl.getShaderParameter(l,this.gl.COMPILE_STATUS)||console.error(this.gl.getShaderInfoLog(l)),this.gl.getProgramParameter(d,this.gl.LINK_STATUS)||console.error(this.gl.getProgramInfoLog(d))}createRenderingTexture(o,l){this.pointsTexture=new g.Texture(o,l,{type:this.gl.FLOAT,filter:this.gl.NEAREST}),this.pointsFrameBuffer=this.gl.createFramebuffer(),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.pointsFrameBuffer);const d=this.gl.COLOR_ATTACHMENT0;this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,d,this.gl.TEXTURE_2D,this.pointsTexture.id,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.horizontalPassTexture=new g.Texture(o,l,{type:this.gl.FLOAT,filter:this.gl.LINEAR}),this.horizontalPassFrameBuffer=this.gl.createFramebuffer(),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.horizontalPassFrameBuffer),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,d,this.gl.TEXTURE_2D,this.horizontalPassTexture.id,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null);const p=l/4,v=p,S=p;this.displacementTexture=new g.Texture(v,S,{type:this.gl.FLOAT,filter:this.gl.LINEAR}),this.displacementFrameBuffer=this.gl.createFramebuffer(),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.displacementFrameBuffer),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,d,this.gl.TEXTURE_2D,this.displacementTexture.id,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.oldDisplacementTexture=new g.Texture(v,S,{type:this.gl.FLOAT,filter:this.gl.LINEAR})}buildProgram(o,l){const d=this.buildShader(o,this.gl.VERTEX_SHADER),p=this.buildShader(l,this.gl.FRAGMENT_SHADER),v=this.createProgram([d,p]);return this.checkShaders(d,p,v),v}initPrograms(){this.programPoints=this.buildProgram(tt,it),this.programVolume=this.buildProgram(rt,ot),this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height)}volumePass(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.horizontalPassFrameBuffer),this.gl.useProgram(this.programVolume);const o=this.gl.getAttribLocation(this.programVolume,"iVertex"),l=this.gl.getUniformLocation(this.programVolume,"poolSize");this.gl.uniform2f(l,a.params.simulation.poolSize.x,a.params.simulation.poolSize.z);const d=this.gl.getUniformLocation(this.programVolume,"horizontal");this.gl.uniform1i(d,!0);const p=this.gl.getUniformLocation(this.programVolume,"show");this.gl.uniform1i(p,!1);const v=this.gl.getUniformLocation(this.programVolume,"swapColor");this.gl.uniform1i(v,!1);const S=2,P=this.gl.FLOAT,U=!1,G=0,D=0;this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vboPlane),this.gl.vertexAttribPointer(o,S,P,U,G,D),this.gl.enableVertexAttribArray(o),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.indexBuffer),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.pointsTexture.id),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this.gl.drawElements(this.gl.TRIANGLES,6,this.gl.UNSIGNED_SHORT,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.displacementFrameBuffer),this.gl.uniform1i(d,!1),this.gl.uniform1i(p,!1),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.horizontalPassTexture.id),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this.gl.viewport(0,0,this.displacementTexture.width,this.displacementTexture.height),this.gl.drawElements(this.gl.TRIANGLES,6,this.gl.UNSIGNED_SHORT,0),this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height)}pointPass(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.pointsFrameBuffer),this.gl.useProgram(this.programPoints);const o=this.gl.getAttribLocation(this.programPoints,"iData1"),l=this.gl.getAttribLocation(this.programPoints,"iData2"),d=this.gl.getAttribLocation(this.programPoints,"iData3"),p=this.gl.getUniformLocation(this.programPoints,"invPoolSize");this.gl.uniform2f(p,1/a.params.simulation.poolSize.x,1/a.params.simulation.poolSize.z);const v=4,S=this.gl.FLOAT,P=!1,U=4,G=12*U;let D=0;this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vboPoints),o>=0&&(this.gl.vertexAttribPointer(o,v,S,P,G,D),this.gl.enableVertexAttribArray(o)),D=4*U,l>=0&&(this.gl.vertexAttribPointer(l,v,S,P,G,D),this.gl.enableVertexAttribArray(l)),D=2*4*U,d>=0&&(this.gl.vertexAttribPointer(d,v,S,P,G,D),this.gl.enableVertexAttribArray(d)),this.gl.viewport(0,0,this.pointsTexture.width,this.pointsTexture.height),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this.gl.drawArrays(this.gl.POINTS,0,5*this.numSwimmers)}updateOldDisplacementTexture(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.displacementFrameBuffer),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.oldDisplacementTexture.id),this.gl.copyTexSubImage2D(this.gl.TEXTURE_2D,0,0,0,0,0,this.oldDisplacementTexture.width,this.oldDisplacementTexture.height)}draw(){this.updateOldDisplacementTexture(),this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this.pointPass(),this.volumePass(),this.gl.disable(this.gl.BLEND)}}ee=new WeakSet,We=function(o){const l=function(v,S){return S.getDistanceTraveled()-v.getDistanceTraveled()};let d=0;o.forEach(v=>{v.hasFinished()>.1&&d++});const p=o.slice(0,d).concat(o.slice(d).sort(l));for(let v=0;v<o.length;v++)o[v]=p[v];return o},ue=function(o,l){this.swimmersAttributes[this.numVecAttributes*4*o]=l.center.x,this.swimmersAttributes[this.numVecAttributes*4*o+1]=l.center.z,this.swimmersAttributes[this.numVecAttributes*4*o+7]=l.center.y},Xe=function(o,l){ie(this,ee,ue).call(this,o,l.body),this.swimmersAttributes[this.numVecAttributes*4*o+2]=l.divingDistance,this.swimmersAttributes[this.numVecAttributes*4*o+3]=l.divingTime,this.swimmersAttributes[this.numVecAttributes*4*o+4]=l.reactionTime,this.swimmersAttributes[this.numVecAttributes*4*o+5]=l.body.velocity.z*3.6,this.swimmersAttributes[this.numVecAttributes*4*o+6]=l.nationality,this.swimmersAttributes[this.numVecAttributes*4*o+8]=l.breakoutDistance,this.swimmersAttributes[this.numVecAttributes*4*o+9]=l.breakoutTime,this.swimmersAttributes[this.numVecAttributes*4*o+10]=l.finishTime,this.swimmersAttributes[this.numVecAttributes*4*o+11]=l.waterDamping};function Te(i=0,o=1){const l=1-Math.random(),d=Math.random();return Math.sqrt(-2*Math.log(l))*Math.cos(2*Math.PI*d)*o+i}const oe=new g.Vector(1e3,0,-1e3),lt=.5,ct=2,se="Temps (s)",fe="event",be="eventX",dt="frequence (cylce/min)",X=class X{constructor(o){this.startingPoint=new g.Vector(o.x,o.y,o.z),this.center=new g.Vector(o.x,o.y,o.z),this.force=new g.Vector(0,0,190+Te(0,20)),this.reactionTime=Math.max(.1,Te(.15,.02));const l=.25,d=.15;this.body=new me(o,l),this.leftArm=new me(oe,d),this.rightArm=new me(oe,d),this.leftFoot=new me(oe,d),this.rightFoot=new me(oe,d),this.body.cinematic=!X.useGravity,this.leftArm.cinematic=!0,this.rightArm.cinematic=!0,this.leftFoot.cinematic=!0,this.rightFoot.cinematic=!0,this.spheres=[this.body,this.leftArm,this.rightArm,this.leftFoot,this.rightFoot],this.divingDistance=0,this.divingTime=1e3,this.breakoutDistance=0,this.breakoutTime=1e3,this.nationality=Math.random()>.5?0:1,this.currendDataIndex=0,this.useTracking=!1,this.armPulsation=2*Math.PI*ct,this.cycleTime=0,this.cyclePhase=0,this.finishTime=0,this.waterDamping=a.params.simulation.waterDamping}async parseData(o){fetch(o).then(l=>{const d=l.headers.get("content-type");return!d||!d.includes("text/csv")?(console.log("no file found : "+o),null):l.text()}).then(l=>{if(!l)return;const d=l.split(`
`),p=d[0].split(/,|;/);this.data=d.slice(1).map(v=>{const S=v.split(/,|;/);return Object.fromEntries(p.map((P,U)=>[P,S[U]]))}),a.params.swimmers.useTracking&&(this.armPulsation=0)})}getDistanceTraveled(){const o=this.body.velocity.z,l=a.params.simulation.poolSize.z,d=this.body.center.z+l/2;return o>=0?d:2*l-d}startRace(){this.hasBrokeOut=!1,this.hasDove=!1,this.hasReacted=!1}jump(o=4.5){this.body.cinematic=!1,this.body.velocity=new g.Vector(0,0,o+Te(0,1)),this.body.center=new g.Vector(this.startingPoint.x,1,-a.params.simulation.poolSize.z/2)}swim(o){this.hasReacted=o,this.isSwimming=o,this.finishTime=0,o||(this.body.followTarget=!1),o?(this.body.cinematic=!1,this.useGravity=!0,this.body.center=new g.Vector(this.startingPoint.x,0,-a.params.simulation.poolSize.z/2)):(this.body.velocity=new g.Vector(0,0,0),this.body.center=new g.Vector(this.startingPoint.x,0,0))}hasFinished(){return this.finishTime>.1}getArmOffset(o,l){l+=this.cyclePhase;const d=this.body.velocity.z>=0?this.armPulsation:-this.armPulsation;return new g.Vector(0,Math.cos(d*o+l),Math.sin(d*o+l)).multiply(lt)}setCurrentDataIndex(){if(this.currendDataIndex=0,!!this.data){for(;this.data[this.currendDataIndex]&&this.data[this.currendDataIndex][se]<a.getRaceTime();)this.currendDataIndex++;if(this.currendDataIndex+1<this.data.length){if(this.currendDataIndex-1>=0){const o=parseFloat(this.data[this.currendDataIndex][be]);let l=o;const d=a.params.simulation.poolSize.z;o>d&&(l=2*d-l),l-=d/2;const p=this.body.center;this.body.move(new g.Vector(p.x,p.y,l));const v=Math.sign(50-o)*.1;this.body.velocity=new g.Vector(0,0,v),console.log("vz : "+v)}this.body.setTarget(null),this.body.followTarget=!0,this.finishTime=0}}}findNextCycle(){let o=this.currendDataIndex+1;if(!this.data)return null;for(;this.data[o]&&this.data[o][fe]!="cycle";)o++;return this.data[o]?parseFloat(this.data[o][se]):null}setDamping(o){if(a.params.visualizations.customWaterPerturbation==a.params.visualizations.WATER_PERTURBATOR_CYCLES){const l=parseFloat(o[dt]);if(l>0){console.log("FREQ : "+l);const d=80,p=35;let v=(l-p)/(d-p);v=Math.max(Math.min(v,1),0);const S=.03,P=.22;this.waterDamping=S+(P-S)*(1-v)}}else this.waterDamping=a.params.simulation.waterDamping}handleTracking(o){if(this.hasReacted&&this.useTracking&&this.currendDataIndex<this.data.length&&this.data[this.currendDataIndex][se]<o){this.setDamping(this.data[this.currendDataIndex]);let l=null,d=o;const p=this.data[this.currendDataIndex+1];this.currendDataIndex+1<this.data.length&&(l=parseFloat(p[be]),d=parseFloat(p[se]));const v=a.params.simulation.poolSize.z;let S=-this.body.radius/2;const P=this.data[this.currendDataIndex][fe];if(P=="enter"||P=="turn"&&p[fe]!="under"){d=(o+d)/2,l=(this.body.center.z+v/2+l)/2;const G={[se]:d,[be]:l,[fe]:"under"};this.data.splice(this.currendDataIndex+1,0,G),S=-1.5}p&&p[fe]=="under"&&(S=-1.5),l>v&&(l=2*v-l),l-=a.params.simulation.poolSize.z/2;const U=new g.Vector(this.startingPoint.x,S,l);if(this.currendDataIndex+1<this.data.length?this.body.setTarget(U,d-o):this.body.setTarget(null),P=="cycle"){const G=parseFloat(this.data[this.currendDataIndex][se]),D=this.findNextCycle();if(D){const W=1/(D-G);this.armPulsation=2*Math.PI*W,this.cycleTime=0,this.cyclePhase==0?this.cyclePhase=Math.PI:this.cyclePhase=0}}else P=="finish"&&(this.finishTime=this.data[this.currendDataIndex][se],this.body.followTarget=!1,this.isSwimming=!1);this.currendDataIndex++}}moveSpheresAway(){this.rightArm.move(oe),this.leftArm.move(oe),this.rightFoot.move(oe),this.leftFoot.move(oe)}moveSpheres(o){this.cycleTime+=o;const l=this.getArmOffset(.5*this.cycleTime,0),d=this.getArmOffset(.5*this.cycleTime,Math.PI),p=this.getArmOffset(.5*this.cycleTime*2,0),v=this.getArmOffset(.5*this.cycleTime*2,Math.PI);this.rightArm.move(this.body.center.add(l).add(new g.Vector(ze,0,0))),this.leftArm.move(this.body.center.add(d).add(new g.Vector(-ze,0,0)));const S=this.body.velocity.z>=0?-Ce:Ce;this.rightFoot.move(this.body.center.add(new g.Vector(Ae,p.y*.5,S))),this.leftFoot.move(this.body.center.add(new g.Vector(-Ae,v.y*.5,S)))}update(o){const l=a.getRaceTime();X.raceHasStarted||(this.useTracking=a.params.swimmers.useTracking&&this.data),!this.hasReacted&&X.raceHasStarted&&(this.useTracking||l>this.reactionTime&&!a.params.swimmers.useTracking?(this.swim(!0),this.jump(),this.useTracking&&(this.body.cinematic=!0,this.body.followTarget=!0,this.body.setTarget(null))):(this.swim(!1),this.body.cinematic=!0,this.body.move(oe)),this.currendDataIndex=0),this.moveSpheresAway(),this.isSwimming&&(this.useTracking||this.body.addForce(this.force),this.body.center.y>-this.body.radius&&this.moveSpheres(o)),this.handleTracking(l);for(let p of this.spheres)p.update(o);!this.hasDove&&this.body.center.y<0&&this.body.oldCenter.y>=0&&(this.divingDistance=this.body.center.z+a.params.simulation.poolSize.z/2,this.divingTime=l,this.hasDove=!0);const d=this.body.radius;!this.hasBrokeOut&&this.body.center.y>-d&&this.body.oldCenter.y<=-d&&(this.breakoutDistance=this.body.center.z+a.params.simulation.poolSize.z/2,this.breakoutTime=l,this.hasBrokeOut=!0)}};te(X,"useGravity",!1),te(X,"raceHasStarted",!1),te(X,"swimming",!1),te(X,"attributes"),te(X,"initAttributes",()=>{X.attributes=new st}),te(X,"updateAttributesTexture",()=>{X.attributes.update()}),te(X,"getAttributesTexture",()=>X.attributes.texture),te(X,"bindDisplacementTexture",o=>{X.attributes.displacementTexture.bind(o)}),te(X,"bindOldDisplacementTexture",o=>{X.attributes.oldDisplacementTexture.bind(o)}),te(X,"reset",o=>{X.attributes.createRenderingTexture(o.x,o.y)});let B=X;const ht=`
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
`;function ae(i,o,l,d){this.water=o,this.gl=i,this.tileTexture=g.Texture.fromImage(document.getElementById("tiles"),{minFilter:this.gl.LINEAR_MIPMAP_LINEAR,wrap:this.gl.REPEAT,format:this.gl.RGB}),this.franceTexture=g.Texture.fromImage(document.getElementById("france"),{minFilter:this.gl.LINEAR_MIPMAP_LINEAR,wrap:this.gl.REPEAT,format:this.gl.RGBA}),this.chinaTexture=g.Texture.fromImage(document.getElementById("china"),{minFilter:this.gl.LINEAR_MIPMAP_LINEAR,wrap:this.gl.REPEAT,format:this.gl.RGBA}),this.lettersTexture=g.Texture.fromImage(document.getElementById("letters"),{minFilter:this.gl.LINEAR,magFilter:this.gl.LINEAR,wrap:this.gl.REPEAT,format:this.gl.RGBA}),this.flagSize=d,this.flagSize=[1.5,1],this.flagCenter=l,this.lightDir=new g.Vector(2,2,-1).unit(),this.causticTex=new g.Texture(1024,1024),this.waterShaders=[];for(var p=0;p<2;p++)this.waterShaders[p]=new g.Shader(`
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
      
      
      `+ge+ht+`
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
  `),this.sphereCenter=new g.Vector,this.sphereRadius=0;var v=!!this.gl.getExtension("OES_standard_derivatives");this.causticsShader=new g.Shader(le+`
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
  `,(v?`#extension GL_OES_standard_derivatives: enable
`:"")+`
  `+le+`
    in vec3 oldPos;
    in vec3 newPos;
    in vec3 ray;
    out vec4 fragColor;

  void main() {
    `+(v?`
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
  `)}ae.prototype.reset=function(){this.cubeMesh=g.Mesh.cube({width:a.params.simulation.poolSize.x,height:2,depth:a.params.simulation.poolSize.z}),this.cubeMesh.triangles.splice(4,2),this.cubeMesh.compile()};ae.prototype.updateCaustics=function(i){};ae.prototype.renderWater=function(i,o,l){var d=new g.Raytracer;i.textureA.bind(0),this.tileTexture.bind(1),o.bind(2),this.causticTex.bind(3),this.franceTexture.bind(4),this.chinaTexture.bind(8),this.lettersTexture.bind(7),i.areaConservationTexture.bind(5);const p=B.getAttributesTexture();p&&p.bind(6),this.gl.enable(this.gl.CULL_FACE);for(var v=0;v<2;v++)this.gl.cullFace(v?this.gl.BACK:this.gl.FRONT),this.waterShaders[v].uniforms({light:this.lightDir,water:0,tiles:1,sky:2,causticTex:3,france:4,china:8,areaConservationTexture:5,swimmersAttributesTexture:6,iChannel0:7,areaConservation:a.params.visualizations.areaConservationEnabled,flagSize:[1.5,2],flagCenter:[this.flagCenter.x,this.flagCenter.y],poolSize:[a.params.simulation.poolSize.x,a.params.simulation.poolSize.y,a.params.simulation.poolSize.z],poolSizeVertexShader:[a.params.simulation.poolSize.x,a.params.simulation.poolSize.y,a.params.simulation.poolSize.z],eye:d.eye,sphereCenter:this.sphereCenter,sphereRadius:this.sphereRadius,showProjectionGrid:i.showProjectionGrid,showAreaConservedGrid:i.showAreaConservedGrid,wr:i.WR_position,swimmersNumber:a.swimmers.length,showFlags:a.params.visualizations.showFlags,showWR:a.params.visualizations.showWR,showSpeed:a.params.visualizations.showSpeed,showDivingDistance:a.params.visualizations.showDivingDistance,showFinishTimes:a.params.visualizations.showFinishTimes,time:a.getRaceTime(),shadowEnabled:l.enabled,shadowRadius:l.shadowRadius,shadowPower:l.shadowPower,showCircle:l.showCircle,shadowCircleRadius:l.circleRadius,shadowCircleStroke:l.circleStroke,showSwimmersLines:Math.round(a.params.visualizations.showSwimmersLinesDict[a.params.visualizations.showSwimmersLines]),swimmersLinesMode:a.params.visualizations.swimmersLinesModeDict[a.params.visualizations.swimmersLinesMode],medalsModeBeforeFinish:Math.round(a.params.visualizations.medalsModesDict[a.params.visualizations.medalsModeBeforeFinish]),medalsModeAfterFinish:Math.round(a.params.visualizations.medalsModesDict[a.params.visualizations.medalsModeAfterFinish]),heightFieldRendering:a.params.visualizations.heightFieldRendering}).draw(i.plane);this.gl.disable(this.gl.CULL_FACE)};ae.prototype.renderSpheres=function(i){const o=[];a.swimmers.forEach(l=>l.spheres.forEach(d=>o.push(d)));for(let l of o)this.renderSphere(i,l)};ae.prototype.renderSphere=function(i,o){i.textureA.bind(0),this.causticTex.bind(1),this.sphereShader.uniforms({light:this.lightDir,water:0,causticTex:1,sphereCenter:[o.center.x,o.center.y,o.center.z],sphereRadius:o.radius,poolSize:[a.params.simulation.poolSize.x,a.params.simulation.poolSize.y,a.params.simulation.poolSize.z]}).draw(o.mesh)};ae.prototype.renderSphereOld=function(i){i.textureA.bind(0),this.causticTex.bind(1),this.sphereShader.uniforms({light:this.lightDir,water:0,causticTex:1,sphereCenter:this.sphereCenter,sphereRadius:this.sphereRadius,poolSize:[a.params.simulation.poolSize.x,a.params.simulation.poolSize.y,a.params.simulation.poolSize.z]}).draw(this.sphereMesh)};ae.prototype.renderCube=function(i){this.gl.enable(this.gl.CULL_FACE),i.textureA.bind(0),this.tileTexture.bind(1),this.causticTex.bind(2),this.cubeShader.uniforms({light:this.lightDir,water:0,tiles:1,causticTex:2,sphereCenter:this.sphereCenter,sphereRadius:this.sphereRadius,poolSize:[a.params.simulation.poolSize.x,a.params.simulation.poolSize.y,a.params.simulation.poolSize.z]}).draw(this.cubeMesh),this.gl.disable(this.gl.CULL_FACE)};function Pe(i,o){this.gl=o,this.id=o.createTexture(),o.bindTexture(o.TEXTURE_CUBE_MAP,this.id),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,1),o.texParameteri(o.TEXTURE_CUBE_MAP,o.TEXTURE_MAG_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_CUBE_MAP,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_CUBE_MAP,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_CUBE_MAP,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),o.texImage2D(o.TEXTURE_CUBE_MAP_NEGATIVE_X,0,o.RGB,o.RGB,o.UNSIGNED_BYTE,i.xneg),o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X,0,o.RGB,o.RGB,o.UNSIGNED_BYTE,i.xpos),o.texImage2D(o.TEXTURE_CUBE_MAP_NEGATIVE_Y,0,o.RGB,o.RGB,o.UNSIGNED_BYTE,i.yneg),o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_Y,0,o.RGB,o.RGB,o.UNSIGNED_BYTE,i.ypos),o.texImage2D(o.TEXTURE_CUBE_MAP_NEGATIVE_Z,0,o.RGB,o.RGB,o.UNSIGNED_BYTE,i.zneg),o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_Z,0,o.RGB,o.RGB,o.UNSIGNED_BYTE,i.zpos)}Pe.prototype.bind=function(i){this.gl.activeTexture(this.gl.TEXTURE0+(i||0)),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,this.id)};Pe.prototype.unbind=function(i){this.gl.activeTexture(this.gl.TEXTURE0+(i||0)),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,null)};const he=new Ze,ut=function(i,o){const l=he.addFolder("visualizations");l.close(),l.add(a,"useConfigFile").name("use configuration file");const d={showTimeline:!0};l.add(d,"showTimeline").name("show event timeline").onChange(_=>{const W=document.getElementById("event-editor");W&&(W.style.display=_?"block":"none")}),l.add(a.params.visualizations,"showFlags").name("show flags").listen(),l.add(a.params.visualizations,"showWR").name("show world record").listen(),l.add(a.params.visualizations,"showSwimmersLines",a.params.visualizations.swimmersLinesList).name("show neighbours lines").listen(),l.add(a.params.visualizations,"swimmersLinesMode",a.params.visualizations.swimmersLinesModeList).name("show neighbours lines").listen(),l.add(a.params.visualizations,"customWaterPerturbation",a.params.visualizations.waterPerturbatorsList).name("custom water perturbation").listen(),l.add(a.params.visualizations,"medalsModeBeforeFinish",["none","stars","bright","lanes"]).name("show potential medals").listen(),l.add(a.params.visualizations,"medalsModeAfterFinish",["none","stars","bright","lanes"]).name("show potential medals after finish").listen(),l.add(a.params.visualizations,"showSpeed").name("show speed").listen(),l.addFolder("ranks"),l.add(a.params.visualizations,"showDivingDistance").name("show diving distance").listen(),l.add(a.params.visualizations.shadow,"enabled").name("show shadow"),l.add(a.params.visualizations,"areaConservationEnabled","areaConservationEnabled").name("area conservation").listen(),l.add(a.params.visualizations,"heightFieldRendering").name("height field rendering").listen();const p=he.addFolder("video");p.close(),p.add(a.params.video,"thresholdBlending").name("threshold blending"),p.add(a.params.video,"blendingThreshold",.1,.5).name("blending threshold"),p.add(a.params.video,"show").name("show").listen();const v=l.addFolder("Sparks");v.close(),v.add(a.params.visualizations.sparks,"enabled").name("sparks enabled"),v.add(a.params.visualizations.sparks,"glow",1,30).name("sparks glow factor"),v.add(a.params.visualizations.sparks,"lengthFactor",.1,10).name("sparks length factor"),v.add(a.params.visualizations.sparks,"glowOffset",.1,3).name("sparks glow offset"),v.add(a.params.visualizations.sparks,"stroke",.001,.05).name("sparks stroke"),v.add(a.params.visualizations.sparks,"num",10,Ue).step(1).name("sparks number"),v.add(a.params.visualizations.sparks,"sizeFactor",10,100).name("size factor");const S=l.addFolder("Swimmers shadows");S.close(),S.add(a.params.visualizations.shadow,"shadowRadius",0,2).name("shadow radius"),S.add(a.params.visualizations.shadow,"shadowPower",.1,2).name("shadow power"),S.add(a.params.visualizations.shadow,"showCircle").name("circle"),S.add(a.params.visualizations.shadow,"circleRadius",.5,2).name("circle radius"),S.add(a.params.visualizations.shadow,"circleStroke",.1,.5).name("circle stroke");const P=he.addFolder("Simulation");P.close(),P.add(a.params.simulation,"optimized").name("optimized").listen(),P.add(a.params.simulation.poolSize,"x",1,25).name("pool width").onChange(function(_){o()}).listen(),P.add(a.params.simulation.poolSize,"z",1,50).name("pool height").onChange(function(_){o()}).listen(),P.add(a.params.simulation.poolSize,"y",1,3).name("pool depth").onChange(function(_){o()}).listen(),P.add(a.params.simulation,"waterDamping",.005,.15).name("water damping").listen();const U=he.addFolder("swimmers");U.close(),U.add(a.params.swimmers,"showSpheres").name("show spheres").listen(),U.add(a.params.swimmers,"useTracking").name("use tracking data").listen();const G=he.addFolder("camera");G.close(),G.add(a.params,"fov",28,45).name("fov").listen().onChange(function(_){a.params.visualizations.sparks.fov=_*2*Math.PI/360,i.matrixMode(i.PROJECTION),i.loadIdentity(),i.perspective(a.params.fov,i.canvas.width/i.canvas.height,.01,100),i.matrixMode(i.MODELVIEW),console.log("perspective : "+a.params.fov)});const D=he.addFolder("quiver");D.close(),D.add(a.params.quiver,"amplitude",.01,1).name("amplitude"),D.add(a.params.quiver,"omega",.5,5).name("omega"),D.add(a.params.quiver,"amplitudeFactor",.5,.9).name("amplitude factor"),D.add(a.params.quiver,"frequencyFactor",1.1,2).name("frequency factor"),D.add(a.params.quiver,"waveLength",1,30).name("wave length")},Se=150,ne=100;function mt(i){const o=document.createElement("div");if(document.body.appendChild(o),o.id="event-editor",o.style.position="fixed",o.display="block",o.style.bottom="60px",o.style.left="10px",o.style.right="10px",o.style.height="120px",o.style.zIndex="4",o.style.background="#222",o.style.color="#fff",o.style.overflow="auto",o.style.padding="4px",o.style.fontSize="12px",o.style.position=o.style.position||"relative",!o){console.warn(`event editor container "${i}" not found`);return}let l,d=!1;const p=[{name:"showFlags",type:"boolean"},{name:"showWR",type:"boolean"},{name:"showSpeed",type:"boolean"},{name:"showDivingDistance",type:"boolean"},{name:"showFinishTimes",type:"boolean"},{name:"showSwimmersLines",type:"select",options:a.params.visualizations.swimmersLinesList},{name:"swimmersLinesMode",type:"select",options:a.params.visualizations.swimmersLinesModeList},{name:"customWaterPerturbation",type:"select",options:a.params.visualizations.waterPerturbatorsList},{name:"medalsModeBeforeFinish",type:"select",options:["none","stars","bright","lanes"]},{name:"medalsModeAfterFinish",type:"select",options:["none","stars","bright","lanes"]},{name:"rankSwimmerToggle",type:"number",min:1,max:10}];function v(T){const E=document.createElement("div");E.style.flex="1",E.style.padding="4px",E.style.background="#222",E.style.border="1px solid #555",E.style.borderRadius="4px",E.style.fontFamily="monospace",E.style.fontSize="12px",E.style.whiteSpace="pre-wrap",E.style.overflow="auto",E.style.maxHeight="100px";function M(){const L=T.params;if(Object.keys(L).length===0){E.textContent="(no params)";return}const C=Object.entries(L).map(([N,I])=>`${N}: ${JSON.stringify(I)}`);E.textContent=C.join(`
`)}return M(),{element:E,update:M}}function S(T,E){const M=document.createElement("div");M.style.display="flex",M.style.flexWrap="wrap",M.style.margin="4px 0",M.style.background="#333",M.style.padding="4px";function L(){E&&(E(),W())}return p.forEach(C=>{const N=document.createElement("div");N.style.marginRight="8px",N.style.marginBottom="4px";const I=document.createElement("label");I.style.whiteSpace="nowrap",I.textContent=C.name+":",N.appendChild(I);let A;if(C.type==="boolean"){A=document.createElement("select"),[{value:"",label:"—"},{value:"true",label:"ON"},{value:"false",label:"OFF"}].forEach(Y=>{const V=document.createElement("option");V.value=Y.value,V.textContent=Y.label,A.appendChild(V)});const j=T.params[C.name];j===void 0?A.value="":j===!0?A.value="true":j===!1&&(A.value="false"),A.addEventListener("change",()=>{A.value===""?delete T.params[C.name]:A.value==="true"?T.params[C.name]=!0:A.value==="false"&&(T.params[C.name]=!1),L()})}else if(C.type==="select"){A=document.createElement("select");const q=document.createElement("option");q.value="",q.textContent="—",A.appendChild(q),C.options.forEach(j=>{const Y=document.createElement("option");Y.value=j,Y.textContent=j,A.appendChild(Y)}),A.value=T.params[C.name]||"",A.addEventListener("change",()=>{A.value===""?delete T.params[C.name]:T.params[C.name]=A.value,L()})}else C.type==="number"&&(A=document.createElement("input"),A.type="number",C.min!==void 0&&(A.min=C.min),C.max!==void 0&&(A.max=C.max),A.placeholder="—",A.style.width="50px",A.value=T.params[C.name]!==void 0?T.params[C.name]:"",A.addEventListener("change",()=>{if(A.value==="")delete T.params[C.name];else{const q=parseFloat(A.value);isNaN(q)||(T.params[C.name]=q)}L()}));A&&N.appendChild(A),M.appendChild(N)}),M}function P(){const T=document.createElement("div");T.style.marginTop="8px",T.style.padding="8px",T.style.background="#555",T.style.border="1px solid #777";const E=document.createElement("div");E.textContent="Add New Event",E.style.fontWeight="bold",E.style.marginBottom="4px",T.appendChild(E);const M=document.createElement("input");M.type="number",M.placeholder="Distance",M.style.width="auto",M.style.marginRight="8px",T.appendChild(M);const L={},C=S({params:L},null);C.style.margin="4px 0",T.appendChild(C);const N=document.createElement("button");return N.textContent="OK",N.addEventListener("click",()=>{const I=parseFloat(M.value);if(isNaN(I)){alert("Please enter a valid distance");return}const A={distance:I,params:{...L}};a.events.push(A),W(),l.remove(),l=null}),T.appendChild(N),T}function U(T,E,{title:M="",id:L=null,color:C="#e74c3c"}){const N=T/E*100,I=document.createElement("div");return I.style.position="absolute",I.style.left=N+"%",I.style.transform="translateX(-50%)",I.style.width="4px",I.style.height="100%",I.style.background=C,I.style.cursor="pointer",I.title=M,L&&(I.id=L),I.addEventListener("click",()=>{_(idx)}),I}function G(){let T=document.getElementById("distance-marker");const E=a.swimmers[0].getDistanceTraveled();if(!T){if(d)return;const M=document.getElementById("timeline-track");T=U(E,ne,{color:"blue",id:"distance-marker"}),M.appendChild(T)}T.style.left=E+"%"}function D(){o.innerHTML="";const T=document.createElement("button");if(T.textContent=d?"□":"—",T.style.position="absolute",T.style.top="0",T.style.right="0",T.style.width="20px",T.style.height="20px",T.style.zIndex="100001",T.addEventListener("click",()=>{d=!d,D()}),o.appendChild(T),d){o.style.height="20px";return}o.style.height="300px";const E=document.createElement("div");if(E.style.position="relative",E.style.top="0px",E.style.left="50%",E.style.transform="translateX(-50%)",E.style.width="80px",E.style.height="15px",E.style.background="grey",E.style.border="1px solid black",E.style.cursor="ns-resize",E.style.zIndex="100000",E.style.lineHeight="16px",E.style.textAlign="center",E.textContent="drag",o.appendChild(E),E.addEventListener("mousedown",e=>{e.preventDefault();const n=e.clientY,s=o.offsetHeight;function c(u){const x=s-(u.clientY-n);x>20&&(o.style.height=x+"px")}function h(){document.removeEventListener("mousemove",c),document.removeEventListener("mouseup",h)}document.addEventListener("mousemove",c),document.addEventListener("mouseup",h)}),!a.events){o.textContent="no events defined";return}const M=document.createElement("div");o.appendChild(M),M.style.marginRight="8px",M.style.marginBottom="4px";const L=document.createElement("label");L.style.whiteSpace="nowrap",L.textContent="select scene",L.style.margin="30px",M.appendChild(L);const C=document.createElement("select");C.style.width="auto",a.scenesList.forEach(e=>{const n=document.createElement("option");n.textContent=e.title,n.value=e.title,C.appendChild(n)}),C.addEventListener("change",()=>{a.setScene(C.value)}),M.appendChild(C);const N=a.events.slice().sort((e,n)=>{const s=e.distance!==void 0?e.distance:e.time!==void 0?e.time:0,c=n.distance!==void 0?n.distance:n.time!==void 0?n.time:0;return s-c}),I=new Set;N.forEach(e=>{e.params&&Object.keys(e.params).forEach(n=>I.add(n))});let A=p.map(e=>e.name).filter(e=>I.has(e));const q=["#4caf50","#2196f3","#ff9800","#9c27b0","#f44336","#009688","#e91e63","#3f51b5"],j={};A.forEach((e,n)=>{j[e]=q[n%q.length]});const Y={},V={};A.forEach(e=>{V[e]=!1,Y[e]=0});const J=[];if(N.forEach(e=>{const n=e.distance!==void 0?e.distance:e.time!==void 0?e.time:0;e.params&&Object.keys(e.params).forEach(s=>{if(A.includes(s)){const c=!!e.params[s];c!==V[s]&&(V[s]&&J.push({name:s,start:Y[s],end:n}),V[s]=c,Y[s]=n)}})}),A.forEach(e=>{V[e]&&J.push({name:e,start:Y[e],end:ne})}),A.length>0){const e=document.createElement("div");e.style.position="relative";const n=20;e.style.height=A.length*n+"px",e.style.background="#222",e.style.marginBottom="4px",e.style.marginTop="10px",A.forEach((c,h)=>{const u=document.createElement("div");u.textContent=c,u.style.position="absolute",u.style.left="0",u.style.top=h*n+2+"px",u.style.width=Se+"px",u.style.color="#aaa",u.style.fontSize="10px",u.style.pointerEvents="none",e.appendChild(u)});const s=document.createElement("div");s.style.position="absolute",s.style.left=Se+"px",s.style.top="0",s.style.right="0",s.style.bottom="0",s.style.overflow="hidden",e.appendChild(s),J.forEach(c=>{const h=document.createElement("div"),u=c.start/ne*100,x=(c.end-c.start)/ne*100;h.style.position="absolute",h.style.left=u+"%",h.style.top=A.indexOf(c.name)*n+2+"px",h.style.height=n-4+"px",h.style.width=x+"%",h.style.background=j[c.name]||"#4caf50",h.title=`${c.name}: ${c.start.toFixed(2)} → ${c.end.toFixed(2)}`;const m=document.createElement("span");if(m.textContent=`${c.name}: ${c.start.toFixed(2)} → ${c.end.toFixed(2)}`,m.style.position="absolute",m.style.top="0",m.style.left="2px",m.style.fontSize="10px",m.style.color="white",m.style.pointerEvents="none",m.style.whiteSpace="nowrap",m.style.overflow="hidden",m.style.textOverflow="ellipsis",h.appendChild(m),c.end<ne){const f=document.createElement("div");f.style.position="absolute",f.style.right="0",f.style.top="0",f.style.width="5px",f.style.height="100%",f.style.background="rgba(255,255,255,0.5)",f.style.cursor="ew-resize",h.appendChild(f),f.addEventListener("mousedown",y=>{y.preventDefault(),y.stopPropagation();const R=y.clientX,b=h.offsetWidth;function z(k){const Q=k.clientX-R,Z=Math.max(1,b+Q),de=Z/s.offsetWidth*100;h.style.width=de+"%";const qe=c.start+Z/s.offsetWidth*ne;m.textContent=`${c.name}: ${c.start.toFixed(2)} → ${qe.toFixed(2)}`}function O(){document.removeEventListener("mousemove",z),document.removeEventListener("mouseup",O);const k=h.offsetWidth,Q=c.start+k/s.offsetWidth*ne,Z=N.find(de=>(de.distance!==void 0?de.distance:de.time!==void 0?de.time:0)===c.end);Z&&(Z.distance!==void 0?Z.distance=Q:Z.time!==void 0&&(Z.time=Q)),W()}document.addEventListener("mousemove",z),document.addEventListener("mouseup",O)})}s.appendChild(h)}),o.appendChild(e)}const H=document.createElement("div");H.style.position="relative",H.style.height="40px",H.style.background="#222",H.style.marginBottom="4px",H.style.paddingLeft="80px";const K=document.createElement("div");K.id="timeline-track",K.style.position="absolute",K.style.background="#444",K.style.left=Se+"px",K.style.top="0",K.style.right="0",K.style.bottom="0",H.appendChild(K),N.forEach((e,n)=>{const s=e.distance!==void 0?e.distance:e.time!==void 0?e.time:0,c=`event ${n}: ${JSON.stringify(e.params)}`,h=U(s,ne,{title:c});K.appendChild(h)}),o.appendChild(H),N.forEach((e,n)=>{const s=document.createElement("div");s.style.display="flex",s.style.flexDirection="column",s.style.marginBottom="4px";const c=document.createElement("div");c.style.display="flex",c.style.alignItems="center";const h=document.createElement("input");h.type="number",h.style.width="60px",h.value=e.distance!==void 0?e.distance:e.time!==void 0?e.time:0,h.addEventListener("change",()=>{const y=parseFloat(h.value);isNaN(y)||(e.distance!==void 0?e.distance=y:e.time=y,W())}),c.appendChild(h);const u=v(e);c.appendChild(u.element);const x=document.createElement("button");x.textContent="⚙",x.style.marginLeft="4px",c.appendChild(x);const m=document.createElement("button");m.textContent="✖",m.style.marginLeft="4px",m.addEventListener("click",()=>{const y=a.events.indexOf(N[n]);y!==-1&&(a.events.splice(y,1),D())}),c.appendChild(m),s.appendChild(c);let f;x.addEventListener("click",()=>{f?(f.remove(),f=null):(f=S(e,u.update),s.appendChild(f))}),o.appendChild(s)});const w=document.createElement("button");w.textContent="+ add event",w.addEventListener("click",()=>{l?(l.remove(),l=null):(l=P(),o.appendChild(l),o.scrollTop=o.scrollHeight)}),o.appendChild(w);const t=document.createElement("button");t.textContent="export JSON",t.style.marginLeft="8px",t.addEventListener("click",()=>{const e=JSON.stringify(a.events,null,2),n=new Blob([e],{type:"application/json"}),s=URL.createObjectURL(n),c=document.createElement("a");c.href=s,c.download="vis-config.json",c.click(),URL.revokeObjectURL(s)}),o.appendChild(t);const r=document.createElement("input");r.type="file",r.accept=".json",r.style.marginLeft="8px",r.addEventListener("change",e=>{const n=e.target.files[0];if(n){const s=new FileReader;s.onload=c=>{try{const h=JSON.parse(c.target.result);a.events=h,W()}catch(h){alert("Invalid JSON: "+h.message)}},s.readAsText(n)}}),o.appendChild(r)}function _(T){const M=o.querySelectorAll("div")[1+T];M&&M.scrollIntoView({behavior:"smooth",block:"center"})}function W(){a.events.sort((T,E)=>{const M=T.distance!==void 0?T.distance:T.time!==void 0?T.time:0,L=E.distance!==void 0?E.distance:E.time!==void 0?E.time:0;return M-L}),D()}D(),a._renderTimeline=D,a._updateDistanceMarker=G}function ft(i){return i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n/g,"<br>")}function pt(i){var o=ft(i);o=="WebGL not supported"&&(o='Your browser does not support WebGL.<br>Please see    <a href="http://www.khronos.org/webgl/wiki/Getting_a_WebGL_Implementation">    Getting a WebGL Implementation</a>.');var l=document.getElementById("loading");l.innerHTML=o,l.style.zIndex=1}window.onerror=pt;var Be,$;const gt=10,F=a.gl;var ve,Fe;B.initAttributes();function He(){document.getElementById("warning").hidden=!(a.resolution.x*a.resolution.y>3e5&&a.water&&a.params.visualizations.areaConservationEnabled)}let Re=0;function vt(i){Re+=i,Re>=1&&(document.getElementById("fps").innerText=`${(1/i).toFixed(1)} FPS`,Re=0)}function ce(){console.log("reset"),document.getElementById("resolution").innerText=`Resolution: ${a.resolution.x} x ${a.resolution.y}`,He(),ve=new g.Vector(0,-a.params.simulation.poolSize.z/2+1),a.water.reset(a.resolution),$.flagCenter=ve,$.flagSize=Fe,$.reset();const i=a.params.simulation.poolSize.x/gt;let o=a.params.simulation.poolSize.x/2-i/2;for(let l of a.swimmers)l.body.center.x=o,l.startingPoint.x=o,o-=i}function xt(i){const o=parseFloat(i.target.value);isNaN(o)||(a.setRaceTime(o),a.swimmers.forEach(l=>l.setCurrentDataIndex()))}window.onload=function(){var i=window.devicePixelRatio||1,o=document.getElementById("help");function l(){var e=innerWidth,n=innerHeight;F.canvas.width=e*i,F.canvas.height=n*i,F.canvas.style.width=e+"px",F.canvas.style.height=n+"px",F.viewport(0,0,F.canvas.width,F.canvas.height),F.matrixMode(F.PROJECTION),F.loadIdentity(),F.perspective(a.params.fov,F.canvas.width/F.canvas.height,.01,100),F.matrixMode(F.MODELVIEW),r()}document.body.appendChild(F.canvas),F.canvas.oncontextmenu=function(e){e.preventDefault()},F.clearColor(0,0,0,1),ve=new g.Vector(0,-a.params.simulation.poolSize.z/2+1),Fe=.7;const d=document.getElementById("time-slider");d&&d.addEventListener("input",xt);const p=document.getElementById("drop-zone");let v=0;document.addEventListener("dragenter",e=>{v++,p.style.display="flex"}),document.addEventListener("dragover",e=>{e.preventDefault(),e.dataTransfer.dropEffect="copy"}),document.addEventListener("dragleave",e=>{v--,v===0&&(p.style.display="none")}),ut(F,ce),a._reset=ce,setTimeout(()=>{mt("event-editor")},50),$=new ae(F,a.water,ve,Fe),Be=new Pe({xneg:document.getElementById("xneg"),xpos:document.getElementById("xpos"),yneg:document.getElementById("ypos"),ypos:document.getElementById("ypos"),zneg:document.getElementById("zneg"),zpos:document.getElementById("zpos")},F);const S=new B(new g.Vector(0,0,0));if(a.swimmers.push(S),a.water=new re(a.gl),!a.water.textureA.canDrawTo()||!a.water.textureB.canDrawTo())throw new Error("Rendering to floating-point textures is required but not supported");ce();for(var P=0;P<20;P++)a.water.addDrop(Math.random()*2-1,Math.random()*2-1,.06,P&1?.01:-.01);document.getElementById("loading").innerHTML="",l();var U=window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(e){setTimeout(e,0)},G=new Date().getTime();function D(){var e=new Date().getTime();a.paused||(t((e-G)/1e3),r()),G=e,U(D)}U(D),window.onresize=l;var _,W,T,E=-1,M=0,L=1,C=2;const N=3;var I,A;function q(e,n,s){if(I=e,A=n,!s||s.button===0){var c=new g.Raytracer,h=c.getRayForPixel(e*i,n*i),u=c.eye.add(h.multiply(-c.eye.y/h.y));for(let m of a.swimmers){var x=g.Raytracer.hitTestSphere(c.eye,h,m.body.center,m.body.radius);if(x){E=L,T=m,m.body.cinematic=!0,_=x.hit,W=c.getRayForPixel(F.canvas.width/2,F.canvas.height/2).negative();return}}Math.abs(u.x)<a.params.simulation.poolSize.x/2&&Math.abs(u.z)<a.params.simulation.poolSize.z/2&&(E=M,j(e,n))}else s.button===2?E=C:s.button===1&&(E=N)}function j(e,n,s){switch(E){case M:{var c=new g.Raytracer,h=c.getRayForPixel(e*i,n*i),u=c.eye.add(h.multiply(-c.eye.y/h.y));a.water.addDrop(u.x/a.params.simulation.poolSize.x*2,u.z/a.params.simulation.poolSize.z*2,.06,.03),a.paused&&(a.water.updateNormals(),$.updateCaustics(a.water));break}case L:{var c=new g.Raytracer,h=c.getRayForPixel(e*i,n*i),x=-W.dot(c.eye.subtract(_))/W.dot(h),m=c.eye.add(h.multiply(x));const R=T.body.center.add(m.subtract(_)),b=T.body.radius,z=Math.max(b-a.params.simulation.poolSize.x/2,Math.min(a.params.simulation.poolSize.x/2-b,R.x)),O=Math.max(b-a.params.simulation.poolSize.y,Math.min(10,R.y)),k=Math.max(b-a.params.simulation.poolSize.z/2,Math.min(a.params.simulation.poolSize.z/2-b,R.z));T.body.move(new g.Vector(z,O,k)),_=m,a.paused&&$.updateCaustics(a.water);break}case C:{if(s&&s.shiftKey){a.angleZ-=e-I,a.angleZ=Math.max(-89.999,Math.min(89.999,a.angleZ));break}a.angleY-=e-I,a.angleX-=n-A,a.angleX=Math.max(-89.999,Math.min(89.999,a.angleX));break}case N:{const f=.001*a.zoomDistance;a.translateX+=f*(e-I),a.translateY-=f*(n-A)}}I=e,A=n,a.paused&&r()}function Y(){E=-1,T&&(T.body.cinematic=!B.useGravity)}function V(e){return e===o||e.parentNode&&V(e.parentNode)}function J(e){return e&&(e.id==="event-editor"||e.parentNode&&J(e.parentNode))}function H(e){a.zoomDistance*=1-e*2e-4,a.zoomDistance=Math.max(2,Math.min(1e3,a.zoomDistance)),a.paused&&r()}addEventListener("wheel",function(e){if(!J(e.target)){var n=e.deltaY;H(-n)}}),document.onmousedown=function(e){F.canvas.focus(),V(e.target)||q(e.pageX,e.pageY,e)},document.onmousemove=function(e){j(e.pageX,e.pageY,e)},document.onmouseup=function(){Y()},document.ontouchstart=function(e){e.touches.length===1&&!V(e.target)&&(e.preventDefault(),q(e.touches[0].pageX,e.touches[0].pageY,!1))},document.ontouchmove=function(e){e.touches.length===1&&j(e.touches[0].pageX,e.touches[0].pageY)},document.ontouchend=function(e){e.touches.length==0&&Y()};function K(){a.paused?a.play():a.pause()}const w=function(e){if(e.which==32)K();else if(e.which==71){B.useGravity=!B.useGravity;for(let n of a.swimmers)n.body.cinematic=B.useGravity}else if(e.which==76&&a.paused)r();else if(e.which==74)a.swimmers.forEach(n=>n.jump(2));else if(e.which==67)a.params.visualizations.areaConservationEnabled=!a.params.visualizations.areaConservationEnabled,He(),console.log("Area conservation "+(a.params.visualizations.areaConservationEnabled?"enabled.":"disabled."));else if(e.which==80)a.water.showProjectionGrid=!a.water.showProjectionGrid,console.log("Projection grid "+(a.water.showProjectionGrid?"enabled.":"disabled."));else if(e.which==65)a.water.showAreaConservedGrid=!a.water.showAreaConservedGrid,console.log("Area conserved grid "+(a.water.showAreaConservedGrid?"enabled.":"disabled."));else if(e.which==83){if(B.swimming=!B.swimming,B.swimming)for(let n of a.swimmers)n.swim(!0);else stopRace();console.log("Swimming "+(B.swimming?"enabled.":"disabled."))}else e.which==86?a.params.video.show=!a.params.video.show:e.which==72?(document.getElementById("commands").hidden=!document.getElementById("commands").hidden,document.getElementById("h").hidden=!document.getElementById("h").hidden):e.which==40?(a.resolution.x>129&&(a.resolution.x=Math.round(a.resolution.x/2)),ce(),console.log("decreasing x resolution")):e.which==38?(a.resolution.x<16384&&(a.resolution.x=Math.round(a.resolution.x*2)),ce(),console.log("increasing x resolution")):e.which==37?(a.resolution.y>129&&(a.resolution.y=Math.round(a.resolution.y/2)),ce(),console.log("decreasing y resolution")):e.which==39&&(a.resolution.y<16384&&(a.resolution.y=Math.round(a.resolution.y*2)),ce(),console.log("increasing y resolution"))};F.canvas.addEventListener("keydown",w);function t(e){if(!(e>1)){if(E==L)for(let n of a.swimmers)n.body.velocity=new g.Vector(0,0,0);F.clearColor(0,0,0,1),F.clear(F.COLOR_BUFFER_BIT|F.DEPTH_BUFFER_BIT);for(let n of a.swimmers)n.update(e);a.water.updateSpheres(e);for(let n=0;n<a.params.numSteps;n++)a.water.stepSimulation();$.updateCaustics(a.water),a.updateTime(e),a.updateParams(),d.value=a.getRaceTime(),vt(e)}}function r(){g.keys.L&&($.lightDir=g.Vector.fromAngles((90-a.angleY)*Math.PI/180,-a.angleX*Math.PI/180),a.paused&&$.updateCaustics(a.water)),a.isOneVisualizationEnabled()&&B.updateAttributesTexture(),a.water.addOrRemoveVisualizationWaves(!0),a.water.updateNormals(),F.clearColor(.1,.2,.5,1),F.clear(F.COLOR_BUFFER_BIT|F.DEPTH_BUFFER_BIT),F.loadIdentity(),F.translate(a.translateX,a.translateY,-a.zoomDistance),F.rotate(-a.angleZ,0,0,1),F.rotate(-a.angleX,1,0,0),F.rotate(-a.angleY,0,1,0),F.translate(0,.5,0),F.enable(F.DEPTH_TEST),$.sphereCenter=a.swimmers[0].body.center,$.sphereRadius=a.swimmers[0].body.radius,$.renderCube(a.water),$.renderWater(a.water,Be,a.params.visualizations.shadow),a.params.swimmers.showSpheres&&$.renderSpheres(a.water),a.renderVideo(),F.disable(F.DEPTH_TEST),a.water.addOrRemoveVisualizationWaves(!1)}};
//# sourceMappingURL=swimming-B3HlB5PH.js.map
