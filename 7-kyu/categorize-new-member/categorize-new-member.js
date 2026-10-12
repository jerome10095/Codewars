function openOrSenior(data){
  const result = []
  for (const [a, b] of data) {
     if(a >= 55 && b > 7) {
        result.push("Senior");
    } else {
        result.push("Open")
    }
  }
  return result
}
​
​
console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]))