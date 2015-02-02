var http = require('http');
var express = require('express');

var app = express();

app.use(function (request, response){

	var output = [];
	for (var i = 0; i < 3; i++){
			output.push({
				count: i,
				name: 'name - ' + i
			});
	}
	response.send(output);
});

http.createServer(app).listen(52273, function(){
	console.log('Server running at localhost:52273');
});