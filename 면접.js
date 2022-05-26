// 1.Fibonacci 수열 ---------------------------------- ⭕️⭕️
// Write a fuction that calculates the nth term in the fibonacci sequence,
// where this sequence is defined as a series of numbers(0,1,1,2,3,5,8,13)
// and make whre the sum of any term is the result of adding the previous
// two terms.
// Note: make sure that your solution can calculate larger terms(n>30)
//  fib(0) //0  fib(1)//1
const fibonacci = (n) => {
  let arr = [0, 1];
  for (let i = 2; i < n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr[n - 1];
};

console.log(fibonacci(8));

// 2. palindrome ----------------------------------

// const palindrome = (str) => {
//   str = str.toLowerCase().split("").reverse().join(""));
// };
// palindrome("sujin");

// 3. fizzbuzz ---------------------------------- ⭕️

const fizzBuzzy = (n) => {
  let value = "";
  for (let i = 1; i <= n; i++) {
    i % 2 === 0 && i % 3 === 0
      ? (value += "fizzbuzz ")
      : i % 2 === 0
      ? (value += "fizz ")
      : i % 3 === 0
      ? (value += "buzz ")
      : (value += `${i} `);
  }
  console.log(value);
};
fizzBuzzy(10);

// 4. Write a functon that removes odd numbers from an arry of numbers ⭕️

// const evenNumber = (arr) => {
//   const evenNum = arr.filter((even) => even % 2 === 0);
//   console.log(evenNum);
// };
// evenNumber([1, 2, 3, 4, 5, 7]);

// // ==> if
// const evenNumber = (n) => {
//   let newArray = [];
//   for (let i = 0; i < n.length; i++) {
//     if (n[i] % 2 === 0) newArray.push(n[i]);
//   }
//   console.log(newArray);
// };

// evenNumber([1, 2, 3, 4, 5, 7]);

// 5. 기본개념 ⭕️

// const a = {
//     b: {
//       c: 4,
//     },
//   };
//   let d = a; // pointing a
//   a.b.c = 5;

//   console.log(d.b.c);
//   console.log(a.b.c);

// 6. 배열값 짝수를 빼내서 4곱해서 다 더하기 ⭕️⭕️

const items = [1, 2, 3, 4, 5, 6];

const result = items
  .filter((num) => num % 2 === 0)
  .map((num) => num * 4)
  .reduce((a, b) => a + b, 0);

//   const result = items
//   .filter((num) => num % 2 === 0)
//   .reduce((a, b) => a+(b*4), 0);

// console.log(result);

// 7. find the charactor appears the most, and how many times appear ********⭕️
//

// const maxChar = (str) => {
//   let obj = {};
//   for (let char of str) {
//     !obj[char] ? (obj[char] = 1) : obj[char]++;
//   }
//   let maxChar = "";
//   let maxNum = 0;
//   for (let char in obj) {
//     if (obj[char] > maxNum) {
//       maxNum = obj[char];
//       maxChar = char;
//     }
//   }
//   console.log(maxNum, maxChar);
// };

// maxChar("dgjkdjgkdjglggg5555555");

// 8. 숫자를 반대로 만들기  ***************** ⭕️⭕️
// 500 : -5
// 12 : 21

// const palindromeNum = (num) => {
//   return parseInt(num.toString().split("").reverse().join(""));
// };
// console.log(palindromeNum(500));

// 9. Write a function ‘chunk(arr, n)’ that returns a chunked array of size n at the least.
// Eg:  given, [ 1, 4, 14,2,5,6,3] ,n=3
// Return [1,4,14][2,5,6] [3]

// function chunk(arr, n) {
//   let chunked = [];
//   for (let elem of arr) {

//     chunked = arr.splice(0,n)
//     let last = arr.pop()

//     console.log(chunked,last);
//   }
// }
// chunk(num, 3);

// ========================> 내가 푼거
// let array = [];
// for (let i = 0; i < arr.length; i++) {
//   array.push(arr.splice(0, n));
// }
// console.log([...array, arr]);
// ========================> 내가 푼거

//10. 0이 들어간 배열 곱하기 ⭕️

// const muli = (...arg) => {
//   console.log(arg);
//   const result = arg.reduce((total, item) => {
//     return item ? item * total : total + item;
//   }, 1);
//   console.log(result);
// };
// muli(0, 3, 7, 8);

//11. 날짜 구하기 desrtucture

// const date1 = new Date("June 16, 2021");
// const date2 = new Date("July 14, 2021");

// const getDays = (date1, date2) =>
//   Math.round(Math.abs(date2 - date1) / (1000 * 3600 * 24));

// console.log(getDays(date1, date2));

// 13.  모음 찾기 ====================================> */⭕️
// // new Set() : 반복되는것을 빼줌
// findVowels("abracadabrai");

// function findVowels(str) {
//   let vowels = "";
//   vowels = new Set(str.match(/[aeiou]/g));
//   console.log([...vowels]);
// }

// 14. 숫자 다 합하기

// function sumUPTo(num) {
//   let totlalNum = 0;
//   for (let i = 1; i <= num; i++) {
//     totlalNum += i;
//   }
//   return totlalNum;
// }
// console.log(sumUPTo(3));

// write a functions that takes two numbers and returns the sum of
// those nums⭕️

function add(...number2) {
  console.log(...number2);
  return number2.reduce((a, b) => a + b, 0);
}
console.log("add", add(2, 3, 4, 5));

// or

function add(...number2) {
  console.log(number2);
  let sum = 0;
  for (let i = 0; i < number2.length; i++) {
    sum += number2[i];
  }
  return sum;
}
console.log("add", add(2));

// write a function that takes two strings, A and B
// and returns wheather B is in A in a case-insensitive way ⭕️

function stringIncludes(a, b) {
  const lowerCaseA = a.toLowerCase();
  return lowerCaseA.includes(b);
}
console.log(
  stringIncludes("I drove th New York in a van with my friend", "new")
);

// Write a function that takes an arrow of object, and returns on
// array of the objects 'name' property. only if the properties exists⭕️

function getNames(arr) {
  let names = [];
  for (let obj of arr) {
    if (obj.name) {
      names.push(obj.name);
    }
  }
  return names;
}

console.log(
  getNames([
    { a: 1 },
    { name: "SUjin" },
    {},
    { name: "MArk" },
    { name: "sophia" },
    { b: 2 },
  ])
);

// Write a function that takes an arrow of numbers and returns
// the index of the largest number ⭕️
function getLargestNumber() {
  let largest = arr[0];
  for (let num of arr) {
    if (num > largest) largest = num;
  }
  return largest;
}
console.log(getLargestNumber([7, 1, 4, 12, 9]));

// Write a function that returns a promise that resolves
// after a number of milliseconds

function delay(n) {}
(async () => {
  console.time("Testind delay");
  await delay(1000);
  console.log(timeEnd("Testing delay"));
})();

// flatten the Array

let arr = [
  [1, 2],
  [3, 4],
  [5, 6, [7, 8], 9],
];
let flatten = arr.flat(2);
console.log(flatten);

function customFlat(arr, depth = 1) {
  let result = [];
  arr.forEach((ar) => {
    if (Array.isArray(ar) && depth > 0) {
      result.push(...customFlat(ar, depth - 1));
    } else result.push(ar);
  });
  return result;
}
console.log(customFlat(arr));

// 숫자 모두 곱하기
function multifly(n) {
  if (n === 1) return 1;
  return n * multifly(n - 1);
}

console.log(multifly(4));

// Given a positive integer num, return the sum of all odd fibonacci numbers that are less than or equal to num.
// The first two numbers in the Fibonacci sequenc are 1 and 1,1,3,5
// For example, sumFib(10) return 10, because odd fibo nums are 1,1,3,5

function sumFib(num) {
  let a = 1;
  let b = 1;
  let sum = a;

  while (b <= num) {
    if (b % 2 !== 0) {
      sum += b;
    }
    [a, b] = [b, a + b];
  }

  return sum;
}
sumFib(10);

// 1 1 3 5
//
// 1 1
// 1 2
// 2 3
