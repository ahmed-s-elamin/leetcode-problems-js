//Given an array of integers nums and an integer target
// return indices of the two numbers such that they add up to target.
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const hashMap = {};

  for (let i = 0; i < nums.length; i++) {
    const currNum = nums[i];
    const numToFind = target - currNum;
    if (hashMap[numToFind] >= 0) {
      return [hashMap[numToFind], i];
    } else {
      hashMap[currNum] = i;
    }
  }
};
