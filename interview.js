// /* 1. given a string reverse it ====================================> */

// // const reverseStr = (str) => {
// //   return str.split("").reverse().join("");
// // };

// // console.log(reverseStr("I will get a job soon"));

// /* 2. find the charactor appears the most, and how many times appear
// ====================================> */

// maxChar("dgjkdjgkdjglggg5555555");

// function maxChar(str) {
//   let obj = {};
//   for (let word of str) {
//     obj[word] ? (obj[word] += 1) : (obj[word] = 1);
//   }
//   let maxWord = "";
//   let maxNum = 0;

//   for (let word in obj) {
//     console.log(obj[word]);

//     if (obj[word] > maxNum) {
//       maxNum = obj[word];
//       maxWord = word;
//     }
//   }
//   console.log(maxWord, maxNum);
// }

// /* 3.  모음 찾기 ====================================> */
// // new Set() : 반복되는것을 빼줌
// findVowels("abracadabrai");

// function findVowels(str) {
//   let vowels = "";
//   vowels = new Set(str.match(/[aeiou]/g));
//   console.log([...vowels]);
// }

// /* 3.  Fibonacci ====================================> */

// const fibonacci = (n) => {
//   let [a, b] = [0, 1];
//   console.log();

//   while (n > 1) {
//     [a, b] = [b, a + b];
//     n -= 1;
//   }
//   return a;
// };

// console.log(fibonacci(4));

const a = "kdjgkhsklghldshglksdhg";

const haha = (str) => {
  let obj = {};
  for (let word of str) {
    console.log(str[word]);

    obj[word] ? (obj[word] += 1) : (obj[word] = 1);
  }
  console.log(obj);

  let maxNum = 0;
  let mexChar = "";
  for (let word in obj) {
    if (obj[word] > maxNum) {
      maxNum = obj[word];
      maxChar = word;
    }
  }
  console.log(maxChar);
  console.log(maxNum);
};

haha(a);
