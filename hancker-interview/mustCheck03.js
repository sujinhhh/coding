// 1. Num to words
// // =========================================================

const numberToWords = (num) => {
  // set value, - return arr,
  // 0,1-19,tens,hundred
  // push,
  // return value
  let words = [];
  let countBig = 0;
  const smallNum = "zero,one,two,three,four,five,six,seven,eight,nine,ten,eleven,tweleve,thirteen,fourteen,fifteen,sixteen,seventeen,eighteen,nineteen".split(
    ","
  );
  const tens = "zero,ten,twenty,thirty,fourty,fifty,sixty,seventy,eighty,ninety".split(
    ","
  );
  const bigNum = "zero,thousand,millions,billons".split(",");

  if (!num) return "zero";

  while (num) {
    // 9999
    let arr = [];
    let remain = num % 1000;
    // 9999
    if (remain >= 100) {
      arr.push(smallNum[Math.floor(remain / 100)] + " hundred");
      remain %= 100;
    }
    // 99
    if (remain > 19) {
      arr.push(tens[Math.floor(remain / 10)]);
      remain %= 10;
    }
    // 9
    if (remain > 0) {
      arr.push(smallNum[remain]);
    }

    if (countBig && arr.length) arr.push(bigNum[countBig]);
    countBig++;
    num = Math.floor(num / 1000);
    words = [...arr, ...words];
  }
  return words.join(" ");
};

console.log(numberToWords(999999999));

// 2. Count Island
// =========================================================

const gridA = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["1", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];

const numIslands = (grid) => {
  let countIsland = 0;
  for (let rowIndex in grid) {
    for (let colIndex in grid[rowIndex]) {
      if (grid[rowIndex][colIndex] === "1") {
        countIsland++;
        checkIslands(parseInt(rowIndex), parseInt(colIndex), grid);
      }
    }
  }
  return countIsland;
};

//  convert stuff around us to water
const checkIslands = (rowIn, colIn, grid) => {
  if (
    grid[rowIn] === undefined ||
    grid[rowIn][colIn] === undefined ||
    grid[rowIn][colIn] === "0"
  )
    return;
  grid[rowIn][colIn] = "0";
  checkIslands(rowIn + 1, colIn, grid);
  checkIslands(rowIn - 1, colIn, grid);
  checkIslands(rowIn, colIn + 1, grid);
  checkIslands(rowIn, colIn - 1, grid);
};

console.log(numIslands(gridA));

// 3 - Find the maximum of an array of int.
// =========================================================

Math.min(...[1, 3, 5]); // 1
Math.max(...[1, 3, 5]);

// 4. matrix spiral
// =========================================================

const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]

var spiral = function (matrix) {
  const res = [];
  while (matrix.length) {
    const first = matrix.shift();
    res.push(...first);
    for (const m of matrix) {
      let val = m.pop();
      if (val) res.push(val);
      m.reverse();
    }
    matrix.reverse();
  }
  return res;
};

console.log(spiral(matrix));

//  이해하기 쉬운것

const matrixList = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]

var spiral = function (matrix) {
  let result = [];
  let left = 0;
  let row = 0;
  let right = matrix[0].length - 1; // 3
  let bottom = matrix.length - 1; // 2
  let direction = "right";

  while (left <= right && row <= bottom) {
    if (direction === "right") {
      for (let i = left; i <= right; i++) {
        result.push(matrix[row][i]);
      }
      row += 1;
      direction = "down";
    } else if (direction === "down") {
      for (let i = row; i <= bottom; i++) {
        result.push(matrix[i][right]);
      }
      right -= 1;
      direction = "left";
    } else if (direction === "left") {
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
      bottom -= 1;
      direction = "up";
    } else if (direction === "up") {
      for (let i = bottom; i >= row; i--) {
        result.push(matrix[i][left]);
      }
      left += 1;
      direction = "right";
    }
  }

  console.log(result);
};

spiral(matrixList);

// 5. Shuffle Card ============================================
// ============================================================

const createDeck = () => {
  const suits = "Hearts Clubs Diamonds Spades".split(" ");
  const ranks = "2 3 4 5 6 7 8 9 T J Q K A".split(" ");
  let deck = [];

  for (let suitCounter = 0; suitCounter < suits.length; suitCounter++) {
    for (let ranksCounter = 0; ranksCounter < ranks.length; ranksCounter++) {
      deck.push(suits[suitCounter] + ranks[ranksCounter]);
    }
  }
  return deck;
};
function shuffleDeck(deck) {
  for (let i = 0; i < deck.length; i++) {
    let tempCard = deck[i];
    let randomIndex = Math.floor(Math.random() * deck.length);
    deck[i] = deck[randomIndex];

    deck[randomIndex] = tempCard;
    tempCard;
  }
}
const cardGame = createDeck();
shuffleDeck(cardGame);

console.log(cardGame);

// // fizzbuzz  =================== =================== >

