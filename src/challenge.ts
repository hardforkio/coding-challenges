import { zipWith, equals, all, pipe } from 'ramda'

export const compareElementwise = zipWith(equals)

export const allTrue = all(equals(true))

export const deepEqual = pipe(
  compareElementwise,
  allTrue,
)
