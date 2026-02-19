var De=Object.defineProperty;var Ne=(r,s,f)=>s in r?De(r,s,{enumerable:!0,configurable:!0,writable:!0,value:f}):r[s]=f;var X=(r,s,f)=>Ne(r,typeof s!="symbol"?s+"":s,f);import"./modulepreload-polyfill-B5Qt9EMX.js";import{g as Le}from"./lil-gui.module.min-Vka56b52.js";var v=function(){var r,s={create:function(t){t=t||{};var i=document.createElement("canvas");i.width=800,i.height=600,"alpha"in t||(t.alpha=!1);try{r=i.getContext("webgl2",t)}catch{}try{r=r||i.getContext("experimental-webgl",t)}catch{}if(!r)throw new Error("WebGL not supported");return r.HALF_FLOAT_OES=36193,f(),h(),y(),J(),r},keys:{},Matrix:_,Indexer:U,Buffer:H,Mesh:O,HitTest:V,Raytracer:q,Shader:ne,Texture:L,Vector:p};function f(){r.MODELVIEW=ee|1,r.PROJECTION=ee|2;var t=new _,i=new _;r.modelviewMatrix=new _,r.projectionMatrix=new _;var e=[],o=[],n,c;r.matrixMode=function(a){switch(a){case r.MODELVIEW:n="modelviewMatrix",c=e;break;case r.PROJECTION:n="projectionMatrix",c=o;break;default:throw new Error("invalid matrix mode "+a)}},r.loadIdentity=function(){_.identity(r[n])},r.loadMatrix=function(a){for(var l=a.m,m=r[n].m,u=0;u<16;u++)m[u]=l[u]},r.multMatrix=function(a){r.loadMatrix(_.multiply(r[n],a,i))},r.perspective=function(a,l,m,u){r.multMatrix(_.perspective(a,l,m,u,t))},r.frustum=function(a,l,m,u,d,g){r.multMatrix(_.frustum(a,l,m,u,d,g,t))},r.ortho=function(a,l,m,u,d,g){r.multMatrix(_.ortho(a,l,m,u,d,g,t))},r.scale=function(a,l,m){r.multMatrix(_.scale(a,l,m,t))},r.translate=function(a,l,m){r.multMatrix(_.translate(a,l,m,t))},r.rotate=function(a,l,m,u){r.multMatrix(_.rotate(a,l,m,u,t))},r.lookAt=function(a,l,m,u,d,g,E,x,T){r.multMatrix(_.lookAt(a,l,m,u,d,g,E,x,T,t))},r.pushMatrix=function(){c.push(Array.prototype.slice.call(r[n].m))},r.popMatrix=function(){var a=c.pop();r[n].m=B?new Float32Array(a):a},r.project=function(a,l,m,u,d,g){u=u||r.modelviewMatrix,d=d||r.projectionMatrix,g=g||r.getParameter(r.VIEWPORT);var E=d.transformPoint(u.transformPoint(new p(a,l,m)));return new p(g[0]+g[2]*(E.x*.5+.5),g[1]+g[3]*(E.y*.5+.5),E.z*.5+.5)},r.unProject=function(a,l,m,u,d,g){u=u||r.modelviewMatrix,d=d||r.projectionMatrix,g=g||r.getParameter(r.VIEWPORT);var E=new p((a-g[0])/g[2]*2-1,(l-g[1])/g[3]*2-1,m*2-1);return _.inverse(_.multiply(d,u,t),i).transformPoint(E)},r.matrixMode(r.MODELVIEW)}function h(){var t={mesh:new O({coords:!0,colors:!0,triangles:!1}),mode:-1,coord:[0,0,0,0],color:[1,1,1,1],shader:new ne("      uniform float pointSize;      out vec4 color;      out vec4 coord;      void main() {        color = gl_Color;        coord = gl_TexCoord;        gl_Position = gl_ModelViewProjectionMatrix * gl_Vertex;        gl_PointSize = pointSize;      }    ","      uniform sampler2D tex;      uniform float pointSize;      uniform bool useTexture;      in vec4 color;      in vec4 coord;      out vec4 fragColor;      void main() {        fragColor = color;        if (useTexture) fragColor *= texture(tex, coord.xy);      }    ")};r.pointSize=function(i){t.shader.uniforms({pointSize:i})},r.begin=function(i){if(t.mode!=-1)throw new Error("mismatched gl.begin() and gl.end() calls");t.mode=i,t.mesh.colors=[],t.mesh.coords=[],t.mesh.vertices=[]},r.color=function(i,e,o,n){t.color=arguments.length==1?i.toArray().concat(1):[i,e,o,n||1]},r.texCoord=function(i,e){t.coord=arguments.length==1?i.toArray(2):[i,e]},r.vertex=function(i,e,o){t.mesh.colors.push(t.color),t.mesh.coords.push(t.coord),t.mesh.vertices.push(arguments.length==1?i.toArray():[i,e,o])},r.end=function(){if(t.mode==-1)throw new Error("mismatched gl.begin() and gl.end() calls");t.mesh.compile(),t.shader.uniforms({useTexture:!!r.getParameter(r.TEXTURE_BINDING_2D)}).draw(t.mesh,t.mode),t.mode=-1}}function y(){var t=r,i=0,e=0,o={},n=!1,c=Object.prototype.hasOwnProperty;function a(){for(var x in o)if(c.call(o,x)&&o[x])return!0;return!1}function l(x){var T={};for(var F in x)typeof x[F]=="function"?T[F]=function(W){return function(){W.apply(x,arguments)}}(x[F]):T[F]=x[F];T.original=x,T.x=T.pageX,T.y=T.pageY;for(var C=r.canvas;C;C=C.offsetParent)T.x-=C.offsetLeft,T.y-=C.offsetTop;return n?(T.deltaX=T.x-i,T.deltaY=T.y-e):(T.deltaX=0,T.deltaY=0,n=!0),i=T.x,e=T.y,T.dragging=a(),T.preventDefault=function(){T.original.preventDefault()},T.stopPropagation=function(){T.original.stopPropagation()},T}function m(x){r=t,a()||(R(document,"mousemove",u),R(document,"mouseup",d),P(r.canvas,"mousemove",u),P(r.canvas,"mouseup",d)),o[x.which]=!0,x=l(x),r.onmousedown&&r.onmousedown(x),x.preventDefault()}function u(x){r=t,x=l(x),r.onmousemove&&r.onmousemove(x),x.preventDefault()}function d(x){r=t,o[x.which]=!1,a()||(P(document,"mousemove",u),P(document,"mouseup",d),R(r.canvas,"mousemove",u),R(r.canvas,"mouseup",d)),x=l(x),r.onmouseup&&r.onmouseup(x),x.preventDefault()}function g(){n=!1}function E(){o={},n=!1}R(r.canvas,"mousedown",m),R(r.canvas,"mousemove",u),R(r.canvas,"mouseup",d),R(r.canvas,"mouseover",g),R(r.canvas,"mouseout",g),R(document,"contextmenu",E)}function S(t){var i={8:"BACKSPACE",9:"TAB",13:"ENTER",16:"SHIFT",27:"ESCAPE",32:"SPACE",37:"LEFT",38:"UP",39:"RIGHT",40:"DOWN"};return i[t]||(t>=65&&t<=90?String.fromCharCode(t):null)}function R(t,i,e){t.addEventListener(i,e)}function P(t,i,e){t.removeEventListener(i,e)}R(document,"keydown",function(t){if(!t.altKey&&!t.ctrlKey&&!t.metaKey){var i=S(t.keyCode);i&&(s.keys[i]=!0),s.keys[t.keyCode]=!0}}),R(document,"keyup",function(t){if(!t.altKey&&!t.ctrlKey&&!t.metaKey){var i=S(t.keyCode);i&&(s.keys[i]=!1),s.keys[t.keyCode]=!1}});function J(){(function(t){r.makeCurrent=function(){r=t}})(r),r.animate=function(){var t=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(n){setTimeout(n,16.666666666666668)},i=new Date().getTime(),e=r;function o(){r=e;var n=new Date().getTime();r.onupdate&&r.onupdate((n-i)/1e3),r.ondraw&&r.ondraw(),t(o),i=n}o()},r.fullscreen=function(t){t=t||{};var i=t.paddingTop||0,e=t.paddingLeft||0,o=t.paddingRight||0,n=t.paddingBottom||0;if(!document.body)throw new Error("document.body doesn't exist yet (call gl.fullscreen() from window.onload() or from inside the <body> tag)");document.body.appendChild(r.canvas),document.body.style.overflow="hidden",r.canvas.style.position="absolute",r.canvas.style.left=e+"px",r.canvas.style.top=i+"px";function c(){r.canvas.width=window.innerWidth-e-o,r.canvas.height=window.innerHeight-i-n,r.viewport(0,0,r.canvas.width,r.canvas.height),(t.camera||!("camera"in t))&&(r.matrixMode(r.PROJECTION),r.loadIdentity(),r.perspective(t.fov||45,r.canvas.width/r.canvas.height,t.near||.1,t.far||1e3),r.matrixMode(r.MODELVIEW)),r.ondraw&&r.ondraw()}R(window,"resize",c),c()}}var ee=305397760,B=typeof Float32Array<"u";function _(){var t=Array.prototype.concat.apply([],arguments);t.length||(t=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),this.m=B?new Float32Array(t):t}_.prototype={inverse:function(){return _.inverse(this,new _)},transpose:function(){return _.transpose(this,new _)},multiply:function(t){return _.multiply(this,t,new _)},transformPoint:function(t){var i=this.m;return new p(i[0]*t.x+i[1]*t.y+i[2]*t.z+i[3],i[4]*t.x+i[5]*t.y+i[6]*t.z+i[7],i[8]*t.x+i[9]*t.y+i[10]*t.z+i[11]).divide(i[12]*t.x+i[13]*t.y+i[14]*t.z+i[15])},transformVector:function(t){var i=this.m;return new p(i[0]*t.x+i[1]*t.y+i[2]*t.z,i[4]*t.x+i[5]*t.y+i[6]*t.z,i[8]*t.x+i[9]*t.y+i[10]*t.z)}},_.inverse=function(t,i){i=i||new _;var e=t.m,o=i.m;o[0]=e[5]*e[10]*e[15]-e[5]*e[14]*e[11]-e[6]*e[9]*e[15]+e[6]*e[13]*e[11]+e[7]*e[9]*e[14]-e[7]*e[13]*e[10],o[1]=-e[1]*e[10]*e[15]+e[1]*e[14]*e[11]+e[2]*e[9]*e[15]-e[2]*e[13]*e[11]-e[3]*e[9]*e[14]+e[3]*e[13]*e[10],o[2]=e[1]*e[6]*e[15]-e[1]*e[14]*e[7]-e[2]*e[5]*e[15]+e[2]*e[13]*e[7]+e[3]*e[5]*e[14]-e[3]*e[13]*e[6],o[3]=-e[1]*e[6]*e[11]+e[1]*e[10]*e[7]+e[2]*e[5]*e[11]-e[2]*e[9]*e[7]-e[3]*e[5]*e[10]+e[3]*e[9]*e[6],o[4]=-e[4]*e[10]*e[15]+e[4]*e[14]*e[11]+e[6]*e[8]*e[15]-e[6]*e[12]*e[11]-e[7]*e[8]*e[14]+e[7]*e[12]*e[10],o[5]=e[0]*e[10]*e[15]-e[0]*e[14]*e[11]-e[2]*e[8]*e[15]+e[2]*e[12]*e[11]+e[3]*e[8]*e[14]-e[3]*e[12]*e[10],o[6]=-e[0]*e[6]*e[15]+e[0]*e[14]*e[7]+e[2]*e[4]*e[15]-e[2]*e[12]*e[7]-e[3]*e[4]*e[14]+e[3]*e[12]*e[6],o[7]=e[0]*e[6]*e[11]-e[0]*e[10]*e[7]-e[2]*e[4]*e[11]+e[2]*e[8]*e[7]+e[3]*e[4]*e[10]-e[3]*e[8]*e[6],o[8]=e[4]*e[9]*e[15]-e[4]*e[13]*e[11]-e[5]*e[8]*e[15]+e[5]*e[12]*e[11]+e[7]*e[8]*e[13]-e[7]*e[12]*e[9],o[9]=-e[0]*e[9]*e[15]+e[0]*e[13]*e[11]+e[1]*e[8]*e[15]-e[1]*e[12]*e[11]-e[3]*e[8]*e[13]+e[3]*e[12]*e[9],o[10]=e[0]*e[5]*e[15]-e[0]*e[13]*e[7]-e[1]*e[4]*e[15]+e[1]*e[12]*e[7]+e[3]*e[4]*e[13]-e[3]*e[12]*e[5],o[11]=-e[0]*e[5]*e[11]+e[0]*e[9]*e[7]+e[1]*e[4]*e[11]-e[1]*e[8]*e[7]-e[3]*e[4]*e[9]+e[3]*e[8]*e[5],o[12]=-e[4]*e[9]*e[14]+e[4]*e[13]*e[10]+e[5]*e[8]*e[14]-e[5]*e[12]*e[10]-e[6]*e[8]*e[13]+e[6]*e[12]*e[9],o[13]=e[0]*e[9]*e[14]-e[0]*e[13]*e[10]-e[1]*e[8]*e[14]+e[1]*e[12]*e[10]+e[2]*e[8]*e[13]-e[2]*e[12]*e[9],o[14]=-e[0]*e[5]*e[14]+e[0]*e[13]*e[6]+e[1]*e[4]*e[14]-e[1]*e[12]*e[6]-e[2]*e[4]*e[13]+e[2]*e[12]*e[5],o[15]=e[0]*e[5]*e[10]-e[0]*e[9]*e[6]-e[1]*e[4]*e[10]+e[1]*e[8]*e[6]+e[2]*e[4]*e[9]-e[2]*e[8]*e[5];for(var n=e[0]*o[0]+e[1]*o[4]+e[2]*o[8]+e[3]*o[12],c=0;c<16;c++)o[c]/=n;return i},_.transpose=function(t,i){i=i||new _;var e=t.m,o=i.m;return o[0]=e[0],o[1]=e[4],o[2]=e[8],o[3]=e[12],o[4]=e[1],o[5]=e[5],o[6]=e[9],o[7]=e[13],o[8]=e[2],o[9]=e[6],o[10]=e[10],o[11]=e[14],o[12]=e[3],o[13]=e[7],o[14]=e[11],o[15]=e[15],i},_.multiply=function(t,i,e){e=e||new _;var o=t.m,n=i.m,c=e.m;return c[0]=o[0]*n[0]+o[1]*n[4]+o[2]*n[8]+o[3]*n[12],c[1]=o[0]*n[1]+o[1]*n[5]+o[2]*n[9]+o[3]*n[13],c[2]=o[0]*n[2]+o[1]*n[6]+o[2]*n[10]+o[3]*n[14],c[3]=o[0]*n[3]+o[1]*n[7]+o[2]*n[11]+o[3]*n[15],c[4]=o[4]*n[0]+o[5]*n[4]+o[6]*n[8]+o[7]*n[12],c[5]=o[4]*n[1]+o[5]*n[5]+o[6]*n[9]+o[7]*n[13],c[6]=o[4]*n[2]+o[5]*n[6]+o[6]*n[10]+o[7]*n[14],c[7]=o[4]*n[3]+o[5]*n[7]+o[6]*n[11]+o[7]*n[15],c[8]=o[8]*n[0]+o[9]*n[4]+o[10]*n[8]+o[11]*n[12],c[9]=o[8]*n[1]+o[9]*n[5]+o[10]*n[9]+o[11]*n[13],c[10]=o[8]*n[2]+o[9]*n[6]+o[10]*n[10]+o[11]*n[14],c[11]=o[8]*n[3]+o[9]*n[7]+o[10]*n[11]+o[11]*n[15],c[12]=o[12]*n[0]+o[13]*n[4]+o[14]*n[8]+o[15]*n[12],c[13]=o[12]*n[1]+o[13]*n[5]+o[14]*n[9]+o[15]*n[13],c[14]=o[12]*n[2]+o[13]*n[6]+o[14]*n[10]+o[15]*n[14],c[15]=o[12]*n[3]+o[13]*n[7]+o[14]*n[11]+o[15]*n[15],e},_.identity=function(t){t=t||new _;var i=t.m;return i[0]=i[5]=i[10]=i[15]=1,i[1]=i[2]=i[3]=i[4]=i[6]=i[7]=i[8]=i[9]=i[11]=i[12]=i[13]=i[14]=0,t},_.perspective=function(t,i,e,o,n){var c=Math.tan(t*Math.PI/360)*e,a=c*i;return _.frustum(-a,a,-c,c,e,o,n)},_.frustum=function(t,i,e,o,n,c,a){a=a||new _;var l=a.m;return l[0]=2*n/(i-t),l[1]=0,l[2]=(i+t)/(i-t),l[3]=0,l[4]=0,l[5]=2*n/(o-e),l[6]=(o+e)/(o-e),l[7]=0,l[8]=0,l[9]=0,l[10]=-(c+n)/(c-n),l[11]=-2*c*n/(c-n),l[12]=0,l[13]=0,l[14]=-1,l[15]=0,a},_.ortho=function(t,i,e,o,n,c,a){a=a||new _;var l=a.m;return l[0]=2/(i-t),l[1]=0,l[2]=0,l[3]=-(i+t)/(i-t),l[4]=0,l[5]=2/(o-e),l[6]=0,l[7]=-(o+e)/(o-e),l[8]=0,l[9]=0,l[10]=-2/(c-n),l[11]=-(c+n)/(c-n),l[12]=0,l[13]=0,l[14]=0,l[15]=1,a},_.scale=function(t,i,e,o){o=o||new _;var n=o.m;return n[0]=t,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=i,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=e,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,o},_.translate=function(t,i,e,o){o=o||new _;var n=o.m;return n[0]=1,n[1]=0,n[2]=0,n[3]=t,n[4]=0,n[5]=1,n[6]=0,n[7]=i,n[8]=0,n[9]=0,n[10]=1,n[11]=e,n[12]=0,n[13]=0,n[14]=0,n[15]=1,o},_.rotate=function(t,i,e,o,n){if(!t||!i&&!e&&!o)return _.identity(n);n=n||new _;var c=n.m,a=Math.sqrt(i*i+e*e+o*o);t*=Math.PI/180,i/=a,e/=a,o/=a;var l=Math.cos(t),m=Math.sin(t),u=1-l;return c[0]=i*i*u+l,c[1]=i*e*u-o*m,c[2]=i*o*u+e*m,c[3]=0,c[4]=e*i*u+o*m,c[5]=e*e*u+l,c[6]=e*o*u-i*m,c[7]=0,c[8]=o*i*u-e*m,c[9]=o*e*u+i*m,c[10]=o*o*u+l,c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,n},_.lookAt=function(t,i,e,o,n,c,a,l,m,u){u=u||new _;var d=u.m,g=new p(t,i,e),E=new p(o,n,c),x=new p(a,l,m),T=g.subtract(E).unit(),F=x.cross(T).unit(),C=T.cross(F).unit();return d[0]=F.x,d[1]=F.y,d[2]=F.z,d[3]=-F.dot(g),d[4]=C.x,d[5]=C.y,d[6]=C.z,d[7]=-C.dot(g),d[8]=T.x,d[9]=T.y,d[10]=T.z,d[11]=-T.dot(g),d[12]=0,d[13]=0,d[14]=0,d[15]=1,u};function U(){this.unique=[],this.indices=[],this.map={}}U.prototype={add:function(t){var i=JSON.stringify(t);return i in this.map||(this.map[i]=this.unique.length,this.unique.push(t)),this.map[i]}};function H(t,i){this.buffer=null,this.target=t,this.type=i,this.data=[]}H.prototype={compile:function(t){for(var i=[],e=0,o=1e4;e<this.data.length;e+=o)i=Array.prototype.concat.apply(i,this.data.slice(e,e+o));var n=this.data.length?i.length/this.data.length:0;if(n!=Math.round(n))throw new Error("buffer elements not of consistent size, average size is "+n);this.buffer=this.buffer||r.createBuffer(),this.buffer.length=i.length,this.buffer.spacing=n,r.bindBuffer(this.target,this.buffer),r.bufferData(this.target,new this.type(i),t||r.STATIC_DRAW)}};function O(t){t=t||{},this.vertexBuffers={},this.indexBuffers={},this.addVertexBuffer("vertices","gl_Vertex"),t.coords&&this.addVertexBuffer("coords","gl_TexCoord"),t.normals&&this.addVertexBuffer("normals","gl_Normal"),t.colors&&this.addVertexBuffer("colors","gl_Color"),(!("triangles"in t)||t.triangles)&&this.addIndexBuffer("triangles"),t.lines&&this.addIndexBuffer("lines")}O.prototype={addVertexBuffer:function(t,i){var e=this.vertexBuffers[i]=new H(r.ARRAY_BUFFER,Float32Array);e.name=t,this[t]=[]},addIndexBuffer:function(t){this.indexBuffers[t]=new H(r.ELEMENT_ARRAY_BUFFER,Uint16Array),this[t]=[]},compile:function(){for(var t in this.vertexBuffers){var i=this.vertexBuffers[t];i.data=this[i.name],i.compile()}for(var e in this.indexBuffers){var i=this.indexBuffers[e];i.data=this[e],i.compile()}},transform:function(t){if(this.vertices=this.vertices.map(function(e){return t.transformPoint(p.fromArray(e)).toArray()}),this.normals){var i=t.inverse().transpose();this.normals=this.normals.map(function(e){return i.transformVector(p.fromArray(e)).unit().toArray()})}return this.compile(),this},computeNormals:function(){this.normals||this.addVertexBuffer("normals","gl_Normal");for(var t=0;t<this.vertices.length;t++)this.normals[t]=new p;for(var t=0;t<this.triangles.length;t++){var i=this.triangles[t],e=p.fromArray(this.vertices[i[0]]),o=p.fromArray(this.vertices[i[1]]),n=p.fromArray(this.vertices[i[2]]),c=o.subtract(e).cross(n.subtract(e)).unit();this.normals[i[0]]=this.normals[i[0]].add(c),this.normals[i[1]]=this.normals[i[1]].add(c),this.normals[i[2]]=this.normals[i[2]].add(c)}for(var t=0;t<this.vertices.length;t++)this.normals[t]=this.normals[t].unit().toArray();return this.compile(),this},computeWireframe:function(){for(var t=new U,i=0;i<this.triangles.length;i++)for(var e=this.triangles[i],o=0;o<e.length;o++){var n=e[o],c=e[(o+1)%e.length];t.add([Math.min(n,c),Math.max(n,c)])}return this.lines||this.addIndexBuffer("lines"),this.lines=t.unique,this.compile(),this},getAABB:function(){var t={min:new p(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)};t.max=t.min.negative();for(var i=0;i<this.vertices.length;i++){var e=p.fromArray(this.vertices[i]);t.min=p.min(t.min,e),t.max=p.max(t.max,e)}return t},getBoundingSphere:function(){for(var t=this.getAABB(),i={center:t.min.add(t.max).divide(2),radius:0},e=0;e<this.vertices.length;e++)i.radius=Math.max(i.radius,p.fromArray(this.vertices[e]).subtract(i.center).length());return i}},O.plane=function(t){t=t||{};for(var i=new O(t),e=t.detailX||t.detail||1,o=t.detailY||t.detail||1,n=t.width||2,c=t.height||2,a=0;a<=o;a++)for(var l=a/o,m=0;m<=e;m++){var u=m/e;if(i.vertices.push([(u-.5)*n,(l-.5)*c,0]),i.coords&&i.coords.push([u,l]),i.normals&&i.normals.push([0,0,1]),m<e&&a<o){var d=m+a*(e+1);i.triangles.push([d,d+1,d+e+1]),i.triangles.push([d+e+1,d+1,d+e+2])}}return i.compile(),i};var ie=[[0,4,2,6,-1,0,0],[1,3,5,7,1,0,0],[0,1,4,5,0,-1,0],[2,6,3,7,0,1,0],[0,2,1,3,0,0,-1],[4,5,6,7,0,0,1]];function G(t){return new p((t&1)*2-1,(t&2)-1,(t&4)/2-1)}O.cube=function(t){for(var i=new O(t),e=t&&t.width||2,o=t&&t.height||2,n=t&&t.depth||2,c=0;c<ie.length;c++){for(var a=ie[c],l=c*4,m=0;m<4;m++){var u=a[m];const d=G(u).toArray();d[0]*=e/2,d[1]*=o/2,d[2]*=n/2,i.vertices.push(d),i.coords&&i.coords.push([m&1,(m&2)/2]),i.normals&&i.normals.push(a.slice(4,7))}i.triangles.push([l,l+1,l+2]),i.triangles.push([l+2,l+1,l+3])}return i.compile(),i},O.sphere=function(t){function i(C,W,se){return m?[C,se,W]:[C,W,se]}function e(C){return C+(C-C*C)/2}t=t||{};for(var o=new O(t),n=new U,c=t.detail||6,a=0;a<8;a++)for(var l=G(a),m=l.x*l.y*l.z>0,u=[],d=0;d<=c;d++){for(var g=0;d+g<=c;g++){var E=d/c,x=g/c,T=(c-d-g)/c,F={vertex:new p(e(E),e(x),e(T)).unit().multiply(l).toArray()};o.coords&&(F.coord=l.y>0?[1-E,T]:[T,1-E]),u.push(n.add(F))}if(d>0)for(var g=0;d+g<=c;g++){var E=(d-1)*(c+1)+(d-1-(d-1)*(d-1))/2+g,x=d*(c+1)+(d-d*d)/2+g;o.triangles.push(i(u[E],u[E+1],u[x])),d+g<c&&o.triangles.push(i(u[x],u[E+1],u[x+1]))}}return o.vertices=n.unique.map(function(C){return C.vertex}),o.coords&&(o.coords=n.unique.map(function(C){return C.coord})),o.normals&&(o.normals=o.vertices),o.compile(),o},O.load=function(t,i){i=i||{},"coords"in i||(i.coords=!!t.coords),"normals"in i||(i.normals=!!t.normals),"colors"in i||(i.colors=!!t.colors),"triangles"in i||(i.triangles=!!t.triangles),"lines"in i||(i.lines=!!t.lines);var e=new O(i);return e.vertices=t.vertices,e.coords&&(e.coords=t.coords),e.normals&&(e.normals=t.normals),e.colors&&(e.colors=t.colors),e.triangles&&(e.triangles=t.triangles),e.lines&&(e.lines=t.lines),e.compile(),e};function V(t,i,e){this.t=arguments.length?t:Number.MAX_VALUE,this.hit=i,this.normal=e}V.prototype={mergeWith:function(t){t.t>0&&t.t<this.t&&(this.t=t.t,this.hit=t.hit,this.normal=t.normal)}};function q(){var t=r.getParameter(r.VIEWPORT),i=r.modelviewMatrix.m,e=new p(i[0],i[4],i[8]),o=new p(i[1],i[5],i[9]),n=new p(i[2],i[6],i[10]),c=new p(i[3],i[7],i[11]);this.eye=new p(-c.dot(e),-c.dot(o),-c.dot(n));var a=t[0],l=a+t[2],m=t[1],u=m+t[3];this.ray00=r.unProject(a,m,1).subtract(this.eye),this.ray10=r.unProject(l,m,1).subtract(this.eye),this.ray01=r.unProject(a,u,1).subtract(this.eye),this.ray11=r.unProject(l,u,1).subtract(this.eye),this.viewport=t}q.prototype={getRayForPixel:function(t,i){t=(t-this.viewport[0])/this.viewport[2],i=1-(i-this.viewport[1])/this.viewport[3];var e=p.lerp(this.ray00,this.ray10,t),o=p.lerp(this.ray01,this.ray11,t);return p.lerp(e,o,i).unit()}},q.hitTestBox=function(t,i,e,o){var n=e.subtract(t).divide(i),c=o.subtract(t).divide(i),a=p.min(n,c),l=p.max(n,c),m=a.max(),u=l.min();if(m>0&&m<u){var d=1e-6,g=t.add(i.multiply(m));return e=e.add(d),o=o.subtract(d),new V(m,g,new p((g.x>o.x)-(g.x<e.x),(g.y>o.y)-(g.y<e.y),(g.z>o.z)-(g.z<e.z)))}return null},q.hitTestSphere=function(t,i,e,o){var n=t.subtract(e),c=i.dot(i),a=2*i.dot(n),l=n.dot(n)-o*o,m=a*a-4*c*l;if(m>0){var u=(-a-Math.sqrt(m))/(2*c),d=t.add(i.multiply(u));return new V(u,d,d.subtract(e).divide(o))}return null},q.hitTestTriangle=function(t,i,e,o,n){var c=o.subtract(e),a=n.subtract(e),l=c.cross(a).unit(),m=l.dot(e.subtract(t))/l.dot(i);if(m>0){var u=t.add(i.multiply(m)),d=u.subtract(e),g=a.dot(a),E=a.dot(c),x=a.dot(d),T=c.dot(c),F=c.dot(d),C=g*T-E*E,W=(T*x-E*F)/C,se=(g*F-E*x)/C;if(W>=0&&se>=0&&W+se<=1)return new V(m,u,l)}return null};function K(t,i,e){let o;for(;(o=t.exec(i))!=null;)e(o)}var oe="LIGHTGL";function ne(t,i){function e(g){var E=document.getElementById(g);return E?E.text:g}t=e(t),i=e(i);var o="    uniform mat3 gl_NormalMatrix;    uniform mat4 gl_ModelViewMatrix;    uniform mat4 gl_ProjectionMatrix;    uniform mat4 gl_ModelViewProjectionMatrix;    uniform mat4 gl_ModelViewMatrixInverse;    uniform mat4 gl_ProjectionMatrixInverse;    uniform mat4 gl_ModelViewProjectionMatrixInverse;  ",n=`#version 300 es
    `+o+"    in vec4 gl_Vertex;    in vec4 gl_TexCoord;    in vec3 gl_Normal;    in vec4 gl_Color;    vec4 ftransform() {      return gl_ModelViewProjectionMatrix * gl_Vertex;    }  ",c=`#version 300 es
    precision highp float;
  `+o,a=t+i,l={};K(/\b(gl_[^;]*)\b;/g,o,function(g){var E=g[1];if(a.indexOf(E)!=-1){var x=E.replace(/[a-z_]/g,"");l[x]=oe+E}}),a.indexOf("ftransform")!=-1&&(l.MVPM=oe+"gl_ModelViewProjectionMatrix"),this.usedMatrices=l;function m(g,E){var x={},T=/^((\s*\/\/.*\n|\s*#extension.*\n)+)[^]*$/.exec(E);return E=T?T[1]+g+E.substr(T[1].length):g+E,K(/\bgl_\w+\b/g,g,function(F){F in x||(E=E.replace(new RegExp("\\b"+F+"\\b","g"),oe+F),x[F]=!0)}),E}t=m(n,t),i=m(c,i);function u(g,E){var x=r.createShader(g);if(r.shaderSource(x,E),r.compileShader(x),!r.getShaderParameter(x,r.COMPILE_STATUS))throw new Error("compile error: "+r.getShaderInfoLog(x));return x}if(this.program=r.createProgram(),r.attachShader(this.program,u(r.VERTEX_SHADER,t)),r.attachShader(this.program,u(r.FRAGMENT_SHADER,i)),r.linkProgram(this.program),!r.getProgramParameter(this.program,r.LINK_STATUS))throw new Error("link error: "+r.getProgramInfoLog(this.program));this.attributes={},this.uniformLocations={};var d={};K(/uniform\s+sampler(1D|2D|3D|Cube)\s+(\w+)\s*;/g,t+i,function(g){d[g[2]]=1}),this.isSampler=d}function pe(t){var i=Object.prototype.toString.call(t);return i=="[object Array]"||i=="[object Float32Array]"}function ve(t){var i=Object.prototype.toString.call(t);return i=="[object Number]"||i=="[object Boolean]"}new _,new _,ne.prototype={uniforms:function(t){r.useProgram(this.program);for(var i in t){var e=this.uniformLocations[i]||r.getUniformLocation(this.program,i);if(e){this.uniformLocations[i]=e;var o=t[i];if(o instanceof p?o=[o.x,o.y,o.z]:o instanceof _&&(o=o.m),pe(o))switch(o.length){case 1:r.uniform1fv(e,new Float32Array(o));break;case 2:r.uniform2fv(e,new Float32Array(o));break;case 3:r.uniform3fv(e,new Float32Array(o));break;case 4:r.uniform4fv(e,new Float32Array(o));break;case 9:r.uniformMatrix3fv(e,!1,new Float32Array([o[0],o[3],o[6],o[1],o[4],o[7],o[2],o[5],o[8]]));break;case 16:r.uniformMatrix4fv(e,!1,new Float32Array([o[0],o[4],o[8],o[12],o[1],o[5],o[9],o[13],o[2],o[6],o[10],o[14],o[3],o[7],o[11],o[15]]));break;default:throw new Error(`don't know how to load uniform "`+i+'" of length '+o.length)}else if(ve(o))(this.isSampler[i]?r.uniform1i:r.uniform1f).call(r,e,o);else throw new Error('attempted to set uniform "'+i+'" to invalid value '+o)}}return this},draw:function(t,i){this.drawBuffers(t.vertexBuffers,t.indexBuffers[i==r.LINES?"lines":"triangles"],arguments.length<2?r.TRIANGLES:i)},drawBuffers:function(t,i,e){var o=this.usedMatrices,n=r.modelviewMatrix,c=r.projectionMatrix,a=o.MVMI||o.NM?n.inverse():null,l=o.PMI?c.inverse():null,m=o.MVPM||o.MVPMI?c.multiply(n):null,u={};if(o.MVM&&(u[o.MVM]=n),o.MVMI&&(u[o.MVMI]=a),o.PM&&(u[o.PM]=c),o.PMI&&(u[o.PMI]=l),o.MVPM&&(u[o.MVPM]=m),o.MVPMI&&(u[o.MVPMI]=m.inverse()),o.NM){var d=a.m;u[o.NM]=[d[0],d[4],d[8],d[1],d[5],d[9],d[2],d[6],d[10]]}this.uniforms(u);var g=0;for(var E in t){var x=t[E],T=this.attributes[E]||r.getAttribLocation(this.program,E.replace(/^(gl_.*)$/,oe+"$1"));T==-1||!x.buffer||(this.attributes[E]=T,r.bindBuffer(r.ARRAY_BUFFER,x.buffer),r.enableVertexAttribArray(T),r.vertexAttribPointer(T,x.buffer.spacing,r.FLOAT,!1,0,0),g=x.buffer.length/x.buffer.spacing)}for(var E in this.attributes)E in t||r.disableVertexAttribArray(this.attributes[E]);return g&&(!i||i.buffer)&&(i?(r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,i.buffer),r.drawElements(e,i.buffer.length,r.UNSIGNED_SHORT,0)):r.drawArrays(e,0,g)),this}};function L(t,i,e){e=e||{},this.width=t,this.height=i,this.id=r.createTexture();let o=e.type||r.UNSIGNED_BYTE,n=e.format||r.RGBA,c=r.RGBA;const a=r.getExtension("EXT_color_buffer_float"),l=r.getExtension("EXT_color_buffer_half_float");o===r.FLOAT?(a?r instanceof WebGL2RenderingContext&&(n=r.RGBA32F):(console.warn("FLOAT textures not renderable, falling back to UNSIGNED_BYTE"),o=r.UNSIGNED_BYTE,n=r.RGBA8),c=r.RGBA):o===r.HALF_FLOAT_OES?(l?r instanceof WebGL2RenderingContext&&(n=r.RGBA16F):(console.warn("HALF_FLOAT textures not renderable, falling back to UNSIGNED_BYTE"),o=r.UNSIGNED_BYTE,n=r.RGBA8),c=r.RGBA):(o=r.UNSIGNED_BYTE,n=r.RGBA8,c=r.RGBA);const m=e.filter||e.magFilter||r.LINEAR,u=e.filter||e.minFilter||r.LINEAR;r.bindTexture(r.TEXTURE_2D,this.id),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,1),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,m),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,u),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,e.wrap||e.wrapS||r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,e.wrap||e.wrapT||r.CLAMP_TO_EDGE),r instanceof WebGL2RenderingContext?r.texImage2D(r.TEXTURE_2D,0,n,t,i,0,c,o,null):r.texImage2D(r.TEXTURE_2D,0,c,t,i,0,c,o,null),r.bindTexture(r.TEXTURE_2D,null),this.format=c,this.type=o,this.internalFormat=n}var j,Z,ae;L.prototype={bind:function(t){r.activeTexture(r.TEXTURE0+(t||0)),r.bindTexture(r.TEXTURE_2D,this.id)},unbind:function(t){r.activeTexture(r.TEXTURE0+(t||0)),r.bindTexture(r.TEXTURE_2D,null)},canDrawTo:function(){j=j||r.createFramebuffer(),r.bindFramebuffer(r.FRAMEBUFFER,j),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,this.id,0);var t=r.checkFramebufferStatus(r.FRAMEBUFFER)==r.FRAMEBUFFER_COMPLETE;return r.bindFramebuffer(r.FRAMEBUFFER,null),t},drawTo:function(t){r.getExtension("EXT_color_buffer_float")||console.warn("EXT_color_buffer_float not available!");var e=r.getParameter(r.VIEWPORT);if(j=j||r.createFramebuffer(),Z=Z||r.createRenderbuffer(),r.bindFramebuffer(r.FRAMEBUFFER,j),r.bindRenderbuffer(r.RENDERBUFFER,Z),(this.width!=Z.width||this.height!=Z.height)&&(Z.width=this.width,Z.height=this.height,r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_COMPONENT16,this.width,this.height)),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,this.id,0),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,Z),r.checkFramebufferStatus(r.FRAMEBUFFER)!=r.FRAMEBUFFER_COMPLETE)throw new Error("Rendering to this texture is not supported (incomplete framebuffer)");r.viewport(0,0,this.width,this.height),t(),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindRenderbuffer(r.RENDERBUFFER,null),r.viewport(e[0],e[1],e[2],e[3])},swapWith:function(t){var i;i=t.id,t.id=this.id,this.id=i,i=t.width,t.width=this.width,this.width=i,i=t.height,t.height=this.height,this.height=i}},L.fromImage=function(t,i){i=i||{};var e=new L(t.width,t.height,i);r.bindTexture(r.TEXTURE_2D,e.id);try{r.texImage2D(r.TEXTURE_2D,0,e.format,e.format,e.type,t)}catch{throw location.protocol=="file:"?new Error('image not loaded for security reasons (serve this page over "http://" instead)'):new Error("image not loaded for security reasons (image must originate from the same domain as this page or use Cross-Origin Resource Sharing)")}return i.minFilter&&i.minFilter!=r.NEAREST&&i.minFilter!=r.LINEAR&&r.generateMipmap(r.TEXTURE_2D),r.bindTexture(r.TEXTURE_2D,null),e},L.fromURL=function(t,i){ae=ae||function(){var c=document.createElement("canvas").getContext("2d");c.canvas.width=c.canvas.height=128;for(var a=0;a<c.canvas.height;a+=16)for(var l=0;l<c.canvas.width;l+=16)c.fillStyle=(l^a)&16?"#FFF":"#DDD",c.fillRect(l,a,16,16);return c.canvas}();var e=L.fromImage(ae,i),o=new Image,n=r;return o.onload=function(){n.makeCurrent(),L.fromImage(o,i).swapWith(e)},o.src=t,e},L.canUseFloatingPointTextures=function(){return!!r.getExtension("OES_texture_float")},L.canUseFloatingPointLinearFiltering=function(){return!!r.getExtension("OES_texture_float_linear")},L.canUseHalfFloatingPointTextures=function(){return!!r.getExtension("OES_texture_half_float")},L.canUseHalfFloatingPointLinearFiltering=function(){return!!r.getExtension("OES_texture_half_float_linear")};function p(t,i,e){this.x=t||0,this.y=i||0,this.z=e||0}return p.prototype={negative:function(){return new p(-this.x,-this.y,-this.z)},add:function(t){return t instanceof p?new p(this.x+t.x,this.y+t.y,this.z+t.z):new p(this.x+t,this.y+t,this.z+t)},subtract:function(t){return t instanceof p?new p(this.x-t.x,this.y-t.y,this.z-t.z):new p(this.x-t,this.y-t,this.z-t)},multiply:function(t){return t instanceof p?new p(this.x*t.x,this.y*t.y,this.z*t.z):new p(this.x*t,this.y*t,this.z*t)},divide:function(t){return t instanceof p?new p(this.x/t.x,this.y/t.y,this.z/t.z):new p(this.x/t,this.y/t,this.z/t)},equals:function(t){return this.x==t.x&&this.y==t.y&&this.z==t.z},dot:function(t){return this.x*t.x+this.y*t.y+this.z*t.z},cross:function(t){return new p(this.y*t.z-this.z*t.y,this.z*t.x-this.x*t.z,this.x*t.y-this.y*t.x)},length:function(){return Math.sqrt(this.dot(this))},unit:function(){return this.divide(this.length())},min:function(){return Math.min(Math.min(this.x,this.y),this.z)},max:function(){return Math.max(Math.max(this.x,this.y),this.z)},toAngles:function(){return{theta:Math.atan2(this.z,this.x),phi:Math.asin(this.y/this.length())}},angleTo:function(t){return Math.acos(this.dot(t)/(this.length()*t.length()))},toArray:function(t){return[this.x,this.y,this.z].slice(0,t||3)},clone:function(){return new p(this.x,this.y,this.z)},init:function(t,i,e){return this.x=t,this.y=i,this.z=e,this}},p.negative=function(t,i){return i.x=-t.x,i.y=-t.y,i.z=-t.z,i},p.add=function(t,i,e){return i instanceof p?(e.x=t.x+i.x,e.y=t.y+i.y,e.z=t.z+i.z):(e.x=t.x+i,e.y=t.y+i,e.z=t.z+i),e},p.subtract=function(t,i,e){return i instanceof p?(e.x=t.x-i.x,e.y=t.y-i.y,e.z=t.z-i.z):(e.x=t.x-i,e.y=t.y-i,e.z=t.z-i),e},p.multiply=function(t,i,e){return i instanceof p?(e.x=t.x*i.x,e.y=t.y*i.y,e.z=t.z*i.z):(e.x=t.x*i,e.y=t.y*i,e.z=t.z*i),e},p.divide=function(t,i,e){return i instanceof p?(e.x=t.x/i.x,e.y=t.y/i.y,e.z=t.z/i.z):(e.x=t.x/i,e.y=t.y/i,e.z=t.z/i),e},p.cross=function(t,i,e){return e.x=t.y*i.z-t.z*i.y,e.y=t.z*i.x-t.x*i.z,e.z=t.x*i.y-t.y*i.x,e},p.unit=function(t,i){var e=t.length();return i.x=t.x/e,i.y=t.y/e,i.z=t.z/e,i},p.fromAngles=function(t,i){return new p(Math.cos(t)*Math.cos(i),Math.sin(i),Math.sin(t)*Math.cos(i))},p.randomDirection=function(){return p.fromAngles(Math.random()*Math.PI*2,Math.asin(Math.random()*2-1))},p.min=function(t,i){return new p(Math.min(t.x,i.x),Math.min(t.y,i.y),Math.min(t.z,i.z))},p.max=function(t,i){return new p(Math.max(t.x,i.x),Math.max(t.y,i.y),Math.max(t.z,i.z))},p.lerp=function(t,i,e){return i.subtract(t).multiply(e).add(t)},p.fromArray=function(t){return new p(t[0],t[1],t[2])},p.angleBetween=function(t,i){return t.angleTo(i)},s}();const be=new v.Vector(0,-4,0);class he{constructor(s,f){this.center=new v.Vector(s.x,s.y,s.z),this.oldCenter=new v.Vector(s.x,s.y,s.z),this.radius=f,this.cinematic=!1,this.velocity=new v.Vector(0,0,0),this.acceleration=new v.Vector(0,0,0),this.mass=4/3*Math.PI*Math.pow(f,3)*1e3,this.invMass=1/this.mass,this.radiusSquared=f*f,this.mesh=v.Mesh.sphere({detail:10})}update(s,f){if(this.cinematic)this.velocity=new v.Vector(0,0,0);else{this.oldCenter=new v.Vector(this.center.x,this.center.y,this.center.z);const h=Math.max(0,Math.min(1,(this.radius-this.center.y)/(2*this.radius))),y=be.multiply(-1.35*this.mass*h),S=this.velocity.unit().multiply(-1e3*this.radiusSquared*h*this.velocity.dot(this.velocity));this.addForce(S),this.addForce(y),this.addForce(be.multiply(this.mass)),this.velocity=this.velocity.add(this.acceleration.multiply(s)),this.acceleration=new v.Vector(0,0,0),this.center=this.center.add(this.velocity.multiply(s)),this.center.y<this.radius-f.y&&(this.center.y=this.radius-1,this.velocity.y=Math.abs(this.velocity.y)*.7)}}addForce(s){this.cinematic?console.warn("Trying to add force to a cinematic sphere."):this.acceleration=this.acceleration.add(s.multiply(this.invMass))}move(s){this.oldCenter=new v.Vector(this.center.x,this.center.y,this.center.z),this.center=new v.Vector(s.x,s.y,s.z),this.cinematic||console.warn("Moving a non cinematic sphere.")}}function _e(r=0,s=1){const f=1-Math.random(),h=Math.random();return Math.sqrt(-2*Math.log(f))*Math.cos(2*Math.PI*h)*s+r}const te=new v.Vector(1e3,0,0),Oe=.5,Be=1,Se=2*Math.PI*Be,z=class z{constructor(s){this.startingPoint=new v.Vector(s.x,s.y,s.z),this.center=new v.Vector(s.x,s.y,s.z),this.force=new v.Vector(0,0,190+_e(0,20)),this.reactionTime=Math.max(.1,_e(.15,.02));const f=.25,h=.15;this.body=new he(s,f),this.leftArm=new he(te,h),this.rightArm=new he(te,h),this.leftFoot=new he(te,h),this.rightFoot=new he(te,h),this.body.cinematic=!z.useGravity,this.leftArm.cinematic=!0,this.rightArm.cinematic=!0,this.leftFoot.cinematic=!0,this.rightFoot.cinematic=!0,this.spheres=[this.body,this.leftArm,this.rightArm,this.leftFoot,this.rightFoot],this.divingDistance=0,this.divingTime=1e3}jump(s){this.body.cinematic=!1,this.body.velocity=new v.Vector(0,0,4.5+_e(0,1)),this.body.center=new v.Vector(this.startingPoint.x,1,-s.z/2)}swim(s,f){this.started=s,s?(this.body.cinematic=!1,this.useGravity=!0,this.body.center=new v.Vector(this.startingPoint.x,0,-f.z/2)):(this.body.velocity=new v.Vector(0,0,0),this.body.center=new v.Vector(this.startingPoint.x,0,0))}getArmOffset(s,f){return new v.Vector(0,Math.cos(Se*s+f),Math.sin(Se*s+f)).multiply(Oe)}update(s,f,h){if(z.raceHasStarted||z.swimming){if(!this.started&&z.raceHasStarted)if(console.log("go : "+f),f>this.reactionTime)this.swim(!0,h),this.jump(h);else return;this.body.addForce(this.force);const y=this.getArmOffset(f,0),S=this.getArmOffset(f,Math.PI),R=this.getArmOffset(f*2,0),P=this.getArmOffset(f*2,Math.PI);this.rightArm.move(this.body.center.add(y).add(new v.Vector(.3,0,0))),this.leftArm.move(this.body.center.add(S).add(new v.Vector(-.3,0,0))),this.rightFoot.move(this.body.center.add(new v.Vector(.15,R.y*.5,-1))),this.leftFoot.move(this.body.center.add(new v.Vector(-.15,P.y*.5,-1)))}else this.rightArm.move(te),this.leftArm.move(te),this.rightFoot.move(te),this.leftFoot.move(te);for(let y of this.spheres)y.update(s,h);!this.hasDove&&this.body.center.y<=0&&this.body.oldCenter.y>=0&&(this.divingDistance=this.body.center.z+h.z/2,this.divingTime=f,this.hasDove=!0,console.log("dived : "+this.divingDistance))}};X(z,"useGravity",!1),X(z,"raceHasStarted",!1),X(z,"swimming",!1),X(z,"showFlags",!0),X(z,"numAttributes",5),X(z,"numVecAttributes",Math.ceil(z.numAttributes/4)),X(z,"maxNumSwimmer",10),X(z,"swimmersAttributesTexture",null),X(z,"plane",null),X(z,"attributeShader",null),X(z,"initSwimmersAttributesTexture",s=>{const f=s.NEAREST;z.plane=v.Mesh.plane(),z.swimmersAttributesTexture=new v.Texture(z.maxNumSwimmer,z.numVecAttributes,{type:s.FLOAT,filter:f})}),X(z,"updateAttributesTexture",(s,f)=>{const h=new Float32Array(z.numVecAttributes*4*z.maxNumSwimmer);for(let y=0;y<f.length;y++)h[4*y]=f[y].body.center.x,h[4*y+1]=f[y].body.center.z,h[4*y+2]=f[y].divingDistance,h[4*y+3]=f[y].divingTime,h[z.maxNumSwimmer*4+4*y]=f[y].reactionTime,h[z.maxNumSwimmer*4+4*y+1]=f[y].body.velocity.z*3.6;s.bindTexture(s.TEXTURE_2D,z.swimmersAttributesTexture.id),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.texSubImage2D(s.TEXTURE_2D,0,0,0,z.maxNumSwimmer,z.numVecAttributes,s.RGBA,s.FLOAT,h),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!0)});let b=z;const Ae=`
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
`;function Y(r,s,f=null){this.gl=r,this.damping=.02,this.areaConservationEnabled=!0,this.visualizationWavesEnabled=!0,this.sqrt_2_PI=Math.sqrt(2*Math.PI),this.spheres=[];var h=`
    out vec2 coord;
    uniform vec2 invPoolSizeVertex;
    void main() {
      coord = gl_Vertex.xy * invPoolSizeVertex + 0.5;
      gl_Position = vec4(gl_Vertex.xy * 2. * invPoolSizeVertex, 0., 1.0);
    }
  `;this.reset(s,f),v.Texture.canUseFloatingPointTextures(),this.dropShader=new v.Shader(h,`
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
  `),this.updateShader=new v.Shader(h,`
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
  `),this.normalShader=new v.Shader(h,`
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
  `),this.sphereShader=new v.Shader(h,`
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
  `),this.visualizationWavesShader=new v.Shader(h,`
    uniform sampler2D tex;
    uniform bool add;
    uniform vec3 poolSize;
    in vec2 coord;
    out vec4 fragColor;

    `+Ae+`

    void main() {
      vec4 info = texture(tex, coord);
      float w = getDivingWaves(coord).x + getRecordWave(coord);
      info.r += add ? w : -w;
      fragColor = info;
    }
    `)}Y.prototype.reset=function(r,s=null){this.WR_position=1e5,this.prev_WR_position=0,s!==null?(console.log("resolution.y : "+s.y),this.W=Math.round(s.x),this.H=Math.round(s.y),console.log("Using custom resolution:",this.W,this.H)):(this.W=256,this.H=256),this.plane=v.Mesh.plane({detail:255,width:r.x,height:r.z}),this.delta=new v.Vector(1/this.W,1/this.H);const f=this.gl;this.textureA&&f.deleteTexture(this.textureA.id),this.textureB&&f.deleteTexture(this.textureB.id),this.textureA=new v.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:h}),this.textureB=new v.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:h}),this.areaConservationTexture=new v.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:h}),this.showAreaConservedGrid=!1,this.showProjectionGrid=!1,this.poolSize=r,this.invPoolSize=new v.Vector(1/r.x,1/r.y,1/r.z);var h=v.Texture.canUseFloatingPointLinearFiltering()?this.gl.LINEAR:this.gl.NEAREST;(!this.textureA.canDrawTo()||!this.textureB.canDrawTo())&&v.Texture.canUseHalfFloatingPointTextures()&&(console.log("No draw"),h=v.Texture.canUseHalfFloatingPointLinearFiltering()?this.gl.LINEAR:this.gl.NEAREST,this.textureA=new v.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:h}),this.textureB=new v.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:h}))};Y.prototype.addDrop=function(r,s,f,h){var y=this;this.textureB.drawTo(function(){y.textureA.bind(),y.dropShader.uniforms({invPoolSizeVertex:[y.invPoolSize.x,y.invPoolSize.z],center:[r,s],radius:f,strength:h,poolSize:[y.poolSize.x,y.poolSize.y,y.poolSize.z]}).draw(y.plane)}),this.textureB.swapWith(this.textureA)};Y.prototype.addOrRemoveVisualizationWaves=function(r,s,f){if(this.visualizationWavesEnabled){var h=this;this.textureB.drawTo(function(){h.textureA.bind(),b.swimmersAttributesTexture&&b.swimmersAttributesTexture.bind(1),h.visualizationWavesShader.uniforms({swimmersAttributesTexture:1,invPoolSizeVertex:[h.invPoolSize.x,h.invPoolSize.z],poolSize:[h.poolSize.x,h.poolSize.y,h.poolSize.z],wr:h.WR_position,sqrt_2_PI:h.sqrt_2_PI,add:r,swimmersNumber:s.length,time:f}).draw(h.plane)}),this.textureB.swapWith(this.textureA)}};Y.prototype.addSwimmer=function(r){for(let s of r.spheres)this.addSphere(s)};Y.prototype.addSphere=function(r){this.spheres.push(r)};Y.prototype.updateSpheres=function(r){this.prev_WR_position=this.WR_position,this.WR_position+=r*2.4;for(let f=0;f<this.spheres.length;f++){const h=this.spheres[f];this.moveSphere(h.oldCenter,h.center,h.radius)}};Y.prototype.moveSphere=function(r,s,f){var h=this;this.textureB.drawTo(function(){h.textureA.bind(),h.sphereShader.uniforms({invPoolSizeVertex:[h.invPoolSize.x,h.invPoolSize.z],oldCenter:r,newCenter:s,radius:f,poolSize:[h.poolSize.x,h.poolSize.y,h.poolSize.z]}).draw(h.plane)}),this.textureB.swapWith(this.textureA)};Y.prototype.stepSimulation=function(){var r=this;this.textureB.drawTo(function(){r.textureA.bind(),r.updateShader.uniforms({invPoolSizeVertex:[r.invPoolSize.x,r.invPoolSize.z],delta:[r.delta.x,r.delta.y],wr:r.WR_position,prev_wr:r.prev_WR_position,poolSize:[r.poolSize.x,r.poolSize.y,r.poolSize.z],sqrt_2_PI:r.sqrt_2_PI,damping:r.damping}).draw(r.plane)}),this.textureB.swapWith(this.textureA),this.updateAreaConservation()};Y.prototype.updateNormals=function(){var r=this;this.textureB.drawTo(function(){r.textureA.bind(),r.normalShader.uniforms({invPoolSizeVertex:[r.invPoolSize.x,r.invPoolSize.z],delta:[r.delta.x,r.delta.y]}).draw(r.plane)}),this.textureB.swapWith(this.textureA)};Y.prototype.setAreaConservation=function(r){this.areaConservationEnabled=r};Y.prototype.updateAreaConservation=function(){if(!this.areaConservationEnabled)return;var r,s,f;if(this.textureA.type===this.gl.FLOAT)r=this.gl.FLOAT,s=Float32Array,f="EXT_color_buffer_float";else if(this.textureA.type===this.gl.HALF_FLOAT_OES)r=this.gl.HALF_FLOAT_OES,s=Uint16Array,f="EXT_color_buffer_half_float";else{console.warn("Unsupported texture type for reading");return}if(!this.gl.getExtension(f)){console.warn(f+" not available; cannot read pixels");return}this.fb||(this.fb=this.gl.createFramebuffer()),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.fb),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,this.textureA.id,0);const h=this.gl.checkFramebufferStatus(this.gl.FRAMEBUFFER);if(h!==this.gl.FRAMEBUFFER_COMPLETE){console.error("Framebuffer incomplete: "+h+" for texture type "+this.textureA.type),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null);return}this.gl.pixelStorei(this.gl.PACK_ALIGNMENT,1);const y=new s(this.W*this.H*4),S=new Float32Array(this.W*this.H*4);this.gl.readPixels(0,0,this.W,this.H,this.gl.RGBA,r,y);for(let B=0;B<this.W;B++)S[B*4+1]=1;const R=this.poolSize.x/this.W,P=this.poolSize.z/this.H,J=R*R,ee=P*P;if(this.textureA.type===this.gl.FLOAT){for(let B=0;B<this.H;B+=1)for(let _=0;_<this.W;_+=1){const U=(B*this.W+_)*4,H=((this.H-1-B)*this.W+_)*4,O=S[H],ie=S[H+1];if(_+1<this.W){const G=y[U]-y[U+4],V=Math.sqrt(G*G+J);S[H+4]=O+V}if(B+1<this.H){const G=y[U]-y[U+this.W*4],V=Math.sqrt(G*G+ee);S[H-4*this.W+1]=ie+V}}this.gl.bindTexture(this.gl.TEXTURE_2D,this.areaConservationTexture.id),this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT,1),this.gl.texSubImage2D(this.gl.TEXTURE_2D,0,0,0,this.W,this.H,this.gl.RGBA,this.gl.FLOAT,S)}this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.bindTexture(this.gl.TEXTURE_2D,null)};const ke=`
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
`;var le=`
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
`;function re(r,s,f,h){this.water=s,this.gl=r,this.tileTexture=v.Texture.fromImage(document.getElementById("tiles"),{minFilter:this.gl.LINEAR_MIPMAP_LINEAR,wrap:this.gl.REPEAT,format:this.gl.RGB}),this.flagTexture=v.Texture.fromImage(document.getElementById("flag"),{minFilter:this.gl.LINEAR_MIPMAP_LINEAR,wrap:this.gl.REPEAT,format:this.gl.RGBA}),this.lettersTexture=v.Texture.fromImage(document.getElementById("letters"),{minFilter:this.gl.LINEAR,magFilter:this.gl.LINEAR,wrap:this.gl.REPEAT,format:this.gl.RGBA}),this.flagSize=h,this.flagCenter=f,this.lightDir=new v.Vector(2,2,-1).unit(),this.causticTex=new v.Texture(1024,1024),this.waterShaders=[];for(var y=0;y<2;y++)this.waterShaders[y]=new v.Shader(`
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
      uniform samplerCube sky;
      uniform bool showProjectionGrid;
      uniform bool showAreaConservedGrid;
      uniform sampler2D flag;
      
      // Color declarations
      #define RED     vec3( 1,.3,.4)
      #define GREEN   vec3(.2, 1,.4)
      #define BLUE    vec3(.2,.8, 1)
      #define RAINBOW abs(cos(uv.x + vec3(5,6,1)))
      
      
      `+Ae+ke+`
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
            if (abs(posFlag.x) <= flagSize / 2. && abs(posFlag.y) <= flagSize / 2.) {
              vec3 flagColor = texture(flag, flagCoord).xyz;
              color = flagColor;              
            }
            vec3 letterColor = GREEN/.4 * printFrame(vec2(1. - flagCoord.y - 1.5, 1. - flagCoord.x) / 15., getAttributeSpeed(i), 2);
            if (max(letterColor.r, max(letterColor.g, letterColor.b)) > .3) color = letterColor; 
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
        
        `+(y?`
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
  `),this.sphereCenter=new v.Vector,this.sphereRadius=0;var S=!!this.gl.getExtension("OES_standard_derivatives");this.causticsShader=new v.Shader(le+`
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
  `,(S?`#extension GL_OES_standard_derivatives: enable
`:"")+`
  `+le+`
    in vec3 oldPos;
    in vec3 newPos;
    in vec3 ray;
    out vec4 fragColor;

  void main() {
    `+(S?`
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
  `)}re.prototype.reset=function(){this.cubeMesh=v.Mesh.cube({width:this.water.poolSize.x,height:2,depth:this.water.poolSize.z}),this.cubeMesh.triangles.splice(4,2),this.cubeMesh.compile()};re.prototype.updateCaustics=function(r){};re.prototype.renderWater=function(r,s,f,h){var y=new v.Raytracer;r.textureA.bind(0),this.tileTexture.bind(1),s.bind(2),this.causticTex.bind(3),this.flagTexture.bind(4),this.lettersTexture.bind(7),r.areaConservationTexture.bind(5),b.swimmersAttributesTexture&&b.swimmersAttributesTexture.bind(6),this.gl.enable(this.gl.CULL_FACE);for(var S=0;S<2;S++)this.gl.cullFace(S?this.gl.BACK:this.gl.FRONT),this.waterShaders[S].uniforms({light:this.lightDir,water:0,tiles:1,sky:2,causticTex:3,flag:4,areaConservationTexture:5,swimmersAttributesTexture:6,iChannel0:7,areaConservation:r.areaConservationEnabled,flagSize:this.flagSize,flagCenter:[this.flagCenter.x,this.flagCenter.y],poolSize:[r.poolSize.x,r.poolSize.y,r.poolSize.z],poolSizeVertexShader:[r.poolSize.x,r.poolSize.y,r.poolSize.z],eye:y.eye,sphereCenter:this.sphereCenter,sphereRadius:this.sphereRadius,showProjectionGrid:r.showProjectionGrid,showAreaConservedGrid:r.showAreaConservedGrid,wr:r.WR_position,swimmersNumber:f.length,showFlags:b.showFlags,time:h}).draw(r.plane);this.gl.disable(this.gl.CULL_FACE)};re.prototype.renderSpheres=function(r){for(let s of r.spheres)this.renderSphere(r,s)};re.prototype.renderSphere=function(r,s){r.textureA.bind(0),this.causticTex.bind(1),this.sphereShader.uniforms({light:this.lightDir,water:0,causticTex:1,sphereCenter:[s.center.x,s.center.y,s.center.z],sphereRadius:s.radius,poolSize:[r.poolSize.x,r.poolSize.y,r.poolSize.z]}).draw(s.mesh)};re.prototype.renderSphereOld=function(r){r.textureA.bind(0),this.causticTex.bind(1),this.sphereShader.uniforms({light:this.lightDir,water:0,causticTex:1,sphereCenter:this.sphereCenter,sphereRadius:this.sphereRadius,poolSize:[r.poolSize.x,r.poolSize.y,r.poolSize.z]}).draw(this.sphereMesh)};re.prototype.renderCube=function(r){this.gl.enable(this.gl.CULL_FACE),r.textureA.bind(0),this.tileTexture.bind(1),this.causticTex.bind(2),this.cubeShader.uniforms({light:this.lightDir,water:0,tiles:1,causticTex:2,sphereCenter:this.sphereCenter,sphereRadius:this.sphereRadius,poolSize:[r.poolSize.x,r.poolSize.y,r.poolSize.z]}).draw(this.cubeMesh),this.gl.disable(this.gl.CULL_FACE)};function Re(r,s){this.gl=s,this.id=s.createTexture(),s.bindTexture(s.TEXTURE_CUBE_MAP,this.id),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,1),s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAG_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),s.texImage2D(s.TEXTURE_CUBE_MAP_NEGATIVE_X,0,s.RGB,s.RGB,s.UNSIGNED_BYTE,r.xneg),s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X,0,s.RGB,s.RGB,s.UNSIGNED_BYTE,r.xpos),s.texImage2D(s.TEXTURE_CUBE_MAP_NEGATIVE_Y,0,s.RGB,s.RGB,s.UNSIGNED_BYTE,r.yneg),s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_Y,0,s.RGB,s.RGB,s.UNSIGNED_BYTE,r.ypos),s.texImage2D(s.TEXTURE_CUBE_MAP_NEGATIVE_Z,0,s.RGB,s.RGB,s.UNSIGNED_BYTE,r.zneg),s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_Z,0,s.RGB,s.RGB,s.UNSIGNED_BYTE,r.zpos)}Re.prototype.bind=function(r){this.gl.activeTexture(this.gl.TEXTURE0+(r||0)),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,this.id)};Re.prototype.unbind=function(r){this.gl.activeTexture(this.gl.TEXTURE0+(r||0)),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,null)};const Me=200,Ue=`
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

`;class Ge{constructor(s,f){if(this.gl=s,this.copyVideo=!1,this.show=!1,s===null){alert("Unable to initialize WebGL. Your browser or machine may not support it.");return}s.clearColor(0,0,0,1),s.clear(s.COLOR_BUFFER_BIT),this.shader=new v.Shader(`
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

    `+Ue+Ae+`

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
`),this.mesh=v.Mesh.plane({width:2,height:2,coords:!0,normals:!0}),this.mesh.transform(v.Matrix.rotate(90,1,0,0)),this.mesh.transform(v.Matrix.translate(0,.1,0)),this.programInfo=null,this.texture=this.initTexture(),this.video=this.setupVideo(f),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!0)}render(s,f,h){this.show&&(this.copyVideo&&this.updateTexture(),(!this.mesh.vertexBuffers||!this.mesh.vertexBuffers.vertex)&&this.mesh.compile(),this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture),b.swimmersAttributesTexture&&b.swimmersAttributesTexture.bind(1),this.shader.uniforms({uSampler:0,swimmersHelperFunctions:1,iTime:s,poolSize:[h.x,h.y,h.z],iResolution:[this.gl.canvas.width,this.gl.canvas.height],sparksEnabled:f.enabled,sparksGlow:f.glow,sparksGlowOffset:f.glowOffset,sparksStroke:f.stroke,sparksNumber:f.num,sparksLengthFactor:f.lengthFactor,sparksSizeFactor:f.sizeFactor,fov:f.fov}).draw(this.mesh),this.gl.disable(this.gl.BLEND))}initTexture(){const s=this.gl.createTexture();this.gl.bindTexture(this.gl.TEXTURE_2D,s);const f=0,h=this.gl.RGBA,y=1,S=1,R=0,P=this.gl.RGBA,J=this.gl.UNSIGNED_BYTE,ee=new Uint8Array([0,0,255,255]);return this.gl.texImage2D(this.gl.TEXTURE_2D,f,h,y,S,R,P,J,ee),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),s}updateTexture(){const f=this.gl.RGBA,h=this.gl.RGBA,y=this.gl.UNSIGNED_BYTE;this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture),this.gl.texImage2D(this.gl.TEXTURE_2D,0,f,h,y,this.video)}setupVideo(s){const f=document.createElement("video");let h=!1,y=!1;f.playsInline=!0,f.muted=!0,f.loop=!0,f.addEventListener("playing",()=>{h=!0,R()},!0),f.addEventListener("timeupdate",()=>{y=!0,R()},!0),f.src=s,f.play();const S=this,R=()=>{h&&y&&(S.copyVideo=!0)};return f}}function Ve(r){return r.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n/g,"<br>")}function We(r){var s=Ve(r);s=="WebGL not supported"&&(s='Your browser does not support WebGL.<br>Please see    <a href="http://www.khronos.org/webgl/wiki/Getting_a_WebGL_Implementation">    Getting a WebGL Implementation</a>.');var f=document.getElementById("loading");f.innerHTML=s,f.style.zIndex=1}window.onerror=We;var w=v.create(),A,ze,k;const I=[],Ee=10;var ce=-25,ge=-200.5,me=0;let ye=0,we=0;var fe=4;b.initSwimmersAttributesTexture(w);const Ce=17;let de=0,ue=0;var Q=!1,xe,Te,M=new v.Vector(2,1,2);let D=new v.Vector(256,256),N={numSteps:2,focal:45,sparks:{enabled:!1,glow:5,glowOffset:.5,lengthFactor:1,stroke:.01,num:40,sizeFactor:50,fov:Math.PI/4}};const Xe=new Le;function Fe(){document.getElementById("warning").hidden=!(D.x*D.y>3e5&&A&&A.areaConservationEnabled)}function $(){console.log("reset"),document.getElementById("resolution").innerText=`Resolution: ${D.x} x ${D.y}`,Fe(),xe=new v.Vector(0,-M.z/2+1),A.reset(M,D),k.flagCenter=xe,k.flagSize=Te,k.reset();const r=M.x/Ee;let s=-M.x/2+r/2;for(let f of I)f.body.center.x=s,f.startingPoint.x=s,s+=r}window.onload=function(){var r=window.devicePixelRatio||1,s=document.getElementById("help");function f(){var a=innerWidth,l=innerHeight;w.canvas.width=a*r,w.canvas.height=l*r,w.canvas.style.width=a+"px",w.canvas.style.height=l+"px",w.viewport(0,0,w.canvas.width,w.canvas.height),w.matrixMode(w.PROJECTION),w.loadIdentity(),w.perspective(N.focal,w.canvas.width/w.canvas.height,.01,100),w.matrixMode(w.MODELVIEW),c()}document.body.appendChild(w.canvas),w.canvas.oncontextmenu=function(a){a.preventDefault()},w.clearColor(0,0,0,1),xe=new v.Vector(0,-M.z/2+1),Te=.7,A=new Y(w,M);const h=new Ge(w,"./video.mp4"),y=document.getElementById("drop-zone");let S=0;document.addEventListener("dragenter",a=>{S++,y.style.display="flex"}),document.addEventListener("dragover",a=>{a.preventDefault(),a.dataTransfer.dropEffect="copy"}),document.addEventListener("dragleave",a=>{S--,S===0&&(y.style.display="none")}),document.addEventListener("drop",a=>{a.preventDefault(),S=0,y.style.display="none";const l=a.dataTransfer.files;if(l.length>0&&(l[0].type.startsWith("video/")||l[0].name.endsWith(".mp4"))){const m=URL.createObjectURL(l[0]);h.video.src=m,h.video.play(),console.log("Loaded:",l[0].name)}});const R=Xe.addFolder("variables");R.add(M,"x",1,25).name("pool width").onChange(function(a){$()}).listen(),R.add(M,"z",1,50).name("pool height").onChange(function(a){$()}).listen(),R.add(M,"y",1,3).name("pool depth").onChange(function(a){$()}).listen(),R.add(A,"damping",.005,.15).name("water damping").listen(),R.add(A,"areaConservationEnabled","areaConservationEnabled").name("area conservation").listen(),R.add(b,"showFlags").name("show flags").listen(),R.add(N,"focal",28,45).name("focal").listen().onChange(function(a){N.sparks.fov=a*2*Math.PI/360,w.matrixMode(w.PROJECTION),w.loadIdentity(),w.perspective(N.focal,w.canvas.width/w.canvas.height,.01,100),w.matrixMode(w.MODELVIEW),console.log("perspective : "+N.focal)});const P=R.addFolder("Sparks");if(P.add(N.sparks,"enabled").name("sparks enabled"),P.add(N.sparks,"glow",1,30).name("sparks glow factor"),P.add(N.sparks,"lengthFactor",.1,10).name("sparks length factor"),P.add(N.sparks,"glowOffset",.1,3).name("sparks glow offset"),P.add(N.sparks,"stroke",.001,.05).name("sparks stroke"),P.add(N.sparks,"num",10,Me).step(1).name("sparks number"),P.add(N.sparks,"sizeFactor",10,100).name("size factor"),k=new re(w,A,xe,Te),ze=new Re({xneg:document.getElementById("xneg"),xpos:document.getElementById("xpos"),yneg:document.getElementById("ypos"),ypos:document.getElementById("ypos"),zneg:document.getElementById("zneg"),zpos:document.getElementById("zpos")},w),!A.textureA.canDrawTo()||!A.textureB.canDrawTo())throw new Error("Rendering to floating-point textures is required but not supported");const J=new v.Vector(-.4,-.75,.2),ee=new v.Vector(.4,-.75,.2),B=new b(J);new b(ee);for(let a=0;a<1;a++)I.push(new b(J));const _=B.body.radius;for(let a of I)A.addSwimmer(a);$();for(var U=0;U<20;U++)A.addDrop(Math.random()*2-1,Math.random()*2-1,.06,U&1?.01:-.01);document.getElementById("loading").innerHTML="",f();var H=window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(a){setTimeout(a,0)},O=new Date().getTime();function ie(){var a=new Date().getTime();Q||(n((a-O)/1e3),c()),O=a,H(ie)}H(ie),window.onresize=f;var G,V,q,K=-1,oe=0,ne=1,pe=2;const ve=3;var L,j;function Z(a,l,m){if(L=a,j=l,!m||m.button===0){var u=new v.Raytracer,d=u.getRayForPixel(a*r,l*r),g=u.eye.add(d.multiply(-u.eye.y/d.y));for(let x of I){var E=v.Raytracer.hitTestSphere(u.eye,d,x.body.center,x.body.radius);if(E){K=ne,q=x,x.body.cinematic=!0,G=E.hit,V=u.getRayForPixel(w.canvas.width/2,w.canvas.height/2).negative();return}}Math.abs(g.x)<M.x/2&&Math.abs(g.z)<M.z/2&&(K=oe,ae(a,l))}else m.button===2?K=pe:m.button===1&&(K=ve)}function ae(a,l,m){switch(K){case oe:{var u=new v.Raytracer,d=u.getRayForPixel(a*r,l*r),g=u.eye.add(d.multiply(-u.eye.y/d.y));A.addDrop(g.x/M.x*2,g.z/M.z*2,.06,.03),Q&&(A.updateNormals(),k.updateCaustics(A));break}case ne:{var u=new v.Raytracer,d=u.getRayForPixel(a*r,l*r),E=-V.dot(u.eye.subtract(G))/V.dot(d),x=u.eye.add(d.multiply(E));const C=q.body.center.add(x.subtract(G)),W=q.body.radius,se=Math.max(W-M.x/2,Math.min(M.x/2-W,C.x)),Pe=Math.max(W-M.y,Math.min(10,C.y)),Ie=Math.max(W-M.z/2,Math.min(M.z/2-W,C.z));q.body.move(new v.Vector(se,Pe,Ie)),G=x,Q&&k.updateCaustics(A);break}case pe:{if(m&&m.shiftKey){me-=a-L,me=Math.max(-89.999,Math.min(89.999,me));break}ge-=a-L,ce-=l-j,ce=Math.max(-89.999,Math.min(89.999,ce));break}case ve:{const T=.001*fe;ye+=T*(a-L),we-=T*(l-j)}}L=a,j=l,Q&&c()}function p(){K=-1,q&&(q.body.cinematic=!b.useGravity)}function t(a){return a===s||a.parentNode&&t(a.parentNode)}function i(a){fe*=1-a*4e-4,fe=Math.max(2,Math.min(1e3,fe)),Q&&c()}addEventListener("wheel",function(a){var l=a.deltaY;i(-l)}),document.onmousedown=function(a){t(a.target)||(a.preventDefault(),Z(a.pageX,a.pageY,a))},document.onmousemove=function(a){ae(a.pageX,a.pageY,a)},document.onmouseup=function(){p()},document.ontouchstart=function(a){a.touches.length===1&&!t(a.target)&&(a.preventDefault(),Z(a.touches[0].pageX,a.touches[0].pageY,!1))},document.ontouchmove=function(a){a.touches.length===1&&ae(a.touches[0].pageX,a.touches[0].pageY)},document.ontouchend=function(a){a.touches.length==0&&p()};function e(){b.raceHasStarted=!0;for(let a of I)a.started=!1}function o(){b.raceHasStarted=!1;for(let a of I)a.swim(!1,M)}document.onkeydown=function(a){if(a.which==32)Q=!Q;else if(a.which==71){for(let l of I)l.body.cinematic=!l.body.cinematic;b.useGravity=!b.useGravity}else if(a.which==76&&Q)c();else if(a.which==74)jump();else if(a.which==67)A.setAreaConservation(!A.areaConservationEnabled),Fe(),console.log("Area conservation "+(A.areaConservationEnabled?"enabled.":"disabled."));else if(a.which==80)A.showProjectionGrid=!A.showProjectionGrid,console.log("Projection grid "+(A.showProjectionGrid?"enabled.":"disabled."));else if(a.which==65)A.showAreaConservedGrid=!A.showAreaConservedGrid,console.log("Area conserved grid "+(A.showAreaConservedGrid?"enabled.":"disabled."));else if(a.which==83){if(b.swimming=!b.swimming,b.swimming)for(let l of I)l.swim(!0,M);else o();console.log("Swimming "+(b.swimming?"enabled.":"disabled."))}else if(a.which==86)h.show=!h.show;else if(a.which==79){if(M.x=25,M.y=2,M.z=50,D.x=1024,D.y=2048,A.setAreaConservation(!1),A.damping=.1,I.length!=Ee)for(let l=I.length;l<Ee;l++){const m=new b(J);I.push(m),A.addSwimmer(m)}de=0,h.copyVideo&&(h.video.currentTime=de),$(),N.focal=31.75,N.sparks.fov=N.focal*2*Math.PI/360,w.matrixMode(w.PROJECTION),w.loadIdentity(),w.perspective(N.focal,w.canvas.width/w.canvas.height,.01,100),w.matrixMode(w.MODELVIEW),ye=-.42,we=1.18,fe=52.5,ce=-24,ge=-261.5,me=-4,console.log("Olympic mode enabled.")}else if(a.which==87){if(b.raceHasStarted){b.raceHasStarted=!1,o();return}A.WR_position=0,de=Ce,h.copyVideo&&(h.video.currentTime=de),e(),b.useGravity=!0;for(let l of I)l.hasDove=!1}else a.which==72?(document.getElementById("commands").hidden=!document.getElementById("commands").hidden,document.getElementById("h").hidden=!document.getElementById("h").hidden):a.which==40?(D.x>129&&(D.x=Math.round(D.x/2)),$(),console.log("decreasing x resolution")):a.which==38?(D.x<16384&&(D.x=Math.round(D.x*2)),$(),console.log("increasing x resolution")):a.which==37?(D.y>129&&(D.y=Math.round(D.y/2)),$(),console.log("decreasing y resolution")):a.which==39&&(D.y<16384&&(D.y=Math.round(D.y*2)),$(),console.log("increasing y resolution"))};function n(a,l){if(!(a>1)){if(K==ne)for(let m of I)m.body.velocity=new v.Vector(0,0,0);ue=de-Ce;for(let m of I)m.update(a,ue,M);A.updateSpheres(a);for(let m=0;m<N.numSteps;m++)A.stepSimulation();k.updateCaustics(A),de+=a}}function c(a){v.keys.L&&(k.lightDir=v.Vector.fromAngles((90-ge)*Math.PI/180,-ce*Math.PI/180),Q&&k.updateCaustics(A)),b.showFlags&&b.updateAttributesTexture(w,I),A.addOrRemoveVisualizationWaves(!0,I,ue),A.updateNormals(),w.clear(w.COLOR_BUFFER_BIT|w.DEPTH_BUFFER_BIT),w.loadIdentity(),w.translate(ye,we,-fe),w.rotate(-me,0,0,1),w.rotate(-ce,1,0,0),w.rotate(-ge,0,1,0),w.translate(0,.5,0),w.enable(w.DEPTH_TEST),k.sphereCenter=I[0].body.center,k.sphereRadius=_,k.renderCube(A),k.renderWater(A,ze,I,ue),k.renderSpheres(A),h.render(ue,N.sparks,M),w.disable(w.DEPTH_TEST),A.addOrRemoveVisualizationWaves(!1,I,ue)}};
//# sourceMappingURL=swimming-DHo5hfPl.js.map
