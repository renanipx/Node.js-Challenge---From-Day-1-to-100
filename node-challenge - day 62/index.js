
const myEmitter = require('./events/myEmitter');
require('./listeners/greetListener');

// Emit the 'greet' event
myEmitter.emit('greet', 'Alice');
myEmitter.emit('greet', 'Bob');
