// https://www.codewars.com/kata/mumbling/javascript

import R from "ramda"

const mapIndexed = R.addIndex(R.map)

export const accum = R.pipe(
  R.toLower,
  R.split(""),
  mapIndexed((char: any, idx: number) => R.toUpper(char) + R.join("", R.repeat(char, idx))),
  R.join("-"),
)
