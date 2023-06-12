let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
let arr = numsAndStrings
  .filter((el) => typeof el === "number")
  .map((el) => -el);

console.log(arr);
// [-1, -10, 10, 20, -5, -3]
