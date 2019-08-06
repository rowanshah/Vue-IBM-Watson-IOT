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
publishCredential(){
    var appClient = new Client.IotfApplication(appClientConfig);
    appClient.connect();
    //eslint-disable-next-line
    console.log("Publish connection successful");
  
}
}