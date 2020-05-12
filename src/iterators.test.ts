import { flattenDFS, flattenBFS, RecursiveNumberList } from './iterators'

describe('Flattening of arrays', () => {
  test('Flatten DFS', () => {
    expect(flattenDFS([1, 2])).toEqual([1, 2])
    expect(flattenDFS([1, [2, 3]] as RecursiveNumberList)).toEqual([1, 2, 3])
    expect(flattenDFS([1, [2, [3, 4], [5]], 6])).toEqual([1, 2, 3, 4, 5, 6])
  })
  test('Flatten BFS', () => {
    expect(flattenBFS([1, 2])).toEqual([1, 2])
    expect(flattenBFS([1, [2], 3] as RecursiveNumberList)).toEqual([1, 3, 2])
    expect(flattenBFS([1, [2, [3, 4], [5]], 6])).toEqual([1, 6, 2, 3, 4, 5])
  })
})
