var Client = require("ibmiotf");
var appClientConfig = {
    "org" : "c6otof",
    "id" : "123456",
    "domain": "internetofthings.ibmcloud.com",
    "auth-key" : "a-c6otof-sn0etnjuqy",
    "auth-token" : "KbrR2wJpqt&ww86Bsi",
   }
   var appClient = new Client.IotfApplication(appClientConfig);
    appClient.connect();

export default {
publishNeutralMood(){  
    var appClient = new Client.IotfApplication(appClientConfig);
    appClient.connect();
    //eslint-disable-next-line
    console.log("Publish connection successful");
    appClient.on("connect", function () {
    var myData={'Mood' : 'Neutral'};
    myData = JSON.stringify(myData);
    //change details here
    appClient.publishDeviceCommand("Device type","DeviceID", "Event name", "format", myData);
    // eslint-disable-next-line
    console.log("Published successfully!");
   });
 }
}