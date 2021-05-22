/************************************************************************************************
 * Execution : (default node cmd): node quadraticRoots.js
 *
 * Purpose   : To find roots of a quadratic equation.
 *
 * @file     : quadraticRoots.js
 * @version  : 1.0
 * @author   : Rajat Sawarkar <rajatsawarkar95@gmail.com>
 * @since    : 17-04-2021
 *************************************************************************************************/

let Utility = require('../utility/Utility');
let readline = require('readline-sync');
try {
  function roots() {
    console.log('expression format: a*x*x + b*x + c ');
    let a = readline.question('Enter the value of a in above expression: ');
    let b = readline.question('Enter the value of b in above expression: ');
    let c = readline.question('Enter the value of c in above expression: ');

    let roots = Utility.qroots(a, b, c);
    console.log(roots + '  are two roots');
  }
} catch (error) {
  console.log('Error!', error);
}
roots();
