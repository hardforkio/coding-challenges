import { isValidWalk, isTenMinutesLong, returnsToOrigin } from './challenge'

describe('isValidWalk', () => {
  test('Should return true if walk is 10 steps long and returns to origin', () => {
    expect(
      isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']),
    ).toEqual(true)
  })
  test('Should return false, if walk is too long', () => {
    expect(
      isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']),
    ).toEqual(false)
  })
  test('should return false, if walk is too short', () => {
    expect(isValidWalk(['w'])).toEqual(false)
  })
  test('should return false, if walk does not return', () => {
    expect(
      isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']),
    ).toEqual(false)
  })
})

describe('isTenMinutesLong', () => {
  test('should return true if walk is 10 minutes long', () => {
    expect(
      isTenMinutesLong(['n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n']),
    ).toEqual(true)
  })
  test('Should return false, if walk is less than 10 minutes long', () => {
    expect(isTenMinutesLong(['n', 'n', 'n', 'n', 'n'])).toEqual(false)
  })
  test('Should return false, if walk is more than 10 minutes long', () => {
    expect(
      isTenMinutesLong([
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
        'n',
      ]),
    ).toEqual(false)
  })
})

describe('returnsToOrigin', () => {
  test('should return true, as walk returns to origin', () => {
    expect(returnsToOrigin(['n', 's', 'w', 'e'])).toEqual(true)
  })
  test('Should return false, as walk does not return to origin', () => {
    expect(returnsToOrigin(['n', 'n', 'e', 's'])).toEqual(false)
  })
  test('Should return true, as walk does not leave origin', () => {
    expect(returnsToOrigin([])).toEqual(true)
  })
})
