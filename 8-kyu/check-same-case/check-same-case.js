function sameCase(a, b) {
  // Step 1: check if both are letters
  if (!/^[a-z]$/i.test(a) || !/^[a-z]$/i.test(b)) {
    return -1;
  }
​
  let firstCase = (/[A-Z]/.test(a)) ? 'Uppercase' : 'Lowercase';
  let secondCase = (/[A-Z]/.test(b)) ? 'Uppercase' : 'Lowercase';
  
  // Step 2: compare
  if (firstCase === secondCase) {
    return 1;
  } else {
    return 0;
  }
}
​
console.log(sameCase(" ", "Z")); // -1