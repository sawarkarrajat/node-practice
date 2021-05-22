module.exports = {
  display(choice, jsonStocks) {
    try {
      if (isNaN(choice) || choice === undefined || choice > 4 || choice < 1) {
        throw new Error("choice is null");
      }
      /**
       * prompt to take user input
       */
      let prompt = require('prompt-sync')();
      /**
       * weight will contain the amount of grain the user wants
       */
      let total = 0;

      switch (choice) {
        case 1:
          console.log("Price per share in Paytm is: " + jsonStocks.Stock[0].price);
          console.log("Total available shares of Paytm is: " + jsonStocks.Stock[0].numberOfShare);
          let share = prompt(
            'Please enter the number of shares you want to purchase: '
          );
          if (!isNaN(share) && share <= jsonStocks.Stock[0].numberOfShare) {
              let total = share * jsonStocks.Stock[0].price;
              /**
               * calculate total shares and print the price
               */
              console.log("Per Stock in " + jsonStocks.Stock[0].stockName + " is sold for Rs." + jsonStocks.Stock[0].price + " and for " + share + " shares the price would be Rs." + total);
          }
          else {
              console.log("please enter integers only! OR Enter shares less than or equal to available");
          }
          break;

        case 2:
          console.log("Price per share in PhonePe is: " + jsonStocks.Stock[1].price);
          console.log("Total available shares of PhonePe is: " + jsonStocks.Stock[1].numberOfShare);
          let share = prompt(
            'Please enter the number of shares you want to purchase: '
          );
          if (!isNaN(share) && share <= jsonStocks.Stock[1].numberOfShare) {
              let total = share * jsonStocks.Stock[1].price;
              /**
               * calculate total shares and print the price
               */
              console.log("Per Stock in " + jsonStocks.Stock[1].stockName + " is sold for Rs." + jsonStocks.Stock[1].price + " and for " + share + " shares the price would be Rs." + total);
          }
          else {
              console.log("please enter integers only! OR Enter shares less than or equal to available");
          }
          break;

        case 3:
          console.log("Price per share in Freecharge is: " + jsonStocks.Stock[2].price);
          console.log("Total available shares of Freecharge is: " + jsonStocks.Stock[2].numberOfShare);
          let share = prompt(
            'Please enter the number of shares you want to purchase: '
          );
          if (!isNaN(share) && share <= jsonStocks.Stock[2].numberOfShare) {
              let total = share * jsonStocks.Stock[2].price;
              /**
               * calculate total shares and print the price
               */
              console.log("Per Stock in " + jsonStocks.Stock[2].stockName + " is sold for Rs." + jsonStocks.Stock[2].price + " and for " + share + " shares the price would be Rs." + total);
          }
          else {
              console.log("please enter integers only! OR Enter shares less than or equal to available");
          }
          break;

        case 4:
          console.log("Price per share in GooglePay is: " + jsonStocks.Stock[3].price);
          console.log("Total available shares of GooglePay is:  " + jsonStocks.Stock[3].numberOfShare);
          let share = prompt(
            'Please enter the number of shares you want to purchase: '
          );
          if (!isNaN(share) && share <= jsonStocks.Stock[3].numberOfShare) {
              let total = share * jsonStocks.Stock[3].price;
              /**
               * calculate total shares and print the price
               */
              console.log("Per Stock in " + jsonStocks.Stock[3].stockName + " is sold for Rs." + jsonStocks.Stock[3].price + " and for " + share + " shares the price would be Rs." + total);
          }
          else {
              console.log("please enter integers only! OR Enter shares less than or equal to available");
          }
          break;
        /**
         * validating a number choice
         */
      }
    } catch (error) {
      return error;
    }
  }
}