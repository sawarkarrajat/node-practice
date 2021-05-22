let assert = require('chai').assert;
let util = require('../utility/orderedUtility');
let arr = [9, 6, 3, 8, 5, 2, 7, 4, 1];
let element,
  string = 'hi';
describe('testing ordered linkedlist program', function () {
  it('checkingForNullValue', function () {
    assert.isNull(util.orderedList(arr, null));
  });

  it('checkingForUndefinedValue', function () {
    assert.isUndefined(util.orderedList(arr, element));
  });

  it('checkingForStringValue', function () {
    assert.isString(util.orderedList(arr, string));
  });
});
