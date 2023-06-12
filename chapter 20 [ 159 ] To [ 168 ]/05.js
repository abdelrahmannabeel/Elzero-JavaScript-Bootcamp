// Needed Output
let start = performance.now();
for (let i = 1 ; i <= 99999 ; i++){console.log(i)};
let end = performance.now();

let result = end - start;

console.log(`Loop Took ${result.toFixed(0)} Milliseconds`);
"Loop Took 1921 Milliseconds."