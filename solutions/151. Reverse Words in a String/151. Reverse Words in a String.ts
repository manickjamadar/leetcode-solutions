// https://leetcode.com/problems/reverse-words-in-a-string/

// Time => O(n)
// Space => O(1)
const reverseWords = (s: string) => {
  return s.trim().split(/\s+/).reverse().join(" ");
};
export default reverseWords;
