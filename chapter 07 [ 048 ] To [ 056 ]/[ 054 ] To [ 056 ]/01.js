let friends = [["ffffff"], "Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

/* ============= 01 ============= */
while (index < friends.length) {
  if (typeof friends[index] != "string" || friends[index].startsWith("A")) {
    index++;
    continue;
  }
  console.log(`${++counter} => ${friends[index]}`);

  index++;
}

/* ============= 02 ============= */
while (index < friends.length) {
  if (typeof friends[index] === "string" && !friends[index].startsWith("A")) {
    console.log(`${++counter} => ${friends[index]}`);
  }
  index++;
}

/* ============= 03 ============= */
//for (; index < friends.length; index++) {
//  if (typeof friends[index] !== "string" || friends[index].startsWith("A"))
//    continue;
//  console.log(`${++counter} => ${friends[index]}`);
//}
