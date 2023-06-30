"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6741],{79091:function(n,t,e){e.d(t,{G:function(){return g}});var r=e(92228),i=e(52322),a=e(72779),o=e.n(a),d=(e(2784),e(19453)),l=e(45103),c=e(91842);function s(){var n=(0,r.Z)(["\n    margin-top: ",";\n"]);return s=function(){return n},n}function u(){var n=(0,r.Z)(["\n    margin-top: ",";\n"]);return u=function(){return n},n}function p(){var n=(0,r.Z)(["\n    .inner {\n        max-width: 480px;\n        margin: 0 auto;\n        text-align: center;\n    }\n\n    .title {\n        ",";\n    }\n\n    .message {\n        ",";\n        margin-top: ",";\n    }\n"]);return p=function(){return n},n}var g=function(n){var t=n.title,e=n.message,r=n.className,a=n.action,d="compact"===n.displayType?f:v;return(0,i.jsx)(m,{className:o()(r),baseColor:"none",children:(0,i.jsxs)("div",{className:"inner",children:[(0,i.jsx)("div",{className:"title",role:"alert",children:t}),n.message&&(0,i.jsx)("div",{className:"message",role:"alert",children:e}),!!a&&(0,i.jsx)(d,{children:a})]})})},f=d.default.div.withConfig({componentId:"sc-7d0540f7-0"})(s(),c.spacing.s),v=d.default.div.withConfig({componentId:"sc-7d0540f7-1"})(u(),c.spacing.l),m=(0,d.default)(l.PageSection).withConfig({componentId:"sc-7d0540f7-2"})(p(),(0,c.setPropertyToColorVar)("color","ipt-on-baseAlt-textPrimary-color"),(0,c.setPropertyToColorVar)("color","ipt-on-baseAlt-textSecondary-color"),c.spacing.m)},6741:function(n,t,e){e.d(t,{P:function(){return Mn},m:function(){return Zn}});var r=e(70865),i=e(96670),a=e(66383),o=e(92228),d=e(52322),l=e(30382),c=e.n(l),s=(e(2784),e(73857)),u=e(19453),p=e(15907),g=e(45103),f=e(91842),v=e(79091),m=e(57531),h=e(89617);function x(){var n=(0,o.Z)(["\n    fragment WatchOptionCategories on CategorizedWatchOptions {\n        categoryName {\n            value\n            language\n        }\n        watchOptions {\n            title {\n                value\n                language\n            }\n            link(platform: WEB)\n            promoted\n            shortTitle {\n                value\n                language\n            }\n            description {\n                value\n                language\n            }\n            provider {\n                name {\n                    value\n                    language\n                }\n                refTagFragment\n            }\n        }\n    }\n"]);return x=function(){return n},n}function y(){var n=(0,o.Z)(["\n    align-items: flex-start;\n    display: flex;\n    height: 100%;\n    margin: 3rem 0;\n    justify-content: center;\n"]);return y=function(){return n},n}function b(){var n=(0,o.Z)(["\n    ","\n"]);return b=function(){return n},n}function T(){var n=(0,o.Z)(["\n    ","\n    ","\n    text-transform: none;\n    font-size: 13px;\n    margin: 0;\n    padding: 13px 0 7px 15px;\n\n    "," {\n        padding: 13px 0 7px 0;\n    }\n"]);return T=function(){return n},n}function C(){var n=(0,o.Z)(["\n    &:first-child {\n        border-top: 1px solid rgba(",", 0.1);\n    }\n    border-bottom: 1px solid rgba(",", 0.1);\n    height: 3.5rem;\n\n    "," {\n        padding: 0;\n    }\n"]);return C=function(){return n},n}function I(){var n=(0,o.Z)(["\n    ","\n"]);return I=function(){return n},n}function w(){var n=(0,o.Z)(["\n    ","\n    ","\n\n    "," {\n        max-width: 260px;\n    }\n"]);return w=function(){return n},n}function j(){var n=(0,o.Z)(["\n    ","\n    background: initial;\n"]);return j=function(){return n},n}var _=function(n){var t=n.titleId,e=n.category,a=n.watchOptions,o=n.refMarker,l=e.toUpperCase().replace("IMDB","IMDb"),c=(0,m.Ok)().adSlotsInfo;return(0,d.jsxs)(M,{children:[(0,d.jsx)(O,{children:l}),(0,d.jsx)(g.List,{children:t&&a.map((function(n){var a,l=(0,h.i)(t,n,o,c);return(0,d.jsxs)(L,(0,i.Z)((0,r.Z)({},l),{children:[(0,d.jsx)(R,{children:"shw"===n.provider.refTagFragment?n.title.value:n.provider.name.value}),(0,d.jsx)(N,{children:null===(a=n.description)||void 0===a?void 0:a.value})]}),"".concat(e,"-").concat(n.link))}))})]})},k=function(n){var t=n.titleId,e=n.watchOptionsCategories,r=n.isLoading,i=n.refMarker,a=(0,s.Z)();return r?(0,d.jsx)(P,{"data-testid":"loader-container",children:(0,d.jsx)(g.Loader,{})}):e&&0!==e.length?(0,d.jsx)(d.Fragment,{children:e.map((function(n){return(0,d.jsx)(_,{titleId:t,category:n.categoryName.value,watchOptions:n.watchOptions,refMarker:i},n.categoryName.value)}))}):(0,d.jsx)(S,{title:a.formatMessage({id:"error_emptyStates_watchOptions_title",defaultMessage:"Watch Options are currently unavailable"}),message:a.formatMessage({id:"error_common_refreshOrTryAgain",defaultMessage:"Please refresh the page or try again later."})})},Z=c()(x());k.fragments={watchOptionsCategories:Z};var P=u.default.div.withConfig({componentId:"sc-8be1d9a6-0"})(y()),M=u.default.div.withConfig({componentId:"sc-8be1d9a6-1"})(b(),(0,f.setTypographyType)("body")),O=u.default.div.withConfig({componentId:"sc-8be1d9a6-2"})(T(),(0,f.setTypographyType)("overline"),(0,f.setPropertyToColorVar)("color","ipt-on-baseAlt-accent1-color"),f.mediaQueries.breakpoints.above.m),L=(0,u.default)(g.ListItem).withConfig({componentId:"sc-8be1d9a6-3"})(C(),(0,f.getColorVarValue)("ipt-base-rgb"),(0,f.getColorVarValue)("ipt-base-rgb"),f.mediaQueries.breakpoints.above.m),R=u.default.div.withConfig({componentId:"sc-8be1d9a6-4"})(I(),(0,f.setTypographyType)("subtitle")),N=u.default.div.withConfig({componentId:"sc-8be1d9a6-5"})(w(),(0,f.setPropertyToColorVar)("color","ipt-on-baseAlt-textHint-color"),(0,f.setTypographyType)("bodySmall"),f.mediaQueries.breakpoints.above.m),S=(0,u.default)(v.G).withConfig({componentId:"sc-8be1d9a6-6"})(j(),(0,f.setTypographyType)("body")),A=e(22414),B=e(58267),W=e(81303),F=e(13813),V=e(64023),z=e(3499),U=e(91793),D=e(77637),Q=e(76510),E="tp",$="btp_trlr",G="btp_ta",q="btp_rt",H="btp_rt_ds",Y="btp_ml",K="btp_gl",X=(0,Q.vU)({ratingButtonRatedAriaLabel:{id:"common_ariaLabels_ratingButtonRated",defaultMessage:"Your rating: {rating}"},ratingButtonUnratedAriaLabel:{id:"common_ariaLabels_ratingButtonUnrated",defaultMessage:"Rate {titleName}"},ratingPromptRateLabel:{id:"common_ratingPrompt_rate",defaultMessage:"Rate"}}),J=e(25699),nn=e(61436),tn=e(31619),en=e(97026),rn=e(35635),an=e(89254),on=e(96485);function dn(){var n=(0,o.Z)(["\n    width: 4.5rem;\n"]);return dn=function(){return n},n}function ln(){var n=(0,o.Z)(["\n    display: flex;\n    ","\n    ","\n    margin-bottom: ",";\n    margin-top: ",";\n    max-width: 100%;\n    padding-left: ",";\n    padding-right: ",";\n\n    "," {\n        padding-left: 0;\n        padding-right: 0;\n        margin-top: 0;\n    }\n"]);return ln=function(){return n},n}function cn(){var n=(0,o.Z)(["\n    display: flex;\n    flex-direction: column;\n    padding-left: ",";\n    overflow: hidden;\n"]);return cn=function(){return n},n}function sn(){var n=(0,o.Z)(["\n            ","\n        "]);return sn=function(){return n},n}function un(){var n=(0,o.Z)(["\n    margin-bottom: ",";\n    padding: 0;\n\n    ","\n\n    .prompt-title-text {\n        max-height: 7.4rem;\n    }\n"]);return un=function(){return n},n}function pn(){var n=(0,o.Z)(["\n    ","\n\n    .standalone-star {\n        padding: 0;\n        min-width: 0;\n    }\n"]);return pn=function(){return n},n}function gn(){var n=(0,o.Z)(["\n    height: fit-content;\n"]);return gn=function(){return n},n}function fn(n,t,e){var r="/title/".concat(n,"/");return e?"".concat(r,"?").concat((0,D.I)(t,e)):r}var vn=function(n){var t,e,r,i,a=n.titleData,o=a.originalTitleText,l=a.titleText,c=a.id,s=a.primaryImage,u=a.titleType,p=a.titleGenres,v=a.ratingsSummary,m=a.canRate,h=(0,g.useRatingsContext)(c).rating,x=(0,nn.P)(h,"user"),y=(0,nn.P)(null===v||void 0===v?void 0:v.aggregateRating,"imdb"),b=(0,an.K)({originalTitleText:o,titleText:l}),T=(0,tn.N)(X.ratingButtonRatedAriaLabel,{rating:x||""}),C=(0,tn.N)(X.ratingButtonUnratedAriaLabel,{titleName:b}),I=(0,tn.N)(X.ratingPromptRateLabel),w=fn(c,"".concat(E,"_t"),n.refMarker),j=fn(c,"".concat(E,"_i"),n.refMarker),_=function(n){var t=[],e=n.releaseYear,r=n.runtime,i=n.certificate,a=n.canHaveEpisodes,o=(0,rn.y)(e,a);return o&&t.push(o),(null===r||void 0===r?void 0:r.seconds)&&t.push((0,en.L)(r.seconds,en.A.HOURS_MINUTES_EXPLICIT)),(null===i||void 0===i?void 0:i.rating)&&t.push(i.rating),t}(n.titleData);return(0,d.jsxs)(hn,{children:[(0,d.jsx)(mn,{children:(0,d.jsx)(g.Poster,{imageProps:{imageModel:(0,on.G)(s,b),imageType:null===u||void 0===u?void 0:u.id,size:"xs"},ariaLabel:b,href:j})}),(0,d.jsxs)(xn,{children:[(0,d.jsx)(yn,{href:w,titleTextClass:"prompt-title-text",typographyType:(null!==(i=null===b||void 0===b?void 0:b.length)&&void 0!==i?i:0)>65?"".concat((0,f.setTypographyType)("subtitle")):"",children:b}),_.length>0&&(0,d.jsx)(g.InlineList,{showDividers:!0,inline:!0,noWrap:!0,"data-testid":Y,children:_.map((function(n){return(0,d.jsx)(g.InlineListItem,{children:n},n)}))}),p&&p.genres.length>0&&(0,d.jsx)(g.InlineList,{showDividers:!0,inline:!0,noWrap:!0,"data-testid":K,children:p.genres.map((function(n){return(0,d.jsx)(g.InlineListItem,{children:n.genre.text},"".concat(n.genre.text))}))}),(y||(null===m||void 0===m?void 0:m.isRatable))&&(0,d.jsxs)(bn,{"data-testid":q,children:[y&&(0,d.jsx)(g.RatingStar,{className:H,formattedRating:y,maxRating:10}),(null===m||void 0===m?void 0:m.isRatable)&&b&&(0,d.jsx)(J.T,{title:{id:c,titleText:b,canRate:m.isRatable},refPrefix:(null===(t=n.refMarker)||void 0===t?void 0:t.prefix)?"".concat(null===(e=n.refMarker)||void 0===e?void 0:e.prefix,"_").concat(E):E,refSuffix:(null===(r=n.refMarker)||void 0===r?void 0:r.suffix)||"",ratingTriggerComponent:function(n){var t=n.onUserRatingClick;return(0,d.jsx)(Tn,{ariaLabelRated:T,ariaLabelUnrated:C,formattedRating:x,className:y?void 0:"standalone-star",onClick:t,rateLabel:I})}})]})]})]})},mn=u.default.div.withConfig({componentId:"sc-a78ec4e3-0"})(dn()),hn=u.default.div.withConfig({componentId:"sc-a78ec4e3-1"})(ln(),(0,f.setTypographyType)("bodySmall"),(0,f.setPropertyToColorVar)("color","ipt-on-baseAlt-textSecondary-color"),f.spacing.s,f.spacing.xxs,f.spacing.s,f.spacing.s,f.mediaQueries.breakpoints.above.m),xn=u.default.div.withConfig({componentId:"sc-a78ec4e3-2"})(cn(),f.spacing.s),yn=(0,u.default)(g.Title).withConfig({componentId:"sc-a78ec4e3-3"})(un(),f.spacing.xxs,(function(n){return(0,u.css)(sn(),n.typographyType)})),bn=u.default.div.withConfig({componentId:"sc-a78ec4e3-4"})(pn(),(0,f.setTypographyType)("body")),Tn=(0,u.default)(g.RateButton).withConfig({componentId:"sc-a78ec4e3-5"})(gn());function Cn(){var n=(0,o.Z)(["\n    fragment baseTitlePromptQueryFragment on Title {\n        id\n        watchOptionsByCategory(\n            promotedProvider: $providerId\n            location: $location\n        ) {\n            categorizedWatchOptionsList {\n                ...WatchOptionCategories\n            }\n        }\n        plot {\n            plotText {\n                plainText\n            }\n        }\n        latestTrailer {\n            id\n        }\n    }\n    ","\n"]);return Cn=function(){return n},n}function In(){var n=(0,o.Z)(["\n    query Base_Title_Prompt(\n        $id: ID!\n        $providerId: String\n        $location: WatchOptionsLocation\n    ) {\n        title(id: $id) {\n            ...baseTitlePromptQueryFragment\n        }\n    }\n    ","\n"]);return In=function(){return n},n}function wn(){var n=(0,o.Z)(["\n    padding-bottom: ",";\n"]);return wn=function(){return n},n}function jn(){var n=(0,o.Z)(["\n    display: flex;\n    margin-bottom: ",";\n    padding-left: ",";\n    padding-right: ",";\n\n    "," {\n        padding-left: 0;\n        padding-right: 0;\n    }\n\n    & > :nth-child(1):not(:last-child) {\n        margin-right: ",";\n    }\n"]);return jn=function(){return n},n}function _n(){var n=(0,o.Z)(["\n    ","\n    ","\n    margin-bottom: ",";\n    padding-left: ",";\n    padding-right: ",";\n\n    "," {\n        padding-left: 0;\n        padding-right: 0;\n    }\n"]);return _n=function(){return n},n}function kn(){var n=(0,o.Z)(["\n    ","\n"]);return kn=function(){return n},n}var Zn=c()(Cn(),Z),Pn=c()(In(),Zn),Mn=function(n){var t,e,o,l,c,u,f=n.title,h=n.refMarker,x=n.onClose,y=n.isOpen,b=n.queryOverride,T=n.contentOverride,C=n.actionOverride,I=(0,s.Z)(),w=(0,F.y)(),j=(0,i.Z)((0,r.Z)({},w),{refTag:(0,D.z)(E,h)}),_=(0,m.Ok)().adSlotsInfo,Z=(0,p.getProviderId)(_),P=(0,z.ic)(),M=(0,a.Z)((0,V.E)((0,r.Z)({query:Pn,variables:{id:null===f||void 0===f?void 0:f.id,promotedProvider:Z,providerId:Z,location:P},context:{serverSideCacheable:!1,personalized:!1},pause:!f||!y},b)),2),O=M[0],L=M[1],R=null===(t=O.data)||void 0===t?void 0:t.title,N=O.fetching,S=O.error;if(!f||!(null===(e=f.titleText)||void 0===e?void 0:e.text))return null;var U=null===R||void 0===R||null===(o=R.watchOptionsByCategory)||void 0===o?void 0:o.categorizedWatchOptionsList,Q=U&&U.length>0,q=null===R||void 0===R||null===(l=R.latestTrailer)||void 0===l?void 0:l.id,H=q?"/video/".concat(q,"/?ref_=").concat((0,D.z)("".concat(E,"_vp"),h)):void 0,Y=!C;return(0,d.jsx)(Nn,{onCloseClicked:x,isOpen:y,children:(0,d.jsxs)(On,{children:[(0,d.jsx)(vn,{titleData:f,refMarker:h}),N&&(0,d.jsx)(A.lI,{height:"feature"}),!N&&(0,d.jsxs)(d.Fragment,{children:[(null===R||void 0===R||null===(c=R.plot)||void 0===c||null===(u=c.plotText)||void 0===u?void 0:u.plainText)&&(0,d.jsx)(Rn,{children:R.plot.plotText.plainText}),T&&T((null===O||void 0===O?void 0:O.data)||{}),(0,d.jsxs)(Ln,{children:[H&&Y&&(0,d.jsx)(g.SecondaryButton,{width:"full-width",preIcon:"play-arrow",href:H,"data-testid":$,children:(0,d.jsx)(W.q,{id:"common_buttons_trailer"})}),(0,d.jsx)(B.f,{titleId:f.id,watchlistMetricsContext:j}),C&&C((null===O||void 0===O?void 0:O.data)||{})]}),Q&&(0,d.jsx)(k,{titleId:f.id,watchOptionsCategories:U,refMarker:(0,i.Z)((0,r.Z)({},h),{prefix:"".concat(h.prefix,"_").concat(E)})})]}),!N&&S&&(0,d.jsx)(v.G,{title:I.formatMessage({id:"error_common_sorryTryAgain",defaultMessage:"Sorry, there was an error. Please try again."}),displayType:"compact",action:(0,d.jsx)(g.TextLink,{onClick:function(n){return L()},text:I.formatMessage({id:"common_buttons_retry",defaultMessage:"Try again"}),"data-testid":G})})]})})},On=u.default.div.withConfig({componentId:"sc-75763ab2-0"})(wn(),f.spacing.l),Ln=u.default.div.withConfig({componentId:"sc-75763ab2-1"})(jn(),f.spacing.xs,f.spacing.s,f.spacing.s,f.mediaQueries.breakpoints.above.m,f.spacing.xs),Rn=u.default.div.withConfig({componentId:"sc-75763ab2-2"})(_n(),(0,f.setPropertyToColorVar)("color","ipt-on-baseAlt-textPrimary-color"),(0,U.S)(4),f.spacing.s,f.spacing.s,f.spacing.s,f.mediaQueries.breakpoints.above.m),Nn=(0,u.default)(g.Prompt).withConfig({componentId:"sc-75763ab2-3"})(kn(),(0,f.setTypographyType)("bodySmall"))},50131:function(n,t,e){e.d(t,{h:function(){return o}});var r=e(15907),i=e(95460),a=/[^a-zA-Z0-9]/g,o=function(n,t,e,o,d){return function(){var l,c,s=null===(l=o.provider)||void 0===l||null===(c=l.refTagFragment)||void 0===c?void 0:c.replace(a,"").substr(0,12),u="watch-".concat(n,"-").concat(s);(0,i.c$)(t,u,e),o.promoted&&d&&(0,r.handleWatchClick)(d,o.promoted)}}},89617:function(n,t,e){e.d(t,{i:function(){return a}});var r=e(95460),i=e(50131),a=function(n,t,e,a){var o,d,l=(null===e||void 0===e?void 0:e.prefix)?"".concat(e.prefix,"_"):"",c=(null===e||void 0===e?void 0:e.suffix)?"_".concat(e.suffix):"",s=(null===e||void 0===e?void 0:e.id)?e.id:"",u=(null===(o=t.provider)||void 0===o?void 0:o.refTagFragment)?"".concat(l).concat(t.provider.refTagFragment).concat(c):"",p=(null===(d=t.provider)||void 0===d?void 0:d.refTagFragment)?"".concat(l).concat(t.provider.refTagFragment):"",g=t.link.startsWith("/"),f=-1!==t.link.indexOf("imdb.com"),v=!g&&!f;return{href:(0,r.jo)(t.link,p),onClick:(0,i.h)(n,u,s,t,a),postIcon:v?"launch":void 0,postIconName:v?"launch":void 0,target:"_blank"}}}}]);