/************************************************************************************************
 * Execution : (default node cmd): node monthlyPayments.js
 *
 * Purpose   : To calculate monthly payments.
 *
 * @file     : monthlyPayments.js
 * @version  : 1.0
 * @author   : Rajat Sawarkar <rajatsawarkar95@gmail.com>
 * @since    : 18-04-2021
 *************************************************************************************************/
let Utility = require('../utility/Utility');
const payment = () => {
  try {
    let P = +process.argv[2];
    let Y = +process.argv[3];
    let R = +process.argv[4];
    let pay = Utility.payment(P, Y, R);
    console.log('Monthly payment ' + pay);
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

payment();
