/************************************************************************************************
 * Execution : 1. default node cmd> node queueUtility.js
 *
 * Purpose   : Contains queue utility methods to create queue and perform operations.
 *
 * @file     : queueUtility.js
 * @author   : Rajat Sawarkar <rajatsawarkar95@gmail.com>
 * @since    : 26-04-2021
 * @file     : primeNumber2D.js
 * @overview : ALl the business logic bus be here.
 * @module   : read-line modules are installed
 * @version  : v1.0.0
 *
 *************************************************************************************************/

/**
 * Creates a Queue in bank
 */

class Queue {
  constructor() {
    this.count = 0;
    this.queue = [];
  }

  /**
   *
   * @param {Integer} num - number of people in queue added
   */
  fillQueue(num) {
    for (let i = 0; i < num; i++) {
      this.enqueue(i);
    }
  }

  /**
   * @param {Integer}  person - person to be added to the que
   */
  enqueue(person) {
    this.queue.unshift(person);
    this.count++;
  }

  /**
   * Removes and returns the person at the end of the stack
   */
  dequeue() {
    /**
     * Check to see if the stack is empty
     */
    if (this.count === 0) {
      return undefined;
    }
    /**
     * delete this.queue[0];
     */
    let result = this.queue.shift();
    this.count--;
    return result;
  }

  /**
   *
   * @param  {Integer} bankBalance - stores bank balance
   * method is used to display current bankbalance.
   */
  displayBankBalance(bankBalance) {
    console.log('Total bankBalance is = ' + bankBalance);
    return bankBalance;
  }

  /**
   * method to display contents of queue
   */

  /**
   * used to see the top element in the queue
   */
  head() {
    return this.queue[0];
  }

  /**
   * this function used to check if the queue is empty or not
   */
  isEmpty() {
    if (this.size() == 0) {
      return true;
    } else {
      return false;
    }
  }

  /**
   *  Returns the length of the queue
   */
  size() {
    return this.count;
  }
}
module.exports = { Queue };
