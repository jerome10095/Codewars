var humanYearsCatYearsDogYears = function(humanYears) {
  let catYear = 0;
  let dogYear = 0;
if (humanYears === 1) {
  catYear = 15;
  dogYear = 15;
} else if ( humanYears === 2) {
  catYear = 15 + 9;
  dogYear = 15 + 9;
} else {
  catYear = 24 + (humanYears - 2) * 4
  dogYear = 24 + (humanYears - 2) * 5
}
  return [humanYears, catYear, dogYear]
}
​