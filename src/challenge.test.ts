import {
  isValidWalk,
  isTenMinutesLong,
  walkOneStepHorrizontally,
  walkOneStepVertically,
  returnsToOriginVertically,
  returnsToOriginHorrizontally,
} from './challenge'

const walkSouthNorthValid = ['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']
const walkEastWestValid = [
  'w',
  'e',
  'w',
  'e',
  'w',
  'e',
  'w',
  'e',
  'w',
  'e',
  'w',
  'e',
]

describe('isValidWalk', () => {
  test('Should return true if walk is 10 steps long and returns to origin', () => {
    expect(isValidWalk(walkSouthNorthValid)).toEqual(true)
  })
  test('Should return false, if walk is too long', () => {
    expect(isValidWalk(walkEastWestValid)).toEqual(false)
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

describe('walkOneStepHorrizontally', () => {
  test('should return second argument decreased by one by one given w', () => {
    expect(walkOneStepHorrizontally(0, 'w')).toEqual(-1)
  })
  test('should return second argument increased by one by one given e', () => {
    expect(walkOneStepHorrizontally(0, 'e')).toEqual(1)
  })
})
describe('walkOneStepVertically', () => {
  test('should return second argument decreased by one by one given n', () => {
    expect(walkOneStepVertically(0, 'n')).toEqual(-1)
  })
  test('should return second argument increased by one by one given s', () => {
    expect(walkOneStepVertically(0, 's')).toEqual(1)
  })
})

describe('returnsToOriginVertically', () => {
  test('should return true given ["n", "s"]', () => {
    expect(returnsToOriginVertically(['n', 's'])).toEqual(true)
  })
  test('should return true given ["n", "n"]', () => {
    expect(returnsToOriginVertically(['n', 'n'])).toEqual(false)
  })
  test('should return true given a valid walk', () => {
    expect(returnsToOriginVertically(walkSouthNorthValid)).toEqual(true)
  })
  test('should return true given a valid walk, even if it contains neither n nor s', () => {
    expect(returnsToOriginVertically(walkEastWestValid)).toEqual(true)
  })
})

describe('returnsToOriginHorrizontally', () => {
  test('should return false, given ["e", "e"]', () => {
    expect(returnsToOriginHorrizontally(['e', 'e'])).toEqual(false)
  })
  test('should return true, given ["e","w"]', () => {
    expect(returnsToOriginHorrizontally(['e', 'w'])).toEqual(true)
  })
  test('should return true, given a valid walk', () => {
    expect(returnsToOriginHorrizontally(walkEastWestValid)).toEqual(true)
  })
  test('should return true, given a valid walk, even if it contains neither e nor w', () => {
    expect(returnsToOriginHorrizontally(walkSouthNorthValid)).toEqual(true)
  })
})
