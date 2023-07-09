var environment = window.location.href;
flag = false;

if (environment.indexOf("localhost") != -1  || environment.indexOf("dit") != -1  || environment.indexOf("uat") != -1 || environment.indexOf("sit") != -1 || environment.indexOf("webqa") != -1) {
    var tswebClientId = "6e919cb7-cdeb-4035-87e8-e55bd4c49c05";
    var tswebEndPoint = "https://sit.api.citi.com/gcgapi/dev1/ts-web";
    var tswebAppId = "169928-citibankonline-websdk-nam";
} else {
    var tswebClientId = "4a51fb19-a1a7-4247-bc7e-18aa56dd1c40";
    var tswebEndPoint = "https://api.citi.com/gcgapi/prod/ts-web";
    var tswebAppId = "169928-citibankonline-websdk-nam";
}

if(sessionStorage.getItem('qrUsername')){
    sessionStorage.removeItem('qrUsername');
}
if(sessionStorage.getItem('qrPassword')){
    sessionStorage.removeItem('qrPassword');
}
let mSDK = com.ts.mobile.sdk;
var qrCode = false;
let total_time = 45000;
function move(){
    var elemTR = document.getElementById("quadrant_two");
    var elemBR = document.getElementById("quadrant_four");
    var elemBL = document.getElementById("quadrant_three");
    var elemTL = document.getElementById("quadrant_one");

    //to help setting checkpoints for making sure that certain browsers are completing the animation in time
    var startTime = new Date().getTime();

    //initial settings for accounting for tab switching
    var prevState = "visible";
    var timeElapsed = 0;

    //initial settings for the animation of the topRightQuadrant
    elemTR.style.height = 8 + "px";
    elemTR.style.width = 0 + "px";
    var heightTR = 8;
    var widthTR = 0;

    //initial settings for the animation of the bottomRightQuadrant
    elemBR.style.left = 128 + "px";
    elemBR.style.width = 8 + "px";
    elemBR.style.height = "0";
    var heightBR = 0;
    var widthBR = 8;
    var leftBR = 128;

    //initial settings for the animation of the bottomLeftQuadrant
    elemBL.style.left = 136 + "px";
    elemBL.style.top = 128 + "px";
    elemBL.style.width = "0";
    elemBL.style.height = 8 + "px";
    var heightBL = 8;
    var widthBL = 0;
    var leftBL = 136;
    var topBL = 128;

    //initial settings for the animation of the topLeftQuadrant
    elemTL.style.top = 136 + "px";
    elemTL.style.width = 8 + "px";
    elemTL.style.height = "0";
    var heightTL = 0;
    var widthTL = 8;
    var topTL = 136;

    //function for calculating amount of border accumulated while away
    //initBorder is the amount of border that had accumulated prior to tab switching
    //time is the amount of time that was clicked away
    //init_quadrant is the starting quadrant that the snake was in when the tab was first switched away from the modal
    function accumulatedArea(initBorder, time, init_quadrant){
      var change_in_border = (((4*136)+4*(136-8))*time*1000)/total_time;
      var borderAccumulated = initBorder+ change_in_border;
      const updatedLocation = new Map([
        ["updated_quadrant", 0],
        ["updated_height", 0],
        ["updated_width", 0]
      ]);
      //situation where so much time had passed that a new iteration has started:
      if(borderAccumulated >= 8*136){
        num_quad_adv = ~~((borderAccumulated-8*136)/(136+136));
        updatedLocation.set("updated_quadrant", num_quad_adv+1);
        new_height_and_width = (borderAccumulated-(8*136))-(num_quad_adv*2*136);
        if(num_quad_adv+1 == 1 || num_quad_adv+1 == 3){
          if(new_height_and_width > 136){
            clearInterval(id);
            if(qrStatus == "new"){
              updatedLocation.set("updated_width", 136);
              updatedLocation.set("updated_height", new_height_and_width-136);
            }
            else{
              updatedLocation.set("updated_quadrant", 4);
              updatedLocation.set("updated_width", 136);
              updatedLocation.set("updated_height", 136);
            }
          }
          else{
            clearInterval(id);
            if(qrStatus == "new"){
              updatedLocation.set("updated_width", new_height_and_width);
              updatedLocation.set("updated_height", 8);
            }
            else{
              updatedLocation.set("updated_quadrant", 4);
              updatedLocation.set("updated_width", 136);
              updatedLocation.set("updated_height", 136);
            }
          }
        }
        else{
          if(new_height_and_width > 136){
            clearInterval(id);
            if(qrStatus == "new"){
              updatedLocation.set("updated_height", 136);
              updatedLocation.set("updated_width", new_height_and_width-136);
            }
            else{
              updatedLocation.set("updated_quadrant", 4);
              updatedLocation.set("updated_width", 136);
              updatedLocation.set("updated_height", 136);
            }
          }
          else{
            clearInterval(id);
            if(qrStatus == "new"){
              updatedLocation.set("updated_height", new_height_and_width);
              updatedLocation.set("updated_width", 8);
            }
            else{
              updatedLocation.set("updated_quadrant", 4);
              updatedLocation.set("updated_width", 136);
              updatedLocation.set("updated_height", 136);
            }
          }
        }
        clearInterval(id);
      }
      //situation where so much time has passed that 2 new iterations had started
      else if(borderAccumulated > 2*8*136){
        num_quad_adv = ~~((borderAccumulated-2*8*136)/(136+136));

        new_height_and_width = (borderAccumulated-(2*8*136))-(num_quad_adv*2*136);
        if(num_quad_adv+1 == 1 || num_quad_adv == 3){
          if(new_height_and_width > 136){
            clearInterval(id);
            if(qrStatus == "new"){
              updatedLocation.set("updated_width", 136);
              updatedLocation.set("updated_height", new_height_and_width-136);
            }
            else{
              updatedLocation.set("updated_quadrant", 4);
              updatedLocation.set("updated_width", 136);
              updatedLocation.set("updated_height", 136);
            }
          }
          else{
            clearInterval(id);
            if(qrStatus == "new"){
              updatedLocation.set("updated_width", new_height_and_width);
              updatedLocation.set("updated_height", 8);
            }
            else{
              updatedLocation.set("updated_quadrant", 4);
              updatedLocation.set("updated_width", 136);
              updatedLocation.set("updated_height", 136);
            }
          }
        }
        else{
          if(new_height_and_width > 136){
            clearInterval(id);
            if(qrStatus == "new"){
              updatedLocation.set("updated_height", 136);
              updatedLocation.set("updated_width", new_height_and_width-136);
            }
            else{
              updatedLocation.set("updated_quadrant", 4);
              updatedLocation.set("updated_width", 136);
              updatedLocation.set("updated_height", 136);
            }
          }
          else{
            clearInterval(id);
            if(qrStatus == "new"){
              updatedLocation.set("updated_height", new_height_and_width);
              updatedLocation.set("updated_width", 8);
            }
            else{
              updatedLocation.set("updated_quadrant", 4);
              updatedLocation.set("updated_width", 136);
              updatedLocation.set("updated_height", 136);
            }
          }
        }
        clearInterval(id);
      }
      else{
        num_quad_adv = ~~(borderAccumulated/(2*init_quadrant*136));
        updatedLocation.set("updated_quadrant", init_quadrant + num_quad_adv);
        new_height_and_width = borderAccumulated-(num_quad_adv+init_quadrant-1)*(136+136);
        if(init_quadrant+num_quad_adv == 1 || init_quadrant+num_quad_adv == 3){
          if(new_height_and_width > 136){
            updatedLocation.set("updated_width", 136);
            updatedLocation.set("updated_height", new_height_and_width-136);
          }else{
            updatedLocation.set("updated_width", new_height_and_width);
            updatedLocation.set("updated_height", 8);
          }
        }else{
          if(new_height_and_width > 136){
            updatedLocation.set("updated_width", new_height_and_width-136);
            updatedLocation.set("updated_height", 136);
          }
          else{
            updatedLocation.set("updated_width", 8);
            updatedLocation.set("updated_height", new_height_and_width);
          }
        }
      }
      return updatedLocation;
    }
    var id = setInterval(quadrant_manager, total_time/(4*(136)+4*(136-8)));
    function quadrant_manager(){
      if(document.visibilityState === "visible"){
        if(prevState === "hidden"){
          if(widthTL > 8){
            updated_pos = accumulatedArea((136*7)+widthTL, timeElapsed, 4);
          }
          else if(heightTL > 0){
            updated_pos = accumulatedArea((136*6)+heightTL, timeElapsed, 4);
          }
          else if(heightBL > 8){
            updated_pos = accumulatedArea((136*5) + heightBL, timeElapsed, 3);
          }
          else if(widthBL > 0){
            updated_pos = accumulatedArea((136*4)+widthBL, timeElapsed, 3);
          }
          else if(widthBR > 8){
            updated_pos = accumulatedArea((136*3)+widthBR, timeElapsed, 2);
          }
          else if(heightBR > 0){
            updated_pos = accumulatedArea((136*2)+heightBR, timeElapsed, 2);
          }
          else if(heightTR > 8){
            updated_pos = accumulatedArea(136+heightTR, timeElapsed, 1);
          }
          else{
            updated_pos = accumulatedArea(widthTR, timeElapsed, 1);
          }
          updated_quadrant = updated_pos.get("updated_quadrant");
          if(updated_quadrant == 1){
            elemTR.style.height = updated_pos.get("updated_height") + "px";
            elemTR.style.width = updated_pos.get("updated_width") + "px";
            heightTR = updated_pos.get("updated_height");
            widthTR = updated_pos.get("updated_width");

            elemBR.style.left = 128 + "px";
            elemBR.style.width = 8 + "px";
            elemBR.style.height = "0";
            heightBR = 0;
            widthBR = 8;
            leftBR = 128;

            elemBL.style.left = 136 + "px";
            elemBL.style.top = 128 + "px";
            elemBL.style.width = "0";
            elemBL.style.height = 8 + "px";
            heightBL = 8;
            widthBL = 0;
            leftBL = 136;
            topBL = 128;

            elemTL.style.top = 136 + "px";
            elemTL.style.width = 8 + "px";
            elemTL.style.height = 0 + "px";
            heightTL = 0;
            widthTL = 8;
            topTL = 136;
          }
          else if(updated_quadrant == 2){
            elemTR.style.height = 136 + "px";
            elemTR.style.width = 136 + "px";
            heightTR = 136;
            widthTR = 136;

            elemBR.style.left = 136-updated_pos.get("updated_width") + "px";
            elemBR.style.width = updated_pos.get("updated_width") + "px";
            elemBR.style.height = updated_pos.get("updated_height") + "px";;
            heightBR = updated_pos.get("updated_height");
            widthBR = updated_pos.get("updated_width");
            leftBR = 136-updated_pos.get("updated_width");

            elemBL.style.left = 136 + "px";
            elemBL.style.top = 128 + "px";
            elemBL.style.width = "0";
            elemBL.style.height = 8 + "px";
            heightBL = 8;
            widthBL = 0;
            leftBL = 136;
            topBL = 128;

            elemTL.style.top = 136 + "px";
            elemTL.style.width = 8 + "px";
            elemTL.style.height = 0 + "px";
            heightTL = 0;
            widthTL = 8;
            topTL = 136;
          }
          else if(updated_quadrant == 3){
            elemTR.style.height = 136 + "px";
            elemTR.style.width = 136 + "px";
            heightTR = 136;
            widthTR = 136;

            elemBR.style.left = 0 + "px";
            elemBR.style.width = 136 + "px";
            elemBR.style.height = 136 + "px";;
            heightBR = 136;
            widthBR = 136;
            leftBR = 0;

            elemBL.style.left = 136-updated_pos.get("updated_width") + "px";
            elemBL.style.top = 136-updated_pos.get("updated_height") + "px";
            elemBL.style.width = updated_pos.get("updated_width")+"px";
            elemBL.style.height = updated_pos.get("updated_height") + "px";
            heightBL = updated_pos.get("updated_height");
            widthBL = updated_pos.get("updated_width");
            leftBL = 136-updated_pos.get("updated_width");
            topBL = 136-updated_pos.get("updated_height");

            elemTL.style.top = 136 + "px";
            elemTL.style.width = 8 + "px";
            elemTL.style.height = 0 + "px";
            heightTL = 0;
            widthTL = 8;
            topTL = 136;
          }
          else if(updated_quadrant == 4){
            elemTR.style.height = 136 + "px";
            elemTR.style.width = 136 + "px";
            heightTR = 136;
            widthTR = 136;

            elemBR.style.left = 0 + "px";
            elemBR.style.width = 136 + "px";
            elemBR.style.height = 136 + "px";;
            heightBR = 136;
            widthBR = 136;
            leftBR = 0;

            elemBL.style.left = 0 + "px";
            elemBL.style.top = 0 + "px";
            elemBL.style.width = 136+"px";
            elemBL.style.height = 136+ "px";
            heightBL = 136;
            widthBL = 136;
            leftBL = 0;
            topBL = 0;

            elemTL.style.top = 136-updated_pos.get("updated_height") + "px";
            elemTL.style.width = updated_pos.get("updated_width")+"px";
            elemTL.style.height = updated_pos.get("updated_height") + "px";
            heightTL = updated_pos.get("updated_height");
            widthTL = updated_pos.get("updated_width");
            topTL = 136-updated_pos.get("updated_height");
          }
        }
        else if(prevState === "visible"){
          var currTime = new Date().getTime();
          //First quadrant needs to be completed by t = 11250
          if(currTime-startTime>=11250){
            if(heightTR < 136 && heightBR == 0){
              heightTR++;
              elemTR.style.height=heightTR+ "px";
            }
          }
          //Second quadrant needs to be completed by t = 22500
          if(currTime-startTime>=22500){
            if(widthBR < 136 && widthBL == 0){
              widthBR++;
              leftBR--;
              elemBR.style.left=leftBR+"px";
              elemBR.style.width=widthBR+ "px";
            }
          }
          //Third quadrant needs to be completed by t =  33750
          if(currTime-startTime>=33750){
            if(heightBL < 136 && heightTL == 0){
              topBL--;
              heightBL++;
              elemBL.style.height=heightBL+ "px";
              elemBL.style.top=topBL+ "px";
            }
          }
          //Fourth quadrant needs to be completed by t = 44900
          if(currTime-startTime>=44900){
            if(widthTL < 136){
              widthTL++;
              elemTL.style.width=heightTL+ "px";
            }
            if(widthTL==136){
              clearInterval(id);
            }
          }
        }
        //animating the topRightQuadrant
        if(heightTR < 136){
          qrStatus = "active";
          if(widthTR < 136){
            widthTR++;
            elemTR.style.width = widthTR + "px";
          }
          else{
            heightTR++;
            elemTR.style.height = heightTR + "px";
          }
        }
        //animating the bottomRightQuadrant
        else if(heightTR >= 136 && widthBR < 136){
          qrStatus = "active";
          if(heightBR < 136){
            heightBR++;
            elemBR.style.height = heightBR + "px";
          }
          else{
            widthBR++;
            leftBR--;
            elemBR.style.width = widthBR + "px";
            elemBR.style.left = leftBR + "px";
          }
        }
        //animating the bottomLeftQuadrant
        else if(widthBR >= 136 && heightBL < 136){
          qrStatus = "active";
          if(widthBL < 136){
            widthBL++;
            leftBL--;
            elemBL.style.width = widthBL + "px";
            elemBL.style.left = leftBL + "px";
          }
          else{
            heightBL++;
            topBL--;
            elemBL.style.height = heightBL + "px";
            elemBL.style.top = topBL + "px";
          }
        }
        //animating the topLeftQuadrant
        else if(heightBL >= 136 && widthTL < 136){
          qrStatus = "active";
          if(heightTL < 136){
            heightTL++;
            topTL--;
            elemTL.style.height = heightTL + "px";
            elemTL.style.top = topTL + "px";
          }
          else{
            widthTL++;
            elemTL.style.width = widthTL + "px";
          }
          if(heightTL >= 136 && widthTL >= 136){
            clearInterval(id);
          }
        }
        prevState = "visible";
      }
      else{
        if(prevState == "visible"){
          timeElapsed = 1;
        }
        else{
          timeElapsed++;
        }
        prevState = "hidden";
      }
    }
}

