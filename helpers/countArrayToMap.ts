//Time => O(n)
//Space => O(n)
const countArrayToMap = <T>(arr: T[]) => {
  const countMap = new Map<T, number>();
  for (const item of arr) {
    countMap.set(item, (countMap.get(item) || 0) + 1);
  }
  return countMap;
};
export default countArrayToMap;
