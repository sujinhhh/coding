// const value = 2;
// const promise = async() => {
//   return value
// }

// const promise = new Promise((resolve, reject) => {
//   const random = Math.floor(Math.random() * 3);
//   if (random === value) {
//     console.log(random);

//     resolve("suceed");
//   }
//   reject("haha");
// });

// console.log(promise);

// promise.then((data) => console.log(data)).catch((err) => console.log(err));

// producer  ==>
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("resovle");

    reject(new Error("no network"));
  }, 3000);
});

// Consummer  ==>

promise.then((data) => console.log(data)).catch((err) => console.log(err));
console.log("yeah");
