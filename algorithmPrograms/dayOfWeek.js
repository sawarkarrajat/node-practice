/************************************************************************************************
 * Execution : (default node cmd): node dayOfWeek.js
 *
 * Purpose   : To find a specific day of week.
 *
 * @file     : dayOfWeek.js
 * @version  : 1.0
 * @author   : Rajat Sawarkar <rajatsawarkar95@gmail.com>
 * @since    : 18-04-2021
 *************************************************************************************************/

const dWeek  = ()  => {
  let Utility = require('../utility/Utility');

  console.log('******* Finding day of week *******');

  let day, month, year;
  let arrMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  year = parseInt(readlineSync.question('year number'));
  month = parseInt(readlineSync.question('months number'));
  day = parseInt(readlineSync.question('date number'));

  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    arrMonth[1] = parseInt(29);
  }

  if (day <= arrMonth[month - 1]) {
    let dayOfWeekCount = parseInt(Utility.dayOfWeek(year, month, day));
    console.log('day of week is ', Utility.dayFinder(dayOfWeekCount));
  } else {
    console.error('Invalid Date');
    throw 'Invalid Date';
  }
};;
try {
  dWeek();
} catch (error) {
   console.error(error.message);
    throw error;
}
