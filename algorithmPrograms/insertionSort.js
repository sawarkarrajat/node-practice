/************************************************************************************************
 * Execution : (default node cmd): node insertionSort.js
 *
 * Purpose   : To sort an array using insertion sort.
 *
 * @file     : insertionSort.js
 * @version  : 1.0
 * @author   : Rajat Sawarkar <rajatsawarkar95@gmail.com>
 * @since    : 17-04-2021
 *************************************************************************************************/
let Utility = require('../utility/Utility');
function insert() {
  try {
    let arr = [];
    let res = Utility.inputArray(arr);
    let res1 = Utility.insertion(res);
    console.log(res1);
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}

insert();
