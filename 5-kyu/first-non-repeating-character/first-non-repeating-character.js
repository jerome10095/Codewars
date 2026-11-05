function firstNonRepeatingLetter(s) {
  // 1. Create a lowercase version for case-insensitive duplicate checks
  const lowerStr = s.toLowerCase();
  
  for (let i = 0; i < s.length; i++) {
    const char = lowerStr[i];
    
    // 2. Check if the first occurrence is the same as the last occurrence
    if (lowerStr.indexOf(char) === lowerStr.lastIndexOf(char)) {
      // 3. Return the original character to preserve its original case
      return s[i]; 
    }
  }
  
  // 4. Fallback for empty strings or strings with only repeating letters
  return ''; 
}
​