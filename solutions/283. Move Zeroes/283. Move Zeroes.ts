// https://leetcode.com/problems/move-zeroes/

//Time => O(n)
//Space => O(1)
var moveZeroes = function (nums) {
  let swappableIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[swappableIndex], nums[i]] = [nums[i], nums[swappableIndex]];
      swappableIndex++;
    }
  }
  return nums;
};
export default moveZeroes;
