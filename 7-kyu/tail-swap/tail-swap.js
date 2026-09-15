function tailSwap(arr) {
  const [a, b] = arr
  let aSplited = a.split(":")
  let bSplited = b.split(":")
  return [`${aSplited[0]}:${bSplited[1]}`, `${bSplited[0]}:${aSplited[1]}`]
}
​
console.log(tailSwap(['abc:123', 'cde:456']))