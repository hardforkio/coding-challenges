//Taken from https://www.codewars.com/kata/simple-encryption-number-1-alternating-split/javascript
const R = require('ramda')

const {
  filterStringByIndexProperty,
  repeated,
  stringConcat,
  plaintextIndexToCiphertextIndex,
} = require('./simpleEncryptionHelpers')

const encryptOnce = (cleartext) => {
  const isOdd = (i) => !!(i % 2)

  const cleartextAsArray = R.split('', cleartext)

  const arrayOfEvenPositions = R.addIndex(R.filter)(
    (_, i) => !isOdd(i),
    cleartextAsArray
  )

  const arrayOfOddPositions = R.addIndex(R.filter)(
    (_, i) => isOdd(i),
    cleartextAsArray
  )

  return R.join('', arrayOfOddPositions) + R.join('', arrayOfEvenPositions)
}

const decryptOnce = (ciphertext) => {
  const firstHalf = ciphertext.substring(0, Math.floor(ciphertext.length / 2)) //odd positions
  const secondHalf = ciphertext.substring(Math.floor(ciphertext.length / 2))

  const firstHalfAsArray = R.split('', firstHalf)
  const secondHalfAsArray = R.split('', secondHalf)

  const zipped = R.zip(secondHalfAsArray, firstHalfAsArray)

  const flat = R.flatten(zipped)

  if (ciphertext.length % 2) flat.push(secondHalfAsArray.pop())

  return R.join('', flat)
}

const encrypt = repeated(encryptOnce)
const decrypt = repeated(decryptOnce)

module.exports = {
  decrypt,
  encrypt,
  filterStringByIndexProperty,
  plaintextIndexToCiphertextIndex,
}
