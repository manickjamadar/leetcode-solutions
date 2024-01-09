// https://leetcode.com/problems/length-of-last-word/
//Time => O(n)
//Space => O(1)
var lengthOfLastWord = function (s) {
  let length = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === " ") {
      if (length === 0) {
        continue;
      } else {
        break;
      }
    } else {
      length++;
    }
  }
  return length;
};
export default lengthOfLastWord;
