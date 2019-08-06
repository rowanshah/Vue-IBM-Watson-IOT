var Client = require("ibmiotf");
var appClientConfig = {
    // add your details here

   // "org" : "",
   // "id" : "",
   // "domain": "",
   // "auth-key" : "",
   // "auth-token" : "",
  }
 

  var appClient = new Client.IotfApplication(appClientConfig);
 
  appClient.connect();
  console.log("Sub connection successful");
  appClient.on("connect", function () {
   
      appClient.subscribeToDeviceEvents("ChildApp","123456","+","json");

      console.log("Sub connection successful(2)");
  });