var st=Object.defineProperty;var Ne=a=>{throw TypeError(a)};var nt=(a,t,n)=>t in a?st(a,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[t]=n;var te=(a,t,n)=>nt(a,typeof t!="symbol"?t+"":t,n),lt=(a,t,n)=>t.has(a)||Ne("Cannot "+n);var xe=(a,t,n)=>t.has(a)?Ne("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(a):t.set(a,n);var $=(a,t,n)=>(lt(a,t,"access private method"),n);import"./modulepreload-polyfill-B5Qt9EMX.js";import{g as ct}from"./lil-gui.module.min-Vka56b52.js";var v=function(){var a,t={create:function(r){r=r||{};var s=document.createElement("canvas");s.width=800,s.height=600,"alpha"in r||(r.alpha=!1);try{a=s.getContext("webgl2",r)}catch{}try{a=a||s.getContext("experimental-webgl",r)}catch{}if(!a)throw new Error("WebGL not supported");return a.HALF_FLOAT_OES=36193,n(),c(),u(),P(),a},keys:{},Matrix:E,Indexer:V,Buffer:k,Mesh:x,HitTest:N,Raytracer:U,Shader:I,Texture:M,Vector:y};function n(){a.MODELVIEW=L|1,a.PROJECTION=L|2;var r=new E,s=new E;a.modelviewMatrix=new E,a.projectionMatrix=new E;var e=[],i=[],l,d;a.matrixMode=function(h){switch(h){case a.MODELVIEW:l="modelviewMatrix",d=e;break;case a.PROJECTION:l="projectionMatrix",d=i;break;default:throw new Error("invalid matrix mode "+h)}},a.loadIdentity=function(){E.identity(a[l])},a.loadMatrix=function(h){for(var m=h.m,w=a[l].m,g=0;g<16;g++)w[g]=m[g]},a.multMatrix=function(h){a.loadMatrix(E.multiply(a[l],h,s))},a.perspective=function(h,m,w,g){a.multMatrix(E.perspective(h,m,w,g,r))},a.frustum=function(h,m,w,g,f,_){a.multMatrix(E.frustum(h,m,w,g,f,_,r))},a.ortho=function(h,m,w,g,f,_){a.multMatrix(E.ortho(h,m,w,g,f,_,r))},a.scale=function(h,m,w){a.multMatrix(E.scale(h,m,w,r))},a.translate=function(h,m,w){a.multMatrix(E.translate(h,m,w,r))},a.rotate=function(h,m,w,g){a.multMatrix(E.rotate(h,m,w,g,r))},a.lookAt=function(h,m,w,g,f,_,z,A,F){a.multMatrix(E.lookAt(h,m,w,g,f,_,z,A,F,r))},a.pushMatrix=function(){d.push(Array.prototype.slice.call(a[l].m))},a.popMatrix=function(){var h=d.pop();a[l].m=D?new Float32Array(h):h},a.project=function(h,m,w,g,f,_){g=g||a.modelviewMatrix,f=f||a.projectionMatrix,_=_||a.getParameter(a.VIEWPORT);var z=f.transformPoint(g.transformPoint(new y(h,m,w)));return new y(_[0]+_[2]*(z.x*.5+.5),_[1]+_[3]*(z.y*.5+.5),z.z*.5+.5)},a.unProject=function(h,m,w,g,f,_){g=g||a.modelviewMatrix,f=f||a.projectionMatrix,_=_||a.getParameter(a.VIEWPORT);var z=new y((h-_[0])/_[2]*2-1,(m-_[1])/_[3]*2-1,w*2-1);return E.inverse(E.multiply(f,g,r),s).transformPoint(z)},a.matrixMode(a.MODELVIEW)}function c(){var r={mesh:new x({coords:!0,colors:!0,triangles:!1}),mode:-1,coord:[0,0,0,0],color:[1,1,1,1],shader:new I("      uniform float pointSize;      out vec4 color;      out vec4 coord;      void main() {        color = gl_Color;        coord = gl_TexCoord;        gl_Position = gl_ModelViewProjectionMatrix * gl_Vertex;        gl_PointSize = pointSize;      }    ","      uniform sampler2D tex;      uniform float pointSize;      uniform bool useTexture;      in vec4 color;      in vec4 coord;      out vec4 fragColor;      void main() {        fragColor = color;        if (useTexture) fragColor *= texture(tex, coord.xy);      }    ")};a.pointSize=function(s){r.shader.uniforms({pointSize:s})},a.begin=function(s){if(r.mode!=-1)throw new Error("mismatched gl.begin() and gl.end() calls");r.mode=s,r.mesh.colors=[],r.mesh.coords=[],r.mesh.vertices=[]},a.color=function(s,e,i,l){r.color=arguments.length==1?s.toArray().concat(1):[s,e,i,l||1]},a.texCoord=function(s,e){r.coord=arguments.length==1?s.toArray(2):[s,e]},a.vertex=function(s,e,i){r.mesh.colors.push(r.color),r.mesh.coords.push(r.coord),r.mesh.vertices.push(arguments.length==1?s.toArray():[s,e,i])},a.end=function(){if(r.mode==-1)throw new Error("mismatched gl.begin() and gl.end() calls");r.mesh.compile(),r.shader.uniforms({useTexture:!!a.getParameter(a.TEXTURE_BINDING_2D)}).draw(r.mesh,r.mode),r.mode=-1}}function u(){var r=a,s=0,e=0,i={},l=!1,d=Object.prototype.hasOwnProperty;function h(){for(var A in i)if(d.call(i,A)&&i[A])return!0;return!1}function m(A){var F={};for(var X in A)typeof A[X]=="function"?F[X]=function(J){return function(){J.apply(A,arguments)}}(A[X]):F[X]=A[X];F.original=A,F.x=F.pageX,F.y=F.pageY;for(var G=a.canvas;G;G=G.offsetParent)F.x-=G.offsetLeft,F.y-=G.offsetTop;return l?(F.deltaX=F.x-s,F.deltaY=F.y-e):(F.deltaX=0,F.deltaY=0,l=!0),s=F.x,e=F.y,F.dragging=h(),F.preventDefault=function(){F.original.preventDefault()},F.stopPropagation=function(){F.original.stopPropagation()},F}function w(A){a=r,h()||(T(document,"mousemove",g),T(document,"mouseup",f),R(a.canvas,"mousemove",g),R(a.canvas,"mouseup",f)),i[A.which]=!0,A=m(A),a.onmousedown&&a.onmousedown(A),A.preventDefault()}function g(A){a=r,A=m(A),a.onmousemove&&a.onmousemove(A),A.preventDefault()}function f(A){a=r,i[A.which]=!1,h()||(R(document,"mousemove",g),R(document,"mouseup",f),T(a.canvas,"mousemove",g),T(a.canvas,"mouseup",f)),A=m(A),a.onmouseup&&a.onmouseup(A),A.preventDefault()}function _(){l=!1}function z(){i={},l=!1}T(a.canvas,"mousedown",w),T(a.canvas,"mousemove",g),T(a.canvas,"mouseup",f),T(a.canvas,"mouseover",_),T(a.canvas,"mouseout",_),T(document,"contextmenu",z)}function p(r){var s={8:"BACKSPACE",9:"TAB",13:"ENTER",16:"SHIFT",27:"ESCAPE",32:"SPACE",37:"LEFT",38:"UP",39:"RIGHT",40:"DOWN"};return s[r]||(r>=65&&r<=90?String.fromCharCode(r):null)}function T(r,s,e){r.addEventListener(s,e)}function R(r,s,e){r.removeEventListener(s,e)}T(document,"keydown",function(r){if(!r.altKey&&!r.ctrlKey&&!r.metaKey){var s=p(r.keyCode);s&&(t.keys[s]=!0),t.keys[r.keyCode]=!0}}),T(document,"keyup",function(r){if(!r.altKey&&!r.ctrlKey&&!r.metaKey){var s=p(r.keyCode);s&&(t.keys[s]=!1),t.keys[r.keyCode]=!1}});function P(){(function(r){a.makeCurrent=function(){a=r}})(a),a.animate=function(){var r=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(l){setTimeout(l,16.666666666666668)},s=new Date().getTime(),e=a;function i(){a=e;var l=new Date().getTime();a.onupdate&&a.onupdate((l-s)/1e3),a.ondraw&&a.ondraw(),r(i),s=l}i()},a.fullscreen=function(r){r=r||{};var s=r.paddingTop||0,e=r.paddingLeft||0,i=r.paddingRight||0,l=r.paddingBottom||0;if(!document.body)throw new Error("document.body doesn't exist yet (call gl.fullscreen() from window.onload() or from inside the <body> tag)");document.body.appendChild(a.canvas),document.body.style.overflow="hidden",a.canvas.style.position="absolute",a.canvas.style.left=e+"px",a.canvas.style.top=s+"px";function d(){a.canvas.width=window.innerWidth-e-i,a.canvas.height=window.innerHeight-s-l,a.viewport(0,0,a.canvas.width,a.canvas.height),(r.camera||!("camera"in r))&&(a.matrixMode(a.PROJECTION),a.loadIdentity(),a.perspective(r.fov||45,a.canvas.width/a.canvas.height,r.near||.1,r.far||1e3),a.matrixMode(a.MODELVIEW)),a.ondraw&&a.ondraw()}T(window,"resize",d),d()}}var L=305397760,D=typeof Float32Array<"u";function E(){var r=Array.prototype.concat.apply([],arguments);r.length||(r=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),this.m=D?new Float32Array(r):r}E.prototype={inverse:function(){return E.inverse(this,new E)},transpose:function(){return E.transpose(this,new E)},multiply:function(r){return E.multiply(this,r,new E)},transformPoint:function(r){var s=this.m;return new y(s[0]*r.x+s[1]*r.y+s[2]*r.z+s[3],s[4]*r.x+s[5]*r.y+s[6]*r.z+s[7],s[8]*r.x+s[9]*r.y+s[10]*r.z+s[11]).divide(s[12]*r.x+s[13]*r.y+s[14]*r.z+s[15])},transformVector:function(r){var s=this.m;return new y(s[0]*r.x+s[1]*r.y+s[2]*r.z,s[4]*r.x+s[5]*r.y+s[6]*r.z,s[8]*r.x+s[9]*r.y+s[10]*r.z)}},E.inverse=function(r,s){s=s||new E;var e=r.m,i=s.m;i[0]=e[5]*e[10]*e[15]-e[5]*e[14]*e[11]-e[6]*e[9]*e[15]+e[6]*e[13]*e[11]+e[7]*e[9]*e[14]-e[7]*e[13]*e[10],i[1]=-e[1]*e[10]*e[15]+e[1]*e[14]*e[11]+e[2]*e[9]*e[15]-e[2]*e[13]*e[11]-e[3]*e[9]*e[14]+e[3]*e[13]*e[10],i[2]=e[1]*e[6]*e[15]-e[1]*e[14]*e[7]-e[2]*e[5]*e[15]+e[2]*e[13]*e[7]+e[3]*e[5]*e[14]-e[3]*e[13]*e[6],i[3]=-e[1]*e[6]*e[11]+e[1]*e[10]*e[7]+e[2]*e[5]*e[11]-e[2]*e[9]*e[7]-e[3]*e[5]*e[10]+e[3]*e[9]*e[6],i[4]=-e[4]*e[10]*e[15]+e[4]*e[14]*e[11]+e[6]*e[8]*e[15]-e[6]*e[12]*e[11]-e[7]*e[8]*e[14]+e[7]*e[12]*e[10],i[5]=e[0]*e[10]*e[15]-e[0]*e[14]*e[11]-e[2]*e[8]*e[15]+e[2]*e[12]*e[11]+e[3]*e[8]*e[14]-e[3]*e[12]*e[10],i[6]=-e[0]*e[6]*e[15]+e[0]*e[14]*e[7]+e[2]*e[4]*e[15]-e[2]*e[12]*e[7]-e[3]*e[4]*e[14]+e[3]*e[12]*e[6],i[7]=e[0]*e[6]*e[11]-e[0]*e[10]*e[7]-e[2]*e[4]*e[11]+e[2]*e[8]*e[7]+e[3]*e[4]*e[10]-e[3]*e[8]*e[6],i[8]=e[4]*e[9]*e[15]-e[4]*e[13]*e[11]-e[5]*e[8]*e[15]+e[5]*e[12]*e[11]+e[7]*e[8]*e[13]-e[7]*e[12]*e[9],i[9]=-e[0]*e[9]*e[15]+e[0]*e[13]*e[11]+e[1]*e[8]*e[15]-e[1]*e[12]*e[11]-e[3]*e[8]*e[13]+e[3]*e[12]*e[9],i[10]=e[0]*e[5]*e[15]-e[0]*e[13]*e[7]-e[1]*e[4]*e[15]+e[1]*e[12]*e[7]+e[3]*e[4]*e[13]-e[3]*e[12]*e[5],i[11]=-e[0]*e[5]*e[11]+e[0]*e[9]*e[7]+e[1]*e[4]*e[11]-e[1]*e[8]*e[7]-e[3]*e[4]*e[9]+e[3]*e[8]*e[5],i[12]=-e[4]*e[9]*e[14]+e[4]*e[13]*e[10]+e[5]*e[8]*e[14]-e[5]*e[12]*e[10]-e[6]*e[8]*e[13]+e[6]*e[12]*e[9],i[13]=e[0]*e[9]*e[14]-e[0]*e[13]*e[10]-e[1]*e[8]*e[14]+e[1]*e[12]*e[10]+e[2]*e[8]*e[13]-e[2]*e[12]*e[9],i[14]=-e[0]*e[5]*e[14]+e[0]*e[13]*e[6]+e[1]*e[4]*e[14]-e[1]*e[12]*e[6]-e[2]*e[4]*e[13]+e[2]*e[12]*e[5],i[15]=e[0]*e[5]*e[10]-e[0]*e[9]*e[6]-e[1]*e[4]*e[10]+e[1]*e[8]*e[6]+e[2]*e[4]*e[9]-e[2]*e[8]*e[5];for(var l=e[0]*i[0]+e[1]*i[4]+e[2]*i[8]+e[3]*i[12],d=0;d<16;d++)i[d]/=l;return s},E.transpose=function(r,s){s=s||new E;var e=r.m,i=s.m;return i[0]=e[0],i[1]=e[4],i[2]=e[8],i[3]=e[12],i[4]=e[1],i[5]=e[5],i[6]=e[9],i[7]=e[13],i[8]=e[2],i[9]=e[6],i[10]=e[10],i[11]=e[14],i[12]=e[3],i[13]=e[7],i[14]=e[11],i[15]=e[15],s},E.multiply=function(r,s,e){e=e||new E;var i=r.m,l=s.m,d=e.m;return d[0]=i[0]*l[0]+i[1]*l[4]+i[2]*l[8]+i[3]*l[12],d[1]=i[0]*l[1]+i[1]*l[5]+i[2]*l[9]+i[3]*l[13],d[2]=i[0]*l[2]+i[1]*l[6]+i[2]*l[10]+i[3]*l[14],d[3]=i[0]*l[3]+i[1]*l[7]+i[2]*l[11]+i[3]*l[15],d[4]=i[4]*l[0]+i[5]*l[4]+i[6]*l[8]+i[7]*l[12],d[5]=i[4]*l[1]+i[5]*l[5]+i[6]*l[9]+i[7]*l[13],d[6]=i[4]*l[2]+i[5]*l[6]+i[6]*l[10]+i[7]*l[14],d[7]=i[4]*l[3]+i[5]*l[7]+i[6]*l[11]+i[7]*l[15],d[8]=i[8]*l[0]+i[9]*l[4]+i[10]*l[8]+i[11]*l[12],d[9]=i[8]*l[1]+i[9]*l[5]+i[10]*l[9]+i[11]*l[13],d[10]=i[8]*l[2]+i[9]*l[6]+i[10]*l[10]+i[11]*l[14],d[11]=i[8]*l[3]+i[9]*l[7]+i[10]*l[11]+i[11]*l[15],d[12]=i[12]*l[0]+i[13]*l[4]+i[14]*l[8]+i[15]*l[12],d[13]=i[12]*l[1]+i[13]*l[5]+i[14]*l[9]+i[15]*l[13],d[14]=i[12]*l[2]+i[13]*l[6]+i[14]*l[10]+i[15]*l[14],d[15]=i[12]*l[3]+i[13]*l[7]+i[14]*l[11]+i[15]*l[15],e},E.identity=function(r){r=r||new E;var s=r.m;return s[0]=s[5]=s[10]=s[15]=1,s[1]=s[2]=s[3]=s[4]=s[6]=s[7]=s[8]=s[9]=s[11]=s[12]=s[13]=s[14]=0,r},E.perspective=function(r,s,e,i,l){var d=Math.tan(r*Math.PI/360)*e,h=d*s;return E.frustum(-h,h,-d,d,e,i,l)},E.frustum=function(r,s,e,i,l,d,h){h=h||new E;var m=h.m;return m[0]=2*l/(s-r),m[1]=0,m[2]=(s+r)/(s-r),m[3]=0,m[4]=0,m[5]=2*l/(i-e),m[6]=(i+e)/(i-e),m[7]=0,m[8]=0,m[9]=0,m[10]=-(d+l)/(d-l),m[11]=-2*d*l/(d-l),m[12]=0,m[13]=0,m[14]=-1,m[15]=0,h},E.ortho=function(r,s,e,i,l,d,h){h=h||new E;var m=h.m;return m[0]=2/(s-r),m[1]=0,m[2]=0,m[3]=-(s+r)/(s-r),m[4]=0,m[5]=2/(i-e),m[6]=0,m[7]=-(i+e)/(i-e),m[8]=0,m[9]=0,m[10]=-2/(d-l),m[11]=-(d+l)/(d-l),m[12]=0,m[13]=0,m[14]=0,m[15]=1,h},E.scale=function(r,s,e,i){i=i||new E;var l=i.m;return l[0]=r,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=s,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=e,l[11]=0,l[12]=0,l[13]=0,l[14]=0,l[15]=1,i},E.translate=function(r,s,e,i){i=i||new E;var l=i.m;return l[0]=1,l[1]=0,l[2]=0,l[3]=r,l[4]=0,l[5]=1,l[6]=0,l[7]=s,l[8]=0,l[9]=0,l[10]=1,l[11]=e,l[12]=0,l[13]=0,l[14]=0,l[15]=1,i},E.rotate=function(r,s,e,i,l){if(!r||!s&&!e&&!i)return E.identity(l);l=l||new E;var d=l.m,h=Math.sqrt(s*s+e*e+i*i);r*=Math.PI/180,s/=h,e/=h,i/=h;var m=Math.cos(r),w=Math.sin(r),g=1-m;return d[0]=s*s*g+m,d[1]=s*e*g-i*w,d[2]=s*i*g+e*w,d[3]=0,d[4]=e*s*g+i*w,d[5]=e*e*g+m,d[6]=e*i*g-s*w,d[7]=0,d[8]=i*s*g-e*w,d[9]=i*e*g+s*w,d[10]=i*i*g+m,d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,l},E.lookAt=function(r,s,e,i,l,d,h,m,w,g){g=g||new E;var f=g.m,_=new y(r,s,e),z=new y(i,l,d),A=new y(h,m,w),F=_.subtract(z).unit(),X=A.cross(F).unit(),G=F.cross(X).unit();return f[0]=X.x,f[1]=X.y,f[2]=X.z,f[3]=-X.dot(_),f[4]=G.x,f[5]=G.y,f[6]=G.z,f[7]=-G.dot(_),f[8]=F.x,f[9]=F.y,f[10]=F.z,f[11]=-F.dot(_),f[12]=0,f[13]=0,f[14]=0,f[15]=1,g};function V(){this.unique=[],this.indices=[],this.map={}}V.prototype={add:function(r){var s=JSON.stringify(r);return s in this.map||(this.map[s]=this.unique.length,this.unique.push(r)),this.map[s]}};function k(r,s){this.buffer=null,this.target=r,this.type=s,this.data=[]}k.prototype={compile:function(r){for(var s=[],e=0,i=1e4;e<this.data.length;e+=i)s=Array.prototype.concat.apply(s,this.data.slice(e,e+i));var l=this.data.length?s.length/this.data.length:0;if(l!=Math.round(l))throw new Error("buffer elements not of consistent size, average size is "+l);this.buffer=this.buffer||a.createBuffer(),this.buffer.length=s.length,this.buffer.spacing=l,a.bindBuffer(this.target,this.buffer),a.bufferData(this.target,new this.type(s),r||a.STATIC_DRAW)}};function x(r){r=r||{},this.vertexBuffers={},this.indexBuffers={},this.addVertexBuffer("vertices","gl_Vertex"),r.coords&&this.addVertexBuffer("coords","gl_TexCoord"),r.normals&&this.addVertexBuffer("normals","gl_Normal"),r.colors&&this.addVertexBuffer("colors","gl_Color"),(!("triangles"in r)||r.triangles)&&this.addIndexBuffer("triangles"),r.lines&&this.addIndexBuffer("lines")}x.prototype={addVertexBuffer:function(r,s){var e=this.vertexBuffers[s]=new k(a.ARRAY_BUFFER,Float32Array);e.name=r,this[r]=[]},addIndexBuffer:function(r){this.indexBuffers[r]=new k(a.ELEMENT_ARRAY_BUFFER,Uint16Array),this[r]=[]},compile:function(){for(var r in this.vertexBuffers){var s=this.vertexBuffers[r];s.data=this[s.name],s.compile()}for(var e in this.indexBuffers){var s=this.indexBuffers[e];s.data=this[e],s.compile()}},transform:function(r){if(this.vertices=this.vertices.map(function(e){return r.transformPoint(y.fromArray(e)).toArray()}),this.normals){var s=r.inverse().transpose();this.normals=this.normals.map(function(e){return s.transformVector(y.fromArray(e)).unit().toArray()})}return this.compile(),this},computeNormals:function(){this.normals||this.addVertexBuffer("normals","gl_Normal");for(var r=0;r<this.vertices.length;r++)this.normals[r]=new y;for(var r=0;r<this.triangles.length;r++){var s=this.triangles[r],e=y.fromArray(this.vertices[s[0]]),i=y.fromArray(this.vertices[s[1]]),l=y.fromArray(this.vertices[s[2]]),d=i.subtract(e).cross(l.subtract(e)).unit();this.normals[s[0]]=this.normals[s[0]].add(d),this.normals[s[1]]=this.normals[s[1]].add(d),this.normals[s[2]]=this.normals[s[2]].add(d)}for(var r=0;r<this.vertices.length;r++)this.normals[r]=this.normals[r].unit().toArray();return this.compile(),this},computeWireframe:function(){for(var r=new V,s=0;s<this.triangles.length;s++)for(var e=this.triangles[s],i=0;i<e.length;i++){var l=e[i],d=e[(i+1)%e.length];r.add([Math.min(l,d),Math.max(l,d)])}return this.lines||this.addIndexBuffer("lines"),this.lines=r.unique,this.compile(),this},getAABB:function(){var r={min:new y(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)};r.max=r.min.negative();for(var s=0;s<this.vertices.length;s++){var e=y.fromArray(this.vertices[s]);r.min=y.min(r.min,e),r.max=y.max(r.max,e)}return r},getBoundingSphere:function(){for(var r=this.getAABB(),s={center:r.min.add(r.max).divide(2),radius:0},e=0;e<this.vertices.length;e++)s.radius=Math.max(s.radius,y.fromArray(this.vertices[e]).subtract(s.center).length());return s}},x.plane=function(r){r=r||{};for(var s=new x(r),e=r.detailX||r.detail||1,i=r.detailY||r.detail||1,l=r.width||2,d=r.height||2,h=0;h<=i;h++)for(var m=h/i,w=0;w<=e;w++){var g=w/e;if(s.vertices.push([(g-.5)*l,(m-.5)*d,0]),s.coords&&s.coords.push([g,m]),s.normals&&s.normals.push([0,0,1]),w<e&&h<i){var f=w+h*(e+1);s.triangles.push([f,f+1,f+e+1]),s.triangles.push([f+e+1,f+1,f+e+2])}}return s.compile(),s};var b=[[0,4,2,6,-1,0,0],[1,3,5,7,1,0,0],[0,1,4,5,0,-1,0],[2,6,3,7,0,1,0],[0,2,1,3,0,0,-1],[4,5,6,7,0,0,1]];function C(r){return new y((r&1)*2-1,(r&2)-1,(r&4)/2-1)}x.cube=function(r){for(var s=new x(r),e=r&&r.width||2,i=r&&r.height||2,l=r&&r.depth||2,d=0;d<b.length;d++){for(var h=b[d],m=d*4,w=0;w<4;w++){var g=h[w];const f=C(g).toArray();f[0]*=e/2,f[1]*=i/2,f[2]*=l/2,s.vertices.push(f),s.coords&&s.coords.push([w&1,(w&2)/2]),s.normals&&s.normals.push(h.slice(4,7))}s.triangles.push([m,m+1,m+2]),s.triangles.push([m+2,m+1,m+3])}return s.compile(),s},x.sphere=function(r){function s(G,J,re){return w?[G,re,J]:[G,J,re]}function e(G){return G+(G-G*G)/2}r=r||{};for(var i=new x(r),l=new V,d=r.detail||6,h=0;h<8;h++)for(var m=C(h),w=m.x*m.y*m.z>0,g=[],f=0;f<=d;f++){for(var _=0;f+_<=d;_++){var z=f/d,A=_/d,F=(d-f-_)/d,X={vertex:new y(e(z),e(A),e(F)).unit().multiply(m).toArray()};i.coords&&(X.coord=m.y>0?[1-z,F]:[F,1-z]),g.push(l.add(X))}if(f>0)for(var _=0;f+_<=d;_++){var z=(f-1)*(d+1)+(f-1-(f-1)*(f-1))/2+_,A=f*(d+1)+(f-f*f)/2+_;i.triangles.push(s(g[z],g[z+1],g[A])),f+_<d&&i.triangles.push(s(g[A],g[z+1],g[A+1]))}}return i.vertices=l.unique.map(function(G){return G.vertex}),i.coords&&(i.coords=l.unique.map(function(G){return G.coord})),i.normals&&(i.normals=i.vertices),i.compile(),i},x.load=function(r,s){s=s||{},"coords"in s||(s.coords=!!r.coords),"normals"in s||(s.normals=!!r.normals),"colors"in s||(s.colors=!!r.colors),"triangles"in s||(s.triangles=!!r.triangles),"lines"in s||(s.lines=!!r.lines);var e=new x(s);return e.vertices=r.vertices,e.coords&&(e.coords=r.coords),e.normals&&(e.normals=r.normals),e.colors&&(e.colors=r.colors),e.triangles&&(e.triangles=r.triangles),e.lines&&(e.lines=r.lines),e.compile(),e};function N(r,s,e){this.t=arguments.length?r:Number.MAX_VALUE,this.hit=s,this.normal=e}N.prototype={mergeWith:function(r){r.t>0&&r.t<this.t&&(this.t=r.t,this.hit=r.hit,this.normal=r.normal)}};function U(){var r=a.getParameter(a.VIEWPORT),s=a.modelviewMatrix.m,e=new y(s[0],s[4],s[8]),i=new y(s[1],s[5],s[9]),l=new y(s[2],s[6],s[10]),d=new y(s[3],s[7],s[11]);this.eye=new y(-d.dot(e),-d.dot(i),-d.dot(l));var h=r[0],m=h+r[2],w=r[1],g=w+r[3];this.ray00=a.unProject(h,w,1).subtract(this.eye),this.ray10=a.unProject(m,w,1).subtract(this.eye),this.ray01=a.unProject(h,g,1).subtract(this.eye),this.ray11=a.unProject(m,g,1).subtract(this.eye),this.viewport=r}U.prototype={getRayForPixel:function(r,s){r=(r-this.viewport[0])/this.viewport[2],s=1-(s-this.viewport[1])/this.viewport[3];var e=y.lerp(this.ray00,this.ray10,r),i=y.lerp(this.ray01,this.ray11,r);return y.lerp(e,i,s).unit()}},U.hitTestBox=function(r,s,e,i){var l=e.subtract(r).divide(s),d=i.subtract(r).divide(s),h=y.min(l,d),m=y.max(l,d),w=h.max(),g=m.min();if(w>0&&w<g){var f=1e-6,_=r.add(s.multiply(w));return e=e.add(f),i=i.subtract(f),new N(w,_,new y((_.x>i.x)-(_.x<e.x),(_.y>i.y)-(_.y<e.y),(_.z>i.z)-(_.z<e.z)))}return null},U.hitTestSphere=function(r,s,e,i){var l=r.subtract(e),d=s.dot(s),h=2*s.dot(l),m=l.dot(l)-i*i,w=h*h-4*d*m;if(w>0){var g=(-h-Math.sqrt(w))/(2*d),f=r.add(s.multiply(g));return new N(g,f,f.subtract(e).divide(i))}return null},U.hitTestTriangle=function(r,s,e,i,l){var d=i.subtract(e),h=l.subtract(e),m=d.cross(h).unit(),w=m.dot(e.subtract(r))/m.dot(s);if(w>0){var g=r.add(s.multiply(w)),f=g.subtract(e),_=h.dot(h),z=h.dot(d),A=h.dot(f),F=d.dot(d),X=d.dot(f),G=_*F-z*z,J=(F*A-z*X)/G,re=(_*X-z*A)/G;if(J>=0&&re>=0&&J+re<=1)return new N(w,g,m)}return null};function W(r,s,e){let i;for(;(i=r.exec(s))!=null;)e(i)}var B="LIGHTGL";function I(r,s){function e(_){var z=document.getElementById(_);return z?z.text:_}r=e(r),s=e(s);var i="    uniform mat3 gl_NormalMatrix;    uniform mat4 gl_ModelViewMatrix;    uniform mat4 gl_ProjectionMatrix;    uniform mat4 gl_ModelViewProjectionMatrix;    uniform mat4 gl_ModelViewMatrixInverse;    uniform mat4 gl_ProjectionMatrixInverse;    uniform mat4 gl_ModelViewProjectionMatrixInverse;  ",l=`#version 300 es
    `+i+"    in vec4 gl_Vertex;    in vec4 gl_TexCoord;    in vec3 gl_Normal;    in vec4 gl_Color;    vec4 ftransform() {      return gl_ModelViewProjectionMatrix * gl_Vertex;    }  ",d=`#version 300 es
    precision highp float;
  `+i,h=r+s,m={};W(/\b(gl_[^;]*)\b;/g,i,function(_){var z=_[1];if(h.indexOf(z)!=-1){var A=z.replace(/[a-z_]/g,"");m[A]=B+z}}),h.indexOf("ftransform")!=-1&&(m.MVPM=B+"gl_ModelViewProjectionMatrix"),this.usedMatrices=m;function w(_,z){var A={},F=/^((\s*\/\/.*\n|\s*#extension.*\n)+)[^]*$/.exec(z);return z=F?F[1]+_+z.substr(F[1].length):_+z,W(/\bgl_\w+\b/g,_,function(X){X in A||(z=z.replace(new RegExp("\\b"+X+"\\b","g"),B+X),A[X]=!0)}),z}r=w(l,r),s=w(d,s);function g(_,z){var A=a.createShader(_);if(a.shaderSource(A,z),a.compileShader(A),!a.getShaderParameter(A,a.COMPILE_STATUS))throw new Error("compile error: "+a.getShaderInfoLog(A));return A}if(this.program=a.createProgram(),a.attachShader(this.program,g(a.VERTEX_SHADER,r)),a.attachShader(this.program,g(a.FRAGMENT_SHADER,s)),a.linkProgram(this.program),!a.getProgramParameter(this.program,a.LINK_STATUS))throw new Error("link error: "+a.getProgramInfoLog(this.program));this.attributes={},this.uniformLocations={};var f={};W(/uniform\s+sampler(1D|2D|3D|Cube)\s+(\w+)\s*;/g,r+s,function(_){f[_[2]]=1}),this.isSampler=f}function K(r){var s=Object.prototype.toString.call(r);return s=="[object Array]"||s=="[object Float32Array]"}function ee(r){var s=Object.prototype.toString.call(r);return s=="[object Number]"||s=="[object Boolean]"}new E,new E,I.prototype={uniforms:function(r){a.useProgram(this.program);for(var s in r){var e=this.uniformLocations[s]||a.getUniformLocation(this.program,s);if(e){this.uniformLocations[s]=e;var i=r[s];if(i instanceof y?i=[i.x,i.y,i.z]:i instanceof E&&(i=i.m),K(i))switch(i.length){case 1:a.uniform1fv(e,new Float32Array(i));break;case 2:a.uniform2fv(e,new Float32Array(i));break;case 3:a.uniform3fv(e,new Float32Array(i));break;case 4:a.uniform4fv(e,new Float32Array(i));break;case 9:a.uniformMatrix3fv(e,!1,new Float32Array([i[0],i[3],i[6],i[1],i[4],i[7],i[2],i[5],i[8]]));break;case 16:a.uniformMatrix4fv(e,!1,new Float32Array([i[0],i[4],i[8],i[12],i[1],i[5],i[9],i[13],i[2],i[6],i[10],i[14],i[3],i[7],i[11],i[15]]));break;default:throw new Error(`don't know how to load uniform "`+s+'" of length '+i.length)}else if(ee(i))(this.isSampler[s]?a.uniform1i:a.uniform1f).call(a,e,i);else throw new Error('attempted to set uniform "'+s+'" to invalid value '+i)}}return this},draw:function(r,s){this.drawBuffers(r.vertexBuffers,r.indexBuffers[s==a.LINES?"lines":"triangles"],arguments.length<2?a.TRIANGLES:s)},drawBuffers:function(r,s,e){var i=this.usedMatrices,l=a.modelviewMatrix,d=a.projectionMatrix,h=i.MVMI||i.NM?l.inverse():null,m=i.PMI?d.inverse():null,w=i.MVPM||i.MVPMI?d.multiply(l):null,g={};if(i.MVM&&(g[i.MVM]=l),i.MVMI&&(g[i.MVMI]=h),i.PM&&(g[i.PM]=d),i.PMI&&(g[i.PMI]=m),i.MVPM&&(g[i.MVPM]=w),i.MVPMI&&(g[i.MVPMI]=w.inverse()),i.NM){var f=h.m;g[i.NM]=[f[0],f[4],f[8],f[1],f[5],f[9],f[2],f[6],f[10]]}this.uniforms(g);var _=0;for(var z in r){var A=r[z],F=this.attributes[z]||a.getAttribLocation(this.program,z.replace(/^(gl_.*)$/,B+"$1"));F==-1||!A.buffer||(this.attributes[z]=F,a.bindBuffer(a.ARRAY_BUFFER,A.buffer),a.enableVertexAttribArray(F),a.vertexAttribPointer(F,A.buffer.spacing,a.FLOAT,!1,0,0),_=A.buffer.length/A.buffer.spacing)}for(var z in this.attributes)z in r||a.disableVertexAttribArray(this.attributes[z]);return _&&(!s||s.buffer)&&(s?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,s.buffer),a.drawElements(e,s.buffer.length,a.UNSIGNED_SHORT,0)):a.drawArrays(e,0,_)),this}};function M(r,s,e){e=e||{},this.width=r,this.height=s,this.id=a.createTexture();let i=e.type||a.UNSIGNED_BYTE,l=e.format||a.RGBA,d=a.RGBA;const h=a.getExtension("EXT_color_buffer_float"),m=a.getExtension("EXT_color_buffer_half_float");i===a.FLOAT?(h?a instanceof WebGL2RenderingContext&&(l=a.RGBA32F):(console.warn("FLOAT textures not renderable, falling back to UNSIGNED_BYTE"),i=a.UNSIGNED_BYTE,l=a.RGBA8),d=a.RGBA):i===a.HALF_FLOAT_OES?(m?a instanceof WebGL2RenderingContext&&(l=a.RGBA16F):(console.warn("HALF_FLOAT textures not renderable, falling back to UNSIGNED_BYTE"),i=a.UNSIGNED_BYTE,l=a.RGBA8),d=a.RGBA):(i=a.UNSIGNED_BYTE,l=a.RGBA8,d=a.RGBA);const w=e.filter||e.magFilter||a.LINEAR,g=e.filter||e.minFilter||a.LINEAR;a.bindTexture(a.TEXTURE_2D,this.id),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,1),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER,w),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,g),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,e.wrap||e.wrapS||a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,e.wrap||e.wrapT||a.CLAMP_TO_EDGE),a instanceof WebGL2RenderingContext?a.texImage2D(a.TEXTURE_2D,0,l,r,s,0,d,i,null):a.texImage2D(a.TEXTURE_2D,0,d,r,s,0,d,i,null),a.bindTexture(a.TEXTURE_2D,null),this.format=d,this.type=i,this.internalFormat=l}var H,Y,j;M.prototype={bind:function(r){a.activeTexture(a.TEXTURE0+(r||0)),a.bindTexture(a.TEXTURE_2D,this.id)},unbind:function(r){a.activeTexture(a.TEXTURE0+(r||0)),a.bindTexture(a.TEXTURE_2D,null)},canDrawTo:function(){H=H||a.createFramebuffer(),a.bindFramebuffer(a.FRAMEBUFFER,H),a.framebufferTexture2D(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,this.id,0);var r=a.checkFramebufferStatus(a.FRAMEBUFFER)==a.FRAMEBUFFER_COMPLETE;return a.bindFramebuffer(a.FRAMEBUFFER,null),r},drawTo:function(r){a.getExtension("EXT_color_buffer_float")||console.warn("EXT_color_buffer_float not available!");var e=a.getParameter(a.VIEWPORT);if(H=H||a.createFramebuffer(),Y=Y||a.createRenderbuffer(),a.bindFramebuffer(a.FRAMEBUFFER,H),a.bindRenderbuffer(a.RENDERBUFFER,Y),(this.width!=Y.width||this.height!=Y.height)&&(Y.width=this.width,Y.height=this.height,a.renderbufferStorage(a.RENDERBUFFER,a.DEPTH_COMPONENT16,this.width,this.height)),a.framebufferTexture2D(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,this.id,0),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.RENDERBUFFER,Y),a.checkFramebufferStatus(a.FRAMEBUFFER)!=a.FRAMEBUFFER_COMPLETE)throw new Error("Rendering to this texture is not supported (incomplete framebuffer)");a.viewport(0,0,this.width,this.height),r(),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindRenderbuffer(a.RENDERBUFFER,null),a.viewport(e[0],e[1],e[2],e[3])},swapWith:function(r){var s;s=r.id,r.id=this.id,this.id=s,s=r.width,r.width=this.width,this.width=s,s=r.height,r.height=this.height,this.height=s}},M.fromImage=function(r,s){s=s||{};var e=new M(r.width,r.height,s);a.bindTexture(a.TEXTURE_2D,e.id);try{a.texImage2D(a.TEXTURE_2D,0,e.format,e.format,e.type,r)}catch{throw location.protocol=="file:"?new Error('image not loaded for security reasons (serve this page over "http://" instead)'):new Error("image not loaded for security reasons (image must originate from the same domain as this page or use Cross-Origin Resource Sharing)")}return s.minFilter&&s.minFilter!=a.NEAREST&&s.minFilter!=a.LINEAR&&a.generateMipmap(a.TEXTURE_2D),a.bindTexture(a.TEXTURE_2D,null),e},M.fromURL=function(r,s){j=j||function(){var d=document.createElement("canvas").getContext("2d");d.canvas.width=d.canvas.height=128;for(var h=0;h<d.canvas.height;h+=16)for(var m=0;m<d.canvas.width;m+=16)d.fillStyle=(m^h)&16?"#FFF":"#DDD",d.fillRect(m,h,16,16);return d.canvas}();var e=M.fromImage(j,s),i=new Image,l=a;return i.onload=function(){l.makeCurrent(),M.fromImage(i,s).swapWith(e)},i.src=r,e},M.canUseFloatingPointTextures=function(){return!!a.getExtension("OES_texture_float")},M.canUseFloatingPointLinearFiltering=function(){return!!a.getExtension("OES_texture_float_linear")},M.canUseHalfFloatingPointTextures=function(){return!!a.getExtension("OES_texture_half_float")},M.canUseHalfFloatingPointLinearFiltering=function(){return!!a.getExtension("OES_texture_half_float_linear")};function y(r,s,e){this.x=r||0,this.y=s||0,this.z=e||0}return y.prototype={negative:function(){return new y(-this.x,-this.y,-this.z)},add:function(r){return r instanceof y?new y(this.x+r.x,this.y+r.y,this.z+r.z):new y(this.x+r,this.y+r,this.z+r)},subtract:function(r){return r instanceof y?new y(this.x-r.x,this.y-r.y,this.z-r.z):new y(this.x-r,this.y-r,this.z-r)},multiply:function(r){return r instanceof y?new y(this.x*r.x,this.y*r.y,this.z*r.z):new y(this.x*r,this.y*r,this.z*r)},divide:function(r){return r instanceof y?new y(this.x/r.x,this.y/r.y,this.z/r.z):new y(this.x/r,this.y/r,this.z/r)},equals:function(r){return this.x==r.x&&this.y==r.y&&this.z==r.z},dot:function(r){return this.x*r.x+this.y*r.y+this.z*r.z},cross:function(r){return new y(this.y*r.z-this.z*r.y,this.z*r.x-this.x*r.z,this.x*r.y-this.y*r.x)},length:function(){return Math.sqrt(this.dot(this))},unit:function(){return this.divide(this.length())},min:function(){return Math.min(Math.min(this.x,this.y),this.z)},max:function(){return Math.max(Math.max(this.x,this.y),this.z)},toAngles:function(){return{theta:Math.atan2(this.z,this.x),phi:Math.asin(this.y/this.length())}},angleTo:function(r){return Math.acos(this.dot(r)/(this.length()*r.length()))},toArray:function(r){return[this.x,this.y,this.z].slice(0,r||3)},clone:function(){return new y(this.x,this.y,this.z)},init:function(r,s,e){return this.x=r,this.y=s,this.z=e,this}},y.negative=function(r,s){return s.x=-r.x,s.y=-r.y,s.z=-r.z,s},y.add=function(r,s,e){return s instanceof y?(e.x=r.x+s.x,e.y=r.y+s.y,e.z=r.z+s.z):(e.x=r.x+s,e.y=r.y+s,e.z=r.z+s),e},y.subtract=function(r,s,e){return s instanceof y?(e.x=r.x-s.x,e.y=r.y-s.y,e.z=r.z-s.z):(e.x=r.x-s,e.y=r.y-s,e.z=r.z-s),e},y.multiply=function(r,s,e){return s instanceof y?(e.x=r.x*s.x,e.y=r.y*s.y,e.z=r.z*s.z):(e.x=r.x*s,e.y=r.y*s,e.z=r.z*s),e},y.divide=function(r,s,e){return s instanceof y?(e.x=r.x/s.x,e.y=r.y/s.y,e.z=r.z/s.z):(e.x=r.x/s,e.y=r.y/s,e.z=r.z/s),e},y.cross=function(r,s,e){return e.x=r.y*s.z-r.z*s.y,e.y=r.z*s.x-r.x*s.z,e.z=r.x*s.y-r.y*s.x,e},y.unit=function(r,s){var e=r.length();return s.x=r.x/e,s.y=r.y/e,s.z=r.z/e,s},y.fromAngles=function(r,s){return new y(Math.cos(r)*Math.cos(s),Math.sin(s),Math.sin(r)*Math.cos(s))},y.randomDirection=function(){return y.fromAngles(Math.random()*Math.PI*2,Math.asin(Math.random()*2-1))},y.min=function(r,s){return new y(Math.min(r.x,s.x),Math.min(r.y,s.y),Math.min(r.z,s.z))},y.max=function(r,s){return new y(Math.max(r.x,s.x),Math.max(r.y,s.y),Math.max(r.z,s.z))},y.lerp=function(r,s,e){return s.subtract(r).multiply(e).add(r)},y.fromArray=function(r){return new y(r[0],r[1],r[2])},y.angleBetween=function(r,s){return r.angleTo(s)},t}();class Te{constructor({tx:t=0,ty:n=0,zoom:c=4,ax:u=-25,ay:p=-200,az:T=0,fov:R=45}){this.tx=t,this.ty=n,this.zoom=c,this.ax=u,this.ay=p,this.az=T,this.fov=R}}const Fe=.3,Pe=.15,Me=1,dt=10,qe=Math.ceil(dt/4),Ye=10,we=`
    uniform float wr;
    #define sqrt_2_PI 2.50662827
    #define PI 3.1415926536
    uniform sampler2D swimmersAttributesTexture;
    const int SWIMMERS_NUM_ATTRIBUTES = 4;
    const vec2 TEXTURE_SIZE = vec2(`+qe+", "+Ye+`);
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
        duration = 5.;
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
`,je=200,ht=`
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
#define MAX_SPARKS `+je+`
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

`;var Ee,Ke;class _e{constructor(t,n,c,u){xe(this,Ee);if(this.gl=t,this.calibration=c,this.copyVideo=!1,this.show=!1,this.videoStartTime=u,t===null){alert("Unable to initialize WebGL. Your browser or machine may not support it.");return}t.clearColor(0,0,0,1),t.clear(t.COLOR_BUFFER_BIT),this.shader=new v.Shader(`
    out highp vec2 vTextureCoord;
    out vec3 waterNormal;
    out vec3 sparkPlaneNormal;
    out vec3 sparkDirection;
    out vec2 posScreen;

    uniform float ratio_screen;
    uniform float dx_screen;

    void main(void) {
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
    uniform bool sparksEnabled;
    uniform vec3 poolSize;
    uniform bool thresholdBlending;
    uniform float blendingThreshold;
    uniform float opacity;
    uniform float distanceFixed;
    uniform bool hideObstructions;
    uniform float hideObstructionThreshold;

    `+ht+we+`

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
        // if (max(max(texelColor.r, texelColor.g), texelColor.b) < .2){
        //     fragColor = vec4(0., 0., 0., 0.);
        //     return;
        // }
        
        vec3 waterColor = vec3(.294, .812, 1.);
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
`),this.mesh=v.Mesh.plane({width:2,height:2,coords:!0,normals:!0}),this.mesh.transform(v.Matrix.rotate(90,1,0,0)),this.mesh.transform(v.Matrix.translate(0,.1,0)),this.programInfo=null,this.texture=this.initTexture(),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!0),n!=""&&(this.video=this.setupVideo(n))}render(){const t=o.params.visualizations.sparks,n=o.params.simulation.poolSize;if(!o.params.video.show)return;this.copyVideo&&this.updateTexture(),(!this.mesh.vertexBuffers||!this.mesh.vertexBuffers.vertex)&&this.mesh.compile(),this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture);const u=16*this.gl.canvas.height/9,p=(this.gl.canvas.width-u)/2;O.swimmersAttributesTexture&&O.swimmersAttributesTexture.bind(1),this.shader.uniforms({ratio_screen:u/this.gl.canvas.width,dx_screen:p/this.gl.canvas.width,uSampler:0,swimmersHelperFunctions:1,screen:4,iTime:o.getRaceTime(),poolSize:[n.x,n.y,n.z],iResolution:[this.gl.canvas.width,this.gl.canvas.height],sparksEnabled:t.enabled,sparksGlow:t.glow,sparksGlowOffset:t.glowOffset,sparksStroke:t.stroke,sparksNumber:t.num,sparksLengthFactor:t.lengthFactor,sparksSizeFactor:t.sizeFactor,fov:t.fov,thresholdBlending:o.params.video.thresholdBlending,blendingThreshold:o.params.video.blendingThreshold,opacity:o.params.video.opacity,distanceFixed:o.distanceFixed,hideObstructions:o.params.video.hideObstructions,hideObstructionThreshold:o.params.video.hideObstructionThreshold}).draw(this.mesh),this.gl.disable(this.gl.BLEND),this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height)}setTime(t){this.copyVideo&&(this.video.currentTime=t)}initTexture(){const t=this.gl.createTexture();this.gl.bindTexture(this.gl.TEXTURE_2D,t);const n=0,c=this.gl.RGBA,u=1,p=1,T=0,R=this.gl.RGBA,P=this.gl.UNSIGNED_BYTE,L=new Uint8Array([0,0,255,255]);return this.gl.texImage2D(this.gl.TEXTURE_2D,n,c,u,p,T,R,P,L),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),t}updateTexture(){const n=this.gl.RGBA,c=this.gl.RGBA,u=this.gl.UNSIGNED_BYTE;this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture),this.gl.texImage2D(this.gl.TEXTURE_2D,0,n,c,u,this.video)}setupVideo(t){const n=document.createElement("video");let c=!1,u=!1;n.playsInline=!0,n.muted=!0,n.loop=!1,n.addEventListener("playing",()=>{c=!0,T()},!0),n.addEventListener("timeupdate",()=>{u=!0,T()},!0),n.src=t,n.play();const p=this,T=()=>{c&&u&&(p.copyVideo=!0,n.paused||$(this,Ee,Ke).call(this))};return n}}Ee=new WeakSet,Ke=function(){this.hasPausedFirstTime||(this.hasPausedFirstTime=!0,this.video.pause())};class be{constructor(t,{poolSize:n=new GL.Vector(2,2),waterResolution:c=new GL.Vector(256,256),thresholdBlending:u=!1,numSwimmers:p=1,dataFolder:T=null}){this.title=t,this.videos=[],this.poolSize=n,this.waterResolution=c,this.numSwimmers=p,this.thresholdBlending=u,this.dataFolder=T}addVideo(t){this.videos.push(t)}async parseData(t){for(let n=0;n<t.length;n++)await t[n].parseData(this.dataFolder+n+".csv")}}const ke=new v.Vector(0,-4,0);class pe{constructor(t,n){this.initCenter=new v.Vector(t.x,t.y,t.z),this.center=new v.Vector(t.x,t.y,t.z),this.oldCenter=new v.Vector(t.x,t.y,t.z),this.radius=n,this.cinematic=!1,this.velocity=new v.Vector(0,0,0),this.acceleration=new v.Vector(0,0,0),this.mass=4/3*Math.PI*Math.pow(n,3)*1e3,this.invMass=1/this.mass,this.radiusSquared=n*n,this.mesh=v.Mesh.sphere({detail:10}),this.followTarget=!1,this.showStreak=!1}spawnSplashes(t){if(!o.params.simulation.splashes.enabled&&!o.params.visualizations.showStreaks)return;const n=this.center.subtract(this.oldCenter).multiply(1/t),c=n.z>0?-Math.PI/2:Math.PI/2,u=n.dot(n),p=this.center.subtract(this.velocity.unit());p.y=.15,o.params.simulation.splashes.enabled&&this.center.x<100&&Math.abs(this.center.y)<=this.radius&&o.splashParticles.spawnSplash(p,c,Math.sqrt(u),o.params.simulation.splashes.strengthThreshold),o.params.visualizations.showStreaks&&this.showStreak&&this.velocity.length()>.01&&o.splashParticles.spawnSplash(this.center,0,(this.velocity.length()-1.6)/.9,0,!0)}update(t){if(this.moved||(this.oldCenter=new v.Vector(this.center.x,this.center.y,this.center.z)),this.moved=!1,this.cinematic){if(this.followTarget||(this.velocity=new v.Vector(0,0,0)),!this.targetPos||!this.followTarget)return;let n=t/this.targetTime;n=Math.min(Math.max(n,0),1),this.center=this.center.multiply(1-n).add(this.targetPos.multiply(n)),this.velocity=this.center.subtract(this.oldCenter).multiply(1/t),this.targetTime-=t,this.targetTime<0&&(this.targetPos=null)}else{const n=Math.max(0,Math.min(1,(this.radius-this.center.y)/(2*this.radius))),c=ke.multiply(-o.params.simulation.buoyancyFactor*this.mass*n),u=this.velocity.unit().multiply(-1e3*this.radiusSquared*n*this.velocity.dot(this.velocity));this.addForce(u),this.addForce(c),this.addForce(ke.multiply(this.mass)),this.velocity=this.velocity.add(this.acceleration.multiply(t)),this.acceleration=new v.Vector(0,0,0),this.center=this.center.add(this.velocity.multiply(t)),this.center.y<this.radius-o.params.simulation.poolSize.y&&(this.center.y=this.radius-1,this.velocity.y=Math.abs(this.velocity.y)*.7)}}setTarget(t,n){this.targetPos=t,this.targetTime=n}addForce(t){this.cinematic?console.warn("Trying to add force to a cinematic sphere."):this.acceleration=this.acceleration.add(t.multiply(this.invMass))}move(t){this.moved=!0,this.oldCenter=new v.Vector(this.center.x,this.center.y,this.center.z),this.center=new v.Vector(t.x,t.y,t.z),this.cinematic||console.warn("Moving a non cinematic sphere.")}}class mt{constructor(){this.mesh=new v.Mesh.plane({width:2,height:2,coords:!0,normals:!0}),this.waterTexture=null,this.shader=new v.Shader(`
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
        `)}updateFoam(t){if(!this.waterTexture){console.log("NO WATER TO UPDATE FOAM");return}this.foamTexNext.swapWith(this.foamTexPrev),this.foamTexNext.drawTo(()=>{this.foamTexPrev.bind(0),o.water.textureA.bind(1),this.shader.uniforms({foamTexPrev:0,water:1,dt:t,seed:o.time,poolSize:[o.params.simulation.poolSize.x,o.params.simulation.poolSize.y,o.params.simulation.poolSize.z],timeVariation:o.params.simulation.foam.timeVariation,spaceVariation:o.params.simulation.foam.spaceVariation,velThreshold:o.params.simulation.foam.velThreshold,velMax:o.params.simulation.foam.velMax,dispersion:o.params.simulation.foam.dispersion,attenuation:o.params.simulation.foam.attenuation}).draw(this.mesh)})}resetTextures(t,n,c){this.foamTexPrev=new v.Texture(t,n,{type:o.gl.FLOAT,filter:o.gl.LINEAR}),this.foamTexNext=new v.Texture(t,n,{type:o.gl.FLOAT,filter:o.gl.LINEAR}),this.waterTexture=c}}function ae(a,t=null){this.gl=a,this.visualizationWavesEnabled=!0,this.sqrt_2_PI=Math.sqrt(2*Math.PI),this.foam=new mt;var n=`
    out vec2 coord;
    uniform vec2 invPoolSizeVertex;
    void main() {
      coord = gl_Vertex.xy * invPoolSizeVertex + 0.5;
      gl_Position = vec4(gl_Vertex.xy * 2. * invPoolSizeVertex, 0., 1.0);
    }
  `;this.reset(t),v.Texture.canUseFloatingPointTextures(),this.dropShader=new v.Shader(n,`
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
  `),this.updateShader=new v.Shader(n,`
    uniform sampler2D tex;
    uniform vec2 delta;
    uniform float prev_wr;
    uniform float damping;
    uniform float sqrt_2_PI;
    uniform vec3 poolSize;
    `+we+`
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
  `),this.normalShader=new v.Shader(n,`
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
  `),this.sphereShader=new v.Shader(`
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
  `),this.visualizationWavesShader=new v.Shader(n,`
    uniform sampler2D tex;
    uniform bool add;
    uniform vec3 poolSize;
    uniform bool showWR;
    uniform bool showDivingDistance;
    in vec2 coord;
    out vec4 fragColor;
    uniform float t;

    `+we+`

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
      if (time < 0.) {
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
    `)}ae.prototype.resetTextures=function(){const a=this.gl;this.textureA&&a.deleteTexture(this.textureA.id),this.textureB&&a.deleteTexture(this.textureB.id),this.textureA=new v.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:t}),this.textureB=new v.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:t}),this.foam.resetTextures(this.W,this.H,this.textureA),this.areaConservationTexture=new v.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:t}),this.showAreaConservedGrid=!1,this.showProjectionGrid=!1,this.invPoolSize=new v.Vector(1/o.params.simulation.poolSize.x,1/o.params.simulation.poolSize.y,1/o.params.simulation.poolSize.z);var t=v.Texture.canUseFloatingPointLinearFiltering()?this.gl.LINEAR:this.gl.NEAREST;(!this.textureA.canDrawTo()||!this.textureB.canDrawTo())&&v.Texture.canUseHalfFloatingPointTextures()&&(console.log("No draw"),t=v.Texture.canUseHalfFloatingPointLinearFiltering()?this.gl.LINEAR:this.gl.NEAREST,this.textureA=new v.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:t}),this.textureB=new v.Texture(this.W,this.H,{type:this.gl.FLOAT,filter:t}))};ae.prototype.reset=function(a=null){this.WR_position=1e5,this.prev_WR_position=0,a!==null?(console.log("resolution.y : "+a.y),this.W=Math.round(a.x),this.H=Math.round(a.y),console.log("Using custom resolution:",this.W,this.H)):(this.W=256,this.H=256),O.reset(new v.Vector(this.W,this.H)),this.plane=v.Mesh.plane({detail:255,width:o.params.simulation.poolSize.x,height:o.params.simulation.poolSize.z}),this.delta=new v.Vector(1/this.W,1/this.H),this.resetTextures()};ae.prototype.addDrop=function(a,t,n,c){var u=this;this.textureB.drawTo(function(){u.textureA.bind(),u.dropShader.uniforms({invPoolSizeVertex:[u.invPoolSize.x,u.invPoolSize.z],center:[a,t],radius:n,strength:c,poolSize:[o.params.simulation.poolSize.x,o.params.simulation.poolSize.y,o.params.simulation.poolSize.z]}).draw(u.plane)}),this.textureB.swapWith(this.textureA)};ae.prototype.addOrRemoveVisualizationWaves=function(a){if(this.prev_WR_position=this.WR_position,this.WR_position=o.getRaceTime()*2.155,this.WR_position>o.params.simulation.poolSize.z&&(this.WR_position=2*o.params.simulation.poolSize.z-this.WR_position),!(!this.visualizationWavesEnabled||!O.raceHasStarted)){var n=this;this.textureB.drawTo(function(){n.textureA.bind();const c=O.getAttributesTexture();c&&c.bind(1),n.visualizationWavesShader.uniforms({swimmersAttributesTexture:1,showDivingDistance:o.params.visualizations.showDivingDistance,showWR:o.params.visualizations.showWR,invPoolSizeVertex:[n.invPoolSize.x,n.invPoolSize.z],poolSize:[o.params.simulation.poolSize.x,o.params.simulation.poolSize.y,o.params.simulation.poolSize.z],wr:n.WR_position,sqrt_2_PI:n.sqrt_2_PI,add:a,swimmersNumber:o.swimmers.length,time:o.getRaceTime(),t:o.time,amplitudeFactor:o.params.quiver.amplitudeFactor,frequencyFactor:o.params.quiver.frequencyFactor,amplitude:o.params.quiver.amplitude,omega0:o.params.quiver.omega,waveLength0:o.params.quiver.waveLength}).draw(n.plane)}),this.textureB.swapWith(this.textureA)}};ae.prototype.updateSpheres=function(a){if(o.params.simulation.optimized)O.attributes.draw(),this.textureB.drawTo(()=>{this.textureA.bind(),O.bindDisplacementTexture(1),O.bindOldDisplacementTexture(2),this.sphereShader.uniforms({oldDisplacementTexture:2,displacementTexture:1,invPoolSizeVertex:[this.invPoolSize.x,this.invPoolSize.z],poolSize:[o.params.simulation.poolSize.x,o.params.simulation.poolSize.y,o.params.simulation.poolSize.z],optimized:!0}).draw(this.plane),this.textureB.swapWith(this.textureA),O.attributes.draw()});else{const t=[];o.swimmers.forEach(n=>n.spheres.forEach(c=>t.push(c)));for(let n=0;n<t.length;n++){const c=t[n];this.moveSphere(c.oldCenter,c.center,c.radius)}}};ae.prototype.moveSphere=function(a,t,n){var c=this;this.textureB.drawTo(function(){c.textureA.bind(),c.sphereShader.uniforms({invPoolSizeVertex:[c.invPoolSize.x,c.invPoolSize.z],oldCenter:a,newCenter:t,radius:n,poolSize:[o.params.simulation.poolSize.x,o.params.simulation.poolSize.y,o.params.simulation.poolSize.z],optimized:!1}).draw(c.plane)}),this.textureB.swapWith(this.textureA)};ae.prototype.stepSimulation=function(a){var t=this;this.textureB.drawTo(function(){t.textureA.bind();const n=O.getAttributesTexture();n&&n.bind(2),t.updateShader.uniforms({swimmersAttributesTexture:2,swimmersNumber:o.swimmers.length,invPoolSizeVertex:[t.invPoolSize.x,t.invPoolSize.z],delta:[t.delta.x,t.delta.y],time:o.time,wr:t.WR_position,prev_wr:t.prev_WR_position,poolSize:[o.params.simulation.poolSize.x,o.params.simulation.poolSize.y,o.params.simulation.poolSize.z],sqrt_2_PI:t.sqrt_2_PI,damping:o.params.simulation.waterDamping}).draw(t.plane)}),this.textureB.swapWith(this.textureA),o.params.simulation.foam.enabled&&this.foam.updateFoam(a),this.updateAreaConservation()};ae.prototype.updateNormals=function(){var a=this;this.textureB.drawTo(function(){a.textureA.bind(),a.normalShader.uniforms({invPoolSizeVertex:[a.invPoolSize.x,a.invPoolSize.z],delta:[a.delta.x,a.delta.y]}).draw(a.plane)}),this.textureB.swapWith(this.textureA)};ae.prototype.updateAreaConservation=function(){if(!o.params.visualizations.areaConservationEnabled)return;var a,t,n;if(this.textureA.type===this.gl.FLOAT)a=this.gl.FLOAT,t=Float32Array,n="EXT_color_buffer_float";else if(this.textureA.type===this.gl.HALF_FLOAT_OES)a=this.gl.HALF_FLOAT_OES,t=Uint16Array,n="EXT_color_buffer_half_float";else{console.warn("Unsupported texture type for reading");return}if(!this.gl.getExtension(n)){console.warn(n+" not available; cannot read pixels");return}this.fb||(this.fb=this.gl.createFramebuffer()),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.fb),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,this.textureA.id,0);const c=this.gl.checkFramebufferStatus(this.gl.FRAMEBUFFER);if(c!==this.gl.FRAMEBUFFER_COMPLETE){console.error("Framebuffer incomplete: "+c+" for texture type "+this.textureA.type),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null);return}this.gl.pixelStorei(this.gl.PACK_ALIGNMENT,1);const u=new t(this.W*this.H*4),p=new Float32Array(this.W*this.H*4);this.gl.readPixels(0,0,this.W,this.H,this.gl.RGBA,a,u);for(let D=0;D<this.W;D++)p[D*4+1]=1;const T=o.params.simulation.poolSize.x/this.W,R=o.params.simulation.poolSize.z/this.H,P=T*T,L=R*R;if(this.textureA.type===this.gl.FLOAT){for(let D=0;D<this.H;D+=1)for(let E=0;E<this.W;E+=1){const V=(D*this.W+E)*4,k=((this.H-1-D)*this.W+E)*4,x=p[k],b=p[k+1];if(E+1<this.W){const C=u[V]-u[V+4],N=Math.sqrt(C*C+P);p[k+4]=x+N}if(D+1<this.H){const C=u[V]-u[V+this.W*4],N=Math.sqrt(C*C+L);p[k-4*this.W+1]=b+N}}this.gl.bindTexture(this.gl.TEXTURE_2D,this.areaConservationTexture.id),this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT,1),this.gl.texSubImage2D(this.gl.TEXTURE_2D,0,0,0,this.W,this.H,this.gl.RGBA,this.gl.FLOAT,p)}this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.bindTexture(this.gl.TEXTURE_2D,null)};const ut=`#version 300 es
    in vec3 pos;
    in float life;
    in float size;
    in float color;

    out float vLife;
    out float vColor;
    out float altitude;

    uniform mat4 MVM;
    uniform mat4 projection;

    void main() {
        vec4 posInView = MVM * vec4(pos, 1.);
        gl_Position = projection * posInView;
        // gl_Position = vec4(0., 0., 0., 1.);
        gl_PointSize = size * 5000. / -posInView.z;

        if (color > .01) gl_PointSize = 500. / -posInView.z;

        vLife = life;
        vColor = min(color, 1.);
        altitude = pos.y;
    }

`,ft=`#version 300 es
    precision mediump float;

    in float vLife;
    in float vColor;
    in float altitude;

    out vec4 fragColor;

    float max3(vec3 v) {
        return max(max(v.x, v.y), v.z);
    }

    void main() {
        vec3 col = vec3(1., 1., 1.);
        if (vColor > 0.01) {
            col = vec3(vColor, 0., 1. - vColor);
            col /= max3(col);
        }
        vec2 uv = gl_PointCoord - 0.5;

        float d = length(uv);

        // soft circle
        float alpha = smoothstep(0.5, 0.0, d);

        // fade with life
        alpha *= vLife;

        if (altitude < 0. && vColor > 0.01) alpha /= -altitude*10.;

        if (vColor < 0.01 && altitude < 0.) alpha /= (1.-altitude)*10.;

        if (vLife > 1.) alpha = 0.;
        fragColor = vec4(col, alpha);
    }

`,pt=-9.8,Oe=.01;class Ve{constructor(t,n,c,u=0){this.pos=t,this.vel=n,this.fixed=c,this.color=u,this.life=1,this.size=Math.random()*.05+.02}update(t){if(this.fixed){this.life-=t*.15;return}this.life-=t*1.5,this.vel.y+=pt*t,this.pos=this.pos.add(this.vel.multiply(t)),this.vel=this.vel.multiply(1-Oe),this.size*=1-Oe}}class vt{constructor(t){this.gl=t,this.particles=[],this.particleBuffer=this.gl.createBuffer(),this.initPrograms()}spawnSplash(t,n,c,u,p=!1){if(p){const R=new v.Vector(0,0,0),P=new Ve(t,R,p,c);P.life=1.1,this.particles.push(P);return}const T=Math.min(10,c*20);for(let R=0;R<T;R++){const P=(Math.random()-.5)*Math.PI,L=Math.random()*2*Math.PI,D=.5+Math.random(),E=new v.Vector(Math.sin(P)*Math.cos(L)*D,Math.cos(P)*D,Math.sin(P)*Math.sin(L)*D);this.particles.push(new Ve(t,E,p))}}update(t){this.particles.forEach((n,c)=>{n.update(t),n.life<=0&&this.particles.splice(c,1)})}buildShader(t,n){const c=this.gl.createShader(n);return this.gl.shaderSource(c,t),this.gl.compileShader(c),c}createProgram(t){const n=this.gl.createProgram();return t.forEach(c=>{this.gl.attachShader(n,c)}),this.gl.linkProgram(n),n}checkShaders(t,n,c){this.gl.getShaderParameter(t,this.gl.COMPILE_STATUS)||console.error(this.gl.getShaderInfoLog(t)),this.gl.getShaderParameter(n,this.gl.COMPILE_STATUS)||console.error(this.gl.getShaderInfoLog(n)),this.gl.getProgramParameter(c,this.gl.LINK_STATUS)||console.error(this.gl.getProgramInfoLog(c))}buildProgram(t,n){const c=this.buildShader(t,this.gl.VERTEX_SHADER),u=this.buildShader(n,this.gl.FRAGMENT_SHADER),p=this.createProgram([c,u]);return this.checkShaders(c,u,p),p}initPrograms(){this.program=this.buildProgram(ut,ft)}draw(t){const n=this.gl;n.enable(n.BLEND),n.blendFunc(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA);const c=[];this.particles.forEach(N=>{const U=N.pos;c.push(U.x,U.y,U.z,N.life,N.size,N.color)}),n.bindBuffer(n.ARRAY_BUFFER,this.particleBuffer),n.bufferData(n.ARRAY_BUFFER,new Float32Array(c),n.DYNAMIC_DRAW),n.useProgram(this.program);const u=n.getUniformLocation(this.program,"MVM"),p=new Float32Array(n.modelviewMatrix.m);n.uniformMatrix4fv(u,!0,p);const T=n.getUniformLocation(this.program,"projection"),R=new Float32Array(n.projectionMatrix.m);n.uniformMatrix4fv(T,!0,R);const P=n.getAttribLocation(this.program,"pos"),L=n.getAttribLocation(this.program,"life"),D=n.getAttribLocation(this.program,"size"),E=n.getAttribLocation(this.program,"color"),V=n.FLOAT,k=!1,x=4,b=6*x;let C=0;n.bindBuffer(n.ARRAY_BUFFER,this.particleBuffer),n.vertexAttribPointer(P,3,V,k,b,C),n.enableVertexAttribArray(P),C=3*x,n.vertexAttribPointer(L,1,V,k,b,C),n.enableVertexAttribArray(L),C=4*x,n.vertexAttribPointer(D,1,V,k,b,C),n.enableVertexAttribArray(D),C=5*x,n.vertexAttribPointer(E,1,V,k,b,C),n.enableVertexAttribArray(E),n.drawArrays(n.POINTS,0,this.particles.length),n.disable(n.BLEND)}}function Ue(a){const t={};for(let n=0;n<a.length;n++)t[a[n]]=n;return t}const oe=new v.Vector(1e3,0,-1e3),Ge=["none","only medals","all"],We=["neighbours","per swimmer"],gt=["none","cycle frequency","speed","acceleration"],xt={none:{value:0,name:"PARAMETER_NONE"},"cycle frequency":{value:1,name:"PARAMETER_CYCLES"},speed:{value:2,name:"PARAMETER_SPEED"},acceleration:{value:3,name:"PARAMETER_ACCELERATION"}},wt=["realistic","height field","lambert","toon"],yt={realistic:{value:0,name:"RENDERING_REALISTIC"},"height field":{value:1,name:"RENDERING_HEIGHT_FIELD"},lambert:{value:2,name:"RENDERING_LAMBERT"},toon:{value:3,name:"RENDERING_TOON"}};var ie,Ze,$e,De,Je;class Et{constructor(){xe(this,ie);this.params={numSteps:2,fov:45,visualizations:{enabled:!0,showFlags:!1,showWR:!1,showSpeed:!1,showDivingDistance:!0,showFinishTimes:!1,showStreaks:!1,customWaterPerturbation:"none",waterColorParameter:"none",customParametersList:gt,customParametersDict:xt,PARAMETER_NONE:"none",PARAMETER_CYCLES:"cycle frequency",PARAMETER_SPEED:"speed",PARAMETER_ACCELERATION:"acceleration",showSwimmersLines:"none",swimmersLinesList:Ge,showSwimmersLinesDict:Ue(Ge),swimmersLinesMode:"neighbours",swimmersLinesModeList:We,swimmersLinesModeDict:Ue(We),medalsModeBeforeFinish:"none",medalsModesDict:{none:0,stars:1,bright:2,lanes:3},medalsModeAfterFinish:"none",areaConservationEnabled:!0,rendering:"realistic",renderingList:wt,renderingDict:yt,transitionBeginTime:null,shadow:{enabled:!0,shadowRadius:.5,shadowPower:.5,showCircle:!0,circleRadius:.6,circleStroke:.15},sparks:{enabled:!1,glow:5,glowOffset:.5,lengthFactor:1,stroke:.01,num:40,sizeFactor:50,fov:Math.PI/4}},swimmers:{showSpheres:!0,useTracking:!1},video:{thresholdBlending:!1,blendingThreshold:.41,show:!1,opacity:1,hideObstructions:!1,hideObstructionThreshold:.2},simulation:{optimized:!1,waterDamping:.02,poolSize:new v.Vector(4,1,4),buoyancyFactor:1.1,foam:{enabled:!0,velThreshold:.35,velMax:3.5,dispersion:.015,timeVariation:2.5,spaceVariation:8,attenuation:.015},splashes:{enabled:!0,strengthThreshold:2}},quiver:{amplitudeFactor:.78,frequencyFactor:1.2,amplitude:.1,omega:2,waveLength:1},cornerView:{show:!0},chronoPhotography:{available:!1}},this.resolution=new v.Vector(256,256),this.gl=v.create({preserveDrawingBuffer:!0}),this.gl.canvas.tabIndex=0,this.originalVisParams=JSON.parse(JSON.stringify(this.params.visualizations)),delete this.originalVisParams.shadow,delete this.originalVisParams.sparks,this.useConfigFile=!0,this.time=0,this.swimmers=[],this.translateX=0,this.translateY=0,this.zoomDistance=4,this.angleX=-25,this.angleY=-200.5,this.angleZ=0,this.water=null;const t=new be("—",{poolSize:new v.Vector(2,1,2),waterResolution:new v.Vector(256,256),numSwimmers:1}),n=new Te({});t.addVideo(new _e(this.gl,"",n));const c=new be("100m freestyle",{poolSize:new v.Vector(25,2,50),waterResolution:new v.Vector(1024,2048),numSwimmers:10,thresholdBlending:!0,dataFolder:"./assets/race-data/"}),u=new Te({tx:-.53,ty:1.25,zoom:47.86,ax:-29,ay:-260.5,az:-5,fov:39.98});c.addVideo(new _e(this.gl,"swimming-race.mp4",u,16.5)),this.currentVideo=c.videos[0];const p=new be("synchronized swimming",{poolSize:new v.Vector(25,2,30),waterResolution:new v.Vector(1024,2048),numSwimmers:2,dataFolder:"./assets/synchronized-swimming-data/"}),T=new Te({tx:-1.32,ty:.4,zoom:32.41,ax:-18,ay:-291.5,az:1,fov:42.8});p.addVideo(new _e(this.gl,"synchronized-swimming.mp4",T,17.5)),this.scenesList=[t,c,p],this.scenes={},this.scenesList.forEach(R=>this.scenes[R.title]=R),this.currentScene=t,this.paused=!1,this.configPlayButton(),this.transitions={},this.playingDemo=!1,this.renderWater=!0,this.renderCube=!0,this.spheresRadiusCoeff=1,this.distanceFixed=0,this.chronoFrameBuffer=this.gl.createFramebuffer(),this.drawingFrameBuffer=null,this.drawingTexture=this.gl.createTexture(),this.resetDrawingTexture(),this.cornerView=!1,this.splashParticles=new vt(this.gl)}resetDrawingTexture(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.chronoFrameBuffer),this.gl.bindTexture(this.gl.TEXTURE_2D,this.drawingTexture);const t=this.gl.canvas.width,n=this.gl.canvas.height;this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,t,n,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,null),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,this.drawingTexture,0);const c=this.gl.createRenderbuffer();this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,c),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,this.gl.DEPTH_COMPONENT16,t,n),this.gl.framebufferRenderbuffer(this.gl.FRAMEBUFFER,this.gl.DEPTH_ATTACHMENT,this.gl.RENDERBUFFER,c),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null)}configStopButton(){this.stopButton=document.getElementById("stop-button"),this.stopButton.addEventListener("click",()=>{this.stopRace()})}configPlayButton(){this.configStopButton(),this.playButton=document.getElementById("play-button"),this.playButton.addEventListener("click",()=>{this.playButton.textContent=="pause"?this.pause():(O.raceHasStarted||this.startRace(),this.play())})}setCalibration(t){this.translateX=t.tx,this.translateY=t.ty,this.zoomDistance=t.zoom,this.angleX=t.ax,this.angleY=t.ay,this.angleZ=t.az,this.params.fov=t.fov,this.gl.matrixMode(this.gl.PROJECTION),this.gl.loadIdentity(),this.gl.perspective(this.params.fov,this.gl.canvas.width/this.gl.canvas.height,.01,100),this.gl.matrixMode(this.gl.MODELVIEW)}async setScene(t){if(console.log("SET SCENE : "+t),this.currentScene=this.scenes[t],this.currentScene){const n=document.getElementById("time-slider-container");this.currentVideo=this.currentScene.videos[0],this.params.video.show=!!this.currentVideo.video,this.params.swimmers.showSpheres=!this.currentVideo.video,n.hidden=!this.currentVideo.video,this.currentScene.title!="—"?this.params.simulation.waterDamping=.1:this.params.simulation.waterDamping=.02;const c=this.currentScene.numSwimmers;if(console.log("num swimmers : "+c),this.swimmers.length!=c){for(let u=this.swimmers.length;u<c;u++){const p=new O(new v.Vector(0,0,0));this.swimmers.push(p)}for(let u=this.swimmers.length;u>c;u--)this.swimmers=this.swimmers.slice(1);this.swimmers.forEach(u=>u.waterDamping=this.params.simulation.waterDamping)}this.params.swimmers.useTracking=!0,await this.currentScene.parseData(this.swimmers),this.swimmers.forEach(u=>u.update(0)),console.log("scene name : "+this.currentScene.title),this.setCalibration(this.currentVideo.calibration),$(this,ie,Ze).call(this,this.currentScene.poolSize),this.resolution=this.currentScene.waterResolution,this.params.video.thresholdBlending=this.currentScene.thresholdBlending,this.currentScene.thresholdBlending?this.params.video.opacity=1:this.params.video.opacity=.5,this.params.visualizations.areaConservationEnabled=!1,this.stopRace(),this._reset(),this.params.simulation.optimized=!!this.currentVideo.video}}useGravity(t){O.useGravity=t;for(let n of o.swimmers)n.body.cinematic=!O.useGravity}isOneVisualizationEnabled(){return this.params.visualizations.showFlags||this.params.visualizations.medalsModeBeforeFinish!="none"||this.params.visualizations.medalsModeAfterFinish!="none"||this.params.visualizations.showWR||this.params.visualizations.showSpeed||this.params.visualizations.showDivingDistance}updateTime(t){this.time+=t,this._updateDistanceMarker&&this._updateDistanceMarker()}getRaceTime(){return O.raceHasStarted?this.time-this.currentVideo.videoStartTime:0}resetParams(){Object.entries(this.originalVisParams).forEach(t=>{const n=t[0],c=t[1];this.params.visualizations[n]=c}),this.params.visualizations.areaConservationEnabled=!1}updateEventIndex(){for(this.currentEventIndex=0;this.events[this.currentEventIndex]&&this.events[this.currentEventIndex].time<this.getRaceTime();)this.currentEventIndex++;this.currentEventIndex>0&&this.currentEventIndex--}setRaceTime(t){this.time=this.currentVideo.videoStartTime+t,this.currentVideo.video&&this.currentVideo.setTime(this.time),this.events&&(this.updateEventIndex(),this.resetParams())}showTexts(t){document.getElementById("h").hidden=!t,t?this.showCommands&&(document.getElementById("commands").hidden=!1):(this.showCommands=!document.getElementById("commands").hidden,document.getElementById("commands").hidden=!0)}startRace(){console.log("START RACE"),this.setRaceTime(-3),this.currentVideo.video&&this.currentVideo.video.play(),this.swimmers.forEach(t=>t.startRace()),O.raceHasStarted=!0,O.useGravity=!0,this.water.resetTextures(),this.water.WR_position=0,this.stopButton.hidden=!1,this._clearChronoTexture(this.gl.canvas.width,this.gl.canvas.height,this.gl),this.showTexts(!1)}stopRace(){this.paused&&this.play(),this.setRaceTime(0),this.currentVideo.video&&this.currentVideo.video.pause(),this.swimmers.forEach(t=>t.swim(!1)),O.raceHasStarted=!1,this.water.resetTextures(),this.playButton.textContent="play",this.stopButton.hidden=!0,this.showTexts(!0)}pause(){this.paused=!0,this.pauseVideo(),this.playButton.textContent="play"}play(){this.paused=!1,O.raceHasStarted&&(this.playVideo(),this.playButton.textContent="pause")}pauseVideo(){this.currentVideo.video&&this.currentVideo.video.pause()}playVideo(){this.currentVideo.video&&(this.currentVideo.video.play(),this.currentVideo.video.currentTime=this.time)}renderVideo(){this.currentVideo.video&&this.currentVideo.render()}parseConfigFile(t){fetch(t).then(n=>n.text()).then(n=>{this.events=JSON.parse(n),this.currentEventIndex=0,this._renderTimeline&&this._renderTimeline()})}updateTransitions(){Object.entries(this.transitions).forEach(t=>{const n=t[0],c=t[1],u=this.getRaceTime()-c.beginTime;if(u>c.duration){delete this.transitions[n];return}c.show?c.opacity=u/c.duration:c.opacity=1-u/c.duration})}updateParams(){if(!O.raceHasStarted||!this.events||!this.useConfigFile)return;const t=this.events[this.currentEventIndex];if(!t)return;let n=t.rankSwimmerToggle;if(n||(n=1),t.distance&&this.swimmers[n-1].getDistanceTraveled()>=t.distance||t.time!==void 0&&this.getRaceTime()>=t.time){this.currentEventIndex++;const c=t.transition&&t.transition.type=="dissolve";Object.entries(t.params).forEach(u=>{const p=u[0],T=u[1];p!=="transition"&&(c&&(T===!0||T===!1)&&(this.transitions[p]={opacity:1-1*T,show:T,beginTime:this.getRaceTime(),duration:t.transition.duration}),this.params.visualizations[p]=T)})}}chronoPhotography(){console.log("shoot"),this.distanceFixed=this.swimmers[0].getDistanceTraveled(),console.log("distance fixed : "+this.distanceFixed),this._fixTexture()}recalibrate(){this.currentVideo&&this.setCalibration(this.currentVideo.calibration)}async launchDemo(){console.log("Launch demo"),await this.setScene("100m freestyle"),this.params.video.show=!1,this.params.swimmers.showSpheres=!0,this.spheresRadiusCoeff=1,this.demoTime=0,this.swimmers.forEach(t=>t.body.move(oe)),this.swimmersShown=0,this.playingDemo=!0,this.useGravity(!0),this.params.simulation.buoyancyFactor=1.5,this.params.visualizations.shadow.enabled=!1,this.renderWater=!1,this.translateX=200,this._gui.hide(),document.getElementById("event-editor").hidden=!0,document.getElementById("time-slider-container").hidden=!0,document.getElementById("h").hidden=!0}stopDemo(){this.playingDemo=!1,this.setScene("—"),document.getElementById("event-editor").hidden=!1,document.getElementById("time-slider-container").hidden=!1,document.getElementById("h").hidden=!1,this.renderWater=!0,this.renderCube=!0,this.params.visualizations.shadow.enabled=!0,this._gui.show(),this.params.simulation.buoyancyFactor=1.1}updateDemo(t){if(!this.playingDemo)return;const n=this.demoTime;this.demoTime+=t;const c=2,u=1;if(n<=u){const x=$(this,ie,De).call(this,0,u,n);this.translateX=x*this.currentVideo.calibration.tx+(1-x)*200}else this.demoShowVideoTime||(this.angleY+=20*t);!this.renderCube&&n>.5&&(this.renderCube=!0);const p=1.5;if(!this.renderWater&&n>1.5&&(this.renderWater=!0),n>p&&n<p+.5)for(var T=0;T<10;T++)this.water.addDrop(Math.random()*2-1,Math.random()*2-1,.06,T&1?.6:-.6);$(this,ie,$e).call(this,n,c);const R=3,P=5;!O.raceHasStarted&&n>=R&&n<P&&(this.params.simulation.splashes.enabled=!1,this.swimmers.forEach(x=>{x.body.cinematic=!0;const b=new v.Vector(x.body.center.x,0,0),C=new v.Vector(x.body.center.x,1,-this.params.simulation.poolSize.z/2);x.body.move($(this,ie,Je).call(this,b,C,R,P,n))})),!O.raceHasStarted&&n>=P&&(this.params.simulation.buoyancyFactor=1.1,this.params.simulation.splashes.enabled=!0,this.params.visualizations.shadow.enabled=!0,this.startRace()),!this.demoShowVideoTime&&this.angleY>=this.currentVideo.calibration.ay+360&&(this.demoShowVideoTime=this.demoTime+1),!this.params.video.show&&this.demoShowVideoTime&&n>=this.demoShowVideoTime&&(this.params.video.show=!0,this.params.video.opacity=0);const L=2;this.params.video.show&&n<=this.demoShowVideoTime+L&&(this.params.video.opacity=(n-this.demoShowVideoTime)/L,console.log("opacity : "+this.params.video.opacity));const D=2;let E=null;this.demoShowVideoTime&&(E=this.demoShowVideoTime+L+D),this.params.video.show&&n>this.demoShowVideoTime+L&&n<E&&(this.spheresRadiusCoeff=1-(n-(this.demoShowVideoTime+L))/D);let V=null;E&&(V=E+.5);const k=2;V&&n>V&&n<V+k&&(this.params.video.hideObstructions=!0,this.params.video.hideObstructionThreshold=(n-V)/k*.5)}}ie=new WeakSet,Ze=function(t){console.log("SET POOL SIZE : "+t.z),this.params.simulation.poolSize.x=t.x,this.params.simulation.poolSize.y=t.y,this.params.simulation.poolSize.z=t.z},$e=function(t,n){const u=Math.floor((t-n)/.1);if(this.swimmersShown<10&&u>=this.swimmersShown){console.log("swimmers shown : "+this.swimmersShown),console.log("next index swimmer : "+u),console.log("num swimmers : "+this.swimmers.length);const p=this.params.simulation.poolSize.x,R=-p/2+p/20+u*p/10;this.swimmers[u].body.move(new v.Vector(R,.5,0)),this.swimmersShown++}},De=function(t,n,c){if(c<t)return 0;if(c>n)return 1;const u=(c-t)/(n-t);return 1-(Math.cos(u*Math.PI)+1)/2},Je=function(t,n,c,u,p){const T=$(this,ie,De).call(this,c,u,p);console.log("t norm : "+T);const R=(P,L,D,E=1)=>Math.pow(D,E)*L+(1-Math.pow(D,E))*P;return new v.Vector(R(t.x,n.x,T),R(t.y,n.y,T,20),R(t.z,n.z,T,2))};const o=new Et;o.parseConfigFile("./assets/vis-config.json");const Tt=`#version 300 es
    const float ARM_DELTA_X = float(`+Fe+`);
    const float FOOT_DELTA_X = float( `+Pe+`);
    const float FOOT_DELTA_Z = float( `+Me+`);
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

`,_t=`#version 300 es
    precision highp float;
    in float fragCyclePhase;
    in float fragAltitude;
    const float PI = 3.141592;
    out vec4 fragColor;
    void main() {
        fragColor = vec4(fragAltitude, fragCyclePhase / (2. * PI), 1., 1.);
    }
`,bt=`#version 300 es
    in vec2 iVertex;
    out vec2 fragCoord;
    void main() {
        fragCoord = iVertex * .5 + .5;
        gl_Position = vec4(iVertex.xy, 0., 1.);
    }
`,St=`#version 300 es
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
`,Rt=new Float32Array([-1,-1,1,-1,1,1,-1,1]),At=new Uint16Array([0,1,2,2,3,0]);var Q,Qe,fe,et;class zt{constructor(){xe(this,Q);this.numVecAttributes=qe,this.maxNumSwimmer=Ye,this.gl=o.gl;const t=this.gl.NEAREST;this.texture=new v.Texture(this.numVecAttributes,this.maxNumSwimmer,{type:this.gl.FLOAT,filter:t}),this.initPrograms(),this.indexBuffer=this.gl.createBuffer(),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.indexBuffer),this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER,At,this.gl.STATIC_DRAW),this.vboPlane=this.gl.createBuffer(),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vboPlane),this.gl.bufferData(this.gl.ARRAY_BUFFER,Rt,this.gl.STATIC_DRAW),this.vboPoints=this.gl.createBuffer()}update(){this.numSwimmers=o.swimmers.length;const t=5;this.swimmersAttributes=new Float32Array(this.numVecAttributes*4*this.maxNumSwimmer*t);const n=$(this,Q,Qe).call(this,o.swimmers);for(let c=0;c<o.swimmers.length;c++){const u=n[c];$(this,Q,et).call(this,c,u),$(this,Q,fe).call(this,o.swimmers.length+c,u.leftArm),$(this,Q,fe).call(this,2*o.swimmers.length+c,u.rightArm),$(this,Q,fe).call(this,3*o.swimmers.length+c,u.leftFoot),$(this,Q,fe).call(this,4*o.swimmers.length+c,u.rightFoot)}this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture.id),this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,!1),this.gl.texSubImage2D(this.gl.TEXTURE_2D,0,0,0,this.numVecAttributes,this.maxNumSwimmer,this.gl.RGBA,this.gl.FLOAT,this.swimmersAttributes),this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,!0),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vboPoints),this.gl.bufferData(this.gl.ARRAY_BUFFER,this.swimmersAttributes,this.gl.DYNAMIC_DRAW)}buildShader(t,n){const c=this.gl.createShader(n);return this.gl.shaderSource(c,t),this.gl.compileShader(c),c}createProgram(t){const n=this.gl.createProgram();return t.forEach(c=>{this.gl.attachShader(n,c)}),this.gl.linkProgram(n),n}checkShaders(t,n,c){this.gl.getShaderParameter(t,this.gl.COMPILE_STATUS)||console.error(this.gl.getShaderInfoLog(t)),this.gl.getShaderParameter(n,this.gl.COMPILE_STATUS)||console.error(this.gl.getShaderInfoLog(n)),this.gl.getProgramParameter(c,this.gl.LINK_STATUS)||console.error(this.gl.getProgramInfoLog(c))}createRenderingTexture(t,n){this.pointsTexture=new v.Texture(t,n,{type:this.gl.FLOAT,filter:this.gl.NEAREST}),this.pointsFrameBuffer=this.gl.createFramebuffer(),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.pointsFrameBuffer);const c=this.gl.COLOR_ATTACHMENT0;this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,c,this.gl.TEXTURE_2D,this.pointsTexture.id,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.horizontalPassTexture=new v.Texture(t,n,{type:this.gl.FLOAT,filter:this.gl.LINEAR}),this.horizontalPassFrameBuffer=this.gl.createFramebuffer(),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.horizontalPassFrameBuffer),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,c,this.gl.TEXTURE_2D,this.horizontalPassTexture.id,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null);const u=n/4,p=u,T=u;this.displacementTexture=new v.Texture(p,T,{type:this.gl.FLOAT,filter:this.gl.LINEAR}),this.displacementFrameBuffer=this.gl.createFramebuffer(),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.displacementFrameBuffer),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,c,this.gl.TEXTURE_2D,this.displacementTexture.id,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.oldDisplacementTexture=new v.Texture(p,T,{type:this.gl.FLOAT,filter:this.gl.LINEAR})}buildProgram(t,n){const c=this.buildShader(t,this.gl.VERTEX_SHADER),u=this.buildShader(n,this.gl.FRAGMENT_SHADER),p=this.createProgram([c,u]);return this.checkShaders(c,u,p),p}initPrograms(){this.programPoints=this.buildProgram(Tt,_t),this.programVolume=this.buildProgram(bt,St),this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height)}volumePass(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.horizontalPassFrameBuffer),this.gl.useProgram(this.programVolume);const t=this.gl.getAttribLocation(this.programVolume,"iVertex"),n=this.gl.getUniformLocation(this.programVolume,"poolSize");this.gl.uniform2f(n,o.params.simulation.poolSize.x,o.params.simulation.poolSize.z);const c=this.gl.getUniformLocation(this.programVolume,"horizontal");this.gl.uniform1i(c,!0);const u=this.gl.getUniformLocation(this.programVolume,"show");this.gl.uniform1i(u,!1);const p=this.gl.getUniformLocation(this.programVolume,"swapColor");this.gl.uniform1i(p,!1);const T=2,R=this.gl.FLOAT,P=!1,L=0,D=0;this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vboPlane),this.gl.vertexAttribPointer(t,T,R,P,L,D),this.gl.enableVertexAttribArray(t),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.indexBuffer),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.pointsTexture.id),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this.gl.drawElements(this.gl.TRIANGLES,6,this.gl.UNSIGNED_SHORT,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.displacementFrameBuffer),this.gl.uniform1i(c,!1),this.gl.uniform1i(u,!1),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.horizontalPassTexture.id),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this.gl.viewport(0,0,this.displacementTexture.width,this.displacementTexture.height),this.gl.drawElements(this.gl.TRIANGLES,6,this.gl.UNSIGNED_SHORT,0),this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height)}pointPass(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.pointsFrameBuffer),this.gl.useProgram(this.programPoints);const t=this.gl.getAttribLocation(this.programPoints,"iData1"),n=this.gl.getAttribLocation(this.programPoints,"iData2"),c=this.gl.getAttribLocation(this.programPoints,"iData3"),u=this.gl.getUniformLocation(this.programPoints,"invPoolSize");this.gl.uniform2f(u,1/o.params.simulation.poolSize.x,1/o.params.simulation.poolSize.z);const p=4,T=this.gl.FLOAT,R=!1,P=4,L=12*P;let D=0;this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vboPoints),t>=0&&(this.gl.vertexAttribPointer(t,p,T,R,L,D),this.gl.enableVertexAttribArray(t)),D=4*P,n>=0&&(this.gl.vertexAttribPointer(n,p,T,R,L,D),this.gl.enableVertexAttribArray(n)),D=2*4*P,c>=0&&(this.gl.vertexAttribPointer(c,p,T,R,L,D),this.gl.enableVertexAttribArray(c)),this.gl.viewport(0,0,this.pointsTexture.width,this.pointsTexture.height),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this.gl.drawArrays(this.gl.POINTS,0,5*this.numSwimmers)}updateOldDisplacementTexture(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.displacementFrameBuffer),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.oldDisplacementTexture.id),this.gl.copyTexSubImage2D(this.gl.TEXTURE_2D,0,0,0,0,0,this.oldDisplacementTexture.width,this.oldDisplacementTexture.height)}draw(){this.updateOldDisplacementTexture(),this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this.pointPass(),this.volumePass(),this.gl.disable(this.gl.BLEND)}}Q=new WeakSet,Qe=function(t){const n=function(p,T){return T.getDistanceTraveled()-p.getDistanceTraveled()};let c=0;t.forEach(p=>{p.hasFinished()>.1&&c++});const u=t.slice(0,c).concat(t.slice(c).sort(n));for(let p=0;p<t.length;p++)t[p]=u[p];return t},fe=function(t,n){this.swimmersAttributes[this.numVecAttributes*4*t]=n.center.x,this.swimmersAttributes[this.numVecAttributes*4*t+1]=n.center.z,this.swimmersAttributes[this.numVecAttributes*4*t+7]=n.center.y},et=function(t,n){$(this,Q,fe).call(this,t,n.body),this.swimmersAttributes[this.numVecAttributes*4*t+2]=n.divingDistance,this.swimmersAttributes[this.numVecAttributes*4*t+3]=n.divingTime,this.swimmersAttributes[this.numVecAttributes*4*t+4]=n.reactionTime,this.swimmersAttributes[this.numVecAttributes*4*t+5]=n.body.velocity.z*3.6,this.swimmersAttributes[this.numVecAttributes*4*t+6]=n.nationality,this.swimmersAttributes[this.numVecAttributes*4*t+8]=n.breakoutDistance,this.swimmersAttributes[this.numVecAttributes*4*t+9]=n.breakoutTime,this.swimmersAttributes[this.numVecAttributes*4*t+10]=n.finishTime,this.swimmersAttributes[this.numVecAttributes*4*t+11]=n.waterDamping};function Se(a=0,t=1){const n=1-Math.random(),c=Math.random();return Math.sqrt(-2*Math.log(n))*Math.cos(2*Math.PI*c)*t+a}const Ct=.5,Ft=2,de="Temps (s)",ve="event",Re="eventX",Pt="frequence (cylce/min)",q=class q{constructor(t){this.startingPoint=new v.Vector(t.x,t.y,t.z),this.center=new v.Vector(t.x,t.y,t.z),this.force=new v.Vector(0,0,190+Se(0,20)),this.reactionTime=Math.max(.1,Se(.15,.02));const n=.25,c=.15;this.body=new pe(t,n),this.body.showStreak=!0,this.leftArm=new pe(oe,c),this.rightArm=new pe(oe,c),this.leftFoot=new pe(oe,c),this.rightFoot=new pe(oe,c),this.body.cinematic=!q.useGravity,this.leftArm.cinematic=!0,this.rightArm.cinematic=!0,this.leftFoot.cinematic=!0,this.rightFoot.cinematic=!0,this.spheres=[this.body,this.leftArm,this.rightArm,this.leftFoot,this.rightFoot],this.divingDistance=0,this.divingTime=1e3,this.breakoutDistance=0,this.breakoutTime=1e3,this.nationality=Math.random()>.5?0:1,this.currendDataIndex=0,this.useTracking=!1,this.armPulsation=2*Math.PI*Ft,this.cycleTime=0,this.cyclePhase=0,this.finishTime=0,this.waterDamping=o.params.simulation.waterDamping}async parseData(t){await fetch(t).then(n=>{const c=n.headers.get("content-type");return!c||!c.includes("text/csv")?(console.log("no file found : "+t),null):n.text()}).then(n=>{if(!n)return;const c=n.split(`
`),u=c[0].split(/,|;/);this.data=c.slice(1).map(p=>{const T=p.split(/,|;/);return Object.fromEntries(u.map((R,P)=>[R,T[P]]))}),o.params.swimmers.useTracking&&(this.armPulsation=0)})}getDistanceTraveled(){const t=this.body.velocity.z,n=o.params.simulation.poolSize.z,c=this.body.center.z+n/2;return t>=0?c:2*n-c}startRace(){this.hasBrokeOut=!1,this.hasDove=!1,this.hasReacted=!1}jump(t=4.5){this.body.cinematic=!1,this.body.velocity=new v.Vector(0,0,t+Se(0,1)),this.body.center=new v.Vector(this.startingPoint.x,1,-o.params.simulation.poolSize.z/2)}swim(t){this.hasReacted=t,this.isSwimming=t,this.finishTime=0,t||(this.body.followTarget=!1),t?(this.body.cinematic=!1,this.useGravity=!0,this.body.center=new v.Vector(this.startingPoint.x,0,-o.params.simulation.poolSize.z/2)):(this.body.velocity=new v.Vector(0,0,0),this.body.center=new v.Vector(this.startingPoint.x,0,0))}hasFinished(){return this.finishTime>.1}getArmOffset(t,n){n+=this.cyclePhase;const c=this.body.velocity.z>=0?this.armPulsation:-this.armPulsation;return new v.Vector(0,Math.cos(c*t+n),Math.sin(c*t+n)).multiply(Ct)}setCurrentDataIndex(){if(this.currendDataIndex=0,!!this.data){for(;this.data[this.currendDataIndex]&&this.data[this.currendDataIndex][de]<o.getRaceTime();)this.currendDataIndex++;if(this.currendDataIndex+1<this.data.length){if(this.currendDataIndex-1>=0){const t=parseFloat(this.data[this.currendDataIndex][Re]);let n=t;const c=o.params.simulation.poolSize.z;t>c&&(n=2*c-n),n-=c/2;const u=this.body.center;this.body.move(new v.Vector(u.x,u.y,n));const p=Math.sign(50-t)*.1;this.body.velocity=new v.Vector(0,0,p),console.log("vz : "+p)}this.body.setTarget(null),this.body.followTarget=!0,this.finishTime=0}}}findNextCycle(){let t=this.currendDataIndex+1;if(!this.data)return null;for(;this.data[t]&&this.data[t][ve]!="cycle";)t++;return this.data[t]?parseFloat(this.data[t][de]):null}setDamping(t){if(o.params.visualizations.customWaterPerturbation==o.params.visualizations.PARAMETER_CYCLES){const n=parseFloat(t[Pt]);if(n<50)return;if(n>0){console.log("FREQ : "+n);const c=80,u=50;let p=(n-u)/(c-u);p=Math.max(Math.min(p,1),0);const T=.015,R=.25;this.waterDamping=T+(R-T)*(1-p)}}else this.waterDamping=o.params.simulation.waterDamping}handleTracking(t){if(this.hasReacted&&this.useTracking&&this.currendDataIndex<this.data.length&&this.data[this.currendDataIndex][de]<t){this.setDamping(this.data[this.currendDataIndex]);let n=null,c=this.startingPoint.x,u=t;const p=this.data[this.currendDataIndex+1];this.currendDataIndex+1<this.data.length&&(n=parseFloat(p[Re]),u=parseFloat(p[de]));const T=o.params.simulation.poolSize.z;let R=-this.body.radius/2;const P=this.data[this.currendDataIndex][ve];if(P=="enter"||P=="turn"&&p[ve]!="under"){u=(t+u)/2,n=(this.body.center.z+T/2+n)/2;const D={[de]:u,[Re]:n,[ve]:"under"};this.data.splice(this.currendDataIndex+1,0,D),R=-1.5}p&&p[ve]=="under"&&(R=-1.5),n>T&&(n=2*T-n),n-=o.params.simulation.poolSize.z/2;const L=new v.Vector(c,R,n);if(this.currendDataIndex+1<this.data.length?this.body.setTarget(L,u-t):this.body.setTarget(null),P=="cycle"){const D=parseFloat(this.data[this.currendDataIndex][de]),E=this.findNextCycle();if(E){const k=1/(E-D);this.armPulsation=2*Math.PI*k,this.cycleTime=0,this.cyclePhase==0?this.cyclePhase=Math.PI:this.cyclePhase=0}}else P=="finish"&&(this.finishTime=this.data[this.currendDataIndex][de],this.body.followTarget=!1,this.isSwimming=!1);this.currendDataIndex++}}moveSpheresAway(){this.rightArm.move(oe),this.leftArm.move(oe),this.rightFoot.move(oe),this.leftFoot.move(oe)}moveSpheres(t){this.cycleTime+=t;const n=this.getArmOffset(.5*this.cycleTime,0),c=this.getArmOffset(.5*this.cycleTime,Math.PI),u=this.getArmOffset(.5*this.cycleTime*2,0),p=this.getArmOffset(.5*this.cycleTime*2,Math.PI);this.rightArm.move(this.body.center.add(n).add(new v.Vector(Fe,0,0))),this.leftArm.move(this.body.center.add(c).add(new v.Vector(-Fe,0,0)));const T=this.body.velocity.z>=0?-Me:Me;this.rightFoot.move(this.body.center.add(new v.Vector(Pe,u.y*.5,T))),this.leftFoot.move(this.body.center.add(new v.Vector(-Pe,p.y*.5,T)))}update(t){const n=o.getRaceTime();!q.raceHasStarted&&this.data&&(this.useTracking=o.params.swimmers.useTracking),!this.hasReacted&&q.raceHasStarted&&(this.useTracking||n>this.reactionTime&&!o.params.swimmers.useTracking?(this.swim(!0),this.waterDamping=o.params.simulation.waterDamping,this.jump(),this.useTracking&&(this.body.cinematic=!0,this.body.followTarget=!0,this.body.setTarget(null))):(this.swim(!1),this.body.cinematic=!0,o.playingDemo?this.body.move(new v.Vector(this.body.center.x,1,-o.params.simulation.poolSize.z/2)):this.body.move(oe)),this.currendDataIndex=0),this.isSwimming&&(this.useTracking||this.body.addForce(this.force),this.body.center.y>-this.body.radius?this.moveSpheres(t):this.moveSpheresAway()),this.handleTracking(n);for(let u of this.spheres)u.update(t),u.spawnSplashes(t);if(this.body.center.z>-o.params.simulation.poolSize.z/2+20)return;q.raceHasStarted&&!this.hasDove&&this.body.center.y<0&&this.body.oldCenter.y>=0&&(this.divingDistance=this.body.center.z+o.params.simulation.poolSize.z/2,this.divingTime=n,this.hasDove=!0);const c=this.body.radius;q.raceHasStarted&&!this.hasBrokeOut&&this.body.center.y>-c&&this.body.oldCenter.y<=-c&&(this.breakoutDistance=this.body.center.z+o.params.simulation.poolSize.z/2,this.breakoutTime=n,this.hasBrokeOut=!0)}};te(q,"useGravity",!1),te(q,"raceHasStarted",!1),te(q,"swimming",!1),te(q,"attributes"),te(q,"initAttributes",()=>{q.attributes=new zt}),te(q,"updateAttributesTexture",()=>{q.attributes.update()}),te(q,"getAttributesTexture",()=>q.attributes.texture),te(q,"bindDisplacementTexture",t=>{q.attributes.displacementTexture.bind(t)}),te(q,"bindOldDisplacementTexture",t=>{q.attributes.oldDisplacementTexture.bind(t)}),te(q,"reset",t=>{q.attributes.createRenderingTexture(t.x,t.y)});let O=q;const Mt=`
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
`;var he=`
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
`;function ce(a,t,n,c){this.water=t,this.gl=a,this.tileTexture=v.Texture.fromImage(document.getElementById("tiles"),{minFilter:this.gl.LINEAR_MIPMAP_LINEAR,wrap:this.gl.REPEAT,format:this.gl.RGB}),this.franceTexture=v.Texture.fromImage(document.getElementById("france"),{minFilter:this.gl.LINEAR_MIPMAP_LINEAR,wrap:this.gl.REPEAT,format:this.gl.RGBA}),this.chinaTexture=v.Texture.fromImage(document.getElementById("china"),{minFilter:this.gl.LINEAR_MIPMAP_LINEAR,wrap:this.gl.REPEAT,format:this.gl.RGBA}),this.lettersTexture=v.Texture.fromImage(document.getElementById("letters"),{minFilter:this.gl.LINEAR,magFilter:this.gl.LINEAR,wrap:this.gl.REPEAT,format:this.gl.RGBA}),this.flagSize=c,this.flagSize=[1.5,1],this.flagCenter=n,this.lightDir=new v.Vector(2,2,-1).unit(),this.causticTex=new v.Texture(1024,1024),this.waterShaders=[];let u="";Object.entries(o.params.visualizations.customParametersDict).forEach(R=>{const P=R[1].name,L=R[1].value;u+="#define "+P+" "+L+`
`}),Object.entries(o.params.visualizations.renderingDict).forEach(R=>{const P=R[1].name,L=R[1].value;u+="#define "+P+" "+L+`
`});for(var p=0;p<2;p++)this.waterShaders[p]=new v.Shader(`
      uniform sampler2D water;
      uniform vec3 poolSizeVertexShader;
      out vec3 position;
      void main() {
        vec4 info = texture(water, gl_Vertex.xy / poolSizeVertexShader.xz + 0.5);
        position = gl_Vertex.xzy;
        position.y += info.r;
        gl_Position = gl_ModelViewProjectionMatrix * vec4(position, 1.0);
      }
    `,he+`
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

      uniform float seed;

      uniform float waterColorParameter;

      `+u+`
      
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
      
      
      `+we+Mt+`
      makeStrF(printSpeed) _num_ __ _k _m _DIV _h _endNum
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

      void distort(inout vec2 pos, vec2 swimmerPos, in float intensity) {
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
        float distFactor = 0.;
        float startDissipationTime = 0.5;
        float stopDissipationTime = 1.5;
        float reshowTime = 4.;
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


      vec3 getSurfaceRayColor(vec3 origin, vec3 ray, vec3 waterColor, vec3 normal) {
        vec3 color;
        if (int(rendering) == RENDERING_REALISTIC) color = realisticRendering(origin, ray, waterColor);
        else if (int(rendering) == RENDERING_HEIGHT_FIELD) color = heightFieldRendering(origin.y);
        else if (int(rendering) == RENDERING_LAMBERT) color = lambertRendering(normal);
        else if (int(rendering) == RENDERING_TOON) color = toonRendering(normal, ray);
        
        if (bool(showFlags) || showWR || int(medalsModeAfterFinish) != MEDALS_NONE || int(medalsModeBeforeFinish) != MEDALS_NONE || showSpeed || showDivingDistance) drawVisualizations(origin.xz, color);
          
          
        
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
        
        `+(p?`
          normal = -normal;
          vec3 reflectedRay = reflect(incomingRay, normal);
          vec3 refractedRay = refract(incomingRay, normal, IOR_WATER / IOR_AIR);
          float fresnel = mix(0.5, 1.0, pow(1.0 - dot(normal, -incomingRay), 3.0));
          
          vec3 reflectedColor = getSurfaceRayColor(position, reflectedRay, underwaterColor, normal);
          vec3 refractedColor = getSurfaceRayColor(position, refractedRay, vec3(1.0), normal) * vec3(0.8, 1.0, 1.1);
          
          fragColor = vec4(mix(reflectedColor, refractedColor, (1.0 - fresnel) * length(refractedRay)), 1.0);
        `:`
          vec3 reflectedRay = reflect(incomingRay, normal);
          vec3 refractedRay = refract(incomingRay, normal, IOR_AIR / IOR_WATER);
          float fresnel = mix(0.25, 1.0, pow(1.0 - dot(normal, -incomingRay), 3.0));
          
          vec3 reflectedColor = getSurfaceRayColor(position, reflectedRay, abovewaterColor, normal);
          vec3 refractedColor = getSurfaceRayColor(position, refractedRay, abovewaterColor, normal);
          
          fragColor = vec4(mix(refractedColor, reflectedColor, fresnel), 1.0);

          if(!foamEnabled) return;

          vec3 waterColor = abovewaterColor;
          vec4 foamColor = vec4(vec3(.9), fragColor.a);
          float foam = texture(foamTex, coord).r;
          fragColor = mix(fragColor, foamColor, foam);
        `)+`
      }
    `);this.sphereMesh=v.Mesh.sphere({detail:10}),this.sphereShader=new v.Shader(he+`
    out vec3 position;
  void main() {
    position = sphereCenter + gl_Vertex.xyz * sphereRadius;
    gl_Position = gl_ModelViewProjectionMatrix * vec4(position, 1.0);
  }
  `,he+`
    in vec3 position;
    out vec4 fragColor;
  void main() {
    fragColor = vec4(getSphereColor(position), 1.0);
      vec4 info = texture(water, position.xz / poolSize.xz + 0.5);
    if (position.y < info.r) {
      fragColor.rgb *= underwaterColor * 1.2;
    }
  }
  `),this.reset(),this.cubeShader=new v.Shader(he+`
    out vec3 position;
  void main() {
    position = gl_Vertex.xyz;
    position.y = ((1.0 - position.y) * (7.0 / 12.0) - 1.0) * poolSize.y;
    gl_Position = gl_ModelViewProjectionMatrix * vec4(position, 1.0);
  }
  `,he+`
    in vec3 position;
    out vec4 fragColor;
  void main() {
    fragColor = vec4(getWallColor(position), 1.0);
      vec4 info = texture(water, position.xz / poolSize.xz + 0.5);
    if (renderWater && position.y < info.r) {
      fragColor.rgb *= underwaterColor * 1.2;
    }
  }
  `),this.sphereCenter=new v.Vector,this.sphereRadius=0;var T=!!this.gl.getExtension("OES_standard_derivatives");this.causticsShader=new v.Shader(he+`
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
  `,(T?`#extension GL_OES_standard_derivatives: enable
`:"")+`
  `+he+`
    in vec3 oldPos;
    in vec3 newPos;
    in vec3 ray;
    out vec4 fragColor;

  void main() {
    `+(T?`
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
  `)}ce.prototype.reset=function(){this.cubeMesh=v.Mesh.cube({width:o.params.simulation.poolSize.x,height:2,depth:o.params.simulation.poolSize.z}),this.cubeMesh.triangles.splice(4,2),this.cubeMesh.compile()};ce.prototype.updateCaustics=function(a){};ce.prototype.renderWater=function(a,t,n){if(!o.renderWater)return;var c=new v.Raytracer;a.textureA.bind(0),this.tileTexture.bind(1),t.bind(2),this.causticTex.bind(3),this.franceTexture.bind(4),this.chinaTexture.bind(8),o.water.foam.foamTexNext.bind(9),this.lettersTexture.bind(7),a.areaConservationTexture.bind(5);const u=O.getAttributesTexture();u&&u.bind(6),this.gl.enable(this.gl.CULL_FACE),o.updateTransitions();for(var p=0;p<2;p++)this.gl.cullFace(p?this.gl.BACK:this.gl.FRONT),this.waterShaders[p].uniforms({renderWater:!0,light:this.lightDir,water:0,tiles:1,sky:2,causticTex:3,france:4,china:8,foamTex:9,areaConservationTexture:5,swimmersAttributesTexture:6,iChannel0:7,areaConservation:o.params.visualizations.areaConservationEnabled,flagSize:[1.5,2],flagCenter:[this.flagCenter.x,this.flagCenter.y],poolSize:[o.params.simulation.poolSize.x,o.params.simulation.poolSize.y,o.params.simulation.poolSize.z],poolSizeVertexShader:[o.params.simulation.poolSize.x,o.params.simulation.poolSize.y,o.params.simulation.poolSize.z],eye:c.eye,sphereCenter:this.sphereCenter,sphereRadius:this.sphereRadius,showProjectionGrid:a.showProjectionGrid,showAreaConservedGrid:a.showAreaConservedGrid,wr:a.WR_position,swimmersNumber:o.swimmers.length,cornerView:o.cornerView,showFlags:o.transitions.showFlags?o.transitions.showFlags.opacity:o.params.visualizations.showFlags,showWR:o.params.visualizations.showWR,showSpeed:o.params.visualizations.showSpeed,showDivingDistance:o.params.visualizations.showDivingDistance,showFinishTimes:o.params.visualizations.showFinishTimes,time:o.getRaceTime(),seed:o.time,foamEnabled:o.params.simulation.foam.enabled,shadowEnabled:n.enabled,shadowRadius:n.shadowRadius,shadowPower:n.shadowPower,showCircle:n.showCircle,shadowCircleRadius:n.circleRadius,shadowCircleStroke:n.circleStroke,showSwimmersLines:Math.round(o.params.visualizations.showSwimmersLinesDict[o.params.visualizations.showSwimmersLines]),swimmersLinesMode:o.params.visualizations.swimmersLinesModeDict[o.params.visualizations.swimmersLinesMode],medalsModeBeforeFinish:Math.round(o.params.visualizations.medalsModesDict[o.params.visualizations.medalsModeBeforeFinish]),medalsModeAfterFinish:Math.round(o.params.visualizations.medalsModesDict[o.params.visualizations.medalsModeAfterFinish]),rendering:o.params.visualizations.renderingDict[o.params.visualizations.rendering].value,waterColorParameter:o.params.visualizations.customParametersDict[o.params.visualizations.waterColorParameter].value}).draw(a.plane);this.gl.disable(this.gl.CULL_FACE)};ce.prototype.renderSpheres=function(a){const t=[];o.swimmers.forEach(n=>n.spheres.forEach(c=>t.push(c)));for(let n of t)this.renderSphere(a,n)};ce.prototype.renderSphere=function(a,t){a.textureA.bind(1),this.causticTex.bind(2),this.sphereShader.uniforms({light:this.lightDir,water:1,causticTex:2,sphereCenter:[t.center.x,t.center.y,t.center.z],sphereRadius:t.radius*o.spheresRadiusCoeff,poolSize:[o.params.simulation.poolSize.x,o.params.simulation.poolSize.y,o.params.simulation.poolSize.z]}).draw(t.mesh)};ce.prototype.renderSphereOld=function(a){a.textureA.bind(0),this.causticTex.bind(1),this.sphereShader.uniforms({light:this.lightDir,water:0,causticTex:1,sphereCenter:this.sphereCenter,sphereRadius:this.sphereRadius,poolSize:[o.params.simulation.poolSize.x,o.params.simulation.poolSize.y,o.params.simulation.poolSize.z]}).draw(this.sphereMesh)};ce.prototype.renderCube=function(a){o.renderCube&&(this.gl.enable(this.gl.CULL_FACE),a.textureA.bind(0),this.tileTexture.bind(1),this.causticTex.bind(2),this.cubeShader.uniforms({light:this.lightDir,water:0,tiles:1,causticTex:2,sphereCenter:this.sphereCenter,sphereRadius:this.sphereRadius,poolSize:[o.params.simulation.poolSize.x,o.params.simulation.poolSize.y,o.params.simulation.poolSize.z],renderWater:o.renderWater}).draw(this.cubeMesh),this.gl.disable(this.gl.CULL_FACE))};function Be(a,t){this.gl=t,this.id=t.createTexture(),t.bindTexture(t.TEXTURE_CUBE_MAP,this.id),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,1),t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texImage2D(t.TEXTURE_CUBE_MAP_NEGATIVE_X,0,t.RGB,t.RGB,t.UNSIGNED_BYTE,a.xneg),t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X,0,t.RGB,t.RGB,t.UNSIGNED_BYTE,a.xpos),t.texImage2D(t.TEXTURE_CUBE_MAP_NEGATIVE_Y,0,t.RGB,t.RGB,t.UNSIGNED_BYTE,a.yneg),t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_Y,0,t.RGB,t.RGB,t.UNSIGNED_BYTE,a.ypos),t.texImage2D(t.TEXTURE_CUBE_MAP_NEGATIVE_Z,0,t.RGB,t.RGB,t.UNSIGNED_BYTE,a.zneg),t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_Z,0,t.RGB,t.RGB,t.UNSIGNED_BYTE,a.zpos)}Be.prototype.bind=function(a){this.gl.activeTexture(this.gl.TEXTURE0+(a||0)),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,this.id)};Be.prototype.unbind=function(a){this.gl.activeTexture(this.gl.TEXTURE0+(a||0)),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,null)};const se=new ct,Dt=function(a,t){const n=se.addFolder("visualizations");n.close(),n.add(o,"useConfigFile").name("use configuration file");const c={showTimeline:!0};n.add(c,"showTimeline").name("show event timeline").onChange(b=>{const C=document.getElementById("event-editor");C&&(C.style.display=b?"block":"none")}),n.add(o.params.visualizations,"showFlags").name("show flags").listen(),n.add(o.params.visualizations,"showStreaks").name("show streaks").listen(),n.add(o.params.visualizations,"showWR").name("show world record").listen(),n.add(o.params.visualizations,"showSwimmersLines",o.params.visualizations.swimmersLinesList).name("show neighbours lines").listen(),n.add(o.params.visualizations,"swimmersLinesMode",o.params.visualizations.swimmersLinesModeList).name("show neighbours lines").listen(),n.add(o.params.visualizations,"customWaterPerturbation",o.params.visualizations.customParametersList).name("custom water perturbation").listen(),n.add(o.params.visualizations,"waterColorParameter",o.params.visualizations.customParametersList).name("water color parameter").listen(),n.add(o.params.visualizations,"medalsModeBeforeFinish",["none","stars","bright","lanes"]).name("show potential medals").listen(),n.add(o.params.visualizations,"medalsModeAfterFinish",["none","stars","bright","lanes"]).name("show potential medals after finish").listen(),n.add(o.params.visualizations,"showSpeed").name("show speed").listen(),n.add(o.params.visualizations,"showDivingDistance").name("show diving distance").listen(),n.add(o.params.visualizations.shadow,"enabled").name("show shadow"),n.add(o.params.visualizations,"areaConservationEnabled","areaConservationEnabled").name("area conservation").listen(),n.add(o.params.visualizations,"rendering",o.params.visualizations.renderingList).name("rendering").listen().onChange(()=>{o.params.visualizations.rendering=="toon"&&(o.params.simulation.waterDamping=.35)});const u=se.addFolder("video");u.close(),u.add(o.params.video,"thresholdBlending").name("threshold blending"),u.add(o.params.video,"blendingThreshold",.1,.5).name("blending threshold"),u.add(o.params.video,"show").name("show").listen(),u.add(o.params.video,"hideObstructions").name("hide obstructions"),u.add(o.params.video,"hideObstructionThreshold",0,.5).name("obstructions threshold");const p=n.addFolder("Sparks");p.close(),p.add(o.params.visualizations.sparks,"enabled").name("sparks enabled"),p.add(o.params.visualizations.sparks,"glow",1,30).name("sparks glow factor"),p.add(o.params.visualizations.sparks,"lengthFactor",.1,10).name("sparks length factor"),p.add(o.params.visualizations.sparks,"glowOffset",.1,3).name("sparks glow offset"),p.add(o.params.visualizations.sparks,"stroke",.001,.05).name("sparks stroke"),p.add(o.params.visualizations.sparks,"num",10,je).step(1).name("sparks number"),p.add(o.params.visualizations.sparks,"sizeFactor",10,100).name("size factor");const T=n.addFolder("Swimmers shadows");T.close(),T.add(o.params.visualizations.shadow,"shadowRadius",0,2).name("shadow radius"),T.add(o.params.visualizations.shadow,"shadowPower",.1,2).name("shadow power"),T.add(o.params.visualizations.shadow,"showCircle").name("circle"),T.add(o.params.visualizations.shadow,"circleRadius",.5,2).name("circle radius"),T.add(o.params.visualizations.shadow,"circleStroke",.1,.5).name("circle stroke");const R=se.addFolder("Simulation");R.close(),R.add(o.params.simulation,"optimized").name("optimized").listen(),R.add(o.params.simulation.poolSize,"x",1,25).name("pool width").onChange(function(b){t()}).listen(),R.add(o.params.simulation.poolSize,"z",1,50).name("pool height").onChange(function(b){t()}).listen(),R.add(o.params.simulation.poolSize,"y",1,3).name("pool depth").onChange(function(b){t()}).listen(),R.add(o.params.simulation,"waterDamping",.005,.4).name("water damping").listen();const P=R.addFolder("foam");P.close(),P.add(o.params.simulation.foam,"enabled").name("enabled"),P.add(o.params.simulation.foam,"velThreshold",0,15).name("velocity threshold"),P.add(o.params.simulation.foam,"velMax",0,20).name("max velocity"),P.add(o.params.simulation.foam,"dispersion",0,.1).name("dispersion"),P.add(o.params.simulation.foam,"timeVariation",0,10).name("time variation"),P.add(o.params.simulation.foam,"spaceVariation",0,100).name("space variation"),P.add(o.params.simulation.foam,"attenuation",0,.2).name("attenuation");const L=R.addFolder("splash");L.close(),L.add(o.params.simulation.splashes,"enabled").name("enabled"),L.add(o.params.simulation.splashes,"strengthThreshold",.1,10).name("strength threshold");const D=se.addFolder("swimmers");D.close(),D.add(o.params.swimmers,"showSpheres").name("show spheres").listen(),D.add(o.params.swimmers,"useTracking").name("use tracking data").listen();const E=se.addFolder("camera");E.close(),E.add(o.params,"fov",28,45).name("fov").listen().onChange(function(b){o.params.visualizations.sparks.fov=b*2*Math.PI/360,a.matrixMode(a.PROJECTION),a.loadIdentity(),a.perspective(o.params.fov,a.canvas.width/a.canvas.height,.01,100),a.matrixMode(a.MODELVIEW),console.log("perspective : "+o.params.fov)});const V=se.addFolder("quiver");V.close(),V.add(o.params.quiver,"amplitude",.01,1).name("amplitude"),V.add(o.params.quiver,"omega",.5,5).name("omega"),V.add(o.params.quiver,"amplitudeFactor",.5,.9).name("amplitude factor"),V.add(o.params.quiver,"frequencyFactor",1.1,2).name("frequency factor"),V.add(o.params.quiver,"waveLength",1,30).name("wave length");const k=se.addFolder("corner view");k.close(),k.add(o.params.cornerView,"show").name("show");const x=se.addFolder("chrono-photography");x.close(),x.add(o.params.chronoPhotography,"available").name("available").onChange(()=>{o.params.chronoPhotography.available?o.drawingFrameBuffer=o.chronoFrameBuffer:o.drawingFrameBuffer=null}),o._gui=se},Ae=150,le=100;function It(a){const t=document.createElement("div");if(document.body.appendChild(t),t.id="event-editor",t.style.position="fixed",t.display="block",t.style.bottom="60px",t.style.left="10px",t.style.right="10px",t.style.height="120px",t.style.zIndex="4",t.style.background="#222",t.style.color="#fff",t.style.overflow="auto",t.style.padding="4px",t.style.fontSize="12px",t.style.position=t.style.position||"relative",!t){console.warn(`event editor container "${a}" not found`);return}let n,c=!1;const u=[{name:"showFlags",type:"boolean"},{name:"showWR",type:"boolean"},{name:"showSpeed",type:"boolean"},{name:"showDivingDistance",type:"boolean"},{name:"showFinishTimes",type:"boolean"},{name:"showSwimmersLines",type:"select",options:o.params.visualizations.swimmersLinesList},{name:"swimmersLinesMode",type:"select",options:o.params.visualizations.swimmersLinesModeList},{name:"customWaterPerturbation",type:"select",options:o.params.visualizations.customParametersList},{name:"waterColorParameter",type:"select",options:o.params.visualizations.customParametersList},{name:"medalsModeBeforeFinish",type:"select",options:["none","stars","bright","lanes"]},{name:"medalsModeAfterFinish",type:"select",options:["none","stars","bright","lanes"]},{name:"rankSwimmerToggle",type:"number",min:1,max:10},{name:"showStreaks",type:"boolean"}];function p(x){const b=document.createElement("div");b.style.flex="1",b.style.padding="4px",b.style.background="#222",b.style.border="1px solid #555",b.style.borderRadius="4px",b.style.fontFamily="monospace",b.style.fontSize="12px",b.style.whiteSpace="pre-wrap",b.style.overflow="auto",b.style.maxHeight="100px";function C(){const N=x.params;if(Object.keys(N).length===0){b.textContent="(no params)";return}const U=Object.entries(N).map(([W,B])=>`${W}: ${JSON.stringify(B)}`);b.textContent=U.join(`
`)}return C(),{element:b,update:C}}function T(x,b){const C=document.createElement("div");C.style.display="flex",C.style.flexWrap="wrap",C.style.margin="4px 0",C.style.background="#333",C.style.padding="4px";function N(){b&&(b(),k())}u.forEach(I=>{const K=document.createElement("div");K.style.marginRight="8px",K.style.marginBottom="4px";const ee=document.createElement("label");ee.style.whiteSpace="nowrap",ee.textContent=I.name+":",K.appendChild(ee);let M;if(I.type==="boolean"){M=document.createElement("select"),[{value:"",label:"—"},{value:"true",label:"ON"},{value:"false",label:"OFF"}].forEach(j=>{const y=document.createElement("option");y.value=j.value,y.textContent=j.label,M.appendChild(y)});const Y=x.params[I.name];Y===void 0?M.value="":Y===!0?M.value="true":Y===!1&&(M.value="false"),M.addEventListener("change",()=>{M.value===""?delete x.params[I.name]:M.value==="true"?x.params[I.name]=!0:M.value==="false"&&(x.params[I.name]=!1),N()})}else if(I.type==="select"){M=document.createElement("select");const H=document.createElement("option");H.value="",H.textContent="—",M.appendChild(H),I.options.forEach(Y=>{const j=document.createElement("option");j.value=Y,j.textContent=Y,M.appendChild(j)}),M.value=x.params[I.name]||"",M.addEventListener("change",()=>{M.value===""?delete x.params[I.name]:x.params[I.name]=M.value,N()})}else I.type==="number"&&(M=document.createElement("input"),M.type="number",I.min!==void 0&&(M.min=I.min),I.max!==void 0&&(M.max=I.max),M.placeholder="—",M.style.width="50px",M.value=x.params[I.name]!==void 0?x.params[I.name]:"",M.addEventListener("change",()=>{if(M.value==="")delete x.params[I.name];else{const H=parseFloat(M.value);isNaN(H)||(x.params[I.name]=H)}N()}));M&&K.appendChild(M),C.appendChild(K)});const U=document.createElement("div");U.style.marginRight="8px",U.style.marginBottom="4px";const W=document.createElement("label");W.style.whiteSpace="nowrap",W.textContent="transition :",U.appendChild(W);const B=document.createElement("input");return B.type="number",B.min=0,B.placeholder="—",B.style.width="50px",B.value=x.transition!==void 0?x.transition.duration:"",B.addEventListener("change",()=>{if(B.value===""){delete x.transition;return}const I=parseFloat(B.value);isNaN(I)||(x.transition={type:"dissolve",duration:I},N())}),U.appendChild(B),C.appendChild(U),C}function R(){const x=document.createElement("div");x.style.marginTop="8px",x.style.padding="8px",x.style.background="#555",x.style.border="1px solid #777";const b=document.createElement("div");b.textContent="Add New Event",b.style.fontWeight="bold",b.style.marginBottom="4px",x.appendChild(b);const C=document.createElement("input");C.type="number",C.placeholder="Distance",C.style.width="auto",C.style.marginRight="8px",x.appendChild(C);const N={params:{}},U=T(N,null);U.style.margin="4px 0",x.appendChild(U);const W=document.createElement("button");W.textContent="OK",W.addEventListener("click",()=>{const I=parseFloat(C.value);if(isNaN(I)){alert("Please enter a valid distance");return}const K={distance:I,...N};o.events.push(K),k(),n.remove(),n=null}),x.appendChild(W);const B=document.createElement("button");return B.textContent="cancel",B.addEventListener("click",()=>{n.remove(),n=null}),x.appendChild(B),x}function P(x,b,{title:C="",id:N=null,color:U="#e74c3c"}){const W=x/b*100,B=document.createElement("div");return B.style.position="absolute",B.style.left=W+"%",B.style.transform="translateX(-50%)",B.style.width="4px",B.style.height="100%",B.style.background=U,B.style.cursor="pointer",B.title=C,N&&(B.id=N),B.addEventListener("click",()=>{V(idx)}),B}function L(){let x=document.getElementById("distance-marker");const b=o.swimmers[0].getDistanceTraveled();if(!x){if(c)return;const C=document.getElementById("timeline-track");x=P(b,le,{color:"blue",id:"distance-marker"}),C.appendChild(x)}x.style.left=b+"%"}function D(x){c=x,E()}function E(){t.innerHTML="";const x=document.createElement("button");if(x.textContent=c?"□":"—",x.style.position="absolute",x.style.top="0",x.style.right="0",x.style.width="20px",x.style.height="20px",x.style.zIndex="100001",x.addEventListener("click",()=>{c=!c,E()}),t.appendChild(x),c){t.style.height="20px";return}t.style.height="300px";const b=document.createElement("div");if(b.style.position="relative",b.style.top="0px",b.style.left="50%",b.style.transform="translateX(-50%)",b.style.width="80px",b.style.height="15px",b.style.background="grey",b.style.border="1px solid black",b.style.cursor="ns-resize",b.style.zIndex="100000",b.style.lineHeight="16px",b.style.textAlign="center",b.textContent="drag",t.appendChild(b),b.addEventListener("mousedown",i=>{i.preventDefault();const l=i.clientY,d=t.offsetHeight;function h(w){const g=d-(w.clientY-l);g>20&&(t.style.height=g+"px")}function m(){document.removeEventListener("mousemove",h),document.removeEventListener("mouseup",m)}document.addEventListener("mousemove",h),document.addEventListener("mouseup",m)}),!o.events){t.textContent="no events defined";return}const C=document.createElement("div");t.appendChild(C),C.style.marginRight="8px",C.style.marginBottom="4px";const N=document.createElement("label");N.style.whiteSpace="nowrap",N.textContent="select scene",N.style.margin="30px",C.appendChild(N);const U=document.createElement("select");U.style.width="auto",o.scenesList.forEach(i=>{const l=document.createElement("option");l.textContent=i.title,l.value=i.title,U.appendChild(l)}),U.addEventListener("change",()=>{o.setScene(U.value)}),C.appendChild(U);const W=o.events.slice().sort((i,l)=>{const d=i.distance!==void 0?i.distance:i.time!==void 0?i.time:0,h=l.distance!==void 0?l.distance:l.time!==void 0?l.time:0;return d-h}),B=new Set;W.forEach(i=>{i.params&&Object.keys(i.params).forEach(l=>B.add(l))});let I=u.map(i=>i.name).filter(i=>B.has(i));const K=["#4caf50","#2196f3","#ff9800","#9c27b0","#f44336","#009688","#e91e63","#3f51b5"],ee={};I.forEach((i,l)=>{ee[i]=K[l%K.length]});const M={},H={};I.forEach(i=>{H[i]=!1,M[i]=0});const Y=[];if(W.forEach(i=>{const l=i.distance!==void 0?i.distance:i.time!==void 0?i.time:0;i.params&&Object.keys(i.params).forEach(d=>{if(I.includes(d)){const h=!!i.params[d];h!==H[d]&&(H[d]&&Y.push({name:d,start:M[d],end:l}),H[d]=h,M[d]=l)}})}),I.forEach(i=>{H[i]&&Y.push({name:i,start:M[i],end:le})}),I.length>0){const i=document.createElement("div");i.style.position="relative";const l=20;i.style.height=I.length*l+"px",i.style.background="#222",i.style.marginBottom="4px",i.style.marginTop="10px",I.forEach((h,m)=>{const w=document.createElement("div");w.textContent=h,w.style.position="absolute",w.style.left="0",w.style.top=m*l+2+"px",w.style.width=Ae+"px",w.style.color="#aaa",w.style.fontSize="10px",w.style.pointerEvents="none",i.appendChild(w)});const d=document.createElement("div");d.style.position="absolute",d.style.left=Ae+"px",d.style.top="0",d.style.right="0",d.style.bottom="0",d.style.overflow="hidden",i.appendChild(d),Y.forEach(h=>{const m=document.createElement("div"),w=h.start/le*100,g=(h.end-h.start)/le*100;m.style.position="absolute",m.style.left=w+"%",m.style.top=I.indexOf(h.name)*l+2+"px",m.style.height=l-4+"px",m.style.width=g+"%",m.style.background=ee[h.name]||"#4caf50",m.title=`${h.name}: ${h.start.toFixed(2)} → ${h.end.toFixed(2)}`;const f=document.createElement("span");if(f.textContent=`${h.name}: ${h.start.toFixed(2)} → ${h.end.toFixed(2)}`,f.style.position="absolute",f.style.top="0",f.style.left="2px",f.style.fontSize="10px",f.style.color="white",f.style.pointerEvents="none",f.style.whiteSpace="nowrap",f.style.overflow="hidden",f.style.textOverflow="ellipsis",m.appendChild(f),h.end<le){const _=document.createElement("div");_.style.position="absolute",_.style.right="0",_.style.top="0",_.style.width="5px",_.style.height="100%",_.style.background="rgba(255,255,255,0.5)",_.style.cursor="ew-resize",m.appendChild(_),_.addEventListener("mousedown",z=>{z.preventDefault(),z.stopPropagation();const A=z.clientX,F=m.offsetWidth;function X(J){const re=J.clientX-A,ne=Math.max(1,F+re),ue=ne/d.offsetWidth*100;m.style.width=ue+"%";const at=h.start+ne/d.offsetWidth*le;f.textContent=`${h.name}: ${h.start.toFixed(2)} → ${at.toFixed(2)}`}function G(){document.removeEventListener("mousemove",X),document.removeEventListener("mouseup",G);const J=m.offsetWidth,re=h.start+J/d.offsetWidth*le,ne=W.find(ue=>(ue.distance!==void 0?ue.distance:ue.time!==void 0?ue.time:0)===h.end);ne&&(ne.distance!==void 0?ne.distance=re:ne.time!==void 0&&(ne.time=re)),k()}document.addEventListener("mousemove",X),document.addEventListener("mouseup",G)})}d.appendChild(m)}),t.appendChild(i)}const j=document.createElement("div");j.style.position="relative",j.style.height="40px",j.style.background="#222",j.style.marginBottom="4px",j.style.paddingLeft="80px";const y=document.createElement("div");y.id="timeline-track",y.style.position="absolute",y.style.background="#444",y.style.left=Ae+"px",y.style.top="0",y.style.right="0",y.style.bottom="0",j.appendChild(y),W.forEach((i,l)=>{const d=i.distance!==void 0?i.distance:i.time!==void 0?i.time:0,h=`event ${l}: ${JSON.stringify(i.params)}`,m=P(d,le,{title:h});y.appendChild(m)}),t.appendChild(j),W.forEach((i,l)=>{const d=document.createElement("div");d.style.display="flex",d.style.flexDirection="column",d.style.marginBottom="4px";const h=document.createElement("div");h.style.display="flex",h.style.alignItems="center";const m=document.createElement("input");m.type="number",m.style.width="60px",m.value=i.distance!==void 0?i.distance:i.time!==void 0?i.time:0,m.addEventListener("change",()=>{const z=parseFloat(m.value);isNaN(z)||(i.distance!==void 0?i.distance=z:i.time=z,k())}),h.appendChild(m);const w=p(i);h.appendChild(w.element);const g=document.createElement("button");g.textContent="⚙",g.style.marginLeft="4px",h.appendChild(g);const f=document.createElement("button");f.textContent="✖",f.style.marginLeft="4px",f.addEventListener("click",()=>{const z=o.events.indexOf(W[l]);z!==-1&&(o.events.splice(z,1),E())}),h.appendChild(f),d.appendChild(h);let _;g.addEventListener("click",()=>{_?(_.remove(),_=null):(_=T(i,w.update),d.appendChild(_))}),t.appendChild(d)});const r=document.createElement("button");r.textContent="+ add event",r.addEventListener("click",()=>{n?(n.remove(),n=null):(n=R(),t.appendChild(n),t.scrollTop=t.scrollHeight)}),t.appendChild(r);const s=document.createElement("button");s.textContent="export JSON",s.style.marginLeft="8px",s.addEventListener("click",()=>{const i=JSON.stringify(o.events,null,2),l=new Blob([i],{type:"application/json"}),d=URL.createObjectURL(l),h=document.createElement("a");h.href=d,h.download="vis-config.json",h.click(),URL.revokeObjectURL(d)}),t.appendChild(s);const e=document.createElement("input");e.type="file",e.accept=".json",e.style.marginLeft="8px",e.addEventListener("change",i=>{const l=i.target.files[0];if(l){const d=new FileReader;d.onload=h=>{try{const m=JSON.parse(h.target.result);o.events=m,k()}catch(m){alert("Invalid JSON: "+m.message)}},d.readAsText(l)}}),t.appendChild(e)}function V(x){const C=t.querySelectorAll("div")[1+x];C&&C.scrollIntoView({behavior:"smooth",block:"center"})}function k(){o.events.sort((x,b)=>{const C=x.distance!==void 0?x.distance:x.time!==void 0?x.time:0,N=b.distance!==void 0?b.distance:b.time!==void 0?b.time:0;return C-N}),E()}E(),o._renderTimeline=E,o._updateDistanceMarker=L,o._setPannelMinimized=D}const tt=new v.Mesh.plane({width:2,height:2,coords:!0,normals:!0}),Lt=new v.Shader(`
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
    uniform sampler2D oldPicture;
    uniform vec2 linep1;
    uniform vec2 linep2;
    out vec4 fragColor;




    bool isInFixedPart(vec2 p) {
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

    void main() {
        vec4 oldPix = texture(oldPicture, vTextureCoord);
        if (oldPix.rgb != vec3(0)) {
            fragColor = oldPix;
            return;
        }
        if(isInFixedPart(vTextureCoord*2.-1.)) fragColor = texture(screen, vTextureCoord);
        if(isInFixedPart(vTextureCoord*2.-1.)) texture(screen, vTextureCoord);
        // if(isInFixedPart(pos)) fragColor = texture(screen, vTextureCoord);
        else fragColor = vec4(0., 0., 0., 0.);
    }
`),Bt=new v.Shader(`
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
`);let ge=new v.Texture,Ie=new v.Texture,it=!1,Xe=null;const rt=(a,t,n)=>{it=!0,ge=new v.Texture(a,t,{type:n.FLOAT,filter:n.NEAREST}),Ie=new v.Texture(a,t,{type:n.FLOAT,filter:n.NEAREST}),Xe=n.createFramebuffer(),n.bindFramebuffer(n.FRAMEBUFFER,Xe);const c=n.COLOR_ATTACHMENT0;n.framebufferTexture2D(n.FRAMEBUFFER,c,n.TEXTURE_2D,ge.id,0),n.bindFramebuffer(n.FRAMEBUFFER,null)};function He(a){a.x/=o.gl.canvas.width/2,a.x-=1,a.y/=o.gl.canvas.height/2,a.y-=1}const Nt=()=>{it||rt(o.gl.canvas.width,o.gl.canvas.height,o.gl);const a=o.params.simulation.poolSize,t=o.gl.project(a.x/2,0,o.distanceFixed+1-a.z/2),n=o.gl.project(-a.x/2,0,o.distanceFixed+1-a.z/2);He(t),He(n),Ie.drawTo(()=>{ge.bind(0),o.gl.activeTexture(o.gl.TEXTURE1),o.gl.bindTexture(o.gl.TEXTURE_2D,o.drawingTexture),Lt.uniforms({oldPicture:0,screen:1,distanceFixed:o.distanceFixed,poolSize:[o.params.simulation.poolSize.x,o.params.simulation.poolSize.y,o.params.simulation.poolSize.z],linep1:[t.x,t.y],linep2:[n.x,n.y]}).draw(tt)}),ge.swapWith(Ie),o.gl.bindFramebuffer(o.gl.FRAMEBUFFER,o.drawingFrameBuffer)},kt=()=>{o.gl.bindFramebuffer(o.gl.FRAMEBUFFER,null),ge.bind(7),o.gl.activeTexture(o.gl.TEXTURE8),o.gl.bindTexture(o.gl.TEXTURE_2D,o.drawingTexture),Bt.uniforms({picture:7,screen:8}).draw(tt)};o._fixTexture=Nt;o._clearChronoTexture=rt;function Ot(a){return a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n/g,"<br>")}function Vt(a){var t=Ot(a);t=="WebGL not supported"&&(t='Your browser does not support WebGL.<br>Please see    <a href="http://www.khronos.org/webgl/wiki/Getting_a_WebGL_Implementation">    Getting a WebGL Implementation</a>.');var n=document.getElementById("loading");n.innerHTML=t,n.style.zIndex=1}window.onerror=Vt;var ze,Z;const Ut=10,S=o.gl;var ye,Le;O.initAttributes();function ot(){document.getElementById("warning").hidden=!(o.resolution.x*o.resolution.y>3e5&&o.water&&o.params.visualizations.areaConservationEnabled)}let Ce=0;function Gt(a){Ce+=a,Ce>=1&&(document.getElementById("fps").innerText=`${(1/a).toFixed(1)} FPS`,Ce=0)}function me(){console.log("reset"),document.getElementById("resolution").innerText=`Resolution: ${o.resolution.x} x ${o.resolution.y}`,ot(),ye=new v.Vector(0,-o.params.simulation.poolSize.z/2+1),o.water.reset(o.resolution),Z.flagCenter=ye,Z.flagSize=Le,Z.reset();const a=o.params.simulation.poolSize.x/Ut;let t=o.params.simulation.poolSize.x/2-a/2;for(let n of o.swimmers)n.body.center.x=t,n.startingPoint.x=t,t-=a}function Wt(a){const t=parseFloat(a.target.value);isNaN(t)||(o.setRaceTime(t),o.swimmers.forEach(n=>n.setCurrentDataIndex()))}window.onload=function(){var a=window.devicePixelRatio||1,t=document.getElementById("help");function n(){var i=innerWidth,l=innerHeight;S.canvas.width=i*a,S.canvas.height=l*a,S.canvas.style.width=i+"px",S.canvas.style.height=l+"px",S.viewport(0,0,S.canvas.width,S.canvas.height),S.matrixMode(S.PROJECTION),S.loadIdentity(),S.perspective(o.params.fov,S.canvas.width/S.canvas.height,.01,100),S.matrixMode(S.MODELVIEW),o.resetDrawingTexture(),e()}document.body.appendChild(S.canvas),S.canvas.oncontextmenu=function(i){i.preventDefault()},S.clearColor(0,0,0,1),ye=new v.Vector(0,-o.params.simulation.poolSize.z/2+1),Le=.7;const c=document.getElementById("time-slider");c&&c.addEventListener("input",Wt);const u=document.getElementById("drop-zone");let p=0;document.addEventListener("dragenter",i=>{p++,u.style.display="flex"}),document.addEventListener("dragover",i=>{i.preventDefault(),i.dataTransfer.dropEffect="copy"}),document.addEventListener("dragleave",i=>{p--,p===0&&(u.style.display="none")}),Dt(S,me),o._reset=me,setTimeout(()=>{It("event-editor")},50),Z=new ce(S,o.water,ye,Le),ze=new Be({xneg:document.getElementById("xneg"),xpos:document.getElementById("xpos"),yneg:document.getElementById("ypos"),ypos:document.getElementById("ypos"),zneg:document.getElementById("zneg"),zpos:document.getElementById("zpos")},S);const T=new O(new v.Vector(0,0,0));if(o.swimmers.push(T),o.water=new ae(o.gl),!o.water.textureA.canDrawTo()||!o.water.textureB.canDrawTo())throw new Error("Rendering to floating-point textures is required but not supported");me();for(var R=0;R<20;R++)o.water.addDrop(Math.random()*2-1,Math.random()*2-1,.06,R&1?.01:-.01);document.getElementById("loading").innerHTML="",n();var P=window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(i){setTimeout(i,0)},L=new Date().getTime();function D(){var i=new Date().getTime();o.paused||(r((i-L)/1e3),e()),L=i,P(D)}P(D),window.onresize=n;var E,V,k,x=-1,b=0,C=1,N=2;const U=3;var W,B;function I(i,l,d){if(W=i,B=l,!d||d.button===0){var h=new v.Raytracer,m=h.getRayForPixel(i*a,l*a),w=h.eye.add(m.multiply(-h.eye.y/m.y));for(let f of o.swimmers){var g=v.Raytracer.hitTestSphere(h.eye,m,f.body.center,f.body.radius);if(g){x=C,k=f,f.body.cinematic=!0,E=g.hit,V=h.getRayForPixel(S.canvas.width/2,S.canvas.height/2).negative();return}}Math.abs(w.x)<o.params.simulation.poolSize.x/2&&Math.abs(w.z)<o.params.simulation.poolSize.z/2&&(x=b,K(i,l))}else d.button===2?x=N:d.button===1&&(x=U)}function K(i,l,d){switch(x){case b:{var h=new v.Raytracer,m=h.getRayForPixel(i*a,l*a),w=h.eye.add(m.multiply(-h.eye.y/m.y));o.water.addDrop(w.x/o.params.simulation.poolSize.x*2,w.z/o.params.simulation.poolSize.z*2,.06,.03),o.paused&&(o.water.updateNormals(),Z.updateCaustics(o.water));break}case C:{var h=new v.Raytracer,m=h.getRayForPixel(i*a,l*a),g=-V.dot(h.eye.subtract(E))/V.dot(m),f=h.eye.add(m.multiply(g));const A=k.body.center.add(f.subtract(E)),F=k.body.radius,X=Math.max(F-o.params.simulation.poolSize.x/2,Math.min(o.params.simulation.poolSize.x/2-F,A.x)),G=Math.max(F-o.params.simulation.poolSize.y,Math.min(10,A.y)),J=Math.max(F-o.params.simulation.poolSize.z/2,Math.min(o.params.simulation.poolSize.z/2-F,A.z));k.body.move(new v.Vector(X,G,J)),E=f,o.paused&&Z.updateCaustics(o.water);break}case N:{if(d&&d.shiftKey){o.angleZ-=i-W,o.angleZ=Math.max(-89.999,Math.min(89.999,o.angleZ));break}o.angleY-=i-W,o.angleX-=l-B,o.angleX=Math.max(-89.999,Math.min(89.999,o.angleX));break}case U:{const _=.001*o.zoomDistance;o.translateX+=_*(i-W),o.translateY-=_*(l-B)}}W=i,B=l,o.paused&&e()}function ee(){x=-1,k&&(k.body.cinematic=!O.useGravity)}function M(i){return i===t||i.parentNode&&M(i.parentNode)}function H(i){return i&&(i.id==="event-editor"||i.parentNode&&H(i.parentNode))}function Y(i){o.zoomDistance*=1-i*2e-4,o.zoomDistance=Math.max(2,Math.min(1e3,o.zoomDistance)),o.paused&&e()}addEventListener("wheel",function(i){if(!H(i.target)){var l=i.deltaY;Y(-l)}}),document.onmousedown=function(i){S.canvas.focus(),M(i.target)||I(i.pageX,i.pageY,i)},document.onmousemove=function(i){K(i.pageX,i.pageY,i)},document.onmouseup=function(){ee()},document.ontouchstart=function(i){i.touches.length===1&&!M(i.target)&&(i.preventDefault(),I(i.touches[0].pageX,i.touches[0].pageY,!1))},document.ontouchmove=function(i){i.touches.length===1&&K(i.touches[0].pageX,i.touches[0].pageY)},document.ontouchend=function(i){i.touches.length==0&&ee()};function j(){o.paused?o.play():o.pause()}const y=async function(i){if(i.which==32)j();else if(i.which==71)o.useGravity(!O.useGravity);else if(i.which==76&&o.paused)e();else if(i.which==74)o.swimmers.forEach(l=>l.jump(2));else if(i.which==67)o.params.visualizations.areaConservationEnabled=!o.params.visualizations.areaConservationEnabled,ot(),console.log("Area conservation "+(o.params.visualizations.areaConservationEnabled?"enabled.":"disabled."));else if(i.which==80)o.water.showProjectionGrid=!o.water.showProjectionGrid,console.log("Projection grid "+(o.water.showProjectionGrid?"enabled.":"disabled."));else if(i.which==65)o.water.showAreaConservedGrid=!o.water.showAreaConservedGrid,console.log("Area conserved grid "+(o.water.showAreaConservedGrid?"enabled.":"disabled."));else if(i.which==83){if(O.swimming=!O.swimming,O.swimming)for(let l of o.swimmers)l.swim(!0);else stopRace();console.log("Swimming "+(O.swimming?"enabled.":"disabled."))}else i.which==86?o.params.video.show=!o.params.video.show:i.which==72?(document.getElementById("commands").hidden=!document.getElementById("commands").hidden,document.getElementById("h").hidden=!document.getElementById("h").hidden):i.which==68?o.playingDemo?o.stopDemo():await o.launchDemo():i.which==81?o.chronoPhotography():i.which==82?(o.setScene("100m freestyle").then(()=>o.startRace()),o._setPannelMinimized(!0)):i.which==75?o.recalibrate():i.which==40?(o.resolution.x>129&&(o.resolution.x=Math.round(o.resolution.x/2)),me(),console.log("decreasing x resolution")):i.which==38?(o.resolution.x<16384&&(o.resolution.x=Math.round(o.resolution.x*2)),me(),console.log("increasing x resolution")):i.which==37?(o.resolution.y>129&&(o.resolution.y=Math.round(o.resolution.y/2)),me(),console.log("decreasing y resolution")):i.which==39&&(o.resolution.y<16384&&(o.resolution.y=Math.round(o.resolution.y*2)),me(),console.log("increasing y resolution"))};S.canvas.addEventListener("keydown",y);function r(i){if(!(i>1)){if(x==C)for(let l of o.swimmers)l.body.velocity=new v.Vector(0,0,0);S.clearColor(0,0,0,1),S.bindFramebuffer(S.FRAMEBUFFER,null),S.clear(S.COLOR_BUFFER_BIT|S.DEPTH_BUFFER_BIT);for(let l of o.swimmers)l.update(i);o.water.updateSpheres(i);for(let l=0;l<o.params.numSteps;l++)o.water.stepSimulation(i);Z.updateCaustics(o.water),o.updateTime(i),o.updateParams(),c.value=o.getRaceTime(),Gt(i),o.updateDemo(i),o.splashParticles.update(i)}}function s(){if(!O.raceHasStarted||!o.params.cornerView.show)return;o.cornerView=!0,S.loadIdentity(),S.translate(0,0,-35),S.rotate(90,1,0,0),S.rotate(-90,0,1,0),S.translate(0,.5,0);const i=S.canvas.height/3,l=16*i/9,d=0,h=S.canvas.height-i;S.viewport(d,h,l,i),Z.renderWater(o.water,ze,o.params.visualizations.shadow),Z.renderSpheres(o.water),S.viewport(0,0,S.canvas.width,S.canvas.height),S.loadIdentity(),S.translate(o.translateX,o.translateY,-o.zoomDistance),S.rotate(-o.angleZ,0,0,1),S.rotate(-o.angleX,1,0,0),S.rotate(-o.angleY,0,1,0),S.translate(0,.5,0),o.cornerView=!1}function e(){v.keys.L&&(Z.lightDir=v.Vector.fromAngles((90-o.angleY)*Math.PI/180,-o.angleX*Math.PI/180),o.paused&&Z.updateCaustics(o.water)),o.isOneVisualizationEnabled()&&O.updateAttributesTexture(),o.water.addOrRemoveVisualizationWaves(!0),o.water.updateNormals(),S.clearColor(.1,.2,.5,1),S.bindFramebuffer(S.FRAMEBUFFER,o.drawingFrameBuffer),S.clear(S.COLOR_BUFFER_BIT|S.DEPTH_BUFFER_BIT),S.loadIdentity(),S.translate(o.translateX,o.translateY,-o.zoomDistance),S.rotate(-o.angleZ,0,0,1),S.rotate(-o.angleX,1,0,0),S.rotate(-o.angleY,0,1,0),S.translate(0,.5,0),S.enable(S.DEPTH_TEST),S.disable(S.BLEND),S.viewport(0,0,S.canvas.width,S.canvas.height),Z.sphereCenter=o.swimmers[0].body.center,Z.sphereRadius=o.swimmers[0].body.radius,Z.renderCube(o.water),Z.renderWater(o.water,ze,o.params.visualizations.shadow),o.params.swimmers.showSpheres&&Z.renderSpheres(o.water),S.disable(S.DEPTH_TEST),(o.params.visualizations.showStreaks||o.params.simulation.splashes.enabled)&&o.splashParticles.draw(),o.renderVideo(),o.params.chronoPhotography.available&&kt(),s(),o.water.addOrRemoveVisualizationWaves(!1)}};
//# sourceMappingURL=swimming-DS5fOdgQ.js.map
