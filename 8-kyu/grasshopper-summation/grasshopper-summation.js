var summation = function (num) {
  let allNum = []
  for (let i =1; i <= num; i++) {
    allNum.push(i)
  }
  return allNum.reduce((acc, curr) => acc + curr)
}
​