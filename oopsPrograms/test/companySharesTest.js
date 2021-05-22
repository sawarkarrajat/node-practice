let assert = require('chai').assert;
let util = require('../utility/companySharesLinkedList').LinkedList;
let u = new util();
let arr = ['hi', 'i', 'am', 'rasdgft'];
let element,
  number = 9;

arr.forEach((element) => {
  u.add(element);
});

describe('testing company shares program', function () {
  it('checkingForValue', function () {
    assert.isNotNull(u.listSize());
  });

  it('checkingForDeleteList', function () {
    assert.isNull(u.deleteList());
  });
});
