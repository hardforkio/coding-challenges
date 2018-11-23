const test = require('tape')
const { accum } = require('./mumbling')

test('Simple Test', function(t) {
  t.test('1', function(assert) {
    assert.plan(1)
    assert.equal(
      accum('ZpglnRxqenU'),
      'Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu'
    )
  })
  t.test('2', function(assert) {
    assert.plan(1)
    assert.equal(
      accum('NyffsGeyylB'),
      'N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb'
    )
  })
})
