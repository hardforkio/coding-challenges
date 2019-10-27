// https://www.codewars.com/kata/54da539698b8a2ad76000228
import * as R from "ramda"

type Walk = string[]

const isNotTenMinutes = R.pipe<Walk, number, boolean, boolean>(
  R.length,
  R.equals(10),
  R.not
)

export const getDistanceInDirection: (
  direction: string
) => (walk: Walk) => number = direction =>
  R.pipe<Walk, string[], number>(
    R.filter(R.equals(direction)),
    R.length
  )

const isverticalHome: (walk: Walk) => boolean = R.converge(R.equals, [
  getDistanceInDirection("n"),
  getDistanceInDirection("s")
])
const ishorizontalHome: (walk: Walk) => boolean = R.converge(R.equals, [
  getDistanceInDirection("e"),
  getDistanceInDirection("w")
])

const returnedToStart: (walk: Walk) => boolean = R.converge(R.equals, [
  isverticalHome,
  ishorizontalHome
])

export const isValidWalk: (walk: Walk) => boolean = R.cond([
  [isNotTenMinutes, R.always(false)],
  [returnedToStart, R.always(true)],
  [R.T, R.always(false)]
])
