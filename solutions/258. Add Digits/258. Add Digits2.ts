// https://leetcode.com/problems/add-digits/

//Time => O(1)
//Space => O(1)
function addDigits(num) {
  return 1 + ((num - 1) % 9);
}
export default addDigits;
