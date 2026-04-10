function explode(x) {
  let [a, b] = x;
​
  let isNum1 = typeof a === "number";
  let isNum2 = typeof b === "number";
​
  if (isNum1 && isNum2) {
    return Array(a + b).fill(x);
  }
​
  if (isNum1) {
    return Array(a).fill(x);
  }
​
  if (isNum2) {
    return Array(b).fill(x);
  }
​
  return "Void!";
}
​
console.log(explode(['a', 3]));