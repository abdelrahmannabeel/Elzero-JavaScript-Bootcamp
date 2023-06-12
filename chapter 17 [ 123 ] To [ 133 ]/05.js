let theName = "Elzero";
console.log([...theName]);
console.log(theName.split(""));
console.log(Array.from(theName));
console.log([...new Set(theName)]);
console.log(Object.values(theName)); // Output => ["E","l","z","e","r","o"]
console.log(Object.keys(theName)); // Output => ["0", "1", "2", "3", "4", "5"]

[
  // Needed Output
  ("E", "l", "z", "e", "r", "o"),
];
