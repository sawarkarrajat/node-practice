/************************************************************************************************
 * Execution : 1. default node cmd> node stackUtility.js
 *
 * Purpose   : Contains stack utility methods to create stack and perform operations.
 *
 * @file     : stackUtility.js
 * @author   : Rajat Sawarkar <rajatsawarkar95@gmail.com>
 * @since    : 24-04-2021
 *
 *************************************************************************************************/
// This Stack is written using the pseudoclassical pattern

// Creates a stack
class Stack {
  constructor() {
    this.count = 0;
    this.storage = [];
  }
  // Adds a value onto the end of the stack
  push(value) {
    // console.log(value);
    this.storage[this.count] = value;
    this.count++;
  }

  // Removes and returns the value at the end of the stack
  pop() {
    // Check to see if the stack is empty
    if (this.count === 0) {
      return undefined;
    }

    this.count--;
    let result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }

  //used to see the top element in the stack
  peek() {
    return this.storage[this.count];
  }

  //this function used to check if the stack is empty or not
  isEmpty() {
    if (this.size() == 0) {
      return true;
    } else {
      return false;
    }
  }

  // Returns the length of the stack
  size() {
    return this.count;
  }
}
module.exports = { Stack };
