// const User = function (name, age) {
//   this.name = name;
//   this.age = age;
//   this.showTime = function () {
//     console.log(this.name);
//   };
// };

// const mike = new User("mike", 30);

// 위에거랑 밑에거는 같은거

// class User2 {
//   constructor() {
//     this.name = name;
//     this.age = age;
//   }
//   showTime() {
//     console.log(this.name);
//   }
// }

// const tom = new User2("tom", 20);

// 상속

// class Car {
//   constructor(color, name) {
//     this.color = color;
//     this.name = name;
//   }
//   drive() {
//     console.log("drive");
//   }
//   descrive() {
//     console.log(`this is ${this.name} and color is ${this.color}`);
//   }
// }

// class Honda extends Car {
//   constructor(color, name) {
//     // 부모 constructor 를 받아오기 위해서 super 써야함, parameter 도 넣어 주어야 함
//     super(color, name);
//     this.navi = 1;
//   }

//   price() {
//     console.log("this is cheap");
//   }
// }

// const honda = new Honda("black", "honda");
// console.log(honda);

// ============================================ lesson 1

//  instance Properties(key) :  name, age, height
//  instance method : talk

// class Rectangle {
//   constructor(name, job, width, height) {
//     this.name = name;
//     this.job = job;
//     this.width = width;
//     this.height = height;
//   }
//   getArea() {
//     return this.width * this.height;
//   }
// }

// const a = new Rectangle("sujim", "programer", 10, 5);
// console.log(a.getArea());

// ============================================ constructor에 callback 넣기

class Counter {
  constructor(run) {
    this.counter = 0;
    this.callback = run;
  }
  increment() {
    this.counter++;
    if (this.counter % 2 === 0) {
      this.callback && this.callback(this.counter);
    } else console.log(this.counter);
  }
}

const doSomething = (num) => {
  console.log("hey", num);
};
const doSomethingElse = (num) => {
  console.log("개인연구", num);
};

const increase = new Counter(doSomething);
const alert = new Counter(doSomethingElse);

increase.increment();
increase.increment();
increase.increment();
increase.increment();
increase.increment();
increase.increment();

alert.increment();
alert.increment();
alert.increment();
alert.increment();
