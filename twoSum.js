//Given an array of integers nums and an integer target
// return indices of the two numbers such that they add up to target.
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];
    let complement = target - curr;
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(curr, i);
  }
};

const nums = [1, 2, 3, 4, 5];
const target = 6;

console.log(twoSum(nums, target));
