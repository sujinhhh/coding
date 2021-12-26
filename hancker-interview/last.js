// 1. Meeting room 1 ============================================
// ============================================================

// Example 1: [[0,30],[5,10],[15,20]]  Output: false

// Example 2: Input:[[7,10],[2,4]]  Output:true

const input = [
  [0, 30],
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

// 2. Meeting room 2 ============================================
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

const input = [
  [0, 3],
  [2, 6],
  [15, 16],
  [22, 23],
];
console.log(meetingRooms(input));

// 3. matrix spiral
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

//  다른버전
// =========================================================

const matrixList = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]

var spiral = function (matrix) {
  let result = [];
  let left = 0;
  let right = matrix[0].length - 1; // 3
  let row = 0;
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

// 4. longest Palindrom ============================================
// ============================================================

// s = "babad" Output: "bab" or "aba"
// s = "cbbd" Output: "bb"
// s = "a" Output: "a"
// s = "ac" Output: "a"

// bb

var longestPalindrome = function (s) {
  let longest = "";

  const expand = (str, left, right) => {
    while (left >= 0 && right < str.length && str[left] === str[right]) {
      left--;
      right++;
    }
    return str.slice(left + 1, right);
  };

  for (let i = 0; i < s.length; i++) {
    const onePointer = expand(s, i, i);
    const twoPointer = expand(s, i, i + 1);
    const compare = onePointer.length > twoPointer ? onePointer : twoPointer;

    if (compare.length > longest.length) longest = compare;
  }

  return longest;
};

const inputString = "bb";
console.log(longestPalindrome(inputString));

// Prefix Tree  =======================>

var Trie = function () {
  this.root = {};
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */

Trie.prototype.insert = function (word) {
  let node = this.root;
  for (let letter of "word") {
    if (node[letter] === undefined) node[letter] = {};

    console.log(node);
    node = node[letter];
  }
  node.isEnd = true;
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let node = this.root;
  for (let letter of word) {
    // check if current letter is in the node
    if (!node[letter]) {
      return false;
    } else {
      node = node[letter];
    }
  }

  return node && node.isEnd === true;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let node = this.root;
  for (let letter of prefix) {
    if (!node[letter]) {
      return false;
    } else {
      node = node[letter];
    }
  }
  return true;
};
const words = [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]];

const newTrie = new Trie();

console.log(newTrie.insert("apple"));

console.log(newTrie.search("apple"));
console.log(newTrie.search("app"));
console.log(newTrie.startsWith("app"));
console.log(newTrie.insert("app"));
console.log(newTrie.search("app"));

// 다른버전  =======================>

class Trie {
  constructor() {
    this.root = {};
  }

  insert(word) {
    let node = this.root;
    for (let c of word) {
      if (node[c] == null) node[c] = {};
      node = node[c];
    }
    node.isWord = true;
  }

  traverse(word) {
    let node = this.root;
    for (let c of word) {
      node = node[c];
      if (node == null) return null;
    }
    return node;
  }

  search(word) {
    const node = this.traverse(word);
    return node != null && node.isWord === true;
  }

  startsWith(prefix) {
    return this.traverse(prefix) != null;
  }
}

// Check if two numbers in array sum to x.

function test(nums, target) {
  let storage = {};

  for (let [index, num] of nums.entries()) {
    if (storage[num] !== undefined) return [storage[num], index];
    storage[target - num] = index;
    storage;
  }
}
console.log(test([1, 2, 3], 3));

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

// debugging tic-tac-toe with follow up questions,
// https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game/

// 5. Find winners ============================================
// ============================================================

var tictactoe = function (moves) {
  const arr = new Array(9).fill(null);
  console.log(arr);

  const winCases = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const len = moves.length;
  for (let i = 0; i < len; i++) {
    console.log(i);

    const move = moves[i];
    console.log(move);

    arr[move[0] * 3 + move[1]] = i % 2 ? "B" : "A";
    // 0 * 3 + 0 = A
    console.log(i % 2);
  }
  for (let win of winCases) {
    const user = arr[win[0]];
    if (user && user === arr[win[1]] && user === arr[win[2]]) return user;
  }
  return len === 9 ? "Draw" : "Pending";
};

tictactoe([
  [0, 0],
  [1, 1],
  [0, 1],
  [0, 2],
  [1, 0],
  [2, 0],
]);

// 시험문제지  ============================================
// ============================================================

var longestPalindrome = function (s) { };

const inputString = "bb";
console.log(longestPalindrome(inputString));

// Prefix Tree  =======================>

var Trie = function () { };

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */

Trie.prototype.insert = function (word) { };

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) { };

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) { };
const words = [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]];

const newTrie = new Trie();

console.log(newTrie.insert("apple"));

console.log(newTrie.search("apple"));
console.log(newTrie.search("app"));
console.log(newTrie.startsWith("app"));
console.log(newTrie.insert("app"));
console.log(newTrie.search("app"));

// Deck of Card  ============================================
// ============================================================
const createDeck = () => { };
