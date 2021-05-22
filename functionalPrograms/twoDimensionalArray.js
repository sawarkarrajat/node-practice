/************************************************************************************************
 * Execution : (default node cmd): node twoDimensionalArray.js
 *
 * Purpose   : saving different types of values in two dimensional
 *             array of user defined size.
 *
 * @file     : twoDimensionalArray.js
 * @version  : 1.0
 * @author   : Rajat Sawarkar <rajatsawarkar95@gmail.com>
 * @since    : 17-04-2021
 *************************************************************************************************/
let Utility = require('../utility/Utility');
let readline = require('readline-sync');

let rows = readline.question('Enter no. of rows   : ');
let cols = readline.question('Enter no. of columns: ');

function twoDArray() {
  let result = Utility.twoDArr(rows, cols);
  console.log(result);
}
twoDArray();
