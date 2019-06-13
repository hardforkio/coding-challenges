//https://www.codewars.com/kata/sum-of-positive/javascript

const sumOfPositive = (array) => {
let result = 0
for (let i = 0; i < array.length; i++) {
    if(array[i] > 0) {
        result = result + array[i]
    }
}
return result
}

module.exports = { sumOfPositive }
