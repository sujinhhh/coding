// #id, .class , element ------------------------------------------------>
const click = document.querySelector("input");
// id에서 갖고 오기
const number = document.getElementById("h1");
const section = document.querySelector("section");
const h2 = document.querySelector("h2");
console.log(h2);

const increment = () => {
  let num = "";
  for (i = 0; i < 3; i++) {
    num += "😙";
    //  이 밑에 있는 코드를 어디에 두느냐에 따라 브라우져에 나타나는것 이 달라짐
    number.innerHTML += `<h1>${num}</h1>`;
  }
  number.innerHTML += `<h1>${num} 이건 바깥에 있는 경우</h1>`;
  h2.innerText = "innerText";
};

// const increment = () => {
//   let num = "";
//   for (i = 0; i < 4; i++) {
//     num += "♥️";
//     number.innerHTML += `<p>${num} </p>`;
//   }
// };
increment();

//  toggle 고쳐야 할것  ###############################
// click.addEventListener("click", () => {
//   let content = false;
//   if (!content) {
//     increment();
//     content = true;
//   }
//   if (content) {
//     location.reload();
//     content = false;
//   }
// });

//  Element 만들기  --------------------------------->

// const btnElem = document.querySelector("#btn-elem");

// btnElem.onclick = () => {
//   const h3 = document.createElement("p");
//   h3.innerText = "Here comes p tag";
//   section.appendChild(h3);
//   //   document.body.appendChild(h3)
// };

// document.getElementById("btn01").onclick = () => {
//   document.getElementById("btn01").style.display = "none";
// };

// Prompt  --------------------------------->
// var name = prompt();
// console.log(name);

// 변수  --------------------------------->

// let age;
// age = 40;
// console.log(age);

// var newAge = age;
// newAge = 60
// console.log(newAge);
// console.log(age);

// IIFE . immediately invoked function expression ---------------------------->
// var 는 글로벌 스코프인데 이안에 넣으면 밖에서 열람못함,
// (function () {
//   var age = 4;
// })();

// primitives  (문자, 숫자, 요소 / string, boolean, number, undefine, null,symbol )--------------------------------->

// object (오브젝트, 어레이 ) Everything source from object-------------------------->
// let person = {
//   // key :  value
//   name: "sujnj",
//   job: "programmer",
//   // method
//   fun: function () {
//     console.log("yay");
//   },
// };

// person.fun();

// let date = new Date();
// console.log(date);

// mutable, immtable -------------------------->
// let name = "sujjin";
// let age = 40
// name.toUpperCase(); // 아무 변화가 없음, 변수에 다시 할당을 해주어야함 , 그래서 불변이라고 함

// name = name.toUpperCase();
// console.log(name);

// 오브젝트로  할당하고 싶으면 =>

// name = new String(name);
// console.log(name)
// name = [...name]
// console.log(name)
// age = new Number(age)
// console.log(age);
// console.log(age.valueOf(age));
// console.log(typeof(age));

// Number  ------------------------------------------------->
// 최대 넣을수 있는 숫자 확인 -------------------------->
// let x = Number.MAX_SAFE_INTEGER;
// console.log(x);
// console.log(Number.isSafeInteger(9007199254740994));

// let y = 9007199254740991;
// // Math.pow(base, n)
// // base 숫자를 n제곱한다.
// console.log(Math.pow(y, 28));

// 14, Arithmetic Operators, Precedence(우선순위), Associativity (제휴)------------------->  (  ) 를 이용해서 우선순위를 다르게 할수 있음

// 15. Increment, Decrement, & Assignment Operator
// let pizza = 10;
// // pizza ++
// // pizza *= 10
// pizza %= 5;
// //  앞에 붙이는 거랑 뒤에 붙이는 거랑 다른점
// // let newPizza = pizza++
// let newPizza = ++pizza;

// console.log(pizza, newPizza);

// // 16 parseInt, parseFoat, Methods ------------------->

// let x = 1;
// let y = "30.9999";
// let won = 150097779879;
// let minus = -19;
// //  소수점 밑으로는 뺌
// let num = Number.parseInt(y);
// //  소수점 포함
// num = Number.parseFloat(y);
// console.log(x + num);

// // 17. Converting Decimal Numbers to Binary(2진수), Octal(8진수), Hexadecimal(16진수)  ------------------->

// // 18. Number Instance Methods, Math Object ------------------->
// x.toString(2);
// // 돈관련 숫자 // 소수점 두자리까지만
// console.log(num.toFixed(2));
// // 3개씩 떨어뜨려줌
// console.log(won.toLocaleString());
// // 절대값
// console.log(Math.abs(minus));
// // 반올림
// console.log(Math.round(num));
// //올림:ceil, 내림:floor
// console.log(num);
// // 소수점 밑에 다빼버림
// console.log(Math.trunc(num));

