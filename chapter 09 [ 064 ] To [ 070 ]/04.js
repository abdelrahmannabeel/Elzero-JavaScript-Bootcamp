function specialMix(...data) {
  let x = 0;
  for (let i = 0; i < data.length; i++) {
    data[i] = parseFloat(data[i]);
    if (isNaN(data[i])) continue;
    else x += data[i];
  }
  if (x === 0) return "All Inputs Are String";
  return x;
}
console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings

//? What The Difference Between if (data[i] === NaN) And  if (isNaN(data[i]))
/*The expression if (data[i] === NaN) checks if the value of data[i] is exactly equal to the special value NaN (Not a Number). However, this expression will always return false, even if data[i] is NaN. This is because NaN is not equal to any value, not even to itself, so the comparison data[i] === NaN will always fail.
On the other hand, the expression if (isNaN(data[i])) checks if the value of data[i] is NaN or not. This expression returns true if data[i] is NaN, and false otherwise. So, if you want to check if a value is NaN, you should use isNaN() rather than comparing it to NaN using ===. */ //! ChatGPT
