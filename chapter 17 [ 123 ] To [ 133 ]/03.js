let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};

let mapObject = new Map([
  ["username", "Osama"],
  ["role", "Admin"],
  ["country", "Egypt"],
]); // One
console.log(mapObject);

console.log(new Map(Object.entries(myInfo))); // Two

console.log(mapObject.size);
console.log(mapObject.has("role"));


// Needed Output
//Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
//3
//true

//? Object.entries(myInfo) Output => [ ['username', 'Osama'], ['role', 'Admin'], ['country', 'Egypt'] ]

