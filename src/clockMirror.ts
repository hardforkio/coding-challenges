// Taken from https://www.codewars.com/kata/clock-in-mirror/javascript
const R = require("ramda");
const {
  timestampToMinutes,
  minutesToTimestamp
} = require("./clockMirrorHelpers");

const HOUR = 60;
const inputTimeToModuloTime = (time: number) => time - 1 * HOUR;
const moduloTimeToInputTime = (time: number) => time + 1 * HOUR;

const transformToBestCoordinateSystem = (time: number) =>
  (time - 11 * HOUR) % (12 * HOUR);
const transformToOriginalCoordinateSystem = (time: number) =>
  (time + 11 * HOUR) % (12 * HOUR);

export const originalTimeNotationToBestTimeNotation = R.pipe(
  timestampToMinutes,
  inputTimeToModuloTime,
  transformToBestCoordinateSystem
);

export const bestTimeNotationToOriginalTimeNotation = R.pipe(
  transformToOriginalCoordinateSystem,
  inputTimeToModuloTime,
  minutesToTimestamp
);

export const WhatIsTheTime = (timeInMirror: string) =>
  R.pipe(
    originalTimeNotationToBestTimeNotation,
    (t: number) => -t, //Inverts position of clock hand
    bestTimeNotationToOriginalTimeNotation
  )(timeInMirror);
