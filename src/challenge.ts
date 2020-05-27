// https://www.codewars.com/kata/54da539698b8a2ad76000228

import R from 'ramda'

type possition = { toNorth: number; toWest: number }

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

export const walkReducer = (acc: possition, curr: string) =>
  walkEvolver(curr)(acc)

export const returnsToOrigin = (walk: string[]): any => R.pipe(
    R.reduce(walkReducer, { toNorth: 0, toWest: 0 }),
    R.juxt([R.prop('toWest'), R.prop('toNorth')]),
    R.map(R.equals(0)),
    R.tap(console.log))

export const isTenMinutesLong = (walk: string[]): boolean => walk.length === 10

export const isValidWalk = (walk: string[]): boolean =>
  isTenMinutesLong(walk) ? returnsToOrigin(walk) : false
