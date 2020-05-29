import test from 'tape'
import { sumOfPositive, reducer, returnFirstElementOfList } from './challenge'

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

test('test reducer', assert => {
  assert.equal(reducer(1, 1), 2, 'add positive')
  assert.equal(reducer(1, -1), 1, 'do not add negative')
  assert.equals(returnFirstElementOfList([1, 2]), 1, 'return first element')
  assert.end()
})
