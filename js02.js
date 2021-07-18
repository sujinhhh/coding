// first class citizens. = treated nomally

// function pow(x, y) {
//   let total = 1;
//   for (let i = 0; i < y; i++) {
//     total *= x;
//   }
//   return total;
// }

// let firstClass = [pow];
// console.log(firstClass[0](3, 3));

// let firstObject = {
//   power: pow,
// };
// console.log(firstObject.power(3, 3));

// //  밑에 두개는 같은 뜻
// function callbackEx(callback) {
//   return callback(3, 5);
// }
// console.log(callbackEx(pow));

// 위에꺼랑 같은 뜻
// function callbackEx() {
//   return pow;
// }
// console.log(callbackEx()(3, 5));

// 57. Memorization adn Algorithm Optomization------------------------------------>

// memory.insideExcuted = [];
// memory.outsideExcuted = [];
// function memory(x, y) {
//   let total = 1;
//   for (let i = 0; i < y; i++) {
//     total *= x;
//     memory.insideExcuted.push(total);
//   }
//   memory.outsideExcuted.push(total);
//   return total;
// }
// console.log(memory(3, 3));

// console.log(memory.insideExcuted);
// console.log(memory.outsideExcuted);

// 58. Default Parameters, Rest Parameters, Implicit Parameters --------->

function defaultPara(x, y = 2) {
  // => 이렇게 쓸수도 있음
  //   if (y == undefined) {
  //     y = 2;
  //   }
  // => 이렇게 쓸수도 있음
  //   typeof y == undefined ? 2 : y;
  let total = 1;
  for (let i = 0; i < y; i++) {
    total *= x;
  }
  return total;
}

console.log(defaultPara(4));

// Rest Parameters ****************

// function restPara(x, y, ...extra) {
//   let total = 1;
//   for (let i = 0; i < y; i++) {
//     total *= x;
//   }
//   return total;
// }

// console.log(restPara(4, 4, 5, 6, 7, 7));

// //  제일 큰 숫자 찾기

// function largest(x, ...extra) {
//   let largest = x;
//   for (let i = 0; i < extra.length; i++) {
//     // if (largest < extra[i]) largest = extra[i];
//     largest < extra[i] ? (largest = extra[i]) : largest;
//   }
//   return largest;
// }

// console.log(largest(4, 5, 6, 20, 4, 88, 1000, 88));

// // Implicit Parameters (this, arguments )****************----------------->

// let me = {
//   name: " Sujin",
//   outputMe: function () {
//     console.log(this);
//   },
// };

// me.outputMe();

// //  window object

// function outputMe() {
//   "use strict";
//   console.log(this);
// }
// outputMe();

//67. bind with Arrow Function ----------------->
// 밑에 있는 기본이 되는 함수가 constructor function
// function Name(me, work) {
//   this.name = me;
//   this.job = work;
// }

// let me = new Name("Sujin", ["programmer", "service master"]);
// me.hobby = "video, audio editing";
// console.log(me);

// // 비교 object litaral ----------------->

// let person = {
//   // key :  value
//   name: "sujnj",
//   job: "programmer",
//   // method
//   fun: function () {
//     return this.job;
//   },
// };

// console.log(person.fun());

// // 73. Factory Function  ----------------->

// function User(name, job) {
//   let person = {
//     name, // property name : 위에 있는 파라미터 name
//     job,
//   };
//   return person;
// }
// const newUser = new User("sujin", "programmer");

// console.log(newUser);

// 74. Creating Prototype Methods for Constructor

// function protoUser(name, interest) {
//   this.name = name;
//   this.interest = interest;
//   this.outputStuff = () => {
//     console.log("My name is" + this.name, this.interest);
//   };
// }

// protoUser.prototype.greet = function () {
//   console.log("My name is" + this.name, this.interest);
// };

// let me = new protoUser("sujin", "programmer");
// console.log(me.outputStuff());
// console.log(me.greet());

// Prototype inheritance : object that from another object inheritance from
// 77. Setting an Object Prototype using Objet.setPrototypeOf

// let user = {
//   active: true,
//   job: "programmer",
//   greet: function () {
//     return this.name + " Good moring, You can do it";
//   },
// };
// let teacher = {
//   name: "sujin",
//   teaching: ["math", "science"],
//   class: function () {
//     let message = this.name + " teaches ";
//     this.teaching.forEach(function (e) {
//       message += e + "";
//     });
//     return message;
//   },
// };
// let student = {
//   name: "kavin",
//   major: "programming",
// };

// Object.setPrototypeOf(teacher, user);
// Object.setPrototypeOf(student, user);
// console.log(teacher.active);
// console.log(student.active);

// // 78. Override in Prototypal inheritance.
// student.active = false;
// console.log(teacher.greet());
// console.log(teacher.active);

// // 79. Instance properties vs Prototype Properties

// // 80. Polymorphism

// let member = [student, teacher];

// member.forEach((e) => console.log(e.greet()));
// console.log(teacher.class());

// // Check an Object for a Property Using in
// // --------------->
// console.log("이름있니", "name" in teacher);
// console.log("이름있니", teacher.name !== undefined);

// // 84. hasOwnProperty : 직계 오브젝트만 확인, 프로토타입은 확인하지 않음-------------------------->

// console.log("이름있니", teacher.hasOwnProperty(" "));

// // 85. How to get Array of property Names from an Object

// let properties = [];
// for (let prop in teacher) {
//   // 바로 직계만 넣을경우
//   if (teacher.hasOwnProperty(prop)) {
//     properties.push(prop);
//   }
//   console.log(prop);
// }
// properties;

//  86. Converting Object Literals to Constructiors.

function User() {
  this.active = false;
}
User.prototype.sayHello = function () {
  return this.name + " say hi";
};

function Student(name, major) {
  this.name = name;
  this.major = major;
}

function Teacher(name, teaching) {
  this.name = name;
  this.teaching = teaching;
}
//  프로토타입 연결

Student.prototype = new User();
Teacher.prototype = new User();
Teacher.prototype.sayHello = () => {
  return "Teacher say stay strong";
};

let student = new Student("kevin", "music");
let teacher = new Teacher("sujin", "programming");
console.log(student);
console.log(teacher);

// Instance of Operator : 이것이 유효한 값인지 확인해줌

console.log(teacher instanceof Teacher);

// function doSomething() {
//   return 1 + 1;
// }

// // 위에 리턴을 무시함
// let test = new doSomething();
// console.log(test);

// function Taco() {
//   this.toppings = ["cheese"];
// }
// Taco.prototype.make = function () {
//   console.log("making a taco...");
// };
// let myTaco = new Taco();
// console.log(myTaco);

// HTML
