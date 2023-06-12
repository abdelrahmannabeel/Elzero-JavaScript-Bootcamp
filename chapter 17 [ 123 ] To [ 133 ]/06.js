let chars1 = ["A", "B", "C", "D", "E", 10, 15, 6];
console.log(chars1.copyWithin(3)); //Output => ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']

let chars2 = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
console.log(chars2.sort().copyWithin(0, 4, 8)); //Output => ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']

let chars3 = ["Z", "Y", "A", "D", "E", 10, 1];
console.log(chars3.copyWithin(2)); //Output => ["Z", "Y", "Z", "Y", "A", "D", "E"]

