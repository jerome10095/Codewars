function fiveLine(s) {
  let b = s.trim();
  
  return `${b}
${b.repeat(2)}
${b.repeat(3)}
${b.repeat(4)}
${b.repeat(5)}`;
}
​
console.log(fiveLine('  a  '));