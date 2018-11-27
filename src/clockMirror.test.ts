import test from "tape"
import { WhatIsTheTime } from "./clockMirror"

test("Basic Test", (assert) => {
  assert.plan(1)
  assert.equal(WhatIsTheTime("06:35"), "05:25")
})

test("Basic Test", (assert) => {
  assert.plan(1)
  assert.equal(WhatIsTheTime("11:59"), "12:01")
})
test("Basic Test", (assert) => {
  assert.plan(1)
  assert.equal(WhatIsTheTime("12:02"), "11:58")
})
test("Basic Test", (assert) => {
  assert.plan(1)
  assert.equal(WhatIsTheTime("06:00"), "06:00")
})
