// console.log(Math.PI);
// const pi = 3.55;
// console.log(Math.trunc(pi));
// console.log(Math.round(pi));
// console.log(Math.ceil(pi));
// console.log(Math.floor(pi));
// console.log(Math.pow(2, 2)); // 거듭제곱
// console.log(Math.random());

// // From 1 to 10
// console.log(Math.floor(Math.random() * 10 + 1));

// // Write code that will return a random letter from your name
// const myName = "leesujin";
// console.log(myName.charAt(Math.floor(Math.random() * myName.length)));

// // if
// let customerIsBanned = false;
// let soup = "chicekn";
// let reply;
// let crackers = false;

// if (customerIsBanned) {
//   reply = "no soup for you";
// } else if (soup && crackers) {
//   reply = `here's your ${soup} soup & cracker`;
// } else if (soup) {
//   reply = `here's your ${soup} soup`;
// } else {
//   reply = "Sorry";
// }

// console.log(reply);

// //  if 2

// let testScore = 49;
// let collegeStudent = true;
// let grade;

// if (testScore >= 90) {
//   grade = "A";
// } else if (testScore >= 80) {
//   grade = "B";
// } else if (testScore >= 70) {
//   grade = "C";
// } else {
//   grade = "F";
// }

// console.log(grade);

// // switch :if parameter value is same on the case , 그 항을 실행

// switch (1) {
//   case 1:
//     console.log("a");
//     break;
//   case 2:
//     break;
//   case 3:
//     break;
//   case 4:
//     break;
//   default:
//     console.log("no match");
// }

// //  가위바위보

// let playerOne = "scissors";
// let computer = "rock";

// switch (playerOne) {
//   case computer:
//     console.log("tie game");
//     break;
//   case "rock":
//     if (computer === "paper") {
//       console.log("you lose");
//     } else {
//       console.log("you win");
//     }
//     break;
//   case "scissors":
//     if (computer === "paper") {
//       console.log("you win");
//     } else {
//       console.log("you lose");
//     }
//     break;
//   case "paper":
//     if (computer === "rock") {
//       console.log("you win");
//     } else {
//       console.log("you lose");
//     }
//     break;
// }

// // Ternary Operator : condition ? ifTrue : if False;

// let isSoup = "";
// let isCustomerBanned = false;
// let response = isCustomerBanned
//   ? "nosoup"
//   : isSoup
//   ? `yes we have ${soup}soup`
//   : "sorry";

// console.log(response);

// // Ternary Operator :

// let test = 79;
// let myGrade = test > 89 ? "A" : test > 79 ? "B" : test > 69 ? "C" : "F";

// console.log(myGrade);

// // rock, scissors, papper

// let player = "papper";
// let computer2 = "scissors";

// let result =
//   player === computer2
//     ? "tie game"
//     : player === "rock" && computer2 === "scissors"
//     ? "you win"
//     : player === "scissors" && computer2 === "paper"
//     ? "you win"
//     : player === "papper" && computer2 === "rock"
//     ? "you win"
//     : "you lose";
// console.log(result);

// // confirm ok 누르면 true 가 반환되고, cancle 은  false
// let myBoolean = confirm();
// console.log(myBoolean);

// // trim () : 빈공간이 있으면 빼고 출력

// // console.log(name2 ?? "put your name");
// //  name 값이 있으면 name 출력, 없으면 혹은 false이면 물음표 뒤에 있는것 출력

// // prompt

// let name2 = prompt("enter");
// if (name2) {
//   console.log(name2 ?? "put your name");
// } else {
//   console.log("you did do");
// }

// // Loops

// // while ==========================

// let myNumber = 0;
// while (myNumber < 1) {
//   console.log(myNumber);
//   myNumber += 3;
//   console.log(myNumber);
// }

// // while ==========================

// let name5 = "sujin";
// let counter = 0;
// let myLetter;
// while (counter <= 3) {
//   myLetter = name5[counter];
//   console.log(myLetter);
//   if (counter === 1) {
//     counter += 2;
//   }

//   if (myLetter === "i") break;
//   counter++;
// }

