import {
  mumble,
  repeatLetter1TimesAndNMinusOneTimesLowerCase,
  allLettersMumbled,
  takeLetterFromOriginalStringAndAddMumbledSylable,
  extractFirstLetterOfOriginalAndSylableListLength,
  upperOfLetter,
  repeatLetterNTimesLower,
  makeSylable
} from './challenge'

describe('mumble', () => {
  test('Should return mumbled string', () => {
    expect(mumble('ZpglnRxqenU')).toEqual(
      'Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu'
    )
  })

  test('Should return mumbled string', () => {
    expect(mumble('NyffsGeyylB')).toEqual(
      'N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb'
    )
  })
})

describe('repeatLetter1TimesAndNMinuesOneTimesLowerCase', () => {
  test('Should return Xxxxx given [x, 4]', () => {
    expect(repeatLetter1TimesAndNMinusOneTimesLowerCase(['x', 4])).toEqual(
      'Xxxxx'
    )
  })

  test('Should return Aaaa given [x, 3]', () => {
    expect(repeatLetter1TimesAndNMinusOneTimesLowerCase(['a', 3])).toEqual(
      'Aaaa'
    )
  })
  test('Should return B given [b, 0]', () => {
    expect(repeatLetter1TimesAndNMinusOneTimesLowerCase(['b', 0])).toEqual('B')
  })

  describe('upperOfLetter', () => {
    test('should take letter in pos 0 and return uppercase', () => {
      expect(upperOfLetter(['a', 5])).toEqual('A')
    })
  })
  describe('repeatLetterNTimesLower', () => {
    test('should repeat letter in pos 0 n times with n in pos 1', () => {
      expect(repeatLetterNTimesLower(['a', 5])).toEqual('aaaaa')
    })
  })
})

describe('allLetterMumbled', () => {
  test('should return true, if original string is empty', () => {
    expect(allLettersMumbled({ original: [], sylables: [] })).toEqual(true)
  })
  test('should return true, if original string contains letters', () => {
    expect(allLettersMumbled({ original: ['a'], sylables: [] })).toEqual(false)
  })
})

describe('takeLetterFromOriginalStringAndAddMumbledSylable', () => {
  test('should remove letter from original and add mumbled sylable to sylables', () => {
    expect(
      takeLetterFromOriginalStringAndAddMumbledSylable({
        original: ['a'],
        sylables: ['x']
      })
    ).toEqual({ original: [], sylables: ['x', 'Aa'] })
  })
  test('should remove one letter from original and add mumbled sylable to sylables', () => {
    expect(
      takeLetterFromOriginalStringAndAddMumbledSylable({
        original: ['a', 'b'],
        sylables: ['x']
      })
    ).toEqual({ original: ['b'], sylables: ['x', 'Aa'] })
  })
})

describe('extractFirstLetterOfOriginalAndSylableListLength', () => {
  test('should return first letter of original list and length of sylable list', () => {
    expect(
      extractFirstLetterOfOriginalAndSylableListLength({
        original: ['a', 'b'],
        sylables: ['x']
      })
    ).toEqual(['a', 1])
  })
  test('should return length zero for empty sylable list', () => {
    expect(
      extractFirstLetterOfOriginalAndSylableListLength({
        original: ['a', 'b'],
        sylables: []
      })
    ).toEqual(['a', 0])
  })
})

describe('makeSylable', () => {
  test('should create sylable according to mubledString state', () => {
    expect(
      makeSylable({
        original: ['a', 'b'],
        sylables: ['x']
      })
    ).toEqual('Aa')
  })
})
