//  두개 합이 sum 인 값 구하기  ***************************************

const arr = [2, 7, 11, 15];

// 1,2,3,2,5

function sum(nums, target) {
  let memory = {};
  nums;
  for (let i = 0; i < nums.length; i++) {
    if (memory[nums[i]] === undefined) {
      memory[target - nums[i]] = i;
    } else {
      console.log(memory[nums[i]]);
      return [memory[nums[i]], i];
    }
  }
  console.log(memory);
}
console.log(sum(arr, 9));

// 같은 숫자가 있으면

function test(arr) {
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (i > 0 && arr[i - 1] === arr[i]) return true;
  }
  return false;
}
console.log(test([1, 2, 3]));

//  두개 합이 sum 인 값 구하기  ***************************************

function test(nums, target) {
  let storage = {};

  for (let [index, num] of nums.entries()) {
    if (storage[num] !== undefined) return [storage[num], index];
    storage[target - num] = index;
    storage;
  }
}
console.log(test([1, 2, 3], 3));

// Remove Duplicates from Sorted Array ***************************************
var removeDuplicates = function (nums) {
  let i = 0;
  let j = 1;

  while (j < nums.length) {
    if (nums[i] === nums[j]) {
      nums.splice(j, 1);
    } else {
      i++;
      j++;
    }
  }
  return nums;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

// Best Time to Buy and Sell Stock II  ***************************************

var maxProfit = function (prices) {
  let totalProfit = 0;
  //guard against short arrs
  if (prices.length < 2) return totalProfit;

  //add mini profit bumps, to earn maximum profit
  for (let i = 0; i < prices.length; i++) {
    // 5-1 = 4 +
    if (prices[i + 1] - prices[i] > 0)
      totalProfit = totalProfit + (prices[i + 1] - prices[i]);
  }
  console.log(totalProfit);

  return totalProfit;
};

maxProfit([7, 1, 5, 3, 6, 4]);

// Rotate Array ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var rotate = function (nums, k) {
  let j = nums.length - (k % nums.length);
  let arr = [...nums];
  for (let i = 0; i < nums.length; i++) {
    if (j === nums.length) {
      j = 0;
    }
    nums[i] = arr[j];
    j++;
  }
  console.log(nums);
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));

// // Plus One ***************************************

const plusOne = (arr) => {
  let num = BigInt(digits.join("")) + 1n;

  return String(num)
    .split("")
    .map((d) => parseInt(d));
};
console.log(plusOne([1, 2, 4]));

// // fibonacci ***************************************

const fibonacci = (num, array = [0, 1]) => {
  let newNum = num;
  console.log(newNum);

  while (newNum > 2) {
    const [nextTolast, last] = array.slice(-2);
    array.push(nextTolast + last);
    newNum -= 1;
  }
  console.log(array[11]);
};

fibonacci(12);

// // fibonacci recursion ***************************************

const fibonacci = (num, array = [0, 1]) => {
  if (num < 2) return array;
  const [nextToLast, last] = array.slice(-2);
  return fibonacci(num - 1, [...array, nextToLast + last]);
};

fibonacci(12);

// // fibonacci Position ***************************************

const fibonacci = (pos) => {
  if (pos <= 1) return pos;
  const seq = [0, 1];
  for (let i = 2; i <= pos; i++) {
    const [nextToLast, last] = seq.slice(-2);
    seq.push(nextToLast + last);
  }
  return seq[pos];
};

console.log(fibonacci(8));

// 완전 간단한거 ***************************************
const fibonacci = (pos) => {
  if (pos < 2) return pos;
  return fibonacci(pos - 1) + fibonacci(pos - 2);
};

console.log(fibonacci(8));


// // maxSubArray  ***************************************


var maxSubArray = function (nums) {
  if (nums.length === 1) return nums[0]

  let maxNum = nums[0]
  let accuNum = nums[0]
  for (let i = 1; i < nums.length; i++) {
    let cal = Math.max(nums[i], accuNum + nums[i])
    if (cal > maxNum) maxNum = cal
    accuNum = cal
  }

  console.log(maxNum);


};

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])

// // containsDuplicate  ***************************************


var containsDuplicate = function (nums) {
  let memory = {}
  // console.log(memory);

  for (let i = 0; i < nums.length; i++) {
    if (memory[nums[i]] === undefined) {
      memory[nums[i]] = 1


    } else {
      memory[nums[i]]++

      return true
    }
  }

  console.log(memory);
  return false
}
console.log(containsDuplicate([2, 14, 18, 22, 22]))