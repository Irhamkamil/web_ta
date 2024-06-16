class sessionStorageServices {
    static set(key, value) {
        return sessionStorage.setItem(key, value)                
    }

    static get(key) {
        return sessionStorage.getItem(key)
    }

    static remove(key) {
        return sessionStorage.removeItem(key)
    }
}

export default sessionStorageServices;