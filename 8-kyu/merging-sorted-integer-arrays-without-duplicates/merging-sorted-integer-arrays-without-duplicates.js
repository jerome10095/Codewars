function mergeArrays(a, b) {
  let newArr = a.concat(b)
  return [...new Set(newArr)].sort((a, b) => a - b)
}
​
console.log(mergeArrays([1, 3, 5], [2, 4, 6]))