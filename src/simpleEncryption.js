const R = require('ramda')

const even = (_, index) => (Number(index) + 1) % 2
const odd = (_, index) => Number(index) % 2

function encrypt(text, n) {
  if (n < 1 || !text) {
    return text
  }
  return new Array(n)
    .fill(0)
    .reduce((acc) => acc.filter(odd).concat(acc.filter(even)), text.split(''))
    .join('')
}

const splitInHalf = (inputArray) => {
  const firstHalf = inputArray.slice(0, Math.floor(inputArray.length / 2))
  const secondHalf = inputArray.slice(Math.floor(inputArray.length / 2))
  if (firstHalf.length < secondHalf.length) {
    firstHalf.push('')
  }
  return [firstHalf, secondHalf]
}

const reducer = (acc) => {
  const [firstHalf, secondHalf] = splitInHalf(acc)
  return R.pipe(
    R.flip(R.zip)(firstHalf),
    R.flatten,
    R.join(''),
    R.split('')
  )(secondHalf)
}

function decrypt(encryptedText, n) {
  if (n < 1 || !encryptedText) {
    return encryptedText
  }

  return R.pipe(
    R.reduce(reducer, encryptedText.split('')),
    R.join('')
  )(new Array(n).fill(0))
}

module.exports = {
  decrypt,
  encrypt,
  splitInHalf,
}
