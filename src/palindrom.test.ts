import test from "tape"
import { isPalindrom } from "./palindrom"

test("The word if it can be read from the front as well as the back in the same way", (assert) => {
    assert.ok(isPalindrom('racecar'), 'racecar')
    assert.ok(isPalindrom('Anna'), 'Anna')
    assert.notOk(isPalindrom('table'), 'table')
    assert.end()
})
