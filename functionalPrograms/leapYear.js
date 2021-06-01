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
function leapY() {
  try {
    Utility.leap();
  } catch (error) {
    console.error(error.message);
  }
}

leapY();
