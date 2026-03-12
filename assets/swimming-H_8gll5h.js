var je=Object.defineProperty;var Me=i=>{throw TypeError(i)};var Ke=(i,r,l)=>r in i?je(i,r,{enumerable:!0,configurable:!0,writable:!0,value:l}):i[r]=l;var te=(i,r,l)=>Ke(i,typeof r!="symbol"?r+"":r,l),Ze=(i,r,l)=>r.has(i)||Me("Cannot "+l);var pe=(i,r,l)=>r.has(i)?Me("Cannot add the same private member more than once"):r instanceof WeakSet?r.add(i):r.set(i,l);var ie=(i,r,l)=>(Ze(i,r,"access private method"),l);import"./modulepreload-polyfill-B5Qt9EMX.js";import{g as $e}from"./lil-gui.module.min-Vka56b52.js";var g=function(){var i,r={create:function(t){t=t||{};var o=document.createElement("canvas");o.width=800,o.height=600,"alpha"in t||(t.alpha=!1);try{i=o.getContext("webgl2",t)}catch{}try{i=i||o.getContext("experimental-webgl",t)}catch{}if(!i)throw new Error("WebGL not supported");return i.HALF_FLOAT_OES=36193,l(),d(),p(),U(),i},keys:{},Matrix:E,Indexer:W,Buffer:T,Mesh:_,HitTest:C,Raytracer:N,Shader:Y,Texture:V,Vector:w};function l(){i.MODELVIEW=G|1,i.PROJECTION=G|2;var t=new E,o=new E;i.modelviewMatrix=new E,i.projectionMatrix=new E;var e=[],n=[],a,c;i.matrixMode=function(h){switch(h){case i.MODELVIEW:a="modelviewMatrix",c=e;break;case i.PROJECTION:a="projectionMatrix",c=n;break;default:throw new Error("invalid matrix mode "+h)}},i.loadIdentity=function(){E.identity(i[a])},i.loadMatrix=function(h){for(var u=h.m,v=i[a].m,f=0;f<16;f++)v[f]=u[f]},i.multMatrix=function(h){i.loadMatrix(E.multiply(i[a],h,o))},i.perspective=function(h,u,v,f){i.multMatrix(E.perspective(h,u,v,f,t))},i.frustum=function(h,u,v,f,m,y){i.multMatrix(E.frustum(h,u,v,f,m,y,t))},i.ortho=function(h,u,v,f,m,y){i.multMatrix(E.ortho(h,u,v,f,m,y,t))},i.scale=function(h,u,v){i.multMatrix(E.scale(h,u,v,t))},i.translate=function(h,u,v){i.multMatrix(E.translate(h,u,v,t))},i.rotate=function(h,u,v,f){i.multMatrix(E.rotate(h,u,v,f,t))},i.lookAt=function(h,u,v,f,m,y,R,b,z){i.multMatrix(E.lookAt(h,u,v,f,m,y,R,b,z,t))},i.pushMatrix=function(){c.push(Array.prototype.slice.call(i[a].m))},i.popMatrix=function(){var h=c.pop();i[a].m=M?new Float32Array(h):h},i.project=function(h,u,v,f,m,y){f=f||i.modelviewMatrix,m=m||i.projectionMatrix,y=y||i.getParameter(i.VIEWPORT);var R=m.transformPoint(f.transformPoint(new w(h,u,v)));return new w(y[0]+y[2]*(R.x*.5+.5),y[1]+y[3]*(R.y*.5+.5),R.z*.5+.5)},i.unProject=function(h,u,v,f,m,y){f=f||i.modelviewMatrix,m=m||i.projectionMatrix,y=y||i.getParameter(i.VIEWPORT);var R=new w((h-y[0])/y[2]*2-1,(u-y[1])/y[3]*2-1,v*2-1);return E.inverse(E.multiply(m,f,t),o).transformPoint(R)},i.matrixMode(i.MODELVIEW)}function d(){var t={mesh:new _({coords:!0,colors:!0,triangles:!1}),mode:-1,coord:[0,0,0,0],color:[1,1,1,1],shader:new Y("      uniform float pointSize;      out vec4 color;      out vec4 coord;      void main() {        color = gl_Color;        coord = gl_TexCoord;        gl_Position = gl_ModelViewProjectionMatrix * gl_Vertex;        gl_PointSize = pointSize;      }    ","      uniform sampler2D tex;      uniform float pointSize;      uniform bool useTexture;      in vec4 color;      in vec4 coord;      out vec4 fragColor;      void main() {        fragColor = color;        if (useTexture) fragColor *= texture(tex, coord.xy);      }    ")};i.pointSize=function(o){t.shader.uniforms({pointSize:o})},i.begin=function(o){if(t.mode!=-1)throw new Error("mismatched gl.begin() and gl.end() calls");t.mode=o,t.mesh.colors=[],t.mesh.coords=[],t.mesh.vertices=[]},i.color=function(o,e,n,a){t.color=arguments.length==1?o.toArray().concat(1):[o,e,n,a||1]},i.texCoord=function(o,e){t.coord=arguments.length==1?o.toArray(2):[o,e]},i.vertex=function(o,e,n){t.mesh.colors.push(t.color),t.mesh.coords.push(t.coord),t.mesh.vertices.push(arguments.length==1?o.toArray():[o,e,n])},i.end=function(){if(t.mode==-1)throw new Error("mismatched gl.begin() and gl.end() calls");t.mesh.compile(),t.shader.uniforms({useTexture:!!i.getParameter(i.TEXTURE_BINDING_2D)}).draw(t.mesh,t.mode),t.mode=-1}}function p(){var t=i,o=0,e=0,n={},a=!1,c=Object.prototype.hasOwnProperty;function h(){for(var b in n)if(c.call(n,b)&&n[b])return!0;return!1}function u(b){var z={};for(var O in b)typeof b[O]=="function"?z[O]=function(Q){return function(){Q.apply(b,arguments)}}(b[O]):z[O]=b[O];z.original=b,z.x=z.pageX,z.y=z.pageY;for(var k=i.canvas;k;k=k.offsetParent)z.x-=k.offsetLeft,z.y-=k.offsetTop;return a?(z.deltaX=z.x-o,z.deltaY=z.y-e):(z.deltaX=0,z.deltaY=0,a=!0),o=z.x,e=z.y,z.dragging=h(),z.preventDefault=function(){z.original.preventDefault()},z.stopPropagation=function(){z.original.stopPropagation()},z}function v(b){i=t,h()||(S(document,"mousemove",f),S(document,"mouseup",m),F(i.canvas,"mousemove",f),F(i.canvas,"mouseup",m)),n[b.which]=!0,b=u(b),i.onmousedown&&i.onmousedown(b),b.preventDefault()}function f(b){i=t,b=u(b),i.onmousemove&&i.onmousemove(b),b.preventDefault()}function m(b){i=t,n[b.which]=!1,h()||(F(document,"mousemove",f),F(document,"mouseup",m),S(i.canvas,"mousemove",f),S(i.canvas,"mouseup",m)),b=u(b),i.onmouseup&&i.onmouseup(b),b.preventDefault()}function y(){a=!1}function R(){n={},a=!1}S(i.canvas,"mousedown",v),S(i.canvas,"mousemove",f),S(i.canvas,"mouseup",m),S(i.canvas,"mouseover",y),S(i.canvas,"mouseout",y),S(document,"contextmenu",R)}function x(t){var o={8:"BACKSPACE",9:"TAB",13:"ENTER",16:"SHIFT",27:"ESCAPE",32:"SPACE",37:"LEFT",38:"UP",39:"RIGHT",40:"DOWN"};return o[t]||(t>=65&&t<=90?String.fromCharCode(t):null)}function S(t,o,e){t.addEventListener(o,e)}function F(t,o,e){t.removeEventListener(o,e)}S(document,"keydown",function(t){if(!t.altKey&&!t.ctrlKey&&!t.metaKey){var o=x(t.keyCode);o&&(r.keys[o]=!0),r.keys[t.keyCode]=!0}}),S(document,"keyup",function(t){if(!t.altKey&&!t.ctrlKey&&!t.metaKey){var o=x(t.keyCode);o&&(r.keys[o]=!1),r.keys[t.keyCode]=!1}});function U(){(function(t){i.makeCurrent=function(){i=t}})(i),i.animate=function(){var t=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(a){setTimeout(a,16.666666666666668)},o=new Date().getTime(),e=i;function n(){i=e;var a=new Date().getTime();i.onupdate&&i.onupdate((a-o)/1e3),i.ondraw&&i.ondraw(),t(n),o=a}n()},i.fullscreen=function(t){t=t||{};var o=t.paddingTop||0,e=t.paddingLeft||0,n=t.paddingRight||0,a=t.paddingBottom||0;if(!document.body)throw new Error("document.body doesn't exist yet (call gl.fullscreen() from window.onload() or from inside the <body> tag)");document.body.appendChild(i.canvas),document.body.style.overflow="hidden",i.canvas.style.position="absolute",i.canvas.style.left=e+"px",i.canvas.style.top=o+"px";function c(){i.canvas.width=window.innerWidth-e-n,i.canvas.height=window.innerHeight-o-a,i.viewport(0,0,i.canvas.width,i.canvas.height),(t.camera||!("camera"in t))&&(i.matrixMode(i.PROJECTION),i.loadIdentity(),i.perspective(t.fov||45,i.canvas.width/i.canvas.height,t.near||.1,t.far||1e3),i.matrixMode(i.MODELVIEW)),i.ondraw&&i.ondraw()}S(window,"resize",c),c()}}var G=305397760,M=typeof Float32Array<"u";function E(){var t=Array.prototype.concat.apply([],arguments);t.length||(t=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),this.m=M?new Float32Array(t):t}E.prototype={inverse:function(){return E.inverse(this,new E)},transpose:function(){return E.transpose(this,new E)},multiply:function(t){return E.multiply(this,t,new E)},transformPoint:function(t){var o=this.m;return new w(o[0]*t.x+o[1]*t.y+o[2]*t.z+o[3],o[4]*t.x+o[5]*t.y+o[6]*t.z+o[7],o[8]*t.x+o[9]*t.y+o[10]*t.z+o[11]).divide(o[12]*t.x+o[13]*t.y+o[14]*t.z+o[15])},transformVector:function(t){var o=this.m;return new w(o[0]*t.x+o[1]*t.y+o[2]*t.z,o[4]*t.x+o[5]*t.y+o[6]*t.z,o[8]*t.x+o[9]*t.y+o[10]*t.z)}},E.inverse=function(t,o){o=o||new E;var e=t.m,n=o.m;n[0]=e[5]*e[10]*e[15]-e[5]*e[14]*e[11]-e[6]*e[9]*e[15]+e[6]*e[13]*e[11]+e[7]*e[9]*e[14]-e[7]*e[13]*e[10],n[1]=-e[1]*e[10]*e[15]+e[1]*e[14]*e[11]+e[2]*e[9]*e[15]-e[2]*e[13]*e[11]-e[3]*e[9]*e[14]+e[3]*e[13]*e[10],n[2]=e[1]*e[6]*e[15]-e[1]*e[14]*e[7]-e[2]*e[5]*e[15]+e[2]*e[13]*e[7]+e[3]*e[5]*e[14]-e[3]*e[13]*e[6],n[3]=-e[1]*e[6]*e[11]+e[1]*e[10]*e[7]+e[2]*e[5]*e[11]-e[2]*e[9]*e[7]-e[3]*e[5]*e[10]+e[3]*e[9]*e[6],n[4]=-e[4]*e[10]*e[15]+e[4]*e[14]*e[11]+e[6]*e[8]*e[15]-e[6]*e[12]*e[11]-e[7]*e[8]*e[14]+e[7]*e[12]*e[10],n[5]=e[0]*e[10]*e[15]-e[0]*e[14]*e[11]-e[2]*e[8]*e[15]+e[2]*e[12]*e[11]+e[3]*e[8]*e[14]-e[3]*e[12]*e[10],n[6]=-e[0]*e[6]*e[15]+e[0]*e[14]*e[7]+e[2]*e[4]*e[15]-e[2]*e[12]*e[7]-e[3]*e[4]*e[14]+e[3]*e[12]*e[6],n[7]=e[0]*e[6]*e[11]-e[0]*e[10]*e[7]-e[2]*e[4]*e[11]+e[2]*e[8]*e[7]+e[3]*e[4]*e[10]-e[3]*e[8]*e[6],n[8]=e[4]*e[9]*e[15]-e[4]*e[13]*e[11]-e[5]*e[8]*e[15]+e[5]*e[12]*e[11]+e[7]*e[8]*e[13]-e[7]*e[12]*e[9],n[9]=-e[0]*e[9]*e[15]+e[0]*e[13]*e[11]+e[1]*e[8]*e[15]-e[1]*e[12]*e[11]-e[3]*e[8]*e[13]+e[3]*e[12]*e[9],n[10]=e[0]*e[5]*e[15]-e[0]*e[13]*e[7]-e[1]*e[4]*e[15]+e[1]*e[12]*e[7]+e[3]*e[4]*e[13]-e[3]*e[12]*e[5],n[11]=-e[0]*e[5]*e[11]+e[0]*e[9]*e[7]+e[1]*e[4]*e[11]-e[1]*e[8]*e[7]-e[3]*e[4]*e[9]+e[3]*e[8]*e[5],n[12]=-e[4]*e[9]*e[14]+e[4]*e[13]*e[10]+e[5]*e[8]*e[14]-e[5]*e[12]*e[10]-e[6]*e[8]*e[13]+e[6]*e[12]*e[9],n[13]=e[0]*e[9]*e[14]-e[0]*e[13]*e[10]-e[1]*e[8]*e[14]+e[1]*e[12]*e[10]+e[2]*e[8]*e[13]-e[2]*e[12]*e[9],n[14]=-e[0]*e[5]*e[14]+e[0]*e[13]*e[6]+e[1]*e[4]*e[14]-e[1]*e[12]*e[6]-e[2]*e[4]*e[13]+e[2]*e[12]*e[5],n[15]=e[0]*e[5]*e[10]-e[0]*e[9]*e[6]-e[1]*e[4]*e[10]+e[1]*e[8]*e[6]+e[2]*e[4]*e[9]-e[2]*e[8]*e[5];for(var a=e[0]*n[0]+e[1]*n[4]+e[2]*n[8]+e[3]*n[12],c=0;c<16;c++)n[c]/=a;return o},E.transpose=function(t,o){o=o||new E;var e=t.m,n=o.m;return n[0]=e[0],n[1]=e[4],n[2]=e[8],n[3]=e[12],n[4]=e[1],n[5]=e[5],n[6]=e[9],n[7]=e[13],n[8]=e[2],n[9]=e[6],n[10]=e[10],n[11]=e[14],n[12]=e[3],n[13]=e[7],n[14]=e[11],n[15]=e[15],o},E.multiply=function(t,o,e){e=e||new E;var n=t.m,a=o.m,c=e.m;return c[0]=n[0]*a[0]+n[1]*a[4]+n[2]*a[8]+n[3]*a[12],c[1]=n[0]*a[1]+n[1]*a[5]+n[2]*a[9]+n[3]*a[13],c[2]=n[0]*a[2]+n[1]*a[6]+n[2]*a[10]+n[3]*a[14],c[3]=n[0]*a[3]+n[1]*a[7]+n[2]*a[11]+n[3]*a[15],c[4]=n[4]*a[0]+n[5]*a[4]+n[6]*a[8]+n[7]*a[12],c[5]=n[4]*a[1]+n[5]*a[5]+n[6]*a[9]+n[7]*a[13],c[6]=n[4]*a[2]+n[5]*a[6]+n[6]*a[10]+n[7]*a[14],c[7]=n[4]*a[3]+n[5]*a[7]+n[6]*a[11]+n[7]*a[15],c[8]=n[8]*a[0]+n[9]*a[4]+n[10]*a[8]+n[11]*a[12],c[9]=n[8]*a[1]+n[9]*a[5]+n[10]*a[9]+n[11]*a[13],c[10]=n[8]*a[2]+n[9]*a[6]+n[10]*a[10]+n[11]*a[14],c[11]=n[8]*a[3]+n[9]*a[7]+n[10]*a[11]+n[11]*a[15],c[12]=n[12]*a[0]+n[13]*a[4]+n[14]*a[8]+n[15]*a[12],c[13]=n[12]*a[1]+n[13]*a[5]+n[14]*a[9]+n[15]*a[13],c[14]=n[12]*a[2]+n[13]*a[6]+n[14]*a[10]+n[15]*a[14],c[15]=n[12]*a[3]+n[13]*a[7]+n[14]*a[11]+n[15]*a[15],e},E.identity=function(t){t=t||new E;var o=t.m;return o[0]=o[5]=o[10]=o[15]=1,o[1]=o[2]=o[3]=o[4]=o[6]=o[7]=o[8]=o[9]=o[11]=o[12]=o[13]=o[14]=0,t},E.perspective=function(t,o,e,n,a){var c=Math.tan(t*Math.PI/360)*e,h=c*o;return E.frustum(-h,h,-c,c,e,n,a)},E.frustum=function(t,o,e,n,a,c,h){h=h||new E;var u=h.m;return u[0]=2*a/(o-t),u[1]=0,u[2]=(o+t)/(o-t),u[3]=0,u[4]=0,u[5]=2*a/(n-e),u[6]=(n+e)/(n-e),u[7]=0,u[8]=0,u[9]=0,u[10]=-(c+a)/(c-a),u[11]=-2*c*a/(c-a),u[12]=0,u[13]=0,u[14]=-1,u[15]=0,h},E.ortho=function(t,o,e,n,a,c,h){h=h||new E;var u=h.m;return u[0]=2/(o-t),u[1]=0,u[2]=0,u[3]=-(o+t)/(o-t),u[4]=0,u[5]=2/(n-e),u[6]=0,u[7]=-(n+e)/(n-e),u[8]=0,u[9]=0,u[10]=-2/(c-a),u[11]=-(c+a)/(c-a),u[12]=0,u[13]=0,u[14]=0,u[15]=1,h},E.scale=function(t,o,e,n){n=n||new E;var a=n.m;return a[0]=t,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=o,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=e,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,n},E.translate=function(t,o,e,n){n=n||new E;var a=n.m;return a[0]=1,a[1]=0,a[2]=0,a[3]=t,a[4]=0,a[5]=1,a[6]=0,a[7]=o,a[8]=0,a[9]=0,a[10]=1,a[11]=e,a[12]=0,a[13]=0,a[14]=0,a[15]=1,n},E.rotate=function(t,o,e,n,a){if(!t||!o&&!e&&!n)return E.identity(a);a=a||new E;var c=a.m,h=Math.sqrt(o*o+e*e+n*n);t*=Math.PI/180,o/=h,e/=h,n/=h;var u=Math.cos(t),v=Math.sin(t),f=1-u;return c[0]=o*o*f+u,c[1]=o*e*f-n*v,c[2]=o*n*f+e*v,c[3]=0,c[4]=e*o*f+n*v,c[5]=e*e*f+u,c[6]=e*n*f-o*v,c[7]=0,c[8]=n*o*f-e*v,c[9]=n*e*f+o*v,c[10]=n*n*f+u,c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,a},E.lookAt=function(t,o,e,n,a,c,h,u,v,f){f=f||new E;var m=f.m,y=new w(t,o,e),R=new w(n,a,c),b=new w(h,u,v),z=y.subtract(R).unit(),O=b.cross(z).unit(),k=z.cross(O).unit();return m[0]=O.x,m[1]=O.y,m[2]=O.z,m[3]=-O.dot(y),m[4]=k.x,m[5]=k.y,m[6]=k.z,m[7]=-k.dot(y),m[8]=z.x,m[9]=z.y,m[10]=z.z,m[11]=-z.dot(y),m[12]=0,m[13]=0,m[14]=0,m[15]=1,f};function W(){this.unique=[],this.indices=[],this.map={}}W.prototype={add:function(t){var o=JSON.stringify(t);return o in this.map||(this.map[o]=this.unique.length,this.unique.push(t)),this.map[o]}};function T(t,o){this.buffer=null,this.target=t,this.type=o,this.data=[]}T.prototype={compile:function(t){for(var o=[],e=0,n=1e4;e<this.data.length;e+=n)o=Array.prototype.concat.apply(o,this.data.slice(e,e+n));var a=this.data.length?o.length/this.data.length:0;if(a!=Math.round(a))throw new Error("buffer elements not of consistent size, average size is "+a);this.buffer=this.buffer||i.createBuffer(),this.buffer.length=o.length,this.buffer.spacing=a,i.bindBuffer(this.target,this.buffer),i.bufferData(this.target,new this.type(o),t||i.STATIC_DRAW)}};function _(t){t=t||{},this.vertexBuffers={},this.indexBuffers={},this.addVertexBuffer("vertices","gl_Vertex"),t.coords&&this.addVertexBuffer("coords","gl_TexCoord"),t.normals&&this.addVertexBuffer("normals","gl_Normal"),t.colors&&this.addVertexBuffer("colors","gl_Color"),(!("triangles"in t)||t.triangles)&&this.addIndexBuffer("triangles"),t.lines&&this.addIndexBuffer("lines")}_.prototype={addVertexBuffer:function(t,o){var e=this.vertexBuffers[o]=new T(i.ARRAY_BUFFER,Float32Array);e.name=t,this[t]=[]},addIndexBuffer:function(t){this.indexBuffers[t]=new T(i.ELEMENT_ARRAY_BUFFER,Uint16Array),this[t]=[]},compile:function(){for(var t in this.vertexBuffers){var o=this.vertexBuffers[t];o.data=this[o.name],o.compile()}for(var e in this.indexBuffers){var o=this.indexBuffers[e];o.data=this[e],o.compile()}},transform:function(t){if(this.vertices=this.vertices.map(function(e){return t.transformPoint(w.fromArray(e)).toArray()}),this.normals){var o=t.inverse().transpose();this.normals=this.normals.map(function(e){return o.transformVector(w.fromArray(e)).unit().toArray()})}return this.compile(),this},computeNormals:function(){this.normals||this.addVertexBuffer("normals","gl_Normal");for(var t=0;t<this.vertices.length;t++)this.normals[t]=new w;for(var t=0;t<this.triangles.length;t++){var o=this.triangles[t],e=w.fromArray(this.vertices[o[0]]),n=w.fromArray(this.vertices[o[1]]),a=w.fromArray(this.vertices[o[2]]),c=n.subtract(e).cross(a.subtract(e)).unit();this.normals[o[0]]=this.normals[o[0]].add(c),this.normals[o[1]]=this.normals[o[1]].add(c),this.normals[o[2]]=this.normals[o[2]].add(c)}for(var t=0;t<this.vertices.length;t++)this.normals[t]=this.normals[t].unit().toArray();return this.compile(),this},computeWireframe:function(){for(var t=new W,o=0;o<this.triangles.length;o++)for(var e=this.triangles[o],n=0;n<e.length;n++){var a=e[n],c=e[(n+1)%e.length];t.add([Math.min(a,c),Math.max(a,c)])}return this.lines||this.addIndexBuffer("lines"),this.lines=t.unique,this.compile(),this},getAABB:function(){var t={min:new w(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)};t.max=t.min.negative();for(var o=0;o<this.vertices.length;o++){var e=w.fromArray(this.vertices[o]);t.min=w.min(t.min,e),t.max=w.max(t.max,e)}return t},getBoundingSphere:function(){for(var t=this.getAABB(),o={center:t.min.add(t.max).divide(2),radius:0},e=0;e<this.vertices.length;e++)o.radius=Math.max(o.radius,w.fromArray(this.vertices[e]).subtract(o.center).length());return o}},_.plane=function(t){t=t||{};for(var o=new _(t),e=t.detailX||t.detail||1,n=t.detailY||t.detail||1,a=t.width||2,c=t.height||2,h=0;h<=n;h++)for(var u=h/n,v=0;v<=e;v++){var f=v/e;if(o.vertices.push([(f-.5)*a,(u-.5)*c,0]),o.coords&&o.coords.push([f,u]),o.normals&&o.normals.push([0,0,1]),v<e&&h<n){var m=v+h*(e+1);o.triangles.push([m,m+1,m+e+1]),o.triangles.push([m+e+1,m+1,m+e+2])}}return o.compile(),o};var P=[[0,4,2,6,-1,0,0],[1,3,5,7,1,0,0],[0,1,4,5,0,-1,0],[2,6,3,7,0,1,0],[0,2,1,3,0,0,-1],[4,5,6,7,0,0,1]];function L(t){return new w((t&1)*2-1,(t&2)-1,(t&4)/2-1)}_.cube=function(t){for(var o=new _(t),e=t&&t.width||2,n=t&&t.height||2,a=t&&t.depth||2,c=0;c<P.length;c++){for(var h=P[c],u=c*4,v=0;v<4;v++){var f=h[v];const m=L(f).toArray();m[0]*=e/2,m[1]*=n/2,m[2]*=a/2,o.vertices.push(m),o.coords&&o.coords.push([v&1,(v&2)/2]),o.normals&&o.normals.push(h.slice(4,7))}o.triangles.push([u,u+1,u+2]),o.triangles.push([u+2,u+1,u+3])}return o.compile(),o},_.sphere=function(t){function o(k,Q,Z){return v?[k,Z,Q]:[k,Q,Z]}function e(k){return k+(k-k*k)/2}t=t||{};for(var n=new _(t),a=new W,c=t.detail||6,h=0;h<8;h++)for(var u=L(h),v=u.x*u.y*u.z>0,f=[],m=0;m<=c;m++){for(var y=0;m+y<=c;y++){var R=m/c,b=y/c,z=(c-m-y)/c,O={vertex:new w(e(R),e(b),e(z)).unit().multiply(u).toArray()};n.coords&&(O.coord=u.y>0?[1-R,z]:[z,1-R]),f.push(a.add(O))}if(m>0)for(var y=0;m+y<=c;y++){var R=(m-1)*(c+1)+(m-1-(m-1)*(m-1))/2+y,b=m*(c+1)+(m-m*m)/2+y;n.triangles.push(o(f[R],f[R+1],f[b])),m+y<c&&n.triangles.push(o(f[b],f[R+1],f[b+1]))}}return n.vertices=a.unique.map(function(k){return k.vertex}),n.coords&&(n.coords=a.unique.map(function(k){return k.coord})),n.normals&&(n.normals=n.vertices),n.compile(),n},_.load=function(t,o){o=o||{},"coords"in o||(o.coords=!!t.coords),"normals"in o||(o.normals=!!t.normals),"colors"in o||(o.colors=!!t.colors),"triangles"in o||(o.triangles=!!t.triangles),"lines"in o||(o.lines=!!t.lines);var e=new _(o);return e.vertices=t.vertices,e.coords&&(e.coords=t.coords),e.normals&&(e.normals=t.normals),e.colors&&(e.colors=t.colors),e.triangles&&(e.triangles=t.triangles),e.lines&&(e.lines=t.lines),e.compile(),e};function C(t,o,e){this.t=arguments.length?t:Number.MAX_VALUE,this.hit=o,this.normal=e}C.prototype={mergeWith:function(t){t.t>0&&t.t<this.t&&(this.t=t.t,this.hit=t.hit,this.normal=t.normal)}};function N(){var t=i.getParameter(i.VIEWPORT),o=i.modelviewMatrix.m,e=new w(o[0],o[4],o[8]),n=new w(o[1],o[5],o[9]),a=new w(o[2],o[6],o[10]),c=new w(o[3],o[7],o[11]);this.eye=new w(-c.dot(e),-c.dot(n),-c.dot(a));var h=t[0],u=h+t[2],v=t[1],f=v+t[3];this.ray00=i.unProject(h,v,1).subtract(this.eye),this.ray10=i.unProject(u,v,1).subtract(this.eye),this.ray01=i.unProject(h,f,1).subtract(this.eye),this.ray11=i.unProject(u,f,1).subtract(this.eye),this.viewport=t}N.prototype={getRayForPixel:function(t,o){t=(t-this.viewport[0])/this.viewport[2],o=1-(o-this.viewport[1])/this.viewport[3];var e=w.lerp(this.ray00,this.ray10,t),n=w.lerp(this.ray01,this.ray11,t);return w.lerp(e,n,o).unit()}},N.hitTestBox=function(t,o,e,n){var a=e.subtract(t).divide(o),c=n.subtract(t).divide(o),h=w.min(a,c),u=w.max(a,c),v=h.max(),f=u.min();if(v>0&&v<f){var m=1e-6,y=t.add(o.multiply(v));return e=e.add(m),n=n.subtract(m),new C(v,y,new w((y.x>n.x)-(y.x<e.x),(y.y>n.y)-(y.y<e.y),(y.z>n.z)-(y.z<e.z)))}return null},N.hitTestSphere=function(t,o,e,n){var a=t.subtract(e),c=o.dot(o),h=2*o.dot(a),u=a.dot(a)-n*n,v=h*h-4*c*u;if(v>0){var f=(-h-Math.sqrt(v))/(2*c),m=t.add(o.multiply(f));return new C(f,m,m.subtract(e).divide(n))}return null},N.hitTestTriangle=function(t,o,e,n,a){var c=n.subtract(e),h=a.subtract(e),u=c.cross(h).unit(),v=u.dot(e.subtract(t))/u.dot(o);if(v>0){var f=t.add(o.multiply(v)),m=f.subtract(e),y=h.dot(h),R=h.dot(c),b=h.dot(m),z=c.dot(c),O=c.dot(m),k=y*z-R*R,Q=(z*b-R*O)/k,Z=(y*O-R*b)/k;if(Q>=0&&Z>=0&&Q+Z<=1)return new C(v,f,u)}return null};function D(t,o,e){let n;for(;(n=t.exec(o))!=null;)e(n)}var A="LIGHTGL";function Y(t,o){function e(y){var R=document.getElementById(y);return R?R.text:y}t=e(t),o=e(o);var n="    uniform mat3 gl_NormalMatrix;    uniform mat4 gl_ModelViewMatrix;    uniform mat4 gl_ProjectionMatrix;    uniform mat4 gl_ModelViewProjectionMatrix;    uniform mat4 gl_ModelViewMatrixInverse;    uniform mat4 gl_ProjectionMatrixInverse;    uniform mat4 gl_ModelViewProjectionMatrixInverse;  ",a=`#version 300 es
    `+n+"    in vec4 gl_Vertex;    in vec4 gl_TexCoord;    in vec3 gl_Normal;    in vec4 gl_Color;    vec4 ftransform() {      return gl_ModelViewProjectionMatrix * gl_Vertex;    }  ",c=`#version 300 es
    precision highp float;
  `+n,h=t+o,u={};D(/\b(gl_[^;]*)\b;/g,n,function(y){var R=y[1];if(h.indexOf(R)!=-1){var b=R.replace(/[a-z_]/g,"");u[b]=A+R}}),h.indexOf("ftransform")!=-1&&(u.MVPM=A+"gl_ModelViewProjectionMatrix"),this.usedMatrices=u;function v(y,R){var b={},z=/^((\s*\/\/.*\n|\s*#extension.*\n)+)[^]*$/.exec(R);return R=z?z[1]+y+R.substr(z[1].length):y+R,D(/\bgl_\w+\b/g,y,function(O){O in b||(R=R.replace(new RegExp("\\b"+O+"\\b","g"),A+O),b[O]=!0)}),R}t=v(a,t),o=v(c,o);function f(y,R){var b=i.createShader(y);if(i.shaderSource(b,R),i.compileShader(b),!i.getShaderParameter(b,i.COMPILE_STATUS))throw new Error("compile error: "+i.getShaderInfoLog(b));return b}if(this.program=i.createProgram(),i.attachShader(this.program,f(i.VERTEX_SHADER,t)),i.attachShader(this.program,f(i.FRAGMENT_SHADER,o)),i.linkProgram(this.program),!i.getProgramParameter(this.program,i.LINK_STATUS))throw new Error("link error: "+i.getProgramInfoLog(this.program));this.attributes={},this.uniformLocations={};var m={};D(/uniform\s+sampler(1D|2D|3D|Cube)\s+(\w+)\s*;/g,t+o,function(y){m[y[2]]=1}),this.isSampler=m}function j(t){var o=Object.prototype.toString.call(t);return o=="[object Array]"||o=="[object Float32Array]"}function q(t){var o=Object.prototype.toString.call(t);return o=="[object Number]"||o=="[object Boolean]"}new E,new E,Y.prototype={uniforms:function(t){i.useProgram(this.program);for(var o in t){var e=this.uniformLocations[o]||i.getUniformLocation(this.program,o);if(e){this.uniformLocations[o]=e;var n=t[o];if(n instanceof w?n=[n.x,n.y,n.z]:n instanceof E&&(n=n.m),j(n))switch(n.length){case 1:i.uniform1fv(e,new Float32Array(n));break;case 2:i.uniform2fv(e,new Float32Array(n));break;case 3:i.uniform3fv(e,new Float32Array(n));break;case 4:i.uniform4fv(e,new Float32Array(n));break;case 9:i.uniformMatrix3fv(e,!1,new Float32Array([n[0],n[3],n[6],n[1],n[4],n[7],n[2],n[5],n[8]]));break;case 16:i.uniformMatrix4fv(e,!1,new Float32Array([n[0],n[4],n[8],n[12],n[1],n[5],n[9],n[13],n[2],n[6],n[10],n[14],n[3],n[7],n[11],n[15]]));break;default:throw new Error(`don't know how to load uniform "`+o+'" of length '+n.length)}else if(q(n))(this.isSampler[o]?i.uniform1i:i.uniform1f).call(i,e,n);else throw new Error('attempted to set uniform "'+o+'" to invalid value '+n)}}return this},draw:function(t,o){this.drawBuffers(t.vertexBuffers,t.indexBuffers[o==i.LINES?"lines":"triangles"],arguments.length<2?i.TRIANGLES:o)},drawBuffers:function(t,o,e){var n=this.usedMatrices,a=i.modelviewMatrix,c=i.projectionMatrix,h=n.MVMI||n.NM?a.inverse():null,u=n.PMI?c.inverse():null,v=n.MVPM||n.MVPMI?c.multiply(a):null,f={};if(n.MVM&&(f[n.MVM]=a),n.MVMI&&(f[n.MVMI]=h),n.PM&&(f[n.PM]=c),n.PMI&&(f[n.PMI]=u),n.MVPM&&(f[n.MVPM]=v),n.MVPMI&&(f[n.MVPMI]=v.inverse()),n.NM){var m=h.m;f[n.NM]=[m[0],m[4],m[8],m[1],m[5],m[9],m[2],m[6],m[10]]}this.uniforms(f);var y=0;for(var R in t){var b=t[R],z=this.attributes[R]||i.getAttribLocation(this.program,R.replace(/^(gl_.*)$/,A+"$1"));z==-1||!b.buffer||(this.attributes[R]=z,i.bindBuffer(i.ARRAY_BUFFER,b.buffer),i.enableVertexAttribArray(z),i.vertexAttribPointer(z,b.buffer.spacing,i.FLOAT,!1,0,0),y=b.buffer.length/b.buffer.spacing)}for(var R in this.attributes)R in t||i.disableVertexAttribArray(this.attributes[R]);return y&&(!o||o.buffer)&&(o?(i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,o.buffer),i.drawElements(e,o.buffer.length,i.UNSIGNED_SHORT,0)):i.drawArrays(e,0,y)),this}};function V(t,o,e){e=e||{},this.width=t,this.height=o,this.id=i.createTexture();let n=e.type||i.UNSIGNED_BYTE,a=e.format||i.RGBA,c=i.RGBA;const h=i.getExtension("EXT_color_buffer_float"),u=i.getExtension("EXT_color_buffer_half_float");n===i.FLOAT?(h?i instanceof WebGL2RenderingContext&&(a=i.RGBA32F):(console.warn("FLOAT textures not renderable, falling back to UNSIGNED_BYTE"),n=i.UNSIGNED_BYTE,a=i.RGBA8),c=i.RGBA):n===i.HALF_FLOAT_OES?(u?i instanceof WebGL2RenderingContext&&(a=i.RGBA16F):(console.warn("HALF_FLOAT textures not renderable, falling back to UNSIGNED_BYTE"),n=i.UNSIGNED_BYTE,a=i.RGBA8),c=i.RGBA):(n=i.UNSIGNED_BYTE,a=i.RGBA8,c=i.RGBA);const v=e.filter||e.magFilter||i.LINEAR,f=e.filter||e.minFilter||i.LINEAR;i.bindTexture(i.TEXTURE_2D,this.id),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,1),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,v),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,f),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,e.wrap||e.wrapS||i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,e.wrap||e.wrapT||i.CLAMP_TO_EDGE),i instanceof WebGL2RenderingContext?i.texImage2D(i.TEXTURE_2D,0,a,t,o,0,c,n,null):i.texImage2D(i.TEXTURE_2D,0,c,t,o,0,c,n,null),i.bindTexture(i.TEXTURE_2D,null),this.format=c,this.type=n,this.internalFormat=a}var J,H,K;V.prototype={bind:function(t){i.activeTexture(i.TEXTURE0+(t||0)),i.bindTexture(i.TEXTURE_2D,this.id)},unbind:function(t){i.activeTexture(i.TEXTURE0+(t||0)),i.bindTexture(i.TEXTURE_2D,null)},canDrawTo:function(){J=J||i.createFramebuffer(),i.bindFramebuffer(i.FRAMEBUFFER,J),i.framebufferTexture2D(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,this.id,0);var t=i.checkFramebufferStatus(i.FRAMEBUFFER)==i.FRAMEBUFFER_COMPLETE;return i.bindFramebuffer(i.FRAMEBUFFER,null),t},drawTo:function(t){i.getExtension("EXT_color_buffer_float")||console.warn("EXT_color_buffer_float not available!");var e=i.getParameter(i.VIEWPORT);if(J=J||i.createFramebuffer(),H=H||i.createRenderbuffer(),i.bindFramebuffer(i.FRAMEBUFFER,J),i.bindRenderbuffer(i.RENDERBUFFER,H),(this.width!=H.width||this.height!=H.height)&&(H.width=this.width,H.height=this.height,i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_COMPONENT16,this.width,this.height)),i.framebufferTexture2D(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,this.id,0),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,H),i.checkFramebufferStatus(i.FRAMEBUFFER)!=i.FRAMEBUFFER_COMPLETE)throw new Error("Rendering to this texture is not supported (incomplete framebuffer)");i.viewport(0,0,this.width,this.height),t(),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindRenderbuffer(i.RENDERBUFFER,null),i.viewport(e[0],e[1],e[2],e[3])},swapWith:function(t){var o;o=t.id,t.id=this.id,this.id=o,o=t.width,t.width=this.width,this.width=o,o=t.height,t.height=this.height,this.height=o}},V.fromImage=function(t,o){o=o||{};var e=new V(t.width,t.height,o);i.bindTexture(i.TEXTURE_2D,e.id);try{i.texImage2D(i.TEXTURE_2D,0,e.format,e.format,e.type,t)}catch{throw location.protocol=="file:"?new Error('image not loaded for security reasons (serve this page over "http://" instead)'):new Error("image not loaded for security reasons (image must originate from the same domain as this page or use Cross-Origin Resource Sharing)")}return o.minFilter&&o.minFilter!=i.NEAREST&&o.minFilter!=i.LINEAR&&i.generateMipmap(i.TEXTURE_2D),i.bindTexture(i.TEXTURE_2D,null),e},V.fromURL=function(t,o){K=K||function(){var c=document.createElement("canvas").getContext("2d");c.canvas.width=c.canvas.height=128;for(var h=0;h<c.canvas.height;h+=16)for(var u=0;u<c.canvas.width;u+=16)c.fillStyle=(u^h)&16?"#FFF":"#DDD",c.fillRect(u,h,16,16);return c.canvas}();var e=V.fromImage(K,o),n=new Image,a=i;return n.onload=function(){a.makeCurrent(),V.fromImage(n,o).swapWith(e)},n.src=t,e},V.canUseFloatingPointTextures=function(){return!!i.getExtension("OES_texture_float")},V.canUseFloatingPointLinearFiltering=function(){return!!i.getExtension("OES_texture_float_linear")},V.canUseHalfFloatingPointTextures=function(){return!!i.getExtension("OES_texture_half_float")},V.canUseHalfFloatingPointLinearFiltering=function(){return!!i.getExtension("OES_texture_half_float_linear")};function w(t,o,e){this.x=t||0,this.y=o||0,this.z=e||0}return w.prototype={negative:function(){return new w(-this.x,-this.y,-this.z)},add:function(t){return t instanceof w?new w(this.x+t.x,this.y+t.y,this.z+t.z):new w(this.x+t,this.y+t,this.z+t)},subtract:function(t){return t instanceof w?new w(this.x-t.x,this.y-t.y,this.z-t.z):new w(this.x-t,this.y-t,this.z-t)},multiply:function(t){return t instanceof w?new w(this.x*t.x,this.y*t.y,this.z*t.z):new w(this.x*t,this.y*t,this.z*t)},divide:function(t){return t instanceof w?new w(this.x/t.x,this.y/t.y,this.z/t.z):new w(this.x/t,this.y/t,this.z/t)},equals:function(t){return this.x==t.x&&this.y==t.y&&this.z==t.z},dot:function(t){return this.x*t.x+this.y*t.y+this.z*t.z},cross:function(t){return new w(this.y*t.z-this.z*t.y,this.z*t.x-this.x*t.z,this.x*t.y-this.y*t.x)},length:function(){return Math.sqrt(this.dot(this))},unit:function(){return this.divide(this.length())},min:function(){return Math.min(Math.min(this.x,this.y),this.z)},max:function(){return Math.max(Math.max(this.x,this.y),this.z)},toAngles:function(){return{theta:Math.atan2(this.z,this.x),phi:Math.asin(this.y/this.length())}},angleTo:function(t){return Math.acos(this.dot(t)/(this.length()*t.length()))},toArray:function(t){return[this.x,this.y,this.z].slice(0,t||3)},clone:function(){return new w(this.x,this.y,this.z)},init:function(t,o,e){return this.x=t,this.y=o,this.z=e,this}},w.negative=function(t,o){return o.x=-t.x,o.y=-t.y,o.z=-t.z,o},w.add=function(t,o,e){return o instanceof w?(e.x=t.x+o.x,e.y=t.y+o.y,e.z=t.z+o.z):(e.x=t.x+o,e.y=t.y+o,e.z=t.z+o),e},w.subtract=function(t,o,e){return o instanceof w?(e.x=t.x-o.x,e.y=t.y-o.y,e.z=t.z-o.z):(e.x=t.x-o,e.y=t.y-o,e.z=t.z-o),e},w.multiply=function(t,o,e){return o instanceof w?(e.x=t.x*o.x,e.y=t.y*o.y,e.z=t.z*o.z):(e.x=t.x*o,e.y=t.y*o,e.z=t.z*o),e},w.divide=function(t,o,e){return o instanceof w?(e.x=t.x/o.x,e.y=t.y/o.y,e.z=t.z/o.z):(e.x=t.x/o,e.y=t.y/o,e.z=t.z/o),e},w.cross=function(t,o,e){return e.x=t.y*o.z-t.z*o.y,e.y=t.z*o.x-t.x*o.z,e.z=t.x*o.y-t.y*o.x,e},w.unit=function(t,o){var e=t.length();return o.x=t.x/e,o.y=t.y/e,o.z=t.z/e,o},w.fromAngles=function(t,o){return new w(Math.cos(t)*Math.cos(o),Math.sin(o),Math.sin(t)*Math.cos(o))},w.randomDirection=function(){return w.fromAngles(Math.random()*Math.PI*2,Math.asin(Math.random()*2-1))},w.min=function(t,o){return new w(Math.min(t.x,o.x),Math.min(t.y,o.y),Math.min(t.z,o.z))},w.max=function(t,o){return new w(Math.max(t.x,o.x),Math.max(t.y,o.y),Math.max(t.z,o.z))},w.lerp=function(t,o,e){return o.subtract(t).multiply(e).add(t)},w.fromArray=function(t){return new w(t[0],t[1],t[2])},w.angleBetween=function(t,o){return t.angleTo(o)},r}();class we{constructor({tx:r=0,ty:l=0,zoom:d=4,ax:p=-25,ay:x=-200,az:S=0,fov:F=45}){this.tx=r,this.ty=l,this.zoom=d,this.ax=p,this.ay=x,this.az=S,this.fov=F}}const Re=.3,ze=.15,Ae=1,Je=10,Oe=Math.ceil(Je/4),Ue=10,Fe=`
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
`,Ve=200,Qe=`
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
#define MAX_SPARKS `+Ve+`
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

`;var ve,Ge;class ye{constructor(r,l,d,{poolSize:p=new g.Vector(2,2),waterResolution:x=new g.Vector(256,256),numSwimmers:S=1,thresholdBlending:F=!1}){pe(this,ve);if(this.gl=r,this.calibration=d,this.poolSize=p,this.waterResolution=x,this.numSwimmers=S,this.thresholdBlending=F,this.copyVideo=!1,this.show=!1,r===null){alert("Unable to initialize WebGL. Your browser or machine may not support it.");return}r.clearColor(0,0,0,1),r.clear(r.COLOR_BUFFER_BIT),this.shader=new g.Shader(`
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

    `+Qe+Fe+`

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
`),this.mesh=g.Mesh.plane({width:2,height:2,coords:!0,normals:!0}),this.mesh.transform(g.Matrix.rotate(90,1,0,0)),this.mesh.transform(g.Matrix.translate(0,.1,0)),this.programInfo=null,this.texture=this.initTexture(),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!0),l!=""&&(this.video=this.setupVideo(l))}render(){const r=s.params.visualizations.sparks,l=s.params.simulation.poolSize;if(!s.params.video.show)return;this.copyVideo&&this.updateTexture(),(!this.mesh.vertexBuffers||!this.mesh.vertexBuffers.vertex)&&this.mesh.compile(),this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture);const d=this.gl.canvas.height,p=16*d/9,x=(this.gl.canvas.width-p)/2;this.gl.viewport(x,0,p,d),B.swimmersAttributesTexture&&B.swimmersAttributesTexture.bind(1),this.shader.uniforms({uSampler:0,swimmersHelperFunctions:1,iTime:s.getRaceTime(),poolSize:[l.x,l.y,l.z],iResolution:[this.gl.canvas.width,this.gl.canvas.height],sparksEnabled:r.enabled,sparksGlow:r.glow,sparksGlowOffset:r.glowOffset,sparksStroke:r.stroke,sparksNumber:r.num,sparksLengthFactor:r.lengthFactor,sparksSizeFactor:r.sizeFactor,fov:r.fov,thresholdBlending:s.params.video.thresholdBlending,blendingThreshold:s.params.video.blendingThreshold}).draw(this.mesh),this.gl.disable(this.gl.BLEND),this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height)}setTime(r){this.copyVideo&&(this.video.currentTime=r)}initTexture(){const r=this.gl.createTexture();this.gl.bindTexture(this.gl.TEXTURE_2D,r);const l=0,d=this.gl.RGBA,p=1,x=1,S=0,F=this.gl.RGBA,U=this.gl.UNSIGNED_BYTE,G=new Uint8Array([0,0,255,255]);return this.gl.texImage2D(this.gl.TEXTURE_2D,l,d,p,x,S,F,U,G),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),r}updateTexture(){const l=this.gl.RGBA,d=this.gl.RGBA,p=this.gl.UNSIGNED_BYTE;this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture),this.gl.texImage2D(this.gl.TEXTURE_2D,0,l,d,p,this.video)}setupVideo(r){const l=document.createElement("video");let d=!1,p=!1;l.playsInline=!0,l.muted=!0,l.loop=!1,l.addEventListener("playing",()=>{d=!0,S()},!0),l.addEventListener("timeupdate",()=>{p=!0,S()},!0),l.src=r,l.play();const x=this,S=()=>{d&&p&&(x.copyVideo=!0,l.paused||ie(this,ve,Ge).call(this))};return l}}ve=new WeakSet,Ge=function(){this.hasPausedFirstTime||(this.hasPausedFirstTime=!0,this.video.pause())};class _e{constructor(r){this.title=r,this.videos=[]}addVideo(r){this.videos.push(r)}}const Ie=new g.Vector(0,-4,0);class ue{constructor(r,l){this.initCenter=new g.Vector(r.x,r.y,r.z),this.center=new g.Vector(r.x,r.y,r.z),this.oldCenter=new g.Vector(r.x,r.y,r.z),this.radius=l,this.cinematic=!1,this.velocity=new g.Vector(0,0,0),this.acceleration=new g.Vector(0,0,0),this.mass=4/3*Math.PI*Math.pow(l,3)*1e3,this.invMass=1/this.mass,this.radiusSquared=l*l,this.mesh=g.Mesh.sphere({detail:10}),this.followTarget=!1}update(r){if(this.moved||(this.oldCenter=new g.Vector(this.center.x,this.center.y,this.center.z)),this.moved=!1,this.cinematic){if(this.followTarget||(this.velocity=new g.Vector(0,0,0)),!this.targetPos||!this.followTarget)return;let l=r/this.targetTime;l=Math.min(Math.max(l,0),1),this.center=this.center.multiply(1-l).add(this.targetPos.multiply(l)),this.velocity=this.center.subtract(this.oldCenter).multiply(1/r),this.targetTime-=r,this.targetTime<0&&(this.targetPos=null)}else{const l=Math.max(0,Math.min(1,(this.radius-this.center.y)/(2*this.radius))),d=Ie.multiply(-1.1*this.mass*l),p=this.velocity.unit().multiply(-1e3*this.radiusSquared*l*this.velocity.dot(this.velocity));this.addForce(p),this.addForce(d),this.addForce(Ie.multiply(this.mass)),this.velocity=this.velocity.add(this.acceleration.multiply(r)),this.acceleration=new g.Vector(0,0,0),this.center=this.center.add(this.velocity.multiply(r)),this.center.y<this.radius-s.params.simulation.poolSize.y&&(this.center.y=this.radius-1,this.velocity.y=Math.abs(this.velocity.y)*.7)}}setTarget(r,l){this.targetPos=r,this.targetTime=l}addForce(r){this.cinematic?console.warn("Trying to add force to a cinematic sphere."):this.acceleration=this.acceleration.add(r.multiply(this.invMass))}move(r){this.moved=!0,this.oldCenter=new g.Vector(this.center.x,this.center.y,this.center.z),this.center=new g.Vector(r.x,r.y,r.z),this.cinematic||console.warn("Moving a non cinematic sphere.")}}function re(i,r=null){this.gl=i,this.visualizationWavesEnabled=!0,this.sqrt_2_PI=Math.sqrt(2*Math.PI);var l=`
    out vec2 coord;
    uniform vec2 invPoolSizeVertex;
    void main() {
      coord = gl_Vertex.xy * invPoolSizeVertex + 0.5;
      gl_Position = vec4(gl_Vertex.xy * 2. * invPoolSizeVertex, 0., 1.0);
    }
  `;this.reset(r),g.Texture.canUseFloatingPointTextures(),this.dropShader=new g.Shader(l,`
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

    `+Fe+`

    void main() {
      vec4 info = texture(tex, coord);
      float w = 0.;
      if(showDivingDistance) w += getDivingWaves(coord).x;
      if(showWR) w += getRecordWave(coord);
      info.r += add ? w : -w;
      fragColor = info;
    }
    `)}re.prototype.resetTextures=function(){const i=this.gl;this.textureA&&i.deleteTexture(this.textureA.id),this.textureB&&i.deleteTexture(this.textureB.id),this.textureA=new g.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:r}),this.textureB=new g.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:r}),this.areaConservationTexture=new g.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:r}),this.showAreaConservedGrid=!1,this.showProjectionGrid=!1,this.invPoolSize=new g.Vector(1/s.params.simulation.poolSize.x,1/s.params.simulation.poolSize.y,1/s.params.simulation.poolSize.z);var r=g.Texture.canUseFloatingPointLinearFiltering()?this.gl.LINEAR:this.gl.NEAREST;(!this.textureA.canDrawTo()||!this.textureB.canDrawTo())&&g.Texture.canUseHalfFloatingPointTextures()&&(console.log("No draw"),r=g.Texture.canUseHalfFloatingPointLinearFiltering()?this.gl.LINEAR:this.gl.NEAREST,this.textureA=new g.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:r}),this.textureB=new g.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:r}))};re.prototype.reset=function(i=null){this.WR_position=1e5,this.prev_WR_position=0,i!==null?(console.log("resolution.y : "+i.y),this.W=Math.round(i.x),this.H=Math.round(i.y),console.log("Using custom resolution:",this.W,this.H)):(this.W=256,this.H=256),B.reset(new g.Vector(this.W,this.H)),this.plane=g.Mesh.plane({detail:255,width:s.params.simulation.poolSize.x,height:s.params.simulation.poolSize.z}),this.delta=new g.Vector(1/this.W,1/this.H),this.resetTextures()};re.prototype.addDrop=function(i,r,l,d){var p=this;this.textureB.drawTo(function(){p.textureA.bind(),p.dropShader.uniforms({invPoolSizeVertex:[p.invPoolSize.x,p.invPoolSize.z],center:[i,r],radius:l,strength:d,poolSize:[s.params.simulation.poolSize.x,s.params.simulation.poolSize.y,s.params.simulation.poolSize.z]}).draw(p.plane)}),this.textureB.swapWith(this.textureA)};re.prototype.addOrRemoveVisualizationWaves=function(i){if(!(!this.visualizationWavesEnabled||!B.raceHasStarted)){var r=this;this.textureB.drawTo(function(){r.textureA.bind();const l=B.getAttributesTexture();l&&l.bind(1),r.visualizationWavesShader.uniforms({swimmersAttributesTexture:1,showDivingDistance:s.params.visualizations.showDivingDistance,showWR:s.params.visualizations.showWR,invPoolSizeVertex:[r.invPoolSize.x,r.invPoolSize.z],poolSize:[s.params.simulation.poolSize.x,s.params.simulation.poolSize.y,s.params.simulation.poolSize.z],wr:r.WR_position,sqrt_2_PI:r.sqrt_2_PI,add:i,swimmersNumber:s.swimmers.length,time:s.getRaceTime()}).draw(r.plane)}),this.textureB.swapWith(this.textureA)}};re.prototype.updateSpheres=function(i){if(this.prev_WR_position=this.WR_position,this.WR_position=s.getRaceTime()*2.155,this.WR_position>s.params.simulation.poolSize.z&&(this.WR_position=2*s.params.simulation.poolSize.z-this.WR_position),s.params.simulation.optimized)B.attributes.draw(),this.textureB.drawTo(()=>{this.textureA.bind(),B.bindDisplacementTexture(1),B.bindOldDisplacementTexture(2),this.sphereShader.uniforms({oldDisplacementTexture:2,displacementTexture:1,invPoolSizeVertex:[this.invPoolSize.x,this.invPoolSize.z],poolSize:[s.params.simulation.poolSize.x,s.params.simulation.poolSize.y,s.params.simulation.poolSize.z],optimized:!0}).draw(this.plane),this.textureB.swapWith(this.textureA),B.attributes.draw()});else{const l=[];s.swimmers.forEach(d=>d.spheres.forEach(p=>l.push(p)));for(let d=0;d<l.length;d++){const p=l[d];this.moveSphere(p.oldCenter,p.center,p.radius)}}};re.prototype.moveSphere=function(i,r,l){var d=this;this.textureB.drawTo(function(){d.textureA.bind(),d.sphereShader.uniforms({invPoolSizeVertex:[d.invPoolSize.x,d.invPoolSize.z],oldCenter:i,newCenter:r,radius:l,poolSize:[s.params.simulation.poolSize.x,s.params.simulation.poolSize.y,s.params.simulation.poolSize.z],optimized:!1}).draw(d.plane)}),this.textureB.swapWith(this.textureA)};re.prototype.stepSimulation=function(){var i=this;this.textureB.drawTo(function(){i.textureA.bind(),i.updateShader.uniforms({invPoolSizeVertex:[i.invPoolSize.x,i.invPoolSize.z],delta:[i.delta.x,i.delta.y],wr:i.WR_position,prev_wr:i.prev_WR_position,poolSize:[s.params.simulation.poolSize.x,s.params.simulation.poolSize.y,s.params.simulation.poolSize.z],sqrt_2_PI:i.sqrt_2_PI,damping:s.params.simulation.waterDamping}).draw(i.plane)}),this.textureB.swapWith(this.textureA),this.updateAreaConservation()};re.prototype.updateNormals=function(){var i=this;this.textureB.drawTo(function(){i.textureA.bind(),i.normalShader.uniforms({invPoolSizeVertex:[i.invPoolSize.x,i.invPoolSize.z],delta:[i.delta.x,i.delta.y]}).draw(i.plane)}),this.textureB.swapWith(this.textureA)};re.prototype.updateAreaConservation=function(){if(!s.params.visualizations.areaConservationEnabled)return;var i,r,l;if(this.textureA.type===this.gl.FLOAT)i=this.gl.FLOAT,r=Float32Array,l="EXT_color_buffer_float";else if(this.textureA.type===this.gl.HALF_FLOAT_OES)i=this.gl.HALF_FLOAT_OES,r=Uint16Array,l="EXT_color_buffer_half_float";else{console.warn("Unsupported texture type for reading");return}if(!this.gl.getExtension(l)){console.warn(l+" not available; cannot read pixels");return}this.fb||(this.fb=this.gl.createFramebuffer()),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.fb),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,this.textureA.id,0);const d=this.gl.checkFramebufferStatus(this.gl.FRAMEBUFFER);if(d!==this.gl.FRAMEBUFFER_COMPLETE){console.error("Framebuffer incomplete: "+d+" for texture type "+this.textureA.type),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null);return}this.gl.pixelStorei(this.gl.PACK_ALIGNMENT,1);const p=new r(this.W*this.H*4),x=new Float32Array(this.W*this.H*4);this.gl.readPixels(0,0,this.W,this.H,this.gl.RGBA,i,p);for(let M=0;M<this.W;M++)x[M*4+1]=1;const S=s.params.simulation.poolSize.x/this.W,F=s.params.simulation.poolSize.z/this.H,U=S*S,G=F*F;if(this.textureA.type===this.gl.FLOAT){for(let M=0;M<this.H;M+=1)for(let E=0;E<this.W;E+=1){const W=(M*this.W+E)*4,T=((this.H-1-M)*this.W+E)*4,_=x[T],P=x[T+1];if(E+1<this.W){const L=p[W]-p[W+4],C=Math.sqrt(L*L+U);x[T+4]=_+C}if(M+1<this.H){const L=p[W]-p[W+this.W*4],C=Math.sqrt(L*L+G);x[T-4*this.W+1]=P+C}}this.gl.bindTexture(this.gl.TEXTURE_2D,this.areaConservationTexture.id),this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT,1),this.gl.texSubImage2D(this.gl.TEXTURE_2D,0,0,0,this.W,this.H,this.gl.RGBA,this.gl.FLOAT,x)}this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.bindTexture(this.gl.TEXTURE_2D,null)};const De=16.5;function Le(i){const r={};for(let l=0;l<i.length;l++)r[i[l]]=l;return r}const ke=["none","only medals","all"],Be=["neighbours","per swimmer"];var xe,We;class et{constructor(){pe(this,xe);this.params={numSteps:2,fov:45,visualizations:{enabled:!0,showFlags:!1,showWR:!1,showSpeed:!1,showDivingDistance:!0,showFinishTimes:!1,showSwimmersLines:"none",swimmersLinesList:ke,showSwimmersLinesDict:Le(ke),swimmersLinesMode:"neighbours",swimmersLinesModeList:Be,swimmersLinesModeDict:Le(Be),medalsModeBeforeFinish:"none",medalsModesDict:{none:0,stars:1,bright:2,lanes:3},medalsModeAfterFinish:"none",areaConservationEnabled:!0,shadow:{enabled:!0,shadowRadius:.5,shadowPower:.5,showCircle:!0,circleRadius:.6,circleStroke:.15},sparks:{enabled:!1,glow:5,glowOffset:.5,lengthFactor:1,stroke:.01,num:40,sizeFactor:50,fov:Math.PI/4}},swimmers:{showSpheres:!0,useTracking:!1},video:{thresholdBlending:!1,blendingThreshold:.41,show:!1},simulation:{optimized:!1,waterDamping:.02,poolSize:new g.Vector(2,1,2)}},this.resolution=new g.Vector(256,256),this.gl=g.create(),this.gl.canvas.tabIndex=0,this.originalVisParams=JSON.parse(JSON.stringify(this.params.visualizations)),delete this.originalVisParams.shadow,delete this.originalVisParams.sparks,this.useConfigFile=!0,this.time=0,this.swimmers=[],this.translateX=0,this.translateY=0,this.zoomDistance=4,this.angleX=-25,this.angleY=-200.5,this.angleZ=0,this.water=null;const r=new _e("—"),l=new we({});r.addVideo(new ye(this.gl,"",l,{poolSize:new g.Vector(2,1,2),waterResolution:new g.Vector(256,256),numSwimmers:1}));const d=new _e("100m freestyle"),p=new we({tx:-.53,ty:1.25,zoom:47.86,ax:-29,ay:-260.5,az:-5,fov:39.98});d.addVideo(new ye(this.gl,"swimming-race.mp4",p,{poolSize:new g.Vector(25,2,50),waterResolution:new g.Vector(1024,2048),numSwimmers:10,thresholdBlending:!0})),this.currentVideo=d.videos[0];const x=new _e("synchronized swimming"),S=new we({tx:-1.32,ty:.4,zoom:32.41,ax:-18,ay:-291.5,az:1,fov:42.8});x.addVideo(new ye(this.gl,"synchronized-swimming.mp4",S,{poolSize:new g.Vector(25,2,30),waterResolution:new g.Vector(1024,2048),numSwimmers:2})),this.scenesList=[r,d,x],this.scenes={},this.scenesList.forEach(F=>this.scenes[F.title]=F),this.currentScene=null,this.currentScene=null,this.paused=!1,this.configPlayButton()}configStopButton(){this.stopButton=document.getElementById("stop-button"),this.stopButton.addEventListener("click",()=>{this.stopRace()})}configPlayButton(){this.configStopButton(),this.playButton=document.getElementById("play-button"),this.playButton.addEventListener("click",()=>{this.playButton.textContent=="pause"?this.pause():(B.raceHasStarted||this.startRace(),this.play())})}setCalibration(r){this.translateX=r.tx,this.translateY=r.ty,this.zoomDistance=r.zoom,this.angleX=r.ax,this.angleY=r.ay,this.angleZ=r.az,this.params.fov=r.fov,this.gl.matrixMode(this.gl.PROJECTION),this.gl.loadIdentity(),this.gl.perspective(this.params.fov,this.gl.canvas.width/this.gl.canvas.height,.01,100),this.gl.matrixMode(this.gl.MODELVIEW)}setScene(r){if(console.log("SET SCENE : "+r),this.currentScene=this.scenes[r],this.currentScene){console.log("scene name : "+this.currentScene.title),this.currentVideo=this.currentScene.videos[0],this.setCalibration(this.currentVideo.calibration),ie(this,xe,We).call(this,this.currentVideo.poolSize),this.resolution=this.currentVideo.waterResolution,this.params.video.thresholdBlending=this.currentVideo.thresholdBlending,s.params.visualizations.areaConservationEnabled=!1,s.params.simulation.waterDamping=.1;const l=this.currentVideo.numSwimmers;if(this.swimmers.length!=l){for(let p=this.swimmers.length;p<l;p++){const x=new B(new g.Vector(0,0,0));this.swimmers.push(x)}for(let p=this.swimmers.length;p>l;p--)this.swimmers=this.swimmers.slice(1)}const d=document.getElementById("time-slider-container");this.params.video.show=!!this.currentVideo.video,this.params.swimmers.useTracking=!0,this.params.swimmers.showSpheres=!this.currentVideo.video,d.hidden=!this.currentVideo.video,this.stopRace(),this._reset(),this.params.simulation.optimized=!!this.currentVideo.video}}isOneVisualizationEnabled(){return this.params.visualizations.showFlags||this.params.visualizations.medalsModeBeforeFinish!="none"||this.params.visualizations.medalsModeAfterFinish!="none"||this.params.visualizations.showWR||this.params.visualizations.showSpeed||this.params.visualizations.showDivingDistance}updateTime(r){this.time+=r,this._updateDistanceMarker&&this._updateDistanceMarker()}getRaceTime(){return this.time-De}resetParams(){Object.entries(this.originalVisParams).forEach(r=>{const l=r[0],d=r[1];this.params.visualizations[l]=d}),this.params.visualizations.areaConservationEnabled=!1}updateEventIndex(){for(this.currentEventIndex=0;this.events[this.currentEventIndex]&&this.events[this.currentEventIndex].time<this.getRaceTime();)this.currentEventIndex++;this.currentEventIndex>0&&this.currentEventIndex--}setRaceTime(r){this.time=De+r,this.currentVideo.video&&this.currentVideo.setTime(this.time),this.events&&(this.updateEventIndex(),this.resetParams())}startRace(){this.setRaceTime(0),this.currentVideo.video&&this.currentVideo.video.play(),this.swimmers.forEach(r=>r.startRace()),B.raceHasStarted=!0,B.useGravity=!0,this.water.resetTextures(),this.water.WR_position=0,this.stopButton.hidden=!1}stopRace(){this.paused&&this.play(),this.setRaceTime(0),this.currentVideo.video&&this.currentVideo.video.pause(),this.swimmers.forEach(r=>r.swim(!1)),B.raceHasStarted=!1,this.water.resetTextures(),this.playButton.textContent="play",this.stopButton.hidden=!0}pause(){this.paused=!0,this.pauseVideo(),this.playButton.textContent="play"}play(){this.paused=!1,B.raceHasStarted&&(this.playVideo(),this.playButton.textContent="pause")}pauseVideo(){this.currentVideo.video&&this.currentVideo.video.pause()}playVideo(){this.currentVideo.video&&(this.currentVideo.video.play(),this.currentVideo.video.currentTime=this.time)}renderVideo(){this.currentVideo.video&&this.currentVideo.render()}parseConfigFile(r){fetch(r).then(l=>l.text()).then(l=>{this.events=JSON.parse(l),this.currentEventIndex=0,this._renderTimeline&&this._renderTimeline()})}updateParams(){if(!this.events||!this.useConfigFile)return;const r=this.events[this.currentEventIndex];if(!r)return;let l=r.rankSwimmerToggle;l||(l=1),(r.distance&&this.swimmers[l-1].getDistanceTraveled()>=r.distance||r.time!==void 0&&this.getRaceTime()>=r.time)&&(this.currentEventIndex++,Object.entries(r.params).forEach(d=>{const p=d[0],x=d[1];this.params.visualizations[p]=x}))}setRaceCalibration(r,l){this.params.simulation.poolSize.x=25,this.params.simulation.poolSize.y=2,this.params.simulation.poolSize.z=50,this.setCalibration(l),this.params.visualizations.sparks.fov=this.params.fov*2*Math.PI/360,r.matrixMode(r.PROJECTION),r.loadIdentity(),r.perspective(this.params.fov,r.canvas.width/r.canvas.height,.01,100),r.matrixMode(r.MODELVIEW)}setSynchroCalibration(r){this.params.simulation.poolSize.x=25,this.params.simulation.poolSize.y=2,this.params.simulation.poolSize.z=30,this.params.fov=42.8,this.translateX=-1.32,this.translateY=.4,this.zoomDistance=32.41,this.angleX=-18,this.angleY=-291.5,this.angleZ=1,this.params.visualizations.sparks.fov=this.params.fov*2*Math.PI/360,r.matrixMode(r.PROJECTION),r.loadIdentity(),r.perspective(this.params.fov,r.canvas.width/r.canvas.height,.01,100),r.matrixMode(r.MODELVIEW)}}xe=new WeakSet,We=function(r){console.log("SET POOL SIZE : "+r.z),this.params.simulation.poolSize.x=r.x,this.params.simulation.poolSize.y=r.y,this.params.simulation.poolSize.z=r.z};const s=new et;s.parseConfigFile("./assets/vis-config.json");const tt=`#version 300 es
    const float ARM_DELTA_X = float(`+Re+`);
    const float FOOT_DELTA_X = float( `+ze+`);
    const float FOOT_DELTA_Z = float( `+Ae+`);
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
`,nt=new Float32Array([-1,-1,1,-1,1,1,-1,1]),st=new Uint16Array([0,1,2,2,3,0]);var ee,Xe,he,He;class at{constructor(){pe(this,ee);this.numVecAttributes=Oe,this.maxNumSwimmer=Ue,this.gl=s.gl;const r=this.gl.NEAREST;this.texture=new g.Texture(this.numVecAttributes,this.maxNumSwimmer,{type:this.gl.FLOAT,filter:r}),this.initPrograms(),this.indexBuffer=this.gl.createBuffer(),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.indexBuffer),this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER,st,this.gl.STATIC_DRAW),this.vboPlane=this.gl.createBuffer(),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vboPlane),this.gl.bufferData(this.gl.ARRAY_BUFFER,nt,this.gl.STATIC_DRAW),this.vboPoints=this.gl.createBuffer()}update(){this.numSwimmers=s.swimmers.length;const r=5;this.swimmersAttributes=new Float32Array(this.numVecAttributes*4*this.maxNumSwimmer*r);const l=ie(this,ee,Xe).call(this,s.swimmers);for(let d=0;d<s.swimmers.length;d++){const p=l[d];ie(this,ee,He).call(this,d,p),ie(this,ee,he).call(this,s.swimmers.length+d,p.leftArm),ie(this,ee,he).call(this,2*s.swimmers.length+d,p.rightArm),ie(this,ee,he).call(this,3*s.swimmers.length+d,p.leftFoot),ie(this,ee,he).call(this,4*s.swimmers.length+d,p.rightFoot)}this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture.id),this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,!1),this.gl.texSubImage2D(this.gl.TEXTURE_2D,0,0,0,this.numVecAttributes,this.maxNumSwimmer,this.gl.RGBA,this.gl.FLOAT,this.swimmersAttributes),this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,!0),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vboPoints),this.gl.bufferData(this.gl.ARRAY_BUFFER,this.swimmersAttributes,this.gl.DYNAMIC_DRAW)}buildShader(r,l){const d=this.gl.createShader(l);return this.gl.shaderSource(d,r),this.gl.compileShader(d),d}createProgram(r){const l=this.gl.createProgram();return r.forEach(d=>{this.gl.attachShader(l,d)}),this.gl.linkProgram(l),l}checkShaders(r,l,d){this.gl.getShaderParameter(r,this.gl.COMPILE_STATUS)||console.error(this.gl.getShaderInfoLog(r)),this.gl.getShaderParameter(l,this.gl.COMPILE_STATUS)||console.error(this.gl.getShaderInfoLog(l)),this.gl.getProgramParameter(d,this.gl.LINK_STATUS)||console.error(this.gl.getProgramInfoLog(d))}createRenderingTexture(r,l){this.pointsTexture=new g.Texture(r,l,{type:this.gl.FLOAT,filter:this.gl.NEAREST}),this.pointsFrameBuffer=this.gl.createFramebuffer(),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.pointsFrameBuffer);const d=this.gl.COLOR_ATTACHMENT0;this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,d,this.gl.TEXTURE_2D,this.pointsTexture.id,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.horizontalPassTexture=new g.Texture(r,l,{type:this.gl.FLOAT,filter:this.gl.LINEAR}),this.horizontalPassFrameBuffer=this.gl.createFramebuffer(),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.horizontalPassFrameBuffer),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,d,this.gl.TEXTURE_2D,this.horizontalPassTexture.id,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null);const p=l/4,x=p,S=p;this.displacementTexture=new g.Texture(x,S,{type:this.gl.FLOAT,filter:this.gl.LINEAR}),this.displacementFrameBuffer=this.gl.createFramebuffer(),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.displacementFrameBuffer),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,d,this.gl.TEXTURE_2D,this.displacementTexture.id,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.oldDisplacementTexture=new g.Texture(x,S,{type:this.gl.FLOAT,filter:this.gl.LINEAR})}buildProgram(r,l){const d=this.buildShader(r,this.gl.VERTEX_SHADER),p=this.buildShader(l,this.gl.FRAGMENT_SHADER),x=this.createProgram([d,p]);return this.checkShaders(d,p,x),x}initPrograms(){this.programPoints=this.buildProgram(tt,it),this.programVolume=this.buildProgram(rt,ot),this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height)}volumePass(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.horizontalPassFrameBuffer),this.gl.useProgram(this.programVolume);const r=this.gl.getAttribLocation(this.programVolume,"iVertex"),l=this.gl.getUniformLocation(this.programVolume,"poolSize");this.gl.uniform2f(l,s.params.simulation.poolSize.x,s.params.simulation.poolSize.z);const d=this.gl.getUniformLocation(this.programVolume,"horizontal");this.gl.uniform1i(d,!0);const p=this.gl.getUniformLocation(this.programVolume,"show");this.gl.uniform1i(p,!1);const x=this.gl.getUniformLocation(this.programVolume,"swapColor");this.gl.uniform1i(x,!1);const S=2,F=this.gl.FLOAT,U=!1,G=0,M=0;this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vboPlane),this.gl.vertexAttribPointer(r,S,F,U,G,M),this.gl.enableVertexAttribArray(r),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.indexBuffer),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.pointsTexture.id),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this.gl.drawElements(this.gl.TRIANGLES,6,this.gl.UNSIGNED_SHORT,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.displacementFrameBuffer),this.gl.uniform1i(d,!1),this.gl.uniform1i(p,!1),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.horizontalPassTexture.id),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this.gl.viewport(0,0,this.displacementTexture.width,this.displacementTexture.height),this.gl.drawElements(this.gl.TRIANGLES,6,this.gl.UNSIGNED_SHORT,0),this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height)}pointPass(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.pointsFrameBuffer),this.gl.useProgram(this.programPoints);const r=this.gl.getAttribLocation(this.programPoints,"iData1"),l=this.gl.getAttribLocation(this.programPoints,"iData2"),d=this.gl.getAttribLocation(this.programPoints,"iData3"),p=this.gl.getUniformLocation(this.programPoints,"invPoolSize");this.gl.uniform2f(p,1/s.params.simulation.poolSize.x,1/s.params.simulation.poolSize.z);const x=4,S=this.gl.FLOAT,F=!1,U=4,G=12*U;let M=0;this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vboPoints),r>=0&&(this.gl.vertexAttribPointer(r,x,S,F,G,M),this.gl.enableVertexAttribArray(r)),M=4*U,l>=0&&(this.gl.vertexAttribPointer(l,x,S,F,G,M),this.gl.enableVertexAttribArray(l)),M=2*4*U,d>=0&&(this.gl.vertexAttribPointer(d,x,S,F,G,M),this.gl.enableVertexAttribArray(d)),this.gl.viewport(0,0,this.pointsTexture.width,this.pointsTexture.height),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this.gl.drawArrays(this.gl.POINTS,0,5*this.numSwimmers)}updateOldDisplacementTexture(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.displacementFrameBuffer),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.oldDisplacementTexture.id),this.gl.copyTexSubImage2D(this.gl.TEXTURE_2D,0,0,0,0,0,this.oldDisplacementTexture.width,this.oldDisplacementTexture.height)}draw(){this.updateOldDisplacementTexture(),this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this.pointPass(),this.volumePass(),this.gl.disable(this.gl.BLEND)}}ee=new WeakSet,Xe=function(r){const l=function(x,S){return S.getDistanceTraveled()-x.getDistanceTraveled()};let d=0;r.forEach(x=>{x.hasFinished()>.1&&d++});const p=r.slice(0,d).concat(r.slice(d).sort(l));for(let x=0;x<r.length;x++)r[x]=p[x];return r},he=function(r,l){this.swimmersAttributes[this.numVecAttributes*4*r]=l.center.x,this.swimmersAttributes[this.numVecAttributes*4*r+1]=l.center.z,this.swimmersAttributes[this.numVecAttributes*4*r+7]=l.center.y},He=function(r,l){ie(this,ee,he).call(this,r,l.body),this.swimmersAttributes[this.numVecAttributes*4*r+2]=l.divingDistance,this.swimmersAttributes[this.numVecAttributes*4*r+3]=l.divingTime,this.swimmersAttributes[this.numVecAttributes*4*r+4]=l.reactionTime,this.swimmersAttributes[this.numVecAttributes*4*r+5]=l.body.velocity.z*3.6,this.swimmersAttributes[this.numVecAttributes*4*r+6]=l.nationality,this.swimmersAttributes[this.numVecAttributes*4*r+8]=l.breakoutDistance,this.swimmersAttributes[this.numVecAttributes*4*r+9]=l.breakoutTime,this.swimmersAttributes[this.numVecAttributes*4*r+10]=l.finishTime};function Ee(i=0,r=1){const l=1-Math.random(),d=Math.random();return Math.sqrt(-2*Math.log(l))*Math.cos(2*Math.PI*d)*r+i}const oe=new g.Vector(1e3,0,-1e3),lt=.5,ct=2,ae="Temps (s)",fe="event",Te="distance (m)",X=class X{constructor(r){this.startingPoint=new g.Vector(r.x,r.y,r.z),this.center=new g.Vector(r.x,r.y,r.z),this.force=new g.Vector(0,0,190+Ee(0,20)),this.reactionTime=Math.max(.1,Ee(.15,.02));const l=.25,d=.15;this.body=new ue(r,l),this.leftArm=new ue(oe,d),this.rightArm=new ue(oe,d),this.leftFoot=new ue(oe,d),this.rightFoot=new ue(oe,d),this.body.cinematic=!X.useGravity,this.leftArm.cinematic=!0,this.rightArm.cinematic=!0,this.leftFoot.cinematic=!0,this.rightFoot.cinematic=!0,this.spheres=[this.body,this.leftArm,this.rightArm,this.leftFoot,this.rightFoot],this.divingDistance=0,this.divingTime=1e3,this.breakoutDistance=0,this.breakoutTime=1e3,this.nationality=Math.random()>.5?0:1,this.currendDataIndex=0,this.useTracking=!1,this.armPulsation=2*Math.PI*ct,this.cycleTime=0,this.cyclePhase=0,this.finishTime=0}async parseData(r){fetch(r).then(l=>{const d=l.headers.get("content-type");return!d||!d.includes("text/csv")?(console.log("no file found : "+r),null):l.text()}).then(l=>{if(!l)return;const d=l.split(`
`),p=d[0].split(",");this.data=d.slice(1).map(x=>{const S=x.split(",");return Object.fromEntries(p.map((F,U)=>[F,S[U]]))}),s.params.swimmers.useTracking&&(this.armPulsation=0)})}getDistanceTraveled(){const r=this.body.velocity.z,l=s.params.simulation.poolSize.z,d=this.body.center.z+l/2;return r>=0?d:2*l-d}startRace(){this.hasBrokeOut=!1,this.hasDove=!1,this.hasReacted=!1}jump(r=4.5){this.body.cinematic=!1,this.body.velocity=new g.Vector(0,0,r+Ee(0,1)),this.body.center=new g.Vector(this.startingPoint.x,1,-s.params.simulation.poolSize.z/2)}swim(r){this.hasReacted=r,this.isSwimming=r,this.finishTime=0,r||(this.body.followTarget=!1),r?(this.body.cinematic=!1,this.useGravity=!0,this.body.center=new g.Vector(this.startingPoint.x,0,-s.params.simulation.poolSize.z/2)):(this.body.velocity=new g.Vector(0,0,0),this.body.center=new g.Vector(this.startingPoint.x,0,0))}hasFinished(){return this.finishTime>.1}getArmOffset(r,l){l+=this.cyclePhase;const d=this.body.velocity.z>=0?this.armPulsation:-this.armPulsation;return new g.Vector(0,Math.cos(d*r+l),Math.sin(d*r+l)).multiply(lt)}setCurrentDataIndex(){if(this.currendDataIndex=0,!!this.data){for(;this.data[this.currendDataIndex]&&this.data[this.currendDataIndex][ae]<s.getRaceTime();)this.currendDataIndex++;if(this.currendDataIndex+1<this.data.length){if(this.currendDataIndex-1>=0){const r=parseFloat(this.data[this.currendDataIndex][Te]);let l=r;const d=s.params.simulation.poolSize.z;r>d&&(l=2*d-l),l-=d/2;const p=this.body.center;this.body.move(new g.Vector(p.x,p.y,l));const x=Math.sign(50-r)*.1;this.body.velocity=new g.Vector(0,0,x),console.log("vz : "+x)}this.body.setTarget(null),this.body.followTarget=!0,this.finishTime=0}}}findNextCycle(){let r=this.currendDataIndex+1;if(!this.data)return null;for(;this.data[r]&&this.data[r][fe]!="cycle";)r++;return this.data[r]?parseFloat(this.data[r][ae]):null}handleTracking(r){if(this.hasReacted&&this.useTracking&&this.currendDataIndex<this.data.length&&this.data[this.currendDataIndex][ae]<r){let l=null,d=r;const p=this.data[this.currendDataIndex+1];this.currendDataIndex+1<this.data.length&&(l=parseFloat(p[Te]),d=parseFloat(p[ae]));const x=s.params.simulation.poolSize.z;let S=-this.body.radius/2;const F=this.data[this.currendDataIndex][fe];if(F=="enter"||F=="turn"&&p[fe]!="under"){d=(r+d)/2,l=(this.body.center.z+x/2+l)/2;const G={[ae]:d,[Te]:l,[fe]:"under"};this.data.splice(this.currendDataIndex+1,0,G),S=-1.5}p&&p[fe]=="under"&&(S=-1.5),l>x&&(l=2*x-l),l-=s.params.simulation.poolSize.z/2;const U=new g.Vector(this.startingPoint.x,S,l);if(this.currendDataIndex+1<this.data.length?this.body.setTarget(U,d-r):this.body.setTarget(null),F=="cycle"){const G=parseFloat(this.data[this.currendDataIndex][ae]),M=this.findNextCycle();if(M){const W=1/(M-G);this.armPulsation=2*Math.PI*W,this.cycleTime=0,this.cyclePhase==0?this.cyclePhase=Math.PI:this.cyclePhase=0}}else F=="finish"&&(this.finishTime=this.data[this.currendDataIndex][ae],this.body.followTarget=!1,this.isSwimming=!1);this.currendDataIndex++}}moveSpheresAway(){this.rightArm.move(oe),this.leftArm.move(oe),this.rightFoot.move(oe),this.leftFoot.move(oe)}moveSpheres(r){this.cycleTime+=r;const l=this.getArmOffset(.5*this.cycleTime,0),d=this.getArmOffset(.5*this.cycleTime,Math.PI),p=this.getArmOffset(.5*this.cycleTime*2,0),x=this.getArmOffset(.5*this.cycleTime*2,Math.PI);this.rightArm.move(this.body.center.add(l).add(new g.Vector(Re,0,0))),this.leftArm.move(this.body.center.add(d).add(new g.Vector(-Re,0,0)));const S=this.body.velocity.z>=0?-Ae:Ae;this.rightFoot.move(this.body.center.add(new g.Vector(ze,p.y*.5,S))),this.leftFoot.move(this.body.center.add(new g.Vector(-ze,x.y*.5,S)))}update(r){const l=s.getRaceTime();X.raceHasStarted||(this.useTracking=s.params.swimmers.useTracking&&this.data),!this.hasReacted&&X.raceHasStarted&&(this.useTracking||l>this.reactionTime&&!s.params.swimmers.useTracking?(this.swim(!0),this.jump(),this.useTracking&&(this.body.cinematic=!0,this.body.followTarget=!0,this.body.setTarget(null))):(this.swim(!1),this.body.cinematic=!0,this.body.move(oe)),this.currendDataIndex=0),this.moveSpheresAway(),this.isSwimming&&(this.useTracking||this.body.addForce(this.force),this.body.center.y>-this.body.radius&&this.moveSpheres(r)),this.handleTracking(l);for(let p of this.spheres)p.update(r);!this.hasDove&&this.body.center.y<0&&this.body.oldCenter.y>=0&&(this.divingDistance=this.body.center.z+s.params.simulation.poolSize.z/2,this.divingTime=l,this.hasDove=!0);const d=this.body.radius;!this.hasBrokeOut&&this.body.center.y>-d&&this.body.oldCenter.y<=-d&&(this.breakoutDistance=this.body.center.z+s.params.simulation.poolSize.z/2,this.breakoutTime=l,this.hasBrokeOut=!0)}};te(X,"useGravity",!1),te(X,"raceHasStarted",!1),te(X,"swimming",!1),te(X,"attributes"),te(X,"initAttributes",()=>{X.attributes=new at}),te(X,"updateAttributesTexture",()=>{X.attributes.update()}),te(X,"getAttributesTexture",()=>X.attributes.texture),te(X,"bindDisplacementTexture",r=>{X.attributes.displacementTexture.bind(r)}),te(X,"bindOldDisplacementTexture",r=>{X.attributes.oldDisplacementTexture.bind(r)}),te(X,"reset",r=>{X.attributes.createRenderingTexture(r.x,r.y)});let B=X;const dt=`
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
`;function se(i,r,l,d){this.water=r,this.gl=i,this.tileTexture=g.Texture.fromImage(document.getElementById("tiles"),{minFilter:this.gl.LINEAR_MIPMAP_LINEAR,wrap:this.gl.REPEAT,format:this.gl.RGB}),this.franceTexture=g.Texture.fromImage(document.getElementById("france"),{minFilter:this.gl.LINEAR_MIPMAP_LINEAR,wrap:this.gl.REPEAT,format:this.gl.RGBA}),this.chinaTexture=g.Texture.fromImage(document.getElementById("china"),{minFilter:this.gl.LINEAR_MIPMAP_LINEAR,wrap:this.gl.REPEAT,format:this.gl.RGBA}),this.lettersTexture=g.Texture.fromImage(document.getElementById("letters"),{minFilter:this.gl.LINEAR,magFilter:this.gl.LINEAR,wrap:this.gl.REPEAT,format:this.gl.RGBA}),this.flagSize=d,this.flagSize=[1.5,1],this.flagCenter=l,this.lightDir=new g.Vector(2,2,-1).unit(),this.causticTex=new g.Texture(1024,1024),this.waterShaders=[];for(var p=0;p<2;p++)this.waterShaders[p]=new g.Shader(`
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
      
      
      `+Fe+dt+`
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

      void drawFlags(in vec2 position, in vec2 swimmerPos, in float nationality, bool rightSide, inout vec3 color) {
        float swimmer_x = swimmerPos.x;
        float swimmer_z = swimmerPos.y;
        float dz = rightSide ? -2.5 : 2.5;
        vec2 flagCenterNew = vec2(swimmer_x, swimmer_z + dz);
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
          drawFlags(position, swimmerPos, getSwimmerNationality(i), rightSide, color);
          if (showSpeed || showFinishTimes) drawNumbers(position, swimmerPos, i, rightSide, color);
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
  `),this.sphereCenter=new g.Vector,this.sphereRadius=0;var x=!!this.gl.getExtension("OES_standard_derivatives");this.causticsShader=new g.Shader(le+`
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
  `+le+`
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
  `)}se.prototype.reset=function(){this.cubeMesh=g.Mesh.cube({width:s.params.simulation.poolSize.x,height:2,depth:s.params.simulation.poolSize.z}),this.cubeMesh.triangles.splice(4,2),this.cubeMesh.compile()};se.prototype.updateCaustics=function(i){};se.prototype.renderWater=function(i,r,l){var d=new g.Raytracer;i.textureA.bind(0),this.tileTexture.bind(1),r.bind(2),this.causticTex.bind(3),this.franceTexture.bind(4),this.chinaTexture.bind(8),this.lettersTexture.bind(7),i.areaConservationTexture.bind(5);const p=B.getAttributesTexture();p&&p.bind(6),this.gl.enable(this.gl.CULL_FACE);for(var x=0;x<2;x++)this.gl.cullFace(x?this.gl.BACK:this.gl.FRONT),this.waterShaders[x].uniforms({light:this.lightDir,water:0,tiles:1,sky:2,causticTex:3,france:4,china:8,areaConservationTexture:5,swimmersAttributesTexture:6,iChannel0:7,areaConservation:s.params.visualizations.areaConservationEnabled,flagSize:[1.5,2],flagCenter:[this.flagCenter.x,this.flagCenter.y],poolSize:[s.params.simulation.poolSize.x,s.params.simulation.poolSize.y,s.params.simulation.poolSize.z],poolSizeVertexShader:[s.params.simulation.poolSize.x,s.params.simulation.poolSize.y,s.params.simulation.poolSize.z],eye:d.eye,sphereCenter:this.sphereCenter,sphereRadius:this.sphereRadius,showProjectionGrid:i.showProjectionGrid,showAreaConservedGrid:i.showAreaConservedGrid,wr:i.WR_position,swimmersNumber:s.swimmers.length,showFlags:s.params.visualizations.showFlags,showWR:s.params.visualizations.showWR,showSpeed:s.params.visualizations.showSpeed,showDivingDistance:s.params.visualizations.showDivingDistance,showFinishTimes:s.params.visualizations.showFinishTimes,time:s.getRaceTime(),shadowEnabled:l.enabled,shadowRadius:l.shadowRadius,shadowPower:l.shadowPower,showCircle:l.showCircle,shadowCircleRadius:l.circleRadius,shadowCircleStroke:l.circleStroke,showSwimmersLines:Math.round(s.params.visualizations.showSwimmersLinesDict[s.params.visualizations.showSwimmersLines]),swimmersLinesMode:s.params.visualizations.swimmersLinesModeDict[s.params.visualizations.swimmersLinesMode],medalsModeBeforeFinish:Math.round(s.params.visualizations.medalsModesDict[s.params.visualizations.medalsModeBeforeFinish]),medalsModeAfterFinish:Math.round(s.params.visualizations.medalsModesDict[s.params.visualizations.medalsModeAfterFinish])}).draw(i.plane);this.gl.disable(this.gl.CULL_FACE)};se.prototype.renderSpheres=function(i){const r=[];s.swimmers.forEach(l=>l.spheres.forEach(d=>r.push(d)));for(let l of r)this.renderSphere(i,l)};se.prototype.renderSphere=function(i,r){i.textureA.bind(0),this.causticTex.bind(1),this.sphereShader.uniforms({light:this.lightDir,water:0,causticTex:1,sphereCenter:[r.center.x,r.center.y,r.center.z],sphereRadius:r.radius,poolSize:[s.params.simulation.poolSize.x,s.params.simulation.poolSize.y,s.params.simulation.poolSize.z]}).draw(r.mesh)};se.prototype.renderSphereOld=function(i){i.textureA.bind(0),this.causticTex.bind(1),this.sphereShader.uniforms({light:this.lightDir,water:0,causticTex:1,sphereCenter:this.sphereCenter,sphereRadius:this.sphereRadius,poolSize:[s.params.simulation.poolSize.x,s.params.simulation.poolSize.y,s.params.simulation.poolSize.z]}).draw(this.sphereMesh)};se.prototype.renderCube=function(i){this.gl.enable(this.gl.CULL_FACE),i.textureA.bind(0),this.tileTexture.bind(1),this.causticTex.bind(2),this.cubeShader.uniforms({light:this.lightDir,water:0,tiles:1,causticTex:2,sphereCenter:this.sphereCenter,sphereRadius:this.sphereRadius,poolSize:[s.params.simulation.poolSize.x,s.params.simulation.poolSize.y,s.params.simulation.poolSize.z]}).draw(this.cubeMesh),this.gl.disable(this.gl.CULL_FACE)};function Pe(i,r){this.gl=r,this.id=r.createTexture(),r.bindTexture(r.TEXTURE_CUBE_MAP,this.id),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,1),r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MAG_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),r.texImage2D(r.TEXTURE_CUBE_MAP_NEGATIVE_X,0,r.RGB,r.RGB,r.UNSIGNED_BYTE,i.xneg),r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X,0,r.RGB,r.RGB,r.UNSIGNED_BYTE,i.xpos),r.texImage2D(r.TEXTURE_CUBE_MAP_NEGATIVE_Y,0,r.RGB,r.RGB,r.UNSIGNED_BYTE,i.yneg),r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_Y,0,r.RGB,r.RGB,r.UNSIGNED_BYTE,i.ypos),r.texImage2D(r.TEXTURE_CUBE_MAP_NEGATIVE_Z,0,r.RGB,r.RGB,r.UNSIGNED_BYTE,i.zneg),r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_Z,0,r.RGB,r.RGB,r.UNSIGNED_BYTE,i.zpos)}Pe.prototype.bind=function(i){this.gl.activeTexture(this.gl.TEXTURE0+(i||0)),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,this.id)};Pe.prototype.unbind=function(i){this.gl.activeTexture(this.gl.TEXTURE0+(i||0)),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,null)};const me=new $e,ht=function(i,r){const l=me.addFolder("visualizations");l.close(),l.add(s,"useConfigFile").name("use configuration file");const d={showTimeline:!0};l.add(d,"showTimeline").name("show event timeline").onChange(M=>{const E=document.getElementById("event-editor");E&&(E.style.display=M?"block":"none")}),l.add(s.params.visualizations,"showFlags").name("show flags").listen(),l.add(s.params.visualizations,"showWR").name("show world record").listen(),l.add(s.params.visualizations,"showSwimmersLines",s.params.visualizations.swimmersLinesList).name("show neighbours lines").listen(),l.add(s.params.visualizations,"swimmersLinesMode",s.params.visualizations.swimmersLinesModeList).name("show neighbours lines").listen(),l.add(s.params.visualizations,"medalsModeBeforeFinish",["none","stars","bright","lanes"]).name("show potential medals").listen(),l.add(s.params.visualizations,"medalsModeAfterFinish",["none","stars","bright","lanes"]).name("show potential medals after finish").listen(),l.add(s.params.visualizations,"showSpeed").name("show speed").listen(),l.addFolder("ranks"),l.add(s.params.visualizations,"showDivingDistance").name("show diving distance").listen(),l.add(s.params.visualizations.shadow,"enabled").name("show shadow"),l.add(s.params.visualizations,"areaConservationEnabled","areaConservationEnabled").name("area conservation").listen();const p=me.addFolder("video");p.close(),p.add(s.params.video,"thresholdBlending").name("threshold blending"),p.add(s.params.video,"blendingThreshold",.1,.5).name("blending threshold"),p.add(s.params.video,"show").name("show").listen();const x=l.addFolder("Sparks");x.close(),x.add(s.params.visualizations.sparks,"enabled").name("sparks enabled"),x.add(s.params.visualizations.sparks,"glow",1,30).name("sparks glow factor"),x.add(s.params.visualizations.sparks,"lengthFactor",.1,10).name("sparks length factor"),x.add(s.params.visualizations.sparks,"glowOffset",.1,3).name("sparks glow offset"),x.add(s.params.visualizations.sparks,"stroke",.001,.05).name("sparks stroke"),x.add(s.params.visualizations.sparks,"num",10,Ve).step(1).name("sparks number"),x.add(s.params.visualizations.sparks,"sizeFactor",10,100).name("size factor");const S=l.addFolder("Swimmers shadows");S.close(),S.add(s.params.visualizations.shadow,"shadowRadius",0,2).name("shadow radius"),S.add(s.params.visualizations.shadow,"shadowPower",.1,2).name("shadow power"),S.add(s.params.visualizations.shadow,"showCircle").name("circle"),S.add(s.params.visualizations.shadow,"circleRadius",.5,2).name("circle radius"),S.add(s.params.visualizations.shadow,"circleStroke",.1,.5).name("circle stroke");const F=me.addFolder("Simulation");F.close(),F.add(s.params.simulation,"optimized").name("optimized").listen(),F.add(s.params.simulation.poolSize,"x",1,25).name("pool width").onChange(function(M){r()}).listen(),F.add(s.params.simulation.poolSize,"z",1,50).name("pool height").onChange(function(M){r()}).listen(),F.add(s.params.simulation.poolSize,"y",1,3).name("pool depth").onChange(function(M){r()}).listen(),F.add(s.params.simulation,"waterDamping",.005,.15).name("water damping").listen();const U=me.addFolder("swimmers");U.close(),U.add(s.params.swimmers,"showSpheres").name("show spheres").listen(),U.add(s.params.swimmers,"useTracking").name("use tracking data").listen();const G=me.addFolder("camera");G.close(),G.add(s.params,"fov",28,45).name("fov").listen().onChange(function(M){s.params.visualizations.sparks.fov=M*2*Math.PI/360,i.matrixMode(i.PROJECTION),i.loadIdentity(),i.perspective(s.params.fov,i.canvas.width/i.canvas.height,.01,100),i.matrixMode(i.MODELVIEW),console.log("perspective : "+s.params.fov)})},be=150,ne=100;function ut(i){const r=document.createElement("div");if(document.body.appendChild(r),r.id="event-editor",r.style.position="fixed",r.display="block",r.style.bottom="60px",r.style.left="10px",r.style.right="10px",r.style.height="120px",r.style.zIndex="4",r.style.background="#222",r.style.color="#fff",r.style.overflow="auto",r.style.padding="4px",r.style.fontSize="12px",r.style.position=r.style.position||"relative",!r){console.warn(`event editor container "${i}" not found`);return}let l,d=!1;const p=[{name:"showFlags",type:"boolean"},{name:"showWR",type:"boolean"},{name:"showSpeed",type:"boolean"},{name:"showDivingDistance",type:"boolean"},{name:"showFinishTimes",type:"boolean"},{name:"showSwimmersLines",type:"select",options:s.params.visualizations.swimmersLinesList},{name:"swimmersLinesMode",type:"select",options:s.params.visualizations.swimmersLinesModeList},{name:"medalsModeBeforeFinish",type:"select",options:["none","stars","bright","lanes"]},{name:"medalsModeAfterFinish",type:"select",options:["none","stars","bright","lanes"]},{name:"rankSwimmerToggle",type:"number",min:1,max:10}];function x(T){const _=document.createElement("div");_.style.flex="1",_.style.padding="4px",_.style.background="#222",_.style.border="1px solid #555",_.style.borderRadius="4px",_.style.fontFamily="monospace",_.style.fontSize="12px",_.style.whiteSpace="pre-wrap",_.style.overflow="auto",_.style.maxHeight="100px";function P(){const L=T.params;if(Object.keys(L).length===0){_.textContent="(no params)";return}const C=Object.entries(L).map(([N,D])=>`${N}: ${JSON.stringify(D)}`);_.textContent=C.join(`
`)}return P(),{element:_,update:P}}function S(T,_){const P=document.createElement("div");P.style.display="flex",P.style.flexWrap="wrap",P.style.margin="4px 0",P.style.background="#333",P.style.padding="4px";function L(){_&&(_(),W())}return p.forEach(C=>{const N=document.createElement("div");N.style.marginRight="8px",N.style.marginBottom="4px";const D=document.createElement("label");D.style.whiteSpace="nowrap",D.textContent=C.name+":",N.appendChild(D);let A;if(C.type==="boolean"){A=document.createElement("select"),[{value:"",label:"—"},{value:"true",label:"ON"},{value:"false",label:"OFF"}].forEach(q=>{const V=document.createElement("option");V.value=q.value,V.textContent=q.label,A.appendChild(V)});const j=T.params[C.name];j===void 0?A.value="":j===!0?A.value="true":j===!1&&(A.value="false"),A.addEventListener("change",()=>{A.value===""?delete T.params[C.name]:A.value==="true"?T.params[C.name]=!0:A.value==="false"&&(T.params[C.name]=!1),L()})}else if(C.type==="select"){A=document.createElement("select");const Y=document.createElement("option");Y.value="",Y.textContent="—",A.appendChild(Y),C.options.forEach(j=>{const q=document.createElement("option");q.value=j,q.textContent=j,A.appendChild(q)}),A.value=T.params[C.name]||"",A.addEventListener("change",()=>{A.value===""?delete T.params[C.name]:T.params[C.name]=A.value,L()})}else C.type==="number"&&(A=document.createElement("input"),A.type="number",C.min!==void 0&&(A.min=C.min),C.max!==void 0&&(A.max=C.max),A.placeholder="—",A.style.width="50px",A.value=T.params[C.name]!==void 0?T.params[C.name]:"",A.addEventListener("change",()=>{if(A.value==="")delete T.params[C.name];else{const Y=parseFloat(A.value);isNaN(Y)||(T.params[C.name]=Y)}L()}));A&&N.appendChild(A),P.appendChild(N)}),P}function F(){const T=document.createElement("div");T.style.marginTop="8px",T.style.padding="8px",T.style.background="#555",T.style.border="1px solid #777";const _=document.createElement("div");_.textContent="Add New Event",_.style.fontWeight="bold",_.style.marginBottom="4px",T.appendChild(_);const P=document.createElement("input");P.type="number",P.placeholder="Distance",P.style.width="auto",P.style.marginRight="8px",T.appendChild(P);const L={},C=S({params:L},null);C.style.margin="4px 0",T.appendChild(C);const N=document.createElement("button");return N.textContent="OK",N.addEventListener("click",()=>{const D=parseFloat(P.value);if(isNaN(D)){alert("Please enter a valid distance");return}const A={distance:D,params:{...L}};s.events.push(A),W(),l.remove(),l=null}),T.appendChild(N),T}function U(T,_,{title:P="",id:L=null,color:C="#e74c3c"}){const N=T/_*100,D=document.createElement("div");return D.style.position="absolute",D.style.left=N+"%",D.style.transform="translateX(-50%)",D.style.width="4px",D.style.height="100%",D.style.background=C,D.style.cursor="pointer",D.title=P,L&&(D.id=L),D.addEventListener("click",()=>{E(idx)}),D}function G(){let T=document.getElementById("distance-marker");const _=s.swimmers[0].getDistanceTraveled();if(!T){if(d)return;const P=document.getElementById("timeline-track");T=U(_,ne,{color:"blue",id:"distance-marker"}),P.appendChild(T)}T.style.left=_+"%"}function M(){r.innerHTML="";const T=document.createElement("button");if(T.textContent=d?"□":"—",T.style.position="absolute",T.style.top="0",T.style.right="0",T.style.width="20px",T.style.height="20px",T.style.zIndex="100001",T.addEventListener("click",()=>{d=!d,M()}),r.appendChild(T),d){r.style.height="20px";return}r.style.height="300px";const _=document.createElement("div");if(_.style.position="relative",_.style.top="0px",_.style.left="50%",_.style.transform="translateX(-50%)",_.style.width="80px",_.style.height="15px",_.style.background="grey",_.style.border="1px solid black",_.style.cursor="ns-resize",_.style.zIndex="100000",_.style.lineHeight="16px",_.style.textAlign="center",_.textContent="drag",r.appendChild(_),_.addEventListener("mousedown",e=>{e.preventDefault();const n=e.clientY,a=r.offsetHeight;function c(u){const v=a-(u.clientY-n);v>20&&(r.style.height=v+"px")}function h(){document.removeEventListener("mousemove",c),document.removeEventListener("mouseup",h)}document.addEventListener("mousemove",c),document.addEventListener("mouseup",h)}),!s.events){r.textContent="no events defined";return}const P=document.createElement("div");r.appendChild(P),P.style.marginRight="8px",P.style.marginBottom="4px";const L=document.createElement("label");L.style.whiteSpace="nowrap",L.textContent="select scene",L.style.margin="30px",P.appendChild(L);const C=document.createElement("select");C.style.width="auto",s.scenesList.forEach(e=>{const n=document.createElement("option");n.textContent=e.title,n.value=e.title,C.appendChild(n)}),C.addEventListener("change",()=>{s.setScene(C.value)}),P.appendChild(C);const N=s.events.slice().sort((e,n)=>{const a=e.distance!==void 0?e.distance:e.time!==void 0?e.time:0,c=n.distance!==void 0?n.distance:n.time!==void 0?n.time:0;return a-c}),D=new Set;N.forEach(e=>{e.params&&Object.keys(e.params).forEach(n=>D.add(n))});let A=p.map(e=>e.name).filter(e=>D.has(e));const Y=["#4caf50","#2196f3","#ff9800","#9c27b0","#f44336","#009688","#e91e63","#3f51b5"],j={};A.forEach((e,n)=>{j[e]=Y[n%Y.length]});const q={},V={};A.forEach(e=>{V[e]=!1,q[e]=0});const J=[];if(N.forEach(e=>{const n=e.distance!==void 0?e.distance:e.time!==void 0?e.time:0;e.params&&Object.keys(e.params).forEach(a=>{if(A.includes(a)){const c=!!e.params[a];c!==V[a]&&(V[a]&&J.push({name:a,start:q[a],end:n}),V[a]=c,q[a]=n)}})}),A.forEach(e=>{V[e]&&J.push({name:e,start:q[e],end:ne})}),A.length>0){const e=document.createElement("div");e.style.position="relative";const n=20;e.style.height=A.length*n+"px",e.style.background="#222",e.style.marginBottom="4px",e.style.marginTop="10px",A.forEach((c,h)=>{const u=document.createElement("div");u.textContent=c,u.style.position="absolute",u.style.left="0",u.style.top=h*n+2+"px",u.style.width=be+"px",u.style.color="#aaa",u.style.fontSize="10px",u.style.pointerEvents="none",e.appendChild(u)});const a=document.createElement("div");a.style.position="absolute",a.style.left=be+"px",a.style.top="0",a.style.right="0",a.style.bottom="0",a.style.overflow="hidden",e.appendChild(a),J.forEach(c=>{const h=document.createElement("div"),u=c.start/ne*100,v=(c.end-c.start)/ne*100;h.style.position="absolute",h.style.left=u+"%",h.style.top=A.indexOf(c.name)*n+2+"px",h.style.height=n-4+"px",h.style.width=v+"%",h.style.background=j[c.name]||"#4caf50",h.title=`${c.name}: ${c.start.toFixed(2)} → ${c.end.toFixed(2)}`;const f=document.createElement("span");if(f.textContent=`${c.name}: ${c.start.toFixed(2)} → ${c.end.toFixed(2)}`,f.style.position="absolute",f.style.top="0",f.style.left="2px",f.style.fontSize="10px",f.style.color="white",f.style.pointerEvents="none",f.style.whiteSpace="nowrap",f.style.overflow="hidden",f.style.textOverflow="ellipsis",h.appendChild(f),c.end<ne){const m=document.createElement("div");m.style.position="absolute",m.style.right="0",m.style.top="0",m.style.width="5px",m.style.height="100%",m.style.background="rgba(255,255,255,0.5)",m.style.cursor="ew-resize",h.appendChild(m),m.addEventListener("mousedown",y=>{y.preventDefault(),y.stopPropagation();const R=y.clientX,b=h.offsetWidth;function z(k){const Q=k.clientX-R,Z=Math.max(1,b+Q),de=Z/a.offsetWidth*100;h.style.width=de+"%";const qe=c.start+Z/a.offsetWidth*ne;f.textContent=`${c.name}: ${c.start.toFixed(2)} → ${qe.toFixed(2)}`}function O(){document.removeEventListener("mousemove",z),document.removeEventListener("mouseup",O);const k=h.offsetWidth,Q=c.start+k/a.offsetWidth*ne,Z=N.find(de=>(de.distance!==void 0?de.distance:de.time!==void 0?de.time:0)===c.end);Z&&(Z.distance!==void 0?Z.distance=Q:Z.time!==void 0&&(Z.time=Q)),W()}document.addEventListener("mousemove",z),document.addEventListener("mouseup",O)})}a.appendChild(h)}),r.appendChild(e)}const H=document.createElement("div");H.style.position="relative",H.style.height="40px",H.style.background="#222",H.style.marginBottom="4px",H.style.paddingLeft="80px";const K=document.createElement("div");K.id="timeline-track",K.style.position="absolute",K.style.background="#444",K.style.left=be+"px",K.style.top="0",K.style.right="0",K.style.bottom="0",H.appendChild(K),N.forEach((e,n)=>{const a=e.distance!==void 0?e.distance:e.time!==void 0?e.time:0,c=`event ${n}: ${JSON.stringify(e.params)}`,h=U(a,ne,{title:c});K.appendChild(h)}),r.appendChild(H),N.forEach((e,n)=>{const a=document.createElement("div");a.style.display="flex",a.style.flexDirection="column",a.style.marginBottom="4px";const c=document.createElement("div");c.style.display="flex",c.style.alignItems="center";const h=document.createElement("input");h.type="number",h.style.width="60px",h.value=e.distance!==void 0?e.distance:e.time!==void 0?e.time:0,h.addEventListener("change",()=>{const y=parseFloat(h.value);isNaN(y)||(e.distance!==void 0?e.distance=y:e.time=y,W())}),c.appendChild(h);const u=x(e);c.appendChild(u.element);const v=document.createElement("button");v.textContent="⚙",v.style.marginLeft="4px",c.appendChild(v);const f=document.createElement("button");f.textContent="✖",f.style.marginLeft="4px",f.addEventListener("click",()=>{const y=s.events.indexOf(N[n]);y!==-1&&(s.events.splice(y,1),M())}),c.appendChild(f),a.appendChild(c);let m;v.addEventListener("click",()=>{m?(m.remove(),m=null):(m=S(e,u.update),a.appendChild(m))}),r.appendChild(a)});const w=document.createElement("button");w.textContent="+ add event",w.addEventListener("click",()=>{l?(l.remove(),l=null):(l=F(),r.appendChild(l),r.scrollTop=r.scrollHeight)}),r.appendChild(w);const t=document.createElement("button");t.textContent="export JSON",t.style.marginLeft="8px",t.addEventListener("click",()=>{const e=JSON.stringify(s.events,null,2),n=new Blob([e],{type:"application/json"}),a=URL.createObjectURL(n),c=document.createElement("a");c.href=a,c.download="vis-config.json",c.click(),URL.revokeObjectURL(a)}),r.appendChild(t);const o=document.createElement("input");o.type="file",o.accept=".json",o.style.marginLeft="8px",o.addEventListener("change",e=>{const n=e.target.files[0];if(n){const a=new FileReader;a.onload=c=>{try{const h=JSON.parse(c.target.result);s.events=h,W()}catch(h){alert("Invalid JSON: "+h.message)}},a.readAsText(n)}}),r.appendChild(o)}function E(T){const P=r.querySelectorAll("div")[1+T];P&&P.scrollIntoView({behavior:"smooth",block:"center"})}function W(){s.events.sort((T,_)=>{const P=T.distance!==void 0?T.distance:T.time!==void 0?T.time:0,L=_.distance!==void 0?_.distance:_.time!==void 0?_.time:0;return P-L}),M()}M(),s._renderTimeline=M,s._updateDistanceMarker=G}function ft(i){return i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n/g,"<br>")}function mt(i){var r=ft(i);r=="WebGL not supported"&&(r='Your browser does not support WebGL.<br>Please see    <a href="http://www.khronos.org/webgl/wiki/Getting_a_WebGL_Implementation">    Getting a WebGL Implementation</a>.');var l=document.getElementById("loading");l.innerHTML=r,l.style.zIndex=1}window.onerror=mt;var Ne,$;const pt=10,I=s.gl;var ge,Ce;B.initAttributes();function Ye(){document.getElementById("warning").hidden=!(s.resolution.x*s.resolution.y>3e5&&s.water&&s.params.visualizations.areaConservationEnabled)}let Se=0;function gt(i){Se+=i,Se>=1&&(document.getElementById("fps").innerText=`${(1/i).toFixed(1)} FPS`,Se=0)}function ce(){console.log("reset"),document.getElementById("resolution").innerText=`Resolution: ${s.resolution.x} x ${s.resolution.y}`,Ye(),ge=new g.Vector(0,-s.params.simulation.poolSize.z/2+1),s.water.reset(s.resolution),$.flagCenter=ge,$.flagSize=Ce,$.reset();const i=s.params.simulation.poolSize.x/pt;let r=s.params.simulation.poolSize.x/2-i/2,l=0;for(let d of s.swimmers)d.body.center.x=r,d.startingPoint.x=r,d.parseData("./assets/race-data/"+l+".csv"),l++,r-=i}function vt(i){const r=parseFloat(i.target.value);isNaN(r)||(s.setRaceTime(r),s.swimmers.forEach(l=>l.setCurrentDataIndex()))}window.onload=function(){var i=window.devicePixelRatio||1,r=document.getElementById("help");function l(){var e=innerWidth,n=innerHeight;I.canvas.width=e*i,I.canvas.height=n*i,I.canvas.style.width=e+"px",I.canvas.style.height=n+"px",I.viewport(0,0,I.canvas.width,I.canvas.height),I.matrixMode(I.PROJECTION),I.loadIdentity(),I.perspective(s.params.fov,I.canvas.width/I.canvas.height,.01,100),I.matrixMode(I.MODELVIEW),o()}document.body.appendChild(I.canvas),I.canvas.oncontextmenu=function(e){e.preventDefault()},I.clearColor(0,0,0,1),ge=new g.Vector(0,-s.params.simulation.poolSize.z/2+1),Ce=.7;const d=document.getElementById("time-slider");d&&d.addEventListener("input",vt);const p=document.getElementById("drop-zone");let x=0;document.addEventListener("dragenter",e=>{x++,p.style.display="flex"}),document.addEventListener("dragover",e=>{e.preventDefault(),e.dataTransfer.dropEffect="copy"}),document.addEventListener("dragleave",e=>{x--,x===0&&(p.style.display="none")}),ht(I,ce),s._reset=ce,setTimeout(()=>{ut("event-editor")},50),$=new se(I,s.water,ge,Ce),Ne=new Pe({xneg:document.getElementById("xneg"),xpos:document.getElementById("xpos"),yneg:document.getElementById("ypos"),ypos:document.getElementById("ypos"),zneg:document.getElementById("zneg"),zpos:document.getElementById("zpos")},I);const S=new B(new g.Vector(0,0,0));if(s.swimmers.push(S),s.water=new re(s.gl),!s.water.textureA.canDrawTo()||!s.water.textureB.canDrawTo())throw new Error("Rendering to floating-point textures is required but not supported");ce();for(var F=0;F<20;F++)s.water.addDrop(Math.random()*2-1,Math.random()*2-1,.06,F&1?.01:-.01);document.getElementById("loading").innerHTML="",l();var U=window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(e){setTimeout(e,0)},G=new Date().getTime();function M(){var e=new Date().getTime();s.paused||(t((e-G)/1e3),o()),G=e,U(M)}U(M),window.onresize=l;var E,W,T,_=-1,P=0,L=1,C=2;const N=3;var D,A;function Y(e,n,a){if(D=e,A=n,!a||a.button===0){var c=new g.Raytracer,h=c.getRayForPixel(e*i,n*i),u=c.eye.add(h.multiply(-c.eye.y/h.y));for(let f of s.swimmers){var v=g.Raytracer.hitTestSphere(c.eye,h,f.body.center,f.body.radius);if(v){_=L,T=f,f.body.cinematic=!0,E=v.hit,W=c.getRayForPixel(I.canvas.width/2,I.canvas.height/2).negative();return}}Math.abs(u.x)<s.params.simulation.poolSize.x/2&&Math.abs(u.z)<s.params.simulation.poolSize.z/2&&(_=P,j(e,n))}else a.button===2?_=C:a.button===1&&(_=N)}function j(e,n,a){switch(_){case P:{var c=new g.Raytracer,h=c.getRayForPixel(e*i,n*i),u=c.eye.add(h.multiply(-c.eye.y/h.y));s.water.addDrop(u.x/s.params.simulation.poolSize.x*2,u.z/s.params.simulation.poolSize.z*2,.06,.03),s.paused&&(s.water.updateNormals(),$.updateCaustics(s.water));break}case L:{var c=new g.Raytracer,h=c.getRayForPixel(e*i,n*i),v=-W.dot(c.eye.subtract(E))/W.dot(h),f=c.eye.add(h.multiply(v));const R=T.body.center.add(f.subtract(E)),b=T.body.radius,z=Math.max(b-s.params.simulation.poolSize.x/2,Math.min(s.params.simulation.poolSize.x/2-b,R.x)),O=Math.max(b-s.params.simulation.poolSize.y,Math.min(10,R.y)),k=Math.max(b-s.params.simulation.poolSize.z/2,Math.min(s.params.simulation.poolSize.z/2-b,R.z));T.body.move(new g.Vector(z,O,k)),E=f,s.paused&&$.updateCaustics(s.water);break}case C:{if(a&&a.shiftKey){s.angleZ-=e-D,s.angleZ=Math.max(-89.999,Math.min(89.999,s.angleZ));break}s.angleY-=e-D,s.angleX-=n-A,s.angleX=Math.max(-89.999,Math.min(89.999,s.angleX));break}case N:{const m=.001*s.zoomDistance;s.translateX+=m*(e-D),s.translateY-=m*(n-A)}}D=e,A=n,s.paused&&o()}function q(){_=-1,T&&(T.body.cinematic=!B.useGravity)}function V(e){return e===r||e.parentNode&&V(e.parentNode)}function J(e){return e&&(e.id==="event-editor"||e.parentNode&&J(e.parentNode))}function H(e){s.zoomDistance*=1-e*2e-4,s.zoomDistance=Math.max(2,Math.min(1e3,s.zoomDistance)),s.paused&&o()}addEventListener("wheel",function(e){if(!J(e.target)){var n=e.deltaY;H(-n)}}),document.onmousedown=function(e){I.canvas.focus(),V(e.target)||Y(e.pageX,e.pageY,e)},document.onmousemove=function(e){j(e.pageX,e.pageY,e)},document.onmouseup=function(){q()},document.ontouchstart=function(e){e.touches.length===1&&!V(e.target)&&(e.preventDefault(),Y(e.touches[0].pageX,e.touches[0].pageY,!1))},document.ontouchmove=function(e){e.touches.length===1&&j(e.touches[0].pageX,e.touches[0].pageY)},document.ontouchend=function(e){e.touches.length==0&&q()};function K(){s.paused?s.play():s.pause()}const w=function(e){if(e.which==32)K();else if(e.which==71){B.useGravity=!B.useGravity;for(let n of s.swimmers)n.body.cinematic=B.useGravity}else if(e.which==76&&s.paused)o();else if(e.which==74)s.swimmers.forEach(n=>n.jump(2));else if(e.which==67)s.params.visualizations.areaConservationEnabled=!s.params.visualizations.areaConservationEnabled,Ye(),console.log("Area conservation "+(s.params.visualizations.areaConservationEnabled?"enabled.":"disabled."));else if(e.which==80)s.water.showProjectionGrid=!s.water.showProjectionGrid,console.log("Projection grid "+(s.water.showProjectionGrid?"enabled.":"disabled."));else if(e.which==65)s.water.showAreaConservedGrid=!s.water.showAreaConservedGrid,console.log("Area conserved grid "+(s.water.showAreaConservedGrid?"enabled.":"disabled."));else if(e.which==83){if(B.swimming=!B.swimming,B.swimming)for(let n of s.swimmers)n.swim(!0);else stopRace();console.log("Swimming "+(B.swimming?"enabled.":"disabled."))}else e.which==86?s.params.video.show=!s.params.video.show:e.which==72?(document.getElementById("commands").hidden=!document.getElementById("commands").hidden,document.getElementById("h").hidden=!document.getElementById("h").hidden):e.which==40?(s.resolution.x>129&&(s.resolution.x=Math.round(s.resolution.x/2)),ce(),console.log("decreasing x resolution")):e.which==38?(s.resolution.x<16384&&(s.resolution.x=Math.round(s.resolution.x*2)),ce(),console.log("increasing x resolution")):e.which==37?(s.resolution.y>129&&(s.resolution.y=Math.round(s.resolution.y/2)),ce(),console.log("decreasing y resolution")):e.which==39&&(s.resolution.y<16384&&(s.resolution.y=Math.round(s.resolution.y*2)),ce(),console.log("increasing y resolution"))};I.canvas.addEventListener("keydown",w);function t(e){if(!(e>1)){if(_==L)for(let n of s.swimmers)n.body.velocity=new g.Vector(0,0,0);for(let n of s.swimmers)n.update(e);s.water.updateSpheres(e);for(let n=0;n<s.params.numSteps;n++)s.water.stepSimulation();$.updateCaustics(s.water),B.raceHasStarted&&s.updateTime(e),s.updateParams(),d.value=s.getRaceTime(),gt(e)}}function o(){g.keys.L&&($.lightDir=g.Vector.fromAngles((90-s.angleY)*Math.PI/180,-s.angleX*Math.PI/180),s.paused&&$.updateCaustics(s.water)),s.isOneVisualizationEnabled()&&B.updateAttributesTexture(),s.water.addOrRemoveVisualizationWaves(!0),s.water.updateNormals(),I.clear(I.COLOR_BUFFER_BIT|I.DEPTH_BUFFER_BIT),I.loadIdentity(),I.translate(s.translateX,s.translateY,-s.zoomDistance),I.rotate(-s.angleZ,0,0,1),I.rotate(-s.angleX,1,0,0),I.rotate(-s.angleY,0,1,0),I.translate(0,.5,0),I.enable(I.DEPTH_TEST),$.sphereCenter=s.swimmers[0].body.center,$.sphereRadius=s.swimmers[0].body.radius,$.renderCube(s.water),$.renderWater(s.water,Ne,s.params.visualizations.shadow),s.params.swimmers.showSpheres&&$.renderSpheres(s.water),s.renderVideo(),I.disable(I.DEPTH_TEST),s.water.addOrRemoveVisualizationWaves(!1)}};
//# sourceMappingURL=swimming-H_8gll5h.js.map
