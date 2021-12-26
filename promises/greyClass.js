// const myPromise = new Promise((resolve, reject) => {
//   const error = false;
//   if (!error) {
//     resolve("Ah ha");
//   } else {
//     reject("Oh no");
//   }
// });

// myPromise
//   .then((value) => value)
//   .then((value) => console.log(value + " sujin 할수 있음다"))
//   .catch((err) => console.log(err));

// const myNextPromise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("after 3sec"), 3000);
// });

// fetch ========== ========== ========== ========== ========== ==========>

// const users = fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((data) => console.log(data[1]));

// async,  await,  ========== ========== ========== ========== ==========>

// const myUsers = {
//   userList: [],
// };

// const myFunction = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const jsonData = await response.json();
//   return jsonData;
// };

// const anotherFunc = async () => {
//   const data = await myFunction();
//   myUsers.userList = data;
// };

// anotherFunc();
