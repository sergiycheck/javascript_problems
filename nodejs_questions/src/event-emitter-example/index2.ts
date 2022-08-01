import { EventEmitter } from 'events';
var eventEmitter = new EventEmitter();

//  Add listener function for Sum event
eventEmitter.on('Sum', function (num1, num2) {
  console.log('Total: ' + (Number(num1) + Number(num2)));
});

//  Call Event.
eventEmitter.emit('Sum', '10', '20');
