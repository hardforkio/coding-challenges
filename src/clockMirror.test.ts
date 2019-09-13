import test from "tape"
import { whatIsTheTime } from "./clockMirror"
import { toTotalMinutes } from "./clockMirror"

test("Basic Test", (assert) => {
    assert.plan(1)
    assert.equal(whatIsTheTime("06:35"), "05:25")
})
test("Basic Test", (assert) => {
    assert.plan(1)
    assert.equal(whatIsTheTime("11:59"), "12:01")
})
test("Basic Test", (assert) => {
    assert.plan(1)
    assert.equal(whatIsTheTime("12:02"), "11:58")
})
test("Basic Test", (assert) => {
    assert.plan(1)
    assert.equal(whatIsTheTime("06:00"), "06:00")
})

test("Total Minutes", (assert) => {
    assert.equal(toTotalMinutes("00:00"), 0)
    assert.equal(toTotalMinutes("12:00"), 0)
    assert.equal(toTotalMinutes("1:59"), 119)
    assert.equal(toTotalMinutes("11:01"), 661)
    assert.end()
})
