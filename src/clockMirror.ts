// Taken from https://www.codewars.com/kata/clock-in-mirror/javascript
import R from "ramda"
import {
  bestTimeNotationToOriginalTimeNotation,
  originalTimeNotationToBestTimeNotation,
} from "./clockMirrorHelpers"

export const WhatIsTheTime = (timeInMirror: string) =>
  R.pipe(
    originalTimeNotationToBestTimeNotation,
    (t: number) => -t,
    bestTimeNotationToOriginalTimeNotation,
  )(timeInMirror)
