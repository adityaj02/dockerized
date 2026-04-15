const assert = require('assert');
const test = require('node:test');

test('synchronous passing test', (t) => {
  assert.strictEqual(1, 1);
});
