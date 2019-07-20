import R from "ramda"
const HOUR = 60

export const parseTimestamp = (stringTime: string): number => {
  if (!R.test(/^\d\d:\d\d$/, stringTime)) {
    throw new Error("Input not in domain of timestampToMinutes: " + stringTime)
  }
  // FIXME: When input is invalid, should we throw an exception or return undefined?

  const h = parseInt(stringTime.substring(0, 3), 10)
  const m = parseInt(stringTime.substring(3, 5), 10)

  return HOUR * h + m
}

export const makeTimestamp = (minutes: number): string => {
  const padTo2Digits = (n: number) => R.toString(n).padStart(2, "0") // is this a pure function?

  const h = Math.floor(minutes / HOUR)
  const m = minutes % HOUR
  return `${padTo2Digits(h)}:${padTo2Digits(m)}`
}

export const inputTimeToModuloTime = (inputTime: number) =>
  R.mathMod(inputTime - 1 * HOUR, 12 * HOUR)

export const moduloTimeToInputTime = (moduloTime: number) =>
  R.mathMod(moduloTime, 12 * HOUR) + 1 * HOUR

export const transformToBestCoordinateSystem = (time: number) =>
  R.mathMod(time - 11 * HOUR, 12 * HOUR)

export const transformToOriginalCoordinateSystem = (time: number) =>
  R.mathMod(time + 11 * HOUR, 12 * HOUR)

export const originalTimeNotationToBestTimeNotation = R.pipe(
  parseTimestamp,
  inputTimeToModuloTime,
  transformToBestCoordinateSystem,
)

export const bestTimeNotationToOriginalTimeNotation = R.pipe(
  transformToOriginalCoordinateSystem,
  moduloTimeToInputTime,
  makeTimestamp,
)
