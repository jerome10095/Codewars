function roundIt(n){
​
  let split = n.toString().split(".")
  let [num, point] = split;
  
  let a =  num.split('');
  let b = point.split("");
  if (a.length < b.length) {
    return Math.ceil(n)
  } else if (a.length > b.length) {
    return Math.floor(n)
  } else {
    return Math.round(n)
  }
  return split
}