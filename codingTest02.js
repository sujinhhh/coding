//1. 0이 들어간 배열 곱하기

// const muli = (...arg) => {
//   console.log(arg);
//   const result = arg.reduce((total, item) => {
//     return item ? item * total : total + item;
//   }, 1);
//   console.log(result);
// };
// muli(0, 3, 7, 8);

// 2. 날짜 구하기

const date1 = new Date("June 16, 2021");
const date2 = new Date("July 14, 2021");

// const getDays = (date1, date2) => {
//   const oneday = 1000 * 60 * 60 * 24;
//   const time1 = date1.getTime();
//   const time2 = date2.getTime();
//   let time = time2 - time1;
//   time = Math.round(Math.abs(time));
//   console.log((time = time / oneday));
//   return time;
// };

// console.log(getDays(date1, date2));

// 2. 날짜 구하기 - desrtucture

const getDays = (date1, date2) =>
  Math.round(Math.abs(date2 - date1) / (1000 * 3600 * 24));

console.log(getDays(date1, date2));
