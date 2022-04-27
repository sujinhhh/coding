// Recursion  : it calls itself

// function countDown(n) {
//   for (let i = n; i > 0; i--) {
//     console.log(i);
//   }
//   console.log("reursion");
// }
// countDown(3);

// function recursive(n) {
//   if (n <= 0) {
//     return;
//   }
//   console.log(n);
//   recursive(n - 1);
// }
// recursive(3)

// // Recursive
// // 방법 2
// function recursiveFibOne(n){
//     if ( n < 3) {
//         return n-1
//     } else {
//         return recursiveFibOne(n-1) + recursiveFibOne(n-2)
//     }
// }
// console.log(recursiveFibOne(4))

const countTen = (n = 1) => {
  console.log(n);
  if (n > 10) return;
  n++;
  countTen(n);
};

countTen();
