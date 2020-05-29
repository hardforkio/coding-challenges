// https://www.codewars.com/kata/mumbling/javascript

import R from 'ramda'
import identical from 'ramda/es/identical'

type mumbledStringList = {
  original: string[]
  sylables: string[]
}

type LetterAndLength = (string | number)[]

export const upperOfLetter = R.pipe<any, any, any, any>(
  R.take(1),
  R.apply(R.identity),
  R.toUpper
)

export const repeatLetterNTimesLower = R.pipe<any, any, any>(
  R.apply(R.repeat),
  R.join('')
)

export const repeatLetter1TimesAndNMinusOneTimesLowerCase: (
  [letter, n]: any
) => string = R.pipe<any, any, any>(
  R.juxt([upperOfLetter, repeatLetterNTimesLower]),
  R.join('')
)

export const extractFirstLetterOfOriginalAndSylableListLength: (
  m: mumbledStringList
) => LetterAndLength = R.juxt<mumbledStringList, string | number>([
  R.pipe<mumbledStringList, string[], string[], string, string>(
    R.prop('original'),
    R.take(1),
    R.apply<string, string>(R.identity),
    R.toLower
  ),
  R.pipe<mumbledStringList, string[], number>(
    R.prop('sylables'),
    R.prop('length')
  )
])

export const makeSylable: (m: mumbledStringList) => string = R.pipe<
  mumbledStringList,
  LetterAndLength,
  string
>(
  extractFirstLetterOfOriginalAndSylableListLength,
  repeatLetter1TimesAndNMinusOneTimesLowerCase
)

export const addSylable = R.converge(R.concat, [
  R.prop('sylables'),
  R.pipe<mumbledStringList, string, string[]>(
    makeSylable,
    R.unapply(R.identity)
  )
])

const dropOneFromOriginalList = R.pipe<mumbledStringList, string[], string[]>(
  R.prop('original'),
  R.drop(1)
)

export const takeLetterFromOriginalStringAndAddMumbledSylable: (
  x0: mumbledStringList
) => mumbledStringList = R.applySpec({
  original: dropOneFromOriginalList,
  sylables: addSylable
})

export const allLettersMumbled = R.pipe<
  mumbledStringList,
  string[],
  number,
  boolean
>(
  R.prop('original'),
  R.prop('length'),
  R.equals(0)
)

const joinSylables = R.pipe<mumbledStringList, string[], string>(
  R.prop('sylables'),
  R.join('-')
)
export const makeSylables: (
  x0: mumbledStringList
) => mumbledStringList = R.until<mumbledStringList, mumbledStringList>(
  allLettersMumbled,
  takeLetterFromOriginalStringAndAddMumbledSylable
)

export const makeMumbledStringInProgress = (
  original: string
): mumbledStringList => ({
  original: R.split('', original),
  sylables: []
})
export const mumble = R.pipe<
  string,
  mumbledStringList,
  mumbledStringList,
  string
>(
  makeMumbledStringInProgress,
  makeSylables,
  joinSylables
)
