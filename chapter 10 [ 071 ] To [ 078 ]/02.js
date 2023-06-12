let myString = "EElllzzzzzzzeroo";
let arr = myString
  .split("")
  .filter((el, index) => myString.indexOf(el) === index)
  //Ex : myString.indexOf(el => E = 0) != index(E = 1)
  .reduce((acc, curr) => acc + curr);
console.log(arr);
// Elzero
