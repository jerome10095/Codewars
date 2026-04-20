function isPalindrome(x) {
  let result = x.split('').reverse().join('')
  return x.toUpperCase() === result.toUpperCase() 
​
}