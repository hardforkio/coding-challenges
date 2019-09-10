import R from "ramda"
import test from "tape"
import {
    applyN,
    concatByIndexParity,
    isOdd,
    normalize,
    splitInHalf,
} from "./simpleEncryption"

test("ImplementationTests", (t) => {
    t.test("ParityTests", (assert) => {
        assert.equals(isOdd(0), false)
        assert.equals(isOdd(1), true)
        assert.equals(isOdd(2), false)
        assert.equals(isOdd(1949), true)
        assert.end()
    })
    t.test("ConcatParityTests", (assert) => {
        assert.deepEquals(concatByIndexParity(["", ""], "xyz", 0), ["", "xyz"])
        assert.deepEquals(concatByIndexParity(["", ""], "xyz", 1), ["xyz", ""])
        assert.deepEquals(concatByIndexParity(["a", "b"], "c", 0), ["a", "bc"])
        assert.deepEquals(concatByIndexParity(["a", "b"], "c", 1), ["ac", "b"])
        assert.end()
    })
    t.test("ApplyNTimesTests", (assert) => {
        assert.equals(applyN(R.add(1), 0, 5), 5)
        assert.equals(applyN(R.add(1), 0, 0), 0)
        assert.equals(applyN(R.multiply(1), 1, 0), 1)
        assert.equals(applyN(R.multiply(2), 1, 5), 32)
        assert.equals(applyN(R.flip(R.concat)("b"), "a", 5), "abbbbb")
        assert.end()
    })
    t.test("NormalizeTests", (assert) => {
        assert.deepEquals(normalize(""), [])
        assert.deepEquals(normalize("strin"), ["s", "t", "", "r", "i", "n"])
        assert.deepEquals(normalize("ab"), ["a", "b"])
        assert.end()
    })
    t.test("SplitInHalfTest", (assert) => {
        assert.deepEquals(splitInHalf([]), [[], []])
        assert.deepEquals(splitInHalf(["a", "b"]), [["a"], ["b"]])
        assert.deepEquals(splitInHalf([1, 2, 3, 4]), [[1, 2], [3, 4]])
        assert.end()
    })
})
