// https://leetcode.com/problems/sort-colors/

//Time => O(n)
//Space => O(1)
var sortColors = function (nums) {
  let totalRedColor = 0;
  let totalWhiteColor = 0;
  let totalBlueColor = 0;
  for (let i = 0; i < nums.length; i++) {
    const color = nums[i];
    if (color === 0) {
      totalRedColor++;
    } else if (color === 1) {
      totalWhiteColor++;
    } else if (color === 2) {
      totalBlueColor++;
    }
  }
  for (let i = 0; i < totalRedColor; i++) {
    nums[i] = 0;
  }
  for (let i = totalRedColor; i < totalRedColor + totalWhiteColor; i++) {
    nums[i] = 1;
  }
  for (
    let i = totalRedColor + totalWhiteColor;
    i < totalRedColor + totalWhiteColor + totalBlueColor;
    i++
  ) {
    nums[i] = 2;
  }
  return nums;
};
export default sortColors;
