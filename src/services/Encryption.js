import { encode, decode } from 'js-base64';

// Docs : https://www.npmjs.com/package/js-base64
class EncryptionServices {

    /**
     * Base64 encryption
     * @param {*} text 
     * @returns 
     */
    static base64Encrypt(text) {
        return encode(text)
    }

    /**
     * Base64 decryption
     * @param {*} payload 
     * @returns 
     */
    static base64Decrypt(payload) {
        return decode(payload)
    }
}

export default EncryptionServices;