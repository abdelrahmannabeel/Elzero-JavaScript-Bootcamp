let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
allArrs = arr1.concat(arr2).sort().splice(arr2.length).join("").toLowerCase();
//or use.slice(-+arr1.length)
console.log(allArrs); // fxy
