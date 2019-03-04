import test from "tape"
import { callbackStyleFunctionType, promisify } from "./promisify"

const checkValueCallbackStyle: callbackStyleFunctionType = (
  value,
  callback,
) => {
  if (value === 5) {
    return callback(null, "success")
  }
  return callback(new Error(`${value} was not 5!`))
}

test("It should correctly resolve the promise with 5", (assert) => {
  const checkValuePromiseStyle = promisify(checkValueCallbackStyle)
  return checkValuePromiseStyle(5).then((result) => {
    assert.equal(result, "success")
    assert.end()
  })
})

test("It should correctly reject the promise with 2", (assert) => {
  const checkValuePromiseStyle = promisify(checkValueCallbackStyle)
  return checkValuePromiseStyle(2).catch((error) => {
    assert.equal(error.message, "2 was not 5!")
    assert.end()
  })
})
