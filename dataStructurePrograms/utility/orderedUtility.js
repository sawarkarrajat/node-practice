/************************************************************************************************
 * Execution : 1. default node cmd> node orderedUtility.js
 *
 * Purpose   : Contains ordered utility method to create linked list.
 *
 * @file     : orderedUtility.js
 * @author   : Rajat Sawarkar <rajatsawarkar95@gmail.com>
 * @since    : 23-04-2021
 *
 *************************************************************************************************/

// open file
let listUtil = require('./linkedListUtility').LinkedList;
let fs = require('fs');
// exports if a object that get exposed to a module and it is by default in every js file.
module.exports = {
  orderedList(array, element) {
    try {
      if (!element) {
        throw new Error('null and undefined are not valid elements');
      }
      let regexp = /[0-9]/;
      if (regexp.test(element)) {
        return element;
      }
      //create a new list
      let list = new listUtil();

      for (let i = 0; i < array.length; i++) {
        console.log(array);
        list.add(array[i]);
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
      /**
       * now sorting the list
       */
      let s = list.sortList();
      console.log('data after sorting..  ', s);
      let dataWrite = list.printList();
      fs.writeFileSync('./utility/numberSource.txt', dataWrite);
    } catch (Error) {
      if (Error == 'Error: null and undefined are not valid elements') {
        console.log('Terminating Program! Please enter a valid string');
        return element;
      }
    }
    return element;
  }
};
