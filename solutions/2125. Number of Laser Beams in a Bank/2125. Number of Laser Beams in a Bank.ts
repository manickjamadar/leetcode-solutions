// https://leetcode.com/problems/number-of-laser-beams-in-a-bank/

//Time => O(m x n)
//Space => O(1)
const countItem = (item) => {
  let counter = 0;
  for (let i = 0; i < item.length; i++) {
    if (item[i] === "1") {
      counter++;
    }
  }
  return counter;
};
var numberOfBeams = function (bank) {
  let result = 0;
  let prevRowCount = 0;
  for (const item of bank) {
    const currentCount = countItem(item);
    if (currentCount === 0) {
      continue;
    }
    result = result + prevRowCount * currentCount;
    prevRowCount = currentCount;
  }
  return result;
};
export default numberOfBeams;
