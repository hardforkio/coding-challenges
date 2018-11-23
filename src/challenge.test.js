import test from 'tape'

import { sum } from './challenge'

test('Challenge cases', function(t) {
  t.test('1', function(assert) {
    assert.plan(1)
    assert.equal(sum(2, 3), 5)
  })
  t.test('2', function(assert) {
    assert.plan(1)
    assert.equal(sum(0, -3), -3)
  })
})
