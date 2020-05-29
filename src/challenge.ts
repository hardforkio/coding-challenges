// https://www.codewars.com/kata/54da539698b8a2ad76000228

import R from 'ramda'

type Possition = { toNorth: number; toWest: number }

const walkEvolver = (direction: string) => {
  switch (direction) {
    case 'n':
      return R.evolve({ toNorth: R.add(1) })
    case 's':
      return R.evolve({ toNorth: R.add(-1) })
    case 'w':
      return R.evolve({ toWest: R.add(1) })
    case 'e':
      return R.evolve({ toWest: R.add(-1) })
    default:
      return R.evolve({})
  }
}

export const selectEvolverAccordingToLetterAndApplyToAccumulator = (
  accumulator: Possition,
  letter: string,
): Possition => walkEvolver(letter)(accumulator)

export const returnsToOrigin: (walk: string[]) => boolean = R.pipe(
  R.reduce(selectEvolverAccordingToLetterAndApplyToAccumulator, {
    toNorth: 0,
    toWest: 0,
  }),
  R.values,
  R.all(R.equals(0)),
)

export const isTenMinutesLong = R.pipe<string[], number, boolean>(
  R.prop('length'),
  R.equals(10),
)

export const isValidWalk = R.ifElse(
  isTenMinutesLong,
  returnsToOrigin,
  isTenMinutesLong,
)
