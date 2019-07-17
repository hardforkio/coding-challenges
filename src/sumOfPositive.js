//https://www.codewars.com/kata/sum-of-positive/javascript

const isPositiveNumber = (n) => n > 0
const sum = (acc, x) => acc + x
const sumOfPositive = (array) => array.filter(isPositiveNumber).reduce(sum, 0)

module.exports = { sumOfPositive }
