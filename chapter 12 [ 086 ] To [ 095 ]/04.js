let one = document.querySelector(".one");
let two = document.querySelector(".two");
let length = document.getElementsByTagName("div").length;
let twoTxt = one.innerHTML;
let twoTitle = one.title;

one.innerHTML = two.innerHTML;
two.innerHTML = `${twoTxt} ${length}`;

one.title = two.title;
two.title = twoTitle;

console.log(length);
