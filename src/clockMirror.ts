// Taken from https://www.codewars.com/kata/clock-in-mirror/javascript
const R = require("ramda");
const {
  timestampToMinutes,
  minutesToTimestamp
} = require("./clockMirrorHelpers");

const strangeTimetoModulo720Time = (t: number) => t - 60;
const modulo720TimeToStrangeTime = (t: number) => t + 60;

//fixme more descriptive name
const weirdCoordinteSystemOriginToGoodCoordinateSystemOrigin = (t: number) =>
  ((t - 11 * 60) % 12) * 60;
const goodCoordinteSystemOriginToWeirdCoordinateSystemOrigin = (t: number) =>
  ((t + 11 * 60) % 12) * 60;

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
