import * as Context from './sumTheTree'
import { mapTreeToArray } from './sumTheTree'

const simpleNode: Context.Node = {
  left: null,
  right: null,
  value: 3,
}
const simpleNodeWithTwoChildren: Context.Node = {
  left: { left: null, right: null, value: 1 },
  right: { left: null, right: null, value: 2 },
  value: 10,
}

const simpleLeftleaningNode: Context.Node = {
  left: { left: null, right: null, value: 1 },
  right: null,
  value: 10,
}

const simpleRightleaningNode: Context.Node = {
  left: null,
  right: { left: null, right: null, value: 2 },
  value: 10,
}

const unbalancedNode: Context.Node = {
  left: { left: null, right: null, value: 0 },
  right: { left: null, right: { left: null, right: null, value: 1 }, value: 0 },
  value: 11,
}
describe('sumTheTreeValues', () => {
  test('should sum up all children', () => {
    expect(Context.sumTheTreeValues(simpleNodeWithTwoChildren)).toEqual(13)
  })
  test('should handle unbalanced trees', () => {
    expect(Context.sumTheTreeValues(unbalancedNode)).toEqual(12)
  })
})

describe('getChildren', () => {
  test('should return empty list for node without children', () => {
    expect(Context.getChildren({ left: null, right: null, value: 1 })).toEqual(
      [],
    )
  })
  test('should return list of length one for node with one child on the left', () => {
    const leftNode = { left: null, right: null, value: 5 }
    expect(
      Context.getChildren({ left: leftNode, right: null, value: 1 }),
    ).toEqual([leftNode])
  })
  test('should return list of length one for node with one child on the right', () => {
    const rightNode = { left: null, right: null, value: 5 }
    expect(
      Context.getChildren({ left: null, right: rightNode, value: 1 }),
    ).toEqual([rightNode])
  })
  test('should return list of length two for node with two children', () => {
    const rightNode = { left: null, right: null, value: 5 }
    const leftNode = { left: null, right: null, value: 1 }
    expect(
      Context.getChildren({ left: leftNode, right: rightNode, value: 1 }),
    ).toEqual([leftNode, rightNode])
  })
})

describe('mapTreeToArray', () => {
  test('should return list of length one for single node without children', () => {
    expect(Context.mapTreeToArray(simpleNode)).toEqual([simpleNode.value])
  })
  test('should return list of length two for node with one child on left', () => {
    expect(Context.mapTreeToArray(simpleLeftleaningNode)).toEqual([10, 1])
  })
  test('should return list of length two for node with one child on right', () => {
    expect(Context.mapTreeToArray(simpleRightleaningNode)).toEqual([10, 2])
  })
})
