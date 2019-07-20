// Taken from https://www.codewars.com/kata/clock-in-mirror/javascript
import R from "ramda";
import {
  originalTimeNotationToBestTimeNotation,
  bestTimeNotationToOriginalTimeNotation
} from "./clockMirrorHelpers";

export const WhatIsTheTime = (timeInMirror: string) =>
  R.pipe(
    originalTimeNotationToBestTimeNotation,
    (t: number) => -t,
    bestTimeNotationToOriginalTimeNotation
  )(timeInMirror);
