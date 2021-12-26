//  오리지날 바꾸지 않음
split();
a.toLowerCase();
slice();
fruit.concat();
reduce();
join();

//  오리지날 배열을 바꿈
reverse();
splice();
push();
pop();
shift();

// string으로 반환
const multiply2 = (num) => {
  return [...(num + "")];
};
console.log(multiply2(26));

join();

// map : 새 배열을 만듬 ******

// String API =>'this is blalar'

charAt();
indexOf();
includes();
concat();

// \
//
//
//
//
//
//  Object literal ======================>

let me = {
  name: "sujin",
};

//  무엇이 존재하는지 안존재 하는지 확인 ======================>

// Some ======================>
var fruits = ["apple", "banana", "mango", "guava"];

function checkAvailability(arr, val) {
  return arr.some(function (arrVal) {
    return val === arrVal;
  });
}
console.log(checkAvailability(fruits, "kela"));

console.log(fruits.includes("mango"));

// 참고 아래
cellElements[index].classList.contains(currentClass);
