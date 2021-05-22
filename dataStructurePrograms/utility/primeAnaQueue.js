/******************************************************************************
 *  Execution       :   1. default node         cmd> node fileName.js
 *  Purpose         : TO deploy all the business logic.
 *  @file           : primeAnaQueue.js
 *  @overview       : ALl the business logic bus be here.
 *  @module         : read-line modules are installed
 *  @author         : rajatsawarkar95@gmail.com
 *  @version        : v1.0.0
 *  @since          : 26-04-2021
 ******************************************************************************/
let show = require('util');
/*
 * creating a Qnode class to create any new node with null values.
 */
class Qnode {
  constructor(key) {
    this.next = null;
    this.key = key;
  }
}
/*
 * creating QueuedLinkedList class to create any new node with null values.
 */
class QueuedLinkedList {
  constructor() {
    this.front = null;
    this.rear = null;
  }
  /*
   * it will add or store the items
   */
  enque(key) {
    let temp = new Qnode(key);
    if (this.rear == null) {
      this.rear = this.front = temp;
      return;
    }
    this.rear.next = temp;
    this.rear = temp;
  }
  /*
   * it will remove or access the items
   */
  deque() {
    if (this.front == null) {
      return null;
    }
    let temp = this.front;
    this.front = this.front.next;
    if (this.front == null) {
      this.rear = null;
    }
    return temp.key;
  }

  /*
   * it will display the calender
   */
  displayCalender(d) {
    let t = this.front;
    let t2 = this.front;
    let count = 0;
    while (t.key == ' ') {
      show.print('   ');
      t = t.next;
    }
    while (t != null) {
      count++;
      show.print(' ', t.key);
      if (t.key < 10) {
        show.print(' ');
      }
      if ((count + d) % 7 == 0) {
        console.log('');
      }
      t = t.next;
    }
    count = 0;
  }
}
/**
 * exports:if a object that get exposed to a module and it is by default in every js file.
 **/
module.exports = {
  QueuedLinkedList
};
