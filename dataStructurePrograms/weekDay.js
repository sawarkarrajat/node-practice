/******************************************************************************
 *  @Purpose        : Create the Week Object having a list of WeekDay objects each storing
                      the day(i.e S,M,T,W,Th,..)and the Date(1,2,3..).The WeekDay objects
                      are stored in a Queue implemented using Linked List.Further maintain
                      also a Week Object in a Queue to finally display the Calendar.
 *  @file           : weekDay.js
 *  @overview       : Here we have to print calendar through Queue implemented using Linked List.
 *  @author         : Rajat Sawarkar <rajatsawarkar95@gmail.com>
 *  @version        : v1.0.0
 *  @since          : 26-04-2021
 ******************************************************************************/
let calendar = require('./utility/calendar2D.js');
let linkedQueue = require('./utility/primeAnaQueue.js');
/*
 * creating calender function to create any new node with null values.
 */
function calender() {
  let linkedqueue = new linkedQueue.QueuedLinkedList();
  let linkedqueue2 = new linkedQueue.QueuedLinkedList();
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
  let day = ['S', 'M', 'Tu', 'W', 'Th', 'F', 'S'];
  try {
    let month = +process.argv[2];
    let year = +process.argv[3];
    /*
     * here we have to pass the integer values
     */
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
    for (let i = 0; i < 7; i++) {
      linkedqueue.enque(day[i]);
    }
    linkedqueue.display2();
    for (let i = 0; i < d; i++) {
      linkedqueue2.enque(' ');
    }
    for (let i = 1; i <= days[newMonth]; i++) {
      linkedqueue2.enque(i);
    }
    linkedqueue2.displayCalender(d);
    console.log(' ');
  } catch (err) {
    console.log('Error: ' + err);
  }
}
calender();
