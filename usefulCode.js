// ---------------------------- 이중에 하나만이라도 참이면 실행

var email = true;
var fb = false;
var google = false;

if (email || fb || google) {
  console.log("sucess");
}
// ---------------------------- 글자가 포함하는지 확인

var name = "sujin's";
console.log(name.charAt(3));
("i");
console.log(name.includes("s"));
("ture");

// ----------------------------  오브젝트 합하기

var myObj = {};

Object.assign(myObj, { a: 1, b: 5 }, { c: 3 });

// ----------------------------  셔플 // 바로 실행

(function shuffle() {
  cards.forEach((card) => {
    let index = Math.floor(Math.random() * 16);
    card.style.order = index;
  });
})();

// ----------------------------  글자 대체하기

const str = "2,3,5,4,2";
const newStr = str.replaceAll("2", "4");

console.log(newStr);
