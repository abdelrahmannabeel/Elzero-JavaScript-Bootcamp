let chosen = 1;
let chosenNum;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

// Write Your Code Here
printUser(chosen)

function printUser(num){
  let {
    title: t,
    age: a,
    available: av,
    skills: [skillOne, skillTwo],
  } = myFriends[num-1];
  console.log(t);
  console.log(a);
  console.log(av ? "Available" : "Not Available");
  console.log(skillTwo);
}


console.log("#".repeat(25));

// Stupid Solution 
let [one, two, three] = myFriends;
if (chosen === 1) {
  printUserTwo(one);
} else if (chosen === 2) {
  printUserTwo(two);
} else if (chosen === 3) {
  printUserTwo(three);
}

function printUserTwo(chosenNum) {
  let {
    title: t,
    age: a,
    available: av,
    skills: [skillOne, skillTwo],
  } = chosenNum;
  console.log(t);
  console.log(a);
  console.log(av ? "Available" : "Not Available");
  console.log(skillTwo);
}