/*************************************************************************************************
 *  @Purpose        : Create a JSON file  maintain DateTime of the transaction in a
 *                    Queue implemented using Linked List to indicate when the transactions
 *                    were done.
 *  @file           : dateTime.js
 *  @overview       : In this we have to buy and sell the item and prints the item purchased timings
 *                    using Queue implemented using linkedlist
 *  @author         : Rajat Sawarkar <rajatsawarkar95@gmail.com>
 *  @version        : v1.0.0
 *  @since          : 2-04-2021
 ***************************************************************************************************/
let read = require('readline-sync');
let utility = require('../oopsPrograms/utility/queueLinkedList');
class Company {
  constructor(totalPrice) {
    this.totalPrice = 1;
  }
  /**
   * buy()=add data to the queue
   * @param {Number} num
   */
  buy(num) {
    for (let i = 0; i < num; i++) {
      /**
       * asking user to enter inputs
       */
      try {
        let Name = read.question('Enter the item want to purchase: ');
        if (!isNaN(Name)) throw 'invalid input';
        let number = read.question('Enter the number of items purchased: ');
        if (isNaN(number)) throw 'invalid input';
        let price = read.question('Enter the price per item: ');
        if (isNaN(price)) throw 'invalid input';
      } catch (err) {
       console.error(err.message);
      }
      /**
       * object customer
       */
      let customer = {
        name: Name,
        number: number,
        price: price
      };
      /**
       * adding cutomer object to the queue
       */
      queue.enqueue(customer);
      /**
       * calculating total price
       */
      let totalPrice = parseInt(num) * parseInt(price);
      console.log('The total price of :' + Name + ' is :' + totalPrice);
      /**
       * getting hrs,min,sec using date()
       */
      let date = new Date();
      let time =
        date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
      console.log('The purchase time is: ' + time);
    }
  }
  /**
   * sell()-subtract data from queue
   */
  sell() {
    try {
      let num = read.question('Enter the item number you want to sell: ');
      if (isNaN(num)) throw 'invalid input';
      /**
       * removing entry from the queue
       */
      for (let j = 0; j < num; j++) {
        queue.dequeue();
      }
      /**
       * getting hrs,min,sec from date function
       */
      let date = new Date();
      let time =
        date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
      console.log('The item is sold at--> ' + time);
    } catch (err) {
     console.error(err.message);
    }
  }
  /**
   * printing report
   */
  accountReport() {
    queue.print();
  }
}
/**
 * creating object for require file
 */
let queue = new utility.Queue();
/**
 * creating object for class
 */
let d = new Company();
/**
 * asking user to enter the stock value
 */
try {
  let num = read.question(
    'Please enter the total number of stocks you want to purchase : '
  );
  if (isNaN(num)) throw 'invalid input';
} catch (err) {
 console.error(err.message);
}
/**
 * calling functions
 */
d.buy(num);
d.accountReport();
d.sell();
