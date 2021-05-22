/************************************************************************************************
 * Execution : 1. default node cmd> node Utility.js
 *
 * Purpose : Contains all the common reused methods
 *
 * @file : Utility.js
 * @module : Bridgelabz Utility function contains all the logical and repetative methods.
 * @author : Rajat Sawarkar <rajatsawarkar95@gmail.com>
 * @since : 16-04-2021
 *
 *************************************************************************************************/
/*
 *@purpose     : To get user input value
 *@description : call this method whenever we want take input from user
 *               and return the value.
 */
let readline = require('readline-sync');
let count = 0;

//to export the methods when needed
module.exports = {
  //choice to input choice and return it.
  choice() {
    let userInput =
      readline.question(
        "Enter your choice:('press y for yes and anything else for no'): "
      )
      .toLowerCase();
    return userInput === 'yes' || userInput === 'y' ? true : false;
  },
  //method to take input from user- integer,string and floating point number.
  inputInteger(quest) {
    let number = parseInt(readline.question(quest + ''));
    return number;
  },

  inputString(quest) {
    let sequence = readline.question(quest + '');
    return sequence;
  },

  inputFloat(quest) {
    let fnumber = parseFloat(readline.question(quest + ''));
    return fnumber;
  },

  inputArray(userArray, arraySize) {
    for (let i = 0; i < arraySize; i++) {
      let element = userArray[i];
    }
    return userArray;
  },

  input() {
    let readLine = require('readline');
    let rl = readLine.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    return rl;
  },

  message(msg) {
    console.log('\n', msg);
  },
  //template for method definations
  /*
   * @Purpose    :
   * @param      :
   * @description:
   * @function   :
   */

  //Algorithm Programs

  /*
   *@purpose    : is to dispence total minimum number of notes from vending machine
   *@param      : value-user inputed value
   *               I - zero
   *               TOTAL-zero
   *@description: take a number from user and calculate minimum number of notes has to return
   *              vending machine use recursion method,and return the value
   */
  vending(value, I, TOTAL) {
    // array to store values of notes
    let NOTES = [1000, 500, 100, 50, 10, 5, 2, 1];
    /*
     * Function to find the notes and print the output
     * @param value the amount to which the note to despenced
     */
    if (Math.floor(value / NOTES[I] > 0)) {
      console.log(NOTES[I] + 'rs notes :' + Math.floor(value / NOTES[I]));
      TOTAL = TOTAL + Math.floor(value / NOTES[I]);
      value = value % NOTES[I];
      this.vending(value, I + 1, TOTAL);
    }

    if (value == 0 && I == NOTES.length) {
      return TOTAL;
    }
  },

  /*
   * @Purpose    : to sort string array using bubble sort algorithm.
   * @param      : arr1-String[]Array is passed.
   * @description: this method sorts array in ascending order
   *               using bubble sort algorithm.
   */
  bubbleSortString(arr1) {
    let n;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        if (arr1[j] > arr1[j + 1]) {
          let temp = arr1[j];
          arr1[j] = arr1[j + 1];
          arr1[j + 1] = temp;
        }
        /* for (let i = 0; i < arr1.length; i++) {}
        console.log(arr1 + ""); */
      }
    }
    return arr1;
  },

  /*
   *@purpose    : generate the bubble sort array  for given array
   *@param      : res-array
   *@description: take array,arrange elements according size using bubble sort,and return the result
   */
  bubbleSort(res) {
    // compare first and next elements in array and arrange
    for (let i = 0; i < res.length; i++) {
      for (let j = i + 1; j < res.length; j++) {
        if (res[i] > res[j]) {
          let temp = res[i];
          res[i] = res[j];
          res[j] = temp;
        }
      }
    }
    return res;
  },
  /*
   * @Purpose    : to binary search a string in string array.
   * @param      : arr1-Array and strin-String to be searched
   * @description: using recursive method call to search string
   *               in array binary search.
   */

  binarySrchString(arr1, string) {
    //console.log("in binary search " + arr1);
    let n = string.length;
    let l = 1;
    let tem;
    while (tem != string) {
      if (n < l) break;
      let m = l + Math.floor((n - l) / 2);

      if (arr1[m] < string) l = m + 1;
      else if (arr1[m] > string) n = m - 1;
      else if (arr1[m] == string) {
        //console.log("String  is present");
        tem = string;
        return true;
      } else {
        break;
        return false;
      }
    }
  },

  /*
   * @purpose     : calculate the binary value
   * @param       : num-decimal value from user
   * @description : take decimal value from user and convert that into binary value
   */
  toBinary(num) {
    let str = '';
    while (num > 0) {
      let r = num % 2;
      let str = r + str;
      num = Math.floor(num / 2);
    }
    //padding generate 4 byte
    while (str.length < 8) {
      str = '0' + str;
    }
    return str;
  },
  /*
   *@purpose    : to find the monthly-payment and prints the results
   *@param      : principle-principle value from commandline
   *              year-year value from command line
   *              rate- rate value from command line
   *@description: take command line input of principle and year and rate
   *              and find the monthly payment
   */
  payment(principle, year, rate) {
    //formula to calculate the result
    let R = rate / (12 * 100);
    let n = 12 * year;
    let rs = Math.pow(1 + R, -n);
    let calculation = (principle * R) / (1 - rs);
    return calculation;
  },

  /*
   * @Purpose    : find day on a particular date on a given month and year.
   * @param      : d-day,m-month,y-year
   * @description: using formulae to find day on a given date.
   */
  dayOfWeek(year, month, day) {
    let tick = [0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4];
    year -= month < 3;
    return (
      (year + year / 4 - year / 100 + year / 400 + tick[month - 1] + day) % 7
    );
  },

  dayFinder(dayOfWeekCount) {
    let dDay = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday'
    ];
    return dDay[dayOfWeekCount];
  },

  /*
   *@purpose    : generate the insertion sort array for given array
   *@parameter  : res-array
   *@description: take array,arrange elements according size using insertion sort,and return the result
   * */
  insertion(res) {
    for (let i = 1; i < res.length; i++) {
      let point = res[i];
      let j = i - 1;
      while (j >= 0 && res[j] > point) {
        res[j + 1] = res[j];
        j = j - 1;
      }
      res[j + 1] = point;
    }
    return res;
  },

  /*
   *@purpose     : sort the array using the merge sort technique
   *@parameter   : res-array
   *@description : take array,divide into two halves,and sort the elements for both
   *               right and left halves
   */
  mergeSort(res) {
    let n = res.length;
    //if size is less than 2 return that.
    if (n < 2) {
      return;
    }
    //cal mid value
    let mid = Math.floor(n / 2);
    let left = [mid];
    let right = [n - mid];
    //store  elements in left array which are present before the mid
    for (let i = 0; i < mid; i++) {
      left[i] = res[i];
    }
    //store  elements in left array which are present before the mid
    for (let j = mid; j < n; j++) {
      right[j - mid] = res[j];
    }
    //call mergesort for left halve
    this.mergeSort(left);
    //call mergesort for right halve
    this.mergeSort(right);
    let result = this.merge(left, right, res);
    return result;
  },
  // merge method of merge sort
  merge(arr, brr, crr) {
    let i = 0;
    let j = 0;
    let k = 0;
    //merge elements into crr[]
    while (i < arr.length && j < brr.length) {
      if (arr[i] <= brr[j]) {
        crr[k] = arr[i];
        i++;
      } else {
        crr[k] = brr[j];
        j++;
      }
      k++;
    }
    // if arr[] is greater than brr[], push all arr[] into crr[]
    while (i < arr.length) {
      crr[k] = arr[i];
      i++;
      k++;
    }
    // if arr[] is lesser than brr[], push all brr[] into crr[]
    while (j < brr.length) {
      crr[k] = brr[j];
      j++;
      k++;
    }
    return crr;
  },

  //method to input array
  inputArray(arr) {
    let size = readline.question('Enter size of array:  ');
    for (let i = 0; i < size; i++) {
      arr[i] = readline.question('enter element no. [' + i + ']=  ');
    }
    return arr;
  },

  // method to find power
  isPowerOfTwo(n) {
    if (n == 0) return false;
    while (n != 1) {
      if (n % 2 != 0) return false;
      n = n / 2;
    }
    return true;
  },
  /*
   *@purpose     : is to find the number of user guess
   *@param       : low-zer0
   *               high-user input -1
   *@description : ask the user to enter 2's power value,and find his guessing number,
   *               use recursion method return that number
   */

  search(low, high) {
    count++;
    if (high - low == 1) {
      return low;
    }
    let mid = low + Math.floor(high - low) / 2;
    console.log('Questions no.' + count + ' Is it less than ' + mid + ' ?');
    let ans = readline.question('Enter (0 for No) and (1 for Yes) ');
    console.log(' ');
    if (ans === '1') {
      return this.search(low, mid);
    } else {
      return this.search(mid, high);
    }
  },

  /*
   *@purpose     : To check the number wheather its palindrome or not
   *@parameter   : num-user input number
   *@description : take number from user input and check its palindrome or not
   */
  palindrome(num) {
    let temp = num;
    let rem = 0,
      rev = 0;
    //loop untill num is not equal to zero
    while (num != 0) {
      //take reminder of the number
      rem = num % 10;
      //keep on adding element
      rev = rev * 10 + rem;
      //devide the number to get next digit of given number
      num = Math.floor(num / 10);
    }
    // check both number are equal and return result
    if (temp == rev) {
      return true;
    } else {
      return false;
    }
  },

  //method for recursive check of prime numbers
  isPrime(number) {
    if (number == 0 || number == 1) {
      return false;
    }
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        return false;
      }
    }

    if (number.toString().length > 1) {
      if (this.palindrome(number)) {
        console.log(number + ' is pallindrome ');
      }
    }
    return true;
  },

  // method to check the prime numbers
  primeNum(res) {
    let arr = [],
      count = 0;
    for (let i = 2; i < res; i++) {
      if (this.isPrime(i)) {
        let n = parseInt(i);
        arr[count++] = n;
        console.log(n);
      }
    }
    return arr;
  },
  /*
   * @Purpose    : To check if Anagram Exists or not.
   * @param      : s1,s2 two strings
   * @description: take two user inputs and converts them into character
   *               array, sorts them and then compares them.
   * @function   : method will convert string to char array and then sort them
   *               and compare them.
   */
  anagramCheck(s1, s2) {
    let str1 = [];
    let str2 = [];

    if (s1.length == s2.length) {
      for (let i = 0; i < s1.length; i++) {
        str1[i] = s1.charAt(i);
      }
      for (let i = 0; i < s2.length; i++) {
        str2[i] = s2.charAt(i);
      }
      str1.sort();
      let j1 = str1.join('');

      str2.sort();
      let j2 = str2.join('');

      if (j1 == j2) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  },

  //Functional Programs

  /*
   * @Purpose    : To calculate quadratic roots of an expression
   * @param      : a,b,c - variable constancts in a*x*x + b*x + c.
   * @description: in this method we will calculate delta and two roots using
   *               given formulae.
   * @function   : returns roots as an array of two.
   */
  qroots(a, b, c) {
    let delta = Math.pow(b, 2) - 4 * a * c;
    let roots = new Array();
    roots[0] = (-b + Math.sqrt(delta)) / (2 * a);
    roots[1] = (-b - Math.sqrt(delta)) / (2 * a);

    return roots;
  },

  /*
   * @purpose    : to get the time in seconds
   * @Description: create object of Date and get time
   *                in seconds by using inbuild function
   */
  getCurrentTime() {
    let date = new Date();
    let sec = date.getSeconds();
    return sec;
  },
  /*
   * @purpose    : to get the time in seconds
   * @parameter  : start-when execution start
   * @parameter  : stop - when execution stop
   * @Description: create object of Date and get time
   *               in seconds by using inbuild function
   */
  elapsedTime(start, stop) {
    let elapsed = stop - start;
    return elapsed;
  },

  /*
   * @Purpose    : To find Euclidean distance between origin and point (x,y).
   * @param      : x - distance horizontal,y - distance vertical.
   * @description: calculating distance using given formulae.
   * @function   : to display distance from origin to point.
   */
  euclidist() {
    let x = readline.question('Enter value of X: ');
    let y = readline.question('Enter value of Y: ');

    let distance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    console.log(`distance from (${x}, ${y}) to (0, 0) = ${distance}`);
  },

  /*
  *@purpose      : to print Two Dimensional Array,from user input elements.
  *@parameter    : row-number of rows.
  column-number of columns.
  *@description  : ask user to enter total number of column and row.
  *                convert into two Dimenstional array format and prints.
  *@function     : displays array of user defined resolution and data.
  */
  twoDArr(row, col) {
    try {
      if (row == null || col == null || row < 0 || col < 0) {
        throw new error('row and columns cannot be null or empty');
      }
      let arr = [];
      console.log('enter elements ');
      //to generate the multi-dimensional array
      for (let i = 0; i < row; i++) {
        arr.push([]);
        // adding elements by elements in generated array
        for (let j = 0; j < col; j++) {
          arr[i][j] = readline.question('');
        }
      }
      return arr;
    } catch (error) {
      return error;
    }
  },

  /*
   * @Purpose    : To find number of wins and percentage
   *               of wins through gambling.
   * @param      : trials -no of times he wants to play
   * @description: the game continue upto,he lost his total
   *               number of times he want play.
   * @function   : display gambler won or not.
   */
  gamble() {
    //stake - ammount that player has
    let stake = readline.question('Enter the stake value: ');
    //goal-amount that player wants aim for
    let goal = readline.question('Enter the goal value: ');
    //total no of times player wants to gamble
    let trials = readline.question('Enter no. of times: ');

    let win = 0;
    let noftimes = 0;

    //loop upto win and lost his all stake and upto total number of times he wants play
    while (stake != 0 && goal != stake && noftimes < trials) {
      // genearate the random number to check weather he wins or lost
      let ran = Math.round(Math.random());
      if (ran == 1) {
        stake++;
        win++;
      } else {
        stake--;
      }
      noftimes++;
    }
    //calculate the total percentage
    let wining = (win / trials) * 100;
    let loosing = 100 - wining;

    console.log('Number of wins ' + win);
    console.log('wining percentage ' + wining);
    console.log('lossing percentage ' + loosing);
  },

  /*
   * @Purpose    : To find nth harmonic number using regular expression.
   * @param      : n- user input value for nth term
   * @description: Declaring the function and asking for user input
   *               and printing the nth harmonic number by calculating it
   *               using regular expression.
   * @function   : displays nth harmonic term.
   */
  harmonic() {
    let n = readline.question('Enter the Nth harmonic term for calculation:  ');

    let sum = 0;

    for (let i = 1; i <= n; i++) {
      sum = sum + 1 / i;
    }
    console.log('Nth harmonic term is ' + sum);
  },

  /*
  * @Purpose    : By ensuring username with minimum 3 characters,replacing USERNAME with userinput
  and print the string.
  * @param      :a- user input value
  * @description: Declaring the function and passing the userinput as argument.
  * @function   : diplayname takes the userinput and print it with some sentence.
  */
  replaceS(name) {
    //variable to store demo string
    let demoString = 'Hello <<UserName>>, How are you?';
    //printing the demo string
    console.log(`PREVIOUS VERSION  ${demoString}`);

    //variable to store user input

    if (name.length >= 3) {
      //replacing the string using replace method in turn with uppercase method
      demoString = demoString.replace('<<UserName>>', name.toUpperCase());

      //displaying the operated string
      console.log('NOW               ' + demoString);
    }
  },

  /*
  * @purpose     : Taking input as a fourdigit number check whether the given number is a leap year
  or not.
  * @description : Declaring the function and passing a four digit number from userinput
  * @function    : Function compares the length of given number and prints the number
  is a leap year or not
  */
  leap() {
    // ensure year is of four digit
    let year = readline.question('Enter the year ');
    if (year.length == 4 && year != 0) {
      //condition for checking leap year or not
      if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
        console.log('This is a leap year ');
      } else {
        console.log('This is not a leap year ');
      }
    } else {
      console.log('INVALID YEAR -- EXITING EXECUTION');
    }
  }
};
