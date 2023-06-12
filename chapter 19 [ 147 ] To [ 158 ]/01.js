//function Car(name, model, price) {
//  this.n = name;
//  this.m = model;
//  this.p = price;
//}

class Car {
  constructor(name, model, price, description) {
    this.name = name;
    this.model = model;
    this.price = price;
    this.description = `Car Name Is ${this.name} And Model Is ${this.model} Price Is ${this.price}`;
  }
  run() {
    return `Car Is Running Now`;
  }
  stop() {
    `Car Is Stopped`;
  }
}
let car1 = new Car("MG", "2022", "420000");
let car2 = new Car("MG", "2022", "420000");
let car3 = new Car("MG", "2022", "420000");
// Needed Output
console.log(car1.description);
console.log(car1.run());
//("Car One Name Is MG And Model Is 2022 And Price Is 420000");
//("Car Is Running Now");
