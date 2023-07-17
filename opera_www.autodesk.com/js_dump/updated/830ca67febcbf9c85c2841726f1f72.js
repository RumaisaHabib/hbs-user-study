/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/utilities.js":
/*!******************************!*\
  !*** ./scripts/utilities.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);


class Utilities {
  constructor() {}
  /** Checks if string is empty, null, or undefined
   * @param str {string} to be checked
   * @returns {Boolean}
   */


  isEmptyString(str) {}
  /** Used mainly in the case of checking for boolean values returned from config
   * checks if the string returned should is equal to "false"
   * @param booleanString {string}
   * @returns {Boolean}
   */


  isFalsy(booleanString) {}
  /** Used mainly in the case of checking for boolean values returned from config
   * checks if the string returned should is equal to "true"
   * @param booleanString {string}
   * @returns {Boolean}
   */


  isTruthy(booleanString) {}
  /**
   * Append an array of child elements to an element
   * @param element {object} DOM element to which to append children
   * @param children {array} array of DOM elements to append
   */


  appendChildren(element, children) {}
  /**
   * Create a DOM element of type.  Adds attributes defined in the config object and optional content
   * @param type {string} element type
   * @param config {object} object containing element attribute/value pairs
   * @param content {string} content of element
   * @returns {HTMLElement}
   */


  createElement(type, config) {}
  /**
   * returns an object that maps attribute names to properties
   * @returns {object} attribute map object
   */


  getAttributeMap() {}
  /**
   * Set attributes on a DOM node
   * @param domElement {Object}
   * @param config {Object}
   */


  setAttributes(domElement, config) {}
  /**
   * converts provided string to an array
   * based on provided separator
   * @param str {string}
   * @param separator {string}
   * @returns {Array}
   */


  convertStrToUniformArr(str, separator) {}
  /**
   * removes spaces in provided string
   * and brings it to one case (i.e. lower case)
   * @param str {string}
   * @returns {string}
   */


  unifyString(str) {}
  /**
   * gets value from the local storage
   * @param key {string}
   * @returns {string}
   */


  getFromLocalStorage(key) {}
  /**
   * sets value to the local storage
   * @param key {string}
   * @param val {string}
   */


  setLocalStorage(key, val) {}

}

/* harmony default export */ __webpack_exports__["default"] = (new Utilities());

/***/ }),

/***/ "./components/tooltip/styles-dark.scss":
/*!*********************************************!*\
  !*** ./components/tooltip/styles-dark.scss ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./components/tooltip/styles.scss":
/*!****************************************!*\
  !*** ./components/tooltip/styles.scss ***!
  \****************************************/
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

/***/ }),

