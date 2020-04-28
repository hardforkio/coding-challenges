import { zipWith, equals, all, pipe } from 'ramda'

export const compareElementwise: (
  array1: number[],
  array2: number[],
) => boolean[] = zipWith<number, number, boolean>(equals)

export const allTrue = all(equals(true))

export const deepEqual: (array1: number[], array2: number[]) => boolean = (
  array1,
  array2,
) = pipe<
  number[],
  number[],
  boolean[],
  boolean
>(
  compareElementwise,
  allTrue,
)
