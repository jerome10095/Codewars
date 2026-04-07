function mouthSize(animal) {
 if (animal === "alligator" || animal.toUpperCase() === "ALLIGATOR") {
   return "small"
 } else {
   return "wide"
 }
}
​
console.log(mouthSize("ALLIGATOR"))