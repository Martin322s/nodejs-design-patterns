const { EventEmitter } = require('node:events');

const coffeeMachine = new EventEmitter();

coffeeMachine.on('ready', () => {
	console.log('coffee-ready');
});

coffeeMachine.on('empty-cup', () => {
	console.log('refill water');
});

coffeeMachine.emit('ready');