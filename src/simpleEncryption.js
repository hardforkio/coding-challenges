//Taken from https://www.codewars.com/kata/simple-encryption-number-1-alternating-split/javascript
const R = require('ramda')
const { repeated } = require('./simpleEncryptionHelpers')

const isOdd = (value) => !!(value % 2)
const indexIsOdd = (_, index) => isOdd(index)
const indexIsEven = (_, index) => !(index % 2)

const takeCharsWithOddPosition = R.addIndex(R.filter)(indexIsOdd)
const takeCharsWithEvenPosition = R.addIndex(R.filter)(indexIsEven)

const ifArrayHasOddLengthInsertPlaceholderInTheMiddle = (value) => {
  if (isOdd(value.length)) {
    return R.insert(Math.floor(value.length / 2), '', value)
  }
  return value
}

const takeSecondHalf = (value) => R.slice(value.length / 2, Infinity, value)
const takeFirstHalf = (value) => R.slice(0, value.length / 2, value)

const encryptOnce = R.pipe(
  R.converge(R.concat, [takeCharsWithOddPosition, takeCharsWithEvenPosition]),
  R.join('')
)

const decryptOnce = R.pipe(
  R.split(''),
  ifArrayHasOddLengthInsertPlaceholderInTheMiddle,
  R.converge(R.zip, [takeSecondHalf, takeFirstHalf]),
  R.flatten,
  R.join('')
)

const encrypt = repeated(encryptOnce)
const decrypt = repeated(decryptOnce)

module.exports = {
  decrypt,
  encrypt,
}
