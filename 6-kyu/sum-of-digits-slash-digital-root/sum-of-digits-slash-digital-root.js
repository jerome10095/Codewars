function digitalRoot(n) {
let num = String(n).split("")
if (num.length > 1) {
 let total = num.reduce((a, b) => Number(a) + Number(b), 0)
 return digitalRoot(total)
}
 return Number(n)
}
console.log(digitalRoot(8740475037309))