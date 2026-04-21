function divisibleBy(numbers, divisor){
  const divisibles = numbers.filter(num => num % divisor === 0)
  return divisibles
  
}
​
console.log(divisibleBy([1,2,3,4,5,6], 2))