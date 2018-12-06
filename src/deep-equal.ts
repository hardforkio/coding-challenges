import * as R from "ramda"

const identical: (a: number, b: number) => boolean = R.identical

export const deepEqualIfArraysHaveSameLength: (
  array1: number[],
  array2: number[],
) => boolean = R.pipe(
  R.zipWith(identical),
  R.reduce<boolean, boolean>(R.and, true),
)

const lengthOfSecondArg: (
  array1: number[],
  array2: number[],
) => number = R.flip(R.length)

export const haveSameLength: (
  array1: number[],
  array2: number[],
) => boolean = R.converge(R.identical, [R.length, lengthOfSecondArg])

export const deepEqual: (
  array1: number[],
  array2: number[],
) => boolean = R.ifElse(
  haveSameLength,
  deepEqualIfArraysHaveSameLength,
  R.always(false),
)
