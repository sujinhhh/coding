// let x = 1;

// const parentFunction = () => {
//     let myValue = 2;
//     console.log(x);
//     console.log(myValue);
//     const childFuction = () => {
//         console.log(x);

//         console.log(x += 5);
//         console.log(myValue += 1);

//     }
//     return childFuction
// }
// const result = parentFunction()
// console.log(result());

//  IIFE  ===================================>
// const privateCounter = (() => {
//     let count = 0;
//     console.log(`initial value:${count}`);
//     return () => {
//         count += 1; console.log(count)
//     }

// })();

// privateCounter()

//  예제  ===================================>
// const credits = ((num) => {
//     let credits = num;
//     console.log(`initial credit value ${credits}`);
//     return () => {
//         credits -= 1;
//         if (credits > 0) console.log(`playing game,${credits} remained`);
//         if (credits <= 0) console.log('not enough');

//     }

// })(3)

// credits()
// credits()
// credits()

// Decorator functoion ===================================>

// Decorator wrap a function in another function.
// 1.

// let sum = (...args) => {
//     return [...args].reduce((acc, num) => acc + num)
// }

// const callCounter = (fn) => {
//     let count = 0;
//     return (...args) => {
//         console.log(`sum has been called ${count += 1} times`);
//         return fn(...args)
//     }
// }
// sum = callCounter(sum)
// console.log(sum(2, 3, 4));
// console.log(sum(2, 4));

// Example 2 ===================================>

// let rectangleArea = (height, width) => {
//     return height * width
// }

// const countParams = (fn) => {
//     return (...params) => {
//         if (params.length !== fn.length) {

//             throw new Error(`Incorrect Number of parameter for ${fn.name}`)

//         }

//         return fn(...params)
//     }
// }

// const requreIntegers = (fn) => {
//     return (...params) => {
//         params.forEach(param => {
//             if (!Number.isInteger(param)) {
//                 throw new Error(`Params for ${fn.name} must be integers`)
//             }
//         })
//         return fn(...params)
//     }
// }

// rectangleArea = countParams(rectangleArea)
// rectangleArea = requreIntegers(rectangleArea)
// console.log(rectangleArea(20, 39));

// Example 3 ===================================>

// let requestData = async (url) => {
//     try {
//         const response = await fetch(url);
//         const data = await response.json()
//         return data
//     } catch (err) {
//         console.log(err);

//     }
// }

// const dataResponseTime = (fn) => {
//     return async (url) => {
//         console.time('fn');
//         const data = await fn(url);
//         console.timeEnd('fn')
//         return data

//     }
// }

// const myTestFunction = async () => {
//     requestData = dataResponseTime(requestData)
//     const data = await requestData('https://jsonplaceholder.typicode.com/posts')
//     console.log(data);
// }
// myTestFunction()

// Pure Function ===================================>

// impure function example

// const myArray = [1, 2, 3]
// const addToArray = (array, data) => {
//     array.push(data)
//     return array
// }

// console.log((addToArray(myArray, 4)));
// console.log(myArray);
// // pure function
// const pureAddArray = (array, data) => [...array, data]
// console.log(pureAddArray(myArray, 5));
// console.log(myArray);

// // Impure Example
// let x = 1
// const increment = () => x += 1
// console.log(increment());
// console.log(x);

// // pure function
// const pureIncrement = (num) => num += 1
// console.log(pureIncrement(x));
// console.log(x);

// const car = {
//     doors: 2,
//     seats: 'vynyl',
//     get seatMaterial() {
//         return this.seats
//     },
//     set seatMaterial(meterial) {
//         this.seat = meterial
//     }

// }

// // gettet setter,
// const luxuryCar = {}
// Object.setPrototypeOf(luxuryCar, car)
// luxuryCar.seatMaterial = 'leather'

// console.log(luxuryCar.doors);
// console.log(car);
// console.log(luxuryCar.valueOf());
// console.log(Object.keys(luxuryCar));

// Object.keys(luxuryCar).forEach(key => { console.log(key) });

// for (let key in luxuryCar) {
//     console.log(key);
// }

// Shallow copy vs.

const yArray = [1, 2, 3, 4, 5];
let xArray = yArray;
const zArray = [...xArray, 10];
console.log(zArray === yArray);

const tArray = Object.assign([], zArray);
console.log(tArray === zArray);

// Deep copy ===================================>
const newObj = JSON.parse(JSON.stringify(tArray));

const deepClone = (obj) => {
  if (typeof obj !== "object" || obj === null) return obj;
  const newObject = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    const value = obj[key];
    newObject[key] = deepClone(value);
  }
  return newObject;
};

// IIFE ===================================>

(function iffy() {
  num++;
  console.log(num);
  return num !== 5 ? iffy(num) : console.log("finished");
})((num = 0));

// reason : Private variables and methods from closure

const increment = (() => {
  let counter = 0;
  console.log(counter);
  const credits = (num) => console.log(`I have${num} left`);
  return () => {
    counter++;
    credits(counter);
  };
})();
increment();
increment();

// The modue pattern

const Score = (() => {
  let count = 0;
  return {
    current: () => {
      return count;
    },
    increment: () => {
      count++;
    },
    reset: () => {
      count = 0;
    },
  };
})();

Score.increment();
console.log(Score.current());
Score.increment();
console.log(Score.current());

// The revealing pattern is variation of the module pattern
const Gamd = (() => {
  let count = 0;
  const current = () => {
    return `Game score is ${count}`;
  };
  const increment = () => {
    count++;
  };
  const reset = () => {
    count = 0;
  };

  return {
    current: current,
    increment: increment,
    reset: reset,
  };
})();

Gamd.increment();
console.log(Gamd.current());

// Switch 대신 쓸 수 있는 것

const extention = ".css";

const extentionObj = {
  ".css": "text/css",
  ".js": "text/javascript",
  ".json": "application/json",
  ".jpe": "image/jpeg",
  ".png": "image/png",
  ".txt": "text/plain",
};

console.log(extentionObj[extention] || "text/plain");

//  Map 오브젝트
const myMap = new Map();
myMap.set(".css", "text/css");
myMap.set(".js", "text/javascript");

console.log(myMap.get(extention) || "text/plain");

// 옵셔널 체인

let myArray = undefined;

console.log(myArray && myArray.length ? true : false);

// ----------------------
let myArray = [];

console.log(myArray?.length ? true : false);

myArray = [{ id: 1 }];
console.log(myArray?.[0].id ? true : false);
console.log(myArray?.[0].name ? true : false);

//  있으면 value 표시 없으면 오른쪽꺼 표시

console.log(myArray?.[0].name ?? "no value");

//  Array 인지 확인해 주는 것
myArray = "sujin";
console.log(Array.isArray(myArray));
console.log(Array.isArray(myArray) && myArray[0]?.id ? true : false);

// composition over inheritance | Javascript OOP Tutorial
