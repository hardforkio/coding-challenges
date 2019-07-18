const R = require("ramda");

// Taken from https://www.codewars.com/kata/clock-in-mirror/javascript

//Return number TODO express in typescript
const timestampToMinutes = (stringTime: string) => {
  //parse string... use library TODO
};

//fixme: specify type as integer, not number
const minutesToTimestamp = (minutes: number) => {
  const h = minutes / 60;
  const m = minutes % 60;
  return `${h}:${m}`;
};

const strangeTimetoModulo720Time = (t: number) => t - 60;
const modulo720TimeToStrangeTime = (t: number) => t + 60;

//todo more descriptive name
const weirdCoordinteSystemOriginToGoodCoordinateSystemOrigin = (t: number) =>
  ((t - 11 * 60) % 12) * 60;
const GoodCoordinteSystemOriginToWeirdCoordinateSystemOrigin = (t: number) =>
  ((t + 11 * 60) % 12) * 60;

//keep this name, however
const crazyTimeNotationToSaneTimeNotation = R.pipe(
  timestampToMinutes,
  strangeTimetoModulo720Time,
  weirdCoordinteSystemOriginToGoodCoordinateSystemOrigin
);

const saneTimeNotationToCrazyTimeNotation = R.pipe(
  GoodCoordinteSystemOriginToWeirdCoordinateSystemOrigin,
  modulo720TimeToStrangeTime,
  minutesToTimestamp
);

export const WhatIsTheTime = (timeInMirror: string) =>
  R.pipe(
    crazyTimeNotationToSaneTimeNotation,
    (t: number) => -t, //Inverts position of clock hand
    saneTimeNotationToCrazyTimeNotation
  )(timeInMirror);