/***/ "./node_modules/@digital-hig/theme-data/lib/build/json/lightTheme/resolvedRoles.json":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@digital-hig/theme-data/lib/build/json/lightTheme/resolvedRoles.json ***!
  \*******************************************************************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"primitives.borderRadii.none":"0","primitives.borderRadii.small":"2px","primitives.borderRadii.medium":"4px","primitives.borderRadii.large":"8px","primitives.borderRadii.round":"9999px","primitives.borderWidths.none":"0","primitives.borderWidths.medium":"1px","primitives.borderWidths.large":"2px","primitives.colors.primary.white":"#FFFFFF","primitives.colors.primary.black":"#000000","primitives.colors.accent.clay":"#D74E26","primitives.colors.accent.plant":"#2BC275","primitives.colors.accent.iris":"#5F60FF","primitives.colors.accent.gold":"#FFC21A","primitives.colors.detail.slate-dark":"#666666","primitives.colors.detail.slate-light":"#CCCCCC","primitives.colors.detail.transparent":"transparent","primitives.colors.tint.clay-550":"#D95529","primitives.colors.tint.clay-600":"#C34922","primitives.colors.tint.plant-600":"#00A85D","primitives.colors.tint.iris-400":"#8080FF","primitives.colors.tint.iris-450":"#6C6DFF","primitives.colors.tint.iris-550":"#5C5DF9","primitives.colors.tint.iris-600":"#2C2C8C","primitives.colors.tint.slate-100":"#F9F9F9","primitives.colors.tint.slate-150":"#F2F2F2","primitives.colors.tint.slate-200":"#DEDEDE","primitives.colors.tint.slate-400":"#BFBFBF","primitives.colors.tint.slate-600":"#333333","primitives.colors.tint.slate-650":"#262626","primitives.colors.tint.slate-700":"#212121","primitives.colors.tint.slate-800":"#161616","primitives.fontFamilies.default":"ArtifaktElement, Arial, sans-serif","primitives.fontFamilies.display":"ArtifaktLegend","primitives.fontFamilies.code":"courier","primitives.fontSizes.1":"0.75rem","primitives.fontSizes.2":"0.875rem","primitives.fontSizes.3":"1rem","primitives.fontSizes.4":"clamp(1.125rem, calc(1.06rem + 0.278vw), 1.3125rem)","primitives.fontSizes.5":"clamp(1.3125rem, calc(1.21rem + 0.463vw), 1.625rem)","primitives.fontSizes.6":"clamp(1.5rem, calc(1.29rem + 0.926vw), 2.125rem)","primitives.fontSizes.7":"clamp(1.75rem, calc(1.42rem + 1.48vw), 2.75rem)","primitives.fontSizes.8":"clamp(2rem, calc(1.50rem + 2.22vw), 3.5rem)","primitives.fontSizes.9":"clamp(2.3125rem, calc(1.58rem + 3.24vw), 4.5rem)","primitives.fontSizes.10":"clamp(2.625rem, calc(1.58rem + 4.63vw), 5.75rem)","primitives.fontSizeFallbacks.1":"0.75rem","primitives.fontSizeFallbacks.2":"0.875rem","primitives.fontSizeFallbacks.3":"1rem","primitives.fontSizeFallbacks.4":"1.25rem","primitives.fontSizeFallbacks.5":"1.5rem","primitives.fontSizeFallbacks.6":"1.875rem","primitives.fontSizeFallbacks.7":"2.375rem","primitives.fontSizeFallbacks.8":"2.9375rem","primitives.fontSizeFallbacks.9":"3.625rem","primitives.fontSizeFallbacks.10":"4.375rem","primitives.fontWeights.default":400,"primitives.fontWeights.stout":600,"primitives.fontWeights.emphasized":700,"primitives.fontWeights.display":800,"primitives.gradients.gradient-100":"linear-gradient(90deg, #D74E26 0%, #FFC21A 23%, #F0FFC4 45%, #2BC275 70%, #5F60FF 100%)","primitives.gradients.gradient-30":"linear-gradient(90deg, #EFB8A8 0%, #FFE7A3 23%, #F9FFE7 45%, #AAE7C8 70%, #BCAAFB 100%)","primitives.gradients.gradient-40":"linear-gradient(90deg, #F3CABE 0%, #FFEDBB 23%, #FBFFEE 45%, #C0EDD6 70%, #CDC0FC 100%)","primitives.gradients.skeleton-wave":"linear-gradient(270deg, rgba(128,128,128,0)0%,rgba(128,128,128,0.2)40%,rgba(128,128,128,0.2)60%,rgba(128,128,128,0)100%)","primitives.grid.scale.0":"0","primitives.grid.scale.1":400,"primitives.grid.scale.2":560,"primitives.grid.scale.3":720,"primitives.grid.scale.4":880,"primitives.grid.scale.5":1040,"primitives.grid.scale.6":1200,"primitives.grid.scale.7":1360,"primitives.grid.scale.8":1520,"primitives.grid.scale.9":1680,"primitives.grid.scale.10":1840,"primitives.grid.gutter.4":"16px","primitives.grid.gutter.5":"20px","primitives.grid.gutter.6":"24px","primitives.grid.max-width":"1440px","primitives.grid.margins.sm":"16px","primitives.grid.margins.md":"24px","primitives.grid.margins.lg":"5%","primitives.grid.margins.xl":"auto","primitives.lineHeights.default":"1.5","primitives.lineHeights.compact":"1.25","primitives.lineHeights.tight":"1.2","primitives.opacity.opaque":1,"primitives.opacity.transparent":0,"primitives.spacings.0":"0","primitives.spacings.1":".25rem","primitives.spacings.2":".5rem","primitives.spacings.3":".75rem","primitives.spacings.4":"1rem","primitives.spacings.5":"1.25rem","primitives.spacings.6":"1.5rem","primitives.spacings.7":"2rem","primitives.spacings.8":"3rem","primitives.spacings.9":"4rem","primitives.transitions.duration.0":"0ms","primitives.transitions.duration.1":"125ms","primitives.transitions.duration.2":"187.5ms","primitives.transitions.duration.3":"250ms","primitives.transitions.duration.4":"312.5ms","primitives.transitions.duration.5":"375ms","primitives.transitions.easing.smooth":"cubic-bezier(0.2, 0, 0.8, 1)","primitives.transitions.easing.energetic":"cubic-bezier(0.2, 0, 0.4, 1)","primitives.transitions.easing.speed-up":"cubic-bezier(0.6, 0, 1, 1)","primitives.transitions.easing.slow-down":"cubic-bezier(0, 0, 0.4, 1)","primitives.letterSpacings.default":"0","primitives.letterSpacings.loose":"0.02em","tokens.grid.sm.breakpoint":"0","tokens.grid.sm.gutter":"16px","tokens.grid.sm.margin":"16px","tokens.grid.sm.name":"small","tokens.grid.md.breakpoint":560,"tokens.grid.md.gutter":"20px","tokens.grid.md.margin":"24px","tokens.grid.md.name":"medium","tokens.grid.lg.breakpoint":1040,"tokens.grid.lg.gutter":"24px","tokens.grid.lg.margin":"5%","tokens.grid.lg.name":"large","tokens.grid.xl.breakpoint":1520,"tokens.grid.xl.gutter":"24px","tokens.grid.xl.margin":"auto","tokens.grid.xl.name":"extra-large","tokens.typography.display-extra.fontFamily":"ArtifaktLegend","tokens.typography.display-extra.fontSize":"clamp(2.625rem, calc(1.58rem + 4.63vw), 5.75rem)","tokens.typography.display-extra.fontWeight":800,"tokens.typography.display-extra.lineHeight":"1.2","tokens.typography.display-extra.letterSpacing":"0","tokens.typography.display.fontFamily":"ArtifaktLegend","tokens.typography.display.fontSize":"clamp(2.3125rem, calc(1.58rem + 3.24vw), 4.5rem)","tokens.typography.display.fontWeight":800,"tokens.typography.display.lineHeight":"1.2","tokens.typography.display.letterSpacing":"0","tokens.typography.headline-largest.fontFamily":"ArtifaktLegend","tokens.typography.headline-largest.fontSize":"clamp(2rem, calc(1.50rem + 2.22vw), 3.5rem)","tokens.typography.headline-largest.fontWeight":800,"tokens.typography.headline-largest.lineHeight":"1.2","tokens.typography.headline-largest.letterSpacing":"0","tokens.typography.headline-larger.fontFamily":"ArtifaktLegend","tokens.typography.headline-larger.fontSize":"clamp(1.75rem, calc(1.42rem + 1.48vw), 2.75rem)","tokens.typography.headline-larger.fontWeight":800,"tokens.typography.headline-larger.lineHeight":"1.2","tokens.typography.headline-larger.letterSpacing":"0","tokens.typography.headline-large.fontFamily":"ArtifaktLegend","tokens.typography.headline-large.fontSize":"clamp(1.5rem, calc(1.29rem + 0.926vw), 2.125rem)","tokens.typography.headline-large.fontWeight":800,"tokens.typography.headline-large.lineHeight":"1.2","tokens.typography.headline-large.letterSpacing":"0","tokens.typography.headline-medium.fontFamily":"ArtifaktLegend","tokens.typography.headline-medium.fontSize":"clamp(1.3125rem, calc(1.21rem + 0.463vw), 1.625rem)","tokens.typography.headline-medium.fontWeight":800,"tokens.typography.headline-medium.lineHeight":"1.2","tokens.typography.headline-medium.letterSpacing":"0","tokens.typography.headline-small.fontFamily":"ArtifaktElement, Arial, sans-serif","tokens.typography.headline-small.fontSize":"clamp(1.125rem, calc(1.06rem + 0.278vw), 1.3125rem)","tokens.typography.headline-small.fontWeight":700,"tokens.typography.headline-small.lineHeight":"1.25","tokens.typography.headline-small.letterSpacing":"0","tokens.typography.headline-smaller.fontFamily":"ArtifaktElement, Arial, sans-serif","tokens.typography.headline-smaller.fontSize":"1rem","tokens.typography.headline-smaller.fontWeight":700,"tokens.typography.headline-smaller.lineHeight":"1.5","tokens.typography.headline-smaller.letterSpacing":"0","tokens.typography.headline-smallest.fontFamily":"ArtifaktElement, Arial, sans-serif","tokens.typography.headline-smallest.fontSize":"0.875rem","tokens.typography.headline-smallest.fontWeight":700,"tokens.typography.headline-smallest.lineHeight":"1.5","tokens.typography.headline-smallest.letterSpacing":"0","tokens.typography.body-copy-large.fontFamily":"ArtifaktElement, Arial, sans-serif","tokens.typography.body-copy-large.fontSize":"clamp(1.125rem, calc(1.06rem + 0.278vw), 1.3125rem)","tokens.typography.body-copy-large.fontWeight":400,"tokens.typography.body-copy-large.lineHeight":"1.5","tokens.typography.body-copy-large.letterSpacing":"0","tokens.typography.body-copy-large-compact.fontFamily":"ArtifaktElement, Arial, sans-serif","tokens.typography.body-copy-large-compact.fontSize":"clamp(1.125rem, calc(1.06rem + 0.278vw), 1.3125rem)","tokens.typography.body-copy-large-compact.fontWeight":400,"tokens.typography.body-copy-large-compact.lineHeight":"1.25","tokens.typography.body-copy-large-compact.letterSpacing":"0","tokens.typography.body-copy-medium.fontFamily":"ArtifaktElement, Arial, sans-serif","tokens.typography.body-copy-medium.fontSize":"1rem","tokens.typography.body-copy-medium.fontWeight":400,"tokens.typography.body-copy-medium.lineHeight":"1.5","tokens.typography.body-copy-medium.letterSpacing":"0","tokens.typography.body-copy-medium-compact.fontFamily":"ArtifaktElement, Arial, sans-serif","tokens.typography.body-copy-medium-compact.fontSize":"1rem","tokens.typography.body-copy-medium-compact.fontWeight":400,"tokens.typography.body-copy-medium-compact.lineHeight":"1.25","tokens.typography.body-copy-medium-compact.letterSpacing":"0","tokens.typography.body-copy-small.fontFamily":"ArtifaktElement, Arial, sans-serif","tokens.typography.body-copy-small.fontSize":"0.875rem","tokens.typography.body-copy-small.fontWeight":400,"tokens.typography.body-copy-small.lineHeight":"1.5","tokens.typography.body-copy-small.letterSpacing":"0","tokens.typography.body-copy-small-compact.fontFamily":"ArtifaktElement, Arial, sans-serif","tokens.typography.body-copy-small-compact.fontSize":"0.875rem","tokens.typography.body-copy-small-compact.fontWeight":400,"tokens.typography.body-copy-small-compact.lineHeight":"1.25","tokens.typography.body-copy-small-compact.letterSpacing":"0","tokens.typography.short-copy-large.fontFamily":"ArtifaktElement, Arial, sans-serif","tokens.typography.short-copy-large.fontSize":"clamp(1.125rem, calc(1.06rem + 0.278vw), 1.3125rem)","tokens.typography.short-copy-large.fontWeight":400,"tokens.typography.short-copy-large.lineHeight":"1.25","tokens.typography.short-copy-large.letterSpacing":"0","tokens.typography.short-copy-medium.fontFamily":"ArtifaktElement, Arial, sans-serif","tokens.typography.short-copy-medium.fontSize":"1rem","tokens.typography.short-copy-medium.fontWeight":400,"tokens.typography.short-copy-medium.lineHeight":"1.25","tokens.typography.short-copy-medium.letterSpacing":"0","tokens.typography.short-copy-small.fontFamily":"ArtifaktElement, Arial, sans-serif","tokens.typography.short-copy-small.fontSize":"0.875rem","tokens.typography.short-copy-small.fontWeight":400,"tokens.typography.short-copy-small.lineHeight":"1.25","tokens.typography.short-copy-small.letterSpacing":"0","tokens.typography.smallprint.fontFamily":"ArtifaktElement, Arial, sans-serif","tokens.typography.smallprint.fontSize":"0.75rem","tokens.typography.smallprint.fontWeight":400,"tokens.typography.smallprint.lineHeight":"1.25","tokens.typography.smallprint.letterSpacing":"0","tokens.typography.code.fontFamily":"courier","tokens.typography.code.fontSize":"0.875rem","tokens.typography.code.fontWeight":400,"tokens.typography.code.lineHeight":"1.5","tokens.typography.code.letterSpacing":"0","tokens.typography.caption.fontFamily":"ArtifaktElement, Arial, sans-serif","tokens.typography.caption.fontSize":"0.875rem","tokens.typography.caption.fontWeight":400,"tokens.typography.caption.lineHeight":"1.25","tokens.typography.caption.letterSpacing":"0","tokens.typography.eyebrow.fontFamily":"ArtifaktElement, Arial, sans-serif","tokens.typography.eyebrow.fontSize":"0.875rem","tokens.typography.eyebrow.fontWeight":400,"tokens.typography.eyebrow.lineHeight":"1.5","tokens.typography.eyebrow.letterSpacing":"0.02em","tokens.typography.eyebrow.textTransform":"uppercase","tokens.typography.pull-quote-medium.fontFamily":"ArtifaktElement, Arial, sans-serif","tokens.typography.pull-quote-medium.fontSize":"clamp(1.125rem, calc(1.06rem + 0.278vw), 1.3125rem)","tokens.typography.pull-quote-medium.fontWeight":600,"tokens.typography.pull-quote-medium.lineHeight":"1.25","tokens.typography.pull-quote-medium.letterSpacing":"0","tokens.typography.pull-quote-large.fontFamily":"ArtifaktElement, Arial, sans-serif","tokens.typography.pull-quote-large.fontSize":"clamp(1.3125rem, calc(1.21rem + 0.463vw), 1.625rem)","tokens.typography.pull-quote-large.fontWeight":600,"tokens.typography.pull-quote-large.lineHeight":"1.25","tokens.typography.pull-quote-large.letterSpacing":"0","tokens.transitions.state-activate.transitionTimingFunction":"cubic-bezier(0.2, 0, 0.4, 1)","tokens.transitions.state-activate.transitionDuration":"187.5ms","tokens.transitions.state-blur.transitionTimingFunction":"cubic-bezier(0.2, 0, 0.8, 1)","tokens.transitions.state-blur.transitionDuration":"250ms","tokens.transitions.leave.transitionTimingFunction":"cubic-bezier(0.6, 0, 1, 1)","tokens.transitions.leave.transitionDuration":"375ms","tokens.transitions.enter.transitionTimingFunction":"cubic-bezier(0, 0, 0.4, 1)","tokens.transitions.enter.transitionDuration":"375ms","tokens.transitions.morph.transitionTimingFunction":"cubic-bezier(0.2, 0, 0.8, 1)","tokens.transitions.morph.transitionDuration":"312.5ms","tokens.transitions.fade.transitionTimingFunction":"cubic-bezier(0.2, 0, 0.8, 1)","tokens.transitions.fade.transitionDuration":"375ms","tokens.colors.activated-fill-subtle.color":"#000000","tokens.colors.activated-fill-subtle.opacity":0.03,"tokens.colors.activated-fill-subtle.rgb":"rgba(0, 0, 0, 0.03)","tokens.colors.activated-fill-subtle-on-fill-primary.color":"#FFFFFF","tokens.colors.activated-fill-subtle-on-fill-primary.opacity":0.08,"tokens.colors.activated-fill-subtle-on-fill-primary.rgb":"rgba(255, 255, 255, 0.08)","tokens.colors.activated-hover-fill-subtle.color":"#000000","tokens.colors.activated-hover-fill-subtle.opacity":0.09,"tokens.colors.activated-hover-fill-subtle.rgb":"rgba(0, 0, 0, 0.09)","tokens.colors.activated-hover-fill-subtle-on-fill-primary.color":"#FFFFFF","tokens.colors.activated-hover-fill-subtle-on-fill-primary.opacity":0.12,"tokens.colors.activated-hover-fill-subtle-on-fill-primary.rgb":"rgba(255, 255, 255, 0.12)","tokens.colors.activated-pressed-fill-subtle.color":"#000000","tokens.colors.activated-pressed-fill-subtle.opacity":0.15,"tokens.colors.activated-pressed-fill-subtle.rgb":"rgba(0, 0, 0, 0.15)","tokens.colors.activated-pressed-fill-subtle-on-fill-primary.color":"#FFFFFF","tokens.colors.activated-pressed-fill-subtle-on-fill-primary.opacity":0.16,"tokens.colors.activated-pressed-fill-subtle-on-fill-primary.rgb":"rgba(255, 255, 255, 0.16)","tokens.colors.backdrop-30.color":"#000000","tokens.colors.backdrop-30.opacity":0.3,"tokens.colors.backdrop-30.rgb":"rgba(0, 0, 0, 0.3)","tokens.colors.backdrop-60.color":"#000000","tokens.colors.backdrop-60.opacity":0.6,"tokens.colors.backdrop-60.rgb":"rgba(0, 0, 0, 0.6)","tokens.colors.background.color":"#FFFFFF","tokens.colors.background.opacity":1,"tokens.colors.background.rgb":"rgb(255, 255, 255)","tokens.colors.background-40.color":"#FFFFFF","tokens.colors.background-40.opacity":0.4,"tokens.colors.background-40.rgb":"rgba(255, 255, 255, 0.4)","tokens.colors.background-panel.color":"#F9F9F9","tokens.colors.background-panel.opacity":1,"tokens.colors.background-panel.rgb":"rgb(249, 249, 249)","tokens.colors.background-panel-distinct.color":"#F2F2F2","tokens.colors.background-panel-distinct.opacity":1,"tokens.colors.background-panel-distinct.rgb":"rgb(242, 242, 242)","tokens.colors.detail-1-20.color":"#CCCCCC","tokens.colors.detail-1-20.opacity":0.2,"tokens.colors.detail-1-20.rgb":"rgba(204, 204, 204, 0.2)","tokens.colors.detail-1-40.color":"#CCCCCC","tokens.colors.detail-1-40.opacity":0.4,"tokens.colors.detail-1-40.rgb":"rgba(204, 204, 204, 0.4)","tokens.colors.detail-1-opaque.color":"#CCCCCC","tokens.colors.detail-1-opaque.opacity":1,"tokens.colors.detail-1-opaque.rgb":"rgb(204, 204, 204)","tokens.colors.detail-2-opaque.color":"#666666","tokens.colors.detail-2-opaque.opacity":1,"tokens.colors.detail-2-opaque.rgb":"rgb(102, 102, 102)","tokens.colors.detail-1-transparent.color":"#000000","tokens.colors.detail-1-transparent.opacity":0.2,"tokens.colors.detail-1-transparent.rgb":"rgba(0, 0, 0, 0.2)","tokens.colors.detail-2-transparent.color":"#000000","tokens.colors.detail-2-transparent.opacity":0.6,"tokens.colors.detail-2-transparent.rgb":"rgba(0, 0, 0, 0.6)","tokens.colors.fill-elevation-1.color":"#FFFFFF","tokens.colors.fill-elevation-1.opacity":1,"tokens.colors.fill-elevation-1.rgb":"rgb(255, 255, 255)","tokens.colors.fill-elevation-2.color":"#FFFFFF","tokens.colors.fill-elevation-2.opacity":1,"tokens.colors.fill-elevation-2.rgb":"rgb(255, 255, 255)","tokens.colors.fill-elevation-3.color":"#FFFFFF","tokens.colors.fill-elevation-3.opacity":1,"tokens.colors.fill-elevation-3.rgb":"rgb(255, 255, 255)","tokens.colors.fill-error.color":"#C34922","tokens.colors.fill-error.opacity":1,"tokens.colors.fill-error.rgb":"rgb(195, 73, 34)","tokens.colors.field-fill.color":"#FFFFFF","tokens.colors.field-fill.opacity":1,"tokens.colors.field-fill.rgb":"rgb(255, 255, 255)","tokens.colors.fill-inverse-tint.color":"#333333","tokens.colors.fill-inverse-tint.opacity":1,"tokens.colors.fill-inverse-tint.rgb":"rgb(51, 51, 51)","tokens.colors.fill-primary.color":"#000000","tokens.colors.fill-primary.opacity":1,"tokens.colors.fill-primary.rgb":"rgb(0, 0, 0)","tokens.colors.fill-soft-gray-transparent.color":"#BFBFBF","tokens.colors.fill-soft-gray-transparent.opacity":0.3,"tokens.colors.fill-soft-gray-transparent.rgb":"rgba(191, 191, 191, 0.3)","tokens.colors.fill-success.color":"#2BC275","tokens.colors.fill-success.opacity":1,"tokens.colors.fill-success.rgb":"rgb(43, 194, 117)","tokens.colors.fill-urgent.color":"#C34922","tokens.colors.fill-urgent.opacity":1,"tokens.colors.fill-urgent.rgb":"rgb(195, 73, 34)","tokens.colors.hover-fill-subtle.color":"#000000","tokens.colors.hover-fill-subtle.opacity":0.03,"tokens.colors.hover-fill-subtle.rgb":"rgba(0, 0, 0, 0.03)","tokens.colors.hover-fill-subtle-on-fill-primary.color":"#000000","tokens.colors.hover-fill-subtle-on-fill-primary.opacity":0.08,"tokens.colors.hover-fill-subtle-on-fill-primary.rgb":"rgba(0, 0, 0, 0.08)","tokens.colors.ink-error.color":"#C34922","tokens.colors.ink-error.opacity":1,"tokens.colors.ink-error.rgb":"rgb(195, 73, 34)","tokens.colors.ink-focus.color":"#5F60FF","tokens.colors.ink-focus.opacity":1,"tokens.colors.ink-focus.rgb":"rgb(95, 96, 255)","tokens.colors.ink-hover.color":"#8080FF","tokens.colors.ink-hover.opacity":1,"tokens.colors.ink-hover.rgb":"rgb(128, 128, 255)","tokens.colors.ink-on-background.color":"#000000","tokens.colors.ink-on-background.opacity":1,"tokens.colors.ink-on-background.rgb":"rgb(0, 0, 0)","tokens.colors.ink-on-background-60.color":"#000000","tokens.colors.ink-on-background-60.opacity":0.6,"tokens.colors.ink-on-background-60.rgb":"rgba(0, 0, 0, 0.6)","tokens.colors.ink-on-fill-primary.color":"#FFFFFF","tokens.colors.ink-on-fill-primary.opacity":1,"tokens.colors.ink-on-fill-primary.rgb":"rgb(255, 255, 255)","tokens.colors.ink-success.color":"#00A85D","tokens.colors.ink-success.opacity":1,"tokens.colors.ink-success.rgb":"rgb(0, 168, 93)","tokens.colors.pressed-fill-subtle.color":"#000000","tokens.colors.pressed-fill-subtle.opacity":0.09,"tokens.colors.pressed-fill-subtle.rgb":"rgba(0, 0, 0, 0.09)","tokens.colors.pressed-fill-subtle-on-fill-primary.color":"#FFFFFF","tokens.colors.pressed-fill-subtle-on-fill-primary.opacity":0.12,"tokens.colors.pressed-fill-subtle-on-fill-primary.rgb":"rgba(255, 255, 255, 0.12)","tokens.colors.search-field-fill.color":"#000000","tokens.colors.search-field-fill.opacity":0.04,"tokens.colors.search-field-fill.rgb":"rgba(0, 0, 0, 0.04)","tokens.colors.search-field-fill-on-fill-primary.color":"#FFFFFF","tokens.colors.search-field-fill-on-fill-primary.opacity":0.12,"tokens.colors.search-field-fill-on-fill-primary.rgb":"rgba(255, 255, 255, 0.12)","tokens.colors.text-hover.color":"#5C5DF9","tokens.colors.text-hover.opacity":1,"tokens.colors.text-hover.rgb":"rgb(92, 93, 249)","tokens.colors.text-on-background.color":"#212121","tokens.colors.text-on-background.opacity":1,"tokens.colors.text-on-background.rgb":"rgb(33, 33, 33)","tokens.colors.text-on-fill-primary.color":"#DEDEDE","tokens.colors.text-on-fill-primary.opacity":1,"tokens.colors.text-on-fill-primary.rgb":"rgb(222, 222, 222)","tokens.colors.text-pressed.color":"#2C2C8C","tokens.colors.text-pressed.opacity":1,"tokens.colors.text-pressed.rgb":"rgb(44, 44, 140)","tokens.divider.default.backgroundColor":"#E5E5E5","tokens.divider.strong.backgroundColor":"#808080","tokens.effects.divider-0-top.boxShadow":"0px 1px 0px 0px rgba(0, 0, 0, 0.1) inset","tokens.effects.divider-0-bottom.boxShadow":"0px -1px 0px 0px rgba(0, 0, 0, 0.1) inset","tokens.effects.divider-0-left.boxShadow":"1px 0px 0px 0px rgba(0, 0, 0, 0.1) inset","tokens.effects.divider-0-top-bottom.boxShadow":"0px -1px 0px 0px rgba(0, 0, 0, 0.1) inset, 0px 1px 0px 0px rgba(0, 0, 0, 0.1) inset","tokens.effects.divider-0-bottom-on-fill-primary.boxShadow":"0px -1px 0px 0px rgba(255, 255, 255, 0.2) inset","tokens.effects.container-0.boxShadow":"0px 0px 0px 1px rgba(0, 0, 0, 0.1) inset","tokens.effects.container-0-outside.boxShadow":"0px 0px 0px 1px rgba(0, 0, 0, 0.1)","tokens.effects.container-1.boxShadow":"0px 0px 0px 1px rgba(204, 204, 204, 0.5) inset, 0px -1px 0px 0px #666666 inset","tokens.effects.elevation-0-dropdown.boxShadow":"0px 2px 0px 0px rgba(0, 0, 0, 0.6), 0px 1px 0px 0px rgba(0, 0, 0, 0.3) inset, -1px 0px 0px 0px rgba(0, 0, 0, 0.3) inset, 1px 0px 0px 0px rgba(0, 0, 0, 0.3) inset","tokens.effects.elevation-0-popover.boxShadow":"0px 2px 0px 0px rgba(0, 0, 0, 0.6), 0px 1px 0px 0px rgba(0, 0, 0, 0.3) inset, 1px 0px 0px 0px rgba(0, 0, 0, 0.3) inset, -1px 0px 0px 0px rgba(0, 0, 0, 0.3) inset","tokens.effects.elevation-1.boxShadow":"0px 3px 0px 0px #000000, 0px 0px 0px 1px #000000 inset","tokens.effects.field-default.boxShadow":"0px -1px 0px 0px #000000 inset, 0px 0px 0px 1px rgba(0, 0, 0, 0.3) inset","tokens.effects.underline.boxShadow":"0px -1px 0px 0px #000000 inset","tokens.effects.tab-highlight-top.boxShadow":"0px 2px 0px 0px #000000 inset","tokens.effects.tab-highlight-bottom.boxShadow":"0px -2px 0px 0px #000000 inset","tokens.effects.tab-highlight-left.boxShadow":"2px 0px 0px 0px #000000 inset","tokens.effects.tab-highlight-bottom-on-fill-primary.boxShadow":"0px -2px 0px 0px #FFFFFF inset","tokens.effects.focus-ring.boxShadow":"0px 0px 0px 3px #5F60FF, 0px 0px 0px 1px #FFFFFF","tokens.effects.focus-ring-thin.boxShadow":"0px 0px 0px 2px #5F60FF, 0px 0px 0px 1px #FFFFFF","tokens.effects.hover-halo-inwards.boxShadow":"0px 0px 0px 1px #8080FF inset","tokens.effects.field-error.boxShadow":"0px -1px 0px 0px #D74E26 inset, 0px 0px 0px 1px #D74E26 inset","tokens.effects.halo-hover.boxShadow":"0px 0px 0px 1px #8080FF","tokens.effects.halo-pressed.boxShadow":"0px 0px 0px 2px #2BC275","tokens.button.contained.defaultSize.default.backgroundColor":"#000000","tokens.button.contained.defaultSize.default.borderColor":"#000000","tokens.button.contained.defaultSize.default.borderStyle":"solid","tokens.button.contained.defaultSize.default.borderWidth":"1px","tokens.button.contained.defaultSize.default.boxShadow":"none","tokens.button.contained.defaultSize.default.color":"#FFFFFF","tokens.button.contained.defaultSize.default.fontSize":"1rem","tokens.button.contained.defaultSize.default.fontWeight":600,"tokens.button.contained.defaultSize.default.lineHeight":"1.25","tokens.button.contained.defaultSize.default.minWidth":"80px","tokens.button.contained.defaultSize.default.opacity":1,"tokens.button.contained.defaultSize.default.paddingBottom":"9px","tokens.button.contained.defaultSize.default.paddingLeft":"1.25rem","tokens.button.contained.defaultSize.default.paddingRight":"1.25rem","tokens.button.contained.defaultSize.default.paddingTop":"9px","tokens.button.contained.defaultSize.default.textTransform":"none","tokens.button.contained.defaultSize.hover.backgroundColor":"#000000","tokens.button.contained.defaultSize.hover.borderColor":"#000000","tokens.button.contained.defaultSize.hover.borderStyle":"solid","tokens.button.contained.defaultSize.hover.borderWidth":"1px","tokens.button.contained.defaultSize.hover.boxShadow":"0px 0px 0px 1px #8080FF","tokens.button.contained.defaultSize.hover.color":"#FFFFFF","tokens.button.contained.defaultSize.hover.fontSize":"1rem","tokens.button.contained.defaultSize.hover.fontWeight":600,"tokens.button.contained.defaultSize.hover.lineHeight":"1.25","tokens.button.contained.defaultSize.hover.minWidth":"80px","tokens.button.contained.defaultSize.hover.opacity":1,"tokens.button.contained.defaultSize.hover.paddingBottom":"9px","tokens.button.contained.defaultSize.hover.paddingLeft":"1.25rem","tokens.button.contained.defaultSize.hover.paddingRight":"1.25rem","tokens.button.contained.defaultSize.hover.paddingTop":"9px","tokens.button.contained.defaultSize.hover.textTransform":"none","tokens.button.contained.defaultSize.focus.backgroundColor":"#000000","tokens.button.contained.defaultSize.focus.borderColor":"#000000","tokens.button.contained.defaultSize.focus.borderStyle":"solid","tokens.button.contained.defaultSize.focus.borderWidth":"1px","tokens.button.contained.defaultSize.focus.boxShadow":"0px 0px 0px 3px #5F60FF, 0px 0px 0px 1px #FFFFFF","tokens.button.contained.defaultSize.focus.color":"#FFFFFF","tokens.button.contained.defaultSize.focus.fontSize":"1rem","tokens.button.contained.defaultSize.focus.fontWeight":600,"tokens.button.contained.defaultSize.focus.lineHeight":"1.25","tokens.button.contained.defaultSize.focus.minWidth":"80px","tokens.button.contained.defaultSize.focus.opacity":1,"tokens.button.contained.defaultSize.focus.paddingBottom":"9px","tokens.button.contained.defaultSize.focus.paddingLeft":"1.25rem","tokens.button.contained.defaultSize.focus.paddingRight":"1.25rem","tokens.button.contained.defaultSize.focus.paddingTop":"9px","tokens.button.contained.defaultSize.focus.textTransform":"none","tokens.button.contained.defaultSize.pressed.backgroundColor":"#000000","tokens.button.contained.defaultSize.pressed.borderColor":"#000000","tokens.button.contained.defaultSize.pressed.borderStyle":"solid","tokens.button.contained.defaultSize.pressed.borderWidth":"1px","tokens.button.contained.defaultSize.pressed.boxShadow":"0px 0px 0px 2px #2BC275","tokens.button.contained.defaultSize.pressed.color":"#FFFFFF","tokens.button.contained.defaultSize.pressed.fontSize":"1rem","tokens.button.contained.defaultSize.pressed.fontWeight":600,"tokens.button.contained.defaultSize.pressed.lineHeight":"1.25","tokens.button.contained.defaultSize.pressed.minWidth":"80px","tokens.button.contained.defaultSize.pressed.opacity":1,"tokens.button.contained.defaultSize.pressed.paddingBottom":"9px","tokens.button.contained.defaultSize.pressed.paddingLeft":"1.25rem","tokens.button.contained.defaultSize.pressed.paddingRight":"1.25rem","tokens.button.contained.defaultSize.pressed.paddingTop":"9px","tokens.button.contained.defaultSize.pressed.textTransform":"none","tokens.button.contained.defaultSize.disabled.backgroundColor":"#000000","tokens.button.contained.defaultSize.disabled.borderColor":"#000000","tokens.button.contained.defaultSize.disabled.borderStyle":"solid","tokens.button.contained.defaultSize.disabled.borderWidth":"1px","tokens.button.contained.defaultSize.disabled.boxShadow":"none","tokens.button.contained.defaultSize.disabled.color":"#FFFFFF","tokens.button.contained.defaultSize.disabled.fontSize":"1rem","tokens.button.contained.defaultSize.disabled.fontWeight":600,"tokens.button.contained.defaultSize.disabled.lineHeight":"1.25","tokens.button.contained.defaultSize.disabled.minWidth":"80px","tokens.button.contained.defaultSize.disabled.opacity":0.4,"tokens.button.contained.defaultSize.disabled.paddingBottom":"9px","tokens.button.contained.defaultSize.disabled.paddingLeft":"1.25rem","tokens.button.contained.defaultSize.disabled.paddingRight":"1.25rem","tokens.button.contained.defaultSize.disabled.paddingTop":"9px","tokens.button.contained.defaultSize.disabled.textTransform":"none","tokens.button.contained.dense.default.backgroundColor":"#000000","tokens.button.contained.dense.default.borderColor":"#000000","tokens.button.contained.dense.default.borderStyle":"solid","tokens.button.contained.dense.default.borderWidth":"1px","tokens.button.contained.dense.default.boxShadow":"none","tokens.button.contained.dense.default.color":"#FFFFFF","tokens.button.contained.dense.default.fontSize":"0.875rem","tokens.button.contained.dense.default.fontWeight":600,"tokens.button.contained.dense.default.lineHeight":"1.25","tokens.button.contained.dense.default.minWidth":"64px","tokens.button.contained.dense.default.opacity":1,"tokens.button.contained.dense.default.paddingBottom":".25rem","tokens.button.contained.dense.default.paddingLeft":".75rem","tokens.button.contained.dense.default.paddingRight":".75rem","tokens.button.contained.dense.default.paddingTop":".25rem","tokens.button.contained.dense.default.textTransform":"none","tokens.button.contained.dense.hover.backgroundColor":"#000000","tokens.button.contained.dense.hover.borderColor":"#000000","tokens.button.contained.dense.hover.borderStyle":"solid","tokens.button.contained.dense.hover.borderWidth":"1px","tokens.button.contained.dense.hover.boxShadow":"0px 0px 0px 1px #8080FF","tokens.button.contained.dense.hover.color":"#FFFFFF","tokens.button.contained.dense.hover.fontSize":"0.875rem","tokens.button.contained.dense.hover.fontWeight":600,"tokens.button.contained.dense.hover.lineHeight":"1.25","tokens.button.contained.dense.hover.minWidth":"64px","tokens.button.contained.dense.hover.opacity":1,"tokens.button.contained.dense.hover.paddingBottom":".25rem","tokens.button.contained.dense.hover.paddingLeft":".75rem","tokens.button.contained.dense.hover.paddingRight":".75rem","tokens.button.contained.dense.hover.paddingTop":".25rem","tokens.button.contained.dense.hover.textTransform":"none","tokens.button.contained.dense.focus.backgroundColor":"#000000","tokens.button.contained.dense.focus.borderColor":"#000000","tokens.button.contained.dense.focus.borderStyle":"solid","tokens.button.contained.dense.focus.borderWidth":"1px","tokens.button.contained.dense.focus.boxShadow":"0px 0px 0px 3px #5F60FF, 0px 0px 0px 1px #FFFFFF","tokens.button.contained.dense.focus.color":"#FFFFFF","tokens.button.contained.dense.focus.fontSize":"0.875rem","tokens.button.contained.dense.focus.fontWeight":600,"tokens.button.contained.dense.focus.lineHeight":"1.25","tokens.button.contained.dense.focus.minWidth":"64px","tokens.button.contained.dense.focus.opacity":1,"tokens.button.contained.dense.focus.paddingBottom":".25rem","tokens.button.contained.dense.focus.paddingLeft":".75rem","tokens.button.contained.dense.focus.paddingRight":".75rem","tokens.button.contained.dense.focus.paddingTop":".25rem","tokens.button.contained.dense.focus.textTransform":"none","tokens.button.contained.dense.pressed.backgroundColor":"#000000","tokens.button.contained.dense.pressed.borderColor":"#000000","tokens.button.contained.dense.pressed.borderStyle":"solid","tokens.button.contained.dense.pressed.borderWidth":"1px","tokens.button.contained.dense.pressed.boxShadow":"0px 0px 0px 2px #2BC275","tokens.button.contained.dense.pressed.color":"#FFFFFF","tokens.button.contained.dense.pressed.fontSize":"0.875rem","tokens.button.contained.dense.pressed.fontWeight":600,"tokens.button.contained.dense.pressed.lineHeight":"1.25","tokens.button.contained.dense.pressed.minWidth":"64px","tokens.button.contained.dense.pressed.opacity":1,"tokens.button.contained.dense.pressed.paddingBottom":".25rem","tokens.button.contained.dense.pressed.paddingLeft":".75rem","tokens.button.contained.dense.pressed.paddingRight":".75rem","tokens.button.contained.dense.pressed.paddingTop":".25rem","tokens.button.contained.dense.pressed.textTransform":"none","tokens.button.contained.dense.disabled.backgroundColor":"#000000","tokens.button.contained.dense.disabled.borderColor":"#000000","tokens.button.contained.dense.disabled.borderStyle":"solid","tokens.button.contained.dense.disabled.borderWidth":"1px","tokens.button.contained.dense.disabled.boxShadow":"none","tokens.button.contained.dense.disabled.color":"#FFFFFF","tokens.button.contained.dense.disabled.fontSize":"0.875rem","tokens.button.contained.dense.disabled.fontWeight":600,"tokens.button.contained.dense.disabled.lineHeight":"1.25","tokens.button.contained.dense.disabled.minWidth":"64px","tokens.button.contained.dense.disabled.opacity":0.4,"tokens.button.contained.dense.disabled.paddingBottom":".25rem","tokens.button.contained.dense.disabled.paddingLeft":".75rem","tokens.button.contained.dense.disabled.paddingRight":".75rem","tokens.button.contained.dense.disabled.paddingTop":".25rem","tokens.button.contained.dense.disabled.textTransform":"none","tokens.button.outlined.defaultSize.default.backgroundColor":"transparent","tokens.button.outlined.defaultSize.default.borderColor":"#000000","tokens.button.outlined.defaultSize.default.borderStyle":"solid","tokens.button.outlined.defaultSize.default.borderWidth":"1px","tokens.button.outlined.defaultSize.default.boxShadow":"none","tokens.button.outlined.defaultSize.default.color":"#000000","tokens.button.outlined.defaultSize.default.fontSize":"1rem","tokens.button.outlined.defaultSize.default.fontWeight":600,"tokens.button.outlined.defaultSize.default.lineHeight":"1.25","tokens.button.outlined.defaultSize.default.minWidth":"80px","tokens.button.outlined.defaultSize.default.opacity":1,"tokens.button.outlined.defaultSize.default.paddingBottom":"9px","tokens.button.outlined.defaultSize.default.paddingLeft":"1.25rem","tokens.button.outlined.defaultSize.default.paddingRight":"1.25rem","tokens.button.outlined.defaultSize.default.paddingTop":"9px","tokens.button.outlined.defaultSize.default.textTransform":"none","tokens.button.outlined.defaultSize.hover.backgroundColor":"transparent","tokens.button.outlined.defaultSize.hover.borderColor":"#000000","tokens.button.outlined.defaultSize.hover.borderStyle":"solid","tokens.button.outlined.defaultSize.hover.borderWidth":"1px","tokens.button.outlined.defaultSize.hover.boxShadow":"0px 0px 0px 1px #8080FF","tokens.button.outlined.defaultSize.hover.color":"#000000","tokens.button.outlined.defaultSize.hover.fontSize":"1rem","tokens.button.outlined.defaultSize.hover.fontWeight":600,"tokens.button.outlined.defaultSize.hover.lineHeight":"1.25","tokens.button.outlined.defaultSize.hover.minWidth":"80px","tokens.button.outlined.defaultSize.hover.opacity":1,"tokens.button.outlined.defaultSize.hover.paddingBottom":"9px","tokens.button.outlined.defaultSize.hover.paddingLeft":"1.25rem","tokens.button.outlined.defaultSize.hover.paddingRight":"1.25rem","tokens.button.outlined.defaultSize.hover.paddingTop":"9px","tokens.button.outlined.defaultSize.hover.textTransform":"none","tokens.button.outlined.defaultSize.focus.backgroundColor":"transparent","tokens.button.outlined.defaultSize.focus.borderColor":"#000000","tokens.button.outlined.defaultSize.focus.borderStyle":"solid","tokens.button.outlined.defaultSize.focus.borderWidth":"1px","tokens.button.outlined.defaultSize.focus.boxShadow":"0px 0px 0px 3px #5F60FF, 0px 0px 0px 1px #FFFFFF","tokens.button.outlined.defaultSize.focus.color":"#000000","tokens.button.outlined.defaultSize.focus.fontSize":"1rem","tokens.button.outlined.defaultSize.focus.fontWeight":600,"tokens.button.outlined.defaultSize.focus.lineHeight":"1.25","tokens.button.outlined.defaultSize.focus.minWidth":"80px","tokens.button.outlined.defaultSize.focus.opacity":1,"tokens.button.outlined.defaultSize.focus.paddingBottom":"9px","tokens.button.outlined.defaultSize.focus.paddingLeft":"1.25rem","tokens.button.outlined.defaultSize.focus.paddingRight":"1.25rem","tokens.button.outlined.defaultSize.focus.paddingTop":"9px","tokens.button.outlined.defaultSize.focus.textTransform":"none","tokens.button.outlined.defaultSize.pressed.backgroundColor":"transparent","tokens.button.outlined.defaultSize.pressed.borderColor":"#000000","tokens.button.outlined.defaultSize.pressed.borderStyle":"solid","tokens.button.outlined.defaultSize.pressed.borderWidth":"1px","tokens.button.outlined.defaultSize.pressed.boxShadow":"0px 0px 0px 2px #2BC275","tokens.button.outlined.defaultSize.pressed.color":"#000000","tokens.button.outlined.defaultSize.pressed.fontSize":"1rem","tokens.button.outlined.defaultSize.pressed.fontWeight":600,"tokens.button.outlined.defaultSize.pressed.lineHeight":"1.25","tokens.button.outlined.defaultSize.pressed.minWidth":"80px","tokens.button.outlined.defaultSize.pressed.opacity":1,"tokens.button.outlined.defaultSize.pressed.paddingBottom":"9px","tokens.button.outlined.defaultSize.pressed.paddingLeft":"1.25rem","tokens.button.outlined.defaultSize.pressed.paddingRight":"1.25rem","tokens.button.outlined.defaultSize.pressed.paddingTop":"9px","tokens.button.outlined.defaultSize.pressed.textTransform":"none","tokens.button.outlined.defaultSize.disabled.backgroundColor":"transparent","tokens.button.outlined.defaultSize.disabled.borderColor":"#000000","tokens.button.outlined.defaultSize.disabled.borderStyle":"solid","tokens.button.outlined.defaultSize.disabled.borderWidth":"1px","tokens.button.outlined.defaultSize.disabled.boxShadow":"none","tokens.button.outlined.defaultSize.disabled.color":"#000000","tokens.button.outlined.defaultSize.disabled.fontSize":"1rem","tokens.button.outlined.defaultSize.disabled.fontWeight":600,"tokens.button.outlined.defaultSize.disabled.lineHeight":"1.25","tokens.button.outlined.defaultSize.disabled.minWidth":"80px","tokens.button.outlined.defaultSize.disabled.opacity":0.4,"tokens.button.outlined.defaultSize.disabled.paddingBottom":"9px","tokens.button.outlined.defaultSize.disabled.paddingLeft":"1.25rem","tokens.button.outlined.defaultSize.disabled.paddingRight":"1.25rem","tokens.button.outlined.defaultSize.disabled.paddingTop":"9px","tokens.button.outlined.defaultSize.disabled.textTransform":"none","tokens.button.outlined.dense.default.backgroundColor":"transparent","tokens.button.outlined.dense.default.borderColor":"#000000","tokens.button.outlined.dense.default.borderStyle":"solid","tokens.button.outlined.dense.default.borderWidth":"1px","tokens.button.outlined.dense.default.boxShadow":"none","tokens.button.outlined.dense.default.color":"#000000","tokens.button.outlined.dense.default.fontSize":"0.875rem","tokens.button.outlined.dense.default.fontWeight":600,"tokens.button.outlined.dense.default.lineHeight":"1.25","tokens.button.outlined.dense.default.minWidth":"64px","tokens.button.outlined.dense.default.opacity":1,"tokens.button.outlined.dense.default.paddingBottom":".25rem","tokens.button.outlined.dense.default.paddingLeft":".75rem","tokens.button.outlined.dense.default.paddingRight":".75rem","tokens.button.outlined.dense.default.paddingTop":".25rem","tokens.button.outlined.dense.default.textTransform":"none","tokens.button.outlined.dense.hover.backgroundColor":"transparent","tokens.button.outlined.dense.hover.borderColor":"#000000","tokens.button.outlined.dense.hover.borderStyle":"solid","tokens.button.outlined.dense.hover.borderWidth":"1px","tokens.button.outlined.dense.hover.boxShadow":"0px 0px 0px 1px #8080FF","tokens.button.outlined.dense.hover.color":"#000000","tokens.button.outlined.dense.hover.fontSize":"0.875rem","tokens.button.outlined.dense.hover.fontWeight":600,"tokens.button.outlined.dense.hover.lineHeight":"1.25","tokens.button.outlined.dense.hover.minWidth":"64px","tokens.button.outlined.dense.hover.opacity":1,"tokens.button.outlined.dense.hover.paddingBottom":".25rem","tokens.button.outlined.dense.hover.paddingLeft":".75rem","tokens.button.outlined.dense.hover.paddingRight":".75rem","tokens.button.outlined.dense.hover.paddingTop":".25rem","tokens.button.outlined.dense.hover.textTransform":"none","tokens.button.outlined.dense.focus.backgroundColor":"transparent","tokens.button.outlined.dense.focus.borderColor":"#000000","tokens.button.outlined.dense.focus.borderStyle":"solid","tokens.button.outlined.dense.focus.borderWidth":"1px","tokens.button.outlined.dense.focus.boxShadow":"0px 0px 0px 3px #5F60FF, 0px 0px 0px 1px #FFFFFF","tokens.button.outlined.dense.focus.color":"#000000","tokens.button.outlined.dense.focus.fontSize":"0.875rem","tokens.button.outlined.dense.focus.fontWeight":600,"tokens.button.outlined.dense.focus.lineHeight":"1.25","tokens.button.outlined.dense.focus.minWidth":"64px","tokens.button.outlined.dense.focus.opacity":1,"tokens.button.outlined.dense.focus.paddingBottom":".25rem","tokens.button.outlined.dense.focus.paddingLeft":".75rem","tokens.button.outlined.dense.focus.paddingRight":".75rem","tokens.button.outlined.dense.focus.paddingTop":".25rem","tokens.button.outlined.dense.focus.textTransform":"none","tokens.button.outlined.dense.pressed.backgroundColor":"transparent","tokens.button.outlined.dense.pressed.borderColor":"#000000","tokens.button.outlined.dense.pressed.borderStyle":"solid","tokens.button.outlined.dense.pressed.borderWidth":"1px","tokens.button.outlined.dense.pressed.boxShadow":"0px 0px 0px 2px #2BC275","tokens.button.outlined.dense.pressed.color":"#000000","tokens.button.outlined.dense.pressed.fontSize":"0.875rem","tokens.button.outlined.dense.pressed.fontWeight":600,"tokens.button.outlined.dense.pressed.lineHeight":"1.25","tokens.button.outlined.dense.pressed.minWidth":"64px","tokens.button.outlined.dense.pressed.opacity":1,"tokens.button.outlined.dense.pressed.paddingBottom":".25rem","tokens.button.outlined.dense.pressed.paddingLeft":".75rem","tokens.button.outlined.dense.pressed.paddingRight":".75rem","tokens.button.outlined.dense.pressed.paddingTop":".25rem","tokens.button.outlined.dense.pressed.textTransform":"none","tokens.button.outlined.dense.disabled.backgroundColor":"transparent","tokens.button.outlined.dense.disabled.borderColor":"#000000","tokens.button.outlined.dense.disabled.borderStyle":"solid","tokens.button.outlined.dense.disabled.borderWidth":"1px","tokens.button.outlined.dense.disabled.boxShadow":"none","tokens.button.outlined.dense.disabled.color":"#000000","tokens.button.outlined.dense.disabled.fontSize":"0.875rem","tokens.button.outlined.dense.disabled.fontWeight":600,"tokens.button.outlined.dense.disabled.lineHeight":"1.25","tokens.button.outlined.dense.disabled.minWidth":"64px","tokens.button.outlined.dense.disabled.opacity":0.4,"tokens.button.outlined.dense.disabled.paddingBottom":".25rem","tokens.button.outlined.dense.disabled.paddingLeft":".75rem","tokens.button.outlined.dense.disabled.paddingRight":".75rem","tokens.button.outlined.dense.disabled.paddingTop":".25rem","tokens.button.outlined.dense.disabled.textTransform":"none","tokens.button.text.defaultSize.default.backgroundColor":"transparent","tokens.button.text.defaultSize.default.borderColor":"transparent","tokens.button.text.defaultSize.default.borderStyle":"solid","tokens.button.text.defaultSize.default.borderWidth":"1px","tokens.button.text.defaultSize.default.boxShadow":"none","tokens.button.text.defaultSize.default.color":"#000000","tokens.button.text.defaultSize.default.fontSize":"1rem","tokens.button.text.defaultSize.default.fontWeight":600,"tokens.button.text.defaultSize.default.lineHeight":"1.25","tokens.button.text.defaultSize.default.minWidth":"80px","tokens.button.text.defaultSize.default.opacity":1,"tokens.button.text.defaultSize.default.paddingBottom":"9px","tokens.button.text.defaultSize.default.paddingLeft":"1.25rem","tokens.button.text.defaultSize.default.paddingRight":"1.25rem","tokens.button.text.defaultSize.default.paddingTop":"9px","tokens.button.text.defaultSize.default.textTransform":"none","tokens.button.text.defaultSize.hover.backgroundColor":"transparent","tokens.button.text.defaultSize.hover.borderColor":"transparent","tokens.button.text.defaultSize.hover.borderStyle":"solid","tokens.button.text.defaultSize.hover.borderWidth":"1px","tokens.button.text.defaultSize.hover.boxShadow":"0px 0px 0px 1px #8080FF","tokens.button.text.defaultSize.hover.color":"#000000","tokens.button.text.defaultSize.hover.fontSize":"1rem","tokens.button.text.defaultSize.hover.fontWeight":600,"tokens.button.text.defaultSize.hover.lineHeight":"1.25","tokens.button.text.defaultSize.hover.minWidth":"80px","tokens.button.text.defaultSize.hover.opacity":1,"tokens.button.text.defaultSize.hover.paddingBottom":"9px","tokens.button.text.defaultSize.hover.paddingLeft":"1.25rem","tokens.button.text.defaultSize.hover.paddingRight":"1.25rem","tokens.button.text.defaultSize.hover.paddingTop":"9px","tokens.button.text.defaultSize.hover.textTransform":"none","tokens.button.text.defaultSize.focus.backgroundColor":"transparent","tokens.button.text.defaultSize.focus.borderColor":"transparent","tokens.button.text.defaultSize.focus.borderStyle":"solid","tokens.button.text.defaultSize.focus.borderWidth":"1px","tokens.button.text.defaultSize.focus.boxShadow":"0px 0px 0px 3px #5F60FF, 0px 0px 0px 1px #FFFFFF","tokens.button.text.defaultSize.focus.color":"#000000","tokens.button.text.defaultSize.focus.fontSize":"1rem","tokens.button.text.defaultSize.focus.fontWeight":600,"tokens.button.text.defaultSize.focus.lineHeight":"1.25","tokens.button.text.defaultSize.focus.minWidth":"80px","tokens.button.text.defaultSize.focus.opacity":1,"tokens.button.text.defaultSize.focus.paddingBottom":"9px","tokens.button.text.defaultSize.focus.paddingLeft":"1.25rem","tokens.button.text.defaultSize.focus.paddingRight":"1.25rem","tokens.button.text.defaultSize.focus.paddingTop":"9px","tokens.button.text.defaultSize.focus.textTransform":"none","tokens.button.text.defaultSize.pressed.backgroundColor":"transparent","tokens.button.text.defaultSize.pressed.borderColor":"transparent","tokens.button.text.defaultSize.pressed.borderStyle":"solid","tokens.button.text.defaultSize.pressed.borderWidth":"1px","tokens.button.text.defaultSize.pressed.boxShadow":"0px 0px 0px 2px #2BC275","tokens.button.text.defaultSize.pressed.color":"#000000","tokens.button.text.defaultSize.pressed.fontSize":"1rem","tokens.button.text.defaultSize.pressed.fontWeight":600,"tokens.button.text.defaultSize.pressed.lineHeight":"1.25","tokens.button.text.defaultSize.pressed.minWidth":"80px","tokens.button.text.defaultSize.pressed.opacity":1,"tokens.button.text.defaultSize.pressed.paddingBottom":"9px","tokens.button.text.defaultSize.pressed.paddingLeft":"1.25rem","tokens.button.text.defaultSize.pressed.paddingRight":"1.25rem","tokens.button.text.defaultSize.pressed.paddingTop":"9px","tokens.button.text.defaultSize.pressed.textTransform":"none","tokens.button.text.defaultSize.disabled.backgroundColor":"transparent","tokens.button.text.defaultSize.disabled.borderColor":"transparent","tokens.button.text.defaultSize.disabled.borderStyle":"solid","tokens.button.text.defaultSize.disabled.borderWidth":"1px","tokens.button.text.defaultSize.disabled.boxShadow":"none","tokens.button.text.defaultSize.disabled.color":"#000000","tokens.button.text.defaultSize.disabled.fontSize":"1rem","tokens.button.text.defaultSize.disabled.fontWeight":600,"tokens.button.text.defaultSize.disabled.lineHeight":"1.25","tokens.button.text.defaultSize.disabled.minWidth":"80px","tokens.button.text.defaultSize.disabled.opacity":0.4,"tokens.button.text.defaultSize.disabled.paddingBottom":"9px","tokens.button.text.defaultSize.disabled.paddingLeft":"1.25rem","tokens.button.text.defaultSize.disabled.paddingRight":"1.25rem","tokens.button.text.defaultSize.disabled.paddingTop":"9px","tokens.button.text.defaultSize.disabled.textTransform":"none","tokens.button.text.dense.default.backgroundColor":"transparent","tokens.button.text.dense.default.borderColor":"transparent","tokens.button.text.dense.default.borderStyle":"solid","tokens.button.text.dense.default.borderWidth":"1px","tokens.button.text.dense.default.boxShadow":"none","tokens.button.text.dense.default.color":"#000000","tokens.button.text.dense.default.fontSize":"0.875rem","tokens.button.text.dense.default.fontWeight":600,"tokens.button.text.dense.default.lineHeight":"1.25","tokens.button.text.dense.default.minWidth":"64px","tokens.button.text.dense.default.opacity":1,"tokens.button.text.dense.default.paddingBottom":".25rem","tokens.button.text.dense.default.paddingLeft":".75rem","tokens.button.text.dense.default.paddingRight":".75rem","tokens.button.text.dense.default.paddingTop":".25rem","tokens.button.text.dense.default.textTransform":"none","tokens.button.text.dense.hover.backgroundColor":"transparent","tokens.button.text.dense.hover.borderColor":"transparent","tokens.button.text.dense.hover.borderStyle":"solid","tokens.button.text.dense.hover.borderWidth":"1px","tokens.button.text.dense.hover.boxShadow":"0px 0px 0px 1px #8080FF","tokens.button.text.dense.hover.color":"#000000","tokens.button.text.dense.hover.fontSize":"0.875rem","tokens.button.text.dense.hover.fontWeight":600,"tokens.button.text.dense.hover.lineHeight":"1.25","tokens.button.text.dense.hover.minWidth":"64px","tokens.button.text.dense.hover.opacity":1,"tokens.button.text.dense.hover.paddingBottom":".25rem","tokens.button.text.dense.hover.paddingLeft":".75rem","tokens.button.text.dense.hover.paddingRight":".75rem","tokens.button.text.dense.hover.paddingTop":".25rem","tokens.button.text.dense.hover.textTransform":"none","tokens.button.text.dense.focus.backgroundColor":"transparent","tokens.button.text.dense.focus.borderColor":"transparent","tokens.button.text.dense.focus.borderStyle":"solid","tokens.button.text.dense.focus.borderWidth":"1px","tokens.button.text.dense.focus.boxShadow":"0px 0px 0px 3px #5F60FF, 0px 0px 0px 1px #FFFFFF","tokens.button.text.dense.focus.color":"#000000","tokens.button.text.dense.focus.fontSize":"0.875rem","tokens.button.text.dense.focus.fontWeight":600,"tokens.button.text.dense.focus.lineHeight":"1.25","tokens.button.text.dense.focus.minWidth":"64px","tokens.button.text.dense.focus.opacity":1,"tokens.button.text.dense.focus.paddingBottom":".25rem","tokens.button.text.dense.focus.paddingLeft":".75rem","tokens.button.text.dense.focus.paddingRight":".75rem","tokens.button.text.dense.focus.paddingTop":".25rem","tokens.button.text.dense.focus.textTransform":"none","tokens.button.text.dense.pressed.backgroundColor":"transparent","tokens.button.text.dense.pressed.borderColor":"transparent","tokens.button.text.dense.pressed.borderStyle":"solid","tokens.button.text.dense.pressed.borderWidth":"1px","tokens.button.text.dense.pressed.boxShadow":"0px 0px 0px 2px #2BC275","tokens.button.text.dense.pressed.color":"#000000","tokens.button.text.dense.pressed.fontSize":"0.875rem","tokens.button.text.dense.pressed.fontWeight":600,"tokens.button.text.dense.pressed.lineHeight":"1.25","tokens.button.text.dense.pressed.minWidth":"64px","tokens.button.text.dense.pressed.opacity":1,"tokens.button.text.dense.pressed.paddingBottom":".25rem","tokens.button.text.dense.pressed.paddingLeft":".75rem","tokens.button.text.dense.pressed.paddingRight":".75rem","tokens.button.text.dense.pressed.paddingTop":".25rem","tokens.button.text.dense.pressed.textTransform":"none","tokens.button.text.dense.disabled.backgroundColor":"transparent","tokens.button.text.dense.disabled.borderColor":"transparent","tokens.button.text.dense.disabled.borderStyle":"solid","tokens.button.text.dense.disabled.borderWidth":"1px","tokens.button.text.dense.disabled.boxShadow":"none","tokens.button.text.dense.disabled.color":"#000000","tokens.button.text.dense.disabled.fontSize":"0.875rem","tokens.button.text.dense.disabled.fontWeight":600,"tokens.button.text.dense.disabled.lineHeight":"1.25","tokens.button.text.dense.disabled.minWidth":"64px","tokens.button.text.dense.disabled.opacity":0.4,"tokens.button.text.dense.disabled.paddingBottom":".25rem","tokens.button.text.dense.disabled.paddingLeft":".75rem","tokens.button.text.dense.disabled.paddingRight":".75rem","tokens.button.text.dense.disabled.paddingTop":".25rem","tokens.button.text.dense.disabled.textTransform":"none","tokens.card.card.boxShadow":"0px 0px 0px 1px rgba(0, 0, 0, 0.1) inset","tokens.card.card.opacity":1,"tokens.card.cardMedia.padding":"0","tokens.card.cardContent.paddingBottom":"0","tokens.card.cardContent.paddingLeft":"1.5rem","tokens.card.cardContent.paddingRight":"1.5rem","tokens.card.cardContent.paddingTop":"1.5rem","tokens.card.cardActions.paddingBottom":"1.5rem","tokens.card.cardActions.paddingLeft":"1.5rem","tokens.card.cardActions.paddingRight":"1.5rem","tokens.card.cardActions.paddingTop":"0","tokens.card.quietCard.boxShadow":"none","tokens.card.quietCardActions.padding":"0","tokens.card.quietCardContent.paddingBottom":"0","tokens.card.quietCardContent.paddingLeft":"0","tokens.card.quietCardContent.paddingRight":"0","tokens.card.quietCardContent.paddingTop":"1.5rem","tokens.card.framedCard.paddingBottom":"0","tokens.card.framedCard.paddingLeft":".5rem","tokens.card.framedCard.paddingRight":".5rem","tokens.card.framedCard.paddingTop":".5rem","tokens.card.quietAndFramedCard.padding":"0","tokens.card.quietAndFramedCardContent.paddingBottom":"0","tokens.card.quietAndFramedCardContent.paddingLeft":".5rem","tokens.card.quietAndFramedCardContent.paddingRight":".5rem","tokens.card.quietAndFramedCardContent.paddingTop":".5rem","tokens.card.quietAndFramedCardActions.paddingBottom":"0","tokens.card.quietAndFramedCardActions.paddingLeft":".5rem","tokens.card.quietAndFramedCardActions.paddingRight":".5rem","tokens.card.quietAndFramedCardActions.paddingTop":"0","tokens.card.quietAndFramedCardMedia.boxShadow":"0px 0px 0px 1px rgba(0, 0, 0, 0.1) inset","tokens.card.quietAndFramedCardMedia.padding":".5rem","tokens.card.hover.background":"radial-gradient(65.63% 63.74% at 91.94% 0%, rgba(128, 128, 255, 0.15) 0%, rgba(128, 128, 255, 0) 100%)","tokens.card.focus.boxShadow":"0px 0px 0px 3px #5F60FF, 0px 0px 0px 1px #FFFFFF","tokens.card.pressed.background":"radial-gradient(65.63% 63.74% at 91.94% 0%, rgba(43, 194, 117, 0.15) 0%, rgba(43, 194, 117, 0) 100%)","tokens.card.disabled.opacity":"0.4","tokens.table.row-divider.color":"#000000","tokens.table.row-divider.opacity":0.1,"tokens.table.row-divider.rgb":"rgba(0, 0, 0, 0.1)","tokens.table.row-focus.color":"#5F60FF","tokens.table.row-focus.opacity":1,"tokens.table.row-focus.rgb":"rgb(95, 96, 255)","tokens.table.row-highlighted.color":"#5F60FF","tokens.table.row-highlighted.opacity":0.05,"tokens.table.row-highlighted.rgb":"rgba(95, 96, 255, 0.05)","tokens.table.row-highlighted-hover.color":"#5F60FF","tokens.table.row-highlighted-hover.opacity":0.08,"tokens.table.row-highlighted-hover.rgb":"rgba(95, 96, 255, 0.08)","tokens.table.row-highlighted-focus.color":"#5F60FF","tokens.table.row-highlighted-focus.opacity":0.05,"tokens.table.row-highlighted-focus.rgb":"rgba(95, 96, 255, 0.05)","tokens.table.row-highlighted-pressed.color":"#5F60FF","tokens.table.row-highlighted-pressed.opacity":0.14,"tokens.table.row-highlighted-pressed.rgb":"rgba(95, 96, 255, 0.14)","tokens.table.row-highlighted-selected-focus.color":"#5F60FF","tokens.table.row-highlighted-selected-focus.opacity":0.08,"tokens.table.row-highlighted-selected-focus.rgb":"rgba(95, 96, 255, 0.08)","tokens.table.row-highlighted-selected-pressed.color":"#5F60FF","tokens.table.row-highlighted-selected-pressed.opacity":0.17,"tokens.table.row-highlighted-selected-pressed.rgb":"rgba(95, 96, 255, 0.17)","tokens.table.row-hover.color":"#000000","tokens.table.row-hover.opacity":0.03,"tokens.table.row-hover.rgb":"rgba(0, 0, 0, 0.03)","tokens.table.row-pressed.color":"#000000","tokens.table.row-pressed.opacity":0.09,"tokens.table.row-pressed.rgb":"rgba(0, 0, 0, 0.09)","tokens.table.row-selected.color":"#000000","tokens.table.row-selected.opacity":0.03,"tokens.table.row-selected.rgb":"rgba(0, 0, 0, 0.03)","tokens.table.row-selected-hover.color":"#000000","tokens.table.row-selected-hover.opacity":0.06,"tokens.table.row-selected-hover.rgb":"rgba(0, 0, 0, 0.06)","tokens.table.row-selected-focus.color":"#000000","tokens.table.row-selected-focus.opacity":0.03,"tokens.table.row-selected-focus.rgb":"rgba(0, 0, 0, 0.03)","tokens.table.row-selected-highlighted.color":"#5F60FF","tokens.table.row-selected-highlighted.opacity":0.08,"tokens.table.row-selected-highlighted.rgb":"rgba(95, 96, 255, 0.08)","tokens.table.row-selected-highlighted-hover.color":"#5F60FF","tokens.table.row-selected-highlighted-hover.opacity":0.11,"tokens.table.row-selected-highlighted-hover.rgb":"rgba(95, 96, 255, 0.11)","tokens.table.row-selected-pressed.color":"#000000","tokens.table.row-selected-pressed.opacity":0.12,"tokens.table.row-selected-pressed.rgb":"rgba(0, 0, 0, 0.12)","tokens.table.row-hover-zebra.color":"#000000","tokens.table.row-hover-zebra.opacity":0.05,"tokens.table.row-hover-zebra.rgb":"rgba(0, 0, 0, 0.05)","tokens.tabs.default.root.backgroundColor":"rgba(204, 204, 204, 0.2)","tokens.tabs.default.root.boxShadow":"none","tokens.tabs.default.root.color":"rgba(0, 0, 0, 0.6)","tokens.tabs.default.root.opacity":1,"tokens.tabs.default.root.padding":"0","tokens.tabs.quiet.root.backgroundColor":"transparent","tokens.tabs.quiet.root.boxShadow":"0px -1px 0px 0px rgba(0, 0, 0, 0.1) inset","tokens.tabs.quiet.root.color":"rgba(0, 0, 0, 0.6)","tokens.tabs.quiet.root.opacity":1,"tokens.tabs.quiet.root.padding":"0","tokens.tabs.default.tab.default.backgroundColor":"transparent","tokens.tabs.default.tab.default.borderWidth":"0","tokens.tabs.default.tab.default.boxShadow":"none","tokens.tabs.default.tab.default.color":"rgba(0, 0, 0, 0.6)","tokens.tabs.default.tab.default.fontSize":"1rem","tokens.tabs.default.tab.default.fontWeight":600,"tokens.tabs.default.tab.default.height":"56px","tokens.tabs.default.tab.default.lineHeight":"1.25","tokens.tabs.default.tab.default.padding":"16px 28px","tokens.tabs.default.tab.default.textTransform":"none","tokens.tabs.default.tab.default.transitionDuration":"187.5ms","tokens.tabs.default.tab.default.transitionTimingFunction":"cubic-bezier(0.2, 0, 0.4, 1)","tokens.tabs.default.tab.active.backgroundColor":"rgb(255, 255, 255)","tokens.tabs.default.tab.active.borderWidth":"0","tokens.tabs.default.tab.active.boxShadow":"0px 2px 0px 0px #000000 inset","tokens.tabs.default.tab.active.color":"rgb(0, 0, 0)","tokens.tabs.default.tab.active.fontSize":"1rem","tokens.tabs.default.tab.active.fontWeight":600,"tokens.tabs.default.tab.active.height":"56px","tokens.tabs.default.tab.active.lineHeight":"1.25","tokens.tabs.default.tab.active.padding":"16px 28px","tokens.tabs.default.tab.active.textTransform":"none","tokens.tabs.default.tab.active.transitionDuration":"250ms","tokens.tabs.default.tab.active.transitionTimingFunction":"cubic-bezier(0.2, 0, 0.8, 1)","tokens.tabs.default.tab.hover.backgroundColor":"rgba(0, 0, 0, 0.03)","tokens.tabs.default.tab.hover.borderWidth":"0","tokens.tabs.default.tab.hover.boxShadow":"none","tokens.tabs.default.tab.hover.color":"rgba(0, 0, 0, 0.6)","tokens.tabs.default.tab.hover.fontSize":"1rem","tokens.tabs.default.tab.hover.fontWeight":600,"tokens.tabs.default.tab.hover.height":"56px","tokens.tabs.default.tab.hover.lineHeight":"1.25","tokens.tabs.default.tab.hover.padding":"16px 28px","tokens.tabs.default.tab.hover.textTransform":"none","tokens.tabs.default.tab.hover.transitionDuration":"250ms","tokens.tabs.default.tab.hover.transitionTimingFunction":"cubic-bezier(0.2, 0, 0.8, 1)","tokens.tabs.default.tab.focus.backgroundColor":"transparent","tokens.tabs.default.tab.focus.borderColor":"#5F60FF","tokens.tabs.default.tab.focus.borderStyle":"solid","tokens.tabs.default.tab.focus.borderWidth":"2px","tokens.tabs.default.tab.focus.boxShadow":"none","tokens.tabs.default.tab.focus.boxSizing":"border-box","tokens.tabs.default.tab.focus.color":"rgba(0, 0, 0, 0.6)","tokens.tabs.default.tab.focus.fontSize":"1rem","tokens.tabs.default.tab.focus.fontWeight":600,"tokens.tabs.default.tab.focus.height":"56px","tokens.tabs.default.tab.focus.lineHeight":"1.25","tokens.tabs.default.tab.focus.padding":"16px 28px","tokens.tabs.default.tab.focus.textTransform":"none","tokens.tabs.default.tab.focus.transitionDuration":"187.5ms","tokens.tabs.default.tab.focus.transitionTimingFunction":"cubic-bezier(0.2, 0, 0.4, 1)","tokens.tabs.default.tab.pressed.backgroundColor":"rgba(0, 0, 0, 0.09)","tokens.tabs.default.tab.pressed.borderWidth":"0","tokens.tabs.default.tab.pressed.boxShadow":"none","tokens.tabs.default.tab.pressed.color":"rgba(0, 0, 0, 0.6)","tokens.tabs.default.tab.pressed.fontSize":"1rem","tokens.tabs.default.tab.pressed.fontWeight":600,"tokens.tabs.default.tab.pressed.height":"56px","tokens.tabs.default.tab.pressed.lineHeight":"1.25","tokens.tabs.default.tab.pressed.padding":"16px 28px","tokens.tabs.default.tab.pressed.textTransform":"none","tokens.tabs.default.tab.pressed.transitionDuration":"187.5ms","tokens.tabs.default.tab.pressed.transitionTimingFunction":"cubic-bezier(0.2, 0, 0.4, 1)","tokens.tabs.default.tab.disabled.borderWidth":"0","tokens.tabs.default.tab.disabled.boxShadow":"none","tokens.tabs.default.tab.disabled.color":"rgba(0, 0, 0, 0.6)","tokens.tabs.default.tab.disabled.fontSize":"1rem","tokens.tabs.default.tab.disabled.fontWeight":600,"tokens.tabs.default.tab.disabled.height":"56px","tokens.tabs.default.tab.disabled.lineHeight":"1.25","tokens.tabs.default.tab.disabled.opacity":0.4,"tokens.tabs.default.tab.disabled.padding":"16px 28px","tokens.tabs.default.tab.disabled.textTransform":"none","tokens.tabs.quiet.tab.default.backgroundColor":"transparent","tokens.tabs.quiet.tab.default.borderWidth":"0","tokens.tabs.quiet.tab.default.boxShadow":"none","tokens.tabs.quiet.tab.default.color":"rgba(0, 0, 0, 0.6)","tokens.tabs.quiet.tab.default.fontSize":"1rem","tokens.tabs.quiet.tab.default.fontWeight":600,"tokens.tabs.quiet.tab.default.height":"48px","tokens.tabs.quiet.tab.default.lineHeight":"1.25","tokens.tabs.quiet.tab.default.padding":"12px 0px","tokens.tabs.quiet.tab.default.textTransform":"none","tokens.tabs.quiet.tab.default.transitionDuration":"187.5ms","tokens.tabs.quiet.tab.default.transitionTimingFunction":"cubic-bezier(0.2, 0, 0.4, 1)","tokens.tabs.quiet.tab.active.backgroundColor":"transparent","tokens.tabs.quiet.tab.active.borderWidth":"0","tokens.tabs.quiet.tab.active.boxShadow":"0px -2px 0px 0px #000000 inset","tokens.tabs.quiet.tab.active.color":"rgb(0, 0, 0)","tokens.tabs.quiet.tab.active.fontSize":"1rem","tokens.tabs.quiet.tab.active.fontWeight":600,"tokens.tabs.quiet.tab.active.height":"48px","tokens.tabs.quiet.tab.active.lineHeight":"1.25","tokens.tabs.quiet.tab.active.padding":"12px 0px","tokens.tabs.quiet.tab.active.textTransform":"none","tokens.tabs.quiet.tab.active.transitionDuration":"250ms","tokens.tabs.quiet.tab.active.transitionTimingFunction":"cubic-bezier(0.2, 0, 0.8, 1)","tokens.tabs.quiet.tab.hover.backgroundColor":"rgba(0, 0, 0, 0.03)","tokens.tabs.quiet.tab.hover.borderWidth":"0","tokens.tabs.quiet.tab.hover.boxShadow":"none","tokens.tabs.quiet.tab.hover.color":"rgba(0, 0, 0, 0.6)","tokens.tabs.quiet.tab.hover.fontSize":"1rem","tokens.tabs.quiet.tab.hover.fontWeight":600,"tokens.tabs.quiet.tab.hover.height":"48px","tokens.tabs.quiet.tab.hover.lineHeight":"1.25","tokens.tabs.quiet.tab.hover.padding":"12px 0px","tokens.tabs.quiet.tab.hover.textTransform":"none","tokens.tabs.quiet.tab.hover.transitionDuration":"250ms","tokens.tabs.quiet.tab.hover.transitionTimingFunction":"cubic-bezier(0.2, 0, 0.8, 1)","tokens.tabs.quiet.tab.focus.backgroundColor":"transparent","tokens.tabs.quiet.tab.focus.borderColor":"#5F60FF","tokens.tabs.quiet.tab.focus.borderStyle":"solid","tokens.tabs.quiet.tab.focus.borderWidth":"2px","tokens.tabs.quiet.tab.focus.boxShadow":"none","tokens.tabs.quiet.tab.focus.boxSizing":"border-box","tokens.tabs.quiet.tab.focus.color":"rgba(0, 0, 0, 0.6)","tokens.tabs.quiet.tab.focus.fontSize":"1rem","tokens.tabs.quiet.tab.focus.fontWeight":600,"tokens.tabs.quiet.tab.focus.height":"48px","tokens.tabs.quiet.tab.focus.lineHeight":"1.25","tokens.tabs.quiet.tab.focus.padding":"12px 0px","tokens.tabs.quiet.tab.focus.textTransform":"none","tokens.tabs.quiet.tab.focus.transitionDuration":"187.5ms","tokens.tabs.quiet.tab.focus.transitionTimingFunction":"cubic-bezier(0.2, 0, 0.4, 1)","tokens.tabs.quiet.tab.pressed.backgroundColor":"rgba(0, 0, 0, 0.09)","tokens.tabs.quiet.tab.pressed.borderWidth":"0","tokens.tabs.quiet.tab.pressed.boxShadow":"none","tokens.tabs.quiet.tab.pressed.color":"rgba(0, 0, 0, 0.6)","tokens.tabs.quiet.tab.pressed.fontSize":"1rem","tokens.tabs.quiet.tab.pressed.fontWeight":600,"tokens.tabs.quiet.tab.pressed.height":"48px","tokens.tabs.quiet.tab.pressed.lineHeight":"1.25","tokens.tabs.quiet.tab.pressed.padding":"12px 0px","tokens.tabs.quiet.tab.pressed.textTransform":"none","tokens.tabs.quiet.tab.pressed.transitionDuration":"187.5ms","tokens.tabs.quiet.tab.pressed.transitionTimingFunction":"cubic-bezier(0.2, 0, 0.4, 1)","tokens.tabs.quiet.tab.disabled.borderWidth":"0","tokens.tabs.quiet.tab.disabled.boxShadow":"none","tokens.tabs.quiet.tab.disabled.color":"rgba(0, 0, 0, 0.6)","tokens.tabs.quiet.tab.disabled.fontSize":"1rem","tokens.tabs.quiet.tab.disabled.fontWeight":600,"tokens.tabs.quiet.tab.disabled.height":"48px","tokens.tabs.quiet.tab.disabled.lineHeight":"1.25","tokens.tabs.quiet.tab.disabled.opacity":0.4,"tokens.tabs.quiet.tab.disabled.padding":"12px 0px","tokens.tabs.quiet.tab.disabled.textTransform":"none","tokens.textLink.defaultState.color":"rgb(0, 0, 0)","tokens.textLink.defaultState.outlineColor":"transparent","tokens.textLink.defaultState.outlineOffset":"2px","tokens.textLink.defaultState.underlineColor":"rgb(0, 0, 0)","tokens.textLink.defaultState.underlineThickness":"1px","tokens.textLink.hoverState.color":"rgb(0, 0, 0)","tokens.textLink.hoverState.outlineColor":"transparent","tokens.textLink.hoverState.outlineOffset":"2px","tokens.textLink.hoverState.underlineColor":"#8080FF","tokens.textLink.hoverState.underlineThickness":"2px","tokens.textLink.focusState.color":"rgb(0, 0, 0)","tokens.textLink.focusState.outlineColor":"#5F60FF","tokens.textLink.focusState.outlineOffset":"2px","tokens.textLink.focusState.underlineColor":"rgb(0, 0, 0)","tokens.textLink.focusState.underlineThickness":"1px","tokens.textLink.pressedState.color":"rgb(0, 0, 0)","tokens.textLink.pressedState.outlineColor":"transparent","tokens.textLink.pressedState.outlineOffset":"2px","tokens.textLink.pressedState.underlineColor":"#2BC275","tokens.textLink.pressedState.underlineThickness":"2px","tokens.textLink.visitedState.color":"rgba(0, 0, 0, 0.6)","tokens.textLink.visitedState.outlineColor":"transparent","tokens.textLink.visitedState.outlineOffset":"2px","tokens.textLink.visitedState.underlineColor":"rgba(0, 0, 0, 0.6)","tokens.textLink.visitedState.underlineThickness":"1px"}');

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
/*!*************************************!*\
  !*** ./components/tooltip/index.js ***!
  \*************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() {}
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.scss */ "./components/tooltip/styles.scss");
/* harmony import */ var _styles_dark_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles-dark.scss */ "./components/tooltip/styles-dark.scss");
/* harmony import */ var _node_modules_digital_hig_theme_data_lib_build_json_lightTheme_resolvedRoles_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/@digital-hig/theme-data/lib/build/json/lightTheme/resolvedRoles.json */ "./node_modules/@digital-hig/theme-data/lib/build/json/lightTheme/resolvedRoles.json");
/* harmony import */ var _scripts_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../scripts/utilities */ "./scripts/utilities.js");





