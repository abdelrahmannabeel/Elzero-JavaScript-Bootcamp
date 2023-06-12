let day = "       world       ";
// You Need To Remove Spaces And Make First Letter Capital => Friday
day = `${day.trim().charAt().toLocaleUpperCase()}${day.trim().slice(1)}`;
//*Or you can use switch (`${day.trim().charAt().toLocaleUpperCase()}${day.trim().slice(1)}`)
switch (day) {
  case "Friday":
  case "Saturday":
  case "Sunday":
    console.log("No Appointments Available");
    break;
  case "Monday":
  case "Thursday":
    console.log("From 10:00 AM To 5:00 PM");
    break;
  case "Tuesday":
    console.log("From 10:00 AM To 6:00 PM");
    break;
  case "Wednesday":
    console.log("From 10:00 AM To 7:00 PM");
    break;
  case "World":
    console.log("Its Not A Valid Day");
}
//let day = "Friday";
//let day = "Saturday";
//let day = "Sunday";
//// Output => "No Appointments Available"

//let day = "Monday";
//let day = "Thursday";
//// Output => "From 10:00 AM To 5:00 PM"

//let day = "Tuesday";
//// Output => "From 10:00 AM To 6:00 PM"

//let day = "Wednesday";
//// Output => "From 10:00 AM To 7:00 PM"

//let day = "World";
//// Output => "Its Not A Valid Day"
//switch (day) {
//  case
//}
