function drawStairs(n) {
  let result = "";
​
  for (let i = 1; i <= n; i++) {
    result += " ".repeat(i - 1) + "I";
    if (i !== n) result += "\n";
  }
​
  return result;
}
​
console.log(drawStairs(4));
​