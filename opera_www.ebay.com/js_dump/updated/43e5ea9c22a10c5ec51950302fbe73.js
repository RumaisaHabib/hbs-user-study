function TaaSDynamic(){var c=window["cookies-browser"]||raptor.require("ebay.cookies");this.readCookie=function(d,e){return c.readCookie(d,e)};this.writeCookielet=function(d,e,b,a,g){c.writeCookielet(d,e,b,a,g)};this.readMultiLineCookie=function(d,e){};this.writeMultiLineCookie=function(d,e,b,a,g){};this.writeCookie=function(d,e,b){}}var TaaSDynamicObj=new TaaSDynamic;
function attachTrackingListener(c,d){window.jQuery?$(document).on(c,d):document.addEventListener(c,d,!1)}window.triggerTracking=function(c,d){var e=document.createEvent("CustomEvent");e.initCustomEvent(c,!1,!1,d);document.dispatchEvent(e)};var $trk=null;
(function(){function c(b){for(var a=1;a<arguments.length;a++){var g=arguments[a],c;for(c in g)Object.prototype.hasOwnProperty.call(g,c)&&(b[c]=g[c])}return b}function d(b){var a=$trk=this;c(a,a.config=b);a.image=document.createElement("img");a.image.style.display="none";a.rover.sync&&a.image.attr("src",a.rover.sync);a.originalPSI=a.currentPSI=b.psi;attachTrackingListener("click",a.onBody);attachTrackingListener("mousedown",a.onMouse);attachTrackingListener("rover",a.onRover);attachTrackingListener("track",
a.onTrack);attachTrackingListener("pulsar",a.onPulsar);attachTrackingListener("TRACKING_UPDATE_PSI",a.trackingUpdatePSI);attachTrackingListener("ADD_LAYER_PSI",a.addLayerPSI);attachTrackingListener("CLEAR_LAYER_PSI",a.clearLayerPSI)}function e(b,a,g){}c(d.prototype,{codes:"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxy-_!".split(""),
sizes:{p:4,c:1,m:3,l:3},start:{p:1,c:5,m:6,l:9},target:function(b){return b.tagName?b:b.target},attrib:function(b,a){return b.getAttribute?b.getAttribute(a):null},valid:function(b,a){},trackable:function(b){var a=$trk,b=b.tagName;return b.match(/^a$|area/i)?a.valid(b,b.href):b.match(/input/)&&b.type.match(/submit/i)&&b.form?a.valid(b,form.action):null},click:function(b){for(var a=$trk,b=a.target(b),g=null;b&&b.tagName;b=b.parentNode)if(g=g||a.trackable(b),a.attrib(b,
"_sp"))return a.clickElement(b,g);a.pid&&a.track(a.pid)},clickElement:function(b,a){},track:function(b,a){var c=$trk,d=b.split(".");b.match(/p\d+/)||d.push(c.pid);a&&d.push(a);for(var f=TaaSDynamicObj.readCookie("ds2","sotr"),e=c.chars(f&&"b"==f.charAt(0)?f:"bzzzzzzzzzzz"),i=0,l=d.length;i<l;i++){var h=d[i].match(/([pcml])(\d+)/);if(null!=h)for(var o=h[1],f=c.sizes[o],o=c.start[o],h=c.chars(c.encode(h[2],f)),k=0;k<f;k++)e[o+
k]=h[k]}i=0;l=e.length;for(f="";i<l;)f=f.concat(e[i++]);TaaSDynamicObj.writeCookielet("ds2","sotr",f)},chars:function(b){for(var a=0,c=b.length,d=[];a<c;)d.push(b.charAt(a++));return d},encode:function(b,a){for(var c=$trk.codes,d="";64<=b;b=b/64|0)d=c[b%64]+d;d=(0<=b?c[b]:"")+d;return d.concat("zzzz").substring(0,a)},onBody:function(b){$trk.click(b)},onMouse:function(){TaaSDynamicObj.writeCookielet("ebay","psi",$trk.currentPSI)},onTrack:function(b,a){},onRover:function(b,
a){},onPulsar:function(b,a,c){if("undefined"!==typeof _plsUBTTQ){if(("undefined"===typeof a||null==a)&&null!=b.detail)Array.isArray(b.detail)?(a=b.detail[0],
c=b.detail[1]):a=b.detail;"undefined"!==typeof a&&null!=a&&(b=JSON.parse(JSON.stringify(a)),a=b.eventProperty,"undefined"!==typeof c&&null!=c&&(c=JSON.parse(JSON.stringify(c)),"undefined"!==typeof a&&null!=a&&(a.actionKind=c.actionKind)),null!=b.eventFamily&&null!=b.eventAction&&_plsUBTTQ.push(["customEvts",b.eventFamily,b.eventAction,a]))}},trackingUpdatePSI:function(b,a){},addLayerPSI:function(b,a){},clearLayerPSI:function(){}});window.TaaSTrackingCore=d})();var idmapRoverURL;
function TaaSIdMapTracker(){this.roverService=function(c){"https:"==window.location.protocol||(!c||TaaSDynamicObj.readCookie("dp1","idm"))||(idmapRoverURL=c,window.jQuery?$(window).on("load",this.sendRequest):window.addEventListener("load",this.sendRequest,!1))};this.sendRequest=function(){};this.setCookieExpiration=function(c){};this.handleResponse=function(c){};this.createImage=function(c){}}
var tracking=tracking||function(){return{}}();
tracking.roversync=tracking.roversync&&void 0===QUnit||function(){function c(a){for(var b=a+"=",c=document.cookie.split(";"),d=0;d<c.length;d++)if(a=c[d],a=a.trim(),0==a.indexOf(b))return b=a.indexOf("="),a.substring(b+1);return null}function d(){}function e(){}var b,a=Date.now(),g,q,f,n=window.location.hostname,i,l,h,o,k;var m=100,m=c("roversyncSampling"),
m=null!=m&&!isNaN(m)?Number(m):null!=tracking._RSRandomSamplingPct&&!isNaN(tracking._RSRandomSamplingPct)?tracking._RSRandomSamplingPct:2;Math.random()<m/100?(h=!0,window.addEventListener?window.addEventListener("load",e,!1):window.attachEvent&&window.attachEvent("onload",e)):h=!1;return{getVersion:function(){},logStatus:function(){}}}();