// Given an array nums.
// We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i])
// Return the running sum of nums.

function runningSum(nums) {
  let total = 0;
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    total = total + nums[i];
    result.push(total);
  }
  return result;
}
const nums = [1, 2, 3, 4];
console.log(runningSum(nums));
