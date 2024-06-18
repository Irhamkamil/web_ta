import FirebaseServices from "../services/Firebase";
import { doc, getDoc, collection, getDocs, query, where, limit, setDoc } from "firebase/firestore";
import Config from "../config/app";
import Moment from "moment";

class User {
    // state = {
    //     // diambil dari id pada input
    //     email: "",
    //     password: "",
    //     address: "",
    //     country: "",
    //     phone: "",
    //     displayName: "",
    //     username: "",
    //     redirectToHome: false
    //   };

    /**
     * Check username exist
     * @param {*} username 
     * @returns 
     */
    static isUserNameExist(username) {
        return new Promise((resolve, reject) => {
            const q = query(collection(FirebaseServices.firestore(), Config.firestore.users), where('username', '==', username));
            getDocs(q).then((results) => {
                if (results.size > 0) {
                    return resolve(true)
                } else {
                    return resolve(false)
                }
            }).catch((error) => {
                return reject(error)
            })
        })
    }

    /**
     * Save user data
     * @param {*} email 
     * @param {*} password 
     * @param {*} address 
     * @param {*} country 
     * @param {*} phone 
     * @param {*} displayName 
     * @param {*} username 
     * @returns 
     */
    static save(email, password, address, country, phone, displayName, username) {
        return new Promise((resolve, reject) => {
            setDoc(doc(collection(FirebaseServices.firestore(), Config.firestore.users)), {
                email: email,
                password: password,
                address: address,
                country: country,
                phone: phone,
                displayName: displayName,
                username: username,
                timestamp: Moment().format('MMMM DD, YYYY HH:mm:ss'),
            }).then((results) => {
                return resolve(results)
            }).catch((error) => {
                return reject(error)
            })
        });
    }
}

export default User;