let myArray = ["E", "l", "z", ["e", "r"], "o"];
let newArray = myArray
  .reduce(function (acc, curr) {
    return acc.concat(curr);
  }, [])
  .reduce((acc, curr) => acc + curr);
console.log(newArray);
// Elzero
console.log([...myArray].join("").match(/[a-zA-Z]/ig).join(""))
