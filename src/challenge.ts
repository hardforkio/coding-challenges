import { zipWith, equals, all, pipe } from 'ramda'

export const compareElementwise: (
  array1: number[],
  array2: number[],
) => boolean[] = (array1, array2) => {
  return zipWith(equals, array1, array2)
}

export const allTrue = all(equals(true))

export const deepEqual: (array1: number[], array2: number[]) => boolean = (
  array1,
  array2,
) => {
  const check = pipe(
    compareElementwise,
    allTrue,
  )
  return check(array1, array2)
}