function move2electricboogaloo() {
  var elemP1 = document.getElementById("phase1");
  var elemP2 = document.getElementById("phase2");
  var elemP3 = document.getElementById("phase3");

  if (!elemP1) {
    return;
  }

  //Get starting time of animation. Animation should complete in the amount of time specified in total_time (ms)
  var startTime = new Date().getTime();

  //initial settings for the animation of the phase1
  elemP1.style.height = "5px";
  elemP1.style.width = "0px";

  //initial settings for the animation of the phase2
  elemP2.style.width = "133px";
  elemP2.style.height = "133px";

  //initial settings for the animation of the phase3
  elemP3.style.width = "6px";
  elemP3.style.height = "127px";

  var framerate = 30; // Input frame rate in frames/second
  var id = setInterval(setSnakeTimer, 1000/framerate);

  function setSnakeTimer() {
    if (document.visibilityState === "visible") {
      elemP1 = document.getElementById("phase1");
      if (elemP1) {
        var timeElapsed = new Date().getTime() - startTime;
        var distanceTraveled = 529 * (timeElapsed / total_time);

        if (distanceTraveled < 137) { // Length of side 1: 137
          elemP1.style.width = distanceTraveled + "px";
          elemP1.style.height = "5px";
          elemP2.style.width = "133px";
          elemP3.style.height = "127px";
        } else if (distanceTraveled < 269) { // Length of sides 1 and 2: 137 + 132 = 269
          elemP1.style.width = "137px";
          elemP1.style.height = (distanceTraveled - 137 + 5) + "px";
          elemP2.style.width = "133px";
          elemP3.style.height = "127px";
        } else if (distanceTraveled < 402) { // Length of sides 1-3: 137 + 132 + 133 = 402
          elemP1.style.width = "137px";
          elemP1.style.height = "137px";
          elemP2.style.width = (133 - (distanceTraveled - 269)) + "px";
          elemP3.style.height = "127px";
        } else if (distanceTraveled < 529) { // Length of sides 1-4: 137 + 132 + 133 + 127 = 529
          elemP1.style.width = "137px";
          elemP1.style.height = "137px";
          elemP2.style.width = "0px";
          elemP3.style.height = (127 - (distanceTraveled - 402)) + "px";
        } else {
          elemP1.style.width = "137px";
          elemP1.style.height = "137px";
          elemP2.style.width = "0px";
          elemP3.style.height = "0px";
          clearInterval(id);
        }
      } else {
        flag = false;
        clearInterval(id);
      }
    }
  }
}

