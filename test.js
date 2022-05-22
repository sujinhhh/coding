function twoSum(nums, target) {
  let remain = nums.reduce(
    (acc, [num, left]) => {
      return {
        ...acc,
        [num]: (left -= target),
      };
    },

    {}
  );
  console.log(remain);
}
twoSum([[3, 2, 4],[2,4], 6);

// set variable obj

// {
//   2:7
//   7:2

// }
