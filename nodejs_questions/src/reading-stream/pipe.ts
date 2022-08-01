import fs from 'fs';

// Create a readable stream
const readerStream = fs.createReadStream('data.txt');

// Create a writable stream
const writerStream = fs.createWriteStream('piped.txt');

// Pipe the read and write operations
// read input.txt and write data to output.txt
readerStream.pipe(writerStream);

console.log('Program Ended');
