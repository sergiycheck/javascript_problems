import fs from 'fs';
import sinon from 'sinon';
import { assert } from 'chai';

// config
// mocha with typescript
// https://dev.to/matteobruni/mocha-chai-with-typescript-37f
// https://mochajs.org/#configuring-mocha-nodejs
// stubs
// https://sinonjs.org/releases/latest/stubs
describe('stubbing modules', () => {
  it('should create fs stub and call', () => {
    const readFileStub = sinon
      .stub(fs, 'readFile')
      .callsFake(function (path, cb) {
        return cb(null, Buffer.from('filecontent'));
      });

    fs.readFile('../package.json', (err, data) => {});

    assert(readFileStub.calledOnce);
    readFileStub.restore();
  });
});
