var http = require('http');

var server = http.createServer().listen(52273);

server.on('request', function(){
	console.log('Request on');
});

server.on('connection', function(){
	console.log('Connection on');
});

server.on('close', function(){
	console.log('Close on');
});
