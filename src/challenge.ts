import R from 'ramda'

export const compareElementwise = R.zipWith<string, string, boolean>(R.equals)

export const allTrue = R.all(R.equals(true))

export const allElementsEqual = R.pipe(compareElementwise, allTrue)

export const isPalindrom = R.pipe(R.toLower, R.split(''), letterList =>
  allElementsEqual(letterList, R.reverse(letterList))
)
