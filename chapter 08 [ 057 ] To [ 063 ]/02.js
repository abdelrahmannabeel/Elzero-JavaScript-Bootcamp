function calculate(firstNum, secondNum, operation) {
  // Your Code Here
  let result;
  if (firstNum == undefined || secondNum == undefined) {
    console.log("Second Number Not Found");
  } else if (operation === "add") {
    console.log((result = firstNum + secondNum));
  } else if (operation === "subtract") {
    console.log((result = firstNum - secondNum));
  } else if (operation === "multiply") {
    console.log((result = firstNum * secondNum));
  } else {
    console.log((result = firstNum + secondNum));
  }
  //console.log(result);
  return result;
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600
