!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("wafer-bind",[],t):"object"==typeof exports?exports["wafer-bind"]=t():(e.wafer=e.wafer||{},e.wafer.wafers=e.wafer.wafers||{},e.wafer.wafers["wafer-bind"]=t())}("undefined"!=typeof self?self:this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){},t.n=function(e){},t.o=function(e,t){},t.p="https://s.yimg.com/aaq/wf/",t(t.s="./src/entry.js")}({"./src/base.js":function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){},f=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=window.wafer.WaferBaseClass,c=/data-wf-(?:state-|\[)?([\w-]*)(?:\])?/,s=function(e){function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},u=r.selector;n(this,t);for(var f=[],i=e.attributes,s=0;s<i.length;s++){var l=i[s].name.match(c);l&&l[1]&&f.push(l[1].toLowerCase())}var p=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,{selector:u},{STATE_ATTRS:f}));return p._util=a({},p._util,{elem:e}),f.forEach(function(e){p.updateAttribute(e)}),p}return u(t,e),f(t,[{key:"updateAttribute",value:function(e){var t=this._util[e];if(void 0!==t){this._util.elem.setAttribute(e,t)}}},{key:"stateDidUpdate",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.stateAttr;this.updateAttribute(t)}}]),t}(i);t.default=s,e.exports=t.default},"./src/controller.js":function(e,t,r){"use strict";function n(){return i=o(r("./src/base.js"))}function o(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function f(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i,c=window.wafer.controllers.WaferBaseController,s=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.root,o=void 0===r?document:r,f=e.selector;u(this,t);var c=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{root:o,selector:f,props:{selector:f},WaferClass:(i||n()).default}));return c.sync(),c}return f(t,e),t}(c);t.default=s,e.exports=t.default},"./src/entry.js":function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o;t.default=new((o||function(){return o=n(r("./src/controller.js"))}()).default)({selector:".wafer-bind"}),e.exports=t.default}})});