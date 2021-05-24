/* 1. given a string reverse it *********
reverse('apple') ='elppa' 
palindrome
 */

// function reverse(str) {
//   str = str.split("").reverse("").join('');
//   console.log(str);
// }

// reverse("sujin");

// 2. find the charactor appears the most, and how many times appear ********
//

// const maxChar = (str) => {
//   let obj = {};

//   for (let char of str) {

//     !obj[char] ? (obj[char] = 1) : obj[char]++}

//   let maxNumber = 0;
//   let maxChar = "";
//   for (let char in obj) {
//     console.log(obj[char]);
//     if (obj[char] >= maxNumber) {
//       maxNumber = obj[char];
//       maxChar = char;
//     }
//   }
//   console.log(maxNumber, maxChar);
// };

// maxChar("dgjkdjgkdjglggg5555555");

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

// 숫자를 반대로 만들기  *****************
// 500 : -5
// 12 : 21

// const palindromeNum = (num) => {
//   return parseInt(num.toString().split("").reverse().join(""));
// };
// console.log(palindromeNum(21));

// const numbers = [3, 4, 5, 2, 5, 6, 3];

// const number = (num) => {
//   numberArr = [];
//   for (let arr of num)
//     !numberArr[arr] ? (numberArr[arr] = 1) : numberArr[arr]++;

//   let maxNum = 0;
//   let maxChar = "";
//   for (let arr in numberArr) {
//     if(numberArr[arr]>=maxNum){
//       maxNum = numberArr[arr]
//       maxChar = numberArr
//     }
//   }
//   console.log(`${maxNum}:${maxChar}`);
// };

// number(numbers);

const num = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(num[num.length - 1]);

const myRe = /d(b+)(d)/i;
const myArray = myRe.exec("cdbBdbsbz");
console.log(myArray);

// function chunk(arr, n) {
//   let chunked = [];
//   for (let elem of arr) {

//     chunked = arr.splice(0,n)
//     let last = arr.pop()

//     console.log(chunked,last);
//   }
// }
// chunk(num, 3);

// pagination

const num2 = [1, 2, 3, 4, 5, 6, 7, 8];

const newArray = (arr, n) =>
  Array.from({ length: n }, (_, index) => {
    let start = index * n;
    let tempItem = arr.slice(start, start + n);
    return tempItem;
  });

console.log(newArray(num2, 3));

//  배열 수 셈해서 리턴하기

function multiArr(arr) {
  let newArray = Array.from(arr, (x) => x * x);
  console.log(newArray);
}

multiArr(num);
