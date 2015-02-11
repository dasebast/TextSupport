var express = require('express');
var bodyParser = require('body-parser');
var firebase = require('firebase');
var twilio = require('twilio');

var app = express();
var port = 9010;

var account$id = 'AC32029f30f626e1922c369e9ebb0e2917';
var authToken = '0f83efef702beb65deda13c2a6a943af';

app.listen(port, function() {
	console.log("Now listening on port: " + port);
});

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

var twilio = require('twilio')(account$id, authToken);

app.post('/support/messages', function(req, res) {
	twilio.sendMessage({
		to: '+12146209008',
   		from: '+14697893425',
   		body: req.body.body
		
 	}, function(err, responseData) {
			if (err) {
 			return res.status(444).send("made bad request");
		} else {
			return res.status(200).json(responseData);
		}
 	});
 
});