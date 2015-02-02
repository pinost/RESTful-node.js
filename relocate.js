var http = require('http');

http.createServer(function(request, response){
	response.writeHead(302, { 'Location': 'http://www.hani.co.kr'});
	response.end();
}).listen(52273, function(){
	console.log('Server Running at http://localhost:52273');
})