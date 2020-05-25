// https://www.codewars.com/kata/sum-of-positive/javascript

import R from 'ramda'

export const reducer = (acc: number, curr: number) =>
  curr >= 0 ? acc + curr : acc

export const sumOfPositive = R.reduce<number, number>(reducer, 0)
