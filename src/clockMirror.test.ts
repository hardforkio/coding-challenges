import test from "tape"
import {
  checkForLength2OrThrow,
  getHour,
  getMinutes,
  hourFromTimeString,
  ifZeroThenTwelve,
  minutesFromTimeString,
  mirrorMinutes,
  padToTwoDigits,
  splitAtColon,
  timeStringToMinutes,
  toMinutes,
  WhatIsTheTime,
} from "./clockMirror"

test("Helper functions", (t) => {
  t.test("input length and return input", (assert) => {
    assert.plan(1)
    assert.deepEqual(checkForLength2OrThrow(["01", "15"]), ["01", "15"])
  })

  t.test("splitAtColon", (assert) => {
    assert.plan(2)
    assert.throws(
      () => splitAtColon("01"),
      /Invalid input!/,
      "Throws on too short a string",
    )
    assert.doesNotThrow(
      () => splitAtColon("01:00"),
      /Invalid input!/,
      "Throws not on correctly formatted string",
    )
  })

  t.test("Hour from time string calculation", (assert) => {
    assert.plan(1)
    assert.equal(hourFromTimeString("0:00"), 0, "Midnight should return 0.")
  })

  t.test("replace zero with twelve", (assert) => {
    assert.plan(1)
    assert.equal(ifZeroThenTwelve(0), 12, "0 should be replaced with 12")
  })

  t.test("minutes from timestring", (assert) => {
    assert.plan(1)
    assert.equal(minutesFromTimeString("01:12"), 12)
  })

  t.test("formatting to double digits", (assert) => {
    assert.plan(2)
    assert.equal(padToTwoDigits("4"), "04", "Adds leading zero to single digit")
    assert.equal(padToTwoDigits("10"), "10", "Keeps double digit format")
  })

  t.test("getHour", (assert) => {
    assert.plan(2)
    assert.equal(
      getHour(360),
      "06",
      "return hour with correct double digit format",
    )
    assert.equal(
      getHour(33),
      "12",
      "return twelve instead of zero for hours from result time",
    )
  })

  t.test("test multiplication", (assert) => {
    assert.plan(1)
    assert.equal(toMinutes(2, 10), 130)
  })

  t.test("getMinutes", (assert) => {
    assert.plan(2)
    assert.equal(
      getMinutes(66),
      "06",
      "return minutes with correct double digit format",
    )
    assert.equal(getMinutes(120), "00", "return zero minutes")
  })

  t.test("result in minutes", (assert) => {
    assert.plan(1)
    assert.equal(timeStringToMinutes("03:15"), 195)
  })

  t.test("mirrored minutes", (assert) => {
    assert.plan(1)
    assert.equal(mirrorMinutes(122), 598)
  })
})

test.skip("Challenge Tests", (t) => {
  t.test("Basic Test", (assert) => {
    assert.plan(1)
    assert.equal(WhatIsTheTime("06:35"), "05:25")
  })

  t.test("Basic Test", (assert) => {
    assert.plan(1)
    assert.equal(WhatIsTheTime("11:59"), "12:01")
  })
  t.test("Basic Test", (assert) => {
    assert.plan(1)
    assert.equal(WhatIsTheTime("12:02"), "11:58")
  })
  t.test("Basic Test", (assert) => {
    assert.plan(1)
    assert.equal(WhatIsTheTime("06:00"), "06:00")
  })
})
