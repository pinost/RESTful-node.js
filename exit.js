console.log('Start');
process.on('exit', function(){

	console.log('Good bye');
});

process.exit();
process.emit('exit');
process.emit('exit');
process.emit('exit');
process.emit('exit');
process.emit('exit');

console.log('Running');