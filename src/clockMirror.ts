// Taken from https://www.codewars.com/kata/clock-in-mirror/javascript

import * as R from "ramda"

export const checkForLength2OrThrow = R.ifElse(
  R.pipe(
    R.length,
    R.equals(2),
  ),
  R.identity,
  () => {
    throw new Error("Invalid input!")
  },
)

export const splitAtColon: (input: string) => [string, string] = R.pipe(
  R.split(":"),
  checkForLength2OrThrow,
)

export const hourFromTimeString: (timeString: string) => number = R.pipe(
  splitAtColon,
  R.nth(0) as (input: [string, string]) => string,
  parseInt,
  R.modulo(R.__, 12),
)

export const minutesFromTimeString: (timeString: string) => number = R.pipe(
  splitAtColon,
  R.nth(1) as (input: [string, string]) => string,
  parseInt,
)

export const padToTwoDigits: (hours: string) => string = R.invoker(
  2,
  "padStart",
)(2)("0")

export const ifZeroThenTwelve: (input: number) => number = R.ifElse(
  R.equals(0),
  R.always(12),
  R.identity,
)

export const getHour: (input: number) => string = R.pipe(
  R.divide(R.__, 60),
  Math.floor,
  ifZeroThenTwelve,
  R.toString,
  padToTwoDigits,
)

export const getMinutes: (input: number) => string = R.pipe(
  R.modulo(R.__, 60),
  R.toString,
  padToTwoDigits,
)

export const toMinutes: (hours: number, minutes: number) => number = R.useWith(
  R.add,
  [R.multiply(60), R.identity],
)

export const timeStringToMinutes: (timeInMirror: string) => number = R.converge(
  toMinutes,
  [hourFromTimeString, minutesFromTimeString],
)

export const minutesToTimeString: (minutes: number) => string = R.converge(
  R.concat,
  [
    R.pipe(
      getHour,
      R.concat(":"),
    ),
    getMinutes,
  ],
)

export const mirrorMinutes: (minutes: number) => number = R.subtract(720)

export const WhatIsTheTime: (timeInMirror: string) => string = R.pipe(
  timeStringToMinutes,
  mirrorMinutes,
  minutesToTimeString,
)
