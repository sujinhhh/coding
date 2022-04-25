// import playGuitar from "./guitars.js";
// import { shredding as shred, plucking as pluck } from "./guitars.js";
// as 다음에 새로 짓고 싶은 이름을 넣은면 됨

// import * as Guitars from "./guitars.js";
// //  이렇게 쓰려면 export file에 default 가 되면 안됨

// import User from "./user.js";

// const me = new User("email@email.com", "sujin");
// console.log(me.greeting());

// console.log(Guitars.playGuitar());
// console.log(Guitars.shredding());
// console.log(Guitars.plucking());

import { post } from "./guitars.js";

const getDataFromForm = () => {
  const requestObj = {
    firsName: "Bruce",
    lastName: "Lee",
    categories: ["nerdy"],
  };
  return requestObj;
};
const buildRequestURL = (requestData) => {
  return;
};

const getDadJoke = async () => {
  const response = await fetch("https://icanhazdadjoke.com/", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });
  const jsonUser = await response.json();
  console.log(jsonUser.joke);
};

getDadJoke();

document.getElementById("phoneNum").addEventListener("input", (e) => {
  // '\' escape
  const regex = /^\(?(d{3})\)?[-. ]?(\d{3})[-. ]?(\d{4})$/g;
  const input = document.getElementById("phoneNum");
  const format = document.querySelector("phoneFormat");
  const phone = input.value;
  const found = regex.test(phone);
  if (!found && phone.length) {
    input.classList;
  }
});
