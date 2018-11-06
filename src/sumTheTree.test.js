const test = require('tape')
const { sumTheTreeValues } = require('./sumTheTree')
const simpleNode = {
  value: 10,
  left: { value: 1, left: null, right: null },
  right: { value: 2, left: null, right: null },
}
const unbalancedNode = {
  value: 11,
  left: { value: 0, left: null, right: null },
  right: { value: 0, left: null, right: { value: 1, left: null, right: null } },
}

test('Simple Test', function(t) {
  t.test('Sums up all children', function(assert) {
    assert.plan(1)
    assert.equal(sumTheTreeValues(simpleNode), 13)
  })

  t.test('Handles unbalanced trees', function(assert) {
    assert.plan(1)
    assert.equal(sumTheTreeValues(unbalancedNode), 12)
  })
})
