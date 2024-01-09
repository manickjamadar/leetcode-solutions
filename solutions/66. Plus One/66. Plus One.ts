// https://leetcode.com/problems/plus-one

//Time => O(n)
//Space => O(1)
var plusOne = function (digits) {
  let shouldAddOne = true;
  let index = digits.length - 1;
  while (shouldAddOne) {
    const addedValue = digits[index] + 1;
    if (addedValue > 9) {
      digits[index] = 0;
      index--;
      if (index === -1) {
        return digits;
      }
    } else {
      digits[index] = addedValue;
      return digits;
    }
  }
  if (digits[0] === 0) {
    digits.unshift(1);
  }
  return digits;
};
export default plusOne;
