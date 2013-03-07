(function(){

  var nconf = require('nconf');

  //
  // Setup nconf to use (in-order):
  //	 1. Command-line arguments
  //	 2. Environment variables
  //	 3. A file located at 'path/to/config.json'
  //
  nconf.argv()
       .env()
//       .file({ file: '.env.json' });

  module.exports = {
    apiKey: nconf.get("API_Key"),
    secretKey: nconf.get("Secret_Key"),
    userToken: nconf.get("OAuth_User_Token"),
    userSecret: nconf.get("OAuth_User_Secret"),
    appUrl: "http://secure-sierra-7245.herokuapp.com/linkedin"
  };

})(this)
