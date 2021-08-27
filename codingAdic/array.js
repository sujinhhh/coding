const fruit = ["orange", "apple", "lemon"];

let first = "bob";
let second = "me";
// let temp = second

// second = first

// second = temp

[second, first] = [first, second];

//  ...array 를 만들고 풀수 있음
const [a, ...rest] = fruit;

console.log([a, ...rest]);

// 평균값 구하기

const getAverage = (...scrores) => {
  const average = scrores.reduce((total, curr) => (total += curr), 0) / 5;
  console.log(average);
};
getAverage(30, 30, 30, 30, 30);
