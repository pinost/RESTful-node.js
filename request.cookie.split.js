var http = require('http');

http.createServer(function (request, response){
	var cookie = request.headers.cookie;

	cookie = cookie.split(';').map(function(element){
		var element = element.split('=');
		return {
			key: element[0],
			value: element[1]
		};
	});

	response.writeHead(200, {
		'Content-Type': 'text/html',
		'Set-Cookie': ['name = RinIanTta', 'region = Seoul']
	});

	response.end('<h1>' + JSON.stringify(cookie) + '</h1>');
}).listen(52273, function(){
	console.log('Server Running at http://localhost:52273');
})