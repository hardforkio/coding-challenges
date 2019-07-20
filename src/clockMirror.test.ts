import R from "ramda"
import test from "tape"
import { WhatIsTheTime } from "./clockMirror"
import {
  bestTimeNotationToOriginalTimeNotation,
  inputTimeToModuloTime,
  makeTimestamp,
  moduloTimeToInputTime,
  originalTimeNotationToBestTimeNotation,
  parseTimestamp,
} from "./clockMirrorHelpers"

test("Timestamp Parsing", (assert) => {
  assert.plan(3)
  assert.equal(parseTimestamp("12:35"), 12 * 60 + 35)
  assert.equal(parseTimestamp("06:35"), 6 * 60 + 35)
  assert.equal(parseTimestamp("01:00"), 1 * 60)
})

test("Timestamp Writing", (assert) => {
  assert.plan(3)
  assert.equal(makeTimestamp(12 * 60 + 35), "12:35")
  assert.equal(makeTimestamp(6 * 60 + 35), "06:35")
  assert.equal(makeTimestamp(1 * 60), "01:00")
})

test("Input Time -> 12 Hour Modulo Time", (assert) => {
  assert.plan(2)
  assert.equal(inputTimeToModuloTime(1 * 60 + 0), 0)
  assert.equal(inputTimeToModuloTime(12 * 60 + 30), 11 * 60 + 30)
})

test("12 Hour Modulo Time -> Input Time", (assert) => {
  assert.plan(3)
  assert.equal(moduloTimeToInputTime(0), 1 * 60)
  assert.equal(moduloTimeToInputTime(11 * 60 + 30), 12 * 60 + 30)
  assert.equal(moduloTimeToInputTime(12 * 60), moduloTimeToInputTime(0))
})

test("Format Conversion, Simplifying", (assert) => {
  assert.plan(3)
  assert.equal(originalTimeNotationToBestTimeNotation("12:02"), 2)
  assert.equal(originalTimeNotationToBestTimeNotation("12:00"), 0)
  assert.equal(
    originalTimeNotationToBestTimeNotation("11:58"),
    R.mathMod(-2, 60 * 12),
  )
})

test("Format Conversion, Desimplifying", (assert) => {
  assert.plan(5)
  assert.equal(bestTimeNotationToOriginalTimeNotation(2), "12:02")
  assert.equal(bestTimeNotationToOriginalTimeNotation(0), "12:00")
  assert.equal(
    bestTimeNotationToOriginalTimeNotation(R.mathMod(-2, 60 * 12)),
    "11:58",
  )
  assert.equal(bestTimeNotationToOriginalTimeNotation(60), "01:00")
  assert.equal(bestTimeNotationToOriginalTimeNotation(2 * 60), "02:00")
})

test("Full Test", (assert) => {
  assert.plan(1)
  assert.equal(WhatIsTheTime("06:35"), "05:25")
})

test("Full Test", (assert) => {
  assert.plan(1)
  assert.equal(WhatIsTheTime("11:59"), "12:01")
})
test("Full Test", (assert) => {
  assert.plan(1)
  assert.equal(WhatIsTheTime("12:02"), "11:58")
})
test("Full Test", (assert) => {
  assert.plan(1)
  assert.equal(WhatIsTheTime("06:00"), "06:00")
})
