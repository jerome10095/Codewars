function dutyFree(normPrice, discount, hol){
let dis = discount/100;
let saving = normPrice * dis
return Math.floor(hol/ saving)
}
​
console.log(dutyFree(12, 50, 1000))