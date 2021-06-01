/************************************************************************************************
 * Execution : (default node cmd): node vendingMaching.js
 *
 * Purpose   : Dispense minimum no. of notes of specified amount from Vending Machine.
 *
 * @file     : vendingMachine.js
 * @version  : 1.0
 * @author   : Rajat Sawarkar <rajatsawarkar95@gmail.com>
 *************************************************************************************************/

let Utility = require('../utility/Utility');
let readline = require('readline-sync');

try {
  function vendingM() {
    let val = readline.question('enter amoumt :');
    let totalNotes = Utility.vending(val, 0, 0);
    console.log('Total no.of notes is: ' + totalNotes);
  }
} catch (error) {
  console.error(error.message);
}
//method call for vending machine execution
vendingM();
