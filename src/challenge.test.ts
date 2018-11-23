import { add } from './challenge'
import test from 'tape'

test('Should add two numbers', (assert) => {
  assert.plan(1)
  assert.equal(add(1, 2), 3)
})
