module.exports = {
  display(item, jsonGrocery) {
    try {
      if (isNaN(item) || item === undefined || item > 3 || item < 1) {
        throw new Error("choice is null");
      }
      /**
       * prompt to take user input
       */
      let prompt = require('prompt-sync')();
      /**
       * weight will contain the amount of grain the user wants
       */
      let weight;

      switch (item) {
        case 1:
          weight = prompt("Please enter the weight of rice you want to purchase: ");
          if (!isNaN(weight)) {
            for (let i = 0; i < jsonGrocery.Rice.length; i++) {
              /*
               * calculate total and print
               */
              console.log(
                'Per Kg. of ' +
                  jsonGrocery.Rice[i].name +
                  ' costs ' +
                  jsonGrocery.Rice[i].price +
                  ' and for ' +
                  weight +
                  ' Kgs. costs ' +
                  weight * jsonGrocery.Rice[i].price
              );
            }
          } else {
            console.log("please enter integers only!");
          }
          break;
        case 2:
          weight = prompt("Please enter the weight of wheat you want to purchase: ");
          if (!isNaN(weight)) {
            for (let i = 0; i < jsonGrocery.Wheats.length; i++) {
              /*
               * calculate total and print
               */
              console.log(
                'Per Kg. of ' +
                  jsonGrocery.Wheats[i].name +
                  ' costs ' +
                  jsonGrocery.Wheats[i].price +
                  ' and for ' +
                  weight +
                  ' Kgs. costs ' +
                  weight * jsonGrocery.Wheats[i].price
              );
            }
          } else {
            console.log("please enter integers only!");
          }
          break;
        case 3:
          weight = prompt("Please enter the weight of pulses you want to purchase: ");
          if (!isNaN(weight)) {
            for (let i = 0; i < jsonGrocery.Pulses.length; i++) {
              /*
               * calculate total and print
               */
              console.log(
                'Per Kg. of ' +
                  jsonGrocery.Pulses[i].name +
                  ' costs ' +
                  jsonGrocery.Pulses[i].price +
                  ' and for ' +
                  weight +
                  ' Kgs. costs ' +
                  weight * jsonGrocery.Pulses[i].price
              );
            }
          } else {
            console.log("please enter integers only!");
          }
          break;
        /**
         * validating a number item
         */
      }
    } catch (error) {
      return error;
    }
  }
}