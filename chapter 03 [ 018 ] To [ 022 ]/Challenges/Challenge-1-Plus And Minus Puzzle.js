/*
  Challenge 1
*/

let a = 10;
let b = "20";
let c = 80;

//console.log(+a++);
console.log(++a + +b++ + +c++ - +a++);
console.log(11 + 20 + 80 - 11);
console.log("==================");
console.log(++a + -b + +c++ - -a++ + +a);
console.log(13 - 21 + 81 + 13 + 14);
console.log("==================");

console.log(--c + +b + --a * +b++ - +b * a + --a - +true);
console.log(81 + 21 + 13 * 21 - 22 * 13 + 12 - 1);

/*
[++a] [+] [+b++] [+] [+c++] [-] [+a++];

  [++a]
  - Value: 11
  - Explain: preincrement ==> 11

  [+]
  - Explain: add

[+b++]
  - Value: 20 
  - Explain: unary plus & postincrement ==> 21

  [+]
  - Explain: add

[+c++]
  - Value: 80 
  - Explain: unary plus & postincrement => 81

  [-]
  - Explain: subtract

[+a++]
  - Value: 11 
  - Explain: unary plus & postincrement => 12

  ============= 11 + 20 + 80 - 11 ==========
*/

/*
[++a] [+] [-b] [+] [+c++] [-] [-a++] [+] [+a]
=================
  [++a]
  - Value: 12+1= 13
  - Explain: preincrement ==>13
=================
  [+]
  - Explain: add
=================
[-b]
  - Value: - 21 
  - Explain: unary negation ==> - 21
=================
  [+]
  - Explain: add
=================
[+c++]
  - Value: 81
  - Explain: unary plus & postincrement => 82
=================
  [-]
  - Explain: subtract
=================
[-a++]
  - Value: - 13 
  - Explain: unary negation & postincrement => - 14
=================
    [+]
  - Explain: add
=================
[+a]
  - Value: +14
  - Explain: unary plus & postincrement => 14

  ============= 13 - 21 + 81 + 13 + 14 ==========
*/

/*
[--c] [+] [+b] [+] [--a] [*] [+b++] [-] [+b] [*] [a] [+] [--a] [-] [+true]
  [--c]
  - Value: 82-1 = 81
  - Explain: post decrement =>81
=================
  [+]
  - Explain: add
=================
[+b]
  - Value: 21 
  - Explain: unary plus ==>21
=================
  [+]
  - Explain: add
=================
[--a]
  - Value: 14 -1 = 13
  - Explain: post decrement =>13
=================
  [*]
  - Explain: multiplication
=================
[+b++]
  - Value: 21   
  - Explain: unary plus  &  post increment =>22
=================
[-]
  - Explain: subtract 
=================
[+b]
  - Value: 22
  - Explain: unary plus =>22
=================
  [*]
  - Explain: multiplication
=================
[a]
  - Value: 13
  - Explain: => 13 
  =================
[+]
  - Explain: add
=================
[--a]
  - Value: 13-1=12
  - Explain: pre increment =>12
=================
[-]
  - Explain: subtract
=================
  [+true]
  - Value: 1
  - Explain:  unary plus 

  ============= 81 + 21 + 13 * 21 - 22 * 13 + 12 - 1 ==========
*/