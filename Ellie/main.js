// Getter, Setter ==============================>

// class User {
//   constructor(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }
//   get age() {
//     return this._age;
//   }
//   set age(value) {
//     this._age = value < 0 ? 0 : value;
//   }
// }

// const user1 = new User("sujin", "job", -1);
// console.log(user1.age);

// Static  ==============================>

class Experiment {
  static publisher = "sujin";
  constructor(article) {
    this.article = article;
  }
  static print() {
    console.log(Experiment.publisher);
  }
}
const experiment1 = new Experiment(1);
const experiment2 = new Experiment(2);
console.log(Experiment.print());

// Static  ==============================>

class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }
  draw() {
    console.log(`drawiong ${this.color} color of`);
  }
  getArea() {
    console.log(this.width * this.height);
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  getArea() {
    super.getArea();
    console.log((this.width * this.height) / 2);
  }
}
const rectangle = new Rectangle(20, 20, "blue");
const triangle = new Triangle(20, 20, "blue");
triangle.getArea();

// instanceOf // instance 가 맞는지 확인

// object = {key : value}

const obj1 = {}; // object literal
const obj2 = new Object(); // object constructor

function print(person) {
  console.log(person.name);
  console.log(person.age);
}
const sujin = { name: "sujin", age: 42 };

sujin.job = "programer";

console.log(sujin.job);

delete sujin.job;
console.log(sujin.job);

// Computed properties =>['name'] : 어떤게 올지 모를 때, 나중에 결정되는것에 씀

console.log(sujin.age);
console.log(sujin["name"]);

function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(sujin, "age");

// Propery value shorhand

const person1 = { name: "bob", age: 2 };
const person2 = { name: "Jaen", age: 4 };

// function makeName(name, age) {
//     return {
//         name,
//         age
//     }
// }

//  위에 거랑 똑같은거 class 버전 Constructor function
function MakeName(name, age) {
  this.name = name;
  this.age = age;
}
const person3 = new MakeName("sujin", 57);
console.log(person3);

// in operator : 키가 있는지 없는지 확이

console.log("name" in person3);

//  for ..in ve for ..of

for (key in person3) {
  key;
}

const array = [1, 2, 3, 4, 5];
for (value of array) {
  console.log(value);
}

// Object.assign // 오브젝트 복사
const user4 = Object.assign({}, person3);
console.log(user4);
