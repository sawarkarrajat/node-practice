/************************************************************************************************
 * Execution : 1. default node cmd> node balancedParenthesis.js
 *
 * Purpose   : to use stack to keep the count of parenthesis in an expression.
 *
 * @file     : balancedParenthesis.js
 * @author   : Rajat Sawarkar <rajatsawarkar95@gmail.com>
 * @since    : 24-04-2021
 *
 *************************************************************************************************/

let stackUtility = require('./utility/stackUtility').Stack;
let arithhmaticExpression = '({})';
let data = arithhmaticExpression.split('');
let sUtil = new stackUtility();
function balancedParen() {
  data.forEach((element) => {
    let regexpL = /[(]/;
    if (regexpL.test(element)) {
      sUtil.push(element);
    }
  });
  // console.log("",);
  console.log('value of count ', sUtil.count);
  console.log('value of peek ', sUtil.peek());
  console.log('value of size ', sUtil.size());
  data.forEach((element) => {
    let regexpR = /[)]/;
    if (regexpR.test(element)) {
      sUtil.pop();
    }
  });
  console.log('value of count after pop', sUtil.count);
  console.log('value of isEmpty() ', sUtil.isEmpty());
  if (sUtil.isEmpty()) {
    console.log('Arithmatic Expression is balanced');
  } else {
    console.log('unequal parenthesis invalid Arithmatic Expression');
  }
}
balancedParen();
