// ***************************************
// config file for at.js lib
//****************************************************************************
// SET TARGET PROPERTY HERE:
const at_property = window.cas.exp.target.propertyToken; // Workspace Name
// ***************************************************************************
! function () {}();


// Override mbox cookie expiration time from 13 months to 30 days if user does not provide consent for personalization.
function overrideCookieExpTime() {}


// A4T integration for client side experimentation using 1DS
document.addEventListener("at-request-succeeded", function (e) {});

// Data Providers Example (uncomment and complete setup for data ingestion from 3rd party sources).
// Can be used to augment the data payload sent to the Target edge network including dataLayer and
// on-page data. If not wanted, delete all below commented code from your config file.


 // UNCOMMENT IF USING DATA PROVIDERS
 /*

      // 3rd Party Data via API
        var demandbaseDataProvider = {
          name: "demandbase",
          version: "1.0.0",
          timeout: 1000,
          provider: function(callback) {
            $.ajax({
                type: "GET",
                  url: "https://api.company-target.com/api/v2/ip.json?key=70aff8023e038d56ea636f68e5c5922b",
                dataType: "json",
                success: function(response) {
                  console.log("DemandBase Response: ", response);
                  callback(null, {
                    'profile.db_aud': response.audience,
                    'profile.db_audseg':response.audience_segment
                  });
                },
                error: function(err) {
                  console.log("Error", err);
                  callback(err);
                }
              });

            }
          };

        // 1st Party Data via dataLayer Object:
         var datalayerProvider = {
           name: "dataLayer",
           version: "1.0.0",
           timeout: 1000,
           provider: function(callback) {
             function getDataLayer () {
               if (typeof digitalData != "undefined" || typeof digitalData != null) {
                 callback(null, {
                   'profile.loyaltyStatus': digitalData.customer.loyaltyStatus, // profile. prefixes append attributes to a user profile
                   'profile.purchases': digitalData.customer.purchases,
                   'profile.valueTier': digitalData.customer.valueTier,
                   'profile.persona': digitalData.customer.persona,
                   'pageType': digitalData.page.type, // un-prefixed keys are just mbox parameters meant for non-user based data
                   'productType':digitalData.page.product
                 });
               } else if (i < 100) {
                 setTimeout(function(){
                   getDataLayer();
                   i++;
                 },100)
               }
             }
             getDataLayer();
           }
         };
          window.targetGlobalSettings = {
            deviceIdLifetime: targetGlobalSettings.deviceIdLifetime,
            dataProviders: [
              demandbaseDataProvider,
              datalayerProvider
            ]
          };

 */
 // UNCOMMENT IF USING DATA PROVIDERS
// No custom JavaScript
/**
 * @license
 * at.js 2.4.0 | (c) Adobe Systems Incorporated | All rights reserved
 * zepto.js | (c) 2010-2016 Thomas Fuchs | zeptojs.com/license
*/
window.adobe=window.adobe||{},window.adobe.target=function(){}(),window.adobe.target.init(window,document,{clientCode:"microsoftmscompoc",imsOrgId:"EA76ADE95776D2EC7F000101@AdobeOrg",serverDomain:"target.microsoft.com",timeout:Number("15000"),globalMboxName:"target-global-mbox",version:"2.4.0",defaultContentHiddenStyle:"visibility: hidden;",defaultContentVisibleStyle:"visibility: visible;",bodyHiddenStyle:"body {opacity: 0 !important}",bodyHidingEnabled:!1,deviceIdLifetime:34186698000,sessionIdLifetime:186e4,selectorsPollingTimeout:5e3,visitorApiTimeout:2e3,overrideMboxEdgeServer:!1,overrideMboxEdgeServerTimeout:186e4,optoutEnabled:!1,optinEnabled:!1,secureOnly:!1,supplementalDataIdParamTimeout:30,authoringScriptUrl:"//cdn.tt.omtrdc.net/cdn/target-vec.js",urlSizeLimit:2048,endpoint:"/rest/v1/delivery",pageLoadEnabled:"true"===String("true"),viewsEnabled:!0,analyticsLogging:"client_side",serverState:{}});
//No custom JavaScript
