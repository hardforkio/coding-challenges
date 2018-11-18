const test = require('tape')
const { callbackify } = require('./callbackify')
const promiseGeneratingFunction = (value) => {
  if (value === 5) {
    return Promise.resolve('success')
  }
  return Promise.reject(new Error(`${value} is not 5!`))
}

test('It should call the callback with success', (assert) => {
  const callbackStyleFunction = callbackify(promiseGeneratingFunction)
  callbackStyleFunction(5, (err, result) => {
    assert.error(err)
    assert.equal(result, 'success')
    assert.end()
  })
})

test('It should call the callback with error', (assert) => {
  const callbackStyleFunction = callbackify(promiseGeneratingFunction)
  callbackStyleFunction(2, (err) => {
    assert.equal(err.message, '2 is not 5!')
    assert.end()
  })
})
