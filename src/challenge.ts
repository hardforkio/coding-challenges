// https://www.codewars.com/kata/54da539698b8a2ad76000228
import * as R from "ramda"

const isNotTenMinutes = R.pipe<string[], number, boolean, boolean>(
  R.length,
  R.equals(10),
  R.not
)

const returnedToStart = (walk: string[]) => {
  let vertical = 0
  let horizontal = 0
  return R.reduce((isHome, direction) => {
    if (direction === "n") {
      vertical += 1
    }
    if (direction === "s") {
      vertical -= 1
    }
    if (direction === "e") {
      horizontal += 1
    }
    if (direction === "w") {
      horizontal -= 1
    }
    if (vertical === 0 && horizontal === 0) {
      return true
    }
    return false
  }, false)(walk)
}

export const isValidWalk: (walk: string[]) => boolean = R.cond([
  [isNotTenMinutes, R.always(false)],
  [returnedToStart, R.always(true)],
  [R.T, R.always(false)]
])
