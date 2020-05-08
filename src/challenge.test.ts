import {
  deepEqualBreadthFirst,
  deepEqualDepthFirst,
  makeIterableAndZipBreadthFirst,
  makeIterableAndZipDepthFirst
} from './challenge'

const array1 = [[1, 2], 3]
const array2 = [[5, 4], 3]
const array3 = [1, [2, 3]]

test('two arrays with the same content', () => {
  expect(deepEqualBreadthFirst(array1, array1)).toEqual(true)
})

test('two arrays with different content', () => {
  expect(deepEqualBreadthFirst(array1, array2)).toEqual(false)
})

test('two arrays with different structure', () => {
  expect(deepEqualBreadthFirst(array1, array3)).toEqual(false)
})

test('two arrays with the same content', () => {
  expect(deepEqualDepthFirst(array1, array1)).toEqual(true)
})

test('two arrays with different content', () => {
  expect(deepEqualDepthFirst(array1, array2)).toEqual(false)
})

test('two arrays with different structure', () => {
  expect(deepEqualDepthFirst(array1, array3)).toEqual(true)
})

test('make iterable and zip', () => {
  expect(makeIterableAndZipBreadthFirst(array1, array2)).toEqual([
    [3, 3],
    [1, 5],
    [2, 4]
  ])
})

test('make iterable and zip', () => {
  expect(makeIterableAndZipDepthFirst(array1, array2)).toEqual([
    [1, 5],
    [2, 4],
    [3, 3]
  ])
})
