const R = require('ramda')

const isEven = (n) => n % 2 === 0

const not = (booleanValuedFunc) => (...args) => !booleanValuedFunc(...args)

const stringConcat = (acc, str) => acc + str

const indexedFilter = R.addIndex(R.filter)

const indexMatchesPredicate = (predicate) =>
  R.pipe(
    R.nthArg(1),
    predicate
  )

const filterIfIndexMatchesPredicate = (predicate) =>
  indexedFilter(indexMatchesPredicate(predicate))

const filterStringByIndexProperty = (text, predicate) =>
  R.pipe(
    filterIfIndexMatchesPredicate(predicate),
    R.join('')
  )(text)

const range = (n) => [...Array(n).keys()]

const repeated = (f) => (x, n) => range(Math.max(n, 0)).reduce(f, x)

const ciphertextIndexToPlaintextIndex = (i, length) =>
  i < Math.floor(length / 2) ? 2 * i + 1 : 2 * (i - Math.floor(length / 2))

const plaintextIndexToCiphertextIndex = (i, length) =>
  i % 2 ? Math.floor(i / 2) : Math.floor(i / 2) + Math.floor(length / 2)

module.exports = {
  isEven,
  not,
  stringConcat,
  filterStringByIndexProperty,
  repeated,
  range,
  ciphertextIndexToPlaintextIndex,
  plaintextIndexToCiphertextIndex,
}
