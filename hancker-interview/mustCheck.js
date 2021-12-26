// move zero in the middle.

// fizzbuzz
function FizzBuzz() {
  let retunValue = "";
  for (i = 1; i <= 15; i++) {
    i % 3 === 0 && i % 5 === 0
      ? (retunValue += "FizzBuzz \n")
      : i % 3 === 0
      ? (retunValue += "Fizz \n")
      : i % 5 === 0
      ? (retunValue += "Buzz \n")
      : (retunValue += i + "\n");
  }
  return retunValue;
}
console.log(FizzBuzz());

// 0을 중간으로

function moveZeroes(arr) {
  const zeroArr = arr.sort().filter((i) => i === 0);
  arr = arr.slice(zeroArr.length);
  const middle = Math.floor(arr.length / 2);
  arr.splice(middle, 0, ...zeroArr);
  console.log(arr);
}

moveZeroes([0, 1, 2, 3, 4, 5, 0, 6, 0, 0, 9]);
moveZeroes([64, 66, 0, 2, 5, 0]);

// 0을 중간으로 ----2

function moveZeroes(arr) {
  // number of 0, loop find zero, sort, slice zero, middle number,
  const zeros = arr.filter((zero) => zero === 0);
  const zeroAmount = zeros.length;
  arr = arr.sort().slice(zeroAmount);
  const middleNum = Math.floor(arr.length / 2);
  arr.splice(middleNum, 0, ...zeros);
  return arr;
}

console.log(moveZeroes([0, 1, 2, 3, 4, 5, 0, 6, 0, 0, 9]));

console.log(moveZeroes([1, 1, 0, 0, 4, 0, 5, 6, 7, 0, 9]));

//  다른버전

function moveZeroes(arr) {
  let numZeroes = 0;
  for (let i of arr) {
    numZeroes += !i;
    console.log(!i);
  }

  let zeroArr = arr.sort().slice(0, numZeroes);

  arr.sort((a, b) => a - b).splice(0, numZeroes);

  const middle = Math.floor(arr.length / 2);

  arr.splice(middle, 0, ...zeroArr);

  console.log(arr);
}

console.log(moveZeroes([0, 1, 2, 3, 4, 5, 0, 6, 0, 0, 9, 22, 8, 3, 7]));
// Demo
console.log(moveZeroes([0, 1, 2, 3, 4, 5, 0, 6, 0, 0, 9]));

// 1. Int to word (0 - 999) 2. Int to word (0 - 999,999,999) 3. Count the islands (Hacker rank)
// 999 999 999
const lessThanTwenty = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];
const tenthsLessThanHundred = [
  "zero",
  "ten",
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];

const numToEng = (number, words = []) => {
  if (number === 0) return words.length ? words.join(" ") : "zero";
  if (number < 20) {
    words.push(lessThanTwenty[number]);
    return numToEng(0, words);
  } else if (number < 100) {
    words.push(tenthsLessThanHundred[Math.floor(number / 10)]);
    return numToEng(number % 10, words);
  } else if (number < 1000) {
    words.push(numToEng(Math.floor(number / 100)) + " hundred");
    return numToEng(number % 100, words);
  } else if (number < 1000000) {
    words.push(numToEng(Math.floor(number / 1000)) + " thousand");
    return numToEng(number % 100000, words);
  }
};

console.log(numToEng(9999));

// Number of Islands =================>

const grid = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["1", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];

const numIslands = (grid) => {
  let counter = 0;

  const dfs = (i, j) => {
    if (
      i >= 0 &&
      j >= 0 &&
      i < grid.length &&
      j < grid[i].length &&
      grid[i][j] === "1"
    ) {
      grid[i][j] = "0";
      dfs(i + 1, j); // top
      dfs(i, j + 1); // right
      dfs(i - 1, j); // bottom
      dfs(i, j - 1); // left
    }
  };

  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid[i].length; j += 1) {
      if (grid[i][j] === "1") {
        counter += 1;
        dfs(i, j);
      }
    }
  }

  return counter;
};
console.log(numIslands(grid));



function numToEng(number, words = []) {
  switch (true) {
    case number === 0:
      return words.length ? words.join(" ") : "zero";
    case number < 20:
      words.push(lessThanTwenty[number]);
      return numToEng(0, words);
    case number < 100:
      words.push(tens[Math.floor(number / 10)]);
      return numToEng(number % 10, words);
    case number < 1000:
      words.push(lessThanTwenty[Math.floor(number / 100)] + " hundred");
      return numToEng(number % 100, words);
    case number < 10000:
      words.push(lessThanTwenty[Math.floor(number / 1000)] + " thousand");
      return numToEng(number % 1000, words);

      return "Invalid Number";
  }
}
console.log(numToEng(999999));
