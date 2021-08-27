// 1. shift : 첫번째 요소를 뺌

// function rotLeft(arr, rotations) {
//   const rotatedArray = arr.concat();
//   for (let i = 0; i < rotations; i++) {
//     const frontItem = rotatedArray.shift();
//     rotatedArray.push(frontItem);
//     console.log(frontItem);
//   }
//   return rotatedArray;
// }

// const numRotation = 2;
// const sampleArray = [1, 2, 3, 4, 5];

// console.log(rotLeft(sampleArray, numRotation));

// var numArray = [2, 3, 200, 210, 60, 70];

// 1. 필요한 변수값 구하기
// 필요한 도구, 혹은 방법이 필요한지 생각
// 특별한 상화, null, 안남아 떨어질 때 생각

// function findMedian(arr) {
//   let newArr = arr.sort((a, b) => a - b);
//   let middleNum = Math.floor(newArr.length / 2);
//   return newArr.length % 2 === 0
//     ? newArr[middleNum - 1] + " " + newArr[middleNum]
//     : newArr[middleNum];
// }
// console.log(findMedian(numArray));

// 양말

function sockMerchant(n, arr) {
  // parameters

  const sortedArr = arr.sort(); // sorting the array will help to check the pairs
  let currentPosition = 0; // to save the current position of each item in te array
  let nextPosition = 0; // to save the next position of each item in te array
  let counter = 0; //  this counter will be incremented by 1 in every pair

  // To go though every array position
  for (let i = 0; i < n - 1; i++) {
    // check that here we are using the "n" parameter instead of array.length (also could work) but use "n"
    currentPosition = sortedArr[i]; // holding the current position
    nextPosition = sortedArr[i + 1]; // holding the next position

    // if current position and next positions are the same then this is a pair of "socks"
    if (currentPosition === nextPosition) {
      counter++; // increment the counter because is a pair
      i++; // increment the counter that handler the positions in the array
    }
  }

  return counter;
}

sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);

//  별만들기

function staircase(n) {
  for (let i = 1; i <= n; i++) {
    console.log("#".repeat(i).padStart(n, "^^"));
  }
}

// 시간

function timeConversion(s) {
  const time = `${s.slice(0, s.length - 2)} ${s.slice(-2)}`;
  const d = new Date(`2020-05-05 ${time}`);

  return new Intl.DateTimeFormat("en-US", {
    hour12: false,
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeStyle: "medium",
  }).format(d);
}

// Sample Input

// 3
// 11 2 4
// 4 5 6
// 10 8 -12
// Sample Output

// 15

var sum = 0;
for (var i = 0; i < n; i++) {
  sum += a[i][i];
  sum -= a[i][n - i - 1];
}
console.log(Math.abs(sum));

// new grade

function gradingStudents(grades) {
  let newGrades = grades.map((i) => {
    return i < 38 || i % 5 < 3 ? i : i + (5 - (i % 5));
  });
  return newGrades;
}

// Given an array of integers and a positive integer , determine the number of  pairs where  and  +  is divisible by

// Sample Input

// STDIN           Function
// -----           --------
// 6 3             n = 6, k = 3
// 1 3 2 6 1 2     ar = [1, 3, 2, 6, 1, 2]
// Sample Output

//  5

function divisibleSumPairs(n, k, ar) {
  var count = 0;
  for (var i = 0; i < n; i++) {
    for (var j = i + 1; j < n; j++) {
      if ((ar[i] + ar[j]) % k === 0) {
        count++;
      }
    }
  }
  return count;
}
