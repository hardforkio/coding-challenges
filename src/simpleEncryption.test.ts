import test from "tape"
import { decrypt, encrypt } from "./simpleEncryption"

test("Solution", (t) => {
  t.test("EncryptExampleTests", (assert) => {
    assert.equals(encrypt("This is a test!", 0), "This is a test!")
    assert.equals(encrypt("This is a test!", 1), "hsi  etTi sats!")
    assert.equals(encrypt("This is a test!", 2), "s eT ashi tist!")
    assert.equals(encrypt("This is a test!", 3), " Tah itse sits!")
    assert.equals(encrypt("This is a test!", 4), "This is a test!")
    assert.equals(encrypt("This is a test!", -1), "This is a test!")
    assert.equals(
      encrypt("This kata is very interesting!", 1),
      "hskt svr neetn!Ti aai eyitrsig",
    )
    assert.end()
  })
})

test("Solution", (t) => {
  t.test("DecryptExampleTests", (assert) => {
    assert.equals(decrypt("This is a test!", 0), "This is a test!")
    assert.equals(
      decrypt("hsi  etTi sats!", 1),
      "This is a test!",
      "1 step decryption",
    )
    assert.equals(
      decrypt("s eT ashi tist!", 2),
      "This is a test!",
      "Two step decryption",
    )
    assert.equals(decrypt(" Tah itse sits!", 3), "This is a test!")
    assert.equals(decrypt("This is a test!", 4), "This is a test!")
    assert.equals(decrypt("This is a test!", -1), "This is a test!")
    assert.equals(
      decrypt("hskt svr neetn!Ti aai eyitrsig", 1),
      "This kata is very interesting!",
    )
    assert.end()
  })
})

test("Solution", (t) => {
  t.test("Null or Empty", (assert) => {
    assert.equals(encrypt("", 0), "")
    assert.equals(decrypt("", 0), "")
    assert.equals(encrypt(null, 0), null)
    assert.equals(decrypt(null, 0), null)
    assert.end()
  })
})
