import test from "tape"
import { accum } from "./mumbling"

test("Simple Test", (t) => {
  t.test("1", (assert) => {
    assert.plan(1)
    assert.equal(
      accum("ZpglnRxqenU"),
      "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu",
    )
  })
  t.test("2", (assert) => {
    assert.plan(1)
    assert.equal(
      accum("NyffsGeyylB"),
      "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb",
    )
  })
})
