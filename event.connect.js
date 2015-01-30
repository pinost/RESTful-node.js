process.on('exit', function(){
	console.log('Good bye');
});

process.on('uncaughtException' ,function(error){
	console.log('Event !!');
});

var count = 0;
var id = setInterval(function(){
	count++;

	if(count == 4){ clearInterval(id); }

	error.error.error();
}, 2000);