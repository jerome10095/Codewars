function flipNumber(s) {
  let arr = s.split('');
  let result = [];
  
  while (arr.length > 0) {
    result.push(arr.pop());
    if (arr.length > 0) {
      result.push(arr.shift());
    }
  }
  
  return result.join('');
}
​