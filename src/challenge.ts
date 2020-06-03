// https://www.codewars.com/kata/54da539698b8a2ad76000228

import R from 'ramda'

type Possition = { toNorth: number; toWest: number }

export const walkOneStepVertically: (
  possition: number,
  direction: string,
) => number = R.cond([
  [
    R.pipe(
      R.nthArg(1),
      R.equals('n'),
    ),
    R.add(-1),
  ],
  [
    R.pipe(
      R.nthArg(1),
      R.equals('s'),
    ),
    R.add(1),
  ],
  [R.T, R.identity],
])
export const walkOneStepHorrizontally: (
  possition: number,
  direction: string,
) => number = R.cond([
  [
    R.pipe(
      R.nthArg(1),
      R.equals('w'),
    ),
    R.add(-1),
  ],
  [
    R.pipe(
      R.nthArg(1),
      R.equals('e'),
    ),
    R.add(1),
  ],
  [R.T, R.identity],
])

export const returnsToOriginVertically: (walk: string[]) => boolean = R.pipe(
  R.reduce(walkOneStepVertically, 0),
  R.equals(0),
)

export const returnsToOriginHorrizontally: (walk: string[]) => boolean = R.pipe(
  R.reduce(walkOneStepHorrizontally, 0),
  R.equals(0),
)

export const isTenMinutesLong = R.pipe<string[], number, boolean>(
  R.prop('length'),
  R.equals(10),
)

export const isValidWalk = R.allPass([
  isTenMinutesLong,
  returnsToOriginHorrizontally,
  returnsToOriginVertically,
])
