/************************************************************************************************
 * Execution : (default node cmd): node bubble.js
 *
 * Purpose   : To sort an array using bubble sort algorithm.
 *
 * @file     : bubble.js
 * @version  : 1.0
 * @author   : Rajat Sawarkar <rajatsawarkar95@gmail.com>
 * @since    : 17-04-2021
 *************************************************************************************************/
let Utility = require('../utility/Utility');
const bubblesort = () => {
  try {
    let arr = [];
    let result = Utility.bubbleSort(Utility.inputArray(arr));
    console.log(result);
  } catch (error) {
     console.error(error.message);
    throw error;
  }
};

bubblesort();
