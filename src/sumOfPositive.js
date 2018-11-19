//https://www.codewars.com/kata/sum-of-positive/javascript
const R = require('ramda')

const secondArgIsPositive = R.pipe(
  R.nthArg(1),
  R.gt(R.__, 0)
)

const addSecondArgIffPositive = R.ifElse(secondArgIsPositive, R.add, R.identity)

const sumOfPositive = R.reduce(addSecondArgIffPositive, 0)

module.exports = { sumOfPositive }
