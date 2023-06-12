function checkStatus(a, b, c) {
  detail = [a, b, c];
  let userName, age, st;
  for (let i = 0; i < detail.length; i++) {
    typeof detail[i] === "string"
      ? (userName = detail[i])
      : typeof detail[i] === "number"
      ? (age = detail[i])
      : (st = detail[i]);
  }
  st === true ? (st = "Available") : (st = "Not Available");

  console.log(`Hello ${userName}, Your Age Is ${age},You Are ${st} For Hire`);
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
