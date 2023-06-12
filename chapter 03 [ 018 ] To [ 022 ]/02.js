let num = 3;

// Solution One
console.log(num + num ); // 6

// Solution Two
console.log(+num * --num ); // 6

// Solution Three
console.log( ++num ** num / num -num ); // 6

// Soultion Four
console.log(num + true + --num ); // 6

// Soultion Five
console.log( ++num * --num / --num); // 6

// Solution Six
console.log( ++num % ++num + num + true ); // 6

// Solution Seven
console.log(true % num++ * num-- + --num   ); // 6
