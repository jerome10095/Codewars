function evenAndOdd(num) {
  let digits = String(num).split(""); 
  let NE = ""; 
  let NO = ""; 
​
  for (let i = 0; i < digits.length; i++) {
  
    let currentDigit = Number(digits[i]);
​
    if (currentDigit % 2 === 0) {
      NE += currentDigit; 
    } else {
      NO += currentDigit; 
    }
  }
​
  
  return [Number(NE), Number(NO)]; 
}
​
console.log(evenAndOdd(126453));
​