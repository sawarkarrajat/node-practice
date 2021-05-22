/******************************************************************************
 *  Execution       :   1. default node         cmd> node fileName.js
 *  Purpose         : TO deploy all the business logic.
 *  @file           : calendar2D.js
 *  @overview       : ALl the business logic bus be here.
 *  @module         : read-line modules are installed
 *  @author         : rajatsawarkar95@gmail.com
 *  @version        : v1.0.0
 *  @since          : 11-05-2021
 ******************************************************************************/
let read = require('readline-sync');
/**
 * exports:if a object that get exposed to a module and it is by default in every js file.
 **/
module.exports = {
  isLeapYear(year) {
    /*
     * ensure year is of four digit
     */
    //condition for checking leap
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
      return true;
    } else {
      return false;
    }
  },
  /*
   * condition for calculate the day, month and year
   */

  day(day, month, year) {
    let y0 = year - Math.floor((14 - month) / 12);
    let x =
      y0 + Math.floor(y0 / 4) - Math.floor(y0 / 100) + Math.floor(y0 / 400);
    m0 = month + 12 * Math.floor((14 - month) / 12) - 2;
    let d0 = (day + x + Math.floor((31 * m0) / 12)) % 7;
    return d0;
  }
};
