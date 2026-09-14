function toNumberArray(stringarray) {
  let newArr = [];
  for (let i = 0; i < stringarray.length; i++) {
    newArr.push(Number(stringarray[i]));
  }
  return newArr;
}
​
console.log(toNumberArray([1.1, 2.2, 3.3]));
​