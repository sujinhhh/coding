// var 쓰면  333

function a() {
  for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i);
    }, i * 1000);
  }
}
a();

// Explain call, Apply and Bind

var person = {
  name: "Sujin Lee",
  hello: function (thing) {
    console.log(this.name + " " + "hello" + " " + thing);
  },
};

var person2 = {
  name: "programmer",
};

// 메소드.call(오브젝트이름, )

// person.hello.call(person2, '안녕하세요')
// person.hello.apply(person2, ['안녕하세요'])

//  위에거랑 같은 데 새로운 function 반환
const newHello = person.hello.bind(person2);
newHello("안녕하셈");

// composition polyfill

function addFive(a) {
  return a + 5;
}
function substracTwo(a) {
  return a - 2;
}
function multiplyFour(a) {
  return a * 4;
}

function compose(...fuctions) {
  return (args) => {
    return fuctions.reduceRight((arg, fn) => fn(arg), args);
  };
}

// pipe : evaluates from left to right
// compose evaluate from right to left

const evaluate = compose(addFive, substracTwo, multiplyFour);
console.log(evaluate(5));

// function array(arr){
//   // console.log(arr);
//   console.log(arr);
// }

// // 일반숫자는 array 로 반환 ==>
// // array(1,3,4,56)

// // array는 그냥 쓰면 됨
// array([1,3,4,56])

// Implement Primese.all : 한꺼번에 어레이로 출력, 기다림

function showText(text, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text);
    }, time);
  });
}

// function myPromiseAll(promises) {
//   let result = [];
//   return new Promise((resolve, reject) => {
//     promises
//       .forEach((p, index) => {
//         p.then((res) => result.push(res));
//         if (index === promises.length - 1) {
//           resolve(result);
//         }
//       })
//       .catch((err) => reject(err));
//   });
// }

Promise.all([showText("하고야 만다", 4000), Promise.resolve("hi")]).then(
  (value) => console.log(value)
);

//  async under the hood 이해하기
let num = 2;
async function increment() {
  num += await 2;
  console.log(num);
}
increment();

num += 1;
console.log(num);

/* revealing module patten
Turn this object literal into a module that only exposes the
 reder method */

// let myModule = {
//     data:[],
//     render:()=>{
// console.log('ss');
//     },
//     add:()=>{

//     },
//     remove:() => {

//     }
// }
// myModule.render()

// ======================================= private, public

let myModule = (function () {
  let _date = [];
  let _render = function () {
    console.log("log");
  };
  let _add = function () {};
  let _remove = function () {};
  return {
    render: _render,
  };
})();
myModule.render();

// arguments

let f = function (a, b, v) {
  if (arguments.length === f.length) {
    console.log("match");
  } else {
    console.log("not match");
  }
};

// determine if the function received the number of params it expected
f(1);
f(1, 2);
f(1, 2, 3);

// Nested loop ========================

// function bubbleSort(arr) {
//   for(let i = arr.length -1; i>0; i--){
//     for(let j=0; j< i; j++){
//       if(arr[j]>arr[j+1]){
//         let temp = arr[j]
//         arr[j] = arr[j+1]
//         arr[j+1]=temp
//       }

//     }
//   }
//   console.log(arr);
// }

// bubbleSort([4,2,6,5,1,3])
