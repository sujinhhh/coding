// hash is one way

// new Set() : 반복되는것을 빼줌
// findVowels("abracadabrai");
// console.log(...new Set("abracadabrai"));

// function findVowels(str) {
//   let vowels = "";
//   vowels = new Set(str.match(/[aeiou]/g));
//   console.log([...vowels]);
// }
// new Set() : 반복되는것을 빼줌
findVowels("abracadabrai");

function findVowels(str) {
  const vowels = [...new Set(str)].join("");
  console.log(vowels);
  console.log(vowels.match(/[aeiou]/g));
}
