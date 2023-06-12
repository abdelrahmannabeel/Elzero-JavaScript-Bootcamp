// Needed Output
let dateNow = new Date();
let birthday = new Date("Jan 22,1998");
let age = dateNow - birthday;
console.log(dateNow);
console.log(`${(age / 1000).toFixed(1)} Seconds`);
console.log(`${(age / 1000 / 60).toFixed(1)} Minutes`);
console.log(`${(age / 1000 / 60 / 60).toFixed(1)} Hours`);
console.log(`${(age / 1000 / 60 / 60 / 24).toFixed(1)} Days`);
console.log(`${(age / 1000 / 60 / 60 / 24 / 30).toFixed(1)} Months`);
console.log(`${(age / 1000 / 60 / 60 / 24 / 30 / 12).toFixed(1)} Years`);
("1247939400 Seconds");
("20798990 Minutes");
("346650 Hours");
("14444 Days");
("481 Months");
("40 Years");
