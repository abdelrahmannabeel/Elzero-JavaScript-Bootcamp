//! ============= Object.keys() =============

//* The Object.keys() static method returns an array of a given object's own enumerable string-keyed property names.
const object1 = {
  a: "somestring",
  b: 42,
  c: false,
};

console.log(Object.keys(object1));
// Expected output: Array ["a", "b", "c"]

//? Syntax
Object.keys(obj);

//? Parameters
//* obj => An object.

//? Return value
//* An array of strings representing the given object's own enumerable string-keyed property keys.

//? Description
//* Object.keys() returns an array whose elements are strings corresponding to the enumerable string-keyed property names found directly upon object. This is the same as iterating with a for...in loop, except that a for...in loop enumerates properties in the prototype chain as well. The order of the array returned by Object.keys() is the same as that provided by a for...in loop.

//* If you need the property values, use Object.values() instead. If you need both the property keys and values, use Object.entries() instead.

//? Examples
//* Using Object.keys()
// Simple array
const arr = ["a", "b", "c"];
console.log(Object.keys(arr)); // ['0', '1', '2']

// Array-like object
const obj = { 0: "a", 1: "b", 2: "c" };
console.log(Object.keys(obj)); // ['0', '1', '2']

// Array-like object with random key ordering
const anObj = { 100: "a", 2: "b", 7: "c" };
console.log(Object.keys(anObj)); // ['2', '7', '100']

// getFoo is a non-enumerable property
const myObj = Object.create(
  {},
  {
    getFoo: {
      value() {
        return this.foo;
      },
    },
  }
);
myObj.foo = 1;
console.log(Object.keys(myObj)); // ['foo']
//* If you want all string-keyed own properties, including non-enumerable ones, see Object.getOwnPropertyNames().

//? Using Object.keys() on primitives
//* Non-object arguments are coerced to objects. Only strings may have own enumerable properties, while all other primitives return an empty array.

// Strings have indices as enumerable own properties
console.log(Object.keys("foo")); // ['0', '1', '2']

// Other primitives have no own properties
console.log(Object.keys(100)); // []

//! Source => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
