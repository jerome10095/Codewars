function abbrevName(name){
 let firstName = name.split(" ")
 let firstInitial = firstName[0].slice(0, 1)
 let secondInitial = firstName[1].slice(0, 1)
 return firstInitial.toUpperCase() + "." + secondInitial.toUpperCase()
​
}
console.log(abbrevName("Jerome Cyiza"))