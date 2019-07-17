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
    assert.equals(encrypt('This is a test!', 0), 'This is a test!')
    assert.equals(encrypt('This is a test!', 1), 'hsi  etTi sats!')
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
    assert.equals(decrypt('This is a test!', 0), 'This is a test!')
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

test('Solution', function(t) {
  t.test('Null or Empty', function(assert) {
    assert.equals(encrypt('', 0), '')
    assert.equals(decrypt('', 0), '')
    assert.equals(encrypt(null, 0), null)
    assert.equals(decrypt(null, 0), null)
    assert.end()
  })
})

test('Test Helpers', function(t) {
  t.test('Test FiltersByIndexProperty', function(assert) {
    assert.equals(
      filterStringByIndexProperty('0123456789', isEven),
      '02468',
      'Test with even'
    )
    assert.equals(
      filterStringByIndexProperty('0123456789', not(isEven)),
      '13579',
      'Test with odd'
    )
    assert.end()
  })

  t.test('Test not', (assert) => {
    assert.equals(not(() => true)(23), false, 'negation')
    assert.end()
  })

  t.test('Test even', (assert) => {
    assert.equals(isEven(5), false, 'even false case')
    assert.equals(isEven(0), true, 'even true case zero')
    assert.end()
  })

  t.test('Test repeat', (assert) => {
    const increment = (x) => x + 1
    assert.equals(repeated(increment)(0, 5), 5, 'increment 0 five times')
    assert.equals(repeated(increment)(42, 0), 42, 'increment 42 zero times')
    assert.equals(
      repeated(increment)(42, -1),
      repeated(increment)(42, 0),
      'increment a negative number of times, should be like 0 times'
    )
    assert.end()
  })

  t.test('Test range', (assert) => {
    assert.deepEqual(range(6), [0, 1, 2, 3, 4, 5])
    assert.deepEqual(range(0), [], 'empty range')
    assert.end()
  })
})

test('PermutationTests', (t) => {
  t.test('Encrypt', function(assert) {
    assert.deepEqual(
      [0, 1, 2, 3, 4, 5, 6, 7].map((x) =>
        ciphertextIndexToPlaintextIndex(x, 8)
      ),
      [1, 3, 5, 7, 0, 2, 4, 6]
    )
    assert.end()
  })
  t.test('Decrypt', function(assert) {
    assert.deepEqual(
      [0, 1, 2, 3, 4, 5, 6, 7].map((x) =>
        plaintextIndexToCiphertextIndex(x, 8)
      ),
      [4, 0, 5, 1, 6, 2, 7, 3]
    )
    assert.end()
  })

  t.test('EncryptInverseOfDecrypt', function(assert) {
    const indices = [0, 1, 2, 3, 4, 5, 6, 7]
    assert.deepEqual(
      indices.map((x) =>
        plaintextIndexToCiphertextIndex(
          ciphertextIndexToPlaintextIndex(x, indices.length),
          indices.length
        )
      ),
      indices
    )
    assert.end()
  })
})
