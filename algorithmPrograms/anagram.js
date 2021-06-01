/************************************************************************************************
 * Execution : (default node cmd): node anagram.js
 *
 * Purpose   : To find if the two Strings are Anagram or not.
 *
 * @file     : anagram.js
 * @version  : 1.0
 * @author   : Rajat Sawarkar <rajatsawarkar95@gmail.com>
 * @since    : 17-04-2021
 *************************************************************************************************/
let Utility = require('../utility/Utility');
let readline = require('readline-sync');
let anagrm = () => {
  //using exception handling for errors
  try {
    let s1 = readline.question('Enter first String : ');
    let s2 = readline.question('Enter second String: ');
    let result = Utility.anagramCheck(s1, s2);
    if (result) {
      console.log('Two Strings are ANAGRAM');
    } else {
      console.log('NOT an ANAGRAM');
    }
  } catch (error) {
     console.error(error.message);
     throw error;
  }
};
//function call on execution
anagrm();
