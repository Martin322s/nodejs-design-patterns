const fs = require('fs');

console.log('Start reading file (blocking)...');

fs.readFile('./example.txt', (err, data) => {
	if (err) throw new Error('Error while reading file...');
	console.log('File content: ', data);
});

console.log('End reading file (blocking)...');