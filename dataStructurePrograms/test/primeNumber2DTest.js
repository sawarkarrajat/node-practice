let assert = require('chai').assert;
let util = require('../utility/primeNumber2D');
let n = 13;

describe('checking prime number 2D', () => {
  it('checking for prime values', () => {
    assert.isArray(util.checkPrime(0, 50));
  });
  it('checking for Null values', () => {
    assert.isEmpty(util.checkPrime(0, 0));
  });
});
