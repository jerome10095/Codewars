function getMiddle(s) {
 const newStrng = s.split("")
 const dev = newStrng.length/2
 if(newStrng.length % 2 === 0) {
 return newStrng[dev -1] + newStrng[dev]
 }  else {
     return newStrng[Math.floor(dev)]
 }
}
​