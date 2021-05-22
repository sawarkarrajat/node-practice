/******************************************************************************
 *  @Purpose        : Create the Week Object having a list of WeekDay objects each storing
                      the day(i.e S,M,T,W,Th,..)and the Date(1,2,3..).The WeekDay objects
                      are stored in a Queue in two Stacks.Stack here is also implemented
                      using Linked List.
 *  @file           : weekdayQS.js
 *  @overview       : Here we have to print calendar through Queue in two Stacks implemented
                      using Linked List.
 *  @author         : Rajat Sawarkar <rajatsawarkar95@gmail.com>
 *  @version        : v1.0.0
 *  @since          : 26-04-2021
 ******************************************************************************/
let calendar = require('./utility/calendar2D.js');
let linkedQueue = require('../dataStructurePrograms/utility/primeAnaQueue.js');
let linkedStack = require('../dataStructurePrograms/utility/primeAnaStack.js');
/*
 * creating calender function to create any new node with null values.
 */
function calender() {
  let stackLink1 = new linkedStack.StackedLink();
  let stackLink2 = new linkedStack.StackedLink();

  let linkedqueue = new linkedQueue.QueuedLinkedList();
  let linkedqueue2 = new linkedQueue.QueuedLinkedList();
  /*
   * it will display the year
   */
  let months = [
    '',
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  /*
   * days[i] = number of days in month i
   */
  let days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  /*
   * it will display the day
   */
  let day = ['S', 'M', 'Tu', 'W', 'Th', 'F', 'S'];

  try {
    let month = +process.argv[2];
    let year = +process.argv[3];

    let newMonth = parseInt(month);
    let newYear = parseInt(year);

    if (newMonth < 1 || newMonth > 12)
      throw 'Month value is Invalid , Please Enter value in range 1-12';
    if (newMonth == undefined || newYear == undefined) throw 'No input found';
    if (isNaN(newMonth) || isNaN(newYear))
      throw 'No input or String found , Please Enter a valid input';
    if (newMonth % 1 != 0 || newYear % 1 != 0)
      throw 'Number required , Floating value found';
    /*
     * starting day
     */
    let d = calendar.day(newMonth, 1, newYear);
    /*
     * check for leap year
     */
    if (newMonth == 2 && calendar.isLeapYear(newYear)) days[newMonth] = 29;

    console.log('     ' + months[newMonth] + ' ' + year);
    /*
     * print the calendar
     */
    for (let i = day.length - 1; i >= 0; i--) {
      linkedqueue.enque(day[i]);
    }
    for (let i = 0; i < d; i++) {
      linkedqueue2.enque(' ');
    }
    for (let i = 1; i <= days[newMonth]; i++) {
      linkedqueue2.enque(i);
    }
    for (let i = 0; i < 7; i++) {
      stackLink1.push(linkedqueue.deque());
    }
    stackLink1.displayDays();

    for (let i = 0; i < d; i++) {
      stackLink2.push(linkedqueue2.deque());
    }
    for (let i = 1; i <= days[newMonth]; i++) {
      stackLink2.push(linkedqueue2.deque());
    }
    stackLink2.reverse();
    console.log();
    stackLink2.displayCalender(d);
    console.log(' ');
  } catch (err) {
    console.log('Error: ' + err);
  }
}
calender();