// String------------------- ------------------->
// 다음 줄로 내려감  / \n, \\ // charAt, concat, includes, indexOf, lastindexOf
// let name = "suj\nijn";
// console.log(name);
// let favFood = "burger";
// let content = "The love of money is a root of all sorts of injurious things";
// let search1 = "money";
// let search2 = "number";

// console.log(content.indexOf(search1));
// console.log(content.includes(search1));
// console.log(content.includes(search2));
// console.log(content.lastIndexOf(search1));
// console.log(content.charAt(12));

// console.log(favFood.charAt(2));
// console.log(favFood[2]);
// // 새로운 string 반환
// console.log(favFood.concat("is good", "pizza"));

// 21, substing, sbustr, slice, trim, repeat ------------------->
// ==substing (inclueded index, exclueded index )
// console.log(content.substring(6, 11));
// console.log(search2.substring(1, 4));
// // ==substr (exculeded index, 11개 까지 문자 )
// console.log(content.substr(6, 11));
// console.log(search2.substr(0, 4));
// console.log(search2.slice(0, 4));
// console.log(search2.slice(1, -1));

// //  비정상적인 공간을 정상적인 공간으로 만들어줌 : form 만들때
// console.log(content.trim());
// //  반복하고 싶을 때
// console.log(content.repeat(4));
// // split
// console.log(content.split(" "));

// 22. object  ------------------->
// let position = {
//   // properties
//   x: 10,
//   y: 20,
//   number: function () {
//     return this.x;
//   },
//   myObject: { job: "programmer" },
// };

// // 23. if, else if,  ------------------->

// if (position.x == "10") {
//   console.log(position.myObject.job);
// } else {
//   console.log(position.number());
// }

// 25. comparison operatator  ===, >=, < !== ------------------->
// 26. Logical operatator  && ||  ------------------->

// var age = prompt();
// var name = prompt();
// if (age < 13 || age >= 65) {
//   // || 하나만 만족하면 실행할수 있음
//   console.log("welcome");
// } else if (age > 16 && name !== "sujin") {
//   // && 두 조건다 만족해야 실행
//   console.log("teenage");
// } else {
//   console.log("young men");
// }
// // *** 위에것하고 같은것
// if (age < 13) {
//   if (age >= 65) {
//     console.log("welcome");
//   }
// }
// 27. Switch Statement  ------------------->

// let name = "m";

// switch (name) {
//   case "sujin":
//     console.log("your are programmer");
//   // break;
//   case "kevin":
//     console.log("singer");
//     break;
//   default:
//     console.log("get out");
//     break;
// }

// 28. Single line if  ------------------->

// let name = "sujin";
// if (name === "sujin") console.log("you are Programmer");

// 28. Ternary Operator  ------------------->
// let name = prompt("what is my name");
// let me = name === "sujin" ? "programmer" : "getout";

// console.log(me);

// 30.Loops   -------------------------------------------->
// Initiaiztion, condition, update

// let i = 0;
// let star = "";
// while (i < 5) {
//   star += "⭐️";
//   i++;
//   star;
// }

// function howMany(selectObject) {
//   var numberSelected = 0;
//   for (var i = 0; i < selectObject.options.length; i++) {
//     if (selectObject.options[i].selected) {
//       numberSelected++;
//     }
//   }
//   return numberSelected;
// }

// var btn = document.getElementById("btn");
// btn.addEventListener("click", function () {
//   alert(
//     "Number of options selected: " + howMany(document.selectForm.musicTypes)
//   );
// });

// let i = 0; //intialization
// while(i<5){ // condition

//   i++  //update
// }

// do while ========> 맞추기 게임에 쓰면 유용함 ----------------------------->
// let password;
// do {
//   password = 'promptwhat is password'
// } while (password !== "haha");

// for  ==============> 두개씩 늘리기

// for (i = 0; i < 10; i += 2) {
//   console.log(i);
// }

// // 홀수만들기
// for (i = 1; i < 10; i += 2) {
//   console.log(i);
// }

// // 높은 숫자에서 낮은 숫자로
// for (i = 10; i > 0; i--) {
//   console.log(i);
// }
// // 리스트 숫자대로 출력
// let list = [3, 3, 6, 3, 5, 7, 8];
// for (i = 0; i < list.length; i++) {
//   console.log(list[i]);
// }
// // 알파벳 몇개 나오는지 알아 맞추기
// let word = "nothing is impossible";
// let charSearch = "i";
// let num = 0;
// for (i = 0; i < word.length; i++) {
//   if (word[i] === charSearch) {
//     console.log((num += 1));
//     console.log(word[i] + ": is at index : " + i);
//   }
// }
// console.log(num);

