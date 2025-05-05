const fs = require('fs');

console.log('Start reading file (blocking)...');

const data = fs.readFileSync('./example.txt', 'utf8');

console.log('File content: ', data);

console.log('End reading file (blocking)...');