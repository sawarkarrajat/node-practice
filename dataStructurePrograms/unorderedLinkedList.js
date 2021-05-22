/************************************************************************************************
 * Execution : node unorderedLinkedlist.js
 *
 * Purpose : to create unordered linked list using a file from which
 *			text is read and put into list using methods.
 *
 * @file : unorderedLinkedlist.js
 * @author : Rajat Sawarkar <rajatsawarkar95@gmail.com>
 * @since : 23-04-2021
 *
 *************************************************************************************************/

let fs = require('fs');
let Utility = require('../utility/Utility');
let unorderedUtility = require('./utility/unorderedUtility');
let data = fs.readFileSync('./utility/source.txt');

console.log('String read from file: \n\n' + data);
data = data.toString().toLocaleLowerCase().split(' ');

function unorderedList() {
  do {
    // here we read the input from user that input function stored in utility.
    let choice;
    let element = Utility.inputString('Enter an element to search or add:  ');
    let result = unorderedUtility.unorderedList(data, element);
    if (!result) {
      choice = Utility.inputString('would you like to continue [yes/no]');
    }
  } while (choice == 'yes');
}
unorderedList();
