var Le=Object.defineProperty;var Oe=(r,s,u)=>s in r?Le(r,s,{enumerable:!0,configurable:!0,writable:!0,value:u}):r[s]=u;var H=(r,s,u)=>Oe(r,typeof s!="symbol"?s+"":s,u);import"./modulepreload-polyfill-B5Qt9EMX.js";import{g as Ne}from"./lil-gui.module.min-Vka56b52.js";var g=function(){var r,s={create:function(t){t=t||{};var i=document.createElement("canvas");i.width=800,i.height=600,"alpha"in t||(t.alpha=!1);try{r=i.getContext("webgl",t)}catch{}try{r=r||i.getContext("experimental-webgl",t)}catch{}if(!r)throw new Error("WebGL not supported");return r.HALF_FLOAT_OES=36193,u(),m(),_(),$(),r},keys:{},Matrix:y,Indexer:k,Buffer:W,Mesh:N,HitTest:G,Raytracer:X,Shader:ae,Texture:P,Vector:v};function u(){r.MODELVIEW=te|1,r.PROJECTION=te|2;var t=new y,i=new y;r.modelviewMatrix=new y,r.projectionMatrix=new y;var e=[],o=[],a,l;r.matrixMode=function(d){switch(d){case r.MODELVIEW:a="modelviewMatrix",l=e;break;case r.PROJECTION:a="projectionMatrix",l=o;break;default:throw new Error("invalid matrix mode "+d)}},r.loadIdentity=function(){y.identity(r[a])},r.loadMatrix=function(d){for(var n=d.m,h=r[a].m,f=0;f<16;f++)h[f]=n[f]},r.multMatrix=function(d){r.loadMatrix(y.multiply(r[a],d,i))},r.perspective=function(d,n,h,f){r.multMatrix(y.perspective(d,n,h,f,t))},r.frustum=function(d,n,h,f,c,p){r.multMatrix(y.frustum(d,n,h,f,c,p,t))},r.ortho=function(d,n,h,f,c,p){r.multMatrix(y.ortho(d,n,h,f,c,p,t))},r.scale=function(d,n,h){r.multMatrix(y.scale(d,n,h,t))},r.translate=function(d,n,h){r.multMatrix(y.translate(d,n,h,t))},r.rotate=function(d,n,h,f){r.multMatrix(y.rotate(d,n,h,f,t))},r.lookAt=function(d,n,h,f,c,p,E,x,w){r.multMatrix(y.lookAt(d,n,h,f,c,p,E,x,w,t))},r.pushMatrix=function(){l.push(Array.prototype.slice.call(r[a].m))},r.popMatrix=function(){var d=l.pop();r[a].m=B?new Float32Array(d):d},r.project=function(d,n,h,f,c,p){f=f||r.modelviewMatrix,c=c||r.projectionMatrix,p=p||r.getParameter(r.VIEWPORT);var E=c.transformPoint(f.transformPoint(new v(d,n,h)));return new v(p[0]+p[2]*(E.x*.5+.5),p[1]+p[3]*(E.y*.5+.5),E.z*.5+.5)},r.unProject=function(d,n,h,f,c,p){f=f||r.modelviewMatrix,c=c||r.projectionMatrix,p=p||r.getParameter(r.VIEWPORT);var E=new v((d-p[0])/p[2]*2-1,(n-p[1])/p[3]*2-1,h*2-1);return y.inverse(y.multiply(c,f,t),i).transformPoint(E)},r.matrixMode(r.MODELVIEW)}function m(){var t={mesh:new N({coords:!0,colors:!0,triangles:!1}),mode:-1,coord:[0,0,0,0],color:[1,1,1,1],shader:new ae("      uniform float pointSize;      varying vec4 color;      varying vec4 coord;      void main() {        color = gl_Color;        coord = gl_TexCoord;        gl_Position = gl_ModelViewProjectionMatrix * gl_Vertex;        gl_PointSize = pointSize;      }    ","      uniform sampler2D texture;      uniform float pointSize;      uniform bool useTexture;      varying vec4 color;      varying vec4 coord;      void main() {        gl_FragColor = color;        if (useTexture) gl_FragColor *= texture2D(texture, coord.xy);      }    ")};r.pointSize=function(i){t.shader.uniforms({pointSize:i})},r.begin=function(i){if(t.mode!=-1)throw new Error("mismatched gl.begin() and gl.end() calls");t.mode=i,t.mesh.colors=[],t.mesh.coords=[],t.mesh.vertices=[]},r.color=function(i,e,o,a){t.color=arguments.length==1?i.toArray().concat(1):[i,e,o,a||1]},r.texCoord=function(i,e){t.coord=arguments.length==1?i.toArray(2):[i,e]},r.vertex=function(i,e,o){t.mesh.colors.push(t.color),t.mesh.coords.push(t.coord),t.mesh.vertices.push(arguments.length==1?i.toArray():[i,e,o])},r.end=function(){if(t.mode==-1)throw new Error("mismatched gl.begin() and gl.end() calls");t.mesh.compile(),t.shader.uniforms({useTexture:!!r.getParameter(r.TEXTURE_BINDING_2D)}).draw(t.mesh,t.mode),t.mode=-1}}function _(){var t=r,i=0,e=0,o={},a=!1,l=Object.prototype.hasOwnProperty;function d(){for(var x in o)if(l.call(o,x)&&o[x])return!0;return!1}function n(x){var w={};for(var z in x)typeof x[z]=="function"?w[z]=function(Z){return function(){Z.apply(x,arguments)}}(x[z]):w[z]=x[z];w.original=x,w.x=w.pageX,w.y=w.pageY;for(var M=r.canvas;M;M=M.offsetParent)w.x-=M.offsetLeft,w.y-=M.offsetTop;return a?(w.deltaX=w.x-i,w.deltaY=w.y-e):(w.deltaX=0,w.deltaY=0,a=!0),i=w.x,e=w.y,w.dragging=d(),w.preventDefault=function(){w.original.preventDefault()},w.stopPropagation=function(){w.original.stopPropagation()},w}function h(x){r=t,d()||(A(document,"mousemove",f),A(document,"mouseup",c),I(r.canvas,"mousemove",f),I(r.canvas,"mouseup",c)),o[x.which]=!0,x=n(x),r.onmousedown&&r.onmousedown(x),x.preventDefault()}function f(x){r=t,x=n(x),r.onmousemove&&r.onmousemove(x),x.preventDefault()}function c(x){r=t,o[x.which]=!1,d()||(I(document,"mousemove",f),I(document,"mouseup",c),A(r.canvas,"mousemove",f),A(r.canvas,"mouseup",c)),x=n(x),r.onmouseup&&r.onmouseup(x),x.preventDefault()}function p(){a=!1}function E(){o={},a=!1}A(r.canvas,"mousedown",h),A(r.canvas,"mousemove",f),A(r.canvas,"mouseup",c),A(r.canvas,"mouseover",p),A(r.canvas,"mouseout",p),A(document,"contextmenu",E)}function b(t){var i={8:"BACKSPACE",9:"TAB",13:"ENTER",16:"SHIFT",27:"ESCAPE",32:"SPACE",37:"LEFT",38:"UP",39:"RIGHT",40:"DOWN"};return i[t]||(t>=65&&t<=90?String.fromCharCode(t):null)}function A(t,i,e){t.addEventListener(i,e)}function I(t,i,e){t.removeEventListener(i,e)}A(document,"keydown",function(t){if(!t.altKey&&!t.ctrlKey&&!t.metaKey){var i=b(t.keyCode);i&&(s.keys[i]=!0),s.keys[t.keyCode]=!0}}),A(document,"keyup",function(t){if(!t.altKey&&!t.ctrlKey&&!t.metaKey){var i=b(t.keyCode);i&&(s.keys[i]=!1),s.keys[t.keyCode]=!1}});function $(){(function(t){r.makeCurrent=function(){r=t}})(r),r.animate=function(){var t=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(a){setTimeout(a,16.666666666666668)},i=new Date().getTime(),e=r;function o(){r=e;var a=new Date().getTime();r.onupdate&&r.onupdate((a-i)/1e3),r.ondraw&&r.ondraw(),t(o),i=a}o()},r.fullscreen=function(t){t=t||{};var i=t.paddingTop||0,e=t.paddingLeft||0,o=t.paddingRight||0,a=t.paddingBottom||0;if(!document.body)throw new Error("document.body doesn't exist yet (call gl.fullscreen() from window.onload() or from inside the <body> tag)");document.body.appendChild(r.canvas),document.body.style.overflow="hidden",r.canvas.style.position="absolute",r.canvas.style.left=e+"px",r.canvas.style.top=i+"px";function l(){r.canvas.width=window.innerWidth-e-o,r.canvas.height=window.innerHeight-i-a,r.viewport(0,0,r.canvas.width,r.canvas.height),(t.camera||!("camera"in t))&&(r.matrixMode(r.PROJECTION),r.loadIdentity(),r.perspective(t.fov||45,r.canvas.width/r.canvas.height,t.near||.1,t.far||1e3),r.matrixMode(r.MODELVIEW)),r.ondraw&&r.ondraw()}A(window,"resize",l),l()}}var te=305397760,B=typeof Float32Array<"u";function y(){var t=Array.prototype.concat.apply([],arguments);t.length||(t=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),this.m=B?new Float32Array(t):t}y.prototype={inverse:function(){return y.inverse(this,new y)},transpose:function(){return y.transpose(this,new y)},multiply:function(t){return y.multiply(this,t,new y)},transformPoint:function(t){var i=this.m;return new v(i[0]*t.x+i[1]*t.y+i[2]*t.z+i[3],i[4]*t.x+i[5]*t.y+i[6]*t.z+i[7],i[8]*t.x+i[9]*t.y+i[10]*t.z+i[11]).divide(i[12]*t.x+i[13]*t.y+i[14]*t.z+i[15])},transformVector:function(t){var i=this.m;return new v(i[0]*t.x+i[1]*t.y+i[2]*t.z,i[4]*t.x+i[5]*t.y+i[6]*t.z,i[8]*t.x+i[9]*t.y+i[10]*t.z)}},y.inverse=function(t,i){i=i||new y;var e=t.m,o=i.m;o[0]=e[5]*e[10]*e[15]-e[5]*e[14]*e[11]-e[6]*e[9]*e[15]+e[6]*e[13]*e[11]+e[7]*e[9]*e[14]-e[7]*e[13]*e[10],o[1]=-e[1]*e[10]*e[15]+e[1]*e[14]*e[11]+e[2]*e[9]*e[15]-e[2]*e[13]*e[11]-e[3]*e[9]*e[14]+e[3]*e[13]*e[10],o[2]=e[1]*e[6]*e[15]-e[1]*e[14]*e[7]-e[2]*e[5]*e[15]+e[2]*e[13]*e[7]+e[3]*e[5]*e[14]-e[3]*e[13]*e[6],o[3]=-e[1]*e[6]*e[11]+e[1]*e[10]*e[7]+e[2]*e[5]*e[11]-e[2]*e[9]*e[7]-e[3]*e[5]*e[10]+e[3]*e[9]*e[6],o[4]=-e[4]*e[10]*e[15]+e[4]*e[14]*e[11]+e[6]*e[8]*e[15]-e[6]*e[12]*e[11]-e[7]*e[8]*e[14]+e[7]*e[12]*e[10],o[5]=e[0]*e[10]*e[15]-e[0]*e[14]*e[11]-e[2]*e[8]*e[15]+e[2]*e[12]*e[11]+e[3]*e[8]*e[14]-e[3]*e[12]*e[10],o[6]=-e[0]*e[6]*e[15]+e[0]*e[14]*e[7]+e[2]*e[4]*e[15]-e[2]*e[12]*e[7]-e[3]*e[4]*e[14]+e[3]*e[12]*e[6],o[7]=e[0]*e[6]*e[11]-e[0]*e[10]*e[7]-e[2]*e[4]*e[11]+e[2]*e[8]*e[7]+e[3]*e[4]*e[10]-e[3]*e[8]*e[6],o[8]=e[4]*e[9]*e[15]-e[4]*e[13]*e[11]-e[5]*e[8]*e[15]+e[5]*e[12]*e[11]+e[7]*e[8]*e[13]-e[7]*e[12]*e[9],o[9]=-e[0]*e[9]*e[15]+e[0]*e[13]*e[11]+e[1]*e[8]*e[15]-e[1]*e[12]*e[11]-e[3]*e[8]*e[13]+e[3]*e[12]*e[9],o[10]=e[0]*e[5]*e[15]-e[0]*e[13]*e[7]-e[1]*e[4]*e[15]+e[1]*e[12]*e[7]+e[3]*e[4]*e[13]-e[3]*e[12]*e[5],o[11]=-e[0]*e[5]*e[11]+e[0]*e[9]*e[7]+e[1]*e[4]*e[11]-e[1]*e[8]*e[7]-e[3]*e[4]*e[9]+e[3]*e[8]*e[5],o[12]=-e[4]*e[9]*e[14]+e[4]*e[13]*e[10]+e[5]*e[8]*e[14]-e[5]*e[12]*e[10]-e[6]*e[8]*e[13]+e[6]*e[12]*e[9],o[13]=e[0]*e[9]*e[14]-e[0]*e[13]*e[10]-e[1]*e[8]*e[14]+e[1]*e[12]*e[10]+e[2]*e[8]*e[13]-e[2]*e[12]*e[9],o[14]=-e[0]*e[5]*e[14]+e[0]*e[13]*e[6]+e[1]*e[4]*e[14]-e[1]*e[12]*e[6]-e[2]*e[4]*e[13]+e[2]*e[12]*e[5],o[15]=e[0]*e[5]*e[10]-e[0]*e[9]*e[6]-e[1]*e[4]*e[10]+e[1]*e[8]*e[6]+e[2]*e[4]*e[9]-e[2]*e[8]*e[5];for(var a=e[0]*o[0]+e[1]*o[4]+e[2]*o[8]+e[3]*o[12],l=0;l<16;l++)o[l]/=a;return i},y.transpose=function(t,i){i=i||new y;var e=t.m,o=i.m;return o[0]=e[0],o[1]=e[4],o[2]=e[8],o[3]=e[12],o[4]=e[1],o[5]=e[5],o[6]=e[9],o[7]=e[13],o[8]=e[2],o[9]=e[6],o[10]=e[10],o[11]=e[14],o[12]=e[3],o[13]=e[7],o[14]=e[11],o[15]=e[15],i},y.multiply=function(t,i,e){e=e||new y;var o=t.m,a=i.m,l=e.m;return l[0]=o[0]*a[0]+o[1]*a[4]+o[2]*a[8]+o[3]*a[12],l[1]=o[0]*a[1]+o[1]*a[5]+o[2]*a[9]+o[3]*a[13],l[2]=o[0]*a[2]+o[1]*a[6]+o[2]*a[10]+o[3]*a[14],l[3]=o[0]*a[3]+o[1]*a[7]+o[2]*a[11]+o[3]*a[15],l[4]=o[4]*a[0]+o[5]*a[4]+o[6]*a[8]+o[7]*a[12],l[5]=o[4]*a[1]+o[5]*a[5]+o[6]*a[9]+o[7]*a[13],l[6]=o[4]*a[2]+o[5]*a[6]+o[6]*a[10]+o[7]*a[14],l[7]=o[4]*a[3]+o[5]*a[7]+o[6]*a[11]+o[7]*a[15],l[8]=o[8]*a[0]+o[9]*a[4]+o[10]*a[8]+o[11]*a[12],l[9]=o[8]*a[1]+o[9]*a[5]+o[10]*a[9]+o[11]*a[13],l[10]=o[8]*a[2]+o[9]*a[6]+o[10]*a[10]+o[11]*a[14],l[11]=o[8]*a[3]+o[9]*a[7]+o[10]*a[11]+o[11]*a[15],l[12]=o[12]*a[0]+o[13]*a[4]+o[14]*a[8]+o[15]*a[12],l[13]=o[12]*a[1]+o[13]*a[5]+o[14]*a[9]+o[15]*a[13],l[14]=o[12]*a[2]+o[13]*a[6]+o[14]*a[10]+o[15]*a[14],l[15]=o[12]*a[3]+o[13]*a[7]+o[14]*a[11]+o[15]*a[15],e},y.identity=function(t){t=t||new y;var i=t.m;return i[0]=i[5]=i[10]=i[15]=1,i[1]=i[2]=i[3]=i[4]=i[6]=i[7]=i[8]=i[9]=i[11]=i[12]=i[13]=i[14]=0,t},y.perspective=function(t,i,e,o,a){var l=Math.tan(t*Math.PI/360)*e,d=l*i;return y.frustum(-d,d,-l,l,e,o,a)},y.frustum=function(t,i,e,o,a,l,d){d=d||new y;var n=d.m;return n[0]=2*a/(i-t),n[1]=0,n[2]=(i+t)/(i-t),n[3]=0,n[4]=0,n[5]=2*a/(o-e),n[6]=(o+e)/(o-e),n[7]=0,n[8]=0,n[9]=0,n[10]=-(l+a)/(l-a),n[11]=-2*l*a/(l-a),n[12]=0,n[13]=0,n[14]=-1,n[15]=0,d},y.ortho=function(t,i,e,o,a,l,d){d=d||new y;var n=d.m;return n[0]=2/(i-t),n[1]=0,n[2]=0,n[3]=-(i+t)/(i-t),n[4]=0,n[5]=2/(o-e),n[6]=0,n[7]=-(o+e)/(o-e),n[8]=0,n[9]=0,n[10]=-2/(l-a),n[11]=-(l+a)/(l-a),n[12]=0,n[13]=0,n[14]=0,n[15]=1,d},y.scale=function(t,i,e,o){o=o||new y;var a=o.m;return a[0]=t,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=i,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=e,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,o},y.translate=function(t,i,e,o){o=o||new y;var a=o.m;return a[0]=1,a[1]=0,a[2]=0,a[3]=t,a[4]=0,a[5]=1,a[6]=0,a[7]=i,a[8]=0,a[9]=0,a[10]=1,a[11]=e,a[12]=0,a[13]=0,a[14]=0,a[15]=1,o},y.rotate=function(t,i,e,o,a){if(!t||!i&&!e&&!o)return y.identity(a);a=a||new y;var l=a.m,d=Math.sqrt(i*i+e*e+o*o);t*=Math.PI/180,i/=d,e/=d,o/=d;var n=Math.cos(t),h=Math.sin(t),f=1-n;return l[0]=i*i*f+n,l[1]=i*e*f-o*h,l[2]=i*o*f+e*h,l[3]=0,l[4]=e*i*f+o*h,l[5]=e*e*f+n,l[6]=e*o*f-i*h,l[7]=0,l[8]=o*i*f-e*h,l[9]=o*e*f+i*h,l[10]=o*o*f+n,l[11]=0,l[12]=0,l[13]=0,l[14]=0,l[15]=1,a},y.lookAt=function(t,i,e,o,a,l,d,n,h,f){f=f||new y;var c=f.m,p=new v(t,i,e),E=new v(o,a,l),x=new v(d,n,h),w=p.subtract(E).unit(),z=x.cross(w).unit(),M=w.cross(z).unit();return c[0]=z.x,c[1]=z.y,c[2]=z.z,c[3]=-z.dot(p),c[4]=M.x,c[5]=M.y,c[6]=M.z,c[7]=-M.dot(p),c[8]=w.x,c[9]=w.y,c[10]=w.z,c[11]=-w.dot(p),c[12]=0,c[13]=0,c[14]=0,c[15]=1,f};function k(){this.unique=[],this.indices=[],this.map={}}k.prototype={add:function(t){var i=JSON.stringify(t);return i in this.map||(this.map[i]=this.unique.length,this.unique.push(t)),this.map[i]}};function W(t,i){this.buffer=null,this.target=t,this.type=i,this.data=[]}W.prototype={compile:function(t){for(var i=[],e=0,o=1e4;e<this.data.length;e+=o)i=Array.prototype.concat.apply(i,this.data.slice(e,e+o));var a=this.data.length?i.length/this.data.length:0;if(a!=Math.round(a))throw new Error("buffer elements not of consistent size, average size is "+a);this.buffer=this.buffer||r.createBuffer(),this.buffer.length=i.length,this.buffer.spacing=a,r.bindBuffer(this.target,this.buffer),r.bufferData(this.target,new this.type(i),t||r.STATIC_DRAW)}};function N(t){t=t||{},this.vertexBuffers={},this.indexBuffers={},this.addVertexBuffer("vertices","gl_Vertex"),t.coords&&this.addVertexBuffer("coords","gl_TexCoord"),t.normals&&this.addVertexBuffer("normals","gl_Normal"),t.colors&&this.addVertexBuffer("colors","gl_Color"),(!("triangles"in t)||t.triangles)&&this.addIndexBuffer("triangles"),t.lines&&this.addIndexBuffer("lines")}N.prototype={addVertexBuffer:function(t,i){var e=this.vertexBuffers[i]=new W(r.ARRAY_BUFFER,Float32Array);e.name=t,this[t]=[]},addIndexBuffer:function(t){this.indexBuffers[t]=new W(r.ELEMENT_ARRAY_BUFFER,Uint16Array),this[t]=[]},compile:function(){for(var t in this.vertexBuffers){var i=this.vertexBuffers[t];i.data=this[i.name],i.compile()}for(var e in this.indexBuffers){var i=this.indexBuffers[e];i.data=this[e],i.compile()}},transform:function(t){if(this.vertices=this.vertices.map(function(e){return t.transformPoint(v.fromArray(e)).toArray()}),this.normals){var i=t.inverse().transpose();this.normals=this.normals.map(function(e){return i.transformVector(v.fromArray(e)).unit().toArray()})}return this.compile(),this},computeNormals:function(){this.normals||this.addVertexBuffer("normals","gl_Normal");for(var t=0;t<this.vertices.length;t++)this.normals[t]=new v;for(var t=0;t<this.triangles.length;t++){var i=this.triangles[t],e=v.fromArray(this.vertices[i[0]]),o=v.fromArray(this.vertices[i[1]]),a=v.fromArray(this.vertices[i[2]]),l=o.subtract(e).cross(a.subtract(e)).unit();this.normals[i[0]]=this.normals[i[0]].add(l),this.normals[i[1]]=this.normals[i[1]].add(l),this.normals[i[2]]=this.normals[i[2]].add(l)}for(var t=0;t<this.vertices.length;t++)this.normals[t]=this.normals[t].unit().toArray();return this.compile(),this},computeWireframe:function(){for(var t=new k,i=0;i<this.triangles.length;i++)for(var e=this.triangles[i],o=0;o<e.length;o++){var a=e[o],l=e[(o+1)%e.length];t.add([Math.min(a,l),Math.max(a,l)])}return this.lines||this.addIndexBuffer("lines"),this.lines=t.unique,this.compile(),this},getAABB:function(){var t={min:new v(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)};t.max=t.min.negative();for(var i=0;i<this.vertices.length;i++){var e=v.fromArray(this.vertices[i]);t.min=v.min(t.min,e),t.max=v.max(t.max,e)}return t},getBoundingSphere:function(){for(var t=this.getAABB(),i={center:t.min.add(t.max).divide(2),radius:0},e=0;e<this.vertices.length;e++)i.radius=Math.max(i.radius,v.fromArray(this.vertices[e]).subtract(i.center).length());return i}},N.plane=function(t){t=t||{};for(var i=new N(t),e=t.detailX||t.detail||1,o=t.detailY||t.detail||1,a=t.width||2,l=t.height||2,d=0;d<=o;d++)for(var n=d/o,h=0;h<=e;h++){var f=h/e;if(i.vertices.push([(f-.5)*a,(n-.5)*l,0]),i.coords&&i.coords.push([f,n]),i.normals&&i.normals.push([0,0,1]),h<e&&d<o){var c=h+d*(e+1);i.triangles.push([c,c+1,c+e+1]),i.triangles.push([c+e+1,c+1,c+e+2])}}return i.compile(),i};var oe=[[0,4,2,6,-1,0,0],[1,3,5,7,1,0,0],[0,1,4,5,0,-1,0],[2,6,3,7,0,1,0],[0,2,1,3,0,0,-1],[4,5,6,7,0,0,1]];function V(t){return new v((t&1)*2-1,(t&2)-1,(t&4)/2-1)}N.cube=function(t){for(var i=new N(t),e=t&&t.width||2,o=t&&t.height||2,a=t&&t.depth||2,l=0;l<oe.length;l++){for(var d=oe[l],n=l*4,h=0;h<4;h++){var f=d[h];const c=V(f).toArray();c[0]*=e/2,c[1]*=o/2,c[2]*=a/2,i.vertices.push(c),i.coords&&i.coords.push([h&1,(h&2)/2]),i.normals&&i.normals.push(d.slice(4,7))}i.triangles.push([n,n+1,n+2]),i.triangles.push([n+2,n+1,n+3])}return i.compile(),i},N.sphere=function(t){function i(M,Z,J){return h?[M,J,Z]:[M,Z,J]}function e(M){return M+(M-M*M)/2}t=t||{};for(var o=new N(t),a=new k,l=t.detail||6,d=0;d<8;d++)for(var n=V(d),h=n.x*n.y*n.z>0,f=[],c=0;c<=l;c++){for(var p=0;c+p<=l;p++){var E=c/l,x=p/l,w=(l-c-p)/l,z={vertex:new v(e(E),e(x),e(w)).unit().multiply(n).toArray()};o.coords&&(z.coord=n.y>0?[1-E,w]:[w,1-E]),f.push(a.add(z))}if(c>0)for(var p=0;c+p<=l;p++){var E=(c-1)*(l+1)+(c-1-(c-1)*(c-1))/2+p,x=c*(l+1)+(c-c*c)/2+p;o.triangles.push(i(f[E],f[E+1],f[x])),c+p<l&&o.triangles.push(i(f[x],f[E+1],f[x+1]))}}return o.vertices=a.unique.map(function(M){return M.vertex}),o.coords&&(o.coords=a.unique.map(function(M){return M.coord})),o.normals&&(o.normals=o.vertices),o.compile(),o},N.load=function(t,i){i=i||{},"coords"in i||(i.coords=!!t.coords),"normals"in i||(i.normals=!!t.normals),"colors"in i||(i.colors=!!t.colors),"triangles"in i||(i.triangles=!!t.triangles),"lines"in i||(i.lines=!!t.lines);var e=new N(i);return e.vertices=t.vertices,e.coords&&(e.coords=t.coords),e.normals&&(e.normals=t.normals),e.colors&&(e.colors=t.colors),e.triangles&&(e.triangles=t.triangles),e.lines&&(e.lines=t.lines),e.compile(),e};function G(t,i,e){this.t=arguments.length?t:Number.MAX_VALUE,this.hit=i,this.normal=e}G.prototype={mergeWith:function(t){t.t>0&&t.t<this.t&&(this.t=t.t,this.hit=t.hit,this.normal=t.normal)}};function X(){var t=r.getParameter(r.VIEWPORT),i=r.modelviewMatrix.m,e=new v(i[0],i[4],i[8]),o=new v(i[1],i[5],i[9]),a=new v(i[2],i[6],i[10]),l=new v(i[3],i[7],i[11]);this.eye=new v(-l.dot(e),-l.dot(o),-l.dot(a));var d=t[0],n=d+t[2],h=t[1],f=h+t[3];this.ray00=r.unProject(d,h,1).subtract(this.eye),this.ray10=r.unProject(n,h,1).subtract(this.eye),this.ray01=r.unProject(d,f,1).subtract(this.eye),this.ray11=r.unProject(n,f,1).subtract(this.eye),this.viewport=t}X.prototype={getRayForPixel:function(t,i){t=(t-this.viewport[0])/this.viewport[2],i=1-(i-this.viewport[1])/this.viewport[3];var e=v.lerp(this.ray00,this.ray10,t),o=v.lerp(this.ray01,this.ray11,t);return v.lerp(e,o,i).unit()}},X.hitTestBox=function(t,i,e,o){var a=e.subtract(t).divide(i),l=o.subtract(t).divide(i),d=v.min(a,l),n=v.max(a,l),h=d.max(),f=n.min();if(h>0&&h<f){var c=1e-6,p=t.add(i.multiply(h));return e=e.add(c),o=o.subtract(c),new G(h,p,new v((p.x>o.x)-(p.x<e.x),(p.y>o.y)-(p.y<e.y),(p.z>o.z)-(p.z<e.z)))}return null},X.hitTestSphere=function(t,i,e,o){var a=t.subtract(e),l=i.dot(i),d=2*i.dot(a),n=a.dot(a)-o*o,h=d*d-4*l*n;if(h>0){var f=(-d-Math.sqrt(h))/(2*l),c=t.add(i.multiply(f));return new G(f,c,c.subtract(e).divide(o))}return null},X.hitTestTriangle=function(t,i,e,o,a){var l=o.subtract(e),d=a.subtract(e),n=l.cross(d).unit(),h=n.dot(e.subtract(t))/n.dot(i);if(h>0){var f=t.add(i.multiply(h)),c=f.subtract(e),p=d.dot(d),E=d.dot(l),x=d.dot(c),w=l.dot(l),z=l.dot(c),M=p*w-E*E,Z=(w*x-E*z)/M,J=(p*z-E*x)/M;if(Z>=0&&J>=0&&Z+J<=1)return new G(h,f,n)}return null};function Y(t,i,e){let o;for(;(o=t.exec(i))!=null;)e(o)}var ne="LIGHTGL";function ae(t,i){function e(p){var E=document.getElementById(p);return E?E.text:p}t=e(t),i=e(i);var o="    uniform mat3 gl_NormalMatrix;    uniform mat4 gl_ModelViewMatrix;    uniform mat4 gl_ProjectionMatrix;    uniform mat4 gl_ModelViewProjectionMatrix;    uniform mat4 gl_ModelViewMatrixInverse;    uniform mat4 gl_ProjectionMatrixInverse;    uniform mat4 gl_ModelViewProjectionMatrixInverse;  ",a=o+"    attribute vec4 gl_Vertex;    attribute vec4 gl_TexCoord;    attribute vec3 gl_Normal;    attribute vec4 gl_Color;    vec4 ftransform() {      return gl_ModelViewProjectionMatrix * gl_Vertex;    }  ",l="    precision highp float;  "+o,d=t+i,n={};Y(/\b(gl_[^;]*)\b;/g,o,function(p){var E=p[1];if(d.indexOf(E)!=-1){var x=E.replace(/[a-z_]/g,"");n[x]=ne+E}}),d.indexOf("ftransform")!=-1&&(n.MVPM=ne+"gl_ModelViewProjectionMatrix"),this.usedMatrices=n;function h(p,E){var x={},w=/^((\s*\/\/.*\n|\s*#extension.*\n)+)[^]*$/.exec(E);return E=w?w[1]+p+E.substr(w[1].length):p+E,Y(/\bgl_\w+\b/g,p,function(z){z in x||(E=E.replace(new RegExp("\\b"+z+"\\b","g"),ne+z),x[z]=!0)}),E}t=h(a,t),i=h(l,i);function f(p,E){var x=r.createShader(p);if(r.shaderSource(x,E),r.compileShader(x),!r.getShaderParameter(x,r.COMPILE_STATUS))throw new Error("compile error: "+r.getShaderInfoLog(x));return x}if(this.program=r.createProgram(),r.attachShader(this.program,f(r.VERTEX_SHADER,t)),r.attachShader(this.program,f(r.FRAGMENT_SHADER,i)),r.linkProgram(this.program),!r.getProgramParameter(this.program,r.LINK_STATUS))throw new Error("link error: "+r.getProgramInfoLog(this.program));this.attributes={},this.uniformLocations={};var c={};Y(/uniform\s+sampler(1D|2D|3D|Cube)\s+(\w+)\s*;/g,t+i,function(p){c[p[2]]=1}),this.isSampler=c}function ve(t){var i=Object.prototype.toString.call(t);return i=="[object Array]"||i=="[object Float32Array]"}function pe(t){var i=Object.prototype.toString.call(t);return i=="[object Number]"||i=="[object Boolean]"}new y,new y,ae.prototype={uniforms:function(t){r.useProgram(this.program);for(var i in t){var e=this.uniformLocations[i]||r.getUniformLocation(this.program,i);if(e){this.uniformLocations[i]=e;var o=t[i];if(o instanceof v?o=[o.x,o.y,o.z]:o instanceof y&&(o=o.m),ve(o))switch(o.length){case 1:r.uniform1fv(e,new Float32Array(o));break;case 2:r.uniform2fv(e,new Float32Array(o));break;case 3:r.uniform3fv(e,new Float32Array(o));break;case 4:r.uniform4fv(e,new Float32Array(o));break;case 9:r.uniformMatrix3fv(e,!1,new Float32Array([o[0],o[3],o[6],o[1],o[4],o[7],o[2],o[5],o[8]]));break;case 16:r.uniformMatrix4fv(e,!1,new Float32Array([o[0],o[4],o[8],o[12],o[1],o[5],o[9],o[13],o[2],o[6],o[10],o[14],o[3],o[7],o[11],o[15]]));break;default:throw new Error(`don't know how to load uniform "`+i+'" of length '+o.length)}else if(pe(o))(this.isSampler[i]?r.uniform1i:r.uniform1f).call(r,e,o);else throw new Error('attempted to set uniform "'+i+'" to invalid value '+o)}}return this},draw:function(t,i){this.drawBuffers(t.vertexBuffers,t.indexBuffers[i==r.LINES?"lines":"triangles"],arguments.length<2?r.TRIANGLES:i)},drawBuffers:function(t,i,e){var o=this.usedMatrices,a=r.modelviewMatrix,l=r.projectionMatrix,d=o.MVMI||o.NM?a.inverse():null,n=o.PMI?l.inverse():null,h=o.MVPM||o.MVPMI?l.multiply(a):null,f={};if(o.MVM&&(f[o.MVM]=a),o.MVMI&&(f[o.MVMI]=d),o.PM&&(f[o.PM]=l),o.PMI&&(f[o.PMI]=n),o.MVPM&&(f[o.MVPM]=h),o.MVPMI&&(f[o.MVPMI]=h.inverse()),o.NM){var c=d.m;f[o.NM]=[c[0],c[4],c[8],c[1],c[5],c[9],c[2],c[6],c[10]]}this.uniforms(f);var p=0;for(var E in t){var x=t[E],w=this.attributes[E]||r.getAttribLocation(this.program,E.replace(/^(gl_.*)$/,ne+"$1"));w==-1||!x.buffer||(this.attributes[E]=w,r.bindBuffer(r.ARRAY_BUFFER,x.buffer),r.enableVertexAttribArray(w),r.vertexAttribPointer(w,x.buffer.spacing,r.FLOAT,!1,0,0),p=x.buffer.length/x.buffer.spacing)}for(var E in this.attributes)E in t||r.disableVertexAttribArray(this.attributes[E]);return p&&(!i||i.buffer)&&(i?(r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,i.buffer),r.drawElements(e,i.buffer.length,r.UNSIGNED_SHORT,0)):r.drawArrays(e,0,p)),this}};function P(t,i,e){e=e||{},this.id=r.createTexture(),this.width=t,this.height=i,this.format=e.format||r.RGBA,this.type=e.type||r.UNSIGNED_BYTE;var o=e.filter||e.magFilter||r.LINEAR,a=e.filter||e.minFilter||r.LINEAR;if(this.type===r.FLOAT){if(!P.canUseFloatingPointTextures())throw new Error("OES_texture_float is required but not supported");if((a!==r.NEAREST||o!==r.NEAREST)&&!P.canUseFloatingPointLinearFiltering())throw new Error("OES_texture_float_linear is required but not supported")}else if(this.type===r.HALF_FLOAT_OES){if(!P.canUseHalfFloatingPointTextures())throw new Error("OES_texture_half_float is required but not supported");if((a!==r.NEAREST||o!==r.NEAREST)&&!P.canUseHalfFloatingPointLinearFiltering())throw new Error("OES_texture_half_float_linear is required but not supported")}r.bindTexture(r.TEXTURE_2D,this.id),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,1),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,o),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,a),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,e.wrap||e.wrapS||r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,e.wrap||e.wrapT||r.CLAMP_TO_EDGE),r.texImage2D(r.TEXTURE_2D,0,this.format,t,i,0,this.format,this.type,null)}var K,j,se;P.prototype={bind:function(t){r.activeTexture(r.TEXTURE0+(t||0)),r.bindTexture(r.TEXTURE_2D,this.id)},unbind:function(t){r.activeTexture(r.TEXTURE0+(t||0)),r.bindTexture(r.TEXTURE_2D,null)},canDrawTo:function(){K=K||r.createFramebuffer(),r.bindFramebuffer(r.FRAMEBUFFER,K),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,this.id,0);var t=r.checkFramebufferStatus(r.FRAMEBUFFER)==r.FRAMEBUFFER_COMPLETE;return r.bindFramebuffer(r.FRAMEBUFFER,null),t},drawTo:function(t){var i=r.getParameter(r.VIEWPORT);if(K=K||r.createFramebuffer(),j=j||r.createRenderbuffer(),r.bindFramebuffer(r.FRAMEBUFFER,K),r.bindRenderbuffer(r.RENDERBUFFER,j),(this.width!=j.width||this.height!=j.height)&&(j.width=this.width,j.height=this.height,r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_COMPONENT16,this.width,this.height)),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,this.id,0),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,j),r.checkFramebufferStatus(r.FRAMEBUFFER)!=r.FRAMEBUFFER_COMPLETE)throw new Error("Rendering to this texture is not supported (incomplete framebuffer)");r.viewport(0,0,this.width,this.height),t(),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindRenderbuffer(r.RENDERBUFFER,null),r.viewport(i[0],i[1],i[2],i[3])},swapWith:function(t){var i;i=t.id,t.id=this.id,this.id=i,i=t.width,t.width=this.width,this.width=i,i=t.height,t.height=this.height,this.height=i}},P.fromImage=function(t,i){i=i||{};var e=new P(t.width,t.height,i);try{r.texImage2D(r.TEXTURE_2D,0,e.format,e.format,e.type,t)}catch{throw location.protocol=="file:"?new Error('image not loaded for security reasons (serve this page over "http://" instead)'):new Error("image not loaded for security reasons (image must originate from the same domain as this page or use Cross-Origin Resource Sharing)")}return i.minFilter&&i.minFilter!=r.NEAREST&&i.minFilter!=r.LINEAR&&r.generateMipmap(r.TEXTURE_2D),e},P.fromURL=function(t,i){se=se||function(){var l=document.createElement("canvas").getContext("2d");l.canvas.width=l.canvas.height=128;for(var d=0;d<l.canvas.height;d+=16)for(var n=0;n<l.canvas.width;n+=16)l.fillStyle=(n^d)&16?"#FFF":"#DDD",l.fillRect(n,d,16,16);return l.canvas}();var e=P.fromImage(se,i),o=new Image,a=r;return o.onload=function(){a.makeCurrent(),P.fromImage(o,i).swapWith(e)},o.src=t,e},P.canUseFloatingPointTextures=function(){return!!r.getExtension("OES_texture_float")},P.canUseFloatingPointLinearFiltering=function(){return!!r.getExtension("OES_texture_float_linear")},P.canUseHalfFloatingPointTextures=function(){return!!r.getExtension("OES_texture_half_float")},P.canUseHalfFloatingPointLinearFiltering=function(){return!!r.getExtension("OES_texture_half_float_linear")};function v(t,i,e){this.x=t||0,this.y=i||0,this.z=e||0}return v.prototype={negative:function(){return new v(-this.x,-this.y,-this.z)},add:function(t){return t instanceof v?new v(this.x+t.x,this.y+t.y,this.z+t.z):new v(this.x+t,this.y+t,this.z+t)},subtract:function(t){return t instanceof v?new v(this.x-t.x,this.y-t.y,this.z-t.z):new v(this.x-t,this.y-t,this.z-t)},multiply:function(t){return t instanceof v?new v(this.x*t.x,this.y*t.y,this.z*t.z):new v(this.x*t,this.y*t,this.z*t)},divide:function(t){return t instanceof v?new v(this.x/t.x,this.y/t.y,this.z/t.z):new v(this.x/t,this.y/t,this.z/t)},equals:function(t){return this.x==t.x&&this.y==t.y&&this.z==t.z},dot:function(t){return this.x*t.x+this.y*t.y+this.z*t.z},cross:function(t){return new v(this.y*t.z-this.z*t.y,this.z*t.x-this.x*t.z,this.x*t.y-this.y*t.x)},length:function(){return Math.sqrt(this.dot(this))},unit:function(){return this.divide(this.length())},min:function(){return Math.min(Math.min(this.x,this.y),this.z)},max:function(){return Math.max(Math.max(this.x,this.y),this.z)},toAngles:function(){return{theta:Math.atan2(this.z,this.x),phi:Math.asin(this.y/this.length())}},angleTo:function(t){return Math.acos(this.dot(t)/(this.length()*t.length()))},toArray:function(t){return[this.x,this.y,this.z].slice(0,t||3)},clone:function(){return new v(this.x,this.y,this.z)},init:function(t,i,e){return this.x=t,this.y=i,this.z=e,this}},v.negative=function(t,i){return i.x=-t.x,i.y=-t.y,i.z=-t.z,i},v.add=function(t,i,e){return i instanceof v?(e.x=t.x+i.x,e.y=t.y+i.y,e.z=t.z+i.z):(e.x=t.x+i,e.y=t.y+i,e.z=t.z+i),e},v.subtract=function(t,i,e){return i instanceof v?(e.x=t.x-i.x,e.y=t.y-i.y,e.z=t.z-i.z):(e.x=t.x-i,e.y=t.y-i,e.z=t.z-i),e},v.multiply=function(t,i,e){return i instanceof v?(e.x=t.x*i.x,e.y=t.y*i.y,e.z=t.z*i.z):(e.x=t.x*i,e.y=t.y*i,e.z=t.z*i),e},v.divide=function(t,i,e){return i instanceof v?(e.x=t.x/i.x,e.y=t.y/i.y,e.z=t.z/i.z):(e.x=t.x/i,e.y=t.y/i,e.z=t.z/i),e},v.cross=function(t,i,e){return e.x=t.y*i.z-t.z*i.y,e.y=t.z*i.x-t.x*i.z,e.z=t.x*i.y-t.y*i.x,e},v.unit=function(t,i){var e=t.length();return i.x=t.x/e,i.y=t.y/e,i.z=t.z/e,i},v.fromAngles=function(t,i){return new v(Math.cos(t)*Math.cos(i),Math.sin(i),Math.sin(t)*Math.cos(i))},v.randomDirection=function(){return v.fromAngles(Math.random()*Math.PI*2,Math.asin(Math.random()*2-1))},v.min=function(t,i){return new v(Math.min(t.x,i.x),Math.min(t.y,i.y),Math.min(t.z,i.z))},v.max=function(t,i){return new v(Math.max(t.x,i.x),Math.max(t.y,i.y),Math.max(t.z,i.z))},v.lerp=function(t,i,e){return i.subtract(t).multiply(e).add(t)},v.fromArray=function(t){return new v(t[0],t[1],t[2])},v.angleBetween=function(t,i){return t.angleTo(i)},s}();const Ae=new g.Vector(0,-4,0);class ue{constructor(s,u){this.center=new g.Vector(s.x,s.y,s.z),this.oldCenter=new g.Vector(s.x,s.y,s.z),this.radius=u,this.cinematic=!1,this.velocity=new g.Vector(0,0,0),this.acceleration=new g.Vector(0,0,0),this.mass=4/3*Math.PI*Math.pow(u,3)*1e3,this.invMass=1/this.mass,this.radiusSquared=u*u,this.mesh=g.Mesh.sphere({detail:10})}update(s,u){if(this.cinematic)this.velocity=new g.Vector(0,0,0);else{this.oldCenter=new g.Vector(this.center.x,this.center.y,this.center.z);const m=Math.max(0,Math.min(1,(this.radius-this.center.y)/(2*this.radius))),_=Ae.multiply(-1.35*this.mass*m),b=this.velocity.unit().multiply(-1e3*this.radiusSquared*m*this.velocity.dot(this.velocity));this.addForce(b),this.addForce(_),this.addForce(Ae.multiply(this.mass)),this.velocity=this.velocity.add(this.acceleration.multiply(s)),this.acceleration=new g.Vector(0,0,0),this.center=this.center.add(this.velocity.multiply(s)),this.center.y<this.radius-u.y&&(this.center.y=this.radius-1,this.velocity.y=Math.abs(this.velocity.y)*.7)}}addForce(s){this.cinematic?console.warn("Trying to add force to a cinematic sphere."):this.acceleration=this.acceleration.add(s.multiply(this.invMass))}move(s){this.oldCenter=new g.Vector(this.center.x,this.center.y,this.center.z),this.center=new g.Vector(s.x,s.y,s.z),this.cinematic||console.warn("Moving a non cinematic sphere.")}}function ye(r=0,s=1){const u=1-Math.random(),m=Math.random();return Math.sqrt(-2*Math.log(u))*Math.cos(2*Math.PI*m)*s+r}const re=new g.Vector(1e3,0,0),Be=.5,Ue=1,be=2*Math.PI*Ue,S=class S{constructor(s){this.startingPoint=new g.Vector(s.x,s.y,s.z),this.center=new g.Vector(s.x,s.y,s.z),this.force=new g.Vector(0,0,190+ye(0,20)),this.reactionTime=Math.max(.1,ye(.15,.02));const u=.25,m=.15;this.body=new ue(s,u),this.leftArm=new ue(re,m),this.rightArm=new ue(re,m),this.leftFoot=new ue(re,m),this.rightFoot=new ue(re,m),this.body.cinematic=!S.useGravity,this.leftArm.cinematic=!0,this.rightArm.cinematic=!0,this.leftFoot.cinematic=!0,this.rightFoot.cinematic=!0,this.spheres=[this.body,this.leftArm,this.rightArm,this.leftFoot,this.rightFoot],this.divingDistance=0,this.divingTime=1e3}jump(s){this.body.cinematic=!1,this.body.velocity=new g.Vector(0,0,4.5+ye(0,1)),this.body.center=new g.Vector(this.startingPoint.x,1,-s.z/2)}getArmOffset(s,u){return new g.Vector(0,Math.cos(be*s+u),Math.sin(be*s+u)).multiply(Be)}update(s,u,m){if(S.swimming){this.body.addForce(this.force);const _=this.getArmOffset(u,0),b=this.getArmOffset(u,Math.PI),A=this.getArmOffset(u*2,0),I=this.getArmOffset(u*2,Math.PI);this.rightArm.move(this.body.center.add(_).add(new g.Vector(.3,0,0))),this.leftArm.move(this.body.center.add(b).add(new g.Vector(-.3,0,0))),this.rightFoot.move(this.body.center.add(new g.Vector(.15,A.y*.5,-1))),this.leftFoot.move(this.body.center.add(new g.Vector(-.15,I.y*.5,-1)))}else this.rightArm.move(re),this.leftArm.move(re),this.rightFoot.move(re),this.leftFoot.move(re);for(let _ of this.spheres)_.update(s,m);!this.hasDove&&this.body.center.y<=0&&this.body.oldCenter.y>=0&&(this.divingDistance=this.body.center.z+m.z/2,this.divingTime=u,this.hasDove=!0,console.log("dived : "+this.divingDistance))}};H(S,"useGravity",!1),H(S,"swimming",!1),H(S,"showFlags",!0),H(S,"numAttributes",4),H(S,"numVecAttributes",Math.ceil(S.numAttributes/4)),H(S,"maxNumSwimmer",16),H(S,"swimmersAttributesTexture",null),H(S,"plane",null),H(S,"attributeShader",null),H(S,"initSwimmersAttributesTexture",s=>{const u=s.NEAREST;S.plane=g.Mesh.plane(),S.swimmersAttributesTexture=new g.Texture(S.maxNumSwimmer,S.numVecAttributes,{type:s.FLOAT,filter:u})}),H(S,"updateAttributesTexture",(s,u)=>{const m=new Float32Array(S.numAttributes*S.maxNumSwimmer);for(let _=0;_<u.length;_++)m[S.numVecAttributes*4*_]=u[_].body.center.x,m[S.numVecAttributes*4*_+1]=u[_].body.center.z,m[S.numVecAttributes*4*_+2]=u[_].divingDistance,m[S.numVecAttributes*4*_+3]=u[_].divingTime;s.bindTexture(s.TEXTURE_2D,S.swimmersAttributesTexture.id),s.pixelStorei(s.UNPACK_ALIGNMENT,1),s.texSubImage2D(s.TEXTURE_2D,0,0,0,S.maxNumSwimmer,1,s.RGBA,s.FLOAT,m)});let F=S;const Me=`
    uniform float wr;
    #define sqrt_2_PI 2.50662827
    #define PI 3.1415926536
    const int SWIMMER_X_INDEX = 0;
    const int SWIMMER_Z_INDEX = 1;
    const int SWIMMER_DIVING_DISTANCE_INDEX = 2;
    const int SWIMMER_DIVING_TIME_INDEX = 3;
    uniform sampler2D swimmersAttributesTexture;
    const int SWIMMERS_NUM_ATTRIBUTES = 4;
    const vec2 TEXTURE_SIZE = vec2(16., 1.);
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
            vec2 pixel = vec2(i_float, 0.);
            vec4 attributes = texture2D(swimmersAttributesTexture, (pixel + .5) / TEXTURE_SIZE);
            float swimmer_x = attributes.r;
            float swimmer_z = attributes.g;
            float divingDistance = attributes.b;
            float divingTime = attributes.a;

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
    varying vec2 coord;
    uniform vec2 invPoolSizeVertex;
    void main() {
      coord = gl_Vertex.xy * invPoolSizeVertex + 0.5;
      gl_Position = vec4(gl_Vertex.xy * 2. * invPoolSizeVertex, 0., 1.0);
    }
  `;if(this.reset(s,u),!g.Texture.canUseFloatingPointTextures())throw new Error("This demo requires the OES_texture_float extension");this.dropShader=new g.Shader(m,`
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
  `),this.updateShader=new g.Shader(m,`
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
  `),this.normalShader=new g.Shader(m,`
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
  `),this.sphereShader=new g.Shader(m,`
    uniform sampler2D texture;
    uniform vec3 oldCenter;
    uniform vec3 newCenter;
    uniform float radius;
    uniform vec3 poolSize;
    varying vec2 coord;
    
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
      vec4 info = texture2D(texture, coord);

    /* add the old volume */
    info.r += volumeInSphere(oldCenter);

    /* subtract the new volume */
    info.r -= volumeInSphere(newCenter);

    gl_FragColor = info;
  }
  `),this.visualizationWavesShader=new g.Shader(m,`
    uniform sampler2D texture;
    uniform bool add;
    uniform vec3 poolSize;
    varying vec2 coord;

    `+Me+`

    void main() {
      vec4 info = texture2D(texture, coord);
      float w = getDivingWaves(coord).x + getRecordWave(coord);
      info.r += add ? w : -w;
      gl_FragColor = info;
    }
    `)}q.prototype.reset=function(r,s=null){this.WR_position=1e5,this.prev_WR_position=0,s!==null?(console.log("resolution.y : "+s.y),this.W=Math.round(s.x),this.H=Math.round(s.y),console.log("Using custom resolution:",this.W,this.H)):(this.W=256,this.H=256),this.plane=g.Mesh.plane({detail:255,width:r.x,height:r.z}),this.delta=new g.Vector(1/this.W,1/this.H);const u=this.gl;this.textureA&&u.deleteTexture(this.textureA.id),this.textureB&&u.deleteTexture(this.textureB.id),this.textureA=new g.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:m}),this.textureB=new g.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:m}),this.areaConservationTexture=new g.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:m}),this.showAreaConservedGrid=!1,this.showProjectionGrid=!1,this.poolSize=r,this.invPoolSize=new g.Vector(1/r.x,1/r.y,1/r.z);var m=g.Texture.canUseFloatingPointLinearFiltering()?this.gl.LINEAR:this.gl.NEAREST;(!this.textureA.canDrawTo()||!this.textureB.canDrawTo())&&g.Texture.canUseHalfFloatingPointTextures()&&(console.log("No draw"),m=g.Texture.canUseHalfFloatingPointLinearFiltering()?this.gl.LINEAR:this.gl.NEAREST,this.textureA=new g.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:m}),this.textureB=new g.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:m}))};q.prototype.addDrop=function(r,s,u,m){var _=this;this.textureB.drawTo(function(){_.textureA.bind(),_.dropShader.uniforms({invPoolSizeVertex:[_.invPoolSize.x,_.invPoolSize.z],center:[r,s],radius:u,strength:m,poolSize:[_.poolSize.x,_.poolSize.y,_.poolSize.z]}).draw(_.plane)}),this.textureB.swapWith(this.textureA)};q.prototype.addOrRemoveVisualizationWaves=function(r,s,u){if(this.visualizationWavesEnabled){var m=this;this.textureB.drawTo(function(){m.textureA.bind(),F.swimmersAttributesTexture&&F.swimmersAttributesTexture.bind(1),m.visualizationWavesShader.uniforms({swimmersAttributesTexture:1,invPoolSizeVertex:[m.invPoolSize.x,m.invPoolSize.z],poolSize:[m.poolSize.x,m.poolSize.y,m.poolSize.z],wr:m.WR_position,sqrt_2_PI:m.sqrt_2_PI,add:r,swimmersNumber:s.length,time:u}).draw(m.plane)}),this.textureB.swapWith(this.textureA)}};q.prototype.addSwimmer=function(r){for(let s of r.spheres)this.addSphere(s)};q.prototype.addSphere=function(r){this.spheres.push(r)};q.prototype.updateSpheres=function(r){this.prev_WR_position=this.WR_position,this.WR_position+=r*2.4;for(let u=0;u<this.spheres.length;u++){const m=this.spheres[u];this.moveSphere(m.oldCenter,m.center,m.radius)}};q.prototype.moveSphere=function(r,s,u){var m=this;this.textureB.drawTo(function(){m.textureA.bind(),m.sphereShader.uniforms({invPoolSizeVertex:[m.invPoolSize.x,m.invPoolSize.z],oldCenter:r,newCenter:s,radius:u,poolSize:[m.poolSize.x,m.poolSize.y,m.poolSize.z]}).draw(m.plane)}),this.textureB.swapWith(this.textureA)};q.prototype.stepSimulation=function(){var r=this;this.textureB.drawTo(function(){r.textureA.bind(),r.updateShader.uniforms({invPoolSizeVertex:[r.invPoolSize.x,r.invPoolSize.z],delta:[r.delta.x,r.delta.y],wr:r.WR_position,prev_wr:r.prev_WR_position,poolSize:[r.poolSize.x,r.poolSize.y,r.poolSize.z],sqrt_2_PI:r.sqrt_2_PI,damping:r.damping}).draw(r.plane)}),this.textureB.swapWith(this.textureA),this.updateAreaConservation()};q.prototype.updateNormals=function(){var r=this;this.textureB.drawTo(function(){r.textureA.bind(),r.normalShader.uniforms({invPoolSizeVertex:[r.invPoolSize.x,r.invPoolSize.z],delta:[r.delta.x,r.delta.y]}).draw(r.plane)}),this.textureB.swapWith(this.textureA)};q.prototype.setAreaConservation=function(r){this.areaConservationEnabled=r};q.prototype.updateAreaConservation=function(){if(!this.areaConservationEnabled)return;var r,s,u;if(this.textureA.type===this.gl.FLOAT)r=this.gl.FLOAT,s=Float32Array,u="WEBGL_color_buffer_float";else if(this.textureA.type===this.gl.HALF_FLOAT_OES)r=this.gl.HALF_FLOAT_OES,s=Uint16Array,u="EXT_color_buffer_half_float";else{console.warn("Unsupported texture type for reading");return}if(!this.gl.getExtension(u)){console.warn(u+" not available; cannot read pixels");return}this.fb||(this.fb=this.gl.createFramebuffer()),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.fb),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,this.textureA.id,0);const m=this.gl.checkFramebufferStatus(this.gl.FRAMEBUFFER);if(m!==this.gl.FRAMEBUFFER_COMPLETE){console.error("Framebuffer incomplete: "+m+" for texture type "+this.textureA.type),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null);return}this.gl.pixelStorei(this.gl.PACK_ALIGNMENT,1);const _=new s(this.W*this.H*4),b=new Float32Array(this.W*this.H*4);this.gl.readPixels(0,0,this.W,this.H,this.gl.RGBA,r,_);for(let B=0;B<this.W;B++)b[B*4+1]=1;const A=this.poolSize.x/this.W,I=this.poolSize.z/this.H,$=A*A,te=I*I;if(this.textureA.type===this.gl.FLOAT){for(let B=0;B<this.H;B+=1)for(let y=0;y<this.W;y+=1){const k=(B*this.W+y)*4,W=((this.H-1-B)*this.W+y)*4,N=b[W],oe=b[W+1];if(y+1<this.W){const V=_[k]-_[k+4],G=Math.sqrt(V*V+$);b[W+4]=N+G}if(B+1<this.H){const V=_[k]-_[k+this.W*4],G=Math.sqrt(V*V+te);b[W-4*this.W+1]=oe+G}}this.gl.bindTexture(this.gl.TEXTURE_2D,this.areaConservationTexture.id),this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT,1),this.gl.texSubImage2D(this.gl.TEXTURE_2D,0,0,0,this.W,this.H,this.gl.RGBA,this.gl.FLOAT,b)}this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.bindTexture(this.gl.TEXTURE_2D,null)};var le=`
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
`;function ie(r,s,u,m){this.water=s,this.gl=r,this.tileTexture=g.Texture.fromImage(document.getElementById("tiles"),{minFilter:this.gl.LINEAR_MIPMAP_LINEAR,wrap:this.gl.REPEAT,format:this.gl.RGB}),this.flagTexture=g.Texture.fromImage(document.getElementById("flag"),{minFilter:this.gl.LINEAR_MIPMAP_LINEAR,wrap:this.gl.REPEAT,format:this.gl.RGB}),this.flagSize=m,this.flagCenter=u,this.lightDir=new g.Vector(2,2,-1).unit(),this.causticTex=new g.Texture(1024,1024),this.waterShaders=[];for(var _=0;_<2;_++)this.waterShaders[_]=new g.Shader(`
      uniform sampler2D water;
      uniform vec3 poolSizeVertexShader;
      varying vec3 position;
      void main() {
        vec4 info = texture2D(water, gl_Vertex.xy / poolSizeVertexShader.xz + 0.5);
        position = gl_Vertex.xzy;
        position.y += info.r;
        gl_Position = gl_ModelViewProjectionMatrix * vec4(position, 1.0);
      }
    `,le+`
      uniform vec3 eye;
      varying vec3 position;
      uniform bool showFlags;
      uniform samplerCube sky;
      uniform bool showProjectionGrid;
      uniform bool showAreaConservedGrid;

      `+Me+`
      
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
            vec2 pixel = vec2(i_float + .5, .5);
            vec4 attributes = texture2D(swimmersAttributesTexture, (pixel) / TEXTURE_SIZE);
            float swimmer_x = attributes.r;
            float swimmer_z = attributes.g;
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
        
        `+(_?`
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
    `);this.sphereMesh=g.Mesh.sphere({detail:10}),this.sphereShader=new g.Shader(le+`
    varying vec3 position;
  void main() {
    position = sphereCenter + gl_Vertex.xyz * sphereRadius;
    gl_Position = gl_ModelViewProjectionMatrix * vec4(position, 1.0);
  }
  `,le+`
    varying vec3 position;
  void main() {
    gl_FragColor = vec4(getSphereColor(position), 1.0);
      vec4 info = texture2D(water, position.xz / poolSize.xz + 0.5);
    if (position.y < info.r) {
      gl_FragColor.rgb *= underwaterColor * 1.2;
    }
  }
  `),this.reset(),this.cubeShader=new g.Shader(le+`
    varying vec3 position;
  void main() {
    position = gl_Vertex.xyz;
    position.y = ((1.0 - position.y) * (7.0 / 12.0) - 1.0) * poolSize.y;
    gl_Position = gl_ModelViewProjectionMatrix * vec4(position, 1.0);
  }
  `,le+`
    varying vec3 position;
  void main() {
    gl_FragColor = vec4(getWallColor(position), 1.0);
      vec4 info = texture2D(water, position.xz / poolSize.xz + 0.5);
    if (position.y < info.r) {
      gl_FragColor.rgb *= underwaterColor * 1.2;
    }
  }
  `),this.sphereCenter=new g.Vector,this.sphereRadius=0;var b=!!this.gl.getExtension("OES_standard_derivatives");this.causticsShader=new g.Shader(le+`
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
  `,(b?`#extension GL_OES_standard_derivatives: enable
`:"")+`
  `+le+`
    varying vec3 oldPos;
    varying vec3 newPos;
    varying vec3 ray;

  void main() {
    `+(b?`
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
  `)}ie.prototype.reset=function(){this.cubeMesh=g.Mesh.cube({width:this.water.poolSize.x,height:2,depth:this.water.poolSize.z}),this.cubeMesh.triangles.splice(4,2),this.cubeMesh.compile()};ie.prototype.updateCaustics=function(r){};ie.prototype.renderWater=function(r,s,u,m){var _=new g.Raytracer;r.textureA.bind(0),this.tileTexture.bind(1),s.bind(2),this.causticTex.bind(3),this.flagTexture.bind(4),r.areaConservationTexture.bind(5),F.swimmersAttributesTexture&&F.swimmersAttributesTexture.bind(6),this.gl.enable(this.gl.CULL_FACE);for(var b=0;b<2;b++)this.gl.cullFace(b?this.gl.BACK:this.gl.FRONT),this.waterShaders[b].uniforms({light:this.lightDir,water:0,tiles:1,sky:2,causticTex:3,flag:4,areaConservationTexture:5,swimmersAttributesTexture:6,areaConservation:r.areaConservationEnabled,flagSize:this.flagSize,flagCenter:[this.flagCenter.x,this.flagCenter.y],poolSize:[r.poolSize.x,r.poolSize.y,r.poolSize.z],poolSizeVertexShader:[r.poolSize.x,r.poolSize.y,r.poolSize.z],eye:_.eye,sphereCenter:this.sphereCenter,sphereRadius:this.sphereRadius,showProjectionGrid:r.showProjectionGrid,showAreaConservedGrid:r.showAreaConservedGrid,wr:r.WR_position,swimmersNumber:u.length,showFlags:F.showFlags,time:m}).draw(r.plane);this.gl.disable(this.gl.CULL_FACE)};ie.prototype.renderSpheres=function(r){for(let s of r.spheres)this.renderSphere(r,s)};ie.prototype.renderSphere=function(r,s){r.textureA.bind(0),this.causticTex.bind(1),this.sphereShader.uniforms({light:this.lightDir,water:0,causticTex:1,sphereCenter:[s.center.x,s.center.y,s.center.z],sphereRadius:s.radius,poolSize:[r.poolSize.x,r.poolSize.y,r.poolSize.z]}).draw(s.mesh)};ie.prototype.renderSphereOld=function(r){r.textureA.bind(0),this.causticTex.bind(1),this.sphereShader.uniforms({light:this.lightDir,water:0,causticTex:1,sphereCenter:this.sphereCenter,sphereRadius:this.sphereRadius,poolSize:[r.poolSize.x,r.poolSize.y,r.poolSize.z]}).draw(this.sphereMesh)};ie.prototype.renderCube=function(r){this.gl.enable(this.gl.CULL_FACE),r.textureA.bind(0),this.tileTexture.bind(1),this.causticTex.bind(2),this.cubeShader.uniforms({light:this.lightDir,water:0,tiles:1,causticTex:2,sphereCenter:this.sphereCenter,sphereRadius:this.sphereRadius,poolSize:[r.poolSize.x,r.poolSize.y,r.poolSize.z]}).draw(this.cubeMesh),this.gl.disable(this.gl.CULL_FACE)};function Re(r,s){this.gl=s,this.id=s.createTexture(),s.bindTexture(s.TEXTURE_CUBE_MAP,this.id),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,1),s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAG_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),s.texImage2D(s.TEXTURE_CUBE_MAP_NEGATIVE_X,0,s.RGB,s.RGB,s.UNSIGNED_BYTE,r.xneg),s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X,0,s.RGB,s.RGB,s.UNSIGNED_BYTE,r.xpos),s.texImage2D(s.TEXTURE_CUBE_MAP_NEGATIVE_Y,0,s.RGB,s.RGB,s.UNSIGNED_BYTE,r.yneg),s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_Y,0,s.RGB,s.RGB,s.UNSIGNED_BYTE,r.ypos),s.texImage2D(s.TEXTURE_CUBE_MAP_NEGATIVE_Z,0,s.RGB,s.RGB,s.UNSIGNED_BYTE,r.zneg),s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_Z,0,s.RGB,s.RGB,s.UNSIGNED_BYTE,r.zpos)}Re.prototype.bind=function(r){this.gl.activeTexture(this.gl.TEXTURE0+(r||0)),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,this.id)};Re.prototype.unbind=function(r){this.gl.activeTexture(this.gl.TEXTURE0+(r||0)),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,null)};const Ce=200,ke=`
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
#define MAX_SPARKS `+Ce+`
/// The amount of 'sparks' to use (spark count between about 73-206 is known to crash Win7/Chrome)
#define SPARKS 40    // Low-end
//#define SPARKS 100   // Low-mid
//#define SPARKS 210   // Mid-high (recommended)
//#define SPARKS 500   // High
//#define SPARKS 1000  // Really High
//#define SPARKS 2000  // Insane

/// Switch between defines to choose different sets of settings
#define ORIGINAL_SPARKS
//#define WATER_SPOUT
//#define FIRE_STREAM
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

vec3 trace(vec3 rpos, vec3 rdir, vec2 fragCoord, vec3 center) {
    // center *= 0.;

	float sparkT = planeIntersection(rpos - center, rdir, sparkPlaneNormal);
	float floorT = planeIntersection(rpos - center, rdir, waterNormal);

	// float sparkT = planeIntersection(rpos - center, rdir, vec3(0.587785, 0.0, -0.809017));
	// float floorT = planeIntersection(rpos - center, rdir, vec3(0., 1., 0.));
	
	vec4 col = vec4(0.0, 0.0, 0.0, rdir.y < 0.0 ? 1.0 : 1.0);
	vec3 sparkCol = vec3(0.0, 0.0, 0.0);
	
	vec3 floorPos = rpos + rdir * floorT;
	vec3 sparkPos = rpos + rdir * sparkT;
	
	float time = iTime * SPEED_FACTOR;
	for (int i = 0; i < MAX_SPARKS; i++)
	{
        float float_i = float(i);
        if (float_i >= sparksNumber) break;
		// Calculate spark position and velocity
		float a = spread(vec2(i, 1.0))*SPREAD_FACTOR+MIN_ANGLE;
		float b = spread(vec2(i, 3.0))*RAND_FACTOR;
		float startTime = spread(vec2(i, 5.0)) * GROUP_FACTOR;
		vec3 dir = sampleAngle(a) * 10.0;
        vec3 gravity = -1.2 * 2. * waterNormal / sparksSizeFactor;
	
		vec3 start = -dir * (1.35 + b * 0.3) / sparksSizeFactor;
		vec3 force = start * 0.02 + gravity;

		float c = fract(time + startTime) * 20.0;
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
            atten /= sparksSizeFactor;
			col += vec4(sc.xyz * sc.w * atten, 0.0) * brightness;
		}
	
		// Shade sparks
		if (visible) {
			vec3 spos = sparkPos - offset;			
			float h = cylinder(spos, vdir, vel);
				
			if (h < 0.0) {
				sparkCol += vec3(sc.xyz * sc.w);
			} else {
				float dist = h * 0.05 * sparksSizeFactor + sparksGlowOffset;
				float atten = 1.0 / (1.0 + 100.0 * pow(dist, sparksGlow));
				sparkCol += sc.xyz * sc.w * (atten);
				// sparkCol += sc.xyz * sc.w * (atten + clamp(1.0 - h * sparkT * 0.05, 0.0, 1.0));
			}
		}
	}
	
	vec3 final =  col.xyz + sparkCol * brightness;
	return final + vec3(rand(vec2(fragCoord.x * fragCoord.y, iTime))) * 0.00002;
	return final + vec3(rand(vec2(fragCoord.x * fragCoord.y, iTime))) * 0.002;
}

// Ray-generation
vec3 sparks(vec2 px, vec3 offset) {
	vec2 rd = (px / iResolution.yy - vec2(iResolution.x/iResolution.y*0.5-0.5, 0.0)) * 2.0 - 1.0;
    rd *= -1.;
    float d = 1. / tan(fov / 2.); // TODO pre compute this before shader
	vec3 rdir = normalize(vec3(rd.x , rd.y, d));
    vec3 center = (gl_ModelViewMatrix * vec4(offset, 1.)).xyz;
	return trace(vec3(0., 0., 0.), rdir, px, center);
}

`;class Ve{constructor(s,u){if(this.gl=s,this.copyVideo=!1,this.show=!1,s===null){alert("Unable to initialize WebGL. Your browser or machine may not support it.");return}s.clearColor(0,0,0,1),s.clear(s.COLOR_BUFFER_BIT),this.shader=new g.Shader(`
    varying highp vec2 vTextureCoord;
    varying vec3 waterNormal;
    varying vec3 sparkPlaneNormal;
    varying vec3 sparkDirection;

    void main(void) {
        gl_Position = vec4(gl_Vertex.xz, 0., 1.);
        waterNormal = (gl_ModelViewMatrix * vec4(0., 1., 0., 0.)).xyz;
        sparkPlaneNormal = (gl_ModelViewMatrix * vec4(-1., 0., 0., 0.)).xyz;
        sparkDirection = (gl_ModelViewMatrix * vec4(0., 0., 1., 0.)).xyz;
        vTextureCoord = gl_TexCoord.st;
    }
`,`
    varying highp vec2 vTextureCoord;
    varying vec3 waterNormal;
    varying vec3 sparkPlaneNormal;
    varying vec3 sparkDirection;


    uniform sampler2D uSampler;
    uniform bool sparksEnabled;
    uniform vec3 poolSize;

    `+ke+`

    void main(void) {
        highp vec4 texelColor = texture2D(uSampler, vTextureCoord);
        gl_FragColor = vec4(texelColor.rgb, 0.5);
        if (!sparksEnabled) return;
        vec3 spark1 = pow(sparks(gl_FragCoord.xy, vec3(2., 1., -poolSize.z / 2.)), vec3(0.4545));
        vec3 spark2 = pow(sparks(gl_FragCoord.xy, vec3(-2., 1., -poolSize.z / 2.)), vec3(0.4545));
        vec3 spark = vec3(0., 0., 0.);
        spark = spark1 + spark2;
        // for (int i = 0; i < 10; i++) {
        //     float i_float = float(i);
        //     spark += pow(sparks(gl_FragCoord.xy, vec3(25. / 2. - 25. / 10. / 2. - i_float * 25./10., 1., -25.)), vec3(0.4545));
        // }
        // gl_FragColor = vec4(mix(gl_FragColor.rgb, spark, .5), max(0.5, 2.*length(spark)));
        gl_FragColor = vec4(mix(gl_FragColor.rgb, spark, 2.*length(spark)), max(0.5, 2.*length(spark)));
        gl_FragColor = vec4(gl_FragColor.rgb + spark, max(0.5, 2.*length(spark)));
        // float m = max(gl_FragColor.r, max(gl_FragColor.g, gl_FragColor.b));
        // if (m > 1.) gl_FragColor.rgb /= m;
        // gl_FragColor = vec4(spark, 2.*length(spark));
        // gl_FragColor = vec4(1, 0, 0, 1);
    }
`),this.mesh=g.Mesh.plane({width:2,height:2,coords:!0,normals:!0}),this.mesh.transform(g.Matrix.rotate(90,1,0,0)),this.mesh.transform(g.Matrix.translate(0,.1,0)),this.programInfo=null,this.texture=this.initTexture(),this.video=this.setupVideo(u),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!0)}render(s,u,m){this.show&&(this.copyVideo&&this.updateTexture(),(!this.mesh.vertexBuffers||!this.mesh.vertexBuffers.vertex)&&this.mesh.compile(),this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture),this.shader.uniforms({uSampler:0,iTime:s,poolSize:[m.x,m.y,m.z],iResolution:[this.gl.canvas.width,this.gl.canvas.height],sparksEnabled:u.enabled,sparksGlow:u.glow,sparksGlowOffset:u.glowOffset,sparksStroke:u.stroke,sparksNumber:u.num,sparksLengthFactor:u.lengthFactor,sparksSizeFactor:u.sizeFactor,fov:u.fov}).draw(this.mesh),this.gl.disable(this.gl.BLEND))}initTexture(){const s=this.gl.createTexture();this.gl.bindTexture(this.gl.TEXTURE_2D,s);const u=0,m=this.gl.RGBA,_=1,b=1,A=0,I=this.gl.RGBA,$=this.gl.UNSIGNED_BYTE,te=new Uint8Array([0,0,255,255]);return this.gl.texImage2D(this.gl.TEXTURE_2D,u,m,_,b,A,I,$,te),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),s}updateTexture(){const u=this.gl.RGBA,m=this.gl.RGBA,_=this.gl.UNSIGNED_BYTE;this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture),this.gl.texImage2D(this.gl.TEXTURE_2D,0,u,m,_,this.video)}setupVideo(s){const u=document.createElement("video");let m=!1,_=!1;u.playsInline=!0,u.muted=!0,u.loop=!0,u.addEventListener("playing",()=>{m=!0,A()},!0),u.addEventListener("timeupdate",()=>{_=!0,A()},!0),u.src=s,u.play();const b=this,A=()=>{m&&_&&(b.copyVideo=!0)};return u}}function Ge(r){return r.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n/g,"<br>")}function We(r){var s=Ge(r);s=="WebGL not supported"&&(s='Your browser does not support WebGL.<br>Please see    <a href="http://www.khronos.org/webgl/wiki/Getting_a_WebGL_Implementation">    Getting a WebGL Implementation</a>.');var u=document.getElementById("loading");u.innerHTML=s,u.style.zIndex=1}window.onerror=We;var T=g.create(),R,Se,U;const D=[],Te=10;var ce=-25,ge=-200.5,me=0;let we=0,Ee=0;var fe=4;F.initSwimmersAttributesTexture(T);const ze=17;let de=0,he=0;var Q=!1,xe,_e,C=new g.Vector(2,1,2);let L=new g.Vector(256,256),O={numSteps:2,focal:45,sparks:{enabled:!1,glow:5,glowOffset:.5,lengthFactor:1,stroke:.01,num:40,sizeFactor:50,fov:Math.PI/4}};const Xe=new Ne;function Fe(){document.getElementById("warning").hidden=!(L.x*L.y>3e5&&R&&R.areaConservationEnabled)}function ee(){console.log("reset"),document.getElementById("resolution").innerText=`Resolution: ${L.x} x ${L.y}`,Fe(),xe=new g.Vector(0,-C.z/2+1),R.reset(C,L),U.flagCenter=xe,U.flagSize=_e,U.reset();const r=C.x/Te;let s=-C.x/2+r/2;for(let u of D)u.body.center.x=s,u.startingPoint.x=s,s+=r}window.onload=function(){var r=window.devicePixelRatio||1,s=document.getElementById("help");function u(){var n=innerWidth,h=innerHeight;T.canvas.width=n*r,T.canvas.height=h*r,T.canvas.style.width=n+"px",T.canvas.style.height=h+"px",T.viewport(0,0,T.canvas.width,T.canvas.height),T.matrixMode(T.PROJECTION),T.loadIdentity(),T.perspective(O.focal,T.canvas.width/T.canvas.height,.01,100),T.matrixMode(T.MODELVIEW),d()}document.body.appendChild(T.canvas),T.canvas.oncontextmenu=function(n){n.preventDefault()},T.clearColor(0,0,0,1),xe=new g.Vector(0,-C.z/2+1),_e=.7,R=new q(T,C);const m=new Ve(T,"./video.mp4"),_=document.getElementById("drop-zone");let b=0;document.addEventListener("dragenter",n=>{b++,_.style.display="flex"}),document.addEventListener("dragover",n=>{n.preventDefault(),n.dataTransfer.dropEffect="copy"}),document.addEventListener("dragleave",n=>{b--,b===0&&(_.style.display="none")}),document.addEventListener("drop",n=>{n.preventDefault(),b=0,_.style.display="none";const h=n.dataTransfer.files;if(h.length>0&&(h[0].type.startsWith("video/")||h[0].name.endsWith(".mp4"))){const f=URL.createObjectURL(h[0]);m.video.src=f,m.video.play(),console.log("Loaded:",h[0].name)}});const A=Xe.addFolder("variables");A.add(C,"x",1,25).name("pool width").onChange(function(n){ee()}).listen(),A.add(C,"z",1,50).name("pool height").onChange(function(n){ee()}).listen(),A.add(C,"y",1,3).name("pool depth").onChange(function(n){ee()}).listen(),A.add(R,"damping",.005,.15).name("water damping").listen(),A.add(R,"areaConservationEnabled","areaConservationEnabled").name("area conservation").listen(),A.add(F,"showFlags").name("show flags").listen(),A.add(O,"focal",28,45).name("focal").listen().onChange(function(n){O.sparks.fov=n*2*Math.PI/360,T.matrixMode(T.PROJECTION),T.loadIdentity(),T.perspective(O.focal,T.canvas.width/T.canvas.height,.01,100),T.matrixMode(T.MODELVIEW),console.log("perspective : "+O.focal)});const I=A.addFolder("Sparks");if(I.add(O.sparks,"enabled").name("sparks enabled"),I.add(O.sparks,"glow",1,30).name("sparks glow factor"),I.add(O.sparks,"lengthFactor",.1,10).name("sparks length factor"),I.add(O.sparks,"glowOffset",.1,3).name("sparks glow offset"),I.add(O.sparks,"stroke",.001,.05).name("sparks stroke"),I.add(O.sparks,"num",10,Ce).step(1).name("sparks number"),I.add(O.sparks,"sizeFactor",10,100).name("size factor"),U=new ie(T,R,xe,_e),Se=new Re({xneg:document.getElementById("xneg"),xpos:document.getElementById("xpos"),yneg:document.getElementById("ypos"),ypos:document.getElementById("ypos"),zneg:document.getElementById("zneg"),zpos:document.getElementById("zpos")},T),!R.textureA.canDrawTo()||!R.textureB.canDrawTo())throw new Error("Rendering to floating-point textures is required but not supported");const $=new g.Vector(-.4,-.75,.2),te=new g.Vector(.4,-.75,.2),B=new F($);new F(te);for(let n=0;n<1;n++)D.push(new F($));const y=B.body.radius;for(let n of D)R.addSwimmer(n);ee();for(var k=0;k<20;k++)R.addDrop(Math.random()*2-1,Math.random()*2-1,.06,k&1?.01:-.01);document.getElementById("loading").innerHTML="",u();var W=window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(n){setTimeout(n,0)},N=new Date().getTime();function oe(){var n=new Date().getTime();Q||(l((n-N)/1e3),d()),N=n,W(oe)}W(oe),window.onresize=u;var V,G,X,Y=-1,ne=0,ae=1,ve=2;const pe=3;var P,K;function j(n,h,f){if(P=n,K=h,!f||f.button===0){var c=new g.Raytracer,p=c.getRayForPixel(n*r,h*r),E=c.eye.add(p.multiply(-c.eye.y/p.y));for(let w of D){var x=g.Raytracer.hitTestSphere(c.eye,p,w.body.center,w.body.radius);if(x){Y=ae,X=w,w.body.cinematic=!0,V=x.hit,G=c.getRayForPixel(T.canvas.width/2,T.canvas.height/2).negative();return}}Math.abs(E.x)<C.x/2&&Math.abs(E.z)<C.z/2&&(Y=ne,se(n,h))}else f.button===2?Y=ve:f.button===1&&(Y=pe)}function se(n,h,f){switch(Y){case ne:{var c=new g.Raytracer,p=c.getRayForPixel(n*r,h*r),E=c.eye.add(p.multiply(-c.eye.y/p.y));R.addDrop(E.x/C.x*2,E.z/C.z*2,.06,.03),Q&&(R.updateNormals(),U.updateCaustics(R));break}case ae:{var c=new g.Raytracer,p=c.getRayForPixel(n*r,h*r),x=-G.dot(c.eye.subtract(V))/G.dot(p),w=c.eye.add(p.multiply(x));const Z=X.body.center.add(w.subtract(V)),J=X.body.radius,Pe=Math.max(J-C.x/2,Math.min(C.x/2-J,Z.x)),Ie=Math.max(J-C.y,Math.min(10,Z.y)),De=Math.max(J-C.z/2,Math.min(C.z/2-J,Z.z));X.body.move(new g.Vector(Pe,Ie,De)),V=w,Q&&U.updateCaustics(R);break}case ve:{if(f&&f.shiftKey){me-=n-P,me=Math.max(-89.999,Math.min(89.999,me));break}ge-=n-P,ce-=h-K,ce=Math.max(-89.999,Math.min(89.999,ce));break}case pe:{const z=.001*fe;we+=z*(n-P),Ee-=z*(h-K)}}P=n,K=h,Q&&d()}function v(){Y=-1,X&&(X.body.cinematic=!F.useGravity)}function t(n){return n===s||n.parentNode&&t(n.parentNode)}function i(n){fe*=1-n*4e-4,fe=Math.max(2,Math.min(1e3,fe)),Q&&d()}addEventListener("wheel",function(n){var h=n.deltaY;i(-h)}),document.onmousedown=function(n){t(n.target)||(n.preventDefault(),j(n.pageX,n.pageY,n))},document.onmousemove=function(n){se(n.pageX,n.pageY,n)},document.onmouseup=function(){v()},document.ontouchstart=function(n){n.touches.length===1&&!t(n.target)&&(n.preventDefault(),j(n.touches[0].pageX,n.touches[0].pageY,!1))},document.ontouchmove=function(n){n.touches.length===1&&se(n.touches[0].pageX,n.touches[0].pageY)},document.ontouchend=function(n){n.touches.length==0&&v()};function e(){F.swimming=!0;for(let n of D)n.body.cinematic=!1,F.useGravity=!0,n.body.center=new g.Vector(n.startingPoint.x,0,-C.z/2)}function o(){F.swimming=!1;for(let n of D)n.body.velocity=new g.Vector(0,0,0),n.body.center=new g.Vector(n.startingPoint.x,0,0)}function a(){F.useGravity=!0;for(let n of D)n.jump(C)}document.onkeydown=function(n){if(n.which==32)Q=!Q;else if(n.which==71){for(let h of D)h.body.cinematic=!h.body.cinematic;F.useGravity=!F.useGravity}else if(n.which==76&&Q)d();else if(n.which==74)a();else if(n.which==67)R.setAreaConservation(!R.areaConservationEnabled),Fe(),console.log("Area conservation "+(R.areaConservationEnabled?"enabled.":"disabled."));else if(n.which==80)R.showProjectionGrid=!R.showProjectionGrid,console.log("Projection grid "+(R.showProjectionGrid?"enabled.":"disabled."));else if(n.which==65)R.showAreaConservedGrid=!R.showAreaConservedGrid,console.log("Area conserved grid "+(R.showAreaConservedGrid?"enabled.":"disabled."));else if(n.which==83)F.swimming?o():e(),console.log("Swimming "+(F.swimming?"enabled.":"disabled."));else if(n.which==86)m.show=!m.show;else if(n.which==79){if(C.x=25,C.y=2,C.z=50,L.x=1024,L.y=2048,R.setAreaConservation(!1),R.damping=.1,D.length!=Te)for(let h=D.length;h<Te;h++){const f=new F($);D.push(f),R.addSwimmer(f)}de=0,m.copyVideo&&(m.video.currentTime=de),ee(),O.focal=31.75,O.sparks.fov=O.focal*2*Math.PI/360,T.matrixMode(T.PROJECTION),T.loadIdentity(),T.perspective(O.focal,T.canvas.width/T.canvas.height,.01,100),T.matrixMode(T.MODELVIEW),we=-.42,Ee=1.18,fe=52.5,ce=-24,ge=-261.5,me=-4,console.log("Olympic mode enabled.")}else if(n.which==87){R.WR_position=0,de=ze,m.copyVideo&&(m.video.currentTime=de),e(),a();for(let h of D)h.hasDove=!1}else n.which==72?(document.getElementById("commands").hidden=!document.getElementById("commands").hidden,document.getElementById("h").hidden=!document.getElementById("h").hidden):n.which==40?(L.x>129&&(L.x=Math.round(L.x/2)),ee(),console.log("decreasing x resolution")):n.which==38?(L.x<16384&&(L.x=Math.round(L.x*2)),ee(),console.log("increasing x resolution")):n.which==37?(L.y>129&&(L.y=Math.round(L.y/2)),ee(),console.log("decreasing y resolution")):n.which==39&&(L.y<16384&&(L.y=Math.round(L.y*2)),ee(),console.log("increasing y resolution"))};function l(n,h){if(!(n>1)){if(Y==ae)for(let f of D)f.body.velocity=new g.Vector(0,0,0);for(let f of D)f.update(n,he,C);R.updateSpheres(n);for(let f=0;f<O.numSteps;f++)R.stepSimulation();U.updateCaustics(R),de+=n,he=de-ze}}function d(n){g.keys.L&&(U.lightDir=g.Vector.fromAngles((90-ge)*Math.PI/180,-ce*Math.PI/180),Q&&U.updateCaustics(R)),F.showFlags&&F.updateAttributesTexture(T,D),R.addOrRemoveVisualizationWaves(!0,D,he),R.updateNormals(),T.clear(T.COLOR_BUFFER_BIT|T.DEPTH_BUFFER_BIT),T.loadIdentity(),T.translate(we,Ee,-fe),T.rotate(-me,0,0,1),T.rotate(-ce,1,0,0),T.rotate(-ge,0,1,0),T.translate(0,.5,0),T.enable(T.DEPTH_TEST),U.sphereCenter=D[0].body.center,U.sphereRadius=y,U.renderCube(R),U.renderWater(R,Se,D,he),U.renderSpheres(R),m.render(he,O.sparks,C),T.disable(T.DEPTH_TEST),R.addOrRemoveVisualizationWaves(!1,D,he)}};
//# sourceMappingURL=swimming-Bgt-FGwH.js.map