// // do while : while 이랑 비슷한데 한가지 다른것 조건이 안맞아도 한번은 실행한다

// // for ==============================

// let name4 = "sujin";

// for (let i = 0; i <= name4.length; i++) {
//   console.log(name4.charAt(i));
// }

// // function ==============================

// function sum(num1, num2) {
//   if (!num2) num2 = 0;
//   console.log(num2);

//   return num1 + num2;
// }

// console.log(sum(2));

// // function getUserNameFromEmail(email) {
// //   return email.slice(0, email.indexOf("@"));
// // }

// // 위에 것과 같은것
// // const getUserNameFromEmail = function(email) {
// //   return email.slice(0, email.indexOf("@"));

// // }

// // 위에 것과 같은것

// const getUserNameFromEmail = (email) => {
//   return email.slice(0, email.indexOf("@"));
// };

// console.log(getUserNameFromEmail("sujin@email.com"));

// const toProperCase = (name6) => {
//   return name6.charAt(0).toUpperCase() + name6.slice(1).toLowerCase();
// };
// console.log(toProperCase("sujin lee"));

// // var, let, const
// var x = 1;

// // Array
// // mutable, can add elments to an array
// const myArray = [];
// myArray[0] = "sujin";
// myArray[1] = false;
// myArray[2] = 111;
// console.log(myArray.length);

// console.log(myArray[myArray.length - 1]);

// // 뒤에 앞에 추가
// myArray.push("한다");
// myArray.unshift("나는");
// console.log(myArray);

// // 뒤에 앞에 하나 빼기
// const lastArray = myArray.pop();
// myArray.shift();
// console.log(lastArray);
// console.log(myArray);

// // delete 자리는 남겨두고, undefined을 만든다
// delete myArray[1];
// console.log(myArray);

// // splice (위치, 개수, 바꾸고 싶은 것)
// myArray.splice(1, 1, 2);
// console.log(myArray);

// const myArr = ["A", "B", "C", "E"];
// const newArr = myArr.slice(2);
// const newSplice = myArr.splice(3, 0, "D");
// console.log(myArr);
// console.log(newArr);
// myArr.reverse();
// console.log(myArr);
// const newJoin = myArr.join("");
// console.log(newJoin);
// const newSplit = newJoin.split("");
// console.log(newSplit);
// console.log(myArr);

// // const newConcat = myArray.concat(newArr)
// const newConcat = [...myArr, ...newArr];
// console.log(newConcat);

// // Object  ==============================

// const myObj = { names: "sujin" };
// console.log(myObj.names);

// const anotherObj = {
//   alive: true,
//   answer: 41,
//   hobbies: ["eat", "sleep", "code"],
//   beverage: {
//     morning: "coffee",
//     afternoon: "coffee",
//   },
//   action: function () {
//     return `Time to ${this.hobbies[0]}`;
//   },
// };
// console.log(anotherObj.beverage.morning, anotherObj.hobbies[0]);
// console.log(anotherObj["hobbies"], anotherObj.action());

// const vehicle = {
//   wheels: 4,
//   engine: function () {
//     return "Vrroom!";
//   },
// };
// const trunk = Object.create(vehicle);
// trunk.doors = 2;
// console.log(trunk);
// console.log(trunk.wheels); //inheritance
// console.log(trunk.engine());

// trunk.engine = function () {
//   return "hooo";
// };
// console.log(trunk.engine());

// // ==================

// const band = {
//   vocals: "Robert Plant",
//   guitar: "Jimmy Page",
//   bass: "Jone",
//   drums: "Bonham",
// };

// //  추가
// band.start = "hahah";

// // 삭제
// delete band.start;

// // 키가 있는지 확인
// console.log(band.hasOwnProperty("drums"));

// console.log(Object.keys(band));
// console.log(Object.values(band));

// // for( 키 in 오브젝트 전체 )

// for (let job in band) {
//   console.log(band[job]);
// }

// // destructuring ==================

// const { vocals, guitar, bass, drums } = band;

// console.log(vocals);

