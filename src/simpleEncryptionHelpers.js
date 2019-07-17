const R = require('ramda')

const stringConcat = (acc, str) => acc + str

const range = (n) => [...Array(n).keys()]

const repeated = (f) => (x, n) => range(Math.max(n, 0)).reduce(f, x)

const ciphertextIndexToPlaintextIndex = (i, length) =>
  i < Math.floor(length / 2) ? 2 * i + 1 : 2 * (i - Math.floor(length / 2))

const plaintextIndexToCiphertextIndex = (i, length) =>
  i % 2 ? Math.floor(i / 2) : Math.floor(i / 2) + Math.floor(length / 2)

module.exports = {
  stringConcat,
  repeated,
  range,
  ciphertextIndexToPlaintextIndex,
  plaintextIndexToCiphertextIndex,
}
