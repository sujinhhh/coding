// Third largest    ===========================================
// ============================================================

var thirdMax = function (nums) {
  nums = [...new Set(nums)].sort((a, b) => b - a);
  if (nums.length < 3) return Math.max(...nums);
  return nums[2];
};

// Largest Number   ===========================================
// ============================================================

var largestNumber = function (nums) {
  const result = nums
    .map((o) => String(o))
    .sort((a, b) => (a + b > b + a ? -1 : 1))
    .join("");
  return result[0] == "0" ? "0" : result;
};
