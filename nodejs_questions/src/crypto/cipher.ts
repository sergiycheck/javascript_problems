import { scrypt, randomFill, createCipheriv } from 'node:crypto';
import fs from 'fs';

const writable = fs.createWriteStream('encrypted.txt');

const algorithm = 'aes-192-cbc';
const password = 'Password used to generate key';

const keyLength = 24;
const vectorLength = 16;

// First, we'll generate the key. The key length is dependent on the algorithm.
// In this case for aes192, it is 24 bytes (192 bits).
scrypt(password, 'salt', keyLength, (err, key) => {
  if (err) throw err;
  // Then, we'll generate a random initialization vector
  randomFill(new Uint8Array(vectorLength), (err, iv) => {
    if (err) throw err;

    // Once we have the key and iv, we can create and use the cipher...
    const cipher = createCipheriv(algorithm, key, iv);

    let encrypted = '';
    cipher.setEncoding('hex');

    cipher.on('data', (chunk) => (encrypted += chunk));
    cipher.on('end', () => {
      console.log(`encrypted`, encrypted);

      writable.write(encrypted);
      writable.end();
    });

    cipher.write('some clear text data');
    cipher.end();
  });
});
