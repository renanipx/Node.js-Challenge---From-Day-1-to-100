const myEmitter = require('../events/myEmitter');

// Register a 'greet' event listener
myEmitter.on('greet', (name) => {
  console.log(`Hello, ${name}!`);
});
