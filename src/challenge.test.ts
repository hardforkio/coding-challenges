import test from "tape"
import { add } from "./challenge"

test("Should add two numbers", assert => {
  assert.plan(1)
  assert.equal(add(1, 2), 3)
})
