function ensureQuestion(s) {
  if (!s.endsWith('?')) {
    return s + '?';
  }
  return s;
}
​