// // call back

// function getNumber(cb) {
//   setTimeout(() => {
//     cb(10);
//   }, 10000);
// }

// getNumber((n) => {
//   console.log(n);
// });

// // promise

// function getNumberPr() {
//   return new Promise((resolve, reject) => {
//     getNumber(resolve);
//   });
// }

// const promise = getNumberPr();

// promise.then((n) => console.log(n));

//  How does 'this' work ?

// const person = {
//     name: 'sujin',
//     sayName: function(){
//         console.log(this.name);

//     }
// }
// person.sayName()

//  *** What is Prototype?

// const vehicle = {
//     drive : function() {
//         console.log('the car is driving');

//     }
// }

// const car = {
//     make: "Honda"
// }

// console.log(Object.setPrototypeOf(car, vehicle));

// car.drive()

console.log(fizzbuzz(3, 6));

function fizzbuzz(num1, num2) {
  let returnValue = "";
  for (let i = 1; i <= 30; i++) {
    if (i % num1 === 0 && i % num2 === 0) returnValue += "fizz&buzz, ";
    else if (i % num1 === 0) returnValue += "fizz, ";
    else if (i % num2 === 0) returnValue += "buzz, ";
    else returnValue += i + ", ";
  }
  return returnValue;
}

var a = [1];
var b = [1];
console.log(a == b);
