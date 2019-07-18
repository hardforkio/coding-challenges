const test = require('tape')
const { decrypt, encrypt } = require('./simpleEncryption')
const {
  filterStringByIndexProperty,
  isEven,
  not,
  repeated,
  ciphertextIndexToPlaintextIndex,
  plaintextIndexToCiphertextIndex,
  range,
} = require('./simpleEncryptionHelpers')
test('Solution', function(t) {
  t.test('EncryptExampleTests', function(assert) {
    assert.equal(encrypt('0101', 1), '1100', 'swapped halves?')
    assert.equal(encrypt('0123456789', 1), '1357902468')
    assert.equal(encrypt('012', 1), '102', 'encrypt odd length')
    assert.equals(
      encrypt('This is a test!', 0),
      'This is a test!',
      'Encrypt 0 times'
    )
    assert.equals(
      encrypt('This is a test!', 1),
      'hsi  etTi sats!',
      'Encrypt once.'
    )
    assert.equals(encrypt('This is a test!', 2), 's eT ashi tist!')
    assert.equals(encrypt('This is a test!', 3), ' Tah itse sits!')
    assert.equals(encrypt('This is a test!', 4), 'This is a test!')
    assert.equals(encrypt('This is a test!', -1), 'This is a test!')
    assert.equals(
      encrypt('This kata is very interesting!', 1),
      'hskt svr neetn!Ti aai eyitrsig'
    )
    assert.end()
  })
})

test('Solution', function(t) {
  t.test('DecryptExampleTests', function(assert) {
    assert.equals(
      decrypt('This is a test!', 0),
      'This is a test!',
      'Do not decrypt'
    )
    assert.equals(decrypt('135024', 1), '012345', '1 step decryption')
    assert.equals(
      decrypt('hsi  etTi sats!', 1),
      'This is a test!',
      '1 step decryption'
    )
    assert.equal(encrypt('102', 1), '012', 'decrypt odd length')
    assert.equals(
      decrypt('s eT ashi tist!', 2),
      'This is a test!',
      'Two step decryption'
    )
    assert.equals(decrypt(' Tah itse sits!', 3), 'This is a test!')
    assert.equals(decrypt('This is a test!', 4), 'This is a test!')
    assert.equals(decrypt('This is a test!', -1), 'This is a test!')
    assert.equals(
      decrypt('hskt svr neetn!Ti aai eyitrsig', 1),
      'This kata is very interesting!'
    )
    assert.end()
  })
})
