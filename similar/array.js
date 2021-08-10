let names = ["h", "j", "5", "4"];

// 배열에서 한개씩 빼내기

// for (let i = 0; i < name.length; i++) {
//   console.log(name[i]);
// }

// name.forEach((a) => console.log(a));

// for of  *************

const print = document.querySelector(".h1");
let a = "";
// for (let i of name) {
//   a += i;
//   print.innerHTML += `<h1>${a}</h1>`;
// }

// forEach  *************

names.forEach((item) => {
  print.innerHTML += `<h1>${item}</h1>`;
});

// 비슷한 애들 모음

// = 반복된 애들 빼고 새로운 배열
// const iterable = new Set([1, 1, 2, 2, 3, 3]);

// Eg) 새로운 배열만들기
// const arr = [3,2,2,6,6,7,8,0]
// console.log([...new Set(arr)]);

// = 두개를 묶어서 새로운 오브젝트 만들어줌 / 둘다 같은 결과

// const a =  Object.assign(item,detail)
// 혹은
// const b = {...item, ...detail}

// 뒤에 또 추가할 수있음
//  const b = {...item, ...detail, job:'programmer'}

// = 두개를 묶어서 새로운 배열 만들어줌 / 둘다 같은 결과
// const a =  fruit.concat(item)
// 혹은
// const b = […item, …fruit]

// = 삼항연산

// Const nullish = A ?? B
// // 변수 값이 있을때 A 출력, undefine 이나 null 일때 B출력

// const literal= A || B
// // 값이 falsey (null, undefine, 0, -0, ‘ ‘,  NaN ) B 출력

// Function  default( parmeter = A  ) {
// Parameter 값이 undefine 일때만 A 출력
// }

// = 앞에 추가

// fruit.unshift(‘a’)

// Fruit = [ ‘a’, …fruit ]

// = 앞에 삭제  ,, shift, unshift 느림

names.shift();

// = 뒤에 추가

names.push("a");
names = [...names, "sujin"];

console.log(names);

//  = 뒤에 삭제
names.pop();
console.log(names);

// splice( ,)
// 삭제, 대체, 몇개까지 삭제 하고 싶은지

const b = names.splice(1, 2, "😤", "😱");
console.log(b);

console.log(names);

// = 글자를 하나하나 떼어줌

// const a = 'foo'

// console.log(Array.from(a));

// console.log(a.split(''));

// Array from 은 따로 떼네서 먼가 할수 있음 (string으로 바꾸어야 나옴)

// console.log(Array.from(a,(aPlusSomthing) => aPlusSomthing + "love"));

// new String(변수이름) = 오브젝트 만들어줌
// let makeObject = new String(name)

// = 정수만들기

// parseInt(pow)

// Math.trunc(num)) -> 소수점 빼기
