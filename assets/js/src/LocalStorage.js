class LocalStorage {
    constructor() {

    }

    setItem(key, value) {
        let fValue = typeof value == Array || Object ? JSON.stringify(value) : value;

        localStorage.setItem(key, fValue);
    }

    getItem(key) {
        let value = localStorage.getItem(key);
        let fValue = typeof value == Array || Object ? JSON.parse(value) : value;

        return fValue;
    }

    removeItem(key){
        localStorage.removeItem(key)
    }
}

let ls = new LocalStorage;