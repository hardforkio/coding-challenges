//https://www.codewars.com/kata/mumbling/javascript

import R from 'ramda'

export const mapWithIndex = R.addIndex<string, string>(R.map)

export const arrayWithLettersToString: (inputArray: any) => string = R.pipe(
  R.flatten,
  R.join('')
)

const repeat: (letter: string, repitions: number) => string[] = R.repeat

export const nTimesToLowerCase: (
  letter: string,
  repitions: number
) => string = R.pipe(
  repeat,
  R.map(R.toLower),
  arrayWithLettersToString
)

export const firstUpperAndRepeatedLowerLetters: (
  letter: string,
  repitions: number
) => string = R.converge(R.concat, [R.toUpper, nTimesToLowerCase])

export const joinArrayToStringWithDash: (input: string[]) => string = R.join(
  '-'
)

export const accum: (input: string) => string = R.pipe(
  R.split(''),
  mapWithIndex(firstUpperAndRepeatedLowerLetters),
  joinArrayToStringWithDash
)