function clearSnake(){
    var elemTR = document.getElementById("quadrant_two");
    var elemBR = document.getElementById("quadrant_four");
    var elemBL = document.getElementById("quadrant_three");
    var elemTL = document.getElementById("quadrant_one");

    elemTR.style.width = "0";
    elemTR.style.height = "0";
    elemBR.style.width = "0";
    elemBR.style.height = "0";
    elemBL.style.width = "0";
    elemBL.style.height = "0";
    elemTL.style.width = "0";
    elemTL.style.height = "0";
}
class CustomTransportProvider {
    sendRequest(request) {
        return new Promise((resolve, reject) => {
            $.ajax({
                method: request.getMethod(),
                url: request.getUrl(),
                headers: this.prepareHeaders(request.getHeaders()),
                data: request.getBodyJson(),
                contentType: "application/json",
                dataType: "json",
                success: (data, statusMessage, jqXHR) => {
                    this.onSuccess(request, jqXHR).then(resolve);
                    if(document.getElementById('xmui-main-container')){
                      window.qrcodegenerated = true;
                      document.cookie= "qrcodegenerated=true";
                    }
                },
                error: (jqXHR, errorString, error) => {
                  console.log("I'm inside the error function!")
                    window.qrcodegenerated = false;
                    console.error("Request failed with error: " + errorString + " responseText: " + jqXHR);
                    if (jqXHR.status === 0) {
                      reject(mSDK.AuthenticationError
                       .createApplicationGeneratedCommunicationError("errorString", jqXHR.responseTex));
                   } else {
                     let response = new mSDK.TransportResponse();
                     response.setMethod(request.getMethod());
                     response.setStatus(jqXHR.status);
                     response.setHeaders(this.extractHeaders(jqXHR.getAllResponseHeaders()));
                     response.setBodyJson(jqXHR.responseText);
                     resolve(response);
                   }
                }
            });
        });
    }
    onSuccess(request, jqXHR) {
        let response = new mSDK.TransportResponse();
        response.setMethod(request.getMethod());
        response.setStatus(jqXHR.status);
        response.setHeaders(this.extractHeaders(jqXHR.getAllResponseHeaders()));
        response.setBodyJson(jqXHR.responseText);
        qrCode = true;
        return Promise.resolve(response);
    }
    onError(jqXHR, errorString, error) {
        console.error("Request failed with error: " + errorString + " responseText: " + jqXHR.responseText);
        if (jqXHR.status === 0) {
        return Promise.reject(mSDK.AuthenticationError
          .createApplicationGeneratedCommunicationError("errorString", jqXHR.responseTex));
        } else {
          let response = new mSDK.TransportResponse();
          response.setMethod(request.getMethod());
          response.setStatus(jqXHR.status);
          response.setHeaders(this.extractHeaders(jqXHR.getAllResponseHeaders()));
          response.setBodyJson(jqXHR.responseText);
          return Promise.resolve(response);
        }
      }
    extractHeaders(headersString) {
        var arr = headersString.trim().split(/[\r\n]+/);
        return arr.map((line) => {
            var parts = line.split(': ');
            var name = parts.shift();
            var value = parts.join(': ');
            var header = new mSDK.TransportHeader();
            header.setName(name);
            header.setValue(value);
            return header;
        });
    }
    prepareHeaders(headers) {
        var transformedHeaders = {};
        headers.forEach((header) => {
            transformedHeaders[header.getName()] = header.getValue();
        });
        transformedHeaders["client_id"] = tswebClientId;
        return transformedHeaders;
    }
}

