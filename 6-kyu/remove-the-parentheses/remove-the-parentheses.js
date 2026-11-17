function removeParentheses(s) {
  let result = "";
  let depth = 0;
​
  for (let char of s) {
    if (char === "(") {
      depth++; // Entered a parenthesis layer
    } else if (char === ")") {
      depth--; // Exited a parenthesis layer
    } else if (depth === 0) {
      result += char; // Only keep characters when outside all parentheses
    }
  }
​
  return result;
}
​