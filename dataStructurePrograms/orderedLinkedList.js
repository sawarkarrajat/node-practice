/************************************************************************************************
 * Execution : node OrderedLinkedlist.js
 *
 * Purpose : to create ordered linked list using a file from which
 *			number is read and put into list using methods.
 *
 * @file : orderedLinkedlist.js
 * @author : Rajat Sawarkar <rajatsawarkar95@gmail.com>
 * @since : 24-04-2021
 *
 *************************************************************************************************/

let fs = require('fs');
let Utility = require('../utility/Utility');
let orderedUtility = require('./utility/orderedUtility');
let data = fs.readFileSync('./utility/numberSource.txt');

console.log('Numbers read from file: \n\n' + data);
data = data.toString().split(' ');

function orderedList() {
  do {
    // here we read the input from user that input function stored in utility.
    let choice;
    let element = Utility.inputString('Enter an element to search or add:  ');
    let result = orderedUtility.orderedList(data, element);
    if (!result) {
      choice = Utility.inputString('would you like to continue [yes/no]');
    }
  } while (choice == 'yes');
}
orderedList();
