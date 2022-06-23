// 헷깔리는 문제, 집중잘될때 다시풀 문제
//  5번,

// Big O  - O(n^3)

{
  function helper(arr1, arr2) {
    let firstArray = [];
    for (const i of arr1) {
      if (!firstArray.includes(i) && !arr2.includes(i)) {
        firstArray.push(i);
      }
    }
    for (const i of arr2) {
      if (!firstArray.includes(i) && !arr1.includes(i)) {
        firstArray.push(i);
      }
    }
    return firstArray;
  }
  function sym(args) {
    const arrays = [...arguments];
    let arrayFisrt = arrays[0];
    for (let i = 1; i < arrays.length; i++) {
      arrayFisrt = helper(arrayFisrt, arrays[i]);
    }
    console.log(arrayFisrt.sort((a, b) => a - b));
  }

  sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);
}

// Big O  - O(n^2)

function helper(arr1, arr2) {
  const set1 = [...new Set(arr1)];
  const set2 = [...new Set(arr2)];

  const combined = [...set1, ...set2];
  const output = [];
  const elObj = {};
  for (let el of combined) {
    if (el in elObj) {
      elObj[el]++;
    } else {
      elObj[el] = 1;
    }
  }
  for (let el in elObj) {
    if (elObj[el] === 1) {
      output.push(el);
    }
  }
  console.log(output);
}
function sym(args) {
  const arrays = [...arguments];
  let arrayFisrt = arrays[0];
  for (let i = 1; i < arrays.length; i++) {
    arrayFisrt = helper(arrayFisrt, arrays[i]);
  }
  console.log(arrayFisrt);
}

sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);

{
  function updateInventory(arr1, arr2) {
    const obj1 = arr1.reduce(
      (acc, [quant, item]) => ({
        ...acc,
        [item]: quant,
      }),
      {}
    );
    const obj2 = arr2.reduce(
      (acc, [quant, item]) => ({
        ...acc,
        [item]: quant,
      }),
      {}
    );

    console.log(obj1);

    for (let name in obj2) {
      if (name in obj1) {
        obj1[name] += obj2[name];
        console.log(obj1[name]);
        obj1[name];
      } else {
        obj1[name] = obj2[name];
      }
    }
    console.log(obj1);
    const output = [];
    for (const name in obj1) {
      output.push([obj1[name], name]);
    }
    return output.sort((arr1, arr2) => arr1[1].localeCompare(arr2[1]));
  }
}

// Pairwise : 쌍으로
// Given an array, find elemetn pairs whose sum equal the second argument arg
// and return the sum of their indices.

// use lowest index

function pairwise(arr, arg) {
  const useDic = {};
  // const useDic = arr.reduce(
  //   (acc, el, i) => ({
  //     ...acc,
  //     [i]: false,
  //   }),
  //   []
  // );
  let output = 0;
  for (let i = 0; i < arr.length; i++) {
    if (useDic[i]) {
      continue;
    }
    const iVal = arr[i];

    for (let j = i + 1; j < arr.length; j++) {
      if (useDic[j]) {
        continue;
      }
      const jVal = arr[j];
      if (iVal + jVal === arg) {
        useDic[i] = true;
        useDic[j] = true;
        output += i + j;
        break;
      }
    }
  }
  output;
}
pairwise([1, 4, 2, 2, 3, 0, 5], 7);

// 1 : 6
// 4 : 3 = 1+3 = 4
// 2 : 5 = 2+5 = 7
// 3 : 4

// 7보다 작은것 걷어냄

//  로마 글자로 나타내기

const numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const dic = {
  1: "I",
  4: "IV",
  5: "V",
  9: "IX",
  10: "X",
  40: "XL",
  50: "L",
  90: "XC",
  100: "C",
  400: "CD",
  500: "D",
  900: "CM",
  1000: "M",
};

function convertToRoman(num) {
  let output = "";
  let i = 0;
  while (num > 0) {
    const subtract = numbers[i];
    // 10
    if (subtract > num) {
      i++;
    } else {
      num -= subtract;
      // 36 - 10
      // 26 - 10
      // 16 - 10
      // 6 - 5
      //  1
      output += dic[subtract];
    }
  }
  console.log(output);
}

convertToRoman(36);

// 모르는것

function whatIsName(collection, source) {
  const arr = [];
  const keys = Object.keys(source);
  for (const obj of collection) {
    for (const key of keys) {
      if (obj[key] === source[key]) {
        return obj;
      } else {
        return [];
      }
    }
  }
}
console.log(
  whatIsName(
    [
      { first: "Romeo", last: "sujin" },
      { first: "Mercutio", last: "null" },
      { first: "Tybalt", last: "Capulet" },
    ],
    { last: "sujin", first: "Rodmeo" }
  )
);
