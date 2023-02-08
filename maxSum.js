//window sliding technique

function maxSum(nums, s) {
  let curSum = 0;
  let maxSum = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    curSum += nums[i];
    //if cur > max update max
    //we have s elements in the sub arr
    if (i >= s - 1) {
      maxSum = Math.max(curSum, maxSum);
      curSum -= nums[i - (s - 1)]; //sliding the window
    }
  }
  return maxSum;
}
