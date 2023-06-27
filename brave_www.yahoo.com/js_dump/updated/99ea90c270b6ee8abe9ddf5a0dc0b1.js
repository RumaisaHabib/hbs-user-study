!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("wafer-action",[],e):"object"==typeof exports?exports["wafer-action"]=e():(t.wafer=t.wafer||{},t.wafer.wafers=t.wafer.wafers||{},t.wafer.wafers["wafer-action"]=e())}("undefined"!=typeof self?self:this,function(){return function(t){function e(o){if(r[o])return r[o].exports;var a=r[o]={i:o,l:!1,exports:{}};return t[o].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var r={};return e.m=t,e.c=r,e.d=function(t,r,o){},e.n=function(t){},e.o=function(t,e){},e.p="https://s.yimg.com/aaq/wf/",e(e.s="./src/entry.js")}({"./src/base.js":function(t,e,r){"use strict";function o(t,e,r){}function a(t,e){}function i(t,e){}function n(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var s=Object.assign||function(t){},c=function(){function t(t,e){}return function(e,r){}}(),u=function(){function t(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,r,o){return r&&t(e.prototype,r),o&&t(e,o),e}}(),l=[],p=window.wafer,d=p.constants,f=p.features,b=p.utils,m=p.WaferBaseClass,v=d.ATTR_PREFIX,y=b.bindEvent,h=b.fetchWithCache,g=b.findAncestor,k=b.getTemplateContent,w=b.getWaferInstanceForElem,_=["handleClick"],T="wafer-action-is-true",S={block:-1,unblock:0},A="publisher",P={},E=function(t){function e(t){}return n(e,t),u(e,[{key:"renderActionTemplate",value:function(t){}},{key:"statusDidUpdate",value:function(t){}},{key:"saveToStorage",value:function(){}},{key:"triggerTopicAction",value:function(t){}},{key:"getCrumb",value:function(){}},{key:"trigger",value:function(t){}},{key:"handleClick",value:function(t){}}]),e}(m);E.events={click:[["has-action-click","handleClick"]]},E.LS_KEY=v+"action-storage",e.default=E,t.exports=e.default},"./src/controller.js":function(t,e,r){"use strict";function o(){return c=a(r("./src/base.js"))}function a(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var c,u=Object.assign||function(t){},l=function(){function t(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,r,o){return r&&t(e.prototype,r),o&&t(e,o),e}}(),p=window.wafer,d=p.base,f=p.controllers,b=p.features,m=p.utils,v=f.WaferBaseController,y=m.getConfigFromJSONScriptNode,h=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.root,a=void 0===r?document:r,s=t.selector;i(this,e);var l=y(document.getElementById("wafer-action-config")),p=l.actionHost,f=l.appId,m=l.bookmarkActionHost,v=l.crumb,h=l.providerBrandProperty,g=l.shouldSaveToStorage,k=n(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,{root:a,selector:s,props:{actionHost:p,appId:f,bookmarkActionHost:m,crumb:v,providerBrandProperty:h,shouldSaveToStorage:g,selector:s},WaferClass:(c||o()).default})),w=k;return k.sync(),k._state=u({},k._state,{idInstanceMapping:new Map}),(c||o()).default.prototype.setActionStatus=function(t){},b.localStorage&&setTimeout(function(){k.processStoredAction(l,s)},1),(c||o()).default.prototype.updateAriaLiveRegion=function(t){},k}return s(e,t),l(e,[{key:"processStoredAction",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(t.shouldProcessState){var r=t.actionHost,a=t.appId,i=t.bookmarkActionHost,n=t.crumb,s=t.providerBrandProperty,l=window.localStorage.getItem((c||o()).default.LS_KEY);if(l){var p=document.createElement("div"),d={actionHost:r,appId:a,bookmarkActionHost:i,crumb:n,providerBrandProperty:s,selector:e};try{var f=JSON.parse(l),b=f.id,m=f.name,v=f.ttl,y=void 0===v?0:v,h=f.subType,g=f.type;y&&y>=Date.now()&&g&&h&&b&&(p.setAttribute("data-wf-on","complete:setState:wfAction.entity."+g),new((c||o()).default)(p,Object.assign({},d,{id:b,name:m,subType:h,type:g})).trigger(u({},d,{id:b,name:m,subType:h,type:g})))}catch(t){}window.localStorage.removeItem((c||o()).default.LS_KEY)}}}}]),e}(v);e.default=h,t.exports=e.default},"./src/entry.js":function(t,e,r){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a;e.default=new((a||function(){return a=o(r("./src/controller.js"))}()).default)({selector:".wafer-action"}),t.exports=e.default}})});