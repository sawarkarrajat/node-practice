  class stockAccount {
    constructor(stockname, numberOfShare, shareprice) {
      /**
      * creating an object for stockname,numberofshare & shareprice
      */
      this.stockname = stockname;
      this.numberOfShare = numberOfShare;
      this.shareprice = shareprice;
    }
    /**
    * to buy shares
    */
    buy(arrayOfObjects) {
      let prompt = require('prompt-sync')();//node-module prompt-sync
      try {
        /**
        * add shares of stock to account
        */
        let stock = prompt('enter number of stocks you bought: ');
        if (isNaN(stock)) throw "invalid input"
      } catch (err) {
       console.error(err.message);
      }
      for (let i = 1; i <= stock; i++) {
        try {
          let name = prompt('enter the name: ');
          if (!isNaN(name)) throw "invalid input"

          let number = prompt('enter the number of share: ');
          if (isNaN(number)) throw "invalid input"

          let price = prompt('enter the price: ');
          if (isNaN(price)) throw "invalid input"

          arrayOfObjects.push({
            "name": name,
            "number_of_share": number,
            "price": price
          })
          console.log(arrayOfObjects);
        } catch (err) {
         console.error(err.message);
        }
      }
    }
    /**
    * logic for selling
    */
    sell(arrayOfObjects) {
      let prompt = require('prompt-sync')();//node-module prompt-sync
      console.log(arrayOfObjects);
      /**
      * subtract shares of stock from account
      */
      let i = prompt('which index u want to sell ? : ');
      /**
      * deleting the element
      */
      delete arrayOfObjects[i];
      console.log(arrayOfObjects);
    }
    /**
    * to save data to file
    */
    save(arrayOfObjects) {
      /**
      * save account to file
      */
      let res = JSON.stringify(arrayOfObjects)
      fs.writeFileSync('../oopsPrograms/JSONfiles/commercial.json', res, 'utf-8')
    }
    /**
    * to display the data
    */
    printReport(arrayOfObjects) {
      /**
      * print a detailed report of stock & values
      */
      let sum = 0;
      console.log(arrayOfObjects.length);
      for (let i = 0; i < arrayOfObjects.length; i++) {
        //console.log(i);
        let num = parseInt(arrayOfObjects[i].number_of_share * arrayOfObjects[i].price);
        console.log("the total price of each stock is: " + num);
        sum = parseInt(sum + num);
      }
      console.log("the total price of stock is: " + sum);
    }
  }
  module.exports = { stockAccount };
