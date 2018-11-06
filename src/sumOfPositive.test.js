const test = require('tape')
const { sumOfPositive } = require('./sumOfPositive')

test('Sums ', function(assert) {
  assert.plan(1)
  assert.equal(sumOfPositive([1, 2, 3, 4, 5]), 15)
})
test('Sums ', function(assert) {
  assert.plan(1)
  assert.equal(sumOfPositive([1, -2, 3, 4, 5]), 13)
})
test('Sums ', function(assert) {
  assert.plan(1)
  assert.equal(sumOfPositive([]), 0)
})
test('Sums ', function(assert) {
  assert.plan(1)
  assert.equal(sumOfPositive([-1, -2, -3, -4, -5]), 0)
})
