!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("wafer-rapid",[],t):"object"==typeof exports?exports["wafer-rapid"]=t():(e.wafer=e.wafer||{},e.wafer.wafers=e.wafer.wafers||{},e.wafer.wafers["wafer-rapid"]=t())}("undefined"!=typeof self?self:this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="https://s.yimg.com/aaq/wf/",t(t.s="./src/entry.js")}({"./src/base.js":function(e,t,r){"use strict";function n(){return s=r("./src/rapidInstance.js")}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s,l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c=function(){function e(e,t){var r=[],n=!0,i=!1,a=void 0;try{for(var o,s=e[Symbol.iterator]();!(n=(o=s.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(e){i=!0,a=e}finally{try{!n&&s.return&&s.return()}finally{if(i)throw a}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),f=window.wafer,d=f.base,p=f.constants,h=f.utils,v=f.WaferBaseClass,g=h.getDataYlk,y=h.getYlkMapForNode,_=h.setTimeout,w=h.clearTimeout,b=p.ATTR_PREFIX,m=[],k=["handleClick","handleRapidMouseEnter","handleRapidMouseLeave"],O=function(e){function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=r.selector;i(this,t);var o=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,{selector:n},{STATE_ATTRS:m})),s=e.getAttribute(b+"rapid-trigger");if(!s)return a(o);var u=(e.getAttribute(b+"rapid-trigger-offset")||"").split(" "),f=c(u,2),d=f[0],p=f[1],h=e.getAttribute(b+"rapid-trigger-interval");"click"!==s&&"eachClick"!==s||e.classList.add("has-rapid-click","has-wafer-click");var v=e.getAttribute(b+"rapid-method"),g=(e.getAttribute(b+"rapid-name")||"").split("|"),y=e.getAttribute("data-rapid_p")||"1",_=(e.getAttribute(b+"rapid-trigger-percentage")||"").split(" "),w=c(_,2),O=w[0],I=w[1],j=O?Math.max(Math.min(100,parseInt(O,10)),0):50,T=I?Math.max(Math.min(100,parseInt(I,10)),0):50;return o._util=l({},o._util,{elem:e,name:g,offsetX:Number(p)||0,offsetY:Number(d)||0,pos:y,trigger:s,triggerInterval:Number(h)||1e3,triggerMethod:v,triggerPercentX:isNaN(T)?50:T,triggerPercentY:isNaN(j)?50:j}),o._state=o._state||{},"intentionalView"===s&&(o._state.inViewCount=0,o._state.didLock=!1,o._state.inViewTimeoutInstance=null,o._util.triggerCount=g.length-1),k.forEach(function(e){o[e]=o[e].bind(o)}),"onLoad"===s?(o._beaconTrigger(),o.destroy()):"mouseenter"===s&&(o._state.mouseEnterTimeout=null,o.addEventListeners()),o}return o(t,e),u(t,[{key:"_beaconTrigger",value:function(){var e=(0,(s||n()).getRapidInstance)();if(e){var t=this._util,r=t.elem,i=t.name,a=t.trigger,o=t.triggerMethod,c=t.pos,u=i[this._state.inViewCount||0],f=g(r);if("beaconClick"===o)e.beaconClick(f.sec,f.slk,c,f);else if("beaconEvent"===o){var p=this._util.elem;d.emitLog({name:"WaferRapid",elem:p,meta:{i13n:f,name:u,type:"beaconEvent"}}),"intentionalView"===a?e.beaconEvent("intentional view",Object.assign({},f,{ll3:u})):e.beaconEvent(u,f)}else if("beaconLinkViews"===o)e.beaconLinkViews([l({},f,{_links:[f]})]);else if("pageView"===o){var h=y(r,"data-page-i13n"),v=f.spaceid,_=e.getRapidAttribute("keys");e.clearRapidAttribute(["keys"]),e.setRapidAttribute({keys:Object.assign({},_,h),spaceid:v||e.getRapidAttribute("spaceid")}),e.beaconPageview(h),"click"===a&&this.destroy()}}}},{key:"didLock",value:function(){this.nodeOutOfView(),this._state.didLock=!0}},{key:"didUnLock",value:function(){this._state.didLock=!1}},{key:"nodeInView",value:function(){var e=this,t=this._state,r=t.didLock,n=t.inViewTimeoutInstance;r||n||(this._state.inViewTimeoutInstance=_(function(){if(e._state.inViewTimeoutInstance=null,e._state.inViewCount>e._util.triggerCount-1)return e._beaconTrigger(),void(e._state.inViewCount=0);e._beaconTrigger(),++e._state.inViewCount,e.nodeInView()},this._util.triggerInterval))}},{key:"nodeOutOfView",value:function(){var e=this._state,t=e.didLock,r=e.inViewTimeoutInstance;!t&&r&&(w(r),this._state.inViewTimeoutInstance=null,this._state.inViewCount=0)}},{key:"handleClick",value:function(){this._util.elem.classList.contains("has-rapid-click")&&this._beaconTrigger()}},{key:"handleRapidMouseEnter",value:function(){var e=this;this._destroyed||(w(this._state.mouseEnterTimeout,this),this._state.mouseEnterTimeout=_(function(){e._beaconTrigger()},100,this))}},{key:"handleRapidMouseLeave",value:function(){this._destroyed||w(this._state.mouseEnterTimeout,this)}},{key:"config",get:function(){return{trigger:this._util.trigger}}}]),t}(v);O.events={click:[["has-rapid-click","handleClick"]],mouseenter:[["_self","handleRapidMouseEnter"]],mouseleave:[["_self","handleRapidMouseLeave"]]},t.default=O,e.exports=t.default},"./src/controller.js":function(e,t,r){"use strict";function n(){return u=a(r("./src/base.js"))}function i(){return f=r("./src/rapidInstance.js")}function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(t,"__esModule",{value:!0});var u,f,d=function(){function e(e,t){var r=[],n=!0,i=!1,a=void 0;try{for(var o,s=e[Symbol.iterator]();!(n=(o=s.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(e){i=!0,a=e}finally{try{!n&&s.return&&s.return()}finally{if(i)throw a}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},h=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),v=function e(t,r,n){null===t&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,r);if(void 0===i){var a=Object.getPrototypeOf(t);return null===a?void 0:e(a,r,n)}if("value"in i)return i.value;var o=i.get;if(void 0!==o)return o.call(n)},g=window.wafer.base,y=window.wafer.controllers.WaferBaseController,_=window.wafer.utils,w=_.convertNodeListToArray,b=_.elementInView,m=_.getDataYlk,k=_.throttle,O=function(e){for(var t=e,r=void 0;t;)t.classList.contains("wafer-rapid-module")&&(r=t),t=t.parentElement;return r},I=function(e,t){var r=t.get(e);if(!r)return!1;var n=r.instance,a=n._util.trigger;if(!e.id&&a)return!1;if(!e.id)return!1;var o=(0,(f||i()).getRapidInstance)();if(!o)return!1;var s=m(e),l=s.id,u=!1;if(o.isModuleTracked(l)?(0,(f||i()).checkIfModuleIsInTrackedMods)(l)||e.classList.contains("wafer-rapid-tracked")?o.refreshModule(l):(o.removeModule(l),u=!0):u=!0,u){var d=s.sec?c({},l,s.sec):[l];o.addModulesWithViewability(d)}return e.classList.add("wafer-rapid-tracked"),!0},j=function(e,t,r){var n=t.get(e);if(!n)return!1;var a=n.instance,o=a._util.trigger;if(r.delete(a),!e.id&&o)return!1;if(!e.id&&!o)return!1;var s=(0,(f||i()).getRapidInstance)();if(!s)return!1;var l=m(e),c=l.id;return s.isModuleTracked(c)&&s.removeModule(c),e.classList.remove("wafer-rapid-tracked"),!0},T=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.root,a=void 0===r?document:r,l=e.selector,c=void 0===l?".wafer-rapid-module":l,d=e.validateDelay,h=void 0===d?25:d;o(this,t);var v=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{root:a,selector:c,props:{selector:c},WaferClass:(u||n()).default}));return(0,(f||i()).getRapidInstance)((document.body.getAttribute("data-wf-rapid")||"rapidInstance").split(".")),v._state=p({},v._state,{didScroll:!1,elementWithIntentionalViewedInstances:new Map,lastScrollTop:0,scrollDirection:null}),v._validateWithThrottle=k(function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];v.validate.apply(v,t)},h,v),v.sync(),v}return l(t,e),h(t,[{key:"trigger",value:function(e){var t=this._state.elementInstances,r=t.get(e),n=r.instance;if(n){"scrollChange"===n._util.trigger&&(n._beaconTrigger(),n.destroy())}}},{key:"handleScroll",value:function(){this._state.didScroll=!0;var e=window.pageYOffset||document.documentElement.scrollTop,t=1;t=e>this._state.lastScrollTop?1:0,this._state.lastScrollTop=e<=0?0:e,this._validateWithThrottle({scrollDirection:t})}},{key:"handleResize",value:function(){this._mapOffset(),this._validateWithThrottle()}},{key:"sync",value:function(e){if(v(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"sync",this).call(this,e),e){var r=this._state.elementInstances,n=O(e);if(n)return void I(n,r);var i=w(e.getElementsByClassName("wafer-rapid-module"));i.length>0&&Array.prototype.forEach.call(i,function(e){I(e,r)})}}},{key:"handleVisibilityChange",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=this._state.elementInstances,r=!0,n=!1,i=void 0;try{for(var a,o=t.entries()[Symbol.iterator]();!(r=(a=o.next()).done);r=!0){var s=d(a.value,2),l=s[1],c=l.instance;switch(c.config.trigger){case"intentionalView":e||c.nodeOutOfView()}}}catch(e){n=!0,i=e}finally{try{!r&&o.return&&o.return()}finally{if(n)throw i}}}},{key:"willValidate",value:function(e,t){var r=t.scrollDirection;if(this._state.didScroll){var n=this._state,i=n.elementInstances,a=n.elementWithIntentionalViewedInstances,o=r===this._state.scrollDirection;this._state.scrollDirection=r,o||a.clear(),this._mapOffset(),e.forEach(function(e){var t=i.get(e),r=t.instance,n=r.config,o=r.offsetX,s=r.offsetY;switch(n.trigger){case"intentionalView":if(b(e,{offsetX:o,offsetY:s},g.viewport)){if(a.has(r))return;a.set(r,e),r.nodeInView()}else r.nodeOutOfView()}})}}},{key:"destroy",value:function(e){if(!e)return void v(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"destroy",this).call(this);var r=this._state,n=r.elementInstances,i=r.elementWithIntentionalViewedInstances;e.classList.contains("wafer-rapid-module")&&j(e,n,i);var a=w(e.getElementsByClassName("wafer-rapid-module",n));a.length>0&&Array.prototype.forEach.call(a,function(e){j(e,n)}),v(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"destroy",this).call(this,e)}},{key:"_mapOffset",value:function(){var e=this._state.elementInstances,t=!0,r=!1,n=void 0;try{for(var i,a=e.entries()[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=d(i.value,2),s=o[0],l=o[1],c=l.instance;if("intentionalView"===c._util.trigger){var u=c._util,f=u.hasOffsetX,p=u.hasOffsetY,h=u.triggerPercentX,v=u.triggerPercentY;!p&&(l.instance.offsetY=-parseInt(s.clientHeight*v/100,10)),!f&&(l.instance.offsetX=-parseInt(s.clientWidth*h/100,10))}}}catch(e){r=!0,n=e}finally{try{!t&&a.return&&a.return()}finally{if(r)throw n}}}}]),t}(y);t.default=T,e.exports=t.default},"./src/entry.js":function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i;t.default=new((i||function(){return i=n(r("./src/controller.js"))}()).default),e.exports=t.default},"./src/rapidInstance.js":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=window.wafer.utils.get,i=null,a=null;t.getRapidInstance=function(e){return e&&(a=e),!i&&a&&(i=n(window,a))&&"function"!=typeof i.refreshModule&&(a=null,i=null),i},t.checkIfModuleIsInTrackedMods=function(){var e=void 0;return function(t){if(!(e=e||window.rapidPageConfig))return!1;var r=e,n=r.rapidConfig,i=void 0===n?{}:n,a=i.tracked_mods_viewability;return!!a&&!!a[t]}}()}})});