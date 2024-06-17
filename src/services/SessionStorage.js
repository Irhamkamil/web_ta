// Docs : https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage
class sessionStorageServices {

    /**
     * Set session storage
     * @param {*} key 
     * @param {*} value 
     * @returns 
     */
    static set(key, value) {
        return sessionStorage.setItem(key, value)                
    }

    /**
     * Get session storage
     * @param {*} key 
     * @returns 
     */
    static get(key) {
        return sessionStorage.getItem(key)
    }

    /**
     * Remove session storage
     * @param {*} key 
     * @returns 
     */
    static remove(key) {
        return sessionStorage.removeItem(key)
    }
}

export default sessionStorageServices;