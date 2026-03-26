function findAverage(array) {
  let total = 0;
  let n = array.length;
  average = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i]
    average = total/array.length
  }
  return average
} 
​
console.log(findAverage([1, 6, 3, 7]))