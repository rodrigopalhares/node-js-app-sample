var express = require('express');

var app = express();

// https://github.com/visionmedia/express/blob/master/examples/ejs/index.js
app.engine('.html', require('ejs').__express);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');

app.get('/', function(request, response) {
	response.send('Hello World!');
});

app.get('/linkedin', function(req, res) {

	res.render('linkedin', {
		code: req.query.code,
		state: req.query.state
	});

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});