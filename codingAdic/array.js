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

//  다른 버전
const getAverage = (...scrores) => {
  console.log(scrores);

  let count = 0;
  let total = 0;

  for (let i = 0; i < scrores.length; i++) {
    if (scrores[i] !== undefined) {
      count++;
      total += scrores[i];
    }
  }
  console.log(total / count);
};
