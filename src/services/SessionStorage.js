class sessionStorageServices {
    static set(key, value) {
        sessionStorage.setItem(key, value)                
    }

    static get(key) {
        sessionStorage.getItem(key)
    }
}

export default sessionStorageServices;