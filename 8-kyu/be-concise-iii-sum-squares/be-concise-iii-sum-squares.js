function sumSquares(array) {
``
 let result = array.map(num => num * num)
 return result.reduce((acc, val) => acc + val, 0)
}
​
console.log(sumSquares([1, 5, 3, 7, 3]))