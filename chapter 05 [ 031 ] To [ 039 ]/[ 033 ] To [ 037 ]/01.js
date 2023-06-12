let num = 9;

if (num < 10) {
  console.log("00" + num);
} else if (num > 10 && 100 > num) {
  console.log("0" + num);
} else {
  console.log(num.toString());
}

num < 10
  ? console.log("00" + num)
  : num > 10 && 100 > num
  ? console.log("0" + num)
  : console.log(num.toString());