// // 33. Break & Continue  ----------------------------->
// // Break ; 첫번째 찾으면 ,exit th function where currently in
// for (i = 0; i < word.length; i++) {
//   if (word[i] === charSearch) {
//     console.log(word[i] + ": is at index : " + i);

//     break;
//   }
// }

// // continue : It just gonna break out the itteration where currently on.
// for (i = 0; i < word.length; i++) {
//   if (word[i] === "a" || word[i] === "i") {
//     //  조건이 만족하면 다음으로 넘어감
//     continue;
//   }
//   console.log(word[i]);
// }

//36. Nested Looop  -------------------------------------->

// let des = document.getElementById("destination");
// console.log(des);

// for (let i = 0; i < 10; i++) {
//   console.log(i);
//   for (let k = i; k >= 0; k--) {
//     des.append(k + " ");
//   }
//   let br = document.createElement("br");
//   des.appendChild(br);
// }

// 38. Mulidimensional Array   -------------------------------------->

// let ages = []; // 안에 있는 것을 Elements 라고 함
// ages[1] = 2;
// ages[3] = 8;
// ages[7] = 7;
// console.log(ages);
// ages.length = 20;
// for (i = 0; i < ages.length; i++) {
//   console.log(ages[i]);
// }

// let grades = [
//   [35, 33, 55],
//   [100, 99, 99],
//   [105, 59, 49],
// ];
// console.log(grades[0][2]);
// grades.length = 30;
// // 38. Iterate throught Array Examples Search an Array
// let found = false;
// let search = 8;

// let largest = ages[1];

// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] > largest) {
//     largest = ages[i];
//   }

//   // 갭 or undefine 빼기
//   if (ages[i] !== undefined && ages[i] === search) {
//     found = true;
//     console.log(ages[i], "index at : " + i);
//   } else {
//     console.log();
//   }

//   if (found) {
//   }
// }
// console.log(ages.indexOf(largest));

// 39. Average of Array Values   -------------------------------------->

// let arr = [2, 4, 5, 6, 7, 8, 9, 1, , 6];

// let total = 0;
// for (i = 0; i < arr.length; i++) {
//   total += arr[i];
// }
// console.log(Math.round(total / arr.length));

// // --------------------------------------------------------------------->
// let count = 0;

// for (i = 0; i < arr.length; i++) {
//   if (arr[i] !== undefined) {
//     count++;
//     total += arr[i];
//   }
// }

// // --------------------------------------------------------------------->
// const tot = (array) => {
//   let total = array.reduce((acc, item) => {
//     return acc + item;
//   }, 0);
//   console.log(total / count);
// };
// tot(arr);

// // 40. Fill Array from User input, sentinel value----------------------------------------------->
// // 숫자로 바꾸기

// // 숫자로 바꾸기

// //  끝에 있는 vaule 관련 ( pop, push)

// arr.push(Number("4"));
// let newArr = [2, 5, 9, 20, 7];
// let popVal = newArr.pop();

// console.log(popVal);

// console.log(newArr);

// //  앞에 있는 vaule 관련 ( unshift, shift)
// // 앞숫자 삭제 (shift)
// let shiftValue = newArr.shift();
// console.log(shiftValue);
// console.log(newArr);

// //  몇개인지 알려줌 (unshift)
// let unshiftValue = newArr.unshift(6, 9, 0);
// console.log(unshiftValue);
// console.log(newArr);

// // 원하는 것 삭제 (splice(index, 지우고 싶은 만큼))
// let spliceDel = newArr.splice(0, 3);
// console.log(spliceDel);
// console.log(newArr);
arr.pop() : 맨 뒤에거 지움

// // 원하는것 추가 (index, 지우고 싶은 양, 추가하고 싶은거)
// let spliceAdd = newArr.splice(0, 0, "My dream programmer");
// console.log(newArr);

// // 원하는 자리에 원하는거 넣기
// let replaced = newArr.splice(1, 2, "*", "*");
// console.log(newArr);

// slice // 새 배열 리턴

// console.log(newArr.slice(0, 5));

// let fillVal = newArr.fill("😁", 1, 3);
// console.log(newArr);

//  43. sort ----------------------------------------------->
const number = [1, 3, 2, 5, 2, 6, 3, 7, 29, 55, 10];
// //  작은숫자부터나열하는 function

// const sortNum = number.sort((a, b) => a - b);
// console.log(sortNum);

// console.log(number.copyWithin());

// const number2 = ["a", "s", "f", "e"];

// let concatV = number.concat(number2);
// console.log(concatV);
// // 오리지날이 안바뀜
// console.log(number);

// console.log(number.includes("a"));

