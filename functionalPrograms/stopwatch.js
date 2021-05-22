/************************************************************************************************
 * Execution : (default node cmd): node stopwatch.js
 *
 * Purpose   : To find time elapsed in seconds using user input.
 *
 * @file     : stopwatch.js
 * @version  : 1.0
 * @author   : Rajat Sawarkar <rajatsawarkar95@gmail.com>
 * @since    : 17-04-2021
 *************************************************************************************************/
let Utility = require('../utility/Utility');
let readline = require('readline-sync');
try {
  function stopWatch() {
    let startTime = readline.question('Press 1 to start time  => ');
    if (startTime == '1') {
      let start = Utility.getCurrentTime();
      let stopTime = readline.question('Press 0 to stop time   => ');

      if (stopTime == '0') {
        let stop = Utility.getCurrentTime();
        let result = Utility.elapsedTime(start, stop);
      }
      console.log('elapsed Time is        => ' + result + ' Seconds passed...');
    } else {
      console.log('invalid input');
      stopWatch();
    }
  }
} catch (error) {
  console.log('Error!', error);
}

stopWatch();
