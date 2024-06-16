import Config from "../config/app";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import sessionStorageServices from "./SessionStorage";

class FirebaseServices {
    static app() {
        return initializeApp(Config.firebase);
    }

    static analytics() {
        return getAnalytics(this.app());
    }

    static fileStorageUri(filepath) {
        return "https://firebasestorage.googleapis.com/v0/b/"+ Config.firebase.storageBucket +"/o/"+ encodeURIComponent(filepath) +"?alt=media"
    }

    static createUser(email, password) {
        return createUserWithEmailAndPassword(getAuth(this.app()), email, password);
    }

    static signInUser(email, password) {
        return signInWithEmailAndPassword(getAuth(this.app()), email, password);
    }

    static isLoggedIn() {
        return [undefined, '', null].includes(sessionStorageServices.get('user_email')) == false &&
                [undefined, '', null].includes(sessionStorageServices.get('user_uid')) == false
    }
}

export default FirebaseServices;