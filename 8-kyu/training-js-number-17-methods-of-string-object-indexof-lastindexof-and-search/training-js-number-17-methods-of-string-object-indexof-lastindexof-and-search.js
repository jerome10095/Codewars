function firstToLast(str,c){
  let first = str.indexOf(c)
  let last = str.lastIndexOf(c)
  let search = str.search(c)
 
  
  if ( first === -1) {
    return -1;
  }
  
  return last - first;
  
}
​
console.log(firstToLast("cyiza", 'c'))