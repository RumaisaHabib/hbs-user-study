!function(){"use strict";var e=["XFPAD","WFPAD"],t=function(){};function o(e,t){}var n=function(e){},a=function(){var e,a=window.wafer;(e=window.s)&&e.t(),a.on("autocomplete:select",n),a.on("autocomplete:deleted",n),function(){var e=window.wafer;e.on("form:submit",(function(e){})),e.on("lightbox:open",(function(e){}));var t=document.documentElement;if("true"===t.getAttribute("data-color-theme-enabled")){var o=t.getAttribute("data-color-scheme");o&&(o="default"===o?"auto":o,window.YAHOO.switchColorSchema(o))}}(),function(){var e=window.wafer;e.on("lightbox:close",(function(n){}))}(),function(){if(document.startViewTransition&&-1!==window.YAHOO.context.feature.indexOf("enableSharedElementTransition")){var e=window.matchMedia("(prefers-reduced-motion: reduce)");e&&!0===e.matches||window.wafer.features.isSlowBrowser.then((function(e){}))}}(),-1!==window.YAHOO.context.feature.indexOf("enableArticleClusterStoryContinuous")&&window.wafer.on("caas:article:fetch",(function(e){})),window.YAHOO.context.feature.indexOf("darkmode")>-1&&function(e){}({key:"darkmodeOnboarding",lightboxTarget:"fp-theme-lightbox-template",lightboxWillMount:function(){}})},r=window.wafer;r?r.ready((function(){})):document.body.addEventListener("wafer:ready",(function(){a()})),window.YAHOO.switchColorSchema||(window.YAHOO.switchColorSchema=function(e){}),window.addEventListener("ads:finish:parse",(function(t){for(var o,n,a,r=!1,i=0,l=e;i<l.length;i++){var d=l[i];if(null===(n=null===(o=t.detail.positions)||void 0===o?void 0:o[d])||void 0===n?void 0:n.validAd){r=!0;break}if(null===(a=window.pageloadValidAds)||void 0===a?void 0:a.includes(d)){r=!0;break}}window.wafer&&r&&function(){}()}),{once:!0})}();
//# sourceMappingURL=fpMobile.js.map