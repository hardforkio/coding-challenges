<<<<<<< HEAD:src/sumOfPositive.test.js
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
=======
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
>>>>>>> 2218bca... Simplify codebase.:src/challenge.test.ts
  assert.plan(1)
  assert.equal(sumOfPositive([-1, -2, -3, -4, -5]), 0)
})
