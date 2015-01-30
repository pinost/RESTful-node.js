

var onUncaughtException = function(error){
	console.log('Event !!');
	process.removeListener('uncaughtException', onUncaughtException);
};

process.on('uncaughtException', onUncaughtException)

setInterval(function(){
	
	error.error.error();
}, 2000);