// https://leetcode.com/problems/add-digits/
import sumOfDigits from "../../helpers/sumOfDigits";

//Time => O(n2)
//Space => O(1)
var addDigits = function (num) {
  let sum = num;
  while (sum > 9) {
    sum = sumOfDigits(sum);
  }

  return sum;
};
export default addDigits;
