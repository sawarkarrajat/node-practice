let assert = require('chai').assert;
let primeExtendedjs = require("../../utility/Utility");

let number1 = 0,
  number2 = 2,
  number3 = 11,
  number4 = 6,
  number5 = 10;

describe("primeExtendTest", function() {
   it('forZero', function () {
     assert.isFalse(
       primeExtendedjs.isPrime(number1),
       'checking if the method returns false or not'
     );
   });
   it('forTwo', function () {
     assert.isTrue(
       primeExtendedjs.isPrime(number2),
       'the method should returns true for 2'
     );
   });
   it('forPrimeNumber', function () {
     assert.isTrue(
       primeExtendedjs.isPrime(number3),
       'method returns true hence prime'
     );
   });
   it('forNonPrime', function () {
     assert.isFalse(
       primeExtendedjs.isPrime(number4),
       'method returns false hence not prime'
     );
   });
   it('forPrimeNum', function () {
     assert.isNotNull(
       primeExtendedjs.primeNum(number4),
       'method should not be null'
     );
   });
   it('forPrimeNum1', function () {
     assert.isArray(
       primeExtendedjs.primeNum(number4),
       'method returns an array of Prime numbers'
     );
   });

});