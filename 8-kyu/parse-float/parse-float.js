function parseF(s) {
  const result = Number.parseFloat(s);
  
  if (Number.parseFloat(s) !== result) {
    return null;
  }
  
  return result;
}