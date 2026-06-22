function calculateAge(birthYear, year) {
  if (birthYear > year) {
    const diff = birthYear - year;
    return `You will be born in ${diff} ${diff === 1 ? 'year' : 'years'}.`;
  } else if (birthYear < year) {
    const diff = year - birthYear;
    return `You are ${diff} ${diff === 1 ? 'year' : 'years'} old.`;
  } else {
    return `You were born this very year!`;
  }
}