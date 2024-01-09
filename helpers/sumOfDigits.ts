//Time => O(n)
//Space => O(1)
const sumOfDigits = (num: number) => {
  let sum = 0;
  let remaining = num;
  while (remaining > 0) {
    sum += remaining % 10;
    remaining = Math.floor(remaining / 10);
  }
  return sum;
};
export default sumOfDigits;
