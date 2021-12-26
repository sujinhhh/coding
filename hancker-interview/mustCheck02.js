// Count Islands ... =================== =================== >



const gridA = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["1", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];




const numIslands = (grid) => {
  let countIsland = 0;

  const checkIslands = (rowIn, colIn) => {
    if (
      grid[rowIn] === undefined ||
      grid[rowIn][colIn] === undefined ||
      grid[rowIn][colIn] === "0"
    )
      return;
    grid[rowIn][colIn] = "0";
    checkIslands(rowIn + 1, colIn);
    checkIslands(rowIn - 1, colIn);
    checkIslands(rowIn, colIn + 1);
    checkIslands(rowIn, colIn - 1);
  };
  

  for (let rowIndex in grid) {
    for (let colIndex in grid[rowIndex]) {
      if (grid[rowIndex][colIndex] === "1") {
        countIsland++;
        checkIslands(parseInt(rowIndex), parseInt(colIndex));
      }
    }
  }
  return countIsland;
};

//  convert stuff around us to water

console.log(numIslands(gridA));

// fuction ㄸㅏ로 =================== =================== >
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

// // Number to words =================== =================== >

var numberToWords = function (num) {
  if (!num) return "Zero";
  const level1 = "Zero One Two Three Four Five Six Seven Eight Nine Ten Eleven Twelve Thirteen Fourteen Fifteen Sixteen Seventeen Eighteen Nineteen".split(
    " "
  );
  const level2 = "Twenty Thirty Forty Fifty Sixty Seventy Eighty Ninety".split(
    " "
  );
  const level3 = "Thousand Million Billion".split(" ");
  let res = [];
  let level = 0;
  while (num) {
    let arr = [];
    let n = num % 1000;
    if (n >= 100) {
      arr.push(level1[Math.floor(n / 100)]);
      arr.push("Hundred");
    }
    n %= 100;
    if (n > 19) {
      arr.push(level2[Math.floor(n / 10) - 2]);
      n = n % 10;
    }
    if (n > 0) {
      arr.push(level1[n]);
    
    }
    if (level && arr.length) arr.push(level3[level - 1]);
    level++;
    num = Math.floor(num / 1000);
    res = arr.concat(res);
  }
  return res.join(" ").trim();
};

console.log(numberToWords(9999));

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

// // Move 0 =================== =================== >

// function moveZeroes(arr) {
//   // count zeroes
//   let numZeroes = 0;
//   for (let i = 0; i < arr.length; i++) numZeroes += !arr[i];
//   // Determine target range for those zeroes:
//   let first = (arr.length - numZeroes) >> 1;
//   let last = first + numZeroes - 1;
//   // Move some non-zero values to the left of the array
//   for (let i = 0, j = 0; i < first; i++, j++) {
//     while (!arr[j]) j++; // Find next non-zero value
//     arr[i] = arr[j]; // Move it to right
//   }
//   // Move other non-zero values to the right of the array
//   for (let i = arr.length - 1, j = i; i > last; i--, j--) {
//     while (!arr[j]) j--; // Find next non-zero value
//     arr[i] = arr[j]; // Move it to right
//   }
//   // Fill the middle section with zeroes:
//   for (let i = first; i <= last; i++) arr[i] = 0;
//   return arr;
// }

// // Demo
// console.log(moveZeroes([0, 1, 2, 3, 4, 5, 0, 6, 0, 0]));


// Shuffle card

function () {
  var cardWeights = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];
  var cardTypes = ["Spades", "Hearts", "Diamonds", "Clubs"];
  var cards = new Array();

  function card(cardType, weight) {
    this.cardType = cardType;
    this.weight = weight;
  }

  function CreateDeck() {
    cardTypes.forEach(function (weight) {
      cardWeights.forEach(function (type) {
        cards.push(new card(type, weight));
      });
    });
  }

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function shuffleDeck(shuffleCnt) {
    for (var i = 0; i < shuffleCnt; i++) {
      var rndNo = getRandomInt(1, 52);
      var card = cards[i];
      cards[i] = cards[rndNo];
      cards[rndNo] = card;
    }
  }

  CreateDeck();
  console.log(cards);
  shuffleDeck(getRandomInt(10, 25));
  console.log(cards);
}
)();


//  solution 2

var suits, faces, cards, decks, players, hands, numberOfDecks, handSize;

players = [1,2,3,4,5,6];
suits = [ 'd', 'c', 'h', 's'];
faces = [  2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ];
decks = [];
hands = [];
numberOfDecks = 5;

for (var d=0; d <numberOfDecks; d++) 
{
    suits.forEach(function (suit) { 
         faces.forEach(function (face) 
          {
              decks [d].push ([suit, face]);
           })
    });
   decks [d].map (x => [Math.random (), x]).sort (([a], [b]) => a - b).map (([_,x]) => x);
}
var c = 0;
players.forEach (function (player){
   var i = 0;
   while (i != handSize) {
      hands [player].push (decks [Math.floor(c / 52)] [c % 52]);
i++;


  }
});



// Prefix Tree  =======================>

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



// ======================= 밑에 거는 옛날 버전

/**
 * Initialize your data structure here.
 constructor
 */
var Trie = function() {
  this.children = {}
};

/**
* Inserts a word into the trie. 
* @param {string} word
* @return {void}
*/

// method 를 표기하는 방법
Trie.prototype.insert = function(word) {

};

/**
* Returns if the word is in the trie. 
* @param {string} word
* @return {boolean}
*/
Trie.prototype.search = function(word) {
  
};

/**
* Returns if there is any word in the trie that starts with the given prefix. 
* @param {string} prefix
* @return {boolean}
*/
Trie.prototype.startsWith = function(prefix) {
  
};

/** 
* Your Trie object will be instantiated and called as such:
* var obj = new Trie()
* obj.insert(word)
* var param_2 = obj.search(word)
* var param_3 = obj.startsWith(prefix)
*/