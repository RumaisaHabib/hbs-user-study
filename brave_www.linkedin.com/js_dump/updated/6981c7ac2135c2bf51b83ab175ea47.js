/**
 * Google GSI JS Library provided by https://accounts.google.com/gsi/client
 * See documentation at https://developers.google.com/identity/gsi/web
 */

/**
 * Removed the following appended styles and added them manually:
 * https://ssl.gstatic.com/_/gsi/_/ss/k=gsi.gsi.hxt2fGtpX-o.L.W.O/am=chE/d=1/rs=AF0KOtUE-4sZUYGEHSlTf3dS0bD11c1BFw/m=credential_button_library -> In credential-button.scss
 * https://accounts.google.com/gsi/style -> In google-one-tap.scss
 * Both are exposed in google-auth.scss
 */

 "use strict";this.default_gsi=this.default_gsi||{};(function(_){var window=this;
  try{
  var aa,ba,ca,da,q,ea,ha;aa=function(a){};ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){};
  ca=function(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("a");};da=ca(this);q=function(a,b){if(b)a:{var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}};
  q("Symbol",function(a){if(a)return a;var b=function(f,g){};b.prototype.toString=function(){};var c="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",d=0,e=function(f){};return e});
  q("Symbol.iterator",function(a){if(a)return a;a=Symbol("c");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){}})}return a});ea=function(a){};
  _.u=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}};_.fa="function"==typeof Object.create?Object.create:function(a){};if("function"==typeof Object.setPrototypeOf)ha=Object.setPrototypeOf;else{var ia;a:{var ja={a:!0},ka={};try{ka.__proto__=ja;ia=ka.a;break a}catch(a){}ia=!1}ha=ia?function(a,b){}:null}_.la=ha;
  q("Promise",function(a){function b(){}function c(g){}if(a)return a;b.prototype.h=function(g){};var d=da.setTimeout;b.prototype.i=function(g){};b.prototype.l=function(){};b.prototype.j=function(g){};var e=function(g){};e.prototype.j=function(){};e.prototype.F=function(g){};e.prototype.D=
  function(g){};e.prototype.l=function(g){};e.prototype.m=function(g){};e.prototype.s=function(g,h){};e.prototype.B=function(){};e.prototype.v=function(){};e.prototype.A=function(){};var f=new b;e.prototype.H=function(g){};
  e.prototype.C=function(g,h){};e.prototype.then=function(g,h){};e.prototype.catch=function(g){};e.prototype.Ra=function(g,h){};e.resolve=c;e.reject=function(g){};e.race=function(g){};e.all=function(g){};return e});
  var ma=function(a,b,c){};q("String.prototype.startsWith",function(a){return a?a:function(b,c){}});
  q("Array.prototype.find",function(a){return a?a:function(b,c){}});var na=function(a,b){};
  q("WeakMap",function(a){function b(){}function c(l){}function d(l){}function e(l){}if(function(){if(!a||!Object.seal)return!1;try{var l=Object.seal({}),m=Object.seal({}),n=new a([[l,2],[m,3]]);if(2!=n.get(l)||3!=n.get(m))return!1;n.delete(l);n.set(m,4);return!n.has(l)&&4==n.get(m)}catch(p){return!1}}())return a;
  var f="$jscomp_hidden_"+Math.random();e("freeze");e("preventExtensions");e("seal");var g=0,h=function(l){};h.prototype.set=function(l,m){};h.prototype.get=function(l){};h.prototype.has=function(l){};h.prototype.delete=function(l){};return h});
  q("Map",function(a){if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),l=new a(_.u([[h,"s"]]));if("s"!=l.get(h)||1!=l.size||l.get({x:4})||l.set({x:4},"t")!=l||2!=l.size)return!1;var m=l.entries(),n=m.next();if(n.done||n.value[0]!=h||"s"!=n.value[1])return!1;n=m.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!m.next().done?!1:!0}catch(p){return!1}}())return a;var b=new WeakMap,c=function(h){};c.prototype.set=function(h,l){};c.prototype.delete=function(h){};c.prototype.clear=function(){};c.prototype.has=function(h){};c.prototype.get=function(h){};c.prototype.entries=function(){};c.prototype.keys=function(){};c.prototype.values=function(){};c.prototype.forEach=function(h,l){};c.prototype[Symbol.iterator]=c.prototype.entries;var d=function(h,l){},e=function(h,l){},f=function(){},g=0;return c});var oa=function(a,b){};
  q("String.prototype.endsWith",function(a){return a?a:function(b,c){}});q("Array.prototype.values",function(a){return a?a:function(){}});q("Array.prototype.keys",function(a){return a?a:function(){}});
  q("Array.from",function(a){return a?a:function(b,c,d){}});var pa="function"==typeof Object.assign?Object.assign:function(a,b){};
  q("Object.assign",function(a){return a||pa});
  q("Set",function(a){if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(_.u([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;var b=function(c){};b.prototype.add=function(c){};b.prototype.delete=function(c){};b.prototype.clear=function(){};b.prototype.has=function(c){};b.prototype.entries=function(){};b.prototype.values=function(){};b.prototype.keys=b.prototype.values;
  b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){};return b});q("Object.is",function(a){return a?a:function(b,c){}});q("Array.prototype.includes",function(a){return a?a:function(b,c){}});
  q("String.prototype.includes",function(a){return a?a:function(b,c){}});
  
  }catch(e){_._DumpException(e)}
  try{
  var ua,Ea,Ja,Ka,Pa;_.v=function(a){return-1!=_.qa.indexOf(a)};_.ra=function(){return _.v("Firefox")||_.v("FxiOS")};_.ta=function(){return _.v("Safari")&&!(_.sa()||_.v("Coast")||_.v("Opera")||_.v("Edge")||_.v("Edg/")||_.v("OPR")||_.ra()||_.v("Silk")||_.v("Android"))};_.sa=function(){return(_.v("Chrome")||_.v("CriOS"))&&!_.v("Edge")||_.v("Silk")};ua=function(){return _.v("iPhone")&&!_.v("iPod")&&!_.v("iPad")};_.va=function(){return ua()||_.v("iPad")||_.v("iPod")};
  _.xa=function(a,b){b=(0,_.wa)(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c};_.ya=function(a){};_.Ba=function(a){};_.Da=function(a){Object.isFrozen(a)||(Ca?a[Ca]|=1:void 0!==a.Xa?a.Xa|=1:Object.defineProperties(a,{Xa:{value:1,configurable:!0,writable:!0,enumerable:!1}}));return a};Ea=function(a){return null!==a&&"object"===typeof a&&a.constructor===Object};
  _.Ha=function(a){};Ja=function(a,b){};
  _.Ia=function(a,b){};Ka=function(a){};_.La=function(a){};_.w=function(a,b){try{_.Ma.debug>=_.Ma[_.Na]&&window.console&&window.console.log&&window.console.log(_.La(b)+a)}catch(c){}};
  _.x=function(a,b){};_.y=function(a,b){};Pa=function(a,b){};
  _.z=function(a,b){a.prototype=(0,_.fa)(b.prototype);a.prototype.constructor=a;if(_.la)(0,_.la)(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.ma=b.prototype};
  /*
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
  _.Qa=_.Qa||{};_.A=this||self;_.Ra=function(){};_.Sa=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b};_.C=function(a,b){a=a.split(".");var c=_.A;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b};
  _.Ta=function(a,b){function c(){}c.prototype=b.prototype;a.ma=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Vc=function(d,e,f){}};
  _.Ua="undefined"!==typeof TextDecoder;
  var Wa;_.Va=String.prototype.trim?function(a){return a.trim()}:function(a){};
  _.Xa=function(a,b){};
  Wa=function(a,b){};
  a:{var Ya=_.A.navigator;if(Ya){var Za=Ya.userAgent;if(Za){_.qa=Za;break a}}_.qa=""}
  ;_.wa=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){};_.$a=Array.prototype.forEach?function(a,b){}:function(a,b){};
  _.ab=Array.prototype.some?function(a,b){}:function(a,b){};_.bb=Array.prototype.every?function(a,b){}:function(a,b){};
  var cb=function(a){};cb[" "]=_.Ra;
  var jb;_.db=_.v("Opera");_.eb=_.v("Trident")||_.v("MSIE");_.fb=_.v("Edge");_.gb=_.v("Gecko")&&!(-1!=_.qa.toLowerCase().indexOf("webkit")&&!_.v("Edge"))&&!(_.v("Trident")||_.v("MSIE"))&&!_.v("Edge");_.hb=-1!=_.qa.toLowerCase().indexOf("webkit")&&!_.v("Edge");_.ib=_.va();
  a:{var kb="",lb=function(){var a=_.qa;if(_.gb)return/rv:([^\);]+)(\)|;)/.exec(a);if(_.fb)return/Edge\/([\d\.]+)/.exec(a);if(_.eb)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(_.hb)return/WebKit\/(\S+)/.exec(a);if(_.db)return/(?:Version)[ \/]?(\S+)/.exec(a)}();lb&&(kb=lb?lb[1]:"");if(_.eb){var mb,nb=_.A.document;mb=nb?nb.documentMode:void 0;if(null!=mb&&mb>parseFloat(kb)){jb=String(mb);break a}}jb=kb}_.ob=jb;
  _.pb=_.ra();_.qb=ua()||_.v("iPod");_.rb=_.v("iPad");_.sb=_.v("Android")&&!(_.sa()||_.ra()||_.v("Opera")||_.v("Silk"));_.tb=_.sa();_.ub=_.ta()&&!_.va();
  var vb,Fa;vb={};_.wb=null;Fa=function(a){};
  _.xb=function(){};
  var Aa="function"===typeof Uint8Array;
  var yb;_.Ga=function(a){this.g=a;if(null!==a&&0===a.length)throw Error("u");};_.Ga.prototype.Fa=function(){};yb||(yb=new _.Ga(null));
  _.Ab="function"===typeof Uint8Array.prototype.slice;
  var Ca="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol(void 0):void 0;
  _.D=function(a,b,c){var d=_.Cb;_.Cb=null;a||(a=d);d=this.constructor.bd;a||(a=d?[d]:[]);this.i=(d?0:-1)-(this.constructor.Zc||0);this.g=null;this.N=a;a:{d=this.N.length;a=d-1;if(d&&(d=this.N[a],Ea(d))){this.j=a-this.i;this.h=d;break a}void 0!==b&&-1<b?(this.j=Math.max(b,a+1-this.i),this.h=null):this.j=Number.MAX_VALUE}if(c)for(b=0;b<c.length;b++)a=c[b],a<this.j?(a+=this.i,(d=this.N[a])?Array.isArray(d)&&_.Da(d):this.N[a]=_.Db):(_.Eb(this),(d=this.h[a])?Array.isArray(d)&&_.Da(d):this.h[a]=_.Db)};
  _.Db=Object.freeze(_.Da([]));_.Eb=function(a){};_.E=function(a,b,c){return-1===b?null:(void 0===c?0:c)||b>=a.j?a.h?a.h[b]:void 0:a.N[b+a.i]};_.D.prototype.toJSON=function(){};_.D.prototype.toString=function(){};
  _.Ma={debug:0,info:1,warn:2,error:3};_.Na="warn";
  for(var Fb=[],Gb=0;63>Gb;Gb++)Fb[Gb]=0;_.Hb=function(a){return Array.prototype.concat.apply([],arguments)}(128,Fb);
  var Oa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
  _.Jb=function(a,b){this.g=b===_.Ib?a:""};_.k=_.Jb.prototype;_.k.ba=!0;_.k.Y=function(){};_.k.pb=!0;_.k.Ua=function(){};_.k.toString=function(){};_.Kb=function(a){};
  _.Lb=RegExp('^(?:audio/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font/\\w+|image/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\\w+=(?:\\w+|"[\\w;,= ]+"))*$',"i");_.Mb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;_.Ib={};_.Nb=new _.Jb("about:invalid#zClosurez",_.Ib);
  var Rb;_.Ob={};_.Pb=function(a,b,c){this.g=c===_.Ob?a:"";this.h=b;this.ba=this.pb=!0};_.Pb.prototype.Ua=function(){};_.Pb.prototype.Y=function(){};_.Pb.prototype.toString=function(){};_.Qb=function(a){return a instanceof _.Pb&&a.constructor===_.Pb?a.g:"type_error:SafeHtml"};Rb=new _.Pb(_.A.trustedTypes&&_.A.trustedTypes.emptyHTML||"",0,_.Ob);
  _.Sb=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);b=a.firstChild.firstChild;a.innerHTML=_.Qb(Rb);return!b.parentElement});
  _.Tb=String.prototype.repeat?function(a,b){}:function(a,b){};
  _.Ub=function(){this.sa=this.sa;this.m=this.m};_.Ub.prototype.sa=!1;_.Ub.prototype.P=function(){this.sa||(this.sa=!0,this.U())};_.Ub.prototype.U=function(){if(this.m)for(;this.m.length;)this.m.shift()()};
  _.Vb=function(a,b){this.type=a;this.g=this.target=b;this.defaultPrevented=this.h=!1};_.Vb.prototype.stopPropagation=function(){};_.Vb.prototype.preventDefault=function(){};
  var Xb=function(){if(!_.A.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});try{_.A.addEventListener("test",_.Ra,b),_.A.removeEventListener("test",_.Ra,b)}catch(c){}return a}();
  var Zb=function(a,b){_.Vb.call(this,a?a.type:"");this.relatedTarget=this.g=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=this.j=this.i=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.R=null;if(a){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.g=b;if(b=a.relatedTarget){if(_.gb){a:{try{cb(b.nodeName);
  var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.i=_.hb||void 0!==a.offsetX?a.offsetX:a.layerX,this.j=_.hb||void 0!==a.offsetY?a.offsetY:a.layerY,this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=
  a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Yb[a.pointerType]||"";this.state=a.state;this.R=a;a.defaultPrevented&&Zb.ma.preventDefault.call(this)}};_.Ta(Zb,_.Vb);var Yb={2:"touch",3:"pen",4:"mouse"};
  Zb.prototype.stopPropagation=function(){};Zb.prototype.preventDefault=function(){};Zb.prototype.Cc=function(){};
  var $b;$b="closure_listenable_"+(1E6*Math.random()|0);_.ac=function(a){return!(!a||!a[$b])};
  var bc=0;
  var cc=function(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.handler=e;this.key=++bc;this.Ga=this.Qa=!1},dc=function(a){a.Ga=!0;a.listener=null;a.proxy=null;a.src=null;a.handler=null};
  var ec=function(a){this.src=a;this.g={};this.h=0},gc;ec.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.g[f];a||(a=this.g[f]=[],this.h++);var g=fc(a,b,d,e);-1<g?(b=a[g],c||(b.Qa=!1)):(b=new cc(b,this.src,f,!!d,e),b.Qa=c,a.push(b));return b};gc=function(a,b){var c=b.type;if(!(c in a.g))return!1;var d=_.xa(a.g[c],b);d&&(dc(b),0==a.g[c].length&&(delete a.g[c],a.h--));return d};
  _.hc=function(a,b){b=b&&b.toString();var c=0,d;for(d in a.g)if(!b||d==b){for(var e=a.g[d],f=0;f<e.length;f++)++c,dc(e[f]);delete a.g[d];a.h--}};ec.prototype.Ea=function(a,b,c,d){};var fc=function(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Ga&&f.listener==b&&f.capture==!!c&&f.handler==d)return e}return-1};
  var ic,jc,kc,nc,pc,sc,qc,rc,uc;ic="closure_lm_"+(1E6*Math.random()|0);jc={};kc=0;_.G=function(a,b,c,d,e){if(d&&d.once)return _.lc(a,b,c,d,e);if(Array.isArray(b)){for(var f=0;f<b.length;f++)_.G(a,b[f],c,d,e);return null}c=_.mc(c);return _.ac(a)?a.G(b,c,_.Sa(d)?!!d.capture:!!d,e):nc(a,b,c,!1,d,e)};
  nc=function(a,b,c,d,e,f){if(!b)throw Error("C");var g=_.Sa(e)?!!e.capture:!!e,h=_.oc(a);h||(a[ic]=h=new ec(a));c=h.add(b,c,d,g,f);if(c.proxy)return c;d=pc();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Xb||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(qc(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("D");kc++;return c};pc=function(){var a=rc,b=function(c){return a.call(b.src,b.listener,c)};return b};
  _.lc=function(a,b,c,d,e){};sc=function(a,b,c,d,e){};
  _.tc=function(a){};qc=function(a){};
  rc=function(a,b){if(a.Ga)a=!0;else{b=new Zb(b,this);var c=a.listener,d=a.handler||a.src;a.Qa&&_.tc(a);a=c.call(d,b)}return a};_.oc=function(a){a=a[ic];return a instanceof ec?a:null};uc="__closure_events_fn_"+(1E9*Math.random()>>>0);_.mc=function(a){if("function"===typeof a)return a;a[uc]||(a[uc]=function(b){});return a[uc]};
  _.vc=function(){_.Ub.call(this);this.V=new ec(this);this.va=this;this.C=null};_.Ta(_.vc,_.Ub);_.vc.prototype[$b]=!0;_.k=_.vc.prototype;_.k.addEventListener=function(a,b,c,d){};_.k.removeEventListener=function(a,b,c,d){};
  _.k.dispatchEvent=function(a){var b,c=this.C;if(c)for(b=[];c;c=c.C)b.push(c);c=this.va;var d=a.type||a;if("string"===typeof a)a=new _.Vb(a,c);else if(a instanceof _.Vb)a.target=a.target||c;else{var e=a;a=new _.Vb(d,c);Pa(a,e)}e=!0;if(b)for(var f=b.length-1;!a.h&&0<=f;f--){var g=a.g=b[f];e=wc(g,d,!0,a)&&e}a.h||(g=a.g=c,e=wc(g,d,!0,a)&&e,a.h||(e=wc(g,d,!1,a)&&e));if(b)for(f=0;!a.h&&f<b.length;f++)g=a.g=b[f],e=wc(g,d,!1,a)&&e;return e};
  _.k.U=function(){_.vc.ma.U.call(this);this.V&&_.hc(this.V,void 0);this.C=null};_.k.G=function(a,b,c,d){return this.V.add(String(a),b,!1,c,d)};_.k.tb=function(a,b,c,d){return this.V.add(String(a),b,!0,c,d)};_.k.na=function(a,b,c,d){};
  var wc=function(a,b,c,d){b=a.V.g[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Ga&&g.capture==c){var h=g.listener,l=g.handler||g.src;g.Qa&&gc(a.V,g);e=!1!==h.call(l,d)&&e}}return e&&!d.defaultPrevented};_.vc.prototype.Ea=function(a,b,c,d){};
  var xc=function(){};xc.prototype.g=null;
  var zc;zc=function(){};_.Ta(zc,xc);_.yc=new zc;
  var Bc;_.Ac=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");Bc=function(a,b){};
  var Hc,Jc,Rc,Kc,Mc,Lc,Pc,Nc,Sc;_.Cc=function(a,b){this.g=this.o=this.h="";this.s=null;this.m=this.i="";this.l=!1;var c;a instanceof _.Cc?(this.l=void 0!==b?b:a.l,_.Dc(this,a.h),this.o=a.o,this.g=a.g,_.Ec(this,a.s),this.i=a.i,_.Fc(this,Gc(a.j)),this.m=a.m):a&&(c=String(a).match(_.Ac))?(this.l=!!b,_.Dc(this,c[1]||"",!0),this.o=Hc(c[2]||""),this.g=Hc(c[3]||"",!0),_.Ec(this,c[4]),this.i=Hc(c[5]||"",!0),_.Fc(this,c[6]||"",!0),this.m=Hc(c[7]||"")):(this.l=!!b,this.j=new _.Ic(null,this.l))};
  _.Cc.prototype.toString=function(){var a=[],b=this.h;b&&a.push(Jc(b,Kc,!0),":");var c=this.g;if(c||"file"==b)a.push("//"),(b=this.o)&&a.push(Jc(b,Kc,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.s,null!=c&&a.push(":",String(c));if(c=this.i)this.g&&"/"!=c.charAt(0)&&a.push("/"),a.push(Jc(c,"/"==c.charAt(0)?Lc:Mc,!0));(c=this.j.toString())&&a.push("?",c);(c=this.m)&&a.push("#",Jc(c,Nc));return a.join("")};
  _.Cc.prototype.resolve=function(a){};_.Dc=function(a,b,c){a.h=c?Hc(b,!0):b;a.h&&(a.h=a.h.replace(/:$/,""))};_.Ec=function(a,b){if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("J`"+b);a.s=b}else a.s=null};_.Fc=function(a,b,c){b instanceof _.Ic?(a.j=b,Oc(a.j,a.l)):(c||(b=Jc(b,Pc)),a.j=new _.Ic(b,a.l))};
  _.Qc=function(a){};Hc=function(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""};Jc=function(a,b,c){return"string"===typeof a?(a=encodeURI(a).replace(b,Rc),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null};Rc=function(a){};Kc=/[#\/\?@]/g;Mc=/[#\?:]/g;Lc=/[#\?]/g;Pc=/[#\?@]/g;Nc=/#/g;
  _.Ic=function(a,b){this.h=this.g=null;this.i=a||null;this.j=!!b};Sc=function(a){a.g||(a.g=new Map,a.h=0,a.i&&Bc(a.i,function(b,c){}))};_.Ic.prototype.add=function(a,b){Sc(this);this.i=null;a=Tc(this,a);var c=this.g.get(a);c||this.g.set(a,c=[]);c.push(b);this.h+=1;return this};_.Uc=function(a,b){};_.Ic.prototype.Fa=function(){};
  var Vc=function(a,b){Sc(a);b=Tc(a,b);return a.g.has(b)};_.k=_.Ic.prototype;_.k.forEach=function(a,b){};_.k.Da=function(){};
  _.k.aa=function(a){Sc(this);var b=[];if("string"===typeof a)Vc(this,a)&&(b=b.concat(this.g.get(Tc(this,a))));else{a=Array.from(this.g.values());for(var c=0;c<a.length;c++)b=b.concat(a[c])}return b};_.k.set=function(a,b){};_.k.get=function(a,b){};
  _.Wc=function(a,b,c){};_.Ic.prototype.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var a=[],b=Array.from(this.g.keys()),c=0;c<b.length;c++){var d=b[c],e=encodeURIComponent(String(d));d=this.aa(d);for(var f=0;f<d.length;f++){var g=e;""!==d[f]&&(g+="="+encodeURIComponent(String(d[f])));a.push(g)}}return this.i=a.join("&")};
  var Gc=function(a){},Tc=function(a,b){b=String(b);a.j&&(b=b.toLowerCase());return b},Oc=function(a,b){b&&!a.j&&(Sc(a),a.i=null,a.g.forEach(function(c,d){},a));a.j=b};
  _.Xc=window;
  
  }catch(e){_._DumpException(e)}
  try{
  var cd,jd,kd,ld,md,nd,od,pd,qd,rd,sd,gd,hd;
  _.Yc=function(){};_.Zc=function(a){if(!a.startsWith(")]}'\n"))throw console.error("malformed JSON response:",a),Error("N");a=a.substr(5);return _.A.JSON.parse(a)};_.ad=function(a){};cd=function(a){return new _.bd(function(b){})};
  _.id=function(a,b,c,d){b=b(c||dd,d);if(_.Sa(b))if(b instanceof _.ed){if(b.za!==fd)throw Error("Q");b=gd(b.toString(),b.Ta||null)}else b=hd("zSoyz");else b=hd(String(b));if((0,_.Sb)())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=_.Qb(b)};_.H=function(a,b,c,d,e){};jd=function(a){return a};kd=/&/g;ld=/</g;md=/>/g;nd=/"/g;od=/'/g;pd=/\x00/g;qd=/[\x00&<>"']/;
  sd={};_.td=function(a,b){};_.k=_.td.prototype;_.k.ba=!0;_.k.Y=function(){};_.k.pb=!0;_.k.Ua=function(){};_.k.toString=function(){};_.ud=function(a){};
  gd=function(a,b){if(void 0===rd){var c=null;var d=_.A.trustedTypes;if(d&&d.createPolicy){try{c=d.createPolicy("goog#html",{createHTML:jd,createScript:jd,createScriptURL:jd})}catch(e){_.A.console&&_.A.console.error(e.message)}rd=c}else rd=c}a=(c=rd)?c.createHTML(a):a;return new _.Pb(a,b,_.Ob)};
  hd=function(a){};
  _.wd=function(a){};_.z(_.wd,_.D);var vd=[9];
  _.xd=function(){};_.xd.prototype.Ya=function(a){var b=this;this.X&&window.setTimeout(function(){},100)};_.yd=function(a,b,c){void 0!=c&&(b.detail=c);a.Ya(b)};_.zd=function(a,b,c){_.yd(a,{timestamp:(new Date).getTime(),type:"error",errorType:b},c)};
  var Ad;_.I=function(a){Ad.g[a]=!0;_.w("Experiment "+a+" turned on.")};_.J=function(a){return!!Ad.g[a]};Ad=new function(){this.g={}};
  _.Bd=function(){var a=this;this.h=this.i=null;this.g=new Promise(function(b,c){a.i=b;a.h=c})};_.Bd.prototype.resolve=function(a){};_.Bd.prototype.reject=function(a){};_.Bd.prototype.P=function(){};
  /*
  
   SPDX-License-Identifier: Apache-2.0
  */
  _.Cd={};
  _.Dd=function(){};_.$c=function(a){this.g=a};_.z(_.$c,_.Dd);_.$c.prototype.toString=function(){};_.Ed=new _.$c("about:invalid#zTSz",_.Cd);
  _.bd=function(a){this.Fc=a};_.Fd=[cd("data"),cd("http"),cd("https"),cd("mailto"),cd("ftp"),new _.bd(function(a){})];
  /*
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
  var fd;fd={};_.Gd={};_.Hd={};_.ed=function(){};_.ed.prototype.Ta=null;_.ed.prototype.toString=function(){return this.content};var Id=function(){};_.Ta(Id,_.ed);Id.prototype.za=fd;
  _.Jd=function(a,b){return null!=a&&a.za===b};
  var Kd,Yd,Md,Zd,Ld,$d,Ud,Pd,Qd;Kd=function(a){if(null!=a)switch(a.Ta){case 1:return 1;case -1:return-1;case 0:return 0}return null};_.L=function(a){return _.Jd(a,fd)?a:a instanceof _.Pb?(0,_.K)(_.Qb(a).toString(),a.Ua()):(0,_.K)(String(String(a)).replace(Ld,Md),Kd(a))};_.K=function(a){function b(c){this.content=c}b.prototype=a.prototype;return function(c,d){c=new b(String(c));void 0!==d&&(c.Ta=d);return c}}(Id);_.Nd=function(a){return a instanceof _.ed?!!a.content:!!a};
  _.Od=function(a){function b(c){}b.prototype=a.prototype;return function(c,d){}}(Id);_.N=function(a){_.Jd(a,fd)?(a=String(a.content).replace(Pd,"").replace(Qd,"&lt;"),a=_.Rd(a)):a=String(a).replace(Ld,Md);return a};
  _.Xd=function(a){};
  Yd={"\x00":"&#0;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;",'"':"&quot;","&":"&amp;","'":"&#39;","-":"&#45;","/":"&#47;","<":"&lt;","=":"&#61;",">":"&gt;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"};Md=function(a){};
  Zd={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10","\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29",
  "<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86","\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB",
  "\uff3d":"%EF%BC%BD"};_.Wd=function(a){};Ld=/[\x00\x22\x26\x27\x3c\x3e]/g;$d=/[\x00\x22\x27\x3c\x3e]/g;_.Vd=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g;Ud=/^[^&:\/?#]*(?:[\/?#]|$)|^https?:|^data:image\/[a-z0-9+]+;base64,[a-z0-9+\/]+=*$|^blob:/i;_.Rd=function(a){};_.Sd=function(a){};Pd=/<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g;
  Qd=/</g;
  /*
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
  var dd={};
  _.ae=function(a){};
  _.be=function(a){};
  
  _.I("cancelable_auto_select");
  
  _.I("enable_inline_button");
  
  _.I("enable_intermediate_iframe");
  
  _.I("enable_iov2_fix");
  
  _.I("enable_samesite_none_client_cookie");
  
  _.I("variable_initial_height");
  
  }catch(e){_._DumpException(e)}
  try{
  var rh,uh,vh;_.sh=function(a,b,c){c=void 0===c?!0:c;if(b&&2===b.Gb()){var d={};b&&(d={Pb:b.gb(),shape:b.Ja(),size:b.hb(),text:b.Ka(),theme:b.La(),width:b.Ma(),Ca:void 0===c?!0:c});_.id(a,ph,d)}else b&&2===_.E(b,10)&&!_.J("disable_personalized_button")?(c=void 0===c?!0:c,b&&null!=_.E(b,8)?(d={},b&&(d={shape:b.Ja(),text:b.Ka(),theme:b.La(),width:b.Ma(),Kc:_.be(_.H(b,_.wd,8)),Lc:b.Fb(),Ca:c}),_.id(a,qh,d)):rh(a,b,c)):rh(a,b,c)};
  rh=function(a,b,c){var d={};b&&(d={Pb:b.gb(),shape:b.Ja(),size:b.hb(),text:b.Ka(),theme:b.La(),width:b.Ma(),Ca:void 0===c?!0:c});_.id(a,th,d)};uh={};vh=function(a,b){};vh.prototype.Y=function(){};vh.prototype.toString=function(){};var wh={},xh=function(a,b){};xh.prototype.Y=function(){};xh.prototype.toString=function(){};_.yh=function(a){_.D.call(this,a)};_.z(_.yh,_.D);
  _.k=_.yh.prototype;_.k.hb=function(){return _.E(this,1)};_.k.La=function(){return _.E(this,2)};_.k.Ja=function(){return _.E(this,3)};_.k.Ma=function(){return _.E(this,4)};_.k.Ka=function(){return _.E(this,5)};_.k.gb=function(){return _.E(this,6)};_.k.Gb=function(){return _.E(this,7)};_.k.Fb=function(){};
  var zh={},Ah=function(a,b){return a&&b&&a.Ec&&b.Ec?a.za!==b.za?!1:a.toString()===b.toString():a instanceof _.ed&&b instanceof _.ed?a.za!=b.za?!1:a.toString()==b.toString():a==b},Bh=function(a){},Ch=/^(?!-*(?:expression|(?:moz-)?binding))(?:(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|(?:rgb|hsl)a?\([0-9.%,\u0020]+\)|[-+]?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:e-?[0-9]+)?(?:[a-z]{1,4}|%)?|!important)(?:\s*[,\u0020]\s*|$))*$/i,Dh=function(a){_.Jd(a,
  zh)?a=Bh(a.content):null==a?a="":a instanceof vh?a=Bh(a instanceof vh&&a.constructor===vh?a.g:"type_error:SafeStyle"):a instanceof xh?a=Bh(a instanceof xh&&a.constructor===xh?a.g:"type_error:SafeStyleSheet"):(a=String(a),a=Ch.test(a)?a:"zSoyz");return a},Eh=function(){return(0,_.K)('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="'+_.N("LgbsSe-Bz112c")+'"><g><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/><path fill="none" d="M0 0h48v48H0z"/></g></svg>')};
  var Jh=function(a,b,c,d,e,f,g,h){g=void 0===g?!0:g;h=void 0===h?!1:h;var l=e&&1!=e?_.L(Fh(e)):_.L(Fh(2));var m=_.K;g="<div"+(g?' tabindex="0"':"")+' role="button" aria-labelledby="button-label" class="'+_.N("nsm7Bb-HzV7m-LgbsSe")+" "+(h?_.N("Bz112c-LgbsSe"):"")+" ";var n="";switch(b){case 2:n+="pSzOP-SxQuSe";break;case 3:n+="purZT-SxQuSe";break;default:n+="hJDwNd-SxQuSe"}return m(g+_.N(n)+" "+_.N(Gh(c))+" "+_.N(Hh(d))+'"'+(_.Nd(f)&&!h?' style="width:'+_.N(Dh(f))+'px; max-width:400px; min-width:min-content;"':
  "")+'><div class="'+_.N("nsm7Bb-HzV7m-LgbsSe-MJoBVe")+'"></div><div class="'+_.N("nsm7Bb-HzV7m-LgbsSe-bN97Pc-sM5MNb")+" "+(Ah(a,2)?_.N("oXtfBe-l4eHX"):"")+'">'+Ih(Ah(c,2)||Ah(c,3))+(h?"":'<span class="'+_.N("nsm7Bb-HzV7m-LgbsSe-BPrWId")+'">'+_.L(Fh(e))+"</span>")+'<span class="'+_.N("L6cTce")+'" id="button-label">'+l+"</span></div></div>")},Gh=function(a){var b="";switch(a){case 2:b+="MFS4be-v3pZbf-Ia7Qfc MFS4be-Ia7Qfc";break;case 3:b+="MFS4be-JaPV2b-Ia7Qfc MFS4be-Ia7Qfc";break;default:b+="i5vt6e-Ia7Qfc"}return b},
  Hh=function(a){var b="";switch(a){case 2:b+="JGcpL-RbRzK";break;case 4:b+="JGcpL-RbRzK";break;default:b+="uaxL4e-RbRzK"}return b},Fh=function(a){var b="";switch(a){case 1:b+="Sign in";break;case 3:b+="Sign up with Google";break;case 4:b+="Continue with Google";break;default:b+="Sign in with Google"}return b},Ih=function(a){return(0,_.K)((void 0===a?0:a)?'<div class="'+_.N("nsm7Bb-HzV7m-LgbsSe-Bz112c-haAclf")+'"><div class="'+_.N("nsm7Bb-HzV7m-LgbsSe-Bz112c")+'">'+Eh()+"</div></div>":'<div class="'+
  _.N("nsm7Bb-HzV7m-LgbsSe-Bz112c")+'">'+Eh()+"</div>")};
  var th=function(a){a=a||{};var b=a.Ca;return(0,_.K)(Jh(a.Pb,a.size,a.theme,a.shape,a.text,a.width,void 0===b?!0:b))},ph=function(a){},qh=function(a){};
  
  }catch(e){_._DumpException(e)}
  try{
  /*
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
  var ie,je,ke,me,ne,qe,re,se,te,ue,ve,we,xe,ye,ze,Ae,Be,De,Ee,Fe,He,Ie,ge,Qe,Te;_.ce=function(a){};
  _.de=function(a){};_.ee=function(a,b,c){for(var d in a)b.call(c,a[d],d,a)};_.he=function(a){};
  ie=function(a){var b=typeof a;b="object"!=b?b:a?Array.isArray(a)?"array":b:"null";return"array"==b||"object"==b&&"number"==typeof a.length};je=function(a,b,c){return a.call.apply(a.bind,arguments)};ke=function(a,b,c){};
  _.le=function(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?_.le=je:_.le=ke;return _.le.apply(null,arguments)};me={};ne=function(a,b){};_.oe=function(a){};_.O=function(a,b,c,d){(void 0===d?0:d)||b>=a.j?(_.Eb(a),a.h[b]=c):a.N[b+a.i]=c;return a};_.P=function(a,b){a=_.E(a,b);return null==a?a:!!a};
  _.pe=function(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)};qe=function(a){if(!a.h&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.h=d}catch(e){}}throw Error("E");}return a.h};re=function(a){var b;(b=a.g)||(b={},qe(a)&&(b[0]=!0,b[1]=!0),b=a.g=b);return b};
  se=function(a){return(a=qe(a))?new ActiveXObject(a):new XMLHttpRequest};te=function(a,b,c){};ue=/^https?$/i;ve=["POST","PUT"];we=[];xe=function(a){a.u&&a.Bb&&(a.u.ontimeout=null);a.Za&&(_.A.clearTimeout(a.Za),a.Za=null)};ye=function(a){};
  ze=function(a){};Ae=function(a,b){if(a.u){xe(a);var c=a.u,d=a.cb[0]?_.Ra:null;a.u=null;a.cb=null;b||a.dispatchEvent("ready");try{c.onreadystatechange=d}catch(e){}}};Be=function(a){return a.u?a.u.readyState:0};
  _.Ce=function(a){var b=a.Va();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}if(!c){if(b=0===b)a=String(a.sb).match(_.Ac)[1]||null,!a&&_.A.self&&_.A.self.location&&(a=_.A.self.location.protocol,a=a.substr(0,a.length-1)),b=!ue.test(a?a.toLowerCase():"");c=b}return c};
  De=function(a){if(a.ja&&"undefined"!=typeof _.Qa&&(!a.cb[1]||4!=Be(a)||2!=a.Va()))if(a.Wa&&4==Be(a))te(a.Ub,0,a);else if(a.dispatchEvent("readystatechange"),4==Be(a)){a.ja=!1;try{_.Ce(a)?(a.dispatchEvent("complete"),a.dispatchEvent("success")):ze(a)}finally{Ae(a)}}};Ee=function(a,b){};
  Fe=function(a){_.vc.call(this);this.headers=new Map;this.eb=a||null;this.ja=!1;this.cb=this.u=null;this.sb="";this.qa=this.qb=this.Wa=this.ob=!1;this.$a=0;this.Za=null;this.Wb="";this.Bb=this.Ic=this.Cb=!1;this.zb=null};_.Ta(Fe,_.vc);_.k=Fe.prototype;_.k.xc=function(){this.P();_.xa(we,this)};_.k.setTrustToken=function(a){};
  _.k.send=function(a,b,c,d){if(this.u)throw Error("H`"+this.sb+"`"+a);b=b?b.toUpperCase():"GET";this.sb=a;this.ob=!1;this.ja=!0;this.u=this.eb?se(this.eb):se(_.yc);this.cb=this.eb?re(this.eb):re(_.yc);this.u.onreadystatechange=(0,_.le)(this.Ub,this);this.Ic&&"onprogress"in this.u&&(this.u.onprogress=(0,_.le)(function(g){},this),this.u.upload&&(this.u.upload.onprogress=(0,_.le)(this.Tb,this)));try{this.qb=!0,this.u.open(b,String(a),!0),this.qb=!1}catch(g){this.L(5,g);return}a=c||"";c=new Map(this.headers);
  if(d)if(Object.getPrototypeOf(d)===Object.prototype)for(var e in d)c.set(e,d[e]);else if("function"===typeof d.keys&&"function"===typeof d.get){e=_.u(d.keys());for(var f=e.next();!f.done;f=e.next())f=f.value,c.set(f,d.get(f))}else throw Error("I`"+String(d));d=Array.from(c.keys()).find(function(g){});e=_.A.FormData&&a instanceof _.A.FormData;!(0<=(0,_.wa)(ve,b))||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");b=_.u(c);for(d=b.next();!d.done;d=
  b.next())c=_.u(d.value),d=c.next().value,c=c.next().value,this.u.setRequestHeader(d,c);this.Wb&&(this.u.responseType=this.Wb);"withCredentials"in this.u&&this.u.withCredentials!==this.Cb&&(this.u.withCredentials=this.Cb);if("setTrustToken"in this.u&&this.zb)try{this.u.setTrustToken(this.zb)}catch(g){}try{xe(this),0<this.$a&&((this.Bb=ye(this.u))?(this.u.timeout=this.$a,this.u.ontimeout=(0,_.le)(this.Yb,this)):this.Za=te(this.Yb,this.$a,this)),this.Wa=!0,this.u.send(a),this.Wa=!1}catch(g){this.L(5,
  g)}};_.k.Yb=function(){};_.k.L=function(){};_.k.abort=function(){};_.k.U=function(){this.u&&(this.ja&&(this.ja=!1,this.qa=!0,this.u.abort(),this.qa=!1),Ae(this,!0));Fe.ma.U.call(this)};
  _.k.Ub=function(){this.sa||(this.qb||this.Wa||this.qa?De(this):this.Hc())};_.k.Hc=function(){De(this)};_.k.Tb=function(a,b){};_.k.Va=function(){try{return 2<Be(this)?this.u.status:-1}catch(a){return-1}};_.k.getResponseHeader=function(a){};
  _.k.getAllResponseHeaders=function(){};_.Ge=function(a){try{return a.u?a.u.responseText:""}catch(b){return""}};He=function(a){if(a.aa&&"function"==typeof a.aa)return a.aa();if("undefined"!==typeof Map&&a instanceof Map||"undefined"!==typeof Set&&a instanceof Set)return Array.from(a.values());if("string"===typeof a)return a.split("");if(ie(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}b=[];c=0;for(d in a)b[c++]=a[d];return b};
  Ie=function(a){if(a.Da&&"function"==typeof a.Da)return a.Da();if(!a.aa||"function"!=typeof a.aa){if("undefined"!==typeof Map&&a instanceof Map)return Array.from(a.keys());if(!("undefined"!==typeof Set&&a instanceof Set)){if(ie(a)||"string"===typeof a){var b=[];a=a.length;for(var c=0;c<a;c++)b.push(c);return b}b=[];c=0;for(var d in a)b[c++]=d;return b}}};ge=function(a){};
  _.Je=function(a){};_.z(_.Je,_.D);
  var Ke=function(){},Le,Me=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,
  3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],Ne=function(a,b){};_.Ta(Ne,Ke);Ne.prototype.reset=function(){};
  var Oe=function(a){};
  Ne.prototype.update=function(a,b){};
  Ne.prototype.digest=function(){};var Pe=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],fe=function(){};_.Ta(fe,Ne);_.Q=function(a){var b=document;return"string"===typeof a?b.getElementById(a):a};
  Qe=function(a,b,c){};
  _.Re=function(a,b){var c=b||document;return c.querySelectorAll&&c.querySelector?c.querySelectorAll("."+a):Qe(document,a,b)};_.Se=function(a,b){var c=b||document;if(c.getElementsByClassName)a=c.getElementsByClassName(a)[0];else{c=document;var d=b||c;a=d.querySelectorAll&&d.querySelector&&a?d.querySelector(a?"."+a:""):Qe(c,a,b)[0]||null}return a||null};
  Te={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
  _.Ue=function(a,b){_.ee(b,function(c,d){c&&"object"==typeof c&&c.ba&&(c=c.Y());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:Te.hasOwnProperty(d)?a.setAttribute(Te[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})};_.Ve=function(a){for(var b;b=a.firstChild;)a.removeChild(b)};_.We=function(a){return a&&a.parentNode?a.parentNode.removeChild(a):null};
  _.Xe=function(a,b){if(a)if(_.ac(a))a.V&&_.hc(a.V,b);else if(a=_.oc(a)){var c=0;b=b&&b.toString();for(var d in a.g)if(!b||d==b)for(var e=a.g[d].concat(),f=0;f<e.length;++f)_.tc(e[f])&&++c}};_.Ye=function(a,b,c,d,e,f,g){var h=new Fe;we.push(h);b&&h.G("complete",b);h.tb("ready",h.xc);f&&(h.$a=Math.max(0,f));g&&(h.Cb=g);h.send(a,c,d,e)};
  _.Ze=function(a){var b=Ie(a);if("undefined"==typeof b)throw Error("L");var c=new _.Ic(null,void 0);a=He(a);for(var d=0;d<b.length;d++){var e=b[d],f=a[d];Array.isArray(f)?_.Wc(c,e,f):c.add(e,f)}return c};
  var af;_.$e=function(a){this.g=a||{cookie:""}};_.k=_.$e.prototype;
  _.k.set=function(a,b,c){};
  _.k.get=function(a,b){for(var c=a+"=",d=(this.g.cookie||"").split(";"),e=0,f;e<d.length;e++){f=(0,_.Va)(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};_.k.Da=function(){};_.k.aa=function(){};_.k.Fa=function(){};
  af=function(a){};_.bf=new _.$e("undefined"==typeof document?null:document);
  
  }catch(e){_._DumpException(e)}
  try{
  /*
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
  var Th,Uh;Th=function(a){};Uh=function(){if(_.pb)return Th(/Firefox\/([0-9.]+)/);if(_.eb||_.fb||_.db)return _.ob;if(_.tb){if(_.va()||_.v("Macintosh")){var a=Th(/CriOS\/([0-9.]+)/);if(a)return a}return Th(/Chrome\/([0-9.]+)/)}if(_.ub&&!_.va())return Th(/Version\/([0-9.]+)/);if(_.qb||_.rb){if(a=/Version\/(\S+).*Mobile\/(\S+)/.exec(_.qa))return a[1]+"."+a[2]}else if(_.sb)return(a=Th(/Android\s+([0-9.]+)/))?a:Th(/Version\/([0-9.]+)/);return""}();
  _.Vh=function(a){};
  
  }catch(e){_._DumpException(e)}
  try{
  /*
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
  _.ai=function(){};_.di=function(){return![_.sa()&&!_.bi()&&!_.ci(),_.sa()&&_.v("Android"),_.v("Edge")].some(function(a){return a})};
  _.bi=function(){return!_.ci()&&(_.v("iPod")||_.v("iPhone")||_.v("Android")||_.v("IEMobile"))};_.ci=function(){return _.v("iPad")||_.v("Android")&&!_.v("Mobile")||_.v("Silk")};
  var ei;ei={};
  _.fi=(ei.enable_m3="28250620661-550h2e8djhee3ri2nma0u294i6ks921r.apps.googleusercontent.com 28250620661-jplop9r4d3uj679blu2nechmlm3h89gk.apps.googleusercontent.com 721418733929-55iv503445sqh9rospct8lthb3n46f3k.apps.googleusercontent.com 694505692171-31closf3bcmlt59aeulg2j81ej68j6hk.apps.googleusercontent.com 694505692171-uojj6cbbjkc16pjh2a6377mdl4au56t5.apps.googleusercontent.com 538344653255-758c5h5isc45vgk27d8h8deabovpg6to.apps.googleusercontent.com 538344653255-5p6gglhg40odaprdfq3m4ks1iffd4rut.apps.googleusercontent.com 591388896419-m83ea3da36dtpom6ec8aiarhnmslnleg.apps.googleusercontent.com 415943744943-ba2prl1apgsem0ut2056q39f2ecl5kh6.apps.googleusercontent.com 634644268179-5o6ik0gpv3postmnnt81h0s9of4ulhkr.apps.googleusercontent.com 507575608849-8bdb2a671f0l2pknvqbg8kq75ojnf47s.apps.googleusercontent.com 429939771486-ki9r8ej8v6rs5tmdbskns6vguc9lkdg6.apps.googleusercontent.com 465204375633-gjgdbv90q0mm4fbm5jvrh6gki4dh1a6e.apps.googleusercontent.com 780590685461-qamtq1u32ct3o8dbfvlvo10pc2njbhs2.apps.googleusercontent.com".split(" "),ei.enable_web_id=
  ["28250620661-550h2e8djhee3ri2nma0u294i6ks921r.apps.googleusercontent.com","28250620661-jplop9r4d3uj679blu2nechmlm3h89gk.apps.googleusercontent.com","721418733929-55iv503445sqh9rospct8lthb3n46f3k.apps.googleusercontent.com"],ei);
  
  }catch(e){_._DumpException(e)}
  try{
  /*
  
   SPDX-License-Identifier: Apache-2.0
  */
  _.ik=function(a){};_.jk=function(a){};
  
  }catch(e){_._DumpException(e)}
  try{
  /*
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
  _.kk=function(a){var b={};if(a)for(var c=_.u(Object.keys(a)),d=c.next();!d.done;d=c.next())d=d.value,void 0!==a[d]&&""!==a[d]&&(b[d]=a[d]);return b};_.lk=function(a,b){a=new _.Cc(a);b&&_.Fc(a,_.Ze(_.kk(b)));return a.toString()};
  _.nk=function(a,b){};_.mk=function(a){};
  
  }catch(e){_._DumpException(e)}
  try{
  var Kk,Lk;Kk=/^data:(.*);base64,[a-z0-9+\/]+=*$/i;Lk={};_.Mk=function(a){this.g=Lk===Lk&&a||""};_.Mk.prototype.ba=!0;_.Mk.prototype.Y=function(){};_.Nk=function(a,b,c){_.yd(a,{timestamp:(new Date).getTime(),type:"ui_change",uiActivityType:b},c)};
  _.Ok=function(a,b){};
  
  }catch(e){_._DumpException(e)}
  try{
  /*
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
  var Tl;
  _.Ql=function(a,b){};_.Rl=function(a){};_.Sl=function(a){var b=a.match(_.Ac);a=b[1];var c=b[3];b=b[4];var d="";a&&(d+=a+":");c&&(d=d+"//"+c,b&&(d+=":"+b));return d};Tl=!_.eb&&!_.ta();
  _.Ul=function(a){};
  
  }catch(e){_._DumpException(e)}
  try{
  _.Vl=function(a,b,c){};
  
  }catch(e){_._DumpException(e)}
  try{
  var $l,fm,bm,jm,lm;_.Wl=function(){};_.Yl=function(a){};_.em=function(a,b,c){};
  $l=function(a){};
  fm=function(a){};
  bm=function(){};jm=function(a){};lm=function(a,b){};_.mm=function(a){};
  _.nm=function(){};_.om=function(a){};
  /*
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
  var pm=function(){};pm.prototype.set=function(a,b){};pm.prototype.add=function(a,b){};var qm=function(a,b,c,d){};pm.prototype.get=function(a){};pm.prototype.aa=function(){};
  var rm=function(a,b){};pm.prototype.Da=function(a){};var sm=function(a,b,c){};pm.prototype.Fa=function(){};
  var gm=function(){},
  hm=function(a,b){},tm=function(a){},um=function(a,b,c,d){};
  var am,im,Zl,cm,dm;_.C("google.accounts.id.intermediate.verifyParentOrigin",_.em);_.C("google.accounts.id.intermediate.notifyParentResize",_.mm);_.C("google.accounts.id.intermediate.notifyParentClose",_.nm);_.C("google.accounts.id.intermediate.notifyParentDone",function(){});_.C("google.accounts.id.intermediate.notifyParentTapOutsideMode",_.om);
  
  }catch(e){_._DumpException(e)}
  try{
  var vm=function(a){},wm=function(){},Y=function(a,b){},xm=function(a,b){_.Ye(a,function(c){b(_.Ge(c.target))},"GET",void 0,void 0,void 0,!0)},ym=function(a,b,c){},zm=function(a){},Am=function(){},Bm=function(a){},Cm=function(a,b){var c=[];c.push(_.G(a,"click",b));c.push(_.G(a,"keydown",function(d){}))},Dm=function(a){},Em=function(){},Hm=function(a){var b=void 0===b?"googleidentityservice":b;if(!document.getElementById(b)||!Fm[b]){var c=new _.Bd;/* removed stylesheet append */Fm[b]=c}},Im=function(a){},Jm=function(a,b,c,d){},Km=function(a,b,c,d){d=void 0===d?!1:d;var e=_.pe(document,
  "iframe");_.Ue(e,{src:b,id:c,title:"Sign in with Google Button",style:"display: block;position: relative;top: 0;left: 0;height: 0;width: 0;border: 0;"});if(d)return b=_.pe(document,"div"),b.id=c+"-wrapper",b.classList.add("L5Fo6c-sM5MNb"),d=_.pe(document,"div"),_.Ue(d,{"aria-label":"Sign in with Google",id:c+"-overlay"}),d.classList.add("L5Fo6c-bF1uUb"),d.tabIndex=0,e.tabIndex=-1,b.appendChild(e),b.appendChild(d),a.appendChild(b),d;a.appendChild(e);return e},Lm=function(a){return"number"===typeof a&&
  !isNaN(a)&&0<a},Nm=function(a){},Sm=function(a,b){Om>=(void 0===b?100:b)||(b=new _.Cc(Pm),_.Fc(b,_.Ze({client_id:Qm,as:Rm,event:a.toString()})),_.Ye(b.toString(),void 0,"POST",void 0,void 0,void 0,"https://accounts.google.com/gsi/log"!==Pm))},Wm=function(a){},Xm=function(){},Ym=function(){},dn=function(){var a=_.Q("g_id_onload");if(a){var b=_.Ul(a);a=_.Ql(b,Zm);void 0===a.auto_prompt&&(a.auto_prompt=!0);a.auto_prompt&&a.skip_prompt_cookie&&_.bf.get(a.skip_prompt_cookie)&&
  (a.auto_prompt=!1);delete a.skip_prompt_cookie;var c={},d;for(d in b)b.hasOwnProperty(d)&&0>$m.indexOf(d.toLowerCase())&&(c[d]=b[d]);a.state&&(c.state=a.state);if(d=a.login_uri){b=_.Qc(d);b.g||(_.Dc(b,location.protocol),b.g=location.hostname,_.Ec(b,location.port),Ym("relativeLoginUri",d),_.x("Relative login_uri was provided. Use absolute url instead. Relative login_uri may be considered invalid in the future."));if("https"!==b.h&&"localhost"!==b.g)throw Ym("unsecuredLoginUri",d),new an("Unsecured login_uri provided.");
  d=b.toString();a.login_uri=d}d&&!a.callback&&(a.callback=bn(d,c));"redirect"!==a.ux_mode||d||_.y("Missing required login_uri parameter for the redirect flow.");d=a.native_login_uri;delete a.native_login_uri;d&&a.native_callback?_.y("Cannot set both data-native_login_uri and data-native_callback."):d&&(a.native_callback=cn(d,c,a.native_id_param||"email",a.native_password_param||"password"));return a}},bn=function(a,b){},cn=function(a,b,c,d){},fn=function(a){},kn=function(a){a=new gn(a);hn.__G_ID_CLIENT__=a;Hm(a.sc);jn(a);return a},ln=function(a,b,c){var d=hn.__G_ID_CLIENT__;d||(kn(),d=hn.__G_ID_CLIENT__);d.C(a,b,c)},nn=function(a,b,c){if(a&&b){var d=hn.__G_ID_CLIENT__;d?mn(d,a,b,c):_.x("Failed to render button before calling initialize().")}else _.x("Failed to render button because there is no parent or options set.")},
  pn=function(){},qn=function(){var a=void 0===a?document.readyState:a;for(var b=_.Re("g_id_signout"),c=0;c<b.length;c++)_.G(b[c],"click",pn);try{var d=dn();if(d){var e=d.auto_prompt;delete d.auto_prompt;var f=d.moment_callback;delete d.moment_callback;kn(d);e&&("complete"===a?ln(f):_.G(window,"load",function(){},!1))}var g=_.Re("g_id_signin");for(a=0;a<g.length;a++){var h=fn(g[a]);nn(g[a],h)}}catch(l){_.y("Error parsing configuration from HTML: "+
  l.message)}},rn=function(){var a=hn.onGoogleLibraryLoad;a&&"function"===typeof a&&a()},sn=function(){var a=void 0===a?document.readyState:a;"complete"===a?setTimeout(function(){rn()},0):_.G(window,"load",function(){},!1)},tn=function(a,b,c){},un=function(a,b,c){},vn=function(a,b){},wn=function(){},xn=function(a){},yn=function(a){},zn=function(a,b,c){b={cd:b};void 0!=c&&(b.oldHeight=c);_.Nk(a,"prompt_resized",b)},Um=function(a){if(!(a instanceof Array)){a=_.u(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a},Vm=function(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b},an=function(){};_.z(an,Error);
  var Gm=function(a,b){},Mm=function(a,b){},An=["debug","info","warn"];
  var Bn=function(a){_.D.call(this,a)};_.z(Bn,_.D);
  var Cn=function(a){};_.z(Cn,_.D);
  var Dn={left:1,center:2},En={rectangular:1,square:3,pill:2,circle:4},Fn={large:1,medium:2,small:3},Gn={signin:1,signin_with:2,signup_with:3,continue_with:4},Hn={outline:1,filled_blue:2,filled_black:3},In={standard:1,icon:2},Jn=function(a,b,c){this.container=a;this.h=c;this.g=!1;a=new _.yh;b&&(b.logo_alignment&&_.O(a,6,Dn[b.logo_alignment]),b.shape&&_.O(a,3,En[b.shape]),b.size&&_.O(a,1,Fn[b.size]),b.text&&_.O(a,5,Gn[b.text]),b.theme&&_.O(a,2,Hn[b.theme]),b.type&&_.O(a,7,In[b.type]),b.width&&!isNaN(b.width)&&
  _.O(a,4,b.width));this.buttonAttributes=a;this.startTime=performance.now()},Kn=function(a){if(!a.g){_.sh(a.container,a.buttonAttributes);var b=_.Se("nsm7Bb-HzV7m-LgbsSe",a.container);b&&a.h&&Cm(b,function(){});a.i=performance.now()}};Jn.prototype.P=function(){if(!this.g){var a=_.Se("nsm7Bb-HzV7m-LgbsSe",this.container);a&&_.We(a);this.g=!0;this.j=performance.now()}};
  var Ln=function(){};_.k=Ln.prototype;_.k.getMomentType=function(){return this.g};_.k.isDisplayMoment=function(){return"display"===this.g};_.k.isDisplayed=function(){};_.k.isNotDisplayed=function(){return this.isDisplayMoment()&&!this.h};_.k.getNotDisplayedReason=function(){return this.isNotDisplayed()?this.j:void 0};_.k.isSkippedMoment=function(){};_.k.getSkippedReason=function(){};
  _.k.isDismissedMoment=function(){};_.k.getDismissedReason=function(){};
  var Fm={};
  var Tm=function(a,b,c){var d=Vm.apply(3,arguments);this.j=a;this.i=b;this.g=c;this.h=d};Tm.prototype.toString=function(){};var Om=Math.floor(100*Math.random()),Pm="https://accounts.google.com/gsi/log",Qm,Rm;
  var Mn=[0,7200,86400,604800,2419200],Nn=function(a,b,c){this.i=a;this.g=void 0===b?"i_":b;this.h=void 0===c?"g_state":c},On=function(a){if(a=_.bf.get(a.h))try{return JSON.parse(a)}catch(b){}return{}},Pn=function(a){var b=On(a),c={},d=b[a.g+"p"];void 0!=d&&(c.disable_auto_prompt=d);d=b[a.g+"t"];void 0!==d&&(c.disable_auto_select_to=d);a=b[a.g+"l"];c.prompt_suppress_level="number"===typeof a&&!isNaN(a)&&0<=a&&4>=a?a:0;return c},Qn=function(a,b){},Rn=function(a){a=Pn(a).disable_auto_prompt;return void 0!=a&&a>(new Date).getTime()},on=function(a){},Sn=function(a){};
  /*
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
  var Tn=RegExp("^((?!\\s)[a-zA-Z0-9\u0080-\u3001\u3003-\uff0d\uff0f-\uff60\uff62-\uffffFF-]+[\\.\\uFF0E\\u3002\\uFF61])+(?!\\s)[a-zA-Z0-9\u0080-\u3001\u3003-\uff0d\uff0f-\uff60\uff62-\uffffFF-]{2,63}$");
  var Un="StopIteration"in _.A?_.A.StopIteration:{message:"StopIteration",stack:""},Vn=function(){};Vn.prototype.ra=function(){};Vn.prototype.next=function(){};var Wn={done:!0,value:void 0},Xn=function(a){};Vn.prototype.pa=function(){};
  var bo=function(a){},ao=function(a){},
  Yn=function(a){};Yn.prototype.pa=function(){};Yn.prototype[Symbol.iterator]=function(){};Yn.prototype.h=function(){};var Zn=function(a){};_.z(Zn,Vn);Zn.prototype.ra=function(){};Zn.prototype.next=function(){};Zn.prototype[Symbol.iterator]=function(){};Zn.prototype.h=function(){};
  var $n=function(a){};_.z($n,Yn);$n.prototype.next=function(){};
  var co=function(){};
  var eo=function(){};_.Ta(eo,co);eo.prototype[Symbol.iterator]=function(){};
  var fo=function(a){};_.Ta(fo,eo);_.k=fo.prototype;_.k.set=function(a,b){};_.k.get=function(a){a=this.g.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};_.k.kb=function(a){};
  _.k.pa=function(a){};_.k.key=function(a){};
  var go=function(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.g=a};_.Ta(go,fo);
  var ho=function(a,b){this.h=a;this.g=b+"::"};_.Ta(ho,eo);ho.prototype.set=function(a,b){};ho.prototype.get=function(a){return this.h.get(this.g+a)};ho.prototype.kb=function(a){};
  ho.prototype.pa=function(a){};
  var io=new _.Mk("g_credential_picker"),jo=["bottom_sheet","card"],ko=["signin","signup","use"],Z=function(a,b){b=void 0===b?"i_":b;var c=new go;if(c.g)try{c.g.setItem("__sak","1");c.g.removeItem("__sak");var d=!0}catch(e){d=!1}else d=!1;this.v=d?new ho(c,"g_state_id_"):null;this.qc=b;this.i=a=Object.assign({},a);this.ia=!1;this.s=!0;this.I=null;b=new Uint8Array(16);(window.crypto||_.Xc.msCrypto).getRandomValues(b);this.A=btoa(String.fromCharCode.apply(String,Um(b))).replace(/=+$/,"");this.D={};this.ha=
  !1;lo(this,a)};_.z(Z,_.xd);
  var lo=function(a,b){var c=a.v?a.v.get("ll")||void 0:void 0;if(c)mo(a,c);else{if(c=void 0!==b.log_level)c=b.log_level,c=void 0===c||0<=(0,_.wa)(An,c);c&&mo(a,b.log_level)}a.rc=b.button_url||"https://accounts.google.com/gsi/button";a.wa=b.picker_url||"https://accounts.google.com/gsi/select";a.tc=b.prompt_url||"https://accounts.google.com/gsi/iframe/select";a.Na=b.status_url||"https://accounts.google.com/gsi/status";a.H=_.Sl(a.Na);a.sc=b.container_css_url||"https://accounts.google.com/gsi/style";a.uc=
  b.revoke_url||"https://accounts.google.com/gsi/revoke";c=a.H;var d=b.client_id,e=a.A;Pm=c?c+"/gsi/log":"https://accounts.google.com/gsi/log";Qm=d;Rm=e;a.callback=b.callback;a.ea="redirect"===b.ux_mode?"redirect":"popup";c=b.ui_mode;void 0!=c&&0<=(0,_.wa)(jo,c)||(c=_.bi()&&!_.ci()?"bottom_sheet":"card");a.uiMode=c;a.container=(b.prompt_parent_id?document.getElementById(b.prompt_parent_id):null)||document.body;a.ac=9E4;a.T=!1!==b.cancel_on_tap_outside;a.ha=!0===b.itp_support;c=b.state_cookie_domain;
  !c||null!=c&&Tn.test(c)||(c=void 0);a.o=new Nn(c,a.qc,b.state_cookie_name);a.va(b);c={};void 0!=b.client_id&&(c.client_id=b.client_id);void 0!=b.origin&&(c.origin=b.origin);void 0!=b.auto_select&&(c.auto_select=b.auto_select);c.ux_mode=a.ea;"redirect"===c.ux_mode&&b.login_uri&&(c.login_uri=b.login_uri);c.ui_mode=a.uiMode;void 0!==b.context&&0<=(0,_.wa)(ko,b.context)&&(c.context=b.context);void 0!=b.hint&&(c.hint=b.hint);void 0!=b.hosted_domain&&(c.hosted_domain=b.hosted_domain);void 0!=b.existing&&
  (c.existing=b.existing);void 0!=b.special_accounts&&(c.special_accounts=b.special_accounts);void 0!=b.nonce&&(c.nonce=b.nonce);void 0!=b.channel_id&&(c.channel_id=b.channel_id);void 0!=b.state&&(c.state=b.state);"warn"!==_.Na&&(c.log_level=_.Na);void 0!=b.hl&&(c.hl=b.hl);void 0!==b.disable_auto_focus&&(c.disable_auto_focus=b.disable_auto_focus);c.as=a.A;_.J("rp_cancelable_auto_select")&&(c.feature="cancelableAutoSelect");a.ua(c);a.g=c};Z.prototype.va=function(){};Z.prototype.ua=function(){};
  var jn=function(a){a.ia||(a.ia=!0,_.G(window,"message",function(b){no(a,b.R)},!1),a.I=_.G(document,"click",function(){}))};
  Z.prototype.C=function(a,b,c){var d=this;oo(this,!0)&&(qo(this,"flow_restarted"),Xm("flowRestarted"));this.l=a;this.fa=c;a=Object.assign({},this.i,b);lo(this,a);a="bottom_sheet"===this.g.ui_mode?"bottomSheet":"card";this.g.client_id?_.J("unsupported_browser")?(Y("One Tap is not supported in this User Agent."),this.j("browser_not_supported"),_.zd(this,"prompt_display_failed",{cause:"Unsupported user agent for one tap."}),Wm(a,"browserNotSupported")):Rn(this.o)?(Y("User has closed One Tap before. Still in the cool down period."),
  this.j("suppressed_by_user"),_.zd(this,"prompt_display_failed",{cause:"Prompt disabled by the user."}),Wm(a,"cooldown",(Pn(this.o).prompt_suppress_level||0).toString())):ro(this,function(e){e&&_.P(e,3)?(so(d),to(d),uo(d,!0)):e&&null!=_.E(e,2)?(_.de(_.H(e,_.Je,2)),e=_.E(_.H(e,_.Je,2),1),d.j(2===e?"opt_out_or_no_session":7===e?"secure_http_required":5===e?"unregistered_origin":3===e||4===e?"invalid_client":9===e?"browser_not_supported":12===e?"web_view_not_supported":"unknown_reason"),_.zd(d,"prompt_display_failed",
  {cause:"Error while checking for the credential status."})):e&&!_.P(e,3)&&(_.ta()||_.ai()||_.va()&&0<=_.Xa(_.Yc(),"14.4"))&&d.ha?(so(d),to(d),uo(d,!0)):e&&!_.P(e,3)?(_.w("No sessions found in the browser."),d.j("opt_out_or_no_session"),_.zd(d,"prompt_display_failed",{cause:"No signed in Google accounts available."})):(_.w("Invalid response from check credential status."),d.j("unknown_reason"),_.zd(d,"prompt_display_failed",{cause:"A network error was encountered while checking for the credential status."}))}):
  (_.y("Missing required parameter: client_id."),this.j("missing_client_id"),_.zd(this,"prompt_display_failed",{cause:"Missing required parameter: client_id."}),Wm(a,"noClientId"))};
  var mn=function(a,b,c,d){_.Ve(b);_.Xe(b);var e="gsi_"+Date.now()%1E6+"_"+Math.floor(1E6*Math.random()),f=new _.Cc(a.rc),g=Object.assign({},c),h=_.pe(document,"div");h.classList.add("S9gUrf-YoZ4jf");h.style.position="relative";b.appendChild(h);b=_.J("enable_inline_button")?vo(a,h,c,e):void 0;a.D[e]={iframe_id:e,handler:d,inline_button:b,data:{nonce:g.nonce||a.i.nonce,state:g.state||a.i.state}};delete g.nonce;delete g.state;d=_.Ze(g);d.add("client_id",a.i.client_id);d.add("iframe_id",e);d.add("as",
  a.A);g.locale&&(d.add("hl",g.locale),_.Uc(d,"locale"));"warn"!==_.Na&&d.add("log_level",_.Na);a.i.hint&&d.add("hint",a.i.hint);a.i.hosted_domain&&d.add("hosted_domain",a.i.hosted_domain);_.Fc(f,d);g=_.di();f=Km(h,f.toString(),e,g);g&&Cm(f,function(l){})},vo=function(a,b,c,d){var e=_.pe(document,"div");b.appendChild(e);b=new Jn(e,c,function(){});Kn(b);return b},xo=function(a,b){var c=a.D[b];if(c&&c.inline_button){var d=c.inline_button;requestAnimationFrame(function(){requestAnimationFrame(function(){d.P();
  c.inline_button=void 0;a:{if(performance&&performance.getEntriesByType){var e=performance.getEntriesByType("navigation");if(0<e.length){e=e[0].domComplete;break a}}e=performance&&performance.timing&&performance.timing.domComplete&&performance.timeOrigin?performance.timing.domComplete-performance.timeOrigin:void 0}e&&Sm(new Tm("button",void 0,"rendered","latency",Math.floor(d.i-e).toString(),Math.floor(d.j-e).toString(),Math.floor(d.startTime-e).toString()),1)})})}},wo=function(a,b){},oo=function(a,b){var c=a.container;if(!(document.getElementById("credential_picker_iframe")||c&&document.getElementById("credential_picker_container")))return!1;if(!b&&a.s)return Y("Cancel prompt request ignored. The prompt is in a protected state."),
  !1;if(!Im(a.container))return Y("Failed to remove prompt iframe."),!1;yn(a);a.s=!0;a.I&&(_.tc(a.I),a.I=null);return!0};Z.prototype.j=function(a){uo(this,!1,a)};
  var uo=function(a,b,c){if(a.l){var d=a.l;b||(a.l=void 0);var e=new Ln;e.g="display";e.h=b;b||(e.j=c||"unknown_reason");d.call(a,e)}},po=function(a,b){},qo=function(a,b){},yo=function(a,b){},ro=function(a,b){var c={client_id:a.g.client_id};a.g.hint&&(c.hint=a.g.hint);a.g.hosted_domain&&(c.hosted_domain=a.g.hosted_domain);
  a.g.as&&(c.as=a.g.as);c=_.lk(a.Na,c);xm(c,function(d){d&&"null"!==d?(d=new Bn(_.Zc(d)),b(d)):(_.y("Check credential status returns invalid response."),a.j("unknown_reason"),_.zd(a,"network",{cause:"invalid_response"}))})},so=function(a){};Z.prototype.ya=function(a){};
  var to=function(a){},no=function(a,b){if(b.origin===a.H&&b.data&&"readyForConnect"===b.data.type)if(_.w("Setup message received: "+JSON.stringify(b.data)),b.source){var c=b.data.iframeId;if(c){if(a.D[c]){c=new MessageChannel;c.port1.onmessage=function(e){if(e.data&&e.data.type){_.w("Message received in button channel: "+JSON.stringify(e.data));var f=e.data.type;if("command"!==f)_.x("Unknown event type ("+
  f+") received in the button channel.");else{var g;f=e.data.command;switch(f){case "clicked":f=e.data.iframeId;_.w("Clicked command received for button: "+f+".");wo(a,f);break;case "resize":f=e.data.iframeId;_.w("Resize command received for button: "+f+".");if(f){var h=e.data.height,l=e.data.width;if((g=(g=document.getElementById(f))&&"iframe"==g.tagName.toLowerCase()?g:null)&&Lm(h)&&Lm(l)){g.style.height=h+"px";g.style.width=l+"px";var m=e.data.verticalMargin;e=e.data.horizontalMargin;"number"!==
  typeof m||isNaN(m)||"number"!==typeof e||isNaN(e)||(g.style.marginTop=m+"px",g.style.marginBottom=m+"px",g.style.marginLeft=e+"px",g.style.marginRight=e+"px",xo(a,f));zn(a,l,h)}else g?_.x("Unable to resize iframe. Invalid dimensions."):_.x("Unable to resize iframe. No iframe found with id: "+(f+"."))}break;default:_.x("Unknown command type ("+f+") received in the button channel.")}}}};var d={type:"channelConnect"};try{b.source.postMessage(d,a.H,[c.port2])}catch(e){_.y("Failed to send postmessage to button iframe: "+
  e.message)}}}else if(b.data.channelId&&a.m&&(a.m&&_.he(a.m))===b.data.channelId){c=new MessageChannel;c.port1.onmessage=function(e){};d={type:"channelConnect",nonce:a.m};try{b.source.postMessage(d,a.H,[c.port2])}catch(e){_.y("Failed to send postmessage to iframe: "+e.message)}}}else _.w("Source invalid. Iframe was closed during setup.")};
  Z.prototype.O=function(a){};
  Z.prototype.revoke=function(a,b){};
  var mo=function(a,b,c){};
  var Zm={client_id:"str",auto_select:"bool",ux_mode:"str",ui_mode:"str",context:"str",nonce:"str",hosted_domain:"str",hint:"str",login_uri:"str",existing:"bool",special_accounts:"bool",state:"str",disable_auto_focus:"bool",log_level:"str",callback:"func",prompt_parent_id:"str",prompt_lifetime_sec:"num",cancel_on_tap_outside:"bool",state_cookie_domain:"str",itp_support:"bool",itp_mode:"str",native_callback:"func",moment_callback:"func",intermediate_iframe_close_callback:"func",auto_prompt:"bool",allowed_parent_origin:"str",
  native_login_uri:"str",native_id_param:"str",native_password_param:"str",skip_prompt_cookie:"str"},$m=Object.keys(Zm),en={parent_id:"str",size:"str",theme:"str",text:"str",shape:"str",width:"num",min_width:"num",logo_alignment:"str",type:"str",locale:"str",nonce:"str",state:"str"};
  var gn=function(a){a=Object.assign(Object.assign({},window.__G_ID_OPTIONS__),a);Z.call(this,a);this.B=a&&a.native_callback;_.J("enable_intermediate_iframe")&&(this.h=a&&a.allowed_parent_origin);this.ta=!1;this.F=!!this.h;this.ga=a&&a.intermediate_iframe_close_callback;if(this.h&&this.h)if("string"===typeof this.h){if(!zm(this.h))throw Error("ra");}else if(Array.isArray(this.h))for(a=0;a<this.h.length;a++)if("string"!==typeof this.h[a]||!zm(this.h[a]))throw Error("sa");};_.z(gn,Z);
  gn.prototype.va=function(a){this.B=a.native_callback};gn.prototype.j=function(a){_.w("Prompt will not be displayed");this.B&&zo(this);Z.prototype.j.call(this,a)};var zo=function(a){};
  gn.prototype.C=function(a,b,c){var d=this;this.F&&this.h?(_.w("Verifying parent origin."),_.em(this.h,function(){})):Z.prototype.C.call(this,a,b,c)};
  gn.prototype.O=function(a){};
  gn.prototype.ya=function(a){};gn.prototype.ua=function(a){if(this.F)switch(_.km){case "intermediate_client":a.flow_type=1;break;case "amp_client":a.flow_type=2}};
  var hn=window;(function(a){a=void 0===a?document.readyState:a;"loading"!==a&&(qn(),sn());_.G(document,"DOMContentLoaded",function(){},!1)})();_.C("google.accounts.id.cancel",function(){});_.C("google.accounts.id.disableAutoSelect",pn);_.C("google.accounts.id.initialize",kn);_.C("google.accounts.id.prompt",ln);_.C("google.accounts.id.PromptMomentNotification",Ln);_.C("google.accounts.id.renderButton",nn);
  _.C("google.accounts.id.revoke",function(a,b){});_.C("google.accounts.id.storeCredential",function(a,b){});
  _.C("google.accounts.id.setLogLevel",function(a){});
  var Ao=function(a,b){},Bo=function(a){},Co=function(a,b){};
  var Do=new _.Mk("g_auth_code_window"),Eo=function(a){};_.z(Eo,Ao);Eo.prototype.l=function(a){};
  Eo.prototype.requestCode=function(){};
  var Fo=new _.Mk("g_auth_token_window"),Go=window,Ho=function(a){};_.z(Ho,Ao);
  Ho.prototype.l=function(a){};
  Ho.prototype.requestAccessToken=function(a){};
  _.C("google.accounts.oauth2.initCodeClient",function(a){});_.C("google.accounts.oauth2.CodeClient",Eo);_.C("google.accounts.oauth2.initTokenClient",function(a){});_.C("google.accounts.oauth2.TokenClient",Ho);
  _.C("google.accounts.oauth2.hasGrantedAllScopes",function(a){});_.C("google.accounts.oauth2.hasGrantedAnyScope",function(a){});
  _.C("google.accounts.oauth2.revoke",function(a,b){});

  }catch(e){_._DumpException(e)}
  }).call(this,this.default_gsi);
  // Google Inc.

  //# sourceURL=/_/gsi/_/js/k=gsi.gsi.en.DgQBvtwGONo.O/am=chE/d=1/rs=AF0KOtW0-gB89A6n64tspOqFHLLZ14K4gw/m=gis_client_library