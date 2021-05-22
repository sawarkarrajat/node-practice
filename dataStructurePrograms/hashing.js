/******************************************************************************
 *  @Purpose        : Create a Slot of 10 to store Chain of Numbers that belong
                      to each Slot to efficiently search a number from a given set
                      of number.
 *  @file           : hashing.js
 *  @overview       : Here we have to store the numbers in slot and search the number
                      if that number in the list remove and if that number is not in the
                      list add that number into the specific slot or index.
 *  @author         : Rajat Sawarkar <rajatsawarkar95@gmail.com>
 *  @version        : v1.0.0
 *  @since          : 26-04-2021
 ******************************************************************************/
let utility = require('../dataStructurePrograms/utility/linkedList');
let readline = require('readline-sync');

let fs = require('fs');
let access = require('../dataStructurePrograms/util');

function hashing() {
  /*
   * it will access or read the file
   */
  let take = require('util');
  let file = fs.readFileSync('./utility/hash.txt', 'utf8');
  let num = file.split(' ');
  let arr = new Array(10);
  let remainder, n;

  for (let i = 0; i < num.length; i++) {
    n = Number(num[i]);
    remainder = n % 10;
    /*
     * this condition will calculate the value and returns remainder
     */
    if (arr[remainder] === undefined) {
      arr[remainder] = new utility.LinkedList();
      arr[remainder].add(n);
    } else {
      arr[remainder].add(n);
    }
  }
  let str = '';
  /*
   * this condition will stores the elements in index
   */
  for (let index = 0; index < 10; index++) {
    fs.writeFileSync('./utility/hash.txt', index + ' elements    ');
    try {
      arr[index].show();
    } catch (err) {
      console.log('empty index');
    }
  }
  let number = readline.question(' Enter the number you want to search \n');
  if (!isNaN(number)) {
    /*
        * this condition will calculate the value, returns remainder and stores in file
          through linkedlist
        */
    remainder = Number(number % 10);
    console.log(remainder);
    console.log(arr[1]);
    if (arr[remainder] === undefined) {
      arr[remainder] = new utility.LinkedList();
    }
    /*
     * this condition will checks the number , if number found in the file it will removed
     */
    if (arr[remainder].search(Number(number))) {
      console.log('The number is found in file');
      arr[remainder].remove(number);
    } else {
      /*
       * this condition will checks the number , if number not found in the file it will added
       */
      console.log('Number is not found in file');
      arr[remainder].add(number);
    }
    let flag;
    for (let index = 0; index < 10; index++) {
      flag = true;
      /*
       * it will prints the items and stores into file
       */
      fs.writeFileSync('./utility/hash.txt', index + ' result elements,    ');
      try {
        arr[index].show();
        str = str + arr[index].getData();
        if (arr[index] !== 'undefined' && index < arr.length - 2) {
          str = str + ' ';
        }
      } catch (err) {
        console.log('Empty index');
      }
    }
    console.log(str);
    /*
     * it will access the file
     */
    // access.writeFile('hash.txt', str);
    fs.writeFileSync('./utility/hash.txt', str);

    console.log('\n\n');
  } else {
    console.log('Wrong input ');
  }
}
hashing();