function CustomUIHandler() {
  xmui.XmUIHandler.call(this);
}
CustomUIHandler.prototype = Object.create(xmui.XmUIHandler.prototype);
CustomUIHandler.prototype.constructor = CustomUIHandler;
CustomUIHandler.prototype.processJsonData = function (jsonData) {
  return Promise.resolve(com.ts.mobile.sdk.JsonDataProcessingResult.create(true));
};
CustomUIHandler.prototype.handlePolicyRejection = function (
  title,
  text,
  buttonText,
  failureData,
  actionContext,
  clientContext) {
      if (failureData && failureData.reason && failureData.reason.type === 'approval_expired') {
          return Promise.resolve(com.ts.mobile.sdk.ConfirmationInput.create(-1));
      } else {
          return XmUIHandler.prototype.handlePolicyRejection(
              title,
              text,
              buttonText,
              failureData,
              actionContext,
              clientContext);
      }
}


var sdk = new xmsdk.XmSdk();
var connectionSettings = com.ts.mobile.sdk.SDKConnectionSettings.create(tswebEndPoint, tswebAppId);
sdk.setConnectionSettings(connectionSettings);
sdk.setUiAssetsDownloadMode(com.ts.mobile.sdk.UIAssetsDownloadMode.Disable);
sdk.setTransportProvider(new CustomTransportProvider());
sdk.setUiHandler(new CustomUIHandler());

