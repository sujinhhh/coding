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

// Given an array of integers, where all elements but one occur twice, find the unique element.

// Example

// The unique element is .

// Function Description

// Complete the lonelyinteger function in the editor below.

// lonelyinteger has the following parameter(s):
