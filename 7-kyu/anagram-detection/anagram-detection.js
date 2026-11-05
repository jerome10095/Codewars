var isAnagram = function(test, original) {
  // Normalize both strings to lowercase, split into arrays, sort, and join back
  const cleanTest = test.toLowerCase().split('').sort().join('');
  const cleanOriginal = original.toLowerCase().split('').sort().join('');
  
  // Directly return if they match
  return cleanTest === cleanOriginal;
};
​