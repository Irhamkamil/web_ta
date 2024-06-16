import { encode, decode } from 'js-base64';

class EncryptionServices {
    static base64Encrypt(text) {
        return encode(text)
    }

    static base64Decrypt(payload) {
        return decode(payload)
    }
}

export default EncryptionServices;