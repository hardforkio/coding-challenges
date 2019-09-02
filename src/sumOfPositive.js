//https://www.codewars.com/kata/sum-of-positive/javascript
const R = require('ramda')

const isPositive = n => n > 0

const sum = R.reduce(R.add, 0)
const sumOfPositive = R.pipe(R.filter(isPositive), sum)

module.exports = { sumOfPositive }
