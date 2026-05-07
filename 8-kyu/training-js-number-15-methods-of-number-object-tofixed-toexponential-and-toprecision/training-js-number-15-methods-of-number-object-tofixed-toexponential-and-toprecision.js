function howManySmaller(arr, n) {
  let count = 0;
​
  for (let i = 0; i < arr.length; i++) {
    let rounded = Number(arr[i].toFixed(2));
​
​
    if (rounded < n) {
     count++
    }
  }
​
return count
}
​
console.log(howManySmaller([1.1888, 1.1868, 1.1838], 1.19));