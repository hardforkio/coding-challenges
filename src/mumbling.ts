// https://www.codewars.com/kata/mumbling/javascript
import R from "ramda"

const mapIndexed = R.addIndex<string, string>(R.map)

export const repeatNTimes = (name: string, n: number) =>
    R.join("", R.repeat(name, n + 1))

export const capitalize = R.converge(R.concat, [
    R.pipe(
        R.head,
        R.toUpper,
    ),
    R.tail,
])

export const mumble = R.pipe(
    R.toLower,
    R.split(""),
    mapIndexed(repeatNTimes),
    R.map(capitalize),
    R.join("-"),
)
