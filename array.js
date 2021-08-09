// const items = [
//   { name: "bike", price: 100 },
//   { name: "tv", price: 200 },
//   { name: "pan", price: 300 },
//   { name: "snack", price: 400 },
// ];

// const filterItem = items.map((item) => {
//   return item.name;
// });

// console.log(items);

// console.log(filterItem);

// const arr = [1, 3, 5, 2];
// const person = { name: "bike", price: 100 };

// let text = "";
// for (let x in person) {
 
    
//   text += person[x];
//   console.log(x);
// }
// console.log(text);

// for (let i of arr) console.log(i);

//  처음 마지막에 글자 넣기 **************

// let arr = ["a", "b", "c", "d"];

// // 방법 1
// arr.push("end");
// arr.unshift("begin");

// console.log(arr);

// // 방법 2
// arr = ['strart',...arr,'end']


// How do you create a private vairable in JS ***********

// function secretVariabl(){
//   let private = 'secret';
//   return function(){
//     return private
//   }
// }
// const getPrivate = secretVariabl()
// console.log(getPrivate());

// What is the output? (closure)

let num = 4;
function outer() {
   num = 2;
  function inner() {
    num += 2
    console.log(num);
     num = 3;
    console.log(num);
  }
inner();
}
outer();

// for (let i = 0; i < 10; i++) {
//   window.setTimeout(() => {
//     console.log(i);
//   }, i * 10000);
// }

//  removes odd numbers from an array of numbers **********

// function filterItem(arr) {
//   const newArr = arr.filter((item) => item % 2 === 0);
//   return newArr;
// }

// console.log(filterItem([3, 4, 5, 5, 4, 2, 6, 6, 4]));

//  Return an array of its values plus the value's index ********

// function setIndex(arr){
//   const newArr = arr.map((item,i)=>`${i}: ${item}`)
//   return newArr
// }
// console.log(setIndex([3,5,59,9]));

// Flatten a multi-dimensional array
