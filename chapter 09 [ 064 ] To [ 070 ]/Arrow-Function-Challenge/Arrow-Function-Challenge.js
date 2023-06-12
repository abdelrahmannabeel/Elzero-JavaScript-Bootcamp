/*
  Function Arrow Challenges
*/

// [1] One Statement In Function
// [2] Convert To Arrow Function
// [3] Print The Output [Arguments May Change]

// String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !
//*=============== Regular Syntax ===============
let name = function (...users) {
  return `${typeof users[0]} [${users.join("] , [")}] => Done !`;
};
//*=============== Arrow Function ===============
let names = (...users) =>
  `${typeof users[0]} [${users.join("] , [")}] => Done !`;
//*==============================================
console.log(name("Osama", "Mohamed", "Ali", "Ibrahim"));
console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));

/* ================================= */

// [1] Replace ??? In Return Statement To Get The Output
// [2] Create The Same Function With Regular Syntax
// [3] Use Array Inside The Arguments To Get The Output

let myNumbers = [20, 50, 10, 60];
//*=============== Arrow Function ===============
//let calc = (one, two, ...nums) => one + +two + +nums;
//*=============== Regular Syntax ===============
let calc = function (one, two, ...nums) {
  return one + +two + +nums;
};
//*==============================================
console.log(calc(10, myNumbers[+false], myNumbers[+true])); // 80
