import test from 'tape'
import { sumOfPositive } from './challenge'

test('Sums ', assert => {
  assert.plan(1)
  assert.equal(sumOfPositive([1, 2, 3, 4, 5]), 15)
})
test('Sums ', assert => {
  assert.plan(1)
  assert.equal(sumOfPositive([1, -2, 3, 4, 5]), 13)
})
test('Sums ', assert => {
  assert.plan(1)
  assert.equal(sumOfPositive([]), 0)
})
test('Sums ', assert => {
  assert.plan(1)
  assert.equal(sumOfPositive([-1, -2, -3, -4, -5]), 0)
})
