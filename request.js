var http = require('http');
var url = require('url');

http.createServer(function(request, response){
	if (request.method == 'GET'){
		console.log('GET request');
		var query = url.parse(request.url, true).query;

		response.writeHead(200, { 'Content-Type': 'text/html'});
		response.end('<h1>' + JSON.stringify(query) + '</h1>');
	} else if (request.method == 'POST'){
		console.log('POST request');
	}
}).listen(52273, function(){
	console.log('Server running at localhost:52273');
});