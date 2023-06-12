let promptMsg = window.prompt("Print Number From – To", "Example: 5-20");

let firstNum = parseInt(promptMsg.split("-")[0]);
let secNum = parseInt(promptMsg.split("-")[1]);
if (firstNum < secNum) {
  for (let i = firstNum; i <= secNum; i++) {
    console.log(i);
  }
} else {
  for (let i = secNum; i <= firstNum; i++) {
    console.log(i);
  }
}

//let promptMsg = prompt("Print Number From – To", "5-20")
//  .split("-")
//  .sort((a, b) => a - b);
//for (let i = promptMsg[0]; i <= promptMsg[1]; i++) {
//  console.log(i);
//}