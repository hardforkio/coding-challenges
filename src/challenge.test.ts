// Your tests go here.
import test from "tape"
import { fn } from "./challenge"

test("fn is undefined.", (assert) => {
  assert.plan(1)
  assert.equal(fn, undefined)
})
