import * as C from './challenge'

test('Should return mumbled string', () => {
  expect(C.accum('ZpglnRxqenU')).toEqual(
    'Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu'
  )
})

test('Should return mumbled string', () => {
  expect(C.accum('NyffsGeyylB')).toEqual(
    'N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb'
  )
})

test('Should add entry to list of mubled string sylables', () => {
  expect(
    C.createSubstringFromLetterAndAddToList(['A', 'Bb', 'Ccc'], 'N')
  ).toEqual(['A', 'Bb', 'Ccc', 'Nnnn'])
})

test('Should return Xxxxx', () => {
  expect(C.repeatLetter1TimesAndNMinusOneTimesLowerCase('X', 4)).toEqual(
    'Xxxxx'
  )
})

test('Should return Aaaa', () => {
  expect(C.repeatLetter1TimesAndNMinusOneTimesLowerCase('A', 3)).toEqual('Aaaa')
})
