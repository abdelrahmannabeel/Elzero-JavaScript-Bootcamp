function multiply(...parameters) {
  let result = 1;
  for (let i = 0; i < parameters.length; i++) {
    if (typeof parameters[i] === "number") {
      result *= parseInt(parameters[i]);
    }
  }
  console.log(result);
}
multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
