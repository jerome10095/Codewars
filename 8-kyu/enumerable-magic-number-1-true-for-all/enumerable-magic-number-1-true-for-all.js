function all(arr, fun) {
  return arr.every(fun);
}
​
console.log(all([1, 2, 3], fun => fun > 0)); 
  