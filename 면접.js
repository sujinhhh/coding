// 1.Fibonacci 수열 ----------------------------------

const fibonacci = (n) => {
  let arr = [0, 1];
  for (let i = 2; i < n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr[n - 1];
};

console.log(fibonacci(8));

const fib = (num, arr = [0, 1]) => {
  if (num <= 2) return arr;
  const [first, next] = arr.slice(-2);
  return fib(num - 1, [...arr, first + next]);
};
console.log(fib(8));

// 1.Fibonacci 수열 ----------------------------------

// 2. palindrome ----------------------------------

// const palindrome = (str) => {
//   str = str.toLowerCase().split("").reverse().join(""));
// };
// palindrome("sujin");

// 3. fizzbuzz ----------------------------------

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

// 4. Write a functon that removes odd numbers from an arry of numbers

const evenNumber = (arr) => {
  const evenNum = arr.filter((even) => even % 2 === 0);
  console.log(evenNum);
};
evenNumber([1, 2, 3, 4, 5, 7]);

// ==> if
const evenNumber = (n) => {
  let newArray = [];
  for (let i = 0; i < n.length; i++) {
    if (n[i] % 2 === 0) newArray.push(n[i]);
  }
  console.log(newArray);
};

evenNumber([1, 2, 3, 4, 5, 7]);

// 5. 기본개념

// const a = {
//     b: {
//       c: 4,
//     },
//   };
//   let d = a; // pointing a
//   a.b.c = 5;

//   console.log(d.b.c);
//   console.log(a.b.c);

// 6. 배열값 짝수를 빼내서 4곱해서 다 더하기

const items = [1, 2, 3, 4, 5, 6];

const result = items
  .filter((num) => num % 2 === 0)
  .map((num) => num * 4)
  .reduce((a, b) => a + b, 0);

//   const result = items
//   .filter((num) => num % 2 === 0)
//   .reduce((a, b) => a+(b*4), 0);

// console.log(result);

// 7. find the charactor appears the most, and how many times appear ********
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

// 8. 숫자를 반대로 만들기  *****************
// 500 : -5
// 12 : 21

const palindromeNum = (num) => {
  return parseInt(num.toString().split("").reverse().join(""));
};
console.log(palindromeNum(500));

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

//10. 0이 들어간 배열 곱하기

// const muli = (...arg) => {
//   console.log(arg);
//   const result = arg.reduce((total, item) => {
//     return item ? item * total : total + item;
//   }, 1);
//   console.log(result);
// };
// muli(0, 3, 7, 8);

//11. 날짜 구하기 desrtucture

const date1 = new Date("June 16, 2021");
const date2 = new Date("July 14, 2021");

const getDays = (date1, date2) =>
  Math.round(Math.abs(date2 - date1) / (1000 * 3600 * 24));

console.log(getDays(date1, date2));

// 13.  모음 찾기 ====================================> */
// // new Set() : 반복되는것을 빼줌
// findVowels("abracadabrai");

// function findVowels(str) {
//   let vowels = "";
//   vowels = new Set(str.match(/[aeiou]/g));
//   console.log([...vowels]);
// }

// 14. 숫자 다 합하기

function sumUPTo(num) {
  let totlalNum = 0;
  for (let i = 1; i <= num; i++) {
    totlalNum += i;
  }
  return totlalNum;
}
console.log(sumUPTo(3));
