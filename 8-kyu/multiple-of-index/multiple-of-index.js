function multipleOfIndex(array) {
  return array.filter((num, index) => {
  
    if (index === 0) {
      return num === 0;
    }
​
    return num % index === 0;
  });
}
​