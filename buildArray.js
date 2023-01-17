/**
 * @param {number[]} nums
 * @return {number[]}
 */

//strategy: traverse nums, replace i with new value

var buildArray = function (nums) {
  const ans = [];
  //traverse nums
  for (let i = 0; i < nums.length; i++) {
    ans[i] = nums[nums[i]];
  }
  return ans;
};
