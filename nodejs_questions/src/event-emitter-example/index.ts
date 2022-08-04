import { EventEmitter } from 'events';

const eventEmitter = new EventEmitter();

const connectHandler = function connected() {
  console.log('connection succesful.');

  eventEmitter.emit('data_received');
};

eventEmitter.on('connection', connectHandler);

eventEmitter.on('data_received', function () {
  console.log('data received succesfully.');
});

eventEmitter.emit('connection');

console.log('Program Ended.');
process.