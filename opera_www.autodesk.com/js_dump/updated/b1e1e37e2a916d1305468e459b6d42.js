/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/utils.js":
/*!**************************!*\
  !*** ./scripts/utils.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() {}
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

class Utils {}

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(Utils, "debounce", (callback, delay) => {
  let timeoutId = null;
  return function () {};
});

/***/ }),

/***/ "./components/modal/styles.scss":
/*!**************************************!*\
  !*** ./components/modal/styles.scss ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!***********************************!*\
  !*** ./components/modal/index.js ***!
  \***********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() {}
/* harmony export */ });
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ "./components/modal/styles.scss");
/* harmony import */ var _scripts_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../scripts/utils.js */ "./scripts/utils.js");


class Modal extends HTMLElement {
  constructor() {
    super();
    /**
     * returns an object that maps attribute names to properties
     * @returns {object} attribute map object
     */

    function getAttributeMap() {
      return {
        'config': 'config'
      };
    }

    this.componentId = null;
    this.componentInitialized = false; //maps attribute names to class properties

    this.attributeMap = getAttributeMap();
    this.config = {};
  }
  /**
   * Append an array of child elements to an element
   * @param element {object} DOM element to which to append children
   * @param children {array} array of DOM elements to append
   */


  static appendChildren(element, children) {}
  /**
   * Create a DOM element of type.  Adds attributes defined in the config object and optional content
   * @param type {string} element type
   * @param config {object} object containing element attribute/value pairs
   * @param content {string} content of element
   * @returns {HTMLElement}
   */


  static createElement(type, config) {}
  /**
   * Set attributes on a DOM node
   * @param domElement {Object}
   * @param config {Object}
   */


  static setAttributes(domElement, config) {}
  /**
   * gets value from the local storage
   * @param key {string}
   * @returns {string}
   */


  static getFromLocalStorage(key) {}
  /**
   * this sets up the attributes that when changed will trigger attributeChangedCallback
   * @returns {string[]}
   */


  get observedAttributes() {}
  /**
   * set the config object
   * @param config {object}
   */


  setConfig() {
    const config = this.getAttribute('config');
    let attributeConfig = null;

    if (config) {
      attributeConfig = JSON.parse(config);
    } // default config


    const defaultConfig = {
      closeButtonDisplay: true,
      closeButtonOutside: false,
      disableClickOutsideClose: false,
      displayLogo: false,
      maxWidth: false,
      styleVariant: 'default',
      type: 'modal',
      describedBy: 'Modal description',
      labelledBy: 'Modal label',
      title: 'Modal Title',
      ctaButtonText: 'Primary',
      ctaButtonHref: '',
      secondaryButtonText: 'Secondary',
      secondaryButtonHref: '',
      content: 'This is the <strong>content</strong> of the modal',
      iconName: 'alert'
    };

    if (attributeConfig) {
      this.config = Object.assign({}, defaultConfig, attributeConfig);
    } else {
      this.config = defaultConfig;
    }
  }
  /**
   * Set the callback function on a button click
   * @param type {string} either 'cta' or anything else
   * @param callback {function} callback function called on button click
   */


  setButtonAction(type, callback) {}
  /**
   * Set the lightbox contents.  If contents is a DOM element add that
   * directly.  Otherwise create a span and add the contents to that.
   * @param contents
   */


  setLightboxContents(contents) {}
  /**
   * handle closing modal when clicking off of the modal window
   * @param event
   */


  clickOff(event) {}
  /**
   * close the interstitial popup
   * @returns {boolean} - returns true to keep transpiler happy
   */


  closeModal() {}
  /**
   * open the modal
   * @returns {boolean} - returns true to keep transpiler happy
   */


  openModal() {}
  /**
   * Create the modal header
   */


  createHeader() {}
  /**
   * Create the close buton
   */


  createCloseButton() {}
  /**
   * Create the alert icon if type is alert.
   * This uses the iconName configuration to choose the icon
   */


  createAlertIcon() {}
  /**
   * Creates the lightbox contents based on config properties
   */


  createLightboxContents() {}
  /**
   * Create the button panel and buttons
   */


  createButtonPanel() {}
  /**
   * Calculate a width that allows for the largest image while ensuring the entirety of the image is visible
   */


  calculateWidthForWindow(width, height) {}
  /**
   * set properties and set up intial DOM elements
   */


  createDOM() {}
  /**
   * Destroy the modal HTML
   */


  destroyDOM() {}
  /**
   * Cast modal as lightbox
   * @param path {string} path to either image or video
   * @param options {object} options for method
   */


  castAsLightbox(path, options) {}
  /**
   * Cast modal as a modal
   */


  castAsModal() {}
  /**
   * Cast modal as alert
   */


  castAsAlert(icon) {}
  /**
   * Update the value for a single config key
   * @param key
   * @param value
   */


  updateConfigValue(key, value) {}
  /**
   * built in method of custom elements.  fires whenever an attribute defined in observedAttributes changes
   * @param name {string} the attribute changed
   * @param oldValue {string} old value
   * @param newValue {string} new value
   */


  attributeChangedCallback(name, oldValue, newValue) {}

  /**
   * built-in method of custom elements.  fires when the element is added to the page
   */
  connectedCallback() {
    //TODO get this from the config once we have a model
    this.componentId = this.getAttribute('data-id');
    this.setConfig();
    this.closeModalBind = this.closeModal.bind(this);
  }
  /**
   * built in method of custom elements.  fires when the element is removed from the page
   */


  disconnectedCallback() {}

} // define the custom html element

if (window && window.customElements) {
  window.customElements.define("mfe-modal", Modal);
}
}();
/******/ })()
;
//# sourceMappingURL=standard.js.map