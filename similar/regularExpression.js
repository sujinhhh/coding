// 보통 첫번째로 나오는 것만 라턴 되지만  flag/g를 쓰면 전부 다 훍어줌
// const regex = /bob/g

// ' | ' => or

const srr = "gfuhjgkjljlkj";

const a = srr.match(/[i]/gi);

console.log(a);

const str = "g h Ff-";
const b = str.match(/[A-Z]/g);
console.log(b);

//  regex 문제 풀지 못한것

// must be lower case
// _ and  " " (space) become hypens(-)
// Capital case always determins the start of a new Word ( but not always)
//[ 'this', 'is', 'spinal','tap']

function spinalCase(str) {
  const words = [];
  let word = "";
  for (const char of str) {
    if (char === "_" || char === " ") {
      words;
      words.push(word);
      word = "";
    } else if (char >= "A" && char <= "Z" && !word.length) {
      word = char.toLowerCase();
      word;
    } else if (char >= "A" && char <= "Z" && word.length) {
      words.push(word);
      word = char.toLowerCase();
    }
  }
}

spinalCase("This is Spinal Tap");
