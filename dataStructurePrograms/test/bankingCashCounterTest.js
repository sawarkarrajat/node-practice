let assert = require('chai').assert;
let util = require('../utility/queueUtility').Queue;
let qtil = new util();
let num = 4,
  num1 = 2;

describe('testing queue utilities', function () {
  it('checking for enqueue', function () {
    qtil.fillQueue(num);
    qtil.enqueue(99);
    assert.equal(qtil.dequeue(), 99);
  });

  it('checking for dequeue', function () {
    qtil.fillQueue(num1);
    assert.equal(qtil.dequeue(), 1);
  });

  it('checking for head', function () {
    qtil.fillQueue(num);
    assert.isNumber(qtil.head());
  });
});
