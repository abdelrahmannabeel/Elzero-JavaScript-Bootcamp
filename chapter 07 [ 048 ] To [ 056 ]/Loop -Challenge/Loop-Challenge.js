/*
  Loop Challenge
*/

let myAdmins = ["Osama", "Ahmed", "Sayed", "Stop", "Samera"];
let activeAdmins = [];
let myEmployees = [
  "Amgad",
  "Samah",
  "Ameer",
  "Othman",
  "Omar",
  "Amany",
  "Samia",
  "Anwar",
];

for (let i = 0; i < myAdmins.length; i++) {
  if (myAdmins[i] === "Stop") break;
  activeAdmins.push(myAdmins[i]);
}
//?You Can Also Use
/*
if (myAdmins.includes("Stop")) {
    for (let i = 0; i < myAdmins.indexOf("Stop"); i++) {
        activeAdmins.push(myAdmins[i]);
    }
} else {
    activeAdmins = myAdmins;
}
*/

activeAdmins.sort();
myEmployees.sort();

//?You Can Also Use
/*You Can Add Sort() To The Array In The Loop activeAdmins.sort()- myEmployees.sort()"*/

document.write(`<h1>We Have ${activeAdmins.length} Admins</h1>`);

for (let i = 0; i < activeAdmins.length; i++) {
  //if (activeAdmins[i] === "Stop") break;
  let count = 0;
  document.write(`<hr>`);
  document.write(`<div>`);
  document.write(
    `<h3>The Admin For Team <span>${i + 1}</span>  Is <span>
    ${activeAdmins[i]}</span></h3>`
  );
  document.write(`<h2> Team Members:</h2>`);

  for (let a = 0; a < myEmployees.length; a++) {
    if (myEmployees[a][0] !== activeAdmins[i][0]) continue;

    document.write(`<h4>${++count} -  ${myEmployees[a]}</h4>`);
  }
  document.write(`</div>`);
}
