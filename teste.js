var request = require('request');
var conf 	= require('./conf');

var code = "AQTpW09x0P-8GLcLnEYvO9KKzwg9TXQl6OO7L-jxpbZB5Ic9GKU9efUqE0J97iIQj4oacGgUj9VpFfWfpm4u561i48Zgej75PfmDbO5EBfOjohzIS98"

var accessTokenUrl = "https://www.linkedin.com/uas/oauth2/accessToken"
									+ "?grant_type=authorization_code"
									+ "&code=" + code
									+ "&redirect_uri=" + conf.appUrl
									+ "&client_id=" + conf.apiKey
									+ "&client_secret=" + conf.secretKey;

console.log(accessTokenUrl);

var doRequest = function () {
	request(accessTokenUrl, function (error, response, body) {
		//if (!error && response.statusCode == 200) {
			console.log(body) // Print the google web page.
		//}
	})
}

doRequest();
