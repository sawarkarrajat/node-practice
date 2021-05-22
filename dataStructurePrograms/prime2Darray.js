let Prime = require('./utility/primeNumber2D.js');
/******************************************************************************
 *  @Purpose        : Take a range of 0-1000 Numbers and find the Prime numbers in
                      that range.Store the prime numbers in a 2D Array, the first
                      dimension represents the range 0-­100,100­-200, and so on.While
                      the second dimension represents the prime numbers in that range.
 *  @file           : prime2Darray.js
 *  @overview       : Here we have to print the given range of prime numbers in 2D Array.
 *  @author         : Rajat Sawarkar <rajatsawarkar95@gmail.com>
 *  @version        : v1.0.0
 *  @since          : 26-04-2021
 ******************************************************************************/
let show = require('util');
let primes = [[], [], [], [], [], [], [], [], [], []];
let initial = 0;
let final = 100;
console.log('--Prime Numbers in the given range are :--\n');
/*
 * This condition calculates the initial to final value range
 */
for (let index = 0; index < 10; index++) {
  primes[index] = Prime.checkPrime(initial, final);
  initial = initial + 100;
  final = final + 100;
}
let start = 0;
let end = 100;
/*
 * This condition checks the prime number range from starting to ending values
 */
for (let index1 = 0; index1 < 10; index1++) {
  show.print(
    '[' + '[' + start + '-' + end + ']' + ' ' + '[' + primes[index1] + ']' + ']'
  );
  start = start + 100;
  end = end + 100;
  console.log();
}