sdk.initialize().then(function() {
	console.log("TSQR : xmsdk initialized");
}).catch(function(err) {
console.error("TSQR : Failed to initialize xmsdk! " + err.toString());
});

if(window.sessionStorage) {
    var qrSession = sessionStorage.getItem("activeQrSession");
    if(null != qrSession) {
        console.log("TSQR : activeQrSession present in sessionStorage - clear data");
        sdk.clearAllData();
	sessionStorage.removeItem("activeQrSession");
	console.log("TSQR : removed activeQrSession from sessionStorage");
    }
}

var qrRefreshCounter = 0;
var anonymousPolicyPromise;

function clearQRCode() {
  qrRefreshCounter = 0;
  sdk.clearAllData();
  console.log("QR Box closed - calling clearQRCode()");
}

function invokeQRCodeLogin(qrLoginBoxFlow = false) {
    var policyId = "anonymous_qr";
    var clientContext = {};

    /* Temporary solution for NCCCHR-3622 until the Transmit vendor adds the alt tag to xmsdk.js
    Select transmitContainer as the node that will be observerd for mutations and pass in a config with options for the observer i.e. which mutations to observe for.
    Then, when the MutationObserver interface is invoked on changes made to the DOM tree, with the transmitContainer node being the root of the tree, call the callback function
    which in this case adds an alt tag to the qr code image if it exists.*/
    const targetNode = document.getElementById("transmitContainer");
    const config = {
        childList: true,
        subtree: true
    };
    const callback = () => {
        if (document.getElementsByClassName("xmui-ticket-wait_qr-code")[0] !== undefined) {
            document.getElementsByClassName("xmui-ticket-wait_qr-code")[0].alt ="QR Code";
              if(document.getElementsByClassName('xmui-ticket-wait_qr-code').length == 1 && !flag){
                flag = true;
                qrStatus = "new";
                if (qrLoginBoxFlow) {
                  move2electricboogaloo();
                } else {
                  move();
                }
                
              }
            observer.disconnect();
        }
    };
    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);

    anonymousPolicyPromise = sdk.invokeAnonymousPolicy(policyId, clientContext);
    anonymousPolicyPromise.then(function (successfulAuth) {
        console.log("TSQR : Invoked AnonymousQRLogin Policy.");
        var qrToken = successfulAuth.getToken();
        var qrUserId = successfulAuth.getInternalData().json_data.USER_ID;
        sessionStorage.setItem('qrUsername', qrUserId);
        sessionStorage.setItem('qrPassword', qrToken);
        // Creating and dispatching an event when QR scan is done for nga-login
        var ev = new Event("QRScanDone",{bubbles: true});
        setTimeout(()=>{
            document.dispatchEvent(ev);
        },100);
        console.log("QRScanDone::",ev);
        console.log("qrUserId=" + qrUserId + " qrToken=" + qrToken);
        document.cookie = "qrCodeLogin=true; path=/; domain=citi.com;";
        window.taggingDataLayer.updateEventData("bSignonScanQRCodeSuccess");
        if (window.sessionStorage) {
            sessionStorage.setItem("activeQrSession", "true");
        }
    }).catch(function (err) {
        var qrCode = false;
        console.error("TSQR : ERROR invoking AnonymousQRLogin Policy : " + err.toString());
        if (err.getData().failure_data.reason.type === "approval_expired") {
            if (qrLoginBoxFlow) {
              if (anonymousPolicyPromise.__zone_symbol__value?._errorCode !== 14) {
                console.log("QR code expired - There's been a new QR Code call. Do nothing.");
                return;
              } else if (!document.getElementById("transmitContainer")) {
                console.log("QR code expired - QR Login Box isn't open. Do nothing.");
                window.qrcodegenerated = false;
                document.cookie = "qrcodegenerated=false";
                return;
              }
            }
            console.error("QR code expired - refreshing");
            flag = false;
            qrRefreshCounter++;
            sdk.clearAllData();
            if (qrRefreshCounter < 3) {
                console.debug("qrRefreshCounter=" + qrRefreshCounter + " refreshing QR code");
                invokeQRCodeLogin(qrLoginBoxFlow);
                window.qrcodegenerated = false;
                document.cookie= "qrcodegenerated=false";
            } else if (qrLoginBoxFlow) { // check if we're in the QR Login Box flow
              var qrRefreshExpiredEvent = new Event('QRRefreshExpired', { bubbles: true });
              document.dispatchEvent(qrRefreshExpiredEvent);
              qrRefreshCounter = 0;
              window.qrcodegenerated = false;
              document.cookie= "qrcodegenerated=false";
            }
            else {
                console.debug("Max value reached for qrRefreshCounter - reloading page");
                window.location.reload();
                window.qrcodegenerated = false;
                document.cookie= "qrcodegenerated=false";
            }
        }
        else {
            sdk.clearAllData();
            window.location.reload();
            window.qrcodegenerated = false;
            document.cookie= "qrcodegenerated=false";
        }

    });
}