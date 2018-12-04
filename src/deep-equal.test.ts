import test from "tape"
import { deepEqual, haveSameLength } from "./deep-equal"

const array1 = [1, 2, 3, 4, 5]
const array2 = [1, 2, 3, 4, 5]
const array3 = [5, 4, 3, 2, 1]

test("two arrays with the same content", (assert) => {
  assert.plan(1)
  assert.equal(deepEqual(array1, array2), true)
})

test("two arrays with different content", (assert) => {
  assert.plan(1)
  assert.equal(deepEqual(array1, array3), false)
})

test("two arrays with different content", (assert) => {
  assert.plan(1)
  assert.equal(deepEqual(array1, [...array2, 5]), false)
})

test("array length", (assert) => {
  assert.plan(2)
  assert.equal(
    haveSameLength(array1, array2),
    true,
    "return true if arrays have same length",
  )
  assert.equal(
    haveSameLength(array1, [...array2, 5]),
    false,
    "return false if arrays have different length",
  )
})
