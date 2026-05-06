function replicate(times, number) {
  if (times <= 0) {
    return []
  }
  
  return [number,...replicate(times - 1, number)]
  
}
​
console.log(replicate(3, 1))