function friend(friends){
  let RealFreinds = [];
  let splitted = friends.map((element) => element.length)
  
for (let i = 0; i < splitted.length; i++) {
  if(splitted[i] === 4) {
    RealFreinds.push(friends[i])
  }
  
}
  return RealFreinds
}
​
console.log(friend(["Ryan", "Kieran", "Mark"]))