// Add Variables Here
let numberOne = 10;
numberTwo = 20;
// Ouput
console.log(numberTwo +""+ numberOne); // Normal Concatenate => 1020
console.log(typeof 'numberTwo +""+ numberOne'); // Normal Concatenate => String
console.log(`${numberTwo}${numberOne}`); // Template Literals Way => 1020
console.log(typeof `${numberTwo}${numberOne}`); // Template Literals Way => String

console.log(numberTwo +"\n"+ numberOne);
/*
  Normal Concatenate
  20
  10
*/

console.log(`${numberTwo}
${numberOne}
`);
/*
  Template Literals Way
  20
  10
*/
