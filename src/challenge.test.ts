import { accum } from './challenge'

test('Should add two numbers', () => {
  expect(accum('ZpglnRxqenU')).toEqual(
    'Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu',
  )
})

test('Should add two numbers', () => {
  expect(accum('NyffsGeyylB')).toEqual(
    'N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb',
  )
})
