/************************************************************************************************
 * Execution : (default node cmd): node primeExtended.js
 *
 * Purpose   : To find prime numbers till a range and
 *             check for anagrams and pallindrome.
 *
 * @file     : primeExtended.js
 * @version  : 1.0
 * @author   : Rajat Sawarkar <rajatsawarkar95@gmail.com>
 * @since    : 18-04-2021
 *************************************************************************************************/
let Utility = require('../utility/Utility');
let readline = require('readline-sync');
try {
  function prime() {
    let num = readline.question('Enter range to find primes in: ');
    Utility.primeNum(num);
  }
} catch (error) {
   console.error(error.message);
   throw error;
}

prime();
