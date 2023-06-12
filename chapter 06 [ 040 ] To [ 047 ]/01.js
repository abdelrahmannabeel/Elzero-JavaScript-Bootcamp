let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 2
myFriends.pop(); //remove last index
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends.length = num; //length =3 and remove last index
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// Method 3
console.log(myFriends.slice(false, num)); // ["Ahmed", "Elham", "Osama"];

// Method 4
console.log(myFriends.splice(false, num)); // ["Ahmed", "Elham", "Osama"];
