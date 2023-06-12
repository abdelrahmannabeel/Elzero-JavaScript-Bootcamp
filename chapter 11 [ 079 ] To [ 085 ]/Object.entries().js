//! ============= Object.entries() =============
//* The Object.entries() static method returns an array of a given object's own enumerable string-keyed property key-value pairs.

const object1 = {
  a: 'somestring',
  b: 42
};

for (const [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}

// Expected output:
// "a: somestring"
// "b: 42"

//? Syntax
Object.entries(obj)

//? Parameters
//* obj => An object.

//? Return value
//* An array of the given object's own enumerable string-keyed property key-value pairs. Each key-value pair is an array with two elements: the first element is the property key (which is always a string), and the second element is the property value.

//? Description
//* Object.entries() returns an array whose elements are arrays corresponding to the enumerable string-keyed property key-value pairs found directly upon object. This is the same as iterating with a for...in loop, except that a for...in loop enumerates properties in the prototype chain as well. The order of the array returned by Object.entries() is the same as that provided by a for...in loop.

//* If you only need the property keys, use Object.keys() instead. If you only need the property values, use Object.values() instead.

//? Examples
//* Using Object.entries()
const obj1 = { foo: "bar", baz: 42 };
console.log(Object.entries(obj1)); // [ ['foo', 'bar'], ['baz', 42] ]

// Array-like object
const obj2 = { 0: "a", 1: "b", 2: "c" };
console.log(Object.entries(obj2)); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]

// Array-like object with random key ordering
const anObj = { 100: "a", 2: "b", 7: "c" };
console.log(Object.entries(anObj)); // [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]

// getFoo is a non-enumerable property
const myObj = Object.create(
  {},
  {
    getFoo: {
      value() {
        return this.foo;
      },
    },
  },
);
myObj.foo = "bar";
console.log(Object.entries(myObj)); // [ ['foo', 'bar'] ]

//* Using Object.entries() on primitives
//* Non-object arguments are coerced to objects. Only strings may have own enumerable properties, while all other primitives return an empty array.

// Strings have indices as enumerable own properties
console.log(Object.entries("foo")); // [ ['0', 'f'], ['1', 'o'], ['2', 'o'] ]

// Other primitives have no own properties
console.log(Object.entries(100)); // []

//* Converting an Object to a Map
//* The Map() constructor accepts an iterable of entries. With Object.entries, you can easily convert from Object to Map:

const obj3 = { foo: "bar", baz: 42 };
const map = new Map(Object.entries(obj3));
console.log(map); // Map(2) {"foo" => "bar", "baz" => 42}

//* Iterating through an Object
//* Using array destructuring, you can iterate through objects easily.

// Using for...of loop
const obj = { a: 5, b: 7, c: 9 };
for (const [key, value] of Object.entries(obj)) {
  console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
}

// Using array methods
Object.entries(obj).forEach(([key, value]) => {
  console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
});