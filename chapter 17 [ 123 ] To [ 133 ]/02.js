let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

let arr = new Set(myFriends);
console.log([...arr].sort());

console.log(Array.from(new Set(myFriends)).sort());

// Needed Output
//(4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']