// //  value 가 어디에 있는지 알려주고 없으면  -1
// console.log(number.indexOf("a"));

// // join
// console.log(number2.join());
// console.log(number2.join(""));
// console.log(number2.join(" "));
// console.log(number2.join("-"));
// console.log(number2.join("\n"));
// console.log(number2.join('"'));

//  forEach ----------------------------------------------->
// let print = "";
// const forloop = document.querySelector(".forloop");
// for (let i = 0; i < number.length; i++) {
//   print += number[i];
//   // forloop.innerHTML += print + "<br/>";
// }
// console.log(print);

// number.forEach((i, index) => {
//   print += i;
//   forloop.innerHTML += `${print} -  index : ${index} <br / >`;
// });
// number.forEach((i, index) => {
//   forloop.innerHTML += `${print} -  index : ${index} <br / >`;
// });

// 45. Iterate Multidimensional Array

// let myGrade = [
//   [2, 4, 5, 6, 2, 89],
//   [20, 40, 50, 10, 2, 89],
//   [200, 400, 500, 100, 20, 890],
// ];

// for (let i = 0; i < myGrade.length; i++) {
//   console.log(myGrade[i]);
//   for (let k = 0; k < myGrade[i].length; k++) {
//     console.log(myGrade[i][k]);
//   }
//   console.log("~~~~~~~~");
// }

// //  -----------------> 위에 것하고 같음

// myGrade.forEach((row) => {
//   console.log(
//     row.forEach((col) => {
//       console.log(col);
//     })
//   );
//   console.log("~~~~~~~~");
// });

//  46.Label with Break and Continue  ----------------------------------------------->

// outerLoop: for (let i = 0; i < myGrade.length; i++) {
//   for (let k = 0; k < myGrade[i].length; k++) {
//     console.log(myGrade[i][k]);
//     if (myGrade[i][k] === 500) {
//       console.log("you found value");
//       continue outerLoop;
//       //  continue 뒤에꺼는 무시하고 처음부터 다시 시작함
//     }
//     console.log("2nd for");
//   }
//   console.log("~~~~~");
// }

// Dates Unix Timesstamp ----------------------------------------------->
// constructor에서 새로운 오브젝트를 만들때 / new Date(1990, 11 (0 base : 12월), 31)
// let date = new Date(2021, 5);
// console.log(date);
// // GMT standard time zone- 0400 : 4hrs
// let miliDate = new Date(1000);
// console.log(miliDate);

// //  얼마나 시간이 걸리는지

// let start = Date.now();

// let x = 0;
// for (let i = 0; i < 1000; i++) {
//   x = x + i;
// }
// console.log(x);

// let time = Date.now();
// let total = time - start;
// console.log(total);

// console.log(time);

//  날짜 카운트 다운 ----------------------------------------------->

// let today = new Date(2021, 7, 25);
// console.log(today);
// let dueDay = new Date(2021, 8, 16);

// let days = dueDay - today;
// let oneday = 1000 * 3600 * 24;
// console.log(days / oneday);

// let date = Date.parse("12 Jan 1995");
// date = Date.parse("1995-01-12");

// //  한국 시간 구하기 ----------------------------------------------->
// var kTime = new Date();
// var kTime2 = new Date(Date.UTC(2021, 7, 25, 14, 0, 0));

// //  각자 나라말로 출력
// console.log(kTime.toLocaleTimeString("ko-KR"));

// console.log(kTime.getFullYear());
// console.log(kTime.getMonth());
// console.log(kTime.getDate());

// 50. Functions ----------------------------------------------->

// function func(x) {
//   x.name = "sujin";
// }
// let me = { name: "kevin" };
// func(me);
// console.log(me.name);

// function func(x) {
//   x = {};
//   x.name = "sujin";
// }
// let me = { name: "kevin" };
// func(me);
// console.log(me.name);

// 51.Callback Functions ----------------------------------------------->

// const myfunc = () => 5 + 5;
// function doSome(x) {
//   return x();
// }
// console.log(doSome(myfunc));

// // 52.Async Functions ----------------------------------------------->

// let doSomething = function () {
//   console.log("done");
// };
// setTimeout(doSomething, 1000);

// 53.Function Declarations adn expression ----------------------------------------------->
//  제곱근 구하기
// function pow(x, y) {
//   let total = 1;
//   for (let i = 0; i < y; i++) {
//     console.log(x);

//     total *= x;
//   }
//   return total;
// }
// console.log(pow(2, 3));

// // 54. hoisting ----------------------------------------------->
// // function declation = 됨 , function expression = 안됨
// //  자바 스크립트는 두번 훑음  //  undefine이 되는 이유
// var x;
// console.log(x);
// x= 10
// //  이 두개는 같은거
// console.log(x);
// var x = 10
