/*
  If Condition Challenge
*/

let a = 10;

if (a < 10) {
  console.log(10);
} else if (a >= 10 && a <= 40) {
  console.log("10 To 40");
} else if (a > 40) {
  console.log("> 40");
} else {
  console.log("Unknown");
}
a < 10
  ? console.log(10)
  : a >= 10 && a <= 40
  ? console.log("10 To 40")
  : a > 40
  ? console.log("> 40")
  : console.log("Unknown");
  
// Write Previous Condition With Ternary If Syntax

let st = "Elzero Web School";
console.log();
if ((st.length + st.length).toString() === "34") {
  console.log("Good");
}
// W Position May Change

if (st[st.indexOf("W")].toLowerCase() === "w") {
  //st [searching for the position of "W" ] then .toLowerCase() === "w"
  console.log("Good");
}

if ((typeof(st.length)).toString() !== "string") {
  console.log("Good");
}

if ((typeof(st.length)).toString() === "number") {
  console.log("Good");
}

if (st.substr(0,6)+st.substr(0,6) === "ElzeroElzero") {
  console.log("Good");
}
