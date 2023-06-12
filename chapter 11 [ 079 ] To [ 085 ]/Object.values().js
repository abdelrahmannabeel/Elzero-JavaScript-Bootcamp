//! ============= Object.values() =============

//* The Object.values() static method returns an array of a given object's own enumerable string-keyed property values.

const obj1 = { foo: "bar", baz: 42 };
console.log(Object.values(obj1)); // ['bar', 42]

// Array-like object
const arrayLikeObj11 = { 0: "a", 1: "b", 2: "c" };
console.log(Object.values(arrayLikeObj11)); // ['a', 'b', 'c']

// Array-like object with random key ordering
// When using numeric keys, the values are returned in the keys' numerical order
const arrayLikeObj21 = { 100: "a", 2: "b", 7: "c" };
console.log(Object.values(arrayLikeObj21)); // ['b', 'c', 'a']

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
myObj.foo = "bar";
console.log(Object.values(myObj)); // ['bar']

//? Syntax
Object.values(obj);

//? Parameters
//* obj => An object.

//? Return value
//* An array containing the given object's own enumerable string-keyed property values.

//? Description
//* Object.values() returns an array whose elements are strings corresponding to the enumerable string-keyed property values found directly upon object. This is the same as iterating with a for...in loop, except that a for...in loop enumerates properties in the prototype chain as well. The order of the array returned by Object.values() is the same as that provided by a for...in loop.

//* If you need the property keys, use Object.keys() instead. If you need both the property keys and values, use Object.entries() instead.

//? Examples
//* Using Object.values()
const obj = { foo: "bar", baz: 42 };
console.log(Object.values(obj)); // ['bar', 42]

// Array-like object
const arrayLikeObj1 = { 0: "a", 1: "b", 2: "c" };
console.log(Object.values(arrayLikeObj1)); // ['a', 'b', 'c']

// Array-like object with random key ordering
// When using numeric keys, the values are returned in the keys' numerical order
const arrayLikeObj2 = { 100: "a", 2: "b", 7: "c" };
console.log(Object.values(arrayLikeObj2)); // ['b', 'c', 'a']

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
myObj.foo = "bar";
console.log(Object.values(myObj)); // ['bar']

//* Using Object.values() on primitives
//* Non-object arguments are coerced to objects. Only strings may have own enumerable properties, while all other primitives return an empty array.

// Strings have indices as enumerable own properties
console.log(Object.values("foo")); // ['f', 'o', 'o']

// Other primitives have no own properties
console.log(Object.values(100)); // []

//! Source => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values
