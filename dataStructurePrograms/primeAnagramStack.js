/******************************************************************************
 *  @Purpose        : Add the Prime Numbers that are Anagram in the Range of 0-1000
                      in a Stack using the Linked List and Print the Anagrams in the
                      Reverse Order.
 *  @file           : primeAnagram.js
 *  @overview       : Here we have to display the Prime number with Anagram Numbers
                      in reverse order using stack in a linked list.
 *  @author         : Rajat Sawarkar <rajatsawarkar95@gmail.com>
 *  @version        : v1.0.0
 *  @since          : 26-04-2021
 ******************************************************************************/
let primeAnaStack = require('../dataStructurePrograms/utility/primeAnaStack.js');
let primeAna = require('../dataStructurePrograms/utility/primeAna2D.js');
function printAnaprimes() {
  let stackLink = new primeAnaStack.StackedLink();
  let anaPrimes = [[]];
  anaPrimes = primeAna.findAnaPrime(0, 1000);
  for (let i = 0; i < anaPrimes.length; i++) {
    stackLink.push(anaPrimes[i]);
  }
  console.log();
  console.log('------Initial LinkList------');
  stackLink.display();
  let top = stackLink.getHead();
  //console.log(top);
  console.log();
  console.log('------Reversed LinkList------');
  stackLink.displayReverse(top);
  //console.log(stackLink.peek());
}
printAnaprimes();
