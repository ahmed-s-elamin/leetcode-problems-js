function threeSum(nums) {
  nums = nums.sort((a, b) => a - b); //asc
  let res = [];

  for (let i = 0; i < nums.length; i++) {
    const a = nums[i];
    if (a > 0) break;
    if (i > 0 && a === nums[i - 1]) continue;

    let l = i + 1;
    let r = nums.length - 1;

    while (l < r) {
      const threeSum = a + nums[l] + nums[r];
      if (threeSum > 0) {
        r--;
      } else if (threeSum < 0) {
        l++;
      } else {
        re.push([a, nums[l], nums[r]]);
        l++;
        r--;
        while (nums[l] === nums[l - 1] && l < r) {
          l++;
        }
      }
    }
  }
  return res;
}
