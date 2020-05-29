// https://www.codewars.com/kata/sum-of-positive/javascript

import R from 'ramda'

export const secondElementPositive = R.pipe<number[], number[], boolean>(
  R.takeLast(1),
  R.apply(R.lt(0)),
)

export const returnFirstElementOfList = R.pipe(
  R.take(1),
  R.apply(R.identity),
)

export const reducer = R.unapply(
  R.ifElse(secondElementPositive, R.apply(R.add), returnFirstElementOfList),
)

export const sumOfPositive = R.reduce<number, number>(reducer, 0)
