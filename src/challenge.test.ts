import { deepEqual, allTrue, compareElementwise } from './challenge'

describe('deepEqual', () => {
  const testArray1 = [1, 2, 3]
  const testArray2 = [1, 2, 2]
  const testArray3 = [1, [2, 3]]
  const testArray4 = [[1, 2], 3]
  test('should return true for two arrays with the same content', () => {
    expect(deepEqual(testArray1, testArray1)).toEqual(true)
  })
  test('should return false for two arrays with different content', () => {
    expect(deepEqual(testArray1, testArray2)).toEqual(false)
  })
  test('should return true for two nested arrays with same structure and same content', () => {
    expect(deepEqual(testArray3, testArray3)).toEqual(true)
  })
  test('should return false for two nested array with different structure but same content', () => {
    expect(deepEqual(testArray3, testArray4)).toEqual(false)
  })
})

describe('allTrue', () => {
  test('should return true for array containing only true as elements', () => {
    const testArray1 = [true, true, true]
    expect(allTrue(testArray1)).toEqual(true)
  })
  test('should return false if array contains one element that equals false', () => {
    const testArray1 = [true, true, false]
    expect(allTrue(testArray1)).toEqual(false)
  })
})

describe('compareElementwise', () => {
  const testArray1 = [1, 2, 3, 4]
  const testArray2 = [1, 1, 3, 3]
  test('should return array containing true where elements of input match', () => {
    expect(compareElementwise(testArray1, testArray1)).toEqual([
      true,
      true,
      true,
      true,
    ])
  })
  test('should return array with all true except for false, where input arrays differ', () => {
    expect(compareElementwise(testArray1, testArray2)).toEqual([
      true,
      false,
      true,
      false,
    ])
  })
})
