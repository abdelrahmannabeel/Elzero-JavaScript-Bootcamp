/*
  Array Challenge
*/

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here
my.reverse().splice(zero++, counter - zero);
console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(zero, counter--)); // ["Elham", "Mazero"]

console.log(my[zero].slice(--zero, counter) + my[counter].slice(counter)); // "Elzero"

console.log(
  my[counter].charAt(counter) +
    my[counter++].charAt(++counter + ++zero).toUpperCase()
); // "rO"
