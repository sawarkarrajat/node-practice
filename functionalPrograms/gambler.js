/************************************************************************************************
 * Execution : (default node cmd): node gambler.js
 *
 * Purpose   : To create a program which randomly calculates wins and gambles.
 *
 * @file     : gambler.js
 * @version  : 1.0
 * @author   : Rajat Sawarkar <rajatsawarkar95@gmail.com>
 * @since    : 17-04-2021
 *************************************************************************************************/
let Utility = require('../utility/Utility');
try {
  function gambling() {
    Utility.gamble();
  }
} catch (error) {
  console.log('Error!', error);
}
gambling();
