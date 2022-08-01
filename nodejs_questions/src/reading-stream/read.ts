import fs from 'fs';

const data: string[] = [];

// Create a readable stream
const readerStream = fs.createReadStream('data.txt');

// Set the encoding to be utf8.
readerStream.setEncoding('utf8');

// Handle stream events --> data, end, and error
readerStream.on('data', function (chunk) {
  data.push(chunk.toString());
});

readerStream.on('end', function () {
  console.log(data.join());
});

readerStream.on('error', function (err) {
  console.log(err.stack);
});

console.log('Program Ended');
