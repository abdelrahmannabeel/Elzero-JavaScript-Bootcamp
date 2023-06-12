let ip = "2001:db8:3333:4444:5555:6666:7777:8888";

let ipRegExp = /\d{4}\:\w{2}\d(\:\d{4}){6}/gi;
console.log(ip.match(ipRegExp));
