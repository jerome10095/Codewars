function getAverage(marks){
  let average = 0;
 let total = 0;
for (let i = 0; i < marks.length; i++) {
   total += marks[i];
   average = total/marks.length;
 }
 return Math.floor(average);
}
console.log(getAverage([2, 1]));