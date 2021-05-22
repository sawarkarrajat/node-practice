/************************************************************************************************
 * Execution : (default node cmd): node binarySearchStrings.js
 *
 * Purpose   : To search a string in a string array using binary search.
 *
 * @file     : binarySearchString.js
 * @version  : 1.0
 * @author   : Rajat Sawarkar <rajatsawarkar95@gmail.com>
 * @since    : 19-04-2021
 *************************************************************************************************/

let Utility = require('../utility/Utility');

try {
  let readline = require('readline-sync');
  let num = readline.question('Enter the size of string content: ');
  let arr = [],
    i = 0;

  while (num != arr.length) {
    let number = readline.question('Enter String [' + i++ + ']  : ');
    arr.push(number);
  }

  let arr1 = Utility.bubbleSortString(arr);
  let keyString = readline.question('Enter the String to be searched: ');
  let result = Utility.binarySrchString(arr1, keyString);

  if (result == true) console.log('String is present');
  else console.log('Not present');
} catch (error) {
  console.log('Error: ', error);
}
