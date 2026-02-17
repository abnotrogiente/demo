var De=Object.defineProperty;var Le=(r,s,d)=>s in r?De(r,s,{enumerable:!0,configurable:!0,writable:!0,value:d}):r[s]=d;var X=(r,s,d)=>Le(r,typeof s!="symbol"?s+"":s,d);import"./modulepreload-polyfill-B5Qt9EMX.js";import{g as Oe}from"./lil-gui.module.min-Vka56b52.js";var p=function(){var r,s={create:function(t){t=t||{};var i=document.createElement("canvas");i.width=800,i.height=600,"alpha"in t||(t.alpha=!1);try{r=i.getContext("webgl",t)}catch{}try{r=r||i.getContext("experimental-webgl",t)}catch{}if(!r)throw new Error("WebGL not supported");return r.HALF_FLOAT_OES=36193,d(),u(),E(),J(),r},keys:{},Matrix:y,Indexer:k,Buffer:H,Mesh:N,HitTest:G,Raytracer:q,Shader:ne,Texture:P,Vector:v};function d(){r.MODELVIEW=ee|1,r.PROJECTION=ee|2;var t=new y,i=new y;r.modelviewMatrix=new y,r.projectionMatrix=new y;var e=[],o=[],n,c;r.matrixMode=function(a){switch(a){case r.MODELVIEW:n="modelviewMatrix",c=e;break;case r.PROJECTION:n="projectionMatrix",c=o;break;default:throw new Error("invalid matrix mode "+a)}},r.loadIdentity=function(){y.identity(r[n])},r.loadMatrix=function(a){for(var l=a.m,m=r[n].m,h=0;h<16;h++)m[h]=l[h]},r.multMatrix=function(a){r.loadMatrix(y.multiply(r[n],a,i))},r.perspective=function(a,l,m,h){r.multMatrix(y.perspective(a,l,m,h,t))},r.frustum=function(a,l,m,h,f,g){r.multMatrix(y.frustum(a,l,m,h,f,g,t))},r.ortho=function(a,l,m,h,f,g){r.multMatrix(y.ortho(a,l,m,h,f,g,t))},r.scale=function(a,l,m){r.multMatrix(y.scale(a,l,m,t))},r.translate=function(a,l,m){r.multMatrix(y.translate(a,l,m,t))},r.rotate=function(a,l,m,h){r.multMatrix(y.rotate(a,l,m,h,t))},r.lookAt=function(a,l,m,h,f,g,T,x,R){r.multMatrix(y.lookAt(a,l,m,h,f,g,T,x,R,t))},r.pushMatrix=function(){c.push(Array.prototype.slice.call(r[n].m))},r.popMatrix=function(){var a=c.pop();r[n].m=B?new Float32Array(a):a},r.project=function(a,l,m,h,f,g){h=h||r.modelviewMatrix,f=f||r.projectionMatrix,g=g||r.getParameter(r.VIEWPORT);var T=f.transformPoint(h.transformPoint(new v(a,l,m)));return new v(g[0]+g[2]*(T.x*.5+.5),g[1]+g[3]*(T.y*.5+.5),T.z*.5+.5)},r.unProject=function(a,l,m,h,f,g){h=h||r.modelviewMatrix,f=f||r.projectionMatrix,g=g||r.getParameter(r.VIEWPORT);var T=new v((a-g[0])/g[2]*2-1,(l-g[1])/g[3]*2-1,m*2-1);return y.inverse(y.multiply(f,h,t),i).transformPoint(T)},r.matrixMode(r.MODELVIEW)}function u(){var t={mesh:new N({coords:!0,colors:!0,triangles:!1}),mode:-1,coord:[0,0,0,0],color:[1,1,1,1],shader:new ne("      uniform float pointSize;      varying vec4 color;      varying vec4 coord;      void main() {        color = gl_Color;        coord = gl_TexCoord;        gl_Position = gl_ModelViewProjectionMatrix * gl_Vertex;        gl_PointSize = pointSize;      }    ","      uniform sampler2D texture;      uniform float pointSize;      uniform bool useTexture;      varying vec4 color;      varying vec4 coord;      void main() {        gl_FragColor = color;        if (useTexture) gl_FragColor *= texture2D(texture, coord.xy);      }    ")};r.pointSize=function(i){t.shader.uniforms({pointSize:i})},r.begin=function(i){if(t.mode!=-1)throw new Error("mismatched gl.begin() and gl.end() calls");t.mode=i,t.mesh.colors=[],t.mesh.coords=[],t.mesh.vertices=[]},r.color=function(i,e,o,n){t.color=arguments.length==1?i.toArray().concat(1):[i,e,o,n||1]},r.texCoord=function(i,e){t.coord=arguments.length==1?i.toArray(2):[i,e]},r.vertex=function(i,e,o){t.mesh.colors.push(t.color),t.mesh.coords.push(t.coord),t.mesh.vertices.push(arguments.length==1?i.toArray():[i,e,o])},r.end=function(){if(t.mode==-1)throw new Error("mismatched gl.begin() and gl.end() calls");t.mesh.compile(),t.shader.uniforms({useTexture:!!r.getParameter(r.TEXTURE_BINDING_2D)}).draw(t.mesh,t.mode),t.mode=-1}}function E(){var t=r,i=0,e=0,o={},n=!1,c=Object.prototype.hasOwnProperty;function a(){for(var x in o)if(c.call(o,x)&&o[x])return!0;return!1}function l(x){var R={};for(var F in x)typeof x[F]=="function"?R[F]=function(W){return function(){W.apply(x,arguments)}}(x[F]):R[F]=x[F];R.original=x,R.x=R.pageX,R.y=R.pageY;for(var z=r.canvas;z;z=z.offsetParent)R.x-=z.offsetLeft,R.y-=z.offsetTop;return n?(R.deltaX=R.x-i,R.deltaY=R.y-e):(R.deltaX=0,R.deltaY=0,n=!0),i=R.x,e=R.y,R.dragging=a(),R.preventDefault=function(){R.original.preventDefault()},R.stopPropagation=function(){R.original.stopPropagation()},R}function m(x){r=t,a()||(_(document,"mousemove",h),_(document,"mouseup",f),I(r.canvas,"mousemove",h),I(r.canvas,"mouseup",f)),o[x.which]=!0,x=l(x),r.onmousedown&&r.onmousedown(x),x.preventDefault()}function h(x){r=t,x=l(x),r.onmousemove&&r.onmousemove(x),x.preventDefault()}function f(x){r=t,o[x.which]=!1,a()||(I(document,"mousemove",h),I(document,"mouseup",f),_(r.canvas,"mousemove",h),_(r.canvas,"mouseup",f)),x=l(x),r.onmouseup&&r.onmouseup(x),x.preventDefault()}function g(){n=!1}function T(){o={},n=!1}_(r.canvas,"mousedown",m),_(r.canvas,"mousemove",h),_(r.canvas,"mouseup",f),_(r.canvas,"mouseover",g),_(r.canvas,"mouseout",g),_(document,"contextmenu",T)}function S(t){var i={8:"BACKSPACE",9:"TAB",13:"ENTER",16:"SHIFT",27:"ESCAPE",32:"SPACE",37:"LEFT",38:"UP",39:"RIGHT",40:"DOWN"};return i[t]||(t>=65&&t<=90?String.fromCharCode(t):null)}function _(t,i,e){t.addEventListener(i,e)}function I(t,i,e){t.removeEventListener(i,e)}_(document,"keydown",function(t){if(!t.altKey&&!t.ctrlKey&&!t.metaKey){var i=S(t.keyCode);i&&(s.keys[i]=!0),s.keys[t.keyCode]=!0}}),_(document,"keyup",function(t){if(!t.altKey&&!t.ctrlKey&&!t.metaKey){var i=S(t.keyCode);i&&(s.keys[i]=!1),s.keys[t.keyCode]=!1}});function J(){(function(t){r.makeCurrent=function(){r=t}})(r),r.animate=function(){var t=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(n){setTimeout(n,16.666666666666668)},i=new Date().getTime(),e=r;function o(){r=e;var n=new Date().getTime();r.onupdate&&r.onupdate((n-i)/1e3),r.ondraw&&r.ondraw(),t(o),i=n}o()},r.fullscreen=function(t){t=t||{};var i=t.paddingTop||0,e=t.paddingLeft||0,o=t.paddingRight||0,n=t.paddingBottom||0;if(!document.body)throw new Error("document.body doesn't exist yet (call gl.fullscreen() from window.onload() or from inside the <body> tag)");document.body.appendChild(r.canvas),document.body.style.overflow="hidden",r.canvas.style.position="absolute",r.canvas.style.left=e+"px",r.canvas.style.top=i+"px";function c(){r.canvas.width=window.innerWidth-e-o,r.canvas.height=window.innerHeight-i-n,r.viewport(0,0,r.canvas.width,r.canvas.height),(t.camera||!("camera"in t))&&(r.matrixMode(r.PROJECTION),r.loadIdentity(),r.perspective(t.fov||45,r.canvas.width/r.canvas.height,t.near||.1,t.far||1e3),r.matrixMode(r.MODELVIEW)),r.ondraw&&r.ondraw()}_(window,"resize",c),c()}}var ee=305397760,B=typeof Float32Array<"u";function y(){var t=Array.prototype.concat.apply([],arguments);t.length||(t=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),this.m=B?new Float32Array(t):t}y.prototype={inverse:function(){return y.inverse(this,new y)},transpose:function(){return y.transpose(this,new y)},multiply:function(t){return y.multiply(this,t,new y)},transformPoint:function(t){var i=this.m;return new v(i[0]*t.x+i[1]*t.y+i[2]*t.z+i[3],i[4]*t.x+i[5]*t.y+i[6]*t.z+i[7],i[8]*t.x+i[9]*t.y+i[10]*t.z+i[11]).divide(i[12]*t.x+i[13]*t.y+i[14]*t.z+i[15])},transformVector:function(t){var i=this.m;return new v(i[0]*t.x+i[1]*t.y+i[2]*t.z,i[4]*t.x+i[5]*t.y+i[6]*t.z,i[8]*t.x+i[9]*t.y+i[10]*t.z)}},y.inverse=function(t,i){i=i||new y;var e=t.m,o=i.m;o[0]=e[5]*e[10]*e[15]-e[5]*e[14]*e[11]-e[6]*e[9]*e[15]+e[6]*e[13]*e[11]+e[7]*e[9]*e[14]-e[7]*e[13]*e[10],o[1]=-e[1]*e[10]*e[15]+e[1]*e[14]*e[11]+e[2]*e[9]*e[15]-e[2]*e[13]*e[11]-e[3]*e[9]*e[14]+e[3]*e[13]*e[10],o[2]=e[1]*e[6]*e[15]-e[1]*e[14]*e[7]-e[2]*e[5]*e[15]+e[2]*e[13]*e[7]+e[3]*e[5]*e[14]-e[3]*e[13]*e[6],o[3]=-e[1]*e[6]*e[11]+e[1]*e[10]*e[7]+e[2]*e[5]*e[11]-e[2]*e[9]*e[7]-e[3]*e[5]*e[10]+e[3]*e[9]*e[6],o[4]=-e[4]*e[10]*e[15]+e[4]*e[14]*e[11]+e[6]*e[8]*e[15]-e[6]*e[12]*e[11]-e[7]*e[8]*e[14]+e[7]*e[12]*e[10],o[5]=e[0]*e[10]*e[15]-e[0]*e[14]*e[11]-e[2]*e[8]*e[15]+e[2]*e[12]*e[11]+e[3]*e[8]*e[14]-e[3]*e[12]*e[10],o[6]=-e[0]*e[6]*e[15]+e[0]*e[14]*e[7]+e[2]*e[4]*e[15]-e[2]*e[12]*e[7]-e[3]*e[4]*e[14]+e[3]*e[12]*e[6],o[7]=e[0]*e[6]*e[11]-e[0]*e[10]*e[7]-e[2]*e[4]*e[11]+e[2]*e[8]*e[7]+e[3]*e[4]*e[10]-e[3]*e[8]*e[6],o[8]=e[4]*e[9]*e[15]-e[4]*e[13]*e[11]-e[5]*e[8]*e[15]+e[5]*e[12]*e[11]+e[7]*e[8]*e[13]-e[7]*e[12]*e[9],o[9]=-e[0]*e[9]*e[15]+e[0]*e[13]*e[11]+e[1]*e[8]*e[15]-e[1]*e[12]*e[11]-e[3]*e[8]*e[13]+e[3]*e[12]*e[9],o[10]=e[0]*e[5]*e[15]-e[0]*e[13]*e[7]-e[1]*e[4]*e[15]+e[1]*e[12]*e[7]+e[3]*e[4]*e[13]-e[3]*e[12]*e[5],o[11]=-e[0]*e[5]*e[11]+e[0]*e[9]*e[7]+e[1]*e[4]*e[11]-e[1]*e[8]*e[7]-e[3]*e[4]*e[9]+e[3]*e[8]*e[5],o[12]=-e[4]*e[9]*e[14]+e[4]*e[13]*e[10]+e[5]*e[8]*e[14]-e[5]*e[12]*e[10]-e[6]*e[8]*e[13]+e[6]*e[12]*e[9],o[13]=e[0]*e[9]*e[14]-e[0]*e[13]*e[10]-e[1]*e[8]*e[14]+e[1]*e[12]*e[10]+e[2]*e[8]*e[13]-e[2]*e[12]*e[9],o[14]=-e[0]*e[5]*e[14]+e[0]*e[13]*e[6]+e[1]*e[4]*e[14]-e[1]*e[12]*e[6]-e[2]*e[4]*e[13]+e[2]*e[12]*e[5],o[15]=e[0]*e[5]*e[10]-e[0]*e[9]*e[6]-e[1]*e[4]*e[10]+e[1]*e[8]*e[6]+e[2]*e[4]*e[9]-e[2]*e[8]*e[5];for(var n=e[0]*o[0]+e[1]*o[4]+e[2]*o[8]+e[3]*o[12],c=0;c<16;c++)o[c]/=n;return i},y.transpose=function(t,i){i=i||new y;var e=t.m,o=i.m;return o[0]=e[0],o[1]=e[4],o[2]=e[8],o[3]=e[12],o[4]=e[1],o[5]=e[5],o[6]=e[9],o[7]=e[13],o[8]=e[2],o[9]=e[6],o[10]=e[10],o[11]=e[14],o[12]=e[3],o[13]=e[7],o[14]=e[11],o[15]=e[15],i},y.multiply=function(t,i,e){e=e||new y;var o=t.m,n=i.m,c=e.m;return c[0]=o[0]*n[0]+o[1]*n[4]+o[2]*n[8]+o[3]*n[12],c[1]=o[0]*n[1]+o[1]*n[5]+o[2]*n[9]+o[3]*n[13],c[2]=o[0]*n[2]+o[1]*n[6]+o[2]*n[10]+o[3]*n[14],c[3]=o[0]*n[3]+o[1]*n[7]+o[2]*n[11]+o[3]*n[15],c[4]=o[4]*n[0]+o[5]*n[4]+o[6]*n[8]+o[7]*n[12],c[5]=o[4]*n[1]+o[5]*n[5]+o[6]*n[9]+o[7]*n[13],c[6]=o[4]*n[2]+o[5]*n[6]+o[6]*n[10]+o[7]*n[14],c[7]=o[4]*n[3]+o[5]*n[7]+o[6]*n[11]+o[7]*n[15],c[8]=o[8]*n[0]+o[9]*n[4]+o[10]*n[8]+o[11]*n[12],c[9]=o[8]*n[1]+o[9]*n[5]+o[10]*n[9]+o[11]*n[13],c[10]=o[8]*n[2]+o[9]*n[6]+o[10]*n[10]+o[11]*n[14],c[11]=o[8]*n[3]+o[9]*n[7]+o[10]*n[11]+o[11]*n[15],c[12]=o[12]*n[0]+o[13]*n[4]+o[14]*n[8]+o[15]*n[12],c[13]=o[12]*n[1]+o[13]*n[5]+o[14]*n[9]+o[15]*n[13],c[14]=o[12]*n[2]+o[13]*n[6]+o[14]*n[10]+o[15]*n[14],c[15]=o[12]*n[3]+o[13]*n[7]+o[14]*n[11]+o[15]*n[15],e},y.identity=function(t){t=t||new y;var i=t.m;return i[0]=i[5]=i[10]=i[15]=1,i[1]=i[2]=i[3]=i[4]=i[6]=i[7]=i[8]=i[9]=i[11]=i[12]=i[13]=i[14]=0,t},y.perspective=function(t,i,e,o,n){var c=Math.tan(t*Math.PI/360)*e,a=c*i;return y.frustum(-a,a,-c,c,e,o,n)},y.frustum=function(t,i,e,o,n,c,a){a=a||new y;var l=a.m;return l[0]=2*n/(i-t),l[1]=0,l[2]=(i+t)/(i-t),l[3]=0,l[4]=0,l[5]=2*n/(o-e),l[6]=(o+e)/(o-e),l[7]=0,l[8]=0,l[9]=0,l[10]=-(c+n)/(c-n),l[11]=-2*c*n/(c-n),l[12]=0,l[13]=0,l[14]=-1,l[15]=0,a},y.ortho=function(t,i,e,o,n,c,a){a=a||new y;var l=a.m;return l[0]=2/(i-t),l[1]=0,l[2]=0,l[3]=-(i+t)/(i-t),l[4]=0,l[5]=2/(o-e),l[6]=0,l[7]=-(o+e)/(o-e),l[8]=0,l[9]=0,l[10]=-2/(c-n),l[11]=-(c+n)/(c-n),l[12]=0,l[13]=0,l[14]=0,l[15]=1,a},y.scale=function(t,i,e,o){o=o||new y;var n=o.m;return n[0]=t,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=i,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=e,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,o},y.translate=function(t,i,e,o){o=o||new y;var n=o.m;return n[0]=1,n[1]=0,n[2]=0,n[3]=t,n[4]=0,n[5]=1,n[6]=0,n[7]=i,n[8]=0,n[9]=0,n[10]=1,n[11]=e,n[12]=0,n[13]=0,n[14]=0,n[15]=1,o},y.rotate=function(t,i,e,o,n){if(!t||!i&&!e&&!o)return y.identity(n);n=n||new y;var c=n.m,a=Math.sqrt(i*i+e*e+o*o);t*=Math.PI/180,i/=a,e/=a,o/=a;var l=Math.cos(t),m=Math.sin(t),h=1-l;return c[0]=i*i*h+l,c[1]=i*e*h-o*m,c[2]=i*o*h+e*m,c[3]=0,c[4]=e*i*h+o*m,c[5]=e*e*h+l,c[6]=e*o*h-i*m,c[7]=0,c[8]=o*i*h-e*m,c[9]=o*e*h+i*m,c[10]=o*o*h+l,c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,n},y.lookAt=function(t,i,e,o,n,c,a,l,m,h){h=h||new y;var f=h.m,g=new v(t,i,e),T=new v(o,n,c),x=new v(a,l,m),R=g.subtract(T).unit(),F=x.cross(R).unit(),z=R.cross(F).unit();return f[0]=F.x,f[1]=F.y,f[2]=F.z,f[3]=-F.dot(g),f[4]=z.x,f[5]=z.y,f[6]=z.z,f[7]=-z.dot(g),f[8]=R.x,f[9]=R.y,f[10]=R.z,f[11]=-R.dot(g),f[12]=0,f[13]=0,f[14]=0,f[15]=1,h};function k(){this.unique=[],this.indices=[],this.map={}}k.prototype={add:function(t){var i=JSON.stringify(t);return i in this.map||(this.map[i]=this.unique.length,this.unique.push(t)),this.map[i]}};function H(t,i){this.buffer=null,this.target=t,this.type=i,this.data=[]}H.prototype={compile:function(t){for(var i=[],e=0,o=1e4;e<this.data.length;e+=o)i=Array.prototype.concat.apply(i,this.data.slice(e,e+o));var n=this.data.length?i.length/this.data.length:0;if(n!=Math.round(n))throw new Error("buffer elements not of consistent size, average size is "+n);this.buffer=this.buffer||r.createBuffer(),this.buffer.length=i.length,this.buffer.spacing=n,r.bindBuffer(this.target,this.buffer),r.bufferData(this.target,new this.type(i),t||r.STATIC_DRAW)}};function N(t){t=t||{},this.vertexBuffers={},this.indexBuffers={},this.addVertexBuffer("vertices","gl_Vertex"),t.coords&&this.addVertexBuffer("coords","gl_TexCoord"),t.normals&&this.addVertexBuffer("normals","gl_Normal"),t.colors&&this.addVertexBuffer("colors","gl_Color"),(!("triangles"in t)||t.triangles)&&this.addIndexBuffer("triangles"),t.lines&&this.addIndexBuffer("lines")}N.prototype={addVertexBuffer:function(t,i){var e=this.vertexBuffers[i]=new H(r.ARRAY_BUFFER,Float32Array);e.name=t,this[t]=[]},addIndexBuffer:function(t){this.indexBuffers[t]=new H(r.ELEMENT_ARRAY_BUFFER,Uint16Array),this[t]=[]},compile:function(){for(var t in this.vertexBuffers){var i=this.vertexBuffers[t];i.data=this[i.name],i.compile()}for(var e in this.indexBuffers){var i=this.indexBuffers[e];i.data=this[e],i.compile()}},transform:function(t){if(this.vertices=this.vertices.map(function(e){return t.transformPoint(v.fromArray(e)).toArray()}),this.normals){var i=t.inverse().transpose();this.normals=this.normals.map(function(e){return i.transformVector(v.fromArray(e)).unit().toArray()})}return this.compile(),this},computeNormals:function(){this.normals||this.addVertexBuffer("normals","gl_Normal");for(var t=0;t<this.vertices.length;t++)this.normals[t]=new v;for(var t=0;t<this.triangles.length;t++){var i=this.triangles[t],e=v.fromArray(this.vertices[i[0]]),o=v.fromArray(this.vertices[i[1]]),n=v.fromArray(this.vertices[i[2]]),c=o.subtract(e).cross(n.subtract(e)).unit();this.normals[i[0]]=this.normals[i[0]].add(c),this.normals[i[1]]=this.normals[i[1]].add(c),this.normals[i[2]]=this.normals[i[2]].add(c)}for(var t=0;t<this.vertices.length;t++)this.normals[t]=this.normals[t].unit().toArray();return this.compile(),this},computeWireframe:function(){for(var t=new k,i=0;i<this.triangles.length;i++)for(var e=this.triangles[i],o=0;o<e.length;o++){var n=e[o],c=e[(o+1)%e.length];t.add([Math.min(n,c),Math.max(n,c)])}return this.lines||this.addIndexBuffer("lines"),this.lines=t.unique,this.compile(),this},getAABB:function(){var t={min:new v(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)};t.max=t.min.negative();for(var i=0;i<this.vertices.length;i++){var e=v.fromArray(this.vertices[i]);t.min=v.min(t.min,e),t.max=v.max(t.max,e)}return t},getBoundingSphere:function(){for(var t=this.getAABB(),i={center:t.min.add(t.max).divide(2),radius:0},e=0;e<this.vertices.length;e++)i.radius=Math.max(i.radius,v.fromArray(this.vertices[e]).subtract(i.center).length());return i}},N.plane=function(t){t=t||{};for(var i=new N(t),e=t.detailX||t.detail||1,o=t.detailY||t.detail||1,n=t.width||2,c=t.height||2,a=0;a<=o;a++)for(var l=a/o,m=0;m<=e;m++){var h=m/e;if(i.vertices.push([(h-.5)*n,(l-.5)*c,0]),i.coords&&i.coords.push([h,l]),i.normals&&i.normals.push([0,0,1]),m<e&&a<o){var f=m+a*(e+1);i.triangles.push([f,f+1,f+e+1]),i.triangles.push([f+e+1,f+1,f+e+2])}}return i.compile(),i};var ie=[[0,4,2,6,-1,0,0],[1,3,5,7,1,0,0],[0,1,4,5,0,-1,0],[2,6,3,7,0,1,0],[0,2,1,3,0,0,-1],[4,5,6,7,0,0,1]];function V(t){return new v((t&1)*2-1,(t&2)-1,(t&4)/2-1)}N.cube=function(t){for(var i=new N(t),e=t&&t.width||2,o=t&&t.height||2,n=t&&t.depth||2,c=0;c<ie.length;c++){for(var a=ie[c],l=c*4,m=0;m<4;m++){var h=a[m];const f=V(h).toArray();f[0]*=e/2,f[1]*=o/2,f[2]*=n/2,i.vertices.push(f),i.coords&&i.coords.push([m&1,(m&2)/2]),i.normals&&i.normals.push(a.slice(4,7))}i.triangles.push([l,l+1,l+2]),i.triangles.push([l+2,l+1,l+3])}return i.compile(),i},N.sphere=function(t){function i(z,W,se){return m?[z,se,W]:[z,W,se]}function e(z){return z+(z-z*z)/2}t=t||{};for(var o=new N(t),n=new k,c=t.detail||6,a=0;a<8;a++)for(var l=V(a),m=l.x*l.y*l.z>0,h=[],f=0;f<=c;f++){for(var g=0;f+g<=c;g++){var T=f/c,x=g/c,R=(c-f-g)/c,F={vertex:new v(e(T),e(x),e(R)).unit().multiply(l).toArray()};o.coords&&(F.coord=l.y>0?[1-T,R]:[R,1-T]),h.push(n.add(F))}if(f>0)for(var g=0;f+g<=c;g++){var T=(f-1)*(c+1)+(f-1-(f-1)*(f-1))/2+g,x=f*(c+1)+(f-f*f)/2+g;o.triangles.push(i(h[T],h[T+1],h[x])),f+g<c&&o.triangles.push(i(h[x],h[T+1],h[x+1]))}}return o.vertices=n.unique.map(function(z){return z.vertex}),o.coords&&(o.coords=n.unique.map(function(z){return z.coord})),o.normals&&(o.normals=o.vertices),o.compile(),o},N.load=function(t,i){i=i||{},"coords"in i||(i.coords=!!t.coords),"normals"in i||(i.normals=!!t.normals),"colors"in i||(i.colors=!!t.colors),"triangles"in i||(i.triangles=!!t.triangles),"lines"in i||(i.lines=!!t.lines);var e=new N(i);return e.vertices=t.vertices,e.coords&&(e.coords=t.coords),e.normals&&(e.normals=t.normals),e.colors&&(e.colors=t.colors),e.triangles&&(e.triangles=t.triangles),e.lines&&(e.lines=t.lines),e.compile(),e};function G(t,i,e){this.t=arguments.length?t:Number.MAX_VALUE,this.hit=i,this.normal=e}G.prototype={mergeWith:function(t){t.t>0&&t.t<this.t&&(this.t=t.t,this.hit=t.hit,this.normal=t.normal)}};function q(){var t=r.getParameter(r.VIEWPORT),i=r.modelviewMatrix.m,e=new v(i[0],i[4],i[8]),o=new v(i[1],i[5],i[9]),n=new v(i[2],i[6],i[10]),c=new v(i[3],i[7],i[11]);this.eye=new v(-c.dot(e),-c.dot(o),-c.dot(n));var a=t[0],l=a+t[2],m=t[1],h=m+t[3];this.ray00=r.unProject(a,m,1).subtract(this.eye),this.ray10=r.unProject(l,m,1).subtract(this.eye),this.ray01=r.unProject(a,h,1).subtract(this.eye),this.ray11=r.unProject(l,h,1).subtract(this.eye),this.viewport=t}q.prototype={getRayForPixel:function(t,i){t=(t-this.viewport[0])/this.viewport[2],i=1-(i-this.viewport[1])/this.viewport[3];var e=v.lerp(this.ray00,this.ray10,t),o=v.lerp(this.ray01,this.ray11,t);return v.lerp(e,o,i).unit()}},q.hitTestBox=function(t,i,e,o){var n=e.subtract(t).divide(i),c=o.subtract(t).divide(i),a=v.min(n,c),l=v.max(n,c),m=a.max(),h=l.min();if(m>0&&m<h){var f=1e-6,g=t.add(i.multiply(m));return e=e.add(f),o=o.subtract(f),new G(m,g,new v((g.x>o.x)-(g.x<e.x),(g.y>o.y)-(g.y<e.y),(g.z>o.z)-(g.z<e.z)))}return null},q.hitTestSphere=function(t,i,e,o){var n=t.subtract(e),c=i.dot(i),a=2*i.dot(n),l=n.dot(n)-o*o,m=a*a-4*c*l;if(m>0){var h=(-a-Math.sqrt(m))/(2*c),f=t.add(i.multiply(h));return new G(h,f,f.subtract(e).divide(o))}return null},q.hitTestTriangle=function(t,i,e,o,n){var c=o.subtract(e),a=n.subtract(e),l=c.cross(a).unit(),m=l.dot(e.subtract(t))/l.dot(i);if(m>0){var h=t.add(i.multiply(m)),f=h.subtract(e),g=a.dot(a),T=a.dot(c),x=a.dot(f),R=c.dot(c),F=c.dot(f),z=g*R-T*T,W=(R*x-T*F)/z,se=(g*F-T*x)/z;if(W>=0&&se>=0&&W+se<=1)return new G(m,h,l)}return null};function K(t,i,e){let o;for(;(o=t.exec(i))!=null;)e(o)}var oe="LIGHTGL";function ne(t,i){function e(g){var T=document.getElementById(g);return T?T.text:g}t=e(t),i=e(i);var o="    uniform mat3 gl_NormalMatrix;    uniform mat4 gl_ModelViewMatrix;    uniform mat4 gl_ProjectionMatrix;    uniform mat4 gl_ModelViewProjectionMatrix;    uniform mat4 gl_ModelViewMatrixInverse;    uniform mat4 gl_ProjectionMatrixInverse;    uniform mat4 gl_ModelViewProjectionMatrixInverse;  ",n=o+"    attribute vec4 gl_Vertex;    attribute vec4 gl_TexCoord;    attribute vec3 gl_Normal;    attribute vec4 gl_Color;    vec4 ftransform() {      return gl_ModelViewProjectionMatrix * gl_Vertex;    }  ",c="    precision highp float;  "+o,a=t+i,l={};K(/\b(gl_[^;]*)\b;/g,o,function(g){var T=g[1];if(a.indexOf(T)!=-1){var x=T.replace(/[a-z_]/g,"");l[x]=oe+T}}),a.indexOf("ftransform")!=-1&&(l.MVPM=oe+"gl_ModelViewProjectionMatrix"),this.usedMatrices=l;function m(g,T){var x={},R=/^((\s*\/\/.*\n|\s*#extension.*\n)+)[^]*$/.exec(T);return T=R?R[1]+g+T.substr(R[1].length):g+T,K(/\bgl_\w+\b/g,g,function(F){F in x||(T=T.replace(new RegExp("\\b"+F+"\\b","g"),oe+F),x[F]=!0)}),T}t=m(n,t),i=m(c,i);function h(g,T){var x=r.createShader(g);if(r.shaderSource(x,T),r.compileShader(x),!r.getShaderParameter(x,r.COMPILE_STATUS))throw new Error("compile error: "+r.getShaderInfoLog(x));return x}if(this.program=r.createProgram(),r.attachShader(this.program,h(r.VERTEX_SHADER,t)),r.attachShader(this.program,h(r.FRAGMENT_SHADER,i)),r.linkProgram(this.program),!r.getProgramParameter(this.program,r.LINK_STATUS))throw new Error("link error: "+r.getProgramInfoLog(this.program));this.attributes={},this.uniformLocations={};var f={};K(/uniform\s+sampler(1D|2D|3D|Cube)\s+(\w+)\s*;/g,t+i,function(g){f[g[2]]=1}),this.isSampler=f}function ve(t){var i=Object.prototype.toString.call(t);return i=="[object Array]"||i=="[object Float32Array]"}function pe(t){var i=Object.prototype.toString.call(t);return i=="[object Number]"||i=="[object Boolean]"}new y,new y,ne.prototype={uniforms:function(t){r.useProgram(this.program);for(var i in t){var e=this.uniformLocations[i]||r.getUniformLocation(this.program,i);if(e){this.uniformLocations[i]=e;var o=t[i];if(o instanceof v?o=[o.x,o.y,o.z]:o instanceof y&&(o=o.m),ve(o))switch(o.length){case 1:r.uniform1fv(e,new Float32Array(o));break;case 2:r.uniform2fv(e,new Float32Array(o));break;case 3:r.uniform3fv(e,new Float32Array(o));break;case 4:r.uniform4fv(e,new Float32Array(o));break;case 9:r.uniformMatrix3fv(e,!1,new Float32Array([o[0],o[3],o[6],o[1],o[4],o[7],o[2],o[5],o[8]]));break;case 16:r.uniformMatrix4fv(e,!1,new Float32Array([o[0],o[4],o[8],o[12],o[1],o[5],o[9],o[13],o[2],o[6],o[10],o[14],o[3],o[7],o[11],o[15]]));break;default:throw new Error(`don't know how to load uniform "`+i+'" of length '+o.length)}else if(pe(o))(this.isSampler[i]?r.uniform1i:r.uniform1f).call(r,e,o);else throw new Error('attempted to set uniform "'+i+'" to invalid value '+o)}}return this},draw:function(t,i){this.drawBuffers(t.vertexBuffers,t.indexBuffers[i==r.LINES?"lines":"triangles"],arguments.length<2?r.TRIANGLES:i)},drawBuffers:function(t,i,e){var o=this.usedMatrices,n=r.modelviewMatrix,c=r.projectionMatrix,a=o.MVMI||o.NM?n.inverse():null,l=o.PMI?c.inverse():null,m=o.MVPM||o.MVPMI?c.multiply(n):null,h={};if(o.MVM&&(h[o.MVM]=n),o.MVMI&&(h[o.MVMI]=a),o.PM&&(h[o.PM]=c),o.PMI&&(h[o.PMI]=l),o.MVPM&&(h[o.MVPM]=m),o.MVPMI&&(h[o.MVPMI]=m.inverse()),o.NM){var f=a.m;h[o.NM]=[f[0],f[4],f[8],f[1],f[5],f[9],f[2],f[6],f[10]]}this.uniforms(h);var g=0;for(var T in t){var x=t[T],R=this.attributes[T]||r.getAttribLocation(this.program,T.replace(/^(gl_.*)$/,oe+"$1"));R==-1||!x.buffer||(this.attributes[T]=R,r.bindBuffer(r.ARRAY_BUFFER,x.buffer),r.enableVertexAttribArray(R),r.vertexAttribPointer(R,x.buffer.spacing,r.FLOAT,!1,0,0),g=x.buffer.length/x.buffer.spacing)}for(var T in this.attributes)T in t||r.disableVertexAttribArray(this.attributes[T]);return g&&(!i||i.buffer)&&(i?(r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,i.buffer),r.drawElements(e,i.buffer.length,r.UNSIGNED_SHORT,0)):r.drawArrays(e,0,g)),this}};function P(t,i,e){e=e||{},this.id=r.createTexture(),this.width=t,this.height=i,this.format=e.format||r.RGBA,this.type=e.type||r.UNSIGNED_BYTE;var o=e.filter||e.magFilter||r.LINEAR,n=e.filter||e.minFilter||r.LINEAR;if(this.type===r.FLOAT){if(!P.canUseFloatingPointTextures())throw new Error("OES_texture_float is required but not supported");if((n!==r.NEAREST||o!==r.NEAREST)&&!P.canUseFloatingPointLinearFiltering())throw new Error("OES_texture_float_linear is required but not supported")}else if(this.type===r.HALF_FLOAT_OES){if(!P.canUseHalfFloatingPointTextures())throw new Error("OES_texture_half_float is required but not supported");if((n!==r.NEAREST||o!==r.NEAREST)&&!P.canUseHalfFloatingPointLinearFiltering())throw new Error("OES_texture_half_float_linear is required but not supported")}r.bindTexture(r.TEXTURE_2D,this.id),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,1),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,o),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,n),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,e.wrap||e.wrapS||r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,e.wrap||e.wrapT||r.CLAMP_TO_EDGE),r.texImage2D(r.TEXTURE_2D,0,this.format,t,i,0,this.format,this.type,null)}var j,Z,ae;P.prototype={bind:function(t){r.activeTexture(r.TEXTURE0+(t||0)),r.bindTexture(r.TEXTURE_2D,this.id)},unbind:function(t){r.activeTexture(r.TEXTURE0+(t||0)),r.bindTexture(r.TEXTURE_2D,null)},canDrawTo:function(){j=j||r.createFramebuffer(),r.bindFramebuffer(r.FRAMEBUFFER,j),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,this.id,0);var t=r.checkFramebufferStatus(r.FRAMEBUFFER)==r.FRAMEBUFFER_COMPLETE;return r.bindFramebuffer(r.FRAMEBUFFER,null),t},drawTo:function(t){var i=r.getParameter(r.VIEWPORT);if(j=j||r.createFramebuffer(),Z=Z||r.createRenderbuffer(),r.bindFramebuffer(r.FRAMEBUFFER,j),r.bindRenderbuffer(r.RENDERBUFFER,Z),(this.width!=Z.width||this.height!=Z.height)&&(Z.width=this.width,Z.height=this.height,r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_COMPONENT16,this.width,this.height)),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,this.id,0),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,Z),r.checkFramebufferStatus(r.FRAMEBUFFER)!=r.FRAMEBUFFER_COMPLETE)throw new Error("Rendering to this texture is not supported (incomplete framebuffer)");r.viewport(0,0,this.width,this.height),t(),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindRenderbuffer(r.RENDERBUFFER,null),r.viewport(i[0],i[1],i[2],i[3])},swapWith:function(t){var i;i=t.id,t.id=this.id,this.id=i,i=t.width,t.width=this.width,this.width=i,i=t.height,t.height=this.height,this.height=i}},P.fromImage=function(t,i){i=i||{};var e=new P(t.width,t.height,i);try{r.texImage2D(r.TEXTURE_2D,0,e.format,e.format,e.type,t)}catch{throw location.protocol=="file:"?new Error('image not loaded for security reasons (serve this page over "http://" instead)'):new Error("image not loaded for security reasons (image must originate from the same domain as this page or use Cross-Origin Resource Sharing)")}return i.minFilter&&i.minFilter!=r.NEAREST&&i.minFilter!=r.LINEAR&&r.generateMipmap(r.TEXTURE_2D),e},P.fromURL=function(t,i){ae=ae||function(){var c=document.createElement("canvas").getContext("2d");c.canvas.width=c.canvas.height=128;for(var a=0;a<c.canvas.height;a+=16)for(var l=0;l<c.canvas.width;l+=16)c.fillStyle=(l^a)&16?"#FFF":"#DDD",c.fillRect(l,a,16,16);return c.canvas}();var e=P.fromImage(ae,i),o=new Image,n=r;return o.onload=function(){n.makeCurrent(),P.fromImage(o,i).swapWith(e)},o.src=t,e},P.canUseFloatingPointTextures=function(){return!!r.getExtension("OES_texture_float")},P.canUseFloatingPointLinearFiltering=function(){return!!r.getExtension("OES_texture_float_linear")},P.canUseHalfFloatingPointTextures=function(){return!!r.getExtension("OES_texture_half_float")},P.canUseHalfFloatingPointLinearFiltering=function(){return!!r.getExtension("OES_texture_half_float_linear")};function v(t,i,e){this.x=t||0,this.y=i||0,this.z=e||0}return v.prototype={negative:function(){return new v(-this.x,-this.y,-this.z)},add:function(t){return t instanceof v?new v(this.x+t.x,this.y+t.y,this.z+t.z):new v(this.x+t,this.y+t,this.z+t)},subtract:function(t){return t instanceof v?new v(this.x-t.x,this.y-t.y,this.z-t.z):new v(this.x-t,this.y-t,this.z-t)},multiply:function(t){return t instanceof v?new v(this.x*t.x,this.y*t.y,this.z*t.z):new v(this.x*t,this.y*t,this.z*t)},divide:function(t){return t instanceof v?new v(this.x/t.x,this.y/t.y,this.z/t.z):new v(this.x/t,this.y/t,this.z/t)},equals:function(t){return this.x==t.x&&this.y==t.y&&this.z==t.z},dot:function(t){return this.x*t.x+this.y*t.y+this.z*t.z},cross:function(t){return new v(this.y*t.z-this.z*t.y,this.z*t.x-this.x*t.z,this.x*t.y-this.y*t.x)},length:function(){return Math.sqrt(this.dot(this))},unit:function(){return this.divide(this.length())},min:function(){return Math.min(Math.min(this.x,this.y),this.z)},max:function(){return Math.max(Math.max(this.x,this.y),this.z)},toAngles:function(){return{theta:Math.atan2(this.z,this.x),phi:Math.asin(this.y/this.length())}},angleTo:function(t){return Math.acos(this.dot(t)/(this.length()*t.length()))},toArray:function(t){return[this.x,this.y,this.z].slice(0,t||3)},clone:function(){return new v(this.x,this.y,this.z)},init:function(t,i,e){return this.x=t,this.y=i,this.z=e,this}},v.negative=function(t,i){return i.x=-t.x,i.y=-t.y,i.z=-t.z,i},v.add=function(t,i,e){return i instanceof v?(e.x=t.x+i.x,e.y=t.y+i.y,e.z=t.z+i.z):(e.x=t.x+i,e.y=t.y+i,e.z=t.z+i),e},v.subtract=function(t,i,e){return i instanceof v?(e.x=t.x-i.x,e.y=t.y-i.y,e.z=t.z-i.z):(e.x=t.x-i,e.y=t.y-i,e.z=t.z-i),e},v.multiply=function(t,i,e){return i instanceof v?(e.x=t.x*i.x,e.y=t.y*i.y,e.z=t.z*i.z):(e.x=t.x*i,e.y=t.y*i,e.z=t.z*i),e},v.divide=function(t,i,e){return i instanceof v?(e.x=t.x/i.x,e.y=t.y/i.y,e.z=t.z/i.z):(e.x=t.x/i,e.y=t.y/i,e.z=t.z/i),e},v.cross=function(t,i,e){return e.x=t.y*i.z-t.z*i.y,e.y=t.z*i.x-t.x*i.z,e.z=t.x*i.y-t.y*i.x,e},v.unit=function(t,i){var e=t.length();return i.x=t.x/e,i.y=t.y/e,i.z=t.z/e,i},v.fromAngles=function(t,i){return new v(Math.cos(t)*Math.cos(i),Math.sin(i),Math.sin(t)*Math.cos(i))},v.randomDirection=function(){return v.fromAngles(Math.random()*Math.PI*2,Math.asin(Math.random()*2-1))},v.min=function(t,i){return new v(Math.min(t.x,i.x),Math.min(t.y,i.y),Math.min(t.z,i.z))},v.max=function(t,i){return new v(Math.max(t.x,i.x),Math.max(t.y,i.y),Math.max(t.z,i.z))},v.lerp=function(t,i,e){return i.subtract(t).multiply(e).add(t)},v.fromArray=function(t){return new v(t[0],t[1],t[2])},v.angleBetween=function(t,i){return t.angleTo(i)},s}();const be=new p.Vector(0,-4,0);class ue{constructor(s,d){this.center=new p.Vector(s.x,s.y,s.z),this.oldCenter=new p.Vector(s.x,s.y,s.z),this.radius=d,this.cinematic=!1,this.velocity=new p.Vector(0,0,0),this.acceleration=new p.Vector(0,0,0),this.mass=4/3*Math.PI*Math.pow(d,3)*1e3,this.invMass=1/this.mass,this.radiusSquared=d*d,this.mesh=p.Mesh.sphere({detail:10})}update(s,d){if(this.cinematic)this.velocity=new p.Vector(0,0,0);else{this.oldCenter=new p.Vector(this.center.x,this.center.y,this.center.z);const u=Math.max(0,Math.min(1,(this.radius-this.center.y)/(2*this.radius))),E=be.multiply(-1.35*this.mass*u),S=this.velocity.unit().multiply(-1e3*this.radiusSquared*u*this.velocity.dot(this.velocity));this.addForce(S),this.addForce(E),this.addForce(be.multiply(this.mass)),this.velocity=this.velocity.add(this.acceleration.multiply(s)),this.acceleration=new p.Vector(0,0,0),this.center=this.center.add(this.velocity.multiply(s)),this.center.y<this.radius-d.y&&(this.center.y=this.radius-1,this.velocity.y=Math.abs(this.velocity.y)*.7)}}addForce(s){this.cinematic?console.warn("Trying to add force to a cinematic sphere."):this.acceleration=this.acceleration.add(s.multiply(this.invMass))}move(s){this.oldCenter=new p.Vector(this.center.x,this.center.y,this.center.z),this.center=new p.Vector(s.x,s.y,s.z),this.cinematic||console.warn("Moving a non cinematic sphere.")}}function ye(r=0,s=1){const d=1-Math.random(),u=Math.random();return Math.sqrt(-2*Math.log(d))*Math.cos(2*Math.PI*u)*s+r}const te=new p.Vector(1e3,0,0),Ne=.5,Be=1,Se=2*Math.PI*Be,M=class M{constructor(s){this.startingPoint=new p.Vector(s.x,s.y,s.z),this.center=new p.Vector(s.x,s.y,s.z),this.force=new p.Vector(0,0,190+ye(0,20)),this.reactionTime=Math.max(.1,ye(.15,.02));const d=.25,u=.15;this.body=new ue(s,d),this.leftArm=new ue(te,u),this.rightArm=new ue(te,u),this.leftFoot=new ue(te,u),this.rightFoot=new ue(te,u),this.body.cinematic=!M.useGravity,this.leftArm.cinematic=!0,this.rightArm.cinematic=!0,this.leftFoot.cinematic=!0,this.rightFoot.cinematic=!0,this.spheres=[this.body,this.leftArm,this.rightArm,this.leftFoot,this.rightFoot],this.divingDistance=0,this.divingTime=1e3}jump(s){this.body.cinematic=!1,this.body.velocity=new p.Vector(0,0,4.5+ye(0,1)),this.body.center=new p.Vector(this.startingPoint.x,1,-s.z/2)}swim(s,d){this.started=s,s?(this.body.cinematic=!1,this.useGravity=!0,this.body.center=new p.Vector(this.startingPoint.x,0,-d.z/2)):(this.body.velocity=new p.Vector(0,0,0),this.body.center=new p.Vector(this.startingPoint.x,0,0))}getArmOffset(s,d){return new p.Vector(0,Math.cos(Se*s+d),Math.sin(Se*s+d)).multiply(Ne)}update(s,d,u){if(M.raceHasStarted||M.swimming){if(!this.started&&M.raceHasStarted)if(console.log("go : "+d),d>this.reactionTime)this.swim(!0,u),this.jump(u);else return;this.body.addForce(this.force);const E=this.getArmOffset(d,0),S=this.getArmOffset(d,Math.PI),_=this.getArmOffset(d*2,0),I=this.getArmOffset(d*2,Math.PI);this.rightArm.move(this.body.center.add(E).add(new p.Vector(.3,0,0))),this.leftArm.move(this.body.center.add(S).add(new p.Vector(-.3,0,0))),this.rightFoot.move(this.body.center.add(new p.Vector(.15,_.y*.5,-1))),this.leftFoot.move(this.body.center.add(new p.Vector(-.15,I.y*.5,-1)))}else this.rightArm.move(te),this.leftArm.move(te),this.rightFoot.move(te),this.leftFoot.move(te);for(let E of this.spheres)E.update(s,u);!this.hasDove&&this.body.center.y<=0&&this.body.oldCenter.y>=0&&(this.divingDistance=this.body.center.z+u.z/2,this.divingTime=d,this.hasDove=!0,console.log("dived : "+this.divingDistance))}};X(M,"useGravity",!1),X(M,"raceHasStarted",!1),X(M,"swimming",!1),X(M,"showFlags",!0),X(M,"numAttributes",5),X(M,"numVecAttributes",Math.ceil(M.numAttributes/4)),X(M,"maxNumSwimmer",10),X(M,"swimmersAttributesTexture",null),X(M,"plane",null),X(M,"attributeShader",null),X(M,"initSwimmersAttributesTexture",s=>{const d=s.NEAREST;M.plane=p.Mesh.plane(),M.swimmersAttributesTexture=new p.Texture(M.maxNumSwimmer,M.numVecAttributes,{type:s.FLOAT,filter:d})}),X(M,"updateAttributesTexture",(s,d)=>{const u=new Float32Array(M.numVecAttributes*4*M.maxNumSwimmer);for(let E=0;E<d.length;E++)u[4*E]=d[E].body.center.x,u[4*E+1]=d[E].body.center.z,u[4*E+2]=d[E].divingDistance,u[4*E+3]=d[E].divingTime,u[M.maxNumSwimmer*4+4*E]=d[E].reactionTime;s.bindTexture(s.TEXTURE_2D,M.swimmersAttributesTexture.id),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.texSubImage2D(s.TEXTURE_2D,0,0,0,M.maxNumSwimmer,M.numVecAttributes,s.RGBA,s.FLOAT,u),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!0)});let b=M;const Ae=`
    uniform float wr;
    #define sqrt_2_PI 2.50662827
    #define PI 3.1415926536
    uniform sampler2D swimmersAttributesTexture;
    const int SWIMMERS_NUM_ATTRIBUTES = 4;
    const vec2 TEXTURE_SIZE = vec2(`+b.maxNumSwimmer+", "+b.numVecAttributes+`);
    uniform float swimmersNumber;
    uniform float time;

    vec2 getAttributePosition(int i) {
        float i_float = float(i);
        vec2 pixel = vec2(i_float, 0.);
        vec4 attributes = texture2D(swimmersAttributesTexture, (pixel + .5) / TEXTURE_SIZE);
        return attributes.rg;
    }

    vec2 getAttributeDiving(int i) {
        float i_float = float(i);
        vec2 pixel = vec2(i_float, 0.);
        vec4 attributes = texture2D(swimmersAttributesTexture, (pixel + .5) / TEXTURE_SIZE);
        return attributes.ba;
    }

    float getAttributeReactionTime(int i ) {
        float i_float = float(i);
        vec2 pixel = vec2(i_float, 1.);
        vec4 attributes = texture2D(swimmersAttributesTexture, (pixel + .5) / TEXTURE_SIZE);
        return attributes.r;
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
`;function Y(r,s,d=null){this.gl=r,this.damping=.02,this.areaConservationEnabled=!0,this.visualizationWavesEnabled=!0,this.sqrt_2_PI=Math.sqrt(2*Math.PI),this.spheres=[];var u=`
    varying vec2 coord;
    uniform vec2 invPoolSizeVertex;
    void main() {
      coord = gl_Vertex.xy * invPoolSizeVertex + 0.5;
      gl_Position = vec4(gl_Vertex.xy * 2. * invPoolSizeVertex, 0., 1.0);
    }
  `;if(this.reset(s,d),!p.Texture.canUseFloatingPointTextures())throw new Error("This demo requires the OES_texture_float extension");this.dropShader=new p.Shader(u,`
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
  `),this.updateShader=new p.Shader(u,`
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
  `),this.normalShader=new p.Shader(u,`
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
  `),this.sphereShader=new p.Shader(u,`
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
  `),this.visualizationWavesShader=new p.Shader(u,`
    uniform sampler2D texture;
    uniform bool add;
    uniform vec3 poolSize;
    varying vec2 coord;

    `+Ae+`

    void main() {
      vec4 info = texture2D(texture, coord);
      float w = getDivingWaves(coord).x + getRecordWave(coord);
      info.r += add ? w : -w;
      gl_FragColor = info;
    }
    `)}Y.prototype.reset=function(r,s=null){this.WR_position=1e5,this.prev_WR_position=0,s!==null?(console.log("resolution.y : "+s.y),this.W=Math.round(s.x),this.H=Math.round(s.y),console.log("Using custom resolution:",this.W,this.H)):(this.W=256,this.H=256),this.plane=p.Mesh.plane({detail:255,width:r.x,height:r.z}),this.delta=new p.Vector(1/this.W,1/this.H);const d=this.gl;this.textureA&&d.deleteTexture(this.textureA.id),this.textureB&&d.deleteTexture(this.textureB.id),this.textureA=new p.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:u}),this.textureB=new p.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:u}),this.areaConservationTexture=new p.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:u}),this.showAreaConservedGrid=!1,this.showProjectionGrid=!1,this.poolSize=r,this.invPoolSize=new p.Vector(1/r.x,1/r.y,1/r.z);var u=p.Texture.canUseFloatingPointLinearFiltering()?this.gl.LINEAR:this.gl.NEAREST;(!this.textureA.canDrawTo()||!this.textureB.canDrawTo())&&p.Texture.canUseHalfFloatingPointTextures()&&(console.log("No draw"),u=p.Texture.canUseHalfFloatingPointLinearFiltering()?this.gl.LINEAR:this.gl.NEAREST,this.textureA=new p.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:u}),this.textureB=new p.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:u}))};Y.prototype.addDrop=function(r,s,d,u){var E=this;this.textureB.drawTo(function(){E.textureA.bind(),E.dropShader.uniforms({invPoolSizeVertex:[E.invPoolSize.x,E.invPoolSize.z],center:[r,s],radius:d,strength:u,poolSize:[E.poolSize.x,E.poolSize.y,E.poolSize.z]}).draw(E.plane)}),this.textureB.swapWith(this.textureA)};Y.prototype.addOrRemoveVisualizationWaves=function(r,s,d){if(this.visualizationWavesEnabled){var u=this;this.textureB.drawTo(function(){u.textureA.bind(),b.swimmersAttributesTexture&&b.swimmersAttributesTexture.bind(1),u.visualizationWavesShader.uniforms({swimmersAttributesTexture:1,invPoolSizeVertex:[u.invPoolSize.x,u.invPoolSize.z],poolSize:[u.poolSize.x,u.poolSize.y,u.poolSize.z],wr:u.WR_position,sqrt_2_PI:u.sqrt_2_PI,add:r,swimmersNumber:s.length,time:d}).draw(u.plane)}),this.textureB.swapWith(this.textureA)}};Y.prototype.addSwimmer=function(r){for(let s of r.spheres)this.addSphere(s)};Y.prototype.addSphere=function(r){this.spheres.push(r)};Y.prototype.updateSpheres=function(r){this.prev_WR_position=this.WR_position,this.WR_position+=r*2.4;for(let d=0;d<this.spheres.length;d++){const u=this.spheres[d];this.moveSphere(u.oldCenter,u.center,u.radius)}};Y.prototype.moveSphere=function(r,s,d){var u=this;this.textureB.drawTo(function(){u.textureA.bind(),u.sphereShader.uniforms({invPoolSizeVertex:[u.invPoolSize.x,u.invPoolSize.z],oldCenter:r,newCenter:s,radius:d,poolSize:[u.poolSize.x,u.poolSize.y,u.poolSize.z]}).draw(u.plane)}),this.textureB.swapWith(this.textureA)};Y.prototype.stepSimulation=function(){var r=this;this.textureB.drawTo(function(){r.textureA.bind(),r.updateShader.uniforms({invPoolSizeVertex:[r.invPoolSize.x,r.invPoolSize.z],delta:[r.delta.x,r.delta.y],wr:r.WR_position,prev_wr:r.prev_WR_position,poolSize:[r.poolSize.x,r.poolSize.y,r.poolSize.z],sqrt_2_PI:r.sqrt_2_PI,damping:r.damping}).draw(r.plane)}),this.textureB.swapWith(this.textureA),this.updateAreaConservation()};Y.prototype.updateNormals=function(){var r=this;this.textureB.drawTo(function(){r.textureA.bind(),r.normalShader.uniforms({invPoolSizeVertex:[r.invPoolSize.x,r.invPoolSize.z],delta:[r.delta.x,r.delta.y]}).draw(r.plane)}),this.textureB.swapWith(this.textureA)};Y.prototype.setAreaConservation=function(r){this.areaConservationEnabled=r};Y.prototype.updateAreaConservation=function(){if(!this.areaConservationEnabled)return;var r,s,d;if(this.textureA.type===this.gl.FLOAT)r=this.gl.FLOAT,s=Float32Array,d="WEBGL_color_buffer_float";else if(this.textureA.type===this.gl.HALF_FLOAT_OES)r=this.gl.HALF_FLOAT_OES,s=Uint16Array,d="EXT_color_buffer_half_float";else{console.warn("Unsupported texture type for reading");return}if(!this.gl.getExtension(d)){console.warn(d+" not available; cannot read pixels");return}this.fb||(this.fb=this.gl.createFramebuffer()),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.fb),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,this.textureA.id,0);const u=this.gl.checkFramebufferStatus(this.gl.FRAMEBUFFER);if(u!==this.gl.FRAMEBUFFER_COMPLETE){console.error("Framebuffer incomplete: "+u+" for texture type "+this.textureA.type),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null);return}this.gl.pixelStorei(this.gl.PACK_ALIGNMENT,1);const E=new s(this.W*this.H*4),S=new Float32Array(this.W*this.H*4);this.gl.readPixels(0,0,this.W,this.H,this.gl.RGBA,r,E);for(let B=0;B<this.W;B++)S[B*4+1]=1;const _=this.poolSize.x/this.W,I=this.poolSize.z/this.H,J=_*_,ee=I*I;if(this.textureA.type===this.gl.FLOAT){for(let B=0;B<this.H;B+=1)for(let y=0;y<this.W;y+=1){const k=(B*this.W+y)*4,H=((this.H-1-B)*this.W+y)*4,N=S[H],ie=S[H+1];if(y+1<this.W){const V=E[k]-E[k+4],G=Math.sqrt(V*V+J);S[H+4]=N+G}if(B+1<this.H){const V=E[k]-E[k+this.W*4],G=Math.sqrt(V*V+ee);S[H-4*this.W+1]=ie+G}}this.gl.bindTexture(this.gl.TEXTURE_2D,this.areaConservationTexture.id),this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT,1),this.gl.texSubImage2D(this.gl.TEXTURE_2D,0,0,0,this.W,this.H,this.gl.RGBA,this.gl.FLOAT,S)}this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.bindTexture(this.gl.TEXTURE_2D,null)};var le=`
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
`;function re(r,s,d,u){this.water=s,this.gl=r,this.tileTexture=p.Texture.fromImage(document.getElementById("tiles"),{minFilter:this.gl.LINEAR_MIPMAP_LINEAR,wrap:this.gl.REPEAT,format:this.gl.RGB}),this.flagTexture=p.Texture.fromImage(document.getElementById("flag"),{minFilter:this.gl.LINEAR_MIPMAP_LINEAR,wrap:this.gl.REPEAT,format:this.gl.RGB}),this.flagSize=u,this.flagCenter=d,this.lightDir=new p.Vector(2,2,-1).unit(),this.causticTex=new p.Texture(1024,1024),this.waterShaders=[];for(var E=0;E<2;E++)this.waterShaders[E]=new p.Shader(`
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

      `+Ae+`
      
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
            vec2 swimmerPos = getAttributePosition(i);
            float swimmer_x = swimmerPos.x;
            float swimmer_z = swimmerPos.y;
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
        
        `+(E?`
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
    `);this.sphereMesh=p.Mesh.sphere({detail:10}),this.sphereShader=new p.Shader(le+`
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
  `),this.reset(),this.cubeShader=new p.Shader(le+`
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
  `),this.sphereCenter=new p.Vector,this.sphereRadius=0;var S=!!this.gl.getExtension("OES_standard_derivatives");this.causticsShader=new p.Shader(le+`
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
  `,(S?`#extension GL_OES_standard_derivatives: enable
`:"")+`
  `+le+`
    varying vec3 oldPos;
    varying vec3 newPos;
    varying vec3 ray;

  void main() {
    `+(S?`
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
  `)}re.prototype.reset=function(){this.cubeMesh=p.Mesh.cube({width:this.water.poolSize.x,height:2,depth:this.water.poolSize.z}),this.cubeMesh.triangles.splice(4,2),this.cubeMesh.compile()};re.prototype.updateCaustics=function(r){};re.prototype.renderWater=function(r,s,d,u){var E=new p.Raytracer;r.textureA.bind(0),this.tileTexture.bind(1),s.bind(2),this.causticTex.bind(3),this.flagTexture.bind(4),r.areaConservationTexture.bind(5),b.swimmersAttributesTexture&&b.swimmersAttributesTexture.bind(6),this.gl.enable(this.gl.CULL_FACE);for(var S=0;S<2;S++)this.gl.cullFace(S?this.gl.BACK:this.gl.FRONT),this.waterShaders[S].uniforms({light:this.lightDir,water:0,tiles:1,sky:2,causticTex:3,flag:4,areaConservationTexture:5,swimmersAttributesTexture:6,areaConservation:r.areaConservationEnabled,flagSize:this.flagSize,flagCenter:[this.flagCenter.x,this.flagCenter.y],poolSize:[r.poolSize.x,r.poolSize.y,r.poolSize.z],poolSizeVertexShader:[r.poolSize.x,r.poolSize.y,r.poolSize.z],eye:E.eye,sphereCenter:this.sphereCenter,sphereRadius:this.sphereRadius,showProjectionGrid:r.showProjectionGrid,showAreaConservedGrid:r.showAreaConservedGrid,wr:r.WR_position,swimmersNumber:d.length,showFlags:b.showFlags,time:u}).draw(r.plane);this.gl.disable(this.gl.CULL_FACE)};re.prototype.renderSpheres=function(r){for(let s of r.spheres)this.renderSphere(r,s)};re.prototype.renderSphere=function(r,s){r.textureA.bind(0),this.causticTex.bind(1),this.sphereShader.uniforms({light:this.lightDir,water:0,causticTex:1,sphereCenter:[s.center.x,s.center.y,s.center.z],sphereRadius:s.radius,poolSize:[r.poolSize.x,r.poolSize.y,r.poolSize.z]}).draw(s.mesh)};re.prototype.renderSphereOld=function(r){r.textureA.bind(0),this.causticTex.bind(1),this.sphereShader.uniforms({light:this.lightDir,water:0,causticTex:1,sphereCenter:this.sphereCenter,sphereRadius:this.sphereRadius,poolSize:[r.poolSize.x,r.poolSize.y,r.poolSize.z]}).draw(this.sphereMesh)};re.prototype.renderCube=function(r){this.gl.enable(this.gl.CULL_FACE),r.textureA.bind(0),this.tileTexture.bind(1),this.causticTex.bind(2),this.cubeShader.uniforms({light:this.lightDir,water:0,tiles:1,causticTex:2,sphereCenter:this.sphereCenter,sphereRadius:this.sphereRadius,poolSize:[r.poolSize.x,r.poolSize.y,r.poolSize.z]}).draw(this.cubeMesh),this.gl.disable(this.gl.CULL_FACE)};function _e(r,s){this.gl=s,this.id=s.createTexture(),s.bindTexture(s.TEXTURE_CUBE_MAP,this.id),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,1),s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAG_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),s.texImage2D(s.TEXTURE_CUBE_MAP_NEGATIVE_X,0,s.RGB,s.RGB,s.UNSIGNED_BYTE,r.xneg),s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X,0,s.RGB,s.RGB,s.UNSIGNED_BYTE,r.xpos),s.texImage2D(s.TEXTURE_CUBE_MAP_NEGATIVE_Y,0,s.RGB,s.RGB,s.UNSIGNED_BYTE,r.yneg),s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_Y,0,s.RGB,s.RGB,s.UNSIGNED_BYTE,r.ypos),s.texImage2D(s.TEXTURE_CUBE_MAP_NEGATIVE_Z,0,s.RGB,s.RGB,s.UNSIGNED_BYTE,r.zneg),s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_Z,0,s.RGB,s.RGB,s.UNSIGNED_BYTE,r.zpos)}_e.prototype.bind=function(r){this.gl.activeTexture(this.gl.TEXTURE0+(r||0)),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,this.id)};_e.prototype.unbind=function(r){this.gl.activeTexture(this.gl.TEXTURE0+(r||0)),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,null)};const Ce=200,Ue=`
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

`;class ke{constructor(s,d){if(this.gl=s,this.copyVideo=!1,this.show=!1,s===null){alert("Unable to initialize WebGL. Your browser or machine may not support it.");return}s.clearColor(0,0,0,1),s.clear(s.COLOR_BUFFER_BIT),this.shader=new p.Shader(`
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

    `+Ue+Ae+`

    void main(void) {
        highp vec4 texelColor = texture2D(uSampler, vTextureCoord);
        gl_FragColor = vec4(texelColor.rgb, 0.5);
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
        // gl_FragColor = vec4(mix(gl_FragColor.rgb, spark, .5), max(0.5, 2.*length(spark)));
        gl_FragColor = vec4(mix(gl_FragColor.rgb, spark, 2.*length(spark)), max(0.5, 2.*length(spark)));
        // gl_FragColor = vec4(gl_FragColor.rgb + spark, max(0.5, 2.*length(spark)));
        // float m = max(gl_FragColor.r, max(gl_FragColor.g, gl_FragColor.b));
        // if (m > 1.) gl_FragColor.rgb /= m;
        // gl_FragColor = vec4(spark, 2.*length(spark));
        // gl_FragColor = vec4(1, 0, 0, 1);
    }
`),this.mesh=p.Mesh.plane({width:2,height:2,coords:!0,normals:!0}),this.mesh.transform(p.Matrix.rotate(90,1,0,0)),this.mesh.transform(p.Matrix.translate(0,.1,0)),this.programInfo=null,this.texture=this.initTexture(),this.video=this.setupVideo(d),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!0)}render(s,d,u){this.show&&(this.copyVideo&&this.updateTexture(),(!this.mesh.vertexBuffers||!this.mesh.vertexBuffers.vertex)&&this.mesh.compile(),this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture),b.swimmersAttributesTexture&&b.swimmersAttributesTexture.bind(1),this.shader.uniforms({uSampler:0,swimmersHelperFunctions:1,iTime:s,poolSize:[u.x,u.y,u.z],iResolution:[this.gl.canvas.width,this.gl.canvas.height],sparksEnabled:d.enabled,sparksGlow:d.glow,sparksGlowOffset:d.glowOffset,sparksStroke:d.stroke,sparksNumber:d.num,sparksLengthFactor:d.lengthFactor,sparksSizeFactor:d.sizeFactor,fov:d.fov}).draw(this.mesh),this.gl.disable(this.gl.BLEND))}initTexture(){const s=this.gl.createTexture();this.gl.bindTexture(this.gl.TEXTURE_2D,s);const d=0,u=this.gl.RGBA,E=1,S=1,_=0,I=this.gl.RGBA,J=this.gl.UNSIGNED_BYTE,ee=new Uint8Array([0,0,255,255]);return this.gl.texImage2D(this.gl.TEXTURE_2D,d,u,E,S,_,I,J,ee),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),s}updateTexture(){const d=this.gl.RGBA,u=this.gl.RGBA,E=this.gl.UNSIGNED_BYTE;this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture),this.gl.texImage2D(this.gl.TEXTURE_2D,0,d,u,E,this.video)}setupVideo(s){const d=document.createElement("video");let u=!1,E=!1;d.playsInline=!0,d.muted=!0,d.loop=!0,d.addEventListener("playing",()=>{u=!0,_()},!0),d.addEventListener("timeupdate",()=>{E=!0,_()},!0),d.src=s,d.play();const S=this,_=()=>{u&&E&&(S.copyVideo=!0)};return d}}function Ve(r){return r.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n/g,"<br>")}function Ge(r){var s=Ve(r);s=="WebGL not supported"&&(s='Your browser does not support WebGL.<br>Please see    <a href="http://www.khronos.org/webgl/wiki/Getting_a_WebGL_Implementation">    Getting a WebGL Implementation</a>.');var d=document.getElementById("loading");d.innerHTML=s,d.style.zIndex=1}window.onerror=Ge;var w=p.create(),A,ze,U;const D=[],Te=10;var ce=-25,ge=-200.5,me=0;let we=0,Ee=0;var fe=4;b.initSwimmersAttributesTexture(w);const Me=17;let de=0,he=0;var $=!1,xe,Re,C=new p.Vector(2,1,2);let L=new p.Vector(256,256),O={numSteps:2,focal:45,sparks:{enabled:!1,glow:5,glowOffset:.5,lengthFactor:1,stroke:.01,num:40,sizeFactor:50,fov:Math.PI/4}};const We=new Oe;function Fe(){document.getElementById("warning").hidden=!(L.x*L.y>3e5&&A&&A.areaConservationEnabled)}function Q(){console.log("reset"),document.getElementById("resolution").innerText=`Resolution: ${L.x} x ${L.y}`,Fe(),xe=new p.Vector(0,-C.z/2+1),A.reset(C,L),U.flagCenter=xe,U.flagSize=Re,U.reset();const r=C.x/Te;let s=-C.x/2+r/2;for(let d of D)d.body.center.x=s,d.startingPoint.x=s,s+=r}window.onload=function(){var r=window.devicePixelRatio||1,s=document.getElementById("help");function d(){var a=innerWidth,l=innerHeight;w.canvas.width=a*r,w.canvas.height=l*r,w.canvas.style.width=a+"px",w.canvas.style.height=l+"px",w.viewport(0,0,w.canvas.width,w.canvas.height),w.matrixMode(w.PROJECTION),w.loadIdentity(),w.perspective(O.focal,w.canvas.width/w.canvas.height,.01,100),w.matrixMode(w.MODELVIEW),c()}document.body.appendChild(w.canvas),w.canvas.oncontextmenu=function(a){a.preventDefault()},w.clearColor(0,0,0,1),xe=new p.Vector(0,-C.z/2+1),Re=.7,A=new Y(w,C);const u=new ke(w,"./video.mp4"),E=document.getElementById("drop-zone");let S=0;document.addEventListener("dragenter",a=>{S++,E.style.display="flex"}),document.addEventListener("dragover",a=>{a.preventDefault(),a.dataTransfer.dropEffect="copy"}),document.addEventListener("dragleave",a=>{S--,S===0&&(E.style.display="none")}),document.addEventListener("drop",a=>{a.preventDefault(),S=0,E.style.display="none";const l=a.dataTransfer.files;if(l.length>0&&(l[0].type.startsWith("video/")||l[0].name.endsWith(".mp4"))){const m=URL.createObjectURL(l[0]);u.video.src=m,u.video.play(),console.log("Loaded:",l[0].name)}});const _=We.addFolder("variables");_.add(C,"x",1,25).name("pool width").onChange(function(a){Q()}).listen(),_.add(C,"z",1,50).name("pool height").onChange(function(a){Q()}).listen(),_.add(C,"y",1,3).name("pool depth").onChange(function(a){Q()}).listen(),_.add(A,"damping",.005,.15).name("water damping").listen(),_.add(A,"areaConservationEnabled","areaConservationEnabled").name("area conservation").listen(),_.add(b,"showFlags").name("show flags").listen(),_.add(O,"focal",28,45).name("focal").listen().onChange(function(a){O.sparks.fov=a*2*Math.PI/360,w.matrixMode(w.PROJECTION),w.loadIdentity(),w.perspective(O.focal,w.canvas.width/w.canvas.height,.01,100),w.matrixMode(w.MODELVIEW),console.log("perspective : "+O.focal)});const I=_.addFolder("Sparks");if(I.add(O.sparks,"enabled").name("sparks enabled"),I.add(O.sparks,"glow",1,30).name("sparks glow factor"),I.add(O.sparks,"lengthFactor",.1,10).name("sparks length factor"),I.add(O.sparks,"glowOffset",.1,3).name("sparks glow offset"),I.add(O.sparks,"stroke",.001,.05).name("sparks stroke"),I.add(O.sparks,"num",10,Ce).step(1).name("sparks number"),I.add(O.sparks,"sizeFactor",10,100).name("size factor"),U=new re(w,A,xe,Re),ze=new _e({xneg:document.getElementById("xneg"),xpos:document.getElementById("xpos"),yneg:document.getElementById("ypos"),ypos:document.getElementById("ypos"),zneg:document.getElementById("zneg"),zpos:document.getElementById("zpos")},w),!A.textureA.canDrawTo()||!A.textureB.canDrawTo())throw new Error("Rendering to floating-point textures is required but not supported");const J=new p.Vector(-.4,-.75,.2),ee=new p.Vector(.4,-.75,.2),B=new b(J);new b(ee);for(let a=0;a<1;a++)D.push(new b(J));const y=B.body.radius;for(let a of D)A.addSwimmer(a);Q();for(var k=0;k<20;k++)A.addDrop(Math.random()*2-1,Math.random()*2-1,.06,k&1?.01:-.01);document.getElementById("loading").innerHTML="",d();var H=window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(a){setTimeout(a,0)},N=new Date().getTime();function ie(){var a=new Date().getTime();$||(n((a-N)/1e3),c()),N=a,H(ie)}H(ie),window.onresize=d;var V,G,q,K=-1,oe=0,ne=1,ve=2;const pe=3;var P,j;function Z(a,l,m){if(P=a,j=l,!m||m.button===0){var h=new p.Raytracer,f=h.getRayForPixel(a*r,l*r),g=h.eye.add(f.multiply(-h.eye.y/f.y));for(let x of D){var T=p.Raytracer.hitTestSphere(h.eye,f,x.body.center,x.body.radius);if(T){K=ne,q=x,x.body.cinematic=!0,V=T.hit,G=h.getRayForPixel(w.canvas.width/2,w.canvas.height/2).negative();return}}Math.abs(g.x)<C.x/2&&Math.abs(g.z)<C.z/2&&(K=oe,ae(a,l))}else m.button===2?K=ve:m.button===1&&(K=pe)}function ae(a,l,m){switch(K){case oe:{var h=new p.Raytracer,f=h.getRayForPixel(a*r,l*r),g=h.eye.add(f.multiply(-h.eye.y/f.y));A.addDrop(g.x/C.x*2,g.z/C.z*2,.06,.03),$&&(A.updateNormals(),U.updateCaustics(A));break}case ne:{var h=new p.Raytracer,f=h.getRayForPixel(a*r,l*r),T=-G.dot(h.eye.subtract(V))/G.dot(f),x=h.eye.add(f.multiply(T));const z=q.body.center.add(x.subtract(V)),W=q.body.radius,se=Math.max(W-C.x/2,Math.min(C.x/2-W,z.x)),Pe=Math.max(W-C.y,Math.min(10,z.y)),Ie=Math.max(W-C.z/2,Math.min(C.z/2-W,z.z));q.body.move(new p.Vector(se,Pe,Ie)),V=x,$&&U.updateCaustics(A);break}case ve:{if(m&&m.shiftKey){me-=a-P,me=Math.max(-89.999,Math.min(89.999,me));break}ge-=a-P,ce-=l-j,ce=Math.max(-89.999,Math.min(89.999,ce));break}case pe:{const R=.001*fe;we+=R*(a-P),Ee-=R*(l-j)}}P=a,j=l,$&&c()}function v(){K=-1,q&&(q.body.cinematic=!b.useGravity)}function t(a){return a===s||a.parentNode&&t(a.parentNode)}function i(a){fe*=1-a*4e-4,fe=Math.max(2,Math.min(1e3,fe)),$&&c()}addEventListener("wheel",function(a){var l=a.deltaY;i(-l)}),document.onmousedown=function(a){t(a.target)||(a.preventDefault(),Z(a.pageX,a.pageY,a))},document.onmousemove=function(a){ae(a.pageX,a.pageY,a)},document.onmouseup=function(){v()},document.ontouchstart=function(a){a.touches.length===1&&!t(a.target)&&(a.preventDefault(),Z(a.touches[0].pageX,a.touches[0].pageY,!1))},document.ontouchmove=function(a){a.touches.length===1&&ae(a.touches[0].pageX,a.touches[0].pageY)},document.ontouchend=function(a){a.touches.length==0&&v()};function e(){b.raceHasStarted=!0;for(let a of D)a.started=!1}function o(){b.raceHasStarted=!1;for(let a of D)a.swim(!1,C)}document.onkeydown=function(a){if(a.which==32)$=!$;else if(a.which==71){for(let l of D)l.body.cinematic=!l.body.cinematic;b.useGravity=!b.useGravity}else if(a.which==76&&$)c();else if(a.which==74)jump();else if(a.which==67)A.setAreaConservation(!A.areaConservationEnabled),Fe(),console.log("Area conservation "+(A.areaConservationEnabled?"enabled.":"disabled."));else if(a.which==80)A.showProjectionGrid=!A.showProjectionGrid,console.log("Projection grid "+(A.showProjectionGrid?"enabled.":"disabled."));else if(a.which==65)A.showAreaConservedGrid=!A.showAreaConservedGrid,console.log("Area conserved grid "+(A.showAreaConservedGrid?"enabled.":"disabled."));else if(a.which==83){if(b.swimming=!b.swimming,b.swimming)for(let l of D)l.swim(!0,C);else o();console.log("Swimming "+(b.swimming?"enabled.":"disabled."))}else if(a.which==86)u.show=!u.show;else if(a.which==79){if(C.x=25,C.y=2,C.z=50,L.x=1024,L.y=2048,A.setAreaConservation(!1),A.damping=.1,D.length!=Te)for(let l=D.length;l<Te;l++){const m=new b(J);D.push(m),A.addSwimmer(m)}de=0,u.copyVideo&&(u.video.currentTime=de),Q(),O.focal=31.75,O.sparks.fov=O.focal*2*Math.PI/360,w.matrixMode(w.PROJECTION),w.loadIdentity(),w.perspective(O.focal,w.canvas.width/w.canvas.height,.01,100),w.matrixMode(w.MODELVIEW),we=-.42,Ee=1.18,fe=52.5,ce=-24,ge=-261.5,me=-4,console.log("Olympic mode enabled.")}else if(a.which==87){if(b.raceHasStarted){b.raceHasStarted=!1,o();return}A.WR_position=0,de=Me,u.copyVideo&&(u.video.currentTime=de),e(),b.useGravity=!0;for(let l of D)l.hasDove=!1}else a.which==72?(document.getElementById("commands").hidden=!document.getElementById("commands").hidden,document.getElementById("h").hidden=!document.getElementById("h").hidden):a.which==40?(L.x>129&&(L.x=Math.round(L.x/2)),Q(),console.log("decreasing x resolution")):a.which==38?(L.x<16384&&(L.x=Math.round(L.x*2)),Q(),console.log("increasing x resolution")):a.which==37?(L.y>129&&(L.y=Math.round(L.y/2)),Q(),console.log("decreasing y resolution")):a.which==39&&(L.y<16384&&(L.y=Math.round(L.y*2)),Q(),console.log("increasing y resolution"))};function n(a,l){if(!(a>1)){if(K==ne)for(let m of D)m.body.velocity=new p.Vector(0,0,0);he=de-Me;for(let m of D)m.update(a,he,C);A.updateSpheres(a);for(let m=0;m<O.numSteps;m++)A.stepSimulation();U.updateCaustics(A),de+=a}}function c(a){p.keys.L&&(U.lightDir=p.Vector.fromAngles((90-ge)*Math.PI/180,-ce*Math.PI/180),$&&U.updateCaustics(A)),b.showFlags&&b.updateAttributesTexture(w,D),A.addOrRemoveVisualizationWaves(!0,D,he),A.updateNormals(),w.clear(w.COLOR_BUFFER_BIT|w.DEPTH_BUFFER_BIT),w.loadIdentity(),w.translate(we,Ee,-fe),w.rotate(-me,0,0,1),w.rotate(-ce,1,0,0),w.rotate(-ge,0,1,0),w.translate(0,.5,0),w.enable(w.DEPTH_TEST),U.sphereCenter=D[0].body.center,U.sphereRadius=y,U.renderCube(A),U.renderWater(A,ze,D,he),U.renderSpheres(A),u.render(he,O.sparks,C),w.disable(w.DEPTH_TEST),A.addOrRemoveVisualizationWaves(!1,D,he)}};
//# sourceMappingURL=swimming-DunZOyqm.js.map
