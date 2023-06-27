!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("wafer-template",[],t):"object"==typeof exports?exports["wafer-template"]=t():(e.wafer=e.wafer||{},e.wafer.wafers=e.wafer.wafers||{},e.wafer.wafers["wafer-template"]=t())}("undefined"!=typeof self?self:this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){},t.n=function(e){},t.o=function(e,t){},t.p="https://s.yimg.com/aaq/wf/",t(t.s="./src/entry.js")}({"./src/base.js":function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){},s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=function e(t,r,n){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,r);if(void 0===o){var a=Object.getPrototypeOf(t);return null===a?void 0:e(a,r,n)}if("value"in o)return o.value;var i=o.get;if(void 0!==i)return i.call(n)},u=window.wafer,c=u.base,f=u.constants,p=u.WaferBaseClass,d=u.utils,v=d.getTemplateContent,m=d.setTimeout,y=f.ATTR_PREFIX,w=["stateTrigger"],h=["click","mouseenter","mouseleave"],g=function(e){function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=r.errorClass,s=void 0===a?"wafer-template-error":a,l=r.selector,u=r.successClass,c=void 0===u?"wafer-template-success":u;n(this,t);var f=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,{errorClass:s,selector:l,successClass:c},{STATE_ATTRS:w})),p=e.getAttribute(y+"template-target")||"",d=e.getAttribute(y+"template-id"),m=document.getElementById(d),g=m&&v(m),_=e.getAttribute(y+"template-render-delay"),b=e.getAttribute(y+"template-on")||"click",O=e.hasAttribute(y+"template-allow-rerender");return f._util=i({},f._util,{allowRerender:O,delay:null===_||void 0===_?0:Number(_),elem:e,errorClass:s,events:b?b.split(","):[],successClass:c,targetSelector:p,templateId:d,templateText:g}),-1!==f._util.events.indexOf("viewport")&&(f._util.viewportTrigger=!0),f._state={},h.forEach(function(e){f[e]=f[e].bind(f)}),f.onWaferEvent=f.onWaferEvent.bind(f),f.addEventListeners(),f}return a(t,e),s(t,[{key:"renderTemplate",value:function(e){var r=this._util,n=r.allowRerender,o=r.elem,a=r.successClass,i=r.targetSelector,s=r.templateText,l=r.templateId;return new Promise(function(r,u){var f=i?document.querySelector(i):o;o.classList.add("wafer-template-trigger-in-progress"),f.classList.add("wafer-template-target-in-progress"),m(function(){if(!s)return o.classList.remove("wafer-template-trigger-in-progress"),f.classList.remove("wafer-template-target-in-progress"),void u(new Error("[wafer-template] Cannot find template with id = "+l));if(!f)return void u(new Error("[wafer-template] Cannot find target element"));if(c.destroy(f),f.innerHTML=s,c.sync(f),f.classList.add(a),o.classList.remove("wafer-template-trigger-in-progress"),f.classList.remove("wafer-template-target-in-progress"),c._emit({elem:o,meta:{eventName:e,target:f},name:t.name},"template:render"),n)r(!1);else{var i=window.wafer.wafers["wafer-template"];i&&(!0===i.__esModule?i.default.destroy(o):i.destroy(o)),r(!0)}},0)})}},{key:"addEventListeners",value:function(){var e=this,r=this._util,n=r.elem,o=r.events;0!==o.size&&window.wafer.ready(function(){for(var r,a=!1,i=0;r=o[i];++i)"click"===r?n.classList.add("has-template-click","has-wafer-click"):"mouseenter"===r?a=!0:r.indexOf(":")&&window.wafer.on(r,e.onWaferEvent);a&&l(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"addEventListeners",e).call(e)})}},{key:"click",value:function(){}},{key:"onWaferEvent",value:function(e){}},{key:"remove",value:function(){}},{key:"stateDidUpdate",value:function(){-1!==this._util.events.indexOf("stateChange")&&this.renderTemplate("stateChange")}},{key:"mouseenter",value:function(){}},{key:"mouseleave",value:function(){}},{key:"destroy",value:function(){for(var e,r=this._util,n=r.elem,o=r.events,a=0;e=o[a];++a)e.indexOf(":")&&window.wafer.removeListener(e,this.onWaferEvent);n.classList.add("wafer-template-destroyed"),l(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"destroy",this).call(this)}},{key:"config",get:function(){return this.isReady()?{viewportTrigger:this._util.viewportTrigger}:{}}}]),t}(p);g.events={click:[["has-template-click","click"]],mouseenter:[["_self","mouseenter"]],mouseleave:[["_self","mouseleave"]]},t.default=g,e.exports=t.default},"./src/controller.js":function(e,t,r){"use strict";function n(){return l=o(r("./src/base.js"))}function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l,u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),c=window.wafer,f=c.base,p=c.controllers,d=c.utils,v=d.elementInView,m=d.throttle,y=p.WaferBaseController,w=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.root,o=void 0===r?document:r,s=e.selector,u=void 0===s?".wafer-template":s,c=e.validateDelay,f=void 0===c?25:c;a(this,t);var p=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{root:o,selector:u,WaferClass:(l||n()).default}));return p._validateWithThrottle=m(function(){p.validate()},f,p),p.sync(),p}return s(t,e),u(t,[{key:"trigger",value:function(e){}},{key:"handleScroll",value:function(){this._validateWithThrottle()}},{key:"handleResize",value:function(){}},{key:"willValidate",value:function(e){var t=this._state.elementInstances;e.forEach(function(e){var r=t.get(e),n=r.instance;n.config.viewportTrigger&&v(e,{offsetX:0,offsetY:0},f.viewport)&&n.renderTemplate("viewport").catch(function(e){})})}}]),t}(y);t.default=w,e.exports=t.default},"./src/entry.js":function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o;t.default=new((o||function(){return o=n(r("./src/controller.js"))}()).default)({selector:".wafer-template"}),e.exports=t.default}})});