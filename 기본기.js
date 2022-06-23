// 더하기

const sumUpTo = (n) => {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
};
console.log(sumUpTo(3));

// 반복된것이 있는지 없는지 확인

function noDup(str) {
  if (!str.length) return false;
  let obj = {};
  for (let i of str) {
    if (i in obj) {
      return false;
    }
    obj[i] = true;
  }
  return true;
}
console.log(noDup("abccdd"));

// 반복된것이 있는지 없는지 확인 : no additional data structure 1

function noDup(str) {
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) return false;
    }
  }
  return true;
}
console.log(noDup("abcc"));

// 반복된것이 있는지 없는지 확인 : no additional data structure 1

function noDup(str) {
  str = str.split("").sort().join("");
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) return false;
  }
  return true;
}
console.log(noDup("geabcc"));

/*Given 2 strings, return true of false based on whether the strings are ¸anagrams of each other. An angram is word of phrase formed by rearrage
letters of a dfferent word or phase
아나그램은 일단 철자가 똑같이 들어가 있음 맞는것임
*/

function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  console.log(s.split("").reverse().join(""));
  return s.split("").sort().join("") === s.split("").sort().join("");
}
console.log(isAnagram("anagram", "nagaram"));

// Rotate

var rotate = function (nums, k) {
  // i.e. nums = [1, 2, 3, 4, 5, 6, 7],  k = 3
  for (let i = nums.length - 1; i >= 0; i--) {
    nums[i + k] = nums[i];
  }

  for (let j = k - 1; j >= 0; j--) {
    // nums = [1, 2, 3, 1, 2, 3, 4, 5, 6, 7]
    nums[j] = nums.pop();
  }

  // nums = [5, 6, 7, 1, 2, 3, 4]

  // Time comlexity = O(a + b)
};

// 5. Replace Space : Given a string, return a new string with spaced with '%20' ' Ex. 'Boasy Mc => Boasty%20Mc'

function replaceSpace(str) {
  return str.replace(/\s/g, "*");
}
replaceSpace("Boasy Mc lll ");

// 5. Replace Space : Given a string, return a new string with spaced with '%20' ' Ex. 'Boasy Mc => Boasty%20Mc'

function replaceSpace(str) {
  console.log(str.split(" ").join("*"));
}
replaceSpace("Boasy Mc lll ");

/* Palindrome : 
We need an even number of almost all characters.
At most one character (The middle character) can have an odd count.

Ace Carr = > Race Car
*/

function replaceSpace(str) {
  const charCount = {};
  for (const char of str.toLowerCase()) {
    if (char !== " ") {
      charCount[char] = charCount[char] + 1 || 1;
    }
  }
  let oddCount = 0;
  for (const count of Object.values(charCount)) {
    if (count % 2 !== 0) {
      if (oddCount >= 1) {
        return false;
      }
    }
    oddCount += 1;
  }
  return true;
}
replaceSpace("Ace Carr");
