/************************************************************************************************
 * Execution : (default node cmd): node inventoryManagement.js
 *
 * Purpose   : To maintaina an inventory and read data from json file and present
 *             to the user.
 * @file     : inventoryManagement.js
 * @version  : 1.0
 * @author   : Rajat Sawarkar <rajatsawarkar95@gmail.com>
 * @since    : 30-04-2021
 *************************************************************************************************/
let prompt = require('prompt-sync')(); //node-module prompt-sync
let fs = require('fs');
let util = require('./utility/inventoryManagementUtility');
let data = fs.readFileSync(
  '../oopsPrograms/JSONfiles/inventoryManagement.json'
); //read file from json
/*
 * function JSON.parse() is used to convert the string into a JavaScript Objects
 */
let jsonGrocery = JSON.parse(data);
//console.log(" data-->\n", jsonGrocery);
function inventory() {
  console.log('Inventory Details-->');
  console.log('1: Rice');
  console.log('2: Wheat');
  console.log('3: Pulses');
  /*
   * enter choices to select inventory
   */
  let item = prompt('Please enter your choice: ');
  /*
   * parse option to integer only
   */
  let result = util.display(parseInt(item), jsonGrocery);
  console.log(result);
  if (result == 'Error: choice is null') {
    console.log('\n\nchoice should be presented number only!\n\n');
  }
}
inventory();
