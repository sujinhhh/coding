// Given a positive integer num, return the
// sum of all odd fibonacci numbers that are less than or equal to num.
// The first two numbers in the Fibonacci sequenc are 1 and 1,1,3,5
// For example, sumFib(10) return 10, because odd fibo nums are 1,1,3,5

function sumFib(num) {
  let result = [1, 1];
  for (let i = 2; i <= num; i++) {
    result.push(result[i - 1] + result[i - 2]);
    if (result[i] > num) break;
  }
  result;
}
console.log(sumFib(10));

// 0 1 1 2 3 5 8
// 1 2 3 4 5 6 7

// let a = 1;
// let b = 1;
// let sum = a;

// while (b <= num) {
//   if (b % 2 !== 0) {
//     sum += b;
//   }
//   [a, b] = [b, a + b];
// }

// return sum;
