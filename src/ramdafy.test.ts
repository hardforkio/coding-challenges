import test from "tape"
import { getUpdatePerson } from "./ramdafy"

const person = {
  id: 1,
  name: "Joe",
}

test("Ramdafy", (assert) => {
  const personUpdated = {
    avatar: "https://img.socialnetwork.com/avatar/1.png",
    id: 1,
    name: "Joe",
  }
  assert.deepEqual(
    getUpdatePerson(person),
    personUpdated,
    "opjects are equivalent",
  )
  assert.end()
})
