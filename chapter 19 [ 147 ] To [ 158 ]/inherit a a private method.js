class User {
  // Private Property
  #e;
  constructor(id, username, eSalary) {
    this.i = id;
    this.u = username;
    this.#e = eSalary;
  }

  getSalary() {
    return parseInt(this.#e);
  }

  #privateMethod() {
    console.log('This is a private method in User.');
  }

  callPrivateMethod() {
    this.#privateMethod();
  }
}

class Admin extends User {
  constructor(id, username,eSalary, permissions) {
    super(id, username,eSalary);
    this.p = permissions;
  }

  #privateMethod() {
    console.log('This is a private method in Admin.');
  }

  callPrivateMethod() {
    super.callPrivateMethod(); // Call the private method from the parent class
    this.#privateMethod();    // Call the private method from the Admin class
  }
}

let userOne = new User(100, "Elzero", "5000 Gneh");
let adminOne = new Admin(200, "AdminZero","10000 Gneh", "All Permissions");

console.log(userOne.u);                  // Accessing public property
console.log(userOne.getSalary() * 0.3);   // Accessing public method
userOne.callPrivateMethod();              // Accessing private method in User

console.log(adminOne.u);                  // Accessing public property from User
console.log(adminOne.p);                  // Accessing public property from Admin
console.log(adminOne.getSalary() * 0.3);   // Accessing public method from User
adminOne.callPrivateMethod();              // Accessing private method in User and Admin




//class User {
//  // Private Property
//  #e;
//  constructor(id, username, eSalary) {
//    this.i = id;
//    this.u = username;
//    this.#e = eSalary;
//    this.initialize();
//  }

//  getSalary() {
//    return parseInt(this.#e);
//  }

//  // Protected method
//  initialize() {
//    this.#privateMethod();
//  }

//  #privateMethod() {
//    console.log('This is a private method in User.');
//  }
//}

//class Admin extends User {
//  constructor(id, username, permissions) {
//    super(id, username);
//    this.p = permissions;
//  }

//  #privateMethod() {
//    console.log('This is a private method in Admin.');
//  }

//  // Override the protected method
//  initialize() {
//    super.initialize(); // Call the protected method from the superclass
//    this.#privateMethod(); // Call the private method from the Admin class
//  }
//}

