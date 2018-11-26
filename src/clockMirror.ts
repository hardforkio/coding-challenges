//Taken from https://www.codewars.com/kata/clock-in-mirror/javascript

import * as R from 'ramda'

export const checkForLength2OrThrow = R.ifElse(
  R.pipe(
    R.length,
    R.equals(2)
  ),
  R.identity,
  () => {
    throw new Error('Invalid input!')
  }
)

export const splitAtColon: (input: string) => [string, string] = R.pipe(
  R.split(':'),
  checkForLength2OrThrow
)

export const hourFromTimeString: (timeString: string) => number = R.pipe(
  splitAtColon,
  R.nth(0) as (input: [string, string]) => string,
  parseInt,
  R.modulo(R.__, 12)
)

export const minutesFromTimeString: (timeString: string) => number = R.pipe(
  splitAtColon,
  R.nth(1) as (input: [string, string]) => string,
  parseInt
)

export const padToTwoDigits: (hours: string) => string = R.invoker(
  2,
  'padStart'
)(2)('0')

export const ifZeroThenTwelve: (input: number) => number = R.ifElse(
  R.equals(0),
  R.always(12),
  R.identity
)

export const getHour: (input: number) => string = R.pipe(
  R.divide(R.__, 60),
  Math.floor,
  ifZeroThenTwelve,
  R.toString,
  padToTwoDigits
)

export const getMinutes: (input: number) => string = R.pipe(
  R.modulo(R.__, 60),
  Math.floor,
  R.toString,
  padToTwoDigits
)

export const calculateResultInMinutes = R.converge(R.multiply(60), [
  hourFromTimeString,
  minutesFromTimeString,
])

export const WhatIsTheTime: (timeInMirror: string) => string = (
  timeInMirror
) => {
  //"05:25" --> "06:35";
  // Happy Coding

  const resultInMinutes =
    720 -
    (hourFromTimeString(timeInMirror) * 60 +
      minutesFromTimeString(timeInMirror))

  return `${getHour(resultInMinutes)}:${getMinutes(resultInMinutes)}`
}
