/******************************************************************************
 *  @Purpose        : A palindrome is a string that reads the same forward and backward,
                      forexample,radar,toot,and madam. We would like to construct an
                      algorithm to input a string of characters and check whether it is a
                      palindrome.
 *  @file           : palindromeChecker.js
 *  @overview       : we will take dequeue here to check a string of character from left to
                      right and then pop the characters from front and rear and if it matches
                      then its a pallindrome otherwise its not a pallindrome.
 *  @author         : rajatsawarkar95.gmail.com
 *  @version        : v2.0
 *  @since          : 26-04-2021
 ******************************************************************************/
/*
 * creating deQueue function to create any new deQueue with null values.
 */
function deQueue() {
  this.string = new Array();
  /*
   * remove the item from back
   */
  this.popback = function () {
    return this.string.pop();
  };
  /*
   * add the item into back
   */
  this.pushback = function (item) {
    return this.string.push(item);
  };
  /*
   * remove the item from front
   */
  this.popfront = function () {
    return this.string.shift();
  };
  /*
   * add the item into front
   */
  this.pushfront = function (item) {
    return this.string.unshift(item);
  };
  /*
   * print dequeue
   */
  this.printQueue = function () {
    let str = '';
    for (let i = 0; i < this.string.length; i++) {
      str += this.string[i] + ' ';
    }
    return str;
  };
  /*
    returns the length of deQueue
    */
  this.size = function () {
    return this.string.length;
  };
}
/**
 * exports if a object that get exposed to a module and it is by default in every js file.
 */
module.exports = {
  /**
   *
   * @param {string} str - string to be checked if palidrome or not.
   */
  Palindrome(str) {
    /**
     * create a new deque.
     **/
    let deque = new deQueue();
    let array = [];
    array = str.split('');
    for (let i = 0; i < array.length; i++) {
      deque.pushback(array[i]);
    }
    console.log(deque.printQueue());
    let flag = true;
    /*
     * checks the deque size
     */
    if (deque.size() % 2 == 0) {
      /*
       * it will checks if the deque size is greater than zero
       */
      while (deque.size() > 0) {
        let a = deque.popfront();
        let b = deque.popback();
        if (a != b) {
          flag = false;
        }
      }
    } else {
      /*
       * it will checks if the deque size is greater than one
       */
      while (deque.size() > 1) {
        let a = deque.popfront();
        let b = deque.popback();
        if (a != b) {
          flag = false;
        }
      }
    }
    /*
     * if the strings are equal returns this statements
     */
    if (flag == true) {
      console.log('Palindrome');
    } else {
      console.log('Not a Palindrome');
    }
  }
};
