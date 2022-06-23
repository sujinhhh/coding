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
