// https://www.codewars.com/kata/sum-of-positive/javascript

import R from 'ramda'

export const returnFirstElementOfList = R.pipe(
  R.take(1),
  R.apply(R.identity),
)

export const addBothElementsInList = R.apply(R.add)

export const secondElementPositive = R.pipe<number[], number[], boolean>(
  R.takeLast(1),
  R.apply(R.lt(0)),
)

export const addSecondArgumentToFirstIfPositive = R.unapply(
  R.ifElse(
    secondElementPositive,
    addBothElementsInList,
    returnFirstElementOfList,
  ),
)

export const sumOfPositive = R.reduce<number, number>(
  addSecondArgumentToFirstIfPositive,
  0,
)
