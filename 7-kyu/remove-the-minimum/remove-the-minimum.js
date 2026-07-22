function removeSmallest(numbers) {
  const result = [...numbers];
​
  const lowestN = Math.min(...result);
​
  result.splice(result.indexOf(lowestN), 1);
​
  return result;
}
​
console.log(removeSmallest([1, 5, 3, 7, 2]))