const assert = require('assert');
const {describe, it} = require('mocha');

const hello = require('../app/javascript/packs/foo/hello');

describe('JS tests', function() {
  it('hello returns "HELLO!"', function() {
    assert.strictEqual(hello(), 'HELLO!');
  });
});
