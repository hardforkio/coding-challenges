import * as R from "ramda"
import test from "tape"
import { createTicker, Ticker } from "./ticker"
const sleep: (time: number) => Promise<void> = (time: number) =>
  new Promise((resolve) => setTimeout(resolve, time))

test("Ticks when I start", async (assert) => {
  let myTimeLeft
  const ticker: Ticker = createTicker(
    (timeLeft) => (myTimeLeft = timeLeft),
    10,
    1,
  )
  ticker.start()
  await sleep(3)
  ticker.reset()
  await sleep(20)
  assert.equal(myTimeLeft, 0)
  assert.end()
})

test("reset to start", async (assert) => {
  let myTimeLeft
  const ticker: Ticker = createTicker(
    (timeLeft) => (myTimeLeft = timeLeft),
    10,
    1,
  )
  R.times(ticker.tick, 5)
  ticker.reset()
  ticker.tick()
  assert.equal(myTimeLeft, 9)
  assert.end()
})

test("should be zero after ten ticks", async (assert) => {
  assert.plan(1)
  let myTimeLeft
  const ticker: Ticker = createTicker(
    (timeLeft) => (myTimeLeft = timeLeft),
    10,
    1,
  )
  R.times(ticker.tick, 10)
  assert.equal(myTimeLeft, 0)
})
