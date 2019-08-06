

var Client = require("ibmiotf");
var appClientConfig = {
    // add your details here

   // "org" : "",
   // "id" : "",
   // "domain": "",
   // "auth-key" : "",
   // "auth-token" : "",
   }
 
export default {
        publishCalmMood(){ 
        var appClient = new Client.IotfApplication(appClientConfig);
        appClient.connect();
        //eslint-disable-next-line
        console.log("Publish connection successful");
        appClient.on("connect", function () {
        // eslint-disable-next-line
        var myData={'Mood' : 'Calm'};
        myData = JSON.stringify(myData);
        //change details here
       appClient.publishDeviceCommand("Device type","DeviceID", "Event name", "format", myData);
        // eslint-disable-next-line
        console.log("published successfully");
       });
    }
}


