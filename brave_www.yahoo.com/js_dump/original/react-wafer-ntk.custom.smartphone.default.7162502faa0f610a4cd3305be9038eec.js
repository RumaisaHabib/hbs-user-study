"use strict";!function(){var t,e=window,n=e.wafer,i=document.getElementsByClassName("ntk-ad-item");i.length>0&&(t=i[0]);var a=!1;var s=new MutationObserver((function(t){t.forEach((function(t){if("class"===t.attributeName&&t.target.className.includes("hide-ntk-ad")&&!a){var e=document.getElementById("ntk-next-btn");e&&e.click(),a=!0}}))}));t&&s.observe(t,{attributes:!0}),n&&n.ready((function(){if(document.getElementsByClassName("fuji-ntk-has-swipe-animation").length>0){var t="fujiNtkOnboarding",i=document.getElementById("ntk-list"),a="fuji-ntk-swipe-animation";1!==function(t){var n;try{n=JSON.parse(e.localStorage.getItem(t))||{}}catch(t){}return n}(t)&&(setTimeout((function(){i.classList.add(a)}),500),setTimeout((function(){i.classList.remove(a)}),2e3),function(t,n){try{e.localStorage.setItem(t,JSON.stringify(n))}catch(t){}}(t,1))}n.on("scrollview:change",(function(t){if(t){var n=t.elem,i=t.meta,a=n&&n.classList;if(a){var s=e.YAHOO&&e.YAHOO.i13n&&e.YAHOO.i13n.rapidInstance,c=s&&s.beaconClick;if(a.contains("ntk-swipe-i13n")&&c&&i&&i.index>=0&&i.prevIndex>=0)c("strm",i.prevIndex>i.index?"left":"right","",{cpos:1,elm:"swipe",itc:1,pkgt:"need_to_know",pos:i.index,sec:"strm",subsec:"needtoknow"})}}}))}))}();