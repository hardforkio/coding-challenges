import R from 'ramda'

type LetterList = ReadonlyArray<string>

export const compareElementwise = R.zipWith(R.equals)

export const allTrue = R.reduce(R.and, true)

export const allElementsEqual = R.pipe(
  compareElementwise,
  allTrue
)

export const createArrayOfListAndItsReverse = R.juxt([R.identity, R.reverse])

export const listEqualsItsReverse = R.pipe(
  createArrayOfListAndItsReverse,
  R.apply(allElementsEqual)
)

export const isPalindrom = R.pipe(
  R.toLower,
  R.split(''),
  listEqualsItsReverse
)
