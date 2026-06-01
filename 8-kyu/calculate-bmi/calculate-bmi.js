function bmi(weight, height) {
  let calBmi = weight/(height * height);
  if (calBmi <= 18.5) {
    return "Underweight"
  } else if (calBmi <= 25.0) {
    return "Normal"
  } else if (calBmi <= 30.0) {
    return "Overweight"
  } else {
    return "Obese"
  }
  
}