//? difference between Map Filter and Reduce in javascript
//* Both map() and filter() are higher-order functions in JavaScript that are used to transform arrays. However, they are used for different purposes:

// map() is used to create a new array by transforming each element in an existing array. It applies a function to each element of the array and returns a new array of the same length where each element is the result of applying the function to the corresponding element in the original array.

//! For example:
const num1 = [1, 2, 3, 4];
const doubledNumbers = num1.map((num) => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8]

//filter() is used to create a new array by selecting only the elements in an existing array that satisfy a particular condition. It applies a function to each element of the array and returns a new array containing only the elements for which the function returns true.

//! For example:
const num2 = [1, 2, 3, 4];
const evenNumbers = num2.filter((num) => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

//reduce() takes an array and applies a function to each element of the array, accumulating a single value that is returned at the end. The initial value of the accumulator and the function to be applied are both provided as arguments to the function.

//! For example:
const arr = [1, 2, 3, 4, 5];
const sum = arr.reduce((acc, val) => acc + val, 0);
// sum is 15, which is the sum of all the elements in the array

//* In summary, map() and filter() return new arrays with modified or filtered elements, respectively, while reduce() returns a single value obtained by applying a function to each element of the array.
//! ChatGPT
