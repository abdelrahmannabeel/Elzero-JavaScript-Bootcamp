let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let a = +false;
for (let i = a ; i < friends.length; i++) {
  if (friends[i].toLowerCase().startsWith(letter)) continue;
  //if (friends[i][+false] === letter.toUpperCase()) continue ;//or use
  console.log(`"${++a} => ${friends[i]}"`);
}
// Output
("1 => Sayed");
("2 => Eman");
("3 => Mahmoud");
("4 => Osama");
("5 => Sameh");
