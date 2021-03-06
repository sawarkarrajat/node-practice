/************************************************************************************************
 * Execution : (default node cmd): node mergeSort.js
 *
 * Purpose   : To sort an array using merge sort.
 *
 * @file     : mergeSort.js
 * @version  : 1.0
 * @author   : Rajat Sawarkar <rajatsawarkar95@gmail.com>
 * @since    : 17-04-2021
 *************************************************************************************************/
let Utility = require('../utility/Utility');
const mergesort = () => {
  try {
    let arr = [];
    let res1 = Utility.inputArray(arr);
    let res2 = Utility.mergeSort(res1);
    console.log('Merge sorted result ' + res2);
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

mergesort();
