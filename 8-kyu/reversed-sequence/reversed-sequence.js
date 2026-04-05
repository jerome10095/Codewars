const reverseSeq = n => {
  let myArr = [];
  for (let i = n; i > 0; i--) {
    console.log(i);
    myArr.push(i)
    
  }
  return myArr
};
​
console.log(reverseSeq(6))