(function(){var l=void 0,m=true,n=null,o=false,p=this;
function aa(a){};function ba(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x10-\x1f\x80-\x9f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}function ca(){}function da(a){}
function q(a,b,c){}var t={'"':'\\"',"\\":"\\\\","/":"\\/","\u0008":"\\b","\u000c":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\u000b":"\\u000b"},fa=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;function ea(a,b){};function ga(a){}function ha(a){}function v(a,b,c){var d=Array.prototype.slice,e=d.call(arguments,2);return function(){return a.apply(b,e.concat(d.call(arguments)))}}function y(a){return typeof a!=="undefined"}
function z(){}function B(a){return typeof a==="string"}function C(){return(new Date).getTime()}function D(a,b){if((!!a&&a.constructor===Object)===m)for(var c in a){if(a.hasOwnProperty(c)&&b(a[c],c)===o)break}else{c=0;for(var d=a.length;c<d;c++)if(b(a[c],c)===o)break}}function ia(a,b){var c;a:{c=0;for(var d=a.length;c<d;c++)if(b(a[c]))break a;c=-1}if(c>-1)return a[c]}var ja=p.setInterval,E=p.clearInterval,ka=p.setTimeout;
function la(a){ka(a,0)}function ma(){var a=y(p.XDomainRequest);return y(p.XMLHttpRequest)&&"withCredentials"in new p.XMLHttpRequest?new p.XMLHttpRequest:a?new p.XDomainRequest:n}function na(a,b,c){var d=ma();d===n?c(n):(oa(function(){d.open("GET",a,m)}),d.onload=function(){d.responseText?b(d):c(d)},d.onerror=function(){},d.timeout=1E3,d.ontimeout=function(){c(d,"timeout")},la(function(){oa(function(){d.send(n)})}))}function oa(a){try{a()}catch(b){}}
function F(){for(var a=document.domain,b=a.split("."),c=window.location.protocol==="https:"?"; Secure":"",d=0;d<b.length-1&&document.cookie.indexOf("_cbt=_cbt")==-1;)a=b.slice(-1-++d).join("."),document.cookie="_cbt=_cbt; domain="+a+c;document.cookie="_cbt=; expires=Thu, 01 Jan 1970 00:00:01 GMT; domain="+a+c;return a}var G=m;function pa(a,b,c){if(c)return a;return b&&b[H]&&G&&(c=F(),b[H]!==c)?a+"_"+z().split(".")[0]:a};function qa(a){var b={};a&&(a.charAt(0)=="?"&&(a=a.substring(1)),a=a.replace(/\+/g," "),D(a.split(/[&;]/g),function(a){}));return b}function ra(a,b){return!b?m:a==="http:"&&b==="80"||a==="https:"&&b==="443"};var H="cookieDomain";function sa(){var a=I;D(document.getElementsByTagName("script"),function(b){if(typeof b.src==="string"&&b.src.match(/chartbeat.js/))return b=qa(b.src.split("?")[1]),a.uid=a.uid||b.uid,a.domain=a.domain||b.domain,o})}function ta(a){if(J(a))return"";var a=a[H],b=F();a&&a!==z()&&a!==b&&(G=o,p.console.warn("Invalid cookieDomain (must be set to current domain or root domain), defaulting to root domain."));return a&&G?a:b}function J(a){return a&&a.noCookies?m:o};var K={};K.K=function(a,b){};K.e=function(a,b){var c=p._sf_async_config;if(J(c))return"";var a=pa(a,c,b)+"=",d="";D(document.cookie.split(";"),function(b){for(;b.charAt(0)===" ";)b=b.substring(1,b.length);if(b.indexOf(a)===0)return d=b.substring(a.length,b.length),o});return d};
K.create=function(a,b,c,d,e,f){};K.remove=function(a,b,c,d){};var L={};L.a=function(a){var b=p._sf_async_config;if(!a&&b&&b.noCookies)return n;if(L.a.r!==l)return L.a.r;var a=C()+"",c,d;try{if((d=p.localStorage).setItem("_cb_ls_test",a),c=d.getItem("_cb_ls_test")===a,d.removeItem("_cb_ls_test"),c)return L.a.r=d}catch(e){}return L.a.r=n};L.e=function(a){var b=L.a();if(!b)return"";var c=b.getItem(a+"_expires");return c&&(c=+c,!isNaN(c)&&C()>c)?(L.remove(a),""):b.getItem(a)||""};
L.create=function(a,b,c){};L.remove=function(a){};function M(a,b,c,d){this.w=a||"";this.j=b||"/";this.B=d||{};this.l=(this.v=J(this.B))?"":c||F();this.W=L.a()!==n||K.K(this.j,this.l);this.aa=o}M.prototype.create=function(a,b,c,d){};
M.prototype.e=function(a,b){if(this.v)return"";var a=b?a:this.w+a,c=(L.a()?L:K).e(a);!c&&L.a()&&(c=K.e(a));if(c){this.remove(a,b,"",m);var d=K.e(a),e=this.B[H]&&G,f=z(),e=e&&f!==F();if(c===d&&!e)return d;(f=a!=="_chartbeat2"||!d?o:+d.split(".")[2]<1647357868E3?m:o)&&K.remove(a,this.j,this.l);if(e){if(d)return f?c:d;d=K.e(a,m);return c!==d?c:""}if(d)return f?c:d}return c};
M.prototype.remove=function(a,b,c,d){};function ua(a,b,c){a.ownerDocument||(a=a.correspondingUseElement);if(!a||!a.ownerDocument)return n;var d=a.ownerDocument.documentElement,e=0,f=y(c)?c+1:-1;B(b)?(b=b.toLowerCase(),c=function(a){}):c=b;for(;a&&a!==d&&e!==f;){if(c(a))return a;a=a.parentNode;e++}return n}var va=function(){var a=/[ \r\n\t\f\u200B]+/g;return function(b){}}();
function wa(a){return a.nodeName&&a.nodeName.toLowerCase()==="a"&&(!a.namespaceURI||a.namespaceURI==="http://www.w3.org/1999/xhtml")}function xa(a,b){}
function N(a){}
function ya(a){}function za(a){};function Ba(){var a=L.a(m);return!a?o:!!a.getItem("_cb_ip")};var Ca="z";function Da(){y(p._cb_shared)||(p._cb_shared={});return p._cb_shared};function Ea(a,b){var c=Da(),c=(y(l)&&!y(c.m)?l:c.m)||[];c.push.apply(c,arguments);Da().m=c};function Fa(a){return a&&(a=Ga(),a=!a?a:a.hostname)?a:p.location.hostname}
function Ga(){var a=Ha();if(a){var b=a.href,a={hostname:"",pathname:"",search:"",protocol:"",port:"",hash:""};if(b){var c=document.createElement("a"),d=p.location;if(!/^https?:/.test(b)&&b.indexOf("javascript:")!==0&&b.indexOf("app:")<0)if(b.indexOf("//")===0)b=d.protocol+b;else if(b.indexOf("/")===0)var e=ra(d.protocol,d.port)?"":d.port,b=d.protocol+"//"+d.hostname+(e?":"+e:"")+b;else{var e=document.baseURI||d.href,f=e.indexOf("?");f===-1&&(f=e.indexOf("#"));if(f===-1)f=e.length;f=e.lastIndexOf("/",
f);b=f===-1?"/"+b:e.substr(0,f)+"/"+b}c.href=b;a.hostname=c.hostname;a.pathname=c.pathname;a.search=c.search;a.protocol=c.protocol;a.port=c.port;a.hash=c.hash;if(a.pathname.charAt(0)!=="/")a.pathname="/"+a.pathname;if(a.hostname==="")a.hostname=d.hostname;if(a.protocol==="")a.protocol=d.protocol;if(a.protocol==="javascript:")a.pathname="",a.hostname="",a.port="",a.hash="";if(ra(a.protocol,a.port)||a.port==="0")a.port=""}}return a}
function Ha(){var a=n;D(document.getElementsByTagName("link"),function(b){if(b.rel=="canonical")return a=b,o});return a}for(var Ia={},Ja=0;Ja<81;Ja++)Ia["0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=:@[]".charCodeAt(Ja)]=m;function Ka(a,b){}
function O(a){if(!B(a))return a;a=a.replace(/%([0-9A-Fa-f]{2})?/g,Ka);a=a.replace(/[^0-9A-Za-z\-._~!$&'()*+,;=:@\/\[\]?#%]+/g,encodeURIComponent);return a=a.replace(/[A-Za-z0-9-_.'+]+(@|%40)\w+([-.]\w+)*\.\w+([-.]\w+)*/g,"")};function La(a){var b,c;b=a.domain;c=!!a.useCanonical;c=(c=(c=!!a.useCanonicalDomain&&c)?Fa(c):p.location.hostname)&&c.replace(/^www\./,"");b=(p.location.protocol==="http:"?"http:":"https:")+"//mab.chartbeat.com/mab_strategy/headline_testing/get_strategy/?host="+encodeURIComponent(b)+"&domain="+encodeURIComponent(c)+"&path=";(a=a.path)?(a=a.replace(/.*:\/\//,"").replace(/^[^/]+\//,"/"),a=a.charAt(0)!=="/"?"/"+a:a):a="/";return b+encodeURIComponent(a)}
function Ma(a,b,c){var d,e,f;na(a,function(a){a=Na(a.responseText);a=(a=ba(a))&&a.constructor===Object&&B(a.status)&&(a.data&&a.data.constructor===Object||a.data===n)?{Q:a.status,h:a.data,Y:a.code,Z:a.message}:n;if(a===n)c();else if(a.Q==="success"){d={};f=e=0;if(a.h)a.h.experiments&&(d=a.h.experiments),y(a.h.probability_is_lift)&&(e=a.h.probability_is_lift),y(a.h.probability_is_control)&&(f=a.h.probability_is_control);b(d,[e,f])}else c()},c)}
function Oa(a,b,c){var d=[],e=b.b;if(e==="l"||e==="c")b=new Pa("lift_exp","","",b,e,"","",""),b.n=m,d.push(b);return d=d.concat(Qa(a,c,e))}function Ra(a,b){var c=[new P("l",a[0],"",{},"","",[]),new P("c",a[1],"",{},"","",[]),new P("m",1-a[0]-a[1],"",{},"","",[])];return Sa(c,b.lift_exp)||c[2]}function Qa(a,b,c){var d=[];D(a,function(a,f){});return d}
function Ta(a,b,c,d){}function Sa(a,b){var c;y(b)&&(c=ia(a,function(a){}));y(c)||(c=Ua(a));return c}function Ua(a){var b=Math.random();return ia(a,function(a){b-=a.S;return b<0})}function Va(a,b,c){}
function Wa(a,b){if(a===b)return m;for(var c=b.split("."),d=a.split(".");c.length;){if(d.length===0)return o;if(c.pop()!==d.pop())return o}return m}function Xa(){}
function Ya(){return p.document.getElementById("chartbeat-flicker-control-style")||p.document.getElementById("chartbeat-body-hider")}function Za(){var a=Ya();a&&a.parentNode.removeChild(a)}function Pa(a,b,c,d,e,f,g,i){}function P(a,b,c,d,e,f,g){this.b=a;this.S=b;this.content=c;this.X=d||{};this.N=e;this.O=f;this.C=g}
function $a(a){var b={};b.s=a.status;b.c=a.code;b.m=a.message;var c=n;if(a.data!==n)c={},c.s=a.data.U,c.g=a.data.u,c.m=a.data.R;b.d=c;return b}function ab(a){if(p.document&&p.document.body)a();else var b=ja(function(){},50)}var bb=/^[a-zA-Z0-9+/]*={0,2}$/;function Na(a){if(a&&bb.exec(a))try{return ha(a)}catch(b){}return a}
function cb(a){}function db(){var a=document.querySelectorAll(Aa());D(a,function(a){a=Array.prototype.slice.call(a.querySelectorAll("img"));D(a,function(a){a.setAttribute("pinger-seen","true");a.getAttribute("keep-hiding")!=="true"&&a.classList.remove("cb-it-hide")})})}function Aa(){var a=Q.articleBlockSelector;return a?a:"article, section"}
function eb(){};function fb(a,b){}
var R=function(){function a(a,b,c){}var b=/^\*\[@id='(.+?)'\](?:\[@([a-z-]+)='(.*)'\])?$/,c=/^([a-z][a-z0-9-]*)\[(\d+)\](?:\[@([a-z-]+)='(.*)'\])?$/,d=/^http(s)?\:\/\//;return function(e,d){}}();function gb(a){}
function hb(a){};function ib(a){this.i=a;this.q=[];var b=this.i,a=b.topStorageDomain,b=b.domain,c=p.location.hostname;this.V=a?a:Wa(c,b)?b:c.replace(/^www\./,"");this.L=this.i.cookiePath||"/";this.J=new M("_t_",this.i.cookiePath||"/",ta(this.i),this.i);this.o=jb;a=Ca;Da()[a]=m}
function kb(a){if(!a.G){a.G=m;var b=a.I,c=a.F,d=Na(a.J.e("tests")),e={};d.length>0&&(e=ba(d));var f=Ra(c,e);a.q=Oa(b,f,e);var g=a.q,i="."+a.V,h=a.L;a.t=function(a){var b,a=a||window.event;if(b=!a?n:ua(a.target||a.srcElement,wa,10))if(a=lb(b,g),a.length){var c;if(b===n||typeof b==="undefined")c="unknown";else if(b.tagName==="A"&&b.href)c=b.href;c=Va(c,a[0].test.u,a);a=(a=K.e("_chartbeat6"))?a.split("::"):[];a.length>=10&&a.splice(0,a.length-10+1);a.push(c);K.create("_chartbeat6",a.join("::"),60,h?
h:"/",i?i:"")}};a=v(function(){var a=this.t,b=p.document.body;b.addEventListener?b.addEventListener("click",a,m):b.attachEvent&&b.attachEvent("onclick",a);mb(this,g,f.b)},a);ab(a)}}function mb(a,b,c){var d=C(),e=v(function(){var a=C()-d>=5E3,e=p.document.readyState==="complete"||p.document.readyState!=="loading"&&!p.document.documentElement.doScroll,i;a||(i=nb(b,c));if(a||i||e)E(this.A),ob(this)},a);a.A=ja(e,50);e()}
function ob(a){Za();var b={},c=[],d=[],e=o,f="m";D(a.q,function(a){});if(e)b.lift_exp=f,a.J.create("tests",ga(da(b)),3600),f==="m"&&delete b.lift_exp;var g={status:pb,data:n,code:l,message:l};a.o!==jb?(g.status=qb,g.code=a.o):(a={U:b,u:f,R:c,$:d},g.status=rb,g.data=a);Ea(["t",$a(g)])}
function sb(a){var b=a.i;Ea(["ev",function(){}]);Ea(["sv",function(){}])}ib.prototype.T=function(a){};function ub(a){}function wb(a){}
ib.prototype.terminate=function(){};
function tb(a,b){sb(a);if(Ba())ub(a);else if("srcset"in document.createElement("img")){var c=La(b);if(y(c))y(b.flickerControl)||(b.flickerControl=m),b.flickerControl&&(ka(Za,1E3),Ya()||Xa()),Ma(c,function(b,c){a:{var f=p.chartbeatFlicker;if(f){if(f.timeoutFlag)break a;f.strategyFetched=m}a.I=b;a.F=c;a.H=m;for(var f=v(a.T,a),g=p._cbm||[];g.length;)f(g.shift());p._cbm={push:f};a.H&&kb(a)}},function(){})}else wb(a)}
function nb(a,b){var c=[];D(a,function(a,d){});db();var d=document.getElementById("chartbeat-flicker-control-style-ht");d&&d.parentNode.removeChild(d);return c.indexOf(o)===-1}
function lb(a,b){var c=[],d=n,e=101,f=o;D(b,function(b){});
d&&c.push(d);return c}function zb(a,b){}
function yb(a,b){}function Ab(a,b,c,d,e){}
function Cb(a){}function Bb(a){}var jb=0,vb=2,xb=4,rb="s",qb="e",pb="f";ta(p._sf_async_config||{});if(!K.e("cb_optout")){var Q=p._sf_async_config,I=Q;sa();var Db=!!I.useCanonical,Eb=Fa(!!I.useCanonicalDomain&&Db);I.title=I.title||document.title;I.domain=I.domain||Eb;var Fb=I,S;if(I.path)S=O(I.path);else a:{var T=n;if(Db){var U=Ga();if(T=!U?U:O(U.pathname)+U.search+U.hash){S=T;break a}}var Gb=p.location,T=O(Gb.pathname),V=Gb.search||"",V=V.replace(/PHPSESSID=[^&]+/,""),W=/&utm_[^=]+=[^&]+/ig,X=W.exec(Gb.search);X&&(V=V.replace(W,""));W=/\?utm_[^=]+=[^&]+(.*)/i;(X=W.exec(V))&&(V=V.replace(W,X[1]!=
""?"?"+X[1]:""));var Y=V,Hb="fbclid,gclid,gbraid,wbraid,msclkid,lcid,_gl,_ga,pure360.trackingid".split(","),Z="";if(Y.length>1){Y[0]==="?"&&(Y=Y.replace("?",""));Y[0]==="&"&&(Y=Y.replace("&",""));for(var Ib=Y.split("&"),$=0;$<Ib.length;$++){var Jb=Ib[$].split("=");Jb[0].length&&Hb.indexOf(Jb[0].toLowerCase())===-1&&(Z+=Z.length?"&":"?",Z+=Ib[$])}}V=Z;V=O(V);S=T+V}Fb.path=S;I.domain=I.domain&&I.domain.replace(/^www\./,"");if("textContent"in document.createElement("b")&&"querySelectorAll"in document&&
"atob"in window&&"btoa"in window){var Kb=new ib(Q);tb(Kb,Q)}};})();