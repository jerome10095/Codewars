function getSum(a, b) { 
  if (a === b) return a; // Return either a or b if they are equal
  
  // Find the actual start and end boundaries
  let start = Math.min(a, b);
  let end = Math.max(a, b);
  
  let sum = 0; 
  for (let i = start; i <= end; i++) { 
    sum += i; 
  } 
  
  return sum; 
}
​