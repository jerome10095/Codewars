function combat(health, damage) {
  
  
  return Math.max(0, health - damage)
}
​
console.log(combat(100, 2))