function substringTest(str1, str2) {
  // 1. Convert both to lowercase to make it case-insensitive
  const s1 = str1.toLowerCase();
  const s2 = str2.toLowerCase();
​
  // 2. Loop through str1 to generate every possible 2-character pair
  for (let i = 0; i < s1.length - 1; i++) {
    const pair = s1.substring(i, i + 2); // e.g., "ln", "nE", "Ea", "aw", "ws", "sG", "GI", "IR"...
    
    // 3. Check if that pair exists anywhere inside s2
    if (s2.includes(pair)) {
      return true; // Found a match!
    }
  }
​
  // 4. If we checked every single pair and found nothing, return false
  return false;
}
​