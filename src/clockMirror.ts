// Taken from https://www.codewars.com/kata/clock-in-mirror/javascript
import R from "ramda"

import * as M from "ts.data.maybe"

const map = R.curry(M.map)
const maybe = R.curry((defaultValue: string, instance: M.Maybe<string>) =>
    M.withDefault(instance, defaultValue),
)

const validateInputString = R.ifElse(R.test(/^\d\d:\d\d$/), M.just, M.nothing)

const highNoon2Noon = R.ifElse(R.equals(12), R.always(0), R.identity)
const noon2HighNoon = R.ifElse(R.equals(0), R.always(12), R.identity)

const parseHours = R.pipe(
    R.head,
    parseInt,
    highNoon2Noon,
    R.multiply(60),
)

const parseMinutes = R.pipe(
    R.tail,
    parseInt,
)

export const toTotalMinutes = R.pipe(
    R.split(":"),
    R.converge(R.add, [parseHours, parseMinutes]),
)

const doMirroring = R.subtract(12 * 60)

const asTwoCharacterString = R.pipe(
    R.toString,
    R.concat("0"),
)

const formatAsString = R.ifElse(
    R.lt(R.__, 10),
    asTwoCharacterString,
    R.toString,
)

const toHourString = R.pipe(
    R.divide(R.__, 60),
    Math.floor,
    noon2HighNoon,
    formatAsString,
)

const toMinutesString = R.pipe(
    R.modulo(R.__, 60),
    formatAsString,
)

const joinAsClockString = (x: string, y: string) => R.join(":", [x, y])

export const toClockString = R.converge(joinAsClockString, [
    toHourString,
    toMinutesString,
])

export const whatIsTheTime = R.pipe(
    validateInputString,
    map(toTotalMinutes),
    map(doMirroring),
    map(toClockString),
    maybe("Invalid Input String."),
)
