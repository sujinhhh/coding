// import 방법 from "방법";
// 1 ----------------------------------

// const palindrome = (str) => {
//   str = str.toLowerCase();
//   console.log(str === str.split("").reverse().join(""));
// };
// palindrome("sujin");

// // 2 ----------------------------------

// function foo1() {
//   return {
//     bar: "heloo",
//   };
// }
// function foo2() {
//   return;
//   {
//     bar: "hello";
//   }
// }

// console.log(foo1());
// console.log(foo2());

// 3.Fibonacci 수열 ----------------------------------

// 방법 1

// function Fibonacci(n) {
//   let arr = [0, 1];
//   for (let i = 2; i < n; i++) {
//     arr.push(arr[i - 1] + arr[i - 2]);
//   }
//   return arr[n-1];
// }
// console.log(Fibonacci(8));

// Recursive
// 방법 2
// function recursiveFibOne(n){
//     if ( n < 3) {
//         return n-1
//     } else {
//         return recursiveFibOne(n-1) + recursiveFibOne(n-2)
//     }
// }
// console.log(recursiveFibOne(4))

// 방법 3
//  const initialHash = {
//      1: 0,
//      2: 1,
//  }
//   function fib(num, hash= initialHash){
//     if(hash[num] === undefined ) {
//         hash[num] = fib(num-1) + fib(num - 2)
//     }
//     return hash[num];
//   }

//   console.log(fib(9))

// 방법 4  ====>

// function fibby(n) {
//   let [a, b] = [0, 1];
//   while (n > 1) {
//     [a, b] = [b, a + b];
//     n -= 1;
//   }
//   return console.log(a);
// }
// fibby(5);

// 4.Fizzbuzz
// ex 1. Given a number as an input, print out every integer from 1 to that
// number. However, when the integer is divisibel by 2, print out 'Fizz', 3 'buzz'
// when it's divible by both
// 2 and 3, print out Fizzbuzz

// function Fizzbuzz(num) {
//   for (let i = 1; i <= num; i++) {
//     if (i % 2 === 0 && i % 3 === 0) console.log("Fizz buzz");
//     else if (i % 2 === 0) console.log("fizz");
//     else if (i % 3 === 0) console.log("buzz");
//     else console.log(i);
//   }
// }

// Fizzbuzz(6);

// ex 2. Write a program that prints the numbers from 1 to 100, but
// for muliples of 3 print 'fizz' instead of the number and for multiples of
// 5 print 'buzz' for Numbers wich are multiple of both 3 and 5 'Fizzbuzz'
// const btn = document.getElementById("btn");

// btn.addEventListener("click", buzzIt);

// function fizzybuzzy(value1, value2) {
//   let returnValue = "";
//   for (let i = 1; i <= 7; i++) {
//     if (i % value1 === 0 && i % value2 === 0) returnValue += "Fizzbuzz ";
//     else if (i % value1 === 0) returnValue += "Fizz ";
//     else if (i % value2 === 0) returnValue += "Buzz ";
//     else returnValue += i;
//   }
//   return returnValue;
// }

// function buzzIt() {
//   let output = "";
//   let val1 = document.getElementById("fizz").value;
//   let val2 = document.getElementById("buzz").value;

//   output = fizzybuzzy(val1, val2);
//   document.getElementById("results").innerHTML = output;
// }

// ---------> better way 1

// function fizzbuzz(value1, value2) {
//   let returnValue = "";
//   let Fizz = false;
//   let Buzz = false;
//   for (let i = 1; i <= 10; i++) {
//     Fizz = i % value1 == 0;
//     Buzz = i % value2 == 0;
//     switch (true) {
//       case Fizz && Buzz: {
//         returnValue += "FizzBuzz, ";
//         break;
//       }
//       case Fizz: {
//         returnValue += "fizz, ";
//         break;
//       }
//       case Buzz: {
//         returnValue += "buzz, ";
//         break;
//       }
//       default: {
//         returnValue += i + ", ";
//         break;
//       }
//     }
//   }
//   return returnValue;
// }

// function buzzIt() {
//   let output = "";
//   let val1 = document.getElementById("fizz").value;
//   let val2 = document.getElementById("buzz").value;

//   output = fizzbuzz(val1, val2);
//   document.getElementById("results").innerHTML = output;
// }

// ---------> better way 2

// function fizzbuzz3(value1, value2) {
//   let returnValue = "";
//   for (let i = 1; i <= 10; i++) {
//     returnValue +=
//       ((i % value1 == 0 ? "fizz" : "") + (i % value2 == 0 ? "buzz" : "") || i) +
//       " ";
//   }
//   return returnValue;
// }

// function buzzIt() {
//   let output = "";
//   let val1 = document.getElementById("fizz").value;
//   let val2 = document.getElementById("buzz").value;

//   output = fizzbuzz3(val1, val2);
//   document.getElementById("results").innerHTML = output;
// }

// ---------> Fizzbuzz the Meta stratagy

// function fizzbuzzM(value1, value2) {
//   let returnArray = [];
//   for (let i = 1; i <= 10; i++) {
//     returnArray[i] =
//       (i % value1 == 0 ? "fizz" : "") + (i % value2 == 0 ? "buzz" : "") || i;
//   }
//   return returnArray;
// }

// function buzzIt() {
//   let output = "";
//   let val1 = document.getElementById("fizz").value;
//   let val2 = document.getElementById("buzz").value;

//   output = fizzbuzzM(val1, val2);
//   document.getElementById("results").innerHTML = output;
// }

// //  Add two values

// function add(a, b) {
//   return a + b;
// }

// console.log(2, 3);

//  Write a functon that removes odd numbers from an arry of numbers

// 질문

// const a = {
//   b: {
//     c: 4,
//   },
// };
// let d = a; // pointing a
// a.b.c = 5;

// console.log(d.b.c);
// console.log(a.b.c);

// 질문 setup Debounce

const input = document.querySelector("input");

const debounce = (func, timer) => {
  let timeId = null;
  return (...args) => {
    if (timeId) {
      clearTimeout(timeId);
    }
    timeId = setTimeout(() => {
      func(...args);
    }, timer);
  };
};

input.addEventListener(
  "keyup",
  debounce((e) => {
    console.log(e);
  }, 1000)
);


var a= 10
let b= 10

console.log(a===b);
