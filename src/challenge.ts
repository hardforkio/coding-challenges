// eslint-disable-next-line prettier/prettier
import R from 'ramda'
import { IteratorBreadthFirst, IteratorDepthFirst, zip } from './iterators'

export const makeIterableAndZip = R.curry((fn: any, x: any, y: any) => {
  return zip(fn(x), fn(y))
})

export const makeIterableAndZipBreadthFirst = makeIterableAndZip(
  IteratorBreadthFirst.of
)

export const makeIterableAndZipDepthFirst = makeIterableAndZip(
  IteratorDepthFirst.of
)

export const walkPairsAsLongAsTheyEqualAndCount = R.reduceWhile(
  (acc, x: [any, any]) => (acc === 0 ? true : x[0] === x[1]),
  (acc: number, x: [any, any]) => (x[0] === x[1] ? R.add(1, acc) : acc),
  0
)

export const allPairsEqual = (xs: [any, any][]): boolean =>
  walkPairsAsLongAsTheyEqualAndCount(xs) === xs.length

export const deepEqualBreadthFirst = R.pipe<any, any, [any, any][], boolean>(
  makeIterableAndZipBreadthFirst,
  allPairsEqual
)

export const deepEqualDepthFirst = R.pipe<any, any, [any, any][], boolean>(
  makeIterableAndZipDepthFirst,
  allPairsEqual
)
