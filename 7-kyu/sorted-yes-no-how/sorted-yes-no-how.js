function isSortedAndHow(array) {
​
  const asc = [...array].sort((a, b) => a - b);
  const desc = [...array].sort((a, b) => b - a);
​
  const matches = (arr1, arr2) => arr1.every((val, i) => val === arr2[i]);
​
  if (matches(array, asc)) {
    return "yes, ascending";
  } else if (matches(array, desc)) {
    return "yes, descending";
  } else {
    return "no";
  }
}
​