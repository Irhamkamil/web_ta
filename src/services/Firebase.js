import Config from "../config/app";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import sessionStorageServices from "./SessionStorage";
import { getFirestore } from "firebase/firestore";

// Docs : https://firebase.google.com/docs/web/setup
class FirebaseServices {

    /**
     * Initialize firebase app
     * @returns 
     */
    static app() {
        return initializeApp(Config.firebase);
    }

    /**
     * Get firebase analytics
     * @returns 
     */
    static analytics() {
        return getAnalytics(this.app());
    }

    /**
     * Return file storage uri
     * @param {*} filepath 
     * @returns 
     */
    static fileStorageUri(filepath) {
        return "https://firebasestorage.googleapis.com/v0/b/"+ Config.firebase.storageBucket +"/o/"+ encodeURIComponent(filepath) +"?alt=media"
    }

    /**
     * Create user
     * @param {*} email 
     * @param {*} password 
     * @returns 
     */
    static createUser(email, password) {
        return createUserWithEmailAndPassword(getAuth(this.app()), email, password);
    }

    /**
     * Sign in user
     * @param {*} email 
     * @param {*} password 
     * @returns 
     */
    static signInUser(email, password) {
        return signInWithEmailAndPassword(getAuth(this.app()), email, password);
    }

    /**
     * Determine user is logged in or not
     */
    static isLoggedIn() {
        return [undefined, '', null].includes(sessionStorageServices.get('user_email')) == false &&
                [undefined, '', null].includes(sessionStorageServices.get('user_uid')) == false
    }

    /**
     * Get firestore
     * @returns
     */
    static firestore() {
        return getFirestore(this.app());
    }
}

export default FirebaseServices;