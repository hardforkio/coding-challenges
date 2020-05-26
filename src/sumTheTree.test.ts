import * as S from './sumTheTree'

const simpleNode: S.Node = {
  left: { left: null, right: null, value: 1 },
  right: { left: null, right: null, value: 2 },
  value: 10,
}
const unbalancedNode: S.Node = {
  left: { left: null, right: null, value: 0 },
  right: { left: null, right: { left: null, right: null, value: 1 }, value: 0 },
  value: 11,
}

test('Sums up all children', () => {
  expect(S.sumTheTreeValues(simpleNode)).toEqual(13)
})

test('Handles unbalanced trees', () => {
  expect(S.sumTheTreeValues(unbalancedNode)).toEqual(12)
})
