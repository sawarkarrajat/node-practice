/************************************************************************************************
 * Execution : 1. default node cmd> node bankingCashCounter.js
 *
 * Purpose   : to enqueue and dequeue people in a bank cash counter.
 *
 * @file     : bankingCashCounter.js
 * @version  : 1.0
 * @author   : Rajat Sawarkar <rajatsawarkar95@gmail.com>
 * @since    : 26-04-2021
 *
 *************************************************************************************************/

let queUtility = require('./utility/queueUtility').Queue;
let utility = require('../utility/Utility');
let qUtil = new queUtility();
/**
 * bankBalance to be used to perform operation
 */
function bankingCounter(params) {
  /**
   * create a new queue.
   **/
  let msg = 'not sufficient balance',
    chance = 0;
  let bankBalance = utility.inputInteger("Enter Bank's bankBalance: ");
  let num = utility.inputInteger('Enter queue length: ');
  qUtil.fillQueue(num);
  while (qUtil.size()) {
    chance++;
    console.log(
      '[' +
        chance +
        '] Press 1 to deposit money and Press 2 to withdrawal money: '
    );
    let option = utility.inputInteger('enter your choice: ');
    /*
     * if we deposit into the account it performs enqueue operation
     */
    if (option == 1) {
      let depositAmount = utility.inputInteger('Enter the amount to deposit: ');
      bankBalance = parseInt(bankBalance) + parseInt(depositAmount);
      qUtil.displayBankBalance(bankBalance);
    } else if (option == 2) {
      /*
       * if we withdraw from the account it performs dequeue operation
       */
      let withdrawAmount = utility.inputInteger(
        'Enter the amount to withdraw: '
      );
      if (bankBalance >= withdrawAmount) {
        bankBalance = parseInt(bankBalance) - parseInt(withdrawAmount);
        qUtil.displayBankBalance(bankBalance);
      } else {
        /*
         * if bank bankBalance is zero
         */
        console.log(msg);
      }
    } else {
      console.log('invalid input');
    }
    qUtil.dequeue();
  }
}
bankingCounter();
