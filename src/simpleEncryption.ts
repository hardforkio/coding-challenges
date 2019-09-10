// Taken from https://www.codewars.com/kata/simple-encryption-number-1-alternating-split/javascript
import R from "ramda"

const reduceIndexed = R.addIndex<string, string[]>(R.reduce)

export const isOdd = (n: number) => Boolean(n % 2)

export const concatByIndexParity = (
    stringTuple: string[],
    singleCharacter: string,
    index: number,
) => {
    return isOdd(index)
        ? [stringTuple[0].concat(singleCharacter), stringTuple[1]]
        : [stringTuple[0], stringTuple[1].concat(singleCharacter)]
}

const encryptOnce = R.pipe(
    R.split(""),
    reduceIndexed(concatByIndexParity, ["", ""]),
    R.join(""),
)

const halfRoundedDown = R.pipe(
    R.length as any,
    R.divide(R.__, 2),
    Math.floor,
)

export const splitInHalf = R.converge(R.splitAt, [halfRoundedDown, R.identity])

const insertEmptyChar = R.converge(R.insert, [
    halfRoundedDown,
    R.always(""),
    R.identity,
])

const hasOddLength = R.pipe<string[], number, number, boolean>(
    R.length,
    isOdd,
)

const makeEvenLength = R.cond([
    [hasOddLength, insertEmptyChar],
    [R.T, R.identity],
])

export const normalize: (input: string | null) => string[] = R.cond([
    [R.isNil, R.always([""])],
    [
        R.T,
        R.pipe(
            R.split(""),
            makeEvenLength,
        ),
    ],
])

const mergeStrings: (splitInput: string[][]) => string[][] = R.apply(
    R.flip<string[], string[], string[][]>(R.zip as any),
)

const denormalize = R.pipe(
    R.flatten as any,
    R.join(""),
)
const decryptOnce = R.pipe<
    string | null,
    string[],
    string[][],
    string[][],
    string
>(
    normalize,
    splitInHalf,
    mergeStrings,
    denormalize,
)

const createArray = (size: number) => new Array(R.max(size, 0))

export const applyN = R.useWith(R.reduce, [R.identity, R.identity, createArray])

export const encrypt = applyN(encryptOnce)

export const decrypt = applyN(decryptOnce)
