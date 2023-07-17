(()=>{"use strict";class t extends HTMLElement{constructor(){}async waitForData(t){}async fetchData(){if(window?.adsk?.api?.configs?.flexRateDataLoading&&await this.waitForData("flexRateData"),window?.adsk?.api?.configs?.flexRateData)return window.adsk.api.configs.flexRateData;window.adsk.api.configs.flexRateDataLoading=!0;const t=this.config.env,e=this.urls[t];return(await fetch(e)).json()}async fetchString(){if(window?.adsk?.api?.configs?.flexRateStringLoading&&await this.waitForData("flexRateString"),window?.adsk?.api?.configs?.flexRateString)return window.adsk.api.configs.flexRateString;window.adsk.api.configs.flexRateStringLoading=!0;const t=this.cfUrl.replace("{0}",this.getCfLocale(this.config.locale));return(await fetch(t)).json()}getCfLocale(t){const e=t.replace("-","_");let i=this.cfLocales.find((t=>t===e));if(!i){const t=e.split("_")[0];i=this.cfLocales.find((e=>e===t))}return i||"en"}connectedCallback(){this.getConfig(),this.createDOM().then((()=>!0))}disconnectedCallback(){this.innerHTML=""}getConfig(){const t=this.getAttribute("plc")||"ACD",e=this.getAttribute("env")||document.documentElement.getAttribute("env")||"prd",i=this.getAttribute("locale")||document.documentElement.getAttribute("lang")||"en";this.config={plc:t,env:e,locale:i}}async createDOM(){((window.adsk=window.adsk||{}).api=window.adsk.api||{}).configs=window.adsk.api.configs||{};const t=await this.fetchString();window.adsk.api.configs.flexRateString=t,delete window.adsk.api.configs.flexRateStringLoading;const e=t["flex-tokens-per-day"];this.innerHTML="&nbsp; "+e;const i=await this.fetchData();window.adsk.api.configs.flexRateData=i,delete window.adsk.api.configs.flexRateDataLoading;const s=i.chargedPerDay.find((t=>t.plc===this.config.plc)).rate;this.innerHTML=s+" "+e}}window&&window.customElements&&window.customElements.define("flex-burn-rate",t);class e extends HTMLElement{constructor(){super(),this.apiConfigs={prd:{url:"https://personalize.ml.dhx.autodesk.com/v2/features",key:"GcT3DC1gpp8jMxmSPBP8l4C5BmbY3Rzi3NpebSRu"},stg:{url:"https://personalize-stg.ml.dhx.autodesk.com/v2/features",key:"IeR6c9xnMU6hdq7EPH9rY5SyBNsmNJLl7omAzMGE"},qa:{url:"https://personalize-dev.ml.dhx.autodesk.com/v2/features",key:"MNk4aTIlPt5dYqeMq2R0r47tfjvkTVVY3ze38EYR"}}}connectedCallback(){this.getConfig(),this.createDOM().then((()=>!0))}createDOM=async()=>{const t=this.getOxygenId();if(null===t)return;const e=await this.fetchDaysLeft(t);try{const t=e.results.act_nc_trial_ends.find((t=>t.plc===this.config.plc));if(t){const e=this.getDaysLeft(t.end_date);this.innerHTML=e.toString()}else console.error("endDate not found in response"),this.innerHTML="0"}catch(t){console.error("There was an error fetching days left",t),this.innerHTML="0"}};getConfig(){const t=this.getAttribute("plc")||"ACDIST",e=this.getAttribute("env")||document.documentElement.getAttribute("data-env")||"stg";this.config={plc:t,env:e}}getApiData(){return this.apiConfigs[this.config.env]}getOxygenId(){const t=sessionStorage.getItem("profile");if(!t)return null;try{return JSON.parse(t).oxygen_id}catch(t){return console.error("Error parsing the user profile"),null}}getDaysLeft(t){const e=t+"T23:59:59";return Math.max(Math.floor((new Date(e)-new Date)/864e5),0)}async fetchDaysLeft(t){const e=JSON.stringify({user_id:t,mode:["TRIAL"]}),i=this.getApiData(),s=i.url,n=await fetch(s,{method:"POST",mode:"cors",credentials:"same-origin",cache:"default",headers:{"x-api-key":i.key,"Content-type":"application/json"},body:e});return 200===n.status?await n.json():"Error "+n.status}}window&&window.customElements&&window.customElements.define("trial-days-left",e);class i extends HTMLElement{static get DEFAULTS(){return{plc:"ACDIST",host:"https://web-engineering-svc.autodesk.com",locale:"en-US",billingPlan:"1-YEAR",monthTerm:"MONTH",yearTerm:"YEAR",type:i.TYPE.BOTH,promotionOrdering:i.PROMOTION_ORDER.PROMOTION_FIRST,dataSelector:i.DATA_SELECTOR.PRICING,promoTextSelector:i.PROMO_TEXT_SELECTOR.HEADLINE,validSerialNumberCookie:"sn-trade-in_valid"}}static get CLASSES(){return{WRAPPER:"mfe-product-price--wrapper",REGULAR:"mfe-product-price--regular",PROMOTION:"mfe-product-price--promotion",BILLING_PLAN:"mfe-product-price--billing-plan",TEXT:"mfe-product-price--text",SAVING:"mfe-product-price--saving"}}static get TYPE(){return{REGULAR:"regular",PROMOTION:"promotion",BOTH:"both"}}static get DATA_SELECTOR(){return{PRICING:"pricing",PRODUCT_PAGE_URL:"product_page_url",RESELLER_URL:"reseller_url",DIRECT_TO_CART_URL:"direct_to_cart_url",PROMO_TEXT:"promo_text"}}static get PROMO_TEXT_SELECTOR(){return{NAME:{configValue:"name",pdsKey:"promoName"},HEADLINE:{configValue:"headline",pdsKey:"promoHeadline"},SUBHEADLINE:{configValue:"subheadline",pdsKey:"promoSubHeadline"},PROMO_TYPE:{configValue:"promo_type",pdsKey:"promoSubHeadline"}}}static get PROMOTION_ORDER(){return{REGULAR_FIRST:"regular_first",PROMOTION_FIRST:"promotion_first"}}static get PRICING_FIELD(){return{AMOUNT:"amount",AMOUNT_FORMATTED:"amountFormatted",AMOUNT_BEFORE_DISCOUNT:"amountBeforeDiscount",AMOUNT_BEFORE_DISCOUNT_FORMATTED:"amountBeforeDiscountFormatted",DISCOUNT:"discount",DISCOUNT_FORMATTED:"discountFormatted",VAT_AMOUNT:"vatAmount",VAT_AMOUNT_FORMATTED:"vatAmountFormatted",AMOUNT_BEFORE_DISCOUNT_WITH_VAT:"amountBeforeDiscountWithVat",AMOUNT_BEFORE_DISCOUNT_WITH_VAT_FORMATTED:"amountBeforeDiscountWithVatFormatted",AMOUNT_AFTER_DISCOUNT_WITH_VAT:"amountAfterDiscountWithVat",AMOUNT_AFTER_DISCOUNT_WITH_VAT_FORMATTED:"amountAfterDiscountWithVatFormatted"}}static get STATUS(){return{LOADING:"loading",DONE:"done",ERROR:"error"}}static get LOCALE_REGEX(){return"[a-z]{2}[-_][A-Z]{2}$"}static get DEFAULT_CURRENCY(){return{AR:"USD",US:"USD",CA:"CAD",MX:"MXN",CN:"CNY",JP:"JPY",KR:"KRW",TW:"USD",IN:"INR",MY:"MYR",NZ:"NZD",SG:"SGD",TH:"USD",HK:"USD",ZA:"USD",AE:"USD",BR:"BRL",CZ:"CZK",DK:"DKK",CH:"CHF",GB:"GBP",ES:"EUR",DE:"EUR",BE:"EUR",FR:"EUR",HU:"EUR",IT:"EUR",IE:"EUR",NL:"EUR",NO:"NOK",PL:"PLN",PT:"EUR",FI:"EUR",SE:"SEK",RU:"RUB",AU:"AUD",TR:"TRY"}}constructor(){super(),this.componentId=`id-${((t=21)=>{let e="",i=t;for(;i--;)e+="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW"[64*Math.random()|0];return e})()}`}getLocale(){return this.language+"_"+this.country}getStoredCurrency(){const t=window.localStorage.getItem("currencyCode");return t&&0!==t.trim().length?t.split("|")[0].toUpperCase():null}getLocalPdsData(){try{return window.adsk.api.pds.data[this.currency][this.plc.toUpperCase()]}catch(t){}return null}performFetch(){this.setStatus(i.STATUS.LOADING);const t=this.getLocalPdsData();if(t)return this.draw(t),null;const e=`${this.host}/products/${this.plc}?country=${this.country}&language=${this.language}&validSerialNumber=${this.serialNumberPromoCookieExists()}&currency=${this.currency}`;return fetch(e,{method:"GET",mode:"cors",credentials:"same-origin",cache:"default"}).then((t=>200===t.status?t.json():(this.drawError("request failed",t.status),null))).then((t=>{t&&this.draw(t)})).catch((t=>t&&this.drawError(t,500)))}draw(t){try{this.dataSelector===i.DATA_SELECTOR.PRICING?this.drawPrices(t):this.drawTextContent(t),this.setStatus(i.STATUS.DONE)}catch(t){this.drawError(t)}}getBillingPlan(t){return t.purchaseTypes[0].billingPlans.find((t=>t.billingPeriod===this.billingPlan&&t.billingPeriodCount===this.billingPlanCount))}setPricingField(t){const e=this.attributeToKey(this.pricingField),s=this.attributeToKey(this.pricingFieldFallback);this.pricingField=e in t?e:s in t?s:i.PRICING_FIELD.AMOUNT_AFTER_DISCOUNT_WITH_VAT_FORMATTED in t?i.PRICING_FIELD.AMOUNT_AFTER_DISCOUNT_WITH_VAT_FORMATTED:i.PRICING_FIELD.AMOUNT_FORMATTED}drawPrices(t){let e=this.getBillingPlan(t).price,s="";if(this.pricingField){this.setPricingField(e);const t=this.pricingField.toLowerCase().indexOf("discount")>-1,n=0===this.pricingField.toLowerCase().indexOf("discount"),a=this.parentNode.querySelector(`.${i.CLASSES.SAVING}`);if(n&&"0"===e[this.pricingField].replace(/[^0-9\.-]+/g,""))return void a.remove();s=`<span class="${t?this.promotionPriceClasses:this.regularPriceClasses}">${e[this.pricingField]}</span>`}else{let t=e[i.PRICING_FIELD.AMOUNT_BEFORE_DISCOUNT_WITH_VAT_FORMATTED]||e[i.PRICING_FIELD.AMOUNT_BEFORE_DISCOUNT_FORMATTED]||e[i.PRICING_FIELD.AMOUNT_FORMATTED],n=e[i.PRICING_FIELD.AMOUNT_AFTER_DISCOUNT_WITH_VAT_FORMATTED]||e[i.PRICING_FIELD.AMOUNT_FORMATTED],a="",r=`<span class="${parseFloat(e[i.PRICING_FIELD.DISCOUNT])>0?this.promotionPriceClasses:this.regularPriceClasses}">${n}</span>`;this.type===i.TYPE.BOTH?(t!==n&&(a=`<span class="${this.regularPriceClasses} before-discount">${t}</span>`),s=this.promotionOrdering===i.PROMOTION_ORDER.REGULAR_FIRST?`${a}${r}`:`${r}${a}`):s=this.type===i.TYPE.REGULAR?`<span class="${this.regularPriceClasses}">${t}</span>`:r}let n="";if(this.showBillingPlan){let t=this.billingPlanCount>1?`&nbsp;${this.billingPlanCount}`:"";n=`<span class='${this.billingPlanClasses}'>/${t}&nbsp;${this.dictionary[this.billingPlan]}</span>`}this.firstElementChild&&(this.firstElementChild.innerHTML=`${s}${n}`)}drawError(t,e){let s=i.STATUS.ERROR;e&&(s+=`-${e}`),this.setStatus(s),this.innerHTML="-"}attributeToKey(t){return t?t.indexOf("_")<=0?t:t.toLowerCase().replace(/_([a-z])/g,(t=>t[1].toUpperCase())):""}drawTextContent(t){let e=this.getBillingPlan(t),s="";if(this.dataSelector===i.DATA_SELECTOR.PROMO_TEXT){s="No promotion available";const t=this.promoTextSelector.pdsKey;t&&e.promotion&&Object.keys(e.promotion).length&&e.promotion[t]&&(s=e.promotion[t])}else{const n=this.attributeToKey(this.dataSelector);s=this.dataSelector===i.DATA_SELECTOR.DIRECT_TO_CART_URL?e[n]:t[n]}let n=this.firstElementChild;n&&(n.innerHTML=`<span class="${this.textClasses}">${s}</span>`)}setStatus(t){this.setAttribute("status",t)}parentsHaveClass(t,e){return null!=t&&(!(!t.classList||!t.classList.contains(e))||this.parentsHaveClass(t.parentElement,e))}inAemEdit(){if(this.parentsHaveClass(this,"aem-AuthorLayer-Edit")||this.parentsHaveClass(this,"aem-AuthorLayer-initial")){if(this.parentsHaveClass(this,"is-initializing"))return!0;if(this.parentsHaveClass(this,"is-edited")||this.parentsHaveClass(this,"rte-editor")&&this.parentsHaveClass(this," rte-fullscreen"))return this.innerHTML="",!0}return!1}getAdditionalClasses(t){let e=this.getAttribute(t);if(!e)return"";let i=[];return e.split(" ").forEach((t=>{/^[a-z_-][a-z\d_-]*$/i.test(t)&&i.push(t)})),` ${i.join(" ")}`}serialNumberPromoCookieExists(){const t=window.adsk&&window.adsk.api&&window.adsk.api.configs&&window.adsk.api.configs.sessionVariableName?window.adsk.api.configs.sessionVariableName:i.DEFAULTS.validSerialNumberCookie;return!!document.cookie&&document.cookie.split(";").some((e=>e.indexOf(`${t}=true`)>-1))}connectedCallback(){this.inAemEdit()||(this.plc=(this.getAttribute("plc")||i.DEFAULTS.plc).toUpperCase(),this.locale=document.documentElement.lang&&document.documentElement.lang.match(i.LOCALE_REGEX)?document.documentElement.lang:i.DEFAULTS.locale,this.host=this.getAttribute("host")||i.DEFAULTS.host,this.country=(this.getAttribute("country")||this.locale.split("-")[1]).toUpperCase(),this.language=(this.getAttribute("lang")||this.locale.split("-")[0]).toLowerCase(),this.billingPlanCount=(this.getAttribute("billing-plan")||i.DEFAULTS.billingPlan).split("-")[0],this.billingPlan=(this.getAttribute("billing-plan")||i.DEFAULTS.billingPlan).split("-")[1].toUpperCase(),this.showBillingPlan=this.hasAttribute("show-billing-plan"),this.promotionOrdering=(this.getAttribute("promotion-ordering")||i.DEFAULTS.promotionOrdering).toLowerCase(),this.type=(this.getAttribute("type")||i.DEFAULTS.type).toLowerCase(),this.dictionary={},this.dictionary.MONTH=this.getAttribute("month-term")||i.DEFAULTS.monthTerm,this.dictionary.YEAR=this.getAttribute("year-term")||i.DEFAULTS.yearTerm,this.wrapperClasses=`${i.CLASSES.WRAPPER}${this.getAdditionalClasses("wrapper-classes")}`,this.regularPriceClasses=`${i.CLASSES.REGULAR}${this.getAdditionalClasses("regular-price-classes")}`,this.promotionPriceClasses=`${i.CLASSES.PROMOTION}${this.getAdditionalClasses("promotion-price-classes")}`,this.billingPlanClasses=`${i.CLASSES.BILLING_PLAN}${this.getAdditionalClasses("billing-plan-classes")}`,this.textClasses=`${i.CLASSES.TEXT}${this.getAdditionalClasses("text-classes")}`,this.dataSelector=(this.getAttribute("data-selector")||i.DEFAULTS.dataSelector).toLowerCase(),this.promoTextSelector=i.PROMO_TEXT_SELECTOR[(this.getAttribute("promo-text-selector")||i.DEFAULTS.promoTextSelector.configValue).toUpperCase()],this.currency=(this.getAttribute("currency")||this.getStoredCurrency()||i.DEFAULT_CURRENCY[this.country]).toUpperCase(),this.pricingField=this.getAttribute("pricing-field"),this.pricingFieldFallback=this.getAttribute("pricing-field-fallback"),this.innerHTML=`<span class="${this.wrapperClasses}" id="${this.componentId}" data-plc="${this.plc}" data-host="${this.host}"></span>`,document.addEventListener("updateCurrency",(()=>{this.currency=(this.getAttribute("currency")||this.getStoredCurrency()||i.DEFAULT_CURRENCY[this.country]).toUpperCase(),this.performFetch()})),this.performFetch())}disconnectedCallback(){this.innerHTML=""}}window&&window.customElements&&window.customElements.define("product-price",i)})();
//# sourceMappingURL=mfe-product-price.js.map