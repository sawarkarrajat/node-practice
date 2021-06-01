/*************************************************************************************************
 *  @Purpose        : Maintain the List of CompanyShares in a Linked List So new CompanyShares can
                      be added or removed easily.
 *  @file           : companyShares.js
 *  @overview       : In this we have to add,delete and display the list of companyShares.
 *  @author         : Rajat Sawarkar <rajatsawarkar95@gmail.com>
 *  @version        : v1.0.0
 *  @since          : 1-04-2021
 ***************************************************************************************************/
let read = require('readline-sync');
let fs = require('fs');
let element = fs.readFileSync('../oopsPrograms/JSONfiles/companyShares.json');
/*
 * function JSON.parse() is used to convert the string into a JavaScript Objects
 */
let companyData = JSON.parse(element);
let linked = require('../oopsPrograms/utility/companySharesLinkedList');
let list = new linked.LinkedList();
for (let key in companyData.company) {
  list.add(companyData.company[key]);
}
function Stocklinkedlist() {
  console.log(
    '\n 1.Add Data \n 2.Remove Data \n 3.Save \n 4.Display \n 5.Exit'
  );
  /*
   * enter choices to select
   */
  let choice = read.question('Enter your choice please: ');
  /**
   * This choice Add the data into the file
   */
  if (choice == 1) {
    let name = read.question('Enter Company Name: ');
    let PerShare = read.question('Enter per share price: ');
    let total = read.question('Enter total number of shares: ');
    let v = {
      symbol: name,
      pricePerShare: PerShare,
      totalShare: total
    };
    list.add(v);
    console.log('Company added successfully');
    Stocklinkedlist();
  } else if (choice == 2) {
    /**
     * This remove Add the data into the file
     */
    let array = [];
    array = list.printList1();
    console.log(array);
    let curr = list.head;
    let deleteCompany = read.question('Enter the company you want to delete :');
    let n = 0;
    let flag = true;
    while (curr && flag) {
      n++;
      if (curr.data.symbol === deleteCompany) {
        console.log('curr :', curr.data.symbol);
        list.popIndex(n);
        flag = false;
      }
      curr = curr.next;
    }
    if (flag) {
      console.log('Index not found');
    }
    console.log('UPDATED LIST');
    let array = [];
    array = list.printList1();
    console.log(array);
    Stocklinkedlist();
  } else if (choice == 3) {
    /**
     * This choice save the data and data is stored into the file
     */
    let outputarray = [];
    outputarray = list.printList1();
    console.log('Output Array is :');
    console.log(outputarray);
    let b = { company: outputarray };
    fs.writeFileSync(
      '../oopsPrograms/JSONfiles/companyData.json',
      JSON.stringify(b),
      'utf-8',
      () => console.log('done')
    );
    console.log('Data saved to file');
    Stocklinkedlist();
  } else if (choice == 4) {
    /**
     * This choice display the data in file
     */
    let array = [];
    array = list.printList1();
    console.log(array);
    Stocklinkedlist();
  } else if (choice == 5) {
    /**
     * This choice will exit from operation
     */
    console.log('Thank You!');
    process.exit();
  } else {
    console.log('Invalid choice ..Try Again.');
    Stocklinkedlist();
  }
}
Stocklinkedlist();
