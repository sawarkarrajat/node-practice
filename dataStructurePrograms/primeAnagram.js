/*********************************************************************************************
 *  @Purpose        : In this program we have to store the Prime Number and Anagram Number.
 *                    For e.g.17 and 71 are both Prime and Anagrams.Like that 0 to 1000 range.
 *                    Further store in a 2D Array the numbers that are Anagram and numbers
 *                    that are not Anagram.
 *  @file           : primeAnagram.js
 *  @overview       : Here we have to print the given range of Prime Numbers with Anagram and
 *                    Prime Numbers with not an Anagram in 2D Array.
 *  @author         : Rajat Sawarkar <rajatsawarkar95@gmail.com>
 *  @version        : v1.0.0
 *  @since          : 26-04-2021
 **********************************************************************************************/
let primeAna = require('../dataStructurePrograms/utility/primeAna2D.js');
let show = require('util');
let anaPrimes = [[], [], [], [], [], [], [], [], [], []];
let initial = 0;
let final = 1000;
/*
 * This condition calculates the initial to final value range
 */
for (let index = 0; index < 1; index++) {
  anaPrimes[index] = primeAna.findAnaPrime(initial, final);
  //initial = initial + 100;
  //final = final + 100;
}
let start = 0;
let end = 1000;
console.log('---Range of Prime numbers which are Anagrams---');
console.log('');
/*
 * This condition checks the Prime & Anagram number range from starting to ending values
 */
for (let index1 = 0; index1 < 1; index1++) {
  show.print(
    '[' +
      '[' +
      start +
      '-' +
      end +
      ']' +
      ' ' +
      '[' +
      anaPrimes[index1] +
      ']' +
      ']'
  );
  //start = start + 100;
  //end = end + 100;
  console.log('\n');
}
