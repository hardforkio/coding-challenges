import {
  isPalindrom,
  allElementsEqual,
  allTrue,
  compareElementwise
} from './challenge'

const array1 = ['a', 'b', 'c']
const array2 = ['a', 'b', 'c']
const array3 = ['a', 'b', 'a']
const array1xarray2 = [true, true, true]
const array1xarray3 = [true, true, false]

test('two arrays with the same content', () => {
  expect(allElementsEqual(array1, array2)).toEqual(true)
})

test('two arrays with different content', () => {
  expect(allElementsEqual(array1, array3)).toEqual(false)
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
test('Expected to return true since racecar is a palindrome', () => {
  expect(isPalindrom('racecar')).toEqual(true)
})
test('Expected to return true. Does it handle case as expected?', () => {
  expect(isPalindrom('Anna')).toEqual(true)
})
test('Expected to return false since table is not a palindrome', () => {
  expect(isPalindrom('table')).toEqual(false)
})
