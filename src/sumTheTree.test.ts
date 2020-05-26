import { Node, sumTheTreeValues } from './sumTheTree'

const simpleNode: Node = {
  left: { left: null, right: null, value: 1 },
  right: { left: null, right: null, value: 2 },
  value: 10,
}
const unbalancedNode: Node = {
  left: { left: null, right: null, value: 0 },
  right: { left: null, right: { left: null, right: null, value: 1 }, value: 0 },
  value: 11,
}

test('Sums up all children', () => {
  expect(sumTheTreeValues(simpleNode)).toEqual(13)
})

test('Handles unbalanced trees', () => {
  expect(sumTheTreeValues(unbalancedNode)).toEqual(12)
})
