(function(){var f=this;function g(a){a=a.split(".");for(var b=f,c;c=a.shift();)if(null!=b[c])b=b[c];else return null;return b}
function h(a,b,c){return a.call.apply(a.bind,arguments)}
function k(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function n(a,b,c){n=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?h:k;return n.apply(null,arguments)}
var p=Date.now||function(){return+new Date};
function q(a,b){var c=a.split("."),d=f;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]?d=d[e]:d=d[e]={}:d[e]=b}
;function r(){this.g=this.g;this.j=this.j}
r.prototype.g=!1;r.prototype.isDisposed=function(){return this.g};
r.prototype.dispose=function(){this.g||(this.g=!0,this.m())};
r.prototype.m=function(){if(this.j)for(;this.j.length;)this.j.shift()()};function t(){r.call(this);this.a=[];this.a[4]=[];this.a[3]=[];this.a[2]=[];this.a[1]=[];this.a[0]=[];this.b={};this.i=t.a;this.s=this.c=this.h=0;this.o=this.l=!1;this.f=[];this.D=n(this.w,this);this.C=n(this.v,this);this.u=!!window.requestIdleCallback}
(function(){var a=t;function b(){}
b.prototype=r.prototype;a.B=r.prototype;a.prototype=new b;a.prototype.constructor=a;a.F=function(a,b,e){for(var l=Array(arguments.length-2),m=2;m<arguments.length;m++)l[m-2]=arguments[m];return r.prototype[b].apply(a,l)}})();
t.b=1E3/60;t.c=3E3;t.f=300;t.g=3;t.a=t.b-3;function u(a,b,c,d){++a.s;var e=a.s;a.b[e]=b;a.l&&!d?a.f.push({id:e,A:c}):(a.a[c].push(e),a.o||a.l||(0!=a.c&&v(a)!=a.h&&a.stop(),w(a)));return e}
function x(a){a.f.length=0;for(var b=4;0<=b;b--)a.a[b].length=0;a.b={};a.stop()}
function v(a){for(var b=4;1<=b;b--)if(0<a.a[b].length)return 2;return 1}
function y(a){try{a()}catch(b){(a=g("yt.logging.errors.log"))&&a(b)}}
t.prototype.v=function(a){var b=void 0;a&&(b=p()+a.timeRemaining());z(this,b)};
t.prototype.w=function(){z(this)};
function z(a,b){a.stop();a.l=!0;for(var c=p()+(b?b:a.i),d=a.a[4];d.length;){var e=d.shift(),l=a.b[e];delete a.b[e];l&&y(l)}if(!(p()>=c)){do{a:{d=a;for(e=3;0<=e;e--)for(l=d.a[e];l.length;){var m=l.shift(),B=d.b[m];delete d.b[m];if(B){d=B;break a}}d=null}d&&y(d)}while(d&&p()<c)}a.l=!1;c=0;for(d=a.f.length;c<d;c++)e=a.f[c],a.a[e.A].push(e.id);a.i=t.a;a:{for(c=3;0<=c;c--)if(a.a[c].length){c=!0;break a}c=!1}(c||a.f.length)&&w(a);a.f.length=0}
function w(a){a.o=!1;if(0==a.c)switch(a.h=v(a),a.h){case 1:var b;b=a.C;b=a.u?window.requestIdleCallback(b,{timeout:3E3}):window.setTimeout(b,300);a.c=b;break;case 2:a.c=window.setTimeout(a.D,1)}}
t.prototype.pause=function(){this.stop();this.o=!0};
t.prototype.stop=function(){if(this.c){switch(this.h){case 1:var a=this.c;this.u?window.cancelIdleCallback(a):window.clearTimeout(a);break;case 2:window.clearTimeout(this.c)}this.c=0}};
t.prototype.m=function(){x(this);this.stop();t.B.m.call(this)};function A(){var a=g("yt.scheduler.instance.instance_");if(!a||a.isDisposed())a=new t,q("yt.scheduler.instance.instance_",a);return a}
function C(){var a=g("yt.scheduler.instance.instance_");a&&(a&&"function"==typeof a.dispose&&a.dispose(),q("yt.scheduler.instance.instance_",null))}
function D(){x(A())}
var E=g("yt.scheduler.instance.timerIdMap_")||{};function F(a,b,c){if(0==c||void 0===c)return c=void 0===c,-u(A(),a,b,c);var d=window.setTimeout(function(){var c=u(A(),a,b);E[d]=c},c);
return d}
function G(a){var b=A(),c=p();y(a);a=p()-c;b.i-=a}
function H(a){var b=A();if(0>a)delete b.b[-a];else{var c=E[a];c?(delete b.b[c],delete E[a]):window.clearTimeout(a)}}
function I(){w(A())}
function J(){A().pause()}
;function K(){}
K.getInstance=function(){return K.a?K.a:K.a=new K};
K.prototype.addTask=function(a){return F(a,3)};
K.prototype.cancelTask=function(a){H(a)};if(!g("yt.scheduler.initialized")){q("yt.scheduler.instance.dispose",C);q("yt.scheduler.instance.addJob",F);q("yt.scheduler.instance.addImmediateJob",G);q("yt.scheduler.instance.cancelJob",H);q("yt.scheduler.instance.cancelAllJobs",D);q("yt.scheduler.instance.start",I);q("yt.scheduler.instance.pause",J);q("yt.scheduler.SpfScheduler.instance",K.getInstance());var L=K.getInstance(),M=K.getInstance().addTask;L.addTask=M;var N=K.getInstance(),O=K.getInstance().cancelTask;N.cancelTask=O;q("yt.scheduler.initialized",
!0)};})();
