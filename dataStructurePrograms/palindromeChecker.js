/************************************************************************************************
 * Execution : 1. default node cmd> node palindromeChecker.js
 *
 * Purpose   : to check a string if its palindrome or not using deque method.
 *
 * @file     : palindromeChecker.js
 * @version  : 1.0
 * @author   : Rajat Sawarkar <rajatsawarkar95@gmail.com>
 * @since    : 26-04-2021
 *
 *************************************************************************************************/
let utility = require('../utility/Utility');
let dequeue = require('./utility/checkerDequeUtility');
function palindromeChecker() {
  /**
   * here we read the input from user that input function stored in utility.
   */
  let read = utility.input();
  read.question('Enter a string: ', function (str) {
    if ((str >= 'a' && str <= 'z') || (str >= 'A' && str >= 'Z')) {
      dequeue.Palindrome(str);
    } else if (str == '') {
      /**
       * check if string is empty
       */
      console.log('Plz enter a string....');
    } else {
      /**
       * check if its not an charcter string it will print error msg
       */
      console.log('Plz enter a character string only...');
    }
    read.close();
  });
}
palindromeChecker();
