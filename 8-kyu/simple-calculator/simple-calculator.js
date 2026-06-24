function calculator(a, b, sign) {
  let signs = ['+', '-', '*', '/'];
  
  if (typeof a !== 'number' || typeof b !== 'number' || !signs.includes(sign)) {
    return "unknown value";
  } else {
    if (sign === '+') return a + b;
    if (sign === '-') return a - b;
    if (sign === '*') return a * b;
    if (sign === '/') return a / b;
  }
}
​