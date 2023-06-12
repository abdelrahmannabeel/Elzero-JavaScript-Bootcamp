function ageInTime(theAge) {
  // Your Code Here
  if (theAge < 10 || theAge > 100) {
    console.log("Age Out Of Range");
  } else {
    console.log("=========== calculate age app ===========");
    months = theAge * 12;
    weeks = theAge * 52;
    days = weeks * 7;
    hours = days * 24;
    Minutes = hours * 60;
    sec = Minutes * 60;
    console.log(`Months Example => ${months} Months`);
    console.log(`Weeks Example => ${weeks} Weeks`);
    console.log(`Days Example => ${days} Days`);
    console.log(`Hours Example => ${hours} Hours`);
    console.log(`Minutes Example => ${Minutes} Minutes`);
    console.log(`Seconds Example => ${sec} Seconds`);
  }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months
