!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("wafer-beacon",[],t):"object"==typeof exports?exports["wafer-beacon"]=t():(e.wafer=e.wafer||{},e.wafer.wafers=e.wafer.wafers||{},e.wafer.wafers["wafer-beacon"]=t())}("undefined"!=typeof self?self:this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="https://s.yimg.com/aaq/wf/",t(t.s="./src/entry.js")}({"./src/base.js":function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s=function(){function e(e,t){var r=[],n=!0,i=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){i=!0,o=e}finally{try{!n&&s.return&&s.return()}finally{if(i)throw o}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),c=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=function e(t,r,n){null===t&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,r);if(void 0===i){var o=Object.getPrototypeOf(t);return null===o?void 0:e(o,r,n)}if("value"in i)return i.value;var a=i.get;if(void 0!==a)return a.call(n)},u=["image-beacons","beacons"],f=window.wafer,h=f.base,d=f.constants,v=f.WaferBaseClass,p=window.wafer.utils,y=p.elementInView,b=p.fireBeacon,g=["handleBeaconClick","handleBeaconMouseenter"],w=d.ATTR_PREFIX,m=function(e){function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=r.selector,c=r.successClass;n(this,t);var l=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,{selector:o,successClass:c},{STATE_ATTRS:u})),f=e.getAttribute(w+"trigger-delay"),h=l._util["image-beacons"]||e.getAttribute(w+"image-beacons"),d=l._util.beacons||e.getAttribute(w+"beacons"),v=(e.getAttribute(w+"trigger-offset")||"").split(" "),p=s(v,2),y=p[0],b=p[1],m=e.getAttribute(w+"trigger")||"viewport",_=(e.getAttribute(w+"trigger-percentage")||"").split(" "),O=s(_,2),k=O[0],j=O[1],T=k?Math.max(Math.min(100,parseInt(k,10)),0):50,C=j?Math.max(Math.min(100,parseInt(j,10)),0):50,P=e.hasAttribute(w+"trigger-cumulative"),x=e.getAttribute(w+"beacon-container-class")||"",A=!!P,E=f&&parseInt(f,10);return E||(E="click"===m||"eachClick"===m||"mouseenter"===m||"onLoad"===m?0:1e3),l._util=a({},l._util,{"image-beacons":h,beacons:d,delay:E,elem:e,hasOffsetY:!!y,hasOffsetX:!!b,offsetX:Number(b)||0,offsetY:Number(y)||0,selector:o,containerClass:x,successClass:c,trigger:m,triggerCumulative:A,inviewTime:0,inviewStartTime:0,triggerPercentY:isNaN(T)?50:T,triggerPercentX:isNaN(C)?50:C,url:e.getAttribute(w+"url")}),g.forEach(function(e){l[e]=l[e].bind(l)}),"mouseenter"===m&&l.addEventListeners(),l}return o(t,e),c(t,[{key:"load",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.checkViewport,n=void 0===r||r,i=this._util,o=i.elem,s=i.inviewStartTime,c=i.successClass,l=i.triggerCumulative,u=this.shouldAlwaysTrigger();return l&&0===s&&(this._util.inviewStartTime=Date.now()),new Promise(function(t){if(!u&&o.classList.contains(c)&&t(!1),o.classList.contains("wafer-beacon-in-progress"))t(!1);else{var r=i["image-beacons"],s=i.beacons,l=i.delay,f=i.inviewTime,d=i.offsetX,v=i.offsetY,p=i.selector,g=Math.max(0,l-f);o.classList.add("wafer-beacon-in-progress"),setTimeout(function(){if((u||!o.classList.contains(c))&&(0===g||!1===n||h.isPageVisible&&y(o,a({},i,{offsetX:d,offsetY:v}),h.viewport)))return s&&s.split("|").forEach(function(e){return b(e)}),r&&r.split("|").forEach(function(e){return b(e,{useNavigator:!1,useTimestamp:!1})}),e.shouldAlwaysTrigger()||o.classList.remove(p.replace(".","")),o.classList.add(c),o.classList.remove("wafer-beacon-in-progress"),void t(!0);o.classList.remove("wafer-beacon-in-progress"),t(!1)},g)}})}},{key:"shouldAlwaysTrigger",value:function(){return"eachClick"===this._util.trigger}},{key:"nodeOutofView",value:function(){var e=this._util,t=e.inviewStartTime;if(t>0){var r=Date.now();this._util.inviewTime+=r-t}this._util.inviewStartTime=0}},{key:"stateDidUpdate",value:function(){}},{key:"destroy",value:function(){"mouseenter"===this._util.trigger&&this.removeEventListeners(),l(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"destroy",this).call(this)}},{key:"handleBeaconClick",value:function(){var e=this,t=this._util.trigger;this.load({checkViewport:!1}).then(function(r){r&&"click"===t&&e.destroy()})}},{key:"handleBeaconMouseenter",value:function(){var e=this,t=this._util.trigger;this.load({checkViewport:!1}).then(function(r){r&&"mouseenter"===t&&e.destroy()})}},{key:"offsetY",set:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this._util.offsetY=this._util.offsetY||e}},{key:"offsetX",set:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this._util.offsetX=this._util.offsetX||e}},{key:"config",get:function(){var e=this._util;return{offsetX:e.offsetX,offsetY:e.offsetY,successClass:e.successClass,trigger:e.trigger}}}]),t}(v);m.events={click:[["has-beacon-click","handleBeaconClick"]],mouseenter:[["_self","handleBeaconMouseenter"]]},t.default=m,e.exports=t.default},"./src/controller.js":function(e,t,r){"use strict";function n(){return c=i(r("./src/base.js"))}function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c,l=function(){function e(e,t){var r=[],n=!0,i=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){i=!0,o=e}finally{try{!n&&s.return&&s.return()}finally{if(i)throw o}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},f=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),h=window.wafer.utils,d=h.bindEvent,v=h.each,p=h.elementInView,y=h.throttle,b=h.unbindEvent,g=window.wafer.base,w=window.wafer.controllers.WaferBaseController,m=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.containerClass,i=void 0===r?null:r,s=e.root,l=void 0===s?document:s,f=e.selector,h=e.successClass,d=void 0===h?"wafer-beacon-loaded":h,v=e.validateDelay,p=void 0===v?25:v;o(this,t);var b=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{root:l,selector:f,props:{selector:f,successClass:d},WaferClass:(c||n()).default}));return b._options=u({},b._options,{container:!!i&&l.getElementsByClassName(i)}),b._validateWithThrottle=y(function(){b.validate()},p,b),b.sync(),b}return s(t,e),f(t,[{key:"handleScroll",value:function(){this._validateWithThrottle()}},{key:"handleVisibilityChange",value:function(){if(arguments.length>0&&void 0!==arguments[0]&&!arguments[0]){var e=this._state.elementInstances,t=!0,r=!1,n=void 0;try{for(var i,o=e.values()[Symbol.iterator]();!(t=(i=o.next()).done);t=!0)i.value.instance.nodeOutofView()}catch(e){r=!0,n=e}finally{try{!t&&o.return&&o.return()}finally{if(r)throw n}}}else this._validateWithThrottle()}},{key:"handleResize",value:function(){this._mapOffset(),this._validateWithThrottle()}},{key:"willDestroy",value:function(){var e=this,t=this._options.container;t&&v(t,function(t){b(t,"scroll",e._validateWithThrottle)})}},{key:"didSync",value:function(){var e=this,t=this._state,r=t.elementInstances,n=t.mounted;if(0!==r.size){if(!n){var i=this._options.container;this._state.mounted=!0,i&&v(i,function(t){d(t,"scroll",e._validateWithThrottle)})}this._mapOffset()}}},{key:"willValidate",value:function(e){var t=this._state.elementInstances,r=this._options;this._mapOffset(),e.forEach(function(e){var n=t.get(e),i=n.instance,o=i.config,a=o.offsetX,s=o.offsetY,c=o.successClass;switch(o.trigger){case"viewport":e.classList.contains(c)||p(e,u({},r,{offsetX:a,offsetY:s}),g.viewport)?i.load(e).then(function(e){e&&i.destroy()}):i.nodeOutofView();case"click":case"eachClick":e.classList.add("has-beacon-click","has-wafer-click");break;case"onLoad":i.load(e).then(function(){i.destroy()})}})}},{key:"_mapOffset",value:function(){var e=this._state.elementInstances,t=!0,r=!1,n=void 0;try{for(var i,o=e.entries()[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){var a=l(i.value,2),s=a[0],c=a[1],u=c.instance,f=u._util,h=f.hasOffsetY,d=f.hasOffsetX,v=f.triggerPercentY,p=f.triggerPercentX;!h&&(c.instance.offsetY=-parseInt(s.clientHeight*v/100,10)),!d&&(c.instance.offsetX=-parseInt(s.clientWidth*p/100,10))}}catch(e){r=!0,n=e}finally{try{!t&&o.return&&o.return()}finally{if(r)throw n}}}}]),t}(w);t.default=m,e.exports=t.default},"./src/entry.js":function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i;t.default=new((i||function(){return i=n(r("./src/controller.js"))}()).default)({selector:".wafer-beacon"}),e.exports=t.default}})});