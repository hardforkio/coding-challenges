import test from "tape"
import { isValidWalk } from "./challenge"

test("Should check for a valid walking time and end point", (assert) => {
  assert.equal(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]), true, "is a valid walk")
  assert.equal(isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"]), false, "walk is too long")
  assert.equal(isValidWalk(["w"]), false, "walk is too short")
  assert.equal(isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"]), false, "does not retun at home")
  assert.equal(isValidWalk(["n", "n", "n", "s", "s", "s", "n", "n", "s", "s"]), true, "is valid")
  assert.equal(isValidWalk(["n", "s", "e", "w", "w", "w", "e", "e", "n", "s"]), true, "is valid")
  assert.end()
})
