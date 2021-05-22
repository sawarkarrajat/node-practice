let assert = require('chai').assert;
let util = require('../utility/stackUtility').Stack;
let u = new util();
let value = 'e',
  value1 = 'a';
describe('testing balancedparenthesis utility program', function () {
  it('checking for empty stack', function () {
    assert.isTrue(u.isEmpty());
  });

  it('checking for push working', function () {
    u.push(value1);
    assert.equal(u.pop(), value1);
  });
});
