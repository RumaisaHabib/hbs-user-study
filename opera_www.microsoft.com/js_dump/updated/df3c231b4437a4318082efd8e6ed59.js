/*

 Adobe Visitor API for JavaScript version: 4.4.0
 Copyright 2019 Adobe, Inc. All Rights Reserved
 More info available at https://marketing.adobe.com/resources/help/en_US/mcvid/
*/
'use strict';var e=function(){}(),visitor=Visitor.getInstance("EA76ADE95776D2EC7F000101@AdobeOrg",{idSyncContainerID:0,cookieLifetime:3419E4,cookieDomain:"microsoft.com",trackingServer:"Msftenterprise.sc.omtrdc.net",trackingServerSecure:"Msftenterprise.sc.omtrdc.net"});
function getCookie(N){}var cookie1=getCookie("ANON"),A=cookie1?cookie1.split("\x3d")[1].split("\x26")[0]:"",cookie2=getCookie("MC1"),GUID=cookie2?cookie2.split("\x3d")[1].split("\x26")[0]:"",cookie3=getCookie("MSFPC"),ID=cookie3?cookie3.split("\x3d")[1].split("\x26")[0]:"",customerIDs={},hasIDs=!1;
""!=A&&(customerIDs.ANON={id:A,authState:Visitor.AuthState.AUTHENTICATED},hasIDs=!0);""!=ID&&(customerIDs.MSFPC={id:ID,authState:Visitor.AuthState.LOGGED_OUT},hasIDs=!0);""!=GUID&&(customerIDs.MC1={id:GUID,authState:Visitor.AuthState.LOGGED_OUT},hasIDs=!0);hasIDs&&visitor.setCustomerIDs(customerIDs);