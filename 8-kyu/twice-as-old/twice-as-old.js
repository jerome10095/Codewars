function twiceAsOld(dadYearsOld, sonYearsOld) {
  let multipleOfSonAge = sonYearsOld * 2
  let diff = dadYearsOld - multipleOfSonAge
  return Math.abs(diff)
}