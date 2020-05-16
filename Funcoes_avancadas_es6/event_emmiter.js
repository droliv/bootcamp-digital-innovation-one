const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('user_logged', (data) => {
  console.log(data);
});

emitter.emit('user_logged', { user: 'Daniele' });
