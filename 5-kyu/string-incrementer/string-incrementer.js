function incrementString(strng) {
  let letters = "";
  let numbers = "";
​
  for (let i = 0; i < strng.length; i++) {
    if (strng[i] >= "0" && strng[i] <= "9") {
      numbers += strng[i];
    } else {
​
      if (numbers !== "") {
        letters += numbers;
        numbers = "";
      }
​
      letters += strng[i];
    }
  }
​
  if (numbers === "") {
    return strng + "1";
  }
​
  let originalLength = numbers.length;
​
  numbers = String(Number(numbers) + 1);
​
  while (numbers.length < originalLength) {
    numbers = "0" + numbers;
  }
​
  return letters + numbers;
}
​
​