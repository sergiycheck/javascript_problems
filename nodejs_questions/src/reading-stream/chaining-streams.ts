import fs from 'fs';
import zlib from 'node:zlib';

// Compress the file input.txt to input.txt.gz
fs.createReadStream('data.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('data.txt.gz'));

console.log('File Compressed.');
