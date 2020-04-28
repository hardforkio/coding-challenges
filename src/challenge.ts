import { zipWith, equals, all, pipe } from 'ramda'

export const compareElementwise = zipWith<number, number, boolean>(equals)

export const allTrue = all(equals(true))

export const deepEqual = pipe(
  compareElementwise,
  allTrue,
)
