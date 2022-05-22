var intersect = function (nums1, nums2) {
  let map = new Map();
  for (let i of nums1) {
    if (map.has(i)) {
      map.set(i, map.get(i) + 1);
    } else {
      map.set(i, 1);
    }
  }

  let result = [];
  for (let j of nums2) {
    if (map.has(j) && map.get(j) > 0) {
      result.push(j);
      map.set(j, map.get(j) - 1);
    }
  }
  return result;
};
var twoSum = function (nums, target) {
  let obj = {};
  for (const [index, num] of Object.entries(nums)) {
    if (obj[num] !== undefined) return [parseInt(obj[num]), parseInt(index)];
    obj[target - num] = index;
  }
};

function twoSum(nums, target) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    const another = target - nums[i];
    another;
    if (another in map) {
      return [map[another], i];
    }

    map[nums[i]] = i;
  }
  console.log(map);
}
twoSum([3, 2, 4], 6);
