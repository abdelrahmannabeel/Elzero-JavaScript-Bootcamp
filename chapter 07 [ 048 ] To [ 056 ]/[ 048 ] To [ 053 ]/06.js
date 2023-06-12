let start = 0;
let swappedName = "elZerO";
let a = [];
for (i = start; i < swappedName.length; i++) {
  if (swappedName[i] === swappedName[i].toUpperCase()) {
    a.push(swappedName[i].toLowerCase());
    console.log(swappedName[i].toLowerCase());
  } else {
    a.push(swappedName[i].toUpperCase());
    console.log(swappedName[i].toUpperCase());
  }

  //swappedName[i] === swappedName[i].toUpperCase()
  //  ? a.push(swappedName[i].toLowerCase())
  //  : a.push(swappedName[i].toUpperCase()); //or use
}

let b = a.join("");
console.log(swappedName);
console.log(b);
// Output
("ELzERo");
