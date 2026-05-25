function enough(cap, on, wait) {
  // your code here
  let remainSpace = cap - on;
  if (remainSpace >= wait) {
    return 0
  } else {
    return wait - remainSpace
  }
  }
​
​