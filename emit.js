
console.log('Start');
process.on('exit', function(){

	console.log('Good bye');
});

process.emit('exit');
process.emit('exit');
process.emit('exit');
process.emit('exit');
process.emit('exit');

console.log('Running');