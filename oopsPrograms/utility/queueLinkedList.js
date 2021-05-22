/******************************************************************************
 *  Execution       : 1. default node         cmd> node fileName.js
 *  Purpose         : TO deploy all the business logic.
 *  @file           : queueLinkedList.js
 *  @overview       : ALl the business logic bus be here.
 *  @module         : read-line modules are installed
 *  @author         : Rajat Sawarkar <rajatsawarkar95@gmail.com>
 *  @version        : v1.0.0
 *  @since          : 2-04-2021
 ******************************************************************************/
/**
 * Queue implemented using LinkedList
 */
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
/**
 * creating Queue class to create any new node with null values.
 */
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  /**
   * it will add or store the items
   */
  enqueue(data) {
    let newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
  /**
   * it will remove or access the items
   */
  dequeue() {
    let newNode;
    if (this.head !== null) {
      newNode = this.head.data;
      this.head = this.head.next;
    }
    return newNode;
  }
  print() {
    let week = '';
    let curr = this.head;
    while (curr) {
      // console.log(curr.data);
      week += curr.data + ' ';
      curr = curr.next;
    }
    return week;
  }
  /**
   * it will display the items
   */
  display() {
    let curr = this.head;
    while (curr) {
      console.log(curr.data);

      curr = curr.next;
    }
  }
  /**
   * checks if queue is empty are not
   */
  isEmpty() {
    return this.head == null;
  }
  /**
   * it will display the calender
   */
  displayCalender(d) {
    let show = require('util');
    let t = this.head;
    let count = 0;
    while (t != null) {
      count++;
      show.print('  ', t.data);
      if (t.data < 10) {
        show.print(' ');
      }

      if ((count + d) % 7 == 0) {
        console.log('');
      }
      t = t.next;
    }
    count = 0;
  }
  /**
   * it will display the items
   */
  display2() {
    let t = this.head;
    let show = require('util');
    while (t != null) {
      show.print('  ' + t.data);
      if (t.next != null) show.print(' ');
      t = t.next;
    }
    console.log();
  }
  /*
   * it will display the items in reverse
   */
  displayReverse(head) {
    let show = require('util');
    if (head == null) return;

    this.displayReverse(head.next);
    show.print(head.data);
    if (head.next != head) show.print('-->');
  }
  /**
   * get the data
   */
  getHead() {
    return this.head;
  }
}
/**
 * exports if a object that get exposed to a module and it is by default in every js file.
 */
module.exports = { Queue };
