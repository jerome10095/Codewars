function grow(x){
  let sort = x.sort((a, b) => a - b)
  return sort.reduce((acc, current) => acc * current, 1)
}
​
console.log(grow([1, 5, 2]))