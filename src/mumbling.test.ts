import test from "tape"
import { capitalize, mumble, repeatNTimes } from "./mumbling"

test("Test helpers", (t) => {
    t.test("Repeat N times", (assert) => {
        assert.plan(6)
        assert.equal(repeatNTimes("", 0), "")
        assert.equal(repeatNTimes("a", 0), "a")
        assert.equal(repeatNTimes("a", 1), "aa")
        assert.equal(repeatNTimes("ab", 2), "ababab")
        assert.equal(repeatNTimes("X", 3), "XXXX")
        assert.equal(repeatNTimes("Xy", 4), "XyXyXyXyXy")
    })
    t.test("Capitalize", (assert) => {
        assert.plan(6)
        assert.equal(capitalize(""), "")
        assert.equal(capitalize("."), ".")
        assert.equal(capitalize(".a"), ".a")
        assert.equal(capitalize("a"), "A")
        assert.equal(capitalize("aa"), "Aa")
        assert.equal(capitalize("X"), "X")
    })
})

test("Test mumbling", (t) => {
    t.test("1", (assert) => {
        assert.plan(1)
        assert.equal(
            mumble("ZpglnRxqenU"),
            "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"
        )
    })
    t.test("2", (assert) => {
        assert.plan(1)
        assert.equal(
            mumble("NyffsGeyylB"),
            "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb"
        )
    })
})
