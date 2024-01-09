// https://leetcode.com/problems/contains-duplicate/

//Time => O(n)
//Space => O(n)
function containsDuplicate(nums: number[]): boolean {
  return new Set(nums).size !== nums.length;
}
export default containsDuplicate;
