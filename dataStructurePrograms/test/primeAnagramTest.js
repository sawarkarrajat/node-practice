let assert = require('chai').assert;
let util = require('../utility/primeAna2D');
let s1 = 133,
  s2 = 313;
describe('testing anagram program', function () {
  it('checking check method', function () {
    assert.isTrue(util.check(s1, s1));
  });

  it('checking anagram', function () {
    assert.isTrue(util.checkAnagram2(s1, s2));
  });
});
