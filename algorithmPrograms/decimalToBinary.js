/************************************************************************************************
 * Execution : (default node cmd): node decimalToBinary.js
 *
 * Purpose   : To convert decimal to binary.
 *
 * @file     : decimalToBinary.js
 * @version  : 1.0
 * @author   : Rajat Sawarkar <rajatsawarkar95@gmail.com>
 * @since    : 18-04-2021
 *************************************************************************************************/
let Utility = require('../utility/Utility');
let readline = require('readline-sync');
function tobinary() {
  try {
    let num = readline.question('Enter your decimal value ');
    let res = Utility.toBinary(num);
    console.log('convertes form ', res);
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}
tobinary();
