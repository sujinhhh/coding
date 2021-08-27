//  flatten a multi-dimentional array
// Fisher Yeates

function shuffle(array) {
  let currentIndex = array.length;
  let temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

let number = 1;
for (var i = 0; i < 5; i++) {
  number = i;
  console.log(number);
  setTimeout(() => {
    console.log(number);
  }, 1000);
}

// Write a function that takes any numbers of arguments of
// two number and returns the sum of all the arguments

function sum(...args) {
  let total = 0;
  for (let i of args) {
    total += i;
  }
  return total;
}
console.log("sum", sum(2, 3, 4, 5, 6));

// Write a function that takes two strings A and B,
// and returns whether B is in A in a case-intensitive way

// function strngInclude(a, b) {
//   // toLowerCase returns new string *********
//   a.toLowerCase();
//   const newA = a.toLowerCase();
//   console.log(a);
//   console.log(newA);

//   return a.toLowerCase().includes(b);
// }

// Write a function that takes array of objects, and returns on array
// of the objects 'name' property, only if that property exists.

function getNames(array) {
  array.map((a) => {
    return a.name?.name;
  });
}

console.log(
  getNames([{ a: 1 }, { name: "Mark" }, {}, { name: "JAme" }, { b: 2 }])
);
// expects ['Jane','Mark']

// Write a function that returns a promise that resolves after n
// number of milliseconds

function delay(n) {}

async () => {
  console.time("Testing delay");
  await delay(1000);
  console.timeEnd("Testing delay");
};
