import {
  isPalindrom,
  allElementsEqual,
  allTrue,
  compareElementwise,
  createArrayOfListAndItsReverse,
  listEqualsItsReverse
} from './challenge'

const array1 = ['a', 'b', 'c']
const array2 = ['a', 'b', 'c']
const array3 = ['a', 'b', 'a']
const array1xarray2 = [true, true, true]
const array1xarray3 = [true, true, false]
describe('allElementsEqual', () => {
  test('should return true for two arrays with the same content', () => {
    expect(allElementsEqual(array1, array2)).toEqual(true)
  })
  test('should return false for two arrays with different content', () => {
    expect(allElementsEqual(array1, array3)).toEqual(false)
  })
})
describe('compareElementwise', () => {
  test('should return all true array two arrays with the same content', () => {
    expect(compareElementwise(array1, array2)).toEqual(array1xarray2)
  })
  test('should return array with true, except for false where input arrays differ', () => {
    expect(compareElementwise(array1, array3)).toEqual(array1xarray3)
  })
})

describe('allTrue', () => {
  test('should return true for all true array', () => {
    expect(allTrue(array1xarray2)).toEqual(true)
  })
  test('should return false for not all true array', () => {
    expect(allTrue(array1xarray3)).toEqual(false)
  })
})

describe('isPlaindrom', () => {
  test('should return true since racecar is a palindrome', () => {
    expect(isPalindrom('racecar')).toEqual(true)
  })
  test('should return true for Anna. Does it handle case as expected?', () => {
    expect(isPalindrom('Anna')).toEqual(true)
  })
  test('should return false since table is not a palindrome', () => {
    expect(isPalindrom('table')).toEqual(false)
  })
})

describe('listEqualsItsReverse', () => {
  describe('createArrayOfListAndItsReverse', () => {
    test('should return an array that contains the original list and its reverse', () => {
      expect(createArrayOfListAndItsReverse(['a', 'b'])).toEqual([
        ['a', 'b'],
        ['b', 'a']
      ])
    })
  })
  describe('listEqualsItsReverse', () => {
    test('should return true for list with all elements equal', () => {
      expect(listEqualsItsReverse(['a', 'a'])).toEqual(true)
    })
    test('should return false for list with two unequal elements', () => {
      expect(listEqualsItsReverse(['a', 'b'])).toEqual(false)
    })
    test('should return true for list containig an anagram', () => {
      expect(listEqualsItsReverse(['a', 'b', 'a'])).toEqual(true)
    })
  })
})