// function sings({ vocals }) {
//   return `${vocals} sings`;
// }

// console.log(sings(band));

// class ==================
// "_size" underscore is private, can't modify from outside

// class Pizza {
//   constructor(pizzaSize) {
//     this._size = pizzaSize;
//     this._crust = "original";
//   }
//   getCrust() {
//     return this._crust;
//   }
//   setCrust(pizzaCrust) {
//     this._crust = pizzaCrust;
//   }

//   bake() {
//     console.log(`Baking a ${this.size} ${this.crust} ${this.type} crust pizza`);
//   }
// }

// class SpecialtyPizza extends Pizza {
//   constructor(pizzaSize){
//     super(pizzaSize)
//     this.type ="The Works"
//   }
//   slice(){
//     console.log(`Our ${this.type} ${this.size} pizza has 8 slices`);
//   }
// }

// const mySpecialty = new SpecialtyPizza('medium')
// mySpecialty.slice()

// Factory funtion ==================>

// function pizzaFactory(pizzaSize) {
//   const crust = "original";
//   const size = pizzaSize;

//   return {
//     bake: () => console.log(`Baking a ${size} ${crust} crust pizza`),
//   };
// }

// const myPizza = pizzaFactory("small");
// myPizza.bake();

//  최신문법
// # private

// class Pizza {
//   crust = "original";
//   #sauce = "traditional";
//   #size;

//   constructor(pizzaSize) {
//     this.#size = pizzaSize;
//   }
//   getCrust() {
//     return this.crust;
//   }
//   setCrust(pizzaCrust) {
//     this.crust = pizzaCrust;
//   }
//   hereYouGo() {
//     console.log(`Here's you ${this.crust} ${this.#sauce} sauce ${this.#size}`);
//   }
// }

// const myPizza = new Pizza("large");
// myPizza.setCrust("cheese");
// myPizza.hereYouGo();
// console.log(myPizza.getCrust());

// // JSON

// const myObject = {
//   name: "Sujin",
//   hobbies: ["eat", "sleep", "code"],
//   hello: function () {
//     console.log("Hello");
//   },
// };

// console.log(myObject);
// console.log(myObject.name);
// myObject.hello();
// console.log(typeof myObject);

// const sendJSON = JSON.stringify(myObject);
// console.log(sendJSON);
// console.log(typeof sendJSON);
// console.log(sendJSON);

// const receiveJSON = JSON.parse(sendJSON);
// console.log(typeof receiveJSON);

// Error handling =====================================================

// ("use strict");

// const makeError = () => {
//   let i = 1;
//   while (i <= 5) {
//     try {
//       if (i % 2 !== 0) {
//         throw new Error("Odd number");
//       }
//       console.log(`${i} even number`);
//     } catch (err) {
//       console.error(err.stack);
//     } finally {
//       console.log(`finally ${i}`);
//       i++;
//     }
//   }
// };
// makeError();

// function customError(message) {
//   this.message = message;
//   this.name = "customError";
//   this.stack = `${this.name}: ${this.message}`;
// }

// DOM =====================================================

// Dom

// const view = document.getElementById("view");
// const view1 = document.querySelector("#view1");
// const view2 = document.querySelector("#view2");

// console.log(view1.offsetTop);

// view.style.background = "lightgrey";

// // node 로 나옴
// const squreNode = document.querySelectorAll(".squre");
// const divs = view.querySelectorAll("div");
// console.log(squreNode);

// // html colletction
// const squre = document.getElementsByClassName("squre");
// const divHtmlCollection = view.getElementsByTagName("div");
// console.log(divHtmlCollection);

// const evenDivs = view.querySelectorAll("div:nth-of-type(2n-1)");
// console.log(evenDivs);

// function clickHe() {
//   console.log("clicked");
//   for (let i = 0; i < evenDivs.length; i++) {
//     evenDivs[i].style.backgroundColor = "red";
//     evenDivs[i].style.width = "200px";
//     evenDivs[i].style.height = "200px";
//     evenDivs[i].style.transition = "all 0.5s ease-out";
//   }
// }

