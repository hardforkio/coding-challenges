// implement a deep equal comparision with ramda between two arrays

import * as R from "ramda"

const identical: (a: number, b: number) => boolean = R.identical

export const deepEqualIfArraysHaveSameLength: (
  array1: number[],
  array2: number[],
) => boolean = R.pipe(
  R.zipWith(identical),
  R.reduce<boolean, boolean>(R.and, true),
)

const lengthOfFirstList: (array: number[], array2: number[]) => number = R.pipe(
  R.nthArg(0),
  R.length,
)

const lengthOfSecondList: (
  array1: number[],
  array2: number[],
) => number = R.pipe(
  R.nthArg(1),
  R.length,
)

export const haveSameLength: (
  array1: number[],
  array2: number[],
) => boolean = R.converge(R.identical, [lengthOfFirstList, lengthOfSecondList])

export const deepEqual: (
  array1: number[],
  array2: number[],
) => boolean = R.ifElse(
  haveSameLength,
  deepEqualIfArraysHaveSameLength,
  R.always(false),
)
