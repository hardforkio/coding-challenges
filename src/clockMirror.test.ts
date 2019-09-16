import test from "tape"
import { whatIsTheTime } from "./clockMirror"
import { toClockString, toTotalMinutes } from "./clockMirror"

test("Basic Test", (assert) => {
    assert.plan(4)
    assert.equal(whatIsTheTime("06:35"), "05:25")
    assert.equal(whatIsTheTime("11:59"), "12:01")
    assert.equal(whatIsTheTime("12:02"), "11:58")
    assert.equal(whatIsTheTime("06:00"), "06:00")
})

test("Total Minutes", (assert) => {
    assert.equal(toTotalMinutes("00:00"), 0)
    assert.equal(toTotalMinutes("12:00"), 0)
    assert.equal(toTotalMinutes("11:59"), 12 * 60 - 1)
    assert.equal(toTotalMinutes("01:59"), 119)
    assert.end()
})

test("Clock String", (assert) => {
    assert.equal(toClockString(0), "12:00")
    assert.equal(toClockString(12 * 60), "12:00")
    assert.equal(toClockString(60), "01:00")
    assert.equal(toClockString(61), "01:01")
    assert.equal(toClockString(5), "12:05")
    assert.end()
})
