function bonusTime(salary, bonus) {
 let result = ""
 if (bonus === true) {
   result = `£${salary * 10}`
   return result.toString()
 } else {
   result = `£${salary}`
   return result.toString()
 }
}
​
console.log(bonusTime(10000, true))