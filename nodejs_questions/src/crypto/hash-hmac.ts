import crypto from 'node:crypto';

const secret = 'abcdefg';
const hash = crypto
  .createHmac('sha256', secret)
  .update('Welcome to JavaTpoint')
  .digest('hex');
console.log(`hash`, hash);
