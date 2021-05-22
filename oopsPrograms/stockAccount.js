/*************************************************************************************************
 *  @Purpose        : To create the JSON from Inventory Object and output the JSON String.
 *  @file           : stockAccount.js
 *  @overview       : To Extend the inventory program to Create InventoryManager to manage the Inventory.
                      The Inventory Manager will use InventoryFactory to create Inventory Object from JSON.
                      The InventoryManager will call each Inventory Object in its list to calculate the Inventory
                      Price and then call the Inventory Object to return the JSON String.
 *  @author         : Rajat Sawarkar<rajatsawarkar95@gmail.com>
 *  @version        : v1.0.0
 *  @since          : 1-04-2021
 ***************************************************************************************************/
let fs = require('fs');
let prompt = require('prompt-sync')(); //node-module prompt-sync
let data = fs.readFileSync('../oopsPrograms/JSONfiles/stockAccount.json'); //read file from json
let stockAccUtil = require('./utility/stockAccountUtility').stockAccount;
/*
 * function JSON.parse() is used to convert the string into a JavaScript Objects
 */
let arrayOfObjects = JSON.parse(data);
/**
 * creating a stockAccount node to create any new node with null values.
 */

let obj = new stockAccUtil();
while (1) {
  console.log('\n');
  console.log('1.Buy Stocks');
  console.log('2.Sell Stocks'); /**print all the choices to user */
  console.log('3.Print Stock Report');
  console.log('4.Save file');
  console.log('5.Quit');
  let choice = prompt('choose an option to continue:  ');
  switch (choice) {
    /**
     * switch case implementation to perform the required operation
     */
    case '1':
      /**
       * method call to buy stocks
       */
      obj.buy(arrayOfObjects);
      break;
    case '2':
      /**
       * method call to sell shares/stocks
       */
      obj.sell(arrayOfObjects);
      function filterByID(item) {
        console.log(item.name);
        if (item.name !== undefined) {
          return true;
        }
        count++;
        return false;
      }
      arrayOfObjects = arrayOfObjects.filter(filterByID);
      console.log('Filtered Array\n', arrayOfObjects);
      break;
    case '3':
      /**
       * method call to print the available stocks
       */
      obj.printReport(arrayOfObjects);
      break;
    case '4':
      /**
       * method call to save data to a file commericial.json
       */
      obj.save(arrayOfObjects);
      break;
    case '5':
      /**
       * exit the looping flow
       */
      process.exit();
    default:
      console.log('No Such Option ');
      break;
  }
}
