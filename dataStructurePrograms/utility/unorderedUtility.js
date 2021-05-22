/************************************************************************************************
 * Execution : 1. default node cmd> node unorderedUtility.js
 *
 * Purpose   : Contains unordered utility method to create linked list.
 *
 * @file     : unorderedUtility.js
 * @author   : Rajat Sawarkar <rajatsawarkar95@gmail.com>
 * @since    : 23-04-2021
 *
 *************************************************************************************************/

// open file
let listUtil = require('./linkedListUtility').LinkedList;
let fs = require('fs');
// exports if a object that get exposed to a module and it is by default in every js file.
module.exports = {
  unorderedList(array, element) {
    try {
      if (!element) {
        throw new Error('null and undefined are not valid elements');
      }
      //create a new list
      let list = new listUtil();
      let regexp = /^[A-Za-z]+$/;
      for (let i = 0; i < array.length; i++) {
        if (regexp.test(array[i])) {
          list.add(array[i]);
        }
      }
      // This condition checks for adding the item,if item not exists in file
      if (list.indexOf(element) == -1) {
        list.add(element);
        console.log('Added successfully..\n');
      }
      // This condition checks for removing the item,if item already exists in file
      else {
        let count = 0;
        for (let i = 0; i < list.size; i++) {
          let x = list.removeElement(element);
          if (x != -1) {
            count++;
          }
        }
        console.log('\nRemoved successfully... ' + count + ' times\n');
      }
      // write operation to save updated list into the file.
      let dataWrite = list.printList();
      fs.writeFileSync('./utility/source.txt', dataWrite);
    } catch (Error) {
      if (Error == 'Error: null and undefined are not valid elements') {
        console.log('Terminating Program! Please enter a valid string');
        return element;
      }
    }
    return element;
  }
};
