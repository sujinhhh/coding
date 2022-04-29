// import arr from "arr";
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

// class Experiment {
//   static publisher = "sujin";
//   constructor(article) {
//     this.article = article;
//   }
//   static print() {
//     console.log(Experiment.publisher);
//   }
// }
// const experiment1 = new Experiment(1);
// const experiment2 = new Experiment(2);
// console.log(Experiment.print());

// // Static  ==============================>

// class Shape {
//   constructor(width, height, color) {
//     this.width = width;
//     this.height = height;
//     this.color = color;
//   }
//   draw() {
//     console.log(`drawiong ${this.color} color of`);
//   }
//   getArea() {
//     console.log(this.width * this.height);
//   }
// }

// class Rectangle extends Shape {}
// class Triangle extends Shape {
//   getArea() {
//     super.getArea();
//     console.log((this.width * this.height) / 2);
//   }
// }
// const rectangle = new Rectangle(20, 20, "blue");
// const triangle = new Triangle(20, 20, "blue");
// triangle.getArea();

// // instanceOf // instance 가 맞는지 확인

// // object = {key : value}

// const obj1 = {}; // object literal
// const obj2 = new Object(); // object constructor

// function print(person) {
//   console.log(person.name);
//   console.log(person.age);
// }
// const sujin = { name: "sujin", age: 42 };

// sujin.job = "programer";

// console.log(sujin.job);

// delete sujin.job;
// console.log(sujin.job);

// // Computed properties =>['name'] : 어떤게 올지 모를 때, 나중에 결정되는것에 씀

// console.log(sujin.age);
// console.log(sujin["name"]);

// function printValue(obj, key) {
//   console.log(obj[key]);
// }
// printValue(sujin, "age");

// // Propery value shorhand

// const person1 = { name: "bob", age: 2 };
// const person2 = { name: "Jaen", age: 4 };

// // function makeName(name, age) {
// //     return {
// //         name,
// //         age
// //     }
// // }

// //  위에 거랑 똑같은거 class 버전 Constructor function
// function MakeName(name, age) {
//   this.name = name;
//   this.age = age;
// }
// const person3 = new MakeName("sujin", 57);
// console.log(person3);

// // in operator : 키가 있는지 없는지 확이

// console.log("name" in person3);

// //  for ..in ve for ..of

// for (key in person3) {
//   key;
// }

// const array = [1, 2, 3, 4, 5];
// for (value of array) {
//   console.log(value);
// }

// // Object.assign // 오브젝트 복사
// const user4 = Object.assign({}, person3);
// console.log(user4);

// Array ==============================>

// const arr = [4, 1, 2, 0, 5];
// const arr1 = ["✨", "😱"];
// //  마지막꺼 찾기
// console.log(arr[arr.length - 1]);

// //  array print 하기

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
// for (let i of arr) {
//   console.log(i);
// }

// arr.forEach((a) => console.log(a));
// arr.push("⭕️");
// arr.unshift("⏰");
// arr.shift("⏰");
// arr.splice(3, 0, "⭐️");
// console.log(arr);
// const slic = arr.slice(0, 3);
// console.log(arr.concat(arr1));
// console.log([...arr, ...arr1]);

// // searching

// console.log(arr.indexOf(6));
// console.log(arr.includes(6));

// // lastIndexOf // 마지막 인덱스
// // indexOf // 첫번째 인덱스

// // make a string out of an arry
// // join () // array 를 string으로 만들어줌 ('기호')를 넣어서
// const fruit = ["apple", "banna", "orange"];
// const a = fruit.join(" ♥️ ");
// console.log(a);
// const b = a.split("♥️").reverse().join(" ♥️ ");
// console.log(b);

// // make an array out of a string
// const fruit1 = "apple,banna,orange";
// console.log(fruit1.split(","));
// console.log();

// // make this array look like this [5,4,3,2,1]

// // reverse() 는 배열인 경우에만 가능

// const array = [1, 2, 3, 4, 5];

// console.log(array.reverse());

// // make new array without the frist twe elments

// const arr3 = [1, 2, 3, 4, 5];
// const arr4 = arr3.slice(2);
// console.log(arr3.splice(0, 2));
// console.log(arr3);

// class
class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

// find a student with the score 90
// const good = students.find((student) => student.score === 90);
// console.log(good.name);

// // make an array of enrolled student

// const enlloled = students.filter((student) => student.enrolled == true);
// enlloled.forEach((student) => console.log(student.name));

// map, forEach 차이점
// make an array containing only the student's scores
const scores = students.map((student) => student.score + "♥️");
console.log(scores);

// check if there is a student with the score lower than 50

console.log(students.every((student) => student.score > 50));

// compute students' evarage score
const avarage = students.reduce((total, curr) => total + curr.score, 0);
console.log(avarage/students.length);

// make a string containing all scores
// result 45,80,90,66,88

const toString = students.map((student)=>student.score)
console.log(...toString);

toString.sort((a,b)=> a-b)
console.log(toString);