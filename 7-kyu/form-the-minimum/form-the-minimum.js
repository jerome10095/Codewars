function minValue(values){
  //your code here
  const sett = new Set(values)
  const newArr = [...sett].sort((a, b) => a - b)
  return Number(newArr.join(''))
}