/******************************************************************************
 *  @Purpose        : To Print the Modified Message with proper validation.
 *  @file           : regularExpression.js
 *  @overview       : Read the given message then then replace the data with
 *                    proper values and print modified message.
 *  @author         : Rajat Sawarkar <rajatsawarkar95@gmail.com>
 *  @version        : v1.0.0
 *  @since          : 30-04-2021
 ******************************************************************************/
let prompt = require('prompt-sync')();
function regularExpression() {
  let result1, result2, result3, fullName;
  /*
   * storing each string into a respective variables
   */
  let str =
    '-->Hello <<name>>, We have your fullname as <<full name>> in our system.';
  let str1 = '\n-->Your contact number is <<91­xxxxxxxxxx>>.';
  let str2 = '-->Thank you!! BridgeLabz <<dd-mm-yyyy>> ';
  /*
   * Using a regular expression literal,which consists of a pattern enclosed between slashes
   */
  nameRestriction = /[a-z]/gi;
  contactRestriction = /[0-9]/g;
  /*
   * asking user to enter a name & stored in name variable
   */
  let firstName = prompt('Please enter your first name: ');
  if (nameRestriction.test(firstName) && firstName.length > 3) {
    result = str.replace(/<<name>>/, firstName);
  } else {
    console.log('Invalid name!');
    return false;
  }
  /*
   * asking user to enter a fullname & stored in fullName variables
   */
  fullName = firstName + ' ' + prompt('Please enter your last name: ');
  if (nameRestriction.test(fullName) && fullName.length > 3) {
    result1 = result.replace(/<<full name>>/, fullName);
  } else {
    console.log('Invalid full name!');
    return false;
  }
  /*
   * asking user to enter a contactNUmber & stored in contactNum
   */
  let contactNumber = prompt('Please enter your contact number: ');
  if (
    contactRestriction.test(contactNumber) == true &&
    contactNumber.length == 10
  ) {
    result2 = str1.replace(/<<91­xxxxxxxxxx>>/, contactNumber);
  } else {
    console.log('Invalid number!');
    return false;
  }
  /*
   * printing results getting from result1 and result2
   */
  console.log(result1 + ' ' + result2);
  /*
   * uses Date function for getting date,month and year
   */
  let d = new Date();
  let date = d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear();
  result3 = str2.replace(/<<dd-mm-yyyy>>/, date);
  console.log(result3);
}
regularExpression();
