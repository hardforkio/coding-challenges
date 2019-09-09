import test from "tape"
import { Node, sumTheTreeValues } from "./sumTheTree"

const simpleNode: Node = {
  left:  { left: null, right: null, value: 1 },
  right: { left: null, right: null, value: 2 },
  value: 10,
}
const unbalancedNode: Node = {
  left: { left: null, right: null, value: 0 },
  right: { left: null, right: { left: null, right: null, value: 1 }, value: 0 },
  value: 11,
}

test("Simple Test", (t) => {
  t.test("Sums up all children", (assert) => {
    assert.plan(1)
    assert.equal(sumTheTreeValues(simpleNode), 13)
  })

  t.test("Handles unbalanced trees", (assert) => {
    assert.plan(1)
    assert.equal(sumTheTreeValues(unbalancedNode), 12)
  })
})
