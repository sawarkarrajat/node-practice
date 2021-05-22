/************************************************************************************************
 * Execution : (default node cmd): node distance.js
 *
 * Purpose   : To find distance between origin and given position x,y.
 *
 * @file     : distance.js
 * @version  : 1.0
 * @author   : Rajat Sawarkar <rajatsawarkar95@gmail.com>
 * @since    : 17-04-2021
 *************************************************************************************************/
let Utility = require('../utility/Utility');
try {
  function eDistance() {
    Utility.euclidist();
  }
} catch (error) {
  console.log('Error!', error);
}

eDistance();
