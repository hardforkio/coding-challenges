import { deepEqual, allTrue, compareElementwise } from './challenge'

const array1 = [1, 2, 3, 4, 5]
const array2 = [1, 2, 3, 4, 5]
const array3 = [5, 4, 3, 2, 1]
const array1xarray2 = [true, true, true, true, true]
const array1xarray3 = [false, false, true, false, false]

test('two arrays with the same content', () => {
  expect(deepEqual(array1, array2)).toEqual(true)
})

test('two arrays with different content', () => {
  expect(deepEqual(array1, array3)).toEqual(false)
})

test('two arrays with the same content', () => {
  expect(compareElementwise(array1, array2)).toEqual(array1xarray2)
})

test('two arrays with different content', () => {
  expect(compareElementwise(array1, array3)).toEqual(array1xarray3)
})

test('all true array', () => {
  expect(allTrue(array1xarray2)).toEqual(true)
})

test('not all true array', () => {
  expect(allTrue(array1xarray3)).toEqual(false)
})
