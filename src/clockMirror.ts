// Taken from https://www.codewars.com/kata/clock-in-mirror/javascript
const R = require("ramda");
const {
  timestampToMinutes,
  minutesToTimestamp,
  strangeTimetoModulo720Time,
  modulo720TimeToStrangeTime,
  weirdCoordinteSystemOriginToGoodCoordinateSystemOrigin,
  goodCoordinteSystemOriginToWeirdCoordinateSystemOrigin
} = require("./clockMirrorHelpers");

export const crazyTimeNotationToSaneTimeNotation = R.pipe(
  timestampToMinutes,
  strangeTimetoModulo720Time,
  weirdCoordinteSystemOriginToGoodCoordinateSystemOrigin
);

export const saneTimeNotationToCrazyTimeNotation = R.pipe(
  goodCoordinteSystemOriginToWeirdCoordinateSystemOrigin,
  modulo720TimeToStrangeTime,
  minutesToTimestamp
);

export const WhatIsTheTime = (timeInMirror: string) =>
  R.pipe(
    crazyTimeNotationToSaneTimeNotation,
    (t: number) => -t, //Inverts position of clock hand
    saneTimeNotationToCrazyTimeNotation
  )(timeInMirror);
