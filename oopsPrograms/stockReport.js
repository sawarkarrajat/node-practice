/*******************************************************************************************
 *  @Purpose        : To print a stock report and present the data from a json file
 *  @file           : stockReport.js
 *  @overview       : Read the data from json file and calculate the stock prices
 *                    and display them to the user.
 *  @author         : Rajat Sawarkar <rajatsawarkar95@gmail.com>
 *  @version        : v1.0.0
 *  @since          : 31-04-2021
 *******************************************************************************************/

let prompt = require('prompt-sync')(); //node-module prompt-sync
let util = require('./utility/stockReportUtility');
let fs = require('fs');
let data = fs.readFileSync('../oopsPrograms/JSONfiles/stockReport.json'); //read file from json
/*
 * function JSON.parse() is used to convert the string into a JavaScript Objects
 */
let jsonStocks = JSON.parse(data);

function stocks() {
  console.log('Stock Details-->');
  console.log('1: Paytm');
  console.log('2: PhonePe');
  console.log('3: Freecharge');
  console.log('4: GooglePay');
  /*
   * enter choices to select company stocks details
   */
  let choice = prompt('Please enter your choice: ');
  /*
   * parse option to integer only
   */
  let result = util.display(parseInt(choice), jsonStocks);
  //console.log(result);
  if (result == 'Error: choice is null') {
    console.log('\n\nchoice should be presented number only!\n\n');
  }
}
stocks();
