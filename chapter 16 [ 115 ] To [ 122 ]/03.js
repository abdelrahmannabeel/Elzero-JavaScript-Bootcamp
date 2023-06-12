let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];

// Play With Arrays To Prepare For Destructuring
// Write Your Destructuring Assignment Here
//let [c, ,] = arr1;

arr3[0] = arr1[0];
let [c, a, b] = arr3;
console.log(`My Best Friends: ${a}, ${b}, ${c}`);
console.log(`My Best Friends: Shady, Mahmoud, Ahmed`);

// My Best Friends: Shady, Mahmoud, Ahmed

//let arr = arr1.concat(arr2, arr3);
//let [c, , , , , , , a, b] = arr;
//console.log(arr);