class Tooltip extends HTMLElement {
  // arrays of locations for finding alternate tooltip placement
  // array of arrow locations for finding alternate placement of arrows
  // breakpoints from dhig
  constructor() {
    super();

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "mouseoverHandler", (event, configElement) => {
      const target = event.target.tagName === 'use' ? event.target.parentElement : event.target;
      window.clearTimeout(this.tooltipTimeout);

      if (target !== this.activeTooltip && !target.closest('.cmp-tooltip')) {
        this.hideTooltip();
      }

      if (configElement) {
        try {
          const settings = JSON.parse(configElement.getAttribute('data-tooltip'));

          if (settings) {
            const tooltipEnabled = this.isTooltipEnabled(target, settings); // don't display tooltips disabled for current screen width

            if (!tooltipEnabled) {
              return;
            }
          }

          if (!document.querySelector('.cmp-tooltip')) {
            this.tooltipTimeout = window.setTimeout(() => {
              this.showTooltip(target, settings);
            }, this.isMobileWidth() ? 0 : 300); // no timeout for mobile
          }
        } catch (error) {
          console.error("Could not parse tooltip settings", error);
        }
      }
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "mouseoutHandler", event => {
      window.clearTimeout(this.tooltipTimeout);
      this.tooltipTimeout = window.setTimeout(() => {
        this.hideTooltip();
      }, this.isMobileWidth() ? 0 : 1000); // no timeout for mobile
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "escapeKeyHandler", event => {
      window.clearTimeout(this.tooltipTimeout);
      this.hideTooltip();
    });

    this.settings = null;
    this.element = null;
    this.activeTooltip = null;
    this.tooltipTimeout = null;
    this.tooltipRect = null;
  }
  /**
   * returns a DOMRect object of the tooltip element
   * @param tooltip
   * @param arrowElement
   * @param settings
   * @returns {DOMRect}
   */


  getTooltipRect(tooltip, arrowElement, settings) {}
  /**
   * returns a DOMRect object of the tooltip arrow
   * @param arrowElement
   * @param settings
   * @returns {DOMRect}
   */


  getArrowRect(arrowElement, settings) {}
  /**
   * Gets array of boundary violations for tooltip edge detection
   * @param tooltipRect
   * @returns {boolean[]} - violations are marked as true
   */


  getBoundaryViolations(tooltipRect) {}
  /**
   * Returns whether or not the bounds object has any bounds violations or not
   * @param bounds
   * @returns {boolean}
   */


  isValidLocation(bounds) {}
  /**
   * When the tooltip is out of bounds we search through other tooltip
   * locations (e.g., top, left) and arrow positions (e.g., start, middle)
   * to find a combination that has not out of bounds.
   * Note: if no valid location is found, the original location is used
   * @param tooltip
   * @param arrow
   * @param size
   */


  setValidLocation(tooltip, arrow, size) {}
  /**
   * Sets the location styles for arrow and tooltip, sets tooltipRect property
   * @param tooltip
   * @param arrow
   * @param settings
   */


  setTooltipStyles(tooltip, arrow, settings) {}
  /**
   * Create the tooltip DOM
   * @param {object} element - DOM element to attach tooltip
   * @param {object} settings - Tootip settings object
   */


  createDOM() {}
  /**
   * destroy the tooltip DOM
   */


  destroyDOM() {}
  /**
   * Show the tooltip
   * @param element {object}
   * @param settings {object}
   */


  showTooltip(element, settings) {}
  /**
   * Hide the tooltip
   */


  hideTooltip() {}
  /**
   * Returns true if screen width is between minScreenWidth and maxScreenWidth,
   * under maxScreenWidth, or over minScreenWidth.  Note if neither property is
   * set, returns true
   * Note: this is typically set in a media query in css.
   * @param element
   * @returns {boolean}
   */


  isTooltipEnabled(element, settings) {}
  /**
   * Returns whether or not the window width is smaller than the dhig md breakpoint
   * @returns {boolean}
   */


  isMobileWidth() {}
  /**
   * handler for mouseover events
   * @param event
   */


} // define the custom html element

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(Tooltip, "locations", {
  top: ['top', 'bottom', 'right', 'left'],
  bottom: ['bottom', 'top', 'right', 'left'],
  left: ['left', 'right', 'bottom', 'top'],
  right: ['right', 'left', 'bottom', 'top']
});

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(Tooltip, "arrows", {
  end: ['end', 'start', 'middle'],
  start: ['start', 'end', 'middle'],
  middle: ['middle', 'start', 'end']
});

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(Tooltip, "breakpoints", {
  medium: _node_modules_digital_hig_theme_data_lib_build_json_lightTheme_resolvedRoles_json__WEBPACK_IMPORTED_MODULE_3__["tokens.grid.md.breakpoint"],
  large: _node_modules_digital_hig_theme_data_lib_build_json_lightTheme_resolvedRoles_json__WEBPACK_IMPORTED_MODULE_3__["tokens.grid.lg.breakpoint"],
  extraLarge: _node_modules_digital_hig_theme_data_lib_build_json_lightTheme_resolvedRoles_json__WEBPACK_IMPORTED_MODULE_3__["tokens.grid.xl.breakpoint"]
});

if (window && window.customElements) {
  window.customElements.define("mfe-tooltip", Tooltip);
}
}();
/******/ })()
;
//# sourceMappingURL=standard.js.map