// const fruit = ["orange", "apple", "lemon"];

// let first = "bob";
// let second = "me";
// // let temp = second

// // second = first

// // second = temp

// [second, first] = [first, second];

// //  ...array 를 만들고 풀수 있음
// const [a, ...rest] = fruit;

// console.log([a, ...rest]);

// // 평균값 구하기

// const getAverage = (...scrores) => {
//   const average = scrores.reduce((total, curr) => (total += curr), 0) / 5;
//   console.log(average);
// };
// getAverage(30, 30, 30, 30, 30);

// //  다른 버전
// const getAverage = (...scrores) => {
//   console.log(scrores);

//   let count = 0;
//   let total = 0;

//   for (let i = 0; i < scrores.length; i++) {
//     if (scrores[i] !== undefined) {
//       count++;
//       total += scrores[i];
//     }
//   }
//   console.log(total / count);
// };

// Array.from //string 을 따로따로 끊어서 array 로 만들어줌

// const udemy = "udemy";

// console.log(Array.from(udemy));

// const text = document.querySelectorAll(".text");

// const newText = Array.from(text).find((item) => item.textContent === "person");
// console.log(newText);

const items = Array.from({ length: 20 }, (_, index) => {
  return index;
});
const itemPerPage = 8
const pages = Math.ceil(items.length /itemPerPage)


const newItems = Array.from({length:pages},(_,index)=>{
  const start = index * itemPerPage
  const tempItems = items.slice(start, start + itemPerPage)
  return tempItems
})

console.log(newItems);
