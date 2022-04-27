// // callback hell example

// class UserStorage {
//   loginUser(id, password, onSuccess, onError) {
//     setTimeout(() => {
//       if (
//         (id === "ellie" && password === "dream") ||
//         (id === "coder" && password === "academy")
//       ) {
//         onSuccess(id);
//       } else {
//         onError(new Error("not found"));
//       }
//     }, 2000);
//   }
//   getRoles(user, onSuccess, onError) {
//     setTimeout(() => {
//       if (user === "ellie") {
//         onSuccess({ name: "ellie", role: "admin" });
//       } else {
//         onError(new Error("no asscess"));
//       }
//     }, 1000);
//   }
// }

// const userStorage = new UserStorage();
// const id = prompt('enter your id')
// const password = prompt('enter your password')
// userStorage.loginUser(id,password, (user)=>{
//     userStorage.getRoles(user,)
// }, (error)=>{console.log(err);})

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve("리졸브");
//     reject(new Error("error"));
//   }, 2000);
// });

// promise
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// //   promise chanining

// const fetchNumber = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(1), 1000);
// });
// fetchNumber
//   .then((num) => num * 2) //2
//   .then((num) => num * 3) //6
//   .then((num) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => resolve(num - 1), 1000);
//     });
//   })
//   .then((num) => console.log(num)); //5

//  Error Handling

// const getHen = () =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("♥️");
//     }, 1000);
//   });
// const getEgg = (hen) =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(new Error());
//     }, 1000);
//     // setTimeout(() => {
//     //   resolve(`${hen} + ⭕️`);
//     // }, 1000);
//   });
// const cook = (egg) =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`${egg} + 💖 `);
//     }, 1000);
//   });

// getHen() //
//   .then(getEgg)
//   //   .catch((err) => "💥")
//   .then(cook)
//   .then(console.log)
//   .catch(console.log);

// callback hell example => Promisse

// class UserStorage {
//   loginUser(id, password) {
//     return new Promise((resove, reject) => {
//       setTimeout(() => {
//         if (
//           (id === "ellie" && password === "dream") ||
//           (id === "coder" && password === "academy")
//         ) {
//           resove(id);
//         } else {
//           reject(new Error("not found"));
//         }
//       }, 2000);
//     });
//   }
//   getRoles(user, onSuccess, onError) {
//     setTimeout(() => {
//       if (user === "ellie") {
//         onSuccess({ name: "ellie", role: "admin" });
//       } else {
//         onError(new Error("no asscess"));
//       }
//     }, 1000);
//   }
// }

// const userStorage = new UserStorage();
// const id = prompt("enter your id");
// const password = prompt("enter your password");
// userStorage.loginUser(
//   id,
//   password,
//   (user) => {
//     userStorage.getRoles(user);
//   },
//   (error) => {
//     console.log(err);
//   }
// );

// async & await

// async function fetchUser() {
//   return "sujin";
// }
// const user = await fetchUser();
// console.log(user);

// await

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(2000);
  return "⭕️";
}

async function getBanana() {
  await delay(2000);
  return "👍";
}

async function pickFruits() {
  const apple = await getApple();
  const banana = await getBanana();
  return apple + banana;
}
pickFruits().then(console.log);

// useful Promise API

function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(" + ")
  );
}
pickAllFruits().then(console.log);

// 아무거나 첫번째로 나오는 것을 받고 싶다

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);
