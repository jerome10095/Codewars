function findNeedle(haystack) {
 let index = 0;
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === "needle") {
      index = haystack.indexOf("needle")
    }
  }
  return `found the needle at position ${index}`
}