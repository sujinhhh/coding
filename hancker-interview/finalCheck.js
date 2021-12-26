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

// 3 - Find the 세번째 maximum of an array of int.

var thirdMax = function (nums) {
  nums = [...new Set(nums)].sort((a, b) => b - a);
  if (nums.length < 3) return Math.max(...nums);
  return nums[2];
};

// 6. Meeting room 1 ============================================
// ============================================================

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

// 6. Meeting room 2 ============================================
// ============================================================

const meetingRooms = (intervals) => {
  if (intervals.length < 2) return intervals.length;
  intervals.sort((a, b) => a[0] - b[0]);

  // set first finishing Time
  // first finishing > next starting time = total-1

  let finishingTime = intervals[0][1];
  let totalRoomNums = intervals.length;
  for (let i = 1; i < intervals.length; i++) {
    if (finishingTime < intervals[i][0]) {
      totalRoomNums--;
    } else {
      finishingTime = Math.min(finishingTime, intervals[i][1]);
    }
  }

  console.log(totalRoomNums);
  return roomTime.length;
};

meetingRooms([
  [0, 30],
  [1, 5],
  [9, 2],
]);

// 7. longest Palindrom ============================================
// ============================================================

// s = "babad" Output: "bab" or "aba"
// s = "cbbd" Output: "bb"
// s = "a" Output: "a"
// s = "ac" Output: "a"

// bb

var longestPalindrome = function (s) {
  let longest = "";

  const checkPalindrome = (str, left, right) => {
    while (left >= 0 && right < s.length && str[left] === str[right]) {
      left--;
      right++;
    }
    //  0,1
    return str.slice(left + 1, right);
  };

  for (let i = 0; i < s.length; i++) {
    i;
    const one = checkPalindrome(s, i, i);
    const two = checkPalindrome(s, i, i + 1);
    const long = one.length > two.length ? one : two;

    if (long.length > longest.length) longest = long;
  }

  return longest;
};

const inputString = "bb";
console.log(longestPalindrome(inputString));

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

// Tic tac toe

var validTicTacToe = (module.exports = function (board) {
  let xCount = 0,
    oCount = 0;

  let arr = [];

  for (let i = 0; i < 3; i++)
    for (let j = 0; j < 3; j++) {
      arr[i * 3 + j] = board[i].charAt(j);
      if (arr[i * 3 + j] == "X") xCount++;
      if (arr[i * 3 + j] == "O") oCount++;
    }

  let winState = getWinState(arr[0], arr[4], arr[8]);
  winState += getWinState(arr[6], arr[4], arr[2]);

  for (let i = 0; i < 3; i++) {
    winState += getWinState(arr[i * 3], arr[i * 3 + 1], arr[i * 3 + 2]);
    winState += getWinState(arr[i], arr[i + 3], arr[i + 6]);
  }

  return (
    (winState % 10 == 0 && oCount == xCount) ||
    (winState < 3 && oCount + 1 == xCount)
  );

  function getWinState(c1, c2, c3) {
    if (c1 != " " && c1 == c2 && c2 == c3) return c1 == "X" ? 1 : 10;
    else return 0;
  }
});

// Prifix tree,
