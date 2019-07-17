//Taken from https://www.codewars.com/kata/simple-encryption-number-1-alternating-split/javascript

const {
  isEven,
  not,
  filterStringByIndexProperty,
  repeated,
  stringConcat,
  plaintextIndexToCiphertextIndex,
} = require('./simpleEncryptionHelpers')

const encryptOnce = (cleartext) => {
  const substring_of_even_positions = filterStringByIndexProperty(
    cleartext,
    isEven
  )
  const substring_of_odd_positions = filterStringByIndexProperty(
    cleartext,
    not(isEven)
  )
  return substring_of_odd_positions + substring_of_even_positions
}

const decryptOnce = (ciphertext) => {
  /*Decrypt simply shuffles the text according to a permutation of indices
    Encrypt shuffles according to the inverse permutation
    Note this allows a more elegant implementation of encrypt (TODO)*/

  let plaintext = Array(ciphertext.length)
  for (let i = 0; i < ciphertext.length; i++)
    plaintext[i] =
      ciphertext[plaintextIndexToCiphertextIndex(i, ciphertext.length)]

  return plaintext.reduce(stringConcat)
}

const encrypt = repeated(encryptOnce)
const decrypt = repeated(decryptOnce)

module.exports = {
  decrypt,
  encrypt,
  filterStringByIndexProperty,
  plaintextIndexToCiphertextIndex,
}
