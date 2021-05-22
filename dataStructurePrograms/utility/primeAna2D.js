/******************************************************************************
 *  Execution       :   1. default node         cmd> node fileName.js
 *  Purpose         : TO deploy all the business logic.
 *  @file           : primeAna2D.js
 *  @overview       : ALl the business logic bus be here.
 *  @module         : read-line modules are installed
 *  @author         : rajatsawarkar95@gmail.com
 *  @version        : v1.0.0
 *  @since          : 26-04-2021
 ******************************************************************************/
/**
 * exports:if a object that get exposed to a module and it is by default in every js file.
 **/
module.exports = {
  /*
   * It will used to find the Anagram numbers in Prime Numbers
   */
  findAnaPrime(ii, jj) {
    let primes = this.findPrime(ii, jj);
    let n = primes.length;
    let anaPrimes = [];
    let h = 0;
    for (let i = 0; i < n - 1; i++) {
      for (let j = i + 1; j < n - 1; j++) {
        if (this.checkAnagram2(primes[i], primes[j])) {
          anaPrimes[h++] = primes[i];
          anaPrimes[h++] = primes[j];
        }
      }
    }
    return anaPrimes;
  },
  /**
   *  It will used to check the Anagram Numbers
   **/
  checkAnagram2(str1, str2) {
    let unsortedStr1 = '' + str1;
    let unsortedStr2 = '' + str2;
    if (unsortedStr1.length != unsortedStr2.length) {
      return false;
    }
    sortedStr1 = this.sort1(unsortedStr1);
    sortedStr2 = this.sort1(unsortedStr2);
    let b = this.check(sortedStr1, sortedStr2);
    if (b == true) {
      return true;
    } else {
      return false;
    }
  },
  /**
   *  It will used to find Prime Numbers
   **/
  findPrime(s1, s2) {
    let count = 0,
      flag = 0,
      k = 0;
    let prime = [];
    for (let i = s1; i <= s2; i++) {
      for (let j = 2; j < i; j++) {
        if (i % j == 0) {
          flag = 0;
          count++;
          break;
        } else {
          flag = 1;
        }
      }
      if (flag == 1) {
        prime[k++] = i;
      }
    }
    return prime;
  },
  /**
   *  It is used to check if both strings are same.
   **/
  check(s1, s2) {
    for (let i = 0; i < s1.length; i++) {
      if (s1.charAt(i) != s2.charAt(i)) {
        return false;
      }
    }
    return true;
  },
  /**
   *  It will used to sort the Items
   **/
  sort1(str) {
    let ch = str.split('');
    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j < str.length; j++) {
        if (ch[i] > ch[j]) {
          let t = ch[i];
          ch[i] = ch[j];
          ch[j] = t;
        }
      }
    }
    let sortedStr = '';
    for (let i = 0; i < ch.length; i++) {
      sortedStr += ch[i];
    }
    return sortedStr;
  }
};
