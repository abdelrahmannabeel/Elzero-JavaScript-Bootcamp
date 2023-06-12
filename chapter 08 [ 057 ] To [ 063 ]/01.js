function sayHello(theName, theGender) {
  // Your Code Here
  theGender === "Male"
    ? (theGender = "Mr")
    : theGender === "Female"
    ? (theGender = "Miss")
    : (theGender = "");
  console.log(`Hello ${theGender} ${theName}`);
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"
