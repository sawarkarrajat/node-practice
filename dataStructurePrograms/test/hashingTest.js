let assert = require('chai').assert;
let util = require('../utility/unorderedUtility');
let arr = ['hi', 'i', 'am', 'rasdgft'];
let element,
  number = 9;
describe('testinglinkedlist program', function () {
  it('checkingForNullValue', function () {
    assert.isNull(util.unorderedList(arr, null));
  });

  it('checkingForUndefinedValue', function () {
    assert.isUndefined(util.unorderedList(arr, element));
  });

  it('checkingForNumericalValue', function () {
    assert.isNumber(util.unorderedList(arr, parseInt(number)));
  });
});
