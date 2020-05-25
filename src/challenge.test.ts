import test from 'tape'
import * as C from './challenge'

test('Should check for a valid walking time and end point', assert => {
  assert.equal(
    C.isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']),
    true,
    'is a valid walk'
  )
  assert.equal(
    C.isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']),
    false,
    'walk is too long'
  )
  assert.equal(C.isValidWalk(['w']), false, 'walk is too short')
  assert.equal(
    C.isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']),
    false,
    'does not retun at home'
  )
  assert.end()
})

test('test if walk is 10 steps i.e. 10 minutes long', assert => {
  assert.equal(
    C.isTenMinutesLong(['n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n']),
    true,
    'is ten steps long'
  )
  assert.equal(
    C.isTenMinutesLong(['n', 'n', 'n', 'n', 'n']),
    false,
    'is shorter than 10 steps'
  )
  assert.equal(
    C.isTenMinutesLong([
      'n',
      'n',
      'n',
      'n',
      'n',
      'n',
      'n',
      'n',
      'n',
      'n',
      'n',
      'n',
      'n'
    ]),
    false,
    'is more than ten steps long'
  )
  assert.end()
})

test('should check if walk returns to origin', assert => {
  assert.equal(
    C.returnsToOrigin(['n', 's', 'w', 'e']),
    true,
    'returns to origin'
  )
  assert.equal(
    C.returnsToOrigin(['n', 'n', 'e', 's']),
    false,
    'does not return to origin'
  )
  assert.equal(
    C.returnsToOrigin([]),
    true,
    'does not leave origin, therefore valid'
  )
  assert.end()
})
