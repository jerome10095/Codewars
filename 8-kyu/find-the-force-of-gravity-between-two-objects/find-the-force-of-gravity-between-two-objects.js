function solution(arr_val, arr_unit) {
​
  if (!arr_val || !arr_unit) return 0;
​
  let converted = [];
​
  for (let i = 0; i < arr_val.length; i++) {
    let val = arr_val[i];
​
    if (i < 2) {
      if (arr_unit[i] === "kg") val = val;
      else if (arr_unit[i] === "g") val /= 1000;
      else if (arr_unit[i] === "mg") val /= 1e6;
      else if (arr_unit[i] === "μg") val /= 1e9;
      else if (arr_unit[i] === "lb") val *= 0.453592;
    }
​
    if (i === 2) {
      if (arr_unit[i] === "m") val = val;
      else if (arr_unit[i] === "cm") val /= 100;
      else if (arr_unit[i] === "mm") val /= 1000;
      else if (arr_unit[i] === "μm") val /= 1e6;
      else if (arr_unit[i] === "ft") val *= 0.3048;
    }
​
    converted.push(val);
  }
​
  let G = 6.67e-11;
​
  let m1 = converted[0];
  let m2 = converted[1];
  let r = converted[2];
​
  return (G * m1 * m2) / (r ** 2);
}
​
console.log(solution([1000, 1000, 100], ["g", "kg", "m"]));