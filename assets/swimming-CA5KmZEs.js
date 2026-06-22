import"./modulepreload-polyfill-Dezn_h7o.js";import{t as e}from"./lil-gui.module.min-CCk8J1jY.js";var t=(function(){var e,t={create:function(t){t||={};var a=document.createElement(`canvas`);a.width=800,a.height=600,`alpha`in t||(t.alpha=!1);try{e=a.getContext(`webgl2`,t)}catch{}try{e||=a.getContext(`experimental-webgl`,t)}catch{}if(!e)throw Error(`WebGL not supported`);return e.HALF_FLOAT_OES=36193,n(),r(),i(),c(),e},keys:{},Matrix:d,Indexer:f,Buffer:p,Mesh:m,HitTest:_,Raytracer:v,Shader:x,Texture:w,Vector:O};function n(){e.MODELVIEW=l|1,e.PROJECTION=l|2;var t=new d,n=new d;e.modelviewMatrix=new d,e.projectionMatrix=new d;var r=[],i=[],a,o;e.matrixMode=function(t){switch(t){case e.MODELVIEW:a=`modelviewMatrix`,o=r;break;case e.PROJECTION:a=`projectionMatrix`,o=i;break;default:throw Error(`invalid matrix mode `+t)}},e.loadIdentity=function(){d.identity(e[a])},e.loadMatrix=function(t){for(var n=t.m,r=e[a].m,i=0;i<16;i++)r[i]=n[i]},e.multMatrix=function(t){e.loadMatrix(d.multiply(e[a],t,n))},e.perspective=function(n,r,i,a){e.multMatrix(d.perspective(n,r,i,a,t))},e.frustum=function(n,r,i,a,o,s){e.multMatrix(d.frustum(n,r,i,a,o,s,t))},e.ortho=function(n,r,i,a,o,s){e.multMatrix(d.ortho(n,r,i,a,o,s,t))},e.scale=function(n,r,i){e.multMatrix(d.scale(n,r,i,t))},e.translate=function(n,r,i){e.multMatrix(d.translate(n,r,i,t))},e.rotate=function(n,r,i,a){e.multMatrix(d.rotate(n,r,i,a,t))},e.lookAt=function(n,r,i,a,o,s,c,l,u){e.multMatrix(d.lookAt(n,r,i,a,o,s,c,l,u,t))},e.pushMatrix=function(){o.push(Array.prototype.slice.call(e[a].m))},e.popMatrix=function(){var t=o.pop();e[a].m=u?new Float32Array(t):t},e.project=function(t,n,r,i,a,o){i||=e.modelviewMatrix,a||=e.projectionMatrix,o||=e.getParameter(e.VIEWPORT);var s=a.transformPoint(i.transformPoint(new O(t,n,r)));return new O(o[0]+o[2]*(s.x*.5+.5),o[1]+o[3]*(s.y*.5+.5),s.z*.5+.5)},e.unProject=function(r,i,a,o,s,c){o||=e.modelviewMatrix,s||=e.projectionMatrix,c||=e.getParameter(e.VIEWPORT);var l=new O((r-c[0])/c[2]*2-1,(i-c[1])/c[3]*2-1,a*2-1);return d.inverse(d.multiply(s,o,t),n).transformPoint(l)},e.matrixMode(e.MODELVIEW)}function r(){var t={mesh:new m({coords:!0,colors:!0,triangles:!1}),mode:-1,coord:[0,0,0,0],color:[1,1,1,1],pointSize:1,shader:new x(`      uniform float pointSize;      out vec4 color;      out vec4 coord;      void main() {        color = gl_Color;        coord = gl_TexCoord;        gl_Position = gl_ModelViewProjectionMatrix * gl_Vertex;        gl_PointSize = pointSize;      }    `,`      uniform sampler2D tex;      uniform float pointSize;      uniform bool useTexture;      in vec4 color;      in vec4 coord;      out vec4 fragColor;      void main() {        fragColor = color;        if (useTexture) fragColor *= texture(tex, coord.xy);      }    `)};e.pointSize=function(e){t.shader.uniforms({pointSize:e})},e.begin=function(e){if(t.mode!=-1)throw Error(`mismatched gl.begin() and gl.end() calls`);t.mode=e,t.mesh.colors=[],t.mesh.coords=[],t.mesh.vertices=[]},e.color=function(e,n,r,i){t.color=arguments.length==1?e.toArray().concat(1):[e,n,r,i||1]},e.texCoord=function(e,n){t.coord=arguments.length==1?e.toArray(2):[e,n]},e.vertex=function(e,n,r){t.mesh.colors.push(t.color),t.mesh.coords.push(t.coord),t.mesh.vertices.push(arguments.length==1?e.toArray():[e,n,r])},e.end=function(){if(t.mode==-1)throw Error(`mismatched gl.begin() and gl.end() calls`);t.mesh.compile(),t.shader.uniforms({useTexture:!!e.getParameter(e.TEXTURE_BINDING_2D)}).draw(t.mesh,t.mode),t.mode=-1}}function i(){var t=e,n=0,r=0,i={},a=!1,c=Object.prototype.hasOwnProperty;function l(){for(var e in i)if(c.call(i,e)&&i[e])return!0;return!1}function u(t){var i={};for(var o in t)typeof t[o]==`function`?i[o]=(function(e){return function(){e.apply(t,arguments)}})(t[o]):i[o]=t[o];i.original=t,i.x=i.pageX,i.y=i.pageY;for(var s=e.canvas;s;s=s.offsetParent)i.x-=s.offsetLeft,i.y-=s.offsetTop;return a?(i.deltaX=i.x-n,i.deltaY=i.y-r):(i.deltaX=0,i.deltaY=0,a=!0),n=i.x,r=i.y,i.dragging=l(),i.preventDefault=function(){i.original.preventDefault()},i.stopPropagation=function(){i.original.stopPropagation()},i}function d(n){e=t,l()||(o(document,`mousemove`,f),o(document,`mouseup`,p),s(e.canvas,`mousemove`,f),s(e.canvas,`mouseup`,p)),i[n.which]=!0,n=u(n),e.onmousedown&&e.onmousedown(n),n.preventDefault()}function f(n){e=t,n=u(n),e.onmousemove&&e.onmousemove(n),n.preventDefault()}function p(n){e=t,i[n.which]=!1,l()||(s(document,`mousemove`,f),s(document,`mouseup`,p),o(e.canvas,`mousemove`,f),o(e.canvas,`mouseup`,p)),n=u(n),e.onmouseup&&e.onmouseup(n),n.preventDefault()}function m(){a=!1}function h(){i={},a=!1}o(e.canvas,`mousedown`,d),o(e.canvas,`mousemove`,f),o(e.canvas,`mouseup`,p),o(e.canvas,`mouseover`,m),o(e.canvas,`mouseout`,m),o(document,`contextmenu`,h)}function a(e){return{8:`BACKSPACE`,9:`TAB`,13:`ENTER`,16:`SHIFT`,27:`ESCAPE`,32:`SPACE`,37:`LEFT`,38:`UP`,39:`RIGHT`,40:`DOWN`}[e]||(e>=65&&e<=90?String.fromCharCode(e):null)}function o(e,t,n){e.addEventListener(t,n)}function s(e,t,n){e.removeEventListener(t,n)}o(document,`keydown`,function(e){if(!e.altKey&&!e.ctrlKey&&!e.metaKey){var n=a(e.keyCode);n&&(t.keys[n]=!0),t.keys[e.keyCode]=!0}}),o(document,`keyup`,function(e){if(!e.altKey&&!e.ctrlKey&&!e.metaKey){var n=a(e.keyCode);n&&(t.keys[n]=!1),t.keys[e.keyCode]=!1}});function c(){(function(t){e.makeCurrent=function(){e=t}})(e),e.animate=function(){var t=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(e){setTimeout(e,1e3/60)},n=new Date().getTime(),r=e;function i(){e=r;var a=new Date().getTime();e.onupdate&&e.onupdate((a-n)/1e3),e.ondraw&&e.ondraw(),t(i),n=a}i()},e.fullscreen=function(t){t||={};var n=t.paddingTop||0,r=t.paddingLeft||0,i=t.paddingRight||0,a=t.paddingBottom||0;if(!document.body)throw Error(`document.body doesn't exist yet (call gl.fullscreen() from window.onload() or from inside the <body> tag)`);document.body.appendChild(e.canvas),document.body.style.overflow=`hidden`,e.canvas.style.position=`absolute`,e.canvas.style.left=r+`px`,e.canvas.style.top=n+`px`;function s(){e.canvas.width=window.innerWidth-r-i,e.canvas.height=window.innerHeight-n-a,e.viewport(0,0,e.canvas.width,e.canvas.height),(t.camera||!(`camera`in t))&&(e.matrixMode(e.PROJECTION),e.loadIdentity(),e.perspective(t.fov||45,e.canvas.width/e.canvas.height,t.near||.1,t.far||1e3),e.matrixMode(e.MODELVIEW)),e.ondraw&&e.ondraw()}o(window,`resize`,s),s()}}var l=305397760,u=typeof Float32Array<`u`;function d(){var e=Array.prototype.concat.apply([],arguments);e.length||(e=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),this.m=u?new Float32Array(e):e}d.prototype={inverse:function(){return d.inverse(this,new d)},transpose:function(){return d.transpose(this,new d)},multiply:function(e){return d.multiply(this,e,new d)},transformPoint:function(e){var t=this.m;return new O(t[0]*e.x+t[1]*e.y+t[2]*e.z+t[3],t[4]*e.x+t[5]*e.y+t[6]*e.z+t[7],t[8]*e.x+t[9]*e.y+t[10]*e.z+t[11]).divide(t[12]*e.x+t[13]*e.y+t[14]*e.z+t[15])},transformVector:function(e){var t=this.m;return new O(t[0]*e.x+t[1]*e.y+t[2]*e.z,t[4]*e.x+t[5]*e.y+t[6]*e.z,t[8]*e.x+t[9]*e.y+t[10]*e.z)}},d.inverse=function(e,t){t||=new d;var n=e.m,r=t.m;r[0]=n[5]*n[10]*n[15]-n[5]*n[14]*n[11]-n[6]*n[9]*n[15]+n[6]*n[13]*n[11]+n[7]*n[9]*n[14]-n[7]*n[13]*n[10],r[1]=-n[1]*n[10]*n[15]+n[1]*n[14]*n[11]+n[2]*n[9]*n[15]-n[2]*n[13]*n[11]-n[3]*n[9]*n[14]+n[3]*n[13]*n[10],r[2]=n[1]*n[6]*n[15]-n[1]*n[14]*n[7]-n[2]*n[5]*n[15]+n[2]*n[13]*n[7]+n[3]*n[5]*n[14]-n[3]*n[13]*n[6],r[3]=-n[1]*n[6]*n[11]+n[1]*n[10]*n[7]+n[2]*n[5]*n[11]-n[2]*n[9]*n[7]-n[3]*n[5]*n[10]+n[3]*n[9]*n[6],r[4]=-n[4]*n[10]*n[15]+n[4]*n[14]*n[11]+n[6]*n[8]*n[15]-n[6]*n[12]*n[11]-n[7]*n[8]*n[14]+n[7]*n[12]*n[10],r[5]=n[0]*n[10]*n[15]-n[0]*n[14]*n[11]-n[2]*n[8]*n[15]+n[2]*n[12]*n[11]+n[3]*n[8]*n[14]-n[3]*n[12]*n[10],r[6]=-n[0]*n[6]*n[15]+n[0]*n[14]*n[7]+n[2]*n[4]*n[15]-n[2]*n[12]*n[7]-n[3]*n[4]*n[14]+n[3]*n[12]*n[6],r[7]=n[0]*n[6]*n[11]-n[0]*n[10]*n[7]-n[2]*n[4]*n[11]+n[2]*n[8]*n[7]+n[3]*n[4]*n[10]-n[3]*n[8]*n[6],r[8]=n[4]*n[9]*n[15]-n[4]*n[13]*n[11]-n[5]*n[8]*n[15]+n[5]*n[12]*n[11]+n[7]*n[8]*n[13]-n[7]*n[12]*n[9],r[9]=-n[0]*n[9]*n[15]+n[0]*n[13]*n[11]+n[1]*n[8]*n[15]-n[1]*n[12]*n[11]-n[3]*n[8]*n[13]+n[3]*n[12]*n[9],r[10]=n[0]*n[5]*n[15]-n[0]*n[13]*n[7]-n[1]*n[4]*n[15]+n[1]*n[12]*n[7]+n[3]*n[4]*n[13]-n[3]*n[12]*n[5],r[11]=-n[0]*n[5]*n[11]+n[0]*n[9]*n[7]+n[1]*n[4]*n[11]-n[1]*n[8]*n[7]-n[3]*n[4]*n[9]+n[3]*n[8]*n[5],r[12]=-n[4]*n[9]*n[14]+n[4]*n[13]*n[10]+n[5]*n[8]*n[14]-n[5]*n[12]*n[10]-n[6]*n[8]*n[13]+n[6]*n[12]*n[9],r[13]=n[0]*n[9]*n[14]-n[0]*n[13]*n[10]-n[1]*n[8]*n[14]+n[1]*n[12]*n[10]+n[2]*n[8]*n[13]-n[2]*n[12]*n[9],r[14]=-n[0]*n[5]*n[14]+n[0]*n[13]*n[6]+n[1]*n[4]*n[14]-n[1]*n[12]*n[6]-n[2]*n[4]*n[13]+n[2]*n[12]*n[5],r[15]=n[0]*n[5]*n[10]-n[0]*n[9]*n[6]-n[1]*n[4]*n[10]+n[1]*n[8]*n[6]+n[2]*n[4]*n[9]-n[2]*n[8]*n[5];for(var i=n[0]*r[0]+n[1]*r[4]+n[2]*r[8]+n[3]*r[12],a=0;a<16;a++)r[a]/=i;return t},d.transpose=function(e,t){t||=new d;var n=e.m,r=t.m;return r[0]=n[0],r[1]=n[4],r[2]=n[8],r[3]=n[12],r[4]=n[1],r[5]=n[5],r[6]=n[9],r[7]=n[13],r[8]=n[2],r[9]=n[6],r[10]=n[10],r[11]=n[14],r[12]=n[3],r[13]=n[7],r[14]=n[11],r[15]=n[15],t},d.multiply=function(e,t,n){n||=new d;var r=e.m,i=t.m,a=n.m;return a[0]=r[0]*i[0]+r[1]*i[4]+r[2]*i[8]+r[3]*i[12],a[1]=r[0]*i[1]+r[1]*i[5]+r[2]*i[9]+r[3]*i[13],a[2]=r[0]*i[2]+r[1]*i[6]+r[2]*i[10]+r[3]*i[14],a[3]=r[0]*i[3]+r[1]*i[7]+r[2]*i[11]+r[3]*i[15],a[4]=r[4]*i[0]+r[5]*i[4]+r[6]*i[8]+r[7]*i[12],a[5]=r[4]*i[1]+r[5]*i[5]+r[6]*i[9]+r[7]*i[13],a[6]=r[4]*i[2]+r[5]*i[6]+r[6]*i[10]+r[7]*i[14],a[7]=r[4]*i[3]+r[5]*i[7]+r[6]*i[11]+r[7]*i[15],a[8]=r[8]*i[0]+r[9]*i[4]+r[10]*i[8]+r[11]*i[12],a[9]=r[8]*i[1]+r[9]*i[5]+r[10]*i[9]+r[11]*i[13],a[10]=r[8]*i[2]+r[9]*i[6]+r[10]*i[10]+r[11]*i[14],a[11]=r[8]*i[3]+r[9]*i[7]+r[10]*i[11]+r[11]*i[15],a[12]=r[12]*i[0]+r[13]*i[4]+r[14]*i[8]+r[15]*i[12],a[13]=r[12]*i[1]+r[13]*i[5]+r[14]*i[9]+r[15]*i[13],a[14]=r[12]*i[2]+r[13]*i[6]+r[14]*i[10]+r[15]*i[14],a[15]=r[12]*i[3]+r[13]*i[7]+r[14]*i[11]+r[15]*i[15],n},d.identity=function(e){e||=new d;var t=e.m;return t[0]=t[5]=t[10]=t[15]=1,t[1]=t[2]=t[3]=t[4]=t[6]=t[7]=t[8]=t[9]=t[11]=t[12]=t[13]=t[14]=0,e},d.perspective=function(e,t,n,r,i){var a=Math.tan(e*Math.PI/360)*n,o=a*t;return d.frustum(-o,o,-a,a,n,r,i)},d.frustum=function(e,t,n,r,i,a,o){o||=new d;var s=o.m;return s[0]=2*i/(t-e),s[1]=0,s[2]=(t+e)/(t-e),s[3]=0,s[4]=0,s[5]=2*i/(r-n),s[6]=(r+n)/(r-n),s[7]=0,s[8]=0,s[9]=0,s[10]=-(a+i)/(a-i),s[11]=-2*a*i/(a-i),s[12]=0,s[13]=0,s[14]=-1,s[15]=0,o},d.ortho=function(e,t,n,r,i,a,o){o||=new d;var s=o.m;return s[0]=2/(t-e),s[1]=0,s[2]=0,s[3]=-(t+e)/(t-e),s[4]=0,s[5]=2/(r-n),s[6]=0,s[7]=-(r+n)/(r-n),s[8]=0,s[9]=0,s[10]=-2/(a-i),s[11]=-(a+i)/(a-i),s[12]=0,s[13]=0,s[14]=0,s[15]=1,o},d.scale=function(e,t,n,r){r||=new d;var i=r.m;return i[0]=e,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=t,i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[10]=n,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,r},d.translate=function(e,t,n,r){r||=new d;var i=r.m;return i[0]=1,i[1]=0,i[2]=0,i[3]=e,i[4]=0,i[5]=1,i[6]=0,i[7]=t,i[8]=0,i[9]=0,i[10]=1,i[11]=n,i[12]=0,i[13]=0,i[14]=0,i[15]=1,r},d.rotate=function(e,t,n,r,i){if(!e||!t&&!n&&!r)return d.identity(i);i||=new d;var a=i.m,o=Math.sqrt(t*t+n*n+r*r);e*=Math.PI/180,t/=o,n/=o,r/=o;var s=Math.cos(e),c=Math.sin(e),l=1-s;return a[0]=t*t*l+s,a[1]=t*n*l-r*c,a[2]=t*r*l+n*c,a[3]=0,a[4]=n*t*l+r*c,a[5]=n*n*l+s,a[6]=n*r*l-t*c,a[7]=0,a[8]=r*t*l-n*c,a[9]=r*n*l+t*c,a[10]=r*r*l+s,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,i},d.lookAt=function(e,t,n,r,i,a,o,s,c,l){l||=new d;var u=l.m,f=new O(e,t,n),p=new O(r,i,a),m=new O(o,s,c),h=f.subtract(p).unit(),g=m.cross(h).unit(),_=h.cross(g).unit();return u[0]=g.x,u[1]=g.y,u[2]=g.z,u[3]=-g.dot(f),u[4]=_.x,u[5]=_.y,u[6]=_.z,u[7]=-_.dot(f),u[8]=h.x,u[9]=h.y,u[10]=h.z,u[11]=-h.dot(f),u[12]=0,u[13]=0,u[14]=0,u[15]=1,l};function f(){this.unique=[],this.indices=[],this.map={}}f.prototype={add:function(e){var t=JSON.stringify(e);return t in this.map||(this.map[t]=this.unique.length,this.unique.push(e)),this.map[t]}};function p(e,t){this.buffer=null,this.target=e,this.type=t,this.data=[]}p.prototype={compile:function(t){for(var n=[],r=0,i=1e4;r<this.data.length;r+=i)n=Array.prototype.concat.apply(n,this.data.slice(r,r+i));var a=this.data.length?n.length/this.data.length:0;if(a!=Math.round(a))throw Error(`buffer elements not of consistent size, average size is `+a);this.buffer=this.buffer||e.createBuffer(),this.buffer.length=n.length,this.buffer.spacing=a,e.bindBuffer(this.target,this.buffer),e.bufferData(this.target,new this.type(n),t||e.STATIC_DRAW)}};function m(e){e||={},this.vertexBuffers={},this.indexBuffers={},this.addVertexBuffer(`vertices`,`gl_Vertex`),e.coords&&this.addVertexBuffer(`coords`,`gl_TexCoord`),e.normals&&this.addVertexBuffer(`normals`,`gl_Normal`),e.colors&&this.addVertexBuffer(`colors`,`gl_Color`),(!(`triangles`in e)||e.triangles)&&this.addIndexBuffer(`triangles`),e.lines&&this.addIndexBuffer(`lines`)}m.prototype={addVertexBuffer:function(t,n){var r=this.vertexBuffers[n]=new p(e.ARRAY_BUFFER,Float32Array);r.name=t,this[t]=[]},addIndexBuffer:function(t){this.indexBuffers[t]=new p(e.ELEMENT_ARRAY_BUFFER,Uint16Array),this[t]=[]},compile:function(){for(var e in this.vertexBuffers){var t=this.vertexBuffers[e];t.data=this[t.name],t.compile()}for(var n in this.indexBuffers){var t=this.indexBuffers[n];t.data=this[n],t.compile()}},transform:function(e){if(this.vertices=this.vertices.map(function(t){return e.transformPoint(O.fromArray(t)).toArray()}),this.normals){var t=e.inverse().transpose();this.normals=this.normals.map(function(e){return t.transformVector(O.fromArray(e)).unit().toArray()})}return this.compile(),this},computeNormals:function(){this.normals||this.addVertexBuffer(`normals`,`gl_Normal`);for(var e=0;e<this.vertices.length;e++)this.normals[e]=new O;for(var e=0;e<this.triangles.length;e++){var t=this.triangles[e],n=O.fromArray(this.vertices[t[0]]),r=O.fromArray(this.vertices[t[1]]),i=O.fromArray(this.vertices[t[2]]),a=r.subtract(n).cross(i.subtract(n)).unit();this.normals[t[0]]=this.normals[t[0]].add(a),this.normals[t[1]]=this.normals[t[1]].add(a),this.normals[t[2]]=this.normals[t[2]].add(a)}for(var e=0;e<this.vertices.length;e++)this.normals[e]=this.normals[e].unit().toArray();return this.compile(),this},computeWireframe:function(){for(var e=new f,t=0;t<this.triangles.length;t++)for(var n=this.triangles[t],r=0;r<n.length;r++){var i=n[r],a=n[(r+1)%n.length];e.add([Math.min(i,a),Math.max(i,a)])}return this.lines||this.addIndexBuffer(`lines`),this.lines=e.unique,this.compile(),this},getAABB:function(){var e={min:new O(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)};e.max=e.min.negative();for(var t=0;t<this.vertices.length;t++){var n=O.fromArray(this.vertices[t]);e.min=O.min(e.min,n),e.max=O.max(e.max,n)}return e},getBoundingSphere:function(){for(var e=this.getAABB(),t={center:e.min.add(e.max).divide(2),radius:0},n=0;n<this.vertices.length;n++)t.radius=Math.max(t.radius,O.fromArray(this.vertices[n]).subtract(t.center).length());return t}},m.plane=function(e){e||={};for(var t=new m(e),n=e.detailX||e.detail||1,r=e.detailY||e.detail||1,i=e.width||2,a=e.height||2,o=0;o<=r;o++)for(var s=o/r,c=0;c<=n;c++){var l=c/n;if(t.vertices.push([(l-.5)*i,(s-.5)*a,0]),t.coords&&t.coords.push([l,s]),t.normals&&t.normals.push([0,0,1]),c<n&&o<r){var u=c+o*(n+1);t.triangles.push([u,u+1,u+n+1]),t.triangles.push([u+n+1,u+1,u+n+2])}}return t.compile(),t};var h=[[0,4,2,6,-1,0,0],[1,3,5,7,1,0,0],[0,1,4,5,0,-1,0],[2,6,3,7,0,1,0],[0,2,1,3,0,0,-1],[4,5,6,7,0,0,1]];function g(e){return new O((e&1)*2-1,(e&2)-1,(e&4)/2-1)}m.cube=function(e){for(var t=new m(e),n=e&&e.width||2,r=e&&e.height||2,i=e&&e.depth||2,a=0;a<h.length;a++){for(var o=h[a],s=a*4,c=0;c<4;c++){var l=o[c];let e=g(l).toArray();e[0]*=n/2,e[1]*=r/2,e[2]*=i/2,t.vertices.push(e),t.coords&&t.coords.push([c&1,(c&2)/2]),t.normals&&t.normals.push(o.slice(4,7))}t.triangles.push([s,s+1,s+2]),t.triangles.push([s+2,s+1,s+3])}return t.compile(),t},m.sphere=function(e){function t(e,t,n){return c?[e,n,t]:[e,t,n]}function n(e){return e+(e-e*e)/2}e||={};for(var r=new m(e),i=new f,a=e.detail||6,o=0;o<8;o++)for(var s=g(o),c=s.x*s.y*s.z>0,l=[],u=0;u<=a;u++){for(var d=0;u+d<=a;d++){var p=u/a,h=d/a,_=(a-u-d)/a,v={vertex:new O(n(p),n(h),n(_)).unit().multiply(s).toArray()};r.coords&&(v.coord=s.y>0?[1-p,_]:[_,1-p]),l.push(i.add(v))}if(u>0)for(var d=0;u+d<=a;d++){var p=(u-1)*(a+1)+(u-1-(u-1)*(u-1))/2+d,h=u*(a+1)+(u-u*u)/2+d;r.triangles.push(t(l[p],l[p+1],l[h])),u+d<a&&r.triangles.push(t(l[h],l[p+1],l[h+1]))}}return r.vertices=i.unique.map(function(e){return e.vertex}),r.coords&&=i.unique.map(function(e){return e.coord}),r.normals&&=r.vertices,r.compile(),r},m.load=function(e,t){t||={},`coords`in t||(t.coords=!!e.coords),`normals`in t||(t.normals=!!e.normals),`colors`in t||(t.colors=!!e.colors),`triangles`in t||(t.triangles=!!e.triangles),`lines`in t||(t.lines=!!e.lines);var n=new m(t);return n.vertices=e.vertices,n.coords&&=e.coords,n.normals&&=e.normals,n.colors&&=e.colors,n.triangles&&=e.triangles,n.lines&&=e.lines,n.compile(),n};function _(e,t,n){this.t=arguments.length?e:Number.MAX_VALUE,this.hit=t,this.normal=n}_.prototype={mergeWith:function(e){e.t>0&&e.t<this.t&&(this.t=e.t,this.hit=e.hit,this.normal=e.normal)}};function v(){var t=e.getParameter(e.VIEWPORT),n=e.modelviewMatrix.m,r=new O(n[0],n[4],n[8]),i=new O(n[1],n[5],n[9]),a=new O(n[2],n[6],n[10]),o=new O(n[3],n[7],n[11]);this.eye=new O(-o.dot(r),-o.dot(i),-o.dot(a));var s=t[0],c=s+t[2],l=t[1],u=l+t[3];this.ray00=e.unProject(s,l,1).subtract(this.eye),this.ray10=e.unProject(c,l,1).subtract(this.eye),this.ray01=e.unProject(s,u,1).subtract(this.eye),this.ray11=e.unProject(c,u,1).subtract(this.eye),this.viewport=t}v.prototype={getRayForPixel:function(e,t){e=(e-this.viewport[0])/this.viewport[2],t=1-(t-this.viewport[1])/this.viewport[3];var n=O.lerp(this.ray00,this.ray10,e),r=O.lerp(this.ray01,this.ray11,e);return O.lerp(n,r,t).unit()}},v.hitTestBox=function(e,t,n,r){var i=n.subtract(e).divide(t),a=r.subtract(e).divide(t),o=O.min(i,a),s=O.max(i,a),c=o.max(),l=s.min();if(c>0&&c<l){var u=1e-6,d=e.add(t.multiply(c));return n=n.add(u),r=r.subtract(u),new _(c,d,new O((d.x>r.x)-(d.x<n.x),(d.y>r.y)-(d.y<n.y),(d.z>r.z)-(d.z<n.z)))}return null},v.hitTestSphere=function(e,t,n,r){var i=e.subtract(n),a=t.dot(t),o=2*t.dot(i),s=i.dot(i)-r*r,c=o*o-4*a*s;if(c>0){var l=(-o-Math.sqrt(c))/(2*a),u=e.add(t.multiply(l));return new _(l,u,u.subtract(n).divide(r))}return null},v.hitTestTriangle=function(e,t,n,r,i){var a=r.subtract(n),o=i.subtract(n),s=a.cross(o).unit(),c=s.dot(n.subtract(e))/s.dot(t);if(c>0){var l=e.add(t.multiply(c)),u=l.subtract(n),d=o.dot(o),f=o.dot(a),p=o.dot(u),m=a.dot(a),h=a.dot(u),g=d*m-f*f,v=(m*p-f*h)/g,y=(d*h-f*p)/g;if(v>=0&&y>=0&&v+y<=1)return new _(c,l,s)}return null};function y(e,t,n){let r;for(;(r=e.exec(t))!=null;)n(r)}var b=`LIGHTGL`;function x(t,n){function r(e){var t=document.getElementById(e);return t?t.text:e}t=r(t),n=r(n);var i=`    uniform mat3 gl_NormalMatrix;    uniform mat4 gl_ModelViewMatrix;    uniform mat4 gl_ProjectionMatrix;    uniform mat4 gl_ModelViewProjectionMatrix;    uniform mat4 gl_ModelViewMatrixInverse;    uniform mat4 gl_ProjectionMatrixInverse;    uniform mat4 gl_ModelViewProjectionMatrixInverse;  `,a=`#version 300 es
    `+i+`    in vec4 gl_Vertex;    in vec4 gl_TexCoord;    in vec3 gl_Normal;    in vec4 gl_Color;    vec4 ftransform() {      return gl_ModelViewProjectionMatrix * gl_Vertex;    }  `,o=`#version 300 es
    precision highp float;
  `+i,s=t+n,c={};y(/\b(gl_[^;]*)\b;/g,i,function(e){var t=e[1];if(s.indexOf(t)!=-1){var n=t.replace(/[a-z_]/g,``);c[n]=b+t}}),s.indexOf(`ftransform`)!=-1&&(c.MVPM=b+`gl_ModelViewProjectionMatrix`),this.usedMatrices=c;function l(e,t){var n={},r=/^((\s*\/\/.*\n|\s*#extension.*\n)+)[^]*$/.exec(t);return t=r?r[1]+e+t.substr(r[1].length):e+t,y(/\bgl_\w+\b/g,e,function(e){e in n||(t=t.replace(RegExp(`\\b`+e+`\\b`,`g`),b+e),n[e]=!0)}),t}t=l(a,t),n=l(o,n);function u(t,n){var r=e.createShader(t);if(e.shaderSource(r,n),e.compileShader(r),!e.getShaderParameter(r,e.COMPILE_STATUS))throw Error(`compile error: `+e.getShaderInfoLog(r));return r}if(this.program=e.createProgram(),e.attachShader(this.program,u(e.VERTEX_SHADER,t)),e.attachShader(this.program,u(e.FRAGMENT_SHADER,n)),e.linkProgram(this.program),!e.getProgramParameter(this.program,e.LINK_STATUS))throw Error(`link error: `+e.getProgramInfoLog(this.program));this.attributes={},this.uniformLocations={};var d={};y(/uniform\s+sampler(1D|2D|3D|Cube)\s+(\w+)\s*;/g,t+n,function(e){d[e[2]]=1}),this.isSampler=d}function S(e){var t=Object.prototype.toString.call(e);return t==`[object Array]`||t==`[object Float32Array]`}function C(e){var t=Object.prototype.toString.call(e);return t==`[object Number]`||t==`[object Boolean]`}new d,new d,x.prototype={uniforms:function(t){for(var n in e.useProgram(this.program),t){var r=this.uniformLocations[n]||e.getUniformLocation(this.program,n);if(r){this.uniformLocations[n]=r;var i=t[n];if(i instanceof O?i=[i.x,i.y,i.z]:i instanceof d&&(i=i.m),S(i))switch(i.length){case 1:e.uniform1fv(r,new Float32Array(i));break;case 2:e.uniform2fv(r,new Float32Array(i));break;case 3:e.uniform3fv(r,new Float32Array(i));break;case 4:e.uniform4fv(r,new Float32Array(i));break;case 9:e.uniformMatrix3fv(r,!1,new Float32Array([i[0],i[3],i[6],i[1],i[4],i[7],i[2],i[5],i[8]]));break;case 16:e.uniformMatrix4fv(r,!1,new Float32Array([i[0],i[4],i[8],i[12],i[1],i[5],i[9],i[13],i[2],i[6],i[10],i[14],i[3],i[7],i[11],i[15]]));break;default:throw Error(`don't know how to load uniform "`+n+`" of length `+i.length)}else if(C(i))(this.isSampler[n]?e.uniform1i:e.uniform1f).call(e,r,i);else throw Error(`attempted to set uniform "`+n+`" to invalid value `+i)}}return this},draw:function(t,n){this.drawBuffers(t.vertexBuffers,t.indexBuffers[n==e.LINES?`lines`:`triangles`],arguments.length<2?e.TRIANGLES:n)},drawBuffers:function(t,n,r){var i=this.usedMatrices,a=e.modelviewMatrix,o=e.projectionMatrix,s=i.MVMI||i.NM?a.inverse():null,c=i.PMI?o.inverse():null,l=i.MVPM||i.MVPMI?o.multiply(a):null,u={};if(i.MVM&&(u[i.MVM]=a),i.MVMI&&(u[i.MVMI]=s),i.PM&&(u[i.PM]=o),i.PMI&&(u[i.PMI]=c),i.MVPM&&(u[i.MVPM]=l),i.MVPMI&&(u[i.MVPMI]=l.inverse()),i.NM){var d=s.m;u[i.NM]=[d[0],d[4],d[8],d[1],d[5],d[9],d[2],d[6],d[10]]}this.uniforms(u);var f=0;for(var p in t){var m=t[p],h=this.attributes[p]||e.getAttribLocation(this.program,p.replace(/^(gl_.*)$/,b+`$1`));h==-1||!m.buffer||(this.attributes[p]=h,e.bindBuffer(e.ARRAY_BUFFER,m.buffer),e.enableVertexAttribArray(h),e.vertexAttribPointer(h,m.buffer.spacing,e.FLOAT,!1,0,0),f=m.buffer.length/m.buffer.spacing)}for(var p in this.attributes)p in t||e.disableVertexAttribArray(this.attributes[p]);return f&&(!n||n.buffer)&&(n?(e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.buffer),e.drawElements(r,n.buffer.length,e.UNSIGNED_SHORT,0)):e.drawArrays(r,0,f)),this}};function w(t,n,r){r||={},this.width=t,this.height=n,this.id=e.createTexture();let i=r.type||e.UNSIGNED_BYTE,a=r.format||e.RGBA,o=e.RGBA,s=e.getExtension(`EXT_color_buffer_float`),c=e.getExtension(`EXT_color_buffer_half_float`);i===e.FLOAT?(s?e instanceof WebGL2RenderingContext&&(a=e.RGBA32F):(console.warn(`FLOAT textures not renderable, falling back to UNSIGNED_BYTE`),i=e.UNSIGNED_BYTE,a=e.RGBA8),o=e.RGBA):i===e.HALF_FLOAT_OES?(c?e instanceof WebGL2RenderingContext&&(a=e.RGBA16F):(console.warn(`HALF_FLOAT textures not renderable, falling back to UNSIGNED_BYTE`),i=e.UNSIGNED_BYTE,a=e.RGBA8),o=e.RGBA):(i=e.UNSIGNED_BYTE,a=e.RGBA8,o=e.RGBA);let l=r.filter||r.magFilter||e.LINEAR,u=r.filter||r.minFilter||e.LINEAR;e.bindTexture(e.TEXTURE_2D,this.id),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,1),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,l),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,u),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,r.wrap||r.wrapS||e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,r.wrap||r.wrapT||e.CLAMP_TO_EDGE),e instanceof WebGL2RenderingContext?e.texImage2D(e.TEXTURE_2D,0,a,t,n,0,o,i,null):e.texImage2D(e.TEXTURE_2D,0,o,t,n,0,o,i,null),e.bindTexture(e.TEXTURE_2D,null),this.format=o,this.type=i,this.internalFormat=a}var T,E,D;w.prototype={bind:function(t){e.activeTexture(e.TEXTURE0+(t||0)),e.bindTexture(e.TEXTURE_2D,this.id)},unbind:function(t){e.activeTexture(e.TEXTURE0+(t||0)),e.bindTexture(e.TEXTURE_2D,null)},canDrawTo:function(){T||=e.createFramebuffer(),e.bindFramebuffer(e.FRAMEBUFFER,T),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,this.id,0);var t=e.checkFramebufferStatus(e.FRAMEBUFFER)==e.FRAMEBUFFER_COMPLETE;return e.bindFramebuffer(e.FRAMEBUFFER,null),t},drawTo:function(t){e.getExtension(`EXT_color_buffer_float`)||console.warn(`EXT_color_buffer_float not available!`);var n=e.getParameter(e.VIEWPORT);if(T||=e.createFramebuffer(),E||=e.createRenderbuffer(),e.bindFramebuffer(e.FRAMEBUFFER,T),e.bindRenderbuffer(e.RENDERBUFFER,E),(this.width!=E.width||this.height!=E.height)&&(E.width=this.width,E.height=this.height,e.renderbufferStorage(e.RENDERBUFFER,e.DEPTH_COMPONENT16,this.width,this.height)),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,this.id,0),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,E),e.checkFramebufferStatus(e.FRAMEBUFFER)!=e.FRAMEBUFFER_COMPLETE)throw Error(`Rendering to this texture is not supported (incomplete framebuffer)`);e.viewport(0,0,this.width,this.height),t(),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindRenderbuffer(e.RENDERBUFFER,null),e.viewport(n[0],n[1],n[2],n[3])},swapWith:function(e){var t=e.id;e.id=this.id,this.id=t,t=e.width,e.width=this.width,this.width=t,t=e.height,e.height=this.height,this.height=t}},w.fromImage=function(t,n){n||={};var r=new w(t.width,t.height,n);e.bindTexture(e.TEXTURE_2D,r.id);try{e.texImage2D(e.TEXTURE_2D,0,r.format,r.format,r.type,t)}catch{throw location.protocol==`file:`?Error(`image not loaded for security reasons (serve this page over "http://" instead)`):Error(`image not loaded for security reasons (image must originate from the same domain as this page or use Cross-Origin Resource Sharing)`)}return n.minFilter&&n.minFilter!=e.NEAREST&&n.minFilter!=e.LINEAR&&e.generateMipmap(e.TEXTURE_2D),e.bindTexture(e.TEXTURE_2D,null),r},w.fromURL=function(t,n){D||=(function(){var e=document.createElement(`canvas`).getContext(`2d`);e.canvas.width=e.canvas.height=128;for(var t=0;t<e.canvas.height;t+=16)for(var n=0;n<e.canvas.width;n+=16)e.fillStyle=(n^t)&16?`#FFF`:`#DDD`,e.fillRect(n,t,16,16);return e.canvas})();var r=w.fromImage(D,n),i=new Image,a=e;return i.onload=function(){a.makeCurrent(),w.fromImage(i,n).swapWith(r)},i.src=t,r},w.canUseFloatingPointTextures=function(){return!!e.getExtension(`OES_texture_float`)},w.canUseFloatingPointLinearFiltering=function(){return!!e.getExtension(`OES_texture_float_linear`)},w.canUseHalfFloatingPointTextures=function(){return!!e.getExtension(`OES_texture_half_float`)},w.canUseHalfFloatingPointLinearFiltering=function(){return!!e.getExtension(`OES_texture_half_float_linear`)};function O(e,t,n){this.x=e||0,this.y=t||0,this.z=n||0}return O.prototype={negative:function(){return new O(-this.x,-this.y,-this.z)},add:function(e){return e instanceof O?new O(this.x+e.x,this.y+e.y,this.z+e.z):new O(this.x+e,this.y+e,this.z+e)},subtract:function(e){return e instanceof O?new O(this.x-e.x,this.y-e.y,this.z-e.z):new O(this.x-e,this.y-e,this.z-e)},multiply:function(e){return e instanceof O?new O(this.x*e.x,this.y*e.y,this.z*e.z):new O(this.x*e,this.y*e,this.z*e)},divide:function(e){return e instanceof O?new O(this.x/e.x,this.y/e.y,this.z/e.z):new O(this.x/e,this.y/e,this.z/e)},equals:function(e){return this.x==e.x&&this.y==e.y&&this.z==e.z},dot:function(e){return this.x*e.x+this.y*e.y+this.z*e.z},cross:function(e){return new O(this.y*e.z-this.z*e.y,this.z*e.x-this.x*e.z,this.x*e.y-this.y*e.x)},length:function(){return Math.sqrt(this.dot(this))},unit:function(){return this.divide(this.length())},min:function(){return Math.min(Math.min(this.x,this.y),this.z)},max:function(){return Math.max(Math.max(this.x,this.y),this.z)},toAngles:function(){return{theta:Math.atan2(this.z,this.x),phi:Math.asin(this.y/this.length())}},angleTo:function(e){return Math.acos(this.dot(e)/(this.length()*e.length()))},toArray:function(e){return[this.x,this.y,this.z].slice(0,e||3)},clone:function(){return new O(this.x,this.y,this.z)},init:function(e,t,n){return this.x=e,this.y=t,this.z=n,this}},O.negative=function(e,t){return t.x=-e.x,t.y=-e.y,t.z=-e.z,t},O.add=function(e,t,n){return t instanceof O?(n.x=e.x+t.x,n.y=e.y+t.y,n.z=e.z+t.z):(n.x=e.x+t,n.y=e.y+t,n.z=e.z+t),n},O.subtract=function(e,t,n){return t instanceof O?(n.x=e.x-t.x,n.y=e.y-t.y,n.z=e.z-t.z):(n.x=e.x-t,n.y=e.y-t,n.z=e.z-t),n},O.multiply=function(e,t,n){return t instanceof O?(n.x=e.x*t.x,n.y=e.y*t.y,n.z=e.z*t.z):(n.x=e.x*t,n.y=e.y*t,n.z=e.z*t),n},O.divide=function(e,t,n){return t instanceof O?(n.x=e.x/t.x,n.y=e.y/t.y,n.z=e.z/t.z):(n.x=e.x/t,n.y=e.y/t,n.z=e.z/t),n},O.cross=function(e,t,n){return n.x=e.y*t.z-e.z*t.y,n.y=e.z*t.x-e.x*t.z,n.z=e.x*t.y-e.y*t.x,n},O.unit=function(e,t){var n=e.length();return t.x=e.x/n,t.y=e.y/n,t.z=e.z/n,t},O.fromAngles=function(e,t){return new O(Math.cos(e)*Math.cos(t),Math.sin(t),Math.sin(e)*Math.cos(t))},O.randomDirection=function(){return O.fromAngles(Math.random()*Math.PI*2,Math.asin(Math.random()*2-1))},O.min=function(e,t){return new O(Math.min(e.x,t.x),Math.min(e.y,t.y),Math.min(e.z,t.z))},O.max=function(e,t){return new O(Math.max(e.x,t.x),Math.max(e.y,t.y),Math.max(e.z,t.z))},O.lerp=function(e,t,n){return t.subtract(e).multiply(n).add(e)},O.fromArray=function(e){return new O(e[0],e[1],e[2])},O.angleBetween=function(e,t){return e.angleTo(t)},t})(),n=class e{constructor({tx:e=0,ty:t=0,zoom:n=4,ax:r=-25,ay:i=-200,az:a=0,fov:o=45}){this.tx=e,this.ty=t,this.zoom=n,this.ax=r,this.ay=i,this.az=a,this.fov=o}interpolate(t,n,r=1){let i=(e,t,n,r=1)=>n**+r*t+(1-n**+r)*e;return new e({tx:i(this.tx,t.tx,n,r),ty:i(this.ty,t.ty,n,r),zoom:i(this.zoom,t.zoom,n,r),ax:i(this.ax,t.ax,n,r),ay:i(this.ay,t.ay,n,r),az:i(this.az,t.az,n,r),fov:i(this.fov,t.fov,n,r)})}},r=.3,i=.15,a=2.5,o=.75,s=`
    uniform float wr;
    #define sqrt_2_PI 2.50662827
    #define PI 3.1415926536
    uniform sampler2D swimmersAttributesTexture;
    const int SWIMMERS_NUM_ATTRIBUTES = 4;
    const vec2 TEXTURE_SIZE = vec2(3, 10);
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
            float amplitude = .2;
            float g = amplitude * gaussian(z, wr, .25);
            float w = exp(g - amplitude) - exp(-amplitude);
            return w;
        }
        return 0.;
    }

    void ripples(in vec2 coord, in vec2 eventPosition, in float eventTime, float intensity, out vec4 res) {
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
        
        float r_max_max = 0.65;
        
        float r_max = max(0.3, intensity * r_max_max);
        float attenuationDist = r_max;
        
        float duration = 1.5;
        duration = 5.;
        float c =  cos(lambda * d - omega * timeSinceDiving);
        float attenuation = exp(-d / attenuationDist - timeSinceDiving / duration);
        bool condition = timeSinceDiving > d / frequency;
        if (condition) res.x += .05 * attenuation * c;
        if (c > 0.8 && condition) {
            res.y = max(res.y, min(1., 15.*attenuation));
            res.z = 1.;
            res.w = intensity;
        }
    }

    void divingRipples(in vec2 coord, in vec2 swimmerPosition, in vec2 divingInfo, out vec4 res) {
        float swimmer_x = swimmerPosition.x;
        float divingDistance = divingInfo.x;
        float divingTime = divingInfo.y;

        vec2 divingLocation = vec2(swimmer_x, divingDistance - poolSize.z / 2.);

        float divingDistRange = .7;
        float divingDistMin = 3.3;
        float intensity = (divingDistance - divingDistMin) / divingDistRange;
        
        ripples(coord, divingLocation, divingTime, intensity, res);
    }

    void breakoutRipples(in vec2 coord, in vec2 swimmerPosition, in vec2 breakoutInfo, out vec4 res) {
        float swimmer_x = swimmerPosition.x;
        float breakoutDistance = breakoutInfo.x;
        float breakoutTime = breakoutInfo.y;

        vec2 breakoutLocation = vec2(swimmer_x, breakoutDistance - poolSize.z / 2.);

        float breakoutDistRange = 1.3;
        float breakoutDistMin = 10.7;
        float intensity = (breakoutDistance - breakoutDistMin) / breakoutDistRange;
        
        ripples(coord, breakoutLocation, breakoutTime, intensity, res);
    }



    vec4 getDivingWaves(vec2 coord) {
        vec4 res = vec4(0., 0., -1., 0.);
        
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
`,c=class{constructor(e,n,r,i){if(this.gl=e,this.calibration=r,this.copyVideo=!1,this.show=!1,this.videoStartTime=i,e===null){alert(`Unable to initialize WebGL. Your browser or machine may not support it.`);return}e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT),this.shader=new t.Shader(`
    out highp vec2 vTextureCoord;
    out vec3 waterNormal;
    out vec3 sparkPlaneNormal;
    out vec3 sparkDirection;
    out vec2 posScreen;

    uniform float ratio_screen;
    uniform float dx_screen;
    uniform mat4 calib_MVPMI;

    void main(void) {
        // vec4 posAbsolute = calib_MVPMI * vec4(gl_Vertex.xz*1000., 0., 1.);
        // vec4 posAbsolute = gl_ModelViewProjectionMatrixInverse * vec4(gl_Vertex.xz, 0., 1.);
        // gl_Position = gl_ModelViewProjectionMatrix * posAbsolute;
        gl_Position = vec4(gl_Vertex.xz, 0., 1.);
        gl_Position.x *= ratio_screen;

        waterNormal = (gl_ModelViewMatrix * vec4(0., 1., 0., 0.)).xyz;
        sparkPlaneNormal = (gl_ModelViewMatrix * vec4(-1., 0., 0., 0.)).xyz;
        sparkDirection = (gl_ModelViewMatrix * vec4(0., 0., 1., 0.)).xyz;
        vTextureCoord = gl_TexCoord.st;
        posScreen = gl_Position.xy;
    }
`,`
    in highp vec2 vTextureCoord;
    in vec3 waterNormal;
    in vec3 sparkPlaneNormal;
    in vec3 sparkDirection;
    in vec2 posScreen;
    out vec4 fragColor;

    uniform sampler2D uSampler;
    uniform sampler2D screen;
    uniform bool screenAvailabe;
    uniform bool sparksEnabled;
    uniform vec3 poolSize;
    uniform bool thresholdBlending;
    uniform float blendingThreshold;
    uniform float opacity;
    uniform float distanceFixed;
    uniform bool hideObstructions;
    uniform float hideObstructionThreshold;

    
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
#define MAX_SPARKS 200
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

`+s+`

    float cross2D(vec2 a, vec2 b) {
        return a.x * b.y - a.y * b.x;
    }

    bool isOverPool(vec2 p) {
        vec4 A = vec4(-poolSize.x/2., 0., poolSize.z/2., 1.);
        vec4 B = vec4(-poolSize.x/2., 0., -poolSize.z/2., 1.);
        vec4 C = vec4(poolSize.x/2., 0., -poolSize.z/2., 1.);
        vec4 D = vec4(poolSize.x/2., 0., poolSize.z/2., 1.);

        vec4 a_hom = gl_ModelViewProjectionMatrix*A;
        vec4 b_hom = gl_ModelViewProjectionMatrix*B;
        vec4 c_hom = gl_ModelViewProjectionMatrix*C;
        vec4 d_hom = gl_ModelViewProjectionMatrix*D;

        vec2 a = a_hom.xy / a_hom.w;
        vec2 b = b_hom.xy / b_hom.w;
        vec2 c = c_hom.xy / c_hom.w;
        vec2 d = d_hom.xy / d_hom.w;


        float c1 = cross2D(b-a, p-a);
        float c2 = cross2D(c-b, p-b);
        float c3 = cross2D(d-c, p-c);
        float c4 = cross2D(a-d, p-d);

        
        return c1 <= 0. && c2 <= 0. && c3 <= 0. && c4 <= 0.;


    }

    void main(void) {
        highp vec4 texelColor = texture(uSampler, vTextureCoord);

        if (screenAvailabe) {
            vec4 screenColor = texture(screen, posScreen/2. + .5);
            float alpha = screenColor.a;
            if (alpha < .9) {
                fragColor = vec4(0., 0., 0., 0.);
                return;
                // fragColor.a = 0.;
            }
            else {
                fragColor = texelColor;
                return;
            }
        }
        // if (max(max(texelColor.r, texelColor.g), texelColor.b) < .2){
        //     fragColor = vec4(0., 0., 0., 0.);
        //     return;
        // }
        
        vec3 waterColor = vec3(.294, .812, 1.);

        vec3 waterColor1 = vec3(.39, .98, .9);
        vec3 waterColor2 = vec3(.08, .57, .59);

        float r = opacity;
        if (thresholdBlending) {
            if (length(waterColor - texelColor.rgb) < blendingThreshold ||
             length(texelColor.rgb) > 1.5 && texelColor.b > .1 + (texelColor.r + texelColor.g) * .5) r = 0.3 * opacity;
        }
        fragColor = vec4(texelColor.rgb, r);

        if (hideObstructions && isOverPool(posScreen)){
            if (max(max(texelColor.r, texelColor.g), texelColor.b) < hideObstructionThreshold) fragColor = vec4(0., 0., 0., 0.);
            // return;
        }

        

        // vec4 backgroundCol = texture(screen, (posScreen+1.)/2.);
        // if (backgroundCol.r > .6) {
        //     fragColor = vec4(0., 0., 0., 1.);
        // }
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
`),this.mesh=t.Mesh.plane({width:2,height:2,coords:!0,normals:!0}),this.mesh.transform(t.Matrix.rotate(90,1,0,0)),this.mesh.transform(t.Matrix.translate(0,.1,0)),this.programInfo=null,this.texture=this.initTexture(),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!0),n!=``&&(this.video=this.setupVideo(n))}#e(){let e=k.drawingTextureB;k.drawingTextureB=k.drawingTexture,k.drawingTexture=e,this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,k.drawingFameBufferB),this.gl.bindTexture(this.gl.TEXTURE_2D,k.drawingTextureB),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,k.drawingTextureB,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,k.drawingFrameBuffer),this.gl.bindTexture(this.gl.TEXTURE_2D,this.drawingTexture),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,k.drawingTexture,0)}render(){let e=!1,t=k.params.visualizations.sparks,n=k.params.simulation.poolSize;if(!k.params.video.show)return;this.copyVideo&&this.updateTexture(),(!this.mesh.vertexBuffers||!this.mesh.vertexBuffers.vertex)&&this.mesh.compile(),this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture);let r=16*this.gl.canvas.height/9,i=(this.gl.canvas.width-r)/2,a=this.gl.modelviewMatrix;this.gl.projectionMatrix.multiply(a).inverse(),I.swimmersAttributesTexture&&I.swimmersAttributesTexture.bind(1),e=k.classicalOverlayEnabled&&k.drawingFameBuffer!==null,e&&(this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,k.drawingFameBufferB),k.gl.activeTexture(k.gl.TEXTURE15),k.gl.bindTexture(k.gl.TEXTURE_2D,k.drawingTexture)),this.shader.uniforms({ratio_screen:r/this.gl.canvas.width,dx_screen:i/this.gl.canvas.width,calib_MVPMI:k.MVPMI?k.MVPMI.m:new Float32Array(16),uSampler:0,swimmersHelperFunctions:1,screen:15,screenAvailabe:e,iTime:k.getRaceTime(),poolSize:[n.x,n.y,n.z],iResolution:[this.gl.canvas.width,this.gl.canvas.height],sparksEnabled:t.enabled,sparksGlow:t.glow,sparksGlowOffset:t.glowOffset,sparksStroke:t.stroke,sparksNumber:t.num,sparksLengthFactor:t.lengthFactor,sparksSizeFactor:t.sizeFactor,fov:t.fov,thresholdBlending:k.params.video.thresholdBlending,blendingThreshold:k.params.video.blendingThreshold,opacity:k.params.video.opacity,distanceFixed:k.distanceFixed,hideObstructions:k.params.video.hideObstructions,hideObstructionThreshold:k.params.video.hideObstructionThreshold}).draw(this.mesh),this.gl.disable(this.gl.BLEND),this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height),e&&this.#e()}async setTime(e){if(!this.copyVideo||Math.abs(this.video.currentTime-e)<1e-6)return;let t=this.video,n,r=new Promise(e=>{n=e});if(t.currentTime=e,t.requestVideoFrameCallback)t.requestVideoFrameCallback(()=>n());else{let e=()=>{t.removeEventListener(`seeked`,e),n()};t.addEventListener(`seeked`,e,{once:!0})}await r}initTexture(){let e=this.gl.createTexture();this.gl.bindTexture(this.gl.TEXTURE_2D,e);let t=this.gl.RGBA,n=this.gl.RGBA,r=this.gl.UNSIGNED_BYTE,i=new Uint8Array([0,0,255,255]);return this.gl.texImage2D(this.gl.TEXTURE_2D,0,t,1,1,0,n,r,i),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),e}updateTexture(){let e=this.gl.RGBA,t=this.gl.RGBA,n=this.gl.UNSIGNED_BYTE;this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture),this.gl.texImage2D(this.gl.TEXTURE_2D,0,e,t,n,this.video)}#t(){this.hasPausedFirstTime||(this.hasPausedFirstTime=!0,this.video.pause())}setupVideo(e){let t=document.createElement(`video`),n=!1,r=!1;t.playsInline=!0,t.muted=!0,t.loop=!1,t.addEventListener(`playing`,()=>{n=!0,a()},!0),t.addEventListener(`timeupdate`,()=>{r=!0,a()},!0),t.src=e,t.play();let i=this,a=()=>{n&&r&&(i.copyVideo=!0,t.paused||this.#t())};return t}},l=class{constructor(e,{poolSize:t=new GL.Vector(2,2),waterResolution:n=new GL.Vector(256,256),thresholdBlending:r=!1,numSwimmers:i=1,dataFolder:a=null}){this.title=e,this.videos=[],this.poolSize=t,this.waterResolution=n,this.numSwimmers=i,this.thresholdBlending=r,this.dataFolder=a}addVideo(e){this.videos.push(e)}async parseData(e){for(let t=0;t<e.length;t++)await e[t].parseData(this.dataFolder+t+`.csv`)}},u=new t.Vector(0,-4,0),d=class{constructor(e,n,r=new t.Vector(1,1,1),i=null){this.initCenter=new t.Vector(e.x,e.y,e.z),this.center=new t.Vector(e.x,e.y,e.z),this.oldCenter=new t.Vector(e.x,e.y,e.z),this.radius=n,this.cinematic=!1,this.velocity=new t.Vector(0,0,0),this.acceleration=new t.Vector(0,0,0),this.mass=4/3*Math.PI*n**3*1e3,this.invMass=1/this.mass,this.radiusSquared=n*n,this.mesh=t.Mesh.sphere({detail:10}),this.followTarget=!1,this.showStreak=!1,this.buoyancyFactor=i,this.color=r}spawnSplashes(e){if(!k.params.simulation.splashes.enabled&&!k.params.visualizations.showStreaks)return;let n=this.center.subtract(this.oldCenter).multiply(1/e),r=n.z>0?-Math.PI/2:Math.PI/2,i=n.dot(n),a=this.center.subtract(this.velocity.unit());k.isSceneSynchronizedSwimming()&&(a=this.center.clone()),a.y=.15,!k.isSceneSynchronizedSwimming()&&k.params.simulation.splashes.enabled&&this.center.x<100&&Math.abs(this.center.y)<=this.radius&&k.splashParticles.spawnSplash(a,r,Math.sqrt(i),k.params.simulation.splashes.strengthThreshold,{});let o=(this.velocity.length()-1.6)/.9,s={fixed:!0};if(k.isSceneSynchronizedSwimming())s.shrinking=.02;else{let e=new t.Vector(o,0,1-o);e.multiply(1/e.max()),s.color=e}s.shrinking=.2,k.params.visualizations.showStreaks&&this.showStreak&&this.velocity.length()>.01&&k.splashParticles.spawnSplash(this.center,0,o,0,s)}update(e){if(this.moved||(this.oldCenter=new t.Vector(this.center.x,this.center.y,this.center.z)),this.moved=!1,this.cinematic){if(this.followTarget||(this.velocity=new t.Vector(0,0,0)),!this.targetPos||!this.followTarget)return;let n=e/this.targetTime;n=Math.min(Math.max(n,0),1),this.center=this.center.multiply(1-n).add(this.targetPos.multiply(n)),this.velocity=this.center.subtract(this.oldCenter).multiply(1/e),this.targetTime-=e,this.targetTime<0&&(this.targetPos=null)}else{let n=Math.max(0,Math.min(1,(this.radius-this.center.y)/(2*this.radius))),r=this.buoyancyFactor?this.buoyancyFactor:k.params.simulation.buoyancyFactor,i=u.multiply(-r*this.mass*n),a=this.velocity.unit().multiply(-1e3*this.radiusSquared*n*this.velocity.dot(this.velocity));this.addForce(a),this.addForce(i),this.addForce(u.multiply(this.mass)),this.velocity=this.velocity.add(this.acceleration.multiply(e)),this.acceleration=new t.Vector(0,0,0),this.center=this.center.add(this.velocity.multiply(e)),this.center.y<this.radius-k.params.simulation.poolSize.y&&(this.center.y=this.radius-1,this.velocity.y=Math.abs(this.velocity.y)*.7)}}setTarget(e,t){this.targetPos=e,this.targetTime=t}addForce(e){this.cinematic?console.warn(`Trying to add force to a cinematic sphere.`):this.acceleration=this.acceleration.add(e.multiply(this.invMass))}move(e){this.moved=!0,this.oldCenter=new t.Vector(this.center.x,this.center.y,this.center.z),this.center=new t.Vector(e.x,e.y,e.z),this.cinematic||console.warn(`Moving a non cinematic sphere.`)}},f=class{constructor(){this.mesh=new t.Mesh.plane({width:2,height:2,coords:!0,normals:!0}),this.waterTexture=null,this.shader=new t.Shader(`
            out highp vec2 pos;
            out highp vec2 vTextureCoord;


            void main(void) {
                gl_Position = vec4(gl_Vertex.xy, 0., 1.);
                pos = gl_Vertex.xz;

                vTextureCoord = gl_TexCoord.st;
            }
        `,`
            in highp vec2 pos;
            in highp vec2 vTextureCoord;

            uniform sampler2D foamTexPrev;
            uniform sampler2D water;
            uniform float velThreshold;
            uniform float velMax;
            uniform float dispersion;
            uniform float dt;
            uniform float seed;
            uniform float timeVariation;
            uniform float spaceVariation;
            uniform float attenuation;
            uniform vec3 poolSize;

            out vec4 fragColor;

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
            
            float computeFoam(vec2 uv) {
                vec4 info = texture(water, uv);
                float velocity = info.g / dt;

                // if (velocity > .01) return 1.;

                float foam = 0.0;

                // velocity-based foam
                foam += smoothstep(velThreshold, velMax, length(velocity));

                // // curvature-based foam (difference with neighbors)
                // foam += smoothstep(curvThreshold, curvMax, abs(height - avgNeighborHeight));

                // // collision boost (optional)
                // foam += collisionImpact * collisionFactor;

                //TODO î

                // clamp
                foam = clamp(foam, 0.0, 1.0);
                return foam;
            }

            vec2 getPrevUV(vec2 uv) {
                vec4 info = texture(water, uv);
                float velocity = info.g / dt;

                float factor = (.1*dispersion + velocity*.01);

                float perlinDim = 1.;

                vec2 res = uv;

                vec2 pos = uv*poolSize.xz;

                res.x += perlin(pos.xy*spaceVariation + vec2(seed*timeVariation, 0.), perlinDim, 0.) * factor;
                res.y += perlin(pos.yx*spaceVariation + vec2(seed*timeVariation, 0.), perlinDim, 0.) * factor;
                //TODO
                // vec2 vel = texture(velocityTex, res).xy;
                // vec2 prevUV = res - vel * dt;

                // float oldFoam = texture(foamTexPrev, prevUV).r;
                return res;
            }

            void main() {

                float oldFoam = texture(foamTexPrev, getPrevUV(vTextureCoord)).r;
                float newFoam = computeFoam(vTextureCoord); // your velocity/curvature logic

                float foam = oldFoam * (1.-attenuation) + newFoam * 0.2;

                // foam = 1.;

                fragColor = vec4(foam, 0.0, 0.0, 1.0);

            }
        `)}updateFoam(e){if(!this.waterTexture){console.log(`NO WATER TO UPDATE FOAM`);return}this.foamTexNext.swapWith(this.foamTexPrev),this.foamTexNext.drawTo(()=>{this.foamTexPrev.bind(0),k.water.textureA.bind(1),this.shader.uniforms({foamTexPrev:0,water:1,dt:e,seed:k.time,poolSize:[k.params.simulation.poolSize.x,k.params.simulation.poolSize.y,k.params.simulation.poolSize.z],timeVariation:k.params.simulation.foam.timeVariation,spaceVariation:k.params.simulation.foam.spaceVariation,velThreshold:k.params.simulation.foam.velThreshold,velMax:k.params.simulation.foam.velMax,dispersion:k.params.simulation.foam.dispersion,attenuation:k.params.simulation.foam.attenuation}).draw(this.mesh)})}resetTextures(e,n,r){this.foamTexPrev=new t.Texture(e,n,{type:k.gl.FLOAT,filter:k.gl.LINEAR}),this.foamTexNext=new t.Texture(e,n,{type:k.gl.FLOAT,filter:k.gl.LINEAR}),this.waterTexture=r}},p=`
    out vec2 coord;
    uniform vec2 invPoolSizeVertex;
    void main() {
      coord = gl_Vertex.xy * invPoolSizeVertex + 0.5;
      gl_Position = vec4(gl_Vertex.xy * 2. * invPoolSizeVertex, 0., 1.0);
    }
  `,m=`
  uniform vec2 center;
  uniform vec2 u_center_ij;
  uniform float u_currentStep;
  in vec2 coord;
  uniform sampler2D water;
  uniform sampler2D previous;
  uniform vec2 poolSize;
  uniform float legibility;
  out vec4 fragColor;
  void main() {
    ivec2 center_ij = ivec2(u_center_ij);
    int currentStep = int(u_currentStep);
    // if (currentStep == 2) {
    //   fragColor = vec4(0., 1., 1., 1.);
    // }
    // else fragColor = vec4(1., 0., 1., 1.); 
    // return;
    ivec2 pixel = ivec2(gl_FragCoord.xy);
    ivec2 resolution = textureSize(previous, 0);
    vec2 coordinate = (vec2(pixel)+.5) / vec2(resolution);
    vec2 deltaCoordinate = 1. / vec2(resolution);
    vec2 delta = poolSize / vec2(resolution);
    float delta_z = delta.y;
    float delta_x = delta.x;
    float y = texture(water, coordinate).r;
    float alpha = 1. - legibility;

    ivec2 diff = pixel - center_ij;
    vec3 val = texture(previous, coordinate).rgb;
    if (val.b < .5) val.rg = (coordinate-.5)*poolSize;
    if (currentStep == 0) val *= 0.;
    // if (diff == ivec2(0)) val = center;
    if (diff.x == 0) val.r = center.x;
    if (diff.y == 0) val.g = center.y;
    // if (currentStep == 0.)
    // SET Z
    if (abs(diff.y) == currentStep && currentStep != 0) {
      float sgn = abs(float(diff.y)) / float(diff.y);
      vec2 prevCoordinate = vec2(coordinate.x, coordinate.y - sgn*deltaCoordinate.y);
      float z_prev = texture(previous, prevCoordinate).g;
      float y_prev = texture(water, prevCoordinate).r;
      float z = z_prev + sgn* sqrt((y-y_prev)*(y-y_prev)*alpha + delta_z*delta_z);
      // z = z_prev + sqrt((y-y_prev)*(y-y_prev) + delta_z*delta_z);
      val.g = z;
      val.b = 1.;
    }
    //SET X
    if(abs(diff.x) == currentStep && currentStep != 0) {
      float sgn = abs(float(diff.x)) / float(diff.x);
      vec2 prevCoordinate = vec2(coordinate.x - sgn*deltaCoordinate.x, coordinate.y);
      float x_prev = texture(previous, prevCoordinate).r;
      float y_prev = texture(water, prevCoordinate).r;
      float x = x_prev + sgn* sqrt((y-y_prev)*(y-y_prev)*alpha  + delta_x*delta_x);
      // x = x_prev + sqrt((y-y_prev)*(y-y_prev) + delta_x*delta_x);
      val.r = x;
      val.b = 1.;
    }
    // if (max(diff))
    fragColor = vec4(val, 0.);
    // fragColor = vec4((coordinate-.5)*poolSize, 0., 1.);
    // fragColor = vec4(1., 1., 1., 1.);
    
  }
`;function h(e,n=null){this.gl=e,this.visualizationWavesEnabled=!0,this.sqrt_2_PI=Math.sqrt(2*Math.PI),this.foam=new f,this.areaConservationShader=new t.Shader(p,m),this.reset(n),t.Texture.canUseFloatingPointTextures(),this.dropShader=new t.Shader(p,`
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
  `),this.updateShader=new t.Shader(p,`
    uniform sampler2D tex;
    uniform vec2 delta;
    uniform float prev_wr;
    uniform float damping;
    uniform float sqrt_2_PI;
    uniform vec3 poolSize;
    `+s+`
    in vec2 coord;
    out vec4 fragColor;


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
      

    fragColor = info;
  }
  `),this.normalShader=new t.Shader(p,`
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
  `),this.sphereShader=new t.Shader(`
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
  `),this.visualizationWavesShader=new t.Shader(p,`
    uniform sampler2D tex;
    uniform bool add;
    uniform vec3 poolSize;
    uniform bool showWR;
    uniform bool showDivingDistance;
    in vec2 coord;
    out vec4 fragColor;
    uniform float t;

    `+s+`

    const int order = 20;

    uniform float amplitudeFactor;
    uniform float frequencyFactor;
    uniform float amplitude;
    uniform float omega0;
    uniform float waveLength0;
    uniform bool quiverIsActive;

    float rand(vec2 co){return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);}

    float waveFunctionExp(vec2 pos) {
      float y = 0.0;
      for (int i = 0; i < 20; i++) {
        float i_float = float(i); 
        float seed = i_float + .5;
        float kx = rand(vec2(seed, seed));
        float ky = rand(vec2(seed, -seed));
        float omega = rand(vec2(-seed, seed));
        vec2 k = normalize(vec2(kx, ky));
        k *= waveLength0 * pow(frequencyFactor, i_float);
        omega = omega0 * (omega - .5) * pow(frequencyFactor, i_float);
        float s = sin(dot(k, pos) + omega * t) * amplitude * pow(amplitudeFactor, i_float);
        y += exp(s - 1.0) - .37;
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

      if (quiverIsActive) {
        h = waveFunctionExp(coord*poolSize.xz);
      }
      else if (time < 0.) {
        float interval = 5.;
        float intensity = -time / interval;
        // intensity = .5;
        intensity = min(max(intensity, 0.), 1.);
        intensity = 1. - intensity;
        intensity = interpIntensity(intensity);
        h = waveFunctionExp(coord*poolSize.xz) * intensity;
      }
      info.r += add ? h : -h;
      fragColor = info;

    }
    `)}h.prototype.resetTextures=function(){let e=this.gl;this.textureA&&e.deleteTexture(this.textureA.id),this.textureB&&e.deleteTexture(this.textureB.id),this.textureA=new t.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:n}),this.textureB=new t.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:n}),this.foam.resetTextures(this.W,this.H,this.textureA),this.areaConservationTextureA=new t.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:this.gl.LINEAR}),this.areaConservationTextureB=new t.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:this.gl.LINEAR}),this.showAreaConservedGrid=!1,this.showProjectionGrid=!1,this.invPoolSize=new t.Vector(1/k.params.simulation.poolSize.x,1/k.params.simulation.poolSize.y,1/k.params.simulation.poolSize.z);var n=t.Texture.canUseFloatingPointLinearFiltering()?this.gl.LINEAR:this.gl.NEAREST;(!this.textureA.canDrawTo()||!this.textureB.canDrawTo())&&t.Texture.canUseHalfFloatingPointTextures()&&(console.log(`No draw`),n=t.Texture.canUseHalfFloatingPointLinearFiltering()?this.gl.LINEAR:this.gl.NEAREST,this.textureA=new t.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:n}),this.textureB=new t.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:n}),this.areaConservationTextureA=new t.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:n}),this.areaConservationTextureB=new t.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:n}))},h.prototype.reset=function(e=null){this.WR_position=1e5,this.prev_WR_position=0,e===null?(this.W=256,this.H=256):(console.log(`resolution.y : `+e.y),this.W=Math.round(e.x),this.H=Math.round(e.y),console.log(`Using custom resolution:`,this.W,this.H)),I.reset(new t.Vector(this.W,this.H)),this.plane=t.Mesh.plane({detail:255,width:k.params.simulation.poolSize.x,height:k.params.simulation.poolSize.z}),this.delta=new t.Vector(1/this.W,1/this.H),this.resetTextures()},h.prototype.addDrop=function(e,t,n,r){var i=this;this.textureB.drawTo(function(){i.textureA.bind(),i.dropShader.uniforms({invPoolSizeVertex:[i.invPoolSize.x,i.invPoolSize.z],center:[e,t],radius:n,strength:r,poolSize:[k.params.simulation.poolSize.x,k.params.simulation.poolSize.y,k.params.simulation.poolSize.z]}).draw(i.plane)}),this.textureB.swapWith(this.textureA)},h.prototype.addOrRemoveVisualizationWaves=function(e){if(!k.classicalOverlayEnabled){this.prev_WR_position=this.WR_position,this.WR_position=k.getRaceTime()*2.155,this.WR_position>k.params.simulation.poolSize.z&&(this.WR_position=2*k.params.simulation.poolSize.z-this.WR_position);var t=this;this.textureB.drawTo(function(){t.textureA.bind();let n=I.getAttributesTexture();n&&n.bind(1),t.visualizationWavesShader.uniforms({swimmersAttributesTexture:1,showDivingDistance:k.params.visualizations.showDivingDistance,showWR:k.params.visualizations.showWR,invPoolSizeVertex:[t.invPoolSize.x,t.invPoolSize.z],poolSize:[k.params.simulation.poolSize.x,k.params.simulation.poolSize.y,k.params.simulation.poolSize.z],wr:t.WR_position,sqrt_2_PI:t.sqrt_2_PI,add:e,swimmersNumber:k.swimmers.length,time:k.getRaceTime(),t:k.time,amplitudeFactor:k.params.quiver.amplitudeFactor,frequencyFactor:k.params.quiver.frequencyFactor,amplitude:k.params.quiver.amplitude,omega0:k.params.quiver.omega,waveLength0:k.params.quiver.waveLength,quiverIsActive:k.params.quiver.alwaysActive}).draw(t.plane)}),this.textureB.swapWith(this.textureA),this.updateAreaConservation()}},h.prototype.updateSpheres=function(e){if(k.params.simulation.optimized)I.attributes.draw(),this.textureB.drawTo(()=>{this.textureA.bind(),I.bindDisplacementTexture(1),I.bindOldDisplacementTexture(2),this.sphereShader.uniforms({oldDisplacementTexture:2,displacementTexture:1,invPoolSizeVertex:[this.invPoolSize.x,this.invPoolSize.z],poolSize:[k.params.simulation.poolSize.x,k.params.simulation.poolSize.y,k.params.simulation.poolSize.z],optimized:!0}).draw(this.plane),this.textureB.swapWith(this.textureA),I.attributes.draw()});else{let e=[];k.swimmers.forEach(t=>t.spheres.forEach(t=>e.push(t)));for(let t=0;t<e.length;t++){let n=e[t];this.moveSphere(n.oldCenter,n.center,n.radius)}}},h.prototype.moveSphere=function(e,t,n){var r=this;this.textureB.drawTo(function(){r.textureA.bind(),r.sphereShader.uniforms({invPoolSizeVertex:[r.invPoolSize.x,r.invPoolSize.z],oldCenter:e,newCenter:t,radius:n,poolSize:[k.params.simulation.poolSize.x,k.params.simulation.poolSize.y,k.params.simulation.poolSize.z],optimized:!1}).draw(r.plane)}),this.textureB.swapWith(this.textureA)},h.prototype.stepSimulation=function(e){var t=this;this.textureB.drawTo(function(){t.textureA.bind();let e=I.getAttributesTexture();e&&e.bind(2),t.updateShader.uniforms({swimmersAttributesTexture:2,swimmersNumber:k.swimmers.length,invPoolSizeVertex:[t.invPoolSize.x,t.invPoolSize.z],delta:[t.delta.x,t.delta.y],time:k.time,wr:t.WR_position,prev_wr:t.prev_WR_position,poolSize:[k.params.simulation.poolSize.x,k.params.simulation.poolSize.y,k.params.simulation.poolSize.z],sqrt_2_PI:t.sqrt_2_PI,damping:k.params.simulation.waterDamping}).draw(t.plane)}),this.textureB.swapWith(this.textureA),k.params.simulation.foam.enabled&&this.foam.updateFoam(e)},h.prototype.updateNormals=function(){var e=this;this.textureB.drawTo(function(){e.textureA.bind(),e.normalShader.uniforms({invPoolSizeVertex:[e.invPoolSize.x,e.invPoolSize.z],delta:[e.delta.x,e.delta.y]}).draw(e.plane)}),this.textureB.swapWith(this.textureA)},h.prototype.updateAreaConservation=function(){if(!k.params.visualizations.areaConservation.enabled)return;if(k.params.visualizations.areaConservation.optimized){this.updateAreaConservationOptimized();return}var e,t,n;if(this.textureA.type===this.gl.FLOAT)e=this.gl.FLOAT,t=Float32Array,n=`EXT_color_buffer_float`;else if(this.textureA.type===this.gl.HALF_FLOAT_OES)e=this.gl.HALF_FLOAT_OES,t=Uint16Array,n=`EXT_color_buffer_half_float`;else{console.warn(`Unsupported texture type for reading`);return}if(!this.gl.getExtension(n)){console.warn(n+` not available; cannot read pixels`);return}this.fb||=this.gl.createFramebuffer(),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.fb),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,this.textureA.id,0);let r=this.gl.checkFramebufferStatus(this.gl.FRAMEBUFFER);if(r!==this.gl.FRAMEBUFFER_COMPLETE){console.error(`Framebuffer incomplete: `+r+` for texture type `+this.textureA.type),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null);return}if(this.gl.pixelStorei(this.gl.PACK_ALIGNMENT,1),this.readBuf=new t(this.W*this.H*4),this.writeBuf=new Float32Array(this.W*this.H*4),this.gl.readPixels(0,0,this.W,this.H,this.gl.RGBA,e,this.readBuf),!k.params.visualizations.areaConservation.optimized){let e=k.params.simulation.poolSize.x/this.W,t=k.params.simulation.poolSize.z/this.H,n=e*e,r=t*t;if(this.textureA.type===this.gl.FLOAT)for(let e=0;e<this.H;e+=1)for(let t=0;t<this.W;t+=1){let i=(e*this.W+t)*4,a=((this.H-1-e)*this.W+t)*4,o=this.writeBuf[a],s=this.writeBuf[a+1];if(t+1<this.W){let e=this.readBuf[i]-this.readBuf[i+4],t=Math.sqrt(e*e+n);this.writeBuf[a+4]=o+t}if(e+1<this.H){let e=this.readBuf[i]-this.readBuf[i+this.W*4],t=Math.sqrt(e*e+r);this.writeBuf[a-4*this.W+1]=s+t}}this.gl.bindTexture(this.gl.TEXTURE_2D,this.areaConservationTextureA.id),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT,1),this.gl.texSubImage2D(this.gl.TEXTURE_2D,0,0,0,this.W,this.H,this.gl.RGBA,this.gl.FLOAT,this.writeBuf),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.bindTexture(this.gl.TEXTURE_2D,null)}},h.prototype.updateAreaConservationOptimized=function(){this.gl.bindTexture(this.gl.TEXTURE_2D,this.areaConservationTextureA.id),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.NEAREST),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.NEAREST);let e=k.params.flags.flagSize,n=k.params.simulation.poolSize.x/this.W,r=k.params.simulation.poolSize.z/this.H;n*n,r*r;let i=k.swimmers[0].body.center,s=new t.Vector(i.x,i.z);s.y-=a;let c=e.y/2-k.params.simulation.poolSize.z/2+o;s.y=Math.max(s.y,c);let l=Math.max(e.x/n,e.y/r)/2;new t.Vector(k.params.simulation.poolSize.x,k.params.simulation.poolSize.z);let u=s.x/n+this.W/2,d=s.y/r+this.H/2,f=new t.Vector(u,d);for(let e=0;e<=l;e++)this.updateAreaConservationTexturePass(s,f,e);this.gl.bindTexture(this.gl.TEXTURE_2D,this.areaConservationTextureA.id),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.LINEAR),this.gl.bindTexture(this.gl.TEXTURE_2D,null)},h.prototype.updateAreaConservationTexturePass=function(e,t,n){this.gl.viewport(0,0,this.W,this.H),this.areaConservationTextureB.drawTo(()=>{this.areaConservationTextureA.bind(0),this.textureA.bind(1),this.areaConservationShader.uniforms({previous:0,water:1,invPoolSizeVertex:[this.invPoolSize.x,this.invPoolSize.z],u_currentStep:n,center:[e.x,e.y],u_center_ij:[t.x,t.y],poolSize:[k.params.simulation.poolSize.x,k.params.simulation.poolSize.z],legibility:k.params.visualizations.areaConservation.legibility}).draw(this.plane)}),this.areaConservationTextureB.swapWith(this.areaConservationTextureA),this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height)},h.prototype.test2=function(){let e=k.params.simulation.poolSize.x/this.W,n=k.params.simulation.poolSize.z/this.H,r=e*e,i=n*n,o=k.swimmers[0].body.center.clone();o.z-=a;let s=k.params.flags.flagSize;if(Math.max(s.x/e,s.y/n)/2,new t.Vector(k.params.simulation.poolSize.x,k.params.simulation.poolSize.z),o.x/e+this.W/2,o.y/n+this.H/2,this.textureA.type===this.gl.FLOAT)for(let e=0;e<this.H;e+=1)for(let t=0;t<this.W;t+=1){let n=(e*this.W+t)*4,a=((this.H-1-e)*this.W+t)*4,o=this.writeBuf[a],s=this.writeBuf[a+1];if(t+1<this.W){let e=this.readBuf[n]-this.readBuf[n+4],t=Math.sqrt(e*e+r);this.writeBuf[a+4]=o+t}if(e+1<this.H){let e=this.readBuf[n]-this.readBuf[n+this.W*4],t=Math.sqrt(e*e+i);this.writeBuf[a-4*this.W+1]=s+t}}};var g=`#version 300 es
    in vec3 pos;
    in float life;
    in float size;
    in vec3 color;
    in float isFixed;

    out float vLife;
    out vec3 vColor;
    out float altitude;
    out float vFixed;
    out float vSize;

    uniform mat4 MVM;
    uniform mat4 projection;
    uniform bool showStreaks;
    uniform bool showSplashes;


    void main() {
        vec4 posInView = MVM * vec4(pos, 1.);
        gl_Position = projection * posInView;
        // gl_Position = vec4(0., 0., 0., 1.);
        gl_PointSize = size * 5000. / -posInView.z;

        // if (isFixed > 0.) gl_PointSize = 500. / -posInView.z;

        if (isFixed > 0. && !showStreaks) gl_PointSize = 0.;
        if (isFixed == 0. && !showSplashes) gl_PointSize = 0.;

        vLife = life;
        vColor = min(color, 1.);
        altitude = pos.y;
        vFixed = isFixed;
        vSize = size;
    }

`,_=`#version 300 es
    precision mediump float;

    in float vLife;
    in vec3 vColor;
    in float altitude;
    in float vFixed;
    in float vSize;

    out vec4 fragColor;

    float max3(vec3 v) {
        return max(max(v.x, v.y), v.z);
    }

    void main() {
        vec3 col = vColor;
        // if (isFixed) {
        //     col = vec3(vColor, 0., 1. - vColor);
        //     col /= max3(col);
        // }
        vec2 uv = gl_PointCoord - 0.5;

        float d = length(uv);

        // soft circle
        float alpha = smoothstep(0.5, 0.0, d);

        if (vSize >= .3) alpha *= 2.; 

        // fade with life
        if(vFixed < .1) alpha *= vLife;
        else alpha *= pow(vLife, 1.);

        if (altitude < 0. && vFixed >.1) alpha /= (1.-altitude)*2.;

        if (altitude < 0. && vFixed < .1) alpha /= (1.-altitude)*4.;

        if (vLife > 1.) alpha = 0.;
        fragColor = vec4(col, alpha);
    }

`,v=-9.8,y=.01,b=class{constructor(e,t,n,r,{shrinking:i=1,size:a=null}){this.pos=e,this.vel=t,this.fixed=n,this.color=r,this.life=1,this.size=a||Math.random()*.05+.02,this.shrinking=i}update(e){if(this.fixed){this.life-=e*.15*this.shrinking;return}this.life-=e*1.5*this.shrinking,this.vel.y+=v*e,this.pos=this.pos.add(this.vel.multiply(e)),this.vel=this.vel.multiply(1-y),this.size*=1-y*this.shrinking}},x=class{constructor(e){this.gl=e,this.particles=[],this.particleBuffer=this.gl.createBuffer(),this.initPrograms()}spawnSplash(e,n,r,i,{fixed:a=!1,color:o=new t.Vector(1,1,1),speed0:s=1,maxParticles:c=15,shrinking:l=null,size:u=null}){let d=l===null?1:l;if(a){let n=new t.Vector(0,0,0),i=o||new t.Vector(r,0,1-r);o===null&&i.multiply(1/i.max());let s=new b(e,n,a,i,{shrinking:d,size:u||.1});s.life+=d*.1,this.particles.push(s);return}let f=Math.min(c,r*20);for(let n=0;n<f;n++){let n=(Math.random()-.5)*Math.PI,r=Math.random()*2*Math.PI,i=s*(.5+Math.random()),c=new t.Vector(Math.sin(n)*Math.cos(r)*i,Math.cos(n)*i,Math.sin(n)*Math.sin(r)*i);this.particles.push(new b(e,c,a,o,{shrinking:d}))}}update(e){this.particles.forEach((t,n)=>{t.update(e),t.life<=0&&this.particles.splice(n,1)})}buildShader(e,t){let n=this.gl.createShader(t);return this.gl.shaderSource(n,e),this.gl.compileShader(n),n}createProgram(e){let t=this.gl.createProgram();return e.forEach(e=>{this.gl.attachShader(t,e)}),this.gl.linkProgram(t),t}checkShaders(e,t,n){this.gl.getShaderParameter(e,this.gl.COMPILE_STATUS)||console.error(this.gl.getShaderInfoLog(e)),this.gl.getShaderParameter(t,this.gl.COMPILE_STATUS)||console.error(this.gl.getShaderInfoLog(t)),this.gl.getProgramParameter(n,this.gl.LINK_STATUS)||console.error(this.gl.getProgramInfoLog(n))}buildProgram(e,t){let n=this.buildShader(e,this.gl.VERTEX_SHADER),r=this.buildShader(t,this.gl.FRAGMENT_SHADER),i=this.createProgram([n,r]);return this.checkShaders(n,r,i),i}initPrograms(){this.program=this.buildProgram(g,_)}draw({showStreaks:e=!0,showSplashes:t=!0}){let n=this.gl;n.enable(n.BLEND),n.blendFunc(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA);let r=[];this.particles.forEach(e=>{let t=e.pos;r.push(t.x,t.y,t.z,e.life,e.size,e.color.x,e.color.y,e.color.z,e.fixed)}),n.bindBuffer(n.ARRAY_BUFFER,this.particleBuffer),n.bufferData(n.ARRAY_BUFFER,new Float32Array(r),n.DYNAMIC_DRAW),n.useProgram(this.program);let i=n.getUniformLocation(this.program,`MVM`),a=new Float32Array(n.modelviewMatrix.m);n.uniformMatrix4fv(i,!0,a);let o=n.getUniformLocation(this.program,`projection`),s=new Float32Array(n.projectionMatrix.m);n.uniformMatrix4fv(o,!0,s);let c=n.getUniformLocation(this.program,`showStreaks`);n.uniform1i(c,e);let l=n.getUniformLocation(this.program,`showSplashes`);n.uniform1i(l,t);let u=n.getAttribLocation(this.program,`pos`),d=n.getAttribLocation(this.program,`life`),f=n.getAttribLocation(this.program,`size`),p=n.getAttribLocation(this.program,`color`),m=n.getAttribLocation(this.program,`isFixed`),h=n.FLOAT,g=0;n.bindBuffer(n.ARRAY_BUFFER,this.particleBuffer),n.vertexAttribPointer(u,3,h,!1,36,g),n.enableVertexAttribArray(u),g=12,n.vertexAttribPointer(d,1,h,!1,36,g),n.enableVertexAttribArray(d),g=16,n.vertexAttribPointer(f,1,h,!1,36,g),n.enableVertexAttribArray(f),g=20,n.vertexAttribPointer(p,3,h,!1,36,g),n.enableVertexAttribArray(p),g=32,n.vertexAttribPointer(m,1,h,!1,36,g),n.enableVertexAttribArray(m),n.drawArrays(n.POINTS,0,this.particles.length),n.disable(n.BLEND)}};function S(e){let t={};for(let n=0;n<e.length;n++)t[e[n]]=n;return t}var C=new t.Vector(1e3,0,-1e3),w=[`none`,`only medals`,`all`],T=[`neighbours`,`per swimmer`],E=[`none`,`cycle frequency`,`speed`,`acceleration`],D={none:{value:0,name:`PARAMETER_NONE`},"cycle frequency":{value:1,name:`PARAMETER_CYCLES`},speed:{value:2,name:`PARAMETER_SPEED`},acceleration:{value:3,name:`PARAMETER_ACCELERATION`}},O=[`realistic`,`height field`,`lambert`,`toon`],ee={realistic:{value:0,name:`RENDERING_REALISTIC`},"height field":{value:1,name:`RENDERING_HEIGHT_FIELD`},lambert:{value:2,name:`RENDERING_LAMBERT`},toon:{value:3,name:`RENDERING_TOON`}},k=new class{constructor(){this.params={numSteps:2,fov:45,visualizations:{enabled:!0,showFlags:!1,showWR:!1,showSpeed:!1,showDivingDistance:!0,showFinishTimes:!1,showStreaks:!1,customWaterPerturbation:`none`,waterColorParameter:`none`,customParametersList:E,customParametersDict:D,PARAMETER_NONE:`none`,PARAMETER_CYCLES:`cycle frequency`,PARAMETER_SPEED:`speed`,PARAMETER_ACCELERATION:`acceleration`,showSwimmersLines:`none`,swimmersLinesList:w,showSwimmersLinesDict:S(w),swimmersLinesMode:`neighbours`,swimmersLinesModeList:T,swimmersLinesModeDict:S(T),medalsModeBeforeFinish:`none`,medalsModesDict:{none:0,stars:1,bright:2,lanes:3},medalsModeAfterFinish:`none`,areaConservation:{enabled:!0,optimized:!1,legibility:0},rendering:`realistic`,renderingList:O,renderingDict:ee,transitionBeginTime:null,shadow:{enabled:!0,shadowRadius:.5,shadowPower:.5,showCircle:!0,circleRadius:.6,circleStroke:.15},sparks:{enabled:!1,glow:5,glowOffset:.5,lengthFactor:1,stroke:.01,num:40,sizeFactor:50,fov:Math.PI/4}},swimmers:{showSpheres:!0,useTracking:!1},video:{thresholdBlending:!1,blendingThreshold:.41,show:!1,opacity:1,hideObstructions:!1,hideObstructionThreshold:.35},simulation:{heightLimit:.04,optimized:!1,waterDamping:.02,poolSize:new t.Vector(4,1,4),buoyancyFactor:1.1,foam:{enabled:!0,velThreshold:.35,velMax:3,dispersion:.015,timeVariation:2.5,spaceVariation:25,attenuation:.015},splashes:{enabled:!0,strengthThreshold:2}},quiver:{amplitudeFactor:.78,frequencyFactor:1.2,amplitude:.1,omega:2,waveLength:1,alwaysActive:!1},cornerView:{show:!0},chronoPhotography:{available:!1},flags:{flagSize:new t.Vector(1.5,2)}},this.resolution=new t.Vector(256,256),this.gl=t.create({preserveDrawingBuffer:!0}),this.gl.canvas.tabIndex=0,this.originalVisParams=JSON.parse(JSON.stringify(this.params.visualizations)),delete this.originalVisParams.shadow,delete this.originalVisParams.sparks,this.useConfigFile=!1,this.time=0,this.swimmers=[],this.translateX=0,this.translateY=0,this.zoomDistance=4,this.angleX=-25,this.angleY=-200.5,this.angleZ=0,this.water=null;let e=new l(`—`,{poolSize:new t.Vector(2,1,2),waterResolution:new t.Vector(256,256),numSwimmers:1}),r=new n({});e.addVideo(new c(this.gl,``,r));let i=new l(`100m freestyle`,{poolSize:new t.Vector(25,2,50),waterResolution:new t.Vector(1024,2048),numSwimmers:10,thresholdBlending:!0,dataFolder:`./assets/race-data/`}),a=new n({tx:-.53,ty:1.25,zoom:47.86,ax:-29,ay:-260.5,az:-5,fov:39.98});i.addVideo(new c(this.gl,`swimming-race.mp4`,a,16.5)),this.currentVideo=i.videos[0];let o=new l(`synchronized swimming`,{poolSize:new t.Vector(25,2,30),waterResolution:new t.Vector(1024,2048),numSwimmers:2,dataFolder:`./assets/synchronized-swimming-data/`}),s=new n({tx:-1.32,ty:.4,zoom:32.41,ax:-18,ay:-291.5,az:1,fov:42.8});o.addVideo(new c(this.gl,`synchronized-swimming.mp4`,s,0)),this.scenesList=[e,i,o],this.scenes={},this.scenesList.forEach(e=>this.scenes[e.title]=e),this.currentScene=e,this.paused=!1,this.configPlayButton(),this.transitions={},this.playingDemo=!1,this.renderWater=!0,this.renderCube=!0,this.spheresRadiusCoeff=1,this.distanceFixed=0,this.chronoFrameBuffer=this.gl.createFramebuffer(),this.drawingFrameBuffer=null,this.drawingFameBufferB=this.gl.createFramebuffer(),this.drawingTextureB=this.gl.createTexture(),this.drawingTexture=this.gl.createTexture(),this.resetDrawingTexture(),this.cornerView=!1,this.splashParticles=new x(this.gl),this.floaters=[],this.showTimeline=!0,this.MVPMI=null,this.bubbleSpheres=[],this.classicalOverlayEnabled=!1,this.hideFloaters=!1}hideEditorPanel(e){let t=document.getElementById(`event-editor`);t&&(t.style.display=e?`block`:`none`)}resetDrawingTexture(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.chronoFrameBuffer),this.gl.bindTexture(this.gl.TEXTURE_2D,this.drawingTexture);let e=this.gl.canvas.width,t=this.gl.canvas.height;this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,e,t,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,null),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,this.drawingTexture,0);let n=this.gl.createRenderbuffer();this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,n),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,this.gl.DEPTH_COMPONENT16,e,t),this.gl.framebufferRenderbuffer(this.gl.FRAMEBUFFER,this.gl.DEPTH_ATTACHMENT,this.gl.RENDERBUFFER,n),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.drawingFameBufferB),this.gl.bindTexture(this.gl.TEXTURE_2D,this.drawingTextureB),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,e,t,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,null),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,this.drawingTextureB,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null)}configStopButton(){this.stopButton=document.getElementById(`stop-button`),this.stopButton.addEventListener(`click`,()=>{this.stopRace()})}configPlayButton(){this.configStopButton(),this.playButton=document.getElementById(`play-button`),this.playButton.addEventListener(`click`,()=>{this.playButton.textContent==`pause`?this.pause():(I.raceHasStarted||this.startRace(),this.play())})}setCalibration(e){this.translateX=e.tx,this.translateY=e.ty,this.zoomDistance=e.zoom,this.angleX=e.ax,this.angleY=e.ay,this.angleZ=e.az,this.params.fov=e.fov,this.gl.matrixMode(this.gl.PROJECTION),this.gl.loadIdentity(),this.gl.perspective(this.params.fov,this.gl.canvas.width/this.gl.canvas.height,.01,100),this.gl.matrixMode(this.gl.MODELVIEW)}#e(e){console.log(`SET POOL SIZE : `+e.z),this.params.simulation.poolSize.x=e.x,this.params.simulation.poolSize.y=e.y,this.params.simulation.poolSize.z=e.z}#t(){this.floaters=[];let e=.1,n=this.params.simulation.poolSize,r=n.x/10,i=n.z/(2*e),a=-n.z/2,o=-n.x/2,s=new t.Vector(0,1/2,0),c=new t.Vector(1/2,1/2,0),l=new t.Vector(0,.5/2,1/2),u=new t.Vector(1/2,0,0),f=[s,l,l,c,c,c,l,l,s];for(let n=1;n<10;n++)for(let s=0;s<i;s++){let i=new t.Vector(o+n*r,0,a+e+s*2*e),c=f[n-1];(Math.abs(i.z)>=20||Math.abs(i.z)<=.5||Math.abs(Math.abs(i.z)-10)<=.25)&&(c=u),this.floaters.push(new d(i,e,c,2.5))}}updateFloaters(e){}isSceneSynchronizedSwimming(){return this.currentScene.title==`synchronized swimming`}setMVPMI(){let e=this.gl.modelviewMatrix,t=this.gl.projectionMatrix.multiply(e);this.MVPMI=t.inverse(),console.log(`MVPMI set`)}async setScene(e){if(console.log(`SET SCENE : `+e),this.currentScene=this.scenes[e],this.currentScene){this.#e(this.currentScene.poolSize),this.currentScene.title==`100m freestyle`?this.#t():this.floaters=[];let e=document.getElementById(`time-slider-container`);this.currentVideo=this.currentScene.videos[0],this.params.video.show=!!this.currentVideo.video,this.params.swimmers.showSpheres=!this.currentVideo.video,e.hidden=!this.currentVideo.video,this.currentScene.title==`—`?this.params.simulation.waterDamping=.02:this.params.simulation.waterDamping=.1;let n=this.currentScene.numSwimmers;if(console.log(`num swimmers : `+n),this.swimmers.length!=n){for(let e=this.swimmers.length;e<n;e++){let e=new I(new t.Vector(0,0,0));this.swimmers.push(e)}for(let e=this.swimmers.length;e>n;e--)this.swimmers=this.swimmers.slice(1);this.swimmers.forEach(e=>e.waterDamping=this.params.simulation.waterDamping)}this.params.swimmers.useTracking=!0,await this.currentScene.parseData(this.swimmers),this.swimmers.forEach(e=>e.update(0)),console.log(`scene name : `+this.currentScene.title),this.setCalibration(this.currentVideo.calibration),this.resolution=this.currentScene.waterResolution,this.params.video.thresholdBlending=this.currentScene.thresholdBlending,this.currentScene.thresholdBlending?this.params.video.opacity=1:this.params.video.opacity=.5,this.params.visualizations.areaConservation.enabled=!1,this.stopRace(),this._reset(),this.params.simulation.optimized=!!this.currentVideo.video,this.useConfigFile=!this.isSceneSynchronizedSwimming(),this._setPannelMinimized(this.currentScene.title!=`100m freestyle`),this.isSceneSynchronizedSwimming()&&(this.params.simulation.foam.velThreshold=0,this.params.simulation.foam.velMax=2.2,this.params.simulation.foam.dispersion=.0025,this.params.simulation.foam.timeVariation=2.5,this.params.simulation.foam.spaceVariation=10,this.params.simulation.foam.attenuation=2e-4)}}useGravity(e){I.useGravity=e;for(let e of k.swimmers)e.body.cinematic=!I.useGravity}isOneVisualizationEnabled(){return this.params.visualizations.showFlags||this.params.visualizations.medalsModeBeforeFinish!=`none`||this.params.visualizations.medalsModeAfterFinish!=`none`||this.params.visualizations.showWR||this.params.visualizations.showSpeed||this.params.visualizations.showDivingDistance}updateTime(e){this.time+=e,this._updateDistanceMarker&&this._updateDistanceMarker()}getRaceTime(){return I.raceHasStarted?this.time-this.currentVideo.videoStartTime:0}resetParams(){Object.entries(this.originalVisParams).forEach(e=>{let t=e[0],n=e[1];this.params.visualizations[t]=n}),this.params.visualizations.areaConservation.enabled=!1}updateEventIndex(){for(this.currentEventIndex=0;this.events[this.currentEventIndex]&&this.events[this.currentEventIndex].time<this.getRaceTime();)this.currentEventIndex++;this.currentEventIndex>0&&this.currentEventIndex--}setRaceTime(e){let t=this.currentVideo.videoStartTime?this.currentVideo.videoStartTime:0;this.time=t+e,this.currentVideo.video&&this.currentVideo.setTime(this.time),this.events&&(this.updateEventIndex(),this.resetParams())}showTexts(e){document.getElementById(`h`).hidden=!e,e?this.showCommands&&(document.getElementById(`commands`).hidden=!1):(this.showCommands=!document.getElementById(`commands`).hidden,document.getElementById(`commands`).hidden=!0)}startRace(){this.currentVideo.videoStartTime>=3?this.setRaceTime(-3):this.setRaceTime(0),this.currentVideo.video&&this.currentVideo.video.play(),this.swimmers.forEach(e=>e.startRace()),I.raceHasStarted=!0,I.useGravity=!0,this.water.resetTextures(),this.water.WR_position=0,this.stopButton.hidden=!1,this._clearChronoTexture(this.gl.canvas.width,this.gl.canvas.height,this.gl),this.showTexts(!1)}stopRace(){this.paused&&this.play(),this.setRaceTime(0),this.currentVideo.video&&this.currentVideo.video.pause(),this.swimmers.forEach(e=>e.swim(!1)),I.raceHasStarted=!1,this.water.resetTextures(),this.playButton.textContent=`play`,this.stopButton.hidden=!0,this.showTexts(!0)}pause(){this.paused=!0,this.pauseVideo(),this.playButton.textContent=`play`}play(){this.paused=!1,I.raceHasStarted&&(this.playVideo(),this.playButton.textContent=`pause`)}pauseVideo(){this.currentVideo.video&&this.currentVideo.video.pause()}playVideo(){this.currentVideo.video&&(this.currentVideo.video.play(),this.currentVideo.video.currentTime=this.time)}renderVideo(){this.currentVideo.video&&this.currentVideo.render()}parseConfigFile(e){fetch(e).then(e=>e.text()).then(e=>{this.events=JSON.parse(e),this.currentEventIndex=0,this._renderTimeline&&this._renderTimeline()})}updateTransitions(){Object.entries(this.transitions).forEach(e=>{let t=e[0],n=e[1],r=this.getRaceTime()-n.beginTime;if(r>n.duration){delete this.transitions[t];return}n.show?n.opacity=r/n.duration:n.opacity=1-r/n.duration})}updateParams(){if(!I.raceHasStarted||!this.events||!this.useConfigFile)return;let e=this.events[this.currentEventIndex];if(!e)return;let t=e.rankSwimmerToggle;if(t||=1,e.distance&&this.swimmers[t-1].getDistanceTraveled()>=e.distance||e.time!==void 0&&this.getRaceTime()>=e.time){this.currentEventIndex++;let t=e.transition&&e.transition.type==`dissolve`;Object.entries(e.params).forEach(n=>{let r=n[0],i=n[1];r!==`transition`&&(t&&(i===!0||i===!1)&&(this.transitions[r]={opacity:1-1*i,show:i,beginTime:this.getRaceTime(),duration:e.transition.duration}),this.params.visualizations[r]=i)})}}chronoPhotography({circle:e=!1}){console.log(`shoot`),this.distanceFixed=this.swimmers[0].getDistanceTraveled(),console.log(`distance fixed : `+this.distanceFixed),this._fixTexture(e)}recalibrate(){this.currentVideo&&this.setCalibration(this.currentVideo.calibration)}async updateVideoForOfflineRendering(){if(this.currentVideo&&this.currentVideo.video){if(this.time<0||this.time>this.currentVideo.video.duration)return;await this.currentVideo.setTime(this.time)}}#n(){this.classicalOverlayEnabled=!1,this.params.chronoPhotography.available=!1,this.drawingFrameBuffer=null,this.parseConfigFile(`./assets/vis-config.json`),this.stopRace(),this.params.simulation.splashes.enabled=!0,this.params.visualizations.shadow.enabled=!0,this.startRace(),this.params.video.hideObstructions=!0,this.params.cornerView.show=!1,this.water.resetTextures(),this.demoTime=0,this.demoSecondPartStarted=!0}#r(){this.stopRace(),this.params.video.hideObstructions=!1,this.demoTime=0,this.params.visualizations.shadow.enabled=!1,this.setScene(`—`).then(()=>{this.useGravity(!0),this.swimmers[0].body.center.y=.5,this.translateX=200,this.params.simulation.splashes.enabled=!1,this.pause()}),this.demoPart3Started=!0}#i(){this.params.cornerView.show=!1,this.params.simulation.splashes.enabled=!0,this.hideFloaters=!0,this.stopRace(),this.parseConfigFile(`./assets/vis-config-demo-2.json`),this.setScene(`100m freestyle`).then(()=>{this.translateX=200,this.swimmers.forEach(e=>e.body.move(C))}),this.classicalOverlayEnabled=!1,this.params.video.show=!1,this.params.swimmers.showSpheres=!0,this.spheresRadiusCoeff=1,this.swimmersShown=0,this.useGravity(!0),this.params.simulation.buoyancyFactor=1.5,this.params.visualizations.shadow.enabled=!1,this.renderWater=!1,this.hideFloaters=!0,this.demoTime=0,this.demoPart4Started=!0}#a(){this.stopRace(),this.parseConfigFile(`./assets/vis-config-classical-overlay.json`),this.setScene(`synchronized swimming`).then(()=>{this.startRace(),this.params.video.hideObstructions=!1}),this.demoPart5Started=!0,this.demoTime=0}async launchDemo(){this.playingDemo=!0,this.parseConfigFile(`./assets/vis-config-classical-overlay.json`),this.params.chronoPhotography.available=!0,this.drawingFrameBuffer=this.chronoFrameBuffer,console.log(`Launch demo`),await this.setScene(`100m freestyle`).then(()=>{this.params.video.show=!1,this.translateX=200}),this._gui.hide(),document.getElementById(`event-editor`).hidden=!0,document.getElementById(`time-slider-container`).hidden=!0,document.getElementById(`h`).hidden=!0,this.demoTime=0,this.classicalOverlayEnabled=!0,this.startRace(),this.params.visualizations.showDivingDistance=!1,this.params.visualizations.shadow.enabled=!1,this.params.simulation.splashes.enabled=!1,this.demoEvents=[{time:0,text:`Situated Water-Based Visual Effects for Sports Video Augmentation 
 Submission to IEEE Vis 2026 #1528`,duration:4,pause:!0},{time:0,text:`Reproduction of the current TV approach`,duration:2,action:()=>{this.params.video.show=!0,this.translateX=this.currentVideo.calibration.tx}},{time:8,text:`Currently they use an overlay projection plan.`,duration:2,action:()=>this.showOverlayPlane=!0,pause:!1},{time:10,text:`Then the flags are drawn on the overlay.`,duration:2,action:()=>this.params.visualizations.showFlags=!0,pause:!1},{time:12,text:`The overlay is transparent where nothing is drawn.`,duration:3,action:()=>this.showOverlayPlane=!1,pause:!1},{time:16,text:`Our method`,duration:3,action:()=>this.#n(),pause:!1},{time:4,text:`We use water-based visual effects to amplify swimming race data`,duration:5,pause:!1},{time:15,text:`Method breakdown`,duration:3,action:()=>this.#r(),pause:!0},{time:.5,text:`Evan Wallace's WebGL water`,duration:3.5,pause:!1},{time:4,text:`nothing`,duration:0,action:()=>this.#i(),pause:!1},{time:0,text:`We adapted to swimming`,duration:2,action:()=>this.showOverlayPlane=!1,pause:!0},{time:.5,text:`Pool`,duration:1,pause:!1},{time:1.5,text:`Water`,duration:1,pause:!1},{time:2.5,text:`Floaters`,duration:1,action:()=>this.hideFloaters=!1,pause:!1},{time:3.5,text:`Spheres`,duration:2,pause:!1},{time:6,text:`Let' start a swimming race`,duration:1},{time:7.5,text:`Flag appear with water-based transition`,duration:2.5,pause:!0,calib:new n({tx:16.9,ty:6.9,zoom:20.5,ax:-37,ay:-126.5,az:-5,fov:39.98})},{time:11.5,text:`Diving points and swimmers' shadows`,duration:2.5,pause:!0,calib:new n({tx:9,ty:-10,zoom:3,ax:-30,ay:-15,az:0,fov:39.98})},{time:14.8,text:`Breakout points`,duration:2,pause:!0,calib:new n({tx:-3,ty:-7,zoom:12,ax:-30,ay:10,az:0,fov:39.98})},{time:15.7,text:`Speeds`,duration:1.5,pause:!1},{time:17.2,text:`First swimmers lines`,duration:1.5,pause:!1},{time:18.7,text:`Potential medals`,duration:1.5,pause:!1},{time:20.2,text:`World record line`,duration:1.5,pause:!1},{time:22.5,text:`Embedding in the original swimming race video`,duration:2,pause:!1},{time:24.5,text:`Hiding spheres`,duration:2.5,pause:!1},{time:27,text:`Hiding obstructions`,duration:2,pause:!1},{time:28.5,text:`Corner view from above`,duration:2,action:()=>this.params.cornerView.show=!0,pause:!1},{time:33.5,text:`Transferring to synchronized swimming`,duration:20,action:()=>this.#a(),pause:!1},{time:27.5,text:`Artificially enhanced foam to draw the trajectory`,duration:2,pause:!1},{time:30.1,text:`Splashes to emphasize an event`,duration:2,pause:!0}],this.currentDemoEvent=this.demoEvents.shift()}stopDemo(){this.playingDemo=!1,this.setScene(`—`),document.getElementById(`event-editor`).hidden=!1,document.getElementById(`time-slider-container`).hidden=!1,document.getElementById(`h`).hidden=!1,this.renderWater=!0,this.renderCube=!0,this.params.visualizations.shadow.enabled=!0,this._gui.show(),this.params.simulation.buoyancyFactor=1.1}#o(e,n){let r=Math.floor((e-n)/.1);if(this.swimmersShown<10&&r>=this.swimmersShown){console.log(`swimmers shown : `+this.swimmersShown),console.log(`next index swimmer : `+r),console.log(`num swimmers : `+this.swimmers.length);let e=this.params.simulation.poolSize.x;-e/2+e/20+r*e/10;let n=this.swimmers[r];n.body.move(new t.Vector(n.body.initCenter.x,.5,0)),this.swimmersShown++}}#s(e,t,n){if(n<e)return 0;if(n>t)return 1;let r=(n-e)/(t-e);return 1-(Math.cos(r*Math.PI)+1)/2}#c(e,n,r,i,a){let o=this.#s(r,i,a);console.log(`t norm : `+o);let s=(e,t,n,r=1)=>n**+r*t+(1-n**+r)*e;return new t.Vector(s(e.x,n.x,o),s(e.y,n.y,o,20),s(e.z,n.z,o,2))}updateDemo(e){if(!this.playingDemo)return;if(this.demoEventDisplayed){if(this.demoEventDuration+=e,this.currentDemoEvent.calib){let t=this.currentDemoEvent.duration,n;n=this.demoEventDuration<t/6||this.demoEventDuration>5*t/6?0:this.demoEventDuration<=t/2?(this.demoEventDuration-t/6)/(t/3):1-(this.demoEventDuration-t/2)/(t/3),this.demoShowVideoTime||(this.demoSavedCalib.ay+=15*e),this.setCalibration(this.demoSavedCalib.interpolate(this.currentDemoEvent.calib,n,.33))}if(this.demoEventDuration>this.currentDemoEvent.duration)this.demoEventDisplayed=!1,this.play(),this.demoSavedCalib&&this.setCalibration(this.demoSavedCalib),this.demoSavedCalib=null,this.currentDemoEvent=this.demoEvents.shift(),document.getElementById(`demo-text`).innerText=``;else if(this.currentDemoEvent.pause)return}this.demoTime+=e,!this.demoEventDisplayed&&this.currentDemoEvent&&this.demoTime>this.currentDemoEvent.time&&(this.demoEventDisplayed=!0,this.demoEventDuration=0,this.currentDemoEvent.pause&&this.pause(),document.getElementById(`demo-text`).innerText=this.currentDemoEvent.text,this.currentDemoEvent.action&&this.currentDemoEvent.action(),this.currentDemoEvent.calib&&(this.demoSavedCalib=new n({tx:this.translateX,ty:this.translateY,zoom:this.zoomDistance,ax:this.angleX,ay:this.angleY,az:this.angleZ,fov:this.params.fov})));let r=this.demoTime;if(!this.demoPart3Started||this.demoPart5Started)return;let i=1.5,a=4.5,o=6.5;if(r<=1){let e=this.#s(0,1,r);this.translateX=e*this.currentVideo.calibration.tx+(1-e)*200}if(this.demoPart4Started)this.demoShowVideoTime||(this.angleY+=15*e);else return;if(!this.renderWater&&r>i&&(this.renderWater=!0),r>i&&r<2)for(var s=0;s<10;s++)this.water.addDrop(Math.random()*2-1,Math.random()*2-1,.06,s&1?.6:-.6);this.#o(r,3.5),!I.raceHasStarted&&r>=a&&r<o&&(this.params.simulation.splashes.enabled=!1,this.swimmers.forEach(e=>{e.body.cinematic=!0;let n=new t.Vector(e.body.center.x,0,0),i=new t.Vector(e.body.center.x,1,-this.params.simulation.poolSize.z/2);e.body.move(this.#c(n,i,a,o,r))})),!I.raceHasStarted&&r>=o&&(this.params.simulation.buoyancyFactor=1.1,this.params.simulation.splashes.enabled=!0,this.params.visualizations.shadow.enabled=!0,this.startRace()),!this.demoShowVideoTime&&this.angleY>=this.currentVideo.calibration.ay+360&&(this.demoShowVideoTime=22.5),!this.params.video.show&&this.demoShowVideoTime&&r>=this.demoShowVideoTime&&(this.params.video.show=!0,this.params.video.opacity=0),this.params.video.show&&r<=this.demoShowVideoTime+2&&(this.params.video.opacity=(r-this.demoShowVideoTime)/2,console.log(`opacity : `+this.params.video.opacity));let c=null;this.demoShowVideoTime&&(c=this.demoShowVideoTime+2+2),this.params.video.show&&r>this.demoShowVideoTime+2&&r<c&&(this.spheresRadiusCoeff=1-(r-(this.demoShowVideoTime+2))/2);let l=null;c&&(l=c+.5),l&&r>l&&r<l+2&&(this.params.video.hideObstructions=!0,this.params.video.hideObstructionThreshold=(r-l)/2*.5)}};k.parseConfigFile(`./assets/vis-config.json`);var te=`#version 300 es
    const float ARM_DELTA_X = float(`+r+`);
    const float FOOT_DELTA_X = float( `+i+`);
    const float FOOT_DELTA_Z = float( 1);
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

`,ne=`#version 300 es
    precision highp float;
    in float fragCyclePhase;
    in float fragAltitude;
    const float PI = 3.141592;
    out vec4 fragColor;
    void main() {
        fragColor = vec4(fragAltitude, fragCyclePhase / (2. * PI), 1., 1.);
    }
`,A=`#version 300 es
    in vec2 iVertex;
    out vec2 fragCoord;
    void main() {
        fragCoord = iVertex * .5 + .5;
        gl_Position = vec4(iVertex.xy, 0., 1.);
    }
`,re=`#version 300 es
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
`,ie=new Float32Array([-1,-1,1,-1,1,1,-1,1]),ae=new Uint16Array([0,1,2,2,3,0]),oe=class{constructor(){this.numVecAttributes=3,this.maxNumSwimmer=10,this.gl=k.gl;let e=this.gl.NEAREST;this.texture=new t.Texture(this.numVecAttributes,this.maxNumSwimmer,{type:this.gl.FLOAT,filter:e}),this.initPrograms(),this.indexBuffer=this.gl.createBuffer(),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.indexBuffer),this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER,ae,this.gl.STATIC_DRAW),this.vboPlane=this.gl.createBuffer(),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vboPlane),this.gl.bufferData(this.gl.ARRAY_BUFFER,ie,this.gl.STATIC_DRAW),this.vboPoints=this.gl.createBuffer()}#e(e){let t=function(e,t){return t.getDistanceTraveled()-e.getDistanceTraveled()},n=0;e.forEach(e=>{e.hasFinished()>.1&&n++});let r=e.slice(0,n).concat(e.slice(n).sort(t));for(let t=0;t<e.length;t++)e[t]=r[t];return e}#t(e,t){this.swimmersAttributes[this.numVecAttributes*4*e]=t.center.x,this.swimmersAttributes[this.numVecAttributes*4*e+1]=t.center.z,this.swimmersAttributes[this.numVecAttributes*4*e+7]=t.center.y}#n(e,t){this.#t(e,t.body),this.swimmersAttributes[this.numVecAttributes*4*e+2]=t.divingDistance,this.swimmersAttributes[this.numVecAttributes*4*e+3]=t.divingTime,this.swimmersAttributes[this.numVecAttributes*4*e+4]=t.reactionTime,this.swimmersAttributes[this.numVecAttributes*4*e+5]=t.body.velocity.z,this.swimmersAttributes[this.numVecAttributes*4*e+6]=t.nationality,this.swimmersAttributes[this.numVecAttributes*4*e+8]=t.breakoutDistance,this.swimmersAttributes[this.numVecAttributes*4*e+9]=t.breakoutTime,this.swimmersAttributes[this.numVecAttributes*4*e+10]=t.finishTime,this.swimmersAttributes[this.numVecAttributes*4*e+11]=t.waterDamping}update(){this.numSwimmers=k.swimmers.length,this.swimmersAttributes=new Float32Array(this.numVecAttributes*4*this.maxNumSwimmer*5);let e=this.#e(k.swimmers);for(let t=0;t<k.swimmers.length;t++){let n=e[t];this.#n(t,n),this.#t(k.swimmers.length+t,n.leftArm),this.#t(2*k.swimmers.length+t,n.rightArm),this.#t(3*k.swimmers.length+t,n.leftFoot),this.#t(4*k.swimmers.length+t,n.rightFoot)}this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture.id),this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,!1),this.gl.texSubImage2D(this.gl.TEXTURE_2D,0,0,0,this.numVecAttributes,this.maxNumSwimmer,this.gl.RGBA,this.gl.FLOAT,this.swimmersAttributes),this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,!0),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vboPoints),this.gl.bufferData(this.gl.ARRAY_BUFFER,this.swimmersAttributes,this.gl.DYNAMIC_DRAW)}buildShader(e,t){let n=this.gl.createShader(t);return this.gl.shaderSource(n,e),this.gl.compileShader(n),n}createProgram(e){let t=this.gl.createProgram();return e.forEach(e=>{this.gl.attachShader(t,e)}),this.gl.linkProgram(t),t}checkShaders(e,t,n){this.gl.getShaderParameter(e,this.gl.COMPILE_STATUS)||console.error(this.gl.getShaderInfoLog(e)),this.gl.getShaderParameter(t,this.gl.COMPILE_STATUS)||console.error(this.gl.getShaderInfoLog(t)),this.gl.getProgramParameter(n,this.gl.LINK_STATUS)||console.error(this.gl.getProgramInfoLog(n))}createRenderingTexture(e,n){this.pointsTexture=new t.Texture(e,n,{type:this.gl.FLOAT,filter:this.gl.NEAREST}),this.pointsFrameBuffer=this.gl.createFramebuffer(),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.pointsFrameBuffer);let r=this.gl.COLOR_ATTACHMENT0;this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,r,this.gl.TEXTURE_2D,this.pointsTexture.id,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.horizontalPassTexture=new t.Texture(e,n,{type:this.gl.FLOAT,filter:this.gl.LINEAR}),this.horizontalPassFrameBuffer=this.gl.createFramebuffer(),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.horizontalPassFrameBuffer),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,r,this.gl.TEXTURE_2D,this.horizontalPassTexture.id,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null);let i=n/4,a=i,o=i;this.displacementTexture=new t.Texture(a,o,{type:this.gl.FLOAT,filter:this.gl.LINEAR}),this.displacementFrameBuffer=this.gl.createFramebuffer(),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.displacementFrameBuffer),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,r,this.gl.TEXTURE_2D,this.displacementTexture.id,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.oldDisplacementTexture=new t.Texture(a,o,{type:this.gl.FLOAT,filter:this.gl.LINEAR})}buildProgram(e,t){let n=this.buildShader(e,this.gl.VERTEX_SHADER),r=this.buildShader(t,this.gl.FRAGMENT_SHADER),i=this.createProgram([n,r]);return this.checkShaders(n,r,i),i}initPrograms(){this.programPoints=this.buildProgram(te,ne),this.programVolume=this.buildProgram(A,re),this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height)}volumePass(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.horizontalPassFrameBuffer),this.gl.useProgram(this.programVolume);let e=this.gl.getAttribLocation(this.programVolume,`iVertex`),t=this.gl.getUniformLocation(this.programVolume,`poolSize`);this.gl.uniform2f(t,k.params.simulation.poolSize.x,k.params.simulation.poolSize.z);let n=this.gl.getUniformLocation(this.programVolume,`horizontal`);this.gl.uniform1i(n,!0);let r=this.gl.getUniformLocation(this.programVolume,`show`);this.gl.uniform1i(r,!1);let i=this.gl.getUniformLocation(this.programVolume,`swapColor`);this.gl.uniform1i(i,!1);let a=this.gl.FLOAT;this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vboPlane),this.gl.vertexAttribPointer(e,2,a,!1,0,0),this.gl.enableVertexAttribArray(e),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.indexBuffer),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.pointsTexture.id),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this.gl.drawElements(this.gl.TRIANGLES,6,this.gl.UNSIGNED_SHORT,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.displacementFrameBuffer),this.gl.uniform1i(n,!1),this.gl.uniform1i(r,!1),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.horizontalPassTexture.id),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this.gl.viewport(0,0,this.displacementTexture.width,this.displacementTexture.height),this.gl.drawElements(this.gl.TRIANGLES,6,this.gl.UNSIGNED_SHORT,0),this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height)}pointPass(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.pointsFrameBuffer),this.gl.useProgram(this.programPoints);let e=this.gl.getAttribLocation(this.programPoints,`iData1`),t=this.gl.getAttribLocation(this.programPoints,`iData2`),n=this.gl.getAttribLocation(this.programPoints,`iData3`),r=this.gl.getUniformLocation(this.programPoints,`invPoolSize`);this.gl.uniform2f(r,1/k.params.simulation.poolSize.x,1/k.params.simulation.poolSize.z);let i=this.gl.FLOAT,a=0;this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vboPoints),e>=0&&(this.gl.vertexAttribPointer(e,4,i,!1,48,a),this.gl.enableVertexAttribArray(e)),a=16,t>=0&&(this.gl.vertexAttribPointer(t,4,i,!1,48,a),this.gl.enableVertexAttribArray(t)),a=32,n>=0&&(this.gl.vertexAttribPointer(n,4,i,!1,48,a),this.gl.enableVertexAttribArray(n)),this.gl.viewport(0,0,this.pointsTexture.width,this.pointsTexture.height),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this.gl.drawArrays(this.gl.POINTS,0,5*this.numSwimmers)}updateOldDisplacementTexture(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.displacementFrameBuffer),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.oldDisplacementTexture.id),this.gl.copyTexSubImage2D(this.gl.TEXTURE_2D,0,0,0,0,0,this.oldDisplacementTexture.width,this.oldDisplacementTexture.height)}draw(){this.updateOldDisplacementTexture(),this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this.pointPass(),this.volumePass(),this.gl.disable(this.gl.BLEND)}};function j(e=0,t=1){let n=1-Math.random(),r=Math.random();return Math.sqrt(-2*Math.log(n))*Math.cos(2*Math.PI*r)*t+e}var se=.5,ce=2,M=`Temps (s)`,N=`event`,P=`eventX`,F=`eventY`,le=`frequence (cylce/min)`,I=class e{static useGravity=!1;static raceHasStarted=!1;static swimming=!1;static attributes;static initAttributes=()=>{e.attributes=new oe};static updateAttributesTexture=()=>{e.attributes.update()};static getAttributesTexture=()=>e.attributes.texture;static bindDisplacementTexture=t=>{e.attributes.displacementTexture.bind(t)};static bindOldDisplacementTexture=t=>{e.attributes.oldDisplacementTexture.bind(t)};static reset=t=>{e.attributes.createRenderingTexture(t.x,t.y)};constructor(n){this.startingPoint=new t.Vector(n.x,n.y,n.z),this.center=new t.Vector(n.x,n.y,n.z),this.force=new t.Vector(0,0,190+j(0,20)),this.reactionTime=Math.max(.1,j(.15,.02));let r=.15;this.body=new d(n,.25),this.body.showStreak=!0,this.leftArm=new d(C,r),this.rightArm=new d(C,r),this.leftFoot=new d(C,r),this.rightFoot=new d(C,r),this.body.cinematic=!e.useGravity,this.leftArm.cinematic=!0,this.rightArm.cinematic=!0,this.leftFoot.cinematic=!0,this.rightFoot.cinematic=!0,this.spheres=[this.body,this.leftArm,this.rightArm,this.leftFoot,this.rightFoot],this.divingDistance=0,this.divingTime=1e3,this.breakoutDistance=0,this.breakoutTime=1e3,this.nationality=Math.random()>.5?0:1,this.currendDataIndex=0,this.useTracking=!1,this.armPulsation=2*Math.PI*ce,this.cycleTime=0,this.cyclePhase=0,this.finishTime=0,this.waterDamping=k.params.simulation.waterDamping}async parseData(e){await fetch(e).then(t=>{let n=t.headers.get(`content-type`);return!n||!n.includes(`text/csv`)?(console.log(`no file found : `+e),null):t.text()}).then(e=>{if(!e)return;let t=e.split(`
`),n=t[0].split(/,|;/);this.data=t.slice(1).map(e=>{let t=e.split(/,|;/);return Object.fromEntries(n.map((e,n)=>[e,t[n]]))}),k.params.swimmers.useTracking&&(this.armPulsation=0)})}getDistanceTraveled(){let e=this.body.velocity.z,t=k.params.simulation.poolSize.z,n=this.body.center.z+t/2;return e>=0?n:2*t-n}startRace(){this.hasBrokeOut=!1,this.hasDove=!1,this.hasReacted=!1}jump(e=4.5){this.body.cinematic=!1,this.body.velocity=new t.Vector(0,0,e+j(0,1)),this.body.center=new t.Vector(this.startingPoint.x,1,-k.params.simulation.poolSize.z/2)}swim(e){this.hasReacted=e,this.isSwimming=e,this.finishTime=0,e||(this.body.followTarget=!1),e?(this.body.cinematic=!1,this.useGravity=!0,this.useTracking?this.moveToBeginning():this.body.center=new t.Vector(this.startingPoint.x,0,-k.params.simulation.poolSize.z/2)):(this.moveSpheresAway(),this.body.velocity=new t.Vector(0,0,0),this.body.center=new t.Vector(this.startingPoint.x,0,0))}#e(e){let n=parseFloat(e[P]),r=this.body.center.x;return k.isSceneSynchronizedSwimming()&&(n=k.params.simulation.poolSize.z-n*30/25,e[F]&&(r=parseFloat(e[F])-k.params.simulation.poolSize.x/2)),n-=k.params.simulation.poolSize.z/2,new t.Vector(r,1,n)}moveToBeginning(){this.useTracking||console.warn(`tried to use tracking on untracked swimmer`);let e=this.data[0];this.body.center=this.#e(e)}hasFinished(){return this.finishTime>.1}getArmOffset(e,n){n+=this.cyclePhase;let r=this.body.velocity.z>=0?this.armPulsation:-this.armPulsation;return new t.Vector(0,Math.cos(r*e+n),Math.sin(r*e+n)).multiply(se)}setCurrentDataIndex(){if(console.log(`set current data index`),this.currendDataIndex=0,this.data){for(;this.data[this.currendDataIndex]&&this.data[this.currendDataIndex][M]<k.getRaceTime();)this.currendDataIndex++;if(this.currendDataIndex+1<this.data.length){if(this.currendDataIndex-1>=0){let e=parseFloat(this.data[this.currendDataIndex][P]),n=e,r=k.params.simulation.poolSize.z;e>r&&(n=2*r-n),n-=r/2;let i=this.body.center;i.x,k.isSceneSynchronizedSwimming()&&parseFloat(this.data[this.currendDataIndex][F])-k.params.simulation.poolSize.x/2,this.body.move(new t.Vector(i.x,i.y,n));let a=Math.sign(50-e)*.1;this.body.velocity=new t.Vector(0,0,a),console.log(`vz : `+a)}this.body.setTarget(null),this.body.followTarget=!0,this.finishTime=0}}}findNextCycle(){let e=this.currendDataIndex+1;if(!this.data)return null;for(;this.data[e]&&this.data[e][N]!=`cycle`;)e++;return this.data[e]?parseFloat(this.data[e][M]):null}setDamping(e){if(k.params.visualizations.customWaterPerturbation==k.params.visualizations.PARAMETER_CYCLES){let t=parseFloat(e[le]);if(t<50)return;if(t>0){console.log(`FREQ : `+t);let e=(t-50)/30;e=Math.max(Math.min(e,1),0);let n=.015;this.waterDamping=n+(.25-n)*(1-e)}}else this.waterDamping=k.params.simulation.waterDamping}handleTracking(e){if(this.hasReacted&&this.useTracking&&this.currendDataIndex<this.data.length&&this.data[this.currendDataIndex][M]<e){this.setDamping(this.data[this.currendDataIndex]);let n=null,r=this.startingPoint.x,i=e,a=this.data[this.currendDataIndex+1];this.currendDataIndex+1<this.data.length&&(n=parseFloat(a[P]),k.isSceneSynchronizedSwimming()&&(n=k.params.simulation.poolSize.z-n*30/25,a[F]&&(r=parseFloat(a[F])-k.params.simulation.poolSize.x/2)),i=parseFloat(a[M]));let o=k.params.simulation.poolSize.z,s=-this.body.radius/2,c=this.data[this.currendDataIndex][N];if(c==`enter`||c==`turn`&&a[N]!=`under`){i=(e+i)/2,n=(this.body.center.z+o/2+n)/2;let t={[M]:i,[P]:n,[N]:`under`};this.data.splice(this.currendDataIndex+1,0,t),s=-1.5}a&&a[N]==`under`&&(s=-1.5),n>o&&(n=2*o-n),n-=k.params.simulation.poolSize.z/2;let l=new t.Vector(r,s,n);if(this.currendDataIndex+1<this.data.length?this.body.setTarget(l,i-e):this.body.setTarget(null),c==`figure`&&(console.log(`FIGURE`),k.splashParticles.spawnSplash(l,null,1e4,null,{speed0:4,maxParticles:400}),k.chronoPhotography({circle:!0})),c==`cycle`){let e=parseFloat(this.data[this.currendDataIndex][M]),t=this.findNextCycle();if(t){let n=1/(t-e);this.armPulsation=2*Math.PI*n,this.cycleTime=0,this.cyclePhase==0?this.cyclePhase=Math.PI:this.cyclePhase=0}}else c==`finish`&&(this.finishTime=this.data[this.currendDataIndex][M],this.body.followTarget=!1,this.isSwimming=!1);this.currendDataIndex++}}moveSpheresAway(){this.rightArm.move(C),this.leftArm.move(C),this.rightFoot.move(C),this.leftFoot.move(C)}moveSpheres(e){if(this.body.center.z<=-k.params.simulation.poolSize.z/2+.1)return;this.cycleTime+=e;let n=this.getArmOffset(.5*this.cycleTime,0),a=this.getArmOffset(.5*this.cycleTime,Math.PI),o=this.getArmOffset(.5*this.cycleTime*2,0),s=this.getArmOffset(.5*this.cycleTime*2,Math.PI);this.rightArm.move(this.body.center.add(n).add(new t.Vector(r,0,0))),this.leftArm.move(this.body.center.add(a).add(new t.Vector(-r,0,0)));let c=this.body.velocity.z>=0?-1:1;this.rightFoot.move(this.body.center.add(new t.Vector(i,o.y*.5,c))),this.leftFoot.move(this.body.center.add(new t.Vector(-i,s.y*.5,c)))}update(n){let r=k.getRaceTime();!e.raceHasStarted&&this.data&&(this.useTracking=k.params.swimmers.useTracking),!this.hasReacted&&e.raceHasStarted&&(this.useTracking||r>this.reactionTime&&!k.params.swimmers.useTracking?(this.swim(!0),this.waterDamping=k.params.simulation.waterDamping,this.useTracking||this.jump(),this.useTracking&&(this.body.cinematic=!0,this.body.followTarget=!0,this.body.setTarget(null))):(this.swim(!1),this.body.cinematic=!0,k.playingDemo?this.body.move(new t.Vector(this.body.center.x,1,-k.params.simulation.poolSize.z/2)):this.body.move(C)),this.currendDataIndex=0),this.isSwimming&&(this.useTracking||this.body.addForce(this.force),this.body.center.y>-this.body.radius&&!k.isSceneSynchronizedSwimming()?this.moveSpheres(n):this.moveSpheresAway()),this.handleTracking(r);for(let e of this.spheres)e.update(n),e.spawnSplashes(n);if(this.body.center.z>-k.params.simulation.poolSize.z/2+20||k.isSceneSynchronizedSwimming())return;e.raceHasStarted&&!this.hasDove&&this.body.center.y<0&&this.body.oldCenter.y>=0&&(this.divingDistance=this.body.center.z+k.params.simulation.poolSize.z/2,this.divingTime=r,this.hasDove=!0);let i=this.body.radius;e.raceHasStarted&&!this.hasBrokeOut&&this.body.center.y>-i&&this.body.oldCenter.y<=-i&&(this.breakoutDistance=this.body.center.z+k.params.simulation.poolSize.z/2,this.breakoutTime=r,this.hasBrokeOut=!0)}},ue=`
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
`,L=`
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
  uniform bool renderWater;
  uniform bool cornerView;
  
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
    if (point.y < info.r && renderWater) {
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
    if (renderWater && point.y < info.r) {
      vec4 caustic = texture(causticTex, 0.75 * (point.xz - point.y * refractedLight.xz / refractedLight.y) / poolSize.xz + 0.5);
      scale += diffuse * caustic.r * 2.0 * caustic.g;
    } else {
      /* shadow for the rim of the pool */
      vec2 t = intersectCube(point, refractedLight, vec3(-poolSize.x / 2., -poolSize.y, -poolSize.z / 2.), vec3(poolSize.x / 2., poolSize.y, poolSize.z / 2.));
      diffuse *= 1.0 / (1.0 + exp(-200.0 / (1.0 + 10.0 * (t.y - t.x)) * (point.y + refractedLight.y * t.y - 2.0 / 12.0)));
      
      scale += diffuse * 0.5;
      scale = min(1., scale);
    }
    
    return wallColor * scale;
  }
`;function R(e,n,r,i){this.water=n,this.gl=e,this.tileTexture=t.Texture.fromImage(document.getElementById(`tiles`),{minFilter:this.gl.LINEAR_MIPMAP_LINEAR,wrap:this.gl.REPEAT,format:this.gl.RGB}),this.franceTexture=t.Texture.fromImage(document.getElementById(`france`),{minFilter:this.gl.LINEAR_MIPMAP_LINEAR,wrap:this.gl.REPEAT,format:this.gl.RGBA}),this.chinaTexture=t.Texture.fromImage(document.getElementById(`china`),{minFilter:this.gl.LINEAR_MIPMAP_LINEAR,wrap:this.gl.REPEAT,format:this.gl.RGBA}),this.lettersTexture=t.Texture.fromImage(document.getElementById(`letters`),{minFilter:this.gl.LINEAR,magFilter:this.gl.LINEAR,wrap:this.gl.REPEAT,format:this.gl.RGBA}),this.flagSize=i,this.flagSize=[1.5,1],this.flagCenter=r,this.lightDir=new t.Vector(2,2,-1).unit(),this.causticTex=new t.Texture(1024,1024),this.waterShaders=[];let c=``;Object.entries(k.params.visualizations.customParametersDict).forEach(e=>{let t=e[1].name,n=e[1].value;c+=`#define `+t+` `+n+`
`}),Object.entries(k.params.visualizations.renderingDict).forEach(e=>{let t=e[1].name,n=e[1].value;c+=`#define `+t+` `+n+`
`});for(var l=0;l<2;l++)this.waterShaders[l]=new t.Shader(`
      uniform sampler2D water;
      uniform vec3 poolSizeVertexShader;
      out vec3 position;
      void main() {
        vec4 info = texture(water, gl_Vertex.xy / poolSizeVertexShader.xz + 0.5);
        position = gl_Vertex.xzy;
        position.y += info.r;
        gl_Position = gl_ModelViewProjectionMatrix * vec4(position, 1.0);
      }
    `,L+`
      uniform vec3 eye;
      in vec3 position;
      out vec4 fragColor;
      uniform float showFlags;
      uniform bool showWR;
      uniform bool showSpeed;
      uniform bool showFinishTimes;
      uniform bool showDivingDistance;
      uniform samplerCube sky;
      uniform bool showProjectionGrid;
      uniform bool showAreaConservedGrid;
      uniform bool areaConservationOptimized;
      uniform sampler2D france;
      uniform sampler2D china;
      uniform vec2 flagSize;

      uniform sampler2D foamTex;

      uniform float rendering;

      uniform bool foamEnabled;
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

      uniform bool classicalOverlayEnabled;
      uniform float showOverlayPlane;

      uniform float heightLimit;

      uniform float seed;

      uniform float waterColorParameter;

      `+c+`
      
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
      // #define BLUE    vec3(.2,.8, 1)
      #define RAINBOW abs(cos(uv.x + vec3(5,6,1)))

      #define GOLD    vec3(1., 1., 0.)
      #define SILVER  vec3(.8, .8, .8)
      #define BRONZE  vec3(.75, .54, .44)

      #define PINK (vec3(241., 171., 201.) / 255.)
      #define BLUE (vec3(35., 147., 205.) / 255.)
      #define YELLOW (vec3(217., 196., 122.) / 255.)

      const vec3[] colorRankDict = vec3[](GOLD, SILVER, BRONZE); 
      
      
      `+s+ue+`
      makeStrF(printSpeed) _num_ __ _m _DIV _s _endNum
      makeStrF(printTime) _num_ __ _s _endNum


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
        if (abs(position.y + poolSize.z / 2. - wr) < .05) color = YELLOW; 
      }

      void maximiseColor(out vec3 c) {
        float m = max(c.r, max(c.g, c.b));
        c /= m;
      }

      void drawDivingRipples(in vec2 coord, inout vec3 color) {
        vec4 divingWave = getDivingWaves(coord);
        bool toDraw = divingWave.z > 0.;
        float blending = divingWave.y;

        float intensity = divingWave.w;
        vec3 rippleColor = intensity * PINK + (1. - intensity) * BLUE;
        maximiseColor(rippleColor);

        if (toDraw) {
          color = (1. - blending) * color + blending * rippleColor;
        }
      
      }

      void distort(inout vec2 pos, vec2 swimmerPos, in float intensity) {
        if (classicalOverlayEnabled) return;
        float distFactor = intensity / 2.;
        // pos.x += perlin(pos.xy + swimmerPos, 3., seed*.0000005) * distFactor;
        // pos.y += perlin(pos.yx + swimmerPos, 3., seed*.0000005) * distFactor;
        pos.x += perlin(pos.xy + swimmerPos + vec2(seed * 2., 0.), 3., 0.) * distFactor;
        pos.y += perlin(pos.yx + swimmerPos + vec2(seed * 2., 0.), 3., 0.) * distFactor; 
      }

      void distort(inout vec2 pos, vec2 swimmerPos, in float beginTime, in float endTime, in bool appearing) {
        if (time < beginTime || time > endTime) return;
        float intensity = (time - beginTime) / (endTime - beginTime);
        intensity = pow(intensity, 2.);
        if (!appearing) intensity = 1. - intensity;
        distort(pos, swimmerPos, intensity);
      }

      void drawFlags(in vec2 position, in vec2 swimmerPos, in float swimmerAltitude, in float nationality, bool rightSide, inout vec3 color) {
        float swimmer_x = swimmerPos.x;
        float swimmer_z = swimmerPos.y;
        float dz = rightSide ? -`+a+` : `+a+`;
        float staticFlag_z = flagSize.y / 2. - poolSize.z / 2.  +`+o+`;
        float flag_z = swimmerAltitude <= 0. ? max(staticFlag_z, swimmer_z + dz) : staticFlag_z;
        vec2 flagCenterNew = vec2(swimmer_x, flag_z);
        // TODO nettoyer
        vec2 flagCorner = flagCenterNew - flagSize / 2.;
        
        if (areaConservation) {
          //vec2 coord = position / poolSize.xz + 0.5;
          //position = texture(areaConservationTexture, coord).xy;

          if(!areaConservationOptimized) flagCorner = texture(areaConservationTexture, flagCorner / poolSize.xz + 0.5).xy;
        }
        if (showAreaConservedGrid && isOnConservedAreaGrid(position, 0.1)) color = vec3(1., 0., 0.); /* Debug conserved area grid */
        vec2 posFlag = position - flagCorner - flagSize / 2.;/*Fixes the corner of the flag on the XZ plane*/
        float distFactor = 0.;
        float startDissipationTime = 0.5;
        float stopDissipationTime = 1.5;
        float reshowTime = 5.;
        float reshowAppearDuration = 2.;
        float opacity = showFlags;
        if (time >= stopDissipationTime && time <= reshowTime) opacity = 0.;
        else if (time >= reshowTime && time <= reshowTime + reshowAppearDuration) opacity *= (time - reshowTime) / reshowAppearDuration;
        else if (time >= startDissipationTime && time <= stopDissipationTime ) opacity *= 1. - (time - startDissipationTime) / (stopDissipationTime - startDissipationTime);
        if (opacity < .99) distort(posFlag, swimmerPos, pow(1. - opacity, 2.));
        else distort(posFlag, swimmerPos, startDissipationTime, stopDissipationTime, true);
        // distort(posFlag, swimmerPos, .75);
        vec2 flagCoord = posFlag / flagSize + 0.5;
        if (bool(showFlags) && abs(posFlag.x) <= flagSize.x / 2. && abs(posFlag.y) <= flagSize.y / 2.) {
          vec3 flagColor;
          if(nationality < .5) flagColor = texture(france, vec2(1.-flagCoord.y,1.- flagCoord.x)).xyz;
          else flagColor = texture(china, vec2(1.-flagCoord.y,1.- flagCoord.x)).xyz;
          
          color = opacity * flagColor + (1. - opacity) * color;
          float delta = .1;
          vec2 delta_tex = vec2(delta, delta) / flagSize;
          if (min(flagCoord.y, 1.- flagCoord.y) <= delta_tex.y 
            || min(flagCoord.x, 1. - flagCoord.x) <= delta_tex.x) color = opacity * vec3(1., 1., 1.) + (1. - opacity) * color;
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
        float delta = bool(showFlags)? 5. : 2.;
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
        if (!cornerView && (!shadowEnabled || abs(altitude - (-.06)) < .18)) return;
        vec2 diff = (projectedPosition - swimmerPosition);
        vec2 diffNormalized = diff/shadowRadius;
        float distSq = dot(diffNormalized, diffNormalized);
        float attenuation = min(1., pow(distSq, shadowPower));
        float altitudeAttenuation = min(1., abs(altitude));
        attenuation = 1.-(1.-attenuation)*altitudeAttenuation;
        color *= attenuation;
        if (!showCircle && !cornerView) return;
        if(cornerView) altitudeAttenuation = 1.;
        distSq = dot(diff, diff);
        float intensity = max(0.,1.-abs((shadowCircleRadius - distSq)/shadowCircleStroke)) * altitudeAttenuation;
        color = intensity * YELLOW + (1. - intensity) * color;
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

      void colorWater(in vec2 projectedPosition, in vec2 swimmerPosition, in float value, inout vec3 color) {
        vec3 minColor = vec3(1., 1., 1.)*0.;
        minColor = color;
        vec3 maxColor = vec3(1., 0., 0.);
        vec3 localColor = value * maxColor + (1. - value) * minColor;
        float maxDist = .5 + value;
        vec2 diff = projectedPosition - swimmerPosition;
        vec2 diffDistorted = vec2(diff.x, .33*diff.y);
        float distSq = dot(diffDistorted, diffDistorted);
        float coeff = pow(max(0., (maxDist - sqrt(distSq))/maxDist), 2.);
        color = coeff * localColor + (1. - coeff) * color;
        
      }

      float getColorValue(float speed) {
      float res;
        if (int(waterColorParameter) == PARAMETER_SPEED) {
          float minSpeed = 5.;
          float maxSpeed = 8.;
          res = (abs(speed) - minSpeed) / (maxSpeed - minSpeed);
          res = min(max(res, 0.), 1.);
          } 
          return res;
      }

      void drawVisualizations(in vec2 position, inout vec3 color) {
        vec2 projectedPosition = position;
        vec2 coord = position / poolSize.xz + .5;
        if (classicalOverlayEnabled && showOverlayPlane > 0.01){
          vec3 overlayColor  = vec3(1.);
          if (min(fract(position.y), fract(position.x)) <= .1) overlayColor *= 0.;
          color = showOverlayPlane * overlayColor + (1. - showOverlayPlane) * color;
        }
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
            // color.rg = position;
            // color.b = 0.;
            // return;
          }

          float speed = getSwimmerSpeed(i);
          bool rightSide = hasFirstFinished ? false : speed >= 0.;
          
          drawSwimmerLines(projectedPosition, swimmerPos, i, color);
          drawRanks(projectedPosition, swimmerPos, i, rightSide, color);
          if (shadowEnabled) drawShadows(projectedPosition, swimmerPos, swimmerAltitude, color);
          // if (cornerView) continue;
          
          drawFlags(position, swimmerPos, swimmerAltitude, getSwimmerNationality(i), rightSide, color);
          if (showSpeed || showFinishTimes) drawNumbers(position, swimmerPos, i, rightSide, color);
          colorWater(projectedPosition, swimmerPos, getColorValue(speed), color);
        }
      }

      vec3 toonRendering(vec3 normal, vec3 ray) {
        // Calculate diffuse lighting
        float diffuse = max(0., dot(light, normal));
        
        // Quantize to 4 levels for toon effect
        float levels = 5.0;
        float quantized = floor(diffuse * levels) / levels;
        
        // Create toon colors - tropical paradisiac water tones
        vec3 toonColors[6];
        toonColors[0] = vec3(0.0, 0.2, 0.4); // Deep tropical blue
        toonColors[1] = vec3(0.0, 0.4, 0.7); // Rich turquoise
        toonColors[2] = vec3(0.2, 0.6, 0.9); // Bright turquoise
        toonColors[3] = vec3(0.4, 0.8, 1.0); // Light turquoise
        toonColors[4] = vec3(0.7, 0.95, 1.0); // Crystal clear tropical
        toonColors[5] = vec3(1., 1., 1.0); // white
        
        // Get the color based on quantized level
        int level = int(quantized * levels);
        vec3 color = toonColors[level];
        
        // Add a small specular highlight for toon effect
        vec3 reflectDir = reflect(-light, normal);
        float spec = pow(max(0., dot(ray, reflectDir)), 32.0);
        // if (spec > 0.5) {
        //   color += vec3(1.0, 1.0, 0.8) * 0.3;
        // }
        
        return color;
      }

      vec3 lambertRendering(vec3 normal) {
        vec3 color = vec3(.3);
        float diffuse = max(0., dot(light, normal)) * .3;
        color += diffuse;
        return color;
      }

      vec3 heightFieldRendering(float height) {
        float interval = .1;
        float value = abs(height) / interval;
        value = min(max(value, 0.), 1.);
        vec3 lowColor = vec3(0., 0., 1.);
        vec3 highColor = vec3(1., 0., 0.);
        vec3 color = height > 0. ? highColor : lowColor;
        return value * color;
      }

      vec3 realisticRendering(vec3 origin, vec3 ray, vec3 waterColor) {
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
        }
        return color;
      }


      vec4 getSurfaceRayColor(vec3 origin, vec3 ray, vec3 waterColor, vec3 normal) {
        vec3 color;
        if (int(rendering) == RENDERING_REALISTIC) color = realisticRendering(origin, ray, waterColor);
        else if (int(rendering) == RENDERING_HEIGHT_FIELD) color = heightFieldRendering(origin.y);
        else if (int(rendering) == RENDERING_LAMBERT) color = lambertRendering(normal);
        else if (int(rendering) == RENDERING_TOON) color = toonRendering(normal, ray);
        
        vec3 colorBefore = color;
        if (bool(showOverlayPlane) || bool(showFlags) || showWR || int(medalsModeAfterFinish) != MEDALS_NONE || int(medalsModeBeforeFinish) != MEDALS_NONE || showSpeed || showDivingDistance) drawVisualizations(origin.xz, color);
        float alpha = 1.;
        if (length(color - colorBefore) >= .04) {
          alpha = 0.;
        }
          
        
        return vec4(color, alpha);
      }
      
      void main() {
        vec2 coord = position.xz / poolSize.xz + 0.5;
        vec4 info = texture(water, coord);
        /* make water look more "peaked" */
        /*for (int i = 0; i < 5; i++) {
          coord += info.ba * 0.005;
          info = texture(water, coord);
        }*/
        // if (int(rendering) == RENDERING_HEIGHT_FIELD) {
        //   float interval = .1;
        //   float value = abs(info.r) / interval;
        //   value = min(max(value, 0.), 1.);
        //   vec4 lowColor = vec4(0., 0., 1., 1.);
        //   vec4 highColor = vec4(1., 0., 0., 1.);
        //   vec4 color = info.r > 0. ? highColor : lowColor;
        //   fragColor = value * color;
        //   return;
        // }
        
        vec3 normal = vec3(info.b, sqrt(1.0 - dot(info.ba, info.ba)), info.a);
        vec3 incomingRay = normalize(position - eye);
        
        `+(l?`
          normal = -normal;
          vec3 reflectedRay = reflect(incomingRay, normal);
          vec3 refractedRay = refract(incomingRay, normal, IOR_WATER / IOR_AIR);
          float fresnel = mix(0.5, 1.0, pow(1.0 - dot(normal, -incomingRay), 3.0));
          
          vec4 reflectedColor = getSurfaceRayColor(position, reflectedRay, underwaterColor, normal);
          vec4 refractedColor = getSurfaceRayColor(position, refractedRay, vec3(1.0), normal) * vec4(0.8, 1.0, 1.1, 1.);
          
          fragColor = mix(reflectedColor, refractedColor, (1.0 - fresnel) * length(refractedRay));
        `:`
          vec3 reflectedRay = reflect(incomingRay, normal);
          vec3 refractedRay = refract(incomingRay, normal, IOR_AIR / IOR_WATER);
          float fresnel = mix(0.25, 1.0, pow(1.0 - dot(normal, -incomingRay), 3.0));
          
          vec4 reflectedColor = getSurfaceRayColor(position, reflectedRay, abovewaterColor, normal);
          vec4 refractedColor = getSurfaceRayColor(position, refractedRay, abovewaterColor, normal);
          
          fragColor = mix(refractedColor, reflectedColor, fresnel);

          if (reflectedColor.a <.1) fragColor.a = 0.;
          // return;

          // if (info.r > heightLimit) fragColor = vec4(1., 0., 0., 1.);

          if(!foamEnabled) return;

          vec3 waterColor = abovewaterColor;
          vec4 foamColor = vec4(vec3(.9), fragColor.a);
          float foam = texture(foamTex, coord).r;
          fragColor = mix(fragColor, foamColor, foam);
        `)+`
      }
    `);this.sphereMesh=t.Mesh.sphere({detail:10}),this.sphereShader=new t.Shader(L+`
    out vec3 position;
  void main() {
    position = sphereCenter + gl_Vertex.xyz * sphereRadius;
    gl_Position = gl_ModelViewProjectionMatrix * vec4(position, 1.0);
  }
  `,L+`
    in vec3 position;
    out vec4 fragColor;
    uniform vec3 color;
  void main() {
    fragColor = vec4(getSphereColor(position)*color, 1.0);
      vec4 info = texture(water, position.xz / poolSize.xz + 0.5);
    if (position.y < info.r && renderWater) {
      fragColor.rgb *= underwaterColor * 1.2;
    }
  }
  `),this.reset(),this.cubeShader=new t.Shader(L+`
    out vec3 position;
  void main() {
    position = gl_Vertex.xyz;
    position.y = ((1.0 - position.y) * (7.0 / 12.0) - 1.0) * poolSize.y;
    gl_Position = gl_ModelViewProjectionMatrix * vec4(position, 1.0);
  }
  `,L+`
    in vec3 position;
    out vec4 fragColor;
  void main() {
    fragColor = vec4(getWallColor(position), 1.0);
      vec4 info = texture(water, position.xz / poolSize.xz + 0.5);
    if (renderWater && position.y < info.r) {
      fragColor.rgb *= underwaterColor * 1.2;
    }
  }
  `),this.sphereCenter=new t.Vector,this.sphereRadius=0;var u=!!this.gl.getExtension(`OES_standard_derivatives`);this.causticsShader=new t.Shader(L+`
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
  `,(u?`#extension GL_OES_standard_derivatives: enable
`:``)+`
  `+L+`
    in vec3 oldPos;
    in vec3 newPos;
    in vec3 ray;
    out vec4 fragColor;

  void main() {
    `+(u?`
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
  `)}R.prototype.reset=function(){this.cubeMesh=t.Mesh.cube({width:k.params.simulation.poolSize.x,height:2,depth:k.params.simulation.poolSize.z}),this.cubeMesh.triangles.splice(4,2),this.cubeMesh.compile()},R.prototype.updateCaustics=function(e){},R.prototype.renderWater=function(e,n,r){if(!k.renderWater)return;var i=new t.Raytracer;e.textureA.bind(0),this.tileTexture.bind(1),n.bind(2),this.causticTex.bind(3),this.franceTexture.bind(4),this.chinaTexture.bind(8),k.water.foam.foamTexNext.bind(9),this.lettersTexture.bind(7),e.areaConservationTextureA.bind(5);let a=I.getAttributesTexture();a&&a.bind(6),this.gl.enable(this.gl.CULL_FACE),k.updateTransitions();for(var o=0;o<2;o++)this.gl.cullFace(o?this.gl.BACK:this.gl.FRONT),this.waterShaders[o].uniforms({renderWater:!0,light:this.lightDir,water:0,tiles:1,sky:2,causticTex:3,france:4,china:8,foamTex:9,areaConservationTexture:5,swimmersAttributesTexture:6,iChannel0:7,areaConservation:k.params.visualizations.areaConservation.enabled,flagSize:[k.params.flags.flagSize.x,k.params.flags.flagSize.y],flagCenter:[this.flagCenter.x,this.flagCenter.y],poolSize:[k.params.simulation.poolSize.x,k.params.simulation.poolSize.y,k.params.simulation.poolSize.z],poolSizeVertexShader:[k.params.simulation.poolSize.x,k.params.simulation.poolSize.y,k.params.simulation.poolSize.z],eye:i.eye,sphereCenter:this.sphereCenter,sphereRadius:this.sphereRadius,showProjectionGrid:e.showProjectionGrid,showAreaConservedGrid:e.showAreaConservedGrid,areaConservationOptimized:k.params.visualizations.areaConservation.optimized,wr:e.WR_position,swimmersNumber:k.swimmers.length,cornerView:k.cornerView,showFlags:k.transitions.showFlags?k.transitions.showFlags.opacity:k.params.visualizations.showFlags,showWR:k.params.visualizations.showWR,showSpeed:k.params.visualizations.showSpeed,showDivingDistance:k.params.visualizations.showDivingDistance,showFinishTimes:k.params.visualizations.showFinishTimes,time:k.getRaceTime(),seed:k.time,foamEnabled:k.params.simulation.foam.enabled,shadowEnabled:r.enabled,shadowRadius:r.shadowRadius,shadowPower:r.shadowPower,showCircle:r.showCircle,shadowCircleRadius:r.circleRadius,shadowCircleStroke:r.circleStroke,showSwimmersLines:Math.round(k.params.visualizations.showSwimmersLinesDict[k.params.visualizations.showSwimmersLines]),swimmersLinesMode:k.params.visualizations.swimmersLinesModeDict[k.params.visualizations.swimmersLinesMode],medalsModeBeforeFinish:Math.round(k.params.visualizations.medalsModesDict[k.params.visualizations.medalsModeBeforeFinish]),medalsModeAfterFinish:Math.round(k.params.visualizations.medalsModesDict[k.params.visualizations.medalsModeAfterFinish]),rendering:k.params.visualizations.renderingDict[k.params.visualizations.rendering].value,heightLimit:k.params.simulation.heightLimit,waterColorParameter:k.params.visualizations.customParametersDict[k.params.visualizations.waterColorParameter].value,classicalOverlayEnabled:k.classicalOverlayEnabled,showOverlayPlane:k.showOverlayPlane?k.showOverlayPlane:0}).draw(e.plane);this.gl.disable(this.gl.CULL_FACE)},R.prototype.renderSpheres=function(e){let t=[];k.params.swimmers.showSpheres&&k.swimmers.forEach(e=>e.spheres.forEach(e=>t.push(e))),!k.params.video.show&&!k.hideFloaters&&k.floaters.forEach(e=>t.push(e)),k.bubbleSpheres.forEach(e=>t.push(e));for(let n of t)this.renderSphere(e,n)},R.prototype.renderSphere=function(e,t){e.textureA.bind(0),this.causticTex.bind(1),this.sphereShader.uniforms({light:this.lightDir,water:0,causticTex:1,sphereCenter:[t.center.x,t.center.y,t.center.z],sphereRadius:t.radius*k.spheresRadiusCoeff,poolSize:[k.params.simulation.poolSize.x,k.params.simulation.poolSize.y,k.params.simulation.poolSize.z],color:[t.color.x,t.color.y,t.color.z]}).draw(t.mesh)},R.prototype.renderSphereOld=function(e){e.textureA.bind(0),this.causticTex.bind(1),this.sphereShader.uniforms({light:this.lightDir,water:0,causticTex:1,sphereCenter:this.sphereCenter,sphereRadius:this.sphereRadius,poolSize:[k.params.simulation.poolSize.x,k.params.simulation.poolSize.y,k.params.simulation.poolSize.z]}).draw(this.sphereMesh)},R.prototype.renderCube=function(e){k.renderCube&&(this.gl.enable(this.gl.CULL_FACE),e.textureA.bind(0),this.tileTexture.bind(1),this.causticTex.bind(2),this.cubeShader.uniforms({light:this.lightDir,water:0,tiles:1,causticTex:2,sphereCenter:this.sphereCenter,sphereRadius:this.sphereRadius,poolSize:[k.params.simulation.poolSize.x,k.params.simulation.poolSize.y,k.params.simulation.poolSize.z],renderWater:k.renderWater}).draw(this.cubeMesh),this.gl.disable(this.gl.CULL_FACE))};function z(e,t){this.gl=t,this.id=t.createTexture(),t.bindTexture(t.TEXTURE_CUBE_MAP,this.id),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,1),t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texImage2D(t.TEXTURE_CUBE_MAP_NEGATIVE_X,0,t.RGB,t.RGB,t.UNSIGNED_BYTE,e.xneg),t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X,0,t.RGB,t.RGB,t.UNSIGNED_BYTE,e.xpos),t.texImage2D(t.TEXTURE_CUBE_MAP_NEGATIVE_Y,0,t.RGB,t.RGB,t.UNSIGNED_BYTE,e.yneg),t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_Y,0,t.RGB,t.RGB,t.UNSIGNED_BYTE,e.ypos),t.texImage2D(t.TEXTURE_CUBE_MAP_NEGATIVE_Z,0,t.RGB,t.RGB,t.UNSIGNED_BYTE,e.zneg),t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_Z,0,t.RGB,t.RGB,t.UNSIGNED_BYTE,e.zpos)}z.prototype.bind=function(e){this.gl.activeTexture(this.gl.TEXTURE0+(e||0)),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,this.id)},z.prototype.unbind=function(e){this.gl.activeTexture(this.gl.TEXTURE0+(e||0)),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,null)};var B=new e,de=function(e,t){let n=B.addFolder(`visualizations`);n.close(),n.add(k,`useConfigFile`).name(`use configuration file`),n.add(k,`showTimeline`).name(`show event timeline`).listen().onChange(e=>{k.hideEditorPanel(e)}),n.add(k.params.visualizations,`showFlags`).name(`show flags`).listen(),n.add(k.params.visualizations,`showStreaks`).name(`show streaks`).listen(),n.add(k.params.visualizations,`showWR`).name(`show world record`).listen(),n.add(k.params.visualizations,`showSwimmersLines`,k.params.visualizations.swimmersLinesList).name(`show neighbours lines`).listen(),n.add(k.params.visualizations,`swimmersLinesMode`,k.params.visualizations.swimmersLinesModeList).name(`show neighbours lines`).listen(),n.add(k.params.visualizations,`customWaterPerturbation`,k.params.visualizations.customParametersList).name(`custom water perturbation`).listen(),n.add(k.params.visualizations,`waterColorParameter`,k.params.visualizations.customParametersList).name(`water color parameter`).listen(),n.add(k.params.visualizations,`medalsModeBeforeFinish`,[`none`,`stars`,`bright`,`lanes`]).name(`show potential medals`).listen(),n.add(k.params.visualizations,`medalsModeAfterFinish`,[`none`,`stars`,`bright`,`lanes`]).name(`show potential medals after finish`).listen(),n.add(k.params.visualizations,`showSpeed`).name(`show speed`).listen(),n.add(k.params.visualizations,`showDivingDistance`).name(`show diving distance`).listen(),n.add(k.params.visualizations.shadow,`enabled`).name(`show shadow`),n.add(k.params.visualizations,`rendering`,k.params.visualizations.renderingList).name(`rendering`).listen().onChange(()=>{k.params.visualizations.rendering==`toon`&&(k.params.simulation.waterDamping=.35)}),n.add(k,`hideFloaters`).name(`hide floaters`).listen();let r=n.addFolder(`Flags`);r.close(),r.add(k.params.flags.flagSize,`x`,0,10).name(`width`),r.add(k.params.flags.flagSize,`y`,0,10).name(`height`);let i=n.addFolder(`Area conservation`);i.close(),i.add(k.params.visualizations.areaConservation,`enabled`).name(`enabled`).listen(),i.add(k.params.visualizations.areaConservation,`optimized`).name(`optimized`).listen(),i.add(k.params.visualizations.areaConservation,`legibility`,0,1).name(`legibility`).listen();let a=B.addFolder(`video`);a.close(),a.add(k.params.video,`opacity`).name(`opacity`).listen(),a.add(k.params.video,`thresholdBlending`).name(`threshold blending`).listen(),a.add(k.params.video,`blendingThreshold`,.1,1.5).name(`blending threshold`),a.add(k.params.video,`show`).name(`show`).listen(),a.add(k.params.video,`hideObstructions`).name(`hide obstructions`),a.add(k.params.video,`hideObstructionThreshold`,0,.5).name(`obstructions threshold`);let o=n.addFolder(`Sparks`);o.close(),o.add(k.params.visualizations.sparks,`enabled`).name(`sparks enabled`),o.add(k.params.visualizations.sparks,`glow`,1,30).name(`sparks glow factor`),o.add(k.params.visualizations.sparks,`lengthFactor`,.1,10).name(`sparks length factor`),o.add(k.params.visualizations.sparks,`glowOffset`,.1,3).name(`sparks glow offset`),o.add(k.params.visualizations.sparks,`stroke`,.001,.05).name(`sparks stroke`),o.add(k.params.visualizations.sparks,`num`,10,200).step(1).name(`sparks number`),o.add(k.params.visualizations.sparks,`sizeFactor`,10,100).name(`size factor`);let s=n.addFolder(`Swimmers shadows`);s.close(),s.add(k.params.visualizations.shadow,`shadowRadius`,0,2).name(`shadow radius`),s.add(k.params.visualizations.shadow,`shadowPower`,.1,2).name(`shadow power`),s.add(k.params.visualizations.shadow,`showCircle`).name(`circle`),s.add(k.params.visualizations.shadow,`circleRadius`,.5,2).name(`circle radius`),s.add(k.params.visualizations.shadow,`circleStroke`,.1,.5).name(`circle stroke`);let c=B.addFolder(`Simulation`);c.close(),c.add(k.params.simulation,`optimized`).name(`optimized`).listen(),c.add(k.params.simulation.poolSize,`x`,1,25).name(`pool width`).onChange(function(e){t()}).listen(),c.add(k.params.simulation.poolSize,`z`,1,50).name(`pool height`).onChange(function(e){t()}).listen(),c.add(k.params.simulation.poolSize,`y`,1,3).name(`pool depth`).onChange(function(e){t()}).listen(),c.add(k.params.simulation,`waterDamping`,.005,.4).name(`water damping`).listen();let l=c.addFolder(`foam`);l.close(),l.add(k.params.simulation.foam,`enabled`).name(`enabled`).listen(),l.add(k.params.simulation.foam,`velThreshold`,0,15).name(`velocity threshold`),l.add(k.params.simulation.foam,`velMax`,0,20).name(`max velocity`),l.add(k.params.simulation.foam,`dispersion`,0,.1).name(`dispersion`),l.add(k.params.simulation.foam,`timeVariation`,0,10).name(`time variation`),l.add(k.params.simulation.foam,`spaceVariation`,0,100).name(`space variation`),l.add(k.params.simulation.foam,`attenuation`,0,.2).name(`attenuation`);let u=c.addFolder(`splash`);u.close(),u.add(k.params.simulation.splashes,`enabled`).name(`enabled`),u.add(k.params.simulation.splashes,`strengthThreshold`,.1,10).name(`strength threshold`);let d=B.addFolder(`swimmers`);d.close(),d.add(k.params.swimmers,`showSpheres`).name(`show spheres`).listen(),d.add(k.params.swimmers,`useTracking`).name(`use tracking data`).listen();let f=B.addFolder(`camera`);f.close(),f.add(k.params,`fov`,15,45).name(`fov`).listen().onChange(function(t){k.params.visualizations.sparks.fov=t*2*Math.PI/360,e.matrixMode(e.PROJECTION),e.loadIdentity(),e.perspective(k.params.fov,e.canvas.width/e.canvas.height,.01,100),e.matrixMode(e.MODELVIEW),console.log(`perspective : `+k.params.fov)});let p=B.addFolder(`quiver`);p.close(),p.add(k.params.quiver,`alwaysActive`).name(`always active`).listen(),p.add(k.params.quiver,`amplitude`,.01,1).name(`amplitude`).listen(),p.add(k.params.quiver,`omega`,.5,5).name(`omega`).listen(),p.add(k.params.quiver,`amplitudeFactor`,.5,.9).name(`amplitude factor`).listen(),p.add(k.params.quiver,`frequencyFactor`,1.1,2).name(`frequency factor`).listen(),p.add(k.params.quiver,`waveLength`,1,30).name(`wave length`).listen();let m=B.addFolder(`corner view`);m.close(),m.add(k.params.cornerView,`show`).name(`show`);let h=B.addFolder(`chrono-photography`);h.close(),h.add(k.params.chronoPhotography,`available`).name(`available`).onChange(()=>{k.params.chronoPhotography.available?k.drawingFrameBuffer=k.chronoFrameBuffer:k.drawingFrameBuffer=null}),k._gui=B},V=100;function fe(e){let t=document.createElement(`div`);if(document.body.appendChild(t),t.id=`event-editor`,t.style.position=`fixed`,t.display=`block`,t.style.bottom=`60px`,t.style.left=`10px`,t.style.right=`10px`,t.style.height=`120px`,t.style.zIndex=`4`,t.style.background=`#222`,t.style.color=`#fff`,t.style.overflow=`auto`,t.style.padding=`4px`,t.style.fontSize=`12px`,t.style.position=t.style.position||`relative`,!t){console.warn(`event editor container "${e}" not found`);return}let n,r=!1,i=[{name:`showFlags`,type:`boolean`},{name:`showWR`,type:`boolean`},{name:`showSpeed`,type:`boolean`},{name:`showDivingDistance`,type:`boolean`},{name:`showFinishTimes`,type:`boolean`},{name:`showSwimmersLines`,type:`select`,options:k.params.visualizations.swimmersLinesList},{name:`swimmersLinesMode`,type:`select`,options:k.params.visualizations.swimmersLinesModeList},{name:`customWaterPerturbation`,type:`select`,options:k.params.visualizations.customParametersList},{name:`waterColorParameter`,type:`select`,options:k.params.visualizations.customParametersList},{name:`medalsModeBeforeFinish`,type:`select`,options:[`none`,`stars`,`bright`,`lanes`]},{name:`medalsModeAfterFinish`,type:`select`,options:[`none`,`stars`,`bright`,`lanes`]},{name:`rankSwimmerToggle`,type:`number`,min:1,max:10},{name:`showStreaks`,type:`boolean`}];function a(e){let t=document.createElement(`div`);t.style.flex=`1`,t.style.padding=`4px`,t.style.background=`#222`,t.style.border=`1px solid #555`,t.style.borderRadius=`4px`,t.style.fontFamily=`monospace`,t.style.fontSize=`12px`,t.style.whiteSpace=`pre-wrap`,t.style.overflow=`auto`,t.style.maxHeight=`100px`;function n(){let n=e.params;if(Object.keys(n).length===0){t.textContent=`(no params)`;return}t.textContent=Object.entries(n).map(([e,t])=>`${e}: ${JSON.stringify(t)}`).join(`
`)}return n(),{element:t,update:n}}function o(e,t){let n=document.createElement(`div`);n.style.display=`flex`,n.style.flexWrap=`wrap`,n.style.margin=`4px 0`,n.style.background=`#333`,n.style.padding=`4px`;function r(){t&&(t(),p())}i.forEach(t=>{let i=document.createElement(`div`);i.style.marginRight=`8px`,i.style.marginBottom=`4px`;let a=document.createElement(`label`);a.style.whiteSpace=`nowrap`,a.textContent=t.name+`:`,i.appendChild(a);let o;if(t.type===`boolean`){o=document.createElement(`select`),[{value:``,label:`—`},{value:`true`,label:`ON`},{value:`false`,label:`OFF`}].forEach(e=>{let t=document.createElement(`option`);t.value=e.value,t.textContent=e.label,o.appendChild(t)});let n=e.params[t.name];n===void 0?o.value=``:n===!0?o.value=`true`:n===!1&&(o.value=`false`),o.addEventListener(`change`,()=>{o.value===``?delete e.params[t.name]:o.value===`true`?e.params[t.name]=!0:o.value===`false`&&(e.params[t.name]=!1),r()})}else if(t.type===`select`){o=document.createElement(`select`);let n=document.createElement(`option`);n.value=``,n.textContent=`—`,o.appendChild(n),t.options.forEach(e=>{let t=document.createElement(`option`);t.value=e,t.textContent=e,o.appendChild(t)}),o.value=e.params[t.name]||``,o.addEventListener(`change`,()=>{o.value===``?delete e.params[t.name]:e.params[t.name]=o.value,r()})}else t.type===`number`&&(o=document.createElement(`input`),o.type=`number`,t.min!==void 0&&(o.min=t.min),t.max!==void 0&&(o.max=t.max),o.placeholder=`—`,o.style.width=`50px`,o.value=e.params[t.name]===void 0?``:e.params[t.name],o.addEventListener(`change`,()=>{if(o.value===``)delete e.params[t.name];else{let n=parseFloat(o.value);isNaN(n)||(e.params[t.name]=n)}r()}));o&&i.appendChild(o),n.appendChild(i)});let a=document.createElement(`div`);a.style.marginRight=`8px`,a.style.marginBottom=`4px`;let o=document.createElement(`label`);o.style.whiteSpace=`nowrap`,o.textContent=`transition :`,a.appendChild(o);let s=document.createElement(`input`);return s.type=`number`,s.min=0,s.placeholder=`—`,s.style.width=`50px`,s.value=e.transition===void 0?``:e.transition.duration,s.addEventListener(`change`,()=>{if(s.value===``){delete e.transition;return}let t=parseFloat(s.value);isNaN(t)||(e.transition={type:`dissolve`,duration:t},r())}),a.appendChild(s),n.appendChild(a),n}function s(){let e=document.createElement(`div`);e.style.marginTop=`8px`,e.style.padding=`8px`,e.style.background=`#555`,e.style.border=`1px solid #777`;let t=document.createElement(`div`);t.textContent=`Add New Event`,t.style.fontWeight=`bold`,t.style.marginBottom=`4px`,e.appendChild(t);let r=document.createElement(`input`);r.type=`number`,r.placeholder=`Distance`,r.style.width=`auto`,r.style.marginRight=`8px`,e.appendChild(r);let i={params:{}},a=o(i,null);a.style.margin=`4px 0`,e.appendChild(a);let s=document.createElement(`button`);s.textContent=`OK`,s.addEventListener(`click`,()=>{let e=parseFloat(r.value);if(isNaN(e)){alert(`Please enter a valid distance`);return}let t={distance:e,...i};k.events.push(t),p(),n.remove(),n=null}),e.appendChild(s);let c=document.createElement(`button`);return c.textContent=`cancel`,c.addEventListener(`click`,()=>{n.remove(),n=null}),e.appendChild(c),e}function c(e,t,{title:n=``,id:r=null,color:i=`#e74c3c`}){let a=t>0?e/t*100:0,o=document.createElement(`div`);return o.style.position=`absolute`,o.style.left=a+`%`,o.style.transform=`translateX(-50%)`,o.style.width=`4px`,o.style.height=`100%`,o.style.background=i,o.style.cursor=`pointer`,o.title=n,r&&(o.id=r),o.addEventListener(`click`,()=>{f(idx)}),o}function l(){let e=document.getElementById(`distance-marker`),t=k.swimmers[0].getDistanceTraveled();if(!e){if(r)return;let n=document.getElementById(`timeline-track`);e=c(t,V,{color:`blue`,id:`distance-marker`}),n.appendChild(e)}e.style.left=t+`%`}function u(e){r=e,d()}function d(){t.innerHTML=``;let e=document.createElement(`button`);if(e.textContent=r?`□`:`—`,e.style.position=`absolute`,e.style.top=`0`,e.style.right=`0`,e.style.width=`20px`,e.style.height=`20px`,e.style.zIndex=`100001`,e.addEventListener(`click`,()=>{r=!r,d()}),t.appendChild(e),r){t.style.height=`20px`;return}t.style.height=`300px`;let l=document.createElement(`div`);if(l.style.position=`relative`,l.style.top=`0px`,l.style.left=`50%`,l.style.transform=`translateX(-50%)`,l.style.width=`80px`,l.style.height=`15px`,l.style.background=`grey`,l.style.border=`1px solid black`,l.style.cursor=`ns-resize`,l.style.zIndex=`100000`,l.style.lineHeight=`16px`,l.style.textAlign=`center`,l.textContent=`drag`,t.appendChild(l),l.addEventListener(`mousedown`,e=>{e.preventDefault();let n=e.clientY,r=t.offsetHeight;function i(e){let i=r-(e.clientY-n);i>20&&(t.style.height=i+`px`)}function a(){document.removeEventListener(`mousemove`,i),document.removeEventListener(`mouseup`,a)}document.addEventListener(`mousemove`,i),document.addEventListener(`mouseup`,a)}),!k.events){t.textContent=`no events defined`;return}let u=document.createElement(`div`);t.appendChild(u),u.style.marginRight=`8px`,u.style.marginBottom=`4px`;let f=document.createElement(`label`);f.style.whiteSpace=`nowrap`,f.textContent=`select scene`,f.style.margin=`30px`,u.appendChild(f);let m=document.createElement(`select`);m.style.width=`auto`,k.scenesList.forEach(e=>{let t=document.createElement(`option`);t.textContent=e.title,t.value=e.title,m.appendChild(t)}),m.addEventListener(`change`,()=>{k.setScene(m.value)}),u.appendChild(m);let h=k.events.slice().sort((e,t)=>(e.distance===void 0?e.time===void 0?0:e.time:e.distance)-(t.distance===void 0?t.time===void 0?0:t.time:t.distance)),g=new Set;h.forEach(e=>{e.params&&Object.keys(e.params).forEach(e=>g.add(e))});let _=i.map(e=>e.name).filter(e=>g.has(e)),v=[`#4caf50`,`#2196f3`,`#ff9800`,`#9c27b0`,`#f44336`,`#009688`,`#e91e63`,`#3f51b5`],y={};_.forEach((e,t)=>{y[e]=v[t%v.length]});let b={},x={};_.forEach(e=>{x[e]=!1,b[e]=0});let S=[];if(h.forEach(e=>{let t=e.distance===void 0?e.time===void 0?0:e.time:e.distance;e.params&&Object.keys(e.params).forEach(n=>{if(_.includes(n)){let r=!!e.params[n];r!==x[n]&&(x[n]&&S.push({name:n,start:b[n],end:t}),x[n]=r,b[n]=t)}})}),_.forEach(e=>{x[e]&&S.push({name:e,start:b[e],end:V})}),_.length>0){let e=document.createElement(`div`);e.style.position=`relative`,e.style.height=_.length*20+`px`,e.style.background=`#222`,e.style.marginBottom=`4px`,e.style.marginTop=`10px`,_.forEach((t,n)=>{let r=document.createElement(`div`);r.textContent=t,r.style.position=`absolute`,r.style.left=`0`,r.style.top=n*20+2+`px`,r.style.width=`150px`,r.style.color=`#aaa`,r.style.fontSize=`10px`,r.style.pointerEvents=`none`,e.appendChild(r)});let n=document.createElement(`div`);n.style.position=`absolute`,n.style.left=`150px`,n.style.top=`0`,n.style.right=`0`,n.style.bottom=`0`,n.style.overflow=`hidden`,e.appendChild(n),S.forEach(e=>{let t=document.createElement(`div`),r=e.start/V*100,i=(e.end-e.start)/V*100;t.style.position=`absolute`,t.style.left=r+`%`,t.style.top=_.indexOf(e.name)*20+2+`px`,t.style.height=`16px`,t.style.width=i+`%`,t.style.background=y[e.name]||`#4caf50`,t.title=`${e.name}: ${e.start.toFixed(2)} → ${e.end.toFixed(2)}`;let a=document.createElement(`span`);if(a.textContent=`${e.name}: ${e.start.toFixed(2)} → ${e.end.toFixed(2)}`,a.style.position=`absolute`,a.style.top=`0`,a.style.left=`2px`,a.style.fontSize=`10px`,a.style.color=`white`,a.style.pointerEvents=`none`,a.style.whiteSpace=`nowrap`,a.style.overflow=`hidden`,a.style.textOverflow=`ellipsis`,t.appendChild(a),e.end<V){let r=document.createElement(`div`);r.style.position=`absolute`,r.style.right=`0`,r.style.top=`0`,r.style.width=`5px`,r.style.height=`100%`,r.style.background=`rgba(255,255,255,0.5)`,r.style.cursor=`ew-resize`,t.appendChild(r),r.addEventListener(`mousedown`,r=>{r.preventDefault(),r.stopPropagation();let i=r.clientX,o=t.offsetWidth;function s(r){let s=r.clientX-i,c=Math.max(1,o+s),l=c/n.offsetWidth*100;t.style.width=l+`%`;let u=e.start+c/n.offsetWidth*V;a.textContent=`${e.name}: ${e.start.toFixed(2)} → ${u.toFixed(2)}`}function c(){document.removeEventListener(`mousemove`,s),document.removeEventListener(`mouseup`,c);let r=t.offsetWidth,i=e.start+r/n.offsetWidth*V,a=h.find(t=>(t.distance===void 0?t.time===void 0?0:t.time:t.distance)===e.end);a&&(a.distance===void 0?a.time!==void 0&&(a.time=i):a.distance=i),p()}document.addEventListener(`mousemove`,s),document.addEventListener(`mouseup`,c)})}n.appendChild(t)}),t.appendChild(e)}let C=document.createElement(`div`);C.style.position=`relative`,C.style.height=`40px`,C.style.background=`#222`,C.style.marginBottom=`4px`,C.style.paddingLeft=`80px`;let w=document.createElement(`div`);w.id=`timeline-track`,w.style.position=`absolute`,w.style.background=`#444`,w.style.left=`150px`,w.style.top=`0`,w.style.right=`0`,w.style.bottom=`0`,C.appendChild(w),h.forEach((e,t)=>{let n=c(e.distance===void 0?e.time===void 0?0:e.time:e.distance,V,{title:`event ${t}: ${JSON.stringify(e.params)}`});w.appendChild(n)}),t.appendChild(C),h.forEach((e,n)=>{let r=document.createElement(`div`);r.style.display=`flex`,r.style.flexDirection=`column`,r.style.marginBottom=`4px`;let i=document.createElement(`div`);i.style.display=`flex`,i.style.alignItems=`center`;let s=document.createElement(`input`);s.type=`number`,s.style.width=`60px`,s.value=e.distance===void 0?e.time===void 0?0:e.time:e.distance,s.addEventListener(`change`,()=>{let t=parseFloat(s.value);isNaN(t)||(e.distance===void 0?e.time=t:e.distance=t,p())}),i.appendChild(s);let c=a(e);i.appendChild(c.element);let l=document.createElement(`button`);l.textContent=`⚙`,l.style.marginLeft=`4px`,i.appendChild(l);let u=document.createElement(`button`);u.textContent=`✖`,u.style.marginLeft=`4px`,u.addEventListener(`click`,()=>{let e=k.events.indexOf(h[n]);e!==-1&&(k.events.splice(e,1),d())}),i.appendChild(u),r.appendChild(i);let f;l.addEventListener(`click`,()=>{f?(f.remove(),f=null):(f=o(e,c.update),r.appendChild(f))}),t.appendChild(r)});let T=document.createElement(`button`);T.textContent=`+ add event`,T.addEventListener(`click`,()=>{n?(n.remove(),n=null):(n=s(),t.appendChild(n),t.scrollTop=t.scrollHeight)}),t.appendChild(T);let E=document.createElement(`button`);E.textContent=`export JSON`,E.style.marginLeft=`8px`,E.addEventListener(`click`,()=>{let e=JSON.stringify(k.events,null,2),t=new Blob([e],{type:`application/json`}),n=URL.createObjectURL(t),r=document.createElement(`a`);r.href=n,r.download=`vis-config.json`,r.click(),URL.revokeObjectURL(n)}),t.appendChild(E);let D=document.createElement(`input`);D.type=`file`,D.accept=`.json`,D.style.marginLeft=`8px`,D.addEventListener(`change`,e=>{let t=e.target.files[0];if(t){let e=new FileReader;e.onload=e=>{try{k.events=JSON.parse(e.target.result),p()}catch(e){alert(`Invalid JSON: `+e.message)}},e.readAsText(t)}}),t.appendChild(D)}function f(e){let n=t.querySelectorAll(`div`)[1+e];n&&n.scrollIntoView({behavior:`smooth`,block:`center`})}function p(){k.events.sort((e,t)=>(e.distance===void 0?e.time===void 0?0:e.time:e.distance)-(t.distance===void 0?t.time===void 0?0:t.time:t.distance)),d()}d(),k._renderTimeline=d,k._updateDistanceMarker=l,k._setPannelMinimized=u}var pe=new t.Mesh.plane({width:2,height:2,coords:!0,normals:!0}),me=new t.Shader(`
    out highp vec2 pos;
    out highp vec2 vTextureCoord;


    void main(void) {
        gl_Position = vec4(gl_Vertex.xy, 0., 1.);
        pos = gl_Vertex.xy;

        vTextureCoord = gl_TexCoord.st;
    }
`,`
    in highp vec2 pos;
    in highp vec2 vTextureCoord;
    uniform float distanceFixed;
    uniform vec3 poolSize;
    uniform vec3 clearColor;
    uniform sampler2D screen;
    uniform sampler2D videoTex;
    uniform sampler2D oldPicture;
    uniform vec2 linep1;
    uniform vec2 linep2;
    uniform vec2 center;
    uniform float circleZone;
    out vec4 fragColor;




    bool isInFixedPart(vec2 p) {
        if (circleZone > .1) {
            float deltaY = .3;
            p.y -= 2.*deltaY;
            vec3 waterColor1 = vec3(.39, .98, .9);
            vec3 waterColor2 = vec3(.08, .57, .59);
            vec3 skinColor1 = vec3(1., 1., .9);
            vec3 skinColor2 = vec3(.39, .3, .2);
            vec3 color = texture(videoTex, vTextureCoord - vec2(0., deltaY)).rgb;
            vec2 diff = p - center;
            diff.x *= 2.;
            float d1 = length(color - waterColor1);
            float d2 = length(color - waterColor2);
            float d3 = length(color - skinColor1);
            float d4 = length(color - skinColor2);
            // bool isSkin = d3 < d2 && d3 < d1 || d4 < d2 && d4 < d1 || d3 + d4 < d1 + d2;
            bool isSkin = color.r > color.b * 0.9;
            // isSkin = !(d1 < .4 || d2 < .4);
            return dot(diff, diff) <= .01;
            return dot(diff, diff) <= .02 && isSkin;
        }
        // vec4 P1 = vec4(poolSize.x/2., 0., distanceFixed - poolSize.z / 2., 1.);
        // vec4 P2 = vec4(-poolSize.x/2., 0., distanceFixed - poolSize.z / 2., 1.);
        // vec4 P1 = vec4(12.5, 0., distanceFixed - 12.52, 1.);
        // vec4 P2 = vec4(-12.5, 0., distanceFixed - 12.52, 1.);
        // vec2 p1 = (gl_ModelViewMatrix * P1).xy;
        // vec2 p2 = (gl_ModelViewMatrix * P2).xy;
        vec2 p1 = linep1;
        vec2 p2 = linep2;
        // p1 = vec2(-.4, -.8);
        // p2 = vec2(.2, .5);
        // p1 = vec2(-1., 0.);
        // p2 = vec2(1., 0.);
        vec2 d = p2 - p1;
        vec2 n = vec2(-d.y, d.x);
        // return dot(vec2(0.5, .5)-p1, n) <= 0.;
        return dot(p-p1, n) <= 0.;
    }

    bool isInPinPointLine(vec2 p) {
        vec2 diff = p - center;
        return abs(diff.x) <= .005 && diff.y >= 0. && diff.y <= 2.*.3;
    }

    void main() {
        vec4 oldPix = texture(oldPicture, vTextureCoord);
        if (oldPix.rgb != vec3(0)) {
            fragColor = oldPix;
            if (circleZone == 0.) return;
        }
        if (circleZone > .1 && isInPinPointLine(vTextureCoord*2.-1.)) fragColor = vec4(1.);
        if (isInFixedPart(vTextureCoord*2.-1.)) {
            if(circleZone > .01) fragColor = texture(videoTex, vTextureCoord - vec2(0., 0.3));
            else fragColor = texture(screen, vTextureCoord);
        }
        // if(circleZone && isInFixedPart(vTextureCoord*2.-1.)) fragColor = texture(videoTex, vTextureCoord);
        // if(isInFixedPart(vTextureCoord*2.-1.)) fragColor = vec4(1., 0., 0., 1.);
        // if(isInFixedPart(vTextureCoord*2.-1.)) texture(screen, vTextureCoord);
        // if(isInFixedPart(pos)) fragColor = texture(screen, vTextureCoord);
        // else fragColor = vec4(0., 0., 0., 0.);
    }
`),he=new t.Shader(`
    out highp vec2 pos;
    out highp vec2 vTextureCoord;


    void main(void) {
        gl_Position = vec4(gl_Vertex.xy, 0., 1.);
        pos = gl_Vertex.xz;

        vTextureCoord = gl_TexCoord.st;
    }
`,`
    in highp vec2 pos;
    in highp vec2 vTextureCoord;

    uniform vec3 poolSize;
    uniform sampler2D picture;
    uniform sampler2D screen;

    out vec4 fragColor;


    void main() {
        vec2 coord = (pos + 1.) / 2.;
        // vec4 pix = texture(screen, coord);
        vec4 pix = texture(screen, vTextureCoord);
        vec4 pixPicture = texture(picture, vTextureCoord);
        fragColor = pix;
        if(pixPicture.rgb != vec3(0)) fragColor = pixPicture;
        
    }
`),H=new t.Texture,U=new t.Texture,ge=!1,_e=null,ve=(e,n,r)=>{ge=!0,H=new t.Texture(e,n,{type:r.FLOAT,filter:r.NEAREST}),U=new t.Texture(e,n,{type:r.FLOAT,filter:r.NEAREST}),_e=r.createFramebuffer(),r.bindFramebuffer(r.FRAMEBUFFER,_e);let i=r.COLOR_ATTACHMENT0;r.framebufferTexture2D(r.FRAMEBUFFER,i,r.TEXTURE_2D,H.id,0),r.bindFramebuffer(r.FRAMEBUFFER,null)};function W(e){e.x/=k.gl.canvas.width/2,--e.x,e.y/=k.gl.canvas.height/2,--e.y}var ye=e=>{console.log(`take chrono photo : `+e),ge||ve(k.gl.canvas.width,k.gl.canvas.height,k.gl);let t=k.params.simulation.poolSize,n=k.gl.project(t.x/2,0,k.distanceFixed+1-t.z/2),r=k.gl.project(-t.x/2,0,k.distanceFixed+1-t.z/2);W(n),W(r);let i=k.swimmers[0].body.center,a=k.gl.project(i.x,i.y,i.z);W(a),U.drawTo(()=>{H.bind(0),k.gl.activeTexture(k.gl.TEXTURE1),k.gl.bindTexture(k.gl.TEXTURE_2D,k.drawingTexture),k.gl.activeTexture(k.gl.TEXTURE2),k.gl.bindTexture(k.gl.TEXTURE_2D,k.currentVideo.texture),me.uniforms({oldPicture:0,screen:1,videoTex:2,distanceFixed:k.distanceFixed,poolSize:[k.params.simulation.poolSize.x,k.params.simulation.poolSize.y,k.params.simulation.poolSize.z],linep1:[n.x,n.y],linep2:[r.x,r.y],center:[a.x,a.y],circleZone:e}).draw(pe)}),H.swapWith(U),k.gl.bindFramebuffer(k.gl.FRAMEBUFFER,k.drawingFrameBuffer)},be=()=>{k.chronoPhotoCircleTime&&k.time>=k.chronoPhotoCircleTime&&(k.chronoPhotoCircleTime=null,ye(!0)),k.gl.bindFramebuffer(k.gl.FRAMEBUFFER,null),H.bind(7),k.gl.activeTexture(k.gl.TEXTURE8),k.gl.bindTexture(k.gl.TEXTURE_2D,k.drawingTexture),he.uniforms({picture:7,screen:8}).draw(pe)};k._fixTexture=ye,k._clearChronoTexture=ve;var xe=(e,t,n)=>{if(!t.has(e))throw TypeError(`Cannot `+n)},G=(e,t,n)=>(xe(e,t,`read from private field`),n?n.call(e):t.get(e)),Se=(e,t,n,r)=>(xe(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),K=(e,t,n)=>(xe(e,t,`access private method`),n),Ce=2,we=new WeakMap,Te=new WeakMap,q=new WeakMap,J=new WeakMap,Ee=new WeakSet,De=function(e,t){let n=G(this,J).findIndex(e=>e.start<=t&&t<e.start+G(this,q));n===-1&&(n=K(this,Ae,je).call(this,t));let r=G(this,J)[n],i=t-r.start,a=e.subarray(0,Math.min(G(this,q)-i,e.byteLength));r.data.set(a,i);let o={start:i,end:i+a.byteLength};if(K(this,Oe,ke).call(this,r,o),r.written[0].start===0&&r.written[0].end===G(this,q)&&(r.shouldFlush=!0),G(this,J).length>Ce){for(let e=0;e<G(this,J).length-1;e++)G(this,J)[e].shouldFlush=!0;K(this,Me,Ne).call(this)}a.byteLength<e.byteLength&&K(this,Ee,De).call(this,e.subarray(a.byteLength),t+a.byteLength)},Oe=new WeakSet,ke=function(e,t){let n=0,r=e.written.length-1,i=-1;for(;n<=r;){let a=Math.floor(n+(r-n+1)/2);e.written[a].start<=t.start?(n=a+1,i=a):r=a-1}for(e.written.splice(i+1,0,t),(i===-1||e.written[i].end<t.start)&&i++;i<e.written.length-1&&e.written[i].end>=e.written[i+1].start;)e.written[i].end=Math.max(e.written[i].end,e.written[i+1].end),e.written.splice(i+1,1)},Ae=new WeakSet,je=function(e){let t={start:Math.floor(e/G(this,q))*G(this,q),data:new Uint8Array(G(this,q)),written:[],shouldFlush:!1};return G(this,J).push(t),G(this,J).sort((e,t)=>e.start-t.start),G(this,J).indexOf(t)},Me=new WeakSet,Ne=function(e=!1){for(let t=0;t<G(this,J).length;t++){let n=G(this,J)[t];if(!(!n.shouldFlush&&!e)){for(let e of n.written){if(G(this,Te)&&n.start+e.start<G(this,we))throw Error(`Internal error: Monotonicity violation.`);this.target.options.onData?.(n.data.subarray(e.start,e.end),n.start+e.start),Se(this,we,n.start+e.end)}G(this,J).splice(t--,1)}}};new TextEncoder;function Pe(e,t,n){let r=t*4,i=new Uint8Array(e.length);for(let t=0;t<n;t++){let a=t*r,o=(n-t-1)*r;i.set(e.subarray(a,a+r),o)}return i}async function Fe(e,t,n,r){let i=e.canvas.width,a=e.canvas.height,o=window.devicePixelRatio||1;e.canvas.width=n,e.canvas.height=r,e.canvas.style.width=n/o+`px`,e.canvas.style.height=r/o+`px`,e.matrixMode(e.PROJECTION),e.loadIdentity(),e.perspective(k.params.fov,n/r,.01,100),e.matrixMode(e.MODELVIEW),t(n,r);let s=new Uint8Array(n*r*4);e.readPixels(0,0,n,r,e.RGBA,e.UNSIGNED_BYTE,s);let c=Pe(s,n,r),l=document.createElement(`canvas`);l.width=n,l.height=r;let u=l.getContext(`2d`),d=u.createImageData(n,r);return d.data.set(c),u.putImageData(d,0,0),e.canvas.width=i,e.canvas.height=a,e.canvas.style.width=i/o+`px`,e.canvas.style.height=a/o+`px`,e.matrixMode(e.PROJECTION),e.loadIdentity(),e.perspective(k.params.fov,i/a,.01,100),e.matrixMode(e.MODELVIEW),t(i,a),new Promise(e=>{l.toBlob(t=>{e(t)},`image/png`)})}function Ie(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/\n/g,`<br>`)}function Le(e){var t=Ie(e);t==`WebGL not supported`&&(t=`Your browser does not support WebGL.<br>Please see    <a href="http://www.khronos.org/webgl/wiki/Getting_a_WebGL_Implementation">    Getting a WebGL Implementation</a>.`);var n=document.getElementById(`loading`);n.innerHTML=t,n.style.zIndex=1}window.onerror=Le;var Re,Y,ze=10,X=k.gl,Z,Be;I.initAttributes();function Ve(){document.getElementById(`warning`).hidden=!(k.resolution.x*k.resolution.y>3e5&&k.water&&k.params.visualizations.areaConservation.enabled)}var He=0,Ue=0,Q=0;function We(e){He+=e,Ue+=1/e,Q++,He>=1&&(Ue/=Q,document.getElementById(`fps`).innerText=`${(1/e).toFixed(1)} FPS`,He=0,Q=0)}function $(){console.log(`reset`),document.getElementById(`resolution`).innerText=`Resolution: ${k.resolution.x} x ${k.resolution.y}`,Ve(),Z=new t.Vector(0,-k.params.simulation.poolSize.z/2+1),k.water.reset(k.resolution),Y.flagCenter=Z,Y.flagSize=Be,Y.reset();let e=k.params.simulation.poolSize.x/ze,n=-k.params.simulation.poolSize.x/2+e/2,r=0;for(let t of k.swimmers)t.body.center.x=n,t.body.initCenter=t.body.center.clone(),t.startingPoint.x=n,r++,n+=e}function Ge(e){let t=parseFloat(e.target.value);isNaN(t)||(k.setRaceTime(t),k.swimmers.forEach(e=>e.setCurrentDataIndex()))}window.onload=function(){var e=window.devicePixelRatio||1,n=document.getElementById(`help`);function r(){var t=innerWidth,n=innerHeight;X.canvas.width=t*e,X.canvas.height=n*e,X.canvas.style.width=t+`px`,X.canvas.style.height=n+`px`,X.viewport(0,0,X.canvas.width,X.canvas.height),X.matrixMode(X.PROJECTION),X.loadIdentity(),X.perspective(k.params.fov,X.canvas.width/X.canvas.height,.01,100),X.matrixMode(X.MODELVIEW),k.resetDrawingTexture(),A()}document.body.appendChild(X.canvas),X.canvas.oncontextmenu=function(e){e.preventDefault()},X.clearColor(0,0,0,1),Z=new t.Vector(0,-k.params.simulation.poolSize.z/2+1),Be=.7;let i=document.getElementById(`time-slider`);i&&i.addEventListener(`input`,Ge);let a=document.getElementById(`drop-zone`),o=0;document.addEventListener(`dragenter`,e=>{o++,a.style.display=`flex`}),document.addEventListener(`dragover`,e=>{e.preventDefault(),e.dataTransfer.dropEffect=`copy`}),document.addEventListener(`dragleave`,e=>{o--,o===0&&(a.style.display=`none`)}),de(X,$),k._reset=$,setTimeout(()=>{fe(`event-editor`,k)},50),Y=new R(X,k.water,Z,Be),Re=new z({xneg:document.getElementById(`xneg`),xpos:document.getElementById(`xpos`),yneg:document.getElementById(`ypos`),ypos:document.getElementById(`ypos`),zneg:document.getElementById(`zneg`),zpos:document.getElementById(`zpos`)},X);let s=new I(new t.Vector(0,0,0));if(k.swimmers.push(s),k.water=new h(k.gl),!k.water.textureA.canDrawTo()||!k.water.textureB.canDrawTo())throw Error(`Rendering to floating-point textures is required but not supported`);$();for(var c=0;c<20;c++)k.water.addDrop(Math.random()*2-1,Math.random()*2-1,.06,c&1?.01:-.01);document.getElementById(`loading`).innerHTML=``,r();var l=window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(e){setTimeout(e,0)},u=new Date().getTime();function d(){var e=new Date().getTime();te((e-u)/1e3),A(),u=e,l(d)}l(d),window.onresize=r;var f,p,m,g=-1,_=0,v=1,y=2,b,x;function S(n,r,i){if(b=n,x=r,!i||i.button===0){var a=new t.Raytracer,o=a.getRayForPixel(n*e,r*e),s=a.eye.add(o.multiply(-a.eye.y/o.y));for(let e of k.swimmers){var c=t.Raytracer.hitTestSphere(a.eye,o,e.body.center,e.body.radius);if(c){g=v,m=e,e.body.cinematic=!0,f=c.hit,p=a.getRayForPixel(X.canvas.width/2,X.canvas.height/2).negative();return}}Math.abs(s.x)<k.params.simulation.poolSize.x/2&&Math.abs(s.z)<k.params.simulation.poolSize.z/2&&(g=_,C(n,r))}else i.button===2?g=y:i.button===1&&(g=3)}function C(n,r,i){switch(g){case _:var a=new t.Raytracer,o=a.getRayForPixel(n*e,r*e),s=a.eye.add(o.multiply(-a.eye.y/o.y));k.water.addDrop(s.x/k.params.simulation.poolSize.x*2,s.z/k.params.simulation.poolSize.z*2,.06,.03),k.paused&&(k.water.updateNormals(),Y.updateCaustics(k.water));break;case v:{var a=new t.Raytracer,o=a.getRayForPixel(n*e,r*e),c=-p.dot(a.eye.subtract(f))/p.dot(o),l=a.eye.add(o.multiply(c));let i=m.body.center.add(l.subtract(f)),s=m.body.radius,u=Math.max(s-k.params.simulation.poolSize.x/2,Math.min(k.params.simulation.poolSize.x/2-s,i.x)),d=Math.max(s-k.params.simulation.poolSize.y,Math.min(10,i.y)),h=Math.max(s-k.params.simulation.poolSize.z/2,Math.min(k.params.simulation.poolSize.z/2-s,i.z));m.body.move(new t.Vector(u,d,h)),f=l,k.paused&&Y.updateCaustics(k.water);break}case y:if(i&&i.shiftKey){k.angleZ-=n-b,k.angleZ=Math.max(-89.999,Math.min(89.999,k.angleZ));break}k.angleY-=n-b,k.angleX-=r-x,k.angleX=Math.max(-89.999,Math.min(89.999,k.angleX));break;case 3:{let e=.001*k.zoomDistance;k.translateX+=e*(n-b),k.translateY-=e*(r-x)}}b=n,x=r,k.paused&&A()}function w(){g=-1,m&&(m.body.cinematic=!I.useGravity)}function T(e){return e===n||e.parentNode&&T(e.parentNode)}function E(e){return e&&(e.id===`event-editor`||e.parentNode&&E(e.parentNode))}function D(e){k.zoomDistance*=1-e*2e-4,k.zoomDistance=Math.max(2,Math.min(1e3,k.zoomDistance)),k.paused&&A()}addEventListener(`wheel`,function(e){if(!E(e.target)){var t=e.deltaY;D(-t)}}),document.onmousedown=function(e){X.canvas.focus(),T(e.target)||S(e.pageX,e.pageY,e)},document.onmousemove=function(e){C(e.pageX,e.pageY,e)},document.onmouseup=function(){w()},document.ontouchstart=function(e){e.touches.length===1&&!T(e.target)&&(e.preventDefault(),S(e.touches[0].pageX,e.touches[0].pageY,!1))},document.ontouchmove=function(e){e.touches.length===1&&C(e.touches[0].pageX,e.touches[0].pageY)},document.ontouchend=function(e){e.touches.length==0&&w()};function O(){k.paused?k.play():k.pause()}X.canvas.addEventListener(`keydown`,async function(e){if(e.which==32)O();else if(e.which==71)k.useGravity(!I.useGravity);else if(e.which==76&&k.paused)A();else if(e.which==74)k.swimmers.forEach(e=>e.jump(2));else if(e.which==67)k.params.visualizations.areaConservation.enabled=!k.params.visualizations.areaConservation.enabled,Ve(),console.log(`Area conservation `+(k.params.visualizations.areaConservation.enabled?`enabled.`:`disabled.`));else if(e.which==80)k.water.showProjectionGrid=!k.water.showProjectionGrid,console.log(`Projection grid `+(k.water.showProjectionGrid?`enabled.`:`disabled.`));else if(e.which==65)k.water.showAreaConservedGrid=!k.water.showAreaConservedGrid,console.log(`Area conserved grid `+(k.water.showAreaConservedGrid?`enabled.`:`disabled.`));else if(e.which==83){if(I.swimming=!I.swimming,I.swimming)for(let e of k.swimmers)e.swim(!0);else stopRace();console.log(`Swimming `+(I.swimming?`enabled.`:`disabled.`))}else if(e.which==86)k.params.video.show=!k.params.video.show;else if(e.which==72)document.getElementById(`commands`).hidden=!document.getElementById(`commands`).hidden,document.getElementById(`h`).hidden=!document.getElementById(`h`).hidden;else if(e.which==68)k.playingDemo?k.stopDemo():await k.launchDemo();else if(e.which==81)k.chronoPhotography({});else if(e.which==82)k.setScene(`100m freestyle`).then(()=>k.startRace()),k._setPannelMinimized(!0);else if(e.which==78)k.resolution.x=512,k.resolution.y=512,k.params.simulation.poolSize.x=10,k.params.simulation.poolSize.z=10,k.params.visualizations.areaConservation.enabled=!1,k.params.visualizations.rendering=`lambert`,k.params.quiver.alwaysActive=!0,k.params.quiver.amplitude=.43,k.params.quiver.frequencyFactor=1.17,k.params.quiver.waveLength=2.9,k.params.visualizations.showFlags=!0,k.params.swimmers.showSpheres=!1,$(),k.swimmers[0].body.move(new t.Vector(0,0,0)),k.swimmers[0].nationality=1,k.params.flags.flagSize.x=3,k.params.flags.flagSize.y=4,k._setPannelMinimized(!0);else if(e.which==88){let e=await Fe(k.gl,A,7680,4320),t=URL.createObjectURL(e),n=document.createElement(`a`);n.href=t,n.download=`screenshot.png`,n.click()}else e.which==66?k.params.visualizations.areaConservation.optimized=!k.params.visualizations.areaConservation.optimized:e.which==77?k.setMVPMI():e.which==75?k.recalibrate():e.which==40?(k.resolution.x>129&&(k.resolution.x=Math.round(k.resolution.x/2)),$(),console.log(`decreasing x resolution`)):e.which==38?(k.resolution.x<16384&&(k.resolution.x=Math.round(k.resolution.x*2)),$(),console.log(`increasing x resolution`)):e.which==37?(k.resolution.y>129&&(k.resolution.y=Math.round(k.resolution.y/2)),$(),console.log(`decreasing y resolution`)):e.which==39&&(k.resolution.y<16384&&(k.resolution.y=Math.round(k.resolution.y*2)),$(),console.log(`increasing y resolution`))});var ee=0;function te(e){if(k.updateDemo(e),!k.paused&&!(e>1)){if(ee+=e*2,g==v)for(let e of k.swimmers)e.body.velocity=new t.Vector(0,0,0);X.clearColor(0,0,0,1),X.bindFramebuffer(X.FRAMEBUFFER,null),X.clear(X.COLOR_BUFFER_BIT|X.DEPTH_BUFFER_BIT);for(let t of k.swimmers)t.update(e);k.updateFloaters(e),k.classicalOverlayEnabled||k.water.updateSpheres(e);for(let t=0;t<k.params.numSteps;t++)k.classicalOverlayEnabled||k.water.stepSimulation(e);Y.updateCaustics(k.water),k.updateTime(e),k.updateParams(),i.value=k.getRaceTime(),We(e),k.splashParticles.update(e),k.bubbleSpheres.forEach(t=>t.update(e))}}function ne(){if(!I.raceHasStarted||!k.params.cornerView.show||k.classicalOverlayEnabled)return;k.cornerView=!0,X.loadIdentity(),X.translate(0,0,-35),X.rotate(90,1,0,0),X.rotate(-90,0,1,0),X.translate(0,.5,0);let e=X.canvas.height/4,t=16*e/9,n=X.canvas.height-e;X.viewport(0,n,t,e),Y.renderWater(k.water,Re,k.params.visualizations.shadow),k.isSceneSynchronizedSwimming()&&(k.params.visualizations.showStreaks||k.params.simulation.splashes.enabled)&&k.splashParticles.draw({}),Y.renderSpheres(k.water),X.viewport(0,0,X.canvas.width,X.canvas.height),X.loadIdentity(),X.translate(k.translateX,k.translateY,-k.zoomDistance),X.rotate(-k.angleZ,0,0,1),X.rotate(-k.angleX,1,0,0),X.rotate(-k.angleY,0,1,0),X.translate(0,.5,0),k.cornerView=!1}function A(){t.keys.L&&(Y.lightDir=t.Vector.fromAngles((90-k.angleY)*Math.PI/180,-k.angleX*Math.PI/180),k.paused&&Y.updateCaustics(k.water)),I.updateAttributesTexture(),k.water.addOrRemoveVisualizationWaves(!0),k.water.updateNormals(),X.clearColor(.1,.2,.5,1),X.clearColor(.94/1.5,.92/1.5,.84/1.5,1),X.bindFramebuffer(X.FRAMEBUFFER,k.drawingFrameBuffer),X.clear(X.COLOR_BUFFER_BIT|X.DEPTH_BUFFER_BIT),X.loadIdentity(),X.translate(k.translateX,k.translateY,-k.zoomDistance),X.rotate(-k.angleZ,0,0,1),X.rotate(-k.angleX,1,0,0),X.rotate(-k.angleY,0,1,0),X.translate(0,.5,0),X.enable(X.DEPTH_TEST),X.disable(X.BLEND),X.viewport(0,0,X.canvas.width,X.canvas.height),Y.sphereCenter=k.swimmers[0].body.center,Y.sphereRadius=k.swimmers[0].body.radius,Y.renderCube(k.water),Y.renderWater(k.water,Re,k.params.visualizations.shadow),Y.renderSpheres(k.water),X.disable(X.DEPTH_TEST),!k.classicalOverlayEnabled&&(k.params.visualizations.showStreaks||k.params.simulation.splashes.enabled)&&k.splashParticles.draw({}),k.renderVideo(),k.drawingFrameBuffer!==null&&be(),ne(),k.water.addOrRemoveVisualizationWaves(!1)}};
//# sourceMappingURL=swimming-CA5KmZEs.js.map