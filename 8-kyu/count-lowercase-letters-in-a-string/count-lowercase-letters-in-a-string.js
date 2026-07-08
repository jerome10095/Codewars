function lowercaseCount(str) {
  let total = 0;
  let newArr = str.split("");
​
  for (let elem of newArr) {
    (elem === elem.toLowerCase() && elem !== elem.toUpperCase())
      ? total++ : total;
  }
​
  return total;
}