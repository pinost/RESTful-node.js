var http = require('http');

http.createServer(function (request, response){
	var cookie = request.headers.cookie;

	response.writeHead(200, {
		'Content-Type': 'text/html',
		'Set-Cookie': ['name = RinIanTta', 'region = Seoul']
	});

	response.end('<h1>' + JSON.stringify(cookie) + '</h1>');
}).listen(52273, function(){
	console.log('Server Running at http://localhost:52273');
})