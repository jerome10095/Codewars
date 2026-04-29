function arrayPlusArray(arr1, arr2) {
  let newArr = [...arr1,...arr2]
  let sum = 0;
  for (let i = 0; i < newArr.length; i++) {
    sum += newArr[i]
  }
  return sum
}