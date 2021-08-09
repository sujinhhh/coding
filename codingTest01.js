// 배열값 짝수를 빼내서 4곱해서 다 더하기

const items = [1,2,3,4,5,6]

const result = items
.filter(num=> num % 2 === 0)
.map(num=>num * 4)
.reduce((a,b)=>a+b,0)


const items = [1, 2, 3, 4, 5, 6];

const result = items
  .filter((num) => num % 2 === 0)
  .reduce((a, b) => a+(b*4), 0);

console.log(result);


// **** optional chaning

// 해석,bad code =>
function displayJob(person) {
  if (person.job && person.job.title) {
    console.log(person.job.title);
  }
}

//  더 나은 코드
function displayJob(person) {
  if (person.job?.title) {
    console.log(person.job.title);
  }
}

//  person.job 이 있으면 title 표시하고 없음 물음표 뒤에꺼
function displayJob(person) {
  const title = person.job?.title ?? "no job";
  return title;
}

/* 1. given a string reverse it *********
reverse('apple') ='elppa' 
palindrome
 */

// function reverse(str) {
//   str = str.split("").reverse("").join('');
//   console.log(str);
// }

// reverse("sujin");

// 2. 


find the charactor appears the most, and how many times appear ********
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
//       maxChar = arr
//     }
//   }
//   console.log(`${maxNum}:${maxChar}`);
// };

// number(numbers);

const number = (num) => {
  let numberArr = [];
  for (let arr of num)
    !numberArr[arr] ? (numberArr[arr] = 1) : numberArr[arr]++;

  let maxNum = 0;
  let maxChar = "";
  for (let arr in numberArr) {
    if (numberArr[arr] >= maxNum) {
      maxNum = numberArr[arr];
      maxChar = arr;
    }
  }
  return `${maxNum}:${maxChar}`;
};

console.log(number("Iamaprogrammer"));

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

// 7. Write a function ‘chunk(arr, n)’ that returns a chunked array of size n at the least.
// Eg:  given, [ 1, 4, 14,2,5,6,3] ,n=3
// Return [1,4,14][2,5,6] [3]

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

// 특정 글자 찾기 ************

function getCount(str) {
  var vowelsCount = 0;
  vowels = str.match(/[aeiou]/g || []).length;
  console.log(vowels);
}

getCount("abracadabrai");

// 6, Write a function that removes odd numbers from an array of numbers

// const num2 = [1, 2, 3, 4, 5, 6, 7, 8];

// function removeOdd (num) {
//   return  num.filter((item)=>item % 2 === 0)
// }

// console.log(removeOdd(num2));

// 제일 큰 숫자 찾기

var num = Math.max(2, 4, 5, 6, 7);

//  어디서 정의 하느냐에 따라 출력값이 다르게 다옴
var number = [1, 400, 12, 34, 4];

let i = 0;
let total = 0;
while (i < number.length) {
  total += number[i];
  i++;

  console.log(total);
}
