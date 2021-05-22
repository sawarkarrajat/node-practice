/************************************************************************************************
 * Execution : (default node cmd): node findNumber.js
 *
 * Purpose   : To find Number which is 2^n in terms and
 *
 * @file     : findNumber.js
 * @version  : 1.0
 * @author   : Rajat Sawarkar <rajatsawarkar95@gmail.com>
 * @since    : 18-04-2021
 *************************************************************************************************/

let Utility = require('../utility/Utility');
let readline = require('readline-sync');
try {
  function findnum() {
    let N = readline.question('Enter a number N, where (N = 2^n) :  ');
    console.log(
      'think of a number between 0 - ' + (N - 1) + ' and answer the questions'
    );

    let isPower = Utility.isPowerOfTwo(N);

    if (isPower) {
      let n = Math.sqrt(N, 2);

      if (n % 2 == 0)
        console.log('Think of an integer between 0 and ' + (N - 1));

      let toFind = Utility.search(0, N);
      console.log('Your number is: ' + toFind);
    } else {
      console.log('Invalid Input');
    }
  }
} catch (error) {
  console.log('Error: ', error);
}

findnum();
