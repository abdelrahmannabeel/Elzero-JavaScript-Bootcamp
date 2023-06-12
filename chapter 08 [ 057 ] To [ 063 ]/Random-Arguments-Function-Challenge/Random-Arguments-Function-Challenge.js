/*
  Function - Random Argument Challenge
  ====================================
  Create Function showDetails
  Function Accept 3 Parameters [a, b, c]
  Data Types For Info Is
  - String => Name
  - Number => Age
  - Boolean => Status
  Argument Is Random
  Data Is Not Sorted Output Depend On Data Types
  - Use Ternary Conditional Operator
*/
function showDetails(...detail) {
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

showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
