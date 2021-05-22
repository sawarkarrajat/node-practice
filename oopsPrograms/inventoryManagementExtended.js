/*************************************************************************************************
 *  @Purpose        : To create the JSON from Inventory Object and output the JSON String.
 *  @file           : inventoryManagement.js
 *  @overview       : To Extend the inventory program to Create InventoryManager to manage the Inventory.
 *                    The Inventory Manager will use InventoryFactory to create Inventory Object from JSON.
 *                    The InventoryManager will call each Inventory Object in its list to calculate the Inventory
 *                    Price and then call the Inventory Object to return the JSON String.
 *  @author         : Rajat Sawarkar<rajatsawarkar95@gmail.com>
 *  @version        : v1.0.0
 *  @since          : 31-04-2021
 ***************************************************************************************************/
/**
 * using all the file handelling operation
 */
let fs = require('fs');
/**
 * using prompt-sync asking user to enter the input
 */
let prompt = require('prompt-sync')();
/**
 * reading data from a json file
 */
let data = fs.readFileSync(
  '../oopsPrograms/JSONfiles/inventoryManagementExtended.json'
);
/**
 * printing data from json file
 */
console.log('Data in a json file is\n' + data);
/**
 * for holding the object
 */
let arrayOfObjects = JSON.parse(data);
console.log(' ');
let totalPrice = 1;
function inventoryMenue() {
  console.log(' ');
  console.log('Inventory Management-->'); //menue
  console.log(' 1: Insert\n 2: Delete\n 3: Exit');
  /**
   * asking user to enter the choice
   */
  try {
    let choice = prompt('Please enter your choice: ');
    if (choice > 3 || isNaN(choice)) throw 'invalid input';
    /**
     * Insert Operation
     */
    if (choice == '1') {
      nameRestriction = /[a-z]/gi;
      try {
        let num = prompt('Enter No. of times you want to add item: ');
        if (isNaN(num)) throw 'invalid input';
      } catch (err) {
        console.log(err);
      }
      for (let i = 0; i < num; i++) {
        try {
          let Name = prompt('Please enter the item you want to add: ');
          if (!isNaN(Name)) throw 'invalid input';
          let weight = prompt('Please enter the number of Kgs: ');
          if (isNaN(weight)) throw 'invalid input';
          let price = prompt('Please enter the price per Kg.: ');
          if (isNaN(price)) throw 'invalid input';
        } catch (err) {
          console.log(err);
        }
        if (
          nameRestriction.test(Name) &&
          isNaN(weight) != -1 &&
          isNaN(price) != -1
        ) {
          arrayOfObjects.push({
            stockName: Name,
            Number_of_Kgs: weight,
            Price: price
          });
        } else {
          console.log('Invalid input for name,weight and price!');
          return false;
        }
        console.log(arrayOfObjects);
        console.log('');
        /**
         * calculating total price
         */
        totalPrice = parseInt(num) * parseInt(price);
        console.log('');
        /**
         * calculating the total price for new shares
         */
        console.log('The total price of the stock is ' + totalPrice);
        /**
         * writing arrayOfObjects on json file
         */
        fs.writeFileSync(
          '../oopsPrograms/JSONfiles/inventoryManagementExtended.json',
          JSON.stringify(arrayOfObjects),
          'utf-8',
          function () {
            console.log('done');
          }
        );
        /**
         * reading json file after insertion
         */
        let data = fs.readFileSync(
          '../oopsPrograms/JSONfiles/inventoryManagementExtended.json',
          'utf-8'
        );
        console.log('after insertion data is\n' + data);
        inventoryMenue();
      }
    } else if (choice == '2') {
      /**
       * Delete Operation
       */
      /**
       * asking user to enter product name
       */
      let del = prompt(
        'Please enter the name of item you want to delete from the inventory: '
      );
      /**
       * deleting item from the jason file
       */
      for (let i = 0; i < arrayOfObjects.length; i++) {
        if (del == arrayOfObjects[i].stockName) {
          let index = arrayOfObjects.indexOf(arrayOfObjects[i]);
          arrayOfObjects.splice(index, 1);
        }
      }
      console.log('after deletion data is');
      arrayOfObjects.forEach((element) => {
        console.log(element);
      });
      fs.writeFileSync(
        '../oopsPrograms/JSONfiles/inventoryManagementExtended.json',
        JSON.stringify(arrayOfObjects),
        'utf-8',
        function (err) {
          if (err) throw err;
          console.log('Done!');
        }
      );
      inventoryMenue();
    } else choice == '3';
    /**
     * Exit from inventory management system
     */
    process.exit();
  } catch (err) {
    console.log(err);
  }
}
/**
 * calling function
 */
inventoryMenue();
