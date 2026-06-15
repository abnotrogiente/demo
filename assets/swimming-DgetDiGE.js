var wt=Object.defineProperty;var We=o=>{throw TypeError(o)};var yt=(o,i,s)=>i in o?wt(o,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[i]=s;var re=(o,i,s)=>yt(o,typeof i!="symbol"?i+"":i,s),Et=(o,i,s)=>i.has(o)||We("Cannot "+s);var xe=(o,i,s)=>i.has(o)?We("Cannot add the same private member more than once"):i instanceof WeakSet?i.add(o):i.set(o,s);var Z=(o,i,s)=>(Et(o,i,"access private method"),s);import"./modulepreload-polyfill-B5Qt9EMX.js";import{g as Tt}from"./lil-gui.module.min-Vka56b52.js";var p=function(){var o,i={create:function(a){a=a||{};var n=document.createElement("canvas");n.width=800,n.height=600,"alpha"in a||(a.alpha=!1);try{o=n.getContext("webgl2",a)}catch{}try{o=o||n.getContext("experimental-webgl",a)}catch{}if(!o)throw new Error("WebGL not supported");return o.HALF_FLOAT_OES=36193,s(),l(),h(),R(),o},keys:{},Matrix:y,Indexer:O,Buffer:I,Mesh:g,HitTest:k,Raytracer:W,Shader:B,Texture:N,Vector:T};function s(){o.MODELVIEW=C|1,o.PROJECTION=C|2;var a=new y,n=new y;o.modelviewMatrix=new y,o.projectionMatrix=new y;var e=[],r=[],c,d;o.matrixMode=function(m){switch(m){case o.MODELVIEW:c="modelviewMatrix",d=e;break;case o.PROJECTION:c="projectionMatrix",d=r;break;default:throw new Error("invalid matrix mode "+m)}},o.loadIdentity=function(){y.identity(o[c])},o.loadMatrix=function(m){for(var u=m.m,E=o[c].m,w=0;w<16;w++)E[w]=u[w]},o.multMatrix=function(m){o.loadMatrix(y.multiply(o[c],m,n))},o.perspective=function(m,u,E,w){o.multMatrix(y.perspective(m,u,E,w,a))},o.frustum=function(m,u,E,w,x,_){o.multMatrix(y.frustum(m,u,E,w,x,_,a))},o.ortho=function(m,u,E,w,x,_){o.multMatrix(y.ortho(m,u,E,w,x,_,a))},o.scale=function(m,u,E){o.multMatrix(y.scale(m,u,E,a))},o.translate=function(m,u,E){o.multMatrix(y.translate(m,u,E,a))},o.rotate=function(m,u,E,w){o.multMatrix(y.rotate(m,u,E,w,a))},o.lookAt=function(m,u,E,w,x,_,P,F,M){o.multMatrix(y.lookAt(m,u,E,w,x,_,P,F,M,a))},o.pushMatrix=function(){d.push(Array.prototype.slice.call(o[c].m))},o.popMatrix=function(){var m=d.pop();o[c].m=D?new Float32Array(m):m},o.project=function(m,u,E,w,x,_){w=w||o.modelviewMatrix,x=x||o.projectionMatrix,_=_||o.getParameter(o.VIEWPORT);var P=x.transformPoint(w.transformPoint(new T(m,u,E)));return new T(_[0]+_[2]*(P.x*.5+.5),_[1]+_[3]*(P.y*.5+.5),P.z*.5+.5)},o.unProject=function(m,u,E,w,x,_){w=w||o.modelviewMatrix,x=x||o.projectionMatrix,_=_||o.getParameter(o.VIEWPORT);var P=new T((m-_[0])/_[2]*2-1,(u-_[1])/_[3]*2-1,E*2-1);return y.inverse(y.multiply(x,w,a),n).transformPoint(P)},o.matrixMode(o.MODELVIEW)}function l(){var a={mesh:new g({coords:!0,colors:!0,triangles:!1}),mode:-1,coord:[0,0,0,0],color:[1,1,1,1],shader:new B("      uniform float pointSize;      out vec4 color;      out vec4 coord;      void main() {        color = gl_Color;        coord = gl_TexCoord;        gl_Position = gl_ModelViewProjectionMatrix * gl_Vertex;        gl_PointSize = pointSize;      }    ","      uniform sampler2D tex;      uniform float pointSize;      uniform bool useTexture;      in vec4 color;      in vec4 coord;      out vec4 fragColor;      void main() {        fragColor = color;        if (useTexture) fragColor *= texture(tex, coord.xy);      }    ")};o.pointSize=function(n){a.shader.uniforms({pointSize:n})},o.begin=function(n){if(a.mode!=-1)throw new Error("mismatched gl.begin() and gl.end() calls");a.mode=n,a.mesh.colors=[],a.mesh.coords=[],a.mesh.vertices=[]},o.color=function(n,e,r,c){a.color=arguments.length==1?n.toArray().concat(1):[n,e,r,c||1]},o.texCoord=function(n,e){a.coord=arguments.length==1?n.toArray(2):[n,e]},o.vertex=function(n,e,r){a.mesh.colors.push(a.color),a.mesh.coords.push(a.coord),a.mesh.vertices.push(arguments.length==1?n.toArray():[n,e,r])},o.end=function(){if(a.mode==-1)throw new Error("mismatched gl.begin() and gl.end() calls");a.mesh.compile(),a.shader.uniforms({useTexture:!!o.getParameter(o.TEXTURE_BINDING_2D)}).draw(a.mesh,a.mode),a.mode=-1}}function h(){var a=o,n=0,e=0,r={},c=!1,d=Object.prototype.hasOwnProperty;function m(){for(var F in r)if(d.call(r,F)&&r[F])return!0;return!1}function u(F){var M={};for(var X in F)typeof F[X]=="function"?M[X]=function(Q){return function(){Q.apply(F,arguments)}}(F[X]):M[X]=F[X];M.original=F,M.x=M.pageX,M.y=M.pageY;for(var G=o.canvas;G;G=G.offsetParent)M.x-=G.offsetLeft,M.y-=G.offsetTop;return c?(M.deltaX=M.x-n,M.deltaY=M.y-e):(M.deltaX=0,M.deltaY=0,c=!0),n=M.x,e=M.y,M.dragging=m(),M.preventDefault=function(){M.original.preventDefault()},M.stopPropagation=function(){M.original.stopPropagation()},M}function E(F){o=a,m()||(v(document,"mousemove",w),v(document,"mouseup",x),b(o.canvas,"mousemove",w),b(o.canvas,"mouseup",x)),r[F.which]=!0,F=u(F),o.onmousedown&&o.onmousedown(F),F.preventDefault()}function w(F){o=a,F=u(F),o.onmousemove&&o.onmousemove(F),F.preventDefault()}function x(F){o=a,r[F.which]=!1,m()||(b(document,"mousemove",w),b(document,"mouseup",x),v(o.canvas,"mousemove",w),v(o.canvas,"mouseup",x)),F=u(F),o.onmouseup&&o.onmouseup(F),F.preventDefault()}function _(){c=!1}function P(){r={},c=!1}v(o.canvas,"mousedown",E),v(o.canvas,"mousemove",w),v(o.canvas,"mouseup",x),v(o.canvas,"mouseover",_),v(o.canvas,"mouseout",_),v(document,"contextmenu",P)}function f(a){var n={8:"BACKSPACE",9:"TAB",13:"ENTER",16:"SHIFT",27:"ESCAPE",32:"SPACE",37:"LEFT",38:"UP",39:"RIGHT",40:"DOWN"};return n[a]||(a>=65&&a<=90?String.fromCharCode(a):null)}function v(a,n,e){a.addEventListener(n,e)}function b(a,n,e){a.removeEventListener(n,e)}v(document,"keydown",function(a){if(!a.altKey&&!a.ctrlKey&&!a.metaKey){var n=f(a.keyCode);n&&(i.keys[n]=!0),i.keys[a.keyCode]=!0}}),v(document,"keyup",function(a){if(!a.altKey&&!a.ctrlKey&&!a.metaKey){var n=f(a.keyCode);n&&(i.keys[n]=!1),i.keys[a.keyCode]=!1}});function R(){(function(a){o.makeCurrent=function(){o=a}})(o),o.animate=function(){var a=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(c){setTimeout(c,16.666666666666668)},n=new Date().getTime(),e=o;function r(){o=e;var c=new Date().getTime();o.onupdate&&o.onupdate((c-n)/1e3),o.ondraw&&o.ondraw(),a(r),n=c}r()},o.fullscreen=function(a){a=a||{};var n=a.paddingTop||0,e=a.paddingLeft||0,r=a.paddingRight||0,c=a.paddingBottom||0;if(!document.body)throw new Error("document.body doesn't exist yet (call gl.fullscreen() from window.onload() or from inside the <body> tag)");document.body.appendChild(o.canvas),document.body.style.overflow="hidden",o.canvas.style.position="absolute",o.canvas.style.left=e+"px",o.canvas.style.top=n+"px";function d(){o.canvas.width=window.innerWidth-e-r,o.canvas.height=window.innerHeight-n-c,o.viewport(0,0,o.canvas.width,o.canvas.height),(a.camera||!("camera"in a))&&(o.matrixMode(o.PROJECTION),o.loadIdentity(),o.perspective(a.fov||45,o.canvas.width/o.canvas.height,a.near||.1,a.far||1e3),o.matrixMode(o.MODELVIEW)),o.ondraw&&o.ondraw()}v(window,"resize",d),d()}}var C=305397760,D=typeof Float32Array<"u";function y(){var a=Array.prototype.concat.apply([],arguments);a.length||(a=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),this.m=D?new Float32Array(a):a}y.prototype={inverse:function(){return y.inverse(this,new y)},transpose:function(){return y.transpose(this,new y)},multiply:function(a){return y.multiply(this,a,new y)},transformPoint:function(a){var n=this.m;return new T(n[0]*a.x+n[1]*a.y+n[2]*a.z+n[3],n[4]*a.x+n[5]*a.y+n[6]*a.z+n[7],n[8]*a.x+n[9]*a.y+n[10]*a.z+n[11]).divide(n[12]*a.x+n[13]*a.y+n[14]*a.z+n[15])},transformVector:function(a){var n=this.m;return new T(n[0]*a.x+n[1]*a.y+n[2]*a.z,n[4]*a.x+n[5]*a.y+n[6]*a.z,n[8]*a.x+n[9]*a.y+n[10]*a.z)}},y.inverse=function(a,n){n=n||new y;var e=a.m,r=n.m;r[0]=e[5]*e[10]*e[15]-e[5]*e[14]*e[11]-e[6]*e[9]*e[15]+e[6]*e[13]*e[11]+e[7]*e[9]*e[14]-e[7]*e[13]*e[10],r[1]=-e[1]*e[10]*e[15]+e[1]*e[14]*e[11]+e[2]*e[9]*e[15]-e[2]*e[13]*e[11]-e[3]*e[9]*e[14]+e[3]*e[13]*e[10],r[2]=e[1]*e[6]*e[15]-e[1]*e[14]*e[7]-e[2]*e[5]*e[15]+e[2]*e[13]*e[7]+e[3]*e[5]*e[14]-e[3]*e[13]*e[6],r[3]=-e[1]*e[6]*e[11]+e[1]*e[10]*e[7]+e[2]*e[5]*e[11]-e[2]*e[9]*e[7]-e[3]*e[5]*e[10]+e[3]*e[9]*e[6],r[4]=-e[4]*e[10]*e[15]+e[4]*e[14]*e[11]+e[6]*e[8]*e[15]-e[6]*e[12]*e[11]-e[7]*e[8]*e[14]+e[7]*e[12]*e[10],r[5]=e[0]*e[10]*e[15]-e[0]*e[14]*e[11]-e[2]*e[8]*e[15]+e[2]*e[12]*e[11]+e[3]*e[8]*e[14]-e[3]*e[12]*e[10],r[6]=-e[0]*e[6]*e[15]+e[0]*e[14]*e[7]+e[2]*e[4]*e[15]-e[2]*e[12]*e[7]-e[3]*e[4]*e[14]+e[3]*e[12]*e[6],r[7]=e[0]*e[6]*e[11]-e[0]*e[10]*e[7]-e[2]*e[4]*e[11]+e[2]*e[8]*e[7]+e[3]*e[4]*e[10]-e[3]*e[8]*e[6],r[8]=e[4]*e[9]*e[15]-e[4]*e[13]*e[11]-e[5]*e[8]*e[15]+e[5]*e[12]*e[11]+e[7]*e[8]*e[13]-e[7]*e[12]*e[9],r[9]=-e[0]*e[9]*e[15]+e[0]*e[13]*e[11]+e[1]*e[8]*e[15]-e[1]*e[12]*e[11]-e[3]*e[8]*e[13]+e[3]*e[12]*e[9],r[10]=e[0]*e[5]*e[15]-e[0]*e[13]*e[7]-e[1]*e[4]*e[15]+e[1]*e[12]*e[7]+e[3]*e[4]*e[13]-e[3]*e[12]*e[5],r[11]=-e[0]*e[5]*e[11]+e[0]*e[9]*e[7]+e[1]*e[4]*e[11]-e[1]*e[8]*e[7]-e[3]*e[4]*e[9]+e[3]*e[8]*e[5],r[12]=-e[4]*e[9]*e[14]+e[4]*e[13]*e[10]+e[5]*e[8]*e[14]-e[5]*e[12]*e[10]-e[6]*e[8]*e[13]+e[6]*e[12]*e[9],r[13]=e[0]*e[9]*e[14]-e[0]*e[13]*e[10]-e[1]*e[8]*e[14]+e[1]*e[12]*e[10]+e[2]*e[8]*e[13]-e[2]*e[12]*e[9],r[14]=-e[0]*e[5]*e[14]+e[0]*e[13]*e[6]+e[1]*e[4]*e[14]-e[1]*e[12]*e[6]-e[2]*e[4]*e[13]+e[2]*e[12]*e[5],r[15]=e[0]*e[5]*e[10]-e[0]*e[9]*e[6]-e[1]*e[4]*e[10]+e[1]*e[8]*e[6]+e[2]*e[4]*e[9]-e[2]*e[8]*e[5];for(var c=e[0]*r[0]+e[1]*r[4]+e[2]*r[8]+e[3]*r[12],d=0;d<16;d++)r[d]/=c;return n},y.transpose=function(a,n){n=n||new y;var e=a.m,r=n.m;return r[0]=e[0],r[1]=e[4],r[2]=e[8],r[3]=e[12],r[4]=e[1],r[5]=e[5],r[6]=e[9],r[7]=e[13],r[8]=e[2],r[9]=e[6],r[10]=e[10],r[11]=e[14],r[12]=e[3],r[13]=e[7],r[14]=e[11],r[15]=e[15],n},y.multiply=function(a,n,e){e=e||new y;var r=a.m,c=n.m,d=e.m;return d[0]=r[0]*c[0]+r[1]*c[4]+r[2]*c[8]+r[3]*c[12],d[1]=r[0]*c[1]+r[1]*c[5]+r[2]*c[9]+r[3]*c[13],d[2]=r[0]*c[2]+r[1]*c[6]+r[2]*c[10]+r[3]*c[14],d[3]=r[0]*c[3]+r[1]*c[7]+r[2]*c[11]+r[3]*c[15],d[4]=r[4]*c[0]+r[5]*c[4]+r[6]*c[8]+r[7]*c[12],d[5]=r[4]*c[1]+r[5]*c[5]+r[6]*c[9]+r[7]*c[13],d[6]=r[4]*c[2]+r[5]*c[6]+r[6]*c[10]+r[7]*c[14],d[7]=r[4]*c[3]+r[5]*c[7]+r[6]*c[11]+r[7]*c[15],d[8]=r[8]*c[0]+r[9]*c[4]+r[10]*c[8]+r[11]*c[12],d[9]=r[8]*c[1]+r[9]*c[5]+r[10]*c[9]+r[11]*c[13],d[10]=r[8]*c[2]+r[9]*c[6]+r[10]*c[10]+r[11]*c[14],d[11]=r[8]*c[3]+r[9]*c[7]+r[10]*c[11]+r[11]*c[15],d[12]=r[12]*c[0]+r[13]*c[4]+r[14]*c[8]+r[15]*c[12],d[13]=r[12]*c[1]+r[13]*c[5]+r[14]*c[9]+r[15]*c[13],d[14]=r[12]*c[2]+r[13]*c[6]+r[14]*c[10]+r[15]*c[14],d[15]=r[12]*c[3]+r[13]*c[7]+r[14]*c[11]+r[15]*c[15],e},y.identity=function(a){a=a||new y;var n=a.m;return n[0]=n[5]=n[10]=n[15]=1,n[1]=n[2]=n[3]=n[4]=n[6]=n[7]=n[8]=n[9]=n[11]=n[12]=n[13]=n[14]=0,a},y.perspective=function(a,n,e,r,c){var d=Math.tan(a*Math.PI/360)*e,m=d*n;return y.frustum(-m,m,-d,d,e,r,c)},y.frustum=function(a,n,e,r,c,d,m){m=m||new y;var u=m.m;return u[0]=2*c/(n-a),u[1]=0,u[2]=(n+a)/(n-a),u[3]=0,u[4]=0,u[5]=2*c/(r-e),u[6]=(r+e)/(r-e),u[7]=0,u[8]=0,u[9]=0,u[10]=-(d+c)/(d-c),u[11]=-2*d*c/(d-c),u[12]=0,u[13]=0,u[14]=-1,u[15]=0,m},y.ortho=function(a,n,e,r,c,d,m){m=m||new y;var u=m.m;return u[0]=2/(n-a),u[1]=0,u[2]=0,u[3]=-(n+a)/(n-a),u[4]=0,u[5]=2/(r-e),u[6]=0,u[7]=-(r+e)/(r-e),u[8]=0,u[9]=0,u[10]=-2/(d-c),u[11]=-(d+c)/(d-c),u[12]=0,u[13]=0,u[14]=0,u[15]=1,m},y.scale=function(a,n,e,r){r=r||new y;var c=r.m;return c[0]=a,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=n,c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=e,c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,r},y.translate=function(a,n,e,r){r=r||new y;var c=r.m;return c[0]=1,c[1]=0,c[2]=0,c[3]=a,c[4]=0,c[5]=1,c[6]=0,c[7]=n,c[8]=0,c[9]=0,c[10]=1,c[11]=e,c[12]=0,c[13]=0,c[14]=0,c[15]=1,r},y.rotate=function(a,n,e,r,c){if(!a||!n&&!e&&!r)return y.identity(c);c=c||new y;var d=c.m,m=Math.sqrt(n*n+e*e+r*r);a*=Math.PI/180,n/=m,e/=m,r/=m;var u=Math.cos(a),E=Math.sin(a),w=1-u;return d[0]=n*n*w+u,d[1]=n*e*w-r*E,d[2]=n*r*w+e*E,d[3]=0,d[4]=e*n*w+r*E,d[5]=e*e*w+u,d[6]=e*r*w-n*E,d[7]=0,d[8]=r*n*w-e*E,d[9]=r*e*w+n*E,d[10]=r*r*w+u,d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,c},y.lookAt=function(a,n,e,r,c,d,m,u,E,w){w=w||new y;var x=w.m,_=new T(a,n,e),P=new T(r,c,d),F=new T(m,u,E),M=_.subtract(P).unit(),X=F.cross(M).unit(),G=M.cross(X).unit();return x[0]=X.x,x[1]=X.y,x[2]=X.z,x[3]=-X.dot(_),x[4]=G.x,x[5]=G.y,x[6]=G.z,x[7]=-G.dot(_),x[8]=M.x,x[9]=M.y,x[10]=M.z,x[11]=-M.dot(_),x[12]=0,x[13]=0,x[14]=0,x[15]=1,w};function O(){this.unique=[],this.indices=[],this.map={}}O.prototype={add:function(a){var n=JSON.stringify(a);return n in this.map||(this.map[n]=this.unique.length,this.unique.push(a)),this.map[n]}};function I(a,n){this.buffer=null,this.target=a,this.type=n,this.data=[]}I.prototype={compile:function(a){for(var n=[],e=0,r=1e4;e<this.data.length;e+=r)n=Array.prototype.concat.apply(n,this.data.slice(e,e+r));var c=this.data.length?n.length/this.data.length:0;if(c!=Math.round(c))throw new Error("buffer elements not of consistent size, average size is "+c);this.buffer=this.buffer||o.createBuffer(),this.buffer.length=n.length,this.buffer.spacing=c,o.bindBuffer(this.target,this.buffer),o.bufferData(this.target,new this.type(n),a||o.STATIC_DRAW)}};function g(a){a=a||{},this.vertexBuffers={},this.indexBuffers={},this.addVertexBuffer("vertices","gl_Vertex"),a.coords&&this.addVertexBuffer("coords","gl_TexCoord"),a.normals&&this.addVertexBuffer("normals","gl_Normal"),a.colors&&this.addVertexBuffer("colors","gl_Color"),(!("triangles"in a)||a.triangles)&&this.addIndexBuffer("triangles"),a.lines&&this.addIndexBuffer("lines")}g.prototype={addVertexBuffer:function(a,n){var e=this.vertexBuffers[n]=new I(o.ARRAY_BUFFER,Float32Array);e.name=a,this[a]=[]},addIndexBuffer:function(a){this.indexBuffers[a]=new I(o.ELEMENT_ARRAY_BUFFER,Uint16Array),this[a]=[]},compile:function(){for(var a in this.vertexBuffers){var n=this.vertexBuffers[a];n.data=this[n.name],n.compile()}for(var e in this.indexBuffers){var n=this.indexBuffers[e];n.data=this[e],n.compile()}},transform:function(a){if(this.vertices=this.vertices.map(function(e){return a.transformPoint(T.fromArray(e)).toArray()}),this.normals){var n=a.inverse().transpose();this.normals=this.normals.map(function(e){return n.transformVector(T.fromArray(e)).unit().toArray()})}return this.compile(),this},computeNormals:function(){this.normals||this.addVertexBuffer("normals","gl_Normal");for(var a=0;a<this.vertices.length;a++)this.normals[a]=new T;for(var a=0;a<this.triangles.length;a++){var n=this.triangles[a],e=T.fromArray(this.vertices[n[0]]),r=T.fromArray(this.vertices[n[1]]),c=T.fromArray(this.vertices[n[2]]),d=r.subtract(e).cross(c.subtract(e)).unit();this.normals[n[0]]=this.normals[n[0]].add(d),this.normals[n[1]]=this.normals[n[1]].add(d),this.normals[n[2]]=this.normals[n[2]].add(d)}for(var a=0;a<this.vertices.length;a++)this.normals[a]=this.normals[a].unit().toArray();return this.compile(),this},computeWireframe:function(){for(var a=new O,n=0;n<this.triangles.length;n++)for(var e=this.triangles[n],r=0;r<e.length;r++){var c=e[r],d=e[(r+1)%e.length];a.add([Math.min(c,d),Math.max(c,d)])}return this.lines||this.addIndexBuffer("lines"),this.lines=a.unique,this.compile(),this},getAABB:function(){var a={min:new T(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)};a.max=a.min.negative();for(var n=0;n<this.vertices.length;n++){var e=T.fromArray(this.vertices[n]);a.min=T.min(a.min,e),a.max=T.max(a.max,e)}return a},getBoundingSphere:function(){for(var a=this.getAABB(),n={center:a.min.add(a.max).divide(2),radius:0},e=0;e<this.vertices.length;e++)n.radius=Math.max(n.radius,T.fromArray(this.vertices[e]).subtract(n.center).length());return n}},g.plane=function(a){a=a||{};for(var n=new g(a),e=a.detailX||a.detail||1,r=a.detailY||a.detail||1,c=a.width||2,d=a.height||2,m=0;m<=r;m++)for(var u=m/r,E=0;E<=e;E++){var w=E/e;if(n.vertices.push([(w-.5)*c,(u-.5)*d,0]),n.coords&&n.coords.push([w,u]),n.normals&&n.normals.push([0,0,1]),E<e&&m<r){var x=E+m*(e+1);n.triangles.push([x,x+1,x+e+1]),n.triangles.push([x+e+1,x+1,x+e+2])}}return n.compile(),n};var S=[[0,4,2,6,-1,0,0],[1,3,5,7,1,0,0],[0,1,4,5,0,-1,0],[2,6,3,7,0,1,0],[0,2,1,3,0,0,-1],[4,5,6,7,0,0,1]];function A(a){return new T((a&1)*2-1,(a&2)-1,(a&4)/2-1)}g.cube=function(a){for(var n=new g(a),e=a&&a.width||2,r=a&&a.height||2,c=a&&a.depth||2,d=0;d<S.length;d++){for(var m=S[d],u=d*4,E=0;E<4;E++){var w=m[E];const x=A(w).toArray();x[0]*=e/2,x[1]*=r/2,x[2]*=c/2,n.vertices.push(x),n.coords&&n.coords.push([E&1,(E&2)/2]),n.normals&&n.normals.push(m.slice(4,7))}n.triangles.push([u,u+1,u+2]),n.triangles.push([u+2,u+1,u+3])}return n.compile(),n},g.sphere=function(a){function n(G,Q,oe){return E?[G,oe,Q]:[G,Q,oe]}function e(G){return G+(G-G*G)/2}a=a||{};for(var r=new g(a),c=new O,d=a.detail||6,m=0;m<8;m++)for(var u=A(m),E=u.x*u.y*u.z>0,w=[],x=0;x<=d;x++){for(var _=0;x+_<=d;_++){var P=x/d,F=_/d,M=(d-x-_)/d,X={vertex:new T(e(P),e(F),e(M)).unit().multiply(u).toArray()};r.coords&&(X.coord=u.y>0?[1-P,M]:[M,1-P]),w.push(c.add(X))}if(x>0)for(var _=0;x+_<=d;_++){var P=(x-1)*(d+1)+(x-1-(x-1)*(x-1))/2+_,F=x*(d+1)+(x-x*x)/2+_;r.triangles.push(n(w[P],w[P+1],w[F])),x+_<d&&r.triangles.push(n(w[F],w[P+1],w[F+1]))}}return r.vertices=c.unique.map(function(G){return G.vertex}),r.coords&&(r.coords=c.unique.map(function(G){return G.coord})),r.normals&&(r.normals=r.vertices),r.compile(),r},g.load=function(a,n){n=n||{},"coords"in n||(n.coords=!!a.coords),"normals"in n||(n.normals=!!a.normals),"colors"in n||(n.colors=!!a.colors),"triangles"in n||(n.triangles=!!a.triangles),"lines"in n||(n.lines=!!a.lines);var e=new g(n);return e.vertices=a.vertices,e.coords&&(e.coords=a.coords),e.normals&&(e.normals=a.normals),e.colors&&(e.colors=a.colors),e.triangles&&(e.triangles=a.triangles),e.lines&&(e.lines=a.lines),e.compile(),e};function k(a,n,e){this.t=arguments.length?a:Number.MAX_VALUE,this.hit=n,this.normal=e}k.prototype={mergeWith:function(a){a.t>0&&a.t<this.t&&(this.t=a.t,this.hit=a.hit,this.normal=a.normal)}};function W(){var a=o.getParameter(o.VIEWPORT),n=o.modelviewMatrix.m,e=new T(n[0],n[4],n[8]),r=new T(n[1],n[5],n[9]),c=new T(n[2],n[6],n[10]),d=new T(n[3],n[7],n[11]);this.eye=new T(-d.dot(e),-d.dot(r),-d.dot(c));var m=a[0],u=m+a[2],E=a[1],w=E+a[3];this.ray00=o.unProject(m,E,1).subtract(this.eye),this.ray10=o.unProject(u,E,1).subtract(this.eye),this.ray01=o.unProject(m,w,1).subtract(this.eye),this.ray11=o.unProject(u,w,1).subtract(this.eye),this.viewport=a}W.prototype={getRayForPixel:function(a,n){a=(a-this.viewport[0])/this.viewport[2],n=1-(n-this.viewport[1])/this.viewport[3];var e=T.lerp(this.ray00,this.ray10,a),r=T.lerp(this.ray01,this.ray11,a);return T.lerp(e,r,n).unit()}},W.hitTestBox=function(a,n,e,r){var c=e.subtract(a).divide(n),d=r.subtract(a).divide(n),m=T.min(c,d),u=T.max(c,d),E=m.max(),w=u.min();if(E>0&&E<w){var x=1e-6,_=a.add(n.multiply(E));return e=e.add(x),r=r.subtract(x),new k(E,_,new T((_.x>r.x)-(_.x<e.x),(_.y>r.y)-(_.y<e.y),(_.z>r.z)-(_.z<e.z)))}return null},W.hitTestSphere=function(a,n,e,r){var c=a.subtract(e),d=n.dot(n),m=2*n.dot(c),u=c.dot(c)-r*r,E=m*m-4*d*u;if(E>0){var w=(-m-Math.sqrt(E))/(2*d),x=a.add(n.multiply(w));return new k(w,x,x.subtract(e).divide(r))}return null},W.hitTestTriangle=function(a,n,e,r,c){var d=r.subtract(e),m=c.subtract(e),u=d.cross(m).unit(),E=u.dot(e.subtract(a))/u.dot(n);if(E>0){var w=a.add(n.multiply(E)),x=w.subtract(e),_=m.dot(m),P=m.dot(d),F=m.dot(x),M=d.dot(d),X=d.dot(x),G=_*M-P*P,Q=(M*F-P*X)/G,oe=(_*X-P*F)/G;if(Q>=0&&oe>=0&&Q+oe<=1)return new k(E,w,u)}return null};function V(a,n,e){let r;for(;(r=a.exec(n))!=null;)e(r)}var L="LIGHTGL";function B(a,n){function e(_){var P=document.getElementById(_);return P?P.text:_}a=e(a),n=e(n);var r="    uniform mat3 gl_NormalMatrix;    uniform mat4 gl_ModelViewMatrix;    uniform mat4 gl_ProjectionMatrix;    uniform mat4 gl_ModelViewProjectionMatrix;    uniform mat4 gl_ModelViewMatrixInverse;    uniform mat4 gl_ProjectionMatrixInverse;    uniform mat4 gl_ModelViewProjectionMatrixInverse;  ",c=`#version 300 es
    `+r+"    in vec4 gl_Vertex;    in vec4 gl_TexCoord;    in vec3 gl_Normal;    in vec4 gl_Color;    vec4 ftransform() {      return gl_ModelViewProjectionMatrix * gl_Vertex;    }  ",d=`#version 300 es
    precision highp float;
  `+r,m=a+n,u={};V(/\b(gl_[^;]*)\b;/g,r,function(_){var P=_[1];if(m.indexOf(P)!=-1){var F=P.replace(/[a-z_]/g,"");u[F]=L+P}}),m.indexOf("ftransform")!=-1&&(u.MVPM=L+"gl_ModelViewProjectionMatrix"),this.usedMatrices=u;function E(_,P){var F={},M=/^((\s*\/\/.*\n|\s*#extension.*\n)+)[^]*$/.exec(P);return P=M?M[1]+_+P.substr(M[1].length):_+P,V(/\bgl_\w+\b/g,_,function(X){X in F||(P=P.replace(new RegExp("\\b"+X+"\\b","g"),L+X),F[X]=!0)}),P}a=E(c,a),n=E(d,n);function w(_,P){var F=o.createShader(_);if(o.shaderSource(F,P),o.compileShader(F),!o.getShaderParameter(F,o.COMPILE_STATUS))throw new Error("compile error: "+o.getShaderInfoLog(F));return F}if(this.program=o.createProgram(),o.attachShader(this.program,w(o.VERTEX_SHADER,a)),o.attachShader(this.program,w(o.FRAGMENT_SHADER,n)),o.linkProgram(this.program),!o.getProgramParameter(this.program,o.LINK_STATUS))throw new Error("link error: "+o.getProgramInfoLog(this.program));this.attributes={},this.uniformLocations={};var x={};V(/uniform\s+sampler(1D|2D|3D|Cube)\s+(\w+)\s*;/g,a+n,function(_){x[_[2]]=1}),this.isSampler=x}function K(a){var n=Object.prototype.toString.call(a);return n=="[object Array]"||n=="[object Float32Array]"}function ie(a){var n=Object.prototype.toString.call(a);return n=="[object Number]"||n=="[object Boolean]"}new y,new y,B.prototype={uniforms:function(a){o.useProgram(this.program);for(var n in a){var e=this.uniformLocations[n]||o.getUniformLocation(this.program,n);if(e){this.uniformLocations[n]=e;var r=a[n];if(r instanceof T?r=[r.x,r.y,r.z]:r instanceof y&&(r=r.m),K(r))switch(r.length){case 1:o.uniform1fv(e,new Float32Array(r));break;case 2:o.uniform2fv(e,new Float32Array(r));break;case 3:o.uniform3fv(e,new Float32Array(r));break;case 4:o.uniform4fv(e,new Float32Array(r));break;case 9:o.uniformMatrix3fv(e,!1,new Float32Array([r[0],r[3],r[6],r[1],r[4],r[7],r[2],r[5],r[8]]));break;case 16:o.uniformMatrix4fv(e,!1,new Float32Array([r[0],r[4],r[8],r[12],r[1],r[5],r[9],r[13],r[2],r[6],r[10],r[14],r[3],r[7],r[11],r[15]]));break;default:throw new Error(`don't know how to load uniform "`+n+'" of length '+r.length)}else if(ie(r))(this.isSampler[n]?o.uniform1i:o.uniform1f).call(o,e,r);else throw new Error('attempted to set uniform "'+n+'" to invalid value '+r)}}return this},draw:function(a,n){this.drawBuffers(a.vertexBuffers,a.indexBuffers[n==o.LINES?"lines":"triangles"],arguments.length<2?o.TRIANGLES:n)},drawBuffers:function(a,n,e){var r=this.usedMatrices,c=o.modelviewMatrix,d=o.projectionMatrix,m=r.MVMI||r.NM?c.inverse():null,u=r.PMI?d.inverse():null,E=r.MVPM||r.MVPMI?d.multiply(c):null,w={};if(r.MVM&&(w[r.MVM]=c),r.MVMI&&(w[r.MVMI]=m),r.PM&&(w[r.PM]=d),r.PMI&&(w[r.PMI]=u),r.MVPM&&(w[r.MVPM]=E),r.MVPMI&&(w[r.MVPMI]=E.inverse()),r.NM){var x=m.m;w[r.NM]=[x[0],x[4],x[8],x[1],x[5],x[9],x[2],x[6],x[10]]}this.uniforms(w);var _=0;for(var P in a){var F=a[P],M=this.attributes[P]||o.getAttribLocation(this.program,P.replace(/^(gl_.*)$/,L+"$1"));M==-1||!F.buffer||(this.attributes[P]=M,o.bindBuffer(o.ARRAY_BUFFER,F.buffer),o.enableVertexAttribArray(M),o.vertexAttribPointer(M,F.buffer.spacing,o.FLOAT,!1,0,0),_=F.buffer.length/F.buffer.spacing)}for(var P in this.attributes)P in a||o.disableVertexAttribArray(this.attributes[P]);return _&&(!n||n.buffer)&&(n?(o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,n.buffer),o.drawElements(e,n.buffer.length,o.UNSIGNED_SHORT,0)):o.drawArrays(e,0,_)),this}};function N(a,n,e){e=e||{},this.width=a,this.height=n,this.id=o.createTexture();let r=e.type||o.UNSIGNED_BYTE,c=e.format||o.RGBA,d=o.RGBA;const m=o.getExtension("EXT_color_buffer_float"),u=o.getExtension("EXT_color_buffer_half_float");r===o.FLOAT?(m?o instanceof WebGL2RenderingContext&&(c=o.RGBA32F):(console.warn("FLOAT textures not renderable, falling back to UNSIGNED_BYTE"),r=o.UNSIGNED_BYTE,c=o.RGBA8),d=o.RGBA):r===o.HALF_FLOAT_OES?(u?o instanceof WebGL2RenderingContext&&(c=o.RGBA16F):(console.warn("HALF_FLOAT textures not renderable, falling back to UNSIGNED_BYTE"),r=o.UNSIGNED_BYTE,c=o.RGBA8),d=o.RGBA):(r=o.UNSIGNED_BYTE,c=o.RGBA8,d=o.RGBA);const E=e.filter||e.magFilter||o.LINEAR,w=e.filter||e.minFilter||o.LINEAR;o.bindTexture(o.TEXTURE_2D,this.id),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,1),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MAG_FILTER,E),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,w),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,e.wrap||e.wrapS||o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,e.wrap||e.wrapT||o.CLAMP_TO_EDGE),o instanceof WebGL2RenderingContext?o.texImage2D(o.TEXTURE_2D,0,c,a,n,0,d,r,null):o.texImage2D(o.TEXTURE_2D,0,d,a,n,0,d,r,null),o.bindTexture(o.TEXTURE_2D,null),this.format=d,this.type=r,this.internalFormat=c}var H,j,$;N.prototype={bind:function(a){o.activeTexture(o.TEXTURE0+(a||0)),o.bindTexture(o.TEXTURE_2D,this.id)},unbind:function(a){o.activeTexture(o.TEXTURE0+(a||0)),o.bindTexture(o.TEXTURE_2D,null)},canDrawTo:function(){H=H||o.createFramebuffer(),o.bindFramebuffer(o.FRAMEBUFFER,H),o.framebufferTexture2D(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,this.id,0);var a=o.checkFramebufferStatus(o.FRAMEBUFFER)==o.FRAMEBUFFER_COMPLETE;return o.bindFramebuffer(o.FRAMEBUFFER,null),a},drawTo:function(a){o.getExtension("EXT_color_buffer_float")||console.warn("EXT_color_buffer_float not available!");var e=o.getParameter(o.VIEWPORT);if(H=H||o.createFramebuffer(),j=j||o.createRenderbuffer(),o.bindFramebuffer(o.FRAMEBUFFER,H),o.bindRenderbuffer(o.RENDERBUFFER,j),(this.width!=j.width||this.height!=j.height)&&(j.width=this.width,j.height=this.height,o.renderbufferStorage(o.RENDERBUFFER,o.DEPTH_COMPONENT16,this.width,this.height)),o.framebufferTexture2D(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,this.id,0),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.RENDERBUFFER,j),o.checkFramebufferStatus(o.FRAMEBUFFER)!=o.FRAMEBUFFER_COMPLETE)throw new Error("Rendering to this texture is not supported (incomplete framebuffer)");o.viewport(0,0,this.width,this.height),a(),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindRenderbuffer(o.RENDERBUFFER,null),o.viewport(e[0],e[1],e[2],e[3])},swapWith:function(a){var n;n=a.id,a.id=this.id,this.id=n,n=a.width,a.width=this.width,this.width=n,n=a.height,a.height=this.height,this.height=n}},N.fromImage=function(a,n){n=n||{};var e=new N(a.width,a.height,n);o.bindTexture(o.TEXTURE_2D,e.id);try{o.texImage2D(o.TEXTURE_2D,0,e.format,e.format,e.type,a)}catch{throw location.protocol=="file:"?new Error('image not loaded for security reasons (serve this page over "http://" instead)'):new Error("image not loaded for security reasons (image must originate from the same domain as this page or use Cross-Origin Resource Sharing)")}return n.minFilter&&n.minFilter!=o.NEAREST&&n.minFilter!=o.LINEAR&&o.generateMipmap(o.TEXTURE_2D),o.bindTexture(o.TEXTURE_2D,null),e},N.fromURL=function(a,n){$=$||function(){var d=document.createElement("canvas").getContext("2d");d.canvas.width=d.canvas.height=128;for(var m=0;m<d.canvas.height;m+=16)for(var u=0;u<d.canvas.width;u+=16)d.fillStyle=(u^m)&16?"#FFF":"#DDD",d.fillRect(u,m,16,16);return d.canvas}();var e=N.fromImage($,n),r=new Image,c=o;return r.onload=function(){c.makeCurrent(),N.fromImage(r,n).swapWith(e)},r.src=a,e},N.canUseFloatingPointTextures=function(){return!!o.getExtension("OES_texture_float")},N.canUseFloatingPointLinearFiltering=function(){return!!o.getExtension("OES_texture_float_linear")},N.canUseHalfFloatingPointTextures=function(){return!!o.getExtension("OES_texture_half_float")},N.canUseHalfFloatingPointLinearFiltering=function(){return!!o.getExtension("OES_texture_half_float_linear")};function T(a,n,e){this.x=a||0,this.y=n||0,this.z=e||0}return T.prototype={negative:function(){return new T(-this.x,-this.y,-this.z)},add:function(a){return a instanceof T?new T(this.x+a.x,this.y+a.y,this.z+a.z):new T(this.x+a,this.y+a,this.z+a)},subtract:function(a){return a instanceof T?new T(this.x-a.x,this.y-a.y,this.z-a.z):new T(this.x-a,this.y-a,this.z-a)},multiply:function(a){return a instanceof T?new T(this.x*a.x,this.y*a.y,this.z*a.z):new T(this.x*a,this.y*a,this.z*a)},divide:function(a){return a instanceof T?new T(this.x/a.x,this.y/a.y,this.z/a.z):new T(this.x/a,this.y/a,this.z/a)},equals:function(a){return this.x==a.x&&this.y==a.y&&this.z==a.z},dot:function(a){return this.x*a.x+this.y*a.y+this.z*a.z},cross:function(a){return new T(this.y*a.z-this.z*a.y,this.z*a.x-this.x*a.z,this.x*a.y-this.y*a.x)},length:function(){return Math.sqrt(this.dot(this))},unit:function(){return this.divide(this.length())},min:function(){return Math.min(Math.min(this.x,this.y),this.z)},max:function(){return Math.max(Math.max(this.x,this.y),this.z)},toAngles:function(){return{theta:Math.atan2(this.z,this.x),phi:Math.asin(this.y/this.length())}},angleTo:function(a){return Math.acos(this.dot(a)/(this.length()*a.length()))},toArray:function(a){return[this.x,this.y,this.z].slice(0,a||3)},clone:function(){return new T(this.x,this.y,this.z)},init:function(a,n,e){return this.x=a,this.y=n,this.z=e,this}},T.negative=function(a,n){return n.x=-a.x,n.y=-a.y,n.z=-a.z,n},T.add=function(a,n,e){return n instanceof T?(e.x=a.x+n.x,e.y=a.y+n.y,e.z=a.z+n.z):(e.x=a.x+n,e.y=a.y+n,e.z=a.z+n),e},T.subtract=function(a,n,e){return n instanceof T?(e.x=a.x-n.x,e.y=a.y-n.y,e.z=a.z-n.z):(e.x=a.x-n,e.y=a.y-n,e.z=a.z-n),e},T.multiply=function(a,n,e){return n instanceof T?(e.x=a.x*n.x,e.y=a.y*n.y,e.z=a.z*n.z):(e.x=a.x*n,e.y=a.y*n,e.z=a.z*n),e},T.divide=function(a,n,e){return n instanceof T?(e.x=a.x/n.x,e.y=a.y/n.y,e.z=a.z/n.z):(e.x=a.x/n,e.y=a.y/n,e.z=a.z/n),e},T.cross=function(a,n,e){return e.x=a.y*n.z-a.z*n.y,e.y=a.z*n.x-a.x*n.z,e.z=a.x*n.y-a.y*n.x,e},T.unit=function(a,n){var e=a.length();return n.x=a.x/e,n.y=a.y/e,n.z=a.z/e,n},T.fromAngles=function(a,n){return new T(Math.cos(a)*Math.cos(n),Math.sin(n),Math.sin(a)*Math.cos(n))},T.randomDirection=function(){return T.fromAngles(Math.random()*Math.PI*2,Math.asin(Math.random()*2-1))},T.min=function(a,n){return new T(Math.min(a.x,n.x),Math.min(a.y,n.y),Math.min(a.z,n.z))},T.max=function(a,n){return new T(Math.max(a.x,n.x),Math.max(a.y,n.y),Math.max(a.z,n.z))},T.lerp=function(a,n,e){return n.subtract(a).multiply(e).add(a)},T.fromArray=function(a){return new T(a[0],a[1],a[2])},T.angleBetween=function(a,n){return a.angleTo(n)},i}();class ne{constructor({tx:i=0,ty:s=0,zoom:l=4,ax:h=-25,ay:f=-200,az:v=0,fov:b=45}){this.tx=i,this.ty=s,this.zoom=l,this.ax=h,this.ay=f,this.az=v,this.fov=b}interpolate(i,s,l=1){const h=(f,v,b,R=1)=>Math.pow(b,R)*v+(1-Math.pow(b,R))*f;return new ne({tx:h(this.tx,i.tx,s,l),ty:h(this.ty,i.ty,s,l),zoom:h(this.zoom,i.zoom,s,l),ax:h(this.ax,i.ax,s,l),ay:h(this.ay,i.ay,s,l),az:h(this.az,i.az,s,l),fov:h(this.fov,i.fov,s,l)})}}const Le=.3,Be=.15,Ne=1,_t=10,Ke=Math.ceil(_t/4),$e=10,be=2.5,Je=.75,Se=`
    uniform float wr;
    #define sqrt_2_PI 2.50662827
    #define PI 3.1415926536
    uniform sampler2D swimmersAttributesTexture;
    const int SWIMMERS_NUM_ATTRIBUTES = 4;
    const vec2 TEXTURE_SIZE = vec2(`+Ke+", "+$e+`);
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
`,Qe=200,bt=`
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
#define MAX_SPARKS `+Qe+`
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

`;var ge,et,tt;class Ce{constructor(i,s,l,h){xe(this,ge);if(this.gl=i,this.calibration=l,this.copyVideo=!1,this.show=!1,this.videoStartTime=h,i===null){alert("Unable to initialize WebGL. Your browser or machine may not support it.");return}i.clearColor(0,0,0,1),i.clear(i.COLOR_BUFFER_BIT),this.shader=new p.Shader(`
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

    `+bt+Se+`

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
`),this.mesh=p.Mesh.plane({width:2,height:2,coords:!0,normals:!0}),this.mesh.transform(p.Matrix.rotate(90,1,0,0)),this.mesh.transform(p.Matrix.translate(0,.1,0)),this.programInfo=null,this.texture=this.initTexture(),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!0),s!=""&&(this.video=this.setupVideo(s))}render(){let i=!1;const s=t.params.visualizations.sparks,l=t.params.simulation.poolSize;if(!t.params.video.show)return;this.copyVideo&&this.updateTexture(),(!this.mesh.vertexBuffers||!this.mesh.vertexBuffers.vertex)&&this.mesh.compile(),this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture);const f=16*this.gl.canvas.height/9,v=(this.gl.canvas.width-f)/2,b=this.gl.modelviewMatrix;this.gl.projectionMatrix.multiply(b).inverse(),U.swimmersAttributesTexture&&U.swimmersAttributesTexture.bind(1),i=t.classicalOverlayEnabled&&t.drawingFameBuffer!==null,i&&(this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,t.drawingFameBufferB),t.gl.activeTexture(t.gl.TEXTURE15),t.gl.bindTexture(t.gl.TEXTURE_2D,t.drawingTexture)),this.shader.uniforms({ratio_screen:f/this.gl.canvas.width,dx_screen:v/this.gl.canvas.width,calib_MVPMI:t.MVPMI?t.MVPMI.m:new Float32Array(16),uSampler:0,swimmersHelperFunctions:1,screen:15,screenAvailabe:i,iTime:t.getRaceTime(),poolSize:[l.x,l.y,l.z],iResolution:[this.gl.canvas.width,this.gl.canvas.height],sparksEnabled:s.enabled,sparksGlow:s.glow,sparksGlowOffset:s.glowOffset,sparksStroke:s.stroke,sparksNumber:s.num,sparksLengthFactor:s.lengthFactor,sparksSizeFactor:s.sizeFactor,fov:s.fov,thresholdBlending:t.params.video.thresholdBlending,blendingThreshold:t.params.video.blendingThreshold,opacity:t.params.video.opacity,distanceFixed:t.distanceFixed,hideObstructions:t.params.video.hideObstructions,hideObstructionThreshold:t.params.video.hideObstructionThreshold}).draw(this.mesh),this.gl.disable(this.gl.BLEND),this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height),i&&Z(this,ge,et).call(this)}async setTime(i){if(!this.copyVideo||Math.abs(this.video.currentTime-i)<1e-6)return;const s=this.video;let l;const h=new Promise(f=>{l=f});if(s.currentTime=i,s.requestVideoFrameCallback)s.requestVideoFrameCallback(()=>l());else{const f=()=>{s.removeEventListener("seeked",f),l()};s.addEventListener("seeked",f,{once:!0})}await h}initTexture(){const i=this.gl.createTexture();this.gl.bindTexture(this.gl.TEXTURE_2D,i);const s=0,l=this.gl.RGBA,h=1,f=1,v=0,b=this.gl.RGBA,R=this.gl.UNSIGNED_BYTE,C=new Uint8Array([0,0,255,255]);return this.gl.texImage2D(this.gl.TEXTURE_2D,s,l,h,f,v,b,R,C),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),i}updateTexture(){const s=this.gl.RGBA,l=this.gl.RGBA,h=this.gl.UNSIGNED_BYTE;this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture),this.gl.texImage2D(this.gl.TEXTURE_2D,0,s,l,h,this.video)}setupVideo(i){const s=document.createElement("video");let l=!1,h=!1;s.playsInline=!0,s.muted=!0,s.loop=!1,s.addEventListener("playing",()=>{l=!0,v()},!0),s.addEventListener("timeupdate",()=>{h=!0,v()},!0),s.src=i,s.play();const f=this,v=()=>{l&&h&&(f.copyVideo=!0,s.paused||Z(this,ge,tt).call(this))};return s}}ge=new WeakSet,et=function(){const i=t.drawingTextureB;t.drawingTextureB=t.drawingTexture,t.drawingTexture=i,this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,t.drawingFameBufferB),this.gl.bindTexture(this.gl.TEXTURE_2D,t.drawingTextureB),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,t.drawingTextureB,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,t.drawingFrameBuffer),this.gl.bindTexture(this.gl.TEXTURE_2D,this.drawingTexture),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,t.drawingTexture,0)},tt=function(){this.hasPausedFirstTime||(this.hasPausedFirstTime=!0,this.video.pause())};class Ae{constructor(i,{poolSize:s=new GL.Vector(2,2),waterResolution:l=new GL.Vector(256,256),thresholdBlending:h=!1,numSwimmers:f=1,dataFolder:v=null}){this.title=i,this.videos=[],this.poolSize=s,this.waterResolution=l,this.numSwimmers=f,this.thresholdBlending=h,this.dataFolder=v}addVideo(i){this.videos.push(i)}async parseData(i){for(let s=0;s<i.length;s++)await i[s].parseData(this.dataFolder+s+".csv")}}const Ge=new p.Vector(0,-4,0);class pe{constructor(i,s,l=new p.Vector(1,1,1),h=null){this.initCenter=new p.Vector(i.x,i.y,i.z),this.center=new p.Vector(i.x,i.y,i.z),this.oldCenter=new p.Vector(i.x,i.y,i.z),this.radius=s,this.cinematic=!1,this.velocity=new p.Vector(0,0,0),this.acceleration=new p.Vector(0,0,0),this.mass=4/3*Math.PI*Math.pow(s,3)*1e3,this.invMass=1/this.mass,this.radiusSquared=s*s,this.mesh=p.Mesh.sphere({detail:10}),this.followTarget=!1,this.showStreak=!1,this.buoyancyFactor=h,this.color=l}spawnSplashes(i){if(!t.params.simulation.splashes.enabled&&!t.params.visualizations.showStreaks)return;const s=this.center.subtract(this.oldCenter).multiply(1/i),l=s.z>0?-Math.PI/2:Math.PI/2,h=s.dot(s);let f=this.center.subtract(this.velocity.unit());t.isSceneSynchronizedSwimming()&&(f=this.center.clone()),f.y=.15,!t.isSceneSynchronizedSwimming()&&t.params.simulation.splashes.enabled&&this.center.x<100&&Math.abs(this.center.y)<=this.radius&&t.splashParticles.spawnSplash(f,l,Math.sqrt(h),t.params.simulation.splashes.strengthThreshold,{});let v=(this.velocity.length()-1.6)/.9;const b={fixed:!0};if(t.isSceneSynchronizedSwimming())b.shrinking=.02;else{const R=new p.Vector(v,0,1-v);R.multiply(1/R.max()),b.color=R}b.shrinking=.2,t.params.visualizations.showStreaks&&this.showStreak&&this.velocity.length()>.01&&t.splashParticles.spawnSplash(this.center,0,v,0,b)}update(i){if(this.moved||(this.oldCenter=new p.Vector(this.center.x,this.center.y,this.center.z)),this.moved=!1,this.cinematic){if(this.followTarget||(this.velocity=new p.Vector(0,0,0)),!this.targetPos||!this.followTarget)return;let s=i/this.targetTime;s=Math.min(Math.max(s,0),1),this.center=this.center.multiply(1-s).add(this.targetPos.multiply(s)),this.velocity=this.center.subtract(this.oldCenter).multiply(1/i),this.targetTime-=i,this.targetTime<0&&(this.targetPos=null)}else{const s=Math.max(0,Math.min(1,(this.radius-this.center.y)/(2*this.radius))),l=this.buoyancyFactor?this.buoyancyFactor:t.params.simulation.buoyancyFactor,h=Ge.multiply(-l*this.mass*s),f=this.velocity.unit().multiply(-1e3*this.radiusSquared*s*this.velocity.dot(this.velocity));this.addForce(f),this.addForce(h),this.addForce(Ge.multiply(this.mass)),this.velocity=this.velocity.add(this.acceleration.multiply(i)),this.acceleration=new p.Vector(0,0,0),this.center=this.center.add(this.velocity.multiply(i)),this.center.y<this.radius-t.params.simulation.poolSize.y&&(this.center.y=this.radius-1,this.velocity.y=Math.abs(this.velocity.y)*.7)}}setTarget(i,s){this.targetPos=i,this.targetTime=s}addForce(i){this.cinematic?console.warn("Trying to add force to a cinematic sphere."):this.acceleration=this.acceleration.add(i.multiply(this.invMass))}move(i){this.moved=!0,this.oldCenter=new p.Vector(this.center.x,this.center.y,this.center.z),this.center=new p.Vector(i.x,i.y,i.z),this.cinematic||console.warn("Moving a non cinematic sphere.")}}class St{constructor(){this.mesh=new p.Mesh.plane({width:2,height:2,coords:!0,normals:!0}),this.waterTexture=null,this.shader=new p.Shader(`
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
        `)}updateFoam(i){if(!this.waterTexture){console.log("NO WATER TO UPDATE FOAM");return}this.foamTexNext.swapWith(this.foamTexPrev),this.foamTexNext.drawTo(()=>{this.foamTexPrev.bind(0),t.water.textureA.bind(1),this.shader.uniforms({foamTexPrev:0,water:1,dt:i,seed:t.time,poolSize:[t.params.simulation.poolSize.x,t.params.simulation.poolSize.y,t.params.simulation.poolSize.z],timeVariation:t.params.simulation.foam.timeVariation,spaceVariation:t.params.simulation.foam.spaceVariation,velThreshold:t.params.simulation.foam.velThreshold,velMax:t.params.simulation.foam.velMax,dispersion:t.params.simulation.foam.dispersion,attenuation:t.params.simulation.foam.attenuation}).draw(this.mesh)})}resetTextures(i,s,l){this.foamTexPrev=new p.Texture(i,s,{type:t.gl.FLOAT,filter:t.gl.LINEAR}),this.foamTexNext=new p.Texture(i,s,{type:t.gl.FLOAT,filter:t.gl.LINEAR}),this.waterTexture=l}}const we=`
    out vec2 coord;
    uniform vec2 invPoolSizeVertex;
    void main() {
      coord = gl_Vertex.xy * invPoolSizeVertex + 0.5;
      gl_Position = vec4(gl_Vertex.xy * 2. * invPoolSizeVertex, 0., 1.0);
    }
  `,Rt=`
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
`;function ee(o,i=null){this.gl=o,this.visualizationWavesEnabled=!0,this.sqrt_2_PI=Math.sqrt(2*Math.PI),this.foam=new St,this.areaConservationShader=new p.Shader(we,Rt),this.reset(i),p.Texture.canUseFloatingPointTextures(),this.dropShader=new p.Shader(we,`
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
  `),this.updateShader=new p.Shader(we,`
    uniform sampler2D tex;
    uniform vec2 delta;
    uniform float prev_wr;
    uniform float damping;
    uniform float sqrt_2_PI;
    uniform vec3 poolSize;
    `+Se+`
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
  `),this.normalShader=new p.Shader(we,`
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
  `),this.sphereShader=new p.Shader(`
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
  `),this.visualizationWavesShader=new p.Shader(we,`
    uniform sampler2D tex;
    uniform bool add;
    uniform vec3 poolSize;
    uniform bool showWR;
    uniform bool showDivingDistance;
    in vec2 coord;
    out vec4 fragColor;
    uniform float t;

    `+Se+`

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
    `)}ee.prototype.resetTextures=function(){const o=this.gl;this.textureA&&o.deleteTexture(this.textureA.id),this.textureB&&o.deleteTexture(this.textureB.id),this.textureA=new p.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:i}),this.textureB=new p.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:i}),this.foam.resetTextures(this.W,this.H,this.textureA),this.areaConservationTextureA=new p.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:this.gl.LINEAR}),this.areaConservationTextureB=new p.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:this.gl.LINEAR}),this.showAreaConservedGrid=!1,this.showProjectionGrid=!1,this.invPoolSize=new p.Vector(1/t.params.simulation.poolSize.x,1/t.params.simulation.poolSize.y,1/t.params.simulation.poolSize.z);var i=p.Texture.canUseFloatingPointLinearFiltering()?this.gl.LINEAR:this.gl.NEAREST;(!this.textureA.canDrawTo()||!this.textureB.canDrawTo())&&p.Texture.canUseHalfFloatingPointTextures()&&(console.log("No draw"),i=p.Texture.canUseHalfFloatingPointLinearFiltering()?this.gl.LINEAR:this.gl.NEAREST,this.textureA=new p.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:i}),this.textureB=new p.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:i}),this.areaConservationTextureA=new p.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:i}),this.areaConservationTextureB=new p.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:i}))};ee.prototype.reset=function(o=null){this.WR_position=1e5,this.prev_WR_position=0,o!==null?(console.log("resolution.y : "+o.y),this.W=Math.round(o.x),this.H=Math.round(o.y),console.log("Using custom resolution:",this.W,this.H)):(this.W=256,this.H=256),U.reset(new p.Vector(this.W,this.H)),this.plane=p.Mesh.plane({detail:255,width:t.params.simulation.poolSize.x,height:t.params.simulation.poolSize.z}),this.delta=new p.Vector(1/this.W,1/this.H),this.resetTextures()};ee.prototype.addDrop=function(o,i,s,l){var h=this;this.textureB.drawTo(function(){h.textureA.bind(),h.dropShader.uniforms({invPoolSizeVertex:[h.invPoolSize.x,h.invPoolSize.z],center:[o,i],radius:s,strength:l,poolSize:[t.params.simulation.poolSize.x,t.params.simulation.poolSize.y,t.params.simulation.poolSize.z]}).draw(h.plane)}),this.textureB.swapWith(this.textureA)};ee.prototype.addOrRemoveVisualizationWaves=function(o){if(t.classicalOverlayEnabled)return;const i=2.155;this.prev_WR_position=this.WR_position,this.WR_position=t.getRaceTime()*i,this.WR_position>t.params.simulation.poolSize.z&&(this.WR_position=2*t.params.simulation.poolSize.z-this.WR_position);var s=this;this.textureB.drawTo(function(){s.textureA.bind();const l=U.getAttributesTexture();l&&l.bind(1),s.visualizationWavesShader.uniforms({swimmersAttributesTexture:1,showDivingDistance:t.params.visualizations.showDivingDistance,showWR:t.params.visualizations.showWR,invPoolSizeVertex:[s.invPoolSize.x,s.invPoolSize.z],poolSize:[t.params.simulation.poolSize.x,t.params.simulation.poolSize.y,t.params.simulation.poolSize.z],wr:s.WR_position,sqrt_2_PI:s.sqrt_2_PI,add:o,swimmersNumber:t.swimmers.length,time:t.getRaceTime(),t:t.time,amplitudeFactor:t.params.quiver.amplitudeFactor,frequencyFactor:t.params.quiver.frequencyFactor,amplitude:t.params.quiver.amplitude,omega0:t.params.quiver.omega,waveLength0:t.params.quiver.waveLength,quiverIsActive:t.params.quiver.alwaysActive}).draw(s.plane)}),this.textureB.swapWith(this.textureA),this.updateAreaConservation()};ee.prototype.updateSpheres=function(o){if(t.params.simulation.optimized)U.attributes.draw(),this.textureB.drawTo(()=>{this.textureA.bind(),U.bindDisplacementTexture(1),U.bindOldDisplacementTexture(2),this.sphereShader.uniforms({oldDisplacementTexture:2,displacementTexture:1,invPoolSizeVertex:[this.invPoolSize.x,this.invPoolSize.z],poolSize:[t.params.simulation.poolSize.x,t.params.simulation.poolSize.y,t.params.simulation.poolSize.z],optimized:!0}).draw(this.plane),this.textureB.swapWith(this.textureA),U.attributes.draw()});else{const i=[];t.swimmers.forEach(s=>s.spheres.forEach(l=>i.push(l)));for(let s=0;s<i.length;s++){const l=i[s];this.moveSphere(l.oldCenter,l.center,l.radius)}}};ee.prototype.moveSphere=function(o,i,s){var l=this;this.textureB.drawTo(function(){l.textureA.bind(),l.sphereShader.uniforms({invPoolSizeVertex:[l.invPoolSize.x,l.invPoolSize.z],oldCenter:o,newCenter:i,radius:s,poolSize:[t.params.simulation.poolSize.x,t.params.simulation.poolSize.y,t.params.simulation.poolSize.z],optimized:!1}).draw(l.plane)}),this.textureB.swapWith(this.textureA)};ee.prototype.stepSimulation=function(o){var i=this;this.textureB.drawTo(function(){i.textureA.bind();const s=U.getAttributesTexture();s&&s.bind(2),i.updateShader.uniforms({swimmersAttributesTexture:2,swimmersNumber:t.swimmers.length,invPoolSizeVertex:[i.invPoolSize.x,i.invPoolSize.z],delta:[i.delta.x,i.delta.y],time:t.time,wr:i.WR_position,prev_wr:i.prev_WR_position,poolSize:[t.params.simulation.poolSize.x,t.params.simulation.poolSize.y,t.params.simulation.poolSize.z],sqrt_2_PI:i.sqrt_2_PI,damping:t.params.simulation.waterDamping}).draw(i.plane)}),this.textureB.swapWith(this.textureA),t.params.simulation.foam.enabled&&this.foam.updateFoam(o)};ee.prototype.updateNormals=function(){var o=this;this.textureB.drawTo(function(){o.textureA.bind(),o.normalShader.uniforms({invPoolSizeVertex:[o.invPoolSize.x,o.invPoolSize.z],delta:[o.delta.x,o.delta.y]}).draw(o.plane)}),this.textureB.swapWith(this.textureA)};ee.prototype.updateAreaConservation=function(){if(!t.params.visualizations.areaConservation.enabled)return;if(t.params.visualizations.areaConservation.optimized){this.updateAreaConservationOptimized();return}var o,i,s;if(this.textureA.type===this.gl.FLOAT)o=this.gl.FLOAT,i=Float32Array,s="EXT_color_buffer_float";else if(this.textureA.type===this.gl.HALF_FLOAT_OES)o=this.gl.HALF_FLOAT_OES,i=Uint16Array,s="EXT_color_buffer_half_float";else{console.warn("Unsupported texture type for reading");return}if(!this.gl.getExtension(s)){console.warn(s+" not available; cannot read pixels");return}this.fb||(this.fb=this.gl.createFramebuffer()),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.fb),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,this.textureA.id,0);const l=this.gl.checkFramebufferStatus(this.gl.FRAMEBUFFER);if(l!==this.gl.FRAMEBUFFER_COMPLETE){console.error("Framebuffer incomplete: "+l+" for texture type "+this.textureA.type),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null);return}if(this.gl.pixelStorei(this.gl.PACK_ALIGNMENT,1),this.readBuf=new i(this.W*this.H*4),this.writeBuf=new Float32Array(this.W*this.H*4),this.gl.readPixels(0,0,this.W,this.H,this.gl.RGBA,o,this.readBuf),!t.params.visualizations.areaConservation.optimized){const h=t.params.simulation.poolSize.x/this.W,f=t.params.simulation.poolSize.z/this.H,v=h*h,b=f*f;if(this.textureA.type===this.gl.FLOAT)for(let R=0;R<this.H;R+=1)for(let C=0;C<this.W;C+=1){const D=(R*this.W+C)*4,y=((this.H-1-R)*this.W+C)*4,O=this.writeBuf[y],I=this.writeBuf[y+1];if(C+1<this.W){const g=this.readBuf[D]-this.readBuf[D+4],S=Math.sqrt(g*g+v);this.writeBuf[y+4]=O+S}if(R+1<this.H){const g=this.readBuf[D]-this.readBuf[D+this.W*4],S=Math.sqrt(g*g+b);this.writeBuf[y-4*this.W+1]=I+S}}this.gl.bindTexture(this.gl.TEXTURE_2D,this.areaConservationTextureA.id),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT,1),this.gl.texSubImage2D(this.gl.TEXTURE_2D,0,0,0,this.W,this.H,this.gl.RGBA,this.gl.FLOAT,this.writeBuf),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.bindTexture(this.gl.TEXTURE_2D,null)}};ee.prototype.updateAreaConservationOptimized=function(){this.gl.bindTexture(this.gl.TEXTURE_2D,this.areaConservationTextureA.id),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.NEAREST),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.NEAREST);const o=t.params.flags.flagSize,i=t.params.simulation.poolSize.x/this.W,s=t.params.simulation.poolSize.z/this.H,l=t.swimmers[0].body.center;let h=new p.Vector(l.x,l.z);h.y-=be;const f=o.y/2-t.params.simulation.poolSize.z/2+Je;h.y=Math.max(h.y,f);const v=Math.max(o.x/i,o.y/s)/2;new p.Vector(t.params.simulation.poolSize.x,t.params.simulation.poolSize.z);const b=h.x/i+this.W/2,R=h.y/s+this.H/2,C=new p.Vector(b,R);for(let D=0;D<=v;D++)this.updateAreaConservationTexturePass(h,C,D);this.gl.bindTexture(this.gl.TEXTURE_2D,this.areaConservationTextureA.id),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.LINEAR),this.gl.bindTexture(this.gl.TEXTURE_2D,null)};ee.prototype.updateAreaConservationTexturePass=function(o,i,s){this.gl.viewport(0,0,this.W,this.H),this.areaConservationTextureB.drawTo(()=>{this.areaConservationTextureA.bind(0),this.textureA.bind(1),this.areaConservationShader.uniforms({previous:0,water:1,invPoolSizeVertex:[this.invPoolSize.x,this.invPoolSize.z],u_currentStep:s,center:[o.x,o.y],u_center_ij:[i.x,i.y],poolSize:[t.params.simulation.poolSize.x,t.params.simulation.poolSize.z],legibility:t.params.visualizations.areaConservation.legibility}).draw(this.plane)}),this.areaConservationTextureB.swapWith(this.areaConservationTextureA),this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height)};ee.prototype.test2=function(){const o=t.params.simulation.poolSize.x/this.W,i=t.params.simulation.poolSize.z/this.H,s=o*o,l=i*i,h=t.swimmers[0].body.center.clone();h.z-=be;const f=t.params.flags.flagSize;if(Math.max(f.x/o,f.y/i)/2,new p.Vector(t.params.simulation.poolSize.x,t.params.simulation.poolSize.z),h.x/o+this.W/2,h.y/i+this.H/2,this.textureA.type===this.gl.FLOAT)for(let v=0;v<this.H;v+=1)for(let b=0;b<this.W;b+=1){const R=(v*this.W+b)*4,C=((this.H-1-v)*this.W+b)*4,D=this.writeBuf[C],y=this.writeBuf[C+1];if(b+1<this.W){const O=this.readBuf[R]-this.readBuf[R+4],I=Math.sqrt(O*O+s);this.writeBuf[C+4]=D+I}if(v+1<this.H){const O=this.readBuf[R]-this.readBuf[R+this.W*4],I=Math.sqrt(O*O+l);this.writeBuf[C-4*this.W+1]=y+I}}};const zt=`#version 300 es
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

`,Ct=`#version 300 es
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

`,At=-9.8,Xe=.01;class He{constructor(i,s,l,h,{shrinking:f=1,size:v=null}){this.pos=i,this.vel=s,this.fixed=l,this.color=h,this.life=1,this.size=v||Math.random()*.05+.02,this.shrinking=f}update(i){if(this.fixed){this.life-=i*.15*this.shrinking;return}this.life-=i*1.5*this.shrinking,this.vel.y+=At*i,this.pos=this.pos.add(this.vel.multiply(i)),this.vel=this.vel.multiply(1-Xe),this.size*=1-Xe*this.shrinking}}class Ft{constructor(i){this.gl=i,this.particles=[],this.particleBuffer=this.gl.createBuffer(),this.initPrograms()}spawnSplash(i,s,l,h,{fixed:f=!1,color:v=new p.Vector(1,1,1),speed0:b=1,maxParticles:R=15,shrinking:C=null,size:D=null}){let y=C!==null?C:1;if(f){const I=new p.Vector(0,0,0),g=v||new p.Vector(l,0,1-l);v===null&&g.multiply(1/g.max());const S=D||.1,A=new He(i,I,f,g,{shrinking:y,size:S});A.life+=y*.1,this.particles.push(A);return}const O=Math.min(R,l*20);for(let I=0;I<O;I++){const g=(Math.random()-.5)*Math.PI,S=Math.random()*2*Math.PI,A=b*(.5+Math.random()),k=new p.Vector(Math.sin(g)*Math.cos(S)*A,Math.cos(g)*A,Math.sin(g)*Math.sin(S)*A);this.particles.push(new He(i,k,f,v,{shrinking:y}))}}update(i){this.particles.forEach((s,l)=>{s.update(i),s.life<=0&&this.particles.splice(l,1)})}buildShader(i,s){const l=this.gl.createShader(s);return this.gl.shaderSource(l,i),this.gl.compileShader(l),l}createProgram(i){const s=this.gl.createProgram();return i.forEach(l=>{this.gl.attachShader(s,l)}),this.gl.linkProgram(s),s}checkShaders(i,s,l){this.gl.getShaderParameter(i,this.gl.COMPILE_STATUS)||console.error(this.gl.getShaderInfoLog(i)),this.gl.getShaderParameter(s,this.gl.COMPILE_STATUS)||console.error(this.gl.getShaderInfoLog(s)),this.gl.getProgramParameter(l,this.gl.LINK_STATUS)||console.error(this.gl.getProgramInfoLog(l))}buildProgram(i,s){const l=this.buildShader(i,this.gl.VERTEX_SHADER),h=this.buildShader(s,this.gl.FRAGMENT_SHADER),f=this.createProgram([l,h]);return this.checkShaders(l,h,f),f}initPrograms(){this.program=this.buildProgram(zt,Ct)}draw({showStreaks:i=!0,showSplashes:s=!0}){const l=this.gl;l.enable(l.BLEND),l.blendFunc(l.SRC_ALPHA,l.ONE_MINUS_SRC_ALPHA);const h=[];this.particles.forEach(B=>{const K=B.pos;h.push(K.x,K.y,K.z,B.life,B.size,B.color.x,B.color.y,B.color.z,B.fixed)}),l.bindBuffer(l.ARRAY_BUFFER,this.particleBuffer),l.bufferData(l.ARRAY_BUFFER,new Float32Array(h),l.DYNAMIC_DRAW),l.useProgram(this.program);const f=l.getUniformLocation(this.program,"MVM"),v=new Float32Array(l.modelviewMatrix.m);l.uniformMatrix4fv(f,!0,v);const b=l.getUniformLocation(this.program,"projection"),R=new Float32Array(l.projectionMatrix.m);l.uniformMatrix4fv(b,!0,R);const C=l.getUniformLocation(this.program,"showStreaks");l.uniform1i(C,i);const D=l.getUniformLocation(this.program,"showSplashes");l.uniform1i(D,s);const y=l.getAttribLocation(this.program,"pos"),O=l.getAttribLocation(this.program,"life"),I=l.getAttribLocation(this.program,"size"),g=l.getAttribLocation(this.program,"color"),S=l.getAttribLocation(this.program,"isFixed"),A=l.FLOAT,k=!1,W=4,V=9*W;let L=0;l.bindBuffer(l.ARRAY_BUFFER,this.particleBuffer),l.vertexAttribPointer(y,3,A,k,V,L),l.enableVertexAttribArray(y),L=3*W,l.vertexAttribPointer(O,1,A,k,V,L),l.enableVertexAttribArray(O),L=4*W,l.vertexAttribPointer(I,1,A,k,V,L),l.enableVertexAttribArray(I),L=5*W,l.vertexAttribPointer(g,3,A,k,V,L),l.enableVertexAttribArray(g),L=8*W,l.vertexAttribPointer(S,1,A,k,V,L),l.enableVertexAttribArray(S),l.drawArrays(l.POINTS,0,this.particles.length),l.disable(l.BLEND)}}function qe(o){const i={};for(let s=0;s<o.length;s++)i[o[s]]=s;return i}const ae=new p.Vector(1e3,0,-1e3),Ye=["none","only medals","all"],je=["neighbours","per swimmer"],Pt=["none","cycle frequency","speed","acceleration"],Mt={none:{value:0,name:"PARAMETER_NONE"},"cycle frequency":{value:1,name:"PARAMETER_CYCLES"},speed:{value:2,name:"PARAMETER_SPEED"},acceleration:{value:3,name:"PARAMETER_ACCELERATION"}},Dt=["realistic","height field","lambert","toon"],It={realistic:{value:0,name:"RENDERING_REALISTIC"},"height field":{value:1,name:"RENDERING_HEIGHT_FIELD"},lambert:{value:2,name:"RENDERING_LAMBERT"},toon:{value:3,name:"RENDERING_TOON"}};var Y,Bt,it,rt,ot,at,st,nt,lt,Oe,ct;class Lt{constructor(){xe(this,Y);this.params={numSteps:2,fov:45,visualizations:{enabled:!0,showFlags:!1,showWR:!1,showSpeed:!1,showDivingDistance:!0,showFinishTimes:!1,showStreaks:!1,customWaterPerturbation:"none",waterColorParameter:"none",customParametersList:Pt,customParametersDict:Mt,PARAMETER_NONE:"none",PARAMETER_CYCLES:"cycle frequency",PARAMETER_SPEED:"speed",PARAMETER_ACCELERATION:"acceleration",showSwimmersLines:"none",swimmersLinesList:Ye,showSwimmersLinesDict:qe(Ye),swimmersLinesMode:"neighbours",swimmersLinesModeList:je,swimmersLinesModeDict:qe(je),medalsModeBeforeFinish:"none",medalsModesDict:{none:0,stars:1,bright:2,lanes:3},medalsModeAfterFinish:"none",areaConservation:{enabled:!0,optimized:!1,legibility:0},rendering:"realistic",renderingList:Dt,renderingDict:It,transitionBeginTime:null,shadow:{enabled:!0,shadowRadius:.5,shadowPower:.5,showCircle:!0,circleRadius:.6,circleStroke:.15},sparks:{enabled:!1,glow:5,glowOffset:.5,lengthFactor:1,stroke:.01,num:40,sizeFactor:50,fov:Math.PI/4}},swimmers:{showSpheres:!0,useTracking:!1},video:{thresholdBlending:!1,blendingThreshold:.41,show:!1,opacity:1,hideObstructions:!1,hideObstructionThreshold:.35},simulation:{heightLimit:.04,optimized:!1,waterDamping:.02,poolSize:new p.Vector(4,1,4),buoyancyFactor:1.1,foam:{enabled:!0,velThreshold:.35,velMax:3,dispersion:.015,timeVariation:2.5,spaceVariation:25,attenuation:.015},splashes:{enabled:!0,strengthThreshold:2}},quiver:{amplitudeFactor:.78,frequencyFactor:1.2,amplitude:.1,omega:2,waveLength:1,alwaysActive:!1},cornerView:{show:!0},chronoPhotography:{available:!1},flags:{flagSize:new p.Vector(1.5,2)}},this.resolution=new p.Vector(256,256),this.gl=p.create({preserveDrawingBuffer:!0}),this.gl.canvas.tabIndex=0,this.originalVisParams=JSON.parse(JSON.stringify(this.params.visualizations)),delete this.originalVisParams.shadow,delete this.originalVisParams.sparks,this.useConfigFile=!1,this.time=0,this.swimmers=[],this.translateX=0,this.translateY=0,this.zoomDistance=4,this.angleX=-25,this.angleY=-200.5,this.angleZ=0,this.water=null;const i=new Ae("—",{poolSize:new p.Vector(2,1,2),waterResolution:new p.Vector(256,256),numSwimmers:1}),s=new ne({});i.addVideo(new Ce(this.gl,"",s));const l=new Ae("100m freestyle",{poolSize:new p.Vector(25,2,50),waterResolution:new p.Vector(1024,2048),numSwimmers:10,thresholdBlending:!0,dataFolder:"./assets/race-data/"}),h=new ne({tx:-.53,ty:1.25,zoom:47.86,ax:-29,ay:-260.5,az:-5,fov:39.98});l.addVideo(new Ce(this.gl,"swimming-race.mp4",h,16.5)),this.currentVideo=l.videos[0];const f=new Ae("synchronized swimming",{poolSize:new p.Vector(25,2,30),waterResolution:new p.Vector(1024,2048),numSwimmers:2,dataFolder:"./assets/synchronized-swimming-data/"}),v=new ne({tx:-1.32,ty:.4,zoom:32.41,ax:-18,ay:-291.5,az:1,fov:42.8});f.addVideo(new Ce(this.gl,"synchronized-swimming.mp4",v,0)),this.scenesList=[i,l,f],this.scenes={},this.scenesList.forEach(b=>this.scenes[b.title]=b),this.currentScene=i,this.paused=!1,this.configPlayButton(),this.transitions={},this.playingDemo=!1,this.renderWater=!0,this.renderCube=!0,this.spheresRadiusCoeff=1,this.distanceFixed=0,this.chronoFrameBuffer=this.gl.createFramebuffer(),this.drawingFrameBuffer=null,this.drawingFameBufferB=this.gl.createFramebuffer(),this.drawingTextureB=this.gl.createTexture(),this.drawingTexture=this.gl.createTexture(),this.resetDrawingTexture(),this.cornerView=!1,this.splashParticles=new Ft(this.gl),this.floaters=[],this.showTimeline=!0,this.MVPMI=null,this.bubbleSpheres=[],this.classicalOverlayEnabled=!1,this.hideFloaters=!1}hideEditorPanel(i){const s=document.getElementById("event-editor");s&&(s.style.display=i?"block":"none")}resetDrawingTexture(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.chronoFrameBuffer),this.gl.bindTexture(this.gl.TEXTURE_2D,this.drawingTexture);const i=this.gl.canvas.width,s=this.gl.canvas.height;this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,i,s,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,null),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,this.drawingTexture,0);const l=this.gl.createRenderbuffer();this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,l),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,this.gl.DEPTH_COMPONENT16,i,s),this.gl.framebufferRenderbuffer(this.gl.FRAMEBUFFER,this.gl.DEPTH_ATTACHMENT,this.gl.RENDERBUFFER,l),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.drawingFameBufferB),this.gl.bindTexture(this.gl.TEXTURE_2D,this.drawingTextureB),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,i,s,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,null),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,this.drawingTextureB,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null)}configStopButton(){this.stopButton=document.getElementById("stop-button"),this.stopButton.addEventListener("click",()=>{this.stopRace()})}configPlayButton(){this.configStopButton(),this.playButton=document.getElementById("play-button"),this.playButton.addEventListener("click",()=>{this.playButton.textContent=="pause"?this.pause():(U.raceHasStarted||this.startRace(),this.play())})}setCalibration(i){this.translateX=i.tx,this.translateY=i.ty,this.zoomDistance=i.zoom,this.angleX=i.ax,this.angleY=i.ay,this.angleZ=i.az,this.params.fov=i.fov,this.gl.matrixMode(this.gl.PROJECTION),this.gl.loadIdentity(),this.gl.perspective(this.params.fov,this.gl.canvas.width/this.gl.canvas.height,.01,100),this.gl.matrixMode(this.gl.MODELVIEW)}updateFloaters(i){}isSceneSynchronizedSwimming(){return this.currentScene.title=="synchronized swimming"}setMVPMI(){const i=this.gl.modelviewMatrix,l=this.gl.projectionMatrix.multiply(i);this.MVPMI=l.inverse(),console.log("MVPMI set")}async setScene(i){if(console.log("SET SCENE : "+i),this.currentScene=this.scenes[i],this.currentScene){Z(this,Y,it).call(this,this.currentScene.poolSize),this.currentScene.title=="100m freestyle"?Z(this,Y,rt).call(this):this.floaters=[];const s=document.getElementById("time-slider-container");this.currentVideo=this.currentScene.videos[0],this.params.video.show=!!this.currentVideo.video,this.params.swimmers.showSpheres=!this.currentVideo.video,s.hidden=!this.currentVideo.video,this.currentScene.title!="—"?this.params.simulation.waterDamping=.1:this.params.simulation.waterDamping=.02;const l=this.currentScene.numSwimmers;if(console.log("num swimmers : "+l),this.swimmers.length!=l){for(let h=this.swimmers.length;h<l;h++){const f=new U(new p.Vector(0,0,0));this.swimmers.push(f)}for(let h=this.swimmers.length;h>l;h--)this.swimmers=this.swimmers.slice(1);this.swimmers.forEach(h=>h.waterDamping=this.params.simulation.waterDamping)}this.params.swimmers.useTracking=!0,await this.currentScene.parseData(this.swimmers),this.swimmers.forEach(h=>h.update(0)),console.log("scene name : "+this.currentScene.title),this.setCalibration(this.currentVideo.calibration),this.resolution=this.currentScene.waterResolution,this.params.video.thresholdBlending=this.currentScene.thresholdBlending,this.currentScene.thresholdBlending?this.params.video.opacity=1:this.params.video.opacity=.5,this.params.visualizations.areaConservation.enabled=!1,this.stopRace(),this._reset(),this.params.simulation.optimized=!!this.currentVideo.video,this.useConfigFile=!this.isSceneSynchronizedSwimming(),this._setPannelMinimized(this.currentScene.title!="100m freestyle"),this.isSceneSynchronizedSwimming()&&(this.params.simulation.foam.velThreshold=0,this.params.simulation.foam.velMax=2.2,this.params.simulation.foam.dispersion=.0025,this.params.simulation.foam.timeVariation=2.5,this.params.simulation.foam.spaceVariation=10,this.params.simulation.foam.attenuation=2e-4)}}useGravity(i){U.useGravity=i;for(let s of t.swimmers)s.body.cinematic=!U.useGravity}isOneVisualizationEnabled(){return this.params.visualizations.showFlags||this.params.visualizations.medalsModeBeforeFinish!="none"||this.params.visualizations.medalsModeAfterFinish!="none"||this.params.visualizations.showWR||this.params.visualizations.showSpeed||this.params.visualizations.showDivingDistance}updateTime(i){this.time+=i,this._updateDistanceMarker&&this._updateDistanceMarker()}getRaceTime(){return U.raceHasStarted?this.time-this.currentVideo.videoStartTime:0}resetParams(){Object.entries(this.originalVisParams).forEach(i=>{const s=i[0],l=i[1];this.params.visualizations[s]=l}),this.params.visualizations.areaConservation.enabled=!1}updateEventIndex(){for(this.currentEventIndex=0;this.events[this.currentEventIndex]&&this.events[this.currentEventIndex].time<this.getRaceTime();)this.currentEventIndex++;this.currentEventIndex>0&&this.currentEventIndex--}setRaceTime(i){const s=this.currentVideo.videoStartTime?this.currentVideo.videoStartTime:0;this.time=s+i,this.currentVideo.video&&this.currentVideo.setTime(this.time),this.events&&(this.updateEventIndex(),this.resetParams())}showTexts(i){document.getElementById("h").hidden=!i,i?this.showCommands&&(document.getElementById("commands").hidden=!1):(this.showCommands=!document.getElementById("commands").hidden,document.getElementById("commands").hidden=!0)}startRace(){this.currentVideo.videoStartTime>=3?this.setRaceTime(-3):this.setRaceTime(0),this.currentVideo.video&&this.currentVideo.video.play(),this.swimmers.forEach(i=>i.startRace()),U.raceHasStarted=!0,U.useGravity=!0,this.water.resetTextures(),this.water.WR_position=0,this.stopButton.hidden=!1,this._clearChronoTexture(this.gl.canvas.width,this.gl.canvas.height,this.gl),this.showTexts(!1)}stopRace(){this.paused&&this.play(),this.setRaceTime(0),this.currentVideo.video&&this.currentVideo.video.pause(),this.swimmers.forEach(i=>i.swim(!1)),U.raceHasStarted=!1,this.water.resetTextures(),this.playButton.textContent="play",this.stopButton.hidden=!0,this.showTexts(!0)}pause(){this.paused=!0,this.pauseVideo(),this.playButton.textContent="play"}play(){this.paused=!1,U.raceHasStarted&&(this.playVideo(),this.playButton.textContent="pause")}pauseVideo(){this.currentVideo.video&&this.currentVideo.video.pause()}playVideo(){this.currentVideo.video&&(this.currentVideo.video.play(),this.currentVideo.video.currentTime=this.time)}renderVideo(){this.currentVideo.video&&this.currentVideo.render()}parseConfigFile(i){fetch(i).then(s=>s.text()).then(s=>{this.events=JSON.parse(s),this.currentEventIndex=0,this._renderTimeline&&this._renderTimeline()})}updateTransitions(){Object.entries(this.transitions).forEach(i=>{const s=i[0],l=i[1],h=this.getRaceTime()-l.beginTime;if(h>l.duration){delete this.transitions[s];return}l.show?l.opacity=h/l.duration:l.opacity=1-h/l.duration})}updateParams(){if(!U.raceHasStarted||!this.events||!this.useConfigFile)return;const i=this.events[this.currentEventIndex];if(!i)return;let s=i.rankSwimmerToggle;if(s||(s=1),i.distance&&this.swimmers[s-1].getDistanceTraveled()>=i.distance||i.time!==void 0&&this.getRaceTime()>=i.time){this.currentEventIndex++;const l=i.transition&&i.transition.type=="dissolve";Object.entries(i.params).forEach(h=>{const f=h[0],v=h[1];f!=="transition"&&(l&&(v===!0||v===!1)&&(this.transitions[f]={opacity:1-1*v,show:v,beginTime:this.getRaceTime(),duration:i.transition.duration}),this.params.visualizations[f]=v)})}}chronoPhotography({circle:i=!1}){console.log("shoot"),this.distanceFixed=this.swimmers[0].getDistanceTraveled(),console.log("distance fixed : "+this.distanceFixed),this._fixTexture(i)}recalibrate(){this.currentVideo&&this.setCalibration(this.currentVideo.calibration)}async updateVideoForOfflineRendering(){if(this.currentVideo&&this.currentVideo.video){if(this.time<0||this.time>this.currentVideo.video.duration)return;await this.currentVideo.setTime(this.time)}}async launchDemo(){this.playingDemo=!0,this.parseConfigFile("./assets/vis-config-classical-overlay.json"),this.params.chronoPhotography.available=!0,this.drawingFrameBuffer=this.chronoFrameBuffer,console.log("Launch demo"),await this.setScene("100m freestyle").then(()=>{this.params.video.show=!1,this.translateX=200}),this._gui.hide(),document.getElementById("event-editor").hidden=!0,document.getElementById("time-slider-container").hidden=!0,document.getElementById("h").hidden=!0,this.demoTime=0,this.classicalOverlayEnabled=!0,this.startRace(),this.params.visualizations.showDivingDistance=!1,this.params.visualizations.shadow.enabled=!1,this.params.simulation.splashes.enabled=!1,this.demoEvents=[{time:0,text:`Situated Water-Based Visual Effects for Sports Video Augmentation 
 Submission to IEEE Vis 2026 #1528`,duration:4,pause:!0},{time:0,text:"Reproduction of the current TV approach",duration:2,action:()=>{this.params.video.show=!0,this.translateX=this.currentVideo.calibration.tx}},{time:8,text:"Currently they use an overlay projection plan.",duration:2,action:()=>this.showOverlayPlane=!0,pause:!1},{time:10,text:"Then the flags are drawn on the overlay.",duration:2,action:()=>this.params.visualizations.showFlags=!0,pause:!1},{time:12,text:"The overlay is transparent where nothing is drawn.",duration:3,action:()=>this.showOverlayPlane=!1,pause:!1},{time:16,text:"Our method",duration:3,action:()=>Z(this,Y,ot).call(this),pause:!1},{time:4,text:"We use water-based visual effects to amplify swimming race data",duration:5,pause:!1},{time:15,text:"Method breakdown",duration:3,action:()=>Z(this,Y,at).call(this),pause:!0},{time:.5,text:"Evan Wallace's WebGL water",duration:3.5,pause:!1},{time:4,text:"nothing",duration:0,action:()=>Z(this,Y,st).call(this),pause:!1},{time:0,text:"We adapted to swimming",duration:2,action:()=>this.showOverlayPlane=!1,pause:!0},{time:.5,text:"Pool",duration:1,pause:!1},{time:1.5,text:"Water",duration:1,pause:!1},{time:2.5,text:"Floaters",duration:1,action:()=>this.hideFloaters=!1,pause:!1},{time:3.5,text:"Spheres",duration:2,pause:!1},{time:6,text:"Let' start a swimming race",duration:1},{time:7.5,text:"Flag appear with water-based transition",duration:2.5,pause:!0,calib:new ne({tx:16.9,ty:6.9,zoom:20.5,ax:-37,ay:-126.5,az:-5,fov:39.98})},{time:11.5,text:"Diving points and swimmers' shadows",duration:2.5,pause:!0,calib:new ne({tx:9,ty:-10,zoom:3,ax:-30,ay:-15,az:0,fov:39.98})},{time:14.8,text:"Breakout points",duration:2,pause:!0,calib:new ne({tx:-3,ty:-7,zoom:12,ax:-30,ay:10,az:0,fov:39.98})},{time:15.7,text:"Speeds",duration:1.5,pause:!1},{time:17.2,text:"First swimmers lines",duration:1.5,pause:!1},{time:18.7,text:"Potential medals",duration:1.5,pause:!1},{time:20.2,text:"World record line",duration:1.5,pause:!1},{time:22.5,text:"Embedding in the original swimming race video",duration:2,pause:!1},{time:24.5,text:"Hiding spheres",duration:2.5,pause:!1},{time:27,text:"Hiding obstructions",duration:2,pause:!1},{time:28.5,text:"Corner view from above",duration:2,action:()=>this.params.cornerView.show=!0,pause:!1},{time:33.5,text:"Transferring to synchronized swimming",duration:20,action:()=>Z(this,Y,nt).call(this),pause:!1},{time:27.5,text:"Artificially enhanced foam to draw the trajectory",duration:2,pause:!1},{time:30.1,text:"Splashes to emphasize an event",duration:2,pause:!0}],this.currentDemoEvent=this.demoEvents.shift()}stopDemo(){this.playingDemo=!1,this.setScene("—"),document.getElementById("event-editor").hidden=!1,document.getElementById("time-slider-container").hidden=!1,document.getElementById("h").hidden=!1,this.renderWater=!0,this.renderCube=!0,this.params.visualizations.shadow.enabled=!0,this._gui.show(),this.params.simulation.buoyancyFactor=1.1}updateDemo(i){if(!this.playingDemo)return;if(this.demoEventDisplayed){if(this.demoEventDuration+=i,this.currentDemoEvent.calib){const g=this.currentDemoEvent.duration;let S;this.demoEventDuration<g/6||this.demoEventDuration>5*g/6?S=0:this.demoEventDuration<=g/2?S=(this.demoEventDuration-g/6)/(g/3):S=1-(this.demoEventDuration-g/2)/(g/3),this.demoShowVideoTime||(this.demoSavedCalib.ay+=15*i),this.setCalibration(this.demoSavedCalib.interpolate(this.currentDemoEvent.calib,S,.33))}if(this.demoEventDuration>this.currentDemoEvent.duration)this.demoEventDisplayed=!1,this.play(),this.demoSavedCalib&&this.setCalibration(this.demoSavedCalib),this.demoSavedCalib=null,this.currentDemoEvent=this.demoEvents.shift(),document.getElementById("demo-text").innerText="";else if(this.currentDemoEvent.pause)return}this.demoTime+=i,!this.demoEventDisplayed&&this.currentDemoEvent&&this.demoTime>this.currentDemoEvent.time&&(this.demoEventDisplayed=!0,this.demoEventDuration=0,this.currentDemoEvent.pause&&this.pause(),document.getElementById("demo-text").innerText=this.currentDemoEvent.text,this.currentDemoEvent.action&&this.currentDemoEvent.action(),this.currentDemoEvent.calib&&(this.demoSavedCalib=new ne({tx:this.translateX,ty:this.translateY,zoom:this.zoomDistance,ax:this.angleX,ay:this.angleY,az:this.angleZ,fov:this.params.fov})));const s=this.demoTime;if(!this.demoPart3Started||this.demoPart5Started)return;const l=1.5,h=3.5,f=4.5,v=6.5,b=1;if(s<=b){const g=Z(this,Y,Oe).call(this,0,b,s);this.translateX=g*this.currentVideo.calibration.tx+(1-g)*200}if(this.demoPart4Started)this.demoShowVideoTime||(this.angleY+=15*i);else return;if(!this.renderWater&&s>l&&(this.renderWater=!0),s>l&&s<l+.5)for(var R=0;R<10;R++)this.water.addDrop(Math.random()*2-1,Math.random()*2-1,.06,R&1?.6:-.6);Z(this,Y,lt).call(this,s,h),!U.raceHasStarted&&s>=f&&s<v&&(this.params.simulation.splashes.enabled=!1,this.swimmers.forEach(g=>{g.body.cinematic=!0;const S=new p.Vector(g.body.center.x,0,0),A=new p.Vector(g.body.center.x,1,-this.params.simulation.poolSize.z/2);g.body.move(Z(this,Y,ct).call(this,S,A,f,v,s))})),!U.raceHasStarted&&s>=v&&(this.params.simulation.buoyancyFactor=1.1,this.params.simulation.splashes.enabled=!0,this.params.visualizations.shadow.enabled=!0,this.startRace()),!this.demoShowVideoTime&&this.angleY>=this.currentVideo.calibration.ay+360&&(this.demoShowVideoTime=22.5),!this.params.video.show&&this.demoShowVideoTime&&s>=this.demoShowVideoTime&&(this.params.video.show=!0,this.params.video.opacity=0);const C=2;this.params.video.show&&s<=this.demoShowVideoTime+C&&(this.params.video.opacity=(s-this.demoShowVideoTime)/C,console.log("opacity : "+this.params.video.opacity));const D=2;let y=null;this.demoShowVideoTime&&(y=this.demoShowVideoTime+C+D),this.params.video.show&&s>this.demoShowVideoTime+C&&s<y&&(this.spheresRadiusCoeff=1-(s-(this.demoShowVideoTime+C))/D);let O=null;y&&(O=y+.5);const I=2;O&&s>O&&s<O+I&&(this.params.video.hideObstructions=!0,this.params.video.hideObstructionThreshold=(s-O)/I*.5)}}Y=new WeakSet,Bt=function(){this.gl.matrixMode(this.gl.PROJECTION),this.gl.loadIdentity(),this.gl.perspective(this.params.fov,this.gl.canvas.width/this.gl.canvas.height,.01,100),this.gl.matrixMode(this.gl.MODELVIEW),this.gl.loadIdentity(),this.gl.translate(this.translateX,this.translateY,-this.zoomDistance),this.gl.rotate(-this.angleZ,0,0,1),this.gl.rotate(-this.angleX,1,0,0),this.gl.rotate(-this.angleY,0,1,0),this.gl.translate(0,.5,0)},it=function(i){console.log("SET POOL SIZE : "+i.z),this.params.simulation.poolSize.x=i.x,this.params.simulation.poolSize.y=i.y,this.params.simulation.poolSize.z=i.z},rt=function(){this.floaters=[];const i=.1,s=this.params.simulation.poolSize,l=s.x/10,h=s.z/(2*i),f=-s.z/2,v=-s.x/2,b=new p.Vector(0,1/2,0),R=new p.Vector(1/2,1/2,0),C=new p.Vector(0,.5/2,1/2),D=new p.Vector(1/2,0,0),y=[b,C,C,R,R,R,C,C,b];for(let O=1;O<10;O++)for(let I=0;I<h;I++){const g=new p.Vector(v+O*l,0,f+i+I*2*i);let S=y[O-1];(Math.abs(g.z)>=20||Math.abs(g.z)<=.5||Math.abs(Math.abs(g.z)-10)<=.25)&&(S=D),this.floaters.push(new pe(g,i,S,2.5))}},ot=function(){this.classicalOverlayEnabled=!1,this.params.chronoPhotography.available=!1,this.drawingFrameBuffer=null,this.parseConfigFile("./assets/vis-config.json"),this.stopRace(),this.params.simulation.splashes.enabled=!0,this.params.visualizations.shadow.enabled=!0,this.startRace(),this.params.video.hideObstructions=!0,this.params.cornerView.show=!1,this.water.resetTextures(),this.demoTime=0,this.demoSecondPartStarted=!0},at=function(){this.stopRace(),this.params.video.hideObstructions=!1,this.demoTime=0,this.params.visualizations.shadow.enabled=!1,this.setScene("—").then(()=>{this.useGravity(!0),this.swimmers[0].body.center.y=.5,this.translateX=200,this.params.simulation.splashes.enabled=!1,this.pause()}),this.demoPart3Started=!0},st=function(){this.params.cornerView.show=!1,this.params.simulation.splashes.enabled=!0,this.hideFloaters=!0,this.stopRace(),this.parseConfigFile("./assets/vis-config-demo-2.json"),this.setScene("100m freestyle").then(()=>{this.translateX=200,this.swimmers.forEach(i=>i.body.move(ae))}),this.classicalOverlayEnabled=!1,this.params.video.show=!1,this.params.swimmers.showSpheres=!0,this.spheresRadiusCoeff=1,this.swimmersShown=0,this.useGravity(!0),this.params.simulation.buoyancyFactor=1.5,this.params.visualizations.shadow.enabled=!1,this.renderWater=!1,this.hideFloaters=!0,this.demoTime=0,this.demoPart4Started=!0},nt=function(){this.stopRace(),this.parseConfigFile("./assets/vis-config-classical-overlay.json"),this.setScene("synchronized swimming").then(()=>{this.startRace(),this.params.video.hideObstructions=!1}),this.demoPart5Started=!0,this.demoTime=0},lt=function(i,s){const h=Math.floor((i-s)/.1);if(this.swimmersShown<10&&h>=this.swimmersShown){console.log("swimmers shown : "+this.swimmersShown),console.log("next index swimmer : "+h),console.log("num swimmers : "+this.swimmers.length),this.params.simulation.poolSize.x;const f=this.swimmers[h];f.body.move(new p.Vector(f.body.initCenter.x,.5,0)),this.swimmersShown++}},Oe=function(i,s,l){if(l<i)return 0;if(l>s)return 1;const h=(l-i)/(s-i);return 1-(Math.cos(h*Math.PI)+1)/2},ct=function(i,s,l,h,f){const v=Z(this,Y,Oe).call(this,l,h,f);console.log("t norm : "+v);const b=(R,C,D,y=1)=>Math.pow(D,y)*C+(1-Math.pow(D,y))*R;return new p.Vector(b(i.x,s.x,v),b(i.y,s.y,v,20),b(i.z,s.z,v,2))};const t=new Lt;t.parseConfigFile("./assets/vis-config.json");const Nt=`#version 300 es
    const float ARM_DELTA_X = float(`+Le+`);
    const float FOOT_DELTA_X = float( `+Be+`);
    const float FOOT_DELTA_Z = float( `+Ne+`);
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

`,Ot=`#version 300 es
    precision highp float;
    in float fragCyclePhase;
    in float fragAltitude;
    const float PI = 3.141592;
    out vec4 fragColor;
    void main() {
        fragColor = vec4(fragAltitude, fragCyclePhase / (2. * PI), 1., 1.);
    }
`,kt=`#version 300 es
    in vec2 iVertex;
    out vec2 fragCoord;
    void main() {
        fragCoord = iVertex * .5 + .5;
        gl_Position = vec4(iVertex.xy, 0., 1.);
    }
`,Vt=`#version 300 es
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
`,Ut=new Float32Array([-1,-1,1,-1,1,1,-1,1]),Wt=new Uint16Array([0,1,2,2,3,0]);var te,dt,ve,ht;class Gt{constructor(){xe(this,te);this.numVecAttributes=Ke,this.maxNumSwimmer=$e,this.gl=t.gl;const i=this.gl.NEAREST;this.texture=new p.Texture(this.numVecAttributes,this.maxNumSwimmer,{type:this.gl.FLOAT,filter:i}),this.initPrograms(),this.indexBuffer=this.gl.createBuffer(),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.indexBuffer),this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER,Wt,this.gl.STATIC_DRAW),this.vboPlane=this.gl.createBuffer(),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vboPlane),this.gl.bufferData(this.gl.ARRAY_BUFFER,Ut,this.gl.STATIC_DRAW),this.vboPoints=this.gl.createBuffer()}update(){this.numSwimmers=t.swimmers.length;const i=5;this.swimmersAttributes=new Float32Array(this.numVecAttributes*4*this.maxNumSwimmer*i);const s=Z(this,te,dt).call(this,t.swimmers);for(let l=0;l<t.swimmers.length;l++){const h=s[l];Z(this,te,ht).call(this,l,h),Z(this,te,ve).call(this,t.swimmers.length+l,h.leftArm),Z(this,te,ve).call(this,2*t.swimmers.length+l,h.rightArm),Z(this,te,ve).call(this,3*t.swimmers.length+l,h.leftFoot),Z(this,te,ve).call(this,4*t.swimmers.length+l,h.rightFoot)}this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture.id),this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,!1),this.gl.texSubImage2D(this.gl.TEXTURE_2D,0,0,0,this.numVecAttributes,this.maxNumSwimmer,this.gl.RGBA,this.gl.FLOAT,this.swimmersAttributes),this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,!0),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vboPoints),this.gl.bufferData(this.gl.ARRAY_BUFFER,this.swimmersAttributes,this.gl.DYNAMIC_DRAW)}buildShader(i,s){const l=this.gl.createShader(s);return this.gl.shaderSource(l,i),this.gl.compileShader(l),l}createProgram(i){const s=this.gl.createProgram();return i.forEach(l=>{this.gl.attachShader(s,l)}),this.gl.linkProgram(s),s}checkShaders(i,s,l){this.gl.getShaderParameter(i,this.gl.COMPILE_STATUS)||console.error(this.gl.getShaderInfoLog(i)),this.gl.getShaderParameter(s,this.gl.COMPILE_STATUS)||console.error(this.gl.getShaderInfoLog(s)),this.gl.getProgramParameter(l,this.gl.LINK_STATUS)||console.error(this.gl.getProgramInfoLog(l))}createRenderingTexture(i,s){this.pointsTexture=new p.Texture(i,s,{type:this.gl.FLOAT,filter:this.gl.NEAREST}),this.pointsFrameBuffer=this.gl.createFramebuffer(),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.pointsFrameBuffer);const l=this.gl.COLOR_ATTACHMENT0;this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,l,this.gl.TEXTURE_2D,this.pointsTexture.id,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.horizontalPassTexture=new p.Texture(i,s,{type:this.gl.FLOAT,filter:this.gl.LINEAR}),this.horizontalPassFrameBuffer=this.gl.createFramebuffer(),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.horizontalPassFrameBuffer),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,l,this.gl.TEXTURE_2D,this.horizontalPassTexture.id,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null);const h=s/4,f=h,v=h;this.displacementTexture=new p.Texture(f,v,{type:this.gl.FLOAT,filter:this.gl.LINEAR}),this.displacementFrameBuffer=this.gl.createFramebuffer(),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.displacementFrameBuffer),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,l,this.gl.TEXTURE_2D,this.displacementTexture.id,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.oldDisplacementTexture=new p.Texture(f,v,{type:this.gl.FLOAT,filter:this.gl.LINEAR})}buildProgram(i,s){const l=this.buildShader(i,this.gl.VERTEX_SHADER),h=this.buildShader(s,this.gl.FRAGMENT_SHADER),f=this.createProgram([l,h]);return this.checkShaders(l,h,f),f}initPrograms(){this.programPoints=this.buildProgram(Nt,Ot),this.programVolume=this.buildProgram(kt,Vt),this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height)}volumePass(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.horizontalPassFrameBuffer),this.gl.useProgram(this.programVolume);const i=this.gl.getAttribLocation(this.programVolume,"iVertex"),s=this.gl.getUniformLocation(this.programVolume,"poolSize");this.gl.uniform2f(s,t.params.simulation.poolSize.x,t.params.simulation.poolSize.z);const l=this.gl.getUniformLocation(this.programVolume,"horizontal");this.gl.uniform1i(l,!0);const h=this.gl.getUniformLocation(this.programVolume,"show");this.gl.uniform1i(h,!1);const f=this.gl.getUniformLocation(this.programVolume,"swapColor");this.gl.uniform1i(f,!1);const v=2,b=this.gl.FLOAT,R=!1,C=0,D=0;this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vboPlane),this.gl.vertexAttribPointer(i,v,b,R,C,D),this.gl.enableVertexAttribArray(i),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.indexBuffer),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.pointsTexture.id),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this.gl.drawElements(this.gl.TRIANGLES,6,this.gl.UNSIGNED_SHORT,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.displacementFrameBuffer),this.gl.uniform1i(l,!1),this.gl.uniform1i(h,!1),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.horizontalPassTexture.id),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this.gl.viewport(0,0,this.displacementTexture.width,this.displacementTexture.height),this.gl.drawElements(this.gl.TRIANGLES,6,this.gl.UNSIGNED_SHORT,0),this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height)}pointPass(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.pointsFrameBuffer),this.gl.useProgram(this.programPoints);const i=this.gl.getAttribLocation(this.programPoints,"iData1"),s=this.gl.getAttribLocation(this.programPoints,"iData2"),l=this.gl.getAttribLocation(this.programPoints,"iData3"),h=this.gl.getUniformLocation(this.programPoints,"invPoolSize");this.gl.uniform2f(h,1/t.params.simulation.poolSize.x,1/t.params.simulation.poolSize.z);const f=4,v=this.gl.FLOAT,b=!1,R=4,C=12*R;let D=0;this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vboPoints),i>=0&&(this.gl.vertexAttribPointer(i,f,v,b,C,D),this.gl.enableVertexAttribArray(i)),D=4*R,s>=0&&(this.gl.vertexAttribPointer(s,f,v,b,C,D),this.gl.enableVertexAttribArray(s)),D=2*4*R,l>=0&&(this.gl.vertexAttribPointer(l,f,v,b,C,D),this.gl.enableVertexAttribArray(l)),this.gl.viewport(0,0,this.pointsTexture.width,this.pointsTexture.height),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this.gl.drawArrays(this.gl.POINTS,0,5*this.numSwimmers)}updateOldDisplacementTexture(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.displacementFrameBuffer),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.oldDisplacementTexture.id),this.gl.copyTexSubImage2D(this.gl.TEXTURE_2D,0,0,0,0,0,this.oldDisplacementTexture.width,this.oldDisplacementTexture.height)}draw(){this.updateOldDisplacementTexture(),this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this.pointPass(),this.volumePass(),this.gl.disable(this.gl.BLEND)}}te=new WeakSet,dt=function(i){const s=function(f,v){return v.getDistanceTraveled()-f.getDistanceTraveled()};let l=0;i.forEach(f=>{f.hasFinished()>.1&&l++});const h=i.slice(0,l).concat(i.slice(l).sort(s));for(let f=0;f<i.length;f++)i[f]=h[f];return i},ve=function(i,s){this.swimmersAttributes[this.numVecAttributes*4*i]=s.center.x,this.swimmersAttributes[this.numVecAttributes*4*i+1]=s.center.z,this.swimmersAttributes[this.numVecAttributes*4*i+7]=s.center.y},ht=function(i,s){Z(this,te,ve).call(this,i,s.body),this.swimmersAttributes[this.numVecAttributes*4*i+2]=s.divingDistance,this.swimmersAttributes[this.numVecAttributes*4*i+3]=s.divingTime,this.swimmersAttributes[this.numVecAttributes*4*i+4]=s.reactionTime,this.swimmersAttributes[this.numVecAttributes*4*i+5]=s.body.velocity.z,this.swimmersAttributes[this.numVecAttributes*4*i+6]=s.nationality,this.swimmersAttributes[this.numVecAttributes*4*i+8]=s.breakoutDistance,this.swimmersAttributes[this.numVecAttributes*4*i+9]=s.breakoutTime,this.swimmersAttributes[this.numVecAttributes*4*i+10]=s.finishTime,this.swimmersAttributes[this.numVecAttributes*4*i+11]=s.waterDamping};function Fe(o=0,i=1){const s=1-Math.random(),l=Math.random();return Math.sqrt(-2*Math.log(s))*Math.cos(2*Math.PI*l)*i+o}const Xt=.5,Ht=2,me="Temps (s)",ye="event",_e="eventX",Ee="eventY",qt="frequence (cylce/min)";var ze,mt;const q=class q{constructor(i){xe(this,ze);this.startingPoint=new p.Vector(i.x,i.y,i.z),this.center=new p.Vector(i.x,i.y,i.z),this.force=new p.Vector(0,0,190+Fe(0,20)),this.reactionTime=Math.max(.1,Fe(.15,.02));const s=.25,l=.15;this.body=new pe(i,s),this.body.showStreak=!0,this.leftArm=new pe(ae,l),this.rightArm=new pe(ae,l),this.leftFoot=new pe(ae,l),this.rightFoot=new pe(ae,l),this.body.cinematic=!q.useGravity,this.leftArm.cinematic=!0,this.rightArm.cinematic=!0,this.leftFoot.cinematic=!0,this.rightFoot.cinematic=!0,this.spheres=[this.body,this.leftArm,this.rightArm,this.leftFoot,this.rightFoot],this.divingDistance=0,this.divingTime=1e3,this.breakoutDistance=0,this.breakoutTime=1e3,this.nationality=Math.random()>.5?0:1,this.currendDataIndex=0,this.useTracking=!1,this.armPulsation=2*Math.PI*Ht,this.cycleTime=0,this.cyclePhase=0,this.finishTime=0,this.waterDamping=t.params.simulation.waterDamping}async parseData(i){await fetch(i).then(s=>{const l=s.headers.get("content-type");return!l||!l.includes("text/csv")?(console.log("no file found : "+i),null):s.text()}).then(s=>{if(!s)return;const l=s.split(`
`),h=l[0].split(/,|;/);this.data=l.slice(1).map(f=>{const v=f.split(/,|;/);return Object.fromEntries(h.map((b,R)=>[b,v[R]]))}),t.params.swimmers.useTracking&&(this.armPulsation=0)})}getDistanceTraveled(){const i=this.body.velocity.z,s=t.params.simulation.poolSize.z,l=this.body.center.z+s/2;return i>=0?l:2*s-l}startRace(){this.hasBrokeOut=!1,this.hasDove=!1,this.hasReacted=!1}jump(i=4.5){this.body.cinematic=!1,this.body.velocity=new p.Vector(0,0,i+Fe(0,1)),this.body.center=new p.Vector(this.startingPoint.x,1,-t.params.simulation.poolSize.z/2)}swim(i){this.hasReacted=i,this.isSwimming=i,this.finishTime=0,i||(this.body.followTarget=!1),i?(this.body.cinematic=!1,this.useGravity=!0,this.useTracking?this.moveToBeginning():this.body.center=new p.Vector(this.startingPoint.x,0,-t.params.simulation.poolSize.z/2)):(this.moveSpheresAway(),this.body.velocity=new p.Vector(0,0,0),this.body.center=new p.Vector(this.startingPoint.x,0,0))}moveToBeginning(){this.useTracking||console.warn("tried to use tracking on untracked swimmer");const i=this.data[0];this.body.center=Z(this,ze,mt).call(this,i)}hasFinished(){return this.finishTime>.1}getArmOffset(i,s){s+=this.cyclePhase;const l=this.body.velocity.z>=0?this.armPulsation:-this.armPulsation;return new p.Vector(0,Math.cos(l*i+s),Math.sin(l*i+s)).multiply(Xt)}setCurrentDataIndex(){if(console.log("set current data index"),this.currendDataIndex=0,!!this.data){for(;this.data[this.currendDataIndex]&&this.data[this.currendDataIndex][me]<t.getRaceTime();)this.currendDataIndex++;if(this.currendDataIndex+1<this.data.length){if(this.currendDataIndex-1>=0){const i=parseFloat(this.data[this.currendDataIndex][_e]);let s=i;const l=t.params.simulation.poolSize.z;i>l&&(s=2*l-s),s-=l/2;const h=this.body.center;h.x,t.isSceneSynchronizedSwimming()&&parseFloat(this.data[this.currendDataIndex][Ee])-t.params.simulation.poolSize.x/2,this.body.move(new p.Vector(h.x,h.y,s));const f=Math.sign(50-i)*.1;this.body.velocity=new p.Vector(0,0,f),console.log("vz : "+f)}this.body.setTarget(null),this.body.followTarget=!0,this.finishTime=0}}}findNextCycle(){let i=this.currendDataIndex+1;if(!this.data)return null;for(;this.data[i]&&this.data[i][ye]!="cycle";)i++;return this.data[i]?parseFloat(this.data[i][me]):null}setDamping(i){if(t.params.visualizations.customWaterPerturbation==t.params.visualizations.PARAMETER_CYCLES){const s=parseFloat(i[qt]);if(s<50)return;if(s>0){console.log("FREQ : "+s);const l=80,h=50;let f=(s-h)/(l-h);f=Math.max(Math.min(f,1),0);const v=.015,b=.25;this.waterDamping=v+(b-v)*(1-f)}}else this.waterDamping=t.params.simulation.waterDamping}handleTracking(i){if(this.hasReacted&&this.useTracking&&this.currendDataIndex<this.data.length&&this.data[this.currendDataIndex][me]<i){this.setDamping(this.data[this.currendDataIndex]);let s=null,l=this.startingPoint.x,h=i;const f=this.data[this.currendDataIndex+1];this.currendDataIndex+1<this.data.length&&(s=parseFloat(f[_e]),t.isSceneSynchronizedSwimming()&&(s=t.params.simulation.poolSize.z-s*30/25,f[Ee]&&(l=parseFloat(f[Ee])-t.params.simulation.poolSize.x/2)),h=parseFloat(f[me]));const v=t.params.simulation.poolSize.z;let b=-this.body.radius/2;const R=this.data[this.currendDataIndex][ye];if(R=="enter"||R=="turn"&&f[ye]!="under"){h=(i+h)/2,s=(this.body.center.z+v/2+s)/2;const D={[me]:h,[_e]:s,[ye]:"under"};this.data.splice(this.currendDataIndex+1,0,D),b=-1.5}f&&f[ye]=="under"&&(b=-1.5),s>v&&(s=2*v-s),s-=t.params.simulation.poolSize.z/2;const C=new p.Vector(l,b,s);if(this.currendDataIndex+1<this.data.length?this.body.setTarget(C,h-i):this.body.setTarget(null),R=="figure"&&(console.log("FIGURE"),t.splashParticles.spawnSplash(C,null,1e4,null,{speed0:4,maxParticles:400}),t.chronoPhotography({circle:!0})),R=="cycle"){const D=parseFloat(this.data[this.currendDataIndex][me]),y=this.findNextCycle();if(y){const I=1/(y-D);this.armPulsation=2*Math.PI*I,this.cycleTime=0,this.cyclePhase==0?this.cyclePhase=Math.PI:this.cyclePhase=0}}else R=="finish"&&(this.finishTime=this.data[this.currendDataIndex][me],this.body.followTarget=!1,this.isSwimming=!1);this.currendDataIndex++}}moveSpheresAway(){this.rightArm.move(ae),this.leftArm.move(ae),this.rightFoot.move(ae),this.leftFoot.move(ae)}moveSpheres(i){if(this.body.center.z<=-t.params.simulation.poolSize.z/2+.1)return;this.cycleTime+=i;const s=this.getArmOffset(.5*this.cycleTime,0),l=this.getArmOffset(.5*this.cycleTime,Math.PI),h=this.getArmOffset(.5*this.cycleTime*2,0),f=this.getArmOffset(.5*this.cycleTime*2,Math.PI);this.rightArm.move(this.body.center.add(s).add(new p.Vector(Le,0,0))),this.leftArm.move(this.body.center.add(l).add(new p.Vector(-Le,0,0)));const v=this.body.velocity.z>=0?-Ne:Ne;this.rightFoot.move(this.body.center.add(new p.Vector(Be,h.y*.5,v))),this.leftFoot.move(this.body.center.add(new p.Vector(-Be,f.y*.5,v)))}update(i){const s=t.getRaceTime();!q.raceHasStarted&&this.data&&(this.useTracking=t.params.swimmers.useTracking),!this.hasReacted&&q.raceHasStarted&&(this.useTracking||s>this.reactionTime&&!t.params.swimmers.useTracking?(this.swim(!0),this.waterDamping=t.params.simulation.waterDamping,this.useTracking||this.jump(),this.useTracking&&(this.body.cinematic=!0,this.body.followTarget=!0,this.body.setTarget(null))):(this.swim(!1),this.body.cinematic=!0,t.playingDemo?this.body.move(new p.Vector(this.body.center.x,1,-t.params.simulation.poolSize.z/2)):this.body.move(ae)),this.currendDataIndex=0),this.isSwimming&&(this.useTracking||this.body.addForce(this.force),this.body.center.y>-this.body.radius&&!t.isSceneSynchronizedSwimming()?this.moveSpheres(i):this.moveSpheresAway()),this.handleTracking(s);for(let h of this.spheres)h.update(i),h.spawnSplashes(i);if(this.body.center.z>-t.params.simulation.poolSize.z/2+20||t.isSceneSynchronizedSwimming())return;q.raceHasStarted&&!this.hasDove&&this.body.center.y<0&&this.body.oldCenter.y>=0&&(this.divingDistance=this.body.center.z+t.params.simulation.poolSize.z/2,this.divingTime=s,this.hasDove=!0);const l=this.body.radius;q.raceHasStarted&&!this.hasBrokeOut&&this.body.center.y>-l&&this.body.oldCenter.y<=-l&&(this.breakoutDistance=this.body.center.z+t.params.simulation.poolSize.z/2,this.breakoutTime=s,this.hasBrokeOut=!0)}};ze=new WeakSet,mt=function(i){let s=parseFloat(i[_e]),l=this.body.center.x;return t.isSceneSynchronizedSwimming()&&(s=t.params.simulation.poolSize.z-s*30/25,i[Ee]&&(l=parseFloat(i[Ee])-t.params.simulation.poolSize.x/2)),s-=t.params.simulation.poolSize.z/2,new p.Vector(l,1,s)},re(q,"useGravity",!1),re(q,"raceHasStarted",!1),re(q,"swimming",!1),re(q,"attributes"),re(q,"initAttributes",()=>{q.attributes=new Gt}),re(q,"updateAttributesTexture",()=>{q.attributes.update()}),re(q,"getAttributesTexture",()=>q.attributes.texture),re(q,"bindDisplacementTexture",i=>{q.attributes.displacementTexture.bind(i)}),re(q,"bindOldDisplacementTexture",i=>{q.attributes.oldDisplacementTexture.bind(i)}),re(q,"reset",i=>{q.attributes.createRenderingTexture(i.x,i.y)});let U=q;const Yt=`
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
`;var ue=`
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
`;function he(o,i,s,l){this.water=i,this.gl=o,this.tileTexture=p.Texture.fromImage(document.getElementById("tiles"),{minFilter:this.gl.LINEAR_MIPMAP_LINEAR,wrap:this.gl.REPEAT,format:this.gl.RGB}),this.franceTexture=p.Texture.fromImage(document.getElementById("france"),{minFilter:this.gl.LINEAR_MIPMAP_LINEAR,wrap:this.gl.REPEAT,format:this.gl.RGBA}),this.chinaTexture=p.Texture.fromImage(document.getElementById("china"),{minFilter:this.gl.LINEAR_MIPMAP_LINEAR,wrap:this.gl.REPEAT,format:this.gl.RGBA}),this.lettersTexture=p.Texture.fromImage(document.getElementById("letters"),{minFilter:this.gl.LINEAR,magFilter:this.gl.LINEAR,wrap:this.gl.REPEAT,format:this.gl.RGBA}),this.flagSize=l,this.flagSize=[1.5,1],this.flagCenter=s,this.lightDir=new p.Vector(2,2,-1).unit(),this.causticTex=new p.Texture(1024,1024),this.waterShaders=[];let h="";Object.entries(t.params.visualizations.customParametersDict).forEach(b=>{const R=b[1].name,C=b[1].value;h+="#define "+R+" "+C+`
`}),Object.entries(t.params.visualizations.renderingDict).forEach(b=>{const R=b[1].name,C=b[1].value;h+="#define "+R+" "+C+`
`});for(var f=0;f<2;f++)this.waterShaders[f]=new p.Shader(`
      uniform sampler2D water;
      uniform vec3 poolSizeVertexShader;
      out vec3 position;
      void main() {
        vec4 info = texture(water, gl_Vertex.xy / poolSizeVertexShader.xz + 0.5);
        position = gl_Vertex.xzy;
        position.y += info.r;
        gl_Position = gl_ModelViewProjectionMatrix * vec4(position, 1.0);
      }
    `,ue+`
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

      `+h+`
      
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
      
      
      `+Se+Yt+`
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
        float dz = rightSide ? -`+be+" : "+be+`;
        float staticFlag_z = flagSize.y / 2. - poolSize.z / 2.  +`+Je+`;
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
        
        `+(f?`
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
    `);this.sphereMesh=p.Mesh.sphere({detail:10}),this.sphereShader=new p.Shader(ue+`
    out vec3 position;
  void main() {
    position = sphereCenter + gl_Vertex.xyz * sphereRadius;
    gl_Position = gl_ModelViewProjectionMatrix * vec4(position, 1.0);
  }
  `,ue+`
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
  `),this.reset(),this.cubeShader=new p.Shader(ue+`
    out vec3 position;
  void main() {
    position = gl_Vertex.xyz;
    position.y = ((1.0 - position.y) * (7.0 / 12.0) - 1.0) * poolSize.y;
    gl_Position = gl_ModelViewProjectionMatrix * vec4(position, 1.0);
  }
  `,ue+`
    in vec3 position;
    out vec4 fragColor;
  void main() {
    fragColor = vec4(getWallColor(position), 1.0);
      vec4 info = texture(water, position.xz / poolSize.xz + 0.5);
    if (renderWater && position.y < info.r) {
      fragColor.rgb *= underwaterColor * 1.2;
    }
  }
  `),this.sphereCenter=new p.Vector,this.sphereRadius=0;var v=!!this.gl.getExtension("OES_standard_derivatives");this.causticsShader=new p.Shader(ue+`
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
  `+ue+`
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
  `)}he.prototype.reset=function(){this.cubeMesh=p.Mesh.cube({width:t.params.simulation.poolSize.x,height:2,depth:t.params.simulation.poolSize.z}),this.cubeMesh.triangles.splice(4,2),this.cubeMesh.compile()};he.prototype.updateCaustics=function(o){};he.prototype.renderWater=function(o,i,s){if(!t.renderWater)return;var l=new p.Raytracer;o.textureA.bind(0),this.tileTexture.bind(1),i.bind(2),this.causticTex.bind(3),this.franceTexture.bind(4),this.chinaTexture.bind(8),t.water.foam.foamTexNext.bind(9),this.lettersTexture.bind(7),o.areaConservationTextureA.bind(5);const h=U.getAttributesTexture();h&&h.bind(6),this.gl.enable(this.gl.CULL_FACE),t.updateTransitions();for(var f=0;f<2;f++)this.gl.cullFace(f?this.gl.BACK:this.gl.FRONT),this.waterShaders[f].uniforms({renderWater:!0,light:this.lightDir,water:0,tiles:1,sky:2,causticTex:3,france:4,china:8,foamTex:9,areaConservationTexture:5,swimmersAttributesTexture:6,iChannel0:7,areaConservation:t.params.visualizations.areaConservation.enabled,flagSize:[t.params.flags.flagSize.x,t.params.flags.flagSize.y],flagCenter:[this.flagCenter.x,this.flagCenter.y],poolSize:[t.params.simulation.poolSize.x,t.params.simulation.poolSize.y,t.params.simulation.poolSize.z],poolSizeVertexShader:[t.params.simulation.poolSize.x,t.params.simulation.poolSize.y,t.params.simulation.poolSize.z],eye:l.eye,sphereCenter:this.sphereCenter,sphereRadius:this.sphereRadius,showProjectionGrid:o.showProjectionGrid,showAreaConservedGrid:o.showAreaConservedGrid,areaConservationOptimized:t.params.visualizations.areaConservation.optimized,wr:o.WR_position,swimmersNumber:t.swimmers.length,cornerView:t.cornerView,showFlags:t.transitions.showFlags?t.transitions.showFlags.opacity:t.params.visualizations.showFlags,showWR:t.params.visualizations.showWR,showSpeed:t.params.visualizations.showSpeed,showDivingDistance:t.params.visualizations.showDivingDistance,showFinishTimes:t.params.visualizations.showFinishTimes,time:t.getRaceTime(),seed:t.time,foamEnabled:t.params.simulation.foam.enabled,shadowEnabled:s.enabled,shadowRadius:s.shadowRadius,shadowPower:s.shadowPower,showCircle:s.showCircle,shadowCircleRadius:s.circleRadius,shadowCircleStroke:s.circleStroke,showSwimmersLines:Math.round(t.params.visualizations.showSwimmersLinesDict[t.params.visualizations.showSwimmersLines]),swimmersLinesMode:t.params.visualizations.swimmersLinesModeDict[t.params.visualizations.swimmersLinesMode],medalsModeBeforeFinish:Math.round(t.params.visualizations.medalsModesDict[t.params.visualizations.medalsModeBeforeFinish]),medalsModeAfterFinish:Math.round(t.params.visualizations.medalsModesDict[t.params.visualizations.medalsModeAfterFinish]),rendering:t.params.visualizations.renderingDict[t.params.visualizations.rendering].value,heightLimit:t.params.simulation.heightLimit,waterColorParameter:t.params.visualizations.customParametersDict[t.params.visualizations.waterColorParameter].value,classicalOverlayEnabled:t.classicalOverlayEnabled,showOverlayPlane:t.showOverlayPlane?t.showOverlayPlane:0}).draw(o.plane);this.gl.disable(this.gl.CULL_FACE)};he.prototype.renderSpheres=function(o){const i=[];t.params.swimmers.showSpheres&&t.swimmers.forEach(s=>s.spheres.forEach(l=>i.push(l))),!t.params.video.show&&!t.hideFloaters&&t.floaters.forEach(s=>i.push(s)),t.bubbleSpheres.forEach(s=>i.push(s));for(let s of i)this.renderSphere(o,s)};he.prototype.renderSphere=function(o,i){o.textureA.bind(0),this.causticTex.bind(1),this.sphereShader.uniforms({light:this.lightDir,water:0,causticTex:1,sphereCenter:[i.center.x,i.center.y,i.center.z],sphereRadius:i.radius*t.spheresRadiusCoeff,poolSize:[t.params.simulation.poolSize.x,t.params.simulation.poolSize.y,t.params.simulation.poolSize.z],color:[i.color.x,i.color.y,i.color.z]}).draw(i.mesh)};he.prototype.renderSphereOld=function(o){o.textureA.bind(0),this.causticTex.bind(1),this.sphereShader.uniforms({light:this.lightDir,water:0,causticTex:1,sphereCenter:this.sphereCenter,sphereRadius:this.sphereRadius,poolSize:[t.params.simulation.poolSize.x,t.params.simulation.poolSize.y,t.params.simulation.poolSize.z]}).draw(this.sphereMesh)};he.prototype.renderCube=function(o){t.renderCube&&(this.gl.enable(this.gl.CULL_FACE),o.textureA.bind(0),this.tileTexture.bind(1),this.causticTex.bind(2),this.cubeShader.uniforms({light:this.lightDir,water:0,tiles:1,causticTex:2,sphereCenter:this.sphereCenter,sphereRadius:this.sphereRadius,poolSize:[t.params.simulation.poolSize.x,t.params.simulation.poolSize.y,t.params.simulation.poolSize.z],renderWater:t.renderWater}).draw(this.cubeMesh),this.gl.disable(this.gl.CULL_FACE))};function Ue(o,i){this.gl=i,this.id=i.createTexture(),i.bindTexture(i.TEXTURE_CUBE_MAP,this.id),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,1),i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAG_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),i.texImage2D(i.TEXTURE_CUBE_MAP_NEGATIVE_X,0,i.RGB,i.RGB,i.UNSIGNED_BYTE,o.xneg),i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X,0,i.RGB,i.RGB,i.UNSIGNED_BYTE,o.xpos),i.texImage2D(i.TEXTURE_CUBE_MAP_NEGATIVE_Y,0,i.RGB,i.RGB,i.UNSIGNED_BYTE,o.yneg),i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_Y,0,i.RGB,i.RGB,i.UNSIGNED_BYTE,o.ypos),i.texImage2D(i.TEXTURE_CUBE_MAP_NEGATIVE_Z,0,i.RGB,i.RGB,i.UNSIGNED_BYTE,o.zneg),i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_Z,0,i.RGB,i.RGB,i.UNSIGNED_BYTE,o.zpos)}Ue.prototype.bind=function(o){this.gl.activeTexture(this.gl.TEXTURE0+(o||0)),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,this.id)};Ue.prototype.unbind=function(o){this.gl.activeTexture(this.gl.TEXTURE0+(o||0)),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,null)};const se=new Tt,jt=function(o,i){const s=se.addFolder("visualizations");s.close(),s.add(t,"useConfigFile").name("use configuration file"),s.add(t,"showTimeline").name("show event timeline").listen().onChange(A=>{t.hideEditorPanel(A)}),s.add(t.params.visualizations,"showFlags").name("show flags").listen(),s.add(t.params.visualizations,"showStreaks").name("show streaks").listen(),s.add(t.params.visualizations,"showWR").name("show world record").listen(),s.add(t.params.visualizations,"showSwimmersLines",t.params.visualizations.swimmersLinesList).name("show neighbours lines").listen(),s.add(t.params.visualizations,"swimmersLinesMode",t.params.visualizations.swimmersLinesModeList).name("show neighbours lines").listen(),s.add(t.params.visualizations,"customWaterPerturbation",t.params.visualizations.customParametersList).name("custom water perturbation").listen(),s.add(t.params.visualizations,"waterColorParameter",t.params.visualizations.customParametersList).name("water color parameter").listen(),s.add(t.params.visualizations,"medalsModeBeforeFinish",["none","stars","bright","lanes"]).name("show potential medals").listen(),s.add(t.params.visualizations,"medalsModeAfterFinish",["none","stars","bright","lanes"]).name("show potential medals after finish").listen(),s.add(t.params.visualizations,"showSpeed").name("show speed").listen(),s.add(t.params.visualizations,"showDivingDistance").name("show diving distance").listen(),s.add(t.params.visualizations.shadow,"enabled").name("show shadow"),s.add(t.params.visualizations,"rendering",t.params.visualizations.renderingList).name("rendering").listen().onChange(()=>{t.params.visualizations.rendering=="toon"&&(t.params.simulation.waterDamping=.35)}),s.add(t,"hideFloaters").name("hide floaters").listen();const l=s.addFolder("Flags");l.close(),l.add(t.params.flags.flagSize,"x",0,10).name("width"),l.add(t.params.flags.flagSize,"y",0,10).name("height");const h=s.addFolder("Area conservation");h.close(),h.add(t.params.visualizations.areaConservation,"enabled").name("enabled").listen(),h.add(t.params.visualizations.areaConservation,"optimized").name("optimized").listen(),h.add(t.params.visualizations.areaConservation,"legibility",0,1).name("legibility").listen();const f=se.addFolder("video");f.close(),f.add(t.params.video,"opacity").name("opacity").listen(),f.add(t.params.video,"thresholdBlending").name("threshold blending").listen(),f.add(t.params.video,"blendingThreshold",.1,1.5).name("blending threshold"),f.add(t.params.video,"show").name("show").listen(),f.add(t.params.video,"hideObstructions").name("hide obstructions"),f.add(t.params.video,"hideObstructionThreshold",0,.5).name("obstructions threshold");const v=s.addFolder("Sparks");v.close(),v.add(t.params.visualizations.sparks,"enabled").name("sparks enabled"),v.add(t.params.visualizations.sparks,"glow",1,30).name("sparks glow factor"),v.add(t.params.visualizations.sparks,"lengthFactor",.1,10).name("sparks length factor"),v.add(t.params.visualizations.sparks,"glowOffset",.1,3).name("sparks glow offset"),v.add(t.params.visualizations.sparks,"stroke",.001,.05).name("sparks stroke"),v.add(t.params.visualizations.sparks,"num",10,Qe).step(1).name("sparks number"),v.add(t.params.visualizations.sparks,"sizeFactor",10,100).name("size factor");const b=s.addFolder("Swimmers shadows");b.close(),b.add(t.params.visualizations.shadow,"shadowRadius",0,2).name("shadow radius"),b.add(t.params.visualizations.shadow,"shadowPower",.1,2).name("shadow power"),b.add(t.params.visualizations.shadow,"showCircle").name("circle"),b.add(t.params.visualizations.shadow,"circleRadius",.5,2).name("circle radius"),b.add(t.params.visualizations.shadow,"circleStroke",.1,.5).name("circle stroke");const R=se.addFolder("Simulation");R.close(),R.add(t.params.simulation,"optimized").name("optimized").listen(),R.add(t.params.simulation.poolSize,"x",1,25).name("pool width").onChange(function(A){i()}).listen(),R.add(t.params.simulation.poolSize,"z",1,50).name("pool height").onChange(function(A){i()}).listen(),R.add(t.params.simulation.poolSize,"y",1,3).name("pool depth").onChange(function(A){i()}).listen(),R.add(t.params.simulation,"waterDamping",.005,.4).name("water damping").listen();const C=R.addFolder("foam");C.close(),C.add(t.params.simulation.foam,"enabled").name("enabled").listen(),C.add(t.params.simulation.foam,"velThreshold",0,15).name("velocity threshold"),C.add(t.params.simulation.foam,"velMax",0,20).name("max velocity"),C.add(t.params.simulation.foam,"dispersion",0,.1).name("dispersion"),C.add(t.params.simulation.foam,"timeVariation",0,10).name("time variation"),C.add(t.params.simulation.foam,"spaceVariation",0,100).name("space variation"),C.add(t.params.simulation.foam,"attenuation",0,.2).name("attenuation");const D=R.addFolder("splash");D.close(),D.add(t.params.simulation.splashes,"enabled").name("enabled"),D.add(t.params.simulation.splashes,"strengthThreshold",.1,10).name("strength threshold");const y=se.addFolder("swimmers");y.close(),y.add(t.params.swimmers,"showSpheres").name("show spheres").listen(),y.add(t.params.swimmers,"useTracking").name("use tracking data").listen();const O=se.addFolder("camera");O.close(),O.add(t.params,"fov",15,45).name("fov").listen().onChange(function(A){t.params.visualizations.sparks.fov=A*2*Math.PI/360,o.matrixMode(o.PROJECTION),o.loadIdentity(),o.perspective(t.params.fov,o.canvas.width/o.canvas.height,.01,100),o.matrixMode(o.MODELVIEW),console.log("perspective : "+t.params.fov)});const I=se.addFolder("quiver");I.close(),I.add(t.params.quiver,"alwaysActive").name("always active").listen(),I.add(t.params.quiver,"amplitude",.01,1).name("amplitude").listen(),I.add(t.params.quiver,"omega",.5,5).name("omega").listen(),I.add(t.params.quiver,"amplitudeFactor",.5,.9).name("amplitude factor").listen(),I.add(t.params.quiver,"frequencyFactor",1.1,2).name("frequency factor").listen(),I.add(t.params.quiver,"waveLength",1,30).name("wave length").listen();const g=se.addFolder("corner view");g.close(),g.add(t.params.cornerView,"show").name("show");const S=se.addFolder("chrono-photography");S.close(),S.add(t.params.chronoPhotography,"available").name("available").onChange(()=>{t.params.chronoPhotography.available?t.drawingFrameBuffer=t.chronoFrameBuffer:t.drawingFrameBuffer=null}),t._gui=se},Pe=150,ce=100;function Zt(o){const i=document.createElement("div");if(document.body.appendChild(i),i.id="event-editor",i.style.position="fixed",i.display="block",i.style.bottom="60px",i.style.left="10px",i.style.right="10px",i.style.height="120px",i.style.zIndex="4",i.style.background="#222",i.style.color="#fff",i.style.overflow="auto",i.style.padding="4px",i.style.fontSize="12px",i.style.position=i.style.position||"relative",!i){console.warn(`event editor container "${o}" not found`);return}let s,l=!1;const h=[{name:"showFlags",type:"boolean"},{name:"showWR",type:"boolean"},{name:"showSpeed",type:"boolean"},{name:"showDivingDistance",type:"boolean"},{name:"showFinishTimes",type:"boolean"},{name:"showSwimmersLines",type:"select",options:t.params.visualizations.swimmersLinesList},{name:"swimmersLinesMode",type:"select",options:t.params.visualizations.swimmersLinesModeList},{name:"customWaterPerturbation",type:"select",options:t.params.visualizations.customParametersList},{name:"waterColorParameter",type:"select",options:t.params.visualizations.customParametersList},{name:"medalsModeBeforeFinish",type:"select",options:["none","stars","bright","lanes"]},{name:"medalsModeAfterFinish",type:"select",options:["none","stars","bright","lanes"]},{name:"rankSwimmerToggle",type:"number",min:1,max:10},{name:"showStreaks",type:"boolean"}];function f(g){const S=document.createElement("div");S.style.flex="1",S.style.padding="4px",S.style.background="#222",S.style.border="1px solid #555",S.style.borderRadius="4px",S.style.fontFamily="monospace",S.style.fontSize="12px",S.style.whiteSpace="pre-wrap",S.style.overflow="auto",S.style.maxHeight="100px";function A(){const k=g.params;if(Object.keys(k).length===0){S.textContent="(no params)";return}const W=Object.entries(k).map(([V,L])=>`${V}: ${JSON.stringify(L)}`);S.textContent=W.join(`
`)}return A(),{element:S,update:A}}function v(g,S){const A=document.createElement("div");A.style.display="flex",A.style.flexWrap="wrap",A.style.margin="4px 0",A.style.background="#333",A.style.padding="4px";function k(){S&&(S(),I())}h.forEach(B=>{const K=document.createElement("div");K.style.marginRight="8px",K.style.marginBottom="4px";const ie=document.createElement("label");ie.style.whiteSpace="nowrap",ie.textContent=B.name+":",K.appendChild(ie);let N;if(B.type==="boolean"){N=document.createElement("select"),[{value:"",label:"—"},{value:"true",label:"ON"},{value:"false",label:"OFF"}].forEach($=>{const T=document.createElement("option");T.value=$.value,T.textContent=$.label,N.appendChild(T)});const j=g.params[B.name];j===void 0?N.value="":j===!0?N.value="true":j===!1&&(N.value="false"),N.addEventListener("change",()=>{N.value===""?delete g.params[B.name]:N.value==="true"?g.params[B.name]=!0:N.value==="false"&&(g.params[B.name]=!1),k()})}else if(B.type==="select"){N=document.createElement("select");const H=document.createElement("option");H.value="",H.textContent="—",N.appendChild(H),B.options.forEach(j=>{const $=document.createElement("option");$.value=j,$.textContent=j,N.appendChild($)}),N.value=g.params[B.name]||"",N.addEventListener("change",()=>{N.value===""?delete g.params[B.name]:g.params[B.name]=N.value,k()})}else B.type==="number"&&(N=document.createElement("input"),N.type="number",B.min!==void 0&&(N.min=B.min),B.max!==void 0&&(N.max=B.max),N.placeholder="—",N.style.width="50px",N.value=g.params[B.name]!==void 0?g.params[B.name]:"",N.addEventListener("change",()=>{if(N.value==="")delete g.params[B.name];else{const H=parseFloat(N.value);isNaN(H)||(g.params[B.name]=H)}k()}));N&&K.appendChild(N),A.appendChild(K)});const W=document.createElement("div");W.style.marginRight="8px",W.style.marginBottom="4px";const V=document.createElement("label");V.style.whiteSpace="nowrap",V.textContent="transition :",W.appendChild(V);const L=document.createElement("input");return L.type="number",L.min=0,L.placeholder="—",L.style.width="50px",L.value=g.transition!==void 0?g.transition.duration:"",L.addEventListener("change",()=>{if(L.value===""){delete g.transition;return}const B=parseFloat(L.value);isNaN(B)||(g.transition={type:"dissolve",duration:B},k())}),W.appendChild(L),A.appendChild(W),A}function b(){const g=document.createElement("div");g.style.marginTop="8px",g.style.padding="8px",g.style.background="#555",g.style.border="1px solid #777";const S=document.createElement("div");S.textContent="Add New Event",S.style.fontWeight="bold",S.style.marginBottom="4px",g.appendChild(S);const A=document.createElement("input");A.type="number",A.placeholder="Distance",A.style.width="auto",A.style.marginRight="8px",g.appendChild(A);const k={params:{}},W=v(k,null);W.style.margin="4px 0",g.appendChild(W);const V=document.createElement("button");V.textContent="OK",V.addEventListener("click",()=>{const B=parseFloat(A.value);if(isNaN(B)){alert("Please enter a valid distance");return}const K={distance:B,...k};t.events.push(K),I(),s.remove(),s=null}),g.appendChild(V);const L=document.createElement("button");return L.textContent="cancel",L.addEventListener("click",()=>{s.remove(),s=null}),g.appendChild(L),g}function R(g,S,{title:A="",id:k=null,color:W="#e74c3c"}){const V=g/S*100,L=document.createElement("div");return L.style.position="absolute",L.style.left=V+"%",L.style.transform="translateX(-50%)",L.style.width="4px",L.style.height="100%",L.style.background=W,L.style.cursor="pointer",L.title=A,k&&(L.id=k),L.addEventListener("click",()=>{O(idx)}),L}function C(){let g=document.getElementById("distance-marker");const S=t.swimmers[0].getDistanceTraveled();if(!g){if(l)return;const A=document.getElementById("timeline-track");g=R(S,ce,{color:"blue",id:"distance-marker"}),A.appendChild(g)}g.style.left=S+"%"}function D(g){l=g,y()}function y(){i.innerHTML="";const g=document.createElement("button");if(g.textContent=l?"□":"—",g.style.position="absolute",g.style.top="0",g.style.right="0",g.style.width="20px",g.style.height="20px",g.style.zIndex="100001",g.addEventListener("click",()=>{l=!l,y()}),i.appendChild(g),l){i.style.height="20px";return}i.style.height="300px";const S=document.createElement("div");if(S.style.position="relative",S.style.top="0px",S.style.left="50%",S.style.transform="translateX(-50%)",S.style.width="80px",S.style.height="15px",S.style.background="grey",S.style.border="1px solid black",S.style.cursor="ns-resize",S.style.zIndex="100000",S.style.lineHeight="16px",S.style.textAlign="center",S.textContent="drag",i.appendChild(S),S.addEventListener("mousedown",r=>{r.preventDefault();const c=r.clientY,d=i.offsetHeight;function m(E){const w=d-(E.clientY-c);w>20&&(i.style.height=w+"px")}function u(){document.removeEventListener("mousemove",m),document.removeEventListener("mouseup",u)}document.addEventListener("mousemove",m),document.addEventListener("mouseup",u)}),!t.events){i.textContent="no events defined";return}const A=document.createElement("div");i.appendChild(A),A.style.marginRight="8px",A.style.marginBottom="4px";const k=document.createElement("label");k.style.whiteSpace="nowrap",k.textContent="select scene",k.style.margin="30px",A.appendChild(k);const W=document.createElement("select");W.style.width="auto",t.scenesList.forEach(r=>{const c=document.createElement("option");c.textContent=r.title,c.value=r.title,W.appendChild(c)}),W.addEventListener("change",()=>{t.setScene(W.value)}),A.appendChild(W);const V=t.events.slice().sort((r,c)=>{const d=r.distance!==void 0?r.distance:r.time!==void 0?r.time:0,m=c.distance!==void 0?c.distance:c.time!==void 0?c.time:0;return d-m}),L=new Set;V.forEach(r=>{r.params&&Object.keys(r.params).forEach(c=>L.add(c))});let B=h.map(r=>r.name).filter(r=>L.has(r));const K=["#4caf50","#2196f3","#ff9800","#9c27b0","#f44336","#009688","#e91e63","#3f51b5"],ie={};B.forEach((r,c)=>{ie[r]=K[c%K.length]});const N={},H={};B.forEach(r=>{H[r]=!1,N[r]=0});const j=[];if(V.forEach(r=>{const c=r.distance!==void 0?r.distance:r.time!==void 0?r.time:0;r.params&&Object.keys(r.params).forEach(d=>{if(B.includes(d)){const m=!!r.params[d];m!==H[d]&&(H[d]&&j.push({name:d,start:N[d],end:c}),H[d]=m,N[d]=c)}})}),B.forEach(r=>{H[r]&&j.push({name:r,start:N[r],end:ce})}),B.length>0){const r=document.createElement("div");r.style.position="relative";const c=20;r.style.height=B.length*c+"px",r.style.background="#222",r.style.marginBottom="4px",r.style.marginTop="10px",B.forEach((m,u)=>{const E=document.createElement("div");E.textContent=m,E.style.position="absolute",E.style.left="0",E.style.top=u*c+2+"px",E.style.width=Pe+"px",E.style.color="#aaa",E.style.fontSize="10px",E.style.pointerEvents="none",r.appendChild(E)});const d=document.createElement("div");d.style.position="absolute",d.style.left=Pe+"px",d.style.top="0",d.style.right="0",d.style.bottom="0",d.style.overflow="hidden",r.appendChild(d),j.forEach(m=>{const u=document.createElement("div"),E=m.start/ce*100,w=(m.end-m.start)/ce*100;u.style.position="absolute",u.style.left=E+"%",u.style.top=B.indexOf(m.name)*c+2+"px",u.style.height=c-4+"px",u.style.width=w+"%",u.style.background=ie[m.name]||"#4caf50",u.title=`${m.name}: ${m.start.toFixed(2)} → ${m.end.toFixed(2)}`;const x=document.createElement("span");if(x.textContent=`${m.name}: ${m.start.toFixed(2)} → ${m.end.toFixed(2)}`,x.style.position="absolute",x.style.top="0",x.style.left="2px",x.style.fontSize="10px",x.style.color="white",x.style.pointerEvents="none",x.style.whiteSpace="nowrap",x.style.overflow="hidden",x.style.textOverflow="ellipsis",u.appendChild(x),m.end<ce){const _=document.createElement("div");_.style.position="absolute",_.style.right="0",_.style.top="0",_.style.width="5px",_.style.height="100%",_.style.background="rgba(255,255,255,0.5)",_.style.cursor="ew-resize",u.appendChild(_),_.addEventListener("mousedown",P=>{P.preventDefault(),P.stopPropagation();const F=P.clientX,M=u.offsetWidth;function X(Q){const oe=Q.clientX-F,le=Math.max(1,M+oe),fe=le/d.offsetWidth*100;u.style.width=fe+"%";const xt=m.start+le/d.offsetWidth*ce;x.textContent=`${m.name}: ${m.start.toFixed(2)} → ${xt.toFixed(2)}`}function G(){document.removeEventListener("mousemove",X),document.removeEventListener("mouseup",G);const Q=u.offsetWidth,oe=m.start+Q/d.offsetWidth*ce,le=V.find(fe=>(fe.distance!==void 0?fe.distance:fe.time!==void 0?fe.time:0)===m.end);le&&(le.distance!==void 0?le.distance=oe:le.time!==void 0&&(le.time=oe)),I()}document.addEventListener("mousemove",X),document.addEventListener("mouseup",G)})}d.appendChild(u)}),i.appendChild(r)}const $=document.createElement("div");$.style.position="relative",$.style.height="40px",$.style.background="#222",$.style.marginBottom="4px",$.style.paddingLeft="80px";const T=document.createElement("div");T.id="timeline-track",T.style.position="absolute",T.style.background="#444",T.style.left=Pe+"px",T.style.top="0",T.style.right="0",T.style.bottom="0",$.appendChild(T),V.forEach((r,c)=>{const d=r.distance!==void 0?r.distance:r.time!==void 0?r.time:0,m=`event ${c}: ${JSON.stringify(r.params)}`,u=R(d,ce,{title:m});T.appendChild(u)}),i.appendChild($),V.forEach((r,c)=>{const d=document.createElement("div");d.style.display="flex",d.style.flexDirection="column",d.style.marginBottom="4px";const m=document.createElement("div");m.style.display="flex",m.style.alignItems="center";const u=document.createElement("input");u.type="number",u.style.width="60px",u.value=r.distance!==void 0?r.distance:r.time!==void 0?r.time:0,u.addEventListener("change",()=>{const P=parseFloat(u.value);isNaN(P)||(r.distance!==void 0?r.distance=P:r.time=P,I())}),m.appendChild(u);const E=f(r);m.appendChild(E.element);const w=document.createElement("button");w.textContent="⚙",w.style.marginLeft="4px",m.appendChild(w);const x=document.createElement("button");x.textContent="✖",x.style.marginLeft="4px",x.addEventListener("click",()=>{const P=t.events.indexOf(V[c]);P!==-1&&(t.events.splice(P,1),y())}),m.appendChild(x),d.appendChild(m);let _;w.addEventListener("click",()=>{_?(_.remove(),_=null):(_=v(r,E.update),d.appendChild(_))}),i.appendChild(d)});const a=document.createElement("button");a.textContent="+ add event",a.addEventListener("click",()=>{s?(s.remove(),s=null):(s=b(),i.appendChild(s),i.scrollTop=i.scrollHeight)}),i.appendChild(a);const n=document.createElement("button");n.textContent="export JSON",n.style.marginLeft="8px",n.addEventListener("click",()=>{const r=JSON.stringify(t.events,null,2),c=new Blob([r],{type:"application/json"}),d=URL.createObjectURL(c),m=document.createElement("a");m.href=d,m.download="vis-config.json",m.click(),URL.revokeObjectURL(d)}),i.appendChild(n);const e=document.createElement("input");e.type="file",e.accept=".json",e.style.marginLeft="8px",e.addEventListener("change",r=>{const c=r.target.files[0];if(c){const d=new FileReader;d.onload=m=>{try{const u=JSON.parse(m.target.result);t.events=u,I()}catch(u){alert("Invalid JSON: "+u.message)}},d.readAsText(c)}}),i.appendChild(e)}function O(g){const A=i.querySelectorAll("div")[1+g];A&&A.scrollIntoView({behavior:"smooth",block:"center"})}function I(){t.events.sort((g,S)=>{const A=g.distance!==void 0?g.distance:g.time!==void 0?g.time:0,k=S.distance!==void 0?S.distance:S.time!==void 0?S.time:0;return A-k}),y()}y(),t._renderTimeline=y,t._updateDistanceMarker=C,t._setPannelMinimized=D}const ut=new p.Mesh.plane({width:2,height:2,coords:!0,normals:!0}),Kt=new p.Shader(`
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
`),$t=new p.Shader(`
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
`);let Te=new p.Texture,ke=new p.Texture,ft=!1,Ze=null;const pt=(o,i,s)=>{ft=!0,Te=new p.Texture(o,i,{type:s.FLOAT,filter:s.NEAREST}),ke=new p.Texture(o,i,{type:s.FLOAT,filter:s.NEAREST}),Ze=s.createFramebuffer(),s.bindFramebuffer(s.FRAMEBUFFER,Ze);const l=s.COLOR_ATTACHMENT0;s.framebufferTexture2D(s.FRAMEBUFFER,l,s.TEXTURE_2D,Te.id,0),s.bindFramebuffer(s.FRAMEBUFFER,null)};function Me(o){o.x/=t.gl.canvas.width/2,o.x-=1,o.y/=t.gl.canvas.height/2,o.y-=1}const vt=o=>{console.log("take chrono photo : "+o),ft||pt(t.gl.canvas.width,t.gl.canvas.height,t.gl);const i=t.params.simulation.poolSize,s=t.gl.project(i.x/2,0,t.distanceFixed+1-i.z/2),l=t.gl.project(-i.x/2,0,t.distanceFixed+1-i.z/2);Me(s),Me(l);const h=t.swimmers[0].body.center,f=t.gl.project(h.x,h.y,h.z);Me(f),ke.drawTo(()=>{Te.bind(0),t.gl.activeTexture(t.gl.TEXTURE1),t.gl.bindTexture(t.gl.TEXTURE_2D,t.drawingTexture),t.gl.activeTexture(t.gl.TEXTURE2),t.gl.bindTexture(t.gl.TEXTURE_2D,t.currentVideo.texture),Kt.uniforms({oldPicture:0,screen:1,videoTex:2,distanceFixed:t.distanceFixed,poolSize:[t.params.simulation.poolSize.x,t.params.simulation.poolSize.y,t.params.simulation.poolSize.z],linep1:[s.x,s.y],linep2:[l.x,l.y],center:[f.x,f.y],circleZone:o}).draw(ut)}),Te.swapWith(ke),t.gl.bindFramebuffer(t.gl.FRAMEBUFFER,t.drawingFrameBuffer)},Jt=()=>{t.chronoPhotoCircleTime&&t.time>=t.chronoPhotoCircleTime&&(t.chronoPhotoCircleTime=null,vt(!0)),t.gl.bindFramebuffer(t.gl.FRAMEBUFFER,null),Te.bind(7),t.gl.activeTexture(t.gl.TEXTURE8),t.gl.bindTexture(t.gl.TEXTURE_2D,t.drawingTexture),$t.uniforms({picture:7,screen:8}).draw(ut)};t._fixTexture=vt;t._clearChronoTexture=pt;new TextEncoder;function Qt(o,i,s){const l=i*4,h=new Uint8Array(o.length);for(let f=0;f<s;f++){const v=f*l,b=(s-f-1)*l;h.set(o.subarray(v,v+l),b)}return h}async function ei(o,i,s,l){const h=o.canvas.width,f=o.canvas.height,v=window.devicePixelRatio||1;o.canvas.width=s,o.canvas.height=l,o.canvas.style.width=s/v+"px",o.canvas.style.height=l/v+"px",o.matrixMode(o.PROJECTION),o.loadIdentity(),o.perspective(t.params.fov,s/l,.01,100),o.matrixMode(o.MODELVIEW),i(s,l);const b=new Uint8Array(s*l*4);o.readPixels(0,0,s,l,o.RGBA,o.UNSIGNED_BYTE,b);const R=Qt(b,s,l),C=document.createElement("canvas");C.width=s,C.height=l;const D=C.getContext("2d"),y=D.createImageData(s,l);return y.data.set(R),D.putImageData(y,0,0),o.canvas.width=h,o.canvas.height=f,o.canvas.style.width=h/v+"px",o.canvas.style.height=f/v+"px",o.matrixMode(o.PROJECTION),o.loadIdentity(),o.perspective(t.params.fov,h/f,.01,100),o.matrixMode(o.MODELVIEW),i(h,f),new Promise(O=>{C.toBlob(I=>{O(I)},"image/png")})}function ti(o){return o.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n/g,"<br>")}function ii(o){var i=ti(o);i=="WebGL not supported"&&(i='Your browser does not support WebGL.<br>Please see    <a href="http://www.khronos.org/webgl/wiki/Getting_a_WebGL_Implementation">    Getting a WebGL Implementation</a>.');var s=document.getElementById("loading");s.innerHTML=i,s.style.zIndex=1}window.onerror=ii;var De,J;const ri=10,z=t.gl;var Re,Ve;U.initAttributes();function gt(){document.getElementById("warning").hidden=!(t.resolution.x*t.resolution.y>3e5&&t.water&&t.params.visualizations.areaConservation.enabled)}let Ie=0;function oi(o){Ie+=o,Ie>=1&&(document.getElementById("fps").innerText=`${(1/o).toFixed(1)} FPS`,Ie=0)}function de(){console.log("reset"),document.getElementById("resolution").innerText=`Resolution: ${t.resolution.x} x ${t.resolution.y}`,gt(),Re=new p.Vector(0,-t.params.simulation.poolSize.z/2+1),t.water.reset(t.resolution),J.flagCenter=Re,J.flagSize=Ve,J.reset();const o=t.params.simulation.poolSize.x/ri;let i=-t.params.simulation.poolSize.x/2+o/2;for(let s of t.swimmers)s.body.center.x=i,s.body.initCenter=s.body.center.clone(),s.startingPoint.x=i,i+=o}function ai(o){const i=parseFloat(o.target.value);isNaN(i)||(t.setRaceTime(i),t.swimmers.forEach(s=>s.setCurrentDataIndex()))}window.onload=function(){var o=window.devicePixelRatio||1,i=document.getElementById("help");function s(){var r=innerWidth,c=innerHeight;z.canvas.width=r*o,z.canvas.height=c*o,z.canvas.style.width=r+"px",z.canvas.style.height=c+"px",z.viewport(0,0,z.canvas.width,z.canvas.height),z.matrixMode(z.PROJECTION),z.loadIdentity(),z.perspective(t.params.fov,z.canvas.width/z.canvas.height,.01,100),z.matrixMode(z.MODELVIEW),t.resetDrawingTexture(),e()}document.body.appendChild(z.canvas),z.canvas.oncontextmenu=function(r){r.preventDefault()},z.clearColor(0,0,0,1),Re=new p.Vector(0,-t.params.simulation.poolSize.z/2+1),Ve=.7;const l=document.getElementById("time-slider");l&&l.addEventListener("input",ai);const h=document.getElementById("drop-zone");let f=0;document.addEventListener("dragenter",r=>{f++,h.style.display="flex"}),document.addEventListener("dragover",r=>{r.preventDefault(),r.dataTransfer.dropEffect="copy"}),document.addEventListener("dragleave",r=>{f--,f===0&&(h.style.display="none")}),jt(z,de),t._reset=de,setTimeout(()=>{Zt("event-editor")},50),J=new he(z,t.water,Re,Ve),De=new Ue({xneg:document.getElementById("xneg"),xpos:document.getElementById("xpos"),yneg:document.getElementById("ypos"),ypos:document.getElementById("ypos"),zneg:document.getElementById("zneg"),zpos:document.getElementById("zpos")},z);const v=new U(new p.Vector(0,0,0));if(t.swimmers.push(v),t.water=new ee(t.gl),!t.water.textureA.canDrawTo()||!t.water.textureB.canDrawTo())throw new Error("Rendering to floating-point textures is required but not supported");de();for(var b=0;b<20;b++)t.water.addDrop(Math.random()*2-1,Math.random()*2-1,.06,b&1?.01:-.01);document.getElementById("loading").innerHTML="",s();var R=window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(r){setTimeout(r,0)},C=new Date().getTime();function D(){var r=new Date().getTime();a((r-C)/1e3),e(),C=r,R(D)}R(D),window.onresize=s;var y,O,I,g=-1,S=0,A=1,k=2;const W=3;var V,L;function B(r,c,d){if(V=r,L=c,!d||d.button===0){var m=new p.Raytracer,u=m.getRayForPixel(r*o,c*o),E=m.eye.add(u.multiply(-m.eye.y/u.y));for(let x of t.swimmers){var w=p.Raytracer.hitTestSphere(m.eye,u,x.body.center,x.body.radius);if(w){g=A,I=x,x.body.cinematic=!0,y=w.hit,O=m.getRayForPixel(z.canvas.width/2,z.canvas.height/2).negative();return}}Math.abs(E.x)<t.params.simulation.poolSize.x/2&&Math.abs(E.z)<t.params.simulation.poolSize.z/2&&(g=S,K(r,c))}else d.button===2?g=k:d.button===1&&(g=W)}function K(r,c,d){switch(g){case S:{var m=new p.Raytracer,u=m.getRayForPixel(r*o,c*o),E=m.eye.add(u.multiply(-m.eye.y/u.y));t.water.addDrop(E.x/t.params.simulation.poolSize.x*2,E.z/t.params.simulation.poolSize.z*2,.06,.03),t.paused&&(t.water.updateNormals(),J.updateCaustics(t.water));break}case A:{var m=new p.Raytracer,u=m.getRayForPixel(r*o,c*o),w=-O.dot(m.eye.subtract(y))/O.dot(u),x=m.eye.add(u.multiply(w));const F=I.body.center.add(x.subtract(y)),M=I.body.radius,X=Math.max(M-t.params.simulation.poolSize.x/2,Math.min(t.params.simulation.poolSize.x/2-M,F.x)),G=Math.max(M-t.params.simulation.poolSize.y,Math.min(10,F.y)),Q=Math.max(M-t.params.simulation.poolSize.z/2,Math.min(t.params.simulation.poolSize.z/2-M,F.z));I.body.move(new p.Vector(X,G,Q)),y=x,t.paused&&J.updateCaustics(t.water);break}case k:{if(d&&d.shiftKey){t.angleZ-=r-V,t.angleZ=Math.max(-89.999,Math.min(89.999,t.angleZ));break}t.angleY-=r-V,t.angleX-=c-L,t.angleX=Math.max(-89.999,Math.min(89.999,t.angleX));break}case W:{const _=.001*t.zoomDistance;t.translateX+=_*(r-V),t.translateY-=_*(c-L)}}V=r,L=c,t.paused&&e()}function ie(){g=-1,I&&(I.body.cinematic=!U.useGravity)}function N(r){return r===i||r.parentNode&&N(r.parentNode)}function H(r){return r&&(r.id==="event-editor"||r.parentNode&&H(r.parentNode))}function j(r){t.zoomDistance*=1-r*2e-4,t.zoomDistance=Math.max(2,Math.min(1e3,t.zoomDistance)),t.paused&&e()}addEventListener("wheel",function(r){if(!H(r.target)){var c=r.deltaY;j(-c)}}),document.onmousedown=function(r){z.canvas.focus(),N(r.target)||B(r.pageX,r.pageY,r)},document.onmousemove=function(r){K(r.pageX,r.pageY,r)},document.onmouseup=function(){ie()},document.ontouchstart=function(r){r.touches.length===1&&!N(r.target)&&(r.preventDefault(),B(r.touches[0].pageX,r.touches[0].pageY,!1))},document.ontouchmove=function(r){r.touches.length===1&&K(r.touches[0].pageX,r.touches[0].pageY)},document.ontouchend=function(r){r.touches.length==0&&ie()};function $(){t.paused?t.play():t.pause()}const T=async function(r){if(r.which==32)$();else if(r.which==71)t.useGravity(!U.useGravity);else if(r.which==76&&t.paused)e();else if(r.which==74)t.swimmers.forEach(c=>c.jump(2));else if(r.which==67)t.params.visualizations.areaConservation.enabled=!t.params.visualizations.areaConservation.enabled,gt(),console.log("Area conservation "+(t.params.visualizations.areaConservation.enabled?"enabled.":"disabled."));else if(r.which==80)t.water.showProjectionGrid=!t.water.showProjectionGrid,console.log("Projection grid "+(t.water.showProjectionGrid?"enabled.":"disabled."));else if(r.which==65)t.water.showAreaConservedGrid=!t.water.showAreaConservedGrid,console.log("Area conserved grid "+(t.water.showAreaConservedGrid?"enabled.":"disabled."));else if(r.which==83){if(U.swimming=!U.swimming,U.swimming)for(let c of t.swimmers)c.swim(!0);else stopRace();console.log("Swimming "+(U.swimming?"enabled.":"disabled."))}else if(r.which==86)t.params.video.show=!t.params.video.show;else if(r.which==72)document.getElementById("commands").hidden=!document.getElementById("commands").hidden,document.getElementById("h").hidden=!document.getElementById("h").hidden;else if(r.which==68)t.playingDemo?t.stopDemo():await t.launchDemo();else if(r.which==81)t.chronoPhotography({});else if(r.which==82)t.setScene("100m freestyle").then(()=>t.startRace()),t._setPannelMinimized(!0);else if(r.which==78)t.resolution.x=512,t.resolution.y=512,t.params.simulation.poolSize.x=10,t.params.simulation.poolSize.z=10,t.params.visualizations.areaConservation.enabled=!1,t.params.visualizations.rendering="lambert",t.params.quiver.alwaysActive=!0,t.params.quiver.amplitude=.43,t.params.quiver.frequencyFactor=1.17,t.params.quiver.waveLength=2.9,t.params.visualizations.showFlags=!0,t.params.swimmers.showSpheres=!1,de(),t.swimmers[0].body.move(new p.Vector(0,0,0)),t.swimmers[0].nationality=1,t.params.flags.flagSize.x=3,t.params.flags.flagSize.y=4,t._setPannelMinimized(!0);else if(r.which==88){const c=await ei(t.gl,e,7680,4320),d=URL.createObjectURL(c),m=document.createElement("a");m.href=d,m.download="screenshot.png",m.click()}else r.which==66?t.params.visualizations.areaConservation.optimized=!t.params.visualizations.areaConservation.optimized:r.which==77?t.setMVPMI():r.which==75?t.recalibrate():r.which==40?(t.resolution.x>129&&(t.resolution.x=Math.round(t.resolution.x/2)),de(),console.log("decreasing x resolution")):r.which==38?(t.resolution.x<16384&&(t.resolution.x=Math.round(t.resolution.x*2)),de(),console.log("increasing x resolution")):r.which==37?(t.resolution.y>129&&(t.resolution.y=Math.round(t.resolution.y/2)),de(),console.log("decreasing y resolution")):r.which==39&&(t.resolution.y<16384&&(t.resolution.y=Math.round(t.resolution.y*2)),de(),console.log("increasing y resolution"))};z.canvas.addEventListener("keydown",T);function a(r){if(t.updateDemo(r),!t.paused&&!(r>1)){if(g==A)for(let c of t.swimmers)c.body.velocity=new p.Vector(0,0,0);z.clearColor(0,0,0,1),z.bindFramebuffer(z.FRAMEBUFFER,null),z.clear(z.COLOR_BUFFER_BIT|z.DEPTH_BUFFER_BIT);for(let c of t.swimmers)c.update(r);t.updateFloaters(r),t.classicalOverlayEnabled||t.water.updateSpheres(r);for(let c=0;c<t.params.numSteps;c++)t.classicalOverlayEnabled||t.water.stepSimulation(r);J.updateCaustics(t.water),t.updateTime(r),t.updateParams(),l.value=t.getRaceTime(),oi(r),t.splashParticles.update(r),t.bubbleSpheres.forEach(c=>c.update(r))}}function n(){if(!U.raceHasStarted||!t.params.cornerView.show||t.classicalOverlayEnabled)return;t.cornerView=!0,z.loadIdentity(),z.translate(0,0,-35),z.rotate(90,1,0,0),z.rotate(-90,0,1,0),z.translate(0,.5,0);const r=z.canvas.height/4,c=16*r/9,d=0,m=z.canvas.height-r;z.viewport(d,m,c,r),J.renderWater(t.water,De,t.params.visualizations.shadow),t.isSceneSynchronizedSwimming()&&(t.params.visualizations.showStreaks||t.params.simulation.splashes.enabled)&&t.splashParticles.draw({}),J.renderSpheres(t.water),z.viewport(0,0,z.canvas.width,z.canvas.height),z.loadIdentity(),z.translate(t.translateX,t.translateY,-t.zoomDistance),z.rotate(-t.angleZ,0,0,1),z.rotate(-t.angleX,1,0,0),z.rotate(-t.angleY,0,1,0),z.translate(0,.5,0),t.cornerView=!1}function e(){p.keys.L&&(J.lightDir=p.Vector.fromAngles((90-t.angleY)*Math.PI/180,-t.angleX*Math.PI/180),t.paused&&J.updateCaustics(t.water)),U.updateAttributesTexture(),t.water.addOrRemoveVisualizationWaves(!0),t.water.updateNormals(),z.clearColor(.1,.2,.5,1),z.clearColor(.94/1.5,.92/1.5,.84/1.5,1),z.bindFramebuffer(z.FRAMEBUFFER,t.drawingFrameBuffer),z.clear(z.COLOR_BUFFER_BIT|z.DEPTH_BUFFER_BIT),z.loadIdentity(),z.translate(t.translateX,t.translateY,-t.zoomDistance),z.rotate(-t.angleZ,0,0,1),z.rotate(-t.angleX,1,0,0),z.rotate(-t.angleY,0,1,0),z.translate(0,.5,0),z.enable(z.DEPTH_TEST),z.disable(z.BLEND),z.viewport(0,0,z.canvas.width,z.canvas.height),J.sphereCenter=t.swimmers[0].body.center,J.sphereRadius=t.swimmers[0].body.radius,J.renderCube(t.water),J.renderWater(t.water,De,t.params.visualizations.shadow),J.renderSpheres(t.water),z.disable(z.DEPTH_TEST);const r={};!t.classicalOverlayEnabled&&(t.params.visualizations.showStreaks||t.params.simulation.splashes.enabled)&&t.splashParticles.draw(r),t.renderVideo(),t.drawingFrameBuffer!==null&&Jt(),n(),t.water.addOrRemoveVisualizationWaves(!1)}};
//# sourceMappingURL=swimming-DgetDiGE.js.map
