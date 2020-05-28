import {
  sumTheTreeValues,
  getChildrenAsArray,
  treeToArray,
  Node,
  addValueOfNodeToResultAndQueueChildren,
  appenValueOfFirstNodeInQueToResultArray,
  getChildrenOfFirstElementAsQueue,
  dropFirstNodeFromQueAndAddItsChildrenToQueue,
  wrapNodeInAccumulator,
} from './sumTheTree'

const simpleNode: Node = {
  left: null,
  right: null,
  value: 3,
}
const simpleNodeWithTwoChildren: Node = {
  left: { left: null, right: null, value: 1 },
  right: { left: null, right: null, value: 2 },
  value: 10,
}

const simpleLeftleaningNode: Node = {
  left: { left: null, right: null, value: 1 },
  right: null,
  value: 10,
}

const simpleRightleaningNode: Node = {
  left: null,
  right: { left: null, right: null, value: 2 },
  value: 10,
}

const unbalancedNode: Node = {
  left: { left: null, right: null, value: 0 },
  right: { left: null, right: { left: null, right: null, value: 1 }, value: 0 },
  value: 11,
}
describe('sumTheTreeValues', () => {
  test('should sum up all children', () => {
    expect(sumTheTreeValues(simpleNodeWithTwoChildren)).toEqual(13)
  })
  test('should handle unbalanced trees', () => {
    expect(sumTheTreeValues(unbalancedNode)).toEqual(12)
  })
})

describe('getChildren', () => {
  test('should return empty list for node without children', () => {
    expect(getChildrenAsArray({ left: null, right: null, value: 1 })).toEqual(
      [],
    )
  })
  test('should return list of length one for node with one child on the left', () => {
    const leftNode = { left: null, right: null, value: 5 }
    expect(
      getChildrenAsArray({ left: leftNode, right: null, value: 1 }),
    ).toEqual([leftNode])
  })
  test('should return list of length one for node with one child on the right', () => {
    const rightNode = { left: null, right: null, value: 5 }
    expect(
      getChildrenAsArray({ left: null, right: rightNode, value: 1 }),
    ).toEqual([rightNode])
  })
  test('should return list of length two for node with two children', () => {
    const rightNode = { left: null, right: null, value: 5 }
    const leftNode = { left: null, right: null, value: 1 }
    expect(
      getChildrenAsArray({ left: leftNode, right: rightNode, value: 1 }),
    ).toEqual([leftNode, rightNode])
  })
})

describe('mapTreeToArray', () => {
  test('should return list of length one for single node without children', () =>
    expect(treeToArray(simpleNode)).toEqual([simpleNode.value]))
  test('should return list of length two for node with one child on left', () => {
    expect(treeToArray(simpleLeftleaningNode)).toEqual([10, 1])
  })
  test('should return list of length two for node with one child on right', () => {
    expect(treeToArray(simpleRightleaningNode)).toEqual([10, 2])
  })
})

describe('flattenTree', () => {
  test('Should correctly add value to result array', () =>
    expect(
      appenValueOfFirstNodeInQueToResultArray({
        result: [],
        queue: [{ value: 5, left: null, right: null }],
      }),
    ).toEqual([5]))
  test('should add node value to result array and not add further nodes to the queue', () =>
    expect(
      addValueOfNodeToResultAndQueueChildren({
        result: [],
        queue: [{ value: 5, left: null, right: null }],
      }),
    ).toEqual({ result: [5], queue: [] }))

  describe('getChildrenOfFirstElementInQueueAsQueue', () => {
    test('should get children of first node in queue and return them as queue', () => {
      const firstNode = {
        value: 0,
        left: { value: 1, left: null, right: null },
        right: { value: 2, left: null, right: null },
      }
      const secondNode = {
        value: 3,
        right: null,
        left: null,
      }
      expect(
        getChildrenOfFirstElementAsQueue({
          result: [],
          queue: [firstNode, secondNode],
        }),
      ).toEqual([firstNode.left, firstNode.right])
    })
  })
  describe('dropFirstElementFromQueueAndAddItsChildrenAtEndOfQueue', () => {
    test('should drop first node from queue and add its children at end of queue', () => {
      const firstNode = {
        value: 0,
        left: { value: 1, left: null, right: null },
        right: { value: 2, left: null, right: null },
      }
      const secondNode = {
        value: 3,
        right: null,
        left: null,
      }
      expect(
        dropFirstNodeFromQueAndAddItsChildrenToQueue({
          result: [],
          queue: [firstNode, secondNode],
        }),
      ).toEqual([secondNode, firstNode.left, firstNode.right])
    })
  })
  describe('wrapNodeInAccumulator', () => {
    test('should return accumulator with empty list as results and given node in queue', () => {
      expect(wrapNodeInAccumulator(simpleNode)).toEqual({
        result: [],
        queue: [simpleNode],
      })
    })
  })
})
