function differenceInAges(ages){
 
 let max = Math.max(...ages)
 let mins = Math.min(...ages)
 let differences = max - mins
 return [mins, max, differences]
}
​
differenceInAges([82, 15, 6, 38, 35])