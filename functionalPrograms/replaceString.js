/************************************************************************************************
 * Execution : (default node cmd): node ReplaceString.js
 *
 * Purpose   : To replace specified string with user input string.
 *
 * @file     : ReplaceString.js
 * @version  : 1.0
 * @author   : Rajat Sawarkar <rajatsawarkar95@gmail.com>
 * @since    : 16-04-2021
 *
 *************************************************************************************************/

let Utility = require('../utility/Utility');
let readline = require('readline-sync');
function replaceStringUserWithInput() {
  try {
    let name = readline.question('Enter your Name : ');
    Utility.replaceS(name);
  } catch (error) {
    console.error(error.message);
  }
}

replaceStringUserWithInput();
