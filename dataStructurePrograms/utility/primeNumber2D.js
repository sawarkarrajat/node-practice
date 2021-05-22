/******************************************************************************
 *  Execution       :   1. default node         cmd> node fileName.js
 *  Purpose         : TO deploy all the business logic.
 *  @file           : primeNumber2D.js
 *  @overview       : ALl the business logic bus be here.
 *  @module         : read-line modules are installed
 *  @author         : rajatsawarkar95@gmail.com
 *  @version        : v1.0.0
 *  @since          : 26-04-2021
 ******************************************************************************/
/**
 * exports:if a object that get exposed to a module and it is by default in every js file.
 */
module.exports = {
  /*
   * This condition will checks the prime numbers.
   */
  checkPrime(s1, s2) {
    let count = 0,
      flag = 0,
      k = 0;
    let array = [];
    for (let i = s1; i <= s2; i++) {
      for (let j = 2; j < i; j++) {
        if (i % j == 0) {
          flag = 0;
          count++;
          break;
        } else {
          flag = 1;
        }
      }
      if (flag == 1) {
        array[k++] = i;
      }
    }
    return array;
  }
};
