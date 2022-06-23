// zero matrix
// write an algorithm such that if an element in an n*n matrix is 0,
// its entire row and colum are set to 0

// examlples

// 4 1 3         4 1 0
// 2 -4 0  ->    0 0 0
// 5 9 2         5 9 0

// check if thers's 0 on the row
// if there is 0 change num 0

const matrix = [
  [1, 2, 3],
  [5, 6, 7],
  [9, 10, 0],
];

const result = (arr, n) => {
  let zeroMatrix = [];
};
result(matrix, 3);

// 나오는 스트링 숫자적기 // a2b1c3 // 만약 한개씩 밖에 없으면 그냥 string 리터

const words = "aabccccaaa";

const countWords = (str) => {
  let count = 1,
    output = "",
    uniqCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      output += str[i] + count;
      count = 1;
      uniqCount++;
    }
  }
  if (uniqCount === str.length) return str;
  else return output;
};

console.log(countWords(words));

//  merge 2 array in order

function merge(arr1, arr2) {
  let output = [];
  let num1 = 0;
  let num2 = 0;
  while (num1 < arr1.length && num2 < arr2.length) {
    if (arr1[num1] < arr2[num2]) {
      output.push(arr1[num1]);
      num1++;
    } else {
      output.push(arr2[num2]);
      num2++;
    }
  }

  while (num1 < arr1.length) {
    output.push(arr1[num1]);
    num1++;
  }

  while (num2 < arr2.length) {
    output.push(arr2[num2]);
    num2++;
  }
  console.log(output);
}
merge([1, 3, 7, 8], [2, 4, 4, 6]);

// 1,2,3,4,4,6,

// sum of those two nums, between all the nums

var rotate = function (arr) {
  console.log(...arr);
  let res = 0;
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    res += i;
  }
  console.log(res);
};

rotate([4, 0]);

// Compare two arrays and return a new array with any itmes only found
// in one of the two given arrays.

function diffArray(arr1, arr2) {
  let newArr = [];

  for (let num of arr1) {
    if (!arr2.includes(num)) {
      newArr.push(num);
    }
  }
  for (let num of arr2) {
    if (!arr1.includes(num)) {
      newArr.push(num);
    }
  }
  console.log(newArr);
}
diffArray([1, 2, 3, 5, 6, 9], [1, 2, 3, 5]);

// Seek and Destroy
// you will be probided with initial array the first argument in
// the destroyer function, folloew by one or more arguments. Remove all
// elements from the initial array that are of the same value as these
// argument

function destroyer(arr) {
  let num = [...arguments].slice(1);
  const filteredArr = [];
  for (let i of arr) {
    if (!num.includes(i)) {
      filteredArr.push(i);
    }
  }
  console.log(filteredArr);
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// Seek and Destroy
// you will be probided with initial array the first argument in
// the destroyer function, folloew by one or more arguments. Remove all
// elements from the initial array that are of the same value as these
// argument

function destroyer(arr) {
  let num = [...arguments].slice(1);
  return arr.filter((item) => !num.includes(item));
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// => arrow function은 arguments 가 안됨 ...씀
{
  const destroyer = (...arr) => {
    let num = arr.slice(1);
    return arr.filter((item) => !num.includes(item));
  };
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);
}

// Make a functioone that looks through of objects(first argument)
// and return an array of all objects that  have maching name
// Each name and value pair of the source object has to be present in
// object from the collection if it is to be inculed in return array

function whatIsInName(collection, source) {
  const arr = [];
  const keys = Object.keys(source);
  console.log(keys);

  for (const obj of collection) {
    let hasAllKeyValue = true;
    for (const key of keys) {
      if (obj[key] !== source[key]) {
        hasAllKeyValue = false;
        break;
      }
    }
    if (hasAllKeyValue) {
      arr.push(obj);
    }
  }
  console.log(arr);
}

whatIsInName(
  [{ apple: 1, bat: 2 }, { bat: 1 }, { apple: 1, bat: 2, cookie: 2 }],
  { apple: 1, cookie: 2 }
);

// Make a functioone that looks through of objects(first argument)
// and return an array of all objects that  have maching name
// Each name and value pair of the source object has to be present in
// object from the collection if it is to be inculed in return array

function whatIsInName(collection, source) {
  const keys = Object.keys(source);
  console.log(keys);
  const arr = collection.filter((el) => {
    let hasAllKeyValue = true;
    for (let key of keys) {
      if (el[key] !== source[key]) {
        hasAllKeyValue = false;
        break;
      }
    }
    return hasAllKeyValue;
    // 이거랑 같은 뜻
    // if(hasAllKeyValue){
    //   return true
    // } else {
    //   return false
    // }
  });

  console.log(arr);
}

whatIsInName(
  [{ apple: 1, bat: 2 }, { bat: 1 }, { apple: 1, bat: 2, cookie: 2 }],
  { apple: 1, cookie: 2 }
);

// Explain Event Delegation

document.querySelector("#products").addEventListener("click", (e) => {
  console.log(e);
  if (e.target.nodeName === "LI") {
    window.location.href = "/" + "#" + e.target.id;
  }
});
