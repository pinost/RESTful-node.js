var crypto = require('crypto');

var key = 'Secret key';
var input = 'PASSWORD';

var cipher = crypto.createCipher('aes192', key);
cipher.update(input, 'utf8', 'base64');
var cipheredOutput = cipher.final('base64');

var decipher = crypto.createDecipher('aes192', key);
decipher.update(cipheredOutput, 'base64', 'utf8');
var decipheredOutput = decipher.final('utf8');

console.log('original: ' + input);
console.log('ciphered: ' + cipheredOutput);
console.log('deciphered: ' + decipheredOutput);