// function FizzBuzz() {
//   let retunValue = "";
//   for (i = 1; i <= 15; i++) {
//     i % 3 === 0 && i % 5 === 0
//       ? (retunValue += "FizzBuzz \n")
//       : i % 3 === 0
//       ? (retunValue += "Fizz \n")
//       : i % 5 === 0
//       ? (retunValue += "Buzz \n")
//       : (retunValue += i + "\n");
//   }
//   return retunValue;
// }
// console.log(FizzBuzz());

// 6. Meeting room ============================================
// ============================================================

// // Given an array of meeting time intervals consisting of start and end times[[s1,e1],[s2,e2],...](si< ei), determine if a person could attend all meetings.

// Example 1: [[0,30],[5,10],[15,20]]  Output: false

// Example 2: Input:[[7,10],[2,4]]  Output:true

const input = [
  [0, 3],
  [5, 10],
  [15, 20],
  [22, 40],
];
const canAttendMeetings = (intervals) => {
  if (intervals.length < 2) return true;
  intervals.sort((a, b) => a[0] - b[0]);
  let end = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    if (end > intervals[i][0]) return false;
    if (end < intervals[i][0]) end = intervals[i][1];
  }
  return true;
};
console.log(canAttendMeetings(input));

// 7. longest Palindrom ============================================
// ============================================================

// s = "babad" Output: "bab" or "aba"
// s = "cbbd" Output: "bb"
// s = "a" Output: "a"
// s = "ac" Output: "a"

function longestPalindrome(s) {
  let answer = 0;
  let keys = {};

  for (let char of s) {
    keys[char] = (keys[char] || 0) + 1;
    if (keys[char] % 2 == 0) answer += 2;
  }
  return s.length > answer ? answer + 1 : answer;
}

const inputString = "babad";
console.log(longestPalindrome(inputString));

// Meeting room 2

const meetingRooms = (intervals) => {
  if (intervals.length < 2) return intervals.length;
  intervals.sort((a, b) => a[0] - b[0]);
  let roomTime = [intervals[0][1]];
  for (let i = 1; i < intervals.length; i++) {
    let [start, end] = [...intervals[i]];
    let earlist = Math.min(...roomTime);
    console.log(...intervals[i]);
    if (start < earlist) {
      roomTime.push(end);
    } else {
      roomTime[roomTime.indexOf(earlist)] = end;
    }
  }
  console.log(roomTime.length);
  return roomTime.length;
};

meetingRooms([
  [0, 30],
  [1, 5],
  [2, 3],
  [7, 10],
]);

// 7. longest Palindrom ============================================
// ============================================================

// s = "babad" Output: "bab" or "aba"
// s = "cbbd" Output: "bb"
// s = "a" Output: "a"
// s = "ac" Output: "a"

function longestPalindrome(str) {
  if (str.length < 1 || str === null) return "";
  let longest = 0;
  for (let i = 0; i < str.length; i++) {
    let oddPalind = expandfrom(str, i, i);
    let evenPalind = expandfrom(str, i - 1, i);
    if (oddPalind.length > longest.length) {
      longest = oddPalind;
    }
    if (evenPalind.length > longest.length) {
      longest = evenPalind;
    }
  }
  return longest;
}

function expandfrom(str, left, right) {
  let i = 0;
  while (str[left - i] && str[left - i] === str[right + 1]) {
    i++;
  }
  i--;
  console.log(i);

  return str.slice(left - 1, right + i + 1);
}

// 7. longest Palindrom ============================================
// ============================================================

// s = "babad" Output: "bab" or "aba"
// s = "cbbd" Output: "bb"
// s = "a" Output: "a"
// s = "ac" Output: "a"

const expandAroundCenter = (s, left, right) => {
  while (left >= 0 && right < s.length && s[right] == s[left]) {
    left--;
    right++;
  }
  //right-left-1  is the length because of JS arrays and the -1 accomadates the overflow
  //revert the left back so we dont have to do that funky math in the original example
  return [right - left - 1, left + 1];
};

const longestPalindrome = (s) => {
  let max = 0;
  let start = 0;

  for (let i = 0; i < s.length; i++) {
    //handles the case of the single letter in the middle
    let [len1, l1] = expandAroundCenter(s, i, i);

    //handles the case of 2 letters same in middle
    let [len2, l2] = expandAroundCenter(s, i, i + 1);
    if (max < len1 && len1 >= len2) {
      max = len1;
      start = l1;
      continue;
    }
    if (max < len2) {
      start = l2;
      max = len2;
    }
  }
  return s.substr(start, max);
};

const longestPalindrome = (s) => {
  let res = "";

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < 2; j++) {
      let left = i;
      let right = i + j;
      while (left >= 0 && right <= s.length && s[left] === s[right]) {
        left--;
        right++;
      }
      let start = left + 1;
      let end = right;

      let subString = s.slice(start, end);
      if (res.length < subString.length) {
        res = subString;
      }
    }
  }

  return res;
};
