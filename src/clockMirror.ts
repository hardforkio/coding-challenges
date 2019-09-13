// Taken from https://www.codewars.com/kata/clock-in-mirror/javascript
import R from "ramda"

const parseHours = R.pipe(
    R.head,
    parseInt,
    R.cond<number, number>([[R.equals(12), R.always(0)], [R.T, R.identity]]),
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

const doMirrorTime = R.subtract(12 * 60)

const asTwoCharacterStr = R.pipe(
    R.toString,
    R.concat("0"),
)

const toHourString = R.pipe(
    R.divide(R.__, 60),
    Math.floor,
    R.cond<number, string>([
        [R.equals(0), R.always("12")],
        [R.lt(R.__, 10), asTwoCharacterStr],
        [R.T, R.toString],
    ]),
)

const toMinutesString = R.pipe(
    R.modulo(R.__, 60),
    R.cond<number, string>([
        [R.lt(R.__, 10), asTwoCharacterStr],
        [R.T, R.toString],
    ]),
)

const customJoin = (x: string, y: string) => R.join(":", [x, y])

const toClockString = R.converge(customJoin, [toHourString, toMinutesString])

export const whatIsTheTime = R.pipe(
    toTotalMinutes,
    doMirrorTime,
    toClockString,
)
