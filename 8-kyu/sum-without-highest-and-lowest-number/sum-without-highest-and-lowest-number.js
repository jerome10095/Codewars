function sumArray(array) {
  if (typeof array === "undefined" || array === null || array.length <= 2) return 0;
​
  return array
    .sort((a, b) => a - b)
    .slice(1, -1)
    .reduce((sum, num) => sum + num, 0);
}