// https://leetcode.com/problems/max-consecutive-ones/

//Time => O(n)
//Space => O(1)
var findMaxConsecutiveOnes = function (nums) {
  let result = 0;
  let count = 0;
  for (const item of nums) {
    if (item === 1) {
      count++;
      result = Math.max(result, count);
    } else {
      count = 0;
    }
  }
  return Math.max(result, count);
};
export default findMaxConsecutiveOnes;
