// flatten the Array

let arr = [
  [1, 2],
  [3, 4],
  [5, 6, [7, 8], 9],
];
let flatten = arr.flat(2);
console.log(flatten);
