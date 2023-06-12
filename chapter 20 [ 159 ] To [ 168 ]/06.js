// Write Your Generator Function Here
function* gen() {
  for (let i = 0; true; i++) {
    yield 100 * i ** 2 + 40 * i + 14;
  }
}
let generator = gen();

console.log(generator.next()); // {value: 14, done: false}
console.log(generator.next()); // {value: 154, done: false}
console.log(generator.next()); // {value: 494, done: false}
console.log(generator.next()); // {value: 1034, done: false}
console.log(generator.next()); // {value: 1774, done: false}
console.log(generator.next()); // {value: 2714, done: false}
console.log(generator.next()); // {value: 3854, done: false}
console.log(generator.next()); // {value: 5194, done: false}
console.log(generator.next()); // {value: 6734, done: false}

/* 
use [ a*(i**2) + b*(i) + c ]
i => 0 : [ a*(0**2) + b*(0) + c ] = 14
i => 1 : [ a*(i**2) + b*(i) + c ] = 154
i => 2 : [ a*(i**2) + b*(i) + c ] = 494

from (i => 0) : {c = 14}  ===> (1)
from (i => 1) : a + b = 140  ===> (2)
from (i => 2) : 4*a + 2*b = 480  ===>  2*a + b = 240 => { b = 240 - 2*a } ===> (3)

From (2)(3) => a + (240 - 2*a) = 140
{a = 100 }
b = 240 - 2*a = 240 - 200 
{b = 40 }

{ 100*(0**2) + 40*(0) + 14 }

If you get it with better way send it please :)
- LinkedIn - [@abdelrahman-nabeel](https://www.linkedin.com/in/abdelrahman-nabeel/)
- GitHub - [@abdelrahmannabeel](https://github.com/abdelrahmannabeel)
*/
