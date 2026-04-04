function closeCompare(a, b, margin = 0) {
  let distance = Math.abs(a - b);
​
  if (distance <= margin) {
    return 0;
  }
​
  if (a < b) {
    return -1;
  } else {
    return 1;
  }
}
​
console.log(closeCompare(5, 10));     
console.log(closeCompare(5, 10, 5)); 
console.log(closeCompare(10, 5, 2));  