let assert = require("chai").assert;
let anagramUtils = require("../../utility/Utility");
let str1 = 'jahaj',
  str2 = 'jaahj',
  str3 = 'jaatp';
describe("anagramTest", function () {
  //for same strings
  it("forSameString", function () {
    assert.equal(anagramUtils.anagramCheck(str1, str1), true);
  });

  it("forSameString1", function () {
    assert.isTrue(anagramUtils.anagramCheck(str1, str1), "checking isTrue found true");
  });

  it("forSameString2", function () {
    assert.typeOf(anagramUtils.anagramCheck(str1, str1), "boolean", "Correct");
  });
  //for Different Strings of same characters
  it("forDifferentStrings", function () {
    assert.equal(anagramUtils.anagramCheck(str1, str2), true);
  });

  it("forDifferentStrings1", function() {
    assert.isTrue(anagramUtils.anagramCheck(str1, str2), "checking isTrue found true");
  });

  it("forDifferentString2", function() {
    assert.typeOf(anagramUtils.anagramCheck(str1, str2), "boolean", "Correct");
  });
  //for wrong strings of same string length
  it("forWrongStrings", function () {
    assert.notEqual(anagramUtils.anagramCheck(str1, str3),true);
  });

  it("forWrongStrings1", function() {
    assert.isFalse(anagramUtils.anagramCheck(str1, str3), "checking isFalse found true");
  });

  it("forWrongString2", function() {
    assert.typeOf(anagramUtils.anagramCheck(str1, str3), "boolean", "Correct");
  });
});
