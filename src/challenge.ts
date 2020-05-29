import R from 'ramda'
import { flattenBFS, RecursiveNumberList } from './iterators'

export const compareElementwise = R.zipWith<number, number, boolean>(R.equals)

export const allTrue = R.all(R.equals(true))

export const deepEqual: (
  listOne: RecursiveNumberList,
  listTwo: RecursiveNumberList,
) => boolean = R.pipe(
  R.unapply(R.map(flattenBFS)),
  R.apply(compareElementwise),
  allTrue,
)
