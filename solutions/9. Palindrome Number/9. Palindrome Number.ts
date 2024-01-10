// https://leetcode.com/problems/palindrome-number

//Time => O(n)
//Space => O(n)
function isPalindrome(x: number) {
  if (x < 0) {
    return false;
  }
  const arr: number[] = [];
  let remaining = x;
  while (remaining > 0) {
    arr.push(remaining % 10);
    remaining = Math.floor(remaining / 10);
  }
  let low = 0;
  let high = arr.length - 1;
  while (low < high) {
    if (arr[low] !== arr[high]) {
      return false;
    } else {
      low++;
      high--;
    }
  }
  return true;
}
export default isPalindrome;
