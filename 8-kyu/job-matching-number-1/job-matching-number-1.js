function match(candidate, job) {
​
  if (!candidate || !job || candidate.minSalary == null || job.maxSalary == null) {
    throw new Error("Invalid input");
  }
​
  let adjustedSalary = candidate.minSalary * 0.9;
​
  if (adjustedSalary <= job.maxSalary) {
    return true;
  } else {
    return false;
  }
}
​
console.log(match(
  { minSalary: 150000 },
  { maxSalary: 180000 }
));