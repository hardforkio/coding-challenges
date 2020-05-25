// https://www.codewars.com/kata/mumbling/javascript

import R from 'ramda'

export const repeatLetter1TimesAndNMinusOneTimesLowerCase = (
  letter: string,
  n: number
): string =>
  R.join('', R.concat([R.toUpper(letter)], R.repeat(R.toLower(letter), n)))

export const createSubstringFromLetterAndAddToList = (
  subStringList: string[],
  letter: string
): string[] =>
  R.concat(subStringList, [
    repeatLetter1TimesAndNMinusOneTimesLowerCase(letter, subStringList.length)
  ])

export const accum = R.pipe(
  R.split(''),
  R.reduce(createSubstringFromLetterAndAddToList, []),
  R.join('-')
)
