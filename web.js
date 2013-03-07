var express = require('express');
var request = require('request');
var conf 	= require('./conf');

var app = express();

// Ver: https://github.com/visionmedia/express/blob/master/examples/ejs/index.js
app.engine('.html', require('ejs').__express);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');

app.get('/', function(req, res) {
	res.render('index', {
		conf: conf,
	});
});

app.get('/linkedin', function(req, res) {
	var code = req.query.code
	var state = req.query.state

	var accessTokenUrl = "https://www.linkedin.com/uas/oauth2/accessToken"
										+ "?grant_type=authorization_code"
										+ "&code=" + code
										+ "&redirect_uri=" + conf.appUrl
										+ "&client_id=" + conf.apiKey
										+ "&client_secret=" + conf.secretKey;

	request(accessTokenUrl, function (error, response, body) {
		res.render('linkedin', {
			conf: conf,
			code: code,
			state: state,
			response: JSON.parse(body),
		});
	})

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});