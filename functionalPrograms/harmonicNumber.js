/************************************************************************************************
 * Execution : (default node cmd): node harmonicNumber.js
 *
 * Purpose   : To find nth harmonic number.
 *
 * @file     : harmonicNumber.js
 * @version  : 1.0
 * @author   : Rajat Sawarkar <rajatsawarkar95@gmail.com>
 * @since    : 17-04-2021
 *************************************************************************************************/

let Utility = require('../utility/Utility');
function nthHarmonicNumber() {
  try {
    Utility.harmonic();
  } catch (error) {
    console.error(error.message);
  }
}

nthHarmonicNumber();
