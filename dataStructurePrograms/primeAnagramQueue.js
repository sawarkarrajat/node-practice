/******************************************************************************
 *  @Purpose        : Add the Prime Numbers that are Anagram in the Range of 0-1000
                      in a Queue using the Linked List and Print the Anagrams from the
                      Queue.
 *  @file           : primeAnagram.js
 *  @overview       : Here we have to display the Prime number with Anagram Numbers
                      in a Queue using the linked list.
 *  @author         : Rajat Sawarkar <rajatsawarkar95@gmail.com>
 *  @version        : v1.0.0
 *  @since          : 26-04-2021
 ******************************************************************************/
let primeAnaQueue = require('../dataStructurePrograms/utility/primeAnaQueue.js');
let primeAna = require('../dataStructurePrograms/utility/primeAna2D.js');
let show = require('util');
let queueLink = new primeAnaQueue.QueuedLinkedList();
let primes = [[], [], [], [], [], [], [], [], [], []];
let initial = 0;
let final = 100;
for (let i = 0; i < primes.length; i++) {
  queueLink.enque(primes[i]);
}
for (let i = 0; i < 10; i++) {
  primes[i] = primeAna.findPrime(initial, final);
  initial = initial + 100;
  final = final + 100;
}
let start = 0;
let end = 100;
for (let i = 0; i < 10; i++) {
  show.print(start + '-' + end + ' ---> ' + primes[i]);
  start = start + 100;
  end = end + 100;
  console.log();
}
