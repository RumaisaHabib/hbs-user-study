(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[76101],{303998:(e,t,n)=>{n.d(t,{Z:()=>i});var s=n(616550),o=n(463310),a=n(549201);function i(){const e=(0,s.useHistory)(),t=(0,a.HG)();return n=>{t?(0,o.Z)(n,{disableOriginCheck:!0}):e.push(n)}}},308979:(e,t,n)=>{n.d(t,{Z:()=>s});const s=(e,t)=>{const n=new Date;return new Date(1e3*e)<=new Date(n.getFullYear()-(t||18),n.getMonth(),n.getDate())}},550941:(e,t,n)=>{n.d(t,{Di:()=>_,Jl:()=>c,R:()=>u,ZP:()=>f,aU:()=>h,j2:()=>d,pN:()=>g,rL:()=>b,vW:()=>m});var s=n(883119),o=n(621699),a=n(550140),i=n(630089),r=n(739425),l=n(785893);const c=7e3,u="permanent_account_closure",d="account_deletion_email_sent",_="account_deactivated",h="unlink_successful",g="account_switch_to_settings";function p(e,t,n){return(0,l.jsx)(s.xv,{align:n||"center",children:(0,i.nk)(e,{username:(0,l.jsx)(s.xv,{inline:!0,weight:"bold",children:t})})})}function m({i18n:e,message:t,multipleAccounts:n,username:s=""}){switch(t){case u:return e._('Your account has been deleted. We\'re sad to see you go', 'unauthLoginPage.accountDeletedToast.message', 'Confirmation message after a user has successfully deleted their account');case d:return p(n?e._('An email has been sent with final steps to delete your account, {{username}} and its linked accounts', 'accountDeletedEmailToast.message.multipleAccounts', 'Confirmation message after a user has successfully requested multiple accounts deletion'):e._('An email has been sent with final steps to delete your account, {{username}}', 'accountDeletedEmailToast.message.singleAccount', 'Confirmation message after a user has successfully requested a single account deletion'),s);case _:return p(n?e._('The account, {{username}}, and its associated linked accounts have been deactivated', 'unauthLoginPage.deactivatedToast.message.multipleAccounts', 'Confirmation message after a user has successfully deactivated multiple accounts'):e._('The account, {{username}}, has been deactivated', 'unauthLoginPage.deactivatedToast.message.singleAccount', 'Confirmation message after a user has successfully deactivated a single account'),s);case h:return p(e._('Success! You\'ve unlinked this business account. You are currently in {{username}}.', 'authHomeFeedPage.unlinkAccountToast.message', 'Confirmation message after a user has successfully unlinked business account'),s,"start");case g:return p(e._('You\'ve switched into and are currently in the account {{username}}', 'accountSettings.switchAccountToAccountChanges', 'Confirmation message after a user has successfully switched accounts and got redirected to Account Changes'),s,"start");default:return""}}function f(e,t,n=""){if(!t||!t.search)return"";const{message:s}=(0,r.mB)(t.search),o=(0,r.mB)(t.search).username||n;return m({i18n:e,message:s,multipleAccounts:"true"===(0,r.mB)(t.search).multiple_accounts,username:o})}function b({showOneToast:e,i18n:t,location:n,history:s,username:i,fullName:u,avatarUrl:d}){if(!n||!n.search)return;const _=f(t,n,i||""),{message:p}=(0,r.mB)(n.search),m=p===g||p===h;_&&(e((({hideToast:e})=>(0,l.jsx)(a.ZP,{duration:c,onHide:e,text:_,thumbnail:m?{avatar:(0,l.jsx)(o.Z,{name:u||"",src:d||"",size:"md"})}:void 0}))),s.replace(n.hash?`${n.pathname}${n.hash}`:n.pathname))}},353226:(e,t,n)=>{n.d(t,{Z:()=>o});var s=n(785893);function o({size:e}){return(0,s.jsx)("svg",{height:e,viewBox:"0 0 512 512",width:e,xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsxs)("g",{fill:"none",fillRule:"evenodd",children:[(0,s.jsx)("path",{d:"M482.56 261.36c0-16.73-1.5-32.83-4.29-48.27H256v91.29h127.01c-5.47 29.5-22.1 54.49-47.09 71.23v59.21h76.27c44.63-41.09 70.37-101.59 70.37-173.46z",fill:"#4285f4"}),(0,s.jsx)("path",{d:"M256 492c63.72 0 117.14-21.13 156.19-57.18l-76.27-59.21c-21.13 14.16-48.17 22.53-79.92 22.53-61.47 0-113.49-41.51-132.05-97.3H45.1v61.15c38.83 77.13 118.64 130.01 210.9 130.01z",fill:"#34a853"}),(0,s.jsx)("path",{d:"M123.95 300.84c-4.72-14.16-7.4-29.29-7.4-44.84s2.68-30.68 7.4-44.84V150.01H45.1C29.12 181.87 20 217.92 20 256c0 38.08 9.12 74.13 25.1 105.99l78.85-61.15z",fill:"#fbbc05"}),(0,s.jsx)("path",{d:"M256 113.86c34.65 0 65.76 11.91 90.22 35.29l67.69-67.69C373.03 43.39 319.61 20 256 20c-92.25 0-172.07 52.89-210.9 130.01l78.85 61.15c18.56-55.78 70.59-97.3 132.05-97.3z",fill:"#ea4335"}),(0,s.jsx)("path",{d:"M20 20h472v472H20V20z"})]})})}},539636:(e,t,n)=>{n.d(t,{Z:()=>s});const s=e=>{return JSON.parse(decodeURIComponent(atob((t=e.split(".")[1],(t||"").replace(/-/g,"+").replace(/_/g,"/"))).split("").map((e=>"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2))).join("")));var t}},212380:(e,t,n)=>{n.d(t,{Z:()=>i});var s=n(883119),o=n(536042),a=n(785893);const i=({isInModal:e})=>{const t=(0,o.ZP)();return(0,a.jsx)(s.xu,{alignItems:"center",display:"flex",height:"100%",justifyContent:"center",left:!0,position:e?"absolute":"fixed",top:!0,width:"100%",zIndex:new s.Ry(1),dangerouslySetInlineStyle:{__style:{backgroundColor:"rgba(255, 255, 255, .5)"}},children:(0,a.jsx)(s.$j,{accessibilityLabel:t._('Loading', 'Full page loading state', 'Full page loading state'),show:!0})})}},259987:(e,t,n)=>{n.d(t,{Z:()=>a});var s=n(365661),o=n(98736);async function a(e){const t=await(0,s.Kw)(),n=t?{user_ids:Object.keys(t)}:{};(0,o.tj)(`mweb_multiple_accounts_${e}`,n)}},447755:(e,t,n)=>{n.d(t,{eN:()=>l,_:()=>u,kB:()=>c});var s=n(40660),o=n(837792),a=n(739425),i=n(616550);const r=["/resource/:name/:method/","/resource/commerce/:name/:method/","/:username/pins/follow/","/email/remove/","/about/trademark/form/:claim_type/","/about/copyright/dmca-pin/web-result/:id/","/about/copyright/dmca-pin/pin/:id/","/about/copyright/dmca-pin/","/about/koplg/","/about/:lawName/","/about/radtc/","/suspension-appeal/netzdg/","/website/confirm/","/oauth/","/app-factory-oauth/","/settings/extension/uninstall/","/offsite/","/amp/(.*)"],l=e=>e&&(0,a.Qg)(e)&&o.lf!==e?(0,a.Qc)(e).relative:"/",c=e=>{const t=(0,a.Jx)(e);return(e=>{const t=new URL(e,window.location.origin);return r.some((e=>!!(0,i.matchPath)(t.pathname,{path:e,exact:!0})))})(t)||(0,a.OM)(t)===a.vx.TRUSTED_DIFFERENT_ORIGIN},u=({forceFullPageNavigation:e,history:t,next:n,noLocationReplace:o})=>{const i=(0,a.Jx)(n);c(n)||!t||e?(e&&s.Z.increment("webapp.duplo.navigateOnLogin.forceFullPageNavigation",1),window.location.assign(i)):o?t.push(l(i)):t.replace(l(i))}},662751:(e,t,n)=>{n.d(t,{Z:()=>b});var s=n(667294),o=n(883119),a=n(539636),i=n(684113),r=n(324159),l=n(245410),c=n(282802),u=n(98736),d=n(536042),_=n(353226),h=n(219097),g=n(960251),p=n(785893);function m(){const e=(0,d.ZP)(),[t,n]=(0,s.useState)();return(0,h.Z)()?null:(0,p.jsxs)(o.xu,{position:"relative",children:[(0,p.jsx)(o.iP,{onTap:()=>n(!0),children:(0,p.jsxs)(o.xu,{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",height:40,rounding:"pill",color:"secondary",children:[(0,p.jsx)(o.xu,{height:24,width:24,marginTop:1,children:(0,p.jsx)(_.Z,{size:20})}),(0,p.jsx)(o.xu,{marginStart:2,children:(0,p.jsx)(o.xv,{weight:"bold",children:e._('Connect with Google', 'googleConnectButtonWithDisabledSDK.buttonText', 'Connect with Google button text')})})]})}),t&&(0,p.jsx)(g.Z,{type:"google",onDismiss:()=>n(!1)})]})}function f({onGoogleConnectSuccess:e,onTouch:t}){const{locale:n}=(0,c.B)(),{checkExperiment:d}=(0,l.F)(),_=d("mweb_google_button_locale_fix").anyEnabled,h=(0,s.useRef)(null),g=(0,r.M)(),m=(0,s.useRef)(e);return(0,s.useEffect)((()=>{m.current=e}),[e]),(0,s.useEffect)((()=>{const e=({credential:e,select_by:t})=>{(0,u.My)(`unauth_mweb.gsi_button.select_by.${t}`),(0,u.NC)("press_google_connect_button");const n=(0,a.Z)(e);m.current({google_open_id_token:e,autologin:!1},{type:"google",google_open_id_token:e,first_name:n.given_name,last_name:n.family_name,image_url:n.picture})};return(async()=>{await(null==g?void 0:g.ensureInit("button",e)),(0,i.ru)({buttonRef:h,isDesktop:!1,locale:_?n:void 0})})(),()=>{null==g||g.removeButtonCallback(e)}}),[g,_,n]),(0,p.jsx)(o.xu,{position:"relative",children:(0,p.jsx)(o.iP,{onTap:()=>{null==t||t(),(0,u.My)("gsi_personalized_button.tap"),(0,u.EX)({event:"start",provider:"google"})},children:(0,p.jsx)(o.xu,{"aria-label":"GOOGLE_SIGNIN_BUTTON",height:44,children:(0,p.jsx)(o.xu,{ref:h,position:"absolute",width:"100%"})})})})}function b(e){const{checkExperiment:t}=(0,l.F)(),{anyEnabled:n}=t("mweb_google_disabled");return n?(0,p.jsx)(m,{}):(0,p.jsx)(f,{onGoogleConnectSuccess:e.onGoogleConnectSuccess,onTouch:e.onTouch})}},241245:(e,t,n)=>{n.d(t,{Z:()=>p});var s=n(667294),o=n(883119),a=n(798198),i=n(874261);const r={yellow:"#FAB904",orange:"#FF6400",green:"#0FA573",blue:"#0074e8",purple:"#B469EB"},l="DelightfulBubbles__",c=[`${l}fadeIn {\n  to {\n    opacity: 1;\n  }\n}\n`,`${l}growShrink {\n  0% {\n    transform: scale(0);\n  }\n  50% {\n    transform: scale(1);\n  }\n  100% {\n    transform: scale(0);\n  }\n}\n`,`${l}swirl {\n  0% {\n    transform: rotate(0deg) translateX(-50%);\n  }\n  100% {\n    transform: rotate(-360deg) translateX(-50%);\n  }\n}\n`,...Object.keys(r).map((e=>{const t=((e,t)=>{const n=e.length,s=e.indexOf(t)+1>=n?0:e.indexOf(t)+1;return e[s]})(Object.keys(r),e);return`${l}colorChange_${e} {\n      0% {\n        background-color: ${r[e]};\n      }\n      50% {\n        background-color: ${r[t]};\n      }\n    }\n    `}))],u=(0,a.Ll)(c);var d=n(785893);function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const h=e=>{const{delay:t,diameter:n,height:s,initialColor:a,width:i,xOffset:c,yOffset:u}=e,_=((e,t,n,s,o,a,i,c)=>({bubblePositionStyles:{position:"absolute",marginLeft:a/2-o+"px",marginTop:n/2-o+"px",left:`${i}px`,top:`${c}px`},bubbleSwirlStyles:{animation:`${l}swirl 6s ease-in-out ${e}s infinite forwards`,WebkitAnimation:`${l}swirl 6s ease-in-out ${e}s infinite forwards`},bubbleGrowShrinkStyles:{transform:"scale(0)",WebkitTransform:"scale(0)",animation:`${l}growShrink 6s ease-in-out ${e}s infinite alternate`,WebkitAnimation:`${l}growShrink 6s ease-in-out ${e}s infinite alternate`},bubbleShapeStyles:{height:`${t}px`,width:`${t}px`,borderRadius:"50%",backgroundColor:r[s],opacity:0,animation:`${l}colorChange_${s} 12s steps(1, start) ${e}s infinite forwards,\n      ${l}fadeIn 3s linear ${e}s 1 forwards`,WebkitAnimation:`${l}colorChange_${s} 12s steps(1, start) ${e}s infinite forwards,\n      ${l}fadeIn 3s linear ${e}s 1 forwards`}}))(t,n,s,a,Math.floor(n/2),i,c,u);return(0,d.jsx)(o.xu,{dangerouslySetInlineStyle:{__style:_.bubblePositionStyles},children:(0,d.jsx)(o.xu,{dangerouslySetInlineStyle:{__style:_.bubbleSwirlStyles},children:(0,d.jsx)(o.xu,{dangerouslySetInlineStyle:{__style:_.bubbleGrowShrinkStyles},children:(0,d.jsx)(o.xu,{dangerouslySetInlineStyle:{__style:_.bubbleShapeStyles}})})})})};class g extends s.Component{constructor(...e){super(...e),_(this,"state",{isInitialized:!1})}componentDidMount(){window.requestAnimationFrame((()=>{this.setState({isInitialized:!0})}))}shouldComponentUpdate(e,t){return!e.numBubbles===this.props.numBubbles||!t.isInitialized===this.state.isInitialized}getSize(){const{width:e,height:t}=this.props;return void 0!==e&&void 0!==t?{width:e,height:t}:this.containerElement?{height:this.containerElement.offsetHeight,width:this.containerElement.offsetWidth}:{height:void 0,width:void 0}}createBubbles(e,t){const{delayFactor:n,delayOffset:s,numBubbles:o,xRadiusAdjustment:i,yRadiusAdjustment:l}=this.props,c=e+2*l,u=t+2*i,_=[],g=Object.keys(r);for(let r=0;r<o;r+=1){const o=16+(0,a.XF)(-4,4),i=g[r%g.length],{x:l,y:p}=(0,a.CC)(c,u);_.push((0,d.jsx)(h,{delay:r*n+s,diameter:o,initialColor:i,xOffset:l,yOffset:p,height:e,width:t},r))}return _}render(){const{isDesktop:e}=this.props,{height:t,width:n}=this.getSize();return(0,d.jsxs)(o.xu,{height:t,width:n,position:"relative",children:[(0,d.jsx)(i.Z,{unsafeCSS:u}),(0,d.jsxs)(o.xu,{position:e?void 0:"absolute",ref:e=>this.containerElement=e,children:[this.state.isInitialized&&this.createBubbles(t||0,n||0),(0,d.jsx)(o.xu,{position:"relative",children:this.props.children})]})]})}}_(g,"defaultProps",{numBubbles:10,xRadiusAdjustment:0,yRadiusAdjustment:0,delayFactor:1,delayOffset:0});const p=g},208833:(e,t,n)=>{n.d(t,{R:()=>h,Z:()=>p});var s=n(667294),o=n(883119),a=n(293926),i=n(777610),r=n(536042),l=n(282802),c=n(212380),u=n(509342),d=n(241245),_=n(785893);const h=e=>new Set([...u.EU,...u.rT,...u.IO]).has(e),g=3e3;function p({isReducedHeader:e,progressBarAnimationDuration:t}){const n=(0,r.ZP)(),{country:u}=(0,l.B)(),p=h(u);return(0,_.jsx)(s.Fragment,{children:p?(0,_.jsx)(i.Z,{log:{view_type:10,view_parameter:259},children:(0,_.jsxs)(o.xu,{position:"fixed",top:!0,left:!0,right:!0,bottom:!0,width:"100%",color:"default",children:[(0,_.jsx)(a.Z,{color:"dark",duration:t||g,finalProgress:95}),(0,_.jsxs)(o.kC,{alignItems:"stretch",justifyContent:"start",direction:"column",height:"100%",children:[(0,_.jsxs)(o.xu,{margin:10,children:[(0,_.jsx)(o.X6,{overflow:"normal",size:e?"500":"600",children:n._('Your account is being created!', 'account created heading', 'account created heading')}),(0,_.jsx)(o.xv,{overflow:"normal",children:n._('You can now save ideas, get personalized recommendations, and more', 'loading state description while waiting for any sign up registration to complete', 'loading state description while waiting for any sign up registration to complete')})]}),(0,_.jsx)(o.kC,{alignItems:"center",flex:"grow",justifyContent:"center",children:(0,_.jsx)(d.Z,{delayOffset:-5,isDesktop:!1,xRadiusAdjustment:40,yRadiusAdjustment:40,children:(0,_.jsx)(o.xu,{alignItems:"center",color:"lightWash",direction:"column",display:"flex",height:120,justifyContent:"end",overflow:"hidden",rounding:"circle",width:120,children:(0,_.jsx)(o.JO,{accessibilityLabel:n._('Loading', 'Loading state for any sign up registration', 'Loading state for any sign up registration'),color:"subtle",icon:"person",size:"90"})})})})]})]})}):(0,_.jsx)(c.Z,{})})}},791229:(e,t,n)=>{n.d(t,{f:()=>S,l:()=>E});var s=n(667294),o=n(702664),a=n(441143),i=n.n(a),r=n(690108),l=n(563962),c=n(457628),u=n(791045),d=n(420434),_=n(256558),h=n(550941),g=n(950861),p=n(245410),m=n(617285),f=n(499441),b=n(282802),y=n(336436),x=n(611756),v=n(98736),w=n(284814),A=n(509342),j=n(259987),k=n(447755),C=n(890415),P=n(495590);const z=e=>({type:"AUTHENTICATE_USER",payload:{user:e}}),S=()=>{const e=(0,l.Z)(),t=(0,p.F)(),n=(0,o.useDispatch)(),{country:a,countryFromHostName:S,countryFromIp:E,regionFromIp:T,userAgent:{isTablet:D,isMobile:Z}}=(0,b.B)(),I=(0,m.Z)(),R=(0,w.Z)();return(0,s.useCallback)((async(s,o,l="/",p={isAutologin:!1,isSwitchAccount:!1,noLocationReplace:!1,recaptchaV3Token:"default",noImmediateRedirect:!1,useAlternativeResourceCall:!1,trigger:"other",accountUnlinked:!1},m)=>{I();const b=!D&&!Z,{isAutologin:w,isSwitchAccount:F,noLocationReplace:O,recaptchaV3Token:$,noImmediateRedirect:L,useAlternativeResourceCall:B,trigger:N,accountUnlinked:H}=p;let M={get_user:!0,...s,app_type_from_client:6,recaptchaV3Token:$};const U=(0,C.t_)();U&&(M={...M,visited_pages_before_login:U});const G=(0,C.OJ)();G&&(M={...M,referrer:G});let Y=r.Z.create("UserSessionResource",M).callCreate();if(B&&s.username_or_email&&s.password){const e=new FormData;e.append("username",s.username_or_email),e.append("password",s.password);const t={method:"POST",body:e,credentials:"include",headers:{Accept:"application/json, text/javascript, */*","X-CSRFToken":(0,d.getCsrfToken)()||"","X-Requested-With":"XMLHttpRequest"}};Y=fetch("/resource/UserSessionResource/create/",t).then((e=>{if(200!==e.status)throw new Error(e.statusText);return e.json()})).catch((e=>Promise.reject(e)))}try{w?(0,v.dy)({event:"login_api_call_start",provider:s.google_open_id_token?"google":"facebook"}):(0,v.EX)({event:"login_api_call_start",provider:(0,g.nY)(s)}),e({...m,event_type:7534}),R({action:w?"autologin":"login",event:"attempt",type:(0,g.lp)(s),trigger:N});const r=await Y;w?(0,v.dy)({event:"login_api_call_success",provider:s.google_open_id_token?"google":"facebook"}):(0,v.EX)({event:"login_api_call_success",provider:(0,g.nY)(s)}),i()(r.resource_response,"Login response is invalid"),n(z(r.resource_response.data.user));const d=r.client_context;d&&(d.placed_experiences&&n((0,_.OD)(d.placed_experiences)),t.active=d.active_experiments,t.triggerable=d.triggerable_experiments),(0,j.Z)("authentication.login_success"),g.ZP.storeLoginCredentialsToBrowser(s),e({...m,event_type:7536}),R({action:w?"autologin":"login",event:"success",type:(0,g.lp)(s),trigger:N}),c.zN(u.e7.name),c.zN(u.x3.name),(0,x.Nh)(A.AA,1),"/"!==l&&(0,P.E)(!0),F?(0,y.Dm)().then((()=>{var e,t;const n=`/${(null===(e=r.resource_response)||void 0===e||null===(t=e.data)||void 0===t?void 0:t.user.username)||""}`+(H?`?message=${h.aU}`:"");window.location.href=n})):w&&!b||L||(0,k._)({forceFullPageNavigation:b,history:o,next:l,noLocationReplace:O}),(0,f.ko)({country:a,countryFromHostName:S,countryFromIp:E,regionFromIp:T,deviceType:"Mobile",eventCategory:"Logins"})}catch(X){if(w?(0,v.dy)({event:"login_api_call_failure",provider:s.google_open_id_token?"google":"facebook"}):(0,v.EX)({event:"login_api_call_failure",provider:(0,g.nY)(s)}),1201!==X.api_error_code||w||b)throw e({...m,event_type:7535}),R({action:w?"autologin":"login",event:"fail",type:(0,g.lp)(s),trigger:N}),F&&(0,j.Z)("authentication.login_error"),X;if(o){const e={creds:s,next:l,phoneNumber:X.data.phone_number_end};o.push({pathname:"/login/mfa/",state:e})}}}),[n,a,S,E,I,t,Z,D,e,T,R])},E=()=>{const e=(0,p.F)(),t=(0,o.useDispatch)(),n=(0,m.Z)();return({client_context:s,resource_response:o})=>{const a=null==o?void 0:o.data;a&&(n(),t(z(a.user))),s&&(t((0,_.OD)(s.placed_experiences)),e.active=s.active_experiments,e.triggerable=s.triggerable_experiments)}}},697812:(e,t,n)=>{n.d(t,{m:()=>S});var s=n(702664),o=n(441143),a=n.n(o),i=n(40660),r=n(690108),l=n(818917),c=n(563962),u=n(457628),d=n(791045),_=n(256558),h=n(315219),g=n(804484),p=n(245410),m=n(617285),f=n(499441),b=n(282802),y=n(336436),x=n(173085),v=n(98736),w=n(284814),A=n(259987),j=n(890415),k=n(611756),C=n(509342);function P(){return function(e){const t={};return e.forEach((e=>{const n=JSON.parse((0,k.qn)(e));n&&(t[e]=n)})),JSON.stringify(t)}([C.E9])}var z=n(208833);const S=()=>{const e=(0,p.F)(),t=(0,s.useDispatch)(),{country:n,countryFromHostName:o,countryFromIp:k,regionFromIp:C,isAuthenticated:S}=(0,b.B)(),E=(0,m.Z)(),T=(0,c.Z)(),D=(0,w.Z)();return(s,{signupAttemptContextEvent:c})=>{const p=(0,g.yV)(s);T({...c,event_type:7537}),D({action:"signup",event:"attempt",type:p}),E();let m=0;const b=(0,z.R)(n),w=new Promise((e=>{b?setTimeout((()=>{e()}),3e3):e()}));return new Promise(((b,z)=>{const E=()=>{var Z;const I=S,R=(0,j.t_)(),F=(0,j.OJ)(),O={...s,user_behavior_data:P(),visited_pages:R};F&&(O.referrer=F),i.Z.increment("webapp.debug_signup_type.redux_registration",1,{CHECK_TYPE:null!==(Z=(0,g.Eh)(O,"CHECK_TYPE"))&&void 0!==Z?Z:"none",CHECK_EXISTS:(0,g.Eh)(O,"DEPRECATED_CHECK_EXISTS"),CHECK_TRUTHY:(0,g.Eh)(O,"DEPRECATED_CHECK_TRUTHY")}),r.Z.create("UserRegisterResource",{...O,get_user:!0}).callCreate().then((i=>w.then((()=>{(0,x.L_)("d_pif_invite");const r=i.client_context;a()(i.resource_response,"Register response is invalid"),t({type:"REGISTER_USER",payload:{user:i.resource_response.data.user}}),r&&(r.placed_experiences&&t((0,_.OD)(r.placed_experiences)),e.active=r.active_experiments,e.triggerable=r.triggerable_experiments),I&&(0,A.Z)("registration.signup_success");const u=s.email||s.username||null,d=s.password||null,{credentials:h}=navigator;if(h&&u&&d)try{const e=new window.PasswordCredential({id:u,password:d});(0,v.My)("unauth_mweb.navigatorCredentials.store.attempt"),h.store(e).then((()=>{(0,v.My)("unauth_mweb.navigatorCredentials.store.success")}))}catch(g){(0,v.My)("unauth_mweb.navigatorCredentials.store.error")}T({...c,event_type:7487}),D({action:"signup",event:"success",type:p}),(0,l.Z)(),I&&(0,y.Dm)(),(0,f.ko)({country:n,countryFromHostName:o,countryFromIp:k,regionFromIp:C,deviceType:"Mobile",eventCategory:"NewUsers"}),b()})))).catch((e=>{(null==e?void 0:e.api_error_code)===h.tz&&((0,v.My)("multi_step_set_age_restrict_cookie"),u.t8(d.It,"1",(0,u.kZ)(d.It))),m<3&&[h.dO,h.cZ].includes(null==e?void 0:e.api_error_code)?(m+=1,E()):(T({...c,event_type:7488}),D({action:"signup",event:"fail",type:p}),I&&(0,A.Z)("registration.signup_error"),z(e))}))};E()}))}}},960251:(e,t,n)=>{n.d(t,{Z:()=>r});var s=n(883119),o=n(88622),a=n(536042),i=n(785893);function r({type:e,onDismiss:t}){const n=(0,a.ZP)(),r="facebook"===e?n._('Oops! Facebook isn\'t available', 'socialAuthDisabled.facebook.title', 'Title for the modal shown when Facebook services are not working'):n._('Oops! Google isn\'t available', 'socialAuthDisabled.google.title', 'Title for the modal shown when Google services are not working'),l="facebook"===e?n._('Looks like Facebook isn\'t available right now.\n\nGive another option a try or refresh the page and try again later.', 'socialAuthDisabled.facebook.description', 'Description for the modal shown when Facebook services are not working'):n._('Looks like Google isn\'t available right now.\n\nGive another option a try or refresh the page and try again later.', 'socialAuthDisabled.google.description', 'Description for the modal shown when Google services are not working');return(0,i.jsx)(o.ZP,{accessibilityModalLabel:"",mobileHideCloseIcon:!0,isOpen:!0,onDismiss:t,type:"social_auth_disabled_modal",children:(0,i.jsxs)(s.xu,{padding:5,children:[(0,i.jsx)(s.xu,{marginBottom:3,children:(0,i.jsx)(s.X6,{size:"500",accessibilityLevel:1,children:r})}),(0,i.jsx)(s.xu,{marginBottom:3,children:(0,i.jsx)(s.xv,{children:l})}),(0,i.jsx)(s.kC,{alignItems:"stretch",justifyContent:"start",direction:"column",children:(0,i.jsx)(s.xu,{paddingY:1,children:(0,i.jsx)(s.zx,{accessibilityLabel:n._('OK', 'socialAuthDisabled.okButton', 'Button that closes modal shown when Facebook or Google services are not working'),size:"lg",color:"red",text:n._('OK', 'socialAuthDisabled.okButton', 'Button that closes modal shown when Facebook or Google services are not working'),onClick:t})})})]})})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/76101-10a0d53092b5ec8d.mjs.map