var Ne=Object.defineProperty;var Le=(i,s,u)=>s in i?Ne(i,s,{enumerable:!0,configurable:!0,writable:!0,value:u}):i[s]=u;var ve=(i,s,u)=>Le(i,typeof s!="symbol"?s+"":s,u);import"./modulepreload-polyfill-B5Qt9EMX.js";import{g as Oe}from"./lil-gui.module.min-Vka56b52.js";var p=function(){var i,s={create:function(t){t=t||{};var r=document.createElement("canvas");r.width=800,r.height=600,"alpha"in t||(t.alpha=!1);try{i=r.getContext("webgl",t)}catch{}try{i=i||r.getContext("experimental-webgl",t)}catch{}if(!i)throw new Error("WebGL not supported");return i.HALF_FLOAT_OES=36193,u(),m(),T(),O(),i},keys:{},Matrix:y,Indexer:V,Buffer:X,Mesh:B,HitTest:G,Raytracer:H,Shader:oe,Texture:F,Vector:g};function u(){i.MODELVIEW=I|1,i.PROJECTION=I|2;var t=new y,r=new y;i.modelviewMatrix=new y,i.projectionMatrix=new y;var e=[],o=[],a,l;i.matrixMode=function(d){switch(d){case i.MODELVIEW:a="modelviewMatrix",l=e;break;case i.PROJECTION:a="projectionMatrix",l=o;break;default:throw new Error("invalid matrix mode "+d)}},i.loadIdentity=function(){y.identity(i[a])},i.loadMatrix=function(d){for(var n=d.m,h=i[a].m,f=0;f<16;f++)h[f]=n[f]},i.multMatrix=function(d){i.loadMatrix(y.multiply(i[a],d,r))},i.perspective=function(d,n,h,f){i.multMatrix(y.perspective(d,n,h,f,t))},i.frustum=function(d,n,h,f,c,v){i.multMatrix(y.frustum(d,n,h,f,c,v,t))},i.ortho=function(d,n,h,f,c,v){i.multMatrix(y.ortho(d,n,h,f,c,v,t))},i.scale=function(d,n,h){i.multMatrix(y.scale(d,n,h,t))},i.translate=function(d,n,h){i.multMatrix(y.translate(d,n,h,t))},i.rotate=function(d,n,h,f){i.multMatrix(y.rotate(d,n,h,f,t))},i.lookAt=function(d,n,h,f,c,v,E,x,w){i.multMatrix(y.lookAt(d,n,h,f,c,v,E,x,w,t))},i.pushMatrix=function(){l.push(Array.prototype.slice.call(i[a].m))},i.popMatrix=function(){var d=l.pop();i[a].m=U?new Float32Array(d):d},i.project=function(d,n,h,f,c,v){f=f||i.modelviewMatrix,c=c||i.projectionMatrix,v=v||i.getParameter(i.VIEWPORT);var E=c.transformPoint(f.transformPoint(new g(d,n,h)));return new g(v[0]+v[2]*(E.x*.5+.5),v[1]+v[3]*(E.y*.5+.5),E.z*.5+.5)},i.unProject=function(d,n,h,f,c,v){f=f||i.modelviewMatrix,c=c||i.projectionMatrix,v=v||i.getParameter(i.VIEWPORT);var E=new g((d-v[0])/v[2]*2-1,(n-v[1])/v[3]*2-1,h*2-1);return y.inverse(y.multiply(c,f,t),r).transformPoint(E)},i.matrixMode(i.MODELVIEW)}function m(){var t={mesh:new B({coords:!0,colors:!0,triangles:!1}),mode:-1,coord:[0,0,0,0],color:[1,1,1,1],shader:new oe("      uniform float pointSize;      varying vec4 color;      varying vec4 coord;      void main() {        color = gl_Color;        coord = gl_TexCoord;        gl_Position = gl_ModelViewProjectionMatrix * gl_Vertex;        gl_PointSize = pointSize;      }    ","      uniform sampler2D texture;      uniform float pointSize;      uniform bool useTexture;      varying vec4 color;      varying vec4 coord;      void main() {        gl_FragColor = color;        if (useTexture) gl_FragColor *= texture2D(texture, coord.xy);      }    ")};i.pointSize=function(r){t.shader.uniforms({pointSize:r})},i.begin=function(r){if(t.mode!=-1)throw new Error("mismatched gl.begin() and gl.end() calls");t.mode=r,t.mesh.colors=[],t.mesh.coords=[],t.mesh.vertices=[]},i.color=function(r,e,o,a){t.color=arguments.length==1?r.toArray().concat(1):[r,e,o,a||1]},i.texCoord=function(r,e){t.coord=arguments.length==1?r.toArray(2):[r,e]},i.vertex=function(r,e,o){t.mesh.colors.push(t.color),t.mesh.coords.push(t.coord),t.mesh.vertices.push(arguments.length==1?r.toArray():[r,e,o])},i.end=function(){if(t.mode==-1)throw new Error("mismatched gl.begin() and gl.end() calls");t.mesh.compile(),t.shader.uniforms({useTexture:!!i.getParameter(i.TEXTURE_BINDING_2D)}).draw(t.mesh,t.mode),t.mode=-1}}function T(){var t=i,r=0,e=0,o={},a=!1,l=Object.prototype.hasOwnProperty;function d(){for(var x in o)if(l.call(o,x)&&o[x])return!0;return!1}function n(x){var w={};for(var b in x)typeof x[b]=="function"?w[b]=function(Z){return function(){Z.apply(x,arguments)}}(x[b]):w[b]=x[b];w.original=x,w.x=w.pageX,w.y=w.pageY;for(var z=i.canvas;z;z=z.offsetParent)w.x-=z.offsetLeft,w.y-=z.offsetTop;return a?(w.deltaX=w.x-r,w.deltaY=w.y-e):(w.deltaX=0,w.deltaY=0,a=!0),r=w.x,e=w.y,w.dragging=d(),w.preventDefault=function(){w.original.preventDefault()},w.stopPropagation=function(){w.original.stopPropagation()},w}function h(x){i=t,d()||(A(document,"mousemove",f),A(document,"mouseup",c),S(i.canvas,"mousemove",f),S(i.canvas,"mouseup",c)),o[x.which]=!0,x=n(x),i.onmousedown&&i.onmousedown(x),x.preventDefault()}function f(x){i=t,x=n(x),i.onmousemove&&i.onmousemove(x),x.preventDefault()}function c(x){i=t,o[x.which]=!1,d()||(S(document,"mousemove",f),S(document,"mouseup",c),A(i.canvas,"mousemove",f),A(i.canvas,"mouseup",c)),x=n(x),i.onmouseup&&i.onmouseup(x),x.preventDefault()}function v(){a=!1}function E(){o={},a=!1}A(i.canvas,"mousedown",h),A(i.canvas,"mousemove",f),A(i.canvas,"mouseup",c),A(i.canvas,"mouseover",v),A(i.canvas,"mouseout",v),A(document,"contextmenu",E)}function M(t){var r={8:"BACKSPACE",9:"TAB",13:"ENTER",16:"SHIFT",27:"ESCAPE",32:"SPACE",37:"LEFT",38:"UP",39:"RIGHT",40:"DOWN"};return r[t]||(t>=65&&t<=90?String.fromCharCode(t):null)}function A(t,r,e){t.addEventListener(r,e)}function S(t,r,e){t.removeEventListener(r,e)}A(document,"keydown",function(t){if(!t.altKey&&!t.ctrlKey&&!t.metaKey){var r=M(t.keyCode);r&&(s.keys[r]=!0),s.keys[t.keyCode]=!0}}),A(document,"keyup",function(t){if(!t.altKey&&!t.ctrlKey&&!t.metaKey){var r=M(t.keyCode);r&&(s.keys[r]=!1),s.keys[t.keyCode]=!1}});function O(){(function(t){i.makeCurrent=function(){i=t}})(i),i.animate=function(){var t=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(a){setTimeout(a,16.666666666666668)},r=new Date().getTime(),e=i;function o(){i=e;var a=new Date().getTime();i.onupdate&&i.onupdate((a-r)/1e3),i.ondraw&&i.ondraw(),t(o),r=a}o()},i.fullscreen=function(t){t=t||{};var r=t.paddingTop||0,e=t.paddingLeft||0,o=t.paddingRight||0,a=t.paddingBottom||0;if(!document.body)throw new Error("document.body doesn't exist yet (call gl.fullscreen() from window.onload() or from inside the <body> tag)");document.body.appendChild(i.canvas),document.body.style.overflow="hidden",i.canvas.style.position="absolute",i.canvas.style.left=e+"px",i.canvas.style.top=r+"px";function l(){i.canvas.width=window.innerWidth-e-o,i.canvas.height=window.innerHeight-r-a,i.viewport(0,0,i.canvas.width,i.canvas.height),(t.camera||!("camera"in t))&&(i.matrixMode(i.PROJECTION),i.loadIdentity(),i.perspective(t.fov||45,i.canvas.width/i.canvas.height,t.near||.1,t.far||1e3),i.matrixMode(i.MODELVIEW)),i.ondraw&&i.ondraw()}A(window,"resize",l),l()}}var I=305397760,U=typeof Float32Array<"u";function y(){var t=Array.prototype.concat.apply([],arguments);t.length||(t=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),this.m=U?new Float32Array(t):t}y.prototype={inverse:function(){return y.inverse(this,new y)},transpose:function(){return y.transpose(this,new y)},multiply:function(t){return y.multiply(this,t,new y)},transformPoint:function(t){var r=this.m;return new g(r[0]*t.x+r[1]*t.y+r[2]*t.z+r[3],r[4]*t.x+r[5]*t.y+r[6]*t.z+r[7],r[8]*t.x+r[9]*t.y+r[10]*t.z+r[11]).divide(r[12]*t.x+r[13]*t.y+r[14]*t.z+r[15])},transformVector:function(t){var r=this.m;return new g(r[0]*t.x+r[1]*t.y+r[2]*t.z,r[4]*t.x+r[5]*t.y+r[6]*t.z,r[8]*t.x+r[9]*t.y+r[10]*t.z)}},y.inverse=function(t,r){r=r||new y;var e=t.m,o=r.m;o[0]=e[5]*e[10]*e[15]-e[5]*e[14]*e[11]-e[6]*e[9]*e[15]+e[6]*e[13]*e[11]+e[7]*e[9]*e[14]-e[7]*e[13]*e[10],o[1]=-e[1]*e[10]*e[15]+e[1]*e[14]*e[11]+e[2]*e[9]*e[15]-e[2]*e[13]*e[11]-e[3]*e[9]*e[14]+e[3]*e[13]*e[10],o[2]=e[1]*e[6]*e[15]-e[1]*e[14]*e[7]-e[2]*e[5]*e[15]+e[2]*e[13]*e[7]+e[3]*e[5]*e[14]-e[3]*e[13]*e[6],o[3]=-e[1]*e[6]*e[11]+e[1]*e[10]*e[7]+e[2]*e[5]*e[11]-e[2]*e[9]*e[7]-e[3]*e[5]*e[10]+e[3]*e[9]*e[6],o[4]=-e[4]*e[10]*e[15]+e[4]*e[14]*e[11]+e[6]*e[8]*e[15]-e[6]*e[12]*e[11]-e[7]*e[8]*e[14]+e[7]*e[12]*e[10],o[5]=e[0]*e[10]*e[15]-e[0]*e[14]*e[11]-e[2]*e[8]*e[15]+e[2]*e[12]*e[11]+e[3]*e[8]*e[14]-e[3]*e[12]*e[10],o[6]=-e[0]*e[6]*e[15]+e[0]*e[14]*e[7]+e[2]*e[4]*e[15]-e[2]*e[12]*e[7]-e[3]*e[4]*e[14]+e[3]*e[12]*e[6],o[7]=e[0]*e[6]*e[11]-e[0]*e[10]*e[7]-e[2]*e[4]*e[11]+e[2]*e[8]*e[7]+e[3]*e[4]*e[10]-e[3]*e[8]*e[6],o[8]=e[4]*e[9]*e[15]-e[4]*e[13]*e[11]-e[5]*e[8]*e[15]+e[5]*e[12]*e[11]+e[7]*e[8]*e[13]-e[7]*e[12]*e[9],o[9]=-e[0]*e[9]*e[15]+e[0]*e[13]*e[11]+e[1]*e[8]*e[15]-e[1]*e[12]*e[11]-e[3]*e[8]*e[13]+e[3]*e[12]*e[9],o[10]=e[0]*e[5]*e[15]-e[0]*e[13]*e[7]-e[1]*e[4]*e[15]+e[1]*e[12]*e[7]+e[3]*e[4]*e[13]-e[3]*e[12]*e[5],o[11]=-e[0]*e[5]*e[11]+e[0]*e[9]*e[7]+e[1]*e[4]*e[11]-e[1]*e[8]*e[7]-e[3]*e[4]*e[9]+e[3]*e[8]*e[5],o[12]=-e[4]*e[9]*e[14]+e[4]*e[13]*e[10]+e[5]*e[8]*e[14]-e[5]*e[12]*e[10]-e[6]*e[8]*e[13]+e[6]*e[12]*e[9],o[13]=e[0]*e[9]*e[14]-e[0]*e[13]*e[10]-e[1]*e[8]*e[14]+e[1]*e[12]*e[10]+e[2]*e[8]*e[13]-e[2]*e[12]*e[9],o[14]=-e[0]*e[5]*e[14]+e[0]*e[13]*e[6]+e[1]*e[4]*e[14]-e[1]*e[12]*e[6]-e[2]*e[4]*e[13]+e[2]*e[12]*e[5],o[15]=e[0]*e[5]*e[10]-e[0]*e[9]*e[6]-e[1]*e[4]*e[10]+e[1]*e[8]*e[6]+e[2]*e[4]*e[9]-e[2]*e[8]*e[5];for(var a=e[0]*o[0]+e[1]*o[4]+e[2]*o[8]+e[3]*o[12],l=0;l<16;l++)o[l]/=a;return r},y.transpose=function(t,r){r=r||new y;var e=t.m,o=r.m;return o[0]=e[0],o[1]=e[4],o[2]=e[8],o[3]=e[12],o[4]=e[1],o[5]=e[5],o[6]=e[9],o[7]=e[13],o[8]=e[2],o[9]=e[6],o[10]=e[10],o[11]=e[14],o[12]=e[3],o[13]=e[7],o[14]=e[11],o[15]=e[15],r},y.multiply=function(t,r,e){e=e||new y;var o=t.m,a=r.m,l=e.m;return l[0]=o[0]*a[0]+o[1]*a[4]+o[2]*a[8]+o[3]*a[12],l[1]=o[0]*a[1]+o[1]*a[5]+o[2]*a[9]+o[3]*a[13],l[2]=o[0]*a[2]+o[1]*a[6]+o[2]*a[10]+o[3]*a[14],l[3]=o[0]*a[3]+o[1]*a[7]+o[2]*a[11]+o[3]*a[15],l[4]=o[4]*a[0]+o[5]*a[4]+o[6]*a[8]+o[7]*a[12],l[5]=o[4]*a[1]+o[5]*a[5]+o[6]*a[9]+o[7]*a[13],l[6]=o[4]*a[2]+o[5]*a[6]+o[6]*a[10]+o[7]*a[14],l[7]=o[4]*a[3]+o[5]*a[7]+o[6]*a[11]+o[7]*a[15],l[8]=o[8]*a[0]+o[9]*a[4]+o[10]*a[8]+o[11]*a[12],l[9]=o[8]*a[1]+o[9]*a[5]+o[10]*a[9]+o[11]*a[13],l[10]=o[8]*a[2]+o[9]*a[6]+o[10]*a[10]+o[11]*a[14],l[11]=o[8]*a[3]+o[9]*a[7]+o[10]*a[11]+o[11]*a[15],l[12]=o[12]*a[0]+o[13]*a[4]+o[14]*a[8]+o[15]*a[12],l[13]=o[12]*a[1]+o[13]*a[5]+o[14]*a[9]+o[15]*a[13],l[14]=o[12]*a[2]+o[13]*a[6]+o[14]*a[10]+o[15]*a[14],l[15]=o[12]*a[3]+o[13]*a[7]+o[14]*a[11]+o[15]*a[15],e},y.identity=function(t){t=t||new y;var r=t.m;return r[0]=r[5]=r[10]=r[15]=1,r[1]=r[2]=r[3]=r[4]=r[6]=r[7]=r[8]=r[9]=r[11]=r[12]=r[13]=r[14]=0,t},y.perspective=function(t,r,e,o,a){var l=Math.tan(t*Math.PI/360)*e,d=l*r;return y.frustum(-d,d,-l,l,e,o,a)},y.frustum=function(t,r,e,o,a,l,d){d=d||new y;var n=d.m;return n[0]=2*a/(r-t),n[1]=0,n[2]=(r+t)/(r-t),n[3]=0,n[4]=0,n[5]=2*a/(o-e),n[6]=(o+e)/(o-e),n[7]=0,n[8]=0,n[9]=0,n[10]=-(l+a)/(l-a),n[11]=-2*l*a/(l-a),n[12]=0,n[13]=0,n[14]=-1,n[15]=0,d},y.ortho=function(t,r,e,o,a,l,d){d=d||new y;var n=d.m;return n[0]=2/(r-t),n[1]=0,n[2]=0,n[3]=-(r+t)/(r-t),n[4]=0,n[5]=2/(o-e),n[6]=0,n[7]=-(o+e)/(o-e),n[8]=0,n[9]=0,n[10]=-2/(l-a),n[11]=-(l+a)/(l-a),n[12]=0,n[13]=0,n[14]=0,n[15]=1,d},y.scale=function(t,r,e,o){o=o||new y;var a=o.m;return a[0]=t,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=e,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,o},y.translate=function(t,r,e,o){o=o||new y;var a=o.m;return a[0]=1,a[1]=0,a[2]=0,a[3]=t,a[4]=0,a[5]=1,a[6]=0,a[7]=r,a[8]=0,a[9]=0,a[10]=1,a[11]=e,a[12]=0,a[13]=0,a[14]=0,a[15]=1,o},y.rotate=function(t,r,e,o,a){if(!t||!r&&!e&&!o)return y.identity(a);a=a||new y;var l=a.m,d=Math.sqrt(r*r+e*e+o*o);t*=Math.PI/180,r/=d,e/=d,o/=d;var n=Math.cos(t),h=Math.sin(t),f=1-n;return l[0]=r*r*f+n,l[1]=r*e*f-o*h,l[2]=r*o*f+e*h,l[3]=0,l[4]=e*r*f+o*h,l[5]=e*e*f+n,l[6]=e*o*f-r*h,l[7]=0,l[8]=o*r*f-e*h,l[9]=o*e*f+r*h,l[10]=o*o*f+n,l[11]=0,l[12]=0,l[13]=0,l[14]=0,l[15]=1,a},y.lookAt=function(t,r,e,o,a,l,d,n,h,f){f=f||new y;var c=f.m,v=new g(t,r,e),E=new g(o,a,l),x=new g(d,n,h),w=v.subtract(E).unit(),b=x.cross(w).unit(),z=w.cross(b).unit();return c[0]=b.x,c[1]=b.y,c[2]=b.z,c[3]=-b.dot(v),c[4]=z.x,c[5]=z.y,c[6]=z.z,c[7]=-z.dot(v),c[8]=w.x,c[9]=w.y,c[10]=w.z,c[11]=-w.dot(v),c[12]=0,c[13]=0,c[14]=0,c[15]=1,f};function V(){this.unique=[],this.indices=[],this.map={}}V.prototype={add:function(t){var r=JSON.stringify(t);return r in this.map||(this.map[r]=this.unique.length,this.unique.push(t)),this.map[r]}};function X(t,r){this.buffer=null,this.target=t,this.type=r,this.data=[]}X.prototype={compile:function(t){for(var r=[],e=0,o=1e4;e<this.data.length;e+=o)r=Array.prototype.concat.apply(r,this.data.slice(e,e+o));var a=this.data.length?r.length/this.data.length:0;if(a!=Math.round(a))throw new Error("buffer elements not of consistent size, average size is "+a);this.buffer=this.buffer||i.createBuffer(),this.buffer.length=r.length,this.buffer.spacing=a,i.bindBuffer(this.target,this.buffer),i.bufferData(this.target,new this.type(r),t||i.STATIC_DRAW)}};function B(t){t=t||{},this.vertexBuffers={},this.indexBuffers={},this.addVertexBuffer("vertices","gl_Vertex"),t.coords&&this.addVertexBuffer("coords","gl_TexCoord"),t.normals&&this.addVertexBuffer("normals","gl_Normal"),t.colors&&this.addVertexBuffer("colors","gl_Color"),(!("triangles"in t)||t.triangles)&&this.addIndexBuffer("triangles"),t.lines&&this.addIndexBuffer("lines")}B.prototype={addVertexBuffer:function(t,r){var e=this.vertexBuffers[r]=new X(i.ARRAY_BUFFER,Float32Array);e.name=t,this[t]=[]},addIndexBuffer:function(t){this.indexBuffers[t]=new X(i.ELEMENT_ARRAY_BUFFER,Uint16Array),this[t]=[]},compile:function(){for(var t in this.vertexBuffers){var r=this.vertexBuffers[t];r.data=this[r.name],r.compile()}for(var e in this.indexBuffers){var r=this.indexBuffers[e];r.data=this[e],r.compile()}},transform:function(t){if(this.vertices=this.vertices.map(function(e){return t.transformPoint(g.fromArray(e)).toArray()}),this.normals){var r=t.inverse().transpose();this.normals=this.normals.map(function(e){return r.transformVector(g.fromArray(e)).unit().toArray()})}return this.compile(),this},computeNormals:function(){this.normals||this.addVertexBuffer("normals","gl_Normal");for(var t=0;t<this.vertices.length;t++)this.normals[t]=new g;for(var t=0;t<this.triangles.length;t++){var r=this.triangles[t],e=g.fromArray(this.vertices[r[0]]),o=g.fromArray(this.vertices[r[1]]),a=g.fromArray(this.vertices[r[2]]),l=o.subtract(e).cross(a.subtract(e)).unit();this.normals[r[0]]=this.normals[r[0]].add(l),this.normals[r[1]]=this.normals[r[1]].add(l),this.normals[r[2]]=this.normals[r[2]].add(l)}for(var t=0;t<this.vertices.length;t++)this.normals[t]=this.normals[t].unit().toArray();return this.compile(),this},computeWireframe:function(){for(var t=new V,r=0;r<this.triangles.length;r++)for(var e=this.triangles[r],o=0;o<e.length;o++){var a=e[o],l=e[(o+1)%e.length];t.add([Math.min(a,l),Math.max(a,l)])}return this.lines||this.addIndexBuffer("lines"),this.lines=t.unique,this.compile(),this},getAABB:function(){var t={min:new g(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)};t.max=t.min.negative();for(var r=0;r<this.vertices.length;r++){var e=g.fromArray(this.vertices[r]);t.min=g.min(t.min,e),t.max=g.max(t.max,e)}return t},getBoundingSphere:function(){for(var t=this.getAABB(),r={center:t.min.add(t.max).divide(2),radius:0},e=0;e<this.vertices.length;e++)r.radius=Math.max(r.radius,g.fromArray(this.vertices[e]).subtract(r.center).length());return r}},B.plane=function(t){t=t||{};for(var r=new B(t),e=t.detailX||t.detail||1,o=t.detailY||t.detail||1,a=t.width||2,l=t.height||2,d=0;d<=o;d++)for(var n=d/o,h=0;h<=e;h++){var f=h/e;if(r.vertices.push([(f-.5)*a,(n-.5)*l,0]),r.coords&&r.coords.push([f,n]),r.normals&&r.normals.push([0,0,1]),h<e&&d<o){var c=h+d*(e+1);r.triangles.push([c,c+1,c+e+1]),r.triangles.push([c+e+1,c+1,c+e+2])}}return r.compile(),r};var re=[[0,4,2,6,-1,0,0],[1,3,5,7,1,0,0],[0,1,4,5,0,-1,0],[2,6,3,7,0,1,0],[0,2,1,3,0,0,-1],[4,5,6,7,0,0,1]];function W(t){return new g((t&1)*2-1,(t&2)-1,(t&4)/2-1)}B.cube=function(t){for(var r=new B(t),e=t&&t.width||2,o=t&&t.height||2,a=t&&t.depth||2,l=0;l<re.length;l++){for(var d=re[l],n=l*4,h=0;h<4;h++){var f=d[h];const c=W(f).toArray();c[0]*=e/2,c[1]*=o/2,c[2]*=a/2,r.vertices.push(c),r.coords&&r.coords.push([h&1,(h&2)/2]),r.normals&&r.normals.push(d.slice(4,7))}r.triangles.push([n,n+1,n+2]),r.triangles.push([n+2,n+1,n+3])}return r.compile(),r},B.sphere=function(t){function r(z,Z,J){return h?[z,J,Z]:[z,Z,J]}function e(z){return z+(z-z*z)/2}t=t||{};for(var o=new B(t),a=new V,l=t.detail||6,d=0;d<8;d++)for(var n=W(d),h=n.x*n.y*n.z>0,f=[],c=0;c<=l;c++){for(var v=0;c+v<=l;v++){var E=c/l,x=v/l,w=(l-c-v)/l,b={vertex:new g(e(E),e(x),e(w)).unit().multiply(n).toArray()};o.coords&&(b.coord=n.y>0?[1-E,w]:[w,1-E]),f.push(a.add(b))}if(c>0)for(var v=0;c+v<=l;v++){var E=(c-1)*(l+1)+(c-1-(c-1)*(c-1))/2+v,x=c*(l+1)+(c-c*c)/2+v;o.triangles.push(r(f[E],f[E+1],f[x])),c+v<l&&o.triangles.push(r(f[x],f[E+1],f[x+1]))}}return o.vertices=a.unique.map(function(z){return z.vertex}),o.coords&&(o.coords=a.unique.map(function(z){return z.coord})),o.normals&&(o.normals=o.vertices),o.compile(),o},B.load=function(t,r){r=r||{},"coords"in r||(r.coords=!!t.coords),"normals"in r||(r.normals=!!t.normals),"colors"in r||(r.colors=!!t.colors),"triangles"in r||(r.triangles=!!t.triangles),"lines"in r||(r.lines=!!t.lines);var e=new B(r);return e.vertices=t.vertices,e.coords&&(e.coords=t.coords),e.normals&&(e.normals=t.normals),e.colors&&(e.colors=t.colors),e.triangles&&(e.triangles=t.triangles),e.lines&&(e.lines=t.lines),e.compile(),e};function G(t,r,e){this.t=arguments.length?t:Number.MAX_VALUE,this.hit=r,this.normal=e}G.prototype={mergeWith:function(t){t.t>0&&t.t<this.t&&(this.t=t.t,this.hit=t.hit,this.normal=t.normal)}};function H(){var t=i.getParameter(i.VIEWPORT),r=i.modelviewMatrix.m,e=new g(r[0],r[4],r[8]),o=new g(r[1],r[5],r[9]),a=new g(r[2],r[6],r[10]),l=new g(r[3],r[7],r[11]);this.eye=new g(-l.dot(e),-l.dot(o),-l.dot(a));var d=t[0],n=d+t[2],h=t[1],f=h+t[3];this.ray00=i.unProject(d,h,1).subtract(this.eye),this.ray10=i.unProject(n,h,1).subtract(this.eye),this.ray01=i.unProject(d,f,1).subtract(this.eye),this.ray11=i.unProject(n,f,1).subtract(this.eye),this.viewport=t}H.prototype={getRayForPixel:function(t,r){t=(t-this.viewport[0])/this.viewport[2],r=1-(r-this.viewport[1])/this.viewport[3];var e=g.lerp(this.ray00,this.ray10,t),o=g.lerp(this.ray01,this.ray11,t);return g.lerp(e,o,r).unit()}},H.hitTestBox=function(t,r,e,o){var a=e.subtract(t).divide(r),l=o.subtract(t).divide(r),d=g.min(a,l),n=g.max(a,l),h=d.max(),f=n.min();if(h>0&&h<f){var c=1e-6,v=t.add(r.multiply(h));return e=e.add(c),o=o.subtract(c),new G(h,v,new g((v.x>o.x)-(v.x<e.x),(v.y>o.y)-(v.y<e.y),(v.z>o.z)-(v.z<e.z)))}return null},H.hitTestSphere=function(t,r,e,o){var a=t.subtract(e),l=r.dot(r),d=2*r.dot(a),n=a.dot(a)-o*o,h=d*d-4*l*n;if(h>0){var f=(-d-Math.sqrt(h))/(2*l),c=t.add(r.multiply(f));return new G(f,c,c.subtract(e).divide(o))}return null},H.hitTestTriangle=function(t,r,e,o,a){var l=o.subtract(e),d=a.subtract(e),n=l.cross(d).unit(),h=n.dot(e.subtract(t))/n.dot(r);if(h>0){var f=t.add(r.multiply(h)),c=f.subtract(e),v=d.dot(d),E=d.dot(l),x=d.dot(c),w=l.dot(l),b=l.dot(c),z=v*w-E*E,Z=(w*x-E*b)/z,J=(v*b-E*x)/z;if(Z>=0&&J>=0&&Z+J<=1)return new G(h,f,n)}return null};function Y(t,r,e){let o;for(;(o=t.exec(r))!=null;)e(o)}var ie="LIGHTGL";function oe(t,r){function e(v){var E=document.getElementById(v);return E?E.text:v}t=e(t),r=e(r);var o="    uniform mat3 gl_NormalMatrix;    uniform mat4 gl_ModelViewMatrix;    uniform mat4 gl_ProjectionMatrix;    uniform mat4 gl_ModelViewProjectionMatrix;    uniform mat4 gl_ModelViewMatrixInverse;    uniform mat4 gl_ProjectionMatrixInverse;    uniform mat4 gl_ModelViewProjectionMatrixInverse;  ",a=o+"    attribute vec4 gl_Vertex;    attribute vec4 gl_TexCoord;    attribute vec3 gl_Normal;    attribute vec4 gl_Color;    vec4 ftransform() {      return gl_ModelViewProjectionMatrix * gl_Vertex;    }  ",l="    precision highp float;  "+o,d=t+r,n={};Y(/\b(gl_[^;]*)\b;/g,o,function(v){var E=v[1];if(d.indexOf(E)!=-1){var x=E.replace(/[a-z_]/g,"");n[x]=ie+E}}),d.indexOf("ftransform")!=-1&&(n.MVPM=ie+"gl_ModelViewProjectionMatrix"),this.usedMatrices=n;function h(v,E){var x={},w=/^((\s*\/\/.*\n|\s*#extension.*\n)+)[^]*$/.exec(E);return E=w?w[1]+v+E.substr(w[1].length):v+E,Y(/\bgl_\w+\b/g,v,function(b){b in x||(E=E.replace(new RegExp("\\b"+b+"\\b","g"),ie+b),x[b]=!0)}),E}t=h(a,t),r=h(l,r);function f(v,E){var x=i.createShader(v);if(i.shaderSource(x,E),i.compileShader(x),!i.getShaderParameter(x,i.COMPILE_STATUS))throw new Error("compile error: "+i.getShaderInfoLog(x));return x}if(this.program=i.createProgram(),i.attachShader(this.program,f(i.VERTEX_SHADER,t)),i.attachShader(this.program,f(i.FRAGMENT_SHADER,r)),i.linkProgram(this.program),!i.getProgramParameter(this.program,i.LINK_STATUS))throw new Error("link error: "+i.getProgramInfoLog(this.program));this.attributes={},this.uniformLocations={};var c={};Y(/uniform\s+sampler(1D|2D|3D|Cube)\s+(\w+)\s*;/g,t+r,function(v){c[v[2]]=1}),this.isSampler=c}function me(t){var r=Object.prototype.toString.call(t);return r=="[object Array]"||r=="[object Float32Array]"}function ge(t){var r=Object.prototype.toString.call(t);return r=="[object Number]"||r=="[object Boolean]"}new y,new y,oe.prototype={uniforms:function(t){i.useProgram(this.program);for(var r in t){var e=this.uniformLocations[r]||i.getUniformLocation(this.program,r);if(e){this.uniformLocations[r]=e;var o=t[r];if(o instanceof g?o=[o.x,o.y,o.z]:o instanceof y&&(o=o.m),me(o))switch(o.length){case 1:i.uniform1fv(e,new Float32Array(o));break;case 2:i.uniform2fv(e,new Float32Array(o));break;case 3:i.uniform3fv(e,new Float32Array(o));break;case 4:i.uniform4fv(e,new Float32Array(o));break;case 9:i.uniformMatrix3fv(e,!1,new Float32Array([o[0],o[3],o[6],o[1],o[4],o[7],o[2],o[5],o[8]]));break;case 16:i.uniformMatrix4fv(e,!1,new Float32Array([o[0],o[4],o[8],o[12],o[1],o[5],o[9],o[13],o[2],o[6],o[10],o[14],o[3],o[7],o[11],o[15]]));break;default:throw new Error(`don't know how to load uniform "`+r+'" of length '+o.length)}else if(ge(o))(this.isSampler[r]?i.uniform1i:i.uniform1f).call(i,e,o);else throw new Error('attempted to set uniform "'+r+'" to invalid value '+o)}}return this},draw:function(t,r){this.drawBuffers(t.vertexBuffers,t.indexBuffers[r==i.LINES?"lines":"triangles"],arguments.length<2?i.TRIANGLES:r)},drawBuffers:function(t,r,e){var o=this.usedMatrices,a=i.modelviewMatrix,l=i.projectionMatrix,d=o.MVMI||o.NM?a.inverse():null,n=o.PMI?l.inverse():null,h=o.MVPM||o.MVPMI?l.multiply(a):null,f={};if(o.MVM&&(f[o.MVM]=a),o.MVMI&&(f[o.MVMI]=d),o.PM&&(f[o.PM]=l),o.PMI&&(f[o.PMI]=n),o.MVPM&&(f[o.MVPM]=h),o.MVPMI&&(f[o.MVPMI]=h.inverse()),o.NM){var c=d.m;f[o.NM]=[c[0],c[4],c[8],c[1],c[5],c[9],c[2],c[6],c[10]]}this.uniforms(f);var v=0;for(var E in t){var x=t[E],w=this.attributes[E]||i.getAttribLocation(this.program,E.replace(/^(gl_.*)$/,ie+"$1"));w==-1||!x.buffer||(this.attributes[E]=w,i.bindBuffer(i.ARRAY_BUFFER,x.buffer),i.enableVertexAttribArray(w),i.vertexAttribPointer(w,x.buffer.spacing,i.FLOAT,!1,0,0),v=x.buffer.length/x.buffer.spacing)}for(var E in this.attributes)E in t||i.disableVertexAttribArray(this.attributes[E]);return v&&(!r||r.buffer)&&(r?(i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,r.buffer),i.drawElements(e,r.buffer.length,i.UNSIGNED_SHORT,0)):i.drawArrays(e,0,v)),this}};function F(t,r,e){e=e||{},this.id=i.createTexture(),this.width=t,this.height=r,this.format=e.format||i.RGBA,this.type=e.type||i.UNSIGNED_BYTE;var o=e.filter||e.magFilter||i.LINEAR,a=e.filter||e.minFilter||i.LINEAR;if(this.type===i.FLOAT){if(!F.canUseFloatingPointTextures())throw new Error("OES_texture_float is required but not supported");if((a!==i.NEAREST||o!==i.NEAREST)&&!F.canUseFloatingPointLinearFiltering())throw new Error("OES_texture_float_linear is required but not supported")}else if(this.type===i.HALF_FLOAT_OES){if(!F.canUseHalfFloatingPointTextures())throw new Error("OES_texture_half_float is required but not supported");if((a!==i.NEAREST||o!==i.NEAREST)&&!F.canUseHalfFloatingPointLinearFiltering())throw new Error("OES_texture_half_float_linear is required but not supported")}i.bindTexture(i.TEXTURE_2D,this.id),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,1),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,o),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,a),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,e.wrap||e.wrapS||i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,e.wrap||e.wrapT||i.CLAMP_TO_EDGE),i.texImage2D(i.TEXTURE_2D,0,this.format,t,r,0,this.format,this.type,null)}var K,j,ne;F.prototype={bind:function(t){i.activeTexture(i.TEXTURE0+(t||0)),i.bindTexture(i.TEXTURE_2D,this.id)},unbind:function(t){i.activeTexture(i.TEXTURE0+(t||0)),i.bindTexture(i.TEXTURE_2D,null)},canDrawTo:function(){K=K||i.createFramebuffer(),i.bindFramebuffer(i.FRAMEBUFFER,K),i.framebufferTexture2D(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,this.id,0);var t=i.checkFramebufferStatus(i.FRAMEBUFFER)==i.FRAMEBUFFER_COMPLETE;return i.bindFramebuffer(i.FRAMEBUFFER,null),t},drawTo:function(t){var r=i.getParameter(i.VIEWPORT);if(K=K||i.createFramebuffer(),j=j||i.createRenderbuffer(),i.bindFramebuffer(i.FRAMEBUFFER,K),i.bindRenderbuffer(i.RENDERBUFFER,j),(this.width!=j.width||this.height!=j.height)&&(j.width=this.width,j.height=this.height,i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_COMPONENT16,this.width,this.height)),i.framebufferTexture2D(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,this.id,0),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,j),i.checkFramebufferStatus(i.FRAMEBUFFER)!=i.FRAMEBUFFER_COMPLETE)throw new Error("Rendering to this texture is not supported (incomplete framebuffer)");i.viewport(0,0,this.width,this.height),t(),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindRenderbuffer(i.RENDERBUFFER,null),i.viewport(r[0],r[1],r[2],r[3])},swapWith:function(t){var r;r=t.id,t.id=this.id,this.id=r,r=t.width,t.width=this.width,this.width=r,r=t.height,t.height=this.height,this.height=r}},F.fromImage=function(t,r){r=r||{};var e=new F(t.width,t.height,r);try{i.texImage2D(i.TEXTURE_2D,0,e.format,e.format,e.type,t)}catch{throw location.protocol=="file:"?new Error('image not loaded for security reasons (serve this page over "http://" instead)'):new Error("image not loaded for security reasons (image must originate from the same domain as this page or use Cross-Origin Resource Sharing)")}return r.minFilter&&r.minFilter!=i.NEAREST&&r.minFilter!=i.LINEAR&&i.generateMipmap(i.TEXTURE_2D),e},F.fromURL=function(t,r){ne=ne||function(){var l=document.createElement("canvas").getContext("2d");l.canvas.width=l.canvas.height=128;for(var d=0;d<l.canvas.height;d+=16)for(var n=0;n<l.canvas.width;n+=16)l.fillStyle=(n^d)&16?"#FFF":"#DDD",l.fillRect(n,d,16,16);return l.canvas}();var e=F.fromImage(ne,r),o=new Image,a=i;return o.onload=function(){a.makeCurrent(),F.fromImage(o,r).swapWith(e)},o.src=t,e},F.canUseFloatingPointTextures=function(){return!!i.getExtension("OES_texture_float")},F.canUseFloatingPointLinearFiltering=function(){return!!i.getExtension("OES_texture_float_linear")},F.canUseHalfFloatingPointTextures=function(){return!!i.getExtension("OES_texture_half_float")},F.canUseHalfFloatingPointLinearFiltering=function(){return!!i.getExtension("OES_texture_half_float_linear")};function g(t,r,e){this.x=t||0,this.y=r||0,this.z=e||0}return g.prototype={negative:function(){return new g(-this.x,-this.y,-this.z)},add:function(t){return t instanceof g?new g(this.x+t.x,this.y+t.y,this.z+t.z):new g(this.x+t,this.y+t,this.z+t)},subtract:function(t){return t instanceof g?new g(this.x-t.x,this.y-t.y,this.z-t.z):new g(this.x-t,this.y-t,this.z-t)},multiply:function(t){return t instanceof g?new g(this.x*t.x,this.y*t.y,this.z*t.z):new g(this.x*t,this.y*t,this.z*t)},divide:function(t){return t instanceof g?new g(this.x/t.x,this.y/t.y,this.z/t.z):new g(this.x/t,this.y/t,this.z/t)},equals:function(t){return this.x==t.x&&this.y==t.y&&this.z==t.z},dot:function(t){return this.x*t.x+this.y*t.y+this.z*t.z},cross:function(t){return new g(this.y*t.z-this.z*t.y,this.z*t.x-this.x*t.z,this.x*t.y-this.y*t.x)},length:function(){return Math.sqrt(this.dot(this))},unit:function(){return this.divide(this.length())},min:function(){return Math.min(Math.min(this.x,this.y),this.z)},max:function(){return Math.max(Math.max(this.x,this.y),this.z)},toAngles:function(){return{theta:Math.atan2(this.z,this.x),phi:Math.asin(this.y/this.length())}},angleTo:function(t){return Math.acos(this.dot(t)/(this.length()*t.length()))},toArray:function(t){return[this.x,this.y,this.z].slice(0,t||3)},clone:function(){return new g(this.x,this.y,this.z)},init:function(t,r,e){return this.x=t,this.y=r,this.z=e,this}},g.negative=function(t,r){return r.x=-t.x,r.y=-t.y,r.z=-t.z,r},g.add=function(t,r,e){return r instanceof g?(e.x=t.x+r.x,e.y=t.y+r.y,e.z=t.z+r.z):(e.x=t.x+r,e.y=t.y+r,e.z=t.z+r),e},g.subtract=function(t,r,e){return r instanceof g?(e.x=t.x-r.x,e.y=t.y-r.y,e.z=t.z-r.z):(e.x=t.x-r,e.y=t.y-r,e.z=t.z-r),e},g.multiply=function(t,r,e){return r instanceof g?(e.x=t.x*r.x,e.y=t.y*r.y,e.z=t.z*r.z):(e.x=t.x*r,e.y=t.y*r,e.z=t.z*r),e},g.divide=function(t,r,e){return r instanceof g?(e.x=t.x/r.x,e.y=t.y/r.y,e.z=t.z/r.z):(e.x=t.x/r,e.y=t.y/r,e.z=t.z/r),e},g.cross=function(t,r,e){return e.x=t.y*r.z-t.z*r.y,e.y=t.z*r.x-t.x*r.z,e.z=t.x*r.y-t.y*r.x,e},g.unit=function(t,r){var e=t.length();return r.x=t.x/e,r.y=t.y/e,r.z=t.z/e,r},g.fromAngles=function(t,r){return new g(Math.cos(t)*Math.cos(r),Math.sin(r),Math.sin(t)*Math.cos(r))},g.randomDirection=function(){return g.fromAngles(Math.random()*Math.PI*2,Math.asin(Math.random()*2-1))},g.min=function(t,r){return new g(Math.min(t.x,r.x),Math.min(t.y,r.y),Math.min(t.z,r.z))},g.max=function(t,r){return new g(Math.max(t.x,r.x),Math.max(t.y,r.y),Math.max(t.z,r.z))},g.lerp=function(t,r,e){return r.subtract(t).multiply(e).add(t)},g.fromArray=function(t){return new g(t[0],t[1],t[2])},g.angleBetween=function(t,r){return t.angleTo(r)},s}();const Re=new p.Vector(0,-4,0);class he{constructor(s,u){this.center=new p.Vector(s.x,s.y,s.z),this.oldCenter=new p.Vector(s.x,s.y,s.z),this.radius=u,this.cinematic=!1,this.velocity=new p.Vector(0,0,0),this.acceleration=new p.Vector(0,0,0),this.mass=4/3*Math.PI*Math.pow(u,3)*1e3,this.invMass=1/this.mass,this.radiusSquared=u*u,this.mesh=p.Mesh.sphere({detail:10})}update(s,u){if(this.cinematic)this.velocity=new p.Vector(0,0,0);else{this.oldCenter=new p.Vector(this.center.x,this.center.y,this.center.z);const m=Math.max(0,Math.min(1,(this.radius-this.center.y)/(2*this.radius))),T=Re.multiply(-1.35*this.mass*m),M=this.velocity.unit().multiply(-1e3*this.radiusSquared*m*this.velocity.dot(this.velocity));this.addForce(M),this.addForce(T),this.addForce(Re.multiply(this.mass)),this.velocity=this.velocity.add(this.acceleration.multiply(s)),this.acceleration=new p.Vector(0,0,0),this.center=this.center.add(this.velocity.multiply(s)),this.center.y<this.radius-u.y&&(this.center.y=this.radius-1,this.velocity.y=Math.abs(this.velocity.y)*.7)}}addForce(s){this.cinematic?console.warn("Trying to add force to a cinematic sphere."):this.acceleration=this.acceleration.add(s.multiply(this.invMass))}move(s){this.oldCenter=new p.Vector(this.center.x,this.center.y,this.center.z),this.center=new p.Vector(s.x,s.y,s.z),this.cinematic||console.warn("Moving a non cinematic sphere.")}}function Ae(i=0,s=1){const u=1-Math.random(),m=Math.random();return Math.sqrt(-2*Math.log(u))*Math.cos(2*Math.PI*m)*s+i}const ee=new p.Vector(1e3,0,0),Be=.5,Ue=1,Se=2*Math.PI*Ue,se=class se{constructor(s){this.startingPoint=new p.Vector(s.x,s.y,s.z),this.center=new p.Vector(s.x,s.y,s.z),this.force=new p.Vector(0,0,190+Ae(0,20));const u=.25,m=.15;this.body=new he(s,u),this.leftArm=new he(ee,m),this.rightArm=new he(ee,m),this.leftFoot=new he(ee,m),this.rightFoot=new he(ee,m),this.body.cinematic=!se.useGravity,this.leftArm.cinematic=!0,this.rightArm.cinematic=!0,this.leftFoot.cinematic=!0,this.rightFoot.cinematic=!0,this.spheres=[this.body,this.leftArm,this.rightArm,this.leftFoot,this.rightFoot],this.divingDistance=0,this.divingTime=1e3}jump(s){this.body.cinematic=!1,this.body.velocity=new p.Vector(0,0,4.5+Ae(0,1)),this.body.center=new p.Vector(this.startingPoint.x,1,-s.z/2)}getArmOffset(s,u){return new p.Vector(0,Math.cos(Se*s+u),Math.sin(Se*s+u)).multiply(Be)}update(s,u,m){if(se.swimming){this.body.addForce(this.force);const T=this.getArmOffset(u,0),M=this.getArmOffset(u,Math.PI),A=this.getArmOffset(u*2,0),S=this.getArmOffset(u*2,Math.PI);this.rightArm.move(this.body.center.add(T).add(new p.Vector(.3,0,0))),this.leftArm.move(this.body.center.add(M).add(new p.Vector(-.3,0,0))),this.rightFoot.move(this.body.center.add(new p.Vector(.15,A.y*.5,-1))),this.leftFoot.move(this.body.center.add(new p.Vector(-.15,S.y*.5,-1)))}else this.rightArm.move(ee),this.leftArm.move(ee),this.rightFoot.move(ee),this.leftFoot.move(ee);for(let T of this.spheres)T.update(s,m);!this.hasDove&&this.body.center.y<=0&&this.body.oldCenter.y>=0&&(this.divingDistance=this.body.center.z+m.z/2,this.divingTime=u,this.hasDove=!0,console.log("dived : "+this.divingDistance))}};ve(se,"useGravity",!1),ve(se,"swimming",!1),ve(se,"showFlags",!0);let L=se;const ze=`
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
`;function q(i,s,u=null){this.gl=i,this.damping=.02,this.areaConservationEnabled=!0,this.visualizationWavesEnabled=!0,this.sqrt_2_PI=Math.sqrt(2*Math.PI),this.spheres=[];var m=`
    varying vec2 coord;
    void main() {
      coord = gl_Vertex.xy * 0.5 + 0.5;
      gl_Position = vec4(gl_Vertex.xyz, 1.0);
    }
  `;if(this.reset(s,u),!p.Texture.canUseFloatingPointTextures())throw new Error("This demo requires the OES_texture_float extension");this.dropShader=new p.Shader(m,`
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
  `),this.updateShader=new p.Shader(m,`
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
  `),this.normalShader=new p.Shader(m,`
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
  `),this.sphereShader=new p.Shader(m,`
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
  `),this.visualizationWavesShader=new p.Shader(m,`
    uniform sampler2D texture;
    uniform bool add;
    uniform vec3 poolSize;
    varying vec2 coord;

    `+ze+`

    void main() {
      vec4 info = texture2D(texture, coord);
      float w = getDivingWaves(coord).x + getRecordWave(coord);
      info.r += add ? w : -w;
      gl_FragColor = info;
    }
    `)}q.prototype.reset=function(i,s=null){this.WR_position=1e5,this.prev_WR_position=0,s!==null?(console.log("resolution.y : "+s.y),this.W=Math.round(s.x),this.H=Math.round(s.y),console.log("Using custom resolution:",this.W,this.H)):(this.W=256,this.H=256),this.plane=p.Mesh.plane({detail:255,width:i.x,height:i.z}),this.delta=new p.Vector(1/this.W,1/this.H);const u=this.gl;this.textureA&&u.deleteTexture(this.textureA.id),this.textureB&&u.deleteTexture(this.textureB.id),this.textureA=new p.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:m}),this.textureB=new p.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:m}),this.areaConservationTexture=new p.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:m}),this.showAreaConservedGrid=!1,this.showProjectionGrid=!1,this.poolSize=i;var m=p.Texture.canUseFloatingPointLinearFiltering()?this.gl.LINEAR:this.gl.NEAREST;(!this.textureA.canDrawTo()||!this.textureB.canDrawTo())&&p.Texture.canUseHalfFloatingPointTextures()&&(console.log("No draw"),m=p.Texture.canUseHalfFloatingPointLinearFiltering()?this.gl.LINEAR:this.gl.NEAREST,this.textureA=new p.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:m}),this.textureB=new p.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:m}))};q.prototype.addDrop=function(i,s,u,m){var T=this;this.textureB.drawTo(function(){T.textureA.bind(),T.dropShader.uniforms({center:[i,s],radius:u,strength:m,poolSize:[T.poolSize.x,T.poolSize.y,T.poolSize.z]}).draw(T.plane)}),this.textureB.swapWith(this.textureA)};q.prototype.addOrRemoveVisualizationWaves=function(i,s,u){if(!this.visualizationWavesEnabled)return;var m=this;const T=4,M=new Float32Array(T*s.length);for(let S=0;S<s.length;S++)M[T*S]=s[S].body.center.x,M[T*S+1]=s[S].body.center.z,M[T*S+2]=s[S].divingDistance,M[T*S+3]=s[S].divingTime;const A=this.gl;A.useProgram(this.visualizationWavesShader.program),A.uniform1fv(A.getUniformLocation(this.visualizationWavesShader.program,"swimmersAttributes"),M),this.textureB.drawTo(function(){m.textureA.bind(),m.visualizationWavesShader.uniforms({poolSize:[m.poolSize.x,m.poolSize.y,m.poolSize.z],wr:m.WR_position,sqrt_2_PI:m.sqrt_2_PI,add:i,swimmersNumber:s.length,time:u}).draw(m.plane)}),this.textureB.swapWith(this.textureA)};q.prototype.addSwimmer=function(i){for(let s of i.spheres)this.addSphere(s)};q.prototype.addSphere=function(i){this.spheres.push(i)};q.prototype.updateSpheres=function(i){this.prev_WR_position=this.WR_position,this.WR_position+=i*2.4;for(let u=0;u<this.spheres.length;u++){const m=this.spheres[u];this.moveSphere(m.oldCenter,m.center,m.radius)}};q.prototype.moveSphere=function(i,s,u){var m=this;this.textureB.drawTo(function(){m.textureA.bind(),m.sphereShader.uniforms({oldCenter:i,newCenter:s,radius:u,poolSize:[m.poolSize.x,m.poolSize.y,m.poolSize.z]}).draw(m.plane)}),this.textureB.swapWith(this.textureA)};q.prototype.stepSimulation=function(){var i=this;this.textureB.drawTo(function(){i.textureA.bind(),i.updateShader.uniforms({delta:[i.delta.x,i.delta.y],wr:i.WR_position,prev_wr:i.prev_WR_position,poolSize:[i.poolSize.x,i.poolSize.y,i.poolSize.z],sqrt_2_PI:i.sqrt_2_PI,damping:i.damping}).draw(i.plane)}),this.textureB.swapWith(this.textureA),this.updateAreaConservation()};q.prototype.updateNormals=function(){var i=this;this.textureB.drawTo(function(){i.textureA.bind(),i.normalShader.uniforms({delta:[i.delta.x,i.delta.y]}).draw(i.plane)}),this.textureB.swapWith(this.textureA)};q.prototype.setAreaConservation=function(i){this.areaConservationEnabled=i};q.prototype.updateAreaConservation=function(){if(!this.areaConservationEnabled)return;var i,s,u;if(this.textureA.type===this.gl.FLOAT)i=this.gl.FLOAT,s=Float32Array,u="WEBGL_color_buffer_float";else if(this.textureA.type===this.gl.HALF_FLOAT_OES)i=this.gl.HALF_FLOAT_OES,s=Uint16Array,u="EXT_color_buffer_half_float";else{console.warn("Unsupported texture type for reading");return}if(!this.gl.getExtension(u)){console.warn(u+" not available; cannot read pixels");return}this.fb||(this.fb=this.gl.createFramebuffer()),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.fb),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,this.textureA.id,0);const m=this.gl.checkFramebufferStatus(this.gl.FRAMEBUFFER);if(m!==this.gl.FRAMEBUFFER_COMPLETE){console.error("Framebuffer incomplete: "+m+" for texture type "+this.textureA.type),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null);return}this.gl.pixelStorei(this.gl.PACK_ALIGNMENT,1);const T=new s(this.W*this.H*4),M=new Float32Array(this.W*this.H*4);this.gl.readPixels(0,0,this.W,this.H,this.gl.RGBA,i,T);for(let U=0;U<this.W;U++)M[U*4+1]=1;const A=this.poolSize.x/this.W,S=this.poolSize.z/this.H,O=A*A,I=S*S;if(this.textureA.type===this.gl.FLOAT){for(let U=0;U<this.H;U+=1)for(let y=0;y<this.W;y+=1){const V=(U*this.W+y)*4,X=((this.H-1-U)*this.W+y)*4,B=M[X],re=M[X+1];if(y+1<this.W){const W=T[V]-T[V+4],G=Math.sqrt(W*W+O);M[X+4]=B+G}if(U+1<this.H){const W=T[V]-T[V+this.W*4],G=Math.sqrt(W*W+I);M[X-4*this.W+1]=re+G}}this.gl.bindTexture(this.gl.TEXTURE_2D,this.areaConservationTexture.id),this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT,1),this.gl.texSubImage2D(this.gl.TEXTURE_2D,0,0,0,this.W,this.H,this.gl.RGBA,this.gl.FLOAT,M)}this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.bindTexture(this.gl.TEXTURE_2D,null)};var ae=`
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
`;function te(i,s,u,m){this.water=s,this.gl=i,this.tileTexture=p.Texture.fromImage(document.getElementById("tiles"),{minFilter:this.gl.LINEAR_MIPMAP_LINEAR,wrap:this.gl.REPEAT,format:this.gl.RGB}),this.flagTexture=p.Texture.fromImage(document.getElementById("flag"),{minFilter:this.gl.LINEAR_MIPMAP_LINEAR,wrap:this.gl.REPEAT,format:this.gl.RGB}),this.flagSize=m,this.flagCenter=u,this.lightDir=new p.Vector(2,2,-1).unit(),this.causticTex=new p.Texture(1024,1024),this.waterShaders=[];for(var T=0;T<2;T++)this.waterShaders[T]=new p.Shader(`
      uniform sampler2D water;
      uniform vec3 poolSizeVertexShader;
      varying vec3 position;
      void main() {
        vec4 info = texture2D(water, gl_Vertex.xy / poolSizeVertexShader.xz + 0.5);
        position = gl_Vertex.xzy;
        position.y += info.r;
        gl_Position = gl_ModelViewProjectionMatrix * vec4(position, 1.0);
      }
    `,ae+`
      uniform vec3 eye;
      varying vec3 position;
      uniform bool showFlags;
      uniform samplerCube sky;
      uniform bool showProjectionGrid;
      uniform bool showAreaConservedGrid;

      `+ze+`
      
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
    `);this.sphereMesh=p.Mesh.sphere({detail:10}),this.sphereShader=new p.Shader(ae+`
    varying vec3 position;
  void main() {
    position = sphereCenter + gl_Vertex.xyz * sphereRadius;
    gl_Position = gl_ModelViewProjectionMatrix * vec4(position, 1.0);
  }
  `,ae+`
    varying vec3 position;
  void main() {
    gl_FragColor = vec4(getSphereColor(position), 1.0);
      vec4 info = texture2D(water, position.xz / poolSize.xz + 0.5);
    if (position.y < info.r) {
      gl_FragColor.rgb *= underwaterColor * 1.2;
    }
  }
  `),this.reset(),this.cubeShader=new p.Shader(ae+`
    varying vec3 position;
  void main() {
    position = gl_Vertex.xyz;
    position.y = ((1.0 - position.y) * (7.0 / 12.0) - 1.0) * poolSize.y;
    gl_Position = gl_ModelViewProjectionMatrix * vec4(position, 1.0);
  }
  `,ae+`
    varying vec3 position;
  void main() {
    gl_FragColor = vec4(getWallColor(position), 1.0);
      vec4 info = texture2D(water, position.xz / poolSize.xz + 0.5);
    if (position.y < info.r) {
      gl_FragColor.rgb *= underwaterColor * 1.2;
    }
  }
  `),this.sphereCenter=new p.Vector,this.sphereRadius=0;var M=!!this.gl.getExtension("OES_standard_derivatives");this.causticsShader=new p.Shader(ae+`
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
  `,(M?`#extension GL_OES_standard_derivatives: enable
`:"")+`
  `+ae+`
    varying vec3 oldPos;
    varying vec3 newPos;
    varying vec3 ray;

  void main() {
    `+(M?`
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
  `)}te.prototype.reset=function(){this.cubeMesh=p.Mesh.cube({width:this.water.poolSize.x,height:2,depth:this.water.poolSize.z}),this.cubeMesh.triangles.splice(4,2),this.cubeMesh.compile()};te.prototype.updateCaustics=function(i){};te.prototype.renderWater=function(i,s,u,m){var T=new p.Raytracer;if(i.textureA.bind(0),this.tileTexture.bind(1),s.bind(2),this.causticTex.bind(3),this.flagTexture.bind(4),i.areaConservationTexture.bind(5),this.gl.enable(this.gl.CULL_FACE),L.showFlags){const S=new Float32Array(4*u.length);for(let I=0;I<u.length;I++)S[4*I]=u[I].body.center.x,S[4*I+1]=u[I].body.center.z,S[4*I+2]=u[I].divingDistance,S[4*I+3]=u[I].divingTime;const O=this.gl;O.useProgram(this.waterShaders[0].program),O.uniform1fv(O.getUniformLocation(this.waterShaders[0].program,"swimmersAttributes"),S),O.useProgram(this.waterShaders[1].program),O.uniform1fv(O.getUniformLocation(this.waterShaders[1].program,"swimmersAttributes"),S)}for(var M=0;M<2;M++)this.gl.cullFace(M?this.gl.BACK:this.gl.FRONT),this.waterShaders[M].uniforms({light:this.lightDir,water:0,tiles:1,sky:2,causticTex:3,flag:4,areaConservationTexture:5,areaConservation:i.areaConservationEnabled,flagSize:this.flagSize,flagCenter:[this.flagCenter.x,this.flagCenter.y],poolSize:[i.poolSize.x,i.poolSize.y,i.poolSize.z],poolSizeVertexShader:[i.poolSize.x,i.poolSize.y,i.poolSize.z],eye:T.eye,sphereCenter:this.sphereCenter,sphereRadius:this.sphereRadius,showProjectionGrid:i.showProjectionGrid,showAreaConservedGrid:i.showAreaConservedGrid,wr:i.WR_position,swimmersNumber:u.length,showFlags:L.showFlags,time:m}).draw(i.plane);this.gl.disable(this.gl.CULL_FACE)};te.prototype.renderSpheres=function(i){for(let s of i.spheres)this.renderSphere(i,s)};te.prototype.renderSphere=function(i,s){i.textureA.bind(0),this.causticTex.bind(1),this.sphereShader.uniforms({light:this.lightDir,water:0,causticTex:1,sphereCenter:[s.center.x,s.center.y,s.center.z],sphereRadius:s.radius,poolSize:[i.poolSize.x,i.poolSize.y,i.poolSize.z]}).draw(s.mesh)};te.prototype.renderSphereOld=function(i){i.textureA.bind(0),this.causticTex.bind(1),this.sphereShader.uniforms({light:this.lightDir,water:0,causticTex:1,sphereCenter:this.sphereCenter,sphereRadius:this.sphereRadius,poolSize:[i.poolSize.x,i.poolSize.y,i.poolSize.z]}).draw(this.sphereMesh)};te.prototype.renderCube=function(i){this.gl.enable(this.gl.CULL_FACE),i.textureA.bind(0),this.tileTexture.bind(1),this.causticTex.bind(2),this.cubeShader.uniforms({light:this.lightDir,water:0,tiles:1,causticTex:2,sphereCenter:this.sphereCenter,sphereRadius:this.sphereRadius,poolSize:[i.poolSize.x,i.poolSize.y,i.poolSize.z]}).draw(this.cubeMesh),this.gl.disable(this.gl.CULL_FACE)};function Te(i,s){this.gl=s,this.id=s.createTexture(),s.bindTexture(s.TEXTURE_CUBE_MAP,this.id),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,1),s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAG_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),s.texImage2D(s.TEXTURE_CUBE_MAP_NEGATIVE_X,0,s.RGB,s.RGB,s.UNSIGNED_BYTE,i.xneg),s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X,0,s.RGB,s.RGB,s.UNSIGNED_BYTE,i.xpos),s.texImage2D(s.TEXTURE_CUBE_MAP_NEGATIVE_Y,0,s.RGB,s.RGB,s.UNSIGNED_BYTE,i.yneg),s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_Y,0,s.RGB,s.RGB,s.UNSIGNED_BYTE,i.ypos),s.texImage2D(s.TEXTURE_CUBE_MAP_NEGATIVE_Z,0,s.RGB,s.RGB,s.UNSIGNED_BYTE,i.zneg),s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_Z,0,s.RGB,s.RGB,s.UNSIGNED_BYTE,i.zpos)}Te.prototype.bind=function(i){this.gl.activeTexture(this.gl.TEXTURE0+(i||0)),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,this.id)};Te.prototype.unbind=function(i){this.gl.activeTexture(this.gl.TEXTURE0+(i||0)),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,null)};const Ce=200,ke=`
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

`;class Ve{constructor(s,u){if(this.gl=s,this.copyVideo=!1,this.show=!1,s===null){alert("Unable to initialize WebGL. Your browser or machine may not support it.");return}s.clearColor(0,0,0,1),s.clear(s.COLOR_BUFFER_BIT),this.shader=new p.Shader(`
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
`),this.mesh=p.Mesh.plane({width:2,height:2,coords:!0,normals:!0}),this.mesh.transform(p.Matrix.rotate(90,1,0,0)),this.mesh.transform(p.Matrix.translate(0,.1,0)),this.programInfo=null,this.texture=this.initTexture(),this.video=this.setupVideo(u),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!0)}render(s,u,m){this.show&&(this.copyVideo&&this.updateTexture(),(!this.mesh.vertexBuffers||!this.mesh.vertexBuffers.vertex)&&this.mesh.compile(),this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture),this.shader.uniforms({uSampler:0,iTime:s,poolSize:[m.x,m.y,m.z],iResolution:[this.gl.canvas.width,this.gl.canvas.height],sparksEnabled:u.enabled,sparksGlow:u.glow,sparksGlowOffset:u.glowOffset,sparksStroke:u.stroke,sparksNumber:u.num,sparksLengthFactor:u.lengthFactor,sparksSizeFactor:u.sizeFactor,fov:u.fov}).draw(this.mesh),this.gl.disable(this.gl.BLEND))}initTexture(){const s=this.gl.createTexture();this.gl.bindTexture(this.gl.TEXTURE_2D,s);const u=0,m=this.gl.RGBA,T=1,M=1,A=0,S=this.gl.RGBA,O=this.gl.UNSIGNED_BYTE,I=new Uint8Array([0,0,255,255]);return this.gl.texImage2D(this.gl.TEXTURE_2D,u,m,T,M,A,S,O,I),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),s}updateTexture(){const u=this.gl.RGBA,m=this.gl.RGBA,T=this.gl.UNSIGNED_BYTE;this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture),this.gl.texImage2D(this.gl.TEXTURE_2D,0,u,m,T,this.video)}setupVideo(s){const u=document.createElement("video");let m=!1,T=!1;u.playsInline=!0,u.muted=!0,u.loop=!0,u.addEventListener("playing",()=>{m=!0,A()},!0),u.addEventListener("timeupdate",()=>{T=!0,A()},!0),u.src=s,u.play();const M=this,A=()=>{m&&T&&(M.copyVideo=!0)};return u}}function We(i){return i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n/g,"<br>")}function Ge(i){var s=We(i);s=="WebGL not supported"&&(s='Your browser does not support WebGL.<br>Please see    <a href="http://www.khronos.org/webgl/wiki/Getting_a_WebGL_Implementation">    Getting a WebGL Implementation</a>.');var u=document.getElementById("loading");u.innerHTML=s,u.style.zIndex=1}window.onerror=Ge;var _=p.create(),R,Me,k;const N=[],Ee=10;var le=-25,pe=-200.5,ue=0;let ye=0,we=0;var ce=4;const be=17;let fe=0,de=0;var $=!1,xe,_e,C=new p.Vector(2,1,2);let P=new p.Vector(256,256),D={numSteps:2,focal:45,sparks:{enabled:!1,glow:5,glowOffset:.5,lengthFactor:1,stroke:.01,num:40,sizeFactor:50,fov:Math.PI/4}};const Xe=new Oe;function Fe(){document.getElementById("warning").hidden=!(P.x*P.y>3e5&&R&&R.areaConservationEnabled)}function Q(){console.log("reset"),document.getElementById("resolution").innerText=`Resolution: ${P.x} x ${P.y}`,Fe(),xe=new p.Vector(0,-C.z/2+1),R.reset(C,P),k.flagCenter=xe,k.flagSize=_e,k.reset();const i=C.x/Ee;let s=-C.x/2+i/2;for(let u of N)u.body.center.x=s,u.startingPoint.x=s,s+=i}window.onload=function(){var i=window.devicePixelRatio||1,s=document.getElementById("help");function u(){var n=innerWidth,h=innerHeight;_.canvas.width=n*i,_.canvas.height=h*i,_.canvas.style.width=n+"px",_.canvas.style.height=h+"px",_.viewport(0,0,_.canvas.width,_.canvas.height),_.matrixMode(_.PROJECTION),_.loadIdentity(),_.perspective(D.focal,_.canvas.width/_.canvas.height,.01,100),_.matrixMode(_.MODELVIEW),d()}document.body.appendChild(_.canvas),_.canvas.oncontextmenu=function(n){n.preventDefault()},_.clearColor(0,0,0,1),xe=new p.Vector(0,-C.z/2+1),_e=.7,R=new q(_,C);const m=new Ve(_,"./video.mp4"),T=document.getElementById("drop-zone");let M=0;document.addEventListener("dragenter",n=>{M++,T.style.display="flex"}),document.addEventListener("dragover",n=>{n.preventDefault(),n.dataTransfer.dropEffect="copy"}),document.addEventListener("dragleave",n=>{M--,M===0&&(T.style.display="none")}),document.addEventListener("drop",n=>{n.preventDefault(),M=0,T.style.display="none";const h=n.dataTransfer.files;if(h.length>0&&(h[0].type.startsWith("video/")||h[0].name.endsWith(".mp4"))){const f=URL.createObjectURL(h[0]);m.video.src=f,m.video.play(),console.log("Loaded:",h[0].name)}});const A=Xe.addFolder("variables");A.add(C,"x",1,25).name("pool width").onChange(function(n){Q()}).listen(),A.add(C,"z",1,50).name("pool height").onChange(function(n){Q()}).listen(),A.add(C,"y",1,3).name("pool depth").onChange(function(n){Q()}).listen(),A.add(R,"damping",.005,.15).name("water damping").listen(),A.add(R,"areaConservationEnabled","areaConservationEnabled").name("area conservation").listen(),A.add(L,"showFlags").name("show flags").listen(),A.add(D,"focal",28,45).name("focal").listen().onChange(function(n){D.sparks.fov=n*2*Math.PI/360,_.matrixMode(_.PROJECTION),_.loadIdentity(),_.perspective(D.focal,_.canvas.width/_.canvas.height,.01,100),_.matrixMode(_.MODELVIEW),console.log("perspective : "+D.focal)});const S=A.addFolder("Sparks");if(S.add(D.sparks,"enabled").name("sparks enabled"),S.add(D.sparks,"glow",1,30).name("sparks glow factor"),S.add(D.sparks,"lengthFactor",.1,10).name("sparks length factor"),S.add(D.sparks,"glowOffset",.1,3).name("sparks glow offset"),S.add(D.sparks,"stroke",.001,.05).name("sparks stroke"),S.add(D.sparks,"num",10,Ce).step(1).name("sparks number"),S.add(D.sparks,"sizeFactor",10,100).name("size factor"),k=new te(_,R,xe,_e),Me=new Te({xneg:document.getElementById("xneg"),xpos:document.getElementById("xpos"),yneg:document.getElementById("ypos"),ypos:document.getElementById("ypos"),zneg:document.getElementById("zneg"),zpos:document.getElementById("zpos")},_),!R.textureA.canDrawTo()||!R.textureB.canDrawTo())throw new Error("Rendering to floating-point textures is required but not supported");const O=new p.Vector(-.4,-.75,.2),I=new p.Vector(.4,-.75,.2),U=new L(O);new L(I);for(let n=0;n<1;n++)N.push(new L(O));const y=U.body.radius;for(let n of N)R.addSwimmer(n);Q();for(var V=0;V<20;V++)R.addDrop(Math.random()*2-1,Math.random()*2-1,.06,V&1?.01:-.01);document.getElementById("loading").innerHTML="",u();var X=window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(n){setTimeout(n,0)},B=new Date().getTime();function re(){var n=new Date().getTime();$||(l((n-B)/1e3),d()),B=n,X(re)}X(re),window.onresize=u;var W,G,H,Y=-1,ie=0,oe=1,me=2;const ge=3;var F,K;function j(n,h,f){if(F=n,K=h,!f||f.button===0){var c=new p.Raytracer,v=c.getRayForPixel(n*i,h*i),E=c.eye.add(v.multiply(-c.eye.y/v.y));for(let w of N){var x=p.Raytracer.hitTestSphere(c.eye,v,w.body.center,w.body.radius);if(x){Y=oe,H=w,w.body.cinematic=!0,W=x.hit,G=c.getRayForPixel(_.canvas.width/2,_.canvas.height/2).negative();return}}Math.abs(E.x)<C.x/2&&Math.abs(E.z)<C.z/2&&(Y=ie,ne(n,h))}else f.button===2?Y=me:f.button===1&&(Y=ge)}function ne(n,h,f){switch(Y){case ie:{var c=new p.Raytracer,v=c.getRayForPixel(n*i,h*i),E=c.eye.add(v.multiply(-c.eye.y/v.y));R.addDrop(E.x/C.x*2,E.z/C.z*2,.06,.03),$&&(R.updateNormals(),k.updateCaustics(R));break}case oe:{var c=new p.Raytracer,v=c.getRayForPixel(n*i,h*i),x=-G.dot(c.eye.subtract(W))/G.dot(v),w=c.eye.add(v.multiply(x));const Z=H.body.center.add(w.subtract(W)),J=H.body.radius,Ie=Math.max(J-C.x/2,Math.min(C.x/2-J,Z.x)),Pe=Math.max(J-C.y,Math.min(10,Z.y)),De=Math.max(J-C.z/2,Math.min(C.z/2-J,Z.z));H.body.move(new p.Vector(Ie,Pe,De)),W=w,$&&k.updateCaustics(R);break}case me:{if(f&&f.shiftKey){ue-=n-F,ue=Math.max(-89.999,Math.min(89.999,ue));break}pe-=n-F,le-=h-K,le=Math.max(-89.999,Math.min(89.999,le));break}case ge:{const b=.001*ce;ye+=b*(n-F),we-=b*(h-K)}}F=n,K=h,$&&d()}function g(){Y=-1,H&&(H.body.cinematic=!L.useGravity)}function t(n){return n===s||n.parentNode&&t(n.parentNode)}function r(n){ce*=1-n*4e-4,ce=Math.max(2,Math.min(1e3,ce)),$&&d()}addEventListener("wheel",function(n){var h=n.deltaY;r(-h)}),document.onmousedown=function(n){t(n.target)||(n.preventDefault(),j(n.pageX,n.pageY,n))},document.onmousemove=function(n){ne(n.pageX,n.pageY,n)},document.onmouseup=function(){g()},document.ontouchstart=function(n){n.touches.length===1&&!t(n.target)&&(n.preventDefault(),j(n.touches[0].pageX,n.touches[0].pageY,!1))},document.ontouchmove=function(n){n.touches.length===1&&ne(n.touches[0].pageX,n.touches[0].pageY)},document.ontouchend=function(n){n.touches.length==0&&g()};function e(){L.swimming=!0;for(let n of N)n.body.cinematic=!1,L.useGravity=!0,n.body.center=new p.Vector(n.startingPoint.x,0,-C.z/2)}function o(){L.swimming=!1;for(let n of N)n.body.velocity=new p.Vector(0,0,0),n.body.center=new p.Vector(n.startingPoint.x,0,0)}function a(){L.useGravity=!0;for(let n of N)n.jump(C)}document.onkeydown=function(n){if(n.which==32)$=!$;else if(n.which==71){for(let h of N)h.body.cinematic=!h.body.cinematic;L.useGravity=!L.useGravity}else if(n.which==76&&$)d();else if(n.which==74)a();else if(n.which==67)R.setAreaConservation(!R.areaConservationEnabled),Fe(),console.log("Area conservation "+(R.areaConservationEnabled?"enabled.":"disabled."));else if(n.which==80)R.showProjectionGrid=!R.showProjectionGrid,console.log("Projection grid "+(R.showProjectionGrid?"enabled.":"disabled."));else if(n.which==65)R.showAreaConservedGrid=!R.showAreaConservedGrid,console.log("Area conserved grid "+(R.showAreaConservedGrid?"enabled.":"disabled."));else if(n.which==83)L.swimming?o():e(),console.log("Swimming "+(L.swimming?"enabled.":"disabled."));else if(n.which==86)m.show=!m.show;else if(n.which==79){if(C.x=25,C.y=2,C.z=50,P.x=1024,P.y=2048,R.setAreaConservation(!1),R.damping=.1,N.length!=Ee)for(let h=N.length;h<Ee;h++){const f=new L(O);N.push(f),R.addSwimmer(f)}fe=0,m.copyVideo&&(m.video.currentTime=fe),Q(),D.focal=31.75,D.sparks.fov=D.focal*2*Math.PI/360,_.matrixMode(_.PROJECTION),_.loadIdentity(),_.perspective(D.focal,_.canvas.width/_.canvas.height,.01,100),_.matrixMode(_.MODELVIEW),ye=-.42,we=1.18,ce=52.5,le=-24,pe=-261.5,ue=-4,console.log("Olympic mode enabled.")}else if(n.which==87){R.WR_position=0,fe=be,m.copyVideo&&(m.video.currentTime=fe),e(),a();for(let h of N)h.hasDove=!1}else n.which==72?(document.getElementById("commands").hidden=!document.getElementById("commands").hidden,document.getElementById("h").hidden=!document.getElementById("h").hidden):n.which==40?(P.x>129&&(P.x=Math.round(P.x/2)),Q(),console.log("decreasing x resolution")):n.which==38?(P.x<16384&&(P.x=Math.round(P.x*2)),Q(),console.log("increasing x resolution")):n.which==37?(P.y>129&&(P.y=Math.round(P.y/2)),Q(),console.log("decreasing y resolution")):n.which==39&&(P.y<16384&&(P.y=Math.round(P.y*2)),Q(),console.log("increasing y resolution"))};function l(n,h){if(!(n>1)){if(Y==oe)for(let f of N)f.body.velocity=new p.Vector(0,0,0);for(let f of N)f.update(n,de,C);R.updateSpheres(n);for(let f=0;f<D.numSteps;f++)R.stepSimulation();k.updateCaustics(R),fe+=n,de=fe-be}}function d(n){p.keys.L&&(k.lightDir=p.Vector.fromAngles((90-pe)*Math.PI/180,-le*Math.PI/180),$&&k.updateCaustics(R)),R.addOrRemoveVisualizationWaves(!0,N,de),R.updateNormals(),_.clear(_.COLOR_BUFFER_BIT|_.DEPTH_BUFFER_BIT),_.loadIdentity(),_.translate(ye,we,-ce),_.rotate(-ue,0,0,1),_.rotate(-le,1,0,0),_.rotate(-pe,0,1,0),_.translate(0,.5,0),_.enable(_.DEPTH_TEST),k.sphereCenter=N[0].body.center,k.sphereRadius=y,k.renderCube(R),k.renderWater(R,Me,N,de),k.renderSpheres(R),m.render(de,D.sparks,C),_.disable(_.DEPTH_TEST),R.addOrRemoveVisualizationWaves(!1,N,de)}};
//# sourceMappingURL=swimming-D33ye5Sw.js.map
