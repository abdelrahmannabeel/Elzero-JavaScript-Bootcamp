let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
//========== ONE ==========
if (haystack.indexOf(needle) !== -1) {
  console.log("Found");
} else {
  console.log("Not Found");
}
//========== TWO ==========
if (haystack.indexOf(needle) === -1) {
  console.log("Not Found");
} else {
  console.log("Found");
}
//========= THREE =========
if (haystack.includes(needle)) {
  console.log("Found");
} else {
  console.log("Not Found");
}
//========= FOUR =========
switch (haystack.indexOf(needle)) {
  case -1:
    console.log("Not Found");
    break;
  default:
    console.log("Found");
}
