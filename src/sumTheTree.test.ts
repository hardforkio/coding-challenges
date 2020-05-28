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

describe('sumTheTreeValues', () => {
  test('should sum all the children of a node', () => {
    expect(S.sumTheTreeValues(simpleNode)).toEqual(13)
  })

  test('should handle unbalanced trees properly', () => {
    expect(S.sumTheTreeValues(unbalancedNode)).toEqual(12)
  })
})
