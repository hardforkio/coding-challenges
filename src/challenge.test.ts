import { accum, addSummand, createSummand } from './challenge'

test('Should return mumbled string', () => {
  expect(accum('ZpglnRxqenU')).toEqual(
    'Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu',
  )
})

test('Should return mumbled string', () => {
  expect(accum('NyffsGeyylB')).toEqual(
    'N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb',
  )
})

test('Should add entry to list of mubled string sylables', () => {
  expect(addSummand(['A', 'Bb', 'Ccc'], 'n')).toEqual([
    'A',
    'Bb',
    'Ccc',
    'Nnnn',
  ])
})

test('Should return Xxxxx', () => {
  expect(createSummand('X', 4)).toEqual('Xxxxx')
})

test('Should return Aaaa', () => {
  expect(createSummand('a', 3)).toEqual('Aaaa')
})
