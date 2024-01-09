// https://leetcode.com/problems/minimum-number-of-operations-to-make-array-empty/

import countArrayToMap from "../../helpers/countArrayToMap";

//Time => O(n)
//Space => O(n)
const minOperations = function (nums: number[]) {
  const countMap = countArrayToMap(nums);
  let result = 0;
  for (const [key, count] of countMap) {
    if (count === 1) {
      return -1;
    }
    result += Math.ceil(count / 3);
  }
  return result;
};
export default minOperations;
