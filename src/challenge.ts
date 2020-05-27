import R from 'ramda'
import { flattenBFS, RecursiveNumberList } from './iterators'

export const compareElementwise = R.zipWith<number, number, boolean>(R.equals)

export const allTrue = R.all(R.equals(true))

export const deepEqual: (
  listOne: RecursiveNumberList,
  listTwo: RecursiveNumberList,
) => boolean = R.pipe(
  (...lists) => lists,
  R.map(flattenBFS),
  ([x, y]) => compareElementwise(x, y),
  allTrue,
)
