let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
let arr = mix
  .map((el) => (isNaN(el) ? el : ""))
  .reduce((acc, curr) => acc + curr);
console.log(arr);
// Elzero

console.log(mix.join("").match(/[a-zA-Z]/ig))