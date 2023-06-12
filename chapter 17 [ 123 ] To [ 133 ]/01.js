let setOfNumbers = new Set().add(10);
setOfNumbers.add(20).add(setOfNumbers.size);
console.log(setOfNumbers); //Output => Set(3) {10, 20, 2}
console.log([...setOfNumbers][2]); //Output => 2
console.log(Array.from(setOfNumbers)[2]); //Output => 2

// Needed Output
//Set(3) {10, 20, 2}
//2