// const navText = document.querySelector("nav h1");
// console.log(navText);
// navText.textContent = "Sujin";

// const navbar = document.querySelector("nav");
// navbar.innerHTML = "<h3> Sujin hahah <h3>";

// DOM Treee =====================================================

// console.log(view.children);
// view.style.color = "white";

// console.log(evenDivs[0]);
// console.log(evenDivs[0].parentElement.children[0]);
// console.log(evenDivs[0].parentElement.childNodes);
// console.log(evenDivs[0].parentElement.hasChildNodes());
// console.log(evenDivs[0].parentElement.lastChild);

// view1.style.display = "none";

// console.log(view);

// while (view.lastChild) {
//   view.lastChild.remove();
// }

// const createDivs = (parent, iter) => {
//   const newDiv = document.createElement("div");
//   newDiv.textContent = iter;
//   newDiv.style.backgroundColor = "#000";
//   newDiv.style.width = "300px";
//   newDiv.style.height = "300px";
//   newDiv.style.margin = "2px";
//   parent.append(newDiv);
// };

// console.log(view1);
// view.style.flexWrap = "wrap";
// for (let i = 1; i <= 1; i++) {
//   createDivs(view, i);
// }

// Event Listeners
// Syntax: addEventListener('click', function, useCapture )

// const doSomthing = () => {
//   alert("a");
// };

// view1.addEventListener("click", doSomthing, false);
// view1.removeEventListener("click", doSomthing, false);

// view.addEventListener("click", (e) => {
//   console.log(e.target);
//   e.target.style.backgroundColor = "yellow";
//   e.target.style.color = "#000";
//   e.target.textContent = "yellow";
// });

// document.addEventListener("readystatechange", (e) => {
//   if (e.target.readyState === "complete") console.log("readyState : complete");
//   initApp();
// });

// // event.stopPropagation() => 이벤트 버블을 막아줌

// const initApp = () => {
//   view.addEventListener("click", (e) => {
//     e.target.classList.add("yellow");
//     e.target.classList.remove("squre");
//     e.target.classList.toggle("holiday");
//     let myColor = e.target.style.backgroundColor;
//     console.log(myColor);
//   });
// };

// const navText = document.querySelector("nav");
// navText.addEventListener("mouseover", (e) => {
//   e.target.classList.add("height100");
//   if (e.target.classList === "height100") {
//     navText.addEventListener("click", createDivs(view1, 30));
//   }
//   navText.addEventListener("mouseout", (e) => {
//     e.target.classList.remove("height100");
//   });
// });

// document.addEventListener("readystatechange", (e) => {
//   if (e.target.readyState === "complete") console.log("readyState : complete");
//   initApp();
// });

// event.stopPropagation() => 이벤트 버블을 막아줌

// const initApp = () => {
//   const view2 = document.querySelector("#view2");
//   console.log(view2);
//   const myForm = view2.querySelector("#myForm");
//   console.log(myForm);
//   myForm.addEventListener("submit", (e) => {
//     console.log("submit event");
//   });
// };

// Web Storage API
// Not part of the DOM - refers to the window API
// Available to JS via global vaiable :  window (don't type window)
const myArray = ["eat", "sleep", "code"];

const myObject = {
  name: "sujin",
  hobbies: ["eat", "sleep", "code"],
  logName: function () {
    console.log(this.name);
  },
};
myObject.logName();

sessionStorage.setItem("myLocalStore", JSON.stringify(myObject));
sessionStorage.removeItem("myLocalStore");
// sessionStorage.clear();
const key = sessionStorage.key(0);
const mySessionData = JSON.parse(sessionStorage.getItem("myLocalStore"));
console.log(sessionStorage.length);

// Higher Oder Function ===============================================

// forEach(), filter, map, reduce

// callbacks

function firstFunction(parameters, callback) {}

// Promises // 3state : Pending, Fulfilled, Rejected.

const myPromise = new Promise((resolve, reject) => {
  const error = false;
  if (!error) {
    resolve("yes, resolved");
  } else {
    reject("no, rejected");
  }
});
