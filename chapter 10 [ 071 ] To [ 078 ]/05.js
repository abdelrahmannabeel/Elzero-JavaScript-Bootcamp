let nums = [2, 12, 11, 5, 10, 1, 99];
let arr = nums.reduce(function (acc, curr) {
  if (curr % 2 !== 0) {
    return acc + curr;
  } else {
    return acc * curr;
  }
}, 1);
console.log(arr);
// 500
