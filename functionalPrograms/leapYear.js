/************************************************************************************************
 * Execution : (default node cmd): node LeapYear.js
 *
 * Purpose   : To find the leap year via user input.
 *
 * @file     : LeapYear.js
 * @version  : 1.0
 * @author   : Rajat Sawarkar <rajatsawarkar95@gmail.com>
 * @since    : 17-04-2021
 *
 *************************************************************************************************/

let Utility = require('../utility/Utility');
try {
  function leapY() {
    Utility.leap();
  }
} catch (error) {
  console.log('Error!', error);
}

leapY();
