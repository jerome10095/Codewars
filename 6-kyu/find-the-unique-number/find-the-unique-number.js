function findUnique(numbers) {
  let unique = 0;
  for (let i = 0; i < numbers.length; i++) {
    unique ^= numbers[i]
  }
  return unique
}
​
console.log(findUnique([1, 8, 4, 4, 6, 1, 8,]))
​