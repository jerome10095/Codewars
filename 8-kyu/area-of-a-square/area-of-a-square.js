function squareArea(A) {
  const radius = (2 * A) / Math.PI;
  const area = radius * radius;
  return Number(area.toFixed(2));
}
​
console.log(squareArea(2)); 