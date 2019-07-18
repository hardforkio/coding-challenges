//Taken from https://www.codewars.com/kata/simple-encryption-number-1-alternating-split/javascript

const {
  repeated,
  stringConcat,
  plaintextIndexToCiphertextIndex,
  ciphertextIndexToPlaintextIndex,
} = require('./simpleEncryptionHelpers')

const encryptOnce = (plaintext) => {
  let ciphertext = Array(plaintext.length)
  for (let i = 0; i < ciphertext.length; i++)
    ciphertext[i] =
      plaintext[ciphertextIndexToPlaintextIndex(i, plaintext.length)]

  return ciphertext.reduce(stringConcat)
}

const decryptOnce = (ciphertext) => {
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
}
